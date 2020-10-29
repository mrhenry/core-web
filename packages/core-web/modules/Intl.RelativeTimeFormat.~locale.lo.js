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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("lo").length
)) {
// Intl.RelativeTimeFormat.~locale.lo
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"lo":{"nu":["latn"],"year":{"0":"ປີນີ້","1":"ປີໜ້າ","future":{"other":"ໃນອີກ {0} ປີ"},"past":{"other":"{0} ປີກ່ອນ"},"-1":"ປີກາຍ"},"year-short":{"0":"ປີນີ້","1":"ປີໜ້າ","future":{"other":"ໃນອີກ {0} ປີ"},"past":{"other":"{0} ປີກ່ອນ"},"-1":"ປີກາຍ"},"year-narrow":{"0":"ປີນີ້","1":"ປີໜ້າ","future":{"other":"ໃນອີກ {0} ປີ"},"past":{"other":"{0} ປີກ່ອນ"},"-1":"ປີກາຍ"},"quarter":{"0":"ໄຕຣມາດນີ້","1":"ໄຕຣມາດໜ້າ","future":{"other":"ໃນອີກ {0} ໄຕຣມາດ"},"past":{"other":"{0} ໄຕຣມາດກ່ອນ"},"-1":"ໄຕຣມາດກ່ອນໜ້າ"},"quarter-short":{"0":"ໄຕຣມາດນີ້","1":"ໄຕຣມາດໜ້າ","future":{"other":"ໃນ {0} ຕມ."},"past":{"other":"{0} ຕມ. ກ່ອນ"},"-1":"ໄຕຣມາດກ່ອນໜ້າ"},"quarter-narrow":{"0":"ໄຕຣມາດນີ້","1":"ໄຕຣມາດໜ້າ","future":{"other":"ໃນ {0} ຕມ."},"past":{"other":"{0} ຕມ. ກ່ອນ"},"-1":"ໄຕຣມາດກ່ອນໜ້າ"},"month":{"0":"ເດືອນນີ້","1":"ເດືອນໜ້າ","future":{"other":"ໃນອີກ {0} ເດືອນ"},"past":{"other":"{0} ເດືອນກ່ອນ"},"-1":"ເດືອນແລ້ວ"},"month-short":{"0":"ເດືອນນີ້","1":"ເດືອນໜ້າ","future":{"other":"ໃນອີກ {0} ດ."},"past":{"other":"{0} ດ. ກ່ອນ"},"-1":"ເດືອນແລ້ວ"},"month-narrow":{"0":"ເດືອນນີ້","1":"ເດືອນໜ້າ","future":{"other":"ໃນອີກ {0} ດ."},"past":{"other":"{0} ດ. ກ່ອນ"},"-1":"ເດືອນແລ້ວ"},"week":{"0":"ອາທິດນີ້","1":"ອາທິດໜ້າ","future":{"other":"ໃນອີກ {0} ອາທິດ"},"past":{"other":"{0} ອາທິດກ່ອນ"},"-1":"ອາທິດແລ້ວ"},"week-short":{"0":"ອາທິດນີ້","1":"ອາທິດໜ້າ","future":{"other":"ໃນອີກ {0} ອທ."},"past":{"other":"{0} ອທ. ກ່ອນ"},"-1":"ອາທິດແລ້ວ"},"week-narrow":{"0":"ອາທິດນີ້","1":"ອາທິດໜ້າ","future":{"other":"ໃນອີກ {0} ອທ."},"past":{"other":"{0} ອທ. ກ່ອນ"},"-1":"ອາທິດແລ້ວ"},"day":{"0":"ມື້ນີ້","1":"ມື້ອື່ນ","2":"ມື້ຮື","future":{"other":"ໃນອີກ {0} ມື້"},"past":{"other":"{0} ມື້ກ່ອນ"},"-2":"ມື້ກ່ອນ","-1":"ມື້ວານ"},"day-short":{"0":"ມື້ນີ້","1":"ມື້ອື່ນ","2":"ມື້ຮື","future":{"other":"ໃນອີກ {0} ມື້"},"past":{"other":"{0} ມື້ກ່ອນ"},"-2":"ມື້ກ່ອນ","-1":"ມື້ວານ"},"day-narrow":{"0":"ມື້ນີ້","1":"ມື້ອື່ນ","2":"ມື້ຮື","future":{"other":"ໃນອີກ {0} ມື້"},"past":{"other":"{0} ມື້ກ່ອນ"},"-2":"ມື້ກ່ອນ","-1":"ມື້ວານ"},"hour":{"0":"ຊົ່ວໂມງນີ້","future":{"other":"ໃນອີກ {0} ຊົ່ວໂມງ"},"past":{"other":"{0} ຊົ່ວໂມງກ່ອນ"}},"hour-short":{"0":"ຊົ່ວໂມງນີ້","future":{"other":"ໃນອີກ {0} ຊມ."},"past":{"other":"{0} ຊມ. ກ່ອນ"}},"hour-narrow":{"0":"ຊົ່ວໂມງນີ້","future":{"other":"ໃນອີກ {0} ຊມ."},"past":{"other":"{0} ຊມ. ກ່ອນ"}},"minute":{"0":"ນາທີນີ້","future":{"other":"ໃນອີກ {0} ນາທີ"},"past":{"other":"{0} ນາທີກ່ອນ"}},"minute-short":{"0":"ນາທີນີ້","future":{"other":"ໃນ {0} ນທ."},"past":{"other":"{0} ນທ. ກ່ອນ"}},"minute-narrow":{"0":"ນາທີນີ້","future":{"other":"ໃນ {0} ນທ."},"past":{"other":"{0} ນທ. ກ່ອນ"}},"second":{"0":"ຕອນນີ້","future":{"other":"ໃນອີກ {0} ວິນາທີ"},"past":{"other":"{0} ວິນາທີກ່ອນ"}},"second-short":{"0":"ຕອນນີ້","future":{"other":"ໃນ {0} ວິ."},"past":{"other":"{0} ວິ. ກ່ອນ"}},"second-narrow":{"0":"ຕອນນີ້","future":{"other":"ໃນ {0} ວິ."},"past":{"other":"{0} ວິ. ກ່ອນ"}}}},"availableLocales":["lo"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
