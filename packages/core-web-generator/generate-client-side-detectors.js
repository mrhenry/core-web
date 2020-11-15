const caniuse = require('caniuse-db/fulldata-json/data-2.0.json');
const semver = require("semver");

module.exports = function generateClientSideDetectors(mapping) {
	const out = {};
	for (const browser of Object.keys(caniuse.agents)) {

		const uaAgent = caniuse.agents[browser];
		if (!uaAgent) {
			continue;
		}

		if (browser === 'and_ff') {
			console.log(uaAgent);
		}

		if (!uaAgent.version_list) {
			continue;
		}

		const cleanVersionList = uaAgent.version_list.map((v) => {
			if (!v || !v.version) {
				return false;
			}

			if (semver.validRange(v.version)) {
				return semver.minVersion(v.version).version;
			} else if (semver.coerce(v.version)) {
				return semver.coerce(v.version).version;
			}

			return false;
		}).filter((v) => {
			return !!v;
		});

		const uaVersions = {};
		cleanVersionList.forEach((v) => {
			uaVersions[v] = {
				detectors: []
			}
		});

		const browserInfo = {
			family: browser,
			versionList: cleanVersionList,
			versions: uaVersions,
		};

		for (const i in mapping) {
			const meta = mapping[i];
			if (!meta || !meta.detectSource) {
				continue;
			}

			if (meta.name.indexOf('console')  === 0) { // Too many quirks
				continue;
			}

			if (meta.name.indexOf('Intl')  === 0) { // Too many quirks
				continue;
			}

			if (!meta.browsers || !meta.browsers[browserInfo.family]) {
				continue;
			}

			if (meta.browsers[browserInfo.family].indexOf('*') > -1) {
				continue;
			}

			const max = semver.maxSatisfying(
				browserInfo.versionList,
				meta.browsers[browserInfo.family],
				true
			);

			if (max) {
				browserInfo.versions[max].detectors.push({
					name: meta.name,
					detectSource: meta.detectSource
				});
			}
		};

		out[browser] = browserInfo;
	};

	return out;
};
