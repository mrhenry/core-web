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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("tk").length
)) {
// Intl.RelativeTimeFormat.~locale.tk
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"şu ýyl","1":"indiki ýyl","future":{"one":"{0} ýyldan","other":"{0} ýyldan"},"past":{"one":"{0} ýyl öň","other":"{0} ýyl öň"},"-1":"geçen ýyl"},"year-short":{"0":"şu ýyl","1":"indiki ýyl","future":{"one":"{0} ý-dan","other":"{0} ý-dan"},"past":{"one":"{0} ý. öň","other":"{0} ý. öň"},"-1":"geçen ýyl"},"year-narrow":{"0":"şu ýyl","1":"indiki ýyl","future":{"one":"{0} ý-dan","other":"{0} ý-dan"},"past":{"one":"{0} ý. öň","other":"{0} ý. öň"},"-1":"geçen ýyl"},"quarter":{"0":"şu çärýek","1":"indiki çärýek","future":{"one":"{0} çärýekden","other":"{0} çärýekden"},"past":{"one":"{0} çärýek öň","other":"{0} çärýek öň"},"-1":"geçen çärýek"},"quarter-short":{"0":"şu çärýek","1":"indiki çärýek","future":{"one":"{0} çär-den","other":"{0} çär-den"},"past":{"one":"{0} çär. öň","other":"{0} çär. öň"},"-1":"geçen çärýek"},"quarter-narrow":{"0":"şu çärýek","1":"indiki çärýek","future":{"one":"{0} ç-den","other":"{0} ç-den"},"past":{"one":"{0} ç. öň","other":"{0} ç. öň"},"-1":"geçen çärýek"},"month":{"0":"şu aý","1":"indiki aý","future":{"one":"{0} aýdan","other":"{0} aýdan"},"past":{"one":"{0} aý öň","other":"{0} aý öň"},"-1":"geçen aý"},"month-short":{"0":"şu aý","1":"indiki aý","future":{"one":"{0} aýdan","other":"{0} aýdan"},"past":{"one":"{0} aý öň","other":"{0} aý öň"},"-1":"geçen aý"},"month-narrow":{"0":"şu aý","1":"indiki aý","future":{"one":"{0} aýdan","other":"{0} aýdan"},"past":{"one":"{0} aý öň","other":"{0} aý öň"},"-1":"geçen aý"},"week":{"0":"şu hepde","1":"indiki hepde","future":{"one":"{0} hepdeden","other":"{0} hepdeden"},"past":{"one":"{0} hepde öň","other":"{0} hepde öň"},"-1":"geçen hepde"},"week-short":{"0":"şu hepde","1":"indiki hepde","future":{"one":"{0} hep-den","other":"{0} hep-den"},"past":{"one":"{0} hep. öň","other":"{0} hep. öň"},"-1":"geçen hepde"},"week-narrow":{"0":"şu hepde","1":"indiki hepde","future":{"one":"{0} h-den","other":"{0} h-den"},"past":{"one":"{0} h. öň","other":"{0} h. öň"},"-1":"geçen hepde"},"day":{"0":"şu gün","1":"ertir","future":{"one":"{0} günden","other":"{0} günden"},"past":{"one":"{0} gün öň","other":"{0} gün öň"},"-1":"düýn"},"day-short":{"0":"şu gün","1":"ertir","future":{"one":"{0} g-den","other":"{0} g-den"},"past":{"one":"{0} g. öň","other":"{0} g. öň"},"-1":"düýn"},"day-narrow":{"0":"şu gün","1":"ertir","future":{"one":"{0} g-den","other":"{0} g-den"},"past":{"one":"{0} g. öň","other":"{0} g. öň"},"-1":"düýn"},"hour":{"0":"şu sagat","future":{"one":"{0} sagatdan","other":"{0} sagatdan"},"past":{"one":"{0} sagat öň","other":"{0} sagat öň"}},"hour-short":{"0":"şu sagat","future":{"one":"{0} sag-dan","other":"{0} sag-dan"},"past":{"one":"{0} sag. öň","other":"{0} sag. öň"}},"hour-narrow":{"0":"şu sagat","future":{"one":"{0} sag-dan","other":"{0} sag-dan"},"past":{"one":"{0} sag. öň","other":"{0} sag. öň"}},"minute":{"0":"şu minut","future":{"one":"{0} minutdan","other":"{0} minutdan"},"past":{"one":"{0} minut öň","other":"{0} minut öň"}},"minute-short":{"0":"şu minut","future":{"one":"{0} min-dan","other":"{0} min-dan"},"past":{"one":"{0} min. öň","other":"{0} min. öň"}},"minute-narrow":{"0":"şu minut","future":{"one":"{0} min-dan","other":"{0} min-dan"},"past":{"one":"{0} min. öň","other":"{0} min. öň"}},"second":{"0":"häzir","future":{"one":"{0} sekuntdan","other":"{0} sekuntdan"},"past":{"one":"{0} sekunt öň","other":"{0} sekunt öň"}},"second-short":{"0":"häzir","future":{"one":"{0} sek-dan","other":"{0} sek-dan"},"past":{"one":"{0} sek. öň","other":"{0} sek. öň"}},"second-narrow":{"0":"häzir","future":{"one":"{0} sek-dan","other":"{0} sek-dan"},"past":{"one":"{0} sek. öň","other":"{0} sek. öň"}}},"locale":"tk"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
