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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("tk").length
)) {
// Intl.RelativeTimeFormat.~locale.tk
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"tk":{"nu":["latn"],"year":{"0":"şu ýyl","1":"indiki ýyl","future":{"one":"{0} ýyldan","other":"{0} ýyldan"},"past":{"one":"{0} ýyl öň","other":"{0} ýyl öň"},"-1":"geçen ýyl"},"year-short":{"0":"şu ýyl","1":"indiki ýyl","future":{"one":"{0} ý-dan","other":"{0} ý-dan"},"past":{"one":"{0} ý. öň","other":"{0} ý. öň"},"-1":"geçen ýyl"},"year-narrow":{"0":"şu ýyl","1":"indiki ýyl","future":{"one":"{0} ý-dan","other":"{0} ý-dan"},"past":{"one":"{0} ý. öň","other":"{0} ý. öň"},"-1":"geçen ýyl"},"quarter":{"0":"şu çärýek","1":"indiki çärýek","future":{"one":"{0} çärýekden","other":"{0} çärýekden"},"past":{"one":"{0} çärýek öň","other":"{0} çärýek öň"},"-1":"geçen çärýek"},"quarter-short":{"0":"şu çärýek","1":"indiki çärýek","future":{"one":"{0} çär-den","other":"{0} çär-den"},"past":{"one":"{0} çär. öň","other":"{0} çär. öň"},"-1":"geçen çärýek"},"quarter-narrow":{"0":"şu çärýek","1":"indiki çärýek","future":{"one":"{0} ç-den","other":"{0} ç-den"},"past":{"one":"{0} ç. öň","other":"{0} ç. öň"},"-1":"geçen çärýek"},"month":{"0":"şu aý","1":"indiki aý","future":{"one":"{0} aýdan","other":"{0} aýdan"},"past":{"one":"{0} aý öň","other":"{0} aý öň"},"-1":"geçen aý"},"month-short":{"0":"şu aý","1":"indiki aý","future":{"one":"{0} aýdan","other":"{0} aýdan"},"past":{"one":"{0} aý öň","other":"{0} aý öň"},"-1":"geçen aý"},"month-narrow":{"0":"şu aý","1":"indiki aý","future":{"one":"{0} aýdan","other":"{0} aýdan"},"past":{"one":"{0} aý öň","other":"{0} aý öň"},"-1":"geçen aý"},"week":{"0":"şu hepde","1":"indiki hepde","future":{"one":"{0} hepdeden","other":"{0} hepdeden"},"past":{"one":"{0} hepde öň","other":"{0} hepde öň"},"-1":"geçen hepde"},"week-short":{"0":"şu hepde","1":"indiki hepde","future":{"one":"{0} hep-den","other":"{0} hep-den"},"past":{"one":"{0} hep. öň","other":"{0} hep. öň"},"-1":"geçen hepde"},"week-narrow":{"0":"şu hepde","1":"indiki hepde","future":{"one":"{0} h-den","other":"{0} h-den"},"past":{"one":"{0} h. öň","other":"{0} h. öň"},"-1":"geçen hepde"},"day":{"0":"şu gün","1":"ertir","future":{"one":"{0} günden","other":"{0} günden"},"past":{"one":"{0} gün öň","other":"{0} gün öň"},"-1":"düýn"},"day-short":{"0":"şu gün","1":"ertir","future":{"one":"{0} g-den","other":"{0} g-den"},"past":{"one":"{0} g. öň","other":"{0} g. öň"},"-1":"düýn"},"day-narrow":{"0":"şu gün","1":"ertir","future":{"one":"{0} g-den","other":"{0} g-den"},"past":{"one":"{0} g. öň","other":"{0} g. öň"},"-1":"düýn"},"hour":{"0":"şu sagat","future":{"one":"{0} sagatdan","other":"{0} sagatdan"},"past":{"one":"{0} sagat öň","other":"{0} sagat öň"}},"hour-short":{"0":"şu sagat","future":{"one":"{0} sag-dan","other":"{0} sag-dan"},"past":{"one":"{0} sag. öň","other":"{0} sag. öň"}},"hour-narrow":{"0":"şu sagat","future":{"one":"{0} sag-dan","other":"{0} sag-dan"},"past":{"one":"{0} sag. öň","other":"{0} sag. öň"}},"minute":{"0":"şu minut","future":{"one":"{0} minutdan","other":"{0} minutdan"},"past":{"one":"{0} minut öň","other":"{0} minut öň"}},"minute-short":{"0":"şu minut","future":{"one":"{0} min-dan","other":"{0} min-dan"},"past":{"one":"{0} min. öň","other":"{0} min. öň"}},"minute-narrow":{"0":"şu minut","future":{"one":"{0} min-dan","other":"{0} min-dan"},"past":{"one":"{0} min. öň","other":"{0} min. öň"}},"second":{"0":"häzir","future":{"one":"{0} sekuntdan","other":"{0} sekuntdan"},"past":{"one":"{0} sekunt öň","other":"{0} sekunt öň"}},"second-short":{"0":"häzir","future":{"one":"{0} sek-dan","other":"{0} sek-dan"},"past":{"one":"{0} sek. öň","other":"{0} sek. öň"}},"second-narrow":{"0":"häzir","future":{"one":"{0} sek-dan","other":"{0} sek-dan"},"past":{"one":"{0} sek. öň","other":"{0} sek. öň"}}}},"availableLocales":["tk"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
