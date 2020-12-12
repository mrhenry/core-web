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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("mn",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("mn").length
)) {
// Intl.NumberFormat.~locale.mn
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"{0} хэм"},"short":{"other":"{0} хэм"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} гектар"},"short":{"other":"{0} га"},"narrow":{"other":"{0} га"},"perUnit":{}},"acre":{"long":{"other":"{0} акр"},"short":{"other":"{0} акр"},"narrow":{"other":"{0} акр"},"perUnit":{}},"percent":{"long":{"other":"{0} хувь"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"километр тутамд {0} литр"},"short":{"other":"{0} л/км"},"narrow":{"other":"{0} л/км"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"Vote галлон тутамд {0} миль","one":"галлон тутамд {0} миль"},"short":{"other":"{0} ми/гал","one":"миль/гал"},"narrow":{"other":"{0} ми/гал","one":"миль/гал"},"perUnit":{}},"petabyte":{"long":{"other":"{0} петабайт"},"short":{"other":"{0} ПБ"},"narrow":{"other":"{0} ПБ"},"perUnit":{}},"terabyte":{"long":{"other":"{0} терабайт"},"short":{"other":"{0} ТБ"},"narrow":{"other":"{0} ТБ"},"perUnit":{}},"terabit":{"long":{"other":"{0} терабит"},"short":{"other":"{0} Тб"},"narrow":{"other":"{0} Тб"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} гигабайт"},"short":{"other":"{0} ГБ"},"narrow":{"other":"{0} ГБ"},"perUnit":{}},"gigabit":{"long":{"other":"{0} гигабит"},"short":{"other":"{0} Гб"},"narrow":{"other":"{0} Гб"},"perUnit":{}},"megabyte":{"long":{"other":"{0} мегабайт"},"short":{"other":"{0} МБ"},"narrow":{"other":"{0} МБ"},"perUnit":{}},"megabit":{"long":{"other":"{0} мегабит"},"short":{"other":"{0} Мб"},"narrow":{"other":"{0} Мб"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} килобайт"},"short":{"other":"{0} кБ"},"narrow":{"other":"{0} кБ"},"perUnit":{}},"kilobit":{"long":{"other":"{0} килобит"},"short":{"other":"{0} кб"},"narrow":{"other":"{0} кб"},"perUnit":{}},"byte":{"long":{"other":"{0} байт"},"short":{"other":"{0} байт"},"narrow":{"other":"{0} байт"},"perUnit":{}},"bit":{"long":{"other":"{0} бит"},"short":{"other":"{0} бит"},"narrow":{"other":"{0} бит"},"perUnit":{}},"year":{"long":{"other":"{0} жил"},"short":{"other":"{0} жил"},"narrow":{"other":"{0}ж"},"perUnit":{"long":"{0}/жил","short":"{0}/ж","narrow":"{0}/ж"}},"month":{"long":{"other":"{0} сар"},"short":{"other":"{0} сар"},"narrow":{"other":"{0}с"},"perUnit":{"long":"{0}/сар","short":"{0}/сар","narrow":"{0}/сар"}},"week":{"long":{"other":"{0} долоо хоног"},"short":{"other":"{0} д.х"},"narrow":{"other":"{0} д.х"},"perUnit":{"long":"{0}/долоо хоног","short":"{0}/д.х","narrow":"{0}/д.х"}},"day":{"long":{"other":"{0} хоног"},"short":{"other":"{0} хоног"},"narrow":{"other":"{0} хоног"},"perUnit":{"long":"{0}/хоног","short":"{0}/хоног","narrow":"{0}/хоног"}},"hour":{"long":{"other":"{0} цаг"},"short":{"other":"{0} цаг"},"narrow":{"other":"{0} ц"},"perUnit":{"long":"{0}/ц","short":"{0}/ц","narrow":"{0}/ц"}},"minute":{"long":{"other":"{0} минут"},"short":{"other":"{0} мин"},"narrow":{"other":"{0} мин"},"perUnit":{"long":"{0}/мин","short":"{0}/мин","narrow":"{0}/мин"}},"second":{"long":{"other":"{0} секунд"},"short":{"other":"{0} сек"},"narrow":{"other":"{0} сек"},"perUnit":{"long":"{0}/сек","short":"{0}/сек","narrow":"{0}/сек"}},"millisecond":{"long":{"other":"{0} миллисекунд"},"short":{"other":"{0} мс"},"narrow":{"other":"{0} мс"},"perUnit":{}},"kilometer":{"long":{"other":"{0} километр"},"short":{"other":"{0} км"},"narrow":{"other":"{0} км"},"perUnit":{"long":"километр тутамд {0}","short":"{0}/км","narrow":"{0}/км"}},"meter":{"long":{"other":"{0} метр"},"short":{"other":"{0} м"},"narrow":{"other":"{0} м"},"perUnit":{"long":"метр тутамд {0}","short":"{0}/м","narrow":"{0}/м"}},"centimeter":{"long":{"other":"{0} см","one":"{0} сантиметр"},"short":{"other":"{0} см"},"narrow":{"other":"{0} см"},"perUnit":{"long":"сантиметр тутамд {0}","short":"{0}/см","narrow":"{0}/см"}},"millimeter":{"long":{"other":"{0} миллиметр"},"short":{"other":"{0} мм"},"narrow":{"other":"{0} мм"},"perUnit":{}},"mile":{"long":{"other":"{0} миль"},"short":{"other":"{0} ми"},"narrow":{"other":"{0} миль"},"perUnit":{}},"yard":{"long":{"other":"{0} ярд"},"short":{"other":"{0} ярд"},"narrow":{"other":"{0} ярд"},"perUnit":{}},"foot":{"long":{"other":"{0} фут"},"short":{"other":"{0} фут"},"narrow":{"other":"{0} фт"},"perUnit":{"long":"{0}/фут","short":"{0}/фут","narrow":"{0}/фут"}},"inch":{"long":{"other":"{0} инч"},"short":{"other":"{0} инч"},"narrow":{"other":"{0} инч"},"perUnit":{"long":"{0}/инч","short":"{0}/инч","narrow":"{0}/инч"}},"mile-scandinavian":{"long":{"other":"{0} скандинавын миль"},"short":{"other":"{0} ск. миль"},"narrow":{"other":"{0} ск. миль"},"perUnit":{}},"kilogram":{"long":{"other":"{0} килограмм"},"short":{"other":"{0} кг"},"narrow":{"other":"{0} кг"},"perUnit":{"long":"килограмм тутамд {0}","short":"{0}/кг","narrow":"{0}/кг"}},"gram":{"long":{"other":"{0} грамм"},"short":{"other":"{0} гр"},"narrow":{"other":"{0} гр"},"perUnit":{"long":"грамм тутамд {0}","short":"{0}/гр","narrow":"{0}/гр"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} фунт"},"short":{"other":"{0} фунт"},"narrow":{"other":"{0} фунт"},"perUnit":{"long":"фунт тутамд {0}","short":"{0}/фунт","narrow":"{0}/фунт"}},"ounce":{"long":{"other":"{0} унц"},"short":{"other":"{0} унц"},"narrow":{"other":"{0} унц"},"perUnit":{"long":"унц тутамд {0}","short":"{0}/унц","narrow":"{0}/унц"}},"kilometer-per-hour":{"long":{"other":"цагт {0} километр"},"short":{"other":"{0} км/ц"},"narrow":{"other":"{0} км/ц"},"perUnit":{}},"meter-per-second":{"long":{"other":"секундэд {0} метр"},"short":{"other":"{0} м/с"},"narrow":{"other":"{0} м/сек"},"perUnit":{}},"mile-per-hour":{"long":{"other":"цагт {0} миль"},"short":{"other":"{0} ми/ц"},"narrow":{"other":"{0} миль/цаг"},"perUnit":{}},"celsius":{"long":{"other":"{0} Цельсийн хэм"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} Фаренгейтын хэм"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} литр"},"short":{"other":"{0} л"},"narrow":{"other":"{0} л"},"perUnit":{"long":"литр тутамд {0}","short":"{0}/л","narrow":"{0}/л"}},"milliliter":{"long":{"other":"{0} миллилитр"},"short":{"other":"{0} мл"},"narrow":{"other":"{0} мл"},"perUnit":{}},"gallon":{"long":{"other":"{0} галлон"},"short":{"other":"{0} гал"},"narrow":{"other":"{0} гал"},"perUnit":{"long":"галлон тутамд {0}","short":"{0}/ам. гал","narrow":"{0}/ам. гал"}},"fluid-ounce":{"long":{"other":"{0} шингэн унц"},"short":{"other":"{0} ш.унц"},"narrow":{"other":"{0} ш.унц"},"perUnit":{}}},"compound":{"per":{"long":"{1} тутамд {0}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"арабын нэгдсэн эмиратын дирхам"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"Афганистаны афгани"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"Албанийн лек"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"Арменийн драм"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"Нидерландын Антиллийн гулдер"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"Анголын кванза"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ARP"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"Аргентины песо"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"Австралийн доллар"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"Арубын флорин"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"Азербайжаны манат"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"BAD"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"Босни-Герцеговины хөрвөгч марк"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"барбадос доллар"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"Бангладешийн така"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"Болгарын лев"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"Бахрейн динар"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"Бурундийн франк"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"Бермудын доллар"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"Брунейн доллар"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"Боливийн боливиано"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"Бразилийн реал"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"Багамын доллар"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"Бутаны нгултрум"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"Ботсванийн пула"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"Беларусийн рубль"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"беларусь рубль (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"Белизийн доллар"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"канад доллар"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"Конгогийн франк"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"Швейцарийн франк"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"Чилийн песо"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"Хятадын юань (офшор)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"Хятадын юань"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"Колумбын песо"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"Коста-Рикагийн колон"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"Кубын хөрвөгч песо"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"Кубын песо"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"Кабо-Вердийн эскудо"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"Чехийн крон"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"Жибутийн франк"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"Данийн крон"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"Доминиканы песо"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"Алжирийн доллар"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"EEK"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"Египетийн фунт"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"Эритрейн накфа"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"Этиопын бирр"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"евро"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"Фижигийн доллар"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"Фолклендийн арлуудын паунд"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"Британийн фунт"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"Гүржийн лари"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"Ганагийн седи"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"Гибралтарын фунт"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"Гамбийн даласи"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"Гвинейн франк"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"Гватемалын кецал"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"Гайанын доллар"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"Хонг Конгийн доллар"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"Гондурасын лемпира"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"Хорватын куна"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"Гаитийн гурд"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"Унгарын форинт"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"Индонезийн рупи"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"IEP"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"Израилийн шинэ шекел"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"Энэтхэгийн рупи"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"Иракийн динар"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"Ираны риял"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"Исландын крон"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"Ямайкийн доллар"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"Йорданы динар"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"Японы иен"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"Кенийн шиллинг"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"Кыргызын сом"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"Камбожийн риел"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"Коморын франк"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"Хойд Солонгосын вон"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"Өмнөд Солонгосын вон"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"Кувейтийн динар"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"Кайманы арлуудын доллар"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"Казахстаны тэнгэ"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"Лаосын кип"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"Ливаны фунт"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"Шри-Ланкийн рупи"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"Либерийн доллар"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"LSL"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"литвийн литас"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"латвийн лац"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"Ливийн доллар"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"Мороккогийн дирхэм"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"Молдовын лей"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"Малагасийн ариари"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"MGF"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"Македонийн динар"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"Мьянмарын киат"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"Монгол төгрөг"},"symbol":"₮","narrow":"₮"},"MOP":{"displayName":{"other":"Макаогийн патака"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"мавритан угия (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"Мавританийн угия"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"Маврикийн рупи"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"Мальдивийн руфия"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"Малавийн квача"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"Мексикийн песо"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"Малайзын рингит"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"MZE"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"MZM"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"Мозамбикийн метикал"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"Намибийн доллар"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"Нигерийн найра"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"Никарагуагийн кордоба"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"Норвегийн крон"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"Балбын рупи"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"Шинэ Зеландын доллар"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"Оманийн риал"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"Панамын бальбоа"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"Перугийн соль"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"Папуа-Шинэ Гвинейн кина"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"Филиппиний песо"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"Пакистаны рупи"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"Польшийн злот"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"Парагвайн гуарани"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"Катарын риал"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"Румыны лей"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"Сербийн динар"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"Оросын рубль"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"Руандагийн франк"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"Саудын риял"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"Соломоны арлуудын доллар"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"Сейшелийн рупи"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"Суданы фунт"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"Шведийн крон"},"symbol":"SEK","narrow":"кр"},"SGD":{"displayName":{"other":"Сингапурын доллар"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"Сент Хеленагийн фунт"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"Сьерра-Леоны леон"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"Сомалийн шиллинг"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"Суринамын доллар"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"Өмнөд Суданы фунт"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"Сан-Томе Принсипигийн мөнгөн тэмдэгт добра (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"Сан-Томе ба Принсипигийн добра"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"Сирийн фунт"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"Свазиландын лилангени"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"Тайландын бат"},"symbol":"฿","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"Тажикийн сомон"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"Туркмены манат"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"Тунисын доллар"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"Тонгагийн панга"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"Туркийн лира"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"Тринидад ба Тобагогийн доллар"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"Шинэ Тайванийн доллар"},"symbol":"NT$","narrow":"NT$"},"TZS":{"displayName":{"other":"Танзанийн шиллинг"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"Украины гривна"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"UGS"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"Угандагийн шиллинг"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"америк доллар"},"symbol":"$","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"Уругвайн песо"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"Узбекийн сом"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"VEB"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"венесуэлийн боливар (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"Венесуэлийн боливар"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"Вьетнамын донг"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"Вануатугийн вату"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"Самоагийн тала"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"Төв Африкийн франк"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"Зүүн Карибийн доллар"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"Баруун Африкийн франк"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"Францын колонийн франк"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(тодорхойгүй мөнгөн тэмдэгт)","one":"(тодорхойгүй мөнгөн тэмдэгтийн нэгж)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"Йемений риял"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"Өмнөд Африкийн ранд"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"Замби квача (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"Замбийн квача"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"ZWD"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 мянга"},"10000":{"other":"00 мянга"},"100000":{"other":"000 мянга"},"1000000":{"other":"0 сая"},"10000000":{"other":"00 сая"},"100000000":{"other":"000 сая"},"1000000000":{"other":"0 тэрбум"},"10000000000":{"other":"00 тэрбум"},"100000000000":{"other":"000 тэрбум"},"1000000000000":{"other":"0 их наяд"},"10000000000000":{"other":"00 их наяд"},"100000000000000":{"other":"000 их наяд"}},"short":{"1000":{"other":"0 мянга"},"10000":{"other":"00 мянга"},"100000":{"other":"000 мянга"},"1000000":{"other":"0 сая"},"10000000":{"other":"00 сая"},"100000000":{"other":"000 сая"},"1000000000":{"other":"0 тэрбум"},"10000000000":{"other":"00 тэрбум"},"100000000000":{"other":"000Т"},"1000000000000":{"other":"0ИН"},"10000000000000":{"other":"00ИН"},"100000000000000":{"other":"000ИН"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤ #,##0.00","accounting":"¤ #,##0.00","unitPattern":"{0} {1}","short":{"1000":{"other":"¤ 0 мянга"},"10000":{"other":"¤ 00 мянга"},"100000":{"other":"¤000 мянга"},"1000000":{"other":"¤0 сая"},"10000000":{"other":"¤00 сая"},"100000000":{"other":"¤000 сая"},"1000000000":{"other":"¤0 тэрбум"},"10000000000":{"other":"¤ 00 тэрбум"},"100000000000":{"other":"¤ 000 тэрбум"},"1000000000000":{"other":"¤ 0 их наяд"},"10000000000000":{"other":"¤ 00 их наяд"},"100000000000000":{"other":"¤ 000 их наяд"}}}}},"nu":["latn"]},"locale":"mn"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
