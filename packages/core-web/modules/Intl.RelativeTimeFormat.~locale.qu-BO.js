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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("qu-BO").length
)) {
// Intl.RelativeTimeFormat.~locale.qu-BO
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"qu-BO":{"nu":["latn"],"year":{"0":"kunan wata","1":"hamuq wata","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"qayna wata"},"year-short":{"0":"kunan wata","1":"hamuq wata","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"qayna wata"},"year-narrow":{"0":"kunan wata","1":"hamuq wata","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"qayna wata"},"quarter":{"0":"kunan kimsa killa","1":"hamuq kimsa killa","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"qayna kimsa killa"},"quarter-short":{"0":"kunan kimsa killa","1":"hamuq kimsa killa","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"qayna kimsa killa"},"quarter-narrow":{"0":"kunan kimsa killa","1":"hamuq kimsa killa","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"qayna kimsa killa"},"month":{"0":"kunan killa","1":"hamuq killa","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"qayna killa"},"month-short":{"0":"kunan killa","1":"hamuq killa","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"qayna killa"},"month-narrow":{"0":"kunan killa","1":"hamuq killa","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"qayna killa"},"week":{"0":"kunan semana","1":"hamuq semana","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"qayna semana"},"week-short":{"0":"kunan semana","1":"hamuq semana","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"qayna semana"},"week-narrow":{"0":"kunan semana","1":"hamuq semana","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"qayna semana"},"day":{"0":"kunan punchaw","1":"paqarin","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"qayna punchaw"},"day-short":{"0":"kunan punchaw","1":"paqarin","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"qayna punchaw"},"day-narrow":{"0":"kunan punchaw","1":"paqarin","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"qayna punchaw"},"hour":{"0":"kay hora","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-short":{"0":"kay hora","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-narrow":{"0":"kay hora","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"minute":{"0":"kay minuto","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-short":{"0":"kay minuto","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-narrow":{"0":"kay minuto","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"second":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-short":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-narrow":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}}},"availableLocales":["qu-BO"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
