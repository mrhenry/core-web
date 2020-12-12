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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ar-OM").length
)) {
// Intl.RelativeTimeFormat.~locale.ar-OM
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["arab"],"year":{"0":"السنة الحالية","1":"السنة القادمة","future":{"zero":"خلال {0} سنة","one":"خلال سنة واحدة","two":"خلال سنتين","few":"خلال {0} سنوات","many":"خلال {0} سنة","other":"خلال {0} سنة"},"past":{"zero":"قبل {0} سنة","one":"قبل سنة واحدة","two":"قبل سنتين","few":"قبل {0} سنوات","many":"قبل {0} سنة","other":"قبل {0} سنة"},"-1":"السنة الماضية"},"year-short":{"0":"السنة الحالية","1":"السنة القادمة","future":{"zero":"خلال {0} سنة","one":"خلال سنة واحدة","two":"خلال سنتين","few":"خلال {0} سنوات","many":"خلال {0} سنة","other":"خلال {0} سنة"},"past":{"zero":"قبل {0} سنة","one":"قبل سنة واحدة","two":"قبل سنتين","few":"قبل {0} سنوات","many":"قبل {0} سنة","other":"قبل {0} سنة"},"-1":"السنة الماضية"},"year-narrow":{"0":"السنة الحالية","1":"السنة القادمة","future":{"zero":"خلال {0} سنة","one":"خلال سنة واحدة","two":"خلال سنتين","few":"خلال {0} سنوات","many":"خلال {0} سنة","other":"خلال {0} سنة"},"past":{"zero":"قبل {0} سنة","one":"قبل سنة واحدة","two":"قبل سنتين","few":"قبل {0} سنوات","many":"قبل {0} سنة","other":"قبل {0} سنة"},"-1":"السنة الماضية"},"quarter":{"0":"هذا الربع","1":"الربع القادم","future":{"zero":"خلال {0} ربع سنة","one":"خلال ربع سنة واحد","two":"خلال ربعي سنة","few":"خلال {0} أرباع سنة","many":"خلال {0} ربع سنة","other":"خلال {0} ربع سنة"},"past":{"zero":"قبل {0} ربع سنة","one":"قبل ربع سنة واحد","two":"قبل ربعي سنة","few":"قبل {0} أرباع سنة","many":"قبل {0} ربع سنة","other":"قبل {0} ربع سنة"},"-1":"الربع الأخير"},"quarter-short":{"0":"هذا الربع","1":"الربع القادم","future":{"zero":"خلال {0} ربع سنة","one":"خلال ربع سنة واحد","two":"خلال ربعي سنة","few":"خلال {0} أرباع سنة","many":"خلال {0} ربع سنة","other":"خلال {0} ربع سنة"},"past":{"zero":"قبل {0} ربع سنة","one":"قبل ربع سنة واحد","two":"قبل ربعي سنة","few":"قبل {0} أرباع سنة","many":"قبل {0} ربع سنة","other":"قبل {0} ربع سنة"},"-1":"الربع الأخير"},"quarter-narrow":{"0":"هذا الربع","1":"الربع القادم","future":{"zero":"خلال {0} ربع سنة","one":"خلال ربع سنة واحد","two":"خلال ربعي سنة","few":"خلال {0} أرباع سنة","many":"خلال {0} ربع سنة","other":"خلال {0} ربع سنة"},"past":{"zero":"قبل {0} ربع سنة","one":"قبل ربع سنة واحد","two":"قبل ربعي سنة","few":"قبل {0} أرباع سنة","many":"قبل {0} ربع سنة","other":"قبل {0} ربع سنة"},"-1":"الربع الأخير"},"month":{"0":"هذا الشهر","1":"الشهر القادم","future":{"zero":"خلال {0} شهر","one":"خلال شهر واحد","two":"خلال شهرين","few":"خلال {0} أشهر","many":"خلال {0} شهرًا","other":"خلال {0} شهر"},"past":{"zero":"قبل {0} شهر","one":"قبل شهر واحد","two":"قبل شهرين","few":"قبل {0} أشهر","many":"قبل {0} شهرًا","other":"قبل {0} شهر"},"-1":"الشهر الماضي"},"month-short":{"0":"هذا الشهر","1":"الشهر القادم","future":{"zero":"خلال {0} شهر","one":"خلال شهر واحد","two":"خلال شهرين","few":"خلال {0} أشهر","many":"خلال {0} شهرًا","other":"خلال {0} شهر"},"past":{"zero":"قبل {0} شهر","one":"قبل شهر واحد","two":"قبل شهرين","few":"خلال {0} أشهر","many":"قبل {0} شهرًا","other":"قبل {0} شهر"},"-1":"الشهر الماضي"},"month-narrow":{"0":"هذا الشهر","1":"الشهر القادم","future":{"zero":"خلال {0} شهر","one":"خلال شهر واحد","two":"خلال شهرين","few":"خلال {0} أشهر","many":"خلال {0} شهرًا","other":"خلال {0} شهر"},"past":{"zero":"قبل {0} شهر","one":"قبل شهر واحد","two":"قبل شهرين","few":"قبل {0} أشهر","many":"قبل {0} شهرًا","other":"قبل {0} شهر"},"-1":"الشهر الماضي"},"week":{"0":"هذا الأسبوع","1":"الأسبوع القادم","future":{"zero":"خلال {0} أسبوع","one":"خلال أسبوع واحد","two":"خلال أسبوعين","few":"خلال {0} أسابيع","many":"خلال {0} أسبوعًا","other":"خلال {0} أسبوع"},"past":{"zero":"قبل {0} أسبوع","one":"قبل أسبوع واحد","two":"قبل أسبوعين","few":"قبل {0} أسابيع","many":"قبل {0} أسبوعًا","other":"قبل {0} أسبوع"},"-1":"الأسبوع الماضي"},"week-short":{"0":"هذا الأسبوع","1":"الأسبوع القادم","future":{"zero":"خلال {0} أسبوع","one":"خلال أسبوع واحد","two":"خلال {0} أسبوعين","few":"خلال {0} أسابيع","many":"خلال {0} أسبوعًا","other":"خلال {0} أسبوع"},"past":{"zero":"قبل {0} أسبوع","one":"قبل أسبوع واحد","two":"قبل أسبوعين","few":"قبل {0} أسابيع","many":"قبل {0} أسبوعًا","other":"قبل {0} أسبوع"},"-1":"الأسبوع الماضي"},"week-narrow":{"0":"هذا الأسبوع","1":"الأسبوع القادم","future":{"zero":"خلال {0} أسبوع","one":"خلال أسبوع واحد","two":"خلال أسبوعين","few":"خلال {0} أسابيع","many":"خلال {0} أسبوعًا","other":"خلال {0} أسبوع"},"past":{"zero":"قبل {0} أسبوع","one":"قبل أسبوع واحد","two":"قبل أسبوعين","few":"قبل {0} أسابيع","many":"قبل {0} أسبوعًا","other":"قبل {0} أسبوع"},"-1":"الأسبوع الماضي"},"day":{"0":"اليوم","1":"غدًا","2":"بعد الغد","future":{"zero":"خلال {0} يوم","one":"خلال يوم واحد","two":"خلال يومين","few":"خلال {0} أيام","many":"خلال {0} يومًا","other":"خلال {0} يوم"},"past":{"zero":"قبل {0} يوم","one":"قبل يوم واحد","two":"قبل يومين","few":"قبل {0} أيام","many":"قبل {0} يومًا","other":"قبل {0} يوم"},"-2":"أول أمس","-1":"أمس"},"day-short":{"0":"اليوم","1":"غدًا","2":"بعد الغد","future":{"zero":"خلال {0} يوم","one":"خلال يوم واحد","two":"خلال يومين","few":"خلال {0} أيام","many":"خلال {0} يومًا","other":"خلال {0} يوم"},"past":{"zero":"قبل {0} يوم","one":"قبل يوم واحد","two":"قبل يومين","few":"قبل {0} أيام","many":"قبل {0} يومًا","other":"قبل {0} يوم"},"-2":"أول أمس","-1":"أمس"},"day-narrow":{"0":"اليوم","1":"غدًا","2":"بعد الغد","future":{"zero":"خلال {0} يوم","one":"خلال يوم واحد","two":"خلال يومين","few":"خلال {0} أيام","many":"خلال {0} يومًا","other":"خلال {0} يوم"},"past":{"zero":"قبل {0} يوم","one":"قبل يوم واحد","two":"قبل يومين","few":"قبل {0} أيام","many":"قبل {0} يومًا","other":"قبل {0} يوم"},"-2":"أول أمس","-1":"أمس"},"hour":{"0":"الساعة الحالية","future":{"zero":"خلال {0} ساعة","one":"خلال ساعة واحدة","two":"خلال ساعتين","few":"خلال {0} ساعات","many":"خلال {0} ساعة","other":"خلال {0} ساعة"},"past":{"zero":"قبل {0} ساعة","one":"قبل ساعة واحدة","two":"قبل ساعتين","few":"قبل {0} ساعات","many":"قبل {0} ساعة","other":"قبل {0} ساعة"}},"hour-short":{"0":"الساعة الحالية","future":{"zero":"خلال {0} ساعة","one":"خلال ساعة واحدة","two":"خلال ساعتين","few":"خلال {0} ساعات","many":"خلال {0} ساعة","other":"خلال {0} ساعة"},"past":{"zero":"قبل {0} ساعة","one":"قبل ساعة واحدة","two":"قبل ساعتين","few":"قبل {0} ساعات","many":"قبل {0} ساعة","other":"قبل {0} ساعة"}},"hour-narrow":{"0":"الساعة الحالية","future":{"zero":"خلال {0} ساعة","one":"خلال ساعة واحدة","two":"خلال ساعتين","few":"خلال {0} ساعات","many":"خلال {0} ساعة","other":"خلال {0} ساعة"},"past":{"zero":"قبل {0} ساعة","one":"قبل ساعة واحدة","two":"قبل ساعتين","few":"قبل {0} ساعات","many":"قبل {0} ساعة","other":"قبل {0} ساعة"}},"minute":{"0":"هذه الدقيقة","future":{"zero":"خلال {0} دقيقة","one":"خلال دقيقة واحدة","two":"خلال دقيقتين","few":"خلال {0} دقائق","many":"خلال {0} دقيقة","other":"خلال {0} دقيقة"},"past":{"zero":"قبل {0} دقيقة","one":"قبل دقيقة واحدة","two":"قبل دقيقتين","few":"قبل {0} دقائق","many":"قبل {0} دقيقة","other":"قبل {0} دقيقة"}},"minute-short":{"0":"هذه الدقيقة","future":{"zero":"خلال {0} دقيقة","one":"خلال دقيقة واحدة","two":"خلال دقيقتين","few":"خلال {0} دقائق","many":"خلال {0} دقيقة","other":"خلال {0} دقيقة"},"past":{"zero":"قبل {0} دقيقة","one":"قبل دقيقة واحدة","two":"قبل دقيقتين","few":"قبل {0} دقائق","many":"قبل {0} دقيقة","other":"قبل {0} دقيقة"}},"minute-narrow":{"0":"هذه الدقيقة","future":{"zero":"خلال {0} دقيقة","one":"خلال دقيقة واحدة","two":"خلال دقيقتين","few":"خلال {0} دقائق","many":"خلال {0} دقيقة","other":"خلال {0} دقيقة"},"past":{"zero":"قبل {0} دقيقة","one":"قبل دقيقة واحدة","two":"قبل دقيقتين","few":"قبل {0} دقائق","many":"قبل {0} دقيقة","other":"قبل {0} دقيقة"}},"second":{"0":"الآن","future":{"zero":"خلال {0} ثانية","one":"خلال ثانية واحدة","two":"خلال ثانيتين","few":"خلال {0} ثوانٍ","many":"خلال {0} ثانية","other":"خلال {0} ثانية"},"past":{"zero":"قبل {0} ثانية","one":"قبل ثانية واحدة","two":"قبل ثانيتين","few":"قبل {0} ثوانِ","many":"قبل {0} ثانية","other":"قبل {0} ثانية"}},"second-short":{"0":"الآن","future":{"zero":"خلال {0} ثانية","one":"خلال ثانية واحدة","two":"خلال ثانيتين","few":"خلال {0} ثوانٍ","many":"خلال {0} ثانية","other":"خلال {0} ثانية"},"past":{"zero":"قبل {0} ثانية","one":"قبل ثانية واحدة","two":"قبل ثانيتين","few":"قبل {0} ثوانٍ","many":"قبل {0} ثانية","other":"قبل {0} ثانية"}},"second-narrow":{"0":"الآن","future":{"zero":"خلال {0} ثانية","one":"خلال ثانية واحدة","two":"خلال ثانيتين","few":"خلال {0} ثوانٍ","many":"خلال {0} ثانية","other":"خلال {0} ثانية"},"past":{"zero":"قبل {0} ثانية","one":"قبل ثانية واحدة","two":"قبل ثانيتين","few":"قبل {0} ثوانٍ","many":"قبل {0} ثانية","other":"قبل {0} ثانية"}}},"locale":"ar-OM"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
