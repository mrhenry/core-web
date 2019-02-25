(function(undefined) {
if (!("console"in this&&"dir"in this.console
)) {
// console.dir
console.dir = function dir() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
