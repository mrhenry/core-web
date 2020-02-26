(function(undefined) {
if (!("console"in this&&"time"in this.console
)) {
// console.time
console.time = function time() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
