'use strict';

const mapping = require('@mrhenry/core-web/helpers/__mapping');
const bcd = require('@mdn/browser-compat-data');
const fs = require('fs');
const path = require('path');

const coreWebBrowsers = [
	'android',
	'chrome',
	'edge',
	'firefox',
	'ie',
	'opera',
	'safari',
	'ios_saf',
];

function generate() {
	const compat = {};

	mapping.forEach((feature) => {
		handleFeature(compat, feature.name, feature);
	});

	const compatArray = [];
	for (const key in compat) {
		compatArray.push(compat[key]);
	}

	compatArray.sort((a, b) => {
		if (a.key.toLowerCase() < b.key.toLowerCase()) {
			return -1;
		}

		if (a.key.toLowerCase() > b.key.toLowerCase()) {
			return 1;
		}

		return 0;
	});

	let tables = '';
	compatArray.forEach((feature) => {
		tables = tables + tableHTML(feature);
	});

	fs.writeFileSync(path.join(__dirname, 'index.html'), pageHTML(tables));
}

function handleFeature(compat, name, feature) {
	if (feature.name.includes('Intl.') && feature.name.includes('~')) {
		return; // skip locale polyfills
	}

	if (feature.isAlias) {
		for (const dep of feature.deps) {
			const aliased = mapping.find((x) => { return x.name === dep });
			if (!aliased) {
				continue;
			}

			handleFeature(compat, name, aliased);
		}

		return;
	}

	if (name === '~custom-elements') {
		mapPropertyFeatureAPI(compat, 'Window.customElements', feature.name, feature);
	} else if (name.includes('.prototype.')) {
		mapPrototypeFeatureAPI(compat, name, feature.name, feature) || mapPrototypeFeatureBuiltin(compat, name, feature.name, feature);
	} else if (name.includes('.')) {
		mapPropertyFeatureAPI(compat, name, feature.name, feature) || mapPropertyFeatureBuiltin(compat, name, feature.name, feature) ||
			mapPropertyFeatureAPI(compat, toTitleCase(name), feature.name, feature) || mapPropertyFeatureBuiltin(compat, toTitleCase(name), feature.name, feature);
	} else if (bcd.api[name]) {
		mapMainFeatureAPI(compat, name, feature.name, feature);
	} else if (bcd.javascript.builtins[name]) {
		mapMainFeatureBuiltin(compat, name, feature.name, feature);
	} else if (bcd.api.WindowOrWorkerGlobalScope[name]) {
		mapGlobalScopeFeatureAPI(compat, name, feature.name, feature)
	} else {
		if (!name.includes('Window.')) {
			handleFeature(compat, 'Window.' + name, feature);
			return;
		}

		console.log('skipped', feature.name);
	}	
}

function pageHTML(tables) {
	return html`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Compat Data</title>
	<style>
		html {
			font-size: 16px;
		}

		* {
			font-family: monospace;
		}

		table {
			border-spacing: 5px;
			margin-bottom: 70px;
			margin-top: 30px;
		}

		th {
			padding: 12px;
			text-align: center;
		}

		td {
			font-size: 0.875rem;
			min-width: 90px;
			padding: 12px 5px;
			text-align: left;
		}

		td+td {
			background-color: #ddfff7;
			border: 1px solid #ddd;
			text-align: center;
		}

		tr+tr > td+td {
			background-color: #dde4ff;
		}

		.wrapper {
			margin: 100px auto;
			max-width: 900px;
		}
	</style>
</head>
<body>
	<div class="wrapper">${tables}</div>
</body>
</html>
`;
}

function tableHTML(feature) {
	const tables = feature.data.map((compat) => {
		return html`
		<table>
			<thead>
				<tr>${headRowHTML(compat)}</tr>
			</thead>
			<tbody>
				<tr><td><span title="${compat.polyfillName}">${ compat.coreWeb.providedByCoreWeb ? 'core-web' : 'polyfill-library' }</span></td>${polyfillRowHTML(compat)}</tr>
				<tr><td><span title="${compat.name}">native</span></td>${nativeRowHTML(compat)}</tr>
			</tbody>
		</table>
		`;
	}).join('');

	return html`
		<h2>${feature.key}</h2>
		${tables}
	`;
}

function headRowHTML(compat) {
	let row = '';
	for (const browser of coreWebBrowsers) {
		row = row + html`<th>${ browser }</th>`;
	}

	return html`<th><a href="${compat.mdn.__compat.mdn_url}" title="${ compat.name }" target="_blank">MDN</a></th>${row}`;
}

function nativeRowHTML(feature) {
	let row = '';
	for (const browser of coreWebBrowsers) {
		let native = '-';
		if (Array.isArray(feature.native[browser])) {
			native = feature.native[browser].map((versionInfo) => {
				let out = [];
				if (versionInfo.version_added) {
					out.push(
						html`<span >${versionInfo.version_added}</span>`
					);
				}

				if (versionInfo.version_removed) {
					out.push(
						html`<span style="color:red;" >${versionInfo.version_removed}</span>`
					);
				}

				if (versionInfo.notes || versionInfo.alternative_name) {
					return html`<span ${nativeRowNotes(versionInfo)}>${out.join('-')} ⓘ</span>`
				}

				return out.join('-');
			}).join('<br>');
		} else if (feature.native[browser] && feature.native[browser].version_added) {
			native = feature.native[browser].version_added;
		}

		row = row + html`<td>${ native }</td>`;
	}

	return row;
}

function nativeRowNotes(versionInfo) {
	const allNotes = [];
	if (Array.isArray(versionInfo.notes)) {
		allNotes.push(...versionInfo.notes);
	} else if (versionInfo.notes) {
		allNotes.push(versionInfo.notes);
	}

	if (versionInfo.alternative_name) {
		allNotes.push('Alternate name : ' + versionInfo.alternative_name);
	}
	if (allNotes.length > 0) {
		return `title="${allNotes.join('\n')}"`;
	} else {
		return '';
	}
}

function polyfillRowHTML(feature) {
	let row = '';
	for (const browser of coreWebBrowsers) {
		row = row + html`<td>${ feature.polyfilled[browser] || '-' }</td>`;
	}

	return row;
}

generate();

function mapGlobalScopeFeatureAPI(compat, featureName, polyfillName, feature) {
	let polyfilled = {};
	let native = {};
	for (const browser of coreWebBrowsers) {
		const mdnBrowser = browsersCoreWebToMDN(browser);
		if (
			mdnBrowser &&
			bcd.api.WindowOrWorkerGlobalScope[featureName].__compat &&
			bcd.api.WindowOrWorkerGlobalScope[featureName].__compat.support &&
			bcd.api.WindowOrWorkerGlobalScope[featureName].__compat.support[mdnBrowser]
		) {
			polyfilled[browser] = (feature.browsers || {})[browser];
			native[browser] = bcd.api.WindowOrWorkerGlobalScope[featureName].__compat.support[mdnBrowser];
		}
	}

	compat[featureName] = compat[featureName] || {
		key: featureName,
		data: [],
	};

	compat[featureName].data.push({
		name: featureName,
		polyfillName: polyfillName,
		coreWeb: feature,
		mdn: bcd.api.WindowOrWorkerGlobalScope[featureName],
		polyfilled: polyfilled,
		native: native,
	});

	return true;
}

function mapPrototypeFeatureAPI(compat, featureName, polyfillName, feature) {
	const mainFeature = featureName.split('.prototype.')[0];
	const subFeature = featureName.split('.prototype.')[1];

	if (!bcd.api[mainFeature]) {
		return;
	}

	if (!bcd.api[mainFeature][subFeature]) {
		return;
	}

	let polyfilled = {};
	let native = {};
	for (const browser of coreWebBrowsers) {
		const mdnBrowser = browsersCoreWebToMDN(browser);

		if (
			mdnBrowser &&
			bcd.api[mainFeature][subFeature].__compat &&
			bcd.api[mainFeature][subFeature].__compat.support &&
			bcd.api[mainFeature][subFeature].__compat.support[mdnBrowser]
		) {
			polyfilled[browser] = (feature.browsers || {})[browser];
			native[browser] = bcd.api[mainFeature][subFeature].__compat.support[mdnBrowser];
		}
	}

	compat[featureName] = compat[featureName] || {
		key: featureName,
		data: [],
	};

	compat[featureName].data.push({
		name: featureName,
		polyfillName: polyfillName,
		coreWeb: feature,
		mdn: bcd.api[mainFeature][subFeature],
		polyfilled: polyfilled,
		native: native,
	});

	return true;
}

function mapPropertyFeatureAPI(compat, featureName, polyfillName, feature) {
	const mainFeature = featureName.split('.')[0];
	const subFeature = featureName.split('.')[1];

	if (!bcd.api[mainFeature]) {
		return;
	}

	if (!bcd.api[mainFeature][subFeature]) {
		return;
	}

	let polyfilled = {};
	let native = {};
	for (const browser of coreWebBrowsers) {
		const mdnBrowser = browsersCoreWebToMDN(browser);
		if (
			mdnBrowser &&
			bcd.api[mainFeature][subFeature].__compat &&
			bcd.api[mainFeature][subFeature].__compat.support &&
			bcd.api[mainFeature][subFeature].__compat.support[mdnBrowser]
		) {
			polyfilled[browser] = (feature.browsers || {})[browser];
			native[browser] = bcd.api[mainFeature][subFeature].__compat.support[mdnBrowser];
		}
	}

	compat[featureName] = compat[featureName] || {
		key: featureName,
		data: [],
	};

	compat[featureName].data.push({
		name: featureName,
		polyfillName: polyfillName,
		coreWeb: feature,
		mdn: bcd.api[mainFeature][subFeature],
		polyfilled: polyfilled,
		native: native,
	});

	return true;
}

function mapMainFeatureAPI(compat, featureName, polyfillName, feature) {
	let polyfilled = {};
	let native = {};
	for (const browser of coreWebBrowsers) {
		const mdnBrowser = browsersCoreWebToMDN(browser);
		if (
			mdnBrowser &&
			bcd.api[featureName].__compat &&
			bcd.api[featureName].__compat.support &&
			bcd.api[featureName].__compat.support[mdnBrowser]
		) {
			polyfilled[browser] = (feature.browsers || {})[browser];
			native[browser] = bcd.api[featureName].__compat.support[mdnBrowser];
		}
	}

	compat[featureName] = compat[featureName] || {
		key: featureName,
		data: [],
	};

	compat[featureName].data.push({
		name: featureName,
		polyfillName: polyfillName,
		coreWeb: feature,
		mdn: bcd.api[featureName],
		polyfilled: polyfilled,
		native: native,
	});

	return true;
}

function mapPrototypeFeatureBuiltin(compat, featureName, polyfillName, feature) {
	const mainFeature = featureName.split('.prototype.')[0];
	const subFeature = featureName.split('.prototype.')[1];

	if (!bcd.javascript.builtins[mainFeature]) {
		return;
	}

	if (!bcd.javascript.builtins[mainFeature][subFeature]) {
		return;
	}

	let polyfilled = {};
	let native = {};
	for (const browser of coreWebBrowsers) {
		const mdnBrowser = browsersCoreWebToMDN(browser);
		if (
			mdnBrowser &&
			bcd.javascript.builtins[mainFeature][subFeature].__compat &&
			bcd.javascript.builtins[mainFeature][subFeature].__compat.support &&
			bcd.javascript.builtins[mainFeature][subFeature].__compat.support[mdnBrowser]
		) {
			polyfilled[browser] = (feature.browsers || {})[browser];
			native[browser] = bcd.javascript.builtins[mainFeature][subFeature].__compat.support[mdnBrowser];
		}
	}

	compat[featureName] = compat[featureName] || {
		key: featureName,
		data: [],
	};

	compat[featureName].data.push({
		name: featureName,
		polyfillName: polyfillName,
		coreWeb: feature,
		mdn: bcd.javascript.builtins[mainFeature][subFeature],
		polyfilled: polyfilled,
		native: native,
	});

	return true;
}

function mapPropertyFeatureBuiltin(compat, featureName, polyfillName, feature) {
	const mainFeature = featureName.split('.')[0];
	const subFeature = featureName.split('.')[1];

	if (!bcd.javascript.builtins[mainFeature]) {
		return;
	}

	if (!bcd.javascript.builtins[mainFeature][subFeature]) {
		return;
	}

	let polyfilled = {};
	let native = {};
	for (const browser of coreWebBrowsers) {
		const mdnBrowser = browsersCoreWebToMDN(browser);
		if (
			mdnBrowser &&
			bcd.javascript.builtins[mainFeature][subFeature].__compat &&
			bcd.javascript.builtins[mainFeature][subFeature].__compat.support &&
			bcd.javascript.builtins[mainFeature][subFeature].__compat.support[mdnBrowser]
		) {
			polyfilled[browser] = (feature.browsers || {})[browser];
			native[browser] = bcd.javascript.builtins[mainFeature][subFeature].__compat.support[mdnBrowser];
		}
	}

	compat[featureName] = compat[featureName] || {
		key: featureName,
		data: [],
	};

	compat[featureName].data.push({
		name: featureName,
		polyfillName: polyfillName,
		coreWeb: feature,
		mdn: bcd.javascript.builtins[mainFeature][subFeature],
		polyfilled: polyfilled,
		native: native,
	});

	return true;
}

function mapMainFeatureBuiltin(compat, featureName, polyfillName, feature) {
	let polyfilled = {};
	let native = {};
	for (const browser of coreWebBrowsers) {
		const mdnBrowser = browsersCoreWebToMDN(browser);
		if (
			mdnBrowser &&
			bcd.javascript.builtins[featureName].__compat &&
			bcd.javascript.builtins[featureName].__compat.support &&
			bcd.javascript.builtins[featureName].__compat.support[mdnBrowser]
		) {
			polyfilled[browser] = (feature.browsers || {})[browser];
			native[browser] = bcd.javascript.builtins[featureName].__compat.support[mdnBrowser];
		}
	}

	compat[featureName] = compat[featureName] || {
		key: featureName,
		data: [],
	};

	compat[featureName].data.push({
		name: featureName,
		polyfillName: polyfillName,
		coreWeb: feature,
		mdn: bcd.javascript.builtins[featureName],
		polyfilled: polyfilled,
		native: native,
	});

	return true;
}


function browsersCoreWebToMDN(browser) {
	// core web
	// "android": "<67"
	// "chrome": "4 - 65",
	// "edge": "12 - 15",
	// "edge_mob": "*",
	// "firefox": "2 - 56",
	// "firefox_mob": "<64",
	// "ie": "10 - *",
	// "ie_mob": "10 - *",
	// "ios_saf": "3.2 - 11.2",
	// "opera": "10 - 52",
	// "safari": "3.1 - 12",
	// "samsung_mob": "*",

	// mdn
	// chrome: [Object],
	// chrome_android: [Object],
	// edge: [Array],
	// firefox: [Object],
	// firefox_android: [Object],
	// ie: [Object],
	// opera: [Object],
	// opera_android: [Object],
	// safari: [Object],
	// safari_ios: [Object],
	// samsunginternet_android: [Object],
	// webview_android: [Object]
		
	if (browser === 'android') {
		return 'chrome_android';
	}

	if (browser === 'edge_mob') {
		return;
	}

	if (browser === 'firefox_mob') {
		return;
	}

	if (browser === 'ie_mob') {
		return;
	}

	if (browser === 'samsung_mob') {
		return;
	}

	if (browser === 'ios_saf') {
		return 'safari_ios';
	}

	return browser;
}

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);});
};

function html(strings, ...keys) {
	return strings.flatMap((s, index) => {
		return [s, keys[index] || ''];
	}).join('');
}
