module.exports = function identifierMatcher(identifier, matcherMap) {
	if (!identifier.name) {
		return null;
	}

	return matcherMap[(identifier.name).slice(0, 2)]
}