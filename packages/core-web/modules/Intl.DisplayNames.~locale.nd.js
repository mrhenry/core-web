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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("nd").length
)) {
// Intl.DisplayNames.~locale.nd
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"isi-Akhani","am":"isi-Amaharikhi","ar":"isi-Alabhu","ar-001":"isi-Alabhu (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"isi-Bhelarashiyani","bem":"bem","bez":"bez","bg":"isi-Bulgaria","bm":"bm","bn":"isi-Bhengali","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"isi-Czech","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"isi-Jalimani","de-AT":"isi-Jalimani (Austria)","de-CH":"isi-Jalimani (Switzerland)","dje":"dje","doi":"doi","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"isi-Giliki","en":"isi-Ngisi","en-AU":"isi-Ngisi (Australia)","en-CA":"isi-Ngisi (Khanada)","en-GB":"isi-Ngisi (United Kingdom)","en-US":"isi-Ngisi (Amelika)","eo":"eo","es":"isi-Sipeyini","es-419":"isi-Sipeyini (419)","es-ES":"isi-Sipeyini (Spain)","es-MX":"isi-Sipeyini (Meksikho)","et":"et","eu":"eu","ewo":"ewo","fa":"isi-Pheshiyani","fa-AF":"isi-Pheshiyani (Afghanistan)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"isi-Fulentshi","fr-CA":"isi-Fulentshi (Khanada)","fr-CH":"isi-Fulentshi (Switzerland)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"isi-Hausa","haw":"haw","he":"he","hi":"isi-Hindi","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"isi-Hangari","hy":"hy","ia":"ia","id":"isi-Indonesia","ig":"isi-Igbo","ii":"ii","is":"is","it":"isi-Italiano","ja":"isi-Japhani","jgo":"jgo","jmc":"jmc","jv":"isi-Java","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","kgp":"kgp","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"isi-Khambodiya","kn":"kn","ko":"isi-Koriya","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lij":"lij","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"isi-Malayi","mt":"mt","mua":"mua","mul":"mul","my":"isi-Burma","mzn":"mzn","naq":"naq","nb":"nb","nd":"isiNdebele","nds":"nds","nds-NL":"nds (Netherlands)","ne":"isi-Nepali","nl":"isi-Dutch","nl-BE":"isi-Dutch (Bhelgium)","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","nv":"nv","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"isi-Phunjabi","pcm":"pcm","pl":"isi-Pholoshi","prg":"prg","ps":"ps","pt":"isi-Potukezi","pt-BR":"isi-Potukezi (Brazili)","pt-PT":"isi-Potukezi (Portugal)","qu":"qu","rm":"rm","rn":"rn","ro":"isi-Romani","ro-MD":"isi-Romani (Moldova)","rof":"rof","ru":"isi-Rashiya","rw":"isi-Ruwanda","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"isi-Somali","sq":"sq","sr":"sr","st":"st","su":"su","sv":"isi-Swidishi","sw":"sw","sw-CD":"sw (Democratic Republic of the Congo)","ta":"isi-Thamil","te":"te","teo":"teo","tg":"tg","th":"isi-Thayi","ti":"ti","tk":"tk","to":"to","tr":"isi-Thekishi","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"isi-Ukrain","und":"und","ur":"isi-Udu","uz":"uz","vai":"vai","vi":"isi-Vietnamese","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"isi-Yorubha","yue":"yue","zgh":"zgh","zh":"isi-China","zh-Hans":"isi-China (Hans)","zh-Hant":"isi-China (Hant)","zu":"isi-Zulu","zxx":"zxx"},"short":{"az":"az","en-GB":"isi-Ngisi (United Kingdom)","en-US":"isi-Ngisi (Amelika)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Andora","AE":"United Arab Emirates","AF":"Afghanistan","AG":"Antigua le Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"AQ","AR":"Ajentina","AS":"Samoa ye Amelika","AT":"Austria","AU":"Australia","AW":"Arubha","AX":"AX","AZ":"Azerbaijan","BA":"Bhosnia le Herzegovina","BB":"Bhabhadosi","BD":"Bhangiladeshi","BE":"Bhelgium","BF":"Bhukina Faso","BG":"Bhulgariya","BH":"Bhahareni","BI":"Bhurundi","BJ":"Bhenini","BL":"BL","BM":"Bhemuda","BN":"Brunei","BO":"Bholiviya","BQ":"BQ","BR":"Brazili","BS":"Bhahamas","BT":"Bhutani","BV":"BV","BW":"Botswana","BY":"Bhelarusi","BZ":"Bhelize","CA":"Khanada","CC":"CC","CD":"Democratic Republic of the Congo","CF":"Central African Republic","CG":"Khongo","CH":"Switzerland","CI":"Ivory Coast","CK":"Cook Islands","CL":"Chile","CM":"Khameruni","CN":"China","CO":"Kholombiya","CP":"CP","CR":"Khosta Rikha","CU":"Cuba","CV":"Cape Verde Islands","CW":"CW","CX":"CX","CY":"Cyprus","CZ":"Czech Republic","DE":"Germany","DG":"DG","DJ":"Djibouti","DK":"Denmakhi","DM":"Dominikha","DO":"Dominican Republic","DZ":"Aljeriya","EA":"EA","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"EH","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","EU":"EU","EZ":"EZ","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"FO","FR":"Furansi","GA":"Gabhoni","GB":"United Kingdom","GD":"Grenada","GE":"Georgia","GF":"Gwiyana ye Furansi","GG":"GG","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambiya","GN":"Guinea","GP":"Guadeloupe","GQ":"Equatorial Guinea","GR":"Greece","GS":"GS","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"HK","HM":"HM","HN":"Honduras","HR":"Croatia","HT":"Hayiti","HU":"Hungary","IC":"IC","ID":"Indonesiya","IE":"Ireland","IL":"Isuraeli","IM":"IM","IN":"Indiya","IO":"British Indian Ocean Territory","IQ":"Iraki","IR":"Iran","IS":"Iceland","IT":"Itali","JE":"JE","JM":"Jamaica","JO":"Jodani","JP":"Japan","KE":"Khenya","KG":"Kyrgyzstan","KH":"Cambodia","KI":"Khiribati","KM":"Khomoro","KN":"Saint Kitts and Nevis","KP":"North Korea","KR":"South Korea","KW":"Khuweiti","KY":"Cayman Islands","KZ":"Kazakhstan","LA":"Laos","LB":"Lebhanoni","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Libheriya","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libhiya","MA":"Morokho","MC":"Monakho","MD":"Moldova","ME":"ME","MF":"MF","MG":"Madagaska","MH":"Marshall Islands","MK":"MK","ML":"Mali","MM":"Myanmar","MN":"Mongolia","MO":"MO","MP":"Northern Mariana Islands","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Meksikho","MY":"Malezhiya","MZ":"Mozambique","NA":"Namibhiya","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeriya","NI":"Nicaragua","NL":"Netherlands","NO":"Noweyi","NP":"Nephali","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"Omani","PA":"Panama","PE":"Pheru","PF":"Pholinesiya ye Fulansi","PG":"Papua New Guinea","PH":"Philippines","PK":"Phakistani","PL":"Pholandi","PM":"Saint Pierre and Miquelon","PN":"Pitcairn","PR":"Puerto Rico","PS":"Palestinian West Bank and Gaza","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Kathari","QO":"QO","RE":"Réunion","RO":"Romania","RS":"RS","RU":"Rashiya","RW":"Ruwanda","SA":"Saudi Arabia","SB":"Solomon Islands","SC":"Seychelles","SD":"Sudani","SE":"Sweden","SG":"Singapore","SH":"Saint Helena","SI":"Slovenia","SJ":"SJ","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegali","SO":"Somaliya","SR":"Suriname","SS":"SS","ST":"São Tomé and Príncipe","SV":"El Salvador","SX":"SX","SY":"Syria","SZ":"Swaziland","TA":"TA","TC":"Turks and Caicos Islands","TD":"Chadi","TF":"TF","TG":"Thogo","TH":"Thayilandi","TJ":"Tajikistan","TK":"Thokelawu","TL":"East Timor","TM":"Turkmenistan","TN":"Tunisiya","TO":"Thonga","TR":"Thekhi","TT":"Trinidad le Tobago","TV":"Thuvalu","TW":"Thayiwani","TZ":"Tanzaniya","UA":"Yukreini","UG":"Uganda","UM":"UM","UN":"UN","US":"Amelika","UY":"Yurugwai","UZ":"Uzbekistan","VA":"Vatican State","VC":"Saint Vincent and the Grenadines","VE":"Venezuela","VG":"British Virgin Islands","VI":"U.S. Virgin Islands","VN":"Vietnam","VU":"Vhanuatu","WF":"Wallis and Futuna","WS":"Samowa","XA":"XA","XB":"XB","XK":"XK","YE":"Yemeni","YT":"Mayotte","ZA":"Mzansi ye Afrika","ZM":"Zambiya","ZW":"Zimbabwe","ZZ":"ZZ"},"short":{"GB":"United Kingdom","HK":"HK","MO":"MO","PS":"Palestinian West Bank and Gaza","US":"Amelika"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Dola laseArab","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"Kwanza yase Angola","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"Dola yase Australia","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"Dinari yase Bhahareni","BIF":"Fulenki yase Bhurundi","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"Phula yase Botswana","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"Dola yase Khanada","CDF":"Fulenki yase Khongo","CHE":"CHE","CHF":"Fulenki yase Swisi","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Yuan Renminbi yase China","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"Escudo Caboverdiano","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"Fulenki yase Jibhuthi","DKK":"DKK","DOP":"DOP","DZD":"Dinali yase Aljeriya","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Phawundi laseGibhide","ERN":"Nakfa yase Eritrea","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Dola laseEthiopia","EUR":"Yuro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"Phawundi yase Ngilandi","GEK":"GEK","GEL":"GEL","GHC":"Sedi yase Ghana","GHS":"GHS","GIP":"GIP","GMD":"Dalasi yase Gambia","GNF":"GNF","GNS":"Fulenki yase Gine","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Rupi yase Indiya","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Yeni yase Japhani","KES":"Shilingi yase Kenya","KGS":"KGS","KHR":"KHR","KMF":"Fulenki yase Khomoro","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"Dola yase Libheriya","LSL":"Lothi yase Lesotho","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Dinari yase Libya","MAD":"Dirham yase Morokho","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"Fulenki yase Malagasi","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"Ugwiya yase Moritaniya (1973–2017)","MRU":"Ugwiya yase Moritaniya","MTL":"MTL","MTP":"MTP","MUR":"Rupi yase Morishasi","MVP":"MVP","MVR":"MVR","MWK":"Kwacha yase Malawi","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"Metikali yase Mozambiki","MZN":"MZN","NAD":"Dola yase Namibiya","NGN":"Nayira yase Nijeriya","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"Fulenki yase Ruwanda","SAR":"Riyal yase Saudi","SBD":"SBD","SCR":"Rupi yase Seyisheli","SDD":"SDD","SDG":"Dinari yase Sudani","SDP":"Phawundi yase Sudani","SEK":"SEK","SGD":"SGD","SHP":"Phawundindi laseSt Helena","SIT":"SIT","SKK":"SKK","SLL":"Leyoni","SOS":"Shilingi yase Somaliya","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"Dobra yase Sao Tome lo Principe (1977–2017)","STN":"Dobra yase Sao Tome lo Principe","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"Lilangeni","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"Dinari yase Tunisiya","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"Shilingi yase Tanzaniya","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"Shilingi yase Uganda","USD":"Dola yase Amelika","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"Fulenki CFA BEAC","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Fulenki CFA BCEAO","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Randi yase Afrika ye Zanzi","ZMK":"Kwacha yase Zambiya (1968–2012)","ZMW":"Kwacha yase Zambiya","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Dola yase Zimbabwe","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"nd"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
