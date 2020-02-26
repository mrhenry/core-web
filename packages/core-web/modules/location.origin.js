import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import Get from "../helpers/_ESAbstract.Get";
import ToObject from "../helpers/_ESAbstract.ToObject";
import Type from "../helpers/_ESAbstract.Type";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
(function(undefined) {
if (!("location"in this&&"origin"in this.location
)) {
// location.origin
try {
	Object.defineProperty(window.location, 'origin', {
		enumerable: true,
		writable: false,
		value: window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : ''),
		configurable: false
	});
} catch(e) {

	// IE9 is throwing "Object doesn't support this action" when attempting defineProperty on window.location, so provide an alternative
	window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
