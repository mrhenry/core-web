"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browsersToEngines = void 0;
const bcd = require("@mdn/browser-compat-data");
const semver = require("semver");
function browsersToEngines(browsers) {
    const engineFeatureMapping = {};
    const lastVersionForEngine = {};
    const browserNameMapping = {
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
    };
    // Find all version ranges by browser + engine.
    for (const browserName in browsers) {
        const bcdBrowserName = browserNameMapping[browserName];
        let browserVersionRange = browsers[browserName];
        if (bcdBrowserName && bcd.browsers[bcdBrowserName]) {
            for (const releaseVersion in bcd.browsers[bcdBrowserName].releases) {
                const releaseInfo = bcd.browsers[bcdBrowserName].releases[releaseVersion];
                if (releaseInfo.engine &&
                    releaseInfo.engine_version &&
                    browserIsAuthoritiveForEngine(bcdBrowserName, releaseInfo.engine) &&
                    semver.satisfies(semver.coerce(releaseVersion), browserVersionRange)) {
                    if (!engineFeatureMapping[browserName + ':' + releaseInfo.engine]) {
                        engineFeatureMapping[browserName + ':' + releaseInfo.engine] = {
                            engine: releaseInfo.engine,
                            versions: []
                        };
                    }
                    engineFeatureMapping[browserName + ':' + releaseInfo.engine].versions.push(releaseInfo.engine_version);
                }
                if (releaseInfo.engine &&
                    releaseInfo.engine_version && (!lastVersionForEngine[releaseInfo.engine] ||
                    semver.lt(semver.coerce(lastVersionForEngine[releaseInfo.engine]), semver.coerce(releaseInfo.engine_version)))) {
                    lastVersionForEngine[releaseInfo.engine] = releaseInfo.engine_version;
                }
            }
        }
    }
    const out = {};
    // combine ranges per engine to get the total superset
    for (const engineBrowserCombo in engineFeatureMapping) {
        const engine = engineFeatureMapping[engineBrowserCombo].engine;
        const engineVersions = engineFeatureMapping[engineBrowserCombo].versions;
        if (engineVersions.length > 0) {
            engineVersions.sort((a, b) => {
                if (semver.lt(semver.coerce(a), semver.coerce(b))) {
                    return -1;
                }
                if (semver.gt(semver.coerce(a), semver.coerce(b))) {
                    return 1;
                }
                return 0;
            });
            if (out[engine]) {
                const parts = out[engine].split('-');
                let min = parts[0].trim();
                let max = parts[1].trim();
                // smallest lower end version
                min = semver.lt(semver.coerce(min), semver.coerce(engineVersions[0])) ? min : engineVersions[0];
                // greatest upper end version
                max = semver.gt(semver.coerce(max), semver.coerce(engineVersions[engineVersions.length - 1])) ? max : engineVersions[engineVersions.length - 1];
                out[engine] = `${min} - ${max}`;
            }
            else {
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
        if (semver.eq(semver.coerce(max), semver.coerce(lastVersionForEngine[engine]))) {
            out[engine] = `>= ${min}`;
        }
    }
    return out;
}
exports.browsersToEngines = browsersToEngines;
// Not all configs are accurate.
// Better to use the biggest (by usage) browser per engine as a "trusted" source.
function browserIsAuthoritiveForEngine(browser, engine) {
    const mapping = {
        "chrome": ["Blink"],
        "edge": ["EdgeHTML"],
        "safari": ["WebKit"],
        "safari_ios": ["WebKit"],
        "ie": ["Trident"],
        "opera": ["Presto"],
        "firefox": ["Gecko"],
    };
    if (!mapping[browser]) {
        return false;
    }
    return mapping[browser].includes(engine);
}
//# sourceMappingURL=browsers-to-engines.js.map