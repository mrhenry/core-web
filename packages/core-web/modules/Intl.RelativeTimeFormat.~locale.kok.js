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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("kok").length
)) {
// Intl.RelativeTimeFormat.~locale.kok
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"kok":{"nu":["latn"],"year":{"0":"हें वर्स","1":"फुडलें वर्स","future":{"other":"{0} वर्सांनीं"},"past":{"other":"{0} वर्सां आदीं"},"-1":"फाटलें वर्स"},"year-short":{"0":"हें वर्स","1":"फुडलें वर्स","future":{"other":"{0} वर्सांनीं"},"past":{"other":"{0} वर्स आदीं"},"-1":"फाटलें वर्स"},"year-narrow":{"0":"हें वर्स","1":"फुडलें वर्स","future":{"other":"{0} वर्सांनीं"},"past":{"other":"{0} वर्स आदीं"},"-1":"फाटलें वर्स"},"quarter":{"0":"हो त्रैमासीक","1":"फुडलो त्रैमासीक","future":{"other":"{0} त्रैमासीकांत"},"past":{"other":"{0} त्रैमासीकां आदीं"},"-1":"फाटलो त्रैमासीक"},"quarter-short":{"0":"हो त्रैमासीक","1":"फुडलो त्रैमासीक","future":{"other":"{0} त्रैमासीकांत"},"past":{"other":"{0} त्रैमासीकां आदीं"},"-1":"फाटलो त्रैमासीक"},"quarter-narrow":{"0":"हो त्रैमासीक","1":"फुडलो त्रैमासीक","future":{"other":"{0} त्रैमासीकांत"},"past":{"other":"{0} त्रैमासीकां आदीं"},"-1":"फाटलो त्रैमासीक"},"month":{"0":"हो म्हयनो","1":"फुडलो म्हयनो","future":{"other":"{0} म्हयन्यानीं"},"past":{"other":"{0} म्हयन्यां आदीं"},"-1":"फाटलो म्हयनो"},"month-short":{"0":"हो म्हयनो","1":"फुडलो म्हयनो","future":{"other":"{0} म्हयन्यानीं"},"past":{"other":"{0} म्हयन्यां आदीं"},"-1":"फाटलो म्हयनो"},"month-narrow":{"0":"हो म्हयनो","1":"फुडलो म्हयनो","future":{"other":"{0} म्हयन्यानीं"},"past":{"other":"{0} म्हयन्यां आदीं"},"-1":"फाटलो म्हयनो"},"week":{"0":"हो सप्तक","1":"फुडलो सप्तक","future":{"other":"{0} सप्तकांनीं"},"past":{"other":"{0} सप्तकां आदीं"},"-1":"निमाणो सप्तक"},"week-short":{"0":"हो सप्तक","1":"फुडलो सप्तक","future":{"other":"{0} सप्तकांनीं"},"past":{"other":"{0} सप्तकां आदीं"},"-1":"निमाणो सप्तक"},"week-narrow":{"0":"हो सप्तक","1":"फुडलो सप्तक","future":{"other":"{0} सप्तकांनीं"},"past":{"other":"{0} सप्त. आदीं"},"-1":"निमाणो सप्तक"},"day":{"0":"आयज","1":"फाल्यां","future":{"other":"{0} दिसानीं"},"past":{"other":"{0} दीस आदीं"},"-1":"काल"},"day-short":{"0":"आयज","1":"फाल्यां","future":{"other":"{0} दिसानीं"},"past":{"other":"{0} दीस आदीं"},"-1":"काल"},"day-narrow":{"0":"आयज","1":"फाल्यां","future":{"other":"{0} दिसानीं"},"past":{"other":"{0} दीस आदीं"},"-1":"काल"},"hour":{"0":"हें वर","future":{"other":"{0} वरांनीं"},"past":{"other":"{0} वरा आदीं"}},"hour-short":{"0":"हें वर","future":{"other":"{0} वरांनीं"},"past":{"other":"{0} वरा आदीं"}},"hour-narrow":{"0":"हें वर","future":{"other":"{0} वरांनीं"},"past":{"other":"{0} वरा आदीं"}},"minute":{"0":"हें मिनीट","future":{"other":"{0} मिन्टां"},"past":{"other":"{0} मिन्टां आदीं"}},"minute-short":{"0":"हें मिनीट","future":{"other":"{0} मिन्टां"},"past":{"other":"{0} मिन्टां आदीं"}},"minute-narrow":{"0":"हें मिनीट","future":{"other":"{0} मिन्टां"},"past":{"other":"{0} मिन्टां आदीं"}},"second":{"0":"आतां","future":{"other":"{0} सेकंदानीं"},"past":{"other":"{0} सेकंद आदीं"}},"second-short":{"0":"आतां","future":{"other":"{0} सेकंदानीं"},"past":{"other":"{0} से. आदीं"}},"second-narrow":{"0":"आतां","future":{"other":"{0} सेकंदानीं"},"past":{"other":"{0} से. आदीं"}}}},"availableLocales":["kok"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
