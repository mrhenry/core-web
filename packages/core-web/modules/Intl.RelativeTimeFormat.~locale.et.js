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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("et").length
)) {
// Intl.RelativeTimeFormat.~locale.et
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"et":{"nu":["latn"],"year":{"0":"käesolev aasta","1":"järgmine aasta","future":{"one":"{0} aasta pärast","other":"{0} aasta pärast"},"past":{"one":"{0} aasta eest","other":"{0} aasta eest"},"-1":"eelmine aasta"},"year-short":{"0":"käesolev a","1":"järgmine a","future":{"one":"{0} a pärast","other":"{0} a pärast"},"past":{"one":"{0} a eest","other":"{0} a eest"},"-1":"eelmine a"},"year-narrow":{"0":"see a","1":"järgm. a","future":{"one":"{0} a pärast","other":"{0} a pärast"},"past":{"one":"{0} a eest","other":"{0} a eest"},"-1":"eelm. a"},"quarter":{"0":"käesolev kvartal","1":"järgmine kvartal","future":{"one":"{0} kvartali pärast","other":"{0} kvartali pärast"},"past":{"one":"{0} kvartali eest","other":"{0} kvartali eest"},"-1":"eelmine kvartal"},"quarter-short":{"0":"käesolev kv","1":"järgmine kv","future":{"one":"{0} kv pärast","other":"{0} kv pärast"},"past":{"one":"{0} kv eest","other":"{0} kv eest"},"-1":"eelmine kv"},"quarter-narrow":{"0":"käesolev kv","1":"järgmine kv","future":{"one":"{0} kv pärast","other":"{0} kv pärast"},"past":{"one":"{0} kv eest","other":"{0} kv eest"},"-1":"eelmine kv"},"month":{"0":"käesolev kuu","1":"järgmine kuu","future":{"one":"{0} kuu pärast","other":"{0} kuu pärast"},"past":{"one":"{0} kuu eest","other":"{0} kuu eest"},"-1":"eelmine kuu"},"month-short":{"0":"see kuu","1":"järgm. kuu","future":{"one":"{0} kuu pärast","other":"{0} kuu pärast"},"past":{"one":"{0} kuu eest","other":"{0} kuu eest"},"-1":"eelm. kuu"},"month-narrow":{"0":"see k","1":"järgm. k","future":{"one":"{0} k pärast","other":"{0} k pärast"},"past":{"one":"{0} k eest","other":"{0} k eest"},"-1":"eelm. k"},"week":{"0":"käesolev nädal","1":"järgmine nädal","future":{"one":"{0} nädala pärast","other":"{0} nädala pärast"},"past":{"one":"{0} nädala eest","other":"{0} nädala eest"},"-1":"eelmine nädal"},"week-short":{"0":"see näd","1":"järgm. näd","future":{"one":"{0} näd pärast","other":"{0} näd pärast"},"past":{"one":"{0} näd eest","other":"{0} näd eest"},"-1":"eelm. näd"},"week-narrow":{"0":"see n","1":"järgm. n","future":{"one":"{0} näd pärast","other":"{0} näd pärast"},"past":{"one":"{0} näd eest","other":"{0} näd eest"},"-1":"eelm. n"},"day":{"0":"täna","1":"homme","2":"ülehomme","future":{"one":"{0} päeva pärast","other":"{0} päeva pärast"},"past":{"one":"{0} päeva eest","other":"{0} päeva eest"},"-2":"üleeile","-1":"eile"},"day-short":{"0":"täna","1":"homme","2":"ülehomme","future":{"one":"{0} p pärast","other":"{0} p pärast"},"past":{"one":"{0} p eest","other":"{0} p eest"},"-2":"üleeile","-1":"eile"},"day-narrow":{"0":"täna","1":"homme","2":"ülehomme","future":{"one":"{0} p pärast","other":"{0} p pärast"},"past":{"one":"{0} p eest","other":"{0} p eest"},"-2":"üleeile","-1":"eile"},"hour":{"0":"praegusel tunnil","future":{"one":"{0} tunni pärast","other":"{0} tunni pärast"},"past":{"one":"{0} tunni eest","other":"{0} tunni eest"}},"hour-short":{"0":"praegusel tunnil","future":{"one":"{0} t pärast","other":"{0} t pärast"},"past":{"one":"{0} t eest","other":"{0} t eest"}},"hour-narrow":{"0":"praegusel tunnil","future":{"one":"{0} t pärast","other":"{0} t pärast"},"past":{"one":"{0} t eest","other":"{0} t eest"}},"minute":{"0":"praegusel minutil","future":{"one":"{0} minuti pärast","other":"{0} minuti pärast"},"past":{"one":"{0} minuti eest","other":"{0} minuti eest"}},"minute-short":{"0":"praegusel minutil","future":{"one":"{0} min pärast","other":"{0} min pärast"},"past":{"one":"{0} min eest","other":"{0} min eest"}},"minute-narrow":{"0":"praegusel minutil","future":{"one":"{0} min pärast","other":"{0} min pärast"},"past":{"one":"{0} min eest","other":"{0} min eest"}},"second":{"0":"nüüd","future":{"one":"{0} sekundi pärast","other":"{0} sekundi pärast"},"past":{"one":"{0} sekundi eest","other":"{0} sekundi eest"}},"second-short":{"0":"nüüd","future":{"one":"{0} sek pärast","other":"{0} sek pärast"},"past":{"one":"{0} sek eest","other":"{0} sek eest"}},"second-narrow":{"0":"nüüd","future":{"one":"{0} s pärast","other":"{0} s pärast"},"past":{"one":"{0} s eest","other":"{0} s eest"}}}},"availableLocales":["et"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
