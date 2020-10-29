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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("hu").length
)) {
// Intl.RelativeTimeFormat.~locale.hu
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"hu":{"nu":["latn"],"year":{"0":"ez az év","1":"következő év","future":{"one":"{0} év múlva","other":"{0} év múlva"},"past":{"one":"{0} évvel ezelőtt","other":"{0} évvel ezelőtt"},"-1":"előző év"},"year-short":{"0":"ez az év","1":"következő év","future":{"one":"{0} év múlva","other":"{0} év múlva"},"past":{"one":"{0} évvel ezelőtt","other":"{0} évvel ezelőtt"},"-1":"előző év"},"year-narrow":{"0":"ez az év","1":"következő év","future":{"one":"{0} év múlva","other":"{0} év múlva"},"past":{"one":"{0} évvel ezelőtt","other":"{0} évvel ezelőtt"},"-1":"előző év"},"quarter":{"0":"ez a negyedév","1":"következő negyedév","future":{"one":"{0} negyedév múlva","other":"{0} negyedév múlva"},"past":{"one":"{0} negyedévvel ezelőtt","other":"{0} negyedévvel ezelőtt"},"-1":"előző negyedév"},"quarter-short":{"0":"ez a negyedév","1":"következő negyedév","future":{"one":"{0} negyedév múlva","other":"{0} negyedév múlva"},"past":{"one":"{0} negyedévvel ezelőtt","other":"{0} negyedévvel ezelőtt"},"-1":"előző negyedév"},"quarter-narrow":{"0":"ez a negyedév","1":"következő negyedév","future":{"one":"{0} n.év múlva","other":"{0} n.év múlva"},"past":{"one":"{0} negyedévvel ezelőtt","other":"{0} negyedévvel ezelőtt"},"-1":"előző negyedév"},"month":{"0":"ez a hónap","1":"következő hónap","future":{"one":"{0} hónap múlva","other":"{0} hónap múlva"},"past":{"one":"{0} hónappal ezelőtt","other":"{0} hónappal ezelőtt"},"-1":"előző hónap"},"month-short":{"0":"ez a hónap","1":"következő hónap","future":{"one":"{0} hónap múlva","other":"{0} hónap múlva"},"past":{"one":"{0} hónappal ezelőtt","other":"{0} hónappal ezelőtt"},"-1":"előző hónap"},"month-narrow":{"0":"ez a hónap","1":"következő hónap","future":{"one":"{0} hónap múlva","other":"{0} hónap múlva"},"past":{"one":"{0} hónappal ezelőtt","other":"{0} hónappal ezelőtt"},"-1":"előző hónap"},"week":{"0":"ez a hét","1":"következő hét","future":{"one":"{0} hét múlva","other":"{0} hét múlva"},"past":{"one":"{0} héttel ezelőtt","other":"{0} héttel ezelőtt"},"-1":"előző hét"},"week-short":{"0":"ez a hét","1":"következő hét","future":{"one":"{0} hét múlva","other":"{0} hét múlva"},"past":{"one":"{0} héttel ezelőtt","other":"{0} héttel ezelőtt"},"-1":"előző hét"},"week-narrow":{"0":"ez a hét","1":"következő hét","future":{"one":"{0} hét múlva","other":"{0} hét múlva"},"past":{"one":"{0} héttel ezelőtt","other":"{0} héttel ezelőtt"},"-1":"előző hét"},"day":{"0":"ma","1":"holnap","2":"holnapután","future":{"one":"{0} nap múlva","other":"{0} nap múlva"},"past":{"one":"{0} nappal ezelőtt","other":"{0} nappal ezelőtt"},"-2":"tegnapelőtt","-1":"tegnap"},"day-short":{"0":"ma","1":"holnap","2":"holnapután","future":{"one":"{0} nap múlva","other":"{0} nap múlva"},"past":{"one":"{0} napja","other":"{0} napja"},"-2":"tegnapelőtt","-1":"tegnap"},"day-narrow":{"0":"ma","1":"holnap","2":"holnapután","future":{"one":"{0} nap múlva","other":"{0} nap múlva"},"past":{"one":"{0} napja","other":"{0} napja"},"-2":"tegnapelőtt","-1":"tegnap"},"hour":{"0":"ebben az órában","future":{"one":"{0} óra múlva","other":"{0} óra múlva"},"past":{"one":"{0} órával ezelőtt","other":"{0} órával ezelőtt"}},"hour-short":{"0":"ebben az órában","future":{"one":"{0} óra múlva","other":"{0} óra múlva"},"past":{"one":"{0} órával ezelőtt","other":"{0} órával ezelőtt"}},"hour-narrow":{"0":"ebben az órában","future":{"one":"{0} óra múlva","other":"{0} óra múlva"},"past":{"one":"{0} órával ezelőtt","other":"{0} órával ezelőtt"}},"minute":{"0":"ebben a percben","future":{"one":"{0} perc múlva","other":"{0} perc múlva"},"past":{"one":"{0} perccel ezelőtt","other":"{0} perccel ezelőtt"}},"minute-short":{"0":"ebben a percben","future":{"one":"{0} perc múlva","other":"{0} perc múlva"},"past":{"one":"{0} perccel ezelőtt","other":"{0} perccel ezelőtt"}},"minute-narrow":{"0":"ebben a percben","future":{"one":"{0} perc múlva","other":"{0} perc múlva"},"past":{"one":"{0} perccel ezelőtt","other":"{0} perccel ezelőtt"}},"second":{"0":"most","future":{"one":"{0} másodperc múlva","other":"{0} másodperc múlva"},"past":{"one":"{0} másodperccel ezelőtt","other":"{0} másodperccel ezelőtt"}},"second-short":{"0":"most","future":{"one":"{0} másodperc múlva","other":"{0} másodperc múlva"},"past":{"one":"{0} másodperccel ezelőtt","other":"{0} másodperccel ezelőtt"}},"second-narrow":{"0":"most","future":{"one":"{0} másodperc múlva","other":"{0} másodperc múlva"},"past":{"one":"{0} másodperccel ezelőtt","other":"{0} másodperccel ezelőtt"}}}},"availableLocales":["hu"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
