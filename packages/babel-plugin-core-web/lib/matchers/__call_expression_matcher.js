module.exports = function callExpressionMatcher(callExpression, matcherMap) {
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
}