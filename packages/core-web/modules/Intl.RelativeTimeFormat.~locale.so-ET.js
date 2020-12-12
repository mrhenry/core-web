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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("so-ET").length
)) {
// Intl.RelativeTimeFormat.~locale.so-ET
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"Sannadkan","1":"Sannadka danbe","future":{"one":"{0} sannad","other":"{0} sannadood"},"past":{"one":"{0} sannad kahor","other":"{0} sannadood kahor"},"-1":"Sannadkii hore"},"year-short":{"0":"Sannadkan","1":"Sannadka danbe","future":{"one":"{0} snd","other":"{0} snd"},"past":{"one":"{0} snd khr","other":"{0} Snd khr"},"-1":"Sannadkii hore"},"year-narrow":{"0":"Sannadkan","1":"Sannadka xiga","future":{"one":"{0} snd","other":"{0} snd"},"past":{"one":"{0} snd khr","other":"{0} Snd khr"},"-1":"Sannadkii la soo dhaafay"},"quarter":{"0":"Rubucan","1":"Rubuca danbe","future":{"one":"{0} rubuc","other":"{0} rubuc"},"past":{"one":"{0} rubuc kahor","other":"{0} rubuc kahor"},"-1":"Rubucii hore"},"quarter-short":{"0":"Rubucan","1":"Rubuca xiga","future":{"one":"{0} rbc","other":"{0} rbc"},"past":{"one":"{0} rbc khr","other":"{0} rbc khr"},"-1":"Rubucii ugu dambeeyay"},"quarter-narrow":{"0":"Rubucan","1":"Rubuca xiga","future":{"one":"{0} rbc","other":"{0} rbc"},"past":{"one":"{0} rbc khr","other":"{0} rbc khr"},"-1":"Rubucii ugu dambeeyay"},"month":{"0":"Bishan","1":"Bisha danbe","future":{"one":"{0} bil","other":"{0} bilood"},"past":{"one":"{0} bil kahor","other":"{0} bilood kahor"},"-1":"Bishii hore"},"month-short":{"0":"Bishan","1":"Bisha danbe","future":{"one":"{0} bil","other":"{0} bil"},"past":{"one":"{0} bil khr","other":"{0} bil khr"},"-1":"Bishii hore"},"month-narrow":{"0":"Bishan","1":"Bisha danbe","future":{"one":"{0} bil","other":"{0} bil"},"past":{"one":"{0} bil khr","other":"{0} bil khr"},"-1":"Bishii hore"},"week":{"0":"Usbuucan","1":"Toddobaadka danbe","future":{"one":"{0} toddobaad","other":"{0} toddobaad"},"past":{"one":"{0} toddobaad kahor","other":"{0} toddobaad kahor"},"-1":"Toddobaadkii hore"},"week-short":{"0":"Usbuucan","1":"Toddobaadka danbe","future":{"one":"{0} tdbd","other":"{0} tdbd"},"past":{"one":"{0} tdbd khr","other":"{0} tdbd khr"},"-1":"Toddobaadkii hore"},"week-narrow":{"0":"Toddobaadkan","1":"Toddobaadka danbe","future":{"one":"{0} tdbd","other":"{0} tdbd"},"past":{"one":"{0} tdbd khr","other":"{0} tdbd khr"},"-1":"Toddobaadkii hore"},"day":{"0":"Maanta","1":"Berri","future":{"one":"{0} maalin","other":"{0} maalmood"},"past":{"one":"{0} maalin kahor","other":"{0} maalmood kahor"},"-1":"Shalay"},"day-short":{"0":"Maanta","1":"Berri","future":{"one":"{0} mln","other":"{0} mlmd"},"past":{"one":"{0} mln khr","other":"{0} mlmd khr"},"-1":"Shalay"},"day-narrow":{"0":"Maanta","1":"Berri","future":{"one":"{0} mln","other":"{0} mlmd"},"past":{"one":"{0} mln khr","other":"{0} mlmd khr"},"-1":"Shalay"},"hour":{"0":"Saacadan","future":{"one":"{0} saacad","other":"{0} saacadood"},"past":{"one":"{0} saacad kahor","other":"{0} saacadood kahor"}},"hour-short":{"0":"Saacadan","future":{"one":"{0} scd","other":"{0} scd"},"past":{"one":"{0} scd khr","other":"{0} scd khr"}},"hour-narrow":{"0":"Saacadan","future":{"one":"{0} scd","other":"{0} scd"},"past":{"one":"{0} scd khr","other":"{0} scd khr"}},"minute":{"0":"Daqiiqadan","future":{"one":"{0} daqiiqad","other":"{0} daqiidadood"},"past":{"one":"{0} daqiiqad kahor","other":"{0} daqiiqadood kahor"}},"minute-short":{"0":"Daqiiqadan","future":{"one":"{0} dqqd","other":"{0} dqqd"},"past":{"one":"{0} dqqd khr","other":"{0} daqiiqadood kahor"}},"minute-narrow":{"0":"Daqiiqadan","future":{"one":"{0} dqqd","other":"{0} dqqd"},"past":{"one":"{0} dqqd khr","other":"{0} daqiiqadood kahor"}},"second":{"0":"Imika","future":{"one":"{0} ilbiriqsi","other":"{0} ilbiriqsi"},"past":{"one":"{0} ilbiriqsi kahor","other":"{0} ilbiriqsi kahor"}},"second-short":{"0":"Iminka","future":{"one":"{0} ilbrqsi","other":"{0} ilbrqsi"},"past":{"one":"{0} ilbrqsi khr","other":"{0} ilbrqsi khr"}},"second-narrow":{"0":"Iminka","future":{"one":"{0} ilbrqsi","other":"{0} ilbrqsi"},"past":{"one":"{0} ilbrqsi khr","other":"{0} ilbrqsi khr"}}},"locale":"so-ET"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
