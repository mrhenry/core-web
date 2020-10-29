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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("bs-Latn").length
)) {
// Intl.RelativeTimeFormat.~locale.bs-Latn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"bs-Latn":{"nu":["latn"],"year":{"0":"ove godine","1":"sljedeće godine","future":{"one":"za {0} godinu","few":"za {0} godine","other":"za {0} godina"},"past":{"one":"prije {0} godinu","few":"prije {0} godine","other":"prije {0} godina"},"-1":"prošle godine"},"year-short":{"0":"ove godine","1":"sljedeće godine","future":{"one":"za {0} god.","few":"za {0} god.","other":"za {0} god."},"past":{"one":"prije {0} god.","few":"prije {0} god.","other":"prije {0} god."},"-1":"prošle godine"},"year-narrow":{"0":"ove godine","1":"sljedeće godine","future":{"one":"za {0} g.","few":"za {0} g.","other":"za {0} g."},"past":{"one":"prije {0} g.","few":"prije {0} g.","other":"prije {0} g."},"-1":"prošle godine"},"quarter":{"0":"ovaj kvartal","1":"sljedeći kvartal","future":{"one":"za {0} kvartal","few":"za {0} kvartala","other":"za {0} kvartala"},"past":{"one":"prije {0} kvartal","few":"prije {0} kvartala","other":"prije {0} kvartala"},"-1":"posljednji kvartal"},"quarter-short":{"0":"ovaj kvartal","1":"sljedeći kvartal","future":{"one":"za {0} kv.","few":"za {0} kv.","other":"za {0} kv."},"past":{"one":"prije {0} kv.","few":"prije {0} kv.","other":"prije {0} kv."},"-1":"posljednji kvartal"},"quarter-narrow":{"0":"ovaj kvartal","1":"sljedeći kvartal","future":{"one":"za {0} kv.","few":"za {0} kv.","other":"za {0} kv."},"past":{"one":"prije {0} kv.","few":"prije {0} kv.","other":"prije {0} kv."},"-1":"posljednji kvartal"},"month":{"0":"ovaj mjesec","1":"sljedeći mjesec","future":{"one":"za {0} mjesec","few":"za {0} mjeseca","other":"za {0} mjeseci"},"past":{"one":"prije {0} mjesec","few":"prije {0} mjeseca","other":"prije {0} mjeseci"},"-1":"prošli mjesec"},"month-short":{"0":"ovaj mjesec","1":"sljedeći mjesec","future":{"one":"za {0} mj.","few":"za {0} mj.","other":"za {0} mj."},"past":{"one":"prije {0} mj.","few":"prije {0} mj.","other":"prije {0} mj."},"-1":"prošli mjesec"},"month-narrow":{"0":"ovaj mjesec","1":"sljedeći mjesec","future":{"one":"za {0} mj.","few":"za {0} mj.","other":"za {0} mj."},"past":{"one":"prije {0} mj.","few":"prije {0} mj.","other":"prije {0} mj."},"-1":"prošli mjesec"},"week":{"0":"ove sedmice","1":"sljedeće sedmice","future":{"one":"za {0} sedmicu","few":"za {0} sedmice","other":"za {0} sedmica"},"past":{"one":"prije {0} sedmicu","few":"prije {0} sedmice","other":"prije {0} sedmica"},"-1":"prošle sedmice"},"week-short":{"0":"ove sedmice","1":"sljedeće sedmice","future":{"one":"za {0} sed.","few":"za {0} sed.","other":"za {0} sed."},"past":{"one":"prije {0} sed.","few":"prije {0} sed.","other":"prije {0} sed."},"-1":"prošle sedmice"},"week-narrow":{"0":"ove sedmice","1":"sljedeće sedmice","future":{"one":"za {0} sed.","few":"za {0} sed.","other":"za {0} sed."},"past":{"one":"prije {0} sed.","few":"prije {0} sed.","other":"prije {0} sed."},"-1":"prošle sedmice"},"day":{"0":"danas","1":"sutra","2":"prekosutra","future":{"one":"za {0} dan","few":"za {0} dana","other":"za {0} dana"},"past":{"one":"prije {0} dan","few":"prije {0} dana","other":"prije {0} dana"},"-2":"prekjučer","-1":"jučer"},"day-short":{"0":"danas","1":"sutra","2":"prekosutra","future":{"one":"za {0} d.","few":"za {0} d.","other":"za {0} d."},"past":{"one":"prije {0} d.","few":"prije {0} d.","other":"prije {0} d."},"-2":"prekjučer","-1":"jučer"},"day-narrow":{"0":"danas","1":"sutra","2":"prekosutra","future":{"one":"za {0} d.","few":"za {0} d.","other":"za {0} d."},"past":{"one":"prije {0} d.","few":"prije {0} d.","other":"prije {0} d."},"-2":"prekjučer","-1":"jučer"},"hour":{"0":"ovaj sat","future":{"one":"za {0} sat","few":"za {0} sata","other":"za {0} sati"},"past":{"one":"prije {0} sat","few":"prije {0} sata","other":"prije {0} sati"}},"hour-short":{"0":"ovaj sat","future":{"one":"za {0} sat","few":"za {0} sata","other":"za {0} sati"},"past":{"one":"prije {0} sat","few":"prije {0} sata","other":"prije {0} sati"}},"hour-narrow":{"0":"ovaj sat","future":{"one":"za {0} sat","few":"za {0} sata","other":"za {0} sati"},"past":{"one":"prije {0} sat","few":"prije {0} sata","other":"prije {0} sati"}},"minute":{"0":"ova minuta","future":{"one":"za {0} minutu","few":"za {0} minute","other":"za {0} minuta"},"past":{"one":"prije {0} minutu","few":"prije {0} minute","other":"prije {0} minuta"}},"minute-short":{"0":"ova minuta","future":{"one":"za {0} min.","few":"za {0} min.","other":"za {0} min."},"past":{"one":"prije {0} min.","few":"prije {0} min.","other":"prije {0} min."}},"minute-narrow":{"0":"ova minuta","future":{"one":"za {0} min.","few":"za {0} min.","other":"za {0} min."},"past":{"one":"prije {0} min.","few":"prije {0} min.","other":"prije {0} min."}},"second":{"0":"sada","future":{"one":"za {0} sekundu","few":"za {0} sekunde","other":"za {0} sekundi"},"past":{"one":"prije {0} sekundu","few":"prije {0} sekunde","other":"prije {0} sekundi"}},"second-short":{"0":"sada","future":{"one":"za {0} sek.","few":"za {0} sek.","other":"za {0} sek."},"past":{"one":"prije {0} sek.","few":"prije {0} sek.","other":"prije {0} sek."}},"second-narrow":{"0":"sada","future":{"one":"za {0} sek.","few":"za {0} sek.","other":"za {0} sek."},"past":{"one":"prije {0} sek.","few":"prije {0} sek.","other":"prije {0} sek."}}}},"availableLocales":["bs-Latn"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
