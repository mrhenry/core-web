# core-web

[![Build Status](https://travis-ci.com/mrhenry/core-web.svg?branch=main)](https://travis-ci.com/mrhenry/core-web) [![BrowserStack Status](https://automate.browserstack.com/badge.svg?badge_key=MkE1NFM0ZkZESGg1VkNVd0htbm1BSTNFNjJHUGRhSjlEcU1PQ0JOMVVLOD0tLUVQMFpFUWIxTCtJWUtKYkFXYnN3OGc9PQ==--e6f705c0dc92b0ed20bd3a64df779e846f1ceeda)](https://automate.browserstack.com/public-build/MkE1NFM0ZkZESGg1VkNVd0htbm1BSTNFNjJHUGRhSjlEcU1PQ0JOMVVLOD0tLUVQMFpFUWIxTCtJWUtKYkFXYnN3OGc9PQ==--e6f705c0dc92b0ed20bd3a64df779e846f1ceeda) ![CodeQL](https://github.com/mrhenry/core-web/workflows/CodeQL/badge.svg)

## Babel Plugin

[Read more](https://github.com/mrhenry/core-web/tree/main/packages/babel-plugin-core-web)

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
