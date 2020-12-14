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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("hi").length
)) {
// Intl.RelativeTimeFormat.~locale.hi
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"इस वर्ष","1":"अगला वर्ष","future":{"one":"{0} वर्ष में","other":"{0} वर्ष में"},"past":{"one":"{0} वर्ष पहले","other":"{0} वर्ष पहले"},"-1":"पिछला वर्ष"},"year-short":{"0":"इस वर्ष","1":"अगला वर्ष","future":{"one":"{0} वर्ष में","other":"{0} वर्ष में"},"past":{"one":"{0} वर्ष पहले","other":"{0} वर्ष पहले"},"-1":"पिछला वर्ष"},"year-narrow":{"0":"इस साल","1":"अगले साल","future":{"one":"{0} वर्ष में","other":"{0} वर्ष में"},"past":{"one":"{0} वर्ष पहले","other":"{0} वर्ष पहले"},"-1":"पिछले साल"},"quarter":{"0":"इस तिमाही","1":"अगली तिमाही","future":{"one":"{0} तिमाही में","other":"{0} तिमाहियों में"},"past":{"one":"{0} तिमाही पहले","other":"{0} तिमाही पहले"},"-1":"अंतिम तिमाही"},"quarter-short":{"0":"इस तिमाही","1":"अगली तिमाही","future":{"one":"{0} तिमाही में","other":"{0} तिमाहियों में"},"past":{"one":"{0} तिमाही पहले","other":"{0} तिमाहियों पहले"},"-1":"अंतिम तिमाही"},"quarter-narrow":{"0":"इस तिमाही","1":"अगली तिमाही","future":{"one":"{0} ति॰ में","other":"{0} ति॰ में"},"past":{"one":"{0} ति॰ पहले","other":"{0} ति॰ पहले"},"-1":"अंतिम तिमाही"},"month":{"0":"इस माह","1":"अगला माह","future":{"one":"{0} माह में","other":"{0} माह में"},"past":{"one":"{0} माह पहले","other":"{0} माह पहले"},"-1":"पिछला माह"},"month-short":{"0":"इस माह","1":"अगला माह","future":{"one":"{0} माह में","other":"{0} माह में"},"past":{"one":"{0} माह पहले","other":"{0} माह पहले"},"-1":"पिछला माह"},"month-narrow":{"0":"इस माह","1":"अगला माह","future":{"one":"{0} माह में","other":"{0} माह में"},"past":{"one":"{0} माह पहले","other":"{0} माह पहले"},"-1":"पिछला माह"},"week":{"0":"इस सप्ताह","1":"अगला सप्ताह","future":{"one":"{0} सप्ताह में","other":"{0} सप्ताह में"},"past":{"one":"{0} सप्ताह पहले","other":"{0} सप्ताह पहले"},"-1":"पिछला सप्ताह"},"week-short":{"0":"इस सप्ताह","1":"अगला सप्ताह","future":{"one":"{0} सप्ताह में","other":"{0} सप्ताह में"},"past":{"one":"{0} सप्ताह पहले","other":"{0} सप्ताह पहले"},"-1":"पिछला सप्ताह"},"week-narrow":{"0":"इस सप्ताह","1":"अगला सप्ताह","future":{"one":"{0} सप्ताह में","other":"{0} सप्ताह में"},"past":{"one":"{0} सप्ताह पहले","other":"{0} सप्ताह पहले"},"-1":"पिछला सप्ताह"},"day":{"0":"आज","1":"कल","2":"परसों","future":{"one":"{0} दिन में","other":"{0} दिन में"},"past":{"one":"{0} दिन पहले","other":"{0} दिन पहले"},"-2":"परसों","-1":"कल"},"day-short":{"0":"आज","1":"आने वाला कल","2":"परसों","future":{"one":"{0} दिन में","other":"{0} दिन में"},"past":{"one":"{0} दिन पहले","other":"{0} दिन पहले"},"-2":"परसों","-1":"बीता कल"},"day-narrow":{"0":"आज","1":"आने वाला कल","2":"परसों","future":{"one":"{0} दिन में","other":"{0} दिन में"},"past":{"one":"{0} दिन पहले","other":"{0} दिन पहले"},"-2":"परसों","-1":"बीता कल"},"hour":{"0":"यह घंटा","future":{"one":"{0} घंटे में","other":"{0} घंटे में"},"past":{"one":"{0} घंटे पहले","other":"{0} घंटे पहले"}},"hour-short":{"0":"यह घंटा","future":{"one":"{0} घं॰ में","other":"{0} घं॰ में"},"past":{"one":"{0} घं॰ पहले","other":"{0} घं॰ पहले"}},"hour-narrow":{"0":"यह घंटा","future":{"one":"{0} घं॰ में","other":"{0} घं॰ में"},"past":{"one":"{0} घं॰ पहले","other":"{0} घं॰ पहले"}},"minute":{"0":"यह मिनट","future":{"one":"{0} मिनट में","other":"{0} मिनट में"},"past":{"one":"{0} मिनट पहले","other":"{0} मिनट पहले"}},"minute-short":{"0":"यह मिनट","future":{"one":"{0} मि॰ में","other":"{0} मि॰ में"},"past":{"one":"{0} मि॰ पहले","other":"{0} मि॰ पहले"}},"minute-narrow":{"0":"यह मिनट","future":{"one":"{0} मि॰ में","other":"{0} मि॰ में"},"past":{"one":"{0} मि॰ पहले","other":"{0} मि॰ पहले"}},"second":{"0":"अब","future":{"one":"{0} सेकंड में","other":"{0} सेकंड में"},"past":{"one":"{0} सेकंड पहले","other":"{0} सेकंड पहले"}},"second-short":{"0":"अब","future":{"one":"{0} से॰ में","other":"{0} से॰ में"},"past":{"one":"{0} से॰ पहले","other":"{0} से॰ पहले"}},"second-narrow":{"0":"अब","future":{"one":"{0} से॰ में","other":"{0} से॰ में"},"past":{"one":"{0} से॰ पहले","other":"{0} से॰ पहले"}}},"locale":"hi"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
