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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("it-CH").length
)) {
// Intl.RelativeTimeFormat.~locale.it-CH
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"it-CH":{"nu":["latn"],"year":{"0":"quest’anno","1":"anno prossimo","future":{"one":"tra {0} anno","other":"tra {0} anni"},"past":{"one":"{0} anno fa","other":"{0} anni fa"},"-1":"anno scorso"},"year-short":{"0":"quest’anno","1":"anno prossimo","future":{"one":"tra {0} anno","other":"tra {0} anni"},"past":{"one":"{0} anno fa","other":"{0} anni fa"},"-1":"anno scorso"},"year-narrow":{"0":"quest’anno","1":"anno prossimo","future":{"one":"tra {0} anno","other":"tra {0} anni"},"past":{"one":"{0} anno fa","other":"{0} anni fa"},"-1":"anno scorso"},"quarter":{"0":"questo trimestre","1":"trimestre prossimo","future":{"one":"tra {0} trimestre","other":"tra {0} trimestri"},"past":{"one":"{0} trimestre fa","other":"{0} trimestri fa"},"-1":"trimestre scorso"},"quarter-short":{"0":"questo trim.","1":"trim. prossimo","future":{"one":"tra {0} trim.","other":"tra {0} trim."},"past":{"one":"{0} trim. fa","other":"{0} trim. fa"},"-1":"trim. scorso"},"quarter-narrow":{"0":"questo trim.","1":"trim. prossimo","future":{"one":"tra {0} trim.","other":"tra {0} trim."},"past":{"one":"{0} trim. fa","other":"{0} trim. fa"},"-1":"trim. scorso"},"month":{"0":"questo mese","1":"mese prossimo","future":{"one":"tra {0} mese","other":"tra {0} mesi"},"past":{"one":"{0} mese fa","other":"{0} mesi fa"},"-1":"mese scorso"},"month-short":{"0":"questo mese","1":"mese prossimo","future":{"one":"tra {0} mese","other":"tra {0} mesi"},"past":{"one":"{0} mese fa","other":"{0} mesi fa"},"-1":"mese scorso"},"month-narrow":{"0":"questo mese","1":"mese prossimo","future":{"one":"tra {0} mese","other":"tra {0} mesi"},"past":{"one":"{0} mese fa","other":"{0} mesi fa"},"-1":"mese scorso"},"week":{"0":"questa settimana","1":"settimana prossima","future":{"one":"tra {0} settimana","other":"tra {0} settimane"},"past":{"one":"{0} settimana fa","other":"{0} settimane fa"},"-1":"settimana scorsa"},"week-short":{"0":"questa settimana","1":"settimana prossima","future":{"one":"tra {0} sett.","other":"tra {0} sett."},"past":{"one":"{0} sett. fa","other":"{0} sett. fa"},"-1":"settimana scorsa"},"week-narrow":{"0":"questa settimana","1":"settimana prossima","future":{"one":"tra {0} sett.","other":"tra {0} sett."},"past":{"one":"{0} sett. fa","other":"{0} sett. fa"},"-1":"settimana scorsa"},"day":{"0":"oggi","1":"domani","2":"dopodomani","future":{"one":"tra {0} giorno","other":"tra {0} giorni"},"past":{"one":"{0} giorno fa","other":"{0} giorni fa"},"-2":"l’altro ieri","-1":"ieri"},"day-short":{"0":"oggi","1":"domani","2":"dopodomani","future":{"one":"tra {0} g","other":"tra {0} gg"},"past":{"one":"{0} g fa","other":"{0} gg fa"},"-2":"l’altro ieri","-1":"ieri"},"day-narrow":{"0":"oggi","1":"domani","2":"dopodomani","future":{"one":"tra {0} g","other":"tra {0} gg"},"past":{"one":"{0} g fa","other":"{0} gg fa"},"-2":"l’altro ieri","-1":"ieri"},"hour":{"0":"quest’ora","future":{"one":"tra {0} ora","other":"tra {0} ore"},"past":{"one":"{0} ora fa","other":"{0} ore fa"}},"hour-short":{"0":"quest’ora","future":{"one":"tra {0} h","other":"tra {0} h"},"past":{"one":"{0} h fa","other":"{0} h fa"}},"hour-narrow":{"0":"quest’ora","future":{"one":"tra {0} h","other":"tra {0} h"},"past":{"one":"{0} h fa","other":"{0} h fa"}},"minute":{"0":"questo minuto","future":{"one":"tra {0} minuto","other":"tra {0} minuti"},"past":{"one":"{0} minuto fa","other":"{0} minuti fa"}},"minute-short":{"0":"questo minuto","future":{"one":"tra {0} min","other":"tra {0} min"},"past":{"one":"{0} min fa","other":"{0} min fa"}},"minute-narrow":{"0":"questo minuto","future":{"one":"tra {0} min","other":"tra {0} min"},"past":{"one":"{0} min fa","other":"{0} min fa"}},"second":{"0":"ora","future":{"one":"tra {0} secondo","other":"tra {0} secondi"},"past":{"one":"{0} secondo fa","other":"{0} secondi fa"}},"second-short":{"0":"ora","future":{"one":"tra {0} s","other":"tra {0} sec."},"past":{"one":"{0} s fa","other":"{0} sec. fa"}},"second-narrow":{"0":"ora","future":{"one":"tra {0} s","other":"tra {0} s"},"past":{"one":"{0} s fa","other":"{0} s fa"}}}},"availableLocales":["it-CH"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
