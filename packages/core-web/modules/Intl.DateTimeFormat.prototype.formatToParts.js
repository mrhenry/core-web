(function(undefined) {
if (!("Intl"in self&&Intl.DateTimeFormat&&Intl.DateTimeFormat.prototype.formatToParts
)) {
// Intl.DateTimeFormat.prototype.formatToParts
Intl.DateTimeFormat = self.IntlPolyfill !== undefined ? self.IntlPolyfill.DateTimeFormat : Intl.DateTimeFormat;}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
