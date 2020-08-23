import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import Get from "../helpers/_ESAbstract.Get";
import Type from "../helpers/_ESAbstract.Type";
import ToObject from "../helpers/_ESAbstract.ToObject";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import Construct from "../helpers/_ESAbstract.Construct";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
import CreateIterResultObject from "../helpers/_ESAbstract.CreateIterResultObject";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("mzn").length
)) {
// Intl.RelativeTimeFormat.~locale.mzn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"mzn":{"nu":["arabext"],"year":{"0":"امسال","1":"سال دیگه","future":{"other":"{0} سال دله"},"past":{"other":"{0} سال پیش"},"-1":"پارسال"},"year-short":{"0":"امسال","1":"سال دیگه","future":{"other":"{0} سال دله"},"past":{"other":"{0} سال پیش"},"-1":"پارسال"},"year-narrow":{"0":"امسال","1":"سال دیگه","future":{"other":"{0} سال دله"},"past":{"other":"{0} سال پیش"},"-1":"پارسال"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"{0} ربع دله"},"past":{"other":"{0} ربع پیش"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"{0} ربع دله"},"past":{"other":"{0} ربع پیش"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"{0} ربع دله"},"past":{"other":"{0} ربع پیش"},"-1":"last quarter"},"month":{"0":"این ماه","1":"ماه ِبعد","future":{"other":"{0} ماه دله"},"past":{"other":"{0} ماه پیش"},"-1":"ماه قبل"},"month-short":{"0":"این ماه","1":"ماه ِبعد","future":{"other":"{0} ماه دله"},"past":{"other":"{0} ماه پیش"},"-1":"ماه قبل"},"month-narrow":{"0":"این ماه","1":"ماه ِبعد","future":{"other":"{0} ماه دله"},"past":{"other":"{0} ماه پیش"},"-1":"ماه قبل"},"week":{"0":"این هفته","1":"بعدی هفته","future":{"other":"{0} هفته دله"},"past":{"other":"{0} هفته پیش"},"-1":"قبلی هفته"},"week-short":{"0":"این هفته","1":"بعدی هفته","future":{"other":"{0} هفته دله"},"past":{"other":"{0} هفته پیش"},"-1":"قبلی هفته"},"week-narrow":{"0":"این هفته","1":"بعدی هفته","future":{"other":"{0} هفته دله"},"past":{"other":"{0} هفته پیش"},"-1":"قبلی هفته"},"day":{"0":"اَمروز","1":"فِردا","future":{"other":"{0} روز دله"},"past":{"other":"{0} روز پیش"},"-1":"دیروز"},"day-short":{"0":"اَمروز","1":"فِردا","future":{"other":"{0} روز دله"},"past":{"other":"{0} روز پیش"},"-1":"دیروز"},"day-narrow":{"0":"اَمروز","1":"فِردا","future":{"other":"{0} روز دله"},"past":{"other":"{0} روز پیش"},"-1":"دیروز"},"hour":{"0":"this hour","future":{"other":"{0} ساعِت دله"},"past":{"other":"{0} ساعِت پیش"}},"hour-short":{"0":"this hour","future":{"other":"{0} ساعت دله"},"past":{"other":"{0} ساعت پیش"}},"hour-narrow":{"0":"this hour","future":{"other":"{0} ساعت دله"},"past":{"other":"{0} ساعت پیش"}},"minute":{"0":"this minute","future":{"other":"{0} دقیقه دله"},"past":{"other":"{0} دَقه پیش"}},"minute-short":{"0":"this minute","future":{"other":"{0} دَقه دله"},"past":{"other":"{0} دَقه پیش"}},"minute-narrow":{"0":"this minute","future":{"other":"{0} دَقه دله"},"past":{"other":"{0} دَقه پیش"}},"second":{"0":"now","future":{"other":"{0} ثانیه دله"},"past":{"other":"{0} ثانیه پیش"}},"second-short":{"0":"now","future":{"other":"{0} ثانیه دله"},"past":{"other":"{0} ثانیه پیش"}},"second-narrow":{"0":"now","future":{"other":"{0} ثانیه دله"},"past":{"other":"{0} ثانیه پیش"}}}},"availableLocales":["mzn"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
