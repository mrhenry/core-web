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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("ckb-IR").length
)) {
// Intl.DateTimeFormat.~locale.ckb-IR
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"am":"ب.ن","pm":"د.ن","weekday":{"narrow":["ی","د","س","چ","پ","ھ","ش"],"short":["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"],"long":["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"]},"era":{"narrow":{"BC":"پێش زایین","AD":"زایینی"},"short":{"BC":"پێش زایین","AD":"زایینی"},"long":{"BC":"پێش زایین","AD":"زایینی"}},"month":{"narrow":["ک","ش","ئ","ن","ئ","ح","ت","ئ","ئ","ت","ت","ک"],"short":["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],"long":["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"]},"timeZoneName":{"UTC":{"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"y MMMM d, EEEE","long":"dی MMMMی y","medium":"y MMM d","short":"y-MM-dd"},"timeFormat":{"full":"HH:mm:ss zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"dateTimeFormat":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"E dھەم","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"G y","GyMMM":"G y MMM","GyMMMd":"G y MMM d","GyMMMEd":"G y MMM d, E","h":"hی a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"MM-dd","MEd":"E، M/d","MMM":"LLL","MMMd":"dی MMM","MMMEd":"E، dی MMM","MMMMd":"MMMM d","ms":"mm:ss","y":"y","yM":"M/y","yMd":"d/M/y","yMEd":"E، d/M/y","yMMM":"MMMی y","yMMMd":"dی MMMی y","yMMMEd":"E، dی MMMی y","yMMMM":"y MMMM","y MMMM d, EEEE":"y MMMM d, EEEE","dی MMMMی y":"dی MMMMی y","y MMM d":"y MMM d","y-MM-dd":"y-MM-dd","HH:mm:ss zzzz":"HH:mm:ss zzzz","HH:mm:ss z":"HH:mm:ss z","HH:mm:ss":"HH:mm:ss","HH:mm":"HH:mm","y MMMM d, EEEE HH:mm:ss zzzz":"y MMMM d, EEEE HH:mm:ss zzzz","dی MMMMی y HH:mm:ss zzzz":"dی MMMMی y HH:mm:ss zzzz","y MMM d HH:mm:ss zzzz":"y MMM d HH:mm:ss zzzz","y-MM-dd HH:mm:ss zzzz":"y-MM-dd HH:mm:ss zzzz","d HH:mm:ss zzzz":"d HH:mm:ss zzzz","E HH:mm:ss zzzz":"ccc HH:mm:ss zzzz","Ed HH:mm:ss zzzz":"E dھەم HH:mm:ss zzzz","Gy HH:mm:ss zzzz":"G y HH:mm:ss zzzz","GyMMM HH:mm:ss zzzz":"G y MMM HH:mm:ss zzzz","GyMMMd HH:mm:ss zzzz":"G y MMM d HH:mm:ss zzzz","GyMMMEd HH:mm:ss zzzz":"G y MMM d, E HH:mm:ss zzzz","M HH:mm:ss zzzz":"L HH:mm:ss zzzz","Md HH:mm:ss zzzz":"MM-dd HH:mm:ss zzzz","MEd HH:mm:ss zzzz":"E، M/d HH:mm:ss zzzz","MMM HH:mm:ss zzzz":"LLL HH:mm:ss zzzz","MMMd HH:mm:ss zzzz":"dی MMM HH:mm:ss zzzz","MMMEd HH:mm:ss zzzz":"E، dی MMM HH:mm:ss zzzz","MMMMd HH:mm:ss zzzz":"MMMM d HH:mm:ss zzzz","y HH:mm:ss zzzz":"y HH:mm:ss zzzz","yM HH:mm:ss zzzz":"M/y HH:mm:ss zzzz","yMd HH:mm:ss zzzz":"d/M/y HH:mm:ss zzzz","yMEd HH:mm:ss zzzz":"E، d/M/y HH:mm:ss zzzz","yMMM HH:mm:ss zzzz":"MMMی y HH:mm:ss zzzz","yMMMd HH:mm:ss zzzz":"dی MMMی y HH:mm:ss zzzz","yMMMEd HH:mm:ss zzzz":"E، dی MMMی y HH:mm:ss zzzz","yMMMM HH:mm:ss zzzz":"y MMMM HH:mm:ss zzzz","y MMMM d, EEEE HH:mm:ss z":"y MMMM d, EEEE HH:mm:ss z","dی MMMMی y HH:mm:ss z":"dی MMMMی y HH:mm:ss z","y MMM d HH:mm:ss z":"y MMM d HH:mm:ss z","y-MM-dd HH:mm:ss z":"y-MM-dd HH:mm:ss z","d HH:mm:ss z":"d HH:mm:ss z","E HH:mm:ss z":"ccc HH:mm:ss z","Ed HH:mm:ss z":"E dھەم HH:mm:ss z","Gy HH:mm:ss z":"G y HH:mm:ss z","GyMMM HH:mm:ss z":"G y MMM HH:mm:ss z","GyMMMd HH:mm:ss z":"G y MMM d HH:mm:ss z","GyMMMEd HH:mm:ss z":"G y MMM d, E HH:mm:ss z","M HH:mm:ss z":"L HH:mm:ss z","Md HH:mm:ss z":"MM-dd HH:mm:ss z","MEd HH:mm:ss z":"E، M/d HH:mm:ss z","MMM HH:mm:ss z":"LLL HH:mm:ss z","MMMd HH:mm:ss z":"dی MMM HH:mm:ss z","MMMEd HH:mm:ss z":"E، dی MMM HH:mm:ss z","MMMMd HH:mm:ss z":"MMMM d HH:mm:ss z","y HH:mm:ss z":"y HH:mm:ss z","yM HH:mm:ss z":"M/y HH:mm:ss z","yMd HH:mm:ss z":"d/M/y HH:mm:ss z","yMEd HH:mm:ss z":"E، d/M/y HH:mm:ss z","yMMM HH:mm:ss z":"MMMی y HH:mm:ss z","yMMMd HH:mm:ss z":"dی MMMی y HH:mm:ss z","yMMMEd HH:mm:ss z":"E، dی MMMی y HH:mm:ss z","yMMMM HH:mm:ss z":"y MMMM HH:mm:ss z","y MMMM d, EEEE HH:mm:ss":"y MMMM d, EEEE HH:mm:ss","dی MMMMی y HH:mm:ss":"dی MMMMی y HH:mm:ss","y MMM d HH:mm:ss":"y MMM d HH:mm:ss","y-MM-dd HH:mm:ss":"y-MM-dd HH:mm:ss","d HH:mm:ss":"d HH:mm:ss","E HH:mm:ss":"ccc HH:mm:ss","Ed HH:mm:ss":"E dھەم HH:mm:ss","Gy HH:mm:ss":"G y HH:mm:ss","GyMMM HH:mm:ss":"G y MMM HH:mm:ss","GyMMMd HH:mm:ss":"G y MMM d HH:mm:ss","GyMMMEd HH:mm:ss":"G y MMM d, E HH:mm:ss","M HH:mm:ss":"L HH:mm:ss","Md HH:mm:ss":"MM-dd HH:mm:ss","MEd HH:mm:ss":"E، M/d HH:mm:ss","MMM HH:mm:ss":"LLL HH:mm:ss","MMMd HH:mm:ss":"dی MMM HH:mm:ss","MMMEd HH:mm:ss":"E، dی MMM HH:mm:ss","MMMMd HH:mm:ss":"MMMM d HH:mm:ss","y HH:mm:ss":"y HH:mm:ss","yM HH:mm:ss":"M/y HH:mm:ss","yMd HH:mm:ss":"d/M/y HH:mm:ss","yMEd HH:mm:ss":"E، d/M/y HH:mm:ss","yMMM HH:mm:ss":"MMMی y HH:mm:ss","yMMMd HH:mm:ss":"dی MMMی y HH:mm:ss","yMMMEd HH:mm:ss":"E، dی MMMی y HH:mm:ss","yMMMM HH:mm:ss":"y MMMM HH:mm:ss","y MMMM d, EEEE HH:mm":"y MMMM d, EEEE HH:mm","dی MMMMی y HH:mm":"dی MMMMی y HH:mm","y MMM d HH:mm":"y MMM d HH:mm","y-MM-dd HH:mm":"y-MM-dd HH:mm","d HH:mm":"d HH:mm","E HH:mm":"ccc HH:mm","Ed HH:mm":"E dھەم HH:mm","Gy HH:mm":"G y HH:mm","GyMMM HH:mm":"G y MMM HH:mm","GyMMMd HH:mm":"G y MMM d HH:mm","GyMMMEd HH:mm":"G y MMM d, E HH:mm","M HH:mm":"L HH:mm","Md HH:mm":"MM-dd HH:mm","MEd HH:mm":"E، M/d HH:mm","MMM HH:mm":"LLL HH:mm","MMMd HH:mm":"dی MMM HH:mm","MMMEd HH:mm":"E، dی MMM HH:mm","MMMMd HH:mm":"MMMM d HH:mm","y HH:mm":"y HH:mm","yM HH:mm":"M/y HH:mm","yMd HH:mm":"d/M/y HH:mm","yMEd HH:mm":"E، d/M/y HH:mm","yMMM HH:mm":"MMMی y HH:mm","yMMMd HH:mm":"dی MMMی y HH:mm","yMMMEd HH:mm":"E، dی MMMی y HH:mm","yMMMM HH:mm":"y MMMM HH:mm","y MMMM d, EEEE Bh":"y MMMM d, EEEE h B","dی MMMMی y Bh":"dی MMMMی y h B","y MMM d Bh":"y MMM d h B","y-MM-dd Bh":"y-MM-dd h B","d Bh":"d h B","E Bh":"ccc h B","Ed Bh":"E dھەم h B","Gy Bh":"G y h B","GyMMM Bh":"G y MMM h B","GyMMMd Bh":"G y MMM d h B","GyMMMEd Bh":"G y MMM d, E h B","M Bh":"L h B","Md Bh":"MM-dd h B","MEd Bh":"E، M/d h B","MMM Bh":"LLL h B","MMMd Bh":"dی MMM h B","MMMEd Bh":"E، dی MMM h B","MMMMd Bh":"MMMM d h B","y Bh":"y h B","yM Bh":"M/y h B","yMd Bh":"d/M/y h B","yMEd Bh":"E، d/M/y h B","yMMM Bh":"MMMی y h B","yMMMd Bh":"dی MMMی y h B","yMMMEd Bh":"E، dی MMMی y h B","yMMMM Bh":"y MMMM h B","y MMMM d, EEEE Bhm":"y MMMM d, EEEE h:mm B","dی MMMMی y Bhm":"dی MMMMی y h:mm B","y MMM d Bhm":"y MMM d h:mm B","y-MM-dd Bhm":"y-MM-dd h:mm B","d Bhm":"d h:mm B","E Bhm":"ccc h:mm B","Ed Bhm":"E dھەم h:mm B","Gy Bhm":"G y h:mm B","GyMMM Bhm":"G y MMM h:mm B","GyMMMd Bhm":"G y MMM d h:mm B","GyMMMEd Bhm":"G y MMM d, E h:mm B","M Bhm":"L h:mm B","Md Bhm":"MM-dd h:mm B","MEd Bhm":"E، M/d h:mm B","MMM Bhm":"LLL h:mm B","MMMd Bhm":"dی MMM h:mm B","MMMEd Bhm":"E، dی MMM h:mm B","MMMMd Bhm":"MMMM d h:mm B","y Bhm":"y h:mm B","yM Bhm":"M/y h:mm B","yMd Bhm":"d/M/y h:mm B","yMEd Bhm":"E، d/M/y h:mm B","yMMM Bhm":"MMMی y h:mm B","yMMMd Bhm":"dی MMMی y h:mm B","yMMMEd Bhm":"E، dی MMMی y h:mm B","yMMMM Bhm":"y MMMM h:mm B","y MMMM d, EEEE Bhms":"y MMMM d, EEEE h:mm:ss B","dی MMMMی y Bhms":"dی MMMMی y h:mm:ss B","y MMM d Bhms":"y MMM d h:mm:ss B","y-MM-dd Bhms":"y-MM-dd h:mm:ss B","d Bhms":"d h:mm:ss B","E Bhms":"ccc h:mm:ss B","Ed Bhms":"E dھەم h:mm:ss B","Gy Bhms":"G y h:mm:ss B","GyMMM Bhms":"G y MMM h:mm:ss B","GyMMMd Bhms":"G y MMM d h:mm:ss B","GyMMMEd Bhms":"G y MMM d, E h:mm:ss B","M Bhms":"L h:mm:ss B","Md Bhms":"MM-dd h:mm:ss B","MEd Bhms":"E، M/d h:mm:ss B","MMM Bhms":"LLL h:mm:ss B","MMMd Bhms":"dی MMM h:mm:ss B","MMMEd Bhms":"E، dی MMM h:mm:ss B","MMMMd Bhms":"MMMM d h:mm:ss B","y Bhms":"y h:mm:ss B","yM Bhms":"M/y h:mm:ss B","yMd Bhms":"d/M/y h:mm:ss B","yMEd Bhms":"E، d/M/y h:mm:ss B","yMMM Bhms":"MMMی y h:mm:ss B","yMMMd Bhms":"dی MMMی y h:mm:ss B","yMMMEd Bhms":"E، dی MMMی y h:mm:ss B","yMMMM Bhms":"y MMMM h:mm:ss B","y MMMM d, EEEE h":"y MMMM d, EEEE hی a","dی MMMMی y h":"dی MMMMی y hی a","y MMM d h":"y MMM d hی a","y-MM-dd h":"y-MM-dd hی a","d h":"d hی a","E h":"ccc hی a","Ed h":"E dھەم hی a","Gy h":"G y hی a","GyMMM h":"G y MMM hی a","GyMMMd h":"G y MMM d hی a","GyMMMEd h":"G y MMM d, E hی a","M h":"L hی a","Md h":"MM-dd hی a","MEd h":"E، M/d hی a","MMM h":"LLL hی a","MMMd h":"dی MMM hی a","MMMEd h":"E، dی MMM hی a","MMMMd h":"MMMM d hی a","y h":"y hی a","yM h":"M/y hی a","yMd h":"d/M/y hی a","yMEd h":"E، d/M/y hی a","yMMM h":"MMMی y hی a","yMMMd h":"dی MMMی y hی a","yMMMEd h":"E، dی MMMی y hی a","yMMMM h":"y MMMM hی a","y MMMM d, EEEE H":"y MMMM d, EEEE HH","dی MMMMی y H":"dی MMMMی y HH","y MMM d H":"y MMM d HH","y-MM-dd H":"y-MM-dd HH","d H":"d HH","E H":"ccc HH","Ed H":"E dھەم HH","Gy H":"G y HH","GyMMM H":"G y MMM HH","GyMMMd H":"G y MMM d HH","GyMMMEd H":"G y MMM d, E HH","M H":"L HH","Md H":"MM-dd HH","MEd H":"E، M/d HH","MMM H":"LLL HH","MMMd H":"dی MMM HH","MMMEd H":"E، dی MMM HH","MMMMd H":"MMMM d HH","y H":"y HH","yM H":"M/y HH","yMd H":"d/M/y HH","yMEd H":"E، d/M/y HH","yMMM H":"MMMی y HH","yMMMd H":"dی MMMی y HH","yMMMEd H":"E، dی MMMی y HH","yMMMM H":"y MMMM HH","y MMMM d, EEEE hm":"y MMMM d, EEEE h:mm a","dی MMMMی y hm":"dی MMMMی y h:mm a","y MMM d hm":"y MMM d h:mm a","y-MM-dd hm":"y-MM-dd h:mm a","d hm":"d h:mm a","E hm":"ccc h:mm a","Ed hm":"E dھەم h:mm a","Gy hm":"G y h:mm a","GyMMM hm":"G y MMM h:mm a","GyMMMd hm":"G y MMM d h:mm a","GyMMMEd hm":"G y MMM d, E h:mm a","M hm":"L h:mm a","Md hm":"MM-dd h:mm a","MEd hm":"E، M/d h:mm a","MMM hm":"LLL h:mm a","MMMd hm":"dی MMM h:mm a","MMMEd hm":"E، dی MMM h:mm a","MMMMd hm":"MMMM d h:mm a","y hm":"y h:mm a","yM hm":"M/y h:mm a","yMd hm":"d/M/y h:mm a","yMEd hm":"E، d/M/y h:mm a","yMMM hm":"MMMی y h:mm a","yMMMd hm":"dی MMMی y h:mm a","yMMMEd hm":"E، dی MMMی y h:mm a","yMMMM hm":"y MMMM h:mm a","y MMMM d, EEEE Hm":"y MMMM d, EEEE HH:mm","dی MMMMی y Hm":"dی MMMMی y HH:mm","y MMM d Hm":"y MMM d HH:mm","y-MM-dd Hm":"y-MM-dd HH:mm","d Hm":"d HH:mm","E Hm":"ccc HH:mm","Ed Hm":"E dھەم HH:mm","Gy Hm":"G y HH:mm","GyMMM Hm":"G y MMM HH:mm","GyMMMd Hm":"G y MMM d HH:mm","GyMMMEd Hm":"G y MMM d, E HH:mm","M Hm":"L HH:mm","Md Hm":"MM-dd HH:mm","MEd Hm":"E، M/d HH:mm","MMM Hm":"LLL HH:mm","MMMd Hm":"dی MMM HH:mm","MMMEd Hm":"E، dی MMM HH:mm","MMMMd Hm":"MMMM d HH:mm","y Hm":"y HH:mm","yM Hm":"M/y HH:mm","yMd Hm":"d/M/y HH:mm","yMEd Hm":"E، d/M/y HH:mm","yMMM Hm":"MMMی y HH:mm","yMMMd Hm":"dی MMMی y HH:mm","yMMMEd Hm":"E، dی MMMی y HH:mm","yMMMM Hm":"y MMMM HH:mm","y MMMM d, EEEE hms":"y MMMM d, EEEE h:mm:ss a","dی MMMMی y hms":"dی MMMMی y h:mm:ss a","y MMM d hms":"y MMM d h:mm:ss a","y-MM-dd hms":"y-MM-dd h:mm:ss a","d hms":"d h:mm:ss a","E hms":"ccc h:mm:ss a","Ed hms":"E dھەم h:mm:ss a","Gy hms":"G y h:mm:ss a","GyMMM hms":"G y MMM h:mm:ss a","GyMMMd hms":"G y MMM d h:mm:ss a","GyMMMEd hms":"G y MMM d, E h:mm:ss a","M hms":"L h:mm:ss a","Md hms":"MM-dd h:mm:ss a","MEd hms":"E، M/d h:mm:ss a","MMM hms":"LLL h:mm:ss a","MMMd hms":"dی MMM h:mm:ss a","MMMEd hms":"E، dی MMM h:mm:ss a","MMMMd hms":"MMMM d h:mm:ss a","y hms":"y h:mm:ss a","yM hms":"M/y h:mm:ss a","yMd hms":"d/M/y h:mm:ss a","yMEd hms":"E، d/M/y h:mm:ss a","yMMM hms":"MMMی y h:mm:ss a","yMMMd hms":"dی MMMی y h:mm:ss a","yMMMEd hms":"E، dی MMMی y h:mm:ss a","yMMMM hms":"y MMMM h:mm:ss a","y MMMM d, EEEE Hms":"y MMMM d, EEEE HH:mm:ss","dی MMMMی y Hms":"dی MMMMی y HH:mm:ss","y MMM d Hms":"y MMM d HH:mm:ss","y-MM-dd Hms":"y-MM-dd HH:mm:ss","d Hms":"d HH:mm:ss","E Hms":"ccc HH:mm:ss","Ed Hms":"E dھەم HH:mm:ss","Gy Hms":"G y HH:mm:ss","GyMMM Hms":"G y MMM HH:mm:ss","GyMMMd Hms":"G y MMM d HH:mm:ss","GyMMMEd Hms":"G y MMM d, E HH:mm:ss","M Hms":"L HH:mm:ss","Md Hms":"MM-dd HH:mm:ss","MEd Hms":"E، M/d HH:mm:ss","MMM Hms":"LLL HH:mm:ss","MMMd Hms":"dی MMM HH:mm:ss","MMMEd Hms":"E، dی MMM HH:mm:ss","MMMMd Hms":"MMMM d HH:mm:ss","y Hms":"y HH:mm:ss","yM Hms":"M/y HH:mm:ss","yMd Hms":"d/M/y HH:mm:ss","yMEd Hms":"E، d/M/y HH:mm:ss","yMMM Hms":"MMMی y HH:mm:ss","yMMMd Hms":"dی MMMی y HH:mm:ss","yMMMEd Hms":"E، dی MMMی y HH:mm:ss","yMMMM Hms":"y MMMM HH:mm:ss","y MMMM d, EEEE hmsv":"y MMMM d, EEEE h:mm:ss a v","dی MMMMی y hmsv":"dی MMMMی y h:mm:ss a v","y MMM d hmsv":"y MMM d h:mm:ss a v","y-MM-dd hmsv":"y-MM-dd h:mm:ss a v","d hmsv":"d h:mm:ss a v","E hmsv":"ccc h:mm:ss a v","Ed hmsv":"E dھەم h:mm:ss a v","Gy hmsv":"G y h:mm:ss a v","GyMMM hmsv":"G y MMM h:mm:ss a v","GyMMMd hmsv":"G y MMM d h:mm:ss a v","GyMMMEd hmsv":"G y MMM d, E h:mm:ss a v","M hmsv":"L h:mm:ss a v","Md hmsv":"MM-dd h:mm:ss a v","MEd hmsv":"E، M/d h:mm:ss a v","MMM hmsv":"LLL h:mm:ss a v","MMMd hmsv":"dی MMM h:mm:ss a v","MMMEd hmsv":"E، dی MMM h:mm:ss a v","MMMMd hmsv":"MMMM d h:mm:ss a v","y hmsv":"y h:mm:ss a v","yM hmsv":"M/y h:mm:ss a v","yMd hmsv":"d/M/y h:mm:ss a v","yMEd hmsv":"E، d/M/y h:mm:ss a v","yMMM hmsv":"MMMی y h:mm:ss a v","yMMMd hmsv":"dی MMMی y h:mm:ss a v","yMMMEd hmsv":"E، dی MMMی y h:mm:ss a v","yMMMM hmsv":"y MMMM h:mm:ss a v","y MMMM d, EEEE Hmsv":"y MMMM d, EEEE HH:mm:ss v","dی MMMMی y Hmsv":"dی MMMMی y HH:mm:ss v","y MMM d Hmsv":"y MMM d HH:mm:ss v","y-MM-dd Hmsv":"y-MM-dd HH:mm:ss v","d Hmsv":"d HH:mm:ss v","E Hmsv":"ccc HH:mm:ss v","Ed Hmsv":"E dھەم HH:mm:ss v","Gy Hmsv":"G y HH:mm:ss v","GyMMM Hmsv":"G y MMM HH:mm:ss v","GyMMMd Hmsv":"G y MMM d HH:mm:ss v","GyMMMEd Hmsv":"G y MMM d, E HH:mm:ss v","M Hmsv":"L HH:mm:ss v","Md Hmsv":"MM-dd HH:mm:ss v","MEd Hmsv":"E، M/d HH:mm:ss v","MMM Hmsv":"LLL HH:mm:ss v","MMMd Hmsv":"dی MMM HH:mm:ss v","MMMEd Hmsv":"E، dی MMM HH:mm:ss v","MMMMd Hmsv":"MMMM d HH:mm:ss v","y Hmsv":"y HH:mm:ss v","yM Hmsv":"M/y HH:mm:ss v","yMd Hmsv":"d/M/y HH:mm:ss v","yMEd Hmsv":"E، d/M/y HH:mm:ss v","yMMM Hmsv":"MMMی y HH:mm:ss v","yMMMd Hmsv":"dی MMMی y HH:mm:ss v","yMMMEd Hmsv":"E، dی MMMی y HH:mm:ss v","yMMMM Hmsv":"y MMMM HH:mm:ss v","y MMMM d, EEEE hmv":"y MMMM d, EEEE h:mm a v","dی MMMMی y hmv":"dی MMMMی y h:mm a v","y MMM d hmv":"y MMM d h:mm a v","y-MM-dd hmv":"y-MM-dd h:mm a v","d hmv":"d h:mm a v","E hmv":"ccc h:mm a v","Ed hmv":"E dھەم h:mm a v","Gy hmv":"G y h:mm a v","GyMMM hmv":"G y MMM h:mm a v","GyMMMd hmv":"G y MMM d h:mm a v","GyMMMEd hmv":"G y MMM d, E h:mm a v","M hmv":"L h:mm a v","Md hmv":"MM-dd h:mm a v","MEd hmv":"E، M/d h:mm a v","MMM hmv":"LLL h:mm a v","MMMd hmv":"dی MMM h:mm a v","MMMEd hmv":"E، dی MMM h:mm a v","MMMMd hmv":"MMMM d h:mm a v","y hmv":"y h:mm a v","yM hmv":"M/y h:mm a v","yMd hmv":"d/M/y h:mm a v","yMEd hmv":"E، d/M/y h:mm a v","yMMM hmv":"MMMی y h:mm a v","yMMMd hmv":"dی MMMی y h:mm a v","yMMMEd hmv":"E، dی MMMی y h:mm a v","yMMMM hmv":"y MMMM h:mm a v","y MMMM d, EEEE Hmv":"y MMMM d, EEEE HH:mm v","dی MMMMی y Hmv":"dی MMMMی y HH:mm v","y MMM d Hmv":"y MMM d HH:mm v","y-MM-dd Hmv":"y-MM-dd HH:mm v","d Hmv":"d HH:mm v","E Hmv":"ccc HH:mm v","Ed Hmv":"E dھەم HH:mm v","Gy Hmv":"G y HH:mm v","GyMMM Hmv":"G y MMM HH:mm v","GyMMMd Hmv":"G y MMM d HH:mm v","GyMMMEd Hmv":"G y MMM d, E HH:mm v","M Hmv":"L HH:mm v","Md Hmv":"MM-dd HH:mm v","MEd Hmv":"E، M/d HH:mm v","MMM Hmv":"LLL HH:mm v","MMMd Hmv":"dی MMM HH:mm v","MMMEd Hmv":"E، dی MMM HH:mm v","MMMMd Hmv":"MMMM d HH:mm v","y Hmv":"y HH:mm v","yM Hmv":"M/y HH:mm v","yMd Hmv":"d/M/y HH:mm v","yMEd Hmv":"E، d/M/y HH:mm v","yMMM Hmv":"MMMی y HH:mm v","yMMMd Hmv":"dی MMMی y HH:mm v","yMMMEd Hmv":"E، dی MMMی y HH:mm v","yMMMM Hmv":"y MMMM HH:mm v","y MMMM d, EEEE ms":"y MMMM d, EEEE mm:ss","dی MMMMی y ms":"dی MMMMی y mm:ss","y MMM d ms":"y MMM d mm:ss","y-MM-dd ms":"y-MM-dd mm:ss","d ms":"d mm:ss","E ms":"ccc mm:ss","Ed ms":"E dھەم mm:ss","Gy ms":"G y mm:ss","GyMMM ms":"G y MMM mm:ss","GyMMMd ms":"G y MMM d mm:ss","GyMMMEd ms":"G y MMM d, E mm:ss","M ms":"L mm:ss","Md ms":"MM-dd mm:ss","MEd ms":"E، M/d mm:ss","MMM ms":"LLL mm:ss","MMMd ms":"dی MMM mm:ss","MMMEd ms":"E، dی MMM mm:ss","MMMMd ms":"MMMM d mm:ss","y ms":"y mm:ss","yM ms":"M/y mm:ss","yMd ms":"d/M/y mm:ss","yMEd ms":"E، d/M/y mm:ss","yMMM ms":"MMMی y mm:ss","yMMMd ms":"dی MMMی y mm:ss","yMMMEd ms":"E، dی MMMی y mm:ss","yMMMM ms":"y MMMM mm:ss"}},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h–h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm–h:mm B","m":"h:mm–h:mm B"},"d":{"d":"d–d"},"Gy":{"G":"G y – G y","y":"G y–y"},"GyM":{"G":"GGGGG y-MM – GGGGG y-MM","M":"GGGGG y-MM – y-MM","y":"GGGGG y-MM – y-MM"},"GyMd":{"d":"GGGGG y-MM-dd – y-MM-dd","G":"GGGGG y-MM-dd – GGGGG y-MM-dd","M":"GGGGG y-MM-dd – y-MM-dd","y":"GGGGG y-MM-dd – y-MM-dd"},"GyMEd":{"d":"GGGGG y-MM-dd, E – y-MM-dd, E","G":"GGGGG y-MM-dd, E – GGGGG y-MM-dd, E","M":"GGGGG y-MM-dd, E – y-MM-dd, E","y":"GGGGG y-MM-dd, E – y-MM-dd, E"},"GyMMM":{"G":"G y MMM – G y MMM","M":"G y MMM–MMM","y":"G y MMM – y MMM"},"GyMMMd":{"d":"G y MMM d–d","G":"G y MMM d – G y MMM d","M":"G y MMM d – MMM d","y":"G y MMM d – y MMM d"},"GyMMMEd":{"d":"G y MMM d, E – MMM d, E","G":"G y MMM d, E – G y MMM d, E","M":"G y MMM d, E – MMM d, E","y":"G y MMM d, E – y MMM d, E"},"h":{"a":"h a – h a","h":"h–h a"},"H":{"H":"HH–HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm–h:mm a","m":"h:mm–h:mm a"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"HH:mm–HH:mm v","m":"HH:mm–HH:mm v"},"hv":{"a":"h a – h a v","h":"h–h a v"},"Hv":{"H":"HH–HH v"},"M":{"M":"MM–MM"},"Md":{"d":"MM-dd – MM-dd","M":"MM-dd – MM-dd"},"MEd":{"d":"MM-dd, E – MM-dd, E","M":"MM-dd, E – MM-dd, E"},"MMM":{"M":"LLL–LLL"},"MMMd":{"d":"MMM d–d","M":"MMM d – MMM d"},"MMMEd":{"d":"MMM d, E – MMM d, E","M":"MMM d, E – MMM d, E"},"y":{"y":"y–y"},"yM":{"M":"y-MM – y-MM","y":"y-MM – y-MM"},"yMd":{"d":"y-MM-dd – y-MM-dd","M":"y-MM-dd – y-MM-dd","y":"y-MM-dd – y-MM-dd"},"yMEd":{"d":"y-MM-dd, E – y-MM-dd, E","M":"y-MM-dd, E – y-MM-dd, E","y":"y-MM-dd, E – y-MM-dd, E"},"yMMM":{"M":"y MMM–MMM","y":"y MMM – y MMM"},"yMMMd":{"d":"y MMM d–d","M":"y MMM d – MMM d","y":"y MMM d – y MMM d"},"yMMMEd":{"d":"y MMM d, E – MMM d, E","M":"y MMM d, E – MMM d, E","y":"y MMM d, E – y MMM d, E"},"yMMMM":{"M":"y MMMM–MMMM","y":"y MMMM – y MMMM"}},"hourCycle":"","nu":["arab"],"ca":["persian","gregory","islamic","islamicc","islamic-tbla"],"hc":["","h23"]},"locale":"ckb-IR"}
)
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
