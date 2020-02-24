(function(undefined) {
if (!("console"in self&&"groupEnd"in self.console
)) {
// console.groupEnd
console.groupEnd = function groupEnd() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
