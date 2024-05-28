import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";

// _ESAbstract.IsRegExp
/* global Type, Get, ToBoolean */
// 7.2.8. IsRegExp ( argument )
function IsRegExp(argument) { // eslint-disable-line no-unused-vars
	// 1. If Type(argument) is not Object, return false.
	if (Type(argument) !== 'object') {
		return false;
	}
	// 2. Let matcher be ? Get(argument, @@match).
	var matcher = 'Symbol' in self && 'match' in self.Symbol ? Get(argument, self.Symbol.match) : undefined;
	// 3. If matcher is not undefined, return ToBoolean(matcher).
	if (matcher !== undefined) {
		return ToBoolean(matcher);
	}
	// 4. If argument has a [[RegExpMatcher]] internal slot, return true.
	try {
		var lastIndex = argument.lastIndex;
		argument.lastIndex = 0;
		RegExp.prototype.exec.call(argument);
		return true;
	} catch (_) {} finally {
		argument.lastIndex = lastIndex;
	}
	// 5. Return false.
	return false;
}
export default IsRegExp;
