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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("bg").length
)) {
// Intl.RelativeTimeFormat.~locale.bg
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"тази година","1":"следващата година","future":{"one":"след {0} година","other":"след {0} години"},"past":{"one":"преди {0} година","other":"преди {0} години"},"-1":"миналата година"},"year-short":{"0":"т. г.","1":"следв. г.","future":{"one":"след {0} г.","other":"след {0} г."},"past":{"one":"преди {0} г.","other":"преди {0} г."},"-1":"мин. г."},"year-narrow":{"0":"т. г.","1":"сл. г.","future":{"one":"сл. {0} г.","other":"сл. {0} г."},"past":{"one":"пр. {0} г.","other":"пр. {0} г."},"-1":"мин. г."},"quarter":{"0":"това тримесечие","1":"следващо тримесечие","future":{"one":"след {0} тримесечие","other":"след {0} тримесечия"},"past":{"one":"преди {0} тримесечие","other":"преди {0} тримесечия"},"-1":"предходно тримесечие"},"quarter-short":{"0":"това трим.","1":"следв. трим.","future":{"one":"след {0} трим.","other":"след {0} трим."},"past":{"one":"преди {0} трим.","other":"преди {0} трим."},"-1":"мин. трим."},"quarter-narrow":{"0":"това трим.","1":"следв. трим.","future":{"one":"сл. {0} трим.","other":"сл. {0} трим."},"past":{"one":"пр. {0} трим.","other":"пр. {0} трим."},"-1":"мин. трим."},"month":{"0":"този месец","1":"следващ месец","future":{"one":"след {0} месец","other":"след {0} месеца"},"past":{"one":"преди {0} месец","other":"преди {0} месеца"},"-1":"предходен месец"},"month-short":{"0":"този мес.","1":"следв. мес.","future":{"one":"след {0} м.","other":"след {0} м."},"past":{"one":"преди {0} м.","other":"преди {0} м."},"-1":"мин. мес."},"month-narrow":{"0":"т. м.","1":"сл. м.","future":{"one":"сл. {0} м.","other":"сл. {0} м."},"past":{"one":"пр. {0} м.","other":"пр. {0} м."},"-1":"мин. м."},"week":{"0":"тази седмица","1":"следващата седмица","future":{"one":"след {0} седмица","other":"след {0} седмици"},"past":{"one":"преди {0} седмица","other":"преди {0} седмици"},"-1":"предходната седмица"},"week-short":{"0":"тази седм.","1":"следв. седм.","future":{"one":"след {0} седм.","other":"след {0} седм."},"past":{"one":"преди {0} седм.","other":"преди {0} седм."},"-1":"мин. седм."},"week-narrow":{"0":"тази седм.","1":"сл. седм.","future":{"one":"сл. {0} седм.","other":"сл. {0} седм."},"past":{"one":"пр. {0} седм.","other":"пр. {0} седм."},"-1":"мин. седм."},"day":{"0":"днес","1":"утре","2":"вдругиден","future":{"one":"след {0} ден","other":"след {0} дни"},"past":{"one":"преди {0} ден","other":"преди {0} дни"},"-2":"онзи ден","-1":"вчера"},"day-short":{"0":"днес","1":"утре","2":"вдругиден","future":{"one":"след {0} ден","other":"след {0} дни"},"past":{"one":"преди {0} ден","other":"преди {0} дни"},"-2":"онзи ден","-1":"вчера"},"day-narrow":{"0":"днес","1":"утре","2":"вдругиден","future":{"one":"сл. {0} д","other":"сл. {0} д"},"past":{"one":"пр. {0} д","other":"пр. {0} д"},"-2":"онзи ден","-1":"вчера"},"hour":{"0":"в този час","future":{"one":"след {0} час","other":"след {0} часа"},"past":{"one":"преди {0} час","other":"преди {0} часа"}},"hour-short":{"0":"в този час","future":{"one":"след {0} ч","other":"след {0} ч"},"past":{"one":"преди {0} ч","other":"преди {0} ч"}},"hour-narrow":{"0":"в този час","future":{"one":"сл. {0} ч","other":"сл. {0} ч"},"past":{"one":"пр. {0} ч","other":"пр. {0} ч"}},"minute":{"0":"в тази минута","future":{"one":"след {0} минута","other":"след {0} минути"},"past":{"one":"преди {0} минута","other":"преди {0} минути"}},"minute-short":{"0":"в тази минута","future":{"one":"след {0} мин","other":"след {0} мин"},"past":{"one":"преди {0} мин","other":"преди {0} мин"}},"minute-narrow":{"0":"в тази минута","future":{"one":"сл. {0} мин","other":"сл. {0} мин"},"past":{"one":"пр. {0} мин","other":"пр. {0} мин"}},"second":{"0":"сега","future":{"one":"след {0} секунда","other":"след {0} секунди"},"past":{"one":"преди {0} секунда","other":"преди {0} секунди"}},"second-short":{"0":"сега","future":{"one":"след {0} сек","other":"след {0} сек"},"past":{"one":"преди {0} сек","other":"преди {0} сек"}},"second-narrow":{"0":"сега","future":{"one":"сл. {0} сек","other":"сл. {0} сек"},"past":{"one":"пр. {0} сек","other":"пр. {0} сек"}}},"locale":"bg"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
