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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("ig",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("ig").length
)) {
// Intl.NumberFormat.~locale.ig
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"{0}°"},"short":{"other":"{0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} ha"},"short":{"other":"{0} ha"},"narrow":{"other":"{0} ha"},"perUnit":{}},"acre":{"long":{"other":"{0} ac"},"short":{"other":"{0} ac"},"narrow":{"other":"{0} ac"},"perUnit":{}},"percent":{"long":{"other":"{0}%"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} L/km"},"short":{"other":"{0} L/km"},"narrow":{"other":"{0} L/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} mpg US"},"short":{"other":"{0} mpg US"},"narrow":{"other":"{0} mpg US"},"perUnit":{}},"petabyte":{"long":{"other":"{0} PB"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} TB"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} Tb"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0} Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} GB"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} Gb"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0} Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} MB"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} Mb"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0} Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kB"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kb"},"short":{"other":"{0} kb"},"narrow":{"other":"{0} kb"},"perUnit":{}},"byte":{"long":{"other":"{0} byte"},"short":{"other":"{0} byte"},"narrow":{"other":"{0} byte"},"perUnit":{}},"bit":{"long":{"other":"{0} bit"},"short":{"other":"{0} bit"},"narrow":{"other":"{0} bit"},"perUnit":{}},"year":{"long":{"other":"{0} y"},"short":{"other":"{0} y"},"narrow":{"other":"{0} y"},"perUnit":{"long":"{0}/y","short":"{0}/y","narrow":"{0}/y"}},"month":{"long":{"other":"{0} m"},"short":{"other":"{0} m"},"narrow":{"other":"{0} m"},"perUnit":{"long":"{0}/m","short":"{0}/m","narrow":"{0}/m"}},"week":{"long":{"other":"{0} w"},"short":{"other":"{0} w"},"narrow":{"other":"{0} w"},"perUnit":{"long":"{0}/w","short":"{0}/w","narrow":"{0}/w"}},"day":{"long":{"other":"{0} d"},"short":{"other":"{0} d"},"narrow":{"other":"{0} d"},"perUnit":{"long":"{0}/d","short":"{0}/d","narrow":"{0}/d"}},"hour":{"long":{"other":"{0} h"},"short":{"other":"{0} h"},"narrow":{"other":"{0} h"},"perUnit":{"long":"{0}/h","short":"{0}/h","narrow":"{0}/h"}},"minute":{"long":{"other":"{0} min"},"short":{"other":"{0} min"},"narrow":{"other":"{0} min"},"perUnit":{"long":"{0}/min","short":"{0}/min","narrow":"{0}/min"}},"second":{"long":{"other":"{0} s"},"short":{"other":"{0} s"},"narrow":{"other":"{0} s"},"perUnit":{"long":"{0}/s","short":"{0}/s","narrow":"{0}/s"}},"millisecond":{"long":{"other":"{0} ms"},"short":{"other":"{0} ms"},"narrow":{"other":"{0} ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0} km"},"short":{"other":"{0} km"},"narrow":{"other":"{0} km"},"perUnit":{"long":"{0}/km","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} m"},"short":{"other":"{0} m"},"narrow":{"other":"{0} m"},"perUnit":{"long":"{0}/m","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} cm"},"short":{"other":"{0} cm"},"narrow":{"other":"{0} cm"},"perUnit":{"long":"{0}/cm","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0} mm"},"short":{"other":"{0} mm"},"narrow":{"other":"{0} mm"},"perUnit":{}},"mile":{"long":{"other":"{0} mi"},"short":{"other":"{0} mi"},"narrow":{"other":"{0} mi"},"perUnit":{}},"yard":{"long":{"other":"{0} yd"},"short":{"other":"{0} yd"},"narrow":{"other":"{0} yd"},"perUnit":{}},"foot":{"long":{"other":"{0} ft"},"short":{"other":"{0} ft"},"narrow":{"other":"{0} ft"},"perUnit":{"long":"{0}/ft","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0} in"},"short":{"other":"{0} in"},"narrow":{"other":"{0} in"},"perUnit":{"long":"{0}/in","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} smi"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} kg"},"short":{"other":"{0} kg"},"narrow":{"other":"{0} kg"},"perUnit":{"long":"{0}/kg","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} g"},"short":{"other":"{0} g"},"narrow":{"other":"{0} g"},"perUnit":{"long":"{0}/g","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} lb"},"short":{"other":"{0} lb"},"narrow":{"other":"{0} lb"},"perUnit":{"long":"{0}/lb","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0} oz"},"short":{"other":"{0} oz"},"narrow":{"other":"{0} oz"},"perUnit":{"long":"{0}/oz","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"{0} km/h"},"short":{"other":"{0} km/h"},"narrow":{"other":"{0} km/h"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} m/s"},"short":{"other":"{0} m/s"},"narrow":{"other":"{0} m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} mi/h"},"short":{"other":"{0} mi/h"},"narrow":{"other":"{0} mi/h"},"perUnit":{}},"celsius":{"long":{"other":"{0}°C"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0}°F"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} l"},"short":{"other":"{0} l"},"narrow":{"other":"{0} l"},"perUnit":{"long":"{0}/l","short":"{0}/l","narrow":"{0}/l"}},"milliliter":{"long":{"other":"{0} mL"},"short":{"other":"{0} mL"},"narrow":{"other":"{0} mL"},"perUnit":{}},"gallon":{"long":{"other":"{0} gal US"},"short":{"other":"{0} gal US"},"narrow":{"other":"{0} gal US"},"perUnit":{"long":"{0}/gal US","short":"{0}/gal US","narrow":"{0}/gal US"}},"fluid-ounce":{"long":{"other":"{0} fl oz US"},"short":{"other":"{0} fl oz US"},"narrow":{"other":"{0} fl oz US"},"perUnit":{}}},"compound":{"per":{"long":"{0}/{1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"Ego dirhams obodo UAE"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"Ego Afghani Obodo Afghanistan"},"symbol":"AFN","narrow":"؋"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"Ego Lek Obodo Albania"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"Ego Dram obodo Armenia"},"symbol":"AMD","narrow":"֏"},"ANG":{"displayName":{"other":"Ego Antillean Guilder obodo Netherlands"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"Ego kwanzas obodo Angola"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ARP"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"Ego Peso obodo Argentina"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"Ego dollars obodo Australia"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"Ego Florin obodo Aruba"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"Ego manats obodo Azerbaijan"},"symbol":"AZN","narrow":"₼"},"BAD":{"displayName":{"other":"BAD"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"Akara mgbanwe ego obodo Bosnia-Herzegovina"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"Ego Dollar obodo Barbados"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"Ego Taka obodo Bangladesh"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"Ego Lev mba Bulgaria"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"Ego Dinar Obodo Bahrain"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"Ego Franc obodo Burundi"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"Dollars Bermuda"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"Ego dollars obodo Brunei"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"Ego Boliviano obodo Bolivia"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"Real Brazil"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"Ego Dollar Obodo Bahamas"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"Ego Ngultrum obodo Bhutan"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"Ego pulas obodo Bostwana"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"Ego Ruble mba Belarus"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"BYR"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"Dollars Belize"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"Dollars Canada"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"Ego francs mba Congo"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"Ego Franc mba Switzerland"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"Ego Peso obodo Chile"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"Ego Yuan Obodo China (ndị bi na mmiri)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"Yuan China"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"Ego Peso obodo Columbia"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"Ego colóns obodo Costa Rica"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"Ego Peso e nwere ike ịgbanwe nke obodo Cuba"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"Ego pesos obodo Cuba"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"Escudo Caboverdiano"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"Ego Koruna obodo Czech"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"ego francs obodo Djibouti"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"Ego Krone Obodo Denmark"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"Ego Peso Obodo Dominica"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"Ego Dinar Obodo Algeria"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"EEK"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"Ego Pound obodo Egypt"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"Ego nakfas obodo Eritrea"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"Ego birrs obodo Ethiopia"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"euro"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"Ego dollars obodo Fijian"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"Ego Pound obodo Falkland Islands"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"Pound British"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"Ego Lari Obodo Georgia"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"Ego Cedi obodo Ghana"},"symbol":"GHS","narrow":"GH₵"},"GIP":{"displayName":{"other":"Ego Pound obodo Gibraltar"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"Ego Dalasi obodo Gambia"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"Ego Franc obodo Guinea"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"Ego Quetzal obodo Guatemala"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"Ego Dollar obodo Guyana"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"Ego Dollar Obodo Honk Kong"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"Ego Lempira obodo Honduras"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"Ego kunas obodo Croatia"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"Ego Gourde obodo Haiti"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"Ego Forint obodo Hungary"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"Ego Rupiah Obodo Indonesia"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"IEP"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"Ego Shekel ọhụrụ obodo Israel"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"Rupee India"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"Ego dinars obodo Iraq"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"Ego Rial obodo Iran"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"Ego Króna obodo Iceland"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"Ego Dollar obodo Jamaica"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"Ego Dinar Obodo Jordan"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"Yen Japan"},"symbol":"¥","narrow":"¥"},"KES":{"displayName":{"other":"Ego Shilling obodo Kenya"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"Ego Som Obodo Kyrgyzstan"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"Ego Riel obodo Cambodia"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"Ego Franc obodo Comoros"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"Ego Won Obodo North Korea"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"Ego Won Obodo South Korea"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"Ego Dinar Obodo Kuwait"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"Ego dollars obodo Cayman Islands"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"Ego Tenge obodo Kazakhstani"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"Ego Kip Obodo Laos"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"Ego Pound Obodo Lebanon"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"Ego Rupee obodo Sri Lanka"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"Ego Dollar obodo Liberia"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"LSL"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"LTL"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"LVL"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"Ego Dinar obodo Libya"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"Ego Dirham obodo Morocco"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"Ego leu mba Moldova"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"Ego ariaries obodo Madagascar"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"MGF"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"Ego denari mba Macedonia"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"Ego Kyat obodo Myanmar"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"Ego Turgik Obodo Mongolia"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"Ego Pataca ndị Obodo Macanese"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"MRO"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"Ego Ouguiya Obodo Mauritania"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"Ego Rupee obodo Mauritania"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"Ego Rufiyaa obodo Moldova"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"Ego kwachas obodo Malawi"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"Ego Peso obodo Mexico"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"Ego Ringgit obodo Malaysia"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"MZE"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"MZM"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"Ego meticals obodo Mozambique"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"Ego Dollar obodo Namibia"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"Naịra"},"symbol":"₦","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"Ego Córodoba obodo Nicaragua"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"Ego Krone Obodo Norway"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"Ego Rupee obodo Nepal"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"Ego dollars obodo New Zealand"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"Ego rials Obodo Oman"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"Ego Balboa obodo Panama"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"Ego Sol obodo Peru"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"Ego Kina obodo Papua New Guinea"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"Ego piso obodo Philippine"},"symbol":"₱","narrow":"₱"},"PKR":{"displayName":{"other":"Ego Rupee obodo Pakistan"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"Ego Zloty mba Poland"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"Ego Guarani obodo Paraguay"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"Ego rials obodo Qatar"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"Ego leu Obodo Romania"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"Ego Dinar obodo Serbia"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"Ruble Russia"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"Ego Franc obodo Rwanda"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"Ego Riyal obodo Saudi"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"Ego dollars obodo Solomon Islands"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"Ego rupees obodo Seychelles"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"Ego Pound obodo Sudan"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"Ego Krona Obodo Sweden"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"Ego Dollar obodo Singapore"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"Ego Pound obodo St Helena"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"Ego Leone obodo Sierra Leone"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"Ego shilling obodo Somali"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"Dollar Surinamese"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"Ego pounds mba ọdịda anyanwụ Sudan"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"STD"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"Ego Dobra nke obodo Sāo Tomé na Principe"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"Ego Pound obodo Syria"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"Ego emalangeni obodo Swaziland"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"Ego Baht obodo Thai"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"Who Somoni obodo Tajikistan"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"Ego Manat Obodo Turkmenistan"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"Ego Dinar Obodo Tunisia"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"Ego paʻanga obodo Tonga"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"Ego Lira obodo Turkey"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"Dollars Trinidad & Tobago"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"Dollar obodo New Taiwan"},"symbol":"NT$","narrow":"$"},"TZS":{"displayName":{"other":"Ego Shillings Obodo Tanzania"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"Ego Hryvnia obodo Ukraine"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"UGS"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"Ego shillings obodo Uganda"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"Dollars US"},"symbol":"$","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"Ego Peso obodo Uruguay"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"Ego som obodo Uzbekistan"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"VEB"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"VEF"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"Ego Bolivar obodo Venezuela"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"Ego Dong obodo Vietnam"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"Ego Vanuatu vatus obodo Vanuatu"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"Ego Tala obodo Samoa"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"Ego francs mba etiti Africa"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"Ego Dollar obodo East Carribbean"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"Ego CFA francs mba ọdịda anyanwụ Afrịka"},"symbol":"F CFA","narrow":"F CFA"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"Ego francs obodo CFP"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(ego amaghị)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"Ego Rial obodo Yemeni"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"Ego rand obodo South Africa"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"ZMK"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"Ego kwachas obodo Zambia"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"ZWD"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0G"},"10000000000":{"other":"00G"},"100000000000":{"other":"000G"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}},"short":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0G"},"10000000000":{"other":"00G"},"100000000000":{"other":"000G"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤#,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","unitPattern":"{0} {1}","short":{"1000":{"other":"¤0K"},"10000":{"other":"¤00K"},"100000":{"other":"¤000K"},"1000000":{"other":"¤0M"},"10000000":{"other":"¤00M"},"100000000":{"other":"¤000M"},"1000000000":{"other":"¤0G"},"10000000000":{"other":"¤00G"},"100000000000":{"other":"¤000G"},"1000000000000":{"other":"¤0T"},"10000000000000":{"other":"¤00T"},"100000000000000":{"other":"¤000T"}}}}},"nu":["latn"]},"locale":"ig"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
