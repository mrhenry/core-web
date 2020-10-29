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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ta-MY").length
)) {
// Intl.RelativeTimeFormat.~locale.ta-MY
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ta-MY":{"nu":["latn"],"year":{"0":"இந்த ஆண்டு","1":"அடுத்த ஆண்டு","future":{"one":"{0} ஆண்டில்","other":"{0} ஆண்டுகளில்"},"past":{"one":"{0} ஆண்டிற்கு முன்","other":"{0} ஆண்டுகளுக்கு முன்"},"-1":"கடந்த ஆண்டு"},"year-short":{"0":"இந்த ஆண்டு","1":"அடுத்த ஆண்டு","future":{"one":"{0} ஆண்டில்","other":"{0} ஆண்டுகளில்"},"past":{"one":"{0} ஆண்டிற்கு முன்","other":"{0} ஆண்டுகளுக்கு முன்"},"-1":"கடந்த ஆண்டு"},"year-narrow":{"0":"இந்த ஆண்டு","1":"அடுத்த ஆண்டு","future":{"one":"{0} ஆ.","other":"{0} ஆ."},"past":{"one":"{0} ஆ. முன்","other":"{0} ஆ. முன்"},"-1":"கடந்த ஆண்டு"},"quarter":{"0":"இந்த காலாண்டு","1":"அடுத்த காலாண்டு","future":{"one":"+{0} காலாண்டில்","other":"{0} காலாண்டுகளில்"},"past":{"one":"{0} காலாண்டுக்கு முன்","other":"{0} காலாண்டுகளுக்கு முன்"},"-1":"கடந்த காலாண்டு"},"quarter-short":{"0":"இந்த காலாண்டு","1":"அடுத்த காலாண்டு","future":{"one":"{0} காலா.","other":"{0} காலா."},"past":{"one":"{0} காலா. முன்","other":"{0} காலா. முன்"},"-1":"இறுதி காலாண்டு"},"quarter-narrow":{"0":"இந்த காலாண்டு","1":"அடுத்த காலாண்டு","future":{"one":"{0} கா.","other":"{0} கா."},"past":{"one":"{0} கா. முன்","other":"{0} கா. முன்"},"-1":"இறுதி காலாண்டு"},"month":{"0":"இந்த மாதம்","1":"அடுத்த மாதம்","future":{"one":"{0} மாதத்தில்","other":"{0} மாதங்களில்"},"past":{"one":"{0} மாதத்துக்கு முன்","other":"{0} மாதங்களுக்கு முன்"},"-1":"கடந்த மாதம்"},"month-short":{"0":"இந்த மாதம்","1":"அடுத்த மாதம்","future":{"one":"{0} மாத.","other":"{0} மாத."},"past":{"one":"{0} மாத. முன்","other":"{0} மாத. முன்"},"-1":"கடந்த மாதம்"},"month-narrow":{"0":"இந்த மாதம்","1":"அடுத்த மாதம்","future":{"one":"{0} மா.","other":"{0} மா."},"past":{"one":"{0} மா. முன்","other":"{0} மா. முன்"},"-1":"கடந்த மாதம்"},"week":{"0":"இந்த வாரம்","1":"அடுத்த வாரம்","future":{"one":"{0} வாரத்தில்","other":"{0} வாரங்களில்"},"past":{"one":"{0} வாரத்திற்கு முன்","other":"{0} வாரங்களுக்கு முன்"},"-1":"கடந்த வாரம்"},"week-short":{"0":"இந்த வாரம்","1":"அடுத்த வாரம்","future":{"one":"{0} வார.","other":"{0} வார."},"past":{"one":"{0} வார. முன்","other":"{0} வார. முன்"},"-1":"கடந்த வாரம்"},"week-narrow":{"0":"இந்த வாரம்","1":"அடுத்த வாரம்","future":{"one":"{0} வா.","other":"{0} வா."},"past":{"one":"{0} வா. முன்","other":"{0} வா. முன்"},"-1":"கடந்த வாரம்"},"day":{"0":"இன்று","1":"நாளை","2":"நாளை மறுநாள்","future":{"one":"{0} நாளில்","other":"{0} நாட்களில்"},"past":{"one":"{0} நாளுக்கு முன்","other":"{0} நாட்களுக்கு முன்"},"-2":"நேற்று முன் தினம்","-1":"நேற்று"},"day-short":{"0":"இன்று","1":"நாளை","2":"நாளை மறுநாள்","future":{"one":"{0} நாளில்","other":"{0} நாட்களில்"},"past":{"one":"{0} நாளுக்கு முன்","other":"{0} நாட்களுக்கு முன்"},"-2":"நேற்று முன் தினம்","-1":"நேற்று"},"day-narrow":{"0":"இன்று","1":"நாளை","2":"நாளை மறுநாள்","future":{"one":"{0} நா.","other":"{0} நா."},"past":{"one":"{0} நா. முன்","other":"{0} நா. முன்"},"-2":"நேற்று முன் தினம்","-1":"நேற்று"},"hour":{"0":"இந்த ஒரு மணிநேரத்தில்","future":{"one":"{0} மணிநேரத்தில்","other":"{0} மணிநேரத்தில்"},"past":{"one":"{0} மணிநேரம் முன்","other":"{0} மணிநேரம் முன்"}},"hour-short":{"0":"இந்த ஒரு மணிநேரத்தில்","future":{"one":"{0} மணி.","other":"{0} மணி."},"past":{"one":"{0} மணி. முன்","other":"{0} மணி. முன்"}},"hour-narrow":{"0":"இந்த ஒரு மணிநேரத்தில்","future":{"one":"{0} ம.","other":"{0} ம."},"past":{"one":"{0} ம. முன்","other":"{0} ம. முன்"}},"minute":{"0":"இந்த ஒரு நிமிடத்தில்","future":{"one":"{0} நிமிடத்தில்","other":"{0} நிமிடங்களில்"},"past":{"one":"{0} நிமிடத்திற்கு முன்","other":"{0} நிமிடங்களுக்கு முன்"}},"minute-short":{"0":"இந்த ஒரு நிமிடத்தில்","future":{"one":"{0} நிமி.","other":"{0} நிமி."},"past":{"one":"{0} நிமி. முன்","other":"{0} நிமி. முன்"}},"minute-narrow":{"0":"இந்த ஒரு நிமிடத்தில்","future":{"one":"{0} நி.","other":"{0} நி."},"past":{"one":"{0} நி. முன்","other":"{0} நி. முன்"}},"second":{"0":"இப்போது","future":{"one":"{0} விநாடியில்","other":"{0} விநாடிகளில்"},"past":{"one":"{0} விநாடிக்கு முன்","other":"{0} விநாடிகளுக்கு முன்"}},"second-short":{"0":"இப்போது","future":{"one":"{0} விநா.","other":"{0} விநா."},"past":{"one":"{0} விநா. முன்","other":"{0} விநா. முன்"}},"second-narrow":{"0":"இப்போது","future":{"one":"{0} வி.","other":"{0} வி."},"past":{"one":"{0} வி. முன்","other":"{0} வி. முன்"}}}},"availableLocales":["ta-MY"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
