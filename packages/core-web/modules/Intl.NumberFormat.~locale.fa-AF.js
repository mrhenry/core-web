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
(function(undefined) {
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("fa-AF",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("fa-AF").length
)) {
// Intl.NumberFormat.~locale.fa-AF
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"fa-AF":{"units":{"simple":{"degree":{"long":{"other":"{0} درجه"},"short":{"other":"{0} درجه"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} هکتار"},"short":{"other":"{0} هکتار"},"narrow":{"other":"{0}ha"},"perUnit":{}},"acre":{"long":{"other":"{0} جریب"},"short":{"other":"{0} جریب"},"narrow":{"other":"{0} جریب","one":"{0}جریب"},"perUnit":{}},"percent":{"long":{"other":"{0} درصد"},"short":{"other":"{0}٪"},"narrow":{"other":"{0}٪"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} لیتر در کیلومتر"},"short":{"other":"{0} ل./ک.م."},"narrow":{"other":"{0} ل./ک.م."},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} مایل در گالن"},"short":{"other":"{0} مایل در گالن"},"narrow":{"other":"{0} مایل در گالن"},"perUnit":{}},"petabyte":{"long":{"other":"{0} پتابایت"},"short":{"other":"{0} پتابایت"},"narrow":{"other":"{0} پتابایت"},"perUnit":{}},"terabyte":{"long":{"other":"{0} ترابایت"},"short":{"other":"{0} ترابایت"},"narrow":{"other":"{0} ترابایت"},"perUnit":{}},"terabit":{"long":{"other":"{0} ترابیت"},"short":{"other":"{0} ترابیت"},"narrow":{"other":"{0} ترابیت"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} گیگابایت"},"short":{"other":"{0} گیگابایت"},"narrow":{"other":"{0} گیگابایت"},"perUnit":{}},"gigabit":{"long":{"other":"{0} گیگابیت"},"short":{"other":"{0} گیگابیت"},"narrow":{"other":"{0} گیگابیت"},"perUnit":{}},"megabyte":{"long":{"other":"{0} مگابایت"},"short":{"other":"{0} مگابایت"},"narrow":{"other":"{0} مگابایت"},"perUnit":{}},"megabit":{"long":{"other":"{0} مگابیت"},"short":{"other":"{0} مگابیت"},"narrow":{"other":"{0} مگابیت"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} کیلوبایت"},"short":{"other":"{0} کیلوبایت"},"narrow":{"other":"{0} کیلوبایت"},"perUnit":{}},"kilobit":{"long":{"other":"{0} کیلوبیت"},"short":{"other":"{0} کیلوبیت"},"narrow":{"other":"{0} کیلوبیت"},"perUnit":{}},"byte":{"long":{"other":"{0} بایت"},"short":{"other":"{0} بایت"},"narrow":{"other":"{0} بایت"},"perUnit":{}},"bit":{"long":{"other":"{0} بیت"},"short":{"other":"{0} بیت"},"narrow":{"other":"{0} بیت"},"perUnit":{}},"year":{"long":{"other":"{0} سال"},"short":{"other":"{0} سال"},"narrow":{"other":"{0} سال"},"perUnit":{"long":"{0} در سال","short":"{0}/سال","narrow":"{0}/سال"}},"month":{"long":{"other":"{0} ماه"},"short":{"other":"{0} ماه"},"narrow":{"other":"{0} ماه"},"perUnit":{"long":"{0} در ماه","short":"{0}/ماه","narrow":"{0}/ماه"}},"week":{"long":{"other":"{0} هفته"},"short":{"other":"{0} هفته"},"narrow":{"other":"{0} هفته"},"perUnit":{"long":"{0} در هفته","short":"{0}/هفته","narrow":"{0}/هفته"}},"day":{"long":{"other":"{0} روز"},"short":{"other":"{0} روز"},"narrow":{"other":"{0} روز"},"perUnit":{"long":"{0} در روز","short":"{0}/روز","narrow":"{0}/روز"}},"hour":{"long":{"other":"{0} ساعت"},"short":{"other":"{0} ساعت"},"narrow":{"other":"{0} ساعت"},"perUnit":{"long":"{0} در ساعت","short":"{0} در ساعت","narrow":"{0}/ساعت"}},"minute":{"long":{"other":"{0} دقیقه"},"short":{"other":"{0} دقیقه"},"narrow":{"other":"{0} دقیقه"},"perUnit":{"long":"{0} در دقیقه","short":"{0}/دقیقه","narrow":"{0}/دقیقه"}},"second":{"long":{"other":"{0} ثانیه"},"short":{"other":"{0} ثانیه"},"narrow":{"other":"{0} ث"},"perUnit":{"long":"{0} در ثانیه","short":"{0} در ثانیه","narrow":"{0}/ث"}},"millisecond":{"long":{"other":"{0} میلی‌ثانیه"},"short":{"other":"{0} میلی‌ثانیه"},"narrow":{"other":"{0}ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0} کیلومتر"},"short":{"other":"{0} کیلومتر"},"narrow":{"other":"{0}km"},"perUnit":{"long":"{0} در کیلومتر","short":"{0} در کیلومتر","narrow":"{0} در کیلومتر"}},"meter":{"long":{"other":"{0} متر"},"short":{"other":"{0} متر"},"narrow":{"other":"{0} متر"},"perUnit":{"long":"{0} در متر","short":"{0} در متر","narrow":"{0}/متر"}},"centimeter":{"long":{"other":"{0} سانتی‌متر"},"short":{"other":"{0} سانت"},"narrow":{"other":"{0} سانت"},"perUnit":{"long":"{0} در سانتی‌متر","short":"{0}/سانت","narrow":"{0}/سانت"}},"millimeter":{"long":{"other":"{0} میلی‌متر"},"short":{"other":"{0} م‌م"},"narrow":{"other":"{0} م‌م"},"perUnit":{}},"mile":{"long":{"other":"{0} مایل"},"short":{"other":"{0} مایل"},"narrow":{"other":"{0}mi"},"perUnit":{}},"yard":{"long":{"other":"{0} یارد"},"short":{"other":"{0} یارد"},"narrow":{"other":"{0} یارد"},"perUnit":{}},"foot":{"long":{"other":"{0} فوت"},"short":{"other":"{0} فوت"},"narrow":{"other":"{0}ft"},"perUnit":{"long":"{0}/فوت","short":"{0}/فوت","narrow":"{0}/فوت"}},"inch":{"long":{"other":"{0} اینچ"},"short":{"other":"{0} اینچ"},"narrow":{"other":"{0}in"},"perUnit":{"long":"{0} در اینچ","short":"{0}/اینچ","narrow":"{0}/اینچ"}},"mile-scandinavian":{"long":{"other":"{0} مایل اسکاندیناوی"},"short":{"other":"{0}‎ smi"},"narrow":{"other":"{0}‎ smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} کیلوگرم"},"short":{"other":"{0} کیلوگرم"},"narrow":{"other":"{0}kg"},"perUnit":{"long":"{0} در کیلوگرم","short":"{0} در کیلوگرم","narrow":"{0} در کیلوگرم"}},"gram":{"long":{"other":"{0} گرم"},"short":{"other":"{0} گرم"},"narrow":{"other":"{0} گرم"},"perUnit":{"long":"{0} در گرم","short":"{0} در گرم","narrow":"{0} در گرم"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} سنگ"},"perUnit":{}},"pound":{"long":{"other":"{0} پوند"},"short":{"other":"{0} پوند"},"narrow":{"other":"{0}lb"},"perUnit":{"long":"{0} در پوند","short":"{0} در پوند","narrow":"{0} در پوند"}},"ounce":{"long":{"other":"{0} اونس"},"short":{"other":"{0} اونس"},"narrow":{"other":"{0}oz"},"perUnit":{"long":"{0} در اونس","short":"{0} در اونس","narrow":"{0} در اونس"}},"kilometer-per-hour":{"long":{"other":"{0} کیلومتر در ساعت"},"short":{"other":"{0}‎ km/h"},"narrow":{"other":"{0}‎ km/h"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} متر در ثانیه"},"short":{"other":"{0} متردرثانیه"},"narrow":{"other":"{0}m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} مایل در ساعت"},"short":{"other":"{0}‎ mph"},"narrow":{"other":"{0}mph"},"perUnit":{}},"celsius":{"long":{"other":"{0} درجهٔ سلسیوس"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} درجهٔ فارنهایت"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} لیتر"},"short":{"other":"{0} لیتر"},"narrow":{"other":"{0} لیتر"},"perUnit":{"long":"{0} در لیتر","short":"{0} در لیتر","narrow":"{0} در لیتر"}},"milliliter":{"long":{"other":"{0} میلی‌لیتر"},"short":{"other":"{0} میلی‌لیتر"},"narrow":{"other":"{0} میلی‌لیتر"},"perUnit":{}},"gallon":{"long":{"other":"{0} گالن"},"short":{"other":"{0} گالن"},"narrow":{"other":"{0} گالن"},"perUnit":{"long":"{0} در گالن","short":"{0} در گالن","narrow":"{0} در گالن"}},"fluid-ounce":{"long":{"other":"{0} اونس سیال"},"short":{"other":"{0}‎ fl oz"},"narrow":{"other":"{0}‎ fl oz"},"perUnit":{}}},"compound":{"per":{"long":"{0} در {1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"پزتای آندورا"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"درهم امارات متحدهٔ عربی"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"افغانی افغانستان (۱۹۲۷ تا ۲۰۰۲)"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"افغانی افغانستان"},"symbol":"؋","narrow":"؋"},"ALK":{"displayName":{"other":"لک آلبانی (۱۹۴۶ تا ۱۹۶۵)"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"لک آلبانی"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"درام ارمنستان"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"گیلدر آنتیل هلند"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"کوانزای آنگولا"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"پزوی آرژانتین (۱۸۸۱ تا ۱۹۷۰)"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"پزوی آرژانتین (۱۹۸۳ تا ۱۹۸۵)"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"پزوی آرژانتین"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"شیلینگ اتریش"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"دلار استرالیا"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"فلورین آروبا"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"منات جمهوری آذربایجان (۱۹۹۳ تا ۲۰۰۶)"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"منات جمهوری آذربایجان"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"دینار بوسنی و هرزگوین (۱۹۹۲ تا ۱۹۹۴)"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"مارک تبدیل‌پذیر بوسنی و هرزگوین"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"دلار باربادوس"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"تاکای بنگلادش"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"فرانک بلژیک"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"فرانک بلژیک (مالی)"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"لف بلغارستان"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"دینار بحرین"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"فرانک بوروندی"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"دلار برمودا"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"دلار برونئی"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"بولیویانوی بولیوی"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"پزوی بولیوی"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"رئال برزیل"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"دلار باهاما"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"انگولتروم بوتان"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"پولای بوتسوانا"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"روبل جدید بیلوروسی (۱۹۹۴ تا ۱۹۹۹)"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"روبل بلاروسی"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"روبل بلاروسی (۲۰۱۶–۲۰۰۰)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"دلار بلیز"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"دلار کانادا"},"symbol":"$CA","narrow":"$"},"CDF":{"displayName":{"other":"فرانک کنگو"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"فرانک سوئیس"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"پزوی شیلی"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"یوآن چین (برون‌مرزی)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"یوآن چین"},"symbol":"¥CN","narrow":"¥"},"COP":{"displayName":{"other":"پزوی کلمبیا"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"کولون کاستاریکا"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"دینار صربستان (۲۰۰۲ تا ۲۰۰۶)"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"پزوی تبدیل‌پذیر کوبا"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"پزوی کوبا"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"اسکودوی کیپ‌ورد"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"پوند قبرس"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"کورونای جمهوری چک"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"مارک آلمان شرقی"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"مارک آلمان"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"فرانک جیبوتی"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"کرون دانمارک"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"پزوی جمهوری دومینیکن"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"دینار الجزایر"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"کرون استونی"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"پوند مصر"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"ناکفای اریتره"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"پزتای اسپانیا"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"بیر اتیوپی"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"یورو"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"دلار فیجی"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"پوند جزایر فالکلند"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"فرانک فرانسه"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"پوند بریتانیا"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"لاری گرجستان"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"سدی غنا"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"پوند جبل‌الطارق"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"دالاسی گامبیا"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"فرانک گینه"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"دراخمای یونان"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"کتزال گواتمالا"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"پزوی گینهٔ بیسائو"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"دلار گویانا"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"دلار هنگ‌کنگ"},"symbol":"$HK","narrow":"$"},"HNL":{"displayName":{"other":"لمپیرای هندوراس"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"دینار کرواسی"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"کونای کرواسی"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"گورد هائیتی"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"فورینت مجارستان"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"روپیهٔ اندونزی"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"پوند ایرلند"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"پوند اسرائیل"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"شقل اسرائیل (۱۹۸۰ تا ۱۹۸۵)"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"شقل جدید اسرائیل"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"روپیهٔ هند"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"دینار عراق"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"ریال ایران"},"symbol":"ریال","narrow":"ریال"},"ISJ":{"displayName":{"other":"کرونای ایسلند (۱۹۱۸ تا ۱۹۸۱)"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"کرونای ایسلند"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"لیرهٔ ایتالیا"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"دلار جامائیکا"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"دینار اردن"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"ین ژاپن"},"symbol":"¥","narrow":"¥"},"KES":{"displayName":{"other":"شیلینگ کنیا"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"سوم قرقیزستان"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"ری‌یل کامبوج"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"فرانک کومورو"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"وون کرهٔ شمالی"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"وون کرهٔ جنوبی (۱۹۴۵ تا ۱۹۵۳)"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"وون کرهٔ جنوبی"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"دینار کویت"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"دلار جزایر کِیمن"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"تنگهٔ قزاقستان"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"کیپ لائوس"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"لیرهٔ لبنان"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"روپیهٔ سری‌لانکا"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"دلار لیبریا"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"لوتی لسوتو"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"لیتاس لیتوانی"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"تالوناس لیتوانی"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"فرانک لوکزامبورگ"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"فرانک مالی لوگزامبورگ"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"لاتس لتونی"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"روبل لتونی"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"دینار لیبی"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"درهم مراکش"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"فرانک مراکش"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"فرانک موناکو"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"لئوی مولداوی"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"آریاری مالاگاسی"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"فرانک ماداگاسکار"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"دینار مقدونیه"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"دینار مقدونیه (۱۹۹۲ تا ۱۹۹۳)"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"فرانک مالی"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"کیات میانمار"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"توگریک مغولستان"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"پاتاکای ماکائو"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"اوگوئیای موریتانی (۱۹۷۳ تا ۲۰۱۷)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"اوگوئیای موریتانی"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"لیرهٔ مالت"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"پوند مالت"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"روپیهٔ موریس"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"روپیهٔ مالدیو (۱۹۴۷ تا ۱۹۸۱)"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"روپیهٔ مالدیو"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"کواچای مالاوی"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"پزوی مکزیک"},"symbol":"$MX","narrow":"$"},"MXP":{"displayName":{"other":"پزوی نقرهٔ مکزیک (۱۸۶۱ تا ۱۹۹۲)"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"رینگیت مالزی"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"اسکودوی موزامبیک"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"MZM"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"متیکال موزامبیک"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"دلار نامیبیا"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"نایرای نیجریه"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"کوردوبای نیکاراگوئه"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"گیلدر هلند"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"کرون نروژ"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"روپیهٔ نپال"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"دلار زلاند نو"},"symbol":"$NZ","narrow":"$"},"OMR":{"displayName":{"other":"ریال عمان"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"بالبوای پاناما"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"اینتی پرو"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"سول پرو"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"سول پرو (۱۸۶۳ تا ۱۹۶۵)"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"کینای پاپوا گینهٔ نو"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"پزوی فیلیپین"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"روپیهٔ پاکستان"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"زواتی لهستان"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"اسکودوی پرتغال"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"گوارانی پاراگوئه"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"ریال قطر"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"دلار رودزیا"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"لئوی رومانی"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"دینار صربستان"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"روبل روسیه"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"روبل روسیه (۱۹۹۱ تا ۱۹۹۸)"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"فرانک رواندا"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"ریال سعودی"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"دلار جزایر سلیمان"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"روپیهٔ سیشل"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"دینار سودان (۱۹۹۲ تا ۲۰۰۷)"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"پوند سودان"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"کرون سوئد"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"دلار سنگاپور"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"پوند سنت هلن"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"لئون سیرالئون"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"شیلینگ سومالی"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"دلار سورینام"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"گیلدر سورینام"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"پوند سودان جنوبی"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"دوبرای سائوتومه و پرنسیپ (۱۹۷۷ تا ۲۰۱۷)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"دوبرای سائوتومه و پرنسیپ"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"روبل شوروی"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"لیرهٔ سوریه"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"لیلانگنی سوازیلند"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"بات تایلند"},"symbol":"฿","narrow":"฿"},"TJR":{"displayName":{"other":"روبل تاجیکستان"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"سامانی تاجیکستان"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"منات ترکمنستان (۱۹۹۳ تا ۲۰۰۹)"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"منات ترکمنستان"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"دینار تونس"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"پاآنگای تونگا"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"اسکودوی تیمور"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"لیرهٔ ترکیه (۱۹۲۲ تا ۲۰۰۵)"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"لیرهٔ ترکیه"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"دلار ترینیداد و توباگو"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"دلار جدید تایوان"},"symbol":"NT$","narrow":"$"},"TZS":{"displayName":{"other":"شیلینگ تانزانیا"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"هریونیای اوکراین"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"شیلینگ اوگاندا (۱۹۶۶ تا ۱۹۸۷)"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"شیلینگ اوگاندا"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"دلار امریکا"},"symbol":"$","narrow":"$"},"USN":{"displayName":{"other":"دلار امریکا (روز بعد)"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"دلار امریکا (همان روز)"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"پزوی اوروگوئه (۱۹۷۵ تا ۱۹۹۳)"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"پزوی اوروگوئه"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"سوم ازبکستان"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"بولیوار ونزوئلا (۱۸۷۱ تا ۲۰۰۸)"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"بولیوار ونزوئلا (۲۰۰۸ تا ۲۰۱۸)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"بولیوار ونزوئلا"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"دانگ ویتنام"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"واتوی وانوواتو"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"تالای ساموا"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"فرانک CFA مرکز افریقا"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"اونس تروا نقره"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"اونس تروا طلا"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"دلار شرق کارائیب"},"symbol":"$EC","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"فرانک طلای فرانسه"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"فرانک CFA غرب افریقا"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"پالادیم"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"فرانک اقیانوسیه"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"اونس تروا پلاتین"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"واحد ارز آزمایشی"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(ارز نامشخص)","one":"(واحد ارز نامشخص)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"دینار یمن"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"ریال یمن"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"راند افریقای جنوبی"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"کواچای زامبیا (۱۹۶۸ تا ۲۰۱۲)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"کواچای زامبیا"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"دلار زیمبابوه (۱۹۸۰ تا ۲۰۰۸)"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"دلار زیمبابوه (۲۰۰۹)"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"دلار زیمبابوه (۲۰۰۸)"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["arabext","latn"],"symbols":{"arabext":{"decimal":"٫","group":"٬","list":"؛","percentSign":"٪","plusSign":"‎+","minusSign":"‎−","exponential":"×۱۰^","superscriptingExponent":"×","perMille":"؉","infinity":"∞","nan":"ناعدد","timeSeparator":":"},"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"‎+","minusSign":"‎−","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"ناعدد","timeSeparator":":"}},"percent":{"arabext":"#,##0%","latn":"#,##0%"},"decimal":{"arabext":{"standard":"#,##0.###","long":{"1000":{"other":"0 هزار"},"10000":{"other":"00 هزار"},"100000":{"other":"000 هزار"},"1000000":{"other":"0 میلیون"},"10000000":{"other":"00 میلیون"},"100000000":{"other":"000 میلیون"},"1000000000":{"other":"0 میلیارد"},"10000000000":{"other":"00 میلیارد"},"100000000000":{"other":"000 میلیارد"},"1000000000000":{"other":"0 هزارمیلیارد"},"10000000000000":{"other":"00 هزارمیلیارد"},"100000000000000":{"other":"000 هزارمیلیارد"}},"short":{"1000":{"other":"0 هزار"},"10000":{"other":"00 هزار"},"100000":{"other":"000 هزار"},"1000000":{"other":"0 میلیون"},"10000000":{"other":"00 میلیون"},"100000000":{"other":"000 م"},"1000000000":{"other":"0 م"},"10000000000":{"other":"00 م"},"100000000000":{"other":"000 میلیارد","one":"000 ب"},"1000000000000":{"other":"0 تریلیون","one":"0 ت"},"10000000000000":{"other":"00 ت"},"100000000000000":{"other":"000 ت"}}},"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 هزار"},"10000":{"other":"00 هزار"},"100000":{"other":"000 هزار"},"1000000":{"other":"0 میلیون"},"10000000":{"other":"00 میلیون"},"100000000":{"other":"000 میلیون"},"1000000000":{"other":"0 میلیارد"},"10000000000":{"other":"00 میلیارد"},"100000000000":{"other":"000 میلیارد"},"1000000000000":{"other":"0 هزارمیلیارد"},"10000000000000":{"other":"00 هزارمیلیارد"},"100000000000000":{"other":"000 هزارمیلیارد"}},"short":{"1000":{"other":"0 هزار"},"10000":{"other":"00 هزار"},"100000":{"other":"000 هزار"},"1000000":{"other":"0 میلیون"},"10000000":{"other":"00 میلیون"},"100000000":{"other":"000 م"},"1000000000":{"other":"0 م"},"10000000000":{"other":"00 م"},"100000000000":{"other":"000 میلیارد","one":"000 ب"},"1000000000000":{"other":"0 تریلیون","one":"0 ت"},"10000000000000":{"other":"00 ت"},"100000000000000":{"other":"000 ت"}}}},"currency":{"arabext":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤ #,##0.00","accounting":"¤ #,##0.00;‎(¤ #,##0.00)","unitPattern":"{0} {1}","short":{"1000":{"other":"0 هزار ¤"},"10000":{"other":"00 هزار ¤"},"100000":{"other":"000 هزار ¤"},"1000000":{"other":"0 میلیون ¤"},"10000000":{"other":"00 میلیون ¤"},"100000000":{"other":"000 میلیون ¤"},"1000000000":{"other":"0 میلیارد ¤"},"10000000000":{"other":"00 میلیارد ¤"},"100000000000":{"other":"000 میلیارد ¤"},"1000000000000":{"other":"0 هزارمیلیارد ¤"},"10000000000000":{"other":"00 هزارمیلیارد ¤"},"100000000000000":{"other":"000 هزارمیلیارد ¤"}}},"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤ #,##0.00","accounting":"¤ #,##0.00;‎(¤ #,##0.00)","unitPattern":"{0} {1}","short":{"1000":{"other":"0 هزار ¤"},"10000":{"other":"00 هزار ¤"},"100000":{"other":"000 هزار ¤"},"1000000":{"other":"0 میلیون ¤"},"10000000":{"other":"00 میلیون ¤"},"100000000":{"other":"000 میلیون ¤"},"1000000000":{"other":"0 میلیارد ¤"},"10000000000":{"other":"00 میلیارد ¤"},"100000000000":{"other":"000 میلیارد ¤"},"1000000000000":{"other":"0 هزارمیلیارد ¤"},"10000000000000":{"other":"00 هزارمیلیارد ¤"},"100000000000000":{"other":"000 هزارمیلیارد ¤"}}}}},"nu":["arabext","latn"]}},"availableLocales":["fa-AF"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
