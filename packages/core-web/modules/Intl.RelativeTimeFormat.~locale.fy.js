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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("fy").length
)) {
// Intl.RelativeTimeFormat.~locale.fy
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"fy":{"nu":["latn"],"year":{"0":"dit jier","1":"folgjend jier","future":{"one":"Oer {0} jier","other":"Oer {0} jier"},"past":{"one":"{0} jier lyn","other":"{0} jier lyn"},"-1":"foarich jier"},"year-short":{"0":"dit jier","1":"folgjend jier","future":{"one":"Oer {0} jier","other":"Oer {0} jier"},"past":{"one":"{0} jier lyn","other":"{0} jier lyn"},"-1":"foarich jier"},"year-narrow":{"0":"dit jier","1":"folgjend jier","future":{"one":"Oer {0} jier","other":"Oer {0} jier"},"past":{"one":"{0} jier lyn","other":"{0} jier lyn"},"-1":"foarich jier"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"dizze moanne","1":"folgjende moanne","future":{"one":"Oer {0} moanne","other":"Oer {0} moannen"},"past":{"one":"{0} moanne lyn","other":"{0} moannen lyn"},"-1":"foarige moanne"},"month-short":{"0":"dizze moanne","1":"folgjende moanne","future":{"one":"Oer {0} moanne","other":"Oer {0} moannen"},"past":{"one":"{0} moanne lyn","other":"{0} moannen lyn"},"-1":"foarige moanne"},"month-narrow":{"0":"dizze moanne","1":"folgjende moanne","future":{"one":"Oer {0} moanne","other":"Oer {0} moannen"},"past":{"one":"{0} moanne lyn","other":"{0} moannen lyn"},"-1":"foarige moanne"},"week":{"0":"dizze wike","1":"folgjende wike","future":{"one":"Oer {0} wike","other":"Oer {0} wiken"},"past":{"one":"{0} wike lyn","other":"{0} wiken lyn"},"-1":"foarige wike"},"week-short":{"0":"dizze wike","1":"folgjende wike","future":{"one":"Oer {0} wike","other":"Oer {0} wiken"},"past":{"one":"{0} wike lyn","other":"{0} wiken lyn"},"-1":"foarige wike"},"week-narrow":{"0":"dizze wike","1":"folgjende wike","future":{"one":"Oer {0} wike","other":"Oer {0} wiken"},"past":{"one":"{0} wike lyn","other":"{0} wiken lyn"},"-1":"foarige wike"},"day":{"0":"vandaag","1":"morgen","2":"Oermorgen","future":{"one":"Oer {0} dei","other":"Oer {0} deien"},"past":{"one":"{0} dei lyn","other":"{0} deien lyn"},"-2":"eergisteren","-1":"gisteren"},"day-short":{"0":"vandaag","1":"morgen","2":"Oermorgen","future":{"one":"Oer {0} dei","other":"Oer {0} deien"},"past":{"one":"{0} dei lyn","other":"{0} deien lyn"},"-2":"eergisteren","-1":"gisteren"},"day-narrow":{"0":"vandaag","1":"morgen","2":"Oermorgen","future":{"one":"Oer {0} dei","other":"Oer {0} deien"},"past":{"one":"{0} dei lyn","other":"{0} deien lyn"},"-2":"eergisteren","-1":"gisteren"},"hour":{"0":"this hour","future":{"one":"Oer {0} oere","other":"Oer {0} oere"},"past":{"one":"{0} oere lyn","other":"{0} oere lyn"}},"hour-short":{"0":"this hour","future":{"one":"Oer {0} oere","other":"Oer {0} oere"},"past":{"one":"{0} oere lyn","other":"{0} oere lyn"}},"hour-narrow":{"0":"this hour","future":{"one":"Oer {0} oere","other":"Oer {0} oere"},"past":{"one":"{0} oere lyn","other":"{0} oere lyn"}},"minute":{"0":"this minute","future":{"one":"Oer {0} minút","other":"Oer {0} minuten"},"past":{"one":"{0} minút lyn","other":"{0} minuten lyn"}},"minute-short":{"0":"this minute","future":{"one":"Oer {0} minút","other":"Oer {0} minuten"},"past":{"one":"{0} minút lyn","other":"{0} minuten lyn"}},"minute-narrow":{"0":"this minute","future":{"one":"Oer {0} minút","other":"Oer {0} minuten"},"past":{"one":"{0} minút lyn","other":"{0} minuten lyn"}},"second":{"0":"nu","future":{"one":"Oer {0} sekonde","other":"Oer {0} sekonden"},"past":{"one":"{0} sekonde lyn","other":"{0} sekonden lyn"}},"second-short":{"0":"nu","future":{"one":"Oer {0} sekonde","other":"Oer {0} sekonden"},"past":{"one":"{0} sekonde lyn","other":"{0} sekonden lyn"}},"second-narrow":{"0":"nu","future":{"one":"Oer {0} sekonde","other":"Oer {0} sekonden"},"past":{"one":"{0} sekonde lyn","other":"{0} sekonden lyn"}}}},"availableLocales":["fy"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
