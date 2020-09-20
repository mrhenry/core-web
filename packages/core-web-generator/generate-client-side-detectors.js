const lite = require('caniuse-lite');
const semver = require("semver");

// Find any feature that is not supported in the targeted version minus one.
// In browser the detector will pass in the targetted version and fail in any older versions
module.exports = function generateClientSideDetectors(mapping) {
	const out = {};
	for (const browser of Object.keys(lite.agents)) {

		const uaAgent = lite.agents[browser];
		if (!uaAgent) {
			continue;
		}

		if (!uaAgent.versions) {
			continue;
		}

		const cleanVersionList = uaAgent.versions.map((v) => {
			if (!v) {
				return false;
			}

			if (semver.validRange(v)) {
				return semver.minVersion(v).version;
			} else if (semver.coerce(v)) {
				return semver.coerce(v).version;
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
