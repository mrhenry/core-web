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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("ksh").length
)) {
// Intl.DateTimeFormat.~locale.ksh
/* @generated */	

  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"am":"v.M.","pm":"n.M.","weekday":{"narrow":["S","M","D","M","D","F","S"],"short":["Su.","Mo.","Di.","Me.","Du.","Fr.","Sa."],"long":["Sunndaach","Mohndaach","Dinnsdaach","Metwoch","Dunnersdaach","Friidaach","Samsdaach"]},"era":{"narrow":{"BC":"vC","AD":"nC"},"short":{"BC":"v. Chr.","AD":"n. Chr."},"long":{"BC":"vür Krestos","AD":"noh Krestos"}},"month":{"narrow":["J","F","M","A","M","J","J","O","S","O","N","D"],"short":["Jan","Fäb","Mäz","Apr","Mai","Jun","Jul","Ouj","Säp","Okt","Nov","Dez"],"long":["Jannewa","Fäbrowa","Määz","Aprell","Mai","Juuni","Juuli","Oujoß","Septämber","Oktohber","Novämber","Dezämber"]},"timeZoneName":{"Africa/Maputo":{"long":["Zentraal-Affrekaanesche Zigg","Zentraal-Affrekaanesche Zigg"]},"Africa/Bujumbura":{"long":["Zentraal-Affrekaanesche Zigg","Zentraal-Affrekaanesche Zigg"]},"Africa/Gaborone":{"long":["Zentraal-Affrekaanesche Zigg","Zentraal-Affrekaanesche Zigg"]},"Africa/Lubumbashi":{"long":["Zentraal-Affrekaanesche Zigg","Zentraal-Affrekaanesche Zigg"]},"Africa/Blantyre":{"long":["Zentraal-Affrekaanesche Zigg","Zentraal-Affrekaanesche Zigg"]},"Africa/Kigali":{"long":["Zentraal-Affrekaanesche Zigg","Zentraal-Affrekaanesche Zigg"]},"Africa/Lusaka":{"long":["Zentraal-Affrekaanesche Zigg","Zentraal-Affrekaanesche Zigg"]},"Africa/Harare":{"long":["Zentraal-Affrekaanesche Zigg","Zentraal-Affrekaanesche Zigg"]},"Africa/Nairobi":{"long":["Oß-Affrekaanesche Zigg","Oß-Affrekaanesche Zigg"]},"Africa/Djibouti":{"long":["Oß-Affrekaanesche Zigg","Oß-Affrekaanesche Zigg"]},"Africa/Asmera":{"long":["Oß-Affrekaanesche Zigg","Oß-Affrekaanesche Zigg"]},"Africa/Addis_Ababa":{"long":["Oß-Affrekaanesche Zigg","Oß-Affrekaanesche Zigg"]},"Indian/Comoro":{"long":["Oß-Affrekaanesche Zigg","Oß-Affrekaanesche Zigg"]},"Indian/Antananarivo":{"long":["Oß-Affrekaanesche Zigg","Oß-Affrekaanesche Zigg"]},"Africa/Mogadishu":{"long":["Oß-Affrekaanesche Zigg","Oß-Affrekaanesche Zigg"]},"Africa/Dar_es_Salaam":{"long":["Oß-Affrekaanesche Zigg","Oß-Affrekaanesche Zigg"]},"Africa/Kampala":{"long":["Oß-Affrekaanesche Zigg","Oß-Affrekaanesche Zigg"]},"Indian/Mayotte":{"long":["Oß-Affrekaanesche Zigg","Oß-Affrekaanesche Zigg"]},"Africa/Johannesburg":{"long":["Söd-Affrekaanesche Zigg","Söd-Affrekaanesche Zigg"]},"Africa/Maseru":{"long":["Söd-Affrekaanesche Zigg","Söd-Affrekaanesche Zigg"]},"Africa/Mbabane":{"long":["Söd-Affrekaanesche Zigg","Söd-Affrekaanesche Zigg"]},"Africa/Lagos":{"long":["Jewöhnlijje Wäß-Affrekaanesche Zigg","Wäß-Affrekaanesche Sommerzigg"]},"Africa/Luanda":{"long":["Jewöhnlijje Wäß-Affrekaanesche Zigg","Wäß-Affrekaanesche Sommerzigg"]},"Africa/Porto-Novo":{"long":["Jewöhnlijje Wäß-Affrekaanesche Zigg","Wäß-Affrekaanesche Sommerzigg"]},"Africa/Kinshasa":{"long":["Jewöhnlijje Wäß-Affrekaanesche Zigg","Wäß-Affrekaanesche Sommerzigg"]},"Africa/Bangui":{"long":["Jewöhnlijje Wäß-Affrekaanesche Zigg","Wäß-Affrekaanesche Sommerzigg"]},"Africa/Brazzaville":{"long":["Jewöhnlijje Wäß-Affrekaanesche Zigg","Wäß-Affrekaanesche Sommerzigg"]},"Africa/Douala":{"long":["Jewöhnlijje Wäß-Affrekaanesche Zigg","Wäß-Affrekaanesche Sommerzigg"]},"Africa/Libreville":{"long":["Jewöhnlijje Wäß-Affrekaanesche Zigg","Wäß-Affrekaanesche Sommerzigg"]},"Africa/Malabo":{"long":["Jewöhnlijje Wäß-Affrekaanesche Zigg","Wäß-Affrekaanesche Sommerzigg"]},"Africa/Niamey":{"long":["Jewöhnlijje Wäß-Affrekaanesche Zigg","Wäß-Affrekaanesche Sommerzigg"]},"Africa/Ndjamena":{"long":["Jewöhnlijje Wäß-Affrekaanesche Zigg","Wäß-Affrekaanesche Sommerzigg"]},"Atlantic/Azores":{"long":["de Azore ier jewöhnlijje Zick","de Azore ier Summerzick"]},"Europe/London":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Atlantic/Cape_Verde":{"long":["Jewöhnlijje Kapvärdejaansche Zigg","Kapvärdejaansche Sommerzigg"]},"Europe/Paris":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Andorra":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Tirane":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Vienna":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Sarajevo":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Brussels":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Zurich":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Prague":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Berlin":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Copenhagen":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Madrid":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Gibraltar":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Zagreb":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Budapest":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Rome":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Vaduz":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Luxembourg":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Monaco":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Podgorica":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Skopje":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Malta":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Amsterdam":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Oslo":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Warsaw":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Belgrade":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Stockholm":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Ljubljana":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Arctic/Longyearbyen":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Bratislava":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/San_Marino":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Africa/Tunis":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Vatican":{"long":["Meddel-Europpa sing jewöhnlijje Zick","Meddel-Europpa sing Summerzick"],"short":["MEZ","MESZ"]},"Europe/Bucharest":{"long":["Oß-Europpa sing jewöhnlijje Zick","Oß-Europpa sing Summerzick"],"short":["OEZ","OESZ"]},"Europe/Mariehamn":{"long":["Oß-Europpa sing jewöhnlijje Zick","Oß-Europpa sing Summerzick"],"short":["OEZ","OESZ"]},"Europe/Sofia":{"long":["Oß-Europpa sing jewöhnlijje Zick","Oß-Europpa sing Summerzick"],"short":["OEZ","OESZ"]},"Asia/Nicosia":{"long":["Oß-Europpa sing jewöhnlijje Zick","Oß-Europpa sing Summerzick"],"short":["OEZ","OESZ"]},"Africa/Cairo":{"long":["Oß-Europpa sing jewöhnlijje Zick","Oß-Europpa sing Summerzick"],"short":["OEZ","OESZ"]},"Europe/Helsinki":{"long":["Oß-Europpa sing jewöhnlijje Zick","Oß-Europpa sing Summerzick"],"short":["OEZ","OESZ"]},"Europe/Athens":{"long":["Oß-Europpa sing jewöhnlijje Zick","Oß-Europpa sing Summerzick"],"short":["OEZ","OESZ"]},"Asia/Amman":{"long":["Oß-Europpa sing jewöhnlijje Zick","Oß-Europpa sing Summerzick"],"short":["OEZ","OESZ"]},"Asia/Beirut":{"long":["Oß-Europpa sing jewöhnlijje Zick","Oß-Europpa sing Summerzick"],"short":["OEZ","OESZ"]},"Asia/Damascus":{"long":["Oß-Europpa sing jewöhnlijje Zick","Oß-Europpa sing Summerzick"],"short":["OEZ","OESZ"]},"Atlantic/Canary":{"long":["Weß-Europpa sing jewöhnlijje Zick","Weß-Europpa sing Summerzick"],"short":["WEZ","WESZ"]},"Atlantic/Faeroe":{"long":["Weß-Europpa sing jewöhnlijje Zick","Weß-Europpa sing Summerzick"],"short":["WEZ","WESZ"]},"Atlantic/Reykjavik":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Africa/Ouagadougou":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Africa/Abidjan":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Africa/Accra":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Africa/Banjul":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Africa/Conakry":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Africa/Bamako":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Africa/Nouakchott":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Atlantic/St_Helena":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Africa/Freetown":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Africa/Dakar":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Africa/Lome":{"long":["Greenwich sing Standat-Zick","Greenwich sing Standat-Zick"]},"Indian/Chagos":{"long":["dem Indische Ozejan sing Zick","dem Indische Ozejan sing Zick"]},"Indian/Mauritius":{"long":["Jewöhnlijje Zigg vun Mauritius","Summerzigg vun Mauritius"]},"Indian/Reunion":{"long":["Zigg vun Reunion","Zigg vun Reunion"]},"Indian/Mahe":{"long":["Zigg vun de Seischälle","Zigg vun de Seischälle"]},"UTC":{"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"EEEE, 'dä' d. MMMM y","long":"d. MMMM y","medium":"d. MMM. y","short":"d. M. y"},"timeFormat":{"full":"HH:mm:ss zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"dateTimeFormat":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"E 'dä' d.","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"G y","GyMMM":"G y MMM","GyMMMd":"G y MMM d","GyMMMEd":"G y MMM d, E","h":"h a","H":"HH","hm":"h:mm a","Hm":"H:mm","hms":"h:mm:ss a","Hms":"H:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"MM-dd","MEd":"E d. M.","MMM":"LLL","MMMd":"d. MMM","MMMEd":"E d. MMM","MMMMd":"d. MMMM","ms":"mm:ss","y":"y","yM":"Y-MM","yMd":"y-MM-dd","yMEd":"E y-MM-dd","yMMM":"MMM y","yMMMd":"d. MMM. y","yMMMEd":"E d. MMM. y","yMMMM":"MMMM y","EEEE, 'dä' d. MMMM y":"EEEE, 'dä' d. MMMM y","d. MMMM y":"d. MMMM y","d. MMM. y":"d. MMM. y","d. M. y":"d. M. y","HH:mm:ss zzzz":"HH:mm:ss zzzz","HH:mm:ss z":"HH:mm:ss z","HH:mm:ss":"HH:mm:ss","HH:mm":"HH:mm","EEEE, 'dä' d. MMMM y HH:mm:ss zzzz":"EEEE, 'dä' d. MMMM y HH:mm:ss zzzz","d. MMMM y HH:mm:ss zzzz":"d. MMMM y HH:mm:ss zzzz","d. MMM. y HH:mm:ss zzzz":"d. MMM. y HH:mm:ss zzzz","d. M. y HH:mm:ss zzzz":"d. M. y HH:mm:ss zzzz","d HH:mm:ss zzzz":"d HH:mm:ss zzzz","E HH:mm:ss zzzz":"ccc HH:mm:ss zzzz","Ed HH:mm:ss zzzz":"E 'dä' d. HH:mm:ss zzzz","Gy HH:mm:ss zzzz":"G y HH:mm:ss zzzz","GyMMM HH:mm:ss zzzz":"G y MMM HH:mm:ss zzzz","GyMMMd HH:mm:ss zzzz":"G y MMM d HH:mm:ss zzzz","GyMMMEd HH:mm:ss zzzz":"G y MMM d, E HH:mm:ss zzzz","M HH:mm:ss zzzz":"L HH:mm:ss zzzz","Md HH:mm:ss zzzz":"MM-dd HH:mm:ss zzzz","MEd HH:mm:ss zzzz":"E d. M. HH:mm:ss zzzz","MMM HH:mm:ss zzzz":"LLL HH:mm:ss zzzz","MMMd HH:mm:ss zzzz":"d. MMM HH:mm:ss zzzz","MMMEd HH:mm:ss zzzz":"E d. MMM HH:mm:ss zzzz","MMMMd HH:mm:ss zzzz":"d. MMMM HH:mm:ss zzzz","y HH:mm:ss zzzz":"y HH:mm:ss zzzz","yM HH:mm:ss zzzz":"Y-MM HH:mm:ss zzzz","yMd HH:mm:ss zzzz":"y-MM-dd HH:mm:ss zzzz","yMEd HH:mm:ss zzzz":"E y-MM-dd HH:mm:ss zzzz","yMMM HH:mm:ss zzzz":"MMM y HH:mm:ss zzzz","yMMMd HH:mm:ss zzzz":"d. MMM. y HH:mm:ss zzzz","yMMMEd HH:mm:ss zzzz":"E d. MMM. y HH:mm:ss zzzz","yMMMM HH:mm:ss zzzz":"MMMM y HH:mm:ss zzzz","EEEE, 'dä' d. MMMM y HH:mm:ss z":"EEEE, 'dä' d. MMMM y HH:mm:ss z","d. MMMM y HH:mm:ss z":"d. MMMM y HH:mm:ss z","d. MMM. y HH:mm:ss z":"d. MMM. y HH:mm:ss z","d. M. y HH:mm:ss z":"d. M. y HH:mm:ss z","d HH:mm:ss z":"d HH:mm:ss z","E HH:mm:ss z":"ccc HH:mm:ss z","Ed HH:mm:ss z":"E 'dä' d. HH:mm:ss z","Gy HH:mm:ss z":"G y HH:mm:ss z","GyMMM HH:mm:ss z":"G y MMM HH:mm:ss z","GyMMMd HH:mm:ss z":"G y MMM d HH:mm:ss z","GyMMMEd HH:mm:ss z":"G y MMM d, E HH:mm:ss z","M HH:mm:ss z":"L HH:mm:ss z","Md HH:mm:ss z":"MM-dd HH:mm:ss z","MEd HH:mm:ss z":"E d. M. HH:mm:ss z","MMM HH:mm:ss z":"LLL HH:mm:ss z","MMMd HH:mm:ss z":"d. MMM HH:mm:ss z","MMMEd HH:mm:ss z":"E d. MMM HH:mm:ss z","MMMMd HH:mm:ss z":"d. MMMM HH:mm:ss z","y HH:mm:ss z":"y HH:mm:ss z","yM HH:mm:ss z":"Y-MM HH:mm:ss z","yMd HH:mm:ss z":"y-MM-dd HH:mm:ss z","yMEd HH:mm:ss z":"E y-MM-dd HH:mm:ss z","yMMM HH:mm:ss z":"MMM y HH:mm:ss z","yMMMd HH:mm:ss z":"d. MMM. y HH:mm:ss z","yMMMEd HH:mm:ss z":"E d. MMM. y HH:mm:ss z","yMMMM HH:mm:ss z":"MMMM y HH:mm:ss z","EEEE, 'dä' d. MMMM y HH:mm:ss":"EEEE, 'dä' d. MMMM y HH:mm:ss","d. MMMM y HH:mm:ss":"d. MMMM y HH:mm:ss","d. MMM. y HH:mm:ss":"d. MMM. y HH:mm:ss","d. M. y HH:mm:ss":"d. M. y HH:mm:ss","d HH:mm:ss":"d HH:mm:ss","E HH:mm:ss":"ccc HH:mm:ss","Ed HH:mm:ss":"E 'dä' d. HH:mm:ss","Gy HH:mm:ss":"G y HH:mm:ss","GyMMM HH:mm:ss":"G y MMM HH:mm:ss","GyMMMd HH:mm:ss":"G y MMM d HH:mm:ss","GyMMMEd HH:mm:ss":"G y MMM d, E HH:mm:ss","M HH:mm:ss":"L HH:mm:ss","Md HH:mm:ss":"MM-dd HH:mm:ss","MEd HH:mm:ss":"E d. M. HH:mm:ss","MMM HH:mm:ss":"LLL HH:mm:ss","MMMd HH:mm:ss":"d. MMM HH:mm:ss","MMMEd HH:mm:ss":"E d. MMM HH:mm:ss","MMMMd HH:mm:ss":"d. MMMM HH:mm:ss","y HH:mm:ss":"y HH:mm:ss","yM HH:mm:ss":"Y-MM HH:mm:ss","yMd HH:mm:ss":"y-MM-dd HH:mm:ss","yMEd HH:mm:ss":"E y-MM-dd HH:mm:ss","yMMM HH:mm:ss":"MMM y HH:mm:ss","yMMMd HH:mm:ss":"d. MMM. y HH:mm:ss","yMMMEd HH:mm:ss":"E d. MMM. y HH:mm:ss","yMMMM HH:mm:ss":"MMMM y HH:mm:ss","EEEE, 'dä' d. MMMM y HH:mm":"EEEE, 'dä' d. MMMM y HH:mm","d. MMMM y HH:mm":"d. MMMM y HH:mm","d. MMM. y HH:mm":"d. MMM. y HH:mm","d. M. y HH:mm":"d. M. y HH:mm","d HH:mm":"d HH:mm","E HH:mm":"ccc HH:mm","Ed HH:mm":"E 'dä' d. HH:mm","Gy HH:mm":"G y HH:mm","GyMMM HH:mm":"G y MMM HH:mm","GyMMMd HH:mm":"G y MMM d HH:mm","GyMMMEd HH:mm":"G y MMM d, E HH:mm","M HH:mm":"L HH:mm","Md HH:mm":"MM-dd HH:mm","MEd HH:mm":"E d. M. HH:mm","MMM HH:mm":"LLL HH:mm","MMMd HH:mm":"d. MMM HH:mm","MMMEd HH:mm":"E d. MMM HH:mm","MMMMd HH:mm":"d. MMMM HH:mm","y HH:mm":"y HH:mm","yM HH:mm":"Y-MM HH:mm","yMd HH:mm":"y-MM-dd HH:mm","yMEd HH:mm":"E y-MM-dd HH:mm","yMMM HH:mm":"MMM y HH:mm","yMMMd HH:mm":"d. MMM. y HH:mm","yMMMEd HH:mm":"E d. MMM. y HH:mm","yMMMM HH:mm":"MMMM y HH:mm","EEEE, 'dä' d. MMMM y Bh":"EEEE, 'dä' d. MMMM y h B","d. MMMM y Bh":"d. MMMM y h B","d. MMM. y Bh":"d. MMM. y h B","d. M. y Bh":"d. M. y h B","d Bh":"d h B","E Bh":"ccc h B","Ed Bh":"E 'dä' d. h B","Gy Bh":"G y h B","GyMMM Bh":"G y MMM h B","GyMMMd Bh":"G y MMM d h B","GyMMMEd Bh":"G y MMM d, E h B","M Bh":"L h B","Md Bh":"MM-dd h B","MEd Bh":"E d. M. h B","MMM Bh":"LLL h B","MMMd Bh":"d. MMM h B","MMMEd Bh":"E d. MMM h B","MMMMd Bh":"d. MMMM h B","y Bh":"y h B","yM Bh":"Y-MM h B","yMd Bh":"y-MM-dd h B","yMEd Bh":"E y-MM-dd h B","yMMM Bh":"MMM y h B","yMMMd Bh":"d. MMM. y h B","yMMMEd Bh":"E d. MMM. y h B","yMMMM Bh":"MMMM y h B","EEEE, 'dä' d. MMMM y Bhm":"EEEE, 'dä' d. MMMM y h:mm B","d. MMMM y Bhm":"d. MMMM y h:mm B","d. MMM. y Bhm":"d. MMM. y h:mm B","d. M. y Bhm":"d. M. y h:mm B","d Bhm":"d h:mm B","E Bhm":"ccc h:mm B","Ed Bhm":"E 'dä' d. h:mm B","Gy Bhm":"G y h:mm B","GyMMM Bhm":"G y MMM h:mm B","GyMMMd Bhm":"G y MMM d h:mm B","GyMMMEd Bhm":"G y MMM d, E h:mm B","M Bhm":"L h:mm B","Md Bhm":"MM-dd h:mm B","MEd Bhm":"E d. M. h:mm B","MMM Bhm":"LLL h:mm B","MMMd Bhm":"d. MMM h:mm B","MMMEd Bhm":"E d. MMM h:mm B","MMMMd Bhm":"d. MMMM h:mm B","y Bhm":"y h:mm B","yM Bhm":"Y-MM h:mm B","yMd Bhm":"y-MM-dd h:mm B","yMEd Bhm":"E y-MM-dd h:mm B","yMMM Bhm":"MMM y h:mm B","yMMMd Bhm":"d. MMM. y h:mm B","yMMMEd Bhm":"E d. MMM. y h:mm B","yMMMM Bhm":"MMMM y h:mm B","EEEE, 'dä' d. MMMM y Bhms":"EEEE, 'dä' d. MMMM y h:mm:ss B","d. MMMM y Bhms":"d. MMMM y h:mm:ss B","d. MMM. y Bhms":"d. MMM. y h:mm:ss B","d. M. y Bhms":"d. M. y h:mm:ss B","d Bhms":"d h:mm:ss B","E Bhms":"ccc h:mm:ss B","Ed Bhms":"E 'dä' d. h:mm:ss B","Gy Bhms":"G y h:mm:ss B","GyMMM Bhms":"G y MMM h:mm:ss B","GyMMMd Bhms":"G y MMM d h:mm:ss B","GyMMMEd Bhms":"G y MMM d, E h:mm:ss B","M Bhms":"L h:mm:ss B","Md Bhms":"MM-dd h:mm:ss B","MEd Bhms":"E d. M. h:mm:ss B","MMM Bhms":"LLL h:mm:ss B","MMMd Bhms":"d. MMM h:mm:ss B","MMMEd Bhms":"E d. MMM h:mm:ss B","MMMMd Bhms":"d. MMMM h:mm:ss B","y Bhms":"y h:mm:ss B","yM Bhms":"Y-MM h:mm:ss B","yMd Bhms":"y-MM-dd h:mm:ss B","yMEd Bhms":"E y-MM-dd h:mm:ss B","yMMM Bhms":"MMM y h:mm:ss B","yMMMd Bhms":"d. MMM. y h:mm:ss B","yMMMEd Bhms":"E d. MMM. y h:mm:ss B","yMMMM Bhms":"MMMM y h:mm:ss B","EEEE, 'dä' d. MMMM y h":"EEEE, 'dä' d. MMMM y h a","d. MMMM y h":"d. MMMM y h a","d. MMM. y h":"d. MMM. y h a","d. M. y h":"d. M. y h a","d h":"d h a","E h":"ccc h a","Ed h":"E 'dä' d. h a","Gy h":"G y h a","GyMMM h":"G y MMM h a","GyMMMd h":"G y MMM d h a","GyMMMEd h":"G y MMM d, E h a","M h":"L h a","Md h":"MM-dd h a","MEd h":"E d. M. h a","MMM h":"LLL h a","MMMd h":"d. MMM h a","MMMEd h":"E d. MMM h a","MMMMd h":"d. MMMM h a","y h":"y h a","yM h":"Y-MM h a","yMd h":"y-MM-dd h a","yMEd h":"E y-MM-dd h a","yMMM h":"MMM y h a","yMMMd h":"d. MMM. y h a","yMMMEd h":"E d. MMM. y h a","yMMMM h":"MMMM y h a","EEEE, 'dä' d. MMMM y H":"EEEE, 'dä' d. MMMM y HH","d. MMMM y H":"d. MMMM y HH","d. MMM. y H":"d. MMM. y HH","d. M. y H":"d. M. y HH","d H":"d HH","E H":"ccc HH","Ed H":"E 'dä' d. HH","Gy H":"G y HH","GyMMM H":"G y MMM HH","GyMMMd H":"G y MMM d HH","GyMMMEd H":"G y MMM d, E HH","M H":"L HH","Md H":"MM-dd HH","MEd H":"E d. M. HH","MMM H":"LLL HH","MMMd H":"d. MMM HH","MMMEd H":"E d. MMM HH","MMMMd H":"d. MMMM HH","y H":"y HH","yM H":"Y-MM HH","yMd H":"y-MM-dd HH","yMEd H":"E y-MM-dd HH","yMMM H":"MMM y HH","yMMMd H":"d. MMM. y HH","yMMMEd H":"E d. MMM. y HH","yMMMM H":"MMMM y HH","EEEE, 'dä' d. MMMM y hm":"EEEE, 'dä' d. MMMM y h:mm a","d. MMMM y hm":"d. MMMM y h:mm a","d. MMM. y hm":"d. MMM. y h:mm a","d. M. y hm":"d. M. y h:mm a","d hm":"d h:mm a","E hm":"ccc h:mm a","Ed hm":"E 'dä' d. h:mm a","Gy hm":"G y h:mm a","GyMMM hm":"G y MMM h:mm a","GyMMMd hm":"G y MMM d h:mm a","GyMMMEd hm":"G y MMM d, E h:mm a","M hm":"L h:mm a","Md hm":"MM-dd h:mm a","MEd hm":"E d. M. h:mm a","MMM hm":"LLL h:mm a","MMMd hm":"d. MMM h:mm a","MMMEd hm":"E d. MMM h:mm a","MMMMd hm":"d. MMMM h:mm a","y hm":"y h:mm a","yM hm":"Y-MM h:mm a","yMd hm":"y-MM-dd h:mm a","yMEd hm":"E y-MM-dd h:mm a","yMMM hm":"MMM y h:mm a","yMMMd hm":"d. MMM. y h:mm a","yMMMEd hm":"E d. MMM. y h:mm a","yMMMM hm":"MMMM y h:mm a","EEEE, 'dä' d. MMMM y Hm":"EEEE, 'dä' d. MMMM y H:mm","d. MMMM y Hm":"d. MMMM y H:mm","d. MMM. y Hm":"d. MMM. y H:mm","d. M. y Hm":"d. M. y H:mm","d Hm":"d H:mm","E Hm":"ccc H:mm","Ed Hm":"E 'dä' d. H:mm","Gy Hm":"G y H:mm","GyMMM Hm":"G y MMM H:mm","GyMMMd Hm":"G y MMM d H:mm","GyMMMEd Hm":"G y MMM d, E H:mm","M Hm":"L H:mm","Md Hm":"MM-dd H:mm","MEd Hm":"E d. M. H:mm","MMM Hm":"LLL H:mm","MMMd Hm":"d. MMM H:mm","MMMEd Hm":"E d. MMM H:mm","MMMMd Hm":"d. MMMM H:mm","y Hm":"y H:mm","yM Hm":"Y-MM H:mm","yMd Hm":"y-MM-dd H:mm","yMEd Hm":"E y-MM-dd H:mm","yMMM Hm":"MMM y H:mm","yMMMd Hm":"d. MMM. y H:mm","yMMMEd Hm":"E d. MMM. y H:mm","yMMMM Hm":"MMMM y H:mm","EEEE, 'dä' d. MMMM y hms":"EEEE, 'dä' d. MMMM y h:mm:ss a","d. MMMM y hms":"d. MMMM y h:mm:ss a","d. MMM. y hms":"d. MMM. y h:mm:ss a","d. M. y hms":"d. M. y h:mm:ss a","d hms":"d h:mm:ss a","E hms":"ccc h:mm:ss a","Ed hms":"E 'dä' d. h:mm:ss a","Gy hms":"G y h:mm:ss a","GyMMM hms":"G y MMM h:mm:ss a","GyMMMd hms":"G y MMM d h:mm:ss a","GyMMMEd hms":"G y MMM d, E h:mm:ss a","M hms":"L h:mm:ss a","Md hms":"MM-dd h:mm:ss a","MEd hms":"E d. M. h:mm:ss a","MMM hms":"LLL h:mm:ss a","MMMd hms":"d. MMM h:mm:ss a","MMMEd hms":"E d. MMM h:mm:ss a","MMMMd hms":"d. MMMM h:mm:ss a","y hms":"y h:mm:ss a","yM hms":"Y-MM h:mm:ss a","yMd hms":"y-MM-dd h:mm:ss a","yMEd hms":"E y-MM-dd h:mm:ss a","yMMM hms":"MMM y h:mm:ss a","yMMMd hms":"d. MMM. y h:mm:ss a","yMMMEd hms":"E d. MMM. y h:mm:ss a","yMMMM hms":"MMMM y h:mm:ss a","EEEE, 'dä' d. MMMM y Hms":"EEEE, 'dä' d. MMMM y H:mm:ss","d. MMMM y Hms":"d. MMMM y H:mm:ss","d. MMM. y Hms":"d. MMM. y H:mm:ss","d. M. y Hms":"d. M. y H:mm:ss","d Hms":"d H:mm:ss","E Hms":"ccc H:mm:ss","Ed Hms":"E 'dä' d. H:mm:ss","Gy Hms":"G y H:mm:ss","GyMMM Hms":"G y MMM H:mm:ss","GyMMMd Hms":"G y MMM d H:mm:ss","GyMMMEd Hms":"G y MMM d, E H:mm:ss","M Hms":"L H:mm:ss","Md Hms":"MM-dd H:mm:ss","MEd Hms":"E d. M. H:mm:ss","MMM Hms":"LLL H:mm:ss","MMMd Hms":"d. MMM H:mm:ss","MMMEd Hms":"E d. MMM H:mm:ss","MMMMd Hms":"d. MMMM H:mm:ss","y Hms":"y H:mm:ss","yM Hms":"Y-MM H:mm:ss","yMd Hms":"y-MM-dd H:mm:ss","yMEd Hms":"E y-MM-dd H:mm:ss","yMMM Hms":"MMM y H:mm:ss","yMMMd Hms":"d. MMM. y H:mm:ss","yMMMEd Hms":"E d. MMM. y H:mm:ss","yMMMM Hms":"MMMM y H:mm:ss","EEEE, 'dä' d. MMMM y hmsv":"EEEE, 'dä' d. MMMM y h:mm:ss a v","d. MMMM y hmsv":"d. MMMM y h:mm:ss a v","d. MMM. y hmsv":"d. MMM. y h:mm:ss a v","d. M. y hmsv":"d. M. y h:mm:ss a v","d hmsv":"d h:mm:ss a v","E hmsv":"ccc h:mm:ss a v","Ed hmsv":"E 'dä' d. h:mm:ss a v","Gy hmsv":"G y h:mm:ss a v","GyMMM hmsv":"G y MMM h:mm:ss a v","GyMMMd hmsv":"G y MMM d h:mm:ss a v","GyMMMEd hmsv":"G y MMM d, E h:mm:ss a v","M hmsv":"L h:mm:ss a v","Md hmsv":"MM-dd h:mm:ss a v","MEd hmsv":"E d. M. h:mm:ss a v","MMM hmsv":"LLL h:mm:ss a v","MMMd hmsv":"d. MMM h:mm:ss a v","MMMEd hmsv":"E d. MMM h:mm:ss a v","MMMMd hmsv":"d. MMMM h:mm:ss a v","y hmsv":"y h:mm:ss a v","yM hmsv":"Y-MM h:mm:ss a v","yMd hmsv":"y-MM-dd h:mm:ss a v","yMEd hmsv":"E y-MM-dd h:mm:ss a v","yMMM hmsv":"MMM y h:mm:ss a v","yMMMd hmsv":"d. MMM. y h:mm:ss a v","yMMMEd hmsv":"E d. MMM. y h:mm:ss a v","yMMMM hmsv":"MMMM y h:mm:ss a v","EEEE, 'dä' d. MMMM y Hmsv":"EEEE, 'dä' d. MMMM y HH:mm:ss v","d. MMMM y Hmsv":"d. MMMM y HH:mm:ss v","d. MMM. y Hmsv":"d. MMM. y HH:mm:ss v","d. M. y Hmsv":"d. M. y HH:mm:ss v","d Hmsv":"d HH:mm:ss v","E Hmsv":"ccc HH:mm:ss v","Ed Hmsv":"E 'dä' d. HH:mm:ss v","Gy Hmsv":"G y HH:mm:ss v","GyMMM Hmsv":"G y MMM HH:mm:ss v","GyMMMd Hmsv":"G y MMM d HH:mm:ss v","GyMMMEd Hmsv":"G y MMM d, E HH:mm:ss v","M Hmsv":"L HH:mm:ss v","Md Hmsv":"MM-dd HH:mm:ss v","MEd Hmsv":"E d. M. HH:mm:ss v","MMM Hmsv":"LLL HH:mm:ss v","MMMd Hmsv":"d. MMM HH:mm:ss v","MMMEd Hmsv":"E d. MMM HH:mm:ss v","MMMMd Hmsv":"d. MMMM HH:mm:ss v","y Hmsv":"y HH:mm:ss v","yM Hmsv":"Y-MM HH:mm:ss v","yMd Hmsv":"y-MM-dd HH:mm:ss v","yMEd Hmsv":"E y-MM-dd HH:mm:ss v","yMMM Hmsv":"MMM y HH:mm:ss v","yMMMd Hmsv":"d. MMM. y HH:mm:ss v","yMMMEd Hmsv":"E d. MMM. y HH:mm:ss v","yMMMM Hmsv":"MMMM y HH:mm:ss v","EEEE, 'dä' d. MMMM y hmv":"EEEE, 'dä' d. MMMM y h:mm a v","d. MMMM y hmv":"d. MMMM y h:mm a v","d. MMM. y hmv":"d. MMM. y h:mm a v","d. M. y hmv":"d. M. y h:mm a v","d hmv":"d h:mm a v","E hmv":"ccc h:mm a v","Ed hmv":"E 'dä' d. h:mm a v","Gy hmv":"G y h:mm a v","GyMMM hmv":"G y MMM h:mm a v","GyMMMd hmv":"G y MMM d h:mm a v","GyMMMEd hmv":"G y MMM d, E h:mm a v","M hmv":"L h:mm a v","Md hmv":"MM-dd h:mm a v","MEd hmv":"E d. M. h:mm a v","MMM hmv":"LLL h:mm a v","MMMd hmv":"d. MMM h:mm a v","MMMEd hmv":"E d. MMM h:mm a v","MMMMd hmv":"d. MMMM h:mm a v","y hmv":"y h:mm a v","yM hmv":"Y-MM h:mm a v","yMd hmv":"y-MM-dd h:mm a v","yMEd hmv":"E y-MM-dd h:mm a v","yMMM hmv":"MMM y h:mm a v","yMMMd hmv":"d. MMM. y h:mm a v","yMMMEd hmv":"E d. MMM. y h:mm a v","yMMMM hmv":"MMMM y h:mm a v","EEEE, 'dä' d. MMMM y Hmv":"EEEE, 'dä' d. MMMM y HH:mm v","d. MMMM y Hmv":"d. MMMM y HH:mm v","d. MMM. y Hmv":"d. MMM. y HH:mm v","d. M. y Hmv":"d. M. y HH:mm v","d Hmv":"d HH:mm v","E Hmv":"ccc HH:mm v","Ed Hmv":"E 'dä' d. HH:mm v","Gy Hmv":"G y HH:mm v","GyMMM Hmv":"G y MMM HH:mm v","GyMMMd Hmv":"G y MMM d HH:mm v","GyMMMEd Hmv":"G y MMM d, E HH:mm v","M Hmv":"L HH:mm v","Md Hmv":"MM-dd HH:mm v","MEd Hmv":"E d. M. HH:mm v","MMM Hmv":"LLL HH:mm v","MMMd Hmv":"d. MMM HH:mm v","MMMEd Hmv":"E d. MMM HH:mm v","MMMMd Hmv":"d. MMMM HH:mm v","y Hmv":"y HH:mm v","yM Hmv":"Y-MM HH:mm v","yMd Hmv":"y-MM-dd HH:mm v","yMEd Hmv":"E y-MM-dd HH:mm v","yMMM Hmv":"MMM y HH:mm v","yMMMd Hmv":"d. MMM. y HH:mm v","yMMMEd Hmv":"E d. MMM. y HH:mm v","yMMMM Hmv":"MMMM y HH:mm v","EEEE, 'dä' d. MMMM y ms":"EEEE, 'dä' d. MMMM y mm:ss","d. MMMM y ms":"d. MMMM y mm:ss","d. MMM. y ms":"d. MMM. y mm:ss","d. M. y ms":"d. M. y mm:ss","d ms":"d mm:ss","E ms":"ccc mm:ss","Ed ms":"E 'dä' d. mm:ss","Gy ms":"G y mm:ss","GyMMM ms":"G y MMM mm:ss","GyMMMd ms":"G y MMM d mm:ss","GyMMMEd ms":"G y MMM d, E mm:ss","M ms":"L mm:ss","Md ms":"MM-dd mm:ss","MEd ms":"E d. M. mm:ss","MMM ms":"LLL mm:ss","MMMd ms":"d. MMM mm:ss","MMMEd ms":"E d. MMM mm:ss","MMMMd ms":"d. MMMM mm:ss","y ms":"y mm:ss","yM ms":"Y-MM mm:ss","yMd ms":"y-MM-dd mm:ss","yMEd ms":"E y-MM-dd mm:ss","yMMM ms":"MMM y mm:ss","yMMMd ms":"d. MMM. y mm:ss","yMMMEd ms":"E d. MMM. y mm:ss","yMMMM ms":"MMMM y mm:ss"}},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h–h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm–h:mm B","m":"h:mm–h:mm B"},"d":{"d":"d–d"},"Gy":{"G":"G y – G y","y":"G y–y"},"GyM":{"G":"GGGGG y-MM – GGGGG y-MM","M":"GGGGG y-MM – y-MM","y":"GGGGG y-MM – y-MM"},"GyMd":{"d":"GGGGG y-MM-dd – y-MM-dd","G":"GGGGG y-MM-dd – GGGGG y-MM-dd","M":"GGGGG y-MM-dd – y-MM-dd","y":"GGGGG y-MM-dd – y-MM-dd"},"GyMEd":{"d":"GGGGG y-MM-dd, E – y-MM-dd, E","G":"GGGGG y-MM-dd, E – GGGGG y-MM-dd, E","M":"GGGGG y-MM-dd, E – y-MM-dd, E","y":"GGGGG y-MM-dd, E – y-MM-dd, E"},"GyMMM":{"G":"G y MMM – G y MMM","M":"G y MMM–MMM","y":"G y MMM – y MMM"},"GyMMMd":{"d":"G y MMM d–d","G":"G y MMM d – G y MMM d","M":"G y MMM d – MMM d","y":"G y MMM d – y MMM d"},"GyMMMEd":{"d":"G y MMM d, E – MMM d, E","G":"G y MMM d, E – G y MMM d, E","M":"G y MMM d, E – MMM d, E","y":"G y MMM d, E – y MMM d, E"},"h":{"a":"h a – h a","h":"h–h a"},"H":{"H":"HH–HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm–h:mm a","m":"h:mm–h:mm a"},"Hm":{"H":"HH:mm–HH:mm","m":"HH:mm–HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"HH:mm–HH:mm v","m":"HH:mm–HH:mm v"},"hv":{"a":"h a – h a v","h":"h–h a v"},"Hv":{"H":"HH–HH v"},"M":{"M":"M–M"},"Md":{"d":"dd. – dd. MM.","M":"MM-dd – MM-dd"},"MEd":{"d":"MM-dd, E – MM-dd, E","M":"MM-dd, E – MM-dd, E"},"MMM":{"M":"LLL–LLL"},"MMMd":{"d":"MMM d–d","M":"MMM d – MMM d"},"MMMEd":{"d":"MMM d, E – MMM d, E","M":"MMM d, E – MMM d, E"},"y":{"y":"y–y"},"yM":{"M":"y-MM – y-MM","y":"y-MM – y-MM"},"yMd":{"d":"y-MM-dd – y-MM-dd","M":"y-MM-dd – y-MM-dd","y":"y-MM-dd – y-MM-dd"},"yMEd":{"d":"E y-MM-dd – E y-MM-dd","M":"E y-MM-dd – E y-MM-dd","y":"E y-MM-dd – E y-MM-dd"},"yMMM":{"M":"MMM–MMM y","y":"MMM. y – MMM. y"},"yMMMd":{"d":"d.–d. MMMM y","M":"y MMM d – MMM d","y":"y MMM d – y MMM d"},"yMMMEd":{"d":"E y-MM-dd – E y-MM-dd","M":"E y-MM-dd – E y-MM-dd","y":"E y-MM-dd – E y-MM-dd"},"yMMMM":{"M":"MMMM–MMMM y","y":"MMMM y – MMMM y"}},"hourCycle":"h23","nu":["latn"],"ca":["gregory"],"hc":["h23",""]},"locale":"ksh"}
)
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
