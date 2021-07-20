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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("mt").length
)) {
// Intl.DisplayNames.~locale.mt
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"Afar","ab":"Abkażjan","ace":"Aċiniż","ach":"Akoli","ada":"Adangme","ady":"Adyghe","ae":"Avestan","af":"Afrikans","afh":"Afriħili","agq":"Aghem","ain":"Ajnu","ak":"Akan","akk":"Akkadjen","ale":"Aleut","alt":"Altai tan-Nofsinhar","am":"Amhariku","an":"Aragoniż","ang":"Ingliż Antik","anp":"Angika","ar":"Għarbi","ar-001":"Għarbi Standard Modern","arc":"Aramajk","arn":"Mapuche","arp":"Arapaho","arw":"Arawak","as":"Assamiż","asa":"Asu","ast":"Asturian","av":"Avarik","awa":"Awadhi","ay":"Aymara","az":"Ażerbajġani","ba":"Bashkir","bal":"Baluċi","ban":"Baliniż","bas":"Basa","be":"Belarussu","bej":"Beja","bem":"Bemba","bez":"Bena","bg":"Bulgaru","bho":"Bhojpuri","bi":"Bislama","bik":"Bikol","bin":"Bini","bla":"Siksika","bm":"Bambara","bn":"Bengali","bo":"Tibetjan","br":"Breton","bra":"Braj","brx":"Bodo","bs":"Bożnijaku","bua":"Burjat","bug":"Buginese","byn":"Blin","ca":"Katalan","cad":"Kaddo","car":"Karib","cch":"Atsam","ccp":"ccp","ce":"Chechen","ceb":"Cebuano","cgg":"Chiga","ch":"Chamorro","chb":"Chibcha","chg":"Chagatai","chk":"Ċukiż","chm":"Mari","chn":"Chinook Jargon","cho":"Choctaw","chp":"Ċipewjan","chr":"Cherokee","chy":"Cheyenne","ckb":"Kurd Ċentrali","co":"Korsiku","cop":"Koptiku","cr":"Cree","crh":"Tork tal-Krimea","crs":"Franċiż tas-Seselwa Creole","cs":"Ċek","csb":"Kashubian","cu":"Slaviku tal-Knisja","cv":"Chuvash","cy":"Welsh","da":"Daniż","dak":"Dakota","dar":"Dargwa","dav":"Taita","de":"Ġermaniż","de-AT":"Ġermaniż Awstrijak","de-CH":"Ġermaniż Żvizzeru","del":"Delawerjan","den":"Slav","dgr":"Dogrib","din":"Dinka","dje":"Zarma","doi":"Dogri","dsb":"Sorbjan Komuni","dua":"Dwala","dum":"Olandiż Medjevali","dv":"Divehi","dyo":"Jola-Fonyi","dyu":"Dyula","dz":"Dzongkha","dzg":"Dazaga","ebu":"Embu","ee":"Ewe","efi":"Efik","egy":"Eġizzjan (Antik)","eka":"Ekajuk","el":"Grieg","elx":"Elamit","en":"Ingliż","en-AU":"Ingliż Awstraljan","en-CA":"Ingliż Kanadiż","en-GB":"Ingliż Brittaniku","en-US":"Ingliż Amerikan","enm":"Ingliż Medjevali","eo":"Esperanto","es":"Spanjol","es-419":"Spanjol Latin Amerikan","es-ES":"Spanjol Ewropew","es-MX":"Spanjol tal-Messiku","et":"Estonjan","eu":"Bask","ewo":"Ewondo","fa":"Persjan","fa-AF":"Persjan (l-Afganistan)","fan":"Fang","fat":"Fanti","ff":"Fulah","fi":"Finlandiż","fil":"Filippin","fj":"Fiġjan","fo":"Faroese","fon":"Fon","fr":"Franċiż","fr-CA":"Franċiż Kanadiż","fr-CH":"Franċiż Żvizzeru","frc":"frc","frm":"Franċiż Medjevali","fro":"Franċiż Antik","fur":"Frijuljan","fy":"Frisian tal-Punent","ga":"Irlandiż","gaa":"Ga","gay":"Gayo","gba":"Gbaya","gd":"Galliku Skoċċiż","gez":"Geez","gil":"Gilbertjan","gl":"Galiċjan","gmh":"Ġermaniż Medjevali Pulit","gn":"Guarani","goh":"Ġermaniż Antik, Pulit","gon":"Gondi","gor":"Gorontalo","got":"Gotiku","grb":"Grebo","grc":"Grieg, Antik","gsw":"Ġermaniż tal-Iżvizzera","gu":"Gujarati","guz":"Gusii","gv":"Manx","gwi":"Gwiċin","ha":"Hausa","hai":"Haida","haw":"Ħawajjan","he":"Ebrajk","hi":"Hindi","hil":"Hiligaynon","hit":"Hittite","hmn":"Hmong","ho":"Hiri Motu","hr":"Kroat","hsb":"Sorbjan ta’ Fuq","ht":"Creole ta’ Haiti","hu":"Ungeriż","hup":"Hupa","hy":"Armen","hz":"Herero","ia":"Interlingua","iba":"Iban","ibb":"Ibibio","id":"Indoneżjan","ie":"Interlingue","ig":"Igbo","ii":"Sichuan Yi","ik":"Inupjak","ilo":"Iloko","inh":"Ingush","io":"Ido","is":"Iżlandiż","it":"Taljan","iu":"Inuktitut","ja":"Ġappuniż","jbo":"Lojban","jgo":"Ngomba","jmc":"Machame","jpr":"Lhudi-Persjan","jrb":"Lhudi-Għarbi","jv":"Ġavaniż","ka":"Ġorġjan","kaa":"Kara-Kalpak","kab":"Kabuljan","kac":"Kachin","kaj":"Jju","kam":"Kamba","kaw":"Kawi","kbd":"Kabardian","kcg":"Tyap","kde":"Makonde","kea":"Cape Verdjan","kfo":"Koro","kg":"Kongo","kgp":"kgp","kha":"Khasi","kho":"Kotaniż","khq":"Koyra Chiini","ki":"Kikuju","kj":"Kuanyama","kk":"Każak","kkj":"Kako","kl":"Kalallisut","kln":"Kalenjin","km":"Khmer","kmb":"Kimbundu","kn":"Kannada","ko":"Korean","kok":"Konkani","kos":"Kosrejan","kpe":"Kpelle","kr":"Kanuri","krc":"Karachay-Balkar","krl":"Kareljan","kru":"Kurux","ks":"Kashmiri","ksb":"Shambala","ksf":"Bafia","ksh":"Kolonjan","ku":"Kurd","kum":"Kumyk","kut":"Kutenaj","kv":"Komi","kw":"Korniku","ky":"Kirgiż","la":"Latin","lad":"Ladino","lag":"Langi","lah":"Lahnda","lam":"Lamba","lb":"Lussemburgiż","lez":"Leżgjan","lg":"Ganda","li":"Limburgish","lij":"lij","lkt":"Lakota","ln":"Lingaljan","lo":"Laosjan","lol":"Mongo","lou":"lou","loz":"Lożi","lrc":"Luri tat-Tramuntana","lt":"Litwan","lu":"Luba-Katanga","lua":"Luba-Luluwa","lui":"Luiseno","lun":"Lunda","luo":"Luo","lus":"Mizo","luy":"Luyia","lv":"Latvjan","mad":"Maduriż","mag":"Magahi","mai":"Maithili","mak":"Makasar","man":"Mandingo","mas":"Masai","mdf":"Moksha","mdr":"Mandar","men":"Mende","mer":"Meru","mfe":"Morisyen","mg":"Malagasy","mga":"Irlandiż Medjevali","mgh":"Makhuwa-Meetto","mgo":"Metà","mh":"Marshalljaniż","mi":"Maori","mic":"Micmac","min":"Minangkabau","mk":"Maċedonjan","ml":"Malayalam","mn":"Mongoljan","mnc":"Manchu","mni":"Manipuri","moh":"Mohawk","mos":"Mossi","mr":"Marathi","ms":"Malay","mt":"Malti","mua":"Mundang","mul":"Lingwi Diversi","mus":"Kriek","mwl":"Mirandiż","mwr":"Marwari","my":"Burmiż","myv":"Erzya","mzn":"Mazanderani","na":"Naurujan","nap":"Naplitan","naq":"Nama","nb":"Bokmal Norveġiż","nd":"Ndebeli tat-Tramuntana","nds":"Ġermaniż Komuni","nds-NL":"Sassonu Komuni","ne":"Nepaliż","new":"Newari","ng":"Ndonga","nia":"Nijas","niu":"Niuean","nl":"Olandiż","nl-BE":"Fjamming","nmg":"Kwasio","nn":"Ninorsk Norveġiż","nnh":"Ngiemboon","no":"Norveġiż","nog":"Nogai","non":"Nors Antik","nqo":"N’Ko","nr":"Ndebele tan-Nofsinhar","nso":"Soto tat-Tramuntana","nus":"Nuer","nv":"Navajo","nwc":"Newari Klassiku","ny":"Nyanja","nym":"Njamweżi","nyn":"Nyankole","nyo":"Nyoro","nzi":"Nzima","oc":"Oċċitan","oj":"Oġibwa","om":"Oromo","or":"Odia","os":"Ossettiku","osa":"Osaġjan","ota":"Tork Ottoman","pa":"Punjabi","pag":"Pangasinjan","pal":"Pahlavi","pam":"Pampanga","pap":"Papiamento","pau":"Palawjan","pcm":"Pidgin Niġerjan","peo":"Persjan Antik","phn":"Feniċju","pi":"Pali","pl":"Pollakk","pon":"Ponpejan","prg":"Prussu","pro":"Provenzal Antik","ps":"Pashto","pt":"Portugiż","pt-BR":"Portugiż tal-Brażil","pt-PT":"Portugiż Ewropew","qu":"Quechua","quc":"K’iche’","raj":"Raġastani","rap":"Rapanwi","rar":"Rarotongani","rm":"Romanz","rn":"Rundi","ro":"Rumen","ro-MD":"Moldovan","rof":"Rombo","rom":"Romanesk","ru":"Russu","rup":"Aromanjan","rw":"Kinjarwanda","rwk":"Rwa","sa":"Sanskrit","sad":"Sandawe","sah":"Sakha","sam":"Samaritan Aramajk","saq":"Samburu","sas":"Sasak","sat":"Santali","sba":"Ngambay","sbp":"Sangu","sc":"Sardinjan","scn":"Sqalli","sco":"Skoċċiż","sd":"Sindhi","se":"Sami tat-Tramuntana","seh":"Sena","sel":"Selkup","ses":"Koyraboro Senni","sg":"Sango","sga":"Irlandiż Antik","sh":"Serbo-Kroat","shi":"Tachelhit","shn":"Shan","si":"Sinhala","sid":"Sidamo","sk":"Slovakk","sl":"Sloven","sm":"Samoan","sma":"Sami tan-Nofsinhar","smj":"Lule Sami","smn":"Inari Sami","sms":"Skolt Sami","sn":"Shona","snk":"Soninke","so":"Somali","sog":"Sogdien","sq":"Albaniż","sr":"Serb","srn":"Sranan Tongo","srr":"Serer","ss":"Swati","ssy":"Saho","st":"Soto tan-Nofsinhar","su":"Sundaniż","suk":"Sukuma","sus":"Susu","sux":"Sumerjan","sv":"Żvediż","sw":"Swahili","sw-CD":"Swahili tar-Repubblika Demokratika tal-Kongo","swb":"Komorjan","syr":"Sirjan","ta":"Tamil","te":"Telugu","tem":"Timne","teo":"Teso","ter":"Tereno","tet":"Tetum","tg":"Tajik","th":"Tajlandiż","ti":"Tigrinya","tig":"Tigre","tiv":"Tiv","tk":"Turkmeni","tkl":"Tokelau","tl":"Tagalog","tlh":"Klingon","tli":"Tlingit","tmh":"Tamashek","tn":"Tswana","to":"Tongan","tog":"Nyasa Tonga","tpi":"Tok Pisin","tr":"Tork","trv":"Taroko","ts":"Tsonga","tsi":"Tsimshian","tt":"Tatar","tum":"Tumbuka","tvl":"Tuvalu","tw":"Twi","twq":"Tasawaq","ty":"Taħitjan","tyv":"Tuvinjan","tzm":"Tamazight tal-Atlas Ċentrali","udm":"Udmurt","ug":"Uyghur","uga":"Ugaritiku","uk":"Ukren","umb":"Umbundu","und":"Lingwa Mhix Magħrufa","ur":"Urdu","uz":"Uzbek","vai":"Vai","ve":"Venda","vi":"Vjetnamiż","vo":"Volapuk","vot":"Votik","vun":"Vunjo","wa":"Walloon","wae":"Walser","wal":"Walamo","war":"Waray","was":"Washo","wo":"Wolof","xal":"Kalmyk","xh":"Xhosa","xog":"Soga","yao":"Yao","yap":"Yapese","yav":"Yangben","ybb":"Yemba","yi":"Yiddish","yo":"Yoruba","yue":"Kantoniż","za":"Zhuang","zap":"Zapotec","zen":"Zenaga","zgh":"Tamazight Standard tal-Marokk","zh":"Ċiniż","zh-Hans":"Ċiniż Simplifikat","zh-Hant":"Ċiniż Tradizzjonali","zu":"Zulu","zun":"Zuni","zxx":"Bla kontenut lingwistiku","zza":"Zaza"},"short":{"az":"Ażeri","en-GB":"Ingliż Brittaniku","en-US":"Ingliż Amerikan"},"narrow":{}},"region":{"long":{"142":"Asja","143":"Asja Ċentrali","145":"Asja tal-Punent","150":"Ewropa","151":"Ewropa tal-Lvant","154":"Ewropa ta’ Fuq","155":"Ewropa tal-Punent","202":"202","419":"Amerika Latina","001":"Dinja","002":"Affrika","003":"003","005":"Amerika t’Isfel","009":"Oċejanja","011":"Affrika tal-Punent","013":"Amerika Ċentrali","014":"Affrika tal-Lvant","015":"Affrika ta’ Fuq","017":"Affrika Nofsani","018":"Affrika t’Isfel","019":"Amerika","021":"021","029":"Karibew","030":"Asja tal-Lvant","034":"Asja t’Isfel Ċentrali","035":"Asja tax-Xlokk","039":"Ewropa t’Isfel","053":"Awstralja u New Zealand","054":"Melanesja","057":"Reġjun ta’ Mikroneżja","061":"Polinesja","AC":"Ascension Island","AD":"Andorra","AE":"l-Emirati Għarab Magħquda","AF":"l-Afganistan","AG":"Antigua u Barbuda","AI":"Anguilla","AL":"l-Albanija","AM":"l-Armenja","AO":"l-Angola","AQ":"l-Antartika","AR":"l-Arġentina","AS":"is-Samoa Amerikana","AT":"l-Awstrija","AU":"l-Awstralja","AW":"Aruba","AX":"il-Gżejjer Aland","AZ":"l-Ażerbajġan","BA":"il-Bożnija-Ħerzegovina","BB":"Barbados","BD":"il-Bangladesh","BE":"il-Belġju","BF":"il-Burkina Faso","BG":"il-Bulgarija","BH":"il-Bahrain","BI":"il-Burundi","BJ":"il-Benin","BL":"Saint Barthélemy","BM":"Bermuda","BN":"il-Brunei","BO":"il-Bolivja","BQ":"in-Netherlands tal-Karibew","BR":"Il-Brażil","BS":"il-Bahamas","BT":"il-Bhutan","BV":"Gżira Bouvet","BW":"il-Botswana","BY":"il-Belarussja","BZ":"il-Belize","CA":"il-Kanada","CC":"Gżejjer Cocos (Keeling)","CD":"ir-Repubblika Demokratika tal-Kongo","CF":"ir-Repubblika Ċentru-Afrikana","CG":"il-Kongo - Brazzaville","CH":"l-Iżvizzera","CI":"il-Kosta tal-Avorju","CK":"Gżejjer Cook","CL":"iċ-Ċili","CM":"il-Kamerun","CN":"iċ-Ċina","CO":"il-Kolombja","CP":"il-Gżira Clipperton","CR":"il-Costa Rica","CU":"Kuba","CV":"Cape Verde","CW":"Curaçao","CX":"il-Gżira Christmas","CY":"Ċipru","CZ":"ir-Repubblika Ċeka","DE":"il-Ġermanja","DG":"Diego Garcia","DJ":"il-Djibouti","DK":"id-Danimarka","DM":"Dominica","DO":"ir-Repubblika Dominicana","DZ":"l-Alġerija","EA":"Ceuta u Melilla","EC":"l-Ekwador","EE":"l-Estonja","EG":"l-Eġittu","EH":"is-Saħara tal-Punent","ER":"l-Eritrea","ES":"Spanja","ET":"l-Etjopja","EU":"Unjoni Ewropea","EZ":"EZ","FI":"il-Finlandja","FJ":"Fiġi","FK":"il-Gżejjer Falkland","FM":"Mikroneżja","FO":"il-Gżejjer Faeroe","FR":"Franza","GA":"il-Gabon","GB":"ir-Renju Unit","GD":"Grenada","GE":"il-Georgia","GF":"il-Guyana Franċiża","GG":"Guernsey","GH":"il-Ghana","GI":"Ġibiltà","GL":"Greenland","GM":"il-Gambja","GN":"il-Guinea","GP":"Guadeloupe","GQ":"il-Guinea Ekwatorjali","GR":"il-Greċja","GS":"il-Georgia tan-Nofsinhar u l-Gżejjer Sandwich tan-Nofsinhar","GT":"il-Gwatemala","GU":"Guam","GW":"il-Guinea-Bissau","GY":"il-Guyana","HK":"ir-Reġjun Amministrattiv Speċjali ta’ Hong Kong tar-Repubblika tal-Poplu taċ-Ċina","HM":"il-Gżejjer Heard u l-Gżejjer McDonald","HN":"il-Honduras","HR":"il-Kroazja","HT":"il-Haiti","HU":"l-Ungerija","IC":"il-Gżejjer Canary","ID":"l-Indoneżja","IE":"l-Irlanda","IL":"Iżrael","IM":"Isle of Man","IN":"l-Indja","IO":"Territorju Brittaniku tal-Oċean Indjan","IQ":"l-Iraq","IR":"l-Iran","IS":"l-iżlanda","IT":"l-Italja","JE":"Jersey","JM":"il-Ġamajka","JO":"il-Ġordan","JP":"il-Ġappun","KE":"il-Kenja","KG":"il-Kirgiżistan","KH":"il-Kambodja","KI":"Kiribati","KM":"Comoros","KN":"Saint Kitts u Nevis","KP":"il-Korea ta’ Fuq","KR":"il-Korea t’Isfel","KW":"il-Kuwajt","KY":"il-Gżejjer Cayman","KZ":"il-Każakistan","LA":"il-Laos","LB":"il-Libanu","LC":"Saint Lucia","LI":"il-Liechtenstein","LK":"is-Sri Lanka","LR":"il-Liberja","LS":"il-Lesoto","LT":"il-Litwanja","LU":"il-Lussemburgu","LV":"il-Latvja","LY":"il-Libja","MA":"il-Marokk","MC":"Monaco","MD":"il-Moldova","ME":"il-Montenegro","MF":"Saint Martin","MG":"Madagascar","MH":"Gżejjer Marshall","MK":"il-Maċedonja ta’ Fuq","ML":"il-Mali","MM":"il-Myanmar/Burma","MN":"il-Mongolja","MO":"ir-Reġjun Amministrattiv Speċjali tal-Macao tar-Repubblika tal-Poplu taċ-Ċina","MP":"Ġżejjer Mariana tat-Tramuntana","MQ":"Martinique","MR":"il-Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"il-Maldivi","MW":"il-Malawi","MX":"il-Messiku","MY":"il-Malasja","MZ":"il-Mozambique","NA":"in-Namibja","NC":"New Caledonia","NE":"in-Niġer","NF":"Gżira Norfolk","NG":"in-Niġerja","NI":"in-Nikaragwa","NL":"in-Netherlands","NO":"in-Norveġja","NP":"in-Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"l-Oman","PA":"il-Panama","PE":"il-Perù","PF":"Polineżja Franċiża","PG":"Papua New Guinea","PH":"il-Filippini","PK":"il-Pakistan","PL":"il-Polonja","PM":"Saint Pierre u Miquelon","PN":"Gżejjer Pitcairn","PR":"Puerto Rico","PS":"it-Territorji Palestinjani","PT":"il-Portugall","PW":"Palau","PY":"il-Paragwaj","QA":"il-Qatar","QO":"QO","RE":"Réunion","RO":"ir-Rumanija","RS":"is-Serbja","RU":"ir-Russja","RW":"ir-Rwanda","SA":"l-Arabia Sawdija","SB":"il-Gżejjer Solomon","SC":"is-Seychelles","SD":"is-Sudan","SE":"l-Iżvezja","SG":"Singapore","SH":"Saint Helena","SI":"is-Slovenja","SJ":"Svalbard u Jan Mayen","SK":"is-Slovakkja","SL":"Sierra Leone","SM":"San Marino","SN":"is-Senegal","SO":"is-Somalja","SR":"is-Suriname","SS":"is-Sudan t’Isfel","ST":"São Tomé u Príncipe","SV":"El Salvador","SX":"Sint Maarten","SY":"is-Sirja","SZ":"is-Swaziland","TA":"Tristan da Cunha","TC":"il-Gżejjer Turks u Caicos","TD":"iċ-Chad","TF":"It-Territorji Franċiżi tan-Nofsinhar","TG":"it-Togo","TH":"it-Tajlandja","TJ":"it-Taġikistan","TK":"it-Tokelau","TL":"Timor Leste","TM":"it-Turkmenistan","TN":"it-Tuneżija","TO":"Tonga","TR":"it-Turkija","TT":"Trinidad u Tobago","TV":"Tuvalu","TW":"it-Tajwan","TZ":"it-Tanzanija","UA":"l-Ukrajna","UG":"l-Uganda","UM":"Il-Gżejjer Minuri Mbiegħda tal-Istati Uniti","UN":"UN","US":"l-Istati Uniti","UY":"l-Urugwaj","UZ":"l-Użbekistan","VA":"l-Istat tal-Belt tal-Vatikan","VC":"Saint Vincent u l-Grenadini","VE":"il-Venezwela","VG":"il-Gżejjer Verġni Brittaniċi","VI":"il-Gżejjer Verġni tal-Istati Uniti","VN":"il-Vjetnam","VU":"Vanuatu","WF":"Wallis u Futuna","WS":"Samoa","XA":"XA","XB":"XB","XK":"il-Kosovo","YE":"il-Jemen","YT":"Mayotte","ZA":"l-Afrika t’Isfel","ZM":"iż-Żambja","ZW":"iż-Żimbabwe","ZZ":"Reġjun Mhux Magħruf"},"short":{"GB":"UK","HK":"Hong Kong","MO":"il-Macao","PS":"il-Palestina","US":"US"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Għarbi","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Ċirilliku","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grieg","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Simplifikat","Hant":"Tradizzjonali","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latin","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Persjan Antik","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Mhux Miktub","Zyyy":"Komuni","Zzzz":"Kitba Mhux Magħrufa"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"AED","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"AOA","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"AUD","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"BHD","BIF":"BIF","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"BWP","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"CAD","CDF":"CDF","CHE":"CHE","CHF":"CHF","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"CNY","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"CVE","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"DJF","DKK":"DKK","DOP":"DOP","DZD":"DZD","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"EGP","ERN":"ERN","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ETB","EUR":"ewro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"GBP","GEK":"GEK","GEL":"GEL","GHC":"GHC","GHS":"GHS","GIP":"GIP","GMD":"GMD","GNF":"GNF","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"INR","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"JPY","KES":"KES","KGS":"KGS","KHR":"KHR","KMF":"KMF","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"LRD","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"LYD","MAD":"MAD","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"MGA","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"MRO","MRU":"MRU","MTL":"Lira Maltija","MTP":"MTP","MUR":"MUR","MVP":"MVP","MVR":"MVR","MWK":"MWK","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"MZM","MZN":"MZN","NAD":"NAD","NGN":"NGN","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"RWF","SAR":"SAR","SBD":"SBD","SCR":"SCR","SDD":"SDD","SDG":"SDG","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"SHP","SIT":"SIT","SKK":"SKK","SLL":"SLL","SOS":"SOS","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"STD","STN":"STN","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"SZL","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"TND","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"TZS","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"UGX","USD":"USD","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"XOF","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"Munita Mhix Magħrufa jew Mhix Valida","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ZAR","ZMK":"ZMK","ZMW":"ZMW","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"mt"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
