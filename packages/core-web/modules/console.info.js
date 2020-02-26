(function(undefined) {
if (!("console"in this&&"info"in this.console
)) {
// console.info
console.info = console.log;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
