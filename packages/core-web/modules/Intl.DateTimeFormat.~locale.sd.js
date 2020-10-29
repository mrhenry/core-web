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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("sd").length
)) {
// Intl.DateTimeFormat.~locale.sd
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"sd":{"am":"صبح، منجهند","pm":"شام، منجهند","weekday":{"narrow":["آچر","سو","اڱارو","اربع","خم","جمعو","ڇنڇر"],"short":["آچر","سومر","اڱارو","اربع","خميس","جمعو","ڇنڇر"],"long":["آچر","سومر","اڱارو","اربع","خميس","جمعو","ڇنڇر"]},"era":{"narrow":{"BC":"BC","AD":"CD"},"short":{"BC":"BC","AD":"CD"},"long":{"BC":"مسيح کان اڳ","AD":"عيسوي کان پهرين"}},"month":{"narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"short":["جنوري","فيبروري","مارچ","اپريل","مئي","جون","جولاءِ","آگسٽ","سيپٽمبر","آڪٽوبر","نومبر","ڊسمبر"],"long":["جنوري","فيبروري","مارچ","اپريل","مئي","جون","جولاءِ","آگسٽ","سيپٽمبر","آڪٽوبر","نومبر","ڊسمبر"]},"timeZoneName":{"Asia/Kabul":{"long":["افغانستان جو وقت","افغانستان جو وقت"]},"Africa/Maputo":{"long":["مرڪزي آفريقا جو وقت","مرڪزي آفريقا جو وقت"]},"Africa/Bujumbura":{"long":["مرڪزي آفريقا جو وقت","مرڪزي آفريقا جو وقت"]},"Africa/Gaborone":{"long":["مرڪزي آفريقا جو وقت","مرڪزي آفريقا جو وقت"]},"Africa/Lubumbashi":{"long":["مرڪزي آفريقا جو وقت","مرڪزي آفريقا جو وقت"]},"Africa/Blantyre":{"long":["مرڪزي آفريقا جو وقت","مرڪزي آفريقا جو وقت"]},"Africa/Kigali":{"long":["مرڪزي آفريقا جو وقت","مرڪزي آفريقا جو وقت"]},"Africa/Lusaka":{"long":["مرڪزي آفريقا جو وقت","مرڪزي آفريقا جو وقت"]},"Africa/Harare":{"long":["مرڪزي آفريقا جو وقت","مرڪزي آفريقا جو وقت"]},"Africa/Nairobi":{"long":["اوڀر آفريڪا جو وقت","اوڀر آفريڪا جو وقت"]},"Africa/Djibouti":{"long":["اوڀر آفريڪا جو وقت","اوڀر آفريڪا جو وقت"]},"Africa/Asmera":{"long":["اوڀر آفريڪا جو وقت","اوڀر آفريڪا جو وقت"]},"Africa/Addis_Ababa":{"long":["اوڀر آفريڪا جو وقت","اوڀر آفريڪا جو وقت"]},"Indian/Comoro":{"long":["اوڀر آفريڪا جو وقت","اوڀر آفريڪا جو وقت"]},"Indian/Antananarivo":{"long":["اوڀر آفريڪا جو وقت","اوڀر آفريڪا جو وقت"]},"Africa/Mogadishu":{"long":["اوڀر آفريڪا جو وقت","اوڀر آفريڪا جو وقت"]},"Africa/Dar_es_Salaam":{"long":["اوڀر آفريڪا جو وقت","اوڀر آفريڪا جو وقت"]},"Africa/Kampala":{"long":["اوڀر آفريڪا جو وقت","اوڀر آفريڪا جو وقت"]},"Indian/Mayotte":{"long":["اوڀر آفريڪا جو وقت","اوڀر آفريڪا جو وقت"]},"Africa/Johannesburg":{"long":["ڏکڻ آفريڪا جو معياري وقت","ڏکڻ آفريڪا جو معياري وقت"]},"Africa/Maseru":{"long":["ڏکڻ آفريڪا جو معياري وقت","ڏکڻ آفريڪا جو معياري وقت"]},"Africa/Mbabane":{"long":["ڏکڻ آفريڪا جو معياري وقت","ڏکڻ آفريڪا جو معياري وقت"]},"Africa/Lagos":{"long":["اولهه آفريقا جو معياري وقت","اولهه آفريقا جي اونهاري جو وقت"]},"Africa/Luanda":{"long":["اولهه آفريقا جو معياري وقت","اولهه آفريقا جي اونهاري جو وقت"]},"Africa/Porto-Novo":{"long":["اولهه آفريقا جو معياري وقت","اولهه آفريقا جي اونهاري جو وقت"]},"Africa/Kinshasa":{"long":["اولهه آفريقا جو معياري وقت","اولهه آفريقا جي اونهاري جو وقت"]},"Africa/Bangui":{"long":["اولهه آفريقا جو معياري وقت","اولهه آفريقا جي اونهاري جو وقت"]},"Africa/Brazzaville":{"long":["اولهه آفريقا جو معياري وقت","اولهه آفريقا جي اونهاري جو وقت"]},"Africa/Douala":{"long":["اولهه آفريقا جو معياري وقت","اولهه آفريقا جي اونهاري جو وقت"]},"Africa/Libreville":{"long":["اولهه آفريقا جو معياري وقت","اولهه آفريقا جي اونهاري جو وقت"]},"Africa/Malabo":{"long":["اولهه آفريقا جو معياري وقت","اولهه آفريقا جي اونهاري جو وقت"]},"Africa/Niamey":{"long":["اولهه آفريقا جو معياري وقت","اولهه آفريقا جي اونهاري جو وقت"]},"Africa/Ndjamena":{"long":["اولهه آفريقا جو معياري وقت","اولهه آفريقا جي اونهاري جو وقت"]},"Asia/Aqtobe":{"long":["اولهه قزاقستان جو وقت","اولهه قزاقستان جو وقت"]},"America/Juneau":{"long":["الاسڪا جو معياري وقت","الاسڪا جي ڏينهن جو وقت"]},"Asia/Almaty":{"long":["اوڀر قزاقستان جو وقت","اوڀر قزاقستان جو وقت"]},"America/Manaus":{"long":["ايميزون جو معياري وقت","ايميزون جي اونهاري جو وقت"]},"America/Chicago":{"long":["مرڪزي معياري وقت","مرڪزي ڏينهن جو وقت"]},"America/Belize":{"long":["مرڪزي معياري وقت","مرڪزي ڏينهن جو وقت"]},"America/Winnipeg":{"long":["مرڪزي معياري وقت","مرڪزي ڏينهن جو وقت"]},"America/Costa_Rica":{"long":["مرڪزي معياري وقت","مرڪزي ڏينهن جو وقت"]},"America/Guatemala":{"long":["مرڪزي معياري وقت","مرڪزي ڏينهن جو وقت"]},"America/Tegucigalpa":{"long":["مرڪزي معياري وقت","مرڪزي ڏينهن جو وقت"]},"America/Mexico_City":{"long":["مرڪزي معياري وقت","مرڪزي ڏينهن جو وقت"]},"America/El_Salvador":{"long":["مرڪزي معياري وقت","مرڪزي ڏينهن جو وقت"]},"America/New_York":{"long":["مشرقي معياري وقت","مشرقي ڏينهن جو وقت"]},"America/Nassau":{"long":["مشرقي معياري وقت","مشرقي ڏينهن جو وقت"]},"America/Toronto":{"long":["مشرقي معياري وقت","مشرقي ڏينهن جو وقت"]},"America/Port-au-Prince":{"long":["مشرقي معياري وقت","مشرقي ڏينهن جو وقت"]},"America/Jamaica":{"long":["مشرقي معياري وقت","مشرقي ڏينهن جو وقت"]},"America/Cayman":{"long":["مشرقي معياري وقت","مشرقي ڏينهن جو وقت"]},"America/Panama":{"long":["مشرقي معياري وقت","مشرقي ڏينهن جو وقت"]},"America/Denver":{"long":["پهاڙي معياري وقت","پهاڙي ڏينهن جو وقت"]},"America/Edmonton":{"long":["پهاڙي معياري وقت","پهاڙي ڏينهن جو وقت"]},"America/Hermosillo":{"long":["پهاڙي معياري وقت","پهاڙي ڏينهن جو وقت"]},"America/Los_Angeles":{"long":["پيسيفڪ معياري وقت","پيسيفڪ ڏينهن جو وقت"]},"America/Vancouver":{"long":["پيسيفڪ معياري وقت","پيسيفڪ ڏينهن جو وقت"]},"America/Tijuana":{"long":["پيسيفڪ معياري وقت","پيسيفڪ ڏينهن جو وقت"]},"Pacific/Apia":{"long":["اپيا جو معياري وقت","اپيا جي ڏينهن جو وقت"]},"Asia/Riyadh":{"long":["عربين جو معياري وقت","عربين جي ڏينهن جو وقت"]},"Asia/Bahrain":{"long":["عربين جو معياري وقت","عربين جي ڏينهن جو وقت"]},"Asia/Baghdad":{"long":["عربين جو معياري وقت","عربين جي ڏينهن جو وقت"]},"Asia/Kuwait":{"long":["عربين جو معياري وقت","عربين جي ڏينهن جو وقت"]},"Asia/Qatar":{"long":["عربين جو معياري وقت","عربين جي ڏينهن جو وقت"]},"Asia/Aden":{"long":["عربين جو معياري وقت","عربين جي ڏينهن جو وقت"]},"America/Buenos_Aires":{"long":["ارجنٽائن معياري وقت","ارجنٽائن جي اونهاري جو وقت"]},"America/Argentina/San_Luis":{"long":["مغربي ارجنٽائن جو معياري وقت","مغربي ارجنٽائن جي اونهاري جو وقت"]},"Asia/Ashgabat":{"long":["ترڪمانستان جو معياري وقت","ترڪمانستان جي اونهاري جو وقت"]},"America/Halifax":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Antigua":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Anguilla":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Aruba":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Barbados":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"Atlantic/Bermuda":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Kralendijk":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Curacao":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Dominica":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Grenada":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Thule":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Guadeloupe":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/St_Kitts":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/St_Lucia":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Marigot":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Martinique":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Montserrat":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Puerto_Rico":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Lower_Princes":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Port_of_Spain":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/St_Vincent":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/Tortola":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"America/St_Thomas":{"long":["ايٽلانٽڪ جو معياري وقت","ايٽلانٽڪ جي ڏينهن جو وقت"]},"Australia/Adelaide":{"long":["آسٽريليا جو مرڪزي معياري وقت","آسٽريليا جو مرڪزي ڏينهن جو وقت"]},"Australia/Eucla":{"long":["آسٽريليا جو مرڪزي مغربي معياري وقت","آسٽريليا جو مرڪزي مغربي ڏينهن جو وقت"]},"Australia/Sydney":{"long":["آسٽريليا جو مشرقي معياري وقت","آسٽريليا جو مشرقي ڏينهن جو وقت"]},"Australia/Perth":{"long":["آسٽريليا جو مغربي معياري وقت","آسٽريليا جو مغربي ڏينهن جو وقت"]},"Atlantic/Azores":{"long":["ازورز جو معياري وقت","ازورز جي اونهاري جو وقت"]},"Asia/Thimphu":{"long":["ڀوٽان جو وقت","ڀوٽان جو وقت"]},"America/La_Paz":{"long":["بولويائي وقت","بولويائي وقت"]},"Asia/Kuching":{"long":["ملائيشيا جو وقت","ملائيشيا جو وقت"]},"America/Sao_Paulo":{"long":["براسيليا جو معياري وقت","براسيليا جي اونهاري جو وقت"]},"Europe/London":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Asia/Brunei":{"long":["برونائي داروالسلام جو وقت","برونائي داروالسلام جو وقت"]},"Atlantic/Cape_Verde":{"long":["ڪيپ ورڊ جو معياري وقت","ڪيپ ورڊ جي اونهاري جو وقت"]},"Pacific/Chatham":{"long":["چئٿم جو معياري وقت","چئٿم جي ڏينهن جو وقت"]},"America/Santiago":{"long":["چلي جو معياري وقت","چلي جي اونهاري جو وقت"]},"Asia/Shanghai":{"long":["چائنا جو معياري وقت","چائنا جي ڏينهن جو وقت"]},"Asia/Choibalsan":{"long":["چوئي بيلسن جو معياري وقت","چوئي بيلسن جي اونهاري جو وقت"]},"Indian/Christmas":{"long":["ڪرسمس آئي لينڊ جو وقت","ڪرسمس آئي لينڊ جو وقت"]},"Indian/Cocos":{"long":["ڪوڪوس آئي لينڊ جو وقت","ڪوڪوس آئي لينڊ جو وقت"]},"America/Bogota":{"long":["ڪولمبيا جو معياري وقت","ڪولمبيا جي اونهاري جو وقت"]},"Pacific/Rarotonga":{"long":["ڪوڪ آئي لينڊ جو معياري وقت","ڪوڪ آئي لينڊ جي اڌ اونهاري جو وقت"]},"America/Havana":{"long":["ڪيوبا جو معياري وقت","ڪيوبا جي ڏينهن جو وقت"]},"Antarctica/Davis":{"long":["ڊيوس جو وقت","ڊيوس جو وقت"]},"Antarctica/DumontDUrville":{"long":["ڊومانٽ درويئل جو وقت","ڊومانٽ درويئل جو وقت"]},"Asia/Dushanbe":{"long":["تاجڪستان جو وقت","تاجڪستان جو وقت"]},"America/Paramaribo":{"long":["سوري نام جو وقت","سوري نام جو وقت"]},"Asia/Dili":{"long":["اوڀر تيمور جو وقت","اوڀر تيمور جو وقت"]},"Pacific/Easter":{"long":["ايسٽر آئي لينڊ جو معياري وقت","ايسٽر آئي لينڊ جي اونهاري جو وقت"]},"America/Guayaquil":{"long":["ايڪواڊور جو وقت","ايڪواڊور جو وقت"]},"Europe/Paris":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Andorra":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Tirane":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Vienna":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Sarajevo":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Brussels":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Zurich":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Prague":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Berlin":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Copenhagen":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Madrid":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Gibraltar":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Zagreb":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Budapest":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Rome":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Vaduz":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Luxembourg":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Monaco":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Podgorica":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Skopje":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Malta":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Amsterdam":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Oslo":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Warsaw":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Belgrade":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Stockholm":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Ljubljana":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Arctic/Longyearbyen":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Bratislava":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/San_Marino":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Africa/Tunis":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Vatican":{"long":["مرڪزي يورپي معياري وقت","مرڪزي يورپي اونهاري جو وقت"]},"Europe/Bucharest":{"long":["مشرقي يورپي معياري وقت","مشرقي يورپي اونهاري جو وقت"]},"Europe/Mariehamn":{"long":["مشرقي يورپي معياري وقت","مشرقي يورپي اونهاري جو وقت"]},"Europe/Sofia":{"long":["مشرقي يورپي معياري وقت","مشرقي يورپي اونهاري جو وقت"]},"Asia/Nicosia":{"long":["مشرقي يورپي معياري وقت","مشرقي يورپي اونهاري جو وقت"]},"Africa/Cairo":{"long":["مشرقي يورپي معياري وقت","مشرقي يورپي اونهاري جو وقت"]},"Europe/Helsinki":{"long":["مشرقي يورپي معياري وقت","مشرقي يورپي اونهاري جو وقت"]},"Europe/Athens":{"long":["مشرقي يورپي معياري وقت","مشرقي يورپي اونهاري جو وقت"]},"Asia/Amman":{"long":["مشرقي يورپي معياري وقت","مشرقي يورپي اونهاري جو وقت"]},"Asia/Beirut":{"long":["مشرقي يورپي معياري وقت","مشرقي يورپي اونهاري جو وقت"]},"Asia/Damascus":{"long":["مشرقي يورپي معياري وقت","مشرقي يورپي اونهاري جو وقت"]},"Europe/Minsk":{"long":["وڌيڪ مشرقي يورپي وقت","وڌيڪ مشرقي يورپي وقت"]},"Europe/Kaliningrad":{"long":["وڌيڪ مشرقي يورپي وقت","وڌيڪ مشرقي يورپي وقت"]},"Atlantic/Canary":{"long":["مغربي يورپي معياري وقت","مغربي يورپي ڏينهن جو وقت"]},"Atlantic/Faeroe":{"long":["مغربي يورپي معياري وقت","مغربي يورپي ڏينهن جو وقت"]},"Atlantic/Stanley":{"long":["فاڪ لينڊ آئي لينڊ جو معياري وقت","فاڪ لينڊ آئي لينڊ جي اونهاري جو وقت"]},"Pacific/Fiji":{"long":["فجي جو معياري وقت","فجي جي اونهاري جو وقت"]},"America/Cayenne":{"long":["فرانسيسي گيانا جو وقت","فرانسيسي گيانا جو وقت"]},"Indian/Kerguelen":{"long":["فرانسيسي ڏاکڻي ۽ انٽارڪٽڪ جو وقت","فرانسيسي ڏاکڻي ۽ انٽارڪٽڪ جو وقت"]},"Asia/Bishkek":{"long":["ڪرگزستان جو وقت","ڪرگزستان جو وقت"]},"Pacific/Galapagos":{"long":["گالاپاگوز جو وقت","گالاپاگوز جو وقت"]},"Pacific/Gambier":{"long":["گيمبيئر جو وقت","گيمبيئر جو وقت"]},"Pacific/Tarawa":{"long":["گلبرٽ آئي لينڊ جو وقت","گلبرٽ آئي لينڊ جو وقت"]},"Atlantic/Reykjavik":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Africa/Ouagadougou":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Africa/Abidjan":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Africa/Accra":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Africa/Banjul":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Africa/Conakry":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Africa/Bamako":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Africa/Nouakchott":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Atlantic/St_Helena":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Africa/Freetown":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Africa/Dakar":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"Africa/Lome":{"long":["گرين وچ مين ٽائيم","گرين وچ مين ٽائيم"]},"America/Scoresbysund":{"long":["مشرقي گرين لينڊ جو معياري وقت","مشرقي گرين لينڊ جي اونهاري جو وقت"]},"America/Godthab":{"long":["مغربي گرين لينڊ جو معياري وقت","مغربي گرين لينڊ جي اونهاري جو وقت"]},"Asia/Dubai":{"long":["خلج معياري وقت","خلج معياري وقت"]},"Asia/Muscat":{"long":["خلج معياري وقت","خلج معياري وقت"]},"America/Guyana":{"long":["گيانائي وقت","گيانائي وقت"]},"Pacific/Honolulu":{"long":["هوائي اليوٽين جو معياري وقت","هوائي اليوٽين جي ڏينهن جو وقت"]},"Asia/Hong_Kong":{"long":["هانگ ڪانگ جو معياري وقت","هانگ ڪانگ جي اونهاري جو وقت"]},"Asia/Hovd":{"long":["هووڊ جو معياري وقت","هووڊ جي اونهاري جو وقت"]},"Asia/Calcutta":{"long":["ڀارت جو معياري وقت","ڀارت جو معياري وقت"]},"Indian/Chagos":{"long":["هند سمنڊ جو وقت","هند سمنڊ جو وقت"]},"Asia/Bangkok":{"long":["انڊو چائنا جو وقت","انڊو چائنا جو وقت"]},"Asia/Phnom_Penh":{"long":["انڊو چائنا جو وقت","انڊو چائنا جو وقت"]},"Asia/Vientiane":{"long":["انڊو چائنا جو وقت","انڊو چائنا جو وقت"]},"Asia/Makassar":{"long":["مرڪزي انڊونيشيا جو وقت","مرڪزي انڊونيشيا جو وقت"]},"Asia/Jayapura":{"long":["اوڀر انڊونيشيا جو وقت","اوڀر انڊونيشيا جو وقت"]},"Asia/Jakarta":{"long":["اولهه انڊونيشيا جو وقت","اولهه انڊونيشيا جو وقت"]},"Asia/Tehran":{"long":["ايران جو معياري وقت","ايران جي ڏينهن جو وقت"]},"Asia/Irkutsk":{"long":["ارڪتسڪ جو معياري وقت","ارڪتسڪ جي ڏينهن جو وقت"]},"Asia/Jerusalem":{"long":["اسرائيل جو معياري وقت","اسرائيل جي ڏينهن جو وقت"]},"Asia/Tokyo":{"long":["جاپان جو معياري وقت","جاپان جي ڏينهن جو وقت"]},"Asia/Karachi":{"long":["پاڪستان جو معياري وقت","پاڪستان جي اونهاري جو وقت"]},"Asia/Seoul":{"long":["ڪوريا جو معياري وقت","ڪوريا جي ڏينهن جو وقت"]},"Pacific/Kosrae":{"long":["ڪوسرائي جو وقت","ڪوسرائي جو وقت"]},"Asia/Krasnoyarsk":{"long":["ڪریسنویارسڪ جو معياري وقت","ڪریسنویارسڪ جي ڏينهن جو وقت"]},"Pacific/Kiritimati":{"long":["لائن آئي لينڊ جو وقت","لائن آئي لينڊ جو وقت"]},"Australia/Lord_Howe":{"long":["لورڊ هووي جو معياري وقت","لورڊ هووي جي ڏينهن جو وقت"]},"Antarctica/Macquarie":{"long":["مڪوائري آئي لينڊ جو وقت","مڪوائري آئي لينڊ جو وقت"]},"Asia/Magadan":{"long":["مگادان جو معياري وقت","مگادان جي ڏينهن جي وقت"]},"Indian/Maldives":{"long":["مالديپ جو وقت","مالديپ جو وقت"]},"Pacific/Marquesas":{"long":["مرڪيوسس جو وقت","مرڪيوسس جو وقت"]},"Pacific/Majuro":{"long":["مارشل آئي لينڊ جو وقت","مارشل آئي لينڊ جو وقت"]},"Indian/Mauritius":{"long":["موريشيس جو معياري وقت","موريشيس جي اونهاري جو وقت"]},"Antarctica/Mawson":{"long":["مائوسن جو وقت","مائوسن جو وقت"]},"America/Santa_Isabel":{"long":["شمالي مغربي ميڪسيڪو جو معياري وقت","شمالي مغربي ميڪسيڪو جي ڏينهن جو وقت"]},"America/Mazatlan":{"long":["ميڪسيڪن پيسيفڪ جو معياري وقت","ميڪسيڪن پيسيفڪ جي ڏينهن جو وقت"]},"Asia/Ulaanbaatar":{"long":["اولان باتر جو معياري وقت","اولان باتر جي اونهاري جو وقت"]},"Europe/Moscow":{"long":["ماسڪو جو معياري وقت","ماسڪو جي ڏينهن جي وقت"]},"Asia/Rangoon":{"long":["ميانمار جو وقت","ميانمار جو وقت"]},"Pacific/Nauru":{"long":["نائورو جو وقت","نائورو جو وقت"]},"Asia/Katmandu":{"long":["نيپال جو وقت","نيپال جو وقت"]},"Pacific/Noumea":{"long":["نيو ڪيليڊونيا جو معياري وقت","نيو ڪيليڊونيا جي اونهاري جو وقت"]},"Pacific/Auckland":{"long":["نيوزيلينڊ جو معياري وقت","نيوزيلينڊ جي ڏينهن جو وقت"]},"Antarctica/McMurdo":{"long":["نيوزيلينڊ جو معياري وقت","نيوزيلينڊ جي ڏينهن جو وقت"]},"America/St_Johns":{"long":["نيو فائونڊ لينڊ جو معياري وقت","نيو فائونڊ لينڊ جي ڏينهن جو وقت"]},"Pacific/Niue":{"long":["نيووي جو وقت","نيووي جو وقت"]},"Pacific/Norfolk":{"long":["نار فوڪ آئي لينڊ جو معياري وقت","نار فوڪ آئي لينڊ جي ڏينهن جو وقت"]},"America/Noronha":{"long":["فرنانڊو دي نورونها جو معياري وقت","فرنانڊو دي نورونها جي اونهاري وقت"]},"Asia/Novosibirsk":{"long":["نوواسبئيرسڪ جو معياري وقت","نوواسبئيرسڪ جي ڏينهن جو وقت"]},"Asia/Omsk":{"long":["اومسڪ جو معياري وقت","اومسڪ جي ڏينهن جو وقت"]},"Pacific/Palau":{"long":["پلائو جو وقت","پلائو جو وقت"]},"Pacific/Port_Moresby":{"long":["پاپوا نيو گني جو وقت","پاپوا نيو گني جو وقت"]},"America/Asuncion":{"long":["پيراگوئي جو معياري وقت","پيراگوئي جي اونهاري جو وقت"]},"America/Lima":{"long":["پيرو جو معياري وقت","پيرو جي اونهاري جو وقت"]},"Asia/Manila":{"long":["فلپائن جو معياري وقت","فلپائن جي اونهاري جو وقت"]},"Pacific/Enderbury":{"long":["فونيڪس آئي لينڊ جو وقت","فونيڪس آئي لينڊ جو وقت"]},"America/Miquelon":{"long":["سینٽ پیئر اَئن میڪوئلون جو مانائتو وقت","سینٽ پیئر و میڪوئیلون جي ڏينهن جو وقت"]},"Pacific/Pitcairn":{"long":["پٽڪيرن جو وقت","پٽڪيرن جو وقت"]},"Pacific/Ponape":{"long":["پوناپي جو وقت","پوناپي جو وقت"]},"Asia/Pyongyang":{"long":["شيانگ يانگ جو وقت","شيانگ يانگ جو وقت"]},"Indian/Reunion":{"long":["ري يونين جو وقت","ري يونين جو وقت"]},"Antarctica/Rothera":{"long":["روٿيرا جو وقت","روٿيرا جو وقت"]},"Asia/Sakhalin":{"long":["سخالين جو معياري وقت","سخالين جي ڏينهن جو وقت"]},"Pacific/Pago_Pago":{"long":["ساموا جو معياري وقت","ساموا جي ڏينهن جو وقت"]},"Indian/Mahe":{"long":["شي شلز جو وقت","شي شلز جو وقت"]},"Asia/Singapore":{"long":["سنگاپور جو معياري وقت","سنگاپور جو معياري وقت"]},"Pacific/Guadalcanal":{"long":["سولومن آئي لينڊ جو وقت","سولومن آئي لينڊ جو وقت"]},"Atlantic/South_Georgia":{"long":["ڏکڻ جارجيا جو وقت","ڏکڻ جارجيا جو وقت"]},"Asia/Yekaterinburg":{"long":["يڪاٽيرنبرگ جو معياري وقت","يڪاٽيرنبرگ جي ڏينهن جو وقت"]},"Antarctica/Syowa":{"long":["سائيوا جو وقت","سائيوا جو وقت"]},"Pacific/Tahiti":{"long":["تاهيٽي جو وقت","تاهيٽي جو وقت"]},"Asia/Taipei":{"long":["تائپي جو معياري وقت","تائپي جي ڏينهن جو وقت"]},"Asia/Tashkent":{"long":["ازبڪستان جو معياري وقت","ازبڪستان جي اونهاري جو وقت"]},"Pacific/Fakaofo":{"long":["ٽوڪيلائو جو وقت","ٽوڪيلائو جو وقت"]},"Pacific/Tongatapu":{"long":["ٽونگا جو معياري وقت","ٽونگا جي اونهاري جو وقت"]},"Pacific/Truk":{"long":["چيوڪ جو وقت","چيوڪ جو وقت"]},"Pacific/Funafuti":{"long":["تووالو جو وقت","تووالو جو وقت"]},"America/Montevideo":{"long":["يوروگائي جو معياري وقت","يوروگائي جي اونهاري جو وقت"]},"Pacific/Efate":{"long":["وانواتو جو معياري وقت","وانواتو جي ڏينهن جو وقت"]},"America/Caracas":{"long":["وينزويلا جو وقت","وينزويلا جو وقت"]},"Asia/Vladivostok":{"long":["ولادووستوڪ جو معياري وقت","اولادووستوڪ جي ڏينهن جو وقت"]},"Europe/Volgograd":{"long":["وولگوگراد جو معياري وقت","وولگوگراد جي ڏينهن جو وقت"]},"Antarctica/Vostok":{"long":["ووسٽوڪ جو وقت","ووسٽوڪ جو وقت"]},"Pacific/Wake":{"long":["ويڪ آئي لينڊ جو وقت","ويڪ آئي لينڊ جو وقت"]},"Pacific/Wallis":{"long":["ويلس ۽ فتونا جو وقت","ويلس ۽ فتونا جو وقت"]},"Asia/Yakutsk":{"long":["ياڪتسڪ جو معياري وقت","ياڪتسڪ جي ڏينهن جو وقت"]},"UTC":{"long":["گڏيل دنياوي وقت","گڏيل دنياوي وقت"],"short":["م ع و","م ع و"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"y MMMM d, EEEE","long":"y MMMM d","medium":"y MMM d","short":"y-MM-dd"},"timeFormat":{"full":"h:mm:ss a zzzz","long":"h:mm:ss a z","medium":"h:mm:ss a","short":"h:mm a"},"dateTimeFormat":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"d, E","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"G y","GyMMM":"G y MMM","GyMMMd":"G y MMM d","GyMMMEd":"G y MMM d, E","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"MM-dd","MEd":"MM-dd, E","MMM":"LLL","MMMd":"MMM d","MMMEd":"MMM d, E","MMMMd":"MMMM d","ms":"mm:ss","y":"y","yM":"y-MM","yMd":"y-MM-dd","yMEd":"y-MM-dd, E","yMMM":"y MMM","yMMMd":"y MMM d","yMMMEd":"y MMM d, E","yMMMM":"y MMMM","y MMMM d, EEEE":"y MMMM d, EEEE","y MMMM d":"y MMMM d","y MMM d":"y MMM d","y-MM-dd":"y-MM-dd","h:mm:ss a zzzz":"h:mm:ss a zzzz","h:mm:ss a z":"h:mm:ss a z","h:mm:ss a":"h:mm:ss a","h:mm a":"h:mm a","y MMMM d, EEEE h:mm:ss a zzzz":"y MMMM d, EEEE h:mm:ss a zzzz","y MMMM d h:mm:ss a zzzz":"y MMMM d h:mm:ss a zzzz","y MMM d h:mm:ss a zzzz":"y MMM d h:mm:ss a zzzz","y-MM-dd h:mm:ss a zzzz":"y-MM-dd h:mm:ss a zzzz","d h:mm:ss a zzzz":"d h:mm:ss a zzzz","E h:mm:ss a zzzz":"ccc h:mm:ss a zzzz","Ed h:mm:ss a zzzz":"d, E h:mm:ss a zzzz","Gy h:mm:ss a zzzz":"G y h:mm:ss a zzzz","GyMMM h:mm:ss a zzzz":"G y MMM h:mm:ss a zzzz","GyMMMd h:mm:ss a zzzz":"G y MMM d h:mm:ss a zzzz","GyMMMEd h:mm:ss a zzzz":"G y MMM d, E h:mm:ss a zzzz","M h:mm:ss a zzzz":"L h:mm:ss a zzzz","Md h:mm:ss a zzzz":"MM-dd h:mm:ss a zzzz","MEd h:mm:ss a zzzz":"MM-dd, E h:mm:ss a zzzz","MMM h:mm:ss a zzzz":"LLL h:mm:ss a zzzz","MMMd h:mm:ss a zzzz":"MMM d h:mm:ss a zzzz","MMMEd h:mm:ss a zzzz":"MMM d, E h:mm:ss a zzzz","MMMMd h:mm:ss a zzzz":"MMMM d h:mm:ss a zzzz","y h:mm:ss a zzzz":"y h:mm:ss a zzzz","yM h:mm:ss a zzzz":"y-MM h:mm:ss a zzzz","yMd h:mm:ss a zzzz":"y-MM-dd h:mm:ss a zzzz","yMEd h:mm:ss a zzzz":"y-MM-dd, E h:mm:ss a zzzz","yMMM h:mm:ss a zzzz":"y MMM h:mm:ss a zzzz","yMMMd h:mm:ss a zzzz":"y MMM d h:mm:ss a zzzz","yMMMEd h:mm:ss a zzzz":"y MMM d, E h:mm:ss a zzzz","yMMMM h:mm:ss a zzzz":"y MMMM h:mm:ss a zzzz","y MMMM d, EEEE h:mm:ss a z":"y MMMM d, EEEE h:mm:ss a z","y MMMM d h:mm:ss a z":"y MMMM d h:mm:ss a z","y MMM d h:mm:ss a z":"y MMM d h:mm:ss a z","y-MM-dd h:mm:ss a z":"y-MM-dd h:mm:ss a z","d h:mm:ss a z":"d h:mm:ss a z","E h:mm:ss a z":"ccc h:mm:ss a z","Ed h:mm:ss a z":"d, E h:mm:ss a z","Gy h:mm:ss a z":"G y h:mm:ss a z","GyMMM h:mm:ss a z":"G y MMM h:mm:ss a z","GyMMMd h:mm:ss a z":"G y MMM d h:mm:ss a z","GyMMMEd h:mm:ss a z":"G y MMM d, E h:mm:ss a z","M h:mm:ss a z":"L h:mm:ss a z","Md h:mm:ss a z":"MM-dd h:mm:ss a z","MEd h:mm:ss a z":"MM-dd, E h:mm:ss a z","MMM h:mm:ss a z":"LLL h:mm:ss a z","MMMd h:mm:ss a z":"MMM d h:mm:ss a z","MMMEd h:mm:ss a z":"MMM d, E h:mm:ss a z","MMMMd h:mm:ss a z":"MMMM d h:mm:ss a z","y h:mm:ss a z":"y h:mm:ss a z","yM h:mm:ss a z":"y-MM h:mm:ss a z","yMd h:mm:ss a z":"y-MM-dd h:mm:ss a z","yMEd h:mm:ss a z":"y-MM-dd, E h:mm:ss a z","yMMM h:mm:ss a z":"y MMM h:mm:ss a z","yMMMd h:mm:ss a z":"y MMM d h:mm:ss a z","yMMMEd h:mm:ss a z":"y MMM d, E h:mm:ss a z","yMMMM h:mm:ss a z":"y MMMM h:mm:ss a z","y MMMM d, EEEE h:mm:ss a":"y MMMM d, EEEE h:mm:ss a","y MMMM d h:mm:ss a":"y MMMM d h:mm:ss a","y MMM d h:mm:ss a":"y MMM d h:mm:ss a","y-MM-dd h:mm:ss a":"y-MM-dd h:mm:ss a","d h:mm:ss a":"d h:mm:ss a","E h:mm:ss a":"ccc h:mm:ss a","Ed h:mm:ss a":"d, E h:mm:ss a","Gy h:mm:ss a":"G y h:mm:ss a","GyMMM h:mm:ss a":"G y MMM h:mm:ss a","GyMMMd h:mm:ss a":"G y MMM d h:mm:ss a","GyMMMEd h:mm:ss a":"G y MMM d, E h:mm:ss a","M h:mm:ss a":"L h:mm:ss a","Md h:mm:ss a":"MM-dd h:mm:ss a","MEd h:mm:ss a":"MM-dd, E h:mm:ss a","MMM h:mm:ss a":"LLL h:mm:ss a","MMMd h:mm:ss a":"MMM d h:mm:ss a","MMMEd h:mm:ss a":"MMM d, E h:mm:ss a","MMMMd h:mm:ss a":"MMMM d h:mm:ss a","y h:mm:ss a":"y h:mm:ss a","yM h:mm:ss a":"y-MM h:mm:ss a","yMd h:mm:ss a":"y-MM-dd h:mm:ss a","yMEd h:mm:ss a":"y-MM-dd, E h:mm:ss a","yMMM h:mm:ss a":"y MMM h:mm:ss a","yMMMd h:mm:ss a":"y MMM d h:mm:ss a","yMMMEd h:mm:ss a":"y MMM d, E h:mm:ss a","yMMMM h:mm:ss a":"y MMMM h:mm:ss a","y MMMM d, EEEE h:mm a":"y MMMM d, EEEE h:mm a","y MMMM d h:mm a":"y MMMM d h:mm a","y MMM d h:mm a":"y MMM d h:mm a","y-MM-dd h:mm a":"y-MM-dd h:mm a","d h:mm a":"d h:mm a","E h:mm a":"ccc h:mm a","Ed h:mm a":"d, E h:mm a","Gy h:mm a":"G y h:mm a","GyMMM h:mm a":"G y MMM h:mm a","GyMMMd h:mm a":"G y MMM d h:mm a","GyMMMEd h:mm a":"G y MMM d, E h:mm a","M h:mm a":"L h:mm a","Md h:mm a":"MM-dd h:mm a","MEd h:mm a":"MM-dd, E h:mm a","MMM h:mm a":"LLL h:mm a","MMMd h:mm a":"MMM d h:mm a","MMMEd h:mm a":"MMM d, E h:mm a","MMMMd h:mm a":"MMMM d h:mm a","y h:mm a":"y h:mm a","yM h:mm a":"y-MM h:mm a","yMd h:mm a":"y-MM-dd h:mm a","yMEd h:mm a":"y-MM-dd, E h:mm a","yMMM h:mm a":"y MMM h:mm a","yMMMd h:mm a":"y MMM d h:mm a","yMMMEd h:mm a":"y MMM d, E h:mm a","yMMMM h:mm a":"y MMMM h:mm a","y MMMM d, EEEE Bh":"y MMMM d, EEEE h B","y MMMM d Bh":"y MMMM d h B","y MMM d Bh":"y MMM d h B","y-MM-dd Bh":"y-MM-dd h B","d Bh":"d h B","E Bh":"ccc h B","Ed Bh":"d, E h B","Gy Bh":"G y h B","GyMMM Bh":"G y MMM h B","GyMMMd Bh":"G y MMM d h B","GyMMMEd Bh":"G y MMM d, E h B","M Bh":"L h B","Md Bh":"MM-dd h B","MEd Bh":"MM-dd, E h B","MMM Bh":"LLL h B","MMMd Bh":"MMM d h B","MMMEd Bh":"MMM d, E h B","MMMMd Bh":"MMMM d h B","y Bh":"y h B","yM Bh":"y-MM h B","yMd Bh":"y-MM-dd h B","yMEd Bh":"y-MM-dd, E h B","yMMM Bh":"y MMM h B","yMMMd Bh":"y MMM d h B","yMMMEd Bh":"y MMM d, E h B","yMMMM Bh":"y MMMM h B","y MMMM d, EEEE Bhm":"y MMMM d, EEEE h:mm B","y MMMM d Bhm":"y MMMM d h:mm B","y MMM d Bhm":"y MMM d h:mm B","y-MM-dd Bhm":"y-MM-dd h:mm B","d Bhm":"d h:mm B","E Bhm":"ccc h:mm B","Ed Bhm":"d, E h:mm B","Gy Bhm":"G y h:mm B","GyMMM Bhm":"G y MMM h:mm B","GyMMMd Bhm":"G y MMM d h:mm B","GyMMMEd Bhm":"G y MMM d, E h:mm B","M Bhm":"L h:mm B","Md Bhm":"MM-dd h:mm B","MEd Bhm":"MM-dd, E h:mm B","MMM Bhm":"LLL h:mm B","MMMd Bhm":"MMM d h:mm B","MMMEd Bhm":"MMM d, E h:mm B","MMMMd Bhm":"MMMM d h:mm B","y Bhm":"y h:mm B","yM Bhm":"y-MM h:mm B","yMd Bhm":"y-MM-dd h:mm B","yMEd Bhm":"y-MM-dd, E h:mm B","yMMM Bhm":"y MMM h:mm B","yMMMd Bhm":"y MMM d h:mm B","yMMMEd Bhm":"y MMM d, E h:mm B","yMMMM Bhm":"y MMMM h:mm B","y MMMM d, EEEE Bhms":"y MMMM d, EEEE h:mm:ss B","y MMMM d Bhms":"y MMMM d h:mm:ss B","y MMM d Bhms":"y MMM d h:mm:ss B","y-MM-dd Bhms":"y-MM-dd h:mm:ss B","d Bhms":"d h:mm:ss B","E Bhms":"ccc h:mm:ss B","Ed Bhms":"d, E h:mm:ss B","Gy Bhms":"G y h:mm:ss B","GyMMM Bhms":"G y MMM h:mm:ss B","GyMMMd Bhms":"G y MMM d h:mm:ss B","GyMMMEd Bhms":"G y MMM d, E h:mm:ss B","M Bhms":"L h:mm:ss B","Md Bhms":"MM-dd h:mm:ss B","MEd Bhms":"MM-dd, E h:mm:ss B","MMM Bhms":"LLL h:mm:ss B","MMMd Bhms":"MMM d h:mm:ss B","MMMEd Bhms":"MMM d, E h:mm:ss B","MMMMd Bhms":"MMMM d h:mm:ss B","y Bhms":"y h:mm:ss B","yM Bhms":"y-MM h:mm:ss B","yMd Bhms":"y-MM-dd h:mm:ss B","yMEd Bhms":"y-MM-dd, E h:mm:ss B","yMMM Bhms":"y MMM h:mm:ss B","yMMMd Bhms":"y MMM d h:mm:ss B","yMMMEd Bhms":"y MMM d, E h:mm:ss B","yMMMM Bhms":"y MMMM h:mm:ss B","y MMMM d, EEEE h":"y MMMM d, EEEE h a","y MMMM d h":"y MMMM d h a","y MMM d h":"y MMM d h a","y-MM-dd h":"y-MM-dd h a","d h":"d h a","E h":"ccc h a","Ed h":"d, E h a","Gy h":"G y h a","GyMMM h":"G y MMM h a","GyMMMd h":"G y MMM d h a","GyMMMEd h":"G y MMM d, E h a","M h":"L h a","Md h":"MM-dd h a","MEd h":"MM-dd, E h a","MMM h":"LLL h a","MMMd h":"MMM d h a","MMMEd h":"MMM d, E h a","MMMMd h":"MMMM d h a","y h":"y h a","yM h":"y-MM h a","yMd h":"y-MM-dd h a","yMEd h":"y-MM-dd, E h a","yMMM h":"y MMM h a","yMMMd h":"y MMM d h a","yMMMEd h":"y MMM d, E h a","yMMMM h":"y MMMM h a","y MMMM d, EEEE H":"y MMMM d, EEEE HH","y MMMM d H":"y MMMM d HH","y MMM d H":"y MMM d HH","y-MM-dd H":"y-MM-dd HH","d H":"d HH","E H":"ccc HH","Ed H":"d, E HH","Gy H":"G y HH","GyMMM H":"G y MMM HH","GyMMMd H":"G y MMM d HH","GyMMMEd H":"G y MMM d, E HH","M H":"L HH","Md H":"MM-dd HH","MEd H":"MM-dd, E HH","MMM H":"LLL HH","MMMd H":"MMM d HH","MMMEd H":"MMM d, E HH","MMMMd H":"MMMM d HH","y H":"y HH","yM H":"y-MM HH","yMd H":"y-MM-dd HH","yMEd H":"y-MM-dd, E HH","yMMM H":"y MMM HH","yMMMd H":"y MMM d HH","yMMMEd H":"y MMM d, E HH","yMMMM H":"y MMMM HH","y MMMM d, EEEE hm":"y MMMM d, EEEE h:mm a","y MMMM d hm":"y MMMM d h:mm a","y MMM d hm":"y MMM d h:mm a","y-MM-dd hm":"y-MM-dd h:mm a","d hm":"d h:mm a","E hm":"ccc h:mm a","Ed hm":"d, E h:mm a","Gy hm":"G y h:mm a","GyMMM hm":"G y MMM h:mm a","GyMMMd hm":"G y MMM d h:mm a","GyMMMEd hm":"G y MMM d, E h:mm a","M hm":"L h:mm a","Md hm":"MM-dd h:mm a","MEd hm":"MM-dd, E h:mm a","MMM hm":"LLL h:mm a","MMMd hm":"MMM d h:mm a","MMMEd hm":"MMM d, E h:mm a","MMMMd hm":"MMMM d h:mm a","y hm":"y h:mm a","yM hm":"y-MM h:mm a","yMd hm":"y-MM-dd h:mm a","yMEd hm":"y-MM-dd, E h:mm a","yMMM hm":"y MMM h:mm a","yMMMd hm":"y MMM d h:mm a","yMMMEd hm":"y MMM d, E h:mm a","yMMMM hm":"y MMMM h:mm a","y MMMM d, EEEE Hm":"y MMMM d, EEEE HH:mm","y MMMM d Hm":"y MMMM d HH:mm","y MMM d Hm":"y MMM d HH:mm","y-MM-dd Hm":"y-MM-dd HH:mm","d Hm":"d HH:mm","E Hm":"ccc HH:mm","Ed Hm":"d, E HH:mm","Gy Hm":"G y HH:mm","GyMMM Hm":"G y MMM HH:mm","GyMMMd Hm":"G y MMM d HH:mm","GyMMMEd Hm":"G y MMM d, E HH:mm","M Hm":"L HH:mm","Md Hm":"MM-dd HH:mm","MEd Hm":"MM-dd, E HH:mm","MMM Hm":"LLL HH:mm","MMMd Hm":"MMM d HH:mm","MMMEd Hm":"MMM d, E HH:mm","MMMMd Hm":"MMMM d HH:mm","y Hm":"y HH:mm","yM Hm":"y-MM HH:mm","yMd Hm":"y-MM-dd HH:mm","yMEd Hm":"y-MM-dd, E HH:mm","yMMM Hm":"y MMM HH:mm","yMMMd Hm":"y MMM d HH:mm","yMMMEd Hm":"y MMM d, E HH:mm","yMMMM Hm":"y MMMM HH:mm","y MMMM d, EEEE hms":"y MMMM d, EEEE h:mm:ss a","y MMMM d hms":"y MMMM d h:mm:ss a","y MMM d hms":"y MMM d h:mm:ss a","y-MM-dd hms":"y-MM-dd h:mm:ss a","d hms":"d h:mm:ss a","E hms":"ccc h:mm:ss a","Ed hms":"d, E h:mm:ss a","Gy hms":"G y h:mm:ss a","GyMMM hms":"G y MMM h:mm:ss a","GyMMMd hms":"G y MMM d h:mm:ss a","GyMMMEd hms":"G y MMM d, E h:mm:ss a","M hms":"L h:mm:ss a","Md hms":"MM-dd h:mm:ss a","MEd hms":"MM-dd, E h:mm:ss a","MMM hms":"LLL h:mm:ss a","MMMd hms":"MMM d h:mm:ss a","MMMEd hms":"MMM d, E h:mm:ss a","MMMMd hms":"MMMM d h:mm:ss a","y hms":"y h:mm:ss a","yM hms":"y-MM h:mm:ss a","yMd hms":"y-MM-dd h:mm:ss a","yMEd hms":"y-MM-dd, E h:mm:ss a","yMMM hms":"y MMM h:mm:ss a","yMMMd hms":"y MMM d h:mm:ss a","yMMMEd hms":"y MMM d, E h:mm:ss a","yMMMM hms":"y MMMM h:mm:ss a","y MMMM d, EEEE Hms":"y MMMM d, EEEE HH:mm:ss","y MMMM d Hms":"y MMMM d HH:mm:ss","y MMM d Hms":"y MMM d HH:mm:ss","y-MM-dd Hms":"y-MM-dd HH:mm:ss","d Hms":"d HH:mm:ss","E Hms":"ccc HH:mm:ss","Ed Hms":"d, E HH:mm:ss","Gy Hms":"G y HH:mm:ss","GyMMM Hms":"G y MMM HH:mm:ss","GyMMMd Hms":"G y MMM d HH:mm:ss","GyMMMEd Hms":"G y MMM d, E HH:mm:ss","M Hms":"L HH:mm:ss","Md Hms":"MM-dd HH:mm:ss","MEd Hms":"MM-dd, E HH:mm:ss","MMM Hms":"LLL HH:mm:ss","MMMd Hms":"MMM d HH:mm:ss","MMMEd Hms":"MMM d, E HH:mm:ss","MMMMd Hms":"MMMM d HH:mm:ss","y Hms":"y HH:mm:ss","yM Hms":"y-MM HH:mm:ss","yMd Hms":"y-MM-dd HH:mm:ss","yMEd Hms":"y-MM-dd, E HH:mm:ss","yMMM Hms":"y MMM HH:mm:ss","yMMMd Hms":"y MMM d HH:mm:ss","yMMMEd Hms":"y MMM d, E HH:mm:ss","yMMMM Hms":"y MMMM HH:mm:ss","y MMMM d, EEEE hmsv":"y MMMM d, EEEE h:mm:ss a v","y MMMM d hmsv":"y MMMM d h:mm:ss a v","y MMM d hmsv":"y MMM d h:mm:ss a v","y-MM-dd hmsv":"y-MM-dd h:mm:ss a v","d hmsv":"d h:mm:ss a v","E hmsv":"ccc h:mm:ss a v","Ed hmsv":"d, E h:mm:ss a v","Gy hmsv":"G y h:mm:ss a v","GyMMM hmsv":"G y MMM h:mm:ss a v","GyMMMd hmsv":"G y MMM d h:mm:ss a v","GyMMMEd hmsv":"G y MMM d, E h:mm:ss a v","M hmsv":"L h:mm:ss a v","Md hmsv":"MM-dd h:mm:ss a v","MEd hmsv":"MM-dd, E h:mm:ss a v","MMM hmsv":"LLL h:mm:ss a v","MMMd hmsv":"MMM d h:mm:ss a v","MMMEd hmsv":"MMM d, E h:mm:ss a v","MMMMd hmsv":"MMMM d h:mm:ss a v","y hmsv":"y h:mm:ss a v","yM hmsv":"y-MM h:mm:ss a v","yMd hmsv":"y-MM-dd h:mm:ss a v","yMEd hmsv":"y-MM-dd, E h:mm:ss a v","yMMM hmsv":"y MMM h:mm:ss a v","yMMMd hmsv":"y MMM d h:mm:ss a v","yMMMEd hmsv":"y MMM d, E h:mm:ss a v","yMMMM hmsv":"y MMMM h:mm:ss a v","y MMMM d, EEEE Hmsv":"y MMMM d, EEEE HH:mm:ss v","y MMMM d Hmsv":"y MMMM d HH:mm:ss v","y MMM d Hmsv":"y MMM d HH:mm:ss v","y-MM-dd Hmsv":"y-MM-dd HH:mm:ss v","d Hmsv":"d HH:mm:ss v","E Hmsv":"ccc HH:mm:ss v","Ed Hmsv":"d, E HH:mm:ss v","Gy Hmsv":"G y HH:mm:ss v","GyMMM Hmsv":"G y MMM HH:mm:ss v","GyMMMd Hmsv":"G y MMM d HH:mm:ss v","GyMMMEd Hmsv":"G y MMM d, E HH:mm:ss v","M Hmsv":"L HH:mm:ss v","Md Hmsv":"MM-dd HH:mm:ss v","MEd Hmsv":"MM-dd, E HH:mm:ss v","MMM Hmsv":"LLL HH:mm:ss v","MMMd Hmsv":"MMM d HH:mm:ss v","MMMEd Hmsv":"MMM d, E HH:mm:ss v","MMMMd Hmsv":"MMMM d HH:mm:ss v","y Hmsv":"y HH:mm:ss v","yM Hmsv":"y-MM HH:mm:ss v","yMd Hmsv":"y-MM-dd HH:mm:ss v","yMEd Hmsv":"y-MM-dd, E HH:mm:ss v","yMMM Hmsv":"y MMM HH:mm:ss v","yMMMd Hmsv":"y MMM d HH:mm:ss v","yMMMEd Hmsv":"y MMM d, E HH:mm:ss v","yMMMM Hmsv":"y MMMM HH:mm:ss v","y MMMM d, EEEE hmv":"y MMMM d, EEEE h:mm a v","y MMMM d hmv":"y MMMM d h:mm a v","y MMM d hmv":"y MMM d h:mm a v","y-MM-dd hmv":"y-MM-dd h:mm a v","d hmv":"d h:mm a v","E hmv":"ccc h:mm a v","Ed hmv":"d, E h:mm a v","Gy hmv":"G y h:mm a v","GyMMM hmv":"G y MMM h:mm a v","GyMMMd hmv":"G y MMM d h:mm a v","GyMMMEd hmv":"G y MMM d, E h:mm a v","M hmv":"L h:mm a v","Md hmv":"MM-dd h:mm a v","MEd hmv":"MM-dd, E h:mm a v","MMM hmv":"LLL h:mm a v","MMMd hmv":"MMM d h:mm a v","MMMEd hmv":"MMM d, E h:mm a v","MMMMd hmv":"MMMM d h:mm a v","y hmv":"y h:mm a v","yM hmv":"y-MM h:mm a v","yMd hmv":"y-MM-dd h:mm a v","yMEd hmv":"y-MM-dd, E h:mm a v","yMMM hmv":"y MMM h:mm a v","yMMMd hmv":"y MMM d h:mm a v","yMMMEd hmv":"y MMM d, E h:mm a v","yMMMM hmv":"y MMMM h:mm a v","y MMMM d, EEEE Hmv":"y MMMM d, EEEE HH:mm v","y MMMM d Hmv":"y MMMM d HH:mm v","y MMM d Hmv":"y MMM d HH:mm v","y-MM-dd Hmv":"y-MM-dd HH:mm v","d Hmv":"d HH:mm v","E Hmv":"ccc HH:mm v","Ed Hmv":"d, E HH:mm v","Gy Hmv":"G y HH:mm v","GyMMM Hmv":"G y MMM HH:mm v","GyMMMd Hmv":"G y MMM d HH:mm v","GyMMMEd Hmv":"G y MMM d, E HH:mm v","M Hmv":"L HH:mm v","Md Hmv":"MM-dd HH:mm v","MEd Hmv":"MM-dd, E HH:mm v","MMM Hmv":"LLL HH:mm v","MMMd Hmv":"MMM d HH:mm v","MMMEd Hmv":"MMM d, E HH:mm v","MMMMd Hmv":"MMMM d HH:mm v","y Hmv":"y HH:mm v","yM Hmv":"y-MM HH:mm v","yMd Hmv":"y-MM-dd HH:mm v","yMEd Hmv":"y-MM-dd, E HH:mm v","yMMM Hmv":"y MMM HH:mm v","yMMMd Hmv":"y MMM d HH:mm v","yMMMEd Hmv":"y MMM d, E HH:mm v","yMMMM Hmv":"y MMMM HH:mm v","y MMMM d, EEEE ms":"y MMMM d, EEEE mm:ss","y MMMM d ms":"y MMMM d mm:ss","y MMM d ms":"y MMM d mm:ss","y-MM-dd ms":"y-MM-dd mm:ss","d ms":"d mm:ss","E ms":"ccc mm:ss","Ed ms":"d, E mm:ss","Gy ms":"G y mm:ss","GyMMM ms":"G y MMM mm:ss","GyMMMd ms":"G y MMM d mm:ss","GyMMMEd ms":"G y MMM d, E mm:ss","M ms":"L mm:ss","Md ms":"MM-dd mm:ss","MEd ms":"MM-dd, E mm:ss","MMM ms":"LLL mm:ss","MMMd ms":"MMM d mm:ss","MMMEd ms":"MMM d, E mm:ss","MMMMd ms":"MMMM d mm:ss","y ms":"y mm:ss","yM ms":"y-MM mm:ss","yMd ms":"y-MM-dd mm:ss","yMEd ms":"y-MM-dd, E mm:ss","yMMM ms":"y MMM mm:ss","yMMMd ms":"y MMM d mm:ss","yMMMEd ms":"y MMM d, E mm:ss","yMMMM ms":"y MMMM mm:ss"}},"hourCycle":"h12","nu":["arab"],"ca":["gregory"],"hc":["h12","","h23"]}},"availableLocales":["sd"]}
)
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
