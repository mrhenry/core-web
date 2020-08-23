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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("hu").length
)) {
// Intl.DateTimeFormat.~locale.hu
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"hu":{"am":"de.","pm":"du.","weekday":{"narrow":["V","H","K","Sz","Cs","P","Sz"],"short":["V","H","K","Sze","Cs","P","Szo"],"long":["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"]},"era":{"narrow":{"BC":"ie.","AD":"isz."},"short":{"BC":"i. e.","AD":"i. sz."},"long":{"BC":"Krisztus előtt","AD":"időszámításunk szerint"}},"month":{"narrow":["J","F","M","Á","M","J","J","A","Sz","O","N","D"],"short":["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],"long":["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"]},"timeZoneName":{"America/Rio_Branco":{"long":["Acre zónaidő","Acre nyári idő"]},"Asia/Kabul":{"long":["afganisztáni idő","afganisztáni idő"]},"Africa/Maputo":{"long":["közép-afrikai téli idő","közép-afrikai téli idő"]},"Africa/Bujumbura":{"long":["közép-afrikai téli idő","közép-afrikai téli idő"]},"Africa/Gaborone":{"long":["közép-afrikai téli idő","közép-afrikai téli idő"]},"Africa/Lubumbashi":{"long":["közép-afrikai téli idő","közép-afrikai téli idő"]},"Africa/Blantyre":{"long":["közép-afrikai téli idő","közép-afrikai téli idő"]},"Africa/Kigali":{"long":["közép-afrikai téli idő","közép-afrikai téli idő"]},"Africa/Lusaka":{"long":["közép-afrikai téli idő","közép-afrikai téli idő"]},"Africa/Harare":{"long":["közép-afrikai téli idő","közép-afrikai téli idő"]},"Africa/Nairobi":{"long":["kelet-afrikai téli idő","kelet-afrikai téli idő"]},"Africa/Djibouti":{"long":["kelet-afrikai téli idő","kelet-afrikai téli idő"]},"Africa/Asmera":{"long":["kelet-afrikai téli idő","kelet-afrikai téli idő"]},"Africa/Addis_Ababa":{"long":["kelet-afrikai téli idő","kelet-afrikai téli idő"]},"Indian/Comoro":{"long":["kelet-afrikai téli idő","kelet-afrikai téli idő"]},"Indian/Antananarivo":{"long":["kelet-afrikai téli idő","kelet-afrikai téli idő"]},"Africa/Mogadishu":{"long":["kelet-afrikai téli idő","kelet-afrikai téli idő"]},"Africa/Dar_es_Salaam":{"long":["kelet-afrikai téli idő","kelet-afrikai téli idő"]},"Africa/Kampala":{"long":["kelet-afrikai téli idő","kelet-afrikai téli idő"]},"Indian/Mayotte":{"long":["kelet-afrikai téli idő","kelet-afrikai téli idő"]},"Africa/Johannesburg":{"long":["dél-afrikai téli idő","dél-afrikai téli idő"]},"Africa/Maseru":{"long":["dél-afrikai téli idő","dél-afrikai téli idő"]},"Africa/Mbabane":{"long":["dél-afrikai téli idő","dél-afrikai téli idő"]},"Africa/Lagos":{"long":["nyugat-afrikai téli idő","nyugat-afrikai nyári idő"]},"Africa/Luanda":{"long":["nyugat-afrikai téli idő","nyugat-afrikai nyári idő"]},"Africa/Porto-Novo":{"long":["nyugat-afrikai téli idő","nyugat-afrikai nyári idő"]},"Africa/Kinshasa":{"long":["nyugat-afrikai téli idő","nyugat-afrikai nyári idő"]},"Africa/Bangui":{"long":["nyugat-afrikai téli idő","nyugat-afrikai nyári idő"]},"Africa/Brazzaville":{"long":["nyugat-afrikai téli idő","nyugat-afrikai nyári idő"]},"Africa/Douala":{"long":["nyugat-afrikai téli idő","nyugat-afrikai nyári idő"]},"Africa/Libreville":{"long":["nyugat-afrikai téli idő","nyugat-afrikai nyári idő"]},"Africa/Malabo":{"long":["nyugat-afrikai téli idő","nyugat-afrikai nyári idő"]},"Africa/Niamey":{"long":["nyugat-afrikai téli idő","nyugat-afrikai nyári idő"]},"Africa/Ndjamena":{"long":["nyugat-afrikai téli idő","nyugat-afrikai nyári idő"]},"Asia/Aqtobe":{"long":["nyugat-kazahsztáni idő","nyugat-kazahsztáni idő"]},"America/Juneau":{"long":["alaszkai zónaidő","alaszkai nyári idő"]},"Asia/Almaty":{"long":["kelet-kazahsztáni idő","kelet-kazahsztáni idő"]},"America/Manaus":{"long":["amazóniai téli idő","amazóniai nyári idő"]},"America/Chicago":{"long":["középső államokbeli zónaidő","középső államokbeli nyári idő"]},"America/Belize":{"long":["középső államokbeli zónaidő","középső államokbeli nyári idő"]},"America/Winnipeg":{"long":["középső államokbeli zónaidő","középső államokbeli nyári idő"]},"America/Costa_Rica":{"long":["középső államokbeli zónaidő","középső államokbeli nyári idő"]},"America/Guatemala":{"long":["középső államokbeli zónaidő","középső államokbeli nyári idő"]},"America/Tegucigalpa":{"long":["középső államokbeli zónaidő","középső államokbeli nyári idő"]},"America/Mexico_City":{"long":["középső államokbeli zónaidő","középső államokbeli nyári idő"]},"America/El_Salvador":{"long":["középső államokbeli zónaidő","középső államokbeli nyári idő"]},"America/New_York":{"long":["keleti államokbeli zónaidő","keleti államokbeli nyári idő"]},"America/Nassau":{"long":["keleti államokbeli zónaidő","keleti államokbeli nyári idő"]},"America/Toronto":{"long":["keleti államokbeli zónaidő","keleti államokbeli nyári idő"]},"America/Port-au-Prince":{"long":["keleti államokbeli zónaidő","keleti államokbeli nyári idő"]},"America/Jamaica":{"long":["keleti államokbeli zónaidő","keleti államokbeli nyári idő"]},"America/Cayman":{"long":["keleti államokbeli zónaidő","keleti államokbeli nyári idő"]},"America/Panama":{"long":["keleti államokbeli zónaidő","keleti államokbeli nyári idő"]},"America/Denver":{"long":["hegyvidéki zónaidő","hegyvidéki nyári idő"]},"America/Edmonton":{"long":["hegyvidéki zónaidő","hegyvidéki nyári idő"]},"America/Hermosillo":{"long":["hegyvidéki zónaidő","hegyvidéki nyári idő"]},"America/Los_Angeles":{"long":["csendes-óceáni zónaidő","csendes-óceáni nyári idő"]},"America/Vancouver":{"long":["csendes-óceáni zónaidő","csendes-óceáni nyári idő"]},"America/Tijuana":{"long":["csendes-óceáni zónaidő","csendes-óceáni nyári idő"]},"Asia/Anadyr":{"long":["Anadíri zónaidő","Anadíri nyári idő"]},"Pacific/Apia":{"long":["apiai téli idő","apiai nyári idő"]},"Asia/Riyadh":{"long":["arab téli idő","arab nyári idő"]},"Asia/Bahrain":{"long":["arab téli idő","arab nyári idő"]},"Asia/Baghdad":{"long":["arab téli idő","arab nyári idő"]},"Asia/Kuwait":{"long":["arab téli idő","arab nyári idő"]},"Asia/Qatar":{"long":["arab téli idő","arab nyári idő"]},"Asia/Aden":{"long":["arab téli idő","arab nyári idő"]},"America/Buenos_Aires":{"long":["argentínai téli idő","argentínai nyári idő"]},"America/Argentina/San_Luis":{"long":["nyugat-argentínai téli idő","nyugat-argentínai nyári idő"]},"Asia/Ashgabat":{"long":["türkmenisztáni téli idő","türkmenisztáni nyári idő"]},"America/Halifax":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Antigua":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Anguilla":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Aruba":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Barbados":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"Atlantic/Bermuda":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Kralendijk":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Curacao":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Dominica":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Grenada":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Thule":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Guadeloupe":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/St_Kitts":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/St_Lucia":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Marigot":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Martinique":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Montserrat":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Puerto_Rico":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Lower_Princes":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Port_of_Spain":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/St_Vincent":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/Tortola":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"America/St_Thomas":{"long":["atlanti-óceáni zónaidő","atlanti-óceáni nyári idő"]},"Australia/Adelaide":{"long":["közép-ausztráliai téli idő","közép-ausztráliai nyári idő"]},"Australia/Eucla":{"long":["közép-nyugat-ausztráliai téli idő","közép-nyugat-ausztráliai nyári idő"]},"Australia/Sydney":{"long":["kelet-ausztráliai téli idő","kelet-ausztráliai nyári idő"]},"Australia/Perth":{"long":["nyugat-ausztráliai téli idő","nyugat-ausztráliai nyári idő"]},"Atlantic/Azores":{"long":["azori téli idő","azori nyári idő"]},"Asia/Thimphu":{"long":["butáni idő","butáni idő"]},"America/La_Paz":{"long":["bolíviai téli idő","bolíviai téli idő"]},"Asia/Kuching":{"long":["malajziai idő","malajziai idő"]},"America/Sao_Paulo":{"long":["brazíliai téli idő","brazíliai nyári idő"]},"Europe/London":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Asia/Brunei":{"long":["Brunei Darussalam-i idő","Brunei Darussalam-i idő"]},"Atlantic/Cape_Verde":{"long":["zöld-foki-szigeteki téli idő","zöld-foki-szigeteki nyári idő"]},"Pacific/Saipan":{"long":["Észak-mariana-szigeteki idő","Észak-mariana-szigeteki idő"]},"Pacific/Guam":{"long":["Guami zónaidő","Guami zónaidő"]},"Pacific/Chatham":{"long":["chathami téli idő","chathami nyári idő"]},"America/Santiago":{"long":["chilei téli idő","chilei nyári idő"]},"Asia/Shanghai":{"long":["kínai téli idő","kínai nyári idő"]},"Asia/Choibalsan":{"long":["csojbalszani téli idő","csojbalszani nyári idő"]},"Indian/Christmas":{"long":["karácsony-szigeti téli idő","karácsony-szigeti téli idő"]},"Indian/Cocos":{"long":["kókusz-szigeteki téli idő","kókusz-szigeteki téli idő"]},"America/Bogota":{"long":["kolumbiai téli idő","kolumbiai nyári idő"]},"Pacific/Rarotonga":{"long":["cook-szigeteki téli idő","cook-szigeteki fél nyári idő"]},"America/Havana":{"long":["kubai téli idő","kubai nyári idő"]},"Antarctica/Davis":{"long":["davisi idő","davisi idő"]},"Antarctica/DumontDUrville":{"long":["dumont-d’Urville-i idő","dumont-d’Urville-i idő"]},"Asia/Dushanbe":{"long":["tádzsikisztáni idő","tádzsikisztáni idő"]},"America/Paramaribo":{"long":["szurinámi idő","szurinámi idő"]},"Asia/Dili":{"long":["kelet-timori téli idő","kelet-timori téli idő"]},"Pacific/Easter":{"long":["húsvét-szigeti téli idő","húsvét-szigeti nyári idő"]},"America/Guayaquil":{"long":["ecuadori téli idő","ecuadori téli idő"]},"Europe/Paris":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Andorra":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Tirane":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Vienna":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Sarajevo":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Brussels":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Zurich":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Prague":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Berlin":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Copenhagen":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Madrid":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Gibraltar":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Zagreb":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Budapest":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Rome":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Vaduz":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Luxembourg":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Monaco":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Podgorica":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Skopje":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Malta":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Amsterdam":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Oslo":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Warsaw":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Belgrade":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Stockholm":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Ljubljana":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Bratislava":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/San_Marino":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Africa/Tunis":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Vatican":{"long":["közép-európai téli idő","közép-európai nyári idő"],"short":["CET","CEST"]},"Europe/Bucharest":{"long":["kelet-európai téli idő","kelet-európai nyári idő"],"short":["EET","EEST"]},"Europe/Mariehamn":{"long":["kelet-európai téli idő","kelet-európai nyári idő"],"short":["EET","EEST"]},"Europe/Sofia":{"long":["kelet-európai téli idő","kelet-európai nyári idő"],"short":["EET","EEST"]},"Asia/Nicosia":{"long":["kelet-európai téli idő","kelet-európai nyári idő"],"short":["EET","EEST"]},"Africa/Cairo":{"long":["kelet-európai téli idő","kelet-európai nyári idő"],"short":["EET","EEST"]},"Europe/Helsinki":{"long":["kelet-európai téli idő","kelet-európai nyári idő"],"short":["EET","EEST"]},"Europe/Athens":{"long":["kelet-európai téli idő","kelet-európai nyári idő"],"short":["EET","EEST"]},"Asia/Amman":{"long":["kelet-európai téli idő","kelet-európai nyári idő"],"short":["EET","EEST"]},"Asia/Beirut":{"long":["kelet-európai téli idő","kelet-európai nyári idő"],"short":["EET","EEST"]},"Asia/Damascus":{"long":["kelet-európai téli idő","kelet-európai nyári idő"],"short":["EET","EEST"]},"Europe/Minsk":{"long":["minszki idő","minszki idő"]},"Europe/Kaliningrad":{"long":["minszki idő","minszki idő"]},"Atlantic/Canary":{"long":["nyugat-európai téli idő","nyugat-európai nyári idő"],"short":["WET","WEST"]},"Atlantic/Faeroe":{"long":["nyugat-európai téli idő","nyugat-európai nyári idő"],"short":["WET","WEST"]},"Atlantic/Stanley":{"long":["falkland-szigeteki téli idő","falkland-szigeteki nyári idő"]},"Pacific/Fiji":{"long":["fidzsi téli idő","fidzsi nyári idő"]},"America/Cayenne":{"long":["francia-guyanai idő","francia-guyanai idő"]},"Indian/Kerguelen":{"long":["francia déli és antarktiszi idő","francia déli és antarktiszi idő"]},"Asia/Bishkek":{"long":["kirgizisztáni idő","kirgizisztáni idő"]},"Pacific/Galapagos":{"long":["galápagosi téli idő","galápagosi téli idő"]},"Pacific/Gambier":{"long":["gambieri idő","gambieri idő"]},"Pacific/Tarawa":{"long":["gilbert-szigeteki idő","gilbert-szigeteki idő"]},"Atlantic/Reykjavik":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Africa/Ouagadougou":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Africa/Abidjan":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Africa/Accra":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Africa/Banjul":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Africa/Conakry":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Africa/Bamako":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Africa/Nouakchott":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Atlantic/St_Helena":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Africa/Freetown":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Africa/Dakar":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"Africa/Lome":{"long":["greenwichi középidő, téli idő","greenwichi középidő, téli idő"],"short":["GMT","GMT"]},"America/Scoresbysund":{"long":["kelet-grönlandi téli idő","kelet-grönlandi nyári idő"]},"America/Godthab":{"long":["nyugat-grönlandi téli idő","nyugat-grönlandi nyári idő"]},"Asia/Dubai":{"long":["öbölbeli téli idő","öbölbeli téli idő"]},"Asia/Muscat":{"long":["öbölbeli téli idő","öbölbeli téli idő"]},"America/Guyana":{"long":["guyanai téli idő","guyanai téli idő"]},"Pacific/Honolulu":{"long":["hawaii-aleuti téli idő","hawaii-aleuti nyári idő"]},"Asia/Hong_Kong":{"long":["hongkongi téli idő","hongkongi nyári idő"]},"Asia/Hovd":{"long":["hovdi téli idő","hovdi nyári idő"]},"Asia/Calcutta":{"long":["indiai téli idő","indiai téli idő"]},"Asia/Colombo":{"long":["Lankai idő","Lankai idő"]},"Indian/Chagos":{"long":["indiai-óceáni idő","indiai-óceáni idő"]},"Asia/Bangkok":{"long":["indokínai idő","indokínai idő"]},"Asia/Phnom_Penh":{"long":["indokínai idő","indokínai idő"]},"Asia/Vientiane":{"long":["indokínai idő","indokínai idő"]},"Asia/Makassar":{"long":["közép-indonéziai idő","közép-indonéziai idő"]},"Asia/Jayapura":{"long":["kelet-indonéziai idő","kelet-indonéziai idő"]},"Asia/Jakarta":{"long":["nyugat-indonéziai téli idő","nyugat-indonéziai téli idő"]},"Asia/Tehran":{"long":["iráni téli idő","iráni nyári idő"]},"Asia/Irkutsk":{"long":["irkutszki téli idő","irkutszki nyári idő"]},"Asia/Jerusalem":{"long":["izraeli téli idő","izraeli nyári idő"]},"Asia/Tokyo":{"long":["japán téli idő","japán nyári idő"]},"Asia/Kamchatka":{"long":["Petropavlovszk-kamcsatkai zónaidő","Petropavlovszk-kamcsatkai nyári idő"]},"Asia/Karachi":{"long":["pakisztáni téli idő","pakisztáni nyári idő"]},"Asia/Qyzylorda":{"long":["Qyzylordai zónaidő","Qyzylordai nyári idő"]},"Asia/Seoul":{"long":["koreai téli idő","koreai nyári idő"]},"Pacific/Kosrae":{"long":["kosraei idő","kosraei idő"]},"Asia/Krasnoyarsk":{"long":["krasznojarszki téli idő","krasznojarszki nyári idő"]},"Europe/Samara":{"long":["Szamarai zónaidő","Szamarai nyári idő"]},"Pacific/Kiritimati":{"long":["sor-szigeteki idő","sor-szigeteki idő"]},"Australia/Lord_Howe":{"long":["Lord Howe-szigeti téli idő","Lord Howe-szigeti nyári idő"]},"Asia/Macau":{"long":["Macaui zónaidő","Macaui nyári idő"]},"Antarctica/Macquarie":{"long":["macquarie-szigeti téli idő","macquarie-szigeti téli idő"]},"Asia/Magadan":{"long":["magadani téli idő","magadáni nyári idő"]},"Indian/Maldives":{"long":["maldív-szigeteki idő","maldív-szigeteki idő"]},"Pacific/Marquesas":{"long":["marquises-szigeteki idő","marquises-szigeteki idő"]},"Pacific/Majuro":{"long":["marshall-szigeteki idő","marshall-szigeteki idő"]},"Indian/Mauritius":{"long":["mauritiusi téli idő","mauritiusi nyári idő"]},"Antarctica/Mawson":{"long":["mawsoni idő","mawsoni idő"]},"America/Santa_Isabel":{"long":["északnyugat-mexikói zónaidő","északnyugat-mexikói nyári idő"]},"America/Mazatlan":{"long":["mexikói csendes-óceáni zónaidő","mexikói csendes-óceáni nyári idő"]},"Asia/Ulaanbaatar":{"long":["ulánbátori téli idő","ulánbátori nyári idő"]},"Europe/Moscow":{"long":["moszkvai téli idő","moszkvai nyári idő"]},"Asia/Rangoon":{"long":["mianmari idő","mianmari idő"]},"Pacific/Nauru":{"long":["naurui idő","naurui idő"]},"Asia/Katmandu":{"long":["nepáli idő","nepáli idő"]},"Pacific/Noumea":{"long":["új-kaledóniai téli idő","új-kaledóniai nyári idő"]},"Pacific/Auckland":{"long":["új-zélandi téli idő","új-zélandi nyári idő"]},"Antarctica/McMurdo":{"long":["új-zélandi téli idő","új-zélandi nyári idő"]},"America/St_Johns":{"long":["új-fundlandi zónaidő","új-fundlandi nyári idő"]},"Pacific/Niue":{"long":["niuei idő","niuei idő"]},"Pacific/Norfolk":{"long":["norfolk-szigeteki idő","norfolk-szigeteki idő"]},"America/Noronha":{"long":["Fernando de Noronha-i téli idő","Fernando de Noronha-i nyári idő"]},"Asia/Novosibirsk":{"long":["novoszibirszki téli idő","novoszibirszki nyári idő"]},"Asia/Omsk":{"long":["omszki téli idő","omszki nyári idő"]},"Pacific/Palau":{"long":["palaui idő","palaui idő"]},"Pacific/Port_Moresby":{"long":["pápua új-guineai idő","pápua új-guineai idő"]},"America/Asuncion":{"long":["paraguayi téli idő","paraguayi nyári idő"]},"America/Lima":{"long":["perui téli idő","perui nyári idő"]},"Asia/Manila":{"long":["fülöp-szigeteki téli idő","fülöp-szigeteki nyári idő"]},"Pacific/Enderbury":{"long":["phoenix-szigeteki téli idő","phoenix-szigeteki téli idő"]},"America/Miquelon":{"long":["Saint-Pierre és Miquelon-i zónaidő","Saint-Pierre és Miquelon-i nyári idő"]},"Pacific/Pitcairn":{"long":["pitcairn-szigeteki idő","pitcairn-szigeteki idő"]},"Pacific/Ponape":{"long":["ponape-szigeti idő","ponape-szigeti idő"]},"Asia/Pyongyang":{"long":["phenjani idő","phenjani idő"]},"Indian/Reunion":{"long":["réunioni idő","réunioni idő"]},"Antarctica/Rothera":{"long":["rotherai idő","rotherai idő"]},"Asia/Sakhalin":{"long":["szahalini téli idő","szahalini nyári idő"]},"Pacific/Pago_Pago":{"long":["szamoai téli idő","szamoai nyári idő"]},"Indian/Mahe":{"long":["seychelle-szigeteki idő","seychelle-szigeteki idő"]},"Asia/Singapore":{"long":["szingapúri téli idő","szingapúri téli idő"]},"Pacific/Guadalcanal":{"long":["salamon-szigeteki idő","salamon-szigeteki idő"]},"Atlantic/South_Georgia":{"long":["déli-georgiai idő","déli-georgiai idő"]},"Asia/Yekaterinburg":{"long":["jekatyerinburgi téli idő","jekatyerinburgi nyári idő"]},"Antarctica/Syowa":{"long":["syowai idő","syowai idő"]},"Pacific/Tahiti":{"long":["tahiti idő","tahiti idő"]},"Asia/Taipei":{"long":["taipei téli idő","taipei nyári idő"]},"Asia/Tashkent":{"long":["üzbegisztáni téli idő","üzbegisztáni nyári idő"]},"Pacific/Fakaofo":{"long":["tokelaui idő","tokelaui idő"]},"Pacific/Tongatapu":{"long":["tongai téli idő","tongai nyári idő"]},"Pacific/Truk":{"long":["truki idő","truki idő"]},"Pacific/Funafuti":{"long":["tuvalui idő","tuvalui idő"]},"America/Montevideo":{"long":["uruguayi téli idő","uruguayi nyári idő"]},"Pacific/Efate":{"long":["vanuatui téli idő","vanuatui nyári idő"]},"America/Caracas":{"long":["venezuelai idő","venezuelai idő"]},"Asia/Vladivostok":{"long":["vlagyivosztoki téli idő","vlagyivosztoki nyári idő"]},"Europe/Volgograd":{"long":["volgográdi téli idő","volgográdi nyári idő"]},"Antarctica/Vostok":{"long":["vosztoki idő","vosztoki idő"]},"Pacific/Wake":{"long":["wake-szigeti idő","wake-szigeti idő"]},"Pacific/Wallis":{"long":["Wallis és Futuna-i idő","Wallis és Futuna-i idő"]},"Asia/Yakutsk":{"long":["jakutszki téli idő","jakutszki nyári idő"]},"UTC":{"long":["Koordinált világidő","Koordinált világidő"],"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","formats":{"gregory":["B h","B h:mm","B h:mm:ss","d","ccc","E B h:mm","E B h:mm:ss","d., E","E h:mm a","E HH:mm","E h:mm:ss a","E HH:mm:ss","G y.","G y. MMM","G y. MMM d.","G y. MMM d., E","a h","H","a h:mm","H:mm","a h:mm:ss","H:mm:ss","a h:mm:ss v","HH:mm:ss v","a h:mm v","HH:mm v","L","M. d.","M. d., E","LLL","MMM d.","MMM d., E","MMMM d.","MMMM W. 'hete'","MMMM W. 'hete'","mm:ss","mm:ss","y.","y. M.","y. MM. dd.","y. MM. dd., E","y. MMM","y. MMM d.","y. MMM d., E","y. MMMM","y. QQQ","y. QQQQ","Y w. 'hete'","Y w. 'hete'","y. MMMM d., EEEE","y. MMMM d.","y. MMM d.","y. MM. dd.","H:mm:ss zzzz","H:mm:ss z","H:mm:ss","H:mm","y. MMMM d., EEEE H:mm:ss zzzz","y. MMMM d. H:mm:ss zzzz","y. MMM d. H:mm:ss zzzz","y. MM. dd. H:mm:ss zzzz","d H:mm:ss zzzz","ccc H:mm:ss zzzz","d., E H:mm:ss zzzz","G y. H:mm:ss zzzz","G y. MMM H:mm:ss zzzz","G y. MMM d. H:mm:ss zzzz","G y. MMM d., E H:mm:ss zzzz","L H:mm:ss zzzz","M. d. H:mm:ss zzzz","M. d., E H:mm:ss zzzz","LLL H:mm:ss zzzz","MMM d. H:mm:ss zzzz","MMM d., E H:mm:ss zzzz","MMMM d. H:mm:ss zzzz","MMMM W. 'hete' H:mm:ss zzzz","MMMM W. 'hete' H:mm:ss zzzz","y. H:mm:ss zzzz","y. M. H:mm:ss zzzz","y. MM. dd. H:mm:ss zzzz","y. MM. dd., E H:mm:ss zzzz","y. MMM H:mm:ss zzzz","y. MMM d. H:mm:ss zzzz","y. MMM d., E H:mm:ss zzzz","y. MMMM H:mm:ss zzzz","y. QQQ H:mm:ss zzzz","y. QQQQ H:mm:ss zzzz","Y w. 'hete' H:mm:ss zzzz","Y w. 'hete' H:mm:ss zzzz","y. MMMM d., EEEE H:mm:ss z","y. MMMM d. H:mm:ss z","y. MMM d. H:mm:ss z","y. MM. dd. H:mm:ss z","d H:mm:ss z","ccc H:mm:ss z","d., E H:mm:ss z","G y. H:mm:ss z","G y. MMM H:mm:ss z","G y. MMM d. H:mm:ss z","G y. MMM d., E H:mm:ss z","L H:mm:ss z","M. d. H:mm:ss z","M. d., E H:mm:ss z","LLL H:mm:ss z","MMM d. H:mm:ss z","MMM d., E H:mm:ss z","MMMM d. H:mm:ss z","MMMM W. 'hete' H:mm:ss z","MMMM W. 'hete' H:mm:ss z","y. H:mm:ss z","y. M. H:mm:ss z","y. MM. dd. H:mm:ss z","y. MM. dd., E H:mm:ss z","y. MMM H:mm:ss z","y. MMM d. H:mm:ss z","y. MMM d., E H:mm:ss z","y. MMMM H:mm:ss z","y. QQQ H:mm:ss z","y. QQQQ H:mm:ss z","Y w. 'hete' H:mm:ss z","Y w. 'hete' H:mm:ss z","y. MMMM d., EEEE H:mm:ss","y. MMMM d. H:mm:ss","y. MMM d. H:mm:ss","y. MM. dd. H:mm:ss","d H:mm:ss","ccc H:mm:ss","d., E H:mm:ss","G y. H:mm:ss","G y. MMM H:mm:ss","G y. MMM d. H:mm:ss","G y. MMM d., E H:mm:ss","L H:mm:ss","M. d. H:mm:ss","M. d., E H:mm:ss","LLL H:mm:ss","MMM d. H:mm:ss","MMM d., E H:mm:ss","MMMM d. H:mm:ss","MMMM W. 'hete' H:mm:ss","MMMM W. 'hete' H:mm:ss","y. H:mm:ss","y. M. H:mm:ss","y. MM. dd. H:mm:ss","y. MM. dd., E H:mm:ss","y. MMM H:mm:ss","y. MMM d. H:mm:ss","y. MMM d., E H:mm:ss","y. MMMM H:mm:ss","y. QQQ H:mm:ss","y. QQQQ H:mm:ss","Y w. 'hete' H:mm:ss","Y w. 'hete' H:mm:ss","y. MMMM d., EEEE H:mm","y. MMMM d. H:mm","y. MMM d. H:mm","y. MM. dd. H:mm","d H:mm","ccc H:mm","d., E H:mm","G y. H:mm","G y. MMM H:mm","G y. MMM d. H:mm","G y. MMM d., E H:mm","L H:mm","M. d. H:mm","M. d., E H:mm","LLL H:mm","MMM d. H:mm","MMM d., E H:mm","MMMM d. H:mm","MMMM W. 'hete' H:mm","MMMM W. 'hete' H:mm","y. H:mm","y. M. H:mm","y. MM. dd. H:mm","y. MM. dd., E H:mm","y. MMM H:mm","y. MMM d. H:mm","y. MMM d., E H:mm","y. MMMM H:mm","y. QQQ H:mm","y. QQQQ H:mm","Y w. 'hete' H:mm","Y w. 'hete' H:mm","y. MMMM d., EEEE B h","y. MMMM d. B h","y. MMM d. B h","y. MM. dd. B h","d B h","ccc B h","d., E B h","G y. B h","G y. MMM B h","G y. MMM d. B h","G y. MMM d., E B h","L B h","M. d. B h","M. d., E B h","LLL B h","MMM d. B h","MMM d., E B h","MMMM d. B h","MMMM W. 'hete' B h","MMMM W. 'hete' B h","y. B h","y. M. B h","y. MM. dd. B h","y. MM. dd., E B h","y. MMM B h","y. MMM d. B h","y. MMM d., E B h","y. MMMM B h","y. QQQ B h","y. QQQQ B h","Y w. 'hete' B h","Y w. 'hete' B h","y. MMMM d., EEEE B h:mm","y. MMMM d. B h:mm","y. MMM d. B h:mm","y. MM. dd. B h:mm","d B h:mm","ccc B h:mm","d., E B h:mm","G y. B h:mm","G y. MMM B h:mm","G y. MMM d. B h:mm","G y. MMM d., E B h:mm","L B h:mm","M. d. B h:mm","M. d., E B h:mm","LLL B h:mm","MMM d. B h:mm","MMM d., E B h:mm","MMMM d. B h:mm","MMMM W. 'hete' B h:mm","MMMM W. 'hete' B h:mm","y. B h:mm","y. M. B h:mm","y. MM. dd. B h:mm","y. MM. dd., E B h:mm","y. MMM B h:mm","y. MMM d. B h:mm","y. MMM d., E B h:mm","y. MMMM B h:mm","y. QQQ B h:mm","y. QQQQ B h:mm","Y w. 'hete' B h:mm","Y w. 'hete' B h:mm","y. MMMM d., EEEE B h:mm:ss","y. MMMM d. B h:mm:ss","y. MMM d. B h:mm:ss","y. MM. dd. B h:mm:ss","d B h:mm:ss","ccc B h:mm:ss","d., E B h:mm:ss","G y. B h:mm:ss","G y. MMM B h:mm:ss","G y. MMM d. B h:mm:ss","G y. MMM d., E B h:mm:ss","L B h:mm:ss","M. d. B h:mm:ss","M. d., E B h:mm:ss","LLL B h:mm:ss","MMM d. B h:mm:ss","MMM d., E B h:mm:ss","MMMM d. B h:mm:ss","MMMM W. 'hete' B h:mm:ss","MMMM W. 'hete' B h:mm:ss","y. B h:mm:ss","y. M. B h:mm:ss","y. MM. dd. B h:mm:ss","y. MM. dd., E B h:mm:ss","y. MMM B h:mm:ss","y. MMM d. B h:mm:ss","y. MMM d., E B h:mm:ss","y. MMMM B h:mm:ss","y. QQQ B h:mm:ss","y. QQQQ B h:mm:ss","Y w. 'hete' B h:mm:ss","Y w. 'hete' B h:mm:ss","y. MMMM d., EEEE a h","y. MMMM d. a h","y. MMM d. a h","y. MM. dd. a h","d a h","ccc a h","d., E a h","G y. a h","G y. MMM a h","G y. MMM d. a h","G y. MMM d., E a h","L a h","M. d. a h","M. d., E a h","LLL a h","MMM d. a h","MMM d., E a h","MMMM d. a h","MMMM W. 'hete' a h","MMMM W. 'hete' a h","y. a h","y. M. a h","y. MM. dd. a h","y. MM. dd., E a h","y. MMM a h","y. MMM d. a h","y. MMM d., E a h","y. MMMM a h","y. QQQ a h","y. QQQQ a h","Y w. 'hete' a h","Y w. 'hete' a h","y. MMMM d., EEEE H","y. MMMM d. H","y. MMM d. H","y. MM. dd. H","d H","ccc H","d., E H","G y. H","G y. MMM H","G y. MMM d. H","G y. MMM d., E H","L H","M. d. H","M. d., E H","LLL H","MMM d. H","MMM d., E H","MMMM d. H","MMMM W. 'hete' H","MMMM W. 'hete' H","y. H","y. M. H","y. MM. dd. H","y. MM. dd., E H","y. MMM H","y. MMM d. H","y. MMM d., E H","y. MMMM H","y. QQQ H","y. QQQQ H","Y w. 'hete' H","Y w. 'hete' H","y. MMMM d., EEEE a h:mm","y. MMMM d. a h:mm","y. MMM d. a h:mm","y. MM. dd. a h:mm","d a h:mm","ccc a h:mm","d., E a h:mm","G y. a h:mm","G y. MMM a h:mm","G y. MMM d. a h:mm","G y. MMM d., E a h:mm","L a h:mm","M. d. a h:mm","M. d., E a h:mm","LLL a h:mm","MMM d. a h:mm","MMM d., E a h:mm","MMMM d. a h:mm","MMMM W. 'hete' a h:mm","MMMM W. 'hete' a h:mm","y. a h:mm","y. M. a h:mm","y. MM. dd. a h:mm","y. MM. dd., E a h:mm","y. MMM a h:mm","y. MMM d. a h:mm","y. MMM d., E a h:mm","y. MMMM a h:mm","y. QQQ a h:mm","y. QQQQ a h:mm","Y w. 'hete' a h:mm","Y w. 'hete' a h:mm","y. MMMM d., EEEE H:mm","y. MMMM d. H:mm","y. MMM d. H:mm","y. MM. dd. H:mm","d H:mm","ccc H:mm","d., E H:mm","G y. H:mm","G y. MMM H:mm","G y. MMM d. H:mm","G y. MMM d., E H:mm","L H:mm","M. d. H:mm","M. d., E H:mm","LLL H:mm","MMM d. H:mm","MMM d., E H:mm","MMMM d. H:mm","MMMM W. 'hete' H:mm","MMMM W. 'hete' H:mm","y. H:mm","y. M. H:mm","y. MM. dd. H:mm","y. MM. dd., E H:mm","y. MMM H:mm","y. MMM d. H:mm","y. MMM d., E H:mm","y. MMMM H:mm","y. QQQ H:mm","y. QQQQ H:mm","Y w. 'hete' H:mm","Y w. 'hete' H:mm","y. MMMM d., EEEE a h:mm:ss","y. MMMM d. a h:mm:ss","y. MMM d. a h:mm:ss","y. MM. dd. a h:mm:ss","d a h:mm:ss","ccc a h:mm:ss","d., E a h:mm:ss","G y. a h:mm:ss","G y. MMM a h:mm:ss","G y. MMM d. a h:mm:ss","G y. MMM d., E a h:mm:ss","L a h:mm:ss","M. d. a h:mm:ss","M. d., E a h:mm:ss","LLL a h:mm:ss","MMM d. a h:mm:ss","MMM d., E a h:mm:ss","MMMM d. a h:mm:ss","MMMM W. 'hete' a h:mm:ss","MMMM W. 'hete' a h:mm:ss","y. a h:mm:ss","y. M. a h:mm:ss","y. MM. dd. a h:mm:ss","y. MM. dd., E a h:mm:ss","y. MMM a h:mm:ss","y. MMM d. a h:mm:ss","y. MMM d., E a h:mm:ss","y. MMMM a h:mm:ss","y. QQQ a h:mm:ss","y. QQQQ a h:mm:ss","Y w. 'hete' a h:mm:ss","Y w. 'hete' a h:mm:ss","y. MMMM d., EEEE H:mm:ss","y. MMMM d. H:mm:ss","y. MMM d. H:mm:ss","y. MM. dd. H:mm:ss","d H:mm:ss","ccc H:mm:ss","d., E H:mm:ss","G y. H:mm:ss","G y. MMM H:mm:ss","G y. MMM d. H:mm:ss","G y. MMM d., E H:mm:ss","L H:mm:ss","M. d. H:mm:ss","M. d., E H:mm:ss","LLL H:mm:ss","MMM d. H:mm:ss","MMM d., E H:mm:ss","MMMM d. H:mm:ss","MMMM W. 'hete' H:mm:ss","MMMM W. 'hete' H:mm:ss","y. H:mm:ss","y. M. H:mm:ss","y. MM. dd. H:mm:ss","y. MM. dd., E H:mm:ss","y. MMM H:mm:ss","y. MMM d. H:mm:ss","y. MMM d., E H:mm:ss","y. MMMM H:mm:ss","y. QQQ H:mm:ss","y. QQQQ H:mm:ss","Y w. 'hete' H:mm:ss","Y w. 'hete' H:mm:ss","y. MMMM d., EEEE a h:mm:ss v","y. MMMM d. a h:mm:ss v","y. MMM d. a h:mm:ss v","y. MM. dd. a h:mm:ss v","d a h:mm:ss v","ccc a h:mm:ss v","d., E a h:mm:ss v","G y. a h:mm:ss v","G y. MMM a h:mm:ss v","G y. MMM d. a h:mm:ss v","G y. MMM d., E a h:mm:ss v","L a h:mm:ss v","M. d. a h:mm:ss v","M. d., E a h:mm:ss v","LLL a h:mm:ss v","MMM d. a h:mm:ss v","MMM d., E a h:mm:ss v","MMMM d. a h:mm:ss v","MMMM W. 'hete' a h:mm:ss v","MMMM W. 'hete' a h:mm:ss v","y. a h:mm:ss v","y. M. a h:mm:ss v","y. MM. dd. a h:mm:ss v","y. MM. dd., E a h:mm:ss v","y. MMM a h:mm:ss v","y. MMM d. a h:mm:ss v","y. MMM d., E a h:mm:ss v","y. MMMM a h:mm:ss v","y. QQQ a h:mm:ss v","y. QQQQ a h:mm:ss v","Y w. 'hete' a h:mm:ss v","Y w. 'hete' a h:mm:ss v","y. MMMM d., EEEE HH:mm:ss v","y. MMMM d. HH:mm:ss v","y. MMM d. HH:mm:ss v","y. MM. dd. HH:mm:ss v","d HH:mm:ss v","ccc HH:mm:ss v","d., E HH:mm:ss v","G y. HH:mm:ss v","G y. MMM HH:mm:ss v","G y. MMM d. HH:mm:ss v","G y. MMM d., E HH:mm:ss v","L HH:mm:ss v","M. d. HH:mm:ss v","M. d., E HH:mm:ss v","LLL HH:mm:ss v","MMM d. HH:mm:ss v","MMM d., E HH:mm:ss v","MMMM d. HH:mm:ss v","MMMM W. 'hete' HH:mm:ss v","MMMM W. 'hete' HH:mm:ss v","y. HH:mm:ss v","y. M. HH:mm:ss v","y. MM. dd. HH:mm:ss v","y. MM. dd., E HH:mm:ss v","y. MMM HH:mm:ss v","y. MMM d. HH:mm:ss v","y. MMM d., E HH:mm:ss v","y. MMMM HH:mm:ss v","y. QQQ HH:mm:ss v","y. QQQQ HH:mm:ss v","Y w. 'hete' HH:mm:ss v","Y w. 'hete' HH:mm:ss v","y. MMMM d., EEEE a h:mm v","y. MMMM d. a h:mm v","y. MMM d. a h:mm v","y. MM. dd. a h:mm v","d a h:mm v","ccc a h:mm v","d., E a h:mm v","G y. a h:mm v","G y. MMM a h:mm v","G y. MMM d. a h:mm v","G y. MMM d., E a h:mm v","L a h:mm v","M. d. a h:mm v","M. d., E a h:mm v","LLL a h:mm v","MMM d. a h:mm v","MMM d., E a h:mm v","MMMM d. a h:mm v","MMMM W. 'hete' a h:mm v","MMMM W. 'hete' a h:mm v","y. a h:mm v","y. M. a h:mm v","y. MM. dd. a h:mm v","y. MM. dd., E a h:mm v","y. MMM a h:mm v","y. MMM d. a h:mm v","y. MMM d., E a h:mm v","y. MMMM a h:mm v","y. QQQ a h:mm v","y. QQQQ a h:mm v","Y w. 'hete' a h:mm v","Y w. 'hete' a h:mm v","y. MMMM d., EEEE HH:mm v","y. MMMM d. HH:mm v","y. MMM d. HH:mm v","y. MM. dd. HH:mm v","d HH:mm v","ccc HH:mm v","d., E HH:mm v","G y. HH:mm v","G y. MMM HH:mm v","G y. MMM d. HH:mm v","G y. MMM d., E HH:mm v","L HH:mm v","M. d. HH:mm v","M. d., E HH:mm v","LLL HH:mm v","MMM d. HH:mm v","MMM d., E HH:mm v","MMMM d. HH:mm v","MMMM W. 'hete' HH:mm v","MMMM W. 'hete' HH:mm v","y. HH:mm v","y. M. HH:mm v","y. MM. dd. HH:mm v","y. MM. dd., E HH:mm v","y. MMM HH:mm v","y. MMM d. HH:mm v","y. MMM d., E HH:mm v","y. MMMM HH:mm v","y. QQQ HH:mm v","y. QQQQ HH:mm v","Y w. 'hete' HH:mm v","Y w. 'hete' HH:mm v","y. MMMM d., EEEE mm:ss","y. MMMM d. mm:ss","y. MMM d. mm:ss","y. MM. dd. mm:ss","d mm:ss","ccc mm:ss","d., E mm:ss","G y. mm:ss","G y. MMM mm:ss","G y. MMM d. mm:ss","G y. MMM d., E mm:ss","L mm:ss","M. d. mm:ss","M. d., E mm:ss","LLL mm:ss","MMM d. mm:ss","MMM d., E mm:ss","MMMM d. mm:ss","MMMM W. 'hete' mm:ss","MMMM W. 'hete' mm:ss","y. mm:ss","y. M. mm:ss","y. MM. dd. mm:ss","y. MM. dd., E mm:ss","y. MMM mm:ss","y. MMM d. mm:ss","y. MMM d., E mm:ss","y. MMMM mm:ss","y. QQQ mm:ss","y. QQQQ mm:ss","Y w. 'hete' mm:ss","Y w. 'hete' mm:ss","y. MMMM d., EEEE mm:ss","y. MMMM d. mm:ss","y. MMM d. mm:ss","y. MM. dd. mm:ss","d mm:ss","ccc mm:ss","d., E mm:ss","G y. mm:ss","G y. MMM mm:ss","G y. MMM d. mm:ss","G y. MMM d., E mm:ss","L mm:ss","M. d. mm:ss","M. d., E mm:ss","LLL mm:ss","MMM d. mm:ss","MMM d., E mm:ss","MMMM d. mm:ss","MMMM W. 'hete' mm:ss","MMMM W. 'hete' mm:ss","y. mm:ss","y. M. mm:ss","y. MM. dd. mm:ss","y. MM. dd., E mm:ss","y. MMM mm:ss","y. MMM d. mm:ss","y. MMM d., E mm:ss","y. MMMM mm:ss","y. QQQ mm:ss","y. QQQQ mm:ss","Y w. 'hete' mm:ss","Y w. 'hete' mm:ss"]},"hourCycle":"h23","nu":["latn"],"ca":["gregory"],"hc":["h23","h12"]}},"availableLocales":["hu"]})
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
