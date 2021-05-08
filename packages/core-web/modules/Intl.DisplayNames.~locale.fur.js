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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("fur").length
)) {
// Intl.DisplayNames.~locale.fur
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"afar","ab":"abcazian","ae":"avestan","af":"afrikaans","agq":"agq","ak":"ak","am":"amaric","an":"aragonês","ang":"vieri inglês","ar":"arap","ar-001":"arap (Mont)","arc":"aramaic","as":"assamês","asa":"asa","ast":"asturian","av":"avar","ay":"aymarà","az":"azerbaijani","bas":"bas","be":"bielorùs","bem":"bem","bez":"bez","bg":"bulgar","bm":"bm","bn":"bengalês","bo":"tibetan","br":"breton","brx":"brx","bs":"bosniac","ca":"catalan","ccp":"ccp","ce":"cecen","ceb":"ceb","cgg":"cgg","ch":"chamorro","chr":"chr","ckb":"ckb","co":"cors","cop":"coptic","cr":"cree","cs":"cec","cu":"sclâf de glesie","cy":"galês","da":"danês","dav":"dav","de":"todesc","de-AT":"todesc de Austrie","de-CH":"alt todesc de Svuizare","den":"sclâf","dje":"dje","doi":"doi","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","egy":"vieri egjizian","el":"grêc","en":"inglês","en-AU":"inglês australian","en-CA":"inglês canadês","en-GB":"inglês britanic","en-US":"ingles merecan","eo":"esperanto","es":"spagnûl","es-419":"spagnûl de Americhe Latine","es-ES":"spagnûl iberic","es-MX":"spagnûl (Messic)","et":"eston","eu":"basc","ewo":"ewo","fa":"persian","fa-AF":"persian (Afghanistan)","ff":"fulah","fi":"finlandês","fil":"filipin","fj":"fizian","fo":"faroês","fr":"francês","fr-CA":"francês dal Canade","fr-CH":"francês de Svuizare","frc":"frc","fro":"vieri francês","fur":"furlan","fy":"frisian","ga":"gaelic irlandês","gd":"gaelic scozês","gl":"galizian","gn":"guaranì","got":"gotic","grc":"vieri grêc","gsw":"gsw","gu":"gujarati","guz":"guz","gv":"manx","ha":"ha","haw":"haw","he":"ebraic","hi":"hindi","hmn":"hmn","hr":"cravuat","hsb":"hsb","ht":"haitian","hu":"ongjarês","hy":"armen","ia":"ia","id":"indonesian","ig":"igbo","ii":"ii","ik":"inupiaq","io":"ido","is":"islandês","it":"talian","iu":"inuktitut","ja":"gjaponês","jgo":"jgo","jmc":"jmc","jv":"jv","ka":"gjeorgjian","kab":"kab","kam":"kam","kde":"kde","kea":"kea","kgp":"kgp","khq":"khq","ki":"ki","kk":"kazac","kkj":"kkj","kl":"kalaallisut","kln":"kln","km":"khmer","kn":"kannada","ko":"corean","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"curd","kw":"cornualiês","ky":"ky","la":"latin","lad":"ladin","lag":"lag","lb":"lussemburghês","lg":"lg","li":"limburghês","lij":"lij","lkt":"lkt","ln":"lingala","lo":"lao","lou":"lou","lrc":"lrc","lt":"lituan","lu":"lu","luo":"luo","luy":"luy","lv":"leton","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"malagasy","mgh":"mgh","mgo":"mgo","mi":"maori","mk":"macedon","ml":"malayalam","mn":"mongul","mni":"mni","mr":"marathi","ms":"malês","mt":"maltês","mua":"mua","mul":"lenghis multiplis","mwl":"mirandês","my":"my","mzn":"mzn","nap":"napoletan","naq":"naq","nb":"norvegjês bokmål","nd":"ndebele setentrionâl","nds":"bas todesc","nds-NL":"bas todesc (Paîs bas)","ne":"nepalês","nl":"olandês","nl-BE":"flamant","nmg":"nmg","nn":"norvegjês nynorsk","nnh":"nnh","no":"norvegjês","non":"vieri norvegjês","nso":"sotho setentrionâl","nus":"nus","nv":"navajo","ny":"ny","nyn":"nyn","oc":"ocitan","om":"om","or":"oriya","os":"osetic","ota":"turc otoman","pa":"punjabi","pap":"papiamento","pcm":"pcm","peo":"vieri persian","pl":"polac","prg":"prg","pro":"vieri provenzâl","ps":"pashto","pt":"portughês","pt-BR":"portughês brasilian","pt-PT":"portughês iberic","qu":"quechua","rm":"rumanç","rn":"rn","ro":"romen","ro-MD":"moldâf","rof":"rof","ru":"rus","rw":"rw","rwk":"rwk","sa":"sanscrit","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sc":"sardegnûl","scn":"sicilian","sco":"scozês","sd":"sindhi","se":"sami setentrionâl","seh":"seh","ses":"ses","sg":"sango","sga":"vieri irlandês","shi":"shi","si":"sinalês","sk":"slovac","sl":"sloven","sm":"samoan","smn":"smn","sn":"sn","so":"somal","sq":"albanês","sr":"serp","ss":"swati","st":"sotho meridionâl","su":"sundanês","sux":"sumeric","sv":"svedês","sw":"swahili","sw-CD":"swahili (Republiche Democratiche dal Congo)","ta":"tamil","te":"telegu","teo":"teo","tet":"tetum","tg":"tagic","th":"thai","ti":"ti","tk":"turcmen","tl":"tagalog","to":"to","tr":"turc","tt":"tartar","twq":"twq","ty":"tahitian","tzm":"tzm","ug":"uigur","uk":"ucrain","und":"indeterminade","ur":"urdu","uz":"uzbec","vai":"vai","ve":"venda","vi":"vietnamite","vo":"vo","vun":"vun","wa":"valon","wae":"wae","wo":"wolof","xh":"xhosa","xog":"xog","yav":"yav","yi":"yiddish","yo":"yoruba","yue":"yue","zgh":"zgh","zh":"cinês","zh-Hans":"cinês semplificât","zh-Hant":"cinês tradizionâl","zu":"zulu","zxx":"zxx"},"short":{"az":"azerbaijani","en-GB":"inglês britanic","en-US":"ingles merecan"},"narrow":{}},"region":{"long":{"142":"Asie","143":"Asie centrâl","145":"Asie ocidentâl","150":"Europe","151":"Europe orientâl","154":"Europe setentrionâl","155":"Europe ocidentâl","202":"202","419":"Americhe latine","001":"Mont","002":"Afriche","003":"Americhe dal Nord","005":"Americhe meridionâl","009":"Oceanie","011":"Afriche ocidentâl","013":"Americhe centrâl","014":"Afriche orientâl","015":"Afriche setentrionâl","017":"Afriche di mieç","018":"Afriche meridionâl","019":"Americhis","021":"Americhe setentrionâl","029":"caraibic","030":"Asie orientâl","034":"Asie meridionâl","035":"Asie sud orientâl","039":"Europe meridionâl","053":"Australie e Gnove Zelande","054":"Melanesie","057":"Regjon de Micronesie","061":"Polinesie","AC":"AC","AD":"Andorra","AE":"Emirâts araps unîts","AF":"Afghanistan","AG":"Antigua e Barbuda","AI":"Anguilla","AL":"Albanie","AM":"Armenie","AO":"Angola","AQ":"Antartic","AR":"Argjentine","AS":"Samoa merecanis","AT":"Austrie","AU":"Australie","AW":"Aruba","AX":"Isulis Aland","AZ":"Azerbaigian","BA":"Bosnie e Ercegovine","BB":"Barbados","BD":"Bangladesh","BE":"Belgjiche","BF":"Burkina Faso","BG":"Bulgarie","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"Sant Barthélemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivie","BQ":"BQ","BR":"Brasîl","BS":"Bahamas","BT":"Bhutan","BV":"Isule Bouvet","BW":"Botswana","BY":"Bielorussie","BZ":"Belize","CA":"Canade","CC":"Isulis Cocos","CD":"Republiche Democratiche dal Congo","CF":"Republiche centri africane","CG":"Congo - Brazzaville","CH":"Svuizare","CI":"Cueste di Avoli","CK":"Isulis Cook","CL":"Cile","CM":"Camerun","CN":"Cine","CO":"Colombie","CP":"Isule Clipperton","CR":"Costa Rica","CU":"Cuba","CV":"Cjâf vert","CW":"CW","CX":"Isule Christmas","CY":"Cipri","CZ":"Republiche ceche","DE":"Gjermanie","DG":"Diego Garcia","DJ":"Gibuti","DK":"Danimarcje","DM":"Dominiche","DO":"Republiche dominicane","DZ":"Alzerie","EA":"Ceuta e Melilla","EC":"Ecuador","EE":"Estonie","EG":"Egjit","EH":"Sahara ocidentâl","ER":"Eritree","ES":"Spagne","ET":"Etiopie","EU":"Union europeane","EZ":"EZ","FI":"Finlandie","FJ":"Fizi","FK":"Isulis Falkland","FM":"Micronesie","FO":"Isulis Faroe","FR":"France","GA":"Gabon","GB":"Ream unît","GD":"Grenada","GE":"Gjeorgjie","GF":"Guiana francês","GG":"Guernsey","GH":"Ghana","GI":"Gjibraltar","GL":"Groenlande","GM":"Gambia","GN":"Guinee","GP":"Guadalupe","GQ":"Guinee ecuatoriâl","GR":"Grecie","GS":"Georgia dal Sud e Isulis Sandwich dal Sud","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Regjon aministrative speciâl de Cine di Hong Kong","HM":"Isule Heard e Isulis McDonald","HN":"Honduras","HR":"Cravuazie","HT":"Haiti","HU":"Ongjarie","IC":"Isulis Canariis","ID":"Indonesie","IE":"Irlande","IL":"Israêl","IM":"Isule di Man","IN":"India","IO":"Teritori britanic dal Ocean Indian","IQ":"Iraq","IR":"Iran","IS":"Islande","IT":"Italie","JE":"Jersey","JM":"Gjamaiche","JO":"Jordanie","JP":"Gjapon","KE":"Kenya","KG":"Kirghizstan","KH":"Camboze","KI":"Kiribati","KM":"Comoris","KN":"San Kitts e Nevis","KP":"Coree dal nord","KR":"Coree dal sud","KW":"Kuwait","KY":"Isulis Cayman","KZ":"Kazachistan","LA":"Laos","LB":"Liban","LC":"Sante Lusie","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberie","LS":"Lesotho","LT":"Lituanie","LU":"Lussemburc","LV":"Letonie","LY":"Libie","MA":"Maroc","MC":"Monaco","MD":"Moldavie","ME":"Montenegro","MF":"Sant Martin","MG":"Madagascar","MH":"Isulis Marshall","MK":"MK","ML":"Mali","MM":"Birmanie","MN":"Mongolie","MO":"Regjon aministrative speciâl de Cine di Macao","MP":"Isulis Mariana dal Nord","MQ":"Martiniche","MR":"Mauritanie","MS":"Montserrat","MT":"Malta","MU":"Maurizi","MV":"Maldivis","MW":"Malawi","MX":"Messic","MY":"Malaysia","MZ":"Mozambic","NA":"Namibie","NC":"Gnove Caledonie","NE":"Niger","NF":"Isole Norfolk","NG":"Nigerie","NI":"Nicaragua","NL":"Paîs bas","NO":"Norvegje","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"Gnove Zelande","OM":"Oman","PA":"Panamà","PE":"Perù","PF":"Polinesie francês","PG":"Papue Gnove Guinee","PH":"Filipinis","PK":"Pakistan","PL":"Polonie","PM":"San Pierre e Miquelon","PN":"Pitcairn","PR":"Porto Rico","PS":"Teritoris palestinês","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","QO":"Oceanie periferiche","RE":"Reunion","RO":"Romanie","RS":"Serbie","RU":"Russie","RW":"Ruande","SA":"Arabie Saudide","SB":"Isulis Salomon","SC":"Seychelles","SD":"Sudan","SE":"Svezie","SG":"Singapore","SH":"Sante Eline","SI":"Slovenie","SJ":"Svalbard e Jan Mayen","SK":"Slovachie","SL":"Sierra Leone","SM":"San Marin","SN":"Senegal","SO":"Somalie","SR":"Suriname","SS":"SS","ST":"Sao Tomè e Principe","SV":"El Salvador","SX":"SX","SY":"Sirie","SZ":"Swaziland","TA":"Tristan da Cunha","TC":"Isulis Turks e Caicos","TD":"Çad","TF":"Teritoris meridionâi francês","TG":"Togo","TH":"Tailandie","TJ":"Tazikistan","TK":"Tokelau","TL":"Timor orientâl","TM":"Turkmenistan","TN":"Tunisie","TO":"Tonga","TR":"Turchie","TT":"Trinidad e Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzanie","UA":"Ucraine","UG":"Uganda","UM":"Isulis periferichis minôrs dai Stâts Unîts","UN":"UN","US":"Stâts Unîts","UY":"Uruguay","UZ":"Uzbechistan","VA":"Vatican","VC":"San Vincent e lis Grenadinis","VE":"Venezuela","VG":"Isulis vergjinis britanichis","VI":"Isulis vergjinis americanis","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis e Futuna","WS":"Samoa","XA":"XA","XB":"XB","XK":"XK","YE":"Yemen","YT":"Mayotte","ZA":"Sud Afriche","ZM":"Zambia","ZW":"Zimbabwe","ZZ":"Regjon no cognossude o no valide"},"short":{"GB":"Ream unît","HK":"Hong Kong","MO":"Macao","PS":"Teritoris palestinês","US":"Stâts Unîts"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"arap","Aran":"Aran","Armi":"Armi","Armn":"armen","Avst":"Avst","Bali":"balinês","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"bengalês","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Braille","Bugi":"buginês","Buhd":"Buhd","Cakm":"Cakm","Cans":"Silabari unificât aborigjens canadês","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"copt","Cprt":"cipriot","Cyrl":"cirilic","Cyrs":"cirilic dal vieri slavonic de glesie","Deva":"devanagari","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyd":"demotic egjizian","Egyh":"jeratic egjizian","Egyp":"jeroglifics egjizians","Elba":"Elba","Elym":"Elym","Ethi":"etiopic","Geor":"georgjian","Glag":"glagolitic","Gong":"Gong","Gonm":"Gonm","Goth":"gotic","Gran":"Gran","Grek":"grêc","Gujr":"gujarati","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"han","Hano":"Hano","Hans":"Han semplificât","Hant":"Han tradizionâl","Hatr":"Hatr","Hebr":"ebreu","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"katakana o hiragana","Hung":"vieri ongjarês","Ital":"vieri italic","Jamo":"Jamo","Java":"gjavanês","Jpan":"gjaponês","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"khmer","Khoj":"Khoj","Kits":"Kits","Knda":"kannada","Kore":"corean","Kthi":"Kthi","Lana":"Lana","Laoo":"lao","Latf":"latin Fraktur","Latg":"latin gaelic","Latn":"latin","Lepc":"Lepc","Limb":"Limb","Lina":"lineâr A","Linb":"lineâr B","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Maya":"jeroglifics Maya","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"malayalam","Modi":"Modi","Mong":"mongul","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"myanmar","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"oriya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"runic","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"sinhala","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"siriac","Syre":"siriac Estrangelo","Syrj":"siriac ocidentâl","Syrn":"siriac orientâl","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"tamil","Tang":"Tang","Tavt":"Tavt","Telu":"telegu","Tfng":"Tfng","Tglg":"tagalog","Thaa":"thaana","Thai":"thai","Tibt":"tibetan","Tirh":"Tirh","Ugar":"ugaritic","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"vieri persian","Xsux":"cuneiform sumeric-acadic","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"codiç pes lenghis no scritis","Zyyy":"comun","Zzzz":"codiç par scrituris no codificadis"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"AED","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"Dram armen","ANG":"ANG","AOA":"AOA","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"Peso argjentin","ATS":"Selin austriac","AUD":"dolar australian","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"Franc de Belgjiche","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"BHD","BIF":"Franc burundês","BMD":"BMD","BND":"Dolar dal Brunei","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"real brasilian","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"BWP","BYB":"BYB","BYN":"Rubli bielorùs","BYR":"Rubli bielorùs (2000–2016)","BZD":"BZD","CAD":"dolar canadês","CDF":"CDF","CHE":"CHE","CHF":"franc svuizar","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"yuan cinês","COP":"COP","COU":"COU","CRC":"CRC","CSD":"Vieri dinar serp","CSK":"CSK","CUC":"CUC","CUP":"Peso cuban","CVE":"CVE","CYP":"CYP","CZK":"Corone de Republiche Ceche","DDM":"DDM","DEM":"Marc todesc","DJF":"DJF","DKK":"corone danese","DOP":"DOP","DZD":"Dinar algerin","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"EGP","ERN":"ERN","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ETB","EUR":"euro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"Franc francês","GBP":"sterline britaniche","GEK":"GEK","GEL":"GEL","GHC":"GHC","GHS":"GHS","GIP":"GIP","GMD":"GMD","GNF":"GNF","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"dolar di Hong Kong","HNL":"HNL","HRD":"Dinar cravuat","HRK":"Kuna cravuate","HTG":"HTG","HUF":"HUF","IDR":"rupiah indonesiane","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"rupie indiane","IQD":"IQD","IRR":"Rial iranian","ISJ":"ISJ","ISK":"ISK","ITL":"Lire taliane","JMD":"JMD","JOD":"JOD","JPY":"yen gjaponês","KES":"KES","KGS":"KGS","KHR":"KHR","KMF":"KMF","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"won de Coree dal Sud","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"LRD","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"Lats leton","LVR":"LVR","LYD":"LYD","MAD":"MAD","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"MGA","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"MRO","MRU":"MRU","MTL":"MTL","MTP":"MTP","MUR":"MUR","MVP":"MVP","MVR":"MVR","MWK":"MWK","MXN":"peso messican","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"MZM","MZN":"MZN","NAD":"Dolar namibian","NGN":"NGN","NIC":"NIC","NIO":"Córdoba oro nicaraguan","NLG":"NLG","NOK":"corone norvegjese","NPR":"NPR","NZD":"Dollar neozelandês","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"Rupie pachistane","PLN":"zloty polac","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"Dinar serp","RUB":"rubli rus","RUR":"RUR","RWF":"RWF","SAR":"riyal de Arabie Saudite","SBD":"SBD","SCR":"SCR","SDD":"SDD","SDG":"SDG","SDP":"SDP","SEK":"corone svedese","SGD":"SGD","SHP":"SHP","SIT":"Talar sloven","SKK":"Corone slovache","SLL":"SLL","SOS":"SOS","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"STD","STN":"STN","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"SZL","THB":"baht tailandês","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"TND","TOP":"TOP","TPE":"TPE","TRL":"Viere Lire turche","TRY":"lire turche","TTD":"TTD","TWD":"gnûf dolar taiwanês","TZS":"TZS","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"UGX","USD":"dolar american","USN":"Dolar american (prossime zornade)","USS":"Dolar american (stesse zornade)","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"Arint","XAU":"Aur","XBA":"Unitât composite europeane","XBB":"Unitât monetarie europeane","XBC":"Unitât di acont europeane (XBC)","XBD":"Unitât di acont europeane (XBD)","XCD":"XCD","XDR":"Dirits speciâi di incas","XEU":"XEU","XFO":"Franc aur francês","XFU":"Franc UIC francês","XOF":"XOF","XPD":"Paladi","XPF":"XPF","XPT":"Platin","XRE":"fonts RINET","XSU":"XSU","XTS":"codiç di verifiche de monede","XUA":"XUA","XXX":"Monede no valide o no cognossude","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"rand sudafrican","ZMK":"ZMK","ZMW":"ZMW","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"fur"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
