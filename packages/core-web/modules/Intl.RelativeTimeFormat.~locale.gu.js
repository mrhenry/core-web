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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("gu").length
)) {
// Intl.RelativeTimeFormat.~locale.gu
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"gu":{"nu":["latn"],"year":{"0":"આ વર્ષે","1":"આવતા વર્ષે","future":{"one":"{0} વર્ષમાં","other":"{0} વર્ષમાં"},"past":{"one":"{0} વર્ષ પહેલાં","other":"{0} વર્ષ પહેલાં"},"-1":"ગયા વર્ષે"},"year-short":{"0":"આ વર્ષે","1":"આવતા વર્ષે","future":{"one":"{0} વર્ષમાં","other":"{0} વર્ષમાં"},"past":{"one":"{0} વર્ષ પહેલાં","other":"{0} વર્ષ પહેલાં"},"-1":"ગયા વર્ષે"},"year-narrow":{"0":"આ વર્ષે","1":"આવતા વર્ષે","future":{"one":"{0} વર્ષમાં","other":"{0} વર્ષમાં"},"past":{"one":"{0} વર્ષ પહેલાં","other":"{0} વર્ષ પહેલાં"},"-1":"ગયા વર્ષે"},"quarter":{"0":"આ ત્રિમાસિક","1":"પછીનું ત્રિમાસિક","future":{"one":"{0} ત્રિમાસિકમાં","other":"{0} ત્રિમાસિકમાં"},"past":{"one":"{0} ત્રિમાસિક પહેલાં","other":"{0} ત્રિમાસિક પહેલાં"},"-1":"છેલ્લું ત્રિમાસિક"},"quarter-short":{"0":"આ ત્રિમાસિક","1":"પછીનું ત્રિમાસિક","future":{"one":"{0} ત્રિમાસિકમાં","other":"{0} ત્રિમાસિકમાં"},"past":{"one":"{0} ત્રિમાસિક પહેલાં","other":"{0} ત્રિમાસિક પહેલાં"},"-1":"છેલ્લું ત્રિમાસિક"},"quarter-narrow":{"0":"આ ત્રિમાસિક","1":"પછીનું ત્રિમાસિક","future":{"one":"{0} ત્રિમાસિકમાં","other":"{0} ત્રિમાસિકમાં"},"past":{"one":"{0} ત્રિમાસિક પહેલાં","other":"{0} ત્રિમાસિક પહેલાં"},"-1":"છેલ્લું ત્રિમાસિક"},"month":{"0":"આ મહિને","1":"આવતા મહિને","future":{"one":"{0} મહિનામાં","other":"{0} મહિનામાં"},"past":{"one":"{0} મહિના પહેલાં","other":"{0} મહિના પહેલાં"},"-1":"ગયા મહિને"},"month-short":{"0":"આ મહિને","1":"આવતા મહિને","future":{"one":"{0} મહિનામાં","other":"{0} મહિનામાં"},"past":{"one":"{0} મહિના પહેલાં","other":"{0} મહિના પહેલાં"},"-1":"ગયા મહિને"},"month-narrow":{"0":"આ મહિને","1":"આવતા મહિને","future":{"one":"{0} મહિનામાં","other":"{0} મહિનામાં"},"past":{"one":"{0} મહિના પહેલાં","other":"{0} મહિના પહેલાં"},"-1":"ગયા મહિને"},"week":{"0":"આ અઠવાડિયે","1":"આવતા અઠવાડિયે","future":{"one":"{0} અઠવાડિયામાં","other":"{0} અઠવાડિયામાં"},"past":{"one":"{0} અઠવાડિયા પહેલાં","other":"{0} અઠવાડિયા પહેલાં"},"-1":"ગયા અઠવાડિયે"},"week-short":{"0":"આ અઠવાડિયે","1":"આવતા અઠવાડિયે","future":{"one":"{0} અઠ. માં","other":"{0} અઠ. માં"},"past":{"one":"{0} અઠ. પહેલાં","other":"{0} અઠ. પહેલાં"},"-1":"ગયા અઠવાડિયે"},"week-narrow":{"0":"આ અઠવાડિયે","1":"આવતા અઠવાડિયે","future":{"one":"{0} અઠ. માં","other":"{0} અઠ. માં"},"past":{"one":"{0} અઠ. પહેલાં","other":"{0} અઠ. પહેલાં"},"-1":"ગયા અઠવાડિયે"},"day":{"0":"આજે","1":"આવતીકાલે","2":"પરમદિવસે","future":{"one":"{0} દિવસમાં","other":"{0} દિવસમાં"},"past":{"one":"{0} દિવસ પહેલાં","other":"{0} દિવસ પહેલાં"},"-2":"ગયા પરમદિવસે","-1":"ગઈકાલે"},"day-short":{"0":"આજે","1":"આવતીકાલે","2":"પરમદિવસે","future":{"one":"{0} દિવસમાં","other":"{0} દિવસમાં"},"past":{"one":"{0} દિવસ પહેલાં","other":"{0} દિવસ પહેલાં"},"-2":"ગયા પરમદિવસે","-1":"ગઈકાલે"},"day-narrow":{"0":"આજે","1":"આવતીકાલે","2":"પરમદિવસે","future":{"one":"{0} દિવસમાં","other":"{0} દિવસમાં"},"past":{"one":"{0} દિવસ પહેલાં","other":"{0} દિવસ પહેલાં"},"-2":"ગયા પરમદિવસે","-1":"ગઈકાલે"},"hour":{"0":"આ કલાક","future":{"one":"{0} કલાકમાં","other":"{0} કલાકમાં"},"past":{"one":"{0} કલાક પહેલાં","other":"{0} કલાક પહેલાં"}},"hour-short":{"0":"આ કલાક","future":{"one":"{0} કલાકમાં","other":"{0} કલાકમાં"},"past":{"one":"{0} કલાક પહેલાં","other":"{0} કલાક પહેલાં"}},"hour-narrow":{"0":"આ કલાક","future":{"one":"{0} કલાકમાં","other":"{0} કલાકમાં"},"past":{"one":"{0} કલાક પહેલાં","other":"{0} કલાક પહેલાં"}},"minute":{"0":"આ મિનિટ","future":{"one":"{0} મિનિટમાં","other":"{0} મિનિટમાં"},"past":{"one":"{0} મિનિટ પહેલાં","other":"{0} મિનિટ પહેલાં"}},"minute-short":{"0":"આ મિનિટ","future":{"one":"{0} મિનિટમાં","other":"{0} મિનિટમાં"},"past":{"one":"{0} મિનિટ પહેલાં","other":"{0} મિનિટ પહેલાં"}},"minute-narrow":{"0":"આ મિનિટ","future":{"one":"{0} મિનિટમાં","other":"{0} મિનિટમાં"},"past":{"one":"{0} મિનિટ પહેલાં","other":"{0} મિનિટ પહેલાં"}},"second":{"0":"હમણાં","future":{"one":"{0} સેકંડમાં","other":"{0} સેકંડમાં"},"past":{"one":"{0} સેકંડ પહેલાં","other":"{0} સેકંડ પહેલાં"}},"second-short":{"0":"હમણાં","future":{"one":"{0} સેકંડમાં","other":"{0} સેકંડમાં"},"past":{"one":"{0} સેકંડ પહેલાં","other":"{0} સેકંડ પહેલાં"}},"second-narrow":{"0":"હમણાં","future":{"one":"{0} સેકંડમાં","other":"{0} સેકંડમાં"},"past":{"one":"{0} સેકંડ પહેલાં","other":"{0} સેકંડ પહેલાં"}}}},"availableLocales":["gu"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
