import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ToObject from "../helpers/_ESAbstract.ToObject";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import Get from "../helpers/_ESAbstract.Get";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import Type from "../helpers/_ESAbstract.Type";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import Construct from "../helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.ListFormat&&Intl.ListFormat.supportedLocalesOf&&1===Intl.ListFormat.supportedLocalesOf("lv").length
)) {
// Intl.ListFormat.~locale.lv
/* @generated */	
// prettier-ignore
if (Intl.ListFormat && typeof Intl.ListFormat.__addLocaleData === 'function') {
  Intl.ListFormat.__addLocaleData({"data":{"lv":{"conjunction":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} un {1}","pair":"{0} un {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} un {1}","pair":"{0} un {1}"},"narrow":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} un {1}","pair":"{0} un {1}"}},"disjunction":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} vai {1}","pair":"{0} vai {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} vai {1}","pair":"{0} vai {1}"},"narrow":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} vai {1}","pair":"{0} vai {1}"}},"unit":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} un {1}","pair":"{0} un {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} un {1}","pair":"{0} un {1}"},"narrow":{"start":"{0} {1}","middle":"{0} {1}","end":"{0} {1}","pair":"{0} {1}"}}}},"availableLocales":["lv"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
