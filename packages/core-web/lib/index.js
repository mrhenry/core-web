const mapping = require("../helpers/__mapping");
const clientSideDetectors = require("../helpers/__client-side-detectors");
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

exports.clientSideDetect = function (targets, opts = {}) {
	if (opts && opts.debug) {
		logUsedTargets(targets);
	}

	let crossBrowserDetectors = [];

	for (const browser of Object.keys(targets)) {
		const versionRange = '<=' + targets[browser];
		const versionedDetectors = clientSideDetectors[browser];
		if (!versionedDetectors) {
			continue;
		}

		for (let i = (versionedDetectors.versionList.length - 1); i >= 0 ; i--) {
			const version = versionedDetectors.versionList[i];
			const ua = new UA(`${browser}/${version}`);

			if (ua.satisfies(versionRange)) {
				const detectors = versionedDetectors.versions[version].detectors;
				if (!detectors || !detectors.length) {
					continue;
				}

				detectors.sort((a, b) => {
					// Picking from Intl related polyfills last.
					// Stupid heuristic to get a wider range of features used in detection.
					if (a.name.indexOf('Intl') === -1 && b.name.indexOf('Intl') > -1) {
						return -1
					}

					if (a.name.indexOf('Intl') > -1 && b.name.indexOf('Intl') === -1) {
						return 1
					}

					if (a.detectSource.length < b.detectSource.length) {
						return -1;
					}

					if (a.detectSource.length > b.detectSource.length) {
						return 1;
					}

					if (a.name < b.name) {
						return -1;
					}

					if (a.name > b.name) {
						return 1;
					}
					
					return 0;
				});

				crossBrowserDetectors = crossBrowserDetectors.concat(detectors.slice(0, 3));
				
				break;
			}
		}
	}

	let condition = "(\n";

	condition += crossBrowserDetectors.map((d) => {
		return d.detectSource;	
	})
		.filter((value, index, self) => {
			return self.indexOf(value) === index;
		})
		.map((d) => {
			let sub = "\t(";
			sub += d.trim();
			sub += ")";

			return sub;
		})
		.join(" && \n");

	condition += "\n)\n";

	return condition;
};

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
