import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import IteratorStepValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStepValue";

// _ESAbstract.IterableToList
/* global GetIterator, IteratorStepValue */
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
	// 4. Let next be NOT-STARTED.
	var next;
	// 5. Repeat, while next is not DONE,
	while (next !== IteratorStepValue.DONE) {
		// 5.a. Set next to ? IteratorStepValue(iteratorRecord).
		next = IteratorStepValue(iteratorRecord);
		// 5.b. If next is not DONE, then
		if (next !== IteratorStepValue.DONE) {
			// 5.b.i. Append next to the end of the List values.
			values.push(next);
		}
	}
	// 6. Return values.
	return values;
}
export default IterableToList;
