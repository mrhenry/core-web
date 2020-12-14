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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("qu-EC").length
)) {
// Intl.RelativeTimeFormat.~locale.qu-EC
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"kunan wata","1":"hamuq wata","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"qayna wata"},"year-short":{"0":"kunan wata","1":"hamuq wata","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"qayna wata"},"year-narrow":{"0":"kunan wata","1":"hamuq wata","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"qayna wata"},"quarter":{"0":"kunan kimsa killa","1":"hamuq kimsa killa","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"qayna kimsa killa"},"quarter-short":{"0":"kunan kimsa killa","1":"hamuq kimsa killa","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"qayna kimsa killa"},"quarter-narrow":{"0":"kunan kimsa killa","1":"hamuq kimsa killa","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"qayna kimsa killa"},"month":{"0":"kunan killa","1":"hamuq killa","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"qayna killa"},"month-short":{"0":"kunan killa","1":"hamuq killa","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"qayna killa"},"month-narrow":{"0":"kunan killa","1":"hamuq killa","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"qayna killa"},"week":{"0":"kunan semana","1":"hamuq semana","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"qayna semana"},"week-short":{"0":"kunan semana","1":"hamuq semana","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"qayna semana"},"week-narrow":{"0":"kunan semana","1":"hamuq semana","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"qayna semana"},"day":{"0":"kunan punchaw","1":"paqarin","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"qayna punchaw"},"day-short":{"0":"kunan punchaw","1":"paqarin","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"qayna punchaw"},"day-narrow":{"0":"kunan punchaw","1":"paqarin","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"qayna punchaw"},"hour":{"0":"kay hora","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-short":{"0":"kay hora","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-narrow":{"0":"kay hora","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"minute":{"0":"kay minuto","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-short":{"0":"kay minuto","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-narrow":{"0":"kay minuto","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"second":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-short":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-narrow":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}},"locale":"qu-EC"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
