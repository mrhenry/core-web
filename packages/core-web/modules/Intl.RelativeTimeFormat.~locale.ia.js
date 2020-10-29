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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ia").length
)) {
// Intl.RelativeTimeFormat.~locale.ia
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ia":{"nu":["latn"],"year":{"0":"iste anno","1":"le anno proxime","future":{"one":"in {0} annos","other":"in {0} annos"},"past":{"one":"{0} annos retro","other":"{0} annos retro"},"-1":"le anno passate"},"year-short":{"0":"iste anno","1":"le anno proxime","future":{"one":"in {0} annos","other":"in {0} an."},"past":{"one":"{0} annos retro","other":"{0} an. retro"},"-1":"le anno passate"},"year-narrow":{"0":"iste anno","1":"le anno proxime","future":{"one":"in {0} annos","other":"in {0} an."},"past":{"one":"{0} annos retro","other":"{0} an. retro"},"-1":"le anno passate"},"quarter":{"0":"iste trimestre","1":"le trimestre proxime","future":{"one":"in {0} trimestres","other":"in {0} trimestres"},"past":{"one":"in {0} trimestres","other":"in {0} trimestres"},"-1":"le trimestre passate"},"quarter-short":{"0":"iste trimestre","1":"le trimestre proxime","future":{"one":"in {0} trimestres","other":"in {0} trim."},"past":{"one":"in {0} trimestres","other":"{0} trim. retro"},"-1":"le trimestre passate"},"quarter-narrow":{"0":"iste trimestre","1":"le trimestre proxime","future":{"one":"in {0} trimestres","other":"in {0} trim."},"past":{"one":"in {0} trimestres","other":"{0} trim. retro"},"-1":"le trimestre passate"},"month":{"0":"iste mense","1":"le mense proxime","future":{"one":"in {0} menses","other":"in {0} menses"},"past":{"one":"{0} menses retro","other":"{0} menses retro"},"-1":"le mense passate"},"month-short":{"0":"iste mense","1":"le mense proxime","future":{"one":"in {0} menses","other":"in {0} mns."},"past":{"one":"{0} menses retro","other":"{0} mns. retro"},"-1":"le mense passate"},"month-narrow":{"0":"iste mense","1":"le mense proxime","future":{"one":"in {0} menses","other":"in {0} mns."},"past":{"one":"{0} menses retro","other":"{0} mns. retro"},"-1":"le mense passate"},"week":{"0":"iste septimana","1":"le septimana proxime","future":{"one":"in {0} septimanas","other":"in {0} septimanas"},"past":{"one":"{0} septimanas retro","other":"{0} septimanas retro"},"-1":"le septimana passate"},"week-short":{"0":"iste septimana","1":"le septimana proxime","future":{"one":"in {0} septimanas","other":"in {0} sept."},"past":{"one":"{0} septimanas retro","other":"{0} sept. retro"},"-1":"le septimana passate"},"week-narrow":{"0":"iste septimana","1":"le septimana proxime","future":{"one":"in {0} septimanas","other":"in {0} sept."},"past":{"one":"{0} septimanas retro","other":"{0} sept. retro"},"-1":"le septimana passate"},"day":{"0":"hodie","1":"deman","future":{"one":"in {0} dies","other":"in {0} dies"},"past":{"one":"{0} dies retro","other":"{0} dies retro"},"-1":"heri"},"day-short":{"0":"hodie","1":"deman","future":{"one":"in {0} dies","other":"in {0} dies"},"past":{"one":"{0} dies retro","other":"{0} dies retro"},"-1":"heri"},"day-narrow":{"0":"hodie","1":"deman","future":{"one":"in {0} dies","other":"in {0} dies"},"past":{"one":"{0} dies retro","other":"{0} dies retro"},"-1":"heri"},"hour":{"0":"iste hora","future":{"one":"in {0} horas","other":"in {0} horas"},"past":{"one":"{0} horas retro","other":"{0} horas retro"}},"hour-short":{"0":"iste hora","future":{"one":"in {0} horas","other":"in {0} hr."},"past":{"one":"{0} horas retro","other":"{0} hr. retro"}},"hour-narrow":{"0":"iste hora","future":{"one":"in {0} horas","other":"in {0} hr."},"past":{"one":"{0} horas retro","other":"{0} hr. retro"}},"minute":{"0":"iste minuta","future":{"one":"in {0} minutas","other":"in {0} minutas"},"past":{"one":"{0} minutas retro","other":"{0} minutas retro"}},"minute-short":{"0":"iste minuta","future":{"one":"in {0} minutas","other":"in {0} min."},"past":{"one":"{0} minutas retro","other":"{0} min. retro"}},"minute-narrow":{"0":"iste minuta","future":{"one":"in {0} minutas","other":"in {0} min."},"past":{"one":"{0} minutas retro","other":"{0} min. retro"}},"second":{"0":"ora","future":{"one":"in {0} secundas","other":"in {0} secundas"},"past":{"one":"{0} secundas retro","other":"{0} secundas retro"}},"second-short":{"0":"ora","future":{"one":"in {0} secundas","other":"in {0} sec."},"past":{"one":"{0} secundas retro","other":"{0} sec. retro"}},"second-narrow":{"0":"ora","future":{"one":"in {0} secundas","other":"in {0} sec."},"past":{"one":"{0} secundas retro","other":"{0} sec. retro"}}}},"availableLocales":["ia"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
