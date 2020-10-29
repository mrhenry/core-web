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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("es-PY").length
)) {
// Intl.RelativeTimeFormat.~locale.es-PY
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"es-PY":{"nu":["latn"],"year":{"0":"este año","1":"el próximo año","future":{"one":"dentro de {0} año","other":"dentro de {0} años"},"past":{"one":"hace {0} año","other":"hace {0} años"},"-1":"el año pasado"},"year-short":{"0":"este año","1":"el próximo año","future":{"one":"dentro de {0} a","other":"dentro de {0} a"},"past":{"one":"hace {0} a","other":"hace {0} a"},"-1":"el año pasado"},"year-narrow":{"0":"este año","1":"el próximo año","future":{"one":"dentro de {0} a","other":"dentro de {0} a"},"past":{"one":"hace {0} a","other":"hace {0} a"},"-1":"el año pasado"},"quarter":{"0":"este trimestre","1":"el próximo trimestre","future":{"one":"dentro de {0} trimestre","other":"dentro de {0} trimestres"},"past":{"one":"hace {0} trimestre","other":"hace {0} trimestres"},"-1":"el trimestre pasado"},"quarter-short":{"0":"este trimestre","1":"el próximo trimestre","future":{"one":"dentro de {0} trim.","other":"dentro de {0} trim."},"past":{"one":"hace {0} trim.","other":"hace {0} trim."},"-1":"el trimestre pasado"},"quarter-narrow":{"0":"este trimestre","1":"el próximo trimestre","future":{"one":"dentro de {0} trim.","other":"dentro de {0} trim."},"past":{"one":"hace {0} trim.","other":"hace {0} trim."},"-1":"el trimestre pasado"},"month":{"0":"este mes","1":"el próximo mes","future":{"one":"dentro de {0} mes","other":"dentro de {0} meses"},"past":{"one":"hace {0} mes","other":"hace {0} meses"},"-1":"el mes pasado"},"month-short":{"0":"este mes","1":"el próximo mes","future":{"one":"dentro de {0} m","other":"dentro de {0} m"},"past":{"one":"hace {0} m","other":"hace {0} m"},"-1":"el mes pasado"},"month-narrow":{"0":"este mes","1":"el próximo mes","future":{"one":"dentro de {0} m","other":"dentro de {0} m"},"past":{"one":"hace {0} m","other":"hace {0} m"},"-1":"el mes pasado"},"week":{"0":"esta semana","1":"la próxima semana","future":{"one":"dentro de {0} semana","other":"dentro de {0} semanas"},"past":{"one":"hace {0} semana","other":"hace {0} semanas"},"-1":"la semana pasada"},"week-short":{"0":"esta sem.","1":"próx. sem.","future":{"one":"dentro de {0} sem.","other":"dentro de {0} sem."},"past":{"one":"hace {0} sem.","other":"hace {0} sem."},"-1":"sem. pas."},"week-narrow":{"0":"esta sem.","1":"próx. sem.","future":{"one":"dentro de {0} sem.","other":"dentro de {0} sem."},"past":{"one":"hace {0} sem.","other":"hace {0} sem."},"-1":"sem. pas."},"day":{"0":"hoy","1":"mañana","2":"pasado mañana","future":{"one":"dentro de {0} día","other":"dentro de {0} días"},"past":{"one":"hace {0} día","other":"hace {0} días"},"-2":"anteayer","-1":"ayer"},"day-short":{"0":"hoy","1":"mañana","2":"pasado mañana","future":{"one":"dentro de {0} día","other":"dentro de {0} días"},"past":{"one":"hace {0} día","other":"hace {0} días"},"-2":"anteayer","-1":"ayer"},"day-narrow":{"0":"hoy","1":"mañana","2":"pasado mañana","future":{"one":"dentro de {0} día","other":"dentro de {0} días"},"past":{"one":"hace {0} día","other":"hace {0} días"},"-2":"anteayer","-1":"ayer"},"hour":{"0":"esta hora","future":{"one":"dentro de {0} hora","other":"dentro de {0} horas"},"past":{"one":"hace {0} hora","other":"hace {0} horas"}},"hour-short":{"0":"esta hora","future":{"one":"dentro de {0} h","other":"dentro de {0} h"},"past":{"one":"hace {0} h","other":"hace {0} h"}},"hour-narrow":{"0":"esta hora","future":{"one":"dentro de {0} h","other":"dentro de {0} h"},"past":{"one":"hace {0} h","other":"hace {0} h"}},"minute":{"0":"este minuto","future":{"one":"dentro de {0} minuto","other":"dentro de {0} minutos"},"past":{"one":"hace {0} minuto","other":"hace {0} minutos"}},"minute-short":{"0":"este minuto","future":{"one":"dentro de {0} min","other":"dentro de {0} min"},"past":{"one":"hace {0} min","other":"hace {0} min"}},"minute-narrow":{"0":"este minuto","future":{"one":"dentro de {0} min","other":"dentro de {0} min"},"past":{"one":"hace {0} min","other":"hace {0} min"}},"second":{"0":"ahora","future":{"one":"dentro de {0} segundo","other":"dentro de {0} segundos"},"past":{"one":"hace {0} segundo","other":"hace {0} segundos"}},"second-short":{"0":"ahora","future":{"one":"dentro de {0} seg.","other":"dentro de {0} seg."},"past":{"one":"hace {0} seg.","other":"hace {0} seg."}},"second-narrow":{"0":"ahora","future":{"one":"dentro de {0} seg.","other":"dentro de {0} seg."},"past":{"one":"hace {0} seg.","other":"hace {0} seg."}}}},"availableLocales":["es-PY"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
