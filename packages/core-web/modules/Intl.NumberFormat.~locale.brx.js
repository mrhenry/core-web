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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("brx",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("brx").length
)) {
// Intl.NumberFormat.~locale.brx
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"brx":{"units":{"simple":{"degree":{"long":{"other":"{0}°"},"short":{"other":"{0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} ha"},"short":{"other":"{0} ha"},"narrow":{"other":"{0} ha"},"perUnit":{}},"acre":{"long":{"other":"{0} ac"},"short":{"other":"{0} ac"},"narrow":{"other":"{0} ac"},"perUnit":{}},"percent":{"long":{"other":"{0}%"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} L/km"},"short":{"other":"{0} L/km"},"narrow":{"other":"{0} L/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} mpg US"},"short":{"other":"{0} mpg US"},"narrow":{"other":"{0} mpg US"},"perUnit":{}},"petabyte":{"long":{"other":"{0} PB"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} TB"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} Tb"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0} Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} GB"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} Gb"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0} Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} MB"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} Mb"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0} Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kB"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kb"},"short":{"other":"{0} kb"},"narrow":{"other":"{0} kb"},"perUnit":{}},"byte":{"long":{"other":"{0} byte"},"short":{"other":"{0} byte"},"narrow":{"other":"{0} byte"},"perUnit":{}},"bit":{"long":{"other":"{0} bit"},"short":{"other":"{0} bit"},"narrow":{"other":"{0} bit"},"perUnit":{}},"year":{"long":{"other":"{0} साल"},"short":{"other":"{0} y"},"narrow":{"other":"{0} y"},"perUnit":{"long":"{0}/y","short":"{0}/y","narrow":"{0}/y"}},"month":{"long":{"other":"{0} महीने","one":"{0} महीना"},"short":{"other":"{0} m"},"narrow":{"other":"{0} m"},"perUnit":{"long":"{0}/m","short":"{0}/m","narrow":"{0}/m"}},"week":{"long":{"other":"{0} सप्ताह"},"short":{"other":"{0} w"},"narrow":{"other":"{0} w"},"perUnit":{"long":"{0}/w","short":"{0}/w","narrow":"{0}/w"}},"day":{"long":{"other":"{0} सान"},"short":{"other":"{0} d"},"narrow":{"other":"{0} d"},"perUnit":{"long":"{0}/d","short":"{0}/d","narrow":"{0}/d"}},"hour":{"long":{"other":"{0} घंटे","one":"{0} रिंगा"},"short":{"other":"{0} h"},"narrow":{"other":"{0} h"},"perUnit":{"long":"{0}/h","short":"{0}/h","narrow":"{0}/h"}},"minute":{"long":{"other":"{0} मिन."},"short":{"other":"{0} min"},"narrow":{"other":"{0} min"},"perUnit":{"long":"{0}/min","short":"{0}/min","narrow":"{0}/min"}},"second":{"long":{"other":"{0} सेकं."},"short":{"other":"{0} s"},"narrow":{"other":"{0} s"},"perUnit":{"long":"{0}/s","short":"{0}/s","narrow":"{0}/s"}},"millisecond":{"long":{"other":"{0} ms"},"short":{"other":"{0} ms"},"narrow":{"other":"{0} ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0} km"},"short":{"other":"{0} km"},"narrow":{"other":"{0} km"},"perUnit":{"long":"{0}/km","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} m"},"short":{"other":"{0} m"},"narrow":{"other":"{0} m"},"perUnit":{"long":"{0}/m","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} cm"},"short":{"other":"{0} cm"},"narrow":{"other":"{0} cm"},"perUnit":{"long":"{0}/cm","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0} mm"},"short":{"other":"{0} mm"},"narrow":{"other":"{0} mm"},"perUnit":{}},"mile":{"long":{"other":"{0} mi"},"short":{"other":"{0} mi"},"narrow":{"other":"{0} mi"},"perUnit":{}},"yard":{"long":{"other":"{0} yd"},"short":{"other":"{0} yd"},"narrow":{"other":"{0} yd"},"perUnit":{}},"foot":{"long":{"other":"{0} ft"},"short":{"other":"{0} ft"},"narrow":{"other":"{0} ft"},"perUnit":{"long":"{0}/ft","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0} in"},"short":{"other":"{0} in"},"narrow":{"other":"{0} in"},"perUnit":{"long":"{0}/in","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} smi"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} kg"},"short":{"other":"{0} kg"},"narrow":{"other":"{0} kg"},"perUnit":{"long":"{0}/kg","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} g"},"short":{"other":"{0} g"},"narrow":{"other":"{0} g"},"perUnit":{"long":"{0}/g","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} lb"},"short":{"other":"{0} lb"},"narrow":{"other":"{0} lb"},"perUnit":{"long":"{0}/lb","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0} oz"},"short":{"other":"{0} oz"},"narrow":{"other":"{0} oz"},"perUnit":{"long":"{0}/oz","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"{0} km/h"},"short":{"other":"{0} km/h"},"narrow":{"other":"{0} km/h"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} m/s"},"short":{"other":"{0} m/s"},"narrow":{"other":"{0} m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} mi/h"},"short":{"other":"{0} mi/h"},"narrow":{"other":"{0} mi/h"},"perUnit":{}},"celsius":{"long":{"other":"{0}°C"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0}°F"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} l"},"short":{"other":"{0} l"},"narrow":{"other":"{0} l"},"perUnit":{"long":"{0}/l","short":"{0}/l","narrow":"{0}/l"}},"milliliter":{"long":{"other":"{0} mL"},"short":{"other":"{0} mL"},"narrow":{"other":"{0} mL"},"perUnit":{}},"gallon":{"long":{"other":"{0} gal US"},"short":{"other":"{0} gal US"},"narrow":{"other":"{0} gal US"},"perUnit":{"long":"{0}/gal US","short":"{0}/gal US","narrow":"{0}/gal US"}},"fluid-ounce":{"long":{"other":"{0} fl oz US"},"short":{"other":"{0} fl oz US"},"narrow":{"other":"{0} fl oz US"},"perUnit":{}}},"compound":{"per":{"long":"{0}/{1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ऐन्डोरा का पेसेता"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"संयुक्त अरब अमीरात का दिर्हाम"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"अफ़ग़ानी 1927–2002"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"अफ़ग़ानी"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"आल्बेनिया का लेक"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"आरमिनियाई दिर्हाम"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"नेदरलैण्ड एन्टीलीज़ का गील्डर"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"एंगोला क्वानज़ा"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"एंगोला क्वानज़ा (1977–1990)"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"एंगोला नया क्वानज़ा (1990–20000)"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"एंगोला क्वानज़ा सुधारीत (1995–1999)"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"अर्जेण्टीनी ओस्ट्राल"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"अर्जेण्टीनी पेसो (1983–1985)"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"अर्जेण्टीनी पेसो"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ऑस्ट्रियन शीलींग"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"ऑस्ट्रेलियन डॉलर"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"अरुबा गील्डर"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"आज़रबैजानी मनात (1993–2006)"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"आज़रबैजानी मनात"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"बोसनिया हेर्ज़ेगोविना का दीनार"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"बोसनिया हेर्ज़ेगोविना कनवर्टीबल मार्क"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"बारबादोस डॉलर"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"बांगलादेश टका"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"बेल्जियन फ्राँ कनवर्टीबल"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"बेल्जियन फ्राँ"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"बेल्जियन फ्राँ फिनानसीयल (वित्तीय)"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"बल्गेरियाई हार्ड लेव"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"बल्गेरियाई लेव"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"बाहरैनी दीनार"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"बुरुंदी फ्राँ"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"बरमुडी डॉलर"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"ब्रुनई डॉलर"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"बोलिवियानो"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"बोलिवियाई पेसो"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"बोलिवियाई डॉलर"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"ब्रज़ीली नया क्रुज़ेरो (1967–1986)"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"ब्रज़ीली क्रुज़ाडो"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"ब्रज़ीली क्रुज़ेरो (190–1993)"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"ब्रज़ीली रेयाल"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"ब्रज़ीली नया क्रुज़ाडो"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"ब्रज़ीली क्रुज़ेरो"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"बहामा डॉलर"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"भुतान का नगुलत्रुम"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"बर्मी (म्यानमारी) क्याट"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"बोट्सवाना का पुलाट"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"बेलारुसी नया रूबल (194–1999)"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"बेलारुसी रूबल"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"बेलारुसी रूबल (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"बेलीज़ डॉलर"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"कनेडियन डॉलर"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"कॉंगोलीज़ फ्राँ"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"आईरलैण्ड का युरो"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"स्विस फ़्रैंक"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"आईरलैण्ड का फ़्रैंक"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"चीली का ऊनीदादेस द फोमेंटो"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"चिली पेसो"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"CNH"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"चीनी युआन रेनमीनबी"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"कोलम्बियाई पेसो"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"युनीदाद द वालोर रेआल"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"कॉस्टा रीका का कोलोन"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"सर्बिया का डीनार"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"चैकोस्लोवाकिय हार्ड कोरुना"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"CUC"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"क्युबा का पेसो"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"काप वेर्दे का एस्कुदो"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"साईप्रस का पाऊंड"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"चेक गनतंत्र का कोरुना"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"ईस्ट जर्मन ओस्टमार्क"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"डॉईच मार्क"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"जीबुती फ्राँ"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"डेनमार्क का क्रोन"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"डॉमीनीकन पेसो"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"आल्जीरी दीनार"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"एक्वादोर सुक्रे"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"एक्वादोर युनीदाद दे वालोर कॉनस्तांते"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"एस्टोनियाई क्रून"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"मिस्री पाउण्ड"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"ऐरित्रीया का नाफ़का"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"हीस्पानी पेसेता (ए अकाऊँट)"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"हीस्पानी पेसेता (कनवर्टीबल अकाऊँट)"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"हीस्पानी पेसेता"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"ईथिओपिया का बीर्र"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"युरो"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"फीनीश मार्क्का"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"फ़िजी का डॉलर"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"फाल्कलैण्ड द्वीप पौण्ड"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"फ्राँसीसी फ्राँ"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"ब्रितन का पौण्ड स्टर्लिग"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"जॉर्जिया का कुपोन लारीत"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"जॉर्जिया का लारी"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"घाना चेदी (1979–2007)"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"घाना चेदी"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"जीब्रालटर का पौण्ड"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"गाँबिया का दलासी"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"गीनी फ्राँ"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"गीनी सीली"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"ऐक्वाटरी गीनी एक्वेले गीनीआना"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"युनानी द्राखमा"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"ग्वातेमाला क़्वेत्ज़ाल"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"पुरतुगी गीनी का एस्कुएदो"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"गीनी बिस्साऊ का पेसो"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"गुयाना डॉलर"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"हाँग काँग डॉलर"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"हॉंडुरास लेंपीरा"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"क्रोएशियाई दीनार"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"क्रोएशियाई कुना"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"हाईती गुर्द"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"हंगेरियाई फ़ोरिण्ट"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"इण्डोनेशियाई रुपिया"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"आईरीश पौंड"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"इस्राइली पौंड"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"इस्राइली शेकेल"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"रां"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"ईराक़ी दीनार"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"ईरानी रीयाल"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"आईसलैण्ड क्रोना"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"इतली का लीरा"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"जमाईका का डॉलर"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"जोर्डनी दीनार"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"जापानी येन"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"किनियाई शीलींग"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"क़ीर्ग़ीज़स्तानी सोम"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"कंबोडिया का रिएल"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"कोमोरो का फ्राँ"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"ऊत्तर कोरियाई वोन"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"दक्षिण कोरियाई वोन"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"क़ुवैती दीनार"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"कैमान द्वीप का डॉलर"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"क़ाज़ाख़स्तान तेंगे"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"लाओस का कीप"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"लीबानी पौंड"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"श्री लंका रूपी"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"लीबेरियाई डॉलर"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"लसोथो का लोटी"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"लिथुआनियाई लिता"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"लिथुआनियाई टालोनास"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"लुक्ज़मबुर्गी कनवर्टीबल फ्राँ"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"लुक्ज़मबुर्गी फ्राँ"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"लुक्ज़मबुर्गी वीत्ती फ्राँ"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"लाटवियाई लाट्स"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"लाटवियाई रूबल"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"लिबियाई दीनार"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"मोरक्किय दिर्हाम"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"मोरक्किय फ्राँ"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"मोल्डोवियाई ल"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"मादागास्करी आरिआरी"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"मादागास्करी फ्राँ"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"मसेदोनियाई दीनार"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"माली का फ्राँ"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"म्यानमारी क्याट"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"मौंगोलीयाई तुग्रीक"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"माकाव पाताचा"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"मौरिटानी ऊगुया (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"मौरिटानी ऊगुया"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"माल्टी लीरा"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"माल्टी पौंड"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"मोरिशियस का रूपी"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"मालदीव द्वीप का रूफिया"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"मालवी क्वाचा"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"मेक्सिकन पेसो"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"मेक्सिकन रजती पेसो (1861–1992)"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"मेक्सिकन युनीदाद द ईनवेरसिओन (युडीआई)"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"मलेशियन रिंगित"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"मोज़ांबीक एस्कुएदो"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"मोज़ांबीक पुराना मेतीकाल"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"मोज़ांबीक मेतीकाल"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"नमीबिया डॉलर"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"नाईजीरीयाई नाईरा"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"नीकारागुआई कोर्दोबा"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"नीकारागुआई सुवर्ण कोर्दोबा"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"नेदरलैण्ड गीलडर"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"नॉर्वे का क्रोन"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"नेपाली रुपी"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"न्यूज़ीलैंड डॉलर"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"ओमानी रियाल"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"पनामा का बालबोआ"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"पेरूवाई ईंटी"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"पेरुवाई सोल"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"पेरुवाई सोल (1863–1965)"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"पापुआ न्यु गीनी का कीना"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"फ़िलिपीन का पेसो"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"पाकिस्तानी रुपया"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"पोलिश ज़्लॉटी"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"पुरतुगी एस्कुदो"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"पारागुऐई गुआरानी"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"क़तारी रीयाल"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"रोडेशियाई डॉलर"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"रोमानियाई पुरानी ल"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"रोमानियाई ल"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"सर्बियाई दिनार"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"रूसी रूबल"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"रुआँदा फ्राँ"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"साउदी रियाल"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"सोलोमन द्वीप का डॉलर"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"सेशेल रूपी"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"सुदानी पुराना डॉलर"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"सुदानी पौंड"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"सुदानी पुराना पौंड"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"स्वीडन क्रोना"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"सिंगापुर डॉलर"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"सेंट हेलीना पौंड"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"स्लोवेनियाई तोलार"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"स्लोवाकी कोरुना"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"सीयेरा लीयोनेई लीयोने"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"सोमाली शीलींग"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"सुरीनाम डॉलर"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"सुरीनाम गील्डर"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"SSP"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"साँव तोमे एवं प्रीन्सीपे का डोब्रा (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"साँव तोमे एवं प्रीन्सीपे का डोब्रा"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"सोवियत रूबल"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"एल सालवादर कोलोन"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"सीरियाई पौंड"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"स्वाज़ीलैण्ड लीलांगेनी"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"थाई बाह्ट"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"ताजीक़ीस्तानी रूबल"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"ताजीक़ीस्तानी सोमोनी"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"तुर्कमेनीस्तानी मानाट"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"TMT"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"त्युनीसी दीनर"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"टॉंगा पाईंगा"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"तीमोरी एस्कुदो"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"तुर्की लीरा"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"तुर्की नया लीरा"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"त्रीनीदाद एवं टोबागो डॉलर"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"ताईवानी नया डॉलर"},"symbol":"NT$","narrow":"$"},"TZS":{"displayName":{"other":"तान्ज़ेनियाई शीलींग"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"युक्रेनी ह्रीवनिया"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"युक्रेनी कार्बोवानेत्ज़"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"युगाँडाई शीलींग (1996–1987)"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"युगाँडाई शीलींग"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"अमरिकी डॉलर"},"symbol":"US$","narrow":"$"},"USN":{"displayName":{"other":"अमरिकी डॉलर (अगले दिन का)"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"अमरिकी डॉलर (इसी दिन का)"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"ऊरुगुए का पेसो आन ऊनीदादोस ईंदेक्सादास"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"ऊरुगुए का पेसो (1975–1993)"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"ऊरुगुए का ऊरुगुआयो पेसो"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"ऊज़बेक सुम"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"वेनेज़ुएलाई बोलिवार (1871–2008)"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"वेनेज़ुएलाई बोलिवार (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"वेनेज़ुएलाई बोलिवार"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"वीयतनामी डॉंग"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"वनुआटु वटु"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"वेस्टर्न समोआ ताला"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"(सीएफ़ए) फ्रानसीसी फेदरेशनी फ्राँ"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"रजत"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"सोना"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"एक्यु"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"एम्यु"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"यूरोपी एकाऊंट का युनीट (एक्स बी सी)"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"यूरोपी एकाऊंट का युनीट (एक्स बी डी)"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"ईस्ट करिबियन डॉलर"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"स्पेशियल ड्राईंग राईट्स"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"यूरोपी मुद्रा (एक्यु)"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"फ्रानसीसी सुवर्ण फ्राँ"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"फ्रानसीसी युआईसी फ्राँ"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"फ्रानसीसी फेदेरेशनी बीसीएआओ फ्राँ"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"पैलेडियम"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"फ्रानसीसी फेदेरेशनी फ्राँ"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"प्लैटीनम"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"रीनैट फंड्स"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"टेस्टींग करनसी कोड"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"अज्ञात या अवैध मुद्रा"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"यमनी दीनार"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"यमनी रीयाल"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"युगोस्लावी हार्ड दीनार"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"युगोस्लावी नोवीय (नये) दीनार"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"युगोस्लावी कनवर्टीबल दीनार"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"दक्षिण अफ़्रीकी रॅण्ड"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"ज़ाम्बियाई क्वाचा (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"ज़ाम्बियाई क्वाचा"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ज़ाईरी नये ज़ाईर"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ज़ाईरी ज़ाईर"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"ज़ीम्बाबवेई डॉलर"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##,##0%"},"decimal":{"latn":{"standard":"#,##,##0.###","long":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0G"},"10000000000":{"other":"00G"},"100000000000":{"other":"000G"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}},"short":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0G"},"10000000000":{"other":"00G"},"100000000000":{"other":"000G"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤ #,##,##0.00","accounting":"¤ #,##,##0.00","unitPattern":"{0} {1}","short":{"1000":{"other":"¤ 0K"},"10000":{"other":"¤ 00K"},"100000":{"other":"¤ 000K"},"1000000":{"other":"¤ 0M"},"10000000":{"other":"¤ 00M"},"100000000":{"other":"¤ 000M"},"1000000000":{"other":"¤ 0G"},"10000000000":{"other":"¤ 00G"},"100000000000":{"other":"¤ 000G"},"1000000000000":{"other":"¤ 0T"},"10000000000000":{"other":"¤ 00T"},"100000000000000":{"other":"¤ 000T"}}}}},"nu":["latn"]}},"availableLocales":["brx"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
