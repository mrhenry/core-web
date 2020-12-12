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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("kk").length
)) {
// Intl.RelativeTimeFormat.~locale.kk
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"биылғы жыл","1":"келесі жыл","future":{"one":"{0} жылдан кейін","other":"{0} жылдан кейін"},"past":{"one":"{0} жыл бұрын","other":"{0} жыл бұрын"},"-1":"былтырғы жыл"},"year-short":{"0":"биылғы жыл","1":"келесі жыл","future":{"one":"{0} ж. кейін","other":"{0} ж. кейін"},"past":{"one":"{0} ж. бұрын","other":"{0} ж. бұрын"},"-1":"былтырғы жыл"},"year-narrow":{"0":"биылғы жыл","1":"келесі жыл","future":{"one":"{0} ж. кейін","other":"{0} ж. кейін"},"past":{"one":"{0} ж. бұрын","other":"{0} ж. бұрын"},"-1":"былтырғы жыл"},"quarter":{"0":"осы тоқсан","1":"келесі тоқсан","future":{"one":"{0} тоқсаннан кейін","other":"{0} тоқсаннан кейін"},"past":{"one":"{0} тоқсан бұрын","other":"{0} тоқсан бұрын"},"-1":"өткен тоқсан"},"quarter-short":{"0":"осы тоқсан","1":"келесі тоқсан","future":{"one":"{0} тқс. кейін","other":"{0} тқс. кейін"},"past":{"one":"{0} тқс. бұрын","other":"{0} тқс. бұрын"},"-1":"өткен тоқсан"},"quarter-narrow":{"0":"осы тоқсан","1":"келесі тоқсан","future":{"one":"{0} тқс. кейін","other":"{0} тқс. кейін"},"past":{"one":"{0} тқс. бұрын","other":"{0} тқс. бұрын"},"-1":"өткен тоқсан"},"month":{"0":"осы ай","1":"келесі ай","future":{"one":"{0} айдан кейін","other":"{0} айдан кейін"},"past":{"one":"{0} ай бұрын","other":"{0} ай бұрын"},"-1":"өткен ай"},"month-short":{"0":"осы ай","1":"келесі ай","future":{"one":"{0} айдан кейін","other":"{0} айдан кейін"},"past":{"one":"{0} ай бұрын","other":"{0} ай бұрын"},"-1":"өткен ай"},"month-narrow":{"0":"осы ай","1":"келесі ай","future":{"one":"{0} айдан кейін","other":"{0} айдан кейін"},"past":{"one":"{0} ай бұрын","other":"{0} ай бұрын"},"-1":"өткен ай"},"week":{"0":"осы апта","1":"келесі апта","future":{"one":"{0} аптадан кейін","other":"{0} аптадан кейін"},"past":{"one":"{0} апта бұрын","other":"{0} апта бұрын"},"-1":"өткен апта"},"week-short":{"0":"осы апта","1":"келесі апта","future":{"one":"{0} ап. кейін","other":"{0} ап. кейін"},"past":{"one":"{0} ап. бұрын","other":"{0} ап. бұрын"},"-1":"өткен апта"},"week-narrow":{"0":"осы апта","1":"келесі апта","future":{"one":"{0} ап. кейін","other":"{0} ап. кейін"},"past":{"one":"{0} ап. бұрын","other":"{0} ап. бұрын"},"-1":"өткен апта"},"day":{"0":"бүгін","1":"ертең","2":"бүрсігүні","future":{"one":"{0} күннен кейін","other":"{0} күннен кейін"},"past":{"one":"{0} күн бұрын","other":"{0} күн бұрын"},"-2":"алдыңгүні","-1":"кеше"},"day-short":{"0":"бүгін","1":"ертең","2":"бүрсігүні","future":{"one":"{0} күннен кейін","other":"{0} күннен кейін"},"past":{"one":"{0} күн бұрын","other":"{0} күн бұрын"},"-2":"алдыңғы күні","-1":"кеше"},"day-narrow":{"0":"бүгін","1":"ертең","2":"бүрсігүні","future":{"one":"{0} күннен кейін","other":"{0} күннен кейін"},"past":{"one":"{0} күн бұрын","other":"{0} күн бұрын"},"-2":"алдыңғы күні","-1":"кеше"},"hour":{"0":"осы сағат","future":{"one":"{0} сағаттан кейін","other":"{0} сағаттан кейін"},"past":{"one":"{0} сағат бұрын","other":"{0} сағат бұрын"}},"hour-short":{"0":"осы сағат","future":{"one":"{0} сағ. кейін","other":"{0} сағ. кейін"},"past":{"one":"{0} сағ. бұрын","other":"{0} сағ. бұрын"}},"hour-narrow":{"0":"осы сағат","future":{"one":"{0} сағ. кейін","other":"{0} сағ. кейін"},"past":{"one":"{0} сағ. бұрын","other":"{0} сағ. бұрын"}},"minute":{"0":"осы минут","future":{"one":"{0} минуттан кейін","other":"{0} минуттан кейін"},"past":{"one":"{0} минут бұрын","other":"{0} минут бұрын"}},"minute-short":{"0":"осы минут","future":{"one":"{0} мин. кейін","other":"{0} мин. кейін"},"past":{"one":"{0} мин. бұрын","other":"{0} мин. бұрын"}},"minute-narrow":{"0":"осы минут","future":{"one":"{0} мин. кейін","other":"{0} мин. кейін"},"past":{"one":"{0} мин. бұрын","other":"{0} мин. бұрын"}},"second":{"0":"қазір","future":{"one":"{0} секундтан кейін","other":"{0} секундтан кейін"},"past":{"one":"{0} секунд бұрын","other":"{0} секунд бұрын"}},"second-short":{"0":"қазір","future":{"one":"{0} сек. кейін","other":"{0} сек. кейін"},"past":{"one":"{0} сек. бұрын","other":"{0} сек. бұрын"}},"second-narrow":{"0":"қазір","future":{"one":"{0} сек. кейін","other":"{0} сек. кейін"},"past":{"one":"{0} сек. бұрын","other":"{0} сек. бұрын"}}},"locale":"kk"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
