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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sd").length
)) {
// Intl.RelativeTimeFormat.~locale.sd
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["arab"],"year":{"0":"پويون سال","1":"پويون سال","future":{"one":"{0} سالن ۾","other":"{0} سالن ۾"},"past":{"one":"{0} سال پهرين","other":"{0} سال پهرين"},"-1":"پويون سال"},"year-short":{"0":"پويون سال","1":"پويون سال","future":{"one":"{0} سالن ۾","other":"{0} سالن ۾"},"past":{"one":"{0} سال پهرين","other":"{0} سال پهرين"},"-1":"پويون سال"},"year-narrow":{"0":"هن سال","1":"اڳيئن سال","future":{"one":"{0} سالن ۾","other":"{0} سالن ۾"},"past":{"one":"{0} سال پهرين","other":"{0} سال پهرين"},"-1":"پوئين سال"},"quarter":{"0":"هن ٽي ماهي","1":"اڳين ٽي ماهي","future":{"one":"{0} ٽي ماهي ۾","other":"{0} ٽي ماهي ۾"},"past":{"one":"{0} ٽي ماهي پهرين","other":"{0} ٽي ماهي پهرين"},"-1":"پوئين ٽي ماهي"},"quarter-short":{"0":"هن ٽي ماهي","1":"اڳين ٽي ماهي","future":{"one":"{0} ٽي ماهي ۾","other":"{0} ٽي ماهي ۾"},"past":{"one":"{0} ٽي ماهي پهرين","other":"{0} ٽي ماهي پهرين"},"-1":"پوئين ٽي ماهي"},"quarter-narrow":{"0":"هن ٽي ماهي","1":"اڳين ٽي ماهي","future":{"one":"{0} ٽي ماهي ۾","other":"{0} ٽي ماهي ۾"},"past":{"one":"{0} ٽي ماهي پهرين","other":"{0} ٽي ماهي پهرين"},"-1":"پوئين ٽي ماهي"},"month":{"0":"هن مهيني","1":"اڳين مهيني","future":{"one":"{0} مهينن ۾","other":"{0} مهينن ۾"},"past":{"one":"{0} مهينا پهرين","other":"{0} مهينا پهرين"},"-1":"پوئين مهيني"},"month-short":{"0":"هن مهيني","1":"اڳين مهيني","future":{"one":"{0} مهينن ۾","other":"{0} مهينن ۾"},"past":{"one":"{0} مهينا پهرين","other":"{0} مهينا پهرين"},"-1":"پوئين مهيني"},"month-narrow":{"0":"هن مهيني","1":"اڳين مهيني","future":{"one":"{0} مهينن ۾","other":"{0} مهينن ۾"},"past":{"one":"{0} مهينا پهرين","other":"{0} مهينا پهرين"},"-1":"پوئين مهيني"},"week":{"0":"هن هفتي","1":"اڳين هفتي","future":{"one":"{0} هفتن ۾","other":"{0} هفتن ۾"},"past":{"one":"{0} هفتا پهرين","other":"{0} هفتا پهرين"},"-1":"پوئين هفتي"},"week-short":{"0":"هن هفتي","1":"اڳين هفتي","future":{"one":"{0} هفتن ۾","other":"{0} هفتن ۾"},"past":{"one":"{0} هفتا پهرين","other":"{0} هفتا پهرين"},"-1":"پوئين هفتي"},"week-narrow":{"0":"هن هفتي","1":"اڳين هفتي","future":{"one":"{0} هفتن ۾","other":"{0} هفتن ۾"},"past":{"one":"{0} هفتا پهرين","other":"{0} هفتا پهرين"},"-1":"پوئين هفتي"},"day":{"0":"اڄ","1":"سڀاڻي","future":{"one":"{0} ڏينهن ۾","other":"{0} ڏينهن ۾"},"past":{"one":"{0} ڏينهن پهرين","other":"{0} ڏينهن پهرين"},"-1":"ڪل"},"day-short":{"0":"اڄ","1":"سڀاڻي","future":{"one":"{0} ڏينهن ۾","other":"{0} ڏينهن ۾"},"past":{"one":"{0} ڏينهن پهرين","other":"{0} ڏينهن پهرين"},"-1":"ڪل"},"day-narrow":{"0":"اڄ","1":"سڀاڻي","future":{"one":"{0} ڏينهن ۾","other":"{0} ڏينهن ۾"},"past":{"one":"{0} ڏينهن پهرين","other":"{0} ڏينهن پهرين"},"-1":"ڪل"},"hour":{"0":"هن ڪلڪ","future":{"one":"{0} ڪلاڪ ۾","other":"{0} ڪلاڪ ۾"},"past":{"one":"{0} ڪلاڪ پهرين","other":"{0} ڪلاڪ پهرين"}},"hour-short":{"0":"هن ڪلڪ","future":{"one":"{0} ڪلاڪ ۾","other":"{0} ڪلاڪ ۾"},"past":{"one":"{0} ڪلاڪ پهرين","other":"{0} ڪلاڪ پهرين"}},"hour-narrow":{"0":"هن ڪلڪ","future":{"one":"{0} ڪلاڪ ۾","other":"{0} ڪلاڪ ۾"},"past":{"one":"{0} ڪلاڪ پهرين","other":"{0} ڪلاڪ پهرين"}},"minute":{"0":"هن منٽ","future":{"one":"{0} منٽن ۾","other":"+{0} min"},"past":{"one":"{0} منٽ پهرين","other":"{0} منٽ پهرين"}},"minute-short":{"0":"هن منٽ","future":{"one":"{0} منٽن ۾","other":"{0} منٽن ۾"},"past":{"one":"{0} منٽ پهرين","other":"{0} منٽ پهرين"}},"minute-narrow":{"0":"هن منٽ","future":{"one":"{0} منٽن ۾","other":"{0} منٽن ۾"},"past":{"one":"{0} منٽ پهرين","other":"{0} منٽ پهرين"}},"second":{"0":"هاڻي","future":{"one":"{0} سيڪنڊن ۾","other":"{0} سيڪنڊن ۾"},"past":{"one":"{0} سيڪنڊ پهرين","other":"{0} سيڪنڊ پهرين"}},"second-short":{"0":"هاڻي","future":{"one":"{0} سيڪنڊن ۾","other":"{0} سيڪنڊن ۾"},"past":{"one":"{0} سيڪنڊ پهرين","other":"{0} سيڪنڊ پهرين"}},"second-narrow":{"0":"هاڻي","future":{"one":"{0} سيڪنڊن ۾","other":"{0} سيڪنڊن ۾"},"past":{"one":"{0} سيڪنڊ پهرين","other":"{0} سيڪنڊ پهرين"}}},"locale":"sd"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
