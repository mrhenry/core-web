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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ms-SG").length
)) {
// Intl.RelativeTimeFormat.~locale.ms-SG
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ms-SG":{"nu":["latn"],"year":{"0":"tahun ini","1":"tahun depan","future":{"other":"dalam {0} tahun"},"past":{"other":"{0} tahun lalu"},"-1":"tahun lalu"},"year-short":{"0":"thn ini","1":"thn depan","future":{"other":"dalam {0} thn"},"past":{"other":"{0} thn lalu"},"-1":"thn lepas"},"year-narrow":{"0":"thn ini","1":"thn depan","future":{"other":"dalam {0} thn"},"past":{"other":"{0} thn lalu"},"-1":"thn lepas"},"quarter":{"0":"suku tahun ini","1":"suku tahun seterusnya","future":{"other":"dalam {0} suku tahun"},"past":{"other":"{0} suku tahun lalu"},"-1":"suku tahun lalu"},"quarter-short":{"0":"suku ini","1":"suku seterusnya","future":{"other":"dlm {0} suku thn"},"past":{"other":"{0} suku thn lalu"},"-1":"suku lepas"},"quarter-narrow":{"0":"suku ini","1":"suku seterusnya","future":{"other":"dlm {0} suku thn"},"past":{"other":"{0} suku thn lalu"},"-1":"suku lepas"},"month":{"0":"bulan ini","1":"bulan depan","future":{"other":"dalam {0} bulan"},"past":{"other":"{0} bulan lalu"},"-1":"bulan lalu"},"month-short":{"0":"bln ini","1":"bln depan","future":{"other":"dlm {0} bln"},"past":{"other":"{0} bln lalu"},"-1":"bln lalu"},"month-narrow":{"0":"bln ini","1":"bln depan","future":{"other":"dlm {0} bln"},"past":{"other":"{0} bulan lalu"},"-1":"bln lalu"},"week":{"0":"minggu ini","1":"minggu depan","future":{"other":"dalam {0} minggu"},"past":{"other":"{0} minggu lalu"},"-1":"minggu lalu"},"week-short":{"0":"mgu ini","1":"mgu depan","future":{"other":"dlm {0} mgu"},"past":{"other":"{0} mgu lalu"},"-1":"mgu lepas"},"week-narrow":{"0":"mgu ini","1":"mgu depan","future":{"other":"dlm {0} mgu"},"past":{"other":"{0} mgu lalu"},"-1":"mgu lepas"},"day":{"0":"hari ini","1":"esok","2":"lusa","future":{"other":"dalam {0} hari"},"past":{"other":"{0} hari lalu"},"-2":"kelmarin","-1":"semalam"},"day-short":{"0":"hari ini","1":"esok","2":"lusa","future":{"other":"dlm {0} hari"},"past":{"other":"{0} hari lalu"},"-2":"kelmarin","-1":"semalam"},"day-narrow":{"0":"hari ini","1":"esok","2":"lusa","future":{"other":"dlm {0} hari"},"past":{"other":"{0} hari lalu"},"-2":"kelmarin","-1":"semlm"},"hour":{"0":"jam ini","future":{"other":"dalam {0} jam"},"past":{"other":"{0} jam lalu"}},"hour-short":{"0":"jam ini","future":{"other":"dlm {0} jam"},"past":{"other":"{0} jam lalu"}},"hour-narrow":{"0":"jam ini","future":{"other":"dlm {0} jam"},"past":{"other":"{0} jam lalu"}},"minute":{"0":"pada minit ini","future":{"other":"dalam {0} minit"},"past":{"other":"{0} minit lalu"}},"minute-short":{"0":"pada minit ini","future":{"other":"dlm {0} min"},"past":{"other":"{0} min lalu"}},"minute-narrow":{"0":"pada minit ini","future":{"other":"dlm {0} min"},"past":{"other":"{0} min lalu"}},"second":{"0":"sekarang","future":{"other":"dalam {0} saat"},"past":{"other":"{0} saat lalu"}},"second-short":{"0":"sekarang","future":{"other":"dlm {0} saat"},"past":{"other":"{0} saat lalu"}},"second-narrow":{"0":"sekarang","future":{"other":"dlm {0} saat"},"past":{"other":"{0} saat lalu"}}}},"availableLocales":["ms-SG"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
