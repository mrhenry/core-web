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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("wo").length
)) {
// Intl.RelativeTimeFormat.~locale.wo
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ren","1":"dewen","future":{"other":"fileek {0} at"},"past":{"other":"{0} at ci ginaaw"},"-1":"daaw"},"year-short":{"0":"ren","1":"dewen","future":{"other":"fileek {0} at"},"past":{"other":"{0} at ci ginaaw"},"-1":"daaw"},"year-narrow":{"0":"ren","1":"dewen","future":{"other":"fileek {0} at"},"past":{"other":"{0} at ci ginaaw"},"-1":"daaw"},"quarter":{"0":"trimestre bii","1":"trimestre biy ñëw","future":{"other":"fileek {0} trimestre"},"past":{"other":"{0} trimestre ci ginaaw"},"-1":"trimestre bi weesu"},"quarter-short":{"0":"trimestre bii","1":"trimestre biy ñëw","future":{"other":"fileek {0} trim."},"past":{"other":"{0} trim. ci ginaaw"},"-1":"trimestre bi weesu"},"quarter-narrow":{"0":"trimestre bii","1":"trimestre biy ñëw","future":{"other":"fileek {0} trim."},"past":{"other":"{0} trim. ci ginaaw"},"-1":"trimestre bi weesu"},"month":{"0":"weer wii","1":"weer wiy ñëw","future":{"other":"fileek {0} weer"},"past":{"other":"{0} weer ci ginaaw"},"-1":"weer wi weesu"},"month-short":{"0":"we. wii","1":"we. wiy ñëw","future":{"other":"fileek {0} we."},"past":{"other":"{0} we. ci ginaaw"},"-1":"we. wi wees"},"month-narrow":{"0":"we. wii","1":"we. wiy ñëw","future":{"other":"fileek {0} we."},"past":{"other":"{0} we. ci ginaaw"},"-1":"we. wi wees"},"week":{"0":"ayu-bis bii","1":"ayu-bis biy ñëw","future":{"other":"fileek {0} ayi-bis"},"past":{"other":"{0} ayi-bis ci ginaaw"},"-1":"ayu-bis bi weesu"},"week-short":{"0":"ayu-b bii","1":"ayu-b. ñëw","future":{"other":"fileek {0} ayi-b."},"past":{"other":"{0} ayi-b. ci ginaaw"},"-1":"ayu-b bi wees"},"week-narrow":{"0":"ayu-b bii","1":"ayu-b. ñëw","future":{"other":"fileek {0} ayi-b."},"past":{"other":"{0} ayi-b. ci ginaaw"},"-1":"ayu-b bi wees"},"day":{"0":"tay","1":"suba","future":{"other":"fileek {0} fan"},"past":{"other":"{0} fan ci ginaaw"},"-1":"démb"},"day-short":{"0":"tay","1":"suba","future":{"other":"fileek {0} fan"},"past":{"other":"{0} fan ci ginaaw"},"-1":"démb"},"day-narrow":{"0":"tay","1":"suba","future":{"other":"fileek {0} fan"},"past":{"other":"{0} fan ci ginaaw"},"-1":"démb"},"hour":{"0":"ci waxtu wii","future":{"other":"fileek {0} waxtu"},"past":{"other":"{0} waxtu ci ginaaw"}},"hour-short":{"0":"ci waxtu wii","future":{"other":"fileek {0} wax."},"past":{"other":"{0} wax. ci ginaaw"}},"hour-narrow":{"0":"ci waxtu wii","future":{"other":"fileek {0} wax."},"past":{"other":"{0} wax. ci ginaaw"}},"minute":{"0":"ci simili bii","future":{"other":"fileek {0} simili"},"past":{"other":"{0} simili ci ginaaw"}},"minute-short":{"0":"ci simili bii","future":{"other":"fileek {0} sim."},"past":{"other":"{0} sim. ci ginaaw"}},"minute-narrow":{"0":"ci simili bii","future":{"other":"fileek {0} sim."},"past":{"other":"{0} sim. ci ginaaw"}},"second":{"0":"leegi","future":{"other":"fileek {0} saa"},"past":{"other":"{0} saa ci ginaaw"}},"second-short":{"0":"leegi","future":{"other":"fileek {0} saa"},"past":{"other":"{0} saa ci ginaaw"}},"second-narrow":{"0":"leegi","future":{"other":"fileek {0} saa"},"past":{"other":"{0} saa ci ginaaw"}}},"locale":"wo"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
