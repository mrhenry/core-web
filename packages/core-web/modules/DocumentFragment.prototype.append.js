import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import HasOwnProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "@mrhenry/core-web/helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import _mutation from "@mrhenry/core-web/helpers/_mutation";
(function(undefined) {
if (!("DocumentFragment"in self&&"append"in DocumentFragment.prototype
)) {
// DocumentFragment.prototype.append
/* global _mutation */
(function (global) {
	var fragmentProto = document.createDocumentFragment().constructor.prototype;
	fragmentProto.append = function append() {
		this.appendChild(_mutation(arguments));
	};

	global.DocumentFragment.prototype.append = function append() {
		this.appendChild(_mutation(arguments));
	};
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
