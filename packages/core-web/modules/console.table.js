(function(undefined) {
if (!("console"in self&&"table"in self.console
)) {
// console.table
console.table = function table() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
