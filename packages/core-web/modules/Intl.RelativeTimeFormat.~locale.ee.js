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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ee").length
)) {
// Intl.RelativeTimeFormat.~locale.ee
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ee":{"nu":["latn"],"year":{"0":"ƒe sia","1":"ƒe si gbɔ na","future":{"one":"le ƒe {0} me","other":"le ƒe {0} me"},"past":{"one":"ƒe {0} si va yi","other":"ƒe {0} si wo va yi"},"-1":"ƒe si va yi"},"year-short":{"0":"ƒe sia","1":"ƒe si gbɔ na","future":{"one":"le ƒe {0} me","other":"le ƒe {0} me"},"past":{"one":"le ƒe {0} si va yi me","other":"le ƒe {0} si va yi me"},"-1":"ƒe si va yi"},"year-narrow":{"0":"ƒe sia","1":"ƒe si gbɔ na","future":{"one":"le ƒe {0} si gbɔna me","other":"le ƒe {0} si gbɔna me"},"past":{"one":"ƒe {0} si va yi me","other":"ƒe {0} si va yi me"},"-1":"ƒe si va yi"},"quarter":{"0":"this quarter","1":"next quarter","future":{"one":"le kɔta {0} si gbɔ na me","other":"le kɔta {0} si gbɔ na me"},"past":{"one":"kɔta {0} si va yi me","other":"kɔta {0} si va yi me"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"one":"le kɔta {0} si gbɔ na me","other":"le kɔta {0} si gbɔ na me"},"past":{"one":"kɔta {0} si va yi me","other":"kɔta {0} si va yi me"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"one":"le kɔta {0} si gbɔna me","other":"le kɔta {0} si gbɔ na me"},"past":{"one":"kɔta {0} si va yi me","other":"kɔta {0} si va yi me"},"-1":"last quarter"},"month":{"0":"ɣleti sia","1":"ɣleti si gbɔ na","future":{"one":"le ɣleti {0} me","other":"le ɣleti {0} wo me"},"past":{"one":"ɣleti {0} si va yi","other":"ɣleti {0} si wo va yi"},"-1":"ɣleti si va yi"},"month-short":{"0":"ɣleti sia","1":"ɣleti si gbɔ na","future":{"one":"le ɣleti {0} me","other":"le ɣleti {0} wo me"},"past":{"one":"ɣleti {0} si va yi","other":"ɣleti {0} si wo va yi"},"-1":"ɣleti si va yi"},"month-narrow":{"0":"ɣleti sia","1":"ɣleti si gbɔ na","future":{"one":"le ɣleti {0} me","other":"le ɣleti {0} wo me"},"past":{"one":"ɣleti {0} si va yi","other":"ɣleti {0} si wo va yi"},"-1":"ɣleti si va yi"},"week":{"0":"kɔsiɖa sia","1":"kɔsiɖa si gbɔ na","future":{"one":"le kɔsiɖa {0} me","other":"le kɔsiɖa {0} wo me"},"past":{"one":"kɔsiɖa {0} si va yi","other":"kɔsiɖa {0} si wo va yi"},"-1":"kɔsiɖa si va yi"},"week-short":{"0":"kɔsiɖa sia","1":"kɔsiɖa si gbɔ na","future":{"one":"le kɔsiɖa {0} me","other":"le kɔsiɖa {0} wo me"},"past":{"one":"kɔsiɖa {0} si va yi","other":"kɔsiɖa {0} si wo va yi"},"-1":"kɔsiɖa si va yi"},"week-narrow":{"0":"kɔsiɖa sia","1":"kɔsiɖa si gbɔ na","future":{"one":"le kɔsiɖa {0} me","other":"le kɔsiɖa {0} wo me"},"past":{"one":"kɔsiɖa {0} si va yi","other":"kɔsiɖa {0} si wo va yi"},"-1":"kɔsiɖa si va yi"},"day":{"0":"egbe","1":"etsɔ si gbɔna","2":"nyitsɔ si gbɔna","future":{"one":"le ŋkeke {0} me","other":"le ŋkeke {0} wo me"},"past":{"one":"ŋkeke {0} si va yi","other":"ŋkeke {0} si wo va yi"},"-2":"nyitsɔ si va yi","-1":"etsɔ si va yi"},"day-short":{"0":"egbe","1":"etsɔ si gbɔna","2":"nyitsɔ si gbɔna","future":{"one":"le ŋkeke {0} me","other":"le ŋkeke {0} wo me"},"past":{"one":"ŋkeke {0} si va yi","other":"ŋkeke {0} si wo va yi"},"-2":"nyitsɔ si va yi","-1":"etsɔ si va yi"},"day-narrow":{"0":"egbe","1":"etsɔ si gbɔna","2":"nyitsɔ si gbɔna","future":{"one":"le ŋkeke {0} me","other":"le ŋkeke {0} wo me"},"past":{"one":"ŋkeke {0} si va yi","other":"ŋkeke {0} si wo va yi"},"-2":"nyitsɔ si va yi","-1":"etsɔ si va yi"},"hour":{"0":"this hour","future":{"one":"le gaƒoƒo {0} me","other":"le gaƒoƒo {0} wo me"},"past":{"one":"gaƒoƒo {0} si va yi","other":"gaƒoƒo {0} si wo va yi"}},"hour-short":{"0":"this hour","future":{"one":"le gaƒoƒo {0} me","other":"le gaƒoƒo {0} wo me"},"past":{"one":"gaƒoƒo {0} si va yi","other":"gaƒoƒo {0} si wo va yi"}},"hour-narrow":{"0":"this hour","future":{"one":"le gaƒoƒo {0} me","other":"le gaƒoƒo {0} wo me"},"past":{"one":"gaƒoƒo {0} si va yi","other":"gaƒoƒo {0} si wo va yi"}},"minute":{"0":"this minute","future":{"one":"le aɖabaƒoƒo {0} me","other":"le aɖabaƒoƒo {0} wo me"},"past":{"one":"aɖabaƒoƒo {0} si va yi","other":"aɖabaƒoƒo {0} si wo va yi"}},"minute-short":{"0":"this minute","future":{"one":"le aɖabaƒoƒo {0} me","other":"le aɖabaƒoƒo {0} wo me"},"past":{"one":"aɖabaƒoƒo {0} si va yi","other":"aɖabaƒoƒo {0} si wo va yi"}},"minute-narrow":{"0":"this minute","future":{"one":"le aɖabaƒoƒo {0} me","other":"le aɖabaƒoƒo {0} wo me"},"past":{"one":"aɖabaƒoƒo {0} si va yi","other":"aɖabaƒoƒo {0} si wo va yi"}},"second":{"0":"fifi","future":{"one":"le sekend {0} me","other":"le sekend {0} wo me"},"past":{"one":"sekend {0} si va yi","other":"sekend {0} si wo va yi"}},"second-short":{"0":"fifi","future":{"one":"le sekend {0} me","other":"le sekend {0} wo me"},"past":{"one":"sekend {0} si va yi","other":"sekend {0} si wo va yi"}},"second-narrow":{"0":"fifi","future":{"one":"le sekend {0} me","other":"le sekend {0} wo me"},"past":{"one":"sekend {0} si va yi","other":"sekend {0} si wo va yi"}}}},"availableLocales":["ee"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
