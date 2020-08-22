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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("he").length
)) {
// Intl.RelativeTimeFormat.~locale.he
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"he":{"nu":["latn"],"year":{"0":"השנה","1":"השנה הבאה","future":{"one":"בעוד שנה","two":"בעוד שנתיים","many":"בעוד {0} שנה","other":"בעוד {0} שנים"},"past":{"one":"לפני שנה","two":"לפני שנתיים","many":"לפני {0} שנה","other":"לפני {0} שנים"},"-1":"השנה שעברה"},"year-short":{"0":"השנה","1":"השנה הבאה","future":{"one":"בעוד שנה","two":"בעוד שנתיים","many":"בעוד {0} שנה","other":"בעוד {0} שנים"},"past":{"one":"לפני שנה","two":"לפני שנתיים","many":"לפני {0} שנה","other":"לפני {0} שנים"},"-1":"השנה שעברה"},"year-narrow":{"0":"השנה","1":"השנה הבאה","future":{"one":"בעוד שנה","two":"בעוד שנתיים","many":"בעוד {0} שנה","other":"בעוד {0} שנים"},"past":{"one":"לפני שנה","two":"לפני שנתיים","many":"לפני {0} שנה","other":"לפני {0} שנים"},"-1":"השנה שעברה"},"quarter":{"0":"רבעון זה","1":"הרבעון הבא","future":{"one":"ברבעון הבא","two":"בעוד שני רבעונים","many":"בעוד {0} רבעונים","other":"בעוד {0} רבעונים"},"past":{"one":"ברבעון הקודם","two":"לפני שני רבעונים","many":"לפני {0} רבעונים","other":"לפני {0} רבעונים"},"-1":"הרבעון הקודם"},"quarter-short":{"0":"רבעון זה","1":"הרבעון הבא","future":{"one":"ברבע׳ הבא","two":"בעוד שני רבע׳","many":"בעוד {0} רבע׳","other":"בעוד {0} רבע׳"},"past":{"one":"ברבע׳ הקודם","two":"לפני שני רבע׳","many":"לפני {0} רבע׳","other":"לפני {0} רבע׳"},"-1":"הרבעון הקודם"},"quarter-narrow":{"0":"רבעון זה","1":"הרבעון הבא","future":{"one":"ברבע׳ הבא","two":"בעוד שני רבע׳","many":"בעוד {0} רבע׳","other":"בעוד {0} רבע׳"},"past":{"one":"ברבע׳ הקודם","two":"לפני שני רבע׳","many":"לפני {0} רבע׳","other":"לפני {0} רבע׳"},"-1":"הרבעון הקודם"},"month":{"0":"החודש","1":"החודש הבא","future":{"one":"בעוד חודש","two":"בעוד חודשיים","many":"בעוד {0} חודשים","other":"בעוד {0} חודשים"},"past":{"one":"לפני חודש","two":"לפני חודשיים","many":"לפני {0} חודשים","other":"לפני {0} חודשים"},"-1":"החודש שעבר"},"month-short":{"0":"החודש","1":"החודש הבא","future":{"one":"בעוד חודש","two":"בעוד חודשיים","many":"בעוד {0} חודשים","other":"בעוד {0} חודשים"},"past":{"one":"לפני חודש","two":"לפני חודשיים","many":"לפני {0} חודשים","other":"לפני {0} חודשים"},"-1":"החודש שעבר"},"month-narrow":{"0":"החודש","1":"החודש הבא","future":{"one":"בעוד חו׳","two":"בעוד חודשיים","many":"בעוד {0} חו׳","other":"בעוד {0} חו׳"},"past":{"one":"לפני חו׳","two":"לפני חודשיים","many":"לפני {0} חו׳","other":"לפני {0} חו׳"},"-1":"החודש שעבר"},"week":{"0":"השבוע","1":"השבוע הבא","future":{"one":"בעוד שבוע","two":"בעוד שבועיים","many":"בעוד {0} שבועות","other":"בעוד {0} שבועות"},"past":{"one":"לפני שבוע","two":"לפני שבועיים","many":"לפני {0} שבועות","other":"לפני {0} שבועות"},"-1":"השבוע שעבר"},"week-short":{"0":"השבוע","1":"השבוע הבא","future":{"one":"בעוד שב׳","two":"בעוד שבועיים","many":"בעוד {0} שב׳","other":"בעוד {0} שב׳"},"past":{"one":"לפני שב׳","two":"לפני שבועיים","many":"לפני {0} שב׳","other":"לפני {0} שב׳"},"-1":"השבוע שעבר"},"week-narrow":{"0":"השבוע","1":"השבוע הבא","future":{"one":"בעוד שב׳","two":"בעוד שבועיים","many":"בעוד {0} שב׳","other":"בעוד {0} שב׳"},"past":{"one":"לפני שבוע","two":"לפני שבועיים","many":"לפני {0} שב׳","other":"לפני {0} שב׳"},"-1":"השבוע שעבר"},"day":{"0":"היום","1":"מחר","2":"מחרתיים","future":{"one":"בעוד יום {0}","two":"בעוד יומיים","many":"בעוד {0} ימים","other":"בעוד {0} ימים"},"past":{"one":"לפני יום {0}","two":"לפני יומיים","many":"לפני {0} ימים","other":"לפני {0} ימים"},"-2":"שלשום","-1":"אתמול"},"day-short":{"0":"היום","1":"מחר","2":"מחרתיים","future":{"one":"מחר","two":"בעוד יומיים","many":"בעוד {0} ימים","other":"בעוד {0} ימים"},"past":{"one":"אתמול","two":"לפני יומיים","many":"לפני {0} ימים","other":"לפני {0} ימים"},"-2":"שלשום","-1":"אתמול"},"day-narrow":{"0":"היום","1":"מחר","2":"מחרתיים","future":{"one":"מחר","two":"בעוד יומיים","many":"בעוד {0} ימים","other":"בעוד {0} ימים"},"past":{"one":"אתמול","two":"לפני יומיים","many":"לפני {0} ימים","other":"לפני {0} ימים"},"-2":"שלשום","-1":"אתמול"},"hour":{"0":"בשעה זו","future":{"one":"בעוד שעה","two":"בעוד שעתיים","many":"בעוד {0} שעות","other":"בעוד {0} שעות"},"past":{"one":"לפני שעה","two":"לפני שעתיים","many":"לפני {0} שעות","other":"לפני {0} שעות"}},"hour-short":{"0":"בשעה זו","future":{"one":"בעוד שעה","two":"בעוד שעתיים","many":"בעוד {0} שע׳","other":"בעוד {0} שע׳"},"past":{"one":"לפני שעה","two":"לפני שעתיים","many":"לפני {0} שע׳","other":"לפני {0} שע׳"}},"hour-narrow":{"0":"בשעה זו","future":{"one":"בעוד שעה","two":"בעוד שעתיים","many":"בעוד {0} שע׳","other":"בעוד {0} שע׳"},"past":{"one":"לפני שעה","two":"לפני שעתיים","many":"לפני {0} שע׳","other":"לפני {0} שע׳"}},"minute":{"0":"בדקה זו","future":{"one":"בעוד דקה","two":"בעוד שתי דקות","many":"בעוד {0} דקות","other":"בעוד {0} דקות"},"past":{"one":"לפני דקה","two":"לפני שתי דקות","many":"לפני {0} דקות","other":"לפני {0} דקות"}},"minute-short":{"0":"בדקה זו","future":{"one":"בעוד דקה","two":"בעוד שתי דק׳","many":"בעוד {0} דק׳","other":"בעוד {0} דק׳"},"past":{"one":"לפני דקה","two":"לפני {0} דק׳","many":"לפני {0} דק׳","other":"לפני {0} דק׳"}},"minute-narrow":{"0":"בדקה זו","future":{"one":"בעוד דקה","two":"בעוד שתי דק׳","many":"בעוד {0} דק׳","other":"בעוד {0} דק׳"},"past":{"one":"לפני דקה","two":"לפני שתי דק׳","many":"לפני {0} דק׳","other":"לפני {0} דק׳"}},"second":{"0":"עכשיו","future":{"one":"בעוד שנייה","two":"בעוד שתי שניות","many":"בעוד {0} שניות","other":"בעוד {0} שניות"},"past":{"one":"לפני שנייה","two":"לפני שתי שניות","many":"לפני {0} שניות","other":"לפני {0} שניות"}},"second-short":{"0":"עכשיו","future":{"one":"בעוד שנ׳","two":"בעוד שתי שנ׳","many":"בעוד {0} שנ׳","other":"בעוד {0} שנ׳"},"past":{"one":"לפני שנ׳","two":"לפני שתי שנ׳","many":"לפני {0} שנ׳","other":"לפני {0} שנ׳"}},"second-narrow":{"0":"עכשיו","future":{"one":"בעוד שנ׳","two":"בעוד שתי שנ׳","many":"בעוד {0} שנ׳","other":"בעוד {0} שנ׳"},"past":{"one":"לפני שנ׳","two":"לפני שתי שנ׳","many":"לפני {0} שנ׳","other":"לפני {0} שנ׳"}}}},"availableLocales":["he"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
