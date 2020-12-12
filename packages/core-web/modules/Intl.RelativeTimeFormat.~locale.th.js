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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("th").length
)) {
// Intl.RelativeTimeFormat.~locale.th
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ปีนี้","1":"ปีหน้า","future":{"other":"ในอีก {0} ปี"},"past":{"other":"{0} ปีที่แล้ว"},"-1":"ปีที่แล้ว"},"year-short":{"0":"ปีนี้","1":"ปีหน้า","future":{"other":"ใน {0} ปี"},"past":{"other":"{0} ปีที่แล้ว"},"-1":"ปีที่แล้ว"},"year-narrow":{"0":"ปีนี้","1":"ปีหน้า","future":{"other":"ใน {0} ปี"},"past":{"other":"{0} ปีที่แล้ว"},"-1":"ปีที่แล้ว"},"quarter":{"0":"ไตรมาสนี้","1":"ไตรมาสหน้า","future":{"other":"ในอีก {0} ไตรมาส"},"past":{"other":"{0} ไตรมาสที่แล้ว"},"-1":"ไตรมาสที่แล้ว"},"quarter-short":{"0":"ไตรมาสนี้","1":"ไตรมาสหน้า","future":{"other":"ใน {0} ไตรมาส"},"past":{"other":"{0} ไตรมาสที่แล้ว"},"-1":"ไตรมาสที่แล้ว"},"quarter-narrow":{"0":"ไตรมาสนี้","1":"ไตรมาสหน้า","future":{"other":"ใน {0} ไตรมาส"},"past":{"other":"{0} ไตรมาสที่แล้ว"},"-1":"ไตรมาสที่แล้ว"},"month":{"0":"เดือนนี้","1":"เดือนหน้า","future":{"other":"ในอีก {0} เดือน"},"past":{"other":"{0} เดือนที่ผ่านมา"},"-1":"เดือนที่แล้ว"},"month-short":{"0":"เดือนนี้","1":"เดือนหน้า","future":{"other":"ใน {0} เดือน"},"past":{"other":"{0} เดือนที่แล้ว"},"-1":"เดือนที่แล้ว"},"month-narrow":{"0":"เดือนนี้","1":"เดือนหน้า","future":{"other":"ใน {0} เดือน"},"past":{"other":"{0} เดือนที่แล้ว"},"-1":"เดือนที่แล้ว"},"week":{"0":"สัปดาห์นี้","1":"สัปดาห์หน้า","future":{"other":"ในอีก {0} สัปดาห์"},"past":{"other":"{0} สัปดาห์ที่ผ่านมา"},"-1":"สัปดาห์ที่แล้ว"},"week-short":{"0":"สัปดาห์นี้","1":"สัปดาห์หน้า","future":{"other":"ใน {0} สัปดาห์"},"past":{"other":"{0} สัปดาห์ที่แล้ว"},"-1":"สัปดาห์ที่แล้ว"},"week-narrow":{"0":"สัปดาห์นี้","1":"สัปดาห์หน้า","future":{"other":"ใน {0} สัปดาห์"},"past":{"other":"{0} สัปดาห์ที่แล้ว"},"-1":"สัปดาห์ที่แล้ว"},"day":{"0":"วันนี้","1":"พรุ่งนี้","2":"มะรืนนี้","future":{"other":"ในอีก {0} วัน"},"past":{"other":"{0} วันที่ผ่านมา"},"-2":"เมื่อวานซืน","-1":"เมื่อวาน"},"day-short":{"0":"วันนี้","1":"พรุ่งนี้","2":"มะรืนนี้","future":{"other":"ใน {0} วัน"},"past":{"other":"{0} วันที่แล้ว"},"-2":"เมื่อวานซืน","-1":"เมื่อวาน"},"day-narrow":{"0":"วันนี้","1":"พรุ่งนี้","2":"มะรืนนี้","future":{"other":"ใน {0} วัน"},"past":{"other":"{0} วันที่แล้ว"},"-2":"เมื่อวานซืน","-1":"เมื่อวาน"},"hour":{"0":"ชั่วโมงนี้","future":{"other":"ในอีก {0} ชั่วโมง"},"past":{"other":"{0} ชั่วโมงที่ผ่านมา"}},"hour-short":{"0":"ชั่วโมงนี้","future":{"other":"ใน {0} ชม."},"past":{"other":"{0} ชม. ที่แล้ว"}},"hour-narrow":{"0":"ชั่วโมงนี้","future":{"other":"ใน {0} ชม."},"past":{"other":"{0} ชม. ที่แล้ว"}},"minute":{"0":"นาทีนี้","future":{"other":"ในอีก {0} นาที"},"past":{"other":"{0} นาทีที่ผ่านมา"}},"minute-short":{"0":"นาทีนี้","future":{"other":"ใน {0} นาที"},"past":{"other":"{0} นาทีที่แล้ว"}},"minute-narrow":{"0":"นาทีนี้","future":{"other":"ใน {0} นาที"},"past":{"other":"{0} นาทีที่แล้ว"}},"second":{"0":"ขณะนี้","future":{"other":"ในอีก {0} วินาที"},"past":{"other":"{0} วินาทีที่ผ่านมา"}},"second-short":{"0":"ขณะนี้","future":{"other":"ใน {0} วินาที"},"past":{"other":"{0} วินาทีที่แล้ว"}},"second-narrow":{"0":"ขณะนี้","future":{"other":"ใน {0} วินาที"},"past":{"other":"{0} วินาทีที่แล้ว"}}},"locale":"th"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
