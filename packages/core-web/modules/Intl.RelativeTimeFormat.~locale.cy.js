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
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("cy").length
)) {
// Intl.RelativeTimeFormat.~locale.cy
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"cy":{"nu":["latn"],"year":{"0":"eleni","1":"blwyddyn nesaf","future":{"zero":"ymhen {0} mlynedd","one":"ymhen blwyddyn","two":"ymhen {0} flynedd","few":"ymhen {0} blynedd","many":"ymhen {0} blynedd","other":"ymhen {0} mlynedd"},"past":{"zero":"{0} o flynyddoedd yn ôl","one":"blwyddyn yn ôl","two":"{0} flynedd yn ôl","few":"{0} blynedd yn ôl","many":"{0} blynedd yn ôl","other":"{0} o flynyddoedd yn ôl"},"-1":"llynedd"},"year-short":{"0":"eleni","1":"blwyddyn nesaf","future":{"zero":"ymhen {0} mlynedd","one":"ymhen blwyddyn","two":"ymhen {0} flynedd","few":"ymhen {0} blynedd","many":"ymhen {0} blynedd","other":"ymhen {0} mlynedd"},"past":{"zero":"{0} o flynyddoedd yn ôl","one":"blwyddyn yn ôl","two":"{0} flynedd yn ôl","few":"{0} blynedd yn ôl","many":"{0} blynedd yn ôl","other":"{0} o flynyddoedd yn ôl"},"-1":"llynedd"},"year-narrow":{"0":"eleni","1":"blwyddyn nesaf","future":{"zero":"ymhen {0} mlynedd","one":"ymhen blwyddyn","two":"ymhen {0} flynedd","few":"ymhen {0} blynedd","many":"ymhen {0} blynedd","other":"ymhen {0} mlynedd"},"past":{"zero":"{0} o flynyddoedd yn ôl","one":"blwyddyn yn ôl","two":"{0} flynedd yn ôl","few":"{0} blynedd yn ôl","many":"{0} blynedd yn ôl","other":"{0} o flynyddoedd yn ôl"},"-1":"llynedd"},"quarter":{"0":"chwarter hwn","1":"chwarter nesaf","future":{"zero":"ymhen {0} chwarter","one":"ymhen {0} chwarter","two":"ymhen {0} chwarter","few":"ymhen {0} chwarter","many":"ymhen {0} chwarter","other":"ymhen {0} chwarter"},"past":{"zero":"{0} o chwarteri yn ôl","one":"{0} chwarter yn ôl","two":"{0} chwarter yn ôl","few":"{0} chwarter yn ôl","many":"{0} chwarter yn ôl","other":"{0} o chwarteri yn ôl"},"-1":"chwarter olaf"},"quarter-short":{"0":"chwarter hwn","1":"chwarter nesaf","future":{"zero":"ymhen {0} chwarter","one":"ymhen {0} chwarter","two":"ymhen {0} chwarter","few":"ymhen {0} chwarter","many":"ymhen {0} chwarter","other":"ymhen {0} chwarter"},"past":{"zero":"{0} o chwarteri yn ôl","one":"{0} chwarter yn ôl","two":"{0} chwarter yn ôl","few":"{0} chwarter yn ôl","many":"{0} chwarter yn ôl","other":"{0} o chwarteri yn ôl"},"-1":"chwarter olaf"},"quarter-narrow":{"0":"chwarter hwn","1":"chwarter nesaf","future":{"zero":"ymhen {0} chwarter","one":"ymhen {0} chwarter","two":"ymhen {0} chwarter","few":"ymhen {0} chwarter","many":"ymhen {0} chwarter","other":"ymhen {0} chwarter"},"past":{"zero":"{0} o chwarteri yn ôl","one":"{0} chwarter yn ôl","two":"{0} chwarter yn ôl","few":"{0} chwarter yn ôl","many":"{0} chwarter yn ôl","other":"{0} o chwarteri yn ôl"},"-1":"chwarter olaf"},"month":{"0":"y mis hwn","1":"mis nesaf","future":{"zero":"ymhen {0} mis","one":"ymhen mis","two":"ymhen deufis","few":"ymhen {0} mis","many":"ymhen {0} mis","other":"ymhen {0} mis"},"past":{"zero":"{0} mis yn ôl","one":"{0} mis yn ôl","two":"{0} fis yn ôl","few":"{0} mis yn ôl","many":"{0} mis yn ôl","other":"{0} mis yn ôl"},"-1":"mis diwethaf"},"month-short":{"0":"y mis hwn","1":"mis nesaf","future":{"zero":"ymhen {0} mis","one":"ymhen mis","two":"ymhen deufis","few":"ymhen {0} mis","many":"ymhen {0} mis","other":"ymhen {0} mis"},"past":{"zero":"{0} mis yn ôl","one":"{0} mis yn ôl","two":"deufis yn ôl","few":"{0} mis yn ôl","many":"{0} mis yn ôl","other":"{0} mis yn ôl"},"-1":"mis diwethaf"},"month-narrow":{"0":"y mis hwn","1":"mis nesaf","future":{"zero":"ymhen {0} mis","one":"ymhen mis","two":"ymhen deufis","few":"ymhen {0} mis","many":"ymhen {0} mis","other":"ymhen {0} mis"},"past":{"zero":"{0} mis yn ôl","one":"{0} mis yn ôl","two":"{0} fis yn ôl","few":"{0} mis yn ôl","many":"{0} mis yn ôl","other":"{0} mis yn ôl"},"-1":"mis diwethaf"},"week":{"0":"yr wythnos hon","1":"wythnos nesaf","future":{"zero":"ymhen {0} wythnos","one":"ymhen wythnos","two":"ymhen pythefnos","few":"ymhen {0} wythnos","many":"ymhen {0} wythnos","other":"ymhen {0} wythnos"},"past":{"zero":"{0} wythnos yn ôl","one":"{0} wythnos yn ôl","two":"{0} wythnos yn ôl","few":"{0} wythnos yn ôl","many":"{0} wythnos yn ôl","other":"{0} wythnos yn ôl"},"-1":"wythnos ddiwethaf"},"week-short":{"0":"yr wythnos hon","1":"wythnos nesaf","future":{"zero":"ymhen {0} wythnos","one":"ymhen wythnos","two":"ymhen pythefnos","few":"ymhen {0} wythnos","many":"ymhen {0} wythnos","other":"ymhen {0} wythnos"},"past":{"zero":"{0} wythnos yn ôl","one":"{0} wythnos yn ôl","two":"pythefnos yn ôl","few":"{0} wythnos yn ôl","many":"{0} wythnos yn ôl","other":"{0} wythnos yn ôl"},"-1":"wythnos ddiwethaf"},"week-narrow":{"0":"yr wythnos hon","1":"wythnos nesaf","future":{"zero":"ymhen {0} wythnos","one":"ymhen {0} wythnos","two":"ymhen {0} wythnos","few":"ymhen {0} wythnos","many":"ymhen {0} wythnos","other":"ymhen {0} wythnos"},"past":{"zero":"{0} wythnos yn ôl","one":"{0} wythnos yn ôl","two":"pythefnos yn ôl","few":"{0} wythnos yn ôl","many":"{0} wythnos yn ôl","other":"{0} wythnos yn ôl"},"-1":"wythnos ddiwethaf"},"day":{"0":"heddiw","1":"yfory","2":"drennydd","future":{"zero":"ymhen {0} diwrnod","one":"ymhen diwrnod","two":"ymhen deuddydd","few":"ymhen {0} diwrnod","many":"ymhen {0} diwrnod","other":"ymhen {0} diwrnod"},"past":{"zero":"{0} diwrnod yn ôl","one":"{0} diwrnod yn ôl","two":"{0} ddiwrnod yn ôl","few":"{0} diwrnod yn ôl","many":"{0} diwrnod yn ôl","other":"{0} diwrnod yn ôl"},"-2":"echdoe","-1":"ddoe"},"day-short":{"0":"heddiw","1":"yfory","2":"drennydd","future":{"zero":"ymhen {0} diwrnod","one":"ymhen diwrnod","two":"ymhen deuddydd","few":"ymhen {0} diwrnod","many":"ymhen {0} diwrnod","other":"ymhen {0} diwrnod"},"past":{"zero":"{0} diwrnod yn ôl","one":"{0} diwrnod yn ôl","two":"{0} ddiwrnod yn ôl","few":"{0} diwrnod yn ôl","many":"{0} diwrnod yn ôl","other":"{0} diwrnod yn ôl"},"-2":"echdoe","-1":"ddoe"},"day-narrow":{"0":"heddiw","1":"yfory","2":"drennydd","future":{"zero":"ymhen {0} diwrnod","one":"ymhen {0} diwrnod","two":"ymhen {0} diwrnod","few":"ymhen {0} diwrnod","many":"ymhen {0} diwrnod","other":"ymhen {0} diwrnod"},"past":{"zero":"{0} diwrnod yn ôl","one":"{0} diwrnod yn ôl","two":"{0} ddiwrnod yn ôl","few":"{0} diwrnod yn ôl","many":"{0} diwrnod yn ôl","other":"{0} diwrnod yn ôl"},"-2":"echdoe","-1":"ddoe"},"hour":{"0":"yr awr hon","future":{"zero":"ymhen {0} awr","one":"ymhen awr","two":"ymhen {0} awr","few":"ymhen {0} awr","many":"ymhen {0} awr","other":"ymhen {0} awr"},"past":{"zero":"{0} awr yn ôl","one":"{0} awr yn ôl","two":"{0} awr yn ôl","few":"{0} awr yn ôl","many":"{0} awr yn ôl","other":"{0} awr yn ôl"}},"hour-short":{"0":"yr awr hon","future":{"zero":"ymhen {0} awr","one":"ymhen awr","two":"ymhen {0} awr","few":"ymhen {0} awr","many":"ymhen {0} awr","other":"ymhen {0} awr"},"past":{"zero":"{0} awr yn ôl","one":"awr yn ôl","two":"{0} awr yn ôl","few":"{0} awr yn ôl","many":"{0} awr yn ôl","other":"{0} awr yn ôl"}},"hour-narrow":{"0":"yr awr hon","future":{"zero":"ymhen {0} awr","one":"ymhen {0} awr","two":"ymhen {0} awr","few":"ymhen {0} awr","many":"ymhen {0} awr","other":"ymhen {0} awr"},"past":{"zero":"{0} awr yn ôl","one":"{0} awr yn ôl","two":"{0} awr yn ôl","few":"{0} awr yn ôl","many":"{0} awr yn ôl","other":"{0} awr yn ôl"}},"minute":{"0":"y funud hon","future":{"zero":"ymhen {0} munud","one":"ymhen {0} munud","two":"ymhen {0} munud","few":"ymhen {0} munud","many":"ymhen {0} munud","other":"ymhen {0} munud"},"past":{"zero":"{0} munud yn ôl","one":"{0} munud yn ôl","two":"{0} munud yn ôl","few":"{0} munud yn ôl","many":"{0} munud yn ôl","other":"{0} munud yn ôl"}},"minute-short":{"0":"y funud hon","future":{"zero":"ymhen {0} munud","one":"ymhen {0} mun.","two":"ymhen {0} fun.","few":"ymhen {0} munud","many":"ymhen {0} munud","other":"ymhen {0} munud"},"past":{"zero":"{0} munud yn ôl","one":"{0} munud yn ôl","two":"{0} fun. yn ôl","few":"{0} munud yn ôl","many":"{0} munud yn ôl","other":"{0} munud yn ôl"}},"minute-narrow":{"0":"y funud hon","future":{"zero":"ymhen {0} mun.","one":"ymhen {0} mun.","two":"ymhen {0} mun.","few":"ymhen {0} mun.","many":"ymhen {0} mun.","other":"ymhen {0} mun."},"past":{"zero":"{0} mun. yn ôl","one":"{0} mun. yn ôl","two":"{0} mun. yn ôl","few":"{0} mun. yn ôl","many":"{0} mun. yn ôl","other":"{0} mun. yn ôl"}},"second":{"0":"nawr","future":{"zero":"ymhen {0} eiliad","one":"ymhen {0} eiliad","two":"ymhen {0} eiliad","few":"ymhen {0} eiliad","many":"ymhen {0} eiliad","other":"ymhen {0} eiliad"},"past":{"zero":"{0} eiliad yn ôl","one":"{0} eiliad yn ôl","two":"{0} eiliad yn ôl","few":"{0} eiliad yn ôl","many":"{0} eiliad yn ôl","other":"{0} eiliad yn ôl"}},"second-short":{"0":"nawr","future":{"zero":"ymhen {0} eiliad","one":"ymhen {0} eiliad","two":"ymhen {0} eiliad","few":"ymhen {0} eiliad","many":"ymhen {0} eiliad","other":"ymhen {0} eiliad"},"past":{"zero":"{0} eiliad yn ôl","one":"{0} eiliad yn ôl","two":"{0} eiliad yn ôl","few":"{0} eiliad yn ôl","many":"{0} eiliad yn ôl","other":"{0} eiliad yn ôl"}},"second-narrow":{"0":"nawr","future":{"zero":"ymhen {0} eiliad","one":"ymhen {0} eiliad","two":"ymhen {0} eiliad","few":"ymhen {0} eiliad","many":"ymhen {0} eiliad","other":"ymhen {0} eiliad"},"past":{"zero":"{0} eiliad yn ôl","one":"{0} eiliad yn ôl","two":"{0} eiliad yn ôl","few":"{0} eiliad yn ôl","many":"{0} eiliad yn ôl","other":"{0} eiliad yn ôl"}}}},"availableLocales":["cy"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
