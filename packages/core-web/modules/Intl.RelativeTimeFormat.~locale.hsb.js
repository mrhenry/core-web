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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("hsb").length
)) {
// Intl.RelativeTimeFormat.~locale.hsb
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"hsb":{"nu":["latn"],"year":{"0":"lětsa","1":"klětu","future":{"one":"za {0} lěto","two":"za {0} lěće","few":"za {0} lěta","other":"za {0} lět"},"past":{"one":"před {0} lětom","two":"před {0} lětomaj","few":"před {0} lětami","other":"před {0} lětami"},"-1":"loni"},"year-short":{"0":"lětsa","1":"klětu","future":{"one":"za {0} l.","two":"za {0} l.","few":"za {0} l.","other":"za {0} l."},"past":{"one":"před {0} l.","two":"před {0} l.","few":"před {0} l.","other":"před {0} l."},"-1":"loni"},"year-narrow":{"0":"lětsa","1":"klětu","future":{"one":"za {0} l.","two":"za {0} l.","few":"za {0} l.","other":"za {0} l."},"past":{"one":"před {0} l.","two":"před {0} l.","few":"před {0} l.","other":"před {0} l."},"-1":"loni"},"quarter":{"0":"this quarter","1":"next quarter","future":{"one":"za {0} kwartal","two":"za {0} kwartalej","few":"za {0} kwartale","other":"za {0} kwartalow"},"past":{"one":"před {0} kwartalom","two":"před {0} kwartalomaj","few":"před {0} kwartalemi","other":"před {0} kwartalemi"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"one":"za {0} kwart.","two":"za {0} kwart.","few":"za {0} kwart.","other":"za {0} kwart."},"past":{"one":"před {0} kwart.","two":"před {0} kwart.","few":"před {0} kwart.","other":"před {0} kwart."},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"one":"za {0} kw.","two":"za {0} kw.","few":"za {0} kw.","other":"za {0} kw."},"past":{"one":"před {0} kw.","two":"před {0} kw.","few":"před {0} kw.","other":"před {0} kw."},"-1":"last quarter"},"month":{"0":"tutón měsac","1":"přichodny měsac","future":{"one":"za {0} měsac","two":"za {0} měsacaj","few":"za {0} měsacy","other":"za {0} měsacow"},"past":{"one":"před {0} měsacom","two":"před {0} měsacomaj","few":"před {0} měsacami","other":"před {0} měsacami"},"-1":"zašły měsac"},"month-short":{"0":"tutón měsac","1":"přichodny měsac","future":{"one":"za {0} měs.","two":"za {0} měs.","few":"za {0} měs.","other":"za {0} měs."},"past":{"one":"před {0} měs.","two":"před {0} měs.","few":"před {0} měs.","other":"před {0} měs."},"-1":"zašły měsac"},"month-narrow":{"0":"tutón měsac","1":"přichodny měsac","future":{"one":"za {0} měs.","two":"za {0} měs.","few":"za {0} měs.","other":"za {0} měs."},"past":{"one":"před {0} měs.","two":"před {0} měs.","few":"před {0} měs.","other":"před {0} měs."},"-1":"zašły měsac"},"week":{"0":"tutón tydźeń","1":"přichodny tydźeń","future":{"one":"za {0} tydźeń","two":"za {0} tydźenjej","few":"za {0} tydźenje","other":"za {0} tydźenjow"},"past":{"one":"před {0} tydźenjom","two":"před {0} tydźenjomaj","few":"před {0} tydźenjemi","other":"před {0} tydźenjemi"},"-1":"zašły tydźeń"},"week-short":{"0":"tutón tydźeń","1":"přichodny tydźeń","future":{"one":"za {0} tydź.","two":"za {0} tydź.","few":"za {0} tydź.","other":"za {0} tydź."},"past":{"one":"před {0} tydź.","two":"před {0} tydź.","few":"před {0} tydź.","other":"před {0} tydź."},"-1":"zašły tydźeń"},"week-narrow":{"0":"tutón tydźeń","1":"přichodny tydźeń","future":{"one":"za {0} tydź.","two":"za {0} tydź.","few":"za {0} tydź.","other":"za {0} tydź."},"past":{"one":"před {0} tydź.","two":"před {0} tydź.","few":"před {0} tydź.","other":"před {0} tydź."},"-1":"zašły tydźeń"},"day":{"0":"dźensa","1":"jutře","future":{"one":"za {0} dźeń","two":"za {0} dnjej","few":"za {0} dny","other":"za {0} dnjow"},"past":{"one":"před {0} dnjom","two":"před {0} dnjomaj","few":"před {0} dnjemi","other":"před {0} dnjemi"},"-1":"wčera"},"day-short":{"0":"dźensa","1":"jutře","future":{"one":"za {0} dźeń","two":"za {0} dnj.","few":"za {0} dny","other":"za {0} dnj."},"past":{"one":"před {0} dnj.","two":"před {0} dnj.","few":"před {0} dnj.","other":"před {0} dnj."},"-1":"wčera"},"day-narrow":{"0":"dźensa","1":"jutře","future":{"one":"za {0} d","two":"za {0} d","few":"za {0} d","other":"za {0} d"},"past":{"one":"před {0} d","two":"před {0} d","few":"před {0} d","other":"před {0} d"},"-1":"wčera"},"hour":{"0":"this hour","future":{"one":"za {0} hodźinu","two":"za {0} hodźinje","few":"za {0} hodźiny","other":"za {0} hodźin"},"past":{"one":"před {0} hodźinu","two":"před {0} hodźinomaj","few":"před {0} hodźinami","other":"před {0} hodźinami"}},"hour-short":{"0":"this hour","future":{"one":"za {0} hodź.","two":"za {0} hodź.","few":"za {0} hodź.","other":"za {0} hodź."},"past":{"one":"před {0} hodź.","two":"před {0} hodź.","few":"před {0} hodź.","other":"před {0} hodź."}},"hour-narrow":{"0":"this hour","future":{"one":"za {0} h","two":"za {0} h","few":"za {0} h","other":"za {0} h"},"past":{"one":"před {0} h","two":"před {0} h","few":"před {0} h","other":"před {0} h"}},"minute":{"0":"this minute","future":{"one":"za {0} minutu","two":"za {0} minuće","few":"za {0} minuty","other":"za {0} minutow"},"past":{"one":"před {0} minutu","two":"před {0} minutomaj","few":"před {0} minutami","other":"před {0} minutami"}},"minute-short":{"0":"this minute","future":{"one":"za {0} min.","two":"za {0} min.","few":"za {0} min.","other":"za {0} min."},"past":{"one":"před {0} min.","two":"před {0} min.","few":"před {0} min.","other":"před {0} min."}},"minute-narrow":{"0":"this minute","future":{"one":"za {0} m","two":"za {0} m","few":"za {0} m","other":"za {0} m"},"past":{"one":"před {0} m","two":"před {0} m","few":"před {0} m","other":"před {0} m"}},"second":{"0":"now","future":{"one":"za {0} sekundu","two":"za {0} sekundźe","few":"za {0} sekundy","other":"za {0} sekundow"},"past":{"one":"před {0} sekundu","two":"před {0} sekundomaj","few":"před {0} sekundami","other":"před {0} sekundami"}},"second-short":{"0":"now","future":{"one":"za {0} sek.","two":"za {0} sek.","few":"za {0} sek.","other":"za {0} sek."},"past":{"one":"před {0} sek.","two":"před {0} sek.","few":"před {0} sek.","other":"před {0} sek."}},"second-narrow":{"0":"now","future":{"one":"za {0} s","two":"za {0} s","few":"za {0} s","other":"za {0} s"},"past":{"one":"před {0} s","two":"před {0} s","few":"před {0} s","other":"před {0} s"}}}},"availableLocales":["hsb"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
