import _mutation from "@mrhenry/core-web/helpers/_mutation";
(function(undefined) {
if (!("DocumentFragment"in self&&"prepend"in DocumentFragment.prototype
)) {
// DocumentFragment.prototype.prepend
/* global _mutation */
(function (global) {
	var fragmentProto = document.createDocumentFragment().constructor.prototype;
	fragmentProto.prepend = function prepend() {
		this.insertBefore(_mutation(arguments), this.firstChild);
	};

	global.DocumentFragment.prototype.prepend = function prepend() {
		this.insertBefore(_mutation(arguments), this.firstChild);
	};
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
