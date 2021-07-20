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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("af-NA").length
)) {
// Intl.DisplayNames.~locale.af-NA
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"Afar","ab":"Abkasies","ace":"Atsjenees","ach":"Akoli","ada":"Adangme","ady":"Adyghe","af":"Afrikaans","agq":"Aghem","ain":"Ainu","ak":"Akan","ale":"Aleut","alt":"Suid-Altai","am":"Amharies","an":"Aragonees","anp":"Angika","ar":"Arabies","ar-001":"Moderne Standaardarabies","arc":"Aramees","arn":"Mapuche","arp":"Arapaho","as":"Assamees","asa":"Asu","ast":"Asturies","av":"Avaries","awa":"Awadhi","ay":"Aymara","az":"Azerbeidjans","ba":"Baskir","ban":"Balinees","bas":"Basaa","be":"Belarussies","bem":"Bemba","bez":"Bena","bg":"Bulgaars","bgn":"Wes-Balochi","bho":"Bhojpuri","bi":"Bislama","bin":"Bini","bla":"Siksika","bm":"Bambara","bn":"Bengaals","bo":"Tibettaans","br":"Bretons","brx":"Bodo","bs":"Bosnies","bug":"Buginees","byn":"Blin","ca":"Katalaans","ccp":"Tsjaakma","ce":"Tsjetsjeens","ceb":"Cebuano","cgg":"Kiga","ch":"Chamorro","chk":"Chuukees","chm":"Mari","cho":"Choctaw","chr":"Cherokees","chy":"Cheyennees","ckb":"Sorani","co":"Korsikaans","cop":"Kopties","crs":"Seselwa Franskreools","cs":"Tsjeggies","cu":"Kerkslawies","cv":"Chuvash","cy":"Wallies","da":"Deens","dak":"Dakotaans","dar":"Dakota","dav":"Taita","de":"Duits","de-AT":"Duits (Oostenryk)","de-CH":"Duits (Switserland)","dgr":"Dogrib","dje":"Zarma","doi":"doi","dsb":"Benedesorbies","dua":"Duala","dv":"Divehi","dyo":"Jola-Fonyi","dz":"Dzongkha","dzg":"Dazaga","ebu":"Embu","ee":"Ewe","efi":"Efik","egy":"Antieke Egipties","eka":"Ekajuk","el":"Grieks","en":"Engels","en-AU":"Engels (Australië)","en-CA":"Engels (Kanada)","en-GB":"Engels (VK)","en-US":"Engels (VSA)","eo":"Esperanto","es":"Spaans","es-419":"Spaans (Latyns-Amerika)","es-ES":"Spaans (Spanje)","es-MX":"Spaans (Meksiko)","et":"Estnies","eu":"Baskies","ewo":"Ewondo","fa":"Persies","fa-AF":"Dari","ff":"Fulah","fi":"Fins","fil":"Filippyns","fj":"Fidjiaans","fo":"Faroëes","fon":"Fon","fr":"Frans","fr-CA":"Frans (Kanada)","fr-CH":"Frans (Switserland)","frc":"frc","fur":"Friuliaans","fy":"Fries","ga":"Iers","gaa":"Gaa","gag":"Gagauz","gan":"Gan-Sjinees","gd":"Skotse Gallies","gez":"Geez","gil":"Gilbertees","gl":"Galisies","gn":"Guarani","gor":"Gorontalo","got":"Goties","grc":"Antieke Grieks","gsw":"Switserse Duits","gu":"Goedjarati","guz":"Gusii","gv":"Manx","gwi":"Gwichʼin","ha":"Hausa","hak":"Hakka-Sjinees","haw":"Hawais","he":"Hebreeus","hi":"Hindi","hil":"Hiligaynon","hit":"Hetities","hmn":"Hmong","hr":"Kroaties","hsb":"Oppersorbies","hsn":"Xiang-Sjinees","ht":"Haïtiaans","hu":"Hongaars","hup":"Hupa","hy":"Armeens","hz":"Herero","ia":"Interlingua","iba":"Ibanees","ibb":"Ibibio","id":"Indonesies","ie":"Interlingue","ig":"Igbo","ii":"Sichuan Yi","ilo":"Iloko","inh":"Ingush","io":"Ido","is":"Yslands","it":"Italiaans","iu":"Inoektitoet","ja":"Japannees","jbo":"Lojban","jgo":"Ngomba","jmc":"Machame","jv":"Javaans","ka":"Georgies","kab":"Kabyle","kac":"Kachin","kaj":"Jju","kam":"Kamba","kbd":"Kabardiaans","kcg":"Tyap","kde":"Makonde","kea":"Kabuverdianu","kfo":"Koro","kg":"Kongolees","kgp":"kgp","kha":"Khasi","khq":"Koyra Chiini","ki":"Kikuyu","kj":"Kuanyama","kk":"Kazaks","kkj":"Kako","kl":"Kalaallisut","kln":"Kalenjin","km":"Khmer","kmb":"Kimbundu","kn":"Kannada","ko":"Koreaans","koi":"Komi-Permyaks","kok":"Konkani","kpe":"Kpellees","kr":"Kanuri","krc":"Karachay-Balkar","krl":"Karelies","kru":"Kurukh","ks":"Kasjmirs","ksb":"Shambala","ksf":"Bafia","ksh":"Keuls","ku":"Koerdies","kum":"Kumyk","kv":"Komi","kw":"Kornies","ky":"Kirgisies","la":"Latyn","lad":"Ladino","lag":"Langi","lb":"Luxemburgs","lez":"Lezghies","lg":"Ganda","li":"Limburgs","lij":"lij","lkt":"Lakota","ln":"Lingaals","lo":"Lao","lou":"lou","loz":"Lozi","lrc":"Noord-Luri","lt":"Litaus","lu":"Luba-Katanga","lua":"Luba-Lulua","lun":"Lunda","luo":"Luo","lus":"Mizo","luy":"Luyia","lv":"Letties","mad":"Madurees","mag":"Magahi","mai":"Maithili","mak":"Makasar","mas":"Masai","mdf":"Moksha","men":"Mende","mer":"Meru","mfe":"Morisjen","mg":"Malgassies","mgh":"Makhuwa-Meetto","mgo":"Meta’","mh":"Marshallees","mi":"Maori","mic":"Micmac","min":"Minangkabaus","mk":"Masedonies","ml":"Malabaars","mn":"Mongools","mni":"Manipuri","moh":"Mohawk","mos":"Mossi","mr":"Marathi","ms":"Maleis","mt":"Maltees","mua":"Mundang","mul":"Verskeie tale","mus":"Kreek","mwl":"Mirandees","my":"Birmaans","myv":"Erzya","mzn":"Masanderani","na":"Nauru","nan":"Min Nan-Sjinees","nap":"Neapolitaans","naq":"Nama","nb":"Boeknoors","nd":"Noord-Ndebele","nds":"Nederduits","nds-NL":"Nedersaksies","ne":"Nepalees","new":"Newari","ng":"Ndonga","nia":"Nias","niu":"Niueaans","nl":"Nederlands","nl-BE":"Vlaams","nmg":"Kwasio","nn":"Nuwe Noors","nnh":"Ngiemboon","no":"Noors","nog":"Nogai","nqo":"N’Ko","nr":"Suid-Ndebele","nso":"Noord-Sotho","nus":"Nuer","nv":"Navajo","ny":"Nyanja","nyn":"Nyankole","oc":"Oksitaans","om":"Oromo","or":"Oriya","os":"Osseties","pa":"Pandjabi","pag":"Pangasinan","pam":"Pampanga","pap":"Papiamento","pau":"Palauaans","pcm":"Nigeriese Pidgin","phn":"Fenisies","pl":"Pools","prg":"Pruisies","ps":"Pasjto","pt":"Portugees","pt-BR":"Portugees (Brasilië)","pt-PT":"Portugees (Portugal)","qu":"Quechua","quc":"K’iche’","rap":"Rapanui","rar":"Rarotongaans","rm":"Reto-Romaans","rn":"Rundi","ro":"Roemeens","ro-MD":"Roemeens (Moldowa)","rof":"Rombo","ru":"Russies","rup":"Aromanies","rw":"Rwandees","rwk":"Rwa","sa":"Sanskrit","sad":"Sandawees","sah":"Sakhaans","saq":"Samburu","sat":"Santalies","sba":"Ngambay","sbp":"Sangu","sc":"Sardinies","scn":"Sisiliaans","sco":"Skots","sd":"Sindhi","sdh":"Suid-Koerdies","se":"Noord-Sami","seh":"Sena","ses":"Koyraboro Senni","sg":"Sango","sh":"Serwo-Kroaties","shi":"Tachelhit","shn":"Shan","si":"Sinhala","sk":"Slowaaks","sl":"Sloweens","sm":"Samoaans","sma":"Suid-Sami","smj":"Lule Sami","smn":"Inari Sami","sms":"Skolt Sami","sn":"Shona","snk":"Soninke","so":"Somalies","sq":"Albanees","sr":"Serwies","srn":"Sranan Tongo","ss":"Swazi","ssy":"Saho","st":"Suid-Sotho","su":"Sundanees","suk":"Sukuma","sv":"Sweeds","sw":"Swahili","sw-CD":"Swahili (Demokratiese Republiek van die Kongo)","swb":"Comoraans","syr":"Siries","ta":"Tamil","te":"Teloegoe","tem":"Timne","teo":"Teso","tet":"Tetoem","tg":"Tadjiks","th":"Thai","ti":"Tigrinya","tig":"Tigre","tk":"Turkmeens","tlh":"Klingon","tn":"Tswana","to":"Tongaans","tpi":"Tok Pisin","tr":"Turks","trv":"Taroko","ts":"Tsonga","tt":"Tataars","tum":"Toemboeka","tvl":"Tuvalu","tw":"Twi","twq":"Tasawaq","ty":"Tahities","tyv":"Tuvinees","tzm":"Sentraal-Atlas-Tamazight","udm":"Udmurt","ug":"Uighur","uk":"Oekraïens","umb":"Umbundu","und":"Onbekende taal","ur":"Oerdoe","uz":"Oezbeeks","vai":"Vai","ve":"Venda","vi":"Viëtnamees","vo":"Volapük","vun":"Vunjo","wa":"Walloon","wae":"Walser","wal":"Wolaytta","war":"Waray","wbp":"Warlpiri","wo":"Wolof","wuu":"Wu-Sjinees","xal":"Kalmyk","xh":"Xhosa","xog":"Soga","yav":"Yangben","ybb":"Yemba","yi":"Jiddisj","yo":"Yoruba","yue":"Kantonees","zgh":"Standaard Marokkaanse Tamazight","zh":"Chinees","zh-Hans":"Chinees (Vereenvoudig)","zh-Hant":"Chinees (Tradisioneel)","zu":"Zoeloe","zun":"Zuni","zxx":"Geen taalinhoud nie","zza":"Zaza"},"short":{"az":"Azeri","en-GB":"Engels (VK)","en-US":"Engels (VSA)"},"narrow":{}},"region":{"long":{"142":"Asië","143":"Sentraal-Asië","145":"Wes-Asië","150":"Europa","151":"Oos-Europa","154":"Noord-Europa","155":"Wes-Europa","202":"Afrika suid van die Sahara","419":"Latyns-Amerika","001":"Wêreld","002":"Afrika","003":"Noord-Amerika","005":"Suid-Amerika","009":"Oseanië","011":"Wes-Afrika","013":"Sentraal-Amerika","014":"Oos-Afrika","015":"Noord-Afrika","017":"Midde-Afrika","018":"Suider-Afrika","019":"Amerikas","021":"Noordelike Amerika","029":"Karibiese streek","030":"Oos-Asië","034":"Suid-Asië","035":"Suidoos-Asië","039":"Suid-Europa","053":"Australasië","054":"Melanesië","057":"Mikronesiese streek","061":"Polinesië","AC":"Ascensioneiland","AD":"Andorra","AE":"Verenigde Arabiese Emirate","AF":"Afganistan","AG":"Antigua en Barbuda","AI":"Anguilla","AL":"Albanië","AM":"Armenië","AO":"Angola","AQ":"Antarktika","AR":"Argentinië","AS":"Amerikaanse Samoa","AT":"Oostenryk","AU":"Australië","AW":"Aruba","AX":"Ålandeilande","AZ":"Azerbeidjan","BA":"Bosnië en Herzegowina","BB":"Barbados","BD":"Bangladesj","BE":"België","BF":"Burkina Faso","BG":"Bulgarye","BH":"Bahrein","BI":"Burundi","BJ":"Benin","BL":"Sint Barthélemy","BM":"Bermuda","BN":"Broenei","BO":"Bolivië","BQ":"Karibiese Nederland","BR":"Brasilië","BS":"Bahamas","BT":"Bhoetan","BV":"Bouvet-eiland","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Kanada","CC":"Kokoseilande","CD":"Demokratiese Republiek van die Kongo","CF":"Sentraal-Afrikaanse Republiek","CG":"Kongo - Brazzaville","CH":"Switserland","CI":"Ivoorkus","CK":"Cookeilande","CL":"Chili","CM":"Kameroen","CN":"China","CO":"Colombië","CP":"Clippertoneiland","CR":"Costa Rica","CU":"Kuba","CV":"Kaap Verde","CW":"Curaçao","CX":"Kerseiland","CY":"Siprus","CZ":"Tsjeggië","DE":"Duitsland","DG":"Diego Garcia","DJ":"Djiboeti","DK":"Denemarke","DM":"Dominica","DO":"Dominikaanse Republiek","DZ":"Algerië","EA":"Ceuta en Melilla","EC":"Ecuador","EE":"Estland","EG":"Egipte","EH":"Wes-Sahara","ER":"Eritrea","ES":"Spanje","ET":"Ethiopië","EU":"Europese Unie","EZ":"Eurosone","FI":"Finland","FJ":"Fidji","FK":"Falklandeilande","FM":"Mikronesië","FO":"Faroëreilande","FR":"Frankryk","GA":"Gaboen","GB":"Verenigde Koninkryk","GD":"Grenada","GE":"Georgië","GF":"Frans-Guyana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Groenland","GM":"Gambië","GN":"Guinee","GP":"Guadeloupe","GQ":"Ekwatoriaal-Guinee","GR":"Griekeland","GS":"Suid-Georgië en die Suidelike Sandwicheilande","GT":"Guatemala","GU":"Guam","GW":"Guinee-Bissau","GY":"Guyana","HK":"Hongkong SAS China","HM":"Heardeiland en McDonaldeilande","HN":"Honduras","HR":"Kroasië","HT":"Haïti","HU":"Hongarye","IC":"Kanariese Eilande","ID":"Indonesië","IE":"Ierland","IL":"Israel","IM":"Eiland Man","IN":"Indië","IO":"Brits-Indiese Oseaangebied","IQ":"Irak","IR":"Iran","IS":"Ysland","IT":"Italië","JE":"Jersey","JM":"Jamaika","JO":"Jordanië","JP":"Japan","KE":"Kenia","KG":"Kirgistan","KH":"Kambodja","KI":"Kiribati","KM":"Comore","KN":"Sint Kitts en Nevis","KP":"Noord-Korea","KR":"Suid-Korea","KW":"Koeweit","KY":"Kaaimanseilande","KZ":"Kazakstan","LA":"Laos","LB":"Libanon","LC":"Sint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberië","LS":"Lesotho","LT":"Litaue","LU":"Luxemburg","LV":"Letland","LY":"Libië","MA":"Marokko","MC":"Monaco","MD":"Moldowa","ME":"Montenegro","MF":"Sint Martin","MG":"Madagaskar","MH":"Marshalleilande","MK":"Noord-Macedonië","ML":"Mali","MM":"Mianmar (Birma)","MN":"Mongolië","MO":"Macau SAS China","MP":"Noord-Mariane-eilande","MQ":"Martinique","MR":"Mauritanië","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maledive","MW":"Malawi","MX":"Meksiko","MY":"Maleisië","MZ":"Mosambiek","NA":"Namibië","NC":"Nieu-Kaledonië","NE":"Niger","NF":"Norfolkeiland","NG":"Nigerië","NI":"Nicaragua","NL":"Nederland","NO":"Noorweë","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"Nieu-Seeland","OM":"Oman","PA":"Panama","PE":"Peru","PF":"Frans-Polinesië","PG":"Papoea-Nieu-Guinee","PH":"Filippyne","PK":"Pakistan","PL":"Pole","PM":"Sint Pierre en Miquelon","PN":"Pitcairneilande","PR":"Puerto Rico","PS":"Palestynse Grondgebiede","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Katar","QO":"Afgeleë Oseanië","RE":"Réunion","RO":"Roemenië","RS":"Serwië","RU":"Rusland","RW":"Rwanda","SA":"Saoedi-Arabië","SB":"Salomonseilande","SC":"Seychelle","SD":"Soedan","SE":"Swede","SG":"Singapoer","SH":"Sint Helena","SI":"Slowenië","SJ":"Spitsbergen en Jan Mayen","SK":"Slowakye","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalië","SR":"Suriname","SS":"Suid-Soedan","ST":"São Tomé en Príncipe","SV":"El Salvador","SX":"Sint Maarten","SY":"Sirië","SZ":"Eswatini","TA":"Tristan da Cunha","TC":"Turks- en Caicoseilande","TD":"Tsjad","TF":"Franse Suidelike Gebiede","TG":"Togo","TH":"Thailand","TJ":"Tadjikistan","TK":"Tokelau","TL":"Oos-Timor","TM":"Turkmenistan","TN":"Tunisië","TO":"Tonga","TR":"Turkye","TT":"Trinidad en Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzanië","UA":"Oekraïne","UG":"Uganda","UM":"Klein afgeleë eilande van die VSA","UN":"Verenigde Nasies","US":"Verenigde State van Amerika","UY":"Uruguay","UZ":"Oesbekistan","VA":"Vatikaanstad","VC":"Sint Vincent en die Grenadine","VE":"Venezuela","VG":"Britse Maagde-eilande","VI":"VSA se Maagde-eilande","VN":"Viëtnam","VU":"Vanuatu","WF":"Wallis en Futuna","WS":"Samoa","XA":"Pseudoaksente","XB":"Pseudotweerigting","XK":"Kosovo","YE":"Jemen","YT":"Mayotte","ZA":"Suid-Afrika","ZM":"Zambië","ZW":"Zimbabwe","ZZ":"Onbekende gebied"},"short":{"GB":"VK","HK":"Hongkong","MO":"Macau","PS":"Palestina","UN":"VN","US":"VSA"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arabies","Aran":"Aran","Armi":"Armi","Armn":"Armeens","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Bengaals","Bhks":"Bhks","Bopo":"Bopomofo","Brah":"Brah","Brai":"Braille","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Sirillies","Deva":"Devanagari","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Etiopies","Geor":"Georgies","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grieks","Gujr":"Gudjarati","Guru":"Gurmukhi","Hanb":"Han met Bopomofo","Hang":"Hangul","Hani":"Han","Hano":"Hano","Hans":"Vereenvoudig","Hant":"Tradisioneel","Hatr":"Hatr","Hebr":"Hebreeus","Hira":"Hiragana","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Japannese lettergreepskrif","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Japannees","Kali":"Kali","Kana":"Katakana","Khar":"Khar","Khmr":"Khmer","Khoj":"Khoj","Kits":"Kits","Knda":"Kannada","Kore":"Koreaans","Kthi":"Kthi","Lana":"Lana","Laoo":"Lao","Latn":"Latyn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Malabaars","Modi":"Modi","Mong":"Mongools","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mianmar","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Oriya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinhala","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Tamil","Tang":"Tang","Tavt":"Tavt","Telu":"Teloegoe","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaana","Thai":"Thai","Tibt":"Tibettaans","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Wiskundige notasie","Zsye":"Emoji","Zsym":"Simbole","Zxxx":"Ongeskrewe","Zyyy":"Gemeenskaplik","Zzzz":"Onbekende skryfstelsel"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Verenigde Arabiese Emirate-dirham","AFA":"AFA","AFN":"Afgaanse afgani","ALK":"ALK","ALL":"Albanese lek","AMD":"Armeense dram","ANG":"Nederlands-Antilliaanse gulde","AOA":"Angolese kwanza","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"Argentynse peso","ATS":"ATS","AUD":"Australiese dollar","AWG":"Arubaanse floryn","AZM":"AZM","AZN":"Azerbeidjaanse manat","BAD":"BAD","BAM":"Bosnies-Herzegowiniese omskakelbare marka","BAN":"BAN","BBD":"Barbados-dollar","BDT":"Bangladesjiese taka","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"Bulgaarse lev","BGO":"BGO","BHD":"Bahreinse dinar","BIF":"Burundiese frank","BMD":"Bermuda-dollar","BND":"Broeneise dollar","BOB":"Boliviaanse boliviano","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"Brasilliaanse reaal","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"Bahamiaanse dollar","BTN":"Bhoetanese ngoeltroem","BUK":"BUK","BWP":"Botswana-pula","BYB":"BYB","BYN":"Belarusiese roebel","BYR":"Belo-Russiese roebel (2000–2016)","BZD":"Beliziese dollar","CAD":"Kanadese dollar","CDF":"Kongolese frank","CHE":"CHE","CHF":"Switserse frank","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"Chileense peso","CNH":"Chinese joean (buiteland)","CNX":"CNX","CNY":"Chinese joean","COP":"Colombiaanse peso","COU":"COU","CRC":"Costa Ricaanse colón","CSD":"CSD","CSK":"CSK","CUC":"Kubaanse omskakelbare peso","CUP":"Kubaanse peso","CVE":"Kaap Verdiese escudo","CYP":"CYP","CZK":"Tsjeggiese kroon","DDM":"DDM","DEM":"DEM","DJF":"Djiboeti-frank","DKK":"Deense kroon","DOP":"Dominikaanse peso","DZD":"Algeriese dinar","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Egiptiese pond","ERN":"Eritrese nakfa","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Etiopiese birr","EUR":"euro","FIM":"FIM","FJD":"Fidjiaanse dollar","FKP":"Falkland-eilandse pond","FRF":"FRF","GBP":"Britse pond","GEK":"GEK","GEL":"Georgiese lari","GHC":"Ghanese cedi (1979–2007)","GHS":"Ghanese cedi","GIP":"Gibraltarese pond","GMD":"Gambiese dalasi","GNF":"Guinese frank","GNS":"Guinese syli","GQE":"GQE","GRD":"GRD","GTQ":"Guatemalaanse quetzal","GWE":"GWE","GWP":"GWP","GYD":"Guyanese dollar","HKD":"Hongkongse dollar","HNL":"Hondurese lempira","HRD":"HRD","HRK":"Kroatiese kuna","HTG":"Haïtiaanse gourde","HUF":"Hongaarse florint","IDR":"Indonesiese roepia","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"Israeliese nuwe sikkel","INR":"Indiese roepee","IQD":"Irakse dinar","IRR":"Iranse rial","ISJ":"ISJ","ISK":"Yslandse kroon","ITL":"Italiaanse lier","JMD":"Jamaikaanse dollar","JOD":"Jordaniese dinar","JPY":"Japannese jen","KES":"Keniaanse sjieling","KGS":"Kirgisiese som","KHR":"Kambodjaanse riel","KMF":"Comoraanse frank","KPW":"Noord-Koreaanse won","KRH":"KRH","KRO":"KRO","KRW":"Suid-Koreaanse won","KWD":"Koeweitse dinar","KYD":"Cayman-eilandse dollar","KZT":"Kazakse tenge","LAK":"Laosiaanse kip","LBP":"Libanese pond","LKR":"Sri Lankaanse roepee","LRD":"Liberiese dollar","LSL":"Lesotho loti","LTL":"Litause litas","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"Lettiese lats","LVR":"LVR","LYD":"Libiese dinar","MAD":"Marokkaanse dirham","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"Moldowiese leu","MGA":"Malgassiese ariary","MGF":"MGF","MKD":"Macedoniese denar","MKN":"MKN","MLF":"MLF","MMK":"Mianmese kyat","MNT":"Mongoolse toegrik","MOP":"Macaose pataca","MRO":"Mauritaniese ouguiya (1973–2017)","MRU":"Mauritaniese ouguiya","MTL":"MTL","MTP":"MTP","MUR":"Mauritiaanse roepee","MVP":"MVP","MVR":"Malediviese rufia","MWK":"Malawiese kwacha","MXN":"Meksikaanse peso","MXP":"MXP","MXV":"MXV","MYR":"Maleisiese ringgit","MZE":"MZE","MZM":"Mosambiekse metical (1980–2006)","MZN":"Mosambiekse metical","NAD":"Namibiese dollar","NGN":"Nigeriese naira","NIC":"NIC","NIO":"Nicaraguaanse córdoba","NLG":"NLG","NOK":"Noorse kroon","NPR":"Nepalese roepee","NZD":"Nieu-Seelandse dollar","OMR":"Omaanse rial","PAB":"Panamese balboa","PEI":"PEI","PEN":"Peruaanse sol","PES":"PES","PGK":"Papoea-Nieu-Guinese kina","PHP":"Filippynse peso","PKR":"Pakistanse roepee","PLN":"Poolse zloty","PLZ":"PLZ","PTE":"PTE","PYG":"Paraguaanse guarani","QAR":"Katarrese rial","RHD":"RHD","ROL":"ROL","RON":"Roemeense leu","RSD":"Serwiese dinar","RUB":"Russiese roebel","RUR":"RUR","RWF":"Rwandese frank","SAR":"Saoedi-Arabiese riyal","SBD":"Salomonseilandse dollar","SCR":"Seychellese roepee","SDD":"SDD","SDG":"Soedannese pond","SDP":"Soedannese pond (1957–1998)","SEK":"Sweedse kroon","SGD":"Singapoer-dollar","SHP":"Sint Helena-pond","SIT":"SIT","SKK":"SKK","SLL":"Sierra Leoniese leone","SOS":"Somaliese sjieling","SRD":"Surinaamse dollar","SRG":"SRG","SSP":"Suid-Soedanese pond","STD":"São Tomé en Príncipe dobra (1977–2017)","STN":"São Tomé en Príncipe-dobra","SUR":"SUR","SVC":"SVC","SYP":"Siriese pond","SZL":"Swazilandse lilangeni","THB":"Thaise baht","TJR":"TJR","TJS":"Tadjikse somoni","TMM":"TMM","TMT":"Turkmeense manat","TND":"Tunisiese dinar","TOP":"Tongaanse pa’anga","TPE":"TPE","TRL":"Turkse lier (1922–2005)","TRY":"Turkse lira","TTD":"Trinidad en Tobago-dollar","TWD":"Nuwe Taiwanese dollar","TZS":"Tanzaniese sjieling","UAH":"Oekraïnse hriwna","UAK":"UAK","UGS":"UGS","UGX":"Ugandese sjieling","USD":"VSA-dollar","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"Uruguaanse peso","UYW":"UYW","UZS":"Oezbekiese som","VEB":"VEB","VEF":"Venezolaanse bolivar","VES":"Venezolaanse bolívar","VND":"Viëtnamese dong","VNN":"VNN","VUV":"Vanuatuse vatu","WST":"Samoaanse tala","XAF":"Sentraal Afrikaanse CFA-frank","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"Oos-Karibiese dollar","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Wes-Afrikaanse CFA-frank","XPD":"XPD","XPF":"CFP-frank","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"onbekende geldeenheid","YDD":"YDD","YER":"Jemenitiese rial","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Suid-Afrikaanse rand","ZMK":"Zambiese kwacha (1968–2012)","ZMW":"Zambiese kwacha","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Zimbabwiese dollar","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"af-NA"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
