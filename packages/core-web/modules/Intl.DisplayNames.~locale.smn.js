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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("smn").length
)) {
// Intl.DisplayNames.~locale.smn
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"afar","ab":"abhasiakielâ","ace":"atšehkielâ","ada":"adangme","ady":"adyge","af":"afrikaans","agq":"aghem","ain":"ainukielâ","ak":"akankielâ","ale":"aleutkielâ","alt":"maadâaltaikielâ","am":"amharakielâ","an":"aragoniakielâ","anp":"angika","ar":"arabiakielâ","ar-001":"standard arabiakielâ","arn":"mapudungun","arp":"arapahokielâ","as":"assamkielâ","asa":"asukielâ","ast":"asturiakielâ","av":"avarkielâ","awa":"awadhikielâ","ay":"aymarakielâ","az":"azerbaidžankielâ","ba":"baškirkielâ","ban":"balikielâ","bas":"basaakielâ","be":"vielgisruošâkielâ","bem":"bembakielâ","bez":"benakielâ","bg":"bulgariakielâ","bho":"bhožpurikielâ","bi":"bislama","bin":"binikielâ","bla":"siksikakielâ","bm":"bambarakielâ","bn":"banglakielâ","bo":"tiibetkielâ","br":"bretonkielâ","brx":"bodokielâ","bs":"bosniakielâ","bug":"bugikielâ","byn":"blinkielâ","ca":"katalankielâ","ccp":"ccp","ce":"tšetšenkielâ","ceb":"cebuanokielâ","cgg":"kigakielâ","ch":"chamorrokielâ","chk":"chuukkielâ","chm":"marikielâ","cho":"choctawkielâ","chr":"cherokeekielâ","chy":"cheyennekielâ","ckb":"sorani kurdikielâ","co":"korsikakielâ","crs":"Seychellij kreoliranska","cs":"tšeekikielâ","cu":"kirkkoslaavi","cv":"tšuvaskielâ","cy":"kymrikielâ","da":"tanskakielâ","dak":"dakotakielâ","dar":"dargikielâ","dav":"taitakielâ","de":"saksakielâ","de-AT":"Nuorttâriijkâ saksakielâ","de-CH":"Sveitsi pajesaksakielâ","dgr":"dogribkielâ","dje":"zarmakielâ","doi":"doi","dsb":"vyelisorbi","dua":"dualakielâ","dv":"divehikielâ","dyo":"jola-fonyi","dz":"Dzongkha","dzg":"dazakielâ","ebu":"embukielâ","ee":"ewekielâ","efi":"efikkielâ","eka":"ekajuk","el":"kreikakielâ","en":"eŋgâlâskielâ","en-AU":"Australia eŋgâlâskielâ","en-CA":"Kanada eŋgâlâskielâ","en-GB":"Britannia eŋgâlâskielâ","en-US":"Amerika eŋgâlâskielâ","eo":"esperantokielâ","es":"espanjakielâ","es-419":"Läättin-Amerika espanjakielâ","es-ES":"Espanja espanjakielâ","es-MX":"Meksiko espanjakielâ","et":"eestikielâ","eu":"baskikielâ","ewo":"ewondokielâ","fa":"persiakielâ","fa-AF":"persiakielâ (Afganistan)","ff":"fulakielâ","fi":"suomâkielâ","fil":"filipinokielâ","fj":"fidžikielâ","fo":"fäärikielâ","fon":"fonkielâ","fr":"ranskakielâ","fr-CA":"Kanada ranskakielâ","fr-CH":"Sveitsi ranskakielâ","frc":"frc","fur":"friulikielâ","fy":"viestârfriisi","ga":"iirikielâ","gaa":"gakielâ","gd":"skottilâš gaelikielâ","gez":"ge’ez","gil":"kiribatikielâ","gl":"galiciakielâ","gn":"guaranikielâ","gor":"gorontalokielâ","grc":"toovláš kreikakielâ","gsw":"Sveitsi saksakielâ","gu":"gudžaratikielâ","guz":"gusiikielâ","gv":"manks","gwi":"gwich’inkielâ","ha":"hausakielâ","haw":"hawaijikielâ","he":"hepreakielâ","hi":"hindikielâ","hil":"hiligainokielâ","hmn":"hmongkielâ","hr":"kroatiakielâ","hsb":"pajesorbi","ht":"Haiti kreoli","hu":"uŋgarkielâ","hup":"hupakielâ","hy":"armeniakielâ","hz":"hererokielâ","ia":"interlingua","iba":"ibankielâ","ibb":"ibibiokielâ","id":"indonesiakielâ","ig":"igbokielâ","ii":"ii","ilo":"ilocano","inh":"inguškielâ","io":"ido","is":"islandkielâ","it":"italiakielâ","iu":"inuktitut","ja":"jaapaankielâ","jbo":"lojban","jgo":"ngomba","jmc":"machame","jv":"jaavakielâ","ka":"georgiakielâ","kab":"kabylkielâ","kac":"kachin","kaj":"jju","kam":"kambakielâ","kbd":"kabardikielâ","kcg":"tyap","kde":"makonde","kea":"Kap Verde kreoli","kfo":"koro","kgp":"kgp","kha":"khasi","khq":"koyra chiini","ki":"kikujukielâ","kj":"kuanjama","kk":"kazakkielâ","kkj":"kako","kl":"kalaallisut","kln":"kalenjikielâ","km":"khmerkielâ","kmb":"kimbundu","kn":"kannada","ko":"koreakielâ","kok":"konkani","kpe":"kpellekielâ","kr":"kanurikielâ","krc":"karachai-balkarkielâ","krl":"kärjilkielâ","kru":"kurukhkielâ","ks":"kashmirkielâ","ksb":"shambala","ksf":"bafia","ksh":"kölnkielâ","ku":"kurdikielâ","kum":"kumykkielâ","kv":"komikielâ","kw":"kornikielâ","ky":"kirgiskielâ","la":"läättinkielâ","lad":"ladinokielâ","lag":"langokielâ","lb":"luxemburgkielâ","lez":"lezgikielâ","lg":"luganda","li":"limburgkielâ","lij":"lij","lkt":"lakotakielâ","ln":"lingala","lo":"laokielâ","lou":"lou","loz":"lozi","lrc":"taveluri","lt":"liettuakielâ","lu":"katangaluba","lua":"lulualuba","lun":"lunda","luo":"luo","lus":"lusai","luy":"luhya","lv":"latviakielâ","mad":"madurakielâ","mag":"magahi","mai":"maithili","mak":"makasar","mas":"masaikielâ","mdf":"mokšakielâ","men":"mendekielâ","mer":"merukielâ","mfe":"morisyen","mg":"malagaskielâ","mgh":"makua-meetto","mgo":"meta’","mh":"marshallkielâ","mi":"maorikielâ","mic":"micmac","min":"minangkabau","mk":"makedoniakielâ","ml":"malajam","mn":"mongoliakielâ","mni":"manipuri","moh":"mohawkkielâ","mos":"moore","mr":"marathikielâ","mrj":"viestârmari","ms":"malaiji","mt":"maltakielâ","mua":"mundang","mul":"maŋgâ kielâ","mus":"muskogeekielâ","mwl":"mirandeskielâ","my":"burmakielâ","myv":"ersäkielâ","mzn":"mazandarani","na":"naurukielâ","nap":"napolikielâ","naq":"nama","nb":"tárukielâ bokmål","nd":"tave-nbedele","nds":"nds","nds-NL":"Vuáládâhenâmij saksakielâ","ne":"nepalkielâ","new":"newari","ng":"ndonga","nia":"niaskielâ","niu":"niuekielâ","nl":"hollandkielâ","nl-BE":"hollandkielâ (flaami)","nmg":"kwasio","nn":"tárukielâ nynorsk","nnh":"ngiemboon","no":"tárukielâ","nog":"nogaikielâ","non":"toovláš tárukielâ","nqo":"n’ko","nr":"maadâ-nbedele","nso":"tavesotho","nus":"nuer","nv":"navajokielâ","ny":"njanža","nyn":"nyankolekielâ","oc":"oksitan","om":"oromokielâ","or":"orija","os":"ossetkielâ","pa":"pandžabi","pag":"pangasinankielâ","pam":"pampangakielâ","pap":"papiamentu","pau":"palaukielâ","pcm":"Nigeria pidgin","pl":"puolakielâ","prg":"toovláš preussikielâ","ps":"paštu","pt":"portugalkielâ","pt-BR":"Brasilia portugalkielâ","pt-PT":"Portugal portugalkielâ","qu":"quechua","quc":"ki’che’","rap":"rapanui","rar":"rarotonga","rm":"retoroomaankielâ","rn":"rundi","ro":"romaniakielâ","ro-MD":"romaniakielâ (Moldova)","rof":"rombo","rom":"roomaankielâ","root":"ruotâs","ru":"ruošâkielâ","rup":"aromaniakielâ","rw":"ruandakielâ","rwk":"rwa","sa":"sanskrit","sad":"sandawe","sah":"jakutkielâ","saq":"samburukielâ","sat":"santalikielâ","sba":"ngambay","sbp":"sangu","sc":"sardiniakielâ","scn":"sisiliakielâ","sco":"skootikielâ","sd":"sindhi","se":"tavekielâ","seh":"sena","ses":"koyraboro senni","sg":"sango","shi":"tašelhit","shn":"shankielâ","si":"sinhala","sk":"slovakiakielâ","sl":"sloveniakielâ","sm":"samoakielâ","sma":"maadâsämikielâ","smj":"juulevsämikielâ","smn":"anarâškielâ","sms":"nuorttâlâškielâ","sn":"shona","snk":"soninke","so":"somalikielâ","sq":"albaniakielâ","sr":"serbiakielâ","srn":"sranantongo","ss":"swazikielâ","ssy":"saho","st":"maadâsotho","su":"sundakielâ","suk":"sukumakielâ","sv":"ruotâkielâ","sw":"swahilikielâ","sw-CD":"Kongo swahilikielâ","swb":"komorikielâ","syr":"syyriakielâ","ta":"tamilkielâ","te":"telugu","tem":"temnekielâ","teo":"ateso","tet":"tetum","tg":"tadžikkielâ","th":"thaikielâ","ti":"tigrinyakielâ","tig":"tigrekielâ","tk":"turkmenkielâ","tlh":"klingonkielâ","tn":"tswanakielâ","to":"tongakielâ","tpi":"tok pisin","tr":"tuurkikielâ","trv":"taroko","ts":"tsongakielâ","tt":"tatarkielâ","tum":"tumbukakielâ","tvl":"tuvalukielâ","twq":"tasawaq","ty":"tahitikielâ","tyv":"tuvakielâ","tzm":"Koskâatlas tamazight","udm":"udmurtkielâ","ug":"uigurkielâ","uk":"ukrainakielâ","umb":"umbundu","und":"tubdâmettumis kielâ","ur":"urdu","uz":"uzbekkielâ","vai":"vaikielâ","ve":"vendakielâ","vep":"vepsäkielâ","vi":"vietnamkielâ","vo":"volapük","vun":"vunjo","wa":"walloonkielâ","wae":"walliskielâ","wal":"wolaitakielâ","war":"waraykielâ","wo":"wolofkielâ","xal":"kalmukkielâ","xh":"xhosakielâ","xog":"soga","yav":"yangben","ybb":"yemba","yi":"jiddish","yo":"yorubakielâ","yue":"kantonkielâ","zgh":"standard tamazight","zh":"mandarinkiinakielâ","zh-Hans":"oovtâkiärdánis kiinakielâ","zh-Hant":"ärbivuáválâš kiinakielâ","zu":"zulukielâ","zun":"zunikielâ","zxx":"ij kielâlâš siskáldâs","zza":"zazakielâ"},"short":{"az":"azerbaidžankielâ","en-GB":"Britannia eŋgâlâskielâ","en-US":"Amerika eŋgâlâskielâ"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"Ascension-suálui","AD":"Andorra","AE":"Arabiemirkodeh","AF":"Afganistan","AG":"Antigua já Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"Antarktis","AR":"Argentina","AS":"Amerika Samoa","AT":"Nuorttâriijkâ","AU":"Australia","AW":"Aruba","AX":"Vuáskueennâm","AZ":"Azerbaidžan","BA":"Bosnia já Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgia","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"St. Barthélemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"BQ","BR":"Brasilia","BS":"Bahama","BT":"Bhutan","BV":"Bouvetsuálui","BW":"Botswana","BY":"Vielgis-Ruoššâ","BZ":"Belize","CA":"Kanada","CC":"Kookossuolluuh (Keelingsuolluuh)","CD":"CD","CF":"Koskâ-Afrika täsiväldi","CG":"CG","CH":"Sveitsi","CI":"Côte d’Ivoire","CK":"Cooksuolluuh","CL":"Chile","CM":"Kamerun","CN":"Kiina","CO":"Kolumbia","CP":"Clippertonsuálui","CR":"Costa Rica","CU":"Kuuba","CV":"Cape Verde","CW":"Curaçao","CX":"Juovlâsuálui","CY":"Kypros","CZ":"Tšekki","DE":"Saksa","DG":"Diego Garcia","DJ":"Djibouti","DK":"Tanska","DM":"Dominica","DO":"Dominikaanisâš täsiväldi","DZ":"Algeria","EA":"Ceuta já Melilla","EC":"Ecuador","EE":"Eestieennâm","EG":"Egypti","EH":"EH","ER":"Eritrea","ES":"Espanja","ET":"Etiopia","EU":"EU","EZ":"EZ","FI":"Suomâ","FJ":"Fidži","FK":"Falklandsuolluuh","FM":"Mikronesia littoväldi","FO":"Färsuolluuh","FR":"Ranska","GA":"Gabon","GB":"Ovtâstum Kunâgâskodde","GD":"Grenada","GE":"Georgia","GF":"Ranska Guyana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Grönland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Peeivitäsideijee Guinea","GR":"Kreikka","GS":"Maadâ-Georgia já Máddááh Sandwichsuolluuh","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hongkong – Kiina e.h.k.","HM":"Heard já McDonaldsuolluuh","HN":"Honduras","HR":"Kroatia","HT":"Haiti","HU":"Uŋgar","IC":"Kanariasuolluuh","ID":"Indonesia","IE":"Irland","IL":"Israel","IM":"Mansuálui","IN":"India","IO":"Brittilâš India väldimeerâ kuávlu","IQ":"Irak","IR":"Iran","IS":"Island","IT":"Italia","JE":"Jersey","JM":"Jamaika","JO":"Jordan","JP":"Jaapaan","KE":"Kenia","KG":"Kirgisia","KH":"Kambodža","KI":"Kiribati","KM":"Komoreh","KN":"St. Kitts já Nevis","KP":"Tave-Korea","KR":"Maadâ-Korea","KW":"Kuwait","KY":"Caymansuolluuh","KZ":"Kazakstan","LA":"Laos","LB":"Libanon","LC":"St. Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Liettua","LU":"Luxemburg","LV":"Latvia","LY":"Libya","MA":"Marokko","MC":"Monaco","MD":"Moldova","ME":"Montenegro","MF":"St. Martin","MG":"Madagaskar","MH":"Marshallsuolluuh","MK":"MK","ML":"Mali","MM":"Myanmar (Burma)","MN":"Mongolia","MO":"Macao - – Kiina e.h.k.","MP":"Tave-Marianeh","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Malediveh","MW":"Malawi","MX":"Meksiko","MY":"Malaysia","MZ":"Mosambik","NA":"Namibia","NC":"Uđđâ-Kaledonia","NE":"Niger","NF":"Norfolksuálui","NG":"Nigeria","NI":"Nicaragua","NL":"Vuáládâhenâmeh","NO":"Taažâ","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"Uđđâ-Seeland","OM":"Oman","PA":"Panama","PE":"Peru","PF":"Ranska Polynesia","PG":"Papua-Uđđâ-Guinea","PH":"Filipineh","PK":"Pakistan","PL":"Puola","PM":"St. Pierre já Miquelon","PN":"Pitcairn","PR":"Puerto Rico","PS":"PS","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","QO":"QO","RE":"Réunion","RO":"Romania","RS":"Serbia","RU":"Ruoššâ","RW":"Ruanda","SA":"Saudi Arabia","SB":"Salomosuolluuh","SC":"Seychelleh","SD":"Sudan","SE":"Ruotâ","SG":"Singapore","SH":"Saint Helena","SI":"Slovenia","SJ":"Čokkeväärih já Jan Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Surinam","SS":"Maadâ-Sudan","ST":"São Tomé já Príncipe","SV":"El Salvador","SX":"Sint Maarten","SY":"Syria","SZ":"Swazieennâm","TA":"Tristan da Cunha","TC":"Turks- já Caicossuolluuh","TD":"Tšad","TF":"Ranska máddááh kuávluh","TG":"Togo","TH":"Thaieennâm","TJ":"Tadžikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Turkki","TT":"Trinidad já Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tansania","UA":"Ukraina","UG":"Uganda","UM":"Ovtâstum Staatâi sierânâssuolluuh","UN":"UN","US":"Ovtâstum Staatah","UY":"Uruguay","UZ":"Uzbekistan","VA":"Vatikan","VC":"St. Vincent já Grenadines","VE":"Venezuela","VG":"Brittiliih Nieidâsuolluuh","VI":"Ovtâstum Staatâi Nieidâsuolluuh","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis já Futuna","WS":"Samoa","XA":"XA","XB":"XB","XK":"Kosovo","YE":"Jemen","YT":"Mayotte","ZA":"Maadâ-Afrikka","ZM":"Sambia","ZW":"Zimbabwe","ZZ":"ZZ"},"short":{"GB":"OK","HK":"Hong Kong","MO":"Macao","PS":"PS","US":"USA"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"AED","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"AOA","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"AUD","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"BHD","BIF":"BIF","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"BWP","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"CAD","CDF":"CDF","CHE":"CHE","CHF":"CHF","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"CNY","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"CVE","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"DJF","DKK":"Tanska ruvnâ","DOP":"DOP","DZD":"DZD","ECS":"ECS","ECV":"ECV","EEK":"Eesti ruvnâ","EGP":"EGP","ERN":"ERN","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ETB","EUR":"euro","FIM":"Suomâ märkki","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"GBP","GEK":"GEK","GEL":"GEL","GHC":"GHC","GHS":"GHS","GIP":"GIP","GMD":"GMD","GNF":"GNF","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"INR","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"Island ruvnâ","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"JPY","KES":"KES","KGS":"KGS","KHR":"KHR","KMF":"KMF","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"LRD","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"Latvia ruble","LYD":"LYD","MAD":"MAD","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"MGA","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"MRO","MRU":"MRU","MTL":"MTL","MTP":"MTP","MUR":"MUR","MVP":"MVP","MVR":"MVR","MWK":"MWK","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"MZM","MZN":"MZN","NAD":"NAD","NGN":"NGN","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"Taažâ ruvnâ","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"RWF","SAR":"SAR","SBD":"SBD","SCR":"SCR","SDD":"SDD","SDG":"SDG","SDP":"SDP","SEK":"Ruotâ ruvnâ","SGD":"SGD","SHP":"SHP","SIT":"SIT","SKK":"SKK","SLL":"SLL","SOS":"SOS","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"STD","STN":"STN","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"SZL","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"TND","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"TZS","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"UGX","USD":"USD","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"XOF","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ZAR","ZMK":"ZMK","ZMW":"ZMW","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"smn"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
