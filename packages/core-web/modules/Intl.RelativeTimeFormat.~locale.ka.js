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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ka").length
)) {
// Intl.RelativeTimeFormat.~locale.ka
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ka":{"nu":["latn"],"year":{"0":"ამ წელს","1":"მომავალ წელს","future":{"one":"{0} წელიწადში","other":"{0} წელიწადში"},"past":{"one":"{0} წლის წინ","other":"{0} წლის წინ"},"-1":"გასულ წელს"},"year-short":{"0":"ამ წელს","1":"მომავალ წელს","future":{"one":"{0} წელში","other":"{0} წელში"},"past":{"one":"{0} წლის წინ","other":"{0} წლის წინ"},"-1":"გასულ წელს"},"year-narrow":{"0":"ამ წელს","1":"მომავალ წელს","future":{"one":"{0} წელში","other":"{0} წელში"},"past":{"one":"{0} წლის წინ","other":"{0} წლის წინ"},"-1":"გასულ წელს"},"quarter":{"0":"ამ კვარტალში","1":"შემდეგ კვარტალში","future":{"one":"{0} კვარტალში","other":"{0} კვარტალში"},"past":{"one":"{0} კვარტალის წინ","other":"{0} კვარტალის წინ"},"-1":"გასულ კვარტალში"},"quarter-short":{"0":"ამ კვარტალში","1":"შემდეგ კვარტალში","future":{"one":"{0} კვარტალში","other":"{0} კვარტალში"},"past":{"one":"{0} კვარტ. წინ","other":"{0} კვარტ. წინ"},"-1":"გასულ კვარტალში"},"quarter-narrow":{"0":"ამ კვარტალში","1":"შემდეგ კვარტალში","future":{"one":"{0} კვარტალში","other":"{0} კვარტალში"},"past":{"one":"{0} კვარტ. წინ","other":"{0} კვარტ. წინ"},"-1":"გასულ კვარტალში"},"month":{"0":"ამ თვეში","1":"მომავალ თვეს","future":{"one":"{0} თვეში","other":"{0} თვეში"},"past":{"one":"{0} თვის წინ","other":"{0} თვის წინ"},"-1":"გასულ თვეს"},"month-short":{"0":"ამ თვეში","1":"მომავალ თვეს","future":{"one":"{0} თვეში","other":"{0} თვეში"},"past":{"one":"{0} თვის წინ","other":"{0} თვის წინ"},"-1":"გასულ თვეს"},"month-narrow":{"0":"ამ თვეში","1":"მომავალ თვეს","future":{"one":"{0} თვეში","other":"{0} თვეში"},"past":{"one":"{0} თვის წინ","other":"{0} თვის წინ"},"-1":"გასულ თვეს"},"week":{"0":"ამ კვირაში","1":"მომავალ კვირაში","future":{"one":"{0} კვირაში","other":"{0} კვირაში"},"past":{"one":"{0} კვირის წინ","other":"{0} კვირის წინ"},"-1":"გასულ კვირაში"},"week-short":{"0":"ამ კვირაში","1":"მომავალ კვირაში","future":{"one":"{0} კვირაში","other":"{0} კვირაში"},"past":{"one":"{0} კვ. წინ","other":"{0} კვ. წინ"},"-1":"გასულ კვირაში"},"week-narrow":{"0":"ამ კვირაში","1":"მომავალ კვირაში","future":{"one":"{0} კვირაში","other":"{0} კვირაში"},"past":{"one":"{0} კვირის წინ","other":"{0} კვირის წინ"},"-1":"გასულ კვირაში"},"day":{"0":"დღეს","1":"ხვალ","2":"ზეგ","future":{"one":"{0} დღეში","other":"{0} დღეში"},"past":{"one":"{0} დღის წინ","other":"{0} დღის წინ"},"-2":"გუშინწინ","-1":"გუშინ"},"day-short":{"0":"დღეს","1":"ხვალ","2":"ზეგ","future":{"one":"{0} დღეში","other":"{0} დღეში"},"past":{"one":"{0} დღის წინ","other":"{0} დღის წინ"},"-2":"გუშინწინ","-1":"გუშინ"},"day-narrow":{"0":"დღეს","1":"ხვალ","2":"ზეგ","future":{"one":"{0} დღეში","other":"{0} დღეში"},"past":{"one":"{0} დღის წინ","other":"{0} დღის წინ"},"-2":"გუშინწინ","-1":"გუშინ"},"hour":{"0":"ამ საათში","future":{"one":"{0} საათში","other":"{0} საათში"},"past":{"one":"{0} საათის წინ","other":"{0} საათის წინ"}},"hour-short":{"0":"ამ საათში","future":{"one":"{0} საათში","other":"{0} საათში"},"past":{"one":"{0} სთ წინ","other":"{0} სთ წინ"}},"hour-narrow":{"0":"ამ საათში","future":{"one":"{0} საათში","other":"{0} საათში"},"past":{"one":"{0} სთ წინ","other":"{0} სთ წინ"}},"minute":{"0":"ამ წუთში","future":{"one":"{0} წუთში","other":"{0} წუთში"},"past":{"one":"{0} წუთის წინ","other":"{0} წუთის წინ"}},"minute-short":{"0":"ამ წუთში","future":{"one":"{0} წუთში","other":"{0} წუთში"},"past":{"one":"{0} წთ წინ","other":"{0} წთ წინ"}},"minute-narrow":{"0":"ამ წუთში","future":{"one":"{0} წუთში","other":"{0} წუთში"},"past":{"one":"{0} წთ წინ","other":"{0} წთ წინ"}},"second":{"0":"ახლა","future":{"one":"{0} წამში","other":"{0} წამში"},"past":{"one":"{0} წამის წინ","other":"{0} წამის წინ"}},"second-short":{"0":"ახლა","future":{"one":"{0} წამში","other":"{0} წამში"},"past":{"one":"{0} წმ წინ","other":"{0} წმ წინ"}},"second-narrow":{"0":"ახლა","future":{"one":"{0} წამში","other":"{0} წამში"},"past":{"one":"{0} წმ წინ","other":"{0} წმ წინ"}}}},"availableLocales":["ka"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
