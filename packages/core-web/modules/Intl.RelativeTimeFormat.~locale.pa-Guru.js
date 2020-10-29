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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("pa-Guru").length
)) {
// Intl.RelativeTimeFormat.~locale.pa-Guru
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"pa-Guru":{"nu":["latn"],"year":{"0":"ਇਹ ਸਾਲ","1":"ਅਗਲਾ ਸਾਲ","future":{"one":"{0} ਸਾਲ ਵਿੱਚ","other":"{0} ਸਾਲਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਾਲ ਪਹਿਲਾਂ","other":"{0} ਸਾਲ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਸਾਲ"},"year-short":{"0":"ਇਹ ਸਾਲ","1":"ਅਗਲਾ ਸਾਲ","future":{"one":"{0} ਸਾਲ ਵਿੱਚ","other":"{0} ਸਾਲਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਾਲ ਪਹਿਲਾਂ","other":"{0} ਸਾਲ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਸਾਲ"},"year-narrow":{"0":"ਇਹ ਸਾਲ","1":"ਅਗਲਾ ਸਾਲ","future":{"one":"{0} ਸਾਲ ਵਿੱਚ","other":"{0} ਸਾਲਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਾਲ ਪਹਿਲਾਂ","other":"{0} ਸਾਲ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਸਾਲ"},"quarter":{"0":"ਇਸ ਤਿਮਾਹੀ","1":"ਅਗਲੀ ਤਿਮਾਹੀ","future":{"one":"{0} ਤਿਮਾਹੀ ਵਿੱਚ","other":"{0} ਤਿਮਾਹੀਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਤਿਮਾਹੀ ਪਹਿਲਾਂ","other":"{0} ਤਿਮਾਹੀਆਂ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲੀ ਤਿਮਾਹੀ"},"quarter-short":{"0":"ਇਹ ਤਿਮਾਹੀ","1":"ਅਗਲੀ ਤਿਮਾਹੀ","future":{"one":"{0} ਤਿਮਾਹੀ ਵਿੱਚ","other":"{0} ਤਿਮਾਹੀਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਤਿਮਾਹੀ ਪਹਿਲਾਂ","other":"{0} ਤਿਮਾਹੀਆਂ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲੀ ਤਿਮਾਹੀ"},"quarter-narrow":{"0":"ਇਹ ਤਿਮਾਹੀ","1":"ਅਗਲੀ ਤਿਮਾਹੀ","future":{"one":"{0} ਤਿਮਾਹੀ ਵਿੱਚ","other":"{0} ਤਿਮਾਹੀਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਤਿਮਾਹੀ ਪਹਿਲਾਂ","other":"{0} ਤਿਮਾਹੀਆਂ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲੀ ਤਿਮਾਹੀ"},"month":{"0":"ਇਹ ਮਹੀਨਾ","1":"ਅਗਲਾ ਮਹੀਨਾ","future":{"one":"{0} ਮਹੀਨੇ ਵਿੱਚ","other":"{0} ਮਹੀਨਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਹੀਨਾ ਪਹਿਲਾਂ","other":"{0} ਮਹੀਨੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਮਹੀਨਾ"},"month-short":{"0":"ਇਹ ਮਹੀਨਾ","1":"ਅਗਲਾ ਮਹੀਨਾ","future":{"one":"{0} ਮਹੀਨੇ ਵਿੱਚ","other":"{0} ਮਹੀਨਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਹੀਨਾ ਪਹਿਲਾਂ","other":"{0} ਮਹੀਨੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਮਹੀਨਾ"},"month-narrow":{"0":"ਇਹ ਮਹੀਨਾ","1":"ਅਗਲਾ ਮਹੀਨਾ","future":{"one":"{0} ਮਹੀਨੇ ਵਿੱਚ","other":"{0} ਮਹੀਨਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਹੀਨਾ ਪਹਿਲਾਂ","other":"{0} ਮਹੀਨੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਮਹੀਨਾ"},"week":{"0":"ਇਹ ਹਫ਼ਤਾ","1":"ਅਗਲਾ ਹਫ਼ਤਾ","future":{"one":"{0} ਹਫ਼ਤੇ ਵਿੱਚ","other":"{0} ਹਫ਼ਤਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਹਫ਼ਤਾ ਪਹਿਲਾਂ","other":"{0} ਹਫ਼ਤੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਹਫ਼ਤਾ"},"week-short":{"0":"ਇਹ ਹਫ਼ਤਾ","1":"ਅਗਲਾ ਹਫ਼ਤਾ","future":{"one":"{0} ਹਫ਼ਤੇ ਵਿੱਚ","other":"{0} ਹਫ਼ਤਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਹਫ਼ਤਾ ਪਹਿਲਾਂ","other":"{0} ਹਫ਼ਤੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਹਫ਼ਤਾ"},"week-narrow":{"0":"ਇਹ ਹਫ਼ਤਾ","1":"ਅਗਲਾ ਹਫ਼ਤਾ","future":{"one":"{0} ਹਫ਼ਤੇ ਵਿੱਚ","other":"{0} ਹਫ਼ਤਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਹਫ਼ਤਾ ਪਹਿਲਾਂ","other":"{0} ਹਫ਼ਤੇ ਪਹਿਲਾਂ"},"-1":"ਪਿਛਲਾ ਹਫ਼ਤਾ"},"day":{"0":"ਅੱਜ","1":"ਭਲਕੇ","future":{"one":"{0} ਦਿਨ ਵਿੱਚ","other":"{0} ਦਿਨਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਦਿਨ ਪਹਿਲਾਂ","other":"{0} ਦਿਨ ਪਹਿਲਾਂ"},"-1":"ਬੀਤਿਆ ਕੱਲ੍ਹ"},"day-short":{"0":"ਅੱਜ","1":"ਭਲਕੇ","future":{"one":"{0} ਦਿਨ ਵਿੱਚ","other":"{0} ਦਿਨਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਦਿਨ ਪਹਿਲਾਂ","other":"{0} ਦਿਨ ਪਹਿਲਾਂ"},"-1":"ਬੀਤਿਆ ਕੱਲ੍ਹ"},"day-narrow":{"0":"ਅੱਜ","1":"ਭਲਕੇ","future":{"one":"{0} ਦਿਨ ਵਿੱਚ","other":"{0} ਦਿਨਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਦਿਨ ਪਹਿਲਾਂ","other":"{0} ਦਿਨ ਪਹਿਲਾਂ"},"-1":"ਬੀਤਿਆ ਕੱਲ੍ਹ"},"hour":{"0":"ਇਸ ਘੰਟੇ","future":{"one":"{0} ਘੰਟੇ ਵਿੱਚ","other":"{0} ਘੰਟਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਘੰਟਾ ਪਹਿਲਾਂ","other":"{0} ਘੰਟੇ ਪਹਿਲਾਂ"}},"hour-short":{"0":"ਇਸ ਘੰਟੇ","future":{"one":"{0} ਘੰਟੇ ਵਿੱਚ","other":"{0} ਘੰਟਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਘੰਟਾ ਪਹਿਲਾਂ","other":"{0} ਘੰਟੇ ਪਹਿਲਾਂ"}},"hour-narrow":{"0":"ਇਸ ਘੰਟੇ","future":{"one":"{0} ਘੰਟੇ ਵਿੱਚ","other":"{0} ਘੰਟਿਆਂ ਵਿੱਚ"},"past":{"one":"{0} ਘੰਟਾ ਪਹਿਲਾਂ","other":"{0} ਘੰਟੇ ਪਹਿਲਾਂ"}},"minute":{"0":"ਇਸ ਮਿੰਟ","future":{"one":"{0} ਮਿੰਟ ਵਿੱਚ","other":"{0} ਮਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਮਿੰਟ ਪਹਿਲਾਂ"}},"minute-short":{"0":"ਇਸ ਮਿੰਟ","future":{"one":"{0} ਮਿੰਟ ਵਿੱਚ","other":"{0} ਮਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਮਿੰਟ ਪਹਿਲਾਂ"}},"minute-narrow":{"0":"ਇਸ ਮਿੰਟ","future":{"one":"{0} ਮਿੰਟ ਵਿੱਚ","other":"{0} ਮਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਮਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਮਿੰਟ ਪਹਿਲਾਂ"}},"second":{"0":"ਹੁਣ","future":{"one":"{0} ਸਕਿੰਟ ਵਿੱਚ","other":"{0} ਸਕਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ"}},"second-short":{"0":"ਹੁਣ","future":{"one":"{0} ਸਕਿੰਟ ਵਿੱਚ","other":"{0} ਸਕਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ"}},"second-narrow":{"0":"ਹੁਣ","future":{"one":"{0} ਸਕਿੰਟ ਵਿੱਚ","other":"{0} ਸਕਿੰਟਾਂ ਵਿੱਚ"},"past":{"one":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ","other":"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ"}}}},"availableLocales":["pa-Guru"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
