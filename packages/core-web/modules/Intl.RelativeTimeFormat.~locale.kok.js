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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("kok").length
)) {
// Intl.RelativeTimeFormat.~locale.kok
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"हें वर्स","1":"फुडलें वर्स","future":{"other":"{0} वर्सांनीं"},"past":{"other":"{0} वर्सां आदीं"},"-1":"फाटलें वर्स"},"year-short":{"0":"हें वर्स","1":"फुडलें वर्स","future":{"other":"{0} वर्सांनीं"},"past":{"other":"{0} वर्स आदीं"},"-1":"फाटलें वर्स"},"year-narrow":{"0":"हें वर्स","1":"फुडलें वर्स","future":{"other":"{0} वर्सांनीं"},"past":{"other":"{0} वर्स आदीं"},"-1":"फाटलें वर्स"},"quarter":{"0":"हो त्रैमासीक","1":"फुडलो त्रैमासीक","future":{"other":"{0} त्रैमासीकांत"},"past":{"other":"{0} त्रैमासीकां आदीं"},"-1":"फाटलो त्रैमासीक"},"quarter-short":{"0":"हो त्रैमासीक","1":"फुडलो त्रैमासीक","future":{"other":"{0} त्रैमासीकांत"},"past":{"other":"{0} त्रैमासीकां आदीं"},"-1":"फाटलो त्रैमासीक"},"quarter-narrow":{"0":"हो त्रैमासीक","1":"फुडलो त्रैमासीक","future":{"other":"{0} त्रैमासीकांत"},"past":{"other":"{0} त्रैमासीकां आदीं"},"-1":"फाटलो त्रैमासीक"},"month":{"0":"हो म्हयनो","1":"फुडलो म्हयनो","future":{"other":"{0} म्हयन्यानीं"},"past":{"other":"{0} म्हयन्यां आदीं"},"-1":"फाटलो म्हयनो"},"month-short":{"0":"हो म्हयनो","1":"फुडलो म्हयनो","future":{"other":"{0} म्हयन्यानीं"},"past":{"other":"{0} म्हयन्यां आदीं"},"-1":"फाटलो म्हयनो"},"month-narrow":{"0":"हो म्हयनो","1":"फुडलो म्हयनो","future":{"other":"{0} म्हयन्यानीं"},"past":{"other":"{0} म्हयन्यां आदीं"},"-1":"फाटलो म्हयनो"},"week":{"0":"हो सप्तक","1":"फुडलो सप्तक","future":{"other":"{0} सप्तकांनीं"},"past":{"other":"{0} सप्तकां आदीं"},"-1":"निमाणो सप्तक"},"week-short":{"0":"हो सप्तक","1":"फुडलो सप्तक","future":{"other":"{0} सप्तकांनीं"},"past":{"other":"{0} सप्तकां आदीं"},"-1":"निमाणो सप्तक"},"week-narrow":{"0":"हो सप्तक","1":"फुडलो सप्तक","future":{"other":"{0} सप्तकांनीं"},"past":{"other":"{0} सप्त. आदीं"},"-1":"निमाणो सप्तक"},"day":{"0":"आयज","1":"फाल्यां","future":{"other":"{0} दिसानीं"},"past":{"other":"{0} दीस आदीं"},"-1":"काल"},"day-short":{"0":"आयज","1":"फाल्यां","future":{"other":"{0} दिसानीं"},"past":{"other":"{0} दीस आदीं"},"-1":"काल"},"day-narrow":{"0":"आयज","1":"फाल्यां","future":{"other":"{0} दिसानीं"},"past":{"other":"{0} दीस आदीं"},"-1":"काल"},"hour":{"0":"हें वर","future":{"other":"{0} वरांनीं"},"past":{"other":"{0} वरा आदीं"}},"hour-short":{"0":"हें वर","future":{"other":"{0} वरांनीं"},"past":{"other":"{0} वरा आदीं"}},"hour-narrow":{"0":"हें वर","future":{"other":"{0} वरांनीं"},"past":{"other":"{0} वरा आदीं"}},"minute":{"0":"हें मिनीट","future":{"other":"{0} मिन्टां"},"past":{"other":"{0} मिन्टां आदीं"}},"minute-short":{"0":"हें मिनीट","future":{"other":"{0} मिन्टां"},"past":{"other":"{0} मिन्टां आदीं"}},"minute-narrow":{"0":"हें मिनीट","future":{"other":"{0} मिन्टां"},"past":{"other":"{0} मिन्टां आदीं"}},"second":{"0":"आतां","future":{"other":"{0} सेकंदानीं"},"past":{"other":"{0} सेकंद आदीं"}},"second-short":{"0":"आतां","future":{"other":"{0} सेकंदानीं"},"past":{"other":"{0} से. आदीं"}},"second-narrow":{"0":"आतां","future":{"other":"{0} सेकंदानीं"},"past":{"other":"{0} से. आदीं"}}},"locale":"kok"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
