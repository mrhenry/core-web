import _mutation from "../helpers/_mutation";
(function(undefined) {
if (!("Element"in this&&"append"in Element.prototype
)) {
// Element.prototype.append
Document.prototype.append = Element.prototype.append = function append() {
	this.appendChild(_mutation(arguments));
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
