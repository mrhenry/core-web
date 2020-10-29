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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sv-FI").length
)) {
// Intl.RelativeTimeFormat.~locale.sv-FI
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"sv-FI":{"nu":["latn"],"year":{"0":"i år","1":"nästa år","future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"för {0} år sedan","other":"för {0} år sedan"},"-1":"i fjol"},"year-short":{"0":"i år","1":"nästa år","future":{"one":"om {0} år","other":"om {0} år"},"past":{"one":"för {0} år sen","other":"för {0} år sen"},"-1":"i fjol"},"year-narrow":{"0":"i år","1":"nästa år","future":{"one":"+{0} år","other":"+{0} år"},"past":{"one":"−{0} år","other":"−{0} år"},"-1":"i fjol"},"quarter":{"0":"detta kvartal","1":"nästa kvartal","future":{"one":"om {0} kvartal","other":"om {0} kvartal"},"past":{"one":"för {0} kvartal sedan","other":"för {0} kvartal sedan"},"-1":"förra kvartalet"},"quarter-short":{"0":"detta kv.","1":"nästa kv.","future":{"one":"om {0} kv.","other":"om {0} kv."},"past":{"one":"för {0} kv. sen","other":"för {0} kv. sen"},"-1":"förra kv."},"quarter-narrow":{"0":"detta kv.","1":"nästa kv.","future":{"one":"+{0} kv.","other":"+{0} kv."},"past":{"one":"−{0} kv","other":"−{0} kv"},"-1":"förra kv."},"month":{"0":"denna månad","1":"nästa månad","future":{"one":"om {0} månad","other":"om {0} månader"},"past":{"one":"för {0} månad sedan","other":"för {0} månader sedan"},"-1":"förra månaden"},"month-short":{"0":"denna mån.","1":"nästa mån.","future":{"one":"om {0} mån.","other":"om {0} mån."},"past":{"one":"för {0} mån. sen","other":"för {0} mån. sen"},"-1":"förra mån."},"month-narrow":{"0":"denna mån.","1":"nästa mån.","future":{"one":"+{0} mån.","other":"+{0} mån."},"past":{"one":"−{0} mån","other":"−{0} mån"},"-1":"förra mån."},"week":{"0":"denna vecka","1":"nästa vecka","future":{"one":"om {0} vecka","other":"om {0} veckor"},"past":{"one":"för {0} vecka sedan","other":"för {0} veckor sedan"},"-1":"förra veckan"},"week-short":{"0":"denna v.","1":"nästa v.","future":{"one":"om {0} v.","other":"om {0} v."},"past":{"one":"för {0} v. sedan","other":"för {0} v. sedan"},"-1":"förra v."},"week-narrow":{"0":"denna v.","1":"nästa v.","future":{"one":"+{0} v.","other":"+{0} v."},"past":{"one":"−{0} v","other":"−{0} v"},"-1":"förra v."},"day":{"0":"i dag","1":"i morgon","2":"i övermorgon","future":{"one":"om {0} dag","other":"om {0} dagar"},"past":{"one":"för {0} dag sedan","other":"för {0} dagar sedan"},"-2":"i förrgår","-1":"i går"},"day-short":{"0":"i dag","1":"i morgon","2":"i övermorgon","future":{"one":"om {0} d","other":"om {0} d"},"past":{"one":"för {0} d sedan","other":"för {0} d sedan"},"-2":"i förrgår","-1":"i går"},"day-narrow":{"0":"idag","1":"imorgon","2":"i övermorgon","future":{"one":"+{0} d","other":"+{0} d"},"past":{"one":"−{0} d","other":"−{0} d"},"-2":"i förrgår","-1":"igår"},"hour":{"0":"denna timme","future":{"one":"om {0} timme","other":"om {0} timmar"},"past":{"one":"för {0} timme sedan","other":"för {0} timmar sedan"}},"hour-short":{"0":"denna timme","future":{"one":"om {0} tim","other":"om {0} tim"},"past":{"one":"för {0} tim sedan","other":"för {0} tim sedan"}},"hour-narrow":{"0":"denna timme","future":{"one":"+{0} h","other":"+{0} h"},"past":{"one":"−{0} h","other":"−{0} h"}},"minute":{"0":"denna minut","future":{"one":"om {0} minut","other":"om {0} minuter"},"past":{"one":"för {0} minut sedan","other":"för {0} minuter sedan"}},"minute-short":{"0":"denna minut","future":{"one":"om {0} min","other":"om {0} min"},"past":{"one":"för {0} min sen","other":"för {0} min sen"}},"minute-narrow":{"0":"denna minut","future":{"one":"+{0} min","other":"+{0} min"},"past":{"one":"−{0} min","other":"−{0} min"}},"second":{"0":"nu","future":{"one":"om {0} sekund","other":"om {0} sekunder"},"past":{"one":"för {0} sekund sedan","other":"för {0} sekunder sedan"}},"second-short":{"0":"nu","future":{"one":"om {0} sek","other":"om {0} sek"},"past":{"one":"för {0} s sen","other":"för {0} s sen"}},"second-narrow":{"0":"nu","future":{"one":"+{0} s","other":"+{0} s"},"past":{"one":"−{0} s","other":"−{0} s"}}}},"availableLocales":["sv-FI"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
