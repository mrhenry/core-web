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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("az-Latn").length
)) {
// Intl.RelativeTimeFormat.~locale.az-Latn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"az-Latn":{"nu":["latn"],"year":{"0":"bu il","1":"gələn il","future":{"one":"{0} il ərzində","other":"{0} il ərzində"},"past":{"one":"{0} il öncə","other":"{0} il öncə"},"-1":"keçən il"},"year-short":{"0":"bu il","1":"gələn il","future":{"one":"{0} il ərzində","other":"{0} il ərzində"},"past":{"one":"{0} il öncə","other":"{0} il öncə"},"-1":"keçən il"},"year-narrow":{"0":"bu il","1":"gələn il","future":{"one":"{0} il ərzində","other":"{0} il ərzində"},"past":{"one":"{0} il öncə","other":"{0} il öncə"},"-1":"keçən il"},"quarter":{"0":"bu rüb","1":"gələn rüb","future":{"one":"{0} rüb ərzində","other":"{0} rüb ərzində"},"past":{"one":"{0} rüb öncə","other":"{0} rüb öncə"},"-1":"keçən rüb"},"quarter-short":{"0":"bu rüb","1":"gələn rüb","future":{"one":"{0} rüb ərzində","other":"{0} rüb ərzində"},"past":{"one":"{0} rüb öncə","other":"{0} rüb öncə"},"-1":"keçən rüb"},"quarter-narrow":{"0":"bu rüb","1":"gələn rüb","future":{"one":"{0} rüb ərzində","other":"{0} rüb ərzində"},"past":{"one":"{0} rüb öncə","other":"{0} rüb öncə"},"-1":"keçən rüb"},"month":{"0":"bu ay","1":"gələn ay","future":{"one":"{0} ay ərzində","other":"{0} ay ərzində"},"past":{"one":"{0} ay öncə","other":"{0} ay öncə"},"-1":"keçən ay"},"month-short":{"0":"bu ay","1":"gələn ay","future":{"one":"{0} ay ərzində","other":"{0} ay ərzində"},"past":{"one":"{0} ay öncə","other":"{0} ay öncə"},"-1":"keçən ay"},"month-narrow":{"0":"bu ay","1":"gələn ay","future":{"one":"{0} ay ərzində","other":"{0} ay ərzində"},"past":{"one":"{0} ay öncə","other":"{0} ay öncə"},"-1":"keçən ay"},"week":{"0":"bu həftə","1":"gələn həftə","future":{"one":"{0} həftə ərzində","other":"{0} həftə ərzində"},"past":{"one":"{0} həftə öncə","other":"{0} həftə öncə"},"-1":"keçən həftə"},"week-short":{"0":"bu həftə","1":"gələn həftə","future":{"one":"{0} həftə ərzində","other":"{0} həftə ərzində"},"past":{"one":"{0} həftə öncə","other":"{0} həftə öncə"},"-1":"keçən həftə"},"week-narrow":{"0":"bu həftə","1":"gələn həftə","future":{"one":"{0} həftə ərzində","other":"{0} həftə ərzində"},"past":{"one":"{0} həftə öncə","other":"{0} həftə öncə"},"-1":"keçən həftə"},"day":{"0":"bu gün","1":"sabah","future":{"one":"{0} gün ərzində","other":"{0} gün ərzində"},"past":{"one":"{0} gün öncə","other":"{0} gün öncə"},"-1":"dünən"},"day-short":{"0":"bu gün","1":"sabah","future":{"one":"{0} gün ərzində","other":"{0} gün ərzində"},"past":{"one":"{0} gün öncə","other":"{0} gün öncə"},"-1":"dünən"},"day-narrow":{"0":"bu gün","1":"sabah","future":{"one":"{0} gün ərzində","other":"{0} gün ərzində"},"past":{"one":"{0} gün öncə","other":"{0} gün öncə"},"-1":"dünən"},"hour":{"0":"bu saat","future":{"one":"{0} saat ərzində","other":"{0} saat ərzində"},"past":{"one":"{0} saat öncə","other":"{0} saat öncə"}},"hour-short":{"0":"bu saat","future":{"one":"{0} saat ərzində","other":"{0} saat ərzində"},"past":{"one":"{0} saat öncə","other":"{0} saat öncə"}},"hour-narrow":{"0":"bu saat","future":{"one":"{0} saat ərzində","other":"{0} saat ərzində"},"past":{"one":"{0} saat öncə","other":"{0} saat öncə"}},"minute":{"0":"bu dəqiqə","future":{"one":"{0} dəqiqə ərzində","other":"{0} dəqiqə ərzində"},"past":{"one":"{0} dəqiqə öncə","other":"{0} dəqiqə öncə"}},"minute-short":{"0":"bu dəqiqə","future":{"one":"{0} dəqiqə ərzində","other":"{0} dəqiqə ərzində"},"past":{"one":"{0} dəqiqə öncə","other":"{0} dəqiqə öncə"}},"minute-narrow":{"0":"bu dəqiqə","future":{"one":"{0} dəqiqə ərzində","other":"{0} dəqiqə ərzində"},"past":{"one":"{0} dəqiqə öncə","other":"{0} dəqiqə öncə"}},"second":{"0":"indi","future":{"one":"{0} saniyə ərzində","other":"{0} saniyə ərzində"},"past":{"one":"{0} saniyə öncə","other":"{0} saniyə öncə"}},"second-short":{"0":"indi","future":{"one":"{0} saniyə ərzində","other":"{0} saniyə ərzində"},"past":{"one":"{0} saniyə öncə","other":"{0} saniyə öncə"}},"second-narrow":{"0":"indi","future":{"one":"{0} saniyə ərzində","other":"{0} saniyə ərzində"},"past":{"one":"{0} saniyə öncə","other":"{0} saniyə öncə"}}}},"availableLocales":["az-Latn"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
