import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import ToObject from "../helpers/_ESAbstract.ToObject";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import Get from "../helpers/_ESAbstract.Get";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import Call from "../helpers/_ESAbstract.Call";
import ToString from "../helpers/_ESAbstract.ToString";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import Type from "../helpers/_ESAbstract.Type";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import Construct from "../helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
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
