(function(undefined) {
if (!("console"in self&&"assert"in self.console
)) {
// console.assert
console.assert = function assert() { };
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
