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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("vai-Latn").length
)) {
// Intl.DisplayNames.~locale.vai-Latn
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"vai-Latn":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"Akaŋ","am":"Amihári","ar":"Lahabu","ar-001":"Lahabu (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"Bhelarusaŋ","bem":"bem","bez":"bez","bg":"Bhɔgerɛŋ","bm":"bm","bn":"Bhɛŋgáli","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"Chɛ","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"Jamáĩ","de-AT":"Jamáĩ (Ɔ́situwa)","de-CH":"Jamáĩ (Suweza Lumaã)","dje":"dje","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"Hɛlɛŋ","en":"Poo","en-AU":"Poo (Ɔsituwéeliya)","en-CA":"Poo (Kánáda)","en-GB":"Poo (Yunaitɛ Kíŋdɔŋ)","en-US":"Poo (Poo)","eo":"eo","es":"Panyɛĩ","es-419":"Panyɛĩ (419)","es-ES":"Panyɛĩ (Panyɛĩ)","es-MX":"Panyɛĩ (Mɛsíko)","et":"et","eu":"eu","ewo":"ewo","fa":"Pɛɛsiyɛŋ","fa-AF":"Pɛɛsiyɛŋ (Afigándesitaŋ)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"Fɛŋsi","fr-CA":"Fɛŋsi (Kánáda)","fr-CH":"Fɛŋsi (Suweza Lumaã)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"Hawusa","haw":"haw","he":"he","hi":"Híiŋdi","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"Hɔŋgérɛŋ","hy":"hy","ia":"ia","id":"Índonisiyɛŋ","ig":"Ígbo","ii":"ii","is":"is","it":"Itáliyɛŋ","ja":"Japaníĩ","jgo":"jgo","jmc":"jmc","jv":"Javaníĩ","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"Kimɛɛ̃ tɛ","kn":"kn","ko":"Koríyɛŋ","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"Maléee","mt":"mt","mua":"mua","mul":"mul","my":"Bhɛmísi","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (Nidɔlɛŋ)","ne":"Nipali","nl":"Dɔchi","nl-BE":"Dɔchi (Bhɛgiyɔŋ)","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"Puŋjabhi","pcm":"pcm","pl":"Pɔ́lési","prg":"prg","ps":"ps","pt":"Potokíi","pt-BR":"Potokíi (Bhurazeli)","pt-PT":"Potokíi (Potokíi)","qu":"qu","rm":"rm","rn":"rn","ro":"Romíniyɛŋ","ro-MD":"Romíniyɛŋ (Mɔlidova)","rof":"rof","root":"root","ru":"Rɔshiyɛŋ","rw":"Rawunda","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"Somáli","sq":"sq","sr":"sr","st":"st","su":"su","sv":"Súwídɛŋ","sw":"sw","sw-CD":"sw (Avorekoo)","ta":"Tamíli","te":"te","teo":"teo","tg":"tg","th":"Tái","ti":"ti","tk":"tk","to":"to","tr":"Tɔ́ki","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"Yukureniyɛŋ","und":"und","ur":"Ɔdu","uz":"uz","vai":"Vai","vi":"Viyamíĩ","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"Yóróbha","yue":"yue","zgh":"zgh","zh":"Chaniĩ","zh-Hans":"Chaniĩ (Hans)","zh-Hant":"Chaniĩ (Hant)","zu":"Zúlu","zxx":"zxx"},"short":{"az":"az","en-GB":"Poo (Yunaitɛ Kíŋdɔŋ)","en-US":"Poo (Poo)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"Aŋdóra","AE":"Yunaitɛ Arabhi Ɛmire","AF":"Afigándesitaŋ","AG":"Aŋtígwa Ɓahabhuda","AI":"Aŋgíla","AL":"Abhaniya","AM":"Améniya","AO":"Aŋgóla","AQ":"AQ","AR":"Ajɛŋtína","AS":"Poo Sambowa","AT":"Ɔ́situwa","AU":"Ɔsituwéeliya","AW":"Arubha","AX":"AX","AZ":"Azabhaijaŋ","BA":"Bhɔsiniya","BB":"Bhabhedo","BD":"Bhangiladɛ̀shi","BE":"Bhɛgiyɔŋ","BF":"Bhokina Fáso","BG":"Bhɔgeriya","BH":"Bharɛŋ","BI":"Bhurundi","BJ":"Bhɛni","BL":"BL","BM":"Bhɛmuda","BN":"Bhurunɛĩ","BO":"Bholiviya","BQ":"BQ","BR":"Bhurazeli","BS":"Bahámasi","BT":"Bhutaŋ","BV":"BV","BW":"Bhosuwana","BY":"Bhɛlarusi","BZ":"Bheliz","CA":"Kánáda","CC":"CC","CD":"Avorekoo","CF":"Áfíríka Lumaã Tɛ Boloe","CG":"Kóngo","CH":"Suweza Lumaã","CI":"Kódivówa","CK":"Kóki Tiŋŋɛ","CL":"Chéli","CM":"Kameruŋ","CN":"Cháína","CO":"Kɔlɔmbiya","CP":"CP","CR":"Kósíta Ríko","CU":"Kiyubha","CV":"Kepi Vɛdi Tiŋŋɛ","CW":"CW","CX":"CX","CY":"Saɛpurɔ","CZ":"Chɛki Boloe","DE":"Jamáĩ","DG":"DG","DJ":"Jibhuti","DK":"Danimaha","DM":"Domíiníka","DO":"Domíiníka Ɓoloe","DZ":"Agiriya","EA":"EA","EC":"Ɛ́kúwédɔ","EE":"Ɛsitóninya","EG":"Míséla","EH":"EH","ER":"Ɛritera","ES":"Panyɛĩ","ET":"Ítiyópiya","EU":"EU","EZ":"EZ","FI":"Fiŋlɛŋ","FJ":"Fíji","FK":"Fáháki Luma Tiŋŋɛ","FM":"Mikonisiya","FO":"FO","FR":"Fɛŋsi","GA":"Gabhɔŋ","GB":"Yunaitɛ Kíŋdɔŋ","GD":"Gurinéda","GE":"Jɔɔjiya","GF":"Fɛŋsi Giwana","GG":"GG","GH":"Gana","GI":"Jibhurata","GL":"Jamba Kuwa Lumaã","GM":"Gambiya","GN":"Gini","GP":"Guwadelupe","GQ":"Dúúnyá Tɛ Giini","GR":"Hɛlɛŋ","GS":"GS","GT":"Guwatɛmala","GU":"Guwami","GW":"Gini Bhisawo","GY":"Guyana","HK":"HK","HM":"HM","HN":"Hɔndura","HR":"Koresiya","HT":"Háiti","HU":"Hɔ́ngare","IC":"IC","ID":"Índonisiya","IE":"Áre Lumaã","IL":"Bhanísiláila","IM":"IM","IN":"Índiya","IO":"Jengéesi Gbawoe Índiya Kɔiyɛ Lɔ","IQ":"Iraki","IR":"Iraŋ","IS":"Áisi Lumaã","IT":"Ítali","JE":"JE","JM":"Jamaika","JO":"Jɔɔdaŋ","JP":"Japaŋ","KE":"Kénya","KG":"Kigisitaŋ","KH":"Kaŋbhodiya","KI":"Kiribhati","KM":"Komorosi","KN":"Siŋ Kisi ɓɛ́ Nevisi","KP":"Koriya Kɔi Kaŋndɔ","KR":"Koriya Kɔi Leŋŋɛ Lɔ","KW":"Kuweti","KY":"Keemaŋ Tiŋŋɛ","KZ":"Kazasitaŋ","LA":"Lawosi","LB":"Lebhanɔ","LC":"Siŋ Lusiya","LI":"LI","LK":"Suri Laŋka","LR":"Laibhiya","LS":"Lisóto","LT":"Lituweninya","LU":"Lusimbɔ","LV":"Lativiya","LY":"Lebhiya","MA":"Mɔroko","MC":"Mɔnako","MD":"Mɔlidova","ME":"ME","MF":"MF","MG":"Madagasita","MH":"Masha Tiŋŋɛ","MK":"MK","ML":"Mali","MM":"Miyamaha","MN":"Mɔngoliya","MO":"MO","MP":"Kɔi Kaŋndɔ Mariyana Tiŋŋɛ","MQ":"Matiniki","MR":"Mɔretaninya","MS":"Mɔserati","MT":"Malita","MU":"Mɔreshɔ","MV":"Malidavi","MW":"Malawi","MX":"Mɛsíko","MY":"Malesiya","MZ":"Mozambiki","NA":"Namibiya","NC":"Kalidoninya Námaá","NE":"Naĩja","NF":"Nɔfɔ Tiŋŋɛ","NG":"Naĩjiriya","NI":"Nikaraguwa","NL":"Nidɔlɛŋ","NO":"Nɔɔwe","NP":"Nepa","NR":"Noru","NU":"Niwe","NZ":"Zilɛŋ Námaá","OM":"Omaŋ","PA":"Panama","PE":"Pɛru","PF":"Fɛŋsi Polinísiya","PG":"Papuwa Gini Námaá","PH":"Félepiŋ","PK":"Pakisitaŋ","PL":"Pólɛŋ","PM":"Siŋ Piiyɛ ɓɛ́ Mikelɔŋ","PN":"Pitikɛŋ","PR":"Piyuto Riko","PS":"Palesitininya Tele Jii Kɔiyɛ lá hĩ Gaza","PT":"Potokíi","PW":"Palo","PY":"Paragɔe","QA":"Kataha","QO":"QO","RE":"Renyɔɔ̃","RO":"Romininya","RS":"RS","RU":"Rɔshiya","RW":"Rawunda","SA":"Lahabu","SB":"Sulaimaãna Tiŋŋɛ","SC":"Seshɛɛ","SD":"Sudɛŋ","SE":"Suwidɛŋ","SG":"Síingapoo","SH":"Siŋ Hɛlina","SI":"Suloveninya","SJ":"SJ","SK":"Sulovakiya","SL":"Gbeya Bahawɔ","SM":"Saŋ Marindo","SN":"Sinigaha","SO":"Somaliya","SR":"Surinambe","SS":"SS","ST":"Sawo Tombe ɓɛ a Gbawoe","SV":"Ɛlɛ Sávádɔ","SX":"SX","SY":"Síyaŋ","SZ":"Suwazi Lumaã","TA":"TA","TC":"Tukisi ɓɛ̀ Kaikóosi Tiŋŋɛ","TD":"Chádi","TF":"TF","TG":"Togo","TH":"Tai Lumaã","TJ":"Tajikisitaŋ","TK":"Tokelo","TL":"Tele Ɓɔ́ Timɔɔ̃","TM":"Tukimɛnisitaŋ","TN":"Tunisiya","TO":"Tɔnga","TR":"Tɔ́ɔ́ki","TT":"Turindeda ɓɛ́ Tobhego","TV":"Tuválu","TW":"Taiwaŋ","TZ":"Taŋzaninya","UA":"Yukuréŋ","UG":"Yuganda","UM":"UM","UN":"UN","US":"Poo","UY":"Yuwegɔwe","UZ":"Yubhɛkisitaŋ","VA":"Vatikaŋ Ɓoloe","VC":"Siŋ Viŋsi","VE":"Vɛnɛzuwela","VG":"Jengéesi Bhɛɛ Lɔ Musu Tiŋŋɛ","VI":"Poo Bhɛɛ lɔ Musu Tiŋŋɛ","VN":"Viyanami","VU":"Vanuwátu","WF":"Walísi","WS":"Samowa","XA":"XA","XB":"XB","XK":"XK","YE":"Yemɛni","YT":"Mavote","ZA":"Afirika Kɔi Leŋŋɛ Lɔ","ZM":"Zambiya","ZW":"Zimbabhuwe","ZZ":"ZZ"},"short":{"GB":"Yunaitɛ Kíŋdɔŋ","HK":"HK","MO":"MO","PS":"Palesitininya Tele Jii Kɔiyɛ lá hĩ Gaza","US":"Poo"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"Yunaitɛ Arabhi Ɛmire Dihami","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"Angola Kuwaŋza","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"Ɔ́situwa Dala","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"Bharɛŋ Dina","BIF":"Bhurundi Furaŋki","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"Bhosuwana Pula","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"Kanada Dala","CDF":"Kóngo Furaŋki","CHE":"CHE","CHF":"Suwesi Furaŋki","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"Chaníĩ Yuwaŋ Rɛŋmimbi","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"Ɛsikudo Cabovɛdiyano","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"Jibhuti Furaŋki","DKK":"DKK","DOP":"DOP","DZD":"Agiriya Dina","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Míséla Pɔɔ̃","ERN":"Ɛritera Nakifa","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"Ítiyopiya Bhii","EUR":"Yuro","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"Jengési Pɔɔ̃","GEK":"GEK","GEL":"GEL","GHC":"Gana Sidi","GHS":"GHS","GIP":"GIP","GMD":"Gambiya Dalasi","GNF":"GNF","GNS":"Gini Furaŋki","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Índiya Rupi","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"Japaniĩ Yɛŋ","KES":"Kénya Siyeŋ","KGS":"KGS","KHR":"KHR","KMF":"Komoro Furaŋki","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"Laibhiya Dala","LSL":"Lisóto Loti","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Libhiya Dina","MAD":"Mɔroko Dihami","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"Malagasi Ariyari","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"Mɔretani Yugiya (1973–2017)","MRU":"Mɔretani Yugiya","MTL":"MTL","MTP":"MTP","MUR":"Mɔreshɔ Rupi","MVP":"MVP","MVR":"MVR","MWK":"Malawi Kuwacha","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"Mozambiki Mɛtikali","MZN":"MZN","NAD":"Namibiya Dala","NGN":"Naĩjiriya Naĩra","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"Rawunda Furaŋki","SAR":"Lahabu Sawodi Riya","SBD":"SBD","SCR":"SCR","SDD":"SDD","SDG":"Sudaniĩ Pɔɔ̃","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"Siŋ Hɛlina Pɔɔ̃","SIT":"SIT","SKK":"SKK","SLL":"Liyɔɔ̀","SOS":"Somaliya Siyeŋ","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"Sawo Tombe ɓɛ a Gbawo Dobura (1977–2017)","STN":"Sawo Tombe ɓɛ a Gbawo Dobura","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"Lilangeni","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"Tunisiya Dina","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"Taŋzaniya Siyeŋ","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"Yuganda Siyeŋ","USD":"Poo Dala","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"Áfíríka Tɛ Sifa","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"Áfíríka Tele Jíí Sifa","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"Afirika Kɔi Leŋŋɛ lɔ Randi","ZMK":"Zambiya Kuwacha (1968–2012)","ZMW":"Zambiya Kuwacha","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"Zimbhabhuwe Dala","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["vai-Latn"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
