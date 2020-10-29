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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("zh-Hant").length
)) {
// Intl.RelativeTimeFormat.~locale.zh-Hant
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"zh-Hant":{"nu":["latn"],"year":{"0":"今年","1":"明年","future":{"other":"{0} 年後"},"past":{"other":"{0} 年前"},"-1":"去年"},"year-short":{"0":"今年","1":"明年","future":{"other":"{0} 年後"},"past":{"other":"{0} 年前"},"-1":"去年"},"year-narrow":{"0":"今年","1":"明年","future":{"other":"{0} 年後"},"past":{"other":"{0} 年前"},"-1":"去年"},"quarter":{"0":"這一季","1":"下一季","future":{"other":"{0} 季後"},"past":{"other":"{0} 季前"},"-1":"上一季"},"quarter-short":{"0":"這一季","1":"下一季","future":{"other":"{0} 季後"},"past":{"other":"{0} 季前"},"-1":"上一季"},"quarter-narrow":{"0":"這一季","1":"下一季","future":{"other":"{0} 季後"},"past":{"other":"{0} 季前"},"-1":"上一季"},"month":{"0":"本月","1":"下個月","future":{"other":"{0} 個月後"},"past":{"other":"{0} 個月前"},"-1":"上個月"},"month-short":{"0":"本月","1":"下個月","future":{"other":"{0} 個月後"},"past":{"other":"{0} 個月前"},"-1":"上個月"},"month-narrow":{"0":"本月","1":"下個月","future":{"other":"{0} 個月後"},"past":{"other":"{0} 個月前"},"-1":"上個月"},"week":{"0":"本週","1":"下週","future":{"other":"{0} 週後"},"past":{"other":"{0} 週前"},"-1":"上週"},"week-short":{"0":"本週","1":"下週","future":{"other":"{0} 週後"},"past":{"other":"{0} 週前"},"-1":"上週"},"week-narrow":{"0":"本週","1":"下週","future":{"other":"{0} 週後"},"past":{"other":"{0} 週前"},"-1":"上週"},"day":{"0":"今天","1":"明天","2":"後天","future":{"other":"{0} 天後"},"past":{"other":"{0} 天前"},"-2":"前天","-1":"昨天"},"day-short":{"0":"今天","1":"明天","2":"後天","future":{"other":"{0} 天後"},"past":{"other":"{0} 天前"},"-2":"前天","-1":"昨天"},"day-narrow":{"0":"今天","1":"明天","2":"後天","future":{"other":"{0} 天後"},"past":{"other":"{0} 天前"},"-2":"前天","-1":"昨天"},"hour":{"0":"這一小時","future":{"other":"{0} 小時後"},"past":{"other":"{0} 小時前"}},"hour-short":{"0":"這一小時","future":{"other":"{0} 小時後"},"past":{"other":"{0} 小時前"}},"hour-narrow":{"0":"這一小時","future":{"other":"{0} 小時後"},"past":{"other":"{0} 小時前"}},"minute":{"0":"這一分鐘","future":{"other":"{0} 分鐘後"},"past":{"other":"{0} 分鐘前"}},"minute-short":{"0":"這一分鐘","future":{"other":"{0} 分鐘後"},"past":{"other":"{0} 分鐘前"}},"minute-narrow":{"0":"這一分鐘","future":{"other":"{0} 分鐘後"},"past":{"other":"{0} 分鐘前"}},"second":{"0":"現在","future":{"other":"{0} 秒後"},"past":{"other":"{0} 秒前"}},"second-short":{"0":"現在","future":{"other":"{0} 秒後"},"past":{"other":"{0} 秒前"}},"second-narrow":{"0":"現在","future":{"other":"{0} 秒後"},"past":{"other":"{0} 秒前"}}}},"availableLocales":["zh-Hant"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
