(function(undefined) {
if (!("Window"in self
)) {
// Window
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {
	(function (global) {
		if (global.constructor) {
			global.Window = global.constructor;
		} else {
			(global.Window = global.constructor = new Function('return function Window() {}')()).prototype = self;
		}
	}(self));
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
