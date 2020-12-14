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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("lkt").length
)) {
// Intl.DisplayNames.~locale.lkt
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"ab":"Abkhaz Iyápi","ady":"Adyghe Iyápi","ae":"Avestan Iyápi","af":"Afrikaans Iyápi","agq":"agq","ak":"ak","alt":"Itóǧata Altai Iyápi","am":"Amharic Iyápi","ar":"Arab Iyápi","ar-001":"Arab Iyápi (Makȟásitomni)","arp":"Maȟpíya Tȟó Iyápi","as":"Assamese Iyápi","asa":"asa","ast":"ast","av":"Avaric Iyápi","az":"Azerbaijani Iyápi","ba":"Bashkir Iyápi","bal":"Baluchi Iyápi","bas":"bas","bax":"Bamun Iyápi","be":"Belarus Iyápi","bej":"Beja Iyápi","bem":"bem","bez":"bez","bg":"Bulgar Iyápi","bm":"bm","bn":"Bengali Iyápi","bo":"Tibetan Iyápi","br":"br","brx":"brx","bs":"Bosnia Iyápi","bua":"Buriat Iyápi","ca":"Catalan Iyápi","ccp":"ccp","ce":"Chechen Iyápi","ceb":"ceb","cgg":"cgg","chm":"Mari Iyápi","chr":"Cherokee Iyápi","chy":"Šahíyela Iyápi","ckb":"ckb","co":"co","cop":"Coptic Iyápi","cr":"Maštíŋča Oyáte Iyápi","crh":"Crimean Turkish Iyápi","cs":"Czech Iyápi","cu":"cu","cv":"Chuvash Iyápi","cy":"Wales Iyápi","da":"Dane Iyápi","dak":"Dakȟótiyapi","dar":"Dargwa Iyápi","dav":"dav","de":"Iyášiča Iyápi","de-AT":"Iyášiča Iyápi (AT)","de-CH":"Iyášiča Iyápi (CH)","dje":"dje","doi":"Dogri Iyápi","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"Greece Iyápi","en":"Wašíčuiyapi","en-AU":"Wašíčuiyapi (AU)","en-CA":"Wašíčuiyapi (Uŋčíyapi Makȟóčhe)","en-GB":"Šagláša Wašíčuiyapi","en-US":"Mílahaŋska Wašíčuiyapi","eo":"Esperanto Iyápi","es":"Spayóla Iyápi","es-419":"Wiyóȟpeyata Spayóla Iyápi","es-ES":"Spayólaȟča Iyápi","es-MX":"Spayóla Iyápi (Spayóla Makȟóčhe)","et":"Estonia Iyápi","eu":"Basque Iyápi","ewo":"ewo","fa":"Persian Iyápi","fa-AF":"Persian Iyápi (AF)","ff":"ff","fi":"Finnish Iyápi","fil":"Filipino Iyápi","fj":"Fiji Iyápi","fo":"Faroese Iyápi","fr":"Wašíču Ikčéka Iyápi","fr-CA":"Wašíču Ikčéka Iyápi (Uŋčíyapi Makȟóčhe)","fr-CH":"Wašíču Ikčéka Iyápi (CH)","frc":"frc","fur":"fur","fy":"fy","ga":"Irish Iyápi","gba":"Gbaya Iyápi","gd":"gd","gl":"Galician Iyápi","gn":"Guarani Iyápi","gsw":"gsw","gu":"Gujarati Iyápi","guz":"guz","gv":"gv","ha":"Hausa Iyápi","haw":"Hawaiian Iyápi","he":"Hebrew Iyápi","hi":"Hindi Iyápi","hmn":"hmn","hr":"Croatian Iyápi","hsb":"hsb","ht":"Haiti Iyápi","hu":"Hungary Iyápi","hy":"Armenia Iyápi","ia":"ia","id":"Indonesia Iyápi","ig":"Igbo Iyápi","ii":"ii","inh":"Ingush Iyápi","is":"Iceland Iyápi","it":"Italia Iyápi","ja":"Kisúŋla Iyápi","jgo":"jgo","jmc":"jmc","jv":"Java Iyápi","ka":"Georia Iyápi","kaa":"Kara-Kalpak Iyápi","kab":"kab","kam":"kam","kbd":"Kabardian Iyápi","kde":"kde","kea":"kea","khq":"khq","ki":"ki","kk":"Kazakh Iyápi","kkj":"kkj","kl":"kl","kln":"kln","km":"Khmer Iyápi","kn":"Kannada Iyápi","ko":"Korea Iyápi","kok":"kok","ks":"Kashmir Iyápi","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"Kurd Iyápi","kw":"kw","ky":"Kirghiz Iyápi","la":"Latin Iyápi","lag":"lag","lah":"Lahnda Iyápi","lb":"Luxembourg Iyápi","lg":"lg","lkt":"Lakȟólʼiyapi","ln":"ln","lo":"Lao Iyápi","lou":"lou","lrc":"lrc","lt":"Lithuania Iyápilt","lu":"lu","luo":"luo","lus":"Mizo Iyápi","luy":"luy","lv":"Latvia Iyápi","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"Malagasy Iyápi","mgh":"mgh","mgo":"mgo","mi":"Maori Iyápi","mk":"Macedonia Iyápi","ml":"Malayalam Iyápi","mn":"mn","mni":"Namipuri Iyápi","mr":"Marathi Iyápi","ms":"Malay Iyápi","mt":"Maltese Iyápi","mua":"mua","mul":"mul","my":"Burmese Iyápi","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (NL)","ne":"Nepal Iyápi","nl":"Dutch Iyápi","nl-BE":"Flemish Iyápi","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","nv":"Šináglegleǧa Iyápi","ny":"ny","nyn":"nyn","oj":"Ȟaȟátȟuŋwaŋ Iyápi","om":"om","or":"Oriya Iyápi","os":"os","pa":"Punjabi Iyápi","pcm":"pcm","pl":"Polish Iyápi","prg":"prg","ps":"Pashto Iyápi","pt":"Portuguese Iyápi","pt-BR":"Portuguese Iyápi (BR)","pt-PT":"Portuguese Iyápi (PT)","qu":"Quechua Iyápi","rm":"Romansh Iyápi","rn":"rn","ro":"Romanian Iyápi","ro-MD":"Romanian Iyápi (MD)","rof":"rof","root":"root","ru":"Russia Iyápi","rw":"rw","rwk":"rwk","sa":"Sanskrit Iyápi","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"Sindhi Iyápi","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"Sinhala Iyápi","sk":"Slovak Iyápi","sl":"Slovenian Iyápi","sm":"sm","smn":"smn","sn":"sn","so":"Somali Iyápi","sq":"Albanian Iyápi","sr":"Serbia Iyápi","st":"st","su":"Sundanese Iyápi","sv":"Swedish Iyápi","sw":"Swahili Iyápi","sw-CD":"Swahili Iyápi (CD)","swb":"Comonian Iyápi","ta":"Tamil Iyápi","te":"Telugu Iyápi","teo":"teo","tg":"Tajik Iyápi","th":"Thai Iyápi","ti":"Tigrinya Iyápi","tk":"Turkmen Iyápi","to":"Tongan Iyápi","tr":"Turkish Iyápi","tt":"Tatar Iyápi","twq":"twq","tzm":"tzm","ug":"Uyghur Iyápi","uk":"Ukrain Iyápi","und":"Tukté iyápi tȟaŋíŋ šni","ur":"Urdu Iyápi","uz":"Uzbek Iyápi","vai":"vai","vi":"Vietnamese Iyápi","vo":"vo","vun":"vun","wae":"wae","wo":"Wolof Iyápi","xh":"Xhosa Iyápi","xog":"xog","yav":"yav","yi":"yi","yo":"Yoruba Iyápi","yue":"yue","zgh":"zgh","zh":"Pȟečhókaŋ Háŋska Iyápi","zh-Hans":"Pȟečhókaŋ Háŋska Iyápi Ikčéka","zh-Hant":"Pȟečhókaŋ Háŋska Iyápi Ȟče","zu":"Zulu Iyápi","zxx":"zxx","zza":"Zaza Iyápi"},"short":{"az":"Azerbaijani Iyápi","en-GB":"Šagláša Wašíčuiyapi","en-US":"Mílahaŋska Wašíčuiyapi"},"narrow":{}},"region":{"long":{"142":"Hazíla Makȟáwita","143":"143","145":"145","150":"Wašíču Makȟáwita","151":"151","154":"154","155":"155","202":"202","419":"419","001":"Makȟásitomni","002":"Hásapa Makȟáwita","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"Khéya Wíta","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"AD","AE":"AE","AF":"AF","AG":"AG","AI":"AI","AL":"AL","AM":"AM","AO":"AO","AQ":"AQ","AR":"AR","AS":"AS","AT":"AT","AU":"AU","AW":"AW","AX":"AX","AZ":"AZ","BA":"BA","BB":"BB","BD":"BD","BE":"BE","BF":"BF","BG":"BG","BH":"BH","BI":"BI","BJ":"BJ","BL":"BL","BM":"BM","BN":"BN","BO":"BO","BQ":"BQ","BR":"BR","BS":"BS","BT":"BT","BV":"BV","BW":"BW","BY":"BY","BZ":"BZ","CA":"Uŋčíyapi Makȟóčhe","CC":"CC","CD":"CD","CF":"CF","CG":"CG","CH":"CH","CI":"CI","CK":"CK","CL":"CL","CM":"CM","CN":"Pȟečhókaŋhaŋska Makȟóčhe","CO":"CO","CP":"CP","CR":"CR","CU":"CU","CV":"CV","CW":"CW","CX":"CX","CY":"CY","CZ":"CZ","DE":"Iyášiča Makȟóčhe","DG":"DG","DJ":"DJ","DK":"DK","DM":"DM","DO":"DO","DZ":"DZ","EA":"EA","EC":"EC","EE":"EE","EG":"EG","EH":"EH","ER":"ER","ES":"Spayólaȟče Makȟóčhe","ET":"ET","EU":"EU","EZ":"EZ","FI":"FI","FJ":"FJ","FK":"FK","FM":"FM","FO":"FO","FR":"FR","GA":"GA","GB":"GB","GD":"GD","GE":"GE","GF":"GF","GG":"GG","GH":"GH","GI":"GI","GL":"GL","GM":"GM","GN":"GN","GP":"GP","GQ":"GQ","GR":"GR","GS":"GS","GT":"GT","GU":"GU","GW":"GW","GY":"GY","HK":"HK","HM":"HM","HN":"HN","HR":"HR","HT":"HT","HU":"HU","IC":"IC","ID":"ID","IE":"IE","IL":"IL","IM":"IM","IN":"IN","IO":"IO","IQ":"IQ","IR":"IR","IS":"IS","IT":"IT","JE":"JE","JM":"JM","JO":"JO","JP":"Kisúŋla Makȟóčhe","KE":"KE","KG":"KG","KH":"KH","KI":"KI","KM":"KM","KN":"KN","KP":"KP","KR":"KR","KW":"KW","KY":"KY","KZ":"KZ","LA":"LA","LB":"LB","LC":"LC","LI":"LI","LK":"LK","LR":"LR","LS":"LS","LT":"LT","LU":"LU","LV":"LV","LY":"LY","MA":"MA","MC":"MC","MD":"MD","ME":"ME","MF":"MF","MG":"MG","MH":"MH","MK":"MK","ML":"ML","MM":"MM","MN":"MN","MO":"MO","MP":"MP","MQ":"MQ","MR":"MR","MS":"MS","MT":"MT","MU":"MU","MV":"MV","MW":"MW","MX":"Spayóla Makȟóčhe","MY":"MY","MZ":"MZ","NA":"NA","NC":"NC","NE":"NE","NF":"NF","NG":"NG","NI":"NI","NL":"NL","NO":"NO","NP":"NP","NR":"NR","NU":"NU","NZ":"NZ","OM":"OM","PA":"PA","PE":"PE","PF":"PF","PG":"PG","PH":"PH","PK":"PK","PL":"PL","PM":"PM","PN":"PN","PR":"PR","PS":"PS","PT":"PT","PW":"PW","PY":"PY","QA":"QA","QO":"QO","RE":"RE","RO":"RO","RS":"RS","RU":"RU","RW":"RW","SA":"SA","SB":"SB","SC":"SC","SD":"SD","SE":"SE","SG":"SG","SH":"SH","SI":"SI","SJ":"SJ","SK":"SK","SL":"SL","SM":"SM","SN":"SN","SO":"SO","SR":"SR","SS":"SS","ST":"ST","SV":"SV","SX":"SX","SY":"SY","SZ":"SZ","TA":"TA","TC":"TC","TD":"TD","TF":"TF","TG":"TG","TH":"TH","TJ":"TJ","TK":"TK","TL":"TL","TM":"TM","TN":"TN","TO":"TO","TR":"TR","TT":"TT","TV":"TV","TW":"TW","TZ":"TZ","UA":"UA","UG":"UG","UM":"UM","UN":"UN","US":"Mílahaŋska Tȟamákȟočhe","UY":"UY","UZ":"UZ","VA":"VA","VC":"VC","VE":"VE","VG":"VG","VI":"VI","VN":"VN","VU":"VU","WF":"WF","WS":"WS","XA":"XA","XB":"XB","XK":"XK","YE":"YE","YT":"YT","ZA":"ZA","ZM":"ZM","ZW":"ZW","ZZ":"ZZ"},"short":{"GB":"GB","HK":"HK","MO":"MO","PS":"PS","US":"Mílahaŋska Tȟamákȟočhe"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"AED","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"AOA","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"AUD","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"BHD","BIF":"BIF","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"BWP","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"CAD","CDF":"CDF","CHE":"CHE","CHF":"CHF","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"CNY","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"CVE","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"DJF","DKK":"DKK","DOP":"DOP","DZD":"DZD","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"EGP","ERN":"ERN","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ETB","EUR":"EUR","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"GBP","GEK":"GEK","GEL":"GEL","GHC":"GHC","GHS":"GHS","GIP":"GIP","GMD":"GMD","GNF":"GNF","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"INR","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"JPY","KES":"KES","KGS":"KGS","KHR":"KHR","KMF":"KMF","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"LRD","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"LYD","MAD":"MAD","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"MGA","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"MRO","MRU":"MRU","MTL":"MTL","MTP":"MTP","MUR":"MUR","MVP":"MVP","MVR":"MVR","MWK":"MWK","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"MZM","MZN":"MZN","NAD":"NAD","NGN":"NGN","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"RWF","SAR":"SAR","SBD":"SBD","SCR":"SCR","SDD":"SDD","SDG":"SDG","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"SHP","SIT":"SIT","SKK":"SKK","SLL":"SLL","SOS":"SOS","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"STD","STN":"STN","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"SZL","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"TND","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"TZS","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"UGX","USD":"USD","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"XOF","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ZAR","ZMK":"ZMK","ZMW":"ZMW","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"lkt"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
