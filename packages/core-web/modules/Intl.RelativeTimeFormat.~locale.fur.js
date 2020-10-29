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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("fur").length
)) {
// Intl.RelativeTimeFormat.~locale.fur
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"fur":{"nu":["latn"],"year":{"0":"this year","1":"next year","future":{"one":"ca di {0} an","other":"ca di {0} agns"},"past":{"one":"{0} an indaûr","other":"{0} agns indaûr"},"-1":"last year"},"year-short":{"0":"this year","1":"next year","future":{"one":"ca di {0} an","other":"ca di {0} agns"},"past":{"one":"{0} an indaûr","other":"{0} agns indaûr"},"-1":"last year"},"year-narrow":{"0":"this year","1":"next year","future":{"one":"ca di {0} an","other":"ca di {0} agns"},"past":{"one":"{0} an indaûr","other":"{0} agns indaûr"},"-1":"last year"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"this month","1":"next month","future":{"one":"ca di {0} mês","other":"ca di {0} mês"},"past":{"one":"{0} mês indaûr","other":"{0} mês indaûr"},"-1":"last month"},"month-short":{"0":"this month","1":"next month","future":{"one":"ca di {0} mês","other":"ca di {0} mês"},"past":{"one":"{0} mês indaûr","other":"{0} mês indaûr"},"-1":"last month"},"month-narrow":{"0":"this month","1":"next month","future":{"one":"ca di {0} mês","other":"ca di {0} mês"},"past":{"one":"{0} mês indaûr","other":"{0} mês indaûr"},"-1":"last month"},"week":{"0":"this week","1":"next week","future":{"one":"ca di {0} setemane","other":"ca di {0} setemanis"},"past":{"one":"{0} setemane indaûr","other":"{0} setemanis indaûr"},"-1":"last week"},"week-short":{"0":"this week","1":"next week","future":{"one":"ca di {0} setemane","other":"ca di {0} setemanis"},"past":{"one":"{0} setemane indaûr","other":"{0} setemanis indaûr"},"-1":"last week"},"week-narrow":{"0":"this week","1":"next week","future":{"one":"ca di {0} setemane","other":"ca di {0} setemanis"},"past":{"one":"{0} setemane indaûr","other":"{0} setemanis indaûr"},"-1":"last week"},"day":{"0":"vuê","1":"doman","2":"passantdoman","future":{"one":"ca di {0} zornade","other":"ca di {0} zornadis"},"past":{"one":"{0} zornade indaûr","other":"{0} zornadis indaûr"},"-2":"îr l’altri","-1":"îr"},"day-short":{"0":"vuê","1":"doman","2":"passantdoman","future":{"one":"ca di {0} zornade","other":"ca di {0} zornadis"},"past":{"one":"{0} zornade indaûr","other":"{0} zornadis indaûr"},"-2":"îr l’altri","-1":"îr"},"day-narrow":{"0":"vuê","1":"doman","2":"passantdoman","future":{"one":"ca di {0} zornade","other":"ca di {0} zornadis"},"past":{"one":"{0} zornade indaûr","other":"{0} zornadis indaûr"},"-2":"îr l’altri","-1":"îr"},"hour":{"0":"this hour","future":{"one":"ca di {0} ore","other":"ca di {0} oris"},"past":{"one":"{0} ore indaûr","other":"{0} oris indaûr"}},"hour-short":{"0":"this hour","future":{"one":"ca di {0} ore","other":"ca di {0} oris"},"past":{"one":"{0} ore indaûr","other":"{0} oris indaûr"}},"hour-narrow":{"0":"this hour","future":{"one":"ca di {0} ore","other":"ca di {0} oris"},"past":{"one":"{0} ore indaûr","other":"{0} oris indaûr"}},"minute":{"0":"this minute","future":{"one":"ca di {0} minût","other":"ca di {0} minûts"},"past":{"one":"{0} minût indaûr","other":"{0} minûts indaûr"}},"minute-short":{"0":"this minute","future":{"one":"ca di {0} minût","other":"ca di {0} minûts"},"past":{"one":"{0} minût indaûr","other":"{0} minûts indaûr"}},"minute-narrow":{"0":"this minute","future":{"one":"ca di {0} minût","other":"ca di {0} minûts"},"past":{"one":"{0} minût indaûr","other":"{0} minûts indaûr"}},"second":{"0":"now","future":{"one":"ca di {0} secont","other":"ca di {0} seconts"},"past":{"one":"{0} secont indaûr","other":"{0} seconts indaûr"}},"second-short":{"0":"now","future":{"one":"ca di {0} secont","other":"ca di {0} seconts"},"past":{"one":"{0} secont indaûr","other":"{0} seconts indaûr"}},"second-narrow":{"0":"now","future":{"one":"ca di {0} secont","other":"ca di {0} seconts"},"past":{"one":"{0} secont indaûr","other":"{0} seconts indaûr"}}}},"availableLocales":["fur"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
