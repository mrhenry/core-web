(function(undefined) {
if (!("console"in self&&"profileEnd"in self.console
)) {
// console.profileEnd
console.profileEnd = function profileEnd() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
