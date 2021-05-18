module.exports = function memberExpressionMatcher(memberExpression, matcherMap) {
	if (!memberExpression.property || !memberExpression.property.name) {
		return null;
	}

	return matcherMap[(memberExpression.property.name).slice(0, 2)];
}
