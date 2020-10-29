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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("om").length
)) {
// Intl.DisplayNames.~locale.om
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"om":{"types":{"language":{"long":{"af":"Afrikoota","agq":"agq","ak":"ak","am":"Afaan Sidaamaa","ar":"Arabiffaa","ar-001":"Arabiffaa (001)","as":"as","asa":"asa","ast":"ast","az":"Afaan Azerbaijani","bas":"bas","be":"Afaan Belarusia","bem":"bem","bez":"bez","bg":"Afaan Bulgariya","bm":"bm","bn":"Afaan Baangladeshi","bo":"bo","br":"br","brx":"brx","bs":"Afaan Bosniyaa","ca":"Afaan Katalaa","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"Afaan Czech","cu":"cu","cy":"Welishiffaa","da":"Afaan Deenmaark","dav":"dav","de":"Afaan Jarmanii","de-AT":"Afaan Jarmanii (AT)","de-CH":"Afaan Jarmanii (CH)","dje":"dje","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"Afaan Giriiki","en":"Ingliffa","en-AU":"Ingliffa (AU)","en-CA":"Ingliffa (CA)","en-GB":"Ingliffa (United Kingdom)","en-US":"Ingliffa (United States)","eo":"Afaan Esperantoo","es":"Afaan Ispeen","es-419":"Afaan Ispeen (419)","es-ES":"Afaan Ispeen (ES)","es-MX":"Afaan Ispeen (MX)","et":"Afaan Istooniya","eu":"Afaan Baskuu","ewo":"ewo","fa":"Afaan Persia","fa-AF":"Afaan Persia (AF)","ff":"ff","fi":"Afaan Fiilaandi","fil":"Afaan Filippinii","fo":"Afaan Faroese","fr":"Afaan Faransaayii","fr-CA":"Afaan Faransaayii (CA)","fr-CH":"Afaan Faransaayii (CH)","frc":"frc","fur":"fur","fy":"Afaan Firisiyaani","ga":"Afaan Ayirishii","gd":"Scots Gaelic","gl":"Afaan Galishii","gn":"Afaan Guarani","gsw":"gsw","gu":"Afaan Gujarati","guz":"guz","gv":"gv","ha":"ha","haw":"haw","he":"Afaan Hebrew","hi":"Afaan Hindii","hmn":"hmn","hr":"Afaan Croatian","hsb":"hsb","ht":"ht","hu":"Afaan Hangaari","hy":"hy","ia":"Interlingua","id":"Afaan Indoneziya","ig":"ig","ii":"ii","is":"Ayiislandiffaa","it":"Afaan Xaaliyaani","ja":"Afaan Japanii","jgo":"jgo","jmc":"jmc","jv":"Afaan Java","ka":"Afaan Georgian","kab":"kab","kam":"kam","kde":"kde","kea":"kea","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"km","kn":"Afaan Kannada","ko":"Afaan Korea","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"Afaan Laatini","lag":"lag","lb":"lb","lg":"lg","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"Afaan Liituniyaa","lu":"lu","luo":"luo","luy":"luy","lv":"Afaan Lativiyaa","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"Afaan Macedooniyaa","ml":"Malayaalamiffaa","mn":"mn","mni":"mni","mr":"Afaan Maratii","ms":"Malaayiffaa","mt":"Afaan Maltesii","mua":"mua","mul":"mul","my":"my","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (NL)","ne":"Afaan Nepalii","nl":"Afaan Dachii","nl-BE":"Afaan Dachii (BE)","nmg":"nmg","nn":"Afaan Norwegian","nnh":"nnh","no":"Afaan Norweyii","nus":"nus","ny":"ny","nyn":"nyn","oc":"Afaan Occit","om":"Oromoo","or":"or","os":"os","pa":"Afaan Punjabii","pcm":"pcm","pl":"Afaan Polandii","prg":"prg","ps":"ps","pt":"Afaan Porchugaal","pt-BR":"Afaan Portugali (Braazil)","pt-PT":"Afaan Protuguese","qu":"qu","rm":"rm","rn":"rn","ro":"Afaan Romaniyaa","ro-MD":"Afaan Romaniyaa (MD)","rof":"rof","root":"root","ru":"Afaan Rushiyaa","rw":"rw","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"Afaan Sinhalese","sk":"Afaan Slovak","sl":"Afaan Islovaniyaa","sm":"sm","smn":"smn","sn":"sn","so":"so","sq":"Afaan Albaniyaa","sr":"Afaan Serbiya","st":"st","su":"Afaan Sudaanii","sv":"Afaan Suwidiin","sw":"Suwahilii","sw-CD":"Suwahilii (CD)","ta":"Afaan Tamilii","te":"Afaan Telugu","teo":"teo","tg":"tg","th":"Afaan Tayii","ti":"Afaan Tigiree","tk":"Lammii Turkii","tlh":"Afaan Kilingon","to":"to","tr":"Afaan Turkii","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"Afaan Ukreenii","und":"und","ur":"Afaan Urdu","uz":"Afaan Uzbek","vai":"vai","vi":"Afaan Veetinam","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"Afaan Xhosa","xog":"xog","yav":"yav","yi":"yi","yo":"yo","yue":"yue","zgh":"zgh","zh":"Chinese","zh-Hans":"Chinese (Hans)","zh-Hant":"Chinese (Hant)","zu":"Afaan Zuulu","zxx":"zxx"},"short":{"az":"Afaan Azerbaijani","en-GB":"Ingliffa (United Kingdom)","en-US":"Ingliffa (United States)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"AD","AE":"AE","AF":"AF","AG":"AG","AI":"AI","AL":"AL","AM":"AM","AO":"AO","AQ":"AQ","AR":"AR","AS":"AS","AT":"AT","AU":"AU","AW":"AW","AX":"AX","AZ":"AZ","BA":"BA","BB":"BB","BD":"BD","BE":"BE","BF":"BF","BG":"BG","BH":"BH","BI":"BI","BJ":"BJ","BL":"BL","BM":"BM","BN":"BN","BO":"BO","BQ":"BQ","BR":"Brazil","BS":"BS","BT":"BT","BV":"BV","BW":"BW","BY":"BY","BZ":"BZ","CA":"CA","CC":"CC","CD":"CD","CF":"CF","CG":"CG","CH":"CH","CI":"CI","CK":"CK","CL":"CL","CM":"CM","CN":"China","CO":"CO","CP":"CP","CR":"CR","CU":"CU","CV":"CV","CW":"CW","CX":"CX","CY":"CY","CZ":"CZ","DE":"Germany","DG":"DG","DJ":"DJ","DK":"DK","DM":"DM","DO":"DO","DZ":"DZ","EA":"EA","EC":"EC","EE":"EE","EG":"EG","EH":"EH","ER":"ER","ES":"ES","ET":"Itoophiyaa","EU":"EU","EZ":"EZ","FI":"FI","FJ":"FJ","FK":"FK","FM":"FM","FO":"FO","FR":"France","GA":"GA","GB":"United Kingdom","GD":"GD","GE":"GE","GF":"GF","GG":"GG","GH":"GH","GI":"GI","GL":"GL","GM":"GM","GN":"GN","GP":"GP","GQ":"GQ","GR":"GR","GS":"GS","GT":"GT","GU":"GU","GW":"GW","GY":"GY","HK":"HK","HM":"HM","HN":"HN","HR":"HR","HT":"HT","HU":"HU","IC":"IC","ID":"ID","IE":"IE","IL":"IL","IM":"IM","IN":"India","IO":"IO","IQ":"IQ","IR":"IR","IS":"IS","IT":"Italy","JE":"JE","JM":"JM","JO":"JO","JP":"Japan","KE":"Keeniyaa","KG":"KG","KH":"KH","KI":"KI","KM":"KM","KN":"KN","KP":"KP","KR":"KR","KW":"KW","KY":"KY","KZ":"KZ","LA":"LA","LB":"LB","LC":"LC","LI":"LI","LK":"LK","LR":"LR","LS":"LS","LT":"LT","LU":"LU","LV":"LV","LY":"LY","MA":"MA","MC":"MC","MD":"MD","ME":"ME","MF":"MF","MG":"MG","MH":"MH","MK":"MK","ML":"ML","MM":"MM","MN":"MN","MO":"MO","MP":"MP","MQ":"MQ","MR":"MR","MS":"MS","MT":"MT","MU":"MU","MV":"MV","MW":"MW","MX":"MX","MY":"MY","MZ":"MZ","NA":"NA","NC":"NC","NE":"NE","NF":"NF","NG":"NG","NI":"NI","NL":"NL","NO":"NO","NP":"NP","NR":"NR","NU":"NU","NZ":"NZ","OM":"OM","PA":"PA","PE":"PE","PF":"PF","PG":"PG","PH":"PH","PK":"PK","PL":"PL","PM":"PM","PN":"PN","PR":"PR","PS":"PS","PT":"PT","PW":"PW","PY":"PY","QA":"QA","QO":"QO","RE":"RE","RO":"RO","RS":"RS","RU":"Russia","RW":"RW","SA":"SA","SB":"SB","SC":"SC","SD":"SD","SE":"SE","SG":"SG","SH":"SH","SI":"SI","SJ":"SJ","SK":"SK","SL":"SL","SM":"SM","SN":"SN","SO":"SO","SR":"SR","SS":"SS","ST":"ST","SV":"SV","SX":"SX","SY":"SY","SZ":"SZ","TA":"TA","TC":"TC","TD":"TD","TF":"TF","TG":"TG","TH":"TH","TJ":"TJ","TK":"TK","TL":"TL","TM":"TM","TN":"TN","TO":"TO","TR":"TR","TT":"TT","TV":"TV","TW":"TW","TZ":"TZ","UA":"UA","UG":"UG","UM":"UM","UN":"UN","US":"United States","UY":"UY","UZ":"UZ","VA":"VA","VC":"VC","VE":"VE","VG":"VG","VI":"VI","VN":"VN","VU":"VU","WF":"WF","WS":"WS","XA":"XA","XB":"XB","XK":"XK","YE":"YE","YT":"YT","ZA":"ZA","ZM":"ZM","ZW":"ZW","ZZ":"ZZ"},"short":{"GB":"United Kingdom","HK":"HK","MO":"MO","PS":"PS","US":"United States"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latin","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"AED","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"AOA","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"AUD","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"BHD","BIF":"BIF","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"Brazilian Real","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"BWP","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"CAD","CDF":"CDF","CHE":"CHE","CHF":"CHF","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Chinese Yuan Renminbi","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"CVE","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"DJF","DKK":"DKK","DOP":"DOP","DZD":"DZD","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"EGP","ERN":"ERN","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Itoophiyaa Birrii","EUR":"Euro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"British Pound","GEK":"GEK","GEL":"GEL","GHC":"GHC","GHS":"GHS","GIP":"GIP","GMD":"GMD","GNF":"GNF","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Indian Rupee","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Japanese Yen","KES":"KES","KGS":"KGS","KHR":"KHR","KMF":"KMF","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"LRD","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"LYD","MAD":"MAD","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"MGA","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"MRO","MRU":"MRU","MTL":"MTL","MTP":"MTP","MUR":"MUR","MVP":"MVP","MVR":"MVR","MWK":"MWK","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"MZM","MZN":"MZN","NAD":"NAD","NGN":"NGN","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"Russian Ruble","RUR":"RUR","RWF":"RWF","SAR":"SAR","SBD":"SBD","SCR":"SCR","SDD":"SDD","SDG":"SDG","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"SHP","SIT":"SIT","SKK":"SKK","SLL":"SLL","SOS":"SOS","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"STD","STN":"STN","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"SZL","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"TND","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"TZS","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"UGX","USD":"US Dollar","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"XOF","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ZAR","ZMK":"ZMK","ZMW":"ZMW","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["om"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
