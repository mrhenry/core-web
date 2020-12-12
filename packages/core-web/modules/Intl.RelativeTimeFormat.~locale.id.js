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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("id").length
)) {
// Intl.RelativeTimeFormat.~locale.id
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"tahun ini","1":"tahun depan","future":{"other":"dalam {0} tahun"},"past":{"other":"{0} tahun yang lalu"},"-1":"tahun lalu"},"year-short":{"0":"thn ini","1":"thn depan","future":{"other":"dlm {0} thn"},"past":{"other":"{0} thn lalu"},"-1":"thn lalu"},"year-narrow":{"0":"thn ini","1":"thn depan","future":{"other":"dlm {0} thn"},"past":{"other":"{0} thn lalu"},"-1":"thn lalu"},"quarter":{"0":"kuartal ini","1":"kuartal berikutnya","future":{"other":"dalam {0} kuartal"},"past":{"other":"{0} kuartal yang lalu"},"-1":"Kuartal lalu"},"quarter-short":{"0":"kuartal ini","1":"kuartal berikutnya","future":{"other":"dlm {0} krtl."},"past":{"other":"{0} krtl. lalu"},"-1":"Kuartal lalu"},"quarter-narrow":{"0":"kuartal ini","1":"kuartal berikutnya","future":{"other":"dlm {0} krtl."},"past":{"other":"{0} krtl. lalu"},"-1":"Kuartal lalu"},"month":{"0":"bulan ini","1":"bulan berikutnya","future":{"other":"dalam {0} bulan"},"past":{"other":"{0} bulan yang lalu"},"-1":"bulan lalu"},"month-short":{"0":"bln ini","1":"bln berikutnya","future":{"other":"dlm {0} bln"},"past":{"other":"{0} bln lalu"},"-1":"bln lalu"},"month-narrow":{"0":"bln ini","1":"bln berikutnya","future":{"other":"dlm {0} bln"},"past":{"other":"{0} bln lalu"},"-1":"bln lalu"},"week":{"0":"minggu ini","1":"minggu depan","future":{"other":"dalam {0} minggu"},"past":{"other":"{0} minggu yang lalu"},"-1":"minggu lalu"},"week-short":{"0":"mgg ini","1":"mgg depan","future":{"other":"dlm {0} mgg"},"past":{"other":"{0} mgg lalu"},"-1":"mgg lalu"},"week-narrow":{"0":"mgg ini","1":"mgg depan","future":{"other":"dlm {0} mgg"},"past":{"other":"{0} mgg lalu"},"-1":"mgg lalu"},"day":{"0":"hari ini","1":"besok","2":"lusa","future":{"other":"dalam {0} hari"},"past":{"other":"{0} hari yang lalu"},"-2":"kemarin dulu","-1":"kemarin"},"day-short":{"0":"hari ini","1":"besok","2":"lusa","future":{"other":"dalam {0} h"},"past":{"other":"{0} h lalu"},"-2":"kemarin dulu","-1":"kemarin"},"day-narrow":{"0":"hari ini","1":"besok","2":"lusa","future":{"other":"dalam {0} h"},"past":{"other":"{0} h lalu"},"-2":"kemarin dulu","-1":"kemarin"},"hour":{"0":"jam ini","future":{"other":"dalam {0} jam"},"past":{"other":"{0} jam yang lalu"}},"hour-short":{"0":"jam ini","future":{"other":"dalam {0} jam"},"past":{"other":"{0} jam lalu"}},"hour-narrow":{"0":"jam ini","future":{"other":"dalam {0} jam"},"past":{"other":"{0} jam lalu"}},"minute":{"0":"menit ini","future":{"other":"dalam {0} menit"},"past":{"other":"{0} menit yang lalu"}},"minute-short":{"0":"menit ini","future":{"other":"dlm {0} mnt"},"past":{"other":"{0} mnt lalu"}},"minute-narrow":{"0":"menit ini","future":{"other":"dlm {0} mnt"},"past":{"other":"{0} mnt lalu"}},"second":{"0":"sekarang","future":{"other":"dalam {0} detik"},"past":{"other":"{0} detik yang lalu"}},"second-short":{"0":"sekarang","future":{"other":"dlm {0} dtk"},"past":{"other":"{0} dtk lalu"}},"second-narrow":{"0":"sekarang","future":{"other":"dlm {0} dtk"},"past":{"other":"{0} dtk lalu"}}},"locale":"id"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
