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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ti-ER").length
)) {
// Intl.RelativeTimeFormat.~locale.ti-ER
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ti-ER":{"nu":["latn"],"year":{"0":"ሎሚ ዓመት","1":"ንዓመታ","future":{"one":"ኣብ {0} ዓ","other":"ኣብ {0} ዓ"},"past":{"one":"ቅድሚ {0} ዓ","other":"ቅድሚ {0} ዓ"},"-1":"ዓሚ"},"year-short":{"0":"ሎሚ ዓመት","1":"ንዓመታ","future":{"one":"ኣብ {0} ዓ","other":"ኣብ {0} ዓ"},"past":{"one":"ቅድሚ -{0} ዓ","other":"ቅድሚ {0} ዓ"},"-1":"ዓሚ"},"year-narrow":{"0":"ሎሚ ዓመት","1":"ንዓመታ","future":{"one":"ኣብ {0} ዓ","other":"ኣብ {0} ዓ"},"past":{"one":"ቅድሚ {0} ዓ","other":"ቅድሚ {0} ዓ"},"-1":"ዓሚ"},"quarter":{"0":"ህሉው ርብዒ","1":"ዝመጽእ ርብዒ","future":{"one":"ኣብ {0} ርብዒ","other":"ኣብ {0} ርብዒ"},"past":{"one":"ቅድሚ {0} ርብዒ","other":"ቅድሚ {0} ርብዒ"},"-1":"ዝሓለፈ ርብዒ"},"quarter-short":{"0":"ህሉው ርብዒ","1":"ዝመጽእ ርብዒ","future":{"one":"ኣብ {0} ርብዒ","other":"ኣብ {0} ርብዒ"},"past":{"one":"ቅድሚ {0} ርብዒ","other":"ቅድሚ {0} ርብዒ"},"-1":"ዝሓለፈ ርብዒ"},"quarter-narrow":{"0":"ህሉው ርብዒ","1":"ዝመጽእ ርብዒ","future":{"one":"ኣብ {0} ርብዒ","other":"ኣብ {0} ርብዒ"},"past":{"one":"ቅድሚ {0} ርብዒ","other":"ቅድሚ {0} ርብዒ"},"-1":"ዝሓለፈ ርብዒ"},"month":{"0":"ህሉው ወርሒ","1":"ዝመጽእ ወርሒ","future":{"one":"ኣብ {0} ወርሒ","other":"ኣብ {0} ወርሒ"},"past":{"one":"ቅድሚ {0} ወርሒ","other":"ቅድሚ {0} ወርሒ"},"-1":"last month"},"month-short":{"0":"ህሉው ወርሒ","1":"ዝመጽእ ወርሒ","future":{"one":"ኣብ {0} ወርሒ","other":"ኣብ {0} ወርሒ"},"past":{"one":"ቅድሚ {0} ወርሒ","other":"ቅድሚ {0} ወርሒ"},"-1":"last month"},"month-narrow":{"0":"ህሉው ወርሒ","1":"ዝመጽእ ወርሒ","future":{"one":"ኣብ {0} ወርሒ","other":"ኣብ {0} ወርሒ"},"past":{"one":"ቅድሚ {0} ወርሒ","other":"ቅድሚ {0} ወርሒ"},"-1":"last month"},"week":{"0":"ህሉው ሰሙን","1":"ዝመጽእ ሰሙን","future":{"one":"ኣብ {0} ሰሙን","other":"ኣብ {0} ሰሙን"},"past":{"one":"ቅድሚ {0} ሰሙን","other":"ቅድሚ {0} ሰሙን"},"-1":"ዝሓለፈ ሰሙን"},"week-short":{"0":"ህሉው ሰሙን","1":"ዝመጽእ ሰሙን","future":{"one":"ኣብ {0} ሰሙን","other":"ኣብ {0} ሰሙን"},"past":{"one":"ቅድሚ {0} ሰሙን","other":"ቅድሚ {0} ሰሙን"},"-1":"ዝሓለፈ ሰሙን"},"week-narrow":{"0":"ህሉው ሰሙን","1":"ዝመጽእ ሰሙን","future":{"one":"ኣብ {0} ሰሙን","other":"ኣብ {0} ሰሙን"},"past":{"one":"ቅድሚ {0} ሰሙን","other":"ቅድሚ {0} ሰሙን"},"-1":"ዝሓለፈ ሰሙን"},"day":{"0":"ሎሚ","1":"ጽባሕ","future":{"one":"ኣብ {0} መዓልቲ","other":"ኣብ {0} መዓልቲ"},"past":{"one":"ቅድሚ {0} መዓልቲ","other":"ኣብ {0} መዓልቲ"},"-1":"ትማሊ"},"day-short":{"0":"ሎሚ","1":"ጽባሕ","future":{"one":"ኣብ {0} መዓልቲ","other":"ኣብ {0} መዓልቲ"},"past":{"one":"ቅድሚ {0} መዓልቲ","other":"ቅድሚ {0} መዓልቲ"},"-1":"ትማሊ"},"day-narrow":{"0":"ሎሚ","1":"ጽባሕ","future":{"one":"ኣብ {0} መዓልቲ","other":"ኣብ {0} መዓልቲ"},"past":{"one":"ቅድሚ {0} መዓልቲ","other":"ቅድሚ {0} መዓልቲ"},"-1":"ትማሊ"},"hour":{"0":"ኣብዚ ሰዓት","future":{"one":"ኣብ {0} ሰዓት","other":"ኣብ {0} ሰዓት"},"past":{"one":"ቅድሚ {0} ሰዓት","other":"ቅድሚ {0} ሰዓት"}},"hour-short":{"0":"ኣብዚ ሰዓት","future":{"one":"ኣብ {0} ሰዓት","other":"ኣብ {0} ሰዓት"},"past":{"one":"ቅድሚ {0} ሰዓት","other":"ቅድሚ {0} ሰዓት"}},"hour-narrow":{"0":"ኣብዚ ሰዓት","future":{"one":"ኣብ {0} ሰዓት","other":"ኣብ {0} ሰዓት"},"past":{"one":"ቅድሚ {0} ሰዓት","other":"ቅድሚ {0} ሰዓት"}},"minute":{"0":"ኣብዚ ደቒቕ","future":{"one":"ኣብ {0} ደቒቕ","other":"ኣብ {0} ደቒቕ"},"past":{"one":"ቅድሚ {0} ደቒቕ","other":"ቅድሚ {0} ደቒቕ"}},"minute-short":{"0":"ኣብዚ ደቒቕ","future":{"one":"ኣብ {0} ደቒቕ","other":"ኣብ {0} ደቒቕ"},"past":{"one":"ቅድሚ {0} ደቒቕ","other":"ቅድሚ {0} ደቒቕ"}},"minute-narrow":{"0":"ኣብዚ ደቒቕ","future":{"one":"ኣብ {0} ደቒቕ","other":"ኣብ {0} ደቒቕ"},"past":{"one":"ቅድሚ {0} ደቒቕ","other":"ቅድሚ {0} ደቒቕ"}},"second":{"0":"ሕጂ","future":{"one":"ኣብ {0} ካልኢት","other":"ኣብ {0} ካልኢት"},"past":{"one":"ቅድሚ {0} ካልኢት","other":"ቅድሚ {0} ካልኢት"}},"second-short":{"0":"ሕጂ","future":{"one":"ኣብ {0} ካልኢት","other":"ኣብ {0} ካልኢት"},"past":{"one":"ቅድሚ {0} ካልኢት","other":"ቅድሚ {0} ካልኢት"}},"second-narrow":{"0":"ሕጂ","future":{"one":"ኣብ {0} ካልኢት","other":"ኣብ {0} ካልኢት"},"past":{"one":"ቅድሚ {0} ካልኢት","other":"ቅድሚ {0} ካልኢት"}}}},"availableLocales":["ti-ER"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
