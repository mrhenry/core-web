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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("nb-SJ").length
)) {
// Intl.RelativeTimeFormat.~locale.nb-SJ
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"i år","1":"neste år","future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"for {0} år siden","other":"for {0} år siden"},"-1":"i fjor"},"year-short":{"0":"i år","1":"neste år","future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"for {0} år siden","other":"for {0} år siden"},"-1":"i fjor"},"year-narrow":{"0":"i år","1":"neste år","future":{"one":"+{0} år","other":"+{0} år"},"past":{"one":"–{0} år","other":"–{0} år"},"-1":"i fjor"},"quarter":{"0":"dette kvartalet","1":"neste kvartal","future":{"one":"om {0} kvartal","other":"om {0} kvartaler"},"past":{"one":"for {0} kvartal siden","other":"for {0} kvartaler siden"},"-1":"forrige kvartal"},"quarter-short":{"0":"dette kv.","1":"neste kv.","future":{"one":"om {0} kv.","other":"om {0} kv."},"past":{"one":"for {0} kv. siden","other":"for {0} kv. siden"},"-1":"forrige kv."},"quarter-narrow":{"0":"dette kv.","1":"neste kv.","future":{"one":"+{0} kv.","other":"+{0} kv."},"past":{"one":"–{0} kv.","other":"–{0} kv."},"-1":"forrige kv."},"month":{"0":"denne måneden","1":"neste måned","future":{"one":"om {0} måned","other":"om {0} måneder"},"past":{"one":"for {0} måned siden","other":"for {0} måneder siden"},"-1":"forrige måned"},"month-short":{"0":"denne md.","1":"neste md.","future":{"one":"om {0} md.","other":"om {0} md."},"past":{"one":"for {0} md. siden","other":"for {0} md. siden"},"-1":"forrige md."},"month-narrow":{"0":"denne md.","1":"neste md.","future":{"one":"+{0} md.","other":"+{0} md."},"past":{"one":"-{0} md.","other":"-{0} md."},"-1":"forrige md."},"week":{"0":"denne uken","1":"neste uke","future":{"one":"om {0} uke","other":"om {0} uker"},"past":{"one":"for {0} uke siden","other":"for {0} uker siden"},"-1":"forrige uke"},"week-short":{"0":"denne uken","1":"neste uke","future":{"one":"om {0} u.","other":"om {0} u."},"past":{"one":"for {0} u. siden","other":"for {0} u. siden"},"-1":"forrige uke"},"week-narrow":{"0":"denne uken","1":"neste uke","future":{"one":"+{0} u.","other":"+{0} u."},"past":{"one":"-{0} u.","other":"-{0} u."},"-1":"forrige uke"},"day":{"0":"i dag","1":"i morgen","2":"i overmorgen","future":{"one":"om {0} døgn","other":"om {0} døgn"},"past":{"one":"for {0} døgn siden","other":"for {0} døgn siden"},"-2":"i forgårs","-1":"i går"},"day-short":{"0":"i dag","1":"i morgen","2":"i overmorgen","future":{"one":"om {0} d.","other":"om {0} d."},"past":{"one":"for {0} d. siden","other":"for {0} d. siden"},"-2":"i forgårs","-1":"i går"},"day-narrow":{"0":"i dag","1":"i morgen","2":"+2 d.","future":{"one":"+{0} d.","other":"+{0} d."},"past":{"one":"-{0} d.","other":"-{0} d."},"-2":"-2 d.","-1":"i går"},"hour":{"0":"denne timen","future":{"one":"om {0} time","other":"om {0} timer"},"past":{"one":"for {0} time siden","other":"for {0} timer siden"}},"hour-short":{"0":"denne timen","future":{"one":"om {0} t","other":"om {0} t"},"past":{"one":"for {0} t siden","other":"for {0} t siden"}},"hour-narrow":{"0":"denne timen","future":{"one":"+{0} t","other":"+{0} t"},"past":{"one":"-{0} t","other":"-{0} t"}},"minute":{"0":"dette minuttet","future":{"one":"om {0} minutt","other":"om {0} minutter"},"past":{"one":"for {0} minutt siden","other":"for {0} minutter siden"}},"minute-short":{"0":"dette minuttet","future":{"one":"om {0} min","other":"om {0} min"},"past":{"one":"for {0} min siden","other":"for {0} min siden"}},"minute-narrow":{"0":"dette minuttet","future":{"one":"+{0} min","other":"+{0} min"},"past":{"one":"-{0} min","other":"-{0} min"}},"second":{"0":"nå","future":{"one":"om {0} sekund","other":"om {0} sekunder"},"past":{"one":"for {0} sekund siden","other":"for {0} sekunder siden"}},"second-short":{"0":"nå","future":{"one":"om {0} sek","other":"om {0} sek"},"past":{"one":"for {0} sek siden","other":"for {0} sek siden"}},"second-narrow":{"0":"nå","future":{"one":"+{0} s","other":"+{0} s"},"past":{"one":"-{0} s","other":"-{0} s"}}},"locale":"nb-SJ"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
