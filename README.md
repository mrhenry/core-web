# core-web

[![Build Status](https://travis-ci.com/mrhenry/core-web.svg?branch=master)](https://travis-ci.com/mrhenry/core-web) [![BrowserStack Status](https://automate.browserstack.com/badge.svg?badge_key=QXlEV3VTRzdNTHVlVDZIOG1YSU5LL01DUEEyekQvbDhSRVhldDJ3aWFpdz0tLWhvVFhQWURQWkVvL2ZoYXRMYmtiOWc9PQ==--7cd3fd159bd1be583dab9b33e620e6a15499aff2)](https://automate.browserstack.com/public-build/QXlEV3VTRzdNTHVlVDZIOG1YSU5LL01DUEEyekQvbDhSRVhldDJ3aWFpdz0tLWhvVFhQWURQWkVvL2ZoYXRMYmtiOWc9PQ==--7cd3fd159bd1be583dab9b33e620e6a15499aff2) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=mrhenry/core-web)](https://dependabot.com)

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
