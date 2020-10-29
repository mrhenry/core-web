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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("id").length
)) {
// Intl.RelativeTimeFormat.~locale.id
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"id":{"nu":["latn"],"year":{"0":"tahun ini","1":"tahun depan","future":{"other":"dalam {0} tahun"},"past":{"other":"{0} tahun yang lalu"},"-1":"tahun lalu"},"year-short":{"0":"thn ini","1":"thn depan","future":{"other":"dlm {0} thn"},"past":{"other":"{0} thn lalu"},"-1":"thn lalu"},"year-narrow":{"0":"thn ini","1":"thn depan","future":{"other":"dlm {0} thn"},"past":{"other":"{0} thn lalu"},"-1":"thn lalu"},"quarter":{"0":"kuartal ini","1":"kuartal berikutnya","future":{"other":"dalam {0} kuartal"},"past":{"other":"{0} kuartal yang lalu"},"-1":"Kuartal lalu"},"quarter-short":{"0":"kuartal ini","1":"kuartal berikutnya","future":{"other":"dlm {0} krtl."},"past":{"other":"{0} krtl. lalu"},"-1":"Kuartal lalu"},"quarter-narrow":{"0":"kuartal ini","1":"kuartal berikutnya","future":{"other":"dlm {0} krtl."},"past":{"other":"{0} krtl. lalu"},"-1":"Kuartal lalu"},"month":{"0":"bulan ini","1":"bulan berikutnya","future":{"other":"dalam {0} bulan"},"past":{"other":"{0} bulan yang lalu"},"-1":"bulan lalu"},"month-short":{"0":"bln ini","1":"bln berikutnya","future":{"other":"dlm {0} bln"},"past":{"other":"{0} bln lalu"},"-1":"bln lalu"},"month-narrow":{"0":"bln ini","1":"bln berikutnya","future":{"other":"dlm {0} bln"},"past":{"other":"{0} bln lalu"},"-1":"bln lalu"},"week":{"0":"minggu ini","1":"minggu depan","future":{"other":"dalam {0} minggu"},"past":{"other":"{0} minggu yang lalu"},"-1":"minggu lalu"},"week-short":{"0":"mgg ini","1":"mgg depan","future":{"other":"dlm {0} mgg"},"past":{"other":"{0} mgg lalu"},"-1":"mgg lalu"},"week-narrow":{"0":"mgg ini","1":"mgg depan","future":{"other":"dlm {0} mgg"},"past":{"other":"{0} mgg lalu"},"-1":"mgg lalu"},"day":{"0":"hari ini","1":"besok","2":"lusa","future":{"other":"dalam {0} hari"},"past":{"other":"{0} hari yang lalu"},"-2":"kemarin dulu","-1":"kemarin"},"day-short":{"0":"hari ini","1":"besok","2":"lusa","future":{"other":"dalam {0} h"},"past":{"other":"{0} h lalu"},"-2":"kemarin dulu","-1":"kemarin"},"day-narrow":{"0":"hari ini","1":"besok","2":"lusa","future":{"other":"dalam {0} h"},"past":{"other":"{0} h lalu"},"-2":"kemarin dulu","-1":"kemarin"},"hour":{"0":"jam ini","future":{"other":"dalam {0} jam"},"past":{"other":"{0} jam yang lalu"}},"hour-short":{"0":"jam ini","future":{"other":"dalam {0} jam"},"past":{"other":"{0} jam lalu"}},"hour-narrow":{"0":"jam ini","future":{"other":"dalam {0} jam"},"past":{"other":"{0} jam lalu"}},"minute":{"0":"menit ini","future":{"other":"dalam {0} menit"},"past":{"other":"{0} menit yang lalu"}},"minute-short":{"0":"menit ini","future":{"other":"dlm {0} mnt"},"past":{"other":"{0} mnt lalu"}},"minute-narrow":{"0":"menit ini","future":{"other":"dlm {0} mnt"},"past":{"other":"{0} mnt lalu"}},"second":{"0":"sekarang","future":{"other":"dalam {0} detik"},"past":{"other":"{0} detik yang lalu"}},"second-short":{"0":"sekarang","future":{"other":"dlm {0} dtk"},"past":{"other":"{0} dtk lalu"}},"second-narrow":{"0":"sekarang","future":{"other":"dlm {0} dtk"},"past":{"other":"{0} dtk lalu"}}}},"availableLocales":["id"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
