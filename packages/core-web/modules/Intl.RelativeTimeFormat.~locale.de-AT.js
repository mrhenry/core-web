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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("de-AT").length
)) {
// Intl.RelativeTimeFormat.~locale.de-AT
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"de-AT":{"nu":["latn"],"year":{"0":"dieses Jahr","1":"nächstes Jahr","future":{"one":"in {0} Jahr","other":"in {0} Jahren"},"past":{"one":"vor {0} Jahr","other":"vor {0} Jahren"},"-1":"letztes Jahr"},"year-short":{"0":"dieses Jahr","1":"nächstes Jahr","future":{"one":"in {0} Jahr","other":"in {0} Jahren"},"past":{"one":"vor {0} Jahr","other":"vor {0} Jahren"},"-1":"letztes Jahr"},"year-narrow":{"0":"dieses Jahr","1":"nächstes Jahr","future":{"one":"in {0} Jahr","other":"in {0} Jahren"},"past":{"one":"vor {0} Jahr","other":"vor {0} Jahren"},"-1":"letztes Jahr"},"quarter":{"0":"dieses Quartal","1":"nächstes Quartal","future":{"one":"in {0} Quartal","other":"in {0} Quartalen"},"past":{"one":"vor {0} Quartal","other":"vor {0} Quartalen"},"-1":"letztes Quartal"},"quarter-short":{"0":"dieses Quartal","1":"nächstes Quartal","future":{"one":"in {0} Quart.","other":"in {0} Quart."},"past":{"one":"vor {0} Quart.","other":"vor {0} Quart."},"-1":"letztes Quartal"},"quarter-narrow":{"0":"dieses Quartal","1":"nächstes Quartal","future":{"one":"in {0} Q","other":"in {0} Q"},"past":{"one":"vor {0} Q","other":"vor {0} Q"},"-1":"letztes Quartal"},"month":{"0":"diesen Monat","1":"nächsten Monat","future":{"one":"in {0} Monat","other":"in {0} Monaten"},"past":{"one":"vor {0} Monat","other":"vor {0} Monaten"},"-1":"letzten Monat"},"month-short":{"0":"diesen Monat","1":"nächsten Monat","future":{"one":"in {0} Monat","other":"in {0} Monaten"},"past":{"one":"vor {0} Monat","other":"vor {0} Monaten"},"-1":"letzten Monat"},"month-narrow":{"0":"diesen Monat","1":"nächsten Monat","future":{"one":"in {0} Monat","other":"in {0} Monaten"},"past":{"one":"vor {0} Monat","other":"vor {0} Monaten"},"-1":"letzten Monat"},"week":{"0":"diese Woche","1":"nächste Woche","future":{"one":"in {0} Woche","other":"in {0} Wochen"},"past":{"one":"vor {0} Woche","other":"vor {0} Wochen"},"-1":"letzte Woche"},"week-short":{"0":"diese Woche","1":"nächste Woche","future":{"one":"in {0} Woche","other":"in {0} Wochen"},"past":{"one":"vor {0} Woche","other":"vor {0} Wochen"},"-1":"letzte Woche"},"week-narrow":{"0":"diese Woche","1":"nächste Woche","future":{"one":"in {0} Wo.","other":"in {0} Wo."},"past":{"one":"vor {0} Wo.","other":"vor {0} Wo."},"-1":"letzte Woche"},"day":{"0":"heute","1":"morgen","2":"übermorgen","future":{"one":"in {0} Tag","other":"in {0} Tagen"},"past":{"one":"vor {0} Tag","other":"vor {0} Tagen"},"-2":"vorgestern","-1":"gestern"},"day-short":{"0":"heute","1":"morgen","2":"übermorgen","future":{"one":"in {0} Tag","other":"in {0} Tagen"},"past":{"one":"vor {0} Tag","other":"vor {0} Tagen"},"-2":"vorgestern","-1":"gestern"},"day-narrow":{"0":"heute","1":"morgen","2":"übermorgen","future":{"one":"in {0} Tag","other":"in {0} Tagen"},"past":{"one":"vor {0} Tag","other":"vor {0} Tagen"},"-2":"vorgestern","-1":"gestern"},"hour":{"0":"in dieser Stunde","future":{"one":"in {0} Stunde","other":"in {0} Stunden"},"past":{"one":"vor {0} Stunde","other":"vor {0} Stunden"}},"hour-short":{"0":"in dieser Stunde","future":{"one":"in {0} Std.","other":"in {0} Std."},"past":{"one":"vor {0} Std.","other":"vor {0} Std."}},"hour-narrow":{"0":"in dieser Stunde","future":{"one":"in {0} Std.","other":"in {0} Std."},"past":{"one":"vor {0} Std.","other":"vor {0} Std."}},"minute":{"0":"in dieser Minute","future":{"one":"in {0} Minute","other":"in {0} Minuten"},"past":{"one":"vor {0} Minute","other":"vor {0} Minuten"}},"minute-short":{"0":"in dieser Minute","future":{"one":"in {0} Min.","other":"in {0} Min."},"past":{"one":"vor {0} Min.","other":"vor {0} Min."}},"minute-narrow":{"0":"in dieser Minute","future":{"one":"in {0} m","other":"in {0} m"},"past":{"one":"vor {0} m","other":"vor {0} m"}},"second":{"0":"jetzt","future":{"one":"in {0} Sekunde","other":"in {0} Sekunden"},"past":{"one":"vor {0} Sekunde","other":"vor {0} Sekunden"}},"second-short":{"0":"jetzt","future":{"one":"in {0} Sek.","other":"in {0} Sek."},"past":{"one":"vor {0} Sek.","other":"vor {0} Sek."}},"second-narrow":{"0":"jetzt","future":{"one":"in {0} s","other":"in {0} s"},"past":{"one":"vor {0} s","other":"vor {0} s"}}}},"availableLocales":["de-AT"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
