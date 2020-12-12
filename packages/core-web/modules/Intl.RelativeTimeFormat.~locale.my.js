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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("my").length
)) {
// Intl.RelativeTimeFormat.~locale.my
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["mymr"],"year":{"0":"ယခုနှစ်","1":"လာမည့်နှစ်","future":{"other":"{0} နှစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နှစ်"},"-1":"ယမန်နှစ်"},"year-short":{"0":"ယခုနှစ်","1":"လာမည့်နှစ်","future":{"other":"{0} နှစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နှစ်"},"-1":"ယမန်နှစ်"},"year-narrow":{"0":"ယခုနှစ်","1":"လာမည့်နှစ်","future":{"other":"{0} နှစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နှစ်"},"-1":"ယမန်နှစ်"},"quarter":{"0":"ယခု သုံးလပတ်","1":"လာမည့် သုံးလပတ်","future":{"other":"သုံးလပတ်ကာလ {0} အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် သုံးလပတ်ကာလ {0} ခုအတွင်း"},"-1":"ပြီးခဲ့သည့် သုံးလပတ်"},"quarter-short":{"0":"ယခုသုံးလပတ်","1":"နောက်လာမည့်သုံးလပတ်","future":{"other":"သုံးလပတ်ကာလ {0} ခုအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် သုံးလပတ်ကာလ {0} ခုအတွင်း"},"-1":"ပြီးခဲ့သောသုံးလပတ်"},"quarter-narrow":{"0":"ယခုသုံးလပတ်","1":"နောက်လာမည့်သုံးလပတ်","future":{"other":"သုံးလပတ်ကာလ {0} ခုအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် သုံးလပတ်ကာလ {0} ခုအတွင်း"},"-1":"ပြီးခဲ့သောသုံးလပတ်"},"month":{"0":"ယခုလ","1":"လာမည့်လ","future":{"other":"{0} လအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} လ"},"-1":"ပြီးခဲ့သည့်လ"},"month-short":{"0":"ယခုလ","1":"လာမည့်လ","future":{"other":"{0} လအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} လ"},"-1":"ပြီးခဲ့သည့်လ"},"month-narrow":{"0":"ယခုလ","1":"လာမည့်လ","future":{"other":"{0} လအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} လ"},"-1":"ပြီးခဲ့သည့်လ"},"week":{"0":"ယခု သီတင်းပတ်","1":"လာမည့် သီတင်းပတ်","future":{"other":"{0} ပတ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ပတ်"},"-1":"ပြီးခဲ့သည့် သီတင်းပတ်"},"week-short":{"0":"ယခု သီတင်းပတ်","1":"လာမည့် သီတင်းပတ်","future":{"other":"{0} ပတ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ပတ်"},"-1":"ပြီးခဲ့သည့် သီတင်းပတ်"},"week-narrow":{"0":"ယခု သီတင်းပတ်","1":"လာမည့် သီတင်းပတ်","future":{"other":"{0} ပတ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ပတ်"},"-1":"ပြီးခဲ့သည့် သီတင်းပတ်"},"day":{"0":"ယနေ့","1":"မနက်ဖြန်","2":"သန်ဘက်ခါ","future":{"other":"{0} ရက်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ရက်"},"-2":"တစ်နေ့က","-1":"မနေ့က"},"day-short":{"0":"ယနေ့","1":"မနက်ဖြန်","2":"သန်ဘက်ခါ","future":{"other":"{0} ရက်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ရက်"},"-2":"တစ်နေ့က","-1":"မနေ့က"},"day-narrow":{"0":"ယနေ့","1":"မနက်ဖြန်","2":"သန်ဘက်ခါ","future":{"other":"{0} ရက်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} ရက်"},"-2":"တစ်နေ့က","-1":"မနေ့က"},"hour":{"0":"ဤအချိန်","future":{"other":"{0} နာရီအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နာရီ"}},"hour-short":{"0":"ဤအချိန်","future":{"other":"{0} နာရီအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နာရီ"}},"hour-narrow":{"0":"ဤအချိန်","future":{"other":"{0} နာရီအတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} နာရီ"}},"minute":{"0":"ဤမိနစ်","future":{"other":"{0} မိနစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} မိနစ်"}},"minute-short":{"0":"ဤမိနစ်","future":{"other":"{0} မိနစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} မိနစ်"}},"minute-narrow":{"0":"ဤမိနစ်","future":{"other":"{0} မိနစ်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} မိနစ်"}},"second":{"0":"ယခု","future":{"other":"{0} စက္ကန့်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} စက္ကန့်"}},"second-short":{"0":"ယခု","future":{"other":"{0} စက္ကန့်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} စက္ကန့်"}},"second-narrow":{"0":"ယခု","future":{"other":"{0} စက္ကန့်အတွင်း"},"past":{"other":"ပြီးခဲ့သည့် {0} စက္ကန့်"}}},"locale":"my"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
