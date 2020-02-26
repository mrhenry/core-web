(function(undefined) {
if (!("console"in this&&"timelineEnd"in this.console
)) {
// console.timelineEnd
console.timelineEnd = function timelineEnd() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
