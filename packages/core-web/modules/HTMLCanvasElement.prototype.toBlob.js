import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import Get from "../helpers/_ESAbstract.Get";
import ToObject from "../helpers/_ESAbstract.ToObject";
import Type from "../helpers/_ESAbstract.Type";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import IsArray from "../helpers/_ESAbstract.IsArray";
(function(undefined) {
if (!("toBlob"in HTMLCanvasElement.prototype
)) {
// HTMLCanvasElement.prototype.toBlob
/* global CreateMethodProperty, Uint8Array */
CreateMethodProperty(HTMLCanvasElement.prototype, 'toBlob', function (callback, type, quality) {
	var dataURL = this.toDataURL(type, quality).split(',')[1];
	setTimeout(function() {
		var binStr = atob(dataURL);
		var len = binStr.length;
		var arr = new Uint8Array(len);
		for (var i = 0; i < len; i++) {
			arr[i] = binStr.charCodeAt(i);
		}
		callback(new Blob([arr], { type: type || 'image/png' }));
	});
});
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
