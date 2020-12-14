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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ckb").length
)) {
// Intl.DisplayNames.~locale.ckb
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"ئەفار","ab":"ئەبخازی","ace":"ئاچەیی","ada":"دانگمێ","ady":"ئادیگی","af":"ئەفریکانس","agq":"ئاگێم","ain":"ئاینوو","ak":"ئاکان","ale":"ئالیوت","alt":"ئاڵتایی باشوور","am":"ئەمھەری","an":"ئاراگۆنی","anp":"ئەنگیکا","ar":"عەرەبی","ar-001":"عەرەبیی ستاندارد","arn":"ماپووچە","arp":"ئاراپاهۆ","as":"ئاسامی","asa":"ئاسوو","ast":"ئاستۆری","av":"ئەڤاری","awa":"ئاوادهی","ay":"ئایمارا","az":"ئازەربایجانی","az-Arab":"ئازەربایجانی باشووری","ba":"باشکیەر","ban":"بالی","bas":"باسا","be":"بیلاڕووسی","bem":"بێمبا","bez":"بێنا","bg":"بۆلگاری","bho":"بوجپووری","bi":"بیسلاما","bin":"بینی","bla":"سیکسیکا","bm":"بامبارا","bn":"بەنگلادێشی","bo":"تەبەتی","br":"برێتونی","brx":"بۆدۆ","bs":"بۆسنی","bug":"بووگی","byn":"بلین","ca":"كاتالۆنی","ccp":"ccp","ce":"چیچانی","ceb":"سێبوانۆ","cgg":"کیگا","ch":"چامۆرۆ","chk":"چووکی","chm":"ماری","cho":"چۆکتاو","chr":"چێرۆکی","chy":"شایان","ckb":"کوردیی ناوەندی","co":"کۆرسیکی","crs":"فەرەنسیی سیشێلی","cs":"چێکی","cu":"سلاویی کلیسەیی","cv":"چووڤاشی","cy":"وێلزی","da":"دانماركی","dak":"داکۆتایی","dar":"دارگینی","dav":"تایتا","de":"ئەڵمانی","de-AT":"ئەڵمانی (نەمسا)","de-CH":"ئەڵمانی (سویسڕا)","dgr":"دۆگریب","dje":"زارما","dsb":"سربیی خوارین","dua":"دووالا","dv":"دیڤێهی","dyo":"جۆلافۆنی","dz":"دزوونگخا","dzg":"دازا","ebu":"ئێمبوو","ee":"ئێوێیی","efi":"ئێفیک","eka":"ئێکاجووک","el":"یۆنانی","en":"ئینگلیزی","en-AU":"ئینگلیزیی ئۆسترالیایی","en-CA":"ئینگلیزیی کەنەدایی","en-GB":"ئینگلیزیی بریتانیایی","en-US":"ئینگلیزیی ئەمەریکایی","eo":"ئێسپیرانتۆ","es":"ئیسپانی","es-419":"ئیسپانی (ئەمەریکای لاتین)","es-ES":"ئیسپانی (ئیسپانیا)","es-MX":"ئیسپانی (مەکسیک)","et":"ئیستۆنی","eu":"باسکی","ewo":"ئێوۆندۆ","fa":"فارسی","fa-AF":"فارسی (ئەفغانستان)","ff":"فوولایی","fi":"فینلەندی","fil":"فیلیپینی","fj":"فیجی","fo":"فەرۆیی","fon":"فۆنی","fr":"فەرەنسی","fr-CA":"فەرەنسی (کەنەدا)","fr-CH":"فەرەنسی (سویسڕا)","frc":"frc","fur":"فریئوولی","fy":"فریسیی ڕۆژاوا","ga":"ئیرلەندی","gaa":"گایی","gd":"گه‌لیكی سكۆتله‌ندی","gez":"گیزی","gil":"گیلبێرتی","gl":"گالیسی","gn":"گووارانی","gor":"گۆرۆنتالی","gsw":"ئەڵمانیی سویسڕا","gu":"گوجاراتی","guz":"گووسی","gv":"مانکی","gwi":"گویچین","ha":"هائووسا","haw":"هاوایی","he":"عیبری","hi":"هیندی","hil":"هیلیگاینۆن","hmn":"همۆنگ","hr":"كرواتی","hsb":"سربیی سەروو","ht":"کریولی هائیتی","hu":"هەنگاری","hup":"هووپا","hy":"ئەرمەنی","hz":"هێرێرۆ","ia":"ئینترلینگووا","iba":"ئیبان","ibb":"ئیبیبۆ","id":"ئیندۆنیزی","ig":"ئیگبۆ","ii":"سیچوان یی","ilo":"ئیلۆکۆ","inh":"ئینگووش","io":"ئیدۆ","is":"ئیسلەندی","it":"ئیتالی","iu":"ئینوکتیتوت","ja":"ژاپۆنی","jbo":"لۆژبان","jgo":"نگۆمبا","jmc":"ماچامێ","jv":"جاڤایی","ka":"گۆرجستانی","kab":"کبائیلی","kac":"کاچین","kaj":"کیجوو","kam":"کامبا","kbd":"کاباردی","kcg":"تیاپ","kde":"ماکۆندە","kea":"کابووڤێردیانۆ","kfo":"کۆرۆ","kha":"کهاسی","khq":"کۆیرا چینی","ki":"کیکوویوو","kj":"کوانیاما","kk":"کازاخی","kkj":"کاکۆ","kl":"کالالیسووت","kln":"کالێنجین","km":"خمێر","kmb":"کیمبووندوو","kn":"کاننادا","ko":"كۆری","kok":"کۆنکانی","kpe":"کپێلێ","kr":"کانووری","krc":"کاراچای بالکار","krl":"کارێلی","kru":"کوورووخ","ks":"کەشمیری","ksb":"شامابالا","ksf":"بافیا","ksh":"کۆلۆنی","ku":"کوردی","kum":"کوومیک","kv":"کۆمی","kw":"کۆڕنی","ky":"كرگیزی","la":"لاتینی","lad":"لادینۆ","lag":"لانگی","lb":"لوکسەمبورگی","lez":"لەزگی","lg":"گاندا","li":"لیمبورگی","lkt":"لاکۆتا","ln":"لينگالا","lo":"لائۆیی","lou":"lou","loz":"لۆزی","lrc":"لوڕیی باکوور","lt":"لیتوانی","lu":"لووبا کاتانگا","lua":"لووبا لوولووا","lun":"لووندا","luo":"لووئۆ","lus":"میزۆ","luy":"لوویا","lv":"لێتۆنی","mad":"مادووری","mag":"ماگاهی","mai":"مائیتیلی","mak":"ماکاسار","mas":"ماسایی","mdf":"مۆکشا","men":"مێندێ","mer":"مێروو","mfe":"مۆریسی","mg":"مالاگاسی","mgh":"ماخوامیتۆ","mgo":"مێتە","mh":"مارشاڵی","mi":"مائۆری","mic":"میکماک","min":"مینانکاباو","mk":"ماكێدۆنی","ml":"مالایالام","mn":"مەنگۆلی","mni":"مانیپووری","moh":"مۆهاوک","mos":"مۆسی","mr":"ماراتی","ms":"مالیزی","mt":"ماڵتی","mua":"موندانگ","mul":"چەند زمان","mus":"کریک","mwl":"میراندی","my":"میانماری","myv":"ئێرزیا","mzn":"مازەندەرانی","na":"نائوروو","nap":"ناپۆلی","naq":"ناما","nb":"نەرویژیی بۆکمال","nd":"ئندێبێلێی باکوور","nds":"nds","nds-NL":"nds (ھۆڵەندا)","ne":"نیپالی","new":"نێواری","ng":"ندۆنگا","nia":"نیاس","niu":"نیئوویی","nl":"هۆڵەندی","nl-BE":"فلێمی","nmg":"کواسیۆ","nn":"نەرویژیی نینۆرسک","nnh":"نگیمبوون","no":"نۆروێژی","nog":"نۆگای","nqo":"نکۆ","nr":"ئندێبێلێی باشوور","nso":"سۆتۆی باکوور","nus":"نوێر","nv":"ناڤاجۆ","ny":"نیانجا","nyn":"نیانکۆلێ","oc":"ئۆکسیتانی","om":"ئۆرۆمۆ","or":"ئۆدیا","os":"ئۆسێتی","pa":"پەنجابی","pag":"پانگاسینان","pam":"پامپانگا","pap":"پاپیامێنتۆ","pau":"پالائوویی","pcm":"پیجینی نیجریا","pl":"پۆڵەندی","prg":"پڕووسی","ps":"پەشتوو","pt":"پورتوگالی","pt-BR":"پورتوگالی (برازیل)","pt-PT":"پورتوگالی (پورتوگال)","qu":"کێچوا","quc":"کیچەیی","rap":"ڕاپانوویی","rar":"ڕاڕۆتۆنگان","rm":"ڕۆمانش","rn":"ڕووندی","ro":"ڕۆمانی","ro-MD":"مۆڵداڤی","rof":"ڕۆمبۆ","root":"ڕووت","ru":"ڕووسی","rup":"ئارمۆمانی","rw":"کینیارواندا","rwk":"ڕوا","sa":"سانسکريت","sad":"سانداوێ","sah":"ساخا","saq":"سامبووروو","sat":"سانتالی","sba":"نگامبای","sbp":"سانگوو","sc":"ساردینی","scn":"سیسیلی","sco":"سکۆتس","sd":"سيندی","sdh":"کوردیی باشووری","se":"سامیی باکوور","seh":"سێنا","ses":"کۆیرابۆرۆ سێنی","sg":"سانگۆ","shi":"شیلها","shn":"شان","si":"سینهالی","sk":"سلۆڤاكی","sl":"سلۆڤێنی","sm":"سامۆیی","sma":"سامیی باشوور","smj":"لوولێ سامی","smn":"ئیناری سامی","sms":"سامیی سکۆڵت","sn":"شۆنا","snk":"سۆنینکێ","so":"سۆمالی","sq":"ئەڵبانی","sr":"سربی","srn":"سرانان تۆنگۆ","ss":"سواتی","ssy":"ساهۆ","st":"سۆتۆی باشوور","su":"سوندانی","suk":"سووکووما","sv":"سویدی","sw":"سواهیلی","sw-CD":"سواهیلیی کۆنگۆ","swb":"کۆمۆری","syr":"سریانی","ta":"تامیلی","te":"تێلووگوو","tem":"تیمنێ","teo":"تێسوو","tet":"تێتووم","tg":"تاجیکی","th":"تایلەندی","ti":"تیگرینیا","tig":"تیگرێ","tk":"تورکمانی","tlh":"كلینگۆن","tn":"تسوانا","to":"تۆنگان","tpi":"تۆکپیسین","tr":"تورکی","trv":"تارۆکۆ","ts":"تسۆنگا","tt":"تاتاری","tum":"تومبووکا","tvl":"تووڤالوو","twq":"تاساواک","ty":"تاهیتی","tyv":"تووڤینی","tzm":"ئەمازیغی ناوەڕاست","udm":"ئوودموورت","ug":"ئۆیخۆری","uk":"ئۆكراینی","umb":"ئومبووندوو","und":"زمانی نەناسراو","ur":"ئۆردوو","uz":"ئوزبەکی","vai":"ڤایی","ve":"ڤێندا","vi":"ڤیەتنامی","vo":"ڤۆلاپووک","vun":"ڤوونجوو","wa":"والوون","wae":"والسێر","wal":"وۆلایتا","war":"وارای","wo":"وۆلۆف","xal":"کالمیک","xh":"سسوسا","xog":"سۆگا","yav":"یانگبێن","ybb":"یێمبا","yi":"ییدیش","yo":"یۆرووبا","yue":"کانتۆنی","zgh":"ئەمازیغیی مەغریب","zh":"چینی","zh-Hans":"چینی (چینیی ئاسانکراو)","zh-Hant":"چینی (چینیی دێرین)","zu":"زوولوو","zun":"زوونی","zxx":"هیچ ناوەرۆکی زمانی نیە","zza":"زازا"},"short":{"az":"ئازەربایجانی","en-GB":"ئینگلیزی (GB)","en-US":"ئینگلیزیی ئەمەریکایی"},"narrow":{}},"region":{"long":{"142":"ئاسیا","143":"ناوەڕاستی ئاسیا","145":"ڕۆژاوای ئاسیا","150":"ئەورووپا","151":"ڕۆژهەڵاتی ئەورووپا","154":"باکووری ئەورووپا","155":"ڕۆژاوای ئەورووپا","202":"ئەفریقای ژێر سەحرا","419":"ئەمەریکای لاتین","001":"جیهان","002":"ئەفریقا","003":"ئەمەریکای باکوور","005":"ئەمەریکای باشوور","009":"ئۆقیانووسیا","011":"ڕۆژاوای ئەفریقا","013":"ئەمریکای ناوەڕاست","014":"ڕۆژھەڵاتی ئەفریقا","015":"باکووری ئەفریقا","017":"ناوەڕاستی ئەفریقا","018":"باشووری ئەفریقا","019":"ئەمەریکای باکوور و باشوور","021":"ئەمریکای باکوور","029":"کاریبی","030":"ڕۆژهەڵاتی ئاسیا","034":"باشووری ئاسیا","035":"باشووری ڕۆژھەڵاتی ئاسیا","039":"باشووری ئەورووپا","053":"ئۆسترالیا","054":"میلانێزیا","057":"ناوچەی مایکرۆنیزیا","061":"پۆلینیزیا","AC":"دوورگەی ئاسینسیۆن","AD":"ئاندۆرا","AE":"میرنشینە یەکگرتووە عەرەبییەکان","AF":"ئەفغانستان","AG":"ئانتیگوا و باربودا","AI":"ئانگویلا","AL":"ئەڵبانیا","AM":"ئەرمەنستان","AO":"ئەنگۆلا","AQ":"ئانتارکتیکا","AR":"ئەرژەنتین","AS":"ساموای ئەمەریکایی","AT":"نەمسا","AU":"ئوسترالیا","AW":"ئارووبا","AX":"دوورگەکانی ئالاند","AZ":"ئازەربایجان","BA":"بۆسنیا و ھەرزەگۆڤینا","BB":"باربادۆس","BD":"بەنگلادیش","BE":"بەلژیک","BF":"بورکینافاسۆ","BG":"بولگاریا","BH":"بەحرەین","BI":"بوروندی","BJ":"بێنین","BL":"سەن بارتێلێمی","BM":"بێرموودا","BN":"بروونای","BO":"بۆلیڤیا","BQ":"دوورگە کاریبیەکانی هۆڵەندا","BR":"برازیل","BS":"بەھاما","BT":"بووتان","BV":"دوورگەی بووڤێ","BW":"بۆتسوانا","BY":"بیلاڕووس","BZ":"بەلیز","CA":"کەنەدا","CC":"دوورگەکانی کیلینگ","CD":"کۆنگۆ کینشاسا","CF":"کۆماری ئەفریقای ناوەڕاست","CG":"کۆنگۆ برازاڤیل","CH":"سویسڕا","CI":"کۆتدیڤوار","CK":"دوورگەکانی کوک","CL":"چیلی","CM":"کامیرۆن","CN":"چین","CO":"کۆلۆمبیا","CP":"دوورگەی کلیپێرتۆن","CR":"کۆستاریکا","CU":"کووبا","CV":"کەیپڤەرد","CW":"کوراچاو","CX":"دوورگەی کریسمس","CY":"قیبرس","CZ":"کۆماری چیک","DE":"ئەڵمانیا","DG":"دیەگۆ گارسیا","DJ":"جیبووتی","DK":"دانمارک","DM":"دۆمینیکا","DO":"کۆماری دۆمینیکا","DZ":"جەزایر","EA":"سێئووتا و مێلییا","EC":"ئیکوادۆر","EE":"ئیستۆنیا","EG":"میسر","EH":"سەحرای ڕۆژاوا","ER":"ئەریتریا","ES":"ئیسپانیا","ET":"ئەتیۆپیا","EU":"یەکێتیی ئەورووپا","EZ":"ناوچەی یۆرۆ","FI":"فینلاند","FJ":"فیجی","FK":"دوورگەکانی مالڤیناس (دوورگەکانی فاڵکلاند)","FM":"مایکرۆنیزیا","FO":"دوورگەکانی فارەو","FR":"فەڕەنسا","GA":"گابۆن","GB":"شانشینی یەکگرتوو","GD":"گرینادا","GE":"گورجستان","GF":"گیانای فەرەنسا","GG":"گێرنزی","GH":"غەنا","GI":"گیبرالتار","GL":"گرینلاند","GM":"گامبیا","GN":"گینێ","GP":"گوادێلۆپ","GQ":"گینێی ئیستوایی","GR":"یۆنان","GS":"دوورگەکانی جۆرجیا و ساندویچی باشوور","GT":"گواتیمالا","GU":"گوام","GW":"گینێ بیساو","GY":"گویانا","HK":"هۆنگ کۆنگ","HM":"دوورگەکانی هێرد و مەکدانڵد","HN":"ھۆندووراس","HR":"کرۆواتیا","HT":"ھایتی","HU":"هەنگاریا","IC":"دوورگەکانی کەناری","ID":"ئیندۆنیزیا","IE":"ئیرلەند","IL":"ئیسرائیل","IM":"دوورگەی مان","IN":"ھیندستان","IO":"ھەرێمی بەریتانی لە ئۆقیانووسی ھیند","IQ":"عێراق","IR":"ئێران","IS":"ئایسلەند","IT":"ئیتالیا","JE":"جێرسی","JM":"جامایکا","JO":"ئوردن","JP":"ژاپۆن","KE":"کینیا","KG":"کرگیزستان","KH":"کەمبۆدیا","KI":"کیریباس","KM":"دوورگەکانی کۆمۆر","KN":"سەن کیتس و نیڤیس","KP":"کۆریای باکوور","KR":"کۆریای باشوور","KW":"کوەیت","KY":"دوورگەکانی کایمان","KZ":"کازاخستان","LA":"لاوس","LB":"لوبنان","LC":"سەن لووسیا","LI":"لیختنشتاین","LK":"سریلانکا","LR":"لیبەریا","LS":"لەسۆتۆ","LT":"لیتوانایا","LU":"لوکسەمبورگ","LV":"لاتڤیا","LY":"لیبیا","MA":"مەغریب","MC":"مۆناکۆ","MD":"مۆلدۆڤا","ME":"مۆنتینیگرۆ","MF":"سەن مارتین","MG":"ماداگاسکار","MH":"دوورگەکانی مارشاڵ","MK":"مەکدۆنیای باکوور","ML":"مالی","MM":"میانمار","MN":"مەنگۆلیا","MO":"ماکائۆ","MP":"دوورگەکانی ماریانای باکوور","MQ":"مارتینیک","MR":"مۆریتانیا","MS":"مۆنتسێرات","MT":"ماڵتا","MU":"مووریتیووس","MV":"مالدیڤ","MW":"مالاوی","MX":"مەکسیک","MY":"مالیزیا","MZ":"مۆزامبیک","NA":"نامیبیا","NC":"نیووکالێدۆنیا","NE":"نیجەر","NF":"دوورگەی نۆرفۆڵک","NG":"نیجریا","NI":"نیکاراگوا","NL":"ھۆڵەندا","NO":"نۆرویژ","NP":"نیپال","NR":"نائوروو","NU":"نیووئی","NZ":"نیوزیلاند","OM":"عومان","PA":"پاناما","PE":"پێروو","PF":"پۆلینیسیای فەرەنسا","PG":"پاپوا گینێی نوێ","PH":"فلیپین","PK":"پاکستان","PL":"پۆڵەندا","PM":"سەن پیێر و میکێلۆن","PN":"دوورگەکانی پیتکەرن","PR":"پۆرتۆڕیکۆ","PS":"ناوچە فەلەستینیەکان","PT":"پورتوگال","PW":"پالاو","PY":"پاراگوای","QA":"قەتەر","QO":"دەرەوەی ئۆقیانووسیا","RE":"ڕییوونیەن","RO":"ڕۆمانیا","RS":"سربیا","RU":"ڕووسیا","RW":"ڕواندا","SA":"عەرەبستانی سەعوودی","SB":"دوورگەکانی سلێمان","SC":"سیشێل","SD":"سوودان","SE":"سوید","SG":"سینگاپور","SH":"سەن هێلێنا","SI":"سلۆڤێنیا","SJ":"سڤالبارد و یان مایەن","SK":"سلۆڤاکیا","SL":"سیەرالیۆن","SM":"سان مارینۆ","SN":"سێنێگاڵ","SO":"سۆمالیا","SR":"سورینام","SS":"سوودانی باشوور","ST":"ساوتۆمێ و پرینسیپی","SV":"ئێلسالڤادۆر","SX":"سینت مارتن","SY":"سووریا","SZ":"سوازیلاند","TA":"تریستێن دا کوونا","TC":"دوورگەکانی تورکس و کایکۆس","TD":"چاد","TF":"هەرێمە باشووریەکانی فەرەنسا","TG":"تۆگۆ","TH":"تایلەند","TJ":"تاجیکستان","TK":"تۆکێلاو","TL":"تیمۆری ڕۆژھەڵات","TM":"تورکمانستان","TN":"توونس","TO":"تۆنگا","TR":"تورکیا","TT":"ترینیداد و تۆباگو","TV":"تووڤالوو","TW":"تایوان","TZ":"تانزانیا","UA":"ئۆکرانیا","UG":"ئوگاندا","UM":"دوورگەکانی دەرەوەی ئەمریکا","UN":"نەتەوە یەکگرتووەکان","US":"ویلایەتە یەکگرتووەکان","UY":"ئوروگوای","UZ":"ئوزبەکستان","VA":"ڤاتیکان","VC":"سەینت ڤینسەنت و گرینادینز","VE":"ڤەنزوێلا","VG":"دوورگەکانی ڤیرجنی بەریتانیا","VI":"دوورگەکانی ڤیرجنی ئەمەریکا","VN":"ڤیەتنام","VU":"ڤانوواتوو","WF":"والیس و فوتونا","WS":"ساموا","XA":"XA","XB":"XB","XK":"کۆسۆڤۆ","YE":"یەمەن","YT":"مایۆت","ZA":"ئەفریقای باشوور","ZM":"زامبیا","ZW":"زیمبابوی","ZZ":"ناوچەی نەناسراو"},"short":{"GB":"شانشینی یەکگرتوو","HK":"هۆنگ کۆنگ","MO":"ماکائۆ","PS":"فەلەستین","US":"ویلایەتە یەکگرتووەکان"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"عەرەبی","Aran":"Aran","Armi":"Armi","Armn":"ئەرمەنی","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"بەنگالی","Bhks":"Bhks","Bopo":"بۆپۆمۆفۆ","Brah":"Brah","Brai":"برەیل","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"سریلیک","Deva":"دەڤەناگەری","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"ئەتیۆپیک","Geor":"گورجی","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"یۆنانی","Gujr":"گوجەراتی","Guru":"گورموکھی","Hanb":"هان لەگەڵ بۆپۆمۆفۆ","Hang":"ھانگول","Hani":"ھان","Hano":"Hano","Hans":"ئاسانکراو","Hant":"دێرین","Hatr":"Hatr","Hebr":"عیبری","Hira":"ھیراگانا","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"ژاپۆنیی بڕگەیی","Hung":"Hung","Ital":"Ital","Jamo":"جامۆ","Java":"Java","Jpan":"ژاپۆنی","Kali":"Kali","Kana":"کاتاکانا","Khar":"Khar","Khmr":"خمێر","Khoj":"Khoj","Kits":"Kits","Knda":"کاننادا","Kore":"کۆری","Kthi":"Kthi","Lana":"Lana","Laoo":"لائۆ","Latn":"لاتینی","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"مالایالام","Modi":"Modi","Mong":"مەنگۆلی","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"میانمار","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"ئۆدیا","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"سینھالا","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"تامیلی","Tang":"Tang","Tavt":"Tavt","Telu":"تێلووگوو","Tfng":"Tfng","Tglg":"Tglg","Thaa":"تانا","Thai":"تایلەندی","Tibt":"تەبەتی","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"نیشانەی بیرکاری","Zsye":"ئیمۆجی","Zsym":"هێماکان","Zxxx":"نەنووسراو","Zyyy":"باو","Zzzz":"خەتی نەناسراو"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"AED","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"AOA","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"AUD","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"BHD","BIF":"BIF","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"BWP","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"CAD","CDF":"CDF","CHE":"CHE","CHF":"CHF","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"CNY","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"CVE","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"DJF","DKK":"DKK","DOP":"DOP","DZD":"DZD","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"EGP","ERN":"ERN","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ETB","EUR":"EUR","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"GBP","GEK":"GEK","GEL":"GEL","GHC":"GHC","GHS":"GHS","GIP":"GIP","GMD":"GMD","GNF":"GNF","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"INR","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"JPY","KES":"KES","KGS":"KGS","KHR":"KHR","KMF":"KMF","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"LRD","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"LYD","MAD":"MAD","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"MGA","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"MRO","MRU":"MRU","MTL":"MTL","MTP":"MTP","MUR":"MUR","MVP":"MVP","MVR":"MVR","MWK":"MWK","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"MZM","MZN":"MZN","NAD":"NAD","NGN":"NGN","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"RWF","SAR":"SAR","SBD":"SBD","SCR":"SCR","SDD":"SDD","SDG":"SDG","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"SHP","SIT":"SIT","SKK":"SKK","SLL":"SLL","SOS":"SOS","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"STD","STN":"STN","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"SZL","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"TND","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"TZS","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"UGX","USD":"USD","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"XOF","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ZAR","ZMK":"ZMK","ZMW":"ZMW","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"ckb"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
