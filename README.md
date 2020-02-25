# core-web

[![Build Status](https://travis-ci.com/mrhenry/core-web.svg?branch=master)](https://travis-ci.com/mrhenry/core-web)

## Babel Plugin

[Read more](https://github.com/mrhenry/core-web/tree/master/packages/babel-plugin-core-web)

```sh
npm install --save-dev @mrhenry/babel-plugin-core-web
```

```sh
yarn add --dev @mrhenry/babel-plugin-core-web
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
