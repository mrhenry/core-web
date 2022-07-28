import { mapping as mappingJS } from "./__mapping.js";
import { browsers as knownBrowsersJS } from "./__browsers.js";
import { engines as knownEnginesJS } from "./__engines.js";
import * as browserslist from "browserslist";
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

export function required(targets: { browsers?: Record<string, string>, engines?: Record<string, string>, browserslist?: string }, opts: { debug?: boolean } = {}) {
	if (opts && opts.debug) {
		logUsedTargets(targets);
	}

	let hasBrowsers = false;
	let hasEngines = false;

	let all: Array<string> = [];
	if (targets.browsers) {
		for (const browser of Object.keys(targets.browsers)) {
			hasBrowsers = true;

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
			hasEngines = true;

			if (!engines.has(engine)) {
				console.log(`@mrhenry/core-web - unknown target: "${engine}"`);
				console.log(`@mrhenry/core-web - known targets:`);
				console.log(JSON.stringify(knownEngines, null, 2) + '\n');
				continue
			}

			all = all.concat(requiredForEngine(engine, targets.engines[engine]));
		}
	}

	if (!hasBrowsers && !hasEngines) {
		console.log(targets.browserslist);
		
		const browsers = browserslist(targets.browserslist ?? null);
		console.log(browsers.map(x => parseRange(x)));
	}

	return Array.from(new Set(all));
};

const semverCache: Map<string, semver.SemVer> = new Map();
const semverRangeCache: Map<string, semver.Range> = new Map();

function requiredForBrowser(browser: string, version: string): Array<string> {
	const out: Array<string> = [];

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
			continue
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

function requiredForEngine(engine: string, version: string): Array<string> {
	const out: Array<string> = [];

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

function parseRange(range: string) {
	let browser = '';
	let versions = [];
	let operators = [];

	let buffer = '';

	for (let index = 0; index < range.length; index++) {
		const char = range[index];

		switch (char) {
			case ' ':
				if (!browser) {
					browser = buffer;
					buffer = '';
				} else {
					buffer += char;
				}
				break;
			case '|':
			case '<':
			case '>':
			case '=':
			case '-':
				buffer += char;
				break;
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '0':
			case '*':
				{
					if (buffer.length > 0) {
						operators.push(buffer)
						buffer = '';
					}

					const version = consumeVersionToken(range.slice(index));
					index += version.length - 1;

					if (version !== '*') {
						versions.push(version);
					}
					break;
				}

			default:
				buffer += char;
		}
	}

	if (buffer.length > 0) {
		operators.push(buffer)
		buffer = '';
	}

	operators = operators.filter(operator => operator.trim().length > 0);

	if (
		operators.length === 1 &&
		operators[0] === '-' &&
		versions.length === 2
	) {
		versions = [versions[1]];
		operators = [];
	}

	return {
		browser: browser.trim(),
		versions: versions,
		isRanged: operators.length > 0,
		hasBoundary: true,
	};
}

function consumeVersionToken(x: string) {
	if (x === 'all') {
		return '*';
	}

	let buffer = '';

	for (const char of x) {
		switch (char) {
			case '<':
			case '>':
			case '=':
			case '|':
			case ' ':
			case '~':
			case '^':
				return buffer;

			default:
				buffer += char;
				break;
		}
	}

	return buffer;
}
