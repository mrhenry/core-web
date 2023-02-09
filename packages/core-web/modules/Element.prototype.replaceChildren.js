import _mutation from "@mrhenry/core-web/helpers/_mutation";
(function(undefined) {
if (!("Element"in self&&"replaceChildren"in Element.prototype
)) {
// Element.prototype.replaceChildren
Document.prototype.replaceChildren = Element.prototype.replaceChildren = function replaceChildren() {
	while (this.firstChild) {
		this.removeChild(this.firstChild);
	}
	this.append.apply(this, arguments);
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
