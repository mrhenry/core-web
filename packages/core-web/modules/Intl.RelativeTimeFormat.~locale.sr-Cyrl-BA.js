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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sr-Cyrl-BA").length
)) {
// Intl.RelativeTimeFormat.~locale.sr-Cyrl-BA
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"sr-Cyrl-BA":{"nu":["latn"],"year":{"0":"ове године","1":"следеће године","future":{"one":"за {0} годину","few":"за {0} године","other":"за {0} година"},"past":{"one":"пре {0} године","few":"пре {0} године","other":"пре {0} година"},"-1":"прошле године"},"year-short":{"0":"ове год.","1":"следеће год.","future":{"one":"за {0} год.","few":"за {0} год.","other":"за {0} год."},"past":{"one":"пре {0} год.","few":"пре {0} год.","other":"пре {0} год."},"-1":"прошле год."},"year-narrow":{"0":"ове г.","1":"следеће г.","future":{"one":"за {0} г.","few":"за {0} г.","other":"за {0} г."},"past":{"one":"пре {0} г.","few":"пре {0} г.","other":"пре {0} г."},"-1":"прошле г."},"quarter":{"0":"овог квартала","1":"следећег квартала","future":{"one":"за {0} квартал","few":"за {0} квартала","other":"за {0} квартала"},"past":{"one":"пре {0} квартала","few":"пре {0} квартала","other":"пре {0} квартала"},"-1":"прошлог квартала"},"quarter-short":{"0":"овог квартала","1":"следећег квартала","future":{"one":"за {0} кв.","few":"за {0} кв.","other":"за {0} кв."},"past":{"one":"пре {0} кв.","few":"пре {0} кв.","other":"пре {0} кв."},"-1":"прошлог квартала"},"quarter-narrow":{"0":"овог квартала","1":"следећег квартала","future":{"one":"за {0} кв.","few":"за {0} кв.","other":"за {0} кв."},"past":{"one":"пре {0} кв.","few":"пре {0} кв.","other":"пре {0} кв."},"-1":"прошлог квартала"},"month":{"0":"овог месеца","1":"следећег месеца","future":{"one":"за {0} месец","few":"за {0} месеца","other":"за {0} месеци"},"past":{"one":"пре {0} месеца","few":"пре {0} месеца","other":"пре {0} месеци"},"-1":"прошлог месеца"},"month-short":{"0":"овог мес.","1":"следећег мес.","future":{"one":"за {0} мес.","few":"за {0} мес.","other":"за {0} мес."},"past":{"one":"пре {0} мес.","few":"пре {0} мес.","other":"пре {0} мес."},"-1":"прошлог мес."},"month-narrow":{"0":"овог м.","1":"следећег м.","future":{"one":"за {0} м.","few":"за {0} м.","other":"за {0} м."},"past":{"one":"пре {0} м.","few":"пре {0} м.","other":"пре {0} м."},"-1":"прошлог м."},"week":{"0":"ове недеље","1":"наредне недеље","future":{"one":"за {0} недељу","few":"за {0} недеље","other":"за {0} недеља"},"past":{"one":"пре {0} недеље","few":"пре {0} недеље","other":"пре {0} недеља"},"-1":"претходне недеље"},"week-short":{"0":"ове нед.","1":"следеће нед.","future":{"one":"за {0} нед.","few":"за {0} нед.","other":"за {0} нед."},"past":{"one":"пре {0} нед.","few":"пре {0} нед.","other":"пре {0} нед."},"-1":"прошле нед."},"week-narrow":{"0":"ове н.","1":"следеће н.","future":{"one":"за {0} н.","few":"за {0} н.","other":"за {0} н."},"past":{"one":"пре {0} н.","few":"пре {0} н.","other":"пре {0} н."},"-1":"прошле н."},"day":{"0":"данас","1":"сутра","2":"прекосутра","future":{"one":"за {0} дан","few":"за {0} дана","other":"за {0} дана"},"past":{"one":"пре {0} дана","few":"пре {0} дана","other":"пре {0} дана"},"-2":"прекјуче","-1":"јуче"},"day-short":{"0":"данас","1":"сутра","2":"прекосутра","future":{"one":"за {0} д.","few":"за {0} д.","other":"за {0} д."},"past":{"one":"пре {0} д.","few":"пре {0} д.","other":"пре {0} д."},"-2":"прекјуче","-1":"јуче"},"day-narrow":{"0":"данас","1":"сутра","2":"прекосутра","future":{"one":"за {0} д.","few":"за {0} д.","other":"за {0} д."},"past":{"one":"пре {0} д.","few":"пре {0} д.","other":"пре {0} д."},"-2":"прекјуче","-1":"јуче"},"hour":{"0":"овог сата","future":{"one":"за {0} сат","few":"за {0} сата","other":"за {0} сати"},"past":{"one":"пре {0} сата","few":"пре {0} сата","other":"пре {0} сати"}},"hour-short":{"0":"овог сата","future":{"one":"за {0} ч.","few":"за {0} ч.","other":"за {0} ч."},"past":{"one":"пре {0} ч.","few":"пре {0} ч.","other":"пре {0} ч."}},"hour-narrow":{"0":"овог сата","future":{"one":"за {0} ч.","few":"за {0} ч.","other":"за {0} ч."},"past":{"one":"пре {0} ч.","few":"пре {0} ч.","other":"пре {0} ч."}},"minute":{"0":"овог минута","future":{"one":"за {0} минут","few":"за {0} минута","other":"за {0} минута"},"past":{"one":"пре {0} минута","few":"пре {0} минута","other":"пре {0} минута"}},"minute-short":{"0":"овог минута","future":{"one":"за {0} мин.","few":"за {0} мин.","other":"за {0} мин."},"past":{"one":"пре {0} мин.","few":"пре {0} мин.","other":"пре {0} мин."}},"minute-narrow":{"0":"овог минута","future":{"one":"за {0} мин.","few":"за {0} мин.","other":"за {0} мин."},"past":{"one":"пре {0} мин.","few":"пре {0} мин.","other":"пре {0} мин."}},"second":{"0":"сада","future":{"one":"за {0} секунду","few":"за {0} секунде","other":"за {0} секунди"},"past":{"one":"пре {0} секунде","few":"пре {0} секунде","other":"пре {0} секунди"}},"second-short":{"0":"сада","future":{"one":"за {0} сек.","few":"за {0} сек.","other":"за {0} сек."},"past":{"one":"пре {0} сек.","few":"пре {0} сек.","other":"пре {0} сек."}},"second-narrow":{"0":"сада","future":{"one":"за {0} с.","few":"за {0} с.","other":"за {0} с."},"past":{"one":"пре {0} с.","few":"пре {0} с.","other":"пре {0} с."}}}},"availableLocales":["sr-Cyrl-BA"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
