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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("zh").length
)) {
// Intl.RelativeTimeFormat.~locale.zh
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"今年","1":"明年","future":{"other":"{0}年后"},"past":{"other":"{0}年前"},"-1":"去年"},"year-short":{"0":"今年","1":"明年","future":{"other":"{0}年后"},"past":{"other":"{0}年前"},"-1":"去年"},"year-narrow":{"0":"今年","1":"明年","future":{"other":"{0}年后"},"past":{"other":"{0}年前"},"-1":"去年"},"quarter":{"0":"本季度","1":"下季度","future":{"other":"{0}个季度后"},"past":{"other":"{0}个季度前"},"-1":"上季度"},"quarter-short":{"0":"本季度","1":"下季度","future":{"other":"{0}个季度后"},"past":{"other":"{0}个季度前"},"-1":"上季度"},"quarter-narrow":{"0":"本季度","1":"下季度","future":{"other":"{0}个季度后"},"past":{"other":"{0}个季度前"},"-1":"上季度"},"month":{"0":"本月","1":"下个月","future":{"other":"{0}个月后"},"past":{"other":"{0}个月前"},"-1":"上个月"},"month-short":{"0":"本月","1":"下个月","future":{"other":"{0}个月后"},"past":{"other":"{0}个月前"},"-1":"上个月"},"month-narrow":{"0":"本月","1":"下个月","future":{"other":"{0}个月后"},"past":{"other":"{0}个月前"},"-1":"上个月"},"week":{"0":"本周","1":"下周","future":{"other":"{0}周后"},"past":{"other":"{0}周前"},"-1":"上周"},"week-short":{"0":"本周","1":"下周","future":{"other":"{0}周后"},"past":{"other":"{0}周前"},"-1":"上周"},"week-narrow":{"0":"本周","1":"下周","future":{"other":"{0}周后"},"past":{"other":"{0}周前"},"-1":"上周"},"day":{"0":"今天","1":"明天","2":"后天","future":{"other":"{0}天后"},"past":{"other":"{0}天前"},"-2":"前天","-1":"昨天"},"day-short":{"0":"今天","1":"明天","2":"后天","future":{"other":"{0}天后"},"past":{"other":"{0}天前"},"-2":"前天","-1":"昨天"},"day-narrow":{"0":"今天","1":"明天","2":"后天","future":{"other":"{0}天后"},"past":{"other":"{0}天前"},"-2":"前天","-1":"昨天"},"hour":{"0":"这一时间 / 此时","future":{"other":"{0}小时后"},"past":{"other":"{0}小时前"}},"hour-short":{"0":"这一时间 / 此时","future":{"other":"{0}小时后"},"past":{"other":"{0}小时前"}},"hour-narrow":{"0":"这一时间 / 此时","future":{"other":"{0}小时后"},"past":{"other":"{0}小时前"}},"minute":{"0":"此刻","future":{"other":"{0}分钟后"},"past":{"other":"{0}分钟前"}},"minute-short":{"0":"此刻","future":{"other":"{0}分钟后"},"past":{"other":"{0}分钟前"}},"minute-narrow":{"0":"此刻","future":{"other":"{0}分钟后"},"past":{"other":"{0}分钟前"}},"second":{"0":"现在","future":{"other":"{0}秒钟后"},"past":{"other":"{0}秒钟前"}},"second-short":{"0":"现在","future":{"other":"{0}秒后"},"past":{"other":"{0}秒前"}},"second-narrow":{"0":"现在","future":{"other":"{0}秒后"},"past":{"other":"{0}秒前"}}},"locale":"zh"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
