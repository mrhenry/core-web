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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("zh-Hant",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("zh-Hant").length
)) {
// Intl.NumberFormat.~locale.zh-Hant
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"{0} 度"},"short":{"other":"{0} 度"},"narrow":{"other":"{0}度"},"perUnit":{}},"hectare":{"long":{"other":"{0} 公頃"},"short":{"other":"{0} 公頃"},"narrow":{"other":"{0}公頃"},"perUnit":{}},"acre":{"long":{"other":"{0} 英畝"},"short":{"other":"{0} 英畝"},"narrow":{"other":"{0}英畝"},"perUnit":{}},"percent":{"long":{"other":"{0}%"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"每公里 {0} 公升"},"short":{"other":"{0} 升/公里"},"narrow":{"other":"{0}L/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"每加侖 {0} 英里"},"short":{"other":"{0} 英里/加侖"},"narrow":{"other":"{0}mpg"},"perUnit":{}},"petabyte":{"long":{"other":"{0} PB"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} TB"},"short":{"other":"{0} TB"},"narrow":{"other":"{0}TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} Tb"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0}Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} GB"},"short":{"other":"{0} GB"},"narrow":{"other":"{0}GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} Gb"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0}Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} MB"},"short":{"other":"{0} MB"},"narrow":{"other":"{0}MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} Mb"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0}Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kB"},"short":{"other":"{0} kB"},"narrow":{"other":"{0}kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kb"},"short":{"other":"{0} kb"},"narrow":{"other":"{0}kb"},"perUnit":{}},"byte":{"long":{"other":"{0} byte"},"short":{"other":"{0} byte"},"narrow":{"other":"{0}byte"},"perUnit":{}},"bit":{"long":{"other":"{0} bit"},"short":{"other":"{0} bit"},"narrow":{"other":"{0}bit"},"perUnit":{}},"year":{"long":{"other":"{0} 年"},"short":{"other":"{0} 年"},"narrow":{"other":"{0} 年"},"perUnit":{"long":"每年 {0}","short":"{0}/年","narrow":"{0}/年"}},"month":{"long":{"other":"{0} 個月"},"short":{"other":"{0} 個月"},"narrow":{"other":"{0} 個月"},"perUnit":{"long":"每月 {0}","short":"{0}/月","narrow":"{0}/月"}},"week":{"long":{"other":"{0} 週"},"short":{"other":"{0} 週"},"narrow":{"other":"{0} 週"},"perUnit":{"long":"每週 {0}","short":"{0}/週","narrow":"{0}/週"}},"day":{"long":{"other":"{0} 天"},"short":{"other":"{0} 天"},"narrow":{"other":"{0} 天"},"perUnit":{"long":"每天 {0}","short":"{0}/天","narrow":"{0}/天"}},"hour":{"long":{"other":"{0} 小時"},"short":{"other":"{0} 小時"},"narrow":{"other":"{0} 小時"},"perUnit":{"long":"每小時 {0}","short":"{0}/小時","narrow":"{0}/小時"}},"minute":{"long":{"other":"{0} 分鐘"},"short":{"other":"{0} 分鐘"},"narrow":{"other":"{0} 分鐘"},"perUnit":{"long":"每分鐘 {0}","short":"{0}/分鐘","narrow":"{0}/分鐘"}},"second":{"long":{"other":"{0} 秒"},"short":{"other":"{0} 秒"},"narrow":{"other":"{0} 秒"},"perUnit":{"long":"每秒 {0}","short":"{0}/秒","narrow":"{0}/秒"}},"millisecond":{"long":{"other":"{0} 毫秒"},"short":{"other":"{0} 毫秒"},"narrow":{"other":"{0} 毫秒"},"perUnit":{}},"kilometer":{"long":{"other":"{0} 公里"},"short":{"other":"{0} 公里"},"narrow":{"other":"{0}公里"},"perUnit":{"long":"每公里 {0}","short":"{0}/公里","narrow":"{0}/公里"}},"meter":{"long":{"other":"{0} 公尺"},"short":{"other":"{0} 公尺"},"narrow":{"other":"{0}公尺"},"perUnit":{"long":"每公尺 {0}","short":"{0}/公尺","narrow":"{0}/公尺"}},"centimeter":{"long":{"other":"{0} 公分"},"short":{"other":"{0} 公分"},"narrow":{"other":"{0}公分"},"perUnit":{"long":"每公分 {0}","short":"{0}/公分","narrow":"{0}/公分"}},"millimeter":{"long":{"other":"{0} 公釐"},"short":{"other":"{0} 公釐"},"narrow":{"other":"{0}公釐"},"perUnit":{}},"mile":{"long":{"other":"{0} 英里"},"short":{"other":"{0} 英里"},"narrow":{"other":"{0}英里"},"perUnit":{}},"yard":{"long":{"other":"{0} 碼"},"short":{"other":"{0} 碼"},"narrow":{"other":"{0}碼"},"perUnit":{}},"foot":{"long":{"other":"{0} 英尺"},"short":{"other":"{0} 呎"},"narrow":{"other":"{0}呎"},"perUnit":{"long":"每英尺 {0}","short":"{0}/呎","narrow":"{0}/呎"}},"inch":{"long":{"other":"{0} 英寸"},"short":{"other":"{0} 吋"},"narrow":{"other":"{0}吋"},"perUnit":{"long":"每英寸 {0}","short":"{0}/吋","narrow":"{0}/吋"}},"mile-scandinavian":{"long":{"other":"{0} 斯堪地那維亞英里"},"short":{"other":"{0} 斯堪地那維亞英里"},"narrow":{"other":"{0} 斯堪地那維亞英里"},"perUnit":{}},"kilogram":{"long":{"other":"{0} 公斤"},"short":{"other":"{0} 公斤"},"narrow":{"other":"{0} 公斤"},"perUnit":{"long":"每公斤 {0}","short":"{0}/公斤","narrow":"{0}/公斤"}},"gram":{"long":{"other":"{0} 克"},"short":{"other":"{0} 克"},"narrow":{"other":"{0}克"},"perUnit":{"long":"每克 {0}","short":"{0}/克","narrow":"{0}/克"}},"stone":{"long":{"other":"{0} 英石"},"short":{"other":"{0} 英石"},"narrow":{"other":"{0}st"},"perUnit":{}},"pound":{"long":{"other":"{0} 磅"},"short":{"other":"{0} 磅"},"narrow":{"other":"{0}磅"},"perUnit":{"long":"每磅 {0}","short":"{0}/磅","narrow":"{0}/磅"}},"ounce":{"long":{"other":"{0} 盎司"},"short":{"other":"{0} 盎司"},"narrow":{"other":"{0}盎司"},"perUnit":{"long":"每盎司 {0}","short":"{0}/盎司","narrow":"{0}/盎司"}},"kilometer-per-hour":{"long":{"other":"每小時 {0} 公里"},"short":{"other":"{0} 公里/小時"},"narrow":{"other":"{0}公里/小時"},"perUnit":{}},"meter-per-second":{"long":{"other":"每秒 {0} 公尺"},"short":{"other":"{0} 公尺/秒"},"narrow":{"other":"{0}公尺/秒"},"perUnit":{}},"mile-per-hour":{"long":{"other":"每小時 {0} 英里"},"short":{"other":"{0} 英里/小時"},"narrow":{"other":"{0}英里/小時"},"perUnit":{}},"celsius":{"long":{"other":"攝氏 {0} 度"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"華氏 {0} 度"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} 公升"},"short":{"other":"{0} 升"},"narrow":{"other":"{0}升"},"perUnit":{"long":"每公升 {0}","short":"{0}/升","narrow":"{0}/L"}},"milliliter":{"long":{"other":"{0} 毫升"},"short":{"other":"{0} 毫升"},"narrow":{"other":"{0}mL"},"perUnit":{}},"gallon":{"long":{"other":"{0} 加侖"},"short":{"other":"{0} 加侖"},"narrow":{"other":"{0}gal"},"perUnit":{"long":"每加侖 {0}","short":"{0}/加侖","narrow":"{0}/gal"}},"fluid-ounce":{"long":{"other":"{0} 液盎司"},"short":{"other":"{0} 液盎司"},"narrow":{"other":"{0}fl-oz"},"perUnit":{}}},"compound":{"per":{"long":"每{1} {0}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"安道爾陪士特"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"阿拉伯聯合大公國迪爾汗"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"阿富汗尼 (1927–2002)"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"阿富汗尼"},"symbol":"AFN","narrow":"؋"},"ALK":{"displayName":{"other":"阿爾巴尼亞列克 (1946–1965)"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"阿爾巴尼亞列克"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"亞美尼亞德拉姆"},"symbol":"AMD","narrow":"֏"},"ANG":{"displayName":{"other":"荷屬安地列斯盾"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"安哥拉寬扎"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"安哥拉寬扎 (1977–1990)"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"安哥拉新寬扎 (1990–2000)"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"安哥拉新調寬扎 (1995–1999)"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"阿根廷奧斯特納爾"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"阿根廷披索 (1970–1983)"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"阿根廷披索 (1881–1970)"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"阿根廷披索 (1983–1985)"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"阿根廷披索"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"奧地利先令"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"澳幣"},"symbol":"AU$","narrow":"$"},"AWG":{"displayName":{"other":"阿路巴盾"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"亞塞拜然馬納特 (1993–2006)"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"亞塞拜然馬納特"},"symbol":"AZN","narrow":"₼"},"BAD":{"displayName":{"other":"波士尼亞-赫塞哥維納第納爾"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"波士尼亞-赫塞哥維納可轉換馬克"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"波士尼亞-赫塞哥維納新第納爾"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"巴貝多元"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"孟加拉塔卡"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"比利時法郎（可轉換）"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"比利時法郎"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"比利時法郎（金融）"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"保加利亞硬列弗"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"保加利亞社會黨列弗"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"保加利亞新列弗"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"保加利亞列弗 (1879–1952)"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"巴林第納爾"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"蒲隆地法郎"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"百慕達幣"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"汶萊元"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"玻利維亞諾"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"玻利維亞玻利維亞諾 (1863–1963)"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"玻利維亞披索"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"玻利維亞幕多"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"巴西克魯薩多農瓦 (1967–1986)"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"巴西克魯賽羅 (1986–1989)"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"巴西克魯賽羅 (1990–1993)"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"巴西里拉"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"巴西克如爾達農瓦"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"巴西克魯賽羅 (1993–1994)"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"巴西克魯賽羅 (1942 –1967)"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"巴哈馬元"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"不丹那特倫"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"緬甸基雅特"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"波札那普拉"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"白俄羅斯新盧布 (1994–1999)"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"白俄羅斯盧布"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"白俄羅斯盧布 (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"貝里斯元"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"加幣"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"剛果法郎"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"歐元 (WIR)"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"瑞士法郎"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"法郎 (WIR)"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"智利埃斯庫多"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"卡林油達佛曼跎"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"智利披索"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"人民幣（離岸）"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"人民幣"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"哥倫比亞披索"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"哥倫比亞幣 (COU)"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"哥斯大黎加科朗"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"舊塞爾維亞第納爾"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"捷克斯洛伐克硬克朗"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"古巴可轉換披索"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"古巴披索"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"維德角埃斯庫多"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"賽普勒斯鎊"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"捷克克朗"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"東德奧斯特馬克"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"德國馬克"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"吉布地法郎"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"丹麥克朗"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"多明尼加披索"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"阿爾及利亞第納爾"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"厄瓜多蘇克雷"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"厄瓜多爾由里達瓦康斯坦 (UVC)"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"愛沙尼亞克朗"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"埃及鎊"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"厄立特里亞納克法"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"西班牙比塞塔（會計單位）"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"西班牙比塞塔（可轉換會計單位）"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"西班牙陪士特"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"衣索比亞比爾"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"歐元"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"芬蘭馬克"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"斐濟元"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"福克蘭群島鎊"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"法國法郎"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"英鎊"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"喬治亞庫旁拉里"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"喬治亞拉里"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"迦納賽地 (1979–2007)"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"迦納塞地"},"symbol":"GHS","narrow":"GH₵"},"GIP":{"displayName":{"other":"直布羅陀鎊"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"甘比亞達拉西"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"幾內亞法郎"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"幾內亞西里"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"赤道幾內亞埃奎勒"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"希臘德拉克馬"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"瓜地馬拉格查爾"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"葡屬幾內亞埃斯庫多"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"幾內亞比索披索"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"圭亞那元"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"港幣"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"洪都拉斯倫皮拉"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"克羅埃西亞第納爾"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"克羅埃西亞庫納"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"海地古德"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"匈牙利福林"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"印尼盾"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"愛爾蘭鎊"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"以色列鎊"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"以色列謝克爾 (1980–1985)"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"以色列新謝克爾"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"印度盧比"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"伊拉克第納爾"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"伊朗里亞爾"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"冰島克朗 (1918–1981)"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"冰島克朗"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"義大利里拉"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"牙買加元"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"約旦第納爾"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"日圓"},"symbol":"¥","narrow":"¥"},"KES":{"displayName":{"other":"肯尼亞先令"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"吉爾吉斯索姆"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"柬埔寨瑞爾"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"科摩羅法郎"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"北韓元"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"南韓圜"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"南韓圓"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"韓元"},"symbol":"￦","narrow":"₩"},"KWD":{"displayName":{"other":"科威特第納爾"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"開曼群島元"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"哈薩克堅戈"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"寮國基普"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"黎巴嫩鎊"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"斯里蘭卡盧比"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"賴比瑞亞元"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"賴索托洛蒂"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"立陶宛立特"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"立陶宛特羅"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"盧森堡可兌換法郎"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"盧森堡法郎"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"盧森堡金融法郎"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"拉脫維亞拉特銀幣"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"拉脫維亞盧布"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"利比亞第納爾"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"摩洛哥迪拉姆"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"摩洛哥法郎"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"摩納哥法郎"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"摩爾多瓦券"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"摩杜雲列伊"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"馬達加斯加阿里亞里"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"馬達加斯加法郎"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"馬其頓第納爾"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"馬其頓第納爾 (1992–1993)"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"馬里法郎"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"緬甸元"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"蒙古圖格里克"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"澳門元"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"茅利塔尼亞烏吉亞 (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"茅利塔尼亞烏吉亞"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"馬爾他里拉"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"馬爾他鎊"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"模里西斯盧比"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"馬爾地夫盧比"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"馬爾地夫盧非亞"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"馬拉維克瓦查"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"墨西哥披索"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"墨西哥銀披索 (1861–1992)"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"墨西哥轉換單位 (UDI)"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"馬來西亞令吉"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"莫三比克埃斯庫多"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"莫三比克梅蒂卡爾 (1980–2006)"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"莫三比克梅蒂卡爾"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"納米比亞元"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"奈及利亞奈拉"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"尼加拉瓜科多巴"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"尼加拉瓜金科多巴"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"荷蘭盾"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"挪威克朗"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"尼泊爾盧比"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"紐西蘭幣"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"阿曼里亞爾"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"巴拿馬巴波亞"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"祕魯因蒂"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"秘魯太陽幣"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"秘魯太陽幣 (1863–1965)"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"巴布亞紐幾內亞基那"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"菲律賓披索"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"巴基斯坦盧比"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"波蘭茲羅提"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"波蘭茲羅提 (1950–1995)"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"葡萄牙埃斯庫多"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"巴拉圭瓜拉尼"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"卡達里亞爾"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"羅德西亞元"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"舊羅馬尼亞列伊"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"羅馬尼亞列伊"},"symbol":"RON","narrow":"L"},"RSD":{"displayName":{"other":"塞爾維亞戴納"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"俄羅斯盧布"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"俄羅斯盧布 (1991–1998)"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"盧安達法郎"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"沙烏地里亞爾"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"索羅門群島元"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"塞席爾盧比"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"蘇丹第納爾"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"蘇丹鎊"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"舊蘇丹鎊"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"瑞典克朗"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"新加坡幣"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"聖赫勒拿鎊"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"斯洛維尼亞托勒"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"斯洛伐克克朗"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"獅子山利昂"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"索馬利亞先令"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"蘇利南元"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"蘇利南基爾"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"南蘇丹鎊"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"聖多美島和普林西比島多布拉 (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"聖多美島和普林西比島多布拉"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"蘇聯盧布"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"薩爾瓦多科郎"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"敘利亞鎊"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"史瓦濟蘭里朗吉尼"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"泰銖"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"塔吉克盧布"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"塔吉克索莫尼"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"土庫曼馬納特 (1993–2009)"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"土庫曼馬納特"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"突尼西亞第納爾"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"東加潘加"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"帝汶埃斯庫多"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"土耳其里拉"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"新土耳其里拉"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"千里達及托巴哥元"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"新台幣"},"symbol":"$","narrow":"$"},"TZS":{"displayName":{"other":"坦尚尼亞先令"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"烏克蘭格里夫納"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"烏克蘭卡本瓦那茲"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"烏干達先令 (1966–1987)"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"烏干達先令"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"美元"},"symbol":"US$","narrow":"$"},"USN":{"displayName":{"other":"美元（次日）"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"美元（當日）"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"烏拉圭披索（指數單位）"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"烏拉圭披索 (1975–1993)"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"烏拉圭披索"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"烏茲別克索姆"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"委內瑞拉玻利瓦 (1871–2008)"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"委內瑞拉玻利瓦 (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"委內瑞拉玻利瓦"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"越南盾"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"越南盾 (1978–1985)"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"萬那杜瓦圖"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"西薩摩亞塔拉"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"法郎 (CFA–BEAC)"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"白銀"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"黃金"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"歐洲綜合單位"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"歐洲貨幣單位 (XBB)"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"歐洲會計單位 (XBC)"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"歐洲會計單位 (XBD)"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"格瑞那達元"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"特殊提款權"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"歐洲貨幣單位 (XEU)"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"法國金法郎"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"法國法郎 (UIC)"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"法郎 (CFA–BCEAO)"},"symbol":"F CFA","narrow":"F CFA"},"XPD":{"displayName":{"other":"帕拉狄昂"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"法郎 (CFP)"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"白金"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"RINET 基金"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"蘇克雷貨幣"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"測試用貨幣代碼"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"亞洲開發銀行計價單位"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"（未知貨幣）"},"symbol":"XXX","narrow":"XXX"},"YDD":{"displayName":{"other":"葉門第納爾"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"葉門里亞爾"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"南斯拉夫第納爾硬幣"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"南斯拉夫挪威亞第納爾"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"南斯拉夫可轉換第納爾"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"南斯拉夫改革第納爾 (1992–1993)"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"南非蘭特（金融）"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"南非蘭特"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"尚比亞克瓦查 (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"尚比亞克瓦查"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"薩伊新扎伊爾"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"薩伊扎伊爾"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"辛巴威元 (1980–2008)"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"辛巴威元 (2009)"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"辛巴威元 (2008)"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"非數值","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0"},"10000":{"other":"0萬"},"100000":{"other":"00萬"},"1000000":{"other":"000萬"},"10000000":{"other":"0000萬"},"100000000":{"other":"0億"},"1000000000":{"other":"00億"},"10000000000":{"other":"000億"},"100000000000":{"other":"0000億"},"1000000000000":{"other":"0兆"},"10000000000000":{"other":"00兆"},"100000000000000":{"other":"000兆"}},"short":{"1000":{"other":"0"},"10000":{"other":"0萬"},"100000":{"other":"00萬"},"1000000":{"other":"000萬"},"10000000":{"other":"0000萬"},"100000000":{"other":"0億"},"1000000000":{"other":"00億"},"10000000000":{"other":"000億"},"100000000000":{"other":"0000億"},"1000000000000":{"other":"0兆"},"10000000000000":{"other":"00兆"},"100000000000000":{"other":"000兆"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤#,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","unitPattern":"{0} {1}","short":{"1000":{"other":"0"},"10000":{"other":"¤0萬"},"100000":{"other":"¤00萬"},"1000000":{"other":"¤000萬"},"10000000":{"other":"¤0000萬"},"100000000":{"other":"¤0億"},"1000000000":{"other":"¤00億"},"10000000000":{"other":"¤000億"},"100000000000":{"other":"¤0000億"},"1000000000000":{"other":"¤0兆"},"10000000000000":{"other":"¤00兆"},"100000000000000":{"other":"¤000兆"}}}}},"nu":["latn"]},"locale":"zh-Hant"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
