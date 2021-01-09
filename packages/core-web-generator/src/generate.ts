import * as fs from 'fs';
import * as polyfillLibrary from "polyfill-library";
import * as sources from "polyfill-library/lib/sources.js";
import * as path from "path";

const coreWebDir = path.resolve(__dirname, "../../core-web");
const modulesDir = path.resolve(__dirname, "../../core-web/modules");
const helpersDir = path.resolve(__dirname, "../../core-web/helpers");
const matchersDir = path.resolve(
	__dirname,
	"../../babel-plugin-core-web/matchers"
);

import { generateWebComponents } from "./generate-webcomponents";
import { browsersToEngines } from "./browsers-to-engines/browsers-to-engines";

genAll();

async function genAll() {
	fs.rmdirSync(modulesDir, {
		recursive: true
	});

	fs.mkdirSync(modulesDir);

	fs.rmdirSync(helpersDir, {
		recursive: true
	});

	fs.mkdirSync(helpersDir);

	const mapping: Array<Feature> = [];
	const aliases: Array<FeatureAlias> = [];

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

	const matchers = new Set(fs.readdirSync(matchersDir,).filter((n: string) => {
		return n.endsWith(".js") && !n.startsWith(".");
	}).map((n: string) => {
		return n.replace(/\.js$/, "");
	}));

	for (let spec of mapping) {
		if (matchers.has(spec.name)) {
			spec.hasCustomMatcher = true;
		}
	}

	// webcomponents
	await generateWebComponents(mapping);

	// aliases
	const inversedAliases: Record<string, Array<string>> = {};
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

	fs.writeFileSync(
		path.join(coreWebDir, "__mapping.js"),
		`export const mapping = ${JSON.stringify(mapping, undefined, "  ")}`
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
		`export const browsers = ${JSON.stringify(knownBrowsers, undefined, "  ")}`
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
		`export const engines = ${JSON.stringify(knownEngines, undefined, "  ")}`
	);
}

async function gen(feature: string, mapping: Array<Feature>, aliases: Array<FeatureAlias>) {
	const meta = await polyfillLibrary.describePolyfill(feature);
	let output = '';
	const helperName = normalizeHelperName(feature);
	const dependencies = await allDependencies(feature);

	if (!helperName) {
		mapping.push({
			name: feature,
			deps: Array.from(dependencies).filter(n => !providedByBabel(n)),
			browsers: meta.browsers,
			engines: browsersToEngines(meta.browsers),
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
		output += `export default ${helperName};\n`
	}

	return output;
}

async function allDependencies(feature: string): Promise<Set<string>> {
	const dependencies: Set<string> = new Set();
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

function providedByBabel(f: string): boolean {
	const p = /^(_(String|Array)?Iterator|ArrayBuffer|Function|Date|Math|Object|String|Number|(Weak)?(Map|Set)|Symbol|Array|RegExp|Promise|Reflect|URL|URLSeachParams|setTimeout|setInterval|queueMicroTask|DOMTokenList|NodeList)($|\.)/;
	return p.test(f) || f.endsWith(".@@iterator");
}

function providedByCoreWeb(f: string): boolean {
	const p = /^(HTMLTemplateElement)($|\.)/;
	return p.test(f) || f.endsWith(".@@iterator");
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

function skipAlias(aliasEntrypoint: string): boolean {
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

type StreamCache = {
	pipe: (dest: StreamCacheDestination) => void
}

type StreamCacheDestination = {
	write: (chunk: Buffer) => void,
	end: () => void
}

async function streamToString(stream: StreamCache) {
	return new Promise<string>((resolve) => {
		let out = '';
		stream.pipe({
			write: (chunk: Buffer) => {
				out += chunk.toString("utf-8");
			},
			end: () => {
				resolve(out);
			},
		});
	});
}
