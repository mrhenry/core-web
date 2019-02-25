(function(undefined) {
if (!("console"in this&&"error"in this.console
)) {
// console.error
console.error = console.log;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
