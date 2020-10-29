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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("ug",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("ug").length
)) {
// Intl.NumberFormat.~locale.ug
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"ug":{"units":{"simple":{"degree":{"long":{"other":"{0} گىرادۇس"},"short":{"other":"{0} گىرادۇس"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} hectares","one":"{0} گېكتار"},"short":{"other":"{0} گېكتار"},"narrow":{"other":"{0}گېكتار"},"perUnit":{}},"acre":{"long":{"other":"{0} ئىنگلىز موسى"},"short":{"other":"{0} ئىنگلىز موسى"},"narrow":{"other":"{0}ac"},"perUnit":{}},"percent":{"long":{"other":"{0}%"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} L/km"},"short":{"other":"{0} L/km"},"narrow":{"other":"{0} L/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} mpg US"},"short":{"other":"{0} mpg US"},"narrow":{"other":"{0} mpg US"},"perUnit":{}},"petabyte":{"long":{"other":"{0} PB"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} TB"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} Tb"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0} Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} GB"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} Gb"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0} Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} MB"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} Mb"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0} Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kB"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kb"},"short":{"other":"{0} kb"},"narrow":{"other":"{0} kb"},"perUnit":{}},"byte":{"long":{"other":"{0} byte"},"short":{"other":"{0} byte"},"narrow":{"other":"{0} byte"},"perUnit":{}},"bit":{"long":{"other":"{0} bit"},"short":{"other":"{0} bit"},"narrow":{"other":"{0} bit"},"perUnit":{}},"year":{"long":{"other":"{0} يىل"},"short":{"other":"{0} يىل"},"narrow":{"other":"{0} يىل"},"perUnit":{"long":"{0}/y","short":"{0}/y","narrow":"{0}/y"}},"month":{"long":{"other":"{0} ئاي"},"short":{"other":"{0} ئاي"},"narrow":{"other":"{0} ئاي"},"perUnit":{"long":"{0}/m","short":"{0}/m","narrow":"{0}/m"}},"week":{"long":{"other":"{0} ھەپتە"},"short":{"other":"{0} ھەپتە"},"narrow":{"other":"{0} ھەپتە"},"perUnit":{"long":"{0}/w","short":"{0}/w","narrow":"{0}/w"}},"day":{"long":{"other":"{0} كۈن"},"short":{"other":"{0} كۈن"},"narrow":{"other":"{0} كۈن"},"perUnit":{"long":"{0}/d","short":"{0}/d","narrow":"{0}/d"}},"hour":{"long":{"other":"{0} سائەت"},"short":{"other":"{0} سائەت"},"narrow":{"other":"{0}h"},"perUnit":{"long":"{0}/h","short":"{0}/h","narrow":"{0}/h"}},"minute":{"long":{"other":"{0} مىنۇت"},"short":{"other":"{0} مىنۇت"},"narrow":{"other":"{0}m"},"perUnit":{"long":"{0}/min","short":"{0}/min","narrow":"{0}/min"}},"second":{"long":{"other":"{0} سېكۇنت"},"short":{"other":"{0} سېكۇنت"},"narrow":{"other":"{0}s"},"perUnit":{"long":"{0}/s","short":"{0}/s","narrow":"{0}/s"}},"millisecond":{"long":{"other":"{0} مىللى سېكۇنت"},"short":{"other":"{0} مىللىسېكۇنت"},"narrow":{"other":"{0}ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0} كىلومېتىر"},"short":{"other":"{0} كىلومېتىر"},"narrow":{"other":"{0}km"},"perUnit":{"long":"{0}/km","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} مېتىر"},"short":{"other":"{0} مېتىر"},"narrow":{"other":"{0}m"},"perUnit":{"long":"{0}/m","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} سانتىمېتىر"},"short":{"other":"{0} سانتىمېتىر"},"narrow":{"other":"{0}cm"},"perUnit":{"long":"{0}/cm","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0} مىللىمېتىر"},"short":{"other":"{0} مىللىمېتىر"},"narrow":{"other":"{0}mm"},"perUnit":{}},"mile":{"long":{"other":"{0} مىل"},"short":{"other":"{0} مىل"},"narrow":{"other":"{0}mi"},"perUnit":{}},"yard":{"long":{"other":"{0} يارد"},"short":{"other":"{0} يارد"},"narrow":{"other":"{0}yd"},"perUnit":{}},"foot":{"long":{"other":"{0} فۇت"},"short":{"other":"{0} پۇت"},"narrow":{"other":"{0}′"},"perUnit":{"long":"{0}/ft","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0} ديۇيم"},"short":{"other":"{0} ئىنگلىز چىسى"},"narrow":{"other":"{0}″"},"perUnit":{"long":"{0}/in","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} smi"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} كىلوگرام"},"short":{"other":"{0} kg"},"narrow":{"other":"{0}kg"},"perUnit":{"long":"{0}/kg","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} گرام"},"short":{"other":"{0} g"},"narrow":{"other":"{0}g"},"perUnit":{"long":"{0}/g","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} قاداق"},"short":{"other":"{0} قاداق"},"narrow":{"other":"{0}#"},"perUnit":{"long":"{0}/lb","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0} ئۇنسىيە"},"short":{"other":"{0} ئۇنسىيە"},"narrow":{"other":"{0}oz"},"perUnit":{"long":"{0}/oz","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"{0} كىلومېتىر ھەر سائەت"},"short":{"other":"{0} سائەت/كىلومېتىر"},"narrow":{"other":"{0}kph"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} مېتىر ھەر سېكۇنت"},"short":{"other":"{0} سېكۇنت/مېتىر"},"narrow":{"other":"{0}m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} مىل ھەر سائەت"},"short":{"other":"{0} سائەت/مىل"},"narrow":{"other":"{0}mph"},"perUnit":{}},"celsius":{"long":{"other":"{0} سېلسىيە گرادۇس"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} فارېنگېيت گرادۇس"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} لىتېر"},"short":{"other":"{0} l"},"narrow":{"other":"{0}l"},"perUnit":{"long":"{0}/l","short":"{0}/l","narrow":"{0}/l"}},"milliliter":{"long":{"other":"{0} mL"},"short":{"other":"{0} mL"},"narrow":{"other":"{0} mL"},"perUnit":{}},"gallon":{"long":{"other":"{0} gal US"},"short":{"other":"{0} gal US"},"narrow":{"other":"{0} gal US"},"perUnit":{"long":"{0}/gal US","short":"{0}/gal US","narrow":"{0}/gal US"}},"fluid-ounce":{"long":{"other":"{0} fl oz US"},"short":{"other":"{0} fl oz US"},"narrow":{"other":"{0} fl oz US"},"perUnit":{}}},"compound":{"per":{"long":"{0}/{1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ئاندورران پېسېتاسى"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"ئەرەب بىرلەشمە خەلىپىلىكى دەرھەمى"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"Aئافغان ئافغانى (1927–2002)","one":"ئافغان ئافغانى (1927–2002)"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"ئافغان ئافغانى"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ئالبانىيە لېكى (1946–1965)"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"ئالبانىيە لېكى"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"ئەرمېنىيە دىرامى"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"گوللاندىيەگە قاراشلىق ئانتىللېن گۇلدېنى"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"ئانگولا كۇۋانزاسى"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"ئانگولا كۇۋانزاسى (1977–1991))","one":"ئانگولا كۇۋانزاسى (1977–1991)"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"ئانگولا يېڭى كۇۋانزاسى (1990–2000)"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"ئانگولا قايتا تەڭشەلگەن كۇۋانزاسى (1995–1999)"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ئارگېنتىنا ئاۋسترالى"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ئارگېنتىنا پېسو لېيى (1970–1983)"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ئارگېنتىنا پېسوسى (1881–1970)"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ئارگېنتىنا پېسوسى (1983–1985)"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"ئارگېنتىنا پېسوسى"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ئاۋسترىيە شىللىڭى"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"ئاۋسترالىيە دوللىرى"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"ئارۇبان فىلورۇنى"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"ئەزەربەيجان ماناتى (1993–2006)"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"ئەزەربەيجان ماناتى"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"بوسنىيە-خېرتسېگوۋىنا دىنارى (1992–1994)"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"بوسنىيە-خېرتسېگوۋىنا ئالماشتۇرۇشچان ماركى"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"بوسنىيە-خېرتسېگوۋىنا يېڭى دىنارى (1994–1997)"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"باربادوس دوللىرى"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"باڭلادىش تاكاسى"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"بېلگىيە فرانكى (ئالماشتۇرۇشچان)"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"بېلگىيە فرانكى"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"بېلگىيە فرانكى (پۇل–مۇئامىلە)"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"بۇلغارىيە قاتتىق لېۋاسى"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"بۇلغارىيە ئىجتىمائىي لېۋاسى"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"بۇلغارىيە لېۋاسى"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"بۇلغارىيە لېۋاسى (1879–1952)"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"بەھرەين دىنارى"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"بۇرۇندى فرانكى"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"بېرمۇدا دوللىرى"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"بىرۇنېي دوللىرى"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"بولىۋىيە بولىۋىيانوسى"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"بولىۋىيە بولىۋىيانوسى (1863–1963)"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"بولىۋىيە پىسوسى"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"بولىۋىيە مۇدولى"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"بىرازىلىيە يېڭى كرۇزېروسى (1967–1986)"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"بىرازىلىيە كرۇزادوسى (1986–1989)"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"بىرازىلىيە يېڭى كرۇزېروسى (1990–1993)"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"بىرازىلىيە رىيالى"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"بىرازىلىيە يېڭى كرۇزادوسى (1989–1990)"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"بىرازىلىيە كرۇزېروسى (1993–1994)"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"بىرازىلىيە كرۇزېروسى (1942–1967)"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"باھاما دوللىرى"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"بۇتان نگۇلترۇمى"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"بىرما كىياتى"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"بوتسۋانا پۇلاسى"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"بېلارۇسىيە يېڭى رۇبلىسى (1994–1999)"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"بېلارۇسىيە رۇبلىسى"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"بېلارۇسىيە رۇبلىسى (۲۰۰۰–۲۰۱۶)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"بېلىز دوللىرى"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"كانادا دوللىرى"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"كونگو فرانكى"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"WIR ياۋرو"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"شىۋېتسىيە فرانكى"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"WIR فرانكى"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"چىلى ئېسكۇدوسى"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"چىلى ھېسابات بىرلىكى (UF)"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"چىلى پېسوسى"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"CNH"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"جۇڭگو خەلق بانكىسى دوللىرى"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"جۇڭگو يۈەنى"},"symbol":"￥","narrow":"¥"},"COP":{"displayName":{"other":"كولومبىيە پېسوسى"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"كولومبىيە ھەقىقىي قىممەت بىرلىكى"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"كوستارىكا كولونى"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"سېربىيە دىنارى (2002–2006)"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"چېخسىلوۋاكىيە قاتتىق كورۇناسى"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"كۇبا ئالماشتۇرۇشچان پېسوسى"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"كۇبا پېسوسى"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"يېشىل تۇمشۇق ئېسكۇدوسى"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"سىپرۇس فوند ستېرلىڭى"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"چېخ جۇمھۇرىيىتى كورۇناسى"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"شەرقىي گېرمانىيە ماركى"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"گېرمانىيە ماركى"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"جىبۇتى فرانكى"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"دانىيە كرونى"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"دومىنىكا پېسوسى"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"ئالجىرىيە دىنارى"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ئېكۋادور سۇكرېسى"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ئېكۋادور تۇراقلىق قىممەت بىرلىكى"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"ئېستونىيە كرۇنى"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"مىسىر فوند سىتېرلىڭى"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"ئېرىترېيە ناكفاسى"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ئىسپانىيە پېسېتاسى (A ھېسابات)"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ئىسپانىيە پېسېتاسى (ئالماشتۇرۇش ھېساباتى)"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ئىسپانىيە پېسېتاسى"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"ئېفىيوپىيە بىررى"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"ياۋرو"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"فىنلاندىيە مارككاسى"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"فىجى دوللىرى"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"فالكلاند ئاراللىرى فوند سىتېرلىڭى"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"فىرانسىيە فرانكى"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"ئەنگلىيە فوند سىتېرلىڭى"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"گىرۇزىيە كۇپون لارىتى"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"گىرۇزىيە لارىسى"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"گانا سېدىسى (1979–2007)"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"گانا سېدىسى"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"جەبىلتارىق فوند سىتېرلىڭى"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"گامبىيە دالاسى"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"گىۋىنېيە فرانكى"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"گىۋىنېيە سىلىسى"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"ئېكۋاتور گىۋىنېيە ئېكۋېلېسى"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"گىرېتسىيە دراخماسى"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"گىۋاتېمالا كۇۋېتزالى"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"پورتۇگالىيە گىۋىنېيە ئېسكۇدوسى"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"گىۋىنېيە-بىسسائۇ پېسوسى"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"گىۋىئانا دوللىرى"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"شياڭگاڭ دوللىرى"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"ھوندۇراس لېمپىراسى"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"كىرودىيە دىنارى"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"كىرودىيە كۇناسى"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"ھايتى گۇردېسى"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"ۋېنگىرىيە فورېنتى"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"ھىندونېزىيە رۇپىيەسى"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"ئىرېلاندىيە فوندستېرلىڭى"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ئىسرائىلىيە فوندستېرلىڭى"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ئىسرائىل شېكېلى (1980–1985)"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"ئىسرائىل يېڭى شېكېلى"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"ھىندىستان رۇپىسى"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"ئىراق دىنارى"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"ئىران رىيالى"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ئىسلاندىيە كروناسى (1918–1981)"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"ئىسلاندىيە كروناسى"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ئىتالىيە لىراسى"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"يامايكا دوللىرى"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"ئىيوردانىيە دىنارى"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"ياپونىيە يېنى"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"كېنىيە شىللىڭى"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"قىرغىزىستان سومى"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"كامبودژا رىئېلى"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"كومورو فرانكى"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"شىمالىي كورېيە ۋونى"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"جەنۇبىي كورېيە خۋانى (1953–1962)"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"جەنۇبىي كورېيە ۋونى (1945–1953)"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"جەنۇبىي كورېيە ۋونى"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"كۇۋەيت دىنارى"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"كايمان ئاراللىرى دوللىرى"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"قازاقىستان تەڭگىسى"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"لائوس كىپى"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"لىۋان فوند سىتېرلىڭى"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"سىرىلانكا رۇپىسى"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"لىبېرىيە دوللىرى"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"لېسوتو لوتىسى"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"لىتۋا لىتاسى"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"لىتۋا تالوناسى"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"ليۇكسېمبۇرگ ئالماشتۇرۇشچان پېسوسى"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"ليۇكسېمبۇرگ فرانكى"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"لىيۇكسېمبۇرگ پۇل-مۇئامىلە فرانكى"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"لاتۋىيە لاتى"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"لاتۋىيە رۇبلىسى"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"لىۋىيە دىنارى"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"ماراكەش دىرھەمى"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"ماراكەش فرانكى"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"موناكو فرانكى"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"مولدوۋا كۇپونى"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"مولدوۋا لېۋى"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"ماداغاسقار ئارىئارىسى"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"ماداغاسقار فرانكى"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"ماكېدونىيە دىنارى"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"ماكېدونىيە دىنارى (1992–1993)"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"مالى فرانكى"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"مىيانمار كىياتى"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"موڭغۇلىيە تۈگرىكى"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"ئاۋمېن پاتاكاسى"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"ماۋرىتانىيە ئۇگىيەسى (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"ماۋرىتانىيە ئۇگىيەسى"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"مالتا لىراسى"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"مالتا فوندستېرلىڭى"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"ماۋرىتىئۇس رۇپىسى"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"مالدىۋى رۇپىسى"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"مالدىۋى رۇفىياسى"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"مالاۋى كۋاچاسى"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"مېكسىكا پېسوسى"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"مېكسىكا كۈمۈش پېسوسى (1861–1992)"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"مېكسىكا مەبلەغ بىرلىكى"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"مالايشىيا رىڭگىتى"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"موزامبىك ئېسكۇدوسى"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"موزامبىك مېتىكالى (1980–2006)"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"موزامبىك مېتىكالى"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"نامىبىيە دوللىرى"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"نىگېرىيە نايراسى"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"نىگېرىيە كوردوباسى (1988–1991)"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"نىگېرىيە كوردوباسى"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"گوللاندىيە گۈلدىنى"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"نورۋېگىيە كرونى"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"نېپال رۇپىسى"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"يېڭى زېلاندىيە دوللىرى"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"ئومان رىيالى"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"پاناما بالبوئاسى"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"پېرۇ ئىنتىسى"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"پېرۇ سولى"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"پېرۇ سولى (1863–1965)"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"پاپۇئا يېڭى گىۋىنېيە كىناسى"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"فىلىپپىن پېسوسى"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"پاكىستان رۇپىسى"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"پولشا زىلوتى"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"پولشا زىلوتى (1950–1995)"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"پورتۇگالىيە ئېسكۇدوسى"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"پاراگۋاي گۇئارانىسى"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"قاتار رىيالى"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"رودېزىيە دوللىرى"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"رۇمىنىيە لېيى (1952–2006)"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"رۇمىنىيە لېيى"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"سېربىيە دىنارى"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"رۇسىيە رۇبلىسى"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"رۇسىيە رۇبلىسى (1991–1998)"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"رۋاندا فرانكى"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"سەئۇدى رىيالى"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"سولومون ئاراللىرى دوللىرى"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"سېيشېل رۇپىسى"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"سۇدان دىنارى (1992–2007)"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"سۇدان فوندستېرلىڭى"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"سۇدان فوندستېرلىڭى (1957–1998)"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"شىۋېتسىيە كروناسى"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"سىنگاپور دوللىرى"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"ساينىت-ھېلېنا فوندستېرلىڭى"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"سىلوۋېنىيە تولارى"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"سىلوۋاكىيە كورۇناسى"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"سېررالېئون لېئونېسى"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"سومالى شىللىڭى"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"سۇرىنام دوللىرى"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"سۇرىنام گۈلدىنى"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"جەنۇبىي سۇدان فوندستېرلىڭى"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"سان-تومې ۋە پىرىنسىپى دوبراسى (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"سان-تومې ۋە پىرىنسىپى دوبراسى"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"سوۋىت رۇبلىسى"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"سالۋادور كولونى"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"سۈرىيە فوندستېرلىڭى"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"سىۋېزىلاند لىلانگېنى"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"تايلاند باختى"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"تاجىكىستان رۇبلىسى"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"تاجىكىستان سومونىسى"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"تۈركمەنىستان ماناتى (1993–2009)"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"تۈركمەنىستان ماناتى"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"تۇنىس دىنارى"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"تونگا پائانگاسى"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"تىمور ئېسكۇدوسى"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"تۈركىيە لىراسى (1922–2005)"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"تۈركىيە لىراسى"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"تىرىنىداد ۋە توباگو دوللىرى"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"يېڭى تەيۋەن دوللىرى"},"symbol":"NT$","narrow":"$"},"TZS":{"displayName":{"other":"تانزانىيە شىللىڭى"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"ئۇكرائىنا خرىۋناسى"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"ئۇكرائىنا كاربوۋانېتسى"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"ئۇگاندا شىللىڭى (1966–1987)"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"ئۇگاندا شىللىڭى"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"ئامېرىكا دوللىرى"},"symbol":"$","narrow":"$"},"USN":{"displayName":{"other":"ئامېرىكا دوللىرى (كېيىنكى كۈن)"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"ئامېرىكا دوللىرى (ئوخشاش كۈن)"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"ئۇرۇگۋاي پېسوسى (ئىندېكىسلاش بىرلىكى)"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"ئۇرۇگۋاي پېسوسى (1975–1993)"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"ئۇرۇگۋاي پېسوسى"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"ئۆزبېكىستان سومى"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"ۋېنېزۇئېلا بولىۋارى (1871–2008)"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"ۋېنېزۇئېلا بولىۋارى (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"ۋېنېزۇئېلا بولىۋارى"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"ۋىيېتنام دوڭى"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"ۋىيېتنام دوڭى (1978–1985)"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"ۋانۇئاتۇ ۋاتۇسى"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"ساموئا تالاسى"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"ئافرىقا قىتئەسى پۇل-مۇئامىلە ئىتتىپاقى فرانكى"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"ئالتۇن ئۈنسىيە بىرلىكىدىكى كۈمۈش"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"ئالتۇن ئۈنسىيە بىرلىكىدىكى ئالتۇن"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"ياۋروپا مۇرەككەپ بىرلىكى"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"ياۋروپا پۇل بىرلىكى (XBB)"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"ياۋروپا ھېسابات بىرلىكى (XBC)"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"ياۋروپا ھېسابات بىرلىكى (XBD)"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"شەرقىي كارىب دوللىرى"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"ئالاھىدە پۇل ئېلىش ھوقۇقى"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"ياۋروپا پۇل بىرلىكى"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"فىرانسىيە ئالتۇن فرانكى"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"فىرانسىيە UIC فرانكى"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"ئافرىقا قىتئەسى پۇل-مۇئامىلە ئىتتىپاقى فرانكى (BCEAO)"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"ئالتۇن ئۈنسىيە بىرلىكىدىكى پاللادىي"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"تىنچ ئوكيان پۇل-مۇئامىلە ئورتاق گەۋدىسى فرانكى"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"ئالتۇن ئۈنسىيە بىرلىكىدىكى پىلاتىنا"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"RINET فوندى بىرلىكى"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"سۇكرې"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"پۇل سىناش بىرلىكى"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"ئاسىيا تەرەققىيات بانكىسى ھېسابات بىرلىكى"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(يوچۇن پۇل)","one":"(يوچۇن پۇل بىرلىكى)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"يەمەن دىنارى"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"يەمەن رىيالى"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"يۇگوسلاۋىيە قاتتىق دىنارى (1966–1990)"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"يۇگوسلاۋىيە يېڭى دىنارى (1994–2002)"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"يۇگوسلاۋىيە ئالماشتۇرۇشچان دىنارى (1990–1992)"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"يۇگوسلاۋىيە ئىسلاھات دىنارى (1992–1993)"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"جەنۇبىي ئافرىقا راندى (پۇل–مۇئامىلە)"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"جەنۇبىي ئافرىقا راندى"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"زامبىيە كۋاچاسى (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"زامبىيە كۋاچاسى"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"زايىر يېڭى زايىرى (1993–1998)"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"زايىر زايىرى (1971–1993)"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"زىمبابۋې دوللىرى (1980–2008)"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"زىمبابۋې دوللىرى (2009)"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"زىمبابۋې دوللىرى (2008)"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 مىڭ"},"10000":{"other":"00 مىڭ"},"100000":{"other":"000 مىڭ"},"1000000":{"other":"0 مىليون"},"10000000":{"other":"00 مىليون"},"100000000":{"other":"000 مىليون"},"1000000000":{"other":"0 مىليارد"},"10000000000":{"other":"00 مىليارد"},"100000000000":{"other":"000 مىليارد"},"1000000000000":{"other":"0 تىرىليون"},"10000000000000":{"other":"00 تىرىليون"},"100000000000000":{"other":"000 تىرىليون"}},"short":{"1000":{"other":"0مىڭ"},"10000":{"other":"00مىڭ"},"100000":{"other":"000مىڭ"},"1000000":{"other":"0مىليون"},"10000000":{"other":"00مىليون"},"100000000":{"other":"000مىليون"},"1000000000":{"other":"0مىليارد"},"10000000000":{"other":"00مىليارد"},"100000000000":{"other":"000مىليارد"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤#,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","unitPattern":"{0} {1}","short":{"1000":{"other":"¤ 0K"},"10000":{"other":"¤ 00K"},"100000":{"other":"¤ 000K"},"1000000":{"other":"¤ 0M"},"10000000":{"other":"¤ 00M"},"100000000":{"other":"¤ 000M"},"1000000000":{"other":"¤ 0G"},"10000000000":{"other":"¤ 00G"},"100000000000":{"other":"¤ 000G"},"1000000000000":{"other":"¤ 0T"},"10000000000000":{"other":"¤ 00T"},"100000000000000":{"other":"¤ 000T"}}}}},"nu":["latn"]}},"availableLocales":["ug"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
