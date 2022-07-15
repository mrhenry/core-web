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
const elementQsaHasMatchers = require("./matchers/element_qsa_has_matchers.json");

class Injector {
	constructor(features, opts = {}) {
		this.debug = opts.debug || false;
		this.features = features.filter(n => has(n));
		this.featureSet = new Set(this.features);

		this.aliasSet = new Set();
		this.ignoreSet = new Set();
		this.importSet = new Set();
		this.removeSet = new Set();
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

		// Allow users to block polyfills.
		for (const ignore of this.ignoreSet.values()) {
			this.importSet.delete(ignore);
		}

		// insert in reverse order
		let all = [...this.importSet];
		
		// Some polyfills can't coexist.
		all = all.filter((importName) => {
			// "golden" should only be imported if "all" doesn't exist.
			if (importName === 'Intl.DateTimeFormat.~timeZone.golden') {
				return all.indexOf('Intl.DateTimeFormat.~timeZone.all') === -1;
			}

			return true;
		});

		// // Some polyfills need a custom order but do not have a direct dependency relationship.
		// all.sort((a, b) => {
		// 	if (a === '~shadydom' && b === '~element-qsa-scope') {
		// 		return -1;
		// 	} else if (a === '~element-qsa-scope' && b === '~shadydom') {
		// 		return 1;
		// 	}

		// 	if (a === '~shadydom' && b === '~element-qsa-has') {
		// 		return -1;
		// 	} else if (a === '~element-qsa-has' && b === '~shadydom') {
		// 		return 1;
		// 	}

		// 	return 0;
		// });

		while (all.length) {
			const importName = all.pop();
			addSideEffect(path, `@mrhenry/core-web/modules/${importName}`);
		}

		// remove unused imports
		for (const forRemoval of this.removeSet) {
			forRemoval.remove();
		}
	}

	handleIgnoreComment(comment) {
		if (!comment || !comment.value) {
			return;
		}

		const COMMENT_PREFIX = 'core-web-ignore';
		const cleanComment = comment.value.trim();
		if (!cleanComment.startsWith(COMMENT_PREFIX)) {
			return;
		}

		const importPath = cleanComment.substr(COMMENT_PREFIX.length).trim();

		const PREFIX = "@mrhenry/core-web/modules/";
		if (importPath.startsWith(PREFIX)) {
			const feature = importPath.substr(PREFIX.length);
			this.ignoreSet.add(feature);
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

	handleElementQsaCallExpression(path, state) {
		if (
			!path.node ||
			!path.node.callee ||
			!path.node.callee.property ||
			path.node.callee.property.type !== 'Identifier'
		) {
			return;
		}

		if (
			!path.node.arguments ||
			path.node.arguments.length <= 0
		) {
			return;
		}

		if (path.node.arguments[0].type === 'StringLiteral') {
			if (path.node.arguments[0].value.indexOf(':scope') > -1) {
				this._handleGeneric(
					{
						node: path.node.callee
					},
					state,
					elementQsaScopeMatchers
				);
			}

			if (path.node.arguments[0].value.indexOf(':has(') > -1) {
				this._handleGeneric(
					{
						node: path.node.callee
					},
					state,
					elementQsaHasMatchers
				);
			}
		}

		if (
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

				if (x.value.cooked.indexOf(':scope') > -1) {
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

			const quasisElWithHas = path.node.arguments[0].quasis.find((x) => {
				if (!x.value) {
					return false;
				}

				if (!x.value.cooked) {
					return false;
				}

				if (x.value.cooked.indexOf(':has(') > -1) {
					return true;
				}

				return false;
			});

			if (!!quasisElWithHas) {
				this._handleGeneric(
					{
						node: path.node.callee
					},
					state,
					elementQsaHasMatchers
				);
			}
		}
	}

	handleNewExpression(path, state) {
		const matchers = newExpressionMatcher(path.node, newExpressionMatcherMap);
		this._handleGeneric(path, state, matchers);
	}

	handleNewExpressionStringLiterals(path, state) {
		const matchers = newExpressionMatcherStringLiterals(path.node, newExpressionMatcherStringLiteralsMap);
		this._handleGeneric(path, state, matchers);
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
		this.aliasSet = new Set();
		this.ignoreSet = new Set();
		this.importSet = new Set();
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
