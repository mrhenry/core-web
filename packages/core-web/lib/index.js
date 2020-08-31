const mapping = require("../helpers/__mapping");
const UA = require("@financial-times/polyfill-useragent-normaliser");

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
};

exports.required = function (targets, opts = {}) {
	if (opts && opts.debug) {
		logUsedTargets(targets);
	}

	let all = [];
	for (const browser of Object.keys(targets)) {
		all = all.concat(required(browser, targets[browser]));
	}
	return Array.from(new Set(all));
};

function required(browser, version) {
	const out = [];
	const ua = new UA(`${browser}/${version}`);

	for (const feature of names()) {
		const meta = get(feature);
		if (!meta) {
			continue;
		}

		if (meta.isAlias) {
			out.push(feature);
			continue;
		}

		const isBrowserMatch =
			meta.browsers &&
			meta.browsers[ua.getFamily()] &&
			ua.satisfies(meta.browsers[ua.getFamily()]);
		const unknownOverride = ua.isUnknown();

		if (isBrowserMatch || unknownOverride) {
			out.push(feature);
			continue;
		}
	}

	return out;
}

function logUsedTargets(targets) {
	let all = {};

	for (const browser of Object.keys(targets)) {
		const ua = new UA(`${browser}/${targets[browser]}`);
		all[`${browser}/${targets[browser]}`] = {
			family: ua.getFamily(),
			version: ua.isUnknown() ? 'unknown' : ua.getVersion(),
		};
	}

	console.log("@mrhenry/core-web - using targets:");
	console.log(JSON.stringify(all, null, 2) + '\n');
}
