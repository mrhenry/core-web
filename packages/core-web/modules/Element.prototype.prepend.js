import _mutation from "../helpers/_mutation";
(function(undefined) {
if (!("Element"in self&&"prepend"in Element.prototype
)) {
// Element.prototype.prepend
/* global _mutation */
Document.prototype.prepend = Element.prototype.prepend = function prepend() {
	this.insertBefore(_mutation(arguments), this.firstChild);
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
