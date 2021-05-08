"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const polyfillLibrary = require("polyfill-library");
const sources = require("polyfill-library/lib/sources.js");
const path = require("path");
const coreWebDir = path.resolve(__dirname, "../../core-web");
const modulesDir = path.resolve(__dirname, "../../core-web/modules");
const helpersDir = path.resolve(__dirname, "../../core-web/helpers");
const matchersDir = path.resolve(__dirname, "../../babel-plugin-core-web/matchers");
const generate_webcomponents_1 = require("./generate-webcomponents");
const browsers_to_engines_1 = require("./browsers-to-engines/browsers-to-engines");
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
    const mapping = [];
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
    const matchers = new Set(fs.readdirSync(matchersDir).filter((n) => {
        return n.endsWith(".js") && !n.startsWith(".");
    }).map((n) => {
        return n.replace(/\.js$/, "");
    }));
    for (let spec of mapping) {
        if (matchers.has(spec.name)) {
            spec.hasCustomMatcher = true;
        }
    }
    // webcomponents
    await generate_webcomponents_1.generateWebComponents(mapping);
    // aliases
    const inversedAliases = {};
    aliases.forEach((alias) => {
        alias.entries.forEach((entry) => {
            inversedAliases[entry] = inversedAliases[entry] || [];
            inversedAliases[entry].push(alias.name);
        });
    });
    for (let entrypoint in inversedAliases) {
        const features = inversedAliases[entrypoint];
        if (skipAlias(entrypoint)) {
            continue;
        }
        mapping.push({
            browsers: {},
            deps: features,
            engines: {},
            isAlias: true,
            name: entrypoint,
            size: 0,
            hasCustomMatcher: false,
            providedByCoreWeb: false,
        });
    }
    fs.writeFileSync(path.join(coreWebDir, "__mapping.js"), `export const mapping = ${JSON.stringify(mapping, undefined, "  ")}`);
    let knownBrowsers = [];
    mapping.forEach((feature) => {
        for (const browser in feature.browsers) {
            if (!knownBrowsers.includes(browser)) {
                knownBrowsers.push(browser);
            }
        }
    });
    knownBrowsers.sort();
    fs.writeFileSync(path.join(coreWebDir, "__browsers.js"), `export const browsers = ${JSON.stringify(knownBrowsers, undefined, "  ")}`);
    let knownEngines = [];
    mapping.forEach((feature) => {
        for (const engine in feature.engines) {
            if (!knownEngines.includes(engine)) {
                knownEngines.push(engine);
            }
        }
    });
    knownEngines.sort();
    fs.writeFileSync(path.join(coreWebDir, "__engines.js"), `export const engines = ${JSON.stringify(knownEngines, undefined, "  ")}`);
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
            hasCustomMatcher: false,
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
        const nestedDepedencies = await allDependencies(dep);
        nestedDepedencies.forEach(dep2 => {
            dependencies.add(dep2);
        });
    }
    return dependencies;
}
function providedByBabel(f) {
    const p = /^(_(String|Array)?Iterator|Function|Date|Math|Object|String|Number|(Weak)?(Map|Set)|Symbol|Array|RegExp|Promise|Reflect|URL|URLSeachParams|setTimeout|setInterval|setImmediate|queueMicrotask|DOMTokenList|NodeList)($|\.)/;
    const typedArrays = /^(|ArrayBuffer|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array)($|\.)/;
    return p.test(f) || typedArrays.test(f) || f.endsWith(".@@iterator");
}
function providedByCoreWeb(f) {
    const p = /^(HTMLTemplateElement)($|\.)/;
    return p.test(f) || f.endsWith(".@@iterator");
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
function skipAlias(aliasEntrypoint) {
    let skip = false;
    aliasPrefixesToSkip.forEach((prefix) => {
        if (aliasEntrypoint.indexOf(prefix) === 0) {
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
        stream.pipe({
            write: (chunk) => {
                out += chunk.toString("utf-8");
            },
            end: () => {
                resolve(out);
            },
        });
    });
}
//# sourceMappingURL=generate.js.map