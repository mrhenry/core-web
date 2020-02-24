(function(undefined) {
if (!("console"in self&&"error"in self.console
)) {
// console.error
console.error = console.log;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
