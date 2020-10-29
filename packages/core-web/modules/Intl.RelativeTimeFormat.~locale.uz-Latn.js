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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("uz-Latn").length
)) {
// Intl.RelativeTimeFormat.~locale.uz-Latn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"uz-Latn":{"nu":["latn"],"year":{"0":"shu yil","1":"keyingi yil","future":{"one":"{0} yildan keyin","other":"{0} yildan keyin"},"past":{"one":"{0} yil oldin","other":"{0} yil oldin"},"-1":"o‘tgan yil"},"year-short":{"0":"bu yil","1":"keyingi yil","future":{"one":"{0} yildan keyin","other":"{0} yildan keyin"},"past":{"one":"{0} yil oldin","other":"{0} yil oldin"},"-1":"o‘ʻtgan yil"},"year-narrow":{"0":"bu yil","1":"keyingi yil","future":{"one":"{0} yildan keyin","other":"{0} yildan keyin"},"past":{"one":"{0} yil oldin","other":"{0} yil oldin"},"-1":"o‘tgan yil"},"quarter":{"0":"shu chorak","1":"keyingi chorak","future":{"one":"{0} chorakdan keyin","other":"{0} chorakdan keyin"},"past":{"one":"{0} chorak oldin","other":"{0} chorak oldin"},"-1":"o‘tgan chorak"},"quarter-short":{"0":"shu chorak","1":"keyingi chorak","future":{"one":"{0} chorakdan keyin","other":"{0} chorakdan keyin"},"past":{"one":"{0} chorak oldin","other":"{0} chorak oldin"},"-1":"o‘tgan chorak"},"quarter-narrow":{"0":"shu chorak","1":"keyingi chorak","future":{"one":"{0} chorakdan keyin","other":"{0} chorakdan keyin"},"past":{"one":"{0} chorak oldin","other":"{0} chorak oldin"},"-1":"o‘tgan chorak"},"month":{"0":"shu oy","1":"keyingi oy","future":{"one":"{0} oydan keyin","other":"{0} oydan keyin"},"past":{"one":"{0} oy oldin","other":"{0} oy oldin"},"-1":"o‘tgan oy"},"month-short":{"0":"bu oy","1":"keyingi oy","future":{"one":"{0} oydan keyin","other":"{0} oydan keyin"},"past":{"one":"{0} oy oldin","other":"{0} oy oldin"},"-1":"o‘tgan oy"},"month-narrow":{"0":"bu oy","1":"keyingi oy","future":{"one":"{0} oydan keyin","other":"{0} oydan keyin"},"past":{"one":"{0} oy oldin","other":"{0} oy oldin"},"-1":"o‘tgan oy"},"week":{"0":"shu hafta","1":"keyingi hafta","future":{"one":"{0} haftadan keyin","other":"{0} haftadan keyin"},"past":{"one":"{0} hafta oldin","other":"{0} hafta oldin"},"-1":"o‘tgan hafta"},"week-short":{"0":"bu hafta","1":"keyingi hafta","future":{"one":"{0} haftadan keyin","other":"{0} haftadan keyin"},"past":{"one":"{0} hafta oldin","other":"{0} hafta oldin"},"-1":"o‘tgan hafta"},"week-narrow":{"0":"bu hafta","1":"keyingi hafta","future":{"one":"{0} haftadan keyin","other":"{0} haftadan keyin"},"past":{"one":"{0} hafta oldin","other":"{0} hafta oldin"},"-1":"o‘tgan hafta"},"day":{"0":"bugun","1":"ertaga","future":{"one":"{0} kundan keyin","other":"{0} kundan keyin"},"past":{"one":"{0} kun oldin","other":"{0} kun oldin"},"-1":"kecha"},"day-short":{"0":"bugun","1":"ertaga","future":{"one":"{0} kundan keyin","other":"{0} kundan keyin"},"past":{"one":"{0} kun oldin","other":"{0} kun oldin"},"-1":"kecha"},"day-narrow":{"0":"bugun","1":"ertaga","future":{"one":"{0} kundan keyin","other":"{0} kundan keyin"},"past":{"one":"{0} kun oldin","other":"{0} kun oldin"},"-1":"kecha"},"hour":{"0":"shu soatda","future":{"one":"{0} soatdan keyin","other":"{0} soatdan keyin"},"past":{"one":"{0} soat oldin","other":"{0} soat oldin"}},"hour-short":{"0":"shu soatda","future":{"one":"{0} soatdan keyin","other":"{0} soatdan keyin"},"past":{"one":"{0} soat oldin","other":"{0} soat oldin"}},"hour-narrow":{"0":"shu soatda","future":{"one":"{0} soatdan keyin","other":"{0} soatdan keyin"},"past":{"one":"{0} soat oldin","other":"{0} soat oldin"}},"minute":{"0":"shu daqiqada","future":{"one":"{0} daqiqadan keyin","other":"{0} daqiqadan keyin"},"past":{"one":"{0} daqiqa oldin","other":"{0} daqiqa oldin"}},"minute-short":{"0":"shu daqiqada","future":{"one":"{0} daqiqadan keyin","other":"{0} daqiqadan keyin"},"past":{"one":"{0} daqiqa oldin","other":"{0} daqiqa oldin"}},"minute-narrow":{"0":"shu daqiqada","future":{"one":"{0} daqiqadan keyin","other":"{0} daqiqadan keyin"},"past":{"one":"{0} daqiqa oldin","other":"{0} daqiqa oldin"}},"second":{"0":"hozir","future":{"one":"{0} soniyadan keyin","other":"{0} soniyadan keyin"},"past":{"one":"{0} soniya oldin","other":"{0} soniya oldin"}},"second-short":{"0":"hozir","future":{"one":"{0} soniyadan keyin","other":"{0} soniyadan keyin"},"past":{"one":"{0} soniya oldin","other":"{0} soniya oldin"}},"second-narrow":{"0":"hozir","future":{"one":"{0} soniyadan keyin","other":"{0} soniyadan keyin"},"past":{"one":"{0} soniya oldin","other":"{0} soniya oldin"}}}},"availableLocales":["uz-Latn"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
