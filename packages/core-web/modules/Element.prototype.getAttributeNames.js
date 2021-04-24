(function(undefined) {
if (!("document"in self&&"getAttributeNames"in document.documentElement
)) {
// Element.prototype.getAttributeNames
(function (global) {
	global.Element.prototype.getAttributeNames = function getAttributeNames() {
		var attributes = this.attributes;
		var length = attributes.length;
		var result = new Array(length);
		for (var i = 0; i < length; i++) {
			result[i] = attributes[i].name;
		}
		return result;
	};
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
