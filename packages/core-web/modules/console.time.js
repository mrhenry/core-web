(function(undefined) {
if (!("console"in self&&"time"in self.console
)) {
// console.time
console.time = function time() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
