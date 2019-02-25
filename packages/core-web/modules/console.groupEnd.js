(function(undefined) {
if (!("console"in this&&"groupEnd"in this.console
)) {
// console.groupEnd
console.groupEnd = function groupEnd() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
