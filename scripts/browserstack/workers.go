package browserstack

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"sync"
	"time"
)

type Worker struct {
	client *Client
	closed bool
	mu     sync.Mutex

	ID             int    `json:"id"`
	Browser        string `json:"browser"`
	BrowserVersion string `json:"browser_version,version"`
	OS             string `json:"os"`
	OSVersion      string `json:"os_version"`
	SessionID      string `json:"sessionId,session_id"`
	Status         string `json:"status"`
	URL            string `json:"browser_url"`
}

func (x *Worker) Close() error {
	x.mu.Lock()
	defer x.mu.Unlock()

	if x == nil {
		return nil
	}

	if x.closed {
		return nil
	}

	success, err := x.client.DeleteWorker(context.Background(), x.ID)
	if err != nil {
		return err
	}

	if !success {
		return fmt.Errorf("failed to stop worker with id: %d", x.ID)
	}

	x.closed = true
	return nil
}

type WorkerConfig struct {
	Browser        string
	BrowserVersion string
	Build          string
	Device         string
	Name           string
	OS             string
	OSVersion      string
	Project        string
	Resolution     Resolution
	Timeout        time.Duration
	URL            string
	Video          bool
}

func (x *Client) NewWorker(parentCtx context.Context, config WorkerConfig) (*Worker, error) {
	ctx, cancel := context.WithTimeout(parentCtx, time.Second*5)
	defer cancel()

	params := map[string]interface{}{}

	if config.Browser != "" {
		params["browser"] = config.Browser
	}
	if config.BrowserVersion != "" {
		params["browser_version"] = config.BrowserVersion
	}
	if config.Build != "" {
		params["build"] = config.Build
	}
	if config.Device != "" {
		params["device"] = config.Device
	}
	if config.Name != "" {
		params["name"] = config.Name
	}
	if config.OS != "" {
		params["os"] = config.OS
	}
	if config.OSVersion != "" {
		params["os_version"] = config.OSVersion
	}
	if config.Project != "" {
		params["project"] = config.Project
	}
	if config.Resolution != "" {
		params["resolution"] = string(config.Resolution)
	}
	if config.Timeout != 0 {
		params["timeout"] = config.Timeout / time.Second
	}
	if config.URL != "" {
		params["url"] = config.URL
	}
	if config.Video != false {
		params["browserstack.video"] = config.Video
	}

	paramsBody, err := json.Marshal(params)
	if err != nil {
		return nil, err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, "https://api.browserstack.com/5/worker", bytes.NewBuffer(paramsBody))
	if err != nil {
		return nil, err
	}

	req.Header.Set("Content-Type", "application/json")

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

	apiResp := &Worker{}
	err = decoder.Decode(apiResp)
	if err != nil {
		return nil, err
	}

	apiResp.client = x

	return apiResp, nil
}

func (x *Client) DeleteWorker(parentCtx context.Context, id int) (bool, error) {
	ctx, cancel := context.WithTimeout(parentCtx, time.Second*5)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodDelete, fmt.Sprintf("https://api.browserstack.com/5/worker/%d", id), nil)
	if err != nil {
		return false, err
	}

	resp, err := x.http.Do(req)
	if err != nil {
		return false, err
	}

	defer resp.Body.Close()

	b, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return false, err
	}

	if strings.Contains(string(b), "HTTP Basic: Access denied.") {
		return false, errors.New("Access denied")
	}

	buf := bytes.NewBuffer(b)

	decoder := json.NewDecoder(buf)

	if resp.StatusCode != 200 {
		apiErr := &Error{}
		err := decoder.Decode(apiErr)
		if err != nil {
			return false, err
		}

		return false, apiErr
	}

	return true, nil
}

func (x *Client) Workers(parentCtx context.Context) ([]*Worker, error) {
	ctx, cancel := context.WithTimeout(parentCtx, time.Second*5)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, "https://api.browserstack.com/5/workers", nil)
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
