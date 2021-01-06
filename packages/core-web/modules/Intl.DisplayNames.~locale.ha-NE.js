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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ha-NE").length
)) {
// Intl.DisplayNames.~locale.ha-NE
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"Afirkanci","agq":"Aghem","ak":"Akan","am":"Amharik","ar":"Larabci","ar-001":"Larabci Asali Na Zamani","as":"Asamisanci","asa":"Asu","ast":"Asturia","az":"Azerbaijanci","bas":"Basaa","be":"Belarusanci","bem":"Bemba","bez":"Bena","bg":"Bulgariyanci","bm":"Bambara","bn":"Bengali","bo":"Tibetan","br":"Buretananci","brx":"Bodo","bs":"Bosniyanci","ca":"Kataloniyanci","ccp":"Chakma","ce":"Chechen","ceb":"Cebuano","cgg":"Chiga","chr":"Cherokee","ckb":"Kurdawa ta Tsakiya","co":"Corsican","cs":"Cek","cu":"Church Slavic","cy":"Welsh","da":"Danish","dav":"Taita","de":"Jamusanci","de-AT":"Jamusanci Ostiriya","de-CH":"Jamusanci Suwizalan","dje":"Zarma","doi":"doi","dsb":"Sorbianci ta kasa","dua":"Duala","dyo":"Jola-Fonyi","dz":"Dzongkha","ebu":"Embu","ee":"Ewe","el":"Girkanci","en":"Turanci","en-AU":"Turanci Ostareliya","en-CA":"Turanci Kanada","en-GB":"Turanci Biritaniya","en-US":"Turanci Amirka","eo":"Esperanto","es":"Sifaniyanci","es-419":"Sifaniyancin Latin Amirka","es-ES":"Sifaniyanci Turai","es-MX":"Sifaniyanci Mesiko","et":"Istoniyanci","eu":"Basque","ewo":"Ewondo","fa":"Farisa","fa-AF":"Farisa (Afaganistan)","ff":"Fulah","fi":"Yaren mutanen Finland","fil":"Dan Filifin","fo":"Faroese","fr":"Faransanci","fr-CA":"Farasanci Kanada","fr-CH":"Farasanci Suwizalan","frc":"frc","fur":"Friulian","fy":"Frisian ta Yamma","ga":"Dan Irish","gd":"Kʼabilan Scots Gaelic","gl":"Bagalike","gsw":"Jamusanci Swiss","gu":"Gujarati","guz":"Gusii","gv":"Manx","ha":"Hausa","haw":"Hawaiianci","he":"Ibrananci","hi":"Harshen Hindi","hmn":"Hmong","hr":"Kuroshiyan","hsb":"Sorbianci ta Sama","ht":"Haitian Creole","hu":"Harshen Hungari","hy":"Armeniyanci","ia":"Yare Tsakanin Kasashe","id":"Harshen Indunusiya","ig":"Igbo","ii":"Sichuan Yi","is":"Yaren mutanen Iceland","it":"Italiyanci","ja":"Japananci","jgo":"Ngomba","jmc":"Machame","jv":"Jafananci","ka":"Jojiyanci","kab":"Kabyle","kam":"Kamba","kde":"Makonde","kea":"Kabuverdianu","kgp":"kgp","khq":"Koyra Chiini","ki":"Kikuyu","kk":"Kazakh","kkj":"Kako","kl":"Kalaallisut","kln":"Kalenjin","km":"Harshen Kimar","kn":"Kannada","ko":"Harshen Koreya","kok":"Konkananci","ks":"Kashmiri","ksb":"Shambala","ksf":"Bafia","ksh":"Colognian","ku":"Kurdanci","kw":"Cornish","ky":"Kirgizanci","la":"Dan Kabilar Latin","lag":"Langi","lb":"Luxembourgish","lg":"Ganda","lij":"lij","lkt":"Lakota","ln":"Lingala","lo":"Lao","lou":"lou","lrc":"Arewacin Luri","lt":"Lituweniyanci","lu":"Luba-Katanga","luo":"Luo","luy":"Luyia","lv":"Latbiyanci","mai":"Maithili","mas":"Harshen Masai","mer":"Meru","mfe":"Morisyen","mg":"Malagasi","mgh":"Makhuwa-Meetto","mgo":"Metaʼ","mi":"Maori","mk":"Dan Masedoniya","ml":"Malayalamci","mn":"Mongoliyanci","mni":"Manipuri","mr":"Maratinci","ms":"Harshen Malai","mt":"Harshen Maltis","mua":"Mundang","mul":"Harsuna masu yawa","my":"Burmanci","mzn":"Mazanderani","naq":"Nama","nb":"Norwegian Bokmål","nd":"North Ndebele","nds":"Low German","nds-NL":"Low German (Holan)","ne":"Nepali","nl":"Holanci","nl-BE":"Holanci (Belgiyom)","nmg":"Kwasio","nn":"Norwegian Nynorsk","nnh":"Ngiemboon","nus":"Nuer","nv":"nv","ny":"Nyanja","nyn":"Nyankole","om":"Oromo","or":"Odiya","os":"Ossetic","pa":"Punjabi","pcm":"Pidgin na Najeriya","pl":"Harshen Polan","prg":"Ferusawa","ps":"Pashtanci","pt":"Harshen Potugis","pt-BR":"Harshen Potugis na Birazil","pt-PT":"Potugis Ƙasashen Turai","qu":"Quechua","rm":"Romansh","rn":"Rundi","ro":"Romaniyanci","ro-MD":"Romaniyanci (Maldoba)","rof":"Rombo","root":"root","ru":"Rashanci","rw":"Kinyarwanda","rwk":"Rwa","sa":"Sanskrit","sah":"Sakha","saq":"Samburu","sat":"Santali","sbp":"Sangu","sd":"Sindiyanci","se":"Sami ta Arewa","seh":"Sena","ses":"Koyraboro Senni","sg":"Sango","shi":"Tachelhit","si":"Sinhalanci","sk":"Basulke","sl":"Basulabe","sm":"Samoan","smn":"Inari Sami","sn":"Shona","so":"Somalianci","sq":"Albaniyanci","sr":"Sabiyan","st":"Sesotanci","su":"Harshen Sundanese","sv":"Harshen Suwedan","sw":"Harshen Suwahili","sw-CD":"Harshen Suwahili (Jamhuriyar Dimokuraɗiyyar Kongo)","ta":"Tamil","te":"Telugu","teo":"Teso","tg":"Tajik","th":"Thai","ti":"Tigrinyanci","tk":"Tukmenistanci","to":"Tonganci","tr":"Harshen Turkiyya","tt":"Tatar","twq":"Tasawak","tzm":"Tamazight na Atlas Tsaka","ug":"Ugiranci","uk":"Harshen Yukuren","und":"Harshen da ba a sani ba","ur":"Urdanci","uz":"Uzbek","vai":"Vai","vi":"Harshen Biyetinam","vo":"Volapük","vun":"Vunjo","wae":"Walser","wo":"Wolof","xh":"Bazosa","xog":"Soga","yav":"Yangben","yi":"Yaren Yiddish","yo":"Yarbanci","yue":"Harshen Cantonese","zgh":"Daidaitaccen Moroccan Tamazight","zh":"Harshen Sinanci","zh-Hans":"Sauƙaƙaƙƙen Sinanci","zh-Hant":"Sinanci na gargajiya","zu":"Harshen Zulu","zxx":"Babu abun cikin yare"},"short":{"az":"Azeri","en-GB":"Turancin Ingila","en-US":"Turancin Amurka"},"narrow":{}},"region":{"long":{"142":"Asiya","143":"Asiya ta Tsakiya","145":"Yammacin Asiya","150":"Turai","151":"Gabashin Turai","154":"Arewacin Turai","155":"Yammacin Turai","202":"Afirka ta Kudancin Sahara","419":"Latin Amurka","001":"Duniya","002":"Afirka","003":"Amurka ta Arewa","005":"Amurka ta Kudu","009":"Osheniya","011":"Afirka ta Yamma","013":"Amurka ta Tsakiya","014":"Afirka ta Gabas","015":"Arewacin Afirka","017":"Afirka ta Tsakiya","018":"Kudancin Afirka","019":"Nahiyoyin Amurka","021":"Arewacin Amurka","029":"Karebiyan","030":"Gabashin Asiya","034":"Kudancin Asiya","035":"Kudu Maso Gabashin Asiya","039":"Kudancin Turai","053":"Tsibarai na Austraila da New Zealand da maƙota","054":"Tsibirai na New Guinea da Fiji da maƙota","057":"Yankin Micronesiya","061":"tsibiri","AC":"Tsibirin Ascension","AD":"Andora","AE":"Haɗaɗɗiyar Daular Larabawa","AF":"Afaganistan","AG":"Antigua da Barbuda","AI":"Angila","AL":"Albaniya","AM":"Armeniya","AO":"Angola","AQ":"Antatika","AR":"Arjantiniya","AS":"Samowa Ta Amurka","AT":"Ostiriya","AU":"Ostareliya","AW":"Aruba","AX":"Tsibirai na Åland","AZ":"Azarbaijan","BA":"Bosniya da Harzagobina","BB":"Barbadas","BD":"Bangiladas","BE":"Belgiyom","BF":"Burkina Faso","BG":"Bulgariya","BH":"Baharan","BI":"Burundi","BJ":"Binin","BL":"San Barthélemy","BM":"Barmuda","BN":"Burune","BO":"Bolibiya","BQ":"Caribbean Netherlands","BR":"Birazil","BS":"Bahamas","BT":"Butan","BV":"Tsibirin Bouvet","BW":"Baswana","BY":"Belarus","BZ":"Beliz","CA":"Kanada","CC":"Tsibirai Cocos (Keeling)","CD":"Jamhuriyar Dimokuraɗiyyar Kongo","CF":"Jamhuriyar Afirka Ta Tsakiya","CG":"Kongo","CH":"Suwizalan","CI":"Aibari Kwas","CK":"Tsibiran Kuku","CL":"Cayile","CM":"Kamaru","CN":"Sin","CO":"Kolambiya","CP":"Tsibirin Clipperton","CR":"Kwasta Rika","CU":"Kyuba","CV":"Tsibiran Kap Barde","CW":"Ƙasar Curaçao","CX":"Tsibirin Kirsmati","CY":"Sifurus","CZ":"Jamhuriyar Cak","DE":"Jamus","DG":"Tsibirn Diego Garcia","DJ":"Jibuti","DK":"Danmark","DM":"Dominika","DO":"Jamhuriyar Dominika","DZ":"Aljeriya","EA":"Ceuta da Melilla","EC":"Ekwador","EE":"Estoniya","EG":"Misira","EH":"Yammacin Sahara","ER":"Eritireya","ES":"Sipen","ET":"Habasha","EU":"Tarayyar Turai","EZ":"Sashin Turai","FI":"Finlan","FJ":"Fiji","FK":"Tsibiran Falkilan","FM":"Mikuronesiya","FO":"Tsibirai na Faroe","FR":"Faransa","GA":"Gabon","GB":"Biritaniya","GD":"Girnada","GE":"Jiwarjiya","GF":"Gini Ta Faransa","GG":"Yankin Guernsey","GH":"Gana","GI":"Jibaraltar","GL":"Grinlan","GM":"Gambiya","GN":"Gini","GP":"Gwadaluf","GQ":"Gini Ta Ikwaita","GR":"Girka","GS":"Kudancin Geogia da Kudancin Tsibirin Sandiwic","GT":"Gwatamala","GU":"Gwam","GW":"Gini Bisau","GY":"Guyana","HK":"Babban Yankin Mulkin Hong Kong na Ƙasar Sin","HM":"Tsibirin Heard da McDonald","HN":"Honduras","HR":"Kurowaishiya","HT":"Haiti","HU":"Hungari","IC":"Tsibiran Canary","ID":"Indunusiya","IE":"Ayalan","IL":"Israʼila","IM":"Isle na Mutum","IN":"Indiya","IO":"Yankin Birtaniya Na Tekun Indiya","IQ":"Iraƙi","IR":"Iran","IS":"Aisalan","IT":"Italiya","JE":"Kasar Jersey","JM":"Jamaika","JO":"Jordan","JP":"Japan","KE":"Kenya","KG":"Kirgizistan","KH":"Kambodiya","KI":"Kiribati","KM":"Kwamoras","KN":"San Kiti Da Nebis","KP":"Koriya Ta Arewa","KR":"Koriya Ta Kudu","KW":"Kwiyat","KY":"Tsibiran Kaiman","KZ":"Kazakistan","LA":"Lawas","LB":"Labanan","LC":"San Lusiya","LI":"Licansitan","LK":"Siri Lanka","LR":"Laberiya","LS":"Lesoto","LT":"Lituweniya","LU":"Lukusambur","LV":"Litibiya","LY":"Libiya","MA":"Maroko","MC":"Monako","MD":"Maldoba","ME":"Mantanegara","MF":"San Martin","MG":"Madagaskar","MH":"Tsibiran Marshal","MK":"Macedonia ta Arewa","ML":"Mali","MM":"Burma, Miyamar","MN":"Mangoliya","MO":"Babban Yankin Mulkin Macao na Ƙasar Sin","MP":"Tsibiran Mariyana Na Arewa","MQ":"Martinik","MR":"Moritaniya","MS":"Manserati","MT":"Malta","MU":"Moritus","MV":"Maldibi","MW":"Malawi","MX":"Makasiko","MY":"Malaisiya","MZ":"Mozambik","NA":"Namibiya","NC":"Kaledoniya Sabuwa","NE":"Nijar","NF":"Tsibirin Narfalk","NG":"Najeriya","NI":"Nikaraguwa","NL":"Holan","NO":"Norwe","NP":"Nefal","NR":"Nauru","NU":"Niyu","NZ":"Nuzilan","OM":"Oman","PA":"Panama","PE":"Feru","PF":"Folinesiya Ta Faransa","PG":"Papuwa Nugini","PH":"Filipin","PK":"Pakistan","PL":"Polan","PM":"San Piyar da Mikelan","PN":"Pitakarin","PR":"Porto Riko","PS":"Yankunan Palasɗinu","PT":"Portugal","PW":"Palau","PY":"Faragwai","QA":"Katar","QO":"Bakin Teku","RE":"Rawuniyan","RO":"Romaniya","RS":"Sabiya","RU":"Rasha","RW":"Ruwanda","SA":"Saudiyya","SB":"Tsibiran Salaman","SC":"Seychelles","SD":"Sudan","SE":"Suwedan","SG":"Singapur","SH":"San Helena","SI":"Sulobeniya","SJ":"Svalbard da Jan Mayen","SK":"Sulobakiya","SL":"Salewo","SM":"San Marino","SN":"Sanigal","SO":"Somaliya","SR":"Suriname","SS":"Sudan ta Kudu","ST":"Sawo Tome Da Paransip","SV":"El Salbador","SX":"San Maarten","SY":"Sham, Siriya","SZ":"Eswatini","TA":"Tritan da Kunha","TC":"Turkis Da Tsibiran Kaikwas","TD":"Cadi","TF":"Yankin Faransi ta Kudu","TG":"Togo","TH":"Tailan","TJ":"Tajikistan","TK":"Takelau","TL":"Timor Ta Gabas","TM":"Turkumenistan","TN":"Tunisiya","TO":"Tonga","TR":"Turkiyya","TT":"Tirinidad Da Tobago","TV":"Tubalu","TW":"Taiwan","TZ":"Tanzaniya","UA":"Yukaran","UG":"Yuganda","UM":"Rukunin Tsibirin U.S","UN":"Majalisar Ɗinkin Duniya","US":"Amurka","UY":"Yurigwai","UZ":"Uzubekistan","VA":"Batikan","VC":"San Binsan Da Girnadin","VE":"Benezuwela","VG":"Tsibirin Birjin Na Birtaniya","VI":"Tsibiran Birjin Ta Amurka","VN":"Biyetinam","VU":"Banuwatu","WF":"Walis Da Futuna","WS":"Samoa","XA":"Gogewar Kwalwa","XB":"Gano wani abu ta hanyar amfani da fasaha","XK":"Kasar Kosovo","YE":"Yamal","YT":"Mayoti","ZA":"Afirka Ta Kudu","ZM":"Zambiya","ZW":"Zimbabuwe","ZZ":"Yanki da ba a sani ba"},"short":{"GB":"Biritaniya","HK":"Babban Yankin Mulkin Hong Kong na Ƙasar Sin","MO":"Babban Yankin Mulkin Macao na Ƙasar Sin","PS":"Palasɗinu","US":"Amurka"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Larabci","Aran":"Aran","Armi":"Armi","Armn":"Armeniyawa","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Bangla","Bhks":"Bhks","Bopo":"Bopomofo","Brah":"Brah","Brai":"Rubutun Makafi","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrillic","Deva":"Devanagari","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethiopic","Geor":"Georgian","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Girka","Gujr":"Gujarati","Guru":"Gurmukhi","Hanb":"Han tare da Bopomofo","Hang":"Yaren Hangul","Hani":"Mutanen Han na ƙasar Sin","Hano":"Hano","Hans":"Sauƙaƙaƙƙen","Hant":"Na gargajiya","Hatr":"Hatr","Hebr":"Ibrananci","Hira":"Tsarin Rubutun Hiragana","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"kalaman Jafananci","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jafanis","Kali":"Kali","Kana":"Tsarin Rubutun Katakana","Khar":"Khar","Khmr":"Yaren Khmer","Khoj":"Khoj","Kits":"Kits","Knda":"Yaren Kannada","Kore":"Rubutun Koriya","Kthi":"Kthi","Lana":"Lana","Laoo":"Yan lao","Latn":"Latin","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Yaren Malayalam","Modi":"Modi","Mong":"Na kasar Mongolia","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Ƙasar Myanmar","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Yaren Odia","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Yaren Sinhala","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Yaren Tamil","Tang":"Tang","Tavt":"Tavt","Telu":"Yaren Telugu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Yaren Thaana","Thai":"Thai","Tibt":"Yaren Tibet","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Alamar Lissafi","Zsye":"Alama ta hoto","Zsym":"Alamomi","Zxxx":"Ba rubutacce ba","Zyyy":"Gama-gari","Zzzz":"Rubutun da ba sani ba"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Kuɗin Haɗaɗɗiyar Daular Larabawa","AFA":"AFA","AFN":"Afghani na ƙasar Afghanistan","ALK":"ALK","ALL":"Kuɗin Albania","AMD":"Kuɗin Armenia","ANG":"Antillean Guilder na ƙasar Netherlands","AOA":"Kuɗin Angola","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"Peso na ƙasar Argentina","ATS":"ATS","AUD":"Dalar Ostareliya","AWG":"Florin na yankin Aruba","AZM":"AZM","AZN":"Kuɗin Azerbaijani","BAD":"BAD","BAM":"Kuɗaɗen Bosnia da Herzegovina","BAN":"BAN","BBD":"Dalar ƙasar Barbados","BDT":"Taka na ƙasar Bangladesh","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"Kuɗin Bulgeria","BGO":"BGO","BHD":"Kuɗin Baharan","BIF":"Kuɗin Burundi","BMD":"Dalar ƙasar Bermuda","BND":"Dalar Brunei","BOB":"Boloviano na ƙasar Bolivia","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"Ril Kudin Birazil","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"Dalar ƙasar Bahamas","BTN":"Ngultrum na ƙasar Bhutan","BUK":"BUK","BWP":"Kuɗin Baswana","BYB":"BYB","BYN":"Kuɗin Belarus","BYR":"BYR","BZD":"Dalar ƙasar Belize","CAD":"Dalar Kanada","CDF":"Kuɗin Kongo","CHE":"CHE","CHF":"Kuɗin Suwizalan","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"Peso na ƙasar Chile","CNH":"Yuwan na ƙasar Sin (na wajen ƙasa)","CNX":"CNX","CNY":"Yuwan na ƙasar Sin","COP":"Peso na ƙasar Columbia","COU":"COU","CRC":"Colón na ƙasar Costa Rica","CSD":"CSD","CSK":"CSK","CUC":"Peso mai fuska biyu na ƙasar Kuba","CUP":"Peso na ƙasar Kuba","CVE":"Kuɗin Tsibiran Kap Barde","CYP":"CYP","CZK":"Kuɗin Czech","DDM":"DDM","DEM":"DEM","DJF":"Kuɗin Jibuti","DKK":"Krone na ƙasar Denmark","DOP":"Peso na jamhuriyar Dominica","DZD":"Kuɗin Aljeriya","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Fam kin Masar","ERN":"Kuɗin Eritireya","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Kuɗin Habasha","EUR":"Yuro","FIM":"FIM","FJD":"Dalar Fiji","FKP":"Fam na ƙasar Tsibirai na Falkland","FRF":"FRF","GBP":"Fam na Ingila","GEK":"GEK","GEL":"Kuɗin Georgia","GHC":"Cedi","GHS":"Sidi na Ghana","GIP":"Kuɗin Gibraltal","GMD":"Kuɗin Gambiya","GNF":"Kuɗin Guinea","GNS":"Kuɗin Gini","GQE":"GQE","GRD":"GRD","GTQ":"Quetzal na ƙasar Guatemala","GWE":"GWE","GWP":"GWP","GYD":"Dalar Guyana","HKD":"Dalar Hong Kong","HNL":"Lempira na ƙasar Honduras","HRD":"HRD","HRK":"Kuɗin Croatia","HTG":"Gourde na ƙasar Haiti","HUF":"Kuɗin Hungary","IDR":"Rupiah na ƙasar Indonesia","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"Sabbin Kuɗin Israʼila","INR":"Kuɗin Indiya","IQD":"Dinarin Iraqi","IRR":"Riyal na ƙasar Iran","ISJ":"ISJ","ISK":"Króna na ƙasar Iceland","ITL":"ITL","JMD":"Dalar Jamaica","JOD":"Dinarin Jordan","JPY":"Yen na ƙasar Japan","KES":"Sulen Kenya","KGS":"Som na ƙasar Kyrgystani","KHR":"Riel na ƙasar Cambodia","KMF":"Kuɗin Kwamoras","KPW":"won na ƙasar Koriya ta Arewa","KRH":"KRH","KRO":"KRO","KRW":"won na Koriya ta Kudu","KWD":"Dinarin Kuwaiti","KYD":"Dalar ƙasar Tsibirai na Cayman","KZT":"Tenge na ƙasar Kazkhstan","LAK":"Kuɗin Laos","LBP":"Kuɗin Lebanon","LKR":"Rupee na ƙasar Sri Lanka","LRD":"Dalar Laberiya","LSL":"Kuɗin Lesoto","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Kuɗin Libiya","MAD":"Kuɗin Maroko","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"kuɗaɗen Moldova","MGA":"Kuɗin Madagaskar","MGF":"MGF","MKD":"Dinarin Macedonia","MKN":"MKN","MLF":"MLF","MMK":"Kuɗin Myanmar","MNT":"Tugrik na Mongolia","MOP":"Pataca na ƙasar Macao","MRO":"Kuɗin Moritaniya (1973–2017)","MRU":"Kuɗin Moritaniya","MTL":"MTL","MTP":"MTP","MUR":"Kuɗin Moritus","MVP":"MVP","MVR":"Rufiyaa na ɓasar Maldives","MWK":"Kuɗin Malawi","MXN":"Peso na ƙasar Mekziko","MXP":"MXP","MXV":"MXV","MYR":"Kuɗin Malaysia","MZE":"MZE","MZM":"Kuɗin Mozambik","MZN":"Metical na ƙasar Mozambique","NAD":"Dalar Namibiya","NGN":"Nairar Najeriya","NIC":"NIC","NIO":"Córdoba na ƙasar Nicaragua","NLG":"NLG","NOK":"Krone na ƙasar Norway","NPR":"Rupee na Nepal","NZD":"Dalar New Zealand","OMR":"Riyal ɗin Oman","PAB":"Balboa na ƙasar Panama","PEI":"PEI","PEN":"Sol na ƙasar Peru","PES":"PES","PGK":"Kina na ƙasar Papua Sabon Guinea","PHP":"Kuɗin Philippine","PKR":"Rupee na ƙasar Pakistan","PLN":"Kuɗin Polan","PLZ":"PLZ","PTE":"PTE","PYG":"Guarani na ƙasar Paraguay","QAR":"Riyal ɗin Qatar","RHD":"RHD","ROL":"ROL","RON":"Kuɗin Romania","RSD":"Dinarin Serbia","RUB":"Ruble na ƙasar Rasha","RUR":"RUR","RWF":"Kuɗin Ruwanda","SAR":"Riyal","SBD":"Dalar Tsibirai na Solomon","SCR":"Kuɗin Saishal","SDD":"SDD","SDG":"Fam na Sudan","SDP":"SDP","SEK":"Krona na ƙasar Sweden","SGD":"Dalar Singapore","SHP":"Fam kin San Helena","SIT":"SIT","SKK":"SKK","SLL":"Kuɗin Salewo","SOS":"Sulen Somaliya","SRD":"Dalar ƙasar Suriname","SRG":"SRG","SSP":"Fam na Kudancin Sudan","STD":"Kuɗin Sawo Tome da Paransip (1977–2017)","STN":"Kuɗin Sawo Tome da Paransip","SUR":"SUR","SVC":"SVC","SYP":"Kuɗin Siriya","SZL":"Kuɗin Lilangeni","THB":"Baht na ƙasar Thailand","TJR":"TJR","TJS":"Somoni na ƙasar Tajikistan","TMM":"TMM","TMT":"Manat na ƙasar Turkmenistan","TND":"Kuɗin Tunisiya","TOP":"Paʻanga na ƙasar Tonga","TPE":"TPE","TRL":"TRL","TRY":"Kuɗin Turkiyya","TTD":"Dalar ƙasar Trinidad da Tobago","TWD":"Sabuwar Dalar Taiwan","TZS":"Sulen Tanzaniya","UAH":"Kudin Ukrainian","UAK":"UAK","UGS":"UGS","UGX":"Sule Yuganda","USD":"Dalar Amurka","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"Peso na ƙasar Uruguay","UYW":"UYW","UZS":"Som na ƙasar Uzbekistan","VEB":"VEB","VEF":"VEF","VES":"Bolívar na ƙasar Venezuela","VND":"Kuɗin Vietnam","VNN":"VNN","VUV":"Vatu da ƙasar Vanuatu","WST":"Tala na ƙasar Samoa","XAF":"Kuɗin Sefa na Afirka Ta Tsakiya","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"Dalar Gabashin Karebiyan","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Kuɗin Sefa na Afirka Ta Yamma","XPD":"XPD","XPF":"Kuɗin CFP franc","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"Kudin da ba a sani ba","YDD":"YDD","YER":"Riyal ɗin Yemen","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Kuɗin Afirka Ta Kudu","ZMK":"Kuɗin Zambiya (1968–2012)","ZMW":"Kuɗin Zambiya","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Dalar zimbabuwe","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"ha-NE"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
