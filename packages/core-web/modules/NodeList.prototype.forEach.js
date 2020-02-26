import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import ToObject from "../helpers/_ESAbstract.ToObject";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import Get from "../helpers/_ESAbstract.Get";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import Call from "../helpers/_ESAbstract.Call";
import ToString from "../helpers/_ESAbstract.ToString";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import Type from "../helpers/_ESAbstract.Type";
(function(undefined) {
if (!("forEach"in NodeList.prototype
)) {
// NodeList.prototype.forEach
NodeList.prototype.forEach = Array.prototype.forEach;}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
