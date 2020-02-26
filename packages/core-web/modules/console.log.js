(function(undefined) {
if (!("console"in this&&"log"in this.console
)) {
// console.log
console.log = function log() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
