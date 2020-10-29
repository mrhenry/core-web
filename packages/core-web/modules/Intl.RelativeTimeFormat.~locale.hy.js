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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("hy").length
)) {
// Intl.RelativeTimeFormat.~locale.hy
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"hy":{"nu":["latn"],"year":{"0":"այս տարի","1":"հաջորդ տարի","future":{"one":"{0} տարուց","other":"{0} տարուց"},"past":{"one":"{0} տարի առաջ","other":"{0} տարի առաջ"},"-1":"նախորդ տարի"},"year-short":{"0":"այս տարի","1":"հաջորդ տարի","future":{"one":"{0} տարուց","other":"{0} տարուց"},"past":{"one":"{0} տ առաջ","other":"{0} տ առաջ"},"-1":"նախորդ տարի"},"year-narrow":{"0":"այս տարի","1":"հաջորդ տարի","future":{"one":"{0} տարուց","other":"{0} տարուց"},"past":{"one":"{0} տ առաջ","other":"{0} տ առաջ"},"-1":"նախորդ տարի"},"quarter":{"0":"այս եռամսյակ","1":"հաջորդ եռամսյակ","future":{"one":"{0} եռամսյակից","other":"{0} եռամսյակից"},"past":{"one":"{0} եռամսյակ առաջ","other":"{0} եռամսյակ առաջ"},"-1":"նախորդ եռամսյակ"},"quarter-short":{"0":"այս եռամսյակ","1":"հաջորդ եռամսյակ","future":{"one":"{0} եռմս-ից","other":"{0} եռմս-ից"},"past":{"one":"{0} եռմս առաջ","other":"{0} եռմս առաջ"},"-1":"նախորդ եռամսյակ"},"quarter-narrow":{"0":"այս եռամսյակ","1":"հաջորդ եռամսյակ","future":{"one":"{0} եռմս-ից","other":"{0} եռմս-ից"},"past":{"one":"{0} եռմս առաջ","other":"{0} եռմս առաջ"},"-1":"նախորդ եռամսյակ"},"month":{"0":"այս ամիս","1":"հաջորդ ամիս","future":{"one":"{0} ամսից","other":"{0} ամսից"},"past":{"one":"{0} ամիս առաջ","other":"{0} ամիս առաջ"},"-1":"նախորդ ամիս"},"month-short":{"0":"այս ամիս","1":"հաջորդ ամիս","future":{"one":"{0} ամսից","other":"{0} ամսից"},"past":{"one":"{0} ամիս առաջ","other":"{0} ամիս առաջ"},"-1":"նախորդ ամիս"},"month-narrow":{"0":"այս ամիս","1":"հաջորդ ամիս","future":{"one":"{0} ամսից","other":"{0} ամսից"},"past":{"one":"{0} ամիս առաջ","other":"{0} ամիս առաջ"},"-1":"նախորդ ամիս"},"week":{"0":"այս շաբաթ","1":"հաջորդ շաբաթ","future":{"one":"{0} շաբաթից","other":"{0} շաբաթից"},"past":{"one":"{0} շաբաթ առաջ","other":"{0} շաբաթ առաջ"},"-1":"նախորդ շաբաթ"},"week-short":{"0":"այս շաբաթ","1":"հաջորդ շաբաթ","future":{"one":"{0} շաբ-ից","other":"{0} շաբ-ից"},"past":{"one":"{0} շաբ առաջ","other":"{0} շաբ առաջ"},"-1":"նախորդ շաբաթ"},"week-narrow":{"0":"այս շաբաթ","1":"հաջորդ շաբաթ","future":{"one":"{0} շաբ անց","other":"{0} շաբ անց"},"past":{"one":"{0} շաբ առաջ","other":"{0} շաբ առաջ"},"-1":"նախորդ շաբաթ"},"day":{"0":"այսօր","1":"վաղը","2":"վաղը չէ մյուս օրը","future":{"one":"{0} օրից","other":"{0} օրից"},"past":{"one":"{0} օր առաջ","other":"{0} օր առաջ"},"-2":"նախանցյալ օրը","-1":"երեկ"},"day-short":{"0":"այսօր","1":"վաղը","2":"վաղը չէ մյուս օրը","future":{"one":"{0} օրից","other":"{0} օրից"},"past":{"one":"{0} օր առաջ","other":"{0} օր առաջ"},"-2":"երեկ չէ առաջի օրը","-1":"երեկ"},"day-narrow":{"0":"այսօր","1":"վաղը","2":"վաղը չէ մյուս օրը","future":{"one":"{0} օրից","other":"{0} օրից"},"past":{"one":"{0} օր առաջ","other":"{0} օր առաջ"},"-2":"երեկ չէ առաջի օրը","-1":"երեկ"},"hour":{"0":"այս ժամին","future":{"one":"{0} ժամից","other":"{0} ժամից"},"past":{"one":"{0} ժամ առաջ","other":"{0} ժամ առաջ"}},"hour-short":{"0":"այս ժամին","future":{"one":"{0} ժ-ից","other":"{0} ժ-ից"},"past":{"one":"{0} ժ առաջ","other":"{0} ժ առաջ"}},"hour-narrow":{"0":"այս ժամին","future":{"one":"{0} ժ-ից","other":"{0} ժ-ից"},"past":{"one":"{0} ժ առաջ","other":"{0} ժ առաջ"}},"minute":{"0":"այս րոպեին","future":{"one":"{0} րոպեից","other":"{0} րոպեից"},"past":{"one":"{0} րոպե առաջ","other":"{0} րոպե առաջ"}},"minute-short":{"0":"այս րոպեին","future":{"one":"{0} ր-ից","other":"{0} ր-ից"},"past":{"one":"{0} ր առաջ","other":"{0} ր առաջ"}},"minute-narrow":{"0":"այս րոպեին","future":{"one":"{0} ր-ից","other":"{0} ր-ից"},"past":{"one":"{0} ր առաջ","other":"{0} ր առաջ"}},"second":{"0":"հիմա","future":{"one":"{0} վայրկյանից","other":"{0} վայրկյանից"},"past":{"one":"{0} վայրկյան առաջ","other":"{0} վայրկյան առաջ"}},"second-short":{"0":"հիմա","future":{"one":"{0} վրկ-ից","other":"{0} վրկ-ից"},"past":{"one":"{0} վրկ առաջ","other":"{0} վրկ առաջ"}},"second-narrow":{"0":"հիմա","future":{"one":"{0} վ-ից","other":"{0} վ-ից"},"past":{"one":"{0} վ առաջ","other":"{0} վ առաջ"}}}},"availableLocales":["hy"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
