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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("nl-BE").length
)) {
// Intl.RelativeTimeFormat.~locale.nl-BE
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nl-BE":{"nu":["latn"],"year":{"0":"dit jaar","1":"volgend jaar","future":{"one":"over {0} jaar","other":"over {0} jaar"},"past":{"one":"{0} jaar geleden","other":"{0} jaar geleden"},"-1":"vorig jaar"},"year-short":{"0":"dit jaar","1":"volgend jaar","future":{"one":"over {0} jaar","other":"over {0} jaar"},"past":{"one":"{0} jaar geleden","other":"{0} jaar geleden"},"-1":"vorig jaar"},"year-narrow":{"0":"dit jaar","1":"volgend jaar","future":{"one":"over {0} jaar","other":"over {0} jaar"},"past":{"one":"{0} jaar geleden","other":"{0} jaar geleden"},"-1":"vorig jaar"},"quarter":{"0":"dit kwartaal","1":"volgend kwartaal","future":{"one":"over {0} kwartaal","other":"over {0} kwartalen"},"past":{"one":"{0} kwartaal geleden","other":"{0} kwartalen geleden"},"-1":"vorig kwartaal"},"quarter-short":{"0":"dit kwartaal","1":"volgend kwartaal","future":{"one":"over {0} kwartaal","other":"over {0} kwartalen"},"past":{"one":"{0} kwartaal geleden","other":"{0} kwartalen geleden"},"-1":"vorig kwartaal"},"quarter-narrow":{"0":"dit kwartaal","1":"volgend kwartaal","future":{"one":"over {0} kw.","other":"over {0} kwartalen"},"past":{"one":"{0} kwartaal geleden","other":"{0} kwartalen geleden"},"-1":"vorig kwartaal"},"month":{"0":"deze maand","1":"volgende maand","future":{"one":"over {0} maand","other":"over {0} maanden"},"past":{"one":"{0} maand geleden","other":"{0} maanden geleden"},"-1":"vorige maand"},"month-short":{"0":"deze maand","1":"volgende maand","future":{"one":"over {0} maand","other":"over {0} maanden"},"past":{"one":"{0} maand geleden","other":"{0} maanden geleden"},"-1":"vorige maand"},"month-narrow":{"0":"deze maand","1":"volgende maand","future":{"one":"over {0} maand","other":"over {0} maanden"},"past":{"one":"{0} maand geleden","other":"{0} maanden geleden"},"-1":"vorige maand"},"week":{"0":"deze week","1":"volgende week","future":{"one":"over {0} week","other":"over {0} weken"},"past":{"one":"{0} week geleden","other":"{0} weken geleden"},"-1":"vorige week"},"week-short":{"0":"deze week","1":"volgende week","future":{"one":"over {0} week","other":"over {0} weken"},"past":{"one":"{0} week geleden","other":"{0} weken geleden"},"-1":"vorige week"},"week-narrow":{"0":"deze week","1":"volgende week","future":{"one":"over {0} week","other":"over {0} weken"},"past":{"one":"{0} week geleden","other":"{0} weken geleden"},"-1":"vorige week"},"day":{"0":"vandaag","1":"morgen","2":"overmorgen","future":{"one":"over {0} dag","other":"over {0} dagen"},"past":{"one":"{0} dag geleden","other":"{0} dagen geleden"},"-2":"eergisteren","-1":"gisteren"},"day-short":{"0":"vandaag","1":"morgen","2":"overmorgen","future":{"one":"over {0} dag","other":"over {0} dgn"},"past":{"one":"{0} dag geleden","other":"{0} dgn geleden"},"-2":"eergisteren","-1":"gisteren"},"day-narrow":{"0":"vandaag","1":"morgen","2":"overmorgen","future":{"one":"over {0} dag","other":"over {0} dgn"},"past":{"one":"{0} dag geleden","other":"{0} dgn geleden"},"-2":"eergisteren","-1":"gisteren"},"hour":{"0":"binnen een uur","future":{"one":"over {0} uur","other":"over {0} uur"},"past":{"one":"{0} uur geleden","other":"{0} uur geleden"}},"hour-short":{"0":"binnen een uur","future":{"one":"over {0} uur","other":"over {0} uur"},"past":{"one":"{0} uur geleden","other":"{0} uur geleden"}},"hour-narrow":{"0":"binnen een uur","future":{"one":"over {0} uur","other":"over {0} uur"},"past":{"one":"{0} uur geleden","other":"{0} uur geleden"}},"minute":{"0":"binnen een minuut","future":{"one":"over {0} minuut","other":"over {0} minuten"},"past":{"one":"{0} minuut geleden","other":"{0} minuten geleden"}},"minute-short":{"0":"binnen een minuut","future":{"one":"over {0} min.","other":"over {0} min."},"past":{"one":"{0} min. geleden","other":"{0} min. geleden"}},"minute-narrow":{"0":"binnen een minuut","future":{"one":"over {0} min.","other":"over {0} min."},"past":{"one":"{0} min. geleden","other":"{0} min. geleden"}},"second":{"0":"nu","future":{"one":"over {0} seconde","other":"over {0} seconden"},"past":{"one":"{0} seconde geleden","other":"{0} seconden geleden"}},"second-short":{"0":"nu","future":{"one":"over {0} sec.","other":"over {0} sec."},"past":{"one":"{0} sec. geleden","other":"{0} sec. geleden"}},"second-narrow":{"0":"nu","future":{"one":"over {0} sec.","other":"over {0} sec."},"past":{"one":"{0} sec. geleden","other":"{0} sec. geleden"}}}},"availableLocales":["nl-BE"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
