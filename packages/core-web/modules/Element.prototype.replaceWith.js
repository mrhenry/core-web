import _mutation from "../helpers/_mutation";
(function(undefined) {
if (!("Element"in self&&"replaceWith"in Element.prototype
)) {
// Element.prototype.replaceWith
/* global _mutation */
Document.prototype.replaceWith = Element.prototype.replaceWith = function replaceWith() {
	if (this.parentNode) {
		this.parentNode.replaceChild(_mutation(arguments), this);
	}
};

// Not all UAs support the Text constructor.  Polyfill on the Text constructor only where it exists
// TODO: Add a polyfill for the Text constructor, and make it a dependency of this polyfill.
if ('Text' in self) {
	Text.prototype.replaceWith = Element.prototype.replaceWith;
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
