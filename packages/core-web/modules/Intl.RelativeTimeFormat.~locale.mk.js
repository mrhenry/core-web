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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("mk").length
)) {
// Intl.RelativeTimeFormat.~locale.mk
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"оваа година","1":"следната година","future":{"one":"за {0} година","other":"за {0} години"},"past":{"one":"пред {0} година","other":"пред {0} години"},"-1":"минатата година"},"year-short":{"0":"оваа год.","1":"следната год.","future":{"one":"за {0} год.","other":"за {0} год."},"past":{"one":"пред {0} год.","other":"пред {0} год."},"-1":"минатата год."},"year-narrow":{"0":"оваа год.","1":"следната год.","future":{"one":"за {0} год.","other":"за {0} год."},"past":{"one":"пред {0} год.","other":"пред {0} год."},"-1":"минатата год."},"quarter":{"0":"ова тромесечје","1":"следното тромесечје","future":{"one":"за {0} тромесечје","other":"за {0} тромесечја"},"past":{"one":"пред {0} тромесечје","other":"пред {0} тромесечја"},"-1":"последното тромесечје"},"quarter-short":{"0":"ова тромесечје","1":"следното тромесечје","future":{"one":"за {0} тромес.","other":"за {0} тромес."},"past":{"one":"пред {0} тромес.","other":"пред {0} тромес."},"-1":"последното тромесечје"},"quarter-narrow":{"0":"ова тромесечје","1":"следното тромесечје","future":{"one":"за {0} тромес.","other":"за {0} тромес."},"past":{"one":"пред {0} тромес.","other":"пред {0} тромес."},"-1":"последното тромесечје"},"month":{"0":"овој месец","1":"следниот месец","future":{"one":"за {0} месец","other":"за {0} месеци"},"past":{"one":"пред {0} месец","other":"пред {0} месеци"},"-1":"минатиот месец"},"month-short":{"0":"овој месец","1":"следниот месец","future":{"one":"за {0} месец","other":"за {0} месеци"},"past":{"one":"пред {0} месец","other":"пред {0} месеци"},"-1":"минатиот месец"},"month-narrow":{"0":"овој месец","1":"следниот месец","future":{"one":"за {0} месец","other":"за {0} месеци"},"past":{"one":"пред {0} месец","other":"пред {0} месеци"},"-1":"минатиот месец"},"week":{"0":"оваа седмица","1":"следната седмица","future":{"one":"за {0} седмица","other":"за {0} седмици"},"past":{"one":"пред {0} седмица","other":"пред {0} седмици"},"-1":"минатата седмица"},"week-short":{"0":"оваа седмица","1":"следната седмица","future":{"one":"за {0} седмица","other":"за {0} седмици"},"past":{"one":"пред {0} седмица","other":"пред {0} седмици"},"-1":"минатата седмица"},"week-narrow":{"0":"оваа седмица","1":"следната седмица","future":{"one":"за {0} седмица","other":"за {0} седмици"},"past":{"one":"пред {0} седмица","other":"пред {0} седмици"},"-1":"минатата седмица"},"day":{"0":"денес","1":"утре","2":"задутре","future":{"one":"за {0} ден","other":"за {0} дена"},"past":{"one":"пред {0} ден","other":"пред {0} дена"},"-2":"завчера","-1":"вчера"},"day-short":{"0":"денес","1":"утре","2":"задутре","future":{"one":"за {0} ден","other":"за {0} дена"},"past":{"one":"пред {0} ден","other":"пред {0} дена"},"-2":"завчера","-1":"вчера"},"day-narrow":{"0":"денес","1":"утре","2":"задутре","future":{"one":"за {0} ден","other":"за {0} дена"},"past":{"one":"пред {0} ден","other":"пред {0} дена"},"-2":"завчера","-1":"вчера"},"hour":{"0":"часов","future":{"one":"за {0} час","other":"за {0} часа"},"past":{"one":"пред {0} час","other":"пред {0} часа"}},"hour-short":{"0":"часов","future":{"one":"за {0} час","other":"за {0} часа"},"past":{"one":"пред {0} час","other":"пред {0} часа"}},"hour-narrow":{"0":"часов","future":{"one":"за {0} час","other":"за {0} часа"},"past":{"one":"пред {0} час","other":"пред {0} часа"}},"minute":{"0":"оваа минута","future":{"one":"за {0} минута","other":"за {0} минути"},"past":{"one":"пред {0} минута","other":"пред {0} минути"}},"minute-short":{"0":"оваа минута","future":{"one":"за {0} мин.","other":"за {0} мин."},"past":{"one":"пред {0} мин.","other":"пред {0} мин."}},"minute-narrow":{"0":"оваа минута","future":{"one":"за {0} мин.","other":"за {0} мин."},"past":{"one":"пред {0} мин.","other":"пред {0} мин."}},"second":{"0":"сега","future":{"one":"за {0} секунда","other":"за {0} секунди"},"past":{"one":"пред {0} секунда","other":"пред {0} секунди"}},"second-short":{"0":"сега","future":{"one":"за {0} сек.","other":"за {0} сек."},"past":{"one":"пред {0} сек.","other":"пред {0} сек."}},"second-narrow":{"0":"сега","future":{"one":"за {0} сек.","other":"за {0} сек."},"past":{"one":"пред {0} сек.","other":"пред {0} сек."}}},"locale":"mk"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
