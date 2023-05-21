module github.com/mrhenry/web-tests

go 1.20

require (
	github.com/google/uuid v1.3.0
	github.com/hashicorp/go-version v1.6.0
	github.com/tebeka/selenium v0.9.9
	golang.org/x/sync v0.2.0
)

require github.com/blang/semver v3.5.1+incompatible // indirect

replace github.com/tebeka/selenium v0.9.9 => github.com/romainmenke/selenium v0.9.15
