package browserstack

import (
	"context"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"runtime"
	"time"
)

func getLocalBinary(parentCtx context.Context, accessKey string, localIdentifier string) (*exec.Cmd, error) {
	localBinPath := os.Getenv("BROWSERSTACK_LOCAL_BINARY_PATH")
	platform, arch := platformAndArch()

	if localBinPath == "" {
		localBinPath = "./BrowserStackLocal"
		if platform == "windows" {
			localBinPath += ".exe"
		}
	}

	if !fileExists(localBinPath) {
		err := downloadLocalBinary(parentCtx, localBinPath, platform, arch)
		if err != nil {
			return nil, err
		}
	}

	cmd := exec.CommandContext(
		parentCtx,
		localBinPath,
		accessKey,
		"-force",
		"-onlyAutomate",
		"--enable-logging-for-api",
		"--local-identifier",
		localIdentifier,
	)

	return cmd, nil
}

func downloadLocalBinary(parentCtx context.Context, localBinPath string, platform string, arch string) error {
	ctx, cancel := context.WithTimeout(parentCtx, time.Second*120)
	defer cancel()

	ext := ""
	if platform == "windows" {
		ext = ".exe"
	} else {
		ext = fmt.Sprintf("-%s-%s", platform, arch)
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, fmt.Sprintf("https://s3.amazonaws.com/browserStack/browserstack-local/BrowserStackLocal%s", ext), nil)
	if err != nil {
		return err
	}

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}

	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		return errors.New(http.StatusText(resp.StatusCode))
	}

	f, err := os.Create(localBinPath)
	if err != nil {
		return err
	}

	defer f.Close()

	_, err = io.Copy(f, resp.Body)
	if err != nil {
		return err
	}

	err = f.Close()
	if err != nil {
		return err
	}

	err = os.Chmod(localBinPath, 0700)
	if err != nil {
		return err
	}

	return nil
}

func fileExists(filename string) bool {
	info, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}

func platformAndArch() (string, string) {
	platform := runtime.GOOS
	arch := runtime.GOARCH

	switch platform {
	case "darwin":
		switch arch {
		case "amd64":
			return "darwin", "x64"
		case "arm64":
			return "darwin", "arm64"
		}

		return "", ""

	case "freebsd":
		switch arch {
		case "amd64":
			return "freebsd", "x64"
		case "arm":
			return "freebsd", "arm"
		case "arm64":
			return "freebsd", "arm64"
		}

		return "", ""

	case "linux":
		switch arch {
		case "amd64":
			return "linux", "x64"
		case "arm":
			return "linux", "arm"
		case "arm64":
			return "linux", "arm64"
		case "mips":
			return "linux", "mips"
		case "ppc64":
			return "linux", "ppc64"
		case "s390x":
			return "linux", "s390x"
		}

		return "", ""

	case "netbsd":
		switch arch {
		case "amd64":
			return "netbsd", "x64"
		case "arm":
			return "netbsd", "arm"
		case "arm64":
			return "netbsd", "arm64"
		}

	case "openbsd":
		switch arch {
		case "amd64":
			return "openbsd", "x64"
		case "arm":
			return "openbsd", "arm"
		case "arm64":
			return "openbsd", "arm64"
		}

	case "windows":
		switch arch {
		case "amd64":
			return "windows", "x64"
		case "arm":
			return "windows", "arm"
		}

		return "", ""
	}

	return "", ""
}
