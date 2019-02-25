import _mutation from "../helpers/_mutation";
(function(undefined) {
if (!("DocumentFragment"in this&&"append"in DocumentFragment.prototype
)) {
// DocumentFragment.prototype.append
DocumentFragment.prototype.append = function append() {
	this.appendChild(_mutation(arguments));
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
