import AddValueToKeyedGroup from "@mrhenry/core-web/helpers/_ESAbstract.AddValueToKeyedGroup";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import IteratorStepValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStepValue";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import RequireObjectCoercible from "@mrhenry/core-web/helpers/_ESAbstract.RequireObjectCoercible";
import ThrowCompletion from "@mrhenry/core-web/helpers/_ESAbstract.ThrowCompletion";
import ToPropertyKey from "@mrhenry/core-web/helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";

// _ESAbstract.GroupBy
/* global AddValueToKeyedGroup, Call, GetIterator, IsCallable, IteratorClose, IteratorStepValue, RequireObjectCoercible, ThrowCompletion, ToPropertyKey */

// 7.3.36 GroupBy ( items, callbackfn, keyCoercion )
// eslint-disable-next-line no-unused-vars
function GroupBy(items, callbackfn, keyCoercion) {
	// 1. Perform ? RequireObjectCoercible(items).
	RequireObjectCoercible(items);
	// 2. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError("callbackfn is not callable.");
	}
	// 3. Let groups be a new empty List.
	var groups = [];
	// 4. Let iteratorRecord be ? GetIterator(items, sync).
	var iteratorRecord = GetIterator(items);
	// 5. Let k be 0.
	var k = 0;
	// 6. Repeat,
	while (true) {
		// a. If k ≥ 253 - 1, then
		if (k >= Number.MAX_SAFE_INTEGER) {
			// i. Let error be ThrowCompletion(a newly created TypeError object).
			var error = ThrowCompletion(new TypeError("k greater than or equal to MAX_SAFE_INTEGER"));
			// ii. Return ? IteratorClose(iteratorRecord, error).
			return IteratorClose(iteratorRecord, error);
		}
		// b. Let next be ? IteratorStepValue(iteratorRecord).
		var next = IteratorStepValue(iteratorRecord);
		// c. If next is DONE, then
		if (next === IteratorStepValue.DONE) {
			// i. Return groups.
			return groups;
		}
		// d. Let value be next.
		var value = next;
		// e. Let key be Completion(Call(callbackfn, undefined, « value, 𝔽(k) »)).
		var key;
		try {
			key = Call(callbackfn, undefined, [value, k]);
		} catch (err) {
			// f. IfAbruptCloseIterator(key, iteratorRecord).
			return IteratorClose(iteratorRecord, ThrowCompletion(err));
		}
		// g. If keyCoercion is property, then
		if (keyCoercion === "property") {
			// i. Set key to Completion(ToPropertyKey(key)).
			try {
				key = ToPropertyKey(key);
			} catch (err) {
				// ii. IfAbruptCloseIterator(key, iteratorRecord).
				return IteratorClose(iteratorRecord, ThrowCompletion(err));
			}
		}
		// h. Else,
		else {
			// i. Assert: keyCoercion is zero.
			// ii. If key is -0𝔽, set key to +0𝔽.
			// eslint-disable-next-line no-compare-neg-zero
			if (key === -0) key = 0;
		}
		// i. Perform AddValueToKeyedGroup(groups, key, value).
		AddValueToKeyedGroup(groups, key, value);
		// j. Set k to k + 1.
		k = k + 1;
	}
}
export default GroupBy;
