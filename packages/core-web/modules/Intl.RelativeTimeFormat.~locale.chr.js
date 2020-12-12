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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("chr").length
)) {
// Intl.RelativeTimeFormat.~locale.chr
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ᎯᎠ ᏧᏕᏘᏴᏒᏘ","1":"ᎡᏘᏴᎢ","future":{"one":"ᎾᎿ {0} ᎤᏕᏘᏴᏌᏗᏒᎢ","other":"ᎾᎿ {0} ᎢᏧᏕᏘᏴᏌᏗᏒᎢ"},"past":{"one":"{0} ᎤᏕᏘᏴᏌᏗᏒᎢ ᏥᎨᏒ","other":"{0} ᎢᏧᏕᏘᏴᏌᏗᏒᎢ ᏥᎨᏒ"},"-1":"ᎡᏘ ᏥᎨᏒ"},"year-short":{"0":"ᎯᎠ ᏧᏕᏘᏴᏒᏘ.","1":"ᎡᏘᏴᎢ.","future":{"one":"ᎾᎿ {0} ᎤᏕ.","other":"ᎾᎿ {0} ᎤᏕ."},"past":{"one":"{0} ᎤᏕ. ᏥᎨᏒ","other":"{0} ᎤᏕ. ᏥᎨᏒ"},"-1":"ᎡᏘ. ᏥᎨᏒ"},"year-narrow":{"0":"ᎯᎠ ᏧᏕᏘᏴᏒᏘ.","1":"ᎡᏘᏴᎢ.","future":{"one":"ᎾᎿ {0} ᎤᏕ.","other":"ᎾᎿ {0} ᎤᏕ."},"past":{"one":"{0} ᎤᏕ. ᏥᎨᏒ","other":"{0} ᎤᏕ. ᏥᎨᏒ"},"-1":"ᎡᏘ. ᏥᎨᏒ"},"quarter":{"0":"ᎯᎠ ᎩᏄᏙᏗ","1":"ᏔᎵᏁ ᎩᏄᏙᏗ","future":{"one":"ᎾᎿ {0} ᎩᏄᏙᏗ","other":"ᎾᎿ {0} ᎩᏄᏙᏗ"},"past":{"one":"ᎾᎿ {0} ᎩᏄᏙᏗ ᏥᎨᏒ","other":"{0} ᎩᏄᏙᏗ ᏥᎨᏒ"},"-1":"ᎩᏄᏙᏗ ᏥᎨᏒ"},"quarter-short":{"0":"ᎯᎠ ᎩᏄᏙᏗ","1":"ᏔᎵᏁ ᎩᏄᏙᏗ","future":{"one":"ᎾᎿ {0} ᎩᏄᏘ.","other":"ᎾᎿ {0} ᎩᏄᏘ."},"past":{"one":"{0} ᎩᏄᏘ. ᏥᎨᏒ","other":"{0} ᎩᏄᏘ. ᏥᎨᏒ"},"-1":"ᎩᏄᏙᏗ ᏥᎨᏒ"},"quarter-narrow":{"0":"ᎯᎠ ᎩᏄᏙᏗ","1":"ᏔᎵᏁ ᎩᏄᏙᏗ","future":{"one":"ᎾᎿ {0} ᎩᏄᏘ.","other":"ᎾᎿ {0} ᎩᏄᏘ."},"past":{"one":"{0} ᎩᏄᏘ. ᏥᎨᏒ","other":"{0} ᎩᏄᏘ. ᏥᎨᏒ"},"-1":"ᎩᏄᏙᏗ ᏥᎨᏒ"},"month":{"0":"ᎯᎠ ᎧᎸᎢ","1":"ᏔᎵᏁ ᎧᎸᎢ","future":{"one":"ᎾᎿ {0} ᎧᎸᎢ","other":"ᎾᎿ {0} ᏗᎧᎸᎢ"},"past":{"one":"{0} ᎧᎸᎢ ᏥᎨᏒ","other":"{0} ᏗᎧᎸᎢ ᏥᎨᏒ"},"-1":"ᎧᎸᎢ ᏥᎨᏒ"},"month-short":{"0":"ᎯᎠ ᎧᎸ.","1":"ᎯᎠ ᎧᎸ.","future":{"one":"ᎾᎿ {0} ᎧᎸ.","other":"ᎾᎿ {0} ᎧᎸ."},"past":{"one":"{0} ᎧᎸ. ᏥᎨᏒ","other":"{0} ᎧᎸ. ᏥᎨᏒ"},"-1":"ᎧᎸ. ᏥᎨᏒ"},"month-narrow":{"0":"ᎯᎠ ᎧᎸ.","1":"ᏔᎵᏁ ᎧᎸ.","future":{"one":"ᎾᎿ {0} ᎧᎸ.","other":"ᎾᎿ {0} ᎧᎸ."},"past":{"one":"{0} ᎧᎸ. ᏥᎨᏒ","other":"{0} ᎧᎸ. ᏥᎨᏒ"},"-1":"ᎧᎸ. ᏥᎨᏒ"},"week":{"0":"ᎯᎠ ᎠᎵᎵᏌ","1":"ᏐᏆᎴᏅᎲ","future":{"one":"ᎾᎿ {0} ᏒᎾᏙᏓᏆᏍᏗ","other":"ᎾᎿ {0} ᎢᏳᎾᏙᏓᏆᏍᏗ"},"past":{"one":"{0} ᏒᎾᏙᏓᏆᏍᏗ ᏥᎨᏒ","other":"{0} ᎢᏳᎾᏙᏓᏆᏍᏗ ᏥᎨᏒ"},"-1":"ᏥᏛᎵᏱᎵᏒᎢ"},"week-short":{"0":"ᎯᎠ ᎠᎵᎵᏌ.","1":"ᏐᏆᎴᏅᎲ.","future":{"one":"ᎾᎿ {0} ᏒᎾ.","other":"ᎾᎿ {0} ᏒᎾ."},"past":{"one":"{0} ᏒᎾ. ᏥᎨᏒ","other":"{0} ᏒᎾ. ᏥᎨᏒ"},"-1":"ᏥᏛᎵᏱᎵᏒᎢ."},"week-narrow":{"0":"ᎯᎠ ᎠᎵᎵᏌ.","1":"ᏐᏆᎴᏅᎲ.","future":{"one":"ᎾᎿ {0} ᏒᎾ.","other":"ᎾᎿ {0} ᏒᎾ."},"past":{"one":"{0} ᏒᎾ. ᏥᎨᏒ","other":"{0} ᏒᎾ. ᏥᎨᏒ"},"-1":"ᏥᏛᎵᏱᎵᏒᎢ."},"day":{"0":"ᎪᎯ ᎢᎦ","1":"ᏌᎾᎴᎢ","future":{"one":"ᎾᎿ {0} ᎢᎦ","other":"ᎾᎿ {0} ᎯᎸᏍᎩ ᏧᏒᎯᏛ"},"past":{"one":"{0} ᎢᎦ ᏥᎨᏒ","other":"{0} ᎯᎸᏍᎩ ᏧᏒᎯᏛ ᏥᎨᏒ"},"-1":"ᏒᎯ"},"day-short":{"0":"ᎪᎯ ᎢᎦ","1":"ᏌᎾᎴᎢ","future":{"one":"ᎾᎿ {0} ᎢᎦ","other":"ᎾᎿ {0} ᎯᎸᏍᎩ ᏧᏒᎯᏛ"},"past":{"one":"{0} ᎢᎦ ᏥᎨᏒ","other":"{0} ᎯᎸᏍᎩ ᏧᏒᎯᏛ ᏥᎨᏒ"},"-1":"ᏒᎯ"},"day-narrow":{"0":"ᎪᎯ ᎢᎦ","1":"ᏌᎾᎴᎢ","future":{"one":"ᎾᎿ {0} ᎢᎦ","other":"ᎾᎿ {0} ᎯᎸᏍᎩ ᏧᏒᎯᏛ"},"past":{"one":"{0} ᎢᎦ ᏥᎨᏒ","other":"{0} ᎯᎸᏍᎩ ᏧᏒᎯᏛ ᏥᎨᏒ"},"-1":"ᏒᎯ"},"hour":{"0":"ᎯᎠ ᏑᏟᎶᏓ","future":{"one":"ᎾᎿ {0} ᏑᏟᎶᏓ","other":"ᎾᎿ {0} ᎢᏳᏟᎶᏓ"},"past":{"one":"{0} ᏑᏟᎶᏓ ᏥᎨᏒ","other":"{0} ᎢᏳᏟᎶᏓ ᏥᎨᏒ"}},"hour-short":{"0":"ᎯᎠ ᏑᏟᎶᏓ","future":{"one":"ᎾᎿ {0} ᏑᏟ.","other":"ᎾᎿ {0} ᏑᏟ."},"past":{"one":"{0} ᏑᏟ. ᏥᎨᏒ","other":"{0} ᏑᏟ. ᏥᎨᏒ"}},"hour-narrow":{"0":"ᎯᎠ ᏑᏟᎶᏓ","future":{"one":"ᎾᎿ {0} ᏑᏟ.","other":"ᎾᎿ {0} ᏑᏟ."},"past":{"one":"{0} ᏑᏟ. ᏥᎨᏒ","other":"{0} ᏑᏟ. ᏥᎨᏒ"}},"minute":{"0":"ᎯᎠ ᎢᏯᏔᏬᏍᏔᏅ","future":{"one":"ᎾᎿ {0} ᎢᏯᏔᏬᏍᏔᏅ","other":"ᎾᎿ {0} ᎢᏯᏔᏬᏍᏔᏅ"},"past":{"one":"{0} ᎢᏯᏔᏬᏍᏔᏅ ᏥᎨᏒ","other":"{0} ᎢᏯᏔᏬᏍᏔᏅ ᏥᎨᏒ"}},"minute-short":{"0":"ᎯᎠ ᎢᏯᏔᏬᏍᏔᏅ","future":{"one":"ᎾᎿ {0} ᎢᏯᏔ.","other":"ᎾᎿ {0} ᎢᏯᏔ."},"past":{"one":"{0} ᎢᏯᏔ. ᏥᎨᏒ","other":"{0} ᎢᏯᏔ. ᏥᎨᏒ"}},"minute-narrow":{"0":"ᎯᎠ ᎢᏯᏔᏬᏍᏔᏅ","future":{"one":"ᎾᎿ {0} ᎢᏯᏔ.","other":"ᎾᎿ {0} ᎢᏯᏔ."},"past":{"one":"{0} ᎢᏯᏔ. ᏥᎨᏒ","other":"{0} ᎢᏯᏔ. ᏥᎨᏒ"}},"second":{"0":"ᏃᏊ","future":{"one":"ᎾᎿ {0} ᎠᏎᏢ","other":"ᎾᎿ {0} ᏓᏓᎾᏩᏍᎬ ᏥᎨᏒ"},"past":{"one":"{0} ᎠᏎᏢ ᏥᎨᏒ","other":"{0} ᏓᏓᎾᏩᏍᎬ ᏥᎨᏒ"}},"second-short":{"0":"ᏃᏊ","future":{"one":"ᎾᎿ {0} ᎠᏎ.","other":"ᎾᎿ {0} ᎠᏎ."},"past":{"one":"{0} ᎠᏎ. ᏥᎨᏒ","other":"{0} ᎠᏎ. ᏥᎨᏒ"}},"second-narrow":{"0":"ᏃᏊ","future":{"one":"ᎾᎿ {0} ᎠᏎ.","other":"ᎾᎿ {0} ᎠᏎ."},"past":{"one":"{0} ᎠᏎ. ᏥᎨᏒ","other":"{0} ᎠᏎ. ᏥᎨᏒ"}}},"locale":"chr"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
