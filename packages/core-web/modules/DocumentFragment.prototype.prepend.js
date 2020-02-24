import _mutation from "../helpers/_mutation";
(function(undefined) {
if (!("DocumentFragment"in self&&"prepend"in DocumentFragment.prototype
)) {
// DocumentFragment.prototype.prepend
/* global _mutation */
DocumentFragment.prototype.prepend = function prepend() {
	this.insertBefore(_mutation(arguments), this.firstChild);
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
