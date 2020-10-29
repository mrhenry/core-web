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
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("vi",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("vi").length
)) {
// Intl.NumberFormat.~locale.vi
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"vi":{"units":{"simple":{"degree":{"long":{"other":"{0} độ"},"short":{"other":"{0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} héc-ta"},"short":{"other":"{0} ha"},"narrow":{"other":"{0}ha"},"perUnit":{}},"acre":{"long":{"other":"{0} mẫu"},"short":{"other":"{0} mẫu"},"narrow":{"other":"{0} mẫu"},"perUnit":{}},"percent":{"long":{"other":"{0}%"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} lít/km"},"short":{"other":"{0} l/km"},"narrow":{"other":"{0} l/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} dặm/gallon"},"short":{"other":"{0} mpg"},"narrow":{"other":"{0} mpg"},"perUnit":{}},"petabyte":{"long":{"other":"{0} PB"},"short":{"other":"{0} PB"},"narrow":{"other":"{0} PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} terabyte"},"short":{"other":"{0} TB"},"narrow":{"other":"{0} TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} terabit"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0} Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} gigabyte"},"short":{"other":"{0} GB"},"narrow":{"other":"{0} GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} gigabit"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0} Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} megabyte"},"short":{"other":"{0} MB"},"narrow":{"other":"{0} MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} megabit"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0} Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kilobyte"},"short":{"other":"{0} kB"},"narrow":{"other":"{0} kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kilobit"},"short":{"other":"{0} kb"},"narrow":{"other":"{0} kb"},"perUnit":{}},"byte":{"long":{"other":"{0} byte"},"short":{"other":"{0} byte"},"narrow":{"other":"{0} byte"},"perUnit":{}},"bit":{"long":{"other":"{0} bit"},"short":{"other":"{0} bit"},"narrow":{"other":"{0} bit"},"perUnit":{}},"year":{"long":{"other":"{0} năm"},"short":{"other":"{0} năm"},"narrow":{"other":"{0} năm"},"perUnit":{"long":"{0}/năm","short":"{0}/năm","narrow":"{0}/năm"}},"month":{"long":{"other":"{0} tháng"},"short":{"other":"{0} tháng"},"narrow":{"other":"{0} tháng"},"perUnit":{"long":"{0}/tháng","short":"{0}/tháng","narrow":"{0}/tháng"}},"week":{"long":{"other":"{0} tuần"},"short":{"other":"{0} tuần"},"narrow":{"other":"{0} tuần"},"perUnit":{"long":"{0}/tuần","short":"{0}/tuần","narrow":"{0}/tuần"}},"day":{"long":{"other":"{0} ngày"},"short":{"other":"{0} ngày"},"narrow":{"other":"{0} ngày"},"perUnit":{"long":"{0}/ngày","short":"{0}/ngày","narrow":"{0}/ngày"}},"hour":{"long":{"other":"{0} giờ"},"short":{"other":"{0} giờ"},"narrow":{"other":"{0} giờ"},"perUnit":{"long":"{0}/giờ","short":"{0}/giờ","narrow":"{0}/giờ"}},"minute":{"long":{"other":"{0} phút"},"short":{"other":"{0} phút"},"narrow":{"other":"{0} phút"},"perUnit":{"long":"{0}/phút","short":"{0}/phút","narrow":"{0}/phút"}},"second":{"long":{"other":"{0} giây"},"short":{"other":"{0} giây"},"narrow":{"other":"{0} giây"},"perUnit":{"long":"{0}/giây","short":"{0}/giây","narrow":"{0}/giây"}},"millisecond":{"long":{"other":"{0} mili giây"},"short":{"other":"{0} mili giây"},"narrow":{"other":"{0}miligiây"},"perUnit":{}},"kilometer":{"long":{"other":"{0} kilômét"},"short":{"other":"{0} km"},"narrow":{"other":"{0}km"},"perUnit":{"long":"{0}/km","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} mét"},"short":{"other":"{0} m"},"narrow":{"other":"{0}m"},"perUnit":{"long":"{0}/m","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} xentimét"},"short":{"other":"{0} cm"},"narrow":{"other":"{0}cm"},"perUnit":{"long":"{0}/cm","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0} milimét"},"short":{"other":"{0} mm"},"narrow":{"other":"{0}mm"},"perUnit":{}},"mile":{"long":{"other":"{0} dặm"},"short":{"other":"{0} dặm"},"narrow":{"other":"{0}mi"},"perUnit":{}},"yard":{"long":{"other":"{0} yard"},"short":{"other":"{0} yd"},"narrow":{"other":"{0}yd"},"perUnit":{}},"foot":{"long":{"other":"{0} feet"},"short":{"other":"{0} ft"},"narrow":{"other":"{0}'"},"perUnit":{"long":"{0}/ft","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0} inch"},"short":{"other":"{0} inch"},"narrow":{"other":"{0}\\\""},"perUnit":{"long":"{0}/inch","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} dặm scandinavia"},"short":{"other":"{0} smi"},"narrow":{"other":"{0} smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} kilôgam"},"short":{"other":"{0} kg"},"narrow":{"other":"{0}kg"},"perUnit":{"long":"{0}/kg","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} gam"},"short":{"other":"{0} g"},"narrow":{"other":"{0}g"},"perUnit":{"long":"{0}/gam","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} st"},"short":{"other":"{0} st"},"narrow":{"other":"{0} st"},"perUnit":{}},"pound":{"long":{"other":"{0} pao"},"short":{"other":"{0} lb"},"narrow":{"other":"{0}lb"},"perUnit":{"long":"{0}/lb","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0} aoxơ"},"short":{"other":"{0} oz"},"narrow":{"other":"{0}oz"},"perUnit":{"long":"{0}/aoxơ","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"{0} kilômét/giờ"},"short":{"other":"{0} km/h"},"narrow":{"other":"{0}km/h"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} mét/giây"},"short":{"other":"{0} m/s"},"narrow":{"other":"{0}m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} dặm/giờ"},"short":{"other":"{0} mi/h"},"narrow":{"other":"{0}mph"},"perUnit":{}},"celsius":{"long":{"other":"{0} độ C"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} độ F"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0} lít"},"short":{"other":"{0} L"},"narrow":{"other":"{0}L"},"perUnit":{"long":"{0}/l","short":"{0}/l","narrow":"{0}/l"}},"milliliter":{"long":{"other":"{0} mililít"},"short":{"other":"{0} mL"},"narrow":{"other":"{0} mL"},"perUnit":{}},"gallon":{"long":{"other":"{0} gallon"},"short":{"other":"{0} gal"},"narrow":{"other":"{0} gal"},"perUnit":{"long":"{0}/gal","short":"{0}/gal Mỹ","narrow":"{0}/gal Mỹ"}},"fluid-ounce":{"long":{"other":"{0} aoxơ chất lỏng"},"short":{"other":"{0} fl oz"},"narrow":{"other":"{0} fl oz"},"perUnit":{}}},"compound":{"per":{"long":"{0}/{1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"Đồng Peseta của Andora"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"Dirham UAE"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"Đồng Afghani của Afghanistan (1927–2002)"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"Afghani Afghanistan"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"Lek Albania"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"Dram Armenia"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"Guilder Antille Hà Lan"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"Kwanza Angola"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"Đồng Kwanza của Angola (1977–1991)"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"Đồng Kwanza Mới của Angola (1990–2000)"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"Đồng Kwanza Điều chỉnh lại của Angola (1995–1999)"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"Đồng Austral của Argentina"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"Đồng Peso Ley của Argentina (1970–1983)"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"Đồng Peso Argentina (1881–1970)"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"Đồng Peso Argentina (1983–1985)"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"Peso Argentina"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"Đồng Schiling Áo"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"Đô la Australia"},"symbol":"AU$","narrow":"$"},"AWG":{"displayName":{"other":"Florin Aruba"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"Đồng Manat của Azerbaijan (1993–2006)"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"Manat Azerbaijan"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"Đồng Dinar của Bosnia-Herzegovina (1992–1994)"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"Mark Bosnia-Herzegovina có thể chuyển đổi"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"Đồng Dinar Mới của Bosnia-Herzegovina (1994–1997)"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"Đô la Barbados"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"Taka Bangladesh"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"Đồng Franc Bỉ (có thể chuyển đổi)"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"Đồng Franc Bỉ"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"Đồng Franc Bỉ (tài chính)"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"Đồng Lev Xu của Bun-ga-ri"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"Đồng Lev Xã hội chủ nghĩa của Bun-ga-ri"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"Lev Bulgaria"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"Đồng Lev của Bun-ga-ri (1879–1952)"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"Dinar Bahrain"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"Franc Burundi"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"Đô la Bermuda"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"Đô la Brunei"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"Boliviano Bolivia"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"Đồng Boliviano của Bolivia (1863–1963)"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"Đồng Peso Bolivia"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"Đồng Mvdol Bolivia"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"Đồng Cruzerio Mới của Braxin (1967–1986)"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"Đồng Cruzado của Braxin (1986–1989)"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"Đồng Cruzerio của Braxin (1990–1993)"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"Real Braxin"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"Đồng Cruzado Mới của Braxin (1989–1990)"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"Đồng Cruzeiro của Braxin (1993–1994)"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"Đồng Cruzeiro của Braxin (1942–1967)"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"Đô la Bahamas"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"Ngultrum Bhutan"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"Đồng Kyat Miến Điện"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"Pula Botswana"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"Đồng Rúp Mới của Belarus (1994–1999)"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"Rúp Belarus"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"Rúp Belarus (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"Đô la Belize"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"Đô la Canada"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"Franc Congo"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"Đồng Euro WIR"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"Franc Thụy sĩ"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"Đồng France WIR"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"Đồng Escudo của Chile"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"Đơn vị Kế toán của Chile (UF)"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"Peso Chile"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"Nhân dân tệ (hải ngoại)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"Nhân dân tệ"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"Peso Colombia"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"Đơn vị Giá trị Thực của Colombia"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"Colón Costa Rica"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"Đồng Dinar của Serbia (2002–2006)"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"Đồng Koruna Xu của Czechoslovakia"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"Peso Cuba có thể chuyển đổi"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"Peso Cuba"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"Escudo Cape Verde"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"Đồng Bảng Síp"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"Koruna Cộng hòa Séc"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"Đồng Mark Đông Đức"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"Đồng Mark Đức"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"Franc Djibouti"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"Krone Đan Mạch"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"Peso Dominica"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"Dinar Algeria"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"Đồng Scure Ecuador"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"Đơn vị Giá trị Không đổi của Ecuador"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"Crun Extônia"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"Bảng Ai Cập"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"Nakfa Eritrea"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"Đồng Peseta Tây Ban Nha (Tài khoản)"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"Đồng Peseta Tây Ban Nha (tài khoản có thể chuyển đổi)"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"Đồng Peseta Tây Ban Nha"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"Birr Ethiopia"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"euro"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"Đồng Markka Phần Lan"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"Đô la Fiji"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"Bảng Quần đảo Falkland"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"Franc Pháp"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"Bảng Anh"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"Đồng Kupon Larit của Georgia"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"Lari Georgia"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"Cedi Ghana (1979–2007)"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"Cedi Ghana"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"Bảng Gibraltar"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"Dalasi Gambia"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"Franc Guinea"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"Syli Guinea"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"Đồng Ekwele của Guinea Xích Đạo"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"Drachma Hy Lạp"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"Quetzal Guatemala"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"Đồng Guinea Escudo Bồ Đào Nha"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"Peso Guinea-Bissau"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"Đô la Guyana"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"Đô la Hồng Kông"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"Lempira Honduras"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"Đồng Dinar Croatia"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"Kuna Croatia"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"Gourde Haiti"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"forint Hungary"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"Rupiah Indonesia"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"Pao Ai-len"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"Pao Ixraen"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"Sheqel Israel mới"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"Rupee Ấn Độ"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"Dinar Iraq"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"Rial Iran"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"króna Iceland"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"Lia Ý"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"Đô la Jamaica"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"Dinar Jordan"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"Yên Nhật"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"Shilling Kenya"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"Som Kyrgyzstan"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"Riel Campuchia"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"Franc Comoros"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"Won Triều Tiên"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"Đồng Hwan Hàn Quốc (1953–1962)"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"Đồng Won Hàn Quốc (1945–1953)"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"Won Hàn Quốc"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"Dinar Kuwait"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"Đô la Quần đảo Cayman"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"Tenge Kazakhstan"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"Kip Lào"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"Bảng Li-băng"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"Rupee Sri Lanka"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"Đô la Liberia"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"Ioti Lesotho"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"litas Lít-va"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"Đồng Talonas Litva"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"Đồng Franc Luxembourg có thể chuyển đổi"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"Đồng Franc Luxembourg"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"Đồng Franc Luxembourg tài chính"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"lats Lativia"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"Đồng Rúp Latvia"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"Dinar Libi"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"Dirham Ma-rốc"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"Đồng Franc Ma-rốc"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"Đồng Franc Monegasque"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"Đồng Cupon Moldova"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"Leu Moldova"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"Ariary Malagasy"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"Đồng Franc Magalasy"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"Denar Macedonia"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"Đồng Denar Macedonia (1992–1993)"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"Đồng Franc Mali"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"Kyat Myanma"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"Tugrik Mông Cổ"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"Pataca Ma Cao"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"Ouguiya Mauritania (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"Ouguiya Mauritania"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"Lia xứ Man-tơ"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"Đồng Bảng Malta"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"Rupee Mauritius"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"Rufiyaa Maldives"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"Kwacha Malawi"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"Peso Mexico"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"Đồng Peso Bạc Mê-hi-cô (1861–1992)"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"Đơn vị Đầu tư Mê-hi-cô"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"Ringgit Malaysia"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"Escudo Mozambique"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"Đồng Metical Mozambique (1980–2006)"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"Metical Mozambique"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"Đô la Namibia"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"Naira Nigeria"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"Đồng Córdoba Nicaragua (1988–1991)"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"Córdoba Nicaragua"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"Đồng Guilder Hà Lan"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"Krone Na Uy"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"Rupee Nepal"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"Đô la New Zealand"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"Rial Oman"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"Balboa Panama"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"Đồng Inti Peru"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"Sol Peru"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"Đồng Sol Peru (1863–1965)"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"Kina Papua New Guinea"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"Peso Philipin"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"Rupee Pakistan"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"Zloty Ba Lan"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"Đồng Zloty Ba Lan (1950–1995)"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"Đồng Escudo Bồ Đào Nha"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"Guarani Paraguay"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"Rial Qatar"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"Đồng Đô la Rhode"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"Đồng Leu Rumani (1952–2006)"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"Leu Romania"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"Dinar Serbia"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"Rúp Nga"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"Đồng Rúp Nga (1991–1998)"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"Franc Rwanda"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"Riyal Ả Rập Xê-út"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"Đô la quần đảo Solomon"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"Rupee Seychelles"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"Đồng Dinar Sudan (1992–2007)"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"Bảng Sudan"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"Đồng Bảng Sudan (1957–1998)"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"Krona Thụy Điển"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"Đô la Singapore"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"bảng St. Helena"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"Tôla Xlôvênia"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"Cuaron Xlôvác"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"Leone Sierra Leone"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"Schilling Somali"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"Đô la Suriname"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"Đồng Guilder Surinam"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"Bảng Nam Sudan"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"Dobra São Tomé và Príncipe (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"Dobra São Tomé và Príncipe"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"Đồng Rúp Sô viết"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"Colón El Salvador"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"Bảng Syria"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"Lilangeni Swaziland"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"Bạt Thái Lan"},"symbol":"฿","narrow":"฿"},"TJR":{"displayName":{"other":"Đồng Rúp Tajikistan"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"Somoni Tajikistan"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"Đồng Manat Turkmenistan (1993–2009)"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"Manat Turkmenistan"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"Dinar Tunisia"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"Paʻanga Tonga"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"Đồng Escudo Timor"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"lia Thổ Nhĩ Kỳ (1922–2005)"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"Lia Thổ Nhĩ Kỳ"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"Đô la Trinidad và Tobago"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"Đô la Đài Loan mới"},"symbol":"NT$","narrow":"NT$"},"TZS":{"displayName":{"other":"Shilling Tanzania"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"Hryvnia Ucraina"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"Đồng Karbovanets Ucraina"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"Đồng Shilling Uganda (1966–1987)"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"Shilling Uganda"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"Đô la Mỹ"},"symbol":"US$","narrow":"$"},"USN":{"displayName":{"other":"Đô la Mỹ (Ngày tiếp theo)"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"Đô la Mỹ (Cùng ngày)"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"Đồng Peso Uruguay (Đơn vị Theo chỉ số)"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"Đồng Peso Uruguay (1975–1993)"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"Peso Uruguay"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"Som Uzbekistan"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"Đồng bolívar của Venezuela (1871–2008)"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"Bolívar Venezuela (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"Bolívar Venezuela"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"Đồng Việt Nam"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"Đồng Việt Nam (1978–1985)"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"Vatu Vanuatu"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"Tala Samoa"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"franc CFA Trung Phi"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"Bạc"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"Vàng"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"Đơn vị Tổng hợp Châu Âu"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"Đơn vị Tiền tệ Châu Âu"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"Đơn vị Kế toán Châu Âu (XBC)"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"Đơn vị Kế toán Châu Âu (XBD)"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"Đô la Đông Caribê"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"Quyền Rút vốn Đặc biệt"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"Đơn vị Tiền Châu Âu"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"Đồng France Pháp Vàng"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"Đồng UIC-Franc Pháp"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"franc CFA Tây Phi"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"Paladi"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"Franc CFP"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"Bạch kim"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"Quỹ RINET"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"Mã Tiền tệ Kiểm tra"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(tiền tệ chưa biết)"},"symbol":"XXX","narrow":"XXX"},"YDD":{"displayName":{"other":"Đồng Dinar Yemen"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"Rial Yemen"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"Đồng Dinar Nam Tư Xu (1966–1990)"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"Đồng Dinar Nam Tư Mới (1994–2002)"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"Đồng Dinar Nam Tư Có thể chuyển đổi (1990–1992)"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"Đồng Dinar Nam Tư Tái cơ cấu (1992–1993)"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"Đồng Rand Nam Phi (tài chính)"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"Rand Nam Phi"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"Đồng kwacha của Zambia (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"Kwacha Zambia"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"Đồng Zaire Mới (1993–1998)"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"Đồng Zaire (1971–1993)"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"Đồng Đô la Zimbabwe (1980–2008)"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"Đồng Đô la Zimbabwe (2009)"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"Đồng Đô la Zimbabwe (2008)"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":",","group":".","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 nghìn"},"10000":{"other":"00 nghìn"},"100000":{"other":"000 nghìn"},"1000000":{"other":"0 triệu"},"10000000":{"other":"00 triệu"},"100000000":{"other":"000 triệu"},"1000000000":{"other":"0 tỷ"},"10000000000":{"other":"00 tỷ"},"100000000000":{"other":"000 tỷ"},"1000000000000":{"other":"0 nghìn tỷ"},"10000000000000":{"other":"00 nghìn tỷ"},"100000000000000":{"other":"000 nghìn tỷ"}},"short":{"1000":{"other":"0 N"},"10000":{"other":"00 N"},"100000":{"other":"000 N"},"1000000":{"other":"0 Tr"},"10000000":{"other":"00 Tr"},"100000000":{"other":"000 Tr"},"1000000000":{"other":"0 T"},"10000000000":{"other":"00 T"},"100000000000":{"other":"000 T"},"1000000000000":{"other":"0 NT"},"10000000000000":{"other":"00 NT"},"100000000000000":{"other":"000 NT"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"#,##0.00 ¤","accounting":"#,##0.00 ¤","unitPattern":"{0} {1}","short":{"1000":{"other":"0 N ¤"},"10000":{"other":"00 N ¤"},"100000":{"other":"000 N ¤"},"1000000":{"other":"0 Tr ¤"},"10000000":{"other":"00 Tr ¤"},"100000000":{"other":"000 Tr ¤"},"1000000000":{"other":"0 T ¤"},"10000000000":{"other":"00 T ¤"},"100000000000":{"other":"000 T ¤"},"1000000000000":{"other":"0 NT ¤"},"10000000000000":{"other":"00 NT ¤"},"100000000000000":{"other":"000 NT ¤"}}}}},"nu":["latn"]}},"availableLocales":["vi"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
