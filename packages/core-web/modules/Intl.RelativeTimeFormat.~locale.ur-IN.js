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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ur-IN").length
)) {
// Intl.RelativeTimeFormat.~locale.ur-IN
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ur-IN":{"nu":["arabext"],"year":{"0":"اس سال","1":"اگلے سال","future":{"one":"{0} سال میں","other":"{0} سالوں میں"},"past":{"one":"{0} سال پہلے","other":"{0} سال پہلے"},"-1":"گزشتہ سال"},"year-short":{"0":"اس سال","1":"اگلے سال","future":{"one":"{0} سال میں","other":"{0} سالوں میں"},"past":{"one":"{0} سال پہلے","other":"{0} سالوں پہلے"},"-1":"گزشتہ سال"},"year-narrow":{"0":"اس سال","1":"اگلے سال","future":{"one":"{0} سال میں","other":"{0} سال میں"},"past":{"one":"{0} سال پہلے","other":"{0} سال پہلے"},"-1":"گزشتہ سال"},"quarter":{"0":"اس سہ ماہی","1":"اگلے سہ ماہی","future":{"one":"{0} سہ ماہی میں","other":"{0} سہ ماہی میں"},"past":{"one":"{0} سہ ماہی پہلے","other":"{0} سہ ماہی پہلے"},"-1":"گزشتہ سہ ماہی"},"quarter-short":{"0":"اس سہ ماہی","1":"اگلے سہ ماہی","future":{"one":"{0} سہ ماہی میں","other":"{0} سہ ماہی میں"},"past":{"one":"{0} سہ ماہی قبل","other":"{0} سہ ماہی قبل"},"-1":"گزشتہ سہ ماہی"},"quarter-narrow":{"0":"اس سہ ماہی","1":"اگلے سہ ماہی","future":{"one":"{0} سہ ماہی میں","other":"{0} سہ ماہی میں"},"past":{"one":"{0} سہ ماہی پہلے","other":"{0} سہ ماہی پہلے"},"-1":"گزشتہ سہ ماہی"},"month":{"0":"اس ماہ","1":"اگلے ماہ","future":{"one":"{0} ماہ میں","other":"{0} ماہ میں"},"past":{"one":"{0} ماہ قبل","other":"{0} ماہ قبل"},"-1":"گزشتہ ماہ"},"month-short":{"0":"اس مہینہ","1":"اگلے مہینہ","future":{"one":"{0} ماہ میں","other":"{0} ماہ میں"},"past":{"one":"{0} ماہ قبل","other":"{0} ماہ قبل"},"-1":"پچھلے مہینہ"},"month-narrow":{"0":"اس ماہ","1":"اگلے ماہ","future":{"one":"{0} ماہ میں","other":"{0} ماہ میں"},"past":{"one":"{0} ماہ قبل","other":"{0} ماہ قبل"},"-1":"گزشتہ ماہ"},"week":{"0":"اس ہفتہ","1":"اگلے ہفتہ","future":{"one":"{0} ہفتہ میں","other":"{0} ہفتوں میں"},"past":{"one":"{0} ہفتہ قبل","other":"{0} ہفتے قبل"},"-1":"گزشتہ ہفتہ"},"week-short":{"0":"اس ہفتہ","1":"اگلے ہفتہ","future":{"one":"{0} ہفتے میں","other":"{0} ہفتے میں"},"past":{"one":"{0} ہفتے قبل","other":"{0} ہفتے قبل"},"-1":"پچھلے ہفتہ"},"week-narrow":{"0":"اس ہفتہ","1":"اگلے ہفتہ","future":{"one":"{0} ہفتہ میں","other":"{0} ہفتے میں"},"past":{"one":"{0} ہفتہ قبل","other":"{0} ہفتے قبل"},"-1":"پچھلے ہفتہ"},"day":{"0":"آج","1":"آئندہ کل","2":"آنے والا پرسوں","future":{"one":"{0} دن میں","other":"{0} دنوں میں"},"past":{"one":"{0} دن پہلے","other":"{0} دنوں پہلے"},"-2":"گزشتہ پرسوں","-1":"گزشتہ کل"},"day-short":{"0":"آج","1":"آئندہ کل","2":"آنے والا پرسوں","future":{"one":"{0} دنوں میں","other":"{0} دنوں میں"},"past":{"one":"{0} دن پہلے","other":"{0} دن پہلے"},"-2":"گزشتہ پرسوں","-1":"گزشتہ کل"},"day-narrow":{"0":"آج","1":"آئندہ کل","2":"آنے والا پرسوں","future":{"one":"{0} دن میں","other":"{0} دنوں میں"},"past":{"one":"{0} دن قبل","other":"{0} دن قبل"},"-2":"گزشتہ پرسوں","-1":"گزشتہ کل"},"hour":{"0":"اس گھنٹے","future":{"one":"{0} گھنٹے میں","other":"{0} گھنٹے میں"},"past":{"one":"{0} گھنٹہ پہلے","other":"{0} گھنٹے پہلے"}},"hour-short":{"0":"اس گھنٹے","future":{"one":"{0} گھنٹے میں","other":"{0} گھنٹے میں"},"past":{"one":"{0} گھنٹے قبل","other":"{0} گھنٹے قبل"}},"hour-narrow":{"0":"اس گھنٹے","future":{"one":"{0} گھنٹے میں","other":"{0} گھنٹوں میں"},"past":{"one":"{0} گھنٹہ قبل","other":"{0} گھنٹے قبل"}},"minute":{"0":"اس منٹ","future":{"one":"{0} منٹ میں","other":"{0} منٹ میں"},"past":{"one":"{0} منٹ قبل","other":"{0} منٹ قبل"}},"minute-short":{"0":"اس منٹ","future":{"one":"{0} منٹ میں","other":"{0} منٹ میں"},"past":{"one":"{0} منٹ قبل","other":"{0} منٹ قبل"}},"minute-narrow":{"0":"اس منٹ","future":{"one":"{0} منٹ میں","other":"{0} منٹ میں"},"past":{"one":"{0} منٹ قبل","other":"{0} منٹ قبل"}},"second":{"0":"اب","future":{"one":"{0} سیکنڈ میں","other":"{0} سیکنڈ میں"},"past":{"one":"{0} سیکنڈ قبل","other":"{0} سیکنڈ قبل"}},"second-short":{"0":"اب","future":{"one":"{0} سیکنڈ میں","other":"{0} سیکنڈ میں"},"past":{"one":"{0} سیکنڈ قبل","other":"{0} سیکنڈ قبل"}},"second-narrow":{"0":"اب","future":{"one":"{0} سیکنڈ میں","other":"{0} سیکنڈ میں"},"past":{"one":"{0} سیکنڈ قبل","other":"{0} سیکنڈ قبل"}}}},"availableLocales":["ur-IN"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
