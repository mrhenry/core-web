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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("bs-Cyrl").length
)) {
// Intl.RelativeTimeFormat.~locale.bs-Cyrl
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"bs-Cyrl":{"nu":["latn"],"year":{"0":"ове године","1":"сљедеће године","future":{"one":"за {0} годину","few":"за {0} године","other":"за {0} година"},"past":{"one":"прије {0} годину","few":"прије {0} године","other":"прије {0} година"},"-1":"прошле године"},"year-short":{"0":"ове год.","1":"сљед. године","future":{"one":"за {0} годину","few":"за {0} године","other":"за {0} година"},"past":{"one":"прије {0} годину","few":"прије {0} године","other":"прије {0} година"},"-1":"прош. године"},"year-narrow":{"0":"ове год.","1":"сљед. године","future":{"one":"за {0} годину","few":"за {0} године","other":"за {0} година"},"past":{"one":"прије {0} годину","few":"прије {0} године","other":"прије {0} година"},"-1":"прош. године"},"quarter":{"0":"ово тромјесечје","1":"сљедеће тромјесечје","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"прошло тромјесечје"},"quarter-short":{"0":"ово тромјесечје","1":"сљедеће тромјесечје","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"прошло тромјесечје"},"quarter-narrow":{"0":"ово тромјесечје","1":"сљедеће тромјесечје","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"прошло тромјесечје"},"month":{"0":"овог мјесеца","1":"сљедећег мјесеца","future":{"one":"за {0} мјесец","few":"за {0} мјесеца","other":"за {0} мјесеци"},"past":{"one":"прије {0} мјесец","few":"прије {0} мјесеца","other":"прије {0} мјесеци"},"-1":"прошлог мјесеца"},"month-short":{"0":"овог мјес.","1":"сљед. мјесеца","future":{"one":"за {0} мјесец","few":"за {0} мјесеца","other":"за {0} мјесеци"},"past":{"one":"прије {0} мјесец","few":"прије {0} мјесеца","other":"прије {0} мјесеци"},"-1":"прош. мјесеца"},"month-narrow":{"0":"ов. мјес.","1":"сљ. мјес.","future":{"one":"за {0} мјес.","few":"за {0} мјес.","other":"за {0} мјес."},"past":{"one":"прије {0} мјес.","few":"прије {0} мјес.","other":"прије {0} мјес."},"-1":"прош. мјес."},"week":{"0":"ове седмице","1":"сљедеће седмице","future":{"one":"за {0} седмицу","few":"за {0} седмице","other":"за {0} седмица"},"past":{"one":"прије {0} седмицу","few":"прије {0} седмице","other":"прије {0} седмица"},"-1":"прошле седмице"},"week-short":{"0":"ове седм.","1":"сљ. седм.","future":{"one":"за {0} седм.","few":"за {0} седм.","other":"за {0} седм."},"past":{"one":"прије {0} седм.","few":"прије {0} седм.","other":"прије {0} седм."},"-1":"прош. седм."},"week-narrow":{"0":"ове седм.","1":"сљ. седм.","future":{"one":"за {0} седм.","few":"за {0} седм.","other":"за {0} седм."},"past":{"one":"прије {0} седм.","few":"прије {0} седм.","other":"прије {0} седм."},"-1":"прош. седм."},"day":{"0":"данас","1":"сутра","2":"прекосутра","future":{"one":"за {0} дан","few":"за {0} дана","other":"за {0} дана"},"past":{"one":"прије {0} дан","few":"прије {0} дана","other":"прије {0} дана"},"-2":"прекјуче","-1":"јуче"},"day-short":{"0":"данас","1":"сутра","2":"прекосутра","future":{"one":"за {0} дан","few":"за {0} дана","other":"за {0} дана"},"past":{"one":"прије {0} дан","few":"прије {0} дана","other":"прије {0} дана"},"-2":"прекјуче","-1":"јуче"},"day-narrow":{"0":"данас","1":"сутра","2":"прекосутра","future":{"one":"за {0} дан","few":"за {0} дана","other":"за {0} дана"},"past":{"one":"прије {0} дан","few":"прије {0} дана","other":"прије {0} дана"},"-2":"прекјуче","-1":"јуче"},"hour":{"0":"овог сата","future":{"one":"за {0} сат","few":"за {0} сата","other":"за {0} сати"},"past":{"one":"прије {0} сат","few":"прије {0} сата","other":"прије {0} сати"}},"hour-short":{"0":"овог сата","future":{"one":"за {0} сат","few":"за {0} сата","other":"за {0} сати"},"past":{"one":"прије {0} сат","few":"прије {0} сата","other":"прије {0} сати"}},"hour-narrow":{"0":"овог сата","future":{"one":"за {0} сат","few":"за {0} сата","other":"за {0} сати"},"past":{"one":"прије {0} сат","few":"прије {0} сата","other":"прије {0} сати"}},"minute":{"0":"овог минута","future":{"one":"за {0} минут","few":"за {0} минута","other":"за {0} минута"},"past":{"one":"прије {0} минут","few":"прије {0} минута","other":"прије {0} минута"}},"minute-short":{"0":"овог минута","future":{"one":"за {0} минут","few":"за {0} минута","other":"за {0} минута"},"past":{"one":"прије {0} минут","few":"прије {0} минута","other":"прије {0} минута"}},"minute-narrow":{"0":"овог минута","future":{"one":"за {0} минут","few":"за {0} минута","other":"за {0} минута"},"past":{"one":"прије {0} мин.","few":"прије {0} мин.","other":"прије {0} мин."}},"second":{"0":"сада","future":{"one":"за {0} секунд","few":"за {0} секунде","other":"за {0} секунди"},"past":{"one":"прије {0} секунд","few":"прије {0} секунде","other":"прије {0} секунди"}},"second-short":{"0":"сада","future":{"one":"за {0} сек.","few":"за {0} секунде","other":"за {0} секунди"},"past":{"one":"прије {0} сек.","few":"прије {0} сек.","other":"прије {0} сек."}},"second-narrow":{"0":"сада","future":{"one":"за {0} сек.","few":"за {0} секунде","other":"за {0} секунди"},"past":{"one":"прије {0} сек.","few":"прије {0} сек.","other":"прије {0} сек."}}}},"availableLocales":["bs-Cyrl"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
