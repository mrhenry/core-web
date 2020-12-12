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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ig").length
)) {
// Intl.RelativeTimeFormat.~locale.ig
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"Afọ a","1":"Afọ ọzọ","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"Afọ gara aga"},"year-short":{"0":"Afọ a","1":"Afọ ọzọ","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"Afọ gara aga"},"year-narrow":{"0":"Afọ a","1":"Afọ ọzọ","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"Afọ gara aga"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"Ọnwa a","1":"Ọnwa ọzọ","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"Ọnwa gara aga"},"month-short":{"0":"Ọnwa a","1":"Ọnwa ọzọ","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"Ọnwa gara aga"},"month-narrow":{"0":"Ọnwa a","1":"Ọnwa ọzọ","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"Ọnwa gara aga"},"week":{"0":"Izu a","1":"Izu na-esote","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"Izu gara aga"},"week-short":{"0":"Izu a","1":"Izu na-esote","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"Izu gara aga"},"week-narrow":{"0":"Izu a","1":"Izu na-esote","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"Izu gara aga"},"day":{"0":"Taa","1":"Echi","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"Ụnyaahụ"},"day-short":{"0":"Taata","1":"Echi","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"Ụnyaahụ"},"day-narrow":{"0":"Taata","1":"Echi","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"Ụnyaahụ"},"hour":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-short":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-narrow":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"minute":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-short":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-narrow":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"second":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-short":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-narrow":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}},"locale":"ig"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
