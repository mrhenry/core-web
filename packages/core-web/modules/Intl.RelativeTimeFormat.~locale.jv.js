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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("jv").length
)) {
// Intl.RelativeTimeFormat.~locale.jv
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"jv":{"nu":["latn"],"year":{"0":"taun iki","1":"taun ngarep","future":{"other":"ing {0} taun"},"past":{"other":"{0} taun kepungkur"},"-1":"taun wingi"},"year-short":{"0":"taun iki","1":"taun ngarep","future":{"other":"ing {0} taun"},"past":{"other":"{0} taun kepungkur"},"-1":"taun wingi"},"year-narrow":{"0":"taun iki","1":"taun ngarep","future":{"other":"ing {0} taun"},"past":{"other":"{0} taun kepungkur"},"-1":"taun wingi"},"quarter":{"0":"triwulan iki","1":"triwulan ngarep","future":{"other":"ing {0} triwulan"},"past":{"other":"{0} triwulan kepungkur"},"-1":"triwulan wingi"},"quarter-short":{"0":"triwulan iki","1":"triwulan ngarep","future":{"other":"ing {0} triwulan"},"past":{"other":"{0} triwulan kepungkur"},"-1":"triwulan wingi"},"quarter-narrow":{"0":"triwulan iki","1":"triwulan ngarep","future":{"other":"ing {0} triwulan"},"past":{"other":"{0} triwulan kepungkur"},"-1":"triwulan wingi"},"month":{"0":"sasi iki","1":"sasi ngarep","future":{"other":"ing {0} sasi"},"past":{"other":"{0} sasi kepungkur"},"-1":"sasi wingi"},"month-short":{"0":"sasi iki","1":"sasi ngarep","future":{"other":"ing {0} sasi"},"past":{"other":"{0} sasi kepungkur"},"-1":"sasi wingi"},"month-narrow":{"0":"sasi iki","1":"sasi ngarep","future":{"other":"ing {0} sasi"},"past":{"other":"{0} sasi kepungkur"},"-1":"sasi wingi"},"week":{"0":"pekan iki","1":"pekan ngarep","future":{"other":"ing {0} pekan"},"past":{"other":"{0} pekan kepungkur"},"-1":"pekan wingi"},"week-short":{"0":"pekan iki","1":"pekan ngarep","future":{"other":"ing {0} pekan"},"past":{"other":"{0} pekan kepungkur"},"-1":"pekan wingi"},"week-narrow":{"0":"pekan iki","1":"pekan ngarep","future":{"other":"ing {0} pekan"},"past":{"other":"{0} pekan kepungkur"},"-1":"pekan wingi"},"day":{"0":"dino iki","1":"sesuk","future":{"other":"ing {0} dina"},"past":{"other":"{0} dina kepungkur"},"-1":"wingi"},"day-short":{"0":"dino iki","1":"sesuk","future":{"other":"ing {0} dina"},"past":{"other":"{0} dina kepungkur"},"-1":"wingi"},"day-narrow":{"0":"dino iki","1":"sesuk","future":{"other":"ing {0} dina"},"past":{"other":"{0} dino kepungkur"},"-1":"wingi"},"hour":{"0":"jam iki","future":{"other":"ing {0} jam"},"past":{"other":"{0} jam kepungkur"}},"hour-short":{"0":"jam iki","future":{"other":"ing {0} jam"},"past":{"other":"{0} jam kepungkur"}},"hour-narrow":{"0":"jam iki","future":{"other":"ing {0} jam"},"past":{"other":"{0} jam kepungkur"}},"minute":{"0":"menit iki","future":{"other":"ing {0} menit"},"past":{"other":"{0} menit kepungkur"}},"minute-short":{"0":"menit iki","future":{"other":"ing {0} menit"},"past":{"other":"{0} menit kepungkur"}},"minute-narrow":{"0":"menit iki","future":{"other":"ing {0} menit"},"past":{"other":"{0} menit kepungkur"}},"second":{"0":"saiki","future":{"other":"ing {0} detik"},"past":{"other":"{0} detik kepungkur"}},"second-short":{"0":"saiki","future":{"other":"ing {0} detik"},"past":{"other":"{0} detik kepungkur"}},"second-narrow":{"0":"saiki","future":{"other":"ing {0} detik"},"past":{"other":"{0} detik kepungkur"}}}},"availableLocales":["jv"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
