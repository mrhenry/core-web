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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("pcm").length
)) {
// Intl.RelativeTimeFormat.~locale.pcm
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"Dís yiẹ","1":"Nẹ́st yiẹ","future":{"one":"fọ {0} yiẹ wé de kọm","other":"fọ {0} yiẹ wé de kọm"},"past":{"one":"{0} yiẹ wé dọ́n pas","other":"{0} yiẹ wé dọ́n pas"},"-1":"Lást yiẹ"},"year-short":{"0":"Dís yiẹ","1":"Nẹ́st yiẹ","future":{"one":"fọ {0} yiẹ wé de kọm","other":"fọ {0} yiẹ wé de kọm"},"past":{"one":"{0} yiẹ wé dọ́n pas","other":"{0} yiẹ wé dọ́n pas"},"-1":"Lást yiẹ"},"year-narrow":{"0":"Dís yiẹ","1":"Nẹ́st yiẹ","future":{"one":"fọ {0} yiẹ wé de kọm","other":"fọ {0} yiẹ wé de kọm"},"past":{"one":"{0} yiẹ wé dọ́n pas","other":"{0} yiẹ wé dọ́n pas"},"-1":"Lást yiẹ"},"quarter":{"0":"Dís kwọ́ta","1":"Nẹ́st kwọ́ta","future":{"one":"fọ {0} kwọ́ta wé de kọm","other":"fọ {0} kwọ́ta wé de kọm"},"past":{"one":"{0} kwọ́ta wé dọ́n pas","other":"{0} kwọ́ta wé dọ́n pas"},"-1":"Lást kwọ́ta"},"quarter-short":{"0":"Dís kwọ́ta","1":"Nẹ́st kwọ́ta","future":{"one":"fọ {0} kwọ́ta wé de kọm","other":"fọ {0} kwọ́ta wé de kọm"},"past":{"one":"{0} kwọ́ta wé dọ́n pas","other":"{0} kwọ́ta wé dọ́n pas"},"-1":"Lást kwọ́ta"},"quarter-narrow":{"0":"Dís kwọ́ta","1":"Nẹ́st kwọ́ta","future":{"one":"fọ {0} kwọ́ta wé de kọm","other":"fọ {0} kwọ́ta wé de kọm"},"past":{"one":"{0} kwọ́ta wé dọ́n pas","other":"{0} kwọ́ta wé dọ́n pas"},"-1":"Lást kwọ́ta"},"month":{"0":"Dís mọnt","1":"Nẹ́st mọnt","future":{"one":"Fọ {0}mọnt wé de kọm","other":"Fọ {0}mọnt wé de kọm"},"past":{"one":"{0} mọnt wé dọ́n pas","other":"{0} mọnt wé dọ́n pas"},"-1":"Lást mọnt"},"month-short":{"0":"Dís mọnt","1":"Nẹ́st mọnt","future":{"one":"Fọ {0}mọnt wé de kọm","other":"Fọ {0}mọnt wé de kọm"},"past":{"one":"{0} mọnt wé dọ́n pas","other":"{0} mọnt wé dọ́n pas"},"-1":"Lást mọnt"},"month-narrow":{"0":"Dís mọnt","1":"Nẹ́st mọnt","future":{"one":"Fọ {0}mọnt wé de kọm","other":"Fọ {0}mọnt wé de kọm"},"past":{"one":"{0} mọnt wé dọ́n pas","other":"{0} mọnt wé dọ́n pas"},"-1":"Lást mọnt"},"week":{"0":"Dís wik","1":"Nẹ́st wik","future":{"one":"Fọ {0}wik wé de kọm","other":"Fọ {0}wik wé de kọm"},"past":{"one":"{0} wik wé dọ́n pas","other":"{0} wik wé dọ́n pas"},"-1":"Lást wik"},"week-short":{"0":"Dís wik","1":"Nẹ́st wik","future":{"one":"Fọ {0}wik wé de kọm","other":"Fọ {0}wik wé de kọm"},"past":{"one":"{0} wik wé dọ́n pas","other":"{0} wik wé dọ́n pas"},"-1":"Lást wik"},"week-narrow":{"0":"Dís wik","1":"Nẹ́st wik","future":{"one":"Fọ {0}wik wé de kọm","other":"Fọ {0}wik wé de kọm"},"past":{"one":"{0} wik wé dọ́n pas","other":"{0} wik wé dọ́n pas"},"-1":"Lást wik"},"day":{"0":"Todè","1":"Tumọ́ro","future":{"one":"Fọ {0}dè wé de kọm","other":"Fọ {0}dè wé de kọm"},"past":{"one":"{0} dè wé dọ́n pas","other":"{0} dè wé dọ́n pas"},"-1":"Yẹ́stadè"},"day-short":{"0":"Todè","1":"Tumọ́ro","future":{"one":"Fọ {0}dè wé de kọm","other":"Fọ {0}dè wé de kọm"},"past":{"one":"{0} dè wé dọ́n pas","other":"{0} dè wé dọ́n pas"},"-1":"Yẹ́stadè"},"day-narrow":{"0":"Todè","1":"Tumọ́ro","future":{"one":"Fọ {0}dè wé de kọm","other":"Fọ {0}dè wé de kọm"},"past":{"one":"{0} dè wé dọ́n pas","other":"{0} dè wé dọ́n pas"},"-1":"Yẹ́stadè"},"hour":{"0":"Dís áwa","future":{"one":"Fọ {0} áwa wé de kọm","other":"Fọ {0} áwa wé de kọm"},"past":{"one":"{0} áwa wé dọ́n pas","other":"{0} áwa wé dọ́n pas"}},"hour-short":{"0":"Dís áwa","future":{"one":"Fọ {0} áwa wé de kọm","other":"Fọ {0} áwa wé de kọm"},"past":{"one":"{0} áwa wé dọ́n pas","other":"{0} áwa wé dọ́n pas"}},"hour-narrow":{"0":"Dís áwa","future":{"one":"Fọ {0} áwa wé de kọm","other":"Fọ {0} áwa wé de kọm"},"past":{"one":"Fọ {0} áwa wé de kọm","other":"Fọ {0} áwa wé de kọm"}},"minute":{"0":"Dís mínit","future":{"one":"Fọ {0} mínit wé de kọm","other":"Fọ {0} mínit wé de kọm"},"past":{"one":"{0} mínit wé dọ́n pas","other":"{0} mínit wé dọ́n pas"}},"minute-short":{"0":"Dís mínit","future":{"one":"Fọ {0} mínit wé de kọm","other":"Fọ {0} mínit wé de kọm"},"past":{"one":"{0} mínit wé dọ́n pas","other":"{0} mínit wé dọ́n pas"}},"minute-narrow":{"0":"Dís mínit","future":{"one":"Fọ {0} mínit wé de kọm","other":"Fọ {0} mínit wé de kọm"},"past":{"one":"{0} mínit wé dọ́n pas","other":"{0} mínit wé dọ́n pas"}},"second":{"0":"nau","future":{"one":"Fọ {0} Sẹ́kọn","other":"Fọ {0} Sẹ́kọn"},"past":{"one":"{0} sẹ́kọn wé dọ́n pas","other":"{0} sẹ́kọn wé dọ́n pas"}},"second-short":{"0":"nau","future":{"one":"Fọ {0} Sẹ́kọn","other":"Fọ {0} Sẹ́kọn"},"past":{"one":"{0} sẹ́kọn wé dọ́n pas","other":"{0} sẹ́kọn wé dọ́n pas"}},"second-narrow":{"0":"nau","future":{"one":"Fọ {0} Sẹ́kọn","other":"Fọ {0} Sẹ́kọn"},"past":{"one":"{0} sẹ́kọn wé dọ́n pas","other":"{0} sẹ́kọn wé dọ́n pas"}}},"locale":"pcm"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
