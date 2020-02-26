import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import ToObject from "../helpers/_ESAbstract.ToObject";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import Get from "../helpers/_ESAbstract.Get";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ToString from "../helpers/_ESAbstract.ToString";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import Type from "../helpers/_ESAbstract.Type";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
(function(undefined) {
if (!("onhashchange"in self&&(null==self.onhashchange||"function"==typeof self.onhashchange)
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
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
