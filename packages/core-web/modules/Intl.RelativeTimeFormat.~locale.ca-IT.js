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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ca-IT").length
)) {
// Intl.RelativeTimeFormat.~locale.ca-IT
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"enguany","1":"l’any que ve","future":{"one":"d’aquí a {0} any","other":"d’aquí a {0} anys"},"past":{"one":"fa {0} any","other":"fa {0} anys"},"-1":"l’any passat"},"year-short":{"0":"enguany","1":"l’any que ve","future":{"one":"d’aquí a {0} any","other":"d’aquí a {0} anys"},"past":{"one":"fa {0} any","other":"fa {0} anys"},"-1":"l’any passat"},"year-narrow":{"0":"enguany","1":"l’any que ve","future":{"one":"d’aquí a {0} any","other":"d’aquí a {0} anys"},"past":{"one":"fa {0} any","other":"fa {0} anys"},"-1":"l’any passat"},"quarter":{"0":"aquest trimestre","1":"el trimestre que ve","future":{"one":"d’aquí a {0} trimestre","other":"d’aquí a {0} trimestres"},"past":{"one":"fa {0} trimestre","other":"fa {0} trimestres"},"-1":"el trimestre passat"},"quarter-short":{"0":"aquest trim.","1":"el trim. que ve","future":{"one":"d’aquí a {0} trim.","other":"d’aquí a {0} trim."},"past":{"one":"fa {0} trim.","other":"fa {0} trim."},"-1":"el trim. passat"},"quarter-narrow":{"0":"aquest trim.","1":"trim. vinent","future":{"one":"d’aquí a {0} trim.","other":"d’aquí a {0} trim."},"past":{"one":"fa {0} trim.","other":"fa {0} trim."},"-1":"trim. passat"},"month":{"0":"aquest mes","1":"el mes que ve","future":{"one":"d’aquí a {0} mes","other":"d’aquí a {0} mesos"},"past":{"one":"fa {0} mes","other":"fa {0} mesos"},"-1":"el mes passat"},"month-short":{"0":"aquest mes","1":"el mes que ve","future":{"one":"d’aquí a {0} mes","other":"d’aquí a {0} mesos"},"past":{"one":"fa {0} mes","other":"fa {0} mesos"},"-1":"el mes passat"},"month-narrow":{"0":"aquest mes","1":"el mes que ve","future":{"one":"d’aquí a {0} mes","other":"d’aquí a {0} mesos"},"past":{"one":"fa {0} mes","other":"fa {0} mesos"},"-1":"el mes passat"},"week":{"0":"aquesta setmana","1":"la setmana que ve","future":{"one":"d’aquí a {0} setmana","other":"d’aquí a {0} setmanes"},"past":{"one":"fa {0} setmana","other":"fa {0} setmanes"},"-1":"la setmana passada"},"week-short":{"0":"aquesta setm.","1":"la setm. que ve","future":{"one":"d’aquí a {0} setm.","other":"d’aquí a {0} setm."},"past":{"one":"fa {0} setm.","other":"fa {0} setm."},"-1":"la setm. passada"},"week-narrow":{"0":"aquesta setm.","1":"la setm. que ve","future":{"one":"d’aquí a {0} setm.","other":"d’aquí a {0} setm."},"past":{"one":"fa {0} setm.","other":"fa {0} setm."},"-1":"la setm. passada"},"day":{"0":"avui","1":"demà","2":"demà passat","future":{"one":"d’aquí a {0} dia","other":"d’aquí a {0} dies"},"past":{"one":"fa {0} dia","other":"fa {0} dies"},"-2":"abans-d’ahir","-1":"ahir"},"day-short":{"0":"avui","1":"demà","2":"demà passat","future":{"one":"d’aquí a {0} dia","other":"d’aquí a {0} dies"},"past":{"one":"fa {0} dia","other":"fa {0} dies"},"-2":"abans-d’ahir","-1":"ahir"},"day-narrow":{"0":"avui","1":"demà","2":"demà passat","future":{"one":"d’aquí a {0} dia","other":"d’aquí a {0} dies"},"past":{"one":"fa {0} dia","other":"fa {0} dies"},"-2":"abans-d’ahir","-1":"ahir"},"hour":{"0":"aquesta hora","future":{"one":"d’aquí a {0} hora","other":"d’aquí a {0} hores"},"past":{"one":"fa {0} hora","other":"fa {0} hores"}},"hour-short":{"0":"aquesta hora","future":{"one":"d’aquí a {0} h","other":"d’aquí a {0} h"},"past":{"one":"fa {0} h","other":"fa {0} h"}},"hour-narrow":{"0":"aquesta hora","future":{"one":"d‘aquí a {0} h","other":"d‘aquí a {0} h"},"past":{"one":"fa {0} h","other":"fa {0} h"}},"minute":{"0":"aquest minut","future":{"one":"d’aquí a {0} minut","other":"d’aquí a {0} minuts"},"past":{"one":"fa {0} minut","other":"fa {0} minuts"}},"minute-short":{"0":"aquest minut","future":{"one":"d’aquí a {0} min","other":"d’aquí a {0} min"},"past":{"one":"fa {0} min","other":"fa {0} min"}},"minute-narrow":{"0":"aquest minut","future":{"one":"d’aquí a {0} min","other":"d’aquí a {0} min"},"past":{"one":"fa {0} min","other":"fa {0} min"}},"second":{"0":"ara","future":{"one":"d’aquí a {0} segon","other":"d’aquí a {0} segons"},"past":{"one":"fa {0} segon","other":"fa {0} segons"}},"second-short":{"0":"ara","future":{"one":"d’aquí a {0} s","other":"d’aquí a {0} s"},"past":{"one":"fa {0} s","other":"fa {0} s"}},"second-narrow":{"0":"ara","future":{"one":"d’aquí a {0} s","other":"d’aquí a {0} s"},"past":{"one":"fa {0} s","other":"fa {0} s"}}},"locale":"ca-IT"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
