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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("de").length
)) {
// Intl.DisplayNames.~locale.de
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"de":{"types":{"language":{"long":{"aa":"Afar","ab":"Abchasisch","ace":"Aceh","ach":"Acholi","ada":"Adangme","ady":"Adygeisch","ae":"Avestisch","aeb":"Tunesisches Arabisch","af":"Afrikaans","afh":"Afrihili","agq":"Aghem","ain":"Ainu","ak":"Akan","akk":"Akkadisch","akz":"Alabama","ale":"Aleutisch","aln":"Gegisch","alt":"Süd-Altaisch","am":"Amharisch","an":"Aragonesisch","ang":"Altenglisch","anp":"Angika","ar":"Arabisch","ar-001":"Modernes Hocharabisch","arc":"Aramäisch","arn":"Mapudungun","aro":"Araona","arp":"Arapaho","arq":"Algerisches Arabisch","ars":"Arabisch (Nadschd)","arw":"Arawak","ary":"Marokkanisches Arabisch","arz":"Ägyptisches Arabisch","as":"Assamesisch","asa":"Asu","ase":"Amerikanische Gebärdensprache","ast":"Asturianisch","av":"Awarisch","avk":"Kotava","awa":"Awadhi","ay":"Aymara","az":"Aserbaidschanisch","ba":"Baschkirisch","bal":"Belutschisch","ban":"Balinesisch","bar":"Bairisch","bas":"Basaa","bax":"Bamun","bbc":"Batak Toba","bbj":"Ghomala","be":"Weißrussisch","bej":"Bedauye","bem":"Bemba","bew":"Betawi","bez":"Bena","bfd":"Bafut","bfq":"Badaga","bg":"Bulgarisch","bgn":"Westliches Belutschi","bho":"Bhodschpuri","bi":"Bislama","bik":"Bikol","bin":"Bini","bjn":"Banjaresisch","bkm":"Kom","bla":"Blackfoot","bm":"Bambara","bn":"Bengalisch","bo":"Tibetisch","bpy":"Bishnupriya","bqi":"Bachtiarisch","br":"Bretonisch","bra":"Braj-Bhakha","brh":"Brahui","brx":"Bodo","bs":"Bosnisch","bss":"Akoose","bua":"Burjatisch","bug":"Buginesisch","bum":"Bulu","byn":"Blin","byv":"Medumba","ca":"Katalanisch","cad":"Caddo","car":"Karibisch","cay":"Cayuga","cch":"Atsam","ccp":"Chakma","ce":"Tschetschenisch","ceb":"Cebuano","cgg":"Rukiga","ch":"Chamorro","chb":"Chibcha","chg":"Tschagataisch","chk":"Chuukesisch","chm":"Mari","chn":"Chinook","cho":"Choctaw","chp":"Chipewyan","chr":"Cherokee","chy":"Cheyenne","ckb":"Zentralkurdisch","co":"Korsisch","cop":"Koptisch","cps":"Capiznon","cr":"Cree","crh":"Krimtatarisch","crs":"Seychellenkreol","cs":"Tschechisch","csb":"Kaschubisch","cu":"Kirchenslawisch","cv":"Tschuwaschisch","cy":"Walisisch","da":"Dänisch","dak":"Dakota","dar":"Darginisch","dav":"Taita","de":"Deutsch","de-AT":"Österreichisches Deutsch","de-CH":"Schweizer Hochdeutsch","del":"Delaware","den":"Slave","dgr":"Dogrib","din":"Dinka","dje":"Zarma","doi":"Dogri","dsb":"Niedersorbisch","dtp":"Zentral-Dusun","dua":"Duala","dum":"Mittelniederländisch","dv":"Dhivehi","dyo":"Diola","dyu":"Dyula","dz":"Dzongkha","dzg":"Dazaga","ebu":"Embu","ee":"Ewe","efi":"Efik","egl":"Emilianisch","egy":"Ägyptisch","eka":"Ekajuk","el":"Griechisch","elx":"Elamisch","en":"Englisch","en-AU":"Englisch (Australien)","en-CA":"Englisch (Kanada)","en-GB":"Englisch (Vereinigtes Königreich)","en-US":"Englisch (Vereinigte Staaten)","enm":"Mittelenglisch","eo":"Esperanto","es":"Spanisch","es-419":"Spanisch (Lateinamerika)","es-ES":"Spanisch (Spanien)","es-MX":"Spanisch (Mexiko)","esu":"Zentral-Alaska-Yupik","et":"Estnisch","eu":"Baskisch","ewo":"Ewondo","ext":"Extremadurisch","fa":"Persisch","fan":"Pangwe","fat":"Fanti","ff":"Ful","fi":"Finnisch","fil":"Filipino","fit":"Meänkieli","fj":"Fidschi","fo":"Färöisch","fon":"Fon","fr":"Französisch","fr-CA":"Französisch (Kanada)","fr-CH":"Französisch (Schweiz)","frc":"Cajun","frm":"Mittelfranzösisch","fro":"Altfranzösisch","frp":"Frankoprovenzalisch","frr":"Nordfriesisch","frs":"Ostfriesisch","fur":"Friaulisch","fy":"Westfriesisch","ga":"Irisch","gaa":"Ga","gag":"Gagausisch","gan":"Gan","gay":"Gayo","gba":"Gbaya","gbz":"Gabri","gd":"Schottisches Gälisch","gez":"Geez","gil":"Kiribatisch","gl":"Galicisch","glk":"Gilaki","gmh":"Mittelhochdeutsch","gn":"Guaraní","goh":"Althochdeutsch","gom":"Goa-Konkani","gon":"Gondi","gor":"Mongondou","got":"Gotisch","grb":"Grebo","grc":"Altgriechisch","gsw":"Schweizerdeutsch","gu":"Gujarati","guc":"Wayúu","gur":"Farefare","guz":"Gusii","gv":"Manx","gwi":"Kutchin","ha":"Haussa","hai":"Haida","hak":"Hakka","haw":"Hawaiisch","he":"Hebräisch","hi":"Hindi","hif":"Fidschi-Hindi","hil":"Hiligaynon","hit":"Hethitisch","hmn":"Miao","ho":"Hiri-Motu","hr":"Kroatisch","hsb":"Obersorbisch","hsn":"Xiang","ht":"Haiti-Kreolisch","hu":"Ungarisch","hup":"Hupa","hy":"Armenisch","hz":"Herero","ia":"Interlingua","iba":"Iban","ibb":"Ibibio","id":"Indonesisch","ie":"Interlingue","ig":"Igbo","ii":"Yi","ik":"Inupiak","ilo":"Ilokano","inh":"Inguschisch","io":"Ido","is":"Isländisch","it":"Italienisch","iu":"Inuktitut","izh":"Ischorisch","ja":"Japanisch","jam":"Jamaikanisch-Kreolisch","jbo":"Lojban","jgo":"Ngomba","jmc":"Machame","jpr":"Jüdisch-Persisch","jrb":"Jüdisch-Arabisch","jut":"Jütisch","jv":"Javanisch","ka":"Georgisch","kaa":"Karakalpakisch","kab":"Kabylisch","kac":"Kachin","kaj":"Jju","kam":"Kamba","kaw":"Kawi","kbd":"Kabardinisch","kbl":"Kanembu","kcg":"Tyap","kde":"Makonde","kea":"Kabuverdianu","ken":"Kenyang","kfo":"Koro","kg":"Kongolesisch","kgp":"Kaingang","kha":"Khasi","kho":"Sakisch","khq":"Koyra Chiini","khw":"Khowar","ki":"Kikuyu","kiu":"Kirmanjki","kj":"Kwanyama","kk":"Kasachisch","kkj":"Kako","kl":"Grönländisch","kln":"Kalenjin","km":"Khmer","kmb":"Kimbundu","kn":"Kannada","ko":"Koreanisch","koi":"Komi-Permjakisch","kok":"Konkani","kos":"Kosraeanisch","kpe":"Kpelle","kr":"Kanuri","krc":"Karatschaiisch-Balkarisch","kri":"Krio","krj":"Kinaray-a","krl":"Karelisch","kru":"Oraon","ks":"Kaschmiri","ksb":"Shambala","ksf":"Bafia","ksh":"Kölsch","ku":"Kurdisch","kum":"Kumükisch","kut":"Kutenai","kv":"Komi","kw":"Kornisch","ky":"Kirgisisch","la":"Latein","lad":"Ladino","lag":"Langi","lah":"Lahnda","lam":"Lamba","lb":"Luxemburgisch","lez":"Lesgisch","lfn":"Lingua Franca Nova","lg":"Ganda","li":"Limburgisch","lij":"Ligurisch","liv":"Livisch","lkt":"Lakota","lmo":"Lombardisch","ln":"Lingala","lo":"Laotisch","lol":"Mongo","lou":"Kreol (Louisiana)","loz":"Lozi","lrc":"Nördliches Luri","lt":"Litauisch","ltg":"Lettgallisch","lu":"Luba-Katanga","lua":"Luba-Lulua","lui":"Luiseno","lun":"Lunda","luo":"Luo","lus":"Lushai","luy":"Luhya","lv":"Lettisch","lzh":"Klassisches Chinesisch","lzz":"Lasisch","mad":"Maduresisch","maf":"Mafa","mag":"Khotta","mai":"Maithili","mak":"Makassarisch","man":"Malinke","mas":"Massai","mde":"Maba","mdf":"Mokschanisch","mdr":"Mandaresisch","men":"Mende","mer":"Meru","mfe":"Morisyen","mg":"Madagassisch","mga":"Mittelirisch","mgh":"Makhuwa-Meetto","mgo":"Meta’","mh":"Marschallesisch","mi":"Maori","mic":"Micmac","min":"Minangkabau","mk":"Mazedonisch","ml":"Malayalam","mn":"Mongolisch","mnc":"Mandschurisch","mni":"Meithei","moh":"Mohawk","mos":"Mossi","mr":"Marathi","mrj":"Bergmari","ms":"Malaiisch","mt":"Maltesisch","mua":"Mundang","mul":"Mehrsprachig","mus":"Muskogee","mwl":"Mirandesisch","mwr":"Marwari","mwv":"Mentawai","my":"Birmanisch","mye":"Myene","myv":"Ersja-Mordwinisch","mzn":"Masanderanisch","na":"Nauruisch","nan":"Min Nan","nap":"Neapolitanisch","naq":"Nama","nb":"Norwegisch Bokmål","nd":"Nord-Ndebele","nds":"Niederdeutsch","nds-NL":"Niedersächsisch","ne":"Nepalesisch","new":"Newari","ng":"Ndonga","nia":"Nias","niu":"Niue","njo":"Ao-Naga","nl":"Niederländisch","nl-BE":"Flämisch","nmg":"Kwasio","nn":"Norwegisch Nynorsk","nnh":"Ngiemboon","no":"Norwegisch","nog":"Nogai","non":"Altnordisch","nov":"Novial","nqo":"N’Ko","nr":"Süd-Ndebele","nso":"Nord-Sotho","nus":"Nuer","nv":"Navajo","nwc":"Alt-Newari","ny":"Nyanja","nym":"Nyamwezi","nyn":"Nyankole","nyo":"Nyoro","nzi":"Nzima","oc":"Okzitanisch","oj":"Ojibwa","om":"Oromo","or":"Oriya","os":"Ossetisch","osa":"Osage","ota":"Osmanisch","pa":"Punjabi","pag":"Pangasinan","pal":"Mittelpersisch","pam":"Pampanggan","pap":"Papiamento","pau":"Palau","pcd":"Picardisch","pcm":"Nigerianisches Pidgin","pdc":"Pennsylvaniadeutsch","pdt":"Plautdietsch","peo":"Altpersisch","pfl":"Pfälzisch","phn":"Phönizisch","pi":"Pali","pl":"Polnisch","pms":"Piemontesisch","pnt":"Pontisch","pon":"Ponapeanisch","prg":"Altpreußisch","pro":"Altprovenzalisch","ps":"Paschtu","pt":"Portugiesisch","pt-BR":"Portugiesisch (Brasilien)","pt-PT":"Portugiesisch (Portugal)","qu":"Quechua","quc":"K’iche’","qug":"Chimborazo Hochland-Quechua","raj":"Rajasthani","rap":"Rapanui","rar":"Rarotonganisch","rgn":"Romagnol","rif":"Tarifit","rm":"Rätoromanisch","rn":"Rundi","ro":"Rumänisch","ro-MD":"Moldauisch","rof":"Rombo","rom":"Romani","root":"Root","rtm":"Rotumanisch","ru":"Russisch","rue":"Russinisch","rug":"Roviana","rup":"Aromunisch","rw":"Kinyarwanda","rwk":"Rwa","sa":"Sanskrit","sad":"Sandawe","sah":"Jakutisch","sam":"Samaritanisch","saq":"Samburu","sas":"Sasak","sat":"Santali","saz":"Saurashtra","sba":"Ngambay","sbp":"Sangu","sc":"Sardisch","scn":"Sizilianisch","sco":"Schottisch","sd":"Sindhi","sdc":"Sassarisch","sdh":"Südkurdisch","se":"Nordsamisch","see":"Seneca","seh":"Sena","sei":"Seri","sel":"Selkupisch","ses":"Koyra Senni","sg":"Sango","sga":"Altirisch","sgs":"Samogitisch","sh":"Serbo-Kroatisch","shi":"Taschelhit","shn":"Schan","shu":"Tschadisch-Arabisch","si":"Singhalesisch","sid":"Sidamo","sk":"Slowakisch","sl":"Slowenisch","sli":"Schlesisch (Niederschlesisch)","sly":"Selayar","sm":"Samoanisch","sma":"Südsamisch","smj":"Lule-Samisch","smn":"Inari-Samisch","sms":"Skolt-Samisch","sn":"Shona","snk":"Soninke","so":"Somali","sog":"Sogdisch","sq":"Albanisch","sr":"Serbisch","srn":"Srananisch","srr":"Serer","ss":"Swazi","ssy":"Saho","st":"Süd-Sotho","stq":"Saterfriesisch","su":"Sundanesisch","suk":"Sukuma","sus":"Susu","sux":"Sumerisch","sv":"Schwedisch","sw":"Suaheli","sw-CD":"Kongo-Swahili","swb":"Komorisch","syc":"Altsyrisch","syr":"Syrisch","szl":"Schlesisch (Wasserpolnisch)","ta":"Tamil","tcy":"Tulu","te":"Telugu","tem":"Temne","teo":"Teso","ter":"Tereno","tet":"Tetum","tg":"Tadschikisch","th":"Thailändisch","ti":"Tigrinya","tig":"Tigre","tiv":"Tiv","tk":"Turkmenisch","tkl":"Tokelauanisch","tkr":"Tsachurisch","tl":"Tagalog","tlh":"Klingonisch","tli":"Tlingit","tly":"Talisch","tmh":"Tamaseq","tn":"Tswana","to":"Tongaisch","tog":"Nyasa Tonga","tpi":"Neumelanesisch","tr":"Türkisch","tru":"Turoyo","trv":"Taroko","ts":"Tsonga","tsd":"Tsakonisch","tsi":"Tsimshian","tt":"Tatarisch","ttt":"Tatisch","tum":"Tumbuka","tvl":"Tuvaluisch","tw":"Twi","twq":"Tasawaq","ty":"Tahitisch","tyv":"Tuwinisch","tzm":"Zentralatlas-Tamazight","udm":"Udmurtisch","ug":"Uigurisch","uga":"Ugaritisch","uk":"Ukrainisch","umb":"Umbundu","und":"Unbekannte Sprache","ur":"Urdu","uz":"Usbekisch","vai":"Vai","ve":"Venda","vec":"Venetisch","vep":"Wepsisch","vi":"Vietnamesisch","vls":"Westflämisch","vmf":"Mainfränkisch","vo":"Volapük","vot":"Wotisch","vro":"Võro","vun":"Vunjo","wa":"Wallonisch","wae":"Walliserdeutsch","wal":"Walamo","war":"Waray","was":"Washo","wbp":"Warlpiri","wo":"Wolof","wuu":"Wu","xal":"Kalmückisch","xh":"Xhosa","xmf":"Mingrelisch","xog":"Soga","yao":"Yao","yap":"Yapesisch","yav":"Yangben","ybb":"Yemba","yi":"Jiddisch","yo":"Yoruba","yrl":"Nheengatu","yue":"Kantonesisch","za":"Zhuang","zap":"Zapotekisch","zbl":"Bliss-Symbole","zea":"Seeländisch","zen":"Zenaga","zgh":"Tamazight","zh":"Chinesisch","zh-Hans":"Chinesisch (vereinfacht)","zh-Hant":"Chinesisch (traditionell)","zu":"Zulu","zun":"Zuni","zxx":"Keine Sprachinhalte","zza":"Zaza"},"short":{"az":"Aserbaidschanisch","en-GB":"Englisch (GB)","en-US":"Englisch (USA)"},"narrow":{}},"region":{"long":{"142":"Asien","143":"Zentralasien","145":"Westasien","150":"Europa","151":"Osteuropa","154":"Nordeuropa","155":"Westeuropa","202":"Subsahara-Afrika","419":"Lateinamerika","001":"Welt","002":"Afrika","003":"Nordamerika","005":"Südamerika","009":"Ozeanien","011":"Westafrika","013":"Mittelamerika","014":"Ostafrika","015":"Nordafrika","017":"Zentralafrika","018":"Südliches Afrika","019":"Amerika","021":"Nördliches Amerika","029":"Karibik","030":"Ostasien","034":"Südasien","035":"Südostasien","039":"Südeuropa","053":"Australasien","054":"Melanesien","057":"Mikronesisches Inselgebiet","061":"Polynesien","AC":"Ascension","AD":"Andorra","AE":"Vereinigte Arabische Emirate","AF":"Afghanistan","AG":"Antigua und Barbuda","AI":"Anguilla","AL":"Albanien","AM":"Armenien","AO":"Angola","AQ":"Antarktis","AR":"Argentinien","AS":"Amerikanisch-Samoa","AT":"Österreich","AU":"Australien","AW":"Aruba","AX":"Ålandinseln","AZ":"Aserbaidschan","BA":"Bosnien und Herzegowina","BB":"Barbados","BD":"Bangladesch","BE":"Belgien","BF":"Burkina Faso","BG":"Bulgarien","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"St. Barthélemy","BM":"Bermuda","BN":"Brunei Darussalam","BO":"Bolivien","BQ":"Bonaire, Sint Eustatius und Saba","BR":"Brasilien","BS":"Bahamas","BT":"Bhutan","BV":"Bouvetinsel","BW":"Botsuana","BY":"Belarus","BZ":"Belize","CA":"Kanada","CC":"Kokosinseln","CD":"Kongo-Kinshasa","CF":"Zentralafrikanische Republik","CG":"Kongo-Brazzaville","CH":"Schweiz","CI":"Côte d’Ivoire","CK":"Cookinseln","CL":"Chile","CM":"Kamerun","CN":"China","CO":"Kolumbien","CP":"Clipperton-Insel","CR":"Costa Rica","CU":"Kuba","CV":"Cabo Verde","CW":"Curaçao","CX":"Weihnachtsinsel","CY":"Zypern","CZ":"Tschechien","DE":"Deutschland","DG":"Diego Garcia","DJ":"Dschibuti","DK":"Dänemark","DM":"Dominica","DO":"Dominikanische Republik","DZ":"Algerien","EA":"Ceuta und Melilla","EC":"Ecuador","EE":"Estland","EG":"Ägypten","EH":"Westsahara","ER":"Eritrea","ES":"Spanien","ET":"Äthiopien","EU":"Europäische Union","EZ":"Eurozone","FI":"Finnland","FJ":"Fidschi","FK":"Falklandinseln","FM":"Mikronesien","FO":"Färöer","FR":"Frankreich","GA":"Gabun","GB":"Vereinigtes Königreich","GD":"Grenada","GE":"Georgien","GF":"Französisch-Guayana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Grönland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Äquatorialguinea","GR":"Griechenland","GS":"Südgeorgien und die Südlichen Sandwichinseln","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Sonderverwaltungsregion Hongkong","HM":"Heard und McDonaldinseln","HN":"Honduras","HR":"Kroatien","HT":"Haiti","HU":"Ungarn","IC":"Kanarische Inseln","ID":"Indonesien","IE":"Irland","IL":"Israel","IM":"Isle of Man","IN":"Indien","IO":"Britisches Territorium im Indischen Ozean","IQ":"Irak","IR":"Iran","IS":"Island","IT":"Italien","JE":"Jersey","JM":"Jamaika","JO":"Jordanien","JP":"Japan","KE":"Kenia","KG":"Kirgisistan","KH":"Kambodscha","KI":"Kiribati","KM":"Komoren","KN":"St. Kitts und Nevis","KP":"Nordkorea","KR":"Südkorea","KW":"Kuwait","KY":"Kaimaninseln","KZ":"Kasachstan","LA":"Laos","LB":"Libanon","LC":"St. Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Litauen","LU":"Luxemburg","LV":"Lettland","LY":"Libyen","MA":"Marokko","MC":"Monaco","MD":"Republik Moldau","ME":"Montenegro","MF":"St. Martin","MG":"Madagaskar","MH":"Marshallinseln","MK":"Nordmazedonien","ML":"Mali","MM":"Myanmar","MN":"Mongolei","MO":"Sonderverwaltungsregion Macau","MP":"Nördliche Marianen","MQ":"Martinique","MR":"Mauretanien","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Malediven","MW":"Malawi","MX":"Mexiko","MY":"Malaysia","MZ":"Mosambik","NA":"Namibia","NC":"Neukaledonien","NE":"Niger","NF":"Norfolkinsel","NG":"Nigeria","NI":"Nicaragua","NL":"Niederlande","NO":"Norwegen","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"Neuseeland","OM":"Oman","PA":"Panama","PE":"Peru","PF":"Französisch-Polynesien","PG":"Papua-Neuguinea","PH":"Philippinen","PK":"Pakistan","PL":"Polen","PM":"St. Pierre und Miquelon","PN":"Pitcairninseln","PR":"Puerto Rico","PS":"Palästinensische Autonomiegebiete","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Katar","QO":"Äußeres Ozeanien","RE":"Réunion","RO":"Rumänien","RS":"Serbien","RU":"Russland","RW":"Ruanda","SA":"Saudi-Arabien","SB":"Salomonen","SC":"Seychellen","SD":"Sudan","SE":"Schweden","SG":"Singapur","SH":"St. Helena","SI":"Slowenien","SJ":"Spitzbergen und Jan Mayen","SK":"Slowakei","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"Südsudan","ST":"São Tomé und Príncipe","SV":"El Salvador","SX":"Sint Maarten","SY":"Syrien","SZ":"Eswatini","TA":"Tristan da Cunha","TC":"Turks- und Caicosinseln","TD":"Tschad","TF":"Französische Süd- und Antarktisgebiete","TG":"Togo","TH":"Thailand","TJ":"Tadschikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunesien","TO":"Tonga","TR":"Türkei","TT":"Trinidad und Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tansania","UA":"Ukraine","UG":"Uganda","UM":"Amerikanische Überseeinseln","UN":"Vereinte Nationen","US":"Vereinigte Staaten","UY":"Uruguay","UZ":"Usbekistan","VA":"Vatikanstadt","VC":"St. Vincent und die Grenadinen","VE":"Venezuela","VG":"Britische Jungferninseln","VI":"Amerikanische Jungferninseln","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis und Futuna","WS":"Samoa","XA":"Pseudo-Akzente","XB":"Pseudo-Bidi","XK":"Kosovo","YE":"Jemen","YT":"Mayotte","ZA":"Südafrika","ZM":"Sambia","ZW":"Simbabwe","ZZ":"Unbekannte Region"},"short":{"GB":"GB","HK":"Hongkong","MO":"Macau","PS":"Palästina","UN":"UN","US":"USA"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Afak":"Afaka","Aghb":"Kaukasisch-Albanisch","Ahom":"Ahom","Arab":"Arabisch","Armi":"Armi","Armn":"Armenisch","Avst":"Avestisch","Bali":"Balinesisch","Bamu":"Bamun","Bass":"Bassa","Batk":"Battakisch","Beng":"Bengalisch","Bhks":"Bhks","Blis":"Bliss-Symbole","Bopo":"Bopomofo","Brah":"Brahmi","Brai":"Braille","Bugi":"Buginesisch","Buhd":"Buhid","Cakm":"Chakma","Cans":"UCAS","Cari":"Karisch","Cham":"Cham","Cher":"Cherokee","Cirt":"Cirth","Copt":"Koptisch","Cprt":"Zypriotisch","Cyrl":"Kyrillisch","Cyrs":"Altkirchenslawisch","Deva":"Devanagari","Dogr":"Dogr","Dsrt":"Deseret","Dupl":"Duployanisch","Egyd":"Ägyptisch - Demotisch","Egyh":"Ägyptisch - Hieratisch","Egyp":"Ägyptische Hieroglyphen","Elba":"Elbasanisch","Elym":"Elym","Ethi":"Äthiopisch","Geok":"Khutsuri","Geor":"Georgisch","Glag":"Glagolitisch","Gong":"Gong","Gonm":"Gonm","Goth":"Gotisch","Gran":"Grantha","Grek":"Griechisch","Gujr":"Gujarati","Guru":"Gurmukhi","Hanb":"Hanb","Hang":"Hangul","Hani":"Chinesisch","Hano":"Hanunoo","Hans":"Vereinfacht","Hant":"Traditionell","Hatr":"Hatr","Hebr":"Hebräisch","Hira":"Hiragana","Hluw":"Hieroglyphen-Luwisch","Hmng":"Pahawh Hmong","Hmnp":"Hmnp","Hrkt":"Japanische Silbenschrift","Hung":"Altungarisch","Inds":"Indus-Schrift","Ital":"Altitalisch","Jamo":"Jamo","Java":"Javanesisch","Jpan":"Japanisch","Jurc":"Jurchen","Kali":"Kayah Li","Kana":"Katakana","Khar":"Kharoshthi","Khmr":"Khmer","Khoj":"Khojki","Knda":"Kannada","Kore":"Koreanisch","Kpel":"Kpelle","Kthi":"Kaithi","Lana":"Lanna","Laoo":"Laotisch","Latf":"Lateinisch - Fraktur-Variante","Latg":"Lateinisch - Gälische Variante","Latn":"Lateinisch","Lepc":"Lepcha","Limb":"Limbu","Lina":"Linear A","Linb":"Linear B","Lisu":"Fraser","Loma":"Loma","Lyci":"Lykisch","Lydi":"Lydisch","Mahj":"Mahajani","Maka":"Maka","Mand":"Mandäisch","Mani":"Manichäisch","Marc":"Marc","Maya":"Maya-Hieroglyphen","Medf":"Medf","Mend":"Mende","Merc":"Meroitisch kursiv","Mero":"Meroitisch","Mlym":"Malayalam","Modi":"Modi","Mong":"Mongolisch","Moon":"Moon","Mroo":"Mro","Mtei":"Meitei Mayek","Mult":"Mult","Mymr":"Birmanisch","Nand":"Nand","Narb":"Altnordarabisch","Nbat":"Nabatäisch","Newa":"Newa","Nkgb":"Geba","Nkoo":"N’Ko","Nshu":"Frauenschrift","Ogam":"Ogham","Olck":"Ol Chiki","Orkh":"Orchon-Runen","Orya":"Oriya","Osge":"Osge","Osma":"Osmanisch","Palm":"Palmyrenisch","Pauc":"Pau Cin Hau","Perm":"Altpermisch","Phag":"Phags-pa","Phli":"Buch-Pahlavi","Phlp":"Psalter-Pahlavi","Phlv":"Pahlavi","Phnx":"Phönizisch","Plrd":"Pollard Phonetisch","Prti":"Parthisch","Qaag":"Qaag","Rjng":"Rejang","Rohg":"Rohg","Roro":"Rongorongo","Runr":"Runenschrift","Samr":"Samaritanisch","Sara":"Sarati","Sarb":"Altsüdarabisch","Saur":"Saurashtra","Sgnw":"Gebärdensprache","Shaw":"Shaw-Alphabet","Shrd":"Sharada","Sidd":"Siddham","Sind":"Khudawadi","Sinh":"Singhalesisch","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora Sompeng","Soyo":"Soyo","Sund":"Sundanesisch","Sylo":"Syloti Nagri","Syrc":"Syrisch","Syre":"Syrisch - Estrangelo-Variante","Syrj":"Westsyrisch","Syrn":"Ostsyrisch","Tagb":"Tagbanwa","Takr":"Takri","Tale":"Tai Le","Talu":"Tai Lue","Taml":"Tamilisch","Tang":"Xixia","Tavt":"Tai-Viet","Telu":"Telugu","Teng":"Tengwar","Tfng":"Tifinagh","Tglg":"Tagalog","Thaa":"Thaana","Thai":"Thai","Tibt":"Tibetisch","Tirh":"Tirhuta","Ugar":"Ugaritisch","Vaii":"Vai","Visp":"Sichtbare Sprache","Wara":"Varang Kshiti","Wcho":"Wcho","Wole":"Woleaianisch","Xpeo":"Altpersisch","Xsux":"Sumerisch-akkadische Keilschrift","Yiii":"Yi","Zanb":"Zanb","Zinh":"Geerbter Schriftwert","Zmth":"Mathematische Notation","Zsye":"Emoji","Zsym":"Symbole","Zxxx":"Schriftlos","Zyyy":"Verbreitet","Zzzz":"Unbekannte Schrift"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"Andorranische Pesete","AED":"VAE-Dirham","AFA":"Afghanische Afghani (1927–2002)","AFN":"Afghanischer Afghani","ALK":"Albanischer Lek (1946–1965)","ALL":"Albanischer Lek","AMD":"Armenischer Dram","ANG":"Niederländische-Antillen-Gulden","AOA":"Angolanischer Kwanza","AOK":"Angolanischer Kwanza (1977–1990)","AON":"Angolanischer Neuer Kwanza (1990–2000)","AOR":"Angolanischer Kwanza Reajustado (1995–1999)","ARA":"Argentinischer Austral","ARL":"Argentinischer Peso Ley (1970–1983)","ARM":"Argentinischer Peso (1881–1970)","ARP":"Argentinischer Peso (1983–1985)","ARS":"Argentinischer Peso","ATS":"Österreichischer Schilling","AUD":"Australischer Dollar","AWG":"Aruba-Florin","AZM":"Aserbaidschan-Manat (1993–2006)","AZN":"Aserbaidschan-Manat","BAD":"Bosnien und Herzegowina Dinar (1992–1994)","BAM":"Bosnien und Herzegowina Konvertierbare Mark","BAN":"Bosnien und Herzegowina Neuer Dinar (1994–1997)","BBD":"Barbados-Dollar","BDT":"Bangladesch-Taka","BEC":"Belgischer Franc (konvertibel)","BEF":"Belgischer Franc","BEL":"Belgischer Finanz-Franc","BGL":"Bulgarische Lew (1962–1999)","BGM":"Bulgarischer Lew (1952–1962)","BGN":"Bulgarischer Lew","BGO":"Bulgarischer Lew (1879–1952)","BHD":"Bahrain-Dinar","BIF":"Burundi-Franc","BMD":"Bermuda-Dollar","BND":"Brunei-Dollar","BOB":"Bolivianischer Boliviano","BOL":"Bolivianischer Boliviano (1863–1963)","BOP":"Bolivianischer Peso","BOV":"Boliviansiche Mvdol","BRB":"Brasilianischer Cruzeiro Novo (1967–1986)","BRC":"Brasilianischer Cruzado (1986–1989)","BRE":"Brasilianischer Cruzeiro (1990–1993)","BRL":"Brasilianischer Real","BRN":"Brasilianischer Cruzado Novo (1989–1990)","BRR":"Brasilianischer Cruzeiro (1993–1994)","BRZ":"Brasilianischer Cruzeiro (1942–1967)","BSD":"Bahamas-Dollar","BTN":"Bhutan-Ngultrum","BUK":"Birmanischer Kyat","BWP":"Botswanischer Pula","BYB":"Belarus-Rubel (1994–1999)","BYN":"Weißrussischer Rubel","BYR":"Weißrussischer Rubel (2000–2016)","BZD":"Belize-Dollar","CAD":"Kanadischer Dollar","CDF":"Kongo-Franc","CHE":"WIR-Euro","CHF":"Schweizer Franken","CHW":"WIR Franken","CLE":"Chilenischer Escudo","CLF":"Chilenische Unidades de Fomento","CLP":"Chilenischer Peso","CNH":"Renminbi Yuan (Off–Shore)","CNX":"Dollar der Chinesischen Volksbank","CNY":"Renminbi Yuan","COP":"Kolumbianischer Peso","COU":"Kolumbianische Unidades de valor real","CRC":"Costa-Rica-Colón","CSD":"Serbischer Dinar (2002–2006)","CSK":"Tschechoslowakische Krone","CUC":"Kubanischer Peso (konvertibel)","CUP":"Kubanischer Peso","CVE":"Cabo-Verde-Escudo","CYP":"Zypern-Pfund","CZK":"Tschechische Krone","DDM":"Mark der DDR","DEM":"Deutsche Mark","DJF":"Dschibuti-Franc","DKK":"Dänische Krone","DOP":"Dominikanischer Peso","DZD":"Algerischer Dinar","ECS":"Ecuadorianischer Sucre","ECV":"Verrechnungseinheit für Ecuador","EEK":"Estnische Krone","EGP":"Ägyptisches Pfund","ERN":"Eritreischer Nakfa","ESA":"Spanische Peseta (A–Konten)","ESB":"Spanische Peseta (konvertibel)","ESP":"Spanische Peseta","ETB":"Äthiopischer Birr","EUR":"Euro","FIM":"Finnische Mark","FJD":"Fidschi-Dollar","FKP":"Falkland-Pfund","FRF":"Französischer Franc","GBP":"Britisches Pfund","GEK":"Georgischer Kupon Larit","GEL":"Georgischer Lari","GHC":"Ghanaischer Cedi (1979–2007)","GHS":"Ghanaischer Cedi","GIP":"Gibraltar-Pfund","GMD":"Gambia-Dalasi","GNF":"Guinea-Franc","GNS":"Guineischer Syli","GQE":"Äquatorialguinea-Ekwele","GRD":"Griechische Drachme","GTQ":"Guatemaltekischer Quetzal","GWE":"Portugiesisch Guinea Escudo","GWP":"Guinea-Bissau Peso","GYD":"Guyana-Dollar","HKD":"Hongkong-Dollar","HNL":"Honduras-Lempira","HRD":"Kroatischer Dinar","HRK":"Kroatischer Kuna","HTG":"Haitianische Gourde","HUF":"Ungarischer Forint","IDR":"Indonesische Rupiah","IEP":"Irisches Pfund","ILP":"Israelisches Pfund","ILR":"Israelischer Schekel (1980–1985)","ILS":"Israelischer Neuer Schekel","INR":"Indische Rupie","IQD":"Irakischer Dinar","IRR":"Iranischer Rial","ISJ":"Isländische Krone (1918–1981)","ISK":"Isländische Krone","ITL":"Italienische Lira","JMD":"Jamaika-Dollar","JOD":"Jordanischer Dinar","JPY":"Japanischer Yen","KES":"Kenia-Schilling","KGS":"Kirgisischer Som","KHR":"Kambodschanischer Riel","KMF":"Komoren-Franc","KPW":"Nordkoreanischer Won","KRH":"Südkoreanischer Hwan (1953–1962)","KRO":"Südkoreanischer Won (1945–1953)","KRW":"Südkoreanischer Won","KWD":"Kuwait-Dinar","KYD":"Kaiman-Dollar","KZT":"Kasachischer Tenge","LAK":"Laotischer Kip","LBP":"Libanesisches Pfund","LKR":"Sri-Lanka-Rupie","LRD":"Liberianischer Dollar","LSL":"Loti","LTL":"Litauischer Litas","LTT":"Litauischer Talonas","LUC":"Luxemburgischer Franc (konvertibel)","LUF":"Luxemburgischer Franc","LUL":"Luxemburgischer Finanz-Franc","LVL":"Lettischer Lats","LVR":"Lettischer Rubel","LYD":"Libyscher Dinar","MAD":"Marokkanischer Dirham","MAF":"Marokkanischer Franc","MCF":"Monegassischer Franc","MDC":"Moldau-Cupon","MDL":"Moldau-Leu","MGA":"Madagaskar-Ariary","MGF":"Madagaskar-Franc","MKD":"Mazedonischer Denar","MKN":"Mazedonischer Denar (1992–1993)","MLF":"Malischer Franc","MMK":"Myanmarischer Kyat","MNT":"Mongolischer Tögrög","MOP":"Macao-Pataca","MRO":"Mauretanischer Ouguiya (1973–2017)","MRU":"Mauretanischer Ouguiya","MTL":"Maltesische Lira","MTP":"Maltesisches Pfund","MUR":"Mauritius-Rupie","MVP":"Malediven-Rupie (alt)","MVR":"Malediven-Rufiyaa","MWK":"Malawi-Kwacha","MXN":"Mexikanischer Peso","MXP":"Mexikanischer Silber-Peso (1861–1992)","MXV":"Mexicanischer Unidad de Inversion (UDI)","MYR":"Malaysischer Ringgit","MZE":"Mosambikanischer Escudo","MZM":"Mosambikanischer Metical (1980–2006)","MZN":"Mosambikanischer Metical","NAD":"Namibia-Dollar","NGN":"Nigerianischer Naira","NIC":"Nicaraguanischer Córdoba (1988–1991)","NIO":"Nicaragua-Córdoba","NLG":"Niederländischer Gulden","NOK":"Norwegische Krone","NPR":"Nepalesische Rupie","NZD":"Neuseeland-Dollar","OMR":"Omanischer Rial","PAB":"Panamaischer Balboa","PEI":"Peruanischer Inti","PEN":"Peruanischer Sol","PES":"Peruanischer Sol (1863–1965)","PGK":"Papua-Neuguineischer Kina","PHP":"Philippinischer Peso","PKR":"Pakistanische Rupie","PLN":"Polnischer Złoty","PLZ":"Polnischer Zloty (1950–1995)","PTE":"Portugiesischer Escudo","PYG":"Paraguayischer Guaraní","QAR":"Katar-Riyal","RHD":"Rhodesischer Dollar","ROL":"Rumänischer Leu (1952–2006)","RON":"Rumänischer Leu","RSD":"Serbischer Dinar","RUB":"Russischer Rubel","RUR":"Russischer Rubel (1991–1998)","RWF":"Ruanda-Franc","SAR":"Saudi-Rial","SBD":"Salomonen-Dollar","SCR":"Seychellen-Rupie","SDD":"Sudanesischer Dinar (1992–2007)","SDG":"Sudanesisches Pfund","SDP":"Sudanesisches Pfund (1957–1998)","SEK":"Schwedische Krone","SGD":"Singapur-Dollar","SHP":"St. Helena-Pfund","SIT":"Slowenischer Tolar","SKK":"Slowakische Krone","SLL":"Sierra-leonischer Leone","SOS":"Somalia-Schilling","SRD":"Suriname-Dollar","SRG":"Suriname Gulden","SSP":"Südsudanesisches Pfund","STD":"São-toméischer Dobra (1977–2017)","STN":"São-toméischer Dobra","SUR":"Sowjetischer Rubel","SVC":"El Salvador Colon","SYP":"Syrisches Pfund","SZL":"Swasiländischer Lilangeni","THB":"Thailändischer Baht","TJR":"Tadschikistan Rubel","TJS":"Tadschikistan-Somoni","TMM":"Turkmenistan-Manat (1993–2009)","TMT":"Turkmenistan-Manat","TND":"Tunesischer Dinar","TOP":"Tongaischer Paʻanga","TPE":"Timor-Escudo","TRL":"Türkische Lira (1922–2005)","TRY":"Türkische Lira","TTD":"Trinidad und Tobago-Dollar","TWD":"Neuer Taiwan-Dollar","TZS":"Tansania-Schilling","UAH":"Ukrainische Hrywnja","UAK":"Ukrainischer Karbovanetz","UGS":"Uganda-Schilling (1966–1987)","UGX":"Uganda-Schilling","USD":"US-Dollar","USN":"US Dollar (Nächster Tag)","USS":"US Dollar (Gleicher Tag)","UYI":"Uruguayischer Peso (Indexierte Rechnungseinheiten)","UYP":"Uruguayischer Peso (1975–1993)","UYU":"Uruguayischer Peso","UYW":"UYW","UZS":"Usbekistan-Sum","VEB":"Venezolanischer Bolívar (1871–2008)","VEF":"Venezolanischer Bolívar (2008–2018)","VES":"Venezolanischer Bolívar","VND":"Vietnamesischer Dong","VNN":"Vietnamesischer Dong(1978–1985)","VUV":"Vanuatu-Vatu","WST":"Samoanischer Tala","XAF":"CFA-Franc (BEAC)","XAG":"Unze Silber","XAU":"Unze Gold","XBA":"Europäische Rechnungseinheit","XBB":"Europäische Währungseinheit (XBB)","XBC":"Europäische Rechnungseinheit (XBC)","XBD":"Europäische Rechnungseinheit (XBD)","XCD":"Ostkaribischer Dollar","XDR":"Sonderziehungsrechte","XEU":"Europäische Währungseinheit (XEU)","XFO":"Französischer Gold-Franc","XFU":"Französischer UIC-Franc","XOF":"CFA-Franc (BCEAO)","XPD":"Unze Palladium","XPF":"CFP-Franc","XPT":"Unze Platin","XRE":"RINET Funds","XSU":"SUCRE","XTS":"Testwährung","XUA":"Rechnungseinheit der AfEB","XXX":"Unbekannte Währung","YDD":"Jemen-Dinar","YER":"Jemen-Rial","YUD":"Jugoslawischer Dinar (1966–1990)","YUM":"Jugoslawischer Neuer Dinar (1994–2002)","YUN":"Jugoslawischer Dinar (konvertibel)","YUR":"Jugoslawischer reformierter Dinar (1992–1993)","ZAL":"Südafrikanischer Rand (Finanz)","ZAR":"Südafrikanischer Rand","ZMK":"Kwacha (1968–2012)","ZMW":"Kwacha","ZRN":"Zaire-Neuer Zaïre (1993–1998)","ZRZ":"Zaire-Zaïre (1971–1993)","ZWD":"Simbabwe-Dollar (1980–2008)","ZWL":"Simbabwe-Dollar (2009)","ZWR":"Simbabwe-Dollar (2008)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["de"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
