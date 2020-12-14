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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ast").length
)) {
// Intl.RelativeTimeFormat.~locale.ast
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"esti añu","1":"l’añu viniente","future":{"one":"en {0} añu","other":"en {0} años"},"past":{"one":"hai {0} añu","other":"hai {0} años"},"-1":"l’añu pasáu"},"year-short":{"0":"esti añu","1":"l’añu vin.","future":{"one":"en {0} añu","other":"en {0} años"},"past":{"one":"hai {0} añu","other":"hai {0} años"},"-1":"l’añu pas."},"year-narrow":{"0":"esti añu","1":"añu vin.","future":{"one":"en {0} a.","other":"en {0} a."},"past":{"one":"hai {0} a.","other":"hai {0} a."},"-1":"añu pas."},"quarter":{"0":"esti trimestre","1":"trimestre viniente","future":{"one":"en {0} trimestre","other":"en {0} trimestres"},"past":{"one":"hai {0} trimestre","other":"hai {0} trimestres"},"-1":"trimestre anterior"},"quarter-short":{"0":"esti trim.","1":"trim. vin.","future":{"one":"en {0} trim.","other":"en {0} trim."},"past":{"one":"hai {0} trim.","other":"hai {0} trim."},"-1":"trim. ant."},"quarter-narrow":{"0":"esti trim.","1":"trim. vin.","future":{"one":"en {0} tr.","other":"en {0} tr."},"past":{"one":"hai {0} tr.","other":"hai {0} tr."},"-1":"trim. ant."},"month":{"0":"esti mes","1":"el mes viniente","future":{"one":"en {0} mes","other":"en {0} meses"},"past":{"one":"hai {0} mes","other":"hai {0} meses"},"-1":"el mes pasáu"},"month-short":{"0":"esti mes","1":"mes vin.","future":{"one":"en {0} mes","other":"en {0} meses"},"past":{"one":"hai {0} mes","other":"hai {0} meses"},"-1":"mes pas."},"month-narrow":{"0":"esti mes","1":"mes vin.","future":{"one":"en {0} m.","other":"en {0} m."},"past":{"one":"hai {0} m.","other":"hai {0} m."},"-1":"mes pas."},"week":{"0":"esta selmana","1":"la selmana viniente","future":{"one":"en {0} selmana","other":"en {0} selmanes"},"past":{"one":"hai {0} selmana","other":"hai {0} selmanes"},"-1":"la selmana pasada"},"week-short":{"0":"esta selm.","1":"selm. viniente","future":{"one":"en {0} selm.","other":"en {0} selm."},"past":{"one":"hai {0} selm.","other":"hai {0} selm."},"-1":"selm. pasada"},"week-narrow":{"0":"esta selm.","1":"selm. vin.","future":{"one":"en {0} se.","other":"en {0} se."},"past":{"one":"hai {0} se.","other":"hai {0} se."},"-1":"selm. pas."},"day":{"0":"güei","1":"mañana","2":"pasao mañana","future":{"one":"en {0} día","other":"en {0} díes"},"past":{"one":"hai {0} día","other":"hai {0} díes"},"-2":"antayeri","-1":"ayeri"},"day-short":{"0":"güei","1":"mañana","2":"pasao mañana","future":{"one":"en {0} día","other":"en {0} díes"},"past":{"one":"hai {0} día","other":"hai {0} díes"},"-2":"antayeri","-1":"ayeri"},"day-narrow":{"0":"güei","1":"mañ.","2":"p. mañ.","future":{"one":"en {0} d.","other":"en {0} d."},"past":{"one":"hai {0} d.","other":"hai {0} d."},"-2":"antay.","-1":"ayeri"},"hour":{"0":"esta hora","future":{"one":"en {0} hora","other":"en {0} hores"},"past":{"one":"hai {0} hora","other":"hai {0} hores"}},"hour-short":{"0":"esta hora","future":{"one":"en {0} h.","other":"en {0} h."},"past":{"one":"hai {0} h.","other":"hai {0} h."}},"hour-narrow":{"0":"esta h.","future":{"one":"en {0} h.","other":"en {0} h."},"past":{"one":"hai {0} h.","other":"hai {0} h."}},"minute":{"0":"esti minutu","future":{"one":"en {0} minutu","other":"en {0} minutos"},"past":{"one":"hai {0} minutu","other":"hai {0} minutos"}},"minute-short":{"0":"esti min.","future":{"one":"en {0} min.","other":"en {0} min."},"past":{"one":"hai {0} min.","other":"hai {0} min."}},"minute-narrow":{"0":"esti min.","future":{"one":"en {0} min.","other":"en {0} min."},"past":{"one":"hai {0} min.","other":"hai {0} min."}},"second":{"0":"agora","future":{"one":"en {0} segundu","other":"en {0} segundos"},"past":{"one":"hai {0} segundu","other":"hai {0} segundos"}},"second-short":{"0":"agora","future":{"one":"en {0} seg.","other":"en {0} seg."},"past":{"one":"hai {0} seg.","other":"hai {0} seg."}},"second-narrow":{"0":"agora","future":{"one":"en {0} s.","other":"en {0} s."},"past":{"one":"hai {0} s.","other":"hai {0} s."}}},"locale":"ast"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
