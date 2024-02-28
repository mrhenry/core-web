(function(undefined) {
if (!("console"in self&&"exception"in self.console
)) {
// console.exception
console.exception = function exception() {
    if ("error" in console) {
        Function.prototype.apply.call(console.error, console, arguments);
    }
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
