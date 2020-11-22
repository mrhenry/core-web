const caniuse = require('caniuse-db/fulldata-json/data-2.0.json');
const semver = require("semver");

module.exports = function generateClientsMatrix(mapping) {
	const out = {};
	for (const browser of Object.keys(caniuse.agents)) {

		const uaAgent = caniuse.agents[browser];
		if (!uaAgent) {
			continue;
		}

		if (!uaAgent.version_list) {
			continue;
		}

		const cleanVersionList = uaAgent.version_list.map((v) => {
			if (!v || !v.version) {
				return false;
			}

			if (semver.validRange(v.version) && v.version.indexOf('-') > -1) {
				return semver.minSatisfying(v.version.split('-'), '*');
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
				features: []
			}
		});

		const browserInfo = {
			family: browser,
			versionList: cleanVersionList,
			versions: uaVersions,
		};

		for (const i in mapping) {
			const meta = mapping[i];
			if (!meta) {
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

			const featureVersion = meta.browsers[browserInfo.family];
			const coercedFeatureVersion = semver.coerce(featureVersion);
			const majorMinusOne = semver.coerce(`${coercedFeatureVersion.major - 1}.${coercedFeatureVersion.minor}.${coercedFeatureVersion.patch}`);
			let fallbackFeatureVersion;
			if (semver.satisfies(coercedFeatureVersion.version, featureVersion)) {
				fallbackFeatureVersion = coercedFeatureVersion.version;
			} else if (semver.satisfies(majorMinusOne.version, featureVersion)) {
				fallbackFeatureVersion = majorMinusOne.version;
			}

			const max = semver.maxSatisfying(
				browserInfo.versionList,
				featureVersion,
				true
			);

			if (max) {
				browserInfo.versions[max].features.push({
					name: meta.name,
					detectSource: meta.detectSource
				});
			} else if (fallbackFeatureVersion) {
				if (!browserInfo.versionList.includes(fallbackFeatureVersion)) {
					browserInfo.versionList.push(fallbackFeatureVersion);
				}

				if (browserInfo.versions[fallbackFeatureVersion]) {
					browserInfo.versions[fallbackFeatureVersion].features.push({
						name: meta.name,
						detectSource: meta.detectSource
					});
				} else {
					browserInfo.versions[fallbackFeatureVersion] = {
						features: [
							{
								name: meta.name,
								detectSource: meta.detectSource
							}
						]
					}
				}
			}
		};

		browserInfo.versionList.sort((a, b) => {
			if (semver.lt(a, b)) {
				return -1;
			}
			if (semver.gt(a, b)) {
				return 1;
			}
			return 0;
		});

		out[browser] = browserInfo;
	};

	return out;
};
