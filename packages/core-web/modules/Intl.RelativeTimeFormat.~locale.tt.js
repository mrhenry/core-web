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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("tt").length
)) {
// Intl.RelativeTimeFormat.~locale.tt
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"быел","1":"киләсе елда","future":{"other":"{0} елдан"},"past":{"other":"{0} ел элек"},"-1":"узган ел"},"year-short":{"0":"быел","1":"киләсе елда","future":{"other":"{0} елдан"},"past":{"other":"{0} ел элек"},"-1":"узган ел"},"year-narrow":{"0":"быел","1":"киләсе елда","future":{"other":"{0} елдан"},"past":{"other":"{0} ел элек"},"-1":"узган ел"},"quarter":{"0":"бу кварталда","1":"киләсе кварталда","future":{"other":"{0} кварталдан"},"past":{"other":"{0} квартал элек"},"-1":"узган кварталда"},"quarter-short":{"0":"бу кварталда","1":"киләсе кварталда","future":{"other":"{0} кв."},"past":{"other":"{0} кв. элек"},"-1":"узган кварталда"},"quarter-narrow":{"0":"бу кварталда","1":"киләсе кварталда","future":{"other":"{0} кв."},"past":{"other":"{0} кв. элек"},"-1":"узган кварталда"},"month":{"0":"бу айда","1":"киләсе айда","future":{"other":"{0} айдан"},"past":{"other":"{0} ай элек"},"-1":"узган айда"},"month-short":{"0":"бу айда","1":"киләсе айда","future":{"other":"{0} айдан"},"past":{"other":"{0} ай элек"},"-1":"узган айда"},"month-narrow":{"0":"бу айда","1":"киләсе айда","future":{"other":"{0} айдан"},"past":{"other":"{0} ай элек"},"-1":"узган айда"},"week":{"0":"бу атнада","1":"киләсе атнада","future":{"other":"{0} атнадан"},"past":{"other":"{0} атна элек"},"-1":"узган атнада"},"week-short":{"0":"бу атнада","1":"киләсе атнада","future":{"other":"{0} атнадан"},"past":{"other":"{0} атна элек"},"-1":"узган атнада"},"week-narrow":{"0":"бу атнада","1":"киләсе атнада","future":{"other":"{0} атнадан"},"past":{"other":"{0} атна элек"},"-1":"узган атнада"},"day":{"0":"бүген","1":"иртәгә","future":{"other":"{0} көннән"},"past":{"other":"{0} көн элек"},"-1":"кичә"},"day-short":{"0":"бүген","1":"иртәгә","future":{"other":"{0} көннән"},"past":{"other":"{0} көн элек"},"-1":"кичә"},"day-narrow":{"0":"бүген","1":"иртәгә","future":{"other":"{0} көннән"},"past":{"other":"{0} көн элек"},"-1":"кичә"},"hour":{"0":"бу сәгатьтә","future":{"other":"{0} сәгатьтән"},"past":{"other":"{0} сәгать элек"}},"hour-short":{"0":"бу сәгатьтә","future":{"other":"{0} сәг."},"past":{"other":"{0} сәг. элек"}},"hour-narrow":{"0":"бу сәгатьтә","future":{"other":"{0} сәг."},"past":{"other":"{0} сәг. элек"}},"minute":{"0":"бу минутта","future":{"other":"{0} минуттан"},"past":{"other":"{0} минут элек"}},"minute-short":{"0":"бу минутта","future":{"other":"{0} мин."},"past":{"other":"{0} мин. элек"}},"minute-narrow":{"0":"бу минутта","future":{"other":"{0} мин."},"past":{"other":"{0} мин. элек"}},"second":{"0":"хәзер","future":{"other":"{0} секундтан"},"past":{"other":"{0} секунд элек"}},"second-short":{"0":"хәзер","future":{"other":"{0} с."},"past":{"other":"{0} с. элек"}},"second-narrow":{"0":"хәзер","future":{"other":"{0} с."},"past":{"other":"{0} с. элек"}}},"locale":"tt"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
