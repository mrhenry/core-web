(function(undefined) {
if (!("console"in self&&"group"in self.console
)) {
// console.group
console.group = function group() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
