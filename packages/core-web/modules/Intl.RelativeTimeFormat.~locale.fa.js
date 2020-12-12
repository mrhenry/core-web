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
import CreateIterResultObject from "@mrhenry/core-web/helpers/_ESAbstract.CreateIterResultObject";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("fa").length
)) {
// Intl.RelativeTimeFormat.~locale.fa
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["arabext"],"year":{"0":"امسال","1":"سال آینده","future":{"one":"{0} سال بعد","other":"{0} سال بعد"},"past":{"one":"{0} سال پیش","other":"{0} سال پیش"},"-1":"سال گذشته"},"year-short":{"0":"امسال","1":"سال آینده","future":{"one":"{0} سال بعد","other":"{0} سال بعد"},"past":{"one":"{0} سال پیش","other":"{0} سال پیش"},"-1":"سال گذشته"},"year-narrow":{"0":"امسال","1":"سال آینده","future":{"one":"{0} سال بعد","other":"{0} سال بعد"},"past":{"one":"{0} سال پیش","other":"{0} سال پیش"},"-1":"سال گذشته"},"quarter":{"0":"سه‌ماههٔ کنونی","1":"سه‌ماههٔ آینده","future":{"one":"{0} سه‌ماههٔ بعد","other":"{0} سه‌ماههٔ بعد"},"past":{"one":"{0} سه‌ماههٔ پیش","other":"{0} سه‌ماههٔ پیش"},"-1":"سه‌ماههٔ گذشته"},"quarter-short":{"0":"سه‌ماههٔ کنونی","1":"سه‌ماههٔ آینده","future":{"one":"{0} سه‌ماههٔ بعد","other":"{0} سه‌ماههٔ بعد"},"past":{"one":"{0} سه‌ماههٔ پیش","other":"{0} سه‌ماههٔ پیش"},"-1":"سه‌ماههٔ گذشته"},"quarter-narrow":{"0":"سه‌ماههٔ کنونی","1":"سه‌ماههٔ آینده","future":{"one":"{0} سه‌ماههٔ بعد","other":"{0} سه‌ماههٔ بعد"},"past":{"one":"{0} سه‌ماههٔ پیش","other":"{0} سه‌ماههٔ پیش"},"-1":"سه‌ماههٔ گذشته"},"month":{"0":"این ماه","1":"ماه آینده","future":{"one":"{0} ماه بعد","other":"{0} ماه بعد"},"past":{"one":"{0} ماه پیش","other":"{0} ماه پیش"},"-1":"ماه گذشته"},"month-short":{"0":"این ماه","1":"ماه آینده","future":{"one":"{0} ماه بعد","other":"{0} ماه بعد"},"past":{"one":"{0} ماه پیش","other":"{0} ماه پیش"},"-1":"ماه گذشته"},"month-narrow":{"0":"این ماه","1":"ماه آینده","future":{"one":"{0} ماه بعد","other":"{0} ماه بعد"},"past":{"one":"{0} ماه پیش","other":"{0} ماه پیش"},"-1":"ماه گذشته"},"week":{"0":"این هفته","1":"هفتهٔ آینده","future":{"one":"{0} هفته بعد","other":"{0} هفته بعد"},"past":{"one":"{0} هفته پیش","other":"{0} هفته پیش"},"-1":"هفتهٔ گذشته"},"week-short":{"0":"این هفته","1":"هفتهٔ آینده","future":{"one":"{0} هفته بعد","other":"{0} هفته بعد"},"past":{"one":"{0} هفته پیش","other":"{0} هفته پیش"},"-1":"هفتهٔ گذشته"},"week-narrow":{"0":"این هفته","1":"هفتهٔ آینده","future":{"one":"{0} هفته بعد","other":"{0} هفته بعد"},"past":{"one":"{0} هفته پیش","other":"{0} هفته پیش"},"-1":"هفتهٔ گذشته"},"day":{"0":"امروز","1":"فردا","2":"پس‌فردا","future":{"one":"{0} روز بعد","other":"{0} روز بعد"},"past":{"one":"{0} روز پیش","other":"{0} روز پیش"},"-2":"پریروز","-1":"دیروز"},"day-short":{"0":"امروز","1":"فردا","2":"پس‌فردا","future":{"one":"{0} روز بعد","other":"{0} روز بعد"},"past":{"one":"{0} روز پیش","other":"{0} روز پیش"},"-2":"پریروز","-1":"دیروز"},"day-narrow":{"0":"امروز","1":"فردا","2":"پس‌فردا","future":{"one":"{0} روز بعد","other":"{0} روز بعد"},"past":{"one":"{0} روز پیش","other":"{0} روز پیش"},"-2":"پریروز","-1":"دیروز"},"hour":{"0":"همین ساعت","future":{"one":"{0} ساعت بعد","other":"{0} ساعت بعد"},"past":{"one":"{0} ساعت پیش","other":"{0} ساعت پیش"}},"hour-short":{"0":"همین ساعت","future":{"one":"{0} ساعت بعد","other":"{0} ساعت بعد"},"past":{"one":"{0} ساعت پیش","other":"{0} ساعت پیش"}},"hour-narrow":{"0":"همین ساعت","future":{"one":"{0} ساعت بعد","other":"{0} ساعت بعد"},"past":{"one":"{0} ساعت پیش","other":"{0} ساعت پیش"}},"minute":{"0":"همین دقیقه","future":{"one":"{0} دقیقه بعد","other":"{0} دقیقه بعد"},"past":{"one":"{0} دقیقه پیش","other":"{0} دقیقه پیش"}},"minute-short":{"0":"همین دقیقه","future":{"one":"{0} دقیقه بعد","other":"{0} دقیقه بعد"},"past":{"one":"{0} دقیقه پیش","other":"{0} دقیقه پیش"}},"minute-narrow":{"0":"همین دقیقه","future":{"one":"{0} دقیقه بعد","other":"{0} دقیقه بعد"},"past":{"one":"{0} دقیقه پیش","other":"{0} دقیقه پیش"}},"second":{"0":"اکنون","future":{"one":"{0} ثانیه بعد","other":"{0} ثانیه بعد"},"past":{"one":"{0} ثانیه پیش","other":"{0} ثانیه پیش"}},"second-short":{"0":"اکنون","future":{"one":"{0} ثانیه بعد","other":"{0} ثانیه بعد"},"past":{"one":"{0} ثانیه پیش","other":"{0} ثانیه پیش"}},"second-narrow":{"0":"اکنون","future":{"one":"{0} ثانیه بعد","other":"{0} ثانیه بعد"},"past":{"one":"{0} ثانیه پیش","other":"{0} ثانیه پیش"}}},"locale":"fa"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
