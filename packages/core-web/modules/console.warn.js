(function(undefined) {
if (!("console"in self&&"warn"in self.console
)) {
// console.warn
console.warn = console.log;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
