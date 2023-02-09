package browserstack

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
	"sync"
	"time"
)

// WIP
func (x *Client) LocalState(parentCtx context.Context) ([]*Worker, error) {
	ctx, cancel := context.WithTimeout(parentCtx, time.Second*10)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, fmt.Sprintf("https://www.browserstack.com/local/v1/list?auth_token=%s&last=20", x.accessKey), nil)
	if err != nil {
		return nil, err
	}

	resp, err := x.http.Do(req)
	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	b, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	if strings.Contains(string(b), "HTTP Basic: Access denied.") {
		return nil, errors.New("Access denied")
	}

	log.Println(string(b))

	buf := bytes.NewBuffer(b)

	decoder := json.NewDecoder(buf)

	if resp.StatusCode != 200 {
		apiErr := &Error{}
		err := decoder.Decode(apiErr)
		if err != nil {
			return nil, err
		}

		return nil, apiErr
	}

	apiResp := []*Worker{}
	err = decoder.Decode(&apiResp)
	if err != nil {
		return nil, err
	}

	for _, worker := range apiResp {
		worker.client = x
	}

	return apiResp, nil
}

func (x *Client) OpenTunnel(parentCtx context.Context) (func() error, error) {
	cmdCtx, cmdCancel := context.WithCancel(parentCtx)
	errChan := make(chan error)

	var closer func() error

	{
		closed := false
		closerMu := sync.Mutex{}
		closer = func() error {
			closerMu.Lock()
			defer closerMu.Unlock()

			if closed {
				return nil
			}

			closed = true

			log.Println("closing BrowserStackLocal")
			cmdCancel()

			time.Sleep(time.Second * 15)

			select {
			case err := <-errChan:
				return err
			default:
				return nil
			}
		}
	}

	startCtx, startCancel := context.WithTimeout(parentCtx, time.Second*45)
	defer startCancel()

	readyChan := make(chan struct{})

	cmd, err := getLocalBinary(cmdCtx, x.accessKey, x.localIdentifier)
	if err != nil {
		return closer, err
	}

	{
		stdout, err := cmd.StdoutPipe()
		if err != nil {
			return closer, err
		}

		scanner := bufio.NewScanner(stdout)
		go func() {
			for scanner.Scan() {
				select {
				case <-cmdCtx.Done():
					return
				default:
				}

				txt := scanner.Text()
				if strings.Contains(txt, "You can now access your local server(s)") {
					select {
					case readyChan <- struct{}{}:
					default:
					}

				} else if strings.Contains(txt, "Press Ctrl-C to exit") {
					select {
					case readyChan <- struct{}{}:
					default:
					}
				}

				fmt.Printf("[tunnel] : %s\n", scanner.Text())
			}
		}()
	}

	{
		stderr, err := cmd.StderrPipe()
		if err != nil {
			return closer, err
		}

		scanner := bufio.NewScanner(stderr)
		go func() {
			for scanner.Scan() {
				select {
				case <-cmdCtx.Done():
					return
				default:
				}

				fmt.Printf("[tunnel] : error - %s\n", scanner.Text())
			}
		}()
	}

	go func() {
		err := cmd.Run()
		if err != nil && err.Error() != "signal: killed" {
			errChan <- err
		}

		log.Println("BrowserStackLocal done")
	}()

	select {
	case <-startCtx.Done():
		return closer, startCtx.Err()
	case <-readyChan:
		// continue
	}

	return closer, nil
}
