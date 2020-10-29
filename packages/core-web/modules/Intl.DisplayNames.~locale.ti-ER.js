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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ti-ER").length
)) {
// Intl.DisplayNames.~locale.ti-ER
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"ti-ER":{"types":{"language":{"long":{"af":"አፍሪቃንሰኛ","agq":"agq","ak":"ak","am":"አምሐረኛ","ar":"ዓረበኛ","ar-001":"ዓረበኛ (001)","as":"as","asa":"asa","ast":"ast","az":"አዜርባይጃንኛ","bas":"bas","be":"ቤላራሻኛ","bem":"bem","bez":"bez","bg":"ቡልጋሪኛ","bm":"bm","bn":"በንጋሊኛ","bo":"bo","br":"ብሬቶን","brx":"brx","bs":"ቦስኒያን","ca":"ካታላን","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"ቼክኛ","cu":"cu","cy":"ወልሽ","da":"ዴኒሽ","dav":"dav","de":"ጀርመን","de-AT":"ጀርመን (ኦስትሪያ)","de-CH":"ጀርመን (ስዊዘርላንድ)","dje":"dje","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"ግሪከኛ","en":"እንግሊዝኛ","en-AU":"እንግሊዝኛ (አውስትሬሊያ)","en-CA":"እንግሊዝኛ (ካናዳ)","en-GB":"እንግሊዝኛ (እንግሊዝ)","en-US":"እንግሊዝኛ (አሜሪካ)","eo":"ኤስፐራንቶ","es":"ስፓኒሽ","es-419":"ስፓኒሽ (419)","es-ES":"ስፓኒሽ (ስፔን)","es-MX":"ስፓኒሽ (ሜክሲኮ)","et":"ኤስቶኒአን","eu":"ባስክኛ","ewo":"ewo","fa":"ፐርሲያኛ","fa-AF":"ፐርሲያኛ (አፍጋኒስታን)","ff":"ff","fi":"ፊኒሽ","fil":"ታጋሎገኛ","fo":"ፋሮኛ","fr":"ፈረንሳይኛ","fr-CA":"ፈረንሳይኛ (ካናዳ)","fr-CH":"ፈረንሳይኛ (ስዊዘርላንድ)","frc":"frc","fur":"fur","fy":"ፍሪሰኛ","ga":"አይሪሽ","gd":"እስኮትስ ጌልክኛ","gl":"ጋለቪኛ","gn":"ጓራኒ","gsw":"gsw","gu":"ጉጃራቲኛ","guz":"guz","gv":"gv","ha":"ha","haw":"haw","he":"ዕብራስጥ","hi":"ሕንደኛ","hmn":"hmn","hr":"ክሮሽያንኛ","hsb":"hsb","ht":"ht","hu":"ሀንጋሪኛ","hy":"hy","ia":"ኢንቴር ቋንቋ","id":"እንዶኑሲኛ","ig":"ig","ii":"ii","is":"አይስላንደኛ","it":"ጣሊያንኛ","ja":"ጃፓንኛ","jgo":"jgo","jmc":"jmc","jv":"ጃቫንኛ","ka":"ጊዮርጊያኛ","kab":"kab","kam":"kam","kde":"kde","kea":"kea","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"km","kn":"ካማደኛ","ko":"ኮሪያኛ","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ኩርድሽ","kw":"kw","ky":"ኪሩጋዚ","la":"ላቲንኛ","lag":"lag","lb":"lb","lg":"lg","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"ሊቱአኒየን","lu":"lu","luo":"luo","luy":"luy","lv":"ላቲቪያን","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"ማክዶኒኛ","ml":"ማላያላምኛ","mn":"mn","mni":"mni","mr":"ማራቲኛ","ms":"ማላይኛ","mt":"ማልቲስኛ","mua":"mua","mul":"mul","my":"my","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (ኔዘርላንድስ)","ne":"ኔፖሊኛ","nl":"ደች","nl-BE":"ደች (ቤልጄም)","nmg":"nmg","nn":"ኖርዌይኛ (ናይ ኝኖርስክ)","nnh":"nnh","no":"ኖርዌጂያን","nus":"nus","ny":"ny","nyn":"nyn","oc":"ኦኪታንኛ","om":"om","or":"ኦሪያ","os":"os","pa":"ፑንጃቢኛ","pcm":"pcm","pl":"ፖሊሽ","prg":"prg","ps":"ፓሽቶ","pt":"ፖርቱጋሊኛ","pt-BR":"ፖርቱጋልኛ (ናይ ብራዚል)","pt-PT":"ፖርቱጋልኛ (ናይ ፖርቱጋል)","qu":"qu","rm":"rm","rn":"rn","ro":"ሮማኒያን","ro-MD":"ሮማኒያን (ሞልዶቫ)","rof":"rof","root":"root","ru":"ራሽኛ","rw":"rw","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","sh":"ሰርቦ- ክሮዊታን","shi":"shi","si":"ስንሃልኛ","sk":"ስሎቨክኛ","sl":"ስቁቪኛ","sm":"sm","smn":"smn","sn":"sn","so":"so","sq":"አልቤኒኛ","sr":"ሰርቢኛ","st":"ሰሴቶ","su":"ሱዳንኛ","sv":"ስዊድንኛ","sw":"ሰዋሂሊኛ","sw-CD":"ሰዋሂሊኛ (ኮንጎ)","ta":"ታሚልኛ","te":"ተሉጉኛ","teo":"teo","tg":"tg","th":"ታይኛ","ti":"ትግርኛ","tk":"ናይ ቱርኪ ሰብዓይ (ቱርካዊ)","tlh":"ክሊንግኦንኛ","to":"to","tr":"ቱርከኛ","tt":"tt","tw":"ትዊ","twq":"twq","tzm":"tzm","ug":"ug","uk":"ዩክረኒኛ","und":"und","ur":"ኡርዱኛ","uz":"ኡዝበክኛ","vai":"vai","vi":"ቪትናምኛ","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"ዞሳኛ","xog":"xog","yav":"yav","yi":"ዪዲሽ","yo":"yo","yue":"yue","zgh":"zgh","zh":"zh","zh-Hans":"zh (Hans)","zh-Hant":"zh (Hant)","zu":"ዙሉኛ","zxx":"zxx"},"short":{"az":"አዜርባይጃንኛ","en-GB":"እንግሊዝኛ (GB)","en-US":"እንግሊዝኛ (US)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"አሴንሽን ደሴት","AD":"አንዶራ","AE":"ሕቡራት ኢማራት ዓረብ","AF":"አፍጋኒስታን","AG":"ኣንቲጓን ባሩዳን","AI":"አንጉኢላ","AL":"አልባኒያ","AM":"አርሜኒያ","AO":"አንጐላ","AQ":"አንታርክቲካ","AR":"አርጀንቲና","AS":"ናይ ኣሜሪካ ሳሞኣ","AT":"ኦስትሪያ","AU":"አውስትሬሊያ","AW":"አሩባ","AX":"ደሴታት ኣላንድ","AZ":"አዘርባጃን","BA":"ቦዝንያን ሄርዘጎቪናን","BB":"ባርቤዶስ","BD":"ባንግላዲሽ","BE":"ቤልጄም","BF":"ቡርኪና ፋሶ","BG":"ቡልጌሪያ","BH":"ባህሬን","BI":"ብሩንዲ","BJ":"ቤኒን","BL":"ቅዱስ ባርተለሚይ","BM":"ቤርሙዳ","BN":"ብሩኒ","BO":"ቦሊቪያ","BQ":"ካሪቢያን ኔዘርላንድስ","BR":"ብራዚል","BS":"ባሃማስ","BT":"ቡህታን","BV":"ደሴታት ቦውቬት","BW":"ቦትስዋና","BY":"ቤላሩስ","BZ":"ቤሊዘ","CA":"ካናዳ","CC":"ኮኮስ ኬሊንግ ደሴቶች","CD":"ኮንጎ","CF":"ማእከላይ ኣፍሪቃ ሪፓብሊክ","CG":"ኮንጎ ሪፓብሊክ","CH":"ስዊዘርላንድ","CI":"ኮት ዲቯር","CK":"ደሴታት ኩክ","CL":"ቺሊ","CM":"ካሜሩን","CN":"ቻይና","CO":"ኮሎምቢያ","CP":"ክሊፐርቶን ደሴት","CR":"ኮስታ ሪካ","CU":"ኩባ","CV":"ኬፕ ቬርዴ","CW":"ኩራካዎ","CX":"ደሴታት ክሪስትማስ","CY":"ሳይፕረስ","CZ":"ቼክ ሪፓብሊክ","DE":"ጀርመን","DG":"ዲየጎ ጋርሺያ","DJ":"ጂቡቲ","DK":"ዴንማርክ","DM":"ዶሚኒካ","DO":"ዶመኒካ ሪፓብሊክ","DZ":"አልጄሪያ","EA":"ሲውታን ሜሊላን","EC":"ኢኳዶር","EE":"ኤስቶኒያ","EG":"ግብጽ","EH":"ምዕራባዊ ሳህራ","ER":"ኤርትራ","ES":"ስፔን","ET":"ኢትዮጵያ","EU":"EU","EZ":"EZ","FI":"ፊንላንድ","FJ":"ፊጂ","FK":"ደሴታት ፎክላንድ","FM":"ሚክሮኔዢያ","FO":"ደሴታት ፋራኦ","FR":"ፈረንሳይ","GA":"ጋቦን","GB":"እንግሊዝ","GD":"ግሬናዳ","GE":"ጆርጂያ","GF":"ናይ ፈረንሳይ ጉይና","GG":"ገርንሲ","GH":"ጋና","GI":"ጊብራልታር","GL":"ግሪንላንድ","GM":"ጋምቢያ","GN":"ጊኒ","GP":"ጉዋደሉፕ","GQ":"ኢኳቶሪያል ጊኒ","GR":"ግሪክ","GS":"ደሴታት ደቡብ ጆርጂያን ደቡድ ሳንድዊችን","GT":"ጉዋቲማላ","GU":"ጉዋም","GW":"ቢሳዎ","GY":"ጉያና","HK":"ሆንግ ኮንግ","HM":"ደሴታት ሀርድን ማክዶናልድን","HN":"ሆንዱራስ","HR":"ክሮኤሽያ","HT":"ሀይቲ","HU":"ሀንጋሪ","IC":"ደሴታት ካናሪ","ID":"ኢንዶኔዢያ","IE":"አየርላንድ","IL":"እስራኤል","IM":"አይል ኦፍ ማን","IN":"ህንዲ","IO":"ናይ ብሪጣንያ ህንዳዊ ውቅያኖስ ግዝኣት","IQ":"ኢራቅ","IR":"ኢራን","IS":"አይስላንድ","IT":"ጣሊያን","JE":"ጀርሲ","JM":"ጃማይካ","JO":"ጆርዳን","JP":"ጃፓን","KE":"ኬንያ","KG":"ኪርጂስታን","KH":"ካምቦዲያ","KI":"ኪሪባቲ","KM":"ኮሞሮስ","KN":"ቅዱስ ኪትስን ኔቪስን","KP":"ሰሜን ኮሪያ","KR":"ደቡብ ኮሪያ","KW":"ክዌት","KY":"ካይማን ደሴቶች","KZ":"ካዛኪስታን","LA":"ላኦስ","LB":"ሊባኖስ","LC":"ሴንት ሉቺያ","LI":"ሊችተንስታይን","LK":"ሲሪላንካ","LR":"ላይቤሪያ","LS":"ሌሶቶ","LT":"ሊቱዌኒያ","LU":"ሉክሰምበርግ","LV":"ላትቪያ","LY":"ሊቢያ","MA":"ሞሮኮ","MC":"ሞናኮ","MD":"ሞልዶቫ","ME":"ሞንቴኔግሮ","MF":"ሴንት ማርቲን","MG":"ማዳጋስካር","MH":"ማርሻል አይላንድ","MK":"ሰሜን መቆዶንያ","ML":"ማሊ","MM":"ማያንማር","MN":"ሞንጎሊያ","MO":"ማካዎ","MP":"ደሴታት ሰሜናዊ ማሪያና","MQ":"ማርቲኒክ","MR":"ሞሪቴኒያ","MS":"ሞንትሴራት","MT":"ማልታ","MU":"ማሩሸስ","MV":"ማልዲቭስ","MW":"ማላዊ","MX":"ሜክሲኮ","MY":"ማሌዢያ","MZ":"ሞዛምቢክ","NA":"ናሚቢያ","NC":"ኒው ካሌዶኒያ","NE":"ኒጀር","NF":"ኖርፎልክ ደሴት","NG":"ናይጄሪያ","NI":"ኒካራጓ","NL":"ኔዘርላንድስ","NO":"ኖርዌ","NP":"ኔፓል","NR":"ናኡሩ","NU":"ኒኡይ","NZ":"ኒው ዚላንድ","OM":"ኦማን","PA":"ፓናማ","PE":"ፔሩ","PF":"ናይ ፈረንሳይ ፖሊነዝያ","PG":"ፓፑዋ ኒው ጊኒ","PH":"ፊሊፒንስ","PK":"ፓኪስታን","PL":"ፖላንድ","PM":"ቅዱስ ፒዬርን ሚኩኤሎን","PN":"ፒትካኢርን","PR":"ፖርታ ሪኮ","PS":"ምምሕዳር ፍልስጤም","PT":"ፖርቱጋል","PW":"ፓላው","PY":"ፓራጓይ","QA":"ቀጠር","QO":"QO","RE":"ሪዩኒየን","RO":"ሮሜኒያ","RS":"ሰርቢያ","RU":"ራሺያ","RW":"ሩዋንዳ","SA":"ስዑዲ ዓረብ","SB":"ሰሎሞን ደሴት","SC":"ሲሼልስ","SD":"ሱዳን","SE":"ስዊድን","SG":"ሲንጋፖር","SH":"ሴንት ሄለና","SI":"ስሎቬኒያ","SJ":"ስቫልባርድን ዣን ማየን ደሴታት","SK":"ስሎቫኪያ","SL":"ሴራሊዮን","SM":"ሳን ማሪኖ","SN":"ሴኔጋል","SO":"ሱማሌ","SR":"ሱሪናም","SS":"ደቡብ ሱዳን","ST":"ሳኦ ቶሜን ፕሪንሲፔን","SV":"ኤል ሳልቫዶር","SX":"ሲንት ማርቲን","SY":"ሲሪያ","SZ":"ሱዋዚላንድ","TA":"ትሪስን ዳ ኩንሃ","TC":"ደሴታት ቱርክን ካይኮስን","TD":"ጫድ","TF":"ናይ ፈረንሳይ ደቡባዊ ግዝኣታት","TG":"ቶጐ","TH":"ታይላንድ","TJ":"ታጃኪስታን","TK":"ቶክላው","TL":"ምብራቕ ቲሞር","TM":"ቱርክሜኒስታን","TN":"ቱኒዚያ","TO":"ቶንጋ","TR":"ቱርክ","TT":"ትሪኒዳድን ቶባጎን","TV":"ቱቫሉ","TW":"ታይዋን","TZ":"ታንዛኒያ","UA":"ዩክሬን","UG":"ዩጋንዳ","UM":"ናይ ኣሜሪካ ፍንትት ዝበሉ ደሴታት","UN":"UN","US":"አሜሪካ","UY":"ኡራጓይ","UZ":"ዩዝበኪስታን","VA":"ቫቲካን","VC":"ቅዱስ ቪንሴንትን ግሬናዲንስን","VE":"ቬንዙዌላ","VG":"ቨርጂን ደሴታት እንግሊዝ","VI":"ቨርጂን ደሴታት ኣሜሪካ","VN":"ቬትናም","VU":"ቫኑአቱ","WF":"ዋሊስን ፉቱናን","WS":"ሳሞአ","XA":"XA","XB":"XB","XK":"ኮሶቮ","YE":"የመን","YT":"ሜይኦቴ","ZA":"ደቡብ አፍሪካ","ZM":"ዛምቢያ","ZW":"ዚምቧቤ","ZZ":"ZZ"},"short":{"GB":"ዩኬይ","HK":"ሆንግ ኮንግ","MO":"ማካው","PS":"ፍልስጤም","US":"ዩኤስ"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"ፊደል","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"ላቲን","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"AED","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"AOA","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"AUD","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"BHD","BIF":"BIF","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"የብራዚል ሪል","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"BWP","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"CAD","CDF":"CDF","CHE":"CHE","CHF":"CHF","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"የቻይና ዩአን ረንሚንቢ","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"CVE","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"DJF","DKK":"DKK","DOP":"DOP","DZD":"DZD","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"EGP","ERN":"ERN","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"የኢትዮጵያ ብር","EUR":"አውሮ","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"የእንግሊዝ ፓውንድ ስተርሊንግ","GEK":"GEK","GEL":"GEL","GHC":"GHC","GHS":"GHS","GIP":"GIP","GMD":"GMD","GNF":"GNF","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"የሕንድ ሩፒ","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"የጃፓን የን","KES":"KES","KGS":"KGS","KHR":"KHR","KMF":"KMF","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"LRD","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"LYD","MAD":"MAD","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"MGA","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"MRO","MRU":"MRU","MTL":"MTL","MTP":"MTP","MUR":"MUR","MVP":"MVP","MVR":"MVR","MWK":"MWK","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"MZM","MZN":"MZN","NAD":"NAD","NGN":"NGN","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"የራሻ ሩብል","RUR":"RUR","RWF":"RWF","SAR":"SAR","SBD":"SBD","SCR":"SCR","SDD":"SDD","SDG":"SDG","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"SHP","SIT":"SIT","SKK":"SKK","SLL":"SLL","SOS":"SOS","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"STD","STN":"STN","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"SZL","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"TND","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"TZS","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"UGX","USD":"የአሜሪካን ዶላር","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"XOF","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ZAR","ZMK":"ZMK","ZMW":"ZMW","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["ti-ER"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
