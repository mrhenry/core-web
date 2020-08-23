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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("kkj").length
)) {
// Intl.DateTimeFormat.~locale.kkj
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"kkj":{"am":"AM","pm":"PM","weekday":{"narrow":["so","lu","ma","mɛ","ye","va","ms"],"short":["sɔndi","lundi","mardi","mɛrkɛrɛdi","yedi","vaŋdɛrɛdi","mɔnɔ sɔndi"],"long":["sɔndi","lundi","mardi","mɛrkɛrɛdi","yedi","vaŋdɛrɛdi","mɔnɔ sɔndi"]},"era":{"narrow":{"BC":"BCE","AD":"CE"},"short":{"BC":"BCE","AD":"CE"},"long":{"BC":"BCE","AD":"CE"}},"month":{"narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"short":["pamba","wanja","mbiyɔ mɛndoŋgɔ","Nyɔlɔmbɔŋgɔ","Mɔnɔ ŋgbanja","Nyaŋgwɛ ŋgbanja","kuŋgwɛ","fɛ","njapi","nyukul","11","ɓulɓusɛ"],"long":["pamba","wanja","mbiyɔ mɛndoŋgɔ","Nyɔlɔmbɔŋgɔ","Mɔnɔ ŋgbanja","Nyaŋgwɛ ŋgbanja","kuŋgwɛ","fɛ","njapi","nyukul","11","ɓulɓusɛ"]},"timeZoneName":{"UTC":{"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","formats":{"gregory":["h B","h:mm B","h:mm:ss B","d","ccc","E h:mm B","E h:mm:ss B","E d","E h:mm a","E HH:mm","E h:mm:ss a","E HH:mm:ss","y G","MMM y G","d MMM y G","E d MMM y G","h a","HH","h:mm a","HH:mm","h:mm:ss a","HH:mm:ss","h:mm:ss a v","HH:mm:ss v","h:mm a v","HH:mm v","L","dd/MM","E dd/MM","LLL","d MMM","E d MMM","MMMM d","'week' W 'of' MMMM","mm:ss","y","MM y","dd/MM y","E dd/MM y","MMM y","d MMM y","E d MMM y","y MMMM","y QQQ","y QQQQ","'week' w 'of' Y","EEEE dd MMMM y","d MMMM y","d MMM y","dd/MM y","HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm","EEEE dd MMMM y HH:mm:ss zzzz","d MMMM y HH:mm:ss zzzz","d MMM y HH:mm:ss zzzz","dd/MM y HH:mm:ss zzzz","d HH:mm:ss zzzz","ccc HH:mm:ss zzzz","E d HH:mm:ss zzzz","y G HH:mm:ss zzzz","MMM y G HH:mm:ss zzzz","d MMM y G HH:mm:ss zzzz","E d MMM y G HH:mm:ss zzzz","L HH:mm:ss zzzz","dd/MM HH:mm:ss zzzz","E dd/MM HH:mm:ss zzzz","LLL HH:mm:ss zzzz","d MMM HH:mm:ss zzzz","E d MMM HH:mm:ss zzzz","MMMM d HH:mm:ss zzzz","'week' W 'of' MMMM HH:mm:ss zzzz","y HH:mm:ss zzzz","MM y HH:mm:ss zzzz","dd/MM y HH:mm:ss zzzz","E dd/MM y HH:mm:ss zzzz","MMM y HH:mm:ss zzzz","d MMM y HH:mm:ss zzzz","E d MMM y HH:mm:ss zzzz","y MMMM HH:mm:ss zzzz","y QQQ HH:mm:ss zzzz","y QQQQ HH:mm:ss zzzz","'week' w 'of' Y HH:mm:ss zzzz","EEEE dd MMMM y HH:mm:ss z","d MMMM y HH:mm:ss z","d MMM y HH:mm:ss z","dd/MM y HH:mm:ss z","d HH:mm:ss z","ccc HH:mm:ss z","E d HH:mm:ss z","y G HH:mm:ss z","MMM y G HH:mm:ss z","d MMM y G HH:mm:ss z","E d MMM y G HH:mm:ss z","L HH:mm:ss z","dd/MM HH:mm:ss z","E dd/MM HH:mm:ss z","LLL HH:mm:ss z","d MMM HH:mm:ss z","E d MMM HH:mm:ss z","MMMM d HH:mm:ss z","'week' W 'of' MMMM HH:mm:ss z","y HH:mm:ss z","MM y HH:mm:ss z","dd/MM y HH:mm:ss z","E dd/MM y HH:mm:ss z","MMM y HH:mm:ss z","d MMM y HH:mm:ss z","E d MMM y HH:mm:ss z","y MMMM HH:mm:ss z","y QQQ HH:mm:ss z","y QQQQ HH:mm:ss z","'week' w 'of' Y HH:mm:ss z","EEEE dd MMMM y HH:mm:ss","d MMMM y HH:mm:ss","d MMM y HH:mm:ss","dd/MM y HH:mm:ss","d HH:mm:ss","ccc HH:mm:ss","E d HH:mm:ss","y G HH:mm:ss","MMM y G HH:mm:ss","d MMM y G HH:mm:ss","E d MMM y G HH:mm:ss","L HH:mm:ss","dd/MM HH:mm:ss","E dd/MM HH:mm:ss","LLL HH:mm:ss","d MMM HH:mm:ss","E d MMM HH:mm:ss","MMMM d HH:mm:ss","'week' W 'of' MMMM HH:mm:ss","y HH:mm:ss","MM y HH:mm:ss","dd/MM y HH:mm:ss","E dd/MM y HH:mm:ss","MMM y HH:mm:ss","d MMM y HH:mm:ss","E d MMM y HH:mm:ss","y MMMM HH:mm:ss","y QQQ HH:mm:ss","y QQQQ HH:mm:ss","'week' w 'of' Y HH:mm:ss","EEEE dd MMMM y HH:mm","d MMMM y HH:mm","d MMM y HH:mm","dd/MM y HH:mm","d HH:mm","ccc HH:mm","E d HH:mm","y G HH:mm","MMM y G HH:mm","d MMM y G HH:mm","E d MMM y G HH:mm","L HH:mm","dd/MM HH:mm","E dd/MM HH:mm","LLL HH:mm","d MMM HH:mm","E d MMM HH:mm","MMMM d HH:mm","'week' W 'of' MMMM HH:mm","y HH:mm","MM y HH:mm","dd/MM y HH:mm","E dd/MM y HH:mm","MMM y HH:mm","d MMM y HH:mm","E d MMM y HH:mm","y MMMM HH:mm","y QQQ HH:mm","y QQQQ HH:mm","'week' w 'of' Y HH:mm","EEEE dd MMMM y h B","d MMMM y h B","d MMM y h B","dd/MM y h B","d h B","ccc h B","E d h B","y G h B","MMM y G h B","d MMM y G h B","E d MMM y G h B","L h B","dd/MM h B","E dd/MM h B","LLL h B","d MMM h B","E d MMM h B","MMMM d h B","'week' W 'of' MMMM h B","y h B","MM y h B","dd/MM y h B","E dd/MM y h B","MMM y h B","d MMM y h B","E d MMM y h B","y MMMM h B","y QQQ h B","y QQQQ h B","'week' w 'of' Y h B","EEEE dd MMMM y h:mm B","d MMMM y h:mm B","d MMM y h:mm B","dd/MM y h:mm B","d h:mm B","ccc h:mm B","E d h:mm B","y G h:mm B","MMM y G h:mm B","d MMM y G h:mm B","E d MMM y G h:mm B","L h:mm B","dd/MM h:mm B","E dd/MM h:mm B","LLL h:mm B","d MMM h:mm B","E d MMM h:mm B","MMMM d h:mm B","'week' W 'of' MMMM h:mm B","y h:mm B","MM y h:mm B","dd/MM y h:mm B","E dd/MM y h:mm B","MMM y h:mm B","d MMM y h:mm B","E d MMM y h:mm B","y MMMM h:mm B","y QQQ h:mm B","y QQQQ h:mm B","'week' w 'of' Y h:mm B","EEEE dd MMMM y h:mm:ss B","d MMMM y h:mm:ss B","d MMM y h:mm:ss B","dd/MM y h:mm:ss B","d h:mm:ss B","ccc h:mm:ss B","E d h:mm:ss B","y G h:mm:ss B","MMM y G h:mm:ss B","d MMM y G h:mm:ss B","E d MMM y G h:mm:ss B","L h:mm:ss B","dd/MM h:mm:ss B","E dd/MM h:mm:ss B","LLL h:mm:ss B","d MMM h:mm:ss B","E d MMM h:mm:ss B","MMMM d h:mm:ss B","'week' W 'of' MMMM h:mm:ss B","y h:mm:ss B","MM y h:mm:ss B","dd/MM y h:mm:ss B","E dd/MM y h:mm:ss B","MMM y h:mm:ss B","d MMM y h:mm:ss B","E d MMM y h:mm:ss B","y MMMM h:mm:ss B","y QQQ h:mm:ss B","y QQQQ h:mm:ss B","'week' w 'of' Y h:mm:ss B","EEEE dd MMMM y h a","d MMMM y h a","d MMM y h a","dd/MM y h a","d h a","ccc h a","E d h a","y G h a","MMM y G h a","d MMM y G h a","E d MMM y G h a","L h a","dd/MM h a","E dd/MM h a","LLL h a","d MMM h a","E d MMM h a","MMMM d h a","'week' W 'of' MMMM h a","y h a","MM y h a","dd/MM y h a","E dd/MM y h a","MMM y h a","d MMM y h a","E d MMM y h a","y MMMM h a","y QQQ h a","y QQQQ h a","'week' w 'of' Y h a","EEEE dd MMMM y HH","d MMMM y HH","d MMM y HH","dd/MM y HH","d HH","ccc HH","E d HH","y G HH","MMM y G HH","d MMM y G HH","E d MMM y G HH","L HH","dd/MM HH","E dd/MM HH","LLL HH","d MMM HH","E d MMM HH","MMMM d HH","'week' W 'of' MMMM HH","y HH","MM y HH","dd/MM y HH","E dd/MM y HH","MMM y HH","d MMM y HH","E d MMM y HH","y MMMM HH","y QQQ HH","y QQQQ HH","'week' w 'of' Y HH","EEEE dd MMMM y h:mm a","d MMMM y h:mm a","d MMM y h:mm a","dd/MM y h:mm a","d h:mm a","ccc h:mm a","E d h:mm a","y G h:mm a","MMM y G h:mm a","d MMM y G h:mm a","E d MMM y G h:mm a","L h:mm a","dd/MM h:mm a","E dd/MM h:mm a","LLL h:mm a","d MMM h:mm a","E d MMM h:mm a","MMMM d h:mm a","'week' W 'of' MMMM h:mm a","y h:mm a","MM y h:mm a","dd/MM y h:mm a","E dd/MM y h:mm a","MMM y h:mm a","d MMM y h:mm a","E d MMM y h:mm a","y MMMM h:mm a","y QQQ h:mm a","y QQQQ h:mm a","'week' w 'of' Y h:mm a","EEEE dd MMMM y HH:mm","d MMMM y HH:mm","d MMM y HH:mm","dd/MM y HH:mm","d HH:mm","ccc HH:mm","E d HH:mm","y G HH:mm","MMM y G HH:mm","d MMM y G HH:mm","E d MMM y G HH:mm","L HH:mm","dd/MM HH:mm","E dd/MM HH:mm","LLL HH:mm","d MMM HH:mm","E d MMM HH:mm","MMMM d HH:mm","'week' W 'of' MMMM HH:mm","y HH:mm","MM y HH:mm","dd/MM y HH:mm","E dd/MM y HH:mm","MMM y HH:mm","d MMM y HH:mm","E d MMM y HH:mm","y MMMM HH:mm","y QQQ HH:mm","y QQQQ HH:mm","'week' w 'of' Y HH:mm","EEEE dd MMMM y h:mm:ss a","d MMMM y h:mm:ss a","d MMM y h:mm:ss a","dd/MM y h:mm:ss a","d h:mm:ss a","ccc h:mm:ss a","E d h:mm:ss a","y G h:mm:ss a","MMM y G h:mm:ss a","d MMM y G h:mm:ss a","E d MMM y G h:mm:ss a","L h:mm:ss a","dd/MM h:mm:ss a","E dd/MM h:mm:ss a","LLL h:mm:ss a","d MMM h:mm:ss a","E d MMM h:mm:ss a","MMMM d h:mm:ss a","'week' W 'of' MMMM h:mm:ss a","y h:mm:ss a","MM y h:mm:ss a","dd/MM y h:mm:ss a","E dd/MM y h:mm:ss a","MMM y h:mm:ss a","d MMM y h:mm:ss a","E d MMM y h:mm:ss a","y MMMM h:mm:ss a","y QQQ h:mm:ss a","y QQQQ h:mm:ss a","'week' w 'of' Y h:mm:ss a","EEEE dd MMMM y HH:mm:ss","d MMMM y HH:mm:ss","d MMM y HH:mm:ss","dd/MM y HH:mm:ss","d HH:mm:ss","ccc HH:mm:ss","E d HH:mm:ss","y G HH:mm:ss","MMM y G HH:mm:ss","d MMM y G HH:mm:ss","E d MMM y G HH:mm:ss","L HH:mm:ss","dd/MM HH:mm:ss","E dd/MM HH:mm:ss","LLL HH:mm:ss","d MMM HH:mm:ss","E d MMM HH:mm:ss","MMMM d HH:mm:ss","'week' W 'of' MMMM HH:mm:ss","y HH:mm:ss","MM y HH:mm:ss","dd/MM y HH:mm:ss","E dd/MM y HH:mm:ss","MMM y HH:mm:ss","d MMM y HH:mm:ss","E d MMM y HH:mm:ss","y MMMM HH:mm:ss","y QQQ HH:mm:ss","y QQQQ HH:mm:ss","'week' w 'of' Y HH:mm:ss","EEEE dd MMMM y h:mm:ss a v","d MMMM y h:mm:ss a v","d MMM y h:mm:ss a v","dd/MM y h:mm:ss a v","d h:mm:ss a v","ccc h:mm:ss a v","E d h:mm:ss a v","y G h:mm:ss a v","MMM y G h:mm:ss a v","d MMM y G h:mm:ss a v","E d MMM y G h:mm:ss a v","L h:mm:ss a v","dd/MM h:mm:ss a v","E dd/MM h:mm:ss a v","LLL h:mm:ss a v","d MMM h:mm:ss a v","E d MMM h:mm:ss a v","MMMM d h:mm:ss a v","'week' W 'of' MMMM h:mm:ss a v","y h:mm:ss a v","MM y h:mm:ss a v","dd/MM y h:mm:ss a v","E dd/MM y h:mm:ss a v","MMM y h:mm:ss a v","d MMM y h:mm:ss a v","E d MMM y h:mm:ss a v","y MMMM h:mm:ss a v","y QQQ h:mm:ss a v","y QQQQ h:mm:ss a v","'week' w 'of' Y h:mm:ss a v","EEEE dd MMMM y HH:mm:ss v","d MMMM y HH:mm:ss v","d MMM y HH:mm:ss v","dd/MM y HH:mm:ss v","d HH:mm:ss v","ccc HH:mm:ss v","E d HH:mm:ss v","y G HH:mm:ss v","MMM y G HH:mm:ss v","d MMM y G HH:mm:ss v","E d MMM y G HH:mm:ss v","L HH:mm:ss v","dd/MM HH:mm:ss v","E dd/MM HH:mm:ss v","LLL HH:mm:ss v","d MMM HH:mm:ss v","E d MMM HH:mm:ss v","MMMM d HH:mm:ss v","'week' W 'of' MMMM HH:mm:ss v","y HH:mm:ss v","MM y HH:mm:ss v","dd/MM y HH:mm:ss v","E dd/MM y HH:mm:ss v","MMM y HH:mm:ss v","d MMM y HH:mm:ss v","E d MMM y HH:mm:ss v","y MMMM HH:mm:ss v","y QQQ HH:mm:ss v","y QQQQ HH:mm:ss v","'week' w 'of' Y HH:mm:ss v","EEEE dd MMMM y h:mm a v","d MMMM y h:mm a v","d MMM y h:mm a v","dd/MM y h:mm a v","d h:mm a v","ccc h:mm a v","E d h:mm a v","y G h:mm a v","MMM y G h:mm a v","d MMM y G h:mm a v","E d MMM y G h:mm a v","L h:mm a v","dd/MM h:mm a v","E dd/MM h:mm a v","LLL h:mm a v","d MMM h:mm a v","E d MMM h:mm a v","MMMM d h:mm a v","'week' W 'of' MMMM h:mm a v","y h:mm a v","MM y h:mm a v","dd/MM y h:mm a v","E dd/MM y h:mm a v","MMM y h:mm a v","d MMM y h:mm a v","E d MMM y h:mm a v","y MMMM h:mm a v","y QQQ h:mm a v","y QQQQ h:mm a v","'week' w 'of' Y h:mm a v","EEEE dd MMMM y HH:mm v","d MMMM y HH:mm v","d MMM y HH:mm v","dd/MM y HH:mm v","d HH:mm v","ccc HH:mm v","E d HH:mm v","y G HH:mm v","MMM y G HH:mm v","d MMM y G HH:mm v","E d MMM y G HH:mm v","L HH:mm v","dd/MM HH:mm v","E dd/MM HH:mm v","LLL HH:mm v","d MMM HH:mm v","E d MMM HH:mm v","MMMM d HH:mm v","'week' W 'of' MMMM HH:mm v","y HH:mm v","MM y HH:mm v","dd/MM y HH:mm v","E dd/MM y HH:mm v","MMM y HH:mm v","d MMM y HH:mm v","E d MMM y HH:mm v","y MMMM HH:mm v","y QQQ HH:mm v","y QQQQ HH:mm v","'week' w 'of' Y HH:mm v","EEEE dd MMMM y mm:ss","d MMMM y mm:ss","d MMM y mm:ss","dd/MM y mm:ss","d mm:ss","ccc mm:ss","E d mm:ss","y G mm:ss","MMM y G mm:ss","d MMM y G mm:ss","E d MMM y G mm:ss","L mm:ss","dd/MM mm:ss","E dd/MM mm:ss","LLL mm:ss","d MMM mm:ss","E d MMM mm:ss","MMMM d mm:ss","'week' W 'of' MMMM mm:ss","y mm:ss","MM y mm:ss","dd/MM y mm:ss","E dd/MM y mm:ss","MMM y mm:ss","d MMM y mm:ss","E d MMM y mm:ss","y MMMM mm:ss","y QQQ mm:ss","y QQQQ mm:ss","'week' w 'of' Y mm:ss"]},"hourCycle":"h23","nu":["latn"],"ca":["gregory"],"hc":["h23","h12",""]}},"availableLocales":["kkj"]})
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
