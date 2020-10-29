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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("yo").length
)) {
// Intl.RelativeTimeFormat.~locale.yo
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"yo":{"nu":["latn"],"year":{"0":"Ọdúnǹí","1":"Àmọ́dún","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"Èṣín"},"year-short":{"0":"Ọdúnǹí","1":"Àmọ́dún","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"Èṣín"},"year-narrow":{"0":"Ọdúnǹí","1":"Àmọ́dún","future":{"other":"+{0} y"},"past":{"other":"-{0} y"},"-1":"Èṣín"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"oṣù yìí","1":"óṣù tó ń bọ̀,","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"óṣù tó kọjá"},"month-short":{"0":"oṣù yìí","1":"óṣù tó ń bọ̀,","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"óṣù tó kọjá"},"month-narrow":{"0":"oṣù yìí","1":"óṣù tó ń bọ̀,","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"óṣù tó kọjá"},"week":{"0":"ọ̀sẹ̀ yìí","1":"ọ́sẹ̀ tó ń bọ̀","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"ọ̀sẹ̀ tó kọjá"},"week-short":{"0":"ọ̀sẹ̀ yìí","1":"ọ́sẹ̀ tó ń bọ̀","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"ọ̀sẹ̀ tó kọjá"},"week-narrow":{"0":"ọ̀sẹ̀ yìí","1":"ọ́sẹ̀ tó ń bọ̀","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"ọ̀sẹ̀ tó kọjá"},"day":{"0":"Òní","1":"Ọ̀la","2":"òtúùnla","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-2":"íjẹta","-1":"Àná"},"day-short":{"0":"Òní","1":"Ọ̀la","2":"òtúùnla","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-2":"íjẹta","-1":"Àná"},"day-narrow":{"0":"Òní","1":"Ọ̀la","2":"òtúùnla","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-2":"íjẹta","-1":"Àná"},"hour":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-short":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-narrow":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"minute":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-short":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-narrow":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"second":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-short":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-narrow":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}}},"availableLocales":["yo"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
