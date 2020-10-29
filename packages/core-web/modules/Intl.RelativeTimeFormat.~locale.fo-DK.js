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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("fo-DK").length
)) {
// Intl.RelativeTimeFormat.~locale.fo-DK
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"fo-DK":{"nu":["latn"],"year":{"0":"í ár","1":"næsta ár","future":{"one":"um {0} ár","other":"um {0} ár"},"past":{"one":"{0} ár síðan","other":"{0} ár síðan"},"-1":"í fjør"},"year-short":{"0":"í ár","1":"næsta ár","future":{"one":"um {0} ár","other":"um {0} ár"},"past":{"one":"{0} ár síðan","other":"{0} ár síðan"},"-1":"í fjør"},"year-narrow":{"0":"í ár","1":"næsta ár","future":{"one":"um {0} ár","other":"um {0} ár"},"past":{"one":"{0} ár síðan","other":"{0} ár síðan"},"-1":"í fjør"},"quarter":{"0":"hendan ársfjórðingin","1":"næsta ársfjórðing","future":{"one":"um {0} ársfjórðing","other":"um {0} ársfjórðingar"},"past":{"one":"{0} ársfjórðing síðan","other":"{0} ársfjórðingar síðan"},"-1":"seinasta ársfjórðing"},"quarter-short":{"0":"hendan ársfjórðingin","1":"næsta ársfjórðing","future":{"one":"um {0} ársfj.","other":"um {0} ársfj."},"past":{"one":"{0} ársfj. síðan","other":"{0} ársfj. síðan"},"-1":"seinasta ársfjórðing"},"quarter-narrow":{"0":"hendan ársfjórðingin","1":"næsta ársfjórðing","future":{"one":"um {0} ársfj.","other":"um {0} ársfj."},"past":{"one":"{0} ársfj. síðan","other":"{0} ársfj. síðan"},"-1":"seinasta ársfjórðing"},"month":{"0":"henda mánaðin","1":"næsta mánað","future":{"one":"um {0} mánað","other":"um {0} mánaðir"},"past":{"one":"{0} mánað síðan","other":"{0} mánaðir síðan"},"-1":"seinasta mánað"},"month-short":{"0":"henda mnð.","1":"næsta mnð.","future":{"one":"um {0} mnð.","other":"um {0} mnð."},"past":{"one":"{0} mnð. síðan","other":"{0} mnð. síðan"},"-1":"seinasta mnð."},"month-narrow":{"0":"henda mnð.","1":"næsta mnð.","future":{"one":"um {0} mnð.","other":"um {0} mnð."},"past":{"one":"{0} mnð. síðan","other":"{0} mnð. síðan"},"-1":"seinasta mnð."},"week":{"0":"hesu viku","1":"næstu viku","future":{"one":"um {0} viku","other":"um {0} vikur"},"past":{"one":"{0} vika síðan","other":"{0} vikur síðan"},"-1":"seinastu viku"},"week-short":{"0":"hesu vi.","1":"næstu vi.","future":{"one":"um {0} vi.","other":"um {0} vi."},"past":{"one":"{0} vi. síðan","other":"{0} vi. síðan"},"-1":"seinastu vi."},"week-narrow":{"0":"hesu v.","1":"næstu v.","future":{"one":"um {0} v.","other":"um {0} v."},"past":{"one":"{0} v. síðan","other":"{0} v. síðan"},"-1":"seinastu v."},"day":{"0":"í dag","1":"í morgin","2":"í ovurmorgin","future":{"one":"um {0} dag","other":"um {0} dagar"},"past":{"one":"{0} dagur síðan","other":"{0} dagar síðan"},"-2":"fyrradagin","-1":"í gjár"},"day-short":{"0":"í dag","1":"í morgin","2":"í ovurmorgin","future":{"one":"um {0} da.","other":"um {0} da."},"past":{"one":"{0} da. síðan","other":"{0} da. síðan"},"-2":"fyrradagin","-1":"í gjár"},"day-narrow":{"0":"í dag","1":"í morgin","2":"í ovurmorgin","future":{"one":"um {0} d.","other":"um {0} d."},"past":{"one":"{0} d. síðan","other":"{0} d. síðan"},"-2":"fyrradagin","-1":"í gjár"},"hour":{"0":"hendan tíman","future":{"one":"um {0} tíma","other":"um {0} tímar"},"past":{"one":"{0} tími síðan","other":"{0} tímar síðan"}},"hour-short":{"0":"hendan tíman","future":{"one":"um {0} t.","other":"um {0} t."},"past":{"one":"{0} t. síðan","other":"{0} t. síðan"}},"hour-narrow":{"0":"hendan tíman","future":{"one":"um {0} t.","other":"um {0} t."},"past":{"one":"{0} t. síðan","other":"{0} t. síðan"}},"minute":{"0":"hendan minuttin","future":{"one":"um {0} minutt","other":"um {0} minuttir"},"past":{"one":"{0} minutt síðan","other":"{0} minuttir síðan"}},"minute-short":{"0":"hendan minuttin","future":{"one":"um {0} min.","other":"um {0} min."},"past":{"one":"{0} min. síðan","other":"{0} min. síðan"}},"minute-narrow":{"0":"hendan minuttin","future":{"one":"um {0} m.","other":"um {0} m."},"past":{"one":"{0} m. síðan","other":"{0} m. síðan"}},"second":{"0":"nú","future":{"one":"um {0} sekund","other":"um {0} sekund"},"past":{"one":"{0} sekund síðan","other":"{0} sekund síðan"}},"second-short":{"0":"nú","future":{"one":"um {0} sek.","other":"um {0} sek."},"past":{"one":"{0} sek. síðan","other":"{0} sek. síðan"}},"second-narrow":{"0":"nú","future":{"one":"um {0} s.","other":"um {0} s."},"past":{"one":"{0} s. síðan","other":"{0} s. síðan"}}}},"availableLocales":["fo-DK"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
