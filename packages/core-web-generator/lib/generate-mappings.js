"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMappings = void 0;
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse_1 = require("@babel/traverse");
const coreWebBabelPluginDir = path.resolve(__dirname, "../../babel-plugin-core-web");
function customMatcherSources() {
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
            "$_instance.attachShadow()",
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
            "btoa",
            "atob",
        ],
        'Blob': [
            'Blob',
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
        'WebAnimations': [
            "$instance_.animate",
            "new Animation()",
            "new Animation($1)",
            "new Animation($1, $2)",
        ]
    };
}
function generateMappings(featureMapping) {
    const intlLocaleRegExp = /^Intl\.~locale\.(.*?)$/;
    const intlSubFeatureRegExp = /^Intl\.([a-zA-Z]+)\.~locale\.(.*?)$/;
    const first2charsFromIdentifier = {};
    const identifierMatchers = {};
    const first2charsFromIdentifierInMemberExpression = {};
    const memberExpressionMatchers = {};
    const first5charsStringLiteralsInCallExpression = {};
    const callExpressionMatchers = {};
    const first5charsStringLiteralsInNewExpression = {};
    const newExpressionMatchers = {};
    const customMatchers = customMatcherSources();
    featureMapping.forEach((feature) => {
        let matchCandidates = [];
        if (feature.name.indexOf(".prototype.") >= 0) {
            matchCandidates.push('$_instance.' + feature.name.replace(/^.+\.prototype\./, ""));
        }
        else {
            if (feature.name !== 'WebAnimations' &&
                feature.name !== 'smoothscroll') {
                matchCandidates.push(feature.name);
            }
        }
        if (customMatchers[feature.name]) {
            matchCandidates.push(...customMatchers[feature.name]);
        }
        matchCandidates = matchCandidates.flatMap((candidate) => {
            if (intlSubFeatureRegExp.test(candidate)) {
                let intlCandidates = {};
                const matches = candidate.match(intlSubFeatureRegExp);
                if (matches && matches.length === 3) {
                    intlCandidates[`new Intl.${matches[1]}('${matches[2]}')`] = true;
                    intlCandidates[`new Intl.${matches[1]}('${matches[2]}', $1)`] = true;
                    intlCandidates[`new Intl.${matches[1]}(['${matches[2]}'])`] = true;
                    intlCandidates[`new Intl.${matches[1]}(['${matches[2]}'], $1)`] = true;
                    intlCandidates[`new Intl.${matches[1]}([$1, '${matches[2]}'])`] = true;
                    intlCandidates[`new Intl.${matches[1]}([$1, '${matches[2]}'], $2)`] = true;
                    intlCandidates[`new Intl.${matches[1]}(['${matches[2]}', $1])`] = true;
                    intlCandidates[`new Intl.${matches[1]}(['${matches[2]}', $1], $2)`] = true;
                    if (matches[1] === 'NumberFormat' || matches[1] === 'DateTimeFormat') {
                        intlCallExpressionCandidates('toLocaleString', matches[2]).forEach((x) => {
                            intlCandidates[x] = true;
                        });
                    }
                    else if (matches[1] === 'DateTimeFormat') {
                        intlCallExpressionCandidates('toLocaleDateString', matches[2]).forEach((x) => {
                            intlCandidates[x] = true;
                        });
                        intlCallExpressionCandidates('toLocaleTimeString', matches[2]).forEach((x) => {
                            intlCandidates[x] = true;
                        });
                    }
                }
                return Object.keys(intlCandidates);
            }
            else if (intlLocaleRegExp.test(candidate) && !feature.isAlias) {
                // TODO!
                console.log('TODO : ' + candidate);
                return [];
            }
            else {
                return [candidate];
            }
        }).filter((candidate) => {
            return !!candidate;
        });
        matchCandidates.forEach((candidate) => {
            if (candidate.indexOf('~') >= 0) {
                return;
            }
            try {
                const parsed = parser.parseExpression(candidate);
                setNodeIsVariable(parsed);
                if (parsed.type !== 'CallExpression' &&
                    parsed.type !== 'MemberExpression' &&
                    parsed.type !== 'Identifier' &&
                    parsed.type !== 'NewExpression') {
                    console.log('unknown parsed type', parsed.type, feature.name);
                    return;
                }
                switch (parsed.type) {
                    case 'Identifier':
                        first2charsFromIdentifier[(parsed.name).slice(0, 2)] = first2charsFromIdentifier[(parsed.name).slice(0, 2)] || 0;
                        first2charsFromIdentifier[(parsed.name).slice(0, 2)]++;
                        identifierMatchers[(parsed.name).slice(0, 2)] = identifierMatchers[(parsed.name).slice(0, 2)] || [];
                        identifierMatchers[(parsed.name).slice(0, 2)].push({
                            matcher: parsed,
                            feature: feature.name,
                        });
                        break;
                    case 'MemberExpression':
                        const property = parsed.property;
                        if (!parsed.property || !property.name) {
                            throw new Error('expected MemberExpression to have property.name, got : ' + JSON.stringify(parsed));
                        }
                        first2charsFromIdentifierInMemberExpression[(property.name).slice(0, 2)] = first2charsFromIdentifierInMemberExpression[(property.name).slice(0, 2)] || 0;
                        first2charsFromIdentifierInMemberExpression[(property.name).slice(0, 2)]++;
                        memberExpressionMatchers[(property.name).slice(0, 2)] = memberExpressionMatchers[(property.name).slice(0, 2)] || [];
                        memberExpressionMatchers[(property.name).slice(0, 2)].push({
                            matcher: parsed,
                            feature: feature.name,
                        });
                        break;
                    case 'CallExpression':
                        const callCallee = parsed.callee;
                        if (callCallee.property) {
                            firstStringLiteralFromIntlArguments(parsed.arguments).forEach((arg) => {
                                first5charsStringLiteralsInCallExpression[(arg.value).slice(0, 5)] = first5charsStringLiteralsInCallExpression[(arg.value).slice(0, 5)] || 0;
                                first5charsStringLiteralsInCallExpression[(arg.value).slice(0, 5)]++;
                                callExpressionMatchers[(arg.value).slice(0, 5)] = callExpressionMatchers[(arg.value).slice(0, 5)] || [];
                                callExpressionMatchers[(arg.value).slice(0, 5)].push({
                                    matcher: parsed,
                                    feature: feature.name,
                                });
                            });
                        }
                        else {
                            throw new Error('expected CallExpression to have "callee.property", got : ' + JSON.stringify(parsed));
                        }
                        break;
                    case 'NewExpression':
                        firstStringLiteralFromIntlArguments(parsed.arguments).forEach((arg) => {
                            first5charsStringLiteralsInNewExpression[(arg.value).slice(0, 5)] = first5charsStringLiteralsInNewExpression[(arg.value).slice(0, 5)] || 0;
                            first5charsStringLiteralsInNewExpression[(arg.value).slice(0, 5)]++;
                            newExpressionMatchers[(arg.value).slice(0, 5)] = newExpressionMatchers[(arg.value).slice(0, 5)] || [];
                            newExpressionMatchers[(arg.value).slice(0, 5)].push({
                                matcher: parsed,
                                feature: feature.name,
                            });
                        });
                        break;
                    default:
                        break;
                }
            }
            catch (e) {
                console.log(`error: ${e}\n${candidate}`);
                throw e;
            }
        });
    });
    fs.writeFileSync(path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__identifier_matcher.js"), generateIdentifierMatcher(Object.keys(first2charsFromIdentifier)));
    fs.writeFileSync(path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__identifier_matcher_map.json"), JSON.stringify(identifierMatchers, matcherAST_JSONReplacer));
    fs.writeFileSync(path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__member_expression_matcher.js"), generateMemberExpressionMatcher(Object.keys(first2charsFromIdentifierInMemberExpression)));
    fs.writeFileSync(path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__member_expression_matcher_map.json"), JSON.stringify(memberExpressionMatchers, matcherAST_JSONReplacer));
    fs.writeFileSync(path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__call_expression_matcher.js"), generateCallExpressionMatcher(Object.keys(first5charsStringLiteralsInCallExpression)));
    fs.writeFileSync(path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__call_expression_matcher_map.json"), JSON.stringify(callExpressionMatchers, matcherAST_JSONReplacer));
    fs.writeFileSync(path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__new_expression_matcher.js"), generateNewExpressionMatcher(Object.keys(first5charsStringLiteralsInNewExpression)));
    fs.writeFileSync(path.join(coreWebBabelPluginDir, 'lib', 'matchers', "__new_expression_matcher_map.json"), JSON.stringify(newExpressionMatchers, matcherAST_JSONReplacer));
}
exports.generateMappings = generateMappings;
function firstStringLiteralFromIntlArguments(args) {
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
        return el;
    });
}
function generateIdentifierMatcher(first2Chars) {
    const cases = first2Chars.map((chars) => {
        return `
		case '${chars}':
			return matcherMap['${chars}'];
`;
    });
    return `module.exports = function identifierMatcher(identifier, matcherMap) {
	switch ((identifier.name).slice(0, 2)) {
		${cases.join('\n')}

		default:
			return null;
	}
}`;
}
function generateFirstStringLiteralFromIntlArguments() {
    return `function firstStringLiteralFromIntlArguments(args) {
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

	return firstArg.elements.filter((el) => {
		if (!el) {
			return false;
		}

		return el.type === 'StringLiteral';
	});
}`;
}
function generateMemberExpressionMatcher(first2Chars) {
    const cases = first2Chars.map((chars) => {
        return `
		case '${chars}':
			return matcherMap['${chars}'];
`;
    });
    return `module.exports = function memberExpressionMatcher(memberExpression, matcherMap) {
	if (!memberExpression.property || !memberExpression.property.name) {
		return null;
	}

	switch ((memberExpression.property.name).slice(0, 2)) {
		${cases.join('\n')}

		default:
			return null;
	}
}
`;
}
function generateCallExpressionMatcher(first2Chars) {
    const cases = first2Chars.map((chars) => {
        return `
		case '${chars}':
			return matcherMap['${chars}'];
`;
    });
    return `module.exports = function callExpressionMatcher(callExpression, matcherMap) {
	if (!callExpression.arguments) {
		return null;
	}

	return firstStringLiteralFromIntlArguments(callExpression.arguments).flatMap((arg) => {
		switch ((arg.value).slice(0, 5)) {
		${cases.join('\n')}

		default:
			return null;
		}
	}).filter((matcher) => {
		return !!matcher;	
	});
}

${generateFirstStringLiteralFromIntlArguments()}`;
}
function generateNewExpressionMatcher(first2Chars) {
    const cases = first2Chars.map((chars) => {
        return `
		case '${chars}':
			return matcherMap['${chars}'];
`;
    });
    return `module.exports = function newExpressionMatcher(newExpression, matcherMap) {
	if (!newExpression.arguments) {
		return null;
	}

	return firstStringLiteralFromIntlArguments(newExpression.arguments).flatMap((arg) => {
		switch ((arg.value).slice(0, 5)) {
		${cases.join('\n')}

		default:
			return null;
		}
	}).filter((matcher) => {
		return !!matcher;	
	});
}

${generateFirstStringLiteralFromIntlArguments()}`;
}
function setNodeIsVariable(matcher) {
    traverse_1.default(matcher, {
        noScope: true,
        Identifier(path) {
            if (path.node.name.startsWith("$")) {
                path.node.isVariable = true;
            }
        }
    });
}
function matcherAST_JSONReplacer(key, value) {
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
function intlCallExpressionCandidates(name, locale) {
    const out = [];
    out.push(`$_instance.${name}('${locale}')`);
    out.push(`$_instance.${name}('${locale}', $1)`);
    out.push(`$_instance.${name}(['${locale}'])`);
    out.push(`$_instance.${name}(['${locale}'], $1)`);
    out.push(`$_instance.${name}(['${locale}', $1])`);
    out.push(`$_instance.${name}(['${locale}', $1], $2)`);
    out.push(`$_instance.${name}([$1, '${locale}'])`);
    out.push(`$_instance.${name}([$1, '${locale}'], $2)`);
    return out;
}
//# sourceMappingURL=generate-mappings.js.map