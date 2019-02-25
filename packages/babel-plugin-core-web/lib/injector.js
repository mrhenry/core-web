const path = require('path');
const {
	addSideEffect
} = require("@babel/helper-module-imports");
const {
	get,
	has
} = require('@mrhenry/core-web');
const m = require('./ast-matcher');
const detectorsDir = path.join(path.dirname(__dirname), 'detectors');

exports.buildInjector = function buildInjector(features) {
	features = features.filter(n => has(n));
	const featureSet = new Set(features);

	const addPolyfill = (path, state, name) => {
		if (!needsImport(state, name)) return;

		for (let dep of get(name).deps) {
			if (featureSet.has(dep)) {
				addPolyfill(path, state, dep);
			}
		}

		pushImport(path, state, `@mrhenry/core-web/modules/${name}`);
	};

	const matchers = features.map((name) => {
		const spec = get(name);

		if (spec.detector) {
			return cachingMatcher(
				name,
				require(path.join(detectorsDir, name + ".js")),
				addPolyfill,
			);
		}

		if (name.indexOf('~') >= 0) {
			return cachingMatcher(
				name,
				[],
				addPolyfill,
			);
		}

		if (name.indexOf('.prototype.') >= 0) {
			return cachingMatcher(
				name,
				[m(name.replace(/^.+\.prototype\./, ''))],
				addPolyfill,
			);
		}

		return cachingMatcher(
			name,
			[m(name)],
			addPolyfill,
		);
	});

	return (path, state) => {
		for (const m of matchers) {
			m(path, state);
		}
	};
}

exports.injectPost = function inject(state) {
	const all = getImports(state);
	for (let i = all.length - 1; i >= 0; i--) {
		const x = all[i];
		addSideEffect(x.path, x.importName);
	}
}

function cachingMatcher(name, matchers, action) {
	return (path, state) => {
		if (!needsMatch(state, name)) {
			return; // nop
		}

		for (const m of matchers) {
			if (m(path.node)) {
				markMatched(state, name);
				return action(path, state, name);
			}
		}
	};
}

const matchCache = Symbol();

function needsMatch(state, name) {
	return !onceForStateTable(state, matchCache).has(name);
}

function markMatched(state, name) {
	onceForStateTable(state, matchCache).add(name);
}

const importCache = Symbol();

function needsImport(state, name) {
	return onceForState(state, importCache, name);
}

function onceForState(state, table, name) {
	const t = onceForStateTable(state, table);
	const done = t.has(name);
	if (!done) {
		t.add(name);
	}
	return !done;
}

function onceForStateTable(state, table) {
	let c = state[table];
	if (!c) {
		c = new Set();
		state[table] = c;
	}
	return c;
}

const importList = Symbol();

function pushImport(path, state, importName) {
	const l = state[importList] || (state[importList] = []);
	l.push({
		path,
		importName
	});
}

function getImports(state) {
	const l = state[importList] || (state[importList] = []);
	return l;
}
