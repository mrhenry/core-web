'use strict';

const { mapping } = require('@mrhenry/core-web/lib/__mapping.js');
const bcd = require('@mdn/browser-compat-data');
const fs = require('fs');
const path = require('path');
const tableHTML = require('./templates/table');
const pageHTML = require('./templates/page');
const polyfillCardHTML = require('./templates/polyfill-card');
const { browsersCoreWebToMDN, coreWebBrowsers } = require('./browsers');
const polyfillLibrary = require('@mrhenry/polyfill-library');
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
			sitemap[entry.polyfillName] = {
				path: path.join('/polyfills/', entry.slug, '/'),
				title: entry.name,
			};
		}

		compatArray.push(compat[key]);
	}

	compatArray.sort((a, b) => {
		if (a.key.split('.')[0].toLowerCase() < b.key.split('.')[0].toLowerCase()) {
			return -1;
		}
		
		if (a.key.split('.')[0].toLowerCase() > b.key.split('.')[0].toLowerCase()) {
			return 1;
		}

		if (a.key < b.key) {
			return -1;
		}

		if (a.key > b.key) {
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
			if (!fs.existsSync(path.join(__dirname, '../../dist/polyfills/', entry.slug.toLowerCase() ))) {
				fs.mkdirSync(path.join(__dirname, '../../dist/polyfills/', entry.slug.toLowerCase()), {
					recursive: true
				});
			}

			fs.writeFileSync(
				path.join(__dirname, '../../dist/polyfills/', entry.slug.toLowerCase(), 'index.json'),
				JSON.stringify(entry, null, 2)
			);

			fs.writeFileSync(
				path.join(__dirname, '../../dist/polyfills/', entry.slug.toLowerCase(), 'index.html'),
				polyfillCardHTML(assetMap, entry, sitemap)
			);

			fs.writeFileSync(
				path.join(__dirname, '../../dist/polyfills/', entry.slug.toLowerCase(), 'og-image.jpg'),
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

	if (name === 'Element.prototype.inert') {
		// skip, deprecated
		return true;
	}

	if (name === 'Element.prototype.placeholder') {
		if (mapPrototypeFeatureAPI(compat, `HTMLInputElement.prototype.placeholder`, feature.name, feature)) {
			return true;
		}
	}

	if (name === 'Element.prototype.dataset') {
		if (mapPrototypeFeatureAPI(compat, `HTMLElement.prototype.dataset`, feature.name, feature)) {
			return true;
		}
	}

	if (name === 'Event.scrollend') {
		if (mapPropertyFeatureAPI(compat, `Element.scrollend_event`, feature.name, feature)) {
			return true;
		}
	}

	if (name === 'Event.focusin') {
		if (mapPropertyFeatureAPI(compat, `Element.focusin_event`, feature.name, feature)) {
			return true;
		}
	}

	if (name === 'Event.hashchange') {
		if (mapPropertyFeatureAPI(compat, `Window.hashchange_event`, feature.name, feature)) {
			return true;
		}
	}

	if (name === 'MediaQueryList.prototype.addEventListener') {
		if (mapPropertyFeatureAPI(compat, `MediaQueryList.EventTarget_inheritance`, feature.name, feature)) {
			return true;
		}
	} else if (name === 'MediaQueryList.prototype.removeEventListener') {
		// skip, already handled
		return true;
	}

	if (name === '~custom-elements') {
		if (mapPropertyFeatureAPI(compat, 'Window.customElements', feature.name, feature)) {
			return true;
		}
	}
	
	if (name.includes('.prototype.')) {
		if (
			mapPrototypeFeatureAPI(compat, name, feature.name, feature) ||
			mapPrototypeFeatureBuiltin(compat, name, feature.name, feature)
		) {
			return true;
		}
	}
	
	if (name.includes('.') && !(name.startsWith('Window.') || name.startsWith('window.')) && !(name.startsWith('Self.') || name.startsWith('self.'))) {
		if (
			mapStaticPropertyFeatureAPI(compat, name, feature.name, feature) ||
			mapPropertyFeatureAPI(compat, name, feature.name, feature) ||
			mapPropertyFeatureBuiltin(compat, name, feature.name, feature) ||
			mapPropertyFeatureAPI(compat, toTitleCase(name), feature.name, feature) ||
			mapPropertyFeatureBuiltin(compat, toTitleCase(name), feature.name, feature)
		) {
			return true;
		}
	}
	
	if (bcd.api[name]) {
		if (mapMainFeatureAPI(compat, name, feature.name, feature)) {
			return true;
		}
	}
	
	if (bcd.javascript.builtins[name]) {
		if (mapMainFeatureBuiltin(compat, name, feature.name, feature)) {
			return true;
		}
	}
	
	if (bcd.api.Window[name]) {
		if (mapWindowFeatureAPI(compat, name, feature.name, feature)) {
			return true;
		}
	}
	
	if (bcd.api.WorkerGlobalScope[name]) {
		if (mapWorkerGlobalScopeFeatureAPI(compat, name, feature.name, feature)) {
			return true;
		}
	}

	if (name.startsWith('Window.') || name.startsWith('window.')) {
		if (handleFeature(compat, name.substr(7), feature)) {
			return true;
		}
	}

	if (name === '~element-qsa-has') {
		if (mapQuerySelectorFeature(compat, `querySelector with :has pseudo class`, feature.name, feature)) {
			return true;
		}
	}

	if (name === '~element-qsa-scope') {
		if (mapQuerySelectorFeature(compat, `querySelector with :scope pseudo class`, feature.name, feature)) {
			return true;
		}
	}

	console.log('skipped', feature.name);
}

function mapWindowFeatureAPI(compat, featureName, polyfillName, feature) {
	let polyfilled = {};
	let native = {};
	for (const browser of coreWebBrowsers) {
		const mdnBrowser = browsersCoreWebToMDN(browser);
		if (
			mdnBrowser &&
			bcd.api.Window[featureName].__compat &&
			bcd.api.Window[featureName].__compat.support &&
			bcd.api.Window[featureName].__compat.support[mdnBrowser]
		) {
			polyfilled[browser] = (feature.browsers || {})[browser];
			native[browser] = bcd.api.Window[featureName].__compat.support[mdnBrowser];
		}
	}

	if (compat['Window.' + featureName]) {
		return true;
	}

	compat['Window.' + featureName] = compat['Window.' + featureName] || {
		key: 'Window.' + featureName,
		data: [],
	};

	compat['Window.' + featureName].data.push({
		name: 'Window.' + featureName,
		slug: 'Window.' + featureName,
		polyfillName: polyfillName,
		coreWeb: feature,
		mdn: bcd.api.Window[featureName],
		polyfilled: polyfilled,
		native: native,
	});

	return true;
}

function mapWorkerGlobalScopeFeatureAPI(compat, featureName, polyfillName, feature) {
	let polyfilled = {};
	let native = {};
	for (const browser of coreWebBrowsers) {
		const mdnBrowser = browsersCoreWebToMDN(browser);
		if (
			mdnBrowser &&
			bcd.api.WorkerGlobalScope[featureName].__compat &&
			bcd.api.WorkerGlobalScope[featureName].__compat.support &&
			bcd.api.WorkerGlobalScope[featureName].__compat.support[mdnBrowser]
		) {
			polyfilled[browser] = (feature.browsers || {})[browser];
			native[browser] = bcd.api.WorkerGlobalScope[featureName].__compat.support[mdnBrowser];
		}
	}

	compat['self.' + featureName] = compat['self.' + featureName] || {
		key: 'self.' + featureName,
		data: [],
	};

	compat['self.' + featureName].data.push({
		name: 'self.' + featureName,
		slug: 'self.' + featureName,
		polyfillName: polyfillName,
		coreWeb: feature,
		mdn: bcd.api.WorkerGlobalScope[featureName],
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
		slug: featureName,
		polyfillName: polyfillName,
		coreWeb: feature,
		mdn: bcd.api[mainFeature][subFeature],
		polyfilled: polyfilled,
		native: native,
	});

	return true;
}

function mapStaticPropertyFeatureAPI(compat, featureName, polyfillName, feature) {
	const mainFeature = featureName.split('.')[0];
	const subFeature = featureName.split('.')[1] + '_static';

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
		slug: featureName,
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
		slug: featureName,
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
		slug: featureName,
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
		slug: featureName,
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
		slug: featureName,
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
		slug: featureName,
		polyfillName: polyfillName,
		coreWeb: feature,
		mdn: bcd.javascript.builtins[featureName],
		polyfilled: polyfilled,
		native: native,
	});

	return true;
}

function mapQuerySelectorFeature(compat, prettyName, polyfillName, feature) {
	let polyfilled = {};
	for (const browser of coreWebBrowsers) {
		const mdnBrowser = browsersCoreWebToMDN(browser);
		if (
			mdnBrowser
		) {
			polyfilled[browser] = (feature.browsers || {})[browser];
		}
	}

	compat[prettyName] = compat[prettyName] || {
		key: prettyName,
		data: [],
	};

	compat[prettyName].data.push({
		name: prettyName,
		slug: prettyName.replaceAll(' ', '-').replaceAll(':', ''),
		polyfillName: polyfillName,
		coreWeb: feature,
		polyfilled: polyfilled,
	});

	return true;
}

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
};
