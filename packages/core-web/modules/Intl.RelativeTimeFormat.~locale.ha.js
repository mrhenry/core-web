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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ha").length
)) {
// Intl.RelativeTimeFormat.~locale.ha
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ha":{"nu":["latn"],"year":{"0":"bana","1":"badi","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"bara"},"year-short":{"0":"bana","1":"badi","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"bara"},"year-narrow":{"0":"bana","1":"badi","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"bara"},"quarter":{"0":"wannan kwatan","1":"kwata na gaba","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"kwatan karshe"},"quarter-short":{"0":"wannan kwatan","1":"kwata na gaba","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"kwatan karshe"},"quarter-narrow":{"0":"wannan kwatan","1":"kwata na gaba","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"kwatan karshe"},"month":{"0":"wannan watan","1":"wata na gaba","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"watan daya gabata"},"month-short":{"0":"wannan watan","1":"wata na gaba","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"watan da ya gabata"},"month-narrow":{"0":"wannan watan","1":"wata na gaba","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"watan da ya gabata"},"week":{"0":"wannan satin","1":"sati na gaba","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"satin da ya gabata"},"week-short":{"0":"wannan satin","1":"sati na gaba","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"satin da ya gabata"},"week-narrow":{"0":"wannan satin","1":"sati na gaba","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"satin da ya gabata"},"day":{"0":"yau","1":"gobe","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"jiya"},"day-short":{"0":"yau","1":"gobe","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"jiya"},"day-narrow":{"0":"yau","1":"gobe","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"jiya"},"hour":{"0":"wannan awa","future":{"one":"cikin {0} awa","other":"cikin {0} awa"},"past":{"one":"{0} awa da ya gabata","other":"{0} awa da ya gabata"}},"hour-short":{"0":"wannan awa","future":{"one":"cikin {0} awa","other":"cikin {0} awa"},"past":{"one":"{0} awa da ya gabata","other":"{0} awa da ya gabata"}},"hour-narrow":{"0":"wannan awa","future":{"one":"cikin {0} awa","other":"cikin {0} awa"},"past":{"one":"{0} awa da ya gabata","other":"{0} awa da ya gabata"}},"minute":{"0":"wannan mintin","future":{"one":"cikin {0} minti","other":"cikin {0} minti"},"past":{"one":"{0} minti da ya gabata","other":"{0} minti da ya gabata"}},"minute-short":{"0":"wannan mintin","future":{"one":"cikin {0} minti","other":"cikin {0} minti"},"past":{"one":"{0} minti da ya gabata","other":"{0} minti da ya gabata"}},"minute-narrow":{"0":"wannan mintin","future":{"one":"cikin {0} minti","other":"cikin {0} minti"},"past":{"one":"{0} minti da ya gabata","other":"{0} minti da ya gabata"}},"second":{"0":"yanzu","future":{"one":"cikin {0} dakika","other":"cikin {0} dakika"},"past":{"one":"{0} dakika da ya gabata","other":"{0} dakika da ya gabata"}},"second-short":{"0":"yanzu","future":{"one":"cikin {0} dakika","other":"cikin {0} dakika"},"past":{"one":"{0} dakika da ya gabata","other":"{0} dakika da ya gabata"}},"second-narrow":{"0":"yanzu","future":{"one":"cikin {0} dakika","other":"cikin {0} dakika"},"past":{"one":"{0} dakika da ya gabata","other":"{0} dakika da ya gabata"}}}},"availableLocales":["ha"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
