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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("da").length
)) {
// Intl.DateTimeFormat.~locale.da
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"da":{"am":"AM","pm":"PM","weekday":{"narrow":["S","M","T","O","T","F","L"],"short":["søn.","man.","tir.","ons.","tor.","fre.","lør."],"long":["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},"era":{"narrow":{"BC":"fKr","AD":"eKr"},"short":{"BC":"f.Kr.","AD":"e.Kr."},"long":{"BC":"f.Kr.","AD":"e.Kr."}},"month":{"narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"short":["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],"long":["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},"timeZoneName":{"America/Rio_Branco":{"long":["Acre-normaltid","Acre-sommertid"]},"Asia/Kabul":{"long":["Afghansk tid","Afghansk tid"]},"Africa/Maputo":{"long":["Centralafrikansk tid","Centralafrikansk tid"]},"Africa/Bujumbura":{"long":["Centralafrikansk tid","Centralafrikansk tid"]},"Africa/Gaborone":{"long":["Centralafrikansk tid","Centralafrikansk tid"]},"Africa/Lubumbashi":{"long":["Centralafrikansk tid","Centralafrikansk tid"]},"Africa/Blantyre":{"long":["Centralafrikansk tid","Centralafrikansk tid"]},"Africa/Kigali":{"long":["Centralafrikansk tid","Centralafrikansk tid"]},"Africa/Lusaka":{"long":["Centralafrikansk tid","Centralafrikansk tid"]},"Africa/Harare":{"long":["Centralafrikansk tid","Centralafrikansk tid"]},"Africa/Nairobi":{"long":["Østafrikansk tid","Østafrikansk tid"]},"Africa/Djibouti":{"long":["Østafrikansk tid","Østafrikansk tid"]},"Africa/Asmera":{"long":["Østafrikansk tid","Østafrikansk tid"]},"Africa/Addis_Ababa":{"long":["Østafrikansk tid","Østafrikansk tid"]},"Indian/Comoro":{"long":["Østafrikansk tid","Østafrikansk tid"]},"Indian/Antananarivo":{"long":["Østafrikansk tid","Østafrikansk tid"]},"Africa/Mogadishu":{"long":["Østafrikansk tid","Østafrikansk tid"]},"Africa/Dar_es_Salaam":{"long":["Østafrikansk tid","Østafrikansk tid"]},"Africa/Kampala":{"long":["Østafrikansk tid","Østafrikansk tid"]},"Indian/Mayotte":{"long":["Østafrikansk tid","Østafrikansk tid"]},"Africa/Johannesburg":{"long":["Sydafrikansk tid","Sydafrikansk tid"]},"Africa/Maseru":{"long":["Sydafrikansk tid","Sydafrikansk tid"]},"Africa/Mbabane":{"long":["Sydafrikansk tid","Sydafrikansk tid"]},"Africa/Lagos":{"long":["Vestafrikansk normaltid","Vestafrikansk sommertid"]},"Africa/Luanda":{"long":["Vestafrikansk normaltid","Vestafrikansk sommertid"]},"Africa/Porto-Novo":{"long":["Vestafrikansk normaltid","Vestafrikansk sommertid"]},"Africa/Kinshasa":{"long":["Vestafrikansk normaltid","Vestafrikansk sommertid"]},"Africa/Bangui":{"long":["Vestafrikansk normaltid","Vestafrikansk sommertid"]},"Africa/Brazzaville":{"long":["Vestafrikansk normaltid","Vestafrikansk sommertid"]},"Africa/Douala":{"long":["Vestafrikansk normaltid","Vestafrikansk sommertid"]},"Africa/Libreville":{"long":["Vestafrikansk normaltid","Vestafrikansk sommertid"]},"Africa/Malabo":{"long":["Vestafrikansk normaltid","Vestafrikansk sommertid"]},"Africa/Niamey":{"long":["Vestafrikansk normaltid","Vestafrikansk sommertid"]},"Africa/Ndjamena":{"long":["Vestafrikansk normaltid","Vestafrikansk sommertid"]},"Asia/Aqtobe":{"long":["Vestkasakhstansk tid","Vestkasakhstansk tid"]},"America/Juneau":{"long":["Alaska-normaltid","Alaska-sommertid"]},"Asia/Almaty":{"long":["Østkasakhstansk tid","Østkasakhstansk tid"]},"America/Manaus":{"long":["Amazonas-normaltid","Amazonas-sommertid"]},"America/Chicago":{"long":["Central-normaltid","Central-sommertid"]},"America/Belize":{"long":["Central-normaltid","Central-sommertid"]},"America/Winnipeg":{"long":["Central-normaltid","Central-sommertid"]},"America/Costa_Rica":{"long":["Central-normaltid","Central-sommertid"]},"America/Guatemala":{"long":["Central-normaltid","Central-sommertid"]},"America/Tegucigalpa":{"long":["Central-normaltid","Central-sommertid"]},"America/Mexico_City":{"long":["Central-normaltid","Central-sommertid"]},"America/El_Salvador":{"long":["Central-normaltid","Central-sommertid"]},"America/New_York":{"long":["Eastern-normaltid","Eastern-sommertid"]},"America/Nassau":{"long":["Eastern-normaltid","Eastern-sommertid"]},"America/Toronto":{"long":["Eastern-normaltid","Eastern-sommertid"]},"America/Port-au-Prince":{"long":["Eastern-normaltid","Eastern-sommertid"]},"America/Jamaica":{"long":["Eastern-normaltid","Eastern-sommertid"]},"America/Cayman":{"long":["Eastern-normaltid","Eastern-sommertid"]},"America/Panama":{"long":["Eastern-normaltid","Eastern-sommertid"]},"America/Denver":{"long":["Mountain-normaltid","Mountain-sommertid"]},"America/Edmonton":{"long":["Mountain-normaltid","Mountain-sommertid"]},"America/Hermosillo":{"long":["Mountain-normaltid","Mountain-sommertid"]},"America/Los_Angeles":{"long":["Pacific-normaltid","Pacific-sommertid"]},"America/Vancouver":{"long":["Pacific-normaltid","Pacific-sommertid"]},"America/Tijuana":{"long":["Pacific-normaltid","Pacific-sommertid"]},"Asia/Anadyr":{"long":["Anadyr-normaltid","Anadyr-sommertid"]},"Pacific/Apia":{"long":["Apia-normaltid","Apia-sommertid"]},"Asia/Riyadh":{"long":["Arabisk normaltid","Arabisk sommertid"]},"Asia/Bahrain":{"long":["Arabisk normaltid","Arabisk sommertid"]},"Asia/Baghdad":{"long":["Arabisk normaltid","Arabisk sommertid"]},"Asia/Kuwait":{"long":["Arabisk normaltid","Arabisk sommertid"]},"Asia/Qatar":{"long":["Arabisk normaltid","Arabisk sommertid"]},"Asia/Aden":{"long":["Arabisk normaltid","Arabisk sommertid"]},"America/Buenos_Aires":{"long":["Argentinsk normaltid","Argentinsk sommertid"]},"America/Argentina/San_Luis":{"long":["Vestargentinsk normaltid","Vestargentinsk sommertid"]},"Asia/Ashgabat":{"long":["Turkmensk normaltid","Turkmensk sommertid"]},"America/Halifax":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Antigua":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Anguilla":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Aruba":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Barbados":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"Atlantic/Bermuda":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Kralendijk":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Curacao":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Dominica":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Grenada":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Thule":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Guadeloupe":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/St_Kitts":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/St_Lucia":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Marigot":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Martinique":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Montserrat":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Puerto_Rico":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Lower_Princes":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Port_of_Spain":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/St_Vincent":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/Tortola":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"America/St_Thomas":{"long":["Atlantic-normaltid","Atlantic-sommertid"]},"Australia/Adelaide":{"long":["Centralaustralsk normaltid","Centralaustralsk sommertid"]},"Australia/Eucla":{"long":["Vestlig centralaustralsk normaltid","Vestlig centralaustralsk sommertid"]},"Australia/Sydney":{"long":["Østaustralsk normaltid","Østaustralsk sommertid"]},"Australia/Perth":{"long":["Vestaustralsk normaltid","Vestaustralsk sommertid"]},"Atlantic/Azores":{"long":["Azorerne-normaltid","Azorerne-sommertid"]},"Asia/Thimphu":{"long":["Bhutan-tid","Bhutan-tid"]},"America/La_Paz":{"long":["Boliviansk tid","Boliviansk tid"]},"Asia/Kuching":{"long":["Malaysia-tid","Malaysia-tid"]},"America/Sao_Paulo":{"long":["Brasiliansk normaltid","Brasiliansk sommertid"]},"Europe/London":{"long":["GMT","GMT"]},"Asia/Brunei":{"long":["Brunei Darussalam-tid","Brunei Darussalam-tid"]},"Atlantic/Cape_Verde":{"long":["Kap Verde-normaltid","Kap Verde-sommertid"]},"Pacific/Saipan":{"long":["Nordmarianerne-tid","Nordmarianerne-tid"]},"Pacific/Guam":{"long":["Guam-normaltid","Guam-normaltid"]},"Pacific/Chatham":{"long":["Chatham-normaltid","Chatham-sommertid"]},"America/Santiago":{"long":["Chilensk normaltid","Chilensk sommertid"]},"Asia/Shanghai":{"long":["Kinesisk normaltid","Kinesisk sommertid"]},"Asia/Choibalsan":{"long":["Tsjojbalsan-normaltid","Tsjojbalsan-sommertid"]},"Indian/Christmas":{"long":["Juleøen-normaltid","Juleøen-normaltid"]},"Indian/Cocos":{"long":["Cocosøerne-normaltid","Cocosøerne-normaltid"]},"America/Bogota":{"long":["Colombiansk normaltid","Colombiansk sommertid"]},"Pacific/Rarotonga":{"long":["Cookøerne-normaltid","Cookøerne-sommertid"]},"America/Havana":{"long":["Cubansk normaltid","Cubansk sommertid"]},"Antarctica/Davis":{"long":["Davis-tid","Davis-tid"]},"Antarctica/DumontDUrville":{"long":["Dumont-d’Urville-tid","Dumont-d’Urville-tid"]},"Asia/Dushanbe":{"long":["Tadsjikisk tid","Tadsjikisk tid"]},"America/Paramaribo":{"long":["Surinam-tid","Surinam-tid"]},"Asia/Dili":{"long":["Østtimor-tid","Østtimor-tid"]},"Pacific/Easter":{"long":["Påskeøen-normaltid","Påskeøen-sommertid"]},"America/Guayaquil":{"long":["Ecuadoriansk tid","Ecuadoriansk tid"]},"Europe/Paris":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Andorra":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Tirane":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Vienna":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Sarajevo":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Brussels":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Zurich":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Prague":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Berlin":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Copenhagen":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Madrid":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Gibraltar":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Zagreb":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Budapest":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Rome":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Vaduz":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Luxembourg":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Monaco":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Podgorica":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Skopje":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Malta":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Amsterdam":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Oslo":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Warsaw":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Belgrade":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Stockholm":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Ljubljana":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Bratislava":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/San_Marino":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Africa/Tunis":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Vatican":{"long":["Centraleuropæisk normaltid","Centraleuropæisk sommertid"],"short":["CET","CEST"]},"Europe/Bucharest":{"long":["Østeuropæisk normaltid","Østeuropæisk sommertid"],"short":["EET","EEST"]},"Europe/Mariehamn":{"long":["Østeuropæisk normaltid","Østeuropæisk sommertid"],"short":["EET","EEST"]},"Europe/Sofia":{"long":["Østeuropæisk normaltid","Østeuropæisk sommertid"],"short":["EET","EEST"]},"Asia/Nicosia":{"long":["Østeuropæisk normaltid","Østeuropæisk sommertid"],"short":["EET","EEST"]},"Africa/Cairo":{"long":["Østeuropæisk normaltid","Østeuropæisk sommertid"],"short":["EET","EEST"]},"Europe/Helsinki":{"long":["Østeuropæisk normaltid","Østeuropæisk sommertid"],"short":["EET","EEST"]},"Europe/Athens":{"long":["Østeuropæisk normaltid","Østeuropæisk sommertid"],"short":["EET","EEST"]},"Asia/Amman":{"long":["Østeuropæisk normaltid","Østeuropæisk sommertid"],"short":["EET","EEST"]},"Asia/Beirut":{"long":["Østeuropæisk normaltid","Østeuropæisk sommertid"],"short":["EET","EEST"]},"Asia/Damascus":{"long":["Østeuropæisk normaltid","Østeuropæisk sommertid"],"short":["EET","EEST"]},"Europe/Minsk":{"long":["Fjernøsteuropæisk tid","Fjernøsteuropæisk tid"]},"Europe/Kaliningrad":{"long":["Fjernøsteuropæisk tid","Fjernøsteuropæisk tid"]},"Atlantic/Canary":{"long":["Vesteuropæisk normaltid","Vesteuropæisk sommertid"],"short":["WET","WEST"]},"Atlantic/Faeroe":{"long":["Vesteuropæisk normaltid","Vesteuropæisk sommertid"],"short":["WET","WEST"]},"Atlantic/Stanley":{"long":["Falklandsøerne-normaltid","Falklandsøerne-sommertid"]},"Pacific/Fiji":{"long":["Fijiansk normaltid","Fijiansk sommertid"]},"America/Cayenne":{"long":["Fransk Guyana-tid","Fransk Guyana-tid"]},"Indian/Kerguelen":{"long":["Franske Sydlige og Antarktiske Territorier-tid","Franske Sydlige og Antarktiske Territorier-tid"]},"Asia/Bishkek":{"long":["Kirgisisk tid","Kirgisisk tid"]},"Pacific/Galapagos":{"long":["Galapagos-tid","Galapagos-tid"]},"Pacific/Gambier":{"long":["Gambier-tid","Gambier-tid"]},"Pacific/Tarawa":{"long":["Gilbertøerne-tid","Gilbertøerne-tid"]},"Atlantic/Reykjavik":{"long":["GMT","GMT"]},"Africa/Ouagadougou":{"long":["GMT","GMT"]},"Africa/Abidjan":{"long":["GMT","GMT"]},"Africa/Accra":{"long":["GMT","GMT"]},"Africa/Banjul":{"long":["GMT","GMT"]},"Africa/Conakry":{"long":["GMT","GMT"]},"Africa/Bamako":{"long":["GMT","GMT"]},"Africa/Nouakchott":{"long":["GMT","GMT"]},"Atlantic/St_Helena":{"long":["GMT","GMT"]},"Africa/Freetown":{"long":["GMT","GMT"]},"Africa/Dakar":{"long":["GMT","GMT"]},"Africa/Lome":{"long":["GMT","GMT"]},"America/Scoresbysund":{"long":["Østgrønlandsk normaltid","Østgrønlandsk sommertid"]},"America/Godthab":{"long":["Vestgrønlandsk normaltid","Vestgrønlandsk sommertid"]},"Asia/Dubai":{"long":["Golflandene-normaltid","Golflandene-normaltid"]},"Asia/Muscat":{"long":["Golflandene-normaltid","Golflandene-normaltid"]},"America/Guyana":{"long":["Guyana-tid","Guyana-tid"]},"Pacific/Honolulu":{"long":["Hawaii-Aleutian-normaltid","Hawaii-Aleutian-sommertid"]},"Asia/Hong_Kong":{"long":["Hongkong-normaltid","Hongkong-sommertid"]},"Asia/Hovd":{"long":["Hovd-normaltid","Hovd-sommertid"]},"Asia/Calcutta":{"long":["Indisk normaltid","Indisk normaltid"]},"Asia/Colombo":{"long":["Langa tid","Langa tid"]},"Indian/Chagos":{"long":["Indiske Ocean-normaltid","Indiske Ocean-normaltid"]},"Asia/Bangkok":{"long":["Indokina-tid","Indokina-tid"]},"Asia/Phnom_Penh":{"long":["Indokina-tid","Indokina-tid"]},"Asia/Vientiane":{"long":["Indokina-tid","Indokina-tid"]},"Asia/Makassar":{"long":["Centralindonesisk tid","Centralindonesisk tid"]},"Asia/Jayapura":{"long":["Østindonesisk tid","Østindonesisk tid"]},"Asia/Jakarta":{"long":["Vestindonesisk tid","Vestindonesisk tid"]},"Asia/Tehran":{"long":["Iransk normaltid","Iransk sommertid"]},"Asia/Irkutsk":{"long":["Irkutsk-normaltid","Irkutsk-sommertid"]},"Asia/Jerusalem":{"long":["Israelsk normaltid","Israelsk sommertid"]},"Asia/Tokyo":{"long":["Japansk normaltid","Japansk sommertid"]},"Asia/Kamchatka":{"long":["Petropavlovsk-Kamchatski normaltid","Petropavlovsk-Kamchatski sommertid"]},"Asia/Karachi":{"long":["Pakistansk normaltid","Pakistansk sommertid"]},"Asia/Qyzylorda":{"long":["Qyzylorda-normaltid","Qyzylorda-sommertid"]},"Asia/Seoul":{"long":["Koreansk normaltid","Koreansk sommertid"]},"Pacific/Kosrae":{"long":["Kosrae-tid","Kosrae-tid"]},"Asia/Krasnoyarsk":{"long":["Krasnojarsk-normaltid","Krasnojarsk-sommertid"]},"Europe/Samara":{"long":["Samara-normaltid","Samara-sommertid"]},"Pacific/Kiritimati":{"long":["Linjeøerne-tid","Linjeøerne-tid"]},"Australia/Lord_Howe":{"long":["Lord Howe-normaltid","Lord Howe-sommertid"]},"Asia/Macau":{"long":["Macao-normaltid","Macao-sommertid"]},"Antarctica/Macquarie":{"long":["Macquarie-tid","Macquarie-tid"]},"Asia/Magadan":{"long":["Magadan-normaltid","Magadan-sommertid"]},"Indian/Maldives":{"long":["Maldiverne-tid","Maldiverne-tid"]},"Pacific/Marquesas":{"long":["Marquesas-tid","Marquesas-tid"]},"Pacific/Majuro":{"long":["Marshalløerne-tid","Marshalløerne-tid"]},"Indian/Mauritius":{"long":["Mauritius-normaltid","Mauritius-sommertid"]},"Antarctica/Mawson":{"long":["Mawson-tid","Mawson-tid"]},"America/Santa_Isabel":{"long":["Nordvestmexicansk normaltid","Nordvestmexicansk sommertid"]},"America/Mazatlan":{"long":["Mexicansk Pacific-normaltid","Mexicansk Pacific-sommertid"]},"Asia/Ulaanbaatar":{"long":["Ulan Bator-normaltid","Ulan Bator-sommertid"]},"Europe/Moscow":{"long":["Moskva-normaltid","Moskva-sommertid"]},"Asia/Rangoon":{"long":["Myanmar-tid","Myanmar-tid"]},"Pacific/Nauru":{"long":["Nauru-tid","Nauru-tid"]},"Asia/Katmandu":{"long":["Nepalesisk tid","Nepalesisk tid"]},"Pacific/Noumea":{"long":["Ny Kaledonien-normaltid","Ny Kaledonien-sommertid"]},"Pacific/Auckland":{"long":["Newzealandsk normaltid","Newzealandsk sommertid"]},"Antarctica/McMurdo":{"long":["Newzealandsk normaltid","Newzealandsk sommertid"]},"America/St_Johns":{"long":["Newfoundlandsk normaltid","Newfoundlandsk sommertid"]},"Pacific/Niue":{"long":["Niue-tid","Niue-tid"]},"Pacific/Norfolk":{"long":["Norfolk Island-tid","Norfolk Island-tid"]},"America/Noronha":{"long":["Fernando de Noronha-normaltid","Fernando de Noronha-sommertid"]},"Asia/Novosibirsk":{"long":["Novosibirsk-normaltid","Novosibirsk-sommertid"]},"Asia/Omsk":{"long":["Omsk-normaltid","Omsk-sommertid"]},"Pacific/Palau":{"long":["Palau-normaltid","Palau-normaltid"]},"Pacific/Port_Moresby":{"long":["Papua Ny Guinea-tid","Papua Ny Guinea-tid"]},"America/Asuncion":{"long":["Paraguayansk normaltid","Paraguayansk sommertid"]},"America/Lima":{"long":["Peruviansk normaltid","Peruviansk sommertid"]},"Asia/Manila":{"long":["Filippinsk normaltid","Filippinsk sommertid"]},"Pacific/Enderbury":{"long":["Phoenixøen-tid","Phoenixøen-tid"]},"America/Miquelon":{"long":["Saint Pierre- og Miquelon-normaltid","Saint Pierre- og Miquelon-sommertid"]},"Pacific/Pitcairn":{"long":["Pitcairn-tid","Pitcairn-tid"]},"Pacific/Ponape":{"long":["Ponape-tid","Ponape-tid"]},"Asia/Pyongyang":{"long":["Pyongyang-tid","Pyongyang-tid"]},"Indian/Reunion":{"long":["Reunion-tid","Reunion-tid"]},"Antarctica/Rothera":{"long":["Rothera-tid","Rothera-tid"]},"Asia/Sakhalin":{"long":["Sakhalin-normaltid","Sakhalin-sommertid"]},"Pacific/Pago_Pago":{"long":["Samoansk normaltid","Samoansk sommertid"]},"Indian/Mahe":{"long":["Seychellisk tid","Seychellisk tid"]},"Asia/Singapore":{"long":["Singapore-tid","Singapore-tid"]},"Pacific/Guadalcanal":{"long":["Salomonøerne-tid","Salomonøerne-tid"]},"Atlantic/South_Georgia":{"long":["South Georgia-tid","South Georgia-tid"]},"Asia/Yekaterinburg":{"long":["Jekaterinburg-normaltid","Jekaterinburg-sommertid"]},"Antarctica/Syowa":{"long":["Syowa-tid","Syowa-tid"]},"Pacific/Tahiti":{"long":["Tahiti-tid","Tahiti-tid"]},"Asia/Taipei":{"long":["Taipei-normaltid","Taipei-sommertid"]},"Asia/Tashkent":{"long":["Usbekisk normaltid","Usbekisk sommertid"]},"Pacific/Fakaofo":{"long":["Tokelau-tid","Tokelau-tid"]},"Pacific/Tongatapu":{"long":["Tongansk normaltid","Tongansk sommertid"]},"Pacific/Truk":{"long":["Chuuk-tid","Chuuk-tid"]},"Pacific/Funafuti":{"long":["Tuvalu-tid","Tuvalu-tid"]},"America/Montevideo":{"long":["Uruguayansk normaltid","Uruguayansk sommertid"]},"Pacific/Efate":{"long":["Vanuatu-normaltid","Vanuatu-sommertid"]},"America/Caracas":{"long":["Venezuelansk tid","Venezuelansk tid"]},"Asia/Vladivostok":{"long":["Vladivostok-normaltid","Vladivostok-sommertid"]},"Europe/Volgograd":{"long":["Volgograd-normaltid","Volgograd-sommertid"]},"Antarctica/Vostok":{"long":["Vostok-tid","Vostok-tid"]},"Pacific/Wake":{"long":["Wake Island-tid","Wake Island-tid"]},"Pacific/Wallis":{"long":["Wallis og Futuna-tid","Wallis og Futuna-tid"]},"Asia/Yakutsk":{"long":["Jakutsk-normaltid","Jakutsk-sommertid"]},"UTC":{"long":["Koordineret universaltid","Koordineret universaltid"],"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH.mm;-HH.mm","formats":{"gregory":["h B","h.mm B","h.mm.ss B","d.","ccc","E h.mm B","E h.mm.ss B","E 'den' d.","E h.mm a","E HH.mm","E h.mm.ss a","E HH.mm.ss","y G","MMM y G","d. MMM y G","E d. MMM y G","h a","HH","h.mm a","HH.mm","h.mm.ss a","HH.mm.ss","h.mm.ss a v","HH.mm.ss v","h.mm a v","HH.mm v","M","d.M","E d.M","dd.MM","MMM","d. MMM","E d. MMM","d. MMMM","E d. MMMM","'uge' W 'i' MMMM","'uge' W 'i' MMMM","mm.ss","y","M.y","d.M.y","E d.M.y","MM.y","MMM y","d. MMM y","E d. MMM y","MMMM y","QQQ y","QQQQ y","'uge' w 'i' Y","'uge' w 'i' Y","EEEE 'den' d. MMMM y","d. MMMM y","d. MMM y","dd.MM.y","HH.mm.ss zzzz","HH.mm.ss z","HH.mm.ss","HH.mm","EEEE 'den' d. MMMM y 'kl'. HH.mm.ss zzzz","d. MMMM y 'kl'. HH.mm.ss zzzz","d. MMM y HH.mm.ss zzzz","dd.MM.y HH.mm.ss zzzz","d. HH.mm.ss zzzz","ccc HH.mm.ss zzzz","E 'den' d. HH.mm.ss zzzz","y G HH.mm.ss zzzz","MMM y G HH.mm.ss zzzz","d. MMM y G HH.mm.ss zzzz","E d. MMM y G HH.mm.ss zzzz","M HH.mm.ss zzzz","d.M HH.mm.ss zzzz","E d.M HH.mm.ss zzzz","dd.MM HH.mm.ss zzzz","MMM HH.mm.ss zzzz","d. MMM HH.mm.ss zzzz","E d. MMM HH.mm.ss zzzz","d. MMMM 'kl'. HH.mm.ss zzzz","E d. MMMM 'kl'. HH.mm.ss zzzz","'uge' W 'i' MMMM 'kl'. HH.mm.ss zzzz","'uge' W 'i' MMMM 'kl'. HH.mm.ss zzzz","y HH.mm.ss zzzz","M.y HH.mm.ss zzzz","d.M.y HH.mm.ss zzzz","E d.M.y HH.mm.ss zzzz","MM.y HH.mm.ss zzzz","MMM y HH.mm.ss zzzz","d. MMM y HH.mm.ss zzzz","E d. MMM y HH.mm.ss zzzz","MMMM y 'kl'. HH.mm.ss zzzz","QQQ y HH.mm.ss zzzz","QQQQ y HH.mm.ss zzzz","'uge' w 'i' Y HH.mm.ss zzzz","'uge' w 'i' Y HH.mm.ss zzzz","EEEE 'den' d. MMMM y 'kl'. HH.mm.ss z","d. MMMM y 'kl'. HH.mm.ss z","d. MMM y HH.mm.ss z","dd.MM.y HH.mm.ss z","d. HH.mm.ss z","ccc HH.mm.ss z","E 'den' d. HH.mm.ss z","y G HH.mm.ss z","MMM y G HH.mm.ss z","d. MMM y G HH.mm.ss z","E d. MMM y G HH.mm.ss z","M HH.mm.ss z","d.M HH.mm.ss z","E d.M HH.mm.ss z","dd.MM HH.mm.ss z","MMM HH.mm.ss z","d. MMM HH.mm.ss z","E d. MMM HH.mm.ss z","d. MMMM 'kl'. HH.mm.ss z","E d. MMMM 'kl'. HH.mm.ss z","'uge' W 'i' MMMM 'kl'. HH.mm.ss z","'uge' W 'i' MMMM 'kl'. HH.mm.ss z","y HH.mm.ss z","M.y HH.mm.ss z","d.M.y HH.mm.ss z","E d.M.y HH.mm.ss z","MM.y HH.mm.ss z","MMM y HH.mm.ss z","d. MMM y HH.mm.ss z","E d. MMM y HH.mm.ss z","MMMM y 'kl'. HH.mm.ss z","QQQ y HH.mm.ss z","QQQQ y HH.mm.ss z","'uge' w 'i' Y HH.mm.ss z","'uge' w 'i' Y HH.mm.ss z","EEEE 'den' d. MMMM y 'kl'. HH.mm.ss","d. MMMM y 'kl'. HH.mm.ss","d. MMM y HH.mm.ss","dd.MM.y HH.mm.ss","d. HH.mm.ss","ccc HH.mm.ss","E 'den' d. HH.mm.ss","y G HH.mm.ss","MMM y G HH.mm.ss","d. MMM y G HH.mm.ss","E d. MMM y G HH.mm.ss","M HH.mm.ss","d.M HH.mm.ss","E d.M HH.mm.ss","dd.MM HH.mm.ss","MMM HH.mm.ss","d. MMM HH.mm.ss","E d. MMM HH.mm.ss","d. MMMM 'kl'. HH.mm.ss","E d. MMMM 'kl'. HH.mm.ss","'uge' W 'i' MMMM 'kl'. HH.mm.ss","'uge' W 'i' MMMM 'kl'. HH.mm.ss","y HH.mm.ss","M.y HH.mm.ss","d.M.y HH.mm.ss","E d.M.y HH.mm.ss","MM.y HH.mm.ss","MMM y HH.mm.ss","d. MMM y HH.mm.ss","E d. MMM y HH.mm.ss","MMMM y 'kl'. HH.mm.ss","QQQ y HH.mm.ss","QQQQ y HH.mm.ss","'uge' w 'i' Y HH.mm.ss","'uge' w 'i' Y HH.mm.ss","EEEE 'den' d. MMMM y 'kl'. HH.mm","d. MMMM y 'kl'. HH.mm","d. MMM y HH.mm","dd.MM.y HH.mm","d. HH.mm","ccc HH.mm","E 'den' d. HH.mm","y G HH.mm","MMM y G HH.mm","d. MMM y G HH.mm","E d. MMM y G HH.mm","M HH.mm","d.M HH.mm","E d.M HH.mm","dd.MM HH.mm","MMM HH.mm","d. MMM HH.mm","E d. MMM HH.mm","d. MMMM 'kl'. HH.mm","E d. MMMM 'kl'. HH.mm","'uge' W 'i' MMMM 'kl'. HH.mm","'uge' W 'i' MMMM 'kl'. HH.mm","y HH.mm","M.y HH.mm","d.M.y HH.mm","E d.M.y HH.mm","MM.y HH.mm","MMM y HH.mm","d. MMM y HH.mm","E d. MMM y HH.mm","MMMM y 'kl'. HH.mm","QQQ y HH.mm","QQQQ y HH.mm","'uge' w 'i' Y HH.mm","'uge' w 'i' Y HH.mm","EEEE 'den' d. MMMM y 'kl'. h B","d. MMMM y 'kl'. h B","d. MMM y h B","dd.MM.y h B","d. h B","ccc h B","E 'den' d. h B","y G h B","MMM y G h B","d. MMM y G h B","E d. MMM y G h B","M h B","d.M h B","E d.M h B","dd.MM h B","MMM h B","d. MMM h B","E d. MMM h B","d. MMMM 'kl'. h B","E d. MMMM 'kl'. h B","'uge' W 'i' MMMM 'kl'. h B","'uge' W 'i' MMMM 'kl'. h B","y h B","M.y h B","d.M.y h B","E d.M.y h B","MM.y h B","MMM y h B","d. MMM y h B","E d. MMM y h B","MMMM y 'kl'. h B","QQQ y h B","QQQQ y h B","'uge' w 'i' Y h B","'uge' w 'i' Y h B","EEEE 'den' d. MMMM y 'kl'. h.mm B","d. MMMM y 'kl'. h.mm B","d. MMM y h.mm B","dd.MM.y h.mm B","d. h.mm B","ccc h.mm B","E 'den' d. h.mm B","y G h.mm B","MMM y G h.mm B","d. MMM y G h.mm B","E d. MMM y G h.mm B","M h.mm B","d.M h.mm B","E d.M h.mm B","dd.MM h.mm B","MMM h.mm B","d. MMM h.mm B","E d. MMM h.mm B","d. MMMM 'kl'. h.mm B","E d. MMMM 'kl'. h.mm B","'uge' W 'i' MMMM 'kl'. h.mm B","'uge' W 'i' MMMM 'kl'. h.mm B","y h.mm B","M.y h.mm B","d.M.y h.mm B","E d.M.y h.mm B","MM.y h.mm B","MMM y h.mm B","d. MMM y h.mm B","E d. MMM y h.mm B","MMMM y 'kl'. h.mm B","QQQ y h.mm B","QQQQ y h.mm B","'uge' w 'i' Y h.mm B","'uge' w 'i' Y h.mm B","EEEE 'den' d. MMMM y 'kl'. h.mm.ss B","d. MMMM y 'kl'. h.mm.ss B","d. MMM y h.mm.ss B","dd.MM.y h.mm.ss B","d. h.mm.ss B","ccc h.mm.ss B","E 'den' d. h.mm.ss B","y G h.mm.ss B","MMM y G h.mm.ss B","d. MMM y G h.mm.ss B","E d. MMM y G h.mm.ss B","M h.mm.ss B","d.M h.mm.ss B","E d.M h.mm.ss B","dd.MM h.mm.ss B","MMM h.mm.ss B","d. MMM h.mm.ss B","E d. MMM h.mm.ss B","d. MMMM 'kl'. h.mm.ss B","E d. MMMM 'kl'. h.mm.ss B","'uge' W 'i' MMMM 'kl'. h.mm.ss B","'uge' W 'i' MMMM 'kl'. h.mm.ss B","y h.mm.ss B","M.y h.mm.ss B","d.M.y h.mm.ss B","E d.M.y h.mm.ss B","MM.y h.mm.ss B","MMM y h.mm.ss B","d. MMM y h.mm.ss B","E d. MMM y h.mm.ss B","MMMM y 'kl'. h.mm.ss B","QQQ y h.mm.ss B","QQQQ y h.mm.ss B","'uge' w 'i' Y h.mm.ss B","'uge' w 'i' Y h.mm.ss B","EEEE 'den' d. MMMM y 'kl'. h a","d. MMMM y 'kl'. h a","d. MMM y h a","dd.MM.y h a","d. h a","ccc h a","E 'den' d. h a","y G h a","MMM y G h a","d. MMM y G h a","E d. MMM y G h a","M h a","d.M h a","E d.M h a","dd.MM h a","MMM h a","d. MMM h a","E d. MMM h a","d. MMMM 'kl'. h a","E d. MMMM 'kl'. h a","'uge' W 'i' MMMM 'kl'. h a","'uge' W 'i' MMMM 'kl'. h a","y h a","M.y h a","d.M.y h a","E d.M.y h a","MM.y h a","MMM y h a","d. MMM y h a","E d. MMM y h a","MMMM y 'kl'. h a","QQQ y h a","QQQQ y h a","'uge' w 'i' Y h a","'uge' w 'i' Y h a","EEEE 'den' d. MMMM y 'kl'. HH","d. MMMM y 'kl'. HH","d. MMM y HH","dd.MM.y HH","d. HH","ccc HH","E 'den' d. HH","y G HH","MMM y G HH","d. MMM y G HH","E d. MMM y G HH","M HH","d.M HH","E d.M HH","dd.MM HH","MMM HH","d. MMM HH","E d. MMM HH","d. MMMM 'kl'. HH","E d. MMMM 'kl'. HH","'uge' W 'i' MMMM 'kl'. HH","'uge' W 'i' MMMM 'kl'. HH","y HH","M.y HH","d.M.y HH","E d.M.y HH","MM.y HH","MMM y HH","d. MMM y HH","E d. MMM y HH","MMMM y 'kl'. HH","QQQ y HH","QQQQ y HH","'uge' w 'i' Y HH","'uge' w 'i' Y HH","EEEE 'den' d. MMMM y 'kl'. h.mm a","d. MMMM y 'kl'. h.mm a","d. MMM y h.mm a","dd.MM.y h.mm a","d. h.mm a","ccc h.mm a","E 'den' d. h.mm a","y G h.mm a","MMM y G h.mm a","d. MMM y G h.mm a","E d. MMM y G h.mm a","M h.mm a","d.M h.mm a","E d.M h.mm a","dd.MM h.mm a","MMM h.mm a","d. MMM h.mm a","E d. MMM h.mm a","d. MMMM 'kl'. h.mm a","E d. MMMM 'kl'. h.mm a","'uge' W 'i' MMMM 'kl'. h.mm a","'uge' W 'i' MMMM 'kl'. h.mm a","y h.mm a","M.y h.mm a","d.M.y h.mm a","E d.M.y h.mm a","MM.y h.mm a","MMM y h.mm a","d. MMM y h.mm a","E d. MMM y h.mm a","MMMM y 'kl'. h.mm a","QQQ y h.mm a","QQQQ y h.mm a","'uge' w 'i' Y h.mm a","'uge' w 'i' Y h.mm a","EEEE 'den' d. MMMM y 'kl'. HH.mm","d. MMMM y 'kl'. HH.mm","d. MMM y HH.mm","dd.MM.y HH.mm","d. HH.mm","ccc HH.mm","E 'den' d. HH.mm","y G HH.mm","MMM y G HH.mm","d. MMM y G HH.mm","E d. MMM y G HH.mm","M HH.mm","d.M HH.mm","E d.M HH.mm","dd.MM HH.mm","MMM HH.mm","d. MMM HH.mm","E d. MMM HH.mm","d. MMMM 'kl'. HH.mm","E d. MMMM 'kl'. HH.mm","'uge' W 'i' MMMM 'kl'. HH.mm","'uge' W 'i' MMMM 'kl'. HH.mm","y HH.mm","M.y HH.mm","d.M.y HH.mm","E d.M.y HH.mm","MM.y HH.mm","MMM y HH.mm","d. MMM y HH.mm","E d. MMM y HH.mm","MMMM y 'kl'. HH.mm","QQQ y HH.mm","QQQQ y HH.mm","'uge' w 'i' Y HH.mm","'uge' w 'i' Y HH.mm","EEEE 'den' d. MMMM y 'kl'. h.mm.ss a","d. MMMM y 'kl'. h.mm.ss a","d. MMM y h.mm.ss a","dd.MM.y h.mm.ss a","d. h.mm.ss a","ccc h.mm.ss a","E 'den' d. h.mm.ss a","y G h.mm.ss a","MMM y G h.mm.ss a","d. MMM y G h.mm.ss a","E d. MMM y G h.mm.ss a","M h.mm.ss a","d.M h.mm.ss a","E d.M h.mm.ss a","dd.MM h.mm.ss a","MMM h.mm.ss a","d. MMM h.mm.ss a","E d. MMM h.mm.ss a","d. MMMM 'kl'. h.mm.ss a","E d. MMMM 'kl'. h.mm.ss a","'uge' W 'i' MMMM 'kl'. h.mm.ss a","'uge' W 'i' MMMM 'kl'. h.mm.ss a","y h.mm.ss a","M.y h.mm.ss a","d.M.y h.mm.ss a","E d.M.y h.mm.ss a","MM.y h.mm.ss a","MMM y h.mm.ss a","d. MMM y h.mm.ss a","E d. MMM y h.mm.ss a","MMMM y 'kl'. h.mm.ss a","QQQ y h.mm.ss a","QQQQ y h.mm.ss a","'uge' w 'i' Y h.mm.ss a","'uge' w 'i' Y h.mm.ss a","EEEE 'den' d. MMMM y 'kl'. HH.mm.ss","d. MMMM y 'kl'. HH.mm.ss","d. MMM y HH.mm.ss","dd.MM.y HH.mm.ss","d. HH.mm.ss","ccc HH.mm.ss","E 'den' d. HH.mm.ss","y G HH.mm.ss","MMM y G HH.mm.ss","d. MMM y G HH.mm.ss","E d. MMM y G HH.mm.ss","M HH.mm.ss","d.M HH.mm.ss","E d.M HH.mm.ss","dd.MM HH.mm.ss","MMM HH.mm.ss","d. MMM HH.mm.ss","E d. MMM HH.mm.ss","d. MMMM 'kl'. HH.mm.ss","E d. MMMM 'kl'. HH.mm.ss","'uge' W 'i' MMMM 'kl'. HH.mm.ss","'uge' W 'i' MMMM 'kl'. HH.mm.ss","y HH.mm.ss","M.y HH.mm.ss","d.M.y HH.mm.ss","E d.M.y HH.mm.ss","MM.y HH.mm.ss","MMM y HH.mm.ss","d. MMM y HH.mm.ss","E d. MMM y HH.mm.ss","MMMM y 'kl'. HH.mm.ss","QQQ y HH.mm.ss","QQQQ y HH.mm.ss","'uge' w 'i' Y HH.mm.ss","'uge' w 'i' Y HH.mm.ss","EEEE 'den' d. MMMM y 'kl'. h.mm.ss a v","d. MMMM y 'kl'. h.mm.ss a v","d. MMM y h.mm.ss a v","dd.MM.y h.mm.ss a v","d. h.mm.ss a v","ccc h.mm.ss a v","E 'den' d. h.mm.ss a v","y G h.mm.ss a v","MMM y G h.mm.ss a v","d. MMM y G h.mm.ss a v","E d. MMM y G h.mm.ss a v","M h.mm.ss a v","d.M h.mm.ss a v","E d.M h.mm.ss a v","dd.MM h.mm.ss a v","MMM h.mm.ss a v","d. MMM h.mm.ss a v","E d. MMM h.mm.ss a v","d. MMMM 'kl'. h.mm.ss a v","E d. MMMM 'kl'. h.mm.ss a v","'uge' W 'i' MMMM 'kl'. h.mm.ss a v","'uge' W 'i' MMMM 'kl'. h.mm.ss a v","y h.mm.ss a v","M.y h.mm.ss a v","d.M.y h.mm.ss a v","E d.M.y h.mm.ss a v","MM.y h.mm.ss a v","MMM y h.mm.ss a v","d. MMM y h.mm.ss a v","E d. MMM y h.mm.ss a v","MMMM y 'kl'. h.mm.ss a v","QQQ y h.mm.ss a v","QQQQ y h.mm.ss a v","'uge' w 'i' Y h.mm.ss a v","'uge' w 'i' Y h.mm.ss a v","EEEE 'den' d. MMMM y 'kl'. HH.mm.ss v","d. MMMM y 'kl'. HH.mm.ss v","d. MMM y HH.mm.ss v","dd.MM.y HH.mm.ss v","d. HH.mm.ss v","ccc HH.mm.ss v","E 'den' d. HH.mm.ss v","y G HH.mm.ss v","MMM y G HH.mm.ss v","d. MMM y G HH.mm.ss v","E d. MMM y G HH.mm.ss v","M HH.mm.ss v","d.M HH.mm.ss v","E d.M HH.mm.ss v","dd.MM HH.mm.ss v","MMM HH.mm.ss v","d. MMM HH.mm.ss v","E d. MMM HH.mm.ss v","d. MMMM 'kl'. HH.mm.ss v","E d. MMMM 'kl'. HH.mm.ss v","'uge' W 'i' MMMM 'kl'. HH.mm.ss v","'uge' W 'i' MMMM 'kl'. HH.mm.ss v","y HH.mm.ss v","M.y HH.mm.ss v","d.M.y HH.mm.ss v","E d.M.y HH.mm.ss v","MM.y HH.mm.ss v","MMM y HH.mm.ss v","d. MMM y HH.mm.ss v","E d. MMM y HH.mm.ss v","MMMM y 'kl'. HH.mm.ss v","QQQ y HH.mm.ss v","QQQQ y HH.mm.ss v","'uge' w 'i' Y HH.mm.ss v","'uge' w 'i' Y HH.mm.ss v","EEEE 'den' d. MMMM y 'kl'. h.mm a v","d. MMMM y 'kl'. h.mm a v","d. MMM y h.mm a v","dd.MM.y h.mm a v","d. h.mm a v","ccc h.mm a v","E 'den' d. h.mm a v","y G h.mm a v","MMM y G h.mm a v","d. MMM y G h.mm a v","E d. MMM y G h.mm a v","M h.mm a v","d.M h.mm a v","E d.M h.mm a v","dd.MM h.mm a v","MMM h.mm a v","d. MMM h.mm a v","E d. MMM h.mm a v","d. MMMM 'kl'. h.mm a v","E d. MMMM 'kl'. h.mm a v","'uge' W 'i' MMMM 'kl'. h.mm a v","'uge' W 'i' MMMM 'kl'. h.mm a v","y h.mm a v","M.y h.mm a v","d.M.y h.mm a v","E d.M.y h.mm a v","MM.y h.mm a v","MMM y h.mm a v","d. MMM y h.mm a v","E d. MMM y h.mm a v","MMMM y 'kl'. h.mm a v","QQQ y h.mm a v","QQQQ y h.mm a v","'uge' w 'i' Y h.mm a v","'uge' w 'i' Y h.mm a v","EEEE 'den' d. MMMM y 'kl'. HH.mm v","d. MMMM y 'kl'. HH.mm v","d. MMM y HH.mm v","dd.MM.y HH.mm v","d. HH.mm v","ccc HH.mm v","E 'den' d. HH.mm v","y G HH.mm v","MMM y G HH.mm v","d. MMM y G HH.mm v","E d. MMM y G HH.mm v","M HH.mm v","d.M HH.mm v","E d.M HH.mm v","dd.MM HH.mm v","MMM HH.mm v","d. MMM HH.mm v","E d. MMM HH.mm v","d. MMMM 'kl'. HH.mm v","E d. MMMM 'kl'. HH.mm v","'uge' W 'i' MMMM 'kl'. HH.mm v","'uge' W 'i' MMMM 'kl'. HH.mm v","y HH.mm v","M.y HH.mm v","d.M.y HH.mm v","E d.M.y HH.mm v","MM.y HH.mm v","MMM y HH.mm v","d. MMM y HH.mm v","E d. MMM y HH.mm v","MMMM y 'kl'. HH.mm v","QQQ y HH.mm v","QQQQ y HH.mm v","'uge' w 'i' Y HH.mm v","'uge' w 'i' Y HH.mm v","EEEE 'den' d. MMMM y 'kl'. mm.ss","d. MMMM y 'kl'. mm.ss","d. MMM y mm.ss","dd.MM.y mm.ss","d. mm.ss","ccc mm.ss","E 'den' d. mm.ss","y G mm.ss","MMM y G mm.ss","d. MMM y G mm.ss","E d. MMM y G mm.ss","M mm.ss","d.M mm.ss","E d.M mm.ss","dd.MM mm.ss","MMM mm.ss","d. MMM mm.ss","E d. MMM mm.ss","d. MMMM 'kl'. mm.ss","E d. MMMM 'kl'. mm.ss","'uge' W 'i' MMMM 'kl'. mm.ss","'uge' W 'i' MMMM 'kl'. mm.ss","y mm.ss","M.y mm.ss","d.M.y mm.ss","E d.M.y mm.ss","MM.y mm.ss","MMM y mm.ss","d. MMM y mm.ss","E d. MMM y mm.ss","MMMM y 'kl'. mm.ss","QQQ y mm.ss","QQQQ y mm.ss","'uge' w 'i' Y mm.ss","'uge' w 'i' Y mm.ss"]},"hourCycle":"h23","nu":["latn"],"ca":["gregory"],"hc":["h23"]}},"availableLocales":["da"]})
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
