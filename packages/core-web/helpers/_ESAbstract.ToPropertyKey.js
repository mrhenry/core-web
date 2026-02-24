import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";

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
