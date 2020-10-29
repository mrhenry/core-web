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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("hu",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("hu").length
)) {
// Intl.NumberFormat.~locale.hu
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"hu":{"units":{"simple":{"degree":{"long":{"other":"{0} fok"},"short":{"other":"{0} fok"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} hektár"},"short":{"other":"{0} ha"},"narrow":{"other":"{0} ha"},"perUnit":{}},"acre":{"long":{"other":"{0} hold"},"short":{"other":"{0} kh"},"narrow":{"other":"{0} ac"},"perUnit":{}},"percent":{"long":{"other":"{0} százalék"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} liter per kilométer"},"short":{"other":"{0} l/km"},"narrow":{"other":"{0} l/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} mérföld per gallon"},"short":{"other":"{0} mpg"},"narrow":{"other":"{0} mpg"},"perUnit":{}},"petabyte":{"long":{"other":"{0} petabájt"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} terabájt"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} terabit"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0} Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} gigabájt"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} gigabit"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0} Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} megabájt"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} megabit"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0} Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kilobájt"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kilobit"},"short":{"other":"{0} kb"},"narrow":{"other":"{0} kb"},"perUnit":{}},"byte":{"long":{"other":"{0} bájt"},"short":{"other":"{0} bájt"},"narrow":{"other":"{0} B"},"perUnit":{}},"bit":{"long":{"other":"{0} bit"},"short":{"other":"{0} bit"},"narrow":{"other":"{0} bit"},"perUnit":{}},"year":{"long":{"other":"{0} év"},"short":{"other":"{0} év"},"narrow":{"other":"{0} év"},"perUnit":{"long":"{0}/év","short":"{0}/év","narrow":"{0}/év"}},"month":{"long":{"other":"{0} hónap"},"short":{"other":"{0} hónap"},"narrow":{"other":"{0} h."},"perUnit":{"long":"{0}/hónap","short":"{0}/hó","narrow":"{0}/hó"}},"week":{"long":{"other":"{0} hét"},"short":{"other":"{0} hét"},"narrow":{"other":"{0} hét"},"perUnit":{"long":"{0}/hét","short":"{0}/hét","narrow":"{0}/hét"}},"day":{"long":{"other":"{0} nap"},"short":{"other":"{0} nap"},"narrow":{"other":"{0} nap"},"perUnit":{"long":"{0}/nap","short":"{0}/nap","narrow":"{0}/nap"}},"hour":{"long":{"other":"{0} óra"},"short":{"other":"{0} h"},"narrow":{"other":"{0} h"},"perUnit":{"long":"{0}/óra","short":"{0}/h","narrow":"{0}/h"}},"minute":{"long":{"other":"{0} perc"},"short":{"other":"{0} min"},"narrow":{"other":"{0} min"},"perUnit":{"long":"{0}/perc","short":"{0}/min","narrow":"{0}/min"}},"second":{"long":{"other":"{0} másodperc"},"short":{"other":"{0} s"},"narrow":{"other":"{0} s"},"perUnit":{"long":"{0}/másodperc","short":"{0}/s","narrow":"{0}/s"}},"millisecond":{"long":{"other":"{0} ezredmásodperc"},"short":{"other":"{0} ms"},"narrow":{"other":"{0} ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0} kilométer"},"short":{"other":"{0} km"},"narrow":{"other":"{0} km"},"perUnit":{"long":"{0}/kilométer","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} méter"},"short":{"other":"{0} m"},"narrow":{"other":"{0} m"},"perUnit":{"long":"{0}/méter","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} centiméter"},"short":{"other":"{0} cm"},"narrow":{"other":"{0} cm"},"perUnit":{"long":"{0}/centimeter","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0} milliméter"},"short":{"other":"{0} mm"},"narrow":{"other":"{0} mm"},"perUnit":{}},"mile":{"long":{"other":"{0} mérföld"},"short":{"other":"{0} mf"},"narrow":{"other":"{0} mf"},"perUnit":{}},"yard":{"long":{"other":"{0} yard"},"short":{"other":"{0} yd"},"narrow":{"other":"{0} yd"},"perUnit":{}},"foot":{"long":{"other":"{0} láb"},"short":{"other":"{0} láb"},"narrow":{"other":"{0} láb"},"perUnit":{"long":"{0}/láb","short":"{0}/láb","narrow":"{0}/láb"}},"inch":{"long":{"other":"{0} hüvelyk"},"short":{"other":"{0} hüvelyk"},"narrow":{"other":"{0} hüvelyk"},"perUnit":{"long":"{0}/hüvelyk","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} svéd mérföld"},"short":{"other":"{0} mil"},"narrow":{"other":"{0} mil"},"perUnit":{}},"kilogram":{"long":{"other":"{0} kilogramm"},"short":{"other":"{0} kg"},"narrow":{"other":"{0} kg"},"perUnit":{"long":"{0}/kilogramm","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} gramm"},"short":{"other":"{0} g"},"narrow":{"other":"{0} g"},"perUnit":{"long":"{0}/gramm","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} stone"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} font"},"short":{"other":"{0} lb"},"narrow":{"other":"{0} font","one":"{0} lb"},"perUnit":{"long":"{0}/font","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0} uncia"},"short":{"other":"{0} oz"},"narrow":{"other":"{0} uncia","one":"{0} oz"},"perUnit":{"long":"{0}/uncia","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"{0} kilométer per óra"},"short":{"other":"{0} km/h"},"narrow":{"other":"{0} km/h"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} méter per másodperc"},"short":{"other":"{0} m/s"},"narrow":{"other":"{0} m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} mérföld per óra"},"short":{"other":"{0} mph"},"narrow":{"other":"{0} mph"},"perUnit":{}},"celsius":{"long":{"other":"{0} Celsius-fok"},"short":{"other":"{0} °C"},"narrow":{"other":"{0} °C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} Fahrenheit-fok"},"short":{"other":"{0} °F"},"narrow":{"other":"{0} °F"},"perUnit":{}},"liter":{"long":{"other":"{0} liter"},"short":{"other":"{0} l"},"narrow":{"other":"{0} l"},"perUnit":{"long":"{0}/liter","short":"{0}/l","narrow":"{0}/l"}},"milliliter":{"long":{"other":"{0} milliliter"},"short":{"other":"{0} ml"},"narrow":{"other":"{0} ml"},"perUnit":{}},"gallon":{"long":{"other":"{0} gallon"},"short":{"other":"{0} gal"},"narrow":{"other":"{0} gal"},"perUnit":{"long":"{0}/gallon","short":"{0}/gal","narrow":"{0}/gal"}},"fluid-ounce":{"long":{"other":"{0} folyadékuncia"},"short":{"other":"{0} fl oz"},"narrow":{"other":"{0} fl oz"},"perUnit":{}}},"compound":{"per":{"long":"{0} per {1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"Andorrai peseta"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"EAE-dirham"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"afgán afghani (1927–2002)"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"afgán afghani"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"albán lek (1946–1965)"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"albán lek"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"örmény dram"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"holland antilláki forint"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"angolai kwanza"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"Angolai kwanza (1977–1990)"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"Angolai új kwanza (1990–2000)"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"Angolai kwanza reajustado (1995–1999)"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"Argentin austral"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"Argentín peso (1983–1985)"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"argentin peso"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"Osztrák schilling"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"ausztrál dollár"},"symbol":"AUD","narrow":"$"},"AWG":{"displayName":{"other":"arubai florin"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"azerbajdzsáni manat (1993–2006)"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"azerbajdzsáni manat"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"Bosznia-hercegovinai dínár (1992–1994)"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"bosznia-hercegovinai konvertibilis márka"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"bosznia-hercegovinai új dínár (1994–1997)"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"barbadosi dollár"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"bangladesi taka"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"Belga frank (konvertibilis)"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"Belga frank"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"Belga frank (pénzügyi)"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"Bolgár kemény leva"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"bolgár szocialista leva"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"bolgár új leva"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"bolgár leva (1879–1952)"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"bahreini dinár"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"burundi frank"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"bermudai dollár"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"brunei dollár"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"bolíviai boliviano"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"Bolíviai peso"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"Bolíviai mvdol"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"Brazi cruzeiro novo (1967–1986)"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"Brazi cruzado (1986–1989)"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"Brazil cruzeiro (1990–1993)"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"brazil real"},"symbol":"BRL","narrow":"R$"},"BRN":{"displayName":{"other":"Brazil cruzado novo (1989–1990)"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"Brazil cruzeiro (1993–1994)"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"bahamai dollár"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"bhutáni ngultrum"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"burmai kjap"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"botswanai pula"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"fehérorosz új rubel (1994–1999)"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"belarusz rubel"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"fehérorosz rubel (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"belize-i dollár"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"kanadai dollár"},"symbol":"CAD","narrow":"$"},"CDF":{"displayName":{"other":"kongói frank"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"WIR euro"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"svájci frank"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"WIR frank"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"Chilei unidades de fomento"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"chilei peso"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"kínai jüan (offshore)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"kínai jüan"},"symbol":"CNY","narrow":"¥"},"COP":{"displayName":{"other":"kolumbiai peso"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"Unidad de Valor Real"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"Costa Rica-i colon"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"szerb dinár (2002–2006)"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"csehszlovák kemény korona"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"kubai konvertibilis peso"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"kubai peso"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"Cape Verde-i escudo"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"Ciprusi font"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"cseh korona"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"Kelet-Német márka"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"Német márka"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"dzsibuti frank"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"dán korona"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"dominikai peso"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"algériai dínár"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"Ecuadori sucre"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"Ecuadori Unidad de Valor Constante (UVC)"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"Észt korona"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"egyiptomi font"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"eritreai nakfa"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"spanyol peseta (A–kontó)"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"spanyol peseta (konvertibilis kontó)"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"spanyol peseta"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"etiópiai birr"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"euró"},"symbol":"EUR","narrow":"€"},"FIM":{"displayName":{"other":"Finn markka"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"fidzsi dollár"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"falkland-szigeteki font"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"Francia frank"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"angol font"},"symbol":"GBP","narrow":"£"},"GEK":{"displayName":{"other":"Grúz kupon larit"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"grúz lari"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"Ghánai cedi (1979–2007)"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"ghánai cedi"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"gibraltári font"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"gambiai dalasi"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"guineai frank"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"Guineai syli"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"Egyenlítői-guineai ekwele"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"görög drachma"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"guatemalai quetzal"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"Portugál guinea escudo"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"Guinea-Bissaui peso"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"guyanai dollár"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"hongkongi dollár"},"symbol":"HKD","narrow":"$"},"HNL":{"displayName":{"other":"hodurasi lempira"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"horvát dínár"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"horvát kuna"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"haiti gourde"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"magyar forint"},"symbol":"Ft","narrow":"Ft"},"IDR":{"displayName":{"other":"indonéz rúpia"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"Ír font"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"Izraeli font"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"izraeli új sékel"},"symbol":"ILS","narrow":"₪"},"INR":{"displayName":{"other":"indiai rúpia"},"symbol":"INR","narrow":"₹"},"IQD":{"displayName":{"other":"iraki dínár"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"iráni rial"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"izlandi korona"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"olasz líra"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"jamaicai dollár"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"jordániai dínár"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"japán jen"},"symbol":"¥","narrow":"¥"},"KES":{"displayName":{"other":"kenyai shilling"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"kirgizisztáni szom"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"kambodzsai riel"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"comorei frank"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"észak-koreai won"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"dél-koreai won"},"symbol":"KRW","narrow":"₩"},"KWD":{"displayName":{"other":"kuvaiti dínár"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"kajmán-szigeteki dollár"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"kazahsztáni tenge"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"laoszi kip"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"libanoni font"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"Srí Lanka-i rúpia"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"libériai dollár"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"Lesothoi loti"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"litvániai litas"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"Litvániai talonas"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"luxemburgi konvertibilis frank"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"Luxemburgi frank"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"luxemburgi pénzügyi frank"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"lett lats"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"Lett rubel"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"líbiai dínár"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"marokkói dirham"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"Marokkói frank"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"moldáv kupon"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"moldován lei"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"madagaszkári ariary"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"Madagaszkári frank"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"macedon dínár"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"macedón dénár (1992–1993)"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"Mali frank"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"mianmari kyat"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"mongóliai tugrik"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"makaói pataca"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"mauritániai ouguiya (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"mauritániai ouguiya"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"máltai líra"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"máltai font"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"mauritiusi rúpia"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"maldív-szigeteki rufiyaa"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"malawi kwacha"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"mexikói peso"},"symbol":"MXN","narrow":"$"},"MXP":{"displayName":{"other":"Mexikói ezüst peso (1861–1992)"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"Mexikói Unidad de Inversion (UDI)"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"malajziai ringgit"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"Mozambik escudo"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"Mozambik metical"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"mozambiki metikális"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"namíbiai dollár"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"nigériai naira"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"Nikaraguai cordoba"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"nicaraguai córdoba"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"Holland forint"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"norvég korona"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"nepáli rúpia"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"új-zélandi dollár"},"symbol":"NZD","narrow":"$"},"OMR":{"displayName":{"other":"ománi rial"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"panamai balboa"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"perui inti"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"perui sol"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"perui sol (1863–1965)"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"pápua új-guineai kina"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"fülöp-szigeteki peso"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"pakisztáni rúpia"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"lengyel zloty"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"lengyel zloty (PLZ)"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"portugál escudo"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"paraguayi guarani"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"katari rial"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"Rhodéziai dollár"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"román lej (1952–2006)"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"román lej"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"szerb dínár"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"orosz rubel"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"orosz rubel (1991–1998)"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"ruandai frank"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"szaúdi riyal"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"salamon-szigeteki dollár"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"seychelle-szigeteki rúpia"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"Szudáni dínár (1992–2007)"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"szudáni font"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"Szudáni font (1957–1998)"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"svéd korona"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"szingapúri dollár"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"Szent Ilona-i font"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"szlovén tolár"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"szlovák korona"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"Sierra Leone-i leone"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"szomáli shilling"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"suriname-i dollár"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"Suriname-i gulden"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"dél-szudáni font"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"São Tomé és Príncipe-i dobra (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"São Tomé és Príncipe-i dobra"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"szovjet rubel"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"Salvadori colón"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"szíriai font"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"szvázi lilangeni"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"thai baht"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"Tádzsikisztáni rubel"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"tádzsikisztáni somoni"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"türkmenisztáni manat (1993–2009)"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"türkmenisztáni manat"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"tunéziai dínár"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"tongai paanga"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"timori escudo"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"török líra (1922–2005)"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"török líra"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"Trinidad és Tobago-i dollár"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"tajvani új dollár"},"symbol":"TWD","narrow":"NT$"},"TZS":{"displayName":{"other":"tanzániai shilling"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"ukrán hrivnya"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"ukrán karbovanec"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"Ugandai shilling (1966–1987)"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"ugandai shilling"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"USA-dollár"},"symbol":"USD","narrow":"$"},"USN":{"displayName":{"other":"USA dollár (következő napi)"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USA dollár (aznapi)"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"Uruguayi peso en unidades indexadas"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"Uruguayi peso (1975–1993)"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"uruguayi peso"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"üzbegisztáni szum"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"Venezuelai bolivar (1871–2008)"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"venezuelai bolivar (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"venezuelai bolivar"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"vietnámi dong"},"symbol":"VND","narrow":"₫"},"VNN":{"displayName":{"other":"vietnámi dong (1978–1985)"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"vanuatui vatu"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"nyugat-szamoai tala"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"CFA frank BEAC"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"Ezüst"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"Arany"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"Európai kompozit egység"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"Európai monetáris egység"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"Európai kontó egység (XBC)"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"Európai kontó egység (XBD)"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"kelet-karibi dollár"},"symbol":"XCD","narrow":"$"},"XDR":{"displayName":{"other":"Special Drawing Rights"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"Európai pénznemegység"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"Francia arany frank"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"Francia UIC-frank"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"CFA frank BCEAO"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"Palládium"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"csendes-óceáni valutaközösségi frank"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"Platina"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"RINET tőke"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"Tesztelési pénznemkód"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(ismeretlen pénznem)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"Jemeni dínár"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"jemeni rial"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"jugoszláv kemény dinár (1966–1990)"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"jugoszláv új dinár (1994–2002)"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"jugoszláv konvertibilis dinár (1990–1992)"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"jugoszláv reformált dinár (1992–1993)"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"Dél-afrikai rand (pénzügyi)"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"dél-afrikai rand"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"Zambiai kwacha (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"zambiai kwacha"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"Zairei új zaire"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"Zairei zaire"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"Zimbabwei dollár (1980–2008)"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"Zimbabwei dollár (2009)"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"Zimbabwei dollár (2008)"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":",","group":" ","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 ezer"},"10000":{"other":"00 ezer"},"100000":{"other":"000 ezer"},"1000000":{"other":"0 millió"},"10000000":{"other":"00 millió"},"100000000":{"other":"000 millió"},"1000000000":{"other":"0 milliárd"},"10000000000":{"other":"00 milliárd"},"100000000000":{"other":"000 milliárd"},"1000000000000":{"other":"0 billió"},"10000000000000":{"other":"00 billió"},"100000000000000":{"other":"000 billió"}},"short":{"1000":{"other":"0 E"},"10000":{"other":"00 E"},"100000":{"other":"000 E"},"1000000":{"other":"0 M"},"10000000":{"other":"00 M"},"100000000":{"other":"000 M"},"1000000000":{"other":"0 Mrd"},"10000000000":{"other":"00 Mrd"},"100000000000":{"other":"000 Mrd"},"1000000000000":{"other":"0 B"},"10000000000000":{"other":"00 B"},"100000000000000":{"other":"000 B"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"#,##0.00 ¤","accounting":"#,##0.00 ¤","unitPattern":"{0} {1}","short":{"1000":{"other":"0 E ¤"},"10000":{"other":"00 E ¤"},"100000":{"other":"000 E ¤"},"1000000":{"other":"0 M ¤"},"10000000":{"other":"00 M ¤"},"100000000":{"other":"000 M ¤"},"1000000000":{"other":"0 Mrd ¤"},"10000000000":{"other":"00 Mrd ¤"},"100000000000":{"other":"000 Mrd ¤"},"1000000000000":{"other":"0 B ¤"},"10000000000000":{"other":"00 B ¤"},"100000000000000":{"other":"000 B ¤"}}}}},"nu":["latn"]}},"availableLocales":["hu"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
