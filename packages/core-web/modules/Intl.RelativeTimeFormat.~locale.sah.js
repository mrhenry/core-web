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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sah").length
)) {
// Intl.RelativeTimeFormat.~locale.sah
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"sah":{"nu":["latn"],"year":{"0":"быйыл","1":"эһиил","future":{"other":"{0} сылынан"},"past":{"other":"{0} сыл ынараа өттүгэр"},"-1":"Былырыын"},"year-short":{"0":"быйыл","1":"эһиил","future":{"other":"{0} сылынан"},"past":{"other":"{0} сыл ынараа өттүгэр"},"-1":"Былырыын"},"year-narrow":{"0":"быйыл","1":"эһиил","future":{"other":"{0} сылынан"},"past":{"other":"{0} сыл ынараа өттүгэр"},"-1":"Былырыын"},"quarter":{"0":"бу кыбаартал","1":"кэлэр кыбаартал","future":{"other":"{0} кыбаарталынан"},"past":{"other":"{0} кыбаартал анараа өттүгэр"},"-1":"ааспыт кыбаартал"},"quarter-short":{"0":"бу кыбаартал","1":"кэлэр кыбаартал","future":{"other":"{0} кыбаарталынан"},"past":{"other":"{0} кыб. анараа өттүгэр"},"-1":"ааспыт кыбаартал"},"quarter-narrow":{"0":"бу кыбаартал","1":"кэлэр кыбаартал","future":{"other":"{0} кыбаарталынан"},"past":{"other":"{0} кыб. анараа өттүгэр"},"-1":"ааспыт кыбаартал"},"month":{"0":"бу ый","1":"аныгыскы ый","future":{"other":"{0} ыйынан"},"past":{"other":"{0} ый ынараа өттүгэр"},"-1":"ааспыт ый"},"month-short":{"0":"бу ый","1":"аныгыскы ый","future":{"other":"{0} ыйынан"},"past":{"other":"{0} ый ынараа өттүгэр"},"-1":"ааспыт ый"},"month-narrow":{"0":"бу ый","1":"аныгыскы ый","future":{"other":"{0} ыйынан"},"past":{"other":"{0} ый ынараа өттүгэр"},"-1":"ааспыт ый"},"week":{"0":"бу нэдиэлэ","1":"кэлэр нэдиэлэ","future":{"other":"{0} нэдиэлэннэн"},"past":{"other":"{0} нэдиэлэ анараа өттүгэр"},"-1":"ааспыт нэдиэлэ"},"week-short":{"0":"бу нэдиэлэ","1":"кэлэр нэдиэлэ","future":{"other":"{0} нэдиэлэннэн"},"past":{"other":"{0} нэдиэлэ анараа өттүгэр"},"-1":"ааспыт нэдиэлэ"},"week-narrow":{"0":"бу нэдиэлэ","1":"кэлэр нэдиэлэ","future":{"other":"{0} нэдиэлэннэн"},"past":{"other":"{0} нэдиэлэ анараа өттүгэр"},"-1":"ааспыт нэдиэлэ"},"day":{"0":"Бүгүн","1":"Сарсын","2":"Өйүүн","future":{"other":"{0} күнүнэн"},"past":{"other":"{0} күн ынараа өттүгэр"},"-2":"Иллэрээ күн","-1":"Бэҕэһээ"},"day-short":{"0":"Бүгүн","1":"Сарсын","2":"Өйүүн","future":{"other":"{0} күнүнэн"},"past":{"other":"{0} күн ынараа өттүгэр"},"-2":"Иллэрээ күн","-1":"Бэҕэһээ"},"day-narrow":{"0":"Бүгүн","1":"Сарсын","2":"Өйүүн","future":{"other":"{0} күнүнэн"},"past":{"other":"{0} күн ынараа өттүгэр"},"-2":"Иллэрээ күн","-1":"Бэҕэһээ"},"hour":{"0":"this hour","future":{"other":"{0} чааһынан"},"past":{"other":"{0} чаас ынараа өттүгэр"}},"hour-short":{"0":"this hour","future":{"other":"{0} чааһынан"},"past":{"other":"{0} чаас ынараа өттүгэр"}},"hour-narrow":{"0":"this hour","future":{"other":"{0} чааһынан"},"past":{"other":"{0} чаас ынараа өттүгэр"}},"minute":{"0":"this minute","future":{"other":"{0} мүнүүтэннэн"},"past":{"other":"{0} мүнүүтэ ынараа өттүгэр"}},"minute-short":{"0":"this minute","future":{"other":"{0} мүнүүтэннэн"},"past":{"other":"{0} мүнүүтэ ынараа өттүгэр"}},"minute-narrow":{"0":"this minute","future":{"other":"{0} мүнүүтэннэн"},"past":{"other":"{0} мүнүүтэ ынараа өттүгэр"}},"second":{"0":"билигин","future":{"other":"{0} сөкүүндэннэн"},"past":{"other":"{0} сөкүүндэ ынараа өттүгэр"}},"second-short":{"0":"билигин","future":{"other":"{0} сөкүүндэннэн"},"past":{"other":"{0} сөк. анараа өттүгэр"}},"second-narrow":{"0":"билигин","future":{"other":"{0} сөкүүндэннэн"},"past":{"other":"{0} сөк. анараа өттүгэр"}}}},"availableLocales":["sah"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
