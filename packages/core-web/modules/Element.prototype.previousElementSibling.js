(function(undefined) {
if (!("document"in self&&"previousElementSibling"in document.documentElement
)) {
// Element.prototype.previousElementSibling
Object.defineProperty(Element.prototype, 'previousElementSibling', {
	get: function(){
		var el = this.previousSibling;
		while (el && el.nodeType !== 1) { el = el.previousSibling; }
		return el;
	}
});
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
