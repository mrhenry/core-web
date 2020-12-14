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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("si",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("si").length
)) {
// Intl.NumberFormat.~locale.si
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"අංශක {0}"},"short":{"other":"අංශක {0}"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"හෙක්ටයාර් {0}"},"short":{"other":"හෙක් {0}"},"narrow":{"other":"{0} ha"},"perUnit":{}},"acre":{"long":{"other":"අක්කර {0}"},"short":{"other":"අක්කර {0}"},"narrow":{"other":"අක්කර {0}"},"perUnit":{}},"percent":{"long":{"other":"ප්‍රතිශතය {0}"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"කිලෝ මීටරයට ලීටරය {0}"},"short":{"other":"ලී/කිමී {0}"},"narrow":{"other":"ලී/කිමී {0}"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"ගැලුමට හැතැප්ම {0}"},"short":{"other":"හැගැ {0}"},"narrow":{"other":"හැගැ {0}"},"perUnit":{}},"petabyte":{"long":{"other":"පෙටාබයිට් {0}"},"short":{"other":"පෙබ {0}"},"narrow":{"other":"පෙබ {0}"},"perUnit":{}},"terabyte":{"long":{"other":"ටෙරාබයිට් {0}"},"short":{"other":"ටෙබ {0}"},"narrow":{"other":"ටෙබ {0}"},"perUnit":{}},"terabit":{"long":{"other":"ටෙරාබිට් {0}"},"short":{"other":"ටේබි {0}"},"narrow":{"other":"ටේබි {0}"},"perUnit":{}},"gigabyte":{"long":{"other":"ගිගාබයිට්‌ {0}"},"short":{"other":"ගිබ {0}"},"narrow":{"other":"ගිබ {0}"},"perUnit":{}},"gigabit":{"long":{"other":"ගිගාබීට් {0}"},"short":{"other":"ගිබී {0}"},"narrow":{"other":"ගිබී {0}"},"perUnit":{}},"megabyte":{"long":{"other":"මෙගාබයිට් {0}"},"short":{"other":"මෙබ {0}"},"narrow":{"other":"මෙබ {0}"},"perUnit":{}},"megabit":{"long":{"other":"මෙගාබීට් {0}"},"short":{"other":"මෙබි {0}"},"narrow":{"other":"මෙබි {0}"},"perUnit":{}},"kilobyte":{"long":{"other":"කිලෝබයිට් {0}"},"short":{"other":"කිබ {0}"},"narrow":{"other":"කිබ {0}"},"perUnit":{}},"kilobit":{"long":{"other":"කිලෝබිට් {0}"},"short":{"other":"කිබී {0}"},"narrow":{"other":"කිබී {0}"},"perUnit":{}},"byte":{"long":{"other":"බයිට් {0}"},"short":{"other":"බයිට් {0}"},"narrow":{"other":"බයිට් {0}"},"perUnit":{}},"bit":{"long":{"other":"බීට් {0}"},"short":{"other":"බීට් {0}"},"narrow":{"other":"බීට් {0}"},"perUnit":{}},"year":{"long":{"other":"වසර {0}"},"short":{"other":"වසර {0}"},"narrow":{"other":"ව {0}"},"perUnit":{"long":"වසරට {0}","short":"{0}/ව","narrow":"{0}/ව"}},"month":{"long":{"other":"මාස {0}"},"short":{"other":"මාස {0}"},"narrow":{"other":"මා {0}"},"perUnit":{"long":"මාසයට {0}","short":"{0}/මා","narrow":"{0}/මා"}},"week":{"long":{"other":"සති {0}"},"short":{"other":"සති {0}"},"narrow":{"other":"ස {0}"},"perUnit":{"long":"සතියට {0}","short":"{0}/ස","narrow":"{0}/ස"}},"day":{"long":{"other":"දින {0}"},"short":{"other":"දින {0}"},"narrow":{"other":"දි {0}"},"perUnit":{"long":"දිනයට {0}","short":"{0}/දි","narrow":"{0}/දි"}},"hour":{"long":{"other":"පැය {0}"},"short":{"other":"පැය {0}"},"narrow":{"other":"පැය {0}"},"perUnit":{"long":"පැයට {0}","short":"පැයට {0}","narrow":"පැයට {0}"}},"minute":{"long":{"other":"මිනිත්තු {0}"},"short":{"other":"මිනි {0}"},"narrow":{"other":"මි {0}"},"perUnit":{"long":"මිනිත්තුවට {0}","short":"{0}/මිනි","narrow":"{0}/මිනි"}},"second":{"long":{"other":"තත්පර {0}"},"short":{"other":"තත් {0}"},"narrow":{"other":"ත {0}"},"perUnit":{"long":"තත්පරයට {0}","short":"තත්පරයට {0}","narrow":"තත්පරයට {0}"}},"millisecond":{"long":{"other":"මිලිතත්පර {0}"},"short":{"other":"මිලිතත් {0}"},"narrow":{"other":"මිලිතත් {0}"},"perUnit":{}},"kilometer":{"long":{"other":"කිලෝමීටර් {0}"},"short":{"other":"කි.මී {0}"},"narrow":{"other":"කි.මී {0}"},"perUnit":{"long":"කිලෝමීටරයට {0}","short":"{0}/කි.මී","narrow":"{0}/කි.මී"}},"meter":{"long":{"other":"මීටර් {0}"},"short":{"other":"මී {0}"},"narrow":{"other":"මී {0}"},"perUnit":{"long":"මීටරයට {0}","short":"{0}/මී","narrow":"{0}/මී"}},"centimeter":{"long":{"other":"සෙන්ටිමීටර් {0}"},"short":{"other":"සෙ.මී {0}"},"narrow":{"other":"සෙ.මී {0}"},"perUnit":{"long":"සෙන්ටිමීටරයට {0}","short":"{0}/සෙ.මී","narrow":"{0}/සෙ.මී"}},"millimeter":{"long":{"other":"මිලිමීටර් {0}"},"short":{"other":"මිමී {0}"},"narrow":{"other":"මිමී {0}"},"perUnit":{}},"mile":{"long":{"other":"සැතපුම් {0}"},"short":{"other":"සැත {0}"},"narrow":{"other":"සැත {0}"},"perUnit":{}},"yard":{"long":{"other":"යාර {0}"},"short":{"other":"යාර {0}"},"narrow":{"other":"යාර {0}"},"perUnit":{}},"foot":{"long":{"other":"අඩි {0}"},"short":{"other":"අඩි {0}"},"narrow":{"other":"{0}'"},"perUnit":{"long":"අඩියට {0}","short":"{0}/අඩි","narrow":"{0}/අඩි"}},"inch":{"long":{"other":"අඟල් {0}"},"short":{"other":"අඟල් {0}"},"narrow":{"other":"{0}″"},"perUnit":{"long":"අඟලයට {0}","short":"{0}/අඟල්","narrow":"{0}/අඟල්"}},"mile-scandinavian":{"long":{"other":"ස්කැන්ඩිනේවියානු සැතපුම් {0}"},"short":{"other":"ස්කැසැත {0}"},"narrow":{"other":"ස්කැසැත {0}"},"perUnit":{}},"kilogram":{"long":{"other":"කිලෝග්‍රෑම් {0}"},"short":{"other":"කි.ග්‍රෑ. {0}"},"narrow":{"other":"කිග්‍රෑ{0}"},"perUnit":{"long":"කිලෝග්‍රෑමයට {0}","short":"{0}/කි.ග්‍රෑ.","narrow":"{0}/කි.ග්‍රෑ."}},"gram":{"long":{"other":"ග්‍රෑම් {0}"},"short":{"other":"ග්‍රෑ. {0}"},"narrow":{"other":"ග්‍රෑ. {0}"},"perUnit":{"long":"ග්‍රෑමයට {0}","short":"{0}/ග්‍රෑ.","narrow":"{0}/ග්‍රෑ."}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"රාත්තල් {0}"},"short":{"other":"රා {0}"},"narrow":{"other":"රා. {0}"},"perUnit":{"long":"රාත්තලට {0}","short":"{0}/රා","narrow":"{0}/රා"}},"ounce":{"long":{"other":"අවුන්ස {0}"},"short":{"other":"අවුස {0}"},"narrow":{"other":"අවුන්ස {0}"},"perUnit":{"long":"අවුන්සයට {0}","short":"{0}/අවුස","narrow":"{0}/අවුස"}},"kilometer-per-hour":{"long":{"other":"පැයට කිලෝමීටර් {0}"},"short":{"other":"කිමී/පැ {0}"},"narrow":{"other":"කිමී/පැ {0}"},"perUnit":{}},"meter-per-second":{"long":{"other":"තත්පරයට මීටර් {0}"},"short":{"other":"මී/තත් {0}"},"narrow":{"other":"මී/තත් {0}"},"perUnit":{}},"mile-per-hour":{"long":{"other":"පැයට සැතපුම් {0}"},"short":{"other":"පැ/සැ {0}"},"narrow":{"other":"පැ/සැ {0}"},"perUnit":{}},"celsius":{"long":{"other":"සෙල්සියස් අංශක {0}"},"short":{"other":"සෙල්. {0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"fahrenheit":{"long":{"other":"ෆැරන්හයිට් අංශක {0}"},"short":{"other":"ෆැර. {0}°"},"narrow":{"other":"ෆැර. {0}°"},"perUnit":{}},"liter":{"long":{"other":"ලීටර් {0}"},"short":{"other":"ලී {0}"},"narrow":{"other":"ලී {0}"},"perUnit":{"long":"ලීටරයට {0}","short":"{0}/ලී","narrow":"{0}/ලී"}},"milliliter":{"long":{"other":"මිලිලීටර් {0}"},"short":{"other":"මිලී {0}"},"narrow":{"other":"මිලී {0}"},"perUnit":{}},"gallon":{"long":{"other":"ගැලුම් {0}"},"short":{"other":"ගැලු {0}"},"narrow":{"other":"ගැලු {0}"},"perUnit":{"long":"ගැලුමට {0}","short":"{0}/ගැලු","narrow":"{0}/ගැලු"}},"fluid-ounce":{"long":{"other":"ද්‍රව අවුන්ස {0}"},"short":{"other":"ද්‍රව අවු {0}"},"narrow":{"other":"ද්‍රව අවු {0}"},"perUnit":{}}},"compound":{"per":{"long":"{1} ට {0} බැගින්","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"ADP"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"එක්සත් අරාබි එමිරේට්ස් ඩිරාම්"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"ඇෆ්ගනිථාන ඇෆ්ගනි"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"ඇල්බේනියානු ලෙක්"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"ආර්මේනියානු ඩ්‍රෑම්"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"නෙදර්ලන්ත ඇන්ටිලියන් ගිල්ඩර්"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"ඇන්ගෝලානු ක්වන්සා"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"AON"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"AOR"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"ARP"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"ආර්ජන්ටිනා පෙසෝ"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"ATS"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"ඔස්ට්‍රේලියානු ඩොලර්"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"අරූබානු ෆ්ලෝරින්"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"AZM"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"අසර්බයිජානු මනාට්"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"BAD"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"බොස්නියා හර්සගොවීනා පරිවර්ත්‍ය මාර්ක්"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"බාබේඩියානු ඩොලර්"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"බංග්ලාදේශ් ටකා"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"BEC"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"BEF"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"BGL"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"බල්ගේරියානු ලිව්"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"බහරේන් ඩිනාර්"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"බුරුන්දි ෆ්‍රෑන්ක්"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"බර්මියුඩානු ඩොලර්"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"බෘනායි ඩොලර්"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"බොලිවියානු බොලිවියානෝ"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"BOP"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"BRB"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"BRC"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"බ්‍රසීල රියල්"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"බහමානු ඩොලර්"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"භූතාන නගුල්ට්‍රම්"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"බොට්ස්වානා පුලා"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"බෙලරූස් රූබල්"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"බෙලරූස් රූබල් (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"බෙලිස් ඩොලර්"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"කැනේඩියානු ඩොලර්"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"කොංගෝ ෆ්‍රෑන්ක්"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"ස්විස් ෆ්‍රෑන්ක්"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"චිලි පැසෝ"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"චීන යුආන් (එතෙර)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"චීන යුආන්"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"කොලොම්බියානු පෙසෝ"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"කොස්ට රිකා කොලෝන්"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"CSD"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"මාරුකළ හැකි කියුබානු පැසෝ"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"කියුබානු පැසෝ"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"කේප් වර්ඩ් එස්කියුඩෝ"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"CYP"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"චෙක් රිපබ්ලික් කොරූනා"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"DDM"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"DEM"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"ජිබූති ෆ්‍රෑන්ක්"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"ඩැනිෂ් ක්‍රෝන්"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"ඩොමිනිකානු පෙසෝ"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"ඇල්ගේරියානු ඩිනාර්"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"ECS"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"EEK"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"ඊජිප්තු පවුම්"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"එරිත්‍රියානු නැක්ෆා"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"ESP"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"ඉතියෝපියානු බීර්"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"යුරෝ"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"FIM"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"ෆිජියන් ඩොලර්"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"ෆෝක්ලන්ඩ් දූපත් පවුම්"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"FRF"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"බ්‍රිතාන්‍ය ස්ටර්ලින් පවුම්"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"ජෝජියානු ලැරී"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"ඝානා සෙඩි"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"ජිබ්‍රෝල්ටා පවුම්"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"ගැම්බියානු දලාසි"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"ගිනියානු ෆ්‍රෑන්ක්"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"GRD"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"ගෝතමාලානු ක්වෙට්සල්"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"GWP"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"ගයනා ඩොලර්"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"හොංකොං ඩොලර්"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"හොන්ඩුරානු ලෙම්පිරා"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"ක්‍රොඒෂියානු කූනා"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"හයිටි ගෝර්ඩ්"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"හංගේරියානු ෆරින්ට්"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"ඉන්දුනීසියානු රුපියා"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"IEP"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"ILP"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"ඊශ්‍රායල නව ශෙකල්"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"ඉන්දියානු රුපියල්"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"ඉරාක ඩිනාර්"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"ඉරාන රියාල්"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"අයිස්ලන්තික ක්‍රෝනා"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"ITL"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"ජැමෙයිකානු ඩොලර්"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"ජෝර්දාන් ඩිනාර්"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"ජපන් යෙන්"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"කෙන්යානු ශිලිං"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"කිරිගිස්ථාන සම්"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"කාම්බෝජ රියේල්"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"කොමොරියානු ෆ්‍රෑන්ක්"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"උතුරු කොරියානු වොන්"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"දකුණු කොරියානු වොන්"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"කුවේට් ඩිනාර්"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"කේමන් දූපත් ඩොලර්"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"කසකස්ථාන ටෙන්ග"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"ලාඕස් කිප්"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"ලෙබනන පවුම්"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"ශ්‍රී ලංකා රුපියල"},"symbol":"රු.","narrow":"රු."},"LRD":{"displayName":{"other":"ලයිබේරියානු ඩොලර්"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"LSL"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"ලිතුවේනියානු"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"LUF"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"ලැට්වියානු ලැට්ස්"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"ලිබියානු ඩිනාර්"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"මොරොක්කෝ ඩිර්හැම්"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"MAF"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"මෝල්ඩෝවානු ලෙව්"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"මලගාසි අරියාරි"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"MGF"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"මැසඩෝනියානු ඩිනාර්"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"බුරුම ක්යාට්"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"මොන්ගෝලියානු ටග්‍රික්"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"මැකනීස් පටකා"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"මුරුසි ඔයිගුයියා (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"මුරුසි ඔයිගුයියා"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"MTL"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"මුරිසියානු රුපියල්"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"මාලදිවයින් රුෆියා"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"මලාවි ක්වාචා"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"මෙක්සිකානු ඩොලර්"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"MXP"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"මැලේසියානු රින්ගිට්"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"MZE"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"MZM"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"මොසැම්බිකන් මෙටිකල්"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"නැමීබියානු ඩොලර්"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"නයිජීරියානු නයිරා"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"නිකරගුවානු කොඩෝබා"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"NLG"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"නොර්වීජියන් ක්‍රෝන්"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"නේපාල රුපියල්"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"නවසීලන්ත ඩොලර්"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"ඕමාන් රියාල්"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"පැනමා බැල්බෝ"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"පේරු සොල්"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"පැපුවා නිව් ගිනියානු කිනා"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"පිලිපීන පෙසෝ"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"පාකිස්ථාන රුපියල්"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"පොලිෂ් ස්ලොටි"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"PTE"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"පැරගුවේ ගුවරානි"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"කටාර් රියාල්"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"ROL"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"රොමේනියානු ලෙව්"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"සර්බියානු ඩිනාර්"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"රුසියන් රූබල්"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"RUR"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"රුවන්ඩා ෆ්‍රෑන්ක්"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"සවුදි රියාල්"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"සොලමන් දූපත් ඩොලර්"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"සීෂෙලියානු රුපියල"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"SDD"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"සුඩාන පවුම්"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"SDP"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"ස්වෙඩිෂ් ක්‍රෝනා"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"සිංගප්පූරු ඩොලර්"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"ශාන්ත හෙලේනා පවුම්"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"SIT"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"SKK"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"සියරා ලියොන් ලියොන්"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"සෝමාලියානු ශිලිං"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"සුරිනාම් ඩොලර්"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"SRG"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"දකුණු සුඩාන පවුම්"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"සාඕ තෝම් සහ ප්‍රින්සිප් දොබ්‍රා (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"සාඕ තෝම් සහ ප්‍රින්සිප් දොබ්‍රා"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"SUR"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"SVC"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"සිරියානු පවුම්"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"ස්වාසි ලිලන්ජනි"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"තායි බාත්"},"symbol":"฿","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"තජිකිස්ථාන සමොනි"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"TMM"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"තක්මෙනිස්ථාන මනාට්"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"ටියුනීසියානු ඩිනාර්"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"ටොංගානු පාන්ගා"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"TPE"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"TRL"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"තුර්කි ලිරා"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"ට්‍රිනිඩෑඩ් සහ ටොබෑගෝ ඩොලර්"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"නව තායිවාන ඩොලර්"},"symbol":"NT$","narrow":"NT$"},"TZS":{"displayName":{"other":"ටැන්සානියානු ශිලිං"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"යුක්රේන හ්‍රිව්නියා"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"UGS"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"උගන්ඩා ශිලිං"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"ඇමරිකානු ඩොලර්"},"symbol":"US$","narrow":"$"},"USN":{"displayName":{"other":"USN"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"USS"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"උරුගුවේ පෙසෝ"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"උස්බෙකිස්ථාන සම්"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"VEB"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"වෙනිසියුලානු බොලිවර් (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"වෙනිසියුලානු බොලිවර්"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"වියට්නාම ඩොන්"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"වනුවාටු වාටු"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"සැමෝවා ටාලා"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"සිෆ්එ ෆ්රෑන්ක් බිඊඑසි"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"XAG"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"XAU"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"නැගෙනහිර කැරිබියානු ඩොලර්"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"XDR"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"XFO"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"සිෆ්එ ෆ්රෑන්ක් බිසීඊඑඔ"},"symbol":"සිෆ්එ","narrow":"සිෆ්එ"},"XPD":{"displayName":{"other":"XPD"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"ප්‍රංශ පොලිනීසියානු ෆ්‍රෑන්ක්"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"XPT"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"XTS"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(නොදත් මුදල්)","one":"(නොදත් මුදල් ඒකකය)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"YDD"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"යේමන රියාල්"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ZAL"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"දකුණු අප්‍රිකානු රැන්ඩ්"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"සැම්බියානු ක්වාචා (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"සැම්බියානු ක්වාචා"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"ZRN"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"ZWD"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":"."}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"දහස 0"},"10000":{"other":"දහස 00"},"100000":{"other":"දහස 000"},"1000000":{"other":"මිලියන 0"},"10000000":{"other":"මිලියන 00"},"100000000":{"other":"මිලියන 000"},"1000000000":{"other":"බිලියන 0"},"10000000000":{"other":"බිලියන 00"},"100000000000":{"other":"බිලියන 000"},"1000000000000":{"other":"ට්‍රිලියන 0"},"10000000000000":{"other":"ට්‍රිලියන 00"},"100000000000000":{"other":"ට්‍රිලියන 000"}},"short":{"1000":{"other":"ද0"},"10000":{"other":"ද00"},"100000":{"other":"ද000"},"1000000":{"other":"මි0"},"10000000":{"other":"මි00"},"100000000":{"other":"මි000"},"1000000000":{"other":"බි0"},"10000000000":{"other":"බි00"},"100000000000":{"other":"බි000"},"1000000000000":{"other":"ට්‍රි0"},"10000000000000":{"other":"ට්‍රි00"},"100000000000000":{"other":"ට්‍රි000"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤#,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","unitPattern":"{1}{0}","short":{"1000":{"other":"¤ද0"},"10000":{"other":"¤ද00"},"100000":{"other":"¤ද000"},"1000000":{"other":"¤මි0"},"10000000":{"other":"¤මි00"},"100000000":{"other":"¤මි000"},"1000000000":{"other":"¤බි0"},"10000000000":{"other":"¤බි00"},"100000000000":{"other":"¤බි000"},"1000000000000":{"other":"¤ට්‍රි0"},"10000000000000":{"other":"¤ට්‍රි00"},"100000000000000":{"other":"¤ට්‍රි000"}}}}},"nu":["latn"]},"locale":"si"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
