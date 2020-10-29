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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("dsb").length
)) {
// Intl.RelativeTimeFormat.~locale.dsb
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"dsb":{"nu":["latn"],"year":{"0":"lětosa","1":"znowa","future":{"one":"za {0} lěto","two":"za {0} lěśe","few":"za {0} lěta","other":"za {0} lět"},"past":{"one":"pśed {0} lětom","two":"pśed {0} lětoma","few":"pśed {0} lětami","other":"pśed {0} lětami"},"-1":"łoni"},"year-short":{"0":"lětosa","1":"znowa","future":{"one":"za {0} l.","two":"za {0} l.","few":"za {0} l.","other":"za {0} l."},"past":{"one":"pśed {0} l.","two":"pśed {0} l.","few":"pśed {0} l.","other":"pśed {0} l."},"-1":"łoni"},"year-narrow":{"0":"lětosa","1":"znowa","future":{"one":"za {0} l.","two":"za {0} l.","few":"za {0} l.","other":"za {0} l."},"past":{"one":"pśed {0} l.","two":"pśed {0} l.","few":"pśed {0} l.","other":"pśed {0} l."},"-1":"łoni"},"quarter":{"0":"this quarter","1":"next quarter","future":{"one":"za {0} kwartal","two":"za {0} kwartala","few":"za {0} kwartale","other":"za {0} kwartalow"},"past":{"one":"pśed {0} kwartalom","two":"pśed {0} kwartaloma","few":"pśed {0} kwartalami","other":"pśed {0} kwartalami"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"one":"za {0} kwart.","two":"za {0} kwart.","few":"za {0} kwart.","other":"za {0} kwart."},"past":{"one":"pśed {0} kwart.","two":"pśed {0} kwart.","few":"pśed {0} kwart.","other":"pśed {0} kwart."},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"one":"za {0} kw.","two":"za {0} kw.","few":"za {0} kw.","other":"za {0} kw."},"past":{"one":"pśed {0} kw.","two":"pśed {0} kw.","few":"pśed {0} kw.","other":"pśed {0} kw."},"-1":"last quarter"},"month":{"0":"ten mjasec","1":"pśiducy mjasec","future":{"one":"za {0} mjasec","two":"za {0} mjaseca","few":"za {0} mjasecy","other":"za {0} mjasecow"},"past":{"one":"pśed {0} mjasecom","two":"pśed {0} mjasecoma","few":"pśed {0} mjasecami","other":"pśed {0} mjasecami"},"-1":"slědny mjasec"},"month-short":{"0":"ten mjasec","1":"pśiducy mjasec","future":{"one":"za {0} mjas.","two":"za {0} mjas.","few":"za {0} mjas.","other":"za {0} mjas."},"past":{"one":"pśed {0} mjas.","two":"pśed {0} mjas.","few":"pśed {0} mjas.","other":"pśed {0} mjas."},"-1":"slědny mjasec"},"month-narrow":{"0":"ten mjasec","1":"pśiducy mjasec","future":{"one":"za {0} mjas.","two":"za {0} mjas.","few":"za {0} mjas.","other":"za {0} mjas."},"past":{"one":"pśed {0} mjas.","two":"pśed {0} mjas.","few":"pśed {0} mjas.","other":"pśed {0} mjas."},"-1":"slědny mjasec"},"week":{"0":"ten tyźeń","1":"pśiducy tyźeń","future":{"one":"za {0} tyźeń","two":"za {0} tyźenja","few":"za {0} tyźenje","other":"za {0} tyźenjow"},"past":{"one":"pśed {0} tyźenjom","two":"pśed {0} tyźenjoma","few":"pśed {0} tyźenjami","other":"pśed {0} tyźenjami"},"-1":"slědny tyźeń"},"week-short":{"0":"ten tyźeń","1":"pśiducy tyźeń","future":{"one":"za {0} tyź.","two":"za {0} tyź.","few":"za {0} tyź.","other":"za {0} tyź."},"past":{"one":"pśed {0} tyź.","two":"pśed {0} tyź.","few":"pśed {0} tyź.","other":"pśed {0} tyź."},"-1":"slědny tyźeń"},"week-narrow":{"0":"ten tyźeń","1":"pśiducy tyźeń","future":{"one":"za {0} tyź.","two":"za {0} tyź.","few":"za {0} tyź.","other":"za {0} tyź."},"past":{"one":"pśed {0} tyź.","two":"pśed {0} tyź.","few":"pśed {0} tyź.","other":"pśed {0} tyź."},"-1":"slědny tyźeń"},"day":{"0":"źinsa","1":"witśe","future":{"one":"za {0} źeń","two":"za {0} dnja","few":"za {0} dny","other":"za {0} dnjow"},"past":{"one":"pśed {0} dnjom","two":"pśed {0} dnjoma","few":"pśed {0} dnjami","other":"pśed {0} dnjami"},"-1":"cora"},"day-short":{"0":"źinsa","1":"witśe","future":{"one":"za {0} źeń","two":"za {0} dnj.","few":"za {0} dny","other":"za {0} dnj."},"past":{"one":"pśed {0} dnj.","two":"pśed {0} dnj.","few":"pśed {0} dnj.","other":"pśed {0} dnj."},"-1":"cora"},"day-narrow":{"0":"źinsa","1":"witśe","future":{"one":"za {0} ź","two":"za {0} ź","few":"za {0} ź","other":"za {0} ź"},"past":{"one":"pśed {0} d","two":"pśed {0} d","few":"pśed {0} d","other":"pśed {0} d"},"-1":"cora"},"hour":{"0":"this hour","future":{"one":"za {0} góźinu","two":"za {0} góźinje","few":"za {0} góźiny","other":"za {0} góźin"},"past":{"one":"pśed {0} góźinu","two":"pśed {0} góźinoma","few":"pśed {0} góźinami","other":"pśed {0} góźinami"}},"hour-short":{"0":"this hour","future":{"one":"za {0} góź.","two":"za {0} góź.","few":"za {0} góź.","other":"za {0} góź."},"past":{"one":"pśed {0} góź.","two":"pśed {0} góź.","few":"pśed {0} góź.","other":"pśed {0} góź."}},"hour-narrow":{"0":"this hour","future":{"one":"za {0} g","two":"za {0} g","few":"za {0} g","other":"za {0} g"},"past":{"one":"pśed {0} g","two":"pśed {0} g","few":"pśed {0} g","other":"pśed {0} g"}},"minute":{"0":"this minute","future":{"one":"za {0} minutu","two":"za {0} minuśe","few":"za {0} minuty","other":"za {0} minutow"},"past":{"one":"pśed {0} minutu","two":"pśed {0} minutoma","few":"pśed {0} minutami","other":"pśed {0} minutami"}},"minute-short":{"0":"this minute","future":{"one":"za {0} min.","two":"za {0} min.","few":"za {0} min.","other":"za {0} min."},"past":{"one":"pśed {0} min.","two":"pśed {0} min.","few":"pśed {0} min.","other":"pśed {0} min."}},"minute-narrow":{"0":"this minute","future":{"one":"za {0} m","two":"za {0} m","few":"za {0} m","other":"za {0} m"},"past":{"one":"pśed {0} m","two":"pśed {0} m","few":"pśed {0} m","other":"pśed {0} m"}},"second":{"0":"now","future":{"one":"za {0} sekundu","two":"za {0} sekunźe","few":"za {0} sekundy","other":"za {0} sekundow"},"past":{"one":"pśed {0} sekundu","two":"pśed {0} sekundoma","few":"pśed {0} sekundami","other":"pśed {0} sekundami"}},"second-short":{"0":"now","future":{"one":"za {0} sek.","two":"za {0} sek.","few":"za {0} sek.","other":"za {0} sek."},"past":{"one":"pśed {0} sek.","two":"pśed {0} sek.","few":"pśed {0} sek.","other":"pśed {0} sek."}},"second-narrow":{"0":"now","future":{"one":"za {0} s","two":"za {0} s","few":"za {0} s","other":"za {0} s"},"past":{"one":"pśed {0} s","two":"pśed {0} s","few":"pśed {0} s","other":"pśed {0} s"}}}},"availableLocales":["dsb"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
