(function(undefined) {
if (!("console"in self&&"markTimeline"in self.console
)) {
// console.markTimeline
console.markTimeline = function markTimeline() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
