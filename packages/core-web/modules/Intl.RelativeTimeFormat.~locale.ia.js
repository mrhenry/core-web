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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ia").length
)) {
// Intl.RelativeTimeFormat.~locale.ia
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"iste anno","1":"le anno proxime","future":{"one":"in {0} annos","other":"in {0} annos"},"past":{"one":"{0} annos retro","other":"{0} annos retro"},"-1":"le anno passate"},"year-short":{"0":"iste anno","1":"le anno proxime","future":{"one":"in {0} annos","other":"in {0} an."},"past":{"one":"{0} annos retro","other":"{0} an. retro"},"-1":"le anno passate"},"year-narrow":{"0":"iste anno","1":"le anno proxime","future":{"one":"in {0} annos","other":"in {0} an."},"past":{"one":"{0} annos retro","other":"{0} an. retro"},"-1":"le anno passate"},"quarter":{"0":"iste trimestre","1":"le trimestre proxime","future":{"one":"in {0} trimestres","other":"in {0} trimestres"},"past":{"one":"in {0} trimestres","other":"in {0} trimestres"},"-1":"le trimestre passate"},"quarter-short":{"0":"iste trimestre","1":"le trimestre proxime","future":{"one":"in {0} trimestres","other":"in {0} trim."},"past":{"one":"in {0} trimestres","other":"{0} trim. retro"},"-1":"le trimestre passate"},"quarter-narrow":{"0":"iste trimestre","1":"le trimestre proxime","future":{"one":"in {0} trimestres","other":"in {0} trim."},"past":{"one":"in {0} trimestres","other":"{0} trim. retro"},"-1":"le trimestre passate"},"month":{"0":"iste mense","1":"le mense proxime","future":{"one":"in {0} menses","other":"in {0} menses"},"past":{"one":"{0} menses retro","other":"{0} menses retro"},"-1":"le mense passate"},"month-short":{"0":"iste mense","1":"le mense proxime","future":{"one":"in {0} menses","other":"in {0} mns."},"past":{"one":"{0} menses retro","other":"{0} mns. retro"},"-1":"le mense passate"},"month-narrow":{"0":"iste mense","1":"le mense proxime","future":{"one":"in {0} menses","other":"in {0} mns."},"past":{"one":"{0} menses retro","other":"{0} mns. retro"},"-1":"le mense passate"},"week":{"0":"iste septimana","1":"le septimana proxime","future":{"one":"in {0} septimanas","other":"in {0} septimanas"},"past":{"one":"{0} septimanas retro","other":"{0} septimanas retro"},"-1":"le septimana passate"},"week-short":{"0":"iste septimana","1":"le septimana proxime","future":{"one":"in {0} septimanas","other":"in {0} sept."},"past":{"one":"{0} septimanas retro","other":"{0} sept. retro"},"-1":"le septimana passate"},"week-narrow":{"0":"iste septimana","1":"le septimana proxime","future":{"one":"in {0} septimanas","other":"in {0} sept."},"past":{"one":"{0} septimanas retro","other":"{0} sept. retro"},"-1":"le septimana passate"},"day":{"0":"hodie","1":"deman","future":{"one":"in {0} dies","other":"in {0} dies"},"past":{"one":"{0} dies retro","other":"{0} dies retro"},"-1":"heri"},"day-short":{"0":"hodie","1":"deman","future":{"one":"in {0} dies","other":"in {0} dies"},"past":{"one":"{0} dies retro","other":"{0} dies retro"},"-1":"heri"},"day-narrow":{"0":"hodie","1":"deman","future":{"one":"in {0} dies","other":"in {0} dies"},"past":{"one":"{0} dies retro","other":"{0} dies retro"},"-1":"heri"},"hour":{"0":"iste hora","future":{"one":"in {0} horas","other":"in {0} horas"},"past":{"one":"{0} horas retro","other":"{0} horas retro"}},"hour-short":{"0":"iste hora","future":{"one":"in {0} horas","other":"in {0} hr."},"past":{"one":"{0} horas retro","other":"{0} hr. retro"}},"hour-narrow":{"0":"iste hora","future":{"one":"in {0} horas","other":"in {0} hr."},"past":{"one":"{0} horas retro","other":"{0} hr. retro"}},"minute":{"0":"iste minuta","future":{"one":"in {0} minutas","other":"in {0} minutas"},"past":{"one":"{0} minutas retro","other":"{0} minutas retro"}},"minute-short":{"0":"iste minuta","future":{"one":"in {0} minutas","other":"in {0} min."},"past":{"one":"{0} minutas retro","other":"{0} min. retro"}},"minute-narrow":{"0":"iste minuta","future":{"one":"in {0} minutas","other":"in {0} min."},"past":{"one":"{0} minutas retro","other":"{0} min. retro"}},"second":{"0":"ora","future":{"one":"in {0} secundas","other":"in {0} secundas"},"past":{"one":"{0} secundas retro","other":"{0} secundas retro"}},"second-short":{"0":"ora","future":{"one":"in {0} secundas","other":"in {0} sec."},"past":{"one":"{0} secundas retro","other":"{0} sec. retro"}},"second-narrow":{"0":"ora","future":{"one":"in {0} secundas","other":"in {0} sec."},"past":{"one":"{0} secundas retro","other":"{0} sec. retro"}}},"locale":"ia"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
