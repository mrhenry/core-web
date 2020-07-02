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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("hu").length
)) {
// Intl.RelativeTimeFormat.~locale.hu
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"hu":{"nu":["latn"],"year":{"0":"ez az év","1":"következő év","future":{"one":"{0} év múlva","other":"{0} év múlva"},"past":{"one":"{0} évvel ezelőtt","other":"{0} évvel ezelőtt"},"-1":"előző év"},"year-short":{"0":"ez az év","1":"következő év","future":{"one":"{0} év múlva","other":"{0} év múlva"},"past":{"one":"{0} évvel ezelőtt","other":"{0} évvel ezelőtt"},"-1":"előző év"},"year-narrow":{"0":"ez az év","1":"következő év","future":{"one":"{0} év múlva","other":"{0} év múlva"},"past":{"one":"{0} évvel ezelőtt","other":"{0} évvel ezelőtt"},"-1":"előző év"},"quarter":{"0":"ez a negyedév","1":"következő negyedév","future":{"one":"{0} negyedév múlva","other":"{0} negyedév múlva"},"past":{"one":"{0} negyedévvel ezelőtt","other":"{0} negyedévvel ezelőtt"},"-1":"előző negyedév"},"quarter-short":{"0":"ez a negyedév","1":"következő negyedév","future":{"one":"{0} negyedév múlva","other":"{0} negyedév múlva"},"past":{"one":"{0} negyedévvel ezelőtt","other":"{0} negyedévvel ezelőtt"},"-1":"előző negyedév"},"quarter-narrow":{"0":"ez a negyedév","1":"következő negyedév","future":{"one":"{0} n.év múlva","other":"{0} n.év múlva"},"past":{"one":"{0} negyedévvel ezelőtt","other":"{0} negyedévvel ezelőtt"},"-1":"előző negyedév"},"month":{"0":"ez a hónap","1":"következő hónap","future":{"one":"{0} hónap múlva","other":"{0} hónap múlva"},"past":{"one":"{0} hónappal ezelőtt","other":"{0} hónappal ezelőtt"},"-1":"előző hónap"},"month-short":{"0":"ez a hónap","1":"következő hónap","future":{"one":"{0} hónap múlva","other":"{0} hónap múlva"},"past":{"one":"{0} hónappal ezelőtt","other":"{0} hónappal ezelőtt"},"-1":"előző hónap"},"month-narrow":{"0":"ez a hónap","1":"következő hónap","future":{"one":"{0} hónap múlva","other":"{0} hónap múlva"},"past":{"one":"{0} hónappal ezelőtt","other":"{0} hónappal ezelőtt"},"-1":"előző hónap"},"week":{"0":"ez a hét","1":"következő hét","future":{"one":"{0} hét múlva","other":"{0} hét múlva"},"past":{"one":"{0} héttel ezelőtt","other":"{0} héttel ezelőtt"},"-1":"előző hét"},"week-short":{"0":"ez a hét","1":"következő hét","future":{"one":"{0} hét múlva","other":"{0} hét múlva"},"past":{"one":"{0} héttel ezelőtt","other":"{0} héttel ezelőtt"},"-1":"előző hét"},"week-narrow":{"0":"ez a hét","1":"következő hét","future":{"one":"{0} hét múlva","other":"{0} hét múlva"},"past":{"one":"{0} héttel ezelőtt","other":"{0} héttel ezelőtt"},"-1":"előző hét"},"day":{"0":"ma","1":"holnap","2":"holnapután","future":{"one":"{0} nap múlva","other":"{0} nap múlva"},"past":{"one":"{0} nappal ezelőtt","other":"{0} nappal ezelőtt"},"-2":"tegnapelőtt","-1":"tegnap"},"day-short":{"0":"ma","1":"holnap","2":"holnapután","future":{"one":"{0} nap múlva","other":"{0} nap múlva"},"past":{"one":"{0} napja","other":"{0} napja"},"-2":"tegnapelőtt","-1":"tegnap"},"day-narrow":{"0":"ma","1":"holnap","2":"holnapután","future":{"one":"{0} nap múlva","other":"{0} nap múlva"},"past":{"one":"{0} napja","other":"{0} napja"},"-2":"tegnapelőtt","-1":"tegnap"},"hour":{"0":"ebben az órában","future":{"one":"{0} óra múlva","other":"{0} óra múlva"},"past":{"one":"{0} órával ezelőtt","other":"{0} órával ezelőtt"}},"hour-short":{"0":"ebben az órában","future":{"one":"{0} óra múlva","other":"{0} óra múlva"},"past":{"one":"{0} órával ezelőtt","other":"{0} órával ezelőtt"}},"hour-narrow":{"0":"ebben az órában","future":{"one":"{0} óra múlva","other":"{0} óra múlva"},"past":{"one":"{0} órával ezelőtt","other":"{0} órával ezelőtt"}},"minute":{"0":"ebben a percben","future":{"one":"{0} perc múlva","other":"{0} perc múlva"},"past":{"one":"{0} perccel ezelőtt","other":"{0} perccel ezelőtt"}},"minute-short":{"0":"ebben a percben","future":{"one":"{0} perc múlva","other":"{0} perc múlva"},"past":{"one":"{0} perccel ezelőtt","other":"{0} perccel ezelőtt"}},"minute-narrow":{"0":"ebben a percben","future":{"one":"{0} perc múlva","other":"{0} perc múlva"},"past":{"one":"{0} perccel ezelőtt","other":"{0} perccel ezelőtt"}},"second":{"0":"most","future":{"one":"{0} másodperc múlva","other":"{0} másodperc múlva"},"past":{"one":"{0} másodperccel ezelőtt","other":"{0} másodperccel ezelőtt"}},"second-short":{"0":"most","future":{"one":"{0} másodperc múlva","other":"{0} másodperc múlva"},"past":{"one":"{0} másodperccel ezelőtt","other":"{0} másodperccel ezelőtt"}},"second-narrow":{"0":"most","future":{"one":"{0} másodperc múlva","other":"{0} másodperc múlva"},"past":{"one":"{0} másodperccel ezelőtt","other":"{0} másodperccel ezelőtt"}}}},"availableLocales":["hu"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
