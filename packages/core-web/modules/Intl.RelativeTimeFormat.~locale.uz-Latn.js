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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("uz-Latn").length
)) {
// Intl.RelativeTimeFormat.~locale.uz-Latn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"shu yil","1":"keyingi yil","future":{"one":"{0} yildan keyin","other":"{0} yildan keyin"},"past":{"one":"{0} yil oldin","other":"{0} yil oldin"},"-1":"o‘tgan yil"},"year-short":{"0":"bu yil","1":"keyingi yil","future":{"one":"{0} yildan keyin","other":"{0} yildan keyin"},"past":{"one":"{0} yil oldin","other":"{0} yil oldin"},"-1":"o‘ʻtgan yil"},"year-narrow":{"0":"bu yil","1":"keyingi yil","future":{"one":"{0} yildan keyin","other":"{0} yildan keyin"},"past":{"one":"{0} yil oldin","other":"{0} yil oldin"},"-1":"o‘tgan yil"},"quarter":{"0":"shu chorak","1":"keyingi chorak","future":{"one":"{0} chorakdan keyin","other":"{0} chorakdan keyin"},"past":{"one":"{0} chorak oldin","other":"{0} chorak oldin"},"-1":"o‘tgan chorak"},"quarter-short":{"0":"shu chorak","1":"keyingi chorak","future":{"one":"{0} chorakdan keyin","other":"{0} chorakdan keyin"},"past":{"one":"{0} chorak oldin","other":"{0} chorak oldin"},"-1":"o‘tgan chorak"},"quarter-narrow":{"0":"shu chorak","1":"keyingi chorak","future":{"one":"{0} chorakdan keyin","other":"{0} chorakdan keyin"},"past":{"one":"{0} chorak oldin","other":"{0} chorak oldin"},"-1":"o‘tgan chorak"},"month":{"0":"shu oy","1":"keyingi oy","future":{"one":"{0} oydan keyin","other":"{0} oydan keyin"},"past":{"one":"{0} oy oldin","other":"{0} oy oldin"},"-1":"o‘tgan oy"},"month-short":{"0":"bu oy","1":"keyingi oy","future":{"one":"{0} oydan keyin","other":"{0} oydan keyin"},"past":{"one":"{0} oy oldin","other":"{0} oy oldin"},"-1":"o‘tgan oy"},"month-narrow":{"0":"bu oy","1":"keyingi oy","future":{"one":"{0} oydan keyin","other":"{0} oydan keyin"},"past":{"one":"{0} oy oldin","other":"{0} oy oldin"},"-1":"o‘tgan oy"},"week":{"0":"shu hafta","1":"keyingi hafta","future":{"one":"{0} haftadan keyin","other":"{0} haftadan keyin"},"past":{"one":"{0} hafta oldin","other":"{0} hafta oldin"},"-1":"o‘tgan hafta"},"week-short":{"0":"bu hafta","1":"keyingi hafta","future":{"one":"{0} haftadan keyin","other":"{0} haftadan keyin"},"past":{"one":"{0} hafta oldin","other":"{0} hafta oldin"},"-1":"o‘tgan hafta"},"week-narrow":{"0":"bu hafta","1":"keyingi hafta","future":{"one":"{0} haftadan keyin","other":"{0} haftadan keyin"},"past":{"one":"{0} hafta oldin","other":"{0} hafta oldin"},"-1":"o‘tgan hafta"},"day":{"0":"bugun","1":"ertaga","future":{"one":"{0} kundan keyin","other":"{0} kundan keyin"},"past":{"one":"{0} kun oldin","other":"{0} kun oldin"},"-1":"kecha"},"day-short":{"0":"bugun","1":"ertaga","future":{"one":"{0} kundan keyin","other":"{0} kundan keyin"},"past":{"one":"{0} kun oldin","other":"{0} kun oldin"},"-1":"kecha"},"day-narrow":{"0":"bugun","1":"ertaga","future":{"one":"{0} kundan keyin","other":"{0} kundan keyin"},"past":{"one":"{0} kun oldin","other":"{0} kun oldin"},"-1":"kecha"},"hour":{"0":"shu soatda","future":{"one":"{0} soatdan keyin","other":"{0} soatdan keyin"},"past":{"one":"{0} soat oldin","other":"{0} soat oldin"}},"hour-short":{"0":"shu soatda","future":{"one":"{0} soatdan keyin","other":"{0} soatdan keyin"},"past":{"one":"{0} soat oldin","other":"{0} soat oldin"}},"hour-narrow":{"0":"shu soatda","future":{"one":"{0} soatdan keyin","other":"{0} soatdan keyin"},"past":{"one":"{0} soat oldin","other":"{0} soat oldin"}},"minute":{"0":"shu daqiqada","future":{"one":"{0} daqiqadan keyin","other":"{0} daqiqadan keyin"},"past":{"one":"{0} daqiqa oldin","other":"{0} daqiqa oldin"}},"minute-short":{"0":"shu daqiqada","future":{"one":"{0} daqiqadan keyin","other":"{0} daqiqadan keyin"},"past":{"one":"{0} daqiqa oldin","other":"{0} daqiqa oldin"}},"minute-narrow":{"0":"shu daqiqada","future":{"one":"{0} daqiqadan keyin","other":"{0} daqiqadan keyin"},"past":{"one":"{0} daqiqa oldin","other":"{0} daqiqa oldin"}},"second":{"0":"hozir","future":{"one":"{0} soniyadan keyin","other":"{0} soniyadan keyin"},"past":{"one":"{0} soniya oldin","other":"{0} soniya oldin"}},"second-short":{"0":"hozir","future":{"one":"{0} soniyadan keyin","other":"{0} soniyadan keyin"},"past":{"one":"{0} soniya oldin","other":"{0} soniya oldin"}},"second-narrow":{"0":"hozir","future":{"one":"{0} soniyadan keyin","other":"{0} soniyadan keyin"},"past":{"one":"{0} soniya oldin","other":"{0} soniya oldin"}}},"locale":"uz-Latn"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
