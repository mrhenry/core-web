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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sq-MK").length
)) {
// Intl.RelativeTimeFormat.~locale.sq-MK
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"sq-MK":{"nu":["latn"],"year":{"0":"sivjet","1":"mot","future":{"one":"pas {0} viti","other":"pas {0} vjetësh"},"past":{"one":"{0} vit më parë","other":"{0} vjet më parë"},"-1":"vjet"},"year-short":{"0":"këtë vit","1":"vitin e ardhshëm","future":{"one":"pas {0} viti","other":"pas {0} vjetësh"},"past":{"one":"{0} vit më parë","other":"{0} vjet më parë"},"-1":"vitin e kaluar"},"year-narrow":{"0":"këtë vit","1":"vitin e ardhshëm","future":{"one":"pas {0} viti","other":"pas {0} vjetësh"},"past":{"one":"{0} vit më parë","other":"{0} vjet më parë"},"-1":"vitin e kaluar"},"quarter":{"0":"këtë tremujor","1":"tremujorin e ardhshëm","future":{"one":"pas {0} tremujori","other":"pas {0} tremujorësh"},"past":{"one":"{0} tremujor më parë","other":"{0} tremujorë më parë"},"-1":"tremujorin e kaluar"},"quarter-short":{"0":"këtë tremujor","1":"tremujorin e ardhshëm","future":{"one":"pas {0} tremujori","other":"pas {0} tremujorësh"},"past":{"one":"{0} tremujor më parë","other":"{0} tremujorë më parë"},"-1":"tremujorin e kaluar"},"quarter-narrow":{"0":"këtë tremujor","1":"tremujorin e ardhshëm","future":{"one":"pas {0} tremujori","other":"pas {0} tremujorësh"},"past":{"one":"{0} tremujor më parë","other":"{0} tremujorë më parë"},"-1":"tremujorin e kaluar"},"month":{"0":"këtë muaj","1":"muajin e ardhshëm","future":{"one":"pas {0} muaji","other":"pas {0} muajsh"},"past":{"one":"{0} muaj më parë","other":"{0} muaj më parë"},"-1":"muajin e kaluar"},"month-short":{"0":"këtë muaj","1":"muajin e ardhshëm","future":{"one":"pas {0} muaji","other":"pas {0} muajsh"},"past":{"one":"{0} muaj më parë","other":"{0} muaj më parë"},"-1":"muajin e kaluar"},"month-narrow":{"0":"këtë muaj","1":"muajin e ardhshëm","future":{"one":"pas {0} muaji","other":"pas {0} muajsh"},"past":{"one":"{0} muaj më parë","other":"{0} muaj më parë"},"-1":"muajin e kaluar"},"week":{"0":"këtë javë","1":"javën e ardhshme","future":{"one":"pas {0} jave","other":"pas {0} javësh"},"past":{"one":"{0} javë më parë","other":"{0} javë më parë"},"-1":"javën e kaluar"},"week-short":{"0":"këtë javë","1":"javën e ardhshme","future":{"one":"pas {0} jave","other":"pas {0} javësh"},"past":{"one":"{0} javë më parë","other":"{0} javë më parë"},"-1":"javën e kaluar"},"week-narrow":{"0":"këtë javë","1":"javën e ardhshme","future":{"one":"pas {0} jave","other":"pas {0} javësh"},"past":{"one":"{0} javë më parë","other":"{0} javë më parë"},"-1":"javën e kaluar"},"day":{"0":"sot","1":"nesër","future":{"one":"pas {0} dite","other":"pas {0} ditësh"},"past":{"one":"{0} ditë më parë","other":"{0} ditë më parë"},"-1":"dje"},"day-short":{"0":"sot","1":"nesër","future":{"one":"pas {0} dite","other":"pas {0} ditësh"},"past":{"one":"{0} ditë më parë","other":"{0} ditë më parë"},"-1":"dje"},"day-narrow":{"0":"sot","1":"nesër","future":{"one":"pas {0} dite","other":"pas {0} ditësh"},"past":{"one":"{0} ditë më parë","other":"{0} ditë më parë"},"-1":"dje"},"hour":{"0":"këtë orë","future":{"one":"pas {0} ore","other":"pas {0} orësh"},"past":{"one":"{0} orë më parë","other":"{0} orë më parë"}},"hour-short":{"0":"këtë orë","future":{"one":"pas {0} ore","other":"pas {0} orësh"},"past":{"one":"{0} orë më parë","other":"{0} orë më parë"}},"hour-narrow":{"0":"këtë orë","future":{"one":"pas {0} ore","other":"pas {0} orësh"},"past":{"one":"{0} orë më parë","other":"{0} orë më parë"}},"minute":{"0":"këtë minutë","future":{"one":"pas {0} minute","other":"pas {0} minutash"},"past":{"one":"{0} minutë më parë","other":"{0} minuta më parë"}},"minute-short":{"0":"këtë minutë","future":{"one":"pas {0} min","other":"pas {0} min"},"past":{"one":"{0} min më parë","other":"{0} min më parë"}},"minute-narrow":{"0":"këtë minutë","future":{"one":"pas {0} min","other":"pas {0} min"},"past":{"one":"{0} min më parë","other":"{0} min më parë"}},"second":{"0":"tani","future":{"one":"pas {0} sekonde","other":"pas {0} sekondash"},"past":{"one":"{0} sekondë më parë","other":"{0} sekonda më parë"}},"second-short":{"0":"tani","future":{"one":"pas {0} sek","other":"pas {0} sek"},"past":{"one":"{0} sek më parë","other":"{0} sek më parë"}},"second-narrow":{"0":"tani","future":{"one":"pas {0} sek","other":"pas {0} sek"},"past":{"one":"{0} sek më parë","other":"{0} sek më parë"}}}},"availableLocales":["sq-MK"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
