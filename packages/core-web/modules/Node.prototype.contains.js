(function(undefined) {
if (!(document.contains
)) {
// Node.prototype.contains
(function() {

	function contains(node) {
		if (!(0 in arguments)) {
			throw new TypeError('1 argument is required');
		}

		do {
			if (this === node) {
				return true;
			}
		// eslint-disable-next-line no-cond-assign
		} while (node = node && node.parentNode);

		return false;
	}

	// IE
	if ('HTMLElement' in self && 'contains' in HTMLElement.prototype) {
		try {
			delete HTMLElement.prototype.contains;
		} catch (e) {}
	}

	if ('Node' in self) {
		Node.prototype.contains = contains;
	} else {
		document.contains = Element.prototype.contains = contains;
	}

}());
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
