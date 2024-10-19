import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import IteratorStepValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStepValue";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import ThrowCompletion from "@mrhenry/core-web/helpers/_ESAbstract.ThrowCompletion";

// _ESAbstract.AddEntriesFromIterable
/* global IsCallable, GetIterator, IteratorStepValue, IteratorClose, Get, Call, ThrowCompletion, Type */
// eslint-disable-next-line no-unused-vars
var AddEntriesFromIterable = (function() {
	var toString = {}.toString;
	var split = "".split;
	// 23.1.1.2 AddEntriesFromIterable ( target, iterable, adder )
	return function AddEntriesFromIterable(target, iterable, adder) {
		// 1. If IsCallable(adder) is false, throw a TypeError exception.
		if (IsCallable(adder) === false) {
			throw new TypeError("adder is not callable.");
		}
		// 2. Assert: iterable is present, and is neither undefined nor null.
		// 3. Let iteratorRecord be ? GetIterator(iterable).
		var iteratorRecord = GetIterator(iterable);
		// 4. Repeat,

		while (true) {
			// a. Let next be ? IteratorStepValue(iteratorRecord).
			var next = IteratorStepValue(iteratorRecord);
			// b. If next is DONE, return target.
			if (next === IteratorStepValue.DONE) {
				return target;
			}
			// c. If next is not an Object, then
			if (Type(next) !== "object") {
				// i. Let error be ThrowCompletion(a newly created TypeError object).
				var error = ThrowCompletion(new TypeError("next is not an object"));
				// ii. Return ? IteratorClose(iteratorRecord, error).
				return IteratorClose(iteratorRecord, error);
			}
			// fallback for non-array-like strings which exist in some ES3 user-agents
			next =
				(Type(next) === "string" || next instanceof String) &&
				toString.call(next) == "[object String]"
					? split.call(next, "")
					: next;
			var k;
			try {
				// d. Let k be Completion(Get(next, "0")).
				k = Get(next, "0");
			} catch (e1) {
				// e. IfAbruptCloseIterator(k, iteratorRecord).
				return IteratorClose(iteratorRecord, ThrowCompletion(e1));
			}
			var v;
			try {
				// f. Let v be Completion(Get(next, "1")).
				v = Get(next, "1");
			} catch (e2) {
				// g. IfAbruptCloseIterator(v, iteratorRecord).
				return IteratorClose(iteratorRecord, ThrowCompletion(e2));
			}
			try {
				// h. Let status be Completion(Call(adder, target, « k, v »)).
				Call(adder, target, [k, v]);
			} catch (e3) {
				// i. IfAbruptCloseIterator(status, iteratorRecord).
				return IteratorClose(iteratorRecord, ThrowCompletion(e3));
			}
		}
	};
})();
export default AddEntriesFromIterable;
