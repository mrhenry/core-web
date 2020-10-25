const mapping = require("../helpers/__mapping");
const knownBrowsers = require("../helpers/__browsers");
const clientSideDetectors = require("../helpers/__client-side-detectors");
const semver = require("semver");

const map = new Map();
for (let spec of mapping) {
	map.set(spec.name, spec);
}

const browsers = new Set();
for (let browser of knownBrowsers) {
	browsers.add(browser);
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
		if (!browsers.has(browser)) {
			console.log(`@mrhenry/core-web - unknown target: "${browser}"`);
			console.log(`@mrhenry/core-web - known targets:`);
			console.log(JSON.stringify(knownBrowsers, null, 2) + '\n');
			continue
		}

		all = all.concat(required(browser, targets[browser]));
	}
	return Array.from(new Set(all));
};

function required(browser, version) {
	const out = [];

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
			meta.browsers[browser] &&
			semver.satisfies(semver.coerce(version), meta.browsers[browser]);

		if (isBrowserMatch) {
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
			if (semver.satisfies(semver.coerce(version), versionRange)) {
				const detectors = versionedDetectors.versions[version].detectors;
				if (!detectors || !detectors.length) {
					continue;
				}

				detectors.sort((a, b) => {
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
	let all = [];

	for (const browser of Object.keys(targets)) {
		if (!browsers.has(browser)) {
			continue
		}

		all.push(`${browser}/${semver.coerce(targets[browser])}`);
	}

	console.log("@mrhenry/core-web - using targets:");
	console.log(JSON.stringify(all, null, 2) + '\n');
}
