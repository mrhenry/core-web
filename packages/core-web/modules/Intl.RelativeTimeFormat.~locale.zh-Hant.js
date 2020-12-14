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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("zh-Hant").length
)) {
// Intl.RelativeTimeFormat.~locale.zh-Hant
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"今年","1":"明年","future":{"other":"{0} 年後"},"past":{"other":"{0} 年前"},"-1":"去年"},"year-short":{"0":"今年","1":"明年","future":{"other":"{0} 年後"},"past":{"other":"{0} 年前"},"-1":"去年"},"year-narrow":{"0":"今年","1":"明年","future":{"other":"{0} 年後"},"past":{"other":"{0} 年前"},"-1":"去年"},"quarter":{"0":"這一季","1":"下一季","future":{"other":"{0} 季後"},"past":{"other":"{0} 季前"},"-1":"上一季"},"quarter-short":{"0":"這一季","1":"下一季","future":{"other":"{0} 季後"},"past":{"other":"{0} 季前"},"-1":"上一季"},"quarter-narrow":{"0":"這一季","1":"下一季","future":{"other":"{0} 季後"},"past":{"other":"{0} 季前"},"-1":"上一季"},"month":{"0":"本月","1":"下個月","future":{"other":"{0} 個月後"},"past":{"other":"{0} 個月前"},"-1":"上個月"},"month-short":{"0":"本月","1":"下個月","future":{"other":"{0} 個月後"},"past":{"other":"{0} 個月前"},"-1":"上個月"},"month-narrow":{"0":"本月","1":"下個月","future":{"other":"{0} 個月後"},"past":{"other":"{0} 個月前"},"-1":"上個月"},"week":{"0":"本週","1":"下週","future":{"other":"{0} 週後"},"past":{"other":"{0} 週前"},"-1":"上週"},"week-short":{"0":"本週","1":"下週","future":{"other":"{0} 週後"},"past":{"other":"{0} 週前"},"-1":"上週"},"week-narrow":{"0":"本週","1":"下週","future":{"other":"{0} 週後"},"past":{"other":"{0} 週前"},"-1":"上週"},"day":{"0":"今天","1":"明天","2":"後天","future":{"other":"{0} 天後"},"past":{"other":"{0} 天前"},"-2":"前天","-1":"昨天"},"day-short":{"0":"今天","1":"明天","2":"後天","future":{"other":"{0} 天後"},"past":{"other":"{0} 天前"},"-2":"前天","-1":"昨天"},"day-narrow":{"0":"今天","1":"明天","2":"後天","future":{"other":"{0} 天後"},"past":{"other":"{0} 天前"},"-2":"前天","-1":"昨天"},"hour":{"0":"這一小時","future":{"other":"{0} 小時後"},"past":{"other":"{0} 小時前"}},"hour-short":{"0":"這一小時","future":{"other":"{0} 小時後"},"past":{"other":"{0} 小時前"}},"hour-narrow":{"0":"這一小時","future":{"other":"{0} 小時後"},"past":{"other":"{0} 小時前"}},"minute":{"0":"這一分鐘","future":{"other":"{0} 分鐘後"},"past":{"other":"{0} 分鐘前"}},"minute-short":{"0":"這一分鐘","future":{"other":"{0} 分鐘後"},"past":{"other":"{0} 分鐘前"}},"minute-narrow":{"0":"這一分鐘","future":{"other":"{0} 分鐘後"},"past":{"other":"{0} 分鐘前"}},"second":{"0":"現在","future":{"other":"{0} 秒後"},"past":{"other":"{0} 秒前"}},"second-short":{"0":"現在","future":{"other":"{0} 秒後"},"past":{"other":"{0} 秒前"}},"second-narrow":{"0":"現在","future":{"other":"{0} 秒後"},"past":{"other":"{0} 秒前"}}},"locale":"zh-Hant"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
