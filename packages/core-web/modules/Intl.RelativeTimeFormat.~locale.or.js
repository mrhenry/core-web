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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("or").length
)) {
// Intl.RelativeTimeFormat.~locale.or
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"or":{"nu":["latn"],"year":{"0":"ଏହି ବର୍ଷ","1":"ଆଗାମୀ ବର୍ଷ","future":{"one":"{0} ବର୍ଷରେ","other":"{0} ବର୍ଷରେ"},"past":{"one":"{0} ବର୍ଷ ପୂର୍ବେ","other":"{0} ବର୍ଷ ପୂର୍ବେ"},"-1":"ଗତ ବର୍ଷ"},"year-short":{"0":"ଏହି ବର୍ଷ","1":"ଆଗାମୀ ବର୍ଷ","future":{"one":"{0} ବ. ରେ","other":"{0} ବ. ରେ"},"past":{"one":"{0} ବ. ପୂର୍ବେ","other":"{0} ବ. ପୂର୍ବେ"},"-1":"ଗତ ବର୍ଷ"},"year-narrow":{"0":"ଏହି ବର୍ଷ","1":"ଆଗାମୀ ବର୍ଷ","future":{"one":"{0} ବ. ରେ","other":"{0} ବ. ରେ"},"past":{"one":"{0} ବ. ପୂର୍ବେ","other":"{0} ବ. ପୂର୍ବେ"},"-1":"ଗତ ବର୍ଷ"},"quarter":{"0":"ଗତ ତ୍ରୟମାସ","1":"ଆଗାମୀ ତ୍ରୟମାସ","future":{"one":"{0} ତ୍ରୟମାସରେ","other":"{0} ତ୍ରୟମାସରେ"},"past":{"one":"{0} ତ୍ରୟମାସ ପୂର୍ବେ","other":"{0} ତ୍ରୟମାସ ପୂର୍ବେ"},"-1":"ଗତ ତ୍ରୟମାସ"},"quarter-short":{"0":"ଏହି ତ୍ରୟମାସ","1":"ଆଗାମୀ ତ୍ରୟମାସ","future":{"one":"{0} ତ୍ରୟ. ରେ","other":"{0} ତ୍ରୟ. ରେ"},"past":{"one":"{0} ତ୍ରୟ. ପୂର୍ବେ","other":"{0} ତ୍ରୟ. ପୂର୍ବେ"},"-1":"ଗତ ତିନିମାସ"},"quarter-narrow":{"0":"ଏହି ତିନିମାସ","1":"ଆଗାମୀ ତିନିମାସ","future":{"one":"{0} ତ୍ରୟ. ରେ","other":"{0} ତ୍ରୟ. ରେ"},"past":{"one":"{0} ତ୍ରୟ. ପୂର୍ବେ","other":"{0} ତ୍ରୟ. ପୂର୍ବେ"},"-1":"ଗତ ତିନିମାସ"},"month":{"0":"ଏହି ମାସ","1":"ଆଗାମୀ ମାସ","future":{"one":"{0} ମାସରେ","other":"{0} ମାସରେ"},"past":{"one":"{0} ମାସ ପୂର୍ବେ","other":"{0} ମାସ ପୂର୍ବେ"},"-1":"ଗତ ମାସ"},"month-short":{"0":"ଏହି ମାସ","1":"ଆଗାମୀ ମାସ","future":{"one":"{0} ମା. ରେ","other":"{0} ମା. ରେ"},"past":{"one":"{0} ମା. ପୂର୍ବେ","other":"{0} ମା. ପୂର୍ବେ"},"-1":"ଗତ ମାସ"},"month-narrow":{"0":"ଏହି ମାସ","1":"ଆଗାମୀ ମାସ","future":{"one":"{0} ମା. ରେ","other":"{0} ମା. ରେ"},"past":{"one":"{0} ମା. ପୂର୍ବେ","other":"{0} ମା. ପୂର୍ବେ"},"-1":"ଗତ ମାସ"},"week":{"0":"ଏହି ସପ୍ତାହ","1":"ଆଗାମୀ ସପ୍ତାହ","future":{"one":"{0} ସପ୍ତାହରେ","other":"{0} ସପ୍ତାହରେ"},"past":{"one":"{0} ସପ୍ତାହରେ","other":"{0} ସପ୍ତାହ ପୂର୍ବେ"},"-1":"ଗତ ସପ୍ତାହ"},"week-short":{"0":"ଏହି ସପ୍ତାହ","1":"ଆଗାମୀ ସପ୍ତାହ","future":{"one":"{0} ସପ୍ତା. ରେ","other":"{0} ସପ୍ତା. ରେ"},"past":{"one":"{0} ସପ୍ତା. ପୂର୍ବେ","other":"{0} ସପ୍ତା. ପୂର୍ବେ"},"-1":"ଗତ ସପ୍ତାହ"},"week-narrow":{"0":"ଏହି ସପ୍ତାହ","1":"ଆଗାମୀ ସପ୍ତାହ","future":{"one":"{0} ସପ୍ତା. ରେ","other":"{0} ସପ୍ତା. ରେ"},"past":{"one":"{0} ସପ୍ତା. ପୂର୍ବେ","other":"{0} ସପ୍ତା. ପୂର୍ବେ"},"-1":"ଗତ ସପ୍ତାହ"},"day":{"0":"ଆଜି","1":"ଆସନ୍ତାକାଲି","future":{"one":"{0} ଦିନରେ","other":"{0} ଦିନରେ"},"past":{"one":"{0} ଦିନ ପୂର୍ବେ","other":"{0} ଦିନ ପୂର୍ବେ"},"-1":"ଗତକାଲି"},"day-short":{"0":"ଆଜି","1":"ଆସନ୍ତାକାଲି","future":{"one":"{0} ଦିନରେ","other":"{0} ଦିନରେ"},"past":{"one":"{0} ଦିନ ପୂର୍ବେ","other":"{0} ଦିନ ପୂର୍ବେ"},"-1":"ଗତକାଲି"},"day-narrow":{"0":"ଆଜି","1":"ଆସନ୍ତାକାଲି","future":{"one":"{0} ଦିନରେ","other":"{0} ଦିନରେ"},"past":{"one":"{0} ଦିନ ପୂର୍ବେ","other":"{0} ଦିନ ପୂର୍ବେ"},"-1":"ଗତକାଲି"},"hour":{"0":"ଏହି ଘଣ୍ଟା","future":{"one":"{0} ଘଣ୍ଟାରେ","other":"{0} ଘଣ୍ଟାରେ"},"past":{"one":"{0} ଘଣ୍ଟା ପୂର୍ବେ","other":"{0} ଘଣ୍ଟା ପୂର୍ବେ"}},"hour-short":{"0":"ଏହି ଘଣ୍ଟା","future":{"one":"{0} ଘ. ରେ","other":"{0} ଘ. ରେ"},"past":{"one":"{0} ଘ. ପୂର୍ବେ","other":"{0} ଘ. ପୂର୍ବେ"}},"hour-narrow":{"0":"ଏହି ଘଣ୍ଟା","future":{"one":"{0} ଘ. ରେ","other":"{0} ଘ. ରେ"},"past":{"one":"{0} ଘ. ପୂର୍ବେ","other":"{0} ଘ. ପୂର୍ବେ"}},"minute":{"0":"ଏହି ମିନିଟ୍","future":{"one":"{0} ମିନିଟ୍‌‌ରେ","other":"{0} ମିନିଟ୍‌‌ରେ"},"past":{"one":"{0} ମିନିଟ୍ ପୂର୍ବେ","other":"{0} ମିନିଟ୍ ପୂର୍ବେ"}},"minute-short":{"0":"ଏହି ମିନିଟ୍","future":{"one":"{0} ମି. ରେ","other":"{0} ମି. ରେ"},"past":{"one":"{0} ମି. ପୂର୍ବେ","other":"{0} ମି. ପୂର୍ବେ"}},"minute-narrow":{"0":"ଏହି ମିନିଟ୍","future":{"one":"{0} ମି. ରେ","other":"{0} ମି. ରେ"},"past":{"one":"{0} ମି. ପୂର୍ବେ","other":"{0} ମି. ପୂର୍ବେ"}},"second":{"0":"ବର୍ତ୍ତମାନ","future":{"one":"{0} ସେକେଣ୍ଡରେ","other":"{0} ସେକେଣ୍ଡରେ"},"past":{"one":"{0} ସେକେଣ୍ଡ ପୂର୍ବେ","other":"{0} ସେକେଣ୍ଡ ପୂର୍ବେ"}},"second-short":{"0":"ବର୍ତ୍ତମାନ","future":{"one":"{0} ସେ. ରେ","other":"{0} ସେ. ରେ"},"past":{"one":"{0} ସେ. ପୂର୍ବେ","other":"{0} ସେ. ପୂର୍ବେ"}},"second-narrow":{"0":"ବର୍ତ୍ତମାନ","future":{"one":"{0} ସେ. ରେ","other":"{0} ସେ. ରେ"},"past":{"one":"{0} ସେ. ପୂର୍ବେ","other":"{0} ସେ. ପୂର୍ବେ"}}}},"availableLocales":["or"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
