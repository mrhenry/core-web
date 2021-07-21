"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const polyfillLibrary = require("polyfill-library");
const sources = require("polyfill-library/lib/sources.js");
const path = require("path");
const coreWebDir = path.resolve(__dirname, "../../core-web");
const modulesDir = path.resolve(__dirname, "../../core-web/modules");
const helpersDir = path.resolve(__dirname, "../../core-web/helpers");
const generate_webcomponents_1 = require("./generate-webcomponents");
const browsers_to_engines_1 = require("./browsers-to-engines/browsers-to-engines");
const generate_mappings_1 = require("./generate-mappings");
const generate_element_qsa_scope_1 = require("./generate-element-qsa-scope");
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
        if (providedByBabel(feature)) {
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
    // webcomponents
    await generate_webcomponents_1.generateWebComponents(mapping);
    await generate_element_qsa_scope_1.generateElementQsaScope(mapping);
    // aliases
    const inversedAliases = {};
    aliases.forEach((alias) => {
        alias.entries.forEach((entry) => {
            inversedAliases[entry] = inversedAliases[entry] || [];
            inversedAliases[entry].push(alias.name);
        });
    });
    for (let entryPoint in inversedAliases) {
        const features = inversedAliases[entryPoint];
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
    await generate_mappings_1.generateMappings(mapping);
}
async function gen(feature, mapping, aliases) {
    const meta = await polyfillLibrary.describePolyfill(feature);
    let output = '';
    const helperName = normalizeHelperName(feature);
    const dependencies = await allDependencies(feature);
    if (!helperName) {
        mapping.push({
            name: feature,
            deps: Array.from(dependencies).filter(n => !providedByBabel(n)),
            browsers: meta.browsers,
            engines: browsers_to_engines_1.browsersToEngines(meta.browsers),
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
        if (name && !providedByBabel(dep)) {
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
    const polyfillSource = await streamToString(sources.streamPolyfillSource(feature, "raw"));
    output += polyfillSource;
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
    const dependencies = new Set();
    const meta = await polyfillLibrary.describePolyfill(feature);
    for (const dep of meta.dependencies || []) {
        if (!("string" === typeof dep)) {
            continue;
        }
        dependencies.add(dep);
        const nestedDependencies = await allDependencies(dep);
        nestedDependencies.forEach(dep2 => {
            dependencies.add(dep2);
        });
    }
    return dependencies;
}
function providedByBabel(f) {
    const p = /^(_(String|Array)?Iterator|Function|Date|Math|Object|String|Number|(Weak)?(Map|Set)|Symbol|Array|RegExp|Promise|Reflect|URL|URLSearchParams|setTimeout|setInterval|setImmediate|queueMicrotask|DOMTokenList|NodeList)($|\.)/;
    const typedArrays = /^(|ArrayBuffer|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array)($|\.)/;
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
    'HTMLCanvasElement.protoype.toBlob', // see : https://github.com/Financial-Times/polyfill-library/issues/836
];
async function streamToString(stream) {
    return new Promise((resolve) => {
        let out = '';
        stream.on('data', (chunk) => {
            out += chunk.toString("utf-8");
        });
        stream.on('end', () => {
            resolve(out);
        });
    });
}
//# sourceMappingURL=generate.js.map