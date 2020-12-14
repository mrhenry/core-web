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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("lo").length
)) {
// Intl.RelativeTimeFormat.~locale.lo
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ປີນີ້","1":"ປີໜ້າ","future":{"other":"ໃນອີກ {0} ປີ"},"past":{"other":"{0} ປີກ່ອນ"},"-1":"ປີກາຍ"},"year-short":{"0":"ປີນີ້","1":"ປີໜ້າ","future":{"other":"ໃນອີກ {0} ປີ"},"past":{"other":"{0} ປີກ່ອນ"},"-1":"ປີກາຍ"},"year-narrow":{"0":"ປີນີ້","1":"ປີໜ້າ","future":{"other":"ໃນອີກ {0} ປີ"},"past":{"other":"{0} ປີກ່ອນ"},"-1":"ປີກາຍ"},"quarter":{"0":"ໄຕຣມາດນີ້","1":"ໄຕຣມາດໜ້າ","future":{"other":"ໃນອີກ {0} ໄຕຣມາດ"},"past":{"other":"{0} ໄຕຣມາດກ່ອນ"},"-1":"ໄຕຣມາດກ່ອນໜ້າ"},"quarter-short":{"0":"ໄຕຣມາດນີ້","1":"ໄຕຣມາດໜ້າ","future":{"other":"ໃນ {0} ຕມ."},"past":{"other":"{0} ຕມ. ກ່ອນ"},"-1":"ໄຕຣມາດກ່ອນໜ້າ"},"quarter-narrow":{"0":"ໄຕຣມາດນີ້","1":"ໄຕຣມາດໜ້າ","future":{"other":"ໃນ {0} ຕມ."},"past":{"other":"{0} ຕມ. ກ່ອນ"},"-1":"ໄຕຣມາດກ່ອນໜ້າ"},"month":{"0":"ເດືອນນີ້","1":"ເດືອນໜ້າ","future":{"other":"ໃນອີກ {0} ເດືອນ"},"past":{"other":"{0} ເດືອນກ່ອນ"},"-1":"ເດືອນແລ້ວ"},"month-short":{"0":"ເດືອນນີ້","1":"ເດືອນໜ້າ","future":{"other":"ໃນອີກ {0} ດ."},"past":{"other":"{0} ດ. ກ່ອນ"},"-1":"ເດືອນແລ້ວ"},"month-narrow":{"0":"ເດືອນນີ້","1":"ເດືອນໜ້າ","future":{"other":"ໃນອີກ {0} ດ."},"past":{"other":"{0} ດ. ກ່ອນ"},"-1":"ເດືອນແລ້ວ"},"week":{"0":"ອາທິດນີ້","1":"ອາທິດໜ້າ","future":{"other":"ໃນອີກ {0} ອາທິດ"},"past":{"other":"{0} ອາທິດກ່ອນ"},"-1":"ອາທິດແລ້ວ"},"week-short":{"0":"ອາທິດນີ້","1":"ອາທິດໜ້າ","future":{"other":"ໃນອີກ {0} ອທ."},"past":{"other":"{0} ອທ. ກ່ອນ"},"-1":"ອາທິດແລ້ວ"},"week-narrow":{"0":"ອາທິດນີ້","1":"ອາທິດໜ້າ","future":{"other":"ໃນອີກ {0} ອທ."},"past":{"other":"{0} ອທ. ກ່ອນ"},"-1":"ອາທິດແລ້ວ"},"day":{"0":"ມື້ນີ້","1":"ມື້ອື່ນ","2":"ມື້ຮື","future":{"other":"ໃນອີກ {0} ມື້"},"past":{"other":"{0} ມື້ກ່ອນ"},"-2":"ມື້ກ່ອນ","-1":"ມື້ວານ"},"day-short":{"0":"ມື້ນີ້","1":"ມື້ອື່ນ","2":"ມື້ຮື","future":{"other":"ໃນອີກ {0} ມື້"},"past":{"other":"{0} ມື້ກ່ອນ"},"-2":"ມື້ກ່ອນ","-1":"ມື້ວານ"},"day-narrow":{"0":"ມື້ນີ້","1":"ມື້ອື່ນ","2":"ມື້ຮື","future":{"other":"ໃນອີກ {0} ມື້"},"past":{"other":"{0} ມື້ກ່ອນ"},"-2":"ມື້ກ່ອນ","-1":"ມື້ວານ"},"hour":{"0":"ຊົ່ວໂມງນີ້","future":{"other":"ໃນອີກ {0} ຊົ່ວໂມງ"},"past":{"other":"{0} ຊົ່ວໂມງກ່ອນ"}},"hour-short":{"0":"ຊົ່ວໂມງນີ້","future":{"other":"ໃນອີກ {0} ຊມ."},"past":{"other":"{0} ຊມ. ກ່ອນ"}},"hour-narrow":{"0":"ຊົ່ວໂມງນີ້","future":{"other":"ໃນອີກ {0} ຊມ."},"past":{"other":"{0} ຊມ. ກ່ອນ"}},"minute":{"0":"ນາທີນີ້","future":{"other":"ໃນອີກ {0} ນາທີ"},"past":{"other":"{0} ນາທີກ່ອນ"}},"minute-short":{"0":"ນາທີນີ້","future":{"other":"ໃນ {0} ນທ."},"past":{"other":"{0} ນທ. ກ່ອນ"}},"minute-narrow":{"0":"ນາທີນີ້","future":{"other":"ໃນ {0} ນທ."},"past":{"other":"{0} ນທ. ກ່ອນ"}},"second":{"0":"ຕອນນີ້","future":{"other":"ໃນອີກ {0} ວິນາທີ"},"past":{"other":"{0} ວິນາທີກ່ອນ"}},"second-short":{"0":"ຕອນນີ້","future":{"other":"ໃນ {0} ວິ."},"past":{"other":"{0} ວິ. ກ່ອນ"}},"second-narrow":{"0":"ຕອນນີ້","future":{"other":"ໃນ {0} ວິ."},"past":{"other":"{0} ວິ. ກ່ອນ"}}},"locale":"lo"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
