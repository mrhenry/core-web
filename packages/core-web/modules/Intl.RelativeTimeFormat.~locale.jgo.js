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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("jgo").length
)) {
// Intl.RelativeTimeFormat.~locale.jgo
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"jgo":{"nu":["latn"],"year":{"0":"this year","1":"next year","future":{"one":"Nǔu ŋguꞋ {0}","other":"Nǔu ŋguꞋ {0}"},"past":{"one":"Ɛ́gɛ́ mɔ́ ŋguꞋ {0}","other":"Ɛ́gɛ́ mɔ́ ŋguꞋ {0}"},"-1":"last year"},"year-short":{"0":"this year","1":"next year","future":{"one":"Nǔu ŋguꞋ {0}","other":"Nǔu ŋguꞋ {0}"},"past":{"one":"Ɛ́gɛ́ mɔ́ ŋguꞋ {0}","other":"Ɛ́gɛ́ mɔ́ ŋguꞋ {0}"},"-1":"last year"},"year-narrow":{"0":"this year","1":"next year","future":{"one":"Nǔu ŋguꞋ {0}","other":"Nǔu ŋguꞋ {0}"},"past":{"one":"Ɛ́gɛ́ mɔ́ ŋguꞋ {0}","other":"Ɛ́gɛ́ mɔ́ ŋguꞋ {0}"},"-1":"last year"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"this month","1":"next month","future":{"one":"Nǔu {0} saŋ","other":"Nǔu {0} saŋ"},"past":{"one":"ɛ́ gɛ́ mɔ́ pɛsaŋ {0}","other":"ɛ́ gɛ́ mɔ́ pɛsaŋ {0}"},"-1":"last month"},"month-short":{"0":"this month","1":"next month","future":{"one":"Nǔu {0} saŋ","other":"Nǔu {0} saŋ"},"past":{"one":"ɛ́ gɛ́ mɔ́ pɛsaŋ {0}","other":"ɛ́ gɛ́ mɔ́ pɛsaŋ {0}"},"-1":"last month"},"month-narrow":{"0":"this month","1":"next month","future":{"one":"Nǔu {0} saŋ","other":"Nǔu {0} saŋ"},"past":{"one":"ɛ́ gɛ́ mɔ́ pɛsaŋ {0}","other":"ɛ́ gɛ́ mɔ́ pɛsaŋ {0}"},"-1":"last month"},"week":{"0":"this week","1":"next week","future":{"one":"Nǔu ŋgap-mbi {0}","other":"Nǔu ŋgap-mbi {0}"},"past":{"one":"Ɛ́ gɛ́ mɔ {0} ŋgap-mbi","other":"Ɛ́ gɛ́ mɔ {0} ŋgap-mbi"},"-1":"last week"},"week-short":{"0":"this week","1":"next week","future":{"one":"Nǔu ŋgap-mbi {0}","other":"Nǔu ŋgap-mbi {0}"},"past":{"one":"Ɛ́ gɛ́ mɔ {0} ŋgap-mbi","other":"Ɛ́ gɛ́ mɔ {0} ŋgap-mbi"},"-1":"last week"},"week-narrow":{"0":"this week","1":"next week","future":{"one":"Nǔu ŋgap-mbi {0}","other":"Nǔu ŋgap-mbi {0}"},"past":{"one":"Ɛ́ gɛ́ mɔ {0} ŋgap-mbi","other":"Ɛ́ gɛ́ mɔ {0} ŋgap-mbi"},"-1":"last week"},"day":{"0":"lɔꞋɔ","1":"tomorrow","future":{"one":"Nǔu lɛ́Ꞌ {0}","other":"Nǔu lɛ́Ꞌ {0}"},"past":{"one":"Ɛ́ gɛ́ mɔ́ lɛ́Ꞌ {0}","other":"Ɛ́ gɛ́ mɔ́ lɛ́Ꞌ {0}"},"-1":"yesterday"},"day-short":{"0":"lɔꞋɔ","1":"tomorrow","future":{"one":"Nǔu lɛ́Ꞌ {0}","other":"Nǔu lɛ́Ꞌ {0}"},"past":{"one":"Ɛ́ gɛ́ mɔ́ lɛ́Ꞌ {0}","other":"Ɛ́ gɛ́ mɔ́ lɛ́Ꞌ {0}"},"-1":"yesterday"},"day-narrow":{"0":"lɔꞋɔ","1":"tomorrow","future":{"one":"Nǔu lɛ́Ꞌ {0}","other":"Nǔu lɛ́Ꞌ {0}"},"past":{"one":"Ɛ́ gɛ́ mɔ́ lɛ́Ꞌ {0}","other":"Ɛ́ gɛ́ mɔ́ lɛ́Ꞌ {0}"},"-1":"yesterday"},"hour":{"0":"this hour","future":{"one":"nǔu háwa {0}","other":"nǔu háwa {0}"},"past":{"one":"ɛ́ gɛ mɔ́ {0} háwa","other":"ɛ́ gɛ mɔ́ {0} háwa"}},"hour-short":{"0":"this hour","future":{"one":"nǔu háwa {0}","other":"nǔu háwa {0}"},"past":{"one":"ɛ́ gɛ mɔ́ {0} háwa","other":"ɛ́ gɛ mɔ́ {0} háwa"}},"hour-narrow":{"0":"this hour","future":{"one":"nǔu háwa {0}","other":"nǔu háwa {0}"},"past":{"one":"ɛ́ gɛ mɔ́ {0} háwa","other":"ɛ́ gɛ mɔ́ {0} háwa"}},"minute":{"0":"this minute","future":{"one":"nǔu {0} minút","other":"nǔu {0} minút"},"past":{"one":"ɛ́ gɛ́ mɔ́ minút {0}","other":"ɛ́ gɛ́ mɔ́ minút {0}"}},"minute-short":{"0":"this minute","future":{"one":"nǔu {0} minút","other":"nǔu {0} minút"},"past":{"one":"ɛ́ gɛ́ mɔ́ minút {0}","other":"ɛ́ gɛ́ mɔ́ minút {0}"}},"minute-narrow":{"0":"this minute","future":{"one":"nǔu {0} minút","other":"nǔu {0} minút"},"past":{"one":"ɛ́ gɛ́ mɔ́ minút {0}","other":"ɛ́ gɛ́ mɔ́ minút {0}"}},"second":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-short":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-narrow":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}}},"availableLocales":["jgo"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
