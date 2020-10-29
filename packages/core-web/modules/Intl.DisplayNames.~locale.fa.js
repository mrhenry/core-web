import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import IsArray from "@mrhenry/core-web/helpers/_ESAbstract.IsArray";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import ToLength from "@mrhenry/core-web/helpers/_ESAbstract.ToLength";
import ToInteger from "@mrhenry/core-web/helpers/_ESAbstract.ToInteger";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import ArraySpeciesCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArraySpeciesCreate";
import ArrayCreate from "@mrhenry/core-web/helpers/_ESAbstract.ArrayCreate";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
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
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("fa").length
)) {
// Intl.DisplayNames.~locale.fa
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"fa":{"types":{"language":{"long":{"aa":"آفاری","ab":"آبخازی","ace":"آچئی","ach":"آچولیایی","ada":"آدانگمه‌ای","ady":"آدیجیایی","ae":"اوستایی","aeb":"عربی تونسی","af":"آفریکانس","afh":"آفریهیلی","agq":"آگیم","ain":"آینویی","ak":"آکان","akk":"اکدی","akz":"آلابامایی","ale":"آلئوتی","alt":"آلتایی جنوبی","am":"امهری","an":"آراگونی","ang":"انگلیسی باستان","anp":"آنگیکا","ar":"عربی","ar-001":"عربی رسمی","arc":"آرامی","arn":"ماپوچه‌ای","arp":"آراپاهویی","arq":"عربی الجزایری","arw":"آراواکی","ary":"عربی مراکشی","arz":"عربی مصری","as":"آسامی","asa":"آسو","ast":"آستوری","av":"آواری","awa":"اودهی","ay":"آیمارایی","az":"ترکی آذربایجانی","az-Arab":"ترکی آذری جنوبی","ba":"باشقیری","bal":"بلوچی","ban":"بالیایی","bar":"باواریایی","bas":"باسایی","bax":"بمونی","be":"بلاروسی","bej":"بجایی","bem":"بمبایی","bez":"بنایی","bg":"بلغاری","bgn":"بلوچی غربی","bho":"بوجپوری","bi":"بیسلاما","bik":"بیکولی","bin":"بینی","bla":"سیکسیکا","bm":"بامبارایی","bn":"بنگالی","bo":"تبتی","bqi":"لری بختیاری","br":"برتون","bra":"براج","brh":"براهویی","brx":"بودویی","bs":"بوسنیایی","bua":"بوریاتی","bug":"بوگیایی","byn":"بلین","ca":"کاتالان","cad":"کادویی","car":"کاریبی","ccp":"چاکما","ce":"چچنی","ceb":"سبویی","cgg":"چیگا","ch":"چامورویی","chb":"چیبچا","chg":"جغتایی","chk":"چوکی","chm":"ماریایی","cho":"چوکتویی","chp":"چیپه‌ویه‌ای","chr":"چروکیایی","chy":"شایانی","ckb":"کردی مرکزی","co":"کورسی","cop":"قبطی","cr":"کریایی","crh":"ترکی کریمه","crs":"سیشل آمیختهٔ فرانسوی","cs":"چکی","csb":"کاشوبی","cu":"اسلاوی کلیسایی","cv":"چوواشی","cy":"ولزی","da":"دانمارکی","dak":"داکوتایی","dar":"دارقینی","dav":"تایتا","de":"آلمانی","de-AT":"آلمانی اتریش","de-CH":"آلمانی معیار سوئیس","del":"دلاواری","dgr":"دوگریب","din":"دینکایی","dje":"زرما","doi":"دوگری","dsb":"صُربی سفلی","dua":"دوآلایی","dum":"هلندی میانه","dv":"دیوهی","dyo":"دیولا فونی","dyu":"دایولایی","dz":"دزونگخا","dzg":"دازاگایی","ebu":"امبو","ee":"اوه‌ای","efi":"افیکی","egy":"مصری کهن","eka":"اکاجوک","el":"یونانی","elx":"عیلامی","en":"انگلیسی","en-AU":"انگلیسی استرالیا","en-CA":"انگلیسی کانادا","en-GB":"انگلیسی بریتانیا","en-US":"انگلیسی امریکا","enm":"انگلیسی میانه","eo":"اسپرانتو","es":"اسپانیایی","es-419":"اسپانیایی امریکای لاتین","es-ES":"اسپانیایی اروپا","es-MX":"اسپانیایی مکزیک","et":"استونیایی","eu":"باسکی","ewo":"اواندو","fa":"فارسی","fa-AF":"دری","fan":"فانگی","fat":"فانتیایی","ff":"فولانی","fi":"فنلاندی","fil":"فیلیپینی","fj":"فیجیایی","fo":"فارویی","fon":"فونی","fr":"فرانسوی","fr-CA":"فرانسوی کانادا","fr-CH":"فرانسوی سوئیس","frc":"فرانسوی کادین","frm":"فرانسوی میانه","fro":"فرانسوی باستان","frr":"فریزی شمالی","frs":"فریزی شرقی","fur":"فریولیایی","fy":"فریزی غربی","ga":"ایرلندی","gaa":"گایی","gag":"گاگائوزیایی","gay":"گایویی","gba":"گبایایی","gbz":"دری زرتشتی","gd":"گیلی اسکاتلندی","gez":"گی‌ئزی","gil":"گیلبرتی","gl":"گالیسیایی","glk":"گیلکی","gmh":"آلمانی معیار میانه","gn":"گوارانی","goh":"آلمانی علیای باستان","gon":"گوندی","gor":"گورونتالو","got":"گوتی","grb":"گریبویی","grc":"یونانی کهن","gsw":"آلمانی سوئیسی","gu":"گجراتی","guz":"گوسی","gv":"مانی","gwi":"گویچ این","ha":"هوسیایی","hai":"هایدایی","haw":"هاوائیایی","he":"عبری","hi":"هندی","hif":"هندی فیجیایی","hil":"هیلی‌گاینونی","hit":"هیتی","hmn":"همونگ","ho":"موتویی هیری","hr":"کروات","hsb":"صُربی علیا","ht":"هائیتیایی","hu":"مجاری","hup":"هوپا","hy":"ارمنی","hz":"هریرویی","ia":"میان‌زبان","iba":"ایبانی","ibb":"ایبیبیو","id":"اندونزیایی","ie":"اکسیدنتال","ig":"ایگبویی","ii":"یی سیچوان","ik":"اینوپیک","ilo":"ایلوکویی","inh":"اینگوشی","io":"ایدو","is":"ایسلندی","it":"ایتالیایی","iu":"اینوکتیتوت","ja":"ژاپنی","jbo":"لوجبان","jgo":"نگومبا","jmc":"ماچامه‌ای","jpr":"فارسی یهودی","jrb":"عربی یهودی","jv":"جاوه‌ای","ka":"گرجی","kaa":"قره‌قالپاقی","kab":"قبایلی","kac":"کاچینی","kaj":"جو","kam":"کامبایی","kaw":"کاویایی","kbd":"کاباردینی","kcg":"تیاپی","kde":"ماکونده","kea":"کابووردیانو","kfo":"کورو","kg":"کنگویی","kha":"خاسیایی","kho":"ختنی","khq":"کوجراچینی","khw":"کهوار","ki":"کیکویویی","kiu":"کرمانجی","kj":"کوانیاما","kk":"قزاقی","kkj":"کاکایی","kl":"گرینلندی","kln":"کالنجین","km":"خمری","kmb":"کیمبوندویی","kn":"کانارا","ko":"کره‌ای","koi":"کومی پرمیاک","kok":"کنکانی","kpe":"کپله‌ای","kr":"کانوریایی","krc":"قره‌چایی‐بالکاری","krl":"کاریلیانی","kru":"کوروخی","ks":"کشمیری","ksb":"شامبالا","ksf":"بافیایی","ksh":"ریپواری","ku":"کردی","kum":"کومیکی","kut":"کوتنی","kv":"کومیایی","kw":"کرنوالی","ky":"قرقیزی","la":"لاتین","lad":"لادینو","lag":"لانگی","lah":"لاهندا","lam":"لامبا","lb":"لوگزامبورگی","lez":"لزگی","lg":"گاندایی","li":"لیمبورگی","lkt":"لاکوتا","ln":"لینگالا","lo":"لائوسی","lol":"مونگویی","lou":"زبان آمیختهٔ مادری لوئیزیانا","loz":"لوزیایی","lrc":"لری شمالی","lt":"لیتوانیایی","lu":"لوبایی‐کاتانگا","lua":"لوبایی‐لولوا","lui":"لویسنو","lun":"لوندایی","luo":"لوئویی","lus":"لوشه‌ای","luy":"لویا","lv":"لتونیایی","lzh":"چینی ادبی","mad":"مادورایی","mag":"ماگاهیایی","mai":"مایدیلی","mak":"ماکاسار","man":"ماندینگویی","mas":"ماسایی","mdf":"مکشایی","mdr":"ماندار","men":"منده‌ای","mer":"مرویی","mfe":"موریسین","mg":"مالاگاسیایی","mga":"ایرلندی میانه","mgh":"ماکوا متو","mgo":"متایی","mh":"مارشالی","mi":"مائوریایی","mic":"میکماکی","min":"مینانگ‌کابویی","mk":"مقدونی","ml":"مالایالامی","mn":"مغولی","mnc":"مانچویی","mni":"میته‌ای","moh":"موهاکی","mos":"ماسیایی","mr":"مراتی","ms":"مالایی","mt":"مالتی","mua":"ماندانگی","mul":"چندین زبان","mus":"کریکی","mwl":"میراندی","mwr":"مارواری","my":"برمه‌ای","myv":"ارزیایی","mzn":"مازندرانی","na":"نائورویی","nap":"ناپلی","naq":"نامایی","nb":"نروژی بوک‌مُل","nd":"انده‌بله‌ای شمالی","nds":"آلمانی سفلی","nds-NL":"ساکسونی سفلی","ne":"نپالی","new":"نواریایی","ng":"اندونگایی","nia":"نیاسی","niu":"نیویی","nl":"هلندی","nl-BE":"فلمنگی","nmg":"کوازیو","nn":"نروژی نی‌نُشک","nnh":"نیامبون","no":"نروژی","nog":"نغایی","non":"نرس باستان","nqo":"نکو","nr":"انده‌بله‌ای جنوبی","nso":"سوتویی شمالی","nus":"نویر","nv":"ناواهویی","nwc":"نواریایی کلاسیک","ny":"نیانجایی","nym":"نیام‌وزیایی","nyn":"نیانکوله‌ای","nyo":"نیورویی","nzi":"نزیمایی","oc":"اکسیتان","oj":"اوجیبوایی","om":"اورومویی","or":"اوریه‌ای","os":"آسی","osa":"اوسیجی","ota":"ترکی عثمانی","pa":"پنجابی","pag":"پانگاسینانی","pal":"پهلوی","pam":"پامپانگایی","pap":"پاپیامنتو","pau":"پالائویی","pcm":"نیم‌زبان نیجریه‌ای","pdc":"آلمانی پنسیلوانیایی","peo":"فارسی باستان","phn":"فنیقی","pi":"پالی","pl":"لهستانی","pon":"پانپیی","prg":"پروسی","pro":"پرووانسی باستان","ps":"پشتو","pt":"پرتغالی","pt-BR":"پرتغالی برزیل","pt-PT":"پرتغالی اروپا","qu":"کچوایی","quc":"کیچه‌","raj":"راجستانی","rap":"راپانویی","rar":"راروتونگایی","rm":"رومانش","rn":"روندیایی","ro":"رومانیایی","ro-MD":"مولداویایی","rof":"رومبویی","rom":"رومانویی","root":"ریشه","ru":"روسی","rup":"آرومانی","rw":"کینیارواندایی","rwk":"روایی","sa":"سانسکریت","sad":"سانداوه‌ای","sah":"یاقوتی","sam":"آرامی سامری","saq":"سامبورو","sas":"ساساکی","sat":"سانتالی","sba":"انگامبایی","sbp":"سانگویی","sc":"ساردینیایی","scn":"سیسیلی","sco":"اسکاتلندی","sd":"سندی","sdh":"کردی جنوبی","se":"سامی شمالی","seh":"سنا","sel":"سلکوپی","ses":"کویرابورا سنی","sg":"سانگو","sga":"ایرلندی باستان","sh":"صرب و کرواتی","shi":"تاچل‌هیت","shn":"شانی","shu":"عربی چادی","si":"سینهالی","sid":"سیدامویی","sk":"اسلواکی","sl":"اسلوونیایی","sli":"سیلزیایی سفلی","sm":"ساموآیی","sma":"سامی جنوبی","smj":"لوله سامی","smn":"ایناری سامی","sms":"اسکولت سامی","sn":"شونایی","snk":"سونینکه‌ای","so":"سومالیایی","sog":"سغدی","sq":"آلبانیایی","sr":"صربی","srn":"تاکی‌تاکی","srr":"سریری","ss":"سوازیایی","ssy":"ساهو","st":"سوتویی جنوبی","su":"سوندایی","suk":"سوکومایی","sus":"سوسویی","sux":"سومری","sv":"سوئدی","sw":"سواحیلی","sw-CD":"سواحیلی کنگو","swb":"کوموری","syc":"سریانی کلاسیک","syr":"سریانی","szl":"سیلزیایی","ta":"تامیلی","te":"تلوگویی","tem":"تمنه‌ای","teo":"تسویی","ter":"ترنو","tet":"تتومی","tg":"تاجیکی","th":"تایلندی","ti":"تیگرینیایی","tig":"تیگره‌ای","tiv":"تیوی","tk":"ترکمنی","tl":"تاگالوگی","tlh":"کلینگون","tli":"تلین‌گیتی","tmh":"تاماشقی","tn":"تسوانایی","to":"تونگایی","tog":"تونگایی نیاسا","tpi":"توک‌پیسینی","tr":"ترکی استانبولی","trv":"تاروکویی","ts":"تسونگایی","tsi":"تسیم‌شیانی","tt":"تاتاری","tum":"تومبوکایی","tvl":"تووالویی","tw":"توی‌یایی","twq":"تسواکی","ty":"تاهیتیایی","tyv":"تووایی","tzm":"آمازیغی اطلس مرکزی","udm":"اودمورتی","ug":"اویغوری","uga":"اوگاریتی","uk":"اوکراینی","umb":"امبوندویی","und":"زبان نامشخص","ur":"اردو","uz":"ازبکی","vai":"ویایی","ve":"وندایی","vi":"ویتنامی","vo":"ولاپوک","vot":"وتی","vun":"ونجو","wa":"والونی","wae":"والسر","wal":"والامو","war":"وارایی","was":"واشویی","wbp":"وارلپیری","wo":"ولوفی","xal":"قلموقی","xh":"خوسایی","xog":"سوگایی","yao":"یائویی","yap":"یاپی","yav":"یانگبنی","ybb":"یمبایی","yi":"یدی","yo":"یوروبایی","yue":"کانتونی","za":"چوانگی","zap":"زاپوتکی","zen":"زناگا","zgh":"آمازیغی معیار مراکش","zh":"چینی","zh-Hans":"چینی ساده‌شده","zh-Hant":"چینی سنتی","zu":"زولویی","zun":"زونیایی","zxx":"بدون محتوای زبانی","zza":"زازایی"},"short":{"az":"آذری","en-GB":"انگلیسی بریتانیا","en-US":"انگلیسی امریکا"},"narrow":{}},"region":{"long":{"142":"آسیا","143":"آسیای مرکزی","145":"غرب آسیا","150":"اروپا","151":"شرق اروپا","154":"شمال اروپا","155":"غرب اروپا","202":"افریقای جنوب صحرا","419":"امریکای لاتین","001":"جهان","002":"افریقا","003":"امریکای شمالی","005":"امریکای جنوبی","009":"اقیانوسیه","011":"غرب افریقا","013":"امریکای مرکزی","014":"شرق افریقا","015":"شمال افریقا","017":"مرکز افریقا","018":"جنوب افریقا","019":"امریکا","021":"شمال امریکا","029":"کارائیب","030":"شرق آسیا","034":"جنوب آسیا","035":"جنوب شرق آسیا","039":"جنوب اروپا","053":"استرالزی","054":"ملانزی","057":"ناحیهٔ میکرونزی","061":"پلی‌نزی","AC":"جزایر آسنسیون","AD":"آندورا","AE":"امارات متحدهٔ عربی","AF":"افغانستان","AG":"آنتیگوا و باربودا","AI":"آنگویلا","AL":"آلبانی","AM":"ارمنستان","AO":"آنگولا","AQ":"جنوبگان","AR":"آرژانتین","AS":"ساموآی امریکا","AT":"اتریش","AU":"استرالیا","AW":"آروبا","AX":"جزایر آلاند","AZ":"جمهوری آذربایجان","BA":"بوسنی و هرزگوین","BB":"باربادوس","BD":"بنگلادش","BE":"بلژیک","BF":"بورکینافاسو","BG":"بلغارستان","BH":"بحرین","BI":"بوروندی","BJ":"بنین","BL":"سن بارتلمی","BM":"برمودا","BN":"برونئی","BO":"بولیوی","BQ":"جزایر کارائیب هلند","BR":"برزیل","BS":"باهاما","BT":"بوتان","BV":"جزیرهٔ بووه","BW":"بوتسوانا","BY":"بلاروس","BZ":"بلیز","CA":"کانادا","CC":"جزایر کوکوس","CD":"کنگو - کینشاسا","CF":"جمهوری افریقای مرکزی","CG":"کنگو - برازویل","CH":"سوئیس","CI":"ساحل عاج","CK":"جزایر کوک","CL":"شیلی","CM":"کامرون","CN":"چین","CO":"کلمبیا","CP":"جزایر کلیپرتون","CR":"کاستاریکا","CU":"کوبا","CV":"کیپ‌ورد","CW":"کوراسائو","CX":"جزیرهٔ کریسمس","CY":"قبرس","CZ":"چک","DE":"آلمان","DG":"دیه‌گو گارسیا","DJ":"جیبوتی","DK":"دانمارک","DM":"دومینیکا","DO":"جمهوری دومینیکن","DZ":"الجزایر","EA":"سبته و ملیله","EC":"اکوادور","EE":"استونی","EG":"مصر","EH":"صحرای غربی","ER":"اریتره","ES":"اسپانیا","ET":"اتیوپی","EU":"اتحادیهٔ اروپا","EZ":"منطقهٔ یورو","FI":"فنلاند","FJ":"فیجی","FK":"جزایر فالکلند","FM":"میکرونزی","FO":"جزایر فارو","FR":"فرانسه","GA":"گابن","GB":"بریتانیا","GD":"گرنادا","GE":"گرجستان","GF":"گویان فرانسه","GG":"گرنزی","GH":"غنا","GI":"جبل‌الطارق","GL":"گرینلند","GM":"گامبیا","GN":"گینه","GP":"گوادلوپ","GQ":"گینهٔ استوایی","GR":"یونان","GS":"جورجیای جنوبی و جزایر ساندویچ جنوبی","GT":"گواتمالا","GU":"گوام","GW":"گینهٔ بیسائو","GY":"گویان","HK":"هنگ‌کنگ، منطقهٔ ویژهٔ اداری چین","HM":"هرد و جزایر مک‌دونالد","HN":"هندوراس","HR":"کرواسی","HT":"هائیتی","HU":"مجارستان","IC":"جزایر قناری","ID":"اندونزی","IE":"ایرلند","IL":"اسرائیل","IM":"جزیرهٔ من","IN":"هند","IO":"قلمرو بریتانیا در اقیانوس هند","IQ":"عراق","IR":"ایران","IS":"ایسلند","IT":"ایتالیا","JE":"جرزی","JM":"جامائیکا","JO":"اردن","JP":"ژاپن","KE":"کنیا","KG":"قرقیزستان","KH":"کامبوج","KI":"کیریباتی","KM":"کومور","KN":"سنت کیتس و نویس","KP":"کرهٔ شمالی","KR":"کرهٔ جنوبی","KW":"کویت","KY":"جزایر کِیمن","KZ":"قزاقستان","LA":"لائوس","LB":"لبنان","LC":"سنت لوسیا","LI":"لیختن‌اشتاین","LK":"سری‌لانکا","LR":"لیبریا","LS":"لسوتو","LT":"لیتوانی","LU":"لوکزامبورگ","LV":"لتونی","LY":"لیبی","MA":"مراکش","MC":"موناکو","MD":"مولداوی","ME":"مونته‌نگرو","MF":"سنت مارتین","MG":"ماداگاسکار","MH":"جزایر مارشال","MK":"مقدونیهٔ شمالی","ML":"مالی","MM":"میانمار (برمه)","MN":"مغولستان","MO":"ماکائو، منطقهٔ ویژهٔ اداری چین","MP":"جزایر ماریانای شمالی","MQ":"مارتینیک","MR":"موریتانی","MS":"مونت‌سرات","MT":"مالت","MU":"موریس","MV":"مالدیو","MW":"مالاوی","MX":"مکزیک","MY":"مالزی","MZ":"موزامبیک","NA":"نامیبیا","NC":"کالدونیای جدید","NE":"نیجر","NF":"جزیرهٔ نورفولک","NG":"نیجریه","NI":"نیکاراگوئه","NL":"هلند","NO":"نروژ","NP":"نپال","NR":"نائورو","NU":"نیوئه","NZ":"نیوزیلند","OM":"عمان","PA":"پاناما","PE":"پرو","PF":"پلی‌نزی فرانسه","PG":"پاپوا گینهٔ نو","PH":"فیلیپین","PK":"پاکستان","PL":"لهستان","PM":"سن پیر و میکلن","PN":"جزایر پیت‌کرن","PR":"پورتوریکو","PS":"سرزمین‌های فلسطینی","PT":"پرتغال","PW":"پالائو","PY":"پاراگوئه","QA":"قطر","QO":"بخش‌های دورافتادهٔ اقیانوسیه","RE":"رئونیون","RO":"رومانی","RS":"صربستان","RU":"روسیه","RW":"رواندا","SA":"عربستان سعودی","SB":"جزایر سلیمان","SC":"سیشل","SD":"سودان","SE":"سوئد","SG":"سنگاپور","SH":"سنت هلن","SI":"اسلوونی","SJ":"سوالبارد و یان ماین","SK":"اسلواکی","SL":"سیرالئون","SM":"سان‌مارینو","SN":"سنگال","SO":"سومالی","SR":"سورینام","SS":"سودان جنوبی","ST":"سائوتومه و پرینسیپ","SV":"السالوادور","SX":"سنت مارتن","SY":"سوریه","SZ":"اسواتینی","TA":"تریستان دا کونا","TC":"جزایر تورکس و کایکوس","TD":"چاد","TF":"سرزمین‌های جنوب فرانسه","TG":"توگو","TH":"تایلند","TJ":"تاجیکستان","TK":"توکلائو","TL":"تیمور-لسته","TM":"ترکمنستان","TN":"تونس","TO":"تونگا","TR":"ترکیه","TT":"ترینیداد و توباگو","TV":"تووالو","TW":"تایوان","TZ":"تانزانیا","UA":"اوکراین","UG":"اوگاندا","UM":"جزایر دورافتادهٔ ایالات متحده","UN":"سازمان ملل متحد","US":"ایالات متحده","UY":"اروگوئه","UZ":"ازبکستان","VA":"واتیکان","VC":"سنت وینسنت و گرنادین","VE":"ونزوئلا","VG":"جزایر ویرجین بریتانیا","VI":"جزایر ویرجین ایالات متحده","VN":"ویتنام","VU":"وانواتو","WF":"والیس و فوتونا","WS":"ساموآ","XA":"انگلیسی با لهجه خارجی","XB":"مجازی - دوجهته","XK":"کوزوو","YE":"یمن","YT":"مایوت","ZA":"افریقای جنوبی","ZM":"زامبیا","ZW":"زیمبابوه","ZZ":"ناحیهٔ نامشخص"},"short":{"GB":"بریتانیا","HK":"هنگ‌کنگ","MO":"ماکائو","PS":"فلسطین","SA":"عربستان","UN":"سازمان ملل","US":"ایالات متحده"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"آلبانیایی قفقازی","Ahom":"Ahom","Arab":"عربی","Aran":"Aran","Armi":"آرامی هخامنشی","Armn":"ارمنی","Avst":"اوستایی","Bali":"بالیایی","Bamu":"Bamu","Bass":"Bass","Batk":"باتاکی","Beng":"بنگالی","Bhks":"Bhks","Blis":"نمادهای بلیس","Bopo":"بوپوموفو","Brah":"براهمی","Brai":"بریل","Bugi":"بوگیایی","Buhd":"بوهید","Cakm":"چاکمایی","Cans":"Cans","Cari":"کاری","Cham":"چمی","Cher":"چروکیایی","Chrs":"Chrs","Cirt":"کرت","Copt":"قبطی","Cprt":"قبرسی","Cyrl":"سیریلی","Deva":"دوناگری","Diak":"Diak","Dogr":"Dogr","Dsrt":"دیسرتی","Dupl":"Dupl","Egyh":"کاهنی مصری","Egyp":"هیروگلیف مصری","Elba":"Elba","Elym":"Elym","Ethi":"اتیوپیایی","Geok":"گرجی خوتسوری","Geor":"گرجی","Glag":"گلاگولیتی","Gong":"Gong","Gonm":"Gonm","Goth":"گوتی","Gran":"Gran","Grek":"یونانی","Gujr":"گجراتی","Guru":"گورومخی","Hanb":"هان با بوموپوفو","Hang":"هانگول","Hani":"هان","Hano":"هانونویی","Hans":"ساده‌شده","Hant":"سنتی","Hatr":"Hatr","Hebr":"عبری","Hira":"هیراگانا","Hluw":"هیروگلیف آناتولی","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"سیلابی‌های ژاپنی","Hung":"مجاری باستان","Inds":"ایندوس","Ital":"ایتالی باستان","Jamo":"جامو","Java":"جاوه‌ای","Jpan":"ژاپنی","Kali":"کایالی","Kana":"کاتاکانا","Khar":"Khar","Khmr":"خمری","Khoj":"خواجکی","Kits":"Kits","Knda":"کانارا","Kore":"کره‌ای","Kthi":"کثی","Lana":"لانایی","Laoo":"لائوسی","Latf":"لاتینی فراکتور","Latg":"لاتینی گیلی","Latn":"لاتینی","Lepc":"Lepc","Limb":"لیمبایی","Lina":"خطی الف","Linb":"خطی ب","Lisu":"Lisu","Lyci":"لسیایی","Lydi":"لدیایی","Mahj":"Mahj","Maka":"Maka","Mand":"منده‌ای","Mani":"مانوی","Marc":"Marc","Maya":"هیروگلیف مایایی","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"مروییتی","Mlym":"مالایالامی","Modi":"Modi","Mong":"مغولی","Moon":"مونی","Mroo":"Mroo","Mtei":"مایک میتی","Mult":"Mult","Mymr":"میانمار","Nand":"Nand","Narb":"عربی شمالی باستان","Nbat":"نبطی","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"اوگامی","Olck":"Olck","Orkh":"اورخونی","Orya":"اوریه‌ای","Osge":"Osge","Osma":"Osma","Palm":"پالمیرایی","Pauc":"Pauc","Perm":"پرمی باستان","Phag":"Phag","Phli":"پهلوی کتیبه‌ای","Phlp":"پهلوی زبوری","Phlv":"پهلوی کتابی","Phnx":"فنیقی","Plrd":"Plrd","Prti":"پارتی کتیبه‌ای","Qaag":"Qaag","Rjng":"رجنگی","Rohg":"Rohg","Runr":"رونی","Samr":"سامری","Sara":"ساراتی","Sarb":"عربی جنوبی باستان","Saur":"سوراشترایی","Sgnw":"Sgnw","Shaw":"شاوی","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"سینهالی","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"سیلوتی نگاری","Syrc":"سریانی","Syre":"سریانی سطرنجیلی","Syrj":"سریانی غربی","Syrn":"سریانی شرقی","Tagb":"تگبنوایی","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"تامیلی","Tang":"Tang","Tavt":"Tavt","Telu":"تلوگویی","Teng":"تنگوار","Tfng":"تیفیناغی","Tglg":"تاگالوگی","Thaa":"تانه‌ای","Thai":"تایلندی","Tibt":"تبتی","Tirh":"Tirh","Ugar":"اوگاریتی","Vaii":"ویایی","Visp":"گفتار قابل مشاهده","Wara":"Wara","Wcho":"Wcho","Xpeo":"فارسی باستان","Xsux":"میخی سومری‐اکدی","Yezi":"Yezi","Yiii":"یی","Zanb":"Zanb","Zinh":"موروثی","Zmth":"علائم ریاضی","Zsye":"اموجی","Zsym":"علائم","Zxxx":"نانوشته","Zyyy":"مشترک","Zzzz":"خط نامشخص"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"پزتای آندورا","AED":"درهم امارات متحدهٔ عربی","AFA":"افغانی افغانستان (۱۹۲۷ تا ۲۰۰۲)","AFN":"افغانی افغانستان","ALK":"لک آلبانی (۱۹۴۶ تا ۱۹۶۵)","ALL":"لک آلبانی","AMD":"درام ارمنستان","ANG":"گیلدر آنتیل هلند","AOA":"کوانزای آنگولا","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"پزوی آرژانتین (۱۸۸۱ تا ۱۹۷۰)","ARP":"پزوی آرژانتین (۱۹۸۳ تا ۱۹۸۵)‏","ARS":"پزوی آرژانتین","ATS":"شیلینگ اتریش","AUD":"دلار استرالیا","AWG":"فلورین آروبا","AZM":"منات جمهوری آذربایجان (۱۹۹۳ تا ۲۰۰۶)","AZN":"منات جمهوری آذربایجان","BAD":"دینار بوسنی و هرزگوین (۱۹۹۲ تا ۱۹۹۴)","BAM":"مارک تبدیل‌پذیر بوسنی و هرزگوین","BAN":"BAN","BBD":"دلار باربادوس","BDT":"تاکای بنگلادش","BEC":"BEC","BEF":"فرانک بلژیک","BEL":"فرانک بلژیک (مالی)","BGL":"BGL","BGM":"BGM","BGN":"لف بلغارستان","BGO":"BGO","BHD":"دینار بحرین","BIF":"فرانک بوروندی","BMD":"دلار برمودا","BND":"دلار برونئی","BOB":"بولیویانوی بولیوی","BOL":"BOL","BOP":"پزوی بولیوی","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"رئال برزیل","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"دلار باهاما","BTN":"انگولتروم بوتان","BUK":"BUK","BWP":"پولای بوتسوانا","BYB":"روبل جدید بیلوروسی (۱۹۹۴ تا ۱۹۹۹)","BYN":"روبل بلاروسی","BYR":"روبل بلاروسی (۲۰۱۶–۲۰۰۰)","BZD":"دلار بلیز","CAD":"دلار کانادا","CDF":"فرانک کنگو","CHE":"CHE","CHF":"فرانک سوئیس","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"پزوی شیلی","CNH":"یوآن چین (برون‌مرزی)","CNX":"CNX","CNY":"یوآن چین","COP":"پزوی کلمبیا","COU":"COU","CRC":"کولون کاستاریکا","CSD":"دینار صربستان (۲۰۰۲ تا ۲۰۰۶)","CSK":"CSK","CUC":"پزوی تبدیل‌پذیر کوبا","CUP":"پزوی کوبا","CVE":"اسکودوی کیپ‌ورد","CYP":"پوند قبرس","CZK":"کورونای جمهوری چک","DDM":"مارک آلمان شرقی","DEM":"مارک آلمان","DJF":"فرانک جیبوتی","DKK":"کرون دانمارک","DOP":"پزوی جمهوری دومینیکن","DZD":"دینار الجزایر","ECS":"ECS","ECV":"ECV","EEK":"کرون استونی","EGP":"پوند مصر","ERN":"ناکفای اریتره","ESA":"ESA","ESB":"ESB","ESP":"پزتای اسپانیا","ETB":"بیر اتیوپی","EUR":"یورو","FIM":"FIM","FJD":"دلار فیجی","FKP":"پوند جزایر فالکلند","FRF":"فرانک فرانسه","GBP":"پوند بریتانیا","GEK":"GEK","GEL":"لاری گرجستان","GHC":"GHC","GHS":"سدی غنا","GIP":"پوند جبل‌الطارق","GMD":"دالاسی گامبیا","GNF":"فرانک گینه","GNS":"GNS","GQE":"GQE","GRD":"دراخمای یونان","GTQ":"کتزال گواتمالا","GWE":"GWE","GWP":"پزوی گینهٔ بیسائو","GYD":"دلار گویانا","HKD":"دلار هنگ‌کنگ","HNL":"لمپیرای هندوراس","HRD":"دینار کرواسی","HRK":"کونای کرواسی","HTG":"گورد هائیتی","HUF":"فورینت مجارستان","IDR":"روپیهٔ اندونزی","IEP":"پوند ایرلند","ILP":"پوند اسرائیل","ILR":"شقل اسرائیل (۱۹۸۰ تا ۱۹۸۵)","ILS":"شقل جدید اسرائیل","INR":"روپیهٔ هند","IQD":"دینار عراق","IRR":"ریال ایران","ISJ":"کرونای ایسلند (۱۹۱۸ تا ۱۹۸۱)","ISK":"کرونای ایسلند","ITL":"لیرهٔ ایتالیا","JMD":"دلار جامائیکا","JOD":"دینار اردن","JPY":"ین ژاپن","KES":"شیلینگ کنیا","KGS":"سوم قرقیزستان","KHR":"ری‌یل کامبوج","KMF":"فرانک کومورو","KPW":"وون کرهٔ شمالی","KRH":"KRH","KRO":"وون کرهٔ جنوبی (۱۹۴۵ تا ۱۹۵۳)","KRW":"وون کرهٔ جنوبی","KWD":"دینار کویت","KYD":"دلار جزایر کِیمن","KZT":"تنگهٔ قزاقستان","LAK":"کیپ لائوس","LBP":"لیرهٔ لبنان","LKR":"روپیهٔ سری‌لانکا","LRD":"دلار لیبریا","LSL":"لوتی لسوتو","LTL":"لیتاس لیتوانی","LTT":"تالوناس لیتوانی","LUC":"LUC","LUF":"فرانک لوکزامبورگ","LUL":"فرانک مالی لوگزامبورگ","LVL":"لاتس لتونی","LVR":"روبل لتونی","LYD":"دینار لیبی","MAD":"درهم مراکش","MAF":"فرانک مراکش","MCF":"فرانک موناکو","MDC":"MDC","MDL":"لئوی مولداوی","MGA":"آریاری مالاگاسی","MGF":"فرانک ماداگاسکار","MKD":"دینار مقدونیه","MKN":"دینار مقدونیه (۱۹۹۲ تا ۱۹۹۳)","MLF":"فرانک مالی","MMK":"کیات میانمار","MNT":"توگریک مغولستان","MOP":"پاتاکای ماکائو","MRO":"اوگوئیای موریتانی (۱۹۷۳ تا ۲۰۱۷)","MRU":"اوگوئیای موریتانی","MTL":"لیرهٔ مالت","MTP":"پوند مالت","MUR":"روپیهٔ موریس","MVP":"روپیهٔ مالدیو (۱۹۴۷ تا ۱۹۸۱)","MVR":"روپیهٔ مالدیو","MWK":"کواچای مالاوی","MXN":"پزوی مکزیک","MXP":"پزوی نقرهٔ مکزیک (۱۸۶۱ تا ۱۹۹۲)","MXV":"MXV","MYR":"رینگیت مالزی","MZE":"اسکودوی موزامبیک","MZM":"MZM","MZN":"متیکال موزامبیک","NAD":"دلار نامیبیا","NGN":"نایرای نیجریه","NIC":"NIC","NIO":"کوردوبای نیکاراگوئه","NLG":"گیلدر هلند","NOK":"کرون نروژ","NPR":"روپیهٔ نپال","NZD":"دلار زلاند نو","OMR":"ریال عمان","PAB":"بالبوای پاناما","PEI":"اینتی پرو","PEN":"سول پرو","PES":"سول پرو (۱۸۶۳ تا ۱۹۶۵)","PGK":"کینای پاپوا گینهٔ نو","PHP":"پزوی فیلیپین","PKR":"روپیهٔ پاکستان","PLN":"زواتی لهستان","PLZ":"PLZ","PTE":"اسکودوی پرتغال","PYG":"گوارانی پاراگوئه","QAR":"ریال قطر","RHD":"دلار رودزیا","ROL":"ROL","RON":"لئوی رومانی","RSD":"دینار صربستان","RUB":"روبل روسیه","RUR":"روبل روسیه (۱۹۹۱ تا ۱۹۹۸)","RWF":"فرانک رواندا","SAR":"ریال سعودی","SBD":"دلار جزایر سلیمان","SCR":"روپیهٔ سیشل","SDD":"دینار سودان (۱۹۹۲ تا ۲۰۰۷)","SDG":"پوند سودان","SDP":"SDP","SEK":"کرون سوئد","SGD":"دلار سنگاپور","SHP":"پوند سنت هلن","SIT":"SIT","SKK":"SKK","SLL":"لئون سیرالئون","SOS":"شیلینگ سومالی","SRD":"دلار سورینام","SRG":"گیلدر سورینام","SSP":"پوند سودان جنوبی","STD":"دوبرای سائوتومه و پرنسیپ (۱۹۷۷ تا ۲۰۱۷)","STN":"دوبرای سائوتومه و پرنسیپ","SUR":"روبل شوروی","SVC":"SVC","SYP":"لیرهٔ سوریه","SZL":"لیلانگنی سوازیلند","THB":"بات تایلند","TJR":"روبل تاجیکستان","TJS":"سامانی تاجیکستان","TMM":"منات ترکمنستان (۱۹۹۳ تا ۲۰۰۹)","TMT":"منات ترکمنستان","TND":"دینار تونس","TOP":"پاآنگای تونگا","TPE":"اسکودوی تیمور","TRL":"لیرهٔ ترکیه (۱۹۲۲ تا ۲۰۰۵)","TRY":"لیرهٔ ترکیه","TTD":"دلار ترینیداد و توباگو","TWD":"دلار جدید تایوان","TZS":"شیلینگ تانزانیا","UAH":"هریونیای اوکراین","UAK":"UAK","UGS":"شیلینگ اوگاندا (۱۹۶۶ تا ۱۹۸۷)","UGX":"شیلینگ اوگاندا","USD":"دلار امریکا","USN":"دلار امریکا (روز بعد)","USS":"دلار امریکا (همان روز)","UYI":"UYI","UYP":"پزوی اوروگوئه (۱۹۷۵ تا ۱۹۹۳)","UYU":"پزوی اوروگوئه","UYW":"UYW","UZS":"سوم ازبکستان","VEB":"بولیوار ونزوئلا (۱۸۷۱ تا ۲۰۰۸)","VEF":"بولیوار ونزوئلا (۲۰۰۸ تا ۲۰۱۸)","VES":"بولیوار ونزوئلا","VND":"دانگ ویتنام","VNN":"VNN","VUV":"واتوی وانوواتو","WST":"تالای ساموا","XAF":"فرانک CFA مرکز افریقا","XAG":"نقره","XAU":"طلا","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"دلار شرق کارائیب","XDR":"XDR","XEU":"XEU","XFO":"فرانک طلای فرانسه","XFU":"XFU","XOF":"فرانک CFA غرب افریقا","XPD":"پالادیم","XPF":"فرانک اقیانوسیه","XPT":"پلاتین","XRE":"XRE","XSU":"XSU","XTS":"ارز آزمایشی","XUA":"XUA","XXX":"ارز نامشخص","YDD":"دینار یمن","YER":"ریال یمن","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"راند افریقای جنوبی","ZMK":"کواچای زامبیا (۱۹۶۸ تا ۲۰۱۲)","ZMW":"کواچای زامبیا","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"دلار زیمبابوه (۱۹۸۰ تا ۲۰۰۸)","ZWL":"دلار زیمبابوه (۲۰۰۹)","ZWR":"دلار زیمبابوه (۲۰۰۸)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["fa"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
