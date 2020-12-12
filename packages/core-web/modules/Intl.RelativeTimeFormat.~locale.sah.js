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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sah").length
)) {
// Intl.RelativeTimeFormat.~locale.sah
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"быйыл","1":"эһиил","future":{"other":"{0} сылынан"},"past":{"other":"{0} сыл ынараа өттүгэр"},"-1":"Былырыын"},"year-short":{"0":"быйыл","1":"эһиил","future":{"other":"{0} сылынан"},"past":{"other":"{0} сыл ынараа өттүгэр"},"-1":"Былырыын"},"year-narrow":{"0":"быйыл","1":"эһиил","future":{"other":"{0} сылынан"},"past":{"other":"{0} сыл ынараа өттүгэр"},"-1":"Былырыын"},"quarter":{"0":"бу кыбаартал","1":"кэлэр кыбаартал","future":{"other":"{0} кыбаарталынан"},"past":{"other":"{0} кыбаартал анараа өттүгэр"},"-1":"ааспыт кыбаартал"},"quarter-short":{"0":"бу кыбаартал","1":"кэлэр кыбаартал","future":{"other":"{0} кыбаарталынан"},"past":{"other":"{0} кыб. анараа өттүгэр"},"-1":"ааспыт кыбаартал"},"quarter-narrow":{"0":"бу кыбаартал","1":"кэлэр кыбаартал","future":{"other":"{0} кыбаарталынан"},"past":{"other":"{0} кыб. анараа өттүгэр"},"-1":"ааспыт кыбаартал"},"month":{"0":"бу ый","1":"аныгыскы ый","future":{"other":"{0} ыйынан"},"past":{"other":"{0} ый ынараа өттүгэр"},"-1":"ааспыт ый"},"month-short":{"0":"бу ый","1":"аныгыскы ый","future":{"other":"{0} ыйынан"},"past":{"other":"{0} ый ынараа өттүгэр"},"-1":"ааспыт ый"},"month-narrow":{"0":"бу ый","1":"аныгыскы ый","future":{"other":"{0} ыйынан"},"past":{"other":"{0} ый ынараа өттүгэр"},"-1":"ааспыт ый"},"week":{"0":"бу нэдиэлэ","1":"кэлэр нэдиэлэ","future":{"other":"{0} нэдиэлэннэн"},"past":{"other":"{0} нэдиэлэ анараа өттүгэр"},"-1":"ааспыт нэдиэлэ"},"week-short":{"0":"бу нэдиэлэ","1":"кэлэр нэдиэлэ","future":{"other":"{0} нэдиэлэннэн"},"past":{"other":"{0} нэдиэлэ анараа өттүгэр"},"-1":"ааспыт нэдиэлэ"},"week-narrow":{"0":"бу нэдиэлэ","1":"кэлэр нэдиэлэ","future":{"other":"{0} нэдиэлэннэн"},"past":{"other":"{0} нэдиэлэ анараа өттүгэр"},"-1":"ааспыт нэдиэлэ"},"day":{"0":"Бүгүн","1":"Сарсын","2":"Өйүүн","future":{"other":"{0} күнүнэн"},"past":{"other":"{0} күн ынараа өттүгэр"},"-2":"Иллэрээ күн","-1":"Бэҕэһээ"},"day-short":{"0":"Бүгүн","1":"Сарсын","2":"Өйүүн","future":{"other":"{0} күнүнэн"},"past":{"other":"{0} күн ынараа өттүгэр"},"-2":"Иллэрээ күн","-1":"Бэҕэһээ"},"day-narrow":{"0":"Бүгүн","1":"Сарсын","2":"Өйүүн","future":{"other":"{0} күнүнэн"},"past":{"other":"{0} күн ынараа өттүгэр"},"-2":"Иллэрээ күн","-1":"Бэҕэһээ"},"hour":{"0":"this hour","future":{"other":"{0} чааһынан"},"past":{"other":"{0} чаас ынараа өттүгэр"}},"hour-short":{"0":"this hour","future":{"other":"{0} чааһынан"},"past":{"other":"{0} чаас ынараа өттүгэр"}},"hour-narrow":{"0":"this hour","future":{"other":"{0} чааһынан"},"past":{"other":"{0} чаас ынараа өттүгэр"}},"minute":{"0":"this minute","future":{"other":"{0} мүнүүтэннэн"},"past":{"other":"{0} мүнүүтэ ынараа өттүгэр"}},"minute-short":{"0":"this minute","future":{"other":"{0} мүнүүтэннэн"},"past":{"other":"{0} мүнүүтэ ынараа өттүгэр"}},"minute-narrow":{"0":"this minute","future":{"other":"{0} мүнүүтэннэн"},"past":{"other":"{0} мүнүүтэ ынараа өттүгэр"}},"second":{"0":"билигин","future":{"other":"{0} сөкүүндэннэн"},"past":{"other":"{0} сөкүүндэ ынараа өттүгэр"}},"second-short":{"0":"билигин","future":{"other":"{0} сөкүүндэннэн"},"past":{"other":"{0} сөк. анараа өттүгэр"}},"second-narrow":{"0":"билигин","future":{"other":"{0} сөкүүндэннэн"},"past":{"other":"{0} сөк. анараа өттүгэр"}}},"locale":"sah"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
