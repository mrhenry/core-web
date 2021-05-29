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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("pt").length
)) {
// Intl.RelativeTimeFormat.~locale.pt
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"este ano","1":"próximo ano","future":{"one":"em {0} ano","other":"em {0} anos"},"past":{"one":"há {0} ano","other":"há {0} anos"},"-1":"ano passado"},"year-short":{"0":"este ano","1":"próximo ano","future":{"one":"em {0} ano","other":"em {0} anos"},"past":{"one":"há {0} ano","other":"há {0} anos"},"-1":"ano passado"},"year-narrow":{"0":"este ano","1":"próximo ano","future":{"one":"em {0} ano","other":"em {0} anos"},"past":{"one":"há {0} ano","other":"há {0} anos"},"-1":"ano passado"},"quarter":{"0":"este trimestre","1":"próximo trimestre","future":{"one":"em {0} trimestre","other":"em {0} trimestres"},"past":{"one":"há {0} trimestre","other":"há {0} trimestres"},"-1":"último trimestre"},"quarter-short":{"0":"este trimestre","1":"próximo trimestre","future":{"one":"em {0} trim.","other":"em {0} trim."},"past":{"one":"há {0} trim.","other":"há {0} trim."},"-1":"último trimestre"},"quarter-narrow":{"0":"este trimestre","1":"próximo trimestre","future":{"one":"em {0} trim.","other":"em {0} trim."},"past":{"one":"há {0} trim.","other":"há {0} trim."},"-1":"último trimestre"},"month":{"0":"este mês","1":"próximo mês","future":{"one":"em {0} mês","other":"em {0} meses"},"past":{"one":"há {0} mês","other":"há {0} meses"},"-1":"mês passado"},"month-short":{"0":"este mês","1":"próximo mês","future":{"one":"em {0} mês","other":"em {0} meses"},"past":{"one":"há {0} mês","other":"há {0} meses"},"-1":"mês passado"},"month-narrow":{"0":"este mês","1":"próximo mês","future":{"one":"em {0} mês","other":"em {0} meses"},"past":{"one":"há {0} mês","other":"há {0} meses"},"-1":"mês passado"},"week":{"0":"esta semana","1":"próxima semana","future":{"one":"em {0} semana","other":"em {0} semanas"},"past":{"one":"há {0} semana","other":"há {0} semanas"},"-1":"semana passada"},"week-short":{"0":"esta semana","1":"próxima semana","future":{"one":"em {0} sem.","other":"em {0} sem."},"past":{"one":"há {0} sem.","other":"há {0} sem."},"-1":"semana passada"},"week-narrow":{"0":"esta semana","1":"próxima semana","future":{"one":"em {0} sem.","other":"em {0} sem."},"past":{"one":"há {0} sem.","other":"há {0} sem."},"-1":"semana passada"},"day":{"0":"hoje","1":"amanhã","2":"depois de amanhã","future":{"one":"em {0} dia","other":"em {0} dias"},"past":{"one":"há {0} dia","other":"há {0} dias"},"-2":"anteontem","-1":"ontem"},"day-short":{"0":"hoje","1":"amanhã","2":"depois de amanhã","future":{"one":"em {0} dia","other":"em {0} dias"},"past":{"one":"há {0} dia","other":"há {0} dias"},"-2":"anteontem","-1":"ontem"},"day-narrow":{"0":"hoje","1":"amanhã","2":"depois de amanhã","future":{"one":"em {0} dia","other":"em {0} dias"},"past":{"one":"há {0} dia","other":"há {0} dias"},"-2":"anteontem","-1":"ontem"},"hour":{"0":"esta hora","future":{"one":"em {0} hora","other":"em {0} horas"},"past":{"one":"há {0} hora","other":"há {0} horas"}},"hour-short":{"0":"esta hora","future":{"one":"em {0} h","other":"em {0} h"},"past":{"one":"há {0} h","other":"há {0} h"}},"hour-narrow":{"0":"esta hora","future":{"one":"em {0} h","other":"em {0} h"},"past":{"one":"há {0} h","other":"há {0} h"}},"minute":{"0":"este minuto","future":{"one":"em {0} minuto","other":"em {0} minutos"},"past":{"one":"há {0} minuto","other":"há {0} minutos"}},"minute-short":{"0":"este minuto","future":{"one":"em {0} min.","other":"em {0} min."},"past":{"one":"há {0} min.","other":"há {0} min."}},"minute-narrow":{"0":"este minuto","future":{"one":"em {0} min.","other":"em {0} min."},"past":{"one":"há {0} min.","other":"há {0} min."}},"second":{"0":"agora","future":{"one":"em {0} segundo","other":"em {0} segundos"},"past":{"one":"há {0} segundo","other":"há {0} segundos"}},"second-short":{"0":"agora","future":{"one":"em {0} seg.","other":"em {0} seg."},"past":{"one":"há {0} seg.","other":"há {0} seg."}},"second-narrow":{"0":"agora","future":{"one":"em {0} seg.","other":"em {0} seg."},"past":{"one":"há {0} seg.","other":"há {0} seg."}}},"locale":"pt"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});