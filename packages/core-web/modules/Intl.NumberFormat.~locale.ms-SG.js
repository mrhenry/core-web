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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("ms-SG",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("ms-SG").length
)) {
// Intl.NumberFormat.~locale.ms-SG
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"{0} darjah"},"short":{"other":"{0} darjah"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} hektar"},"short":{"other":"{0} ha"},"narrow":{"other":"{0} ha"},"perUnit":{}},"acre":{"long":{"other":"{0} ekar"},"short":{"other":"{0} ekar"},"narrow":{"other":"{0} ekar"},"perUnit":{}},"percent":{"long":{"other":"{0} peratus"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} liter sekilometer"},"short":{"other":"{0} L/km"},"narrow":{"other":"{0} L/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} batu segelen"},"short":{"other":"{0} bpg"},"narrow":{"other":"{0} bpg"},"perUnit":{}},"petabyte":{"long":{"other":"{0} petabait"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} terabait"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} terabit"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0} Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} gigabait"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} gigabit"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0} Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} megabait"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} megabit"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0} Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kilobait"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kilobit"},"short":{"other":"{0} kb"},"narrow":{"other":"{0} kb"},"perUnit":{}},"byte":{"long":{"other":"{0} bait"},"short":{"other":"{0} bait"},"narrow":{"other":"{0} bait"},"perUnit":{}},"bit":{"long":{"other":"{0} bit"},"short":{"other":"{0} bit"},"narrow":{"other":"{0} bit"},"perUnit":{}},"year":{"long":{"other":"{0} tahun"},"short":{"other":"{0} thn"},"narrow":{"other":"{0} thn"},"perUnit":{"long":"{0} setiap tahun","short":"{0}/thn","narrow":"{0}/thn"}},"month":{"long":{"other":"{0} bulan"},"short":{"other":"{0} bln"},"narrow":{"other":"{0} bln"},"perUnit":{"long":"{0} setiap bulan","short":"{0}/bln","narrow":"{0}/bln"}},"week":{"long":{"other":"{0} minggu"},"short":{"other":"{0} mgu"},"narrow":{"other":"{0} mgu"},"perUnit":{"long":"{0} setiap minggu","short":"{0}/mgu","narrow":"{0}/mgu"}},"day":{"long":{"other":"{0} hari"},"short":{"other":"{0} hari"},"narrow":{"other":"{0} h"},"perUnit":{"long":"{0} setiap hari","short":"{0}/h","narrow":"{0}/h"}},"hour":{"long":{"other":"{0} jam"},"short":{"other":"{0} j"},"narrow":{"other":"{0} j"},"perUnit":{"long":"{0} sejam","short":"{0}/j","narrow":"{0}/j"}},"minute":{"long":{"other":"{0} minit"},"short":{"other":"{0} min"},"narrow":{"other":"{0} min"},"perUnit":{"long":"{0} setiap minit","short":"{0}/min","narrow":"{0}/min"}},"second":{"long":{"other":"{0} saat"},"short":{"other":"{0} saat"},"narrow":{"other":"{0} s"},"perUnit":{"long":"{0} sesaat","short":"{0}/s","narrow":"{0}/s"}},"millisecond":{"long":{"other":"{0} milisaat"},"short":{"other":"{0} ms"},"narrow":{"other":"{0} ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0} kilometer"},"short":{"other":"{0} km"},"narrow":{"other":"{0} km"},"perUnit":{"long":"{0} setiap kilometer","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} meter"},"short":{"other":"{0} m"},"narrow":{"other":"{0} m"},"perUnit":{"long":"{0} setiap meter","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} sentimeter"},"short":{"other":"{0} cm"},"narrow":{"other":"{0} cm"},"perUnit":{"long":"{0} setiap sentimeter","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0} milimeter"},"short":{"other":"{0} mm"},"narrow":{"other":"{0} mm"},"perUnit":{}},"mile":{"long":{"other":"{0} batu"},"short":{"other":"{0} bt"},"narrow":{"other":"{0} bt"},"perUnit":{}},"yard":{"long":{"other":"{0} ela"},"short":{"other":"{0} ela"},"narrow":{"other":"{0} ela"},"perUnit":{}},"foot":{"long":{"other":"{0} kaki"},"short":{"other":"{0} ka"},"narrow":{"other":"{0}'"},"perUnit":{"long":"{0} sekaki","short":"{0}/ka","narrow":"{0}/ka"}},"inch":{"long":{"other":"{0} inci"},"short":{"other":"{0} in"},"narrow":{"other":"{0}\\\""},"perUnit":{"long":"{0} seinci","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} batu-skandinavia"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} kilogram"},"short":{"other":"{0} kg"},"narrow":{"other":"{0} kg"},"perUnit":{"long":"{0} setiap kilogram","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} gram"},"short":{"other":"{0} g"},"narrow":{"other":"{0} g"},"perUnit":{"long":"{0} setiap gram","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} paun"},"short":{"other":"{0} lb"},"narrow":{"other":"{0} paun"},"perUnit":{"long":"{0} setiap paun","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0} auns"},"short":{"other":"{0} oz"},"narrow":{"other":"{0} auns"},"perUnit":{"long":"{0} setiap auns","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"{0} kilometer sejam"},"short":{"other":"{0} kmj"},"narrow":{"other":"{0} kmj"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} meter sesaat"},"short":{"other":"{0} m/s"},"narrow":{"other":"{0} m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} batu sejam"},"short":{"other":"{0} bsj"},"narrow":{"other":"{0} bsj"},"perUnit":{}},"celsius":{"long":{"other":"{0} darjah Celsius"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} darjah Fahrenheit"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} liter"},"short":{"other":"{0} l"},"narrow":{"other":"{0} l"},"perUnit":{"long":"{0} setiap liter","short":"{0}/l","narrow":"{0}/l"}},"milliliter":{"long":{"other":"{0} mililiter"},"short":{"other":"{0} mL"},"narrow":{"other":"{0} mL"},"perUnit":{}},"gallon":{"long":{"other":"{0} gelen"},"short":{"other":"{0} gal"},"narrow":{"other":"{0} gal"},"perUnit":{"long":"{0} segelen","short":"{0}/gal","narrow":"{0}/gal"}},"fluid-ounce":{"long":{"other":"{0} auns cecair"},"short":{"other":"{0} fl oz"},"narrow":{"other":"{0} fl oz"},"perUnit":{}}},"compound":{"per":{"long":"{0} per {1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"Dirham UAE"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"Afghani Afghanistan"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"Lek Albania"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"Dram Armenia"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"Guilder Antillen Belanda"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"Kwanza Angola"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ARP"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"Peso Argentina"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"Dolar Australia"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"Florin Aruba"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"Manat Azerbaijan"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"BAD"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"Mark Boleh Tukar Bosnia-Herzegovina"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"Dolar Barbados"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"Taka Bangladesh"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"Lev Bulgaria"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"Dinar Bahrain"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"Franc Burundi"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"Dolar Bermuda"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"Dolar Brunei"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"Boliviano Bolivia"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"Real Brazil"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"Dolar Bahamas"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"Ngultrum Bhutan"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"Pula Botswana"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"rubel lama Belarus"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"Rubel Belarus"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"Dolar Belize"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"Dolar Kanada"},"symbol":"CAD","narrow":"$"},"CDF":{"displayName":{"other":"Franc Congo"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"Franc Switzerland"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"Peso Chile"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"Yuan China (luar pesisir)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"Yuan Cina"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"Peso Colombia"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"Colon Costa Rica"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"Peso Boleh Tukar Cuba"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"Peso Cuba"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"Escudo Tanjung Verde"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"Koruna Republik Czech"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"Franc Djibouti"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"Krone Denmark"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"Peso Dominican"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"Dinar Algeria"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"EEK"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"Paun Mesir"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"Nakfa Eritrea"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"Birr Ethiopia"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"Euro"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"Dolar Fiji"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"Paun Kepulauan Falkland"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"Paun British"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"Lari Georgia"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"Cedi Ghana"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"Paun Gibraltar"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"Dalasi Gambia"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"Franc Guinea"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"Quetzal Guatemala"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"Dolar Guyana"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"Dolar Hong Kong"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"Lempira Honduras"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"Kuna Croatia"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"Gourde Haiti"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"Forint Hungary"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"Rupiah Indonesia"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"IEP"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"Syekel baharu Israel"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"Rupee India"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"Dinar Iraq"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"Rial Iran"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"Krona Iceland"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"Dolar Jamaica"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"Dinar Jordan"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"Yen Jepun"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"Syiling Kenya"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"Som Kyrgystani"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"Riel Kemboja"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"Franc Comoria"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"Won Korea Utara"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"Won Korea Selatan"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"Dinar Kuwait"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"Dolar Kepulauan Cayman"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"Tenge Kazakhstan"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"Kip Laos"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"Paun Lubnan"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"Rupee Sri Lanka"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"Dolar Liberia"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"Loti Lesotho"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"Litas Lithuania"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"Lats Latvia"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"Dinar Libya"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"Dirham Maghribi"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"Leu Moldova"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"Ariary Malagasy"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"Franc Malagasy"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"Denar Macedonia"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"Kyat Myanma"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"Tugrik Mongolia"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"Pataca Macau"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"Ouguiya Mauritania (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"Ouguiya Mauritania"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"Rupee Mauritius"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"Rufiyaa Maldives"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"Kwacha Malawi"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"Peso Mexico"},"symbol":"MXN","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"Ringgit Malaysia"},"symbol":"RM","narrow":"RM"},"MZE":{"displayName":{"other":"Escudo Mozambique"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"Metical Mozambique (1980–2006)"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"Metikal Mozambique"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"Dolar Namibia"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"Naira Nigeria"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"Cordoba Nicaragua"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"Krone Norway"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"Rupee Nepal"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"Dolar New Zealand"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"Rial Oman"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"Balboa Panama"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"Sol Peru"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"Kina Papua New Guinea"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"Peso Filipina"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"Rupee Pakistan"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"Zloty Poland"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"Guarani Paraguay"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"Rial Qatar"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"Dolar Rhodesia"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"Leu Romania"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"Dinar Serbia"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"Rubel Rusia"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"Franc Rwanda"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"Riyal Saudi"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"Dolar Kepulauan Solomon"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"Rupee Seychelles"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"Paun Sudan"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"Krona Sweden"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"Dolar Singapura"},"symbol":"$","narrow":"$"},"SHP":{"displayName":{"other":"Paun Saint Helena"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"Leone Sierra Leone"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"Syiling Somali"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"Dolar Surinam"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"Paun Sudan selatan"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"Dobra Sao Tome dan Principe (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"Dobra Sao Tome dan Principe"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"Paun Syria"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"Lilangeni Swazi"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"Baht Thai"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"Somoni Tajikistan"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"Manat Turkmenistan"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"Dinar Tunisia"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"Pa’anga Tonga"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"Lira Turki"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"Dolar Trinidad dan Tobago"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"Dolar Taiwan Baru"},"symbol":"NT$","narrow":"NT$"},"TZS":{"displayName":{"other":"Syiling Tanzania"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"Hryvnia Ukraine"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"Shilling Uganda (1966–1987)"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"Syiling Uganda"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"Dolar AS"},"symbol":"USD","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"Peso Uruguay"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"Som Uzbekistan"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"VEB"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"Bolivar Venezuela (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"Bolivar Venezuela"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"Dong Vietnam"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"Vatu Vanuatu"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"Tala Samoa"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"Franc CFA BEAC"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"Dolar Caribbean Timur"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"Franc CFA BCEAO"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"Franc CFP"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(mata wang tidak diketahui)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"Rial Yaman"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"Rand Afrika Selatan"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"Kwacha Zambia (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"Kwacha Zambia"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"Dolar Zimbabwe (1980–2008)"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"Dolar Zimbabwe (2009)"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"Dolar Zimbabwe (2008)"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 ribu"},"10000":{"other":"00 ribu"},"100000":{"other":"000 ribu"},"1000000":{"other":"0 juta"},"10000000":{"other":"00 juta"},"100000000":{"other":"000 juta"},"1000000000":{"other":"0 bilion"},"10000000000":{"other":"00 bilion"},"100000000000":{"other":"000 bilion"},"1000000000000":{"other":"0 trilion"},"10000000000000":{"other":"00 trilion"},"100000000000000":{"other":"000 trilion"}},"short":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0J"},"10000000":{"other":"00J"},"100000000":{"other":"000J"},"1000000000":{"other":"0B"},"10000000000":{"other":"00B"},"100000000000":{"other":"000B"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤#,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","unitPattern":"{0} {1}","short":{"1000":{"other":"¤0K"},"10000":{"other":"¤00K"},"100000":{"other":"¤000K"},"1000000":{"other":"¤0J"},"10000000":{"other":"¤00J"},"100000000":{"other":"¤000J"},"1000000000":{"other":"¤0B"},"10000000000":{"other":"¤00B"},"100000000000":{"other":"¤000B"},"1000000000000":{"other":"¤0T"},"10000000000000":{"other":"¤00T"},"100000000000000":{"other":"¤000T"}}}}},"nu":["latn"]},"locale":"ms-SG"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
