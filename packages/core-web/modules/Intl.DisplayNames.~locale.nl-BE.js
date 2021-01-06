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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("nl-BE").length
)) {
// Intl.DisplayNames.~locale.nl-BE
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"Afar","ab":"Abchazisch","ace":"Atjehs","ach":"Akoli","ada":"Adangme","ady":"Adygees","ae":"Avestisch","aeb":"Tunesisch Arabisch","af":"Afrikaans","afh":"Afrihili","agq":"Aghem","ain":"Aino","ak":"Akan","akk":"Akkadisch","akz":"Alabama","ale":"Aleoetisch","aln":"Gegisch","alt":"Zuid-Altaïsch","am":"Amhaars","an":"Aragonees","ang":"Oudengels","anp":"Angika","ar":"Arabisch","ar-001":"Arabisch (wereld)","arc":"Aramees","arn":"Mapudungun","aro":"Araona","arp":"Arapaho","arq":"Algerijns Arabisch","ars":"Nadjdi-Arabisch","arw":"Arawak","ary":"Marokkaans Arabisch","arz":"Egyptisch Arabisch","as":"Assamees","asa":"Asu","ase":"Amerikaanse Gebarentaal","ast":"Asturisch","av":"Avarisch","avk":"Kotava","awa":"Awadhi","ay":"Aymara","az":"Azerbeidzjaans","ba":"Basjkiers","bal":"Beloetsji","ban":"Balinees","bar":"Beiers","bas":"Basa","bax":"Bamoun","bbc":"Batak Toba","bbj":"Ghomala’","be":"Belarussisch","bej":"Beja","bem":"Bemba","bew":"Betawi","bez":"Bena","bfd":"Bafut","bfq":"Badaga","bg":"Bulgaars","bgn":"Westers Beloetsji","bho":"Bhojpuri","bi":"Bislama","bik":"Bikol","bin":"Bini","bjn":"Banjar","bkm":"Kom","bla":"Siksika","bm":"Bambara","bn":"Bengaals","bo":"Tibetaans","bpy":"Bishnupriya","bqi":"Bakhtiari","br":"Bretons","bra":"Braj","brh":"Brahui","brx":"Bodo","bs":"Bosnisch","bss":"Akoose","bua":"Boerjatisch","bug":"Buginees","bum":"Bulu","byn":"Blin","byv":"Medumba","ca":"Catalaans","cad":"Caddo","car":"Caribisch","cay":"Cayuga","cch":"Atsam","ccp":"Chakma","ce":"Tsjetsjeens","ceb":"Cebuano","cgg":"Chiga","ch":"Chamorro","chb":"Chibcha","chg":"Chagatai","chk":"Chuukees","chm":"Mari","chn":"Chinook Jargon","cho":"Choctaw","chp":"Chipewyan","chr":"Cherokee","chy":"Cheyenne","ckb":"Soranî","co":"Corsicaans","cop":"Koptisch","cps":"Capiznon","cr":"Cree","crh":"Krim-Tataars","crs":"Seychellencreools","cs":"Tsjechisch","csb":"Kasjoebisch","cu":"Kerkslavisch","cv":"Tsjoevasjisch","cy":"Welsh","da":"Deens","dak":"Dakota","dar":"Dargwa","dav":"Taita","de":"Duits","de-AT":"Duits (Oostenrijk)","de-CH":"Duits (Zwitserland)","del":"Delaware","den":"Slavey","dgr":"Dogrib","din":"Dinka","dje":"Zarma","doi":"Dogri","dsb":"Nedersorbisch","dtp":"Dusun","dua":"Duala","dum":"Middelnederlands","dv":"Divehi","dyo":"Jola-Fonyi","dyu":"Dyula","dz":"Dzongkha","dzg":"Dazaga","ebu":"Embu","ee":"Ewe","efi":"Efik","egl":"Emiliano","egy":"Oudegyptisch","eka":"Ekajuk","el":"Grieks","elx":"Elamitisch","en":"Engels","en-AU":"Engels (Australië)","en-CA":"Engels (Canada)","en-GB":"Engels (Verenigd Koninkrijk)","en-US":"Engels (Verenigde Staten)","enm":"Middelengels","eo":"Esperanto","es":"Spaans","es-419":"Spaans (Latijns-Amerika)","es-ES":"Spaans (Spanje)","es-MX":"Spaans (Mexico)","esu":"Yupik","et":"Estisch","eu":"Baskisch","ewo":"Ewondo","ext":"Extremeens","fa":"Perzisch","fa-AF":"Dari","fan":"Fang","fat":"Fanti","ff":"Fulah","fi":"Fins","fil":"Filipijns","fit":"Tornedal-Fins","fj":"Fijisch","fo":"Faeröers","fon":"Fon","fr":"Frans","fr-CA":"Frans (Canada)","fr-CH":"Frans (Zwitserland)","frc":"Cajun-Frans","frm":"Middelfrans","fro":"Oudfrans","frp":"Arpitaans","frr":"Noord-Fries","frs":"Oost-Fries","fur":"Friulisch","fy":"Fries","ga":"Iers","gaa":"Ga","gag":"Gagaoezisch","gan":"Ganyu","gay":"Gayo","gba":"Gbaya","gbz":"Zoroastrisch Dari","gd":"Schots-Gaelisch","gez":"Ge’ez","gil":"Gilbertees","gl":"Galicisch","glk":"Gilaki","gmh":"Middelhoogduits","gn":"Guaraní","goh":"Oudhoogduits","gom":"Goa Konkani","gon":"Gondi","gor":"Gorontalo","got":"Gothisch","grb":"Grebo","grc":"Oudgrieks","gsw":"Zwitserduits","gu":"Gujarati","guc":"Wayuu","gur":"Gurune","guz":"Gusii","gv":"Manx","gwi":"Gwichʼin","ha":"Hausa","hai":"Haida","hak":"Hakka","haw":"Hawaïaans","he":"Hebreeuws","hi":"Hindi","hif":"Fijisch Hindi","hil":"Hiligaynon","hit":"Hettitisch","hmn":"Hmong","ho":"Hiri Motu","hr":"Kroatisch","hsb":"Oppersorbisch","hsn":"Xiangyu","ht":"Haïtiaans Creools","hu":"Hongaars","hup":"Hupa","hy":"Armeens","hz":"Herero","ia":"Interlingua","iba":"Iban","ibb":"Ibibio","id":"Indonesisch","ie":"Interlingue","ig":"Igbo","ii":"Yi","ik":"Inupiaq","ilo":"Iloko","inh":"Ingoesjetisch","io":"Ido","is":"IJslands","it":"Italiaans","iu":"Inuktitut","izh":"Ingrisch","ja":"Japans","jam":"Jamaicaans Creools","jbo":"Lojban","jgo":"Ngomba","jmc":"Machame","jpr":"Judeo-Perzisch","jrb":"Judeo-Arabisch","jut":"Jutlands","jv":"Javaans","ka":"Georgisch","kaa":"Karakalpaks","kab":"Kabylisch","kac":"Kachin","kaj":"Jju","kam":"Kamba","kaw":"Kawi","kbd":"Kabardisch","kbl":"Kanembu","kcg":"Tyap","kde":"Makonde","kea":"Kaapverdisch Creools","ken":"Kenyang","kfo":"Koro","kg":"Kongo","kgp":"Kaingang","kha":"Khasi","kho":"Khotanees","khq":"Koyra Chiini","khw":"Khowar","ki":"Gikuyu","kiu":"Kirmanckî","kj":"Kuanyama","kk":"Kazachs","kkj":"Kako","kl":"Groenlands","kln":"Kalenjin","km":"Khmer","kmb":"Kimbundu","kn":"Kannada","ko":"Koreaans","koi":"Komi-Permjaaks","kok":"Konkani","kos":"Kosraeaans","kpe":"Kpelle","kr":"Kanuri","krc":"Karatsjaj-Balkarisch","kri":"Krio","krj":"Kinaray-a","krl":"Karelisch","kru":"Kurukh","ks":"Kasjmiri","ksb":"Shambala","ksf":"Bafia","ksh":"Kölsch","ku":"Koerdisch","kum":"Koemuks","kut":"Kutenai","kv":"Komi","kw":"Cornish","ky":"Kirgizisch","la":"Latijn","lad":"Ladino","lag":"Langi","lah":"Lahnda","lam":"Lamba","lb":"Luxemburgs","lez":"Lezgisch","lfn":"Lingua Franca Nova","lg":"Luganda","li":"Limburgs","lij":"Ligurisch","liv":"Lijfs","lkt":"Lakota","lmo":"Lombardisch","ln":"Lingala","lo":"Laotiaans","lol":"Mongo","lou":"Louisiana-Creools","loz":"Lozi","lrc":"Noordelijk Luri","lt":"Litouws","ltg":"Letgaals","lu":"Luba-Katanga","lua":"Luba-Lulua","lui":"Luiseno","lun":"Lunda","luo":"Luo","lus":"Mizo","luy":"Luyia","lv":"Lets","lzh":"Klassiek Chinees","lzz":"Lazisch","mad":"Madoerees","maf":"Mafa","mag":"Magahi","mai":"Maithili","mak":"Makassaars","man":"Mandingo","mas":"Maa","mde":"Maba","mdf":"Moksja","mdr":"Mandar","men":"Mende","mer":"Meru","mfe":"Morisyen","mg":"Malagassisch","mga":"Middeliers","mgh":"Makhuwa-Meetto","mgo":"Meta’","mh":"Marshallees","mi":"Maori","mic":"Mi’kmaq","min":"Minangkabau","mk":"Macedonisch","ml":"Malayalam","mn":"Mongools","mnc":"Mantsjoe","mni":"Meitei","moh":"Mohawk","mos":"Mossi","mr":"Marathi","mrj":"West-Mari","ms":"Maleis","mt":"Maltees","mua":"Mundang","mul":"meerdere talen","mus":"Creek","mwl":"Mirandees","mwr":"Marwari","mwv":"Mentawai","my":"Birmaans","mye":"Myene","myv":"Erzja","mzn":"Mazanderani","na":"Nauruaans","nan":"Minnanyu","nap":"Napolitaans","naq":"Nama","nb":"Noors - Bokmål","nd":"Noord-Ndebele","nds":"Nedersaksisch","nds-NL":"Nederduits","ne":"Nepalees","new":"Newari","ng":"Ndonga","nia":"Nias","niu":"Niueaans","njo":"Ao Naga","nl":"Nederlands","nl-BE":"Nederlands (België)","nmg":"Ngumba","nn":"Noors - Nynorsk","nnh":"Ngiemboon","no":"Noors","nog":"Nogai","non":"Oudnoors","nov":"Novial","nqo":"N’Ko","nr":"Zuid-Ndbele","nso":"Noord-Sotho","nus":"Nuer","nv":"Navajo","nwc":"Klassiek Nepalbhasa","ny":"Nyanja","nym":"Nyamwezi","nyn":"Nyankole","nyo":"Nyoro","nzi":"Nzima","oc":"Occitaans","oj":"Ojibwa","om":"Afaan Oromo","or":"Odia","os":"Ossetisch","osa":"Osage","ota":"Ottomaans-Turks","pa":"Punjabi","pag":"Pangasinan","pal":"Pahlavi","pam":"Pampanga","pap":"Papiaments","pau":"Palaus","pcd":"Picardisch","pcm":"Nigeriaans Pidgin","pdc":"Pennsylvania-Duits","pdt":"Plautdietsch","peo":"Oudperzisch","pfl":"Paltsisch","phn":"Foenicisch","pi":"Pali","pl":"Pools","pms":"Piëmontees","pnt":"Pontisch","pon":"Pohnpeiaans","prg":"Oudpruisisch","pro":"Oudprovençaals","ps":"Pasjtoe","pt":"Portugees","pt-BR":"Portugees (Brazilië)","pt-PT":"Portugees (Portugal)","qu":"Quechua","quc":"K’iche’","qug":"Kichwa","raj":"Rajasthani","rap":"Rapanui","rar":"Rarotongan","rgn":"Romagnol","rif":"Riffijns","rm":"Reto-Romaans","rn":"Kirundi","ro":"Roemeens","ro-MD":"Roemeens (Moldavië)","rof":"Rombo","rom":"Romani","root":"Root","rtm":"Rotumaans","ru":"Russisch","rue":"Roetheens","rug":"Roviana","rup":"Aroemeens","rw":"Kinyarwanda","rwk":"Rwa","sa":"Sanskriet","sad":"Sandawe","sah":"Jakoets","sam":"Samaritaans-Aramees","saq":"Samburu","sas":"Sasak","sat":"Santali","saz":"Saurashtra","sba":"Ngambay","sbp":"Sangu","sc":"Sardijns","scn":"Siciliaans","sco":"Schots","sd":"Sindhi","sdc":"Sassarees","sdh":"Pahlavani","se":"Noord-Samisch","see":"Seneca","seh":"Sena","sei":"Seri","sel":"Selkoeps","ses":"Koyraboro Senni","sg":"Sango","sga":"Oudiers","sgs":"Samogitisch","sh":"Servo-Kroatisch","shi":"Tashelhiyt","shn":"Shan","shu":"Tsjadisch Arabisch","si":"Singalees","sid":"Sidamo","sk":"Slowaaks","sl":"Sloveens","sli":"Silezisch Duits","sly":"Selayar","sm":"Samoaans","sma":"Zuid-Samisch","smj":"Lule-Samisch","smn":"Inari-Samisch","sms":"Skolt-Samisch","sn":"Shona","snk":"Soninke","so":"Somalisch","sog":"Sogdisch","sq":"Albanees","sr":"Servisch","srn":"Sranantongo","srr":"Serer","ss":"Swazi","ssy":"Saho","st":"Zuid-Sotho","stq":"Saterfries","su":"Soendanees","suk":"Sukuma","sus":"Soesoe","sux":"Soemerisch","sv":"Zweeds","sw":"Swahili","sw-CD":"Swahili (Congo-Kinshasa)","swb":"Shimaore","syc":"Klassiek Syrisch","syr":"Syrisch","szl":"Silezisch","ta":"Tamil","tcy":"Tulu","te":"Telugu","tem":"Timne","teo":"Teso","ter":"Tereno","tet":"Tetun","tg":"Tadzjieks","th":"Thai","ti":"Tigrinya","tig":"Tigre","tiv":"Tiv","tk":"Turkmeens","tkl":"Tokelaus","tkr":"Tsakhur","tl":"Tagalog","tlh":"Klingon","tli":"Tlingit","tly":"Talysh","tmh":"Tamashek","tn":"Tswana","to":"Tongaans","tog":"Nyasa Tonga","tpi":"Tok Pisin","tr":"Turks","tru":"Turoyo","trv":"Taroko","ts":"Tsonga","tsd":"Tsakonisch","tsi":"Tsimshian","tt":"Tataars","ttt":"Moslim Tat","tum":"Toemboeka","tvl":"Tuvaluaans","tw":"Twi","twq":"Tasawaq","ty":"Tahitiaans","tyv":"Toevaans","tzm":"Tamazight (Centraal-Marokko)","udm":"Oedmoerts","ug":"Oeigoers","uga":"Oegaritisch","uk":"Oekraïens","umb":"Umbundu","und":"onbekende taal","ur":"Urdu","uz":"Oezbeeks","vai":"Vai","ve":"Venda","vec":"Venetiaans","vep":"Wepsisch","vi":"Vietnamees","vls":"West-Vlaams","vmf":"Opperfrankisch","vo":"Volapük","vot":"Votisch","vro":"Võro","vun":"Vunjo","wa":"Waals","wae":"Walser","wal":"Wolaytta","war":"Waray","was":"Washo","wbp":"Warlpiri","wo":"Wolof","wuu":"Wuyu","xal":"Kalmuks","xh":"Xhosa","xmf":"Mingreels","xog":"Soga","yao":"Yao","yap":"Yapees","yav":"Yangben","ybb":"Yemba","yi":"Jiddisch","yo":"Yoruba","yrl":"Nheengatu","yue":"Kantonees","za":"Zhuang","zap":"Zapotec","zbl":"Blissymbolen","zea":"Zeeuws","zen":"Zenaga","zgh":"Standaard Marokkaanse Tamazight","zh":"Chinees","zh-Hans":"Chinees (vereenvoudigd)","zh-Hant":"Chinees (traditioneel)","zu":"Zoeloe","zun":"Zuni","zxx":"geen linguïstische inhoud","zza":"Zaza"},"short":{"az":"Azeri","en-GB":"Engels (VK)","en-US":"Engels (VS)"},"narrow":{}},"region":{"long":{"142":"Azië","143":"Centraal-Azië","145":"West-Azië","150":"Europa","151":"Oost-Europa","154":"Noord-Europa","155":"West-Europa","202":"Sub-Saharaans Afrika","419":"Latijns-Amerika","001":"wereld","002":"Afrika","003":"Noord-Amerika","005":"Zuid-Amerika","009":"Oceanië","011":"West-Afrika","013":"Midden-Amerika","014":"Oost-Afrika","015":"Noord-Afrika","017":"Centraal-Afrika","018":"Zuidelijk Afrika","019":"Amerika","021":"Noordelijk Amerika","029":"Caribisch gebied","030":"Oost-Azië","034":"Zuid-Azië","035":"Zuidoost-Azië","039":"Zuid-Europa","053":"Australazië","054":"Melanesië","057":"Micronesische regio","061":"Polynesië","AC":"Ascension","AD":"Andorra","AE":"Verenigde Arabische Emiraten","AF":"Afghanistan","AG":"Antigua en Barbuda","AI":"Anguilla","AL":"Albanië","AM":"Armenië","AO":"Angola","AQ":"Antarctica","AR":"Argentinië","AS":"Amerikaans-Samoa","AT":"Oostenrijk","AU":"Australië","AW":"Aruba","AX":"Åland","AZ":"Azerbeidzjan","BA":"Bosnië en Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"België","BF":"Burkina Faso","BG":"Bulgarije","BH":"Bahrein","BI":"Burundi","BJ":"Benin","BL":"Saint-Barthélemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"Caribisch Nederland","BR":"Brazilië","BS":"Bahama’s","BT":"Bhutan","BV":"Bouveteiland","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Cocoseilanden","CD":"Congo-Kinshasa","CF":"Centraal-Afrikaanse Republiek","CG":"Congo-Brazzaville","CH":"Zwitserland","CI":"Ivoorkust","CK":"Cookeilanden","CL":"Chili","CM":"Kameroen","CN":"China","CO":"Colombia","CP":"Clipperton","CR":"Costa Rica","CU":"Cuba","CV":"Kaapverdië","CW":"Curaçao","CX":"Christmaseiland","CY":"Cyprus","CZ":"Tsjechië","DE":"Duitsland","DG":"Diego Garcia","DJ":"Djibouti","DK":"Denemarken","DM":"Dominica","DO":"Dominicaanse Republiek","DZ":"Algerije","EA":"Ceuta en Melilla","EC":"Ecuador","EE":"Estland","EG":"Egypte","EH":"Westelijke Sahara","ER":"Eritrea","ES":"Spanje","ET":"Ethiopië","EU":"Europese Unie","EZ":"eurozone","FI":"Finland","FJ":"Fiji","FK":"Falklandeilanden","FM":"Micronesia","FO":"Faeröer","FR":"Frankrijk","GA":"Gabon","GB":"Verenigd Koninkrijk","GD":"Grenada","GE":"Georgië","GF":"Frans-Guyana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Groenland","GM":"Gambia","GN":"Guinee","GP":"Guadeloupe","GQ":"Equatoriaal-Guinea","GR":"Griekenland","GS":"Zuid-Georgia en Zuidelijke Sandwicheilanden","GT":"Guatemala","GU":"Guam","GW":"Guinee-Bissau","GY":"Guyana","HK":"Hongkong SAR van China","HM":"Heard en McDonaldeilanden","HN":"Honduras","HR":"Kroatië","HT":"Haïti","HU":"Hongarije","IC":"Canarische Eilanden","ID":"Indonesië","IE":"Ierland","IL":"Israël","IM":"Isle of Man","IN":"India","IO":"Brits Indische Oceaanterritorium","IQ":"Irak","IR":"Iran","IS":"IJsland","IT":"Italië","JE":"Jersey","JM":"Jamaica","JO":"Jordanië","JP":"Japan","KE":"Kenia","KG":"Kirgizië","KH":"Cambodja","KI":"Kiribati","KM":"Comoren","KN":"Saint Kitts en Nevis","KP":"Noord-Korea","KR":"Zuid-Korea","KW":"Koeweit","KY":"Kaaimaneilanden","KZ":"Kazachstan","LA":"Laos","LB":"Libanon","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Litouwen","LU":"Luxemburg","LV":"Letland","LY":"Libië","MA":"Marokko","MC":"Monaco","MD":"Moldavië","ME":"Montenegro","MF":"Saint-Martin","MG":"Madagaskar","MH":"Marshalleilanden","MK":"Noord-Macedonië","ML":"Mali","MM":"Myanmar (Birma)","MN":"Mongolië","MO":"Macau SAR van China","MP":"Noordelijke Marianen","MQ":"Martinique","MR":"Mauritanië","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldiven","MW":"Malawi","MX":"Mexico","MY":"Maleisië","MZ":"Mozambique","NA":"Namibië","NC":"Nieuw-Caledonië","NE":"Niger","NF":"Norfolk","NG":"Nigeria","NI":"Nicaragua","NL":"Nederland","NO":"Noorwegen","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"Nieuw-Zeeland","OM":"Oman","PA":"Panama","PE":"Peru","PF":"Frans-Polynesië","PG":"Papoea-Nieuw-Guinea","PH":"Filipijnen","PK":"Pakistan","PL":"Polen","PM":"Saint-Pierre en Miquelon","PN":"Pitcairneilanden","PR":"Puerto Rico","PS":"Palestijnse gebieden","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","QO":"overig Oceanië","RE":"Réunion","RO":"Roemenië","RS":"Servië","RU":"Rusland","RW":"Rwanda","SA":"Saoedi-Arabië","SB":"Salomonseilanden","SC":"Seychellen","SD":"Soedan","SE":"Zweden","SG":"Singapore","SH":"Sint-Helena","SI":"Slovenië","SJ":"Spitsbergen en Jan Mayen","SK":"Slowakije","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalië","SR":"Suriname","SS":"Zuid-Soedan","ST":"Sao Tomé en Principe","SV":"El Salvador","SX":"Sint-Maarten","SY":"Syrië","SZ":"Eswatini","TA":"Tristan da Cunha","TC":"Turks- en Caicoseilanden","TD":"Tsjaad","TF":"Franse Gebieden in de zuidelijke Indische Oceaan","TG":"Togo","TH":"Thailand","TJ":"Tadzjikistan","TK":"Tokelau","TL":"Oost-Timor","TM":"Turkmenistan","TN":"Tunesië","TO":"Tonga","TR":"Turkije","TT":"Trinidad en Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzania","UA":"Oekraïne","UG":"Oeganda","UM":"Kleine afgelegen eilanden van de Verenigde Staten","UN":"Verenigde Naties","US":"Verenigde Staten","UY":"Uruguay","UZ":"Oezbekistan","VA":"Vaticaanstad","VC":"Saint Vincent en de Grenadines","VE":"Venezuela","VG":"Britse Maagdeneilanden","VI":"Amerikaanse Maagdeneilanden","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis en Futuna","WS":"Samoa","XA":"Pseudo-Accenten","XB":"Pseudo-Bidi","XK":"Kosovo","YE":"Jemen","YT":"Mayotte","ZA":"Zuid-Afrika","ZM":"Zambia","ZW":"Zimbabwe","ZZ":"onbekend gebied"},"short":{"GB":"VK","HK":"Hongkong","MO":"Macau","PS":"Palestina","UN":"VN","US":"VS"},"narrow":{}},"script":{"long":{"Adlm":"Adlam","Afak":"Defaka","Aghb":"Kaukasisch Albanees","Ahom":"Ahom","Arab":"Arabisch","Aran":"Nastaliq","Armi":"Keizerlijk Aramees","Armn":"Armeens","Avst":"Avestaans","Bali":"Balinees","Bamu":"Bamoun","Bass":"Bassa Vah","Batk":"Batak","Beng":"Bengaals","Bhks":"Bhaiksuki","Blis":"Blissymbolen","Bopo":"Bopomofo","Brah":"Brahmi","Brai":"braille","Bugi":"Buginees","Buhd":"Buhid","Cakm":"Chakma","Cans":"Verenigde Canadese Aboriginal-symbolen","Cari":"Carisch","Cham":"Cham","Cher":"Cherokee","Chrs":"Chorasmisch","Cirt":"Cirth","Copt":"Koptisch","Cprt":"Cyprisch","Cyrl":"Cyrillisch","Cyrs":"Oudkerkslavisch Cyrillisch","Deva":"Devanagari","Diak":"Dives Akuru","Dogr":"Dogra","Dsrt":"Deseret","Dupl":"Duployan snelschrift","Egyd":"Egyptisch demotisch","Egyh":"Egyptisch hiëratisch","Egyp":"Egyptische hiërogliefen","Elba":"Elbasan","Elym":"Elymaisch","Ethi":"Ethiopisch","Geok":"Georgisch Khutsuri","Geor":"Georgisch","Glag":"Glagolitisch","Gong":"Gunjala Gondi","Gonm":"Masaram Gondi","Goth":"Gothisch","Gran":"Grantha","Grek":"Grieks","Gujr":"Gujarati","Guru":"Gurmukhi","Hanb":"Han met Bopomofo","Hang":"Hangul","Hani":"Han","Hano":"Hanunoo","Hans":"vereenvoudigd","Hant":"traditioneel","Hatr":"Hatran","Hebr":"Hebreeuws","Hira":"Hiragana","Hluw":"Anatolische hiërogliefen","Hmng":"Pahawh Hmong","Hmnp":"Nyiakeng Puachue Hmong","Hrkt":"Katakana of Hiragana","Hung":"Oudhongaars","Inds":"Indus","Ital":"Oud-italisch","Jamo":"Jamo","Java":"Javaans","Jpan":"Japans","Jurc":"Jurchen","Kali":"Kayah Li","Kana":"Katakana","Khar":"Kharoshthi","Khmr":"Khmer","Khoj":"Khojki","Kits":"Kitaans kleinschrift","Knda":"Kannada","Kore":"Koreaans","Kpel":"Kpelle","Kthi":"Kaithi","Lana":"Lanna","Laoo":"Laotiaans","Latf":"Gotisch Latijns","Latg":"Gaelisch Latijns","Latn":"Latijns","Lepc":"Lepcha","Limb":"Limbu","Lina":"Lineair A","Linb":"Lineair B","Lisu":"Fraser","Loma":"Loma","Lyci":"Lycisch","Lydi":"Lydisch","Mahj":"Mahajani","Maka":"Makasar","Mand":"Mandaeans","Mani":"Manicheaans","Marc":"Marchen","Maya":"Mayahiërogliefen","Medf":"Medefaidrin","Mend":"Mende","Merc":"Meroitisch cursief","Mero":"Meroïtisch","Mlym":"Malayalam","Modi":"Modi","Mong":"Mongools","Moon":"Moon","Mroo":"Mro","Mtei":"Meitei","Mult":"Multani","Mymr":"Birmaans","Nand":"Nandinagari","Narb":"Oud Noord-Arabisch","Nbat":"Nabateaans","Newa":"Newari","Nkgb":"Naxi Geba","Nkoo":"N’Ko","Nshu":"Nüshu","Ogam":"Ogham","Olck":"Ol Chiki","Orkh":"Orkhon","Orya":"Odia","Osge":"Osage","Osma":"Osmanya","Palm":"Palmyreens","Pauc":"Pau Cin Hau","Perm":"Oudpermisch","Phag":"Phags-pa","Phli":"Inscriptioneel Pahlavi","Phlp":"Psalmen Pahlavi","Phlv":"Boek Pahlavi","Phnx":"Foenicisch","Plrd":"Pollard-fonetisch","Prti":"Inscriptioneel Parthisch","Qaag":"Zawgyi","Rjng":"Rejang","Rohg":"Hanifi Rohingya","Roro":"Rongorongo","Runr":"Runic","Samr":"Samaritaans","Sara":"Sarati","Sarb":"Oud Zuid-Arabisch","Saur":"Saurashtra","Sgnw":"SignWriting","Shaw":"Shavian","Shrd":"Sharada","Sidd":"Siddham","Sind":"Sindhi","Sinh":"Singalees","Sogd":"Sogdisch","Sogo":"Oud Sogdisch","Sora":"Sora Sompeng","Soyo":"Soyombo","Sund":"Soendanees","Sylo":"Syloti Nagri","Syrc":"Syriac","Syre":"Estrangelo Aramees","Syrj":"West-Aramees","Syrn":"Oost-Aramees","Tagb":"Tagbanwa","Takr":"Takri","Tale":"Tai Le","Talu":"Nieuw Tai Lue","Taml":"Tamil","Tang":"Tangut","Tavt":"Tai Viet","Telu":"Telugu","Teng":"Tengwar","Tfng":"Tifinagh","Tglg":"Tagalog","Thaa":"Thaana","Thai":"Thai","Tibt":"Tibetaans","Tirh":"Tirhuta","Ugar":"Ugaritisch","Vaii":"Vai","Visp":"Zichtbare spraak","Wara":"Varang Kshiti","Wcho":"Wancho","Wole":"Woleai","Xpeo":"Oudperzisch","Xsux":"Sumero-Akkadian Cuneiform","Yezi":"Jezidi","Yiii":"Yi","Zanb":"vierkant Zanabazar","Zinh":"Overgeërfd","Zmth":"wiskundige notatie","Zsye":"emoji","Zsym":"symbolen","Zxxx":"ongeschreven","Zyyy":"algemeen","Zzzz":"onbekend schriftsysteem"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"Andorrese peseta","AED":"Verenigde Arabische Emiraten-dirham","AFA":"Afghani (1927–2002)","AFN":"Afghaanse afghani","ALK":"Albanese lek (1946–1965)","ALL":"Albanese lek","AMD":"Armeense dram","ANG":"Nederlands-Antilliaanse gulden","AOA":"Angolese kwanza","AOK":"Angolese kwanza (1977–1990)","AON":"Angolese nieuwe kwanza (1990–2000)","AOR":"Angolese kwanza reajustado (1995–1999)","ARA":"Argentijnse austral","ARL":"Argentijnse peso ley (1970–1983)","ARM":"Argentijnse peso (1881–1970)","ARP":"Argentijnse peso (1983–1985)","ARS":"Argentijnse peso","ATS":"Oostenrijkse schilling","AUD":"Australische dollar","AWG":"Arubaanse gulden","AZM":"Azerbeidzjaanse manat (1993–2006)","AZN":"Azerbeidzjaanse manat","BAD":"Bosnische dinar","BAM":"Bosnische convertibele mark","BAN":"Nieuwe Bosnische dinar (1994–1997)","BBD":"Barbadaanse dollar","BDT":"Bengalese taka","BEC":"Belgische frank (convertibel)","BEF":"Belgische frank","BEL":"Belgische frank (financieel)","BGL":"Bulgaarse harde lev","BGM":"Bulgaarse socialistische lev","BGN":"Bulgaarse lev","BGO":"Bulgaarse lev (1879–1952)","BHD":"Bahreinse dinar","BIF":"Burundese frank","BMD":"Bermuda-dollar","BND":"Bruneise dollar","BOB":"Boliviaanse boliviano","BOL":"Boliviaanse boliviano (1863–1963)","BOP":"Boliviaanse peso","BOV":"Boliviaanse mvdol","BRB":"Braziliaanse cruzeiro novo (1967–1986)","BRC":"Braziliaanse cruzado","BRE":"Braziliaanse cruzeiro (1990–1993)","BRL":"Braziliaanse real","BRN":"Braziliaanse nieuwe cruzado (1989–1990)","BRR":"Braziliaanse cruzeiro","BRZ":"Braziliaanse cruzeiro (1942–1967)","BSD":"Bahamaanse dollar","BTN":"Bhutaanse ngultrum","BUK":"Birmese kyat","BWP":"Botswaanse pula","BYB":"Wit-Russische nieuwe roebel (1994–1999)","BYN":"Belarussische roebel","BYR":"Wit-Russische roebel (2000–2016)","BZD":"Belizaanse dollar","CAD":"Canadese dollar","CDF":"Congolese frank","CHE":"WIR euro","CHF":"Zwitserse frank","CHW":"WIR franc","CLE":"Chileense escudo","CLF":"Chileense unidades de fomento","CLP":"Chileense peso","CNH":"Chinese yuan (offshore)","CNX":"dollar van de Chinese Volksbank","CNY":"Chinese yuan","COP":"Colombiaanse peso","COU":"Unidad de Valor Real","CRC":"Costa Ricaanse colon","CSD":"Oude Servische dinar","CSK":"Tsjechoslowaakse harde koruna","CUC":"Cubaanse convertibele peso","CUP":"Cubaanse peso","CVE":"Kaapverdische escudo","CYP":"Cyprisch pond","CZK":"Tsjechische kroon","DDM":"Oost-Duitse ostmark","DEM":"Duitse mark","DJF":"Djiboutiaanse frank","DKK":"Deense kroon","DOP":"Dominicaanse peso","DZD":"Algerijnse dinar","ECS":"Ecuadoraanse sucre","ECV":"Ecuadoraanse unidad de valor constante (UVC)","EEK":"Estlandse kroon","EGP":"Egyptisch pond","ERN":"Eritrese nakfa","ESA":"Spaanse peseta (account A)","ESB":"Spaanse peseta (convertibele account)","ESP":"Spaanse peseta","ETB":"Ethiopische birr","EUR":"Euro","FIM":"Finse markka","FJD":"Fiji-dollar","FKP":"Falklandeilands pond","FRF":"Franse franc","GBP":"Brits pond","GEK":"Georgische kupon larit","GEL":"Georgische lari","GHC":"Ghanese cedi (1979–2007)","GHS":"Ghanese cedi","GIP":"Gibraltarees pond","GMD":"Gambiaanse dalasi","GNF":"Guinese frank","GNS":"Guinese syli","GQE":"Equatoriaal-Guinese ekwele guineana","GRD":"Griekse drachme","GTQ":"Guatemalteekse quetzal","GWE":"Portugees-Guinese escudo","GWP":"Guinee-Bissause peso","GYD":"Guyaanse dollar","HKD":"Hongkongse dollar","HNL":"Hondurese lempira","HRD":"Kroatische dinar","HRK":"Kroatische kuna","HTG":"Haïtiaanse gourde","HUF":"Hongaarse forint","IDR":"Indonesische roepia","IEP":"Iers pond","ILP":"Israëlisch pond","ILR":"Israëlische sjekel (1980–1985)","ILS":"Israëlische nieuwe shekel","INR":"Indiase roepie","IQD":"Iraakse dinar","IRR":"Iraanse rial","ISJ":"IJslandse kroon (1918–1981)","ISK":"IJslandse kroon","ITL":"Italiaanse lire","JMD":"Jamaicaanse dollar","JOD":"Jordaanse dinar","JPY":"Japanse yen","KES":"Keniaanse shilling","KGS":"Kirgizische som","KHR":"Cambodjaanse riel","KMF":"Comorese frank","KPW":"Noord-Koreaanse won","KRH":"Zuid-Koreaanse hwan (1953–1962)","KRO":"Oude Zuid-Koreaanse won (1945–1953)","KRW":"Zuid-Koreaanse won","KWD":"Koeweitse dinar","KYD":"Kaaimaneilandse dollar","KZT":"Kazachse tenge","LAK":"Laotiaanse kip","LBP":"Libanees pond","LKR":"Sri Lankaanse roepie","LRD":"Liberiaanse dollar","LSL":"Lesothaanse loti","LTL":"Litouwse litas","LTT":"Litouwse talonas","LUC":"Luxemburgse convertibele franc","LUF":"Luxemburgse frank","LUL":"Luxemburgse financiële franc","LVL":"Letse lats","LVR":"Letse roebel","LYD":"Libische dinar","MAD":"Marokkaanse dirham","MAF":"Marokkaanse franc","MCF":"Monegaskische frank","MDC":"Moldavische cupon","MDL":"Moldavische leu","MGA":"Malagassische ariary","MGF":"Malagassische franc","MKD":"Macedonische denar","MKN":"Macedonische denar (1992–1993)","MLF":"Malinese franc","MMK":"Myanmarese kyat","MNT":"Mongoolse tugrik","MOP":"Macause pataca","MRO":"Mauritaanse ouguiya (1973–2017)","MRU":"Mauritaanse ouguiya","MTL":"Maltese lire","MTP":"Maltees pond","MUR":"Mauritiaanse roepie","MVP":"Maldivische roepie","MVR":"Maldivische rufiyaa","MWK":"Malawische kwacha","MXN":"Mexicaanse peso","MXP":"Mexicaanse zilveren peso (1861–1992)","MXV":"Mexicaanse unidad de inversion (UDI)","MYR":"Maleisische ringgit","MZE":"Mozambikaanse escudo","MZM":"Oude Mozambikaanse metical","MZN":"Mozambikaanse metical","NAD":"Namibische dollar","NGN":"Nigeriaanse naira","NIC":"Nicaraguaanse córdoba (1988–1991)","NIO":"Nicaraguaanse córdoba","NLG":"Nederlandse gulden","NOK":"Noorse kroon","NPR":"Nepalese roepie","NZD":"Nieuw-Zeelandse dollar","OMR":"Omaanse rial","PAB":"Panamese balboa","PEI":"Peruaanse inti","PEN":"Peruaanse sol","PES":"Peruaanse sol (1863–1965)","PGK":"Papoea-Nieuw-Guinese kina","PHP":"Filipijnse peso","PKR":"Pakistaanse roepie","PLN":"Poolse zloty","PLZ":"Poolse zloty (1950–1995)","PTE":"Portugese escudo","PYG":"Paraguayaanse guarani","QAR":"Qatarese rial","RHD":"Rhodesische dollar","ROL":"Oude Roemeense leu","RON":"Roemeense leu","RSD":"Servische dinar","RUB":"Russische roebel","RUR":"Russische roebel (1991–1998)","RWF":"Rwandese frank","SAR":"Saoedi-Arabische riyal","SBD":"Salomon-dollar","SCR":"Seychelse roepie","SDD":"Soedanese dinar","SDG":"Soedanees pond","SDP":"Soedanees pond (1957–1998)","SEK":"Zweedse kroon","SGD":"Singaporese dollar","SHP":"Sint-Heleens pond","SIT":"Sloveense tolar","SKK":"Slowaakse koruna","SLL":"Sierraleoonse leone","SOS":"Somalische shilling","SRD":"Surinaamse dollar","SRG":"Surinaamse gulden","SSP":"Zuid-Soedanees pond","STD":"Santomese dobra (1977–2017)","STN":"Santomese dobra","SUR":"Sovjet-roebel","SVC":"Salvadoraanse colón","SYP":"Syrisch pond","SZL":"Swazische lilangeni","THB":"Thaise baht","TJR":"Tadzjikistaanse roebel","TJS":"Tadzjiekse somoni","TMM":"Turkmeense manat (1993–2009)","TMT":"Turkmeense manat","TND":"Tunesische dinar","TOP":"Tongaanse paʻanga","TPE":"Timorese escudo","TRL":"Turkse lire","TRY":"Turkse lira","TTD":"Trinidad en Tobago-dollar","TWD":"Nieuwe Taiwanese dollar","TZS":"Tanzaniaanse shilling","UAH":"Oekraïense hryvnia","UAK":"Oekraïense karbovanetz","UGS":"Oegandese shilling (1966–1987)","UGX":"Oegandese shilling","USD":"Amerikaanse dollar","USN":"Amerikaanse dollar (volgende dag)","USS":"Amerikaanse dollar (zelfde dag)","UYI":"Uruguayaanse peso en geïndexeerde eenheden","UYP":"Uruguayaanse peso (1975–1993)","UYU":"Uruguayaanse peso","UYW":"Uruguayaanse nominale salarisindexeenheid","UZS":"Oezbeekse sum","VEB":"Venezolaanse bolivar (1871–2008)","VEF":"Venezolaanse bolivar (2008–2018)","VES":"Venezolaanse bolivar","VND":"Vietnamese dong","VNN":"Vietnamese dong (1978–1985)","VUV":"Vanuatuaanse vatu","WST":"Samoaanse tala","XAF":"CFA-frank","XAG":"Zilver","XAU":"Goud","XBA":"Europese samengestelde eenheid","XBB":"Europese monetaire eenheid","XBC":"Europese rekeneenheid (XBC)","XBD":"Europese rekeneenheid (XBD)","XCD":"Oost-Caribische dollar","XDR":"Special Drawing Rights","XEU":"European Currency Unit","XFO":"Franse gouden franc","XFU":"Franse UIC-franc","XOF":"CFA-franc BCEAO","XPD":"Palladium","XPF":"CFP-frank","XPT":"Platina","XRE":"RINET-fondsen","XSU":"Sucre","XTS":"Valutacode voor testdoeleinden","XUA":"ADB-rekeneenheid","XXX":"onbekende munteenheid","YDD":"Jemenitische dinar","YER":"Jemenitische rial","YUD":"Joegoslavische harde dinar","YUM":"Joegoslavische noviy-dinar","YUN":"Joegoslavische convertibele dinar","YUR":"Joegoslavische hervormde dinar (1992–1993)","ZAL":"Zuid-Afrikaanse rand (financieel)","ZAR":"Zuid-Afrikaanse rand","ZMK":"Zambiaanse kwacha (1968–2012)","ZMW":"Zambiaanse kwacha","ZRN":"Zaïrese nieuwe zaïre","ZRZ":"Zaïrese zaïre","ZWD":"Zimbabwaanse dollar","ZWL":"Zimbabwaanse dollar (2009)","ZWR":"Zimbabwaanse dollar (2008)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"nl-BE"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
