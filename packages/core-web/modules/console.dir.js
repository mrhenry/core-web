(function(undefined) {
if (!("console"in self&&"dir"in self.console
)) {
// console.dir
console.dir = function dir() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
