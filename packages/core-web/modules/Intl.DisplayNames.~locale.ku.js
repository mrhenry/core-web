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
(function(undefined) {
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ku").length
)) {
// Intl.DisplayNames.~locale.ku
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"ku":{"types":{"language":{"long":{"aa":"afarî","ab":"abxazî","ace":"açehî","ady":"adîgeyî","af":"afrîkansî","agq":"agq","ain":"aynuyî","ak":"ak","ale":"alêwîtî","am":"amharî","an":"aragonî","ar":"erebî","ar-001":"erebiya standard","as":"asamî","asa":"asa","ast":"astûrî","av":"avarî","ay":"aymarayî","az":"azerî","ba":"başkîrî","ban":"balînî","bas":"bas","be":"belarusî","bem":"bembayî","bez":"bez","bg":"bulgarî","bho":"bojpûrî","bi":"bîslamayî","bla":"blakfotî","bm":"bambarayî","bn":"bengalî","bo":"tîbetî","br":"bretonî","brx":"brx","bs":"bosnî","bug":"bugî","byn":"byn","ca":"katalanî","ccp":"ccp","ce":"çeçenî","ceb":"sebwanoyî","cgg":"cgg","ch":"çamoroyî","chk":"çûkî","chm":"marî","chr":"çerokî","chy":"çeyenî","ckb":"soranî","co":"korsîkayî","cs":"çekî","cu":"cu","cv":"çuvaşî","cy":"weylsî","da":"danmarkî","dav":"dav","de":"elmanî","de-AT":"elmanî (Awistirya)","de-CH":"elmanî (Swîsre)","dje":"dje","dsb":"sorbiya jêrîn","dua":"diwalayî","dv":"divehî","dyo":"dyo","dz":"conxayî","ebu":"ebu","ee":"eweyî","el":"yewnanî","en":"îngilîzî","en-AU":"îngilîzî (Awistralya)","en-CA":"îngilîzî (Kanada)","en-GB":"îngilîzî (Keyaniya Yekbûyî)","en-US":"îngilîzî (Dewletên Yekbûyî yên Amerîkayê)","eo":"esperantoyî","es":"spanî","es-419":"spanî (Amerîkaya Latînî)","es-ES":"spanî (Spanya)","es-MX":"spanî (Meksîk)","et":"estonî","eu":"baskî","ewo":"ewo","fa":"farisî","ff":"fulahî","fi":"fînî","fil":"fîlîpînoyî","fj":"fîjî","fo":"ferî","fr":"frensî","fr-CA":"frensî (Kanada)","fr-CH":"frensî (Swîsre)","frc":"frc","fur":"friyolî","fy":"frîsî","ga":"îrî","gd":"gaelîka skotî","gez":"gez","gil":"kîrîbatî","gl":"galîsî","gn":"guwaranî","gor":"gorontaloyî","gsw":"elmanîşî","gu":"gujaratî","guz":"guz","gv":"manksî","ha":"hawsayî","haw":"hawayî","he":"îbranî","hi":"hindî","hil":"hîlîgaynonî","hmn":"hmn","hr":"xirwatî","hsb":"sorbiya jorîn","ht":"haîtî","hu":"mecarî","hy":"ermenî","hz":"hereroyî","ia":"interlingua","id":"indonezî","ig":"îgboyî","ii":"ii","ilo":"îlokanoyî","inh":"îngûşî","io":"îdoyî","is":"îzlendî","it":"îtalî","iu":"înuîtî","ja":"japonî","jbo":"lojbanî","jgo":"jgo","jmc":"jmc","jv":"javayî","ka":"gurcî","kab":"kabîlî","kam":"kam","kde":"kde","kea":"kapverdî","khq":"khq","ki":"ki","kk":"qazaxî","kkj":"kkj","kl":"kalalîsûtî","kln":"kln","km":"ximêrî","kn":"kannadayî","ko":"koreyî","kok":"konkanî","ks":"keşmîrî","ksb":"ksb","ksf":"ksf","ksh":"rîpwarî","ku":"kurdî","kv":"komî","kw":"kornî","ky":"kirgizî","la":"la","lad":"ladînoyî","lag":"lag","lb":"luksembûrgî","lez":"lezgînî","lg":"lugandayî","li":"lîmbûrgî","lkt":"lakotayî","ln":"lingalayî","lo":"lawsî","lou":"lou","lrc":"luriya bakur","lt":"lîtwanî","lu":"lu","luo":"luo","luy":"luy","lv":"latviyayî","mad":"madurayî","mas":"masayî","mdf":"mokşayî","mer":"mer","mfe":"mfe","mg":"malagasî","mgh":"mgh","mgo":"mgo","mh":"marşalî","mi":"maorî","mic":"mîkmakî","min":"mînangkabawî","mk":"makedonî","ml":"malayalamî","mn":"mongolî","moh":"mohawkî","mr":"maratî","ms":"malezî","mt":"maltayî","mua":"mua","mul":"mul","my":"burmayî","myv":"erzayî","mzn":"mazenderanî","na":"nawrûyî","nap":"napolîtanî","naq":"naq","nb":"norwecî (bokmål)","nd":"nd","nds":"nds","nds-NL":"nds (Holenda)","ne":"nepalî","niu":"nîwî","nl":"holendî","nl-BE":"flamî","nmg":"nmg","nn":"norwecî (nynorsk)","nnh":"nnh","nso":"sotoyiya bakur","nus":"nus","nv":"navajoyî","ny":"ny","nyn":"nyn","oc":"oksîtanî","om":"oromoyî","or":"oriyayî","os":"osetî","pa":"puncabî","pam":"kapampanganî","pap":"papyamentoyî","pau":"palawî","pl":"polonî","prg":"prûsyayî","ps":"peştûyî","pt":"portugalî","pt-BR":"portugalî (Brazîl)","pt-PT":"portugalî (Portûgal)","qu":"keçwayî","rap":"rapanuyî","rar":"rarotongî","rm":"romancî","rn":"rn","ro":"romanî","ro-MD":"romanî (Moldova)","rof":"rof","root":"root","ru":"rusî","rup":"aromanî","rw":"kînyariwandayî","rwk":"rwk","sa":"sanskrîtî","sah":"sah","saq":"saq","sbp":"sbp","sc":"sardînî","scn":"sicîlî","sco":"skotî","sd":"sindhî","se":"samiya bakur","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"kîngalî","sk":"slovakî","sl":"slovenî","sm":"samoayî","smn":"samiya înarî","sn":"şonayî","so":"somalî","sq":"elbanî","sr":"sirbî","srn":"sirananî","ss":"swazî","st":"sotoyiya başûr","su":"sundanî","sv":"swêdî","sw":"swahîlî","sw-CD":"swahîlî (Kongo - Kînşasa)","swb":"komorî","syr":"siryanî","ta":"tamîlî","te":"telûgûyî","teo":"teo","tet":"tetûmî","tg":"tacikî","th":"tayî","ti":"tigrînî","tk":"tirkmenî","tlh":"klîngonî","tn":"tswanayî","to":"tongî","tpi":"tokpisinî","tr":"tirkî","trv":"tarokoyî","ts":"tsongayî","tt":"teterî","tum":"tumbukayî","tvl":"tuvalûyî","twq":"twq","ty":"tahîtî","tzm":"temazîxtî","udm":"udmurtî","ug":"oygurî","uk":"ukraynî","und":"und","ur":"urdûyî","uz":"ozbekî","vai":"vai","vi":"viyetnamî","vo":"volapûkî","vun":"vun","wa":"walonî","wae":"wae","war":"warayî","wo":"wolofî","xh":"xosayî","xog":"xog","yav":"yav","yi":"yidîşî","yo":"yorubayî","yue":"kantonî","zgh":"zgh","zh":"zh","zh-Hans":"zh (Hans)","zh-Hant":"zh (Hant)","zu":"zuluyî","zxx":"zxx","zza":"zazakî"},"short":{"az":"azerî","en-GB":"îngilîzî (KY)","en-US":"îngilîzî (DYA)"},"narrow":{}},"region":{"long":{"142":"Asya","143":"143","145":"145","150":"Ewropa","151":"Ewropaya Rojhilat","154":"154","155":"Ewropaya Rojava","202":"202","419":"Amerîkaya Latînî","001":"Cîhan","002":"Afrîka","003":"Amerîkaya Bakur","005":"Amerîkaya Başûr","009":"Okyanûsya","011":"011","013":"Amerîkaya Navîn","014":"014","015":"Afrîkaya Bakur","017":"017","018":"018","019":"Amerîka","021":"021","029":"Karîb","030":"030","034":"034","035":"035","039":"039","053":"Awistralasya","054":"Melanezya","057":"Herêma Mîkronezya","061":"Polînezya","AC":"AC","AD":"Andorra","AE":"Emîrtiyên Erebî yên Yekbûyî","AF":"Efxanistan","AG":"Antîgua û Berbûda","AI":"AI","AL":"Albanya","AM":"Ermenistan","AO":"Angola","AQ":"Antarktîka","AR":"Arjentîn","AS":"Samoaya Amerîkanî","AT":"Awistirya","AU":"Awistralya","AW":"Arûba","AX":"AX","AZ":"Azerbaycan","BA":"Bosniya û Herzegovîna","BB":"Barbados","BD":"Bangladeş","BE":"Belçîka","BF":"Burkîna Faso","BG":"Bulgaristan","BH":"Behreyn","BI":"Burundî","BJ":"Bênîn","BL":"Saint-Barthélemy","BM":"Bermûda","BN":"Brûney","BO":"Bolîvya","BQ":"BQ","BR":"Brazîl","BS":"Bahama","BT":"Bûtan","BV":"BV","BW":"Botswana","BY":"Belarûs","BZ":"Belîze","CA":"Kanada","CC":"CC","CD":"Kongo - Kînşasa","CF":"Komara Afrîkaya Navend","CG":"Kongo - Brazzaville","CH":"Swîsre","CI":"Peravê Diranfîl","CK":"Giravên Cook","CL":"Şîle","CM":"Kamerûn","CN":"Çîn","CO":"Kolombiya","CP":"CP","CR":"Kosta Rîka","CU":"Kûba","CV":"Kap Verde","CW":"CW","CX":"CX","CY":"Kîpros","CZ":"Çekya","DE":"Almanya","DG":"DG","DJ":"Cîbûtî","DK":"Danîmarka","DM":"Domînîka","DO":"Komara Domînîk","DZ":"Cezayir","EA":"EA","EC":"Ekuador","EE":"Estonya","EG":"Misir","EH":"Sahraya Rojava","ER":"Erîtrea","ES":"Spanya","ET":"Etiyopya","EU":"Yekîtiya Ewropayê","EZ":"EZ","FI":"Fînlenda","FJ":"Fîjî","FK":"Giravên Malvîn","FM":"Mîkronezya","FO":"Giravên Feroe","FR":"Fransa","GA":"Gabon","GB":"Keyaniya Yekbûyî","GD":"Grenada","GE":"Gurcistan","GF":"Guyanaya Fransî","GG":"GG","GH":"Gana","GI":"Cîbraltar","GL":"Grînlenda","GM":"Gambiya","GN":"Gîne","GP":"Guadeloupe","GQ":"Gîneya Rojbendî","GR":"Yewnanistan","GS":"GS","GT":"Guatemala","GU":"Guam","GW":"Gîne-Bissau","GY":"Guyana","HK":"HK","HM":"HM","HN":"Hondûras","HR":"Kroatya","HT":"Haîtî","HU":"Macaristan","IC":"Giravên Qenariyê","ID":"Îndonezya","IE":"Îrlenda","IL":"Îsraêl","IM":"Girava Man","IN":"Hindistan","IO":"IO","IQ":"Iraq","IR":"Îran","IS":"Îslenda","IT":"Îtalya","JE":"JE","JM":"Jamaîka","JO":"Urdun","JP":"Japon","KE":"Kenya","KG":"Qirgizistan","KH":"Kamboca","KI":"Kirîbatî","KM":"Komor","KN":"Saint Kitts û Nevîs","KP":"Korêya Bakur","KR":"Korêya Başûr","KW":"Kuweyt","KY":"Giravên Kaymanê","KZ":"Qazaxistan","LA":"Laos","LB":"Libnan","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Srî Lanka","LR":"Lîberya","LS":"Lesoto","LT":"Lîtvanya","LU":"Lûksembûrg","LV":"Letonya","LY":"Lîbya","MA":"Maroko","MC":"Monako","MD":"Moldova","ME":"Montenegro","MF":"MF","MG":"Madagaskar","MH":"Giravên Marşal","MK":"Makedonya","ML":"Malî","MM":"Myanmar (Birmanya)","MN":"Mongolya","MO":"MO","MP":"Giravên Bakurê Marianan","MQ":"Martinique","MR":"Morîtanya","MS":"MS","MT":"Malta","MU":"Maurîtius","MV":"Maldîv","MW":"Malawî","MX":"Meksîk","MY":"Malezya","MZ":"Mozambîk","NA":"Namîbya","NC":"Kaledonyaya Nû","NE":"Nîjer","NF":"Girava Norfolk","NG":"Nîjerya","NI":"Nîkaragua","NL":"Holenda","NO":"Norwêc","NP":"Nepal","NR":"Naûrû","NU":"Niûe","NZ":"Nû Zelenda","OM":"Oman","PA":"Panama","PE":"Perû","PF":"Polînezyaya Fransî","PG":"Papua Gîneya Nû","PH":"Filîpîn","PK":"Pakistan","PL":"Polonya","PM":"Saint-Pierre û Miquelon","PN":"Giravên Pitcairn","PR":"Porto Rîko","PS":"Xakên filistînî","PT":"Portûgal","PW":"Palau","PY":"Paraguay","QA":"Qeter","QO":"QO","RE":"Réunion","RO":"Romanya","RS":"Serbistan","RU":"Rûsya","RW":"Rwanda","SA":"Erebistana Siyûdî","SB":"Giravên Salomon","SC":"Seyşel","SD":"Sûdan","SE":"Swêd","SG":"Singapûr","SH":"SH","SI":"Slovenya","SJ":"SJ","SK":"Slovakya","SL":"Sierra Leone","SM":"San Marîno","SN":"Senegal","SO":"Somalya","SR":"Sûrînam","SS":"Sûdana Başûr","ST":"Sao Tome û Prînsîpe","SV":"El Salvador","SX":"SX","SY":"Sûrî","SZ":"Swazîlenda","TA":"TA","TC":"Giravên Turk û Kaîkos","TD":"Çad","TF":"TF","TG":"Togo","TH":"Taylenda","TJ":"Tacîkistan","TK":"Tokelau","TL":"Tîmora-Leste","TM":"Tirkmenistan","TN":"Tûnis","TO":"Tonga","TR":"Tirkiye","TT":"Trînîdad û Tobago","TV":"Tûvalû","TW":"Taywan","TZ":"Tanzanya","UA":"Ûkrayna","UG":"Ûganda","UM":"UM","UN":"Neteweyên Yekbûyî","US":"Dewletên Yekbûyî yên Amerîkayê","UY":"Ûrûguay","UZ":"Ûzbêkistan","VA":"Vatîkan","VC":"Saint Vincent û Giravên Grenadîn","VE":"Venezuela","VG":"VG","VI":"VI","VN":"Viyetnam","VU":"Vanûatû","WF":"Wallis û Futuna","WS":"Samoa","XA":"XA","XB":"XB","XK":"Kosovo","YE":"Yemen","YT":"YT","ZA":"Afrîkaya Başûr","ZM":"Zambiya","ZW":"Zîmbabwe","ZZ":"ZZ"},"short":{"GB":"KY","HK":"Hong Kong","MO":"Makao","PS":"Filistîn","US":"DYA"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"erebî","Armi":"Armi","Armn":"ermenî","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"bengalî","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Copt":"Copt","Cprt":"Cprt","Cyrl":"kirîlî","Deva":"devanagarî","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"gurcî","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"yewnanî","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"ximêrî","Khoj":"Khoj","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"latînî","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"mongolî","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"tîbetî","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"sembol","Zxxx":"ne nivîsandî","Zyyy":"hevpar","Zzzz":"nivîsa nenas"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"AED","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"AOA","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"AUD","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"BHD","BIF":"BIF","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"BWP","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"CAD","CDF":"CDF","CHE":"CHE","CHF":"CHF","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"CNY","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"CVE","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"DJF","DKK":"DKK","DOP":"DOP","DZD":"DZD","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"EGP","ERN":"ERN","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ETB","EUR":"ewro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"GBP","GEK":"GEK","GEL":"GEL","GHC":"GHC","GHS":"GHS","GIP":"GIP","GMD":"GMD","GNF":"GNF","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"INR","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"JPY","KES":"KES","KGS":"KGS","KHR":"KHR","KMF":"KMF","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"LRD","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"LYD","MAD":"MAD","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"MGA","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"MRO","MRU":"MRU","MTL":"MTL","MTP":"MTP","MUR":"MUR","MVP":"MVP","MVR":"MVR","MWK":"MWK","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"MZM","MZN":"MZN","NAD":"NAD","NGN":"NGN","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"RWF","SAR":"SAR","SBD":"SBD","SCR":"SCR","SDD":"SDD","SDG":"SDG","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"SHP","SIT":"SIT","SKK":"SKK","SLL":"SLL","SOS":"SOS","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"STD","STN":"STN","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"SZL","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"TND","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"TZS","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"UGX","USD":"USD","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"XOF","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ZAR","ZMK":"ZMK","ZMW":"ZMW","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["ku"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
