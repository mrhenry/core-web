(function(undefined) {
if (!("console"in this&&"timeline"in this.console
)) {
// console.timeline
console.timeline = function timeline() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
