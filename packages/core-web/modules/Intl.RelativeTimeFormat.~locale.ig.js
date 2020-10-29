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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ig").length
)) {
// Intl.RelativeTimeFormat.~locale.ig
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ig":{"nu":["latn"],"year":{"0":"Afọ a","1":"Afọ ọzọ","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"Afọ gara aga"},"year-short":{"0":"Afọ a","1":"Afọ ọzọ","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"Afọ gara aga"},"year-narrow":{"0":"Afọ a","1":"Afọ ọzọ","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"Afọ gara aga"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"Ọnwa a","1":"Ọnwa ọzọ","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"Ọnwa gara aga"},"month-short":{"0":"Ọnwa a","1":"Ọnwa ọzọ","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"Ọnwa gara aga"},"month-narrow":{"0":"Ọnwa a","1":"Ọnwa ọzọ","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"Ọnwa gara aga"},"week":{"0":"Izu a","1":"Izu na-esote","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"Izu gara aga"},"week-short":{"0":"Izu a","1":"Izu na-esote","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"Izu gara aga"},"week-narrow":{"0":"Izu a","1":"Izu na-esote","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"Izu gara aga"},"day":{"0":"Taa","1":"Echi","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"Ụnyaahụ"},"day-short":{"0":"Taata","1":"Echi","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"Ụnyaahụ"},"day-narrow":{"0":"Taata","1":"Echi","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"Ụnyaahụ"},"hour":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-short":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-narrow":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"minute":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-short":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-narrow":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"second":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-short":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-narrow":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}}},"availableLocales":["ig"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
