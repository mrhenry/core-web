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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sd").length
)) {
// Intl.RelativeTimeFormat.~locale.sd
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"sd":{"nu":["arab"],"year":{"0":"پويون سال","1":"پويون سال","future":{"one":"{0} سالن ۾","other":"{0} سالن ۾"},"past":{"one":"{0} سال پهرين","other":"{0} سال پهرين"},"-1":"پويون سال"},"year-short":{"0":"پويون سال","1":"پويون سال","future":{"one":"{0} سالن ۾","other":"{0} سالن ۾"},"past":{"one":"{0} سال پهرين","other":"{0} سال پهرين"},"-1":"پويون سال"},"year-narrow":{"0":"هن سال","1":"اڳيئن سال","future":{"one":"{0} سالن ۾","other":"{0} سالن ۾"},"past":{"one":"{0} سال پهرين","other":"{0} سال پهرين"},"-1":"پوئين سال"},"quarter":{"0":"هن ٽي ماهي","1":"اڳين ٽي ماهي","future":{"one":"{0} ٽي ماهي ۾","other":"{0} ٽي ماهي ۾"},"past":{"one":"{0} ٽي ماهي پهرين","other":"{0} ٽي ماهي پهرين"},"-1":"پوئين ٽي ماهي"},"quarter-short":{"0":"هن ٽي ماهي","1":"اڳين ٽي ماهي","future":{"one":"{0} ٽي ماهي ۾","other":"{0} ٽي ماهي ۾"},"past":{"one":"{0} ٽي ماهي پهرين","other":"{0} ٽي ماهي پهرين"},"-1":"پوئين ٽي ماهي"},"quarter-narrow":{"0":"هن ٽي ماهي","1":"اڳين ٽي ماهي","future":{"one":"{0} ٽي ماهي ۾","other":"{0} ٽي ماهي ۾"},"past":{"one":"{0} ٽي ماهي پهرين","other":"{0} ٽي ماهي پهرين"},"-1":"پوئين ٽي ماهي"},"month":{"0":"هن مهيني","1":"اڳين مهيني","future":{"one":"{0} مهينن ۾","other":"{0} مهينن ۾"},"past":{"one":"{0} مهينا پهرين","other":"{0} مهينا پهرين"},"-1":"پوئين مهيني"},"month-short":{"0":"هن مهيني","1":"اڳين مهيني","future":{"one":"{0} مهينن ۾","other":"{0} مهينن ۾"},"past":{"one":"{0} مهينا پهرين","other":"{0} مهينا پهرين"},"-1":"پوئين مهيني"},"month-narrow":{"0":"هن مهيني","1":"اڳين مهيني","future":{"one":"{0} مهينن ۾","other":"{0} مهينن ۾"},"past":{"one":"{0} مهينا پهرين","other":"{0} مهينا پهرين"},"-1":"پوئين مهيني"},"week":{"0":"هن هفتي","1":"اڳين هفتي","future":{"one":"{0} هفتن ۾","other":"{0} هفتن ۾"},"past":{"one":"{0} هفتا پهرين","other":"{0} هفتا پهرين"},"-1":"پوئين هفتي"},"week-short":{"0":"هن هفتي","1":"اڳين هفتي","future":{"one":"{0} هفتن ۾","other":"{0} هفتن ۾"},"past":{"one":"{0} هفتا پهرين","other":"{0} هفتا پهرين"},"-1":"پوئين هفتي"},"week-narrow":{"0":"هن هفتي","1":"اڳين هفتي","future":{"one":"{0} هفتن ۾","other":"{0} هفتن ۾"},"past":{"one":"{0} هفتا پهرين","other":"{0} هفتا پهرين"},"-1":"پوئين هفتي"},"day":{"0":"اڄ","1":"سڀاڻي","future":{"one":"{0} ڏينهن ۾","other":"{0} ڏينهن ۾"},"past":{"one":"{0} ڏينهن پهرين","other":"{0} ڏينهن پهرين"},"-1":"ڪل"},"day-short":{"0":"اڄ","1":"سڀاڻي","future":{"one":"{0} ڏينهن ۾","other":"{0} ڏينهن ۾"},"past":{"one":"{0} ڏينهن پهرين","other":"{0} ڏينهن پهرين"},"-1":"ڪل"},"day-narrow":{"0":"اڄ","1":"سڀاڻي","future":{"one":"{0} ڏينهن ۾","other":"{0} ڏينهن ۾"},"past":{"one":"{0} ڏينهن پهرين","other":"{0} ڏينهن پهرين"},"-1":"ڪل"},"hour":{"0":"هن ڪلڪ","future":{"one":"{0} ڪلاڪ ۾","other":"{0} ڪلاڪ ۾"},"past":{"one":"{0} ڪلاڪ پهرين","other":"{0} ڪلاڪ پهرين"}},"hour-short":{"0":"هن ڪلڪ","future":{"one":"{0} ڪلاڪ ۾","other":"{0} ڪلاڪ ۾"},"past":{"one":"{0} ڪلاڪ پهرين","other":"{0} ڪلاڪ پهرين"}},"hour-narrow":{"0":"هن ڪلڪ","future":{"one":"{0} ڪلاڪ ۾","other":"{0} ڪلاڪ ۾"},"past":{"one":"{0} ڪلاڪ پهرين","other":"{0} ڪلاڪ پهرين"}},"minute":{"0":"هن منٽ","future":{"one":"{0} منٽن ۾","other":"+{0} min"},"past":{"one":"{0} منٽ پهرين","other":"{0} منٽ پهرين"}},"minute-short":{"0":"هن منٽ","future":{"one":"{0} منٽن ۾","other":"{0} منٽن ۾"},"past":{"one":"{0} منٽ پهرين","other":"{0} منٽ پهرين"}},"minute-narrow":{"0":"هن منٽ","future":{"one":"{0} منٽن ۾","other":"{0} منٽن ۾"},"past":{"one":"{0} منٽ پهرين","other":"{0} منٽ پهرين"}},"second":{"0":"هاڻي","future":{"one":"{0} سيڪنڊن ۾","other":"{0} سيڪنڊن ۾"},"past":{"one":"{0} سيڪنڊ پهرين","other":"{0} سيڪنڊ پهرين"}},"second-short":{"0":"هاڻي","future":{"one":"{0} سيڪنڊن ۾","other":"{0} سيڪنڊن ۾"},"past":{"one":"{0} سيڪنڊ پهرين","other":"{0} سيڪنڊ پهرين"}},"second-narrow":{"0":"هاڻي","future":{"one":"{0} سيڪنڊن ۾","other":"{0} سيڪنڊن ۾"},"past":{"one":"{0} سيڪنڊ پهرين","other":"{0} سيڪنڊ پهرين"}}}},"availableLocales":["sd"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
