const path = require("path");
const { addSideEffect } = require("@babel/helper-module-imports");
const { get, has } = require("@mrhenry/core-web");
const m = require("./ast-matcher");
const matchersDir = path.join(path.dirname(__dirname), "matchers");

class Injector {
	constructor(features, opts = {}) {
		this.features = features.filter(n => has(n));
		this.featureSet = new Set(this.features);
		this.importSet = new Set();
		this.aliasSet = new Set();
		this.removeSet = new Set();
		this.debug = opts.debug || false;

		this.matchers = this.features.map(name => {
			const spec = get(name);

			if (spec.hasCustomMatcher) {
				return this._cachingMatcher(
					name,
					require(path.join(matchersDir, name + ".js")),
					() => {
						this._addPolyfill(name)
					}
				);
			}

			if (name.indexOf("~") >= 0) {
				return;
			}

			if (name.indexOf(".prototype.") >= 0) {
				return this._cachingMatcher(
					name,
					[m(name.replace(/^.+\.prototype\./, ""))],
					() => {
						this._addPolyfill(name)
					}
				);
			}

			return this._cachingMatcher(
				name,
				[m(name)],
				() => {
					this._addPolyfill(name)
				}
			);
		}).filter((matcher) => {
			return !!matcher;	
		});
	}

	_addPolyfill(name) {
		if (!has(name)) {
			return;
		}

		for (const dep of get(name).deps) {
			this._addPolyfill(dep);
		}

		if (get(name).isAlias) {
			this.aliasSet.add(name);
			return;
		}

		if (this.featureSet.has(name)) {
			this.importSet.add(name);
		}
	}

	_cachingMatcher(name, matchers, action) {
		return (path, state) => {
			if (this.importSet.has(name)) {
				return; // noop
			}

			if (this.aliasSet.has(name)) {
				return; // noop
			}

			for (const m of matchers) {
				if (m(path.node)) {
					return action();
				}
			}
		};
	}

	inject(path, state) {
		if (this.debug) {
			logImportedPolyfills([...this.importSet]);
		}

		// insert in reverse order
		const all = [...this.importSet];
		while (all.length) {
			const importName = all.pop();
			addSideEffect(path, `@mrhenry/core-web/modules/${importName}`);
		}

		// remove unused imports
		for (const path of this.removeSet) {
			path.remove();
		}
	}

	handleImport(path, state) {
		const PREFIX = "@mrhenry/core-web/modules/";
		if (path.node.source.value.startsWith(PREFIX)) {
			const feature = path.node.source.value.substr(PREFIX.length);
			this._addPolyfill(feature);
			this.removeSet.add(path);
		}
	}

	handleGeneric(path, state) {
		for (const m of this.matchers) {
			m(path, state);
		}
	}

	reset() {
		this.importSet = new Set();
		this.aliasSet = new Set();
		this.removeSet = new Set();
	}
}

module.exports = Injector;

function logImportedPolyfills(list) {
	if (!list || !list.length) {
		return;
	}

	let cost = 0;

	list.sort().forEach((imported) => {
		const spec = get(imported);
		if (spec && spec.size) {
			cost += spec.size;
		}
	});

	console.log(`@mrhenry/core-web - importing: ${Math.ceil(cost / 1000)}KB -`, list.sort().join(', '));
}
