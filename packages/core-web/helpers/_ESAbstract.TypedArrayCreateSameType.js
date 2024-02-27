import TypedArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.TypedArrayCreate";
import Construct from "@mrhenry/core-web/helpers/_ESAbstract.Construct";
import IsConstructor from "@mrhenry/core-web/helpers/_ESAbstract.IsConstructor";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import OrdinaryCreateFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.GetPrototypeFromConstructor";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";

// _ESAbstract.TypedArrayCreateSameType
/* global TypedArrayCreate */
// 23.2.4.3 TypedArrayCreateSameType ( exemplar, argumentList )
function TypedArrayCreateSameType(exemplar, argumentList) { // eslint-disable-line no-unused-vars
	// 1. Let constructor be the intrinsic object associated with the constructor name exemplar.[[TypedArrayName]] in Table 68.
	var constructor = {
		Int8Array: self.Int8Array,
		Uint8Array: self.Uint8Array,
		Uint8ClampedArray: self.Uint8ClampedArray,
		Int16Array: self.Int16Array,
		Uint16Array: self.Uint16Array,
		Int32Array: self.Int32Array,
		Uint32Array: self.Uint32Array,
		Float32Array: self.Float32Array,
		Float64Array: self.Float64Array
	}[exemplar && exemplar.constructor && exemplar.constructor.name];

	// the `ArrayBuffer` polyfill does not expose a proper `constructor.name`
	if (!constructor) {
		var proto = Object.getPrototypeOf(Object(exemplar));
		constructor = {
			packI8: self.Int8Array,
			packU8: self.Uint8Array,
			packU8Clamped: self.Uint8ClampedArray,
			packI16: self.Int16Array,
			packU16: self.Uint16Array,
			packI32: self.Int32Array,
			packU32: self.Uint32Array,
			packF32: self.Float32Array,
			packF64: self.Float64Array
		}[proto && proto._pack && proto._pack.name];
	}

	// 2. Let result be ? TypedArrayCreate(constructor, argumentList).
	var result = TypedArrayCreate(constructor, argumentList);
	// 3. Assert: result has [[TypedArrayName]] and [[ContentType]] internal slots.
	// 4. Assert: result.[[ContentType]] is exemplar.[[ContentType]].
	// 5. Return result.
	return result;
}
export default TypedArrayCreateSameType;
