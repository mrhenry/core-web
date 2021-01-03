package main

import (
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func main() {
	log.Println("proxy started")
	http.ListenAndServe("localhost:8090", http.HandlerFunc(serveReverseProxy))
}

func serveReverseProxy(res http.ResponseWriter, req *http.Request) {
	if req.URL.Path == "/dist/e2e/index.html" {
		req.URL.Path = "/e2e/"
	}

	// parse the url
	url, _ := url.Parse("https://core-web.mrhenry.studio")

	// create the reverse proxy
	proxy := httputil.NewSingleHostReverseProxy(url)
	proxy.ModifyResponse = func(resp *http.Response) error {
		resp.Header.Del("Cache-Control")
		resp.Header.Del("Expect-Ct")
		resp.Header.Del("Nel")
		resp.Header.Del("Proxy-Connection")
		resp.Header.Del("Report-To")
		resp.Header.Del("Set-Cookie")
		resp.Header.Del("Strict-Transport-Security")

		resp.Header.Set("Cache-Control", "max-age=0 private")
		return nil
	}

	req.URL.Host = url.Host
	req.URL.Scheme = url.Scheme
	req.Host = url.Host

	req.Header.Set("Host", url.Host)
	req.Header.Del("Accept-Encoding")

	proxy.ServeHTTP(res, req)

	log.Println("proxied", req.URL)
}
