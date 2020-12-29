const polyfillLibrary = require("polyfill-library");
const mergeStream = require("merge2");
const streamToString = require("stream-to-string");
const streamFromString = require("from2-string");
const sources = require("polyfill-library/lib/sources");
const denodeify = require("denodeify");
const path = require("path");
const fs = require("fs");
const writeFile = denodeify(fs.writeFile);
const mkdir = denodeify(fs.mkdir);
const rmdir = denodeify(fs.rmdir);
const readdir = denodeify(fs.readdir);
const bcd = require('@mdn/browser-compat-data');

const modulesDir = path.resolve(__dirname, "../core-web/modules");
const helpersDir = path.resolve(__dirname, "../core-web/helpers");
const detectorsDir = path.resolve(
	__dirname,
	"../babel-plugin-core-web/detectors"
);

const generateWebComponents = require("./generate-webcomponents");
const generateClientsMatrix = require("./generate-clients-matrix");
const browsersToEngines = require("./browsers-to-engines/browsers-to-engines");

genAll();

async function genAll() {
	await rmdir(modulesDir, {
		recursive: true
	});
	await mkdir(modulesDir);

	await rmdir(helpersDir, {
		recursive: true
	});
	await mkdir(helpersDir);

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

		await writeFile(filename, await gen(feature, mapping, aliases), {
			encoding: "utf-8"
		});
	}

	const detectors = new Set(
		(await readdir(detectorsDir))
			.filter(n => n.endsWith(".js") && !n.startsWith("."))
			.map(n => n.replace(/\.js$/, ""))
	);
	for (let spec of mapping) {
		if (detectors.has(spec.name)) {
			spec.detector = true;
		}
	}

	// webcomponents
	await generateWebComponents(mapping);

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
			name: entrypoint,
			deps: features,
			isAlias: true,
		});
	}

	let knownBrowsers = [];
	mapping.forEach((feature) => {
		for (const browser in feature.browsers) {
			if (!knownBrowsers.includes(browser)) {
				knownBrowsers.push(browser);
			}
		}
	});

	let knownEngines = [];
	mapping.forEach((feature) => {
		for (const engine in feature.engines) {
			if (!knownEngines.includes(engine)) {
				knownEngines.push(engine);
			}
		}
	});

	await writeFile(
		path.join(helpersDir, "__mapping.js"),
		`module.exports = ${JSON.stringify(mapping, undefined, "  ")}`
	);

	await writeFile(
		path.join(helpersDir, "__clients-matrix.js"),
		`module.exports = ${JSON.stringify(generateClientsMatrix(mapping), undefined, "  ")}`
	);

	await writeFile(
		path.join(helpersDir, "__browsers.js"),
		`module.exports = ${JSON.stringify(knownBrowsers, undefined, "  ")}`
	);

	await writeFile(
		path.join(helpersDir, "__engines.js"),
		`module.exports = ${JSON.stringify(knownEngines, undefined, "  ")}`
	);
}

async function gen(feature, mapping, aliases) {
	const meta = await polyfillLibrary.describePolyfill(feature);
	const output = mergeStream();
	const helperName = normalizeHelperName(feature);
	const dependencies = await allDependencies(feature);

	if (!helperName) {
		mapping.push({
			name: feature,
			deps: Array.from(dependencies).filter(n => !providedByBabel(n)),
			browsers: meta.browsers,
			engines: browsersToEngines(meta.browsers),
			detectSource: meta.detectSource,
			size: meta.size
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
			output.add(
				streamFromString(`import ${name} from "@mrhenry/core-web/helpers/${dep}";\n`)
			);
		}
	});

	if (!helperName) {
		output.add(streamFromString("(function(undefined) {\n"));

		if (meta.detectSource) {
			output.add(streamFromString(`if (!(${meta.detectSource})) {`));
		}

		// TODO: polyfill is broken upstream
		// fix umdOutro in AbortController
		// https://github.com/mysticatea/abort-controller/blob/master/rollup.config.js#L14
		if (feature === "AbortController") {
			output.add(streamFromString(`var define;\nvar module;\n`));
		}
	}

	output.add(sources.streamPolyfillSource(feature, "raw"));

	if (!helperName) {
		if (meta.detectSource) {
			output.add(streamFromString(`}`));
		}

		output.add(
			streamFromString(
				"}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n"
			)
		);
	}

	if (helperName) {
		output.add(streamFromString(`export default ${helperName};\n`));
	}

	return await streamToString(output);
}

async function allDependencies(feature) {
	const dependencies = new Set();
	const meta = await polyfillLibrary.describePolyfill(feature);

	for (const dep of meta.dependencies || []) {
		dependencies.add(dep);

		const nestedDepedencies = await allDependencies(dep);
		nestedDepedencies.forEach(dep2 => {
			dependencies.add(dep2);
		});
	}

	return dependencies;
}

function providedByBabel(f) {
	const p = /^(_(String|Array)?Iterator|_TypedArray|Function|Date|Math|Object|String|Number|(Weak)?(Map|Set)|Symbol|Array|RegExp|Promise|Reflect)($|\.)/;
	return p.test(f) || f.endsWith(".@@iterator");
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
