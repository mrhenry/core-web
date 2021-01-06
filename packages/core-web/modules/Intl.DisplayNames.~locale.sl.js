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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("sl").length
)) {
// Intl.DisplayNames.~locale.sl
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"afarščina","ab":"abhaščina","ace":"ačejščina","ach":"ačolijščina","ada":"adangmejščina","ady":"adigejščina","ae":"avestijščina","af":"afrikanščina","afh":"afrihili","agq":"aghemščina","ain":"ainujščina","ak":"akanščina","akk":"akadščina","ale":"aleutščina","alt":"južna altajščina","am":"amharščina","an":"aragonščina","ang":"stara angleščina","anp":"angikaščina","ar":"arabščina","ar-001":"sodobna standardna arabščina","arc":"aramejščina","arn":"mapudungunščina","arp":"arapaščina","arw":"aravaščina","as":"asamščina","asa":"asujščina","ast":"asturijščina","av":"avarščina","awa":"avadščina","ay":"ajmarščina","az":"azerbajdžanščina","ba":"baškirščina","bal":"beludžijščina","ban":"balijščina","bas":"basa","be":"beloruščina","bej":"bedža","bem":"bemba","bez":"benajščina","bg":"bolgarščina","bgn":"zahodnobalučijščina","bho":"bodžpuri","bi":"bislamščina","bik":"bikolski jezik","bin":"edo","bla":"siksika","bm":"bambarščina","bn":"bengalščina","bo":"tibetanščina","br":"bretonščina","bra":"bradžbakanščina","brx":"bodojščina","bs":"bosanščina","bua":"burjatščina","bug":"buginščina","byn":"blinščina","ca":"katalonščina","cad":"kadoščina","car":"karibski jezik","ccp":"chakma","ce":"čečenščina","ceb":"sebuanščina","cgg":"čigajščina","ch":"čamorščina","chb":"čibčevščina","chg":"čagatajščina","chk":"trukeščina","chm":"marijščina","chn":"činuški žargon","cho":"čoktavščina","chp":"čipevščina","chr":"čerokeščina","chy":"čejenščina","ckb":"soranska kurdščina","co":"korziščina","cop":"koptščina","cr":"krijščina","crh":"krimska tatarščina","crs":"sejšelska francoska kreolščina","cs":"češčina","csb":"kašubščina","cu":"stara cerkvena slovanščina","cv":"čuvaščina","cy":"valižanščina","da":"danščina","dak":"dakotščina","dar":"darginščina","dav":"taitajščina","de":"nemščina","de-AT":"avstrijska nemščina","de-CH":"visoka nemščina (Švica)","del":"delavarščina","den":"slavejščina","dgr":"dogrib","din":"dinka","dje":"zarmajščina","doi":"dogri","dsb":"dolnja lužiška srbščina","dua":"duala","dum":"srednja nizozemščina","dv":"diveščina","dyo":"jola-fonjiščina","dyu":"diula","dz":"dzonka","dzg":"dazaga","ebu":"embujščina","ee":"evenščina","efi":"efiščina","egy":"stara egipčanščina","eka":"ekajuk","el":"grščina","elx":"elamščina","en":"angleščina","en-AU":"avstralska angleščina","en-CA":"kanadska angleščina","en-GB":"britanska angleščina","en-US":"ameriška angleščina","enm":"srednja angleščina","eo":"esperanto","es":"španščina","es-419":"latinskoameriška španščina","es-ES":"evropska španščina","es-MX":"mehiška španščina","et":"estonščina","eu":"baskovščina","ewo":"evondovščina","fa":"perzijščina","fa-AF":"darijščina","fan":"fangijščina","fat":"fantijščina","ff":"fulščina","fi":"finščina","fil":"filipinščina","fj":"fidžijščina","fo":"ferščina","fon":"fonščina","fr":"francoščina","fr-CA":"kanadska francoščina","fr-CH":"švicarska francoščina","frc":"cajunska francoščina","frm":"srednja francoščina","fro":"stara francoščina","frr":"severna frizijščina","frs":"vzhodna frizijščina","fur":"furlanščina","fy":"zahodna frizijščina","ga":"irščina","gaa":"ga","gag":"gagavščina","gay":"gajščina","gba":"gbajščina","gd":"škotska gelščina","gez":"etiopščina","gil":"kiribatščina","gl":"galicijščina","gmh":"srednja visoka nemščina","gn":"gvaranijščina","goh":"stara visoka nemščina","gon":"gondi","gor":"gorontalščina","got":"gotščina","grb":"grebščina","grc":"stara grščina","gsw":"nemščina (Švica)","gu":"gudžaratščina","guz":"gusijščina","gv":"manščina","gwi":"gvičin","ha":"havščina","hai":"haidščina","haw":"havajščina","he":"hebrejščina","hi":"hindijščina","hil":"hiligajnonščina","hit":"hetitščina","hmn":"hmonščina","ho":"hiri motu","hr":"hrvaščina","hsb":"gornja lužiška srbščina","ht":"haitijska kreolščina","hu":"madžarščina","hup":"hupa","hy":"armenščina","hz":"herero","ia":"interlingva","iba":"ibanščina","ibb":"ibibijščina","id":"indonezijščina","ie":"interlingve","ig":"igboščina","ii":"sečuanska jiščina","ik":"inupiaščina","ilo":"ilokanščina","inh":"inguščina","io":"ido","is":"islandščina","it":"italijanščina","iu":"inuktitutščina","ja":"japonščina","jbo":"lojban","jgo":"ngomba","jmc":"mačamejščina","jpr":"judovska perzijščina","jrb":"judovska arabščina","jv":"javanščina","ka":"gruzijščina","kaa":"karakalpaščina","kab":"kabilščina","kac":"kačinščina","kaj":"jju","kam":"kambaščina","kaw":"kavi","kbd":"kabardinščina","kcg":"tjapska nigerijščina","kde":"makondščina","kea":"zelenortskootoška kreolščina","kfo":"koro","kg":"kongovščina","kgp":"kgp","kha":"kasi","kho":"kotanščina","khq":"koyra chiini","ki":"kikujščina","kj":"kvanjama","kk":"kazaščina","kkj":"kako","kl":"grenlandščina","kln":"kalenjinščina","km":"kmerščina","kmb":"kimbundu","kn":"kanareščina","ko":"korejščina","koi":"komi-permjaščina","kok":"konkanščina","kos":"kosrajščina","kpe":"kpelejščina","kr":"kanurščina","krc":"karačaj-balkarščina","krl":"karelščina","kru":"kuruk","ks":"kašmirščina","ksb":"šambala","ksf":"bafia","ksh":"kölnsko narečje","ku":"kurdščina","kum":"kumiščina","kut":"kutenajščina","kv":"komijščina","kw":"kornijščina","ky":"kirgiščina","la":"latinščina","lad":"ladinščina","lag":"langijščina","lah":"landa","lam":"lamba","lb":"luksemburščina","lez":"lezginščina","lg":"ganda","li":"limburščina","lij":"lij","lkt":"lakotščina","ln":"lingala","lo":"laoščina","lol":"mongo","lou":"louisianska kreolščina","loz":"lozi","lrc":"severna lurijščina","lt":"litovščina","lu":"luba-katanga","lua":"luba-lulua","lui":"luisenščina","lun":"lunda","luo":"luo","lus":"mizojščina","luy":"luhijščina","lv":"latvijščina","mad":"madurščina","mag":"magadščina","mai":"maitili","mak":"makasarščina","man":"mandingo","mas":"masajščina","mdf":"mokšavščina","mdr":"mandarščina","men":"mende","mer":"meru","mfe":"morisjenščina","mg":"malgaščina","mga":"srednja irščina","mgh":"makuva-meto","mgo":"meta","mh":"marshallovščina","mi":"maorščina","mic":"mikmaščina","min":"minangkabau","mk":"makedonščina","ml":"malajalamščina","mn":"mongolščina","mnc":"mandžurščina","mni":"manipurščina","moh":"mohoščina","mos":"mosijščina","mr":"maratščina","ms":"malajščina","mt":"malteščina","mua":"mundang","mul":"več jezikov","mus":"creekovščina","mwl":"mirandeščina","mwr":"marvarščina","my":"burmanščina","myv":"erzjanščina","mzn":"mazanderanščina","na":"naurujščina","nan":"min nan kitajščina","nap":"napolitanščina","naq":"khoekhoe","nb":"knjižna norveščina","nd":"severna ndebelščina","nds":"nizka nemščina","nds-NL":"nizka saščina","ne":"nepalščina","new":"nevarščina","ng":"ndonga","nia":"niaščina","niu":"niuejščina","nl":"nizozemščina","nl-BE":"flamščina","nmg":"kwasio","nn":"novonorveščina","nnh":"ngiemboonščina","no":"norveščina","nog":"nogajščina","non":"stara nordijščina","nqo":"n’ko","nr":"južna ndebelščina","nso":"severna sotščina","nus":"nuerščina","nv":"navajščina","nwc":"klasična nevarščina","ny":"njanščina","nym":"njamveščina","nyn":"njankole","nyo":"njoro","nzi":"nzima","oc":"okcitanščina","oj":"anašinabščina","om":"oromo","or":"odijščina","os":"osetinščina","osa":"osage","ota":"otomanska turščina","pa":"pandžabščina","pag":"pangasinanščina","pam":"pampanščina","pap":"papiamentu","pau":"palavanščina","pcm":"nigerijski pidžin","peo":"stara perzijščina","phn":"feničanščina","pi":"palijščina","pl":"poljščina","pon":"ponpejščina","prg":"stara pruščina","pro":"stara provansalščina","ps":"paštunščina","pt":"portugalščina","pt-BR":"brazilska portugalščina","pt-PT":"evropska portugalščina","qu":"kečuanščina","quc":"quiche","raj":"radžastanščina","rap":"rapanujščina","rar":"rarotongščina","rm":"retoromanščina","rn":"rundščina","ro":"romunščina","ro-MD":"moldavščina","rof":"rombo","rom":"romščina","root":"rootščina","ru":"ruščina","rup":"aromunščina","rw":"ruandščina","rwk":"rwa","sa":"sanskrt","sad":"sandavščina","sah":"jakutščina","sam":"samaritanska aramejščina","saq":"samburščina","sas":"sasaščina","sat":"santalščina","sba":"ngambajščina","sbp":"sangujščina","sc":"sardinščina","scn":"sicilijanščina","sco":"škotščina","sd":"sindščina","sdh":"južna kurdščina","se":"severna samijščina","seh":"sena","sel":"selkupščina","ses":"koyraboro senni","sg":"sango","sga":"stara irščina","sh":"srbohrvaščina","shi":"tahelitska berberščina","shn":"šanščina","si":"sinhalščina","sid":"sidamščina","sk":"slovaščina","sl":"slovenščina","sm":"samoanščina","sma":"južna samijščina","smj":"luleška samijščina","smn":"inarska samijščina","sms":"skoltska samijščina","sn":"šonščina","snk":"soninke","so":"somalščina","sq":"albanščina","sr":"srbščina","srn":"surinamska kreolščina","srr":"sererščina","ss":"svazijščina","ssy":"saho","st":"sesoto","su":"sundanščina","suk":"sukuma","sus":"susujščina","sux":"sumerščina","sv":"švedščina","sw":"svahili","sw-CD":"kongoški svahili","swb":"šikomor","syc":"klasična sirščina","syr":"sirščina","ta":"tamilščina","te":"telugijščina","tem":"temnejščina","teo":"teso","tet":"tetumščina","tg":"tadžiščina","th":"tajščina","ti":"tigrajščina","tig":"tigrejščina","tiv":"tivščina","tk":"turkmenščina","tkl":"tokelavščina","tl":"tagalogščina","tlh":"klingonščina","tli":"tlingitščina","tmh":"tamajaščina","tn":"cvanščina","to":"tongščina","tog":"malavijska tongščina","tpi":"tok pisin","tr":"turščina","trv":"taroko","ts":"congščina","tsi":"tsimščina","tt":"tatarščina","tum":"tumbukščina","tvl":"tuvalujščina","tw":"tvi","twq":"tasawaq","ty":"tahitščina","tyv":"tuvinščina","tzm":"tamašek (Srednji Atlas)","udm":"udmurtščina","ug":"ujgurščina","uga":"ugaritski jezik","uk":"ukrajinščina","umb":"umbundščina","und":"neznan jezik","ur":"urdujščina","uz":"uzbeščina","vai":"vajščina","ve":"venda","vi":"vietnamščina","vo":"volapik","vot":"votjaščina","vun":"vunjo","wa":"valonščina","wae":"walser","wal":"valamščina","war":"varajščina","was":"vašajščina","wbp":"varlpirščina","wo":"volofščina","xal":"kalmiščina","xh":"koščina","xog":"sogščina","yao":"jaojščina","yap":"japščina","yav":"jangben","ybb":"jembajščina","yi":"jidiš","yo":"jorubščina","yue":"kantonščina","zap":"zapoteščina","zbl":"znakovni jezik Bliss","zen":"zenaščina","zgh":"standardni maroški tamazig","zh":"kitajščina","zh-Hans":"poenostavljena kitajščina","zh-Hant":"tradicionalna kitajščina","zu":"zulujščina","zun":"zunijščina","zxx":"brez jezikoslovne vsebine","zza":"zazajščina"},"short":{"az":"azerščina","en-GB":"britanska angleščina","en-US":"ameriška angleščina"},"narrow":{}},"region":{"long":{"142":"Azija","143":"Osrednja Azija","145":"Zahodna Azija","150":"Evropa","151":"Vzhodna Evropa","154":"Severna Evropa","155":"Zahodna Evropa","202":"podsaharska Afrika","419":"Latinska Amerika","001":"svet","002":"Afrika","003":"Severna Amerika","005":"Južna Amerika","009":"Oceanija","011":"Zahodna Afrika","013":"Srednja Amerika","014":"Vzhodna Afrika","015":"Severna Afrika","017":"Srednja Afrika","018":"Južna Afrika","019":"Amerike","021":"severnoameriška celina","029":"Karibi","030":"Vzhodna Azija","034":"Južna Azija","035":"Jugovzhodna Azija","039":"Južna Evropa","053":"Avstralija in Nova Zelandija","054":"Melanezija","057":"mikronezijska regija","061":"Polinezija","AC":"Otok Ascension","AD":"Andora","AE":"Združeni arabski emirati","AF":"Afganistan","AG":"Antigva in Barbuda","AI":"Angvila","AL":"Albanija","AM":"Armenija","AO":"Angola","AQ":"Antarktika","AR":"Argentina","AS":"Ameriška Samoa","AT":"Avstrija","AU":"Avstralija","AW":"Aruba","AX":"Ålandski otoki","AZ":"Azerbajdžan","BA":"Bosna in Hercegovina","BB":"Barbados","BD":"Bangladeš","BE":"Belgija","BF":"Burkina Faso","BG":"Bolgarija","BH":"Bahrajn","BI":"Burundi","BJ":"Benin","BL":"Saint Barthélemy","BM":"Bermudi","BN":"Brunej","BO":"Bolivija","BQ":"Nizozemski Karibi","BR":"Brazilija","BS":"Bahami","BT":"Butan","BV":"Bouvetov otok","BW":"Bocvana","BY":"Belorusija","BZ":"Belize","CA":"Kanada","CC":"Kokosovi otoki","CD":"Demokratična republika Kongo","CF":"Srednjeafriška republika","CG":"Kongo - Brazzaville","CH":"Švica","CI":"Slonokoščena obala","CK":"Cookovi otoki","CL":"Čile","CM":"Kamerun","CN":"Kitajska","CO":"Kolumbija","CP":"Otok Clipperton","CR":"Kostarika","CU":"Kuba","CV":"Zelenortski otoki","CW":"Curaçao","CX":"Božični otok","CY":"Ciper","CZ":"Češka","DE":"Nemčija","DG":"Diego Garcia","DJ":"Džibuti","DK":"Danska","DM":"Dominika","DO":"Dominikanska republika","DZ":"Alžirija","EA":"Ceuta in Melilla","EC":"Ekvador","EE":"Estonija","EG":"Egipt","EH":"Zahodna Sahara","ER":"Eritreja","ES":"Španija","ET":"Etiopija","EU":"Evropska unija","EZ":"evroobmočje","FI":"Finska","FJ":"Fidži","FK":"Falklandski otoki","FM":"Mikronezija","FO":"Ferski otoki","FR":"Francija","GA":"Gabon","GB":"Združeno kraljestvo","GD":"Grenada","GE":"Gruzija","GF":"Francoska Gvajana","GG":"Guernsey","GH":"Gana","GI":"Gibraltar","GL":"Grenlandija","GM":"Gambija","GN":"Gvineja","GP":"Guadeloupe","GQ":"Ekvatorialna Gvineja","GR":"Grčija","GS":"Južna Georgia in Južni Sandwichevi otoki","GT":"Gvatemala","GU":"Guam","GW":"Gvineja Bissau","GY":"Gvajana","HK":"Posebno upravno območje Ljudske republike Kitajske Hongkong","HM":"Heardov otok in McDonaldovi otoki","HN":"Honduras","HR":"Hrvaška","HT":"Haiti","HU":"Madžarska","IC":"Kanarski otoki","ID":"Indonezija","IE":"Irska","IL":"Izrael","IM":"Otok Man","IN":"Indija","IO":"Britansko ozemlje v Indijskem oceanu","IQ":"Irak","IR":"Iran","IS":"Islandija","IT":"Italija","JE":"Jersey","JM":"Jamajka","JO":"Jordanija","JP":"Japonska","KE":"Kenija","KG":"Kirgizistan","KH":"Kambodža","KI":"Kiribati","KM":"Komori","KN":"Saint Kitts in Nevis","KP":"Severna Koreja","KR":"Južna Koreja","KW":"Kuvajt","KY":"Kajmanski otoki","KZ":"Kazahstan","LA":"Laos","LB":"Libanon","LC":"Saint Lucia","LI":"Lihtenštajn","LK":"Šrilanka","LR":"Liberija","LS":"Lesoto","LT":"Litva","LU":"Luksemburg","LV":"Latvija","LY":"Libija","MA":"Maroko","MC":"Monako","MD":"Moldavija","ME":"Črna gora","MF":"Saint Martin","MG":"Madagaskar","MH":"Marshallovi otoki","MK":"Severna Makedonija","ML":"Mali","MM":"Mjanmar (Burma)","MN":"Mongolija","MO":"Posebno upravno območje Ljudske republike Kitajske Macao","MP":"Severni Marianski otoki","MQ":"Martinik","MR":"Mavretanija","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldivi","MW":"Malavi","MX":"Mehika","MY":"Malezija","MZ":"Mozambik","NA":"Namibija","NC":"Nova Kaledonija","NE":"Niger","NF":"Norfolški otok","NG":"Nigerija","NI":"Nikaragva","NL":"Nizozemska","NO":"Norveška","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"Nova Zelandija","OM":"Oman","PA":"Panama","PE":"Peru","PF":"Francoska Polinezija","PG":"Papua Nova Gvineja","PH":"Filipini","PK":"Pakistan","PL":"Poljska","PM":"Saint Pierre in Miquelon","PN":"Pitcairn","PR":"Portoriko","PS":"Palestinsko ozemlje","PT":"Portugalska","PW":"Palau","PY":"Paragvaj","QA":"Katar","QO":"Ostala oceanija","RE":"Reunion","RO":"Romunija","RS":"Srbija","RU":"Rusija","RW":"Ruanda","SA":"Saudova Arabija","SB":"Salomonovi otoki","SC":"Sejšeli","SD":"Sudan","SE":"Švedska","SG":"Singapur","SH":"Sveta Helena","SI":"Slovenija","SJ":"Svalbard in Jan Mayen","SK":"Slovaška","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalija","SR":"Surinam","SS":"Južni Sudan","ST":"Sao Tome in Principe","SV":"Salvador","SX":"Sint Maarten","SY":"Sirija","SZ":"Esvatini","TA":"Tristan da Cunha","TC":"Otoki Turks in Caicos","TD":"Čad","TF":"Francosko južno ozemlje","TG":"Togo","TH":"Tajska","TJ":"Tadžikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunizija","TO":"Tonga","TR":"Turčija","TT":"Trinidad in Tobago","TV":"Tuvalu","TW":"Tajvan","TZ":"Tanzanija","UA":"Ukrajina","UG":"Uganda","UM":"Stranski zunanji otoki Združenih držav","UN":"Združeni narodi","US":"Združene države Amerike","UY":"Urugvaj","UZ":"Uzbekistan","VA":"Vatikan","VC":"Saint Vincent in Grenadine","VE":"Venezuela","VG":"Britanski Deviški otoki","VI":"Ameriški Deviški otoki","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis in Futuna","WS":"Samoa","XA":"psevdonaglasi","XB":"psevdobidi","XK":"Kosovo","YE":"Jemen","YT":"Mayotte","ZA":"Južnoafriška republika","ZM":"Zambija","ZW":"Zimbabve","ZZ":"Neznano ali neveljavno območje"},"short":{"GB":"ZK","HK":"Hongkong","MO":"Macao","PS":"Palestina","UN":"ZN","US":"ZDA"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"arabski","Aran":"Aran","Armi":"imperialno-aramejski","Armn":"armenski","Avst":"avestanski","Bali":"balijski","Bamu":"Bamu","Bass":"Bass","Batk":"bataški","Beng":"bengalski","Bhks":"Bhks","Blis":"znakovna pisava Bliss","Bopo":"bopomofo","Brah":"bramanski","Brai":"braillova pisava","Bugi":"buginski","Buhd":"buhidski","Cakm":"Cakm","Cans":"poenotena zlogovna pisava kanadskih staroselcev","Cari":"Cari","Cham":"Cham","Cher":"čerokeški","Chrs":"Chrs","Cirt":"kirt","Copt":"koptski","Cprt":"ciprski","Cyrl":"cirilica","Cyrs":"starocerkvenoslovanska cirilica","Deva":"devanagarščica","Diak":"Diak","Dogr":"Dogr","Dsrt":"fonetska pisava deseret","Dupl":"Dupl","Egyd":"demotska egipčanska pisava","Egyh":"hieratska egipčanska pisava","Egyp":"egipčanska slikovna pisava","Elba":"Elba","Elym":"Elym","Ethi":"etiopski","Geok":"cerkvenogruzijski","Geor":"gruzijski","Glag":"glagoliški","Gong":"Gong","Gonm":"Gonm","Goth":"gotski","Gran":"Gran","Grek":"grški","Gujr":"gudžaratski","Guru":"gurmuki","Hanb":"han + bopomofo","Hang":"hangul","Hani":"kanji","Hano":"hanunski","Hans":"poenostavljena pisava","Hant":"tradicionalna pisava","Hatr":"Hatr","Hebr":"hebrejski","Hira":"hiragana","Hluw":"Hluw","Hmng":"pahavhmonska zlogovna pisava","Hmnp":"Hmnp","Hrkt":"japonska zlogovnica","Hung":"staroogrski","Inds":"induški","Ital":"staroitalski","Jamo":"jamo","Java":"javanski","Jpan":"japonski","Kali":"karenski","Kana":"katakana","Khar":"gandarski","Khmr":"kmerski","Khoj":"Khoj","Kits":"Kits","Knda":"kanadski","Kore":"korejski","Kthi":"kajatski","Lana":"Lana","Laoo":"laoški","Latf":"fraktura","Latg":"gelski latinični","Latn":"latinica","Lepc":"lepški","Limb":"limbuški","Lina":"linearna pisava A","Linb":"linearna pisava B","Lisu":"Lisu","Lyci":"licijski","Lydi":"lidijski","Mahj":"Mahj","Maka":"Maka","Mand":"mandanski","Mani":"manihejski","Marc":"Marc","Maya":"majevska slikovna pisava","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"meroitski","Mlym":"malajalamski","Modi":"Modi","Mong":"mongolska","Moon":"Moonova pisava za slepe","Mroo":"Mroo","Mtei":"manipurski","Mult":"Mult","Mymr":"mjanmarski","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"ogamski","Olck":"santalski","Orkh":"orkonski","Orya":"orijski","Osge":"Osge","Osma":"osmanski","Palm":"Palm","Pauc":"Pauc","Perm":"staropermijski","Phag":"pagpajski","Phli":"vrezani napisi pahlavi","Phlp":"psalmski pahlavi","Phlv":"knjižno palavanski","Phnx":"feničanski","Plrd":"Pollardova fonetska pisava","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Roro":"rongorongo","Runr":"runski","Samr":"samaritanski","Sara":"saratski","Sarb":"Sarb","Saur":"Saur","Sgnw":"znakovna pisava","Shaw":"šojevski","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"sinhalski","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"sundanski","Sylo":"siletsko-nagarijski","Syrc":"sirijski","Syre":"sirska abeceda estrangelo","Syrj":"zahodnosirijski","Syrn":"vzhodnosirijski","Tagb":"tagbanski","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"tamilski","Tang":"Tang","Tavt":"tajsko-vietnamski","Telu":"teluški","Teng":"tengvarski","Tfng":"tifinajski","Tglg":"tagaloški","Thaa":"tanajski","Thai":"tajski","Tibt":"tibetanski","Tirh":"Tirh","Ugar":"ugaritski","Vaii":"zlogovna pisava vai","Visp":"vidni govor","Wara":"Wara","Wcho":"Wcho","Xpeo":"staroperzijski","Xsux":"sumersko-akadski klinopis","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"podedovan","Zmth":"matematična znamenja","Zsye":"čustvenček","Zsym":"simboli","Zxxx":"nenapisano","Zyyy":"splošno","Zzzz":"neznan ali neveljaven zapis"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"andorska peseta","AED":"dirham Združenih arabskih emiratov","AFA":"stari afganistanski afgani (1927–2002)","AFN":"afgani","ALK":"ALK","ALL":"albanski lek","AMD":"armenski dram","ANG":"nizozemsko-antilski gulden","AOA":"angolska kvanza","AOK":"stara angolska kvanza (1977–1990)","AON":"angolska nova kvanza (1990–2000)","AOR":"konvertibilna angolska kvanza (1995–1999)","ARA":"argentinski avstral","ARL":"ARL","ARM":"ARM","ARP":"argentinski peso (1983–1985)","ARS":"argentinski peso","ATS":"avstrijski šiling","AUD":"avstralski dolar","AWG":"arubski florin","AZM":"stari azerbajdžanski manat (1993–2006)","AZN":"azerbajdžanski manat","BAD":"bosansko-hercegovski dinar","BAM":"bosansko-hercegovska konvertibilna marka","BAN":"BAN","BBD":"barbadoški dolar","BDT":"bangladeška taka","BEC":"belgijski konvertibilni frank","BEF":"belgijski frank","BEL":"belgijski finančni frank","BGL":"stari bolgarski lev","BGM":"BGM","BGN":"bolgarski lev","BGO":"BGO","BHD":"bahranski dinar","BIF":"burundski frank","BMD":"bermudski dolar","BND":"brunejski dolar","BOB":"bolivijski boliviano","BOL":"BOL","BOP":"bolivijski peso","BOV":"bolivijski mvdol","BRB":"brazilski novi kruzeiro (1967–1986)","BRC":"brazilski kruzado","BRE":"stari brazilski kruzeiro (1990–1993)","BRL":"brazilski real","BRN":"novi brazilski kruzado","BRR":"brazilski kruzeiro","BRZ":"BRZ","BSD":"bahamski dolar","BTN":"butanski ngultrum","BUK":"burmanski kjat","BWP":"bocvanska pula","BYB":"beloruski novi rubelj (1994–1999)","BYN":"beloruski rubelj","BYR":"beloruski rubelj (2000–2016)","BZD":"belizejski dolar","CAD":"kanadski dolar","CDF":"kongovski frank","CHE":"evro WIR","CHF":"švicarski frank","CHW":"frank WIR","CLE":"CLE","CLF":"čilski unidades de fomento","CLP":"čilski peso","CNH":"kitajski juan (offshore)","CNX":"CNX","CNY":"kitajski juan","COP":"kolumbijski peso","COU":"kolumbijska enota realne vrednosti","CRC":"kostariški kolon","CSD":"stari srbski dinar","CSK":"češkoslovaška krona","CUC":"kubanski konvertibilni peso","CUP":"kubanski peso","CVE":"zelenortski eskudo","CYP":"ciprski funt","CZK":"češka krona","DDM":"vzhodnonemška marka","DEM":"nemška marka","DJF":"džibutski frank","DKK":"danska krona","DOP":"dominikanski peso","DZD":"alžirski dinar","ECS":"ekvadorski sukre","ECV":"ekvadorska enota realne vrednosti (UVC)","EEK":"estonska krona","EGP":"egiptovski funt","ERN":"eritrejska nakfa","ESA":"španska pezeta (račun A)","ESB":"španska pezeta (račun B)","ESP":"španska pezeta","ETB":"etiopski bir","EUR":"evro","FIM":"finska marka","FJD":"fidžijski dolar","FKP":"falklandski funt","FRF":"francoski frank","GBP":"britanski funt","GEK":"gruzijski bon lari","GEL":"gruzijski lari","GHC":"stari ganski cedi (1979–2007)","GHS":"ganski cedi","GIP":"gibraltarski funt","GMD":"gambijski dalasi","GNF":"gvinejski frank","GNS":"gvinejski sili","GQE":"ekwele Ekvatorialne Gvineje","GRD":"grška drahma","GTQ":"gvatemalski kecal","GWE":"eskudo Portugalske Gvineje","GWP":"peso Gvineje Bissau","GYD":"gvajanski dolar","HKD":"hongkonški dolar","HNL":"honduraška lempira","HRD":"hrvaški dinar","HRK":"hrvaška kuna","HTG":"haitski gurd","HUF":"madžarski forint","IDR":"indonezijska rupija","IEP":"irski funt","ILP":"izraelski funt","ILR":"ILR","ILS":"izraelski šekel","INR":"indijska rupija","IQD":"iraški dinar","IRR":"iranski rial","ISJ":"ISJ","ISK":"islandska krona","ITL":"italijanska lira","JMD":"jamajški dolar","JOD":"jordanski dinar","JPY":"japonski jen","KES":"kenijski šiling","KGS":"kirgiški som","KHR":"kamboški riel","KMF":"komorski frank","KPW":"severnokorejski von","KRH":"KRH","KRO":"KRO","KRW":"južnokorejski von","KWD":"kuvajtski dinar","KYD":"kajmanski dolar","KZT":"kazahstanski tenge","LAK":"laoški kip","LBP":"libanonski funt","LKR":"šrilanška rupija","LRD":"liberijski dolar","LSL":"lesoški loti","LTL":"litovski litas","LTT":"litvanski litas","LUC":"luksemburški konvertibilni frank","LUF":"luksemburški frank","LUL":"luksemburški finančni frank","LVL":"latvijski lats","LVR":"latvijski rubelj","LYD":"libijski dinar","MAD":"maroški dirham","MAF":"maroški frank","MCF":"MCF","MDC":"MDC","MDL":"moldavijski leu","MGA":"malgaški ariarij","MGF":"malgaški frank","MKD":"makedonski denar","MKN":"MKN","MLF":"malijski frank","MMK":"mjanmarski kjat","MNT":"mongolski tugrik","MOP":"makavska pataka","MRO":"mavretanska uguija (1973–2017)","MRU":"mavretanska uguija","MTL":"malteška lira","MTP":"malteški funt","MUR":"mavricijska rupija","MVP":"MVP","MVR":"maldivska rufija","MWK":"malavijska kvača","MXN":"mehiški peso","MXP":"mehiški srebrni peso (1861–1992)","MXV":"mehiška inverzna enota (UDI)","MYR":"malezijski ringit","MZE":"mozambiški eskudo","MZM":"stari mozambiški metikal","MZN":"mozambiški metikal","NAD":"namibijski dolar","NGN":"nigerijska naira","NIC":"nikaraška kordova","NIO":"nikaraška zlata kordova","NLG":"nizozemski gulden","NOK":"norveška krona","NPR":"nepalska rupija","NZD":"novozelandski dolar","OMR":"omanski rial","PAB":"panamska balboa","PEI":"perujski inti","PEN":"perujski sol","PES":"perujski sol (1863–1965)","PGK":"kina Papue Nove Gvineje","PHP":"filipinski peso","PKR":"pakistanska rupija","PLN":"poljski novi zlot","PLZ":"stari poljski zlot (1950–1995)","PTE":"portugalski eskudo","PYG":"paragvajski gvarani","QAR":"katarski rial","RHD":"rodezijski dolar","ROL":"stari romunski leu","RON":"romunski leu","RSD":"srbski dinar","RUB":"ruski rubelj","RUR":"ruski rubelj (1991–1998)","RWF":"ruandski frank","SAR":"saudski rial","SBD":"solomonski dolar","SCR":"sejšelska rupija","SDD":"stari sudanski dinar","SDG":"sudanski funt","SDP":"stari sudanski funt","SEK":"švedska krona","SGD":"singapurski dolar","SHP":"funt Sv. Helene","SIT":"slovenski tolar","SKK":"slovaška krona","SLL":"sieraleonski leone","SOS":"somalski šiling","SRD":"surinamski dolar","SRG":"surinamski gulden","SSP":"južnosudanski funt","STD":"saotomejska dobra (1977–2017)","STN":"saotomejska dobra","SUR":"sovjetski rubelj","SVC":"salvadorski kolon","SYP":"sirijski funt","SZL":"svazijski lilangeni","THB":"tajski baht","TJR":"tadžikistanski rubelj","TJS":"tadžikistanski somoni","TMM":"turkmenski manat","TMT":"turkmenistanski novi manat","TND":"tunizijski dinar","TOP":"tongovska paanga","TPE":"timorski eskudo","TRL":"stara turška lira","TRY":"nova turška lira","TTD":"dolar Trinidada in Tobaga","TWD":"novi tajvanski dolar","TZS":"tanzanijski šiling","UAH":"ukrajinska grivna","UAK":"ukrajinski karbovanci","UGS":"stari ugandski šiling (1966–1987)","UGX":"ugandski šiling","USD":"ameriški dolar","USN":"ameriški dolar, naslednji dan","USS":"ameriški dolar, isti dan","UYI":"UYI","UYP":"stari urugvajski peso (1975–1993)","UYU":"urugvajski peso","UYW":"UYW","UZS":"uzbeški sum","VEB":"venezuelski bolivar (1871–2008)","VEF":"venezuelski bolivar (2008–2018)","VES":"venezuelski bolivar","VND":"vientnamski dong","VNN":"VNN","VUV":"vanuatujski vatu","WST":"samoanska tala","XAF":"CFA frank BEAC","XAG":"srebro","XAU":"zlato","XBA":"evropska sestavljena enota","XBB":"evropska monetarna enota","XBC":"evropska obračunska enota (XBC)","XBD":"evropska obračunska enota (XBD)","XCD":"vzhodnokaribski dolar","XDR":"posebne pravice črpanja","XEU":"evropska denarna enota","XFO":"zlati frank","XFU":"frank UIC","XOF":"zahodnoafriški frank CFA","XPD":"paladij","XPF":"CFP frank","XPT":"platina","XRE":"XRE","XSU":"XSU","XTS":"koda za potrebe testiranja","XUA":"XUA","XXX":"neznana valuta","YDD":"jemenski dinar","YER":"jemenski rial","YUD":"stari jugoslovanski dinar","YUM":"novi jugoslovanski dinar","YUN":"jugoslovanski konvertibilni dinar","YUR":"YUR","ZAL":"južnoafriški finančni rand","ZAR":"južnoafriški rand","ZMK":"zambijska kvača (1968–2012)","ZMW":"zambijska kvača","ZRN":"zairski novi zaire","ZRZ":"zairski zaire","ZWD":"zimbabvejski dolar","ZWL":"zimbabvejski dolar (2009)","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"sl"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
