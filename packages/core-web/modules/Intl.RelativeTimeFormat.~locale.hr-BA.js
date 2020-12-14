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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("hr-BA").length
)) {
// Intl.RelativeTimeFormat.~locale.hr-BA
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ove godine","1":"sljedeće godine","future":{"one":"za {0} godinu","few":"za {0} godine","other":"za {0} godina"},"past":{"one":"prije {0} godinu","few":"prije {0} godine","other":"prije {0} godina"},"-1":"prošle godine"},"year-short":{"0":"ove god.","1":"sljedeće god.","future":{"one":"za {0} g.","few":"za {0} g.","other":"za {0} g."},"past":{"one":"prije {0} g.","few":"prije {0} g.","other":"prije {0} g."},"-1":"prošle god."},"year-narrow":{"0":"ove g.","1":"sljedeće g.","future":{"one":"za {0} g.","few":"za {0} g.","other":"za {0} g."},"past":{"one":"prije {0} g.","few":"prije {0} g.","other":"prije {0} g."},"-1":"prošle g."},"quarter":{"0":"ovaj kvartal","1":"sljedeći kvartal","future":{"one":"za {0} kvartal","few":"za {0} kvartala","other":"za {0} kvartala"},"past":{"one":"prije {0} kvartal","few":"prije {0} kvartala","other":"prije {0} kvartala"},"-1":"prošli kvartal"},"quarter-short":{"0":"ovaj kv.","1":"sljedeći kv.","future":{"one":"za {0} kv.","few":"za {0} kv.","other":"za {0} kv."},"past":{"one":"prije {0} kv.","few":"prije {0} kv.","other":"prije {0} kv."},"-1":"prošli kv."},"quarter-narrow":{"0":"ovaj kv.","1":"sljedeći kv.","future":{"one":"za {0} kv.","few":"za {0} kv.","other":"za {0} kv."},"past":{"one":"prije {0} kv.","few":"prije {0} kv.","other":"prije {0} kv."},"-1":"prošli kv."},"month":{"0":"ovaj mjesec","1":"sljedeći mjesec","future":{"one":"za {0} mjesec","few":"za {0} mjeseca","other":"za {0} mjeseci"},"past":{"one":"prije {0} mjesec","few":"prije {0} mjeseca","other":"prije {0} mjeseci"},"-1":"prošli mjesec"},"month-short":{"0":"ovaj mj.","1":"sljedeći mj.","future":{"one":"za {0} mj.","few":"za {0} mj.","other":"za {0} mj."},"past":{"one":"prije {0} mj.","few":"prije {0} mj.","other":"prije {0} mj."},"-1":"prošli mj."},"month-narrow":{"0":"ovaj mj.","1":"sljedeći mj.","future":{"one":"za {0} mj.","few":"za {0} mj.","other":"za {0} mj."},"past":{"one":"prije {0} mj.","few":"prije {0} mj.","other":"prije {0} mj."},"-1":"prošli mj."},"week":{"0":"ovaj tjedan","1":"sljedeći tjedan","future":{"one":"za {0} tjedan","few":"za {0} tjedna","other":"za {0} tjedana"},"past":{"one":"prije {0} tjedan","few":"prije {0} tjedna","other":"prije {0} tjedana"},"-1":"prošli tjedan"},"week-short":{"0":"ovaj tj.","1":"sljedeći tj.","future":{"one":"za {0} tj.","few":"za {0} tj.","other":"za {0} tj."},"past":{"one":"prije {0} tj.","few":"prije {0} tj.","other":"prije {0} tj."},"-1":"prošli tj."},"week-narrow":{"0":"ovaj tj.","1":"sljedeći tj.","future":{"one":"za {0} tj.","few":"za {0} tj.","other":"za {0} tj."},"past":{"one":"prije {0} tj.","few":"prije {0} tj.","other":"prije {0} tj."},"-1":"prošli tj."},"day":{"0":"danas","1":"sutra","2":"prekosutra","future":{"one":"za {0} dan","few":"za {0} dana","other":"za {0} dana"},"past":{"one":"prije {0} dan","few":"prije {0} dana","other":"prije {0} dana"},"-2":"prekjučer","-1":"jučer"},"day-short":{"0":"danas","1":"sutra","2":"prekosutra","future":{"one":"za {0} dan","few":"za {0} dana","other":"za {0} dana"},"past":{"one":"prije {0} dan","few":"prije {0} dana","other":"prije {0} dana"},"-2":"prekjučer","-1":"jučer"},"day-narrow":{"0":"danas","1":"sutra","2":"prekosutra","future":{"one":"za {0} d","few":"za {0} d","other":"za {0} d"},"past":{"one":"prije {0} d","few":"prije {0} d","other":"prije {0} d"},"-2":"prekjučer","-1":"jučer"},"hour":{"0":"ovaj sat","future":{"one":"za {0} sat","few":"za {0} sata","other":"za {0} sati"},"past":{"one":"prije {0} sat","few":"prije {0} sata","other":"prije {0} sati"}},"hour-short":{"0":"ovaj sat","future":{"one":"za {0} h","few":"za {0} h","other":"za {0} h"},"past":{"one":"prije {0} h","few":"prije {0} h","other":"prije {0} h"}},"hour-narrow":{"0":"ovaj sat","future":{"one":"za {0} h","few":"za {0} h","other":"za {0} h"},"past":{"one":"prije {0} h","few":"prije {0} h","other":"prije {0} h"}},"minute":{"0":"ova minuta","future":{"one":"za {0} minutu","few":"za {0} minute","other":"za {0} minuta"},"past":{"one":"prije {0} minutu","few":"prije {0} minute","other":"prije {0} minuta"}},"minute-short":{"0":"ova minuta","future":{"one":"za {0} min","few":"za {0} min","other":"za {0} min"},"past":{"one":"prije {0} min","few":"prije {0} min","other":"prije {0} min"}},"minute-narrow":{"0":"ova minuta","future":{"one":"za {0} min","few":"za {0} min","other":"za {0} min"},"past":{"one":"prije {0} min","few":"prije {0} min","other":"prije {0} min"}},"second":{"0":"sad","future":{"one":"za {0} sekundu","few":"za {0} sekunde","other":"za {0} sekundi"},"past":{"one":"prije {0} sekundu","few":"prije {0} sekunde","other":"prije {0} sekundi"}},"second-short":{"0":"sad","future":{"one":"za {0} s","few":"za {0} s","other":"za {0} s"},"past":{"one":"prije {0} s","few":"prije {0} s","other":"prije {0} s"}},"second-narrow":{"0":"sad","future":{"one":"za {0} s","few":"za {0} s","other":"za {0} s"},"past":{"one":"prije {0} s","few":"prije {0} s","other":"prije {0} s"}}},"locale":"hr-BA"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
