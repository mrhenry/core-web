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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("my").length
)) {
// Intl.RelativeTimeFormat.~locale.my
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"my":{"nu":["mymr"],"year":{"0":"ယခုနှစ်","1":"လာမည့်နှစ်","future":{"other":"{0} နှစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နှစ်"},"-1":"ယမန်နှစ်"},"year-short":{"0":"ယခုနှစ်","1":"လာမည့်နှစ်","future":{"other":"{0} နှစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နှစ်"},"-1":"ယမန်နှစ်"},"year-narrow":{"0":"ယခုနှစ်","1":"လာမည့်နှစ်","future":{"other":"{0} နှစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နှစ်"},"-1":"ယမန်နှစ်"},"quarter":{"0":"ယခု သုံးလပတ်","1":"လာမည့် သုံးလပတ်","future":{"other":"သုံးလပတ်ကာလ {0} အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် သုံးလပတ်ကာလ {0} ခုအတွင်း"},"-1":"ပြီးခဲ့သည့် သုံးလပတ်"},"quarter-short":{"0":"ယခုသုံးလပတ်","1":"နောက်လာမည့်သုံးလပတ်","future":{"other":"သုံးလပတ်ကာလ {0} ခုအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် သုံးလပတ်ကာလ {0} ခုအတွင်း"},"-1":"ပြီးခဲ့သောသုံးလပတ်"},"quarter-narrow":{"0":"ယခုသုံးလပတ်","1":"နောက်လာမည့်သုံးလပတ်","future":{"other":"သုံးလပတ်ကာလ {0} ခုအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် သုံးလပတ်ကာလ {0} ခုအတွင်း"},"-1":"ပြီးခဲ့သောသုံးလပတ်"},"month":{"0":"ယခုလ","1":"လာမည့်လ","future":{"other":"{0} လအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} လ"},"-1":"ပြီးခဲ့သည့်လ"},"month-short":{"0":"ယခုလ","1":"လာမည့်လ","future":{"other":"{0} လအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} လ"},"-1":"ပြီးခဲ့သည့်လ"},"month-narrow":{"0":"ယခုလ","1":"လာမည့်လ","future":{"other":"{0} လအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} လ"},"-1":"ပြီးခဲ့သည့်လ"},"week":{"0":"ယခု သီတင်းပတ်","1":"လာမည့် သီတင်းပတ်","future":{"other":"{0} ပတ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ပတ်"},"-1":"ပြီးခဲ့သည့် သီတင်းပတ်"},"week-short":{"0":"ယခု သီတင်းပတ်","1":"လာမည့် သီတင်းပတ်","future":{"other":"{0} ပတ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ပတ်"},"-1":"ပြီးခဲ့သည့် သီတင်းပတ်"},"week-narrow":{"0":"ယခု သီတင်းပတ်","1":"လာမည့် သီတင်းပတ်","future":{"other":"{0} ပတ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ပတ်"},"-1":"ပြီးခဲ့သည့် သီတင်းပတ်"},"day":{"0":"ယနေ့","1":"မနက်ဖြန်","2":"သန်ဘက်ခါ","future":{"other":"{0} ရက်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ရက်"},"-2":"တစ်နေ့က","-1":"မနေ့က"},"day-short":{"0":"ယနေ့","1":"မနက်ဖြန်","2":"သန်ဘက်ခါ","future":{"other":"{0} ရက်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ရက်"},"-2":"တစ်နေ့က","-1":"မနေ့က"},"day-narrow":{"0":"ယနေ့","1":"မနက်ဖြန်","2":"သန်ဘက်ခါ","future":{"other":"{0} ရက်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ရက်"},"-2":"တစ်နေ့က","-1":"မနေ့က"},"hour":{"0":"ဤအချိန်","future":{"other":"{0} နာရီအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နာရီ"}},"hour-short":{"0":"ဤအချိန်","future":{"other":"{0} နာရီအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နာရီ"}},"hour-narrow":{"0":"ဤအချိန်","future":{"other":"{0} နာရီအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နာရီ"}},"minute":{"0":"ဤမိနစ်","future":{"other":"{0} မိနစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} မိနစ်"}},"minute-short":{"0":"ဤမိနစ်","future":{"other":"{0} မိနစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} မိနစ်"}},"minute-narrow":{"0":"ဤမိနစ်","future":{"other":"{0} မိနစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} မိနစ်"}},"second":{"0":"ယခု","future":{"other":"{0} စက္ကန့်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} စက္ကန့်"}},"second-short":{"0":"ယခု","future":{"other":"{0} စက္ကန့်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} စက္ကန့်"}},"second-narrow":{"0":"ယခု","future":{"other":"{0} စက္ကန့်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} စက္ကန့်"}}}},"availableLocales":["my"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
