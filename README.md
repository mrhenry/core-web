# core-web

[![Build Status](https://travis-ci.com/mrhenry/core-web.svg?branch=master)](https://travis-ci.com/mrhenry/core-web)

```sh
yarn add -D @mrhenry/babel-plugin-core-web
```

```js
module.exports = function(api) {
	api.cache(true);
	return {
		plugins: [
			["@mrhenry/core-web", {
				browsers: {
					chrome: "63",
					firefox: "57",
					edge: "18",
					opera: "57",
					safari: "12",
					ie: "11",
				}
			}]
		]
	};
};
```
