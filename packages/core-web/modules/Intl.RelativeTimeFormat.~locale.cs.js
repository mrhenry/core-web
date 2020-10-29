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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("cs").length
)) {
// Intl.RelativeTimeFormat.~locale.cs
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"cs":{"nu":["latn"],"year":{"0":"tento rok","1":"příští rok","future":{"one":"za {0} rok","few":"za {0} roky","many":"za {0} roku","other":"za {0} let"},"past":{"one":"před {0} rokem","few":"před {0} lety","many":"před {0} roku","other":"před {0} lety"},"-1":"minulý rok"},"year-short":{"0":"tento rok","1":"příští rok","future":{"one":"za {0} r.","few":"za {0} r.","many":"za {0} r.","other":"za {0} l."},"past":{"one":"před {0} r.","few":"před {0} r.","many":"před {0} r.","other":"před {0} l."},"-1":"minulý rok"},"year-narrow":{"0":"tento rok","1":"příští rok","future":{"one":"za {0} r.","few":"za {0} r.","many":"za {0} r.","other":"za {0} l."},"past":{"one":"před {0} r.","few":"před {0} r.","many":"před {0} r.","other":"před {0} l."},"-1":"minulý rok"},"quarter":{"0":"toto čtvrtletí","1":"příští čtvrtletí","future":{"one":"za {0} čtvrtletí","few":"za {0} čtvrtletí","many":"za {0} čtvrtletí","other":"za {0} čtvrtletí"},"past":{"one":"před {0} čtvrtletím","few":"před {0} čtvrtletími","many":"před {0} čtvrtletí","other":"před {0} čtvrtletími"},"-1":"minulé čtvrtletí"},"quarter-short":{"0":"toto čtvrtletí","1":"příští čtvrtletí","future":{"one":"+{0} Q","few":"+{0} Q","many":"+{0} Q","other":"+{0} Q"},"past":{"one":"-{0} Q","few":"-{0} Q","many":"-{0} Q","other":"-{0} Q"},"-1":"minulé čtvrtletí"},"quarter-narrow":{"0":"toto čtvrtletí","1":"příští čtvrtletí","future":{"one":"+{0} Q","few":"+{0} Q","many":"+{0} Q","other":"+{0} Q"},"past":{"one":"-{0} Q","few":"-{0} Q","many":"-{0} Q","other":"-{0} Q"},"-1":"minulé čtvrtletí"},"month":{"0":"tento měsíc","1":"příští měsíc","future":{"one":"za {0} měsíc","few":"za {0} měsíce","many":"za {0} měsíce","other":"za {0} měsíců"},"past":{"one":"před {0} měsícem","few":"před {0} měsíci","many":"před {0} měsíce","other":"před {0} měsíci"},"-1":"minulý měsíc"},"month-short":{"0":"tento měs.","1":"příští měs.","future":{"one":"za {0} měs.","few":"za {0} měs.","many":"za {0} měs.","other":"za {0} měs."},"past":{"one":"před {0} měs.","few":"před {0} měs.","many":"před {0} měs.","other":"před {0} měs."},"-1":"minulý měs."},"month-narrow":{"0":"tento měs.","1":"příští měs.","future":{"one":"za {0} měs.","few":"za {0} měs.","many":"za {0} měs.","other":"za {0} měs."},"past":{"one":"před {0} měs.","few":"před {0} měs.","many":"před {0} měs.","other":"před {0} měs."},"-1":"minulý měs."},"week":{"0":"tento týden","1":"příští týden","future":{"one":"za {0} týden","few":"za {0} týdny","many":"za {0} týdne","other":"za {0} týdnů"},"past":{"one":"před {0} týdnem","few":"před {0} týdny","many":"před {0} týdne","other":"před {0} týdny"},"-1":"minulý týden"},"week-short":{"0":"tento týd.","1":"příští týd.","future":{"one":"za {0} týd.","few":"za {0} týd.","many":"za {0} týd.","other":"za {0} týd."},"past":{"one":"před {0} týd.","few":"před {0} týd.","many":"před {0} týd.","other":"před {0} týd."},"-1":"minulý týd."},"week-narrow":{"0":"tento týd.","1":"příští týd.","future":{"one":"za {0} týd.","few":"za {0} týd.","many":"za {0} týd.","other":"za {0} týd."},"past":{"one":"před {0} týd.","few":"před {0} týd.","many":"před {0} týd.","other":"před {0} týd."},"-1":"minulý týd."},"day":{"0":"dnes","1":"zítra","2":"pozítří","future":{"one":"za {0} den","few":"za {0} dny","many":"za {0} dne","other":"za {0} dní"},"past":{"one":"před {0} dnem","few":"před {0} dny","many":"před {0} dne","other":"před {0} dny"},"-2":"předevčírem","-1":"včera"},"day-short":{"0":"dnes","1":"zítra","2":"pozítří","future":{"one":"za {0} den","few":"za {0} dny","many":"za {0} dne","other":"za {0} dní"},"past":{"one":"před {0} dnem","few":"před {0} dny","many":"před {0} dne","other":"před {0} dny"},"-2":"předevčírem","-1":"včera"},"day-narrow":{"0":"dnes","1":"zítra","2":"pozítří","future":{"one":"za {0} den","few":"za {0} dny","many":"za {0} dne","other":"za {0} dní"},"past":{"one":"před {0} dnem","few":"před {0} dny","many":"před {0} dne","other":"před {0} dny"},"-2":"předevčírem","-1":"včera"},"hour":{"0":"tuto hodinu","future":{"one":"za {0} hodinu","few":"za {0} hodiny","many":"za {0} hodiny","other":"za {0} hodin"},"past":{"one":"před {0} hodinou","few":"před {0} hodinami","many":"před {0} hodiny","other":"před {0} hodinami"}},"hour-short":{"0":"tuto hodinu","future":{"one":"za {0} h","few":"za {0} h","many":"za {0} h","other":"za {0} h"},"past":{"one":"před {0} h","few":"před {0} h","many":"před {0} h","other":"před {0} h"}},"hour-narrow":{"0":"tuto hodinu","future":{"one":"za {0} h","few":"za {0} h","many":"za {0} h","other":"za {0} h"},"past":{"one":"před {0} h","few":"před {0} h","many":"před {0} h","other":"před {0} h"}},"minute":{"0":"tuto minutu","future":{"one":"za {0} minutu","few":"za {0} minuty","many":"za {0} minuty","other":"za {0} minut"},"past":{"one":"před {0} minutou","few":"před {0} minutami","many":"před {0} minuty","other":"před {0} minutami"}},"minute-short":{"0":"tuto minutu","future":{"one":"za {0} min","few":"za {0} min","many":"za {0} min","other":"za {0} min"},"past":{"one":"před {0} min","few":"před {0} min","many":"před {0} min","other":"před {0} min"}},"minute-narrow":{"0":"tuto minutu","future":{"one":"za {0} min","few":"za {0} min","many":"za {0} min","other":"za {0} min"},"past":{"one":"před {0} min","few":"před {0} min","many":"před {0} min","other":"před {0} min"}},"second":{"0":"nyní","future":{"one":"za {0} sekundu","few":"za {0} sekundy","many":"za {0} sekundy","other":"za {0} sekund"},"past":{"one":"před {0} sekundou","few":"před {0} sekundami","many":"před {0} sekundy","other":"před {0} sekundami"}},"second-short":{"0":"nyní","future":{"one":"za {0} s","few":"za {0} s","many":"za {0} s","other":"za {0} s"},"past":{"one":"před {0} s","few":"před {0} s","many":"před {0} s","other":"před {0} s"}},"second-narrow":{"0":"nyní","future":{"one":"za {0} s","few":"za {0} s","many":"za {0} s","other":"za {0} s"},"past":{"one":"před {0} s","few":"před {0} s","many":"před {0} s","other":"před {0} s"}}}},"availableLocales":["cs"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
