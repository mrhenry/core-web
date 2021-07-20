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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ak").length
)) {
// Intl.DisplayNames.~locale.ak
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"Akan","am":"Amarik","ar":"Arabik","ar-001":"Arabik (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"Belarus kasa","bem":"bem","bez":"bez","bg":"Bɔlgeria kasa","bm":"bm","bn":"Bengali kasa","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"Kyɛk kasa","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"Gyaaman","de-AT":"Gyaaman (Ɔstria)","de-CH":"Gyaaman (Swetzaland)","dje":"dje","doi":"doi","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"Greek kasa","en":"Borɔfo","en-AU":"Borɔfo (Ɔstrelia)","en-CA":"Borɔfo (Kanada)","en-GB":"Borɔfo (Ahendiman Nkabom)","en-US":"Borɔfo (Amɛrika)","eo":"eo","es":"Spain kasa","es-419":"Spain kasa (419)","es-ES":"Spain kasa (Spain)","es-MX":"Spain kasa (Mɛksiko)","et":"et","eu":"eu","ewo":"ewo","fa":"Pɛɛhyia kasa","fa-AF":"Pɛɛhyia kasa (Afganistan)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"Frɛnkye","fr-CA":"Frɛnkye (Kanada)","fr-CH":"Frɛnkye (Swetzaland)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"Hausa","haw":"haw","he":"he","hi":"Hindi","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"Hangri kasa","hy":"hy","ia":"ia","id":"Indonihyia kasa","ig":"Igbo","ii":"ii","is":"is","it":"Italy kasa","ja":"Gyapan kasa","jgo":"jgo","jmc":"jmc","jv":"Gyabanis kasa","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","kgp":"kgp","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"Kambodia kasa","kn":"kn","ko":"Korea kasa","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lij":"lij","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"Malay kasa","mt":"mt","mua":"mua","mul":"mul","my":"Bɛɛmis kasa","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Nɛdɛland)","ne":"Nɛpal kasa","nl":"Dɛɛkye","nl-BE":"Dɛɛkye (Bɛlgyium)","nmg":"nmg","nn":"nn","nnh":"nnh","no":"no","nus":"nus","nv":"nv","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"Pungyabi kasa","pcm":"pcm","pl":"Pɔland kasa","prg":"prg","ps":"ps","pt":"Pɔɔtugal kasa","pt-BR":"Pɔɔtugal kasa (Brazil)","pt-PT":"Pɔɔtugal kasa (Pɔtugal)","qu":"qu","rm":"rm","rn":"rn","ro":"Romenia kasa","ro-MD":"Romenia kasa (Mɔldova)","rof":"rof","ru":"Rahyia kasa","rw":"Rewanda kasa","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"Somalia kasa","sq":"sq","sr":"sr","st":"st","su":"su","sv":"Sweden kasa","sw":"sw","sw-CD":"sw (Kongo [Zair])","ta":"Tamil kasa","te":"te","teo":"teo","tg":"tg","th":"Taeland kasa","ti":"ti","tk":"tk","to":"to","tr":"Tɛɛki kasa","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"Ukren kasa","und":"und","ur":"Urdu kasa","uz":"uz","vai":"vai","vi":"Viɛtnam kasa","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"Yoruba","yue":"yue","zgh":"zgh","zh":"Kyaena kasa","zh-Hans":"Kyaena kasa (Hans)","zh-Hant":"Kyaena kasa (Hant)","zu":"Zulu","zxx":"zxx"},"short":{"az":"az","en-GB":"Borɔfo (Ahendiman Nkabom)","en-US":"Borɔfo (Amɛrika)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Andora","AE":"United Arab Emirates","AF":"Afganistan","AG":"Antigua ne Baabuda","AI":"Anguila","AL":"Albenia","AM":"Aamenia","AO":"Angola","AQ":"AQ","AR":"Agyɛntina","AS":"Amɛrika Samoa","AT":"Ɔstria","AU":"Ɔstrelia","AW":"Aruba","AX":"AX","AZ":"Azebaegyan","BA":"Bosnia ne Hɛzegovina","BB":"Baabados","BD":"Bangladɛhye","BE":"Bɛlgyium","BF":"Bɔkina Faso","BG":"Bɔlgeria","BH":"Baren","BI":"Burundi","BJ":"Bɛnin","BL":"BL","BM":"Bɛmuda","BN":"Brunae","BO":"Bolivia","BQ":"BQ","BR":"Brazil","BS":"Bahama","BT":"Butan","BV":"BV","BW":"Bɔtswana","BY":"Bɛlarus","BZ":"Beliz","CA":"Kanada","CC":"CC","CD":"Kongo (Zair)","CF":"Afrika Finimfin Man","CG":"Kongo","CH":"Swetzaland","CI":"La Côte d’Ivoire","CK":"Kook Nsupɔw","CL":"Kyili","CM":"Kamɛrun","CN":"Kyaena","CO":"Kolombia","CP":"CP","CR":"Kɔsta Rika","CU":"Kuba","CV":"Kepvɛdfo Islands","CW":"CW","CX":"CX","CY":"Saeprɔs","CZ":"Kyɛk Kurokɛse","DE":"Gyaaman","DG":"DG","DJ":"Gyibuti","DK":"Dɛnmak","DM":"Dɔmeneka","DO":"Dɔmeneka Kurokɛse","DZ":"Ɔlgyeria","EA":"EA","EC":"Ikuwadɔ","EE":"Ɛstonia","EG":"Nisrim","EH":"EH","ER":"Ɛritrea","ES":"Spain","ET":"Ithiopia","EU":"EU","EZ":"EZ","FI":"Finland","FJ":"Figyi","FK":"Fɔlkman Aeland","FM":"Maekronehyia","FO":"FO","FR":"Frɛnkyeman","GA":"Gabɔn","GB":"Ahendiman Nkabom","GD":"Grenada","GE":"Gyɔgyea","GF":"Frɛnkye Gayana","GG":"GG","GH":"Gaana","GI":"Gyebralta","GL":"Greenman","GM":"Gambia","GN":"Gini","GP":"Guwadelup","GQ":"Gini Ikuweta","GR":"Greekman","GS":"GS","GT":"Guwatemala","GU":"Guam","GW":"Gini Bisaw","GY":"Gayana","HK":"HK","HM":"HM","HN":"Hɔnduras","HR":"Krowehyia","HT":"Heiti","HU":"Hangari","IC":"IC","ID":"Indɔnehyia","IE":"Aereland","IL":"Israel","IM":"IM","IN":"India","IO":"Britenfo Hɔn Man Wɔ India Po No Mu","IQ":"Irak","IR":"Iran","IS":"Aesland","IT":"Itali","JE":"JE","JM":"Gyameka","JO":"Gyɔdan","JP":"Gyapan","KE":"Kɛnya","KG":"Kɛɛgestan","KH":"Kambodia","KI":"Kiribati","KM":"Kɔmɔrɔs","KN":"Saint Kitts ne Nɛves","KP":"Etifi Koria","KR":"Anaafo Koria","KW":"Kuwete","KY":"Kemanfo Islands","KZ":"Kazakstan","LA":"Laos","LB":"Lɛbanɔn","LC":"Saint Lucia","LI":"Lektenstaen","LK":"Sri Lanka","LR":"Laeberia","LS":"Lɛsutu","LT":"Lituwenia","LU":"Laksembɛg","LV":"Latvia","LY":"Libya","MA":"Moroko","MC":"Mɔnako","MD":"Mɔldova","ME":"ME","MF":"MF","MG":"Madagaska","MH":"Marshall Islands","MK":"MK","ML":"Mali","MM":"Miyanma","MN":"Mɔngolia","MO":"MO","MP":"Northern Mariana Islands","MQ":"Matinik","MR":"Mɔretenia","MS":"Mantserat","MT":"Mɔlta","MU":"Mɔrehyeɔs","MV":"Maldives","MW":"Malawi","MX":"Mɛksiko","MY":"Malehyia","MZ":"Mozambik","NA":"Namibia","NC":"Kaledonia Foforo","NE":"Nigyɛ","NF":"Nɔfolk Aeland","NG":"Naegyeria","NI":"Nekaraguwa","NL":"Nɛdɛland","NO":"Nɔɔwe","NP":"Nɛpɔl","NR":"Naworu","NU":"Niyu","NZ":"Ziland Foforo","OM":"Oman","PA":"Panama","PE":"Peru","PF":"Frɛnkye Pɔlenehyia","PG":"Papua Guinea Foforo","PH":"Philippines","PK":"Pakistan","PL":"Poland","PM":"Saint Pierre ne Miquelon","PN":"Pitcairn","PR":"Puɛto Riko","PS":"Palestaen West Bank ne Gaza","PT":"Pɔtugal","PW":"Palau","PY":"Paraguay","QA":"Kata","QO":"QO","RE":"Reyuniɔn","RO":"Romenia","RS":"RS","RU":"Rɔhyea","RW":"Rwanda","SA":"Saudi Arabia","SB":"Solomon Islands","SC":"Seyhyɛl","SD":"Sudan","SE":"Sweden","SG":"Singapɔ","SH":"Saint Helena","SI":"Slovinia","SJ":"SJ","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"SS","ST":"São Tomé and Príncipe","SV":"Ɛl Salvadɔ","SX":"SX","SY":"Siria","SZ":"Swaziland","TA":"TA","TC":"Turks ne Caicos Islands","TD":"Kyad","TF":"TF","TG":"Togo","TH":"Taeland","TJ":"Tajikistan","TK":"Tokelau","TL":"Timɔ Boka","TM":"Tɛkmɛnistan","TN":"Tunihyia","TO":"Tonga","TR":"Tɛɛki","TT":"Trinidad ne Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzania","UA":"Ukren","UG":"Uganda","UM":"UM","UN":"UN","US":"Amɛrika","UY":"Yurugwae","UZ":"Uzbɛkistan","VA":"Vatican Man","VC":"Saint Vincent ne Grenadines","VE":"Venezuela","VG":"Britainfo Virgin Islands","VI":"Amɛrika Virgin Islands","VN":"Viɛtnam","VU":"Vanuatu","WF":"Wallis ne Futuna","WS":"Samoa","XA":"XA","XB":"XB","XK":"XK","YE":"Yɛmen","YT":"Mayɔte","ZA":"Afrika Anaafo","ZM":"Zambia","ZW":"Zembabwe","ZZ":"ZZ"},"short":{"GB":"Ahendiman Nkabom","HK":"HK","MO":"MO","PS":"Palestaen West Bank ne Gaza","US":"Amɛrika"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Ɛmirete Arab Nkabɔmu Deram","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"Angola Kwanza","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"Ɔstrelia Dɔla","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"Baren Dina","BIF":"Burundi Frank","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"Botswana Pula","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"Kanada Dɔla","CDF":"Kongo Frank","CHE":"CHE","CHF":"CHF","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Yuan","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"Ɛskudo","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"Gyebuti Frank","DKK":"DKK","DOP":"DOP","DZD":"Ɔlgyeria Dina","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Egypt Pɔn","ERN":"Ɛretereya Nakfa","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Itiopia Bir","EUR":"Iro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"Breten Pɔn","GEK":"GEK","GEL":"GEL","GHC":"Ghana Sidi (1979–2007)","GHS":"Ghana Sidi","GIP":"GIP","GMD":"Gambia Dalasi","GNF":"GNF","GNS":"Gini Frank","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"India Rupi","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Gyapan Yɛn","KES":"Kenya Hyelen","KGS":"KGS","KHR":"KHR","KMF":"Komoro Frank","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"Laeberia Dɔla","LSL":"Lesoto Loti","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Libya Dina","MAD":"Moroko Diram","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"Madagasi Frank","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"Mɔretenia Ouguiya (1973–2017)","MRU":"Mɔretenia Ouguiya","MTL":"MTL","MTP":"MTP","MUR":"Mɔrehyeɔs Rupi","MVP":"MVP","MVR":"MVR","MWK":"Malawi Kwacha","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"Mozambik Metical","MZN":"MZN","NAD":"Namibia Dɔla","NGN":"Naegyeria Naira","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"Rewanda Frank","SAR":"Saudi Riyal","SBD":"SBD","SCR":"Seyhyɛls Rupi","SDD":"SDD","SDG":"Sudan Dina","SDP":"Sudan Pɔn","SEK":"SEK","SGD":"SGD","SHP":"St Helena Pɔn","SIT":"SIT","SKK":"SKK","SLL":"Leone","SOS":"Somailia Hyelen","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"Sao Tome ne Principe Dobra (1977–2017)","STN":"Sao Tome ne Principe Dobra","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"Lilangeni","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"Tunisia Dina","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"Tanzania Hyelen","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"Uganda Hyelen","USD":"Amɛrika Dɔla","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"Sefa","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"XOF","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Afrika Anaafo Rand","ZMK":"Zambia Kwacha (1968–2012)","ZMW":"Zambia Kwacha","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Zimbabwe Dɔla","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"ak"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
