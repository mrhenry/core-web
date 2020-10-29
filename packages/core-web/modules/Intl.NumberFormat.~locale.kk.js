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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("kk",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("kk").length
)) {
// Intl.NumberFormat.~locale.kk
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"kk":{"units":{"simple":{"degree":{"long":{"other":"{0} градус"},"short":{"other":"{0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} гектар"},"short":{"other":"{0} га"},"narrow":{"other":"{0} га"},"perUnit":{}},"acre":{"long":{"other":"{0} акр"},"short":{"other":"{0} акр"},"narrow":{"other":"{0} акр"},"perUnit":{}},"percent":{"long":{"other":"{0} пайыз"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} литр/километр"},"short":{"other":"{0} л/км"},"narrow":{"other":"{0} л/км"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} миля/галлон"},"short":{"other":"{0} миля/гал."},"narrow":{"other":"{0} миля/гал."},"perUnit":{}},"petabyte":{"long":{"other":"{0} петабайт"},"short":{"other":"{0} ПБ"},"narrow":{"other":"{0} ПБ"},"perUnit":{}},"terabyte":{"long":{"other":"{0} терабайт"},"short":{"other":"{0} TБ"},"narrow":{"other":"{0} TБ"},"perUnit":{}},"terabit":{"long":{"other":"{0} терабит"},"short":{"other":"{0} Tб"},"narrow":{"other":"{0} Tб"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} гигабайт"},"short":{"other":"{0} ГБ"},"narrow":{"other":"{0} ГБ"},"perUnit":{}},"gigabit":{"long":{"other":"{0} гигабит"},"short":{"other":"{0} Гб"},"narrow":{"other":"{0} Гб"},"perUnit":{}},"megabyte":{"long":{"other":"{0} мегабайт"},"short":{"other":"{0} MБ"},"narrow":{"other":"{0} MБ"},"perUnit":{}},"megabit":{"long":{"other":"{0} мегабит"},"short":{"other":"{0} Mб"},"narrow":{"other":"{0} Mб"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} килобайт"},"short":{"other":"{0} кБ"},"narrow":{"other":"{0} кБ"},"perUnit":{}},"kilobit":{"long":{"other":"{0} килобит"},"short":{"other":"{0} кб"},"narrow":{"other":"{0} кб"},"perUnit":{}},"byte":{"long":{"other":"{0} байт"},"short":{"other":"{0} байт"},"narrow":{"other":"{0} байт"},"perUnit":{}},"bit":{"long":{"other":"{0} бит"},"short":{"other":"{0} бит"},"narrow":{"other":"{0} бит"},"perUnit":{}},"year":{"long":{"other":"{0} жыл"},"short":{"other":"{0} ж."},"narrow":{"other":"{0} ж."},"perUnit":{"long":"жылына {0}","short":"{0}/ж.","narrow":"{0}/ж."}},"month":{"long":{"other":"{0} ай"},"short":{"other":"{0} ай"},"narrow":{"other":"{0} ай"},"perUnit":{"long":"айына {0}","short":"{0}/ай","narrow":"{0}/ай"}},"week":{"long":{"other":"{0} апта"},"short":{"other":"{0} ап."},"narrow":{"other":"{0} ап."},"perUnit":{"long":"аптасына {0}","short":"{0}/ап.","narrow":"{0}/ап."}},"day":{"long":{"other":"{0} тәулік"},"short":{"other":"{0} күн"},"narrow":{"other":"{0} к."},"perUnit":{"long":"тәулігіне {0}","short":"{0}/күн","narrow":"{0}/күн"}},"hour":{"long":{"other":"{0} сағат"},"short":{"other":"{0} сағ"},"narrow":{"other":"{0} сағ"},"perUnit":{"long":"сағатына {0}","short":"{0}/сағ","narrow":"{0}/сағ"}},"minute":{"long":{"other":"{0} минут"},"short":{"other":"{0} мин"},"narrow":{"other":"{0} мин"},"perUnit":{"long":"минутына {0}","short":"{0}/мин","narrow":"{0}/мин"}},"second":{"long":{"other":"{0} секунд"},"short":{"other":"{0} с"},"narrow":{"other":"{0} с"},"perUnit":{"long":"секундына {0}","short":"{0}/с","narrow":"{0}/с"}},"millisecond":{"long":{"other":"{0} миллисекунд"},"short":{"other":"{0} мс"},"narrow":{"other":"{0} мс"},"perUnit":{}},"kilometer":{"long":{"other":"{0} километр"},"short":{"other":"{0} км"},"narrow":{"other":"{0} км"},"perUnit":{"long":"{0}/километр","short":"{0}/км","narrow":"{0}/км"}},"meter":{"long":{"other":"{0} метр"},"short":{"other":"{0} м"},"narrow":{"other":"{0} м"},"perUnit":{"long":"{0}/метр","short":"{0}/м","narrow":"{0}/м"}},"centimeter":{"long":{"other":"{0} сантиметр"},"short":{"other":"{0} см"},"narrow":{"other":"{0} см"},"perUnit":{"long":"{0}/сантиметр","short":"{0}/см","narrow":"{0}/см"}},"millimeter":{"long":{"other":"{0} миллиметр"},"short":{"other":"{0} мм"},"narrow":{"other":"{0} мм"},"perUnit":{}},"mile":{"long":{"other":"{0} миля"},"short":{"other":"{0} миля"},"narrow":{"other":"{0} миля"},"perUnit":{}},"yard":{"long":{"other":"{0} ярд"},"short":{"other":"{0} ярд"},"narrow":{"other":"{0} ярд"},"perUnit":{}},"foot":{"long":{"other":"{0} фут"},"short":{"other":"{0} фут"},"narrow":{"other":"{0} фут"},"perUnit":{"long":"{0}/фут","short":"{0}/фут","narrow":"{0}/фут"}},"inch":{"long":{"other":"{0} дюйм"},"short":{"other":"{0} дюйм"},"narrow":{"other":"{0} дюйм"},"perUnit":{"long":"{0}/дюйм","short":"{0}/дюйм","narrow":"{0}/дюйм"}},"mile-scandinavian":{"long":{"other":"{0} скандинавиялық миля"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} килограмм"},"short":{"other":"{0} кг"},"narrow":{"other":"{0} кг"},"perUnit":{"long":"{0}/килограмм","short":"{0}/кг","narrow":"{0}/кг"}},"gram":{"long":{"other":"{0} грамм"},"short":{"other":"{0} г"},"narrow":{"other":"{0} г"},"perUnit":{"long":"{0}/грамм","short":"{0}/г","narrow":"{0}/г"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} фунт"},"short":{"other":"{0} фунт"},"narrow":{"other":"{0} фунт"},"perUnit":{"long":"{0}/фунт","short":"{0}/фунт","narrow":"{0}/фунт"}},"ounce":{"long":{"other":"{0} унция"},"short":{"other":"{0} унц."},"narrow":{"other":"{0} унция"},"perUnit":{"long":"{0}/унция","short":"{0}/унц.","narrow":"{0}/унц."}},"kilometer-per-hour":{"long":{"other":"{0} километр/сағат"},"short":{"other":"{0} км/сағ"},"narrow":{"other":"{0} км/сағ"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} метр/секунд"},"short":{"other":"{0} м/с"},"narrow":{"other":"{0} м/с"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} миля/сағат"},"short":{"other":"{0} миля/сағ"},"narrow":{"other":"{0} миля/сағ"},"perUnit":{}},"celsius":{"long":{"other":"{0} Цельсий градусы"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} Фаренгейт градусы"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} литр"},"short":{"other":"{0} л"},"narrow":{"other":"{0} л"},"perUnit":{"long":"{0}/литр","short":"{0}/л","narrow":"{0}/л"}},"milliliter":{"long":{"other":"{0} миллилитр"},"short":{"other":"{0} мл"},"narrow":{"other":"{0} мл"},"perUnit":{}},"gallon":{"long":{"other":"{0} галлон"},"short":{"other":"{0} гал."},"narrow":{"other":"{0} гал."},"perUnit":{"long":"{0}/галлон","short":"{0}/гал.","narrow":"{0}/гал."}},"fluid-ounce":{"long":{"other":"{0} сұйық унция"},"short":{"other":"{0} сұй. унц."},"narrow":{"other":"{0} сұй. унц."},"perUnit":{}}},"compound":{"per":{"long":"{0}/{1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"БАӘ дирхамы"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"Ауғанстан афганиі"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"Албания легі"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"Армения драмы"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"Нидерланд антиль гульдені"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"Ангола кванзасы"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ARP"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"Аргентина песосы"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"Австралия доллары"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"Аруба флорині"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"Әзірбайжан манаты"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"BAD"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"Босния және Герцеговина айырбасталмалы маркасы"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"Барбадос доллары"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"Бангладеш такасы"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"Болгария леві"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"Бахрейн динары"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"Бурунди франкі"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"Бермуд доллары"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"Бруней доллары"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"Боливия боливианосы"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"Бразилия реалы"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"Багам доллары"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"Бутан нгултрумы"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"Ботсвана пуласы"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"Беларусь рублі"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"Беларусь рублі (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"Белиз доллары"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"Канада доллары"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"Конго франкі"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"Швейцария франкі"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"Чили песосы"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"Қытай юані (офшор)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"Қытай юані"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"Колумбия песосы"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"Коста-Рика колоны"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"Куба айырбасталмалы песосы"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"Куба песосы"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"Кабо-Верде эскудосы"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"Чехия кронасы"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"Джибути франкі"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"Дат кроны"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"Доминикан песосы"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"Алжир динары"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"EEK"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"Мысыр фунты"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"Эритрея накфасы"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"Эфиопия быры"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"еуро"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"Фиджи доллары"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"Фолкленд аралдарының фунты"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"Британдық фунт"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"Грузия лариі"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"Гана седиі"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"Гибралтар фунты"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"Гамбия даласиі"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"Гвинея франкі"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"Гватемала кетсалі"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"Гайана доллары"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"Гонконг доллары"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"Гондурас лемпирасы"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"Хорватия кунасы"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"Гаити гурды"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"Венгрия форинті"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"Индонезия рупиясы"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"IEP"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"Израиль жаңа шекелі"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"Үндістан рупиясы"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"Ирак динары"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"Иран риалы"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"Исландия кронасы"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"Ямайка доллары"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"Иордания динары"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"Жапония иенасы"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"Кения шиллингі"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"Қырғызстан сомы"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"Камбоджа риелі"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"Комор аралдары франкы"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"Солтүстік Корея воны"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"Оңтүстік Корея воны"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"Кувейт динары"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"Кайман аралдары доллары"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"Қазақстан теңгесі"},"symbol":"₸","narrow":"₸"},"LAK":{"displayName":{"other":"Лаос кипі"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"Ливан фунты"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"Шри-Ланка рупиясы"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"Либерия доллары"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"LSL"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"Литва литы"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"Латвия латы"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"Ливия динары"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"Марокко дирхамы"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"Молдова лейі"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"Малагаси ариариі"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"MGF"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"Македония динары"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"Мьянма кьяты"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"Моңғолия тугригі"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"Макао патакасы"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"Мавритания угиясы (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"Мавритания угиясы"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"Маврикий рупиясы"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"Мальдив руфиясы"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"Малави квачасы"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"Мексика песосы"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"Малайзия ринггиті"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"MZE"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"MZM"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"Мозамбик метикалы"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"Намибия доллары"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"Нигерия найрасы"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"Никарагуа кордобасы"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"Норвегия кроны"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"Непал рупиясы"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"Жаңа Зеландия доллары"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"Оман риалы"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"Панама бальбоасы"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"Перу солі"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"Папуа - Жаңа Гвинея кинасы"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"Филиппин песосы"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"Пәкістан рупиясы"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"Польша злотасы"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"Парагвай гуараниі"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"Катар риалы"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"Румыния лейі"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"Сербия динары"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"Ресей рублі"},"symbol":"₽","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"Руанда франкі"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"Сауд Арабиясының риалы"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"Соломон аралдары доллары"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"Сейшель рупиясы"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"Судан фунты"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"Швеция кроны"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"Сингапур доллары"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"Әулие Елена аралы фунты"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"Сьерра-Леоне леонесі"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"Сомали шиллингі"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"Суринам доллары"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"Оңтүстік Судан фунты"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"Сант-Томе мен Принсипи добрасы (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"Сант-Томе мен Принсипи добрасы"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"Сирия фунты"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"Свазиленд лилангениі"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"Тай баты"},"symbol":"฿","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"Тәжікстан сомониі"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"Түрікменстан манаты"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"Тунис динары"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"Тонга паангасы"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"Түрік лирасы"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"Тринидад және Тобаго доллары"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"Жаңа Тайван доллары"},"symbol":"NT$","narrow":"NT$"},"TZS":{"displayName":{"other":"Танзания шиллингі"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"Украина гривнасы"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"UGS"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"Уганда шиллингі"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"АҚШ доллары"},"symbol":"$","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"Уругвай песосы"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"Өзбекстан сомы"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"VEB"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"Венесуэла боливары (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"Венесуэла боливары"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"Вьетнам донгі"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"Вануату ватуы"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"Самоа таласы"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"КФА ВЕАС франкі"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"Шығыс Кариб доллары"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"КФА ВСЕАО франкі"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"КФП франкі"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(белгісіз валюта)","one":"(белгісіз валюта бірлігі)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"Йемен риалы"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"Оңтүстік Африка рэнді"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"ZMK"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"Замбия квачасы"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"ZWD"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":",","group":" ","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"сан емес","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 мың"},"10000":{"other":"00 мың"},"100000":{"other":"000 мың"},"1000000":{"other":"0 миллион"},"10000000":{"other":"00 миллион"},"100000000":{"other":"000 миллион"},"1000000000":{"other":"0 миллиард"},"10000000000":{"other":"00 миллиард"},"100000000000":{"other":"000 миллиард"},"1000000000000":{"other":"0 триллион"},"10000000000000":{"other":"00 триллион"},"100000000000000":{"other":"000 триллион"}},"short":{"1000":{"other":"0 мың"},"10000":{"other":"00 мың"},"100000":{"other":"000 м'.'"},"1000000":{"other":"0 млн"},"10000000":{"other":"00 млн"},"100000000":{"other":"000 млн"},"1000000000":{"other":"0 млрд"},"10000000000":{"other":"00 млрд"},"100000000000":{"other":"000 млрд"},"1000000000000":{"other":"0 трлн"},"10000000000000":{"other":"00 трлн"},"100000000000000":{"other":"000 трлн"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"#,##0.00 ¤","accounting":"#,##0.00 ¤","unitPattern":"{0} {1}","short":{"1000":{"other":"0 мың ¤"},"10000":{"other":"00 мың ¤"},"100000":{"other":"000 мың ¤"},"1000000":{"other":"0 млн ¤"},"10000000":{"other":"00 млн ¤"},"100000000":{"other":"000 млн ¤"},"1000000000":{"other":"0 млрд ¤"},"10000000000":{"other":"00 млрд ¤"},"100000000000":{"other":"000 млрд ¤"},"1000000000000":{"other":"0 трлн ¤"},"10000000000000":{"other":"00 трлн ¤"},"100000000000000":{"other":"000 трлн ¤"}}}}},"nu":["latn"]}},"availableLocales":["kk"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
