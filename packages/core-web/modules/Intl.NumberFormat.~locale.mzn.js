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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("mzn",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("mzn").length
)) {
// Intl.NumberFormat.~locale.mzn
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"{0}°"},"short":{"other":"{0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} ha"},"short":{"other":"{0} ha"},"narrow":{"other":"{0} ha"},"perUnit":{}},"acre":{"long":{"other":"{0} ac"},"short":{"other":"{0} ac"},"narrow":{"other":"{0} ac"},"perUnit":{}},"percent":{"long":{"other":"{0}%"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} L/km"},"short":{"other":"{0} L/km"},"narrow":{"other":"{0} L/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} mpg"},"short":{"other":"{0} mpg"},"narrow":{"other":"{0} mpg"},"perUnit":{}},"petabyte":{"long":{"other":"{0} PB"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} ترابایت"},"short":{"other":"{0} ترابایت"},"narrow":{"other":"{0} ترابایت"},"perUnit":{}},"terabit":{"long":{"other":"{0} ترابیت"},"short":{"other":"{0} ترابیت"},"narrow":{"other":"{0} ترابیت"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} گیگابایت"},"short":{"other":"{0} گیگابایت"},"narrow":{"other":"{0} گیگابایت"},"perUnit":{}},"gigabit":{"long":{"other":"{0} گیگابیت"},"short":{"other":"{0} گیگابیت"},"narrow":{"other":"{0} گیگابیت"},"perUnit":{}},"megabyte":{"long":{"other":"{0} مگابایت"},"short":{"other":"{0} مگابایت"},"narrow":{"other":"{0} مگابایت"},"perUnit":{}},"megabit":{"long":{"other":"{0} مگابیت"},"short":{"other":"{0} مگابیت"},"narrow":{"other":"{0} مگابیت"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} کیلوبایت"},"short":{"other":"{0} کیلوبایت"},"narrow":{"other":"{0} کیلوبایت"},"perUnit":{}},"kilobit":{"long":{"other":"{0} کیلوبیت"},"short":{"other":"{0} کیلوبیت"},"narrow":{"other":"{0} کیلوبیت"},"perUnit":{}},"byte":{"long":{"other":"{0} بایت"},"short":{"other":"{0} بایت"},"narrow":{"other":"{0} بایت"},"perUnit":{}},"bit":{"long":{"other":"{0} بیت"},"short":{"other":"{0} بیت"},"narrow":{"other":"{0} بیت"},"perUnit":{}},"year":{"long":{"other":"{0} سال"},"short":{"other":"{0} سال"},"narrow":{"other":"{0} سال"},"perUnit":{"long":"{0} سال پیش","short":"{0} سال","narrow":"{0} سال"}},"month":{"long":{"other":"{0} ماه"},"short":{"other":"{0} ماه"},"narrow":{"other":"{0} ماه"},"perUnit":{"long":"{0} ماه پیش","short":"{0} ماه","narrow":"{0} ماه"}},"week":{"long":{"other":"{0} هفته"},"short":{"other":"{0} هفته"},"narrow":{"other":"{0} هفته"},"perUnit":{"long":"{0} هفته پیش","short":"{0} هفته","narrow":"{0} هفته"}},"day":{"long":{"other":"{0} روز"},"short":{"other":"{0} روز"},"narrow":{"other":"{0} روز"},"perUnit":{"long":"{0} روز","short":"{0} روز","narrow":"{0} روز"}},"hour":{"long":{"other":"{0} ساعِت"},"short":{"other":"{0} h"},"narrow":{"other":"{0} ساعِت"},"perUnit":{"long":"{0} ساعِت","short":"{0} ساعِت","narrow":"{0} ساعِت"}},"minute":{"long":{"other":"{0} دقیقه"},"short":{"other":"{0} دَقه"},"narrow":{"other":"{0} دَقه"},"perUnit":{"long":"{0} دَقه","short":"{0} دَقه","narrow":"{0} دَقه"}},"second":{"long":{"other":"{0} ثانیه"},"short":{"other":"{0} ثانیه"},"narrow":{"other":"{0} ثانیه"},"perUnit":{"long":"{0} ثانیه","short":"{0} ثانیه","narrow":"{0} ثانیه"}},"millisecond":{"long":{"other":"{0} میلی‌ثانیه"},"short":{"other":"{0} میلی‌ثانیه"},"narrow":{"other":"{0} میلی‌ثانیه"},"perUnit":{}},"kilometer":{"long":{"other":"{0} km"},"short":{"other":"{0} km"},"narrow":{"other":"{0} km"},"perUnit":{"long":"{0}/km","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} m"},"short":{"other":"{0} m"},"narrow":{"other":"{0} m"},"perUnit":{"long":"{0}/m","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} cm"},"short":{"other":"{0} cm"},"narrow":{"other":"{0} cm"},"perUnit":{"long":"{0}/cm","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0} mm"},"short":{"other":"{0} mm"},"narrow":{"other":"{0} mm"},"perUnit":{}},"mile":{"long":{"other":"{0} mi"},"short":{"other":"{0} mi"},"narrow":{"other":"{0} mi"},"perUnit":{}},"yard":{"long":{"other":"{0} yd"},"short":{"other":"{0} yd"},"narrow":{"other":"{0} yd"},"perUnit":{}},"foot":{"long":{"other":"{0} ft"},"short":{"other":"{0} ft"},"narrow":{"other":"{0} ft"},"perUnit":{"long":"{0}/ft","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0} in"},"short":{"other":"{0} in"},"narrow":{"other":"{0} in"},"perUnit":{"long":"{0}/in","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} smi"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} کیلوگرم"},"short":{"other":"{0} kg"},"narrow":{"other":"{0} kg"},"perUnit":{"long":"{0} هر کیلوگرم دله","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} گرم"},"short":{"other":"{0} g"},"narrow":{"other":"{0} g"},"perUnit":{"long":"{0} هر گرم دله","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} پوند"},"short":{"other":"{0} lb"},"narrow":{"other":"{0} lb"},"perUnit":{"long":"{0} هر پوند دله","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0} اونس"},"short":{"other":"{0} oz"},"narrow":{"other":"{0} oz"},"perUnit":{"long":"{0} هر اونس دله","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"{0} کیلومتر بر ساعت"},"short":{"other":"{0} km/h"},"narrow":{"other":"{0} km/h"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} متر بر ثانیه"},"short":{"other":"{0} m/s"},"narrow":{"other":"{0} m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} مایل بر ساعت"},"short":{"other":"{0} mi/h"},"narrow":{"other":"{0} mi/h"},"perUnit":{}},"celsius":{"long":{"other":"{0} درجه سلسیوس"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} فارنهایت"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} لیتر"},"short":{"other":"{0} لیتر"},"narrow":{"other":"{0} l"},"perUnit":{"long":"{0} هر لیتر دله","short":"{0}/l","narrow":"{0}/l"}},"milliliter":{"long":{"other":"{0} میلی‌لیتر"},"short":{"other":"{0} mL"},"narrow":{"other":"{0} mL"},"perUnit":{}},"gallon":{"long":{"other":"{0} گالون"},"short":{"other":"{0} gal"},"narrow":{"other":"{0} gal"},"perUnit":{"long":"{0} هر گالون دله","short":"{0}/gal","narrow":"{0}/gal"}},"fluid-ounce":{"long":{"other":"{0} فلوید اونس"},"short":{"other":"{0} fl oz"},"narrow":{"other":"{0} fl oz"},"perUnit":{}}},"compound":{"per":{"long":"{0}/{1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"امارات ِدرهم"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"افغانستون ِافغانی"},"symbol":"AFN","narrow":"؋"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"آلبانی ِلک"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"ارمنستون درهم"},"symbol":"AMD","narrow":"֏"},"ANG":{"displayName":{"other":"هلند ِآنتیل ِجزایر ِگویلدر"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"آنگولای ِکوانزا"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ARP"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"آرژانتین ِپزو"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"AUD"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"آروبای فلورن"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"آذربایجون ِمنات"},"symbol":"AZN","narrow":"₼"},"BAD":{"displayName":{"other":"BAD"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"بوسنی و هرزگوین ِتبدیل‌بَیی مارک"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"باربادوس دلار"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"بنگلادش ِتاکا"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"بلغارستون ِلیوا"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"بحرین ِدینار"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"بوروندی ِفرانک"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"برمودای ِدلار"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"برونئی دلار"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"بولیوی ِبولیویانو"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"برزیل ِرئال"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"باهامای ِدولار"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"بوتان ِنگولتروم"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"بوتساوانای ِپولا"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"بلاروس ِروبل"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"بلاروس ِروبل (۲۰۰۰–۲۰۱۶)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"بلیز دلار"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"کانادای ِدلار"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"کنگوی ِفرانک"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"سوییس ِفرانک"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"شیلی ِپزو"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"CNH"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"چین ِیوآن"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"کلمبیای ِپزو"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"کاستاریکا کولون"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"کوبای تبدیل‌بَیی پزو"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"کوبای پزو"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"عاج ِساحل ِایسکودو"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"چک ِکرون"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"جیبوتی ِفرانک"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"دانمارک ِکورن"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"دومینیکن پزو"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"الجزیره‌ی ِدینار"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"EEK"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"مصر ِپوند"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"اریتره‌ی ِناکفا"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"اتیوپی ِبیر"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"یورو"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"FJD"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"فالکلند ِجزایر ِپوند"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"بریتانیای ِپوند"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"گرجستون ِلاری"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"غنای ِسدی"},"symbol":"GHS","narrow":"GH₵"},"GIP":{"displayName":{"other":"جبل‌طارق ِپوند"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"گامبیای ِدالاسی"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"گینه‌ی ِفرانک"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"گواتمالای ِکتزال"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"گویان دلار"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"هنگ کنگ ِدلار"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"هندوراس لمپیرا"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"کرواسی ِکونا"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"هاییتی گورد"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"مجارستون ِفروینت"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"اندونزی ِروپیه"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"IEP"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"اسراییل ِنو شِکِل"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"هند ِروپیه"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"عراق ِدینار"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"ایران ریال"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"ایسلند کرونا"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"جاماییکا دلار"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"اردن ِدینار"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"جاپون ِین"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"کنیای ِشیلینگ"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"قرقیزستون ِسام"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"کامبوج ِریل"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"کامرون ِفرانک"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"شمالی کره وون"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"جنوبی کره وون"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"کویت ِدینار"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"کایمن جزیره‌ی دلار"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"قراقستون ِتنگ"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"لائوس ِکیپ"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"لبنان ِپوند"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"سریلانکا روپیه"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"لیبریا دلار"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"LSL"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"LTL"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"LVL"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"لیبی ِدینار"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"مراکش ِدرهم"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"مولداوی ِلئو"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"ماداگاسکار ِآریاری"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"MGF"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"مقدونیه‌ی ِدینار"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"میانمار ِکیات"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"مغلستون ِتوگریک"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"ماکائو ِپاتاجا"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"موریتانی ِاوگوئیا (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"موریتانی ِاوگوئیا"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"موریتیان ِروپیه"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"مالدیو ِروفیا"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"مالاوی ِکواچا"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"مکزیک پزو"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"مالزی ِرینگیت"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"MZE"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"MZM"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"موزامبیک متیکال"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"نامبیای ِدلار"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"نیجریه‌ی ِنیارا"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"نیکاراگوئه کوردوبا"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"نروژ ِکرون"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"نپال ِروپیه"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"NZD"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"عمان ِریال"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"پانامای بالبوا"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"پروی ِسول"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"PGK"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"فیلیپین ِپزو"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"پاکستون روپیه"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"لهستون ِزلوتی"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"پاراگوئه‌ی ِگوارانی"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"قطر ِریال"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"رومانی ِلئو"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"صربستون ِدینار"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"روسیه‌ی ِروبل"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"روآندای ِفرانک"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"عربستون ِریال"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"SBD"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"سیشل ِروپیه"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"سودان ِپوند"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"سوئد ِکرون"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"سنگاپور ِدلار"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"سنت هلنای ِپوند"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"سیرالئون ِلئون"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"سومالی ِشیلینگ"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"سورینام ِدولار"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"جنوبی سودان ِپوند"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"سائوتومه و پرینسیپ ِدوبرا (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"سائوتومه و پرینسیپ ِدوبرا"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"سوریه‌ی ِپوند"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"سوازیلند ِلیلانجنی"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"تایلند ِبات"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"تاجیکستون ِسامانی"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"ترکمنستون ِمنات"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"تونس ِدینار"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"TOP"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"ترکیه‌ی ِلیره"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"ترینیداد و توباگوی ِدلار"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"تایوان دلار"},"symbol":"NT$","narrow":"$"},"TZS":{"displayName":{"other":"تانزانیای ِشیلینگ"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"اکراین ِگریونا"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"UGS"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"اوگاندای ِشیلینگ"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"آمریکای ِدلار"},"symbol":"$","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"اروگوئه‌ی ِپزو"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"ازبکستون ِسام"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"VEB"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"ونزوئلایِ بولیوار (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"ونزوئلایِ بولیوار"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"ویتنام ِدنگ"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"VUV"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"WST"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"میونی آفریقای ِسی‌اف‌ای فرانک"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"شرقی کارائیب دلار"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"غربی آفریقای ِسی‌اف‌ای فرانک"},"symbol":"F CFA","narrow":"F CFA"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"XPF"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"XXX"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"یمن ِریال"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"جنوبی آفریقای ِراند"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"ZMK"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"زامبیای ِکواچا"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"ZWD"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["arabext","latn"],"symbols":{"arabext":{"decimal":"٫","group":"٬","list":"؛","percentSign":"٪","plusSign":"‎+‎","minusSign":"‎-‎","approximatelySign":"~","exponential":"×۱۰^","superscriptingExponent":"×","perMille":"؉","infinity":"∞","nan":"NaN","timeSeparator":":"},"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"arabext":"#,##0%","latn":"#,##0%"},"decimal":{"arabext":{"standard":"#,##0.###","long":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0G"},"10000000000":{"other":"00G"},"100000000000":{"other":"000G"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}},"short":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0G"},"10000000000":{"other":"00G"},"100000000000":{"other":"000G"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}}},"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0G"},"10000000000":{"other":"00G"},"100000000000":{"other":"000G"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}},"short":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0G"},"10000000000":{"other":"00G"},"100000000000":{"other":"000G"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}}}},"currency":{"arabext":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤ #,##0.00","accounting":"¤ #,##0.00","unitPattern":"{0} {1}","short":{"1000":{"other":"¤ 0K"},"10000":{"other":"¤ 00K"},"100000":{"other":"¤ 000K"},"1000000":{"other":"¤ 0M"},"10000000":{"other":"¤ 00M"},"100000000":{"other":"¤ 000M"},"1000000000":{"other":"¤ 0G"},"10000000000":{"other":"¤ 00G"},"100000000000":{"other":"¤ 000G"},"1000000000000":{"other":"¤ 0T"},"10000000000000":{"other":"¤ 00T"},"100000000000000":{"other":"¤ 000T"}}},"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤ #,##0.00","accounting":"¤ #,##0.00","unitPattern":"{0} {1}","short":{"1000":{"other":"¤ 0K"},"10000":{"other":"¤ 00K"},"100000":{"other":"¤ 000K"},"1000000":{"other":"¤ 0M"},"10000000":{"other":"¤ 00M"},"100000000":{"other":"¤ 000M"},"1000000000":{"other":"¤ 0G"},"10000000000":{"other":"¤ 00G"},"100000000000":{"other":"¤ 000G"},"1000000000000":{"other":"¤ 0T"},"10000000000000":{"other":"¤ 00T"},"100000000000000":{"other":"¤ 000T"}}}}},"nu":["arabext","latn"]},"locale":"mzn"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
