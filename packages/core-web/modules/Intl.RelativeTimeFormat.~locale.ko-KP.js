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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ko-KP").length
)) {
// Intl.RelativeTimeFormat.~locale.ko-KP
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ko-KP":{"nu":["latn"],"year":{"0":"올해","1":"내년","future":{"other":"{0}년 후"},"past":{"other":"{0}년 전"},"-1":"작년"},"year-short":{"0":"올해","1":"내년","future":{"other":"{0}년 후"},"past":{"other":"{0}년 전"},"-1":"작년"},"year-narrow":{"0":"올해","1":"내년","future":{"other":"{0}년 후"},"past":{"other":"{0}년 전"},"-1":"작년"},"quarter":{"0":"이번 분기","1":"다음 분기","future":{"other":"{0}분기 후"},"past":{"other":"{0}분기 전"},"-1":"지난 분기"},"quarter-short":{"0":"이번 분기","1":"다음 분기","future":{"other":"{0}분기 후"},"past":{"other":"{0}분기 전"},"-1":"지난 분기"},"quarter-narrow":{"0":"이번 분기","1":"다음 분기","future":{"other":"{0}분기 후"},"past":{"other":"{0}분기 전"},"-1":"지난 분기"},"month":{"0":"이번 달","1":"다음 달","future":{"other":"{0}개월 후"},"past":{"other":"{0}개월 전"},"-1":"지난달"},"month-short":{"0":"이번 달","1":"다음 달","future":{"other":"{0}개월 후"},"past":{"other":"{0}개월 전"},"-1":"지난달"},"month-narrow":{"0":"이번 달","1":"다음 달","future":{"other":"{0}개월 후"},"past":{"other":"{0}개월 전"},"-1":"지난달"},"week":{"0":"이번 주","1":"다음 주","future":{"other":"{0}주 후"},"past":{"other":"{0}주 전"},"-1":"지난주"},"week-short":{"0":"이번 주","1":"다음 주","future":{"other":"{0}주 후"},"past":{"other":"{0}주 전"},"-1":"지난주"},"week-narrow":{"0":"이번 주","1":"다음 주","future":{"other":"{0}주 후"},"past":{"other":"{0}주 전"},"-1":"지난주"},"day":{"0":"오늘","1":"내일","2":"모레","future":{"other":"{0}일 후"},"past":{"other":"{0}일 전"},"-2":"그저께","-1":"어제"},"day-short":{"0":"오늘","1":"내일","2":"모레","future":{"other":"{0}일 후"},"past":{"other":"{0}일 전"},"-2":"그저께","-1":"어제"},"day-narrow":{"0":"오늘","1":"내일","2":"모레","future":{"other":"{0}일 후"},"past":{"other":"{0}일 전"},"-2":"그저께","-1":"어제"},"hour":{"0":"현재 시간","future":{"other":"{0}시간 후"},"past":{"other":"{0}시간 전"}},"hour-short":{"0":"현재 시간","future":{"other":"{0}시간 후"},"past":{"other":"{0}시간 전"}},"hour-narrow":{"0":"현재 시간","future":{"other":"{0}시간 후"},"past":{"other":"{0}시간 전"}},"minute":{"0":"현재 분","future":{"other":"{0}분 후"},"past":{"other":"{0}분 전"}},"minute-short":{"0":"현재 분","future":{"other":"{0}분 후"},"past":{"other":"{0}분 전"}},"minute-narrow":{"0":"현재 분","future":{"other":"{0}분 후"},"past":{"other":"{0}분 전"}},"second":{"0":"지금","future":{"other":"{0}초 후"},"past":{"other":"{0}초 전"}},"second-short":{"0":"지금","future":{"other":"{0}초 후"},"past":{"other":"{0}초 전"}},"second-narrow":{"0":"지금","future":{"other":"{0}초 후"},"past":{"other":"{0}초 전"}}}},"availableLocales":["ko-KP"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
