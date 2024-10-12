import * as fs from 'fs';
import * as polyfillLibrary from "@mrhenry/polyfill-library";
import * as sources from "@mrhenry/polyfill-library/lib/sources.js";
import * as path from "path";

const coreWebDir = path.resolve(__dirname, "../../core-web");
const modulesDir = path.resolve(__dirname, "../../core-web/modules");
const helpersDir = path.resolve(__dirname, "../../core-web/helpers");

import { generateWebComponents } from "./custom-polyfills/generate-webcomponents";
import { browsersToEngines } from "./browsers-to-engines/browsers-to-engines";
import { generateMappings } from './generate-mappings';
import { generateElementQsaScope } from './custom-polyfills/generate-element-qsa-scope';
import { generateCryptoRandomUUID } from './custom-polyfills/generate-crypto-randomuuid';
import * as semver from 'semver';
import { generateElementQsaSHas } from './custom-polyfills/generate-element-qsa-has';

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

	let mapping: Array<Feature> = [];
	const aliases: Array<FeatureAlias> = [];

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
	await generateWebComponents(mapping);
	await generateElementQsaScope(mapping);
	await generateElementQsaSHas(mapping);
	await generateCryptoRandomUUID(mapping);

	// aliases
	const inverseAliases: Record<string, Array<string>> = {};
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

	fs.writeFileSync(
		path.join(coreWebDir, "__mapping.js"),
		`export const mapping = ${JSON.stringify(mapping)}`
	);

	let knownBrowsers: Array<string> = [];
	mapping.forEach((feature) => {
		for (const browser in feature.browsers) {
			if (!knownBrowsers.includes(browser)) {
				knownBrowsers.push(browser);
			}
		}
	});

	knownBrowsers.sort();

	fs.writeFileSync(
		path.join(coreWebDir, "__browsers.js"),
		`export const browsers = ${JSON.stringify(knownBrowsers)}`
	);

	let knownEngines: Array<string> = [];
	mapping.forEach((feature) => {
		for (const engine in feature.engines) {
			if (!knownEngines.includes(engine)) {
				knownEngines.push(engine);
			}
		}
	});

	knownEngines.sort();

	fs.writeFileSync(
		path.join(coreWebDir, "__engines.js"),
		`export const engines = ${JSON.stringify(knownEngines)}`
	);

	await generateMappings(mapping);
}

// Override meta data from polyfill-library
async function patchedMeta(feature: string, meta: sources.PolyfillMeta): Promise<sources.PolyfillMeta> {
	switch (feature) {
		default:
			return meta;
	}
}

async function gen(feature: string, mapping: Array<Feature>, aliases: Array<FeatureAlias>) {
	let meta = await polyfillLibrary.describePolyfill(feature);
	if (!meta) {
		throw new Error(`Unexpected missing meta data for feature: ${feature}`)
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
					version = meta.browsers['chrome']
				} else {
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
			engines: browsersToEngines(meta.browsers),
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
		output += `export default ${helperName};\n`
	}

	return output;
}

async function allDependencies(feature: string): Promise<Set<string>> {
	const dependencies: Set<string> = new Set();
	const meta = await polyfillLibrary.describePolyfill(feature);

	for (const dep of meta?.dependencies || []) {
		if (!("string" === typeof dep)) {
			continue;
		}

		if (providedByBabel(dep) || ignoredByCoreWeb(dep)) {
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

function ignoredByCoreWeb(f: string): boolean {
	return f.startsWith('Intl.');
}

function providedByBabel(f: string): boolean {
	const p = /^(_StringIterator|Function|Date|Math|Object|String|Number|(Weak)?(Map|Set)|Symbol|Array|RegExp|Promise|AggregateError|Error|_ErrorConstructor|Reflect|URL|URLSearchParams|setTimeout|setInterval|setImmediate|queueMicrotask|globalThis|structuredClone|JSON)($|\.)/;
	const typedArrays = /^(ArrayBuffer|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|TypedArray)($|\.)/;

	const domIterables = /^(DOMTokenList|NodeList)\.prototype\.(forEach|@@iterator)($|\.)/;
	if (domIterables.test(f)) {
		return false;
	}
	
	return p.test(f) || typedArrays.test(f) || f.endsWith(".@@iterator");
}

function providedByCoreWeb(f: string): boolean {
	const p = /^(HTMLTemplateElement)($|\.)/;
	return p.test(f);
}

function normalizeHelperName(name: string): string | boolean {
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

function skipAlias(aliasEntryPoint: string): boolean {
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


async function streamToString(stream: fs.ReadStream) {
	return new Promise<string>((resolve) => {
		let out = '';

		stream.on('data', (chunk: Buffer) => {
			out += chunk.toString("utf-8");
		});

		stream.on('end', () => {
			resolve(out);
		});
	});
}
