(function(undefined) {
if (!((function(){var n=!1
return document.documentElement.addEventListener("focusin",function(){n=!0}),document.documentElement.dispatchEvent(new Event("focusin")),n})()
)) {
// Event.focusin
self.addEventListener('focus', function (event) {
	event.target.dispatchEvent(new Event('focusin', {
		bubbles: true,
		cancelable: true
	}));
}, true);

self.addEventListener('blur', function (event) {
	event.target.dispatchEvent(new Event('focusout', {
		bubbles: true,
		cancelable: true
	}));
}, true);
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
