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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("tg").length
)) {
// Intl.RelativeTimeFormat.~locale.tg
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"соли ҷорӣ","1":"соли оянда","future":{"other":"пас аз {0} сол"},"past":{"other":"{0} сол пеш"},"-1":"соли гузашта"},"year-short":{"0":"соли ҷ.","1":"соли о.","future":{"other":"пас аз {0} с."},"past":{"other":"{0} с. пеш"},"-1":"соли г."},"year-narrow":{"0":"соли ҷ.","1":"соли о.","future":{"other":"пас аз {0} с."},"past":{"other":"{0} с. пеш"},"-1":"соли г."},"quarter":{"0":"чоряки ҷорӣ","1":"чоряки оянда","future":{"other":"пас аз {0} чоряк"},"past":{"other":"{0} чоряк пеш"},"-1":"чоряки гузашта"},"quarter-short":{"0":"чоряки ҷорӣ","1":"чоряки оянда","future":{"other":"пас аз {0} чр."},"past":{"other":"{0} чр. пеш"},"-1":"чоряки гузашта"},"quarter-narrow":{"0":"чоряки ҷорӣ","1":"чоряки оянда","future":{"other":"пас аз {0} чр."},"past":{"other":"{0} чр. пеш"},"-1":"чоряки гузашта"},"month":{"0":"моҳи ҷорӣ","1":"моҳи оянда","future":{"other":"пас аз {0} моҳ"},"past":{"other":"{0} моҳ пеш"},"-1":"моҳи гузашта"},"month-short":{"0":"моҳи ҷ.","1":"моҳи о.","future":{"other":"пас аз {0} м."},"past":{"other":"{0} м. пеш"},"-1":"моҳи г."},"month-narrow":{"0":"моҳи ҷ.","1":"моҳи о.","future":{"other":"пас аз {0} м."},"past":{"other":"{0} м. пеш"},"-1":"моҳи г."},"week":{"0":"ҳафтаи ҷорӣ","1":"ҳафтаи оянда","future":{"other":"пас аз {0} ҳафта"},"past":{"other":"{0} ҳафта пеш"},"-1":"ҳафтаи гузашта"},"week-short":{"0":"ҳафтаи ҷ.","1":"ҳафтаи о.","future":{"other":"пас аз {0} ҳ."},"past":{"other":"{0} ҳ. пеш"},"-1":"ҳафтаи г."},"week-narrow":{"0":"ҳафтаи ҷ.","1":"ҳафтаи о.","future":{"other":"пас аз {0} ҳ."},"past":{"other":"{0} ҳ. пеш"},"-1":"ҳафтаи г."},"day":{"0":"имрӯз","1":"фардо","future":{"other":"пас аз {0} рӯз"},"past":{"other":"{0} рӯз пеш"},"-1":"дирӯз"},"day-short":{"0":"имрӯз","1":"фардо","future":{"other":"пас аз {0} рӯз"},"past":{"other":"{0} рӯз пеш"},"-1":"дирӯз"},"day-narrow":{"0":"имрӯз","1":"фардо","future":{"other":"пас аз {0} рӯз"},"past":{"other":"{0} рӯз пеш"},"-1":"дирӯз"},"hour":{"0":"соати ҷорӣ","future":{"other":"пас аз {0} соат"},"past":{"other":"{0} соат пеш"}},"hour-short":{"0":"соати ҷорӣ","future":{"other":"пас аз {0} ст."},"past":{"other":"{0} ст. пеш"}},"hour-narrow":{"0":"соати ҷорӣ","future":{"other":"пас аз {0} ст."},"past":{"other":"{0} ст. пеш"}},"minute":{"0":"дақиқаи ҷорӣ","future":{"other":"пас аз {0} дақиқа"},"past":{"other":"{0} дақиқа пеш"}},"minute-short":{"0":"дақиқаи ҷорӣ","future":{"other":"пас аз {0} дақ."},"past":{"other":"{0} дақ. пеш"}},"minute-narrow":{"0":"дақиқаи ҷорӣ","future":{"other":"пас аз {0} дақ."},"past":{"other":"{0} дақ. пеш"}},"second":{"0":"ҳозир","future":{"other":"пас аз {0} сония"},"past":{"other":"{0} сония пеш"}},"second-short":{"0":"ҳозир","future":{"other":"пас аз {0} сон."},"past":{"other":"{0} сон. пеш"}},"second-narrow":{"0":"ҳозир","future":{"other":"пас аз {0} сон."},"past":{"other":"{0} сон. пеш"}}},"locale":"tg"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
