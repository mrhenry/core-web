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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("el").length
)) {
// Intl.RelativeTimeFormat.~locale.el
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"φέτος","1":"επόμενο έτος","future":{"one":"σε {0} έτος","other":"σε {0} έτη"},"past":{"one":"πριν από {0} έτος","other":"πριν από {0} έτη"},"-1":"πέρσι"},"year-short":{"0":"φέτος","1":"επόμενο έτος","future":{"one":"σε {0} έτος","other":"σε {0} έτη"},"past":{"one":"πριν από {0} έτος","other":"πριν από {0} έτη"},"-1":"πέρσι"},"year-narrow":{"0":"φέτος","1":"επόμενο έτος","future":{"one":"σε {0} έτος","other":"σε {0} έτη"},"past":{"one":"{0} έτος πριν","other":"{0} έτη πριν"},"-1":"πέρσι"},"quarter":{"0":"τρέχον τρίμηνο","1":"επόμενο τρίμηνο","future":{"one":"σε {0} τρίμηνο","other":"σε {0} τρίμηνα"},"past":{"one":"πριν από {0} τρίμηνο","other":"πριν από {0} τρίμηνα"},"-1":"προηγούμενο τρίμηνο"},"quarter-short":{"0":"τρέχον τρίμ.","1":"επόμ. τρίμ.","future":{"one":"σε {0} τρίμ.","other":"σε {0} τρίμ."},"past":{"one":"πριν από {0} τρίμ.","other":"πριν από {0} τρίμ."},"-1":"προηγ. τρίμ."},"quarter-narrow":{"0":"τρέχον τρίμ.","1":"επόμ. τρίμ.","future":{"one":"σε {0} τρίμ.","other":"σε {0} τρίμ."},"past":{"one":"{0} τρίμ. πριν","other":"{0} τρίμ. πριν"},"-1":"προηγ. τρίμ."},"month":{"0":"τρέχων μήνας","1":"επόμενος μήνας","future":{"one":"σε {0} μήνα","other":"σε {0} μήνες"},"past":{"one":"πριν από {0} μήνα","other":"πριν από {0} μήνες"},"-1":"προηγούμενος μήνας"},"month-short":{"0":"τρέχων μήνας","1":"επόμενος μήνας","future":{"one":"σε {0} μήνα","other":"σε {0} μήνες"},"past":{"one":"πριν από {0} μήνα","other":"πριν από {0} μήνες"},"-1":"προηγούμενος μήνας"},"month-narrow":{"0":"τρέχ. μήνας","1":"επόμ. μήνας","future":{"one":"σε {0} μ.","other":"σε {0} μ."},"past":{"one":"{0} μ. πριν","other":"{0} μ. πριν"},"-1":"προηγ. μήνας"},"week":{"0":"τρέχουσα εβδομάδα","1":"επόμενη εβδομάδα","future":{"one":"σε {0} εβδομάδα","other":"σε {0} εβδομάδες"},"past":{"one":"πριν από {0} εβδομάδα","other":"πριν από {0} εβδομάδες"},"-1":"προηγούμενη εβδομάδα"},"week-short":{"0":"τρέχ. εβδομάδα","1":"επόμ. εβδομάδα","future":{"one":"σε {0} εβδ.","other":"σε {0} εβδ."},"past":{"one":"πριν από {0} εβδ.","other":"πριν από {0} εβδ."},"-1":"προηγ. εβδομάδα"},"week-narrow":{"0":"τρέχ. εβδ.","1":"επόμ. εβδ.","future":{"one":"σε {0} εβδ.","other":"σε {0} εβδ."},"past":{"one":"{0} εβδ. πριν","other":"{0} εβδ. πριν"},"-1":"προηγ. εβδ."},"day":{"0":"σήμερα","1":"αύριο","2":"μεθαύριο","future":{"one":"σε {0} ημέρα","other":"σε {0} ημέρες"},"past":{"one":"πριν από {0} ημέρα","other":"πριν από {0} ημέρες"},"-2":"προχθές","-1":"χθες"},"day-short":{"0":"σήμερα","1":"αύριο","2":"μεθαύριο","future":{"one":"σε {0} ημ.","other":"σε {0} ημ."},"past":{"one":"πριν από {0} ημ.","other":"πριν από {0} ημ."},"-2":"προχθές","-1":"χθες"},"day-narrow":{"0":"σήμερα","1":"αύριο","2":"μεθαύριο","future":{"one":"σε {0} ημ.","other":"σε {0} ημ."},"past":{"one":"{0} ημ. πριν","other":"{0} ημ. πριν"},"-2":"προχθές","-1":"χθες"},"hour":{"0":"τρέχουσα ώρα","future":{"one":"σε {0} ώρα","other":"σε {0} ώρες"},"past":{"one":"πριν από {0} ώρα","other":"πριν από {0} ώρες"}},"hour-short":{"0":"τρέχουσα ώρα","future":{"one":"σε {0} ώ.","other":"σε {0} ώ."},"past":{"one":"πριν από {0} ώ.","other":"πριν από {0} ώ."}},"hour-narrow":{"0":"τρέχουσα ώρα","future":{"one":"σε {0} ώ.","other":"σε {0} ώ."},"past":{"one":"{0} ώ. πριν","other":"{0} ώ. πριν"}},"minute":{"0":"τρέχον λεπτό","future":{"one":"σε {0} λεπτό","other":"σε {0} λεπτά"},"past":{"one":"πριν από {0} λεπτό","other":"πριν από {0} λεπτά"}},"minute-short":{"0":"τρέχον λεπτό","future":{"one":"σε {0} λεπ.","other":"σε {0} λεπ."},"past":{"one":"πριν από {0} λεπ.","other":"πριν από {0} λεπ."}},"minute-narrow":{"0":"τρέχον λεπτό","future":{"one":"σε {0} λ.","other":"σε {0} λ."},"past":{"one":"{0} λ. πριν","other":"{0} λ. πριν"}},"second":{"0":"τώρα","future":{"one":"σε {0} δευτερόλεπτο","other":"σε {0} δευτερόλεπτα"},"past":{"one":"πριν από {0} δευτερόλεπτο","other":"πριν από {0} δευτερόλεπτα"}},"second-short":{"0":"τώρα","future":{"one":"σε {0} δευτ.","other":"σε {0} δευτ."},"past":{"one":"πριν από {0} δευτ.","other":"πριν από {0} δευτ."}},"second-narrow":{"0":"τώρα","future":{"one":"σε {0} δ.","other":"σε {0} δ."},"past":{"one":"{0} δ. πριν","other":"{0} δ. πριν"}}},"locale":"el"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
