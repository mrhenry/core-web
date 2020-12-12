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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("jv").length
)) {
// Intl.RelativeTimeFormat.~locale.jv
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"taun iki","1":"taun ngarep","future":{"other":"ing {0} taun"},"past":{"other":"{0} taun kepungkur"},"-1":"taun wingi"},"year-short":{"0":"taun iki","1":"taun ngarep","future":{"other":"ing {0} taun"},"past":{"other":"{0} taun kepungkur"},"-1":"taun wingi"},"year-narrow":{"0":"taun iki","1":"taun ngarep","future":{"other":"ing {0} taun"},"past":{"other":"{0} taun kepungkur"},"-1":"taun wingi"},"quarter":{"0":"triwulan iki","1":"triwulan ngarep","future":{"other":"ing {0} triwulan"},"past":{"other":"{0} triwulan kepungkur"},"-1":"triwulan wingi"},"quarter-short":{"0":"triwulan iki","1":"triwulan ngarep","future":{"other":"ing {0} triwulan"},"past":{"other":"{0} triwulan kepungkur"},"-1":"triwulan wingi"},"quarter-narrow":{"0":"triwulan iki","1":"triwulan ngarep","future":{"other":"ing {0} triwulan"},"past":{"other":"{0} triwulan kepungkur"},"-1":"triwulan wingi"},"month":{"0":"sasi iki","1":"sasi ngarep","future":{"other":"ing {0} sasi"},"past":{"other":"{0} sasi kepungkur"},"-1":"sasi wingi"},"month-short":{"0":"sasi iki","1":"sasi ngarep","future":{"other":"ing {0} sasi"},"past":{"other":"{0} sasi kepungkur"},"-1":"sasi wingi"},"month-narrow":{"0":"sasi iki","1":"sasi ngarep","future":{"other":"ing {0} sasi"},"past":{"other":"{0} sasi kepungkur"},"-1":"sasi wingi"},"week":{"0":"pekan iki","1":"pekan ngarep","future":{"other":"ing {0} pekan"},"past":{"other":"{0} pekan kepungkur"},"-1":"pekan wingi"},"week-short":{"0":"pekan iki","1":"pekan ngarep","future":{"other":"ing {0} pekan"},"past":{"other":"{0} pekan kepungkur"},"-1":"pekan wingi"},"week-narrow":{"0":"pekan iki","1":"pekan ngarep","future":{"other":"ing {0} pekan"},"past":{"other":"{0} pekan kepungkur"},"-1":"pekan wingi"},"day":{"0":"dino iki","1":"sesuk","future":{"other":"ing {0} dina"},"past":{"other":"{0} dina kepungkur"},"-1":"wingi"},"day-short":{"0":"dino iki","1":"sesuk","future":{"other":"ing {0} dina"},"past":{"other":"{0} dina kepungkur"},"-1":"wingi"},"day-narrow":{"0":"dino iki","1":"sesuk","future":{"other":"ing {0} dina"},"past":{"other":"{0} dino kepungkur"},"-1":"wingi"},"hour":{"0":"jam iki","future":{"other":"ing {0} jam"},"past":{"other":"{0} jam kepungkur"}},"hour-short":{"0":"jam iki","future":{"other":"ing {0} jam"},"past":{"other":"{0} jam kepungkur"}},"hour-narrow":{"0":"jam iki","future":{"other":"ing {0} jam"},"past":{"other":"{0} jam kepungkur"}},"minute":{"0":"menit iki","future":{"other":"ing {0} menit"},"past":{"other":"{0} menit kepungkur"}},"minute-short":{"0":"menit iki","future":{"other":"ing {0} menit"},"past":{"other":"{0} menit kepungkur"}},"minute-narrow":{"0":"menit iki","future":{"other":"ing {0} menit"},"past":{"other":"{0} menit kepungkur"}},"second":{"0":"saiki","future":{"other":"ing {0} detik"},"past":{"other":"{0} detik kepungkur"}},"second-short":{"0":"saiki","future":{"other":"ing {0} detik"},"past":{"other":"{0} detik kepungkur"}},"second-narrow":{"0":"saiki","future":{"other":"ing {0} detik"},"past":{"other":"{0} detik kepungkur"}}},"locale":"jv"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
