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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("mr").length
)) {
// Intl.RelativeTimeFormat.~locale.mr
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["deva"],"year":{"0":"हे वर्ष","1":"पुढील वर्ष","future":{"one":"येत्या {0} वर्षामध्ये","other":"येत्या {0} वर्षांमध्ये"},"past":{"one":"{0} वर्षापूर्वी","other":"{0} वर्षांपूर्वी"},"-1":"मागील वर्ष"},"year-short":{"0":"हे वर्ष","1":"पुढील वर्ष","future":{"one":"{0} वर्षामध्ये","other":"{0} वर्षांमध्ये"},"past":{"one":"{0} वर्षापूर्वी","other":"{0} वर्षांपूर्वी"},"-1":"मागील वर्ष"},"year-narrow":{"0":"हे वर्ष","1":"पुढील वर्ष","future":{"one":"येत्या {0} वर्षामध्ये","other":"येत्या {0} वर्षांमध्ये"},"past":{"one":"{0} वर्षापूर्वी","other":"{0} वर्षांपूर्वी"},"-1":"मागील वर्ष"},"quarter":{"0":"ही तिमाही","1":"पुढील तिमाही","future":{"one":"{0} तिमाहीमध्ये","other":"{0} तिमाहींमध्ये"},"past":{"one":"{0} तिमाहीपूर्वी","other":"{0} तिमाहींपूर्वी"},"-1":"मागील तिमाही"},"quarter-short":{"0":"ही तिमाही","1":"पुढील तिमाही","future":{"one":"येत्या {0} तिमाहीमध्ये","other":"येत्या {0} तिमाहींमध्ये"},"past":{"one":"{0} तिमाहीपूर्वी","other":"{0} तिमाहींपूर्वी"},"-1":"मागील तिमाही"},"quarter-narrow":{"0":"ही तिमाही","1":"पुढील तिमाही","future":{"one":"{0} तिमाहीमध्ये","other":"{0} तिमाहींमध्ये"},"past":{"one":"{0} तिमाहीपूर्वी","other":"{0} तिमाहींपूर्वी"},"-1":"मागील तिमाही"},"month":{"0":"हा महिना","1":"पुढील महिना","future":{"one":"येत्या {0} महिन्यामध्ये","other":"येत्या {0} महिन्यांमध्ये"},"past":{"one":"{0} महिन्यापूर्वी","other":"{0} महिन्यांपूर्वी"},"-1":"मागील महिना"},"month-short":{"0":"हा महिना","1":"पुढील महिना","future":{"one":"{0} महिन्यामध्ये","other":"{0} महिन्यामध्ये"},"past":{"one":"{0} महिन्यापूर्वी","other":"{0} महिन्यांपूर्वी"},"-1":"मागील महिना"},"month-narrow":{"0":"हा महिना","1":"पुढील महिना","future":{"one":"{0} महिन्यामध्ये","other":"{0} महिन्यांमध्ये"},"past":{"one":"{0} महिन्यापूर्वी","other":"{0} महिन्यांपूर्वी"},"-1":"मागील महिना"},"week":{"0":"हा आठवडा","1":"पुढील आठवडा","future":{"one":"{0} आठवड्यामध्ये","other":"{0} आठवड्यांमध्ये"},"past":{"one":"{0} आठवड्यापूर्वी","other":"{0} आठवड्यांपूर्वी"},"-1":"मागील आठवडा"},"week-short":{"0":"हा आठवडा","1":"पुढील आठवडा","future":{"one":"येत्या {0} आठवड्यामध्ये","other":"येत्या {0} आठवड्यांमध्ये"},"past":{"one":"{0} आठवड्यापूर्वी","other":"{0} आठवड्यांपूर्वी"},"-1":"मागील आठवडा"},"week-narrow":{"0":"हा आठवडा","1":"पुढील आठवडा","future":{"one":"येत्या {0} आठवड्यामध्ये","other":"येत्या {0} आठवड्यांमध्ये"},"past":{"one":"{0} आठवड्यापूर्वी","other":"{0} आठवड्यांपूर्वी"},"-1":"मागील आठवडा"},"day":{"0":"आज","1":"उद्या","future":{"one":"येत्या {0} दिवसामध्ये","other":"येत्या {0} दिवसांमध्ये"},"past":{"one":"{0} दिवसापूर्वी","other":"{0} दिवसांपूर्वी"},"-1":"काल"},"day-short":{"0":"आज","1":"उद्या","future":{"one":"{0} दिवसामध्ये","other":"येत्या {0} दिवसांमध्ये"},"past":{"one":"{0} दिवसापूर्वी","other":"{0} दिवसांपूर्वी"},"-1":"काल"},"day-narrow":{"0":"आज","1":"उद्या","future":{"one":"{0} दिवसामध्ये","other":"{0} दिवसांमध्ये"},"past":{"one":"{0} दिवसापूर्वी","other":"{0} दिवसांपूर्वी"},"-1":"काल"},"hour":{"0":"तासात","future":{"one":"{0} तासामध्ये","other":"{0} तासांमध्ये"},"past":{"one":"{0} तासापूर्वी","other":"{0} तासांपूर्वी"}},"hour-short":{"0":"तासात","future":{"one":"{0} तासामध्ये","other":"{0} तासांमध्ये"},"past":{"one":"{0} तासापूर्वी","other":"{0} तासांपूर्वी"}},"hour-narrow":{"0":"तासात","future":{"one":"येत्या {0} तासामध्ये","other":"येत्या {0} तासांमध्ये"},"past":{"one":"{0} तासापूर्वी","other":"{0} तासांपूर्वी"}},"minute":{"0":"या मिनिटात","future":{"one":"{0} मिनिटामध्ये","other":"{0} मिनिटांमध्ये"},"past":{"one":"{0} मिनिटापूर्वी","other":"{0} मिनिटांपूर्वी"}},"minute-short":{"0":"या मिनिटात","future":{"one":"{0} मिनि. मध्ये","other":"{0} मिनि. मध्ये"},"past":{"one":"{0} मिनि. पूर्वी","other":"{0} मिनि. पूर्वी"}},"minute-narrow":{"0":"या मिनिटात","future":{"one":"{0} मिनि. मध्ये","other":"{0} मिनि. मध्ये"},"past":{"one":"{0} मिनि. पूर्वी","other":"{0} मिनि. पूर्वी"}},"second":{"0":"आत्ता","future":{"one":"{0} सेकंदामध्ये","other":"{0} सेकंदांमध्ये"},"past":{"one":"{0} सेकंदापूर्वी","other":"{0} सेकंदांपूर्वी"}},"second-short":{"0":"आत्ता","future":{"one":"{0} से. मध्ये","other":"{0} से. मध्ये"},"past":{"one":"{0} से. पूर्वी","other":"{0} से. पूर्वी"}},"second-narrow":{"0":"आत्ता","future":{"one":"{0} से. मध्ये","other":"येत्या {0} से. मध्ये"},"past":{"one":"{0} से. पूर्वी","other":"{0} से. पूर्वी"}}},"locale":"mr"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
