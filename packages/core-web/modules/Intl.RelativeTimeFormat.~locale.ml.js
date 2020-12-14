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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ml").length
)) {
// Intl.RelativeTimeFormat.~locale.ml
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ഈ വർ‌ഷം","1":"അടുത്തവർഷം","future":{"one":"{0} വർഷത്തിൽ","other":"{0} വർഷത്തിൽ"},"past":{"one":"{0} വർഷം മുമ്പ്","other":"{0} വർഷം മുമ്പ്"},"-1":"കഴിഞ്ഞ വർഷം"},"year-short":{"0":"ഈ വർ‌ഷം","1":"അടുത്തവർഷം","future":{"one":"{0} വർഷത്തിൽ","other":"{0} വർഷത്തിൽ"},"past":{"one":"{0} വർഷം മുമ്പ്","other":"{0} വർഷം മുമ്പ്"},"-1":"കഴിഞ്ഞ വർഷം"},"year-narrow":{"0":"ഈ വർ‌ഷം","1":"അടുത്തവർഷം","future":{"one":"{0} വർഷത്തിൽ","other":"{0} വർഷത്തിൽ"},"past":{"one":"{0} വർഷം മുമ്പ്","other":"{0} വർഷം മുമ്പ്"},"-1":"കഴിഞ്ഞ വർഷം"},"quarter":{"0":"ഈ പാദം","1":"അടുത്ത പാദം","future":{"one":"{0} പാദത്തിൽ","other":"{0} പാദത്തിൽ"},"past":{"one":"{0} പാദം മുമ്പ്","other":"{0} പാദം മുമ്പ്"},"-1":"കഴിഞ്ഞ പാദം"},"quarter-short":{"0":"ഈ പാദം","1":"അടുത്ത പാദം","future":{"one":"{0} പാദത്തിൽ","other":"{0} പാദത്തിൽ"},"past":{"one":"{0} പാദം മുമ്പ്","other":"{0} പാദം മുമ്പ്"},"-1":"കഴിഞ്ഞ പാദം"},"quarter-narrow":{"0":"ഈ പാദം","1":"അടുത്ത പാദം","future":{"one":"{0} പാദത്തിൽ","other":"{0} പാദത്തിൽ"},"past":{"one":"{0} പാദം മുമ്പ്","other":"{0} പാദം മുമ്പ്"},"-1":"കഴിഞ്ഞ പാദം"},"month":{"0":"ഈ മാസം","1":"അടുത്ത മാസം","future":{"one":"{0} മാസത്തിൽ","other":"{0} മാസത്തിൽ"},"past":{"one":"{0} മാസം മുമ്പ്","other":"{0} മാസം മുമ്പ്"},"-1":"കഴിഞ്ഞ മാസം"},"month-short":{"0":"ഈ മാസം","1":"അടുത്ത മാസം","future":{"one":"{0} മാസത്തിൽ","other":"{0} മാസത്തിൽ"},"past":{"one":"{0} മാസം മുമ്പ്","other":"{0} മാസം മുമ്പ്"},"-1":"കഴിഞ്ഞ മാസം"},"month-narrow":{"0":"ഈ മാസം","1":"അടുത്ത മാസം","future":{"one":"{0} മാസത്തിൽ","other":"{0} മാസത്തിൽ"},"past":{"one":"{0} മാസം മുമ്പ്","other":"{0} മാസം മുമ്പ്"},"-1":"കഴിഞ്ഞ മാസം"},"week":{"0":"ഈ ആഴ്ച","1":"അടുത്ത ആഴ്ച","future":{"one":"{0} ആഴ്ചയിൽ","other":"{0} ആഴ്ചയിൽ"},"past":{"one":"{0} ആഴ്ച മുമ്പ്","other":"{0} ആഴ്ച മുമ്പ്"},"-1":"കഴിഞ്ഞ ആഴ്‌ച"},"week-short":{"0":"ഈ ആഴ്ച","1":"അടുത്ത ആഴ്ച","future":{"one":"{0} ആഴ്ചയിൽ","other":"{0} ആഴ്ചയിൽ"},"past":{"one":"{0} ആഴ്ച മുമ്പ്","other":"{0} ആഴ്ച മുമ്പ്"},"-1":"കഴിഞ്ഞ ആഴ്‌ച"},"week-narrow":{"0":"ഈ ആഴ്ച","1":"അടുത്ത ആഴ്ച","future":{"one":"{0} ആഴ്ചയിൽ","other":"{0} ആഴ്ചയിൽ"},"past":{"one":"{0} ആഴ്ച മുമ്പ്","other":"{0} ആഴ്ച മുമ്പ്"},"-1":"കഴിഞ്ഞ ആഴ്‌ച"},"day":{"0":"ഇന്ന്","1":"നാളെ","2":"മറ്റന്നാൾ","future":{"one":"{0} ദിവസത്തിൽ","other":"{0} ദിവസത്തിൽ"},"past":{"one":"{0} ദിവസം മുമ്പ്","other":"{0} ദിവസം മുമ്പ്"},"-2":"മിനിഞ്ഞാന്ന്","-1":"ഇന്നലെ"},"day-short":{"0":"ഇന്ന്","1":"നാളെ","2":"മറ്റന്നാൾ","future":{"one":"{0} ദിവസത്തിൽ","other":"{0} ദിവസത്തിൽ"},"past":{"one":"{0} ദിവസം മുമ്പ്","other":"{0} ദിവസം മുമ്പ്"},"-2":"മിനിഞ്ഞാന്ന്","-1":"ഇന്നലെ"},"day-narrow":{"0":"ഇന്ന്","1":"നാളെ","2":"മറ്റന്നാൾ","future":{"one":"{0} ദിവസത്തിൽ","other":"{0} ദിവസത്തിൽ"},"past":{"one":"{0} ദിവസം മുമ്പ്","other":"{0} ദിവസം മുമ്പ്"},"-2":"മിനിഞ്ഞാന്ന്","-1":"ഇന്നലെ"},"hour":{"0":"ഈ മണിക്കൂറിൽ","future":{"one":"{0} മണിക്കൂറിൽ","other":"{0} മണിക്കൂറിൽ"},"past":{"one":"{0} മണിക്കൂർ മുമ്പ്","other":"{0} മണിക്കൂർ മുമ്പ്"}},"hour-short":{"0":"ഈ മണിക്കൂറിൽ","future":{"one":"{0} മണിക്കൂറിൽ","other":"{0} മണിക്കൂറിൽ"},"past":{"one":"{0} മണിക്കൂർ മുമ്പ്","other":"{0} മണിക്കൂർ മുമ്പ്"}},"hour-narrow":{"0":"ഈ മണിക്കൂറിൽ","future":{"one":"{0} മണിക്കൂറിൽ","other":"{0} മണിക്കൂറിൽ"},"past":{"one":"{0} മണിക്കൂർ മുമ്പ്","other":"{0} മണിക്കൂർ മുമ്പ്"}},"minute":{"0":"ഈ മിനിറ്റിൽ","future":{"one":"{0} മിനിറ്റിൽ","other":"{0} മിനിറ്റിൽ"},"past":{"one":"{0} മിനിറ്റ് മുമ്പ്","other":"{0} മിനിറ്റ് മുമ്പ്"}},"minute-short":{"0":"ഈ മിനിറ്റിൽ","future":{"one":"{0} മിനിറ്റിൽ","other":"{0} മിനിറ്റിൽ"},"past":{"one":"{0} മിനിറ്റ് മുമ്പ്","other":"{0} മിനിറ്റ് മുമ്പ്"}},"minute-narrow":{"0":"ഈ മിനിറ്റിൽ","future":{"one":"{0} മിനിറ്റിൽ","other":"{0} മിനിറ്റിൽ"},"past":{"one":"{0} മിനിറ്റ് മുമ്പ്","other":"{0} മിനിറ്റ് മുമ്പ്"}},"second":{"0":"ഇപ്പോൾ","future":{"one":"{0} സെക്കൻഡിൽ","other":"{0} സെക്കൻഡിൽ"},"past":{"one":"{0} സെക്കൻഡ് മുമ്പ്","other":"{0} സെക്കൻഡ് മുമ്പ്"}},"second-short":{"0":"ഇപ്പോൾ","future":{"one":"{0} സെക്കൻഡിൽ","other":"{0} സെക്കൻഡിൽ"},"past":{"one":"{0} സെക്കൻഡ് മുമ്പ്","other":"{0} സെക്കൻഡ് മുമ്പ്"}},"second-narrow":{"0":"ഇപ്പോൾ","future":{"one":"{0} സെക്കൻഡിൽ","other":"{0} സെക്കൻഡിൽ"},"past":{"one":"{0} സെക്കൻഡ് മുമ്പ്","other":"{0} സെക്കൻഡ് മുമ്പ്"}}},"locale":"ml"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
