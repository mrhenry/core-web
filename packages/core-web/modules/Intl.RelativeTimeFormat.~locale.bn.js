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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("bn").length
)) {
// Intl.RelativeTimeFormat.~locale.bn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"bn":{"nu":["beng"],"year":{"0":"এই বছর","1":"পরের বছর","future":{"one":"{0} বছরে","other":"{0} বছরে"},"past":{"one":"{0} বছর পূর্বে","other":"{0} বছর পূর্বে"},"-1":"গত বছর"},"year-short":{"0":"এই বছর","1":"পরের বছর","future":{"one":"{0} বছরে","other":"{0} বছরে"},"past":{"one":"{0} বছর পূর্বে","other":"{0} বছর পূর্বে"},"-1":"গত বছর"},"year-narrow":{"0":"এই বছর","1":"পরের বছর","future":{"one":"{0} বছরে","other":"{0} বছরে"},"past":{"one":"{0} বছর পূর্বে","other":"{0} বছর পূর্বে"},"-1":"গত বছর"},"quarter":{"0":"এই ত্রৈমাসিক","1":"পরের ত্রৈমাসিক","future":{"one":"{0} ত্রৈমাসিকে","other":"{0} ত্রৈমাসিকে"},"past":{"one":"{0} ত্রৈমাসিক আগে","other":"{0} ত্রৈমাসিক আগে"},"-1":"গত ত্রৈমাসিক"},"quarter-short":{"0":"এই ত্রৈমাসিক","1":"পরের ত্রৈমাসিক","future":{"one":"{0} ত্রৈমাসিকে","other":"{0} ত্রৈমাসিকে"},"past":{"one":"{0} ত্রৈমাসিক আগে","other":"{0} ত্রৈমাসিক আগে"},"-1":"গত ত্রৈমাসিক"},"quarter-narrow":{"0":"এই ত্রৈমাসিক","1":"পরের ত্রৈমাসিক","future":{"one":"{0} ত্রৈমাসিকে","other":"{0} ত্রৈমাসিকে"},"past":{"one":"{0} ত্রৈমাসিক আগে","other":"{0} ত্রৈমাসিক আগে"},"-1":"গত ত্রৈমাসিক"},"month":{"0":"এই মাস","1":"পরের মাস","future":{"one":"{0} মাসে","other":"{0} মাসে"},"past":{"one":"{0} মাস আগে","other":"{0} মাস আগে"},"-1":"গত মাস"},"month-short":{"0":"এই মাস","1":"পরের মাস","future":{"one":"{0} মাসে","other":"{0} মাসে"},"past":{"one":"{0} মাস আগে","other":"{0} মাস আগে"},"-1":"গত মাস"},"month-narrow":{"0":"এই মাস","1":"পরের মাস","future":{"one":"{0} মাসে","other":"{0} মাসে"},"past":{"one":"{0} মাস আগে","other":"{0} মাস আগে"},"-1":"গত মাস"},"week":{"0":"এই সপ্তাহ","1":"পরের সপ্তাহ","future":{"one":"{0} সপ্তাহে","other":"{0} সপ্তাহে"},"past":{"one":"{0} সপ্তাহ আগে","other":"{0} সপ্তাহ আগে"},"-1":"গত সপ্তাহ"},"week-short":{"0":"এই সপ্তাহ","1":"পরের সপ্তাহ","future":{"one":"{0} সপ্তাহে","other":"{0} সপ্তাহে"},"past":{"one":"{0} সপ্তাহ আগে","other":"{0} সপ্তাহ আগে"},"-1":"গত সপ্তাহ"},"week-narrow":{"0":"এই সপ্তাহ","1":"পরের সপ্তাহ","future":{"one":"{0} সপ্তাহে","other":"{0} সপ্তাহে"},"past":{"one":"{0} সপ্তাহ আগে","other":"{0} সপ্তাহ আগে"},"-1":"গত সপ্তাহ"},"day":{"0":"আজ","1":"আগামীকাল","2":"আগামী পরশু","future":{"one":"{0} দিনের মধ্যে","other":"{0} দিনের মধ্যে"},"past":{"one":"{0} দিন আগে","other":"{0} দিন আগে"},"-2":"গত পরশু","-1":"গতকাল"},"day-short":{"0":"আজ","1":"আগামীকাল","2":"আগামী পরশু","future":{"one":"{0} দিনের মধ্যে","other":"{0} দিনের মধ্যে"},"past":{"one":"{0} দিন আগে","other":"{0} দিন আগে"},"-2":"গত পরশু","-1":"গতকাল"},"day-narrow":{"0":"আজ","1":"আগামীকাল","2":"আগামী পরশু","future":{"one":"{0} দিনের মধ্যে","other":"{0} দিনের মধ্যে"},"past":{"one":"{0} দিন আগে","other":"{0} দিন আগে"},"-2":"গত পরশু","-1":"গতকাল"},"hour":{"0":"এই ঘণ্টায়","future":{"one":"{0} ঘন্টায়","other":"{0} ঘন্টায়"},"past":{"one":"{0} ঘন্টা আগে","other":"{0} ঘন্টা আগে"}},"hour-short":{"0":"এই ঘণ্টায়","future":{"one":"{0} ঘন্টায়","other":"{0} ঘন্টায়"},"past":{"one":"{0} ঘন্টা আগে","other":"{0} ঘন্টা আগে"}},"hour-narrow":{"0":"এই ঘণ্টায়","future":{"one":"{0} ঘন্টায়","other":"{0} ঘন্টায়"},"past":{"one":"{0} ঘন্টা আগে","other":"{0} ঘন্টা আগে"}},"minute":{"0":"এই মিনিট","future":{"one":"{0} মিনিটে","other":"{0} মিনিটে"},"past":{"one":"{0} মিনিট আগে","other":"{0} মিনিট আগে"}},"minute-short":{"0":"এই মিনিট","future":{"one":"{0} মিনিটে","other":"{0} মিনিটে"},"past":{"one":"{0} মিনিট আগে","other":"{0} মিনিট আগে"}},"minute-narrow":{"0":"এই মিনিট","future":{"one":"{0} মিনিটে","other":"{0} মিনিটে"},"past":{"one":"{0} মিনিট আগে","other":"{0} মিনিট আগে"}},"second":{"0":"এখন","future":{"one":"{0} সেকেন্ডে","other":"{0} সেকেন্ডে"},"past":{"one":"{0} সেকেন্ড পূর্বে","other":"{0} সেকেন্ড পূর্বে"}},"second-short":{"0":"এখন","future":{"one":"{0} সেকেন্ডে","other":"{0} সেকেন্ডে"},"past":{"one":"{0} সেকেন্ড পূর্বে","other":"{0} সেকেন্ড পূর্বে"}},"second-narrow":{"0":"এখন","future":{"one":"{0} সেকেন্ডে","other":"{0} সেকেন্ডে"},"past":{"one":"{0} সেকেন্ড আগে","other":"{0} সেকেন্ড আগে"}}}},"availableLocales":["bn"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
