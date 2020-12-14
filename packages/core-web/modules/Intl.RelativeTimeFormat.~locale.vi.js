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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("vi").length
)) {
// Intl.RelativeTimeFormat.~locale.vi
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"năm nay","1":"năm sau","future":{"other":"sau {0} năm nữa"},"past":{"other":"{0} năm trước"},"-1":"năm ngoái"},"year-short":{"0":"năm nay","1":"năm sau","future":{"other":"sau {0} năm nữa"},"past":{"other":"{0} năm trước"},"-1":"năm ngoái"},"year-narrow":{"0":"năm nay","1":"năm sau","future":{"other":"sau {0} năm nữa"},"past":{"other":"{0} năm trước"},"-1":"năm ngoái"},"quarter":{"0":"quý này","1":"quý sau","future":{"other":"sau {0} quý nữa"},"past":{"other":"{0} quý trước"},"-1":"quý trước"},"quarter-short":{"0":"quý này","1":"quý sau","future":{"other":"sau {0} quý nữa"},"past":{"other":"{0} quý trước"},"-1":"quý trước"},"quarter-narrow":{"0":"quý này","1":"quý sau","future":{"other":"sau {0} quý nữa"},"past":{"other":"{0} quý trước"},"-1":"quý trước"},"month":{"0":"tháng này","1":"tháng sau","future":{"other":"sau {0} tháng nữa"},"past":{"other":"{0} tháng trước"},"-1":"tháng trước"},"month-short":{"0":"tháng này","1":"tháng sau","future":{"other":"sau {0} tháng nữa"},"past":{"other":"{0} tháng trước"},"-1":"tháng trước"},"month-narrow":{"0":"tháng này","1":"tháng sau","future":{"other":"sau {0} tháng nữa"},"past":{"other":"{0} tháng trước"},"-1":"tháng trước"},"week":{"0":"tuần này","1":"tuần sau","future":{"other":"sau {0} tuần nữa"},"past":{"other":"{0} tuần trước"},"-1":"tuần trước"},"week-short":{"0":"tuần này","1":"tuần sau","future":{"other":"sau {0} tuần nữa"},"past":{"other":"{0} tuần trước"},"-1":"tuần trước"},"week-narrow":{"0":"tuần này","1":"tuần sau","future":{"other":"sau {0} tuần nữa"},"past":{"other":"{0} tuần trước"},"-1":"tuần trước"},"day":{"0":"Hôm nay","1":"Ngày mai","2":"Ngày kia","future":{"other":"sau {0} ngày nữa"},"past":{"other":"{0} ngày trước"},"-2":"Hôm kia","-1":"Hôm qua"},"day-short":{"0":"Hôm nay","1":"Ngày mai","2":"Ngày kia","future":{"other":"sau {0} ngày nữa"},"past":{"other":"{0} ngày trước"},"-2":"Hôm kia","-1":"Hôm qua"},"day-narrow":{"0":"Hôm nay","1":"Ngày mai","2":"Ngày kia","future":{"other":"sau {0} ngày nữa"},"past":{"other":"{0} ngày trước"},"-2":"Hôm kia","-1":"Hôm qua"},"hour":{"0":"giờ này","future":{"other":"sau {0} giờ nữa"},"past":{"other":"{0} giờ trước"}},"hour-short":{"0":"giờ này","future":{"other":"sau {0} giờ nữa"},"past":{"other":"{0} giờ trước"}},"hour-narrow":{"0":"giờ này","future":{"other":"sau {0} giờ nữa"},"past":{"other":"{0} giờ trước"}},"minute":{"0":"phút này","future":{"other":"sau {0} phút nữa"},"past":{"other":"{0} phút trước"}},"minute-short":{"0":"phút này","future":{"other":"sau {0} phút nữa"},"past":{"other":"{0} phút trước"}},"minute-narrow":{"0":"phút này","future":{"other":"sau {0} phút nữa"},"past":{"other":"{0} phút trước"}},"second":{"0":"bây giờ","future":{"other":"sau {0} giây nữa"},"past":{"other":"{0} giây trước"}},"second-short":{"0":"bây giờ","future":{"other":"sau {0} giây nữa"},"past":{"other":"{0} giây trước"}},"second-narrow":{"0":"bây giờ","future":{"other":"sau {0} giây nữa"},"past":{"other":"{0} giây trước"}}},"locale":"vi"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
