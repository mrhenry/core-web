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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("yue-Hans").length
)) {
// Intl.RelativeTimeFormat.~locale.yue-Hans
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"yue-Hans":{"nu":["latn"],"year":{"0":"今年","1":"下年","future":{"other":"{0} 年后"},"past":{"other":"{0} 年前"},"-1":"旧年"},"year-short":{"0":"今年","1":"下年","future":{"other":"{0} 年后"},"past":{"other":"{0} 年前"},"-1":"旧年"},"year-narrow":{"0":"今年","1":"下年","future":{"other":"{0} 年后"},"past":{"other":"{0} 年前"},"-1":"旧年"},"quarter":{"0":"今季","1":"下一季","future":{"other":"{0} 季后"},"past":{"other":"{0} 季前"},"-1":"上一季"},"quarter-short":{"0":"今季","1":"下季","future":{"other":"{0} 季后"},"past":{"other":"{0} 季前"},"-1":"上季"},"quarter-narrow":{"0":"今季","1":"下季","future":{"other":"{0} 季后"},"past":{"other":"{0} 季前"},"-1":"上季"},"month":{"0":"今个月","1":"下个月","future":{"other":"{0} 个月后"},"past":{"other":"{0} 个月前"},"-1":"上个月"},"month-short":{"0":"今个月","1":"下个月","future":{"other":"{0} 个月后"},"past":{"other":"{0} 个月前"},"-1":"上个月"},"month-narrow":{"0":"今个月","1":"下个月","future":{"other":"{0} 个月后"},"past":{"other":"{0} 个月前"},"-1":"上个月"},"week":{"0":"今个星期","1":"下星期","future":{"other":"{0} 个星期后"},"past":{"other":"{0} 个星期前"},"-1":"上星期"},"week-short":{"0":"今个星期","1":"下星期","future":{"other":"{0} 个星期后"},"past":{"other":"{0} 个星期前"},"-1":"上星期"},"week-narrow":{"0":"今个星期","1":"下星期","future":{"other":"{0} 个星期后"},"past":{"other":"{0} 个星期前"},"-1":"上星期"},"day":{"0":"今日","1":"听日","2":"后天","future":{"other":"{0} 日后"},"past":{"other":"{0} 日前"},"-2":"前天","-1":"寻日"},"day-short":{"0":"今日","1":"听日","2":"后天","future":{"other":"{0} 日后"},"past":{"other":"{0} 日前"},"-2":"前天","-1":"寻日"},"day-narrow":{"0":"今日","1":"听日","2":"后天","future":{"other":"{0} 日后"},"past":{"other":"{0} 日前"},"-2":"前天","-1":"寻日"},"hour":{"0":"呢个小时","future":{"other":"{0} 小时后"},"past":{"other":"{0} 小时前"}},"hour-short":{"0":"呢个小时","future":{"other":"{0} 小时后"},"past":{"other":"{0} 小时前"}},"hour-narrow":{"0":"呢个小时","future":{"other":"{0} 小时后"},"past":{"other":"{0} 小时前"}},"minute":{"0":"呢分钟","future":{"other":"{0} 分钟后"},"past":{"other":"{0} 分钟前"}},"minute-short":{"0":"呢分钟","future":{"other":"{0} 分钟后"},"past":{"other":"{0} 分钟前"}},"minute-narrow":{"0":"呢分钟","future":{"other":"{0} 分钟后"},"past":{"other":"{0} 分钟前"}},"second":{"0":"宜家","future":{"other":"{0} 秒后"},"past":{"other":"{0} 秒前"}},"second-short":{"0":"宜家","future":{"other":"{0} 秒后"},"past":{"other":"{0} 秒前"}},"second-narrow":{"0":"宜家","future":{"other":"{0} 秒后"},"past":{"other":"{0} 秒前"}}}},"availableLocales":["yue-Hans"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
