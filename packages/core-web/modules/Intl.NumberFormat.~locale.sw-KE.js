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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("sw-KE",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("sw-KE").length
)) {
// Intl.NumberFormat.~locale.sw-KE
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"digrii {0}"},"short":{"other":"digrii {0}"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"hekta {0}"},"short":{"other":"hekta {0}"},"narrow":{"other":"ha {0}"},"perUnit":{}},"acre":{"long":{"other":"ekari {0}"},"short":{"other":"ekari {0}"},"narrow":{"other":"Ekari {0}"},"perUnit":{}},"percent":{"long":{"other":"asilimia {0}"},"short":{"other":"asilimia {0}"},"narrow":{"other":"asilimia {0}"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"lita {0} kwa kilomita"},"short":{"other":"lita {0} kwa kilomita"},"narrow":{"other":"lita {0} kwa kilomita"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"maili {0} kwa kila galoni"},"short":{"other":"{0} mpg"},"narrow":{"other":"{0} mpg"},"perUnit":{}},"petabyte":{"long":{"other":"petabaiti {0}"},"short":{"other":"PB {0}"},"narrow":{"other":"PB {0}"},"perUnit":{}},"terabyte":{"long":{"other":"terabaiti {0}"},"short":{"other":"terabaiti {0}"},"narrow":{"other":"terabaiti {0}"},"perUnit":{}},"terabit":{"long":{"other":"terabiti {0}"},"short":{"other":"terabiti {0}"},"narrow":{"other":"terabiti {0}"},"perUnit":{}},"gigabyte":{"long":{"other":"gigabaiti {0}"},"short":{"other":"GB {0}"},"narrow":{"other":"GB {0}"},"perUnit":{}},"gigabit":{"long":{"other":"gigabiti {0}"},"short":{"other":"gigabiti {0}"},"narrow":{"other":"gigabiti {0}"},"perUnit":{}},"megabyte":{"long":{"other":"megabaiti {0}"},"short":{"other":"MB {0}"},"narrow":{"other":"MB {0}"},"perUnit":{}},"megabit":{"long":{"other":"megabiti {0}"},"short":{"other":"megabiti {0}"},"narrow":{"other":"megabiti {0}"},"perUnit":{}},"kilobyte":{"long":{"other":"kilobaiti {0}"},"short":{"other":"kilobaiti {0}"},"narrow":{"other":"kilobaiti {0}"},"perUnit":{}},"kilobit":{"long":{"other":"kilobiti {0}"},"short":{"other":"kilobiti {0}"},"narrow":{"other":"kilobiti {0}"},"perUnit":{}},"byte":{"long":{"other":"baiti {0}"},"short":{"other":"baiti {0}"},"narrow":{"other":"baiti {0}"},"perUnit":{}},"bit":{"long":{"other":"biti {0}"},"short":{"other":"biti {0}"},"narrow":{"other":"biti {0}"},"perUnit":{}},"year":{"long":{"other":"miaka {0}","one":"mwaka {0}"},"short":{"other":"miaka {0}","one":"mwaka {0}"},"narrow":{"other":"miaka {0}","one":"mwaka {0}"},"perUnit":{"long":"{0} kwa mwaka","short":"{0} kwa mwaka","narrow":"{0} kwa mwaka"}},"month":{"long":{"other":"miezi {0}","one":"mwezi {0}"},"short":{"other":"miezi {0}","one":"mwezi {0}"},"narrow":{"other":"miezi {0}","one":"mwezi {0}"},"perUnit":{"long":"{0} kwa mwezi","short":"{0} kwa mwezi","narrow":"{0} kwa mwezi"}},"week":{"long":{"other":"wiki {0}"},"short":{"other":"wiki {0}"},"narrow":{"other":"wiki {0}"},"perUnit":{"long":"{0} kwa wiki","short":"{0} kwa wiki","narrow":"{0} kwa wiki"}},"day":{"long":{"other":"siku {0}"},"short":{"other":"siku {0}"},"narrow":{"other":"siku {0}"},"perUnit":{"long":"{0} kwa siku","short":"{0} kwa siku","narrow":"{0} kwa siku"}},"hour":{"long":{"other":"saa {0}"},"short":{"other":"saa {0}"},"narrow":{"other":"saa {0}"},"perUnit":{"long":"{0} kwa saa","short":"{0} kwa saa","narrow":"{0} kwa saa"}},"minute":{"long":{"other":"dakika {0}"},"short":{"other":"dakika {0}"},"narrow":{"other":"dakika {0}"},"perUnit":{"long":"{0} kwa kila dakika","short":"{0} kwa kila dakika","narrow":"{0} kwa kila dakika"}},"second":{"long":{"other":"sekunde {0}"},"short":{"other":"sekunde {0}"},"narrow":{"other":"sekunde {0}"},"perUnit":{"long":"{0} kwa kila sekunde","short":"{0} kwa kila sekunde","narrow":"{0} kwa kila sekunde"}},"millisecond":{"long":{"other":"millisekunde {0}"},"short":{"other":"millisekunde {0}"},"narrow":{"other":"ms {0}"},"perUnit":{}},"kilometer":{"long":{"other":"kilomita {0}"},"short":{"other":"km {0}"},"narrow":{"other":"km {0}"},"perUnit":{"long":"{0} kwa kila kilomita","short":"{0} kwa kila kilomita","narrow":"{0} kwa kila kilomita"}},"meter":{"long":{"other":"mita {0}"},"short":{"other":"mita {0}"},"narrow":{"other":"mita {0}"},"perUnit":{"long":"{0} kwa kila mita","short":"{0} kwa kila mita","narrow":"{0} kwa kila mita"}},"centimeter":{"long":{"other":"sentimita {0}"},"short":{"other":"sentimita {0}"},"narrow":{"other":"{0} cm"},"perUnit":{"long":"{0} kwa kila sentimita","short":"{0} kwa kila sentimita","narrow":"{0} kwa kila sentimita"}},"millimeter":{"long":{"other":"milimita {0}"},"short":{"other":"milimita {0}"},"narrow":{"other":"mm{0}"},"perUnit":{}},"mile":{"long":{"other":"maili {0}"},"short":{"other":"maili {0}"},"narrow":{"other":"Maili {0}"},"perUnit":{}},"yard":{"long":{"other":"yadi {0}"},"short":{"other":"yadi {0}"},"narrow":{"other":"Yadi {0}"},"perUnit":{}},"foot":{"long":{"other":"futi {0}"},"short":{"other":"futi {0}"},"narrow":{"other":"Futi {0}"},"perUnit":{"long":"{0} kwa kila futi","short":"{0} kwa kila futi","narrow":"{0} kwa kila futi"}},"inch":{"long":{"other":"inchi {0}"},"short":{"other":"inchi {0}"},"narrow":{"other":"Inchi {0}"},"perUnit":{"long":"{0} kwa kila inchi","short":"{0} kwa kila inchi","narrow":"{0} kwa kila inchi"}},"mile-scandinavian":{"long":{"other":"maili {0} za skandinavia","one":"maili {0} ya skandinavia"},"short":{"other":"smi {0}"},"narrow":{"other":"smi {0}"},"perUnit":{}},"kilogram":{"long":{"other":"kilogramu {0}"},"short":{"other":"kg {0}"},"narrow":{"other":"kg {0}"},"perUnit":{"long":"{0} kwa kila kilogramu","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"gramu {0}"},"short":{"other":"gramu {0}"},"narrow":{"other":"gramu {0}"},"perUnit":{"long":"{0} kwa kila gramu","short":"{0} kwa kila gramu","narrow":"{0} kwa kila gramu"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"ratili {0}"},"short":{"other":"ratili {0}"},"narrow":{"other":"Ratili {0}"},"perUnit":{"long":"{0} kwa kila ratili","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"aunsi {0}"},"short":{"other":"aunsi {0}"},"narrow":{"other":"Aunsi {0}"},"perUnit":{"long":"{0} kwa kila aunsi","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"kilomita {0} kwa saa"},"short":{"other":"km {0}/saa"},"narrow":{"other":"km {0}/saa"},"perUnit":{}},"meter-per-second":{"long":{"other":"mita {0} kwa sekunde"},"short":{"other":"{0} m/s"},"narrow":{"other":"m {0}/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"maili {0} kwa saa"},"short":{"other":"{0} mph"},"narrow":{"other":"mi {0}/saa"},"perUnit":{}},"celsius":{"long":{"other":"nyuzi {0}"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"nyuzi za farenheiti {0}"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"lita {0}"},"short":{"other":"lita {0}"},"narrow":{"other":"lita {0}"},"perUnit":{"long":"{0} kwa kila lita","short":"{0} kwa kila lita","narrow":"{0} kwa kila lita"}},"milliliter":{"long":{"other":"mililita {0}"},"short":{"other":"mililita {0}"},"narrow":{"other":"mililita {0}"},"perUnit":{}},"gallon":{"long":{"other":"galoni {0}"},"short":{"other":"galoni {0}"},"narrow":{"other":"galoni {0}"},"perUnit":{"long":"{0} kwa kila galoni","short":"{0}/gal","narrow":"{0}/gal"}},"fluid-ounce":{"long":{"other":"aunsi {0} za ujazo","one":"aunsi {0} ya ujazo"},"short":{"other":"fl oz {0}"},"narrow":{"other":"fl oz {0}"},"perUnit":{}}},"compound":{"per":{"long":"{0} kwa kila {1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"diramu za Falme za Kiarabu","one":"diramu ya Falme za Kiarabu"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"afghani za Afghanistani","one":"afghani ya Afghanistani"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"lek za Albania","one":"lek ya Albania"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"dram za Armenia","one":"dram ya Armenia"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"gilda za Antili ya Uholanzi","one":"gilda ya Antili ya Uholanzi"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"kwanza za Angola","one":"kwanza ya Angola"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ARP"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"peso za Ajentina","one":"peso ya Ajentina"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"dola za Australia","one":"dola ya Australia"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"florin ya Aruba"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"manati za Azabajani","one":"manati ya Azabajani"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"BAD"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"maki za Bosnia na Hezegovina zinazoweza kubadilishwa","one":"maki ya Bosnia na Hezegovina inayoweza kubadilishwa"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"dola za Babadosi","one":"dola ya Babadosi"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"taka za Bangladeshi","one":"taka ya Bangladeshi"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"lev za Bulgaria","one":"lev ya Bulgaria"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"dinari za Bahareni","one":"dinari ya Bahareni"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"faranga za Burundi","one":"faranga ya Burundi"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"dola za Bamuda","one":"dola ya Bamuda"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"dola za Brunei","one":"dola ya Brunei"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"boliviano za Bolivia","one":"boliviano ya Bolivia"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"reale za Brazili","one":"reale ya Brazili"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"dola za Bahama","one":"dola ya Bahama"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"ngultrumi za Bhutani","one":"ngultrumi ya Bhutani"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"pula za Botswana","one":"pula ya Botswana"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"ruble za Belarusi","one":"ruble ya Belarusi"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"Ruble za Belarusi (2000–2016)","one":"Ruble ya Belarusi (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"dola za Belize","one":"dola ya Belize"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"dola za Kanada","one":"dola ya Kanada"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"faranga za Kongo","one":"faranga ya Kongo"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"faranga za Uswisi","one":"faranga ya Uswisi"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"peso za Chile","one":"peso ya Chile"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"yuan ya China (huru)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"yuan za China","one":"yuan ya China"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"peso za Kolombia","one":"peso ya Kolombia"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"colon za Kostarika","one":"colon ya Kostarika"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"peso za Kuba zinazoweza kubadilishwa","one":"peso ya Kuba inayoweza kubadilishwa"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"peso za Kuba","one":"peso ya Kuba"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"eskudo za Kepuvede","one":"eskudo ya Kepuvede"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"koruna za Cheki","one":"koruna ya Cheki"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"faranga za Jibuti","one":"faranga ya Jibuti"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"kroni za Denmaki","one":"kroni ya Denmaki"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"peso za Dominika","one":"peso ya Dominika"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"dinari za Aljeria","one":"dinari ya Aljeria"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"EEK"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"pauni za Misri","one":"pauni ya Misri"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"nakfa za Eritrea","one":"nakfa ya Eritrea"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"birr za Uhabeshi","one":"birr ya Uhabeshi"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"yuro"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"dola za Fiji","one":"dola ya Fiji"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"pauni za Visiwa vya Falkland","one":"pauni ya Visiwa vya Falkland"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"pauni za Uingereza","one":"pauni ya Uingereza"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"lari za Jiojia","one":"lari ya Jiojia"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"Sedi ya Ghana"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"sidi za Ghana","one":"sidi ya Ghana"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"pauni za Jibrata","one":"pauni ya Jibrata"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"dalasi za Gambia","one":"dalasi ya Gambia"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"faranga za Guinea","one":"faranga ya Guinea"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"Faranga ya Gine"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"quetzal za Guatemala","one":"quetzal ya Guatemala"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"dola za Guyana","one":"dola ya Guyana"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"dola za Hong Kong","one":"dola ya Hong Kong"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"lempira za Hondurasi","one":"lempira ya Hondurasi"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"kuna za Kroeshia","one":"kuna ya Kroeshia"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"godi za Haiti","one":"godi ya Haiti"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"forinti za Hungaria","one":"forinti ya Hungaria"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"rupia za Indonesia","one":"rupia ya Indonesia"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"IEP"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"shekeli mpya za Israel","one":"shekeli mpya ya Israel"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"rupia za India","one":"rupia ya India"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"dinari za Iraki","one":"dinari ya Iraki"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"riali za Irani","one":"riali ya Irani"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"krona za Aisilandi","one":"krona ya Aisilandi"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"dola za Jamaika","one":"dola ya Jamaika"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"dinari za Yordani","one":"dinari ya Yordani"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"yeni za japani","one":"yeni ya japani"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"shilingi za Kenya","one":"shilingi ya Kenya"},"symbol":"Ksh","narrow":"Ksh"},"KGS":{"displayName":{"other":"som za Kyrgystan","one":"som ya Kyrgystan"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"rieli za Kambodia","one":"rieli ya Kambodia"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"faranga za Komoro","one":"faranga ya Komoro"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"won za Korea Kaskazini","one":"won ya Korea Kaskazini"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"won za Korea Kusini","one":"won ya Korea Kusini"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"dinari za Kuwait","one":"dinari ya Kuwait"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"dola za Visiwa vya Cayman","one":"dola ya Visiwa vya Cayman"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"tenge za Kazakistani","one":"tenge ya Kazakistani"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"kip za Laosi","one":"kip ya Laosi"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"pauni za Lebanoni","one":"pauni ya Lebanoni"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"rupia za Sri Lanka","one":"rupia ya Sri Lanka"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"dola za Liberia","one":"dola ya Liberia"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"Loti ya Lesoto"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"Litas za Lithuania","one":"Litas ya Lithuania"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"Lats za Lativia","one":"Lats ya Lativia"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"dinari za Libya","one":"dinari ya Libya"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"diramu za Moroko","one":"diramu ya Moroko"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"leu za Moldova","one":"leu ya Moldova"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"Ariari za Madagaska","one":"ariari ya Madagaska"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"MGF"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"dinari za Masedonia","one":"dinari ya Masedonia"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"kiati za Myama","one":"kiati ya Myama"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"tugrik za Mongolia","one":"tugrik ya Mongolia"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"pataka za Macau","one":"pataka ya Macau"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"ouguiya za Mauritania (1973–2017)","one":"ouguiya ya Mauritania (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"ouguiya za Mauritania","one":"ouguiya ya Mauritania"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"rupia za Mauritius","one":"rupia ya Mauritius"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"rufiyaa za Maldivi","one":"rufiyaa ya Maldivi"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"kwacha za Malawi","one":"kwacha ya Malawi"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"peso za Meksiko","one":"peso ya Meksiko"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"ringgiti za Malesia","one":"ringgiti ya Malesia"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"MZE"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"metikali ya Msumbiji (1980–2006)"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"Metikali za Msumbiji","one":"Metikali ya Msumbiji"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"dola za Namibia","one":"dola ya Namibia"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"Naira za Naijeria","one":"naira ya Naijeria"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"cordoba za Nikaragwa","one":"cordoba ya Nikaragwa"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"kroni za Norwe","one":"kroni ya Norwe"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"rupia za Nepali","one":"rupia ya Nepali"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"dola za Nyuzilandi","one":"dola ya Nyuzilandi"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"riali za Omani","one":"riali ya Omani"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"balboa za Panama","one":"balboa ya Panama"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"sol za Peru","one":"sol ya Peru"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"kina za Papua New Guinea","one":"kina ya Papua New Guinea"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"peso za Ufilipino","one":"peso ya Ufilipino"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"rupia za Pakistani","one":"rupia ya Pakistani"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"zloti za Polandi","one":"zloti ya Polandi"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"guarani za Paragwai","one":"guarani ya Paragwai"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"riali za Katari","one":"riali ya Katari"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"leu za Romania","one":"leu ya Romania"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"dinari za Serbia","one":"dinari ya Serbia"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"ruble za Urusi","one":"ruble ya Urusi"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"faranga za Rwanda","one":"faranga ya Rwanda"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"riyali za Saudia","one":"riyali ya Saudia"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"dola za Visiwa vya Solomoni","one":"dola ya Visiwa vya Solomoni"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"rupia za Ushelisheli","one":"rupia ya Ushelisheli"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"pauni za Sudani","one":"pauni ya Sudani"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"pauni za Sudani (1957–1998)","one":"pauni ya Sudani (1957–1998)"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"krona za Uswidi","one":"krona ya Uswidi"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"dola za Singapoo","one":"dola ya Singapoo"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"pauni za St. Helena","one":"pauni ya St. Helena"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"leoni za Siera Leoni","one":"leoni ya Siera Leoni"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"shilingi za Somalia","one":"shilingi ya Somalia"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"dola za Suriname","one":"dola ya Suriname"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"pauni za Sudani Kusini","one":"pauni ya Sudani Kusini"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"dobra za Sao Tome na Principe (1977–2017)","one":"dobra ya Sao Tome na Principe (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"dobra za Sao Tome na Principe","one":"dobra ya Sao Tome na Principe"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"pauni za Syria","one":"pauni ya Syria"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"lilangeni za Uswazi","one":"lilangeni ya Uswazi"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"bahti za Tailandi","one":"bahti ya Tailandi"},"symbol":"฿","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"somoni za Tajikistani","one":"somoni ya Tajikistani"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"manati za Turkmenistani","one":"manati ya Turkmenistani"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"dinari za Tunisia","one":"dinari ya Tunisia"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"paʻanga za Tonga","one":"paʻanga ya Tonga"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"lira za Uturuki","one":"lira ya Uturuki"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"dola za Trinidadi na Tobago","one":"dola ya Trinidadi na Tobago"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"dola za Taiwani","one":"dola ya Taiwani"},"symbol":"NT$","narrow":"NT$"},"TZS":{"displayName":{"other":"shilingi za Tanzania","one":"shilingi ya Tanzania"},"symbol":"TSh","narrow":"TSh"},"UAH":{"displayName":{"other":"hryvnia za Ukraini","one":"hryvnia ya Ukraini"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"UGS"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"shilingi za Uganda","one":"shilingi ya Uganda"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"dola za Marekani","one":"dola ya Marekani"},"symbol":"$","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"peso za Urugwai","one":"peso ya Urugwai"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"som za Uzbekistani","one":"som ya Uzbekistani"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"VEB"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"Bolivar za Venezuela (2008–2018)","one":"Bolivar ya Venezuela (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"boliva za Venezuela","one":"boliva ya Venezuele"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"Dong za Vietnamu","one":"dong ya Vietnamu"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"vatu za Vanuatu","one":"vatu ya Vanuatu"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"tala za Samoa","one":"tala ya Samoa"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"faranga ya CFA ya Afrika ya Kati"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"dola za Karibi Mashariki","one":"dola ya Karibi Mashariki"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"faranga za CFA ya Afrika Magharibi","one":"faranga ya CFA ya Afrika Magharibi"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"faranga za CFP","one":"faranga ya CFP"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(sarafu isiyojulikana)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"riali za Yemeni","one":"riali ya Yemeni"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"randi za Afrika Kusini","one":"randi ya Afrika Kusini"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"Kwacha ya Zambia (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"kwacha za Zambia","one":"kwacha ya Zambia"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"Dola ya Zimbabwe"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"elfu 0;elfu -0"},"10000":{"other":"elfu 00","one":"elfu 00;elfu -00"},"100000":{"other":"elfu 000"},"1000000":{"other":"milioni 0"},"10000000":{"other":"milioni 00"},"100000000":{"other":"milioni 000"},"1000000000":{"other":"bilioni 0"},"10000000000":{"other":"bilioni 00"},"100000000000":{"other":"bilioni 000"},"1000000000000":{"other":"trilioni 0"},"10000000000000":{"other":"trilioni 00"},"100000000000000":{"other":"trilioni 000"}},"short":{"1000":{"other":"elfu 0"},"10000":{"other":"elfu 00"},"100000":{"other":"elfu 000"},"1000000":{"other":"M0"},"10000000":{"other":"M00"},"100000000":{"other":"M000"},"1000000000":{"other":"B0"},"10000000000":{"other":"B00"},"100000000000":{"other":"B000"},"1000000000000":{"other":"T0"},"10000000000000":{"other":"T00"},"100000000000000":{"other":"T000"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤ #,##0.00","accounting":"¤ #,##0.00","unitPattern":"{1} {0}","short":{"1000":{"other":"¤ elfu0"},"10000":{"other":"¤ elfu00;¤elfu -00"},"100000":{"other":"¤ laki000;¤laki -000"},"1000000":{"other":"¤ M0","one":"¤ M0;¤-M0"},"10000000":{"other":"¤ M00;¤-M00","one":"¤ M00;¤M-M00"},"100000000":{"other":"¤ M000","one":"¤ M000;¤M-000"},"1000000000":{"other":"¤ B0;¤-B0"},"10000000000":{"other":"¤ B00;¤-B00"},"100000000000":{"other":"¤ B000;¤-B000"},"1000000000000":{"other":"¤ T0","one":"¤ T0;¤-T0"},"10000000000000":{"other":"¤ T00","one":"¤ T00;¤-T00"},"100000000000000":{"other":"¤ T000;¤-T000"}}}}},"nu":["latn"]},"locale":"sw-KE"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
