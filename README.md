# core-web

[![Build Status](https://travis-ci.com/mrhenry/core-web.svg?branch=master)](https://travis-ci.com/mrhenry/core-web) [![BrowserStack Status](https://automate.browserstack.com/badge.svg?badge_key=dkNqV25RQzdCbE5mL3E1TEFEODIyS0pUeXVCWDdHT0hLZVBsb25uK2hnWT0tLVoyOS9NVG8vUHRySUwwZnRCcjhjZlE9PQ==--aa77eba6e1b9d86f8934a95b2d5c67a98665d9dd)](https://automate.browserstack.com/public-build/dkNqV25RQzdCbE5mL3E1TEFEODIyS0pUeXVCWDdHT0hLZVBsb25uK2hnWT0tLVoyOS9NVG8vUHRySUwwZnRCcjhjZlE9PQ==--aa77eba6e1b9d86f8934a95b2d5c67a98665d9dd) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=mrhenry/core-web)](https://dependabot.com)

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
