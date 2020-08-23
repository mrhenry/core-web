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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("vai-Latn").length
)) {
// Intl.DateTimeFormat.~locale.vai-Latn
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"vai-Latn":{"am":"AM","pm":"PM","weekday":{"narrow":["S","M","T","W","T","F","S"],"short":["lahadi","tɛɛnɛɛ","talata","alaba","aimisa","aijima","siɓiti"],"long":["lahadi","tɛɛnɛɛ","talata","alaba","aimisa","aijima","siɓiti"]},"era":{"narrow":{"BC":"BCE","AD":"CE"},"short":{"BC":"BCE","AD":"CE"},"long":{"BC":"BCE","AD":"CE"}},"month":{"narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"short":["luukao kemã","ɓandaɓu","vɔɔ","fulu","goo","6","7","kɔnde","saah","galo","kenpkato ɓololɔ","luukao lɔma"],"long":["luukao kemã","ɓandaɓu","vɔɔ","fulu","goo","6","7","kɔnde","saah","galo","kenpkato ɓololɔ","luukao lɔma"]},"timeZoneName":{"UTC":{"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","formats":{"gregory":["h B","h:mm B","h:mm:ss B","d","ccc","E h:mm B","E h:mm:ss B","E d","E h:mm a","E HH:mm","E h:mm:ss a","E HH:mm:ss","G y","G y MMM","G y MMM d","G y MMM d, E","h a","HH","h:mm a","HH:mm","h:mm:ss a","HH:mm:ss","h:mm:ss a v","HH:mm:ss v","h:mm a v","HH:mm v","L","M/d","E, M/d","LLL","MMM d","E, MMM d","MMMM d","'week' W 'of' MMMM","m:ss","y","M/y","M/d/y","E, M/d/y","MMM y","MMM d y","E, MMM d, y","y MMMM","QQQ y","QQQQ y","'week' w 'of' Y","EEEE, d MMMM y","d MMMM y","d MMM y","dd/MM/y","h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a","EEEE, d MMMM y h:mm:ss a zzzz","d MMMM y h:mm:ss a zzzz","d MMM y h:mm:ss a zzzz","dd/MM/y h:mm:ss a zzzz","d h:mm:ss a zzzz","ccc h:mm:ss a zzzz","E d h:mm:ss a zzzz","G y h:mm:ss a zzzz","G y MMM h:mm:ss a zzzz","G y MMM d h:mm:ss a zzzz","G y MMM d, E h:mm:ss a zzzz","L h:mm:ss a zzzz","M/d h:mm:ss a zzzz","E, M/d h:mm:ss a zzzz","LLL h:mm:ss a zzzz","MMM d h:mm:ss a zzzz","E, MMM d h:mm:ss a zzzz","MMMM d h:mm:ss a zzzz","'week' W 'of' MMMM h:mm:ss a zzzz","y h:mm:ss a zzzz","M/y h:mm:ss a zzzz","M/d/y h:mm:ss a zzzz","E, M/d/y h:mm:ss a zzzz","MMM y h:mm:ss a zzzz","MMM d y h:mm:ss a zzzz","E, MMM d, y h:mm:ss a zzzz","y MMMM h:mm:ss a zzzz","QQQ y h:mm:ss a zzzz","QQQQ y h:mm:ss a zzzz","'week' w 'of' Y h:mm:ss a zzzz","EEEE, d MMMM y h:mm:ss a z","d MMMM y h:mm:ss a z","d MMM y h:mm:ss a z","dd/MM/y h:mm:ss a z","d h:mm:ss a z","ccc h:mm:ss a z","E d h:mm:ss a z","G y h:mm:ss a z","G y MMM h:mm:ss a z","G y MMM d h:mm:ss a z","G y MMM d, E h:mm:ss a z","L h:mm:ss a z","M/d h:mm:ss a z","E, M/d h:mm:ss a z","LLL h:mm:ss a z","MMM d h:mm:ss a z","E, MMM d h:mm:ss a z","MMMM d h:mm:ss a z","'week' W 'of' MMMM h:mm:ss a z","y h:mm:ss a z","M/y h:mm:ss a z","M/d/y h:mm:ss a z","E, M/d/y h:mm:ss a z","MMM y h:mm:ss a z","MMM d y h:mm:ss a z","E, MMM d, y h:mm:ss a z","y MMMM h:mm:ss a z","QQQ y h:mm:ss a z","QQQQ y h:mm:ss a z","'week' w 'of' Y h:mm:ss a z","EEEE, d MMMM y h:mm:ss a","d MMMM y h:mm:ss a","d MMM y h:mm:ss a","dd/MM/y h:mm:ss a","d h:mm:ss a","ccc h:mm:ss a","E d h:mm:ss a","G y h:mm:ss a","G y MMM h:mm:ss a","G y MMM d h:mm:ss a","G y MMM d, E h:mm:ss a","L h:mm:ss a","M/d h:mm:ss a","E, M/d h:mm:ss a","LLL h:mm:ss a","MMM d h:mm:ss a","E, MMM d h:mm:ss a","MMMM d h:mm:ss a","'week' W 'of' MMMM h:mm:ss a","y h:mm:ss a","M/y h:mm:ss a","M/d/y h:mm:ss a","E, M/d/y h:mm:ss a","MMM y h:mm:ss a","MMM d y h:mm:ss a","E, MMM d, y h:mm:ss a","y MMMM h:mm:ss a","QQQ y h:mm:ss a","QQQQ y h:mm:ss a","'week' w 'of' Y h:mm:ss a","EEEE, d MMMM y h:mm a","d MMMM y h:mm a","d MMM y h:mm a","dd/MM/y h:mm a","d h:mm a","ccc h:mm a","E d h:mm a","G y h:mm a","G y MMM h:mm a","G y MMM d h:mm a","G y MMM d, E h:mm a","L h:mm a","M/d h:mm a","E, M/d h:mm a","LLL h:mm a","MMM d h:mm a","E, MMM d h:mm a","MMMM d h:mm a","'week' W 'of' MMMM h:mm a","y h:mm a","M/y h:mm a","M/d/y h:mm a","E, M/d/y h:mm a","MMM y h:mm a","MMM d y h:mm a","E, MMM d, y h:mm a","y MMMM h:mm a","QQQ y h:mm a","QQQQ y h:mm a","'week' w 'of' Y h:mm a","EEEE, d MMMM y h B","d MMMM y h B","d MMM y h B","dd/MM/y h B","d h B","ccc h B","E d h B","G y h B","G y MMM h B","G y MMM d h B","G y MMM d, E h B","L h B","M/d h B","E, M/d h B","LLL h B","MMM d h B","E, MMM d h B","MMMM d h B","'week' W 'of' MMMM h B","y h B","M/y h B","M/d/y h B","E, M/d/y h B","MMM y h B","MMM d y h B","E, MMM d, y h B","y MMMM h B","QQQ y h B","QQQQ y h B","'week' w 'of' Y h B","EEEE, d MMMM y h:mm B","d MMMM y h:mm B","d MMM y h:mm B","dd/MM/y h:mm B","d h:mm B","ccc h:mm B","E d h:mm B","G y h:mm B","G y MMM h:mm B","G y MMM d h:mm B","G y MMM d, E h:mm B","L h:mm B","M/d h:mm B","E, M/d h:mm B","LLL h:mm B","MMM d h:mm B","E, MMM d h:mm B","MMMM d h:mm B","'week' W 'of' MMMM h:mm B","y h:mm B","M/y h:mm B","M/d/y h:mm B","E, M/d/y h:mm B","MMM y h:mm B","MMM d y h:mm B","E, MMM d, y h:mm B","y MMMM h:mm B","QQQ y h:mm B","QQQQ y h:mm B","'week' w 'of' Y h:mm B","EEEE, d MMMM y h:mm:ss B","d MMMM y h:mm:ss B","d MMM y h:mm:ss B","dd/MM/y h:mm:ss B","d h:mm:ss B","ccc h:mm:ss B","E d h:mm:ss B","G y h:mm:ss B","G y MMM h:mm:ss B","G y MMM d h:mm:ss B","G y MMM d, E h:mm:ss B","L h:mm:ss B","M/d h:mm:ss B","E, M/d h:mm:ss B","LLL h:mm:ss B","MMM d h:mm:ss B","E, MMM d h:mm:ss B","MMMM d h:mm:ss B","'week' W 'of' MMMM h:mm:ss B","y h:mm:ss B","M/y h:mm:ss B","M/d/y h:mm:ss B","E, M/d/y h:mm:ss B","MMM y h:mm:ss B","MMM d y h:mm:ss B","E, MMM d, y h:mm:ss B","y MMMM h:mm:ss B","QQQ y h:mm:ss B","QQQQ y h:mm:ss B","'week' w 'of' Y h:mm:ss B","EEEE, d MMMM y h a","d MMMM y h a","d MMM y h a","dd/MM/y h a","d h a","ccc h a","E d h a","G y h a","G y MMM h a","G y MMM d h a","G y MMM d, E h a","L h a","M/d h a","E, M/d h a","LLL h a","MMM d h a","E, MMM d h a","MMMM d h a","'week' W 'of' MMMM h a","y h a","M/y h a","M/d/y h a","E, M/d/y h a","MMM y h a","MMM d y h a","E, MMM d, y h a","y MMMM h a","QQQ y h a","QQQQ y h a","'week' w 'of' Y h a","EEEE, d MMMM y HH","d MMMM y HH","d MMM y HH","dd/MM/y HH","d HH","ccc HH","E d HH","G y HH","G y MMM HH","G y MMM d HH","G y MMM d, E HH","L HH","M/d HH","E, M/d HH","LLL HH","MMM d HH","E, MMM d HH","MMMM d HH","'week' W 'of' MMMM HH","y HH","M/y HH","M/d/y HH","E, M/d/y HH","MMM y HH","MMM d y HH","E, MMM d, y HH","y MMMM HH","QQQ y HH","QQQQ y HH","'week' w 'of' Y HH","EEEE, d MMMM y h:mm a","d MMMM y h:mm a","d MMM y h:mm a","dd/MM/y h:mm a","d h:mm a","ccc h:mm a","E d h:mm a","G y h:mm a","G y MMM h:mm a","G y MMM d h:mm a","G y MMM d, E h:mm a","L h:mm a","M/d h:mm a","E, M/d h:mm a","LLL h:mm a","MMM d h:mm a","E, MMM d h:mm a","MMMM d h:mm a","'week' W 'of' MMMM h:mm a","y h:mm a","M/y h:mm a","M/d/y h:mm a","E, M/d/y h:mm a","MMM y h:mm a","MMM d y h:mm a","E, MMM d, y h:mm a","y MMMM h:mm a","QQQ y h:mm a","QQQQ y h:mm a","'week' w 'of' Y h:mm a","EEEE, d MMMM y HH:mm","d MMMM y HH:mm","d MMM y HH:mm","dd/MM/y HH:mm","d HH:mm","ccc HH:mm","E d HH:mm","G y HH:mm","G y MMM HH:mm","G y MMM d HH:mm","G y MMM d, E HH:mm","L HH:mm","M/d HH:mm","E, M/d HH:mm","LLL HH:mm","MMM d HH:mm","E, MMM d HH:mm","MMMM d HH:mm","'week' W 'of' MMMM HH:mm","y HH:mm","M/y HH:mm","M/d/y HH:mm","E, M/d/y HH:mm","MMM y HH:mm","MMM d y HH:mm","E, MMM d, y HH:mm","y MMMM HH:mm","QQQ y HH:mm","QQQQ y HH:mm","'week' w 'of' Y HH:mm","EEEE, d MMMM y h:mm:ss a","d MMMM y h:mm:ss a","d MMM y h:mm:ss a","dd/MM/y h:mm:ss a","d h:mm:ss a","ccc h:mm:ss a","E d h:mm:ss a","G y h:mm:ss a","G y MMM h:mm:ss a","G y MMM d h:mm:ss a","G y MMM d, E h:mm:ss a","L h:mm:ss a","M/d h:mm:ss a","E, M/d h:mm:ss a","LLL h:mm:ss a","MMM d h:mm:ss a","E, MMM d h:mm:ss a","MMMM d h:mm:ss a","'week' W 'of' MMMM h:mm:ss a","y h:mm:ss a","M/y h:mm:ss a","M/d/y h:mm:ss a","E, M/d/y h:mm:ss a","MMM y h:mm:ss a","MMM d y h:mm:ss a","E, MMM d, y h:mm:ss a","y MMMM h:mm:ss a","QQQ y h:mm:ss a","QQQQ y h:mm:ss a","'week' w 'of' Y h:mm:ss a","EEEE, d MMMM y HH:mm:ss","d MMMM y HH:mm:ss","d MMM y HH:mm:ss","dd/MM/y HH:mm:ss","d HH:mm:ss","ccc HH:mm:ss","E d HH:mm:ss","G y HH:mm:ss","G y MMM HH:mm:ss","G y MMM d HH:mm:ss","G y MMM d, E HH:mm:ss","L HH:mm:ss","M/d HH:mm:ss","E, M/d HH:mm:ss","LLL HH:mm:ss","MMM d HH:mm:ss","E, MMM d HH:mm:ss","MMMM d HH:mm:ss","'week' W 'of' MMMM HH:mm:ss","y HH:mm:ss","M/y HH:mm:ss","M/d/y HH:mm:ss","E, M/d/y HH:mm:ss","MMM y HH:mm:ss","MMM d y HH:mm:ss","E, MMM d, y HH:mm:ss","y MMMM HH:mm:ss","QQQ y HH:mm:ss","QQQQ y HH:mm:ss","'week' w 'of' Y HH:mm:ss","EEEE, d MMMM y h:mm:ss a v","d MMMM y h:mm:ss a v","d MMM y h:mm:ss a v","dd/MM/y h:mm:ss a v","d h:mm:ss a v","ccc h:mm:ss a v","E d h:mm:ss a v","G y h:mm:ss a v","G y MMM h:mm:ss a v","G y MMM d h:mm:ss a v","G y MMM d, E h:mm:ss a v","L h:mm:ss a v","M/d h:mm:ss a v","E, M/d h:mm:ss a v","LLL h:mm:ss a v","MMM d h:mm:ss a v","E, MMM d h:mm:ss a v","MMMM d h:mm:ss a v","'week' W 'of' MMMM h:mm:ss a v","y h:mm:ss a v","M/y h:mm:ss a v","M/d/y h:mm:ss a v","E, M/d/y h:mm:ss a v","MMM y h:mm:ss a v","MMM d y h:mm:ss a v","E, MMM d, y h:mm:ss a v","y MMMM h:mm:ss a v","QQQ y h:mm:ss a v","QQQQ y h:mm:ss a v","'week' w 'of' Y h:mm:ss a v","EEEE, d MMMM y HH:mm:ss v","d MMMM y HH:mm:ss v","d MMM y HH:mm:ss v","dd/MM/y HH:mm:ss v","d HH:mm:ss v","ccc HH:mm:ss v","E d HH:mm:ss v","G y HH:mm:ss v","G y MMM HH:mm:ss v","G y MMM d HH:mm:ss v","G y MMM d, E HH:mm:ss v","L HH:mm:ss v","M/d HH:mm:ss v","E, M/d HH:mm:ss v","LLL HH:mm:ss v","MMM d HH:mm:ss v","E, MMM d HH:mm:ss v","MMMM d HH:mm:ss v","'week' W 'of' MMMM HH:mm:ss v","y HH:mm:ss v","M/y HH:mm:ss v","M/d/y HH:mm:ss v","E, M/d/y HH:mm:ss v","MMM y HH:mm:ss v","MMM d y HH:mm:ss v","E, MMM d, y HH:mm:ss v","y MMMM HH:mm:ss v","QQQ y HH:mm:ss v","QQQQ y HH:mm:ss v","'week' w 'of' Y HH:mm:ss v","EEEE, d MMMM y h:mm a v","d MMMM y h:mm a v","d MMM y h:mm a v","dd/MM/y h:mm a v","d h:mm a v","ccc h:mm a v","E d h:mm a v","G y h:mm a v","G y MMM h:mm a v","G y MMM d h:mm a v","G y MMM d, E h:mm a v","L h:mm a v","M/d h:mm a v","E, M/d h:mm a v","LLL h:mm a v","MMM d h:mm a v","E, MMM d h:mm a v","MMMM d h:mm a v","'week' W 'of' MMMM h:mm a v","y h:mm a v","M/y h:mm a v","M/d/y h:mm a v","E, M/d/y h:mm a v","MMM y h:mm a v","MMM d y h:mm a v","E, MMM d, y h:mm a v","y MMMM h:mm a v","QQQ y h:mm a v","QQQQ y h:mm a v","'week' w 'of' Y h:mm a v","EEEE, d MMMM y HH:mm v","d MMMM y HH:mm v","d MMM y HH:mm v","dd/MM/y HH:mm v","d HH:mm v","ccc HH:mm v","E d HH:mm v","G y HH:mm v","G y MMM HH:mm v","G y MMM d HH:mm v","G y MMM d, E HH:mm v","L HH:mm v","M/d HH:mm v","E, M/d HH:mm v","LLL HH:mm v","MMM d HH:mm v","E, MMM d HH:mm v","MMMM d HH:mm v","'week' W 'of' MMMM HH:mm v","y HH:mm v","M/y HH:mm v","M/d/y HH:mm v","E, M/d/y HH:mm v","MMM y HH:mm v","MMM d y HH:mm v","E, MMM d, y HH:mm v","y MMMM HH:mm v","QQQ y HH:mm v","QQQQ y HH:mm v","'week' w 'of' Y HH:mm v","EEEE, d MMMM y m:ss","d MMMM y m:ss","d MMM y m:ss","dd/MM/y m:ss","d m:ss","ccc m:ss","E d m:ss","G y m:ss","G y MMM m:ss","G y MMM d m:ss","G y MMM d, E m:ss","L m:ss","M/d m:ss","E, M/d m:ss","LLL m:ss","MMM d m:ss","E, MMM d m:ss","MMMM d m:ss","'week' W 'of' MMMM m:ss","y m:ss","M/y m:ss","M/d/y m:ss","E, M/d/y m:ss","MMM y m:ss","MMM d y m:ss","E, MMM d, y m:ss","y MMMM m:ss","QQQ y m:ss","QQQQ y m:ss","'week' w 'of' Y m:ss"]},"hourCycle":"h12","nu":["latn"],"ca":["gregory"],"hc":["h12","","h23",""]}},"availableLocales":["vai-Latn"]})
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
