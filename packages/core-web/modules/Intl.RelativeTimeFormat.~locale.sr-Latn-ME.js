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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sr-Latn-ME").length
)) {
// Intl.RelativeTimeFormat.~locale.sr-Latn-ME
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"sr-Latn-ME":{"nu":["latn"],"year":{"0":"ove godine","1":"sledeće godine","future":{"one":"za {0} godinu","few":"za {0} godine","other":"za {0} godina"},"past":{"one":"pre {0} godine","few":"pre {0} godine","other":"pre {0} godina"},"-1":"prošle godine"},"year-short":{"0":"ove god.","1":"sledeće god.","future":{"one":"za {0} god.","few":"za {0} god.","other":"za {0} god."},"past":{"one":"pre {0} god.","few":"pre {0} god.","other":"pre {0} god."},"-1":"prošle god."},"year-narrow":{"0":"ove g.","1":"sledeće g.","future":{"one":"za {0} g.","few":"za {0} g.","other":"za {0} g."},"past":{"one":"pre {0} g.","few":"pre {0} g.","other":"pre {0} g."},"-1":"prošle g."},"quarter":{"0":"ovog kvartala","1":"sledećeg kvartala","future":{"one":"za {0} kvartal","few":"za {0} kvartala","other":"za {0} kvartala"},"past":{"one":"pre {0} kvartala","few":"pre {0} kvartala","other":"pre {0} kvartala"},"-1":"prošlog kvartala"},"quarter-short":{"0":"ovog kvartala","1":"sledećeg kvartala","future":{"one":"za {0} kv.","few":"za {0} kv.","other":"za {0} kv."},"past":{"one":"pre {0} kv.","few":"pre {0} kv.","other":"pre {0} kv."},"-1":"prošlog kvartala"},"quarter-narrow":{"0":"ovog kvartala","1":"sledećeg kvartala","future":{"one":"za {0} kv.","few":"za {0} kv.","other":"za {0} kv."},"past":{"one":"pre {0} kv.","few":"pre {0} kv.","other":"pre {0} kv."},"-1":"prošlog kvartala"},"month":{"0":"ovog meseca","1":"sledećeg meseca","future":{"one":"za {0} mesec","few":"za {0} meseca","other":"za {0} meseci"},"past":{"one":"pre {0} meseca","few":"pre {0} meseca","other":"pre {0} meseci"},"-1":"prošlog meseca"},"month-short":{"0":"ovog mes.","1":"sledećeg mes.","future":{"one":"za {0} mes.","few":"za {0} mes.","other":"za {0} mes."},"past":{"one":"pre {0} mes.","few":"pre {0} mes.","other":"pre {0} mes."},"-1":"prošlog mes."},"month-narrow":{"0":"ovog m.","1":"sledećeg m.","future":{"one":"za {0} m.","few":"za {0} m.","other":"za {0} m."},"past":{"one":"pre {0} m.","few":"pre {0} m.","other":"pre {0} m."},"-1":"prošlog m."},"week":{"0":"ove nedelje","1":"sledeće nedelje","future":{"one":"za {0} nedelju","few":"za {0} nedelje","other":"za {0} nedelja"},"past":{"one":"pre {0} nedelje","few":"pre {0} nedelje","other":"pre {0} nedelja"},"-1":"prošle nedelje"},"week-short":{"0":"ove ned.","1":"sledeće ned.","future":{"one":"za {0} ned.","few":"za {0} ned.","other":"za {0} ned."},"past":{"one":"pre {0} ned.","few":"pre {0} ned.","other":"pre {0} ned."},"-1":"prošle ned."},"week-narrow":{"0":"ove n.","1":"sledeće n.","future":{"one":"za {0} n.","few":"za {0} n.","other":"za {0} n."},"past":{"one":"pre {0} n.","few":"pre {0} n.","other":"pre {0} n."},"-1":"prošle n."},"day":{"0":"danas","1":"sutra","2":"prekosutra","future":{"one":"za {0} dan","few":"za {0} dana","other":"za {0} dana"},"past":{"one":"pre {0} dana","few":"pre {0} dana","other":"pre {0} dana"},"-2":"prekjuče","-1":"juče"},"day-short":{"0":"danas","1":"sutra","2":"prekosutra","future":{"one":"za {0} d.","few":"za {0} d.","other":"za {0} d."},"past":{"one":"pre {0} d.","few":"pre {0} d.","other":"pre {0} d."},"-2":"prekjuče","-1":"juče"},"day-narrow":{"0":"danas","1":"sutra","2":"prekosutra","future":{"one":"za {0} d.","few":"za {0} d.","other":"za {0} d."},"past":{"one":"pre {0} d.","few":"pre {0} d.","other":"pre {0} d."},"-2":"prekjuče","-1":"juče"},"hour":{"0":"ovog sata","future":{"one":"za {0} sat","few":"za {0} sata","other":"za {0} sati"},"past":{"one":"pre {0} sata","few":"pre {0} sata","other":"pre {0} sati"}},"hour-short":{"0":"ovog sata","future":{"one":"za {0} č.","few":"za {0} č.","other":"za {0} č."},"past":{"one":"pre {0} č.","few":"pre {0} č.","other":"pre {0} č."}},"hour-narrow":{"0":"ovog sata","future":{"one":"za {0} č.","few":"za {0} č.","other":"za {0} č."},"past":{"one":"pre {0} č.","few":"pre {0} č.","other":"pre {0} č."}},"minute":{"0":"ovog minuta","future":{"one":"za {0} minut","few":"za {0} minuta","other":"za {0} minuta"},"past":{"one":"pre {0} minuta","few":"pre {0} minuta","other":"pre {0} minuta"}},"minute-short":{"0":"ovog minuta","future":{"one":"za {0} min.","few":"za {0} min.","other":"za {0} min."},"past":{"one":"pre {0} min.","few":"pre {0} min.","other":"pre {0} min."}},"minute-narrow":{"0":"ovog minuta","future":{"one":"za {0} min.","few":"za {0} min.","other":"za {0} min."},"past":{"one":"pre {0} min.","few":"pre {0} min.","other":"pre {0} min."}},"second":{"0":"sada","future":{"one":"za {0} sekundu","few":"za {0} sekunde","other":"za {0} sekundi"},"past":{"one":"pre {0} sekunde","few":"pre {0} sekunde","other":"pre {0} sekundi"}},"second-short":{"0":"sada","future":{"one":"za {0} sek.","few":"za {0} sek.","other":"za {0} sek."},"past":{"one":"pre {0} sek.","few":"pre {0} sek.","other":"pre {0} sek."}},"second-narrow":{"0":"sada","future":{"one":"za {0} s.","few":"za {0} s.","other":"za {0} s."},"past":{"one":"pre {0} s.","few":"pre {0} s.","other":"pre {0} s."}}}},"availableLocales":["sr-Latn-ME"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
