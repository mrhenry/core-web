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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("is").length
)) {
// Intl.RelativeTimeFormat.~locale.is
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"is":{"nu":["latn"],"year":{"0":"á þessu ári","1":"á næsta ári","future":{"one":"eftir {0} ár","other":"eftir {0} ár"},"past":{"one":"fyrir {0} ári","other":"fyrir {0} árum"},"-1":"á síðasta ári"},"year-short":{"0":"á þessu ári","1":"á næsta ári","future":{"one":"eftir {0} ár","other":"eftir {0} ár"},"past":{"one":"fyrir {0} ári","other":"fyrir {0} árum"},"-1":"á síðasta ári"},"year-narrow":{"0":"á þessu ári","1":"á næsta ári","future":{"one":"eftir {0} ár","other":"eftir {0} ár"},"past":{"one":"fyrir {0} árum","other":"fyrir {0} árum"},"-1":"á síðasta ári"},"quarter":{"0":"þessi ársfjórðungur","1":"næsti ársfjórðungur","future":{"one":"eftir {0} ársfjórðung","other":"eftir {0} ársfjórðunga"},"past":{"one":"fyrir {0} ársfjórðungi","other":"fyrir {0} ársfjórðungum"},"-1":"síðasti ársfjórðungur"},"quarter-short":{"0":"þessi ársfj.","1":"næsti ársfj.","future":{"one":"eftir {0} ársfj.","other":"eftir {0} ársfj."},"past":{"one":"fyrir {0} ársfj.","other":"fyrir {0} ársfj."},"-1":"síðasti ársfj."},"quarter-narrow":{"0":"þessi ársfj.","1":"næsti ársfj.","future":{"one":"eftir {0} ársfj.","other":"eftir {0} ársfj."},"past":{"one":"fyrir {0} ársfj.","other":"fyrir {0} ársfj."},"-1":"síðasti ársfj."},"month":{"0":"í þessum mánuði","1":"í næsta mánuði","future":{"one":"eftir {0} mánuð","other":"eftir {0} mánuði"},"past":{"one":"fyrir {0} mánuði","other":"fyrir {0} mánuðum"},"-1":"í síðasta mánuði"},"month-short":{"0":"í þessum mán.","1":"í næsta mán.","future":{"one":"eftir {0} mán.","other":"eftir {0} mán."},"past":{"one":"fyrir {0} mán.","other":"fyrir {0} mán."},"-1":"í síðasta mán."},"month-narrow":{"0":"í þessum mán.","1":"í næsta mán.","future":{"one":"eftir {0} mán.","other":"eftir {0} mán."},"past":{"one":"fyrir {0} mán.","other":"fyrir {0} mán."},"-1":"í síðasta mán."},"week":{"0":"í þessari viku","1":"í næstu viku","future":{"one":"eftir {0} viku","other":"eftir {0} vikur"},"past":{"one":"fyrir {0} viku","other":"fyrir {0} vikum"},"-1":"í síðustu viku"},"week-short":{"0":"í þessari viku","1":"í næstu viku","future":{"one":"eftir {0} viku","other":"eftir {0} vikur"},"past":{"one":"fyrir {0} viku","other":"fyrir {0} vikum"},"-1":"í síðustu viku"},"week-narrow":{"0":"í þessari viku","1":"í næstu viku","future":{"one":"+{0} viku","other":"+{0} vikur"},"past":{"one":"-{0} viku","other":"-{0} vikur"},"-1":"í síðustu viku"},"day":{"0":"í dag","1":"á morgun","2":"eftir tvo daga","future":{"one":"eftir {0} dag","other":"eftir {0} daga"},"past":{"one":"fyrir {0} degi","other":"fyrir {0} dögum"},"-2":"í fyrradag","-1":"í gær"},"day-short":{"0":"í dag","1":"á morgun","2":"eftir tvo daga","future":{"one":"eftir {0} dag","other":"eftir {0} daga"},"past":{"one":"fyrir {0} degi","other":"fyrir {0} dögum"},"-2":"í fyrradag","-1":"í gær"},"day-narrow":{"0":"í dag","1":"á morgun","2":"eftir tvo daga","future":{"one":"+{0} dag","other":"+{0} daga"},"past":{"one":"-{0} degi","other":"-{0} dögum"},"-2":"í fyrradag","-1":"í gær"},"hour":{"0":"þessa stundina","future":{"one":"eftir {0} klukkustund","other":"eftir {0} klukkustundir"},"past":{"one":"fyrir {0} klukkustund","other":"fyrir {0} klukkustundum"}},"hour-short":{"0":"þessa stundina","future":{"one":"eftir {0} klst.","other":"eftir {0} klst."},"past":{"one":"fyrir {0} klst.","other":"fyrir {0} klst."}},"hour-narrow":{"0":"þessa stundina","future":{"one":"+{0} klst.","other":"+{0} klst."},"past":{"one":"-{0} klst.","other":"-{0} klst."}},"minute":{"0":"á þessari mínútu","future":{"one":"eftir {0} mínútu","other":"eftir {0} mínútur"},"past":{"one":"fyrir {0} mínútu","other":"fyrir {0} mínútum"}},"minute-short":{"0":"á þessari mínútu","future":{"one":"eftir {0} mín.","other":"eftir {0} mín."},"past":{"one":"fyrir {0} mín.","other":"fyrir {0} mín."}},"minute-narrow":{"0":"á þessari mínútu","future":{"one":"+{0} mín.","other":"+{0} mín."},"past":{"one":"-{0} mín.","other":"-{0} mín."}},"second":{"0":"núna","future":{"one":"eftir {0} sekúndu","other":"eftir {0} sekúndur"},"past":{"one":"fyrir {0} sekúndu","other":"fyrir {0} sekúndum"}},"second-short":{"0":"núna","future":{"one":"eftir {0} sek.","other":"eftir {0} sek."},"past":{"one":"fyrir {0} sek.","other":"fyrir {0} sek."}},"second-narrow":{"0":"núna","future":{"one":"+{0} sek.","other":"+{0} sek."},"past":{"one":"-{0} sek.","other":"-{0} sek."}}}},"availableLocales":["is"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
