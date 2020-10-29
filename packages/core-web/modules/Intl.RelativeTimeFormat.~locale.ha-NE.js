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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ha-NE").length
)) {
// Intl.RelativeTimeFormat.~locale.ha-NE
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ha-NE":{"nu":["latn"],"year":{"0":"bana","1":"badi","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"bara"},"year-short":{"0":"bana","1":"badi","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"bara"},"year-narrow":{"0":"bana","1":"badi","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"bara"},"quarter":{"0":"wannan kwatan","1":"kwata na gaba","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"kwatan karshe"},"quarter-short":{"0":"wannan kwatan","1":"kwata na gaba","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"kwatan karshe"},"quarter-narrow":{"0":"wannan kwatan","1":"kwata na gaba","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"kwatan karshe"},"month":{"0":"wannan watan","1":"wata na gaba","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"watan daya gabata"},"month-short":{"0":"wannan watan","1":"wata na gaba","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"watan da ya gabata"},"month-narrow":{"0":"wannan watan","1":"wata na gaba","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"watan da ya gabata"},"week":{"0":"wannan satin","1":"sati na gaba","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"satin da ya gabata"},"week-short":{"0":"wannan satin","1":"sati na gaba","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"satin da ya gabata"},"week-narrow":{"0":"wannan satin","1":"sati na gaba","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"satin da ya gabata"},"day":{"0":"yau","1":"gobe","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"jiya"},"day-short":{"0":"yau","1":"gobe","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"jiya"},"day-narrow":{"0":"yau","1":"gobe","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"jiya"},"hour":{"0":"wannan awa","future":{"one":"cikin {0} awa","other":"cikin {0} awa"},"past":{"one":"{0} awa da ya gabata","other":"{0} awa da ya gabata"}},"hour-short":{"0":"wannan awa","future":{"one":"cikin {0} awa","other":"cikin {0} awa"},"past":{"one":"{0} awa da ya gabata","other":"{0} awa da ya gabata"}},"hour-narrow":{"0":"wannan awa","future":{"one":"cikin {0} awa","other":"cikin {0} awa"},"past":{"one":"{0} awa da ya gabata","other":"{0} awa da ya gabata"}},"minute":{"0":"wannan mintin","future":{"one":"cikin {0} minti","other":"cikin {0} minti"},"past":{"one":"{0} minti da ya gabata","other":"{0} minti da ya gabata"}},"minute-short":{"0":"wannan mintin","future":{"one":"cikin {0} minti","other":"cikin {0} minti"},"past":{"one":"{0} minti da ya gabata","other":"{0} minti da ya gabata"}},"minute-narrow":{"0":"wannan mintin","future":{"one":"cikin {0} minti","other":"cikin {0} minti"},"past":{"one":"{0} minti da ya gabata","other":"{0} minti da ya gabata"}},"second":{"0":"yanzu","future":{"one":"cikin {0} dakika","other":"cikin {0} dakika"},"past":{"one":"{0} dakika da ya gabata","other":"{0} dakika da ya gabata"}},"second-short":{"0":"yanzu","future":{"one":"cikin {0} dakika","other":"cikin {0} dakika"},"past":{"one":"{0} dakika da ya gabata","other":"{0} dakika da ya gabata"}},"second-narrow":{"0":"yanzu","future":{"one":"cikin {0} dakika","other":"cikin {0} dakika"},"past":{"one":"{0} dakika da ya gabata","other":"{0} dakika da ya gabata"}}}},"availableLocales":["ha-NE"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
