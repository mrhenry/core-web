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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("am").length
)) {
// Intl.RelativeTimeFormat.~locale.am
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"am":{"nu":["latn"],"year":{"0":"በዚህ ዓመት","1":"የሚቀጥለው ዓመት","future":{"one":"በ{0} ዓመታት ውስጥ","other":"በ{0} ዓመታት ውስጥ"},"past":{"one":"ከ{0} ዓመት በፊት","other":"ከ{0} ዓመታት በፊት"},"-1":"ያለፈው ዓመት"},"year-short":{"0":"በዚህ ዓመት","1":"የሚቀጥለው ዓመት","future":{"one":"በ{0} ዓመታት ውስጥ","other":"በ{0} ዓመታት ውስጥ"},"past":{"one":"ከ{0} ዓመታት በፊት","other":"ከ{0} ዓመታት በፊት"},"-1":"ያለፈው ዓመት"},"year-narrow":{"0":"በዚህ ዓመት","1":"የሚቀጥለው ዓመት","future":{"one":"በ{0} ዓመታት ውስጥ","other":"በ{0} ዓመታት ውስጥ"},"past":{"one":"ከ{0} ዓመታት በፊት","other":"ከ{0} ዓመታት በፊት"},"-1":"ያለፈው ዓመት"},"quarter":{"0":"ይህ ሩብ","1":"የሚቀጥለው ሩብ","future":{"one":"+{0} ሩብ","other":"+{0} ሩብ"},"past":{"one":"{0} ሩብ በፊት","other":"{0} ሩብ በፊት"},"-1":"የመጨረሻው ሩብ"},"quarter-short":{"0":"ይህ ሩብ","1":"የሚቀጥለው ሩብ","future":{"one":"+{0} ሩብ","other":"+{0} ሩብ"},"past":{"one":"{0} ሩብ በፊት","other":"{0} ሩብ በፊት"},"-1":"የመጨረሻው ሩብ"},"quarter-narrow":{"0":"ይህ ሩብ","1":"የሚቀጥለው ሩብ","future":{"one":"+{0} ሩብ","other":"+{0} ሩብ"},"past":{"one":"{0} ሩብ በፊት","other":"{0} ሩብ በፊት"},"-1":"የመጨረሻው ሩብ"},"month":{"0":"በዚህ ወር","1":"የሚቀጥለው ወር","future":{"one":"በ{0} ወር ውስጥ","other":"በ{0} ወራት ውስጥ"},"past":{"one":"ከ{0} ወር በፊት","other":"ከ{0} ወራት በፊት"},"-1":"ያለፈው ወር"},"month-short":{"0":"በዚህ ወር","1":"የሚቀጥለው ወር","future":{"one":"በ{0} ወራት ውስጥ","other":"በ{0} ወራት ውስጥ"},"past":{"one":"ከ{0} ወራት በፊት","other":"ከ{0} ወራት በፊት"},"-1":"ያለፈው ወር"},"month-narrow":{"0":"በዚህ ወር","1":"የሚቀጥለው ወር","future":{"one":"በ{0} ወራት ውስጥ","other":"በ{0} ወራት ውስጥ"},"past":{"one":"ከ{0} ወራት በፊት","other":"ከ{0} ወራት በፊት"},"-1":"ያለፈው ወር"},"week":{"0":"በዚህ ሳምንት","1":"የሚቀጥለው ሳምንት","future":{"one":"በ{0} ሳምንት ውስጥ","other":"በ{0} ሳምንታት ውስጥ"},"past":{"one":"ከ{0} ሳምንት በፊት","other":"ከ{0} ሳምንታት በፊት"},"-1":"ያለፈው ሳምንት"},"week-short":{"0":"በዚህ ሣምንት","1":"የሚቀጥለው ሳምንት","future":{"one":"በ{0} ሳምንታት ውስጥ","other":"በ{0} ሳምንታት ውስጥ"},"past":{"one":"ከ{0} ሳምንታት በፊት","other":"ከ{0} ሳምንታት በፊት"},"-1":"ባለፈው ሳምንት"},"week-narrow":{"0":"በዚህ ሣምንት","1":"የሚቀጥለው ሳምንት","future":{"one":"በ{0} ሳምንታት ውስጥ","other":"በ{0} ሳምንታት ውስጥ"},"past":{"one":"ከ{0} ሳምንታት በፊት","other":"ከ{0} ሳምንታት በፊት"},"-1":"ባለፈው ሳምንት"},"day":{"0":"ዛሬ","1":"ነገ","2":"ከነገ ወዲያ","future":{"one":"በ{0} ቀን ውስጥ","other":"በ{0} ቀናት ውስጥ"},"past":{"one":"ከ{0} ቀን በፊት","other":"ከ{0} ቀናት በፊት"},"-2":"ከትናንት ወዲያ","-1":"ትናንት"},"day-short":{"0":"ዛሬ","1":"ነገ","2":"ከነገ ወዲያ","future":{"one":"በ{0} ቀን ውስጥ","other":"በ{0} ቀኖች ውስጥ"},"past":{"one":"ከ {0} ቀን በፊት","other":"ከ{0} ቀኖች በፊት"},"-2":"ከትናንት ወዲያ","-1":"ትላንትና"},"day-narrow":{"0":"ዛሬ","1":"ነገ","2":"ከነገ ወዲያ","future":{"one":"በ{0} ቀን ውስጥ","other":"በ{0} ቀኖች ውስጥ"},"past":{"one":"ከ {0} ቀን በፊት","other":"ከ{0} ቀኖች በፊት"},"-2":"ከትናንት ወዲያ","-1":"ትላንትና"},"hour":{"0":"ይህ ሰዓት","future":{"one":"በ{0} ሰዓት ውስጥ","other":"በ{0} ሰዓቶች ውስጥ"},"past":{"one":"ከ{0} ሰዓት በፊት","other":"ከ{0} ሰዓቶች በፊት"}},"hour-short":{"0":"ይህ ሰዓት","future":{"one":"በ{0} ሰዓት ውስጥ","other":"በ{0} ሰዓቶች ውስጥ"},"past":{"one":"ከ{0} ሰዓት በፊት","other":"ከ{0} ሰዓቶች በፊት"}},"hour-narrow":{"0":"ይህ ሰዓት","future":{"one":"በ{0} ሰዓት ውስጥ","other":"በ{0} ሰዓቶች ውስጥ"},"past":{"one":"ከ{0} ሰዓት በፊት","other":"ከ{0} ሰዓቶች በፊት"}},"minute":{"0":"ይህ ደቂቃ","future":{"one":"በ{0} ደቂቃ ውስጥ","other":"በ{0} ደቂቃዎች ውስጥ"},"past":{"one":"ከ{0} ደቂቃ በፊት","other":"ከ{0} ደቂቃዎች በፊት"}},"minute-short":{"0":"ይህ ደቂቃ","future":{"one":"በ{0} ደቂቃ ውስጥ","other":"በ{0} ደቂቃዎች ውስጥ"},"past":{"one":"ከ{0} ደቂቃ በፊት","other":"ከ{0} ደቂቃዎች በፊት"}},"minute-narrow":{"0":"ይህ ደቂቃ","future":{"one":"በ{0} ደቂቃ ውስጥ","other":"በ{0} ደቂቃዎች ውስጥ"},"past":{"one":"ከ{0} ደቂቃ በፊት","other":"ከ{0} ደቂቃዎች በፊት"}},"second":{"0":"አሁን","future":{"one":"በ{0} ሰከንድ ውስጥ","other":"በ{0} ሰከንዶች ውስጥ"},"past":{"one":"ከ{0} ሰከንድ በፊት","other":"ከ{0} ሰከንዶች በፊት"}},"second-short":{"0":"አሁን","future":{"one":"በ{0} ሰከንድ ውስጥ","other":"በ{0} ሰከንዶች ውስጥ"},"past":{"one":"ከ{0} ሰከንድ በፊት","other":"ከ{0} ሰከንዶች በፊት"}},"second-narrow":{"0":"አሁን","future":{"one":"በ{0} ሰከንድ ውስጥ","other":"በ{0} ሰከንዶች ውስጥ"},"past":{"one":"ከ{0} ሰከንድ በፊት","other":"ከ{0} ሰከንዶች በፊት"}}}},"availableLocales":["am"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
