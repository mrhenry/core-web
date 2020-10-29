import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";

// _ESAbstract.IteratorComplete
/* global Type, ToBoolean, Get */
// 7.4.3 IteratorComplete ( iterResult )
function IteratorComplete(iterResult) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(iterResult) is Object.
	if (Type(iterResult) !== 'object') {
		throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
	}
	// 2. Return ToBoolean(? Get(iterResult, "done")).
	return ToBoolean(Get(iterResult, "done"));
}
export default IteratorComplete;
