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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ky").length
)) {
// Intl.RelativeTimeFormat.~locale.ky
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ky":{"nu":["latn"],"year":{"0":"быйыл","1":"эмдиги жылы","future":{"one":"{0} жылдан кийин","other":"{0} жылдан кийин"},"past":{"one":"{0} жыл мурун","other":"{0} жыл мурун"},"-1":"былтыр"},"year-short":{"0":"быйыл","1":"эмдиги жылы","future":{"one":"{0} жыл. кийин","other":"{0} жыл. кийин"},"past":{"one":"{0} жыл мурун","other":"{0} жыл мурун"},"-1":"былтыр"},"year-narrow":{"0":"быйыл","1":"эмдиги жылы","future":{"one":"{0} жыл. кийин","other":"{0} жыл. кийин"},"past":{"one":"{0} жыл мурун","other":"{0} жыл мурун"},"-1":"былтыр"},"quarter":{"0":"бул чейрек","1":"кийинки чейрек","future":{"one":"{0} чейректен кийин","other":"{0} чейректен кийин"},"past":{"one":"{0} чейрек мурун","other":"{0} чейрек мурун"},"-1":"акыркы чейрек"},"quarter-short":{"0":"бул чейр.","1":"кийинки чейр.","future":{"one":"{0} чейректен кийин","other":"{0} чейректен кийин"},"past":{"one":"{0} чейр. мурун","other":"{0} чейр. мурун"},"-1":"акыркы чейр."},"quarter-narrow":{"0":"бул чейр.","1":"кийинки чейр.","future":{"one":"{0} чейр. кийин","other":"{0} чейр. кийин"},"past":{"one":"{0} чейр. мурун","other":"{0} чейр. мурун"},"-1":"акыркы чейр."},"month":{"0":"бул айда","1":"эмдиги айда","future":{"one":"{0} айдан кийин","other":"{0} айдан кийин"},"past":{"one":"{0} ай мурун","other":"{0} ай мурун"},"-1":"өткөн айда"},"month-short":{"0":"бул айда","1":"эмдиги айда","future":{"one":"{0} айд. кийин","other":"{0} айд. кийин"},"past":{"one":"{0} ай мурун","other":"{0} ай мурун"},"-1":"өткөн айда"},"month-narrow":{"0":"бул айда","1":"эмдиги айда","future":{"one":"{0} айд. кийн","other":"{0} айд. кийн"},"past":{"one":"{0} ай мурн","other":"{0} ай мурн"},"-1":"өткөн айда"},"week":{"0":"ушул аптада","1":"келерки аптада","future":{"one":"{0} аптадан кийин","other":"{0} аптадан кийин"},"past":{"one":"{0} апта мурун","other":"{0} апта мурун"},"-1":"өткөн аптада"},"week-short":{"0":"ушул апт.","1":"келерки апт.","future":{"one":"{0} апт. кийин","other":"{0} апт. кийин"},"past":{"one":"{0} апт. мурун","other":"{0} апт. мурун"},"-1":"өткөн апт."},"week-narrow":{"0":"ушул апт.","1":"келерки апт.","future":{"one":"{0} апт. кийин","other":"{0} апт. кийин"},"past":{"one":"{0} апт. мурун","other":"{0} апт. мурун"},"-1":"өткөн апт."},"day":{"0":"бүгүн","1":"эртең","2":"бүрсүгүнү","future":{"one":"{0} күндөн кийин","other":"{0} күндөн кийин"},"past":{"one":"{0} күн мурун","other":"{0} күн мурун"},"-2":"мурдагы күнү","-1":"кечээ"},"day-short":{"0":"бүгүн","1":"эртең","2":"бүрсүгүнү","future":{"one":"{0} күн. кийин","other":"{0} күн. кийин"},"past":{"one":"{0} күн мурун","other":"{0} күн мурун"},"-2":"мурдагы күнү","-1":"кечээ"},"day-narrow":{"0":"бүгүн","1":"эртең","2":"бүрсүгүнү","future":{"one":"{0} күн. кийин","other":"{0} күн. кийин"},"past":{"one":"{0} күн мурун","other":"{0} күн мурун"},"-2":"мурдагы күнү","-1":"кечээ"},"hour":{"0":"ушул саатта","future":{"one":"{0} сааттан кийин","other":"{0} сааттан кийин"},"past":{"one":"{0} саат мурун","other":"{0} саат мурун"}},"hour-short":{"0":"ушул саатта","future":{"one":"{0} саат. кийин","other":"{0} саат. кийин"},"past":{"one":"{0} саат. мурун","other":"{0} саат. мурун"}},"hour-narrow":{"0":"ушул саатта","future":{"one":"{0} с. кийн","other":"{0} с. кийн"},"past":{"one":"{0} с. мурн","other":"{0} с. мурн"}},"minute":{"0":"ушул мүнөттө","future":{"one":"{0} мүнөттөн кийин","other":"{0} мүнөттөн кийин"},"past":{"one":"{0} мүнөт мурун","other":"{0} мүнөт мурун"}},"minute-short":{"0":"ушул мүнөттө","future":{"one":"{0} мүн. кийин","other":"{0} мүн. кийин"},"past":{"one":"{0} мүн. мурун","other":"{0} мүн. мурун"}},"minute-narrow":{"0":"ушул мүнөттө","future":{"one":"{0} мүн. кийн","other":"{0} мүн. кийн"},"past":{"one":"{0} мүн. мурн","other":"{0} мүн. мурн"}},"second":{"0":"азыр","future":{"one":"{0} секунддан кийин","other":"{0} секунддан кийин"},"past":{"one":"{0} секунд мурун","other":"{0} секунд мурун"}},"second-short":{"0":"азыр","future":{"one":"{0} сек. кийин","other":"{0} сек. кийин"},"past":{"one":"{0} сек. мурун","other":"{0} сек. мурун"}},"second-narrow":{"0":"азыр","future":{"one":"{0} сек. кийн","other":"{0} сек. кийн"},"past":{"one":"{0} сек. мурн","other":"{0} сек. мурн"}}}},"availableLocales":["ky"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
