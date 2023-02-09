package browserua

type BrowserUAs struct {
	Key string   `json:"key"`
	UAs []string `json:"uas"`
}

type UserAgent struct {
	Browser        string `json:"browser"`
	BrowserVersion string `json:"browser_version"`
	OS             string `json:"os"`
	OSVersion      string `json:"os_version"`
	UserAgent      string `json:"ua"`
	BrowserStack   int    `json:"browserstack"`
}
