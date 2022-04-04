import * as fs from 'fs';
import * as path from "path";
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import { StringLiteral, Expression, SpreadElement, JSXNamespacedName, ArgumentPlaceholder } from '@babel/types';

const coreWebBabelPluginDir = path.resolve(__dirname, "../../babel-plugin-core-web");

function customMatcherSources(): Record<string, Array<string>> {
	return {
		'~custom-elements': [
			"customElements.define($1, $2)",
			"document.createElement($1, { is : $2 })",
			"customElements.polyfillWrapFlushCallback",
		],

		'~shadycss-apply-shim': [
			'ShadyCSS'
		],

		'~shadycss-custom-style-interface': [],

		'~shadycss-scoping-shim': [
			'ShadyCSS'
		],

		'~shadydom': [
			"ShadyDOM",
			"shadowRoot",
			"$_instance.attachShadow($1)",
		],

		'~viewport': [
			"innerHeight",
			"innerWidth",
			"pageXOffset",
			"pageYOffset",
			"scrollX",
			"scrollY",
		],

		'atob': [
			"btoa($1)",
			"atob($1)",
		],

		'Blob': [
			'Blob',
			'new Blob($1)',
			'new Blob($1, $2)',
			'BlobBuilder',
			'URL.createObjectURL($1)',
			'URL.revokeObjectURL($1)',
		],

		'DOMTokenList': [
			'DOMTokenList',
			'$_instance.classList',
		],

		'Element': [
			"Element",
			"HTMLElement",
			"$_instance.hasAttribute($1)",
			"document.createElement($1)",
			"document.createElement($1, $2)",
		],

		'fetch': [
			"fetch",
			"Headers",
			"Body",
			"Request",
			"Response",
		],

		'HTMLTemplateElement': [
			"HTMLTemplateElement",
			"document.createElement('template')",
			"document.createElement('template', $1)",
		],

		'IntersectionObserverEntry': [
			"$_instance.isIntersecting",
			"$_instance.intersectionRatio",
			"$_instance.intersectionRect",
			"IntersectionObserverEntry",
		],

		'matchMedia': [
			'matchMedia',
			'MediaQueryList'
		],

		'MediaQueryList.prototype.addEventListener': [
			'matchMedia',
			'MediaQueryList'
		],

		'WebAnimations': [
			"$instance_.animate",
			"new Animation()",
			"new Animation($1)",
			"new Animation($1, $2)",
			"document.timeline"
		],

		'NodeList.prototype.@@iterator': [
			"$instance_.addedNodes",
			"$instance_.childNodes",
			"$instance_.elements",
			"$instance_.getElementsByName",
			"$instance_.labels",
			"$instance_.querySelectorAll",
			"$instance_.removedNodes"
		],

		'NodeList.prototype.forEach': [
			"$instance_.addedNodes",
			"$instance_.childNodes",
			"$instance_.elements",
			"$instance_.getElementsByName",
			"$instance_.labels",
			"$instance_.querySelectorAll",
			"$instance_.removedNodes"
		],

		'DOMTokenList.prototype.@@iterator': [
			"$instance_.classList",
			"$instance_.relList"
		],

		'DOMTokenList.prototype.forEach': [
			"$instance_.classList",
			"$instance_.relList"
		],

		'document.visibilityState': [
			"document.addEventListener('visibilitychange', $1)",
			"document.addEventListener('visibilitychange', $1, $2)"
		]
	}
}

export async function generateMappings(featureMapping: Array<Feature>) {
	const identifierMatchers: Record<string, Array<{
		matcher: any,
		feature: string
	}>> = {}

	const memberExpressionMatchers: Record<string, Array<{
		matcher: any,
		feature: string
	}>> = {}

	const callExpressionMatchersWithStringLiterals: Record<string, Array<{
		matcher: any,
		feature: string
	}>> = {}

	const callExpressionMatchers: Record<string, Array<{
		matcher: any,
		feature: string
	}>> = {}

	const newExpressionMatchersWithStringLiterals: Record<string, Array<{
		matcher: any,
		feature: string
	}>> = {}

	const newExpressionMatchers: Record<string, Array<{
		matcher: any,
		feature: string
	}>> = {}

	const customMatchers = customMatcherSources();

	featureMapping.forEach((feature) => {
		let matchCandidates = [];
		if (feature.name === "Event.hashchange") {
			matchCandidates.push("addEventListener('hashchange', $1)");
			matchCandidates.push("addEventListener('hashchange', $1, $2)");
			matchCandidates.push("window.addEventListener('hashchange', $1)");
			matchCandidates.push("window.addEventListener('hashchange', $1, $2)");
		} else if (feature.name === "Event.focusin") {
			matchCandidates.push("$_instance.addEventListener('focusin', $1)");
			matchCandidates.push("$_instance.addEventListener('focusin', $1, $2)");
			matchCandidates.push("$_instance.addEventListener('focusout', $1)");
			matchCandidates.push("$_instance.addEventListener('focusout', $1, $2)");
		} else if (feature.name === "Navigator.prototype.geolocation") {
			// Is an alias for `navigator.geolocation` which is a better matcher candidate.
		} else if (feature.name === "MediaQueryList.prototype.addEventListener") {
			// Would match any use of `addEventListener`.
		} else if (feature.name === "DOMTokenList.prototype.@@iterator" || feature.name === "DOMTokenList.prototype.forEach") {
			// `@@iterator` and `forEach` are poor matcher candidates.
		} else if (feature.name === "NodeList.prototype.@@iterator" || feature.name === "NodeList.prototype.forEach") {
			// `@@iterator` and `forEach` are poor matcher candidates.
		} else if (feature.name.indexOf(".prototype.") >= 0) {
			matchCandidates.push('$_instance.' + feature.name.replace(/^.+\.prototype\./, ""));
		} else {
			if (
				feature.name !== 'WebAnimations' &&
				feature.name !== 'smoothscroll'
			) {
				matchCandidates.push(feature.name);
			}
		}

		if (customMatchers[feature.name]) {
			matchCandidates.push(...customMatchers[feature.name]);
		}

		matchCandidates = matchCandidates.flatMap((candidate) => {
			return [candidate];
		}).filter((candidate) => {
			return !!candidate;
		});

		matchCandidates.forEach((candidate) => {
			if (candidate.indexOf('~') >= 0) {
				return;
			}

			try {
				const parsed = parser.parseExpression(candidate);
				if (
					parsed.type !== 'CallExpression' &&
					parsed.type !== 'MemberExpression' &&
					parsed.type !== 'Identifier' &&
					parsed.type !== 'NewExpression'
				) {
					console.log('unknown parsed type', parsed.type, feature.name);

					return;
				}

				setNodeIsVariable(parsed);
				if ((parsed as { isVariable?: boolean }).isVariable === true) {
					console.log('root as variable is not allowed', parsed.type, feature.name);
					return;
				}

				switch (parsed.type) {
					case 'Identifier':
						identifierMatchers[(parsed.name).slice(0, 2)] = identifierMatchers[(parsed.name).slice(0, 2)] || [];
						identifierMatchers[(parsed.name).slice(0, 2)].push({
							matcher: parsed,
							feature: feature.name,
						});
						break;

					case 'MemberExpression':
						const property = parsed.property as { name: string };
						if (!parsed.property || !property.name) {
							throw new Error('expected MemberExpression to have property.name, got : ' + JSON.stringify(parsed));
						}

						memberExpressionMatchers[(property.name).slice(0, 2)] = memberExpressionMatchers[(property.name).slice(0, 2)] || [];
						memberExpressionMatchers[(property.name).slice(0, 2)].push({
							matcher: parsed,
							feature: feature.name,
						});
						break;

					case 'CallExpression':
						const callArgumentStringLiterals = stringLiteralsFromArguments(parsed.arguments);
						if (callArgumentStringLiterals && callArgumentStringLiterals.length > 0) {
							callArgumentStringLiterals.forEach((arg) => {
								callExpressionMatchersWithStringLiterals[(arg.value).slice(0, 5)] = callExpressionMatchersWithStringLiterals[(arg.value).slice(0, 5)] || [];
								callExpressionMatchersWithStringLiterals[(arg.value).slice(0, 5)].push({
									matcher: parsed,
									feature: feature.name,
								});
							});
						} else {
							if (parsed.callee.type === 'MemberExpression') {
								const property = parsed.callee.property as { name: string };
								if (!property || !property.name) {
									throw new Error('expected CallExpression.callee to have property.name, got : ' + JSON.stringify(parsed));
								}

								callExpressionMatchers[(property.name).slice(0, 2)] = callExpressionMatchers[(property.name).slice(0, 2)] || [];
								callExpressionMatchers[(property.name).slice(0, 2)].push({
									matcher: parsed,
									feature: feature.name,
								});
							}

							if (parsed.callee.type === 'Identifier') {
								if (!parsed.callee.name) {
									throw new Error('expected CallExpression.callee to have name, got : ' + JSON.stringify(parsed));
								}

								callExpressionMatchers[(parsed.callee.name).slice(0, 2)] = callExpressionMatchers[(parsed.callee.name).slice(0, 2)] || [];
								callExpressionMatchers[(parsed.callee.name).slice(0, 2)].push({
									matcher: parsed,
									feature: feature.name,
								});
							}
						}

						break;

					case 'NewExpression':
						const newArgumentStringLiterals = stringLiteralsFromArguments(parsed.arguments);
						if (newArgumentStringLiterals && newArgumentStringLiterals.length > 0) {
							newArgumentStringLiterals.forEach((arg) => {
								newExpressionMatchersWithStringLiterals[(arg.value).slice(0, 5)] = newExpressionMatchersWithStringLiterals[(arg.value).slice(0, 5)] || [];
								newExpressionMatchersWithStringLiterals[(arg.value).slice(0, 5)].push({
									matcher: parsed,
									feature: feature.name,
								});
							});
						} else {
							if (parsed.callee.type === 'MemberExpression') {
								const property = parsed.callee.property as { name: string };
								if (!property || !property.name) {
									throw new Error('expected CallExpression.callee to have property.name, got : ' + JSON.stringify(parsed));
								}

								newExpressionMatchers[(property.name).slice(0, 2)] = newExpressionMatchers[(property.name).slice(0, 2)] || [];
								newExpressionMatchers[(property.name).slice(0, 2)].push({
									matcher: parsed,
									feature: feature.name,
								});
							}

							if (parsed.callee.type === 'Identifier') {
								if (!parsed.callee.name) {
									throw new Error('expected CallExpression.callee to have name, got : ' + JSON.stringify(parsed));
								}

								newExpressionMatchers[(parsed.callee.name).slice(0, 2)] = newExpressionMatchers[(parsed.callee.name).slice(0, 2)] || [];
								newExpressionMatchers[(parsed.callee.name).slice(0, 2)].push({
									matcher: parsed,
									feature: feature.name,
								});
							}
						}
						break;

					default:
						break;
				}
			} catch (e) {
				console.log(`error: ${e}\n${candidate}`);
				throw e;
			}
		});
	});

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__identifier_matcher.js"),
		generateIdentifierMatcher()
	);

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__identifier_matcher_map.json"),
		JSON.stringify(identifierMatchers, matcherAST_JSONReplacer)
	);

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__member_expression_matcher.js"),
		generateMemberExpressionMatcher()
	);

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__member_expression_matcher_map.json"),
		JSON.stringify(memberExpressionMatchers, matcherAST_JSONReplacer)
	);

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__call_expression_matcher_string_literals.js"),
		generateCallExpressionMatcherWithStringLiterals()
	);

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__call_expression_matcher_string_literals_map.json"),
		JSON.stringify(callExpressionMatchersWithStringLiterals, matcherAST_JSONReplacer)
	);

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__call_expression_matcher_map.json"),
		JSON.stringify(callExpressionMatchers, matcherAST_JSONReplacer)
	);

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__call_expression_matcher.js"),
		generateCallExpressionMatcher()
	);

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__new_expression_matcher_string_literals.js"),
		generateNewExpressionMatcherWithStringLiterals()
	);

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__new_expression_matcher_string_literals_map.json"),
		JSON.stringify(newExpressionMatchersWithStringLiterals, matcherAST_JSONReplacer)
	);

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__new_expression_matcher.js"),
		generateNewExpressionMatcher()
	);

	fs.writeFileSync(
		path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__new_expression_matcher_map.json"),
		JSON.stringify(newExpressionMatchers, matcherAST_JSONReplacer)
	);
}

function stringLiteralsFromArguments(args?: Array<Expression | SpreadElement | JSXNamespacedName | ArgumentPlaceholder> | null): Array<StringLiteral> {
	if (!args) {
		return [];
	}

	if (args.length <= 0) {
		return [];
	}

	const firstArg = args[0];
	if (firstArg.type === 'StringLiteral') {
		return [firstArg];
	}

	if (firstArg.type !== 'ArrayExpression') {
		return [];
	}

	const stringLiterals = firstArg.elements.filter((el) => {
		if (!el) {
			return false;
		}

		return el.type === 'StringLiteral';
	});

	return stringLiterals.map((el) => {
		return el as StringLiteral;
	});
}

function generateIdentifierMatcher(): string {
	return `module.exports = function identifierMatcher(identifier, matcherMap) {
	if (!identifier.name) {
		return null;
	}

	return matcherMap[(identifier.name).slice(0, 2)]
}`;
}

function generateMemberExpressionMatcher(): string {
	return `module.exports = function memberExpressionMatcher(memberExpression, matcherMap) {
	if (!memberExpression.property || !memberExpression.property.name) {
		return null;
	}

	return matcherMap[(memberExpression.property.name).slice(0, 2)];
}
`;
}

function generateStringLiteralsFromArguments(): string {
	return `function stringLiteralsFromArguments(args) {
	if (!args) {
		return [];
	}

	if (args.length <= 0) {
		return [];
	}

	const firstArg = args[0];
	if (firstArg.type === 'StringLiteral') {
		return [firstArg];
	}

	if (firstArg.type !== 'ArrayExpression') {
		return [];
	}

	if (!firstArg.elements || !Array.isArray(firstArg.elements)) {
		return [];
	}

	return firstArg.elements.filter((el) => {
		if (!el) {
			return false;
		}

		return el.type === 'StringLiteral';
	});
}`
}

function generateCallExpressionMatcherWithStringLiterals(): string {
	return `module.exports = function callExpressionMatcherWithStringLiterals(callExpression, matcherMap) {
	if (!callExpression.arguments) {
		return null;
	}

	return stringLiteralsFromArguments(callExpression.arguments).flatMap((arg) => {
		return matcherMap[(arg.value).slice(0, 5)];
	}).filter((matcher) => {
		return !!matcher;	
	});
}

${generateStringLiteralsFromArguments()}`;
}

function generateCallExpressionMatcher(): string {
	return `module.exports = function callExpressionMatcher(callExpression, matcherMap) {
	if (callExpression.callee.type === 'MemberExpression') {
		const property = callExpression.callee.property;
		if (!property || !property.name) {
			return null;
		}

		return matcherMap[(property.name).slice(0, 2)];
	}

	if (callExpression.callee.type === 'Identifier') {
		if (!callExpression.callee.name) {
			return null;
		}

		return matcherMap[(callExpression.callee.name).slice(0, 2)];
	}

	return null;
}`
}

function generateNewExpressionMatcherWithStringLiterals(): string {
	return `module.exports = function newExpressionMatcher(newExpression, matcherMap) {
	if (!newExpression.arguments) {
		return null;
	}

	return stringLiteralsFromArguments(newExpression.arguments).flatMap((arg) => {
		return matcherMap[(arg.value).slice(0, 5)];
	}).filter((matcher) => {
		return !!matcher;	
	});
}

${generateStringLiteralsFromArguments()}`;
}

function generateNewExpressionMatcher(): string {
	return `module.exports = function newExpressionMatcher(newExpression, matcherMap) {
	if (newExpression.callee.type === 'MemberExpression') {
		const property = newExpression.callee.property;
		if (!property || !property.name) {
			return null;
		}

		return matcherMap[(property.name).slice(0, 2)];
	}

	if (newExpression.callee.type === 'Identifier') {
		if (!newExpression.callee.name) {
			return null;
		}

		return matcherMap[(newExpression.callee.name).slice(0, 2)];
	}

	return null;
}`
}

function setNodeIsVariable(matcher: Expression) {
	traverse(matcher, {
		noScope: true,
		Identifier(path: any) {
			if (path.node.name.startsWith("$")) {
				path.node.isVariable = true;
			}
		}
	})
}

function matcherAST_JSONReplacer(key: string, value: unknown): unknown {
	switch (key) {
		case 'loc':
			return undefined;
		case 'comments':
			return undefined;
		case 'errors':
			return undefined;
		case 'start':
			return undefined;
		case 'end':
			return undefined;

		default:
			return value;
	}
}
