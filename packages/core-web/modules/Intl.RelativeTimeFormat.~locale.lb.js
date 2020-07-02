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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("lb").length
)) {
// Intl.RelativeTimeFormat.~locale.lb
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"lb":{"nu":["latn"],"year":{"0":"dëst Joer","1":"nächst Joer","future":{"one":"an {0} Joer","other":"a(n) {0} Joer"},"past":{"one":"virun {0} Joer","other":"viru(n) {0} Joer"},"-1":"lescht Joer"},"year-short":{"0":"dëst Joer","1":"nächst Joer","future":{"one":"an {0} J.","other":"a(n) {0} J."},"past":{"one":"virun {0} J.","other":"viru(n) {0} J."},"-1":"lescht Joer"},"year-narrow":{"0":"dëst Joer","1":"nächst Joer","future":{"one":"+{0} J.","other":"+{0} J."},"past":{"one":"-{0} J.","other":"-{0} J."},"-1":"lescht Joer"},"quarter":{"0":"this quarter","1":"next quarter","future":{"one":"an {0} Quartal","other":"a(n) {0} Quartaler"},"past":{"one":"virun {0} Quartal","other":"viru(n) {0} Quartaler"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"one":"an {0} Q.","other":"a(n) {0} Q."},"past":{"one":"virun {0} Q.","other":"viru(n) {0} Q."},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"one":"+{0} Q.","other":"+{0} Q."},"past":{"one":"-{0} Q.","other":"-{0} Q."},"-1":"last quarter"},"month":{"0":"dëse Mount","1":"nächste Mount","future":{"one":"an {0} Mount","other":"a(n) {0} Méint"},"past":{"one":"virun {0} Mount","other":"viru(n) {0} Méint"},"-1":"leschte Mount"},"month-short":{"0":"dëse Mount","1":"nächste Mount","future":{"one":"an {0} M.","other":"a(n) {0} M."},"past":{"one":"virun {0} M.","other":"viru(n) {0} M."},"-1":"leschte Mount"},"month-narrow":{"0":"dëse Mount","1":"nächste Mount","future":{"one":"+{0} M.","other":"+{0} M."},"past":{"one":"-{0} M.","other":"-{0} M."},"-1":"leschte Mount"},"week":{"0":"dës Woch","1":"nächst Woch","future":{"one":"an {0} Woch","other":"a(n) {0} Wochen"},"past":{"one":"virun {0} Woch","other":"viru(n) {0} Wochen"},"-1":"lescht Woch"},"week-short":{"0":"dës Woch","1":"nächst Woch","future":{"one":"an {0} W.","other":"a(n) {0} W."},"past":{"one":"virun {0} W.","other":"viru(n) {0} W."},"-1":"lescht Woch"},"week-narrow":{"0":"dës Woch","1":"nächst Woch","future":{"one":"+{0} W.","other":"+{0} W."},"past":{"one":"-{0} W.","other":"-{0} W."},"-1":"lescht Woch"},"day":{"0":"haut","1":"muer","future":{"one":"an {0} Dag","other":"a(n) {0} Deeg"},"past":{"one":"virun {0} Dag","other":"viru(n) {0} Deeg"},"-1":"gëschter"},"day-short":{"0":"haut","1":"muer","future":{"one":"an {0} D.","other":"a(n) {0} D."},"past":{"one":"virun {0} D.","other":"viru(n) {0} D."},"-1":"gëschter"},"day-narrow":{"0":"haut","1":"muer","future":{"one":"+{0} D.","other":"+{0} D."},"past":{"one":"-{0} D.","other":"-{0} D."},"-1":"gëschter"},"hour":{"0":"this hour","future":{"one":"an {0} Stonn","other":"a(n) {0} Stonnen"},"past":{"one":"virun {0} Stonn","other":"viru(n) {0} Stonnen"}},"hour-short":{"0":"this hour","future":{"one":"an {0} St.","other":"a(n) {0} St."},"past":{"one":"virun {0} St.","other":"viru(n) {0} St."}},"hour-narrow":{"0":"this hour","future":{"one":"+{0} St.","other":"+{0} St."},"past":{"one":"-{0} St.","other":"-{0} St."}},"minute":{"0":"this minute","future":{"one":"an {0} Minutt","other":"a(n) {0} Minutten"},"past":{"one":"virun {0} Minutt","other":"viru(n) {0} Minutten"}},"minute-short":{"0":"this minute","future":{"one":"an {0} Min.","other":"a(n) {0} Min."},"past":{"one":"virun {0} Min.","other":"viru(n) {0} Min."}},"minute-narrow":{"0":"this minute","future":{"one":"+{0} Min.","other":"+{0} Min."},"past":{"one":"-{0} Min.","other":"-{0} Min."}},"second":{"0":"now","future":{"one":"an {0} Sekonn","other":"a(n) {0} Sekonnen"},"past":{"one":"virun {0} Sekonn","other":"viru(n) {0} Sekonnen"}},"second-short":{"0":"now","future":{"one":"an {0} Sek.","other":"a(n) {0} Sek."},"past":{"one":"virun {0} Sek.","other":"viru(n) {0} Sek."}},"second-narrow":{"0":"now","future":{"one":"+{0} Sek.","other":"+{0} Sek."},"past":{"one":"-{0} Sek.","other":"-{0} Sek."}}}},"availableLocales":["lb"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
