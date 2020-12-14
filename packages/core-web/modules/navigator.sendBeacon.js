import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import HasProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasProperty";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
(function(undefined) {
if (!("navigator"in self&&"sendBeacon"in navigator
)) {
// navigator.sendBeacon
if (!('navigator' in self)) self.navigator = {};
self.navigator.sendBeacon = function sendBeacon(url, data) {
	try {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, false);
		xhr.onerror = function() {};
		xhr.setRequestHeader('Accept', '*/*');
		if (typeof data === 'string') {
			xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
		} else if (Object.prototype.toString.call(data) === '[object Blob]') {
			if (data.type) {
				xhr.setRequestHeader('Content-Type', data.type);
			}
		}
		xhr.send(data);
		return true;
	} catch (error) {
		return false;
	}
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
