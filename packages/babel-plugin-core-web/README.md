# babel-plugin-core-web

> Babel plugin that polyfills browser features.
>
> Bringing [polyfill.io](https://polyfill.io/v3/) to your babel flow.

[![version](https://img.shields.io/npm/v/@mrhenry/babel-plugin-core-web.svg)](https://www.npmjs.com/package/@mrhenry/babel-plugin-core-web) [![Build](https://github.com/mrhenry/core-web/workflows/Build/badge.svg)](https://github.com/mrhenry/core-web/actions/workflows/build-and-test.yml) [![BrowserStack Status](https://automate.browserstack.com/badge.svg?badge_key=aG8ra0x5L2xhbEhIOHh2U003NWI1T3pYVTVUZDFJNEU1cHJLU0JPSFhWZz0tLVJwMm13ekViMGs3VFJQeTR6V3lpeXc9PQ==--cdb365a51e633a467329a4b6a475c736b7578a09)](https://automate.browserstack.com/public-build/aG8ra0x5L2xhbEhIOHh2U003NWI1T3pYVTVUZDFJNEU1cHJLU0JPSFhWZz0tLVJwMm13ekViMGs3VFJQeTR6V3lpeXc9PQ==--cdb365a51e633a467329a4b6a475c736b7578a09) [![CodeQL](https://github.com/mrhenry/core-web/workflows/CodeQL/badge.svg)](https://github.com/mrhenry/core-web/actions/workflows/codeql-analysis.yml)


## why

Maintaining a correct but minimal polyfill bundle from [polyfill.io](https://polyfill.io/v3/) is a manual process and prone to errors. Babel however knows which features you actually used and the environment you are targetting. Bringing the two together works for us, we hope it does for you too.

What is not included is a way to serve different bundles to different browsers. There are many ways to do this and we are working on some recipes for this.


## install

```sh
npm install --save-dev @mrhenry/babel-plugin-core-web
```

```sh
yarn add --dev @mrhenry/babel-plugin-core-web
```

## Example with script tags (`module` vs `nomodules`)

[example migration](https://github.com/mrhenry/core-web-example-script-tag)


## babel.config.js

```js
module.exports = function(api) {
	api.cache(true);
	return {
		plugins: [
			["@mrhenry/core-web", {
				browsers: {
					chrome: "31",
					firefox: "26",
					edge: "12",
					opera: "26",
					safari: "8",
					ie: "11",
				}
			}]
		]
	};
};
```

```js
module.exports = function(api) {
	api.cache(true);
	return {
		plugins: [
			// Use browserslist default :
			["@mrhenry/core-web"]
		]
	};
};
```

```js
module.exports = function(api) {
	api.cache(true);
	return {
		plugins: [
			// A custom browserslist config :
			["@mrhenry/core-web", {
				browserslist: [
					"last 2 versions",
					">0.5%"
				]
			}]
		]
	};
};
```

## webpack config

```js
const babelPresetEnv = require( '@babel/preset-env' );

...

{
	loader: 'babel-loader',
	options: {
		comments: false,
		plugins: [
			[
				'@mrhenry/core-web',
				{
					browsers: {
						chrome: "63",
						firefox: "57",
						edge: "18",
						opera: "57",
						safari: "12",
						ie: "11",
					},
				},
			],
		],
		presets: [
			[
				babelPresetEnv,
				{
					corejs: '^3.6.3',
					targets: {
						browsers: ...,
					},
					useBuiltIns: 'usage',
					exclude: [
						"web.dom-collections.iterator",
						"web.dom-collections.for-each",
					],
				},
			],
		],
	},
}
```


## issues

If have any trouble using `babel-plugin-core-web` please [open an issue here](https://github.com/mrhenry/core-web/issues/new?assignees=&labels=bug&template=report-a-bug.md&title=). We will try to get back to you as soon as possible.


## missing polyfills

If a polyfill is missing from this plugin please [open an issue here](https://github.com/mrhenry/core-web/issues/new?assignees=&labels=missing-polyfill&template=request-a-polyfill.md&title=).

We do take the specification status into consideration before adding new polyfills.
