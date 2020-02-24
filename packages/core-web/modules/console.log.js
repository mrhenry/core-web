(function(undefined) {
if (!("console"in self&&"log"in self.console
)) {
// console.log
console.log = function log() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
