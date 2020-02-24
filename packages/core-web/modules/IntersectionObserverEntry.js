(function(undefined) {
if (!("IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype
)) {
// IntersectionObserverEntry
// Minimal polyfill for Edge 15's lack of `isIntersecting`
// See: https://github.com/w3c/IntersectionObserver/issues/211
Object.defineProperty(IntersectionObserverEntry.prototype,
	'isIntersecting', {
		get: function () {
			return this.intersectionRatio > 0;
		}
	}
);
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
