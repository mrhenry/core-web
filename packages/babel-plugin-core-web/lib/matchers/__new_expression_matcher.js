module.exports = function newExpressionMatcher(newExpression, matcherMap) {
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
}