import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call.js";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get.js";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable.js";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type.js";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject.js";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV.js";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod.js";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive.js";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive.js";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString.js";

// _ESAbstract.ToPropertyKey
/* globals ToPrimitive, Type, ToString */
// 7.1.14. ToPropertyKey ( argument )
function ToPropertyKey(argument) { // eslint-disable-line no-unused-vars
	// 1. Let key be ? ToPrimitive(argument, hint String).
	var key = ToPrimitive(argument, String);
	// 2. If Type(key) is Symbol, then
	if (Type(key) === 'symbol') {
		// a. Return key.
		return key;
	}
	// 3. Return ! ToString(key).
	return ToString(key);
}
export default ToPropertyKey;
