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
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("cgg").length
)) {
// Intl.DisplayNames.~locale.cgg
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"cgg":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"Orukani","am":"Orumariki","ar":"Oruharabu","ar-001":"Oruharabu (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"Oruberarusi","bem":"bem","bez":"bez","bg":"Oruburugariya","bm":"bm","bn":"Orubengari","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"Rukiga","chr":"chr","ckb":"ckb","co":"co","cs":"Oruceeki","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"Orugirimaani","de-AT":"Orugirimaani (Osituria)","de-CH":"Orugirimaani (Swisi)","dje":"dje","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"Oruguriiki","en":"Orungyereza","en-AU":"Orungyereza (Ositureeriya)","en-CA":"Orungyereza (Kanada)","en-GB":"Orungyereza (Bungyereza)","en-US":"Orungyereza (Amerika)","eo":"eo","es":"Orusupaani","es-419":"Orusupaani (419)","es-ES":"Orusupaani (Sipeyini)","es-MX":"Orusupaani (Mexico)","et":"et","eu":"eu","ewo":"ewo","fa":"Orupaasiya","fa-AF":"Orupaasiya (Afuganistani)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"Orufaransa","fr-CA":"Orufaransa (Kanada)","fr-CH":"Orufaransa (Swisi)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"Oruhausa","haw":"haw","he":"he","hi":"Oruhindi","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"Oruhangare","hy":"hy","ia":"ia","id":"Oruindonezia","ig":"Oruibo","ii":"ii","is":"is","it":"Oruyitare","ja":"Orujapaani","jgo":"jgo","jmc":"jmc","jv":"Orujava","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"Orukambodiya","kn":"kn","ko":"Orukoreya","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"Orumalesiya","mt":"mt","mua":"mua","mul":"mul","my":"Oruburuma","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Hoorandi)","ne":"Orunepali","nl":"Orudaaki","nl-BE":"Orudaaki (Bubirigi)","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"Orupungyabi","pcm":"pcm","pl":"Orupoori","prg":"prg","ps":"ps","pt":"Orupocugo","pt-BR":"Orupocugo (Buraziiri)","pt-PT":"Orupocugo (Pocugo)","qu":"qu","rm":"rm","rn":"rn","ro":"Oruromania","ro-MD":"Oruromania (Moridova)","rof":"rof","root":"root","ru":"Orurrasha","rw":"Orunyarwanda","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"Orusomaari","sq":"sq","sr":"sr","st":"st","su":"su","sv":"Oruswidi","sw":"sw","sw-CD":"sw (Demokoratika Ripaaburika ya Kongo)","ta":"Orutamiri","te":"te","teo":"teo","tg":"tg","th":"Orutailandi","ti":"ti","tk":"tk","to":"to","tr":"Orukuruki","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"Orukuraini","und":"und","ur":"Oru-Urudu","uz":"uz","vai":"vai","vi":"Oruviyetinaamu","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"Oruyoruba","yue":"yue","zgh":"zgh","zh":"Oruchaina","zh-Hans":"Oruchaina (Hans)","zh-Hant":"Oruchaina (Hant)","zu":"Oruzuru","zxx":"zxx"},"short":{"az":"az","en-GB":"Orungyereza (Bungyereza)","en-US":"Orungyereza (Amerika)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Andora","AE":"Amahanga ga Buharabu ageeteereine","AF":"Afuganistani","AG":"Angiguwa na Babuda","AI":"Angwira","AL":"Arubania","AM":"Arimeniya","AO":"Angora","AQ":"AQ","AR":"Arigentina","AS":"Samowa ya Ameerika","AT":"Osituria","AU":"Ositureeriya","AW":"Aruba","AX":"AX","AZ":"Azabagyani","BA":"Boziniya na Hezegovina","BB":"Babadosi","BD":"Bangaradeshi","BE":"Bubirigi","BF":"Bokina Faso","BG":"Burugariya","BH":"Bahareni","BI":"Burundi","BJ":"Benini","BL":"BL","BM":"Berimuda","BN":"Burunei","BO":"Boriiviya","BQ":"BQ","BR":"Buraziiri","BS":"Bahama","BT":"Butani","BV":"BV","BW":"Botswana","BY":"Bararusi","BZ":"Berize","CA":"Kanada","CC":"CC","CD":"Demokoratika Ripaaburika ya Kongo","CF":"Eihanga rya Rwagati ya Afirika","CG":"Kongo","CH":"Swisi","CI":"Aivore Kositi","CK":"Ebizinga bya Kuuku","CL":"Chile","CM":"Kameruuni","CN":"China","CO":"Korombiya","CP":"CP","CR":"Kositarika","CU":"Cuba","CV":"Ebizinga bya Kepuvade","CW":"CW","CX":"CX","CY":"Saipurasi","CZ":"Ripaaburika ya Zeeki","DE":"Bugirimaani","DG":"DG","DJ":"Gyibuti","DK":"Deenimaaka","DM":"Dominika","DO":"Ripaaburika ya Dominica","DZ":"Arigyeriya","EA":"EA","EC":"Ikweda","EE":"Esitoniya","EG":"Misiri","EH":"EH","ER":"Eriteriya","ES":"Sipeyini","ET":"Ethiyopiya","EU":"EU","EZ":"EZ","FI":"Bufini","FJ":"Figyi","FK":"Ebizinga bya Faakilanda","FM":"Mikironesiya","FO":"FO","FR":"Bufaransa","GA":"Gabooni","GB":"Bungyereza","GD":"Gurenada","GE":"Gyogiya","GF":"Guyana ya Bufaransa","GG":"GG","GH":"Gana","GI":"Giburaata","GL":"Guriinirandi","GM":"Gambiya","GN":"Gine","GP":"Gwaderupe","GQ":"Guni","GR":"Guriisi","GS":"GS","GT":"Gwatemara","GU":"Gwamu","GW":"Ginebisau","GY":"Guyana","HK":"HK","HM":"HM","HN":"Hondurasi","HR":"Korasiya","HT":"Haiti","HU":"Hangare","IC":"IC","ID":"Indoneeziya","IE":"Irerandi","IL":"Isirairi","IM":"IM","IN":"Indiya","IO":"IO","IQ":"Iraaka","IR":"Iraani","IS":"Aisilandi","IT":"Itare","JE":"JE","JM":"Gyamaika","JO":"Yorudaani","JP":"Gyapaani","KE":"Kenya","KG":"Kirigizistani","KH":"Kambodiya","KI":"Kiribati","KM":"Koromo","KN":"Senti Kittis na Nevisi","KP":"Koreya Amatemba","KR":"Koreya Amashuuma","KW":"Kuweiti","KY":"Ebizinga bya Kayimani","KZ":"Kazakisitani","LA":"Layosi","LB":"Lebanoni","LC":"Senti Rusiya","LI":"Lishenteni","LK":"Siriranka","LR":"Liberiya","LS":"Lesotho","LT":"Lithuania","LU":"Lakizembaaga","LV":"Latviya","LY":"Libya","MA":"Morocco","MC":"Monaco","MD":"Moridova","ME":"ME","MF":"MF","MG":"Madagasika","MH":"Ebizinga bya Marshaa","MK":"MK","ML":"Mari","MM":"Myanamar","MN":"Mongoria","MO":"MO","MP":"Ebizinga by’amatemba ga Mariana","MQ":"Martinique","MR":"Mauriteeniya","MS":"Montserrati","MT":"Marita","MU":"Maurishiasi","MV":"Maridives","MW":"Marawi","MX":"Mexico","MY":"marayizia","MZ":"Mozambique","NA":"Namibiya","NC":"Niukaredonia","NE":"Naigya","NF":"Ekizinga Norifoko","NG":"Naigyeriya","NI":"Nikaragwa","NL":"Hoorandi","NO":"Noorwe","NP":"Nepo","NR":"Nauru","NU":"Niue","NZ":"Niuzirandi","OM":"Omaani","PA":"Panama","PE":"Peru","PF":"Polinesia ya Bufaransa","PG":"Papua","PH":"Firipino","PK":"Pakisitaani","PL":"Poorandi","PM":"Senti Piyerre na Mikweron","PN":"Pitkaini","PR":"Pwetoriko","PS":"PS","PT":"Pocugo","PW":"Palaawu","PY":"Paragwai","QA":"Kata","QO":"QO","RE":"Riyuniyoni","RO":"Romaniya","RS":"RS","RU":"Rrasha","RW":"Rwanda","SA":"Saudi Areebiya","SB":"Ebizinga bya Surimaani","SC":"Shesheresi","SD":"Sudani","SE":"Swideni","SG":"Singapo","SH":"Senti Herena","SI":"Sirovaaniya","SJ":"SJ","SK":"Sirovaakiya","SL":"Sirra Riyooni","SM":"Samarino","SN":"Senego","SO":"Somaariya","SR":"Surinaamu","SS":"SS","ST":"Sawo Tome na Purinsipo","SV":"Eri Salivado","SX":"SX","SY":"Siriya","SZ":"Swazirandi","TA":"TA","TC":"Ebizinga bya Buturuki na Kaiko","TD":"Chadi","TF":"TF","TG":"Togo","TH":"Tairandi","TJ":"Tajikisitani","TK":"Tokerawu","TL":"Burugweizooba bwa Timori","TM":"Turukimenisitani","TN":"Tunizia","TO":"Tonga","TR":"Buturuki /Take","TT":"Turinidad na Tobago","TV":"Tuvaru","TW":"Tayiwaani","TZ":"Tanzania","UA":"Ukureini","UG":"Uganda","UM":"UM","UN":"UN","US":"Amerika","UY":"Urugwai","UZ":"Uzibekisitani","VA":"Vatikani","VC":"Senti Vinsent na Gurenadini","VE":"Venezuwera","VG":"Ebizinga bya Virigini ebya Bungyereza","VI":"Ebizinga bya Virigini ebya Amerika","VN":"Viyetinaamu","VU":"Vanuatu","WF":"Warris na Futuna","WS":"Samowa","XA":"XA","XB":"XB","XK":"XK","YE":"Yemeni","YT":"Mayote","ZA":"Sausi Afirika","ZM":"Zambia","ZW":"Zimbabwe","ZZ":"ZZ"},"short":{"GB":"Bungyereza","HK":"HK","MO":"MO","PS":"PS","US":"Amerika"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Dirham za Buharabu","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"Kwanza ya Angora","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"Doora ya Austureeriya","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"Dinari ya Bahareni","BIF":"Faranga ya Burundi","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"Pura ya Botswana","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"Doora ya Kanada","CDF":"Faranga ya Kongo","CHE":"CHE","CHF":"Faranga ya Swisi","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Yuan Renminbi ya China","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"Eskudo ya Kepuvede","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"Faranga ya Gyibuti","DKK":"DKK","DOP":"DOP","DZD":"Dinari ya Arigyeriya","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Paundi ya Misiri","ERN":"Nakfa ya Eritireya","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Birr ya Ethiopiya","EUR":"Yuro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"Paundi ya Bungyereza","GEK":"GEK","GEL":"GEL","GHC":"Cedi ya Ghana","GHS":"GHS","GIP":"GIP","GMD":"Dalasi ya Gambia","GNF":"GNF","GNS":"Faranga ya Guinea","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Rupiya ya India","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Yeni ya Japaani","KES":"Shiringi ya Kenya","KGS":"KGS","KHR":"KHR","KMF":"Faranga ya Komoro","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"Doora ya Liberia","LSL":"Loti ya Lesoto","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Dinari ya Libya","MAD":"Dirram ya Moroko","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"Ariari ya Maragariita","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"Ougwiya ya Mouriteeniya (1973–2017)","MRU":"Ougwiya ya Mouriteeniya","MTL":"MTL","MTP":"MTP","MUR":"Rupiiha ya Mauritiasi","MVP":"MVP","MVR":"MVR","MWK":"Kwaca ya Malawi","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"Metikari ya Mozambikwi","MZN":"MZN","NAD":"Doora ya Namibiya","NGN":"Naira ya Naigyeriya","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"Faranga ya Rwanda","SAR":"Riya ya Saudi","SBD":"SBD","SCR":"Rupiiha ya Sherisheri","SDD":"SDD","SDG":"Dinari ya Sudani","SDP":"Paundi ya Sudan","SEK":"SEK","SGD":"SGD","SHP":"Paundi ya Senti Herena","SIT":"SIT","SKK":"SKK","SLL":"Leone","SOS":"Eshiringi ya Somalia","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"Dobra ya Sao Tome na Purinsipo (1977–2017)","STN":"Dobra ya Sao Tome na Purinsipo","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"SZL","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"Dinari ya Tunisia","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"Eshiringi ya Tanzania","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"Eshiringi ya Uganda","USD":"Doora ya America","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"Faranga ya CFA BEAC","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Faranga ya CFA BCEAO","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Randi ya Sausi Afirika","ZMK":"Kwacha ya Zambia (1968–2012)","ZMW":"Kwacha ya Zambia","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Doora ya Zimbabwe","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["cgg"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
