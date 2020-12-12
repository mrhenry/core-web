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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("uz-Cyrl",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("uz-Cyrl").length
)) {
// Intl.NumberFormat.~locale.uz-Cyrl
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"{0}°"},"short":{"other":"{0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} ha"},"short":{"other":"{0} ha"},"narrow":{"other":"{0} ha"},"perUnit":{}},"acre":{"long":{"other":"{0} ac"},"short":{"other":"{0} ac"},"narrow":{"other":"{0} ac"},"perUnit":{}},"percent":{"long":{"other":"{0}%"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} L/km"},"short":{"other":"{0} L/km"},"narrow":{"other":"{0} L/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} mpg US"},"short":{"other":"{0} mpg US"},"narrow":{"other":"{0} mpg US"},"perUnit":{}},"petabyte":{"long":{"other":"{0} PB"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} TB"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} Tb"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0} Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} GB"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} Gb"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0} Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} MB"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} Mb"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0} Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kB"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kb"},"short":{"other":"{0} kb"},"narrow":{"other":"{0} kb"},"perUnit":{}},"byte":{"long":{"other":"{0} byte"},"short":{"other":"{0} byte"},"narrow":{"other":"{0} byte"},"perUnit":{}},"bit":{"long":{"other":"{0} bit"},"short":{"other":"{0} bit"},"narrow":{"other":"{0} bit"},"perUnit":{}},"year":{"long":{"other":"{0} йил"},"short":{"other":"{0} й"},"narrow":{"other":"{0} й"},"perUnit":{"long":"{0}/y","short":"{0}/y","narrow":"{0}/y"}},"month":{"long":{"other":"{0} ой"},"short":{"other":"{0} ой"},"narrow":{"other":"{0} ой"},"perUnit":{"long":"{0}/m","short":"{0}/m","narrow":"{0}/m"}},"week":{"long":{"other":"{0} ҳафта"},"short":{"other":"{0} ҳафт"},"narrow":{"other":"{0} ҳафт"},"perUnit":{"long":"{0}/w","short":"{0}/w","narrow":"{0}/w"}},"day":{"long":{"other":"{0} кун"},"short":{"other":"{0} кун"},"narrow":{"other":"{0} к"},"perUnit":{"long":"{0}/d","short":"{0}/d","narrow":"{0}/d"}},"hour":{"long":{"other":"{0} соат"},"short":{"other":"{0} соат"},"narrow":{"other":"{0} с"},"perUnit":{"long":"{0}/h","short":"{0}/h","narrow":"{0}/h"}},"minute":{"long":{"other":"{0} дақиқа"},"short":{"other":"{0} дақ"},"narrow":{"other":"{0} дақ"},"perUnit":{"long":"{0}/min","short":"{0}/min","narrow":"{0}/min"}},"second":{"long":{"other":"{0} сония"},"short":{"other":"{0} сония"},"narrow":{"other":"{0} сон"},"perUnit":{"long":"{0}/s","short":"{0}/s","narrow":"{0}/s"}},"millisecond":{"long":{"other":"{0} миллисония"},"short":{"other":"{0} мс"},"narrow":{"other":"{0} мс"},"perUnit":{}},"kilometer":{"long":{"other":"{0} км"},"short":{"other":"{0} км"},"narrow":{"other":"{0} км"},"perUnit":{"long":"{0}/km","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} м"},"short":{"other":"{0} м"},"narrow":{"other":"{0} м"},"perUnit":{"long":"{0}/m","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} см"},"short":{"other":"{0} см"},"narrow":{"other":"{0} см"},"perUnit":{"long":"{0}/cm","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0} мм"},"short":{"other":"{0} мм"},"narrow":{"other":"{0} мм"},"perUnit":{}},"mile":{"long":{"other":"{0} миля"},"short":{"other":"{0} миля"},"narrow":{"other":"{0} миля"},"perUnit":{}},"yard":{"long":{"other":"{0} ярд"},"short":{"other":"{0} ярд"},"narrow":{"other":"{0} ярд"},"perUnit":{}},"foot":{"long":{"other":"{0} фут"},"short":{"other":"{0} фут"},"narrow":{"other":"{0} фут"},"perUnit":{"long":"{0}/ft","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0} дюйм"},"short":{"other":"{0} дюйм"},"narrow":{"other":"{0} дюйм"},"perUnit":{"long":"{0}/in","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} smi"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} кг"},"short":{"other":"{0} кг"},"narrow":{"other":"{0} кг"},"perUnit":{"long":"{0}/kg","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} г"},"short":{"other":"{0} г"},"narrow":{"other":"{0} г"},"perUnit":{"long":"{0}/g","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} фунт"},"short":{"other":"{0} фунт"},"narrow":{"other":"{0} фунт"},"perUnit":{"long":"{0}/lb","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0} унция"},"short":{"other":"{0} унция"},"narrow":{"other":"{0} унция"},"perUnit":{"long":"{0}/oz","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"{0} km/h"},"short":{"other":"{0} km/h"},"narrow":{"other":"{0} km/h"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} m/s"},"short":{"other":"{0} m/s"},"narrow":{"other":"{0} m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} mi/h"},"short":{"other":"{0} mi/h"},"narrow":{"other":"{0} mi/h"},"perUnit":{}},"celsius":{"long":{"other":"{0}°C"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0}°F"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} l"},"short":{"other":"{0} l"},"narrow":{"other":"{0} l"},"perUnit":{"long":"{0}/l","short":"{0}/l","narrow":"{0}/l"}},"milliliter":{"long":{"other":"{0} mL"},"short":{"other":"{0} mL"},"narrow":{"other":"{0} mL"},"perUnit":{}},"gallon":{"long":{"other":"{0} gal US"},"short":{"other":"{0} gal US"},"narrow":{"other":"{0} gal US"},"perUnit":{"long":"{0}/gal US","short":"{0}/gal US","narrow":"{0}/gal US"}},"fluid-ounce":{"long":{"other":"{0} fl oz US"},"short":{"other":"{0} fl oz US"},"narrow":{"other":"{0} fl oz US"},"perUnit":{}}},"compound":{"per":{"long":"{0}/{1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"AED"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"AFN"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"ALL"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"AMD"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"Голланд Антил гульдени"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"AOA"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ARP"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"Аргентина песоси"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"AUD"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"Аруба флорини"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"AZN"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"BAD"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"BAM"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"Барбадос доллари"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"BDT"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"BGN"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"BHD"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"BIF"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"Бермуда доллари"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"BND"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"Боливия болвиани"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"Бразил реали"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"Багама доллари"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"BTN"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"BWP"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"BYN"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"BYR"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"Белиз доллари"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"Канада доллари"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"CDF"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"CHF"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"Чили песоси"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"CNH"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"Хитой юани"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"Колумбия песоси"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"Коста-Рика колони"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"Куба айирбошлаш песоси"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"Куба песоси"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"CVE"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"CZK"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"DJF"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"DKK"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"Доминикан песоси"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"Жазоир динори"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"EEK"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"Миср фунти"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"ERN"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"ETB"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"Евро"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"FJD"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"Фолькленд ороли фунти"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"Инглиз фунт"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"GEL"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"GHS"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"GIP"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"GMD"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"GNF"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"Гватемала кветзали"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"Гаяна доллари"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"HKD"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"Гондурас лемпираси"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"HRK"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"Гаити гурдаси"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"HUF"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"IDR"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"IEP"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"ILS"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"Ҳинд рупияси"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"IQD"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"IRR"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"ISK"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"Ямайка доллари"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"JOD"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"Япон йенаси"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"KES"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"KGS"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"KHR"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"KMF"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"KPW"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"KRW"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"KWD"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"Кайман ороли доллари"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"KZT"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"LAK"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"LBP"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"LKR"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"LRD"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"LSL"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"LTL"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"LVL"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"Ливия динори"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"Марокаш дирҳами"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"MDL"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"MGA"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"MGF"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"MKD"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"MMK"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"MNT"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"MOP"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"MRO"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"MRU"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"MUR"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"MVR"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"MWK"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"Мексика песоси"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"MYR"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"MZE"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"MZM"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"MZN"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"NAD"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"NGN"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"Никарагуа кордобаси"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"NOK"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"NPR"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"NZD"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"OMR"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"Панама бальбоаси"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"Перу сол"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"PGK"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"PHP"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"PKR"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"PLN"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"Парагвай гуарани"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"QAR"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"RON"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"RSD"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"Рус рубли"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"RWF"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"SAR"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"SBD"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"SCR"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"SDG"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"SEK"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"SGD"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"SHP"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"SLL"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"SOS"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"Суринам доллари"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"SSP"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"STD"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"STN"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"SYP"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"SZL"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"THB"},"symbol":"฿","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"TJS"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"TMT"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"TND"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"TOP"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"TRY"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"Тринидад ва Тобаго доллари"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"TWD"},"symbol":"NT$","narrow":"$"},"TZS":{"displayName":{"other":"TZS"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"UAH"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"UGS"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"UGX"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"АҚШ доллари"},"symbol":"US$","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"Уругвай песоси"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"Ўзбекистон сўм"},"symbol":"сўм","narrow":"сўм"},"VEB":{"displayName":{"other":"VEB"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"Венесуэла боливари (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"Венесуэла боливари"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"VND"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"VUV"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"WST"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"XAF"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"Шарқ Кариб доллари"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"XOF"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"XPF"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"XXX"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"YER"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"ZAR"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"ZMK"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"ZMW"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"ZWD"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":",","group":" ","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"ҳақиқий сон эмас","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 минг"},"10000":{"other":"00 минг"},"100000":{"other":"000 минг"},"1000000":{"other":"0 миллион"},"10000000":{"other":"00 миллион"},"100000000":{"other":"000 миллион"},"1000000000":{"other":"0 миллиард"},"10000000000":{"other":"00 миллиард"},"100000000000":{"other":"000 миллиард"},"1000000000000":{"other":"0 трилион"},"10000000000000":{"other":"00 трилион"},"100000000000000":{"other":"000 трилион"}},"short":{"1000":{"other":"0минг"},"10000":{"other":"00минг"},"100000":{"other":"000минг"},"1000000":{"other":"0млн"},"10000000":{"other":"00млн"},"100000000":{"other":"000млн"},"1000000000":{"other":"0млрд"},"10000000000":{"other":"00млрд"},"100000000000":{"other":"000млрд"},"1000000000000":{"other":"0трлн"},"10000000000000":{"other":"00трлн"},"100000000000000":{"other":"000трлн"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"#,##0.00 ¤","accounting":"#,##0.00 ¤","unitPattern":"{0} {1}","short":{"1000":{"other":"¤ 0K"},"10000":{"other":"¤ 00K"},"100000":{"other":"¤ 000K"},"1000000":{"other":"¤ 0M"},"10000000":{"other":"¤ 00M"},"100000000":{"other":"¤ 000M"},"1000000000":{"other":"¤ 0G"},"10000000000":{"other":"¤ 00G"},"100000000000":{"other":"¤ 000G"},"1000000000000":{"other":"¤ 0T"},"10000000000000":{"other":"¤ 00T"},"100000000000000":{"other":"¤ 000T"}}}}},"nu":["latn"]},"locale":"uz-Cyrl"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
