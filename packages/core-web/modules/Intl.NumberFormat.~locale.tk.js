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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("tk",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("tk").length
)) {
// Intl.NumberFormat.~locale.tk
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"{0} dereje"},"short":{"other":"{0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} gektar"},"short":{"other":"{0} ga"},"narrow":{"other":"{0} ga"},"perUnit":{}},"acre":{"long":{"other":"{0} akr"},"short":{"other":"{0} akr"},"narrow":{"other":"{0} akr"},"perUnit":{}},"percent":{"long":{"other":"{0} göterim"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} litr/kilometr"},"short":{"other":"{0} l/km"},"narrow":{"other":"{0} l/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} mil/gallon"},"short":{"other":"{0} mil/gal."},"narrow":{"other":"{0} mil/gal."},"perUnit":{}},"petabyte":{"long":{"other":"{0} petabaýt"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} terabaýt"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} terabit"},"short":{"other":"{0} Tbit"},"narrow":{"other":"{0} Tbit"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} gigabaýt"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} gigabit"},"short":{"other":"{0} Gbit"},"narrow":{"other":"{0} Gbit"},"perUnit":{}},"megabyte":{"long":{"other":"{0} megabaýt"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} megabit"},"short":{"other":"{0} Mbit"},"narrow":{"other":"{0} Mbit"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kilobaýt"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kilobit"},"short":{"other":"{0} kbit"},"narrow":{"other":"{0} kbit"},"perUnit":{}},"byte":{"long":{"other":"{0} baýt"},"short":{"other":"{0} B"},"narrow":{"other":"{0} B"},"perUnit":{}},"bit":{"long":{"other":"{0} bit"},"short":{"other":"{0} bit"},"narrow":{"other":"{0} bit"},"perUnit":{}},"year":{"long":{"other":"{0} ýyl"},"short":{"other":"{0} ý."},"narrow":{"other":"{0}ý"},"perUnit":{"long":"{0}/ý","short":"{0}/ý.","narrow":"{0}/ý."}},"month":{"long":{"other":"{0} aý"},"short":{"other":"{0} a"},"narrow":{"other":"{0}a"},"perUnit":{"long":"{0}/aý","short":"{0}/a","narrow":"{0}/a"}},"week":{"long":{"other":"{0} hepde"},"short":{"other":"{0} hep"},"narrow":{"other":"{0}h"},"perUnit":{"long":"{0}/hepde","short":"{0}/hep","narrow":"{0}/hep"}},"day":{"long":{"other":"{0} gün"},"short":{"other":"{0} gün"},"narrow":{"other":"{0}g"},"perUnit":{"long":"{0}/gün","short":"{0}/gün","narrow":"{0}/gün"}},"hour":{"long":{"other":"{0} sagat"},"short":{"other":"{0} sag"},"narrow":{"other":"{0}sg"},"perUnit":{"long":"{0}/sagat","short":"{0}/sag","narrow":"{0}/sag"}},"minute":{"long":{"other":"{0} minut"},"short":{"other":"{0} min"},"narrow":{"other":"{0}m"},"perUnit":{"long":"{0}/minut","short":"{0}/min","narrow":"{0}/min"}},"second":{"long":{"other":"{0} sekunt"},"short":{"other":"{0} sek"},"narrow":{"other":"{0}se"},"perUnit":{"long":"{0}/sekunt","short":"{0}/sek","narrow":"{0}/sek"}},"millisecond":{"long":{"other":"{0} millisekunt"},"short":{"other":"{0} msek"},"narrow":{"other":"{0}ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0} kilometr"},"short":{"other":"{0} km"},"narrow":{"other":"{0}km"},"perUnit":{"long":"{0}/kilometr","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} metr"},"short":{"other":"{0} m"},"narrow":{"other":"{0}m"},"perUnit":{"long":"{0}/m","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} santimetr"},"short":{"other":"{0} sm"},"narrow":{"other":"{0}sm"},"perUnit":{"long":"{0}/sm","short":"{0}/sm","narrow":"{0}/sm"}},"millimeter":{"long":{"other":"{0} millimetr"},"short":{"other":"{0} mm"},"narrow":{"other":"{0}mm"},"perUnit":{}},"mile":{"long":{"other":"{0} mil"},"short":{"other":"{0} mi"},"narrow":{"other":"{0} mi"},"perUnit":{}},"yard":{"long":{"other":"{0} ýard"},"short":{"other":"{0} ýd"},"narrow":{"other":"{0} ýd"},"perUnit":{}},"foot":{"long":{"other":"{0} fut"},"short":{"other":"{0} ft"},"narrow":{"other":"{0} ft"},"perUnit":{"long":"{0}/fut","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0} dýuým"},"short":{"other":"{0} dý"},"narrow":{"other":"{0} dý"},"perUnit":{"long":"{0}/dýuým","short":"{0}/dý","narrow":"{0}/dý"}},"mile-scandinavian":{"long":{"other":"{0} skandinaw mili"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} kilogram"},"short":{"other":"{0} kg"},"narrow":{"other":"{0}kg"},"perUnit":{"long":"{0}/kilogram","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} gram"},"short":{"other":"{0} g"},"narrow":{"other":"{0}g"},"perUnit":{"long":"{0}/gram","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} stoun"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} funt"},"short":{"other":"{0} funt"},"narrow":{"other":"{0} funt"},"perUnit":{"long":"{0}/funt","short":"{0}/funt","narrow":"{0}/funt"}},"ounce":{"long":{"other":"{0} unsiýa"},"short":{"other":"{0} uns."},"narrow":{"other":"{0} uns."},"perUnit":{"long":"{0}/unsiýa","short":"{0}/uns.","narrow":"{0}/uns."}},"kilometer-per-hour":{"long":{"other":"{0} kilometr/sagat"},"short":{"other":"{0} km/sag"},"narrow":{"other":"{0}km/sag"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} metr/sekunt"},"short":{"other":"{0} m/s"},"narrow":{"other":"{0} m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} mil/sagat"},"short":{"other":"{0} mil/sag"},"narrow":{"other":"{0} mil/sag"},"perUnit":{}},"celsius":{"long":{"other":"{0} Selsiý gradusy"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} Farengeýt gradusy"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} litr"},"short":{"other":"{0} l"},"narrow":{"other":"{0}l"},"perUnit":{"long":"{0} /litr","short":"{0}/l","narrow":"{0}/l"}},"milliliter":{"long":{"other":"{0} millilitr"},"short":{"other":"{0} ml"},"narrow":{"other":"{0} ml"},"perUnit":{}},"gallon":{"long":{"other":"{0} gallon"},"short":{"other":"{0} gal."},"narrow":{"other":"{0} gal."},"perUnit":{"long":"{0}/gallon","short":"{0}/gal.","narrow":"{0}/gal."}},"fluid-ounce":{"long":{"other":"{0} suwuklyk unsiýasy"},"short":{"other":"{0} suw. uns."},"narrow":{"other":"{0} suw. uns."},"perUnit":{}}},"compound":{"per":{"long":"{1} başyna {0}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"BAE dirhemi"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"owgan afganisi"},"symbol":"AFN","narrow":"؋"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"alban leki"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"ermeni dramy"},"symbol":"AMD","narrow":"֏"},"ANG":{"displayName":{"other":"niderland antil guldeni"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"angola kwanzasy"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ARP"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"argentin pesosy"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"awstraliýa dollary"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"aruba florini"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"azerbaýjan manady"},"symbol":"AZN","narrow":"₼"},"BAD":{"displayName":{"other":"BAD"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"konwertirlenýän bosniýa we gersegowina markasy"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"barbados dollary"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"bangladeş takasy"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"bolgar lewi"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"bahreýn dinary"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"burundi franky"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"bermuda dollary"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"bruneý dollary"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"boliwiýa boliwianosy"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"brazil realy"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"bagama dollary"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"butan ngultrumy"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"botswana pulasy"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"belarus rubly"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"belorus rubly (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"beliz dollary"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"kanada dollary"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"kongo franky"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"şweýsar franky"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"çili pesosy"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"hytaý ýuany (ofşor)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"hytaý ýuany"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"kolumbiýa pesosy"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"kosta-rika kolony"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"konwertirlenýän kuba pesosy"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"kuba pesosy"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"kabo-werde eskudosy"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"çeh kronasy"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"jibuti franky"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"daniýa kronasy"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"dominikan pesosy"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"alžir dinary"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"EEK"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"müsür funty"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"eritreýa nakfasy"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"efiopiýa byry"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"ýewro"},"symbol":"EUR","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"fiji dollary"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"folklend adalarynyň funty"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"britan funt sterlingi"},"symbol":"GBP","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"gruzin larisi"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"gano sedisi"},"symbol":"GHS","narrow":"GH₵"},"GIP":{"displayName":{"other":"gibraltar funty"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"gambiýa dalasisi"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"gwineý franky"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"gwatemala ketsaly"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"gaýana dollary"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"gonkong dollary"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"gonduras lempirasy"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"horwat kunasy"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"gaiti gurdy"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"wenger forinti"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"indoneziýa rupiýasy"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"IEP"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"täze ysraýyl şekeli"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"hindi rupiýasy"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"yrak dinary"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"eýran rialy"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"islandiýa kronasy"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"ýamaýka dollary"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"iordan dinary"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"ýapon ýeni"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"keniýa şillingi"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"gyrgyz somy"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"kamboja riýeli"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"komor adalarynyň franky"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"demirgazyk koreý wony"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"günorta koreý wony"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"kuweýt dinary"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"kaýman adalarynyň dollary"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"gazak teňňesi"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"laos kipi"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"liwan funty"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"şri-lanka rupiýasy"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"liberiýa dollary"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"LSL"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"LTL"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"LVL"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"liwiýa dinary"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"marokko dirhamy"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"moldaw leýi"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"malagasiý ariarisi"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"MGF"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"makedon dinary"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"mýanma kýaty"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"mongol tugrigi"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"makao patakasy"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"mawritan ugiýasy (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"mawritan ugiýasy"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"mawrikiý rupiýasy"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"maldiw rufiýasy"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"malawi kwaçasy"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"meksikan pesosy"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"malaýziýa ringgiti"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"MZE"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"MZM"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"mozambik metikaly"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"namibiýa dollary"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"nigeriýa naýrasy"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"nikaragua kordobasy"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"norwegiýa kronasy"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"nepal rupiýasy"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"täze zelandiýa dollary"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"oman rialy"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"panama balboasy"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"peru soly"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"papua - täze gwineýa kinasy"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"filippin pesosy"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"päkistan rupiýasy"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"polýak zlotysy"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"paragwaý guaranisi"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"katar rialy"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"rumyn leýi"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"serb dinary"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"rus rubly"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"ruanda franky"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"saud rialy"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"solomon adalarynyň dollary"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"seýşel rupiýasy"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"sudan funty"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"şwed kronasy"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"singapur dollary"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"keramatly ýelena adasynyň funty"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"sýerra-leone leony"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"somali şillingi"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"surinam dollary"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"günorta sudan funty"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"san-tome we prinsipi dobrasy (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"san-tome we prinsipi dobrasy"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"siriýa funty"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"swazi lilangeni"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"taýland baty"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"täjik somonisi"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"türkmen manady"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"tunis dinary"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"tonga paangasy"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"türk lirasy"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"trininad we tobago dollary"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"täze taýwan dollary"},"symbol":"NT$","narrow":"$"},"TZS":{"displayName":{"other":"tanzaniýa şillingi"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"ukrain griwnasy"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"UGS"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"uganda şillingi"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"ABŞ dollary"},"symbol":"US$","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"urugwaý pesosy"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"özbek somy"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"VEB"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"wenesuela boliwary (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"wenesuela boliwary"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"wýetnam dongy"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"wanuatu watusy"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"samoa talasy"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"KFA BEAC franky"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"gündogar karib dollary"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"KFA BCEAO franky"},"symbol":"F CFA","narrow":"F CFA"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"fransuz ýuwaş umman franky"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"näbelli pul birligi"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"ýemen rialy"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"günorta afrika rendi"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"ZMK"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"zambiýa kwaçasy"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"ZWD"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":",","group":" ","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"san däl","timeSeparator":":"}},"percent":{"latn":"#,##0 %"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 müň"},"10000":{"other":"00 müň"},"100000":{"other":"000 müň"},"1000000":{"other":"0 million"},"10000000":{"other":"00 million"},"100000000":{"other":"000 million"},"1000000000":{"other":"0 milliard"},"10000000000":{"other":"00 milliard"},"100000000000":{"other":"000 milliard"},"1000000000000":{"other":"0 trillion"},"10000000000000":{"other":"00 trillion"},"100000000000000":{"other":"000 trillion"}},"short":{"1000":{"other":"0 müň"},"10000":{"other":"00 müň"},"100000":{"other":"000 müň"},"1000000":{"other":"0 mln"},"10000000":{"other":"00 mln"},"100000000":{"other":"000 mln"},"1000000000":{"other":"0 mlrd"},"10000000000":{"other":"00 mlrd"},"100000000000":{"other":"000 mlrd"},"1000000000000":{"other":"0 trln"},"10000000000000":{"other":"00 trln"},"100000000000000":{"other":"000 trln"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"#,##0.00 ¤","accounting":"#,##0.00 ¤","unitPattern":"{0} {1}","short":{"1000":{"other":"0 müň ¤"},"10000":{"other":"00 müň ¤"},"100000":{"other":"000 müň ¤"},"1000000":{"other":"0 mln ¤"},"10000000":{"other":"00 mln ¤"},"100000000":{"other":"000 mln ¤"},"1000000000":{"other":"0 mlrd ¤"},"10000000000":{"other":"00 mlrd ¤"},"100000000000":{"other":"000 mlrd ¤"},"1000000000000":{"other":"0 trln ¤"},"10000000000000":{"other":"00 trln ¤"},"100000000000000":{"other":"000 trln ¤"}}}}},"nu":["latn"]},"locale":"tk"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
