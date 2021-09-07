import _DOMTokenList from "@mrhenry/core-web/helpers/_DOMTokenList";
(function(undefined) {
if (!("DOMTokenList"in self&&"forEach"in self.DOMTokenList.prototype
)) {
// DOMTokenList.prototype.forEach
(function (global) {
	global.DOMTokenList.prototype.forEach = global.Array.prototype.forEach;

	var e = document.createElement('span');
	if (
		e.classList &&
		e.classList.constructor &&
		e.classList.constructor.prototype &&
		!e.classList.constructor.prototype.forEach
	) {
		e.classList.constructor.prototype.forEach = global.Array.prototype.forEach;
	}
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
