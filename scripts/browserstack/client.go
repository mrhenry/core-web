package browserstack

import (
	"net/http"

	"github.com/google/uuid"
	"github.com/tebeka/selenium"
)

type Client struct {
	http            *http.Client
	accessKey       string
	userName        string
	localIdentifier string
}

func (x *Client) SetCaps(caps selenium.Capabilities) selenium.Capabilities {
	caps["browserstack.user"] = x.userName
	caps["browserstack.key"] = x.accessKey
	caps["browserstack.localIdentifier"] = x.localIdentifier

	return caps
}

type Config struct {
	UserName  string
	AccessKey string
}

func New(config Config) *Client {
	var transport http.RoundTripper = roundTripperFunc(func(req *http.Request) (*http.Response, error) {
		req.SetBasicAuth(config.UserName, config.AccessKey)

		return http.DefaultTransport.RoundTrip(req)
	})

	client := &Client{
		accessKey: config.AccessKey,
		userName:  config.UserName,
		http: &http.Client{
			Transport: transport,
		},
		localIdentifier: uuid.New().String(),
	}

	return client
}

type roundTripperFunc func(*http.Request) (*http.Response, error)

func (x roundTripperFunc) RoundTrip(req *http.Request) (*http.Response, error) {
	return x(req)
}
