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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("kea").length
)) {
// Intl.RelativeTimeFormat.~locale.kea
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"kea":{"nu":["latn"],"year":{"0":"es anu li","1":"prósimu anu","future":{"other":"di li {0} anu"},"past":{"other":"a ten {0} anu"},"-1":"anu pasadu"},"year-short":{"0":"es anu li","1":"prósimu anu","future":{"other":"di li {0} anu"},"past":{"other":"a ten {0} anu"},"-1":"anu pasadu"},"year-narrow":{"0":"es anu li","1":"prósimu anu","future":{"other":"di li {0} anu"},"past":{"other":"a ten {0} anu"},"-1":"anu pasadu"},"quarter":{"0":"es trimestri li","1":"prósimu trimestri","future":{"other":"di li {0} trimestri"},"past":{"other":"a ten {0} trimestri"},"-1":"trimestri pasadu"},"quarter-short":{"0":"es trimestri li","1":"prósimu trimestri","future":{"other":"di li {0} trim."},"past":{"other":"a ten {0} trim."},"-1":"trimestri pasadu"},"quarter-narrow":{"0":"es trimestri li","1":"prósimu trimestri","future":{"other":"di li {0} trim."},"past":{"other":"a ten {0} trim."},"-1":"trimestri pasadu"},"month":{"0":"es mes li","1":"prósimu mes","future":{"other":"di li {0} mes"},"past":{"other":"a ten {0} mes"},"-1":"mes pasadu"},"month-short":{"0":"es mes li","1":"prósimu mes","future":{"other":"di li {0} mes"},"past":{"other":"a ten {0} mes"},"-1":"mes pasadu"},"month-narrow":{"0":"es mes li","1":"prósimu mes","future":{"other":"di li {0} mes"},"past":{"other":"a ten {0} mes"},"-1":"mes pasadu"},"week":{"0":"es simana li","1":"prósimu simana","future":{"other":"di li {0} simana"},"past":{"other":"a ten {0} simana"},"-1":"simana pasadu"},"week-short":{"0":"es simana li","1":"prósimu simana","future":{"other":"di li {0} sim."},"past":{"other":"a ten {0} sim."},"-1":"simana pasadu"},"week-narrow":{"0":"es simana li","1":"prósimu simana","future":{"other":"di li {0} sim."},"past":{"other":"a ten {0} sim."},"-1":"simana pasadu"},"day":{"0":"oji","1":"manhan","future":{"other":"di li {0} dia"},"past":{"other":"a ten {0} dia"},"-1":"onti"},"day-short":{"0":"oji","1":"manhan","future":{"other":"di li {0} dia"},"past":{"other":"a ten {0} dia"},"-1":"onti"},"day-narrow":{"0":"oji","1":"manhan","future":{"other":"di li {0} dia"},"past":{"other":"a ten {0} dia"},"-1":"onti"},"hour":{"0":"es ora li","future":{"other":"di li {0} ora"},"past":{"other":"a ten {0} ora"}},"hour-short":{"0":"es ora li","future":{"other":"di li {0} ora"},"past":{"other":"a ten {0} ora"}},"hour-narrow":{"0":"es ora li","future":{"other":"di li {0} ora"},"past":{"other":"a ten {0} ora"}},"minute":{"0":"es minutu li","future":{"other":"di li {0} minutu"},"past":{"other":"a ten {0} minutu"}},"minute-short":{"0":"es minutu li","future":{"other":"di li {0} min"},"past":{"other":"a ten {0} min"}},"minute-narrow":{"0":"es minutu li","future":{"other":"di li {0} m"},"past":{"other":"a ten {0} m"}},"second":{"0":"agora","future":{"other":"di li {0} sigundu"},"past":{"other":"a ten {0} sigundu"}},"second-short":{"0":"agora","future":{"other":"di li {0} sig"},"past":{"other":"a ten {0} sig"}},"second-narrow":{"0":"agora","future":{"other":"di li {0} s"},"past":{"other":"a ten {0} s"}}}},"availableLocales":["kea"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
