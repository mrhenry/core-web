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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("pt-LU").length
)) {
// Intl.RelativeTimeFormat.~locale.pt-LU
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"pt-LU":{"nu":["latn"],"year":{"0":"este ano","1":"próximo ano","future":{"one":"dentro de {0} ano","other":"dentro de {0} anos"},"past":{"one":"há {0} ano","other":"há {0} anos"},"-1":"ano passado"},"year-short":{"0":"este ano","1":"próximo ano","future":{"one":"dentro de {0} ano","other":"dentro de {0} anos"},"past":{"one":"há {0} ano","other":"há {0} anos"},"-1":"ano passado"},"year-narrow":{"0":"este ano","1":"próximo ano","future":{"one":"+{0} ano","other":"+{0} anos"},"past":{"one":"-{0} ano","other":"-{0} anos"},"-1":"ano passado"},"quarter":{"0":"este trimestre","1":"próximo trimestre","future":{"one":"dentro de {0} trimestre","other":"dentro de {0} trimestres"},"past":{"one":"há {0} trimestre","other":"há {0} trimestres"},"-1":"trimestre passado"},"quarter-short":{"0":"este trim.","1":"próximo trim.","future":{"one":"dentro de {0} trim.","other":"dentro de {0} trim."},"past":{"one":"há {0} trim.","other":"há {0} trim."},"-1":"trim. passado"},"quarter-narrow":{"0":"este trim.","1":"próximo trim.","future":{"one":"+{0} trim.","other":"+{0} trim."},"past":{"one":"-{0} trim.","other":"-{0} trim."},"-1":"trim. passado"},"month":{"0":"este mês","1":"próximo mês","future":{"one":"dentro de {0} mês","other":"dentro de {0} meses"},"past":{"one":"há {0} mês","other":"há {0} meses"},"-1":"mês passado"},"month-short":{"0":"este mês","1":"próximo mês","future":{"one":"dentro de {0} mês","other":"dentro de {0} meses"},"past":{"one":"há {0} mês","other":"há {0} meses"},"-1":"mês passado"},"month-narrow":{"0":"este mês","1":"próximo mês","future":{"one":"+{0} mês","other":"+{0} meses"},"past":{"one":"-{0} mês","other":"-{0} meses"},"-1":"mês passado"},"week":{"0":"esta semana","1":"próxima semana","future":{"one":"dentro de {0} semana","other":"dentro de {0} semanas"},"past":{"one":"há {0} semana","other":"há {0} semanas"},"-1":"semana passada"},"week-short":{"0":"esta semana","1":"próxima semana","future":{"one":"dentro de {0} sem.","other":"dentro de {0} sem."},"past":{"one":"há {0} sem.","other":"há {0} sem."},"-1":"semana passada"},"week-narrow":{"0":"esta semana","1":"próxima semana","future":{"one":"+{0} sem.","other":"+{0} sem."},"past":{"one":"-{0} sem.","other":"-{0} sem."},"-1":"semana passada"},"day":{"0":"hoje","1":"amanhã","2":"depois de amanhã","future":{"one":"dentro de {0} dia","other":"dentro de {0} dias"},"past":{"one":"há {0} dia","other":"há {0} dias"},"-2":"anteontem","-1":"ontem"},"day-short":{"0":"hoje","1":"amanhã","2":"depois de amanhã","future":{"one":"dentro de {0} dia","other":"dentro de {0} dias"},"past":{"one":"há {0} dia","other":"há {0} dias"},"-2":"anteontem","-1":"ontem"},"day-narrow":{"0":"hoje","1":"amanhã","2":"depois de amanhã","future":{"one":"+{0} dia","other":"+{0} dias"},"past":{"one":"há {0} dias","other":"há {0} dias"},"-2":"anteontem","-1":"ontem"},"hour":{"0":"esta hora","future":{"one":"dentro de {0} hora","other":"dentro de {0} horas"},"past":{"one":"há {0} hora","other":"há {0} horas"}},"hour-short":{"0":"esta hora","future":{"one":"dentro de {0} h","other":"dentro de {0} h"},"past":{"one":"há {0} h","other":"há {0} h"}},"hour-narrow":{"0":"esta hora","future":{"one":"+{0} h","other":"+{0} h"},"past":{"one":"-{0} h","other":"-{0} h"}},"minute":{"0":"este minuto","future":{"one":"dentro de {0} minuto","other":"dentro de {0} minutos"},"past":{"one":"há {0} minuto","other":"há {0} minutos"}},"minute-short":{"0":"este minuto","future":{"one":"dentro de {0} min","other":"dentro de {0} min"},"past":{"one":"há {0} min","other":"há {0} min"}},"minute-narrow":{"0":"este minuto","future":{"one":"+{0} min","other":"+{0} min"},"past":{"one":"-{0} min","other":"-{0} min"}},"second":{"0":"agora","future":{"one":"dentro de {0} segundo","other":"dentro de {0} segundos"},"past":{"one":"há {0} segundo","other":"há {0} segundos"}},"second-short":{"0":"agora","future":{"one":"dentro de {0} s","other":"dentro de {0} s"},"past":{"one":"há {0} s","other":"há {0} s"}},"second-narrow":{"0":"agora","future":{"one":"+{0} s","other":"+{0} s"},"past":{"one":"-{0} s","other":"-{0} s"}}}},"availableLocales":["pt-LU"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
