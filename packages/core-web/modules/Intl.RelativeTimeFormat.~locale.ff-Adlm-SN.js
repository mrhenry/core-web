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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ff-Adlm-SN").length
)) {
// Intl.RelativeTimeFormat.~locale.ff-Adlm-SN
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["adlm"],"year":{"0":"𞤸𞤭𞤼𞤢𞥄𞤲𞥋𞤣𞤫 𞤸𞤭𞤳𞥆𞤢","1":"𞤸𞤭𞤼𞤢𞥄𞤲𞥋𞤣𞤫 𞤸𞤭𞤳𞥆𞤭𞥅𞤲𞥋𞤣𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤸𞤭𞤼𞤢𞥄𞤲𞥋𞤣𞤫","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤳𞤭𞤼𞤢𞥄𞤯𞤫"},"past":{"one":"{0} 𞤸𞤭𞤼𞤢𞥄𞤲𞥋𞤣𞤫 𞤪𞤫𞤱𞤢𞤲𞤭","other":"{0} 𞤳𞤭𞤼𞤢𞥄𞤯𞤫 𞤪𞤫𞤱𞤢𞤲𞤭"},"-1":"𞤸𞤭𞤼𞤢𞥄𞤲𞥋𞤣𞤫 𞤪𞤫𞤱𞤢𞤲𞤭"},"year-short":{"0":"𞤸𞤭𞤼. 𞤸𞤭𞤳𞥆𞤢","1":"𞤸𞤭𞤼. 𞤸𞤭𞤳𞥆𞤭𞥅𞤲𞤣𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤸𞤭𞤼.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤸𞤭𞤼."},"past":{"one":"{0} 𞤸𞤭𞤼. 𞤪𞤫𞤱𞤢𞤲𞤭","other":"{0} 𞤳𞤭𞤼. 𞤪𞤫𞤱𞤢𞤲𞤭"},"-1":"𞤸𞤭𞤼. 𞤪𞤫𞤱𞤢𞤲𞤭"},"year-narrow":{"0":"𞤸𞤭𞤼. 𞤸𞤭𞤳𞥆𞤢","1":"𞤸𞤭𞤼. 𞤸𞤭𞤳𞥆𞤭𞥅𞤲𞤣𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤸𞤭𞤼.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤸𞤭𞤼."},"past":{"one":"{0} 𞤸𞤭𞤼. 𞤪𞤫𞤱𞤢𞤲𞤭","other":"{0} 𞤳𞤭𞤼. 𞤪𞤫𞤱𞤢𞤲𞤭"},"-1":"𞤸𞤭𞤼. 𞤪𞤫𞤱𞤢𞤲𞤭"},"quarter":{"0":"𞤲𞥋𞤣𞤫𞥅 𞤯𞤮𞤮 𞤲𞤢𞤴𞤩𞤭𞥅𞤪𞤫","1":"𞤲𞤢𞤴𞤩𞤭𞥅𞤪𞤫 𞤸𞤭𞤳𞥆𞤭𞥅𞤲𞥋𞤣𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤲𞤢𞤴𞤩𞤭𞥅𞤪𞤫","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤲𞤢𞤴𞤩𞤭𞥅𞤶𞤫"},"past":{"one":"{0} 𞤲𞤢𞤴𞤩𞤭𞥅𞤪𞤫 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤲𞤢𞤴𞤢𞤩𞤭𞥅𞤶𞤫 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"},"-1":"𞤲𞤢𞤴𞤩𞤭𞥅𞤪𞤫 𞤬𞤫𞤰𞥆𞤵𞤲𞥋𞤣𞤫"},"quarter-short":{"0":"𞤲𞥋𞤣𞤫𞥅 𞤯𞤮𞤮 𞤲𞤢𞤴𞤩𞤭𞥅𞤪𞤫","1":"𞤲𞤢𞤴𞤩𞤭𞥅𞤪𞤫 𞤸𞤭𞤳𞥆𞤭𞥅𞤲𞥋𞤣𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤲𞤢𞤴.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤲𞤢𞤴𞤶."},"past":{"one":"{0} 𞤲𞤢𞤴. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤲𞤢𞤴𞤶. 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"},"-1":"𞤲𞤢𞤴𞤩𞤭𞥅𞤪𞤫 𞤬𞤫𞤰𞥆𞤵𞤲𞥋𞤣𞤫"},"quarter-narrow":{"0":"𞤲𞥋𞤣𞤫𞥅 𞤯𞤮𞤮 𞤲𞤢𞤴𞤩𞤭𞥅𞤪𞤫","1":"𞤲𞤢𞤴𞤩𞤭𞥅𞤪𞤫 𞤸𞤭𞤳𞥆𞤭𞥅𞤲𞥋𞤣𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤲𞤢𞤴.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤲𞤢𞤴𞤶."},"past":{"one":"{0} 𞤲𞤢𞤴. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤲𞤢𞤴𞤶. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫"},"-1":"𞤲𞤢𞤴𞤩𞤭𞥅𞤪𞤫 𞤬𞤫𞤰𞥆𞤵𞤲𞥋𞤣𞤫"},"month":{"0":"𞤲𞥋𞤣𞤵𞥅 𞤯𞤮𞤮 𞤤𞤫𞤱𞤪𞤵","1":"𞤤𞤫𞤱𞤪𞤵 𞤢𞤪𞤢𞤴𞤲𞥋𞤣𞤵","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤤𞤫𞤱𞤪𞤵","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤤𞤫𞤦𞥆𞤭"},"past":{"one":"{0} 𞤤𞤫𞤱𞤪𞤵 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤵","other":"{0} 𞤤𞤫𞤦𞥆𞤭 𞤱𞤵𞤤𞤭𞥅𞤯𞤭"},"-1":"𞤤𞤫𞤱𞤪𞤵 𞤬𞤫𞤰𞥆𞤵𞤲𞥋𞤣𞤵"},"month-short":{"0":"𞤲𞤣𞤮𞥅 𞤯𞤮𞤮 𞤤𞤫𞤱.","1":"𞤤𞤫𞤱. 𞤸𞤭𞤳𞥆𞤭𞥅𞤲𞤣𞤵","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤤𞤫𞤱.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤤𞤫𞤦."},"past":{"one":"{0} 𞤤𞤫𞤱. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤵","other":"{0} 𞤤𞤫𞤦. 𞤱𞤵𞤤𞤭𞥅𞤯𞤭"},"-1":"𞤤𞤫𞤱. 𞤬𞤫𞤰𞥆𞤵𞤲𞥋𞤣𞤵"},"month-narrow":{"0":"𞤲𞤣𞤮𞥅 𞤯𞤮𞤮 𞤤𞤫𞤱.","1":"𞤤𞤫𞤱. 𞤸𞤭𞤳𞥆𞤭𞥅𞤲𞤣𞤵","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤤𞤫𞤱.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤤𞤫𞤦."},"past":{"one":"{0} 𞤤𞤫𞤱. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤵","other":"{0} 𞤤𞤫𞤦. 𞤱𞤵𞤤𞤭𞥅𞤯𞤭"},"-1":"𞤤𞤫𞤱. 𞤬𞤫𞤰𞥆𞤵𞤲𞥋𞤣𞤵"},"week":{"0":"𞤲𞤣𞤫𞥅 𞤯𞤮𞤮 𞤴𞤮𞤲𞤼𞤫𞤪𞤫","1":"𞤴𞤮𞤲𞤼𞤫𞤪𞤫 𞤢𞤪𞤢𞤴𞤲𞤣𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤴𞤮𞤲𞤼𞤫𞤪𞤫","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤶𞤮𞤲𞤼𞤫"},"past":{"one":"{0} 𞤴𞤮𞤲𞤼𞤫𞤪𞤫 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤶𞤮𞤲𞤼𞤫 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"},"-1":"𞤴𞤮𞤲𞤼𞤫𞤪𞤫 𞤬𞤫𞤰𞥆𞤵𞤲𞥋𞤣𞤫"},"week-short":{"0":"𞤲𞤣𞤫𞥅 𞤯𞤮𞤮 𞤴𞤼.","1":"𞤴𞤼. 𞤸𞤭𞤳𞥆𞤭𞥅𞤲𞤣𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤴𞤼.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤶𞤼."},"past":{"one":"{0} 𞤴𞤼. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤶𞤼. 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"},"-1":"𞤴𞤼. 𞤬𞤫𞤰𞥆𞤵𞤲𞥋𞤣𞤫"},"week-narrow":{"0":"𞤲𞤣𞤫𞥅 𞤯𞤮𞤮 𞤴𞤼.","1":"𞤴𞤼. 𞤸𞤭𞤳𞥆𞤭𞥅𞤲𞤣𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤴𞤼.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤶𞤼."},"past":{"one":"{0} 𞤴𞤼. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤶𞤼. 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"},"-1":"𞤴𞤼. 𞤬𞤫𞤰𞥆𞤵𞤲𞥋𞤣𞤫"},"day":{"0":"𞤸𞤢𞤲𞤣𞤫","1":"𞤶𞤢𞤲𞤺𞤮","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤻𞤢𞤤𞥆𞤢𞤤","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤻𞤢𞤤𞥆𞤫"},"past":{"one":"{0} 𞤻𞤢𞤤𞥆𞤢𞤤 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤻𞤢𞤤𞥆𞤫 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"},"-1":"𞤸𞤢𞤲𞤳𞤭"},"day-short":{"0":"𞤸𞤢𞤲𞤣𞤫","1":"𞤶𞤢𞤲𞤺𞤮","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤻𞤢𞤤𞥆𞤢𞤤","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤻𞤢𞤤𞥆𞤫"},"past":{"one":"{0} 𞤻𞤢𞤤𞥆𞤢𞤤 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤻𞤢𞤤𞥆𞤫 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"},"-1":"𞤸𞤢𞤲𞤳𞤭"},"day-narrow":{"0":"𞤸𞤢𞤲𞤣𞤫","1":"𞤶𞤢𞤲𞤺𞤮","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤻𞤢𞤤𞥆𞤢𞤤","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤻𞤢𞤤𞥆𞤫"},"past":{"one":"{0} 𞤻𞤢𞤤𞥆𞤢𞤤 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤻𞤢𞤤𞥆𞤫 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"},"-1":"𞤸𞤢𞤲𞤳𞤭"},"hour":{"0":"𞤲𞥋𞤣𞤭𞥅 𞤯𞤮𞤮 𞤲𞥋𞤶𞤢𞤥𞤲𞥋𞤣𞤭","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤲𞥋𞤶𞤢𞤥𞤲𞥋𞤣𞤭","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤲𞥋𞤶𞤢𞤥𞤤𞤭"},"past":{"one":"{0} 𞤲𞥋𞤶𞤢𞤥𞤲𞥋𞤣𞤭 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤭","other":"{0} 𞤲𞥋𞤶𞤢𞤥𞤤𞤭 𞤱𞤵𞤤𞤭𞥅𞤯𞤭"}},"hour-short":{"0":"𞤲𞥋𞤣𞤭𞥅 𞤯𞤮𞤮 𞤲𞥋𞤶𞤢𞤥𞤲𞥋𞤣𞤭","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤶𞤢.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤶𞤢."},"past":{"one":"{0} 𞤶𞤢. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤭","other":"{0} 𞤶𞤢. 𞤱𞤵𞤤𞤭𞥅𞤯𞤭"}},"hour-narrow":{"0":"𞤲𞥋𞤣𞤭𞥅 𞤯𞤮𞤮 𞤲𞥋𞤶𞤢𞤥𞤲𞥋𞤣𞤭","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤶𞤢.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤶𞤢."},"past":{"one":"{0} 𞤶𞤢. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤭","other":"{0} 𞤶𞤢. 𞤱𞤵𞤤𞤭𞥅𞤯𞤭"}},"minute":{"0":"𞤲𞥋𞤣𞤫𞥅 𞤯𞤮𞤮 𞤸𞤮𞤶𞤮𞤥𞤪𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤸𞤮𞤶𞤮𞤥𞤪𞤫","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤳𞤮𞤶𞤮𞤥𞤶𞤫"},"past":{"one":"{0} 𞤸𞤮𞤶𞤮𞤥𞤪𞤫 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤳𞤮𞤶𞤮𞤥𞤶𞤫 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"}},"minute-short":{"0":"𞤲𞥋𞤣𞤫𞥅 𞤯𞤮𞤮 𞤸𞤮𞤶𞤮𞤥𞤪𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤸𞤮𞤶.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤸𞤮𞤶."},"past":{"one":"{0} 𞤸𞤮𞤶. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤳𞤮𞤶. 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"}},"minute-narrow":{"0":"𞤲𞥋𞤣𞤫𞥅 𞤯𞤮𞤮 𞤸𞤮𞤶𞤮𞤥𞤪𞤫","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤸𞤮𞤶.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤸𞤮𞤶."},"past":{"one":"{0} 𞤸𞤮𞤶. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤣𞤫","other":"{0} 𞤸𞤮𞤶. 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"}},"second":{"0":"𞤶𞤮𞥅𞤲𞤭","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤳𞤭𞤲𞤰𞤢𞤤","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤳𞤭𞤲𞤰𞤫"},"past":{"one":"{0} 𞤳𞤭𞤲𞤰𞤢𞤤 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤺𞤢𞤤","other":"{0} 𞤳𞤭𞤲𞤰𞤫 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"}},"second-short":{"0":"𞤶𞤮𞥅𞤲𞤭","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤳𞤭𞤲.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤳𞤭𞤲."},"past":{"one":"{0} 𞤳𞤭𞤲. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤺𞤢𞤤","other":"{0} 𞤳𞤭𞤲. 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"}},"second-narrow":{"0":"𞤶𞤮𞥅𞤲𞤭","future":{"one":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤳𞤭𞤲.","other":"𞤲𞥋𞤣𞤫𞤪 {0} 𞤳𞤭𞤲."},"past":{"one":"{0} 𞤳𞤭𞤲. 𞤱𞤵𞤤𞤭𞥅𞤲𞥋𞤺𞤢𞤤","other":"{0} 𞤳𞤭𞤲. 𞤱𞤵𞤤𞤭𞥅𞤯𞤫"}}},"locale":"ff-Adlm-SN"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
