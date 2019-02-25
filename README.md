# core-web

[![Greenkeeper badge](https://badges.greenkeeper.io/mrhenry/core-web.svg)](https://greenkeeper.io/)


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
