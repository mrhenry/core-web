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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("gl").length
)) {
// Intl.RelativeTimeFormat.~locale.gl
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"gl":{"nu":["latn"],"year":{"0":"este ano","1":"o próximo ano","future":{"one":"en {0} ano","other":"en {0} anos"},"past":{"one":"hai {0} ano","other":"hai {0} anos"},"-1":"o ano pasado"},"year-short":{"0":"este ano","1":"o próximo ano","future":{"one":"en {0} ano","other":"en {0} anos"},"past":{"one":"hai {0} ano","other":"hai {0} anos"},"-1":"o ano pasado"},"year-narrow":{"0":"este ano","1":"o próx. ano","future":{"one":"en {0} ano","other":"en {0} anos"},"past":{"one":"hai {0} ano","other":"hai {0} anos"},"-1":"o ano pas."},"quarter":{"0":"este trimestre","1":"o próximo trimestre","future":{"one":"en {0} trimestre","other":"en {0} trimestres"},"past":{"one":"hai {0} trimestre","other":"hai {0} trimestres"},"-1":"o trimestre pasado"},"quarter-short":{"0":"este trim.","1":"trim. seguinte","future":{"one":"en {0} trim.","other":"en {0} trim."},"past":{"one":"hai {0} trim.","other":"hai {0} trim."},"-1":"trim. pasado"},"quarter-narrow":{"0":"este trim.","1":"trim. seguinte","future":{"one":"en {0} trim.","other":"en {0} trim."},"past":{"one":"hai {0} trim.","other":"hai {0} trim."},"-1":"trim. pasado"},"month":{"0":"este mes","1":"o próximo mes","future":{"one":"en {0} mes","other":"en {0} meses"},"past":{"one":"hai {0} mes","other":"hai {0} meses"},"-1":"o mes pasado"},"month-short":{"0":"este mes","1":"o próximo mes","future":{"one":"en {0} mes","other":"en {0} meses"},"past":{"one":"hai {0} mes","other":"hai {0} meses"},"-1":"o mes pasado"},"month-narrow":{"0":"este mes","1":"o próx. mes","future":{"one":"en {0} mes","other":"en {0} meses"},"past":{"one":"hai {0} mes","other":"hai {0} meses"},"-1":"o mes pas."},"week":{"0":"esta semana","1":"a próxima semana","future":{"one":"en {0} semana","other":"en {0} semanas"},"past":{"one":"hai {0} semana","other":"hai {0} semanas"},"-1":"a semana pasada"},"week-short":{"0":"esta sem.","1":"a próxima sem.","future":{"one":"en {0} sem.","other":"en {0} sem."},"past":{"one":"hai {0} sem.","other":"hai {0} sem."},"-1":"a sem. pasada"},"week-narrow":{"0":"esta sem.","1":"a próx. sem.","future":{"one":"en {0} sem.","other":"en {0} sem."},"past":{"one":"hai {0} sem.","other":"hai {0} sem."},"-1":"a sem. pas."},"day":{"0":"hoxe","1":"mañá","2":"pasadomañá","future":{"one":"en {0} día","other":"en {0} días"},"past":{"one":"hai {0} día","other":"hai {0} días"},"-2":"antonte","-1":"onte"},"day-short":{"0":"hoxe","1":"mañá","2":"pasadomañá","future":{"one":"en {0} día","other":"en {0} días"},"past":{"one":"hai {0} día","other":"hai {0} días"},"-2":"antonte","-1":"onte"},"day-narrow":{"0":"hoxe","1":"mañá","2":"pasadomañá","future":{"one":"en {0} día","other":"en {0} días"},"past":{"one":"hai {0} día","other":"hai {0} días"},"-2":"antonte","-1":"onte"},"hour":{"0":"esta hora","future":{"one":"en {0} hora","other":"en {0} horas"},"past":{"one":"hai {0} hora","other":"hai {0} horas"}},"hour-short":{"0":"esta hora","future":{"one":"en {0} h","other":"en {0} h"},"past":{"one":"hai {0} h","other":"hai {0} h"}},"hour-narrow":{"0":"esta hora","future":{"one":"en {0} h","other":"en {0} h"},"past":{"one":"hai {0} h","other":"hai {0} h"}},"minute":{"0":"este minuto","future":{"one":"en {0} minuto","other":"en {0} minutos"},"past":{"one":"hai {0} minuto","other":"hai {0} minutos"}},"minute-short":{"0":"este minuto","future":{"one":"en {0} min","other":"en {0} min"},"past":{"one":"hai {0} min","other":"hai {0} min"}},"minute-narrow":{"0":"este minuto","future":{"one":"en {0} min","other":"en {0} min"},"past":{"one":"hai {0} min","other":"hai {0} min"}},"second":{"0":"agora","future":{"one":"en {0} segundo","other":"en {0} segundos"},"past":{"one":"hai {0} segundo","other":"hai {0} segundos"}},"second-short":{"0":"agora","future":{"one":"en {0} s","other":"en {0} s"},"past":{"one":"hai {0} s","other":"hai {0} s"}},"second-narrow":{"0":"agora","future":{"one":"en {0} s","other":"en {0} s"},"past":{"one":"hai {0} s","other":"hai {0} s"}}}},"availableLocales":["gl"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
