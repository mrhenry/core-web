import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ToObject from "../helpers/_ESAbstract.ToObject";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import Get from "../helpers/_ESAbstract.Get";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import Type from "../helpers/_ESAbstract.Type";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import Construct from "../helpers/_ESAbstract.Construct";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("id").length
)) {
// Intl.DisplayNames.~locale.id
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"id":{"types":{"language":{"long":{"aa":"Afar","ab":"Abkhaz","ace":"Aceh","ach":"Acoli","ada":"Adangme","ady":"Adygei","ae":"Avesta","aeb":"Arab Tunisia","af":"Afrikaans","afh":"Afrihili","agq":"Aghem","ain":"Ainu","ak":"Akan","akk":"Akkadia","akz":"Alabama","ale":"Aleut","alt":"Altai Selatan","am":"Amharik","an":"Aragon","ang":"Inggris Kuno","anp":"Angika","ar":"Arab","ar-001":"Arab Standar Modern","arc":"Aram","arn":"Mapuche","arp":"Arapaho","arq":"Arab Aljazair","ars":"Arab Najdi","arw":"Arawak","ary":"Arab Maroko","arz":"Arab Mesir","as":"Assam","asa":"Asu","ase":"Bahasa Isyarat Amerika","ast":"Asturia","av":"Avar","awa":"Awadhi","ay":"Aymara","az":"Azerbaijani","ba":"Bashkir","bal":"Baluchi","ban":"Bali","bar":"Bavaria","bas":"Basa","bax":"Bamun","bbc":"Batak Toba","bbj":"Ghomala","be":"Belarusia","bej":"Beja","bem":"Bemba","bew":"Betawi","bez":"Bena","bfd":"Bafut","bg":"Bulgaria","bgn":"Balochi Barat","bho":"Bhojpuri","bi":"Bislama","bik":"Bikol","bin":"Bini","bjn":"Banjar","bkm":"Kom","bla":"Siksika","bm":"Bambara","bn":"Bengali","bo":"Tibet","br":"Breton","bra":"Braj","brx":"Bodo","bs":"Bosnia","bss":"Akoose","bua":"Buriat","bug":"Bugis","bum":"Bulu","byn":"Blin","byv":"Medumba","ca":"Katalan","cad":"Kado","car":"Karib","cay":"Cayuga","cch":"Atsam","ccp":"Chakma","ce":"Chechen","ceb":"Cebuano","cgg":"Kiga","ch":"Chamorro","chb":"Chibcha","chg":"Chagatai","chk":"Chuuke","chm":"Mari","chn":"Jargon Chinook","cho":"Koktaw","chp":"Chipewyan","chr":"Cherokee","chy":"Cheyenne","ckb":"Kurdi Sorani","co":"Korsika","cop":"Koptik","cr":"Kree","crh":"Tatar Krimea","crs":"Seselwa Kreol Prancis","cs":"Cheska","csb":"Kashubia","cu":"Bahasa Gereja Slavonia","cv":"Chuvash","cy":"Welsh","da":"Dansk","dak":"Dakota","dar":"Dargwa","dav":"Taita","de":"Jerman","de-AT":"Jerman (Austria)","de-CH":"Jerman Tinggi (Swiss)","del":"Delaware","den":"Slave","dgr":"Dogrib","din":"Dinka","dje":"Zarma","doi":"Dogri","dsb":"Sorbia Hilir","dua":"Duala","dum":"Belanda Abad Pertengahan","dv":"Divehi","dyo":"Jola-Fonyi","dyu":"Dyula","dz":"Dzongkha","dzg":"Dazaga","ebu":"Embu","ee":"Ewe","efi":"Efik","egy":"Mesir Kuno","eka":"Ekajuk","el":"Yunani","elx":"Elam","en":"Inggris","en-AU":"Inggris (Australia)","en-CA":"Inggris (Kanada)","en-GB":"Inggris (Inggris)","en-US":"Inggris (Amerika Serikat)","enm":"Inggris Abad Pertengahan","eo":"Esperanto","es":"Spanyol","es-419":"Spanyol (Amerika Latin)","es-ES":"Spanyol (Eropa)","es-MX":"Spanyol (Meksiko)","et":"Esti","eu":"Basque","ewo":"Ewondo","fa":"Persia","fa-AF":"Persia Dari","fan":"Fang","fat":"Fanti","ff":"Fula","fi":"Suomi","fil":"Filipino","fj":"Fiji","fo":"Faroe","fon":"Fon","fr":"Prancis","fr-CA":"Perancis (Kanada)","fr-CH":"Perancis (Swiss)","frc":"Prancis Cajun","frm":"Prancis Abad Pertengahan","fro":"Prancis Kuno","frp":"Arpitan","frr":"Frisia Utara","frs":"Frisia Timur","fur":"Friuli","fy":"Frisia Barat","ga":"Irlandia","gaa":"Ga","gag":"Gagauz","gay":"Gayo","gba":"Gbaya","gd":"Gaelik Skotlandia","gez":"Geez","gil":"Gilbert","gl":"Galisia","glk":"Gilaki","gmh":"Jerman Abad Pertengahan","gn":"Guarani","goh":"Jerman Kuno","gon":"Gondi","gor":"Gorontalo","got":"Gotik","grb":"Grebo","grc":"Yunani Kuno","gsw":"Jerman (Swiss)","gu":"Gujarat","guz":"Gusii","gv":"Manx","gwi":"Gwich’in","ha":"Hausa","hai":"Haida","haw":"Hawaii","he":"Ibrani","hi":"Hindi","hif":"Hindi Fiji","hil":"Hiligaynon","hit":"Hitit","hmn":"Hmong","ho":"Hiri Motu","hr":"Kroasia","hsb":"Sorbia Hulu","ht":"Kreol Haiti","hu":"Hungaria","hup":"Hupa","hy":"Armenia","hz":"Herero","ia":"Interlingua","iba":"Iban","ibb":"Ibibio","id":"Indonesia","ie":"Interlingue","ig":"Igbo","ii":"Sichuan Yi","ik":"Inupiak","ilo":"Iloko","inh":"Ingushetia","io":"Ido","is":"Islandia","it":"Italia","iu":"Inuktitut","ja":"Jepang","jbo":"Lojban","jgo":"Ngomba","jmc":"Machame","jpr":"Ibrani-Persia","jrb":"Ibrani-Arab","jv":"Jawa","ka":"Georgia","kaa":"Kara-Kalpak","kab":"Kabyle","kac":"Kachin","kaj":"Jju","kam":"Kamba","kaw":"Kawi","kbd":"Kabardi","kbl":"Kanembu","kcg":"Tyap","kde":"Makonde","kea":"Kabuverdianu","ken":"Kenyang","kfo":"Koro","kg":"Kongo","kha":"Khasi","kho":"Khotan","khq":"Koyra Chiini","ki":"Kikuyu","kj":"Kuanyama","kk":"Kazakh","kkj":"Kako","kl":"Kalaallisut","kln":"Kalenjin","km":"Khmer","kmb":"Kimbundu","kn":"Kannada","ko":"Korea","koi":"Komi-Permyak","kok":"Konkani","kos":"Kosre","kpe":"Kpelle","kr":"Kanuri","krc":"Karachai Balkar","kri":"Krio","krl":"Karelia","kru":"Kuruk","ks":"Kashmir","ksb":"Shambala","ksf":"Bafia","ksh":"Dialek Kolsch","ku":"Kurdi","kum":"Kumyk","kut":"Kutenai","kv":"Komi","kw":"Kornish","ky":"Kirgiz","la":"Latin","lad":"Ladino","lag":"Langi","lah":"Lahnda","lam":"Lamba","lb":"Luksemburg","lez":"Lezghia","lg":"Ganda","li":"Limburgia","lij":"Liguria","lkt":"Lakota","ln":"Lingala","lo":"Lao","lol":"Mongo","lou":"Kreol Louisiana","loz":"Lozi","lrc":"Luri Utara","lt":"Lituavi","lu":"Luba-Katanga","lua":"Luba-Lulua","lui":"Luiseno","lun":"Lunda","luo":"Luo","lus":"Mizo","luy":"Luyia","lv":"Latvi","lzz":"Laz","mad":"Madura","maf":"Mafa","mag":"Magahi","mai":"Maithili","mak":"Makasar","man":"Mandingo","mas":"Masai","mde":"Maba","mdf":"Moksha","mdr":"Mandar","men":"Mende","mer":"Meru","mfe":"Morisien","mg":"Malagasi","mga":"Irlandia Abad Pertengahan","mgh":"Makhuwa-Meetto","mgo":"Meta’","mh":"Marshall","mi":"Maori","mic":"Mikmak","min":"Minangkabau","mk":"Makedonia","ml":"Malayalam","mn":"Mongolia","mnc":"Manchuria","mni":"Manipuri","moh":"Mohawk","mos":"Mossi","mr":"Marathi","ms":"Melayu","mt":"Malta","mua":"Mundang","mul":"Beberapa Bahasa","mus":"Bahasa Muskogee","mwl":"Miranda","mwr":"Marwari","mwv":"Mentawai","my":"Burma","mye":"Myene","myv":"Eryza","mzn":"Mazanderani","na":"Nauru","nap":"Neapolitan","naq":"Nama","nb":"Bokmål Norwegia","nd":"Ndebele Utara","nds":"Jerman Rendah","nds-NL":"Jerman Rendah (Belanda)","ne":"Nepali","new":"Newari","ng":"Ndonga","nia":"Nias","niu":"Niuea","nl":"Belanda","nl-BE":"Belanda (Belgia)","nmg":"Kwasio","nn":"Nynorsk Norwegia","nnh":"Ngiemboon","no":"Norwegia","nog":"Nogai","non":"Norse Kuno","nqo":"N’Ko","nr":"Ndebele Selatan","nso":"Sotho Utara","nus":"Nuer","nv":"Navajo","nwc":"Newari Klasik","ny":"Nyanja","nym":"Nyamwezi","nyn":"Nyankole","nyo":"Nyoro","nzi":"Nzima","oc":"Ositania","oj":"Ojibwa","om":"Oromo","or":"Oriya","os":"Ossetia","osa":"Osage","ota":"Turki Osmani","pa":"Punjabi","pag":"Pangasina","pal":"Pahlevi","pam":"Pampanga","pap":"Papiamento","pau":"Palau","pcm":"Pidgin Nigeria","pdc":"Jerman Pennsylvania","peo":"Persia Kuno","phn":"Funisia","pi":"Pali","pl":"Polski","pon":"Pohnpeia","prg":"Prusia","pro":"Provencal Lama","ps":"Pashto","pt":"Portugis","pt-BR":"Portugis (Brasil)","pt-PT":"Portugis (Eropa)","qu":"Quechua","quc":"Kʼicheʼ","raj":"Rajasthani","rap":"Rapanui","rar":"Rarotonga","rm":"Reto-Roman","rn":"Rundi","ro":"Rumania","ro-MD":"Moldavia","rof":"Rombo","rom":"Romani","root":"Root","rtm":"Rotuma","ru":"Rusia","rup":"Aromania","rw":"Kinyarwanda","rwk":"Rwa","sa":"Sanskerta","sad":"Sandawe","sah":"Sakha","sam":"Aram Samaria","saq":"Samburu","sas":"Sasak","sat":"Santali","sba":"Ngambai","sbp":"Sangu","sc":"Sardinia","scn":"Sisilia","sco":"Skotlandia","sd":"Sindhi","sdh":"Kurdi Selatan","se":"Sami Utara","see":"Seneca","seh":"Sena","sei":"Seri","sel":"Selkup","ses":"Koyraboro Senni","sg":"Sango","sga":"Irlandia Kuno","sh":"Serbo-Kroasia","shi":"Tachelhit","shn":"Shan","shu":"Arab Suwa","si":"Sinhala","sid":"Sidamo","sk":"Slovak","sl":"Sloven","sli":"Silesia Rendah","sly":"Selayar","sm":"Samoa","sma":"Sami Selatan","smj":"Lule Sami","smn":"Inari Sami","sms":"Skolt Sami","sn":"Shona","snk":"Soninke","so":"Somalia","sog":"Sogdien","sq":"Albania","sr":"Serbia","srn":"Sranan Tongo","srr":"Serer","ss":"Swati","ssy":"Saho","st":"Sotho Selatan","su":"Sunda","suk":"Sukuma","sus":"Susu","sux":"Sumeria","sv":"Swedia","sw":"Swahili","sw-CD":"Swahili (Kongo)","swb":"Komoria","syc":"Suriah Klasik","syr":"Suriah","szl":"Silesia","ta":"Tamil","tcy":"Tulu","te":"Telugu","tem":"Timne","teo":"Teso","ter":"Tereno","tet":"Tetun","tg":"Tajik","th":"Thai","ti":"Tigrinya","tig":"Tigre","tiv":"Tiv","tk":"Turkmen","tkl":"Tokelau","tl":"Tagalog","tlh":"Klingon","tli":"Tlingit","tmh":"Tamashek","tn":"Tswana","to":"Tonga","tog":"Nyasa Tonga","tpi":"Tok Pisin","tr":"Turki","tru":"Turoyo","trv":"Taroko","ts":"Tsonga","tsi":"Tsimshia","tt":"Tatar","ttt":"Tat Muslim","tum":"Tumbuka","tvl":"Tuvalu","tw":"Twi","twq":"Tasawaq","ty":"Tahiti","tyv":"Tuvinia","tzm":"Tamazight Maroko Tengah","udm":"Udmurt","ug":"Uyghur","uga":"Ugarit","uk":"Ukraina","umb":"Umbundu","und":"Bahasa Tidak Dikenal","ur":"Urdu","uz":"Uzbek","vai":"Vai","ve":"Venda","vec":"Venesia","vi":"Vietnam","vo":"Volapuk","vot":"Votia","vun":"Vunjo","wa":"Walloon","wae":"Walser","wal":"Walamo","war":"Warai","was":"Washo","wbp":"Warlpiri","wo":"Wolof","xal":"Kalmuk","xh":"Xhosa","xog":"Soga","yao":"Yao","yap":"Yapois","yav":"Yangben","ybb":"Yemba","yi":"Yiddish","yo":"Yoruba","yue":"Kanton","za":"Zhuang","zap":"Zapotek","zbl":"Blissymbol","zen":"Zenaga","zgh":"Tamazight Maroko Standar","zh":"Tionghoa","zh-Hans":"Tionghoa (Aksara Sederhana)","zh-Hant":"Tionghoa (Aksara Tradisional)","zu":"Zulu","zun":"Zuni","zxx":"Tidak ada konten linguistik","zza":"Zaza"},"short":{"az":"Azeri","en-GB":"Inggris (U.K.)","en-US":"Inggris (A.S.)"},"narrow":{}},"region":{"long":{"142":"Asia","143":"Asia Tengah","145":"Asia Bagian Barat","150":"Eropa","151":"Eropa Bagian Timur","154":"Eropa Bagian Utara","155":"Eropa Bagian Barat","202":"Afrika Sub-Sahara","419":"Amerika Latin","001":"Dunia","002":"Afrika","003":"Amerika Utara","005":"Amerika Selatan","009":"Oseania","011":"Afrika Bagian Barat","013":"Amerika Tengah","014":"Afrika Bagian Timur","015":"Afrika Bagian Utara","017":"Afrika Bagian Tengah","018":"Afrika Bagian Selatan","019":"Amerika","021":"Amerika Bagian Utara","029":"Kepulauan Karibia","030":"Asia Bagian Timur","034":"Asia Bagian Selatan","035":"Asia Tenggara","039":"Eropa Bagian Selatan","053":"Australasia","054":"Melanesia","057":"Wilayah Mikronesia","061":"Polinesia","AC":"Pulau Ascension","AD":"Andorra","AE":"Uni Emirat Arab","AF":"Afganistan","AG":"Antigua dan Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"Antarktika","AR":"Argentina","AS":"Samoa Amerika","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"Kepulauan Aland","AZ":"Azerbaijan","BA":"Bosnia dan Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgia","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"Saint Barthélemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"Belanda Karibia","BR":"Brasil","BS":"Bahama","BT":"Bhutan","BV":"Pulau Bouvet","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Kanada","CC":"Kepulauan Cocos (Keeling)","CD":"Kongo - Kinshasa","CF":"Republik Afrika Tengah","CG":"Kongo - Brazzaville","CH":"Swiss","CI":"Côte d’Ivoire","CK":"Kepulauan Cook","CL":"Cile","CM":"Kamerun","CN":"Tiongkok","CO":"Kolombia","CP":"Pulau Clipperton","CR":"Kosta Rika","CU":"Kuba","CV":"Tanjung Verde","CW":"Curaçao","CX":"Pulau Natal","CY":"Siprus","CZ":"Ceko","DE":"Jerman","DG":"Diego Garcia","DJ":"Jibuti","DK":"Denmark","DM":"Dominika","DO":"Republik Dominika","DZ":"Aljazair","EA":"Ceuta dan Melilla","EC":"Ekuador","EE":"Estonia","EG":"Mesir","EH":"Sahara Barat","ER":"Eritrea","ES":"Spanyol","ET":"Etiopia","EU":"Uni Eropa","EZ":"Zona Euro","FI":"Finlandia","FJ":"Fiji","FK":"Kepulauan Falkland","FM":"Mikronesia","FO":"Kepulauan Faroe","FR":"Prancis","GA":"Gabon","GB":"Inggris Raya","GD":"Grenada","GE":"Georgia","GF":"Guyana Prancis","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Grinlandia","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Guinea Ekuatorial","GR":"Yunani","GS":"Georgia Selatan & Kep. Sandwich Selatan","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hong Kong DAK Tiongkok","HM":"Pulau Heard dan Kepulauan McDonald","HN":"Honduras","HR":"Kroasia","HT":"Haiti","HU":"Hungaria","IC":"Kepulauan Canaria","ID":"Indonesia","IE":"Irlandia","IL":"Israel","IM":"Pulau Man","IN":"India","IO":"Wilayah Inggris di Samudra Hindia","IQ":"Irak","IR":"Iran","IS":"Islandia","IT":"Italia","JE":"Jersey","JM":"Jamaika","JO":"Yordania","JP":"Jepang","KE":"Kenya","KG":"Kirgistan","KH":"Kamboja","KI":"Kiribati","KM":"Komoro","KN":"Saint Kitts dan Nevis","KP":"Korea Utara","KR":"Korea Selatan","KW":"Kuwait","KY":"Kepulauan Cayman","KZ":"Kazakstan","LA":"Laos","LB":"Lebanon","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lituania","LU":"Luksemburg","LV":"Latvia","LY":"Libia","MA":"Maroko","MC":"Monako","MD":"Moldova","ME":"Montenegro","MF":"Saint Martin","MG":"Madagaskar","MH":"Kepulauan Marshall","MK":"Makedonia Utara","ML":"Mali","MM":"Myanmar (Burma)","MN":"Mongolia","MO":"Makau DAK Tiongkok","MP":"Kepulauan Mariana Utara","MQ":"Martinik","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maladewa","MW":"Malawi","MX":"Meksiko","MY":"Malaysia","MZ":"Mozambik","NA":"Namibia","NC":"Kaledonia Baru","NE":"Niger","NF":"Kepulauan Norfolk","NG":"Nigeria","NI":"Nikaragua","NL":"Belanda","NO":"Norwegia","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"Selandia Baru","OM":"Oman","PA":"Panama","PE":"Peru","PF":"Polinesia Prancis","PG":"Papua Nugini","PH":"Filipina","PK":"Pakistan","PL":"Polandia","PM":"Saint Pierre dan Miquelon","PN":"Kepulauan Pitcairn","PR":"Puerto Riko","PS":"Wilayah Palestina","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","QO":"Oseania Luar","RE":"Réunion","RO":"Rumania","RS":"Serbia","RU":"Rusia","RW":"Rwanda","SA":"Arab Saudi","SB":"Kepulauan Solomon","SC":"Seychelles","SD":"Sudan","SE":"Swedia","SG":"Singapura","SH":"Saint Helena","SI":"Slovenia","SJ":"Kepulauan Svalbard dan Jan Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"Sudan Selatan","ST":"Sao Tome dan Principe","SV":"El Salvador","SX":"Sint Maarten","SY":"Suriah","SZ":"eSwatini","TA":"Tristan da Cunha","TC":"Kepulauan Turks dan Caicos","TD":"Cad","TF":"Wilayah Selatan Perancis","TG":"Togo","TH":"Thailand","TJ":"Tajikistan","TK":"Tokelau","TL":"Timor Leste","TM":"Turkimenistan","TN":"Tunisia","TO":"Tonga","TR":"Turki","TT":"Trinidad dan Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzania","UA":"Ukraina","UG":"Uganda","UM":"Kepulauan Terluar A.S.","UN":"Perserikatan Bangsa-Bangsa","US":"Amerika Serikat","UY":"Uruguay","UZ":"Uzbekistan","VA":"Vatikan","VC":"Saint Vincent dan Grenadine","VE":"Venezuela","VG":"Kepulauan Virgin Britania Raya","VI":"Kepulauan Virgin Amerika Serikat","VN":"Vietnam","VU":"Vanuatu","WF":"Kepulauan Wallis dan Futuna","WS":"Samoa","XA":"Aksen Asing","XB":"Pseudo-Bidi","XK":"Kosovo","YE":"Yaman","YT":"Mayotte","ZA":"Afrika Selatan","ZM":"Zambia","ZW":"Zimbabwe","ZZ":"Wilayah Tidak Dikenal"},"short":{"GB":"UK","HK":"Hong Kong","MO":"Makau","PS":"Palestina","UN":"PBB","US":"A.S."},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Afak":"Afaka","Aghb":"Albania Kaukasia","Ahom":"Ahom","Arab":"Arab","Aran":"Nastaliq","Armi":"Aram Imperial","Armn":"Armenia","Avst":"Avesta","Bali":"Bali","Bamu":"Bamum","Bass":"Bassa Vah","Batk":"Batak","Beng":"Bengali","Bhks":"Bhks","Blis":"Blissymbol","Bopo":"Bopomofo","Brah":"Brahmi","Brai":"Braille","Bugi":"Bugis","Buhd":"Buhid","Cakm":"Chakma","Cans":"Simbol Aborigin Kanada Kesatuan","Cari":"Karia","Cham":"Cham","Cher":"Cherokee","Chrs":"Chrs","Cirt":"Cirth","Copt":"Koptik","Cprt":"Siprus","Cyrl":"Sirilik","Cyrs":"Gereja Slavonia Sirilik Lama","Deva":"Devanagari","Diak":"Diak","Dogr":"Dogr","Dsrt":"Deseret","Dupl":"Stenografi Duployan","Egyd":"Demotik Mesir","Egyh":"Hieratik Mesir","Egyp":"Hieroglip Mesir","Elba":"Elba","Elym":"Elym","Ethi":"Etiopia","Geok":"Georgian Khutsuri","Geor":"Georgia","Glag":"Glagolitic","Gong":"Gong","Gonm":"Gonm","Goth":"Gothic","Gran":"Grantha","Grek":"Yunani","Gujr":"Gujarat","Guru":"Gurmukhi","Hanb":"Han dengan Bopomofo","Hang":"Hangul","Hani":"Han","Hano":"Hanunoo","Hans":"Sederhana","Hant":"Tradisional","Hatr":"Hatr","Hebr":"Ibrani","Hira":"Hiragana","Hluw":"Hieroglif Anatolia","Hmng":"Pahawh Hmong","Hmnp":"Hmnp","Hrkt":"Katakana atau Hiragana","Hung":"Hungaria Kuno","Inds":"Indus","Ital":"Italia Lama","Jamo":"Jamo","Java":"Jawa","Jpan":"Jepang","Jurc":"Jurchen","Kali":"Kayah Li","Kana":"Katakana","Khar":"Kharoshthi","Khmr":"Khmer","Khoj":"Khojki","Kits":"Kits","Knda":"Kannada","Kore":"Korea","Kpel":"Kpelle","Kthi":"Kaithi","Lana":"Lanna","Laoo":"Laos","Latf":"Latin Fraktur","Latg":"Latin Gaelik","Latn":"Latin","Lepc":"Lepcha","Limb":"Limbu","Lina":"Linear A","Linb":"Linear B","Lisu":"Lisu","Loma":"Loma","Lyci":"Lycia","Lydi":"Lydia","Mahj":"Mahj","Maka":"Maka","Mand":"Mandae","Mani":"Manikhei","Marc":"Marc","Maya":"Hieroglip Maya","Medf":"Medf","Mend":"Mende","Merc":"Kursif Meroitik","Mero":"Meroitik","Mlym":"Malayalam","Modi":"Modi","Mong":"Mongolia","Moon":"Moon","Mroo":"Mro","Mtei":"Meitei Mayek","Mult":"Mult","Mymr":"Myanmar","Nand":"Nand","Narb":"Arab Utara Kuno","Nbat":"Nabataea","Newa":"Newa","Nkgb":"Naxi Geba","Nkoo":"N’Ko","Nshu":"Nushu","Ogam":"Ogham","Olck":"Chiki Lama","Orkh":"Orkhon","Orya":"Oriya","Osge":"Osge","Osma":"Osmanya","Palm":"Palmira","Pauc":"Pauc","Perm":"Permik Kuno","Phag":"Phags-pa","Phli":"Pahlevi","Phlp":"Mazmur Pahlevi","Phlv":"Kitab Pahlevi","Phnx":"Phoenix","Plrd":"Fonetik Pollard","Prti":"Prasasti Parthia","Qaag":"Zawgyi","Rjng":"Rejang","Rohg":"Rohg","Roro":"Rongorongo","Runr":"Runik","Samr":"Samaria","Sara":"Sarati","Sarb":"Arab Selatan Kuno","Saur":"Saurashtra","Sgnw":"Tulisan Isyarat","Shaw":"Shavia","Shrd":"Sharada","Sidd":"Siddham","Sind":"Khudawadi","Sinh":"Sinhala","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora Sompeng","Soyo":"Soyo","Sund":"Sunda","Sylo":"Syloti Nagri","Syrc":"Suriah","Syre":"Suriah Estrangelo","Syrj":"Suriah Barat","Syrn":"Suriah Timur","Tagb":"Tagbanwa","Takr":"Takri","Tale":"Tai Le","Talu":"Tai Lue Baru","Taml":"Tamil","Tang":"Tangut","Tavt":"Tai Viet","Telu":"Telugu","Teng":"Tenghwar","Tfng":"Tifinagh","Tglg":"Tagalog","Thaa":"Thaana","Thai":"Thai","Tibt":"Tibet","Tirh":"Tirhuta","Ugar":"Ugaritik","Vaii":"Vai","Visp":"Ucapan Terlihat","Wara":"Varang Kshiti","Wcho":"Wcho","Wole":"Woleai","Xpeo":"Persia Kuno","Xsux":"Cuneiform Sumero-Akkadia","Yezi":"Yezi","Yiii":"Yi","Zanb":"Zanb","Zinh":"Warisan","Zmth":"Notasi Matematika","Zsye":"Emoji","Zsym":"Simbol","Zxxx":"Tidak Tertulis","Zyyy":"Umum","Zzzz":"Skrip Tak Dikenal"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"Peseta Andorra","AED":"Dirham Uni Emirat Arab","AFA":"Afgani Afganistan (1927–2002)","AFN":"Afgani Afganistan","ALK":"ALK","ALL":"Lek Albania","AMD":"Dram Armenia","ANG":"Guilder Antilla Belanda","AOA":"Kwanza Angola","AOK":"Kwanza Angola (1977–1991)","AON":"Kwanza Baru Angola (1990–2000)","AOR":"Kwanza Angola yang Disesuaikan Lagi (1995–1999)","ARA":"Austral Argentina","ARL":"Peso Ley Argentina (1970–1983)","ARM":"Peso Argentina (1881–1970)","ARP":"Peso Argentina (1983–1985)","ARS":"Peso Argentina","ATS":"Schilling Austria","AUD":"Dolar Australia","AWG":"Florin Aruba","AZM":"Manat Azerbaijan (1993–2006)","AZN":"Manat Azerbaijan","BAD":"Dinar Bosnia-Herzegovina (1992–1994)","BAM":"Mark Konvertibel Bosnia-Herzegovina","BAN":"Dinar Baru Bosnia-Herzegovina (1994–1997)","BBD":"Dolar Barbados","BDT":"Taka Bangladesh","BEC":"Franc Belgia (konvertibel)","BEF":"Franc Belgia","BEL":"Franc Belgia (keuangan)","BGL":"Hard Lev Bulgaria","BGM":"Socialist Lev Bulgaria","BGN":"Lev Bulgaria","BGO":"Lev Bulgaria (1879–1952)","BHD":"Dinar Bahrain","BIF":"Franc Burundi","BMD":"Dolar Bermuda","BND":"Dolar Brunei","BOB":"Boliviano","BOL":"Boliviano Bolivia (1863–1963)","BOP":"Peso Bolivia","BOV":"Mvdol Bolivia","BRB":"Cruzeiro Baru Brasil (1967–1986)","BRC":"Cruzado Brasil (1986–1989)","BRE":"Cruzeiro Brasil (1990–1993)","BRL":"Real Brasil","BRN":"Cruzado Baru Brasil (1989–1990)","BRR":"Cruzeiro Brasil (1993–1994)","BRZ":"Cruzeiro Brasil (1942–1967)","BSD":"Dolar Bahama","BTN":"Ngultrum Bhutan","BUK":"Kyat Burma","BWP":"Pula Botswana","BYB":"Rubel Baru Belarus (1994–1999)","BYN":"Rubel Belarusia","BYR":"Rubel Belarusia (2000–2016)","BZD":"Dolar Belize","CAD":"Dolar Kanada","CDF":"Franc Kongo","CHE":"Euro WIR","CHF":"Franc Swiss","CHW":"Franc WIR","CLE":"Escudo Cile","CLF":"Satuan Hitung (UF) Cile","CLP":"Peso Cile","CNH":"Yuan Tiongkok (luar negeri)","CNX":"CNX","CNY":"Yuan Tiongkok","COP":"Peso Kolombia","COU":"Unit Nilai Nyata Kolombia","CRC":"Colon Kosta Rika","CSD":"Dinar Serbia (2002–2006)","CSK":"Hard Koruna Cheska","CUC":"Peso Konvertibel Kuba","CUP":"Peso Kuba","CVE":"Escudo Tanjung Verde","CYP":"Pound Siprus","CZK":"Koruna Cheska","DDM":"Mark Jerman Timur","DEM":"Mark Jerman","DJF":"Franc Jibuti","DKK":"Krone Denmark","DOP":"Peso Dominika","DZD":"Dinar Algeria","ECS":"Sucre Ekuador","ECV":"Satuan Nilai Tetap Ekuador","EEK":"Kroon Estonia","EGP":"Pound Mesir","ERN":"Nakfa Eritrea","ESA":"Peseta Spanyol (akun)","ESB":"Peseta Spanyol (konvertibel)","ESP":"Peseta Spanyol","ETB":"Birr Etiopia","EUR":"Euro","FIM":"Markka Finlandia","FJD":"Dolar Fiji","FKP":"Pound Kepulauan Falkland","FRF":"Franc Prancis","GBP":"Pound Inggris","GEK":"Kupon Larit Georgia","GEL":"Lari Georgia","GHC":"Cedi Ghana (1979–2007)","GHS":"Cedi Ghana","GIP":"Pound Gibraltar","GMD":"Dalasi Gambia","GNF":"Franc Guinea","GNS":"Syli Guinea","GQE":"Ekuele Guinea Ekuatorial","GRD":"Drachma Yunani","GTQ":"Quetzal Guatemala","GWE":"Escudo Guinea Portugal","GWP":"Peso Guinea-Bissau","GYD":"Dolar Guyana","HKD":"Dolar Hong Kong","HNL":"Lempira Honduras","HRD":"Dinar Kroasia","HRK":"Kuna Kroasia","HTG":"Gourde Haiti","HUF":"Forint Hungaria","IDR":"Rupiah Indonesia","IEP":"Pound Irlandia","ILP":"Pound Israel","ILR":"Shekel Israel","ILS":"Shekel Baru Israel","INR":"Rupee India","IQD":"Dinar Irak","IRR":"Rial Iran","ISJ":"Krona Islandia (1918–1981)","ISK":"Krona Islandia","ITL":"Lira Italia","JMD":"Dolar Jamaika","JOD":"Dinar Yordania","JPY":"Yen Jepang","KES":"Shilling Kenya","KGS":"Som Kirgistan","KHR":"Riel Kamboja","KMF":"Franc Komoro","KPW":"Won Korea Utara","KRH":"Hwan Korea Selatan (1953–1962)","KRO":"Won Korea Selatan (1945–1953)","KRW":"Won Korea Selatan","KWD":"Dinar Kuwait","KYD":"Dolar Kepulauan Cayman","KZT":"Tenge Kazakstan","LAK":"Kip Laos","LBP":"Pound Lebanon","LKR":"Rupee Sri Lanka","LRD":"Dolar Liberia","LSL":"Loti Lesotho","LTL":"Litas Lituania","LTT":"Talonas Lituania","LUC":"Franc Konvertibel Luksemburg","LUF":"Franc Luksemburg","LUL":"Financial Franc Luksemburg","LVL":"Lats Latvia","LVR":"Rubel Latvia","LYD":"Dinar Libya","MAD":"Dirham Maroko","MAF":"Franc Maroko","MCF":"Franc Monegasque","MDC":"Cupon Moldova","MDL":"Leu Moldova","MGA":"Ariary Madagaskar","MGF":"Franc Malagasi","MKD":"Denar Makedonia","MKN":"Denar Makedonia (1992–1993)","MLF":"Franc Mali","MMK":"Kyat Myanmar","MNT":"Tugrik Mongolia","MOP":"Pataca Makau","MRO":"Ouguiya Mauritania (1973–2017)","MRU":"Ouguiya Mauritania","MTL":"Lira Malta","MTP":"Pound Malta","MUR":"Rupee Mauritius","MVP":"Rufiyaa Maladewa (1947–1981)","MVR":"Rufiyaa Maladewa","MWK":"Kwacha Malawi","MXN":"Peso Meksiko","MXP":"Peso Silver Meksiko (1861–1992)","MXV":"Unit Investasi Meksiko","MYR":"Ringgit Malaysia","MZE":"Escudo Mozambik","MZM":"Metical Mozambik (1980–2006)","MZN":"Metical Mozambik","NAD":"Dolar Namibia","NGN":"Naira Nigeria","NIC":"Cordoba Nikaragua (1988–1991)","NIO":"Cordoba Nikaragua","NLG":"Guilder Belanda","NOK":"Krone Norwegia","NPR":"Rupee Nepal","NZD":"Dolar Selandia Baru","OMR":"Rial Oman","PAB":"Balboa Panama","PEI":"Inti Peru","PEN":"Sol Peru","PES":"Sol Peru (1863–1965)","PGK":"Kina Papua Nugini","PHP":"Peso Filipina","PKR":"Rupee Pakistan","PLN":"Polandia Zloty","PLZ":"Zloty Polandia (1950–1995)","PTE":"Escudo Portugal","PYG":"Guarani Paraguay","QAR":"Rial Qatar","RHD":"Dolar Rhodesia","ROL":"Leu Rumania (1952–2006)","RON":"Leu Rumania","RSD":"Dinar Serbia","RUB":"Rubel Rusia","RUR":"Rubel Rusia (1991–1998)","RWF":"Franc Rwanda","SAR":"Riyal Arab Saudi","SBD":"Dolar Kepulauan Solomon","SCR":"Rupee Seychelles","SDD":"Dinar Sudan (1992–2007)","SDG":"Pound Sudan","SDP":"Pound Sudan (1957–1998)","SEK":"Krona Swedia","SGD":"Dolar Singapura","SHP":"Pound Saint Helena","SIT":"Tolar Slovenia","SKK":"Koruna Slovakia","SLL":"Leone Sierra Leone","SOS":"Shilling Somalia","SRD":"Dolar Suriname","SRG":"Guilder Suriname","SSP":"Pound Sudan Selatan","STD":"Dobra Sao Tome dan Principe (1977–2017)","STN":"Dobra Sao Tome dan Principe","SUR":"Rubel Soviet","SVC":"Colon El Savador","SYP":"Pound Suriah","SZL":"Lilangeni Swaziland","THB":"Baht Thailand","TJR":"Rubel Tajikistan","TJS":"Somoni Tajikistan","TMM":"Manat Turkmenistan (1993–2009)","TMT":"Manat Turkimenistan","TND":"Dinar Tunisia","TOP":"Paʻanga Tonga","TPE":"Escudo Timor","TRL":"Lira Turki (1922–2005)","TRY":"Lira Turki","TTD":"Dolar Trinidad dan Tobago","TWD":"Dolar Baru Taiwan","TZS":"Shilling Tanzania","UAH":"Hryvnia Ukraina","UAK":"Karbovanet Ukraina","UGS":"Shilling Uganda (1966–1987)","UGX":"Shilling Uganda","USD":"Dolar Amerika Serikat","USN":"Dolar AS (Hari berikutnya)","USS":"Dolar AS (Hari yang sama)","UYI":"Peso Uruguay (Unit Diindeks)","UYP":"Peso Uruguay (1975–1993)","UYU":"Peso Uruguay","UYW":"UYW","UZS":"Som Uzbekistan","VEB":"Bolivar Venezuela (1871–2008)","VEF":"Bolivar Venezuela (2008–2018)","VES":"Bolivar Venezuela","VND":"Dong Vietnam","VNN":"Dong Vietnam (1978–1985)","VUV":"Vatu Vanuatu","WST":"Tala Samoa","XAF":"Franc CFA BEAC","XAG":"Silver","XAU":"Emas","XBA":"Unit Gabungan Eropa","XBB":"Unit Keuangan Eropa","XBC":"Satuan Hitung Eropa (XBC)","XBD":"Satuan Hitung Eropa (XBD)","XCD":"Dolar Karibia Timur","XDR":"Hak Khusus Menggambar","XEU":"Satuan Mata Uang Eropa","XFO":"Franc Gold Perancis","XFU":"Franc UIC Perancis","XOF":"Franc CFA BCEAO","XPD":"Palladium","XPF":"Franc CFP","XPT":"Platinum","XRE":"Dana RINET","XSU":"XSU","XTS":"Kode Mata Uang Pengujian","XUA":"XUA","XXX":"Mata Uang Tidak Dikenal","YDD":"Dinar Yaman","YER":"Rial Yaman","YUD":"Hard Dinar Yugoslavia (1966–1990)","YUM":"Dinar Baru Yugoslavia (1994–2002)","YUN":"Dinar Konvertibel Yugoslavia (1990–1992)","YUR":"Dinar Reformasi Yugoslavia (1992–1993)","ZAL":"Rand Afrika Selatan (Keuangan)","ZAR":"Rand Afrika Selatan","ZMK":"Kwacha Zambia (1968–2012)","ZMW":"Kwacha Zambia","ZRN":"Zaire Baru Zaire (1993–1998)","ZRZ":"Zaire Zaire (1971–1993)","ZWD":"Dolar Zimbabwe (1980–2008)","ZWL":"Dolar Zimbabwe (2009)","ZWR":"Dolar Zimbabwe (2008)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["id"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
