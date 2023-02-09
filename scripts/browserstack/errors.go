package browserstack

import "encoding/json"

type Error struct {
	Message string `json:"message"`
	Errors  []struct {
		Field string `json:"field"`
		Code  string `json:"code"`
	} `json:"errors"`
}

func (x *Error) Error() string {
	b, err := json.Marshal(x)
	if err != nil {
		panic(err)
	}

	return string(b)
}
