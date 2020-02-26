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
if (!("document"in self&&"hidden"in document&&"visibilityState"in document
)) {
// document.visibilityState
// PageVisibility
(function () {
	var prefix = document.webkitVisibilityState ? 'webkit' : document.mozVisibilityState ? 'moz' : null;

	function normalizeState () {
		document.hidden = document[prefix + 'Hidden'];
		document.visibilityState = document[prefix + 'VisibilityState'];
	}

	if (!prefix) {
		return;
	}

	normalizeState();

	document.addEventListener(prefix + 'visibilitychange', function () {
		normalizeState();
		document.dispatchEvent(new CustomEvent('visibilitychange'));
	});

}());
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
