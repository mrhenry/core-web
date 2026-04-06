import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get.js";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type.js";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean.js";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call.js";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext.js";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete.js";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep.js";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue.js";

// _ESAbstract.IteratorStepValue
/* global IteratorStep, IteratorValue */
// 7.4.8 IteratorStepValue ( iteratorRecord )
function IteratorStepValue(iteratorRecord) {
	// 1. Let result be ? IteratorStep(iteratorRecord).
	var result = IteratorStep(iteratorRecord);
	// 2. If result is DONE, then
	if (result === IteratorStep.DONE) {
		// a. Return DONE.
		return IteratorStepValue.DONE;
	}
	// 3. Let value be Completion(IteratorValue(result)).
	var value;
	try {
		value = IteratorValue(result);
	} catch (err) {
		// 4. If value is a throw completion, then
		// a. Set iteratorRecord.[[Done]] to true.
		iteratorRecord["[[Done]]"] = true;
		// 5. Return ? value.
		throw err;
	}
	// 5. Return ? value.
	return value;
}

// `DONE` iterator tombstone
IteratorStepValue.DONE = {};
export default IteratorStepValue;
