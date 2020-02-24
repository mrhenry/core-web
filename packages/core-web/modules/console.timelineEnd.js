(function(undefined) {
if (!("console"in self&&"timelineEnd"in self.console
)) {
// console.timelineEnd
console.timelineEnd = function timelineEnd() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
