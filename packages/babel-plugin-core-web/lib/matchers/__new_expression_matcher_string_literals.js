module.exports = function newExpressionMatcher(newExpression, matcherMap) {
	if (!newExpression.arguments) {
		return null;
	}

	return stringLiteralsFromArguments(newExpression.arguments).flatMap((arg) => {
		return matcherMap[(arg.value).slice(0, 5)];
	}).filter((matcher) => {
		return !!matcher;	
	});
}

function stringLiteralsFromArguments(args) {
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
}