(function(undefined) {
if (!("console"in self&&"timeline"in self.console
)) {
// console.timeline
console.timeline = function timeline() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
