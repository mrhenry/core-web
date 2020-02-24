# babel-plugin-core-web

> Babel plugin that polyfills browser features.
>
> Bringing [polyfill.io](https://polyfill.io/v3/) to your babel flow.

[![version](https://img.shields.io/npm/v/@mrhenry/babel-plugin-core-web.svg)](https://www.npmjs.com/package/@mrhenry/babel-plugin-core-web) [![Build Status](https://travis-ci.com/mrhenry/core-web.svg?branch=master)](https://travis-ci.com/mrhenry/core-web)

## install

```sh
npm install --save-dev @mrhenry/babel-plugin-core-web
```

```sh
yarn add --dev @mrhenry/babel-plugin-core-web
```

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
				},
			],
		],
	},
}
```

## issues

If have any trouble using `babel-plugin-core-web` please [open an issue here](https://github.com/mrhenry/core-web/issues). We will try to get back to you as soon as possible.


## missing polyfills

If a polyfill is missing from this plugin please [open an issue here](https://github.com/mrhenry/core-web/issues).

We do take the specification status into consideration before adding new polyfills.
