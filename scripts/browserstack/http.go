package browserstack

import (
	"context"
	"net"
	"net/http"
	"time"
)

func newTestServer(ctx context.Context, handler http.Handler) (int, error) {
	listener, err := net.Listen("tcp", ":0")
	if err != nil {
		return 0, err
	}

	srv := &http.Server{
		Handler: handler,
	}

	go func() {
		select {
		case <-ctx.Done():
			time.Sleep(time.Second * 5)

			srv.Close()
		}
	}()

	go func() {
		srv.Serve(listener)
	}()

	return listener.Addr().(*net.TCPAddr).Port, nil
}
