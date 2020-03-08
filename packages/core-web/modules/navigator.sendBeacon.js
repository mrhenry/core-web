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
