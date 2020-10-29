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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ko-KP").length
)) {
// Intl.RelativeTimeFormat.~locale.ko-KP
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ko-KP":{"nu":["latn"],"year":{"0":"올해","1":"내년","future":{"other":"{0}년 후"},"past":{"other":"{0}년 전"},"-1":"작년"},"year-short":{"0":"올해","1":"내년","future":{"other":"{0}년 후"},"past":{"other":"{0}년 전"},"-1":"작년"},"year-narrow":{"0":"올해","1":"내년","future":{"other":"{0}년 후"},"past":{"other":"{0}년 전"},"-1":"작년"},"quarter":{"0":"이번 분기","1":"다음 분기","future":{"other":"{0}분기 후"},"past":{"other":"{0}분기 전"},"-1":"지난 분기"},"quarter-short":{"0":"이번 분기","1":"다음 분기","future":{"other":"{0}분기 후"},"past":{"other":"{0}분기 전"},"-1":"지난 분기"},"quarter-narrow":{"0":"이번 분기","1":"다음 분기","future":{"other":"{0}분기 후"},"past":{"other":"{0}분기 전"},"-1":"지난 분기"},"month":{"0":"이번 달","1":"다음 달","future":{"other":"{0}개월 후"},"past":{"other":"{0}개월 전"},"-1":"지난달"},"month-short":{"0":"이번 달","1":"다음 달","future":{"other":"{0}개월 후"},"past":{"other":"{0}개월 전"},"-1":"지난달"},"month-narrow":{"0":"이번 달","1":"다음 달","future":{"other":"{0}개월 후"},"past":{"other":"{0}개월 전"},"-1":"지난달"},"week":{"0":"이번 주","1":"다음 주","future":{"other":"{0}주 후"},"past":{"other":"{0}주 전"},"-1":"지난주"},"week-short":{"0":"이번 주","1":"다음 주","future":{"other":"{0}주 후"},"past":{"other":"{0}주 전"},"-1":"지난주"},"week-narrow":{"0":"이번 주","1":"다음 주","future":{"other":"{0}주 후"},"past":{"other":"{0}주 전"},"-1":"지난주"},"day":{"0":"오늘","1":"내일","2":"모레","future":{"other":"{0}일 후"},"past":{"other":"{0}일 전"},"-2":"그저께","-1":"어제"},"day-short":{"0":"오늘","1":"내일","2":"모레","future":{"other":"{0}일 후"},"past":{"other":"{0}일 전"},"-2":"그저께","-1":"어제"},"day-narrow":{"0":"오늘","1":"내일","2":"모레","future":{"other":"{0}일 후"},"past":{"other":"{0}일 전"},"-2":"그저께","-1":"어제"},"hour":{"0":"현재 시간","future":{"other":"{0}시간 후"},"past":{"other":"{0}시간 전"}},"hour-short":{"0":"현재 시간","future":{"other":"{0}시간 후"},"past":{"other":"{0}시간 전"}},"hour-narrow":{"0":"현재 시간","future":{"other":"{0}시간 후"},"past":{"other":"{0}시간 전"}},"minute":{"0":"현재 분","future":{"other":"{0}분 후"},"past":{"other":"{0}분 전"}},"minute-short":{"0":"현재 분","future":{"other":"{0}분 후"},"past":{"other":"{0}분 전"}},"minute-narrow":{"0":"현재 분","future":{"other":"{0}분 후"},"past":{"other":"{0}분 전"}},"second":{"0":"지금","future":{"other":"{0}초 후"},"past":{"other":"{0}초 전"}},"second-short":{"0":"지금","future":{"other":"{0}초 후"},"past":{"other":"{0}초 전"}},"second-narrow":{"0":"지금","future":{"other":"{0}초 후"},"past":{"other":"{0}초 전"}}}},"availableLocales":["ko-KP"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
