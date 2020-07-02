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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("ln").length
)) {
// Intl.DateTimeFormat.~locale.ln
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"ln":{"am":"ntɔ́ngɔ́","pm":"mpókwa","weekday":{"narrow":["e","y","m","m","m","m","p"],"short":["eye","ybo","mbl","mst","min","mtn","mps"],"long":["eyenga","mokɔlɔ mwa yambo","mokɔlɔ mwa míbalé","mokɔlɔ mwa mísáto","mokɔlɔ ya mínéi","mokɔlɔ ya mítáno","mpɔ́sɔ"]},"era":{"narrow":{"BC":"libóso ya","AD":"nsima ya Y"},"short":{"BC":"libóso ya","AD":"nsima ya Y"},"long":{"BC":"Yambo ya Yézu Krís","AD":"Nsima ya Yézu Krís"}},"month":{"narrow":["y","f","m","a","m","y","y","a","s","ɔ","n","d"],"short":["yan","fbl","msi","apl","mai","yun","yul","agt","stb","ɔtb","nvb","dsb"],"long":["sánzá ya yambo","sánzá ya míbalé","sánzá ya mísáto","sánzá ya mínei","sánzá ya mítáno","sánzá ya motóbá","sánzá ya nsambo","sánzá ya mwambe","sánzá ya libwa","sánzá ya zómi","sánzá ya zómi na mɔ̌kɔ́","sánzá ya zómi na míbalé"]},"timeZoneName":{"UTC":{"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","formats":{"gregory":["h B","h:mm B","h:mm:ss B","d","ccc","E h:mm B","E h:mm:ss B","E d","E h:mm a","E HH:mm","E h:mm:ss a","E HH:mm:ss","G y","G y MMM","G y MMM d","G y MMM d, E","h a","HH","h:mm a","HH:mm","h:mm:ss a","HH:mm:ss","h:mm:ss a v","HH:mm:ss v","h:mm a v","HH:mm v","L","d/M","E d/M","LLL","d MMM","E d MMM","MMMM d","'week' W 'of' MMMM","m:ss","y","M/y","d/M/y","E d/M/y","MMM y","d MMM y","E d MMM y","y MMMM","QQQ y","QQQQ y","'week' w 'of' Y","EEEE d MMMM y","d MMMM y","d MMM y","d/M/y","HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm","EEEE d MMMM y HH:mm:ss zzzz","d MMMM y HH:mm:ss zzzz","d MMM y HH:mm:ss zzzz","d/M/y HH:mm:ss zzzz","d HH:mm:ss zzzz","ccc HH:mm:ss zzzz","E d HH:mm:ss zzzz","G y HH:mm:ss zzzz","G y MMM HH:mm:ss zzzz","G y MMM d HH:mm:ss zzzz","G y MMM d, E HH:mm:ss zzzz","L HH:mm:ss zzzz","d/M HH:mm:ss zzzz","E d/M HH:mm:ss zzzz","LLL HH:mm:ss zzzz","d MMM HH:mm:ss zzzz","E d MMM HH:mm:ss zzzz","MMMM d HH:mm:ss zzzz","'week' W 'of' MMMM HH:mm:ss zzzz","y HH:mm:ss zzzz","M/y HH:mm:ss zzzz","d/M/y HH:mm:ss zzzz","E d/M/y HH:mm:ss zzzz","MMM y HH:mm:ss zzzz","d MMM y HH:mm:ss zzzz","E d MMM y HH:mm:ss zzzz","y MMMM HH:mm:ss zzzz","QQQ y HH:mm:ss zzzz","QQQQ y HH:mm:ss zzzz","'week' w 'of' Y HH:mm:ss zzzz","EEEE d MMMM y HH:mm:ss z","d MMMM y HH:mm:ss z","d MMM y HH:mm:ss z","d/M/y HH:mm:ss z","d HH:mm:ss z","ccc HH:mm:ss z","E d HH:mm:ss z","G y HH:mm:ss z","G y MMM HH:mm:ss z","G y MMM d HH:mm:ss z","G y MMM d, E HH:mm:ss z","L HH:mm:ss z","d/M HH:mm:ss z","E d/M HH:mm:ss z","LLL HH:mm:ss z","d MMM HH:mm:ss z","E d MMM HH:mm:ss z","MMMM d HH:mm:ss z","'week' W 'of' MMMM HH:mm:ss z","y HH:mm:ss z","M/y HH:mm:ss z","d/M/y HH:mm:ss z","E d/M/y HH:mm:ss z","MMM y HH:mm:ss z","d MMM y HH:mm:ss z","E d MMM y HH:mm:ss z","y MMMM HH:mm:ss z","QQQ y HH:mm:ss z","QQQQ y HH:mm:ss z","'week' w 'of' Y HH:mm:ss z","EEEE d MMMM y HH:mm:ss","d MMMM y HH:mm:ss","d MMM y HH:mm:ss","d/M/y HH:mm:ss","d HH:mm:ss","ccc HH:mm:ss","E d HH:mm:ss","G y HH:mm:ss","G y MMM HH:mm:ss","G y MMM d HH:mm:ss","G y MMM d, E HH:mm:ss","L HH:mm:ss","d/M HH:mm:ss","E d/M HH:mm:ss","LLL HH:mm:ss","d MMM HH:mm:ss","E d MMM HH:mm:ss","MMMM d HH:mm:ss","'week' W 'of' MMMM HH:mm:ss","y HH:mm:ss","M/y HH:mm:ss","d/M/y HH:mm:ss","E d/M/y HH:mm:ss","MMM y HH:mm:ss","d MMM y HH:mm:ss","E d MMM y HH:mm:ss","y MMMM HH:mm:ss","QQQ y HH:mm:ss","QQQQ y HH:mm:ss","'week' w 'of' Y HH:mm:ss","EEEE d MMMM y HH:mm","d MMMM y HH:mm","d MMM y HH:mm","d/M/y HH:mm","d HH:mm","ccc HH:mm","E d HH:mm","G y HH:mm","G y MMM HH:mm","G y MMM d HH:mm","G y MMM d, E HH:mm","L HH:mm","d/M HH:mm","E d/M HH:mm","LLL HH:mm","d MMM HH:mm","E d MMM HH:mm","MMMM d HH:mm","'week' W 'of' MMMM HH:mm","y HH:mm","M/y HH:mm","d/M/y HH:mm","E d/M/y HH:mm","MMM y HH:mm","d MMM y HH:mm","E d MMM y HH:mm","y MMMM HH:mm","QQQ y HH:mm","QQQQ y HH:mm","'week' w 'of' Y HH:mm","EEEE d MMMM y h B","d MMMM y h B","d MMM y h B","d/M/y h B","d h B","ccc h B","E d h B","G y h B","G y MMM h B","G y MMM d h B","G y MMM d, E h B","L h B","d/M h B","E d/M h B","LLL h B","d MMM h B","E d MMM h B","MMMM d h B","'week' W 'of' MMMM h B","y h B","M/y h B","d/M/y h B","E d/M/y h B","MMM y h B","d MMM y h B","E d MMM y h B","y MMMM h B","QQQ y h B","QQQQ y h B","'week' w 'of' Y h B","EEEE d MMMM y h:mm B","d MMMM y h:mm B","d MMM y h:mm B","d/M/y h:mm B","d h:mm B","ccc h:mm B","E d h:mm B","G y h:mm B","G y MMM h:mm B","G y MMM d h:mm B","G y MMM d, E h:mm B","L h:mm B","d/M h:mm B","E d/M h:mm B","LLL h:mm B","d MMM h:mm B","E d MMM h:mm B","MMMM d h:mm B","'week' W 'of' MMMM h:mm B","y h:mm B","M/y h:mm B","d/M/y h:mm B","E d/M/y h:mm B","MMM y h:mm B","d MMM y h:mm B","E d MMM y h:mm B","y MMMM h:mm B","QQQ y h:mm B","QQQQ y h:mm B","'week' w 'of' Y h:mm B","EEEE d MMMM y h:mm:ss B","d MMMM y h:mm:ss B","d MMM y h:mm:ss B","d/M/y h:mm:ss B","d h:mm:ss B","ccc h:mm:ss B","E d h:mm:ss B","G y h:mm:ss B","G y MMM h:mm:ss B","G y MMM d h:mm:ss B","G y MMM d, E h:mm:ss B","L h:mm:ss B","d/M h:mm:ss B","E d/M h:mm:ss B","LLL h:mm:ss B","d MMM h:mm:ss B","E d MMM h:mm:ss B","MMMM d h:mm:ss B","'week' W 'of' MMMM h:mm:ss B","y h:mm:ss B","M/y h:mm:ss B","d/M/y h:mm:ss B","E d/M/y h:mm:ss B","MMM y h:mm:ss B","d MMM y h:mm:ss B","E d MMM y h:mm:ss B","y MMMM h:mm:ss B","QQQ y h:mm:ss B","QQQQ y h:mm:ss B","'week' w 'of' Y h:mm:ss B","EEEE d MMMM y h a","d MMMM y h a","d MMM y h a","d/M/y h a","d h a","ccc h a","E d h a","G y h a","G y MMM h a","G y MMM d h a","G y MMM d, E h a","L h a","d/M h a","E d/M h a","LLL h a","d MMM h a","E d MMM h a","MMMM d h a","'week' W 'of' MMMM h a","y h a","M/y h a","d/M/y h a","E d/M/y h a","MMM y h a","d MMM y h a","E d MMM y h a","y MMMM h a","QQQ y h a","QQQQ y h a","'week' w 'of' Y h a","EEEE d MMMM y HH","d MMMM y HH","d MMM y HH","d/M/y HH","d HH","ccc HH","E d HH","G y HH","G y MMM HH","G y MMM d HH","G y MMM d, E HH","L HH","d/M HH","E d/M HH","LLL HH","d MMM HH","E d MMM HH","MMMM d HH","'week' W 'of' MMMM HH","y HH","M/y HH","d/M/y HH","E d/M/y HH","MMM y HH","d MMM y HH","E d MMM y HH","y MMMM HH","QQQ y HH","QQQQ y HH","'week' w 'of' Y HH","EEEE d MMMM y h:mm a","d MMMM y h:mm a","d MMM y h:mm a","d/M/y h:mm a","d h:mm a","ccc h:mm a","E d h:mm a","G y h:mm a","G y MMM h:mm a","G y MMM d h:mm a","G y MMM d, E h:mm a","L h:mm a","d/M h:mm a","E d/M h:mm a","LLL h:mm a","d MMM h:mm a","E d MMM h:mm a","MMMM d h:mm a","'week' W 'of' MMMM h:mm a","y h:mm a","M/y h:mm a","d/M/y h:mm a","E d/M/y h:mm a","MMM y h:mm a","d MMM y h:mm a","E d MMM y h:mm a","y MMMM h:mm a","QQQ y h:mm a","QQQQ y h:mm a","'week' w 'of' Y h:mm a","EEEE d MMMM y HH:mm","d MMMM y HH:mm","d MMM y HH:mm","d/M/y HH:mm","d HH:mm","ccc HH:mm","E d HH:mm","G y HH:mm","G y MMM HH:mm","G y MMM d HH:mm","G y MMM d, E HH:mm","L HH:mm","d/M HH:mm","E d/M HH:mm","LLL HH:mm","d MMM HH:mm","E d MMM HH:mm","MMMM d HH:mm","'week' W 'of' MMMM HH:mm","y HH:mm","M/y HH:mm","d/M/y HH:mm","E d/M/y HH:mm","MMM y HH:mm","d MMM y HH:mm","E d MMM y HH:mm","y MMMM HH:mm","QQQ y HH:mm","QQQQ y HH:mm","'week' w 'of' Y HH:mm","EEEE d MMMM y h:mm:ss a","d MMMM y h:mm:ss a","d MMM y h:mm:ss a","d/M/y h:mm:ss a","d h:mm:ss a","ccc h:mm:ss a","E d h:mm:ss a","G y h:mm:ss a","G y MMM h:mm:ss a","G y MMM d h:mm:ss a","G y MMM d, E h:mm:ss a","L h:mm:ss a","d/M h:mm:ss a","E d/M h:mm:ss a","LLL h:mm:ss a","d MMM h:mm:ss a","E d MMM h:mm:ss a","MMMM d h:mm:ss a","'week' W 'of' MMMM h:mm:ss a","y h:mm:ss a","M/y h:mm:ss a","d/M/y h:mm:ss a","E d/M/y h:mm:ss a","MMM y h:mm:ss a","d MMM y h:mm:ss a","E d MMM y h:mm:ss a","y MMMM h:mm:ss a","QQQ y h:mm:ss a","QQQQ y h:mm:ss a","'week' w 'of' Y h:mm:ss a","EEEE d MMMM y HH:mm:ss","d MMMM y HH:mm:ss","d MMM y HH:mm:ss","d/M/y HH:mm:ss","d HH:mm:ss","ccc HH:mm:ss","E d HH:mm:ss","G y HH:mm:ss","G y MMM HH:mm:ss","G y MMM d HH:mm:ss","G y MMM d, E HH:mm:ss","L HH:mm:ss","d/M HH:mm:ss","E d/M HH:mm:ss","LLL HH:mm:ss","d MMM HH:mm:ss","E d MMM HH:mm:ss","MMMM d HH:mm:ss","'week' W 'of' MMMM HH:mm:ss","y HH:mm:ss","M/y HH:mm:ss","d/M/y HH:mm:ss","E d/M/y HH:mm:ss","MMM y HH:mm:ss","d MMM y HH:mm:ss","E d MMM y HH:mm:ss","y MMMM HH:mm:ss","QQQ y HH:mm:ss","QQQQ y HH:mm:ss","'week' w 'of' Y HH:mm:ss","EEEE d MMMM y h:mm:ss a v","d MMMM y h:mm:ss a v","d MMM y h:mm:ss a v","d/M/y h:mm:ss a v","d h:mm:ss a v","ccc h:mm:ss a v","E d h:mm:ss a v","G y h:mm:ss a v","G y MMM h:mm:ss a v","G y MMM d h:mm:ss a v","G y MMM d, E h:mm:ss a v","L h:mm:ss a v","d/M h:mm:ss a v","E d/M h:mm:ss a v","LLL h:mm:ss a v","d MMM h:mm:ss a v","E d MMM h:mm:ss a v","MMMM d h:mm:ss a v","'week' W 'of' MMMM h:mm:ss a v","y h:mm:ss a v","M/y h:mm:ss a v","d/M/y h:mm:ss a v","E d/M/y h:mm:ss a v","MMM y h:mm:ss a v","d MMM y h:mm:ss a v","E d MMM y h:mm:ss a v","y MMMM h:mm:ss a v","QQQ y h:mm:ss a v","QQQQ y h:mm:ss a v","'week' w 'of' Y h:mm:ss a v","EEEE d MMMM y HH:mm:ss v","d MMMM y HH:mm:ss v","d MMM y HH:mm:ss v","d/M/y HH:mm:ss v","d HH:mm:ss v","ccc HH:mm:ss v","E d HH:mm:ss v","G y HH:mm:ss v","G y MMM HH:mm:ss v","G y MMM d HH:mm:ss v","G y MMM d, E HH:mm:ss v","L HH:mm:ss v","d/M HH:mm:ss v","E d/M HH:mm:ss v","LLL HH:mm:ss v","d MMM HH:mm:ss v","E d MMM HH:mm:ss v","MMMM d HH:mm:ss v","'week' W 'of' MMMM HH:mm:ss v","y HH:mm:ss v","M/y HH:mm:ss v","d/M/y HH:mm:ss v","E d/M/y HH:mm:ss v","MMM y HH:mm:ss v","d MMM y HH:mm:ss v","E d MMM y HH:mm:ss v","y MMMM HH:mm:ss v","QQQ y HH:mm:ss v","QQQQ y HH:mm:ss v","'week' w 'of' Y HH:mm:ss v","EEEE d MMMM y h:mm a v","d MMMM y h:mm a v","d MMM y h:mm a v","d/M/y h:mm a v","d h:mm a v","ccc h:mm a v","E d h:mm a v","G y h:mm a v","G y MMM h:mm a v","G y MMM d h:mm a v","G y MMM d, E h:mm a v","L h:mm a v","d/M h:mm a v","E d/M h:mm a v","LLL h:mm a v","d MMM h:mm a v","E d MMM h:mm a v","MMMM d h:mm a v","'week' W 'of' MMMM h:mm a v","y h:mm a v","M/y h:mm a v","d/M/y h:mm a v","E d/M/y h:mm a v","MMM y h:mm a v","d MMM y h:mm a v","E d MMM y h:mm a v","y MMMM h:mm a v","QQQ y h:mm a v","QQQQ y h:mm a v","'week' w 'of' Y h:mm a v","EEEE d MMMM y HH:mm v","d MMMM y HH:mm v","d MMM y HH:mm v","d/M/y HH:mm v","d HH:mm v","ccc HH:mm v","E d HH:mm v","G y HH:mm v","G y MMM HH:mm v","G y MMM d HH:mm v","G y MMM d, E HH:mm v","L HH:mm v","d/M HH:mm v","E d/M HH:mm v","LLL HH:mm v","d MMM HH:mm v","E d MMM HH:mm v","MMMM d HH:mm v","'week' W 'of' MMMM HH:mm v","y HH:mm v","M/y HH:mm v","d/M/y HH:mm v","E d/M/y HH:mm v","MMM y HH:mm v","d MMM y HH:mm v","E d MMM y HH:mm v","y MMMM HH:mm v","QQQ y HH:mm v","QQQQ y HH:mm v","'week' w 'of' Y HH:mm v","EEEE d MMMM y m:ss","d MMMM y m:ss","d MMM y m:ss","d/M/y m:ss","d m:ss","ccc m:ss","E d m:ss","G y m:ss","G y MMM m:ss","G y MMM d m:ss","G y MMM d, E m:ss","L m:ss","d/M m:ss","E d/M m:ss","LLL m:ss","d MMM m:ss","E d MMM m:ss","MMMM d m:ss","'week' W 'of' MMMM m:ss","y m:ss","M/y m:ss","d/M/y m:ss","E d/M/y m:ss","MMM y m:ss","d MMM y m:ss","E d MMM y m:ss","y MMMM m:ss","QQQ y m:ss","QQQQ y m:ss","'week' w 'of' Y m:ss"]},"hourCycle":"","nu":["latn"],"ca":["gregory"],"hc":["","h23"]}},"availableLocales":["ln"]})
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
