(function(undefined) {
if (!("console"in self&&"trace"in self.console
)) {
// console.trace
console.trace = function trace() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
