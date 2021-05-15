const { addSideEffect } = require("@babel/helper-module-imports");
const { get, has } = require("@mrhenry/core-web");
const { matchNode } = require("./ast-matcher");

const identifierMatcher = require("./matchers/__identifier_matcher");
const identifierMatcherMap = require("./matchers/__identifier_matcher_map.json");
const memberExpressionMatcher = require("./matchers/__member_expression_matcher");
const memberExpressionMatcherMap = require("./matchers/__member_expression_matcher_map.json");
const callExpressionMatcher = require("./matchers/__call_expression_matcher");
const callExpressionMatcherMap = require("./matchers/__call_expression_matcher_map.json");
const newExpressionMatcher = require("./matchers/__new_expression_matcher");
const newExpressionMatcherMap = require("./matchers/__new_expression_matcher_map.json");

class Injector {
	constructor(features, opts = {}) {
		this.features = features.filter(n => has(n));
		this.featureSet = new Set(this.features);
		this.importSet = new Set();
		this.aliasSet = new Set();
		this.removeSet = new Set();
		this.debug = opts.debug || false;
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

	handleIdentifier(path, state) {
		const matchers = identifierMatcher(path.node, identifierMatcherMap);
		if (!matchers) {
			return;
		}

		for (const x of matchers) {
			if (!this.featureSet.has(x.feature)) {
				continue;
			}

			if (this.importSet.has(x.feature)) {
				continue;
			}

			if (this.aliasSet.has(x.feature)) {
				continue;
			}

			const _state = {};
			const matched = matchNode(x.matcher, path.node, _state);
			if (matched) {
				this._addPolyfill(x.feature);
			}
		}
	}

	handleMemberExpression(path, state) {
		const matchers = memberExpressionMatcher(path.node, memberExpressionMatcherMap);
		if (!matchers) {
			return;
		}

		for (const x of matchers) {
			if (!this.featureSet.has(x.feature)) {
				continue;
			}

			if (this.importSet.has(x.feature)) {
				continue;
			}

			if (this.aliasSet.has(x.feature)) {
				continue;
			}

			const _state = {};
			const matched = matchNode(x.matcher, path.node, _state);
			if (matched) {
				this._addPolyfill(x.feature);
			}
		}
	}

	handleCallExpression(path, state) {
		const matchers = callExpressionMatcher(path.node, callExpressionMatcherMap);
		if (!matchers) {
			return;
		}

		for (const x of matchers) {
			if (!this.featureSet.has(x.feature)) {
				continue;
			}

			if (this.importSet.has(x.feature)) {
				continue;
			}

			if (this.aliasSet.has(x.feature)) {
				continue;
			}

			const _state = {};
			const matched = matchNode(x.matcher, path.node, _state);
			if (matched) {
				this._addPolyfill(x.feature);
			}
		}
	}

	handleNewExpression(path, state) {
		const matchers = newExpressionMatcher(path.node, newExpressionMatcherMap);
		if (!matchers) {
			return;
		}

		for (const x of matchers) {
			if (!this.featureSet.has(x.feature)) {
				continue;
			}

			if (this.importSet.has(x.feature)) {
				continue;
			}

			if (this.aliasSet.has(x.feature)) {
				continue;
			}

			const _state = {};
			const matched = matchNode(x.matcher, path.node, _state);
			if (matched) {
				this._addPolyfill(x.feature);
			}
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
