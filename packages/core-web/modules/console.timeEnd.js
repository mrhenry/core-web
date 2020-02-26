(function(undefined) {
if (!("console"in this&&"timeEnd"in this.console
)) {
// console.timeEnd
console.timeEnd = function timeEnd() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
