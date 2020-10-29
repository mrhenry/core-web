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
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ms").length
)) {
// Intl.RelativeTimeFormat.~locale.ms
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ms":{"nu":["latn"],"year":{"0":"tahun ini","1":"tahun depan","future":{"other":"dalam {0} tahun"},"past":{"other":"{0} tahun lalu"},"-1":"tahun lalu"},"year-short":{"0":"thn ini","1":"thn depan","future":{"other":"dalam {0} thn"},"past":{"other":"{0} thn lalu"},"-1":"thn lepas"},"year-narrow":{"0":"thn ini","1":"thn depan","future":{"other":"dalam {0} thn"},"past":{"other":"{0} thn lalu"},"-1":"thn lepas"},"quarter":{"0":"suku tahun ini","1":"suku tahun seterusnya","future":{"other":"dalam {0} suku tahun"},"past":{"other":"{0} suku tahun lalu"},"-1":"suku tahun lalu"},"quarter-short":{"0":"suku ini","1":"suku seterusnya","future":{"other":"dlm {0} suku thn"},"past":{"other":"{0} suku thn lalu"},"-1":"suku lepas"},"quarter-narrow":{"0":"suku ini","1":"suku seterusnya","future":{"other":"dlm {0} suku thn"},"past":{"other":"{0} suku thn lalu"},"-1":"suku lepas"},"month":{"0":"bulan ini","1":"bulan depan","future":{"other":"dalam {0} bulan"},"past":{"other":"{0} bulan lalu"},"-1":"bulan lalu"},"month-short":{"0":"bln ini","1":"bln depan","future":{"other":"dlm {0} bln"},"past":{"other":"{0} bln lalu"},"-1":"bln lalu"},"month-narrow":{"0":"bln ini","1":"bln depan","future":{"other":"dlm {0} bln"},"past":{"other":"{0} bulan lalu"},"-1":"bln lalu"},"week":{"0":"minggu ini","1":"minggu depan","future":{"other":"dalam {0} minggu"},"past":{"other":"{0} minggu lalu"},"-1":"minggu lalu"},"week-short":{"0":"mgu ini","1":"mgu depan","future":{"other":"dlm {0} mgu"},"past":{"other":"{0} mgu lalu"},"-1":"mgu lepas"},"week-narrow":{"0":"mgu ini","1":"mgu depan","future":{"other":"dlm {0} mgu"},"past":{"other":"{0} mgu lalu"},"-1":"mgu lepas"},"day":{"0":"hari ini","1":"esok","2":"lusa","future":{"other":"dalam {0} hari"},"past":{"other":"{0} hari lalu"},"-2":"kelmarin","-1":"semalam"},"day-short":{"0":"hari ini","1":"esok","2":"lusa","future":{"other":"dlm {0} hari"},"past":{"other":"{0} hari lalu"},"-2":"kelmarin","-1":"semalam"},"day-narrow":{"0":"hari ini","1":"esok","2":"lusa","future":{"other":"dlm {0} hari"},"past":{"other":"{0} hari lalu"},"-2":"kelmarin","-1":"semlm"},"hour":{"0":"jam ini","future":{"other":"dalam {0} jam"},"past":{"other":"{0} jam lalu"}},"hour-short":{"0":"jam ini","future":{"other":"dlm {0} jam"},"past":{"other":"{0} jam lalu"}},"hour-narrow":{"0":"jam ini","future":{"other":"dlm {0} jam"},"past":{"other":"{0} jam lalu"}},"minute":{"0":"pada minit ini","future":{"other":"dalam {0} minit"},"past":{"other":"{0} minit lalu"}},"minute-short":{"0":"pada minit ini","future":{"other":"dlm {0} min"},"past":{"other":"{0} min lalu"}},"minute-narrow":{"0":"pada minit ini","future":{"other":"dlm {0} min"},"past":{"other":"{0} min lalu"}},"second":{"0":"sekarang","future":{"other":"dalam {0} saat"},"past":{"other":"{0} saat lalu"}},"second-short":{"0":"sekarang","future":{"other":"dlm {0} saat"},"past":{"other":"{0} saat lalu"}},"second-narrow":{"0":"sekarang","future":{"other":"dlm {0} saat"},"past":{"other":"{0} saat lalu"}}}},"availableLocales":["ms"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
