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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("eu").length
)) {
// Intl.RelativeTimeFormat.~locale.eu
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"eu":{"nu":["latn"],"year":{"0":"aurten","1":"hurrengo urtean","future":{"one":"{0} urte barru","other":"{0} urte barru"},"past":{"one":"Duela {0} urte","other":"Duela {0} urte"},"-1":"iaz"},"year-short":{"0":"aurten","1":"hurrengo urtea","future":{"one":"{0} urte barru","other":"{0} urte barru"},"past":{"one":"Duela {0} urte","other":"Duela {0} urte"},"-1":"aurreko urtea"},"year-narrow":{"0":"aurten","1":"hurrengo urtea","future":{"one":"{0} urte barru","other":"{0} urte barru"},"past":{"one":"Duela {0} urte","other":"Duela {0} urte"},"-1":"aurreko urtea"},"quarter":{"0":"hiruhileko hau","1":"hurrengo hiruhilekoa","future":{"one":"{0} hiruhileko barru","other":"{0} hiruhileko barru"},"past":{"one":"Duela {0} hiruhileko","other":"Duela {0} hiruhileko"},"-1":"aurreko hiruhilekoa"},"quarter-short":{"0":"hiruhileko hau","1":"hurrengo hiruhilekoa","future":{"one":"{0} hiruhileko barru","other":"{0} hiruhileko barru"},"past":{"one":"Duela {0} hiruhileko","other":"Duela {0} hiruhileko"},"-1":"aurreko hiruhilekoa"},"quarter-narrow":{"0":"hiruhileko hau","1":"hurrengo hiruhilekoa","future":{"one":"{0} hiruhileko barru","other":"{0} hiruhileko barru"},"past":{"one":"Duela {0} hiruhileko","other":"Duela {0} hiruhileko"},"-1":"aurreko hiruhilekoa"},"month":{"0":"hilabete honetan","1":"hurrengo hilabetean","future":{"one":"{0} hilabete barru","other":"{0} hilabete barru"},"past":{"one":"Duela {0} hilabete","other":"Duela {0} hilabete"},"-1":"aurreko hilabetean"},"month-short":{"0":"hilabete honetan","1":"hurrengo hilabetean","future":{"one":"{0} hilabete barru","other":"{0} hilabete barru"},"past":{"one":"Duela {0} hilabete","other":"Duela {0} hilabete"},"-1":"aurreko hilabetean"},"month-narrow":{"0":"hilabete honetan","1":"hurrengo hilabetean","future":{"one":"{0} hilabete barru","other":"{0} hilabete barru"},"past":{"one":"Duela {0} hilabete","other":"Duela {0} hilabete"},"-1":"aurreko hilabetean"},"week":{"0":"aste honetan","1":"hurrengo astean","future":{"one":"{0} aste barru","other":"{0} aste barru"},"past":{"one":"Duela {0} aste","other":"Duela {0} aste"},"-1":"aurreko astean"},"week-short":{"0":"aste honetan","1":"hurrengo astean","future":{"one":"{0} aste barru","other":"{0} aste barru"},"past":{"one":"Duela {0} aste","other":"Duela {0} aste"},"-1":"aurreko astean"},"week-narrow":{"0":"aste honetan","1":"hurrengo astean","future":{"one":"{0} aste barru","other":"{0} aste barru"},"past":{"one":"Duela {0} aste","other":"Duela {0} aste"},"-1":"aurreko astean"},"day":{"0":"gaur","1":"bihar","2":"etzi","future":{"one":"{0} egun barru","other":"{0} egun barru"},"past":{"one":"Duela {0} egun","other":"Duela {0} egun"},"-2":"herenegun","-1":"atzo"},"day-short":{"0":"gaur","1":"bihar","2":"etzi","future":{"one":"{0} egun barru","other":"{0} egun barru"},"past":{"one":"Duela {0} egun","other":"Duela {0} egun"},"-2":"herenegun","-1":"atzo"},"day-narrow":{"0":"gaur","1":"bihar","2":"etzi","future":{"one":"{0} egun barru","other":"{0} egun barru"},"past":{"one":"Duela {0} egun","other":"Duela {0} egun"},"-2":"herenegun","-1":"atzo"},"hour":{"0":"ordu honetan","future":{"one":"{0} ordu barru","other":"{0} ordu barru"},"past":{"one":"Duela {0} ordu","other":"Duela {0} ordu"}},"hour-short":{"0":"ordu honetan","future":{"one":"{0} ordu barru","other":"{0} ordu barru"},"past":{"one":"Duela {0} ordu","other":"Duela {0} ordu"}},"hour-narrow":{"0":"ordu honetan","future":{"one":"{0} ordu barru","other":"{0} ordu barru"},"past":{"one":"Duela {0} ordu","other":"Duela {0} ordu"}},"minute":{"0":"minutu honetan","future":{"one":"{0} minutu barru","other":"{0} minutu barru"},"past":{"one":"Duela {0} minutu","other":"Duela {0} minutu"}},"minute-short":{"0":"minutu honetan","future":{"one":"{0} minutu barru","other":"{0} minutu barru"},"past":{"one":"Duela {0} minutu","other":"Duela {0} minutu"}},"minute-narrow":{"0":"minutu honetan","future":{"one":"{0} minutu barru","other":"{0} minutu barru"},"past":{"one":"Duela {0} minutu","other":"Duela {0} minutu"}},"second":{"0":"orain","future":{"one":"{0} segundo barru","other":"{0} segundo barru"},"past":{"one":"Duela {0} segundo","other":"Duela {0} segundo"}},"second-short":{"0":"orain","future":{"one":"{0} segundo barru","other":"{0} segundo barru"},"past":{"one":"Duela {0} segundo","other":"Duela {0} segundo"}},"second-narrow":{"0":"orain","future":{"one":"{0} segundo barru","other":"{0} segundo barru"},"past":{"one":"Duela {0} segundo","other":"Duela {0} segundo"}}}},"availableLocales":["eu"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
