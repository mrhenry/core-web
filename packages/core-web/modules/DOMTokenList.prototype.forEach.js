import _DOMTokenList from "@mrhenry/core-web/helpers/_DOMTokenList";
import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import HasProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasProperty";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
(function(undefined) {
if (!("DOMTokenList"in self&&"forEach"in self.DOMTokenList.prototype
)) {
// DOMTokenList.prototype.forEach
DOMTokenList.prototype.forEach = Array.prototype.forEach;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
