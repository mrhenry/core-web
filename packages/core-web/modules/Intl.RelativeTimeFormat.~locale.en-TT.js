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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("en-TT").length
)) {
// Intl.RelativeTimeFormat.~locale.en-TT
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"en-TT":{"nu":["latn"],"year":{"0":"this year","1":"next year","future":{"one":"in {0} year","other":"in {0} years"},"past":{"one":"{0} year ago","other":"{0} years ago"},"-1":"last year"},"year-short":{"0":"this yr","1":"next yr","future":{"one":"in {0} yr","other":"in {0} yr"},"past":{"one":"{0} yr ago","other":"{0} yr ago"},"-1":"last yr"},"year-narrow":{"0":"this yr","1":"next yr","future":{"one":"in {0} yr","other":"in {0} yr"},"past":{"one":"{0} yr ago","other":"{0} yr ago"},"-1":"last yr"},"quarter":{"0":"this quarter","1":"next quarter","future":{"one":"in {0} quarter","other":"in {0} quarters"},"past":{"one":"{0} quarter ago","other":"{0} quarters ago"},"-1":"last quarter"},"quarter-short":{"0":"this qtr.","1":"next qtr.","future":{"one":"in {0} qtr","other":"in {0} qtr"},"past":{"one":"{0} qtr ago","other":"{0} qtr ago"},"-1":"last qtr."},"quarter-narrow":{"0":"this qtr.","1":"next qtr.","future":{"one":"in {0} qtr","other":"in {0} qtr"},"past":{"one":"{0} qtr ago","other":"{0} qtr ago"},"-1":"last qtr."},"month":{"0":"this month","1":"next month","future":{"one":"in {0} month","other":"in {0} months"},"past":{"one":"{0} month ago","other":"{0} months ago"},"-1":"last month"},"month-short":{"0":"this mo","1":"next mo","future":{"one":"in {0} mo","other":"in {0} mo"},"past":{"one":"{0} mo ago","other":"{0} mo ago"},"-1":"last mo"},"month-narrow":{"0":"this mo","1":"next mo","future":{"one":"in {0} mo","other":"in {0} mo"},"past":{"one":"{0} mo ago","other":"{0} mo ago"},"-1":"last mo"},"week":{"0":"this week","1":"next week","future":{"one":"in {0} week","other":"in {0} weeks"},"past":{"one":"{0} week ago","other":"{0} weeks ago"},"-1":"last week"},"week-short":{"0":"this wk","1":"next wk","future":{"one":"in {0} wk","other":"in {0} wk"},"past":{"one":"{0} wk ago","other":"{0} wk ago"},"-1":"last wk"},"week-narrow":{"0":"this wk","1":"next wk","future":{"one":"in {0} wk","other":"in {0} wk"},"past":{"one":"{0} wk ago","other":"{0} wk ago"},"-1":"last wk"},"day":{"0":"today","1":"tomorrow","future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"},"-1":"yesterday"},"day-short":{"0":"today","1":"tomorrow","future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"},"-1":"yesterday"},"day-narrow":{"0":"today","1":"tomorrow","future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"},"-1":"yesterday"},"hour":{"0":"this hour","future":{"one":"in {0} hour","other":"in {0} hours"},"past":{"one":"{0} hour ago","other":"{0} hours ago"}},"hour-short":{"0":"this hour","future":{"one":"in {0} hr","other":"in {0} hr"},"past":{"one":"{0} hr ago","other":"{0} hr ago"}},"hour-narrow":{"0":"this hour","future":{"one":"in {0} hr","other":"in {0} hr"},"past":{"one":"{0} hr ago","other":"{0} hr ago"}},"minute":{"0":"this minute","future":{"one":"in {0} minute","other":"in {0} minutes"},"past":{"one":"{0} minute ago","other":"{0} minutes ago"}},"minute-short":{"0":"this minute","future":{"one":"in {0} min","other":"in {0} min"},"past":{"one":"{0} min ago","other":"{0} min ago"}},"minute-narrow":{"0":"this minute","future":{"one":"in {0} min","other":"in {0} min"},"past":{"one":"{0} min ago","other":"{0} min ago"}},"second":{"0":"now","future":{"one":"in {0} second","other":"in {0} seconds"},"past":{"one":"{0} second ago","other":"{0} seconds ago"}},"second-short":{"0":"now","future":{"one":"in {0} sec","other":"in {0} sec"},"past":{"one":"{0} sec ago","other":"{0} sec ago"}},"second-narrow":{"0":"now","future":{"one":"in {0} sec","other":"in {0} sec"},"past":{"one":"{0} sec ago","other":"{0} sec ago"}}}},"availableLocales":["en-TT"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
