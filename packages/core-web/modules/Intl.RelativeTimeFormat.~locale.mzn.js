import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import IsConstructor from "@mrhenry/core-web/helpers/_ESAbstract.IsConstructor";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import Construct from "@mrhenry/core-web/helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "@mrhenry/core-web/helpers/_ESAbstract.GetPrototypeFromConstructor";
import HasOwnProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "@mrhenry/core-web/helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
import HasProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasProperty";
import ToBoolean from "@mrhenry/core-web/helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("mzn").length
)) {
// Intl.RelativeTimeFormat.~locale.mzn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"mzn":{"nu":["arabext"],"year":{"0":"امسال","1":"سال دیگه","future":{"other":"{0} سال دله"},"past":{"other":"{0} سال پیش"},"-1":"پارسال"},"year-short":{"0":"امسال","1":"سال دیگه","future":{"other":"{0} سال دله"},"past":{"other":"{0} سال پیش"},"-1":"پارسال"},"year-narrow":{"0":"امسال","1":"سال دیگه","future":{"other":"{0} سال دله"},"past":{"other":"{0} سال پیش"},"-1":"پارسال"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"{0} ربع دله"},"past":{"other":"{0} ربع پیش"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"{0} ربع دله"},"past":{"other":"{0} ربع پیش"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"{0} ربع دله"},"past":{"other":"{0} ربع پیش"},"-1":"last quarter"},"month":{"0":"این ماه","1":"ماه ِبعد","future":{"other":"{0} ماه دله"},"past":{"other":"{0} ماه پیش"},"-1":"ماه قبل"},"month-short":{"0":"این ماه","1":"ماه ِبعد","future":{"other":"{0} ماه دله"},"past":{"other":"{0} ماه پیش"},"-1":"ماه قبل"},"month-narrow":{"0":"این ماه","1":"ماه ِبعد","future":{"other":"{0} ماه دله"},"past":{"other":"{0} ماه پیش"},"-1":"ماه قبل"},"week":{"0":"این هفته","1":"بعدی هفته","future":{"other":"{0} هفته دله"},"past":{"other":"{0} هفته پیش"},"-1":"قبلی هفته"},"week-short":{"0":"این هفته","1":"بعدی هفته","future":{"other":"{0} هفته دله"},"past":{"other":"{0} هفته پیش"},"-1":"قبلی هفته"},"week-narrow":{"0":"این هفته","1":"بعدی هفته","future":{"other":"{0} هفته دله"},"past":{"other":"{0} هفته پیش"},"-1":"قبلی هفته"},"day":{"0":"اَمروز","1":"فِردا","future":{"other":"{0} روز دله"},"past":{"other":"{0} روز پیش"},"-1":"دیروز"},"day-short":{"0":"اَمروز","1":"فِردا","future":{"other":"{0} روز دله"},"past":{"other":"{0} روز پیش"},"-1":"دیروز"},"day-narrow":{"0":"اَمروز","1":"فِردا","future":{"other":"{0} روز دله"},"past":{"other":"{0} روز پیش"},"-1":"دیروز"},"hour":{"0":"this hour","future":{"other":"{0} ساعِت دله"},"past":{"other":"{0} ساعِت پیش"}},"hour-short":{"0":"this hour","future":{"other":"{0} ساعت دله"},"past":{"other":"{0} ساعت پیش"}},"hour-narrow":{"0":"this hour","future":{"other":"{0} ساعت دله"},"past":{"other":"{0} ساعت پیش"}},"minute":{"0":"this minute","future":{"other":"{0} دقیقه دله"},"past":{"other":"{0} دَقه پیش"}},"minute-short":{"0":"this minute","future":{"other":"{0} دَقه دله"},"past":{"other":"{0} دَقه پیش"}},"minute-narrow":{"0":"this minute","future":{"other":"{0} دَقه دله"},"past":{"other":"{0} دَقه پیش"}},"second":{"0":"now","future":{"other":"{0} ثانیه دله"},"past":{"other":"{0} ثانیه پیش"}},"second-short":{"0":"now","future":{"other":"{0} ثانیه دله"},"past":{"other":"{0} ثانیه پیش"}},"second-narrow":{"0":"now","future":{"other":"{0} ثانیه دله"},"past":{"other":"{0} ثانیه پیش"}}}},"availableLocales":["mzn"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
