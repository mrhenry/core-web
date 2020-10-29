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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ne-IN").length
)) {
// Intl.RelativeTimeFormat.~locale.ne-IN
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ne-IN":{"nu":["deva"],"year":{"0":"यो वर्ष","1":"आगामी वर्ष","future":{"one":"{0} वर्षमा","other":"{0} वर्षमा"},"past":{"one":"{0} वर्ष अघि","other":"{0} वर्ष अघि"},"-1":"गत वर्ष"},"year-short":{"0":"यो वर्ष","1":"आगामी वर्ष","future":{"one":"{0} वर्षमा","other":"{0} वर्षमा"},"past":{"one":"{0} वर्ष अघि","other":"{0} वर्ष अघि"},"-1":"गत वर्ष"},"year-narrow":{"0":"यो वर्ष","1":"आगामी वर्ष","future":{"one":"{0} वर्षमा","other":"{0} वर्षमा"},"past":{"one":"{0} वर्ष अघि","other":"{0} वर्ष अघि"},"-1":"गत वर्ष"},"quarter":{"0":"यो सत्र","1":"अर्को सत्र","future":{"one":"+{0} सत्रमा","other":"{0}सत्रमा"},"past":{"one":"{0}सत्र अघि","other":"{0}सत्र अघि"},"-1":"अघिल्लो सत्र"},"quarter-short":{"0":"यो सत्र","1":"अर्को सत्र","future":{"one":"{0}सत्रमा","other":"{0}सत्रमा"},"past":{"one":"{0}सत्र अघि","other":"{0}सत्र अघि"},"-1":"अघिल्लो सत्र"},"quarter-narrow":{"0":"यो सत्र","1":"अर्को सत्र","future":{"one":"{0}सत्रमा","other":"{0}सत्रमा"},"past":{"one":"{0}सत्र अघि","other":"{0}सत्र अघि"},"-1":"अघिल्लो सत्र"},"month":{"0":"यो महिना","1":"अर्को महिना","future":{"one":"{0} महिनामा","other":"{0} महिनामा"},"past":{"one":"{0} महिना पहिले","other":"{0} महिना पहिले"},"-1":"गत महिना"},"month-short":{"0":"यो महिना","1":"आगामी महिना","future":{"one":"{0} महिनामा","other":"{0} महिनामा"},"past":{"one":"{0} महिना पहिले","other":"{0} महिना पहिले"},"-1":"गत महिना"},"month-narrow":{"0":"यो महिना","1":"आगामी महिना","future":{"one":"{0} महिनामा","other":"{0} महिनामा"},"past":{"one":"{0} महिना पहिले","other":"{0} महिना पहिले"},"-1":"गत महिना"},"week":{"0":"यो हप्ता","1":"आउने हप्ता","future":{"one":"{0} हप्तामा","other":"{0} हप्तामा"},"past":{"one":"{0} हप्ता पहिले","other":"{0} हप्ता पहिले"},"-1":"गत हप्ता"},"week-short":{"0":"यो हप्ता","1":"आगामी हप्ता","future":{"one":"{0} हप्तामा","other":"{0} हप्तामा"},"past":{"one":"{0} हप्ता पहिले","other":"{0} हप्ता पहिले"},"-1":"गत हप्ता"},"week-narrow":{"0":"यो हप्ता","1":"आगामी हप्ता","future":{"one":"{0} हप्तामा","other":"{0} हप्तामा"},"past":{"one":"{0} हप्ता पहिले","other":"{0} हप्ता पहिले"},"-1":"गत हप्ता"},"day":{"0":"आज","1":"भोलि","2":"पर्सि","future":{"one":"{0} दिनमा","other":"{0} दिनमा"},"past":{"one":"{0} दिन पहिले","other":"{0} दिन पहिले"},"-2":"अस्ति","-1":"हिजो"},"day-short":{"0":"आज","1":"भोलि","2":"पर्सि","future":{"one":"{0} दिनमा","other":"{0} दिनमा"},"past":{"one":"{0} दिन पहिले","other":"{0} दिन पहिले"},"-2":"अस्ति","-1":"हिजो"},"day-narrow":{"0":"आज","1":"भोलि","2":"पर्सि","future":{"one":"{0} दिनमा","other":"{0} दिनमा"},"past":{"one":"{0} दिन पहिले","other":"{0} दिन पहिले"},"-2":"अस्ति","-1":"हिजो"},"hour":{"0":"यस घडीमा","future":{"one":"{0} घण्टामा","other":"{0} घण्टामा"},"past":{"one":"{0} घण्टा पहिले","other":"{0} घण्टा पहिले"}},"hour-short":{"0":"यस घडीमा","future":{"one":"{0} घण्टामा","other":"{0} घण्टामा"},"past":{"one":"{0} घण्टा पहिले","other":"{0} घण्टा पहिले"}},"hour-narrow":{"0":"यस घडीमा","future":{"one":"{0} घण्टामा","other":"{0} घण्टामा"},"past":{"one":"{0} घण्टा पहिले","other":"{0} घण्टा पहिले"}},"minute":{"0":"यही मिनेटमा","future":{"one":"{0} मिनेटमा","other":"{0} मिनेटमा"},"past":{"one":"{0} मिनेट पहिले","other":"{0} मिनेट पहिले"}},"minute-short":{"0":"यही मिनेटमा","future":{"one":"{0} मिनेटमा","other":"{0} मिनेटमा"},"past":{"one":"{0} मिनेट पहिले","other":"{0} मिनेट पहिले"}},"minute-narrow":{"0":"यही मिनेटमा","future":{"one":"{0} मिनेटमा","other":"{0} मिनेटमा"},"past":{"one":"{0} मिनेट पहिले","other":"{0} मिनेट पहिले"}},"second":{"0":"अहिले","future":{"one":"{0} सेकेन्डमा","other":"{0} सेकेन्डमा"},"past":{"one":"{0} सेकेन्ड पहिले","other":"{0} सेकेन्ड पहिले"}},"second-short":{"0":"अहिले","future":{"one":"{0} सेकेन्डमा","other":"{0} सेकेन्डमा"},"past":{"one":"{0} सेकेन्ड पहिले","other":"{0} सेकेन्ड पहिले"}},"second-narrow":{"0":"अहिले","future":{"one":"{0} सेकेन्डमा","other":"{0} सेकेन्डमा"},"past":{"one":"{0} सेकेन्ड पहिले","other":"{0} सेकेन्ड पहिले"}}}},"availableLocales":["ne-IN"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
