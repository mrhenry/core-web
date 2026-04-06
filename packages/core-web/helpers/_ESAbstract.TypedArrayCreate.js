import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get.js";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type.js";
import GetPrototypeFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.GetPrototypeFromConstructor.js";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject.js";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV.js";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable.js";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod.js";
import IsConstructor from "@mrhenry/core-web/helpers/_ESAbstract.IsConstructor.js";
import OrdinaryCreateFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryCreateFromConstructor.js";
import Construct from "@mrhenry/core-web/helpers/_ESAbstract.Construct.js";

// _ESAbstract.TypedArrayCreate
/* global Construct */
// 23.2.4.2 TypedArrayCreate ( constructor, argumentList )
function TypedArrayCreate(constructor, argumentList) { // eslint-disable-line no-unused-vars
	// 1. Let newTypedArray be ? Construct(constructor, argumentList).
	var newTypedArray = typeof constructor === 'object'
		// TODO: Remove this once we drop support for Safari <10, which does not consider `Int8Array` as a constructor (`typeof Int8Array === 'object'`)
		? new constructor(argumentList[0])
		: Construct(constructor, argumentList);
	// 2. Perform ? ValidateTypedArray(newTypedArray).
	// TODO: Add ValidateTypedArray
	// 3. If the number of elements in argumentList is 1 and argumentList[0] is a Number, then
	if (argumentList.length === 1 && typeof argumentList[0] === 'number') {
		// a. If newTypedArray.[[ArrayLength]] < ℝ(argumentList[0]), throw a TypeError exception.
		if (newTypedArray.length < argumentList[0]) throw TypeError();
	}
	// 4. Return newTypedArray.
	return newTypedArray;
}
export default TypedArrayCreate;
