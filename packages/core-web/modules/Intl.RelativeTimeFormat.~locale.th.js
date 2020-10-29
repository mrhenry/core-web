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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("th").length
)) {
// Intl.RelativeTimeFormat.~locale.th
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"th":{"nu":["latn"],"year":{"0":"ปีนี้","1":"ปีหน้า","future":{"other":"ในอีก {0} ปี"},"past":{"other":"{0} ปีที่แล้ว"},"-1":"ปีที่แล้ว"},"year-short":{"0":"ปีนี้","1":"ปีหน้า","future":{"other":"ใน {0} ปี"},"past":{"other":"{0} ปีที่แล้ว"},"-1":"ปีที่แล้ว"},"year-narrow":{"0":"ปีนี้","1":"ปีหน้า","future":{"other":"ใน {0} ปี"},"past":{"other":"{0} ปีที่แล้ว"},"-1":"ปีที่แล้ว"},"quarter":{"0":"ไตรมาสนี้","1":"ไตรมาสหน้า","future":{"other":"ในอีก {0} ไตรมาส"},"past":{"other":"{0} ไตรมาสที่แล้ว"},"-1":"ไตรมาสที่แล้ว"},"quarter-short":{"0":"ไตรมาสนี้","1":"ไตรมาสหน้า","future":{"other":"ใน {0} ไตรมาส"},"past":{"other":"{0} ไตรมาสที่แล้ว"},"-1":"ไตรมาสที่แล้ว"},"quarter-narrow":{"0":"ไตรมาสนี้","1":"ไตรมาสหน้า","future":{"other":"ใน {0} ไตรมาส"},"past":{"other":"{0} ไตรมาสที่แล้ว"},"-1":"ไตรมาสที่แล้ว"},"month":{"0":"เดือนนี้","1":"เดือนหน้า","future":{"other":"ในอีก {0} เดือน"},"past":{"other":"{0} เดือนที่ผ่านมา"},"-1":"เดือนที่แล้ว"},"month-short":{"0":"เดือนนี้","1":"เดือนหน้า","future":{"other":"ใน {0} เดือน"},"past":{"other":"{0} เดือนที่แล้ว"},"-1":"เดือนที่แล้ว"},"month-narrow":{"0":"เดือนนี้","1":"เดือนหน้า","future":{"other":"ใน {0} เดือน"},"past":{"other":"{0} เดือนที่แล้ว"},"-1":"เดือนที่แล้ว"},"week":{"0":"สัปดาห์นี้","1":"สัปดาห์หน้า","future":{"other":"ในอีก {0} สัปดาห์"},"past":{"other":"{0} สัปดาห์ที่ผ่านมา"},"-1":"สัปดาห์ที่แล้ว"},"week-short":{"0":"สัปดาห์นี้","1":"สัปดาห์หน้า","future":{"other":"ใน {0} สัปดาห์"},"past":{"other":"{0} สัปดาห์ที่แล้ว"},"-1":"สัปดาห์ที่แล้ว"},"week-narrow":{"0":"สัปดาห์นี้","1":"สัปดาห์หน้า","future":{"other":"ใน {0} สัปดาห์"},"past":{"other":"{0} สัปดาห์ที่แล้ว"},"-1":"สัปดาห์ที่แล้ว"},"day":{"0":"วันนี้","1":"พรุ่งนี้","2":"มะรืนนี้","future":{"other":"ในอีก {0} วัน"},"past":{"other":"{0} วันที่ผ่านมา"},"-2":"เมื่อวานซืน","-1":"เมื่อวาน"},"day-short":{"0":"วันนี้","1":"พรุ่งนี้","2":"มะรืนนี้","future":{"other":"ใน {0} วัน"},"past":{"other":"{0} วันที่แล้ว"},"-2":"เมื่อวานซืน","-1":"เมื่อวาน"},"day-narrow":{"0":"วันนี้","1":"พรุ่งนี้","2":"มะรืนนี้","future":{"other":"ใน {0} วัน"},"past":{"other":"{0} วันที่แล้ว"},"-2":"เมื่อวานซืน","-1":"เมื่อวาน"},"hour":{"0":"ชั่วโมงนี้","future":{"other":"ในอีก {0} ชั่วโมง"},"past":{"other":"{0} ชั่วโมงที่ผ่านมา"}},"hour-short":{"0":"ชั่วโมงนี้","future":{"other":"ใน {0} ชม."},"past":{"other":"{0} ชม. ที่แล้ว"}},"hour-narrow":{"0":"ชั่วโมงนี้","future":{"other":"ใน {0} ชม."},"past":{"other":"{0} ชม. ที่แล้ว"}},"minute":{"0":"นาทีนี้","future":{"other":"ในอีก {0} นาที"},"past":{"other":"{0} นาทีที่ผ่านมา"}},"minute-short":{"0":"นาทีนี้","future":{"other":"ใน {0} นาที"},"past":{"other":"{0} นาทีที่แล้ว"}},"minute-narrow":{"0":"นาทีนี้","future":{"other":"ใน {0} นาที"},"past":{"other":"{0} นาทีที่แล้ว"}},"second":{"0":"ขณะนี้","future":{"other":"ในอีก {0} วินาที"},"past":{"other":"{0} วินาทีที่ผ่านมา"}},"second-short":{"0":"ขณะนี้","future":{"other":"ใน {0} วินาที"},"past":{"other":"{0} วินาทีที่แล้ว"}},"second-narrow":{"0":"ขณะนี้","future":{"other":"ใน {0} วินาที"},"past":{"other":"{0} วินาทีที่แล้ว"}}}},"availableLocales":["th"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
