(function(undefined) {
if (!("console"in this&&"timeStamp"in this.console
)) {
// console.timeStamp
console.timeStamp = function cd() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
