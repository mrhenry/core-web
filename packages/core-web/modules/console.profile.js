(function(undefined) {
if (!("console"in this&&"profile"in this.console
)) {
// console.profile
console.profile = function profile() {};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
