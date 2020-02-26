(function(undefined) {
if (!("console"in this&&"clear"in this.console
)) {
// console.clear
console.clear = function clear() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
