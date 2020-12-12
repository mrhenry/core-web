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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("lv").length
)) {
// Intl.RelativeTimeFormat.~locale.lv
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"šajā gadā","1":"nākamajā gadā","future":{"zero":"pēc {0} gadiem","one":"pēc {0} gada","other":"pēc {0} gadiem"},"past":{"zero":"pirms {0} gadiem","one":"pirms {0} gada","other":"pirms {0} gadiem"},"-1":"pagājušajā gadā"},"year-short":{"0":"šajā g.","1":"nāk. gadā","future":{"zero":"pēc {0} g.","one":"pēc {0} g.","other":"pēc {0} g."},"past":{"zero":"pirms {0} g.","one":"pirms {0} g.","other":"pirms {0} g."},"-1":"pag. gadā"},"year-narrow":{"0":"šajā g.","1":"nāk. gadā","future":{"zero":"pēc {0} g.","one":"pēc {0} g.","other":"pēc {0} g."},"past":{"zero":"pirms {0} g.","one":"pirms {0} g.","other":"pirms {0} g."},"-1":"pag. gadā"},"quarter":{"0":"šis ceturksnis","1":"nākamais ceturksnis","future":{"zero":"pēc {0} ceturkšņiem","one":"pēc {0} ceturkšņa","other":"pēc {0} ceturkšņiem"},"past":{"zero":"pirms {0} ceturkšņiem","one":"pirms {0} ceturkšņa","other":"pirms {0} ceturkšņiem"},"-1":"pēdējais ceturksnis"},"quarter-short":{"0":"šis ceturksnis","1":"nākamais ceturksnis","future":{"zero":"pēc {0} cet.","one":"pēc {0} cet.","other":"pēc {0} cet."},"past":{"zero":"pirms {0} cet.","one":"pirms {0} cet.","other":"pirms {0} cet."},"-1":"pēdējais ceturksnis"},"quarter-narrow":{"0":"šis ceturksnis","1":"nākamais ceturksnis","future":{"zero":"pēc {0} cet.","one":"pēc {0} cet.","other":"pēc {0} cet."},"past":{"zero":"pirms {0} cet.","one":"pirms {0} cet.","other":"pirms {0} cet."},"-1":"pēdējais ceturksnis"},"month":{"0":"šajā mēnesī","1":"nākamajā mēnesī","future":{"zero":"pēc {0} mēnešiem","one":"pēc {0} mēneša","other":"pēc {0} mēnešiem"},"past":{"zero":"pirms {0} mēnešiem","one":"pirms {0} mēneša","other":"pirms {0} mēnešiem"},"-1":"pagājušajā mēnesī"},"month-short":{"0":"šajā mēn.","1":"nāk. mēn.","future":{"zero":"pēc {0} mēn.","one":"pēc {0} mēn.","other":"pēc {0} mēn."},"past":{"zero":"pirms {0} mēn.","one":"pirms {0} mēn.","other":"pirms {0} mēn."},"-1":"pag. mēn."},"month-narrow":{"0":"šajā mēn.","1":"nāk. mēn.","future":{"zero":"pēc {0} mēn.","one":"pēc {0} mēn.","other":"pēc {0} mēn."},"past":{"zero":"pirms {0} mēn.","one":"pirms {0} mēn.","other":"pirms {0} mēn."},"-1":"pag. mēn."},"week":{"0":"šajā nedēļā","1":"nākamajā nedēļā","future":{"zero":"pēc {0} nedēļām","one":"pēc {0} nedēļas","other":"pēc {0} nedēļām"},"past":{"zero":"pirms {0} nedēļām","one":"pirms {0} nedēļas","other":"pirms {0} nedēļām"},"-1":"pagājušajā nedēļā"},"week-short":{"0":"šajā ned.","1":"nāk. ned.","future":{"zero":"pēc {0} ned.","one":"pēc {0} ned.","other":"pēc {0} ned."},"past":{"zero":"pirms {0} ned.","one":"pirms {0} ned.","other":"pirms {0} ned."},"-1":"pag. ned."},"week-narrow":{"0":"šajā ned.","1":"nāk. ned.","future":{"zero":"pēc {0} ned.","one":"pēc {0} ned.","other":"pēc {0} ned."},"past":{"zero":"pirms {0} ned.","one":"pirms {0} ned.","other":"pirms {0} ned."},"-1":"pag. ned."},"day":{"0":"šodien","1":"rīt","2":"parīt","future":{"zero":"pēc {0} dienām","one":"pēc {0} dienas","other":"pēc {0} dienām"},"past":{"zero":"pirms {0} dienām","one":"pirms {0} dienas","other":"pirms {0} dienām"},"-2":"aizvakar","-1":"vakar"},"day-short":{"0":"šodien","1":"rīt","2":"parīt","future":{"zero":"pēc {0} d.","one":"pēc {0} d.","other":"pēc {0} d."},"past":{"zero":"pirms {0} d.","one":"pirms {0} d.","other":"pirms {0} d."},"-2":"aizvakar","-1":"vakar"},"day-narrow":{"0":"šodien","1":"rīt","2":"parīt","future":{"zero":"pēc {0} d.","one":"pēc {0} d.","other":"pēc {0} d."},"past":{"zero":"pirms {0} d.","one":"pirms {0} d.","other":"pirms {0} d."},"-2":"aizvakar","-1":"vakar"},"hour":{"0":"šajā stundā","future":{"zero":"pēc {0} stundām","one":"pēc {0} stundas","other":"pēc {0} stundām"},"past":{"zero":"pirms {0} stundām","one":"pirms {0} stundas","other":"pirms {0} stundām"}},"hour-short":{"0":"šajā stundā","future":{"zero":"pēc {0} st.","one":"pēc {0} st.","other":"pēc {0} st."},"past":{"zero":"pirms {0} st.","one":"pirms {0} st.","other":"pirms {0} st."}},"hour-narrow":{"0":"šajā stundā","future":{"zero":"pēc {0} h","one":"pēc {0} h","other":"pēc {0} h"},"past":{"zero":"pirms {0} h","one":"pirms {0} h","other":"pirms {0} h"}},"minute":{"0":"šajā minūtē","future":{"zero":"pēc {0} minūtēm","one":"pēc {0} minūtes","other":"pēc {0} minūtēm"},"past":{"zero":"pirms {0} minūtēm","one":"pirms {0} minūtes","other":"pirms {0} minūtēm"}},"minute-short":{"0":"šajā minūtē","future":{"zero":"pēc {0} min.","one":"pēc {0} min.","other":"pēc {0} min."},"past":{"zero":"pirms {0} min.","one":"pirms {0} min.","other":"pirms {0} min."}},"minute-narrow":{"0":"šajā minūtē","future":{"zero":"pēc {0} min","one":"pēc {0} min","other":"pēc {0} min"},"past":{"zero":"pirms {0} min","one":"pirms {0} min","other":"pirms {0} min"}},"second":{"0":"tagad","future":{"zero":"pēc {0} sekundēm","one":"pēc {0} sekundes","other":"pēc {0} sekundēm"},"past":{"zero":"pirms {0} sekundēm","one":"pirms {0} sekundes","other":"pirms {0} sekundēm"}},"second-short":{"0":"tagad","future":{"zero":"pēc {0} sek.","one":"pēc {0} sek.","other":"pēc {0} sek."},"past":{"zero":"pirms {0} sek.","one":"pirms {0} sek.","other":"pirms {0} sek."}},"second-narrow":{"0":"tagad","future":{"zero":"pēc {0} s","one":"pēc {0} s","other":"pēc {0} s"},"past":{"zero":"pirms {0} s","one":"pirms {0} s","other":"pirms {0} s"}}},"locale":"lv"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
