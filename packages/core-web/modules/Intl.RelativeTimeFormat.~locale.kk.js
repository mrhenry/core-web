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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("kk").length
)) {
// Intl.RelativeTimeFormat.~locale.kk
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"kk":{"nu":["latn"],"year":{"0":"биылғы жыл","1":"келесі жыл","future":{"one":"{0} жылдан кейін","other":"{0} жылдан кейін"},"past":{"one":"{0} жыл бұрын","other":"{0} жыл бұрын"},"-1":"былтырғы жыл"},"year-short":{"0":"биылғы жыл","1":"келесі жыл","future":{"one":"{0} ж. кейін","other":"{0} ж. кейін"},"past":{"one":"{0} ж. бұрын","other":"{0} ж. бұрын"},"-1":"былтырғы жыл"},"year-narrow":{"0":"биылғы жыл","1":"келесі жыл","future":{"one":"{0} ж. кейін","other":"{0} ж. кейін"},"past":{"one":"{0} ж. бұрын","other":"{0} ж. бұрын"},"-1":"былтырғы жыл"},"quarter":{"0":"осы тоқсан","1":"келесі тоқсан","future":{"one":"{0} тоқсаннан кейін","other":"{0} тоқсаннан кейін"},"past":{"one":"{0} тоқсан бұрын","other":"{0} тоқсан бұрын"},"-1":"өткен тоқсан"},"quarter-short":{"0":"осы тоқсан","1":"келесі тоқсан","future":{"one":"{0} тқс. кейін","other":"{0} тқс. кейін"},"past":{"one":"{0} тқс. бұрын","other":"{0} тқс. бұрын"},"-1":"өткен тоқсан"},"quarter-narrow":{"0":"осы тоқсан","1":"келесі тоқсан","future":{"one":"{0} тқс. кейін","other":"{0} тқс. кейін"},"past":{"one":"{0} тқс. бұрын","other":"{0} тқс. бұрын"},"-1":"өткен тоқсан"},"month":{"0":"осы ай","1":"келесі ай","future":{"one":"{0} айдан кейін","other":"{0} айдан кейін"},"past":{"one":"{0} ай бұрын","other":"{0} ай бұрын"},"-1":"өткен ай"},"month-short":{"0":"осы ай","1":"келесі ай","future":{"one":"{0} айдан кейін","other":"{0} айдан кейін"},"past":{"one":"{0} ай бұрын","other":"{0} ай бұрын"},"-1":"өткен ай"},"month-narrow":{"0":"осы ай","1":"келесі ай","future":{"one":"{0} айдан кейін","other":"{0} айдан кейін"},"past":{"one":"{0} ай бұрын","other":"{0} ай бұрын"},"-1":"өткен ай"},"week":{"0":"осы апта","1":"келесі апта","future":{"one":"{0} аптадан кейін","other":"{0} аптадан кейін"},"past":{"one":"{0} апта бұрын","other":"{0} апта бұрын"},"-1":"өткен апта"},"week-short":{"0":"осы апта","1":"келесі апта","future":{"one":"{0} ап. кейін","other":"{0} ап. кейін"},"past":{"one":"{0} ап. бұрын","other":"{0} ап. бұрын"},"-1":"өткен апта"},"week-narrow":{"0":"осы апта","1":"келесі апта","future":{"one":"{0} ап. кейін","other":"{0} ап. кейін"},"past":{"one":"{0} ап. бұрын","other":"{0} ап. бұрын"},"-1":"өткен апта"},"day":{"0":"бүгін","1":"ертең","2":"бүрсігүні","future":{"one":"{0} күннен кейін","other":"{0} күннен кейін"},"past":{"one":"{0} күн бұрын","other":"{0} күн бұрын"},"-2":"алдыңгүні","-1":"кеше"},"day-short":{"0":"бүгін","1":"ертең","2":"бүрсігүні","future":{"one":"{0} күннен кейін","other":"{0} күннен кейін"},"past":{"one":"{0} күн бұрын","other":"{0} күн бұрын"},"-2":"алдыңғы күні","-1":"кеше"},"day-narrow":{"0":"бүгін","1":"ертең","2":"бүрсігүні","future":{"one":"{0} күннен кейін","other":"{0} күннен кейін"},"past":{"one":"{0} күн бұрын","other":"{0} күн бұрын"},"-2":"алдыңғы күні","-1":"кеше"},"hour":{"0":"осы сағат","future":{"one":"{0} сағаттан кейін","other":"{0} сағаттан кейін"},"past":{"one":"{0} сағат бұрын","other":"{0} сағат бұрын"}},"hour-short":{"0":"осы сағат","future":{"one":"{0} сағ. кейін","other":"{0} сағ. кейін"},"past":{"one":"{0} сағ. бұрын","other":"{0} сағ. бұрын"}},"hour-narrow":{"0":"осы сағат","future":{"one":"{0} сағ. кейін","other":"{0} сағ. кейін"},"past":{"one":"{0} сағ. бұрын","other":"{0} сағ. бұрын"}},"minute":{"0":"осы минут","future":{"one":"{0} минуттан кейін","other":"{0} минуттан кейін"},"past":{"one":"{0} минут бұрын","other":"{0} минут бұрын"}},"minute-short":{"0":"осы минут","future":{"one":"{0} мин. кейін","other":"{0} мин. кейін"},"past":{"one":"{0} мин. бұрын","other":"{0} мин. бұрын"}},"minute-narrow":{"0":"осы минут","future":{"one":"{0} мин. кейін","other":"{0} мин. кейін"},"past":{"one":"{0} мин. бұрын","other":"{0} мин. бұрын"}},"second":{"0":"қазір","future":{"one":"{0} секундтан кейін","other":"{0} секундтан кейін"},"past":{"one":"{0} секунд бұрын","other":"{0} секунд бұрын"}},"second-short":{"0":"қазір","future":{"one":"{0} сек. кейін","other":"{0} сек. кейін"},"past":{"one":"{0} сек. бұрын","other":"{0} сек. бұрын"}},"second-narrow":{"0":"қазір","future":{"one":"{0} сек. кейін","other":"{0} сек. кейін"},"past":{"one":"{0} сек. бұрын","other":"{0} сек. бұрын"}}}},"availableLocales":["kk"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
