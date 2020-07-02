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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("asa").length
)) {
// Intl.DateTimeFormat.~locale.asa
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"asa":{"am":"icheheavo","pm":"ichamthi","weekday":{"narrow":["J","J","J","J","A","I","J"],"short":["Jpi","Jtt","Jnn","Jtn","Alh","Ijm","Jmo"],"long":["Jumapili","Jumatatu","Jumanne","Jumatano","Alhamisi","Ijumaa","Jumamosi"]},"era":{"narrow":{"BC":"KM","AD":"BM"},"short":{"BC":"KM","AD":"BM"},"long":{"BC":"Kabla yakwe Yethu","AD":"Baada yakwe Yethu"}},"month":{"narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"short":["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Dec"],"long":["Januari","Februari","Machi","Aprili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba"]},"timeZoneName":{"UTC":{"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","formats":{"gregory":["h B","h:mm B","h:mm:ss B","d","ccc","E h:mm B","E h:mm:ss B","d, E","E h:mm a","E HH:mm","E h:mm:ss a","E HH:mm:ss","G y","G y MMM","G y MMM d","G y MMM d, E","h a","HH","h:mm a","HH:mm","h:mm:ss a","HH:mm:ss","h:mm:ss a v","HH:mm:ss v","h:mm a v","HH:mm v","L","M/d","E, M/d","LLL","MMM d","E, MMM d","MMMM d","E, MMMM d","'week' W 'of' MMMM","mm:ss","y","M/y","d/M/y","E, M/d/y","MMM y","d MMM y","E, MMM d, y","MMMM y","QQQ y","QQQQ y","'week' w 'of' Y","EEEE, d MMMM y","d MMMM y","d MMM y","dd/MM/y","HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm","EEEE, d MMMM y HH:mm:ss zzzz","d MMMM y HH:mm:ss zzzz","d MMM y HH:mm:ss zzzz","dd/MM/y HH:mm:ss zzzz","d HH:mm:ss zzzz","ccc HH:mm:ss zzzz","d, E HH:mm:ss zzzz","G y HH:mm:ss zzzz","G y MMM HH:mm:ss zzzz","G y MMM d HH:mm:ss zzzz","G y MMM d, E HH:mm:ss zzzz","L HH:mm:ss zzzz","M/d HH:mm:ss zzzz","E, M/d HH:mm:ss zzzz","LLL HH:mm:ss zzzz","MMM d HH:mm:ss zzzz","E, MMM d HH:mm:ss zzzz","MMMM d HH:mm:ss zzzz","E, MMMM d HH:mm:ss zzzz","'week' W 'of' MMMM HH:mm:ss zzzz","y HH:mm:ss zzzz","M/y HH:mm:ss zzzz","d/M/y HH:mm:ss zzzz","E, M/d/y HH:mm:ss zzzz","MMM y HH:mm:ss zzzz","d MMM y HH:mm:ss zzzz","E, MMM d, y HH:mm:ss zzzz","MMMM y HH:mm:ss zzzz","QQQ y HH:mm:ss zzzz","QQQQ y HH:mm:ss zzzz","'week' w 'of' Y HH:mm:ss zzzz","EEEE, d MMMM y HH:mm:ss z","d MMMM y HH:mm:ss z","d MMM y HH:mm:ss z","dd/MM/y HH:mm:ss z","d HH:mm:ss z","ccc HH:mm:ss z","d, E HH:mm:ss z","G y HH:mm:ss z","G y MMM HH:mm:ss z","G y MMM d HH:mm:ss z","G y MMM d, E HH:mm:ss z","L HH:mm:ss z","M/d HH:mm:ss z","E, M/d HH:mm:ss z","LLL HH:mm:ss z","MMM d HH:mm:ss z","E, MMM d HH:mm:ss z","MMMM d HH:mm:ss z","E, MMMM d HH:mm:ss z","'week' W 'of' MMMM HH:mm:ss z","y HH:mm:ss z","M/y HH:mm:ss z","d/M/y HH:mm:ss z","E, M/d/y HH:mm:ss z","MMM y HH:mm:ss z","d MMM y HH:mm:ss z","E, MMM d, y HH:mm:ss z","MMMM y HH:mm:ss z","QQQ y HH:mm:ss z","QQQQ y HH:mm:ss z","'week' w 'of' Y HH:mm:ss z","EEEE, d MMMM y HH:mm:ss","d MMMM y HH:mm:ss","d MMM y HH:mm:ss","dd/MM/y HH:mm:ss","d HH:mm:ss","ccc HH:mm:ss","d, E HH:mm:ss","G y HH:mm:ss","G y MMM HH:mm:ss","G y MMM d HH:mm:ss","G y MMM d, E HH:mm:ss","L HH:mm:ss","M/d HH:mm:ss","E, M/d HH:mm:ss","LLL HH:mm:ss","MMM d HH:mm:ss","E, MMM d HH:mm:ss","MMMM d HH:mm:ss","E, MMMM d HH:mm:ss","'week' W 'of' MMMM HH:mm:ss","y HH:mm:ss","M/y HH:mm:ss","d/M/y HH:mm:ss","E, M/d/y HH:mm:ss","MMM y HH:mm:ss","d MMM y HH:mm:ss","E, MMM d, y HH:mm:ss","MMMM y HH:mm:ss","QQQ y HH:mm:ss","QQQQ y HH:mm:ss","'week' w 'of' Y HH:mm:ss","EEEE, d MMMM y HH:mm","d MMMM y HH:mm","d MMM y HH:mm","dd/MM/y HH:mm","d HH:mm","ccc HH:mm","d, E HH:mm","G y HH:mm","G y MMM HH:mm","G y MMM d HH:mm","G y MMM d, E HH:mm","L HH:mm","M/d HH:mm","E, M/d HH:mm","LLL HH:mm","MMM d HH:mm","E, MMM d HH:mm","MMMM d HH:mm","E, MMMM d HH:mm","'week' W 'of' MMMM HH:mm","y HH:mm","M/y HH:mm","d/M/y HH:mm","E, M/d/y HH:mm","MMM y HH:mm","d MMM y HH:mm","E, MMM d, y HH:mm","MMMM y HH:mm","QQQ y HH:mm","QQQQ y HH:mm","'week' w 'of' Y HH:mm","EEEE, d MMMM y h B","d MMMM y h B","d MMM y h B","dd/MM/y h B","d h B","ccc h B","d, E h B","G y h B","G y MMM h B","G y MMM d h B","G y MMM d, E h B","L h B","M/d h B","E, M/d h B","LLL h B","MMM d h B","E, MMM d h B","MMMM d h B","E, MMMM d h B","'week' W 'of' MMMM h B","y h B","M/y h B","d/M/y h B","E, M/d/y h B","MMM y h B","d MMM y h B","E, MMM d, y h B","MMMM y h B","QQQ y h B","QQQQ y h B","'week' w 'of' Y h B","EEEE, d MMMM y h:mm B","d MMMM y h:mm B","d MMM y h:mm B","dd/MM/y h:mm B","d h:mm B","ccc h:mm B","d, E h:mm B","G y h:mm B","G y MMM h:mm B","G y MMM d h:mm B","G y MMM d, E h:mm B","L h:mm B","M/d h:mm B","E, M/d h:mm B","LLL h:mm B","MMM d h:mm B","E, MMM d h:mm B","MMMM d h:mm B","E, MMMM d h:mm B","'week' W 'of' MMMM h:mm B","y h:mm B","M/y h:mm B","d/M/y h:mm B","E, M/d/y h:mm B","MMM y h:mm B","d MMM y h:mm B","E, MMM d, y h:mm B","MMMM y h:mm B","QQQ y h:mm B","QQQQ y h:mm B","'week' w 'of' Y h:mm B","EEEE, d MMMM y h:mm:ss B","d MMMM y h:mm:ss B","d MMM y h:mm:ss B","dd/MM/y h:mm:ss B","d h:mm:ss B","ccc h:mm:ss B","d, E h:mm:ss B","G y h:mm:ss B","G y MMM h:mm:ss B","G y MMM d h:mm:ss B","G y MMM d, E h:mm:ss B","L h:mm:ss B","M/d h:mm:ss B","E, M/d h:mm:ss B","LLL h:mm:ss B","MMM d h:mm:ss B","E, MMM d h:mm:ss B","MMMM d h:mm:ss B","E, MMMM d h:mm:ss B","'week' W 'of' MMMM h:mm:ss B","y h:mm:ss B","M/y h:mm:ss B","d/M/y h:mm:ss B","E, M/d/y h:mm:ss B","MMM y h:mm:ss B","d MMM y h:mm:ss B","E, MMM d, y h:mm:ss B","MMMM y h:mm:ss B","QQQ y h:mm:ss B","QQQQ y h:mm:ss B","'week' w 'of' Y h:mm:ss B","EEEE, d MMMM y h a","d MMMM y h a","d MMM y h a","dd/MM/y h a","d h a","ccc h a","d, E h a","G y h a","G y MMM h a","G y MMM d h a","G y MMM d, E h a","L h a","M/d h a","E, M/d h a","LLL h a","MMM d h a","E, MMM d h a","MMMM d h a","E, MMMM d h a","'week' W 'of' MMMM h a","y h a","M/y h a","d/M/y h a","E, M/d/y h a","MMM y h a","d MMM y h a","E, MMM d, y h a","MMMM y h a","QQQ y h a","QQQQ y h a","'week' w 'of' Y h a","EEEE, d MMMM y HH","d MMMM y HH","d MMM y HH","dd/MM/y HH","d HH","ccc HH","d, E HH","G y HH","G y MMM HH","G y MMM d HH","G y MMM d, E HH","L HH","M/d HH","E, M/d HH","LLL HH","MMM d HH","E, MMM d HH","MMMM d HH","E, MMMM d HH","'week' W 'of' MMMM HH","y HH","M/y HH","d/M/y HH","E, M/d/y HH","MMM y HH","d MMM y HH","E, MMM d, y HH","MMMM y HH","QQQ y HH","QQQQ y HH","'week' w 'of' Y HH","EEEE, d MMMM y h:mm a","d MMMM y h:mm a","d MMM y h:mm a","dd/MM/y h:mm a","d h:mm a","ccc h:mm a","d, E h:mm a","G y h:mm a","G y MMM h:mm a","G y MMM d h:mm a","G y MMM d, E h:mm a","L h:mm a","M/d h:mm a","E, M/d h:mm a","LLL h:mm a","MMM d h:mm a","E, MMM d h:mm a","MMMM d h:mm a","E, MMMM d h:mm a","'week' W 'of' MMMM h:mm a","y h:mm a","M/y h:mm a","d/M/y h:mm a","E, M/d/y h:mm a","MMM y h:mm a","d MMM y h:mm a","E, MMM d, y h:mm a","MMMM y h:mm a","QQQ y h:mm a","QQQQ y h:mm a","'week' w 'of' Y h:mm a","EEEE, d MMMM y HH:mm","d MMMM y HH:mm","d MMM y HH:mm","dd/MM/y HH:mm","d HH:mm","ccc HH:mm","d, E HH:mm","G y HH:mm","G y MMM HH:mm","G y MMM d HH:mm","G y MMM d, E HH:mm","L HH:mm","M/d HH:mm","E, M/d HH:mm","LLL HH:mm","MMM d HH:mm","E, MMM d HH:mm","MMMM d HH:mm","E, MMMM d HH:mm","'week' W 'of' MMMM HH:mm","y HH:mm","M/y HH:mm","d/M/y HH:mm","E, M/d/y HH:mm","MMM y HH:mm","d MMM y HH:mm","E, MMM d, y HH:mm","MMMM y HH:mm","QQQ y HH:mm","QQQQ y HH:mm","'week' w 'of' Y HH:mm","EEEE, d MMMM y h:mm:ss a","d MMMM y h:mm:ss a","d MMM y h:mm:ss a","dd/MM/y h:mm:ss a","d h:mm:ss a","ccc h:mm:ss a","d, E h:mm:ss a","G y h:mm:ss a","G y MMM h:mm:ss a","G y MMM d h:mm:ss a","G y MMM d, E h:mm:ss a","L h:mm:ss a","M/d h:mm:ss a","E, M/d h:mm:ss a","LLL h:mm:ss a","MMM d h:mm:ss a","E, MMM d h:mm:ss a","MMMM d h:mm:ss a","E, MMMM d h:mm:ss a","'week' W 'of' MMMM h:mm:ss a","y h:mm:ss a","M/y h:mm:ss a","d/M/y h:mm:ss a","E, M/d/y h:mm:ss a","MMM y h:mm:ss a","d MMM y h:mm:ss a","E, MMM d, y h:mm:ss a","MMMM y h:mm:ss a","QQQ y h:mm:ss a","QQQQ y h:mm:ss a","'week' w 'of' Y h:mm:ss a","EEEE, d MMMM y HH:mm:ss","d MMMM y HH:mm:ss","d MMM y HH:mm:ss","dd/MM/y HH:mm:ss","d HH:mm:ss","ccc HH:mm:ss","d, E HH:mm:ss","G y HH:mm:ss","G y MMM HH:mm:ss","G y MMM d HH:mm:ss","G y MMM d, E HH:mm:ss","L HH:mm:ss","M/d HH:mm:ss","E, M/d HH:mm:ss","LLL HH:mm:ss","MMM d HH:mm:ss","E, MMM d HH:mm:ss","MMMM d HH:mm:ss","E, MMMM d HH:mm:ss","'week' W 'of' MMMM HH:mm:ss","y HH:mm:ss","M/y HH:mm:ss","d/M/y HH:mm:ss","E, M/d/y HH:mm:ss","MMM y HH:mm:ss","d MMM y HH:mm:ss","E, MMM d, y HH:mm:ss","MMMM y HH:mm:ss","QQQ y HH:mm:ss","QQQQ y HH:mm:ss","'week' w 'of' Y HH:mm:ss","EEEE, d MMMM y h:mm:ss a v","d MMMM y h:mm:ss a v","d MMM y h:mm:ss a v","dd/MM/y h:mm:ss a v","d h:mm:ss a v","ccc h:mm:ss a v","d, E h:mm:ss a v","G y h:mm:ss a v","G y MMM h:mm:ss a v","G y MMM d h:mm:ss a v","G y MMM d, E h:mm:ss a v","L h:mm:ss a v","M/d h:mm:ss a v","E, M/d h:mm:ss a v","LLL h:mm:ss a v","MMM d h:mm:ss a v","E, MMM d h:mm:ss a v","MMMM d h:mm:ss a v","E, MMMM d h:mm:ss a v","'week' W 'of' MMMM h:mm:ss a v","y h:mm:ss a v","M/y h:mm:ss a v","d/M/y h:mm:ss a v","E, M/d/y h:mm:ss a v","MMM y h:mm:ss a v","d MMM y h:mm:ss a v","E, MMM d, y h:mm:ss a v","MMMM y h:mm:ss a v","QQQ y h:mm:ss a v","QQQQ y h:mm:ss a v","'week' w 'of' Y h:mm:ss a v","EEEE, d MMMM y HH:mm:ss v","d MMMM y HH:mm:ss v","d MMM y HH:mm:ss v","dd/MM/y HH:mm:ss v","d HH:mm:ss v","ccc HH:mm:ss v","d, E HH:mm:ss v","G y HH:mm:ss v","G y MMM HH:mm:ss v","G y MMM d HH:mm:ss v","G y MMM d, E HH:mm:ss v","L HH:mm:ss v","M/d HH:mm:ss v","E, M/d HH:mm:ss v","LLL HH:mm:ss v","MMM d HH:mm:ss v","E, MMM d HH:mm:ss v","MMMM d HH:mm:ss v","E, MMMM d HH:mm:ss v","'week' W 'of' MMMM HH:mm:ss v","y HH:mm:ss v","M/y HH:mm:ss v","d/M/y HH:mm:ss v","E, M/d/y HH:mm:ss v","MMM y HH:mm:ss v","d MMM y HH:mm:ss v","E, MMM d, y HH:mm:ss v","MMMM y HH:mm:ss v","QQQ y HH:mm:ss v","QQQQ y HH:mm:ss v","'week' w 'of' Y HH:mm:ss v","EEEE, d MMMM y h:mm a v","d MMMM y h:mm a v","d MMM y h:mm a v","dd/MM/y h:mm a v","d h:mm a v","ccc h:mm a v","d, E h:mm a v","G y h:mm a v","G y MMM h:mm a v","G y MMM d h:mm a v","G y MMM d, E h:mm a v","L h:mm a v","M/d h:mm a v","E, M/d h:mm a v","LLL h:mm a v","MMM d h:mm a v","E, MMM d h:mm a v","MMMM d h:mm a v","E, MMMM d h:mm a v","'week' W 'of' MMMM h:mm a v","y h:mm a v","M/y h:mm a v","d/M/y h:mm a v","E, M/d/y h:mm a v","MMM y h:mm a v","d MMM y h:mm a v","E, MMM d, y h:mm a v","MMMM y h:mm a v","QQQ y h:mm a v","QQQQ y h:mm a v","'week' w 'of' Y h:mm a v","EEEE, d MMMM y HH:mm v","d MMMM y HH:mm v","d MMM y HH:mm v","dd/MM/y HH:mm v","d HH:mm v","ccc HH:mm v","d, E HH:mm v","G y HH:mm v","G y MMM HH:mm v","G y MMM d HH:mm v","G y MMM d, E HH:mm v","L HH:mm v","M/d HH:mm v","E, M/d HH:mm v","LLL HH:mm v","MMM d HH:mm v","E, MMM d HH:mm v","MMMM d HH:mm v","E, MMMM d HH:mm v","'week' W 'of' MMMM HH:mm v","y HH:mm v","M/y HH:mm v","d/M/y HH:mm v","E, M/d/y HH:mm v","MMM y HH:mm v","d MMM y HH:mm v","E, MMM d, y HH:mm v","MMMM y HH:mm v","QQQ y HH:mm v","QQQQ y HH:mm v","'week' w 'of' Y HH:mm v","EEEE, d MMMM y mm:ss","d MMMM y mm:ss","d MMM y mm:ss","dd/MM/y mm:ss","d mm:ss","ccc mm:ss","d, E mm:ss","G y mm:ss","G y MMM mm:ss","G y MMM d mm:ss","G y MMM d, E mm:ss","L mm:ss","M/d mm:ss","E, M/d mm:ss","LLL mm:ss","MMM d mm:ss","E, MMM d mm:ss","MMMM d mm:ss","E, MMMM d mm:ss","'week' W 'of' MMMM mm:ss","y mm:ss","M/y mm:ss","d/M/y mm:ss","E, M/d/y mm:ss","MMM y mm:ss","d MMM y mm:ss","E, MMM d, y mm:ss","MMMM y mm:ss","QQQ y mm:ss","QQQQ y mm:ss","'week' w 'of' Y mm:ss"]},"hourCycle":"","nu":["latn"],"ca":["gregory"],"hc":["","","h23","h12"]}},"availableLocales":["asa"]})
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
