import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import Type from "../helpers/_ESAbstract.Type";
import Call from "../helpers/_ESAbstract.Call";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import Get from "../helpers/_ESAbstract.Get";

// _ESAbstract.IteratorStep
/* global IteratorNext, IteratorComplete */
// 7.4.5. IteratorStep ( iteratorRecord )
function IteratorStep(iteratorRecord) { // eslint-disable-line no-unused-vars
	// 1. Let result be ? IteratorNext(iteratorRecord).
	var result = IteratorNext(iteratorRecord);
	// 2. Let done be ? IteratorComplete(result).
	var done = IteratorComplete(result);
	// 3. If done is true, return false.
	if (done === true) {
		return false;
	}
	// 4. Return result.
	return result;
}
export default IteratorStep;
