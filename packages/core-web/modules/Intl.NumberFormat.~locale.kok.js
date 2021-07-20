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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("kok",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("kok").length
)) {
// Intl.NumberFormat.~locale.kok
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"{0} अंश"},"short":{"other":"{0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} हॅक्टर"},"short":{"other":"{0} ha"},"narrow":{"other":"{0} ha"},"perUnit":{}},"acre":{"long":{"other":"{0} एकर"},"short":{"other":"{0} ac"},"narrow":{"other":"{0} ac"},"perUnit":{}},"percent":{"long":{"other":"{0} टक्को"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} लिटर/किलोमीटर"},"short":{"other":"{0} लि/किमी"},"narrow":{"other":"{0} लि/किमी"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} मैल दर गॅलोन"},"short":{"other":"{0} mpg"},"narrow":{"other":"{0} mpg"},"perUnit":{}},"petabyte":{"long":{"other":"{0} पेटाबायट"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} टेराबायट"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} टेराबिट्स"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0} Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} गिगाबायट"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} गिगाबिट"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0} Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} मॅगाबायट"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} मॅगाबिट"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0} Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} किलोबायट"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} किलोबिट"},"short":{"other":"{0} kb"},"narrow":{"other":"{0} kb"},"perUnit":{}},"byte":{"long":{"other":"{0} बायट"},"short":{"other":"{0} बायट"},"narrow":{"other":"{0} बायट"},"perUnit":{}},"bit":{"long":{"other":"{0} बिट"},"short":{"other":"{0} बिट"},"narrow":{"other":"{0} बिट"},"perUnit":{}},"year":{"long":{"other":"{0} वर्सां"},"short":{"other":"{0} वर्सां"},"narrow":{"other":"{0}व"},"perUnit":{"long":"दर वर्सा {0}","short":"{0}/वर्सां","narrow":"{0}/वर्सां"}},"month":{"long":{"other":"{0} म्हयने"},"short":{"other":"{0} म्हयने"},"narrow":{"other":"{0}म्ह"},"perUnit":{"long":"दर म्हयनो {0}","short":"{0}/म्ह","narrow":"{0}/म्ह"}},"week":{"long":{"other":"{0} सप्तक"},"short":{"other":"{0} सप्तक"},"narrow":{"other":"{0}स"},"perUnit":{"long":"दर सप्तकाक {0}","short":"{0}/स","narrow":"{0}/स"}},"day":{"long":{"other":"{0} दीस"},"short":{"other":"{0} दीस"},"narrow":{"other":"{0}दी"},"perUnit":{"long":"दर दिसा {0}","short":"{0}/दी","narrow":"{0}/दी"}},"hour":{"long":{"other":"{0} वरां"},"short":{"other":"{0} वर"},"narrow":{"other":"{0} व"},"perUnit":{"long":"दर वरा {0}","short":"{0}/वर","narrow":"{0}/वर"}},"minute":{"long":{"other":"{0} मिण्टां"},"short":{"other":"{0} मिनीट"},"narrow":{"other":"{0} मि"},"perUnit":{"long":"दर मिनीट {0}","short":"{0}/मिनीट","narrow":"{0}/मिनीट"}},"second":{"long":{"other":"{0} सेकंदांनी"},"short":{"other":"{0} सेकंद"},"narrow":{"other":"{0}से"},"perUnit":{"long":"दर सेकंद {0}","short":"{0}/से","narrow":"{0}/से"}},"millisecond":{"long":{"other":"{0} मिलिसेकंदांनी"},"short":{"other":"{0} मिलिसेकंद"},"narrow":{"other":"{0}मिसे"},"perUnit":{}},"kilometer":{"long":{"other":"{0} किलोमीटर"},"short":{"other":"{0} किमी"},"narrow":{"other":"{0} किमी"},"perUnit":{"long":"दर किलोमीटर {0}","short":"{0}/किमी","narrow":"{0}/किमी"}},"meter":{"long":{"other":"{0} मीटर"},"short":{"other":"{0} मी"},"narrow":{"other":"{0}मी"},"perUnit":{"long":"दर मिटर {0}","short":"{0}/मी","narrow":"{0}/मी"}},"centimeter":{"long":{"other":"{0} सेंटिमीटर"},"short":{"other":"{0} सेमी"},"narrow":{"other":"{0} सेमी"},"perUnit":{"long":"दर सेंटिमीटर {0}","short":"{0}/सेमी","narrow":"{0}/सेमी"}},"millimeter":{"long":{"other":"{0} मिलिमिटर"},"short":{"other":"{0} मिमी"},"narrow":{"other":"{0} मिमी"},"perUnit":{}},"mile":{"long":{"other":"{0} मायल्स"},"short":{"other":"{0} mi"},"narrow":{"other":"{0} mi"},"perUnit":{}},"yard":{"long":{"other":"{0} यार्ड"},"short":{"other":"{0} yd"},"narrow":{"other":"{0} yd"},"perUnit":{}},"foot":{"long":{"other":"{0} फूट"},"short":{"other":"{0} फूट"},"narrow":{"other":"{0} फूट"},"perUnit":{"long":"दर फूट {0}","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0} इंच"},"short":{"other":"{0} in"},"narrow":{"other":"{0} in"},"perUnit":{"long":"दर इंच {0}","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} मायल्स-स्कँडिनेव्हियन"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} किलोग्राम"},"short":{"other":"{0} किलोग्राम"},"narrow":{"other":"{0} किलो"},"perUnit":{"long":"{0}/किलोग्राम","short":"{0}/किलोग्राम","narrow":"{0}/किलोग्राम"}},"gram":{"long":{"other":"{0} ग्राम"},"short":{"other":"{0} ग्राम"},"narrow":{"other":"{0} ग्रा"},"perUnit":{"long":"{0}/ग्रा","short":"{0}/ग्रा","narrow":"{0}/ग्रा"}},"stone":{"long":{"other":"{0} स्टोन"},"short":{"other":"{0} स्टोन"},"narrow":{"other":"{0} स्टोन"},"perUnit":{}},"pound":{"long":{"other":"{0} पौंड"},"short":{"other":"{0} lb"},"narrow":{"other":"{0} lb"},"perUnit":{"long":"{0} दर पौंड","short":"{0}/पौंड","narrow":"{0}/पौंड"}},"ounce":{"long":{"other":"{0} औंस"},"short":{"other":"{0} oz"},"narrow":{"other":"{0} oz"},"perUnit":{"long":"{0} दर औंस","short":"{0}/औंस","narrow":"{0}/औंस"}},"kilometer-per-hour":{"long":{"other":"{0} किमी/व"},"short":{"other":"{0} किमी/व"},"narrow":{"other":"{0} किमी/व"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} मी/से"},"short":{"other":"{0} मी/से"},"narrow":{"other":"{0} मी/से"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} मा/व"},"short":{"other":"{0} मा/व"},"narrow":{"other":"{0} मा/व"},"perUnit":{}},"celsius":{"long":{"other":"{0} अंश सेल्सियस"},"short":{"other":"{0} अंसे"},"narrow":{"other":"{0}°से"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} अंश फारेनहायट"},"short":{"other":"{0}°फा"},"narrow":{"other":"{0}°फा"},"perUnit":{}},"liter":{"long":{"other":"{0} लिटर"},"short":{"other":"{0} लि"},"narrow":{"other":"{0} लि"},"perUnit":{"long":"{0}/लिटर","short":"{0}/लि","narrow":"{0}/लि"}},"milliliter":{"long":{"other":"{0} मिलिलिटर"},"short":{"other":"{0} मिलि"},"narrow":{"other":"{0} मिलि"},"perUnit":{}},"gallon":{"long":{"other":"{0} गॅलोन"},"short":{"other":"{0} गॅ"},"narrow":{"other":"{0} गॅ"},"perUnit":{"long":"दर गॅलोन {0}","short":"{0}/गॅलो युएस","narrow":"{0}/गॅलो युएस"}},"fluid-ounce":{"long":{"other":"{0} फ्लुइड औंस"},"short":{"other":"{0} fl oz US"},"narrow":{"other":"{0} fl oz US"},"perUnit":{}}},"compound":{"per":{"long":"{0} दर {1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"युएई दिरहम्स"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"अफगाण अफगाणीस"},"symbol":"AFN","narrow":"؋"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"अल्बेनियन लेके"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"अर्मेनियन ड्राम्स"},"symbol":"AMD","narrow":"֏"},"ANG":{"displayName":{"other":"नॅदरलँड अँटिलियन गिल्डर्स"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"अंगोलन क्वॉन्ज्स"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ARP"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"अर्जेंटिना पेसोस"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"ऑस्ट्रेलियाई डॉलर्स"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"अरुबान फ्लोरिन"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"अज़रबैजानी मनात्स"},"symbol":"AZN","narrow":"₼"},"BAD":{"displayName":{"other":"BAD"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"बोस्निया-हेर्जेगोविना रुपांतरीत मार्क्स"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"बार्बाडियान डॉलर्स"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"बांगलादेशी टाकास"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"बल्गेरियन लेवा"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"बहरिनी डिनार्स"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"बुरुंडी फ्रँक"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"बरमुदान डॉलर्स"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"ब्रूनेई डॉलर्स"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"बोलिव्हियन बोलिवियानोस"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"ब्राझिलियन रियाल्स"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"बहामियन डॉलर्स"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"भुतानीज नागल्ट्रम्स"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"बोत्सवाना पुलास"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"बैलोरुसियन् रूबल्स"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"BYR"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"बेलिझ डॉलर्स"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"कॅनाडियन डॉलर्स"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"काँगोलिसी फ्रँक्स"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"स्विस फ्रँक्स"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"चिली पेसोस"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"चिनी युआन (ऑफशोर)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"चिनी युआन"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"कोलंबियन पेसोस"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"कोस्ता रिका कॉलॉन्स"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"क्युबान रुपांतरीत पेसोस"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"क्युबान पेसोस"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"केप वर्दे एस्कुडो्स"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"चेक कोरुनास"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"जिबूती फ्रँक्स"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"डॅनिश क्रोनर"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"डोमिनिकन पेसोस"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"अल्जेरियाई डिनार्स"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"EEK"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"ईजिप्ती पावंड्स"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"इरिट्रियन नाक्फास"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"इथियोपियाई बिरर्स"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"युरोस"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"फिजी डॉलर्स"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"फ़ॉकलैंड आइलैंड्स पावंड्स"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"ब्रिटिश पावंड्स"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"जॉर्जियन लारीस"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"घानाई सेडीस"},"symbol":"GHS","narrow":"GH₵"},"GIP":{"displayName":{"other":"जिब्राल्टर पावंड्स"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"गॅम्बियन दलासीस"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"गिनीन फ्रँक्स"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"ग्वाटेमाला कुएट्झल्स"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"गयाना डॉलर्स"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"हाँग काँग डॉलर्स"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"होंडुरान लेम्पिरास"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"क्रोयेषियन् कुनास"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"हैतीयन गौर्डेस"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"हंगेरियन फोरिंट्स"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"इंडोनेशियन रुपिया"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"IEP"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"इस्त्रायली न्यु शेकेल्स"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"भारतीय रुपया"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"इराकी डिनार्स"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"ईरानी रियाल्स"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"आईस्लान्डिक क्रोनुर"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"जमैकन डॉलर्स"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"जॉर्डनियन डिनार्स"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"जपानी येन"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"केनयाई शिलिंग्स"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"किरगिझस्तान सोम्स"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"कंबोडियन रियाल्स"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"कोमोरियन फ्रँक्स"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"उत्तर कोरियन वॉन"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"दक्षिण कोरियन वॉन"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"कुवेती डिनार्स"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"कैमेन आइलैंड्स डॉलर्स"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"कझाकस्तानी टेंग्स"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"लाओ किप्स"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"लिबानेस पावंड्स"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"श्री लंका रुपया"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"लायबेरियन डॉलर्स"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"LSL"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"LTL"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"LVL"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"लीबियान डिनार्स"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"मोरक्कन दिरहम्स"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"मोल्दोवान लेई"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"मलागासी एरियारीस"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"MGF"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"मसीडोनियन् डिनारी"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"म्यानमार क्यात्स"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"मंगोलियन तुगरिक्स"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"मकानेसे पटकास"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"MRO"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"मॉरिटानिया उगियास"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"मॉरिशस रुपया"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"मालदिवी रुफियास"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"मलावियन क्वाचास"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"मेक्सिकन पेसोस"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"मलेशियाई रिंग्गित्स"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"MZE"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"MZM"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"मोझांबिकन मेटिकल्स"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"नामीबिया डॉलर्स"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"नायजेरियन नायरास"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"निकारागुआन कॉर्डोबास"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"नॉर्वेगन क्रोनर"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"नेपाळी रुपया"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"न्युझीलॅन्ड डॉलर्स"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"ओमानी रियाल्स"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"पानामानियन बाल्बोआस"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"पेरुवियन सोल्स"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"पापुआ न्यु गिनी किना"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"फिलिपिनी पेसोस"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"पाकिस्तानी रुपया"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"पोलिष झ्लोटी्स"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"पराग्वेन गौरानीस"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"कतारी रियाल्स"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"रोमानियन् लेई"},"symbol":"रॉन","narrow":"लेई"},"RSD":{"displayName":{"other":"सर्बियन डिनार्स"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"रुसी रुबल्स"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"रवांडा फ्रँक्स"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"सौदी रियाल्स"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"सोलोमन आयलँड डॉलर्स"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"सेशेल्लोइस रुपया"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"सुदानी पावंड्स"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"स्वीदीष क्रोनोर"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"सिंगापूरी डॉलर्स"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"सेंट हेलिना पावंड्स"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"सिएरा लियॉनी लियॉन्स"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"सोमाली शिलिंग्स"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"सुरीनामी डॉलर्स"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"दक्षिण सुडानी पावंड्स"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"STD"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"साओ टोम आनी प्रिन्सिप डोब्रास"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"सिरियन पावंड्स"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"स्वाजी एमालांगेनी"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"थाई बाट"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"ताजिकिस्तानी सोमोनीस"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"तुर्कमेनिस्तानी मनत"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"ट्यूनीशियन डिनार्स"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"टोंगन पांगा"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"तुर्किश लायरा"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"ट्रिनीडाड आनी टोबॅगो डॉलर्स"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"न्यू तायवान डॉलर्स"},"symbol":"NT$","narrow":"$"},"TZS":{"displayName":{"other":"तंजानिया शिलिंग्स"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"युक्रेनियन् रिव्नियास"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"UGS"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"युगांडा शिलिंग्स"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"युएस डॉलर्स"},"symbol":"US$","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"उरुग्वेन पेसोस"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"उज़्बेकिस्तानी सोम"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"VEB"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"VEF"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"विनेझुएला बोलिव्हर्स"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"वियतनामी डोंग"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"वानूआतू वातूस"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"समोआई टाला"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"मध्य अफ्रीकी सीएफए फ्रँक्स"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"उदेंत कॅरिबियन डॉलर्स"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"अस्तंत आफ्रिकी सीएफए फ्रँक्स"},"symbol":"F CFA","narrow":"F CFA"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"सीएफपी फ्रँक्स"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(अज्ञात चलन)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"येमेनी रियाल्स"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"दक्षिण आफ्रिकन रँड"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"ZMK"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"झांबियन क्वाचास"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"ZWD"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 हजार"},"10000":{"other":"00 हजार"},"100000":{"other":"000 हजार"},"1000000":{"other":"0 दशलक्ष"},"10000000":{"other":"00 दशलक्ष"},"100000000":{"other":"000 दशलक्ष"},"1000000000":{"other":"0 अब्ज"},"10000000000":{"other":"00 अब्ज"},"100000000000":{"other":"000 अब्ज"},"1000000000000":{"other":"0 ट्रिलियन"},"10000000000000":{"other":"00 ट्रिलियन"},"100000000000000":{"other":"000 ट्रिलियन"}},"short":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0B"},"10000000000":{"other":"00B"},"100000000000":{"other":"000B"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤ #,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","unitPattern":"{0} {1}","short":{"1000":{"other":"¤0K"},"10000":{"other":"¤00K"},"100000":{"other":"¤000K"},"1000000":{"other":"¤0M"},"10000000":{"other":"¤00M"},"100000000":{"other":"¤000M"},"1000000000":{"other":"¤0B"},"10000000000":{"other":"¤00B"},"100000000000":{"other":"¤000B"},"1000000000000":{"other":"¤0T"},"10000000000000":{"other":"¤00T"},"100000000000000":{"other":"¤000T"}}}}},"nu":["latn"]},"locale":"kok"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
