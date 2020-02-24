import _mutation from "../helpers/_mutation";
(function(undefined) {
if (!("Element"in self&&"remove"in Element.prototype
)) {
// Element.prototype.remove
Document.prototype.remove = Element.prototype.remove = function remove() {
	if (this.parentNode) {
		this.parentNode.removeChild(this);
	}
};

// Not all UAs support the Text constructor.  Polyfill on the Text constructor only where it exists
// TODO: Add a polyfill for the Text constructor, and make it a dependency of this polyfill.
if ("Text" in self) {
	Text.prototype.remove = Element.prototype.remove;
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
