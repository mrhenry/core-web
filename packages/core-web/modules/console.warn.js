(function(undefined) {
if (!("console"in this&&"warn"in this.console
)) {
// console.warn
console.warn = console.log;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
