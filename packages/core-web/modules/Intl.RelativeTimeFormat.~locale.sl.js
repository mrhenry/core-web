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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sl").length
)) {
// Intl.RelativeTimeFormat.~locale.sl
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"letos","1":"naslednje leto","future":{"one":"čez {0} leto","two":"čez {0} leti","few":"čez {0} leta","other":"čez {0} let"},"past":{"one":"pred {0} letom","two":"pred {0} letoma","few":"pred {0} leti","other":"pred {0} leti"},"-1":"lani"},"year-short":{"0":"letos","1":"naslednje leto","future":{"one":"čez {0} leto","two":"čez {0} leti","few":"čez {0} leta","other":"čez {0} let"},"past":{"one":"pred {0} letom","two":"pred {0} letoma","few":"pred {0} leti","other":"pred {0} leti"},"-1":"lani"},"year-narrow":{"0":"letos","1":"naslednje leto","future":{"one":"čez {0} leto","two":"čez {0} leti","few":"čez {0} leta","other":"čez {0} let"},"past":{"one":"pred {0} letom","two":"pred {0} letoma","few":"pred {0} leti","other":"pred {0} leti"},"-1":"lani"},"quarter":{"0":"to četrtletje","1":"naslednje četrtletje","future":{"one":"čez {0} četrtletje","two":"čez {0} četrtletji","few":"čez {0} četrtletja","other":"čez {0} četrtletij"},"past":{"one":"pred {0} četrtletjem","two":"pred {0} četrtletjema","few":"pred {0} četrtletji","other":"pred {0} četrtletji"},"-1":"zadnje četrtletje"},"quarter-short":{"0":"to četrtletje","1":"naslednje četrtletje","future":{"one":"čez {0} četrtl.","two":"čez {0} četrtl.","few":"čez {0} četrtl.","other":"čez {0} četrtl."},"past":{"one":"pred {0} četrtl.","two":"pred {0} četrtl.","few":"pred {0} četrtl.","other":"pred {0} četrtl."},"-1":"zadnje četrtletje"},"quarter-narrow":{"0":"to četrtletje","1":"naslednje četrtletje","future":{"one":"čez {0} četr.","two":"čez {0} četr.","few":"čez {0} četr.","other":"čez {0} četr."},"past":{"one":"pred {0} četr.","two":"pred {0} četr.","few":"pred {0} četr.","other":"pred {0} četr."},"-1":"zadnje četrtletje"},"month":{"0":"ta mesec","1":"naslednji mesec","future":{"one":"čez {0} mesec","two":"čez {0} meseca","few":"čez {0} mesece","other":"čez {0} mesecev"},"past":{"one":"pred {0} mesecem","two":"pred {0} mesecema","few":"pred {0} meseci","other":"pred {0} meseci"},"-1":"prejšnji mesec"},"month-short":{"0":"ta mesec","1":"naslednji mesec","future":{"one":"čez {0} mes.","two":"čez {0} mes.","few":"čez {0} mes.","other":"čez {0} mes."},"past":{"one":"pred {0} mes.","two":"pred {0} mes.","few":"pred {0} mes.","other":"pred {0} mes."},"-1":"prejšnji mesec"},"month-narrow":{"0":"ta mesec","1":"naslednji mesec","future":{"one":"čez {0} mes.","two":"čez {0} mes.","few":"čez {0} mes.","other":"čez {0} mes."},"past":{"one":"pred {0} mes.","two":"pred {0} mes.","few":"pred {0} mes.","other":"pred {0} mes."},"-1":"prejšnji mesec"},"week":{"0":"ta teden","1":"naslednji teden","future":{"one":"čez {0} teden","two":"čez {0} tedna","few":"čez {0} tedne","other":"čez {0} tednov"},"past":{"one":"pred {0} tednom","two":"pred {0} tednoma","few":"pred {0} tedni","other":"pred {0} tedni"},"-1":"prejšnji teden"},"week-short":{"0":"ta teden","1":"naslednji teden","future":{"one":"čez {0} ted.","two":"čez {0} ted.","few":"čez {0} ted.","other":"čez {0} ted."},"past":{"one":"pred {0} ted.","two":"pred {0} ted.","few":"pred {0} ted.","other":"pred {0} ted."},"-1":"prejšnji teden"},"week-narrow":{"0":"ta teden","1":"naslednji teden","future":{"one":"čez {0} ted.","two":"čez {0} ted.","few":"čez {0} ted.","other":"čez {0} ted."},"past":{"one":"pred {0} ted.","two":"pred {0} ted.","few":"pred {0} ted.","other":"pred {0} ted."},"-1":"prejšnji teden"},"day":{"0":"danes","1":"jutri","2":"pojutrišnjem","future":{"one":"čez {0} dan","two":"čez {0} dneva","few":"čez {0} dni","other":"čez {0} dni"},"past":{"one":"pred {0} dnevom","two":"pred {0} dnevoma","few":"pred {0} dnevi","other":"pred {0} dnevi"},"-2":"predvčerajšnjim","-1":"včeraj"},"day-short":{"0":"danes","1":"jutri","2":"pojutrišnjem","future":{"one":"čez {0} dan","two":"čez {0} dneva","few":"čez {0} dni","other":"čez {0} dni"},"past":{"one":"pred {0} dnevom","two":"pred {0} dnevoma","few":"pred {0} dnevi","other":"pred {0} dnevi"},"-2":"predvčerajšnjim","-1":"včeraj"},"day-narrow":{"0":"danes","1":"jutri","2":"pojutrišnjem","future":{"one":"čez {0} dan","two":"čez {0} dneva","few":"čez {0} dni","other":"čez {0} dni"},"past":{"one":"pred {0} dnevom","two":"pred {0} dnevoma","few":"pred {0} dnevi","other":"pred {0} dnevi"},"-2":"predvčerajšnjim","-1":"včeraj"},"hour":{"0":"v tej uri","future":{"one":"čez {0} uro","two":"čez {0} uri","few":"čez {0} ure","other":"čez {0} ur"},"past":{"one":"pred {0} uro","two":"pred {0} urama","few":"pred {0} urami","other":"pred {0} urami"}},"hour-short":{"0":"v tej uri","future":{"one":"čez {0} uro","two":"čez {0} uri","few":"čez {0} ure","other":"čez {0} ur"},"past":{"one":"pred {0} uro","two":"pred {0} urama","few":"pred {0} urami","other":"pred {0} urami"}},"hour-narrow":{"0":"v tej uri","future":{"one":"čez {0} h","two":"čez {0} h","few":"čez {0} h","other":"čez {0} h"},"past":{"one":"pred {0} h","two":"pred {0} h","few":"pred {0} h","other":"pred {0} h"}},"minute":{"0":"to minuto","future":{"one":"čez {0} minuto","two":"čez {0} minuti","few":"čez {0} minute","other":"čez {0} minut"},"past":{"one":"pred {0} minuto","two":"pred {0} minutama","few":"pred {0} minutami","other":"pred {0} minutami"}},"minute-short":{"0":"to minuto","future":{"one":"čez {0} min.","two":"čez {0} min.","few":"čez {0} min.","other":"čez {0} min."},"past":{"one":"pred {0} min.","two":"pred {0} min.","few":"pred {0} min.","other":"pred {0} min."}},"minute-narrow":{"0":"to minuto","future":{"one":"čez {0} min","two":"čez {0} min","few":"čez {0} min","other":"čez {0} min"},"past":{"one":"pred {0} min","two":"pred {0} min","few":"pred {0} min","other":"pred {0} min"}},"second":{"0":"zdaj","future":{"one":"čez {0} sekundo","two":"čez {0} sekundi","few":"čez {0} sekunde","other":"čez {0} sekund"},"past":{"one":"pred {0} sekundo","two":"pred {0} sekundama","few":"pred {0} sekundami","other":"pred {0} sekundami"}},"second-short":{"0":"zdaj","future":{"one":"čez {0} s","two":"čez {0} s","few":"čez {0} s","other":"čez {0} s"},"past":{"one":"pred {0} s","two":"pred {0} s","few":"pred {0} s","other":"pred {0} s"}},"second-narrow":{"0":"zdaj","future":{"one":"čez {0} s","two":"čez {0} s","few":"čez {0} s","other":"čez {0} s"},"past":{"one":"pred {0} s","two":"pred {0} s","few":"pred {0} s","other":"pred {0} s"}}},"locale":"sl"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
