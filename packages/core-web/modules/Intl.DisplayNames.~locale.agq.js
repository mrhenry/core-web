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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("agq").length
)) {
// Intl.DisplayNames.~locale.agq
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"Aghem","ak":"Akan","am":"Àmalì","ar":"Àlabì","ar-001":"Àlabì (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"Bɛ̀làlusàn","bem":"bem","bez":"bez","bg":"Bùugɨlìa","bm":"bm","bn":"Bɨ̀ŋgalì","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"Chɛ̂","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"Dzamɛ̀","de-AT":"Dzamɛ̀ (Usɨtɨ̀là)","de-CH":"Dzamɛ̀ (Suezàlân)","dje":"dje","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"Gɨ̀lêʔ","en":"Kɨŋgele","en-AU":"Kɨŋgele (Ùsɨ̀tɛ̀lɛlìa)","en-CA":"Kɨŋgele (Kanadà)","en-GB":"Kɨŋgele (Yùnaetɛ Kiŋdɔ̀m)","en-US":"Kɨŋgele (USA)","eo":"eo","es":"Sɨ̀kpanìs","es-419":"Sɨ̀kpanìs (419)","es-ES":"Sɨ̀kpanìs (Sɨ̀kpɛ̂n)","es-MX":"Sɨ̀kpanìs (Mɛkɨzikù)","et":"et","eu":"eu","ewo":"ewo","fa":"Kpɛɛshìa","fa-AF":"Kpɛɛshìa (Àfɨ̀ganìsɨ̀tân)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"Kɨ̀fàlàŋsi","fr-CA":"Kɨ̀fàlàŋsi (Kanadà)","fr-CH":"Kɨ̀fàlàŋsi (Suezàlân)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"Kɨtsɔŋkaŋ","haw":"haw","he":"he","hi":"Endì","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"Hɔŋgalìa","hy":"hy","ia":"ia","id":"Èndònɛshìa","ig":"Egbò","ii":"ii","is":"is","it":"Ètalìa","ja":"Dzàkpànê","jgo":"jgo","jmc":"jmc","jv":"Dzàbvànê","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"Kɨmɛ̀","kn":"kn","ko":"kùulîa","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"Màlae","mt":"mt","mua":"mua","mul":"mul","my":"Bùumɛsɛ̀","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Nedàlân)","ne":"Nɛ̀kpalì","nl":"Dɔ̂s","nl-BE":"Dɔ̂s (Bɛɛdzwùm)","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"Kpuwndzabì","pcm":"pcm","pl":"Kpɔlìs","prg":"prg","ps":"ps","pt":"Kpotùwgîi","pt-BR":"Kpotùwgîi (Bɨ̀làzîi)","pt-PT":"Kpotùwgîi (Kputuwgà)","qu":"qu","rm":"rm","rn":"rn","ro":"Lùmanyìa","ro-MD":"Lùmanyìa (Mòodovà)","rof":"rof","root":"root","ru":"Lushìa","rw":"Lùwandà","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"Sòmalì","sq":"sq","sr":"sr","st":"st","su":"su","sv":"Suedìs","sw":"sw","sw-CD":"sw (Dɛ̀mùkàlatì Lèkpubèlè è Kuŋgù)","ta":"Tamì","te":"te","teo":"teo","tg":"tg","th":"Tàe","ti":"ti","tk":"tk","to":"to","tr":"Tʉʉkìs","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"Ùkɛlɛnìa","und":"und","ur":"Uudùw","uz":"uz","vai":"vai","vi":"Vìyɛtnàmê","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"Yulùba","yue":"yue","zgh":"zgh","zh":"Chàenê","zh-Hans":"Chàenê (Hans)","zh-Hant":"Chàenê (Hant)","zu":"Zulù","zxx":"zxx"},"short":{"az":"az","en-GB":"Kɨŋgele (Yùnaetɛ Kiŋdɔ̀m)","en-US":"Kɨŋgele (USA)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Àndolà","AE":"Yùnaetɛ Alab ɛmelɛ̀","AF":"Àfɨ̀ganìsɨ̀tân","AG":"Àntigwà à Bàbudà","AI":"Àŋgwilà","AL":"Àabɛnìa","AM":"Àmɛnyìa","AO":"Àŋgolà","AQ":"AQ","AR":"Àdzɛ̀ntinà","AS":"Àmɛlekan Samwà","AT":"Usɨtɨ̀là","AU":"Ùsɨ̀tɛ̀lɛlìa","AW":"Àlubà","AX":"AX","AZ":"Àzɨbɛ̀dzân","BA":"Bosɨnyìa à Hɛ̀zɛ̀gòvinà","BB":"Bàbadòs","BD":"Baŋgɨ̀làdɛ̂","BE":"Bɛɛdzwùm","BF":"Bùkinà Fasò","BG":"Bùugɛlìa","BH":"Bàlaen","BI":"Bùlundì","BJ":"Bɛ̀nɨ̂ŋ","BL":"BL","BM":"Bɛ̀mudà","BN":"Bɨ̀lunè","BO":"Bòlevà","BQ":"BQ","BR":"Bɨ̀làzîi","BS":"Bàhamàs","BT":"Mbutàn","BV":"BV","BW":"Bòtɨ̀swǎnà","BY":"Bɛlàlûs","BZ":"Bɛ̀lezɨ̀","CA":"Kanadà","CC":"CC","CD":"Dɛ̀mùkàlatì Lèkpubèlè è Kuŋgù","CF":"Sɛnta Afɨlekan Lèkpobèlè","CG":"Kuŋgù","CH":"Suezàlân","CI":"Ku Dɨ̀vûa","CK":"Chwɨla ŋ̀ Kûʔ","CL":"Chilè","CM":"Kàmàlûŋ","CN":"Chaenà","CO":"Kòlombìa","CP":"CP","CR":"Kòsɨ̀tà Lekà","CU":"Kuuwbà","CV":"Chwɨla ŋ̀ Kɛ̀b Vɛ̂ɛ","CW":"CW","CX":"CX","CY":"Saekpùlù","CZ":"Chɛ̂ Lèkpubèlè","DE":"Dzamanè","DG":"DG","DJ":"Dzìbuwtì","DK":"Dɛnɨmà","DM":"Dòmenekà","DO":"Dòmenekà Lèkpubèlè","DZ":"Àadzɛlìa","EA":"EA","EC":"Ekwadò","EE":"Èsɨ̀tonyìa","EG":"Edzì","EH":"EH","ER":"Èletɨ̀là","ES":"Sɨ̀kpɛ̂n","ET":"Ètyǒpìa","EU":"EU","EZ":"EZ","FI":"Fɨnlàn","FJ":"Fidzi","FK":"Chwɨlà fɨ Fakɨlàn","FM":"Maekòlòneshìa","FO":"FO","FR":"Fàlâŋnsì","GA":"Gàbûn","GB":"Yùnaetɛ Kiŋdɔ̀m","GD":"Gɨ̀lɛnadà","GE":"Dzɔɔdzìa","GF":"Gàyanà è Fàlâŋnsì","GG":"GG","GH":"Gaanà","GI":"Dzibɨ̀latà","GL":"Gɨ̀lenlân","GM":"Gambìa","GN":"Ginè","GP":"Gwadalukpɛ̀","GQ":"Èkwɛ̀tolia Ginè","GR":"Gɨ̀lês","GS":"GS","GT":"Gwàtɨ̀malà","GU":"Gwam","GW":"Ginè Bìsawù","GY":"Gùyanà","HK":"HK","HM":"HM","HN":"Hɔndulàs","HR":"Kòwɛshìa","HT":"Hǎetì","HU":"Hɔŋgàlè","IC":"IC","ID":"Èndòneshìa","IE":"Aelɨ̀lân","IL":"Ezɨ̀lɛ̂","IM":"IM","IN":"Endìa","IO":"Dɨŋò kɨ dzughùnstòʔ kɨ Endìa kɨ Bɨ̀letì kò","IQ":"Èlâkɨ̀","IR":"Èlân","IS":"Aesɨ̀lân","IT":"Etalè","JE":"JE","JM":"Dzàmɛkà","JO":"Dzodàn","JP":"Dzàkpân","KE":"Kɨnyà","KG":"Kìdzisɨ̀tân","KH":"Kàmbodìa","KI":"Kèlèbati","KM":"Komolòs","KN":"Sɛ̀n Kî à Nevì","KP":"Kùulîa, Ekùw","KR":"Kùulîa, Emàm","KW":"Kùwɛ̂","KY":"Chwɨlà ŋ̀ Kaemàn","KZ":"Kàzasɨ̀tân","LA":"Làwos","LB":"Lɛbanè","LC":"Sɛ̀n Lushìa","LI":"Letɨnshɨ̀n","LK":"Sɨ̀le Laŋkà","LR":"Làebɛlìa","LS":"Lɛ̀sotù","LT":"Lètwǎnyìa","LU":"Luzɨmbùʔ","LV":"Làtɨva","LY":"Lebìa","MA":"Mòlokò","MC":"Mùnaku","MD":"Mòodovà","ME":"ME","MF":"MF","MG":"Màdàgasɨkà","MH":"Chwɨlà fɨ Mashà","MK":"MK","ML":"Malè","MM":"Mǐanmà","MN":"Mùŋgolìa","MO":"MO","MP":"Chwɨlà m̀ Màlǐanà mɨ̀ Ekùw mò","MQ":"Màtìnekì","MR":"Mùlètanyìa","MS":"Mùŋtselà","MT":"Maatà","MU":"Mùleshwɨ̀s","MV":"Màdivè","MW":"Màlawì","MX":"Mɛkɨzikù","MY":"Màlɛshìa","MZ":"Mùzàmbî","NA":"Nàmibìa","NC":"Kàlèdonyìa È fūghū","NE":"Naedzà","NF":"Chwɨlà fɨ Nufòʔ","NG":"Gɨ̀anyɨ","NI":"Nikàlagwà","NL":"Nedàlân","NO":"Noowɛ̂ɛ","NP":"Nɛkpâa","NR":"Nàwulù","NU":"Niyu","NZ":"Zìlân È fūghū","OM":"Umàn","PA":"Kpanàma","PE":"Kpɛlû","PF":"Kpoleneshìa è Fàlâŋnsì","PG":"Kpakpua Ginè È fūghū","PH":"Felèkpî","PK":"Kpakìsɨ̀tân","PL":"Kpulàn","PM":"Sɛ̀n Kpiyɛ̀ à Mikelɔŋ","PN":"Kpitɨ̀kalè","PR":"Kpǒto Leko","PS":"Adzɨmā kɨ ŋgùŋ kɨ Palɛsɨtɨnyia à kɨ Gazà kò","PT":"Kputuwgà","PW":"Kpàlawù","PY":"Kpalàgwɛ̂","QA":"Katà","QO":"QO","RE":"Lèyunyɔ̀ŋ","RO":"Lùmanyìa","RS":"RS","RU":"Loshìa","RW":"Lùwandà","SA":"Sawudi Alabi","SB":"Chwɨlà fɨ Solomwɨ̀n","SC":"Sɛchɛ̀lɛ̀s","SD":"Sùdân","SE":"Suedɨ̀n","SG":"Siŋgàkpôo","SH":"Sɛ̀n Èlenà","SI":"Sɨ̀lòvɨnyìa","SJ":"SJ","SK":"Sɨ̀lòvɨkɨ̀a","SL":"Silìa lûŋ","SM":"Sàn Màlenù","SN":"Sɛ̀nɛ̀gâa","SO":"Sòmalìa","SR":"Sulènamè","SS":"SS","ST":"Sawo Tɔ̀me à Kpèlènsikpɛ̀","SV":"Esàvadò","SX":"SX","SY":"Silîa","SZ":"Shǔazìlân","TA":"TA","TC":"Chwɨla n Tɨtê à Kaekùs","TD":"Châ","TF":"TF","TG":"Tugù","TH":"Taelàn","TJ":"Tàdzikìsɨ̀tân","TK":"Tuwkelawù","TL":"Ês Taemò","TM":"Tekɨmènèsɨ̀tân","TN":"Tùneshìa","TO":"Tuŋgà","TR":"Teekì","TT":"Tèlenedà à Tòbagù","TV":"Tuwvalùw","TW":"Taewàn","TZ":"Tàanzanyìa","UA":"Yùkɛ̀lɛ̂","UG":"Yùgandà","UM":"UM","UN":"UN","US":"USA","UY":"Yulùgwɛ̂","UZ":"Yùzɨ̀bɛkìsɨ̀tân","VA":"Vatikàn Sɨ̀tɛ̂","VC":"Sɛ̀n Vinsɨ̀n à Gɨlenadi Ù tē","VE":"Vɛ̀nɛ̀zǔɛɛlà","VG":"Chwɨlà m̀ Vidzinyìa m̀ Bɨ̀letì mò","VI":"U. S. Chwɨlà fɨ Mbuʔmbu","VN":"Vìyɛnàm","VU":"Vànǔatùw","WF":"Wales à Fùwtuwnà","WS":"Sàmowà","XA":"XA","XB":"XB","XK":"XK","YE":"Yɛmɛ̀n","YT":"Màyotì","ZA":"Afɨlekà ghɨ Emàm ghò","ZM":"Zambìa","ZW":"Zìmbagbɛ̀","ZZ":"ZZ"},"short":{"GB":"Yùnaetɛ Kiŋdɔ̀m","HK":"HK","MO":"MO","PS":"Adzɨmā kɨ ŋgùŋ kɨ Palɛsɨtɨnyia à kɨ Gazà kò","US":"USA"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Dilàm è Yùnaetɛ Alab Emelɛ̀","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"Kwanzà è Àŋgolà","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"Dɔlà e Ùsɨ̀tɛ̀lɛlìa","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"Dinà è Balae","BIF":"Fàlâŋ è Bùlundì","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"Kpuwlà è Botɨshǔanà","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"Dɔlà è Kanadà","CDF":"Fàlâŋ è Kuŋgùlê","CHE":"CHE","CHF":"Fàlâŋ è Sues","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Yùwân Lèmembi è Chaenî","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"Kàbòvàdianù è Èsùkudò","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"Fàlâŋ è Dzìbutì","DKK":"DKK","DOP":"DOP","DZD":"Dinà è Àdzɛlìa","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Bɔ̀ŋ è Edzì","ERN":"Nakafa è Èletɨ̀làe","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Bîi è Etyǒkpìa","EUR":"Yulù","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"Bɔ̀ŋ è Bèletì","GEK":"GEK","GEL":"GEL","GHC":"Sɛ̀di è Gaanà","GHS":"GHS","GIP":"GIP","GMD":"Dàlasì è Gambìa","GNF":"GNF","GNS":"Fàlâŋ è Ginè","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Lukpì è Endìa","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Ghɨ̂n Dzàkpànê","KES":"Shwɨlà tɨ Kenyà","KGS":"KGS","KHR":"KHR","KMF":"Fàlâŋ è Komolìa","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"Dɔlà Làebɛlìa","LSL":"Lɔtì Lèsutù","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Dinà è Lebìa","MAD":"Dilàm è Mòlokò","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"Àlǐalè è Màlàgasì","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"Ùgueya è Mùlètenyìa (1973–2017)","MRU":"Ùgueya è Mùlètenyìa","MTL":"MTL","MTP":"MTP","MUR":"Lukpìi è Mùleshòs","MVP":"MVP","MVR":"MVR","MWK":"Kwachà è Màlawè","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"Mètikà è Mùzàmbî","MZN":"MZN","NAD":"Dɔlà è Nàmibìa","NGN":"Naelà è Gɨ̀anyɨ","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"Fàlâŋ è Lùwandà","SAR":"Leyà è Sàwudì","SBD":"SBD","SCR":"Lukpìi è Sɛchɛ̀lɛ̀","SDD":"SDD","SDG":"Bɔ̀ŋ è Sùdànê","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"Bɔ̀ŋ è Sɛ̀n Èlenà","SIT":"SIT","SKK":"SKK","SLL":"Lyɔ̂ŋ","SOS":"Shwɨlà è Sùmalìa","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"Dɔbàlà è Sàwu Tɔ̀me à Pèlènsipè (1977–2017)","STN":"Dɔbàlà è Sàwu Tɔ̀me à Pèlènsipè","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"Lèlàŋgenè","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"Dinà è Tùwneshìa","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"Shwɨlà è Tàanzanyìa","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"Shwɨlà è Yùgandà","USD":"Dɔlà è US","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"CFA Fàlâŋ BEAC","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"CFA Fàlâŋ BCEAO","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Lân è Afɨlekà ghɨ Emàm ghò","ZMK":"Kwachà è Zambìa (1968–2012)","ZMW":"Kwachà è Zambìa","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Dɔlà è Zìmbagbɛ̀","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"agq"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
