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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("gsw-FR").length
)) {
// Intl.DisplayNames.~locale.gsw-FR
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"Afar","ab":"Abchasisch","ace":"Aceh","ach":"Acholi","ada":"Adangme","ady":"Adygai","ae":"Avestisch","af":"Afrikaans","afh":"Afrihili","agq":"agq","ain":"Ainu","ak":"Akan","akk":"Akkadisch","ale":"Aleutisch","alt":"Süüd-Altaisch","am":"Amharisch","an":"Aragonesisch","ang":"Altänglisch","anp":"Angika","ar":"Arabisch","ar-001":"Arabisch (Wält)","arc":"Aramääisch","arn":"Araukanisch","arp":"Arapaho","arw":"Arawak","as":"Assamesisch","asa":"asa","ast":"Aschturianisch","av":"Awarisch","awa":"Awadhi","ay":"Aymara","az":"Aserbaidschanisch","ba":"Baschkirisch","bal":"Belutschisch","ban":"Balinesisch","bas":"Basaa","be":"Wiissrussisch","bej":"Bedauye","bem":"Bemba","bez":"bez","bg":"Bulgaarisch","bho":"Bhodschpuri","bi":"Bislama","bik":"Bikolisch","bin":"Bini","bla":"Blackfoot-Schpraach","bm":"Bambara","bn":"Bengalisch","bo":"Tibeetisch","br":"Brötoonisch","bra":"Braj-Bhakha","brx":"brx","bs":"Bosnisch","bua":"Burjatisch","bug":"Bugineesisch","byn":"Blin","ca":"Katalaanisch","cad":"Caddo","car":"Kariibisch","cch":"Atsam","ccp":"ccp","ce":"Tschetscheenisch","ceb":"Cebuano","cgg":"cgg","ch":"Chamorro","chb":"Tschibtscha","chg":"Tschagataisch","chk":"Trukesisch","chm":"Tscheremissisch","chn":"Chinook","cho":"Choctaw","chp":"Chipewyan","chr":"Cherokee","chy":"Cheyenne","ckb":"ckb","co":"Korsisch","cop":"Koptisch","cr":"Cree","crh":"Krimtatarisch","cs":"Tschechisch","csb":"Kaschubisch","cu":"Chileslawisch","cv":"Tschuwaschisch","cy":"Walisisch","da":"Tänisch","dak":"Takota","dar":"Targiinisch","dav":"dav","de":"Tüütsch","de-AT":"Öschtriichischs Tüütsch","de-CH":"Schwiizer Hochtüütsch","del":"Delaware-Schpraach","den":"Slavey","dgr":"Togrib","din":"Tinka","dje":"dje","doi":"Togri","dsb":"Nidersorbisch","dua":"Tuala","dum":"Mittelniderländisch","dv":"Malediivisch","dyo":"dyo","dyu":"Tiula","dz":"Dschongkha","ebu":"ebu","ee":"Ewe","efi":"Efikisch","egy":"Altägyptisch","eka":"Ekajuk","el":"Griechisch","elx":"Elamisch","en":"Änglisch","en-AU":"Auschtralischs Änglisch","en-CA":"Kanadischs Änglisch","en-GB":"Britischs Änglisch","en-US":"Amerikanischs Änglisch","enm":"Mittelänglisch","eo":"Eschperanto","es":"Schpanisch","es-419":"Latiinamerikanischs Schpanisch","es-ES":"Ibeerischs Schpanisch","es-MX":"Schpanisch (Mexiko)","et":"Eestnisch","eu":"Baskisch","ewo":"Ewondo","fa":"Persisch","fa-AF":"Persisch (Afganischtan)","fan":"Pangwe-Schpraach","fat":"Fanti-Schpraach","ff":"Ful","fi":"Finnisch","fil":"Filipino","fj":"Fidschianisch","fo":"Färöisch","fon":"Fon","fr":"Französisch","fr-CA":"Kanadischs Französisch","fr-CH":"Schwiizer Französisch","frc":"frc","frm":"Mittelfranzösisch","fro":"Altfranzösisch","frr":"Nordfriesisch","frs":"Oschtfriesisch","fur":"Friulisch","fy":"Friesisch","ga":"Iirisch","gaa":"Ga","gay":"Gayo","gba":"Gbaya","gd":"Schottisch-Gäälisch","gez":"Geez","gil":"Gilbertesisch","gl":"Galizisch","gmh":"Mittelhochtüütsch","gn":"Guarani","goh":"Althochtüütsch","gon":"Gondi","gor":"Mongondou","got":"Gotisch","grb":"Grebo","grc":"Altgriechisch","gsw":"Schwiizertüütsch","gu":"Gujarati","guz":"guz","gv":"Manx-Gäälisch","gwi":"Kutchinisch","ha":"Haussa","hai":"Haida","haw":"Hawaiianisch","he":"Hebräisch","hi":"Hindi","hil":"Hiligaynonisch","hit":"Hethitisch","hmn":"Miao","ho":"Hiri-Motu","hr":"Kroazisch","hsb":"Obersorbisch","ht":"Haitisch","hu":"Ungarisch","hup":"Hupa","hy":"Armenisch","hz":"Herero","ia":"Interlingua","iba":"Ibanisch","id":"Indonesisch","ie":"Interlingue","ig":"Igbo","ii":"Sezuanischs Yi","ik":"Inupiak","ilo":"Ilokano","inh":"Inguschisch","io":"Ido","is":"Iisländisch","it":"Italiänisch","iu":"Inukitut","ja":"Japanisch","jbo":"Lojbanisch","jgo":"jgo","jmc":"jmc","jpr":"Jüüdisch-Persisch","jrb":"Jüüdisch-Arabisch","jv":"Javanisch","ka":"Georgisch","kaa":"Karakalpakisch","kab":"Kabylisch","kac":"Kachin-Schpraach","kaj":"Jju","kam":"Kamba","kaw":"Kawi","kbd":"Kabardinisch","kcg":"Tyap","kde":"kde","kea":"kea","kfo":"Koro","kg":"Kongolesisch","kha":"Khasisch","kho":"Sakisch","khq":"khq","ki":"Kikuyu-Schpraach","kj":"Kwanyama","kk":"Kasachisch","kkj":"kkj","kl":"Gröönländisch","kln":"kln","km":"Kambodschanisch","kmb":"Kimbundu-Schpraach","kn":"Kannada","ko":"Koreaanisch","kok":"Konkani","kos":"Kosraeanisch","kpe":"Kpelle-Schpraach","kr":"Kanuri-Schpraach","krc":"Karatschaiisch-Balkarisch","krl":"Karelisch","kru":"Oraon-Schpraach","ks":"Kaschmirisch","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"Kurdisch","kum":"Kumükisch","kut":"Kutenai-Schpraach","kv":"Komi-Schpraach","kw":"Kornisch","ky":"Kirgiisisch","la":"Latiin","lad":"Ladino","lag":"lag","lah":"Lahndanisch","lam":"Lambanisch","lb":"Luxemburgisch","lez":"Lesgisch","lg":"Ganda-Schpraach","li":"Limburgisch","lkt":"lkt","ln":"Lingala","lo":"Laozisch","lol":"Mongo","lou":"lou","loz":"Rotse-Schpraach","lrc":"lrc","lt":"Litauisch","lu":"Luba","lua":"Luba-Lulua","lui":"Luiseno-Schpraach","lun":"Lunda-Schpraach","luo":"Luo-Schpraach","lus":"Lushai-Schpraach","luy":"luy","lv":"Lettisch","mad":"Maduresisch","mag":"Khotta","mai":"Maithili","mak":"Makassarisch","man":"Manding-Schpraach","mas":"Massai-Schpraach","mdf":"Mokschamordwinisch","mdr":"Mandaresisch","men":"Mende-Schpraach","mer":"mer","mfe":"mfe","mg":"Madagassisch","mga":"Mittelirisch","mgh":"mgh","mgo":"mgo","mh":"Marschallesisch","mi":"Maori","mic":"Micmac-Schpraach","min":"Minangkabau-Schpraach","mk":"Mazedonisch","ml":"Malayalam","mn":"Mongolisch","mnc":"Mandschurisch","mni":"Meithei-Schpraach","moh":"Mohawk-Schpraach","mos":"Mossi-Schpraach","mr":"Marathi","ms":"Malaiisch","mt":"Maltesisch","mua":"mua","mul":"Mehrschpraachig","mus":"Muskogee-Schpraach","mwl":"Mirandesisch","mwr":"Marwarisch","my":"Birmanisch","myv":"Erzya","mzn":"mzn","na":"Nauruisch","nap":"Neapolitanisch","naq":"naq","nb":"Norwegisch Bokmål","nd":"Nord-Ndebele-Schpraach","nds":"Nidertüütsch","nds-NL":"Nidertüütsch (Holland)","ne":"Nepalesisch","new":"Newarisch","ng":"Ndonga","nia":"Nias-Schpraach","niu":"Niue-Schpraach","nl":"Niderländisch","nl-BE":"Fläämisch","nmg":"nmg","nn":"Norwegisch Nynorsk","nnh":"nnh","no":"Norwegisch","nog":"Nogaisch","non":"Altnordisch","nqo":"N’Ko","nr":"Süüd-Ndebele-Schpraach","nso":"Nord-Sotho-Schpraach","nus":"nus","nv":"Navajo-Schpraach","nwc":"Alt-Newari","ny":"Chewa-Schpraach","nym":"Nyamwezi-Schpraach","nyn":"Nyankole","nyo":"Nyoro","nzi":"Nzima","oc":"Okzitanisch","oj":"Ojibwa-Schpraach","om":"Oromo","or":"Orija","os":"Ossezisch","osa":"Osage-Schpraach","ota":"Osmanisch","pa":"Pandschabisch","pag":"Pangasinanisch","pal":"Mittelpersisch","pam":"Pampanggan-Schpraach","pap":"Papiamento","pau":"Palau","pcm":"pcm","peo":"Altpersisch","phn":"Phönikisch","pi":"Pali","pl":"Polnisch","pon":"Ponapeanisch","prg":"prg","pro":"Altprovenzalisch","ps":"Paschtu","pt":"Portugiisisch","pt-BR":"Brasilianischs Portugiisisch","pt-PT":"Iberischs Portugiisisch","qu":"Quechua","raj":"Rajasthani","rap":"Oschterinsel-Schpraach","rar":"Rarotonganisch","rm":"Rätoromanisch","rn":"Rundi-Schpraach","ro":"Rumänisch","ro-MD":"Moldawisch","rof":"rof","rom":"Zigüünerschpraach","root":"Root","ru":"Russisch","rup":"Aromunisch","rw":"Ruandisch","rwk":"rwk","sa":"Sanschkrit","sad":"Sandawe-Schpraach","sah":"Jakutisch","sam":"Samaritanisch","saq":"saq","sas":"Sasak","sat":"Santali","sbp":"sbp","sc":"Sardisch","scn":"Sizilianisch","sco":"Schottisch","sd":"Sindhi","se":"Nord-Samisch","seh":"seh","sel":"Selkupisch","ses":"ses","sg":"Sango","sga":"Altirisch","sh":"Serbo-Kroatisch","shi":"shi","shn":"Schan-Schpraach","si":"Singhalesisch","sid":"Sidamo","sk":"Slowakisch","sl":"Slowenisch","sm":"Samoanisch","sma":"Süüd-Samisch","smj":"Lule-Samisch","smn":"Inari-Samisch","sms":"Skolt-Samisch","sn":"Schhona","snk":"Soninke-Schpraach","so":"Somali","sog":"Sogdisch","sq":"Albanisch","sr":"Serbisch","srn":"Srananisch","srr":"Serer-Schpraach","ss":"Swazi","st":"Süüd-Sotho-Schpraach","su":"Sundanesisch","suk":"Sukuma-Schpraach","sus":"Susu","sux":"Sumerisch","sv":"Schwedisch","sw":"Suaheli","sw-CD":"Suaheli (Temokraatischi Republik Kongo)","syc":"Altsyrisch","syr":"Syrisch","ta":"Tamilisch","te":"Telugu","tem":"Temne","teo":"teo","ter":"Tereno-Schpraach","tet":"Tetum-Schpraach","tg":"Tadschikisch","th":"Thailändisch","ti":"Tigrinja","tig":"Tigre","tiv":"Tiv-Schpraach","tk":"Turkmenisch","tkl":"Tokelauanisch","tl":"Tagalog","tlh":"Klingonisch","tli":"Tlingit-Schpraach","tmh":"Tamaseq","tn":"Tswana-Schpraach","to":"Tongaisch","tog":"Tsonga-Schpraach","tpi":"Neumelanesisch","tr":"Türkisch","ts":"Tsonga","tsi":"Tsimshian-Schpraach","tt":"Tatarisch","tum":"Tumbuka-Schpraach","tvl":"Elliceanisch","tw":"Twi","twq":"twq","ty":"Tahitisch","tyv":"Tuwinisch","tzm":"tzm","udm":"Udmurtisch","ug":"Uigurisch","uga":"Ugaritisch","uk":"Ukrainisch","umb":"Mbundu-Schpraach","und":"Unbeschtimmti Schpraach","ur":"Urdu","uz":"Usbekisch","vai":"Vai-Schpraach","ve":"Venda-Schpraach","vi":"Vietnamesisch","vo":"Volapük","vot":"Wotisch","vun":"vun","wa":"Wallonisch","wae":"wae","wal":"Walamo-Schpraach","war":"Waray","was":"Washo-Schpraach","wo":"Wolof","xal":"Kalmückisch","xh":"Xhosa","xog":"xog","yao":"Yao-Schpraach","yap":"Yapesisch","yav":"yav","yi":"Jiddisch","yo":"Yoruba","yue":"yue","za":"Zhuang","zap":"Zapotekisch","zbl":"Bliss-Symbool","zen":"Zenaga","zgh":"zgh","zh":"Chineesisch","zh-Hans":"Veräifachts Chineesisch","zh-Hant":"Tradizionells Chineesisch","zu":"Zulu","zun":"Zuni-Schpraach","zxx":"Kän schpraachliche Inhalt","zza":"Zaza"},"short":{"az":"Aserbaidschanisch","en-GB":"Britischs Änglisch","en-US":"Amerikanischs Änglisch"},"narrow":{}},"region":{"long":{"142":"Aasie","143":"Zentraalaasie","145":"Weschtaasie","150":"Euroopa","151":"Oschteuroopa","154":"Nordeuroopa","155":"Weschteuroopa","202":"202","419":"Latiinameerika","001":"Wält","002":"Afrika","003":"Nordameerika","005":"Süüdameerika","009":"Ozeaanie","011":"Weschtafrika","013":"Mittelameerika","014":"Oschtafrika","015":"Nordafrika","017":"Zentraalafrika","018":"Süüdlichs Afrika","019":"Nord-, Mittel- und Süüdameerika","021":"Nördlichs Ameerika","029":"Karibik","030":"Oschtaasie","034":"Süüdaasie","035":"Süüdoschtaasie","039":"Süüdeuropa","053":"Auschtraalie und Nöiseeland","054":"Melaneesie","057":"Mikroneesischs Inselgebiet","061":"Polineesie","AC":"AC","AD":"Andorra","AE":"Veräinigti Arabischi Emirate","AF":"Afganischtan","AG":"Antigua und Barbuda","AI":"Anguilla","AL":"Albaanie","AM":"Armeenie","AO":"Angoola","AQ":"Antarktis","AR":"Argentiinie","AS":"Amerikaanisch-Samoa","AT":"Ööschtriich","AU":"Auschtraalie","AW":"Aruba","AX":"Aaland-Insle","AZ":"Aserbäidschan","BA":"Bosnie und Herzegowina","BB":"Barbados","BD":"Bangladesch","BE":"Belgie","BF":"Burkina Faaso","BG":"Bulgaarie","BH":"Bachräin","BI":"Burundi","BJ":"Benin","BL":"St. Barthelemi","BM":"Bermuuda","BN":"Brunäi Tarussalam","BO":"Boliivie","BQ":"BQ","BR":"Brasilie","BS":"Bahaamas","BT":"Bhutan","BV":"Bouvet-Insle","BW":"Botswana","BY":"Wiissrussland","BZ":"Belize","CA":"Kanada","CC":"Kokos-Insle","CD":"Temokraatischi Republik Kongo","CF":"Zentraalafrikaanischi Republik","CG":"Kongo","CH":"Schwiiz","CI":"Elfebäiküschte","CK":"Cook-Insle","CL":"Tschile","CM":"Kamerun","CN":"Chiina","CO":"Kolumbie","CP":"CP","CR":"Coschta Rica","CU":"Kuba","CV":"Kap Verde","CW":"CW","CX":"Wienachts-Insle","CY":"Zypere","CZ":"Tschechischi Republik","DE":"Tüütschland","DG":"DG","DJ":"Tschibuuti","DK":"Tänemark","DM":"Tominica","DO":"Tominikaanischi Republik","DZ":"Algeerie","EA":"EA","EC":"Ecuador","EE":"Eestland","EG":"Ägüpte","EH":"Weschtsahara","ER":"Äritreea","ES":"Schpanie","ET":"Äthiopie","EU":"Europääischi Unioon","EZ":"EZ","FI":"Finnland","FJ":"Fitschi","FK":"Falkland-Insle","FM":"Mikroneesie","FO":"Färöer","FR":"Frankriich","GA":"Gabun","GB":"Veräinigts Chönigriich","GD":"Grenada","GE":"Geoorgie","GF":"Französisch-Guäjaana","GG":"Gäärnsi","GH":"Gaana","GI":"Gibraltar","GL":"Gröönland","GM":"Gambia","GN":"Gineea","GP":"Guadälup","GQ":"Äquatoriaalgineea","GR":"Griecheland","GS":"Süüdgeorgie und d’süüdlichi Sändwitsch-Insle","GT":"Guatemaala","GU":"Guam","GW":"Gineea-Bissau","GY":"Guäjaana","HK":"Sonderverwaltigszone Hongkong","HM":"Höörd- und MäcDonald-Insle","HN":"Honduras","HR":"Kroaazie","HT":"Haiti","HU":"Ungarn","IC":"IC","ID":"Indoneesie","IE":"Irland","IL":"Israel","IM":"Insle vo Män","IN":"Indie","IO":"Britischs Territoorium im Indische Oozean","IQ":"Iraak","IR":"Iraan","IS":"Iisland","IT":"Itaalie","JE":"Dschörsi","JM":"Dschamäika","JO":"Jordaanie","JP":"Japan","KE":"Keenia","KG":"Kirgiisischtan","KH":"Kambodscha","KI":"Kiribaati","KM":"Komoore","KN":"St. Kitts und Niuwis","KP":"Demokraatischi Volksrepublik Koreea","KR":"Republik Koreea","KW":"Kuwäit","KY":"Käimän-Insle","KZ":"Kasachschtan","LA":"Laaos","LB":"Libanon","LC":"St. Lutschiia","LI":"Liächteschtäi","LK":"Schri Lanka","LR":"Libeeria","LS":"Lesooto","LT":"Littaue","LU":"Luxemburg","LV":"Lettland","LY":"Lüübie","MA":"Marokko","MC":"Monaco","MD":"Republik Moldau","ME":"Monteneegro","MF":"St. Martin","MG":"Madagaschkar","MH":"Marshallinsle","MK":"MK","ML":"Maali","MM":"Myanmar (Burma)","MN":"Mongolei","MO":"Sonderverwaltigszone Macao","MP":"Nördlichi Mariaane","MQ":"Martinigg","MR":"Mauretaanie","MS":"Moosörrat","MT":"Malta","MU":"Mauriizius","MV":"Malediiwe","MW":"Malaawi","MX":"Mexiko","MY":"Maläisia","MZ":"Mosambik","NA":"Namiibia","NC":"Nöikaledoonie","NE":"Niger","NF":"Norfolk-Insle","NG":"Nigeeria","NI":"Nicaraagua","NL":"Holland","NO":"Norweege","NP":"Neepal","NR":"Nauru","NU":"Niue","NZ":"Nöiseeland","OM":"Omaan","PA":"Panama","PE":"Peru","PF":"Französisch-Polineesie","PG":"Papua-Neuguinea","PH":"Philippiine","PK":"Pakischtan","PL":"Poole","PM":"St. Pierr und Miggelo","PN":"Pitggäärn","PR":"Puerto Riggo","PS":"Paläschtinänsischi Gebiet","PT":"Portugal","PW":"Palau","PY":"Paraguai","QA":"Ggatar","QO":"Üssers Ozeaanie","RE":"Reünioon","RO":"Rumäänie","RS":"Särbie","RU":"Russland","RW":"Ruanda","SA":"Saudi-Araabie","SB":"Salomoone","SC":"Seischälle","SD":"Sudan","SE":"Schweede","SG":"Singapuur","SH":"St. Helena","SI":"Sloweenie","SJ":"Svalbard und Jaan Määie","SK":"Slowakäi","SL":"Sierra Leoone","SM":"San Mariino","SN":"Senegal","SO":"Somaalie","SR":"Surinam","SS":"SS","ST":"Sao Tome und Prinssipe","SV":"El Salvador","SX":"SX","SY":"Süürie","SZ":"Swasiland","TA":"TA","TC":"Törks- und Gaiggos-Insle","TD":"Tschad","TF":"Französischi Süüd- und Antarktisgebiet","TG":"Toogo","TH":"Thailand","TJ":"Tadschikischtan","TK":"Tokelau","TL":"Oschttimor","TM":"Turkmeenischtan","TN":"Tuneesie","TO":"Tonga","TR":"Türggei","TT":"Trinidad und Tobaago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tansaniia","UA":"Ukraiine","UG":"Uganda","UM":"Amerikanisch-Ozeaanie","UN":"UN","US":"Veräinigti Schtaate","UY":"Uruguay","UZ":"Uschbeekischtan","VA":"Vatikanstadt","VC":"St. Vincent und d’Grönadiine","VE":"Venezueela","VG":"Britischi Jungfere-Insle","VI":"Amerikaanischi Jungfere-Insle","VN":"Wietnam","VU":"Wanuatu","WF":"Wallis und Futuuna","WS":"Samooa","XA":"XA","XB":"XB","XK":"XK","YE":"Jeeme","YT":"Majott","ZA":"Süüdafrika","ZM":"Sambia","ZW":"Simbabwe","ZZ":"Unbekannti oder ungültigi Regioon"},"short":{"GB":"Veräinigts Chönigriich","HK":"Hongkong","MO":"Macao","PS":"Paläschtinänsischi Gebiet","US":"Veräinigti Schtaate"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arabisch","Aran":"Aran","Armi":"Armi","Armn":"Armenisch","Avst":"Aveschtisch","Bali":"Balinesisch","Bamu":"Bamu","Bass":"Bass","Batk":"Battakisch","Beng":"Bengalisch","Bhks":"Bhks","Blis":"Bliss-Symbool","Bopo":"Bopomofo","Brah":"Brahmi","Brai":"Blindäschrift","Bugi":"Buginesisch","Buhd":"Buhid","Cakm":"Cakm","Cans":"UCAS","Cari":"Karisch","Cham":"Cham","Cher":"Cherokee","Chrs":"Chrs","Cirt":"Cirth","Copt":"Koptisch","Cprt":"Zypriotisch","Cyrl":"Kyrillisch","Cyrs":"Altchileslawisch","Deva":"Tövanagaari","Diak":"Diak","Dogr":"Dogr","Dsrt":"Teseret","Dupl":"Dupl","Egyd":"Temozisch-Ägüptisch","Egyh":"Hiraazisch-Ägüptisch","Egyp":"Ägüptischi Hiroglüüfe","Elba":"Elba","Elym":"Elym","Ethi":"Äzioopisch","Geok":"Ghutsuri","Geor":"Georgisch","Glag":"Glagolitisch","Gong":"Gong","Gonm":"Gonm","Goth":"Gotisch","Gran":"Gran","Grek":"Griechisch","Gujr":"Guscharati","Guru":"Gurmukhi","Hanb":"Hanb","Hang":"Hangul","Hani":"Chineesisch","Hano":"Hanunoo","Hans":"Veräifachti Chineesischi Schrift","Hant":"Tradizionelli Chineesischi Schrift","Hatr":"Hatr","Hebr":"Hebräisch","Hira":"Hiragana","Hluw":"Hluw","Hmng":"Pahawh Hmong","Hmnp":"Hmnp","Hrkt":"Katakana oder Hiragana","Hung":"Altungarisch","Inds":"Indus-Schrift","Ital":"Altitalisch","Jamo":"Jamo","Java":"Javanesisch","Jpan":"Japanisch","Kali":"Kayah Li","Kana":"Katakana","Khar":"Kharoshthi","Khmr":"Khmer","Khoj":"Khoj","Kits":"Kits","Knda":"Kannada","Kore":"Koreanisch","Kthi":"Kthi","Lana":"Lanna","Laoo":"Laotisch","Latf":"Latiinisch - Fraktur-Variante","Latg":"Latiinisch - Gäälischi Variante","Latn":"Latiinisch","Lepc":"Lepcha","Limb":"Limbu","Lina":"Linear A","Linb":"Linear B","Lisu":"Lisu","Lyci":"Lykisch","Lydi":"Lydisch","Mahj":"Mahj","Maka":"Maka","Mand":"Mandäisch","Mani":"Manichäisch","Marc":"Marc","Maya":"Maya-Hieroglyphä","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Meroitisch","Mlym":"Malaysisch","Modi":"Modi","Mong":"Mongolisch","Moon":"Moon","Mroo":"Mroo","Mtei":"Meitei Mayek","Mult":"Mult","Mymr":"Burmesisch","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"N’Ko","Nshu":"Nshu","Ogam":"Ogham","Olck":"Ol Chiki","Orkh":"Orchon-Runä","Orya":"Oriya","Osge":"Osge","Osma":"Osmanisch","Palm":"Palm","Pauc":"Pauc","Perm":"Altpermisch","Phag":"Phags-pa","Phli":"Phli","Phlp":"Phlp","Phlv":"Pahlavi","Phnx":"Phönizisch","Plrd":"Pollard Phonetisch","Prti":"Prti","Qaag":"Qaag","Rjng":"Rejang","Rohg":"Rohg","Roro":"Rongorongo","Runr":"Runäschrift","Samr":"Samaritanisch","Sara":"Sarati","Sarb":"Sarb","Saur":"Saurashtra","Sgnw":"Gebäärdeschpraach","Shaw":"Shaw-Alphabet","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Singhalesisch","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sundanesisch","Sylo":"Syloti Nagri","Syrc":"Syrisch","Syre":"Syrisch - Eschtrangelo-Variante","Syrj":"Weschtsyrisch","Syrn":"Oschtsyrisch","Tagb":"Tagbanwa","Takr":"Takr","Tale":"Tai Le","Talu":"Tai Lue","Taml":"Tamilisch","Tang":"Tang","Tavt":"Tavt","Telu":"Telugu","Teng":"Tengwar","Tfng":"Tifinagh","Tglg":"Tagalog","Thaa":"Thaana","Thai":"Thai","Tibt":"Tibeetisch","Tirh":"Tirh","Ugar":"Ugaritisch","Vaii":"Vai","Visp":"Sichtbari Schpraach","Wara":"Wara","Wcho":"Wcho","Xpeo":"Altpersisch","Xsux":"Sumerisch-akkadischi Keilschrift","Yezi":"Yezi","Yiii":"Yi","Zanb":"Zanb","Zinh":"G’eerbtä Schriftwärt","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Schriftlosi Schpraach","Zyyy":"Unbeschtimmt","Zzzz":"Uncodiirti Schrift"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"Andorranischi Peseete","AED":"UAE Dirham","AFA":"Afghani (1927–2002)","AFN":"Afghani","ALK":"ALK","ALL":"Lek","AMD":"Dram","ANG":"Niderländischi-Antille-Gulde","AOA":"Kwanza","AOK":"Angolanische Kwanza (1977–1990)","AON":"Nöie Kwanza","AOR":"Kwanza Reajustado","ARA":"Argentinische Auschtral","ARL":"ARL","ARM":"ARM","ARP":"Argentinische Peso (1983–1985)","ARS":"Argentinische Peso","ATS":"Öschtriichische Schilling","AUD":"Auschtralische Dollar","AWG":"Aruba Florin","AZM":"Aserbeidschanische Manat (1993–2006)","AZN":"Aserbeidschanische Manat","BAD":"Bosnie-und-Herzegowina-Dinar","BAM":"Konvertierbari Mark vo Bosnie und Herzegowina","BAN":"BAN","BBD":"Barbados-Dollar","BDT":"Taka","BEC":"Belgische Franc (konvertibel)","BEF":"Belgische Franc","BEL":"Belgische Finanz-Franc","BGL":"Lew (1962–1999)","BGM":"BGM","BGN":"Bulgarische Lew","BGO":"BGO","BHD":"Bahrain-Dinar","BIF":"Burundi-Franc","BMD":"Bermuda-Dollar","BND":"Brunei-Dollar","BOB":"Boliviano","BOL":"BOL","BOP":"Bolivianische Peso","BOV":"Bolivianische Mvdol","BRB":"Brasilianische Cruzeiro Novo (1967–1986)","BRC":"Brasilianische Cruzado","BRE":"Brasilianische Cruzeiro (1990–1993)","BRL":"Brasilianische Real","BRN":"Brasilianische Cruzado Novo","BRR":"Brasilianische Cruzeiro","BRZ":"BRZ","BSD":"Bahama-Dollar","BTN":"Bhutanische Ngultrum","BUK":"Birmanische Kyat","BWP":"Botswanische Pula","BYB":"Belarus-Rubel (1994–1999)","BYN":"Belarus Rubel","BYR":"Belarus Rubel (2000–2016)","BZD":"Belize-Dollar","CAD":"Kanadische Dollar","CDF":"Kongolesische Franc","CHE":"WIR-Euro","CHF":"Schwiizer Franke","CHW":"WIR-Franke","CLE":"CLE","CLF":"Tschileenische Unidad de Fomento","CLP":"Tschileenische Peso","CNH":"CNH","CNX":"CNX","CNY":"Renminbi Yuan","COP":"Kolumbianische Peso","COU":"Unidad de Valor Real","CRC":"Costa Rica Colon","CSD":"Alte Serbische Dinar","CSK":"Tschechoslowakischi Chroone","CUC":"CUC","CUP":"Kubanische Peso","CVE":"Kap Verde Escudo","CYP":"Zypere-Pfund","CZK":"Tschechischi Chroone","DDM":"DDR-Mark","DEM":"Tüütschi Mark","DJF":"Dschibuti-Franc","DKK":"Tänischi Chroone","DOP":"Tominikanische Peso","DZD":"Algeerischi Dinar","ECS":"Ecuadorianische Sucre","ECV":"Verrächnigsäiheit für EC","EEK":"Eestnischi Chroone","EGP":"Ägüptischs Pfund","ERN":"Eritreische Nakfa","ESA":"Schpanischi Peseeta (A–Kontene)","ESB":"Schpanischi Peseeta (konvertibel)","ESP":"Schpanischi Peseeta","ETB":"Äthiopische Birr","EUR":"Euro","FIM":"Finnischi Mark","FJD":"Fidschi Dollar","FKP":"Falkland-Pfund","FRF":"Französische Franc","GBP":"Pfund Schtörling","GEK":"Georgische Kupon Larit","GEL":"Georgische Lari","GHC":"Ghanaische Cedi (GHC)","GHS":"Ghanaische Cedi (GHS)","GIP":"Gibraltar-Pfund","GMD":"Gambische Dalasi","GNF":"Guinea-Franc","GNS":"Guineische Syli","GQE":"Äquatorialguinea-Ekwele","GRD":"Griechische Trachme","GTQ":"Quetzal","GWE":"Portugiisische Guinea Escudo","GWP":"Guinea-Bissau-Peso","GYD":"Guyana-Dollar","HKD":"Hongkong-Dollar","HNL":"Lempira","HRD":"Kroazische Dinar","HRK":"Kuna","HTG":"Gourde","HUF":"Forint","IDR":"Indonesischi Rupie","IEP":"Iirischs Pfund","ILP":"Israelischs Pfund","ILR":"ILR","ILS":"Schekel","INR":"Indischi Rupie","IQD":"Irak-Dinar","IRR":"Rial","ISJ":"ISJ","ISK":"Iisländischi Chroone","ITL":"Italiänischi Lira","JMD":"Jamaika-Dollar","JOD":"Jordaanische Dinar","JPY":"Yen","KES":"Kenia-Schilling","KGS":"Som","KHR":"Riel","KMF":"Komore-Franc","KPW":"Nordkoreanische Won","KRH":"KRH","KRO":"KRO","KRW":"Süüdkoreanische Won","KWD":"Kuwait-Dinar","KYD":"Kaiman-Dollar","KZT":"Tenge","LAK":"Kip","LBP":"Libaneesischs Pfund","LKR":"Sri-Lanka-Rupie","LRD":"Liberiaanische Dollar","LSL":"Loti","LTL":"Litauische Litas","LTT":"Litauische Talonas","LUC":"Luxemburgische Franc (konvertibel)","LUF":"Luxemburgische Franc","LUL":"Luxemburgischer Finanz-Franc","LVL":"Lettische Lats","LVR":"Lettische Rubel","LYD":"Lüübische Dinar","MAD":"Marokkanische Dirham","MAF":"Marokkanischer Franc","MCF":"MCF","MDC":"MDC","MDL":"Moldau-Löi","MGA":"Madagaschkar-Ariary","MGF":"Madagaschkar-Franc","MKD":"Denar","MKN":"MKN","MLF":"Malische Franc","MMK":"Kyat","MNT":"Tugrik","MOP":"Pataca","MRO":"Ouguiya (1973–2017)","MRU":"Ouguiya","MTL":"Malteesischi Lira","MTP":"Malteesischs Pfund","MUR":"Maurizius-Rupie","MVP":"MVP","MVR":"Rufiyaa","MWK":"Malawi-Kwacha","MXN":"Mexikanische Peso","MXP":"Mexikanische Silber-Peso (1861–1992)","MXV":"Mexikanische Unidad de Inversion (UDI)","MYR":"Malaysische Ringgit","MZE":"Mosambikanische Escudo","MZM":"Alte Metical","MZN":"Metical","NAD":"Namibia-Dollar","NGN":"Naira","NIC":"Cordoba","NIO":"Nicaragua-Córdoba","NLG":"Holländische Gulde","NOK":"Norweegischi Chroone","NPR":"Nepaleesischi Rupie","NZD":"Neuseeland-Dollar","OMR":"Rial Omani","PAB":"Balboa","PEI":"Peruanische Inti","PEN":"Sol","PES":"Sol (1863–1965)","PGK":"Kina","PHP":"Philippiinische Peso","PKR":"Pakischtanischi Rupie","PLN":"Zloty","PLZ":"Zloty (1950–1995)","PTE":"Portugiisische Escudo","PYG":"Guarani","QAR":"Katar-Riyal","RHD":"Rhodesische Dollar","ROL":"Löi","RON":"Rumäänische Löi","RSD":"Serbische Dinar","RUB":"Russische Rubel","RUR":"Russische Rubel (alt)","RWF":"Ruanda-Franc","SAR":"Saudi-Riyal","SBD":"Salomone-Dollar","SCR":"Seyschelle-Rupie","SDD":"Sudaneesische Dinar","SDG":"Sudaneesischs Pfund","SDP":"Sudaneesischs Pfund (alt)","SEK":"Schweedischi Chroone","SGD":"Singapur-Dollar","SHP":"St.-Helena-Pfund","SIT":"Tolar","SKK":"Slowakischi Chroone","SLL":"Leone","SOS":"Somalia-Schilling","SRD":"Surinamische Dollar","SRG":"Surinamische Gulde","SSP":"Süüdsudaneesischs Pfund","STD":"Dobra (1977–2017)","STN":"Dobra","SUR":"Sowjetische Rubel","SVC":"El-Salvador-Colon","SYP":"Süürischs Pfund","SZL":"Lilangeni","THB":"Baht","TJR":"Tadschikischtan-Rubel","TJS":"Tadschikischtan-Somoni","TMM":"Turkmeenischtan-Manat","TMT":"TMT","TND":"Tuneesische Dinar","TOP":"Paʻanga","TPE":"Timor-Escudo","TRL":"Türkischi Liire","TRY":"Nöii Türkischi Liire","TTD":"Trinidad-und-Tobago-Dollar","TWD":"Nöii Taiwan-Dollar","TZS":"Tansania-Schilling","UAH":"Hryvnia","UAK":"Ukraiinische Karbovanetz","UGS":"Uganda-Schilling (1966–1987)","UGX":"Uganda-Schilling","USD":"US-Dollar","USN":"US Dollar (Nöchschte Taag)","USS":"US Dollar (Gliiche Taag)","UYI":"UYI","UYP":"Uruguayische Nöie Peso (1975–1993)","UYU":"Uruguayische Peso","UYW":"UYW","UZS":"Usbeekischtan-Sum","VEB":"Bolivar (1871–2008)","VEF":"Bolivar (2008–2018)","VES":"Bolivar","VND":"Dong","VNN":"VNN","VUV":"Vatu","WST":"Tala","XAF":"CFA-Franc (Äquatoriaal)","XAG":"Silber","XAU":"Gold","XBA":"Europääischi Rächnigseinheit","XBB":"Europääischi Währigseinheit (XBB)","XBC":"Europääischi Rächnigseinheit (XBC)","XBD":"Europääischi Rächnigseinheit (XBD)","XCD":"Oschtkaribische Dollar","XDR":"Sunderziäigsrächt","XEU":"Europääischi Währigseinheit (XEU)","XFO":"Französische Gold-Franc","XFU":"Französische UIC-Franc","XOF":"CFA-Franc (Wescht)","XPD":"Palladium","XPF":"CFP-Franc","XPT":"Platin","XRE":"RINET-Funds","XSU":"XSU","XTS":"Teschtwährig","XUA":"XUA","XXX":"Unbekannti Währig","YDD":"Jeme-Dinar","YER":"Jeme-Rial","YUD":"Jugoslawische Dinar (1966–1990)","YUM":"Nöii Dinar","YUN":"Jugoslawische Dinar (konvertibel)","YUR":"YUR","ZAL":"ZAL","ZAR":"Rand","ZMK":"Kwacha (1968–2012)","ZMW":"Kwacha","ZRN":"Nöie Zaire","ZRZ":"Zaire","ZWD":"Simbabwe-Dollar","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"gsw-FR"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
