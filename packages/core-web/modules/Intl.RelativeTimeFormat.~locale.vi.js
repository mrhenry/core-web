import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import Get from "../helpers/_ESAbstract.Get";
import Type from "../helpers/_ESAbstract.Type";
import ToObject from "../helpers/_ESAbstract.ToObject";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import Construct from "../helpers/_ESAbstract.Construct";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
import CreateIterResultObject from "../helpers/_ESAbstract.CreateIterResultObject";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("vi").length
)) {
// Intl.RelativeTimeFormat.~locale.vi
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"vi":{"nu":["latn"],"year":{"0":"năm nay","1":"năm sau","future":{"other":"sau {0} năm nữa"},"past":{"other":"{0} năm trước"},"-1":"năm ngoái"},"year-short":{"0":"năm nay","1":"năm sau","future":{"other":"sau {0} năm nữa"},"past":{"other":"{0} năm trước"},"-1":"năm ngoái"},"year-narrow":{"0":"năm nay","1":"năm sau","future":{"other":"sau {0} năm nữa"},"past":{"other":"{0} năm trước"},"-1":"năm ngoái"},"quarter":{"0":"quý này","1":"quý sau","future":{"other":"sau {0} quý nữa"},"past":{"other":"{0} quý trước"},"-1":"quý trước"},"quarter-short":{"0":"quý này","1":"quý sau","future":{"other":"sau {0} quý nữa"},"past":{"other":"{0} quý trước"},"-1":"quý trước"},"quarter-narrow":{"0":"quý này","1":"quý sau","future":{"other":"sau {0} quý nữa"},"past":{"other":"{0} quý trước"},"-1":"quý trước"},"month":{"0":"tháng này","1":"tháng sau","future":{"other":"sau {0} tháng nữa"},"past":{"other":"{0} tháng trước"},"-1":"tháng trước"},"month-short":{"0":"tháng này","1":"tháng sau","future":{"other":"sau {0} tháng nữa"},"past":{"other":"{0} tháng trước"},"-1":"tháng trước"},"month-narrow":{"0":"tháng này","1":"tháng sau","future":{"other":"sau {0} tháng nữa"},"past":{"other":"{0} tháng trước"},"-1":"tháng trước"},"week":{"0":"tuần này","1":"tuần sau","future":{"other":"sau {0} tuần nữa"},"past":{"other":"{0} tuần trước"},"-1":"tuần trước"},"week-short":{"0":"tuần này","1":"tuần sau","future":{"other":"sau {0} tuần nữa"},"past":{"other":"{0} tuần trước"},"-1":"tuần trước"},"week-narrow":{"0":"tuần này","1":"tuần sau","future":{"other":"sau {0} tuần nữa"},"past":{"other":"{0} tuần trước"},"-1":"tuần trước"},"day":{"0":"Hôm nay","1":"Ngày mai","2":"Ngày kia","future":{"other":"sau {0} ngày nữa"},"past":{"other":"{0} ngày trước"},"-2":"Hôm kia","-1":"Hôm qua"},"day-short":{"0":"Hôm nay","1":"Ngày mai","2":"Ngày kia","future":{"other":"sau {0} ngày nữa"},"past":{"other":"{0} ngày trước"},"-2":"Hôm kia","-1":"Hôm qua"},"day-narrow":{"0":"Hôm nay","1":"Ngày mai","2":"Ngày kia","future":{"other":"sau {0} ngày nữa"},"past":{"other":"{0} ngày trước"},"-2":"Hôm kia","-1":"Hôm qua"},"hour":{"0":"giờ này","future":{"other":"sau {0} giờ nữa"},"past":{"other":"{0} giờ trước"}},"hour-short":{"0":"giờ này","future":{"other":"sau {0} giờ nữa"},"past":{"other":"{0} giờ trước"}},"hour-narrow":{"0":"giờ này","future":{"other":"sau {0} giờ nữa"},"past":{"other":"{0} giờ trước"}},"minute":{"0":"phút này","future":{"other":"sau {0} phút nữa"},"past":{"other":"{0} phút trước"}},"minute-short":{"0":"phút này","future":{"other":"sau {0} phút nữa"},"past":{"other":"{0} phút trước"}},"minute-narrow":{"0":"phút này","future":{"other":"sau {0} phút nữa"},"past":{"other":"{0} phút trước"}},"second":{"0":"bây giờ","future":{"other":"sau {0} giây nữa"},"past":{"other":"{0} giây trước"}},"second-short":{"0":"bây giờ","future":{"other":"sau {0} giây nữa"},"past":{"other":"{0} giây trước"}},"second-narrow":{"0":"bây giờ","future":{"other":"sau {0} giây nữa"},"past":{"other":"{0} giây trước"}}}},"availableLocales":["vi"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
