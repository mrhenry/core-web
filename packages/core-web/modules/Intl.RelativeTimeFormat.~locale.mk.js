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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("mk").length
)) {
// Intl.RelativeTimeFormat.~locale.mk
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"mk":{"nu":["latn"],"year":{"0":"оваа година","1":"следната година","future":{"one":"за {0} година","other":"за {0} години"},"past":{"one":"пред {0} година","other":"пред {0} години"},"-1":"минатата година"},"year-short":{"0":"оваа год.","1":"следната год.","future":{"one":"за {0} год.","other":"за {0} год."},"past":{"one":"пред {0} год.","other":"пред {0} год."},"-1":"минатата год."},"year-narrow":{"0":"оваа год.","1":"следната год.","future":{"one":"за {0} год.","other":"за {0} год."},"past":{"one":"пред {0} год.","other":"пред {0} год."},"-1":"минатата год."},"quarter":{"0":"ова тромесечје","1":"следното тромесечје","future":{"one":"за {0} тромесечје","other":"за {0} тромесечја"},"past":{"one":"пред {0} тромесечје","other":"пред {0} тромесечја"},"-1":"последното тромесечје"},"quarter-short":{"0":"ова тромесечје","1":"следното тромесечје","future":{"one":"за {0} тромес.","other":"за {0} тромес."},"past":{"one":"пред {0} тромес.","other":"пред {0} тромес."},"-1":"последното тромесечје"},"quarter-narrow":{"0":"ова тромесечје","1":"следното тромесечје","future":{"one":"за {0} тромес.","other":"за {0} тромес."},"past":{"one":"пред {0} тромес.","other":"пред {0} тромес."},"-1":"последното тромесечје"},"month":{"0":"овој месец","1":"следниот месец","future":{"one":"за {0} месец","other":"за {0} месеци"},"past":{"one":"пред {0} месец","other":"пред {0} месеци"},"-1":"минатиот месец"},"month-short":{"0":"овој месец","1":"следниот месец","future":{"one":"за {0} месец","other":"за {0} месеци"},"past":{"one":"пред {0} месец","other":"пред {0} месеци"},"-1":"минатиот месец"},"month-narrow":{"0":"овој месец","1":"следниот месец","future":{"one":"за {0} месец","other":"за {0} месеци"},"past":{"one":"пред {0} месец","other":"пред {0} месеци"},"-1":"минатиот месец"},"week":{"0":"оваа седмица","1":"следната седмица","future":{"one":"за {0} седмица","other":"за {0} седмици"},"past":{"one":"пред {0} седмица","other":"пред {0} седмици"},"-1":"минатата седмица"},"week-short":{"0":"оваа седмица","1":"следната седмица","future":{"one":"за {0} седмица","other":"за {0} седмици"},"past":{"one":"пред {0} седмица","other":"пред {0} седмици"},"-1":"минатата седмица"},"week-narrow":{"0":"оваа седмица","1":"следната седмица","future":{"one":"за {0} седмица","other":"за {0} седмици"},"past":{"one":"пред {0} седмица","other":"пред {0} седмици"},"-1":"минатата седмица"},"day":{"0":"денес","1":"утре","2":"задутре","future":{"one":"за {0} ден","other":"за {0} дена"},"past":{"one":"пред {0} ден","other":"пред {0} дена"},"-2":"завчера","-1":"вчера"},"day-short":{"0":"денес","1":"утре","2":"задутре","future":{"one":"за {0} ден","other":"за {0} дена"},"past":{"one":"пред {0} ден","other":"пред {0} дена"},"-2":"завчера","-1":"вчера"},"day-narrow":{"0":"денес","1":"утре","2":"задутре","future":{"one":"за {0} ден","other":"за {0} дена"},"past":{"one":"пред {0} ден","other":"пред {0} дена"},"-2":"завчера","-1":"вчера"},"hour":{"0":"часов","future":{"one":"за {0} час","other":"за {0} часа"},"past":{"one":"пред {0} час","other":"пред {0} часа"}},"hour-short":{"0":"часов","future":{"one":"за {0} час","other":"за {0} часа"},"past":{"one":"пред {0} час","other":"пред {0} часа"}},"hour-narrow":{"0":"часов","future":{"one":"за {0} час","other":"за {0} часа"},"past":{"one":"пред {0} час","other":"пред {0} часа"}},"minute":{"0":"оваа минута","future":{"one":"за {0} минута","other":"за {0} минути"},"past":{"one":"пред {0} минута","other":"пред {0} минути"}},"minute-short":{"0":"оваа минута","future":{"one":"за {0} мин.","other":"за {0} мин."},"past":{"one":"пред {0} мин.","other":"пред {0} мин."}},"minute-narrow":{"0":"оваа минута","future":{"one":"за {0} мин.","other":"за {0} мин."},"past":{"one":"пред {0} мин.","other":"пред {0} мин."}},"second":{"0":"сега","future":{"one":"за {0} секунда","other":"за {0} секунди"},"past":{"one":"пред {0} секунда","other":"пред {0} секунди"}},"second-short":{"0":"сега","future":{"one":"за {0} сек.","other":"за {0} сек."},"past":{"one":"пред {0} сек.","other":"пред {0} сек."}},"second-narrow":{"0":"сега","future":{"one":"за {0} сек.","other":"за {0} сек."},"past":{"one":"пред {0} сек.","other":"пред {0} сек."}}}},"availableLocales":["mk"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
