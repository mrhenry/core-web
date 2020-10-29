import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
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
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
import CreateIterResultObject from "@mrhenry/core-web/helpers/_ESAbstract.CreateIterResultObject";
(function(undefined) {
if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("ps").length
)) {
// Intl.DateTimeFormat.~locale.ps
/* @generated */	
  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"ps":{"am":"غ.م.","pm":"غ.و.","weekday":{"narrow":["S","M","T","W","T","F","S"],"short":["يونۍ","دونۍ","درېنۍ","څلرنۍ","پينځنۍ","جمعه","اونۍ"],"long":["يونۍ","دونۍ","درېنۍ","څلرنۍ","پينځنۍ","جمعه","اونۍ"]},"era":{"narrow":{"BC":"له میلاد وړاندې","AD":"م."},"short":{"BC":"له میلاد وړاندې","AD":"م."},"long":{"BC":"له میلاد څخه وړاندې","AD":"له میلاد څخه وروسته"}},"month":{"narrow":["ج","ف","م","ا","م","ج","ج","ا","س","ا","ن","د"],"short":["جنوري","فبروري","مارچ","اپریل","مۍ","جون","جولای","اګست","سېپتمبر","اکتوبر","نومبر","دسمبر"],"long":["جنوري","فبروري","مارچ","اپریل","مۍ","جون","جولای","اګست","سېپتمبر","اکتوبر","نومبر","دسمبر"]},"timeZoneName":{"Asia/Kabul":{"long":["افغانستان وخت","افغانستان وخت"]},"Africa/Maputo":{"long":["منځنی افريقا وخت","منځنی افريقا وخت"]},"Africa/Bujumbura":{"long":["منځنی افريقا وخت","منځنی افريقا وخت"]},"Africa/Gaborone":{"long":["منځنی افريقا وخت","منځنی افريقا وخت"]},"Africa/Lubumbashi":{"long":["منځنی افريقا وخت","منځنی افريقا وخت"]},"Africa/Blantyre":{"long":["منځنی افريقا وخت","منځنی افريقا وخت"]},"Africa/Kigali":{"long":["منځنی افريقا وخت","منځنی افريقا وخت"]},"Africa/Lusaka":{"long":["منځنی افريقا وخت","منځنی افريقا وخت"]},"Africa/Harare":{"long":["منځنی افريقا وخت","منځنی افريقا وخت"]},"Africa/Nairobi":{"long":["ختيځ افريقا وخت","ختيځ افريقا وخت"]},"Africa/Djibouti":{"long":["ختيځ افريقا وخت","ختيځ افريقا وخت"]},"Africa/Asmera":{"long":["ختيځ افريقا وخت","ختيځ افريقا وخت"]},"Africa/Addis_Ababa":{"long":["ختيځ افريقا وخت","ختيځ افريقا وخت"]},"Indian/Comoro":{"long":["ختيځ افريقا وخت","ختيځ افريقا وخت"]},"Indian/Antananarivo":{"long":["ختيځ افريقا وخت","ختيځ افريقا وخت"]},"Africa/Mogadishu":{"long":["ختيځ افريقا وخت","ختيځ افريقا وخت"]},"Africa/Dar_es_Salaam":{"long":["ختيځ افريقا وخت","ختيځ افريقا وخت"]},"Africa/Kampala":{"long":["ختيځ افريقا وخت","ختيځ افريقا وخت"]},"Indian/Mayotte":{"long":["ختيځ افريقا وخت","ختيځ افريقا وخت"]},"Africa/Johannesburg":{"long":["جنوبي افريقا معياري وخت","جنوبي افريقا معياري وخت"]},"Africa/Maseru":{"long":["جنوبي افريقا معياري وخت","جنوبي افريقا معياري وخت"]},"Africa/Mbabane":{"long":["جنوبي افريقا معياري وخت","جنوبي افريقا معياري وخت"]},"Africa/Lagos":{"long":["لویدیځ افریقایي معیاري وخت","د افریقا افریقا لویدیځ وخت"]},"Africa/Luanda":{"long":["لویدیځ افریقایي معیاري وخت","د افریقا افریقا لویدیځ وخت"]},"Africa/Porto-Novo":{"long":["لویدیځ افریقایي معیاري وخت","د افریقا افریقا لویدیځ وخت"]},"Africa/Kinshasa":{"long":["لویدیځ افریقایي معیاري وخت","د افریقا افریقا لویدیځ وخت"]},"Africa/Bangui":{"long":["لویدیځ افریقایي معیاري وخت","د افریقا افریقا لویدیځ وخت"]},"Africa/Brazzaville":{"long":["لویدیځ افریقایي معیاري وخت","د افریقا افریقا لویدیځ وخت"]},"Africa/Douala":{"long":["لویدیځ افریقایي معیاري وخت","د افریقا افریقا لویدیځ وخت"]},"Africa/Libreville":{"long":["لویدیځ افریقایي معیاري وخت","د افریقا افریقا لویدیځ وخت"]},"Africa/Malabo":{"long":["لویدیځ افریقایي معیاري وخت","د افریقا افریقا لویدیځ وخت"]},"Africa/Niamey":{"long":["لویدیځ افریقایي معیاري وخت","د افریقا افریقا لویدیځ وخت"]},"Africa/Ndjamena":{"long":["لویدیځ افریقایي معیاري وخت","د افریقا افریقا لویدیځ وخت"]},"Asia/Aqtobe":{"long":["لویدیځ قزاقستان وخت","لویدیځ قزاقستان وخت"]},"America/Juneau":{"long":["الاسکا معياري وخت","الاسکا د ورځې روښانه وخت"]},"Asia/Almaty":{"long":["ختيځ قازقستان وخت","ختيځ قازقستان وخت"]},"America/Manaus":{"long":["ایمیزون معیاری وخت","ایمیزون اوړي وخت"]},"America/Chicago":{"long":["مرکزي معياري وخت","مرکزي د ورځې روښانه وخت"]},"America/Belize":{"long":["مرکزي معياري وخت","مرکزي د ورځې روښانه وخت"]},"America/Winnipeg":{"long":["مرکزي معياري وخت","مرکزي د ورځې روښانه وخت"]},"America/Costa_Rica":{"long":["مرکزي معياري وخت","مرکزي د ورځې روښانه وخت"]},"America/Guatemala":{"long":["مرکزي معياري وخت","مرکزي د ورځې روښانه وخت"]},"America/Tegucigalpa":{"long":["مرکزي معياري وخت","مرکزي د ورځې روښانه وخت"]},"America/Mexico_City":{"long":["مرکزي معياري وخت","مرکزي د ورځې روښانه وخت"]},"America/El_Salvador":{"long":["مرکزي معياري وخت","مرکزي د ورځې روښانه وخت"]},"America/New_York":{"long":["ختيځ معياري وخت","ختيځ د رڼا ورځې وخت"]},"America/Nassau":{"long":["ختيځ معياري وخت","ختيځ د رڼا ورځې وخت"]},"America/Toronto":{"long":["ختيځ معياري وخت","ختيځ د رڼا ورځې وخت"]},"America/Port-au-Prince":{"long":["ختيځ معياري وخت","ختيځ د رڼا ورځې وخت"]},"America/Jamaica":{"long":["ختيځ معياري وخت","ختيځ د رڼا ورځې وخت"]},"America/Cayman":{"long":["ختيځ معياري وخت","ختيځ د رڼا ورځې وخت"]},"America/Panama":{"long":["ختيځ معياري وخت","ختيځ د رڼا ورځې وخت"]},"America/Denver":{"long":["د غره معياري وخت","د غره د رڼا ورځې وخت"]},"America/Edmonton":{"long":["د غره معياري وخت","د غره د رڼا ورځې وخت"]},"America/Hermosillo":{"long":["د غره معياري وخت","د غره د رڼا ورځې وخت"]},"America/Los_Angeles":{"long":["د پیسفک معياري وخت","پیسفک د رڼا ورځې وخت"]},"America/Vancouver":{"long":["د پیسفک معياري وخت","پیسفک د رڼا ورځې وخت"]},"America/Tijuana":{"long":["د پیسفک معياري وخت","پیسفک د رڼا ورځې وخت"]},"Pacific/Apia":{"long":["اپیا معياري وخت","اپيا د ورځې روښانه وخت"]},"Asia/Riyadh":{"long":["عربي معیاري وخت","عربي د ورځې روښانه وخت"]},"Asia/Bahrain":{"long":["عربي معیاري وخت","عربي د ورځې روښانه وخت"]},"Asia/Baghdad":{"long":["عربي معیاري وخت","عربي د ورځې روښانه وخت"]},"Asia/Kuwait":{"long":["عربي معیاري وخت","عربي د ورځې روښانه وخت"]},"Asia/Qatar":{"long":["عربي معیاري وخت","عربي د ورځې روښانه وخت"]},"Asia/Aden":{"long":["عربي معیاري وخت","عربي د ورځې روښانه وخت"]},"America/Buenos_Aires":{"long":["ارجنټاین معیاری وخت","ارجنټاین اوړي وخت"]},"America/Argentina/San_Luis":{"long":["لوېديځ ارجنټاين معياري وخت","لوېديځ ارجنټاين اوړي وخت"]},"Asia/Ashgabat":{"long":["ترکمنستان معياري وخت","ترکمنستان اوړي وخت"]},"America/Halifax":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Antigua":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Anguilla":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Aruba":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Barbados":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"Atlantic/Bermuda":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Kralendijk":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Curacao":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Dominica":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Grenada":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Thule":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Guadeloupe":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/St_Kitts":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/St_Lucia":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Marigot":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Martinique":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Montserrat":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Puerto_Rico":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Lower_Princes":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Port_of_Spain":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/St_Vincent":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/Tortola":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"America/St_Thomas":{"long":["اتلانتیک معياري وخت","اتلانتیک د رڼا ورځې وخت"]},"Australia/Adelaide":{"long":["آسترالوي مرکزي معياري وخت","آسترالوي مرکزي د ورځې روښانه وخت"]},"Australia/Eucla":{"long":["آسترالوي مرکزي لوېديځ معياري وخت","آسترالوي مرکزي لوېديځ د ورځې روښانه وخت"]},"Australia/Sydney":{"long":["آسترالوي ختيځ معياري وخت","آسترالوي ختيځ د ورځې روښانه وخت"]},"Australia/Perth":{"long":["آسترالوي لوېديځ معياري وخت","آسترالوي لوېديځ د ورځې روښانه وخت"]},"Atlantic/Azores":{"long":["ايزورس معياري وخت","ايزورس اوړي وخت"]},"Asia/Thimphu":{"long":["بهوټان وخت","بهوټان وخت"]},"America/La_Paz":{"long":["بولیویا وخت","بولیویا وخت"]},"Asia/Kuching":{"long":["ملائیشیا وخت","ملائیشیا وخت"]},"America/Sao_Paulo":{"long":["برسلیا معیاری وخت","برسلیا اوړي وخت"]},"Europe/London":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Asia/Brunei":{"long":["برونايي دارالسلام وخت","برونايي دارالسلام وخت"]},"Atlantic/Cape_Verde":{"long":["کیپ وردډ معياري وخت","کیپ وردډ سمر وخت"]},"Pacific/Chatham":{"long":["چاتام معياري وخت","چاتام د ورځې روښانه وخت"]},"America/Santiago":{"long":["چلی معیاری وخت","چلی اوړي وخت"]},"Asia/Shanghai":{"long":["چین معیاري وخت","د چين د رڼا ورځې وخت"]},"Asia/Choibalsan":{"long":["چوئیبیلسن معیاری وخت","چوئیبیلسن اوړي وخت"]},"Indian/Christmas":{"long":["کريسمس ټاپو وخت","کريسمس ټاپو وخت"]},"Indian/Cocos":{"long":["کوکوز ټاپوګانو وخت","کوکوز ټاپوګانو وخت"]},"America/Bogota":{"long":["کولمبیا معیاری وخت","کولمبیا اوړي وخت"]},"Pacific/Rarotonga":{"long":["کوک ټاپوګانو معياري وخت","کوک ټاپوګانو نيم اوړي وخت"]},"America/Havana":{"long":["کیوبا معياري وخت","کیوبا د رڼا ورځې وخت"]},"Antarctica/Davis":{"long":["ډيوس وخت","ډيوس وخت"]},"Antarctica/DumontDUrville":{"long":["ډومونټ ډي ارول","ډومونټ ډي ارول"]},"Asia/Dushanbe":{"long":["تاجکستان وخت","تاجکستان وخت"]},"America/Paramaribo":{"long":["سورینام وخت","سورینام وخت"]},"Asia/Dili":{"long":["ختيځ تيمور وخت","ختيځ تيمور وخت"]},"Pacific/Easter":{"long":["ايستر ټاپو معياري وخت","ايستر ټاپو اوړي وخت"]},"America/Guayaquil":{"long":["د اکوادور وخت","د اکوادور وخت"]},"Europe/Paris":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Andorra":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Tirane":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Vienna":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Sarajevo":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Brussels":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Zurich":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Prague":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Berlin":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Copenhagen":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Madrid":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Gibraltar":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Zagreb":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Budapest":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Rome":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Vaduz":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Luxembourg":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Monaco":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Podgorica":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Skopje":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Malta":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Amsterdam":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Oslo":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Warsaw":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Belgrade":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Stockholm":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Ljubljana":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Arctic/Longyearbyen":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Bratislava":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/San_Marino":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Africa/Tunis":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Vatican":{"long":["د مرکزي اروپا معیاري وخت","وسطي اروپايي د اوړي وخت"]},"Europe/Bucharest":{"long":["ختيځ اروپايي معياري وخت","ختيځ اروپايي اوړي وخت"]},"Europe/Mariehamn":{"long":["ختيځ اروپايي معياري وخت","ختيځ اروپايي اوړي وخت"]},"Europe/Sofia":{"long":["ختيځ اروپايي معياري وخت","ختيځ اروپايي اوړي وخت"]},"Asia/Nicosia":{"long":["ختيځ اروپايي معياري وخت","ختيځ اروپايي اوړي وخت"]},"Africa/Cairo":{"long":["ختيځ اروپايي معياري وخت","ختيځ اروپايي اوړي وخت"]},"Europe/Helsinki":{"long":["ختيځ اروپايي معياري وخت","ختيځ اروپايي اوړي وخت"]},"Europe/Athens":{"long":["ختيځ اروپايي معياري وخت","ختيځ اروپايي اوړي وخت"]},"Asia/Amman":{"long":["ختيځ اروپايي معياري وخت","ختيځ اروپايي اوړي وخت"]},"Asia/Beirut":{"long":["ختيځ اروپايي معياري وخت","ختيځ اروپايي اوړي وخت"]},"Asia/Damascus":{"long":["ختيځ اروپايي معياري وخت","ختيځ اروپايي اوړي وخت"]},"Europe/Minsk":{"long":["لرې ختيځ اروپايي وخت","لرې ختيځ اروپايي وخت"]},"Europe/Kaliningrad":{"long":["لرې ختيځ اروپايي وخت","لرې ختيځ اروپايي وخت"]},"Atlantic/Canary":{"long":["لوېديځ اروپايي معياري وخت","لوېديځ اروپايي اوړي وخت"]},"Atlantic/Faeroe":{"long":["لوېديځ اروپايي معياري وخت","لوېديځ اروپايي اوړي وخت"]},"Atlantic/Stanley":{"long":["د فوکلنډ ټاپو معیاری وخت","د فوکلنډ ټاپو اوړي وخت"]},"Pacific/Fiji":{"long":["فجی معياري وخت","فجي د اوړي وخت"]},"America/Cayenne":{"long":["د فرانسوي ګانا وخت","د فرانسوي ګانا وخت"]},"Indian/Kerguelen":{"long":["د فرانسې سویل او انټارټيک وخت","د فرانسې سویل او انټارټيک وخت"]},"Asia/Bishkek":{"long":["کرغیزستان وخت","کرغیزستان وخت"]},"Pacific/Galapagos":{"long":["ګالپګوس وخت","ګالپګوس وخت"]},"Pacific/Gambier":{"long":["ګيمبير وخت","ګيمبير وخت"]},"Pacific/Tarawa":{"long":["جلبرټ ټاپوګانو وخت","جلبرټ ټاپوګانو وخت"]},"Atlantic/Reykjavik":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Africa/Ouagadougou":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Africa/Abidjan":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Africa/Accra":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Africa/Banjul":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Africa/Conakry":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Africa/Bamako":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Africa/Nouakchott":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Atlantic/St_Helena":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Africa/Freetown":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Africa/Dakar":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"Africa/Lome":{"long":["ګرينويچ معياري وخت","ګرينويچ معياري وخت"]},"America/Scoresbysund":{"long":["د ختیځ ګرینلینډ معياري وخت","د ختیځ ګرینلینډ اوړي وخت"]},"America/Godthab":{"long":["لویدیځ ګرینلینډ معياري وخت","لویدیځ ګرینلینډ اوړي وخت"]},"Asia/Dubai":{"long":["خلیج معياري وخت","خلیج معياري وخت"]},"Asia/Muscat":{"long":["خلیج معياري وخت","خلیج معياري وخت"]},"America/Guyana":{"long":["د ګوانانا وخت","د ګوانانا وخت"]},"Pacific/Honolulu":{"long":["هوایی الیوتین معیاری وخت","هوایی الیوتین رڼا ورځې وخت"]},"Asia/Hong_Kong":{"long":["هانګ کانګ معياري وخت","هانګ کانګ اوړي وخت"]},"Asia/Hovd":{"long":["هاوډ معیاری وخت","هاوډ اوړي وخت"]},"Asia/Calcutta":{"long":["هند معیاري وخت","هند معیاري وخت"]},"Indian/Chagos":{"long":["د هند سمندر وخت","د هند سمندر وخت"]},"Asia/Bangkok":{"long":["انډوچاینه وخت","انډوچاینه وخت"]},"Asia/Phnom_Penh":{"long":["انډوچاینه وخت","انډوچاینه وخت"]},"Asia/Vientiane":{"long":["انډوچاینه وخت","انډوچاینه وخت"]},"Asia/Makassar":{"long":["مرکزي ادونيزيا وخت","مرکزي ادونيزيا وخت"]},"Asia/Jayapura":{"long":["اندونیزیا وخت","اندونیزیا وخت"]},"Asia/Jakarta":{"long":["لویدیځ اندونیزیا وخت","لویدیځ اندونیزیا وخت"]},"Asia/Tehran":{"long":["ایران معياري وخت","ايران د ورځې روښانه وخت"]},"Asia/Irkutsk":{"long":["ارکوټسک معياري وخت","ارکوټسک اوړي وخت"]},"Asia/Jerusalem":{"long":["اسراییل معياري وخت","اسراييل د ورځې روښانه وخت"]},"Asia/Tokyo":{"long":["جاپان معياري وخت","جاپان د ورځې روښانه وخت"]},"Asia/Karachi":{"long":["پاکستان معیاري وخت","پاکستان اوړي وخت"]},"Asia/Seoul":{"long":["کوريايي معياري وخت","کوريايي د ورځې روښانه وخت"]},"Pacific/Kosrae":{"long":["کوسراي وخت","کوسراي وخت"]},"Asia/Krasnoyarsk":{"long":["کريسنويارسک معياري وخت","کريسنويارسک اوړي وخت"]},"Pacific/Kiritimati":{"long":["لاين ټاپوګانو وخت","لاين ټاپوګانو وخت"]},"Australia/Lord_Howe":{"long":["لارډ هوي معياري وخت","لارډ هوي د ورځې روښانه وخت"]},"Antarctica/Macquarie":{"long":["مکواري ټاپو وخت","مکواري ټاپو وخت"]},"Asia/Magadan":{"long":["ميګډان معياري وخت","ميګډان اوړي وخت"]},"Indian/Maldives":{"long":["مالديپ وخت","مالديپ وخت"]},"Pacific/Marquesas":{"long":["مارکسس وخت","مارکسس وخت"]},"Pacific/Majuro":{"long":["مارشل ټاپوګانو وخت","مارشل ټاپوګانو وخت"]},"Indian/Mauritius":{"long":["ماریشیس معياري وخت","ماريشيس د اوړي وخت"]},"Antarctica/Mawson":{"long":["ماوسن وخت","ماوسن وخت"]},"America/Santa_Isabel":{"long":["د شمال لویدیځ مکسیکو معیاري وخت","د شمال لویدیځ مکسیکو رڼا ورځې وخت"]},"America/Mazatlan":{"long":["مکسیکن پیسفک معیاری وخت","مکسیکن پیسفک رڼا ورځې وخت"]},"Asia/Ulaanbaatar":{"long":["اولان باټر معیاري وخت","اولان باټر اوړي وخت"]},"Europe/Moscow":{"long":["ماسکو معياري وخت","ماسکو سمر وخت"]},"Asia/Rangoon":{"long":["میانمار وخت","میانمار وخت"]},"Pacific/Nauru":{"long":["ناورو وخت","ناورو وخت"]},"Asia/Katmandu":{"long":["نیپال وخت","نیپال وخت"]},"Pacific/Noumea":{"long":["نيو کالیډونیا معياري وخت","نيو کايډونيا اوړي وخت"]},"Pacific/Auckland":{"long":["نيوزي لېنډ معياري وخت","نيوزي لېنډ د ورځې روښانه وخت"]},"Antarctica/McMurdo":{"long":["نيوزي لېنډ معياري وخت","نيوزي لېنډ د ورځې روښانه وخت"]},"America/St_Johns":{"long":["د نوي فیلډلینډ معیاری وخت","نيو فاونډلېنډ د ورځې روښانه وخت"]},"Pacific/Niue":{"long":["نییو وخت","نییو وخت"]},"Pacific/Norfolk":{"long":["د نورفکاس ټاپو معياري وخت","د نورفکاس ټاپو اوړي وخت"]},"America/Noronha":{"long":["فرنانڈو دي نورونها معیاری وخت","فرنانڈو دي نورونھا اوړي وخت"]},"Asia/Novosibirsk":{"long":["نووسيبرسک معياري وخت","نووسيبرسک اوړي وخت"]},"Asia/Omsk":{"long":["اومسک معياري وخت","اومسک اوړي وخت"]},"Pacific/Palau":{"long":["پالاو وخت","پالاو وخت"]},"Pacific/Port_Moresby":{"long":["پاپوا نیو ګنی وخت","پاپوا نیو ګنی وخت"]},"America/Asuncion":{"long":["پیراګوای معياري وخت","پاراګوای اوړي وخت"]},"America/Lima":{"long":["پیرو معياري وخت","پیرو اوړي وخت"]},"Asia/Manila":{"long":["فلپاين معياري وخت","فلپاين اوړي وخت"]},"Pacific/Enderbury":{"long":["د فینکس ټاپو وخت","د فینکس ټاپو وخت"]},"America/Miquelon":{"long":["سینټ پییرا و ميکلين معیاری وخت","سینټ پییرا و ميکلين رڼا ورځې وخت"]},"Pacific/Pitcairn":{"long":["پیټ کارین وخت","پیټ کارین وخت"]},"Pacific/Ponape":{"long":["پونيپ وخت","پونيپ وخت"]},"Asia/Pyongyang":{"long":["پيانګ يانګ وخت","پيانګ يانګ وخت"]},"Indian/Reunion":{"long":["ري يونين وخت","ري يونين وخت"]},"Antarctica/Rothera":{"long":["رودرا وخت","رودرا وخت"]},"Asia/Sakhalin":{"long":["سخلین معياري وخت","سخلين اوړي وخت"]},"Pacific/Pago_Pago":{"long":["سموا معياري وخت","سموا د ورځې روښانه وخت"]},"Indian/Mahe":{"long":["سیچیلس وخت","سیچیلس وخت"]},"Asia/Singapore":{"long":["سنګاپور معیاري وخت","سنګاپور معیاري وخت"]},"Pacific/Guadalcanal":{"long":["سلیمان ټاپوګانو وخت","سلیمان ټاپوګانو وخت"]},"Atlantic/South_Georgia":{"long":["د سویل جورجیا وخت","د سویل جورجیا وخت"]},"Asia/Yekaterinburg":{"long":["د ياکيټرنبرګ معياري وخت","د ياکټرنبرګ د اوړي وخت"]},"Antarctica/Syowa":{"long":["سیوا وخت","سیوا وخت"]},"Pacific/Tahiti":{"long":["ټهيټي وخت","ټهيټي وخت"]},"Asia/Taipei":{"long":["تايپي معياري وخت","تايپي د ورځې روښانه وخت"]},"Asia/Tashkent":{"long":["ازبکستان معياري وخت","ازبکستان اوړي وخت"]},"Pacific/Fakaofo":{"long":["توکیلاو وخت","توکیلاو وخت"]},"Pacific/Tongatapu":{"long":["د ټونګ معياري وخت","ټونګا اوړي وخت"]},"Pacific/Truk":{"long":["چوک وخت","چوک وخت"]},"Pacific/Funafuti":{"long":["تووالو وخت","تووالو وخت"]},"America/Montevideo":{"long":["یوروګوای معياري وخت","یوروګوای اوړي وخت"]},"Pacific/Efate":{"long":["ونواتو معياري وخت","ونواتو اوړي وخت"]},"America/Caracas":{"long":["وینزویلا وخت","وینزویلا وخت"]},"Asia/Vladivostok":{"long":["ولاديوستاک معياري وخت","ولاديوستاک اوړي وخت"]},"Europe/Volgograd":{"long":["والګوګراد معياري وخت","والګوګراد اوړي وخت"]},"Antarctica/Vostok":{"long":["واستوک وخت","واستوک وخت"]},"Pacific/Wake":{"long":["ويک تاپو وخت","ويک تاپو وخت"]},"Pacific/Wallis":{"long":["والس او فوتونا وخت","والس او فوتونا وخت"]},"Asia/Yakutsk":{"long":["ياکوټسک معياري وخت","ياکوټسک د اوړي وخت"]},"UTC":{"long":["همغږى نړیوال وخت","همغږى نړیوال وخت"],"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"EEEE د y د MMMM d","long":"د y د MMMM d","medium":"y MMM d","short":"y/M/d"},"timeFormat":{"full":"H:mm:ss (zzzz)","long":"H:mm:ss (z)","medium":"H:mm:ss","short":"H:mm"},"dateTimeFormat":{"full":"{1} {0}","long":"{1} {0}","medium":"{1} {0}","short":"{1} {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"d, E","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"G y","GyMMM":"G y MMM","GyMMMd":"G y MMM d","GyMMMEd":"G y MMM d, E","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"MM-dd","MEd":"MM-dd, E","MMM":"LLL","MMMd":"MMM d","MMMEd":"E, MMM d","MMMMd":"MMMM d","ms":"mm:ss","y":"y","yM":"y-MM","yMd":"y-MM-dd","yMEd":"y-MM-dd, E","yMMM":"y MMM","yMMMd":"y MMM d","yMMMEd":"y MMM d, E","yMMMM":"y MMMM","EEEE د y د MMMM d":"EEEE د y د MMMM d","د y د MMMM d":"د y د MMMM d","y MMM d":"y MMM d","y/M/d":"y/M/d","H:mm:ss (zzzz)":"H:mm:ss (zzzz)","H:mm:ss (z)":"H:mm:ss (z)","H:mm:ss":"H:mm:ss","H:mm":"H:mm","EEEE د y د MMMM d H:mm:ss (zzzz)":"EEEE د y د MMMM d H:mm:ss (zzzz)","د y د MMMM d H:mm:ss (zzzz)":"د y د MMMM d H:mm:ss (zzzz)","y MMM d H:mm:ss (zzzz)":"y MMM d H:mm:ss (zzzz)","y/M/d H:mm:ss (zzzz)":"y/M/d H:mm:ss (zzzz)","d H:mm:ss (zzzz)":"d H:mm:ss (zzzz)","E H:mm:ss (zzzz)":"ccc H:mm:ss (zzzz)","Ed H:mm:ss (zzzz)":"d, E H:mm:ss (zzzz)","Gy H:mm:ss (zzzz)":"G y H:mm:ss (zzzz)","GyMMM H:mm:ss (zzzz)":"G y MMM H:mm:ss (zzzz)","GyMMMd H:mm:ss (zzzz)":"G y MMM d H:mm:ss (zzzz)","GyMMMEd H:mm:ss (zzzz)":"G y MMM d, E H:mm:ss (zzzz)","M H:mm:ss (zzzz)":"L H:mm:ss (zzzz)","Md H:mm:ss (zzzz)":"MM-dd H:mm:ss (zzzz)","MEd H:mm:ss (zzzz)":"MM-dd, E H:mm:ss (zzzz)","MMM H:mm:ss (zzzz)":"LLL H:mm:ss (zzzz)","MMMd H:mm:ss (zzzz)":"MMM d H:mm:ss (zzzz)","MMMEd H:mm:ss (zzzz)":"E, MMM d H:mm:ss (zzzz)","MMMMd H:mm:ss (zzzz)":"MMMM d H:mm:ss (zzzz)","y H:mm:ss (zzzz)":"y H:mm:ss (zzzz)","yM H:mm:ss (zzzz)":"y-MM H:mm:ss (zzzz)","yMd H:mm:ss (zzzz)":"y-MM-dd H:mm:ss (zzzz)","yMEd H:mm:ss (zzzz)":"y-MM-dd, E H:mm:ss (zzzz)","yMMM H:mm:ss (zzzz)":"y MMM H:mm:ss (zzzz)","yMMMd H:mm:ss (zzzz)":"y MMM d H:mm:ss (zzzz)","yMMMEd H:mm:ss (zzzz)":"y MMM d, E H:mm:ss (zzzz)","yMMMM H:mm:ss (zzzz)":"y MMMM H:mm:ss (zzzz)","EEEE د y د MMMM d H:mm:ss (z)":"EEEE د y د MMMM d H:mm:ss (z)","د y د MMMM d H:mm:ss (z)":"د y د MMMM d H:mm:ss (z)","y MMM d H:mm:ss (z)":"y MMM d H:mm:ss (z)","y/M/d H:mm:ss (z)":"y/M/d H:mm:ss (z)","d H:mm:ss (z)":"d H:mm:ss (z)","E H:mm:ss (z)":"ccc H:mm:ss (z)","Ed H:mm:ss (z)":"d, E H:mm:ss (z)","Gy H:mm:ss (z)":"G y H:mm:ss (z)","GyMMM H:mm:ss (z)":"G y MMM H:mm:ss (z)","GyMMMd H:mm:ss (z)":"G y MMM d H:mm:ss (z)","GyMMMEd H:mm:ss (z)":"G y MMM d, E H:mm:ss (z)","M H:mm:ss (z)":"L H:mm:ss (z)","Md H:mm:ss (z)":"MM-dd H:mm:ss (z)","MEd H:mm:ss (z)":"MM-dd, E H:mm:ss (z)","MMM H:mm:ss (z)":"LLL H:mm:ss (z)","MMMd H:mm:ss (z)":"MMM d H:mm:ss (z)","MMMEd H:mm:ss (z)":"E, MMM d H:mm:ss (z)","MMMMd H:mm:ss (z)":"MMMM d H:mm:ss (z)","y H:mm:ss (z)":"y H:mm:ss (z)","yM H:mm:ss (z)":"y-MM H:mm:ss (z)","yMd H:mm:ss (z)":"y-MM-dd H:mm:ss (z)","yMEd H:mm:ss (z)":"y-MM-dd, E H:mm:ss (z)","yMMM H:mm:ss (z)":"y MMM H:mm:ss (z)","yMMMd H:mm:ss (z)":"y MMM d H:mm:ss (z)","yMMMEd H:mm:ss (z)":"y MMM d, E H:mm:ss (z)","yMMMM H:mm:ss (z)":"y MMMM H:mm:ss (z)","EEEE د y د MMMM d H:mm:ss":"EEEE د y د MMMM d H:mm:ss","د y د MMMM d H:mm:ss":"د y د MMMM d H:mm:ss","y MMM d H:mm:ss":"y MMM d H:mm:ss","y/M/d H:mm:ss":"y/M/d H:mm:ss","d H:mm:ss":"d H:mm:ss","E H:mm:ss":"ccc H:mm:ss","Ed H:mm:ss":"d, E H:mm:ss","Gy H:mm:ss":"G y H:mm:ss","GyMMM H:mm:ss":"G y MMM H:mm:ss","GyMMMd H:mm:ss":"G y MMM d H:mm:ss","GyMMMEd H:mm:ss":"G y MMM d, E H:mm:ss","M H:mm:ss":"L H:mm:ss","Md H:mm:ss":"MM-dd H:mm:ss","MEd H:mm:ss":"MM-dd, E H:mm:ss","MMM H:mm:ss":"LLL H:mm:ss","MMMd H:mm:ss":"MMM d H:mm:ss","MMMEd H:mm:ss":"E, MMM d H:mm:ss","MMMMd H:mm:ss":"MMMM d H:mm:ss","y H:mm:ss":"y H:mm:ss","yM H:mm:ss":"y-MM H:mm:ss","yMd H:mm:ss":"y-MM-dd H:mm:ss","yMEd H:mm:ss":"y-MM-dd, E H:mm:ss","yMMM H:mm:ss":"y MMM H:mm:ss","yMMMd H:mm:ss":"y MMM d H:mm:ss","yMMMEd H:mm:ss":"y MMM d, E H:mm:ss","yMMMM H:mm:ss":"y MMMM H:mm:ss","EEEE د y د MMMM d H:mm":"EEEE د y د MMMM d H:mm","د y د MMMM d H:mm":"د y د MMMM d H:mm","y MMM d H:mm":"y MMM d H:mm","y/M/d H:mm":"y/M/d H:mm","d H:mm":"d H:mm","E H:mm":"ccc H:mm","Ed H:mm":"d, E H:mm","Gy H:mm":"G y H:mm","GyMMM H:mm":"G y MMM H:mm","GyMMMd H:mm":"G y MMM d H:mm","GyMMMEd H:mm":"G y MMM d, E H:mm","M H:mm":"L H:mm","Md H:mm":"MM-dd H:mm","MEd H:mm":"MM-dd, E H:mm","MMM H:mm":"LLL H:mm","MMMd H:mm":"MMM d H:mm","MMMEd H:mm":"E, MMM d H:mm","MMMMd H:mm":"MMMM d H:mm","y H:mm":"y H:mm","yM H:mm":"y-MM H:mm","yMd H:mm":"y-MM-dd H:mm","yMEd H:mm":"y-MM-dd, E H:mm","yMMM H:mm":"y MMM H:mm","yMMMd H:mm":"y MMM d H:mm","yMMMEd H:mm":"y MMM d, E H:mm","yMMMM H:mm":"y MMMM H:mm","EEEE د y د MMMM d Bh":"EEEE د y د MMMM d h B","د y د MMMM d Bh":"د y د MMMM d h B","y MMM d Bh":"y MMM d h B","y/M/d Bh":"y/M/d h B","d Bh":"d h B","E Bh":"ccc h B","Ed Bh":"d, E h B","Gy Bh":"G y h B","GyMMM Bh":"G y MMM h B","GyMMMd Bh":"G y MMM d h B","GyMMMEd Bh":"G y MMM d, E h B","M Bh":"L h B","Md Bh":"MM-dd h B","MEd Bh":"MM-dd, E h B","MMM Bh":"LLL h B","MMMd Bh":"MMM d h B","MMMEd Bh":"E, MMM d h B","MMMMd Bh":"MMMM d h B","y Bh":"y h B","yM Bh":"y-MM h B","yMd Bh":"y-MM-dd h B","yMEd Bh":"y-MM-dd, E h B","yMMM Bh":"y MMM h B","yMMMd Bh":"y MMM d h B","yMMMEd Bh":"y MMM d, E h B","yMMMM Bh":"y MMMM h B","EEEE د y د MMMM d Bhm":"EEEE د y د MMMM d h:mm B","د y د MMMM d Bhm":"د y د MMMM d h:mm B","y MMM d Bhm":"y MMM d h:mm B","y/M/d Bhm":"y/M/d h:mm B","d Bhm":"d h:mm B","E Bhm":"ccc h:mm B","Ed Bhm":"d, E h:mm B","Gy Bhm":"G y h:mm B","GyMMM Bhm":"G y MMM h:mm B","GyMMMd Bhm":"G y MMM d h:mm B","GyMMMEd Bhm":"G y MMM d, E h:mm B","M Bhm":"L h:mm B","Md Bhm":"MM-dd h:mm B","MEd Bhm":"MM-dd, E h:mm B","MMM Bhm":"LLL h:mm B","MMMd Bhm":"MMM d h:mm B","MMMEd Bhm":"E, MMM d h:mm B","MMMMd Bhm":"MMMM d h:mm B","y Bhm":"y h:mm B","yM Bhm":"y-MM h:mm B","yMd Bhm":"y-MM-dd h:mm B","yMEd Bhm":"y-MM-dd, E h:mm B","yMMM Bhm":"y MMM h:mm B","yMMMd Bhm":"y MMM d h:mm B","yMMMEd Bhm":"y MMM d, E h:mm B","yMMMM Bhm":"y MMMM h:mm B","EEEE د y د MMMM d Bhms":"EEEE د y د MMMM d h:mm:ss B","د y د MMMM d Bhms":"د y د MMMM d h:mm:ss B","y MMM d Bhms":"y MMM d h:mm:ss B","y/M/d Bhms":"y/M/d h:mm:ss B","d Bhms":"d h:mm:ss B","E Bhms":"ccc h:mm:ss B","Ed Bhms":"d, E h:mm:ss B","Gy Bhms":"G y h:mm:ss B","GyMMM Bhms":"G y MMM h:mm:ss B","GyMMMd Bhms":"G y MMM d h:mm:ss B","GyMMMEd Bhms":"G y MMM d, E h:mm:ss B","M Bhms":"L h:mm:ss B","Md Bhms":"MM-dd h:mm:ss B","MEd Bhms":"MM-dd, E h:mm:ss B","MMM Bhms":"LLL h:mm:ss B","MMMd Bhms":"MMM d h:mm:ss B","MMMEd Bhms":"E, MMM d h:mm:ss B","MMMMd Bhms":"MMMM d h:mm:ss B","y Bhms":"y h:mm:ss B","yM Bhms":"y-MM h:mm:ss B","yMd Bhms":"y-MM-dd h:mm:ss B","yMEd Bhms":"y-MM-dd, E h:mm:ss B","yMMM Bhms":"y MMM h:mm:ss B","yMMMd Bhms":"y MMM d h:mm:ss B","yMMMEd Bhms":"y MMM d, E h:mm:ss B","yMMMM Bhms":"y MMMM h:mm:ss B","EEEE د y د MMMM d h":"EEEE د y د MMMM d h a","د y د MMMM d h":"د y د MMMM d h a","y MMM d h":"y MMM d h a","y/M/d h":"y/M/d h a","d h":"d h a","E h":"ccc h a","Ed h":"d, E h a","Gy h":"G y h a","GyMMM h":"G y MMM h a","GyMMMd h":"G y MMM d h a","GyMMMEd h":"G y MMM d, E h a","M h":"L h a","Md h":"MM-dd h a","MEd h":"MM-dd, E h a","MMM h":"LLL h a","MMMd h":"MMM d h a","MMMEd h":"E, MMM d h a","MMMMd h":"MMMM d h a","y h":"y h a","yM h":"y-MM h a","yMd h":"y-MM-dd h a","yMEd h":"y-MM-dd, E h a","yMMM h":"y MMM h a","yMMMd h":"y MMM d h a","yMMMEd h":"y MMM d, E h a","yMMMM h":"y MMMM h a","EEEE د y د MMMM d H":"EEEE د y د MMMM d HH","د y د MMMM d H":"د y د MMMM d HH","y MMM d H":"y MMM d HH","y/M/d H":"y/M/d HH","d H":"d HH","E H":"ccc HH","Ed H":"d, E HH","Gy H":"G y HH","GyMMM H":"G y MMM HH","GyMMMd H":"G y MMM d HH","GyMMMEd H":"G y MMM d, E HH","M H":"L HH","Md H":"MM-dd HH","MEd H":"MM-dd, E HH","MMM H":"LLL HH","MMMd H":"MMM d HH","MMMEd H":"E, MMM d HH","MMMMd H":"MMMM d HH","y H":"y HH","yM H":"y-MM HH","yMd H":"y-MM-dd HH","yMEd H":"y-MM-dd, E HH","yMMM H":"y MMM HH","yMMMd H":"y MMM d HH","yMMMEd H":"y MMM d, E HH","yMMMM H":"y MMMM HH","EEEE د y د MMMM d hm":"EEEE د y د MMMM d h:mm a","د y د MMMM d hm":"د y د MMMM d h:mm a","y MMM d hm":"y MMM d h:mm a","y/M/d hm":"y/M/d h:mm a","d hm":"d h:mm a","E hm":"ccc h:mm a","Ed hm":"d, E h:mm a","Gy hm":"G y h:mm a","GyMMM hm":"G y MMM h:mm a","GyMMMd hm":"G y MMM d h:mm a","GyMMMEd hm":"G y MMM d, E h:mm a","M hm":"L h:mm a","Md hm":"MM-dd h:mm a","MEd hm":"MM-dd, E h:mm a","MMM hm":"LLL h:mm a","MMMd hm":"MMM d h:mm a","MMMEd hm":"E, MMM d h:mm a","MMMMd hm":"MMMM d h:mm a","y hm":"y h:mm a","yM hm":"y-MM h:mm a","yMd hm":"y-MM-dd h:mm a","yMEd hm":"y-MM-dd, E h:mm a","yMMM hm":"y MMM h:mm a","yMMMd hm":"y MMM d h:mm a","yMMMEd hm":"y MMM d, E h:mm a","yMMMM hm":"y MMMM h:mm a","EEEE د y د MMMM d Hm":"EEEE د y د MMMM d HH:mm","د y د MMMM d Hm":"د y د MMMM d HH:mm","y MMM d Hm":"y MMM d HH:mm","y/M/d Hm":"y/M/d HH:mm","d Hm":"d HH:mm","E Hm":"ccc HH:mm","Ed Hm":"d, E HH:mm","Gy Hm":"G y HH:mm","GyMMM Hm":"G y MMM HH:mm","GyMMMd Hm":"G y MMM d HH:mm","GyMMMEd Hm":"G y MMM d, E HH:mm","M Hm":"L HH:mm","Md Hm":"MM-dd HH:mm","MEd Hm":"MM-dd, E HH:mm","MMM Hm":"LLL HH:mm","MMMd Hm":"MMM d HH:mm","MMMEd Hm":"E, MMM d HH:mm","MMMMd Hm":"MMMM d HH:mm","y Hm":"y HH:mm","yM Hm":"y-MM HH:mm","yMd Hm":"y-MM-dd HH:mm","yMEd Hm":"y-MM-dd, E HH:mm","yMMM Hm":"y MMM HH:mm","yMMMd Hm":"y MMM d HH:mm","yMMMEd Hm":"y MMM d, E HH:mm","yMMMM Hm":"y MMMM HH:mm","EEEE د y د MMMM d hms":"EEEE د y د MMMM d h:mm:ss a","د y د MMMM d hms":"د y د MMMM d h:mm:ss a","y MMM d hms":"y MMM d h:mm:ss a","y/M/d hms":"y/M/d h:mm:ss a","d hms":"d h:mm:ss a","E hms":"ccc h:mm:ss a","Ed hms":"d, E h:mm:ss a","Gy hms":"G y h:mm:ss a","GyMMM hms":"G y MMM h:mm:ss a","GyMMMd hms":"G y MMM d h:mm:ss a","GyMMMEd hms":"G y MMM d, E h:mm:ss a","M hms":"L h:mm:ss a","Md hms":"MM-dd h:mm:ss a","MEd hms":"MM-dd, E h:mm:ss a","MMM hms":"LLL h:mm:ss a","MMMd hms":"MMM d h:mm:ss a","MMMEd hms":"E, MMM d h:mm:ss a","MMMMd hms":"MMMM d h:mm:ss a","y hms":"y h:mm:ss a","yM hms":"y-MM h:mm:ss a","yMd hms":"y-MM-dd h:mm:ss a","yMEd hms":"y-MM-dd, E h:mm:ss a","yMMM hms":"y MMM h:mm:ss a","yMMMd hms":"y MMM d h:mm:ss a","yMMMEd hms":"y MMM d, E h:mm:ss a","yMMMM hms":"y MMMM h:mm:ss a","EEEE د y د MMMM d Hms":"EEEE د y د MMMM d HH:mm:ss","د y د MMMM d Hms":"د y د MMMM d HH:mm:ss","y MMM d Hms":"y MMM d HH:mm:ss","y/M/d Hms":"y/M/d HH:mm:ss","d Hms":"d HH:mm:ss","E Hms":"ccc HH:mm:ss","Ed Hms":"d, E HH:mm:ss","Gy Hms":"G y HH:mm:ss","GyMMM Hms":"G y MMM HH:mm:ss","GyMMMd Hms":"G y MMM d HH:mm:ss","GyMMMEd Hms":"G y MMM d, E HH:mm:ss","M Hms":"L HH:mm:ss","Md Hms":"MM-dd HH:mm:ss","MEd Hms":"MM-dd, E HH:mm:ss","MMM Hms":"LLL HH:mm:ss","MMMd Hms":"MMM d HH:mm:ss","MMMEd Hms":"E, MMM d HH:mm:ss","MMMMd Hms":"MMMM d HH:mm:ss","y Hms":"y HH:mm:ss","yM Hms":"y-MM HH:mm:ss","yMd Hms":"y-MM-dd HH:mm:ss","yMEd Hms":"y-MM-dd, E HH:mm:ss","yMMM Hms":"y MMM HH:mm:ss","yMMMd Hms":"y MMM d HH:mm:ss","yMMMEd Hms":"y MMM d, E HH:mm:ss","yMMMM Hms":"y MMMM HH:mm:ss","EEEE د y د MMMM d hmsv":"EEEE د y د MMMM d h:mm:ss a v","د y د MMMM d hmsv":"د y د MMMM d h:mm:ss a v","y MMM d hmsv":"y MMM d h:mm:ss a v","y/M/d hmsv":"y/M/d h:mm:ss a v","d hmsv":"d h:mm:ss a v","E hmsv":"ccc h:mm:ss a v","Ed hmsv":"d, E h:mm:ss a v","Gy hmsv":"G y h:mm:ss a v","GyMMM hmsv":"G y MMM h:mm:ss a v","GyMMMd hmsv":"G y MMM d h:mm:ss a v","GyMMMEd hmsv":"G y MMM d, E h:mm:ss a v","M hmsv":"L h:mm:ss a v","Md hmsv":"MM-dd h:mm:ss a v","MEd hmsv":"MM-dd, E h:mm:ss a v","MMM hmsv":"LLL h:mm:ss a v","MMMd hmsv":"MMM d h:mm:ss a v","MMMEd hmsv":"E, MMM d h:mm:ss a v","MMMMd hmsv":"MMMM d h:mm:ss a v","y hmsv":"y h:mm:ss a v","yM hmsv":"y-MM h:mm:ss a v","yMd hmsv":"y-MM-dd h:mm:ss a v","yMEd hmsv":"y-MM-dd, E h:mm:ss a v","yMMM hmsv":"y MMM h:mm:ss a v","yMMMd hmsv":"y MMM d h:mm:ss a v","yMMMEd hmsv":"y MMM d, E h:mm:ss a v","yMMMM hmsv":"y MMMM h:mm:ss a v","EEEE د y د MMMM d Hmsv":"EEEE د y د MMMM d HH:mm:ss v","د y د MMMM d Hmsv":"د y د MMMM d HH:mm:ss v","y MMM d Hmsv":"y MMM d HH:mm:ss v","y/M/d Hmsv":"y/M/d HH:mm:ss v","d Hmsv":"d HH:mm:ss v","E Hmsv":"ccc HH:mm:ss v","Ed Hmsv":"d, E HH:mm:ss v","Gy Hmsv":"G y HH:mm:ss v","GyMMM Hmsv":"G y MMM HH:mm:ss v","GyMMMd Hmsv":"G y MMM d HH:mm:ss v","GyMMMEd Hmsv":"G y MMM d, E HH:mm:ss v","M Hmsv":"L HH:mm:ss v","Md Hmsv":"MM-dd HH:mm:ss v","MEd Hmsv":"MM-dd, E HH:mm:ss v","MMM Hmsv":"LLL HH:mm:ss v","MMMd Hmsv":"MMM d HH:mm:ss v","MMMEd Hmsv":"E, MMM d HH:mm:ss v","MMMMd Hmsv":"MMMM d HH:mm:ss v","y Hmsv":"y HH:mm:ss v","yM Hmsv":"y-MM HH:mm:ss v","yMd Hmsv":"y-MM-dd HH:mm:ss v","yMEd Hmsv":"y-MM-dd, E HH:mm:ss v","yMMM Hmsv":"y MMM HH:mm:ss v","yMMMd Hmsv":"y MMM d HH:mm:ss v","yMMMEd Hmsv":"y MMM d, E HH:mm:ss v","yMMMM Hmsv":"y MMMM HH:mm:ss v","EEEE د y د MMMM d hmv":"EEEE د y د MMMM d h:mm a v","د y د MMMM d hmv":"د y د MMMM d h:mm a v","y MMM d hmv":"y MMM d h:mm a v","y/M/d hmv":"y/M/d h:mm a v","d hmv":"d h:mm a v","E hmv":"ccc h:mm a v","Ed hmv":"d, E h:mm a v","Gy hmv":"G y h:mm a v","GyMMM hmv":"G y MMM h:mm a v","GyMMMd hmv":"G y MMM d h:mm a v","GyMMMEd hmv":"G y MMM d, E h:mm a v","M hmv":"L h:mm a v","Md hmv":"MM-dd h:mm a v","MEd hmv":"MM-dd, E h:mm a v","MMM hmv":"LLL h:mm a v","MMMd hmv":"MMM d h:mm a v","MMMEd hmv":"E, MMM d h:mm a v","MMMMd hmv":"MMMM d h:mm a v","y hmv":"y h:mm a v","yM hmv":"y-MM h:mm a v","yMd hmv":"y-MM-dd h:mm a v","yMEd hmv":"y-MM-dd, E h:mm a v","yMMM hmv":"y MMM h:mm a v","yMMMd hmv":"y MMM d h:mm a v","yMMMEd hmv":"y MMM d, E h:mm a v","yMMMM hmv":"y MMMM h:mm a v","EEEE د y د MMMM d Hmv":"EEEE د y د MMMM d HH:mm v","د y د MMMM d Hmv":"د y د MMMM d HH:mm v","y MMM d Hmv":"y MMM d HH:mm v","y/M/d Hmv":"y/M/d HH:mm v","d Hmv":"d HH:mm v","E Hmv":"ccc HH:mm v","Ed Hmv":"d, E HH:mm v","Gy Hmv":"G y HH:mm v","GyMMM Hmv":"G y MMM HH:mm v","GyMMMd Hmv":"G y MMM d HH:mm v","GyMMMEd Hmv":"G y MMM d, E HH:mm v","M Hmv":"L HH:mm v","Md Hmv":"MM-dd HH:mm v","MEd Hmv":"MM-dd, E HH:mm v","MMM Hmv":"LLL HH:mm v","MMMd Hmv":"MMM d HH:mm v","MMMEd Hmv":"E, MMM d HH:mm v","MMMMd Hmv":"MMMM d HH:mm v","y Hmv":"y HH:mm v","yM Hmv":"y-MM HH:mm v","yMd Hmv":"y-MM-dd HH:mm v","yMEd Hmv":"y-MM-dd, E HH:mm v","yMMM Hmv":"y MMM HH:mm v","yMMMd Hmv":"y MMM d HH:mm v","yMMMEd Hmv":"y MMM d, E HH:mm v","yMMMM Hmv":"y MMMM HH:mm v","EEEE د y د MMMM d ms":"EEEE د y د MMMM d mm:ss","د y د MMMM d ms":"د y د MMMM d mm:ss","y MMM d ms":"y MMM d mm:ss","y/M/d ms":"y/M/d mm:ss","d ms":"d mm:ss","E ms":"ccc mm:ss","Ed ms":"d, E mm:ss","Gy ms":"G y mm:ss","GyMMM ms":"G y MMM mm:ss","GyMMMd ms":"G y MMM d mm:ss","GyMMMEd ms":"G y MMM d, E mm:ss","M ms":"L mm:ss","Md ms":"MM-dd mm:ss","MEd ms":"MM-dd, E mm:ss","MMM ms":"LLL mm:ss","MMMd ms":"MMM d mm:ss","MMMEd ms":"E, MMM d mm:ss","MMMMd ms":"MMMM d mm:ss","y ms":"y mm:ss","yM ms":"y-MM mm:ss","yMd ms":"y-MM-dd mm:ss","yMEd ms":"y-MM-dd, E mm:ss","yMMM ms":"y MMM mm:ss","yMMMd ms":"y MMM d mm:ss","yMMMEd ms":"y MMM d, E mm:ss","yMMMM ms":"y MMMM mm:ss"}},"hourCycle":"h23","nu":["arabext"],"ca":["persian","gregory","islamic","islamicc","islamic-tbla"],"hc":["h23","","","h12"]}},"availableLocales":["ps"]}
)
  }}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
