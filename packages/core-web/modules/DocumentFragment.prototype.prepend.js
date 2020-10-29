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
if (!("DocumentFragment"in self&&"prepend"in DocumentFragment.prototype
)) {
// DocumentFragment.prototype.prepend
/* global _mutation */
(function (global) {
	var fragmentProto = document.createDocumentFragment().constructor.prototype;
	fragmentProto.prepend = function prepend() {
		this.insertBefore(_mutation(arguments), this.firstChild);
	};

	global.DocumentFragment.prototype.prepend = function prepend() {
		this.insertBefore(_mutation(arguments), this.firstChild);
	};
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
