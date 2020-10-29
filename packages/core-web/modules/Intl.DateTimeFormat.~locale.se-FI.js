import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ToObject from "../helpers/_ESAbstract.ToObject";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import Get from "../helpers/_ESAbstract.Get";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import Type from "../helpers/_ESAbstract.Type";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import Construct from "../helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
import CreateIterResultObject from "../helpers/_ESAbstract.CreateIterResultObject";
(function(undefined) {
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("se-FI").length
)) {
// Intl.DateTimeFormat.~locale.se-FI
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"se-FI":{"am":"ib","pm":"eb","weekday":{"narrow":["S","M","D","G","D","B","L"],"short":["so","má","di","ga","du","be","lá"],"long":["sotnabeaivi","mánnodat","disdat","gaskavahkku","duorastat","bearjadat","lávvordat"]},"era":{"narrow":{"BC":"oKr.","AD":"mKr."},"short":{"BC":"oKr.","AD":"mKr."},"long":{"BC":"ovdal Kristusa","AD":"maŋŋel Kristusa"}},"month":{"narrow":["O","G","N","C","M","G","S","B","Č","G","S","J"],"short":["ođđj","guov","njuk","cuoŋ","mies","geas","suoi","borg","čakč","golg","skáb","juov"],"long":["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu"]},"timeZoneName":{"Asia/Kabul":{"long":["Afganisthana áigi","Afganisthana áigi"]},"Africa/Maputo":{"long":["Gaska-Afrihká áigi","Gaska-Afrihká áigi"]},"Africa/Bujumbura":{"long":["Gaska-Afrihká áigi","Gaska-Afrihká áigi"]},"Africa/Gaborone":{"long":["Gaska-Afrihká áigi","Gaska-Afrihká áigi"]},"Africa/Lubumbashi":{"long":["Gaska-Afrihká áigi","Gaska-Afrihká áigi"]},"Africa/Blantyre":{"long":["Gaska-Afrihká áigi","Gaska-Afrihká áigi"]},"Africa/Kigali":{"long":["Gaska-Afrihká áigi","Gaska-Afrihká áigi"]},"Africa/Lusaka":{"long":["Gaska-Afrihká áigi","Gaska-Afrihká áigi"]},"Africa/Harare":{"long":["Gaska-Afrihká áigi","Gaska-Afrihká áigi"]},"Africa/Nairobi":{"long":["Nuorta-Afrihká áigi","Nuorta-Afrihká áigi"]},"Africa/Djibouti":{"long":["Nuorta-Afrihká áigi","Nuorta-Afrihká áigi"]},"Africa/Asmera":{"long":["Nuorta-Afrihká áigi","Nuorta-Afrihká áigi"]},"Africa/Addis_Ababa":{"long":["Nuorta-Afrihká áigi","Nuorta-Afrihká áigi"]},"Indian/Comoro":{"long":["Nuorta-Afrihká áigi","Nuorta-Afrihká áigi"]},"Indian/Antananarivo":{"long":["Nuorta-Afrihká áigi","Nuorta-Afrihká áigi"]},"Africa/Mogadishu":{"long":["Nuorta-Afrihká áigi","Nuorta-Afrihká áigi"]},"Africa/Dar_es_Salaam":{"long":["Nuorta-Afrihká áigi","Nuorta-Afrihká áigi"]},"Africa/Kampala":{"long":["Nuorta-Afrihká áigi","Nuorta-Afrihká áigi"]},"Indian/Mayotte":{"long":["Nuorta-Afrihká áigi","Nuorta-Afrihká áigi"]},"Africa/Johannesburg":{"long":["Lulli-Afrihká dálveáigi","Lulli-Afrihká dálveáigi"]},"Africa/Maseru":{"long":["Lulli-Afrihká dálveáigi","Lulli-Afrihká dálveáigi"]},"Africa/Mbabane":{"long":["Lulli-Afrihká dálveáigi","Lulli-Afrihká dálveáigi"]},"Africa/Lagos":{"long":["Oarje-Afrihká dálveáigi","Oarje-Afrihká geasseáigi"]},"Africa/Luanda":{"long":["Oarje-Afrihká dálveáigi","Oarje-Afrihká geasseáigi"]},"Africa/Porto-Novo":{"long":["Oarje-Afrihká dálveáigi","Oarje-Afrihká geasseáigi"]},"Africa/Kinshasa":{"long":["Oarje-Afrihká dálveáigi","Oarje-Afrihká geasseáigi"]},"Africa/Bangui":{"long":["Oarje-Afrihká dálveáigi","Oarje-Afrihká geasseáigi"]},"Africa/Brazzaville":{"long":["Oarje-Afrihká dálveáigi","Oarje-Afrihká geasseáigi"]},"Africa/Douala":{"long":["Oarje-Afrihká dálveáigi","Oarje-Afrihká geasseáigi"]},"Africa/Libreville":{"long":["Oarje-Afrihká dálveáigi","Oarje-Afrihká geasseáigi"]},"Africa/Malabo":{"long":["Oarje-Afrihká dálveáigi","Oarje-Afrihká geasseáigi"]},"Africa/Niamey":{"long":["Oarje-Afrihká dálveáigi","Oarje-Afrihká geasseáigi"]},"Africa/Ndjamena":{"long":["Oarje-Afrihká dálveáigi","Oarje-Afrihká geasseáigi"]},"Asia/Aqtobe":{"long":["Oarje-Kasakstana áigi","Oarje-Kasakstana áigi"]},"America/Juneau":{"long":["Alaska dálveáigi","Alaska geasseáigi"]},"Asia/Almaty":{"long":["Nuorta-Kasakstana áigi","Nuorta-Kasakstana áigi"]},"America/Manaus":{"long":["Amazona dálveáigi","Amazona geasseáigi"]},"America/Chicago":{"long":["dábálaš dálveáigi","dábálaš geasseáigi"]},"America/Belize":{"long":["dábálaš dálveáigi","dábálaš geasseáigi"]},"America/Winnipeg":{"long":["dábálaš dálveáigi","dábálaš geasseáigi"]},"America/Costa_Rica":{"long":["dábálaš dálveáigi","dábálaš geasseáigi"]},"America/Guatemala":{"long":["dábálaš dálveáigi","dábálaš geasseáigi"]},"America/Tegucigalpa":{"long":["dábálaš dálveáigi","dábálaš geasseáigi"]},"America/Mexico_City":{"long":["dábálaš dálveáigi","dábálaš geasseáigi"]},"America/El_Salvador":{"long":["dábálaš dálveáigi","dábálaš geasseáigi"]},"America/New_York":{"long":["dálveáigi nuortan","geasseáigi nuortan"]},"America/Nassau":{"long":["dálveáigi nuortan","geasseáigi nuortan"]},"America/Toronto":{"long":["dálveáigi nuortan","geasseáigi nuortan"]},"America/Port-au-Prince":{"long":["dálveáigi nuortan","geasseáigi nuortan"]},"America/Jamaica":{"long":["dálveáigi nuortan","geasseáigi nuortan"]},"America/Cayman":{"long":["dálveáigi nuortan","geasseáigi nuortan"]},"America/Panama":{"long":["dálveáigi nuortan","geasseáigi nuortan"]},"America/Denver":{"long":["dálveduottaráigi","geasseduottaráigi"]},"America/Edmonton":{"long":["dálveduottaráigi","geasseduottaráigi"]},"America/Hermosillo":{"long":["dálveduottaráigi","geasseduottaráigi"]},"America/Los_Angeles":{"long":["Jaskesábi dálveáigi","Jaskesábi geasseáigi"]},"America/Vancouver":{"long":["Jaskesábi dálveáigi","Jaskesábi geasseáigi"]},"America/Tijuana":{"long":["Jaskesábi dálveáigi","Jaskesábi geasseáigi"]},"Pacific/Apia":{"long":["Apia dálveáigi","Apia geasseáigi"]},"Asia/Riyadh":{"long":["Arábia dálveáigi","Arábia geasseáigi"]},"Asia/Bahrain":{"long":["Arábia dálveáigi","Arábia geasseáigi"]},"Asia/Baghdad":{"long":["Arábia dálveáigi","Arábia geasseáigi"]},"Asia/Kuwait":{"long":["Arábia dálveáigi","Arábia geasseáigi"]},"Asia/Qatar":{"long":["Arábia dálveáigi","Arábia geasseáigi"]},"Asia/Aden":{"long":["Arábia dálveáigi","Arábia geasseáigi"]},"America/Buenos_Aires":{"long":["Argentina dálveáigi","Argentina geasseáigi"]},"America/Argentina/San_Luis":{"long":["Oarje-Argentina dálveáigi","Oarje-Argentina geasseáigi"]},"Asia/Ashgabat":{"long":["Turkmenistana dálveáigi","Turkmenistana geasseáigi"]},"America/Halifax":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Antigua":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Anguilla":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Aruba":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Barbados":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"Atlantic/Bermuda":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Kralendijk":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Curacao":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Dominica":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Grenada":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Thule":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Guadeloupe":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/St_Kitts":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/St_Lucia":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Marigot":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Martinique":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Montserrat":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Puerto_Rico":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Lower_Princes":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Port_of_Spain":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/St_Vincent":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/Tortola":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"America/St_Thomas":{"long":["atlántalaš dálveáigi","atlántalaš geasseáigi"]},"Australia/Adelaide":{"long":["Gaska-Austrália dálveáigi","Gaska-Austrália geasseáigi"]},"Australia/Eucla":{"long":["Gaska-Austrália oarjjabeali dálveáigi","Gaska-Austrália oarjjabeali geasseáigi"]},"Australia/Sydney":{"long":["Nuorta-Austrália dálveáigi","Nuorta-Austrália geasseáigi"]},"Australia/Perth":{"long":["Oarje-Austrália dálveáigi","Oarje-Austrália geasseáigi"]},"Atlantic/Azores":{"long":["Azoraid dálveáigi","Azoraid geasseáigi"]},"Asia/Thimphu":{"long":["Bhutana áigi","Bhutana áigi"]},"America/La_Paz":{"long":["Bolivia áigi","Bolivia áigi"]},"Asia/Kuching":{"long":["Malesia áigi","Malesia áigi"]},"America/Sao_Paulo":{"long":["Brasilia dálveáigi","Brasilia geasseáigi"]},"Europe/London":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Asia/Brunei":{"long":["Brunei Darussalama áigi","Brunei Darussalama áigi"]},"Atlantic/Cape_Verde":{"long":["Kap Verde dálveáigi","Kap Verde geasseáigi"]},"Pacific/Chatham":{"long":["Chathama dálveáigi","Chathama geasseáigi"]},"America/Santiago":{"long":["Chile dálveáigi","Chile geasseáigi"]},"Asia/Shanghai":{"long":["Kiinná dálveáigi","Kiinná geasseáigi"]},"Asia/Choibalsan":{"long":["Choibolsana dálveáigi","Choibolsana geasseáigi"]},"Indian/Christmas":{"long":["Juovlasullo áigi","Juovlasullo áigi"]},"Indian/Cocos":{"long":["Kokossulloid áigi","Kokossulloid áigi"]},"America/Bogota":{"long":["Colombia dálveáigi","Colombia geasseáigi"]},"Pacific/Rarotonga":{"long":["Cooksulloid dálveáigi","Cooksulloid geasi beallemuttu áigi"]},"America/Havana":{"long":["Cuba dálveáigi","Cuba geasseáigi"]},"Antarctica/Davis":{"long":["Davisa áigi","Davisa áigi"]},"Antarctica/DumontDUrville":{"long":["Dumont-d’Urville áigi","Dumont-d’Urville áigi"]},"Asia/Dushanbe":{"long":["Tažikistana áigi","Tažikistana áigi"]},"America/Paramaribo":{"long":["Suriname áigi","Suriname áigi"]},"Asia/Dili":{"long":["Nuorta-Timora áigi","Nuorta-Timora áigi"]},"Pacific/Easter":{"long":["Beassášsullo dálveáigi","Beassášsullo geasseáigi"]},"America/Guayaquil":{"long":["Ecuadora áigi","Ecuadora áigi"]},"Europe/Paris":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Andorra":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Tirane":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Vienna":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Sarajevo":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Brussels":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Zurich":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Prague":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Berlin":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Copenhagen":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Madrid":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Gibraltar":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Zagreb":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Budapest":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Rome":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Vaduz":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Luxembourg":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Monaco":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Podgorica":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Skopje":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Malta":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Amsterdam":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Oslo":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Warsaw":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Belgrade":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Stockholm":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Ljubljana":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Arctic/Longyearbyen":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Bratislava":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/San_Marino":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Africa/Tunis":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Vatican":{"long":["Gaska-Eurohpá dálveáigi","Gaska-Eurohpá geasseáigi"],"short":["CET","CEST"]},"Europe/Bucharest":{"long":["Nuorta-Eurohpa dálveáigi","Nuorta-Eurohpa geasseáigi"],"short":["EET","EEST"]},"Europe/Mariehamn":{"long":["Nuorta-Eurohpa dálveáigi","Nuorta-Eurohpa geasseáigi"],"short":["EET","EEST"]},"Europe/Sofia":{"long":["Nuorta-Eurohpa dálveáigi","Nuorta-Eurohpa geasseáigi"],"short":["EET","EEST"]},"Asia/Nicosia":{"long":["Nuorta-Eurohpa dálveáigi","Nuorta-Eurohpa geasseáigi"],"short":["EET","EEST"]},"Africa/Cairo":{"long":["Nuorta-Eurohpa dálveáigi","Nuorta-Eurohpa geasseáigi"],"short":["EET","EEST"]},"Europe/Helsinki":{"long":["Nuorta-Eurohpa dálveáigi","Nuorta-Eurohpa geasseáigi"],"short":["EET","EEST"]},"Europe/Athens":{"long":["Nuorta-Eurohpa dálveáigi","Nuorta-Eurohpa geasseáigi"],"short":["EET","EEST"]},"Asia/Amman":{"long":["Nuorta-Eurohpa dálveáigi","Nuorta-Eurohpa geasseáigi"],"short":["EET","EEST"]},"Asia/Beirut":{"long":["Nuorta-Eurohpa dálveáigi","Nuorta-Eurohpa geasseáigi"],"short":["EET","EEST"]},"Asia/Damascus":{"long":["Nuorta-Eurohpa dálveáigi","Nuorta-Eurohpa geasseáigi"],"short":["EET","EEST"]},"Europe/Minsk":{"long":["Gáiddus-Nuortti eurohpalaš áigi","Gáiddus-Nuortti eurohpalaš áigi"]},"Europe/Kaliningrad":{"long":["Gáiddus-Nuortti eurohpalaš áigi","Gáiddus-Nuortti eurohpalaš áigi"]},"Atlantic/Canary":{"long":["Oarje-Eurohpá dálveáigi","Oarje-Eurohpá geasseáigi"],"short":["WET","WEST"]},"Atlantic/Faeroe":{"long":["Oarje-Eurohpá dálveáigi","Oarje-Eurohpá geasseáigi"],"short":["WET","WEST"]},"Atlantic/Stanley":{"long":["Falklandsulluid dálveáigi","Falklandsulluid geasseáigi"]},"Pacific/Fiji":{"long":["Fiji dálveáigi","Fiji geasseáigi"]},"America/Cayenne":{"long":["Frankriikka Guyana áigi","Frankriikka Guyana áigi"]},"Indian/Kerguelen":{"long":["Frankriikka lulli & antárktisa áigi","Frankriikka lulli & antárktisa áigi"]},"Asia/Bishkek":{"long":["Kirgisia áigi","Kirgisia áigi"]},"Pacific/Galapagos":{"long":["Galapagosa áigi","Galapagosa áigi"]},"Pacific/Gambier":{"long":["Gambiera áigi","Gambiera áigi"]},"Pacific/Tarawa":{"long":["Gilbertsulloid áigi","Gilbertsulloid áigi"]},"Atlantic/Reykjavik":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Africa/Ouagadougou":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Africa/Abidjan":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Africa/Accra":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Africa/Banjul":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Africa/Conakry":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Africa/Bamako":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Africa/Nouakchott":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Atlantic/St_Helena":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Africa/Freetown":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Africa/Dakar":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"Africa/Lome":{"long":["Greenwicha áigi","Greenwicha áigi"],"short":["GMT","GMT"]},"America/Scoresbysund":{"long":["Nuorta-Ruonáeatnama dálveáigi","Nuorta-Ruonáeatnama geasseáigi"]},"America/Godthab":{"long":["Oarje-Ruonáeatnama dálveáigi","Oarje-Ruonáeatnama geasseáigi"]},"Asia/Dubai":{"long":["Golfa dálveáigi","Golfa dálveáigi"]},"Asia/Muscat":{"long":["Golfa dálveáigi","Golfa dálveáigi"]},"America/Guyana":{"long":["Guyana áigi","Guyana áigi"]},"Pacific/Honolulu":{"long":["Hawaii-aleuhtalaš dálveáigi","Hawaii-aleuhtalaš geasseáigi"]},"Asia/Hong_Kong":{"long":["Hong Konga dálveáigi","Hong Konga geasseáigi"]},"Asia/Hovd":{"long":["Hovda dálveáigi","Hovda geasseáigi"]},"Asia/Calcutta":{"long":["India dálveáigi","India dálveáigi"]},"Indian/Chagos":{"long":["Indiaábi áigi","Indiaábi áigi"]},"Asia/Bangkok":{"long":["Indokiinná áigi","Indokiinná áigi"]},"Asia/Phnom_Penh":{"long":["Indokiinná áigi","Indokiinná áigi"]},"Asia/Vientiane":{"long":["Indokiinná áigi","Indokiinná áigi"]},"Asia/Makassar":{"long":["Gaska-Indonesia áigi","Gaska-Indonesia áigi"]},"Asia/Jayapura":{"long":["Nuorta-Indonesia áigi","Nuorta-Indonesia áigi"]},"Asia/Jakarta":{"long":["Oarje-Indonesia áigi","Oarje-Indonesia áigi"]},"Asia/Tehran":{"long":["Irana dálveáigi","Irana geasseáigi"]},"Asia/Irkutsk":{"long":["Irkucka dálveáigi","Irkucka geasseáigi"]},"Asia/Jerusalem":{"long":["Israela dálveáigi","Israela geasseáigi"]},"Asia/Tokyo":{"long":["Japána dálveáigi","Japána geasseáigi"]},"Asia/Karachi":{"long":["Pakistana dálveáigi","Pakistana geasseáigi"]},"Asia/Seoul":{"long":["Korea dálveáigi","Korea geasseáigi"]},"Pacific/Kosrae":{"long":["Kosraea áigi","Kosraea áigi"]},"Asia/Krasnoyarsk":{"long":["Krasnojarska dálveáigi","Krasnojarska geasseáigi"]},"Pacific/Kiritimati":{"long":["Linesulloid áigi","Linesulloid áigi"]},"Australia/Lord_Howe":{"long":["Lord Howe dálveáigi","Lord Howe geasseáigi"]},"Antarctica/Macquarie":{"long":["MacQuarie sullo áigi","MacQuarie sullo áigi"]},"Asia/Magadan":{"long":["Magadana dálveáigi","Magadana geasseáigi"]},"Indian/Maldives":{"long":["Malediivvaid áigi","Malediivvaid áigi"]},"Pacific/Marquesas":{"long":["Marquesasiid áigi","Marquesasiid áigi"]},"Pacific/Majuro":{"long":["Marshallsulloid áigi","Marshallsulloid áigi"]},"Indian/Mauritius":{"long":["Mauritiusa dálveáigi","Mauritiusa geasseáigi"]},"Antarctica/Mawson":{"long":["Mawsona áigi","Mawsona áigi"]},"America/Santa_Isabel":{"long":["Oarjedavvi-Meksiko dálveáigi","Oarjedavvi-Meksiko geasseáigi"]},"America/Mazatlan":{"long":["Meksiko Jáskesábi dálveáigi","Meksiko Jáskesábi geasseáigi"]},"Asia/Ulaanbaatar":{"long":["Ulan-Batora dálveáigi","Ulan-Batora geasseáigi"]},"Europe/Moscow":{"long":["Moskva dálveáigi","Moskva geasseáigi"]},"Asia/Rangoon":{"long":["Myanmara áigi","Myanmara áigi"]},"Pacific/Nauru":{"long":["Nauru áigi","Nauru áigi"]},"Asia/Katmandu":{"long":["Nepala áigi","Nepala áigi"]},"Pacific/Noumea":{"long":["Ođđa-Kaledonia dálveáigi","Ođđa-Kaledonia geasseáigi"]},"Pacific/Auckland":{"long":["Ođđa-Selánda dálveáigi","Ođđa-Selánda geasseáigi"]},"Antarctica/McMurdo":{"long":["Ođđa-Selánda dálveáigi","Ođđa-Selánda geasseáigi"]},"America/St_Johns":{"long":["Newfoundlanda dálveáigi","Newfoundlanda geasseáigi"]},"Pacific/Niue":{"long":["Niuea áigi","Niuea áigi"]},"Pacific/Norfolk":{"long":["Norfolksullo áigi","Norfolksullo áigi"]},"America/Noronha":{"long":["Fernando de Noronha dálveáigi","Fernando de Noronha geasseáigi"]},"Asia/Novosibirsk":{"long":["Novosibirska dálveáigi","Novosibirska geasseáigi"]},"Asia/Omsk":{"long":["Omska dálveáigi","Omska geasseáigi"]},"Pacific/Palau":{"long":["Palaua áigi","Palaua áigi"]},"Pacific/Port_Moresby":{"long":["Papua Ođđa-Guinea áigi","Papua Ođđa-Guinea áigi"]},"America/Asuncion":{"long":["Paraguaya dálveáigi","Paraguaya geasseáigi"]},"America/Lima":{"long":["Peru dálveáigi","Peru geasseáigi"]},"Asia/Manila":{"long":["Filippiinnaid dálveáigi","Filippiinnaid geasseáigi"]},"Pacific/Enderbury":{"long":["Phoenixsulloid áigi","Phoenixsulloid áigi"]},"America/Miquelon":{"long":["St. Pierre & Miquelo dálveáigi","St. Pierre & Miquelo geasseáigi"]},"Pacific/Pitcairn":{"long":["Pitcairnsulloid áigi","Pitcairnsulloid áigi"]},"Pacific/Ponape":{"long":["Ponape áigi","Ponape áigi"]},"Asia/Pyongyang":{"long":["Pyongyanga áigi","Pyongyanga áigi"]},"Indian/Reunion":{"long":["Reuniona áigi","Reuniona áigi"]},"Antarctica/Rothera":{"long":["Rothera áigi","Rothera áigi"]},"Asia/Sakhalin":{"long":["Sahalina dálveáigi","Sahalina geasseáigi"]},"Pacific/Pago_Pago":{"long":["Samoa dálveáigi","Samoa geasseáigi"]},"Indian/Mahe":{"long":["Seychellaid áigi","Seychellaid áigi"]},"Asia/Singapore":{"long":["Singapore dálveáigi","Singapore dálveáigi"]},"Pacific/Guadalcanal":{"long":["Salomonsulloid áigi","Salomonsulloid áigi"]},"Atlantic/South_Georgia":{"long":["Lulli-Georgia áigi","Lulli-Georgia áigi"]},"Asia/Yekaterinburg":{"long":["Jekaterinburga dálveáigi","Jekaterinburga geasseáigi"]},"Antarctica/Syowa":{"long":["Syowa áigi","Syowa áigi"]},"Pacific/Tahiti":{"long":["Tahiti áigi","Tahiti áigi"]},"Asia/Taipei":{"long":["Taipeia dálveáigi","Taipeia geasseáigi"]},"Asia/Tashkent":{"long":["Usbekistana dálveáigi","Usbekistana geasseáigi"]},"Pacific/Fakaofo":{"long":["Tokelaua áigi","Tokelaua áigi"]},"Pacific/Tongatapu":{"long":["Tonga dálveáigi","Tonga geasseáigi"]},"Pacific/Truk":{"long":["Chuuka áigi","Chuuka áigi"]},"Pacific/Funafuti":{"long":["Tuvalu áigi","Tuvalu áigi"]},"America/Montevideo":{"long":["Uruguaya dálveáigi","Uruguaya geasseáigi"]},"Pacific/Efate":{"long":["Vanuatu dálveáigi","Vanuatu geasseáigi"]},"America/Caracas":{"long":["Venezuela áigi","Venezuela áigi"]},"Asia/Vladivostok":{"long":["Vladivostoka dálveáigi","Vladivostoka geasseáigi"]},"Europe/Volgograd":{"long":["Volgograda dálveáigi","Volgograda geasseáigi"]},"Antarctica/Vostok":{"long":["Vostoka áigi","Vostoka áigi"]},"Pacific/Wake":{"long":["Wakesullo áigi","Wakesullo áigi"]},"Pacific/Wallis":{"long":["Wallis- ja Futuna áigi","Wallis- ja Futuna áigi"]},"Asia/Yakutsk":{"long":["Jakucka dálveáigi","Jakucka geasseáigi"]},"UTC":{"long":["koordinerejuvvon oktasaš áigi","koordinerejuvvon oktasaš áigi"],"short":["UTC","UTC"]}},"gmtFormat":"{0} GMT","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"EEEE d MMMM y","long":"d MMMM y","medium":"d MMM y","short":"dd.MM.y"},"timeFormat":{"full":"HH:mm:ss zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"dateTimeFormat":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"d E","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"y G","GyMMM":"MMM y G","GyMMMd":"d MMM y G","GyMMMEd":"E d MMM y G","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"d/M","MEd":"E d.M","MMM":"LLL","MMMd":"d MMM","MMMEd":"E d MMM","MMMMd":"d MMMM","ms":"mm:ss","y":"y","yM":"MM.y","yMd":"dd.MM.y","yMEd":"E dd.MM.y","yMMM":"MMM y","yMMMd":"d MMM y","yMMMEd":"E d MMM y","yMMMM":"MMMM y","EEEE d MMMM y":"EEEE d MMMM y","d MMMM y":"d MMMM y","d MMM y":"d MMM y","dd.MM.y":"dd.MM.y","HH:mm:ss zzzz":"HH:mm:ss zzzz","HH:mm:ss z":"HH:mm:ss z","HH:mm:ss":"HH:mm:ss","HH:mm":"HH:mm","EEEE d MMMM y HH:mm:ss zzzz":"EEEE d MMMM y HH:mm:ss zzzz","d MMMM y HH:mm:ss zzzz":"d MMMM y HH:mm:ss zzzz","d MMM y HH:mm:ss zzzz":"d MMM y HH:mm:ss zzzz","dd.MM.y HH:mm:ss zzzz":"dd.MM.y HH:mm:ss zzzz","d HH:mm:ss zzzz":"d HH:mm:ss zzzz","E HH:mm:ss zzzz":"ccc HH:mm:ss zzzz","Ed HH:mm:ss zzzz":"d E HH:mm:ss zzzz","Gy HH:mm:ss zzzz":"y G HH:mm:ss zzzz","GyMMM HH:mm:ss zzzz":"MMM y G HH:mm:ss zzzz","GyMMMd HH:mm:ss zzzz":"d MMM y G HH:mm:ss zzzz","GyMMMEd HH:mm:ss zzzz":"E d MMM y G HH:mm:ss zzzz","M HH:mm:ss zzzz":"L HH:mm:ss zzzz","Md HH:mm:ss zzzz":"d/M HH:mm:ss zzzz","MEd HH:mm:ss zzzz":"E d.M HH:mm:ss zzzz","MMM HH:mm:ss zzzz":"LLL HH:mm:ss zzzz","MMMd HH:mm:ss zzzz":"d MMM HH:mm:ss zzzz","MMMEd HH:mm:ss zzzz":"E d MMM HH:mm:ss zzzz","MMMMd HH:mm:ss zzzz":"d MMMM HH:mm:ss zzzz","y HH:mm:ss zzzz":"y HH:mm:ss zzzz","yM HH:mm:ss zzzz":"MM.y HH:mm:ss zzzz","yMd HH:mm:ss zzzz":"dd.MM.y HH:mm:ss zzzz","yMEd HH:mm:ss zzzz":"E dd.MM.y HH:mm:ss zzzz","yMMM HH:mm:ss zzzz":"MMM y HH:mm:ss zzzz","yMMMd HH:mm:ss zzzz":"d MMM y HH:mm:ss zzzz","yMMMEd HH:mm:ss zzzz":"E d MMM y HH:mm:ss zzzz","yMMMM HH:mm:ss zzzz":"MMMM y HH:mm:ss zzzz","EEEE d MMMM y HH:mm:ss z":"EEEE d MMMM y HH:mm:ss z","d MMMM y HH:mm:ss z":"d MMMM y HH:mm:ss z","d MMM y HH:mm:ss z":"d MMM y HH:mm:ss z","dd.MM.y HH:mm:ss z":"dd.MM.y HH:mm:ss z","d HH:mm:ss z":"d HH:mm:ss z","E HH:mm:ss z":"ccc HH:mm:ss z","Ed HH:mm:ss z":"d E HH:mm:ss z","Gy HH:mm:ss z":"y G HH:mm:ss z","GyMMM HH:mm:ss z":"MMM y G HH:mm:ss z","GyMMMd HH:mm:ss z":"d MMM y G HH:mm:ss z","GyMMMEd HH:mm:ss z":"E d MMM y G HH:mm:ss z","M HH:mm:ss z":"L HH:mm:ss z","Md HH:mm:ss z":"d/M HH:mm:ss z","MEd HH:mm:ss z":"E d.M HH:mm:ss z","MMM HH:mm:ss z":"LLL HH:mm:ss z","MMMd HH:mm:ss z":"d MMM HH:mm:ss z","MMMEd HH:mm:ss z":"E d MMM HH:mm:ss z","MMMMd HH:mm:ss z":"d MMMM HH:mm:ss z","y HH:mm:ss z":"y HH:mm:ss z","yM HH:mm:ss z":"MM.y HH:mm:ss z","yMd HH:mm:ss z":"dd.MM.y HH:mm:ss z","yMEd HH:mm:ss z":"E dd.MM.y HH:mm:ss z","yMMM HH:mm:ss z":"MMM y HH:mm:ss z","yMMMd HH:mm:ss z":"d MMM y HH:mm:ss z","yMMMEd HH:mm:ss z":"E d MMM y HH:mm:ss z","yMMMM HH:mm:ss z":"MMMM y HH:mm:ss z","EEEE d MMMM y HH:mm:ss":"EEEE d MMMM y HH:mm:ss","d MMMM y HH:mm:ss":"d MMMM y HH:mm:ss","d MMM y HH:mm:ss":"d MMM y HH:mm:ss","dd.MM.y HH:mm:ss":"dd.MM.y HH:mm:ss","d HH:mm:ss":"d HH:mm:ss","E HH:mm:ss":"ccc HH:mm:ss","Ed HH:mm:ss":"d E HH:mm:ss","Gy HH:mm:ss":"y G HH:mm:ss","GyMMM HH:mm:ss":"MMM y G HH:mm:ss","GyMMMd HH:mm:ss":"d MMM y G HH:mm:ss","GyMMMEd HH:mm:ss":"E d MMM y G HH:mm:ss","M HH:mm:ss":"L HH:mm:ss","Md HH:mm:ss":"d/M HH:mm:ss","MEd HH:mm:ss":"E d.M HH:mm:ss","MMM HH:mm:ss":"LLL HH:mm:ss","MMMd HH:mm:ss":"d MMM HH:mm:ss","MMMEd HH:mm:ss":"E d MMM HH:mm:ss","MMMMd HH:mm:ss":"d MMMM HH:mm:ss","y HH:mm:ss":"y HH:mm:ss","yM HH:mm:ss":"MM.y HH:mm:ss","yMd HH:mm:ss":"dd.MM.y HH:mm:ss","yMEd HH:mm:ss":"E dd.MM.y HH:mm:ss","yMMM HH:mm:ss":"MMM y HH:mm:ss","yMMMd HH:mm:ss":"d MMM y HH:mm:ss","yMMMEd HH:mm:ss":"E d MMM y HH:mm:ss","yMMMM HH:mm:ss":"MMMM y HH:mm:ss","EEEE d MMMM y HH:mm":"EEEE d MMMM y HH:mm","d MMMM y HH:mm":"d MMMM y HH:mm","d MMM y HH:mm":"d MMM y HH:mm","dd.MM.y HH:mm":"dd.MM.y HH:mm","d HH:mm":"d HH:mm","E HH:mm":"ccc HH:mm","Ed HH:mm":"d E HH:mm","Gy HH:mm":"y G HH:mm","GyMMM HH:mm":"MMM y G HH:mm","GyMMMd HH:mm":"d MMM y G HH:mm","GyMMMEd HH:mm":"E d MMM y G HH:mm","M HH:mm":"L HH:mm","Md HH:mm":"d/M HH:mm","MEd HH:mm":"E d.M HH:mm","MMM HH:mm":"LLL HH:mm","MMMd HH:mm":"d MMM HH:mm","MMMEd HH:mm":"E d MMM HH:mm","MMMMd HH:mm":"d MMMM HH:mm","y HH:mm":"y HH:mm","yM HH:mm":"MM.y HH:mm","yMd HH:mm":"dd.MM.y HH:mm","yMEd HH:mm":"E dd.MM.y HH:mm","yMMM HH:mm":"MMM y HH:mm","yMMMd HH:mm":"d MMM y HH:mm","yMMMEd HH:mm":"E d MMM y HH:mm","yMMMM HH:mm":"MMMM y HH:mm","EEEE d MMMM y Bh":"EEEE d MMMM y h B","d MMMM y Bh":"d MMMM y h B","d MMM y Bh":"d MMM y h B","dd.MM.y Bh":"dd.MM.y h B","d Bh":"d h B","E Bh":"ccc h B","Ed Bh":"d E h B","Gy Bh":"y G h B","GyMMM Bh":"MMM y G h B","GyMMMd Bh":"d MMM y G h B","GyMMMEd Bh":"E d MMM y G h B","M Bh":"L h B","Md Bh":"d/M h B","MEd Bh":"E d.M h B","MMM Bh":"LLL h B","MMMd Bh":"d MMM h B","MMMEd Bh":"E d MMM h B","MMMMd Bh":"d MMMM h B","y Bh":"y h B","yM Bh":"MM.y h B","yMd Bh":"dd.MM.y h B","yMEd Bh":"E dd.MM.y h B","yMMM Bh":"MMM y h B","yMMMd Bh":"d MMM y h B","yMMMEd Bh":"E d MMM y h B","yMMMM Bh":"MMMM y h B","EEEE d MMMM y Bhm":"EEEE d MMMM y h:mm B","d MMMM y Bhm":"d MMMM y h:mm B","d MMM y Bhm":"d MMM y h:mm B","dd.MM.y Bhm":"dd.MM.y h:mm B","d Bhm":"d h:mm B","E Bhm":"ccc h:mm B","Ed Bhm":"d E h:mm B","Gy Bhm":"y G h:mm B","GyMMM Bhm":"MMM y G h:mm B","GyMMMd Bhm":"d MMM y G h:mm B","GyMMMEd Bhm":"E d MMM y G h:mm B","M Bhm":"L h:mm B","Md Bhm":"d/M h:mm B","MEd Bhm":"E d.M h:mm B","MMM Bhm":"LLL h:mm B","MMMd Bhm":"d MMM h:mm B","MMMEd Bhm":"E d MMM h:mm B","MMMMd Bhm":"d MMMM h:mm B","y Bhm":"y h:mm B","yM Bhm":"MM.y h:mm B","yMd Bhm":"dd.MM.y h:mm B","yMEd Bhm":"E dd.MM.y h:mm B","yMMM Bhm":"MMM y h:mm B","yMMMd Bhm":"d MMM y h:mm B","yMMMEd Bhm":"E d MMM y h:mm B","yMMMM Bhm":"MMMM y h:mm B","EEEE d MMMM y Bhms":"EEEE d MMMM y h:mm:ss B","d MMMM y Bhms":"d MMMM y h:mm:ss B","d MMM y Bhms":"d MMM y h:mm:ss B","dd.MM.y Bhms":"dd.MM.y h:mm:ss B","d Bhms":"d h:mm:ss B","E Bhms":"ccc h:mm:ss B","Ed Bhms":"d E h:mm:ss B","Gy Bhms":"y G h:mm:ss B","GyMMM Bhms":"MMM y G h:mm:ss B","GyMMMd Bhms":"d MMM y G h:mm:ss B","GyMMMEd Bhms":"E d MMM y G h:mm:ss B","M Bhms":"L h:mm:ss B","Md Bhms":"d/M h:mm:ss B","MEd Bhms":"E d.M h:mm:ss B","MMM Bhms":"LLL h:mm:ss B","MMMd Bhms":"d MMM h:mm:ss B","MMMEd Bhms":"E d MMM h:mm:ss B","MMMMd Bhms":"d MMMM h:mm:ss B","y Bhms":"y h:mm:ss B","yM Bhms":"MM.y h:mm:ss B","yMd Bhms":"dd.MM.y h:mm:ss B","yMEd Bhms":"E dd.MM.y h:mm:ss B","yMMM Bhms":"MMM y h:mm:ss B","yMMMd Bhms":"d MMM y h:mm:ss B","yMMMEd Bhms":"E d MMM y h:mm:ss B","yMMMM Bhms":"MMMM y h:mm:ss B","EEEE d MMMM y h":"EEEE d MMMM y h a","d MMMM y h":"d MMMM y h a","d MMM y h":"d MMM y h a","dd.MM.y h":"dd.MM.y h a","d h":"d h a","E h":"ccc h a","Ed h":"d E h a","Gy h":"y G h a","GyMMM h":"MMM y G h a","GyMMMd h":"d MMM y G h a","GyMMMEd h":"E d MMM y G h a","M h":"L h a","Md h":"d/M h a","MEd h":"E d.M h a","MMM h":"LLL h a","MMMd h":"d MMM h a","MMMEd h":"E d MMM h a","MMMMd h":"d MMMM h a","y h":"y h a","yM h":"MM.y h a","yMd h":"dd.MM.y h a","yMEd h":"E dd.MM.y h a","yMMM h":"MMM y h a","yMMMd h":"d MMM y h a","yMMMEd h":"E d MMM y h a","yMMMM h":"MMMM y h a","EEEE d MMMM y H":"EEEE d MMMM y HH","d MMMM y H":"d MMMM y HH","d MMM y H":"d MMM y HH","dd.MM.y H":"dd.MM.y HH","d H":"d HH","E H":"ccc HH","Ed H":"d E HH","Gy H":"y G HH","GyMMM H":"MMM y G HH","GyMMMd H":"d MMM y G HH","GyMMMEd H":"E d MMM y G HH","M H":"L HH","Md H":"d/M HH","MEd H":"E d.M HH","MMM H":"LLL HH","MMMd H":"d MMM HH","MMMEd H":"E d MMM HH","MMMMd H":"d MMMM HH","y H":"y HH","yM H":"MM.y HH","yMd H":"dd.MM.y HH","yMEd H":"E dd.MM.y HH","yMMM H":"MMM y HH","yMMMd H":"d MMM y HH","yMMMEd H":"E d MMM y HH","yMMMM H":"MMMM y HH","EEEE d MMMM y hm":"EEEE d MMMM y h:mm a","d MMMM y hm":"d MMMM y h:mm a","d MMM y hm":"d MMM y h:mm a","dd.MM.y hm":"dd.MM.y h:mm a","d hm":"d h:mm a","E hm":"ccc h:mm a","Ed hm":"d E h:mm a","Gy hm":"y G h:mm a","GyMMM hm":"MMM y G h:mm a","GyMMMd hm":"d MMM y G h:mm a","GyMMMEd hm":"E d MMM y G h:mm a","M hm":"L h:mm a","Md hm":"d/M h:mm a","MEd hm":"E d.M h:mm a","MMM hm":"LLL h:mm a","MMMd hm":"d MMM h:mm a","MMMEd hm":"E d MMM h:mm a","MMMMd hm":"d MMMM h:mm a","y hm":"y h:mm a","yM hm":"MM.y h:mm a","yMd hm":"dd.MM.y h:mm a","yMEd hm":"E dd.MM.y h:mm a","yMMM hm":"MMM y h:mm a","yMMMd hm":"d MMM y h:mm a","yMMMEd hm":"E d MMM y h:mm a","yMMMM hm":"MMMM y h:mm a","EEEE d MMMM y Hm":"EEEE d MMMM y HH:mm","d MMMM y Hm":"d MMMM y HH:mm","d MMM y Hm":"d MMM y HH:mm","dd.MM.y Hm":"dd.MM.y HH:mm","d Hm":"d HH:mm","E Hm":"ccc HH:mm","Ed Hm":"d E HH:mm","Gy Hm":"y G HH:mm","GyMMM Hm":"MMM y G HH:mm","GyMMMd Hm":"d MMM y G HH:mm","GyMMMEd Hm":"E d MMM y G HH:mm","M Hm":"L HH:mm","Md Hm":"d/M HH:mm","MEd Hm":"E d.M HH:mm","MMM Hm":"LLL HH:mm","MMMd Hm":"d MMM HH:mm","MMMEd Hm":"E d MMM HH:mm","MMMMd Hm":"d MMMM HH:mm","y Hm":"y HH:mm","yM Hm":"MM.y HH:mm","yMd Hm":"dd.MM.y HH:mm","yMEd Hm":"E dd.MM.y HH:mm","yMMM Hm":"MMM y HH:mm","yMMMd Hm":"d MMM y HH:mm","yMMMEd Hm":"E d MMM y HH:mm","yMMMM Hm":"MMMM y HH:mm","EEEE d MMMM y hms":"EEEE d MMMM y h:mm:ss a","d MMMM y hms":"d MMMM y h:mm:ss a","d MMM y hms":"d MMM y h:mm:ss a","dd.MM.y hms":"dd.MM.y h:mm:ss a","d hms":"d h:mm:ss a","E hms":"ccc h:mm:ss a","Ed hms":"d E h:mm:ss a","Gy hms":"y G h:mm:ss a","GyMMM hms":"MMM y G h:mm:ss a","GyMMMd hms":"d MMM y G h:mm:ss a","GyMMMEd hms":"E d MMM y G h:mm:ss a","M hms":"L h:mm:ss a","Md hms":"d/M h:mm:ss a","MEd hms":"E d.M h:mm:ss a","MMM hms":"LLL h:mm:ss a","MMMd hms":"d MMM h:mm:ss a","MMMEd hms":"E d MMM h:mm:ss a","MMMMd hms":"d MMMM h:mm:ss a","y hms":"y h:mm:ss a","yM hms":"MM.y h:mm:ss a","yMd hms":"dd.MM.y h:mm:ss a","yMEd hms":"E dd.MM.y h:mm:ss a","yMMM hms":"MMM y h:mm:ss a","yMMMd hms":"d MMM y h:mm:ss a","yMMMEd hms":"E d MMM y h:mm:ss a","yMMMM hms":"MMMM y h:mm:ss a","EEEE d MMMM y Hms":"EEEE d MMMM y HH:mm:ss","d MMMM y Hms":"d MMMM y HH:mm:ss","d MMM y Hms":"d MMM y HH:mm:ss","dd.MM.y Hms":"dd.MM.y HH:mm:ss","d Hms":"d HH:mm:ss","E Hms":"ccc HH:mm:ss","Ed Hms":"d E HH:mm:ss","Gy Hms":"y G HH:mm:ss","GyMMM Hms":"MMM y G HH:mm:ss","GyMMMd Hms":"d MMM y G HH:mm:ss","GyMMMEd Hms":"E d MMM y G HH:mm:ss","M Hms":"L HH:mm:ss","Md Hms":"d/M HH:mm:ss","MEd Hms":"E d.M HH:mm:ss","MMM Hms":"LLL HH:mm:ss","MMMd Hms":"d MMM HH:mm:ss","MMMEd Hms":"E d MMM HH:mm:ss","MMMMd Hms":"d MMMM HH:mm:ss","y Hms":"y HH:mm:ss","yM Hms":"MM.y HH:mm:ss","yMd Hms":"dd.MM.y HH:mm:ss","yMEd Hms":"E dd.MM.y HH:mm:ss","yMMM Hms":"MMM y HH:mm:ss","yMMMd Hms":"d MMM y HH:mm:ss","yMMMEd Hms":"E d MMM y HH:mm:ss","yMMMM Hms":"MMMM y HH:mm:ss","EEEE d MMMM y hmsv":"EEEE d MMMM y h:mm:ss a v","d MMMM y hmsv":"d MMMM y h:mm:ss a v","d MMM y hmsv":"d MMM y h:mm:ss a v","dd.MM.y hmsv":"dd.MM.y h:mm:ss a v","d hmsv":"d h:mm:ss a v","E hmsv":"ccc h:mm:ss a v","Ed hmsv":"d E h:mm:ss a v","Gy hmsv":"y G h:mm:ss a v","GyMMM hmsv":"MMM y G h:mm:ss a v","GyMMMd hmsv":"d MMM y G h:mm:ss a v","GyMMMEd hmsv":"E d MMM y G h:mm:ss a v","M hmsv":"L h:mm:ss a v","Md hmsv":"d/M h:mm:ss a v","MEd hmsv":"E d.M h:mm:ss a v","MMM hmsv":"LLL h:mm:ss a v","MMMd hmsv":"d MMM h:mm:ss a v","MMMEd hmsv":"E d MMM h:mm:ss a v","MMMMd hmsv":"d MMMM h:mm:ss a v","y hmsv":"y h:mm:ss a v","yM hmsv":"MM.y h:mm:ss a v","yMd hmsv":"dd.MM.y h:mm:ss a v","yMEd hmsv":"E dd.MM.y h:mm:ss a v","yMMM hmsv":"MMM y h:mm:ss a v","yMMMd hmsv":"d MMM y h:mm:ss a v","yMMMEd hmsv":"E d MMM y h:mm:ss a v","yMMMM hmsv":"MMMM y h:mm:ss a v","EEEE d MMMM y Hmsv":"EEEE d MMMM y HH:mm:ss v","d MMMM y Hmsv":"d MMMM y HH:mm:ss v","d MMM y Hmsv":"d MMM y HH:mm:ss v","dd.MM.y Hmsv":"dd.MM.y HH:mm:ss v","d Hmsv":"d HH:mm:ss v","E Hmsv":"ccc HH:mm:ss v","Ed Hmsv":"d E HH:mm:ss v","Gy Hmsv":"y G HH:mm:ss v","GyMMM Hmsv":"MMM y G HH:mm:ss v","GyMMMd Hmsv":"d MMM y G HH:mm:ss v","GyMMMEd Hmsv":"E d MMM y G HH:mm:ss v","M Hmsv":"L HH:mm:ss v","Md Hmsv":"d/M HH:mm:ss v","MEd Hmsv":"E d.M HH:mm:ss v","MMM Hmsv":"LLL HH:mm:ss v","MMMd Hmsv":"d MMM HH:mm:ss v","MMMEd Hmsv":"E d MMM HH:mm:ss v","MMMMd Hmsv":"d MMMM HH:mm:ss v","y Hmsv":"y HH:mm:ss v","yM Hmsv":"MM.y HH:mm:ss v","yMd Hmsv":"dd.MM.y HH:mm:ss v","yMEd Hmsv":"E dd.MM.y HH:mm:ss v","yMMM Hmsv":"MMM y HH:mm:ss v","yMMMd Hmsv":"d MMM y HH:mm:ss v","yMMMEd Hmsv":"E d MMM y HH:mm:ss v","yMMMM Hmsv":"MMMM y HH:mm:ss v","EEEE d MMMM y hmv":"EEEE d MMMM y h:mm a v","d MMMM y hmv":"d MMMM y h:mm a v","d MMM y hmv":"d MMM y h:mm a v","dd.MM.y hmv":"dd.MM.y h:mm a v","d hmv":"d h:mm a v","E hmv":"ccc h:mm a v","Ed hmv":"d E h:mm a v","Gy hmv":"y G h:mm a v","GyMMM hmv":"MMM y G h:mm a v","GyMMMd hmv":"d MMM y G h:mm a v","GyMMMEd hmv":"E d MMM y G h:mm a v","M hmv":"L h:mm a v","Md hmv":"d/M h:mm a v","MEd hmv":"E d.M h:mm a v","MMM hmv":"LLL h:mm a v","MMMd hmv":"d MMM h:mm a v","MMMEd hmv":"E d MMM h:mm a v","MMMMd hmv":"d MMMM h:mm a v","y hmv":"y h:mm a v","yM hmv":"MM.y h:mm a v","yMd hmv":"dd.MM.y h:mm a v","yMEd hmv":"E dd.MM.y h:mm a v","yMMM hmv":"MMM y h:mm a v","yMMMd hmv":"d MMM y h:mm a v","yMMMEd hmv":"E d MMM y h:mm a v","yMMMM hmv":"MMMM y h:mm a v","EEEE d MMMM y Hmv":"EEEE d MMMM y HH:mm v","d MMMM y Hmv":"d MMMM y HH:mm v","d MMM y Hmv":"d MMM y HH:mm v","dd.MM.y Hmv":"dd.MM.y HH:mm v","d Hmv":"d HH:mm v","E Hmv":"ccc HH:mm v","Ed Hmv":"d E HH:mm v","Gy Hmv":"y G HH:mm v","GyMMM Hmv":"MMM y G HH:mm v","GyMMMd Hmv":"d MMM y G HH:mm v","GyMMMEd Hmv":"E d MMM y G HH:mm v","M Hmv":"L HH:mm v","Md Hmv":"d/M HH:mm v","MEd Hmv":"E d.M HH:mm v","MMM Hmv":"LLL HH:mm v","MMMd Hmv":"d MMM HH:mm v","MMMEd Hmv":"E d MMM HH:mm v","MMMMd Hmv":"d MMMM HH:mm v","y Hmv":"y HH:mm v","yM Hmv":"MM.y HH:mm v","yMd Hmv":"dd.MM.y HH:mm v","yMEd Hmv":"E dd.MM.y HH:mm v","yMMM Hmv":"MMM y HH:mm v","yMMMd Hmv":"d MMM y HH:mm v","yMMMEd Hmv":"E d MMM y HH:mm v","yMMMM Hmv":"MMMM y HH:mm v","EEEE d MMMM y ms":"EEEE d MMMM y mm:ss","d MMMM y ms":"d MMMM y mm:ss","d MMM y ms":"d MMM y mm:ss","dd.MM.y ms":"dd.MM.y mm:ss","d ms":"d mm:ss","E ms":"ccc mm:ss","Ed ms":"d E mm:ss","Gy ms":"y G mm:ss","GyMMM ms":"MMM y G mm:ss","GyMMMd ms":"d MMM y G mm:ss","GyMMMEd ms":"E d MMM y G mm:ss","M ms":"L mm:ss","Md ms":"d/M mm:ss","MEd ms":"E d.M mm:ss","MMM ms":"LLL mm:ss","MMMd ms":"d MMM mm:ss","MMMEd ms":"E d MMM mm:ss","MMMMd ms":"d MMMM mm:ss","y ms":"y mm:ss","yM ms":"MM.y mm:ss","yMd ms":"dd.MM.y mm:ss","yMEd ms":"E dd.MM.y mm:ss","yMMM ms":"MMM y mm:ss","yMMMd ms":"d MMM y mm:ss","yMMMEd ms":"E d MMM y mm:ss","yMMMM ms":"MMMM y mm:ss"}},"hourCycle":"h23","nu":["latn"],"ca":["gregory"],"hc":["h23"]}},"availableLocales":["se-FI"]}
)
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
