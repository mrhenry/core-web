# [core-web](https://core-web.mrhenry.studio/) [<img src="https://wp.assets.sh/uploads/sites/2963/2021/09/mrhenry-gezicht-small.png" alt="Mr. Henry's logo." width="90" height="90" align="right">](https://www.mrhenry.be/)

[![Build](https://github.com/mrhenry/core-web/workflows/Build/badge.svg)](https://github.com/mrhenry/core-web/actions/workflows/build-and-test.yml) [![BrowserStack Status](https://automate.browserstack.com/badge.svg?badge_key=aG8ra0x5L2xhbEhIOHh2U003NWI1T3pYVTVUZDFJNEU1cHJLU0JPSFhWZz0tLVJwMm13ekViMGs3VFJQeTR6V3lpeXc9PQ==--cdb365a51e633a467329a4b6a475c736b7578a09)](https://automate.browserstack.com/public-build/aG8ra0x5L2xhbEhIOHh2U003NWI1T3pYVTVUZDFJNEU1cHJLU0JPSFhWZz0tLVJwMm13ekViMGs3VFJQeTR6V3lpeXc9PQ==--cdb365a51e633a467329a4b6a475c736b7578a09) [![CodeQL](https://github.com/mrhenry/core-web/workflows/CodeQL/badge.svg)](https://github.com/mrhenry/core-web/actions/workflows/codeql-analysis.yml)

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
	/*
		Optionally cache the babel config
		https://babeljs.io/docs/en/config-files#apicache
	*/
	api.cache(true);

	return {
		plugins: [
			["@mrhenry/core-web"]
		]
	};
};
```

```js
module.exports = function(api) {
	/*
		Optionally cache the babel config
		https://babeljs.io/docs/en/config-files#apicache
	*/
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
