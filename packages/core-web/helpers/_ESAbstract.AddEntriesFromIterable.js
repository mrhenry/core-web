import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import HasOwnProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "@mrhenry/core-web/helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import HasProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasProperty";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "@mrhenry/core-web/helpers/_ESAbstract.IsConstructor";
import Construct from "@mrhenry/core-web/helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.GetPrototypeFromConstructor";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";

// _ESAbstract.AddEntriesFromIterable
/* global IsCallable, GetIterator, IteratorStep, IteratorValue, IteratorClose, Get, Call, Type */
// eslint-disable-next-line no-unused-vars
var AddEntriesFromIterable = (function() {
  var toString = {}.toString;
  var split = "".split;
  // 23.1.1.2 AddEntriesFromIterable ( target, iterable, adder )
  return function AddEntriesFromIterable(target, iterable, adder) {
    // 1. If IsCallable(adder) is false, throw a TypeError exception.
    if (IsCallable(adder) === false) {
      throw new TypeError("adder is not callable.");
    }
    // 2. Assert: iterable is present, and is neither undefined nor null.
    // 3. Let iteratorRecord be ? GetIterator(iterable).
    var iteratorRecord = GetIterator(iterable);
    // 4. Repeat,
    // eslint-disable-next-line no-constant-condition
    while (true) {
      // a. Let next be ? IteratorStep(iteratorRecord).
      var next = IteratorStep(iteratorRecord);
      // b. If next is false, return target.
      if (next === false) {
        return target;
      }
      // c. Let nextItem be ? IteratorValue(next).
      var nextItem = IteratorValue(next);
      // d. If Type(nextItem) is not Object, then
      if (Type(nextItem) !== "object") {
        // i. Let error be ThrowCompletion(a newly created TypeError object).
        var error = new TypeError("nextItem is not an object");
        // ii. Return ? IteratorClose(iteratorRecord, error).
        IteratorClose(iteratorRecord, error);
        throw error;
      }
      // Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
      nextItem =
        (Type(nextItem) === "string" || nextItem instanceof String) &&
        toString.call(nextItem) == "[object String]"
          ? split.call(nextItem, "")
          : nextItem;
      var k;
      try {
        // e. Let k be Get(nextItem, "0").
        k = Get(nextItem, "0");
        // eslint-disable-next-line no-catch-shadow
      } catch (k) {
        // f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
        return IteratorClose(iteratorRecord, k);
      }
      var v;
      try {
        // g. Let v be Get(nextItem, "1").
        v = Get(nextItem, "1");
        // eslint-disable-next-line no-catch-shadow
      } catch (v) {
        // h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
        return IteratorClose(iteratorRecord, v);
      }
      try {
        // i. Let status be Call(adder, target, « k.[[Value]], v.[[Value]] »).
        Call(adder, target, [k, v]);
        // eslint-disable-next-line no-catch-shadow
      } catch (status) {
        // j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
        return IteratorClose(iteratorRecord, status);
      }
    }
  };
})();
export default AddEntriesFromIterable;
