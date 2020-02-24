(function(undefined) {
if (!("console"in self&&"timeEnd"in self.console
)) {
// console.timeEnd
console.timeEnd = function timeEnd() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
