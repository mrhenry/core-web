import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
import ToNumber from "@mrhenry/core-web/helpers/_ESAbstract.ToNumber";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";

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
