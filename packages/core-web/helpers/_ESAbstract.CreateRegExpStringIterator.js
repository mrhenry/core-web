import AdvanceStringIndex from "@mrhenry/core-web/helpers/_ESAbstract.AdvanceStringIndex";
import CreateIterResultObject from "@mrhenry/core-web/helpers/_ESAbstract.CreateIterResultObject";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import CreateDataProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataProperty";
import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import RegExpExec from "@mrhenry/core-web/helpers/_ESAbstract.RegExpExec";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";

// _ESAbstract.CreateRegExpStringIterator
/* global AdvanceStringIndex, CreateIterResultObject, CreateMethodProperty, Get, RegExpExec, Symbol, ToLength, ToString */

// 22.2.7.1 CreateRegExpStringIterator ( R, S, global, fullUnicode )
function CreateRegExpStringIterator(R, S, global, fullUnicode) { // eslint-disable-line no-unused-vars
	// 22.2.7.2 The %RegExpStringIteratorPrototype% Object
	var RegExpStringIteratorPrototype = {}

	// 22.2.7.2.1 %RegExpStringIteratorPrototype%.next ( )
	CreateMethodProperty(RegExpStringIteratorPrototype, 'next', function next() {
		// 1. Let closure be a new Abstract Closure with no parameters that captures R, S, global, and fullUnicode and performs the following steps when called:
		// 1.a. Repeat,
		// 2. Return ! CreateIteratorFromClosure(closure, "%RegExpStringIteratorPrototype%", %RegExpStringIteratorPrototype%).

		if (this['[[Done]]'] === true) {
			return CreateIterResultObject(undefined, true);
		}

		// 1.a.i. Let match be ? RegExpExec(R, S).
		var match = RegExpExec(R, S);
		// 1.a.ii. If match is null, return undefined.
		if (match === null) {
			this['[[Done]]'] = true;
			return CreateIterResultObject(undefined, true);
		}
		// 1.a.iii. If global is false, then
		if (global === false) {
			// 1.a.iii.1. Perform ? Yield(match).
			// 1.a.iii.2. Return undefined.
			var result = CreateIterResultObject(match, false);
			this['[[Done]]'] = true;
			return result;
		}
		// 1.a.iv. Let matchStr be ? ToString(? Get(match, "0")).
		var matchStr = ToString(Get(match, '0'));
		// 1.a.v. If matchStr is the empty String, then
		if (matchStr === '') {
			// 1.a.v.1. Let thisIndex be ℝ(? ToLength(? Get(R, "lastIndex"))).
			var thisIndex = ToLength(Get(R, 'lastIndex'));
			// 1.a.v.2. Let nextIndex be ! AdvanceStringIndex(S, thisIndex, fullUnicode).
			var nextIndex = AdvanceStringIndex(S, thisIndex, fullUnicode);
			// 1.a.v.3. Perform ? Set(R, "lastIndex", 𝔽(nextIndex), true).
			R.lastIndex = nextIndex;
		}
		// 1.a.vi. Perform ? Yield(match).
		return CreateIterResultObject(match, false);
	});

	// 22.2.7.2.2 %RegExpStringIteratorPrototype% [ @@toStringTag ]
	Object.defineProperty(RegExpStringIteratorPrototype, Symbol.toStringTag, {
		configurable: true,
		enumerable: false,
		writable: false,
		value: 'RegExp String Iterator'
	});

	CreateMethodProperty(RegExpStringIteratorPrototype, Symbol.iterator, function iterator() {
			return this;
		}
	);

	return RegExpStringIteratorPrototype;
}
export default CreateRegExpStringIterator;
