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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("wae").length
)) {
// Intl.RelativeTimeFormat.~locale.wae
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"wae":{"nu":["latn"],"year":{"0":"this year","1":"next year","future":{"one":"I {0} jár","other":"I {0} jár"},"past":{"one":"vor {0} jár","other":"cor {0} jár"},"-1":"last year"},"year-short":{"0":"this year","1":"next year","future":{"one":"I {0} jár","other":"I {0} jár"},"past":{"one":"vor {0} jár","other":"cor {0} jár"},"-1":"last year"},"year-narrow":{"0":"this year","1":"next year","future":{"one":"I {0} jár","other":"I {0} jár"},"past":{"one":"vor {0} jár","other":"cor {0} jár"},"-1":"last year"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"this month","1":"next month","future":{"one":"I {0} mánet","other":"I {0} mánet"},"past":{"one":"vor {0} mánet","other":"vor {0} mánet"},"-1":"last month"},"month-short":{"0":"this month","1":"next month","future":{"one":"I {0} mánet","other":"I {0} mánet"},"past":{"one":"vor {0} mánet","other":"vor {0} mánet"},"-1":"last month"},"month-narrow":{"0":"this month","1":"next month","future":{"one":"I {0} mánet","other":"I {0} mánet"},"past":{"one":"vor {0} mánet","other":"vor {0} mánet"},"-1":"last month"},"week":{"0":"this week","1":"next week","future":{"one":"i {0} wuča","other":"i {0} wučä"},"past":{"one":"vor {0} wuča","other":"cor {0} wučä"},"-1":"last week"},"week-short":{"0":"this week","1":"next week","future":{"one":"i {0} wuča","other":"i {0} wučä"},"past":{"one":"vor {0} wuča","other":"cor {0} wučä"},"-1":"last week"},"week-narrow":{"0":"this week","1":"next week","future":{"one":"i {0} wuča","other":"i {0} wučä"},"past":{"one":"vor {0} wuča","other":"cor {0} wučä"},"-1":"last week"},"day":{"0":"Hitte","1":"Móre","2":"Ubermóre","future":{"one":"i {0} tag","other":"i {0} täg"},"past":{"one":"vor {0} tag","other":"vor {0} täg"},"-2":"Vorgešter","-1":"Gešter"},"day-short":{"0":"Hitte","1":"Móre","2":"Ubermóre","future":{"one":"i {0} tag","other":"i {0} täg"},"past":{"one":"vor {0} tag","other":"vor {0} täg"},"-2":"Vorgešter","-1":"Gešter"},"day-narrow":{"0":"Hitte","1":"Móre","2":"Ubermóre","future":{"one":"i {0} tag","other":"i {0} täg"},"past":{"one":"vor {0} tag","other":"vor {0} täg"},"-2":"Vorgešter","-1":"Gešter"},"hour":{"0":"this hour","future":{"one":"i {0} stund","other":"i {0} stunde"},"past":{"one":"vor {0} stund","other":"vor {0} stunde"}},"hour-short":{"0":"this hour","future":{"one":"i {0} stund","other":"i {0} stunde"},"past":{"one":"vor {0} stund","other":"vor {0} stunde"}},"hour-narrow":{"0":"this hour","future":{"one":"i {0} stund","other":"i {0} stunde"},"past":{"one":"vor {0} stund","other":"vor {0} stunde"}},"minute":{"0":"this minute","future":{"one":"i {0} minüta","other":"i {0} minüte"},"past":{"one":"vor {0} minüta","other":"vor {0} minüte"}},"minute-short":{"0":"this minute","future":{"one":"i {0} minüta","other":"i {0} minüte"},"past":{"one":"vor {0} minüta","other":"vor {0} minüte"}},"minute-narrow":{"0":"this minute","future":{"one":"i {0} minüta","other":"i {0} minüte"},"past":{"one":"vor {0} minüta","other":"vor {0} minüte"}},"second":{"0":"now","future":{"one":"i {0} sekund","other":"i {0} sekunde"},"past":{"one":"vor {0} sekund","other":"vor {0} sekunde"}},"second-short":{"0":"now","future":{"one":"i {0} sekund","other":"i {0} sekunde"},"past":{"one":"vor {0} sekund","other":"vor {0} sekunde"}},"second-narrow":{"0":"now","future":{"one":"i {0} sekund","other":"i {0} sekunde"},"past":{"one":"vor {0} sekund","other":"vor {0} sekunde"}}}},"availableLocales":["wae"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
