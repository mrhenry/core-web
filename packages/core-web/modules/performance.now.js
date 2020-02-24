(function(undefined) {
if (!("performance"in self&&"now"in self.performance
)) {
// performance.now
(function (global) {

var startTime = Date.now();

if (!global.performance) {
    global.performance = {};
}

global.performance.now = function () {
    return Date.now() - startTime;
};

}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
