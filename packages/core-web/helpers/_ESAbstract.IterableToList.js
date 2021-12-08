import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";

// _ESAbstract.IterableToList
/* global GetIterator, IteratorStep, IteratorValue */
// 7.4.11 IterableToList ( items [ , method ] )
function IterableToList(items /*, method */) { // eslint-disable-line no-unused-vars
	// 1. If method is present, then
	// 1.a. Let iteratorRecord be ? GetIterator(items, sync, method).
	// 2. Else,
	// 2.a. Let iteratorRecord be ? GetIterator(items, sync).
	var iteratorRecord = arguments.length > 1
		? GetIterator(items, arguments[1])
		: GetIterator(items);
	// 3. Let values be a new empty List.
	var values = [];
	// 4. Let next be true.
	var next = true;
	// 5. Repeat, while next is not false,
	while (next !== false) {
		// 5.a. Set next to ? IteratorStep(iteratorRecord).
		next = IteratorStep(iteratorRecord);
		// 5.b. If next is not false, then
		if (next !== false) {
			// 5.b.i. Let nextValue be ? IteratorValue(next).
			var nextValue = IteratorValue(next);
			// 5.b.ii. Append nextValue to the end of the List values.
			values.push(nextValue);
		}
	}
	// 6. Return values.
	return values;
}
export default IterableToList;
