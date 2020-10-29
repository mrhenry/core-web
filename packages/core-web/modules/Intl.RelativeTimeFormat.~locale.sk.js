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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sk").length
)) {
// Intl.RelativeTimeFormat.~locale.sk
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"sk":{"nu":["latn"],"year":{"0":"tento rok","1":"budúci rok","future":{"one":"o {0} rok","few":"o {0} roky","many":"o {0} roka","other":"o {0} rokov"},"past":{"one":"pred {0} rokom","few":"pred {0} rokmi","many":"pred {0} roka","other":"pred {0} rokmi"},"-1":"minulý rok"},"year-short":{"0":"tento rok","1":"budúci rok","future":{"one":"o {0} r.","few":"o {0} r.","many":"o {0} r.","other":"o {0} r."},"past":{"one":"pred {0} r.","few":"pred {0} r.","many":"pred {0} r.","other":"pred {0} r."},"-1":"minulý rok"},"year-narrow":{"0":"tento rok","1":"budúci rok","future":{"one":"o {0} r.","few":"o {0} r.","many":"o {0} r.","other":"o {0} r."},"past":{"one":"pred {0} r.","few":"pred {0} r.","many":"pred {0} r.","other":"pred {0} r."},"-1":"minulý rok"},"quarter":{"0":"tento štvrťrok","1":"budúci štvrťrok","future":{"one":"o {0} štvrťrok","few":"o {0} štvrťroky","many":"o {0} štvrťroka","other":"o {0} štvrťrokov"},"past":{"one":"pred {0} štvrťrokom","few":"pred {0} štvrťrokmi","many":"pred {0} štvrťroka","other":"pred {0} štvrťrokmi"},"-1":"minulý štvrťrok"},"quarter-short":{"0":"tento štvrťr.","1":"budúci štvrťr.","future":{"one":"o {0} štvrťr.","few":"o {0} štvrťr.","many":"o {0} štvrťr.","other":"o {0} štvrťr."},"past":{"one":"pred {0} štvrťr.","few":"pred {0} štvrťr.","many":"pred {0} štvrťr.","other":"pred {0} štvrťr."},"-1":"minulý štvrťr."},"quarter-narrow":{"0":"tento štvrťr.","1":"budúci štvrťr.","future":{"one":"o {0} štvrťr.","few":"o {0} štvrťr.","many":"o {0} štvrťr.","other":"o {0} štvrťr."},"past":{"one":"pred {0} štvrťr.","few":"pred {0} štvrťr.","many":"pred {0} štvrťr.","other":"pred {0} štvrťr."},"-1":"minulý štvrťr."},"month":{"0":"tento mesiac","1":"budúci mesiac","future":{"one":"o {0} mesiac","few":"o {0} mesiace","many":"o {0} mesiaca","other":"o {0} mesiacov"},"past":{"one":"pred {0} mesiacom","few":"pred {0} mesiacmi","many":"pred {0} mesiaca","other":"pred {0} mesiacmi"},"-1":"minulý mesiac"},"month-short":{"0":"tento mes.","1":"budúci mes.","future":{"one":"o {0} mes.","few":"o {0} mes.","many":"o {0} mes.","other":"o {0} mes."},"past":{"one":"pred {0} mes.","few":"pred {0} mes.","many":"pred {0} mes.","other":"pred {0} mes."},"-1":"minulý mes."},"month-narrow":{"0":"tento mes.","1":"budúci mes.","future":{"one":"o {0} mes.","few":"o {0} mes.","many":"o {0} mes.","other":"o {0} mes."},"past":{"one":"pred {0} mes.","few":"pred {0} mes.","many":"pred {0} mes.","other":"pred {0} mes."},"-1":"minulý mes."},"week":{"0":"tento týždeň","1":"budúci týždeň","future":{"one":"o {0} týždeň","few":"o {0} týždne","many":"o {0} týždňa","other":"o {0} týždňov"},"past":{"one":"pred {0} týždňom","few":"pred {0} týždňami","many":"pred {0} týždňa","other":"pred {0} týždňami"},"-1":"minulý týždeň"},"week-short":{"0":"tento týž.","1":"budúci týž.","future":{"one":"o {0} týž.","few":"o {0} týž.","many":"o {0} týž.","other":"o {0} týž."},"past":{"one":"pred {0} týž.","few":"pred {0} týž.","many":"pred {0} týž.","other":"pred {0} týž."},"-1":"minulý týž."},"week-narrow":{"0":"tento týž.","1":"budúci týž.","future":{"one":"o {0} týž.","few":"o {0} týž.","many":"o {0} týž.","other":"o {0} týž."},"past":{"one":"pred {0} týž.","few":"pred {0} týž.","many":"pred {0} týž.","other":"pred {0} týž."},"-1":"minulý týž."},"day":{"0":"dnes","1":"zajtra","2":"pozajtra","future":{"one":"o {0} deň","few":"o {0} dni","many":"o {0} dňa","other":"o {0} dní"},"past":{"one":"pred {0} dňom","few":"pred {0} dňami","many":"pred {0} dňa","other":"pred {0} dňami"},"-2":"predvčerom","-1":"včera"},"day-short":{"0":"dnes","1":"zajtra","2":"pozajtra","future":{"one":"o {0} d.","few":"o {0} d.","many":"o {0} d.","other":"o {0} d."},"past":{"one":"pred {0} d.","few":"pred {0} d.","many":"pred {0} d.","other":"pred {0} d."},"-2":"predvčerom","-1":"včera"},"day-narrow":{"0":"dnes","1":"zajtra","2":"pozajtra","future":{"one":"o {0} d.","few":"o {0} d.","many":"o {0} d.","other":"o {0} d."},"past":{"one":"pred {0} d.","few":"pred {0} d.","many":"pred {0} d.","other":"pred {0} d."},"-2":"predvčerom","-1":"včera"},"hour":{"0":"v tejto hodine","future":{"one":"o {0} hodinu","few":"o {0} hodiny","many":"o {0} hodiny","other":"o {0} hodín"},"past":{"one":"pred {0} hodinou","few":"pred {0} hodinami","many":"pred {0} hodinou","other":"pred {0} hodinami"}},"hour-short":{"0":"v tejto hodine","future":{"one":"o {0} h","few":"o {0} h","many":"o {0} h","other":"o {0} h"},"past":{"one":"pred {0} h","few":"pred {0} h","many":"pred {0} h","other":"pred {0} h"}},"hour-narrow":{"0":"v tejto hodine","future":{"one":"o {0} h","few":"o {0} h","many":"o {0} h","other":"o {0} h"},"past":{"one":"pred {0} h","few":"pred {0} h","many":"pred {0} h","other":"pred {0} h"}},"minute":{"0":"v tejto minúte","future":{"one":"o {0} minútu","few":"o {0} minúty","many":"o {0} minúty","other":"o {0} minút"},"past":{"one":"pred {0} minútou","few":"pred {0} minútami","many":"pred {0} minúty","other":"pred {0} minútami"}},"minute-short":{"0":"v tejto minúte","future":{"one":"o {0} min","few":"o {0} min","many":"o {0} min","other":"o {0} min"},"past":{"one":"pred {0} min","few":"pred {0} min","many":"pred {0} min","other":"pred {0} min"}},"minute-narrow":{"0":"v tejto minúte","future":{"one":"o {0} min","few":"o {0} min","many":"o {0} min","other":"o {0} min"},"past":{"one":"pred {0} min","few":"pred {0} min","many":"pred {0} min","other":"pred {0} min"}},"second":{"0":"teraz","future":{"one":"o {0} sekundu","few":"o {0} sekundy","many":"o {0} sekundy","other":"o {0} sekúnd"},"past":{"one":"pred {0} sekundou","few":"pred {0} sekundami","many":"pred {0} sekundy","other":"pred {0} sekundami"}},"second-short":{"0":"teraz","future":{"one":"o {0} s","few":"o {0} s","many":"o {0} s","other":"o {0} s"},"past":{"one":"pred {0} s","few":"pred {0} s","many":"pred {0} s","other":"pred {0} s"}},"second-narrow":{"0":"teraz","future":{"one":"o {0} s","few":"o {0} s","many":"o {0} s","other":"o {0} s"},"past":{"one":"pred {0} s","few":"pred {0} s","many":"pred {0} s","other":"pred {0} s"}}}},"availableLocales":["sk"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
