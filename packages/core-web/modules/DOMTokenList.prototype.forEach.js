import _DOMTokenList from "@mrhenry/core-web/helpers/_DOMTokenList";
(function(undefined) {
if (!("DOMTokenList"in self&&"forEach"in self.DOMTokenList.prototype
)) {
// DOMTokenList.prototype.forEach
DOMTokenList.prototype.forEach = Array.prototype.forEach;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
