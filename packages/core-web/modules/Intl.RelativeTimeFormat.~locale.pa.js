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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("pa").length
)) {
// Intl.RelativeTimeFormat.~locale.pa
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ਇਹ ਸਾਲ","1":"ਅਗਲਾ ਸਾਲ","future":{"one":"{0} ਸਾਲ ਵਿੱਚ","other":"{0} ਸਾਲਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਾਲ ਪਹਿਲਾਂ","other":"{0} ਸਾਲ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਸਾਲ"},"year-short":{"0":"ਇਹ ਸਾਲ","1":"ਅਗਲਾ ਸਾਲ","future":{"one":"{0} ਸਾਲ ਵਿੱਚ","other":"{0} ਸਾਲਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਾਲ ਪਹਿਲਾਂ","other":"{0} ਸਾਲ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਸਾਲ"},"year-narrow":{"0":"ਇਹ ਸਾਲ","1":"ਅਗਲਾ ਸਾਲ","future":{"one":"{0} ਸਾਲ ਵਿੱਚ","other":"{0} ਸਾਲਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਾਲ ਪਹਿਲਾਂ","other":"{0} ਸਾਲ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਸਾਲ"},"quarter":{"0":"ਇਸ ਤਿਮਾਹੀ","1":"ਅਗਲੀ ਤਿਮਾਹੀ","future":{"one":"{0} ਤਿਮਾਹੀ ਵਿੱਚ","other":"{0} ਤਿਮਾਹੀਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਤਿਮਾਹੀ ਪਹਿਲਾਂ","other":"{0} ਤਿਮਾਹੀਆਂ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲੀ ਤਿਮਾਹੀ"},"quarter-short":{"0":"ਇਹ ਤਿਮਾਹੀ","1":"ਅਗਲੀ ਤਿਮਾਹੀ","future":{"one":"{0} ਤਿਮਾਹੀ ਵਿੱਚ","other":"{0} ਤਿਮਾਹੀਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਤਿਮਾਹੀ ਪਹਿਲਾਂ","other":"{0} ਤਿਮਾਹੀਆਂ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲੀ ਤਿਮਾਹੀ"},"quarter-narrow":{"0":"ਇਹ ਤਿਮਾਹੀ","1":"ਅਗਲੀ ਤਿਮਾਹੀ","future":{"one":"{0} ਤਿਮਾਹੀ ਵਿੱਚ","other":"{0} ਤਿਮਾਹੀਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਤਿਮਾਹੀ ਪਹਿਲਾਂ","other":"{0} ਤਿਮਾਹੀਆਂ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲੀ ਤਿਮਾਹੀ"},"month":{"0":"ਇਹ ਮਹੀਨਾ","1":"ਅਗਲਾ ਮਹੀਨਾ","future":{"one":"{0} ਮਹੀਨੇ ਵਿੱਚ","other":"{0} ਮਹੀਨਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਹੀਨਾ ਪਹਿਲਾਂ","other":"{0} ਮਹੀਨੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਮਹੀਨਾ"},"month-short":{"0":"ਇਹ ਮਹੀਨਾ","1":"ਅਗਲਾ ਮਹੀਨਾ","future":{"one":"{0} ਮਹੀਨੇ ਵਿੱਚ","other":"{0} ਮਹੀਨਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਹੀਨਾ ਪਹਿਲਾਂ","other":"{0} ਮਹੀਨੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਮਹੀਨਾ"},"month-narrow":{"0":"ਇਹ ਮਹੀਨਾ","1":"ਅਗਲਾ ਮਹੀਨਾ","future":{"one":"{0} ਮਹੀਨੇ ਵਿੱਚ","other":"{0} ਮਹੀਨਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਹੀਨਾ ਪਹਿਲਾਂ","other":"{0} ਮਹੀਨੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਮਹੀਨਾ"},"week":{"0":"ਇਹ ਹਫ਼ਤਾ","1":"ਅਗਲਾ ਹਫ਼ਤਾ","future":{"one":"{0} ਹਫ਼ਤੇ ਵਿੱਚ","other":"{0} ਹਫ਼ਤਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਹਫ਼ਤਾ ਪਹਿਲਾਂ","other":"{0} ਹਫ਼ਤੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਹਫ਼ਤਾ"},"week-short":{"0":"ਇਹ ਹਫ਼ਤਾ","1":"ਅਗਲਾ ਹਫ਼ਤਾ","future":{"one":"{0} ਹਫ਼ਤੇ ਵਿੱਚ","other":"{0} ਹਫ਼ਤਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਹਫ਼ਤਾ ਪਹਿਲਾਂ","other":"{0} ਹਫ਼ਤੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਹਫ਼ਤਾ"},"week-narrow":{"0":"ਇਹ ਹਫ਼ਤਾ","1":"ਅਗਲਾ ਹਫ਼ਤਾ","future":{"one":"{0} ਹਫ਼ਤੇ ਵਿੱਚ","other":"{0} ਹਫ਼ਤਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਹਫ਼ਤਾ ਪਹਿਲਾਂ","other":"{0} ਹਫ਼ਤੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਹਫ਼ਤਾ"},"day":{"0":"ਅੱਜ","1":"ਭਲਕੇ","future":{"one":"{0} ਦਿਨ ਵਿੱਚ","other":"{0} ਦਿਨਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਦਿਨ ਪਹਿਲਾਂ","other":"{0} ਦਿਨ ਪਹਿਲਾਂ"},"-1":"ਬੀਤਿਆ ਕੱਲ੍ਹ"},"day-short":{"0":"ਅੱਜ","1":"ਭਲਕੇ","future":{"one":"{0} ਦਿਨ ਵਿੱਚ","other":"{0} ਦਿਨਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਦਿਨ ਪਹਿਲਾਂ","other":"{0} ਦਿਨ ਪਹਿਲਾਂ"},"-1":"ਬੀਤਿਆ ਕੱਲ੍ਹ"},"day-narrow":{"0":"ਅੱਜ","1":"ਭਲਕੇ","future":{"one":"{0} ਦਿਨ ਵਿੱਚ","other":"{0} ਦਿਨਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਦਿਨ ਪਹਿਲਾਂ","other":"{0} ਦਿਨ ਪਹਿਲਾਂ"},"-1":"ਬੀਤਿਆ ਕੱਲ੍ਹ"},"hour":{"0":"ਇਸ ਘੰਟੇ","future":{"one":"{0} ਘੰਟੇ ਵਿੱਚ","other":"{0} ਘੰਟਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਘੰਟਾ ਪਹਿਲਾਂ","other":"{0} ਘੰਟੇ ਪਹਿਲਾਂ"}},"hour-short":{"0":"ਇਸ ਘੰਟੇ","future":{"one":"{0} ਘੰਟੇ ਵਿੱਚ","other":"{0} ਘੰਟਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਘੰਟਾ ਪਹਿਲਾਂ","other":"{0} ਘੰਟੇ ਪਹਿਲਾਂ"}},"hour-narrow":{"0":"ਇਸ ਘੰਟੇ","future":{"one":"{0} ਘੰਟੇ ਵਿੱਚ","other":"{0} ਘੰਟਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਘੰਟਾ ਪਹਿਲਾਂ","other":"{0} ਘੰਟੇ ਪਹਿਲਾਂ"}},"minute":{"0":"ਇਸ ਮਿੰਟ","future":{"one":"{0} ਮਿੰਟ ਵਿੱਚ","other":"{0} ਮਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਮਿੰਟ ਪਹਿਲਾਂ"}},"minute-short":{"0":"ਇਸ ਮਿੰਟ","future":{"one":"{0} ਮਿੰਟ ਵਿੱਚ","other":"{0} ਮਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਮਿੰਟ ਪਹਿਲਾਂ"}},"minute-narrow":{"0":"ਇਸ ਮਿੰਟ","future":{"one":"{0} ਮਿੰਟ ਵਿੱਚ","other":"{0} ਮਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਮਿੰਟ ਪਹਿਲਾਂ"}},"second":{"0":"ਹੁਣ","future":{"one":"{0} ਸਕਿੰਟ ਵਿੱਚ","other":"{0} ਸਕਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ"}},"second-short":{"0":"ਹੁਣ","future":{"one":"{0} ਸਕਿੰਟ ਵਿੱਚ","other":"{0} ਸਕਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ"}},"second-narrow":{"0":"ਹੁਣ","future":{"one":"{0} ਸਕਿੰਟ ਵਿੱਚ","other":"{0} ਸਕਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ"}}},"locale":"pa"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
