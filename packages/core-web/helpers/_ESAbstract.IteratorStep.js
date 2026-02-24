import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";

// _ESAbstract.IteratorStep
/* global IteratorNext, IteratorComplete */
// 7.4.5. IteratorStep ( iteratorRecord )
function IteratorStep(iteratorRecord) {
	// 1. Let result be ? IteratorNext(iteratorRecord).
	var result = IteratorNext(iteratorRecord);
	var done;
	try {
		// 2. Let done be Completion(IteratorComplete(result)).
		done = IteratorComplete(result);
	} catch (err) {
		// 3. If done is a throw completion, then
		// a. Set iteratorRecord.[[Done]] to true.
		iteratorRecord["[[Done]]"] = true;
		// b. Return ? done.
		throw err;
	}
	// 4. Set done to ! done.
	// 5. If done is true, then
	if (done === true) {
		// a. Set iteratorRecord.[[Done]] to true.
		iteratorRecord["[[Done]]"] = true;
		// b. Return done.
		return IteratorStep.DONE;
	}
	// 6. Return result.
	return result;
}

// `DONE` iterator tombstone
IteratorStep.DONE = {};
export default IteratorStep;
