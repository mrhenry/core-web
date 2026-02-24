import CreateDataProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataProperty";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import HasProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import CreateDataPropertyOrThrow from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataPropertyOrThrow";

// _ESAbstract.FlattenIntoArray
/* globals ToString, HasProperty, Get, Call, IsArray, ToLength, CreateDataPropertyOrThrow */
// 22.1.3.10.1 FlattenIntoArray(target, source, sourceLen, start, depth [ , mapperFunction, thisArg ])
function FlattenIntoArray(target, source, sourceLen, start, depth /* , mapperFunction, thisArg */ ) { // eslint-disable-line no-unused-vars
	var mapperFunction = arguments[5];
	var thisArg = arguments[6];
	// 1. Let targetIndex be start.
	var targetIndex = start;
	// 2. Let sourceIndex be 0.
	var sourceIndex = 0;
	// 3. Repeat, while sourceIndex < sourceLen
	while (sourceIndex < sourceLen) {
		// a. Let P be ! ToString(sourceIndex).
		var P = ToString(sourceIndex);
		// b. Let exists be ? HasProperty(source, P).
		var exists = HasProperty(source, P);
		// c. If exists is true, then
		if (exists === true) {
			// i. Let element be ? Get(source, P).
			var element = Get(source, P);
			// ii. If mapperFunction is present, then
			if (5 in arguments) {
				// 1. Assert: thisArg is present.
				// 2. Set element to ? Call(mapperFunction, thisArg , « element, sourceIndex, source »).
				element = Call(mapperFunction, thisArg, [element, sourceIndex, source]);
			}
			// iii. Let shouldFlatten be false.
			var shouldFlatten = false;
			// iv. If depth > 0, then
			if (depth > 0) {
				// 1. Set shouldFlatten to ? IsArray(element).
				shouldFlatten = IsArray(element);
			}
			// v. If shouldFlatten is true, then
			if (shouldFlatten === true) {
				// 1. Let elementLen be ? ToLength(? Get(element, "length")).
				var elementLen = ToLength(Get(element, "length"));
				// 2. Set targetIndex to ? FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1).
				targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
				// vi. Else,
			} else {
				// 1. If targetIndex ≥ 253-1, throw a TypeError exception.
				if (targetIndex >= (Math.pow(2, 53) - 1)) {
					throw new TypeError("targetIndex is greater than or equal to 2^53-1");
				}
				// 2. Perform ? CreateDataPropertyOrThrow(target, ! ToString(targetIndex), element).
				CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
				// 3. Increase targetIndex by 1.
				targetIndex += 1;
			}
		}
		// d. Increase sourceIndex by 1.
		sourceIndex += 1;
	}
	// 4. Return targetIndex.
	return targetIndex;
}
export default FlattenIntoArray;
