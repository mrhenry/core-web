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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ug").length
)) {
// Intl.RelativeTimeFormat.~locale.ug
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"بۇ يىل","1":"كېلەر يىل","future":{"one":"{0} يىلدىن كېيىن","other":"{0} يىلدىن كېيىن"},"past":{"one":"{0} يىل ئىلگىرى","other":"{0} يىل ئىلگىرى"},"-1":"ئۆتكەن يىل"},"year-short":{"0":"بۇ يىل","1":"كېلەر يىل","future":{"one":"{0} يىلدىن كېيىن","other":"{0} يىلدىن كېيىن"},"past":{"one":"{0} يىل ئىلگىرى","other":"{0} يىل ئىلگىرى"},"-1":"ئۆتكەن يىل"},"year-narrow":{"0":"بۇ يىل","1":"كېلەر يىل","future":{"one":"{0} يىلدىن كېيىن","other":"{0} يىلدىن كېيىن"},"past":{"one":"{0} يىل ئىلگىرى","other":"{0} يىل ئىلگىرى"},"-1":"ئۆتكەن يىل"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"بۇ ئاي","1":"كېلەر ئاي","future":{"one":"{0} ئايدىن كېيىن","other":"{0} ئايدىن كېيىن"},"past":{"one":"{0} ئاي ئىلگىرى","other":"{0} ئاي ئىلگىرى"},"-1":"ئۆتكەن ئاي"},"month-short":{"0":"بۇ ئاي","1":"كېلەر ئاي","future":{"one":"{0} ئايدىن كېيىن","other":"{0} ئايدىن كېيىن"},"past":{"one":"{0} ئاي ئىلگىرى","other":"{0} ئاي ئىلگىرى"},"-1":"ئۆتكەن ئاي"},"month-narrow":{"0":"بۇ ئاي","1":"كېلەر ئاي","future":{"one":"{0} ئايدىن كېيىن","other":"{0} ئايدىن كېيىن"},"past":{"one":"{0} ئاي ئىلگىرى","other":"{0} ئاي ئىلگىرى"},"-1":"ئۆتكەن ئاي"},"week":{"0":"بۇ ھەپتە","1":"كېلەر ھەپتە","future":{"one":"{0} ھەپتىدىن كېيىن","other":"{0} ھەپتىدىن كېيىن"},"past":{"one":"{0} ھەپتە ئىلگىرى","other":"{0} ھەپتە ئىلگىرى"},"-1":"ئۆتكەن ھەپتە"},"week-short":{"0":"بۇ ھەپتە","1":"كېلەر ھەپتە","future":{"one":"{0} ھەپتىدىن كېيىن","other":"{0} ھەپتىدىن كېيىن"},"past":{"one":"{0} ھەپتە ئىلگىرى","other":"{0} ھەپتە ئىلگىرى"},"-1":"ئۆتكەن ھەپتە"},"week-narrow":{"0":"بۇ ھەپتە","1":"كېلەر ھەپتە","future":{"one":"{0} ھەپتىدىن كېيىن","other":"{0} ھەپتىدىن كېيىن"},"past":{"one":"{0} ھەپتە ئىلگىرى","other":"{0} ھەپتە ئىلگىرى"},"-1":"ئۆتكەن ھەپتە"},"day":{"0":"بۈگۈن","1":"ئەتە","future":{"one":"{0} كۈندىن كېيىن","other":"{0} كۈندىن كېيىن"},"past":{"one":"{0} كۈن ئىلگىرى","other":"{0} كۈن ئىلگىرى"},"-1":"تۈنۈگۈن"},"day-short":{"0":"بۈگۈن","1":"ئەتە","future":{"one":"{0} كۈندىن كېيىن","other":"{0} كۈندىن كېيىن"},"past":{"one":"{0} كۈن ئىلگىرى","other":"{0} كۈن ئىلگىرى"},"-1":"تۈنۈگۈن"},"day-narrow":{"0":"بۈگۈن","1":"ئەتە","future":{"one":"{0} كۈندىن كېيىن","other":"{0} كۈندىن كېيىن"},"past":{"one":"{0} كۈن ئىلگىرى","other":"{0} كۈن ئىلگىرى"},"-1":"تۈنۈگۈن"},"hour":{"0":"this hour","future":{"one":"{0} سائەتتىن كېيىن","other":"{0} سائەتتىن كېيىن"},"past":{"one":"{0} سائەت ئىلگىرى","other":"{0} سائەت ئىلگىرى"}},"hour-short":{"0":"this hour","future":{"one":"{0} سائەتتىن كېيىن","other":"{0} سائەتتىن كېيىن"},"past":{"one":"{0} سائەت ئىلگىرى","other":"{0} سائەت ئىلگىرى"}},"hour-narrow":{"0":"this hour","future":{"one":"{0} سائەتتىن كېيىن","other":"{0} سائەتتىن كېيىن"},"past":{"one":"{0} سائەت ئىلگىرى","other":"{0} سائەت ئىلگىرى"}},"minute":{"0":"this minute","future":{"one":"{0} مىنۇتتىن كېيىن","other":"{0} مىنۇتتىن كېيىن"},"past":{"one":"{0} مىنۇت ئىلگىرى","other":"{0} مىنۇت ئىلگىرى"}},"minute-short":{"0":"this minute","future":{"one":"{0} مىنۇتتىن كېيىن","other":"{0} مىنۇتتىن كېيىن"},"past":{"one":"{0} مىنۇت ئىلگىرى","other":"{0} مىنۇت ئىلگىرى"}},"minute-narrow":{"0":"this minute","future":{"one":"{0} مىنۇتتىن كېيىن","other":"{0} مىنۇتتىن كېيىن"},"past":{"one":"{0} مىنۇت ئىلگىرى","other":"{0} مىنۇت ئىلگىرى"}},"second":{"0":"now","future":{"one":"{0} سېكۇنتتىن كېيىن","other":"{0} سېكۇنتتىن كېيىن"},"past":{"one":"{0} سېكۇنت ئىلگىرى","other":"{0} سېكۇنت ئىلگىرى"}},"second-short":{"0":"now","future":{"one":"{0} سېكۇنتتىن كېيىن","other":"{0} سېكۇنتتىن كېيىن"},"past":{"one":"{0} سېكۇنت ئىلگىرى","other":"{0} سېكۇنت ئىلگىرى"}},"second-narrow":{"0":"now","future":{"one":"{0} سېكۇنتتىن كېيىن","other":"{0} سېكۇنتتىن كېيىن"},"past":{"one":"{0} سېكۇنت ئىلگىرى","other":"{0} سېكۇنت ئىلگىرى"}}},"locale":"ug"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
