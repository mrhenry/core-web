(function(undefined) {
if (!("console"in this&&"count"in this.console
)) {
// console.count
console.count = function count() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
