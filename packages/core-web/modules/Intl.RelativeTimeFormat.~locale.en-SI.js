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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("en-SI").length
)) {
// Intl.RelativeTimeFormat.~locale.en-SI
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"this year","1":"next year","future":{"one":"in {0} year","other":"in {0} years"},"past":{"one":"{0} year ago","other":"{0} years ago"},"-1":"last year"},"year-short":{"0":"this yr","1":"next yr","future":{"one":"in {0} yr","other":"in {0} yr"},"past":{"one":"{0} yr ago","other":"{0} yr ago"},"-1":"last yr"},"year-narrow":{"0":"this yr","1":"next yr","future":{"one":"in {0} yr","other":"in {0} yr"},"past":{"one":"{0} yr ago","other":"{0} yr ago"},"-1":"last yr"},"quarter":{"0":"this quarter","1":"next quarter","future":{"one":"in {0} quarter","other":"in {0} quarters"},"past":{"one":"{0} quarter ago","other":"{0} quarters ago"},"-1":"last quarter"},"quarter-short":{"0":"this qtr.","1":"next qtr.","future":{"one":"in {0} qtr","other":"in {0} qtr"},"past":{"one":"{0} qtr ago","other":"{0} qtr ago"},"-1":"last qtr."},"quarter-narrow":{"0":"this qtr.","1":"next qtr.","future":{"one":"in {0} qtr","other":"in {0} qtr"},"past":{"one":"{0} qtr ago","other":"{0} qtr ago"},"-1":"last qtr."},"month":{"0":"this month","1":"next month","future":{"one":"in {0} month","other":"in {0} months"},"past":{"one":"{0} month ago","other":"{0} months ago"},"-1":"last month"},"month-short":{"0":"this mo","1":"next mo","future":{"one":"in {0} mo","other":"in {0} mo"},"past":{"one":"{0} mo ago","other":"{0} mo ago"},"-1":"last mo"},"month-narrow":{"0":"this mo","1":"next mo","future":{"one":"in {0} mo","other":"in {0} mo"},"past":{"one":"{0} mo ago","other":"{0} mo ago"},"-1":"last mo"},"week":{"0":"this week","1":"next week","future":{"one":"in {0} week","other":"in {0} weeks"},"past":{"one":"{0} week ago","other":"{0} weeks ago"},"-1":"last week"},"week-short":{"0":"this wk","1":"next wk","future":{"one":"in {0} wk","other":"in {0} wk"},"past":{"one":"{0} wk ago","other":"{0} wk ago"},"-1":"last wk"},"week-narrow":{"0":"this wk","1":"next wk","future":{"one":"in {0} wk","other":"in {0} wk"},"past":{"one":"{0} wk ago","other":"{0} wk ago"},"-1":"last wk"},"day":{"0":"today","1":"tomorrow","future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"},"-1":"yesterday"},"day-short":{"0":"today","1":"tomorrow","future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"},"-1":"yesterday"},"day-narrow":{"0":"today","1":"tomorrow","future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"},"-1":"yesterday"},"hour":{"0":"this hour","future":{"one":"in {0} hour","other":"in {0} hours"},"past":{"one":"{0} hour ago","other":"{0} hours ago"}},"hour-short":{"0":"this hour","future":{"one":"in {0} hr","other":"in {0} hr"},"past":{"one":"{0} hr ago","other":"{0} hr ago"}},"hour-narrow":{"0":"this hour","future":{"one":"in {0} hr","other":"in {0} hr"},"past":{"one":"{0} hr ago","other":"{0} hr ago"}},"minute":{"0":"this minute","future":{"one":"in {0} minute","other":"in {0} minutes"},"past":{"one":"{0} minute ago","other":"{0} minutes ago"}},"minute-short":{"0":"this minute","future":{"one":"in {0} min","other":"in {0} min"},"past":{"one":"{0} min ago","other":"{0} min ago"}},"minute-narrow":{"0":"this minute","future":{"one":"in {0} min","other":"in {0} min"},"past":{"one":"{0} min ago","other":"{0} min ago"}},"second":{"0":"now","future":{"one":"in {0} second","other":"in {0} seconds"},"past":{"one":"{0} second ago","other":"{0} seconds ago"}},"second-short":{"0":"now","future":{"one":"in {0} sec","other":"in {0} sec"},"past":{"one":"{0} sec ago","other":"{0} sec ago"}},"second-narrow":{"0":"now","future":{"one":"in {0} sec","other":"in {0} sec"},"past":{"one":"{0} sec ago","other":"{0} sec ago"}}},"locale":"en-SI"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
