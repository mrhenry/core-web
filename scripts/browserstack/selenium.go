package browserstack

import (
	"context"
	"errors"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"sync"
	"time"

	"github.com/tebeka/selenium"
)

type Test struct {
	Path      string
	UserAgent string

	didRun  bool
	success bool

	err error

	start time.Time
	end   time.Time
}

func (x Test) Err() error {
	return x.err
}

func (x Test) DidRun() bool {
	return x.didRun
}

func (x Test) Success() bool {
	return x.success
}

func (x Test) Duration() time.Duration {
	return x.end.Sub(x.start)
}

func (x *Client) RunTest(parentCtx context.Context, caps selenium.Capabilities, w3cCompatible bool, in chan Test, out chan Test) error {
	select {
	case <-parentCtx.Done():
		return parentCtx.Err()
	default:
	}

	ctx, cancel := context.WithCancel(parentCtx)
	defer cancel()

	mu := &sync.RWMutex{}
	wg := &sync.WaitGroup{}

	// packages/core-web-tests

	respMap := map[string][]byte{}
	uaStrings := []string{}

	isFirefox := false
	if browser, ok := caps["browserName"].(string); ok && strings.ToLower(browser) == "firefox" {
		isFirefox = true
	}

	isFirefox17 := false
	if version, ok := caps["browserVersion"].(string); ok && strings.ToLower(version) == "17.0" && isFirefox {
		isFirefox17 = true
	}

	handler := http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		mu.RLock()
		defer mu.RUnlock()

		// "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
		// "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:29.0) Gecko/20100101 Firefox/29.0"
		if (isFirefox17 && strings.Contains(req.UserAgent(), "; rv:29.0)")) ||
			(isFirefox17 && strings.Contains(req.UserAgent(), "; rv:27.0)")) {
			log.Println("bad firefox detected", req.UserAgent())
			w.Header().Set("Content-Type", "text/html; charset=UTF-8")

			w.WriteHeader(http.StatusOK)
			w.Write([]byte(blockBadFirefoxUA))
			return
		}

		if b, ok := respMap[strings.TrimPrefix(req.URL.Path, "/")]; ok {
			if strings.Contains(req.Header.Get("Accept"), "text/html") {
				uaStrings = append(uaStrings, req.UserAgent())
				uaStrings = uniqueStringSlice(uaStrings)
			} else if strings.Contains(req.UserAgent(), "Trident/4.0") {
				uaStrings = append(uaStrings, req.UserAgent())
				uaStrings = uniqueStringSlice(uaStrings)
			}

			w.Header().Set("Content-Type", "text/html; charset=UTF-8")

			w.WriteHeader(http.StatusOK)
			w.Write(b)
			return
		}

		pwd, err := os.Getwd()
		if err != nil {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
			return
		}

		absPath, err := filepath.Abs(strings.TrimPrefix(req.URL.Path, "/"))
		if err != nil {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
			return
		}

		if !strings.HasPrefix(absPath, pwd) {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
			return
		}

		f, err := os.Open(absPath)
		if err != nil {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
			return
		}

		defer f.Close()

		if strings.HasSuffix(absPath, ".js") {
			w.Header().Set("Content-Type", "text/javascript; charset=UTF-8")
		} else if strings.HasSuffix(absPath, ".css") {
			w.Header().Set("Content-Type", "text/css; charset=UTF-8")
		}

		io.Copy(w, f)
		return
	})

	runChan := make(chan Test, 10)
	port, err := newTestServer(ctx, handler)
	if err != nil {
		return err
	}

	var wd selenium.WebDriver
	wdChan := make(chan selenium.WebDriver, 1)

	webDriverStartCtx, webDriverStartCancel := context.WithTimeout(ctx, time.Second*120)
	defer webDriverStartCancel()

	go func() {
		wd1, err := selenium.NewRemote(caps, "https://hub-cloud.browserstack.com/wd/hub")
		if err != nil {
			// TODO : create real retries
			if strings.Contains(err.Error(), "Could not start Mobile Browser") || strings.Contains(err.Error(), "All parallel tests are currently in use") {
				time.Sleep(time.Minute)
				wd1, err = selenium.NewRemote(caps, "https://hub-cloud.browserstack.com/wd/hub")
			}

			if err != nil {
				log.Printf("%v", caps)
				log.Println("new selenium remote : ", err)
				return
			}
		}

		select {
		case <-webDriverStartCtx.Done():
			defer wd1.Quit()
			defer wd1.Close()
		default:
			// noop
		}

		wdChan <- wd1
	}()

	select {
	case wd = <-wdChan:
		// noop
	case <-webDriverStartCtx.Done():
		return webDriverStartCtx.Err()
	}

	if wd == nil {
		return errors.New("webdriver remote not started")
	}

	if !w3cCompatible {
		wd.SetW3CCompatibility(false)
	}

	defer wd.Quit()
	defer wd.Close()

	go func() {
	SELENIUM_LOOP:
		for {
			select {
			case <-ctx.Done():
				if ctx.Err() == context.DeadlineExceeded {
					log.Println("test run deadline exceeded in SELENIUM_LOOP")
				}

				return
			case test := <-runChan:
				testDoneChan := make(chan bool, 1)

				go func(test Test) {
					result := runSeleniumTest(wd, port, test)

					mu.RLock()
					if len(uaStrings) > 0 {
						result.UserAgent = uaStrings[0]
					}
					mu.RUnlock()

					select {
					case out <- result:
						// noop
					case <-ctx.Done():
						// fallthrough
					}

					wg.Done()
					testDoneChan <- true
				}(test)

				select {
				case <-ctx.Done():
					if ctx.Err() == context.DeadlineExceeded {
						log.Println("test run deadline exceeded in SELENIUM_LOOP")
					}

					return
				case <-testDoneChan:
					continue SELENIUM_LOOP
				}
			}
		}
	}()

HTTP_CACHE_LOOP:
	for {
		select {
		case <-ctx.Done():
			if ctx.Err() == context.DeadlineExceeded {
				log.Println("test run deadline exceeded in HTTP_CACHE_LOOP")
			}

			return ctx.Err()
		case test, ok := <-in:
			if !ok {
				break HTTP_CACHE_LOOP
			}

			b, err := ioutil.ReadFile(strings.TrimPrefix(test.Path, "./"))
			if err != nil {
				test.err = err
				out <- test
				continue HTTP_CACHE_LOOP
			}

			mu.Lock()
			respMap[strings.TrimPrefix(test.Path, "./")] = b
			mu.Unlock()

			wg.Add(1)
			runChan <- test
		}
	}

	doneChan := make(chan bool, 1)

	go func() {
		wg.Wait()
		doneChan <- true
	}()

	select {
	case <-doneChan:
		// noop
	case <-ctx.Done():
		// We ignore ctx.Err() here as tests have their own validation outside this func
		// We just need a fallback for "<-doneChan"
		if ctx.Err() == context.DeadlineExceeded {
			log.Println("test run deadline exceeded while waiting for Selenium results in runner")
		}
		// noop
	}

	// TODO : this needs timeout handling
	err = wd.Close()
	if err != nil {
		return err
	}

	// TODO : this needs timeout handling
	err = wd.Quit()
	if err != nil {
		return err
	}

	return nil
}

func runSeleniumTest(wd selenium.WebDriver, port int, test Test) Test {
	test.start = time.Now()

	err := wd.Get(fmt.Sprintf("http://bs-local.com:%d/%s", port, strings.TrimPrefix(test.Path, "./")))
	if err != nil {
		test.end = time.Now()
		test.err = err
		return test
	}

	// First check if the page loaded and has our content before waiting for async tests
	err = wd.WaitWithTimeoutAndInterval(selenium.Condition(func(wd1 selenium.WebDriver) (bool, error) {
		return getBoolFromWebDriver(wd1, `return window.testLoaded;`)
	}), time.Second*60, time.Second)
	if err != nil {
		test.end = time.Now()
		test.err = err
		return test
	}

	loaded, err := getBoolFromWebDriver(wd, `return window.testLoaded;`)
	if err != nil {
		test.end = time.Now()
		test.err = err
		return test
	}

	if !loaded {
		test.end = time.Now()
		test.err = errors.New("test page not loaded")
		return test
	}

	test.didRun = true

	err = wd.WaitWithTimeoutAndInterval(selenium.Condition(func(wd1 selenium.WebDriver) (bool, error) {
		return getBoolFromWebDriver(wd1, `return (typeof window.testSuccess !== "undefined");`)
	}), time.Second*60, time.Second)
	if err != nil {
		test.end = time.Now()
		test.err = err
		return test
	}

	ok, err := getBoolFromWebDriver(wd, `return window.testSuccess;`)
	if err != nil {
		test.end = time.Now()
		test.err = err
		return test
	}

	test.end = time.Now()
	test.success = ok

	if !ok {
		test.err = errors.New("selenium test failed")
		return test
	}

	return test
}

func getBoolFromWebDriver(wd selenium.WebDriver, script string) (bool, error) {
	v, err := wd.ExecuteScript(script, nil)
	if err != nil {
		return false, err
	}

	if v == nil {
		return false, nil
	}

	if vv, ok := v.(bool); ok && vv == true {
		return vv, nil
	}

	return false, nil
}

func uniqueStringSlice(s []string) []string {
	track := make(map[string]bool, len(s))
	unique := make([]string, 0, len(s))
	for _, elem := range s {
		if elem == "" {
			continue
		}

		if _, ok := track[elem]; !ok {
			unique = append(unique, elem)
			track[elem] = true
		}
	}

	sort.Strings(unique)

	return unique
}

const blockBadFirefoxUA = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Blocked Firefox UA</title>

	<script>
		window.testLoaded = false;
	</script>
</head>
<body>
	
</body>
</html>

`
