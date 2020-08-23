import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import Get from "../helpers/_ESAbstract.Get";
import Type from "../helpers/_ESAbstract.Type";
import ToObject from "../helpers/_ESAbstract.ToObject";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import Construct from "../helpers/_ESAbstract.Construct";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
import CreateIterResultObject from "../helpers/_ESAbstract.CreateIterResultObject";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("fil").length
)) {
// Intl.RelativeTimeFormat.~locale.fil
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"fil":{"nu":["latn"],"year":{"0":"ngayong taon","1":"susunod na taon","future":{"one":"sa {0} taon","other":"sa {0} (na) taon"},"past":{"one":"{0} taon ang nakalipas","other":"{0} (na) taon ang nakalipas"},"-1":"nakaraang taon"},"year-short":{"0":"ngayong taon","1":"susunod na taon","future":{"one":"sa {0} taon","other":"sa {0} (na) taon"},"past":{"one":"{0} taon ang nakalipas","other":"{0} (na) taon ang nakalipas"},"-1":"nakaraang taon"},"year-narrow":{"0":"ngayong taon","1":"susunod na taon","future":{"one":"sa {0} taon","other":"sa {0} (na) taon"},"past":{"one":"{0} taon ang nakalipas","other":"{0} (na) taon ang nakalipas"},"-1":"nakaraang taon"},"quarter":{"0":"ngayong quarter","1":"susunod na quarter","future":{"one":"sa {0} quarter","other":"sa {0} (na) quarter"},"past":{"one":"{0} quarter ang nakalipas","other":"{0} (na) quarter ang nakalipas"},"-1":"nakaraang quarter"},"quarter-short":{"0":"ngayong quarter","1":"susunod na quarter","future":{"one":"sa {0} (na) quarter","other":"sa {0} (na) quarter"},"past":{"one":"{0} quarter ang nakalipas","other":"{0} (na) quarter ang nakalipas"},"-1":"nakaraang quarter"},"quarter-narrow":{"0":"ngayong quarter","1":"susunod na quarter","future":{"one":"sa {0} quarter","other":"sa {0} (na) quarter"},"past":{"one":"{0} quarter ang nakalipas","other":"{0} (na) quarter ang nakalipas"},"-1":"nakaraang quarter"},"month":{"0":"ngayong buwan","1":"susunod na buwan","future":{"one":"sa {0} buwan","other":"sa {0} (na) buwan"},"past":{"one":"{0} buwan ang nakalipas","other":"{0} (na) buwan ang nakalipas"},"-1":"nakaraang buwan"},"month-short":{"0":"ngayong buwan","1":"susunod na buwan","future":{"one":"sa {0} buwan","other":"sa {0} (na) buwan"},"past":{"one":"{0} buwan ang nakalipas","other":"{0} (na) buwan ang nakalipas"},"-1":"nakaraang buwan"},"month-narrow":{"0":"ngayong buwan","1":"susunod na buwan","future":{"one":"sa {0} buwan","other":"sa {0} (na) buwan"},"past":{"one":"{0} buwan ang nakalipas","other":"{0} (na) buwan ang nakalipas"},"-1":"nakaraang buwan"},"week":{"0":"sa linggong ito","1":"susunod na linggo","future":{"one":"sa {0} linggo","other":"sa {0} (na) linggo"},"past":{"one":"{0} linggo ang nakalipas","other":"{0} (na) linggo ang nakalipas"},"-1":"nakalipas na linggo"},"week-short":{"0":"ngayong linggo","1":"susunod na linggo","future":{"one":"sa {0} linggo","other":"sa {0} (na) linggo"},"past":{"one":"{0} linggo ang nakalipas","other":"{0} (na) linggo ang nakalipas"},"-1":"nakaraang linggo"},"week-narrow":{"0":"ngayong linggo","1":"susunod na linggo","future":{"one":"sa {0} linggo","other":"sa {0} (na) linggo"},"past":{"one":"{0} linggo ang nakalipas","other":"{0} (na) linggo ang nakalipas"},"-1":"nakaraang linggo"},"day":{"0":"ngayong araw","1":"bukas","2":"Samakalawa","future":{"one":"sa {0} araw","other":"sa {0} (na) araw"},"past":{"one":"{0} araw ang nakalipas","other":"{0} (na) araw ang nakalipas"},"-2":"Araw bago ang kahapon","-1":"kahapon"},"day-short":{"0":"ngayong araw","1":"bukas","2":"Samakalawa","future":{"one":"sa {0} (na) araw","other":"sa {0} (na) araw"},"past":{"one":"{0} (na) araw ang nakalipas","other":"{0} (na) araw ang nakalipas"},"-2":"Araw bago ang kahapon","-1":"kahapon"},"day-narrow":{"0":"ngayong araw","1":"bukas","2":"Samakalawa","future":{"one":"sa {0} araw","other":"sa {0} (na) araw"},"past":{"one":"{0} araw ang nakalipas","other":"{0} (na) araw ang nakalipas"},"-2":"Araw bago ang kahapon","-1":"kahapon"},"hour":{"0":"ngayong oras","future":{"one":"sa {0} oras","other":"sa {0} (na) oras"},"past":{"one":"{0} oras ang nakalipas","other":"{0} (na) oras ang nakalipas"}},"hour-short":{"0":"ngayong oras","future":{"one":"sa {0} oras","other":"sa {0} (na) oras"},"past":{"one":"{0} oras ang nakalipas","other":"{0} (na) oras ang nakalipas"}},"hour-narrow":{"0":"ngayong oras","future":{"one":"sa {0} oras","other":"sa {0} (na) oras"},"past":{"one":"{0} oras nakalipas","other":"{0} (na) oras nakalipas"}},"minute":{"0":"sa minutong ito","future":{"one":"sa {0} minuto","other":"sa {0} (na) minuto"},"past":{"one":"{0} minuto ang nakalipas","other":"{0} (na) minuto ang nakalipas"}},"minute-short":{"0":"sa minutong ito","future":{"one":"sa {0} min.","other":"sa {0} (na) min."},"past":{"one":"{0} min. ang nakalipas","other":"{0} (na) min. ang nakalipas"}},"minute-narrow":{"0":"sa minutong ito","future":{"one":"sa {0} min.","other":"sa {0} (na) min."},"past":{"one":"{0} min. ang nakalipas","other":"{0} (na) min. ang nakalipas"}},"second":{"0":"ngayon","future":{"one":"sa {0} segundo","other":"sa {0} (na) segundo"},"past":{"one":"{0} segundo ang nakalipas","other":"{0} (na) segundo ang nakalipas"}},"second-short":{"0":"ngayon","future":{"one":"sa {0} seg.","other":"sa {0} (na) seg."},"past":{"one":"{0} seg. ang nakalipas","other":"{0} (na) seg. nakalipas"}},"second-narrow":{"0":"ngayon","future":{"one":"sa {0} seg.","other":"sa {0} (na) seg."},"past":{"one":"{0} seg. nakalipas","other":"{0} (na) seg. nakalipas"}}}},"availableLocales":["fil"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
