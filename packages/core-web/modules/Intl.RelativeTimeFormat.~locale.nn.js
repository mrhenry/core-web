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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("nn").length
)) {
// Intl.RelativeTimeFormat.~locale.nn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"i år","1":"neste år","future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"for {0} år sidan","other":"for {0} år sidan"},"-1":"i fjor"},"year-short":{"0":"i år","1":"neste år","future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"for {0} år sidan","other":"for {0} år sidan"},"-1":"i fjor"},"year-narrow":{"0":"i år","1":"neste år","future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"for {0} år sidan","other":"for {0} år sidan"},"-1":"i fjor"},"quarter":{"0":"dette kvartalet","1":"neste kvartal","future":{"one":"om {0} kvartal","other":"om {0} kvartal"},"past":{"one":"for {0} kvartal sidan","other":"for {0} kvartal sidan"},"-1":"førre kvartal"},"quarter-short":{"0":"dette kvartalet","1":"neste kvartal","future":{"one":"om {0} kv.","other":"om {0} kv."},"past":{"one":"for {0} kv. sidan","other":"for {0} kv. sidan"},"-1":"førre kvartal"},"quarter-narrow":{"0":"dette kvartalet","1":"neste kvartal","future":{"one":"+{0} kv.","other":"+{0} kv."},"past":{"one":"–{0} kv.","other":"–{0} kv."},"-1":"førre kvartal"},"month":{"0":"denne månaden","1":"neste månad","future":{"one":"om {0} månad","other":"om {0} månadar"},"past":{"one":"for {0} månad sidan","other":"for {0} månadar sidan"},"-1":"førre månad"},"month-short":{"0":"denne månaden","1":"neste månad","future":{"one":"om {0} md.","other":"om {0} md."},"past":{"one":"for {0} md. sidan","other":"for {0} md. sidan"},"-1":"førre månad"},"month-narrow":{"0":"denne månaden","1":"neste månad","future":{"one":"+{0} md.","other":"+{0} md."},"past":{"one":"–{0} md.","other":"–{0} md."},"-1":"førre månad"},"week":{"0":"denne veka","1":"neste veke","future":{"one":"om {0} veke","other":"om {0} veker"},"past":{"one":"for {0} veke sidan","other":"for {0} veker sidan"},"-1":"førre veke"},"week-short":{"0":"denne veka","1":"neste veke","future":{"one":"om {0} v.","other":"om {0} v."},"past":{"one":"for {0} v. sidan","other":"for {0} v. sidan"},"-1":"førre veke"},"week-narrow":{"0":"denne veka","1":"neste veke","future":{"one":"+{0} v.","other":"+{0} v."},"past":{"one":"–{0} v.","other":"–{0} v."},"-1":"førre veke"},"day":{"0":"i dag","1":"i morgon","2":"i overmorgon","future":{"one":"om {0} døgn","other":"om {0} døgn"},"past":{"one":"for {0} døgn sidan","other":"for {0} døgn sidan"},"-2":"i førgår","-1":"i går"},"day-short":{"0":"i dag","1":"i morgon","2":"i overmorgon","future":{"one":"om {0} d.","other":"om {0} d."},"past":{"one":"for {0} d. sidan","other":"for {0} d. sidan"},"-2":"i førgår","-1":"i går"},"day-narrow":{"0":"i dag","1":"i morgon","2":"i overmorgon","future":{"one":"+{0} d.","other":"+{0} d."},"past":{"one":"–{0} d.","other":"–{0} d."},"-2":"i førgår","-1":"i går"},"hour":{"0":"denne timen","future":{"one":"om {0} time","other":"om {0} timar"},"past":{"one":"for {0} time sidan","other":"for {0} timar sidan"}},"hour-short":{"0":"denne timen","future":{"one":"om {0} t","other":"om {0} t"},"past":{"one":"for {0} t sidan","other":"for {0} t sidan"}},"hour-narrow":{"0":"denne timen","future":{"one":"+{0} t","other":"+{0} t"},"past":{"one":"–{0} t","other":"–{0} t"}},"minute":{"0":"dette minuttet","future":{"one":"om {0} minutt","other":"om {0} minutt"},"past":{"one":"for {0} minutt sidan","other":"for {0} minutt sidan"}},"minute-short":{"0":"dette minuttet","future":{"one":"om {0} min","other":"om {0} min"},"past":{"one":"for {0} min sidan","other":"for {0} min sidan"}},"minute-narrow":{"0":"dette minuttet","future":{"one":"+{0} min","other":"+{0} min"},"past":{"one":"–{0} min","other":"–{0} min"}},"second":{"0":"no","future":{"one":"om {0} sekund","other":"om {0} sekund"},"past":{"one":"for {0} sekund sidan","other":"for {0} sekund sidan"}},"second-short":{"0":"no","future":{"one":"om {0} sek","other":"om {0} sek"},"past":{"one":"for {0} sek sidan","other":"for {0} sek sidan"}},"second-narrow":{"0":"no","future":{"one":"+{0} s","other":"+{0} s"},"past":{"one":"–{0} s","other":"–{0} s"}}},"locale":"nn"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
