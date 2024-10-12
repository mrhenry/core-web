import Construct from "@mrhenry/core-web/helpers/_ESAbstract.Construct";
import IsConstructor from "@mrhenry/core-web/helpers/_ESAbstract.IsConstructor";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import OrdinaryCreateFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.GetPrototypeFromConstructor";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";

// _ESAbstract.NewPromiseCapability
/* global Construct, IsCallable, IsConstructor */
// 27.2.1.5 NewPromiseCapability ( C )
// eslint-disable-next-line no-unused-vars
function NewPromiseCapability(C) {
	// 1. If IsConstructor(C) is false, throw a TypeError exception.
	if (IsConstructor(C) === false) {
		throw new TypeError("C must be a constructor");
	}
	// 2. NOTE: C is assumed to be a constructor function that supports the parameter conventions of the Promise constructor (see 27.2.3.1).
	// 3. Let resolvingFunctions be the Record { [[Resolve]]: undefined, [[Reject]]: undefined }.
	var resolvingFunctions = {
		"[[Resolve]]": undefined,
		"[[Reject]]": undefined
	};
	// 4. Let executorClosure be a new Abstract Closure with parameters (resolve, reject) that captures resolvingFunctions and performs the following steps when called:
	// 5. Let executor be CreateBuiltinFunction(executorClosure, 2, "", « »).
	var executor = function (resolve, reject) {
		// a. If resolvingFunctions.[[Resolve]] is not undefined, throw a TypeError exception.
		if (resolvingFunctions["[[Resolve]]"] !== undefined) {
			throw new TypeError("[[Resolve]] is not undefined");
		}
		// b. If resolvingFunctions.[[Reject]] is not undefined, throw a TypeError exception.
		if (resolvingFunctions["[[Reject]]"] !== undefined) {
			throw new TypeError("[[Reject]] is not undefined");
		}
		// c. Set resolvingFunctions.[[Resolve]] to resolve.
		resolvingFunctions["[[Resolve]]"] = resolve;
		// d. Set resolvingFunctions.[[Reject]] to reject.
		resolvingFunctions["[[Reject]]"] = reject;
		// e. Return undefined.
	};
	// 6. Let promise be ? Construct(C, « executor »).
	var promise = Construct(C, [executor]);
	// 7. If IsCallable(resolvingFunctions.[[Resolve]]) is false, throw a TypeError exception.
	if (IsCallable(resolvingFunctions["[[Resolve]]"]) === false) {
		throw new TypeError("[[Resolve]] is not callable");
	}
	// 8. If IsCallable(resolvingFunctions.[[Reject]]) is false, throw a TypeError exception.
	if (IsCallable(resolvingFunctions["[[Reject]]"]) === false) {
		throw new TypeError("[[Reject]] is not callable");
	}
	// 9. Return the PromiseCapability Record { [[Promise]]: promise, [[Resolve]]: resolvingFunctions.[[Resolve]], [[Reject]]: resolvingFunctions.[[Reject]] }.
	return {
		"[[Promise]]": promise,
		"[[Resolve]]": resolvingFunctions["[[Resolve]]"],
		"[[Reject]]": resolvingFunctions["[[Reject]]"]
	};
}
export default NewPromiseCapability;
