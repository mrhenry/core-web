package browserstack

import (
	"context"
	"encoding/json"
	"log"
	"os"
	"sort"
	"testing"
)

func TestBrowsers(t *testing.T) {
	userName := os.Getenv("BROWSERSTACK_USERNAME")
	accessKey := os.Getenv("BROWSERSTACK_ACCESS_KEY")
	if userName == "" {
		return
	}

	client := New(Config{
		UserName:  userName,
		AccessKey: accessKey,
	})

	browsers, err := client.ReducedBrowsers(context.Background())
	if err != nil {
		t.Fatal(err)
	}

	b, err := json.Marshal(browsers)
	if err != nil {
		t.Fatal(err)
	}

	log.Println(string(b))
}

func TestBrowsers_WithoutAuth(t *testing.T) {
	userName := os.Getenv("BROWSERSTACK_USERNAME")
	accessKey := "b"

	if userName == "" {
		return
	}

	client := New(Config{
		UserName:  userName,
		AccessKey: accessKey,
	})

	_, err := client.Browsers(context.Background())
	if err == nil || err.Error() != "Access denied" {
		t.Fatal("expected \"Access denied\" error")
	}
}

func TestBrowsersSortedBySpeed(t *testing.T) {
	t.Run("ios devices lowest first", func(tt *testing.T) {
		browsers := []Browser{
			{
				OSVersion:  "2.0",
				OS:         "ios",
				Device:     "iPad",
				RealMobile: true,
			},
			{
				OSVersion:  "1.0",
				OS:         "ios",
				Device:     "iPhone",
				RealMobile: true,
			},
		}

		sort.Sort(BrowsersByTestSpeed(browsers))

		if browsers[0].OSVersion != "1.0" {
			tt.Fatal("expected version 1.0 to be first")
		}
	})

	t.Run("ios devices first", func(tt *testing.T) {
		browsers := []Browser{
			{
				BrowserVersion: "12.0",
				Browser:        "safari",
			},
			{
				OSVersion:  "1.0",
				OS:         "ios",
				RealMobile: true,
			},
		}

		sort.Sort(BrowsersByTestSpeed(browsers))

		if browsers[0].OS != "ios" {
			tt.Fatal("expected ios to be first")
		}
	})

	t.Run("lowest first", func(tt *testing.T) {
		browsers := []Browser{
			{
				BrowserVersion: "80.1",
				Browser:        "chrome",
			},
			{
				BrowserVersion: "27.0",
				Browser:        "chrome",
			},
		}

		sort.Sort(BrowsersByTestSpeed(browsers))

		if browsers[0].BrowserVersion != "27.0" {
			tt.Fatal("expected version 27.0 to be first")
		}
	})
}
