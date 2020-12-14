import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("ff-Latn-NG").length
)) {
// Intl.DateTimeFormat.~locale.ff-Latn-NG
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"am":"subaka","pm":"kikiiɗe","weekday":{"narrow":["d","a","m","n","n","m","h"],"short":["dew","aaɓ","maw","nje","naa","mwd","hbi"],"long":["dewo","aaɓnde","mawbaare","njeslaare","naasaande","mawnde","hoore-biir"]},"era":{"narrow":{"BC":"H-I","AD":"C-I"},"short":{"BC":"H-I","AD":"C-I"},"long":{"BC":"Hade Iisa","AD":"Caggal Iisa"}},"month":{"narrow":["s","c","m","s","d","k","m","j","s","y","j","b"],"short":["sii","col","mbo","see","duu","kor","mor","juk","slt","yar","jol","bow"],"long":["siilo","colte","mbooy","seeɗto","duujal","korse","morso","juko","siilto","yarkomaa","jolal","bowte"]},"timeZoneName":{"UTC":{"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"EEEE d MMMM y","long":"d MMMM y","medium":"d MMM, y","short":"d/M/y"},"timeFormat":{"full":"HH:mm:ss zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"dateTimeFormat":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"d, E","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"G y","GyMMM":"G y MMM","GyMMMd":"G y MMM d","GyMMMEd":"G y MMM d, E","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"M","Md":"d/M","MEd":"MM-dd, E","MMd":"d/MM","MMdd":"dd/MM","MMM":"MMM","MMMd":"d MMM","MMMEd":"E d MMM","MMMMd":"d MMMM","MMMMEd":"E d MMMM","ms":"m:ss","y":"y","yM":"M/y","yMd":"y-MM-dd","yMEd":"E d/M/y","yMM":"MM/y","yMMM":"MMM y","yMMMd":"d MMM y","yMMMEd":"E d MMM y","yMMMM":"MMMM y","EEEE d MMMM y":"EEEE d MMMM y","d MMMM y":"d MMMM y","d MMM, y":"d MMM, y","d/M/y":"d/M/y","HH:mm:ss zzzz":"HH:mm:ss zzzz","HH:mm:ss z":"HH:mm:ss z","HH:mm:ss":"HH:mm:ss","HH:mm":"HH:mm","EEEE d MMMM y HH:mm:ss zzzz":"EEEE d MMMM y HH:mm:ss zzzz","d MMMM y HH:mm:ss zzzz":"d MMMM y HH:mm:ss zzzz","d MMM, y HH:mm:ss zzzz":"d MMM, y HH:mm:ss zzzz","d/M/y HH:mm:ss zzzz":"d/M/y HH:mm:ss zzzz","d HH:mm:ss zzzz":"d HH:mm:ss zzzz","E HH:mm:ss zzzz":"ccc HH:mm:ss zzzz","Ed HH:mm:ss zzzz":"d, E HH:mm:ss zzzz","Gy HH:mm:ss zzzz":"G y HH:mm:ss zzzz","GyMMM HH:mm:ss zzzz":"G y MMM HH:mm:ss zzzz","GyMMMd HH:mm:ss zzzz":"G y MMM d HH:mm:ss zzzz","GyMMMEd HH:mm:ss zzzz":"G y MMM d, E HH:mm:ss zzzz","M HH:mm:ss zzzz":"M HH:mm:ss zzzz","Md HH:mm:ss zzzz":"d/M HH:mm:ss zzzz","MEd HH:mm:ss zzzz":"MM-dd, E HH:mm:ss zzzz","MMd HH:mm:ss zzzz":"d/MM HH:mm:ss zzzz","MMdd HH:mm:ss zzzz":"dd/MM HH:mm:ss zzzz","MMM HH:mm:ss zzzz":"MMM HH:mm:ss zzzz","MMMd HH:mm:ss zzzz":"d MMM HH:mm:ss zzzz","MMMEd HH:mm:ss zzzz":"E d MMM HH:mm:ss zzzz","MMMMd HH:mm:ss zzzz":"d MMMM HH:mm:ss zzzz","MMMMEd HH:mm:ss zzzz":"E d MMMM HH:mm:ss zzzz","y HH:mm:ss zzzz":"y HH:mm:ss zzzz","yM HH:mm:ss zzzz":"M/y HH:mm:ss zzzz","yMd HH:mm:ss zzzz":"y-MM-dd HH:mm:ss zzzz","yMEd HH:mm:ss zzzz":"E d/M/y HH:mm:ss zzzz","yMM HH:mm:ss zzzz":"MM/y HH:mm:ss zzzz","yMMM HH:mm:ss zzzz":"MMM y HH:mm:ss zzzz","yMMMd HH:mm:ss zzzz":"d MMM y HH:mm:ss zzzz","yMMMEd HH:mm:ss zzzz":"E d MMM y HH:mm:ss zzzz","yMMMM HH:mm:ss zzzz":"MMMM y HH:mm:ss zzzz","EEEE d MMMM y HH:mm:ss z":"EEEE d MMMM y HH:mm:ss z","d MMMM y HH:mm:ss z":"d MMMM y HH:mm:ss z","d MMM, y HH:mm:ss z":"d MMM, y HH:mm:ss z","d/M/y HH:mm:ss z":"d/M/y HH:mm:ss z","d HH:mm:ss z":"d HH:mm:ss z","E HH:mm:ss z":"ccc HH:mm:ss z","Ed HH:mm:ss z":"d, E HH:mm:ss z","Gy HH:mm:ss z":"G y HH:mm:ss z","GyMMM HH:mm:ss z":"G y MMM HH:mm:ss z","GyMMMd HH:mm:ss z":"G y MMM d HH:mm:ss z","GyMMMEd HH:mm:ss z":"G y MMM d, E HH:mm:ss z","M HH:mm:ss z":"M HH:mm:ss z","Md HH:mm:ss z":"d/M HH:mm:ss z","MEd HH:mm:ss z":"MM-dd, E HH:mm:ss z","MMd HH:mm:ss z":"d/MM HH:mm:ss z","MMdd HH:mm:ss z":"dd/MM HH:mm:ss z","MMM HH:mm:ss z":"MMM HH:mm:ss z","MMMd HH:mm:ss z":"d MMM HH:mm:ss z","MMMEd HH:mm:ss z":"E d MMM HH:mm:ss z","MMMMd HH:mm:ss z":"d MMMM HH:mm:ss z","MMMMEd HH:mm:ss z":"E d MMMM HH:mm:ss z","y HH:mm:ss z":"y HH:mm:ss z","yM HH:mm:ss z":"M/y HH:mm:ss z","yMd HH:mm:ss z":"y-MM-dd HH:mm:ss z","yMEd HH:mm:ss z":"E d/M/y HH:mm:ss z","yMM HH:mm:ss z":"MM/y HH:mm:ss z","yMMM HH:mm:ss z":"MMM y HH:mm:ss z","yMMMd HH:mm:ss z":"d MMM y HH:mm:ss z","yMMMEd HH:mm:ss z":"E d MMM y HH:mm:ss z","yMMMM HH:mm:ss z":"MMMM y HH:mm:ss z","EEEE d MMMM y HH:mm:ss":"EEEE d MMMM y HH:mm:ss","d MMMM y HH:mm:ss":"d MMMM y HH:mm:ss","d MMM, y HH:mm:ss":"d MMM, y HH:mm:ss","d/M/y HH:mm:ss":"d/M/y HH:mm:ss","d HH:mm:ss":"d HH:mm:ss","E HH:mm:ss":"ccc HH:mm:ss","Ed HH:mm:ss":"d, E HH:mm:ss","Gy HH:mm:ss":"G y HH:mm:ss","GyMMM HH:mm:ss":"G y MMM HH:mm:ss","GyMMMd HH:mm:ss":"G y MMM d HH:mm:ss","GyMMMEd HH:mm:ss":"G y MMM d, E HH:mm:ss","M HH:mm:ss":"M HH:mm:ss","Md HH:mm:ss":"d/M HH:mm:ss","MEd HH:mm:ss":"MM-dd, E HH:mm:ss","MMd HH:mm:ss":"d/MM HH:mm:ss","MMdd HH:mm:ss":"dd/MM HH:mm:ss","MMM HH:mm:ss":"MMM HH:mm:ss","MMMd HH:mm:ss":"d MMM HH:mm:ss","MMMEd HH:mm:ss":"E d MMM HH:mm:ss","MMMMd HH:mm:ss":"d MMMM HH:mm:ss","MMMMEd HH:mm:ss":"E d MMMM HH:mm:ss","y HH:mm:ss":"y HH:mm:ss","yM HH:mm:ss":"M/y HH:mm:ss","yMd HH:mm:ss":"y-MM-dd HH:mm:ss","yMEd HH:mm:ss":"E d/M/y HH:mm:ss","yMM HH:mm:ss":"MM/y HH:mm:ss","yMMM HH:mm:ss":"MMM y HH:mm:ss","yMMMd HH:mm:ss":"d MMM y HH:mm:ss","yMMMEd HH:mm:ss":"E d MMM y HH:mm:ss","yMMMM HH:mm:ss":"MMMM y HH:mm:ss","EEEE d MMMM y HH:mm":"EEEE d MMMM y HH:mm","d MMMM y HH:mm":"d MMMM y HH:mm","d MMM, y HH:mm":"d MMM, y HH:mm","d/M/y HH:mm":"d/M/y HH:mm","d HH:mm":"d HH:mm","E HH:mm":"ccc HH:mm","Ed HH:mm":"d, E HH:mm","Gy HH:mm":"G y HH:mm","GyMMM HH:mm":"G y MMM HH:mm","GyMMMd HH:mm":"G y MMM d HH:mm","GyMMMEd HH:mm":"G y MMM d, E HH:mm","M HH:mm":"M HH:mm","Md HH:mm":"d/M HH:mm","MEd HH:mm":"MM-dd, E HH:mm","MMd HH:mm":"d/MM HH:mm","MMdd HH:mm":"dd/MM HH:mm","MMM HH:mm":"MMM HH:mm","MMMd HH:mm":"d MMM HH:mm","MMMEd HH:mm":"E d MMM HH:mm","MMMMd HH:mm":"d MMMM HH:mm","MMMMEd HH:mm":"E d MMMM HH:mm","y HH:mm":"y HH:mm","yM HH:mm":"M/y HH:mm","yMd HH:mm":"y-MM-dd HH:mm","yMEd HH:mm":"E d/M/y HH:mm","yMM HH:mm":"MM/y HH:mm","yMMM HH:mm":"MMM y HH:mm","yMMMd HH:mm":"d MMM y HH:mm","yMMMEd HH:mm":"E d MMM y HH:mm","yMMMM HH:mm":"MMMM y HH:mm","EEEE d MMMM y Bh":"EEEE d MMMM y h B","d MMMM y Bh":"d MMMM y h B","d MMM, y Bh":"d MMM, y h B","d/M/y Bh":"d/M/y h B","d Bh":"d h B","E Bh":"ccc h B","Ed Bh":"d, E h B","Gy Bh":"G y h B","GyMMM Bh":"G y MMM h B","GyMMMd Bh":"G y MMM d h B","GyMMMEd Bh":"G y MMM d, E h B","M Bh":"M h B","Md Bh":"d/M h B","MEd Bh":"MM-dd, E h B","MMd Bh":"d/MM h B","MMdd Bh":"dd/MM h B","MMM Bh":"MMM h B","MMMd Bh":"d MMM h B","MMMEd Bh":"E d MMM h B","MMMMd Bh":"d MMMM h B","MMMMEd Bh":"E d MMMM h B","y Bh":"y h B","yM Bh":"M/y h B","yMd Bh":"y-MM-dd h B","yMEd Bh":"E d/M/y h B","yMM Bh":"MM/y h B","yMMM Bh":"MMM y h B","yMMMd Bh":"d MMM y h B","yMMMEd Bh":"E d MMM y h B","yMMMM Bh":"MMMM y h B","EEEE d MMMM y Bhm":"EEEE d MMMM y h:mm B","d MMMM y Bhm":"d MMMM y h:mm B","d MMM, y Bhm":"d MMM, y h:mm B","d/M/y Bhm":"d/M/y h:mm B","d Bhm":"d h:mm B","E Bhm":"ccc h:mm B","Ed Bhm":"d, E h:mm B","Gy Bhm":"G y h:mm B","GyMMM Bhm":"G y MMM h:mm B","GyMMMd Bhm":"G y MMM d h:mm B","GyMMMEd Bhm":"G y MMM d, E h:mm B","M Bhm":"M h:mm B","Md Bhm":"d/M h:mm B","MEd Bhm":"MM-dd, E h:mm B","MMd Bhm":"d/MM h:mm B","MMdd Bhm":"dd/MM h:mm B","MMM Bhm":"MMM h:mm B","MMMd Bhm":"d MMM h:mm B","MMMEd Bhm":"E d MMM h:mm B","MMMMd Bhm":"d MMMM h:mm B","MMMMEd Bhm":"E d MMMM h:mm B","y Bhm":"y h:mm B","yM Bhm":"M/y h:mm B","yMd Bhm":"y-MM-dd h:mm B","yMEd Bhm":"E d/M/y h:mm B","yMM Bhm":"MM/y h:mm B","yMMM Bhm":"MMM y h:mm B","yMMMd Bhm":"d MMM y h:mm B","yMMMEd Bhm":"E d MMM y h:mm B","yMMMM Bhm":"MMMM y h:mm B","EEEE d MMMM y Bhms":"EEEE d MMMM y h:mm:ss B","d MMMM y Bhms":"d MMMM y h:mm:ss B","d MMM, y Bhms":"d MMM, y h:mm:ss B","d/M/y Bhms":"d/M/y h:mm:ss B","d Bhms":"d h:mm:ss B","E Bhms":"ccc h:mm:ss B","Ed Bhms":"d, E h:mm:ss B","Gy Bhms":"G y h:mm:ss B","GyMMM Bhms":"G y MMM h:mm:ss B","GyMMMd Bhms":"G y MMM d h:mm:ss B","GyMMMEd Bhms":"G y MMM d, E h:mm:ss B","M Bhms":"M h:mm:ss B","Md Bhms":"d/M h:mm:ss B","MEd Bhms":"MM-dd, E h:mm:ss B","MMd Bhms":"d/MM h:mm:ss B","MMdd Bhms":"dd/MM h:mm:ss B","MMM Bhms":"MMM h:mm:ss B","MMMd Bhms":"d MMM h:mm:ss B","MMMEd Bhms":"E d MMM h:mm:ss B","MMMMd Bhms":"d MMMM h:mm:ss B","MMMMEd Bhms":"E d MMMM h:mm:ss B","y Bhms":"y h:mm:ss B","yM Bhms":"M/y h:mm:ss B","yMd Bhms":"y-MM-dd h:mm:ss B","yMEd Bhms":"E d/M/y h:mm:ss B","yMM Bhms":"MM/y h:mm:ss B","yMMM Bhms":"MMM y h:mm:ss B","yMMMd Bhms":"d MMM y h:mm:ss B","yMMMEd Bhms":"E d MMM y h:mm:ss B","yMMMM Bhms":"MMMM y h:mm:ss B","EEEE d MMMM y h":"EEEE d MMMM y h a","d MMMM y h":"d MMMM y h a","d MMM, y h":"d MMM, y h a","d/M/y h":"d/M/y h a","d h":"d h a","E h":"ccc h a","Ed h":"d, E h a","Gy h":"G y h a","GyMMM h":"G y MMM h a","GyMMMd h":"G y MMM d h a","GyMMMEd h":"G y MMM d, E h a","M h":"M h a","Md h":"d/M h a","MEd h":"MM-dd, E h a","MMd h":"d/MM h a","MMdd h":"dd/MM h a","MMM h":"MMM h a","MMMd h":"d MMM h a","MMMEd h":"E d MMM h a","MMMMd h":"d MMMM h a","MMMMEd h":"E d MMMM h a","y h":"y h a","yM h":"M/y h a","yMd h":"y-MM-dd h a","yMEd h":"E d/M/y h a","yMM h":"MM/y h a","yMMM h":"MMM y h a","yMMMd h":"d MMM y h a","yMMMEd h":"E d MMM y h a","yMMMM h":"MMMM y h a","EEEE d MMMM y H":"EEEE d MMMM y HH","d MMMM y H":"d MMMM y HH","d MMM, y H":"d MMM, y HH","d/M/y H":"d/M/y HH","d H":"d HH","E H":"ccc HH","Ed H":"d, E HH","Gy H":"G y HH","GyMMM H":"G y MMM HH","GyMMMd H":"G y MMM d HH","GyMMMEd H":"G y MMM d, E HH","M H":"M HH","Md H":"d/M HH","MEd H":"MM-dd, E HH","MMd H":"d/MM HH","MMdd H":"dd/MM HH","MMM H":"MMM HH","MMMd H":"d MMM HH","MMMEd H":"E d MMM HH","MMMMd H":"d MMMM HH","MMMMEd H":"E d MMMM HH","y H":"y HH","yM H":"M/y HH","yMd H":"y-MM-dd HH","yMEd H":"E d/M/y HH","yMM H":"MM/y HH","yMMM H":"MMM y HH","yMMMd H":"d MMM y HH","yMMMEd H":"E d MMM y HH","yMMMM H":"MMMM y HH","EEEE d MMMM y hm":"EEEE d MMMM y h:mm a","d MMMM y hm":"d MMMM y h:mm a","d MMM, y hm":"d MMM, y h:mm a","d/M/y hm":"d/M/y h:mm a","d hm":"d h:mm a","E hm":"ccc h:mm a","Ed hm":"d, E h:mm a","Gy hm":"G y h:mm a","GyMMM hm":"G y MMM h:mm a","GyMMMd hm":"G y MMM d h:mm a","GyMMMEd hm":"G y MMM d, E h:mm a","M hm":"M h:mm a","Md hm":"d/M h:mm a","MEd hm":"MM-dd, E h:mm a","MMd hm":"d/MM h:mm a","MMdd hm":"dd/MM h:mm a","MMM hm":"MMM h:mm a","MMMd hm":"d MMM h:mm a","MMMEd hm":"E d MMM h:mm a","MMMMd hm":"d MMMM h:mm a","MMMMEd hm":"E d MMMM h:mm a","y hm":"y h:mm a","yM hm":"M/y h:mm a","yMd hm":"y-MM-dd h:mm a","yMEd hm":"E d/M/y h:mm a","yMM hm":"MM/y h:mm a","yMMM hm":"MMM y h:mm a","yMMMd hm":"d MMM y h:mm a","yMMMEd hm":"E d MMM y h:mm a","yMMMM hm":"MMMM y h:mm a","EEEE d MMMM y Hm":"EEEE d MMMM y HH:mm","d MMMM y Hm":"d MMMM y HH:mm","d MMM, y Hm":"d MMM, y HH:mm","d/M/y Hm":"d/M/y HH:mm","d Hm":"d HH:mm","E Hm":"ccc HH:mm","Ed Hm":"d, E HH:mm","Gy Hm":"G y HH:mm","GyMMM Hm":"G y MMM HH:mm","GyMMMd Hm":"G y MMM d HH:mm","GyMMMEd Hm":"G y MMM d, E HH:mm","M Hm":"M HH:mm","Md Hm":"d/M HH:mm","MEd Hm":"MM-dd, E HH:mm","MMd Hm":"d/MM HH:mm","MMdd Hm":"dd/MM HH:mm","MMM Hm":"MMM HH:mm","MMMd Hm":"d MMM HH:mm","MMMEd Hm":"E d MMM HH:mm","MMMMd Hm":"d MMMM HH:mm","MMMMEd Hm":"E d MMMM HH:mm","y Hm":"y HH:mm","yM Hm":"M/y HH:mm","yMd Hm":"y-MM-dd HH:mm","yMEd Hm":"E d/M/y HH:mm","yMM Hm":"MM/y HH:mm","yMMM Hm":"MMM y HH:mm","yMMMd Hm":"d MMM y HH:mm","yMMMEd Hm":"E d MMM y HH:mm","yMMMM Hm":"MMMM y HH:mm","EEEE d MMMM y hms":"EEEE d MMMM y h:mm:ss a","d MMMM y hms":"d MMMM y h:mm:ss a","d MMM, y hms":"d MMM, y h:mm:ss a","d/M/y hms":"d/M/y h:mm:ss a","d hms":"d h:mm:ss a","E hms":"ccc h:mm:ss a","Ed hms":"d, E h:mm:ss a","Gy hms":"G y h:mm:ss a","GyMMM hms":"G y MMM h:mm:ss a","GyMMMd hms":"G y MMM d h:mm:ss a","GyMMMEd hms":"G y MMM d, E h:mm:ss a","M hms":"M h:mm:ss a","Md hms":"d/M h:mm:ss a","MEd hms":"MM-dd, E h:mm:ss a","MMd hms":"d/MM h:mm:ss a","MMdd hms":"dd/MM h:mm:ss a","MMM hms":"MMM h:mm:ss a","MMMd hms":"d MMM h:mm:ss a","MMMEd hms":"E d MMM h:mm:ss a","MMMMd hms":"d MMMM h:mm:ss a","MMMMEd hms":"E d MMMM h:mm:ss a","y hms":"y h:mm:ss a","yM hms":"M/y h:mm:ss a","yMd hms":"y-MM-dd h:mm:ss a","yMEd hms":"E d/M/y h:mm:ss a","yMM hms":"MM/y h:mm:ss a","yMMM hms":"MMM y h:mm:ss a","yMMMd hms":"d MMM y h:mm:ss a","yMMMEd hms":"E d MMM y h:mm:ss a","yMMMM hms":"MMMM y h:mm:ss a","EEEE d MMMM y Hms":"EEEE d MMMM y HH:mm:ss","d MMMM y Hms":"d MMMM y HH:mm:ss","d MMM, y Hms":"d MMM, y HH:mm:ss","d/M/y Hms":"d/M/y HH:mm:ss","d Hms":"d HH:mm:ss","E Hms":"ccc HH:mm:ss","Ed Hms":"d, E HH:mm:ss","Gy Hms":"G y HH:mm:ss","GyMMM Hms":"G y MMM HH:mm:ss","GyMMMd Hms":"G y MMM d HH:mm:ss","GyMMMEd Hms":"G y MMM d, E HH:mm:ss","M Hms":"M HH:mm:ss","Md Hms":"d/M HH:mm:ss","MEd Hms":"MM-dd, E HH:mm:ss","MMd Hms":"d/MM HH:mm:ss","MMdd Hms":"dd/MM HH:mm:ss","MMM Hms":"MMM HH:mm:ss","MMMd Hms":"d MMM HH:mm:ss","MMMEd Hms":"E d MMM HH:mm:ss","MMMMd Hms":"d MMMM HH:mm:ss","MMMMEd Hms":"E d MMMM HH:mm:ss","y Hms":"y HH:mm:ss","yM Hms":"M/y HH:mm:ss","yMd Hms":"y-MM-dd HH:mm:ss","yMEd Hms":"E d/M/y HH:mm:ss","yMM Hms":"MM/y HH:mm:ss","yMMM Hms":"MMM y HH:mm:ss","yMMMd Hms":"d MMM y HH:mm:ss","yMMMEd Hms":"E d MMM y HH:mm:ss","yMMMM Hms":"MMMM y HH:mm:ss","EEEE d MMMM y hmsv":"EEEE d MMMM y h:mm:ss a v","d MMMM y hmsv":"d MMMM y h:mm:ss a v","d MMM, y hmsv":"d MMM, y h:mm:ss a v","d/M/y hmsv":"d/M/y h:mm:ss a v","d hmsv":"d h:mm:ss a v","E hmsv":"ccc h:mm:ss a v","Ed hmsv":"d, E h:mm:ss a v","Gy hmsv":"G y h:mm:ss a v","GyMMM hmsv":"G y MMM h:mm:ss a v","GyMMMd hmsv":"G y MMM d h:mm:ss a v","GyMMMEd hmsv":"G y MMM d, E h:mm:ss a v","M hmsv":"M h:mm:ss a v","Md hmsv":"d/M h:mm:ss a v","MEd hmsv":"MM-dd, E h:mm:ss a v","MMd hmsv":"d/MM h:mm:ss a v","MMdd hmsv":"dd/MM h:mm:ss a v","MMM hmsv":"MMM h:mm:ss a v","MMMd hmsv":"d MMM h:mm:ss a v","MMMEd hmsv":"E d MMM h:mm:ss a v","MMMMd hmsv":"d MMMM h:mm:ss a v","MMMMEd hmsv":"E d MMMM h:mm:ss a v","y hmsv":"y h:mm:ss a v","yM hmsv":"M/y h:mm:ss a v","yMd hmsv":"y-MM-dd h:mm:ss a v","yMEd hmsv":"E d/M/y h:mm:ss a v","yMM hmsv":"MM/y h:mm:ss a v","yMMM hmsv":"MMM y h:mm:ss a v","yMMMd hmsv":"d MMM y h:mm:ss a v","yMMMEd hmsv":"E d MMM y h:mm:ss a v","yMMMM hmsv":"MMMM y h:mm:ss a v","EEEE d MMMM y Hmsv":"EEEE d MMMM y HH:mm:ss v","d MMMM y Hmsv":"d MMMM y HH:mm:ss v","d MMM, y Hmsv":"d MMM, y HH:mm:ss v","d/M/y Hmsv":"d/M/y HH:mm:ss v","d Hmsv":"d HH:mm:ss v","E Hmsv":"ccc HH:mm:ss v","Ed Hmsv":"d, E HH:mm:ss v","Gy Hmsv":"G y HH:mm:ss v","GyMMM Hmsv":"G y MMM HH:mm:ss v","GyMMMd Hmsv":"G y MMM d HH:mm:ss v","GyMMMEd Hmsv":"G y MMM d, E HH:mm:ss v","M Hmsv":"M HH:mm:ss v","Md Hmsv":"d/M HH:mm:ss v","MEd Hmsv":"MM-dd, E HH:mm:ss v","MMd Hmsv":"d/MM HH:mm:ss v","MMdd Hmsv":"dd/MM HH:mm:ss v","MMM Hmsv":"MMM HH:mm:ss v","MMMd Hmsv":"d MMM HH:mm:ss v","MMMEd Hmsv":"E d MMM HH:mm:ss v","MMMMd Hmsv":"d MMMM HH:mm:ss v","MMMMEd Hmsv":"E d MMMM HH:mm:ss v","y Hmsv":"y HH:mm:ss v","yM Hmsv":"M/y HH:mm:ss v","yMd Hmsv":"y-MM-dd HH:mm:ss v","yMEd Hmsv":"E d/M/y HH:mm:ss v","yMM Hmsv":"MM/y HH:mm:ss v","yMMM Hmsv":"MMM y HH:mm:ss v","yMMMd Hmsv":"d MMM y HH:mm:ss v","yMMMEd Hmsv":"E d MMM y HH:mm:ss v","yMMMM Hmsv":"MMMM y HH:mm:ss v","EEEE d MMMM y hmv":"EEEE d MMMM y h:mm a v","d MMMM y hmv":"d MMMM y h:mm a v","d MMM, y hmv":"d MMM, y h:mm a v","d/M/y hmv":"d/M/y h:mm a v","d hmv":"d h:mm a v","E hmv":"ccc h:mm a v","Ed hmv":"d, E h:mm a v","Gy hmv":"G y h:mm a v","GyMMM hmv":"G y MMM h:mm a v","GyMMMd hmv":"G y MMM d h:mm a v","GyMMMEd hmv":"G y MMM d, E h:mm a v","M hmv":"M h:mm a v","Md hmv":"d/M h:mm a v","MEd hmv":"MM-dd, E h:mm a v","MMd hmv":"d/MM h:mm a v","MMdd hmv":"dd/MM h:mm a v","MMM hmv":"MMM h:mm a v","MMMd hmv":"d MMM h:mm a v","MMMEd hmv":"E d MMM h:mm a v","MMMMd hmv":"d MMMM h:mm a v","MMMMEd hmv":"E d MMMM h:mm a v","y hmv":"y h:mm a v","yM hmv":"M/y h:mm a v","yMd hmv":"y-MM-dd h:mm a v","yMEd hmv":"E d/M/y h:mm a v","yMM hmv":"MM/y h:mm a v","yMMM hmv":"MMM y h:mm a v","yMMMd hmv":"d MMM y h:mm a v","yMMMEd hmv":"E d MMM y h:mm a v","yMMMM hmv":"MMMM y h:mm a v","EEEE d MMMM y Hmv":"EEEE d MMMM y HH:mm v","d MMMM y Hmv":"d MMMM y HH:mm v","d MMM, y Hmv":"d MMM, y HH:mm v","d/M/y Hmv":"d/M/y HH:mm v","d Hmv":"d HH:mm v","E Hmv":"ccc HH:mm v","Ed Hmv":"d, E HH:mm v","Gy Hmv":"G y HH:mm v","GyMMM Hmv":"G y MMM HH:mm v","GyMMMd Hmv":"G y MMM d HH:mm v","GyMMMEd Hmv":"G y MMM d, E HH:mm v","M Hmv":"M HH:mm v","Md Hmv":"d/M HH:mm v","MEd Hmv":"MM-dd, E HH:mm v","MMd Hmv":"d/MM HH:mm v","MMdd Hmv":"dd/MM HH:mm v","MMM Hmv":"MMM HH:mm v","MMMd Hmv":"d MMM HH:mm v","MMMEd Hmv":"E d MMM HH:mm v","MMMMd Hmv":"d MMMM HH:mm v","MMMMEd Hmv":"E d MMMM HH:mm v","y Hmv":"y HH:mm v","yM Hmv":"M/y HH:mm v","yMd Hmv":"y-MM-dd HH:mm v","yMEd Hmv":"E d/M/y HH:mm v","yMM Hmv":"MM/y HH:mm v","yMMM Hmv":"MMM y HH:mm v","yMMMd Hmv":"d MMM y HH:mm v","yMMMEd Hmv":"E d MMM y HH:mm v","yMMMM Hmv":"MMMM y HH:mm v","EEEE d MMMM y ms":"EEEE d MMMM y m:ss","d MMMM y ms":"d MMMM y m:ss","d MMM, y ms":"d MMM, y m:ss","d/M/y ms":"d/M/y m:ss","d ms":"d m:ss","E ms":"ccc m:ss","Ed ms":"d, E m:ss","Gy ms":"G y m:ss","GyMMM ms":"G y MMM m:ss","GyMMMd ms":"G y MMM d m:ss","GyMMMEd ms":"G y MMM d, E m:ss","M ms":"M m:ss","Md ms":"d/M m:ss","MEd ms":"MM-dd, E m:ss","MMd ms":"d/MM m:ss","MMdd ms":"dd/MM m:ss","MMM ms":"MMM m:ss","MMMd ms":"d MMM m:ss","MMMEd ms":"E d MMM m:ss","MMMMd ms":"d MMMM m:ss","MMMMEd ms":"E d MMMM m:ss","y ms":"y m:ss","yM ms":"M/y m:ss","yMd ms":"y-MM-dd m:ss","yMEd ms":"E d/M/y m:ss","yMM ms":"MM/y m:ss","yMMM ms":"MMM y m:ss","yMMMd ms":"d MMM y m:ss","yMMMEd ms":"E d MMM y m:ss","yMMMM ms":"MMMM y m:ss"}},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h–h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm–h:mm B","m":"h:mm–h:mm B"},"d":{"d":"d–d"},"Gy":{"G":"G y – G y","y":"G y–y"},"GyM":{"G":"GGGGG y-MM – GGGGG y-MM","M":"GGGGG y-MM – y-MM","y":"GGGGG y-MM – y-MM"},"GyMd":{"d":"GGGGG y-MM-dd – y-MM-dd","G":"GGGGG y-MM-dd – GGGGG y-MM-dd","M":"GGGGG y-MM-dd – y-MM-dd","y":"GGGGG y-MM-dd – y-MM-dd"},"GyMEd":{"d":"GGGGG y-MM-dd, E – y-MM-dd, E","G":"GGGGG y-MM-dd, E – GGGGG y-MM-dd, E","M":"GGGGG y-MM-dd, E – y-MM-dd, E","y":"GGGGG y-MM-dd, E – y-MM-dd, E"},"GyMMM":{"G":"G y MMM – G y MMM","M":"G y MMM–MMM","y":"G y MMM – y MMM"},"GyMMMd":{"d":"G y MMM d–d","G":"G y MMM d – G y MMM d","M":"G y MMM d – MMM d","y":"G y MMM d – y MMM d"},"GyMMMEd":{"d":"G y MMM d, E – MMM d, E","G":"G y MMM d, E – G y MMM d, E","M":"G y MMM d, E – MMM d, E","y":"G y MMM d, E – y MMM d, E"},"h":{"a":"h a – h a","h":"h–h a"},"H":{"H":"HH–HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm–h:mm a","m":"h:mm–h:mm a"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"HH:mm–HH:mm v","m":"HH:mm–HH:mm v"},"hv":{"a":"h a – h a v","h":"h–h a v"},"Hv":{"H":"HH–HH v"},"M":{"M":"MM–MM"},"Md":{"d":"MM-dd – MM-dd","M":"MM-dd – MM-dd"},"MEd":{"d":"MM-dd, E – MM-dd, E","M":"MM-dd, E – MM-dd, E"},"MMM":{"M":"LLL–LLL"},"MMMd":{"d":"MMM d–d","M":"MMM d – MMM d"},"MMMEd":{"d":"MMM d, E – MMM d, E","M":"MMM d, E – MMM d, E"},"y":{"y":"y–y"},"yM":{"M":"y-MM – y-MM","y":"y-MM – y-MM"},"yMd":{"d":"y-MM-dd – y-MM-dd","M":"y-MM-dd – y-MM-dd","y":"y-MM-dd – y-MM-dd"},"yMEd":{"d":"y-MM-dd, E – y-MM-dd, E","M":"y-MM-dd, E – y-MM-dd, E","y":"y-MM-dd, E – y-MM-dd, E"},"yMMM":{"M":"y MMM–MMM","y":"y MMM – y MMM"},"yMMMd":{"d":"y MMM d–d","M":"y MMM d – MMM d","y":"y MMM d – y MMM d"},"yMMMEd":{"d":"y MMM d, E – MMM d, E","M":"y MMM d, E – MMM d, E","y":"y MMM d, E – y MMM d, E"},"yMMMM":{"M":"y MMMM–MMMM","y":"y MMMM – y MMMM"}},"hourCycle":"h23","nu":["latn"],"ca":["gregory"],"hc":["h23","h12","",""]},"locale":"ff-Latn-NG"}
)
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
