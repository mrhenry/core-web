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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("tt").length
)) {
// Intl.DateTimeFormat.~locale.tt
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"am":"AM","pm":"PM","weekday":{"narrow":["Я","Д","С","Ч","П","Җ","Ш"],"short":["якш.","дүш.","сиш.","чәр.","пәнҗ.","җом.","шим."],"long":["якшәмбе","дүшәмбе","сишәмбе","чәршәмбе","пәнҗешәмбе","җомга","шимбә"]},"era":{"narrow":{"BC":"б.э.к.","AD":"милади"},"short":{"BC":"б.э.к.","AD":"милади"},"long":{"BC":"безнең эрага кадәр","AD":"безнең эра"}},"month":{"narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"short":["гыйн.","фев.","мар.","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],"long":["гыйнвар","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},"timeZoneName":{"America/Chicago":{"long":["Төньяк Америка гадәти үзәк вакыты","Төньяк Америка җәйге үзәк вакыты"]},"America/Belize":{"long":["Төньяк Америка гадәти үзәк вакыты","Төньяк Америка җәйге үзәк вакыты"]},"America/Winnipeg":{"long":["Төньяк Америка гадәти үзәк вакыты","Төньяк Америка җәйге үзәк вакыты"]},"America/Costa_Rica":{"long":["Төньяк Америка гадәти үзәк вакыты","Төньяк Америка җәйге үзәк вакыты"]},"America/Guatemala":{"long":["Төньяк Америка гадәти үзәк вакыты","Төньяк Америка җәйге үзәк вакыты"]},"America/Tegucigalpa":{"long":["Төньяк Америка гадәти үзәк вакыты","Төньяк Америка җәйге үзәк вакыты"]},"America/Mexico_City":{"long":["Төньяк Америка гадәти үзәк вакыты","Төньяк Америка җәйге үзәк вакыты"]},"America/El_Salvador":{"long":["Төньяк Америка гадәти үзәк вакыты","Төньяк Америка җәйге үзәк вакыты"]},"America/New_York":{"long":["Төньяк Америка гадәти көнчыгыш вакыты","Төньяк Америка җәйге көнчыгыш вакыты"]},"America/Nassau":{"long":["Төньяк Америка гадәти көнчыгыш вакыты","Төньяк Америка җәйге көнчыгыш вакыты"]},"America/Toronto":{"long":["Төньяк Америка гадәти көнчыгыш вакыты","Төньяк Америка җәйге көнчыгыш вакыты"]},"America/Port-au-Prince":{"long":["Төньяк Америка гадәти көнчыгыш вакыты","Төньяк Америка җәйге көнчыгыш вакыты"]},"America/Jamaica":{"long":["Төньяк Америка гадәти көнчыгыш вакыты","Төньяк Америка җәйге көнчыгыш вакыты"]},"America/Cayman":{"long":["Төньяк Америка гадәти көнчыгыш вакыты","Төньяк Америка җәйге көнчыгыш вакыты"]},"America/Panama":{"long":["Төньяк Америка гадәти көнчыгыш вакыты","Төньяк Америка җәйге көнчыгыш вакыты"]},"America/Denver":{"long":["Төньяк Америка гадәти тау вакыты","Төньяк Америка җәйге тау вакыты"]},"America/Edmonton":{"long":["Төньяк Америка гадәти тау вакыты","Төньяк Америка җәйге тау вакыты"]},"America/Hermosillo":{"long":["Төньяк Америка гадәти тау вакыты","Төньяк Америка җәйге тау вакыты"]},"America/Los_Angeles":{"long":["Төньяк Америка гадәти Тын океан вакыты","Төньяк Америка җәйге Тын океан вакыты"]},"America/Vancouver":{"long":["Төньяк Америка гадәти Тын океан вакыты","Төньяк Америка җәйге Тын океан вакыты"]},"America/Tijuana":{"long":["Төньяк Америка гадәти Тын океан вакыты","Төньяк Америка җәйге Тын океан вакыты"]},"America/Halifax":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Antigua":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Anguilla":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Aruba":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Barbados":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"Atlantic/Bermuda":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Kralendijk":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Curacao":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Dominica":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Grenada":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Thule":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Guadeloupe":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/St_Kitts":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/St_Lucia":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Marigot":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Martinique":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Montserrat":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Puerto_Rico":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Lower_Princes":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Port_of_Spain":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/St_Vincent":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/Tortola":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"America/St_Thomas":{"long":["Төньяк Америка гадәти атлантик вакыты","Төньяк Америка җәйге атлантик вакыты"]},"Europe/London":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Europe/Paris":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Andorra":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Tirane":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Vienna":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Sarajevo":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Brussels":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Zurich":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Prague":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Berlin":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Copenhagen":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Madrid":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Gibraltar":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Zagreb":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Budapest":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Rome":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Vaduz":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Luxembourg":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Monaco":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Podgorica":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Skopje":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Malta":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Amsterdam":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Oslo":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Warsaw":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Belgrade":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Stockholm":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Ljubljana":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Arctic/Longyearbyen":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Bratislava":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/San_Marino":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Africa/Tunis":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Vatican":{"long":["гадәти Үзәк Европа вакыты","җәйге Үзәк Европа вакыты"]},"Europe/Bucharest":{"long":["гадәти Көнчыгыш Европа вакыты","җәйге Көнчыгыш Европа вакыты"]},"Europe/Mariehamn":{"long":["гадәти Көнчыгыш Европа вакыты","җәйге Көнчыгыш Европа вакыты"]},"Europe/Sofia":{"long":["гадәти Көнчыгыш Европа вакыты","җәйге Көнчыгыш Европа вакыты"]},"Asia/Nicosia":{"long":["гадәти Көнчыгыш Европа вакыты","җәйге Көнчыгыш Европа вакыты"]},"Africa/Cairo":{"long":["гадәти Көнчыгыш Европа вакыты","җәйге Көнчыгыш Европа вакыты"]},"Europe/Helsinki":{"long":["гадәти Көнчыгыш Европа вакыты","җәйге Көнчыгыш Европа вакыты"]},"Europe/Athens":{"long":["гадәти Көнчыгыш Европа вакыты","җәйге Көнчыгыш Европа вакыты"]},"Asia/Amman":{"long":["гадәти Көнчыгыш Европа вакыты","җәйге Көнчыгыш Европа вакыты"]},"Asia/Beirut":{"long":["гадәти Көнчыгыш Европа вакыты","җәйге Көнчыгыш Европа вакыты"]},"Asia/Damascus":{"long":["гадәти Көнчыгыш Европа вакыты","җәйге Көнчыгыш Европа вакыты"]},"Atlantic/Canary":{"long":["гадәти Көнбатыш Европа вакыты","җәйге Көнбатыш Европа вакыты"]},"Atlantic/Faeroe":{"long":["гадәти Көнбатыш Европа вакыты","җәйге Көнбатыш Европа вакыты"]},"Atlantic/Reykjavik":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Africa/Ouagadougou":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Africa/Abidjan":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Africa/Accra":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Africa/Banjul":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Africa/Conakry":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Africa/Bamako":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Africa/Nouakchott":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Atlantic/St_Helena":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Africa/Freetown":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Africa/Dakar":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"Africa/Lome":{"long":["Гринвич уртача вакыты","Гринвич уртача вакыты"]},"UTC":{"long":["Бөтендөнья килештерелгән вакыты","Бөтендөнья килештерелгән вакыты"],"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"d MMMM, y 'ел', EEEE","long":"d MMMM, y 'ел'","medium":"d MMM, y 'ел'","short":"dd.MM.y"},"timeFormat":{"full":"H:mm:ss zzzz","long":"H:mm:ss z","medium":"H:mm:ss","short":"H:mm"},"dateTimeFormat":{"full":"{1}, {0}","long":"{1}, {0}","medium":"{1}, {0}","short":"{1}, {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"E, d","Ehm":"E h:mm a","EHm":"E, HH:mm","Ehms":"E h:mm:ss a","EHms":"E, HH:mm:ss","Gy":"G y 'ел'","GyMMM":"G y 'ел', MMM","GyMMMd":"G d MMM y 'ел'","GyMMMEd":"E, G d MMM y 'ел'","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"dd.MM","MEd":"E, dd.MM","MMM":"LLL","MMMd":"d MMM","MMMEd":"E, d MMM","MMMMd":"d MMMM","ms":"mm:ss","y":"y","yM":"MM.y","yMd":"dd.MM.y","yMEd":"E, dd.MM.y","yMMM":"MMM, y 'ел'","yMMMd":"d MMM, y 'ел'","yMMMEd":"E, d MMM, y 'ел'","yMMMM":"MMMM, y 'ел'","d MMMM, y 'ел', EEEE":"d MMMM, y 'ел', EEEE","d MMMM, y 'ел'":"d MMMM, y 'ел'","d MMM, y 'ел'":"d MMM, y 'ел'","dd.MM.y":"dd.MM.y","H:mm:ss zzzz":"H:mm:ss zzzz","H:mm:ss z":"H:mm:ss z","H:mm:ss":"H:mm:ss","H:mm":"H:mm","d MMMM, y 'ел', EEEE, H:mm:ss zzzz":"d MMMM, y 'ел', EEEE, H:mm:ss zzzz","d MMMM, y 'ел', H:mm:ss zzzz":"d MMMM, y 'ел', H:mm:ss zzzz","d MMM, y 'ел', H:mm:ss zzzz":"d MMM, y 'ел', H:mm:ss zzzz","dd.MM.y, H:mm:ss zzzz":"dd.MM.y, H:mm:ss zzzz","d, H:mm:ss zzzz":"d, H:mm:ss zzzz","E, H:mm:ss zzzz":"ccc, H:mm:ss zzzz","Ed, H:mm:ss zzzz":"E, d, H:mm:ss zzzz","Gy, H:mm:ss zzzz":"G y 'ел', H:mm:ss zzzz","GyMMM, H:mm:ss zzzz":"G y 'ел', MMM, H:mm:ss zzzz","GyMMMd, H:mm:ss zzzz":"G d MMM y 'ел', H:mm:ss zzzz","GyMMMEd, H:mm:ss zzzz":"E, G d MMM y 'ел', H:mm:ss zzzz","M, H:mm:ss zzzz":"L, H:mm:ss zzzz","Md, H:mm:ss zzzz":"dd.MM, H:mm:ss zzzz","MEd, H:mm:ss zzzz":"E, dd.MM, H:mm:ss zzzz","MMM, H:mm:ss zzzz":"LLL, H:mm:ss zzzz","MMMd, H:mm:ss zzzz":"d MMM, H:mm:ss zzzz","MMMEd, H:mm:ss zzzz":"E, d MMM, H:mm:ss zzzz","MMMMd, H:mm:ss zzzz":"d MMMM, H:mm:ss zzzz","y, H:mm:ss zzzz":"y, H:mm:ss zzzz","yM, H:mm:ss zzzz":"MM.y, H:mm:ss zzzz","yMd, H:mm:ss zzzz":"dd.MM.y, H:mm:ss zzzz","yMEd, H:mm:ss zzzz":"E, dd.MM.y, H:mm:ss zzzz","yMMM, H:mm:ss zzzz":"MMM, y 'ел', H:mm:ss zzzz","yMMMd, H:mm:ss zzzz":"d MMM, y 'ел', H:mm:ss zzzz","yMMMEd, H:mm:ss zzzz":"E, d MMM, y 'ел', H:mm:ss zzzz","yMMMM, H:mm:ss zzzz":"MMMM, y 'ел', H:mm:ss zzzz","d MMMM, y 'ел', EEEE, H:mm:ss z":"d MMMM, y 'ел', EEEE, H:mm:ss z","d MMMM, y 'ел', H:mm:ss z":"d MMMM, y 'ел', H:mm:ss z","d MMM, y 'ел', H:mm:ss z":"d MMM, y 'ел', H:mm:ss z","dd.MM.y, H:mm:ss z":"dd.MM.y, H:mm:ss z","d, H:mm:ss z":"d, H:mm:ss z","E, H:mm:ss z":"ccc, H:mm:ss z","Ed, H:mm:ss z":"E, d, H:mm:ss z","Gy, H:mm:ss z":"G y 'ел', H:mm:ss z","GyMMM, H:mm:ss z":"G y 'ел', MMM, H:mm:ss z","GyMMMd, H:mm:ss z":"G d MMM y 'ел', H:mm:ss z","GyMMMEd, H:mm:ss z":"E, G d MMM y 'ел', H:mm:ss z","M, H:mm:ss z":"L, H:mm:ss z","Md, H:mm:ss z":"dd.MM, H:mm:ss z","MEd, H:mm:ss z":"E, dd.MM, H:mm:ss z","MMM, H:mm:ss z":"LLL, H:mm:ss z","MMMd, H:mm:ss z":"d MMM, H:mm:ss z","MMMEd, H:mm:ss z":"E, d MMM, H:mm:ss z","MMMMd, H:mm:ss z":"d MMMM, H:mm:ss z","y, H:mm:ss z":"y, H:mm:ss z","yM, H:mm:ss z":"MM.y, H:mm:ss z","yMd, H:mm:ss z":"dd.MM.y, H:mm:ss z","yMEd, H:mm:ss z":"E, dd.MM.y, H:mm:ss z","yMMM, H:mm:ss z":"MMM, y 'ел', H:mm:ss z","yMMMd, H:mm:ss z":"d MMM, y 'ел', H:mm:ss z","yMMMEd, H:mm:ss z":"E, d MMM, y 'ел', H:mm:ss z","yMMMM, H:mm:ss z":"MMMM, y 'ел', H:mm:ss z","d MMMM, y 'ел', EEEE, H:mm:ss":"d MMMM, y 'ел', EEEE, H:mm:ss","d MMMM, y 'ел', H:mm:ss":"d MMMM, y 'ел', H:mm:ss","d MMM, y 'ел', H:mm:ss":"d MMM, y 'ел', H:mm:ss","dd.MM.y, H:mm:ss":"dd.MM.y, H:mm:ss","d, H:mm:ss":"d, H:mm:ss","E, H:mm:ss":"ccc, H:mm:ss","Ed, H:mm:ss":"E, d, H:mm:ss","Gy, H:mm:ss":"G y 'ел', H:mm:ss","GyMMM, H:mm:ss":"G y 'ел', MMM, H:mm:ss","GyMMMd, H:mm:ss":"G d MMM y 'ел', H:mm:ss","GyMMMEd, H:mm:ss":"E, G d MMM y 'ел', H:mm:ss","M, H:mm:ss":"L, H:mm:ss","Md, H:mm:ss":"dd.MM, H:mm:ss","MEd, H:mm:ss":"E, dd.MM, H:mm:ss","MMM, H:mm:ss":"LLL, H:mm:ss","MMMd, H:mm:ss":"d MMM, H:mm:ss","MMMEd, H:mm:ss":"E, d MMM, H:mm:ss","MMMMd, H:mm:ss":"d MMMM, H:mm:ss","y, H:mm:ss":"y, H:mm:ss","yM, H:mm:ss":"MM.y, H:mm:ss","yMd, H:mm:ss":"dd.MM.y, H:mm:ss","yMEd, H:mm:ss":"E, dd.MM.y, H:mm:ss","yMMM, H:mm:ss":"MMM, y 'ел', H:mm:ss","yMMMd, H:mm:ss":"d MMM, y 'ел', H:mm:ss","yMMMEd, H:mm:ss":"E, d MMM, y 'ел', H:mm:ss","yMMMM, H:mm:ss":"MMMM, y 'ел', H:mm:ss","d MMMM, y 'ел', EEEE, H:mm":"d MMMM, y 'ел', EEEE, H:mm","d MMMM, y 'ел', H:mm":"d MMMM, y 'ел', H:mm","d MMM, y 'ел', H:mm":"d MMM, y 'ел', H:mm","dd.MM.y, H:mm":"dd.MM.y, H:mm","d, H:mm":"d, H:mm","E, H:mm":"ccc, H:mm","Ed, H:mm":"E, d, H:mm","Gy, H:mm":"G y 'ел', H:mm","GyMMM, H:mm":"G y 'ел', MMM, H:mm","GyMMMd, H:mm":"G d MMM y 'ел', H:mm","GyMMMEd, H:mm":"E, G d MMM y 'ел', H:mm","M, H:mm":"L, H:mm","Md, H:mm":"dd.MM, H:mm","MEd, H:mm":"E, dd.MM, H:mm","MMM, H:mm":"LLL, H:mm","MMMd, H:mm":"d MMM, H:mm","MMMEd, H:mm":"E, d MMM, H:mm","MMMMd, H:mm":"d MMMM, H:mm","y, H:mm":"y, H:mm","yM, H:mm":"MM.y, H:mm","yMd, H:mm":"dd.MM.y, H:mm","yMEd, H:mm":"E, dd.MM.y, H:mm","yMMM, H:mm":"MMM, y 'ел', H:mm","yMMMd, H:mm":"d MMM, y 'ел', H:mm","yMMMEd, H:mm":"E, d MMM, y 'ел', H:mm","yMMMM, H:mm":"MMMM, y 'ел', H:mm","d MMMM, y 'ел', EEEE, Bh":"d MMMM, y 'ел', EEEE, h B","d MMMM, y 'ел', Bh":"d MMMM, y 'ел', h B","d MMM, y 'ел', Bh":"d MMM, y 'ел', h B","dd.MM.y, Bh":"dd.MM.y, h B","d, Bh":"d, h B","E, Bh":"ccc, h B","Ed, Bh":"E, d, h B","Gy, Bh":"G y 'ел', h B","GyMMM, Bh":"G y 'ел', MMM, h B","GyMMMd, Bh":"G d MMM y 'ел', h B","GyMMMEd, Bh":"E, G d MMM y 'ел', h B","M, Bh":"L, h B","Md, Bh":"dd.MM, h B","MEd, Bh":"E, dd.MM, h B","MMM, Bh":"LLL, h B","MMMd, Bh":"d MMM, h B","MMMEd, Bh":"E, d MMM, h B","MMMMd, Bh":"d MMMM, h B","y, Bh":"y, h B","yM, Bh":"MM.y, h B","yMd, Bh":"dd.MM.y, h B","yMEd, Bh":"E, dd.MM.y, h B","yMMM, Bh":"MMM, y 'ел', h B","yMMMd, Bh":"d MMM, y 'ел', h B","yMMMEd, Bh":"E, d MMM, y 'ел', h B","yMMMM, Bh":"MMMM, y 'ел', h B","d MMMM, y 'ел', EEEE, Bhm":"d MMMM, y 'ел', EEEE, h:mm B","d MMMM, y 'ел', Bhm":"d MMMM, y 'ел', h:mm B","d MMM, y 'ел', Bhm":"d MMM, y 'ел', h:mm B","dd.MM.y, Bhm":"dd.MM.y, h:mm B","d, Bhm":"d, h:mm B","E, Bhm":"ccc, h:mm B","Ed, Bhm":"E, d, h:mm B","Gy, Bhm":"G y 'ел', h:mm B","GyMMM, Bhm":"G y 'ел', MMM, h:mm B","GyMMMd, Bhm":"G d MMM y 'ел', h:mm B","GyMMMEd, Bhm":"E, G d MMM y 'ел', h:mm B","M, Bhm":"L, h:mm B","Md, Bhm":"dd.MM, h:mm B","MEd, Bhm":"E, dd.MM, h:mm B","MMM, Bhm":"LLL, h:mm B","MMMd, Bhm":"d MMM, h:mm B","MMMEd, Bhm":"E, d MMM, h:mm B","MMMMd, Bhm":"d MMMM, h:mm B","y, Bhm":"y, h:mm B","yM, Bhm":"MM.y, h:mm B","yMd, Bhm":"dd.MM.y, h:mm B","yMEd, Bhm":"E, dd.MM.y, h:mm B","yMMM, Bhm":"MMM, y 'ел', h:mm B","yMMMd, Bhm":"d MMM, y 'ел', h:mm B","yMMMEd, Bhm":"E, d MMM, y 'ел', h:mm B","yMMMM, Bhm":"MMMM, y 'ел', h:mm B","d MMMM, y 'ел', EEEE, Bhms":"d MMMM, y 'ел', EEEE, h:mm:ss B","d MMMM, y 'ел', Bhms":"d MMMM, y 'ел', h:mm:ss B","d MMM, y 'ел', Bhms":"d MMM, y 'ел', h:mm:ss B","dd.MM.y, Bhms":"dd.MM.y, h:mm:ss B","d, Bhms":"d, h:mm:ss B","E, Bhms":"ccc, h:mm:ss B","Ed, Bhms":"E, d, h:mm:ss B","Gy, Bhms":"G y 'ел', h:mm:ss B","GyMMM, Bhms":"G y 'ел', MMM, h:mm:ss B","GyMMMd, Bhms":"G d MMM y 'ел', h:mm:ss B","GyMMMEd, Bhms":"E, G d MMM y 'ел', h:mm:ss B","M, Bhms":"L, h:mm:ss B","Md, Bhms":"dd.MM, h:mm:ss B","MEd, Bhms":"E, dd.MM, h:mm:ss B","MMM, Bhms":"LLL, h:mm:ss B","MMMd, Bhms":"d MMM, h:mm:ss B","MMMEd, Bhms":"E, d MMM, h:mm:ss B","MMMMd, Bhms":"d MMMM, h:mm:ss B","y, Bhms":"y, h:mm:ss B","yM, Bhms":"MM.y, h:mm:ss B","yMd, Bhms":"dd.MM.y, h:mm:ss B","yMEd, Bhms":"E, dd.MM.y, h:mm:ss B","yMMM, Bhms":"MMM, y 'ел', h:mm:ss B","yMMMd, Bhms":"d MMM, y 'ел', h:mm:ss B","yMMMEd, Bhms":"E, d MMM, y 'ел', h:mm:ss B","yMMMM, Bhms":"MMMM, y 'ел', h:mm:ss B","d MMMM, y 'ел', EEEE, h":"d MMMM, y 'ел', EEEE, h a","d MMMM, y 'ел', h":"d MMMM, y 'ел', h a","d MMM, y 'ел', h":"d MMM, y 'ел', h a","dd.MM.y, h":"dd.MM.y, h a","d, h":"d, h a","E, h":"ccc, h a","Ed, h":"E, d, h a","Gy, h":"G y 'ел', h a","GyMMM, h":"G y 'ел', MMM, h a","GyMMMd, h":"G d MMM y 'ел', h a","GyMMMEd, h":"E, G d MMM y 'ел', h a","M, h":"L, h a","Md, h":"dd.MM, h a","MEd, h":"E, dd.MM, h a","MMM, h":"LLL, h a","MMMd, h":"d MMM, h a","MMMEd, h":"E, d MMM, h a","MMMMd, h":"d MMMM, h a","y, h":"y, h a","yM, h":"MM.y, h a","yMd, h":"dd.MM.y, h a","yMEd, h":"E, dd.MM.y, h a","yMMM, h":"MMM, y 'ел', h a","yMMMd, h":"d MMM, y 'ел', h a","yMMMEd, h":"E, d MMM, y 'ел', h a","yMMMM, h":"MMMM, y 'ел', h a","d MMMM, y 'ел', EEEE, H":"d MMMM, y 'ел', EEEE, HH","d MMMM, y 'ел', H":"d MMMM, y 'ел', HH","d MMM, y 'ел', H":"d MMM, y 'ел', HH","dd.MM.y, H":"dd.MM.y, HH","d, H":"d, HH","E, H":"ccc, HH","Ed, H":"E, d, HH","Gy, H":"G y 'ел', HH","GyMMM, H":"G y 'ел', MMM, HH","GyMMMd, H":"G d MMM y 'ел', HH","GyMMMEd, H":"E, G d MMM y 'ел', HH","M, H":"L, HH","Md, H":"dd.MM, HH","MEd, H":"E, dd.MM, HH","MMM, H":"LLL, HH","MMMd, H":"d MMM, HH","MMMEd, H":"E, d MMM, HH","MMMMd, H":"d MMMM, HH","y, H":"y, HH","yM, H":"MM.y, HH","yMd, H":"dd.MM.y, HH","yMEd, H":"E, dd.MM.y, HH","yMMM, H":"MMM, y 'ел', HH","yMMMd, H":"d MMM, y 'ел', HH","yMMMEd, H":"E, d MMM, y 'ел', HH","yMMMM, H":"MMMM, y 'ел', HH","d MMMM, y 'ел', EEEE, hm":"d MMMM, y 'ел', EEEE, h:mm a","d MMMM, y 'ел', hm":"d MMMM, y 'ел', h:mm a","d MMM, y 'ел', hm":"d MMM, y 'ел', h:mm a","dd.MM.y, hm":"dd.MM.y, h:mm a","d, hm":"d, h:mm a","E, hm":"ccc, h:mm a","Ed, hm":"E, d, h:mm a","Gy, hm":"G y 'ел', h:mm a","GyMMM, hm":"G y 'ел', MMM, h:mm a","GyMMMd, hm":"G d MMM y 'ел', h:mm a","GyMMMEd, hm":"E, G d MMM y 'ел', h:mm a","M, hm":"L, h:mm a","Md, hm":"dd.MM, h:mm a","MEd, hm":"E, dd.MM, h:mm a","MMM, hm":"LLL, h:mm a","MMMd, hm":"d MMM, h:mm a","MMMEd, hm":"E, d MMM, h:mm a","MMMMd, hm":"d MMMM, h:mm a","y, hm":"y, h:mm a","yM, hm":"MM.y, h:mm a","yMd, hm":"dd.MM.y, h:mm a","yMEd, hm":"E, dd.MM.y, h:mm a","yMMM, hm":"MMM, y 'ел', h:mm a","yMMMd, hm":"d MMM, y 'ел', h:mm a","yMMMEd, hm":"E, d MMM, y 'ел', h:mm a","yMMMM, hm":"MMMM, y 'ел', h:mm a","d MMMM, y 'ел', EEEE, Hm":"d MMMM, y 'ел', EEEE, HH:mm","d MMMM, y 'ел', Hm":"d MMMM, y 'ел', HH:mm","d MMM, y 'ел', Hm":"d MMM, y 'ел', HH:mm","dd.MM.y, Hm":"dd.MM.y, HH:mm","d, Hm":"d, HH:mm","E, Hm":"ccc, HH:mm","Ed, Hm":"E, d, HH:mm","Gy, Hm":"G y 'ел', HH:mm","GyMMM, Hm":"G y 'ел', MMM, HH:mm","GyMMMd, Hm":"G d MMM y 'ел', HH:mm","GyMMMEd, Hm":"E, G d MMM y 'ел', HH:mm","M, Hm":"L, HH:mm","Md, Hm":"dd.MM, HH:mm","MEd, Hm":"E, dd.MM, HH:mm","MMM, Hm":"LLL, HH:mm","MMMd, Hm":"d MMM, HH:mm","MMMEd, Hm":"E, d MMM, HH:mm","MMMMd, Hm":"d MMMM, HH:mm","y, Hm":"y, HH:mm","yM, Hm":"MM.y, HH:mm","yMd, Hm":"dd.MM.y, HH:mm","yMEd, Hm":"E, dd.MM.y, HH:mm","yMMM, Hm":"MMM, y 'ел', HH:mm","yMMMd, Hm":"d MMM, y 'ел', HH:mm","yMMMEd, Hm":"E, d MMM, y 'ел', HH:mm","yMMMM, Hm":"MMMM, y 'ел', HH:mm","d MMMM, y 'ел', EEEE, hms":"d MMMM, y 'ел', EEEE, h:mm:ss a","d MMMM, y 'ел', hms":"d MMMM, y 'ел', h:mm:ss a","d MMM, y 'ел', hms":"d MMM, y 'ел', h:mm:ss a","dd.MM.y, hms":"dd.MM.y, h:mm:ss a","d, hms":"d, h:mm:ss a","E, hms":"ccc, h:mm:ss a","Ed, hms":"E, d, h:mm:ss a","Gy, hms":"G y 'ел', h:mm:ss a","GyMMM, hms":"G y 'ел', MMM, h:mm:ss a","GyMMMd, hms":"G d MMM y 'ел', h:mm:ss a","GyMMMEd, hms":"E, G d MMM y 'ел', h:mm:ss a","M, hms":"L, h:mm:ss a","Md, hms":"dd.MM, h:mm:ss a","MEd, hms":"E, dd.MM, h:mm:ss a","MMM, hms":"LLL, h:mm:ss a","MMMd, hms":"d MMM, h:mm:ss a","MMMEd, hms":"E, d MMM, h:mm:ss a","MMMMd, hms":"d MMMM, h:mm:ss a","y, hms":"y, h:mm:ss a","yM, hms":"MM.y, h:mm:ss a","yMd, hms":"dd.MM.y, h:mm:ss a","yMEd, hms":"E, dd.MM.y, h:mm:ss a","yMMM, hms":"MMM, y 'ел', h:mm:ss a","yMMMd, hms":"d MMM, y 'ел', h:mm:ss a","yMMMEd, hms":"E, d MMM, y 'ел', h:mm:ss a","yMMMM, hms":"MMMM, y 'ел', h:mm:ss a","d MMMM, y 'ел', EEEE, Hms":"d MMMM, y 'ел', EEEE, HH:mm:ss","d MMMM, y 'ел', Hms":"d MMMM, y 'ел', HH:mm:ss","d MMM, y 'ел', Hms":"d MMM, y 'ел', HH:mm:ss","dd.MM.y, Hms":"dd.MM.y, HH:mm:ss","d, Hms":"d, HH:mm:ss","E, Hms":"ccc, HH:mm:ss","Ed, Hms":"E, d, HH:mm:ss","Gy, Hms":"G y 'ел', HH:mm:ss","GyMMM, Hms":"G y 'ел', MMM, HH:mm:ss","GyMMMd, Hms":"G d MMM y 'ел', HH:mm:ss","GyMMMEd, Hms":"E, G d MMM y 'ел', HH:mm:ss","M, Hms":"L, HH:mm:ss","Md, Hms":"dd.MM, HH:mm:ss","MEd, Hms":"E, dd.MM, HH:mm:ss","MMM, Hms":"LLL, HH:mm:ss","MMMd, Hms":"d MMM, HH:mm:ss","MMMEd, Hms":"E, d MMM, HH:mm:ss","MMMMd, Hms":"d MMMM, HH:mm:ss","y, Hms":"y, HH:mm:ss","yM, Hms":"MM.y, HH:mm:ss","yMd, Hms":"dd.MM.y, HH:mm:ss","yMEd, Hms":"E, dd.MM.y, HH:mm:ss","yMMM, Hms":"MMM, y 'ел', HH:mm:ss","yMMMd, Hms":"d MMM, y 'ел', HH:mm:ss","yMMMEd, Hms":"E, d MMM, y 'ел', HH:mm:ss","yMMMM, Hms":"MMMM, y 'ел', HH:mm:ss","d MMMM, y 'ел', EEEE, hmsv":"d MMMM, y 'ел', EEEE, h:mm:ss a v","d MMMM, y 'ел', hmsv":"d MMMM, y 'ел', h:mm:ss a v","d MMM, y 'ел', hmsv":"d MMM, y 'ел', h:mm:ss a v","dd.MM.y, hmsv":"dd.MM.y, h:mm:ss a v","d, hmsv":"d, h:mm:ss a v","E, hmsv":"ccc, h:mm:ss a v","Ed, hmsv":"E, d, h:mm:ss a v","Gy, hmsv":"G y 'ел', h:mm:ss a v","GyMMM, hmsv":"G y 'ел', MMM, h:mm:ss a v","GyMMMd, hmsv":"G d MMM y 'ел', h:mm:ss a v","GyMMMEd, hmsv":"E, G d MMM y 'ел', h:mm:ss a v","M, hmsv":"L, h:mm:ss a v","Md, hmsv":"dd.MM, h:mm:ss a v","MEd, hmsv":"E, dd.MM, h:mm:ss a v","MMM, hmsv":"LLL, h:mm:ss a v","MMMd, hmsv":"d MMM, h:mm:ss a v","MMMEd, hmsv":"E, d MMM, h:mm:ss a v","MMMMd, hmsv":"d MMMM, h:mm:ss a v","y, hmsv":"y, h:mm:ss a v","yM, hmsv":"MM.y, h:mm:ss a v","yMd, hmsv":"dd.MM.y, h:mm:ss a v","yMEd, hmsv":"E, dd.MM.y, h:mm:ss a v","yMMM, hmsv":"MMM, y 'ел', h:mm:ss a v","yMMMd, hmsv":"d MMM, y 'ел', h:mm:ss a v","yMMMEd, hmsv":"E, d MMM, y 'ел', h:mm:ss a v","yMMMM, hmsv":"MMMM, y 'ел', h:mm:ss a v","d MMMM, y 'ел', EEEE, Hmsv":"d MMMM, y 'ел', EEEE, HH:mm:ss v","d MMMM, y 'ел', Hmsv":"d MMMM, y 'ел', HH:mm:ss v","d MMM, y 'ел', Hmsv":"d MMM, y 'ел', HH:mm:ss v","dd.MM.y, Hmsv":"dd.MM.y, HH:mm:ss v","d, Hmsv":"d, HH:mm:ss v","E, Hmsv":"ccc, HH:mm:ss v","Ed, Hmsv":"E, d, HH:mm:ss v","Gy, Hmsv":"G y 'ел', HH:mm:ss v","GyMMM, Hmsv":"G y 'ел', MMM, HH:mm:ss v","GyMMMd, Hmsv":"G d MMM y 'ел', HH:mm:ss v","GyMMMEd, Hmsv":"E, G d MMM y 'ел', HH:mm:ss v","M, Hmsv":"L, HH:mm:ss v","Md, Hmsv":"dd.MM, HH:mm:ss v","MEd, Hmsv":"E, dd.MM, HH:mm:ss v","MMM, Hmsv":"LLL, HH:mm:ss v","MMMd, Hmsv":"d MMM, HH:mm:ss v","MMMEd, Hmsv":"E, d MMM, HH:mm:ss v","MMMMd, Hmsv":"d MMMM, HH:mm:ss v","y, Hmsv":"y, HH:mm:ss v","yM, Hmsv":"MM.y, HH:mm:ss v","yMd, Hmsv":"dd.MM.y, HH:mm:ss v","yMEd, Hmsv":"E, dd.MM.y, HH:mm:ss v","yMMM, Hmsv":"MMM, y 'ел', HH:mm:ss v","yMMMd, Hmsv":"d MMM, y 'ел', HH:mm:ss v","yMMMEd, Hmsv":"E, d MMM, y 'ел', HH:mm:ss v","yMMMM, Hmsv":"MMMM, y 'ел', HH:mm:ss v","d MMMM, y 'ел', EEEE, hmv":"d MMMM, y 'ел', EEEE, h:mm a v","d MMMM, y 'ел', hmv":"d MMMM, y 'ел', h:mm a v","d MMM, y 'ел', hmv":"d MMM, y 'ел', h:mm a v","dd.MM.y, hmv":"dd.MM.y, h:mm a v","d, hmv":"d, h:mm a v","E, hmv":"ccc, h:mm a v","Ed, hmv":"E, d, h:mm a v","Gy, hmv":"G y 'ел', h:mm a v","GyMMM, hmv":"G y 'ел', MMM, h:mm a v","GyMMMd, hmv":"G d MMM y 'ел', h:mm a v","GyMMMEd, hmv":"E, G d MMM y 'ел', h:mm a v","M, hmv":"L, h:mm a v","Md, hmv":"dd.MM, h:mm a v","MEd, hmv":"E, dd.MM, h:mm a v","MMM, hmv":"LLL, h:mm a v","MMMd, hmv":"d MMM, h:mm a v","MMMEd, hmv":"E, d MMM, h:mm a v","MMMMd, hmv":"d MMMM, h:mm a v","y, hmv":"y, h:mm a v","yM, hmv":"MM.y, h:mm a v","yMd, hmv":"dd.MM.y, h:mm a v","yMEd, hmv":"E, dd.MM.y, h:mm a v","yMMM, hmv":"MMM, y 'ел', h:mm a v","yMMMd, hmv":"d MMM, y 'ел', h:mm a v","yMMMEd, hmv":"E, d MMM, y 'ел', h:mm a v","yMMMM, hmv":"MMMM, y 'ел', h:mm a v","d MMMM, y 'ел', EEEE, Hmv":"d MMMM, y 'ел', EEEE, HH:mm v","d MMMM, y 'ел', Hmv":"d MMMM, y 'ел', HH:mm v","d MMM, y 'ел', Hmv":"d MMM, y 'ел', HH:mm v","dd.MM.y, Hmv":"dd.MM.y, HH:mm v","d, Hmv":"d, HH:mm v","E, Hmv":"ccc, HH:mm v","Ed, Hmv":"E, d, HH:mm v","Gy, Hmv":"G y 'ел', HH:mm v","GyMMM, Hmv":"G y 'ел', MMM, HH:mm v","GyMMMd, Hmv":"G d MMM y 'ел', HH:mm v","GyMMMEd, Hmv":"E, G d MMM y 'ел', HH:mm v","M, Hmv":"L, HH:mm v","Md, Hmv":"dd.MM, HH:mm v","MEd, Hmv":"E, dd.MM, HH:mm v","MMM, Hmv":"LLL, HH:mm v","MMMd, Hmv":"d MMM, HH:mm v","MMMEd, Hmv":"E, d MMM, HH:mm v","MMMMd, Hmv":"d MMMM, HH:mm v","y, Hmv":"y, HH:mm v","yM, Hmv":"MM.y, HH:mm v","yMd, Hmv":"dd.MM.y, HH:mm v","yMEd, Hmv":"E, dd.MM.y, HH:mm v","yMMM, Hmv":"MMM, y 'ел', HH:mm v","yMMMd, Hmv":"d MMM, y 'ел', HH:mm v","yMMMEd, Hmv":"E, d MMM, y 'ел', HH:mm v","yMMMM, Hmv":"MMMM, y 'ел', HH:mm v","d MMMM, y 'ел', EEEE, ms":"d MMMM, y 'ел', EEEE, mm:ss","d MMMM, y 'ел', ms":"d MMMM, y 'ел', mm:ss","d MMM, y 'ел', ms":"d MMM, y 'ел', mm:ss","dd.MM.y, ms":"dd.MM.y, mm:ss","d, ms":"d, mm:ss","E, ms":"ccc, mm:ss","Ed, ms":"E, d, mm:ss","Gy, ms":"G y 'ел', mm:ss","GyMMM, ms":"G y 'ел', MMM, mm:ss","GyMMMd, ms":"G d MMM y 'ел', mm:ss","GyMMMEd, ms":"E, G d MMM y 'ел', mm:ss","M, ms":"L, mm:ss","Md, ms":"dd.MM, mm:ss","MEd, ms":"E, dd.MM, mm:ss","MMM, ms":"LLL, mm:ss","MMMd, ms":"d MMM, mm:ss","MMMEd, ms":"E, d MMM, mm:ss","MMMMd, ms":"d MMMM, mm:ss","y, ms":"y, mm:ss","yM, ms":"MM.y, mm:ss","yMd, ms":"dd.MM.y, mm:ss","yMEd, ms":"E, dd.MM.y, mm:ss","yMMM, ms":"MMM, y 'ел', mm:ss","yMMMd, ms":"d MMM, y 'ел', mm:ss","yMMMEd, ms":"E, d MMM, y 'ел', mm:ss","yMMMM, ms":"MMMM, y 'ел', mm:ss"}},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h–h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm–h:mm B","m":"h:mm–h:mm B"},"d":{"d":"d–d"},"Gy":{"G":"G y – G y","y":"G y–y"},"GyM":{"G":"GGGGG y-MM – GGGGG y-MM","M":"GGGGG y-MM – y-MM","y":"GGGGG y-MM – y-MM"},"GyMd":{"d":"GGGGG y-MM-dd – y-MM-dd","G":"GGGGG y-MM-dd – GGGGG y-MM-dd","M":"GGGGG y-MM-dd – y-MM-dd","y":"GGGGG y-MM-dd – y-MM-dd"},"GyMEd":{"d":"GGGGG y-MM-dd, E – y-MM-dd, E","G":"GGGGG y-MM-dd, E – GGGGG y-MM-dd, E","M":"GGGGG y-MM-dd, E – y-MM-dd, E","y":"GGGGG y-MM-dd, E – y-MM-dd, E"},"GyMMM":{"G":"G y MMM – G y MMM","M":"G y MMM–MMM","y":"G y MMM – y MMM"},"GyMMMd":{"d":"G y MMM d–d","G":"G y MMM d – G y MMM d","M":"G y MMM d – MMM d","y":"G y MMM d – y MMM d"},"GyMMMEd":{"d":"G y MMM d, E – MMM d, E","G":"G y MMM d, E – G y MMM d, E","M":"G y MMM d, E – MMM d, E","y":"G y MMM d, E – y MMM d, E"},"h":{"a":"h a – h a","h":"h–h a"},"H":{"H":"HH–HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm–h:mm a","m":"h:mm–h:mm a"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"HH:mm–HH:mm v","m":"HH:mm–HH:mm v"},"hv":{"a":"h a – h a v","h":"h–h a v"},"Hv":{"H":"HH–HH v"},"M":{"M":"MM–MM"},"Md":{"d":"dd.MM – dd.MM","M":"dd.MM – dd.MM"},"MEd":{"d":"E, dd.MM – E, dd.MM","M":"E, dd.MM – E, dd.MM"},"MMM":{"M":"LLL–LLL"},"MMMd":{"d":"d–d MMM","M":"d MMM – d MMM"},"MMMEd":{"d":"E, d MMM – E, d MMM","M":"E, d MMM – E, d MMM"},"y":{"y":"y–y"},"yM":{"M":"MM.y – MM.y","y":"MM.y – MM.y"},"yMd":{"d":"dd.MM.y – dd.MM.y","M":"dd.MM.y – dd.MM.y","y":"dd.MM.y – dd.MM.y"},"yMEd":{"d":"E, dd.MM.y – E, dd.MM.y","M":"E, dd.MM.y – E, dd.MM.y","y":"E, dd.MM.y – E, dd.MM.y"},"yMMM":{"M":"MMM – MMM, y 'ел'","y":"MMM, y 'ел' - MMM, y 'ел'"},"yMMMd":{"d":"d–d MMM, y 'ел'","M":"d MMM – d MMM, y 'ел'","y":"d MMM, y 'ел' – d MMM, y 'ел'"},"yMMMEd":{"d":"E, d MMM – E, d MMM, y 'ел'","M":"E, d MMM – E, d MMM, y 'ел'","y":"E, d MMM, y 'ел' – E, d MMM, y 'ел'"},"yMMMM":{"M":"MMMM – MMMM, y 'ел'","y":"MMMM, y 'ел' – MMMM, y 'ел'"}},"hourCycle":"h23","nu":["latn"],"ca":["gregory"],"hc":["h23"]},"locale":"tt"}
)
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
