import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ur").length
)) {
// Intl.RelativeTimeFormat.~locale.ur
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"اس سال","1":"اگلے سال","future":{"one":"{0} سال میں","other":"{0} سال میں"},"past":{"one":"{0} سال پہلے","other":"{0} سال پہلے"},"-1":"گزشتہ سال"},"year-short":{"0":"اس سال","1":"اگلے سال","future":{"one":"{0} سال میں","other":"{0} سال میں"},"past":{"one":"{0} سال پہلے","other":"{0} سال پہلے"},"-1":"گزشتہ سال"},"year-narrow":{"0":"اس سال","1":"اگلے سال","future":{"one":"{0} سال میں","other":"{0} سال میں"},"past":{"one":"{0} سال پہلے","other":"{0} سال پہلے"},"-1":"گزشتہ سال"},"quarter":{"0":"اس سہ ماہی","1":"اگلے سہ ماہی","future":{"one":"{0} سہ ماہی میں","other":"{0} سہ ماہی میں"},"past":{"one":"{0} سہ ماہی پہلے","other":"{0} سہ ماہی پہلے"},"-1":"گزشتہ سہ ماہی"},"quarter-short":{"0":"اس سہ ماہی","1":"اگلے سہ ماہی","future":{"one":"{0} سہ ماہی میں","other":"{0} سہ ماہی میں"},"past":{"one":"{0} سہ ماہی قبل","other":"{0} سہ ماہی قبل"},"-1":"گزشتہ سہ ماہی"},"quarter-narrow":{"0":"اس سہ ماہی","1":"اگلے سہ ماہی","future":{"one":"{0} سہ ماہی میں","other":"{0} سہ ماہی میں"},"past":{"one":"{0} سہ ماہی پہلے","other":"{0} سہ ماہی پہلے"},"-1":"گزشتہ سہ ماہی"},"month":{"0":"اس ماہ","1":"اگلا مہینہ","future":{"one":"{0} مہینہ میں","other":"{0} مہینے میں"},"past":{"one":"{0} مہینہ پہلے","other":"{0} مہینے پہلے"},"-1":"گزشتہ ماہ"},"month-short":{"0":"اس مہینہ","1":"اگلے مہینہ","future":{"one":"{0} ماہ میں","other":"{0} ماہ میں"},"past":{"one":"{0} ماہ قبل","other":"{0} ماہ قبل"},"-1":"پچھلے مہینہ"},"month-narrow":{"0":"اس ماہ","1":"اگلے ماہ","future":{"one":"{0} ماہ میں","other":"{0} ماہ میں"},"past":{"one":"{0} ماہ پہلے","other":"{0} ماہ پہلے"},"-1":"گزشتہ ماہ"},"week":{"0":"اس ہفتہ","1":"اگلے ہفتے","future":{"one":"{0} ہفتہ میں","other":"{0} ہفتے میں"},"past":{"one":"{0} ہفتہ پہلے","other":"{0} ہفتے پہلے"},"-1":"گزشتہ ہفتے"},"week-short":{"0":"اس ہفتہ","1":"اگلے ہفتہ","future":{"one":"{0} ہفتے میں","other":"{0} ہفتے میں"},"past":{"one":"{0} ہفتے پہلے","other":"{0} ہفتے پہلے"},"-1":"پچھلے ہفتہ"},"week-narrow":{"0":"اس ہفتہ","1":"اگلے ہفتہ","future":{"one":"{0} ہفتہ میں","other":"{0} ہفتے میں"},"past":{"one":"{0} ہفتہ پہلے","other":"{0} ہفتے پہلے"},"-1":"پچھلے ہفتہ"},"day":{"0":"آج","1":"آئندہ کل","2":"آنے والا پرسوں","future":{"one":"{0} دن میں","other":"{0} دنوں میں"},"past":{"one":"{0} دن پہلے","other":"{0} دنوں پہلے"},"-2":"گزشتہ پرسوں","-1":"گزشتہ کل"},"day-short":{"0":"آج","1":"آئندہ کل","2":"آنے والا پرسوں","future":{"one":"{0} دن میں","other":"{0} دنوں میں"},"past":{"one":"{0} دن پہلے","other":"{0} دن پہلے"},"-2":"گزشتہ پرسوں","-1":"گزشتہ کل"},"day-narrow":{"0":"آج","1":"آئندہ کل","2":"آنے والا پرسوں","future":{"one":"{0} دن میں","other":"{0} دنوں میں"},"past":{"one":"{0} دن پہلے","other":"{0} دن پہلے"},"-2":"گزشتہ پرسوں","-1":"گزشتہ کل"},"hour":{"0":"اس گھنٹے","future":{"one":"{0} گھنٹے میں","other":"{0} گھنٹے میں"},"past":{"one":"{0} گھنٹہ پہلے","other":"{0} گھنٹے پہلے"}},"hour-short":{"0":"اس گھنٹے","future":{"one":"{0} گھنٹے میں","other":"{0} گھنٹے میں"},"past":{"one":"{0} گھنٹے پہلے","other":"{0} گھنٹے پہلے"}},"hour-narrow":{"0":"اس گھنٹے","future":{"one":"{0} گھنٹے میں","other":"{0} گھنٹوں میں"},"past":{"one":"{0} گھنٹہ پہلے","other":"{0} گھنٹے پہلے"}},"minute":{"0":"اس منٹ","future":{"one":"{0} منٹ میں","other":"{0} منٹ میں"},"past":{"one":"{0} منٹ پہلے","other":"{0} منٹ پہلے"}},"minute-short":{"0":"اس منٹ","future":{"one":"{0} منٹ میں","other":"{0} منٹ میں"},"past":{"one":"{0} منٹ پہلے","other":"{0} منٹ پہلے"}},"minute-narrow":{"0":"اس منٹ","future":{"one":"{0} منٹ میں","other":"{0} منٹ میں"},"past":{"one":"{0} منٹ پہلے","other":"{0} منٹ پہلے"}},"second":{"0":"اب","future":{"one":"{0} سیکنڈ میں","other":"{0} سیکنڈ میں"},"past":{"one":"{0} سیکنڈ پہلے","other":"{0} سیکنڈ پہلے"}},"second-short":{"0":"اب","future":{"one":"{0} سیکنڈ میں","other":"{0} سیکنڈ میں"},"past":{"one":"{0} سیکنڈ پہلے","other":"{0} سیکنڈ پہلے"}},"second-narrow":{"0":"اب","future":{"one":"{0} سیکنڈ میں","other":"{0} سیکنڈ میں"},"past":{"one":"{0} سیکنڈ پہلے","other":"{0} سیکنڈ پہلے"}}},"locale":"ur"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
