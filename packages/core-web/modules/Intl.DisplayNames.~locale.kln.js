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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("kln").length
)) {
// Intl.DisplayNames.~locale.kln
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"kutitab Aka","am":"kutitab Amariek","ar":"kutitab Arabuk","ar-001":"kutitab Arabuk (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"kutitab Belarusa","bem":"bem","bez":"bez","bg":"kutitab Bulgaria","bm":"bm","bn":"kutitab Bengali","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"kutitab Chek","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"kutitab Chermani","de-AT":"kutitab Chermani (Emetab Austria)","de-CH":"kutitab Chermani (Emetab Switzerland)","dje":"dje","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"kutitab Greece","en":"kutitab Uingeresa","en-AU":"kutitab Uingeresa (Emetab Australia)","en-CA":"kutitab Uingeresa (Emetab Canada)","en-GB":"kutitab Uingeresa (Emetab Kibagenge nebo Uingereza)","en-US":"kutitab Uingeresa (Emetab amerika)","eo":"eo","es":"kutitab Espianik","es-419":"kutitab Espianik (419)","es-ES":"kutitab Espianik (Emetab Spain)","es-MX":"kutitab Espianik (Emetab Mexico)","et":"et","eu":"eu","ewo":"ewo","fa":"kutitab Persia","fa-AF":"kutitab Persia (Emetab Afghanistan)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"kutitab Kifaransa","fr-CA":"kutitab Kifaransa (Emetab Canada)","fr-CH":"kutitab Kifaransa (Emetab Switzerland)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"kutitab Hausa","haw":"haw","he":"he","hi":"kutitab Maindiik","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"kutitab Hangari","hy":"hy","ia":"ia","id":"kutitab Indonesia","ig":"kutitab Igbo","ii":"ii","is":"is","it":"kutitab Talianek","ja":"kutitap Japan","jgo":"jgo","jmc":"jmc","jv":"kutitap Javanese","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"Kalenjin","km":"kutitab Kher nebo Kwen","kn":"kn","ko":"kutitab Korea","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"kutitab Malay","mt":"mt","mua":"mua","mul":"mul","my":"kutitab Burma","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Emetab Holand)","ne":"kutitab Nepali","nl":"kutitab Boa","nl-BE":"kutitab Boa (Emetab Belgium)","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"kutitab Punjab","pcm":"pcm","pl":"kutitap Poland","prg":"prg","ps":"ps","pt":"kutitab Portugal","pt-BR":"kutitab Portugal (Emetab Brazil)","pt-PT":"kutitab Portugal (Emetab Portugal)","qu":"qu","rm":"rm","rn":"rn","ro":"kutitab Romaniek","ro-MD":"kutitab Romaniek (Emetab Moldova)","rof":"rof","root":"root","ru":"kutitab Russia","rw":"kutitab Kinyarwanda","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"kutitab Somaliek","sq":"sq","sr":"sr","st":"st","su":"su","sv":"kutitab Sweden","sw":"sw","sw-CD":"sw (Emetab Congo - Kinshasa)","ta":"kutitab Tamil","te":"te","teo":"teo","tg":"tg","th":"kutitab Thailand","ti":"ti","tk":"tk","to":"to","tr":"kutitab Turkey","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"kutitab Ukraine","und":"und","ur":"kutitab Urdu","uz":"uz","vai":"vai","vi":"kutitab Vietnam","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"kutitab Yoruba","yue":"yue","zgh":"zgh","zh":"kutitab China","zh-Hans":"kutitab China (Hans)","zh-Hant":"kutitab China (Hant)","zu":"kutitab Zulu","zxx":"zxx"},"short":{"az":"az","en-GB":"kutitab Uingeresa (Emetab Kibagenge nebo Uingereza)","en-US":"kutitab Uingeresa (Emetab amerika)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Emetab Andorra","AE":"Emetab kibagenge nebo arabuk","AF":"Emetab Afghanistan","AG":"Emetab Antigua ak Barbuda","AI":"Emetab Anguilla","AL":"Emetab Albania","AM":"Emetab Armenia","AO":"Emetab Angola","AQ":"AQ","AR":"Emetab Argentina","AS":"Emetab American Samoa","AT":"Emetab Austria","AU":"Emetab Australia","AW":"Emetab Aruba","AX":"AX","AZ":"Emetab Azerbaijan","BA":"Emetab Bosnia ak Herzegovina","BB":"Emetab Barbados","BD":"Emetab Bangladesh","BE":"Emetab Belgium","BF":"Emetab Burkina Faso","BG":"Emetab Bulgaria","BH":"Emetab Bahrain","BI":"Emetab Burundi","BJ":"Emetab Benin","BL":"BL","BM":"Emetab Bermuda","BN":"Emetab Brunei","BO":"Emetab Bolivia","BQ":"BQ","BR":"Emetab Brazil","BS":"Emetab Bahamas","BT":"Emetab Bhutan","BV":"BV","BW":"Emetab Botswana","BY":"Emetab Belarus","BZ":"Emetab Belize","CA":"Emetab Canada","CC":"CC","CD":"Emetab Congo - Kinshasa","CF":"Emetab Afrika nebo Kwen","CG":"Emetab Congo - Brazzaville","CH":"Emetab Switzerland","CI":"Emetab Côte d’Ivoire","CK":"Ikwembeyotab Cook","CL":"Emetab Chile","CM":"Emetab Cameroon","CN":"Emetab China","CO":"Emetab Colombia","CP":"CP","CR":"Emetab Costa Rica","CU":"Emetab Cuba","CV":"Ikwembeyotab Cape Verde","CW":"CW","CX":"CX","CY":"Emetab Cyprus","CZ":"Emetab Czech Republic","DE":"Emetab Geruman","DG":"DG","DJ":"Emetab Djibouti","DK":"Emetab Denmark","DM":"Emetab Dominica","DO":"Emetab Dominican Republic","DZ":"Emetab Algeria","EA":"EA","EC":"Emetab Ecuador","EE":"Emetab Estonia","EG":"Emetab Misiri","EH":"EH","ER":"Emetab Eritrea","ES":"Emetab Spain","ET":"Emetab Ethiopia","EU":"EU","EZ":"EZ","FI":"Emetab Finland","FJ":"Emetab Fiji","FK":"Ikwembeyotab Falkland","FM":"Emetab Micronesia","FO":"FO","FR":"Emetab France","GA":"Emetab Gabon","GB":"Emetab Kibagenge nebo Uingereza","GD":"Emetab Grenada","GE":"Emetab Georgia","GF":"Emetab Guiana nebo Ufaransa","GG":"GG","GH":"Emetab Ghana","GI":"Emetab Gibraltar","GL":"Emetab Greenland","GM":"Emetab Gambia","GN":"Emetab Guinea","GP":"Emetab Guadeloupe","GQ":"Emetab Equatorial Guinea","GR":"Emetab Greece","GS":"GS","GT":"Emetab Guatemala","GU":"Emetab Guam","GW":"Emetab Guinea-Bissau","GY":"Emetab Guyana","HK":"HK","HM":"HM","HN":"Emetab Honduras","HR":"Emetab Croatia","HT":"Emetab Haiti","HU":"Emetab Hungary","IC":"IC","ID":"Emetab Indonesia","IE":"Emetab Ireland","IL":"Emetab Israel","IM":"IM","IN":"Emetab India","IO":"Kebebertab araraitab indian Ocean nebo Uingeresa","IQ":"Emetab Iraq","IR":"Emetab Iran","IS":"Emetab Iceland","IT":"Emetab Italy","JE":"JE","JM":"Emetab Jamaica","JO":"Emetab Jordan","JP":"Emetab Japan","KE":"Emetab Kenya","KG":"Emetab Kyrgyzstan","KH":"Emetab Cambodia","KI":"Emetab Kiribati","KM":"Emetab Comoros","KN":"Emetab Saint Kitts ak Nevis","KP":"Emetab Korea nebo murot katam","KR":"Emetab korea nebo murot tai","KW":"Emetab Kuwait","KY":"Ikwembeyotab Cayman","KZ":"Emetab Kazakhstan","LA":"Emetab Laos","LB":"Emetab Lebanon","LC":"Emetab Lucia Ne","LI":"Emetab Liechtenstein","LK":"Emetab Sri Lanka","LR":"Emetab Liberia","LS":"Emetab Lesotho","LT":"Emetab Lithuania","LU":"Emetab Luxembourg","LV":"Emetab Latvia","LY":"Emetab Libya","MA":"Emetab Morocco","MC":"Emetab Monaco","MD":"Emetab Moldova","ME":"ME","MF":"MF","MG":"Emetab Madagascar","MH":"Ikwembeiyotab Marshall","MK":"MK","ML":"Emetab Mali","MM":"Emetab Myanmar","MN":"Emetab Mongolia","MO":"MO","MP":"Ikwembeiyotab Mariana nebo murot katam","MQ":"Emetab Martinique","MR":"Emetab Mauritania","MS":"Emetab Montserrat","MT":"Emetab Malta","MU":"Emetab Mauritius","MV":"Emetab Maldives","MW":"Emetab Malawi","MX":"Emetab Mexico","MY":"Emetab Malaysia","MZ":"Emetab Mozambique","NA":"Emetab Namibia","NC":"Emetab New Caledonia","NE":"Emetab niger","NF":"Ikwembeiyotab Norfork","NG":"Emetab Nigeria","NI":"Emetab Nicaragua","NL":"Emetab Holand","NO":"Emetab Norway","NP":"Emetab Nepal","NR":"Emetab Nauru","NU":"Emetab Niue","NZ":"Emetab New Zealand","OM":"Emetab Oman","PA":"Emetab Panama","PE":"Emetab Peru","PF":"Emetab Polynesia nebo ufaransa","PG":"Emetab Papua New Guinea","PH":"Emetab Philippines","PK":"Emetab Pakistan","PL":"Emetab Poland","PM":"Emetab Peter Ne titil ak Miquelon","PN":"Emetab Pitcairn","PR":"Emetab Puerto Rico","PS":"Emetab Palestine","PT":"Emetab Portugal","PW":"Emetab Palau","PY":"Emetab Paraguay","QA":"Emetab Qatar","QO":"QO","RE":"Emetab Réunion","RO":"Emetab Romania","RS":"RS","RU":"Emetab Russia","RW":"Emetab Rwanda","SA":"Emetab Saudi Arabia","SB":"Ikwembeiyotab Solomon","SC":"Emetab Seychelles","SD":"Emetab Sudan","SE":"Emetab Sweden","SG":"Emetab Singapore","SH":"Emetab Helena Ne tilil","SI":"Emetab Slovenia","SJ":"SJ","SK":"Emetab Slovakia","SL":"Emetab Sierra Leone","SM":"Emetab San Marino","SN":"Emetab Senegal","SO":"Emetab Somalia","SR":"Emetab Suriname","SS":"SS","ST":"Emetab São Tomé and Príncipe","SV":"Emetab El Salvador","SX":"SX","SY":"Emetab Syria","SZ":"Emetab Swaziland","TA":"TA","TC":"Ikwembeiyotab Turks ak Caicos","TD":"Emetab Chad","TF":"TF","TG":"Emetab Togo","TH":"Emetab Thailand","TJ":"Emetab Tajikistan","TK":"Emetab Tokelau","TL":"Emetab Timor nebo Murot tai","TM":"Emetab Turkmenistan","TN":"Emetab Tunisia","TO":"Emetab Tonga","TR":"Emetab Turkey","TT":"Emetab Trinidad ak Tobago","TV":"Emetab Tuvalu","TW":"Emetab Taiwan","TZ":"Emetab Tanzania","UA":"Emetab Ukrainie","UG":"Emetab Uganda","UM":"UM","UN":"UN","US":"Emetab amerika","UY":"Emetab Uruguay","UZ":"Emetab Uzibekistani","VA":"Emetab Vatican","VC":"Emetab Vincent netilil ak Grenadines","VE":"Emetab Venezuela","VG":"Ikwembeyotab British Virgin","VI":"Ikwemweiyotab Amerika","VN":"Emetab Vietnam","VU":"Emetab Vanuatu","WF":"Emetab Walis ak Futuna","WS":"Emetab Samoa","XA":"XA","XB":"XB","XK":"XK","YE":"Emetab Yemen","YT":"Emetab Mayotte","ZA":"Emetab Afrika nebo Murot tai","ZM":"Emetab Zambia","ZW":"Emetab Zimbabwe","ZZ":"ZZ"},"short":{"GB":"Emetab Kibagenge nebo Uingereza","HK":"HK","MO":"MO","PS":"Emetab Palestine","US":"Emetab amerika"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Rabisiekab Kibagegeitab arabuk","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"Rabisiekab Angolan","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"Dolaitab Australian","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"Rabisiekab Bahrain","BIF":"Rabisiekab Burundi","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"Rabisiekab Botswana","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"Dolaitab Kanada","CDF":"Rabisiekab Congo","CHE":"CHE","CHF":"Rabisiekab Swiss","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Rabisiekab China","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"Rabisiekab Kepuvede","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"Rabisiekab Jibuti","DKK":"DKK","DOP":"DOP","DZD":"Rabisiekab Algerian","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Pauditab Misri","ERN":"Rabisiekab Eritrea","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Rabisiekab Ethiopia","EUR":"Yuroit","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"pounditab Uingereza","GEK":"GEK","GEL":"GEL","GHC":"Rabisiekab Ghana","GHS":"GHS","GIP":"GIP","GMD":"Rabisiekab Gambia","GNF":"GNF","GNS":"Rabisiekab Guinea","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Rabisiekab India","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Rabisiekab Japan","KES":"Silingitab ya Kenya","KGS":"KGS","KHR":"KHR","KMF":"Rabisiekab Komoro","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"Dolaitab Liberia","LSL":"Rabisiekab Lesoto","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Rabisiekab Libya","MAD":"Rabisiekab Moroccan","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"Rabisiekab Malagasy","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"Rabisiekab Mauritania (1973–2017)","MRU":"Rabisiekab Mauritania","MTL":"MTL","MTP":"MTP","MUR":"Rabisiekab Mauritius","MVP":"MVP","MVR":"MVR","MWK":"Rabisiekaby Malawi","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"Rabisiekab Msumbiji","MZN":"MZN","NAD":"Dolaitab Namibia","NGN":"Rabisiekab Nigeria","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"Rabisiekab Rwanda","SAR":"Rabisiekab Saudia","SBD":"SBD","SCR":"Rabisiekab Shelisheli","SDD":"SDD","SDG":"Pouditab Sudan","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"Pouditab helena ne tilil","SIT":"SIT","SKK":"SKK","SLL":"Leonit","SOS":"siligitab Somalia","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"Rabisiekab Sao Tome ak Principe (1977–2017)","STN":"Rabisiekab Sao Tome ak Principe","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"Lilangenit","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"RabisiekabTunisia","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"silingitab Tanzania","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"Silingitab Uganda","USD":"Dolaitab ya Amareka","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"Rabisiekab CFA BEAC","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Rabisiekab CFA BCEAO","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Randitab Afrika nebo murot tai","ZMK":"Kwachaitab Zambia (1968–2012)","ZMW":"Kwachaitab Zambia","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Dolaitab ya Zimbabwe","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"kln"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
