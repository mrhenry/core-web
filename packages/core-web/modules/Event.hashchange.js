(function(undefined) {
if (!("onhashchange"in this&&(null==this.onhashchange||"function"==typeof this.onhashchange)
)) {
// Event.hashchange
(function (global) {
	var hash = global.location.hash;

	function poll() {
		if (hash !== global.location.hash) {
			hash = global.location.hash;

			global.dispatchEvent(new Event('hashchange'));
		}

		setTimeout(poll, 500);
	}

	// Make sure a check for 'onhashchange' in window will pass (note: setting to undefined IE<9 causes 'Not implemented' error)
	global.onhashchange = function () { };

	poll();
}(this));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
