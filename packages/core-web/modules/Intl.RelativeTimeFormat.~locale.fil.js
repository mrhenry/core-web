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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("fil").length
)) {
// Intl.RelativeTimeFormat.~locale.fil
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ngayong taon","1":"susunod na taon","future":{"one":"sa {0} taon","other":"sa {0} (na) taon"},"past":{"one":"{0} taon ang nakalipas","other":"{0} (na) taon ang nakalipas"},"-1":"nakaraang taon"},"year-short":{"0":"ngayong taon","1":"susunod na taon","future":{"one":"sa {0} taon","other":"sa {0} (na) taon"},"past":{"one":"{0} taon ang nakalipas","other":"{0} (na) taon ang nakalipas"},"-1":"nakaraang taon"},"year-narrow":{"0":"ngayong taon","1":"susunod na taon","future":{"one":"sa {0} taon","other":"sa {0} (na) taon"},"past":{"one":"{0} taon ang nakalipas","other":"{0} (na) taon ang nakalipas"},"-1":"nakaraang taon"},"quarter":{"0":"ngayong quarter","1":"susunod na quarter","future":{"one":"sa {0} quarter","other":"sa {0} (na) quarter"},"past":{"one":"{0} quarter ang nakalipas","other":"{0} (na) quarter ang nakalipas"},"-1":"nakaraang quarter"},"quarter-short":{"0":"ngayong quarter","1":"susunod na quarter","future":{"one":"sa {0} (na) quarter","other":"sa {0} (na) quarter"},"past":{"one":"{0} quarter ang nakalipas","other":"{0} (na) quarter ang nakalipas"},"-1":"nakaraang quarter"},"quarter-narrow":{"0":"ngayong quarter","1":"susunod na quarter","future":{"one":"sa {0} quarter","other":"sa {0} (na) quarter"},"past":{"one":"{0} quarter ang nakalipas","other":"{0} (na) quarter ang nakalipas"},"-1":"nakaraang quarter"},"month":{"0":"ngayong buwan","1":"susunod na buwan","future":{"one":"sa {0} buwan","other":"sa {0} (na) buwan"},"past":{"one":"{0} buwan ang nakalipas","other":"{0} (na) buwan ang nakalipas"},"-1":"nakaraang buwan"},"month-short":{"0":"ngayong buwan","1":"susunod na buwan","future":{"one":"sa {0} buwan","other":"sa {0} (na) buwan"},"past":{"one":"{0} buwan ang nakalipas","other":"{0} (na) buwan ang nakalipas"},"-1":"nakaraang buwan"},"month-narrow":{"0":"ngayong buwan","1":"susunod na buwan","future":{"one":"sa {0} buwan","other":"sa {0} (na) buwan"},"past":{"one":"{0} buwan ang nakalipas","other":"{0} (na) buwan ang nakalipas"},"-1":"nakaraang buwan"},"week":{"0":"sa linggong ito","1":"susunod na linggo","future":{"one":"sa {0} linggo","other":"sa {0} (na) linggo"},"past":{"one":"{0} linggo ang nakalipas","other":"{0} (na) linggo ang nakalipas"},"-1":"nakalipas na linggo"},"week-short":{"0":"ngayong linggo","1":"susunod na linggo","future":{"one":"sa {0} linggo","other":"sa {0} (na) linggo"},"past":{"one":"{0} linggo ang nakalipas","other":"{0} (na) linggo ang nakalipas"},"-1":"nakaraang linggo"},"week-narrow":{"0":"ngayong linggo","1":"susunod na linggo","future":{"one":"sa {0} linggo","other":"sa {0} (na) linggo"},"past":{"one":"{0} linggo ang nakalipas","other":"{0} (na) linggo ang nakalipas"},"-1":"nakaraang linggo"},"day":{"0":"ngayong araw","1":"bukas","2":"Samakalawa","future":{"one":"sa {0} araw","other":"sa {0} (na) araw"},"past":{"one":"{0} araw ang nakalipas","other":"{0} (na) araw ang nakalipas"},"-2":"Araw bago ang kahapon","-1":"kahapon"},"day-short":{"0":"ngayong araw","1":"bukas","2":"Samakalawa","future":{"one":"sa {0} (na) araw","other":"sa {0} (na) araw"},"past":{"one":"{0} (na) araw ang nakalipas","other":"{0} (na) araw ang nakalipas"},"-2":"Araw bago ang kahapon","-1":"kahapon"},"day-narrow":{"0":"ngayong araw","1":"bukas","2":"Samakalawa","future":{"one":"sa {0} araw","other":"sa {0} (na) araw"},"past":{"one":"{0} araw ang nakalipas","other":"{0} (na) araw ang nakalipas"},"-2":"Araw bago ang kahapon","-1":"kahapon"},"hour":{"0":"ngayong oras","future":{"one":"sa {0} oras","other":"sa {0} (na) oras"},"past":{"one":"{0} oras ang nakalipas","other":"{0} (na) oras ang nakalipas"}},"hour-short":{"0":"ngayong oras","future":{"one":"sa {0} oras","other":"sa {0} (na) oras"},"past":{"one":"{0} oras ang nakalipas","other":"{0} (na) oras ang nakalipas"}},"hour-narrow":{"0":"ngayong oras","future":{"one":"sa {0} oras","other":"sa {0} (na) oras"},"past":{"one":"{0} oras nakalipas","other":"{0} (na) oras nakalipas"}},"minute":{"0":"sa minutong ito","future":{"one":"sa {0} minuto","other":"sa {0} (na) minuto"},"past":{"one":"{0} minuto ang nakalipas","other":"{0} (na) minuto ang nakalipas"}},"minute-short":{"0":"sa minutong ito","future":{"one":"sa {0} min.","other":"sa {0} (na) min."},"past":{"one":"{0} min. ang nakalipas","other":"{0} (na) min. ang nakalipas"}},"minute-narrow":{"0":"sa minutong ito","future":{"one":"sa {0} min.","other":"sa {0} (na) min."},"past":{"one":"{0} min. ang nakalipas","other":"{0} (na) min. ang nakalipas"}},"second":{"0":"ngayon","future":{"one":"sa {0} segundo","other":"sa {0} (na) segundo"},"past":{"one":"{0} segundo ang nakalipas","other":"{0} (na) segundo ang nakalipas"}},"second-short":{"0":"ngayon","future":{"one":"sa {0} seg.","other":"sa {0} (na) seg."},"past":{"one":"{0} seg. ang nakalipas","other":"{0} (na) seg. nakalipas"}},"second-narrow":{"0":"ngayon","future":{"one":"sa {0} seg.","other":"sa {0} (na) seg."},"past":{"one":"{0} seg. nakalipas","other":"{0} (na) seg. nakalipas"}}},"locale":"fil"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
