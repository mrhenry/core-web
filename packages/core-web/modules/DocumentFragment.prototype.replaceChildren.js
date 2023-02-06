import _mutation from "@mrhenry/core-web/helpers/_mutation";
(function(undefined) {
if (!("DocumentFragment"in self&&"replaceChildren"in DocumentFragment.prototype
)) {
// DocumentFragment.prototype.replaceChildren
(function (global) {
	function replaceChildren() {
		while (this.firstChild) {
			this.removeChild(this.firstChild);
		}
		this.append.apply(this, arguments);
	}

	var fragmentProto = document.createDocumentFragment().constructor.prototype;
	fragmentProto.replaceChildren = replaceChildren;

	global.DocumentFragment.prototype.replaceChildren = replaceChildren;
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
