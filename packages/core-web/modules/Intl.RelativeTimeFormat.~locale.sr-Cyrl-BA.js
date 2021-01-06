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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sr-Cyrl-BA").length
)) {
// Intl.RelativeTimeFormat.~locale.sr-Cyrl-BA
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ове године","1":"сљедеће године","future":{"one":"за {0} годину","few":"за {0} године","other":"за {0} година"},"past":{"one":"прије {0} године","few":"прије {0} године","other":"прије {0} година"},"-1":"прошле године"},"year-short":{"0":"ове год.","1":"сљедеће год.","future":{"one":"за {0} год.","few":"за {0} год.","other":"за {0} год."},"past":{"one":"прије {0} год.","few":"прије {0} год.","other":"прије {0} год."},"-1":"прошле год."},"year-narrow":{"0":"ове г.","1":"сљедеће г.","future":{"one":"за {0} г.","few":"за {0} г.","other":"за {0} г."},"past":{"one":"прије {0} г.","few":"прије {0} г.","other":"прије {0} г."},"-1":"прошле г."},"quarter":{"0":"овог квартала","1":"сљедећег квартала","future":{"one":"за {0} квартал","few":"за {0} квартала","other":"за {0} квартала"},"past":{"one":"прије {0} квартала","few":"прије {0} квартала","other":"прије {0} квартала"},"-1":"прошлог квартала"},"quarter-short":{"0":"овог квартала","1":"следећег квартала","future":{"one":"за {0} кв.","few":"за {0} кв.","other":"за {0} кв."},"past":{"one":"прије {0} кв.","few":"прије {0} кв.","other":"прије {0} кв."},"-1":"прошлог квартала"},"quarter-narrow":{"0":"овог квартала","1":"следећег квартала","future":{"one":"за {0} кв.","few":"за {0} кв.","other":"за {0} кв."},"past":{"one":"прије {0} кв.","few":"прије {0} кв.","other":"прије {0} кв."},"-1":"прошлог квартала"},"month":{"0":"овог мјесеца","1":"сљедећег мјесеца","future":{"one":"за {0} мјесец","few":"за {0} мјесеца","other":"за {0} мјесеци"},"past":{"one":"прије {0} мјесеца","few":"прије {0} мјесеца","other":"прије {0} мјесеци"},"-1":"прошлог мјесеца"},"month-short":{"0":"овог мјес.","1":"сљедећег мјес.","future":{"one":"за {0} мјес.","few":"за {0} мјес.","other":"за {0} мјес."},"past":{"one":"прије {0} мјес.","few":"прије {0} мјес.","other":"прије {0} мјес."},"-1":"прошлог мјес."},"month-narrow":{"0":"овог м.","1":"сљедећег м.","future":{"one":"за {0} м.","few":"за {0} м.","other":"за {0} м."},"past":{"one":"прије {0} м.","few":"прије {0} м.","other":"прије {0} м."},"-1":"прошлог м."},"week":{"0":"ове недјеље","1":"наредне недеље","future":{"one":"за {0} недјељу","few":"за {0} недјеље","other":"за {0} недјеља"},"past":{"one":"прије {0} недјеље","few":"прије {0} недјеље","other":"прије {0} недјеља"},"-1":"претходне недеље"},"week-short":{"0":"ове нед.","1":"следеће нед.","future":{"one":"за {0} нед.","few":"за {0} нед.","other":"за {0} нед."},"past":{"one":"прије {0} нед.","few":"прије {0} нед.","other":"прије {0} нед."},"-1":"прошле нед."},"week-narrow":{"0":"ове н.","1":"сљедеће н.","future":{"one":"за {0} н.","few":"за {0} н.","other":"за {0} н."},"past":{"one":"прије {0} н.","few":"прије {0} н.","other":"прије {0} н."},"-1":"прошле н."},"day":{"0":"данас","1":"сутра","2":"прекосутра","future":{"one":"за {0} дан","few":"за {0} дана","other":"за {0} дана"},"past":{"one":"прије {0} дана","few":"прије {0} дана","other":"прије {0} дана"},"-2":"прекјуче","-1":"јуче"},"day-short":{"0":"данас","1":"сутра","2":"прекосутра","future":{"one":"за {0} д.","few":"за {0} д.","other":"за {0} д."},"past":{"one":"прије {0} д.","few":"прије {0} д.","other":"прије {0} д."},"-2":"прекјуче","-1":"јуче"},"day-narrow":{"0":"данас","1":"сутра","2":"прекосутра","future":{"one":"за {0} д.","few":"за {0} д.","other":"за {0} д."},"past":{"one":"прије {0} д.","few":"прије {0} д.","other":"прије {0} д."},"-2":"прекјуче","-1":"јуче"},"hour":{"0":"овог сата","future":{"one":"за {0} сат","few":"за {0} сата","other":"за {0} сати"},"past":{"one":"прије {0} сата","few":"прије {0} сата","other":"прије {0} сати"}},"hour-short":{"0":"овог сата","future":{"one":"за {0} ч.","few":"за {0} ч.","other":"за {0} ч."},"past":{"one":"прије {0} ч.","few":"прије {0} ч.","other":"прије {0} ч."}},"hour-narrow":{"0":"овог сата","future":{"one":"за {0} ч.","few":"за {0} ч.","other":"за {0} ч."},"past":{"one":"прије {0} ч.","few":"прије {0} ч.","other":"прије {0} ч."}},"minute":{"0":"овог минута","future":{"one":"за {0} минут","few":"за {0} минута","other":"за {0} минута"},"past":{"one":"прије {0} минута","few":"прије {0} минута","other":"прије {0} минута"}},"minute-short":{"0":"овог минута","future":{"one":"за {0} мин.","few":"за {0} мин.","other":"за {0} мин."},"past":{"one":"прије {0} мин.","few":"прије {0} мин.","other":"прије {0} мин."}},"minute-narrow":{"0":"овог минута","future":{"one":"за {0} мин.","few":"за {0} мин.","other":"за {0} мин."},"past":{"one":"прије {0} мин.","few":"прије {0} мин.","other":"прије {0} мин."}},"second":{"0":"сада","future":{"one":"за {0} секунду","few":"за {0} секунде","other":"за {0} секунди"},"past":{"one":"прије {0} секунде","few":"прије {0} секунде","other":"прије {0} секунди"}},"second-short":{"0":"сада","future":{"one":"за {0} сек.","few":"за {0} сек.","other":"за {0} сек."},"past":{"one":"прије {0} сек.","few":"прије {0} сек.","other":"прије {0} сек."}},"second-narrow":{"0":"сада","future":{"one":"за {0} с.","few":"за {0} с.","other":"за {0} с."},"past":{"one":"прије {0} с.","few":"прије {0} с.","other":"прије {0} с."}}},"locale":"sr-Cyrl-BA"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
