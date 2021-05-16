const { addSideEffect } = require("@babel/helper-module-imports");
const { get, has } = require("@mrhenry/core-web");
const { matchNode } = require("./ast-matcher");

const identifierMatcher = require("./matchers/__identifier_matcher");
const identifierMatcherMap = require("./matchers/__identifier_matcher_map.json");
const memberExpressionMatcher = require("./matchers/__member_expression_matcher");
const memberExpressionMatcherMap = require("./matchers/__member_expression_matcher_map.json");
const callExpressionMatcher = require("./matchers/__call_expression_matcher");
const callExpressionMatcherMap = require("./matchers/__call_expression_matcher_map.json");
const callExpressionMatcherStringLiterals = require("./matchers/__call_expression_matcher_string_literals");
const callExpressionMatcherStringLiteralsMap = require("./matchers/__call_expression_matcher_string_literals_map.json");
const newExpressionMatcher = require("./matchers/__new_expression_matcher");
const newExpressionMatcherMap = require("./matchers/__new_expression_matcher_map.json");
const newExpressionMatcherStringLiterals = require("./matchers/__new_expression_matcher_string_literals");
const newExpressionMatcherStringLiteralsMap = require("./matchers/__new_expression_matcher_string_literals_map.json");
const elementQsaScopeMatchers = require("./matchers/element_qsa_scope_matchers.json");

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
		this._handleGeneric(path, state, matchers);
	}

	handleMemberExpression(path, state) {
		const matchers = memberExpressionMatcher(path.node, memberExpressionMatcherMap);
		this._handleGeneric(path, state, matchers);
	}

	handleCallExpression(path, state) {
		const matchers = callExpressionMatcher(path.node, callExpressionMatcherMap);
		this._handleGeneric(path, state, matchers);
	}

	handleCallExpressionStringLiterals(path, state) {
		const matchers = callExpressionMatcherStringLiterals(path.node, callExpressionMatcherStringLiteralsMap);
		this._handleGeneric(path, state, matchers);
	}

	handleNewExpression(path, state) {
		const matchers = newExpressionMatcher(path.node, newExpressionMatcherMap);
		this._handleGeneric(path, state, matchers);
	}

	handleNewExpressionStringLiterals(path, state) {
		const matchers = newExpressionMatcherStringLiterals(path.node, newExpressionMatcherStringLiteralsMap);
		this._handleGeneric(path, state, matchers);
	}

	handleElementQsaScopeCallExpression(path, state) {
		if (
			path.node &&
			path.node.arguments &&
			path.node.arguments.length > 0 &&
			path.node.arguments[0].type === 'StringLiteral'
		) {
			if (/:scope(?![\w-])/i.test(path.node.arguments[0].value)) {
				this._handleGeneric(
					{
						node: path.node.callee
					},
					state,
					elementQsaScopeMatchers
				);
			}
		}

		if (
			path.node &&
			path.node.arguments &&
			path.node.arguments.length > 0 &&
			path.node.arguments[0].type === 'TemplateLiteral' &&
			path.node.arguments[0].quasis &&
			path.node.arguments[0].quasis.length > 0
		) {
			const quasisElWithScope = path.node.arguments[0].quasis.find((x) => {
				if (!x.value) {
					return false;
				}

				if (!x.value.cooked) {
					return false;
				}

				if (/:scope(?![\w-])/i.test(x.value.cooked)) {
					return true;
				}

				return false;
			});
			if (!!quasisElWithScope) {
				this._handleGeneric(
					{
						node: path.node.callee
					},
					state,
					elementQsaScopeMatchers
				);
			}
		}
	}

	_handleGeneric(path, state, matchers) {
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
