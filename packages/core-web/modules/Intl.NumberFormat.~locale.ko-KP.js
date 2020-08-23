import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import Get from "../helpers/_ESAbstract.Get";
import Type from "../helpers/_ESAbstract.Type";
import ToObject from "../helpers/_ESAbstract.ToObject";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import Construct from "../helpers/_ESAbstract.Construct";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
import CreateIterResultObject from "../helpers/_ESAbstract.CreateIterResultObject";
(function(undefined) {
if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("ko-KP",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("ko-KP").length
)) {
// Intl.NumberFormat.~locale.ko-KP
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"ko-KP":{"units":{"simple":{"degree":{"long":{"other":"{0}도"},"short":{"other":"{0}°"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0}헥타르"},"short":{"other":"{0}ha"},"narrow":{"other":"{0}ha"},"perUnit":{}},"acre":{"long":{"other":"{0}에이커"},"short":{"other":"{0}ac"},"narrow":{"other":"{0}ac"},"perUnit":{}},"percent":{"long":{"other":"{0}%"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"킬로미터당 {0}리터"},"short":{"other":"{0}L/km"},"narrow":{"other":"{0}L/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"갤런당 {0}마일"},"short":{"other":"{0}mpg"},"narrow":{"other":"{0}mpg"},"perUnit":{}},"petabyte":{"long":{"other":"{0}페타바이트"},"short":{"other":"{0}PB"},"narrow":{"other":"{0}PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0}테라바이트"},"short":{"other":"{0}TB"},"narrow":{"other":"{0}TB"},"perUnit":{}},"terabit":{"long":{"other":"{0}테라비트"},"short":{"other":"{0}Tb"},"narrow":{"other":"{0}Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0}기가바이트"},"short":{"other":"{0}GB"},"narrow":{"other":"{0}GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0}기가비트"},"short":{"other":"{0}Gb"},"narrow":{"other":"{0}Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0}메가바이트"},"short":{"other":"{0}MB"},"narrow":{"other":"{0}MB"},"perUnit":{}},"megabit":{"long":{"other":"{0}메가비트"},"short":{"other":"{0}Mb"},"narrow":{"other":"{0}Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0}킬로바이트"},"short":{"other":"{0}kB"},"narrow":{"other":"{0}kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0}킬로비트"},"short":{"other":"{0}kb"},"narrow":{"other":"{0}kb"},"perUnit":{}},"byte":{"long":{"other":"{0}바이트"},"short":{"other":"{0}byte"},"narrow":{"other":"{0}byte"},"perUnit":{}},"bit":{"long":{"other":"{0}비트"},"short":{"other":"{0}bit"},"narrow":{"other":"{0}bit"},"perUnit":{}},"year":{"long":{"other":"{0}년"},"short":{"other":"{0}년"},"narrow":{"other":"{0}년"},"perUnit":{"long":"연당 {0}","short":"{0}/년","narrow":"{0}/년"}},"month":{"long":{"other":"{0}개월"},"short":{"other":"{0}개월"},"narrow":{"other":"{0}개월"},"perUnit":{"long":"월당 {0}","short":"{0}/월","narrow":"{0}/월"}},"week":{"long":{"other":"{0}주"},"short":{"other":"{0}주"},"narrow":{"other":"{0}주"},"perUnit":{"long":"주당 {0}","short":"{0}/주","narrow":"{0}/주"}},"day":{"long":{"other":"{0}일"},"short":{"other":"{0}일"},"narrow":{"other":"{0}일"},"perUnit":{"long":"일당 {0}","short":"{0}/일","narrow":"{0}/일"}},"hour":{"long":{"other":"{0}시간"},"short":{"other":"{0}시간"},"narrow":{"other":"{0}시간"},"perUnit":{"long":"시간당 {0}","short":"{0}/h","narrow":"{0}/시간"}},"minute":{"long":{"other":"{0}분"},"short":{"other":"{0}분"},"narrow":{"other":"{0}분"},"perUnit":{"long":"분당 {0}","short":"{0}/min","narrow":"{0}/분"}},"second":{"long":{"other":"{0}초"},"short":{"other":"{0}초"},"narrow":{"other":"{0}초"},"perUnit":{"long":"초당 {0}","short":"{0}/s","narrow":"{0}/초"}},"millisecond":{"long":{"other":"{0}밀리초"},"short":{"other":"{0}ms"},"narrow":{"other":"{0}ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0}킬로미터"},"short":{"other":"{0}km"},"narrow":{"other":"{0}km"},"perUnit":{"long":"킬로미터당 {0}","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0}미터"},"short":{"other":"{0}m"},"narrow":{"other":"{0}m"},"perUnit":{"long":"미터당 {0}","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0}센티미터"},"short":{"other":"{0}cm"},"narrow":{"other":"{0}cm"},"perUnit":{"long":"센티미터당 {0}","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0}밀리미터"},"short":{"other":"{0}mm"},"narrow":{"other":"{0}mm"},"perUnit":{}},"mile":{"long":{"other":"{0}마일"},"short":{"other":"{0}mi"},"narrow":{"other":"{0}mi"},"perUnit":{}},"yard":{"long":{"other":"{0}야드"},"short":{"other":"{0}야드"},"narrow":{"other":"{0}yd"},"perUnit":{}},"foot":{"long":{"other":"{0}피트"},"short":{"other":"{0}ft"},"narrow":{"other":"{0}′"},"perUnit":{"long":"피트당 {0}","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0}인치"},"short":{"other":"{0}in"},"narrow":{"other":"{0}″"},"perUnit":{"long":"인치당 {0}","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0}스칸디나비아 마일"},"short":{"other":"{0}smi"},"narrow":{"other":"{0}smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0}킬로그램"},"short":{"other":"{0}kg"},"narrow":{"other":"{0}kg"},"perUnit":{"long":"킬로그램당 {0}","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0}그램"},"short":{"other":"{0}g"},"narrow":{"other":"{0}g"},"perUnit":{"long":"그램당 {0}","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0}스톤"},"short":{"other":"{0}st"},"narrow":{"other":"{0}st"},"perUnit":{}},"pound":{"long":{"other":"{0}파운드"},"short":{"other":"{0}lb"},"narrow":{"other":"{0}lb"},"perUnit":{"long":"파운드당 {0}","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0}온스"},"short":{"other":"{0}oz"},"narrow":{"other":"{0}oz"},"perUnit":{"long":"온스당 {0}","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"시속 {0}킬로미터"},"short":{"other":"{0}km/h"},"narrow":{"other":"{0}km/h"},"perUnit":{}},"meter-per-second":{"long":{"other":"초속 {0}미터"},"short":{"other":"{0}m/s"},"narrow":{"other":"{0}m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"시속 {0}마일"},"short":{"other":"{0}mi/h"},"narrow":{"other":"{0}mph"},"perUnit":{}},"celsius":{"long":{"other":"섭씨 {0}도"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"화씨 {0}도"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°F"},"perUnit":{}},"liter":{"long":{"other":"{0}리터"},"short":{"other":"{0}L"},"narrow":{"other":"{0}ℓ"},"perUnit":{"long":"리터당 {0}","short":"{0}/L","narrow":"{0}/L"}},"milliliter":{"long":{"other":"{0}밀리리터"},"short":{"other":"{0}mL"},"narrow":{"other":"{0}mL"},"perUnit":{}},"gallon":{"long":{"other":"{0}갤런"},"short":{"other":"{0}gal"},"narrow":{"other":"{0}gal"},"perUnit":{"long":"갤런당 {0}","short":"{0}/gal","narrow":"{0}/gal"}},"fluid-ounce":{"long":{"other":"{0}액량 온스"},"short":{"other":"{0}fl oz"},"narrow":{"other":"{0}fl oz"},"perUnit":{}}},"compound":{"per":{"long":"{1}당 {0}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"안도라 페세타"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"아랍에미리트 디르함"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"아프가니 (1927–2002)"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"아프가니스탄 아프가니"},"symbol":"AFN","narrow":"AFN"},"ALK":{"displayName":{"other":"ALK"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"알바니아 레크"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"아르메니아 드람"},"symbol":"AMD","narrow":"AMD"},"ANG":{"displayName":{"other":"네덜란드령 안틸레스 길더"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"앙골라 콴자"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"앙골라 콴자 (1977–1990)"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"앙골라 신콴자 (1990–2000)"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"앙골라 재조정 콴자 (1995–1999)"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"아르헨티나 오스트랄"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"아르헨티나 페소 레이 (1970–1983)"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"아르헨티나 페소 (18810–1970)"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"아르헨티나 페소 (1983–1985)"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"아르헨티나 페소"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"호주 실링"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"호주 달러"},"symbol":"AU$","narrow":"$"},"AWG":{"displayName":{"other":"아루바 플로린"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"아제르바이젠 마나트(1993–2006)"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"아제르바이잔 마나트"},"symbol":"AZN","narrow":"AZN"},"BAD":{"displayName":{"other":"보스니아-헤르체고비나 디나르"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"보스니아-헤르체고비나 태환 마르크"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"보스니아-헤르체고비나 신디나르 (1994–1997)"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"바베이도스 달러"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"방글라데시 타카"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"벨기에 프랑 (태환)"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"벨기에 프랑"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"벨기에 프랑 (금융)"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"불가리아 동전 렛"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"불가리아 사회주의자 렛"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"불가리아 레프"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"불가리아 렛 (1879–1952)"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"바레인 디나르"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"부룬디 프랑"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"버뮤다 달러"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"부루나이 달러"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"볼리비아노"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"볼리비아 볼리비아노 (1863–1963)"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"볼리비아노 페소"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"볼리비아노 Mvdol(기금)"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"볼리비아노 크루제이루 노보 (1967–1986)"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"브라질 크루자두"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"브라질 크루제이루 (1990–1993)"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"브라질 헤알"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"브라질 크루자두 노보"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"브라질 크루제이루"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"브라질 크루제이루 (1942–1967)"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"바하마 달러"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"부탄 눌투눔"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"버마 차트"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"보츠와나 폴라"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"벨라루스 신권 루블 (1994–1999)"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"벨라루스 루블"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"벨라루스 루블 (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"벨리즈 달러"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"캐나다 달러"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"콩고 프랑 콩골라스"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"유로 (WIR)"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"스위스 프랑"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"프랑 (WIR)"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"칠레 에스쿠도"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"칠레 (UF)"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"칠레 페소"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"중국 위안화(역외)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"CNX"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"중국 위안화"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"콜롬비아 페소"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"콜롬비아 실가 단위"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"코스타리카 콜론"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"고 세르비아 디나르"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"체코슬로바키아 동전 코루나"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"쿠바 태환 페소"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"쿠바 페소"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"카보베르데 에스쿠도"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"싸이프러스 파운드"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"체코 공화국 코루나"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"동독 오스트마르크"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"독일 마르크"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"지부티 프랑"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"덴마크 크로네"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"도미니카 페소"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"알제리 디나르"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"에쿠아도르 수크레"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"에콰도르 (UVC)"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"에스토니아 크룬"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"이집트 파운드"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"에리트리아 나크파"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"스페인 페세타(예금)"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"스페인 페세타(변환 예금)"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"스페인 페세타"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"에티오피아 비르"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"유로"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"핀란드 마르카"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"피지 달러"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"포클랜드제도 파운드"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"프랑스 프랑"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"영국령 파운드 스털링"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"그루지야 지폐 라리트"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"조지아 라리"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"가나 시디 (1979–2007)"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"가나 시디"},"symbol":"GHS","narrow":"GHS"},"GIP":{"displayName":{"other":"지브롤터 파운드"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"감비아 달라시"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"기니 프랑"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"기니 시리"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"적도 기니 에쿨 (Ekwele)"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"그리스 드라크마"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"과테말라 케트살"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"포르투갈령 기니 에스쿠도"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"기네비쏘 페소"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"가이아나 달러"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"홍콩 달러"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"온두라스 렘피라"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"크로아티아 디나르"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"크로아티아 쿠나"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"하이티 구르드"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"헝가리 포린트"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"인도네시아 루피아"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"아일랜드 파운드"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"이스라엘 파운드"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"ILR"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"이스라엘 신권 세켈"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"인도 루피"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"이라크 디나르"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"이란 리얄"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"ISJ"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"아이슬란드 크로나"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"이탈리아 리라"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"자메이카 달러"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"요르단 디나르"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"일본 엔화"},"symbol":"JP¥","narrow":"¥"},"KES":{"displayName":{"other":"케냐 실링"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"키르기스스탄 솜"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"캄보디아 리얄"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"코모르 프랑"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"조선 민주주의 인민 공화국 원"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"대한민국 환 (1953–1962)"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"KRO"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"대한민국 원"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"쿠웨이트 디나르"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"케이맨 제도 달러"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"카자흐스탄 텐게"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"라오스 키프"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"레바논 파운드"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"스리랑카 루피"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"라이베리아 달러"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"레소토 로티"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"리투아니아 리타"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"룩셈부르크 타로나"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"룩셈부르크 변환 프랑"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"룩셈부르크 프랑"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"룩셈부르크 재정 프랑"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"라트비아 라트"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"라트비아 루블"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"리비아 디나르"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"모로코 디렘"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"모로코 프랑"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"모나코 프랑"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"몰도바 쿠폰"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"몰도바 레이"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"마다가스카르 아리아리"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"마다가스카르 프랑"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"마케도니아 디나르"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"MKN"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"말리 프랑"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"미얀마 키얏"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"몽골 투그릭"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"마카오 파타카"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"모리타니 우기야 (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"모리타니 우기야"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"몰타 리라"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"몰타 파운드"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"모리셔스 루피"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"MVP"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"몰디브 제도 루피아"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"말라위 콰쳐"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"멕시코 페소"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"멕시코 실버 페소 (1861–1992)"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"멕시코 (UDI)"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"말레이시아 링깃"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"모잠비크 에스쿠도"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"고 모잠비크 메티칼"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"모잠비크 메티칼"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"나미비아 달러"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"니제르 나이라"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"니카라과 코르도바"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"니카라과 코르도바 오로"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"네델란드 길더"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"노르웨이 크로네"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"네팔 루피"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"뉴질랜드 달러"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"오만 리얄"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"파나마 발보아"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"페루 인티"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"페루 솔"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"페루 솔 (1863–1965)"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"파푸아뉴기니 키나"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"필리핀 페소"},"symbol":"PHP","narrow":"₱"},"PKR":{"displayName":{"other":"파키스탄 루피"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"폴란드 즐로티"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"폴란드 즐로티 (1950–1995)"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"포르투갈 에스쿠도"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"파라과이 과라니"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"카타르 리얄"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"로디지아 달러"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"루마니아 레이"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"루마니아 레우"},"symbol":"RON","narrow":"L"},"RSD":{"displayName":{"other":"세르비아 디나르"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"러시아 루블"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"러시아 루블 (1991–1998)"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"르완다 프랑"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"사우디아라비아 리얄"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"솔로몬 제도 달러"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"세이셸 루피"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"수단 디나르"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"수단 파운드"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"고 수단 파운드"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"스웨덴 크로나"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"싱가폴 달러"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"세인트헬레나 파운드"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"슬로베니아 톨라르"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"슬로바키아 코루나"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"시에라리온 리온"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"소말리아 실링"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"수리남 달러"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"수리남 길더"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"남수단 파운드"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"상투메 프린시페 도브라 (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"상투메 프린시페 도브라"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"소련 루블"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"엘살바도르 콜론"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"시리아 파운드"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"스와질란드 릴랑게니"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"태국 바트"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"타지키스탄 루블"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"타지키스탄 소모니"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"투르크메니스탄 마나트 (1993–2009)"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"투르크메니스탄 마나트"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"튀니지 디나르"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"통가 파앙가"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"티모르 에스쿠도"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"터키 리라"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"신 터키 리라"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"트리니다드 토바고 달러"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"신 타이완 달러"},"symbol":"NT$","narrow":"NT$"},"TZS":{"displayName":{"other":"탄자니아 실링"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"우크라이나 그리브나"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"우크라이나 카보바네츠"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"우간다 실링 (1966–1987)"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"우간다 실링"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"미국 달러"},"symbol":"US$","narrow":"$"},"USN":{"displayName":{"other":"미국 달러(다음날)"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"미국 달러(당일)"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"우루과이 페소 (UI)"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"우루과이 페소 (1975–1993)"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"우루과이 페소 우루과요"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"UYW"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"우즈베키스탄 숨"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"베네주엘라 볼리바르 (1871–2008)"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"베네수엘라 볼리바르 (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"베네수엘라 볼리바르"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"베트남 동"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"베트남 동 (1978–1985)"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"바누아투 바투"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"서 사모아 탈라"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"중앙아프리카 CFA 프랑"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"은화"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"금"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"유르코 (유럽 회계 단위)"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"유럽 통화 동맹"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"유럽 계산 단위 (XBC)"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"유럽 계산 단위 (XBD)"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"동카리브 달러"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"특별인출권"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"유럽 환율 단위"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"프랑스 프랑 (Gold)"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"프랑스 프랑 (UIC)"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"서아프리카 CFA 프랑"},"symbol":"CFA","narrow":"CFA"},"XPD":{"displayName":{"other":"팔라듐"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"CFP 프랑"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"백금"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"RINET 기금"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"XSU"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"테스트 통화 코드"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"XUA"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(알 수 없는 통화 단위)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"예멘 디나르"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"예멘 리알"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"유고슬라비아 동전 디나르"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"유고슬라비아 노비 디나르"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"유고슬라비아 전환 디나르"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"YUR"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"남아프리카 랜드 (금융)"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"남아프리카 랜드"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"쟘비아 콰쳐 (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"잠비아 콰쳐"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"자이르 신권 자이르"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"자이르 자이르"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"짐바브웨 달러"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"짐바브웨 달러 (2009)"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"짐바브웨 달러 (2008)"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"long":{"1000":{"other":"0천"},"10000":{"other":"0만"},"100000":{"other":"00만"},"1000000":{"other":"000만"},"10000000":{"other":"0000만"},"100000000":{"other":"0억"},"1000000000":{"other":"00억"},"10000000000":{"other":"000억"},"100000000000":{"other":"0000억"},"1000000000000":{"other":"0조"},"10000000000000":{"other":"00조"},"100000000000000":{"other":"000조"}},"short":{"1000":{"other":"0천"},"10000":{"other":"0만"},"100000":{"other":"00만"},"1000000":{"other":"000만"},"10000000":{"other":"0000만"},"100000000":{"other":"0억"},"1000000000":{"other":"00억"},"10000000000":{"other":"000억"},"100000000000":{"other":"0000억"},"1000000000000":{"other":"0조"},"10000000000000":{"other":"00조"},"100000000000000":{"other":"000조"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤#,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","unitPattern":"{0} {1}","short":{"1000":{"other":"¤0천"},"10000":{"other":"¤0만"},"100000":{"other":"¤00만"},"1000000":{"other":"¤000만"},"10000000":{"other":"¤0000만"},"100000000":{"other":"¤0억"},"1000000000":{"other":"¤00억"},"10000000000":{"other":"¤000억"},"100000000000":{"other":"¤0000억"},"1000000000000":{"other":"¤0조"},"10000000000000":{"other":"¤00조"},"100000000000000":{"other":"¤000조"}}}}},"nu":["latn"]}},"availableLocales":["ko-KP"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
