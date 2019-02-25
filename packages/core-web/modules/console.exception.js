(function(undefined) {
if (!("console"in this&&"exception"in this.console
)) {
// console.exception
console.exception = function exception() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
