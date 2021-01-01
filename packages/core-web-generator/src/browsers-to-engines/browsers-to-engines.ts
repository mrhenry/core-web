import * as bcd from '@mdn/browser-compat-data';
import * as semver from "semver";

export function browsersToEngines(browsers: Record<string, string>) {
	const engineFeatureMapping: Record<string, { engine: string, versions: Array<semver.SemVer> }> = {};
	const lastVersionForEngine: Record<string, semver.SemVer> = {};

	const browserNameMapping: Record<string, string> = {
	"chrome": "chrome",
		// "android": "chrome_android",
		"edge": "edge",
		"firefox": "firefox",
		// "firefox_mob": "firefox_android",
		"ie": "ie",
		"opera": "opera",
		// "op_mini": "opera_android",
		"safari": "safari",
		"ios_saf": "safari_ios",
		// "ios_chr": "safari_ios",
		// "samsung_mob": "samsunginternet_android",
	};

	// Find all version ranges by browser + engine.
	for (const browserName in browsers) {
		const bcdBrowserName = browserNameMapping[browserName];
		let browserVersionRange = browsers[browserName];

		if (bcdBrowserName && bcd.browsers[bcdBrowserName]) {
			for (const releaseVersion in bcd.browsers[bcdBrowserName].releases) {
				const releaseInfo = bcd.browsers[bcdBrowserName].releases[releaseVersion];
				const releaseVersionSemver = semver.coerce(releaseVersion);

				if (
					releaseInfo.engine &&
					releaseInfo.engine_version &&
					browserIsAuthoritiveForEngine(bcdBrowserName, releaseInfo.engine) &&
					releaseVersionSemver &&
					semver.satisfies(releaseVersionSemver, browserVersionRange)
				) {
					if (!engineFeatureMapping[browserName+':'+releaseInfo.engine]) {
						engineFeatureMapping[browserName + ':' + releaseInfo.engine] = {
							engine: releaseInfo.engine,
							versions: []
						};
					}

					const engineVersionSemver = semver.coerce(releaseInfo.engine_version);
					if (engineVersionSemver) {
						engineFeatureMapping[browserName + ':' + releaseInfo.engine].versions.push(engineVersionSemver);
					}
				}

				const engineVersionSemver = semver.coerce(releaseInfo.engine_version || '');

				if (
					releaseInfo.engine &&
					engineVersionSemver && (
						!lastVersionForEngine[releaseInfo.engine] ||
						semver.lt(
							lastVersionForEngine[releaseInfo.engine],
							engineVersionSemver
						)
					)
				) {
					lastVersionForEngine[releaseInfo.engine] = engineVersionSemver;
				}
			}
		}
	}

	const out: Record<string, string> = {};

	// combine ranges per engine to get the total superset
	for (const engineBrowserCombo in engineFeatureMapping) {
		const engine = engineFeatureMapping[engineBrowserCombo].engine;
		const engineVersions = engineFeatureMapping[engineBrowserCombo].versions;

		if (engineVersions.length > 0) {
			engineVersions.sort((a, b) => {
				const av = semver.coerce(a);
				const bv = semver.coerce(b);
				if (!av || !bv) {
					if (a < b) {
						return -1;
					}

					if (a > b) {
						return 1;
					}

					return 0;
				}

				if (semver.lt(av, bv)) {
					return -1;
				}

				if (semver.gt(av, bv)) {
					return 1;
				}

				return 0;
			});

			if (out[engine]) {
				const parts = out[engine].split('-');
				let min = parts[0].trim();
				let max = parts[1].trim();
				// smallest lower end version
				min = semver.lt(semver.coerce(min)!, semver.coerce(engineVersions[0])!) ? min : engineVersions[0].format();
				// greatest upper end version
				max = semver.gt(semver.coerce(max)!, semver.coerce(engineVersions[engineVersions.length - 1])!) ? max : engineVersions[engineVersions.length - 1].format();

				out[engine] = `${min} - ${max}`;
			} else {
				out[engine] = `${engineVersions[0]} - ${engineVersions[engineVersions.length - 1]}`;
			}
		}
	}

	// Make sure that ranges are open ended when needed.
	for (const engine in out) {
		const versionRange = out[engine];
		const parts = versionRange.split('-');
		let min = parts[0].trim();
		let max = parts[1].trim();

		if (semver.eq(semver.coerce(max)!, lastVersionForEngine[engine])) {
			out[engine] = `>= ${min}`;
		}
	}

	return out;
}

// Not all configs are accurate.
// Better to use the biggest (by usage) browser per engine as a "trusted" source.
function browserIsAuthoritiveForEngine(browser: string, engine: string): boolean {
		const mapping: Record<string, Array<string>> = {
		"chrome": ["Blink"],
		"edge": ["EdgeHTML"],
		"safari": ["WebKit"],
		"safari_ios": ["WebKit"],
		"ie": ["Trident"],
		"opera": ["Presto"],
		"firefox": ["Gecko"],
		}
	
	if (!mapping[browser]) {
		return false;
	}

	return mapping[browser].includes(engine);
}

