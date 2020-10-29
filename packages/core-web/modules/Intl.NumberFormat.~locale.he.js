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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("he",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("he").length
)) {
// Intl.NumberFormat.~locale.he
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"he":{"units":{"simple":{"degree":{"long":{"other":"{0} מעלות","one":"מעלה אחת","two":"שתי מעלות"},"short":{"other":"{0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} הקטאר","one":"הקטאר {0}"},"short":{"other":"‎{0} ha"},"narrow":{"other":"{0} הקטאר","one":"הקטאר {0}"},"perUnit":{}},"acre":{"long":{"other":"{0} אקר","one":"אקר {0}"},"short":{"other":"‎{0} ac","two":"{0} ac"},"narrow":{"other":"{0} אקר","one":"אקר {0}"},"perUnit":{}},"percent":{"long":{"other":"{0} אחוז"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} ליטרים/קילומטר","one":"{0} ליטר/קילומטר"},"short":{"other":"{0} ל׳/ק״מ"},"narrow":{"other":"{0} ל׳/ק״מ"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} מייל/גלון"},"short":{"other":"{0} mpg"},"narrow":{"other":"{0} מייל/גלון"},"perUnit":{}},"petabyte":{"long":{"other":"{0} פטה-בייט"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"טרה-בייט {0}"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"טרה-ביט {0}"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0} Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} ג׳יגה-בייט"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} ג״ב"},"perUnit":{}},"gigabit":{"long":{"other":"{0} ג'יגה-ביט"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0} Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} מגה-בייט","one":"מגה-בייט"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"מגה-ביט {0}"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0} Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} קילו-בייט"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} ק״ב","one":"ק״ב {0}"},"perUnit":{}},"kilobit":{"long":{"other":"{0} קילוביט"},"short":{"other":"{0} kb"},"narrow":{"other":"{0} kb"},"perUnit":{}},"byte":{"long":{"other":"{0} בייט"},"short":{"other":"{0} בייט"},"narrow":{"other":"{0} בייט"},"perUnit":{}},"bit":{"long":{"other":"ביט {0}"},"short":{"other":"ביט {0}"},"narrow":{"other":"{0} סיביות","one":"סיבית {0}"},"perUnit":{}},"year":{"long":{"other":"{0} שנים","one":"שנה","two":"שנתיים"},"short":{"other":"{0} שנים","one":"שנה {0}"},"narrow":{"other":"{0} ש′","one":"ש′ {0}"},"perUnit":{"long":"‏{0} לשנה","short":"{0}/שנה","narrow":"{0}/שנה"}},"month":{"long":{"other":"{0} חודשים","one":"חודש","two":"חודשיים"},"short":{"other":"{0} ח׳","one":"חודש","two":"חודשיים"},"narrow":{"other":"{0} ח׳","one":"ח׳ {0}"},"perUnit":{"long":"‏{0} לחודש","short":"{0}/חודש","narrow":"{0}/חודש"}},"week":{"long":{"other":"{0} שבועות","one":"שבוע","two":"שבועיים"},"short":{"other":"{0} שבועות","one":"שבוע {0}","two":"שבועיים"},"narrow":{"other":"{0} ש′","one":"ש′ {0}"},"perUnit":{"long":"{0}/שבוע","short":"{0}/שבוע","narrow":"{0}/שבוע"}},"day":{"long":{"other":"{0} ימים","one":"יום {0}","two":"יומיים","many":"{0} יום"},"short":{"other":"{0} ימ׳","one":"יום","two":"יומיים"},"narrow":{"other":"{0} י׳","one":"י׳"},"perUnit":{"long":"{0}/יום","short":"{0}/יום","narrow":"{0}/יום"}},"hour":{"long":{"other":"{0} שעות","one":"שעה","two":"שעתיים"},"short":{"other":"{0} שע׳","one":"שעה","two":"שעתיים"},"narrow":{"other":"{0} שע׳","one":"שעה {0}"},"perUnit":{"long":"{0} לשעה","short":"{0}/שעה","narrow":"{0}/שעה"}},"minute":{"long":{"other":"{0} דקות","one":"דקה","two":"שתי דקות"},"short":{"other":"{0} דק׳","one":"דקה","two":"שתי דק׳"},"narrow":{"other":"{0} דק׳","one":"דקה","two":"שתי דק׳"},"perUnit":{"long":"{0}/דקה","short":"{0}/ד׳","narrow":"{0}/ד׳"}},"second":{"long":{"other":"{0} שניות","one":"שניה","two":"שתי שניות","many":"‏{0} שניות"},"short":{"other":"{0} שנ׳","one":"שנ׳","two":"שתי שנ׳"},"narrow":{"other":"{0} שנ׳","one":"שניה","two":"שתי שנ׳"},"perUnit":{"long":"{0} לשניה","short":"{0}/שנ׳","narrow":"{0}/שנ׳"}},"millisecond":{"long":{"other":"{0} אלפיות שנייה","one":"אלפית שנייה {0}"},"short":{"other":"{0} ms"},"narrow":{"other":"{0} ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0} קילומטרים","one":"קילומטר {0}"},"short":{"other":"{0} ק״מ"},"narrow":{"other":"{0} ק״מ"},"perUnit":{"long":"{0} לקילומטר","short":"{0}/ק״מ","narrow":"{0}/ק״מ"}},"meter":{"long":{"other":"{0} מטרים","one":"מטר {0}"},"short":{"other":"{0} מ׳"},"narrow":{"other":"{0} מ׳","two":"{0} מ′"},"perUnit":{"long":"{0} למטר","short":"{0}/מ׳","narrow":"{0}/מ׳"}},"centimeter":{"long":{"other":"{0} סנטימטרים","one":"סנטימטר {0}"},"short":{"other":"{0} ס״מ"},"narrow":{"other":"{0} ס״מ","one":"ס\\\"מ {0}"},"perUnit":{"long":"{0} לסנטימטר","short":"{0}/ס״מ","narrow":"{0}/ס״מ"}},"millimeter":{"long":{"other":"{0} מילימטרים","one":"מילימטר {0}"},"short":{"other":"{0} מ״מ","one":"מ″מ {0}"},"narrow":{"other":"{0} מ״מ","one":"מ״מ {0}"},"perUnit":{}},"mile":{"long":{"other":"{0} מייל","one":"מייל {0}"},"short":{"other":"{0} מייל"},"narrow":{"other":"{0} מייל","one":"מייל {0}"},"perUnit":{}},"yard":{"long":{"other":"{0} יארד","one":"יארד {0}"},"short":{"other":"{0} יארד","one":"יארד {0}"},"narrow":{"other":"{0} יארד","one":"יארד {0}"},"perUnit":{}},"foot":{"long":{"other":"{0} רגל","one":"רגל {0}"},"short":{"other":"‎{0} ft"},"narrow":{"other":"{0} רגל","one":"רגל {0}"},"perUnit":{"long":"{0} לרגל","short":"‎{0}/ft","narrow":"{0}/רגל"}},"inch":{"long":{"other":"{0} אינץ׳","one":"אינץ׳ {0}"},"short":{"other":"‎{0} in"},"narrow":{"other":"{0} אינץ׳","one":"אינץ׳ {0}"},"perUnit":{"long":"{0} לאינץ׳","short":"‎{0}/in","narrow":"{0}/אינץ׳"}},"mile-scandinavian":{"long":{"other":"{0} מייל-סקנדינביה","one":"מייל-סקנדינביה {0}"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} קילוגרם","one":"קילוגרם {0}"},"short":{"other":"{0} ק״ג","one":"ק״ג {0}"},"narrow":{"other":"{0}kg"},"perUnit":{"long":"{0}/קילוגרם","short":"{0}/ק״ג","narrow":"{0}/ק״ג"}},"gram":{"long":{"other":"{0} גרם","one":"גרם {0}"},"short":{"other":"{0} גר׳","one":"גר׳ {0}"},"narrow":{"other":"{0}g"},"perUnit":{"long":"{0}/גרם","short":"{0}/גר׳","narrow":"{0}/גר׳"}},"stone":{"long":{"other":"{0} סטון","one":"סטון {0}"},"short":{"other":"{0} סטון","one":"סטון {0}"},"narrow":{"other":"{0} סטון","one":"סטון {0}"},"perUnit":{}},"pound":{"long":{"other":"{0} פאונד","one":"פאונד אחד","two":"שני פאונד"},"short":{"other":"{0} lbs","one":"{0} lb"},"narrow":{"other":"{0} ליבראות","one":"ליברה {0}"},"perUnit":{"long":"{0}/פאונד","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0} אונקיות","one":"אונקיה {0}"},"short":{"other":"{0} oz"},"narrow":{"other":"{0} אונקיות","one":"אונקיה {0}"},"perUnit":{"long":"{0}/אונקיה","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"{0} קילומטר לשעה"},"short":{"other":"{0} קמ״ש"},"narrow":{"other":"{0} קמ״ש"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} מטר לשנייה"},"short":{"other":"{0} מ׳/שנ׳"},"narrow":{"other":"{0} מ/ש"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} מייל לשעה"},"short":{"other":"{0} mph"},"narrow":{"other":"{0} mph"},"perUnit":{}},"celsius":{"long":{"other":"{0} מעלות צלזיוס","one":"מעלת צלזיוס {0}"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} מעלות פרנהייט","one":"מעלת פרנהייט {0}"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} ליטר","one":"ליטר {0}"},"short":{"other":"{0} ל׳","one":"ל׳ {0}"},"narrow":{"other":"{0} ל׳"},"perUnit":{"long":"{0}/ליטר","short":"{0}/ל׳","narrow":"{0}/ל׳"}},"milliliter":{"long":{"other":"{0} מיליליטר","one":"מיליליטר {0}"},"short":{"other":"{0} מ״ל","one":"מ״ל {0}"},"narrow":{"other":"{0} מ״ל","one":"מ״ל {0}"},"perUnit":{}},"gallon":{"long":{"other":"{0} גלונים","one":"גלון {0}"},"short":{"other":"{0} גל׳"},"narrow":{"other":"{0} גל׳"},"perUnit":{"long":"{0}/גלון","short":"{0}/גל׳","narrow":"{0}/גל׳"}},"fluid-ounce":{"long":{"other":"{0} אונקיות נוזלים","one":"אונקיית נוזלים {0}"},"short":{"other":"‎{0} fl oz"},"narrow":{"other":"‎{0} fl oz"},"perUnit":{}}},"compound":{"per":{"long":"{0} ל{1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"פזטה אנדורית"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"דירהם של איחוד הנסיכויות הערביות"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"AFA"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"אפגני אפגני"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"לק אלבני"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"דראם ארמני"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"גילדר של האנטילים ההולנדיים"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"קואנזה אנגולי"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"AOK"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"קואנזה חדש אנגולי (1990–2000)"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"קואנזה רג׳וסטדו אנגולי (1995–1999)"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"ARA"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"ARL"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"ARM"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"פזו ארגנטינאי (1983–1985)"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"פסו ארגנטינאי"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"שילינג אוסטרי"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"דולר אוסטרלי"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"פלורין של ארובה"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"מנאט אזרביג׳אני (1993–2006)"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"מאנאט אזרבייג׳ני"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"דינר של בוסניה־הרצגובינה"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"מארק סחיר של בוסניה והרצגובינה"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"BAN"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"דולר ברבדיאני"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"טאקה בנגלדשי"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"פרנק בלגי (בר המרה)"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"פרנק בלגי"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"BEL"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"לב בולגרי ישן"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"BGM"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"לב בולגרי"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"BGO"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"דינר בחרייני"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"פרנק בורונדי"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"דולר ברמודה"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"דולר ברוניי"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"בוליביאנו"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"BOL"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"פזו בוליבי"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"BOV"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"קרוזיארו חדש ברזילאי (1967–1986)"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"קרוזדו ברזילאי"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"BRE"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"ריאל ברזילאי"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"BRN"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"BRR"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"BRZ"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"דולר בהאמי"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"נגולטרום בהוטני"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"BUK"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"פולה בוטסואני"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"BYB"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"רובל בלרוסי"},"symbol":"BYN","narrow":"р"},"BYR":{"displayName":{"other":"רובל בלרוסי (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"דולר בליזי"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"דולר קנדי"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"פרנק קונגולזי"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"CHE"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"פרנק שוויצרי"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"CHW"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"CLE"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"CLF"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"פסו צ׳ילאני"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"יואן סיני (CNH)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"יואן סיני"},"symbol":"‎CN¥‎","narrow":"¥"},"COP":{"displayName":{"other":"פסו קולומביאני"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"COU"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"קולון קוסטה־ריקני"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"דינר סרבי ישן"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"CSK"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"פזו קובני להמרה"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"פזו קובני"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"אסקודו כף ורדה"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"לירה קפריסאית"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"קורונה צ׳כית"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"מרק מזרח גרמני"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"מרק גרמני"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"פרנק ג׳יבוטי"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"כתר דני"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"פזו דומיניקני"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"דינר אלג׳ירי"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"סוקר אקואדורי"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"ECV"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"קרון אסטוני"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"לירה מצרית"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"נאקפה אריתראי"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"ESA"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"ESB"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"פסטה ספרדי"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"ביר אתיופי"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"אירו"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"מרק פיני"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"דולר פיג׳י"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"לירה של איי פוקלנד"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"פרנק צרפתי"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"לירה שטרלינג"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"GEK"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"לארי גאורגי"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"GHC"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"סדי גאני"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"פאונד גיברלטר"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"דלסי גמבי"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"פרנק גינאי"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"GNS"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"GQE"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"דרכמה"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"קצאל גואטמלי"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"GWE"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"פזו גינאי"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"דולר גיאני"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"דולר הונג קונגי"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"למפירה הונדורי"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"HRD"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"קונה קרואטי"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"גורד האיטי"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"פורינט הונגרי"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"רופיה אינדונזית"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"לירה אירית"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"לירה ישראלית"},"symbol":"ל״י","narrow":"ל״י"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"שקלים חדשים","one":"שקל חדש"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"רופי הודי"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"דינר עיראקי"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"ריאל איראני"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"כתר איסלנדי"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"לירה איטלקית"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"דולר ג׳מייקני"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"דינר ירדני"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"ין יפני"},"symbol":"¥","narrow":"¥"},"KES":{"displayName":{"other":"שילינג קנייתי"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"סום קירגיזי"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"ריל קמבודי"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"פרנק קומורואי"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"וון צפון קוריאני"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"KRH"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"וון דרום קוריאני"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"דינר כוויתי"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"דולר קיימני"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"טנגה קזחסטני"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"קיפ לאי"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"לירה לבנונית"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"רופי סרי לנקי"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"דולר ליברי"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"לוטי לסותי"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"ליטא ליטאי"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"LTT"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"LUC"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"פרנק לוקסמבורגי"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"LUL"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"לט לטבי"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"LVR"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"דינר לובי"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"דירהם מרוקאי"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"פרנק מרוקאי"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"MCF"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"MDC"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"לאו מולדובני"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"אריארי מלגשי"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"פרנק מדגסקארי"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"דינר מקדוני"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"MLF"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"קיאט מיאנמרי"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"טוגרוג מונגולי"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"פטקה של מקאו"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"אואוגויה מאוריטני (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"אואוגויה מאוריטני"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"לירה מלטית"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"MTP"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"רופי מאוריציני"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"רופיה מלדיבית"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"קואצ׳ה מלאווי"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"פזו מקסיקני"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"פזו מקסיקני (1861 – 1992)"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"MXV"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"רינגיט מלזי"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"אסקודואים מוזמביקיים","one":"אסקודו מוזמביקי","many":"אסקודו מוזמביקי"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"מטיקל"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"מטיקל מוזמביני"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"דולר נמיבי"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"נאירה ניגרי"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"NIC"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"קורדובה ניקרגואה"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"גילדן הולנדי"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"כתר נורווגי"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"רופי נפאלי"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"דולר ניו זילנדי"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"ריאל עומאני"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"בלבואה פנמי"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"PEI"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"סול פרואני"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"PES"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"קינה של פפואה גינאה החדשה"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"פזו פיליפיני"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"רופי פקיסטני"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"זלוטי פולני"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"PLZ"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"אסקודו פורטוגלי"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"גוארני פרגוואי"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"ריאל קטארי"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"RHD"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"לאו רומני ישן"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"לאו רומני"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"דינר סרבי"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"רובל רוסי"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"רובל רוסי (1991 – 1998)"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"פרנק רואנדי"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"ריאל סעודי"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"דולר איי שלמה"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"רופי סיישלי"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"דינר סודני"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"לירה סודנית"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"לירה סודנית (1957–1998)"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"כתר שוודי"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"דולר סינגפורי"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"פאונד סנט הלני"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"טולאר סלובני"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"קורונה סלובקי"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"ליאון סיירה לאוני"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"שילינג סומלי"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"דולר סורינאמי"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"גילדר סורינאמי"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"לירה דרום-סודנית"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"דוברה של סן טומה ופרינסיפה (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"דוברה של סאו טומה ופרינסיפה"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"רובל סובייטי"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"קולונים סלבדוריים","one":"קולון סלבדורי","many":"קולון סלבדורי"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"לירה סורית"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"לילנגני סווזילנדי"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"בהט תאילנדי"},"symbol":"฿","narrow":"฿"},"TJR":{"displayName":{"other":"TJR"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"סומוני טג׳קיסטני"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"מנאט טורקמאני"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"מאנאט טורקמני"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"דינר טוניסאי"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"פאנגה טונגי"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"אסקודו טימוראי"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"לירה טורקית"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"לירה טורקית חדשה"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"דולר טרינידדי"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"דולר טייוואני חדש"},"symbol":"NT$","narrow":"NT$"},"TZS":{"displayName":{"other":"שילינג טנזני"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"הריבנה אוקראיני"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"UAK"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"שילינג אוגנדי (1966 – 1987)"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"שילינג אוגנדי"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"דולר אמריקאי"},"symbol":"$","narrow":"$"},"USN":{"displayName":{"other":"דולר אמריקאי (היום הבא)"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"דולר אמריקאי (היום הזה)"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"UYI"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"UYP"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"פסו אורוגוואי"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"סום אוזבקי"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"בוליבר ונצואלי (1871–2008)"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"בוליבר ונצואלי (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"בוליבר ונצואלי"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"דונג וייטנאמי"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"VNN"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"ואטו של ונואטו"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"טאלה סמואי"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"פרנק CFA מרכז אפריקני"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"כסף"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"זהב"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"XBA"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"XBB"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"XBC"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"XBD"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"דולר מזרח קריבי"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"זכויות משיכה מיוחדות"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"XEU"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"פרנק זהב"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"XFU"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"פרנק CFA מערב אפריקני"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"פלדיום"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"פרנק פולינזיה הצרפתית"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"פלטינה"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"XRE"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"סימון למטרות בדיקה"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(מטבע שאינו ידוע)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"דינר תימני"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"ריאל תימני"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"YUD"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"YUM"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"YUN"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"ראנד דרום אפריקאי (כספי)"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"ראנד דרום אפריקאי"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"קוואצ׳ה זמבית (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"קוואצ׳ה זמבי"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"זאיר חדש"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"ZRZ"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"דולר זימבבואי"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"ZWL"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"ZWR"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"‎+","minusSign":"‎-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"‏0 אלף"},"10000":{"other":"‏00 אלף"},"100000":{"other":"‏000 אלף"},"1000000":{"other":"‏0 מיליון"},"10000000":{"other":"‏00 מיליון"},"100000000":{"other":"‏000 מיליון"},"1000000000":{"other":"‏0 מיליארד"},"10000000000":{"other":"‏00 מיליארד"},"100000000000":{"other":"‏000 מיליארד"},"1000000000000":{"other":"‏0 טריליון"},"10000000000000":{"other":"‏00 טריליון"},"100000000000000":{"other":"‏000 טריליון"}},"short":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0B"},"10000000000":{"other":"00B"},"100000000000":{"other":"000B"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"‏#,##0.00 ¤;‏-#,##0.00 ¤","accounting":"#,##0.00 ¤","unitPattern":"{0} {1}","short":{"1000":{"other":"¤ 0K","many":"¤0K"},"10000":{"other":"¤ 00K","one":"¤00K","two":"¤00K","many":"¤00K"},"100000":{"other":"¤000K"},"1000000":{"other":"¤0M"},"10000000":{"other":"¤00M"},"100000000":{"other":"¤000M"},"1000000000":{"other":"¤0B"},"10000000000":{"other":"¤00B"},"100000000000":{"other":"¤000B"},"1000000000000":{"other":"¤0T"},"10000000000000":{"other":"¤00T"},"100000000000000":{"other":"¤000T"}}}}},"nu":["latn"]}},"availableLocales":["he"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
