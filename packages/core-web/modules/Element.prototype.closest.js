(function(undefined) {
if (!("document"in self&&"closest"in document.documentElement
)) {
// Element.prototype.closest
Element.prototype.closest = function closest(selector) {
	var node = this;

	while (node) {
		if (node.matches(selector)) return node;
		else node = 'SVGElement' in window && node instanceof SVGElement ? node.parentNode : node.parentElement;
	}

	return null;
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
