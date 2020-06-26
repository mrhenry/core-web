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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ug").length
)) {
// Intl.DisplayNames.~locale.ug
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"ug":{"types":{"language":{"long":{"aa":"ئافارچە","ab":"ئابخازچە","ace":"ئاتجېچە","ach":"ئاچولىچە","ada":"ئاداڭمېچە","ady":"ئادىگېيچە","ae":"ئاۋېستاچە","af":"ئافرىكانچە","afh":"ئافرىخىلىچە","agq":"ئاگەمچە","ain":"ئاينۇچە","ak":"ئاكانچە","akk":"ئاككادچە","ale":"ئالېيۇتچە","alt":"جەنۇبى ئالتاي تىللىرى","am":"ئامھارچە","an":"ئاراگونچە","ang":"قەدىمكى ئىنگلىزچە","anp":"ئانگىكاچە","ar":"ئەرەبچە","ar-001":"ھازىرقى زامان ئۆلچەملىك ئەرەبچە","arc":"ئارامۇچە","arn":"ماپۇدۇنگۇنچە","arp":"ئاراپاخوچە","arw":"ئاراۋاكچە","as":"ئاسامچە","asa":"ئاسۇچە","ast":"ئاستۇرىيەچە","av":"ئاۋارچە","awa":"ئاۋادىچە","ay":"ئايماراچە","az":"ئەزەربەيجانچە","ba":"باشقىرتچە","bal":"بېلۇجىچە","ban":"بالىچە","bas":"باساچە","bax":"بامۇنچە","bbj":"گومالاچە","be":"بېلارۇسچە","bej":"بېجاچە","bem":"بېمباچە","bez":"بېناچە","bfd":"بافۇتچە","bg":"بۇلغارچە","bho":"بوجپۇرىچە","bi":"بىسلاماچە","bik":"بىكولچە","bin":"بىنىچە","bkm":"كومچە","bla":"سىكسىكاچە","bm":"بامباراچە","bn":"بېنگالچە","bo":"تىبەتچە","br":"بىرېتونچە","bra":"بىراجچە","brx":"بودوچە","bs":"بوسىنچە","bss":"ئاكۇسچە","bua":"بۇرىياتچە","bug":"بۇگىچە","bum":"بۇلۇچە","byn":"بىلىنچە","byv":"مېدۇمباچە","ca":"كاتالانچە","cad":"كاددوچە","car":"كارىبچە","cay":"كايۇگاچە","cch":"ئاتسامچە","ccp":"ccp","ce":"چېچىنچە","ceb":"سېبۇچە","cgg":"چىگاچە","ch":"چامورروچە","chb":"چىبچاچە","chg":"چاغاتايچە","chk":"چۇكچە","chm":"مارىچە","chn":"چىنۇك-ژارگونچە","cho":"چوكتاۋچە","chp":"چىپېۋيانچە","chr":"چېروكىچە","chy":"چېيېنچە","ckb":"مەركىزىي كۇردچە","co":"كورسۇچە","cop":"كوپتىكچە","cr":"كرىچە","crh":"قىرىم تۈركچە","cs":"چېخچە","csb":"كاسزۇبىچە","cu":"قەدىمكى سلاۋيانچە","cv":"چۇۋاشچە","cy":"ۋېلشچە","da":"دانىشچە","dak":"داكوتاچە","dar":"دارگىۋاچە","dav":"تايتاچە","de":"گېرمانچە","de-AT":"ئاۋستىرىيە گېرمانچە","de-CH":"شىۋىتسارىيە ئېگىزلىك گېرمانچە","del":"دېلاۋارېچە","den":"سلاۋچە","dgr":"دوگرىبچە","din":"دىنكاچە","dje":"زارماچە","doi":"دوگرىچە","dsb":"تۆۋەن سوربچە","dua":"دۇئالاچە","dum":"ئوتتۇرا گوللاندىيەچە","dv":"دىۋېخچە","dyo":"جولاچە","dyu":"دىيۇلاچە","dz":"زوڭخاچە","dzg":"دازاگاچە","ebu":"ئېمبۇچە","ee":"ئېۋېچە","efi":"ئېفىكچە","egy":"قەدىمكى مىسىرچە","eka":"ئېكاجۇكچە","el":"گىرېكچە","elx":"ئېلامىتچە","en":"ئىنگلىزچە","en-AU":"ئاۋسترالىيە ئىنگلىزچە","en-CA":"كانادا ئىنگلىزچە","en-GB":"ئەنگلىيە ئىنگلىزچە","en-US":"ئامېرىكا ئىنگلىزچە","enm":"ئوتتۇرا ئەسىر ئىنگلىزچە","eo":"ئېسپرانتوچە","es":"ئىسپانچە","es-419":"لاتىن ئامېرىكا ئىسپانچە","es-ES":"ياۋروپا ئىسپانچە","es-MX":"مېكسىكا ئىسپانچە","et":"ئېستونچە","eu":"باسكىچە","ewo":"ئېۋوندوچە","fa":"پارسچە","fan":"فاڭچە","fat":"فانتىچە","ff":"فۇلاھچە","fi":"فىنچە","fil":"فىلىپپىنچە","fj":"فىجىچە","fo":"فائېروچە","fon":"فونچە","fr":"فىرانسۇزچە","fr-CA":"كانادا فىرانسۇزچە","fr-CH":"شىۋىتسارىيە فىرانسۇزچە","frc":"frc","frm":"ئوتتۇرا ئەسىر فىرانسۇزچە","fro":"قەدىمكى فىرانسۇزچە","frr":"شىمالى فىرىزيەچە","frs":"شەرقى فىرىزيەچە","fur":"فىرىئۇلىچە","fy":"غەربىي فىرسچە","ga":"ئىرېلاندچە","gaa":"گاچە","gay":"گايوچە","gba":"گىباياچە","gd":"شوتلاندىيە گايلچىسى","gez":"گىزچە","gil":"گىلبېرتچە","gl":"گالىچە","gmh":"ئوتتۇرا ئەسىر ئېگىزلىك گېرمانچە","gn":"گۇئارانىچە","goh":"قەدىمكى ئېگىزلىك گېرمانچە","gon":"گوندىچە","gor":"گورونتالوچە","got":"گوتچە","grb":"گرېبوچە","grc":"قەدىمكى گىرېكچە","gsw":"گېرمانچە شىۋىتسارىيە","gu":"گۇجاراتچە","guz":"گۇسىچە","gv":"مانچە","gwi":"گىۋىچىنچە","ha":"خائۇساچە","hai":"ھەيدەچە","haw":"ھاۋايچە","he":"ئىبرانىيچە","hi":"ھىندىچە","hil":"خىلىگاينونچە","hit":"خىتتىتچە","hmn":"مۆڭچە","ho":"ھىرى موتۇچە","hr":"كىرودىچە","hsb":"ئۈستۈن سوربچە","ht":"ھايتىچە","hu":"ۋېنگىرچە","hup":"خۇپاچە","hy":"ئەرمېنچە","hz":"خېرېروچە","ia":"ئارىلىق تىل","iba":"ئىبانچە","ibb":"ئىبىبىئوچە","id":"ھىندونېزچە","ie":"ئىنتىرلىڭچە","ig":"ئىگبوچە","ii":"يىچە (سىچۈەن)","ik":"ئىنۇپىكچە","ilo":"ئىلوكانوچە","inh":"ئىنگۇشچە","io":"ئىدوچە","is":"ئىسلاندچە","it":"ئىتالىيانچە","iu":"ئىنۇكتىتۇتچە","ja":"ياپونچە","jbo":"لوجبانچە","jgo":"نگومباچە","jmc":"ماچامچە","jpr":"ئىبرانى پارسچە","jrb":"ئىبرانى ئەرەبچە","jv":"ياۋاچە","ka":"گىرۇزچە","kaa":"قارا-قالپاقچە","kab":"كابىلېچە","kac":"كاچىنچە","kaj":"جۇچە","kam":"كامباچە","kaw":"كاۋىچە","kbd":"كاباردەيچە","kbl":"كانېمبۇچە","kcg":"تياپچە","kde":"ماكوندېچە","kea":"كابۇۋېردىيانچە","kfo":"كوروچە","kg":"كونگوچە","kha":"كاسىچە","kho":"خوتەنچە","khq":"كويرا چىنىچە","ki":"كىكۇيۇچە","kj":"كىۋانياماچە","kk":"قازاقچە","kkj":"كاكوچە","kl":"گىرېنلاندچە","kln":"كالېنجىنچە","km":"كىمېرچە","kmb":"كىمبۇندۇچە","kn":"كانناداچە","ko":"كورېيەچە","kok":"كونكانچە","kos":"كوسرايېچە","kpe":"كىپەللېچە","kr":"كانۇرچە","krc":"قاراچاي-بالقارچە","krl":"كارەلچە","kru":"كۇرۇخچە","ks":"كەشمىرچە","ksb":"شامبالاچە","ksf":"بافىياچە","ksh":"كولىشچە","ku":"كۇردچە","kum":"قۇمۇقچە","kut":"كۇتەنايچە","kv":"كومىچە","kw":"كورنىشچە","ky":"قىرغىزچە","la":"لاتىنچە","lad":"لادىنوچە","lag":"لانگىچە","lah":"لانداچە","lam":"لامباچە","lb":"لىيۇكسېمبۇرگچە","lez":"لېزگىنچە","lg":"گانداچە","li":"لىمبۇرگچە","lkt":"lkt","ln":"لىنگالاچە","lo":"لائوسچە","lol":"مونگوچە","lou":"lou","loz":"لوزىچە","lrc":"lrc","lt":"لىتۋانىچە","lu":"لۇبا-كاتانگاچە","lua":"لۇبا-لۇئاچە","lui":"لۇيسېنگوچە","lun":"لۇنداچە","luo":"لۇئوچە","lus":"مىزوچە","luy":"لۇياچە","lv":"لاتچە","mad":"مادۇرېسچە","maf":"مافاچە","mag":"ماگاخىچە","mai":"مايتىلىچە","mak":"ماكاسارچە","man":"ماندىنگوچە","mas":"ماسايچە","mde":"ماباچە","mdf":"موكشاچە","mdr":"ماندارچە","men":"مېندېچە","mer":"مېرۇچە","mfe":"مورىسيېنچە","mg":"مالاگاسچە","mga":"ئوتتۇرا ئەسىر ئىرېلاندچە","mgh":"ماكۇۋاچە","mgo":"مېتاچە’","mh":"مارشالچە","mi":"ماۋرىچە","mic":"مىكماكچە","min":"مىناڭكابائۇچە","mk":"ماكېدونچە","ml":"مالايالامچە","mn":"موڭغۇلچە","mnc":"مانجۇچە","mni":"مانىپۇرچە","moh":"موخاۋكچە","mos":"موسسىچە","mr":"ماراتىچە","ms":"مالايچە","mt":"مالتاچە","mua":"مۇنداڭچە","mul":"كۆپ تىللار","mus":"كىرىكچە","mwl":"مىراندېسچە","mwr":"مارۋارىچە","my":"بىرماچە","mye":"ميېنېچە","myv":"ئېرزاچە","mzn":"mzn","na":"ناۋرۇچە","nap":"ناپولىچە","naq":"ناماچە","nb":"نورۋىگىيە بوكمالچە","nd":"شىمالى ندەبەلەچە","nds":"تۆۋەن گېرمانچە","nds-NL":"تۆۋەن گېرمانچە (گوللاندىيە)","ne":"نېپالچە","new":"نېۋارىچە","ng":"ندونگاچە","nia":"نىئاسچە","niu":"نيۇئېچە","nl":"گوللاندچە","nl-BE":"گوللاندچە (بېلگىيە)","nmg":"كۋاسىيوچە","nn":"يېڭى نورۋېگچە","nnh":"نگېمبۇنچە","no":"نورۋېگچە","nog":"نوغايچە","non":"قەدىمكى نورۋېگچە","nqo":"نىكوچە","nr":"جەنۇبى ندەبەلەچە","nso":"شىمالىي سوتوچە","nus":"مۇئېرچە","nv":"ناۋاخوچە","nwc":"نېۋارچە","ny":"نىيانجاچە","nym":"نيامۋېزىچە","nyn":"نىيانكولېچە","nyo":"نىئوروچە","nzi":"نىزەماچە","oc":"ئوكسىتچە","oj":"ئوجىبۋاچە","om":"ئوروموچە","or":"ئودىياچە","os":"ئوسسېتچەچە","osa":"ئوساگېلارچە","ota":"ئوسمان تۈركچە","pa":"پەنجابچە","pag":"پانگاسىنانچە","pal":"پەھلەۋىچە","pam":"پامپانگاچە","pap":"پاپىيامېنتوچە","pau":"پالاۋچە","peo":"قەدىمكى پارىسچە","phn":"فىنىكىيەچە","pi":"پالىچە","pl":"پولەكچە","pon":"پوناپېئانچە","prg":"prg","pro":"قەدىمكى پروۋېنچالچە","ps":"پۇشتۇچە","pt":"پورتۇگالچە","pt-BR":"بىرازىلىيە پورتۇگالچە","pt-PT":"ياۋروپا پورتۇگالچە","qu":"كېچىۋاچە","raj":"راجاستانچە","rap":"راپانىيچە","rm":"رومانسچە","rn":"رۇندىچە","ro":"رومىنچە","ro-MD":"رومىنچە (مولدوۋا)","rof":"رومبوچە","rom":"سىگانچە","root":"غول تىل","ru":"رۇسچە","rup":"ئارومانچە","rw":"كېنىيەرىۋانداچە","rwk":"رىۋاچە","sa":"سانسكرىتچە","sad":"سانداۋېچە","sah":"ساخاچە","sam":"سامارىتانچە","saq":"سامبۇرۇچە","sas":"ساساكچە","sat":"سانتالچە","sba":"نگامبايچە","sbp":"سانگۇچە","sc":"ساردىنىيەچە","scn":"سىتسىلىيەچە","sco":"شوتلاندىيەچە","sd":"سىندىچە","se":"شىمالىي سامىچە","see":"سېكنېكاچە","seh":"سېناچە","sel":"سېلكاپچە","ses":"شەرقىي سوڭخايچە","sg":"سانگوچە","sga":"قەدىمكى ئىرېلاندچە","sh":"سېرب-كرودىيەچە","shi":"شىلخاچە","shn":"شانچە","shu":"چاد ئەرەبچە","si":"سىنگالچە","sid":"سىداموچە","sk":"سىلوۋاكچە","sl":"سىلوۋېنچە","sm":"ساموئاچە","sma":"جەنۇبىي سامىچە","smj":"لۇلې سامىچە","smn":"ئىنارى سامىچە","sms":"سكولت سامىچە","sn":"شوناچە","snk":"سونىنكەچە","so":"سومالىچە","sog":"سوغدىچە","sq":"ئالبانچە","sr":"سېربچە","srn":"سىرانان-توڭوچە","srr":"سېرېرچە","ss":"سىۋاتىچە","ssy":"ساخوچە","st":"سوتوچە","su":"سۇنداچە","suk":"سۇكۇماچە","sus":"سۇسۇچە","sux":"سۈمەرچە","sv":"شىۋېدچە","sw":"سىۋاھىلچە","sw-CD":"كونگو سىۋالىچە","swb":"كومورىچە","syc":"قەدىمىي سۇرىيەچە","syr":"سۇرىيەچە","ta":"تامىلچە","te":"تېلۇگۇچە","tem":"تېمنېچە","teo":"تېسوچە","ter":"تېرېناچە","tet":"تېتۇمچە","tg":"تاجىكچە","th":"تايلاندچە","ti":"تىگرىنياچە","tig":"تىگرېچە","tiv":"تىۋچە","tk":"تۈركمەنچە","tkl":"توكېلاۋچە","tl":"تاگالوگچە","tlh":"كىلىنگونچە","tli":"تىلىنگىتچە","tmh":"تاماشېكچە","tn":"سىۋاناچە","to":"تونگانچە","tog":"نياسا توڭانچە","tpi":"توك-پىسىنچە","tr":"تۈركچە","trv":"توروكوچە","ts":"سونگاچە","tsi":"سىمشيانچە","tt":"تاتارچە","tum":"تۇمبۇكاچە","tvl":"تۇۋالۇچە","tw":"تىۋىچە","twq":"شىمالىي سوڭخايچە","ty":"تاختىچە","tyv":"توۋاچە","tzm":"مەركىزىي ئاتلاس تامازايتچە","udm":"ئۇدمۇرتچە","ug":"ئۇيغۇرچە","uga":"ئۇگارىتىكچە","uk":"ئۇكرائىنچە","umb":"ئۇمبۇندۇچە","und":"يوچۇن تىل","ur":"ئوردۇچە","uz":"ئۆزبېكچە","vai":"ۋايچە","ve":"ۋېنداچە","vi":"ۋىيېتنامچە","vo":"ۋولاپۇكچە","vot":"ۋوتېچە","vun":"ۋۇنجوچە","wa":"ۋاللۇنچە","wae":"ۋالسېرچە","wal":"ۋولايتاچە","war":"ۋارايچە","was":"ۋاشوچە","wo":"ۋولوفچە","xal":"قالماقچە","xh":"خوساچە","xog":"سوگاچە","yao":"ياۋچە","yap":"ياپچە","yav":"ياڭبەنچە","ybb":"يېمباچە","yi":"يىددىشچە","yo":"يورۇباچە","yue":"گۇاڭدوڭچە","za":"جۇاڭچە","zap":"زاپوتېكچە","zbl":"بىلىس بەلگىلىرى","zen":"زېناگاچە","zgh":"ئۆلچەملىك ماراكەش تامازىتچە","zh":"خەنزۇچە","zh-Hans":"ئاددىي خەنچە","zh-Hant":"مۇرەككەپ خەنچە","zu":"زۇلۇچە","zun":"زۇنىچە","zxx":"تىل مەزمۇنى يوق","zza":"زازاچە"},"short":{"az":"az","en-GB":"ئەنگلىيە ئىنگلىزچە","en-US":"ئامېرىكا ئىنگلىزچە"},"narrow":{}},"region":{"long":{"142":"ئاسىيا","143":"ئوتتۇرا ئاسىيا","145":"غەربىي ئاسىيا","150":"ياۋروپا","151":"شەرقىي ياۋروپا","154":"شىمالىي ياۋروپا","155":"غەربىي ياۋروپا","202":"202","419":"لاتىن ئامېرىكا","001":"دۇنيا","002":"ئافرىقا","003":"شىمالىي ئامېرىكا","005":"جەنۇبىي ئامېرىكا","009":"ئوكيانىيە","011":"غەربىي ئافرىقا","013":"ئوتتۇرا ئامېرىكا","014":"شەرقىي ئافرىقا","015":"شىمالىي ئافرىقا","017":"ئوتتۇرا ئافرىقا","018":"جەنۇبىي ئافرىقا رايونى","019":"ئامېرىكا","021":"شىمالىي ئامېرىكا رايونى","029":"كارىب دېڭىزى","030":"شەرقىي ئاسىيا","034":"جەنۇبىي ئاسىيا","035":"شەرقىي جەنۇبىي ئاسىيا","039":"جەنۇبىي ياۋروپا","053":"ئاۋسترالئاسىيا","054":"مېلانېسىيە","057":"مىكرونېزىيە رايونى","061":"پولىنىزىيە","AC":"ئاسسېنسىيون ئارىلى","AD":"ئاندوررا","AE":"ئەرەب بىرلەشمە خەلىپىلىكى","AF":"ئافغانىستان","AG":"ئانتىگۇئا ۋە باربۇدا","AI":"ئانگۋىللا","AL":"ئالبانىيە","AM":"ئەرمېنىيە","AO":"ئانگولا","AQ":"ئانتاركتىكا","AR":"ئارگېنتىنا","AS":"ئامېرىكا ساموئا","AT":"ئاۋىستىرىيە","AU":"ئاۋسترالىيە","AW":"ئارۇبا","AX":"ئالاند ئاراللىرى","AZ":"ئەزەربەيجان","BA":"بوسىنىيە ۋە گېرتسېگوۋىنا","BB":"باربادوس","BD":"بېنگال","BE":"بېلگىيە","BF":"بۇركىنا فاسو","BG":"بۇلغارىيە","BH":"بەھرەين","BI":"بۇرۇندى","BJ":"بېنىن","BL":"ساينت بارتېلېمى","BM":"بېرمۇدا","BN":"بىرۇنېي","BO":"بولىۋىيە","BQ":"كارىب دېڭىزى گوللاندىيە","BR":"بىرازىلىيە","BS":"باھاما","BT":"بۇتان","BV":"بوۋېت ئارىلى","BW":"بوتسۋانا","BY":"بېلارۇسىيە","BZ":"بېلىز","CA":"كانادا","CC":"كوكوس (كىلىڭ) ئاراللىرى","CD":"كونگو - كىنشاسا","CF":"ئوتتۇرا ئافرىقا جۇمھۇرىيىتى","CG":"كونگو - بىراززاۋىل","CH":"شىۋېتسارىيە","CI":"كوتې دې ئىۋوئىر","CK":"كۇك ئاراللىرى","CL":"چىلى","CM":"كامېرون","CN":"جۇڭگو","CO":"كولومبىيە","CP":"كىلىپپېرتون ئاراللىرى","CR":"كوستارىكا","CU":"كۇبا","CV":"يېشىل تۇمشۇق","CW":"كۇراچاۋ","CX":"مىلاد ئارىلى","CY":"سىپرۇس","CZ":"چېخ جۇمھۇرىيىتى","DE":"گېرمانىيە","DG":"دېگو-گارشىيا","DJ":"جىبۇتى","DK":"دانىيە","DM":"دومىنىكا","DO":"دومىنىكا جۇمھۇرىيىتى","DZ":"ئالجىرىيە","EA":"سېيتا ۋە مېلىلا","EC":"ئېكۋاتور","EE":"ئېستونىيە","EG":"مىسىر","EH":"غەربىي ساخارا","ER":"ئېرىترىيە","ES":"ئىسپانىيە","ET":"ئېفىيوپىيە","EU":"ياۋروپا ئىتتىپاقى","EZ":"EZ","FI":"فىنلاندىيە","FJ":"فىجى","FK":"فالكلاند ئاراللىرى","FM":"مىكرونېزىيە","FO":"فارو ئاراللىرى","FR":"فىرانسىيە","GA":"گابون","GB":"بىرلەشمە پادىشاھلىق","GD":"گىرېنادا","GE":"گىرۇزىيە","GF":"فىرانسىيەگە قاراشلىق گىۋىيانا","GG":"گۇرنسېي","GH":"گانا","GI":"جەبىلتارىق","GL":"گىرېنلاندىيە","GM":"گامبىيە","GN":"گىۋىنىيە","GP":"گىۋادېلۇپ","GQ":"ئېكۋاتور گىۋىنىيەسى","GR":"گىرېتسىيە","GS":"جەنۇبىي جورجىيە ۋە جەنۇبىي ساندۋىچ ئاراللىرى","GT":"گىۋاتېمالا","GU":"گۇئام","GW":"گىۋىنىيە بىسسائۇ","GY":"گىۋىيانا","HK":"شياڭگاڭ ئالاھىدە مەمۇرىي رايونى (جۇڭگو)","HM":"ھېرد ئارىلى ۋە ماكدونالد ئاراللىرى","HN":"ھوندۇراس","HR":"كىرودىيە","HT":"ھايتى","HU":"ۋېنگىرىيە","IC":"كانارى ئاراللىرى","ID":"ھىندونېزىيە","IE":"ئىرېلاندىيە","IL":"ئىسرائىلىيە","IM":"مان ئارىلى","IN":"ھىندىستان","IO":"ئەنگلىيەگە قاراشلىق ھىندى ئوكيان تېررىتورىيەسى","IQ":"ئىراق","IR":"ئىران","IS":"ئىسلاندىيە","IT":"ئىتالىيە","JE":"جېرسېي","JM":"يامايكا","JO":"ئىيوردانىيە","JP":"ياپونىيە","KE":"كېنىيە","KG":"قىرغىزىستان","KH":"كامبودژا","KI":"كىرىباتى","KM":"كومورو","KN":"ساينت كىتىس ۋە نېۋىس","KP":"چاۋشيەن","KR":"كورېيە","KW":"كۇۋەيت","KY":"كايمان ئاراللىرى","KZ":"قازاقىستان","LA":"لائوس","LB":"لىۋان","LC":"ساينت لۇسىيە","LI":"لىكتېنستېين","LK":"سىرىلانكا","LR":"لىبېرىيە","LS":"لېسوتو","LT":"لىتۋانىيە","LU":"لىيۇكسېمبۇرگ","LV":"لاتۋىيە","LY":"لىۋىيە","MA":"ماراكەش","MC":"موناكو","MD":"مولدوۋا","ME":"قارا تاغ","MF":"ساينت مارتىن","MG":"ماداغاسقار","MH":"مارشال ئاراللىرى","MK":"شىمالىي ماكېدونىيە","ML":"مالى","MM":"بىرما","MN":"موڭغۇلىيە","MO":"ئاۋمېن ئالاھىدە مەمۇرىي رايونى","MP":"شىمالىي مارىيانا ئاراللىرى","MQ":"مارتىنىكا","MR":"ماۋرىتانىيە","MS":"مونتسېررات","MT":"مالتا","MU":"ماۋرىتىيۇس","MV":"مالدىۋې","MW":"مالاۋى","MX":"مېكسىكا","MY":"مالايسىيا","MZ":"موزامبىك","NA":"نامىبىيە","NC":"يېڭى كالېدونىيە","NE":"نىگېر","NF":"نورفولك ئارىلى","NG":"نىگېرىيە","NI":"نىكاراگۇئا","NL":"گوللاندىيە","NO":"نورۋېگىيە","NP":"نېپال","NR":"ناۋرۇ","NU":"نيۇئې","NZ":"يېڭى زېلاندىيە","OM":"ئومان","PA":"پاناما","PE":"پېرۇ","PF":"فىرانسىيەگە قاراشلىق پولىنېزىيە","PG":"پاپۇئا يېڭى گىۋىنىيەسى","PH":"فىلىپپىن","PK":"پاكىستان","PL":"پولشا","PM":"ساينت پىيېر ۋە مىكېلون ئاراللىرى","PN":"پىتكايرن ئاراللىرى","PR":"پۇئېرتو رىكو","PS":"پەلەستىن زېمىنى","PT":"پورتۇگالىيە","PW":"پالائۇ","PY":"پاراگۋاي","QA":"قاتار","QO":"ئوكيانىيە ئەتراپىدىكى ئاراللار","RE":"رېيۇنىيون","RO":"رومىنىيە","RS":"سېربىيە","RU":"رۇسىيە","RW":"رىۋاندا","SA":"سەئۇدىي ئەرەبىستان","SB":"سولومون ئاراللىرى","SC":"سېيشېل","SD":"سۇدان","SE":"شىۋېتسىيە","SG":"سىنگاپور","SH":"ساينىت ھېلېنا","SI":"سىلوۋېنىيە","SJ":"سىۋالبارد ۋە يان مايېن","SK":"سىلوۋاكىيە","SL":"سېررالېئون","SM":"سان مارىنو","SN":"سېنېگال","SO":"سومالى","SR":"سۇرىنام","SS":"جەنۇبىي سۇدان","ST":"سان تومې ۋە پرىنسىپې","SV":"سالۋادور","SX":"سىنت مارتېن","SY":"سۇرىيە","SZ":"سىۋېزىلاند","TA":"ترىستان داكۇنھا","TC":"تۇركس ۋە كايكوس ئاراللىرى","TD":"چاد","TF":"فىرانسىيەنىڭ جەنۇبىي زېمىنى","TG":"توگو","TH":"تايلاند","TJ":"تاجىكىستان","TK":"توكېلاۋ","TL":"شەرقىي تىمور","TM":"تۈركمەنىستان","TN":"تۇنىس","TO":"تونگا","TR":"تۈركىيە","TT":"تىرىنىداد ۋە توباگو","TV":"تۇۋالۇ","TW":"تەيۋەن","TZ":"تانزانىيە","UA":"ئۇكرائىنا","UG":"ئۇگاندا","UM":"ئا ق ش تاشقى ئاراللىرى","UN":"UN","US":"ئامېرىكا قوشما ئىشتاتلىرى","UY":"ئۇرۇگۋاي","UZ":"ئۆزبېكىستان","VA":"ۋاتىكان","VC":"ساينت ۋىنسېنت ۋە گىرېنادىنېس","VE":"ۋېنېسۇئېلا","VG":"ئەنگلىيە ۋىرگىن ئاراللىرى","VI":"ئا ق ش ۋىرگىن ئاراللىرى","VN":"ۋىيېتنام","VU":"ۋانۇئاتۇ","WF":"ۋاللىس ۋە فۇتۇنا","WS":"ساموئا","XA":"XA","XB":"XB","XK":"كوسوۋو","YE":"يەمەن","YT":"مايوتى","ZA":"جەنۇبىي ئافرىقا","ZM":"زامبىيە","ZW":"زىمبابۋې","ZZ":"يوچۇن جاي"},"short":{"GB":"ئەنگلىيە","HK":"شياڭگاڭ","MO":"ئاۋمېن","PS":"پەلەستىن","US":"ئا ق ش"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Afak":"ئافاكا","Aghb":"Aghb","Ahom":"Ahom","Arab":"ئەرەب","Armi":"خان جەمەتى ئارامۇ","Armn":"ئەرمەن","Avst":"ئاۋېستا","Bali":"بالى","Bamu":"بامۇم","Bass":"باسسا","Batk":"باتاك","Beng":"بېنگال","Bhks":"Bhks","Blis":"بىلىس بەلگىلىرى","Bopo":"خەنچە پىنيىن","Brah":"براخمى","Brai":"برائىل ئەمالار يېزىقى","Bugi":"بۇگى","Buhd":"بۇخىت","Cakm":"چاكما","Cans":"بىرلىككە كەلگەن كانادا يەرلىك بوغۇم جەدۋىلى","Cari":"كارىيا","Cham":"چام","Cher":"چېروكى","Cirt":"كىرسچە","Copt":"كوپتىك","Cprt":"سىپرۇس","Cyrl":"كىرىل","Cyrs":"قەدىمكى چىركاۋ سىلاۋيانچە كىرىل","Deva":"دېۋاناگارى","Dogr":"Dogr","Dsrt":"دېزېرېت","Dupl":"دۇپلويان تېز خاتىرىلەش","Egyd":"دېموتىكچە مىسىر","Egyh":"خىيەراتىكچە مىسىر","Egyp":"تەسۋىرىي يېزىق مىسىر","Elba":"Elba","Elym":"Elym","Ethi":"ئېفىيوپىيەچە","Geok":"خۇتسۇرى گىرۇزىنچە","Geor":"گىرۇزىنچە","Glag":"گىلاگوتچە","Gong":"Gong","Gonm":"Gonm","Goth":"گوتچە","Gran":"گىرانتاچە","Grek":"گىرېكچە","Gujr":"گۇجاراتچە","Guru":"گۇرمۇكىچە","Hanb":"Hanb","Hang":"Hang","Hani":"خەنچە","Hano":"خانۇنۇچە","Hans":"ئاددىي خەنچە","Hant":"مۇرەككەپ خەنچە","Hatr":"Hatr","Hebr":"ئىبرانىچە","Hira":"خىراگانا","Hluw":"ئاناتولىيە تەسۋىرىي يېزىق","Hmng":"مۆڭچە","Hmnp":"Hmnp","Hrkt":"ياپونچە خىراگانا ياكى كاتاكانا","Hung":"قەدىمكى ماجارچە","Inds":"ئىندۇسچە","Ital":"قەدىمكى ئىتاليانچە","Jamo":"Jamo","Java":"ياۋاچە","Jpan":"ياپونچە","Jurc":"جۇرچېنچە","Kali":"كاياھچە","Kana":"كاتاكانا","Khar":"كاروشتىچە","Khmr":"كېخمېرچە","Khoj":"خوجكىچە","Knda":"كانناداچە","Kore":"كورېيەچە","Kpel":"كپېللېچە","Kthi":"كاياتىچە","Lana":"لانناچە","Laoo":"لائوسچە","Latf":"فىراكتۇر لاتىنچە","Latg":"سىكوت لاتىنچە","Latn":"لاتىنچە","Lepc":"لەپچاچە","Limb":"لىمبۇچە","Lina":"سىزىقلىق A","Linb":"سىزىقلىق B","Lisu":"فراسېرچە","Loma":"لوماچە","Lyci":"لىسىيانچە","Lydi":"لىدىيەچە","Mahj":"Mahj","Maka":"Maka","Mand":"ماندائىكچە","Mani":"مانەكېزەمچە","Marc":"Marc","Maya":"ماياچە تەسۋىرىي يېزىق","Medf":"Medf","Mend":"مېندېچە","Merc":"مېتروئىت يازمىچە","Mero":"مېتروئىت","Mlym":"مالايامچە","Modi":"Modi","Mong":"موڭغۇلچە","Moon":"كورىيە","Mroo":"مروچە","Mtei":"مانىپۇرىچە","Mult":"Mult","Mymr":"بىرماچە","Nand":"Nand","Narb":"قەدىمكى شىمالىي ئەرەبچە","Nbat":"ئانباتچە","Newa":"Newa","Nkgb":"ناشىچە","Nkoo":"نىكوچە","Nshu":"نۈشۇچە","Ogam":"ئوگەمچە","Olck":"ئول-چىكىچە","Orkh":"ئورخۇنچە","Orya":"ئورىياچە","Osge":"Osge","Osma":"ئوسمانيە","Palm":"پالمىراچە","Pauc":"Pauc","Perm":"قەدىمكى پېرمىكچە","Phag":"پاسپاچە","Phli":"پەھلىۋىچە ئويما خەت","Phlp":"پەھلىۋىچە شېئىرىي تىل","Phlv":"پەھلىۋىچە كىتابى تىل","Phnx":"فىنىكچە","Plrd":"پوللارد تاۋۇشلىرى","Prti":"پارتىئانچە ئويما خەت","Qaag":"Qaag","Rjng":"رېجاڭچە","Rohg":"Rohg","Roro":"روڭگوروڭگو","Runr":"رۇنىكچە","Samr":"سامارىچە","Sara":"ساراتىچە","Sarb":"قەدىمكى جەنۇبى ئەرەبچە","Saur":"سائۇراشتىراچە","Sgnw":"ئىشارەت تىلى","Shaw":"شاۋىيانچە","Shrd":"شاراداچە","Sidd":"Sidd","Sind":"كۇداۋادچە","Sinh":"سىنخالاچە","Sogd":"Sogd","Sogo":"Sogo","Sora":"سورا سامپىڭ","Soyo":"Soyo","Sund":"سۇنداچە","Sylo":"سىيولوتى-ناگرىچە","Syrc":"سۈرىيەچە","Syre":"سۈرىيەچە ئەبجەت","Syrj":"غەربىي سۈرىيەچە","Syrn":"شەرقىي سۈرىيەچە","Tagb":"تاگبانۋاچە","Takr":"تاكرىچە","Tale":"تاي-لەچە","Talu":"يېڭى تاي-لەچە","Taml":"تامىلچە","Tang":"تاڭغۇتچە","Tavt":"تايلاندچە-ۋىيېتنامچە","Telu":"تېلۇگۇچە","Teng":"تېڭۋارچە","Tfng":"تىفىناغچە","Tglg":"تاگالوگچە","Thaa":"تاناچە","Thai":"تايلاندچە","Tibt":"تىبەتچە","Tirh":"تىرخۇتاچە","Ugar":"ئۇگارىتىكچە","Vaii":"ۋايچە","Visp":"كۆرۈنۈشچان تاۋۇش","Wara":"ۋاراڭ كىشىتى","Wcho":"Wcho","Wole":"ۋولىئاي","Xpeo":"قەدىمكى پارىسچە","Xsux":"سۇمېر-ئاككادىيان مىخ خەت","Yiii":"يىچە","Zanb":"Zanb","Zinh":"ئىرسىيەت ئاتالغۇ","Zmth":"ماتېماتىكىلىق بەلگە","Zsye":"Zsye","Zsym":"بەلگە","Zxxx":"يېزىلمىغان","Zyyy":"ئورتاق","Zzzz":"يوچۇن يېزىق"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ئاندورران پېسېتاسى","AED":"ئەرەب بىرلەشمە خەلىپىلىكى دەرھەمى","AFA":"ئافغان ئافغانى (1927–2002)","AFN":"ئافغان ئافغانى","ALK":"ئالبانىيە لېكى (1946–1965)","ALL":"ئالبانىيە لېكى","AMD":"ئەرمېنىيە دىرامى","ANG":"گوللاندىيەگە قاراشلىق ئانتىللېن گۇلدېنى","AOA":"ئانگولا كۇۋانزاسى","AOK":"ئانگولا كۇۋانزاسى (1977–1991)","AON":"ئانگولا يېڭى كۇۋانزاسى (1990–2000)","AOR":"ئانگولا قايتا تەڭشەلگەن كۇۋانزاسى (1995–1999)","ARA":"ئارگېنتىنا ئاۋسترالى","ARL":"ئارگېنتىنا پېسو لېيى (1970–1983)","ARM":"ئارگېنتىنا پېسوسى (1881–1970)","ARP":"ئارگېنتىنا پېسوسى (1983–1985)","ARS":"ئارگېنتىنا پېسوسى","ATS":"ئاۋسترىيە شىللىڭى","AUD":"ئاۋسترالىيە دوللىرى","AWG":"ئارۇبان فىلورۇنى","AZM":"ئەزەربەيجان ماناتى (1993–2006)","AZN":"ئەزەربەيجان ماناتى","BAD":"بوسنىيە-خېرتسېگوۋىنا دىنارى (1992–1994)","BAM":"بوسنىيە-خېرتسېگوۋىنا ئالماشتۇرۇشچان ماركى","BAN":"بوسنىيە-خېرتسېگوۋىنا يېڭى دىنارى (1994–1997)","BBD":"باربادوس دوللىرى","BDT":"باڭلادىش تاكاسى","BEC":"بېلگىيە فرانكى (ئالماشتۇرۇشچان)","BEF":"بېلگىيە فرانكى","BEL":"بېلگىيە فرانكى (پۇل–مۇئامىلە)","BGL":"بۇلغارىيە قاتتىق لېۋاسى","BGM":"بۇلغارىيە ئىجتىمائىي لېۋاسى","BGN":"بۇلغارىيە لېۋاسى","BGO":"بۇلغارىيە لېۋاسى (1879–1952)","BHD":"بەھرەين دىنارى","BIF":"بۇرۇندى فرانكى","BMD":"بېرمۇدا دوللىرى","BND":"بىرۇنېي دوللىرى","BOB":"بولىۋىيە بولىۋىيانوسى","BOL":"بولىۋىيە بولىۋىيانوسى (1863–1963)","BOP":"بولىۋىيە پىسوسى","BOV":"بولىۋىيە مۇدولى","BRB":"بىرازىلىيە يېڭى كرۇزېروسى (1967–1986)","BRC":"بىرازىلىيە كرۇزادوسى (1986–1989)","BRE":"بىرازىلىيە يېڭى كرۇزېروسى (1990–1993)","BRL":"بىرازىلىيە رىيالى","BRN":"بىرازىلىيە يېڭى كرۇزادوسى (1989–1990)","BRR":"بىرازىلىيە كرۇزېروسى (1993–1994)","BRZ":"بىرازىلىيە كرۇزېروسى (1942–1967)","BSD":"باھاما دوللىرى","BTN":"بۇتان نگۇلترۇمى","BUK":"بىرما كىياتى","BWP":"بوتسۋانا پۇلاسى","BYB":"بېلارۇسىيە يېڭى رۇبلىسى (1994–1999)","BYN":"بېلارۇسىيە رۇبلىسى","BYR":"بېلارۇسىيە رۇبلىسى (۲۰۰۰–۲۰۱۶)","BZD":"بېلىز دوللىرى","CAD":"كانادا دوللىرى","CDF":"كونگو فرانكى","CHE":"WIR ياۋرو","CHF":"شىۋېتسىيە فرانكى","CHW":"WIR فرانكى","CLE":"چىلى ئېسكۇدوسى","CLF":"چىلى ھېسابات بىرلىكى (UF)","CLP":"چىلى پېسوسى","CNH":"CNH","CNX":"جۇڭگو خەلق بانكىسى دوللىرى","CNY":"جۇڭگو يۈەنى","COP":"كولومبىيە پېسوسى","COU":"كولومبىيە ھەقىقىي قىممەت بىرلىكى","CRC":"كوستارىكا كولونى","CSD":"سېربىيە دىنارى (2002–2006)","CSK":"چېخسىلوۋاكىيە قاتتىق كورۇناسى","CUC":"كۇبا ئالماشتۇرۇشچان پېسوسى","CUP":"كۇبا پېسوسى","CVE":"يېشىل تۇمشۇق ئېسكۇدوسى","CYP":"سىپرۇس فوند ستېرلىڭى","CZK":"چېخ جۇمھۇرىيىتى كورۇناسى","DDM":"شەرقىي گېرمانىيە ماركى","DEM":"گېرمانىيە ماركى","DJF":"جىبۇتى فرانكى","DKK":"دانىيە كرونى","DOP":"دومىنىكا پېسوسى","DZD":"ئالجىرىيە دىنارى","ECS":"ئېكۋادور سۇكرېسى","ECV":"ئېكۋادور تۇراقلىق قىممەت بىرلىكى","EEK":"ئېستونىيە كرۇنى","EGP":"مىسىر فوند سىتېرلىڭى","ERN":"ئېرىترېيە ناكفاسى","ESA":"ئىسپانىيە پېسېتاسى (A ھېسابات)","ESB":"ئىسپانىيە پېسېتاسى (ئالماشتۇرۇش ھېساباتى)","ESP":"ئىسپانىيە پېسېتاسى","ETB":"ئېفىيوپىيە بىررى","EUR":"ياۋرو","FIM":"فىنلاندىيە مارككاسى","FJD":"فىجى دوللىرى","FKP":"فالكلاند ئاراللىرى فوند سىتېرلىڭى","FRF":"فىرانسىيە فرانكى","GBP":"ئەنگلىيە فوند سىتېرلىڭى","GEK":"گىرۇزىيە كۇپون لارىتى","GEL":"گىرۇزىيە لارىسى","GHC":"گانا سېدىسى (1979–2007)","GHS":"گانا سېدىسى","GIP":"جەبىلتارىق فوند سىتېرلىڭى","GMD":"گامبىيە دالاسى","GNF":"گىۋىنېيە فرانكى","GNS":"گىۋىنېيە سىلىسى","GQE":"ئېكۋاتور گىۋىنېيە ئېكۋېلېسى","GRD":"گىرېتسىيە دراخماسى","GTQ":"گىۋاتېمالا كۇۋېتزالى","GWE":"پورتۇگالىيە گىۋىنېيە ئېسكۇدوسى","GWP":"گىۋىنېيە-بىسسائۇ پېسوسى","GYD":"گىۋىئانا دوللىرى","HKD":"شياڭگاڭ دوللىرى","HNL":"ھوندۇراس لېمپىراسى","HRD":"كىرودىيە دىنارى","HRK":"كىرودىيە كۇناسى","HTG":"ھايتى گۇردېسى","HUF":"ۋېنگىرىيە فورېنتى","IDR":"ھىندونېزىيە رۇپىيەسى","IEP":"ئىرېلاندىيە فوندستېرلىڭى","ILP":"ئىسرائىلىيە فوندستېرلىڭى","ILR":"ئىسرائىل شېكېلى (1980–1985)","ILS":"ئىسرائىل يېڭى شېكېلى","INR":"ھىندىستان رۇپىسى","IQD":"ئىراق دىنارى","IRR":"ئىران رىيالى","ISJ":"ئىسلاندىيە كروناسى (1918–1981)","ISK":"ئىسلاندىيە كروناسى","ITL":"ئىتالىيە لىراسى","JMD":"يامايكا دوللىرى","JOD":"ئىيوردانىيە دىنارى","JPY":"ياپونىيە يېنى","KES":"كېنىيە شىللىڭى","KGS":"قىرغىزىستان سومى","KHR":"كامبودژا رىئېلى","KMF":"كومورو فرانكى","KPW":"شىمالىي كورېيە ۋونى","KRH":"جەنۇبىي كورېيە خۋانى (1953–1962)","KRO":"جەنۇبىي كورېيە ۋونى (1945–1953)","KRW":"جەنۇبىي كورېيە ۋونى","KWD":"كۇۋەيت دىنارى","KYD":"كايمان ئاراللىرى دوللىرى","KZT":"قازاقىستان تەڭگىسى","LAK":"لائوس كىپى","LBP":"لىۋان فوند سىتېرلىڭى","LKR":"سىرىلانكا رۇپىسى","LRD":"لىبېرىيە دوللىرى","LSL":"لېسوتو لوتىسى","LTL":"لىتۋا لىتاسى","LTT":"لىتۋا تالوناسى","LUC":"ليۇكسېمبۇرگ ئالماشتۇرۇشچان پېسوسى","LUF":"ليۇكسېمبۇرگ فرانكى","LUL":"لىيۇكسېمبۇرگ پۇل-مۇئامىلە فرانكى","LVL":"لاتۋىيە لاتى","LVR":"لاتۋىيە رۇبلىسى","LYD":"لىۋىيە دىنارى","MAD":"ماراكەش دىرھەمى","MAF":"ماراكەش فرانكى","MCF":"موناكو فرانكى","MDC":"مولدوۋا كۇپونى","MDL":"مولدوۋا لېۋى","MGA":"ماداغاسقار ئارىئارىسى","MGF":"ماداغاسقار فرانكى","MKD":"ماكېدونىيە دىنارى","MKN":"ماكېدونىيە دىنارى (1992–1993)","MLF":"مالى فرانكى","MMK":"مىيانمار كىياتى","MNT":"موڭغۇلىيە تۈگرىكى","MOP":"ئاۋمېن پاتاكاسى","MRO":"ماۋرىتانىيە ئۇگىيەسى (1973–2017)","MRU":"ماۋرىتانىيە ئۇگىيەسى","MTL":"مالتا لىراسى","MTP":"مالتا فوندستېرلىڭى","MUR":"ماۋرىتىئۇس رۇپىسى","MVP":"مالدىۋى رۇپىسى","MVR":"مالدىۋى رۇفىياسى","MWK":"مالاۋى كۋاچاسى","MXN":"مېكسىكا پېسوسى","MXP":"مېكسىكا كۈمۈش پېسوسى (1861–1992)","MXV":"مېكسىكا مەبلەغ بىرلىكى","MYR":"مالايشىيا رىڭگىتى","MZE":"موزامبىك ئېسكۇدوسى","MZM":"موزامبىك مېتىكالى (1980–2006)","MZN":"موزامبىك مېتىكالى","NAD":"نامىبىيە دوللىرى","NGN":"نىگېرىيە نايراسى","NIC":"نىگېرىيە كوردوباسى (1988–1991)","NIO":"نىگېرىيە كوردوباسى","NLG":"گوللاندىيە گۈلدىنى","NOK":"نورۋېگىيە كرونى","NPR":"نېپال رۇپىسى","NZD":"يېڭى زېلاندىيە دوللىرى","OMR":"ئومان رىيالى","PAB":"پاناما بالبوئاسى","PEI":"پېرۇ ئىنتىسى","PEN":"پېرۇ سولى","PES":"پېرۇ سولى (1863–1965)","PGK":"پاپۇئا يېڭى گىۋىنېيە كىناسى","PHP":"فىلىپپىن پېسوسى","PKR":"پاكىستان رۇپىسى","PLN":"پولشا زىلوتى","PLZ":"پولشا زىلوتى (1950–1995)","PTE":"پورتۇگالىيە ئېسكۇدوسى","PYG":"پاراگۋاي گۇئارانىسى","QAR":"قاتار رىيالى","RHD":"رودېزىيە دوللىرى","ROL":"رۇمىنىيە لېيى (1952–2006)","RON":"رۇمىنىيە لېيى","RSD":"سېربىيە دىنارى","RUB":"رۇسىيە رۇبلىسى","RUR":"رۇسىيە رۇبلىسى (1991–1998)","RWF":"رۋاندا فرانكى","SAR":"سەئۇدى رىيالى","SBD":"سولومون ئاراللىرى دوللىرى","SCR":"سېيشېل رۇپىسى","SDD":"سۇدان دىنارى (1992–2007)","SDG":"سۇدان فوندستېرلىڭى","SDP":"سۇدان فوندستېرلىڭى (1957–1998)","SEK":"شىۋېتسىيە كروناسى","SGD":"سىنگاپور دوللىرى","SHP":"ساينىت-ھېلېنا فوندستېرلىڭى","SIT":"سىلوۋېنىيە تولارى","SKK":"سىلوۋاكىيە كورۇناسى","SLL":"سېررالېئون لېئونېسى","SOS":"سومالى شىللىڭى","SRD":"سۇرىنام دوللىرى","SRG":"سۇرىنام گۈلدىنى","SSP":"جەنۇبىي سۇدان فوندستېرلىڭى","STD":"سان-تومې ۋە پىرىنسىپى دوبراسى (1977–2017)","STN":"سان-تومې ۋە پىرىنسىپى دوبراسى","SUR":"سوۋىت رۇبلىسى","SVC":"سالۋادور كولونى","SYP":"سۈرىيە فوندستېرلىڭى","SZL":"سىۋېزىلاند لىلانگېنى","THB":"تايلاند باختى","TJR":"تاجىكىستان رۇبلىسى","TJS":"تاجىكىستان سومونىسى","TMM":"تۈركمەنىستان ماناتى (1993–2009)","TMT":"تۈركمەنىستان ماناتى","TND":"تۇنىس دىنارى","TOP":"تونگا پائانگاسى","TPE":"تىمور ئېسكۇدوسى","TRL":"تۈركىيە لىراسى (1922–2005)","TRY":"تۈركىيە لىراسى","TTD":"تىرىنىداد ۋە توباگو دوللىرى","TWD":"يېڭى تەيۋەن دوللىرى","TZS":"تانزانىيە شىللىڭى","UAH":"ئۇكرائىنا خرىۋناسى","UAK":"ئۇكرائىنا كاربوۋانېتسى","UGS":"ئۇگاندا شىللىڭى (1966–1987)","UGX":"ئۇگاندا شىللىڭى","USD":"ئامېرىكا دوللىرى","USN":"ئامېرىكا دوللىرى (كېيىنكى كۈن)","USS":"ئامېرىكا دوللىرى (ئوخشاش كۈن)","UYI":"ئۇرۇگۋاي پېسوسى (ئىندېكىسلاش بىرلىكى)","UYP":"ئۇرۇگۋاي پېسوسى (1975–1993)","UYU":"ئۇرۇگۋاي پېسوسى","UYW":"UYW","UZS":"ئۆزبېكىستان سومى","VEB":"ۋېنېزۇئېلا بولىۋارى (1871–2008)","VEF":"ۋېنېزۇئېلا بولىۋارى (2008–2018)","VES":"ۋېنېزۇئېلا بولىۋارى","VND":"ۋىيېتنام دوڭى","VNN":"ۋىيېتنام دوڭى (1978–1985)","VUV":"ۋانۇئاتۇ ۋاتۇسى","WST":"ساموئا تالاسى","XAF":"ئافرىقا قىتئەسى پۇل-مۇئامىلە ئىتتىپاقى فرانكى","XAG":"كۈمۈش","XAU":"ئالتۇن","XBA":"ياۋروپا مۇرەككەپ بىرلىكى","XBB":"ياۋروپا پۇل بىرلىكى (XBB)","XBC":"ياۋروپا ھېسابات بىرلىكى (XBC)","XBD":"ياۋروپا ھېسابات بىرلىكى (XBD)","XCD":"شەرقىي كارىب دوللىرى","XDR":"ئالاھىدە پۇل ئېلىش ھوقۇقى","XEU":"ياۋروپا پۇل بىرلىكى","XFO":"فىرانسىيە ئالتۇن فرانكى","XFU":"فىرانسىيە UIC فرانكى","XOF":"ئافرىقا قىتئەسى پۇل-مۇئامىلە ئىتتىپاقى فرانكى (BCEAO)","XPD":"پاللادىي","XPF":"تىنچ ئوكيان پۇل-مۇئامىلە ئورتاق گەۋدىسى فرانكى","XPT":"پىلاتىنا","XRE":"RINET فوندى","XSU":"سۇكرې","XTS":"پۇل سىناش بىرلىكى","XUA":"ئاسىيا تەرەققىيات بانكىسى ھېسابات بىرلىكى","XXX":"يوچۇن پۇل","YDD":"يەمەن دىنارى","YER":"يەمەن رىيالى","YUD":"يۇگوسلاۋىيە قاتتىق دىنارى (1966–1990)","YUM":"يۇگوسلاۋىيە يېڭى دىنارى (1994–2002)","YUN":"يۇگوسلاۋىيە ئالماشتۇرۇشچان دىنارى (1990–1992)","YUR":"يۇگوسلاۋىيە ئىسلاھات دىنارى (1992–1993)","ZAL":"جەنۇبىي ئافرىقا راندى (پۇل–مۇئامىلە)","ZAR":"جەنۇبىي ئافرىقا راندى","ZMK":"زامبىيە كۋاچاسى (1968–2012)","ZMW":"زامبىيە كۋاچاسى","ZRN":"زايىر يېڭى زايىرى (1993–1998)","ZRZ":"زايىر زايىرى (1971–1993)","ZWD":"زىمبابۋې دوللىرى (1980–2008)","ZWL":"زىمبابۋې دوللىرى (2009)","ZWR":"زىمبابۋې دوللىرى (2008)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["ug"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
