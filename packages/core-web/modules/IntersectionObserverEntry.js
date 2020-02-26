import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ToObject from "../helpers/_ESAbstract.ToObject";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import Get from "../helpers/_ESAbstract.Get";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import Type from "../helpers/_ESAbstract.Type";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import Construct from "../helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import Call from "../helpers/_ESAbstract.Call";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import ToString from "../helpers/_ESAbstract.ToString";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
(function(undefined) {
if (!("IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype
)) {
// IntersectionObserverEntry
// Minimal polyfill for Edge 15's lack of `isIntersecting`
// See: https://github.com/WICG/IntersectionObserver/issues/211
Object.defineProperty(IntersectionObserverEntry.prototype,
	'isIntersecting', {
		get: function () {
			return this.intersectionRatio > 0;
		}
	}
);
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
