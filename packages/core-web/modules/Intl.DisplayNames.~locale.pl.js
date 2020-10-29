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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("pl").length
)) {
// Intl.DisplayNames.~locale.pl
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"pl":{"types":{"language":{"long":{"aa":"afar","ab":"abchaski","ace":"aceh","ach":"aczoli","ada":"adangme","ady":"adygejski","ae":"awestyjski","aeb":"tunezyjski arabski","af":"afrikaans","afh":"afrihili","agq":"aghem","ain":"ajnu","ak":"akan","akk":"akadyjski","akz":"alabama","ale":"aleucki","aln":"albański gegijski","alt":"południowoałtajski","am":"amharski","an":"aragoński","ang":"staroangielski","anp":"angika","ar":"arabski","ar-001":"współczesny arabski","arc":"aramejski","arn":"mapudungun","aro":"araona","arp":"arapaho","arq":"algierski arabski","ars":"arabski nadżdyjski","arw":"arawak","ary":"marokański arabski","arz":"egipski arabski","as":"asamski","asa":"asu","ase":"amerykański język migowy","ast":"asturyjski","av":"awarski","avk":"kotava","awa":"awadhi","ay":"ajmara","az":"azerbejdżański","ba":"baszkirski","bal":"beludżi","ban":"balijski","bar":"bawarski","bas":"basaa","bax":"bamum","bbc":"batak toba","bbj":"ghomala","be":"białoruski","bej":"bedża","bem":"bemba","bew":"betawi","bez":"bena","bfd":"bafut","bfq":"badaga","bg":"bułgarski","bgn":"beludżi północny","bho":"bhodżpuri","bi":"bislama","bik":"bikol","bin":"bini","bjn":"banjar","bkm":"kom","bla":"siksika","bm":"bambara","bn":"bengalski","bo":"tybetański","bpy":"bisznuprija-manipuri","bqi":"bachtiarski","br":"bretoński","bra":"bradź","brh":"brahui","brx":"bodo","bs":"bośniacki","bss":"akoose","bua":"buriacki","bug":"bugijski","bum":"bulu","byn":"blin","byv":"medumba","ca":"kataloński","cad":"kaddo","car":"karaibski","cay":"kajuga","cch":"atsam","ccp":"czakma","ce":"czeczeński","ceb":"cebuano","cgg":"chiga","ch":"czamorro","chb":"czibcza","chg":"czagatajski","chk":"chuuk","chm":"maryjski","chn":"żargon czinucki","cho":"czoktawski","chp":"czipewiański","chr":"czirokeski","chy":"czejeński","ckb":"sorani","co":"korsykański","cop":"koptyjski","cps":"capiznon","cr":"kri","crh":"krymskotatarski","crs":"kreolski seszelski","cs":"czeski","csb":"kaszubski","cu":"cerkiewnosłowiański","cv":"czuwaski","cy":"walijski","da":"duński","dak":"dakota","dar":"dargwijski","dav":"taita","de":"niemiecki","de-AT":"austriacki niemiecki","de-CH":"szwajcarski wysokoniemiecki","del":"delaware","den":"slave","dgr":"dogrib","din":"dinka","dje":"dżerma","doi":"dogri","dsb":"dolnołużycki","dtp":"dusun centralny","dua":"duala","dum":"średniowieczny niderlandzki","dv":"malediwski","dyo":"diola","dyu":"diula","dz":"dzongkha","dzg":"dazaga","ebu":"embu","ee":"ewe","efi":"efik","egl":"emilijski","egy":"staroegipski","eka":"ekajuk","el":"grecki","elx":"elamicki","en":"angielski","en-AU":"australijski angielski","en-CA":"kanadyjski angielski","en-GB":"brytyjski angielski","en-US":"amerykański angielski","enm":"średnioangielski","eo":"esperanto","es":"hiszpański","es-419":"amerykański hiszpański","es-ES":"europejski hiszpański","es-MX":"meksykański hiszpański","esu":"yupik środkowosyberyjski","et":"estoński","eu":"baskijski","ewo":"ewondo","ext":"estremadurski","fa":"perski","fa-AF":"dari","fan":"fang","fat":"fanti","ff":"fulani","fi":"fiński","fil":"filipino","fit":"meänkieli","fj":"fidżijski","fo":"farerski","fon":"fon","fr":"francuski","fr-CA":"kanadyjski francuski","fr-CH":"szwajcarski francuski","frc":"cajuński","frm":"średniofrancuski","fro":"starofrancuski","frp":"franko-prowansalski","frr":"północnofryzyjski","frs":"wschodniofryzyjski","fur":"friulski","fy":"zachodniofryzyjski","ga":"irlandzki","gaa":"ga","gag":"gagauski","gan":"gan","gay":"gayo","gba":"gbaya","gbz":"zaratusztriański dari","gd":"szkocki gaelicki","gez":"gyyz","gil":"gilbertański","gl":"galicyjski","glk":"giliański","gmh":"średnio-wysoko-niemiecki","gn":"guarani","goh":"staro-wysoko-niemiecki","gom":"konkani (Goa)","gon":"gondi","gor":"gorontalo","got":"gocki","grb":"grebo","grc":"starogrecki","gsw":"szwajcarski niemiecki","gu":"gudżarati","guc":"wayúu","gur":"frafra","guz":"gusii","gv":"manx","gwi":"gwichʼin","ha":"hausa","hai":"haida","hak":"hakka","haw":"hawajski","he":"hebrajski","hi":"hindi","hif":"hindi fidżyjskie","hil":"hiligaynon","hit":"hetycki","hmn":"hmong","ho":"hiri motu","hr":"chorwacki","hsb":"górnołużycki","hsn":"xiang","ht":"kreolski haitański","hu":"węgierski","hup":"hupa","hy":"ormiański","hz":"herero","ia":"interlingua","iba":"iban","ibb":"ibibio","id":"indonezyjski","ie":"interlingue","ig":"igbo","ii":"syczuański","ik":"inupiak","ilo":"ilokano","inh":"inguski","io":"ido","is":"islandzki","it":"włoski","iu":"inuktitut","izh":"ingryjski","ja":"japoński","jam":"jamajski","jbo":"lojban","jgo":"ngombe","jmc":"machame","jpr":"judeo-perski","jrb":"judeoarabski","jut":"jutlandzki","jv":"jawajski","ka":"gruziński","kaa":"karakałpacki","kab":"kabylski","kac":"kaczin","kaj":"jju","kam":"kamba","kaw":"kawi","kbd":"kabardyjski","kbl":"kanembu","kcg":"tyap","kde":"makonde","kea":"kreolski Wysp Zielonego Przylądka","ken":"kenyang","kfo":"koro","kg":"kongo","kgp":"kaingang","kha":"khasi","kho":"chotański","khq":"koyra chiini","khw":"khowar","ki":"kikuju","kiu":"kirmandżki","kj":"kwanyama","kk":"kazachski","kkj":"kako","kl":"grenlandzki","kln":"kalenjin","km":"khmerski","kmb":"kimbundu","kn":"kannada","ko":"koreański","koi":"komi-permiacki","kok":"konkani","kos":"kosrae","kpe":"kpelle","kr":"kanuri","krc":"karaczajsko-bałkarski","kri":"krio","krj":"kinaraya","krl":"karelski","kru":"kurukh","ks":"kaszmirski","ksb":"sambala","ksf":"bafia","ksh":"gwara kolońska","ku":"kurdyjski","kum":"kumycki","kut":"kutenai","kv":"komi","kw":"kornijski","ky":"kirgiski","la":"łaciński","lad":"ladyński","lag":"langi","lah":"lahnda","lam":"lamba","lb":"luksemburski","lez":"lezgijski","lfn":"Lingua Franca Nova","lg":"ganda","li":"limburski","lij":"liguryjski","liv":"liwski","lkt":"lakota","lmo":"lombardzki","ln":"lingala","lo":"laotański","lol":"mongo","lou":"kreolski luizjański","loz":"lozi","lrc":"luryjski północny","lt":"litewski","ltg":"łatgalski","lu":"luba-katanga","lua":"luba-lulua","lui":"luiseno","lun":"lunda","luo":"luo","lus":"mizo","luy":"luhya","lv":"łotewski","lzh":"chiński klasyczny","lzz":"lazyjski","mad":"madurski","maf":"mafa","mag":"magahi","mai":"maithili","mak":"makasar","man":"mandingo","mas":"masajski","mde":"maba","mdf":"moksza","mdr":"mandar","men":"mende","mer":"meru","mfe":"kreolski Mauritiusa","mg":"malgaski","mga":"średnioirlandzki","mgh":"makua","mgo":"meta","mh":"marszalski","mi":"maoryjski","mic":"mikmak","min":"minangkabu","mk":"macedoński","ml":"malajalam","mn":"mongolski","mnc":"manchu","mni":"manipuri","moh":"mohawk","mos":"mossi","mr":"marathi","mrj":"zachodniomaryjski","ms":"malajski","mt":"maltański","mua":"mundang","mul":"wiele języków","mus":"krik","mwl":"mirandyjski","mwr":"marwari","mwv":"mentawai","my":"birmański","mye":"myene","myv":"erzja","mzn":"mazanderański","na":"nauruański","nan":"minnański","nap":"neapolitański","naq":"nama","nb":"norweski (bokmål)","nd":"ndebele północny","nds":"dolnoniemiecki","nds-NL":"dolnosaksoński","ne":"nepalski","new":"newarski","ng":"ndonga","nia":"nias","niu":"niue","njo":"ao","nl":"niderlandzki","nl-BE":"flamandzki","nmg":"ngumba","nn":"norweski (nynorsk)","nnh":"ngiemboon","no":"norweski","nog":"nogajski","non":"staronordyjski","nov":"novial","nqo":"n’ko","nr":"ndebele południowy","nso":"sotho północny","nus":"nuer","nv":"nawaho","nwc":"newarski klasyczny","ny":"njandża","nym":"niamwezi","nyn":"nyankole","nyo":"nyoro","nzi":"nzema","oc":"oksytański","oj":"odżibwa","om":"oromo","or":"orija","os":"osetyjski","osa":"osage","ota":"osmańsko-turecki","pa":"pendżabski","pag":"pangasinan","pal":"pahlavi","pam":"pampango","pap":"papiamento","pau":"palau","pcd":"pikardyjski","pcm":"pidżyn nigeryjski","pdc":"pensylwański","pdt":"plautdietsch","peo":"staroperski","pfl":"palatynacki","phn":"fenicki","pi":"palijski","pl":"polski","pms":"piemoncki","pnt":"pontyjski","pon":"ponpejski","prg":"pruski","pro":"staroprowansalski","ps":"paszto","pt":"portugalski","pt-BR":"brazylijski portugalski","pt-PT":"europejski portugalski","qu":"keczua","quc":"kicze","qug":"keczua górski (Chimborazo)","raj":"radźasthani","rap":"rapanui","rar":"rarotonga","rgn":"romagnol","rif":"tarifit","rm":"retoromański","rn":"rundi","ro":"rumuński","ro-MD":"mołdawski","rof":"rombo","rom":"cygański","root":"język rdzenny","rtm":"rotumański","ru":"rosyjski","rue":"rusiński","rug":"roviana","rup":"arumuński","rw":"kinya-ruanda","rwk":"rwa","sa":"sanskryt","sad":"sandawe","sah":"jakucki","sam":"samarytański aramejski","saq":"samburu","sas":"sasak","sat":"santali","saz":"saurasztryjski","sba":"ngambay","sbp":"sangu","sc":"sardyński","scn":"sycylijski","sco":"scots","sd":"sindhi","sdc":"sassarski","sdh":"południowokurdyjski","se":"północnolapoński","see":"seneka","seh":"sena","sei":"seri","sel":"selkupski","ses":"koyraboro senni","sg":"sango","sga":"staroirlandzki","sgs":"żmudzki","sh":"serbsko-chorwacki","shi":"tashelhiyt","shn":"szan","shu":"arabski (Czad)","si":"syngaleski","sid":"sidamo","sk":"słowacki","sl":"słoweński","sli":"dolnośląski","sly":"selayar","sm":"samoański","sma":"południowolapoński","smj":"lule","smn":"inari","sms":"skolt","sn":"shona","snk":"soninke","so":"somalijski","sog":"sogdyjski","sq":"albański","sr":"serbski","srn":"sranan tongo","srr":"serer","ss":"suazi","ssy":"saho","st":"sotho południowy","stq":"fryzyjski saterlandzki","su":"sundajski","suk":"sukuma","sus":"susu","sux":"sumeryjski","sv":"szwedzki","sw":"suahili","sw-CD":"kongijski suahili","swb":"komoryjski","syc":"syriacki","syr":"syryjski","szl":"śląski","ta":"tamilski","tcy":"tulu","te":"telugu","tem":"temne","teo":"ateso","ter":"tereno","tet":"tetum","tg":"tadżycki","th":"tajski","ti":"tigrinia","tig":"tigre","tiv":"tiw","tk":"turkmeński","tkl":"tokelau","tkr":"cachurski","tl":"tagalski","tlh":"klingoński","tli":"tlingit","tly":"tałyski","tmh":"tamaszek","tn":"setswana","to":"tonga","tog":"tonga (Niasa)","tpi":"tok pisin","tr":"turecki","tru":"turoyo","trv":"taroko","ts":"tsonga","tsd":"cakoński","tsi":"tsimshian","tt":"tatarski","ttt":"tacki","tum":"tumbuka","tvl":"tuvalu","tw":"twi","twq":"tasawaq","ty":"tahitański","tyv":"tuwiński","tzm":"tamazight (Atlas Środkowy)","udm":"udmurcki","ug":"ujgurski","uga":"ugarycki","uk":"ukraiński","umb":"umbundu","und":"nieznany język","ur":"urdu","uz":"uzbecki","vai":"wai","ve":"venda","vec":"wenecki","vep":"wepski","vi":"wietnamski","vls":"zachodnioflamandzki","vmf":"meński frankoński","vo":"wolapik","vot":"wotiacki","vro":"võro","vun":"vunjo","wa":"waloński","wae":"walser","wal":"wolayta","war":"waraj","was":"washo","wbp":"warlpiri","wo":"wolof","wuu":"wu","xal":"kałmucki","xh":"khosa","xmf":"megrelski","xog":"soga","yao":"yao","yap":"japski","yav":"yangben","ybb":"yemba","yi":"jidysz","yo":"joruba","yrl":"nheengatu","yue":"kantoński","za":"czuang","zap":"zapotecki","zbl":"bliss","zea":"zelandzki","zen":"zenaga","zgh":"standardowy marokański tamazight","zh":"chiński","zh-Hans":"chiński uproszczony","zh-Hant":"chiński tradycyjny","zu":"zulu","zun":"zuni","zxx":"brak treści o charakterze językowym","zza":"zazaki"},"short":{"az":"azerski","en-GB":"brytyjski angielski","en-US":"amerykański angielski"},"narrow":{}},"region":{"long":{"142":"Azja","143":"Azja Środkowa","145":"Azja Zachodnia","150":"Europa","151":"Europa Wschodnia","154":"Europa Północna","155":"Europa Zachodnia","202":"Afryka Subsaharyjska","419":"Ameryka Łacińska","001":"świat","002":"Afryka","003":"Ameryka Północna","005":"Ameryka Południowa","009":"Oceania","011":"Afryka Zachodnia","013":"Ameryka Środkowa","014":"Afryka Wschodnia","015":"Afryka Północna","017":"Afryka Środkowa","018":"Afryka Południowa","019":"Ameryka","021":"Ameryka Północna (USA, Kanada)","029":"Karaiby","030":"Azja Wschodnia","034":"Azja Południowa","035":"Azja Południowo-Wschodnia","039":"Europa Południowa","053":"Australazja","054":"Melanezja","057":"Region Mikronezji","061":"Polinezja","AC":"Wyspa Wniebowstąpienia","AD":"Andora","AE":"Zjednoczone Emiraty Arabskie","AF":"Afganistan","AG":"Antigua i Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"Antarktyda","AR":"Argentyna","AS":"Samoa Amerykańskie","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"Wyspy Alandzkie","AZ":"Azerbejdżan","BA":"Bośnia i Hercegowina","BB":"Barbados","BD":"Bangladesz","BE":"Belgia","BF":"Burkina Faso","BG":"Bułgaria","BH":"Bahrajn","BI":"Burundi","BJ":"Benin","BL":"Saint-Barthélemy","BM":"Bermudy","BN":"Brunei","BO":"Boliwia","BQ":"Niderlandy Karaibskie","BR":"Brazylia","BS":"Bahamy","BT":"Bhutan","BV":"Wyspa Bouveta","BW":"Botswana","BY":"Białoruś","BZ":"Belize","CA":"Kanada","CC":"Wyspy Kokosowe","CD":"Demokratyczna Republika Konga","CF":"Republika Środkowoafrykańska","CG":"Kongo","CH":"Szwajcaria","CI":"Côte d’Ivoire","CK":"Wyspy Cooka","CL":"Chile","CM":"Kamerun","CN":"Chiny","CO":"Kolumbia","CP":"Wyspa Clippertona","CR":"Kostaryka","CU":"Kuba","CV":"Republika Zielonego Przylądka","CW":"Curaçao","CX":"Wyspa Bożego Narodzenia","CY":"Cypr","CZ":"Czechy","DE":"Niemcy","DG":"Diego Garcia","DJ":"Dżibuti","DK":"Dania","DM":"Dominika","DO":"Dominikana","DZ":"Algieria","EA":"Ceuta i Melilla","EC":"Ekwador","EE":"Estonia","EG":"Egipt","EH":"Sahara Zachodnia","ER":"Erytrea","ES":"Hiszpania","ET":"Etiopia","EU":"Unia Europejska","EZ":"strefa euro","FI":"Finlandia","FJ":"Fidżi","FK":"Falklandy","FM":"Mikronezja","FO":"Wyspy Owcze","FR":"Francja","GA":"Gabon","GB":"Wielka Brytania","GD":"Grenada","GE":"Gruzja","GF":"Gujana Francuska","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Grenlandia","GM":"Gambia","GN":"Gwinea","GP":"Gwadelupa","GQ":"Gwinea Równikowa","GR":"Grecja","GS":"Georgia Południowa i Sandwich Południowy","GT":"Gwatemala","GU":"Guam","GW":"Gwinea Bissau","GY":"Gujana","HK":"SRA Hongkong (Chiny)","HM":"Wyspy Heard i McDonalda","HN":"Honduras","HR":"Chorwacja","HT":"Haiti","HU":"Węgry","IC":"Wyspy Kanaryjskie","ID":"Indonezja","IE":"Irlandia","IL":"Izrael","IM":"Wyspa Man","IN":"Indie","IO":"Brytyjskie Terytorium Oceanu Indyjskiego","IQ":"Irak","IR":"Iran","IS":"Islandia","IT":"Włochy","JE":"Jersey","JM":"Jamajka","JO":"Jordania","JP":"Japonia","KE":"Kenia","KG":"Kirgistan","KH":"Kambodża","KI":"Kiribati","KM":"Komory","KN":"Saint Kitts i Nevis","KP":"Korea Północna","KR":"Korea Południowa","KW":"Kuwejt","KY":"Kajmany","KZ":"Kazachstan","LA":"Laos","LB":"Liban","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Litwa","LU":"Luksemburg","LV":"Łotwa","LY":"Libia","MA":"Maroko","MC":"Monako","MD":"Mołdawia","ME":"Czarnogóra","MF":"Saint-Martin","MG":"Madagaskar","MH":"Wyspy Marshalla","MK":"Macedonia Północna","ML":"Mali","MM":"Mjanma (Birma)","MN":"Mongolia","MO":"SRA Makau (Chiny)","MP":"Mariany Północne","MQ":"Martynika","MR":"Mauretania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Malediwy","MW":"Malawi","MX":"Meksyk","MY":"Malezja","MZ":"Mozambik","NA":"Namibia","NC":"Nowa Kaledonia","NE":"Niger","NF":"Norfolk","NG":"Nigeria","NI":"Nikaragua","NL":"Holandia","NO":"Norwegia","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"Nowa Zelandia","OM":"Oman","PA":"Panama","PE":"Peru","PF":"Polinezja Francuska","PG":"Papua-Nowa Gwinea","PH":"Filipiny","PK":"Pakistan","PL":"Polska","PM":"Saint-Pierre i Miquelon","PN":"Pitcairn","PR":"Portoryko","PS":"Terytoria Palestyńskie","PT":"Portugalia","PW":"Palau","PY":"Paragwaj","QA":"Katar","QO":"Oceania — wyspy dalekie","RE":"Reunion","RO":"Rumunia","RS":"Serbia","RU":"Rosja","RW":"Rwanda","SA":"Arabia Saudyjska","SB":"Wyspy Salomona","SC":"Seszele","SD":"Sudan","SE":"Szwecja","SG":"Singapur","SH":"Wyspa Świętej Heleny","SI":"Słowenia","SJ":"Svalbard i Jan Mayen","SK":"Słowacja","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Surinam","SS":"Sudan Południowy","ST":"Wyspy Świętego Tomasza i Książęca","SV":"Salwador","SX":"Sint Maarten","SY":"Syria","SZ":"Eswatini","TA":"Tristan da Cunha","TC":"Turks i Caicos","TD":"Czad","TF":"Francuskie Terytoria Południowe i Antarktyczne","TG":"Togo","TH":"Tajlandia","TJ":"Tadżykistan","TK":"Tokelau","TL":"Timor Wschodni","TM":"Turkmenistan","TN":"Tunezja","TO":"Tonga","TR":"Turcja","TT":"Trynidad i Tobago","TV":"Tuvalu","TW":"Tajwan","TZ":"Tanzania","UA":"Ukraina","UG":"Uganda","UM":"Dalekie Wyspy Mniejsze Stanów Zjednoczonych","UN":"Organizacja Narodów Zjednoczonych","US":"Stany Zjednoczone","UY":"Urugwaj","UZ":"Uzbekistan","VA":"Watykan","VC":"Saint Vincent i Grenadyny","VE":"Wenezuela","VG":"Brytyjskie Wyspy Dziewicze","VI":"Wyspy Dziewicze Stanów Zjednoczonych","VN":"Wietnam","VU":"Vanuatu","WF":"Wallis i Futuna","WS":"Samoa","XA":"Pseudoakcenty","XB":"Pseudodwukierunkowe","XK":"Kosowo","YE":"Jemen","YT":"Majotta","ZA":"Republika Południowej Afryki","ZM":"Zambia","ZW":"Zimbabwe","ZZ":"Nieznany region"},"short":{"GB":"Wlk. Bryt.","HK":"Hongkong","MO":"Makau","PS":"Palestyna","UN":"ONZ","US":"USA"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"arabskie","Aran":"nastaliq","Armi":"armi","Armn":"ormiańskie","Avst":"awestyjskie","Bali":"balijskie","Bamu":"bamun","Bass":"Bass","Batk":"batak","Beng":"bengalskie","Bhks":"Bhks","Blis":"symbole Blissa","Bopo":"bopomofo","Brah":"brahmi","Brai":"Braille’a","Bugi":"bugińskie","Buhd":"buhid","Cakm":"chakma","Cans":"zunifikowane symbole kanadyjskich autochtonów","Cari":"karyjskie","Cham":"czamskie","Cher":"czirokeski","Chrs":"Chrs","Cirt":"cirth","Copt":"koptyjskie","Cprt":"cypryjskie","Cyrl":"cyrylica","Cyrs":"cyrylica staro-cerkiewno-słowiańska","Deva":"dewanagari","Diak":"Diak","Dogr":"Dogr","Dsrt":"deseret","Dupl":"Dupl","Egyd":"egipskie demotyczne","Egyh":"egipskie hieratyczne","Egyp":"hieroglify egipskie","Elba":"Elba","Elym":"Elym","Ethi":"etiopskie","Geok":"gruzińskie chucuri","Geor":"gruzińskie","Glag":"głagolica","Gong":"Gong","Gonm":"Gonm","Goth":"gotyckie","Gran":"Gran","Grek":"greckie","Gujr":"gudżarati","Guru":"gurmukhi","Hanb":"chińskie z bopomofo","Hang":"hangul","Hani":"chińskie","Hano":"hanunoo","Hans":"uproszczone","Hant":"tradycyjne","Hatr":"Hatr","Hebr":"hebrajskie","Hira":"hiragana","Hluw":"Hluw","Hmng":"pahawh hmong","Hmnp":"Hmnp","Hrkt":"sylabariusze japońskie","Hung":"starowęgierskie","Inds":"indus","Ital":"starowłoskie","Jamo":"jamo","Java":"jawajskie","Jpan":"japońskie","Kali":"kayah li","Kana":"katakana","Khar":"charosti","Khmr":"khmerskie","Khoj":"Khoj","Kits":"Kits","Knda":"kannada","Kore":"koreańskie","Kthi":"kaithi","Lana":"lanna","Laoo":"laotańskie","Latf":"łaciński - fraktura","Latg":"łaciński - odmiana gaelicka","Latn":"łacińskie","Lepc":"lepcha","Limb":"limbu","Lina":"linearne A","Linb":"linearne B","Lisu":"Lisu","Lyci":"likijskie","Lydi":"lidyjskie","Mahj":"Mahj","Maka":"Maka","Mand":"mandejskie","Mani":"manichejskie","Marc":"Marc","Maya":"hieroglify Majów","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"meroickie","Mlym":"malajalam","Modi":"Modi","Mong":"mongolskie","Moon":"Moon’a","Mroo":"Mroo","Mtei":"meitei mayek","Mult":"Mult","Mymr":"birmańskie","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"n’ko","Nshu":"Nshu","Ogam":"ogham","Olck":"ol chiki","Orkh":"orchońskie","Orya":"orija","Osge":"Osge","Osma":"osmanya","Palm":"Palm","Pauc":"Pauc","Perm":"staropermskie","Phag":"phags-pa","Phli":"inskrypcyjne pahlawi","Phlp":"pahlawi psałterzowy","Phlv":"pahlawi książkowy","Phnx":"fenicki","Plrd":"fonetyczny Pollard’a","Prti":"partyjski inskrypcyjny","Qaag":"zawgyi","Rjng":"rejang","Rohg":"Rohg","Roro":"rongorongo","Runr":"runiczne","Samr":"samarytański","Sara":"sarati","Sarb":"Sarb","Saur":"saurashtra","Sgnw":"pismo znakowe","Shaw":"shawa","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"syngaleskie","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"sundajskie","Sylo":"syloti nagri","Syrc":"syryjski","Syre":"syriacki estrangelo","Syrj":"syryjski (odmiana zachodnia)","Syrn":"syryjski (odmiana wschodnia)","Tagb":"tagbanwa","Takr":"Takr","Tale":"tai le","Talu":"nowy tai lue","Taml":"tamilskie","Tang":"Tang","Tavt":"tai viet","Telu":"telugu","Teng":"tengwar","Tfng":"tifinagh (berberski)","Tglg":"tagalog","Thaa":"taana","Thai":"tajskie","Tibt":"tybetańskie","Tirh":"Tirh","Ugar":"ugaryckie","Vaii":"vai","Visp":"Visible Speech","Wara":"Wara","Wcho":"Wcho","Xpeo":"staroperskie","Xsux":"klinowe sumero-akadyjskie","Yezi":"Yezi","Yiii":"yi","Zanb":"Zanb","Zinh":"dziedziczone","Zmth":"notacja matematyczna","Zsye":"emoji","Zsym":"symbole","Zxxx":"język bez systemu pisma","Zyyy":"wspólne","Zzzz":"nieznane pismo"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"peseta andorska","AED":"dirham ZEA","AFA":"afgani (1927–2002)","AFN":"afgani afgańskie","ALK":"ALK","ALL":"lek albański","AMD":"dram armeński","ANG":"gulden antylski","AOA":"kwanza angolska","AOK":"kwanza angolańska (1977–1990)","AON":"nowa kwanza angolańska (1990–2000)","AOR":"kwanza angolańska Reajustado (1995–1999)","ARA":"austral argentyński","ARL":"ARL","ARM":"ARM","ARP":"peso argentyńskie (1983–1985)","ARS":"peso argentyńskie","ATS":"szyling austriacki","AUD":"dolar australijski","AWG":"florin arubański","AZM":"manat azerbejdżański","AZN":"manat azerski","BAD":"dinar Bośni i Hercegowiny","BAM":"marka zamienna Bośni i Hercegowiny","BAN":"BAN","BBD":"dolar Barbadosu","BDT":"taka bengalska","BEC":"frank belgijski (zamienny)","BEF":"frank belgijski","BEL":"frank belgijski (finansowy)","BGL":"lew bułgarski wymienny","BGM":"lew bułgarski socjalistyczny","BGN":"lew bułgarski","BGO":"lew bułgarski (1879–1952)","BHD":"dinar bahrański","BIF":"frank burundyjski","BMD":"dolar bermudzki","BND":"dolar brunejski","BOB":"boliviano boliwijskie","BOL":"BOL","BOP":"peso boliwijskie","BOV":"mvdol boliwijski","BRB":"cruzeiro novo brazylijskie (1967–1986)","BRC":"cruzado brazylijskie","BRE":"cruzeiro brazylijskie (1990–1993)","BRL":"real brazylijski","BRN":"nowe cruzado brazylijskie","BRR":"cruzeiro brazylijskie","BRZ":"BRZ","BSD":"dolar bahamski","BTN":"ngultrum bhutański","BUK":"kyat birmański","BWP":"pula botswańska","BYB":"rubel białoruski (1994–1999)","BYN":"rubel białoruski","BYR":"rubel białoruski (2000–2016)","BZD":"dolar belizeński","CAD":"dolar kanadyjski","CDF":"frank kongijski","CHE":"CHE","CHF":"frank szwajcarski","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"peso chilijskie","CNH":"juan chiński (rynek zewnętrzny)","CNX":"CNX","CNY":"juan chiński","COP":"peso kolumbijskie","COU":"COU","CRC":"colon kostarykański","CSD":"stary dinar serbski","CSK":"korona czechosłowacka","CUC":"peso kubańskie wymienialne","CUP":"peso kubańskie","CVE":"escudo zielonoprzylądkowe","CYP":"funt cypryjski","CZK":"korona czeska","DDM":"wschodnia marka wschodnioniemiecka","DEM":"marka niemiecka","DJF":"frank dżibutyjski","DKK":"korona duńska","DOP":"peso dominikańskie","DZD":"dinar algierski","ECS":"sucre ekwadorski","ECV":"ECV","EEK":"korona estońska","EGP":"funt egipski","ERN":"nakfa erytrejska","ESA":"peseta hiszpańska (Konto A)","ESB":"peseta hiszpańska (konto wymienne)","ESP":"peseta hiszpańska","ETB":"birr etiopski","EUR":"euro","FIM":"marka fińska","FJD":"dolar fidżyjski","FKP":"funt falklandzki","FRF":"frank francuski","GBP":"funt szterling","GEK":"kupon gruziński larit","GEL":"lari gruzińskie","GHC":"cedi ghańskie (1979–2007)","GHS":"cedi ghańskie","GIP":"funt gibraltarski","GMD":"dalasi gambijskie","GNF":"frank gwinejski","GNS":"syli gwinejskie","GQE":"ekwele gwinejskie Gwinei Równikowej","GRD":"drachma grecka","GTQ":"quetzal gwatemalski","GWE":"escudo Gwinea Portugalska","GWP":"peso Guinea-Bissau","GYD":"dolar gujański","HKD":"dolar hongkoński","HNL":"lempira honduraska","HRD":"dinar chorwacki","HRK":"kuna chorwacka","HTG":"gourde haitański","HUF":"forint węgierski","IDR":"rupia indonezyjska","IEP":"funt irlandzki","ILP":"funt izraelski","ILR":"ILR","ILS":"nowy szekel izraelski","INR":"rupia indyjska","IQD":"dinar iracki","IRR":"rial irański","ISJ":"ISJ","ISK":"korona islandzka","ITL":"lir włoski","JMD":"dolar jamajski","JOD":"dinar jordański","JPY":"jen japoński","KES":"szyling kenijski","KGS":"som kirgiski","KHR":"riel kambodżański","KMF":"frank komoryjski","KPW":"won północnokoreański","KRH":"KRH","KRO":"KRO","KRW":"won południowokoreański","KWD":"dinar kuwejcki","KYD":"dolar kajmański","KZT":"tenge kazachskie","LAK":"kip laotański","LBP":"funt libański","LKR":"rupia lankijska","LRD":"dolar liberyjski","LSL":"loti Lesoto","LTL":"lit litewski","LTT":"talon litewski","LUC":"LUC","LUF":"frank luksemburski","LUL":"LUL","LVL":"łat łotewski","LVR":"rubel łotewski","LYD":"dinar libijski","MAD":"dirham marokański","MAF":"frank marokański","MCF":"MCF","MDC":"MDC","MDL":"lej mołdawski","MGA":"ariary malgaski","MGF":"frank malgaski","MKD":"denar macedoński","MKN":"MKN","MLF":"frank malijski","MMK":"kiat birmański","MNT":"tugrik mongolski","MOP":"pataca Makau","MRO":"ouguiya mauretańska (1973–2017)","MRU":"ugija mauretańska","MTL":"lira maltańska","MTP":"funt maltański","MUR":"rupia maurytyjska","MVP":"MVP","MVR":"rupia malediwska","MWK":"kwacha malawijska","MXN":"peso meksykańskie","MXP":"peso srebrne meksykańskie (1861–1992)","MXV":"MXV","MYR":"ringgit malezyjski","MZE":"escudo mozambickie","MZM":"metical Mozambik","MZN":"metical mozambicki","NAD":"dolar namibijski","NGN":"naira nigeryjska","NIC":"cordoba nikaraguańska (1988–1991)","NIO":"cordoba nikaraguańska","NLG":"gulden holenderski","NOK":"korona norweska","NPR":"rupia nepalska","NZD":"dolar nowozelandzki","OMR":"rial omański","PAB":"balboa panamski","PEI":"inti peruwiański","PEN":"sol peruwiański","PES":"sol peruwiański (1863–1965)","PGK":"kina papuańska","PHP":"peso filipińskie","PKR":"rupia pakistańska","PLN":"złoty polski","PLZ":"złoty polski (1950–1995)","PTE":"escudo portugalskie","PYG":"guarani paragwajskie","QAR":"rial katarski","RHD":"dolar rodezyjski","ROL":"lej rumuński (1952–2006)","RON":"lej rumuński","RSD":"dinar serbski","RUB":"rubel rosyjski","RUR":"rubel rosyjski (1991–1998)","RWF":"frank ruandyjski","SAR":"rial saudyjski","SBD":"dolar Wysp Salomona","SCR":"rupia seszelska","SDD":"dinar sudański","SDG":"funt sudański","SDP":"funt sudański (1957–1998)","SEK":"korona szwedzka","SGD":"dolar singapurski","SHP":"funt Świętej Heleny","SIT":"tolar słoweński","SKK":"korona słowacka","SLL":"leone sierraleoński","SOS":"szyling somalijski","SRD":"dolar surinamski","SRG":"gulden surinamski","SSP":"funt południowosudański","STD":"dobra Wysp Świętego Tomasza i Książęcej (1977–2017)","STN":"dobra Wysp Świętego Tomasza i Książęcej","SUR":"rubel radziecki","SVC":"colon salwadorski","SYP":"funt syryjski","SZL":"lilangeni Suazi","THB":"baht tajski","TJR":"rubel tadżycki","TJS":"somoni tadżyckie","TMM":"manat turkmeński (1993–2009)","TMT":"manat turkmeński","TND":"dinar tunezyjski","TOP":"pa’anga tongijska","TPE":"escudo timorskie","TRL":"lira turecka (1922–2005)","TRY":"lira turecka","TTD":"dolar Trynidadu i Tobago","TWD":"nowy dolar tajwański","TZS":"szyling tanzański","UAH":"hrywna ukraińska","UAK":"karbowaniec ukraiński","UGS":"szyling ugandyjski (1966–1987)","UGX":"szyling ugandyjski","USD":"dolar amerykański","USN":"USN","USS":"USS","UYI":"UYI","UYP":"peso urugwajskie (1975–1993)","UYU":"peso urugwajskie","UYW":"UYW","UZS":"som uzbecki","VEB":"boliwar wenezuelski (1871–2008)","VEF":"boliwar wenezuelski (2008–2018)","VES":"boliwar wenezuelski","VND":"dong wietnamski","VNN":"VNN","VUV":"vatu wanuackie","WST":"tala samoańskie","XAF":"frank CFA BEAC","XAG":"srebro","XAU":"złoto","XBA":"XBA","XBB":"XBB","XBC":"europejska jednostka rozrachunkowa (XBC)","XBD":"europejska jednostka rozrachunkowa (XBD)","XCD":"dolar wschodniokaraibski","XDR":"specjalne prawa ciągnienia","XEU":"ECU","XFO":"frank złoty francuski","XFU":"UIC-frank francuski","XOF":"frank CFA","XPD":"pallad","XPF":"frank CFP","XPT":"platyna","XRE":"XRE","XSU":"XSU","XTS":"testowy kod waluty","XUA":"XUA","XXX":"nieznana waluta","YDD":"dinar jemeński","YER":"rial jemeński","YUD":"YUD","YUM":"nowy dinar jugosławiański","YUN":"dinar jugosławiański wymienny","YUR":"YUR","ZAL":"rand południowoafrykański (finansowy)","ZAR":"rand południowoafrykański","ZMK":"kwacha zambijska (1968–2012)","ZMW":"kwacha zambijska","ZRN":"nowy zair zairski","ZRZ":"zair zairski","ZWD":"dolar Zimbabwe (1980–2008)","ZWL":"dolar Zimbabwe (2009)","ZWR":"dolar Zimbabwe (2008)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["pl"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
