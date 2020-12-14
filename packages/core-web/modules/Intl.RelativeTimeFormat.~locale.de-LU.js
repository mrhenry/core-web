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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("de-LU").length
)) {
// Intl.RelativeTimeFormat.~locale.de-LU
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"dieses Jahr","1":"nächstes Jahr","future":{"one":"in {0} Jahr","other":"in {0} Jahren"},"past":{"one":"vor {0} Jahr","other":"vor {0} Jahren"},"-1":"letztes Jahr"},"year-short":{"0":"dieses Jahr","1":"nächstes Jahr","future":{"one":"in {0} Jahr","other":"in {0} Jahren"},"past":{"one":"vor {0} Jahr","other":"vor {0} Jahren"},"-1":"letztes Jahr"},"year-narrow":{"0":"dieses Jahr","1":"nächstes Jahr","future":{"one":"in {0} Jahr","other":"in {0} Jahren"},"past":{"one":"vor {0} Jahr","other":"vor {0} Jahren"},"-1":"letztes Jahr"},"quarter":{"0":"dieses Quartal","1":"nächstes Quartal","future":{"one":"in {0} Quartal","other":"in {0} Quartalen"},"past":{"one":"vor {0} Quartal","other":"vor {0} Quartalen"},"-1":"letztes Quartal"},"quarter-short":{"0":"dieses Quartal","1":"nächstes Quartal","future":{"one":"in {0} Quart.","other":"in {0} Quart."},"past":{"one":"vor {0} Quart.","other":"vor {0} Quart."},"-1":"letztes Quartal"},"quarter-narrow":{"0":"dieses Quartal","1":"nächstes Quartal","future":{"one":"in {0} Q","other":"in {0} Q"},"past":{"one":"vor {0} Q","other":"vor {0} Q"},"-1":"letztes Quartal"},"month":{"0":"diesen Monat","1":"nächsten Monat","future":{"one":"in {0} Monat","other":"in {0} Monaten"},"past":{"one":"vor {0} Monat","other":"vor {0} Monaten"},"-1":"letzten Monat"},"month-short":{"0":"diesen Monat","1":"nächsten Monat","future":{"one":"in {0} Monat","other":"in {0} Monaten"},"past":{"one":"vor {0} Monat","other":"vor {0} Monaten"},"-1":"letzten Monat"},"month-narrow":{"0":"diesen Monat","1":"nächsten Monat","future":{"one":"in {0} Monat","other":"in {0} Monaten"},"past":{"one":"vor {0} Monat","other":"vor {0} Monaten"},"-1":"letzten Monat"},"week":{"0":"diese Woche","1":"nächste Woche","future":{"one":"in {0} Woche","other":"in {0} Wochen"},"past":{"one":"vor {0} Woche","other":"vor {0} Wochen"},"-1":"letzte Woche"},"week-short":{"0":"diese Woche","1":"nächste Woche","future":{"one":"in {0} Woche","other":"in {0} Wochen"},"past":{"one":"vor {0} Woche","other":"vor {0} Wochen"},"-1":"letzte Woche"},"week-narrow":{"0":"diese Woche","1":"nächste Woche","future":{"one":"in {0} Wo.","other":"in {0} Wo."},"past":{"one":"vor {0} Wo.","other":"vor {0} Wo."},"-1":"letzte Woche"},"day":{"0":"heute","1":"morgen","2":"übermorgen","future":{"one":"in {0} Tag","other":"in {0} Tagen"},"past":{"one":"vor {0} Tag","other":"vor {0} Tagen"},"-2":"vorgestern","-1":"gestern"},"day-short":{"0":"heute","1":"morgen","2":"übermorgen","future":{"one":"in {0} Tag","other":"in {0} Tagen"},"past":{"one":"vor {0} Tag","other":"vor {0} Tagen"},"-2":"vorgestern","-1":"gestern"},"day-narrow":{"0":"heute","1":"morgen","2":"übermorgen","future":{"one":"in {0} Tag","other":"in {0} Tagen"},"past":{"one":"vor {0} Tag","other":"vor {0} Tagen"},"-2":"vorgestern","-1":"gestern"},"hour":{"0":"in dieser Stunde","future":{"one":"in {0} Stunde","other":"in {0} Stunden"},"past":{"one":"vor {0} Stunde","other":"vor {0} Stunden"}},"hour-short":{"0":"in dieser Stunde","future":{"one":"in {0} Std.","other":"in {0} Std."},"past":{"one":"vor {0} Std.","other":"vor {0} Std."}},"hour-narrow":{"0":"in dieser Stunde","future":{"one":"in {0} Std.","other":"in {0} Std."},"past":{"one":"vor {0} Std.","other":"vor {0} Std."}},"minute":{"0":"in dieser Minute","future":{"one":"in {0} Minute","other":"in {0} Minuten"},"past":{"one":"vor {0} Minute","other":"vor {0} Minuten"}},"minute-short":{"0":"in dieser Minute","future":{"one":"in {0} Min.","other":"in {0} Min."},"past":{"one":"vor {0} Min.","other":"vor {0} Min."}},"minute-narrow":{"0":"in dieser Minute","future":{"one":"in {0} m","other":"in {0} m"},"past":{"one":"vor {0} m","other":"vor {0} m"}},"second":{"0":"jetzt","future":{"one":"in {0} Sekunde","other":"in {0} Sekunden"},"past":{"one":"vor {0} Sekunde","other":"vor {0} Sekunden"}},"second-short":{"0":"jetzt","future":{"one":"in {0} Sek.","other":"in {0} Sek."},"past":{"one":"vor {0} Sek.","other":"vor {0} Sek."}},"second-narrow":{"0":"jetzt","future":{"one":"in {0} s","other":"in {0} s"},"past":{"one":"vor {0} s","other":"vor {0} s"}}},"locale":"de-LU"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
