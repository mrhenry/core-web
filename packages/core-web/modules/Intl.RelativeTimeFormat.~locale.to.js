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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("to").length
)) {
// Intl.RelativeTimeFormat.~locale.to
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"to":{"nu":["latn"],"year":{"0":"taʻú ni","1":"taʻu kahaʻu","future":{"other":"ʻi he taʻu ʻe {0}"},"past":{"other":"taʻu ʻe {0} kuoʻosi"},"-1":"taʻu kuoʻosi"},"year-short":{"0":"taʻú ni","1":"taʻu kahaʻu","future":{"other":"ʻi he taʻu ʻe {0}"},"past":{"other":"taʻu ʻe {0} kuoʻosi"},"-1":"taʻu kuoʻosi"},"year-narrow":{"0":"taʻú ni","1":"taʻu kahaʻu","future":{"other":"ʻi he taʻu ʻe {0}"},"past":{"other":"taʻu ʻe {0} kuoʻosi"},"-1":"taʻu kuoʻosi"},"quarter":{"0":"kuata koʻeni","1":"kuata hoko","future":{"other":"ʻi he kuata ʻe {0}"},"past":{"other":"kuata ʻe {0} kuoʻosi"},"-1":"kuata kuoʻosi"},"quarter-short":{"0":"kuata koʻeni","1":"kuata hoko","future":{"other":"ʻi he kuata ʻe {0}"},"past":{"other":"kuata ʻe {0} kuoʻosi"},"-1":"kuata kuoʻosi"},"quarter-narrow":{"0":"kuata koʻeni","1":"kuata hoko","future":{"other":"ʻi he kuata ʻe {0}"},"past":{"other":"kuata ʻe {0} kuoʻosi"},"-1":"kuata kuoʻosi"},"month":{"0":"māhiná ni","1":"māhina kahaʻu","future":{"other":"ʻi he māhina ʻe {0}"},"past":{"other":"māhina ʻe {0} kuoʻosi"},"-1":"māhina kuoʻosi"},"month-short":{"0":"māhiná ni","1":"māhina kahaʻu","future":{"other":"ʻi he māhina ʻe {0}"},"past":{"other":"māhina ʻe {0} kuoʻosi"},"-1":"māhina kuoʻosi"},"month-narrow":{"0":"māhiná ni","1":"māhina kahaʻu","future":{"other":"ʻi he māhina ʻe {0}"},"past":{"other":"māhina ʻe {0} kuoʻosi"},"-1":"māhina kuoʻosi"},"week":{"0":"uiké ni","1":"uike kahaʻu","future":{"other":"ʻi he uike ʻe {0}"},"past":{"other":"uike ʻe {0} kuoʻosi"},"-1":"uike kuoʻosi"},"week-short":{"0":"uiké ni","1":"uike kahaʻu","future":{"other":"ʻi he uike ʻe {0}"},"past":{"other":"uike ʻe {0} kuoʻosi"},"-1":"uike kuoʻosi"},"week-narrow":{"0":"uiké ni","1":"uike kahaʻu","future":{"other":"ʻi he uike ʻe {0}"},"past":{"other":"uike ʻe {0} kuoʻosi"},"-1":"uike kuoʻosi"},"day":{"0":"ʻahó ni","1":"ʻapongipongi","2":"ʻahepongipongi","future":{"other":"ʻi he ʻaho ʻe {0}"},"past":{"other":"ʻaho ʻe {0} kuoʻosi"},"-2":"ʻaneheafi","-1":"ʻaneafi"},"day-short":{"0":"ʻahó ni","1":"ʻapongipongi","2":"ʻahepongipongi","future":{"other":"ʻi he ʻaho ʻe {0}"},"past":{"other":"ʻaho ʻe {0} kuoʻosi"},"-2":"ʻaneheafi","-1":"ʻaneafi"},"day-narrow":{"0":"ʻahó ni","1":"ʻapongipongi","2":"ʻahepongipongi","future":{"other":"ʻi he ʻaho ʻe {0}"},"past":{"other":"ʻaho ʻe {0} kuoʻosi"},"-2":"ʻaneheafi","-1":"ʻaneafi"},"hour":{"0":"ko e houa ʻeni","future":{"other":"ʻi he houa ʻe {0}"},"past":{"other":"houa ʻe {0} kuoʻosi"}},"hour-short":{"0":"ko e houa ʻeni","future":{"other":"ʻi he houa ʻe {0}"},"past":{"other":"houa ʻe {0} kuoʻosi"}},"hour-narrow":{"0":"ko e houa ʻeni","future":{"other":"ʻi he houa ʻe {0}"},"past":{"other":"houa ʻe {0} kuoʻosi"}},"minute":{"0":"ko e miniti ʻeni","future":{"other":"ʻi he miniti ʻe {0}"},"past":{"other":"miniti ʻe {0} kuoʻosi"}},"minute-short":{"0":"ko e miniti ʻeni","future":{"other":"ʻi he miniti ʻe {0}"},"past":{"other":"miniti ʻe {0} kuoʻosi"}},"minute-narrow":{"0":"ko e miniti ʻeni","future":{"other":"ʻi he miniti ʻe {0}"},"past":{"other":"miniti ʻe {0} kuoʻosi"}},"second":{"0":"taimí ni","future":{"other":"ʻi he sekoni ʻe {0}"},"past":{"other":"sekoni ʻe {0} kuoʻosi"}},"second-short":{"0":"taimí ni","future":{"other":"ʻi he sekoni ʻe {0}"},"past":{"other":"sekoni ʻe {0} kuoʻosi"}},"second-narrow":{"0":"taimí ni","future":{"other":"ʻi he sekoni ʻe {0}"},"past":{"other":"sekoni ʻe {0} kuoʻosi"}}}},"availableLocales":["to"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
