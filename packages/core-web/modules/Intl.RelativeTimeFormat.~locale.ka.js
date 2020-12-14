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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ka").length
)) {
// Intl.RelativeTimeFormat.~locale.ka
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ამ წელს","1":"მომავალ წელს","future":{"one":"{0} წელიწადში","other":"{0} წელიწადში"},"past":{"one":"{0} წლის წინ","other":"{0} წლის წინ"},"-1":"გასულ წელს"},"year-short":{"0":"ამ წელს","1":"მომავალ წელს","future":{"one":"{0} წელში","other":"{0} წელში"},"past":{"one":"{0} წლის წინ","other":"{0} წლის წინ"},"-1":"გასულ წელს"},"year-narrow":{"0":"ამ წელს","1":"მომავალ წელს","future":{"one":"{0} წელში","other":"{0} წელში"},"past":{"one":"{0} წლის წინ","other":"{0} წლის წინ"},"-1":"გასულ წელს"},"quarter":{"0":"ამ კვარტალში","1":"შემდეგ კვარტალში","future":{"one":"{0} კვარტალში","other":"{0} კვარტალში"},"past":{"one":"{0} კვარტალის წინ","other":"{0} კვარტალის წინ"},"-1":"გასულ კვარტალში"},"quarter-short":{"0":"ამ კვარტალში","1":"შემდეგ კვარტალში","future":{"one":"{0} კვარტალში","other":"{0} კვარტალში"},"past":{"one":"{0} კვარტ. წინ","other":"{0} კვარტ. წინ"},"-1":"გასულ კვარტალში"},"quarter-narrow":{"0":"ამ კვარტალში","1":"შემდეგ კვარტალში","future":{"one":"{0} კვარტალში","other":"{0} კვარტალში"},"past":{"one":"{0} კვარტ. წინ","other":"{0} კვარტ. წინ"},"-1":"გასულ კვარტალში"},"month":{"0":"ამ თვეში","1":"მომავალ თვეს","future":{"one":"{0} თვეში","other":"{0} თვეში"},"past":{"one":"{0} თვის წინ","other":"{0} თვის წინ"},"-1":"გასულ თვეს"},"month-short":{"0":"ამ თვეში","1":"მომავალ თვეს","future":{"one":"{0} თვეში","other":"{0} თვეში"},"past":{"one":"{0} თვის წინ","other":"{0} თვის წინ"},"-1":"გასულ თვეს"},"month-narrow":{"0":"ამ თვეში","1":"მომავალ თვეს","future":{"one":"{0} თვეში","other":"{0} თვეში"},"past":{"one":"{0} თვის წინ","other":"{0} თვის წინ"},"-1":"გასულ თვეს"},"week":{"0":"ამ კვირაში","1":"მომავალ კვირაში","future":{"one":"{0} კვირაში","other":"{0} კვირაში"},"past":{"one":"{0} კვირის წინ","other":"{0} კვირის წინ"},"-1":"გასულ კვირაში"},"week-short":{"0":"ამ კვირაში","1":"მომავალ კვირაში","future":{"one":"{0} კვირაში","other":"{0} კვირაში"},"past":{"one":"{0} კვ. წინ","other":"{0} კვ. წინ"},"-1":"გასულ კვირაში"},"week-narrow":{"0":"ამ კვირაში","1":"მომავალ კვირაში","future":{"one":"{0} კვირაში","other":"{0} კვირაში"},"past":{"one":"{0} კვირის წინ","other":"{0} კვირის წინ"},"-1":"გასულ კვირაში"},"day":{"0":"დღეს","1":"ხვალ","2":"ზეგ","future":{"one":"{0} დღეში","other":"{0} დღეში"},"past":{"one":"{0} დღის წინ","other":"{0} დღის წინ"},"-2":"გუშინწინ","-1":"გუშინ"},"day-short":{"0":"დღეს","1":"ხვალ","2":"ზეგ","future":{"one":"{0} დღეში","other":"{0} დღეში"},"past":{"one":"{0} დღის წინ","other":"{0} დღის წინ"},"-2":"გუშინწინ","-1":"გუშინ"},"day-narrow":{"0":"დღეს","1":"ხვალ","2":"ზეგ","future":{"one":"{0} დღეში","other":"{0} დღეში"},"past":{"one":"{0} დღის წინ","other":"{0} დღის წინ"},"-2":"გუშინწინ","-1":"გუშინ"},"hour":{"0":"ამ საათში","future":{"one":"{0} საათში","other":"{0} საათში"},"past":{"one":"{0} საათის წინ","other":"{0} საათის წინ"}},"hour-short":{"0":"ამ საათში","future":{"one":"{0} საათში","other":"{0} საათში"},"past":{"one":"{0} სთ წინ","other":"{0} სთ წინ"}},"hour-narrow":{"0":"ამ საათში","future":{"one":"{0} საათში","other":"{0} საათში"},"past":{"one":"{0} სთ წინ","other":"{0} სთ წინ"}},"minute":{"0":"ამ წუთში","future":{"one":"{0} წუთში","other":"{0} წუთში"},"past":{"one":"{0} წუთის წინ","other":"{0} წუთის წინ"}},"minute-short":{"0":"ამ წუთში","future":{"one":"{0} წუთში","other":"{0} წუთში"},"past":{"one":"{0} წთ წინ","other":"{0} წთ წინ"}},"minute-narrow":{"0":"ამ წუთში","future":{"one":"{0} წუთში","other":"{0} წუთში"},"past":{"one":"{0} წთ წინ","other":"{0} წთ წინ"}},"second":{"0":"ახლა","future":{"one":"{0} წამში","other":"{0} წამში"},"past":{"one":"{0} წამის წინ","other":"{0} წამის წინ"}},"second-short":{"0":"ახლა","future":{"one":"{0} წამში","other":"{0} წამში"},"past":{"one":"{0} წმ წინ","other":"{0} წმ წინ"}},"second-narrow":{"0":"ახლა","future":{"one":"{0} წამში","other":"{0} წამში"},"past":{"one":"{0} წმ წინ","other":"{0} წმ წინ"}}},"locale":"ka"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
