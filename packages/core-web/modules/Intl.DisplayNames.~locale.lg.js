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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("lg").length
)) {
// Intl.DisplayNames.~locale.lg
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"Lu-akaani","am":"Lu-amhariki","ar":"Luwarabu","ar-001":"Luwarabu (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"Lubelarusi","bem":"bem","bez":"bez","bg":"Lubulugariya","bm":"bm","bn":"Lubengali","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"Luceeke","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"Ludaaki","de-AT":"Ludaaki (Awusituriya)","de-CH":"Ludaaki (Switizirandi)","dje":"dje","doi":"doi","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"Lugereeki/Luyonaani","en":"Lungereza","en-AU":"Lungereza (Awusitureliya)","en-CA":"Lungereza (Kanada)","en-GB":"Lungereza (Bungereza)","en-US":"Lungereza (Amerika)","eo":"eo","es":"Lusipanya","es-419":"Lusipanya (419)","es-ES":"Lusipanya (Sipeyini)","es-MX":"Lusipanya (Mekisiko)","et":"et","eu":"eu","ewo":"ewo","fa":"Luperusi","fa-AF":"Luperusi (Afaganisitani)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"Lufalansa","fr-CA":"Lufalansa (Kanada)","fr-CH":"Lufalansa (Switizirandi)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"Luhawuza","haw":"haw","he":"he","hi":"Luhindu","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"Luhangare","hy":"hy","ia":"ia","id":"Luyindonezya","ig":"Luyibo","ii":"ii","is":"is","it":"Luyitale","ja":"Lujapani","jgo":"jgo","jmc":"jmc","jv":"Lunnajjava","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","kgp":"kgp","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"Lukme","kn":"kn","ko":"Lukoreya","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"Luganda","lij":"lij","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"Lumalayi","mt":"mt","mua":"mua","mul":"mul","my":"Lubbama","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Holandi)","ne":"Lunepali","nl":"Luholandi","nl-BE":"Luholandi (Bubirigi)","nmg":"nmg","nn":"nn","nnh":"nnh","no":"no","nus":"nus","nv":"nv","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"Lupunjabi","pcm":"pcm","pl":"Lupolandi","prg":"prg","ps":"ps","pt":"Lupotugiizi","pt-BR":"Lupotugiizi (Buraziiri)","pt-PT":"Lupotugiizi (Potugaali)","qu":"qu","rm":"rm","rn":"rn","ro":"Lulomaniya","ro-MD":"Lulomaniya (Molodova)","rof":"rof","ru":"Lulasa","rw":"Lunarwanda","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"Lusomaliya","sq":"sq","sr":"sr","st":"st","su":"su","sv":"Luswideni","sw":"sw","sw-CD":"sw (Kongo - Zayire)","ta":"Lutamiiru","te":"te","teo":"teo","tg":"tg","th":"Luttaayi","ti":"ti","tk":"tk","to":"to","tr":"Lutake","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"Luyukurayine","und":"und","ur":"Lu-urudu","uz":"uz","vai":"vai","vi":"Luvyetinaamu","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"Luyoruba","yue":"yue","zgh":"zgh","zh":"Lucayina","zh-Hans":"Lucayina (Hans)","zh-Hant":"Lucayina (Hant)","zu":"Luzzulu","zxx":"zxx"},"short":{"az":"az","en-GB":"Lungereza (Bungereza)","en-US":"Lungereza (Amerika)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Andora","AE":"Emireeti","AF":"Afaganisitani","AG":"Antigwa ne Barabuda","AI":"Angwila","AL":"Alibaniya","AM":"Arameniya","AO":"Angola","AQ":"AQ","AR":"Arigentina","AS":"Samowa omumerika","AT":"Awusituriya","AU":"Awusitureliya","AW":"Aruba","AX":"AX","AZ":"Azerebayijaani","BA":"Boziniya Hezegovina","BB":"Barabadosi","BD":"Bangaladesi","BE":"Bubirigi","BF":"Burukina Faso","BG":"Bulugariya","BH":"Baareeni","BI":"Burundi","BJ":"Benini","BL":"BL","BM":"Beremuda","BN":"Burunayi","BO":"Boliviya","BQ":"BQ","BR":"Buraziiri","BS":"Bahamasi","BT":"Butaani","BV":"BV","BW":"Botiswana","BY":"Belarusi","BZ":"Belize","CA":"Kanada","CC":"CC","CD":"Kongo - Zayire","CF":"Lipubulika eya Senturafiriki","CG":"Kongo","CH":"Switizirandi","CI":"Kote Divwa","CK":"Bizinga bya Kkuki","CL":"Cile","CM":"Kameruuni","CN":"Cayina","CO":"Kolombya","CP":"CP","CR":"Kosita Rika","CU":"Cuba","CV":"Bizinga by’e Kepu Veredi","CW":"CW","CX":"CX","CY":"Sipuriya","CZ":"Lipubulika ya Ceeka","DE":"Budaaki","DG":"DG","DJ":"Jjibuti","DK":"Denimaaka","DM":"Dominika","DO":"Lipubulika ya Dominika","DZ":"Aligerya","EA":"EA","EC":"Ekwado","EE":"Esitoniya","EG":"Misiri","EH":"EH","ER":"Eritureya","ES":"Sipeyini","ET":"Esyopya","EU":"EU","EZ":"EZ","FI":"Finilandi","FJ":"Fiji","FK":"Bizinga by’eFalikalandi","FM":"Mikuronezya","FO":"FO","FR":"Bufalansa","GA":"Gaboni","GB":"Bungereza","GD":"Gurenada","GE":"Gyogya","GF":"Guyana enfalansa","GG":"GG","GH":"Gana","GI":"Giburalita","GL":"Gurenelandi","GM":"Gambya","GN":"Gini","GP":"Gwadalupe","GQ":"Gayana ey’oku ekweta","GR":"Bugereeki/Buyonaani","GS":"GS","GT":"Gwatemala","GU":"Gwamu","GW":"Gini-Bisawu","GY":"Gayana","HK":"HK","HM":"HM","HN":"Hundurasi","HR":"Kurowesya","HT":"Hayiti","HU":"Hangare","IC":"IC","ID":"Yindonezya","IE":"Ayalandi","IL":"Yisirayeri","IM":"IM","IN":"Buyindi","IO":"Bizinga by’eCago","IQ":"Yiraaka","IR":"Yiraani","IS":"Ayisirandi","IT":"Yitale","JE":"JE","JM":"Jamayika","JO":"Yorodani","JP":"Japani","KE":"Kenya","KG":"Kirigizisitaani","KH":"Kambodya","KI":"Kiribati","KM":"Bizinga by’eKomoro","KN":"Senti Kitisi ne Nevisi","KP":"Koreya ey’omumambuka","KR":"Koreya ey’omumaserengeta","KW":"Kuweti","KY":"Bizinga ebya Kayimaani","KZ":"Kazakisitaani","LA":"Lawosi","LB":"Lebanoni","LC":"Senti Luciya","LI":"Licitensitayini","LK":"Sirilanka","LR":"Liberya","LS":"Lesoso","LT":"Lisuwenya","LU":"Lukisembaaga","LV":"Lativya","LY":"Libya","MA":"Moroko","MC":"Monako","MD":"Molodova","ME":"ME","MF":"MF","MG":"Madagasika","MH":"Bizinga bya Mariso","MK":"MK","ML":"Mali","MM":"Myanima","MN":"Mongoliya","MO":"MO","MP":"Bizinga bya Mariyana eby’omumambuka","MQ":"Maritiniiki","MR":"Mawulitenya","MS":"Monteseraati","MT":"Malita","MU":"Mawulisyasi","MV":"Bizinga by’eMalidive","MW":"Malawi","MX":"Mekisiko","MY":"Malezya","MZ":"Mozambiiki","NA":"Namibiya","NC":"Kaledonya mupya","NE":"Nije","NF":"Kizinga ky’eNorofoko","NG":"Nayijerya","NI":"Nikaraguwa","NL":"Holandi","NO":"Nowe","NP":"Nepalo","NR":"Nawuru","NU":"Niyuwe","NZ":"Niyuziirandi","OM":"Omaani","PA":"Panama","PE":"Peru","PF":"Polinesiya enfalansa","PG":"Papwa Nyugini","PH":"Bizinga bya Firipino","PK":"Pakisitaani","PL":"Polandi","PM":"Senti Piyere ne Mikeloni","PN":"Pitikeeni","PR":"Potoriko","PS":"Palesitayini","PT":"Potugaali","PW":"Palawu","PY":"Paragwayi","QA":"Kataa","QO":"QO","RE":"Leyunyoni","RO":"Lomaniya","RS":"RS","RU":"Lasa","RW":"Rwanda","SA":"Sawudarebya - Buwarabu","SB":"Bizanga by’eSolomooni","SC":"Sesere","SD":"Sudaani","SE":"Swideni","SG":"Singapowa","SH":"Senti Herena","SI":"Sirovenya","SJ":"SJ","SK":"Sirovakya","SL":"Siyeralewone","SM":"Sanimarino","SN":"Senegaalo","SO":"Somaliya","SR":"Surinaamu","SS":"SS","ST":"Sanitome ne Purincipe","SV":"El salivado","SX":"SX","SY":"Siriya","SZ":"Swazirandi","TA":"TA","TC":"Bizinga by’eTaaka ne Kayikosi","TD":"Caadi","TF":"TF","TG":"Togo","TH":"Tayirandi","TJ":"Tajikisitaani","TK":"Tokelawu","TL":"Timowa","TM":"Takimenesitaani","TN":"Tunisya","TO":"Tonga","TR":"Ttake","TT":"Turindaadi ne Tobago","TV":"Tuvalu","TW":"Tayiwani","TZ":"Tanzaniya","UA":"Yukurayine","UG":"Yuganda","UM":"UM","UN":"UN","US":"Amerika","UY":"Wurugwayi","UZ":"Wuzibekisitaani","VA":"Vatikaani","VC":"Senti Vinsenti ne Gurendadiini","VE":"Venzwera","VG":"Bizinga ebya Virigini ebitwalibwa Bungereza","VI":"Bizinga bya Virigini eby’Amerika","VN":"Vyetinaamu","VU":"Vanawuwatu","WF":"Walisi ne Futuna","WS":"Samowa","XA":"XA","XB":"XB","XK":"XK","YE":"Yemeni","YT":"Mayotte","ZA":"Sawusafirika","ZM":"Zambya","ZW":"Zimbabwe","ZZ":"ZZ"},"short":{"GB":"Bungereza","HK":"HK","MO":"MO","PS":"Palesitayini","US":"Amerika"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Diraamu eya Emireeti","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"Kwanza ey’Angola","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"Doola ey’Awusiturelya","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"Dinaali ey’eBaareeni","BIF":"Faranga ey’eburundi","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"Pula ey’eBotiswana","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"Doola ey’eKanada","CDF":"Faranga ey’eKongo","CHE":"CHE","CHF":"Faranga ey’eSwitizirandi","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Yuwani Reniminibi ey’eCayina","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"Esikudo ey’Keepu Veredi","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"Faranga ey’eJjibuti","DKK":"DKK","DOP":"DOP","DZD":"Dinaali ey’Aligerya","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Pawundi ey’eMisiri","ERN":"Nakifa ey’Eritureya","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Biiru ey’Esyopya","EUR":"Yuro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"Pawundi ey’eBungereza","GEK":"GEK","GEL":"GEL","GHC":"Sedi ey’eGana","GHS":"GHS","GIP":"GIP","GMD":"Dalasi ey’eGambya","GNF":"GNF","GNS":"Faranga ey’eGini","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Rupiya ey’eBuyindi","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Yeni ey’eJapani","KES":"Silingi ey’eKenya","KGS":"KGS","KHR":"KHR","KMF":"Faranga ey’eKomoro","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"Doola ey’eLiberya","LSL":"Loti ey’eLesoso","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Dinaali ey’eLibya","MAD":"Diraamu ey’eMoroko","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"Faranga ey’eMalagase","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"Wugwiya ey’eMawritenya (1973–2017)","MRU":"Wugwiya ey’eMawritenya","MTL":"MTL","MTP":"MTP","MUR":"Rupiya ey’eMawurisyasi","MVP":"MVP","MVR":"MVR","MWK":"Kwaca ey’eMalawi","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"Metikaali ey’eMozambiiki","MZN":"MZN","NAD":"Doola ey’eNamibiya","NGN":"Nayira ey’eNayijerya","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"Faranga ey’eRwanda","SAR":"Riyaali ey’eBuwarabu","SBD":"SBD","SCR":"Rupiya ey’eSesere","SDD":"SDD","SDG":"Dinaali ey’eSudaani","SDP":"Pawundi ey’eSudaani","SEK":"SEK","SGD":"SGD","SHP":"Pawundi ey’eSenti Herena","SIT":"SIT","SKK":"SKK","SLL":"Lewone","SOS":"Silingi ey’eSomaliya","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"Dobura ey’eSantome ne Purincipe (1977–2017)","STN":"Dobura ey’eSantome ne Purincipe","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"Lilangeni","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"Dinaali ey’eTunizya","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"Silingi ey’eTanzaniya","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"Silingi eya Yuganda","USD":"Doola ey’Amerika","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"Faranga ey’omu Afirika eya wakati","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Faranga ey’omu Afirika ey’ebugwanjuba","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Randi ey’eSawusafirika","ZMK":"Kwaca ey’eZambya (1968–2012)","ZMW":"Kwaca ey’eZambya","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Doola ey’eZimbabwe","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"lg"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
