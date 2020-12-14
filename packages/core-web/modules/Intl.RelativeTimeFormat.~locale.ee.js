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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ee").length
)) {
// Intl.RelativeTimeFormat.~locale.ee
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ƒe sia","1":"ƒe si gbɔ na","future":{"one":"le ƒe {0} me","other":"le ƒe {0} me"},"past":{"one":"ƒe {0} si va yi","other":"ƒe {0} si wo va yi"},"-1":"ƒe si va yi"},"year-short":{"0":"ƒe sia","1":"ƒe si gbɔ na","future":{"one":"le ƒe {0} me","other":"le ƒe {0} me"},"past":{"one":"le ƒe {0} si va yi me","other":"le ƒe {0} si va yi me"},"-1":"ƒe si va yi"},"year-narrow":{"0":"ƒe sia","1":"ƒe si gbɔ na","future":{"one":"le ƒe {0} si gbɔna me","other":"le ƒe {0} si gbɔna me"},"past":{"one":"ƒe {0} si va yi me","other":"ƒe {0} si va yi me"},"-1":"ƒe si va yi"},"quarter":{"0":"this quarter","1":"next quarter","future":{"one":"le kɔta {0} si gbɔ na me","other":"le kɔta {0} si gbɔ na me"},"past":{"one":"kɔta {0} si va yi me","other":"kɔta {0} si va yi me"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"one":"le kɔta {0} si gbɔ na me","other":"le kɔta {0} si gbɔ na me"},"past":{"one":"kɔta {0} si va yi me","other":"kɔta {0} si va yi me"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"one":"le kɔta {0} si gbɔna me","other":"le kɔta {0} si gbɔ na me"},"past":{"one":"kɔta {0} si va yi me","other":"kɔta {0} si va yi me"},"-1":"last quarter"},"month":{"0":"ɣleti sia","1":"ɣleti si gbɔ na","future":{"one":"le ɣleti {0} me","other":"le ɣleti {0} wo me"},"past":{"one":"ɣleti {0} si va yi","other":"ɣleti {0} si wo va yi"},"-1":"ɣleti si va yi"},"month-short":{"0":"ɣleti sia","1":"ɣleti si gbɔ na","future":{"one":"le ɣleti {0} me","other":"le ɣleti {0} wo me"},"past":{"one":"ɣleti {0} si va yi","other":"ɣleti {0} si wo va yi"},"-1":"ɣleti si va yi"},"month-narrow":{"0":"ɣleti sia","1":"ɣleti si gbɔ na","future":{"one":"le ɣleti {0} me","other":"le ɣleti {0} wo me"},"past":{"one":"ɣleti {0} si va yi","other":"ɣleti {0} si wo va yi"},"-1":"ɣleti si va yi"},"week":{"0":"kɔsiɖa sia","1":"kɔsiɖa si gbɔ na","future":{"one":"le kɔsiɖa {0} me","other":"le kɔsiɖa {0} wo me"},"past":{"one":"kɔsiɖa {0} si va yi","other":"kɔsiɖa {0} si wo va yi"},"-1":"kɔsiɖa si va yi"},"week-short":{"0":"kɔsiɖa sia","1":"kɔsiɖa si gbɔ na","future":{"one":"le kɔsiɖa {0} me","other":"le kɔsiɖa {0} wo me"},"past":{"one":"kɔsiɖa {0} si va yi","other":"kɔsiɖa {0} si wo va yi"},"-1":"kɔsiɖa si va yi"},"week-narrow":{"0":"kɔsiɖa sia","1":"kɔsiɖa si gbɔ na","future":{"one":"le kɔsiɖa {0} me","other":"le kɔsiɖa {0} wo me"},"past":{"one":"kɔsiɖa {0} si va yi","other":"kɔsiɖa {0} si wo va yi"},"-1":"kɔsiɖa si va yi"},"day":{"0":"egbe","1":"etsɔ si gbɔna","2":"nyitsɔ si gbɔna","future":{"one":"le ŋkeke {0} me","other":"le ŋkeke {0} wo me"},"past":{"one":"ŋkeke {0} si va yi","other":"ŋkeke {0} si wo va yi"},"-2":"nyitsɔ si va yi","-1":"etsɔ si va yi"},"day-short":{"0":"egbe","1":"etsɔ si gbɔna","2":"nyitsɔ si gbɔna","future":{"one":"le ŋkeke {0} me","other":"le ŋkeke {0} wo me"},"past":{"one":"ŋkeke {0} si va yi","other":"ŋkeke {0} si wo va yi"},"-2":"nyitsɔ si va yi","-1":"etsɔ si va yi"},"day-narrow":{"0":"egbe","1":"etsɔ si gbɔna","2":"nyitsɔ si gbɔna","future":{"one":"le ŋkeke {0} me","other":"le ŋkeke {0} wo me"},"past":{"one":"ŋkeke {0} si va yi","other":"ŋkeke {0} si wo va yi"},"-2":"nyitsɔ si va yi","-1":"etsɔ si va yi"},"hour":{"0":"this hour","future":{"one":"le gaƒoƒo {0} me","other":"le gaƒoƒo {0} wo me"},"past":{"one":"gaƒoƒo {0} si va yi","other":"gaƒoƒo {0} si wo va yi"}},"hour-short":{"0":"this hour","future":{"one":"le gaƒoƒo {0} me","other":"le gaƒoƒo {0} wo me"},"past":{"one":"gaƒoƒo {0} si va yi","other":"gaƒoƒo {0} si wo va yi"}},"hour-narrow":{"0":"this hour","future":{"one":"le gaƒoƒo {0} me","other":"le gaƒoƒo {0} wo me"},"past":{"one":"gaƒoƒo {0} si va yi","other":"gaƒoƒo {0} si wo va yi"}},"minute":{"0":"this minute","future":{"one":"le aɖabaƒoƒo {0} me","other":"le aɖabaƒoƒo {0} wo me"},"past":{"one":"aɖabaƒoƒo {0} si va yi","other":"aɖabaƒoƒo {0} si wo va yi"}},"minute-short":{"0":"this minute","future":{"one":"le aɖabaƒoƒo {0} me","other":"le aɖabaƒoƒo {0} wo me"},"past":{"one":"aɖabaƒoƒo {0} si va yi","other":"aɖabaƒoƒo {0} si wo va yi"}},"minute-narrow":{"0":"this minute","future":{"one":"le aɖabaƒoƒo {0} me","other":"le aɖabaƒoƒo {0} wo me"},"past":{"one":"aɖabaƒoƒo {0} si va yi","other":"aɖabaƒoƒo {0} si wo va yi"}},"second":{"0":"fifi","future":{"one":"le sekend {0} me","other":"le sekend {0} wo me"},"past":{"one":"sekend {0} si va yi","other":"sekend {0} si wo va yi"}},"second-short":{"0":"fifi","future":{"one":"le sekend {0} me","other":"le sekend {0} wo me"},"past":{"one":"sekend {0} si va yi","other":"sekend {0} si wo va yi"}},"second-narrow":{"0":"fifi","future":{"one":"le sekend {0} me","other":"le sekend {0} wo me"},"past":{"one":"sekend {0} si va yi","other":"sekend {0} si wo va yi"}}},"locale":"ee"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
