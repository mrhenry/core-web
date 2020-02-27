(function(undefined) {
if (!("document"in self&&"nextElementSibling"in document.documentElement
)) {
// Element.prototype.nextElementSibling
Object.defineProperty(Element.prototype, "nextElementSibling", {
	get: function(){
		var el = this.nextSibling;
		while (el && el.nodeType !== 1) { el = el.nextSibling; }
		return el;
	}
});
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
