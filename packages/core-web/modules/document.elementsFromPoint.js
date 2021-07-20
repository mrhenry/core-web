import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "@mrhenry/core-web/helpers/_ESAbstract.IsConstructor";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import Construct from "@mrhenry/core-web/helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.GetPrototypeFromConstructor";
import HasOwnProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "@mrhenry/core-web/helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import HasProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasProperty";
import CreateDataPropertyOrThrow from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataProperty";
(function(undefined) {
if (!("document"in self&&"elementsFromPoint"in self.document
)) {
// document.elementsFromPoint
document.elementsFromPoint = function elementsFromPoint(x, y) {
	if ('msElementsFromPoint' in this) {
		return this.msElementsFromPoint(x, y) || [];
	}

	var stack = [];
	var element = document.elementFromPoint(x, y);

	// IE8 and IE9 don't have support for pointer-events for html elements
	var isIE =  (/msie|trident/i).test(navigator && navigator.userAgent);
	// CSS property used to exclude the element from hit testing
	var propertyName = isIE
		? 'visibility'
		: 'pointer-events';
	var propertyValue = isIE
		? 'hidden'
		: 'none';

	function setProperty(element, name, value, priority) {
		if (element.style.setProperty) {
			// on IE9 it needs to be cleared out before changing visibility from hidden to visibile
			element.style.setProperty(name, '', '');
			element.style.setProperty(name, value, priority);
		} else {
			element.style[name] = value;
			// need to force a reflow on IE8 in some cases
			element.getClientRects();
		}
	}

	function getPropertyValue(element, name) {
		if (element.style.getPropertyValue) {
			return element.style.getPropertyValue(name);
		} else {
			return element.style[name]
		}
	}

	function getPropertyPriority(element, name) {
		if (element.style.getPropertyPriority)
			return element.style.getPropertyPriority(name);
	}

	while (element !== null) {
		stack.push({
			element: element,
			value: getPropertyValue(element, propertyName),
			priority: getPropertyPriority(element, propertyName)
		});
		/**
		* [...]Note: The elementFromPoint() method does not necessarily return the top-most painted element.
		* For instance, an element can be excluded from being a target for hit testing by using the pointer-events
		* CSS property.[...]
		* https://drafts.csswg.org/cssom-view/#dom-document-elementfrompoint
		*/
		setProperty(element, propertyName, propertyValue, 'important');

		element = element !== document.documentElement
			? document.elementFromPoint(x, y)
			: null;
	}

	return stack.map(function (entry) {
		// restore its previous value if any
		setProperty(entry.element, propertyName, entry.value, entry.priority);

		return entry.element;
	});
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
