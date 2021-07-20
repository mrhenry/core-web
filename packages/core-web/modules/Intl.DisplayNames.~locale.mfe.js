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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("mfe").length
)) {
// Intl.DisplayNames.~locale.mfe
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"akan","am":"amarik","ar":"arab","ar-001":"arab (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"bieloris","bem":"bem","bez":"bez","bg":"bilgar","bm":"bm","bn":"bengali","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"tchek","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"alman","de-AT":"alman (Lostris)","de-CH":"alman (Laswis)","dje":"dje","doi":"doi","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"grek","en":"angle","en-AU":"angle (Lostrali)","en-CA":"angle (Kanada)","en-GB":"angle (United Kingdom)","en-US":"angle (Lamerik)","eo":"eo","es":"espagnol","es-419":"espagnol (419)","es-ES":"espagnol (Lespagn)","es-MX":"espagnol (Mexik)","et":"et","eu":"eu","ewo":"ewo","fa":"persan","fa-AF":"persan (Afganistan)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"franse","fr-CA":"franse (Kanada)","fr-CH":"franse (Laswis)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"haoussa","haw":"haw","he":"he","hi":"hindi","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"hongrwa","hy":"hy","ia":"ia","id":"indonezien","ig":"igbo","ii":"ii","is":"is","it":"italien","ja":"zapone","jgo":"jgo","jmc":"jmc","jv":"zavane","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","kgp":"kgp","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"khmer, santral","kn":"kn","ko":"koreen","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lij":"lij","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"kreol morisien","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"male","mt":"mt","mua":"mua","mul":"mul","my":"birman","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Oland)","ne":"nepale","nl":"olande","nl-BE":"olande (Belzik)","nmg":"nmg","nn":"nn","nnh":"nnh","no":"no","nus":"nus","nv":"nv","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"penjabi","pcm":"pcm","pl":"polone","prg":"prg","ps":"ps","pt":"portige","pt-BR":"portige (Brezil)","pt-PT":"portige (Portigal)","qu":"qu","rm":"rm","rn":"rn","ro":"roumin","ro-MD":"roumin (Moldavi)","rof":"rof","ru":"ris","rw":"rwanda","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"somali","sq":"sq","sr":"sr","st":"st","su":"su","sv":"swedwa","sw":"sw","sw-CD":"sw (Repiblik demokratik Kongo)","ta":"tamoul","te":"te","teo":"teo","tg":"tg","th":"thaï","ti":"ti","tk":"tk","to":"to","tr":"tirk","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"ikrenien","und":"und","ur":"ourdou","uz":"uz","vai":"vai","vi":"vietnamien","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"yoruba","yue":"yue","zgh":"zgh","zh":"sinwa, mandarin","zh-Hans":"sinwa, mandarin (Hans)","zh-Hant":"sinwa, mandarin (Hant)","zu":"zoulou","zxx":"zxx"},"short":{"az":"az","en-GB":"angle (United Kingdom)","en-US":"angle (Lamerik)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Andor","AE":"Emira arab ini","AF":"Afganistan","AG":"Antigua-ek-Barbuda","AI":"Anguilla","AL":"Albani","AM":"Armeni","AO":"Angola","AQ":"AQ","AR":"Larzantinn","AS":"Samoa amerikin","AT":"Lostris","AU":"Lostrali","AW":"Aruba","AX":"AX","AZ":"Azerbaïdjan","BA":"Bosni-Herzegovinn","BB":"Barbad","BD":"Banglades","BE":"Belzik","BF":"Burkina Faso","BG":"Bilgari","BH":"Bahreïn","BI":"Burundi","BJ":"Benin","BL":"BL","BM":"Bermid","BN":"Brunei","BO":"Bolivi","BQ":"BQ","BR":"Brezil","BS":"Bahamas","BT":"Boutan","BV":"BV","BW":"Botswana","BY":"Belaris","BZ":"Beliz","CA":"Kanada","CC":"CC","CD":"Repiblik demokratik Kongo","CF":"Repiblik Lafrik Santral","CG":"Kongo","CH":"Laswis","CI":"Côte d’Ivoire","CK":"Zil Cook","CL":"Shili","CM":"Kamerounn","CN":"Lasinn","CO":"Kolonbi","CP":"CP","CR":"Costa Rica","CU":"Cuba","CV":"Kap-Ver","CW":"CW","CX":"CX","CY":"Cyprus","CZ":"Repiblik Chek","DE":"Almagn","DG":"DG","DJ":"Djibouti","DK":"Dannmark","DM":"Dominik","DO":"Repiblik dominikin","DZ":"Alzeri","EA":"EA","EC":"Ekwater","EE":"Estoni","EG":"Lezipt","EH":"EH","ER":"Erythre","ES":"Lespagn","ET":"Letiopi","EU":"EU","EZ":"EZ","FI":"Finland","FJ":"Fidji","FK":"Zil malwinn","FM":"Mikronezi","FO":"FO","FR":"Lafrans","GA":"Gabon","GB":"United Kingdom","GD":"Grenad","GE":"Zeorzi","GF":"Gwiyann franse","GG":"GG","GH":"Ghana","GI":"Zibraltar","GL":"Greenland","GM":"Gambi","GN":"Gine","GP":"Guadloup","GQ":"Gine ekwatoryal","GR":"Gres","GS":"GS","GT":"Guatemala","GU":"Guam","GW":"Gine-Bisau","GY":"Guyana","HK":"HK","HM":"HM","HN":"Honduras","HR":"Kroasi","HT":"Ayti","HU":"Ongri","IC":"IC","ID":"Indonezi","IE":"Irland","IL":"Izrael","IM":"IM","IN":"Lenn","IO":"Teritwar Britanik Losean Indien","IQ":"Irak","IR":"Iran","IS":"Island","IT":"Itali","JE":"JE","JM":"Zamaik","JO":"Zordani","JP":"Zapon","KE":"Kenya","KG":"Kirghizistan","KH":"Kambodj","KI":"Kiribati","KM":"Komor","KN":"Saint-Christophe-ek-Niévès","KP":"Lakore-dinor","KR":"Lakore-disid","KW":"Koweit","KY":"Zil Kayman","KZ":"Kazakstan","LA":"Laos","LB":"Liban","LC":"Sainte-Lucie","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lezoto","LT":"Lituani","LU":"Luxembourg","LV":"Letoni","LY":"Libi","MA":"Marok","MC":"Monako","MD":"Moldavi","ME":"ME","MF":"MF","MG":"Madagaskar","MH":"Zil Marshall","MK":"MK","ML":"Mali","MM":"Myanmar","MN":"Mongoli","MO":"MO","MP":"Zil Maryann dinor","MQ":"Martinik","MR":"Moritani","MS":"Montsera","MT":"Malt","MU":"Moris","MV":"Maldiv","MW":"Malawi","MX":"Mexik","MY":"Malezi","MZ":"Mozambik","NA":"Namibi","NC":"Nouvel-Kaledoni","NE":"Nizer","NF":"Lil Norfolk","NG":"Nizeria","NI":"Nicaragua","NL":"Oland","NO":"Norvez","NP":"Nepal","NR":"Nauru","NU":"Niowe","NZ":"Nouvel Zeland","OM":"Oman","PA":"Panama","PE":"Perou","PF":"Polinezi franse","PG":"Papouazi-Nouvel-Gine","PH":"Filipinn","PK":"Pakistan","PL":"Pologn","PM":"Saint-Pierre-ek-Miquelon","PN":"Pitcairn","PR":"Porto Rico","PS":"Teritwar Palestinn","PT":"Portigal","PW":"Palau","PY":"Paraguay","QA":"Katar","QO":"QO","RE":"Larenion","RO":"Roumani","RS":"RS","RU":"Larisi","RW":"Rwanda","SA":"Larabi Saoudit","SB":"Zil Salomon","SC":"Sesel","SD":"Soudan","SE":"Laswed","SG":"Singapour","SH":"Sainte-Hélène","SI":"Sloveni","SJ":"SJ","SK":"Slovaki","SL":"Sierra Leone","SM":"Saint-Marin","SN":"Senegal","SO":"Somali","SR":"Surinam","SS":"SS","ST":"São Tome-ek-Prínsip","SV":"Salvador","SX":"SX","SY":"Lasiri","SZ":"Swaziland","TA":"TA","TC":"Zil Tirk ek Caïcos","TD":"Tchad","TF":"TF","TG":"Togo","TH":"Thayland","TJ":"Tadjikistan","TK":"Tokelau","TL":"Timor oriantal","TM":"Turkmenistan","TN":"Tinizi","TO":"Tonga","TR":"Tirki","TT":"Trinite-ek-Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzani","UA":"Ikrenn","UG":"Ouganda","UM":"UM","UN":"UN","US":"Lamerik","UY":"Uruguay","UZ":"Ouzbekistan","VA":"Lata Vatikan","VC":"Saint-Vincent-ek-Grenadines","VE":"Venezuela","VG":"Zil vierz britanik","VI":"Zil Vierz Lamerik","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis-ek-Futuna","WS":"Samoa","XA":"XA","XB":"XB","XK":"XK","YE":"Yemenn","YT":"Mayot","ZA":"Sid-Afrik","ZM":"Zambi","ZW":"Zimbabwe","ZZ":"ZZ"},"short":{"GB":"United Kingdom","HK":"HK","MO":"MO","PS":"Teritwar Palestinn","US":"Lamerik"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"dirham Emira arab ini","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"kwanza angole","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"dolar ostralien","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"dinar bahreïn","BIF":"fran burunde","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"pula ya botswane","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"dolar kanadien","CDF":"fran kongole","CHE":"CHE","CHF":"fran swis","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"yuan renminbi sinwa","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"eskudo kapverdien","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"fran djiboutien","DKK":"DKK","DOP":"DOP","DZD":"dinar alzerien","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"liv ezipsien","ERN":"nafka erythreen","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"birr etiopien","EUR":"euro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"liv sterlin","GEK":"GEK","GEL":"GEL","GHC":"sedi ganeen","GHS":"GHS","GIP":"GIP","GMD":"dalasi gambien","GNF":"GNF","GNS":"fran gineen","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"roupi","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"yen zapone","KES":"shiling kenyan","KGS":"KGS","KHR":"KHR","KMF":"fran komorien","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"dolar liberien","LSL":"loti lezoto","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"dinar libien","MAD":"dirham marokin","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"fran malgas","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"ouguiya moritanien (1973–2017)","MRU":"ouguiya moritanien","MTL":"MTL","MTP":"MTP","MUR":"roupi morisien","MVP":"MVP","MVR":"MVR","MWK":"kwacha malawit","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"metikal mozanbikin","MZN":"MZN","NAD":"dolar namibien","NGN":"naira nizerian","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"fran rwande","SAR":"rial saoudien","SBD":"SBD","SCR":"roupi seselwa","SDD":"SDD","SDG":"dinar soudane","SDP":"liv soudane","SEK":"SEK","SGD":"SGD","SHP":"liv Sainte-Hélène","SIT":"SIT","SKK":"SKK","SLL":"leonn Sierra-Leone","SOS":"shilingi somalien","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"dobra santomeen (1977–2017)","STN":"dobra santomeen","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"lilangeni swazi","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"dinar tinizien","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"shiling tanzanien","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"shiling ougande","USD":"dolar amerikin","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"fran CFA (BEAC)","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"fran CFA (BCEAO)","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"rand sid-afrikin","ZMK":"kwacha zanbien (1968–2012)","ZMW":"kwacha zanbien","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"dolar zimbawe","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"mfe"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
