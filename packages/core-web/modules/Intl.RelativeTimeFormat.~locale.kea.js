import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
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
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("kea").length
)) {
// Intl.RelativeTimeFormat.~locale.kea
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"kea":{"nu":["latn"],"year":{"0":"es anu li","1":"prósimu anu","future":{"other":"di li {0} anu"},"past":{"other":"a ten {0} anu"},"-1":"anu pasadu"},"year-short":{"0":"es anu li","1":"prósimu anu","future":{"other":"di li {0} anu"},"past":{"other":"a ten {0} anu"},"-1":"anu pasadu"},"year-narrow":{"0":"es anu li","1":"prósimu anu","future":{"other":"di li {0} anu"},"past":{"other":"a ten {0} anu"},"-1":"anu pasadu"},"quarter":{"0":"es trimestri li","1":"prósimu trimestri","future":{"other":"di li {0} trimestri"},"past":{"other":"a ten {0} trimestri"},"-1":"trimestri pasadu"},"quarter-short":{"0":"es trimestri li","1":"prósimu trimestri","future":{"other":"di li {0} trim."},"past":{"other":"a ten {0} trim."},"-1":"trimestri pasadu"},"quarter-narrow":{"0":"es trimestri li","1":"prósimu trimestri","future":{"other":"di li {0} trim."},"past":{"other":"a ten {0} trim."},"-1":"trimestri pasadu"},"month":{"0":"es mes li","1":"prósimu mes","future":{"other":"di li {0} mes"},"past":{"other":"a ten {0} mes"},"-1":"mes pasadu"},"month-short":{"0":"es mes li","1":"prósimu mes","future":{"other":"di li {0} mes"},"past":{"other":"a ten {0} mes"},"-1":"mes pasadu"},"month-narrow":{"0":"es mes li","1":"prósimu mes","future":{"other":"di li {0} mes"},"past":{"other":"a ten {0} mes"},"-1":"mes pasadu"},"week":{"0":"es simana li","1":"prósimu simana","future":{"other":"di li {0} simana"},"past":{"other":"a ten {0} simana"},"-1":"simana pasadu"},"week-short":{"0":"es simana li","1":"prósimu simana","future":{"other":"di li {0} sim."},"past":{"other":"a ten {0} sim."},"-1":"simana pasadu"},"week-narrow":{"0":"es simana li","1":"prósimu simana","future":{"other":"di li {0} sim."},"past":{"other":"a ten {0} sim."},"-1":"simana pasadu"},"day":{"0":"oji","1":"manhan","future":{"other":"di li {0} dia"},"past":{"other":"a ten {0} dia"},"-1":"onti"},"day-short":{"0":"oji","1":"manhan","future":{"other":"di li {0} dia"},"past":{"other":"a ten {0} dia"},"-1":"onti"},"day-narrow":{"0":"oji","1":"manhan","future":{"other":"di li {0} dia"},"past":{"other":"a ten {0} dia"},"-1":"onti"},"hour":{"0":"es ora li","future":{"other":"di li {0} ora"},"past":{"other":"a ten {0} ora"}},"hour-short":{"0":"es ora li","future":{"other":"di li {0} ora"},"past":{"other":"a ten {0} ora"}},"hour-narrow":{"0":"es ora li","future":{"other":"di li {0} ora"},"past":{"other":"a ten {0} ora"}},"minute":{"0":"es minutu li","future":{"other":"di li {0} minutu"},"past":{"other":"a ten {0} minutu"}},"minute-short":{"0":"es minutu li","future":{"other":"di li {0} min"},"past":{"other":"a ten {0} min"}},"minute-narrow":{"0":"es minutu li","future":{"other":"di li {0} m"},"past":{"other":"a ten {0} m"}},"second":{"0":"agora","future":{"other":"di li {0} sigundu"},"past":{"other":"a ten {0} sigundu"}},"second-short":{"0":"agora","future":{"other":"di li {0} sig"},"past":{"other":"a ten {0} sig"}},"second-narrow":{"0":"agora","future":{"other":"di li {0} s"},"past":{"other":"a ten {0} s"}}}},"availableLocales":["kea"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
