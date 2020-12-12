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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("to").length
)) {
// Intl.RelativeTimeFormat.~locale.to
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"taʻú ni","1":"taʻu kahaʻu","future":{"other":"ʻi he taʻu ʻe {0}"},"past":{"other":"taʻu ʻe {0} kuoʻosi"},"-1":"taʻu kuoʻosi"},"year-short":{"0":"taʻú ni","1":"taʻu kahaʻu","future":{"other":"ʻi he taʻu ʻe {0}"},"past":{"other":"taʻu ʻe {0} kuoʻosi"},"-1":"taʻu kuoʻosi"},"year-narrow":{"0":"taʻú ni","1":"taʻu kahaʻu","future":{"other":"ʻi he taʻu ʻe {0}"},"past":{"other":"taʻu ʻe {0} kuoʻosi"},"-1":"taʻu kuoʻosi"},"quarter":{"0":"kuata koʻeni","1":"kuata hoko","future":{"other":"ʻi he kuata ʻe {0}"},"past":{"other":"kuata ʻe {0} kuoʻosi"},"-1":"kuata kuoʻosi"},"quarter-short":{"0":"kuata koʻeni","1":"kuata hoko","future":{"other":"ʻi he kuata ʻe {0}"},"past":{"other":"kuata ʻe {0} kuoʻosi"},"-1":"kuata kuoʻosi"},"quarter-narrow":{"0":"kuata koʻeni","1":"kuata hoko","future":{"other":"ʻi he kuata ʻe {0}"},"past":{"other":"kuata ʻe {0} kuoʻosi"},"-1":"kuata kuoʻosi"},"month":{"0":"māhiná ni","1":"māhina kahaʻu","future":{"other":"ʻi he māhina ʻe {0}"},"past":{"other":"māhina ʻe {0} kuoʻosi"},"-1":"māhina kuoʻosi"},"month-short":{"0":"māhiná ni","1":"māhina kahaʻu","future":{"other":"ʻi he māhina ʻe {0}"},"past":{"other":"māhina ʻe {0} kuoʻosi"},"-1":"māhina kuoʻosi"},"month-narrow":{"0":"māhiná ni","1":"māhina kahaʻu","future":{"other":"ʻi he māhina ʻe {0}"},"past":{"other":"māhina ʻe {0} kuoʻosi"},"-1":"māhina kuoʻosi"},"week":{"0":"uiké ni","1":"uike kahaʻu","future":{"other":"ʻi he uike ʻe {0}"},"past":{"other":"uike ʻe {0} kuoʻosi"},"-1":"uike kuoʻosi"},"week-short":{"0":"uiké ni","1":"uike kahaʻu","future":{"other":"ʻi he uike ʻe {0}"},"past":{"other":"uike ʻe {0} kuoʻosi"},"-1":"uike kuoʻosi"},"week-narrow":{"0":"uiké ni","1":"uike kahaʻu","future":{"other":"ʻi he uike ʻe {0}"},"past":{"other":"uike ʻe {0} kuoʻosi"},"-1":"uike kuoʻosi"},"day":{"0":"ʻahó ni","1":"ʻapongipongi","2":"ʻahepongipongi","future":{"other":"ʻi he ʻaho ʻe {0}"},"past":{"other":"ʻaho ʻe {0} kuoʻosi"},"-2":"ʻaneheafi","-1":"ʻaneafi"},"day-short":{"0":"ʻahó ni","1":"ʻapongipongi","2":"ʻahepongipongi","future":{"other":"ʻi he ʻaho ʻe {0}"},"past":{"other":"ʻaho ʻe {0} kuoʻosi"},"-2":"ʻaneheafi","-1":"ʻaneafi"},"day-narrow":{"0":"ʻahó ni","1":"ʻapongipongi","2":"ʻahepongipongi","future":{"other":"ʻi he ʻaho ʻe {0}"},"past":{"other":"ʻaho ʻe {0} kuoʻosi"},"-2":"ʻaneheafi","-1":"ʻaneafi"},"hour":{"0":"ko e houa ʻeni","future":{"other":"ʻi he houa ʻe {0}"},"past":{"other":"houa ʻe {0} kuoʻosi"}},"hour-short":{"0":"ko e houa ʻeni","future":{"other":"ʻi he houa ʻe {0}"},"past":{"other":"houa ʻe {0} kuoʻosi"}},"hour-narrow":{"0":"ko e houa ʻeni","future":{"other":"ʻi he houa ʻe {0}"},"past":{"other":"houa ʻe {0} kuoʻosi"}},"minute":{"0":"ko e miniti ʻeni","future":{"other":"ʻi he miniti ʻe {0}"},"past":{"other":"miniti ʻe {0} kuoʻosi"}},"minute-short":{"0":"ko e miniti ʻeni","future":{"other":"ʻi he miniti ʻe {0}"},"past":{"other":"miniti ʻe {0} kuoʻosi"}},"minute-narrow":{"0":"ko e miniti ʻeni","future":{"other":"ʻi he miniti ʻe {0}"},"past":{"other":"miniti ʻe {0} kuoʻosi"}},"second":{"0":"taimí ni","future":{"other":"ʻi he sekoni ʻe {0}"},"past":{"other":"sekoni ʻe {0} kuoʻosi"}},"second-short":{"0":"taimí ni","future":{"other":"ʻi he sekoni ʻe {0}"},"past":{"other":"sekoni ʻe {0} kuoʻosi"}},"second-narrow":{"0":"taimí ni","future":{"other":"ʻi he sekoni ʻe {0}"},"past":{"other":"sekoni ʻe {0} kuoʻosi"}}},"locale":"to"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
