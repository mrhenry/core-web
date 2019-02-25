const mapping = require('../helpers/__mapping');
const polyfillLibrary = require('polyfill-library');
const UA = require('@financial-times/polyfill-useragent-normaliser');

const map = new Map();
for (let spec of mapping) {
	map.set(spec.name, spec);
}

exports.names = names;

function names() {
	return Array.from(map.keys());
}

exports.get = get;

function get(name) {
	return map.get(name);
}

exports.has = function(name) {
	return map.has(name);
}

exports.required = function(targets) {
	let all = [];
	for (const browser of Object.keys(targets)) {
		all = all.concat(required(browser, targets[browser]));
	}
	return Array.from(new Set(all));
}

function required(browser, version) {
	const out = [];
	const ua = new UA(`${browser}/${version}`);

	for (const feature of names()) {
		const meta = get(feature);
		if (!meta) continue;

		const isBrowserMatch =
			meta.browsers &&
			meta.browsers[ua.getFamily()] &&
			ua.satisfies(meta.browsers[ua.getFamily()]);
		const unknownOverride = ua.isUnknown();

		if (isBrowserMatch || unknownOverride) {
			out.push(feature);
		}
	}

	return out;
}
