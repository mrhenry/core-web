(function(undefined) {
if (!("devicePixelRatio"in this
)) {
// devicePixelRatio
// The chances of a device that runs IE < 11 having a DPR of more than 1 are low enough that this is likely to offer the best reliability / performance / accuracy tradeoff
this.devicePixelRatio = 1;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
