"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.required = exports.has = exports.get = exports.names = void 0;
const __mapping_js_1 = require("./__mapping.js");
const __browsers_js_1 = require("./__browsers.js");
const __engines_js_1 = require("./__engines.js");
const semver = require("semver");
const mapping = __mapping_js_1.mapping;
const knownBrowsers = __browsers_js_1.browsers;
const knownEngines = __engines_js_1.engines;
const map = new Map();
for (let spec of mapping) {
    map.set(spec.name, spec);
}
const browsers = new Set();
for (let browser of knownBrowsers) {
    browsers.add(browser);
}
const engines = new Set();
for (let engine of knownEngines) {
    engines.add(engine);
}
function names() {
    return Array.from(map.keys());
}
exports.names = names;
function get(name) {
    return map.get(name);
}
exports.get = get;
function has(name) {
    return map.has(name);
}
exports.has = has;
;
function required(targets, opts = {}) {
    if (opts && opts.debug) {
        logUsedTargets(targets);
    }
    let all = [];
    if (targets.browsers) {
        for (const browser of Object.keys(targets.browsers)) {
            if (!browsers.has(browser)) {
                console.log(`@mrhenry/core-web - unknown target: "${browser}"`);
                console.log(`@mrhenry/core-web - known targets:`);
                console.log(JSON.stringify(knownBrowsers, null, 2) + '\n');
                continue;
            }
            all = all.concat(requiredForBrowser(browser, targets.browsers[browser]));
        }
    }
    if (targets.engines) {
        for (const engine of Object.keys(targets.engines)) {
            if (!engines.has(engine)) {
                console.log(`@mrhenry/core-web - unknown target: "${engine}"`);
                console.log(`@mrhenry/core-web - known targets:`);
                console.log(JSON.stringify(knownEngines, null, 2) + '\n');
                continue;
            }
            all = all.concat(requiredForEngine(engine, targets.engines[engine]));
        }
    }
    return Array.from(new Set(all));
}
exports.required = required;
;
const semverCache = new Map();
const semverRangeCache = new Map();
function requiredForBrowser(browser, version) {
    const out = [];
    const versionSemVer = semverCache.get(version) ?? semver.coerce(version);
    if (!versionSemVer) {
        return out;
    }
    semverCache.set(version, versionSemVer);
    for (const feature of names()) {
        const meta = get(feature);
        if (!meta) {
            continue;
        }
        if (meta.isAlias) {
            out.push(feature);
            continue;
        }
        if (!meta.browsers || !meta.browsers[browser]) {
            continue;
        }
        const rangeSemVer = semverRangeCache.get(meta.browsers[browser]) ?? new semver.Range(meta.browsers[browser]);
        if (!rangeSemVer) {
            continue;
        }
        semverRangeCache.set(meta.browsers[browser], rangeSemVer);
        if (semver.satisfies(versionSemVer, rangeSemVer)) {
            out.push(feature);
            continue;
        }
    }
    return out;
}
function requiredForEngine(engine, version) {
    const out = [];
    const versionSemVer = semverCache.get(version) ?? semver.coerce(version);
    if (!versionSemVer) {
        return out;
    }
    semverCache.set(version, versionSemVer);
    for (const feature of names()) {
        const meta = get(feature);
        if (!meta) {
            continue;
        }
        if (meta.isAlias) {
            out.push(feature);
            continue;
        }
        if (!meta.engines || !meta.engines[engine]) {
            continue;
        }
        const rangeSemVer = semverRangeCache.get(meta.engines[engine]) ?? new semver.Range(meta.engines[engine]);
        if (!rangeSemVer) {
            continue;
        }
        semverRangeCache.set(meta.engines[engine], rangeSemVer);
        if (semver.satisfies(versionSemVer, rangeSemVer)) {
            out.push(feature);
            continue;
        }
    }
    return out;
}
function logUsedTargets(targets) {
    let all = [];
    if (targets.browsers) {
        for (const browser of Object.keys(targets.browsers)) {
            if (!browsers.has(browser)) {
                continue;
            }
            all.push(`${browser}/${semver.coerce(targets.browsers[browser])}`);
        }
    }
    if (targets.engines) {
        for (const engine of Object.keys(targets.engines)) {
            if (!engines.has(engine)) {
                continue;
            }
            all.push(`${engine}/${semver.coerce(targets.engines[engine])}`);
        }
    }
    console.log("@mrhenry/core-web - using targets:");
    console.log(JSON.stringify(all, null, 2) + '\n');
}
//# sourceMappingURL=index.js.map