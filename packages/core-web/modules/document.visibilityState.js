import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import HasProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasProperty";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
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
