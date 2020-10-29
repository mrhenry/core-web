import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
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
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ro-MD").length
)) {
// Intl.RelativeTimeFormat.~locale.ro-MD
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ro-MD":{"nu":["latn"],"year":{"0":"anul acesta","1":"anul viitor","future":{"one":"peste {0} an","few":"peste {0} ani","other":"peste {0} de ani"},"past":{"one":"acum {0} an","few":"acum {0} ani","other":"acum {0} de ani"},"-1":"anul trecut"},"year-short":{"0":"anul acesta","1":"anul viitor","future":{"one":"peste {0} an","few":"peste {0} ani","other":"peste {0} de ani"},"past":{"one":"acum {0} an","few":"acum {0} ani","other":"acum {0} de ani"},"-1":"anul trecut"},"year-narrow":{"0":"anul acesta","1":"anul viitor","future":{"one":"+{0} an","few":"+{0} ani","other":"+{0} ani"},"past":{"one":"-{0} an","few":"-{0} ani","other":"-{0} ani"},"-1":"anul trecut"},"quarter":{"0":"trimestrul acesta","1":"trimestrul viitor","future":{"one":"peste {0} trimestru","few":"peste {0} trimestre","other":"peste {0} de trimestre"},"past":{"one":"acum {0} trimestru","few":"acum {0} trimestre","other":"acum {0} de trimestre"},"-1":"trimestrul trecut"},"quarter-short":{"0":"trim. acesta","1":"trim. viitor","future":{"one":"peste {0} trim.","few":"peste {0} trim.","other":"peste {0} trim."},"past":{"one":"acum {0} trim.","few":"acum {0} trim.","other":"acum {0} trim."},"-1":"trim. trecut"},"quarter-narrow":{"0":"trim. acesta","1":"trim. viitor","future":{"one":"+{0} trim.","few":"+{0} trim.","other":"+{0} trim."},"past":{"one":"-{0} trim.","few":"-{0} trim.","other":"-{0} trim."},"-1":"trim. trecut"},"month":{"0":"luna aceasta","1":"luna viitoare","future":{"one":"peste {0} lună","few":"peste {0} luni","other":"peste {0} de luni"},"past":{"one":"acum {0} lună","few":"acum {0} luni","other":"acum {0} de luni"},"-1":"luna trecută"},"month-short":{"0":"luna aceasta","1":"luna viitoare","future":{"one":"peste {0} lună","few":"peste {0} luni","other":"peste {0} luni"},"past":{"one":"acum {0} lună","few":"acum {0} luni","other":"acum {0} luni"},"-1":"luna trecută"},"month-narrow":{"0":"luna aceasta","1":"luna viitoare","future":{"one":"+{0} lună","few":"+{0} luni","other":"+{0} luni"},"past":{"one":"-{0} lună","few":"-{0} luni","other":"-{0} luni"},"-1":"luna trecută"},"week":{"0":"săptămâna aceasta","1":"săptămâna viitoare","future":{"one":"peste {0} săptămână","few":"peste {0} săptămâni","other":"peste {0} de săptămâni"},"past":{"one":"acum {0} săptămână","few":"acum {0} săptămâni","other":"acum {0} de săptămâni"},"-1":"săptămâna trecută"},"week-short":{"0":"săpt. aceasta","1":"săpt. viitoare","future":{"one":"peste {0} săpt.","few":"peste {0} săpt.","other":"peste {0} săpt."},"past":{"one":"acum {0} săpt.","few":"acum {0} săpt.","other":"acum {0} săpt."},"-1":"săpt. trecută"},"week-narrow":{"0":"săpt. aceasta","1":"săpt. viitoare","future":{"one":"+{0} săpt.","few":"+{0} săpt.","other":"+{0} săpt."},"past":{"one":"-{0} săpt.","few":"-{0} săpt.","other":"-{0} săpt."},"-1":"săpt. trecută"},"day":{"0":"azi","1":"mâine","2":"poimâine","future":{"one":"peste {0} zi","few":"peste {0} zile","other":"peste {0} de zile"},"past":{"one":"acum {0} zi","few":"acum {0} zile","other":"acum {0} de zile"},"-2":"alaltăieri","-1":"ieri"},"day-short":{"0":"azi","1":"mâine","2":"poimâine","future":{"one":"peste {0} zi","few":"peste {0} zile","other":"peste {0} de zile"},"past":{"one":"acum {0} zi","few":"acum {0} zile","other":"acum {0} de zile"},"-2":"alaltăieri","-1":"ieri"},"day-narrow":{"0":"azi","1":"mâine","2":"poimâine","future":{"one":"+{0} zi","few":"+{0} zile","other":"+{0} zile"},"past":{"one":"-{0} zi","few":"-{0} zile","other":"-{0} zile"},"-2":"alaltăieri","-1":"ieri"},"hour":{"0":"ora aceasta","future":{"one":"peste {0} oră","few":"peste {0} ore","other":"peste {0} de ore"},"past":{"one":"acum {0} oră","few":"acum {0} ore","other":"acum {0} de ore"}},"hour-short":{"0":"ora aceasta","future":{"one":"peste {0} h","few":"peste {0} h","other":"peste {0} h"},"past":{"one":"acum {0} h","few":"acum {0} h","other":"acum {0} h"}},"hour-narrow":{"0":"ora aceasta","future":{"one":"+{0} h","few":"+{0} h","other":"+{0} h"},"past":{"one":"-{0} h","few":"-{0} h","other":"-{0} h"}},"minute":{"0":"minutul acesta","future":{"one":"peste {0} minut","few":"peste {0} minute","other":"peste {0} de minute"},"past":{"one":"acum {0} minut","few":"acum {0} minute","other":"acum {0} de minute"}},"minute-short":{"0":"minutul acesta","future":{"one":"peste {0} min.","few":"peste {0} min.","other":"peste {0} min."},"past":{"one":"acum {0} min.","few":"acum {0} min.","other":"acum {0} min."}},"minute-narrow":{"0":"minutul acesta","future":{"one":"+{0} m","few":"+{0} m","other":"+{0} m"},"past":{"one":"-{0} m","few":"-{0} m","other":"-{0} m"}},"second":{"0":"acum","future":{"one":"peste {0} secundă","few":"peste {0} secunde","other":"peste {0} de secunde"},"past":{"one":"acum {0} secundă","few":"acum {0} secunde","other":"acum {0} de secunde"}},"second-short":{"0":"acum","future":{"one":"peste {0} sec.","few":"peste {0} sec.","other":"peste {0} sec."},"past":{"one":"acum {0} sec.","few":"acum {0} sec.","other":"acum {0} sec."}},"second-narrow":{"0":"acum","future":{"one":"+{0} s","few":"+{0} s","other":"+{0} s"},"past":{"one":"-{0} s","few":"-{0} s","other":"-{0} s"}}}},"availableLocales":["ro-MD"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
