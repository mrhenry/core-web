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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("bn").length
)) {
// Intl.RelativeTimeFormat.~locale.bn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"bn":{"nu":["beng"],"year":{"0":"এই বছর","1":"পরের বছর","future":{"one":"{0} বছরে","other":"{0} বছরে"},"past":{"one":"{0} বছর পূর্বে","other":"{0} বছর পূর্বে"},"-1":"গত বছর"},"year-short":{"0":"এই বছর","1":"পরের বছর","future":{"one":"{0} বছরে","other":"{0} বছরে"},"past":{"one":"{0} বছর পূর্বে","other":"{0} বছর পূর্বে"},"-1":"গত বছর"},"year-narrow":{"0":"এই বছর","1":"পরের বছর","future":{"one":"{0} বছরে","other":"{0} বছরে"},"past":{"one":"{0} বছর পূর্বে","other":"{0} বছর পূর্বে"},"-1":"গত বছর"},"quarter":{"0":"এই ত্রৈমাসিক","1":"পরের ত্রৈমাসিক","future":{"one":"{0} ত্রৈমাসিকে","other":"{0} ত্রৈমাসিকে"},"past":{"one":"{0} ত্রৈমাসিক আগে","other":"{0} ত্রৈমাসিক আগে"},"-1":"গত ত্রৈমাসিক"},"quarter-short":{"0":"এই ত্রৈমাসিক","1":"পরের ত্রৈমাসিক","future":{"one":"{0} ত্রৈমাসিকে","other":"{0} ত্রৈমাসিকে"},"past":{"one":"{0} ত্রৈমাসিক আগে","other":"{0} ত্রৈমাসিক আগে"},"-1":"গত ত্রৈমাসিক"},"quarter-narrow":{"0":"এই ত্রৈমাসিক","1":"পরের ত্রৈমাসিক","future":{"one":"{0} ত্রৈমাসিকে","other":"{0} ত্রৈমাসিকে"},"past":{"one":"{0} ত্রৈমাসিক আগে","other":"{0} ত্রৈমাসিক আগে"},"-1":"গত ত্রৈমাসিক"},"month":{"0":"এই মাস","1":"পরের মাস","future":{"one":"{0} মাসে","other":"{0} মাসে"},"past":{"one":"{0} মাস আগে","other":"{0} মাস আগে"},"-1":"গত মাস"},"month-short":{"0":"এই মাস","1":"পরের মাস","future":{"one":"{0} মাসে","other":"{0} মাসে"},"past":{"one":"{0} মাস আগে","other":"{0} মাস আগে"},"-1":"গত মাস"},"month-narrow":{"0":"এই মাস","1":"পরের মাস","future":{"one":"{0} মাসে","other":"{0} মাসে"},"past":{"one":"{0} মাস আগে","other":"{0} মাস আগে"},"-1":"গত মাস"},"week":{"0":"এই সপ্তাহ","1":"পরের সপ্তাহ","future":{"one":"{0} সপ্তাহে","other":"{0} সপ্তাহে"},"past":{"one":"{0} সপ্তাহ আগে","other":"{0} সপ্তাহ আগে"},"-1":"গত সপ্তাহ"},"week-short":{"0":"এই সপ্তাহ","1":"পরের সপ্তাহ","future":{"one":"{0} সপ্তাহে","other":"{0} সপ্তাহে"},"past":{"one":"{0} সপ্তাহ আগে","other":"{0} সপ্তাহ আগে"},"-1":"গত সপ্তাহ"},"week-narrow":{"0":"এই সপ্তাহ","1":"পরের সপ্তাহ","future":{"one":"{0} সপ্তাহে","other":"{0} সপ্তাহে"},"past":{"one":"{0} সপ্তাহ আগে","other":"{0} সপ্তাহ আগে"},"-1":"গত সপ্তাহ"},"day":{"0":"আজ","1":"আগামীকাল","2":"আগামী পরশু","future":{"one":"{0} দিনের মধ্যে","other":"{0} দিনের মধ্যে"},"past":{"one":"{0} দিন আগে","other":"{0} দিন আগে"},"-2":"গত পরশু","-1":"গতকাল"},"day-short":{"0":"আজ","1":"আগামীকাল","2":"আগামী পরশু","future":{"one":"{0} দিনের মধ্যে","other":"{0} দিনের মধ্যে"},"past":{"one":"{0} দিন আগে","other":"{0} দিন আগে"},"-2":"গত পরশু","-1":"গতকাল"},"day-narrow":{"0":"আজ","1":"আগামীকাল","2":"আগামী পরশু","future":{"one":"{0} দিনের মধ্যে","other":"{0} দিনের মধ্যে"},"past":{"one":"{0} দিন আগে","other":"{0} দিন আগে"},"-2":"গত পরশু","-1":"গতকাল"},"hour":{"0":"এই ঘণ্টায়","future":{"one":"{0} ঘন্টায়","other":"{0} ঘন্টায়"},"past":{"one":"{0} ঘন্টা আগে","other":"{0} ঘন্টা আগে"}},"hour-short":{"0":"এই ঘণ্টায়","future":{"one":"{0} ঘন্টায়","other":"{0} ঘন্টায়"},"past":{"one":"{0} ঘন্টা আগে","other":"{0} ঘন্টা আগে"}},"hour-narrow":{"0":"এই ঘণ্টায়","future":{"one":"{0} ঘন্টায়","other":"{0} ঘন্টায়"},"past":{"one":"{0} ঘন্টা আগে","other":"{0} ঘন্টা আগে"}},"minute":{"0":"এই মিনিট","future":{"one":"{0} মিনিটে","other":"{0} মিনিটে"},"past":{"one":"{0} মিনিট আগে","other":"{0} মিনিট আগে"}},"minute-short":{"0":"এই মিনিট","future":{"one":"{0} মিনিটে","other":"{0} মিনিটে"},"past":{"one":"{0} মিনিট আগে","other":"{0} মিনিট আগে"}},"minute-narrow":{"0":"এই মিনিট","future":{"one":"{0} মিনিটে","other":"{0} মিনিটে"},"past":{"one":"{0} মিনিট আগে","other":"{0} মিনিট আগে"}},"second":{"0":"এখন","future":{"one":"{0} সেকেন্ডে","other":"{0} সেকেন্ডে"},"past":{"one":"{0} সেকেন্ড পূর্বে","other":"{0} সেকেন্ড পূর্বে"}},"second-short":{"0":"এখন","future":{"one":"{0} সেকেন্ডে","other":"{0} সেকেন্ডে"},"past":{"one":"{0} সেকেন্ড পূর্বে","other":"{0} সেকেন্ড পূর্বে"}},"second-narrow":{"0":"এখন","future":{"one":"{0} সেকেন্ডে","other":"{0} সেকেন্ডে"},"past":{"one":"{0} সেকেন্ড আগে","other":"{0} সেকেন্ড আগে"}}}},"availableLocales":["bn"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
