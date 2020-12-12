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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("af").length
)) {
// Intl.RelativeTimeFormat.~locale.af
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"hierdie jaar","1":"volgende jaar","future":{"one":"oor {0} jaar","other":"oor {0} jaar"},"past":{"one":"{0} jaar gelede","other":"{0} jaar gelede"},"-1":"verlede jaar"},"year-short":{"0":"hierdie j.","1":"volgende j.","future":{"one":"oor {0} j.","other":"oor {0} j."},"past":{"one":"{0} j. gelede","other":"{0} j. gelede"},"-1":"verlede j."},"year-narrow":{"0":"hierdie j.","1":"volgende j.","future":{"one":"oor {0} j.","other":"oor {0} j."},"past":{"one":"{0} j. gelede","other":"{0} j. gelede"},"-1":"verlede j."},"quarter":{"0":"hierdie kwartaal","1":"volgende kwartaal","future":{"one":"oor {0} kwartaal","other":"oor {0} kwartale"},"past":{"one":"{0} kwartaal gelede","other":"{0} kwartale gelede"},"-1":"verlede kwartaal"},"quarter-short":{"0":"hierdie kwartaal","1":"volgende kwartaal","future":{"one":"oor {0} kw.","other":"oor {0} kw."},"past":{"one":"{0} kw. gelede","other":"{0} kw. gelede"},"-1":"verlede kwartaal"},"quarter-narrow":{"0":"hierdie kwartaal","1":"volgende kwartaal","future":{"one":"oor {0} kw.","other":"oor {0} kw."},"past":{"one":"{0} kw. gelede","other":"{0} kw. gelede"},"-1":"verlede kwartaal"},"month":{"0":"vandeesmaand","1":"volgende maand","future":{"one":"oor {0} maand","other":"oor {0} maande"},"past":{"one":"{0} maand gelede","other":"{0} maande gelede"},"-1":"verlede maand"},"month-short":{"0":"hierdie md.","1":"volgende md.","future":{"one":"oor {0} md.","other":"oor {0} md."},"past":{"one":"{0} md. gelede","other":"{0} md. gelede"},"-1":"verlede md."},"month-narrow":{"0":"hierdie md.","1":"volgende md.","future":{"one":"oor {0} md.","other":"oor {0} md."},"past":{"one":"{0} md. gelede","other":"{0} md. gelede"},"-1":"verlede md."},"week":{"0":"hierdie week","1":"volgende week","future":{"one":"oor {0} week","other":"oor {0} weke"},"past":{"one":"{0} week gelede","other":"{0} weke gelede"},"-1":"verlede week"},"week-short":{"0":"hierdie w.","1":"volgende w.","future":{"one":"oor {0} w.","other":"oor {0} w."},"past":{"one":"{0} w. gelede","other":"{0} w. gelede"},"-1":"verlede w."},"week-narrow":{"0":"hierdie w.","1":"volgende w.","future":{"one":"oor {0} w.","other":"oor {0} w."},"past":{"one":"{0} w. gelede","other":"{0} w. gelede"},"-1":"verlede w."},"day":{"0":"vandag","1":"môre","2":"oormôre","future":{"one":"oor {0} dag","other":"oor {0} dae"},"past":{"one":"{0} dag gelede","other":"{0} dae gelede"},"-2":"eergister","-1":"gister"},"day-short":{"0":"vandag","1":"môre","2":"oormôre","future":{"one":"oor {0} dag","other":"oor {0} dae"},"past":{"one":"{0} dag gelede","other":"{0} dae gelede"},"-2":"eergister","-1":"gister"},"day-narrow":{"0":"vandag","1":"môre","2":"oormôre","future":{"one":"oor {0} dag","other":"oor {0} dae"},"past":{"one":"{0} dag gelede","other":"{0} dae gelede"},"-2":"eergister","-1":"gister"},"hour":{"0":"hierdie uur","future":{"one":"oor {0} uur","other":"oor {0} uur"},"past":{"one":"{0} uur gelede","other":"{0} uur gelede"}},"hour-short":{"0":"hierdie uur","future":{"one":"oor {0} u.","other":"oor {0} u."},"past":{"one":"{0} u. gelede","other":"{0} u. gelede"}},"hour-narrow":{"0":"hierdie uur","future":{"one":"oor {0} u.","other":"oor {0} u."},"past":{"one":"{0} u. gelede","other":"{0} u. gelede"}},"minute":{"0":"hierdie minuut","future":{"one":"oor {0} minuut","other":"oor {0} minute"},"past":{"one":"{0} minuut gelede","other":"{0} minute gelede"}},"minute-short":{"0":"hierdie minuut","future":{"one":"oor {0} min.","other":"oor {0} min."},"past":{"one":"{0} min. gelede","other":"{0} min. gelede"}},"minute-narrow":{"0":"hierdie minuut","future":{"one":"oor {0} min.","other":"oor {0} min."},"past":{"one":"{0} min. gelede","other":"{0} min. gelede"}},"second":{"0":"nou","future":{"one":"oor {0} sekonde","other":"oor {0} sekondes"},"past":{"one":"{0} sekonde gelede","other":"{0} sekondes gelede"}},"second-short":{"0":"nou","future":{"one":"oor {0} s.","other":"oor {0} s."},"past":{"one":"{0} s. gelede","other":"{0} s. gelede"}},"second-narrow":{"0":"nou","future":{"one":"oor {0} s.","other":"oor {0} s."},"past":{"one":"{0} s. gelede","other":"{0} s. gelede"}}},"locale":"af"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
