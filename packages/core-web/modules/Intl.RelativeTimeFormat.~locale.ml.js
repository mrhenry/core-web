import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import Get from "../helpers/_ESAbstract.Get";
import Type from "../helpers/_ESAbstract.Type";
import ToObject from "../helpers/_ESAbstract.ToObject";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import Construct from "../helpers/_ESAbstract.Construct";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
import CreateIterResultObject from "../helpers/_ESAbstract.CreateIterResultObject";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ml").length
)) {
// Intl.RelativeTimeFormat.~locale.ml
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ml":{"nu":["latn"],"year":{"0":"ഈ വർ‌ഷം","1":"അടുത്തവർഷം","future":{"one":"{0} വർഷത്തിൽ","other":"{0} വർഷത്തിൽ"},"past":{"one":"{0} വർഷം മുമ്പ്","other":"{0} വർഷം മുമ്പ്"},"-1":"കഴിഞ്ഞ വർഷം"},"year-short":{"0":"ഈ വർ‌ഷം","1":"അടുത്തവർഷം","future":{"one":"{0} വർഷത്തിൽ","other":"{0} വർഷത്തിൽ"},"past":{"one":"{0} വർഷം മുമ്പ്","other":"{0} വർഷം മുമ്പ്"},"-1":"കഴിഞ്ഞ വർഷം"},"year-narrow":{"0":"ഈ വർ‌ഷം","1":"അടുത്തവർഷം","future":{"one":"{0} വർഷത്തിൽ","other":"{0} വർഷത്തിൽ"},"past":{"one":"{0} വർഷം മുമ്പ്","other":"{0} വർഷം മുമ്പ്"},"-1":"കഴിഞ്ഞ വർഷം"},"quarter":{"0":"ഈ പാദം","1":"അടുത്ത പാദം","future":{"one":"{0} പാദത്തിൽ","other":"{0} പാദത്തിൽ"},"past":{"one":"{0} പാദം മുമ്പ്","other":"{0} പാദം മുമ്പ്"},"-1":"കഴിഞ്ഞ പാദം"},"quarter-short":{"0":"ഈ പാദം","1":"അടുത്ത പാദം","future":{"one":"{0} പാദത്തിൽ","other":"{0} പാദത്തിൽ"},"past":{"one":"{0} പാദം മുമ്പ്","other":"{0} പാദം മുമ്പ്"},"-1":"കഴിഞ്ഞ പാദം"},"quarter-narrow":{"0":"ഈ പാദം","1":"അടുത്ത പാദം","future":{"one":"{0} പാദത്തിൽ","other":"{0} പാദത്തിൽ"},"past":{"one":"{0} പാദം മുമ്പ്","other":"{0} പാദം മുമ്പ്"},"-1":"കഴിഞ്ഞ പാദം"},"month":{"0":"ഈ മാസം","1":"അടുത്ത മാസം","future":{"one":"{0} മാസത്തിൽ","other":"{0} മാസത്തിൽ"},"past":{"one":"{0} മാസം മുമ്പ്","other":"{0} മാസം മുമ്പ്"},"-1":"കഴിഞ്ഞ മാസം"},"month-short":{"0":"ഈ മാസം","1":"അടുത്ത മാസം","future":{"one":"{0} മാസത്തിൽ","other":"{0} മാസത്തിൽ"},"past":{"one":"{0} മാസം മുമ്പ്","other":"{0} മാസം മുമ്പ്"},"-1":"കഴിഞ്ഞ മാസം"},"month-narrow":{"0":"ഈ മാസം","1":"അടുത്ത മാസം","future":{"one":"{0} മാസത്തിൽ","other":"{0} മാസത്തിൽ"},"past":{"one":"{0} മാസം മുമ്പ്","other":"{0} മാസം മുമ്പ്"},"-1":"കഴിഞ്ഞ മാസം"},"week":{"0":"ഈ ആഴ്ച","1":"അടുത്ത ആഴ്ച","future":{"one":"{0} ആഴ്ചയിൽ","other":"{0} ആഴ്ചയിൽ"},"past":{"one":"{0} ആഴ്ച മുമ്പ്","other":"{0} ആഴ്ച മുമ്പ്"},"-1":"കഴിഞ്ഞ ആഴ്‌ച"},"week-short":{"0":"ഈ ആഴ്ച","1":"അടുത്ത ആഴ്ച","future":{"one":"{0} ആഴ്ചയിൽ","other":"{0} ആഴ്ചയിൽ"},"past":{"one":"{0} ആഴ്ച മുമ്പ്","other":"{0} ആഴ്ച മുമ്പ്"},"-1":"കഴിഞ്ഞ ആഴ്‌ച"},"week-narrow":{"0":"ഈ ആഴ്ച","1":"അടുത്ത ആഴ്ച","future":{"one":"{0} ആഴ്ചയിൽ","other":"{0} ആഴ്ചയിൽ"},"past":{"one":"{0} ആഴ്ച മുമ്പ്","other":"{0} ആഴ്ച മുമ്പ്"},"-1":"കഴിഞ്ഞ ആഴ്‌ച"},"day":{"0":"ഇന്ന്","1":"നാളെ","2":"മറ്റന്നാൾ","future":{"one":"{0} ദിവസത്തിൽ","other":"{0} ദിവസത്തിൽ"},"past":{"one":"{0} ദിവസം മുമ്പ്","other":"{0} ദിവസം മുമ്പ്"},"-2":"മിനിഞ്ഞാന്ന്","-1":"ഇന്നലെ"},"day-short":{"0":"ഇന്ന്","1":"നാളെ","2":"മറ്റന്നാൾ","future":{"one":"{0} ദിവസത്തിൽ","other":"{0} ദിവസത്തിൽ"},"past":{"one":"{0} ദിവസം മുമ്പ്","other":"{0} ദിവസം മുമ്പ്"},"-2":"മിനിഞ്ഞാന്ന്","-1":"ഇന്നലെ"},"day-narrow":{"0":"ഇന്ന്","1":"നാളെ","2":"മറ്റന്നാൾ","future":{"one":"{0} ദിവസത്തിൽ","other":"{0} ദിവസത്തിൽ"},"past":{"one":"{0} ദിവസം മുമ്പ്","other":"{0} ദിവസം മുമ്പ്"},"-2":"മിനിഞ്ഞാന്ന്","-1":"ഇന്നലെ"},"hour":{"0":"ഈ മണിക്കൂറിൽ","future":{"one":"{0} മണിക്കൂറിൽ","other":"{0} മണിക്കൂറിൽ"},"past":{"one":"{0} മണിക്കൂർ മുമ്പ്","other":"{0} മണിക്കൂർ മുമ്പ്"}},"hour-short":{"0":"ഈ മണിക്കൂറിൽ","future":{"one":"{0} മണിക്കൂറിൽ","other":"{0} മണിക്കൂറിൽ"},"past":{"one":"{0} മണിക്കൂർ മുമ്പ്","other":"{0} മണിക്കൂർ മുമ്പ്"}},"hour-narrow":{"0":"ഈ മണിക്കൂറിൽ","future":{"one":"{0} മണിക്കൂറിൽ","other":"{0} മണിക്കൂറിൽ"},"past":{"one":"{0} മണിക്കൂർ മുമ്പ്","other":"{0} മണിക്കൂർ മുമ്പ്"}},"minute":{"0":"ഈ മിനിറ്റിൽ","future":{"one":"{0} മിനിറ്റിൽ","other":"{0} മിനിറ്റിൽ"},"past":{"one":"{0} മിനിറ്റ് മുമ്പ്","other":"{0} മിനിറ്റ് മുമ്പ്"}},"minute-short":{"0":"ഈ മിനിറ്റിൽ","future":{"one":"{0} മിനിറ്റിൽ","other":"{0} മിനിറ്റിൽ"},"past":{"one":"{0} മിനിറ്റ് മുമ്പ്","other":"{0} മിനിറ്റ് മുമ്പ്"}},"minute-narrow":{"0":"ഈ മിനിറ്റിൽ","future":{"one":"{0} മിനിറ്റിൽ","other":"{0} മിനിറ്റിൽ"},"past":{"one":"{0} മിനിറ്റ് മുമ്പ്","other":"{0} മിനിറ്റ് മുമ്പ്"}},"second":{"0":"ഇപ്പോൾ","future":{"one":"{0} സെക്കൻഡിൽ","other":"{0} സെക്കൻഡിൽ"},"past":{"one":"{0} സെക്കൻഡ് മുമ്പ്","other":"{0} സെക്കൻഡ് മുമ്പ്"}},"second-short":{"0":"ഇപ്പോൾ","future":{"one":"{0} സെക്കൻഡിൽ","other":"{0} സെക്കൻഡിൽ"},"past":{"one":"{0} സെക്കൻഡ് മുമ്പ്","other":"{0} സെക്കൻഡ് മുമ്പ്"}},"second-narrow":{"0":"ഇപ്പോൾ","future":{"one":"{0} സെക്കൻഡിൽ","other":"{0} സെക്കൻഡിൽ"},"past":{"one":"{0} സെക്കൻഡ് മുമ്പ്","other":"{0} സെക്കൻഡ് മുമ്പ്"}}}},"availableLocales":["ml"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
