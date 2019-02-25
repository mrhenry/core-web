(function(undefined) {
if (!("console"in this&&"trace"in this.console
)) {
// console.trace
console.trace = function trace() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
