import _mutation from "../helpers/_mutation";
(function(undefined) {
if (!("Element"in self&&"append"in Element.prototype
)) {
// Element.prototype.append
/* global _mutation */
Document.prototype.append = Element.prototype.append = function append() {
	this.appendChild(_mutation(arguments));
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
