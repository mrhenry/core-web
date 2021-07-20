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
import _mutation from "@mrhenry/core-web/helpers/_mutation";
(function(undefined) {
if (!("Element"in self&&"after"in Element.prototype
)) {
// Element.prototype.after
/* global _mutation */
Document.prototype.after = Element.prototype.after = function after() {
	if (this.parentNode) {
		var args = Array.prototype.slice.call(arguments),
				viableNextSibling = this.nextSibling,
				idx = viableNextSibling ? args.indexOf(viableNextSibling) : -1;

		while (idx !== -1) {
			viableNextSibling = viableNextSibling.nextSibling;
			if (!viableNextSibling) {
				break;
			}
			idx = args.indexOf(viableNextSibling);
		}

		this.parentNode.insertBefore(_mutation(arguments), viableNextSibling);
	}
};

// Not all UAs support the Text constructor.  Polyfill on the Text constructor only where it exists
// TODO: Add a polyfill for the Text constructor, and make it a dependency of this polyfill.
if ("Text" in self) {
	Text.prototype.after = Element.prototype.after;
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
