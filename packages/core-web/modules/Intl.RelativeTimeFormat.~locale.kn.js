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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("kn").length
)) {
// Intl.RelativeTimeFormat.~locale.kn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ಈ ವರ್ಷ","1":"ಮುಂದಿನ ವರ್ಷ","future":{"one":"{0} ವರ್ಷದಲ್ಲಿ","other":"{0} ವರ್ಷಗಳಲ್ಲಿ"},"past":{"one":"{0} ವರ್ಷದ ಹಿಂದೆ","other":"{0} ವರ್ಷಗಳ ಹಿಂದೆ"},"-1":"ಹಿಂದಿನ ವರ್ಷ"},"year-short":{"0":"ಈ ವರ್ಷ","1":"ಮುಂದಿನ ವರ್ಷ","future":{"one":"{0} ವರ್ಷದಲ್ಲಿ","other":"{0} ವರ್ಷಗಳಲ್ಲಿ"},"past":{"one":"{0} ವರ್ಷದ ಹಿಂದೆ","other":"{0} ವರ್ಷಗಳ ಹಿಂದೆ"},"-1":"ಕಳೆದ ವರ್ಷ"},"year-narrow":{"0":"ಈ ವರ್ಷ","1":"ಮುಂದಿನ ವರ್ಷ","future":{"one":"{0} ವರ್ಷದಲ್ಲಿ","other":"{0} ವರ್ಷಗಳಲ್ಲಿ"},"past":{"one":"{0} ವರ್ಷದ ಹಿಂದೆ","other":"{0} ವರ್ಷಗಳ ಹಿಂದೆ"},"-1":"ಕಳೆದ ವರ್ಷ"},"quarter":{"0":"ಈ ತ್ರೈಮಾಸಿಕ","1":"ಮುಂದಿನ ತ್ರೈಮಾಸಿಕ","future":{"one":"{0} ತ್ರೈಮಾಸಿಕದಲ್ಲಿ","other":"{0} ತ್ರೈಮಾಸಿಕಗಳಲ್ಲಿ"},"past":{"one":"{0} ತ್ರೈಮಾಸಿಕದ ಹಿಂದೆ","other":"{0} ತ್ರೈಮಾಸಿಕಗಳ ಹಿಂದೆ"},"-1":"ಹಿಂದಿನ ತ್ರೈಮಾಸಿಕ"},"quarter-short":{"0":"ಈ ತ್ರೈಮಾಸಿಕ","1":"ಮುಂದಿನ ತ್ರೈಮಾಸಿಕ","future":{"one":"{0} ತ್ರೈ.ಮಾ.ದಲ್ಲಿ","other":"{0} ತ್ರೈಮಾಸಿಕಗಳಲ್ಲಿ"},"past":{"one":"{0} ತ್ರೈ.ಮಾ. ಹಿಂದೆ","other":"{0} ತ್ರೈಮಾಸಿಕಗಳ ಹಿಂದೆ"},"-1":"ಕಳೆದ ತ್ರೈಮಾಸಿಕ"},"quarter-narrow":{"0":"ಈ ತ್ರೈಮಾಸಿಕ","1":"ಮುಂದಿನ ತ್ರೈಮಾಸಿಕ","future":{"one":"{0} ತ್ರೈಮಾಸಿಕಗಳಲ್ಲಿ","other":"{0} ತ್ರೈಮಾಸಿಕಗಳಲ್ಲಿ"},"past":{"one":"{0} ತ್ರೈ.ಮಾ. ಹಿಂದೆ","other":"{0} ತ್ರೈಮಾಸಿಕಗಳ ಹಿಂದೆ"},"-1":"ಕಳೆದ ತ್ರೈಮಾಸಿಕ"},"month":{"0":"ಈ ತಿಂಗಳು","1":"ಮುಂದಿನ ತಿಂಗಳು","future":{"one":"{0} ತಿಂಗಳಲ್ಲಿ","other":"{0} ತಿಂಗಳುಗಳಲ್ಲಿ"},"past":{"one":"{0} ತಿಂಗಳ ಹಿಂದೆ","other":"{0} ತಿಂಗಳುಗಳ ಹಿಂದೆ"},"-1":"ಕಳೆದ ತಿಂಗಳು"},"month-short":{"0":"ಈ ತಿಂಗಳು","1":"ಮುಂದಿನ ತಿಂಗಳು","future":{"one":"{0} ತಿಂಗಳಲ್ಲಿ","other":"{0} ತಿಂಗಳುಗಳಲ್ಲಿ"},"past":{"one":"{0} ತಿಂಗಳು ಹಿಂದೆ","other":"{0} ತಿಂಗಳುಗಳ ಹಿಂದೆ"},"-1":"ಕಳೆದ ತಿಂಗಳು"},"month-narrow":{"0":"ಈ ತಿಂಗಳು","1":"ಮುಂದಿನ ತಿಂಗಳು","future":{"one":"{0} ತಿಂಗಳಲ್ಲಿ","other":"{0} ತಿಂಗಳುಗಳಲ್ಲಿ"},"past":{"one":"{0} ತಿಂಗಳ ಹಿಂದೆ","other":"{0} ತಿಂಗಳುಗಳ ಹಿಂದೆ"},"-1":"ಕಳೆದ ತಿಂಗಳು"},"week":{"0":"ಈ ವಾರ","1":"ಮುಂದಿನ ವಾರ","future":{"one":"{0} ವಾರದಲ್ಲಿ","other":"{0} ವಾರಗಳಲ್ಲಿ"},"past":{"one":"{0} ವಾರದ ಹಿಂದೆ","other":"{0} ವಾರಗಳ ಹಿಂದೆ"},"-1":"ಕಳೆದ ವಾರ"},"week-short":{"0":"ಈ ವಾರ","1":"ಮುಂದಿನ ವಾರ","future":{"one":"{0} ವಾರದಲ್ಲಿ","other":"{0} ವಾರಗಳಲ್ಲಿ"},"past":{"one":"{0} ವಾರದ ಹಿಂದೆ","other":"{0} ವಾರಗಳ ಹಿಂದೆ"},"-1":"ಕಳೆದ ವಾರ"},"week-narrow":{"0":"ಈ ವಾರ","1":"ಮುಂದಿನ ವಾರ","future":{"one":"{0} ವಾರದಲ್ಲಿ","other":"{0} ವಾರಗಳಲ್ಲಿ"},"past":{"one":"{0} ವಾರದ ಹಿಂದೆ","other":"{0} ವಾರಗಳ ಹಿಂದೆ"},"-1":"ಕಳೆದ ವಾರ"},"day":{"0":"ಇಂದು","1":"ನಾಳೆ","2":"ನಾಡಿದ್ದು","future":{"one":"{0} ದಿನದಲ್ಲಿ","other":"{0} ದಿನಗಳಲ್ಲಿ"},"past":{"one":"{0} ದಿನದ ಹಿಂದೆ","other":"{0} ದಿನಗಳ ಹಿಂದೆ"},"-2":"ಮೊನ್ನೆ","-1":"ನಿನ್ನೆ"},"day-short":{"0":"ಇಂದು","1":"ನಾಳೆ","2":"ನಾಡಿದ್ದು","future":{"one":"{0} ದಿನದಲ್ಲಿ","other":"{0} ದಿನಗಳಲ್ಲಿ"},"past":{"one":"{0} ದಿನದ ಹಿಂದೆ","other":"{0} ದಿನಗಳ ಹಿಂದೆ"},"-2":"ಮೊನ್ನೆ","-1":"ನಿನ್ನೆ"},"day-narrow":{"0":"ಇಂದು","1":"ನಾಳೆ","2":"ನಾಡಿದ್ದು","future":{"one":"{0} ದಿನದಲ್ಲಿ","other":"{0} ದಿನಗಳಲ್ಲಿ"},"past":{"one":"{0} ದಿನದ ಹಿಂದೆ","other":"{0} ದಿನಗಳ ಹಿಂದೆ"},"-2":"ಮೊನ್ನೆ","-1":"ನಿನ್ನೆ"},"hour":{"0":"ಈ ಗಂಟೆ","future":{"one":"{0} ಗಂಟೆಯಲ್ಲಿ","other":"{0} ಗಂಟೆಗಳಲ್ಲಿ"},"past":{"one":"{0} ಗಂಟೆ ಹಿಂದೆ","other":"{0} ಗಂಟೆಗಳ ಹಿಂದೆ"}},"hour-short":{"0":"ಈ ಗಂಟೆ","future":{"one":"{0} ಗಂಟೆಯಲ್ಲಿ","other":"{0} ಗಂಟೆಗಳಲ್ಲಿ"},"past":{"one":"{0} ಗಂಟೆ ಹಿಂದೆ","other":"{0} ಗಂಟೆಗಳ ಹಿಂದೆ"}},"hour-narrow":{"0":"ಈ ಗಂಟೆ","future":{"one":"{0} ಗಂಟೆಯಲ್ಲಿ","other":"{0} ಗಂಟೆಗಳಲ್ಲಿ"},"past":{"one":"{0} ಗಂಟೆ ಹಿಂದೆ","other":"{0} ಗಂಟೆಗಳ ಹಿಂದೆ"}},"minute":{"0":"ಈ ನಿಮಿಷ","future":{"one":"{0} ನಿಮಿಷದಲ್ಲಿ","other":"{0} ನಿಮಿಷಗಳಲ್ಲಿ"},"past":{"one":"{0} ನಿಮಿಷದ ಹಿಂದೆ","other":"{0} ನಿಮಿಷಗಳ ಹಿಂದೆ"}},"minute-short":{"0":"ಈ ನಿಮಿಷ","future":{"one":"{0} ನಿಮಿಷದಲ್ಲಿ","other":"{0} ನಿಮಿಷಗಳಲ್ಲಿ"},"past":{"one":"{0} ನಿಮಿಷದ ಹಿಂದೆ","other":"{0} ನಿಮಿಷಗಳ ಹಿಂದೆ"}},"minute-narrow":{"0":"ಈ ನಿಮಿಷ","future":{"one":"{0} ನಿಮಿಷದಲ್ಲಿ","other":"{0} ನಿಮಿಷಗಳಲ್ಲಿ"},"past":{"one":"{0} ನಿಮಿಷದ ಹಿಂದೆ","other":"{0} ನಿಮಿಷಗಳ ಹಿಂದೆ"}},"second":{"0":"ಈಗ","future":{"one":"{0} ಸೆಕೆಂಡ್‌ನಲ್ಲಿ","other":"{0} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ"},"past":{"one":"{0} ಸೆಕೆಂಡ್ ಹಿಂದೆ","other":"{0} ಸೆಕೆಂಡುಗಳ ಹಿಂದೆ"}},"second-short":{"0":"ಈಗ","future":{"one":"{0} ಸೆಕೆಂಡ್‌ನಲ್ಲಿ","other":"{0} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ"},"past":{"one":"{0} ಸೆಕೆಂಡ್ ಹಿಂದೆ","other":"{0} ಸೆಕೆಂಡುಗಳ ಹಿಂದೆ"}},"second-narrow":{"0":"ಈಗ","future":{"one":"{0} ಸೆಕೆಂಡ್‌ನಲ್ಲಿ","other":"{0} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ"},"past":{"one":"{0} ಸೆಕೆಂಡ್ ಹಿಂದೆ","other":"{0} ಸೆಕೆಂಡುಗಳ ಹಿಂದೆ"}}},"locale":"kn"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
