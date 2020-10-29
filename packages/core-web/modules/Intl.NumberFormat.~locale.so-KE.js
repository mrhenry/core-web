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
(function(undefined) {
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("so-KE",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("so-KE").length
)) {
// Intl.NumberFormat.~locale.so-KE
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"so-KE":{"units":{"simple":{"degree":{"long":{"other":"{0} digrii"},"short":{"other":"{0} dig"},"narrow":{"other":"{0} dig"},"perUnit":{}},"hectare":{"long":{"other":"{0} hektar","one":"hektar"},"short":{"other":"{0} hk"},"narrow":{"other":"{0} hk"},"perUnit":{}},"acre":{"long":{"other":"{0} aakre"},"short":{"other":"{0} ak"},"narrow":{"other":"{0} ak"},"perUnit":{}},"percent":{"long":{"other":"boqolkiiba {0}"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} litir kiilomitirkiiba","one":"litar kiilomitirkiiba"},"short":{"other":"{0} L/km"},"narrow":{"other":"{0} L/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} meyl galaankiiba"},"short":{"other":"{0} mpg US"},"narrow":{"other":"{0} mpg US"},"perUnit":{}},"petabyte":{"long":{"other":"{0} betabeyt"},"short":{"other":"{0} BB"},"narrow":{"other":"{0} BB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} terabeyt"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} terabit"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0} Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} gigabeyt"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} gigabit"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0} Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} megabeyt"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} megabit"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0} Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kiilobeyt"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kiilobit"},"short":{"other":"{0} kb"},"narrow":{"other":"{0} kb"},"perUnit":{}},"byte":{"long":{"other":"{0} beyt"},"short":{"other":"{0} beyt"},"narrow":{"other":"{0} beyt"},"perUnit":{}},"bit":{"long":{"other":"{0} bit"},"short":{"other":"{0} bit"},"narrow":{"other":"{0} bit"},"perUnit":{}},"year":{"long":{"other":"{0} Sannado","one":"{0} Sannad"},"short":{"other":"{0} snd","one":"snd"},"narrow":{"other":"{0}s"},"perUnit":{"long":"{0} Sannadkiiba","short":"{0}/sk","narrow":"{0}/sk"}},"month":{"long":{"other":"{0} bilood","one":"{0} bil"},"short":{"other":"{0} bil"},"narrow":{"other":"{0}b"},"perUnit":{"long":"{0} bishiiba","short":"{0}/bsh","narrow":"{0}/bsh"}},"week":{"long":{"other":"{0} toddobaadyo","one":"{0} toddobaad"},"short":{"other":"{0} tdbd"},"narrow":{"other":"{0}t"},"perUnit":{"long":"{0} toddobaadkiiba","short":"{0}/tdbdk","narrow":"{0} U/K"}},"day":{"long":{"other":"{0} maalmood","one":"{0} maalin"},"short":{"other":"{0} mln"},"narrow":{"other":"{0}m"},"perUnit":{"long":"{0} maalintiiba","short":"{0}/mt","narrow":"{0}M/K"}},"hour":{"long":{"other":"{0} saacadood","one":"{0} saacad"},"short":{"other":"{0} scd"},"narrow":{"other":"{0} s","one":"{0} scd"},"perUnit":{"long":"{0} saacadiiba","short":"{0} scdi","narrow":"{0} scdi"}},"minute":{"long":{"other":"{0} daqiiqo","one":"{0} daqiiqad"},"short":{"other":"{0} daqiiqo","one":"{0} dqqd"},"narrow":{"other":"{0}d"},"perUnit":{"long":"{0} daqiiqadiiba","short":"{0} dqqdb","narrow":"{0} dqqdb"}},"second":{"long":{"other":"{0} ilbiriqsi"},"short":{"other":"{0} ilbrqsi"},"narrow":{"other":"{0}il"},"perUnit":{"long":"{0} Ilbiriqsigiiba","short":"{0}/ilbrgba","narrow":"{0}/ilbrgba"}},"millisecond":{"long":{"other":"{0} miliseken"},"short":{"other":"{0} ms"},"narrow":{"other":"{0}ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0} kiilo mitir"},"short":{"other":"{0} km"},"narrow":{"other":"{0}km"},"perUnit":{"long":"{0} kiilo mitirkiiba","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} mitir"},"short":{"other":"{0} m"},"narrow":{"other":"{0}m"},"perUnit":{"long":"{0} mitirkiiba","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} sentimitir"},"short":{"other":"{0} cm"},"narrow":{"other":"{0}cm"},"perUnit":{"long":"{0} sentimitirkiiba","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0} milimitir"},"short":{"other":"{0} mm"},"narrow":{"other":"{0}mm"},"perUnit":{}},"mile":{"long":{"other":"{0} meyl"},"short":{"other":"{0} my"},"narrow":{"other":"{0} my"},"perUnit":{}},"yard":{"long":{"other":"{0} yaardi"},"short":{"other":"{0} yd"},"narrow":{"other":"{0} yd"},"perUnit":{}},"foot":{"long":{"other":"{0} fiit","one":"Fuudh"},"short":{"other":"{0} ft"},"narrow":{"other":"{0} ft"},"perUnit":{"long":"{0} fiitkiiba","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0} injis","one":"Injis"},"short":{"other":"{0} in"},"narrow":{"other":"{0} in"},"perUnit":{"long":"{0} injigiiba","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} meyl-iskanddineyfiyaan","one":"{0} meyl-iskandineyfiyaan"},"short":{"other":"{0} smy"},"narrow":{"other":"{0} smy"},"perUnit":{}},"kilogram":{"long":{"other":"{0} kiilogaraam"},"short":{"other":"{0} kg"},"narrow":{"other":"{0}kg"},"perUnit":{"long":"{0} kiilogaraam","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} garaam"},"short":{"other":"{0} g"},"narrow":{"other":"{0}g"},"perUnit":{"long":"{0} garaamkiiba","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} bownd"},"short":{"other":"{0} bw"},"narrow":{"other":"{0} bw"},"perUnit":{"long":"{0} bowndkiiba","short":"{0}/bw","narrow":"{0}/bw"}},"ounce":{"long":{"other":"{0} ownis"},"short":{"other":"{0} ow"},"narrow":{"other":"{0} ow"},"perUnit":{"long":"{0} owniskiiba","short":"{0}/ow","narrow":"{0}/ow"}},"kilometer-per-hour":{"long":{"other":"{0} kiilomitir saacadiiba","one":"{0} kiiomitir saacadiiba"},"short":{"other":"{0} km/s"},"narrow":{"other":"{0} km/s"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} mitir ilbiriqsigiiba","one":"mitir ilbiriqsigiiba"},"short":{"other":"{0} m/i"},"narrow":{"other":"{0} m/i"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} meyl saacadiiba"},"short":{"other":"{0} my/s"},"narrow":{"other":"{0} my/s"},"perUnit":{}},"celsius":{"long":{"other":"{0} degrii Selsiyaas"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} degrii Faahrenheyt"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} litar"},"short":{"other":"{0} L"},"narrow":{"other":"{0}L"},"perUnit":{"long":"{0} litarkiiba","short":"{0}/L","narrow":"{0}/L"}},"milliliter":{"long":{"other":"{0} mililitar"},"short":{"other":"{0} mL"},"narrow":{"other":"{0} mL"},"perUnit":{}},"gallon":{"long":{"other":"{0} galaan"},"short":{"other":"{0} gal"},"narrow":{"other":"{0} gal"},"perUnit":{"long":"{0} galaankiiba","short":"{0}/gal US","narrow":"{0}/gal US"}},"fluid-ounce":{"long":{"other":"{0} owniska dareeraha"},"short":{"other":"{0} own dr"},"narrow":{"other":"{0} own dr"},"perUnit":{}}},"compound":{"per":{"long":"{0}/{1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"dirhamka Isutaga Imaaraatka Carabta"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"Afgan Afgani"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"lekta Albaniya","one":"lekta Abaniya"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"daraamka Armeniya"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"galdarada Nadarlaan Antiliyaan","one":"galdarka Nadarlaan Antiliyaan"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"kawansada Angola"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"Argentine Australs","one":"Argentine Austral"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"Beesada Ley ee Arjentiin (1970–1983)"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"Beesada Ley ee Arjentiin (1881–1970)"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"Beesada Ley ee Arjentiin (1883–1985)"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"Beesada Arjentiin"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"doolarada Astaraaliya","one":"doolarka Astaraaliya"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"foloorinta Aruban"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"manaata Asarbeyjan"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"Diinaarka BBosnia-Hersogofina 1.00 konfatibal maakta Bosnia-Hersogofina 1 konfatibal maaka Bosnia-Hersogofina (1992–1994)","one":"Diinaarka BBosnia-Hersogofina (1992–1994)"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"konfatibal maakta Bosnia-Hersogofina"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"doolarada Barbaadiyaan","one":"doolarka Barbaadiyaan"},"symbol":"DBB","narrow":"$"},"BDT":{"displayName":{"other":"taka Bangledesh"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"lefta Bulgariya"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"dinaarka Baxreyn"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"faranka Burundi"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"Doolarka Barmuuda","one":"doolarka Barmuuda"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"doolarada Buruney","one":"doolarka Buruney"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"Bolifiyanada Bolifiya"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"Bolifiyaabka Bolifiyaano(1863–1963)"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"Realada Barasil","one":"Realka Barasil"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"doolarada Bahamaas","one":"doolarka Bahamaas"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"nugultaramta Butan"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"buulada Botswana"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"rubalka Belarus"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"BYR"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"doolarada Beelisa","one":"doolarka Beelisa"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"doolarada Kanada","one":"doolarka Kanada"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"faranka Kongo"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"Faranka Iswiska"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"Beesada Jili"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"yuwanta Shiinaha (Ofshoor)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"yuwanta Shiinaha"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"Beesada Kolombiya"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"kolonka Kosta Riika"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"beesada konfatibal ee Kuuba"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"Beesada Kuuba"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"eskudo Keyb Farde"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"korunada Jeek"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"faranka Jabuuti"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"Koronka Danishka"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"beesada Dominiika"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"dinaarka Aljeriya"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"Kroonka Estooniya"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"bowndka Masar"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"nafkada Eritriya","one":"nakfada Eritriya"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"birta Itoobbiya"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"yuuroo"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"Markkada Fiinishka ah"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"doolarada Fiji","one":"doolarka Fiji"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"Bowndka Faalklaan Aylaanis"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"Bowndka Biritishka"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"laariga Joorjiya"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"sedida Gana"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"bowndka Gibraltar"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"Dalasida Gambiya"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"faranka Gini"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"kuwestalka Guwatemala"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"Doolarada Guyanes","one":"Doolarka Guyanes"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"Doolarada Hoon Koon"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"lembirada Honduras"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"kunada Korooshiya"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"goordada Hiyati"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"forintiska Hangari"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"rubiah Indonesiya"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"baawnka Ayrishka"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"niyuu shekelka Israaiil"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"rubiga Hindiya"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"dinaarka Ciraaq"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"riyaalka Iran"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"krónaha Iceland (1918–1981)"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"Koronada Eysland"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"doolarada Jamayka","one":"doolarka Jamayka"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"dinaarka Urdun"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"yenta Jabaan"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"shilingka Kenya"},"symbol":"Ksh","narrow":"Ksh"},"KGS":{"displayName":{"other":"somta Kiyrgiystan","one":"somta Kiyriygstan"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"Riyf kambodiya","one":"Riyf Kambodiya"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"faranka Komoros"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"wonka Waqooyiga Kuuriya"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"wonka Koonfur Kuuriya"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"dinaarka Kuweyt"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"Doolarada Kayman Aylaanis","one":"doolarka Kayman Aylaanis"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"tengeda Kasakhstan"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"kib Laoti"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"Bowndka Lubnaan","one":"bowndka Lubnaan"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"rubiga Siri lanka","one":"rubiga Siri Lanka"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"doolarka Liberiya"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"LSL"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"LTL"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"LVL"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"rubalka Latfiya","one":"rubalka Latvia"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"dinaarka Libya"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"dirhamka Moroko"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"leeyuuda Moldofa"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"arayrida Madagaskar"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"MGF"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"denaarka Masedoniya"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"kayatda Mayanmaar"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"tugrikta Mongoliya"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"bataka Makana"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"Oogiya Mawritaniya (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"oogiyada Mawritaniya"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"rubiga Mowrishiya"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"rufiyada Maldifiya"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"kawajada Malawi"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"beesada Meksiko","one":"Beesada Meksiko"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"ringitda Malayshiya"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"MZE"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"MZM"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"Metikalka Mosambik","one":"metikalka Mosambik"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"doolarka Namibiya"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"nairada Neyjeeriya"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"Kordobada Nikargow"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"Koronka Norway"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"rubiga Nebal"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"doolarada Niyuu Siyalaan","one":"doolarka Niyuu siyalaan"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"riyaalka Cumaan"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"balbow Banama","one":"balbaw Banama"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"Solsha Beeru"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"kinada Babua Niyuu Gini"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"biso Filibin"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"rubiga Bakistan"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"solotida Bolaan"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"Guranida Baraguway"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"riyaalka Qatar"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"liyuuda Romaniya"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"dinaarka Serbiya"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"rubalka Ruushka"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"Faranka Ruwanda"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"riyaalka Sacuudiga","one":"Riyaalka Sacuudiga"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"doolarada Solomon Aylaanis","one":"doolarka Solomon Aylaanis"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"rubiga Siisalis"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"bowndka Suudaan"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"Koronka Isweden"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"doolarka Singabuur"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"Bowndka St Helen","one":"bowndka St Helen"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"leonka Sira Leon"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"Shilingka Soomaaliya"},"symbol":"S","narrow":"S"},"SRD":{"displayName":{"other":"Doolarada Surinamees","one":"Doolarka Surinamees"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"Bowndka Koonfurta Suudaan"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"STD"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"dobrada Sao Tome & Birinsibi","one":"dobrada Sao Tome Birinsibi"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"bowndka Suuriya"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"lilangeenida iswaasi","one":"lilengeenida Iswaasi"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"baatda Taylaan","one":"Baatda Taylaan"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"somoonida Tajikistan","one":"soomonida Tajikistan"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"manaata Turkmenistan"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"dinaarka Tunisiya"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"ba’angada Tonga"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"liirada Turkiga"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"doolarada Tirinidad iyo Tobago","one":"doolarka Tirinidad iyo Tobago"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"doolarada Taywaanta Cusub","one":"doolarka Taywaanta Cusub"},"symbol":"NT$","narrow":"$"},"TZS":{"displayName":{"other":"Shilingka Tansaaniya"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"hirfiniyada Yukreeyn"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"UGS"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"shilingka Yugandha"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"doolarada Mareeykanka","one":"doolarka Mareeykanka"},"symbol":"US$","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"Beesada Urugway"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"somta Usbekistan"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"VEB"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"Bolifar Fenesuala (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"Bolifarada Fenesuwela"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"dongta Fitnaam"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"fatu Fanuatu"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"tala Samao"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"faranka CFA ee Bartamaha Afrika"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"doolarada Iist Kaaribyan","one":"doolarka Iist Kaaribyan"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"faranka CFA Galbeedka Afrika"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"Faranka CFP"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(Lacag aan la aqoon)","one":"(halbeeg lacag aan la aqoon)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"riyaalka Yemen"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"randka Koonfur Afrika"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"ZMK"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"Kawajada Sambiya","one":"Kawaja Sambiya"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"ZWD"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"MaL","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 Kun"},"10000":{"other":"00 Kun"},"100000":{"other":"000 Kun"},"1000000":{"other":"0 Milyan"},"10000000":{"other":"00 Milyan"},"100000000":{"other":"000 Milyan"},"1000000000":{"other":"0 Bilyan"},"10000000000":{"other":"00 Bilyan"},"100000000000":{"other":"000 Bilyan"},"1000000000000":{"other":"0 Tirilyan"},"10000000000000":{"other":"00 Tirilyan"},"100000000000000":{"other":"000 Tirilyan"}},"short":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0B"},"10000000000":{"other":"00B"},"100000000000":{"other":"000B"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤#,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","unitPattern":"{0} {1}","short":{"1000":{"other":"¤0K"},"10000":{"other":"¤00K"},"100000":{"other":"¤000K"},"1000000":{"other":"¤0M"},"10000000":{"other":"¤00M"},"100000000":{"other":"¤000M"},"1000000000":{"other":"¤0B"},"10000000000":{"other":"¤00B"},"100000000000":{"other":"¤000B"},"1000000000000":{"other":"¤0T"},"10000000000000":{"other":"¤00T"},"100000000000000":{"other":"¤000T"}}}}},"nu":["latn"]}},"availableLocales":["so-KE"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
