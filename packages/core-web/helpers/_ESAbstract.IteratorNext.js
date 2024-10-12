import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";

// _ESAbstract.IteratorNext
/* global Call, Type */
// 7.4.2. IteratorNext ( iteratorRecord [ , value ] )
// eslint-disable-next-line no-unused-vars
function IteratorNext(iteratorRecord /* [, value] */) {
	var result;
	try {
		// 1. If value is not present, then
		if (arguments.length < 2) {
			// a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « »).
			result = Call(
				iteratorRecord["[[NextMethod]]"],
				iteratorRecord["[[Iterator]]"]
			);
			// 2. Else,
		} else {
			// a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « value »).
			result = Call(
				iteratorRecord["[[NextMethod]]"],
				iteratorRecord["[[Iterator]]"],
				[arguments[1]]
			);
		}
	} catch (err) {
		// 3. If result is a throw completion, then
		// a. Set iteratorRecord.[[Done]] to true.
		iteratorRecord["[[Done]]"] = true;
		// b. Return ? result.
		throw err;
	}
	// 4. Set result to ! result.
	// 5. If result is not an Object, then
	if (Type(result) !== "object") {
		// a. Set iteratorRecord.[[Done]] to true.
		iteratorRecord["[[Done]]"] = true;
		// b. Throw a TypeError exception.
		throw new TypeError("bad iterator");
	}
	// 6. Return result.
	return result;
}
export default IteratorNext;
