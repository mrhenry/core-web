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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("as").length
)) {
// Intl.RelativeTimeFormat.~locale.as
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"as":{"nu":["beng"],"year":{"0":"এই বছৰ","1":"অহা বছৰ","future":{"one":"{0} বছৰত","other":"{0} বছৰত"},"past":{"one":"{0} বছৰৰ পূৰ্বে","other":"{0} বছৰৰ পূৰ্বে"},"-1":"যোৱা বছৰ"},"year-short":{"0":"এই বছৰ","1":"অহা বছৰ","future":{"one":"{0} বছৰত","other":"{0} বছৰত"},"past":{"one":"{0} বছৰৰ পূৰ্বে","other":"{0} বছৰৰ পূৰ্বে"},"-1":"যোৱা বছৰ"},"year-narrow":{"0":"এই বছৰ","1":"অহা বছৰ","future":{"one":"{0} বছৰত","other":"{0} বছৰত"},"past":{"one":"{0} বছৰৰ পূৰ্বে","other":"{0} বছৰৰ পূৰ্বে"},"-1":"যোৱা বছৰ"},"quarter":{"0":"এই তিনি মাহ","1":"অহা তিনি মাহ","future":{"one":"{0} তিনি মাহত","other":"{0} তিনি মাহত"},"past":{"one":"{0} তিনি মাহ পূৰ্বে","other":"{0} তিনি মাহ পূৰ্বে"},"-1":"যোৱা তিনি মাহ"},"quarter-short":{"0":"এই তিনি মাহ","1":"অহা তিনি মাহ","future":{"one":"{0} তিনি মাহত","other":"{0} তিনি মাহত"},"past":{"one":"{0} তিনি মাহ পূৰ্বে","other":"{0} তিনি মাহ পূৰ্বে"},"-1":"যোৱা তিনি মাহ"},"quarter-narrow":{"0":"এই তিনি মাহ","1":"অহা তিনি মাহ","future":{"one":"{0} তিনি মাহত","other":"{0} তিনি মাহত"},"past":{"one":"{0} তিনি মাহ পূৰ্বে","other":"{0} তিনি মাহ পূৰ্বে"},"-1":"যোৱা তিনি মাহ"},"month":{"0":"এই মাহ","1":"অহা মাহ","future":{"one":"{0} মাহত","other":"{0} মাহত"},"past":{"one":"{0} মাহ পূৰ্বে","other":"{0} মাহ পূৰ্বে"},"-1":"যোৱা মাহ"},"month-short":{"0":"এই মাহ","1":"অহা মাহ","future":{"one":"{0} মাহত","other":"{0} মাহত"},"past":{"one":"{0} মাহ পূৰ্বে","other":"{0} মাহ পূৰ্বে"},"-1":"যোৱা মাহ"},"month-narrow":{"0":"এই মা.","1":"অহা মাহ","future":{"one":"{0} মাহত","other":"{0} মাহত"},"past":{"one":"{0} মাহ পূৰ্বে","other":"{0} মাহ পূৰ্বে"},"-1":"যোৱা মা."},"week":{"0":"এই সপ্তাহ","1":"অহা সপ্তাহ","future":{"one":"{0} সপ্তাহত","other":"{0} সপ্তাহত"},"past":{"one":"{0} সপ্তাহ পূৰ্বে","other":"{0} সপ্তাহ পূৰ্বে"},"-1":"যোৱা সপ্তাহ"},"week-short":{"0":"এই সপ্তাহ","1":"অহা সপ্তাহ","future":{"one":"{0} সপ্তাহত","other":"{0} সপ্তাহত"},"past":{"one":"{0} সপ্তাহ পূৰ্বে","other":"{0} সপ্তাহ পূৰ্বে"},"-1":"যোৱা সপ্তাহ"},"week-narrow":{"0":"এই সপ্তাহ","1":"অহা সপ্তাহ","future":{"one":"{0} সপ্তাহত","other":"{0} সপ্তাহত"},"past":{"one":"{0} সপ্তাহ পূৰ্বে","other":"{0} সপ্তাহ পূৰ্বে"},"-1":"যোৱা সপ্তাহ"},"day":{"0":"আজি","1":"কাইলৈ","2":"পৰহিলৈ","future":{"one":"{0} দিনত","other":"{0} দিনত"},"past":{"one":"{0} দিন পূৰ্বে","other":"{0} দিন পূৰ্বে"},"-2":"পৰহি","-1":"কালি"},"day-short":{"0":"আজি","1":"কাইলৈ","2":"পৰহিলৈ","future":{"one":"{0} দিনত","other":"{0} দিনত"},"past":{"one":"{0} দিন পূৰ্বে","other":"{0} দিন পূৰ্বে"},"-2":"পৰহি","-1":"কালি"},"day-narrow":{"0":"আজি","1":"কাইলৈ","2":"পৰহিলৈ","future":{"one":"{0} দিনত","other":"{0} দিনত"},"past":{"one":"{0} দিন পূৰ্বে","other":"{0} দিন পূৰ্বে"},"-2":"পৰহি","-1":"কালি"},"hour":{"0":"এইটো ঘণ্টাত","future":{"one":"{0} ঘণ্টাত","other":"{0} ঘণ্টাত"},"past":{"one":"{0} ঘণ্টা পূৰ্বে","other":"{0} ঘণ্টা পূৰ্বে"}},"hour-short":{"0":"এইটো ঘণ্টাত","future":{"one":"{0} ঘণ্টাত","other":"{0} ঘণ্টাত"},"past":{"one":"{0} ঘণ্টা পূৰ্বে","other":"{0} ঘণ্টা পূৰ্বে"}},"hour-narrow":{"0":"এইটো ঘণ্টাত","future":{"one":"{0} ঘণ্টাত","other":"{0} ঘণ্টাত"},"past":{"one":"{0} ঘণ্টা পূৰ্বে","other":"{0} ঘণ্টা পূৰ্বে"}},"minute":{"0":"এইটো মিনিটত","future":{"one":"{0} মিনিটত","other":"{0} মিনিটত"},"past":{"one":"{0} মিনিট পূৰ্বে","other":"{0} মিনিট পূৰ্বে"}},"minute-short":{"0":"এইটো মিনিটত","future":{"one":"{0} মিনিটত","other":"{0} মিনিটত"},"past":{"one":"{0} মিনিট পূৰ্বে","other":"{0} মিনিট পূৰ্বে"}},"minute-narrow":{"0":"এইটো মিনিটত","future":{"one":"{0} মিনিটত","other":"{0} মিনিটত"},"past":{"one":"{0} মিনিট পূৰ্বে","other":"{0} মিনিট পূৰ্বে"}},"second":{"0":"এতিয়া","future":{"one":"{0} ছেকেণ্ডত","other":"{0} ছেকেণ্ডত"},"past":{"one":"{0} ছেকেণ্ড পূৰ্বে","other":"{0} ছেকেণ্ড পূৰ্বে"}},"second-short":{"0":"এতিয়া","future":{"one":"{0} ছেকেণ্ডত","other":"{0} ছেকেণ্ডত"},"past":{"one":"{0} ছেকেণ্ড পূৰ্বে","other":"{0} ছেকেণ্ড পূৰ্বে"}},"second-narrow":{"0":"এতিয়া","future":{"one":"{0} ছেকেণ্ডত","other":"{0} ছেকেণ্ডত"},"past":{"one":"{0} ছেকেণ্ড পূৰ্বে","other":"{0} ছেকেণ্ড পূৰ্বে"}}}},"availableLocales":["as"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
