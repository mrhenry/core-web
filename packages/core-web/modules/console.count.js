(function(undefined) {
if (!("console"in self&&"count"in self.console
)) {
// console.count
console.count = function count() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
