(function(undefined) {
if (!("console"in this&&"debug"in this.console
)) {
// console.debug
console.debug = console.log;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
