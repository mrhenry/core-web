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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("qu").length
)) {
// Intl.DateTimeFormat.~locale.qu
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"qu":{"am":"a.m.","pm":"p.m.","weekday":{"narrow":["D","L","M","X","J","V","S"],"short":["Dom","Lun","Mar","Mié","Jue","Vie","Sab"],"long":["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},"era":{"narrow":{"BC":"BCE","AD":"dC"},"short":{"BC":"BCE","AD":"d.C."},"long":{"BC":"BCE","AD":"d.C."}},"month":{"narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"short":["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Set","Oct","Nov","Dic"],"long":["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]},"timeZoneName":{"Asia/Kabul":{"long":["Hora de Afganistán","Hora de Afganistán"]},"Africa/Maputo":{"long":["Hora de Africa Central","Hora de Africa Central"]},"Africa/Bujumbura":{"long":["Hora de Africa Central","Hora de Africa Central"]},"Africa/Gaborone":{"long":["Hora de Africa Central","Hora de Africa Central"]},"Africa/Lubumbashi":{"long":["Hora de Africa Central","Hora de Africa Central"]},"Africa/Blantyre":{"long":["Hora de Africa Central","Hora de Africa Central"]},"Africa/Kigali":{"long":["Hora de Africa Central","Hora de Africa Central"]},"Africa/Lusaka":{"long":["Hora de Africa Central","Hora de Africa Central"]},"Africa/Harare":{"long":["Hora de Africa Central","Hora de Africa Central"]},"Africa/Nairobi":{"long":["Hora de Africa Oriental","Hora de Africa Oriental"]},"Africa/Djibouti":{"long":["Hora de Africa Oriental","Hora de Africa Oriental"]},"Africa/Asmera":{"long":["Hora de Africa Oriental","Hora de Africa Oriental"]},"Africa/Addis_Ababa":{"long":["Hora de Africa Oriental","Hora de Africa Oriental"]},"Indian/Comoro":{"long":["Hora de Africa Oriental","Hora de Africa Oriental"]},"Indian/Antananarivo":{"long":["Hora de Africa Oriental","Hora de Africa Oriental"]},"Africa/Mogadishu":{"long":["Hora de Africa Oriental","Hora de Africa Oriental"]},"Africa/Dar_es_Salaam":{"long":["Hora de Africa Oriental","Hora de Africa Oriental"]},"Africa/Kampala":{"long":["Hora de Africa Oriental","Hora de Africa Oriental"]},"Indian/Mayotte":{"long":["Hora de Africa Oriental","Hora de Africa Oriental"]},"Africa/Johannesburg":{"long":["Hora de Sudafrica","Hora de Sudafrica"]},"Africa/Maseru":{"long":["Hora de Sudafrica","Hora de Sudafrica"]},"Africa/Mbabane":{"long":["Hora de Sudafrica","Hora de Sudafrica"]},"Africa/Lagos":{"long":["Hora Estandar de Africa Occidental","Hora Estandar de Verano de Africa Occidental"]},"Africa/Luanda":{"long":["Hora Estandar de Africa Occidental","Hora Estandar de Verano de Africa Occidental"]},"Africa/Porto-Novo":{"long":["Hora Estandar de Africa Occidental","Hora Estandar de Verano de Africa Occidental"]},"Africa/Kinshasa":{"long":["Hora Estandar de Africa Occidental","Hora Estandar de Verano de Africa Occidental"]},"Africa/Bangui":{"long":["Hora Estandar de Africa Occidental","Hora Estandar de Verano de Africa Occidental"]},"Africa/Brazzaville":{"long":["Hora Estandar de Africa Occidental","Hora Estandar de Verano de Africa Occidental"]},"Africa/Douala":{"long":["Hora Estandar de Africa Occidental","Hora Estandar de Verano de Africa Occidental"]},"Africa/Libreville":{"long":["Hora Estandar de Africa Occidental","Hora Estandar de Verano de Africa Occidental"]},"Africa/Malabo":{"long":["Hora Estandar de Africa Occidental","Hora Estandar de Verano de Africa Occidental"]},"Africa/Niamey":{"long":["Hora Estandar de Africa Occidental","Hora Estandar de Verano de Africa Occidental"]},"Africa/Ndjamena":{"long":["Hora Estandar de Africa Occidental","Hora Estandar de Verano de Africa Occidental"]},"Asia/Aqtobe":{"long":["Hora de Kazajistán del Oeste","Hora de Kazajistán del Oeste"]},"America/Juneau":{"long":["Hora Estandar de Alaska","Hora de Verano de Alaska"]},"Asia/Almaty":{"long":["Hora de Kazajistán Oriental","Hora de Kazajistán Oriental"]},"America/Manaus":{"long":["Hora Estandar de Amazonas","Hora de Verano de Amazonas"]},"America/Chicago":{"long":["Estandard Hora Central","Hora Central de Verano"]},"America/Belize":{"long":["Estandard Hora Central","Hora Central de Verano"]},"America/Winnipeg":{"long":["Estandard Hora Central","Hora Central de Verano"]},"America/Costa_Rica":{"long":["Estandard Hora Central","Hora Central de Verano"]},"America/Guatemala":{"long":["Estandard Hora Central","Hora Central de Verano"]},"America/Tegucigalpa":{"long":["Estandard Hora Central","Hora Central de Verano"]},"America/Mexico_City":{"long":["Estandard Hora Central","Hora Central de Verano"]},"America/El_Salvador":{"long":["Estandard Hora Central","Hora Central de Verano"]},"America/New_York":{"long":["Hora Estandar del Este","Hora de Verano del Este"]},"America/Nassau":{"long":["Hora Estandar del Este","Hora de Verano del Este"]},"America/Toronto":{"long":["Hora Estandar del Este","Hora de Verano del Este"]},"America/Port-au-Prince":{"long":["Hora Estandar del Este","Hora de Verano del Este"]},"America/Jamaica":{"long":["Hora Estandar del Este","Hora de Verano del Este"]},"America/Cayman":{"long":["Hora Estandar del Este","Hora de Verano del Este"]},"America/Panama":{"long":["Hora Estandar del Este","Hora de Verano del Este"]},"America/Denver":{"long":["Hora Estandar de la Montaña","Hora de Verano de la Montaña"]},"America/Edmonton":{"long":["Hora Estandar de la Montaña","Hora de Verano de la Montaña"]},"America/Hermosillo":{"long":["Hora Estandar de la Montaña","Hora de Verano de la Montaña"]},"America/Los_Angeles":{"long":["Hora Estandar del Pacífico","Hora de Verano del Pacífico"]},"America/Vancouver":{"long":["Hora Estandar del Pacífico","Hora de Verano del Pacífico"]},"America/Tijuana":{"long":["Hora Estandar del Pacífico","Hora de Verano del Pacífico"]},"Pacific/Apia":{"long":["Hora Estandar de Apia","Hora de Verano de Apia"]},"Asia/Riyadh":{"long":["Hora Estandar de Arabia","Hora de Verano de Arabia"]},"Asia/Bahrain":{"long":["Hora Estandar de Arabia","Hora de Verano de Arabia"]},"Asia/Baghdad":{"long":["Hora Estandar de Arabia","Hora de Verano de Arabia"]},"Asia/Kuwait":{"long":["Hora Estandar de Arabia","Hora de Verano de Arabia"]},"Asia/Qatar":{"long":["Hora Estandar de Arabia","Hora de Verano de Arabia"]},"Asia/Aden":{"long":["Hora Estandar de Arabia","Hora de Verano de Arabia"]},"America/Buenos_Aires":{"long":["Hora Estandar de Argentina","Hora de Verano de Argentina"]},"America/Argentina/San_Luis":{"long":["Hora Estandar del Oeste de Argentina","Hora de Verano del Oeste de Argentina"]},"Asia/Ashgabat":{"long":["Hora Estandar de Turkmenistán","Hora de Verano de Turkmenistán"]},"America/Halifax":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Antigua":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Anguilla":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Aruba":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Barbados":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"Atlantic/Bermuda":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Kralendijk":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Curacao":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Dominica":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Grenada":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Thule":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Guadeloupe":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/St_Kitts":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/St_Lucia":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Marigot":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Martinique":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Montserrat":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Puerto_Rico":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Lower_Princes":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Port_of_Spain":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/St_Vincent":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/Tortola":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"America/St_Thomas":{"long":["Hora Estandar del Atlántico","Hora De Verano del Atlántico"]},"Australia/Adelaide":{"long":["Hora Estandar de Australia Central","Hora de Verano de Australia Central"]},"Australia/Eucla":{"long":["Hora Estandar de Australia Central Occidental","Hora de Verano de Australia Central Occidental"]},"Australia/Sydney":{"long":["Hora Estandar de Australia Oriental","Hora de Verano de Australia Oriental"]},"Australia/Perth":{"long":["Hora Estandar de Australia Occidental","Hora de Verano de Australia Occidental"]},"Atlantic/Azores":{"long":["Hora Estandar de las Azores","Hora de Verano de las Azores"]},"Asia/Thimphu":{"long":["Hora de Bután","Hora de Bután"]},"America/La_Paz":{"long":["Bolivia Time","Bolivia Time"]},"Asia/Kuching":{"long":["Hora de Malasia","Hora de Malasia"]},"America/Sao_Paulo":{"long":["Hora Estandar de Brasilia","Hora de Verano de Brasilia"]},"Europe/London":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Asia/Brunei":{"long":["Hora de Brunei Darussalam","Hora de Brunei Darussalam"]},"Atlantic/Cape_Verde":{"long":["Hora Estandar de Cabo Verde","Hora de Verano de Cabo Verde"]},"Pacific/Chatham":{"long":["Hora Estandar de Chatham","Hora de Verano de Chatham"]},"America/Santiago":{"long":["Hora Estandar de Chile","Hora de Verano de Chile"]},"Asia/Shanghai":{"long":["Hora Estandar de China","Hora de Verano de China"]},"Asia/Choibalsan":{"long":["Hora Estandar de Choybalsan","Hora de Verano de Choybalsan"]},"Indian/Christmas":{"long":["Hora de Isla Christmas","Hora de Isla Christmas"]},"Indian/Cocos":{"long":["Hora de Islas Cocos","Hora de Islas Cocos"]},"America/Bogota":{"long":["Hora Estandar de Colombia","Hora de Verano de Colombia"]},"Pacific/Rarotonga":{"long":["Hora Estandar de Isla Cocos","Hora de Verano de Isla Cocos"]},"America/Havana":{"long":["Hora Estandar de Cuba","Hora de Verano de Cuba"]},"Antarctica/Davis":{"long":["Hora de Davis","Hora de Davis"]},"Antarctica/DumontDUrville":{"long":["Hora de Dumont-d’Urville","Hora de Dumont-d’Urville"]},"Asia/Dushanbe":{"long":["Hora de Tayikistán","Hora de Tayikistán"]},"America/Paramaribo":{"long":["Hora de Surinam","Hora de Surinam"]},"Asia/Dili":{"long":["Hora de Timor Oriental","Hora de Timor Oriental"]},"Pacific/Easter":{"long":["Hora Estandar de Isla de Pascua","Hora de Verano de Isla de Pascua"]},"America/Guayaquil":{"long":["Hora de Ecuador","Hora de Ecuador"]},"Europe/Paris":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Andorra":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Tirane":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Vienna":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Sarajevo":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Brussels":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Zurich":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Prague":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Berlin":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Copenhagen":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Madrid":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Gibraltar":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Zagreb":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Budapest":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Rome":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Vaduz":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Luxembourg":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Monaco":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Podgorica":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Skopje":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Malta":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Amsterdam":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Oslo":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Warsaw":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Belgrade":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Stockholm":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Ljubljana":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Bratislava":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/San_Marino":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Africa/Tunis":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Vatican":{"long":["Hora Estandar de Europa Central","Hora de Verano de Europa Central"]},"Europe/Bucharest":{"long":["Hora Estandar de Europa Oriental","Hora de Verano de Europa Oriental"]},"Europe/Mariehamn":{"long":["Hora Estandar de Europa Oriental","Hora de Verano de Europa Oriental"]},"Europe/Sofia":{"long":["Hora Estandar de Europa Oriental","Hora de Verano de Europa Oriental"]},"Asia/Nicosia":{"long":["Hora Estandar de Europa Oriental","Hora de Verano de Europa Oriental"]},"Africa/Cairo":{"long":["Hora Estandar de Europa Oriental","Hora de Verano de Europa Oriental"]},"Europe/Helsinki":{"long":["Hora Estandar de Europa Oriental","Hora de Verano de Europa Oriental"]},"Europe/Athens":{"long":["Hora Estandar de Europa Oriental","Hora de Verano de Europa Oriental"]},"Asia/Amman":{"long":["Hora Estandar de Europa Oriental","Hora de Verano de Europa Oriental"]},"Asia/Beirut":{"long":["Hora Estandar de Europa Oriental","Hora de Verano de Europa Oriental"]},"Asia/Damascus":{"long":["Hora Estandar de Europa Oriental","Hora de Verano de Europa Oriental"]},"Europe/Minsk":{"long":["Hora de Verano más Oriental de Europa","Hora de Verano más Oriental de Europa"]},"Europe/Kaliningrad":{"long":["Hora de Verano más Oriental de Europa","Hora de Verano más Oriental de Europa"]},"Atlantic/Canary":{"long":["Hora Estandar de Europa Occidental","Hora de Verano de Europa Occidental"]},"Atlantic/Faeroe":{"long":["Hora Estandar de Europa Occidental","Hora de Verano de Europa Occidental"]},"Atlantic/Stanley":{"long":["Hora Estandar de Islas Malvinas","Hora de Verano de Islas Malvinas"]},"Pacific/Fiji":{"long":["Hora Estandar de Fiji","Hora de Verano de Fiji"]},"America/Cayenne":{"long":["Hora de Guayana Francesa","Hora de Guayana Francesa"]},"Indian/Kerguelen":{"long":["Hora Francés meridional y antártico","Hora Francés meridional y antártico"]},"Asia/Bishkek":{"long":["Hora de Kirguistán","Hora de Kirguistán"]},"Pacific/Galapagos":{"long":["Hora de Islas Galápagos","Hora de Islas Galápagos"]},"Pacific/Gambier":{"long":["Hora de Gambier","Hora de Gambier"]},"Pacific/Tarawa":{"long":["Hora de Islas Gilbert","Hora de Islas Gilbert"]},"Atlantic/Reykjavik":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Africa/Ouagadougou":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Africa/Abidjan":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Africa/Accra":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Africa/Banjul":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Africa/Conakry":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Africa/Bamako":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Africa/Nouakchott":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Atlantic/St_Helena":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Africa/Freetown":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Africa/Dakar":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"Africa/Lome":{"long":["Hora del Meridiano de Greenwich","Hora del Meridiano de Greenwich"]},"America/Scoresbysund":{"long":["Hora Estandar de Groenlandia","Hora de Verano de Groenlandia"]},"America/Godthab":{"long":["Hora Estandar de Groenlandia Occidental","Hora de Verano de Groenlandia Occidental"]},"Asia/Dubai":{"long":["Hora Estandar del Golfo","Hora Estandar del Golfo"]},"Asia/Muscat":{"long":["Hora Estandar del Golfo","Hora Estandar del Golfo"]},"America/Guyana":{"long":["Hora de Guyana","Hora de Guyana"]},"Pacific/Honolulu":{"long":["Hora Estandar de Hawai-Aleutiano","Hora de Verano de Hawai-Aleutiano"]},"Asia/Hong_Kong":{"long":["Hora Estandar de Hong Kong","Hora de Verano de Hong Kong"]},"Asia/Hovd":{"long":["Hora Estandar de Hovd","Hora de Verano de Hovd"]},"Asia/Calcutta":{"long":["Hora Estandar de India","Hora Estandar de India"]},"Indian/Chagos":{"long":["Hora del Oceano Índico","Hora del Oceano Índico"]},"Asia/Bangkok":{"long":["Hora de Indochina","Hora de Indochina"]},"Asia/Phnom_Penh":{"long":["Hora de Indochina","Hora de Indochina"]},"Asia/Vientiane":{"long":["Hora de Indochina","Hora de Indochina"]},"Asia/Makassar":{"long":["Hora de Indonesia Central","Hora de Indonesia Central"]},"Asia/Jayapura":{"long":["Hora de Indonesia Oriental","Hora de Indonesia Oriental"]},"Asia/Jakarta":{"long":["Hora de Indonesia Occidental","Hora de Indonesia Occidental"]},"Asia/Tehran":{"long":["Hora Estandar de Irán","Hora de Verano de Irán"]},"Asia/Irkutsk":{"long":["Hora Estandar de Irkutsk","Hora de Verano de Irkutsk"]},"Asia/Jerusalem":{"long":["Hora Estandar de Israel","Hora de Verano de Israel"]},"Asia/Tokyo":{"long":["Hora Estandar de Japón","Hora de Verano de Japón"]},"Asia/Karachi":{"long":["Hora Estandar de Pakistán","Hora de Verano de Pakistán"]},"Asia/Seoul":{"long":["Hora Estandar de Corea","Hora de Verano de Corea"]},"Pacific/Kosrae":{"long":["Hora de Kosrae","Hora de Kosrae"]},"Asia/Krasnoyarsk":{"long":["Hora Estandar de Krasnoyarsk","Hora de Verano de Krasnoyarsk"]},"Pacific/Kiritimati":{"long":["Hora de Espóradas Ecuatoriales","Hora de Espóradas Ecuatoriales"]},"Australia/Lord_Howe":{"long":["Hora Estandar de Lord Howe","Hora de Verano de Lord Howe"]},"Antarctica/Macquarie":{"long":["Hora de Isla Macquarie","Hora de Isla Macquarie"]},"Asia/Magadan":{"long":["Hora Estandar de Magadan","Hora de Verano de Magadan"]},"Indian/Maldives":{"long":["Hora de Maldivas","Hora de Maldivas"]},"Pacific/Marquesas":{"long":["Hora de Marquesas","Hora de Marquesas"]},"Pacific/Majuro":{"long":["Hora de Islas Marshall","Hora de Islas Marshall"]},"Indian/Mauritius":{"long":["Hora Estandar de Mauricio","Hora de Verano de Mauricio"]},"Antarctica/Mawson":{"long":["Hora de Mawson","Hora de Mawson"]},"America/Santa_Isabel":{"long":["Hora Estandar del Noroeste de México","Hora de Verano del Noroeste de México"]},"America/Mazatlan":{"long":["Hora Estandar del Pacífico Mexicano","Hora de Verano del Pacífico Mexicano"]},"Asia/Ulaanbaatar":{"long":["Hora Estandar de Ulán Bator","Hora de Verano de Ulán Bator"]},"Europe/Moscow":{"long":["Hora Estandar de Moscú","Hora de Verano de Moscú"]},"Asia/Rangoon":{"long":["Hora de Myanmar","Hora de Myanmar"]},"Pacific/Nauru":{"long":["Hora de Nauru","Hora de Nauru"]},"Asia/Katmandu":{"long":["Hora de Nepal","Hora de Nepal"]},"Pacific/Noumea":{"long":["Hora Estandar de Nueva Caledonia","Hora de Verano de Nueva Caledonia"]},"Pacific/Auckland":{"long":["Hora Estandar de Nueva Zelanda","Hora de Verano de Nueva Zelanda"]},"Antarctica/McMurdo":{"long":["Hora Estandar de Nueva Zelanda","Hora de Verano de Nueva Zelanda"]},"America/St_Johns":{"long":["Hora Estandar de Terranova","Hora de Verano de Terranova"]},"Pacific/Niue":{"long":["Hora de Niue","Hora de Niue"]},"Pacific/Norfolk":{"long":["Hora de la Isla Norfolk","Hora de la Isla Norfolk"]},"America/Noronha":{"long":["Hora Estandar de Fernando de Noronha","Hora de Verano de Fernando de Noronha"]},"Asia/Novosibirsk":{"long":["Hora Estandar de Novosibirsk","Hora de Verano de Novosibirsk"]},"Asia/Omsk":{"long":["Hora Estandar de Omsk","Hora de Verano de Omsk"]},"Pacific/Palau":{"long":["Hora de Palau","Hora de Palau"]},"Pacific/Port_Moresby":{"long":["Hora de Papua Nueva Guinea","Hora de Papua Nueva Guinea"]},"America/Asuncion":{"long":["Hora Estandar de Paraguay","Hora de Verano de Paraguay"]},"America/Lima":{"long":["Hora Estandar de Perú","Hora de Verano de Perú"],"short":["PET","PEST"]},"Asia/Manila":{"long":["Hora Estandar de Filipinas","Hora de Verano de Filipinas"]},"Pacific/Enderbury":{"long":["Hora de Islas Phoenix","Hora de Islas Phoenix"]},"America/Miquelon":{"long":["Hora Estandar de San Pedro y Miquelón","Hora de Verano de San Pedro y Miquelón"]},"Pacific/Pitcairn":{"long":["Hora de Pitcairn","Hora de Pitcairn"]},"Pacific/Ponape":{"long":["Hora de Pohnpei","Hora de Pohnpei"]},"Asia/Pyongyang":{"long":["Hora de Pionyang","Hora de Pionyang"]},"Indian/Reunion":{"long":["Hora de Réunion","Hora de Réunion"]},"Antarctica/Rothera":{"long":["Hora de Rothera","Hora de Rothera"]},"Asia/Sakhalin":{"long":["Hora Estandar de Sakhalin","Hora de Verano de Sakhalin"]},"Pacific/Pago_Pago":{"long":["Hora Estandar de Samoa","Hora de Verano de Samoa"]},"Indian/Mahe":{"long":["Hora de Seychelles","Hora de Seychelles"]},"Asia/Singapore":{"long":["Hora Estandar de Singapur","Hora Estandar de Singapur"]},"Pacific/Guadalcanal":{"long":["Hora de Islas Salomón","Hora de Islas Salomón"]},"Atlantic/South_Georgia":{"long":["Hora de Georgia del Sur","Hora de Georgia del Sur"]},"Asia/Yekaterinburg":{"long":["Hora Estandar de Ekaterinburgo","Hora de Verano de Ekaterinburgo"]},"Antarctica/Syowa":{"long":["Hora de Syowa","Hora de Syowa"]},"Pacific/Tahiti":{"long":["Hora de Tahiti","Hora de Tahiti"]},"Asia/Taipei":{"long":["Hora Estandar de Taipéi","Hora de Verano de Taipéi"]},"Asia/Tashkent":{"long":["Hora Estandar de Uzbekistán","Hora de Verano de Uzbekistán"]},"Pacific/Fakaofo":{"long":["Hora de Tokelau","Hora de Tokelau"]},"Pacific/Tongatapu":{"long":["Hora Estandar de Tonga","Hora de Verano de Tonga"]},"Pacific/Truk":{"long":["Hora de Chuuk","Hora de Chuuk"]},"Pacific/Funafuti":{"long":["Hora de Tuvalu","Hora de Tuvalu"]},"America/Montevideo":{"long":["Hora Estandar de Uruguay","Hora de Verano de Uruguay"]},"Pacific/Efate":{"long":["Hora Estandar de Vanuatu","Hora de Verano de Vanuatu"]},"America/Caracas":{"long":["Hora de Venezuela","Hora de Venezuela"]},"Asia/Vladivostok":{"long":["Hora Estandar de Vladivostok","Hora de Verano de Vladivostok"]},"Europe/Volgograd":{"long":["Hora Estandar de Volgogrado","Hora de Verano de Volgogrado"]},"Antarctica/Vostok":{"long":["Hora de Vostok","Hora de Vostok"]},"Pacific/Wake":{"long":["Hora de Isla Wake","Hora de Isla Wake"]},"Pacific/Wallis":{"long":["Hora de Wallis y Futuna","Hora de Wallis y Futuna"]},"Asia/Yakutsk":{"long":["Hora Estandar de Yakutsk","Hora de Verano de Yakutsk"]},"UTC":{"long":["Tiqsimuyuntin Tupachisqa Hora","Tiqsimuyuntin Tupachisqa Hora"],"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","formats":{"gregory":["h B","h:mm B","h:mm:ss B","d","ccc","E h:mm B","E h:mm:ss B","d, E","E h:mm a","E HH:mm","E h:mm:ss a","E HH:mm:ss","G y","MMM y G","d MMM, y G","E, d MMM, y G","h a","HH","h:mm a","HH:mm","h:mm:ss a","HH:mm:ss","h:mm:ss a v","HH:mm:ss v","h:mm a v","HH:mm v","L","MM-dd","MM-dd, E","LLL","d MMM","E, d MMM","d MMMM","W 'semana' MMMM 'killapa'","mm:ss","y","y-MM","dd-MM-y","E, dd-MM-y","MMM y","d MMM y","E, d MMM, y","MMMM y","y QQQ","y QQQQ","w 'semana' Y 'watapa'","EEEE, d MMMM, y","d MMMM y","d MMM y","dd/MM/y","HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm","EEEE, d MMMM, y HH:mm:ss zzzz","HH:mm:ss zzzz d MMMM y","d MMM y HH:mm:ss zzzz","dd/MM/y HH:mm:ss zzzz","d HH:mm:ss zzzz","ccc HH:mm:ss zzzz","d, E HH:mm:ss zzzz","G y HH:mm:ss zzzz","MMM y G HH:mm:ss zzzz","d MMM, y G HH:mm:ss zzzz","E, d MMM, y G HH:mm:ss zzzz","L HH:mm:ss zzzz","MM-dd HH:mm:ss zzzz","MM-dd, E HH:mm:ss zzzz","LLL HH:mm:ss zzzz","d MMM HH:mm:ss zzzz","E, d MMM HH:mm:ss zzzz","HH:mm:ss zzzz d MMMM","HH:mm:ss zzzz W 'semana' MMMM 'killapa'","y HH:mm:ss zzzz","y-MM HH:mm:ss zzzz","dd-MM-y HH:mm:ss zzzz","E, dd-MM-y HH:mm:ss zzzz","MMM y HH:mm:ss zzzz","d MMM y HH:mm:ss zzzz","E, d MMM, y HH:mm:ss zzzz","HH:mm:ss zzzz MMMM y","y QQQ HH:mm:ss zzzz","y QQQQ HH:mm:ss zzzz","w 'semana' Y 'watapa' HH:mm:ss zzzz","EEEE, d MMMM, y HH:mm:ss z","HH:mm:ss z d MMMM y","d MMM y HH:mm:ss z","dd/MM/y HH:mm:ss z","d HH:mm:ss z","ccc HH:mm:ss z","d, E HH:mm:ss z","G y HH:mm:ss z","MMM y G HH:mm:ss z","d MMM, y G HH:mm:ss z","E, d MMM, y G HH:mm:ss z","L HH:mm:ss z","MM-dd HH:mm:ss z","MM-dd, E HH:mm:ss z","LLL HH:mm:ss z","d MMM HH:mm:ss z","E, d MMM HH:mm:ss z","HH:mm:ss z d MMMM","HH:mm:ss z W 'semana' MMMM 'killapa'","y HH:mm:ss z","y-MM HH:mm:ss z","dd-MM-y HH:mm:ss z","E, dd-MM-y HH:mm:ss z","MMM y HH:mm:ss z","d MMM y HH:mm:ss z","E, d MMM, y HH:mm:ss z","HH:mm:ss z MMMM y","y QQQ HH:mm:ss z","y QQQQ HH:mm:ss z","w 'semana' Y 'watapa' HH:mm:ss z","EEEE, d MMMM, y HH:mm:ss","HH:mm:ss d MMMM y","d MMM y HH:mm:ss","dd/MM/y HH:mm:ss","d HH:mm:ss","ccc HH:mm:ss","d, E HH:mm:ss","G y HH:mm:ss","MMM y G HH:mm:ss","d MMM, y G HH:mm:ss","E, d MMM, y G HH:mm:ss","L HH:mm:ss","MM-dd HH:mm:ss","MM-dd, E HH:mm:ss","LLL HH:mm:ss","d MMM HH:mm:ss","E, d MMM HH:mm:ss","HH:mm:ss d MMMM","HH:mm:ss W 'semana' MMMM 'killapa'","y HH:mm:ss","y-MM HH:mm:ss","dd-MM-y HH:mm:ss","E, dd-MM-y HH:mm:ss","MMM y HH:mm:ss","d MMM y HH:mm:ss","E, d MMM, y HH:mm:ss","HH:mm:ss MMMM y","y QQQ HH:mm:ss","y QQQQ HH:mm:ss","w 'semana' Y 'watapa' HH:mm:ss","EEEE, d MMMM, y HH:mm","HH:mm d MMMM y","d MMM y HH:mm","dd/MM/y HH:mm","d HH:mm","ccc HH:mm","d, E HH:mm","G y HH:mm","MMM y G HH:mm","d MMM, y G HH:mm","E, d MMM, y G HH:mm","L HH:mm","MM-dd HH:mm","MM-dd, E HH:mm","LLL HH:mm","d MMM HH:mm","E, d MMM HH:mm","HH:mm d MMMM","HH:mm W 'semana' MMMM 'killapa'","y HH:mm","y-MM HH:mm","dd-MM-y HH:mm","E, dd-MM-y HH:mm","MMM y HH:mm","d MMM y HH:mm","E, d MMM, y HH:mm","HH:mm MMMM y","y QQQ HH:mm","y QQQQ HH:mm","w 'semana' Y 'watapa' HH:mm","EEEE, d MMMM, y h B","h B d MMMM y","d MMM y h B","dd/MM/y h B","d h B","ccc h B","d, E h B","G y h B","MMM y G h B","d MMM, y G h B","E, d MMM, y G h B","L h B","MM-dd h B","MM-dd, E h B","LLL h B","d MMM h B","E, d MMM h B","h B d MMMM","h B W 'semana' MMMM 'killapa'","y h B","y-MM h B","dd-MM-y h B","E, dd-MM-y h B","MMM y h B","d MMM y h B","E, d MMM, y h B","h B MMMM y","y QQQ h B","y QQQQ h B","w 'semana' Y 'watapa' h B","EEEE, d MMMM, y h:mm B","h:mm B d MMMM y","d MMM y h:mm B","dd/MM/y h:mm B","d h:mm B","ccc h:mm B","d, E h:mm B","G y h:mm B","MMM y G h:mm B","d MMM, y G h:mm B","E, d MMM, y G h:mm B","L h:mm B","MM-dd h:mm B","MM-dd, E h:mm B","LLL h:mm B","d MMM h:mm B","E, d MMM h:mm B","h:mm B d MMMM","h:mm B W 'semana' MMMM 'killapa'","y h:mm B","y-MM h:mm B","dd-MM-y h:mm B","E, dd-MM-y h:mm B","MMM y h:mm B","d MMM y h:mm B","E, d MMM, y h:mm B","h:mm B MMMM y","y QQQ h:mm B","y QQQQ h:mm B","w 'semana' Y 'watapa' h:mm B","EEEE, d MMMM, y h:mm:ss B","h:mm:ss B d MMMM y","d MMM y h:mm:ss B","dd/MM/y h:mm:ss B","d h:mm:ss B","ccc h:mm:ss B","d, E h:mm:ss B","G y h:mm:ss B","MMM y G h:mm:ss B","d MMM, y G h:mm:ss B","E, d MMM, y G h:mm:ss B","L h:mm:ss B","MM-dd h:mm:ss B","MM-dd, E h:mm:ss B","LLL h:mm:ss B","d MMM h:mm:ss B","E, d MMM h:mm:ss B","h:mm:ss B d MMMM","h:mm:ss B W 'semana' MMMM 'killapa'","y h:mm:ss B","y-MM h:mm:ss B","dd-MM-y h:mm:ss B","E, dd-MM-y h:mm:ss B","MMM y h:mm:ss B","d MMM y h:mm:ss B","E, d MMM, y h:mm:ss B","h:mm:ss B MMMM y","y QQQ h:mm:ss B","y QQQQ h:mm:ss B","w 'semana' Y 'watapa' h:mm:ss B","EEEE, d MMMM, y h a","h a d MMMM y","d MMM y h a","dd/MM/y h a","d h a","ccc h a","d, E h a","G y h a","MMM y G h a","d MMM, y G h a","E, d MMM, y G h a","L h a","MM-dd h a","MM-dd, E h a","LLL h a","d MMM h a","E, d MMM h a","h a d MMMM","h a W 'semana' MMMM 'killapa'","y h a","y-MM h a","dd-MM-y h a","E, dd-MM-y h a","MMM y h a","d MMM y h a","E, d MMM, y h a","h a MMMM y","y QQQ h a","y QQQQ h a","w 'semana' Y 'watapa' h a","EEEE, d MMMM, y HH","HH d MMMM y","d MMM y HH","dd/MM/y HH","d HH","ccc HH","d, E HH","G y HH","MMM y G HH","d MMM, y G HH","E, d MMM, y G HH","L HH","MM-dd HH","MM-dd, E HH","LLL HH","d MMM HH","E, d MMM HH","HH d MMMM","HH W 'semana' MMMM 'killapa'","y HH","y-MM HH","dd-MM-y HH","E, dd-MM-y HH","MMM y HH","d MMM y HH","E, d MMM, y HH","HH MMMM y","y QQQ HH","y QQQQ HH","w 'semana' Y 'watapa' HH","EEEE, d MMMM, y h:mm a","h:mm a d MMMM y","d MMM y h:mm a","dd/MM/y h:mm a","d h:mm a","ccc h:mm a","d, E h:mm a","G y h:mm a","MMM y G h:mm a","d MMM, y G h:mm a","E, d MMM, y G h:mm a","L h:mm a","MM-dd h:mm a","MM-dd, E h:mm a","LLL h:mm a","d MMM h:mm a","E, d MMM h:mm a","h:mm a d MMMM","h:mm a W 'semana' MMMM 'killapa'","y h:mm a","y-MM h:mm a","dd-MM-y h:mm a","E, dd-MM-y h:mm a","MMM y h:mm a","d MMM y h:mm a","E, d MMM, y h:mm a","h:mm a MMMM y","y QQQ h:mm a","y QQQQ h:mm a","w 'semana' Y 'watapa' h:mm a","EEEE, d MMMM, y HH:mm","HH:mm d MMMM y","d MMM y HH:mm","dd/MM/y HH:mm","d HH:mm","ccc HH:mm","d, E HH:mm","G y HH:mm","MMM y G HH:mm","d MMM, y G HH:mm","E, d MMM, y G HH:mm","L HH:mm","MM-dd HH:mm","MM-dd, E HH:mm","LLL HH:mm","d MMM HH:mm","E, d MMM HH:mm","HH:mm d MMMM","HH:mm W 'semana' MMMM 'killapa'","y HH:mm","y-MM HH:mm","dd-MM-y HH:mm","E, dd-MM-y HH:mm","MMM y HH:mm","d MMM y HH:mm","E, d MMM, y HH:mm","HH:mm MMMM y","y QQQ HH:mm","y QQQQ HH:mm","w 'semana' Y 'watapa' HH:mm","EEEE, d MMMM, y h:mm:ss a","h:mm:ss a d MMMM y","d MMM y h:mm:ss a","dd/MM/y h:mm:ss a","d h:mm:ss a","ccc h:mm:ss a","d, E h:mm:ss a","G y h:mm:ss a","MMM y G h:mm:ss a","d MMM, y G h:mm:ss a","E, d MMM, y G h:mm:ss a","L h:mm:ss a","MM-dd h:mm:ss a","MM-dd, E h:mm:ss a","LLL h:mm:ss a","d MMM h:mm:ss a","E, d MMM h:mm:ss a","h:mm:ss a d MMMM","h:mm:ss a W 'semana' MMMM 'killapa'","y h:mm:ss a","y-MM h:mm:ss a","dd-MM-y h:mm:ss a","E, dd-MM-y h:mm:ss a","MMM y h:mm:ss a","d MMM y h:mm:ss a","E, d MMM, y h:mm:ss a","h:mm:ss a MMMM y","y QQQ h:mm:ss a","y QQQQ h:mm:ss a","w 'semana' Y 'watapa' h:mm:ss a","EEEE, d MMMM, y HH:mm:ss","HH:mm:ss d MMMM y","d MMM y HH:mm:ss","dd/MM/y HH:mm:ss","d HH:mm:ss","ccc HH:mm:ss","d, E HH:mm:ss","G y HH:mm:ss","MMM y G HH:mm:ss","d MMM, y G HH:mm:ss","E, d MMM, y G HH:mm:ss","L HH:mm:ss","MM-dd HH:mm:ss","MM-dd, E HH:mm:ss","LLL HH:mm:ss","d MMM HH:mm:ss","E, d MMM HH:mm:ss","HH:mm:ss d MMMM","HH:mm:ss W 'semana' MMMM 'killapa'","y HH:mm:ss","y-MM HH:mm:ss","dd-MM-y HH:mm:ss","E, dd-MM-y HH:mm:ss","MMM y HH:mm:ss","d MMM y HH:mm:ss","E, d MMM, y HH:mm:ss","HH:mm:ss MMMM y","y QQQ HH:mm:ss","y QQQQ HH:mm:ss","w 'semana' Y 'watapa' HH:mm:ss","EEEE, d MMMM, y h:mm:ss a v","h:mm:ss a v d MMMM y","d MMM y h:mm:ss a v","dd/MM/y h:mm:ss a v","d h:mm:ss a v","ccc h:mm:ss a v","d, E h:mm:ss a v","G y h:mm:ss a v","MMM y G h:mm:ss a v","d MMM, y G h:mm:ss a v","E, d MMM, y G h:mm:ss a v","L h:mm:ss a v","MM-dd h:mm:ss a v","MM-dd, E h:mm:ss a v","LLL h:mm:ss a v","d MMM h:mm:ss a v","E, d MMM h:mm:ss a v","h:mm:ss a v d MMMM","h:mm:ss a v W 'semana' MMMM 'killapa'","y h:mm:ss a v","y-MM h:mm:ss a v","dd-MM-y h:mm:ss a v","E, dd-MM-y h:mm:ss a v","MMM y h:mm:ss a v","d MMM y h:mm:ss a v","E, d MMM, y h:mm:ss a v","h:mm:ss a v MMMM y","y QQQ h:mm:ss a v","y QQQQ h:mm:ss a v","w 'semana' Y 'watapa' h:mm:ss a v","EEEE, d MMMM, y HH:mm:ss v","HH:mm:ss v d MMMM y","d MMM y HH:mm:ss v","dd/MM/y HH:mm:ss v","d HH:mm:ss v","ccc HH:mm:ss v","d, E HH:mm:ss v","G y HH:mm:ss v","MMM y G HH:mm:ss v","d MMM, y G HH:mm:ss v","E, d MMM, y G HH:mm:ss v","L HH:mm:ss v","MM-dd HH:mm:ss v","MM-dd, E HH:mm:ss v","LLL HH:mm:ss v","d MMM HH:mm:ss v","E, d MMM HH:mm:ss v","HH:mm:ss v d MMMM","HH:mm:ss v W 'semana' MMMM 'killapa'","y HH:mm:ss v","y-MM HH:mm:ss v","dd-MM-y HH:mm:ss v","E, dd-MM-y HH:mm:ss v","MMM y HH:mm:ss v","d MMM y HH:mm:ss v","E, d MMM, y HH:mm:ss v","HH:mm:ss v MMMM y","y QQQ HH:mm:ss v","y QQQQ HH:mm:ss v","w 'semana' Y 'watapa' HH:mm:ss v","EEEE, d MMMM, y h:mm a v","h:mm a v d MMMM y","d MMM y h:mm a v","dd/MM/y h:mm a v","d h:mm a v","ccc h:mm a v","d, E h:mm a v","G y h:mm a v","MMM y G h:mm a v","d MMM, y G h:mm a v","E, d MMM, y G h:mm a v","L h:mm a v","MM-dd h:mm a v","MM-dd, E h:mm a v","LLL h:mm a v","d MMM h:mm a v","E, d MMM h:mm a v","h:mm a v d MMMM","h:mm a v W 'semana' MMMM 'killapa'","y h:mm a v","y-MM h:mm a v","dd-MM-y h:mm a v","E, dd-MM-y h:mm a v","MMM y h:mm a v","d MMM y h:mm a v","E, d MMM, y h:mm a v","h:mm a v MMMM y","y QQQ h:mm a v","y QQQQ h:mm a v","w 'semana' Y 'watapa' h:mm a v","EEEE, d MMMM, y HH:mm v","HH:mm v d MMMM y","d MMM y HH:mm v","dd/MM/y HH:mm v","d HH:mm v","ccc HH:mm v","d, E HH:mm v","G y HH:mm v","MMM y G HH:mm v","d MMM, y G HH:mm v","E, d MMM, y G HH:mm v","L HH:mm v","MM-dd HH:mm v","MM-dd, E HH:mm v","LLL HH:mm v","d MMM HH:mm v","E, d MMM HH:mm v","HH:mm v d MMMM","HH:mm v W 'semana' MMMM 'killapa'","y HH:mm v","y-MM HH:mm v","dd-MM-y HH:mm v","E, dd-MM-y HH:mm v","MMM y HH:mm v","d MMM y HH:mm v","E, d MMM, y HH:mm v","HH:mm v MMMM y","y QQQ HH:mm v","y QQQQ HH:mm v","w 'semana' Y 'watapa' HH:mm v","EEEE, d MMMM, y mm:ss","mm:ss d MMMM y","d MMM y mm:ss","dd/MM/y mm:ss","d mm:ss","ccc mm:ss","d, E mm:ss","G y mm:ss","MMM y G mm:ss","d MMM, y G mm:ss","E, d MMM, y G mm:ss","L mm:ss","MM-dd mm:ss","MM-dd, E mm:ss","LLL mm:ss","d MMM mm:ss","E, d MMM mm:ss","mm:ss d MMMM","mm:ss W 'semana' MMMM 'killapa'","y mm:ss","y-MM mm:ss","dd-MM-y mm:ss","E, dd-MM-y mm:ss","MMM y mm:ss","d MMM y mm:ss","E, d MMM, y mm:ss","mm:ss MMMM y","y QQQ mm:ss","y QQQQ mm:ss","w 'semana' Y 'watapa' mm:ss"]},"hourCycle":"h23","nu":["latn"],"ca":["gregory"],"hc":["h23","","h12",""]}},"availableLocales":["qu"]})
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
