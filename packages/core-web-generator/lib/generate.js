"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const polyfillLibrary = require("@mrhenry/polyfill-library");
const sources = require("@mrhenry/polyfill-library/lib/sources.js");
const path = require("path");
const coreWebDir = path.resolve(__dirname, "../../core-web");
const modulesDir = path.resolve(__dirname, "../../core-web/modules");
const helpersDir = path.resolve(__dirname, "../../core-web/helpers");
const generate_webcomponents_1 = require("./custom-polyfills/generate-webcomponents");
const browsers_to_engines_1 = require("./browsers-to-engines/browsers-to-engines");
const generate_mappings_1 = require("./generate-mappings");
const generate_element_qsa_scope_1 = require("./custom-polyfills/generate-element-qsa-scope");
const generate_crypto_randomuuid_1 = require("./custom-polyfills/generate-crypto-randomuuid");
const semver = require("semver");
const generate_element_qsa_has_1 = require("./custom-polyfills/generate-element-qsa-has");
genAll();
async function genAll() {
    fs.rmSync(modulesDir, {
        recursive: true,
        force: true,
    });
    fs.mkdirSync(modulesDir);
    fs.rmSync(helpersDir, {
        recursive: true,
        force: true,
    });
    fs.mkdirSync(helpersDir);
    let mapping = [];
    const aliases = [];
    const features = await polyfillLibrary.listAllPolyfills();
    for (const feature of features) {
        if (providedByBabel(feature) || ignoredByCoreWeb(feature)) {
            continue;
        }
        if (providedByCoreWeb(feature)) {
            continue;
        }
        let filename = path.join(modulesDir, feature + ".js");
        if (feature.startsWith("_")) {
            filename = path.join(helpersDir, feature + ".js");
        }
        fs.writeFileSync(filename, await gen(feature, mapping, aliases), {
            encoding: "utf-8"
        });
    }
    // custom polyfills
    await (0, generate_webcomponents_1.generateWebComponents)(mapping);
    await (0, generate_element_qsa_scope_1.generateElementQsaScope)(mapping);
    await (0, generate_element_qsa_has_1.generateElementQsaSHas)(mapping);
    await (0, generate_crypto_randomuuid_1.generateCryptoRandomUUID)(mapping);
    // aliases
    const inverseAliases = {};
    aliases.forEach((alias) => {
        alias.entries.forEach((entry) => {
            inverseAliases[entry] = inverseAliases[entry] || [];
            inverseAliases[entry].push(alias.name);
        });
    });
    for (let entryPoint in inverseAliases) {
        const features = inverseAliases[entryPoint];
        if (skipAlias(entryPoint)) {
            continue;
        }
        mapping.push({
            browsers: {},
            deps: features,
            engines: {},
            isAlias: true,
            name: entryPoint,
            size: 0,
            providedByCoreWeb: false,
        });
    }
    fs.writeFileSync(path.join(coreWebDir, "__mapping.js"), `export const mapping = ${JSON.stringify(mapping)}`);
    let knownBrowsers = [];
    mapping.forEach((feature) => {
        for (const browser in feature.browsers) {
            if (!knownBrowsers.includes(browser)) {
                knownBrowsers.push(browser);
            }
        }
    });
    knownBrowsers.sort();
    fs.writeFileSync(path.join(coreWebDir, "__browsers.js"), `export const browsers = ${JSON.stringify(knownBrowsers)}`);
    let knownEngines = [];
    mapping.forEach((feature) => {
        for (const engine in feature.engines) {
            if (!knownEngines.includes(engine)) {
                knownEngines.push(engine);
            }
        }
    });
    knownEngines.sort();
    fs.writeFileSync(path.join(coreWebDir, "__engines.js"), `export const engines = ${JSON.stringify(knownEngines)}`);
    await (0, generate_mappings_1.generateMappings)(mapping);
}
// Override meta data from polyfill-library
async function patchedMeta(feature, meta) {
    switch (feature) {
        default:
            return meta;
    }
}
async function gen(feature, mapping, aliases) {
    let meta = await polyfillLibrary.describePolyfill(feature);
    if (!meta) {
        throw new Error(`Unexpected missing meta data for feature: ${feature}`);
    }
    meta = await patchedMeta(feature, meta);
    let output = '';
    const helperName = normalizeHelperName(feature);
    const dependencies = await allDependencies(feature);
    if (meta.browsers) {
        for (let browser in meta.browsers) {
            let version = meta.browsers[browser];
            browser = browser.trim();
            version = version.trim();
            if ((browser === 'edge' || browser === 'edge_mob') && version === '*') {
                if (meta.browsers['chrome'] && semver.satisfies('79.0.0', meta.browsers['chrome'])) {
                    version = meta.browsers['chrome'];
                }
                else {
                    version = '<79';
                }
            }
            if (browser === 'android' && version === '*') {
                version = '<4.4';
            }
            // Must parse as a semver range.
            // This throws on invalid ranges, which in turn fails the build, acting as a smell.
            new semver.Range(version);
            meta.browsers[browser] = version;
        }
    }
    if (!helperName) {
        mapping.push({
            name: feature,
            deps: Array.from(dependencies).filter(n => !(providedByBabel(n) || ignoredByCoreWeb(n))),
            browsers: meta.browsers,
            engines: (0, browsers_to_engines_1.browsersToEngines)(meta.browsers),
            size: meta.size,
            isAlias: false,
            providedByCoreWeb: false,
        });
    }
    if (meta.aliases) {
        aliases.push({
            name: feature,
            entries: meta.aliases
        });
    }
    dependencies.forEach(dep => {
        const name = normalizeHelperName(dep);
        if (name && !(providedByBabel(dep) || ignoredByCoreWeb(dep))) {
            output += `import ${name} from "@mrhenry/core-web/helpers/${dep}";\n`;
        }
    });
    if (!helperName) {
        output += "(function(undefined) {\n";
        if (meta.detectSource) {
            output += `if (!(${meta.detectSource})) {`;
        }
        // TODO: polyfill is broken upstream
        // fix umdOutro in AbortController
        // https://github.com/mysticatea/abort-controller/blob/master/rollup.config.js#L14
        if (feature === "AbortController") {
            output += `var define;\nvar module;\n`;
        }
    }
    for await (const chunk of sources.streamPolyfillSource(feature, "raw")) {
        output += chunk;
    }
    if (!helperName) {
        if (meta.detectSource) {
            output += `}`;
        }
        output += "}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n";
    }
    if (helperName) {
        output += `export default ${helperName};\n`;
    }
    return output;
}
async function allDependencies(feature) {
    let dependencies = [];
    const meta = await polyfillLibrary.describePolyfill(feature);
    for (const dep of meta?.dependencies || []) {
        if (!("string" === typeof dep)) {
            continue;
        }
        if (providedByBabel(dep) || ignoredByCoreWeb(dep)) {
            continue;
        }
        dependencies.push(dep);
        const nestedDependencies = await allDependencies(dep);
        dependencies = [...nestedDependencies, ...dependencies];
    }
    const uniqueDependencies = [];
    const dependenciesSet = new Set();
    dependencies.forEach((dep) => {
        if (dependenciesSet.has(dep)) {
            return;
        }
        uniqueDependencies.push(dep);
        dependenciesSet.add(dep);
    });
    return uniqueDependencies;
}
function ignoredByCoreWeb(f) {
    return f.startsWith('Intl.');
}
function providedByBabel(f) {
    const p = /^(_StringIterator|Function|Date|Math|Object|String|Number|(Weak)?(Map|Set)|Symbol|Array|RegExp|Promise|AggregateError|Error|_ErrorConstructor|Reflect|URL|URLSearchParams|setTimeout|setInterval|setImmediate|queueMicrotask|globalThis|structuredClone|JSON|Iterator)($|\.)/;
    const typedArrays = /^(ArrayBuffer|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|TypedArray)($|\.)/;
    const domIterables = /^(DOMTokenList|NodeList)\.prototype\.(forEach|@@iterator)($|\.)/;
    if (domIterables.test(f)) {
        return false;
    }
    return p.test(f) || typedArrays.test(f) || f.endsWith(".@@iterator");
}
function providedByCoreWeb(f) {
    const p = /^(HTMLTemplateElement)($|\.)/;
    return p.test(f);
}
function normalizeHelperName(name) {
    if (name === "_mutation" || name === "_DOMTokenList") {
        return name;
    }
    if (name.startsWith("_ESAbstract.")) {
        return name.substr(12);
    }
    if (name.startsWith("_")) {
        return name.substr(1);
    }
    return false;
}
function skipAlias(aliasEntryPoint) {
    let skip = false;
    aliasPrefixesToSkip.forEach((prefix) => {
        if (aliasEntryPoint.indexOf(prefix) === 0) {
            skip = true;
        }
    });
    return skip;
}
const aliasPrefixesToSkip = [
    'blissfuljs',
    'caniuse',
    'css',
    'default',
    'dom',
    'html5',
    'modernizr',
    'HTMLCanvasElement.protoype.toBlob', // see : https://github.com/Financial-Times/polyfill-library/issues/836,
    'PageVisibility',
];
//# sourceMappingURL=generate.js.map