(function(undefined) {
if (!("console"in self&&"exception"in self.console
)) {
// console.exception
console.exception = function exception() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
