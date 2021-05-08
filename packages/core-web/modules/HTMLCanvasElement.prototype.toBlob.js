import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import HasOwnProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "@mrhenry/core-web/helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import HasProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "@mrhenry/core-web/helpers/_ESAbstract.IsConstructor";
import Construct from "@mrhenry/core-web/helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.GetPrototypeFromConstructor";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import CreateIterResultObject from "@mrhenry/core-web/helpers/_ESAbstract.CreateIterResultObject";
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
