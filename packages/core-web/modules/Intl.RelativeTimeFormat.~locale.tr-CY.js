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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("tr-CY").length
)) {
// Intl.RelativeTimeFormat.~locale.tr-CY
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"tr-CY":{"nu":["latn"],"year":{"0":"bu yıl","1":"gelecek yıl","future":{"one":"{0} yıl sonra","other":"{0} yıl sonra"},"past":{"one":"{0} yıl önce","other":"{0} yıl önce"},"-1":"geçen yıl"},"year-short":{"0":"bu yıl","1":"gelecek yıl","future":{"one":"{0} yıl sonra","other":"{0} yıl sonra"},"past":{"one":"{0} yıl önce","other":"{0} yıl önce"},"-1":"geçen yıl"},"year-narrow":{"0":"bu yıl","1":"gelecek yıl","future":{"one":"{0} yıl sonra","other":"{0} yıl sonra"},"past":{"one":"{0} yıl önce","other":"{0} yıl önce"},"-1":"geçen yıl"},"quarter":{"0":"bu çeyrek","1":"gelecek çeyrek","future":{"one":"{0} çeyrek sonra","other":"{0} çeyrek sonra"},"past":{"one":"{0} çeyrek önce","other":"{0} çeyrek önce"},"-1":"geçen çeyrek"},"quarter-short":{"0":"bu çyr.","1":"gelecek çyr.","future":{"one":"{0} çyr. sonra","other":"{0} çyr. sonra"},"past":{"one":"{0} çyr. önce","other":"{0} çyr. önce"},"-1":"geçen çyr."},"quarter-narrow":{"0":"bu çyr.","1":"gelecek çyr.","future":{"one":"{0} çyr. sonra","other":"{0} çyr. sonra"},"past":{"one":"{0} çyr. önce","other":"{0} çyr. önce"},"-1":"geçen çyr."},"month":{"0":"bu ay","1":"gelecek ay","future":{"one":"{0} ay sonra","other":"{0} ay sonra"},"past":{"one":"{0} ay önce","other":"{0} ay önce"},"-1":"geçen ay"},"month-short":{"0":"bu ay","1":"gelecek ay","future":{"one":"{0} ay sonra","other":"{0} ay sonra"},"past":{"one":"{0} ay önce","other":"{0} ay önce"},"-1":"geçen ay"},"month-narrow":{"0":"bu ay","1":"gelecek ay","future":{"one":"{0} ay sonra","other":"{0} ay sonra"},"past":{"one":"{0} ay önce","other":"{0} ay önce"},"-1":"geçen ay"},"week":{"0":"bu hafta","1":"gelecek hafta","future":{"one":"{0} hafta sonra","other":"{0} hafta sonra"},"past":{"one":"{0} hafta önce","other":"{0} hafta önce"},"-1":"geçen hafta"},"week-short":{"0":"bu hf.","1":"gelecek hf.","future":{"one":"{0} hf. sonra","other":"{0} hf. sonra"},"past":{"one":"{0} hf. önce","other":"{0} hf. önce"},"-1":"geçen hf."},"week-narrow":{"0":"bu hf.","1":"gelecek hf.","future":{"one":"{0} hf. sonra","other":"{0} hf. sonra"},"past":{"one":"{0} hf. önce","other":"{0} hf. önce"},"-1":"geçen hf."},"day":{"0":"bugün","1":"yarın","2":"öbür gün","future":{"one":"{0} gün sonra","other":"{0} gün sonra"},"past":{"one":"{0} gün önce","other":"{0} gün önce"},"-2":"evvelsi gün","-1":"dün"},"day-short":{"0":"bugün","1":"yarın","2":"öbür gün","future":{"one":"{0} gün sonra","other":"{0} gün sonra"},"past":{"one":"{0} gün önce","other":"{0} gün önce"},"-2":"evvelsi gün","-1":"dün"},"day-narrow":{"0":"bugün","1":"yarın","2":"öbür gün","future":{"one":"{0} gün sonra","other":"{0} gün sonra"},"past":{"one":"{0} gün önce","other":"{0} gün önce"},"-2":"evvelsi gün","-1":"dün"},"hour":{"0":"bu saat","future":{"one":"{0} saat sonra","other":"{0} saat sonra"},"past":{"one":"{0} saat önce","other":"{0} saat önce"}},"hour-short":{"0":"bu saat","future":{"one":"{0} sa. sonra","other":"{0} sa. sonra"},"past":{"one":"{0} sa. önce","other":"{0} sa. önce"}},"hour-narrow":{"0":"bu saat","future":{"one":"{0} sa. sonra","other":"{0} sa. sonra"},"past":{"one":"{0} sa. önce","other":"{0} sa. önce"}},"minute":{"0":"bu dakika","future":{"one":"{0} dakika sonra","other":"{0} dakika sonra"},"past":{"one":"{0} dakika önce","other":"{0} dakika önce"}},"minute-short":{"0":"bu dakika","future":{"one":"{0} dk. sonra","other":"{0} dk. sonra"},"past":{"one":"{0} dk. önce","other":"{0} dk. önce"}},"minute-narrow":{"0":"bu dakika","future":{"one":"{0} dk. sonra","other":"{0} dk. sonra"},"past":{"one":"{0} dk. önce","other":"{0} dk. önce"}},"second":{"0":"şimdi","future":{"one":"{0} saniye sonra","other":"{0} saniye sonra"},"past":{"one":"{0} saniye önce","other":"{0} saniye önce"}},"second-short":{"0":"şimdi","future":{"one":"{0} sn. sonra","other":"{0} sn. sonra"},"past":{"one":"{0} sn. önce","other":"{0} sn. önce"}},"second-narrow":{"0":"şimdi","future":{"one":"{0} sn. sonra","other":"{0} sn. sonra"},"past":{"one":"{0} sn. önce","other":"{0} sn. önce"}}}},"availableLocales":["tr-CY"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
