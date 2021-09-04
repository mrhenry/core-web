(function(undefined) {
if (!("forEach"in NodeList.prototype
)) {
// NodeList.prototype.forEach
NodeList.prototype.forEach = Array.prototype.forEach;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
