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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ce").length
)) {
// Intl.RelativeTimeFormat.~locale.ce
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ce":{"nu":["latn"],"year":{"0":"карарчу шарахь","1":"рогӀерчу шарахь","future":{"one":"{0} шо даьлча","other":"{0} шо даьлча"},"past":{"one":"{0} шо хьалха","other":"{0} шо хьалха"},"-1":"даханчу шарахь"},"year-short":{"0":"карарчу шарахь","1":"рогӀерчу шарахь","future":{"one":"{0} ш. даьлча","other":"{0} ш. даьлча"},"past":{"one":"{0} ш. хьалха","other":"{0} ш. хьалха"},"-1":"даханчу шарахь"},"year-narrow":{"0":"карарчу шарахь","1":"рогӀерчу шарахь","future":{"one":"{0} ш. даьлча","other":"{0} ш. даьлча"},"past":{"one":"{0} ш. хьалха","other":"{0} ш. хьалха"},"-1":"даханчу шарахь"},"quarter":{"0":"this quarter","1":"next quarter","future":{"one":"{0} квартал яьлча","other":"{0} квартал яьлча"},"past":{"one":"{0} квартал хьалха","other":"{0} квартал хьалха"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"one":"{0} кв. яьлча","other":"{0} кв. яьлча"},"past":{"one":"{0} кв. хьалха","other":"{0} кв. хьалха"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"one":"{0} кв. яьлча","other":"{0} кв. яьлча"},"past":{"one":"{0} кв. хьалха","other":"{0} кв. хьалха"},"-1":"last quarter"},"month":{"0":"карарчу баттахь","1":"рогӀерчу баттахь","future":{"one":"{0} бутт баьлча","other":"{0} бутт баьлча"},"past":{"one":"{0} бутт хьалха","other":"{0} бутт хьалха"},"-1":"баханчу баттахь"},"month-short":{"0":"карарчу баттахь","1":"рогӀерчу баттахь","future":{"one":"{0} б. баьлча","other":"{0} б. баьлча"},"past":{"one":"{0} б. хьалха","other":"{0} б. хьалха"},"-1":"баханчу баттахь"},"month-narrow":{"0":"карарчу баттахь","1":"рогӀерчу баттахь","future":{"one":"{0} б. баьлча","other":"{0} б. баьлча"},"past":{"one":"{0} б. хьалха","other":"{0} б. хьалха"},"-1":"баханчу баттахь"},"week":{"0":"карарчу кӀирнахь","1":"рогӀерчу кӀирнахь","future":{"one":"{0} кӀира даьлча","other":"{0} кӀира даьлча"},"past":{"one":"{0} кӀира хьалха","other":"{0} кӀира хьалха"},"-1":"даханчу кӀирнахь"},"week-short":{"0":"карарчу кӀирнахь","1":"рогӀерчу кӀирнахь","future":{"one":"{0} кӀир. даьлча","other":"{0} кӀир. даьлча"},"past":{"one":"{0} кӀир. хьалха","other":"{0} кӀир. хьалха"},"-1":"даханчу кӀирнахь"},"week-narrow":{"0":"карарчу кӀирнахь","1":"рогӀерчу кӀирнахь","future":{"one":"{0} кӀир. даьлча","other":"{0} кӀир. даьлча"},"past":{"one":"{0} кӀир. хьалха","other":"{0} кӀир. хьалха"},"-1":"даханчу кӀирнахь"},"day":{"0":"тахана","1":"кхана","future":{"one":"{0} де даьлча","other":"{0} де даьлча"},"past":{"one":"{0} де хьалха","other":"{0} де хьалха"},"-1":"селхана"},"day-short":{"0":"тахана","1":"кхана","future":{"one":"{0} д. даьлча","other":"{0} д. даьлча"},"past":{"one":"{0} д. хьалха","other":"{0} де хьалха"},"-1":"селхана"},"day-narrow":{"0":"тахана","1":"кхана","future":{"one":"{0} д. даьлча","other":"{0} д. даьлча"},"past":{"one":"де хьалха","other":"{0} де хьалха"},"-1":"селхана"},"hour":{"0":"хӀокху сахьтехь","future":{"one":"{0} сахьт даьлча","other":"{0} сахьт даьлча"},"past":{"one":"{0} сахьт хьалха","other":"{0} сахьт хьалха"}},"hour-short":{"0":"хӀокху сахьтехь","future":{"one":"{0} сахь. даьлча","other":"{0} сахь. даьлча"},"past":{"one":"{0} сахь. хьалха","other":"{0} сахь. хьалха"}},"hour-narrow":{"0":"хӀокху сахьтехь","future":{"one":"{0} сахь. даьлча","other":"{0} сахь. даьлча"},"past":{"one":"{0} сахь. хьалха","other":"{0} сахь. хьалха"}},"minute":{"0":"хӀокху минотехь","future":{"one":"{0} минот яьлча","other":"{0} минот яьлча"},"past":{"one":"{0} минот хьалха","other":"{0} минот хьалха"}},"minute-short":{"0":"хӀокху минотехь","future":{"one":"{0} мин. яьлча","other":"{0} мин. яьлча"},"past":{"one":"{0} мин. хьалха","other":"{0} мин. хьалха"}},"minute-narrow":{"0":"хӀокху минотехь","future":{"one":"{0} мин. яьлча","other":"{0} мин. яьлча"},"past":{"one":"{0} мин. хьалха","other":"{0} мин. хьалха"}},"second":{"0":"хӀинца","future":{"one":"{0} секунд яьлча","other":"{0} секунд яьлча"},"past":{"one":"{0} секунд хьалха","other":"{0} секунд хьалха"}},"second-short":{"0":"хӀинца","future":{"one":"{0} сек. яьлча","other":"{0} сек. яьлча"},"past":{"one":"{0} сек. хьалха","other":"{0} сек. хьалха"}},"second-narrow":{"0":"хӀинца","future":{"one":"{0} сек. яьлча","other":"{0} сек. яьлча"},"past":{"one":"{0} сек. хьалха","other":"{0} сек. хьалха"}}}},"availableLocales":["ce"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
