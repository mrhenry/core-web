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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("teo").length
)) {
// Intl.DisplayNames.~locale.teo
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"Kiakan","am":"Kiamhari","ar":"Kiarabu","ar-001":"Kiarabu (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"Kibelarusi","bem":"bem","bez":"bez","bg":"Kibulgaria","bm":"bm","bn":"Kibangla","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"Kichecki","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"Kijerumani","de-AT":"Kijerumani (Austria)","de-CH":"Kijerumani (Uswisi)","dje":"dje","doi":"doi","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"Kigiriki","en":"Kingereza","en-AU":"Kingereza (Australia)","en-CA":"Kingereza (Kanada)","en-GB":"Kingereza (Uingereza)","en-US":"Kingereza (Marekani)","eo":"eo","es":"Kihispania","es-419":"Kihispania (419)","es-ES":"Kihispania (Hispania)","es-MX":"Kihispania (Meksiko)","et":"et","eu":"eu","ewo":"ewo","fa":"Kiajemi","fa-AF":"Kiajemi (Afuganistani)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"Kifaransa","fr-CA":"Kifaransa (Kanada)","fr-CH":"Kifaransa (Uswisi)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"Kihausa","haw":"haw","he":"he","hi":"Kihindi","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"Kihungari","hy":"hy","ia":"ia","id":"Kiindonesia","ig":"Kiigbo","ii":"ii","is":"is","it":"Kiitaliano","ja":"Kijapani","jgo":"jgo","jmc":"jmc","jv":"Kijava","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","kgp":"kgp","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"Kikambodia","kn":"kn","ko":"Kikorea","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lij":"lij","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"Kimalesia","mt":"mt","mua":"mua","mul":"mul","my":"Kiburma","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Uholanzi)","ne":"Kinepali","nl":"Kiholanzi","nl-BE":"Kiholanzi (Ubelgiji)","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","nv":"nv","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"Kipunjabi","pcm":"pcm","pl":"Kipolandi","prg":"prg","ps":"ps","pt":"Kireno","pt-BR":"Kireno (Brazili)","pt-PT":"Kireno (Ureno)","qu":"qu","rm":"rm","rn":"rn","ro":"Kiromania","ro-MD":"Kiromania (Moldova)","rof":"rof","ru":"Kirusi","rw":"Kinyarwanda","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"Kisomali","sq":"sq","sr":"sr","st":"st","su":"su","sv":"Kiswidi","sw":"sw","sw-CD":"sw (Jamhuri ya Kidemokrasia ya Kongo)","ta":"Kitamil","te":"te","teo":"Kiteso","tg":"tg","th":"Kitailandi","ti":"ti","tk":"tk","to":"to","tr":"Kituruki","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"Kiukrania","und":"und","ur":"Kiurdu","uz":"uz","vai":"vai","vi":"Kivietinamu","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"Kiyoruba","yue":"yue","zgh":"zgh","zh":"Kichina","zh-Hans":"Kichina (Hans)","zh-Hant":"Kichina (Hant)","zu":"Kizulu","zxx":"zxx"},"short":{"az":"az","en-GB":"Kingereza (Uingereza)","en-US":"Kingereza (Marekani)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Andora","AE":"Falme za Kiarabu","AF":"Afuganistani","AG":"Antigua na Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"AQ","AR":"Ajentina","AS":"Samoa ya Marekani","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"AX","AZ":"Azabajani","BA":"Bosnia na Hezegovina","BB":"Babadosi","BD":"Bangladeshi","BE":"Ubelgiji","BF":"Bukinafaso","BG":"Bulgaria","BH":"Bahareni","BI":"Burundi","BJ":"Benini","BL":"BL","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"BQ","BR":"Brazili","BS":"Bahama","BT":"Butani","BV":"BV","BW":"Botswana","BY":"Belarusi","BZ":"Belize","CA":"Kanada","CC":"CC","CD":"Jamhuri ya Kidemokrasia ya Kongo","CF":"Jamhuri ya Afrika ya Kati","CG":"Kongo","CH":"Uswisi","CI":"Kodivaa","CK":"Visiwa vya Cook","CL":"Chile","CM":"Kameruni","CN":"China","CO":"Kolombia","CP":"CP","CR":"Kostarika","CU":"Kuba","CV":"Kepuvede","CW":"CW","CX":"CX","CY":"Kuprosi","CZ":"Jamhuri ya Cheki","DE":"Ujerumani","DG":"DG","DJ":"Jibuti","DK":"Denmaki","DM":"Dominika","DO":"Jamhuri ya Dominika","DZ":"Aljeria","EA":"EA","EC":"Ekwado","EE":"Estonia","EG":"Misri","EH":"EH","ER":"Eritrea","ES":"Hispania","ET":"Uhabeshi","EU":"EU","EZ":"EZ","FI":"Ufini","FJ":"Fiji","FK":"Visiwa vya Falkland","FM":"Mikronesia","FO":"FO","FR":"Ufaransa","GA":"Gaboni","GB":"Uingereza","GD":"Grenada","GE":"Jojia","GF":"Gwiyana ya Ufaransa","GG":"GG","GH":"Ghana","GI":"Jibralta","GL":"Grinlandi","GM":"Gambia","GN":"Gine","GP":"Gwadelupe","GQ":"Ginekweta","GR":"Ugiriki","GS":"GS","GT":"Gwatemala","GU":"Gwam","GW":"Ginebisau","GY":"Guyana","HK":"HK","HM":"HM","HN":"Hondurasi","HR":"Korasia","HT":"Haiti","HU":"Hungaria","IC":"IC","ID":"Indonesia","IE":"Ayalandi","IL":"Israeli","IM":"IM","IN":"India","IO":"Eneo la Uingereza katika Bahari Hindi","IQ":"Iraki","IR":"Uajemi","IS":"Aislandi","IT":"Italia","JE":"JE","JM":"Jamaika","JO":"Yordani","JP":"Japani","KE":"Kenia","KG":"Kirigizistani","KH":"Kambodia","KI":"Kiribati","KM":"Komoro","KN":"Santakitzi na Nevis","KP":"Korea Kaskazini","KR":"Korea Kusini","KW":"Kuwaiti","KY":"Visiwa vya Kayman","KZ":"Kazakistani","LA":"Laosi","LB":"Lebanoni","LC":"Santalusia","LI":"Lishenteni","LK":"Sirilanka","LR":"Liberia","LS":"Lesoto","LT":"Litwania","LU":"Lasembagi","LV":"Lativia","LY":"Libya","MA":"Moroko","MC":"Monako","MD":"Moldova","ME":"ME","MF":"MF","MG":"Bukini","MH":"Visiwa vya Marshal","MK":"MK","ML":"Mali","MM":"Myama","MN":"Mongolia","MO":"MO","MP":"Visiwa vya Mariana vya Kaskazini","MQ":"Martiniki","MR":"Moritania","MS":"Montserrati","MT":"Malta","MU":"Morisi","MV":"Modivu","MW":"Malawi","MX":"Meksiko","MY":"Malesia","MZ":"Msumbiji","NA":"Namibia","NC":"Nyukaledonia","NE":"Nijeri","NF":"Kisiwa cha Norfok","NG":"Nijeria","NI":"Nikaragwa","NL":"Uholanzi","NO":"Norwe","NP":"Nepali","NR":"Nauru","NU":"Niue","NZ":"Nyuzilandi","OM":"Omani","PA":"Panama","PE":"Peru","PF":"Polinesia ya Ufaransa","PG":"Papua","PH":"Filipino","PK":"Pakistani","PL":"Polandi","PM":"Santapieri na Mikeloni","PN":"Pitkairni","PR":"Pwetoriko","PS":"Ukingo wa Magharibi na Ukanda wa Gaza wa Palestina","PT":"Ureno","PW":"Palau","PY":"Paragwai","QA":"Katari","QO":"QO","RE":"Riyunioni","RO":"Romania","RS":"RS","RU":"Urusi","RW":"Rwanda","SA":"Saudi","SB":"Visiwa vya Solomon","SC":"Shelisheli","SD":"Sudani","SE":"Uswidi","SG":"Singapoo","SH":"Santahelena","SI":"Slovenia","SJ":"SJ","SK":"Slovakia","SL":"Siera Leoni","SM":"Samarino","SN":"Senegali","SO":"Somalia","SR":"Surinamu","SS":"SS","ST":"Sao Tome na Principe","SV":"Elsavado","SX":"SX","SY":"Siria","SZ":"Uswazi","TA":"TA","TC":"Visiwa vya Turki na Kaiko","TD":"Chadi","TF":"TF","TG":"Togo","TH":"Tailandi","TJ":"Tajikistani","TK":"Tokelau","TL":"Timori ya Mashariki","TM":"Turukimenistani","TN":"Tunisia","TO":"Tonga","TR":"Uturuki","TT":"Trinidad na Tobago","TV":"Tuvalu","TW":"Taiwani","TZ":"Tanzania","UA":"Ukraini","UG":"Uganda","UM":"UM","UN":"UN","US":"Marekani","UY":"Urugwai","UZ":"Uzibekistani","VA":"Vatikani","VC":"Santavisenti na Grenadini","VE":"Venezuela","VG":"Visiwa vya Virgin vya Uingereza","VI":"Visiwa vya Virgin vya Marekani","VN":"Vietinamu","VU":"Vanuatu","WF":"Walis na Futuna","WS":"Samoa","XA":"XA","XB":"XB","XK":"XK","YE":"Yemeni","YT":"Mayotte","ZA":"Afrika Kusini","ZM":"Zambia","ZW":"Zimbabwe","ZZ":"ZZ"},"short":{"GB":"Uingereza","HK":"HK","MO":"MO","PS":"Ukingo wa Magharibi na Ukanda wa Gaza wa Palestina","US":"Marekani"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Ango’otol lok’ Falme za Kiarabu","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"Ango’otol lok’ Angola","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"Ango’otol lok’ Australia","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"Ango’otol lok’ Bahareni","BIF":"Ango’otol lok’ Burundi","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"Ango’otol lok’ Botswana","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"Edola lok’Kanada","CDF":"Ango’otol lok’ Kongo","CHE":"CHE","CHF":"Ango’otol lok’ Uswisi","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Ango’otol lok’ China","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"Ango’otol lok’ Kepuvede","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"Ango’otol lok’ Jibuti","DKK":"DKK","DOP":"DOP","DZD":"Ango’otol lok’ Aljeria","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Epaunt lok’ Misri","ERN":"Ango’otol lok’ Eritrea","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Ango’otol lok’ Uhabeshi","EUR":"Yuro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"Epaunt lok’ Uingereza","GEK":"GEK","GEL":"GEL","GHC":"Sedi ya Ghana","GHS":"GHS","GIP":"GIP","GMD":"Dalasi ya Gambia","GNF":"GNF","GNS":"Ango’otol lok’ Gine","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Ango’otol lok’ India","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Ango’otol lok’ Kijapani","KES":"Ango’otol lok’ Kenya","KGS":"KGS","KHR":"KHR","KMF":"Ango’otol lok’ Komoro","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"edola lok’ Liberia","LSL":"Ango’otol lok’ Lesoto","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Ango’otol lok’ Libya","MAD":"Ango’otol lok’ Moroko","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"Ango’otol lok’ Bukini","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"Ango’otol lok’ Moritania (1973–2017)","MRU":"Ango’otol lok’ Moritania","MTL":"MTL","MTP":"MTP","MUR":"Ango’otol lok’ Morisi","MVP":"MVP","MVR":"MVR","MWK":"Ango’otol lok’ Malawi","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"Ango’otol lok’ Msumbiji","MZN":"MZN","NAD":"Ango’otol lok’ Namibia","NGN":"Ango’otol lok’ Nijeria","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"Ango’otol lok’ Rwanda","SAR":"Ango’otol lok’ Saudia","SBD":"SBD","SCR":"Ango’otol lok’ Shelisheli","SDD":"SDD","SDG":"Epaunt Lok’ Sudan","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"Ango’otol lok’ Santahelena","SIT":"SIT","SKK":"SKK","SLL":"Leoni","SOS":"Ango’otol lok’ Somalia","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"Ango’otol lok’ Sao Tome na Principe (1977–2017)","STN":"Ango’otol lok’ Sao Tome na Principe","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"Lilangeni","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"Ango’otol lok’ Tunisia","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"Ango’otol lok’ Tanzania","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"Ango’otol lok’ Uganda","USD":"edola lok’ Amareka","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"Ango’otol lok’ CFA BEAC","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Ango’otol lok’ CFA BCEAO","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Ango’otol lok’ Afrika Kusini","ZMK":"Ango’otol lok’ Zambia (1968–2012)","ZMW":"Ango’otol lok’ Zambia","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Edola lok’Zimbabwe","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"teo"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
