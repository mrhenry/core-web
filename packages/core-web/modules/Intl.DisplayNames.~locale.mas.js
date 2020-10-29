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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("mas").length
)) {
// Intl.DisplayNames.~locale.mas
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"mas":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"nkʉtʉ́k ɔ́ɔ̄ lAkan","am":"nkʉtʉ́k ɔ́ɔ̄ lAmhari","ar":"nkʉtʉ́k ɔ́ɔ̄ lmarabu","ar-001":"nkʉtʉ́k ɔ́ɔ̄ lmarabu (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"nkʉtʉ́k ɔ́ɔ̄ lBelarusi","bem":"bem","bez":"bez","bg":"nkʉtʉ́k ɔ́ɔ̄ lBulgaria","bm":"bm","bn":"lnkʉtʉ́k ɔ́ɔ̄ lBengali","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"nkʉtʉ́k ɔ́ɔ̄ lcheki","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"nkʉtʉ́k ɔ́ɔ̄ ljerumani","de-AT":"nkʉtʉ́k ɔ́ɔ̄ ljerumani (Austria)","de-CH":"nkʉtʉ́k ɔ́ɔ̄ ljerumani (Uswisi)","dje":"dje","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"nkʉtʉ́k ɔ́ɔ̄ lgiriki","en":"nkʉtʉ́k ɔ́ɔ̄ nkɨ́resa","en-AU":"nkʉtʉ́k ɔ́ɔ̄ nkɨ́resa (Australia)","en-CA":"nkʉtʉ́k ɔ́ɔ̄ nkɨ́resa (Kanada)","en-GB":"nkʉtʉ́k ɔ́ɔ̄ nkɨ́resa (Uingereza)","en-US":"nkʉtʉ́k ɔ́ɔ̄ nkɨ́resa (Marekani)","eo":"eo","es":"nkʉtʉ́k ɔ́ɔ̄ lspania","es-419":"nkʉtʉ́k ɔ́ɔ̄ lspania (419)","es-ES":"nkʉtʉ́k ɔ́ɔ̄ lspania (Hispania)","es-MX":"nkʉtʉ́k ɔ́ɔ̄ lspania (Meksiko)","et":"et","eu":"eu","ewo":"ewo","fa":"nkʉtʉ́k ɔ́ɔ̄ lpersia","fa-AF":"nkʉtʉ́k ɔ́ɔ̄ lpersia (Afuganistani)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"nkʉtʉ́k ɔ́ɔ̄ faransa","fr-CA":"nkʉtʉ́k ɔ́ɔ̄ faransa (Kanada)","fr-CH":"nkʉtʉ́k ɔ́ɔ̄ faransa (Uswisi)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"nkʉtʉ́k ɔ́ɔ̄ hausa","haw":"haw","he":"he","hi":"nkʉtʉ́k ɔ́ɔ̄ lmoindi","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"nkʉtʉ́k ɔ́ɔ̄ lhungari","hy":"hy","ia":"ia","id":"nkʉtʉ́k ɔ́ɔ̄ Indonesia","ig":"nkʉtʉ́k ɔ́ɔ̄ Igbo","ii":"ii","is":"is","it":"nkʉtʉ́k ɔ́ɔ̄ ltalian","ja":"nkʉtʉ́k ɔ́ɔ̄ japani","jgo":"jgo","jmc":"jmc","jv":"nkʉtʉ́k ɔ́ɔ̄ ljana","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"nkʉtʉ́k ɔ́ɔ̄ lkambodia","kn":"kn","ko":"nkʉtʉ́k ɔ́ɔ̄ lkorea","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"Maa","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"nkʉtʉ́k ɔ́ɔ̄ malay","mt":"mt","mua":"mua","mul":"mul","my":"nkʉtʉ́k ɔ́ɔ̄ lBurma","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Uholanzi)","ne":"nkʉtʉ́k ɔ́ɔ̄ lnepali","nl":"nkʉtʉ́k ɔ́ɔ̄ lduchi","nl-BE":"nkʉtʉ́k ɔ́ɔ̄ lduchi (Ubelgiji)","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"nkʉtʉ́k ɔ́ɔ̄ lpunjabi","pcm":"pcm","pl":"nkʉtʉ́k ɔ́ɔ̄ lpoland","prg":"prg","ps":"ps","pt":"nkʉtʉ́k ɔ́ɔ̄ lportuguese","pt-BR":"nkʉtʉ́k ɔ́ɔ̄ lportuguese (Brazili)","pt-PT":"nkʉtʉ́k ɔ́ɔ̄ lportuguese (Ureno)","qu":"qu","rm":"rm","rn":"rn","ro":"nkʉtʉ́k ɔ́ɔ̄ lromania","ro-MD":"nkʉtʉ́k ɔ́ɔ̄ lromania (Moldova)","rof":"rof","root":"root","ru":"nkʉtʉ́k ɔ́ɔ̄ lrusi","rw":"nkʉtʉ́k ɔ́ɔ̄ lruwanda","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"nkʉtʉ́k ɔ́ɔ̄ lchumari","sq":"sq","sr":"sr","st":"st","su":"su","sv":"nkʉtʉ́k ɔ́ɔ̄ lswidi","sw":"sw","sw-CD":"sw (Jamhuri ya Kidemokrasia ya Kongo)","ta":"nkʉtʉ́k ɔ́ɔ̄ ltamil","te":"te","teo":"teo","tg":"tg","th":"nkʉtʉ́k ɔ́ɔ̄ ltai","ti":"ti","tk":"tk","to":"to","tr":"nkʉtʉ́k ɔ́ɔ̄ lturuki","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"nkʉtʉ́k ɔ́ɔ̄ lkrania","und":"und","ur":"nkʉtʉ́k ɔ́ɔ̄ lurdu","uz":"uz","vai":"vai","vi":"nkʉtʉ́k ɔ́ɔ̄ lvietinamu","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"nkʉtʉ́k ɔ́ɔ̄ lyoruba","yue":"yue","zgh":"zgh","zh":"nkʉtʉ́k ɔ́ɔ̄ lchina","zh-Hans":"nkʉtʉ́k ɔ́ɔ̄ lchina (Hans)","zh-Hant":"nkʉtʉ́k ɔ́ɔ̄ lchina (Hant)","zu":"nkʉtʉ́k ɔ́ɔ̄ lzulu","zxx":"zxx"},"short":{"az":"az","en-GB":"nkʉtʉ́k ɔ́ɔ̄ nkɨ́resa (Uingereza)","en-US":"nkʉtʉ́k ɔ́ɔ̄ nkɨ́resa (Marekani)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Andora","AE":"Falme za Kiarabu","AF":"Afuganistani","AG":"Antigua na Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"AQ","AR":"Ajentina","AS":"Samoa ya Marekani","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"AX","AZ":"Azabajani","BA":"Bosnia na Hezegovina","BB":"Babadosi","BD":"Bangladeshi","BE":"Ubelgiji","BF":"Bukinafaso","BG":"Bulgaria","BH":"Bahareni","BI":"Burundi","BJ":"Benini","BL":"BL","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"BQ","BR":"Brazili","BS":"Bahama","BT":"Butani","BV":"BV","BW":"Botswana","BY":"Belarusi","BZ":"Belize","CA":"Kanada","CC":"CC","CD":"Jamhuri ya Kidemokrasia ya Kongo","CF":"Jamhuri ya Afrika ya Kati","CG":"Kongo","CH":"Uswisi","CI":"Kodivaa","CK":"Visiwa vya Cook","CL":"Chile","CM":"Kameruni","CN":"China","CO":"Kolombia","CP":"CP","CR":"Kostarika","CU":"Kuba","CV":"Kepuvede","CW":"CW","CX":"CX","CY":"Kuprosi","CZ":"Jamhuri ya Cheki","DE":"Ujerumani","DG":"DG","DJ":"Jibuti","DK":"Denmaki","DM":"Dominika","DO":"Jamhuri ya Dominika","DZ":"Aljeria","EA":"EA","EC":"Ekwado","EE":"Estonia","EG":"Misri","EH":"EH","ER":"Eritrea","ES":"Hispania","ET":"Uhabeshi","EU":"EU","EZ":"EZ","FI":"Ufini","FJ":"Fiji","FK":"Visiwa vya Falkland","FM":"Mikronesia","FO":"FO","FR":"Ufaransa","GA":"Gaboni","GB":"Uingereza","GD":"Grenada","GE":"Jojia","GF":"Gwiyana ya Ufaransa","GG":"GG","GH":"Ghana","GI":"Jibralta","GL":"Grinlandi","GM":"Gambia","GN":"Gine","GP":"Gwadelupe","GQ":"Ginekweta","GR":"Ugiriki","GS":"GS","GT":"Gwatemala","GU":"Gwam","GW":"Ginebisau","GY":"Guyana","HK":"HK","HM":"HM","HN":"Hondurasi","HR":"Korasia","HT":"Haiti","HU":"Hungaria","IC":"IC","ID":"Indonesia","IE":"Ayalandi","IL":"Israeli","IM":"IM","IN":"India","IO":"Eneo la Uingereza katika Bahari Hindi","IQ":"Iraki","IR":"Uajemi","IS":"Aislandi","IT":"Italia","JE":"JE","JM":"Jamaika","JO":"Yordani","JP":"Japani","KE":"Kenya","KG":"Kirigizistani","KH":"Kambodia","KI":"Kiribati","KM":"Komoro","KN":"Santakitzi na Nevis","KP":"Korea Kaskazini","KR":"Korea Kusini","KW":"Kuwaiti","KY":"Visiwa vya Kayman","KZ":"Kazakistani","LA":"Laosi","LB":"Lebanoni","LC":"Santalusia","LI":"Lishenteni","LK":"Sirilanka","LR":"Liberia","LS":"Lesoto","LT":"Litwania","LU":"Lasembagi","LV":"Lativia","LY":"Libya","MA":"Moroko","MC":"Monako","MD":"Moldova","ME":"ME","MF":"MF","MG":"Bukini","MH":"Visiwa vya Marshal","MK":"MK","ML":"Mali","MM":"Myama","MN":"Mongolia","MO":"MO","MP":"Visiwa vya Mariana vya Kaskazini","MQ":"Martiniki","MR":"Moritania","MS":"Montserrati","MT":"Malta","MU":"Morisi","MV":"Modivu","MW":"Malawi","MX":"Meksiko","MY":"Malesia","MZ":"Msumbiji","NA":"Namibia","NC":"Nyukaledonia","NE":"Nijeri","NF":"Kisiwa cha Norfok","NG":"Nijeria","NI":"Nikaragwa","NL":"Uholanzi","NO":"Norwe","NP":"Nepali","NR":"Nauru","NU":"Niue","NZ":"Nyuzilandi","OM":"Omani","PA":"Panama","PE":"Peru","PF":"Polinesia ya Ufaransa","PG":"Papua","PH":"Filipino","PK":"Pakistani","PL":"Polandi","PM":"Santapieri na Mikeloni","PN":"Pitkairni","PR":"Pwetoriko","PS":"Ukingo wa Magharibi na Ukanda wa Gaza wa Palestina","PT":"Ureno","PW":"Palau","PY":"Paragwai","QA":"Katari","QO":"QO","RE":"Riyunioni","RO":"Romania","RS":"RS","RU":"Urusi","RW":"Rwanda","SA":"Saudi","SB":"Visiwa vya Solomon","SC":"Shelisheli","SD":"Sudani","SE":"Uswidi","SG":"Singapoo","SH":"Santahelena","SI":"Slovenia","SJ":"SJ","SK":"Slovakia","SL":"Siera Leoni","SM":"Samarino","SN":"Senegali","SO":"Somalia","SR":"Surinamu","SS":"SS","ST":"Sao Tome na Principe","SV":"Elsavado","SX":"SX","SY":"Siria","SZ":"Uswazi","TA":"TA","TC":"Visiwa vya Turki na Kaiko","TD":"Chadi","TF":"TF","TG":"Togo","TH":"Tailandi","TJ":"Tajikistani","TK":"Tokelau","TL":"Timori ya Mashariki","TM":"Turukimenistani","TN":"Tunisia","TO":"Tonga","TR":"Uturuki","TT":"Trinidad na Tobago","TV":"Tuvalu","TW":"Taiwani","TZ":"Tansania","UA":"Ukraini","UG":"Uganda","UM":"UM","UN":"UN","US":"Marekani","UY":"Urugwai","UZ":"Uzibekistani","VA":"Vatikani","VC":"Santavisenti na Grenadini","VE":"Venezuela","VG":"Visiwa vya Virgin vya Uingereza","VI":"Visiwa vya Virgin vya Marekani","VN":"Vietinamu","VU":"Vanuatu","WF":"Walis na Futuna","WS":"Samoa","XA":"XA","XB":"XB","XK":"XK","YE":"Yemeni","YT":"Mayotte","ZA":"Afrika Kusini","ZM":"Sambia","ZW":"Simbabwe","ZZ":"ZZ"},"short":{"GB":"Uingereza","HK":"HK","MO":"MO","PS":"Ukingo wa Magharibi na Ukanda wa Gaza wa Palestina","US":"Marekani"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Iropiyianí ɔ́ɔ̄ lmarabu","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"Iropiyianí e Angola","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"Iropiyianí e Austria","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"Iropiyianí e Bahareini","BIF":"Iropiyianí e Burundi","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"Iropiyianí e Botswana","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"Iropiyianí e Kanada","CDF":"Iropiyianí e Kongo","CHE":"CHE","CHF":"Iropiyianí e Uswisi","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Iropiyianí e China","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"Iropiyianí e Kepuvede","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"Iropiyianí e Jibuti","DKK":"DKK","DOP":"DOP","DZD":"Iropiyianí e Algeria","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Iropiyianí e Misri","ERN":"Iropiyianí e Eritrea","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Iropiyianí e Uhabeshi","EUR":"Iropiyianí e yuro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"Iropiyianí e Nkɨ́resa","GEK":"GEK","GEL":"GEL","GHC":"Iropiyianí e Ghana","GHS":"GHS","GIP":"GIP","GMD":"Iropiyianí e Gambia","GNF":"GNF","GNS":"Iropiyianí e Gine","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Iropiyianí e India","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Iropiyianí e Japani","KES":"Iropiyianí e Kenya","KGS":"KGS","KHR":"KHR","KMF":"Iropiyianí e Komoro","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"Iropiyianí e Liberia","LSL":"Iropiyianí e Lesoto","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Iropiyianí e Libya","MAD":"Iropiyianí e Moroko","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"Iropiyianí e Bukini","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"Iropiyianí e Moritania (1973–2017)","MRU":"Iropiyianí e Moritania","MTL":"MTL","MTP":"MTP","MUR":"Iropiyianí e Morisi","MVP":"MVP","MVR":"MVR","MWK":"Iropiyianí e Malawi","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"Iropiyianí e Msumbiji","MZN":"MZN","NAD":"Iropiyianí e Namibia","NGN":"Iropiyianí e Nijeria","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"Iropiyianí e Rwanda","SAR":"Iropiyianí e Saudi","SBD":"SBD","SCR":"Iropiyianí e Shelisheli","SDD":"SDD","SDG":"Iropiyianí e Sudani","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"Iropiyianí e Santahelena","SIT":"SIT","SKK":"SKK","SLL":"Iropiyianí e leoni","SOS":"Iropiyianí e Somalia","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"Iropiyianí e Saotome (1977–2017)","STN":"Iropiyianí e Saotome","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"Iropiyianí e lilangeni","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"Iropiyianí e Tunisia","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"Iropiyianí e Tanzania","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"Iropiyianí e Uganda","USD":"Iropiyianí ɔ́ɔ̄ lamarekani","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"Iropiyianí e CFA BEAC","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Iropiyianí e CFA BCEAO","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Iropiyianí e Afrika Kusini","ZMK":"Iropiyianí e Sambia (1968–2012)","ZMW":"Iropiyianí e Sambia","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Iropiyianí e Simbabwe","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["mas"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
