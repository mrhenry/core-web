(function(undefined) {
if (!("performance"in this&&"now"in this.performance
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

}(this));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
