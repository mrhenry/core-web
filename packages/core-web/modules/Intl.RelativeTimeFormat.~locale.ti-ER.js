import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ti-ER").length
)) {
// Intl.RelativeTimeFormat.~locale.ti-ER
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ሎሚ ዓመት","1":"ንዓመታ","future":{"one":"ኣብ {0} ዓ","other":"ኣብ {0} ዓ"},"past":{"one":"ቅድሚ {0} ዓ","other":"ቅድሚ {0} ዓ"},"-1":"ዓሚ"},"year-short":{"0":"ሎሚ ዓመት","1":"ንዓመታ","future":{"one":"ኣብ {0} ዓ","other":"ኣብ {0} ዓ"},"past":{"one":"ቅድሚ -{0} ዓ","other":"ቅድሚ {0} ዓ"},"-1":"ዓሚ"},"year-narrow":{"0":"ሎሚ ዓመት","1":"ንዓመታ","future":{"one":"ኣብ {0} ዓ","other":"ኣብ {0} ዓ"},"past":{"one":"ቅድሚ {0} ዓ","other":"ቅድሚ {0} ዓ"},"-1":"ዓሚ"},"quarter":{"0":"ህሉው ርብዒ","1":"ዝመጽእ ርብዒ","future":{"one":"ኣብ {0} ርብዒ","other":"ኣብ {0} ርብዒ"},"past":{"one":"ቅድሚ {0} ርብዒ","other":"ቅድሚ {0} ርብዒ"},"-1":"ዝሓለፈ ርብዒ"},"quarter-short":{"0":"ህሉው ርብዒ","1":"ዝመጽእ ርብዒ","future":{"one":"ኣብ {0} ርብዒ","other":"ኣብ {0} ርብዒ"},"past":{"one":"ቅድሚ {0} ርብዒ","other":"ቅድሚ {0} ርብዒ"},"-1":"ዝሓለፈ ርብዒ"},"quarter-narrow":{"0":"ህሉው ርብዒ","1":"ዝመጽእ ርብዒ","future":{"one":"ኣብ {0} ርብዒ","other":"ኣብ {0} ርብዒ"},"past":{"one":"ቅድሚ {0} ርብዒ","other":"ቅድሚ {0} ርብዒ"},"-1":"ዝሓለፈ ርብዒ"},"month":{"0":"ህሉው ወርሒ","1":"ዝመጽእ ወርሒ","future":{"one":"ኣብ {0} ወርሒ","other":"ኣብ {0} ወርሒ"},"past":{"one":"ቅድሚ {0} ወርሒ","other":"ቅድሚ {0} ወርሒ"},"-1":"last month"},"month-short":{"0":"ህሉው ወርሒ","1":"ዝመጽእ ወርሒ","future":{"one":"ኣብ {0} ወርሒ","other":"ኣብ {0} ወርሒ"},"past":{"one":"ቅድሚ {0} ወርሒ","other":"ቅድሚ {0} ወርሒ"},"-1":"last month"},"month-narrow":{"0":"ህሉው ወርሒ","1":"ዝመጽእ ወርሒ","future":{"one":"ኣብ {0} ወርሒ","other":"ኣብ {0} ወርሒ"},"past":{"one":"ቅድሚ {0} ወርሒ","other":"ቅድሚ {0} ወርሒ"},"-1":"last month"},"week":{"0":"ህሉው ሰሙን","1":"ዝመጽእ ሰሙን","future":{"one":"ኣብ {0} ሰሙን","other":"ኣብ {0} ሰሙን"},"past":{"one":"ቅድሚ {0} ሰሙን","other":"ቅድሚ {0} ሰሙን"},"-1":"ዝሓለፈ ሰሙን"},"week-short":{"0":"ህሉው ሰሙን","1":"ዝመጽእ ሰሙን","future":{"one":"ኣብ {0} ሰሙን","other":"ኣብ {0} ሰሙን"},"past":{"one":"ቅድሚ {0} ሰሙን","other":"ቅድሚ {0} ሰሙን"},"-1":"ዝሓለፈ ሰሙን"},"week-narrow":{"0":"ህሉው ሰሙን","1":"ዝመጽእ ሰሙን","future":{"one":"ኣብ {0} ሰሙን","other":"ኣብ {0} ሰሙን"},"past":{"one":"ቅድሚ {0} ሰሙን","other":"ቅድሚ {0} ሰሙን"},"-1":"ዝሓለፈ ሰሙን"},"day":{"0":"ሎሚ","1":"ጽባሕ","future":{"one":"ኣብ {0} መዓልቲ","other":"ኣብ {0} መዓልቲ"},"past":{"one":"ቅድሚ {0} መዓልቲ","other":"ኣብ {0} መዓልቲ"},"-1":"ትማሊ"},"day-short":{"0":"ሎሚ","1":"ጽባሕ","future":{"one":"ኣብ {0} መዓልቲ","other":"ኣብ {0} መዓልቲ"},"past":{"one":"ቅድሚ {0} መዓልቲ","other":"ቅድሚ {0} መዓልቲ"},"-1":"ትማሊ"},"day-narrow":{"0":"ሎሚ","1":"ጽባሕ","future":{"one":"ኣብ {0} መዓልቲ","other":"ኣብ {0} መዓልቲ"},"past":{"one":"ቅድሚ {0} መዓልቲ","other":"ቅድሚ {0} መዓልቲ"},"-1":"ትማሊ"},"hour":{"0":"ኣብዚ ሰዓት","future":{"one":"ኣብ {0} ሰዓት","other":"ኣብ {0} ሰዓት"},"past":{"one":"ቅድሚ {0} ሰዓት","other":"ቅድሚ {0} ሰዓት"}},"hour-short":{"0":"ኣብዚ ሰዓት","future":{"one":"ኣብ {0} ሰዓት","other":"ኣብ {0} ሰዓት"},"past":{"one":"ቅድሚ {0} ሰዓት","other":"ቅድሚ {0} ሰዓት"}},"hour-narrow":{"0":"ኣብዚ ሰዓት","future":{"one":"ኣብ {0} ሰዓት","other":"ኣብ {0} ሰዓት"},"past":{"one":"ቅድሚ {0} ሰዓት","other":"ቅድሚ {0} ሰዓት"}},"minute":{"0":"ኣብዚ ደቒቕ","future":{"one":"ኣብ {0} ደቒቕ","other":"ኣብ {0} ደቒቕ"},"past":{"one":"ቅድሚ {0} ደቒቕ","other":"ቅድሚ {0} ደቒቕ"}},"minute-short":{"0":"ኣብዚ ደቒቕ","future":{"one":"ኣብ {0} ደቒቕ","other":"ኣብ {0} ደቒቕ"},"past":{"one":"ቅድሚ {0} ደቒቕ","other":"ቅድሚ {0} ደቒቕ"}},"minute-narrow":{"0":"ኣብዚ ደቒቕ","future":{"one":"ኣብ {0} ደቒቕ","other":"ኣብ {0} ደቒቕ"},"past":{"one":"ቅድሚ {0} ደቒቕ","other":"ቅድሚ {0} ደቒቕ"}},"second":{"0":"ሕጂ","future":{"one":"ኣብ {0} ካልኢት","other":"ኣብ {0} ካልኢት"},"past":{"one":"ቅድሚ {0} ካልኢት","other":"ቅድሚ {0} ካልኢት"}},"second-short":{"0":"ሕጂ","future":{"one":"ኣብ {0} ካልኢት","other":"ኣብ {0} ካልኢት"},"past":{"one":"ቅድሚ {0} ካልኢት","other":"ቅድሚ {0} ካልኢት"}},"second-narrow":{"0":"ሕጂ","future":{"one":"ኣብ {0} ካልኢት","other":"ኣብ {0} ካልኢት"},"past":{"one":"ቅድሚ {0} ካልኢት","other":"ቅድሚ {0} ካልኢት"}}},"locale":"ti-ER"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
