const path = require("path");
const { addSideEffect } = require("@babel/helper-module-imports");
const { get, has } = require("@mrhenry/core-web");
const m = require("./ast-matcher");
const detectorsDir = path.join(path.dirname(__dirname), "detectors");

class Injector {
	constructor(features) {
		this.features = features.filter(n => has(n));
		this.featureSet = new Set(this.features);
		this.importSet = new Set();
		this.aliasSet = new Set();
		this.removeSet = new Set();

		this.matchers = this.features.map(name => {
			const spec = get(name);

			if (spec.detector) {
				return this._cachingMatcher(
					name,
					require(path.join(detectorsDir, name + ".js")),
					() => this._addPolyfill(name)
				);
			}

			if (name.indexOf("~") >= 0) {
				return this._cachingMatcher(name, [], () => this._addPolyfill(name));
			}

			if (name.indexOf(".prototype.") >= 0) {
				return this._cachingMatcher(
					name,
					[m(name.replace(/^.+\.prototype\./, ""))],
					() => this._addPolyfill(name)
				);
			}

			return this._cachingMatcher(name, [m(name)], () =>
				this._addPolyfill(name)
			);
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
}

module.exports = Injector;
