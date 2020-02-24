(function(undefined) {
if (!("console"in self&&"info"in self.console
)) {
// console.info
console.info = console.log;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
