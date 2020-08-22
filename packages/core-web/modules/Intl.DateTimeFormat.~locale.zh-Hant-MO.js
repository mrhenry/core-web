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
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("zh-Hant-MO").length
)) {
// Intl.DateTimeFormat.~locale.zh-Hant-MO
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"zh-Hant-MO":{"am":"上午","pm":"下午","weekday":{"narrow":["日","一","二","三","四","五","六"],"short":["週日","週一","週二","週三","週四","週五","週六"],"long":["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},"era":{"narrow":{"BC":"公元前","AD":"公元"},"short":{"BC":"公元前","AD":"公元"},"long":{"BC":"公元前","AD":"公元"}},"month":{"narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"short":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"long":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},"timeZoneName":{"America/Rio_Branco":{"long":["艾克標準時間","艾克夏令時間"]},"Asia/Kabul":{"long":["阿富汗時間","阿富汗時間"]},"Africa/Maputo":{"long":["中非時間","中非時間"]},"Africa/Bujumbura":{"long":["中非時間","中非時間"]},"Africa/Gaborone":{"long":["中非時間","中非時間"]},"Africa/Lubumbashi":{"long":["中非時間","中非時間"]},"Africa/Blantyre":{"long":["中非時間","中非時間"]},"Africa/Kigali":{"long":["中非時間","中非時間"]},"Africa/Lusaka":{"long":["中非時間","中非時間"]},"Africa/Harare":{"long":["中非時間","中非時間"]},"Africa/Nairobi":{"long":["東非時間","東非時間"]},"Africa/Djibouti":{"long":["東非時間","東非時間"]},"Africa/Asmera":{"long":["東非時間","東非時間"]},"Africa/Addis_Ababa":{"long":["東非時間","東非時間"]},"Indian/Comoro":{"long":["東非時間","東非時間"]},"Indian/Antananarivo":{"long":["東非時間","東非時間"]},"Africa/Mogadishu":{"long":["東非時間","東非時間"]},"Africa/Dar_es_Salaam":{"long":["東非時間","東非時間"]},"Africa/Kampala":{"long":["東非時間","東非時間"]},"Indian/Mayotte":{"long":["東非時間","東非時間"]},"Africa/Johannesburg":{"long":["南非時間","南非時間"]},"Africa/Maseru":{"long":["南非時間","南非時間"]},"Africa/Mbabane":{"long":["南非時間","南非時間"]},"Africa/Lagos":{"long":["西非標準時間","西非夏令時間"]},"Africa/Luanda":{"long":["西非標準時間","西非夏令時間"]},"Africa/Porto-Novo":{"long":["西非標準時間","西非夏令時間"]},"Africa/Kinshasa":{"long":["西非標準時間","西非夏令時間"]},"Africa/Bangui":{"long":["西非標準時間","西非夏令時間"]},"Africa/Brazzaville":{"long":["西非標準時間","西非夏令時間"]},"Africa/Douala":{"long":["西非標準時間","西非夏令時間"]},"Africa/Libreville":{"long":["西非標準時間","西非夏令時間"]},"Africa/Malabo":{"long":["西非標準時間","西非夏令時間"]},"Africa/Niamey":{"long":["西非標準時間","西非夏令時間"]},"Africa/Ndjamena":{"long":["西非標準時間","西非夏令時間"]},"Asia/Aqtobe":{"long":["西哈薩克時間","西哈薩克時間"]},"America/Juneau":{"long":["阿拉斯加標準時間","阿拉斯加夏令時間"],"short":["AKST","AKDT"]},"Asia/Almaty":{"long":["東哈薩克時間","東哈薩克時間"]},"America/Manaus":{"long":["亞馬遜標準時間","亞馬遜夏令時間"]},"America/Chicago":{"long":["北美中部標準時間","北美中部夏令時間"],"short":["CST","CDT"]},"America/Belize":{"long":["北美中部標準時間","北美中部夏令時間"],"short":["CST","CDT"]},"America/Winnipeg":{"long":["北美中部標準時間","北美中部夏令時間"],"short":["CST","CDT"]},"America/Costa_Rica":{"long":["北美中部標準時間","北美中部夏令時間"],"short":["CST","CDT"]},"America/Guatemala":{"long":["北美中部標準時間","北美中部夏令時間"],"short":["CST","CDT"]},"America/Tegucigalpa":{"long":["北美中部標準時間","北美中部夏令時間"],"short":["CST","CDT"]},"America/Mexico_City":{"long":["北美中部標準時間","北美中部夏令時間"],"short":["CST","CDT"]},"America/El_Salvador":{"long":["北美中部標準時間","北美中部夏令時間"],"short":["CST","CDT"]},"America/New_York":{"long":["北美東部標準時間","北美東部夏令時間"],"short":["EST","EDT"]},"America/Nassau":{"long":["北美東部標準時間","北美東部夏令時間"],"short":["EST","EDT"]},"America/Toronto":{"long":["北美東部標準時間","北美東部夏令時間"],"short":["EST","EDT"]},"America/Port-au-Prince":{"long":["北美東部標準時間","北美東部夏令時間"],"short":["EST","EDT"]},"America/Jamaica":{"long":["北美東部標準時間","北美東部夏令時間"],"short":["EST","EDT"]},"America/Cayman":{"long":["北美東部標準時間","北美東部夏令時間"],"short":["EST","EDT"]},"America/Panama":{"long":["北美東部標準時間","北美東部夏令時間"],"short":["EST","EDT"]},"America/Denver":{"long":["北美山區標準時間","北美山區夏令時間"],"short":["MST","MDT"]},"America/Edmonton":{"long":["北美山區標準時間","北美山區夏令時間"],"short":["MST","MDT"]},"America/Hermosillo":{"long":["北美山區標準時間","北美山區夏令時間"],"short":["MST","MDT"]},"America/Los_Angeles":{"long":["北美太平洋標準時間","北美太平洋夏令時間"],"short":["PST","PDT"]},"America/Vancouver":{"long":["北美太平洋標準時間","北美太平洋夏令時間"],"short":["PST","PDT"]},"America/Tijuana":{"long":["北美太平洋標準時間","北美太平洋夏令時間"],"short":["PST","PDT"]},"Asia/Anadyr":{"long":["阿那底河標準時間","阿那底河夏令時間"]},"Pacific/Apia":{"long":["阿皮亞標準時間","阿皮亞夏令時間"]},"Asia/Riyadh":{"long":["阿拉伯標準時間","阿拉伯夏令時間"]},"Asia/Bahrain":{"long":["阿拉伯標準時間","阿拉伯夏令時間"]},"Asia/Baghdad":{"long":["阿拉伯標準時間","阿拉伯夏令時間"]},"Asia/Kuwait":{"long":["阿拉伯標準時間","阿拉伯夏令時間"]},"Asia/Qatar":{"long":["阿拉伯標準時間","阿拉伯夏令時間"]},"Asia/Aden":{"long":["阿拉伯標準時間","阿拉伯夏令時間"]},"America/Buenos_Aires":{"long":["阿根廷標準時間","阿根廷夏令時間"]},"America/Argentina/San_Luis":{"long":["阿根廷西部標準時間","阿根廷西部夏令時間"]},"Asia/Ashgabat":{"long":["土庫曼標準時間","土庫曼夏令時間"]},"America/Halifax":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Antigua":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Anguilla":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Aruba":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Barbados":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"Atlantic/Bermuda":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Kralendijk":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Curacao":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Dominica":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Grenada":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Thule":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Guadeloupe":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/St_Kitts":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/St_Lucia":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Marigot":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Martinique":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Montserrat":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Puerto_Rico":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Lower_Princes":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Port_of_Spain":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/St_Vincent":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/Tortola":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"America/St_Thomas":{"long":["大西洋標準時間","大西洋夏令時間"],"short":["AST","ADT"]},"Australia/Adelaide":{"long":["澳洲中部標準時間","澳洲中部夏令時間"]},"Australia/Eucla":{"long":["澳洲中西部標準時間","澳洲中西部夏令時間"]},"Australia/Sydney":{"long":["澳洲東部標準時間","澳洲東部夏令時間"]},"Australia/Perth":{"long":["澳洲西部標準時間","澳洲西部夏令時間"]},"Atlantic/Azores":{"long":["亞速爾群島標準時間","亞速爾群島夏令時間"]},"Asia/Thimphu":{"long":["不丹時間","不丹時間"]},"America/La_Paz":{"long":["玻利維亞時間","玻利維亞時間"]},"Asia/Kuching":{"long":["馬來西亞時間","馬來西亞時間"]},"America/Sao_Paulo":{"long":["巴西利亞標準時間","巴西利亞夏令時間"]},"Europe/London":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Asia/Brunei":{"long":["汶萊時間","汶萊時間"]},"Atlantic/Cape_Verde":{"long":["佛得角標準時間","佛得角夏令時間"]},"Antarctica/Casey":{"long":["凱西站時間","凱西站時間"]},"Pacific/Saipan":{"long":["北馬里亞納群島時間","北馬里亞納群島時間"]},"Pacific/Guam":{"long":["關島標準時間","關島標準時間"]},"Pacific/Chatham":{"long":["查坦群島標準時間","查坦群島夏令時間"]},"America/Santiago":{"long":["智利標準時間","智利夏令時間"]},"Asia/Shanghai":{"long":["中國標準時間","中國夏令時間"]},"Asia/Choibalsan":{"long":["喬巴山標準時間","喬巴山夏令時間"]},"Indian/Christmas":{"long":["聖誕島時間","聖誕島時間"]},"Indian/Cocos":{"long":["可可斯群島時間","可可斯群島時間"]},"America/Bogota":{"long":["哥倫比亞標準時間","哥倫比亞夏令時間"]},"Pacific/Rarotonga":{"long":["庫克群島標準時間","庫克群島半夏令時間"]},"America/Havana":{"long":["古巴標準時間","古巴夏令時間"]},"Antarctica/Davis":{"long":["戴維斯時間","戴維斯時間"]},"Antarctica/DumontDUrville":{"long":["迪蒙迪維爾時間","迪蒙迪維爾時間"]},"Asia/Dushanbe":{"long":["塔吉克時間","塔吉克時間"]},"America/Paramaribo":{"long":["蘇里南時間","蘇里南時間"]},"Asia/Dili":{"long":["東帝汶時間","東帝汶時間"]},"Pacific/Easter":{"long":["復活節島標準時間","復活節島夏令時間"]},"America/Guayaquil":{"long":["厄瓜多爾時間","厄瓜多爾時間"]},"Europe/Paris":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Andorra":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Tirane":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Vienna":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Sarajevo":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Brussels":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Zurich":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Prague":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Berlin":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Copenhagen":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Madrid":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Gibraltar":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Zagreb":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Budapest":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Rome":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Vaduz":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Luxembourg":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Monaco":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Podgorica":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Skopje":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Malta":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Amsterdam":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Oslo":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Warsaw":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Belgrade":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Stockholm":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Ljubljana":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Bratislava":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/San_Marino":{"long":["中歐標準時間","中歐夏令時間"]},"Africa/Tunis":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Vatican":{"long":["中歐標準時間","中歐夏令時間"]},"Europe/Bucharest":{"long":["東歐標準時間","東歐夏令時間"]},"Europe/Mariehamn":{"long":["東歐標準時間","東歐夏令時間"]},"Europe/Sofia":{"long":["東歐標準時間","東歐夏令時間"]},"Asia/Nicosia":{"long":["東歐標準時間","東歐夏令時間"]},"Africa/Cairo":{"long":["東歐標準時間","東歐夏令時間"]},"Europe/Helsinki":{"long":["東歐標準時間","東歐夏令時間"]},"Europe/Athens":{"long":["東歐標準時間","東歐夏令時間"]},"Asia/Amman":{"long":["東歐標準時間","東歐夏令時間"]},"Asia/Beirut":{"long":["東歐標準時間","東歐夏令時間"]},"Asia/Damascus":{"long":["東歐標準時間","東歐夏令時間"]},"Europe/Minsk":{"long":["歐洲遠東時間","歐洲遠東時間"]},"Europe/Kaliningrad":{"long":["歐洲遠東時間","歐洲遠東時間"]},"Atlantic/Canary":{"long":["西歐標準時間","西歐夏令時間"]},"Atlantic/Faeroe":{"long":["西歐標準時間","西歐夏令時間"]},"Atlantic/Stanley":{"long":["福克蘭群島標準時間","福克蘭群島夏令時間"]},"Pacific/Fiji":{"long":["斐濟標準時間","斐濟夏令時間"]},"America/Cayenne":{"long":["法屬圭亞那時間","法屬圭亞那時間"]},"Indian/Kerguelen":{"long":["法國南方及南極時間","法國南方及南極時間"]},"Asia/Bishkek":{"long":["吉爾吉斯時間","吉爾吉斯時間"]},"Pacific/Galapagos":{"long":["加拉帕戈群島時間","加拉帕戈群島時間"]},"Pacific/Gambier":{"long":["甘比爾群島時間","甘比爾群島時間"]},"Pacific/Tarawa":{"long":["吉爾伯特群島時間","吉爾伯特群島時間"]},"Atlantic/Reykjavik":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Africa/Ouagadougou":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Africa/Abidjan":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Africa/Accra":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Africa/Banjul":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Africa/Conakry":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Africa/Bamako":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Africa/Nouakchott":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Atlantic/St_Helena":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Africa/Freetown":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Africa/Dakar":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"Africa/Lome":{"long":["格林威治標準時間","格林威治標準時間"],"short":["GMT","GMT"]},"America/Scoresbysund":{"long":["格陵蘭東部標準時間","格陵蘭東部夏令時間"]},"America/Godthab":{"long":["格陵蘭西部標準時間","格陵蘭西部夏令時間"]},"Asia/Dubai":{"long":["波斯灣海域時間","波斯灣海域時間"]},"Asia/Muscat":{"long":["波斯灣海域時間","波斯灣海域時間"]},"America/Guyana":{"long":["圭亞那時間","圭亞那時間"]},"Pacific/Honolulu":{"long":["夏威夷-阿留申標準時間","夏威夷-阿留申夏令時間"],"short":["HAST","HADT"]},"Asia/Hong_Kong":{"long":["香港標準時間","香港夏令時間"]},"Asia/Hovd":{"long":["科布多標準時間","科布多夏令時間"]},"Asia/Calcutta":{"long":["印度時間","印度時間"]},"Asia/Colombo":{"long":["蘭卡時間","蘭卡時間"]},"Indian/Chagos":{"long":["印度洋時間","印度洋時間"]},"Asia/Bangkok":{"long":["中南半島時間","中南半島時間"]},"Asia/Phnom_Penh":{"long":["中南半島時間","中南半島時間"]},"Asia/Vientiane":{"long":["中南半島時間","中南半島時間"]},"Asia/Makassar":{"long":["印尼中部時間","印尼中部時間"]},"Asia/Jayapura":{"long":["印尼東部時間","印尼東部時間"]},"Asia/Jakarta":{"long":["印尼西部時間","印尼西部時間"]},"Asia/Tehran":{"long":["伊朗標準時間","伊朗夏令時間"]},"Asia/Irkutsk":{"long":["伊爾庫茨克標準時間","伊爾庫茨克夏令時間"]},"Asia/Jerusalem":{"long":["以色列標準時間","以色列夏令時間"]},"Asia/Tokyo":{"long":["日本標準時間","日本夏令時間"]},"Asia/Kamchatka":{"long":["彼得羅巴甫洛夫斯克標準時間","彼得羅巴甫洛夫斯克日光節約時間"]},"Asia/Karachi":{"long":["巴基斯坦標準時間","巴基斯坦夏令時間"]},"Asia/Qyzylorda":{"long":["克孜勒奧爾達標準時間","克孜勒奧爾達夏令時間"]},"Asia/Seoul":{"long":["韓國標準時間","韓國夏令時間"]},"Pacific/Kosrae":{"long":["科斯雷時間","科斯雷時間"]},"Asia/Krasnoyarsk":{"long":["克拉斯諾亞爾斯克標準時間","克拉斯諾亞爾斯克夏令時間"]},"Europe/Samara":{"long":["薩馬拉標準時間","薩馬拉夏令時間"]},"Pacific/Kiritimati":{"long":["萊恩群島時間","萊恩群島時間"]},"Australia/Lord_Howe":{"long":["豪勳爵島標準時間","豪勳爵島夏令時間"]},"Asia/Macau":{"long":["澳門標準時間","澳門夏令時間"]},"Antarctica/Macquarie":{"long":["麥夸里群島時間","麥夸里群島時間"]},"Asia/Magadan":{"long":["馬加丹標準時間","馬加丹夏令時間"]},"Indian/Maldives":{"long":["馬爾代夫時間","馬爾代夫時間"]},"Pacific/Marquesas":{"long":["馬克薩斯時間","馬克薩斯時間"]},"Pacific/Majuro":{"long":["馬紹爾群島時間","馬紹爾群島時間"]},"Indian/Mauritius":{"long":["毛里裘斯標準時間","毛里裘斯夏令時間"]},"Antarctica/Mawson":{"long":["莫森時間","莫森時間"]},"America/Santa_Isabel":{"long":["墨西哥西北部標準時間","墨西哥西北部夏令時間"]},"America/Mazatlan":{"long":["墨西哥太平洋標準時間","墨西哥太平洋夏令時間"]},"Asia/Ulaanbaatar":{"long":["烏蘭巴托標準時間","烏蘭巴托夏令時間"]},"Europe/Moscow":{"long":["莫斯科標準時間","莫斯科夏令時間"]},"Asia/Rangoon":{"long":["緬甸時間","緬甸時間"]},"Pacific/Nauru":{"long":["瑙魯時間","瑙魯時間"]},"Asia/Katmandu":{"long":["尼泊爾時間","尼泊爾時間"]},"Pacific/Noumea":{"long":["新喀里多尼亞標準時間","新喀里多尼亞夏令時間"]},"Pacific/Auckland":{"long":["紐西蘭標準時間","紐西蘭夏令時間"]},"Antarctica/McMurdo":{"long":["紐西蘭標準時間","紐西蘭夏令時間"]},"America/St_Johns":{"long":["紐芬蘭標準時間","紐芬蘭夏令時間"]},"Pacific/Niue":{"long":["紐埃島時間","紐埃島時間"]},"Pacific/Norfolk":{"long":["諾福克島時間","諾福克島時間"]},"America/Noronha":{"long":["費爾南多迪諾羅尼亞標準時間","費爾南多迪諾羅尼亞夏令時間"]},"Asia/Novosibirsk":{"long":["新西伯利亞標準時間","新西伯利亞夏令時間"]},"Asia/Omsk":{"long":["鄂木斯克標準時間","鄂木斯克夏令時間"]},"Pacific/Palau":{"long":["帛琉時間","帛琉時間"]},"Pacific/Port_Moresby":{"long":["巴布亞新畿內亞時間","巴布亞新畿內亞時間"]},"America/Asuncion":{"long":["巴拉圭標準時間","巴拉圭夏令時間"]},"America/Lima":{"long":["秘魯標準時間","秘魯夏令時間"]},"Asia/Manila":{"long":["菲律賓標準時間","菲律賓夏令時間"]},"Pacific/Enderbury":{"long":["鳳凰群島時間","鳳凰群島時間"]},"America/Miquelon":{"long":["聖皮埃與密克隆群島標準時間","聖皮埃與密克隆群島夏令時間"]},"Pacific/Pitcairn":{"long":["皮特康時間","皮特康時間"]},"Pacific/Ponape":{"long":["波納佩時間","波納佩時間"]},"Asia/Pyongyang":{"long":["平壤時間","平壤時間"]},"Indian/Reunion":{"long":["留尼旺時間","留尼旺時間"]},"Antarctica/Rothera":{"long":["羅瑟拉時間","羅瑟拉時間"]},"Asia/Sakhalin":{"long":["庫頁島標準時間","庫頁島夏令時間"]},"Pacific/Pago_Pago":{"long":["薩摩亞標準時間","薩摩亞夏令時間"]},"Indian/Mahe":{"long":["塞舌爾時間","塞舌爾時間"]},"Asia/Singapore":{"long":["新加坡時間","新加坡時間"]},"Pacific/Guadalcanal":{"long":["所羅門群島時間","所羅門群島時間"]},"Atlantic/South_Georgia":{"long":["南喬治亞時間","南喬治亞時間"]},"Asia/Yekaterinburg":{"long":["葉卡捷琳堡標準時間","葉卡捷琳堡夏令時間"]},"Antarctica/Syowa":{"long":["昭和基地時間","昭和基地時間"]},"Pacific/Tahiti":{"long":["大溪地時間","大溪地時間"]},"Asia/Taipei":{"long":["台北標準時間","台北夏令時間"]},"Asia/Tashkent":{"long":["烏茲別克標準時間","烏茲別克夏令時間"]},"Pacific/Fakaofo":{"long":["托克勞群島時間","托克勞群島時間"]},"Pacific/Tongatapu":{"long":["湯加標準時間","湯加夏令時間"]},"Pacific/Truk":{"long":["楚克島時間","楚克島時間"]},"Pacific/Funafuti":{"long":["圖瓦盧時間","圖瓦盧時間"]},"America/Montevideo":{"long":["烏拉圭標準時間","烏拉圭夏令時間"]},"Pacific/Efate":{"long":["瓦努阿圖標準時間","瓦努阿圖夏令時間"]},"America/Caracas":{"long":["委內瑞拉時間","委內瑞拉時間"]},"Asia/Vladivostok":{"long":["海參崴標準時間","海參崴夏令時間"]},"Europe/Volgograd":{"long":["伏爾加格勒標準時間","伏爾加格勒夏令時間"]},"Antarctica/Vostok":{"long":["沃斯托克時間","沃斯托克時間"]},"Pacific/Wake":{"long":["威克島時間","威克島時間"]},"Pacific/Wallis":{"long":["瓦利斯和富圖納群島時間","瓦利斯和富圖納群島時間"]},"Asia/Yakutsk":{"long":["雅庫茨克標準時間","雅庫茨克夏令時間"]},"UTC":{"long":["世界標準時間","世界標準時間"],"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","formats":{"gregory":["Bh時","Bh:mm","Bh:mm:ss","d日","ccc","E Bh:mm","E Bh:mm:ss","d E","E ah:mm","E HH:mm","E ah:mm:ss","E HH:mm:ss","Gy年","Gy年M月","Gy年M月d日","Gy年M月d日E","ah時","H時","ah:mm","HH:mm","ah:mm:ss","HH:mm:ss","ah:mm:ss [v]","HH:mm:ss [v]","ah:mm [v]","HH:mm [v]","M月","d/M","d/M（E）","dd/MM","LLL","M月d日","M月d日E","M月d日","M月第W週","mm:ss","y年","M/y","d/M/y","d/M/y（E）","MM/y","y年M月","y年M月d日","y年M月d日E","y年M月","y年QQQ","y年QQQQ","Y年第w週","y年M月d日EEEE","y年M月d日","y年M月d日","d/M/y","ah:mm:ss [zzzz]","ah:mm:ss [z]","ah:mm:ss","ah:mm","y年M月d日EEEE ah:mm:ss [zzzz]","y年M月d日 ah:mm:ss [zzzz]","y年M月d日 ah:mm:ss [zzzz]","d/M/y ah:mm:ss [zzzz]","d日 ah:mm:ss [zzzz]","ccc ah:mm:ss [zzzz]","d E ah:mm:ss [zzzz]","Gy年 ah:mm:ss [zzzz]","Gy年M月 ah:mm:ss [zzzz]","Gy年M月d日 ah:mm:ss [zzzz]","Gy年M月d日E ah:mm:ss [zzzz]","M月 ah:mm:ss [zzzz]","d/M ah:mm:ss [zzzz]","d/M（E） ah:mm:ss [zzzz]","dd/MM ah:mm:ss [zzzz]","LLL ah:mm:ss [zzzz]","M月d日 ah:mm:ss [zzzz]","M月d日E ah:mm:ss [zzzz]","M月d日 ah:mm:ss [zzzz]","M月第W週 ah:mm:ss [zzzz]","y年 ah:mm:ss [zzzz]","M/y ah:mm:ss [zzzz]","d/M/y ah:mm:ss [zzzz]","d/M/y（E） ah:mm:ss [zzzz]","MM/y ah:mm:ss [zzzz]","y年M月 ah:mm:ss [zzzz]","y年M月d日 ah:mm:ss [zzzz]","y年M月d日E ah:mm:ss [zzzz]","y年M月 ah:mm:ss [zzzz]","y年QQQ ah:mm:ss [zzzz]","y年QQQQ ah:mm:ss [zzzz]","Y年第w週 ah:mm:ss [zzzz]","y年M月d日EEEE ah:mm:ss [z]","y年M月d日 ah:mm:ss [z]","y年M月d日 ah:mm:ss [z]","d/M/y ah:mm:ss [z]","d日 ah:mm:ss [z]","ccc ah:mm:ss [z]","d E ah:mm:ss [z]","Gy年 ah:mm:ss [z]","Gy年M月 ah:mm:ss [z]","Gy年M月d日 ah:mm:ss [z]","Gy年M月d日E ah:mm:ss [z]","M月 ah:mm:ss [z]","d/M ah:mm:ss [z]","d/M（E） ah:mm:ss [z]","dd/MM ah:mm:ss [z]","LLL ah:mm:ss [z]","M月d日 ah:mm:ss [z]","M月d日E ah:mm:ss [z]","M月d日 ah:mm:ss [z]","M月第W週 ah:mm:ss [z]","y年 ah:mm:ss [z]","M/y ah:mm:ss [z]","d/M/y ah:mm:ss [z]","d/M/y（E） ah:mm:ss [z]","MM/y ah:mm:ss [z]","y年M月 ah:mm:ss [z]","y年M月d日 ah:mm:ss [z]","y年M月d日E ah:mm:ss [z]","y年M月 ah:mm:ss [z]","y年QQQ ah:mm:ss [z]","y年QQQQ ah:mm:ss [z]","Y年第w週 ah:mm:ss [z]","y年M月d日EEEE ah:mm:ss","y年M月d日 ah:mm:ss","y年M月d日 ah:mm:ss","d/M/y ah:mm:ss","d日 ah:mm:ss","ccc ah:mm:ss","d E ah:mm:ss","Gy年 ah:mm:ss","Gy年M月 ah:mm:ss","Gy年M月d日 ah:mm:ss","Gy年M月d日E ah:mm:ss","M月 ah:mm:ss","d/M ah:mm:ss","d/M（E） ah:mm:ss","dd/MM ah:mm:ss","LLL ah:mm:ss","M月d日 ah:mm:ss","M月d日E ah:mm:ss","M月d日 ah:mm:ss","M月第W週 ah:mm:ss","y年 ah:mm:ss","M/y ah:mm:ss","d/M/y ah:mm:ss","d/M/y（E） ah:mm:ss","MM/y ah:mm:ss","y年M月 ah:mm:ss","y年M月d日 ah:mm:ss","y年M月d日E ah:mm:ss","y年M月 ah:mm:ss","y年QQQ ah:mm:ss","y年QQQQ ah:mm:ss","Y年第w週 ah:mm:ss","y年M月d日EEEE ah:mm","y年M月d日 ah:mm","y年M月d日 ah:mm","d/M/y ah:mm","d日 ah:mm","ccc ah:mm","d E ah:mm","Gy年 ah:mm","Gy年M月 ah:mm","Gy年M月d日 ah:mm","Gy年M月d日E ah:mm","M月 ah:mm","d/M ah:mm","d/M（E） ah:mm","dd/MM ah:mm","LLL ah:mm","M月d日 ah:mm","M月d日E ah:mm","M月d日 ah:mm","M月第W週 ah:mm","y年 ah:mm","M/y ah:mm","d/M/y ah:mm","d/M/y（E） ah:mm","MM/y ah:mm","y年M月 ah:mm","y年M月d日 ah:mm","y年M月d日E ah:mm","y年M月 ah:mm","y年QQQ ah:mm","y年QQQQ ah:mm","Y年第w週 ah:mm","y年M月d日EEEE Bh時","y年M月d日 Bh時","y年M月d日 Bh時","d/M/y Bh時","d日 Bh時","ccc Bh時","d E Bh時","Gy年 Bh時","Gy年M月 Bh時","Gy年M月d日 Bh時","Gy年M月d日E Bh時","M月 Bh時","d/M Bh時","d/M（E） Bh時","dd/MM Bh時","LLL Bh時","M月d日 Bh時","M月d日E Bh時","M月d日 Bh時","M月第W週 Bh時","y年 Bh時","M/y Bh時","d/M/y Bh時","d/M/y（E） Bh時","MM/y Bh時","y年M月 Bh時","y年M月d日 Bh時","y年M月d日E Bh時","y年M月 Bh時","y年QQQ Bh時","y年QQQQ Bh時","Y年第w週 Bh時","y年M月d日EEEE Bh:mm","y年M月d日 Bh:mm","y年M月d日 Bh:mm","d/M/y Bh:mm","d日 Bh:mm","ccc Bh:mm","d E Bh:mm","Gy年 Bh:mm","Gy年M月 Bh:mm","Gy年M月d日 Bh:mm","Gy年M月d日E Bh:mm","M月 Bh:mm","d/M Bh:mm","d/M（E） Bh:mm","dd/MM Bh:mm","LLL Bh:mm","M月d日 Bh:mm","M月d日E Bh:mm","M月d日 Bh:mm","M月第W週 Bh:mm","y年 Bh:mm","M/y Bh:mm","d/M/y Bh:mm","d/M/y（E） Bh:mm","MM/y Bh:mm","y年M月 Bh:mm","y年M月d日 Bh:mm","y年M月d日E Bh:mm","y年M月 Bh:mm","y年QQQ Bh:mm","y年QQQQ Bh:mm","Y年第w週 Bh:mm","y年M月d日EEEE Bh:mm:ss","y年M月d日 Bh:mm:ss","y年M月d日 Bh:mm:ss","d/M/y Bh:mm:ss","d日 Bh:mm:ss","ccc Bh:mm:ss","d E Bh:mm:ss","Gy年 Bh:mm:ss","Gy年M月 Bh:mm:ss","Gy年M月d日 Bh:mm:ss","Gy年M月d日E Bh:mm:ss","M月 Bh:mm:ss","d/M Bh:mm:ss","d/M（E） Bh:mm:ss","dd/MM Bh:mm:ss","LLL Bh:mm:ss","M月d日 Bh:mm:ss","M月d日E Bh:mm:ss","M月d日 Bh:mm:ss","M月第W週 Bh:mm:ss","y年 Bh:mm:ss","M/y Bh:mm:ss","d/M/y Bh:mm:ss","d/M/y（E） Bh:mm:ss","MM/y Bh:mm:ss","y年M月 Bh:mm:ss","y年M月d日 Bh:mm:ss","y年M月d日E Bh:mm:ss","y年M月 Bh:mm:ss","y年QQQ Bh:mm:ss","y年QQQQ Bh:mm:ss","Y年第w週 Bh:mm:ss","y年M月d日EEEE ah時","y年M月d日 ah時","y年M月d日 ah時","d/M/y ah時","d日 ah時","ccc ah時","d E ah時","Gy年 ah時","Gy年M月 ah時","Gy年M月d日 ah時","Gy年M月d日E ah時","M月 ah時","d/M ah時","d/M（E） ah時","dd/MM ah時","LLL ah時","M月d日 ah時","M月d日E ah時","M月d日 ah時","M月第W週 ah時","y年 ah時","M/y ah時","d/M/y ah時","d/M/y（E） ah時","MM/y ah時","y年M月 ah時","y年M月d日 ah時","y年M月d日E ah時","y年M月 ah時","y年QQQ ah時","y年QQQQ ah時","Y年第w週 ah時","y年M月d日EEEE H時","y年M月d日 H時","y年M月d日 H時","d/M/y H時","d日 H時","ccc H時","d E H時","Gy年 H時","Gy年M月 H時","Gy年M月d日 H時","Gy年M月d日E H時","M月 H時","d/M H時","d/M（E） H時","dd/MM H時","LLL H時","M月d日 H時","M月d日E H時","M月d日 H時","M月第W週 H時","y年 H時","M/y H時","d/M/y H時","d/M/y（E） H時","MM/y H時","y年M月 H時","y年M月d日 H時","y年M月d日E H時","y年M月 H時","y年QQQ H時","y年QQQQ H時","Y年第w週 H時","y年M月d日EEEE ah:mm","y年M月d日 ah:mm","y年M月d日 ah:mm","d/M/y ah:mm","d日 ah:mm","ccc ah:mm","d E ah:mm","Gy年 ah:mm","Gy年M月 ah:mm","Gy年M月d日 ah:mm","Gy年M月d日E ah:mm","M月 ah:mm","d/M ah:mm","d/M（E） ah:mm","dd/MM ah:mm","LLL ah:mm","M月d日 ah:mm","M月d日E ah:mm","M月d日 ah:mm","M月第W週 ah:mm","y年 ah:mm","M/y ah:mm","d/M/y ah:mm","d/M/y（E） ah:mm","MM/y ah:mm","y年M月 ah:mm","y年M月d日 ah:mm","y年M月d日E ah:mm","y年M月 ah:mm","y年QQQ ah:mm","y年QQQQ ah:mm","Y年第w週 ah:mm","y年M月d日EEEE HH:mm","y年M月d日 HH:mm","y年M月d日 HH:mm","d/M/y HH:mm","d日 HH:mm","ccc HH:mm","d E HH:mm","Gy年 HH:mm","Gy年M月 HH:mm","Gy年M月d日 HH:mm","Gy年M月d日E HH:mm","M月 HH:mm","d/M HH:mm","d/M（E） HH:mm","dd/MM HH:mm","LLL HH:mm","M月d日 HH:mm","M月d日E HH:mm","M月d日 HH:mm","M月第W週 HH:mm","y年 HH:mm","M/y HH:mm","d/M/y HH:mm","d/M/y（E） HH:mm","MM/y HH:mm","y年M月 HH:mm","y年M月d日 HH:mm","y年M月d日E HH:mm","y年M月 HH:mm","y年QQQ HH:mm","y年QQQQ HH:mm","Y年第w週 HH:mm","y年M月d日EEEE ah:mm:ss","y年M月d日 ah:mm:ss","y年M月d日 ah:mm:ss","d/M/y ah:mm:ss","d日 ah:mm:ss","ccc ah:mm:ss","d E ah:mm:ss","Gy年 ah:mm:ss","Gy年M月 ah:mm:ss","Gy年M月d日 ah:mm:ss","Gy年M月d日E ah:mm:ss","M月 ah:mm:ss","d/M ah:mm:ss","d/M（E） ah:mm:ss","dd/MM ah:mm:ss","LLL ah:mm:ss","M月d日 ah:mm:ss","M月d日E ah:mm:ss","M月d日 ah:mm:ss","M月第W週 ah:mm:ss","y年 ah:mm:ss","M/y ah:mm:ss","d/M/y ah:mm:ss","d/M/y（E） ah:mm:ss","MM/y ah:mm:ss","y年M月 ah:mm:ss","y年M月d日 ah:mm:ss","y年M月d日E ah:mm:ss","y年M月 ah:mm:ss","y年QQQ ah:mm:ss","y年QQQQ ah:mm:ss","Y年第w週 ah:mm:ss","y年M月d日EEEE HH:mm:ss","y年M月d日 HH:mm:ss","y年M月d日 HH:mm:ss","d/M/y HH:mm:ss","d日 HH:mm:ss","ccc HH:mm:ss","d E HH:mm:ss","Gy年 HH:mm:ss","Gy年M月 HH:mm:ss","Gy年M月d日 HH:mm:ss","Gy年M月d日E HH:mm:ss","M月 HH:mm:ss","d/M HH:mm:ss","d/M（E） HH:mm:ss","dd/MM HH:mm:ss","LLL HH:mm:ss","M月d日 HH:mm:ss","M月d日E HH:mm:ss","M月d日 HH:mm:ss","M月第W週 HH:mm:ss","y年 HH:mm:ss","M/y HH:mm:ss","d/M/y HH:mm:ss","d/M/y（E） HH:mm:ss","MM/y HH:mm:ss","y年M月 HH:mm:ss","y年M月d日 HH:mm:ss","y年M月d日E HH:mm:ss","y年M月 HH:mm:ss","y年QQQ HH:mm:ss","y年QQQQ HH:mm:ss","Y年第w週 HH:mm:ss","y年M月d日EEEE ah:mm:ss [v]","y年M月d日 ah:mm:ss [v]","y年M月d日 ah:mm:ss [v]","d/M/y ah:mm:ss [v]","d日 ah:mm:ss [v]","ccc ah:mm:ss [v]","d E ah:mm:ss [v]","Gy年 ah:mm:ss [v]","Gy年M月 ah:mm:ss [v]","Gy年M月d日 ah:mm:ss [v]","Gy年M月d日E ah:mm:ss [v]","M月 ah:mm:ss [v]","d/M ah:mm:ss [v]","d/M（E） ah:mm:ss [v]","dd/MM ah:mm:ss [v]","LLL ah:mm:ss [v]","M月d日 ah:mm:ss [v]","M月d日E ah:mm:ss [v]","M月d日 ah:mm:ss [v]","M月第W週 ah:mm:ss [v]","y年 ah:mm:ss [v]","M/y ah:mm:ss [v]","d/M/y ah:mm:ss [v]","d/M/y（E） ah:mm:ss [v]","MM/y ah:mm:ss [v]","y年M月 ah:mm:ss [v]","y年M月d日 ah:mm:ss [v]","y年M月d日E ah:mm:ss [v]","y年M月 ah:mm:ss [v]","y年QQQ ah:mm:ss [v]","y年QQQQ ah:mm:ss [v]","Y年第w週 ah:mm:ss [v]","y年M月d日EEEE HH:mm:ss [v]","y年M月d日 HH:mm:ss [v]","y年M月d日 HH:mm:ss [v]","d/M/y HH:mm:ss [v]","d日 HH:mm:ss [v]","ccc HH:mm:ss [v]","d E HH:mm:ss [v]","Gy年 HH:mm:ss [v]","Gy年M月 HH:mm:ss [v]","Gy年M月d日 HH:mm:ss [v]","Gy年M月d日E HH:mm:ss [v]","M月 HH:mm:ss [v]","d/M HH:mm:ss [v]","d/M（E） HH:mm:ss [v]","dd/MM HH:mm:ss [v]","LLL HH:mm:ss [v]","M月d日 HH:mm:ss [v]","M月d日E HH:mm:ss [v]","M月d日 HH:mm:ss [v]","M月第W週 HH:mm:ss [v]","y年 HH:mm:ss [v]","M/y HH:mm:ss [v]","d/M/y HH:mm:ss [v]","d/M/y（E） HH:mm:ss [v]","MM/y HH:mm:ss [v]","y年M月 HH:mm:ss [v]","y年M月d日 HH:mm:ss [v]","y年M月d日E HH:mm:ss [v]","y年M月 HH:mm:ss [v]","y年QQQ HH:mm:ss [v]","y年QQQQ HH:mm:ss [v]","Y年第w週 HH:mm:ss [v]","y年M月d日EEEE ah:mm [v]","y年M月d日 ah:mm [v]","y年M月d日 ah:mm [v]","d/M/y ah:mm [v]","d日 ah:mm [v]","ccc ah:mm [v]","d E ah:mm [v]","Gy年 ah:mm [v]","Gy年M月 ah:mm [v]","Gy年M月d日 ah:mm [v]","Gy年M月d日E ah:mm [v]","M月 ah:mm [v]","d/M ah:mm [v]","d/M（E） ah:mm [v]","dd/MM ah:mm [v]","LLL ah:mm [v]","M月d日 ah:mm [v]","M月d日E ah:mm [v]","M月d日 ah:mm [v]","M月第W週 ah:mm [v]","y年 ah:mm [v]","M/y ah:mm [v]","d/M/y ah:mm [v]","d/M/y（E） ah:mm [v]","MM/y ah:mm [v]","y年M月 ah:mm [v]","y年M月d日 ah:mm [v]","y年M月d日E ah:mm [v]","y年M月 ah:mm [v]","y年QQQ ah:mm [v]","y年QQQQ ah:mm [v]","Y年第w週 ah:mm [v]","y年M月d日EEEE HH:mm [v]","y年M月d日 HH:mm [v]","y年M月d日 HH:mm [v]","d/M/y HH:mm [v]","d日 HH:mm [v]","ccc HH:mm [v]","d E HH:mm [v]","Gy年 HH:mm [v]","Gy年M月 HH:mm [v]","Gy年M月d日 HH:mm [v]","Gy年M月d日E HH:mm [v]","M月 HH:mm [v]","d/M HH:mm [v]","d/M（E） HH:mm [v]","dd/MM HH:mm [v]","LLL HH:mm [v]","M月d日 HH:mm [v]","M月d日E HH:mm [v]","M月d日 HH:mm [v]","M月第W週 HH:mm [v]","y年 HH:mm [v]","M/y HH:mm [v]","d/M/y HH:mm [v]","d/M/y（E） HH:mm [v]","MM/y HH:mm [v]","y年M月 HH:mm [v]","y年M月d日 HH:mm [v]","y年M月d日E HH:mm [v]","y年M月 HH:mm [v]","y年QQQ HH:mm [v]","y年QQQQ HH:mm [v]","Y年第w週 HH:mm [v]","y年M月d日EEEE mm:ss","y年M月d日 mm:ss","y年M月d日 mm:ss","d/M/y mm:ss","d日 mm:ss","ccc mm:ss","d E mm:ss","Gy年 mm:ss","Gy年M月 mm:ss","Gy年M月d日 mm:ss","Gy年M月d日E mm:ss","M月 mm:ss","d/M mm:ss","d/M（E） mm:ss","dd/MM mm:ss","LLL mm:ss","M月d日 mm:ss","M月d日E mm:ss","M月d日 mm:ss","M月第W週 mm:ss","y年 mm:ss","M/y mm:ss","d/M/y mm:ss","d/M/y（E） mm:ss","MM/y mm:ss","y年M月 mm:ss","y年M月d日 mm:ss","y年M月d日E mm:ss","y年M月 mm:ss","y年QQQ mm:ss","y年QQQQ mm:ss","Y年第w週 mm:ss"]},"hourCycle":"","nu":["latn"],"ca":["gregory","chinese"],"hc":["","","h12","h23"]}},"availableLocales":["zh-Hant-MO"]})
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
