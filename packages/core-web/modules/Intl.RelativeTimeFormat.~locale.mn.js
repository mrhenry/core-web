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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("mn").length
)) {
// Intl.RelativeTimeFormat.~locale.mn
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"mn":{"nu":["latn"],"year":{"0":"энэ жил","1":"ирэх жил","future":{"one":"{0} жилийн дараа","other":"{0} жилийн дараа"},"past":{"one":"{0} жилийн өмнө","other":"{0} жилийн өмнө"},"-1":"өнгөрсөн жил"},"year-short":{"0":"энэ жил","1":"ирэх жил","future":{"one":"{0} жилийн дараа","other":"{0} жилийн дараа"},"past":{"one":"{0} жилийн өмнө","other":"{0} жилийн өмнө"},"-1":"өнгөрсөн жил"},"year-narrow":{"0":"энэ жил","1":"ирэх жил","future":{"one":"{0} жилийн дараа","other":"{0} жилийн дараа"},"past":{"one":"{0} жилийн өмнө","other":"{0} жилийн өмнө"},"-1":"өнгөрсөн жил"},"quarter":{"0":"энэ улирал","1":"дараагийн улирал","future":{"one":"{0} улирлын дараа","other":"{0} улирлын дараа"},"past":{"one":"{0} улирлын өмнө","other":"{0} улирлын өмнө"},"-1":"өнгөрсөн улирал"},"quarter-short":{"0":"энэ улирал","1":"дараагийн улирал","future":{"one":"{0} улирлын дараа","other":"{0} улирлын дараа"},"past":{"one":"{0} улирлын өмнө","other":"{0} улирлын өмнө"},"-1":"өнгөрсөн улирал"},"quarter-narrow":{"0":"энэ улирал","1":"дараагийн улирал","future":{"one":"{0} улирлын дараа","other":"{0} улирлын дараа"},"past":{"one":"{0} улирлын өмнө","other":"{0} улирлын өмнө"},"-1":"өнгөрсөн улирал"},"month":{"0":"энэ сар","1":"ирэх сар","future":{"one":"{0} сарын дараа","other":"{0} сарын дараа"},"past":{"one":"{0} сарын өмнө","other":"{0} сарын өмнө"},"-1":"өнгөрсөн сар"},"month-short":{"0":"энэ сар","1":"ирэх сар","future":{"one":"{0} сарын дараа","other":"{0} сарын дараа"},"past":{"one":"{0} сарын өмнө","other":"{0} сарын өмнө"},"-1":"өнгөрсөн сар"},"month-narrow":{"0":"энэ сар","1":"ирэх сар","future":{"one":"{0} сарын дараа","other":"{0} сарын дараа"},"past":{"one":"{0} сарын өмнө","other":"{0} сарын өмнө"},"-1":"өнгөрсөн сар"},"week":{"0":"энэ долоо хоног","1":"ирэх долоо хоног","future":{"one":"{0} долоо хоногийн дараа","other":"{0} долоо хоногийн дараа"},"past":{"one":"{0} долоо хоногийн өмнө","other":"{0} долоо хоногийн өмнө"},"-1":"өнгөрсөн долоо хоног"},"week-short":{"0":"энэ 7 хоног","1":"ирэх 7 хоног","future":{"one":"{0} 7 хоногийн дараа","other":"{0} 7 хоногийн дараа"},"past":{"one":"{0} 7 хоногийн өмнө","other":"{0} 7 хоногийн өмнө"},"-1":"өнгөрсөн 7 хоног"},"week-narrow":{"0":"энэ 7 хоног","1":"ирэх 7 хоног","future":{"one":"{0} 7 хоногийн дараа","other":"{0} 7 хоногийн дараа"},"past":{"one":"{0} 7 хоногийн өмнө","other":"{0} 7 хоногийн өмнө"},"-1":"өнгөрсөн 7 хоног"},"day":{"0":"өнөөдөр","1":"маргааш","2":"нөгөөдөр","future":{"one":"{0} өдрийн дараа","other":"{0} өдрийн дараа"},"past":{"one":"{0} өдрийн өмнө","other":"{0} өдрийн өмнө"},"-2":"уржигдар","-1":"өчигдөр"},"day-short":{"0":"өнөөдөр","1":"маргааш","2":"нөгөөдөр","future":{"one":"{0} өдрийн дараа","other":"{0} өдрийн дараа"},"past":{"one":"{0} өдрийн өмнө","other":"{0} өдрийн өмнө"},"-2":"уржигдар","-1":"өчигдөр"},"day-narrow":{"0":"өнөөдөр","1":"маргааш","2":"нөгөөдөр","future":{"one":"{0} өдрийн дараа","other":"{0} өдрийн дараа"},"past":{"one":"{0} өдрийн өмнө","other":"{0} өдрийн өмнө"},"-2":"уржигдар","-1":"өчигдөр"},"hour":{"0":"энэ цаг","future":{"one":"{0} цагийн дараа","other":"{0} цагийн дараа"},"past":{"one":"{0} цагийн өмнө","other":"{0} цагийн өмнө"}},"hour-short":{"0":"энэ цаг","future":{"one":"{0} ц дараа","other":"{0} ц дараа"},"past":{"one":"{0} ц өмнө","other":"{0} ц өмнө"}},"hour-narrow":{"0":"энэ цаг","future":{"one":"{0} ц дараа","other":"{0} ц дараа"},"past":{"one":"{0} ц өмнө","other":"{0} ц өмнө"}},"minute":{"0":"энэ минут","future":{"one":"{0} минутын дараа","other":"{0} минутын дараа"},"past":{"one":"{0} минутын өмнө","other":"{0} минутын өмнө"}},"minute-short":{"0":"энэ минут","future":{"one":"{0} мин дараа","other":"{0} мин дараа"},"past":{"one":"{0} мин өмнө","other":"{0} мин өмнө"}},"minute-narrow":{"0":"энэ минут","future":{"one":"{0} мин дараа","other":"{0} мин дараа"},"past":{"one":"{0} мин өмнө","other":"{0} мин өмнө"}},"second":{"0":"одоо","future":{"one":"{0} секундын дараа","other":"{0} секундын дараа"},"past":{"one":"{0} секундын өмнө","other":"{0} секундын өмнө"}},"second-short":{"0":"одоо","future":{"one":"{0} сек дараа","other":"{0} сек дараа"},"past":{"one":"{0} сек өмнө","other":"{0} сек өмнө"}},"second-narrow":{"0":"одоо","future":{"one":"{0} сек дараа","other":"{0} сек дараа"},"past":{"one":"{0} сек өмнө","other":"{0} сек өмнө"}}}},"availableLocales":["mn"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
