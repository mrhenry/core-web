'use strict';

const { mapping } = require('@mrhenry/core-web/lib/__mapping.js');
const bcd = require('@mdn/browser-compat-data');
const fs = require('fs');
const path = require('path');
const tableHTML = require('./templates/table');
const pageHTML = require('./templates/page');
const polyfillCardHTML = require('./templates/polyfill-card');
const { browsersCoreWebToMDN, coreWebBrowsers } = require('./browsers');
const polyfillLibrary = require('polyfill-library');
const { polyfillCardOGImage, allPolyfillsCardOGImage } = require('./templates/polyfill-card-og-image');
const allPolyfillsHTML = require('./templates/polyfills');

module.exports = generate;

async function generate(assetMap) {
	const compat = {};

	mapping.forEach((feature) => {
		handleFeature(compat, feature.name, feature);
	});

	const sitemap = {};

	const compatArray = [];
	for (const key in compat) {
		const feature = compat[key];

		for (const entry of feature.data) {
			entry.polyfillio = await polyfillLibrary.describePolyfill(entry.polyfillName);
			sitemap[entry.name] = path.join('/polyfills/', entry.name, '/');
		}

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

	const allPolyfills = [];
	for (const feature of compatArray) {
		for (const entry of feature.data) {
			if (entry.name.indexOf('Intl') > -1) {
				continue;
			}

			allPolyfills.push(entry);
			if (!fs.existsSync(path.join(__dirname, '../../dist/polyfills/', entry.name.toLowerCase() ))) {
				fs.mkdirSync(path.join(__dirname, '../../dist/polyfills/', entry.name.toLowerCase()), {
					recursive: true
				});
			}

			fs.writeFileSync(
				path.join(__dirname, '../../dist/polyfills/', entry.name.toLowerCase(), 'index.json'),
				JSON.stringify(entry, null, 2)
			);

			fs.writeFileSync(
				path.join(__dirname, '../../dist/polyfills/', entry.name.toLowerCase(), 'index.html'),
				polyfillCardHTML(assetMap, entry, sitemap)
			);

			fs.writeFileSync(
				path.join(__dirname, '../../dist/polyfills/', entry.name.toLowerCase(), 'og-image.jpg'),
				await polyfillCardOGImage(entry)
			);
		}
	}

	fs.writeFileSync(
		path.join(__dirname, '../../dist/polyfills/index.html'),
		allPolyfillsHTML(assetMap, allPolyfills, sitemap)
	);

	fs.writeFileSync(
		path.join(__dirname, '../../dist/polyfills/og-image.jpg'),
		await allPolyfillsCardOGImage()
	);

	let tables = '';
	compatArray.forEach((feature) => {
		tables = tables + tableHTML(feature);
	});

	if (!fs.existsSync(path.join(__dirname, '../../dist/browser-compat'))) {
		fs.mkdirSync(path.join(__dirname, '../../dist/browser-compat'), {recursive: true});
	}

	fs.writeFileSync(path.join(__dirname, '../../dist/browser-compat/index.html'), pageHTML(assetMap, tables));
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

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
};

