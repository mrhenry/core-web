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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ja").length
)) {
// Intl.RelativeTimeFormat.~locale.ja
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"今年","1":"来年","future":{"other":"{0} 年後"},"past":{"other":"{0} 年前"},"-1":"昨年"},"year-short":{"0":"今年","1":"来年","future":{"other":"{0} 年後"},"past":{"other":"{0} 年前"},"-1":"昨年"},"year-narrow":{"0":"今年","1":"来年","future":{"other":"{0}年後"},"past":{"other":"{0}年前"},"-1":"昨年"},"quarter":{"0":"今四半期","1":"翌四半期","future":{"other":"{0} 四半期後"},"past":{"other":"{0} 四半期前"},"-1":"前四半期"},"quarter-short":{"0":"今四半期","1":"翌四半期","future":{"other":"{0} 四半期後"},"past":{"other":"{0} 四半期前"},"-1":"前四半期"},"quarter-narrow":{"0":"今四半期","1":"翌四半期","future":{"other":"{0}四半期後"},"past":{"other":"{0}四半期前"},"-1":"前四半期"},"month":{"0":"今月","1":"来月","future":{"other":"{0} か月後"},"past":{"other":"{0} か月前"},"-1":"先月"},"month-short":{"0":"今月","1":"来月","future":{"other":"{0} か月後"},"past":{"other":"{0} か月前"},"-1":"先月"},"month-narrow":{"0":"今月","1":"来月","future":{"other":"{0}か月後"},"past":{"other":"{0}か月前"},"-1":"先月"},"week":{"0":"今週","1":"来週","future":{"other":"{0} 週間後"},"past":{"other":"{0} 週間前"},"-1":"先週"},"week-short":{"0":"今週","1":"来週","future":{"other":"{0} 週間後"},"past":{"other":"{0} 週間前"},"-1":"先週"},"week-narrow":{"0":"今週","1":"来週","future":{"other":"{0}週間後"},"past":{"other":"{0}週間前"},"-1":"先週"},"day":{"0":"今日","1":"明日","2":"明後日","future":{"other":"{0} 日後"},"past":{"other":"{0} 日前"},"-2":"一昨日","-1":"昨日"},"day-short":{"0":"今日","1":"明日","2":"明後日","future":{"other":"{0} 日後"},"past":{"other":"{0} 日前"},"-2":"一昨日","-1":"昨日"},"day-narrow":{"0":"今日","1":"明日","2":"明後日","future":{"other":"{0}日後"},"past":{"other":"{0}日前"},"-2":"一昨日","-1":"昨日"},"hour":{"0":"1 時間以内","future":{"other":"{0} 時間後"},"past":{"other":"{0} 時間前"}},"hour-short":{"0":"1 時間以内","future":{"other":"{0} 時間後"},"past":{"other":"{0} 時間前"}},"hour-narrow":{"0":"1 時間以内","future":{"other":"{0}時間後"},"past":{"other":"{0}時間前"}},"minute":{"0":"1 分以内","future":{"other":"{0} 分後"},"past":{"other":"{0} 分前"}},"minute-short":{"0":"1 分以内","future":{"other":"{0} 分後"},"past":{"other":"{0} 分前"}},"minute-narrow":{"0":"1 分以内","future":{"other":"{0}分後"},"past":{"other":"{0}分前"}},"second":{"0":"今","future":{"other":"{0} 秒後"},"past":{"other":"{0} 秒前"}},"second-short":{"0":"今","future":{"other":"{0} 秒後"},"past":{"other":"{0} 秒前"}},"second-narrow":{"0":"今","future":{"other":"{0}秒後"},"past":{"other":"{0}秒前"}}},"locale":"ja"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
