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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("gu").length
)) {
// Intl.RelativeTimeFormat.~locale.gu
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"gu":{"nu":["latn"],"year":{"0":"આ વર્ષે","1":"આવતા વર્ષે","future":{"one":"{0} વર્ષમાં","other":"{0} વર્ષમાં"},"past":{"one":"{0} વર્ષ પહેલાં","other":"{0} વર્ષ પહેલાં"},"-1":"ગયા વર્ષે"},"year-short":{"0":"આ વર્ષે","1":"આવતા વર્ષે","future":{"one":"{0} વર્ષમાં","other":"{0} વર્ષમાં"},"past":{"one":"{0} વર્ષ પહેલાં","other":"{0} વર્ષ પહેલાં"},"-1":"ગયા વર્ષે"},"year-narrow":{"0":"આ વર્ષે","1":"આવતા વર્ષે","future":{"one":"{0} વર્ષમાં","other":"{0} વર્ષમાં"},"past":{"one":"{0} વર્ષ પહેલાં","other":"{0} વર્ષ પહેલાં"},"-1":"ગયા વર્ષે"},"quarter":{"0":"આ ત્રિમાસિક","1":"પછીનું ત્રિમાસિક","future":{"one":"{0} ત્રિમાસિકમાં","other":"{0} ત્રિમાસિકમાં"},"past":{"one":"{0} ત્રિમાસિક પહેલાં","other":"{0} ત્રિમાસિક પહેલાં"},"-1":"છેલ્લું ત્રિમાસિક"},"quarter-short":{"0":"આ ત્રિમાસિક","1":"પછીનું ત્રિમાસિક","future":{"one":"{0} ત્રિમાસિકમાં","other":"{0} ત્રિમાસિકમાં"},"past":{"one":"{0} ત્રિમાસિક પહેલાં","other":"{0} ત્રિમાસિક પહેલાં"},"-1":"છેલ્લું ત્રિમાસિક"},"quarter-narrow":{"0":"આ ત્રિમાસિક","1":"પછીનું ત્રિમાસિક","future":{"one":"{0} ત્રિમાસિકમાં","other":"{0} ત્રિમાસિકમાં"},"past":{"one":"{0} ત્રિમાસિક પહેલાં","other":"{0} ત્રિમાસિક પહેલાં"},"-1":"છેલ્લું ત્રિમાસિક"},"month":{"0":"આ મહિને","1":"આવતા મહિને","future":{"one":"{0} મહિનામાં","other":"{0} મહિનામાં"},"past":{"one":"{0} મહિના પહેલાં","other":"{0} મહિના પહેલાં"},"-1":"ગયા મહિને"},"month-short":{"0":"આ મહિને","1":"આવતા મહિને","future":{"one":"{0} મહિનામાં","other":"{0} મહિનામાં"},"past":{"one":"{0} મહિના પહેલાં","other":"{0} મહિના પહેલાં"},"-1":"ગયા મહિને"},"month-narrow":{"0":"આ મહિને","1":"આવતા મહિને","future":{"one":"{0} મહિનામાં","other":"{0} મહિનામાં"},"past":{"one":"{0} મહિના પહેલાં","other":"{0} મહિના પહેલાં"},"-1":"ગયા મહિને"},"week":{"0":"આ અઠવાડિયે","1":"આવતા અઠવાડિયે","future":{"one":"{0} અઠવાડિયામાં","other":"{0} અઠવાડિયામાં"},"past":{"one":"{0} અઠવાડિયા પહેલાં","other":"{0} અઠવાડિયા પહેલાં"},"-1":"ગયા અઠવાડિયે"},"week-short":{"0":"આ અઠવાડિયે","1":"આવતા અઠવાડિયે","future":{"one":"{0} અઠ. માં","other":"{0} અઠ. માં"},"past":{"one":"{0} અઠ. પહેલાં","other":"{0} અઠ. પહેલાં"},"-1":"ગયા અઠવાડિયે"},"week-narrow":{"0":"આ અઠવાડિયે","1":"આવતા અઠવાડિયે","future":{"one":"{0} અઠ. માં","other":"{0} અઠ. માં"},"past":{"one":"{0} અઠ. પહેલાં","other":"{0} અઠ. પહેલાં"},"-1":"ગયા અઠવાડિયે"},"day":{"0":"આજે","1":"આવતીકાલે","2":"પરમદિવસે","future":{"one":"{0} દિવસમાં","other":"{0} દિવસમાં"},"past":{"one":"{0} દિવસ પહેલાં","other":"{0} દિવસ પહેલાં"},"-2":"ગયા પરમદિવસે","-1":"ગઈકાલે"},"day-short":{"0":"આજે","1":"આવતીકાલે","2":"પરમદિવસે","future":{"one":"{0} દિવસમાં","other":"{0} દિવસમાં"},"past":{"one":"{0} દિવસ પહેલાં","other":"{0} દિવસ પહેલાં"},"-2":"ગયા પરમદિવસે","-1":"ગઈકાલે"},"day-narrow":{"0":"આજે","1":"આવતીકાલે","2":"પરમદિવસે","future":{"one":"{0} દિવસમાં","other":"{0} દિવસમાં"},"past":{"one":"{0} દિવસ પહેલાં","other":"{0} દિવસ પહેલાં"},"-2":"ગયા પરમદિવસે","-1":"ગઈકાલે"},"hour":{"0":"આ કલાક","future":{"one":"{0} કલાકમાં","other":"{0} કલાકમાં"},"past":{"one":"{0} કલાક પહેલાં","other":"{0} કલાક પહેલાં"}},"hour-short":{"0":"આ કલાક","future":{"one":"{0} કલાકમાં","other":"{0} કલાકમાં"},"past":{"one":"{0} કલાક પહેલાં","other":"{0} કલાક પહેલાં"}},"hour-narrow":{"0":"આ કલાક","future":{"one":"{0} કલાકમાં","other":"{0} કલાકમાં"},"past":{"one":"{0} કલાક પહેલાં","other":"{0} કલાક પહેલાં"}},"minute":{"0":"આ મિનિટ","future":{"one":"{0} મિનિટમાં","other":"{0} મિનિટમાં"},"past":{"one":"{0} મિનિટ પહેલાં","other":"{0} મિનિટ પહેલાં"}},"minute-short":{"0":"આ મિનિટ","future":{"one":"{0} મિનિટમાં","other":"{0} મિનિટમાં"},"past":{"one":"{0} મિનિટ પહેલાં","other":"{0} મિનિટ પહેલાં"}},"minute-narrow":{"0":"આ મિનિટ","future":{"one":"{0} મિનિટમાં","other":"{0} મિનિટમાં"},"past":{"one":"{0} મિનિટ પહેલાં","other":"{0} મિનિટ પહેલાં"}},"second":{"0":"હમણાં","future":{"one":"{0} સેકંડમાં","other":"{0} સેકંડમાં"},"past":{"one":"{0} સેકંડ પહેલાં","other":"{0} સેકંડ પહેલાં"}},"second-short":{"0":"હમણાં","future":{"one":"{0} સેકંડમાં","other":"{0} સેકંડમાં"},"past":{"one":"{0} સેકંડ પહેલાં","other":"{0} સેકંડ પહેલાં"}},"second-narrow":{"0":"હમણાં","future":{"one":"{0} સેકંડમાં","other":"{0} સેકંડમાં"},"past":{"one":"{0} સેકંડ પહેલાં","other":"{0} સેકંડ પહેલાં"}}}},"availableLocales":["gu"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
