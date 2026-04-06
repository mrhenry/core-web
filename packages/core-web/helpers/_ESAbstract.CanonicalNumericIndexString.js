import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call.js";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get.js";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable.js";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type.js";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject.js";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV.js";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod.js";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive.js";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive.js";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber.js";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue.js";
import ToNumber from "@mrhenry/core-web/helpers/_ESAbstract.ToNumber.js";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString.js";

// _ESAbstract.CanonicalNumericIndexString
/* global ToNumber, SameValue, ToString */
// 7.1.16 CanonicalNumericIndexString ( argument )
function CanonicalNumericIndexString(argument) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(argument) is String.
	// 2. If argument is "-0", return -0.
	if (argument === '-0') {
		return -0;
	}
	// 3. Let n be ! ToNumber(argument).
	var n = ToNumber(argument);
	// 4. If SameValue(! ToString(n), argument) is false, return undefined.
	if (SameValue(ToString(n), argument) === false) {
		return undefined;
	}
	// 5. Return n.
	return n;
}
export default CanonicalNumericIndexString;
