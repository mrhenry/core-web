import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import Get from "../helpers/_ESAbstract.Get";
import Type from "../helpers/_ESAbstract.Type";
import ToObject from "../helpers/_ESAbstract.ToObject";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import Construct from "../helpers/_ESAbstract.Construct";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
import CreateIterResultObject from "../helpers/_ESAbstract.CreateIterResultObject";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ja").length
)) {
// Intl.RelativeTimeFormat.~locale.ja
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ja":{"nu":["latn"],"year":{"0":"今年","1":"来年","future":{"other":"{0} 年後"},"past":{"other":"{0} 年前"},"-1":"昨年"},"year-short":{"0":"今年","1":"来年","future":{"other":"{0} 年後"},"past":{"other":"{0} 年前"},"-1":"昨年"},"year-narrow":{"0":"今年","1":"来年","future":{"other":"{0}年後"},"past":{"other":"{0}年前"},"-1":"昨年"},"quarter":{"0":"今四半期","1":"翌四半期","future":{"other":"{0} 四半期後"},"past":{"other":"{0} 四半期前"},"-1":"前四半期"},"quarter-short":{"0":"今四半期","1":"翌四半期","future":{"other":"{0} 四半期後"},"past":{"other":"{0} 四半期前"},"-1":"前四半期"},"quarter-narrow":{"0":"今四半期","1":"翌四半期","future":{"other":"{0}四半期後"},"past":{"other":"{0}四半期前"},"-1":"前四半期"},"month":{"0":"今月","1":"来月","future":{"other":"{0} か月後"},"past":{"other":"{0} か月前"},"-1":"先月"},"month-short":{"0":"今月","1":"来月","future":{"other":"{0} か月後"},"past":{"other":"{0} か月前"},"-1":"先月"},"month-narrow":{"0":"今月","1":"来月","future":{"other":"{0}か月後"},"past":{"other":"{0}か月前"},"-1":"先月"},"week":{"0":"今週","1":"来週","future":{"other":"{0} 週間後"},"past":{"other":"{0} 週間前"},"-1":"先週"},"week-short":{"0":"今週","1":"来週","future":{"other":"{0} 週間後"},"past":{"other":"{0} 週間前"},"-1":"先週"},"week-narrow":{"0":"今週","1":"来週","future":{"other":"{0}週間後"},"past":{"other":"{0}週間前"},"-1":"先週"},"day":{"0":"今日","1":"明日","2":"明後日","future":{"other":"{0} 日後"},"past":{"other":"{0} 日前"},"-2":"一昨日","-1":"昨日"},"day-short":{"0":"今日","1":"明日","2":"明後日","future":{"other":"{0} 日後"},"past":{"other":"{0} 日前"},"-2":"一昨日","-1":"昨日"},"day-narrow":{"0":"今日","1":"明日","2":"明後日","future":{"other":"{0}日後"},"past":{"other":"{0}日前"},"-2":"一昨日","-1":"昨日"},"hour":{"0":"1 時間以内","future":{"other":"{0} 時間後"},"past":{"other":"{0} 時間前"}},"hour-short":{"0":"1 時間以内","future":{"other":"{0} 時間後"},"past":{"other":"{0} 時間前"}},"hour-narrow":{"0":"1 時間以内","future":{"other":"{0}時間後"},"past":{"other":"{0}時間前"}},"minute":{"0":"1 分以内","future":{"other":"{0} 分後"},"past":{"other":"{0} 分前"}},"minute-short":{"0":"1 分以内","future":{"other":"{0} 分後"},"past":{"other":"{0} 分前"}},"minute-narrow":{"0":"1 分以内","future":{"other":"{0}分後"},"past":{"other":"{0}分前"}},"second":{"0":"今","future":{"other":"{0} 秒後"},"past":{"other":"{0} 秒前"}},"second-short":{"0":"今","future":{"other":"{0} 秒後"},"past":{"other":"{0} 秒前"}},"second-narrow":{"0":"今","future":{"other":"{0}秒後"},"past":{"other":"{0}秒前"}}}},"availableLocales":["ja"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
