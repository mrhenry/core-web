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
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("da-GL").length
)) {
// Intl.RelativeTimeFormat.~locale.da-GL
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"da-GL":{"nu":["latn"],"year":{"0":"i år","1":"næste år","future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"for {0} år siden","other":"for {0} år siden"},"-1":"sidste år"},"year-short":{"0":"i år","1":"næste år","future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"for {0} år siden","other":"for {0} år siden"},"-1":"sidste år"},"year-narrow":{"0":"i år","1":"næste år","future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"for {0} år siden","other":"for {0} år siden"},"-1":"sidste år"},"quarter":{"0":"dette kvartal","1":"næste kvartal","future":{"one":"om {0} kvartal","other":"om {0} kvartaler"},"past":{"one":"for {0} kvartal siden","other":"for {0} kvartaler siden"},"-1":"sidste kvartal"},"quarter-short":{"0":"dette kvt.","1":"næste kvt.","future":{"one":"om {0} kvt.","other":"om {0} kvt."},"past":{"one":"for {0} kvt. siden","other":"for {0} kvt. siden"},"-1":"sidste kvt."},"quarter-narrow":{"0":"dette kvt.","1":"næste kvt.","future":{"one":"om {0} kvt.","other":"om {0} kvt."},"past":{"one":"for {0} kvt. siden","other":"for {0} kvt. siden"},"-1":"sidste kvt."},"month":{"0":"denne måned","1":"næste måned","future":{"one":"om {0} måned","other":"om {0} måneder"},"past":{"one":"for {0} måned siden","other":"for {0} måneder siden"},"-1":"sidste måned"},"month-short":{"0":"denne md.","1":"næste md.","future":{"one":"om {0} md.","other":"om {0} mdr."},"past":{"one":"for {0} md. siden","other":"for {0} mdr. siden"},"-1":"sidste md."},"month-narrow":{"0":"denne md.","1":"næste md.","future":{"one":"om {0} md.","other":"om {0} mdr."},"past":{"one":"for {0} md. siden","other":"for {0} mdr. siden"},"-1":"sidste md."},"week":{"0":"denne uge","1":"næste uge","future":{"one":"om {0} uge","other":"om {0} uger"},"past":{"one":"for {0} uge siden","other":"for {0} uger siden"},"-1":"sidste uge"},"week-short":{"0":"denne uge","1":"næste uge","future":{"one":"om {0} uge","other":"om {0} uger"},"past":{"one":"for {0} uge siden","other":"for {0} uger siden"},"-1":"sidste uge"},"week-narrow":{"0":"denne uge","1":"næste uge","future":{"one":"om {0} uge","other":"om {0} uger"},"past":{"one":"for {0} uge siden","other":"for {0} uger siden"},"-1":"sidste uge"},"day":{"0":"i dag","1":"i morgen","2":"i overmorgen","future":{"one":"om {0} dag","other":"om {0} dage"},"past":{"one":"for {0} dag siden","other":"for {0} dage siden"},"-2":"i forgårs","-1":"i går"},"day-short":{"0":"i dag","1":"i morgen","2":"i overmorgen","future":{"one":"om {0} dag","other":"om {0} dage"},"past":{"one":"for {0} dag siden","other":"for {0} dage siden"},"-2":"i forgårs","-1":"i går"},"day-narrow":{"0":"i dag","1":"i morgen","2":"i overmorgen","future":{"one":"om {0} dag","other":"om {0} dage"},"past":{"one":"for {0} dag siden","other":"for {0} dage siden"},"-2":"i forgårs","-1":"i går"},"hour":{"0":"i den kommende time","future":{"one":"om {0} time","other":"om {0} timer"},"past":{"one":"for {0} time siden","other":"for {0} timer siden"}},"hour-short":{"0":"i den kommende time","future":{"one":"om {0} time","other":"om {0} timer"},"past":{"one":"for {0} time siden","other":"for {0} timer siden"}},"hour-narrow":{"0":"i den kommende time","future":{"one":"om {0} time","other":"om {0} timer"},"past":{"one":"for {0} time siden","other":"for {0} timer siden"}},"minute":{"0":"i det kommende minut","future":{"one":"om {0} minut","other":"om {0} minutter"},"past":{"one":"for {0} minut siden","other":"for {0} minutter siden"}},"minute-short":{"0":"i det kommende minut","future":{"one":"om {0} min.","other":"om {0} min."},"past":{"one":"for {0} min. siden","other":"for {0} min. siden"}},"minute-narrow":{"0":"i det kommende minut","future":{"one":"om {0} min.","other":"om {0} min."},"past":{"one":"for {0} min. siden","other":"for {0} min. siden"}},"second":{"0":"nu","future":{"one":"om {0} sekund","other":"om {0} sekunder"},"past":{"one":"for {0} sekund siden","other":"for {0} sekunder siden"}},"second-short":{"0":"nu","future":{"one":"om {0} sek.","other":"om {0} sek."},"past":{"one":"for {0} sek. siden","other":"for {0} sek. siden"}},"second-narrow":{"0":"nu","future":{"one":"om {0} sek.","other":"om {0} sek."},"past":{"one":"for {0} sek. siden","other":"for {0} sek. siden"}}}},"availableLocales":["da-GL"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
