(function(undefined) {
if (!("console"in self&&"clear"in self.console
)) {
// console.clear
console.clear = function clear() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
