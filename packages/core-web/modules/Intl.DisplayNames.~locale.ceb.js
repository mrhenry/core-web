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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ceb").length
)) {
// Intl.DisplayNames.~locale.ceb
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"ak","am":"am","ar":"Arabic","ar-001":"Modernong Tamdanang Arabic","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"be","bem":"bem","bez":"bez","bg":"bg","bm":"bm","bn":"Bangla","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"Binisaya","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"cs","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"Aleman","de-AT":"Austriano nga Aleman","de-CH":"Swiss nga Taas nga Aleman","dje":"dje","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"el","en":"Ingles","en-AU":"Ingles sa Australia","en-CA":"Ingles sa Canada","en-GB":"Britanikong Ingles","en-US":"Ingles sa Amerika","eo":"eo","es":"Espanyol","es-419":"Espanyol sa Latin Amerika","es-ES":"Espanyol sa Europe","es-MX":"Espanyol sa Mexico","et":"et","eu":"eu","ewo":"ewo","fa":"fa","fa-AF":"fa (Afghanistan)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"Pranses","fr-CA":"Pranses sa Canada","fr-CH":"Swiss nga Pranses","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"ha","haw":"haw","he":"he","hi":"Hindi","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"hu","hy":"hy","ia":"ia","id":"Indonesian","ig":"ig","ii":"ii","is":"is","it":"Italiano","ja":"Hinapon","jgo":"jgo","jmc":"jmc","jv":"jv","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"km","kn":"kn","ko":"Korean","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"ms","mt":"mt","mua":"mua","mul":"mul","my":"my","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Netherlands)","ne":"ne","nl":"Dutch","nl-BE":"Flemish","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"pa","pcm":"pcm","pl":"Polish","prg":"prg","ps":"ps","pt":"Portuguese","pt-BR":"Brazilyanong Portuguese","pt-PT":"Portuguese sa Europe","qu":"qu","rm":"rm","rn":"rn","ro":"ro","ro-MD":"ro (Moldova)","rof":"rof","root":"root","ru":"Ruso","rw":"rw","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"so","sq":"sq","sr":"sr","st":"st","su":"su","sv":"sv","sw":"sw","sw-CD":"sw (Congo - Kinshasa)","ta":"ta","te":"te","teo":"teo","tg":"tg","th":"Thai","ti":"ti","tk":"tk","to":"to","tr":"Turkish","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"uk","und":"Wala Mailhing Lengguwahe","ur":"ur","uz":"uz","vai":"vai","vi":"vi","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"yo","yue":"yue","zgh":"zgh","zh":"Inintsik","zh-Hans":"Pinasimpleng Inintsik","zh-Hant":"Tradisyonal nga Ininstsik","zu":"zu","zxx":"zxx"},"short":{"az":"az","en-GB":"Ingles sa UK","en-US":"Ingles sa US"},"narrow":{}},"region":{"long":{"142":"Asya","143":"Central Asia","145":"Western Asia","150":"Europe","151":"Eastern Europe","154":"Northern Europe","155":"Western Europe","202":"Sub-Saharan Africa","419":"Latin America","001":"Kalibutan","002":"Africa","003":"North America","005":"South America","009":"Oceania","011":"Western Africa","013":"Central America","014":"Eastern Africa","015":"Northern Africa","017":"Middle Africa","018":"Southern Africa","019":"Mga Amerika","021":"Northern America","029":"Caribbean","030":"Eastern Asia","034":"Southern Asia","035":"Southeast Asia","039":"Southern Europe","053":"Australasia","054":"Melanesia","057":"Micronesian Region","061":"Polynesia","AC":"Ascension Island","AD":"Andorra","AE":"United Arab Emirates","AF":"Afghanistan","AG":"Antigua & Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"Antarctica","AR":"Argentina","AS":"American Samoa","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"Aland Islands","AZ":"Azerbaijan","BA":"Bosnia & Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"St. Barthelemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"Caribbean Netherlands","BR":"Brazil","BS":"Bahamas","BT":"Bhutan","BV":"Bouvet Island","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Cocos (Keeling) Islands","CD":"Congo - Kinshasa","CF":"Central African Republic","CG":"Congo - Brazzaville","CH":"Switzerland","CI":"Cote d’Ivoire","CK":"Cook Islands","CL":"Chile","CM":"Cameroon","CN":"Tsina","CO":"Colombia","CP":"Clipperton Island","CR":"Costa Rica","CU":"Cuba","CV":"Cape Verde","CW":"Curacao","CX":"Christmas Island","CY":"Cyprus","CZ":"Czechia","DE":"Alemanya","DG":"Diego Garcia","DJ":"Djibouti","DK":"Denmark","DM":"Dominica","DO":"Dominican Republic","DZ":"Algeria","EA":"Ceuta & Melilla","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"Western Sahara","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","EU":"European Union","EZ":"Eurozone","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"Faroe Islands","FR":"Pransya","GA":"Gabon","GB":"United Kingdom","GD":"Grenada","GE":"Georgia","GF":"French Guiana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Equatorial Guinea","GR":"Greece","GS":"South Georgia & South Sandwich Islands","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hong Kong SAR China","HM":"Heard & McDonald Islands","HN":"Honduras","HR":"Croatia","HT":"Haiti","HU":"Hungary","IC":"Canary Islands","ID":"Indonesia","IE":"Ireland","IL":"Israel","IM":"Isle of Man","IN":"India","IO":"British Indian Ocean Territory","IQ":"Iraq","IR":"Iran","IS":"Iceland","IT":"Italya","JE":"Jersey","JM":"Jamaica","JO":"Jordan","JP":"Japan","KE":"Kenya","KG":"Kyrgyzstan","KH":"Cambodia","KI":"Kiribati","KM":"Comoros","KN":"St. Kitts & Nevis","KP":"North Korea","KR":"South Korea","KW":"Kuwait","KY":"Cayman Islands","KZ":"Kazakhstan","LA":"Laos","LB":"Lebanon","LC":"St. Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libya","MA":"Morocco","MC":"Monaco","MD":"Moldova","ME":"Montenegro","MF":"St. Martin","MG":"Madagascar","MH":"Marshall Islands","MK":"North Macedonia","ML":"Mali","MM":"Myanmar (Burma)","MN":"Mongolia","MO":"Macao SAR China","MP":"Northern Mariana Islands","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambique","NA":"Namibia","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"Oman","PA":"Panama","PE":"Peru","PF":"French Polynesia","PG":"Papua New Guinea","PH":"Pilipinas","PK":"Pakistan","PL":"Poland","PM":"St. Pierre & Miquelon","PN":"Pitcairn Islands","PR":"Puerto Rico","PS":"Palestinian Territories","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","QO":"Outlying Oceania","RE":"Reunion","RO":"Romania","RS":"Serbia","RU":"Russia","RW":"Rwanda","SA":"Saudi Arabia","SB":"Solomon Islands","SC":"Seychelles","SD":"Sudan","SE":"Sweden","SG":"Singapore","SH":"St. Helena","SI":"Slovenia","SJ":"Svalbard & Jan Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"South Sudan","ST":"Sao Tome & Principe","SV":"El Salvador","SX":"Sint Maarten","SY":"Syria","SZ":"Eswatini","TA":"Tristan da Cunha","TC":"Turks & Caicos Islands","TD":"Chad","TF":"French Southern Territories","TG":"Togo","TH":"Thailand","TJ":"Tajikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Turkey","TT":"Trinidad & Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzania","UA":"Ukraine","UG":"Uganda","UM":"U.S. Outlying Islands","UN":"United Nations","US":"Estados Unidos","UY":"Uruguay","UZ":"Uzbekistan","VA":"Vatican City","VC":"St. Vincent & Grenadines","VE":"Venezuela","VG":"British Virgin Islands","VI":"U.S. Virgin Islands","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis & Futuna","WS":"Samoa","XA":"Pseudo-Accents","XB":"Pseudo-Bidi","XK":"Kosovo","YE":"Yemen","YT":"Mayotte","ZA":"South Africa","ZM":"Zambia","ZW":"Zimbabwe","ZZ":"Wala Mailhing Rehiyon"},"short":{"GB":"UK","HK":"Hong Kong","MO":"Macao","PS":"Palestine","US":"US"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arabo","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Sirilisko","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Pinasimple","Hant":"Tradisyonal","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Hinapon","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Korean","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latin","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Dili Sinulat","Zyyy":"Zyyy","Zzzz":"Wala Mailhing Script"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"United Arab Emirates Dirham","AFA":"AFA","AFN":"Afghan Afghani","ALK":"ALK","ALL":"Albanian Lek","AMD":"Armenian Dram","ANG":"Netherlands Antillean Guilder","AOA":"Angolan Kwanza","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"Argentine Peso","ATS":"ATS","AUD":"Australian Dollar","AWG":"Aruban Florin","AZM":"AZM","AZN":"Azerbaijani Manat","BAD":"BAD","BAM":"Bosnia-Herzegovina Convertible Mark","BAN":"BAN","BBD":"Barbadian Dollar","BDT":"Bangladeshi Taka","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"Bulgarian Lev","BGO":"BGO","BHD":"Bahraini Dinar","BIF":"Burundian Franc","BMD":"Bermudan Dollar","BND":"Brunei Dollar","BOB":"Bolivian Boliviano","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"Brazilian Real","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"Bahamian Dollar","BTN":"Bhutanese Ngultrum","BUK":"BUK","BWP":"Botswanan Pula","BYB":"BYB","BYN":"Belarusian Ruble","BYR":"BYR","BZD":"Belize Dollar","CAD":"Canadian Dollar","CDF":"Congolese Franc","CHE":"CHE","CHF":"Swiss Franc","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"Chilean Peso","CNH":"Chinese Yuan (layo sa baybayon)","CNX":"CNX","CNY":"Chinese Yuan","COP":"Colombian Peso","COU":"COU","CRC":"Costa Rican Colon","CSD":"CSD","CSK":"CSK","CUC":"Cuban Convertible Peso","CUP":"Cuban Peso","CVE":"Cape Verdean Escudo","CYP":"CYP","CZK":"Czech Koruna","DDM":"DDM","DEM":"DEM","DJF":"Djiboutian Franc","DKK":"Danish Krone","DOP":"Dominican Peso","DZD":"Algerian Dinar","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Egyptian Pound","ERN":"Eritrean Nakfa","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Ethiopian Birr","EUR":"Euro","FIM":"FIM","FJD":"Fijian Dollar","FKP":"Falkland Islands Pound","FRF":"FRF","GBP":"British Pound","GEK":"GEK","GEL":"Georgian Lari","GHC":"GHC","GHS":"Ghanaian Cedi","GIP":"Gibraltar Pound","GMD":"Gambian Dalasi","GNF":"Guinean Franc","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"Guatemalan Quetzal","GWE":"GWE","GWP":"GWP","GYD":"Guyanaese Dollar","HKD":"Hong Kong Dollar","HNL":"Honduran Lempira","HRD":"HRD","HRK":"Croatian Kuna","HTG":"Haitian Gourde","HUF":"Hungarian Forint","IDR":"Indonesian Rupiah","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"Israeli New Shekel","INR":"Indian Rupee","IQD":"Iraqi Dinar","IRR":"Iranian Rial","ISJ":"ISJ","ISK":"Icelandic Krona","ITL":"ITL","JMD":"Jamaican Dollar","JOD":"Jordanian Dinar","JPY":"Japanese Yen","KES":"Kenyan Shilling","KGS":"Kyrgystani Som","KHR":"Cambodian Riel","KMF":"Comorian Franc","KPW":"North Korean Won","KRH":"KRH","KRO":"KRO","KRW":"South Korean Won","KWD":"Kuwaiti Dinar","KYD":"Cayman Islands Dollar","KZT":"Kazakhstani Tenge","LAK":"Laotian Kip","LBP":"Lebanese Pound","LKR":"Sri Lankan Rupee","LRD":"Liberian Dollar","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Libyan Dinar","MAD":"Moroccan Dirham","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"Moldovan Leu","MGA":"Malagasy Ariary","MGF":"MGF","MKD":"Macedonian Denar","MKN":"MKN","MLF":"MLF","MMK":"Myanmar Kyat","MNT":"Mongolian Tugrik","MOP":"Macanese Pataca","MRO":"MRO","MRU":"Mauritanian Ouguiya","MTL":"MTL","MTP":"MTP","MUR":"Mauritian Rupee","MVP":"MVP","MVR":"Maldivian Rufiyaa","MWK":"Malawian Kwacha","MXN":"Mexican Peso","MXP":"MXP","MXV":"MXV","MYR":"Malaysian Ringgit","MZE":"MZE","MZM":"MZM","MZN":"Mozambican Metical","NAD":"Namibian Dollar","NGN":"Nigerian Naira","NIC":"NIC","NIO":"Nicaraguan Cordoba","NLG":"NLG","NOK":"Norwegian Krone","NPR":"Nepalese Rupee","NZD":"New Zealand Dollar","OMR":"Omani Rial","PAB":"Panamanian Balboa","PEI":"PEI","PEN":"Peruvian Sol","PES":"PES","PGK":"Papua New Guinean Kina","PHP":"Philippine Piso","PKR":"Pakistani Rupee","PLN":"Polish Zloty","PLZ":"PLZ","PTE":"PTE","PYG":"Paraguayan Guarani","QAR":"Qatari Rial","RHD":"RHD","ROL":"ROL","RON":"Romanian Leu","RSD":"Serbian Dinar","RUB":"Russian Ruble","RUR":"RUR","RWF":"Rwandan Franc","SAR":"Saudi Riyal","SBD":"Solomon Islands Dollar","SCR":"Seychellois Rupee","SDD":"SDD","SDG":"Sudanese Pound","SDP":"SDP","SEK":"Swedish Krona","SGD":"Singapore Dollar","SHP":"St. Helena Pound","SIT":"SIT","SKK":"SKK","SLL":"Sierra Leonean Leone","SOS":"Somali Shilling","SRD":"Surinamese Dollar","SRG":"SRG","SSP":"South Sudanese Pound","STD":"STD","STN":"Sao Tome & Principe Dobra","SUR":"SUR","SVC":"SVC","SYP":"Syrian Pound","SZL":"Swazi Lilangeni","THB":"Thai Baht","TJR":"TJR","TJS":"Tajikistani Somoni","TMM":"TMM","TMT":"Turkmenistani Manat","TND":"Tunisian Dinar","TOP":"Tongan Paʻanga","TPE":"TPE","TRL":"TRL","TRY":"Turkish Lira","TTD":"Trinidad & Tobago Dollar","TWD":"New Taiwan Dollar","TZS":"Tanzanian Shilling","UAH":"Ukrainian Hryvnia","UAK":"UAK","UGS":"UGS","UGX":"Ugandan Shilling","USD":"US Dollar","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"Uruguayan Peso","UYW":"UYW","UZS":"Uzbekistani Som","VEB":"VEB","VEF":"VEF","VES":"Venezuelan Bolivar","VND":"Vietnamese Dong","VNN":"VNN","VUV":"Vanuatu Vatu","WST":"Samoan Tala","XAF":"Central African CFA Franc","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"East Caribbean Dollar","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"West African CFA Franc","XPD":"XPD","XPF":"CFP Franc","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"Wala Nahibaluan nga Currency","YDD":"YDD","YER":"Yemeni Rial","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"South African Rand","ZMK":"ZMK","ZMW":"Zambian Kwacha","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"ceb"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
