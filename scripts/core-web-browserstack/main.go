package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"strings"
	"sync"
	"syscall"
	"time"

	"github.com/hashicorp/go-version"
	"github.com/mrhenry/web-tests/scripts/browserstack"
	"github.com/tebeka/selenium"
	"golang.org/x/sync/semaphore"
)

var tests = []string{
	"packages/core-web-tests/index-browsers.html",
	"packages/core-web-tests/index-engines.html",
	"packages/core-web-tests/qsa-browsers.html",
	"packages/core-web-tests/qsa-engines.html",
}

func main() {
	processCtx, processCancel := context.WithTimeout(context.Background(), time.Minute*20)
	defer processCancel()

	runnerCtx, runnerCancel := context.WithCancel(processCtx)
	defer runnerCancel()

	sigs := make(chan os.Signal, 1)
	signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)

	doneChan := make(chan bool, 1)

	go func() {
		<-sigs
		log.Println("shutting down")
		runnerCancel()

		time.Sleep(time.Second * 30)

		processCancel()

		time.Sleep(time.Second * 10)

		select {
		case doneChan <- true:
		default:
		}
	}()

	errChan := make(chan error, 1)
	exitCode := 0
	mu := sync.Mutex{}

	go func() {
		for err := range errChan {
			log.Println(err)

			mu.Lock()
			exitCode = 1
			mu.Unlock()
		}
	}()

	run(processCtx, runnerCtx, errChan)

	go func() {
		time.Sleep(time.Second * 10)

		select {
		case doneChan <- true:
		default:
		}
	}()

	<-doneChan
	os.Exit(exitCode)
}

func run(processCtx context.Context, runnerCtx context.Context, errChan chan error) {
	doneChan := make(chan bool, 1)
	ctx, cancel := context.WithTimeout(runnerCtx, time.Minute*15)
	defer cancel()

	go func() {
		select {
		case <-runnerCtx.Done():
			time.Sleep(time.Second * 10)

			select {
			case doneChan <- true:
				// noop
				return
			default:
				// noop
				return
			}
		}
	}()

	select {
	case <-processCtx.Done():
		return
	default:
	}

	sessionName := fmt.Sprintf("Core Web – %s", time.Now().Format(time.RFC3339))
	userName := os.Getenv("BROWSERSTACK_USERNAME")
	accessKey := os.Getenv("BROWSERSTACK_ACCESS_KEY")

	client := browserstack.New(browserstack.Config{
		UserName:  userName,
		AccessKey: accessKey,
	})

	done, err := client.OpenTunnel(processCtx)
	defer done()
	if err != nil {
		errChan <- err
		return
	}

	log.Println("tunnel ready")

	allBrowsers, err := client.ReducedBrowsers(ctx)
	if err != nil {
		errChan <- err
		return
	}

	sema := semaphore.NewWeighted(4)

	for _, browser := range allBrowsers {
		if err := sema.Acquire(ctx, 1); err != nil {
			errChan <- err
			return
		}

		go func(b browserstack.Browser) {
			defer sema.Release(1)

			select {
			case <-runnerCtx.Done():
				return
			default:
			}

			time.Sleep(time.Second * 5)

			err = runTest(ctx, client, b, sessionName)
			if err != nil {
				{
					time.Sleep(time.Second * 2)
					err1 := runTest(ctx, client, b, sessionName)
					time.Sleep(time.Second * 2)
					err2 := runTest(ctx, client, b, sessionName)

					// 2 out of 3 is good enough
					if err1 == nil && err2 == nil {
						return
					}
				}

				errChan <- err
			}
		}(browser)
	}

	go func() {
		// Wait for all
		if err := sema.Acquire(ctx, 4); err != nil {
			errChan <- err
			return
		}

		err = done()
		if err != nil {
			errChan <- err
		}

		select {
		case doneChan <- true:
			// noop
		default:
			// noop
		}
	}()

	<-doneChan
}

func runTest(parentCtx context.Context, client *browserstack.Client, browser browserstack.Browser, sessionName string) error {
	ctx, cancel := context.WithTimeout(parentCtx, time.Minute*15)
	defer cancel()

	caps := client.SetCaps(selenium.Capabilities{
		"browserstack.local": "true",
		"browserstack.video": "false",
		// "browserstack.debug":       "true",
		// "browserstack.console":     "verbose",
		// "browserstack.networkLogs": "true",
		"build":       sessionName,
		"projectName": "@mrhenry/core-web-tests",
		"name":        fmt.Sprintf("%s - %s", "Core Web", browser.ResultKey()),
	})

	browserVersion, _ := reallyTolerantSemver(browser.BrowserVersion)
	osVersion, _ := reallyTolerantSemver(browser.OSVersion)

	if browser.Device != "" {
		caps["deviceName"] = browser.Device
		// caps["browserstack.appium_version"] = "1.8.0"
	}
	if browser.OS != "" {
		caps["platformName"] = browser.OS
	}
	if browser.OSVersion != "" {
		caps["platformVersion"] = browser.OSVersion
	}
	if browser.Browser != "" {
		caps["browserName"] = browser.Browser
	}
	if browser.BrowserVersion != "" {
		caps["browserVersion"] = browser.BrowserVersion
	}

	w3cCompatible := false
	if browser.Browser == "firefox" {
		if browserVersion != nil && browserVersion.Segments()[0] > 55 {
			w3cCompatible = true
		}
	} else if browser.Browser == "chrome" {
		if browserVersion != nil && browserVersion.Segments()[0] > 80 {
			w3cCompatible = true
		}
	} else if browser.OS == "ios" {
		if osVersion != nil && osVersion.Segments()[0] > 11 {
			w3cCompatible = true
		}
	} else if browser.Browser == "safari" {
		if browserVersion != nil && browserVersion.Segments()[0] > 11 {
			w3cCompatible = true
		}
	} else if browser.Browser == "edge" {
		if browserVersion != nil && browserVersion.Segments()[0] > 15 {
			w3cCompatible = true
		}
	}

	in := make(chan browserstack.Test, len(tests))
	out := make(chan browserstack.Test, len(tests))

	testResults := []browserstack.Test{}

	go func() {
		for _, test := range tests {
			select {
			case <-ctx.Done():
				if ctx.Err() == context.DeadlineExceeded {
					log.Println("test run deadline exceeded while sending tests to the runner")
				}
				close(in)
				return
			default:
			}

			in <- browserstack.Test{
				Path: test,
			}
		}

		close(in)
	}()

	go func() {
		for {
			select {
			case <-ctx.Done():
				if ctx.Err() == context.DeadlineExceeded {
					log.Println("test run deadline exceeded while waiting for Selemium results in main")
				}
				return
			case test, ok := <-out:
				if !ok {
					return
				}

				testResults = append(testResults, test)
			}
		}
	}()

	err := client.RunTest(ctx, caps, w3cCompatible, in, out)
	if err != nil {
		return err
	}

	for _, testResult := range testResults {
		if !testResult.Success() {
			return fmt.Errorf("Test %s failed - %s", testResult.Path, browser.ResultKey())
		}
	}

	return nil
}

var writeSema = semaphore.NewWeighted(1)

func reallyTolerantSemver(v string) (*version.Version, error) {
	switch strings.Count(v, ".") {
	case 2:
		return version.NewVersion(v)
	case 1:
		return version.NewVersion(v + ".0")
	case 0:
		return version.NewVersion(v + ".0.0")
	default:
		return version.NewVersion(v)
	}
}
