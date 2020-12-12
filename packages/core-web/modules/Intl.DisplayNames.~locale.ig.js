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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ig").length
)) {
// Intl.DisplayNames.~locale.ig
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"Akan","am":"Amariikị","ar":"Arabiikị","ar-001":"Ụdị Arabiikị nke oge a","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"Belaruusu","bem":"bem","bez":"bez","bg":"Bọlụgarịa","bm":"bm","bn":"Bengali","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"Cheekị","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"Asụsụ Jaman","de-AT":"Jaman ndị Austria","de-CH":"Jaman Izugbe ndị Switzerland","dje":"dje","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"Giriikị","en":"Asụsụ Bekee","en-AU":"Bekee ndị Australia","en-CA":"Bekee ndị Canada","en-GB":"Asụsụ Bekee (Mba United Kingdom)","en-US":"Bekee ndị America","eo":"eo","es":"Asụsụ Spanish","es-419":"Asụsụ Spanish ndị Latin America","es-ES":"Asụsụ Spanish ndị Europe","es-MX":"Asụsụ Spanish ndị Mexico","et":"et","eu":"eu","ewo":"ewo","fa":"Peshan","fa-AF":"Peshan (Mba Afghanistan)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"Asụsụ Fụrench","fr-CA":"Fụrench ndị Canada","fr-CH":"Fụrench ndị Switzerland","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"Awụsa","haw":"haw","he":"he","hi":"Hindi","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"Magịya","hy":"hy","ia":"ia","id":"Indonisia","ig":"Asụsụ Igbo","ii":"ii","is":"is","it":"Asụsụ Italian","ja":"Asụsụ Japanese","jgo":"jgo","jmc":"jmc","jv":"Java","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"Keme, Etiti","kn":"kn","ko":"Koria","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"Maleyi","mt":"mt","mua":"mua","mul":"mul","my":"Mịanma","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Netherlands)","ne":"Nepali","nl":"Dọọch","nl-BE":"Dọọch (Belgium)","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"Punjabi","pcm":"pcm","pl":"Poliishi","prg":"prg","ps":"ps","pt":"Asụsụ Portuguese","pt-BR":"Asụsụ Portuguese ndị Brazil","pt-PT":"Asụsụ Portuguese ndị Europe","qu":"qu","rm":"rm","rn":"rn","ro":"Rumenia","ro-MD":"Rumenia (Moldova)","rof":"rof","root":"root","ru":"Asụsụ Russian","rw":"Rụwanda","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"Somali","sq":"sq","sr":"sr","st":"st","su":"su","sv":"Sụwidiishi","sw":"sw","sw-CD":"sw (Congo - Kinshasa)","ta":"Tamụlụ","te":"te","teo":"teo","tg":"tg","th":"Taị","ti":"ti","tk":"tk","to":"to","tr":"Tọkiishi","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"Ukureenị","und":"Asụsụ amaghị","ur":"Urudu","uz":"uz","vai":"vai","vi":"Viyetịnaamụ","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"Yoruba","yue":"yue","zgh":"zgh","zh":"Mandarịịnị","zh-Hans":"Asụsụ Chinese dị mfe","zh-Hant":"Asụsụ Chinese Izugbe","zu":"Zulu","zxx":"zxx"},"short":{"az":"az","en-GB":"Bekee ndị UK","en-US":"Bekee ndị US"},"narrow":{}},"region":{"long":{"142":"Asia","143":"Etiti Asia","145":"Mpaghara Ọdịda Anyanwụ Asia","150":"Europe","151":"Mpaghara Ọwụwa Anyanwụ Europe","154":"Mpaghara Ugwu Europe","155":"Mpaghara Ọdịda Anyanwụ Europe","202":"Sub-Saharan Afrịka","419":"Latin America","001":"Uwa","002":"Afrika","003":"Mpaghara Ugwu Amerịka","005":"Mpaghara Mgbada Ugwu America","009":"Oceania","011":"Mpaghara Ọdịda Anyanwụ Afrịka","013":"Etiti America","014":"Mpaghara Ọwụwa Anyanwụ Afrịka","015":"Mpaghara Ugwu Afrịka","017":"Etiti Afrịka","018":"Mpaghara Mgbada Ugwu Afrịka","019":"Amerịka","021":"Mpaghara Ugwu America","029":"Onye Carrabean","030":"Mpaghara Ọwụwa Anyanwụ Asia","034":"Mpaghara Mgbada Ugwu Asia","035":"Mpaghara Mgbada Ugwu Asia dị na Ọwụwa Anyanwụ","039":"Mpaghara Mgbada Ugwu Europe","053":"Australasia","054":"Melanesia","057":"Mpaghara Micronesian","061":"Polynesia","AC":"Ascension Island","AD":"Andorra","AE":"Obodo United Arab Emirates","AF":"Mba Afghanistan","AG":"Antigua & Barbuda","AI":"Anguilla","AL":"Albania","AM":"Obodo Armenia","AO":"Angola","AQ":"Antarctica","AR":"Argentina","AS":"American Samoa","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"Agwaetiti Aland","AZ":"Obodo Azerbaijan","BA":"Bosnia & Herzegovina","BB":"Barbados","BD":"Obodo Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BH":"Obodo Bahrain","BI":"Burundi","BJ":"Binin","BL":"St. Barthélemy","BM":"Bemuda","BN":"Brunei","BO":"Bolivia","BQ":"Caribbean Netherlands","BR":"Mba Brazil","BS":"Bahamas","BT":"Obodo Bhutan","BV":"Agwaetiti Bouvet","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Kanada","CC":"Agwaetiti Cocos (Keeling)","CD":"Congo - Kinshasa","CF":"Central African Republik","CG":"Congo","CH":"Switzerland","CI":"Côte d’Ivoire","CK":"Agwaetiti Cook","CL":"Chile","CM":"Cameroon","CN":"Mba China","CO":"Colombia","CP":"Agwaetiti Clipperton","CR":"Kosta Rika","CU":"Cuba","CV":"Cape Verde","CW":"Kurakao","CX":"Agwaetiti Christmas","CY":"Obodo Cyprus","CZ":"Czechia","DE":"Mba Germany","DG":"Diego Garcia","DJ":"Djibouti","DK":"Denmark","DM":"Dominika","DO":"Dominican Republik","DZ":"Algeria","EA":"Ceuta & Melilla","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"Ọdịda Anyanwụ Sahara","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","EU":"Otu nzukọ mba Europe","EZ":"Gburugburu Euro","FI":"Finland","FJ":"Fiji","FK":"Agwaetiti Falkland","FM":"Micronesia","FO":"Agwaetiti Faroe","FR":"Mba France","GA":"Gabon","GB":"Mba United Kingdom","GD":"Grenada","GE":"Obodo Georgia","GF":"Frenchi Guiana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Equatorial Guinea","GR":"Greece","GS":"South Georgia na Agwaetiti South Sandwich","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Honk Kong mba nwere ndozi pụrụ iche n’obodo China","HM":"Agwaetiti Heard na Agwaetiti McDonald","HN":"Honduras","HR":"Croatia","HT":"Hati","HU":"Hungary","IC":"Agwaetiti Kanarị","ID":"Indonesia","IE":"Ireland","IL":"Obodo Israel","IM":"Isle of Man","IN":"Mba India","IO":"British Indian Ocean Territory","IQ":"Obodo Iraq","IR":"Obodo Iran","IS":"Iceland","IT":"Mba Italy","JE":"Jersey","JM":"Jamaika","JO":"Obodo Jordan","JP":"Mba Japan","KE":"Kenya","KG":"Obodo Kyrgyzstan","KH":"Cambodia","KI":"Kiribati","KM":"Comorosu","KN":"St. Kitts & Nevis","KP":"Mba Ugwu Korea","KR":"Mba South Korea","KW":"Obodo Kuwait","KY":"Agwaetiti Cayman","KZ":"Obodo Kazakhstan","LA":"Laos","LB":"Obodo Lebanon","LC":"St. Lucia","LI":"Liechtenstein","LK":"Obodo Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libyia","MA":"Morocco","MC":"Monaco","MD":"Moldova","ME":"Montenegro","MF":"St. Martin","MG":"Madagaskar","MH":"Agwaetiti Marshall","MK":"North Macedonia","ML":"Mali","MM":"Myanmar (Burma)","MN":"Obodo Mongolia","MO":"Obodo Macao nwere ndozi pụrụ iche na mba China","MP":"Agwaetiti Northern Mariana","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldivesa","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambik","NA":"Namibia","NC":"New Caledonia","NE":"Niger","NF":"Agwaetiti Norfolk","NG":"Naịjịrịa","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NP":"Obodo Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"Obodo Oman","PA":"Panama","PE":"Peru","PF":"Frenchi Polynesia","PG":"Papua New Guinea","PH":"Philippines","PK":"Obodo Pakistan","PL":"Poland","PM":"St. Pierre & Miquelon","PN":"Agwaetiti Pitcairn","PR":"Puerto Rico","PS":"Obodo dị iche iche dị n’okpuru mba Palestine","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Obodo Qatar","QO":"Outlying Oceania","RE":"Réunion","RO":"Romania","RS":"Serbia","RU":"Mba Russia","RW":"Rwanda","SA":"Obodo Saudi Arabia","SB":"Agwaetiti Solomon","SC":"Seychelles","SD":"Sudan","SE":"Sweden","SG":"Singapore","SH":"St. Helena","SI":"Slovenia","SJ":"Svalbard & Jan Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"South Sudan","ST":"São Tomé & Príncipe","SV":"El Salvador","SX":"Sint Maarten","SY":"Obodo Syria","SZ":"Eswatini","TA":"Tristan da Cunha","TC":"Agwaetiti Turks na Caicos","TD":"Chad","TF":"Ụmụ ngalaba Frenchi Southern","TG":"Togo","TH":"Thailand","TJ":"Obodo Tajikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Obodo Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Obodo Turkey","TT":"Trinidad & Tobago","TV":"Tuvalu","TW":"Obodo Taiwan","TZ":"Tanzania","UA":"Ukraine","UG":"Uganda","UM":"Obere Agwaetiti Dị Na Mpụga U.S","UN":"Mba Ụwa Jikọrọ Ọnụ","US":"Mba United States","UY":"Uruguay","UZ":"Obodo Uzbekistan","VA":"Vatican City","VC":"St. Vincent & Grenadines","VE":"Venezuela","VG":"Agwaetiti British Virgin","VI":"Agwaetiti Virgin nke US","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis & Futuna","WS":"Samoa","XA":"Pseudo-Accents","XB":"Pseudo-Bidi","XK":"Kosovo","YE":"Obodo Yemen","YT":"Mayotte","ZA":"South Africa","ZM":"Zambia","ZW":"Zimbabwe","ZZ":"Mpaghara Amaghị"},"short":{"GB":"UK","HK":"Honk Kong mba nwere ndozi pụrụ iche n’obodo China","MO":"Obodo Macao nwere ndozi pụrụ iche na mba China","PS":"Obodo dị iche iche dị n’okpuru mba Palestine","US":"Mba United States"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Mkpụrụ Okwu Arabic","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Mkpụrụ Okwu Cyrillic","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Nke dị mfe","Hant":"Izugbe","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Japanese","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Korea","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latin","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Edeghị ede","Zyyy":"Zyyy","Zzzz":"Mkpụrụ okwu amaghị"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Ego Dirham obodo United Arab Emirates","AFA":"AFA","AFN":"Ego Afghani Obodo Afghanistan","ALK":"ALK","ALL":"Ego Lek Obodo Albania","AMD":"Ego Dram obodo Armenia","ANG":"Ego Antillean Guilder obodo Netherlands","AOA":"Ego Kwanza obodo Angola","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"Ego Peso obodo Argentina","ATS":"ATS","AUD":"Ego Dollar obodo Australia","AWG":"Ego Florin obodo Aruba","AZM":"AZM","AZN":"Ego Manat obodo Azerbaijan","BAD":"BAD","BAM":"Akara mgbanwe ego obodo Bosnia-Herzegovina","BAN":"BAN","BBD":"Ego Dollar obodo Barbados","BDT":"Ego Taka obodo Bangladesh","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"Ego Lev mba Bulgaria","BGO":"BGO","BHD":"Ego Dinar Obodo Bahrain","BIF":"Ego Franc obodo Burundi","BMD":"Dollar Bermuda","BND":"Ego Dollar obodo Brunei","BOB":"Ego Boliviano obodo Bolivia","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"Real Brazil","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"Ego Dollar Obodo Bahamas","BTN":"Ego Ngultrum obodo Bhutan","BUK":"BUK","BWP":"Ego Pula obodo Bostwana","BYB":"BYB","BYN":"Ego Ruble mba Belarus","BYR":"BYR","BZD":"Dollar Belize","CAD":"Dollar Canada","CDF":"Ego Franc obodo Congo","CHE":"CHE","CHF":"Ego Franc mba Switzerland","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"Ego Peso obodo Chile","CNH":"Ego Yuan Obodo China (ndị bi na mmiri)","CNX":"CNX","CNY":"Yuan China","COP":"Ego Peso obodo Columbia","COU":"COU","CRC":"Ego Colón obodo Costa Rica","CSD":"CSD","CSK":"CSK","CUC":"Ego Peso e nwere ike ịgbanwe nke obodo Cuba","CUP":"Ego Peso obodo Cuba","CVE":"Escudo Caboverdiano","CYP":"CYP","CZK":"Ego Koruna obodo Czech","DDM":"DDM","DEM":"DEM","DJF":"Ego Franc obodo Djibouti","DKK":"Ego Krone Obodo Denmark","DOP":"Ego Peso Obodo Dominica","DZD":"Ego Dinar Obodo Algeria","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Ego Pound obodo Egypt","ERN":"Ego Nakfa obodo Eritrea","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Ego Birr obodo Ethiopia","EUR":"Euro","FIM":"FIM","FJD":"Ego Dollar obodo Fiji","FKP":"Ego Pound obodo Falkland Islands","FRF":"FRF","GBP":"Pound British","GEK":"GEK","GEL":"Ego Lari Obodo Georgia","GHC":"GHC","GHS":"Ego Cedi obodo Ghana","GIP":"Ego Pound obodo Gibraltar","GMD":"Ego Dalasi obodo Gambia","GNF":"Ego Franc obodo Guinea","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"Ego Quetzal obodo Guatemala","GWE":"GWE","GWP":"GWP","GYD":"Ego Dollar obodo Guyana","HKD":"Ego Dollar Obodo Honk Kong","HNL":"Ego Lempira obodo Honduras","HRD":"HRD","HRK":"Ego Kuna obodo Croatia","HTG":"Ego Gourde obodo Haiti","HUF":"Ego Forint obodo Hungary","IDR":"Ego Rupiah Obodo Indonesia","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"Ego Shekel ọhụrụ obodo Israel","INR":"Rupee India","IQD":"Ego Dinar obodo Iraq","IRR":"Ego Rial obodo Iran","ISJ":"ISJ","ISK":"Ego Króna obodo Iceland","ITL":"ITL","JMD":"Ego Dollar obodo Jamaica","JOD":"Ego Dinar Obodo Jordan","JPY":"Yen Japan","KES":"Ego Shilling obodo Kenya","KGS":"Ego Som Obodo Kyrgyzstan","KHR":"Ego Riel obodo Cambodia","KMF":"Ego Franc obodo Comoros","KPW":"Ego Won Obodo North Korea","KRH":"KRH","KRO":"KRO","KRW":"Ego Won Obodo South Korea","KWD":"Ego Dinar Obodo Kuwait","KYD":"Ego Dollar obodo Cayman Islands","KZT":"Ego Tenge obodo Kazakhstani","LAK":"Ego Kip Obodo Laos","LBP":"Ego Pound obodo Lebanon","LKR":"Ego Rupee obodo Sri Lanka","LRD":"Ego Dollar obodo Liberia","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Ego Dinar obodo Libya","MAD":"Ego Dirham obodo Morocco","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"Ego Leu obodo Moldova","MGA":"Ego Ariary obodo Madagascar","MGF":"MGF","MKD":"Ego Denar Obodo Macedonia","MKN":"MKN","MLF":"MLF","MMK":"Ego Kyat obodo Myanmar","MNT":"Ego Turgik Obodo Mongolia","MOP":"Ego Pataca ndị Obodo Macanese","MRO":"MRO","MRU":"Ego Ouguiya Obodo Mauritania","MTL":"MTL","MTP":"MTP","MUR":"Ego Rupee obodo Mauritania","MVP":"MVP","MVR":"Ego Rufiyaa obodo Moldova","MWK":"Ego Kwacha obodo Malawi","MXN":"Ego Peso obodo Mexico","MXP":"MXP","MXV":"MXV","MYR":"Ego Ringgit obodo Malaysia","MZE":"MZE","MZM":"MZM","MZN":"Ego Metical obodo Mozambique","NAD":"Ego Dollar obodo Namibia","NGN":"Naịra","NIC":"NIC","NIO":"Ego Córodoba obodo Nicaragua","NLG":"NLG","NOK":"Ego Krone Obodo Norway","NPR":"Ego Rupee obodo Nepal","NZD":"Ego Dollar obodo New Zealand","OMR":"Ego Rial obodo Oman","PAB":"Ego Balboa obodo Panama","PEI":"PEI","PEN":"Ego Sol obodo Peru","PES":"PES","PGK":"Ego Kina obodo Papua New Guinea","PHP":"Ego piso obodo Philippine","PKR":"Ego Rupee obodo Pakistan","PLN":"Ego Zloty mba Poland","PLZ":"PLZ","PTE":"PTE","PYG":"Ego Guarani obodo Paraguay","QAR":"Ego Rial obodo Qatar","RHD":"RHD","ROL":"ROL","RON":"Ego Leu obodo Romania","RSD":"Ego Dinar obodo Serbia","RUB":"Ruble Russia","RUR":"RUR","RWF":"Ego Franc obodo Rwanda","SAR":"Ego Riyal obodo Saudi","SBD":"Ego Dollar obodo Solomon Islands","SCR":"Ego Rupee obodo Seychelles","SDD":"SDD","SDG":"Ego Pound obodo Sudan","SDP":"SDP","SEK":"Ego Krona Obodo Sweden","SGD":"Ego Dollar obodo Singapore","SHP":"Ego Pound obodo St Helena","SIT":"SIT","SKK":"SKK","SLL":"Ego Leone obodo Sierra Leone","SOS":"Ego shilling obodo Somali","SRD":"Dollar Surinamese","SRG":"SRG","SSP":"Ego Pound obodo South Sudan","STD":"STD","STN":"Ego Dobra nke obodo Sāo Tomé na Principe","SUR":"SUR","SVC":"SVC","SYP":"Ego Pound obodo Syria","SZL":"Ego Lilangeni obodo Swaziland","THB":"Ego Baht obodo Thai","TJR":"TJR","TJS":"Who Somoni obodo Tajikistan","TMM":"TMM","TMT":"Ego Manat Obodo Turkmenistan","TND":"Ego Dinar Obodo Tunisia","TOP":"Ego paʻanga obodo Tonga","TPE":"TPE","TRL":"TRL","TRY":"Ego Lira obodo Turkey","TTD":"Dollar Trinidad & Tobago","TWD":"Dollar obodo New Taiwan","TZS":"Ego Shilling Obodo Tanzania","UAH":"Ego Hryvnia obodo Ukraine","UAK":"UAK","UGS":"UGS","UGX":"Ego Shilling obodo Uganda","USD":"Dollar US","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"Ego Peso obodo Uruguay","UYW":"UYW","UZS":"Ego Som obodo Uzbekistan","VEB":"VEB","VEF":"VEF","VES":"Ego Bolivar obodo Venezuela","VND":"Ego Dong obodo Vietnam","VNN":"VNN","VUV":"Ego Vatu obodo Vanuatu","WST":"Ego Tala obodo Samoa","XAF":"Ego Franc mba etiti Africa","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"Ego Dollar obodo East Carribbean","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Ego CFA Franc obodo West Africa","XPD":"XPD","XPF":"Ego Franc obodo CFP","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"Ego Amaghị","YDD":"YDD","YER":"Ego Rial obodo Yemeni","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Ego Rand obodo South Africa","ZMK":"ZMK","ZMW":"Ego Kwacha Obodo Zambia","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"ig"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
