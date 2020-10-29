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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("el-CY").length
)) {
// Intl.RelativeTimeFormat.~locale.el-CY
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"el-CY":{"nu":["latn"],"year":{"0":"φέτος","1":"επόμενο έτος","future":{"one":"σε {0} έτος","other":"σε {0} έτη"},"past":{"one":"πριν από {0} έτος","other":"πριν από {0} έτη"},"-1":"πέρσι"},"year-short":{"0":"φέτος","1":"επόμενο έτος","future":{"one":"σε {0} έτος","other":"σε {0} έτη"},"past":{"one":"πριν από {0} έτος","other":"πριν από {0} έτη"},"-1":"πέρσι"},"year-narrow":{"0":"φέτος","1":"επόμενο έτος","future":{"one":"σε {0} έτος","other":"σε {0} έτη"},"past":{"one":"{0} έτος πριν","other":"{0} έτη πριν"},"-1":"πέρσι"},"quarter":{"0":"τρέχον τρίμηνο","1":"επόμενο τρίμηνο","future":{"one":"σε {0} τρίμηνο","other":"σε {0} τρίμηνα"},"past":{"one":"πριν από {0} τρίμηνο","other":"πριν από {0} τρίμηνα"},"-1":"προηγούμενο τρίμηνο"},"quarter-short":{"0":"τρέχον τρίμ.","1":"επόμ. τρίμ.","future":{"one":"σε {0} τρίμ.","other":"σε {0} τρίμ."},"past":{"one":"πριν από {0} τρίμ.","other":"πριν από {0} τρίμ."},"-1":"προηγ. τρίμ."},"quarter-narrow":{"0":"τρέχον τρίμ.","1":"επόμ. τρίμ.","future":{"one":"σε {0} τρίμ.","other":"σε {0} τρίμ."},"past":{"one":"{0} τρίμ. πριν","other":"{0} τρίμ. πριν"},"-1":"προηγ. τρίμ."},"month":{"0":"τρέχων μήνας","1":"επόμενος μήνας","future":{"one":"σε {0} μήνα","other":"σε {0} μήνες"},"past":{"one":"πριν από {0} μήνα","other":"πριν από {0} μήνες"},"-1":"προηγούμενος μήνας"},"month-short":{"0":"τρέχων μήνας","1":"επόμενος μήνας","future":{"one":"σε {0} μήνα","other":"σε {0} μήνες"},"past":{"one":"πριν από {0} μήνα","other":"πριν από {0} μήνες"},"-1":"προηγούμενος μήνας"},"month-narrow":{"0":"τρέχ. μήνας","1":"επόμ. μήνας","future":{"one":"σε {0} μ.","other":"σε {0} μ."},"past":{"one":"{0} μ. πριν","other":"{0} μ. πριν"},"-1":"προηγ. μήνας"},"week":{"0":"τρέχουσα εβδομάδα","1":"επόμενη εβδομάδα","future":{"one":"σε {0} εβδομάδα","other":"σε {0} εβδομάδες"},"past":{"one":"πριν από {0} εβδομάδα","other":"πριν από {0} εβδομάδες"},"-1":"προηγούμενη εβδομάδα"},"week-short":{"0":"τρέχ. εβδομάδα","1":"επόμ. εβδομάδα","future":{"one":"σε {0} εβδ.","other":"σε {0} εβδ."},"past":{"one":"πριν από {0} εβδ.","other":"πριν από {0} εβδ."},"-1":"προηγ. εβδομάδα"},"week-narrow":{"0":"τρέχ. εβδ.","1":"επόμ. εβδ.","future":{"one":"σε {0} εβδ.","other":"σε {0} εβδ."},"past":{"one":"{0} εβδ. πριν","other":"{0} εβδ. πριν"},"-1":"προηγ. εβδ."},"day":{"0":"σήμερα","1":"αύριο","2":"μεθαύριο","future":{"one":"σε {0} ημέρα","other":"σε {0} ημέρες"},"past":{"one":"πριν από {0} ημέρα","other":"πριν από {0} ημέρες"},"-2":"προχθές","-1":"χθες"},"day-short":{"0":"σήμερα","1":"αύριο","2":"μεθαύριο","future":{"one":"σε {0} ημ.","other":"σε {0} ημ."},"past":{"one":"πριν από {0} ημ.","other":"πριν από {0} ημ."},"-2":"προχθές","-1":"χθες"},"day-narrow":{"0":"σήμερα","1":"αύριο","2":"μεθαύριο","future":{"one":"σε {0} ημ.","other":"σε {0} ημ."},"past":{"one":"{0} ημ. πριν","other":"{0} ημ. πριν"},"-2":"προχθές","-1":"χθες"},"hour":{"0":"τρέχουσα ώρα","future":{"one":"σε {0} ώρα","other":"σε {0} ώρες"},"past":{"one":"πριν από {0} ώρα","other":"πριν από {0} ώρες"}},"hour-short":{"0":"τρέχουσα ώρα","future":{"one":"σε {0} ώ.","other":"σε {0} ώ."},"past":{"one":"πριν από {0} ώ.","other":"πριν από {0} ώ."}},"hour-narrow":{"0":"τρέχουσα ώρα","future":{"one":"σε {0} ώ.","other":"σε {0} ώ."},"past":{"one":"{0} ώ. πριν","other":"{0} ώ. πριν"}},"minute":{"0":"τρέχον λεπτό","future":{"one":"σε {0} λεπτό","other":"σε {0} λεπτά"},"past":{"one":"πριν από {0} λεπτό","other":"πριν από {0} λεπτά"}},"minute-short":{"0":"τρέχον λεπτό","future":{"one":"σε {0} λεπ.","other":"σε {0} λεπ."},"past":{"one":"πριν από {0} λεπ.","other":"πριν από {0} λεπ."}},"minute-narrow":{"0":"τρέχον λεπτό","future":{"one":"σε {0} λ.","other":"σε {0} λ."},"past":{"one":"{0} λ. πριν","other":"{0} λ. πριν"}},"second":{"0":"τώρα","future":{"one":"σε {0} δευτερόλεπτο","other":"σε {0} δευτερόλεπτα"},"past":{"one":"πριν από {0} δευτερόλεπτο","other":"πριν από {0} δευτερόλεπτα"}},"second-short":{"0":"τώρα","future":{"one":"σε {0} δευτ.","other":"σε {0} δευτ."},"past":{"one":"πριν από {0} δευτ.","other":"πριν από {0} δευτ."}},"second-narrow":{"0":"τώρα","future":{"one":"σε {0} δ.","other":"σε {0} δ."},"past":{"one":"{0} δ. πριν","other":"{0} δ. πριν"}}}},"availableLocales":["el-CY"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
