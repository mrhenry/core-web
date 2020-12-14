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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("uz-Cyrl").length
)) {
// Intl.RelativeTimeFormat.~locale.uz-Cyrl
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"бу йил","1":"кейинги йил","future":{"one":"{0} йилдан сўнг","other":"{0} йилдан сўнг"},"past":{"one":"{0} йил аввал","other":"{0} йил аввал"},"-1":"ўтган йил"},"year-short":{"0":"бу йил","1":"кейинги йил","future":{"one":"{0} йилдан сўнг","other":"{0} йилдан сўнг"},"past":{"one":"{0} йил аввал","other":"{0} йил аввал"},"-1":"ўтган йил"},"year-narrow":{"0":"бу йил","1":"кейинги йил","future":{"one":"{0} йилдан сўнг","other":"{0} йилдан сўнг"},"past":{"one":"{0} йил аввал","other":"{0} йил аввал"},"-1":"ўтган йил"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"бу ой","1":"кейинги ой","future":{"one":"{0} ойдан сўнг","other":"{0} ойдан сўнг"},"past":{"one":"{0} ой аввал","other":"{0} ой аввал"},"-1":"ўтган ой"},"month-short":{"0":"бу ой","1":"кейинги ой","future":{"one":"{0} ойдан сўнг","other":"{0} ойдан сўнг"},"past":{"one":"{0} ой аввал","other":"{0} ой аввал"},"-1":"ўтган ой"},"month-narrow":{"0":"бу ой","1":"кейинги ой","future":{"one":"{0} ойдан сўнг","other":"{0} ойдан сўнг"},"past":{"one":"{0} ой аввал","other":"{0} ой аввал"},"-1":"ўтган ой"},"week":{"0":"бу ҳафта","1":"кейинги ҳафта","future":{"one":"{0} ҳафтадан сўнг","other":"{0} ҳафтадан сўнг"},"past":{"one":"{0} ҳафта олдин","other":"{0} ҳафта олдин"},"-1":"ўтган ҳафта"},"week-short":{"0":"бу ҳафта","1":"кейинги ҳафта","future":{"one":"{0} ҳафтадан сўнг","other":"{0} ҳафтадан сўнг"},"past":{"one":"{0} ҳафта олдин","other":"{0} ҳафта олдин"},"-1":"ўтган ҳафта"},"week-narrow":{"0":"бу ҳафта","1":"кейинги ҳафта","future":{"one":"{0} ҳафтадан сўнг","other":"{0} ҳафтадан сўнг"},"past":{"one":"{0} ҳафта олдин","other":"{0} ҳафта олдин"},"-1":"ўтган ҳафта"},"day":{"0":"бугун","1":"эртага","future":{"one":"{0} кундан сўнг","other":"{0} кундан сўнг"},"past":{"one":"{0} кун олдин","other":"{0} кун олдин"},"-1":"кеча"},"day-short":{"0":"бугун","1":"эртага","future":{"one":"{0} кундан сўнг","other":"{0} кундан сўнг"},"past":{"one":"{0} кун олдин","other":"{0} кун олдин"},"-1":"кеча"},"day-narrow":{"0":"бугун","1":"эртага","future":{"one":"{0} кундан сўнг","other":"{0} кундан сўнг"},"past":{"one":"{0} кун олдин","other":"{0} кун олдин"},"-1":"кеча"},"hour":{"0":"this hour","future":{"one":"{0} соатдан сўнг","other":"{0} соатдан сўнг"},"past":{"one":"{0} соат олдин","other":"{0} соат олдин"}},"hour-short":{"0":"this hour","future":{"one":"{0} соатдан сўнг","other":"{0} соатдан сўнг"},"past":{"one":"{0} соат олдин","other":"{0} соат олдин"}},"hour-narrow":{"0":"this hour","future":{"one":"{0} соатдан сўнг","other":"{0} соатдан сўнг"},"past":{"one":"{0} соат олдин","other":"{0} соат олдин"}},"minute":{"0":"this minute","future":{"one":"{0} дақиқадан сўнг","other":"{0} дақиқадан сўнг"},"past":{"one":"{0} дақиқа олдин","other":"{0} дақиқа олдин"}},"minute-short":{"0":"this minute","future":{"one":"{0} дақиқадан сўнг","other":"{0} дақиқадан сўнг"},"past":{"one":"{0} дақиқа олдин","other":"{0} дақиқа олдин"}},"minute-narrow":{"0":"this minute","future":{"one":"{0} дақиқадан сўнг","other":"{0} дақиқадан сўнг"},"past":{"one":"{0} дақиқа олдин","other":"{0} дақиқа олдин"}},"second":{"0":"ҳозир","future":{"one":"{0} сониядан сўнг","other":"{0} сониядан сўнг"},"past":{"one":"{0} сония олдин","other":"{0} сония олдин"}},"second-short":{"0":"ҳозир","future":{"one":"{0} сониядан сўнг","other":"{0} сониядан сўнг"},"past":{"one":"{0} сония олдин","other":"{0} сония олдин"}},"second-narrow":{"0":"ҳозир","future":{"one":"{0} сониядан сўнг","other":"{0} сониядан сўнг"},"past":{"one":"{0} сония олдин","other":"{0} сония олдин"}}},"locale":"uz-Cyrl"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
