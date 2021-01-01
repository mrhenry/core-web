import { mapping as mappingJS } from "./helpers/__mapping.js";
import { browsers as knownBrowsersJS } from "./helpers/__browsers.js";
import { engines as knownEnginesJS } from "./helpers/__engines.js";
import * as semver from "semver";

const mapping = mappingJS as Array<Feature>;
const knownBrowsers = knownBrowsersJS as Array<string>;
const knownEngines = knownEnginesJS as Array<string>;

const map: Map<string, Feature> = new Map();
for (let spec of mapping) {
	map.set(spec.name, spec);
}

const browsers: Set<string> = new Set();
for (let browser of knownBrowsers) {
	browsers.add(browser);
}

const engines: Set<string> = new Set();
for (let engine of knownEngines) {
	engines.add(engine);
}

export function names() {
	return Array.from(map.keys());
}

export function get(name: string): Feature|undefined {
	return map.get(name);
}

export function has(name: string): boolean {
	return map.has(name);
};

export function required(targets: { browsers?: Record<string, string>, engines?: Record<string, string> }, opts: { debug?: boolean } = {}) {
	if (opts && opts.debug) {
		logUsedTargets(targets);
	}

	let all: Array<string> = [];
	if (targets.browsers) {
		for (const browser of Object.keys(targets.browsers)) {
			if (!browsers.has(browser)) {
				console.log(`@mrhenry/core-web - unknown target: "${browser}"`);
				console.log(`@mrhenry/core-web - known targets:`);
				console.log(JSON.stringify(knownBrowsers, null, 2) + '\n');
				continue
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
				continue
			}

			all = all.concat(requiredForEngine(engine, targets.engines[engine]));
		}
	}

	return Array.from(new Set(all));
};

function requiredForBrowser(browser: string, version: string): Array<string> {
	const out: Array<string> = [];

	for (const feature of names()) {
		const meta = get(feature);
		if (!meta) {
			continue;
		}

		if (meta.isAlias) {
			out.push(feature);
			continue;
		}

		const versionSemVer = semver.coerce(version);
		if (!versionSemVer) {
			continue;
		}

		const isBrowserMatch =
			meta.browsers &&
			meta.browsers[browser] &&
			semver.satisfies(versionSemVer, meta.browsers[browser]);

		if (isBrowserMatch) {
			out.push(feature);
			continue;
		}
	}

	return out;
}

function requiredForEngine(engine: string, version: string): Array<string> {
	const out: Array<string> = [];

	for (const feature of names()) {
		const meta = get(feature);
		if (!meta) {
			continue;
		}

		if (meta.isAlias) {
			out.push(feature);
			continue;
		}

		const versionSemVer = semver.coerce(version);
		if (!versionSemVer) {
			continue;
		}

		const isEngineMatch =
			meta.engines &&
			meta.engines[engine] &&
			semver.satisfies(versionSemVer, meta.engines[engine]);

		if (isEngineMatch) {
			out.push(feature);
			continue;
		}
	}

	return out;
}

function logUsedTargets(targets: { browsers?: Record<string, string>, engines?: Record<string, string> }) {
	let all: Array<string> = [];

	if (targets.browsers) {
		for (const browser of Object.keys(targets.browsers)) {
			if (!browsers.has(browser)) {
				continue
			}

			all.push(`${browser}/${semver.coerce(targets.browsers[browser])}`);
		}
	}

	if (targets.engines) {
		for (const engine of Object.keys(targets.engines)) {
			if (!engines.has(engine)) {
				continue
			}

			all.push(`${engine}/${semver.coerce(targets.engines[engine])}`);
		}
	}

	console.log("@mrhenry/core-web - using targets:");
	console.log(JSON.stringify(all, null, 2) + '\n');
}
