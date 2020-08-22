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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("hy").length
)) {
// Intl.RelativeTimeFormat.~locale.hy
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"hy":{"nu":["latn"],"year":{"0":"այս տարի","1":"հաջորդ տարի","future":{"one":"{0} տարուց","other":"{0} տարուց"},"past":{"one":"{0} տարի առաջ","other":"{0} տարի առաջ"},"-1":"նախորդ տարի"},"year-short":{"0":"այս տարի","1":"հաջորդ տարի","future":{"one":"{0} տարուց","other":"{0} տարուց"},"past":{"one":"{0} տ առաջ","other":"{0} տ առաջ"},"-1":"նախորդ տարի"},"year-narrow":{"0":"այս տարի","1":"հաջորդ տարի","future":{"one":"{0} տարուց","other":"{0} տարուց"},"past":{"one":"{0} տ առաջ","other":"{0} տ առաջ"},"-1":"նախորդ տարի"},"quarter":{"0":"այս եռամսյակ","1":"հաջորդ եռամսյակ","future":{"one":"{0} եռամսյակից","other":"{0} եռամսյակից"},"past":{"one":"{0} եռամսյակ առաջ","other":"{0} եռամսյակ առաջ"},"-1":"նախորդ եռամսյակ"},"quarter-short":{"0":"այս եռամսյակ","1":"հաջորդ եռամսյակ","future":{"one":"{0} եռմս-ից","other":"{0} եռմս-ից"},"past":{"one":"{0} եռմս առաջ","other":"{0} եռմս առաջ"},"-1":"նախորդ եռամսյակ"},"quarter-narrow":{"0":"այս եռամսյակ","1":"հաջորդ եռամսյակ","future":{"one":"{0} եռմս-ից","other":"{0} եռմս-ից"},"past":{"one":"{0} եռմս առաջ","other":"{0} եռմս առաջ"},"-1":"նախորդ եռամսյակ"},"month":{"0":"այս ամիս","1":"հաջորդ ամիս","future":{"one":"{0} ամսից","other":"{0} ամսից"},"past":{"one":"{0} ամիս առաջ","other":"{0} ամիս առաջ"},"-1":"նախորդ ամիս"},"month-short":{"0":"այս ամիս","1":"հաջորդ ամիս","future":{"one":"{0} ամսից","other":"{0} ամսից"},"past":{"one":"{0} ամիս առաջ","other":"{0} ամիս առաջ"},"-1":"նախորդ ամիս"},"month-narrow":{"0":"այս ամիս","1":"հաջորդ ամիս","future":{"one":"{0} ամսից","other":"{0} ամսից"},"past":{"one":"{0} ամիս առաջ","other":"{0} ամիս առաջ"},"-1":"նախորդ ամիս"},"week":{"0":"այս շաբաթ","1":"հաջորդ շաբաթ","future":{"one":"{0} շաբաթից","other":"{0} շաբաթից"},"past":{"one":"{0} շաբաթ առաջ","other":"{0} շաբաթ առաջ"},"-1":"նախորդ շաբաթ"},"week-short":{"0":"այս շաբաթ","1":"հաջորդ շաբաթ","future":{"one":"{0} շաբ-ից","other":"{0} շաբ-ից"},"past":{"one":"{0} շաբ առաջ","other":"{0} շաբ առաջ"},"-1":"նախորդ շաբաթ"},"week-narrow":{"0":"այս շաբաթ","1":"հաջորդ շաբաթ","future":{"one":"{0} շաբ անց","other":"{0} շաբ անց"},"past":{"one":"{0} շաբ առաջ","other":"{0} շաբ առաջ"},"-1":"նախորդ շաբաթ"},"day":{"0":"այսօր","1":"վաղը","2":"վաղը չէ մյուս օրը","future":{"one":"{0} օրից","other":"{0} օրից"},"past":{"one":"{0} օր առաջ","other":"{0} օր առաջ"},"-2":"նախանցյալ օրը","-1":"երեկ"},"day-short":{"0":"այսօր","1":"վաղը","2":"վաղը չէ մյուս օրը","future":{"one":"{0} օրից","other":"{0} օրից"},"past":{"one":"{0} օր առաջ","other":"{0} օր առաջ"},"-2":"երեկ չէ առաջի օրը","-1":"երեկ"},"day-narrow":{"0":"այսօր","1":"վաղը","2":"վաղը չէ մյուս օրը","future":{"one":"{0} օրից","other":"{0} օրից"},"past":{"one":"{0} օր առաջ","other":"{0} օր առաջ"},"-2":"երեկ չէ առաջի օրը","-1":"երեկ"},"hour":{"0":"այս ժամին","future":{"one":"{0} ժամից","other":"{0} ժամից"},"past":{"one":"{0} ժամ առաջ","other":"{0} ժամ առաջ"}},"hour-short":{"0":"այս ժամին","future":{"one":"{0} ժ-ից","other":"{0} ժ-ից"},"past":{"one":"{0} ժ առաջ","other":"{0} ժ առաջ"}},"hour-narrow":{"0":"այս ժամին","future":{"one":"{0} ժ-ից","other":"{0} ժ-ից"},"past":{"one":"{0} ժ առաջ","other":"{0} ժ առաջ"}},"minute":{"0":"այս րոպեին","future":{"one":"{0} րոպեից","other":"{0} րոպեից"},"past":{"one":"{0} րոպե առաջ","other":"{0} րոպե առաջ"}},"minute-short":{"0":"այս րոպեին","future":{"one":"{0} ր-ից","other":"{0} ր-ից"},"past":{"one":"{0} ր առաջ","other":"{0} ր առաջ"}},"minute-narrow":{"0":"այս րոպեին","future":{"one":"{0} ր-ից","other":"{0} ր-ից"},"past":{"one":"{0} ր առաջ","other":"{0} ր առաջ"}},"second":{"0":"հիմա","future":{"one":"{0} վայրկյանից","other":"{0} վայրկյանից"},"past":{"one":"{0} վայրկյան առաջ","other":"{0} վայրկյան առաջ"}},"second-short":{"0":"հիմա","future":{"one":"{0} վրկ-ից","other":"{0} վրկ-ից"},"past":{"one":"{0} վրկ առաջ","other":"{0} վրկ առաջ"}},"second-narrow":{"0":"հիմա","future":{"one":"{0} վ-ից","other":"{0} վ-ից"},"past":{"one":"{0} վ առաջ","other":"{0} վ առաջ"}}}},"availableLocales":["hy"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
