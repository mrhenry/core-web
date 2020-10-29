import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import HasProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasProperty";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "@mrhenry/core-web/helpers/_ESAbstract.IsConstructor";
import Construct from "@mrhenry/core-web/helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.GetPrototypeFromConstructor";
import HasOwnProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "@mrhenry/core-web/helpers/_ESAbstract.ToPropertyKey";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
(function(undefined) {
if (!("queueMicrotask"in self
)) {
// queueMicrotask
/* global Promise */
self.queueMicrotask = function queueMicrotask(microtask) {
  if (arguments.length < 1) {
    throw new TypeError(
      "queueMicrotask requires at least 1 argument, but only 0 were passed"
    );
  }

  if (typeof microtask != "function") {
    throw new TypeError("Argument 1 of queueMicrotask is not callable.");
  }

  Promise.resolve()
    .then(microtask)["catch"](function(e) {

      // TODO: implement a ErrorEvent polyfill and use that instead
      // new ErrorEvent("error", {
      //   message: e.message,
      //   filename: e.filename,
      //   lineno: e.lineno,
      //   colno: e.colno,
      //   error: e,
      //   bubbles: true,
      //   cancelable: true,
      //   composed: false
      // })

      var event = new Event('error', {
        cancelable: true,
        bubbles: true,
        composed: false
      });
      event.message = e.message;
      event.filename = e.filename
      event.lineno = e.lineno;
      event.error = e;

      self.dispatchEvent(
        event
      );


    
    });
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
