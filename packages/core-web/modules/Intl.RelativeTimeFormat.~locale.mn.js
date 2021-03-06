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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("mn").length
)) {
// Intl.RelativeTimeFormat.~locale.mn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"энэ жил","1":"ирэх жил","future":{"one":"{0} жилийн дараа","other":"{0} жилийн дараа"},"past":{"one":"{0} жилийн өмнө","other":"{0} жилийн өмнө"},"-1":"өнгөрсөн жил"},"year-short":{"0":"энэ жил","1":"ирэх жил","future":{"one":"{0} жилийн дараа","other":"{0} жилийн дараа"},"past":{"one":"{0} жилийн өмнө","other":"{0} жилийн өмнө"},"-1":"өнгөрсөн жил"},"year-narrow":{"0":"энэ жил","1":"ирэх жил","future":{"one":"{0} жилийн дараа","other":"{0} жилийн дараа"},"past":{"one":"{0} жилийн өмнө","other":"{0} жилийн өмнө"},"-1":"өнгөрсөн жил"},"quarter":{"0":"энэ улирал","1":"дараагийн улирал","future":{"one":"{0} улирлын дараа","other":"{0} улирлын дараа"},"past":{"one":"{0} улирлын өмнө","other":"{0} улирлын өмнө"},"-1":"өнгөрсөн улирал"},"quarter-short":{"0":"энэ улирал","1":"дараагийн улирал","future":{"one":"{0} улирлын дараа","other":"{0} улирлын дараа"},"past":{"one":"{0} улирлын өмнө","other":"{0} улирлын өмнө"},"-1":"өнгөрсөн улирал"},"quarter-narrow":{"0":"энэ улирал","1":"дараагийн улирал","future":{"one":"{0} улирлын дараа","other":"{0} улирлын дараа"},"past":{"one":"{0} улирлын өмнө","other":"{0} улирлын өмнө"},"-1":"өнгөрсөн улирал"},"month":{"0":"энэ сар","1":"ирэх сар","future":{"one":"{0} сарын дараа","other":"{0} сарын дараа"},"past":{"one":"{0} сарын өмнө","other":"{0} сарын өмнө"},"-1":"өнгөрсөн сар"},"month-short":{"0":"энэ сар","1":"ирэх сар","future":{"one":"{0} сарын дараа","other":"{0} сарын дараа"},"past":{"one":"{0} сарын өмнө","other":"{0} сарын өмнө"},"-1":"өнгөрсөн сар"},"month-narrow":{"0":"энэ сар","1":"ирэх сар","future":{"one":"{0} сарын дараа","other":"{0} сарын дараа"},"past":{"one":"{0} сарын өмнө","other":"{0} сарын өмнө"},"-1":"өнгөрсөн сар"},"week":{"0":"энэ долоо хоног","1":"ирэх долоо хоног","future":{"one":"{0} долоо хоногийн дараа","other":"{0} долоо хоногийн дараа"},"past":{"one":"{0} долоо хоногийн өмнө","other":"{0} долоо хоногийн өмнө"},"-1":"өнгөрсөн долоо хоног"},"week-short":{"0":"энэ 7 хоног","1":"ирэх 7 хоног","future":{"one":"{0} 7 хоногийн дараа","other":"{0} 7 хоногийн дараа"},"past":{"one":"{0} 7 хоногийн өмнө","other":"{0} 7 хоногийн өмнө"},"-1":"өнгөрсөн 7 хоног"},"week-narrow":{"0":"энэ 7 хоног","1":"ирэх 7 хоног","future":{"one":"{0} 7 хоногийн дараа","other":"{0} 7 хоногийн дараа"},"past":{"one":"{0} 7 хоногийн өмнө","other":"{0} 7 хоногийн өмнө"},"-1":"өнгөрсөн 7 хоног"},"day":{"0":"өнөөдөр","1":"маргааш","2":"нөгөөдөр","future":{"one":"{0} өдрийн дараа","other":"{0} өдрийн дараа"},"past":{"one":"{0} өдрийн өмнө","other":"{0} өдрийн өмнө"},"-2":"уржигдар","-1":"өчигдөр"},"day-short":{"0":"өнөөдөр","1":"маргааш","2":"нөгөөдөр","future":{"one":"{0} өдрийн дараа","other":"{0} өдрийн дараа"},"past":{"one":"{0} өдрийн өмнө","other":"{0} өдрийн өмнө"},"-2":"уржигдар","-1":"өчигдөр"},"day-narrow":{"0":"өнөөдөр","1":"маргааш","2":"нөгөөдөр","future":{"one":"{0} өдрийн дараа","other":"{0} өдрийн дараа"},"past":{"one":"{0} өдрийн өмнө","other":"{0} өдрийн өмнө"},"-2":"уржигдар","-1":"өчигдөр"},"hour":{"0":"энэ цаг","future":{"one":"{0} цагийн дараа","other":"{0} цагийн дараа"},"past":{"one":"{0} цагийн өмнө","other":"{0} цагийн өмнө"}},"hour-short":{"0":"энэ цаг","future":{"one":"{0} ц дараа","other":"{0} ц дараа"},"past":{"one":"{0} ц өмнө","other":"{0} ц өмнө"}},"hour-narrow":{"0":"энэ цаг","future":{"one":"{0} ц дараа","other":"{0} ц дараа"},"past":{"one":"{0} ц өмнө","other":"{0} ц өмнө"}},"minute":{"0":"энэ минут","future":{"one":"{0} минутын дараа","other":"{0} минутын дараа"},"past":{"one":"{0} минутын өмнө","other":"{0} минутын өмнө"}},"minute-short":{"0":"энэ минут","future":{"one":"{0} мин дараа","other":"{0} мин дараа"},"past":{"one":"{0} мин өмнө","other":"{0} мин өмнө"}},"minute-narrow":{"0":"энэ минут","future":{"one":"{0} мин дараа","other":"{0} мин дараа"},"past":{"one":"{0} мин өмнө","other":"{0} мин өмнө"}},"second":{"0":"одоо","future":{"one":"{0} секундын дараа","other":"{0} секундын дараа"},"past":{"one":"{0} секундын өмнө","other":"{0} секундын өмнө"}},"second-short":{"0":"одоо","future":{"one":"{0} сек дараа","other":"{0} сек дараа"},"past":{"one":"{0} сек өмнө","other":"{0} сек өмнө"}},"second-narrow":{"0":"одоо","future":{"one":"{0} сек дараа","other":"{0} сек дараа"},"past":{"one":"{0} сек өмнө","other":"{0} сек өмнө"}}},"locale":"mn"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
