package browserstack

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"math/rand"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/mrhenry/web-tests/scripts/browserua"
)

type Browser struct {
	Browser        string               `json:"browser"`
	BrowserVersion string               `json:"browser_version"`
	Device         string               `json:"device"`
	OS             string               `json:"os"`
	OSVersion      string               `json:"os_version"`
	RealMobile     bool                 `json:"real_mobile"`
	RealBrowser    *browserua.UserAgent `json:"0"`
}

type BrowsersByTestSpeed []Browser

func (x BrowsersByTestSpeed) Len() int      { return len(x) }
func (x BrowsersByTestSpeed) Swap(i, j int) { x[i], x[j] = x[j], x[i] }

func (x BrowsersByTestSpeed) Less(i, j int) bool {
	if x[i].Device != "" && x[j].Device == "" {
		return true
	}

	if x[i].RealMobile && !x[j].RealMobile {
		return true
	}

	if x[i].BrowserVersion != "" && x[j].BrowserVersion != "" && x[i].Browser == x[j].Browser {
		majorI := strings.Split(x[i].BrowserVersion, ".")[0]
		majorJ := strings.Split(x[j].BrowserVersion, ".")[0]

		majorIInt, _ := strconv.ParseInt(majorI, 10, 64)
		majorJInt, _ := strconv.ParseInt(majorJ, 10, 64)

		return majorIInt < majorJInt
	}

	if x[i].OSVersion != "" && x[j].OSVersion != "" && x[i].OS == x[j].OS {
		majorI := strings.Split(x[i].OSVersion, ".")[0]
		majorJ := strings.Split(x[j].OSVersion, ".")[0]

		majorIInt, _ := strconv.ParseInt(majorI, 10, 64)
		majorJInt, _ := strconv.ParseInt(majorJ, 10, 64)

		return majorIInt < majorJInt
	}

	return false
}

func (x Browser) ResultKey() string {
	if x.Device != "" {
		return fmt.Sprintf("%s/%s", x.OS, x.OSVersion)
	}

	return fmt.Sprintf("%s/%s", x.Browser, x.BrowserVersion)
}

func (x *Client) ReducedBrowsers(ctx context.Context) ([]Browser, error) {
	browsers, err := x.Browsers(ctx)
	if err != nil {
		return nil, err
	}

	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(browsers), func(i, j int) {
		browsers[i], browsers[j] = browsers[j], browsers[i]
	})

	browsersMap := map[string]Browser{}

	for _, b := range browsers {
		if b.BrowserVersion == "insider preview" {
			continue // not an official release
		}

		if strings.Contains(strings.ToLower(b.BrowserVersion), "beta") {
			continue // not an official release
		}

		if strings.Contains(strings.ToLower(b.OSVersion), "beta") {
			continue // not an official release
		}

		if strings.Contains(strings.ToLower(b.OS), "android") {
			continue // android can't be tested with Browserstack
		}

		if strings.Contains(strings.ToLower(b.Browser), "android") {
			continue // android can't be tested with Browserstack
		}

		if b.Browser == "edge" {
			parts := strings.Split(b.BrowserVersion, ".")
			if len(parts) > 0 {
				v, err := strconv.ParseInt(parts[0], 10, 64)
				if err == nil && v >= 79 {
					continue // Edge >= 79 is just Chrome
				}
			}
		}

		key, b := browserForReducedSet(b)
		if strings.HasPrefix(key, "ios/") {
			b.RealMobile = true
		}

		// Definitely not
		switch key {
		case "ie/6.0":
			continue // too old
		case "ie/7.0":
			continue // too old
		case "firefox/3.6":
			continue // broken
		case "safari/6.2":
			continue // seemingly broken in browserstack
		case "safari/6.0":
			continue // seemingly broken in browserstack
		case "safari/5.1":
			continue // seemingly broken in browserstack
		default:
		}

		// Currently only these
		switch key {
		case "ie/11.0":
			fallthrough
		case "safari/8.0":
			fallthrough
		case "safari/12.1":
			fallthrough
		case "edge/17.0":
			fallthrough
		case "edge/18.0":
			fallthrough
		case "chrome/41.0":
			fallthrough
		case "chrome/43.0":
			fallthrough
		case "chrome/44.0":
			fallthrough
		case "chrome/45.0":
			fallthrough
		case "chrome/56.0":
			fallthrough
		case "chrome/57.0":
			fallthrough
		case "chrome/63.0":
			fallthrough
		case "chrome/64.0":
			fallthrough
		case "chrome/65.0":
			fallthrough
		case "chrome/73.0":
			fallthrough
		case "chrome/79.0":
			browsersMap[key] = b
			continue
		default:
		}

		switch b.Browser {
		case "safari":
			fallthrough
		case "chrome":
			fallthrough
		case "firefox":
			latestKey := fmt.Sprintf("%s_latest", b.Browser)
			if latest, ok := browsersMap[latestKey]; ok {
				var aMajor int64
				var aMinor int64
				var bMajor int64
				var bMinor int64

				{
					parts := strings.Split(latest.BrowserVersion, ".")
					if len(parts) > 1 {
						aMajor, err = strconv.ParseInt(parts[0], 10, 64)
						if err != nil {
							continue
						}

						aMinor, err = strconv.ParseInt(parts[0], 10, 64)
						if err != nil {
							continue
						}
					}
				}

				{
					parts := strings.Split(b.BrowserVersion, ".")
					if len(parts) > 1 {
						bMajor, err = strconv.ParseInt(parts[0], 10, 64)
						if err != nil {
							continue
						}

						bMinor, err = strconv.ParseInt(parts[0], 10, 64)
						if err != nil {
							continue
						}
					}
				}

				if aMajor > bMajor {
					continue
				} else if aMajor < bMajor {
					browsersMap[latestKey] = b
					continue
				}

				if aMinor > bMinor {
					continue
				} else if aMinor < bMinor {
					browsersMap[latestKey] = b
					continue
				}

			} else {
				browsersMap[latestKey] = b
				continue
			}
		}
	}

	out := []Browser{}
	for _, b := range browsersMap {
		out = append(out, b)
	}

	return out, nil
}

func browserForReducedSet(b Browser) (string, Browser) {
	if b.Device != "" {
		bb := Browser{
			Device:         b.Device,
			Browser:        b.Browser,
			BrowserVersion: b.BrowserVersion,
			OS:             b.OS,
			OSVersion:      b.OSVersion,
			RealMobile:     b.RealMobile,
		}

		return bb.ResultKey(), bb
	}

	bb := Browser{
		Browser:        b.Browser,
		BrowserVersion: b.BrowserVersion,
	}

	return bb.ResultKey(), bb
}

func (x *Client) Browsers(parentCtx context.Context) ([]Browser, error) {
	ctx, cancel := context.WithTimeout(parentCtx, time.Second*15)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, "https://api.browserstack.com/automate/browsers.json", nil)
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

	apiResp := []Browser{}
	err = decoder.Decode(&apiResp)
	if err != nil {
		return nil, err
	}

	return apiResp, nil
}
