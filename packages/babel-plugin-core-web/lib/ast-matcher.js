const types = require("@babel/types/lib/definitions");
const equal = require("fast-deep-equal");

module.exports = {
	matchNode: matchNode,
};

function nullish(v) {
	return v === null || v === undefined;
}

function arrayish(v) {
	return typeof v === "array" || v instanceof Array;
}

function matchNode(matcher, ast, state) {
	if (nullish(matcher) && nullish(ast)) {
		return true;
	}
	if (arrayish(matcher)) {
		return matchNodes(matcher, ast, state);
	}
	if (typeof matcher !== "object") {
		return false;
	}
	if (typeof ast !== "object") {
		return false;
	}
	if (matcher.type === "Identifier" && matcher.isVariable) {
		state[matcher.name] = ast;
		return true;
	}
	if (matcher.type !== ast.type) {
		return false;
	}

	for (const key of getMatcherKeys(matcher)) {
		if (types.VISITOR_KEYS[matcher.type].indexOf(key) >= 0) {
			if (!matchNode(matcher[key], ast[key], state)) {
				return false;
			}
			continue;
		}

		if (!equal(matcher[key], ast[key])) {
			return false;
		}
	}

	return true;
}

function matchNodes(matcher, ast, state) {
	if (!arrayish(matcher)) {
		return false;
	}
	if (!arrayish(ast)) {
		return false;
	}

	if (matcher.length !== ast.length) {
		return false;
	}
	for (let i = 0; i < matcher.length; i++) {
		if (!matchNode(matcher[i], ast[i], state)) {
			return false;
		}
	}
	return true;
}

function getMatcherKeys(node) {
	return Object.keys(types.NODE_FIELDS[node.type]);
}
