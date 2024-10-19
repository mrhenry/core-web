import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ToIntegerOrInfinity from "@mrhenry/core-web/helpers/_ESAbstract.ToIntegerOrInfinity";
import ToNumber from "@mrhenry/core-web/helpers/_ESAbstract.ToNumber";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";

// _ESAbstract.GetSetRecord
/* global Get, IsCallable, ToIntegerOrInfinity, ToNumber, Type */
// 24.2.1.2 GetSetRecord ( obj )
// eslint-disable-next-line no-unused-vars
function GetSetRecord(obj) {
	// 1. If obj is not an Object, throw a TypeError exception.
	if (Type(obj) !== "object") {
		throw new TypeError("argument must be an object");
	}
	// 2. Let rawSize be ? Get(obj, "size").
	var rawSize = Get(obj, "size");
	// 3. Let numSize be ? ToNumber(rawSize).
	var numSize = ToNumber(rawSize);
	// 4. NOTE: If rawSize is undefined, then numSize will be NaN.
	// 5. If numSize is NaN, throw a TypeError exception.
	if (isNaN(numSize)) {
		throw new TypeError("size must be a number");
	}
	// 6. Let intSize be ! ToIntegerOrInfinity(numSize).
	var intSize = ToIntegerOrInfinity(numSize);
	// 7. If intSize < 0, throw a RangeError exception.
	if (intSize < 0) {
		throw new TypeError("size must be non-negative");
	}
	// 8. Let has be ? Get(obj, "has").
	var has = Get(obj, "has");
	// 9. If IsCallable(has) is false, throw a TypeError exception.
	if (IsCallable(has) === false) {
		throw new TypeError("has must be callable");
	}
	// 10. Let keys be ? Get(obj, "keys").
	var keys = Get(obj, "keys");
	// 11. If IsCallable(keys) is false, throw a TypeError exception.
	if (IsCallable(keys) === false) {
		throw new TypeError("keys must be callable");
	}
	// 12. Return a new Set Record { [[SetObject]]: obj, [[Size]]: intSize, [[Has]]: has, [[Keys]]: keys }.
	return {
		"[[SetObject]]": obj,
		"[[Size]]": intSize,
		"[[Has]]": has,
		"[[Keys]]": keys
	};
}
export default GetSetRecord;
