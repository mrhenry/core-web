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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("lt").length
)) {
// Intl.DisplayNames.~locale.lt
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"lt":{"types":{"language":{"long":{"aa":"afarų","ab":"abchazų","ace":"ačinezų","ach":"akolių","ada":"adangmų","ady":"adygėjų","ae":"avestų","aeb":"Tuniso arabų","af":"afrikanų","afh":"afrihili","agq":"aghemų","ain":"ainų","ak":"akanų","akk":"akadianų","akz":"alabamiečių","ale":"aleutų","aln":"albanų kalbos gegų tarmė","alt":"pietų Altajaus","am":"amharų","an":"aragonesų","ang":"senoji anglų","anp":"angikų","ar":"arabų","ar-001":"šiuolaikinė standartinė arabų","arc":"aramaikų","arn":"mapudungunų","aro":"araonų","arp":"arapahų","arq":"Alžyro arabų","arw":"aravakų","ary":"Maroko arabų","arz":"Egipto arabų","as":"asamų","asa":"asu","ase":"Amerikos ženklų kalba","ast":"asturianų","av":"avarikų","avk":"kotava","awa":"avadhi","ay":"aimarų","az":"azerbaidžaniečių","ba":"baškirų","bal":"baluči","ban":"baliečių","bar":"bavarų","bas":"basų","bax":"bamunų","bbc":"batak toba","bbj":"ghomalų","be":"baltarusių","bej":"bėjų","bem":"bembų","bew":"betavi","bez":"benų","bfd":"bafutų","bfq":"badaga","bg":"bulgarų","bgn":"vakarų beludžių","bho":"baučpuri","bi":"bislama","bik":"bikolų","bin":"bini","bjn":"bandžarų","bkm":"komų","bla":"siksikų","bm":"bambarų","bn":"bengalų","bo":"tibetiečių","bpy":"bišnuprijos","bqi":"bakhtiari","br":"bretonų","bra":"brajų","brh":"brahujų","brx":"bodo","bs":"bosnių","bss":"akūsų","bua":"buriatų","bug":"buginezų","bum":"bulu","byn":"blin","byv":"medumbų","ca":"katalonų","cad":"kado","car":"karibų","cay":"kaijūgų","cch":"atsamų","ccp":"Čakma","ce":"čečėnų","ceb":"sebuanų","cgg":"čigų","ch":"čamorų","chb":"čibčų","chg":"čagatų","chk":"čukesų","chm":"marių","chn":"činuk žargonas","cho":"čoktau","chp":"čipvėjų","chr":"čerokių","chy":"čajenų","ckb":"soranių kurdų","co":"korsikiečių","cop":"koptų","cps":"capiznon","cr":"kry","crh":"Krymo turkų","crs":"Seišelių kreolų ir prancūzų","cs":"čekų","csb":"kašubų","cu":"bažnytinė slavų","cv":"čiuvašų","cy":"valų","da":"danų","dak":"dakotų","dar":"dargva","dav":"taitų","de":"vokiečių","de-AT":"Austrijos vokiečių","de-CH":"Šveicarijos aukštutinė vokiečių","del":"delavero","den":"slave","dgr":"dogribų","din":"dinkų","dje":"zarmų","doi":"dogri","dsb":"žemutinių sorbų","dtp":"centrinio Dusuno","dua":"dualų","dum":"Vidurio Vokietijos","dv":"divehų","dyo":"džiola-foni","dyu":"dyulų","dz":"botijų","dzg":"dazagų","ebu":"embu","ee":"evių","efi":"efik","egl":"italų kalbos Emilijos tarmė","egy":"senovės egiptiečių","eka":"ekajuk","el":"graikų","elx":"elamitų","en":"anglų","en-AU":"Australijos anglų","en-CA":"Kanados anglų","en-GB":"Didžiosios Britanijos anglų","en-US":"Jungtinių Valstijų anglų","enm":"Vidurio Anglijos","eo":"esperanto","es":"ispanų","es-419":"Lotynų Amerikos ispanų","es-ES":"Europos ispanų","es-MX":"Meksikos ispanų","esu":"centrinės Aliaskos jupikų","et":"estų","eu":"baskų","ewo":"evondo","ext":"ispanų kalbos Ekstremadūros tarmė","fa":"persų","fan":"fangų","fat":"fanti","ff":"fulahų","fi":"suomių","fil":"filipiniečių","fit":"suomių kalbos Tornedalio tarmė","fj":"fidžių","fo":"farerų","fon":"fon","fr":"prancūzų","fr-CA":"Kanados prancūzų","fr-CH":"Šveicarijos prancūzų","frc":"kadžunų prancūzų","frm":"Vidurio Prancūzijos","fro":"senoji prancūzų","frp":"arpitano","frr":"šiaurinių fryzų","frs":"rytų fryzų","fur":"friulių","fy":"vakarų fryzų","ga":"airių","gaa":"ga","gag":"gagaūzų","gan":"kinų kalbos dziangsi tarmė","gay":"gajo","gba":"gbaja","gbz":"zoroastrų dari","gd":"škotų (gėlų)","gez":"gyz","gil":"kiribati","gl":"galisų","glk":"gilaki","gmh":"Vidurio Aukštosios Vokietijos","gn":"gvaranių","goh":"senoji Aukštosios Vokietijos","gom":"Goa konkanių","gon":"gondi","gor":"gorontalo","got":"gotų","grb":"grebo","grc":"senovės graikų","gsw":"Šveicarijos vokiečių","gu":"gudžaratų","guc":"vajų","gur":"frafra","guz":"gusi","gv":"meniečių","gwi":"gvičino","ha":"hausų","hai":"haido","hak":"kinų kalbos hakų tarmė","haw":"havajiečių","he":"hebrajų","hi":"hindi","hif":"Fidžio hindi","hil":"hiligainonų","hit":"hititų","hmn":"hmong","ho":"hiri motu","hr":"kroatų","hsb":"aukštutinių sorbų","hsn":"kinų kalbos hunano tarmė","ht":"Haičio","hu":"vengrų","hup":"hupa","hy":"armėnų","hz":"hererų","ia":"tarpinė","iba":"iban","ibb":"ibibijų","id":"indoneziečių","ie":"interkalba","ig":"igbų","ii":"sičuan ji","ik":"inupiakų","ilo":"ilokų","inh":"ingušų","io":"ido","is":"islandų","it":"italų","iu":"inukitut","izh":"ingrų","ja":"japonų","jam":"Jamaikos kreolų anglų","jbo":"loiban","jgo":"ngombų","jmc":"mačamų","jpr":"judėjų persų","jrb":"judėjų arabų","jut":"danų kalbos jutų tarmė","jv":"javiečių","ka":"gruzinų","kaa":"karakalpakų","kab":"kebailų","kac":"kačinų","kaj":"ju","kam":"kembų","kaw":"kavių","kbd":"kabardinų","kbl":"kanembų","kcg":"tyap","kde":"makondų","kea":"Žaliojo Kyšulio kreolų","ken":"kenyang","kfo":"koro","kg":"Kongo","kgp":"kaingang","kha":"kasi","kho":"kotanezų","khq":"kojra čini","khw":"khovarų","ki":"kikujų","kiu":"kirmanjki","kj":"kuaniama","kk":"kazachų","kkj":"kako","kl":"kalalisut","kln":"kalenjinų","km":"khmerų","kmb":"kimbundu","kn":"kanadų","ko":"korėjiečių","koi":"komių-permių","kok":"konkanių","kos":"kosreanų","kpe":"kpelių","kr":"kanurių","krc":"karačiajų balkarijos","kri":"krio","krj":"kinaray-a","krl":"karelų","kru":"kuruk","ks":"kašmyrų","ksb":"šambalų","ksf":"bafų","ksh":"kolognų","ku":"kurdų","kum":"kumikų","kut":"kutenai","kv":"komi","kw":"kornų","ky":"kirgizų","la":"lotynų","lad":"ladino","lag":"langi","lah":"landa","lam":"lamba","lb":"liuksemburgiečių","lez":"lezginų","lfn":"naujoji frankų kalba","lg":"ganda","li":"limburgiečių","lij":"ligūrų","liv":"lyvių","lkt":"lakotų","lmo":"lombardų","ln":"ngalų","lo":"laosiečių","lol":"mongų","lou":"Luizianos kreolų","loz":"lozių","lrc":"šiaurės luri","lt":"lietuvių","ltg":"latgalių","lu":"luba katanga","lua":"luba lulua","lui":"luiseno","lun":"Lundos","luo":"luo","lus":"mizo","luy":"luja","lv":"latvių","lzh":"klasikinė kinų","lzz":"laz","mad":"madurezų","maf":"mafų","mag":"magahi","mai":"maithili","mak":"Makasaro","man":"mandingų","mas":"masajų","mde":"mabų","mdf":"mokša","mdr":"mandarų","men":"mende","mer":"merų","mfe":"morisijų","mg":"malagasų","mga":"Vidurio Airijos","mgh":"makua-maeto","mgo":"meta","mh":"Maršalo Salų","mi":"maorių","mic":"mikmakų","min":"minangkabau","mk":"makedonų","ml":"malajalių","mn":"mongolų","mnc":"manču","mni":"manipurių","moh":"mohok","mos":"mosi","mr":"maratų","mrj":"vakarų mari","ms":"malajiečių","mt":"maltiečių","mua":"mundangų","mul":"kelios kalbos","mus":"krykų","mwl":"mirandezų","mwr":"marvari","mwv":"mentavai","my":"birmiečių","mye":"mjenų","myv":"erzyjų","mzn":"mazenderanių","na":"naurų","nan":"kinų kalbos pietų minų tarmė","nap":"neapoliečių","naq":"nama","nb":"norvegų bukmolas","nd":"šiaurės ndebelų","nds":"Žemutinės Vokietijos","nds-NL":"Žemutinės Saksonijos (Nyderlandai)","ne":"nepaliečių","new":"nevari","ng":"ndongų","nia":"nias","niu":"niujiečių","njo":"ao naga","nl":"olandų","nl-BE":"flamandų","nmg":"kvasių","nn":"naujoji norvegų","nnh":"ngiembūnų","no":"norvegų","nog":"nogų","non":"senoji norsų","nov":"novial","nqo":"enko","nr":"pietų ndebele","nso":"šiaurės Soto","nus":"nuerų","nv":"navajų","nwc":"klasikinė nevari","ny":"nianjų","nym":"niamvezi","nyn":"niankolų","nyo":"niorų","nzi":"nzima","oc":"očitarų","oj":"ojibva","om":"oromų","or":"odijų","os":"osetinų","osa":"osage","ota":"osmanų turkų","pa":"pendžabų","pag":"pangasinanų","pal":"vidurinė persų kalba","pam":"pampangų","pap":"papiamento","pau":"palauliečių","pcd":"pikardų","pcm":"Nigerijos pidžinų","pdc":"Pensilvanijos vokiečių","pdt":"vokiečių kalbos žemaičių tarmė","peo":"senoji persų","pfl":"vokiečių kalbos Pfalco tarmė","phn":"finikiečių","pi":"pali","pl":"lenkų","pms":"italų kalbos Pjemonto tarmė","pnt":"Ponto","pon":"Ponapės","prg":"prūsų","pro":"senovės provansalų","ps":"puštūnų","pt":"portugalų","pt-BR":"Brazilijos portugalų","pt-PT":"Europos portugalų","qu":"kečujų","quc":"kičių","qug":"Čimboraso aukštumų kečujų","raj":"Radžastano","rap":"rapanui","rar":"rarotonganų","rgn":"italų kalbos Romanijos tarmė","rif":"rifų","rm":"retoromanų","rn":"rundi","ro":"rumunų","ro-MD":"moldavų","rof":"rombo","rom":"romų","root":"rūt","rtm":"rotumanų","ru":"rusų","rue":"rusinų","rug":"Rovianos","rup":"aromanių","rw":"kinjaruandų","rwk":"rua","sa":"sanskritas","sad":"sandavių","sah":"jakutų","sam":"samarėjų aramių","saq":"sambūrų","sas":"sasak","sat":"santalių","saz":"sauraštrų","sba":"ngambajų","sbp":"sangų","sc":"sardiniečių","scn":"siciliečių","sco":"škotų","sd":"sindų","sdc":"sasaresų sardinų","sdh":"pietų kurdų","se":"šiaurės samių","see":"senecų","seh":"senų","sei":"seri","sel":"selkup","ses":"kojraboro seni","sg":"sango","sga":"senoji airių","sgs":"žemaičių","sh":"serbų-kroatų","shi":"tachelhitų","shn":"šan","shu":"chadian arabų","si":"sinhalų","sid":"sidamų","sk":"slovakų","sl":"slovėnų","sli":"sileziečių žemaičių","sly":"selajarų","sm":"Samoa","sma":"pietų samių","smj":"Liuleo samių","smn":"Inario samių","sms":"Skolto samių","sn":"šonų","snk":"soninke","so":"somaliečių","sog":"sogdien","sq":"albanų","sr":"serbų","srn":"sranan tongo","srr":"sererų","ss":"svatų","ssy":"saho","st":"pietų Soto","stq":"Saterlendo fryzų","su":"sundų","suk":"sukuma","sus":"susu","sux":"šumerų","sv":"švedų","sw":"suahilių","sw-CD":"Kongo suahilių","swb":"Komorų","syc":"klasikinė sirų","syr":"sirų","szl":"sileziečių","ta":"tamilų","tcy":"tulų","te":"telugų","tem":"timne","teo":"teso","ter":"Tereno","tet":"tetum","tg":"tadžikų","th":"tajų","ti":"tigrajų","tig":"tigre","tiv":"tiv","tk":"turkmėnų","tkl":"Tokelau","tkr":"tsakurų","tl":"tagalogų","tlh":"klingonų","tli":"tlingitų","tly":"talyšų","tmh":"tamašek","tn":"tsvanų","to":"tonganų","tog":"niasa tongų","tpi":"Papua pidžinų","tr":"turkų","tru":"turoyo","trv":"Taroko","ts":"tsongų","tsd":"tsakonų","tsi":"tsimšian","tt":"totorių","ttt":"musulmonų tatų","tum":"tumbukų","tvl":"Tuvalu","tw":"tvi","twq":"tasavakų","ty":"taitiečių","tyv":"tuvių","tzm":"Centrinio Maroko tamazitų","udm":"udmurtų","ug":"uigūrų","uga":"ugaritų","uk":"ukrainiečių","umb":"umbundu","und":"nežinoma kalba","ur":"urdų","uz":"uzbekų","vai":"vai","ve":"vendų","vec":"venetų","vep":"vepsų","vi":"vietnamiečių","vls":"vakarų flamandų","vmf":"pagrindinė frankonų","vo":"volapiuko","vot":"Votik","vro":"veru","vun":"vunjo","wa":"valonų","wae":"valserų","wal":"valamo","war":"varai","was":"Vašo","wbp":"valrpiri","wo":"volofų","wuu":"kinų kalbos vu tarmė","xal":"kalmukų","xh":"kosų","xmf":"megrelų","xog":"sogų","yao":"jao","yap":"japezų","yav":"jangbenų","ybb":"jembų","yi":"jidiš","yo":"jorubų","yrl":"njengatu","yue":"kinų kalbos Kantono tarmė","za":"chuang","zap":"zapotekų","zbl":"BLISS simbolių","zea":"zelandų","zen":"zenaga","zgh":"standartinė Maroko tamazigtų","zh":"kinų","zh-Hans":"supaprastintoji kinų","zh-Hant":"tradicinė kinų","zu":"zulų","zun":"Zuni","zxx":"nėra kalbinio turinio","zza":"zaza"},"short":{"az":"azeri","en-GB":"anglų (JK)","en-US":"anglų (JAV)"},"narrow":{}},"region":{"long":{"142":"Azija","143":"Centrinė Azija","145":"Vakarų Azija","150":"Europa","151":"Rytų Europa","154":"Šiaurės Europa","155":"Vakarų Europa","202":"Užsachario Afrika","419":"Lotynų Amerika","001":"pasaulis","002":"Afrika","003":"Šiaurės Amerika","005":"Pietų Amerika","009":"Okeanija","011":"Vakarų Afrika","013":"Centrinė Amerika","014":"Rytų Afrika","015":"Šiaurės Afrika","017":"Vidurio Afrika","018":"Pietinė Afrika","019":"Amerika","021":"Šiaurinė Amerika","029":"Karibai","030":"Rytų Azija","034":"Pietų Azija","035":"Pietryčių Azija","039":"Pietų Europa","053":"Australazija","054":"Melanezija","057":"Mikronezijos regionas","061":"Polinezija","AC":"Dangun Žengimo sala","AD":"Andora","AE":"Jungtiniai Arabų Emyratai","AF":"Afganistanas","AG":"Antigva ir Barbuda","AI":"Angilija","AL":"Albanija","AM":"Armėnija","AO":"Angola","AQ":"Antarktida","AR":"Argentina","AS":"Amerikos Samoa","AT":"Austrija","AU":"Australija","AW":"Aruba","AX":"Alandų Salos","AZ":"Azerbaidžanas","BA":"Bosnija ir Hercegovina","BB":"Barbadosas","BD":"Bangladešas","BE":"Belgija","BF":"Burkina Fasas","BG":"Bulgarija","BH":"Bahreinas","BI":"Burundis","BJ":"Beninas","BL":"Sen Bartelemi","BM":"Bermuda","BN":"Brunėjus","BO":"Bolivija","BQ":"Karibų Nyderlandai","BR":"Brazilija","BS":"Bahamos","BT":"Butanas","BV":"Buvė Sala","BW":"Botsvana","BY":"Baltarusija","BZ":"Belizas","CA":"Kanada","CC":"Kokosų (Kilingo) Salos","CD":"Kongas-Kinšasa","CF":"Centrinės Afrikos Respublika","CG":"Kongas-Brazavilis","CH":"Šveicarija","CI":"Dramblio Kaulo Krantas","CK":"Kuko Salos","CL":"Čilė","CM":"Kamerūnas","CN":"Kinija","CO":"Kolumbija","CP":"Klipertono sala","CR":"Kosta Rika","CU":"Kuba","CV":"Žaliasis Kyšulys","CW":"Kiurasao","CX":"Kalėdų Sala","CY":"Kipras","CZ":"Čekija","DE":"Vokietija","DG":"Diego Garsija","DJ":"Džibutis","DK":"Danija","DM":"Dominika","DO":"Dominikos Respublika","DZ":"Alžyras","EA":"Seuta ir Melila","EC":"Ekvadoras","EE":"Estija","EG":"Egiptas","EH":"Vakarų Sachara","ER":"Eritrėja","ES":"Ispanija","ET":"Etiopija","EU":"Europos Sąjunga","EZ":"euro zona","FI":"Suomija","FJ":"Fidžis","FK":"Folklando Salos","FM":"Mikronezija","FO":"Farerų Salos","FR":"Prancūzija","GA":"Gabonas","GB":"Jungtinė Karalystė","GD":"Grenada","GE":"Gruzija","GF":"Prancūzijos Gviana","GG":"Gernsis","GH":"Gana","GI":"Gibraltaras","GL":"Grenlandija","GM":"Gambija","GN":"Gvinėja","GP":"Gvadelupa","GQ":"Pusiaujo Gvinėja","GR":"Graikija","GS":"Pietų Džordžija ir Pietų Sandvičo salos","GT":"Gvatemala","GU":"Guamas","GW":"Bisau Gvinėja","GY":"Gajana","HK":"Ypatingasis Administracinis Kinijos Regionas Honkongas","HM":"Herdo ir Makdonaldo Salos","HN":"Hondūras","HR":"Kroatija","HT":"Haitis","HU":"Vengrija","IC":"Kanarų salos","ID":"Indonezija","IE":"Airija","IL":"Izraelis","IM":"Meno Sala","IN":"Indija","IO":"Indijos Vandenyno Britų Sritis","IQ":"Irakas","IR":"Iranas","IS":"Islandija","IT":"Italija","JE":"Džersis","JM":"Jamaika","JO":"Jordanija","JP":"Japonija","KE":"Kenija","KG":"Kirgizija","KH":"Kambodža","KI":"Kiribatis","KM":"Komorai","KN":"Sent Kitsas ir Nevis","KP":"Šiaurės Korėja","KR":"Pietų Korėja","KW":"Kuveitas","KY":"Kaimanų Salos","KZ":"Kazachstanas","LA":"Laosas","LB":"Libanas","LC":"Sent Lusija","LI":"Lichtenšteinas","LK":"Šri Lanka","LR":"Liberija","LS":"Lesotas","LT":"Lietuva","LU":"Liuksemburgas","LV":"Latvija","LY":"Libija","MA":"Marokas","MC":"Monakas","MD":"Moldova","ME":"Juodkalnija","MF":"Sen Martenas","MG":"Madagaskaras","MH":"Maršalo Salos","MK":"Šiaurės Makedonija","ML":"Malis","MM":"Mianmaras (Birma)","MN":"Mongolija","MO":"Ypatingasis Administracinis Kinijos Regionas Makao","MP":"Marianos Šiaurinės Salos","MQ":"Martinika","MR":"Mauritanija","MS":"Montseratas","MT":"Malta","MU":"Mauricijus","MV":"Maldyvai","MW":"Malavis","MX":"Meksika","MY":"Malaizija","MZ":"Mozambikas","NA":"Namibija","NC":"Naujoji Kaledonija","NE":"Nigeris","NF":"Norfolko sala","NG":"Nigerija","NI":"Nikaragva","NL":"Nyderlandai","NO":"Norvegija","NP":"Nepalas","NR":"Nauru","NU":"Niujė","NZ":"Naujoji Zelandija","OM":"Omanas","PA":"Panama","PE":"Peru","PF":"Prancūzijos Polinezija","PG":"Papua Naujoji Gvinėja","PH":"Filipinai","PK":"Pakistanas","PL":"Lenkija","PM":"Sen Pjeras ir Mikelonas","PN":"Pitkerno salos","PR":"Puerto Rikas","PS":"Palestinos teritorija","PT":"Portugalija","PW":"Palau","PY":"Paragvajus","QA":"Kataras","QO":"Nuošali Okeanija","RE":"Reunjonas","RO":"Rumunija","RS":"Serbija","RU":"Rusija","RW":"Ruanda","SA":"Saudo Arabija","SB":"Saliamono Salos","SC":"Seišeliai","SD":"Sudanas","SE":"Švedija","SG":"Singapūras","SH":"Šv. Elenos Sala","SI":"Slovėnija","SJ":"Svalbardas ir Janas Majenas","SK":"Slovakija","SL":"Siera Leonė","SM":"San Marinas","SN":"Senegalas","SO":"Somalis","SR":"Surinamas","SS":"Pietų Sudanas","ST":"San Tomė ir Prinsipė","SV":"Salvadoras","SX":"Sint Martenas","SY":"Sirija","SZ":"Svazilandas","TA":"Tristanas da Kunja","TC":"Terkso ir Kaikoso Salos","TD":"Čadas","TF":"Prancūzijos Pietų sritys","TG":"Togas","TH":"Tailandas","TJ":"Tadžikija","TK":"Tokelau","TL":"Rytų Timoras","TM":"Turkmėnistanas","TN":"Tunisas","TO":"Tonga","TR":"Turkija","TT":"Trinidadas ir Tobagas","TV":"Tuvalu","TW":"Taivanas","TZ":"Tanzanija","UA":"Ukraina","UG":"Uganda","UM":"Jungtinių Valstijų Mažosios Tolimosios Salos","UN":"Jungtinės Tautos","US":"Jungtinės Valstijos","UY":"Urugvajus","UZ":"Uzbekistanas","VA":"Vatikano Miesto Valstybė","VC":"Šventasis Vincentas ir Grenadinai","VE":"Venesuela","VG":"Didžiosios Britanijos Mergelių Salos","VI":"Jungtinių Valstijų Mergelių Salos","VN":"Vietnamas","VU":"Vanuatu","WF":"Volisas ir Futūna","WS":"Samoa","XA":"XA","XB":"XB","XK":"Kosovas","YE":"Jemenas","YT":"Majotas","ZA":"Pietų Afrika","ZM":"Zambija","ZW":"Zimbabvė","ZZ":"nežinoma sritis"},"short":{"GB":"JK","HK":"Honkongas","MO":"Makao","PS":"Palestina","UN":"JT","US":"JAV"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Afak":"Afaka","Aghb":"Kaukazo Albanijos","Ahom":"Ahom","Arab":"arabų","Armi":"imperinė aramaikų","Armn":"armėnų","Avst":"avestano","Bali":"Baliečių","Bamu":"Bamum","Bass":"Bassa Vah","Batk":"batak","Beng":"bengalų","Bhks":"Bhks","Blis":"„Bliss“ simboliai","Bopo":"bopomofo","Brah":"brahmi","Brai":"brailio","Bugi":"buginezų","Buhd":"buhid","Cakm":"čakma","Cans":"suvienodinti Kanados aborigenų silabiniai","Cari":"karių","Cham":"čam","Cher":"čerokių","Cirt":"kirt","Copt":"koptų","Cprt":"kipro","Cyrl":"kirilica","Cyrs":"senoji bažnytinė slavų kirilica","Deva":"devanagari","Dogr":"Dogr","Dsrt":"deseretas","Dupl":"Duplojė stenografija","Egyd":"Egipto liaudies","Egyh":"Egipto žynių","Egyp":"egipto hieroglifai","Elba":"Elbasano","Elym":"Elym","Ethi":"etiopų","Geok":"gruzinų kutsuri","Geor":"gruzinų","Glag":"glagolitik","Gong":"Gong","Gonm":"Gonm","Goth":"gotų","Gran":"Granta","Grek":"graikų","Gujr":"gudžaratų","Guru":"gurmuki","Hanb":"hanbų","Hang":"hangul","Hani":"han","Hano":"hanuno","Hans":"supaprastinti","Hant":"tradiciniai","Hatr":"Hatr","Hebr":"hebrajų","Hira":"hiragana","Hluw":"Anatolijaus hieroglifai","Hmng":"pahav hmong","Hmnp":"Hmnp","Hrkt":"katakana / hiragana","Hung":"senasis vengrų","Inds":"indus","Ital":"senasis italų","Jamo":"Jamo simboliai","Java":"javiečių","Jpan":"japonų","Jurc":"Jurchen","Kali":"kajah li","Kana":"katakana","Khar":"karošti","Khmr":"khmerų","Khoj":"Khojki","Knda":"kanadų","Kore":"korėjiečių","Kpel":"Kpelų","Kthi":"kaithi","Lana":"lana","Laoo":"laosiečių","Latf":"fraktur lotynų","Latg":"gėlų lotynų","Latn":"lotynų","Lepc":"lepča","Limb":"limbu","Lina":"linijiniai A","Linb":"linijiniai B","Lisu":"Fraser","Loma":"Loma","Lyci":"lician","Lydi":"lidian","Mahj":"Mahadžani","Maka":"Maka","Mand":"mandėjų","Mani":"maničų","Marc":"Marc","Maya":"malų hieroglifai","Medf":"Medf","Mend":"Mende","Merc":"Merojitų rankraštinis","Mero":"meroitik","Mlym":"malajalių","Modi":"Modi","Mong":"mongolų","Moon":"mūn","Mroo":"Mro","Mtei":"meitei majek","Mult":"Mult","Mymr":"birmiečių","Nand":"Nand","Narb":"Senasis šiaurės arabų","Nbat":"Nabatėjų","Newa":"Newa","Nkgb":"Naxi Geba","Nkoo":"enko","Nshu":"Nüshu","Ogam":"ogham","Olck":"ol čiki","Orkh":"orkon","Orya":"orijų","Osge":"Osge","Osma":"osmanų","Palm":"Palmiros","Pauc":"Pau Cin Hau","Perm":"senieji permės","Phag":"pagsa pa","Phli":"rašytiniai pahlavi","Phlp":"pselter pahlavi","Phlv":"buk pahvali","Phnx":"foenikų","Plrd":"polard fonetinė","Prti":"rašytiniai partų","Qaag":"Qaag","Rjng":"rejang","Rohg":"Rohg","Roro":"rongorongo","Runr":"runų","Samr":"samariečių","Sara":"sarati","Sarb":"senoji pietų Arabijos","Saur":"sauraštra","Sgnw":"ženklų raštas","Shaw":"šavių","Shrd":"Šarados","Sidd":"Siddham","Sind":"Khudawadi","Sinh":"sinhalų","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora Sompeng","Soyo":"Soyo","Sund":"sundų","Sylo":"syloti nagri","Syrc":"sirų","Syre":"estrangelo siriečių","Syrj":"vakarų sirų","Syrn":"rytų sirų","Tagb":"tagbanva","Takr":"Takri","Tale":"tai le","Talu":"naujasis Tailando lue","Taml":"tamilų","Tang":"Tangut","Tavt":"tai vet","Telu":"telugų","Teng":"tengvar","Tfng":"tifinag","Tglg":"tagalogų","Thaa":"hana","Thai":"tajų","Tibt":"tibetiečių","Tirh":"Tirhuta","Ugar":"ugaritik","Vaii":"vai","Visp":"matoma kalba","Wara":"Varang Kshiti","Wcho":"Wcho","Wole":"Woleai","Xpeo":"senieji persų","Xsux":"Šumero Akado dantiraštis","Yiii":"ji","Zanb":"Zanb","Zinh":"paveldėtas","Zmth":"matematiniai simboliai","Zsye":"jaustukai","Zsym":"simbolių","Zxxx":"neparašyta","Zyyy":"bendri","Zzzz":"nežinomi rašmenys"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"Andoros peseta","AED":"Jungtinių Arabų Emyratų dirhamas","AFA":"Afganistano afganis (1927–2002)","AFN":"Afganistano afganis","ALK":"Albanijos lekas (1946–1965)","ALL":"Albanijos lekas","AMD":"Armėnijos dramas","ANG":"Olandijos Antilų guldenas","AOA":"Angolos kvanza","AOK":"Angolos kvanza (1977–1990)","AON":"Angolos naujoji kvanza (1990–2000)","AOR":"Angolos patikslinta kvanza (1995–1999)","ARA":"Argentinos australs","ARL":"Argentinos pesos ley (1970–1983)","ARM":"Argentinos pesai (1881–1970)","ARP":"Argentinos pesas (1983–1985)","ARS":"Argentinos pesas","ATS":"Austrijos šilingas","AUD":"Australijos doleris","AWG":"Arubos guldenas","AZM":"Azerbaidžano manatas (1993–2006)","AZN":"Azerbaidžano manatas","BAD":"Bosnijos ir Hercegovinos dinaras (1992–1994)","BAM":"Bosnijos ir Hercegovinos konvertuojamoji markė","BAN":"Bosnijos ir Hercegovinos naujasis dinaras (1994–1997)","BBD":"Barbadoso doleris","BDT":"Bangladešo taka","BEC":"Belgijos frankas (konvertuojamas)","BEF":"Belgijos frankas","BEL":"Belgijos frankas (finansinis)","BGL":"Bulgarijos levas (1962–1999)","BGM":"Bulgarų socialistų leva","BGN":"Bulgarijos levas","BGO":"Bulgarijos levas (1879–1952)","BHD":"Bahreino dinaras","BIF":"Burundžio frankas","BMD":"Bermudos doleris","BND":"Brunėjaus doleris","BOB":"Bolivijos bolivijanas","BOL":"Bolivijos bolivijanas (1863–1963)","BOP":"Bolivijos pesas","BOV":"Bolivijos mvdol","BRB":"Brazilijos naujieji kruzeirai (1967–1986)","BRC":"Brazilijos kruzadai (1986–1989)","BRE":"Brazilijos kruzeiras (1990–1993)","BRL":"Brazilijos realas","BRN":"Brazilijos naujiejis kruzadai (1989–1990)","BRR":"Brazilijos kruzeiras (1993–1994)","BRZ":"Brazilijos kruzeirai (1942–1967)","BSD":"Bahamų doleris","BTN":"Butano ngultrumas","BUK":"Birmos kijatas","BWP":"Botsvanos pula","BYB":"Baltarusijos naujasis rublis (1994–1999)","BYN":"Baltarusijos rublis","BYR":"Baltarusijos rublis (2000–2016)","BZD":"Belizo doleris","CAD":"Kanados doleris","CDF":"Kongo frankas","CHE":"WIR eurai","CHF":"Šveicarijos frankas","CHW":"WIR frankas","CLE":"Čilės eskudai","CLF":"Čiliečių unidades de fomentos","CLP":"Čilės pesas","CNH":"Kinijos Užsienio juanis","CNX":"Kinijos \\\"People\\\" banko doleris","CNY":"Kinijos ženminbi juanis","COP":"Kolumbijos pesas","COU":"unidad de valor realai","CRC":"Kosta Rikos kolonas","CSD":"Serbijos dinaras (2002–2006)","CSK":"Čekoslovakų sunkusis korunas","CUC":"Kubos konvertuojamasis pesas","CUP":"Kubos pesas","CVE":"Žaliojo Kyšulio eskudas","CYP":"Kipro svaras","CZK":"Čekijos krona","DDM":"Rytų Vokietijos markė","DEM":"Vokietijos markė","DJF":"Džibučio frankas","DKK":"Danijos krona","DOP":"Dominikos pesas","DZD":"Alžyro dinaras","ECS":"Ekvadoro sukrė","ECV":"Ekvadoro constante (UVC)","EEK":"Estijos krona","EGP":"Egipto svaras","ERN":"Eritrėjos nakfa","ESA":"Ispanų pesetai (A sąskaita)","ESB":"Ispanų pesetai (konvertuojama sąskaita)","ESP":"Ispanijos peseta","ETB":"Etiopijos biras","EUR":"Euras","FIM":"Suomijos markė","FJD":"Fidžio doleris","FKP":"Falklando salų svaras","FRF":"Prancūzijos frankas","GBP":"Didžiosios Britanijos svaras","GEK":"Gruzinų kupon larits","GEL":"Gruzijos laris","GHC":"Ganos sedis (1979–2007)","GHS":"Ganos sedis","GIP":"Gibraltaro svaras","GMD":"Gambijos dalasis","GNF":"Gvinėjos frankas","GNS":"Guinean sylis","GQE":"Pusiaujo Guinean ekwele","GRD":"Graikijos drachma","GTQ":"Gvatemalos ketcalis","GWE":"Portugalų Gvinėjos eskudas","GWP":"Gvinėjos-Bisau pesas","GYD":"Gajanos doleris","HKD":"Honkongo doleris","HNL":"Hondūro lempira","HRD":"Kroatijos dinaras","HRK":"Kroatijos kuna","HTG":"Haičio gurdas","HUF":"Vengrijos forintas","IDR":"Indonezijos rupija","IEP":"Airijos svaras","ILP":"Izraelio svaras","ILR":"Izraelio šekelis (1980–1985)","ILS":"Izraelio naujasis šekelis","INR":"Indijos rupija","IQD":"Irako dinaras","IRR":"Irano rialas","ISJ":"Islandijos krona (1918–1981)","ISK":"Islandijos krona","ITL":"Italijos lira","JMD":"Jamaikos doleris","JOD":"Jordanijos dinaras","JPY":"Japonijos jena","KES":"Kenijos šilingas","KGS":"Kirgizijos somas","KHR":"Kambodžos rielis","KMF":"Komoro frankas","KPW":"Šiaurės Korėjos vonas","KRH":"Pietų Korėjos hwanas (1953–1962)","KRO":"Pietų Korėjos vonas (1945–1953)","KRW":"Pietų Korėjos vonas","KWD":"Kuveito dinaras","KYD":"Kaimanų salų doleris","KZT":"Kazachstano tengė","LAK":"Laoso kipas","LBP":"Libano svaras","LKR":"Šri Lankos rupija","LRD":"Liberijos doleris","LSL":"Lesoto lotis","LTL":"Lietuvos litas","LTT":"Lietuvos talonas","LUC":"Liuksemburgo konvertuojamas frankas","LUF":"Liuksemburgo frankas","LUL":"Liuksemburgo finansinis frankas","LVL":"Latvijos latas","LVR":"Latvijos rublis","LYD":"Libijos dinaras","MAD":"Maroko dirhamas","MAF":"Maroko frankas","MCF":"Monegasque frankas","MDC":"Moldovų cupon","MDL":"Moldovos lėja","MGA":"Madagaskaro ariaris","MGF":"Madagaskaro frankas","MKD":"Makedonijos denaras","MKN":"Makedonijos denaras (1992–1993)","MLF":"Malio frankas","MMK":"Mianmaro kijatas","MNT":"Mongolijos tugrikas","MOP":"Makao pataka","MRO":"Mauritanijos ugija (1973–2017)","MRU":"Mauritanijos ugija","MTL":"Maltos lira","MTP":"Maltos svaras","MUR":"Mauricijaus rupija","MVP":"Maldyvų rupija","MVR":"Maldyvų rufija","MWK":"Malavio kvača","MXN":"Meksikos pesas","MXP":"Meksikos sidabrinis pesas (1861–1992)","MXV":"Meksikos United de Inversion (UDI)","MYR":"Malaizijos ringitas","MZE":"Mozambiko eskudas","MZM":"Mozambiko metikalis (1980–2006)","MZN":"Mozambiko metikalis","NAD":"Namibijos doleris","NGN":"Nigerijos naira","NIC":"Nikaragvos kardoba (1988–1991)","NIO":"Nikaragvos kordoba","NLG":"Nyderlandų guldenas","NOK":"Norvegijos krona","NPR":"Nepalo rupija","NZD":"Naujosios Zelandijos doleris","OMR":"Omano rialas","PAB":"Panamos balboja","PEI":"Peru intis","PEN":"Peru solis","PES":"Peru solis (1863–1965)","PGK":"Papua Naujosios Gvinėjos kina","PHP":"Filipinų pesas","PKR":"Pakistano rupija","PLN":"Lenkijos zlotas","PLZ":"Lenkijos zlotas (1950–1995)","PTE":"Portugalijos eskudas","PYG":"Paragvajaus guaranis","QAR":"Kataro rialas","RHD":"Rodezijos doleris","ROL":"Rumunijos lėja (1952–2006)","RON":"Rumunijos lėja","RSD":"Serbijos dinaras","RUB":"Rusijos rublis","RUR":"Rusijos rublis (1991–1998)","RWF":"Ruandos frankas","SAR":"Saudo Arabijos rijalas","SBD":"Saliamono salų doleris","SCR":"Seišelių rupija","SDD":"Sudano dinaras (1992–2007)","SDG":"Sudano svaras","SDP":"Sudano svaras (1957–1998)","SEK":"Švedijos krona","SGD":"Singapūro doleris","SHP":"Šv. Elenos salų svaras","SIT":"Slovėnijos tolaras","SKK":"Slovakijos krona","SLL":"Siera Leonės leonė","SOS":"Somalio šilingas","SRD":"Surimano doleris","SRG":"Surimano guldenas","SSP":"Pietų Sudano svaras","STD":"San Tomės ir Principės dobra (1977–2017)","STN":"San Tomės ir Principės dobra","SUR":"Sovietų rublis","SVC":"Salvadoro kolonas","SYP":"Sirijos svaras","SZL":"Svazilando lilangenis","THB":"Tailando batas","TJR":"Tadžikistano rublis","TJS":"Tadžikistano somonis","TMM":"Turkmėnistano manatas (1993–2009)","TMT":"Turkmėnistano manatas","TND":"Tuniso dinaras","TOP":"Tongo paanga","TPE":"Timoro eskudas","TRL":"Turkijos lira (1922–2005)","TRY":"Turkijos lira","TTD":"Trinidado ir Tobago doleris","TWD":"Taivano naujasis doleris","TZS":"Tanzanijos šilingas","UAH":"Ukrainos grivina","UAK":"Ukrainos karbovanecas","UGS":"Ugandos šilingas (1966–1987)","UGX":"Ugandos šilingas","USD":"JAV doleris","USN":"JAV doleris (kitos dienos)","USS":"JAV doleris (šios dienos)","UYI":"Urugvajaus pesai en unidades indexadas","UYP":"Urugvajaus pesas (1975–1993)","UYU":"Urugvajaus pesas","UYW":"UYW","UZS":"Uzbekistano sumas","VEB":"Venesuelos bolivaras (1871–2008)","VEF":"Venesuelos bolivaras (2008–2018)","VES":"Venesuelos bolivaras","VND":"Vietnamo dongas","VNN":"Vietnamo dongas (1978–1985)","VUV":"Vanuatu vatas","WST":"Samoa tala","XAF":"CFA BEAC frankas","XAG":"Sidabras","XAU":"Auksas","XBA":"Europos suvestinės vienetas","XBB":"Europos piniginis vienetas","XBC":"Europos valiutos / apskaitos vienetas (XBC)","XBD":"Europos valiutos / apskaitos vienetas (XBD)","XCD":"Rytų Karibų doleris","XDR":"SDR tarptautinis valiutos fondas","XEU":"Europos piniginis vienetas (1993–1999)","XFO":"Aukso frankas","XFU":"Prancūzijos UIC - frankas","XOF":"CFA BCEAO frankas","XPD":"Paladis","XPF":"CFP frankas","XPT":"Platina","XRE":"RINET fondai","XSU":"Sukrė","XTS":"Tikrinamas valiutos kodas","XUA":"Azijos plėtros banko apskaitos vienetas","XXX":"nežinoma valiuta","YDD":"Jemeno dinaras","YER":"Jemeno rialas","YUD":"Jugoslavijos kietasis dinaras (1966–1990)","YUM":"Jugoslavijos naujasis dinaras (1994–2002)","YUN":"Jugoslavijos konvertuojamas dinaras (1990–1992)","YUR":"Jugoslavijos reformuotas dinaras (1992–1993)","ZAL":"Pietų Afrikos finansinis randas","ZAR":"Pietų Afrikos Respublikos randas","ZMK":"Zambijos kvača (1968–2012)","ZMW":"Zambijos kvača","ZRN":"Zairo naujasis zairas (1993–1998)","ZRZ":"Zairo zairas (1971–1993)","ZWD":"Zimbabvės doleris (1980–2008)","ZWL":"Zimbabvės doleris (2009)","ZWR":"Zimbabvės doleris (2008)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["lt"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
