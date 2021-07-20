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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("mzn").length
)) {
// Intl.DisplayNames.~locale.mzn
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"ab":"آبخازی","af":"آفریکانس","agq":"آقم","ak":"آکان","am":"امهری","ar":"عربی","ar-001":"مدرن استاندارد عربی","arn":"ماپوچه","as":"آسامی","asa":"آسو","ast":"ast","az":"آذری ِترکی","az-Arab":"جنوبی آذری ترکی","ba":"باشقیری","bas":"bas","be":"بلاروسی","bem":"بمبایی","bez":"بنایی","bg":"بلغاری","bgn":"غربی بلوچی","bm":"بامبارایی","bn":"بنگالی","bo":"تبتی","br":"برِتونی","brx":"بدویی","bs":"بوسنیایی","ca":"کاتالونی","ccp":"ccp","ce":"چچنی","ceb":"ceb","cgg":"چیگا","chr":"چروکیایی","ckb":"میونی کوردی","co":"کورسیکان","cs":"چکی","cu":"cu","cv":"چوواشی","cy":"ولزی","da":"دانمارکی","dav":"تایتا","de":"آلمانی","de-AT":"اتریش ِآلمانی","de-CH":"سوییس ِآلمانی","dje":"زارمایی","doi":"doi","dsb":"پایین صربی","dua":"دوئالایی","dyo":"جولا-فونی","dz":"دزونگخا","ebu":"امبو","ee":"اوه‌یی","el":"یونانی","en":"انگلیسی","en-AU":"استرالیای ِانگلیسی","en-CA":"کانادای ِانگلیسی","en-GB":"بریتیش انگلیسی","en-US":"امریکن انگلیسی","eo":"اسپرانتو","es":"ایسپانیولی","es-419":"جنوبی آمریکای ِایسپانیولی","es-ES":"اروپای ِایسپانیولی","es-MX":"مکزیک ِایسپانیولی","et":"استونیایی","eu":"باسکی","ewo":"ewo","fa":"فارسی","fa-AF":"فارسی (افغانستون)","ff":"ff","fi":"فینیش","fil":"فیلیپینو","fj":"فیجیایی","fo":"فارویی","fr":"فرانسوی","fr-CA":"کانادای ِفرانسوی","fr-CH":"سوییس ِفرانسوی","frc":"frc","fur":"fur","fy":"غربی فیریزی","ga":"ایریش","gag":"گاگائوزی","gd":"gd","gl":"گالیک","gn":"گورانی","gsw":"سوییس آلمانی","gu":"گجراتی","guz":"گوسی","gv":"مانکس","ha":"هوسا","haw":"هاواییایی","he":"عبری","hi":"هندی","hmn":"hmn","hr":"کرواتی","hsb":"بالایی صربی","ht":"هائتیایی","hu":"مجاری","hy":"ارمنی","ia":"ia","id":"اندونزیایی","ig":"ایگبو","ii":"سیچوئان یی","is":"ایسلندی","it":"ایتالیایی","iu":"انوکتیتوت","ja":"جاپونی","jgo":"نگومبا","jmc":"ماچامه","jv":"جاوایی","ka":"گرجی","kab":"قبایلی","kam":"کامبایی","kde":"ماکونده","kea":"کیپ وُردی","kgp":"kgp","khq":"کویرا چیینی","ki":"کیکویو","kk":"قزاقی","kkj":"kkj","kl":"کالائلیسوت","kln":"کالنجین","km":"خمری","kn":"کانّادا","ko":"کُره‌یی","koi":"کومی-پرمیاک","kok":"کونکانی","ks":"کشمیری","ksb":"شامبالا","ksf":"بافیایی","ksh":"ksh","ku":"کوردی","kw":"کورنیش","ky":"قرقیزی","la":"لاتین","lag":"لانگی","lb":"لوکزامبورگی","lg":"گاندا","lij":"lij","lkt":"لاکوتا","ln":"لینگالا","lo":"لائویی","lou":"lou","lrc":"شمالی لُری","lt":"لتونیایی","lu":"لوبا-کاتانگا","luo":"لوئو","luy":"لوییا","lv":"لاتویایی","mai":"mai","mas":"ماسایی","mer":"مِرویی","mfe":"موریسین","mg":"مالاگاسی","mgh":"ماخوئا-میتو","mgo":"مِتاء","mi":"مائوری","mk":"مقدونی","ml":"مالایالام","mn":"مغولی","mni":"mni","moh":"موهاک","mr":"ماراتی","ms":"مالایی","mt":"مالتی","mua":"موندانگ","mul":"mul","my":"برمه‌یی","mzn":"مازرونی","naq":"ناما","nb":"نروژی بوکمال","nd":"شمالی ندبله","nds":"پایین آلمانی","nds-NL":"پایین ساکسونی","ne":"نپالی","nl":"هلندی","nl-BE":"فلمیش","nmg":"کوئاسیو","nn":"نروژی نینورسک","nnh":"nnh","no":"no","nqo":"نئکو","nus":"نوئر","nv":"nv","ny":"ny","nyn":"نیانکوله","om":"اورومو","or":"اوریا","os":"os","pa":"پنجابی","pcm":"pcm","pl":"لهستونی","prg":"prg","ps":"پشتو","pt":"پرتغالی","pt-BR":"برزیل ِپرتغالی","pt-PT":"اروپای ِپرتغالی","qu":"قوئچوئا","quc":"کئیچه‌ئی","rm":"رومانش","rn":"روندی","ro":"رومانیایی","ro-MD":"مولداوی","rof":"رومبو","ru":"روسی","rw":"کنیاروآندایی","rwk":"روآیی","sa":"سانسکریت","sah":"sah","saq":"سامبورو","sat":"sat","sbp":"سانگوو","sd":"سندی","sdh":"جنوبی کردی","se":"شمالی سامی","seh":"سِنایی","ses":"کویرابورا سنی","sg":"سانگو","shi":"تاچلهیت","si":"سینهالا","sk":"اسلواکی","sl":"اسلوونیایی","sm":"sm","sma":"جنوبی سامی","smj":"لوله سامی","smn":"ایناری سامی","sms":"سکولت سامی","sn":"شونا","so":"سومالیایی","sq":"آلبانیایی","sr":"صربی","st":"st","su":"سوندانسی","sv":"سوئدی","sw":"سواحیلی","sw-CD":"کنگو سواحیلی","ta":"تامیلی","te":"تلوگویی","teo":"تسویی","tg":"تاجیکی","th":"تایی","ti":"تیگرینیایی","tk":"ترکمونی","to":"تونگانی","tr":"ترکی","tt":"تاتاری","twq":"تاساواقی","tzm":"میونی اطلس تامزیقی","ug":"ئوغوری","uk":"اوکراینی","und":"نشناسی‌یه زوون","ur":"اردو","uz":"ازبکی","vai":"وایی","vi":"ویتنامی","vo":"vo","vun":"وونجویی","wae":"wae","wbp":"والرپیری","wo":"وولفی","xh":"خوسا","xog":"سوگا","yav":"yav","yi":"yi","yo":"یوروبا","yue":"yue","zgh":"مراکش ِاستاندارد ِتامازیقتی","zh":"چینی","zh-Hans":"ساده چینی","zh-Hant":"سنتی چینی","zu":"زولو","zxx":"این زوون بشناسی‌یه نیّه"},"short":{"az":"آذری","en-GB":"بریتانیای ِانگلیسی","en-US":"آمریکای ِانگلیسی"},"narrow":{}},"region":{"long":{"142":"آسیا","143":"میونی آسیا","145":"غربی آسیا","150":"اروپا","151":"شرقی اروپا","154":"شمالی اروپا","155":"غربی اروپا","202":"202","419":"لاتین آمریکا","001":"جهون","002":"آفریقا","003":"شمالی آمریکا","005":"جنوبی آمریکا","009":"اوقیانوسیه","011":"غربی آفریقا","013":"میونی آمریکا","014":"شرقی آفریقا","015":"شمالی ۀفریقا","017":"میونی آفریقا","018":"جنوبی آفریقا","019":"آمریکا","021":"شمالی امریکا","029":"کاراییب","030":"شرقی آسیا","034":"جنوبی آسیا","035":"آسیای ِجنوب‌شرقی‌وَر","039":"جنوبی اروپا","053":"اوسترالزی","054":"ملانزی","057":"میکرونزی منقطه","061":"پولی‌نزی","AC":"آسنسیون جزیره","AD":"آندورا","AE":"متحده عربی امارات","AF":"افغانستون","AG":"آنتیگوا و باربودا","AI":"آنگویلا","AL":"آلبانی","AM":"ارمنستون","AO":"آنگولا","AQ":"جنوبی یخ‌بزه قطب","AR":"آرژانتین","AS":"آمریکای ِساموآ","AT":"اتریش","AU":"استرالیا","AW":"آروبا","AX":"آلند جزیره","AZ":"آذربایجون","BA":"بوسنی و هرزگوین","BB":"باربادوس","BD":"بنگلادش","BE":"بلژیک","BF":"بورکینا فاسو","BG":"بلغارستون","BH":"بحرین","BI":"بوروندی","BJ":"بنین","BL":"سنت بارتلمی","BM":"برمودا","BN":"برونئی","BO":"بولیوی","BQ":"هلند ِکاراییبی جزایر","BR":"برزیل","BS":"باهاما","BT":"بوتان","BV":"بووت جزیره","BW":"بوتساوانا","BY":"بلاروس","BZ":"بلیز","CA":"کانادا","CC":"کوک (کیلینگ) جزایر","CD":"کنگو کینشاسا","CF":"مرکزی آفریقای جمهوری","CG":"کنگو برازاویل","CH":"سوییس","CI":"عاج ِساحل","CK":"کوک جزایر","CL":"شیلی","CM":"کامرون","CN":"چین","CO":"کلمبیا","CP":"کلیپرتون جزیره","CR":"کاستاریکا","CU":"کوبا","CV":"کیپ ورد","CW":"کوراسائو","CX":"کریسمس جزیره","CY":"قبرس","CZ":"چک جمهوری","DE":"آلمان","DG":"دیگو گارسیا","DJ":"جیبوتی","DK":"دانمارک","DM":"دومنیکا","DO":"دومنیکن جمهوری","DZ":"الجزیره","EA":"سوتا و ملیله","EC":"اکوادر","EE":"استونی","EG":"مصر","EH":"غربی صحرا","ER":"اریتره","ES":"ایسپانیا","ET":"اتیوپی","EU":"اروپا اتحادیه","EZ":"EZ","FI":"فنلاند","FJ":"فیجی","FK":"فالکلند جزیره‌ئون","FM":"میکرونزی","FO":"فارو جزایر","FR":"فرانسه","GA":"گابون","GB":"بریتانیا","GD":"گرانادا","GE":"گرجستون","GF":"فرانسه‌ی ِگویان","GG":"گرنزی","GH":"غنا","GI":"جبل طارق","GL":"گرینلند","GM":"گامبیا","GN":"گینه","GP":"گوادلوپ","GQ":"استوایی گینه","GR":"یونان","GS":"جنوبی جورجیا و جنوبی ساندویچ جزایر","GT":"گواتمالا","GU":"گوئام","GW":"گینه بیسائو","GY":"گویان","HK":"هنگ کنگ","HM":"هارد و مک‌دونالد جزایر","HN":"هندوراس","HR":"کرواسی","HT":"هاییتی","HU":"مجارستون","IC":"قناری جزایر","ID":"اندونزی","IE":"ایرلند","IL":"ایسراییل","IM":"من ِجزیره","IN":"هند","IO":"بریتانیای هند ِاوقیانوس ِمناطق","IQ":"عراق","IR":"ایران","IS":"ایسلند","IT":"ایتالیا","JE":"جرسی","JM":"جاماییکا","JO":"اردن","JP":"جاپون","KE":"کنیا","KG":"قرقیزستون","KH":"کامبوج","KI":"کیریباتی","KM":"کومور","KN":"سنت کیتس و نویس","KP":"شمالی کُره","KR":"جنوبی کُره","KW":"کویت","KY":"کیمن جزیره‌ئون","KZ":"قزاقستون","LA":"لائوس","LB":"لبنان","LC":"سنت لوسیا","LI":"لیختن اشتاین","LK":"سریلانکا","LR":"لیبریا","LS":"لسوتو","LT":"لتونی","LU":"لوکزامبورگ","LV":"لاتویا","LY":"لیبی","MA":"مراکش","MC":"موناکو","MD":"مولداوی","ME":"مونته‌نگرو","MF":"سنت مارتین","MG":"ماداگاسکار","MH":"مارشال جزایر","MK":"MK","ML":"مالی","MM":"میانمار","MN":"مغولستون","MO":"ماکائو (چین دله)","MP":"شمالی ماریانا جزایر","MQ":"مارتینیک جزیره‌ئون","MR":"موریتانی","MS":"مونتسرات","MT":"مالت","MU":"مورى تيوس","MV":"مالدیو","MW":"مالاوی","MX":"مکزیک","MY":"مالزی","MZ":"موزامبیک","NA":"نامبیا","NC":"نیو کالیدونیا","NE":"نیجر","NF":"نورفولک جزیره","NG":"نیجریه","NI":"نیکاراگوئه","NL":"هلند","NO":"نروژ","NP":"نپال","NR":"نائورو","NU":"نیئو","NZ":"نیوزلند","OM":"عمان","PA":"پاناما","PE":"پرو","PF":"فرانسه‌ی پولی‌نزی","PG":"پاپوا نو گینه","PH":"فیلیپین","PK":"پاکستون","PL":"لهستون","PM":"سن پییر و میکلن","PN":"پیتکارین جزایر","PR":"پورتوریکو","PS":"فلسطین ِسرزمین","PT":"پرتغال","PW":"پالائو","PY":"پاراگوئه","QA":"قطر","QO":"اوقیانوسیه‌ی ِپرت ِجائون","RE":"رئونیون","RO":"رومانی","RS":"صربستون","RU":"روسیه","RW":"روآندا","SA":"عربستون","SB":"سلیمون جزیره","SC":"سیشل","SD":"سودان","SE":"سوئد","SG":"سنگاپور","SH":"سنت هلنا","SI":"اسلوونی","SJ":"سوالبارد و يان ماين","SK":"اسلواکی","SL":"سیرالئون","SM":"سن مارینو","SN":"سنگال","SO":"سومالی","SR":"سورینام","SS":"جنوبی سودان","ST":"سائوتومه و پرینسیپ","SV":"السالوادور","SX":"سنت مارتن","SY":"سوریه","SZ":"سوازیلند","TA":"تریستان دا جونها","TC":"تورکس و کایکوس جزایر","TD":"چاد","TF":"فرانسه‌ی جنوبی مناطق","TG":"توگو","TH":"تایلند","TJ":"تاجیکستون","TK":"توکلائو","TL":"تیمور شرقی","TM":"ترکمونستون","TN":"تونس","TO":"تونگا","TR":"ترکیه","TT":"ترینیداد و توباگو","TV":"تووالو","TW":"تایوان","TZ":"تانزانیا","UA":"اوکراین","UG":"اوگاندا","UM":"آمریکای پَرتِ‌پِلا جزیره‌ئون","UN":"UN","US":"متحده ایالات","UY":"اروگوئه","UZ":"ازبکستون","VA":"واتیکان","VC":"سنت وینسنت و گرنادین","VE":"ونزوئلا","VG":"بریتانیای ویرجین","VI":"آمریکای ویرجین","VN":"ویتنام","VU":"وانواتو","WF":"والیس و فوتونا","WS":"ساموآ","XA":"XA","XB":"XB","XK":"کوزوو","YE":"یمن","YT":"مایوت","ZA":"جنوبی افریقا","ZM":"زامبیا","ZW":"زیمبابوه","ZZ":"نامَیِّن منطقه"},"short":{"GB":"بریتانیا","HK":"هونگ کونگ","MO":"ماکائو","PS":"فلسطین","US":"آمریکا متحده ایالات"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"عربی","Aran":"Aran","Armi":"Armi","Armn":"ارمنی","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"بنگالی","Bhks":"Bhks","Bopo":"بوپوموفو","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"سیریلیک","Deva":"دیوانانگری","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"اتیوپیایی","Geor":"گرجی","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"یونانی","Gujr":"گجراتی","Guru":"گورموخی","Hanb":"Hanb","Hang":"هانگول","Hani":"هان","Hano":"Hano","Hans":"ساده‌بَیی هان","Hant":"سنتی هانت","Hatr":"Hatr","Hebr":"عبری","Hira":"هیراگانا","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"جاپونی","Kali":"Kali","Kana":"کاتاکانا","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"متحده عربی امارات ِدرهم","AFA":"AFA","AFN":"افغانستون ِافغانی","ALK":"ALK","ALL":"آلبانی ِلک","AMD":"ارمنستون درهم","ANG":"هلند ِآنتیل ِجزایر ِگویلدر","AOA":"آنگولای ِکوانزا","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"آرژانتین ِپزو","ATS":"ATS","AUD":"AUD","AWG":"آروبای ِفلورن","AZM":"AZM","AZN":"آذربایجون ِمنات","BAD":"BAD","BAM":"بوسنی و هرزگوین ِتبدیل‌بَیی مارک","BAN":"BAN","BBD":"باربادوس ِدولار","BDT":"بنگلادش ِتاکا","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"بلغارستون ِلیوا","BGO":"BGO","BHD":"بحرین ِدینار","BIF":"بوروندی ِفرانک","BMD":"برمودای ِدولار","BND":"برونئی ِدولار","BOB":"بولیوی ِبولیویانو","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"برزیل ِرئال","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"باهامای ِدولار","BTN":"بوتان ِنگولتروم","BUK":"BUK","BWP":"بوتساوانای ِپولا","BYB":"BYB","BYN":"بلاروس ِروبل","BYR":"بلاروس ِروبل (۲۰۰۰–۲۰۱۶)","BZD":"بلیز ِدولار","CAD":"کانادای ِدولار","CDF":"کنگوی ِفرانک","CHE":"CHE","CHF":"سوییس ِفرانک","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"شیلی ِپزو","CNH":"CNH","CNX":"CNX","CNY":"چین ِیوآن","COP":"کلمبیای ِپزو","COU":"COU","CRC":"کاستاریکای ِکولون","CSD":"CSD","CSK":"CSK","CUC":"کوبای ِتبدیل‌بَیی پزو","CUP":"کوبای ِپزو","CVE":"عاج ِساحل ِایسکودو","CYP":"CYP","CZK":"چک ِکرون","DDM":"DDM","DEM":"DEM","DJF":"جیبوتی ِفرانک","DKK":"دانمارک ِکورن","DOP":"دومینیکن ِپزو","DZD":"الجزیره‌ی ِدینار","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"مصر ِپوند","ERN":"اریتره‌ی ِناکفا","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"اتیوپی ِبیر","EUR":"یورو","FIM":"FIM","FJD":"FJD","FKP":"فالکلند ِجزایر ِپوند","FRF":"FRF","GBP":"بریتانیای ِپوند","GEK":"GEK","GEL":"گرجستون ِلاری","GHC":"GHC","GHS":"غنای ِسدی","GIP":"جبل‌طارق ِپوند","GMD":"گامبیای ِدالاسی","GNF":"گینه‌ی ِفرانک","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"گواتمالا کتزال","GWE":"GWE","GWP":"GWP","GYD":"گویان ِدولار","HKD":"هونگ کونگ ِدولار","HNL":"هندوراس ِلمپیرا","HRD":"HRD","HRK":"کرواسی ِکونا","HTG":"هائیتی ِگورد","HUF":"مجارستون ِفروینت","IDR":"اندونزی ِروپیه","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"اسراییل ِنو شِکِل","INR":"هند ِروپیه","IQD":"عراق ِدینار","IRR":"ایران ریال","ISJ":"ISJ","ISK":"ایسلند کرونا","ITL":"ITL","JMD":"جاماییکای ِدولار","JOD":"اردن ِدینار","JPY":"جاپون ِین","KES":"کنیای ِشیلینگ","KGS":"قرقیزستون ِسام","KHR":"کامبوج ِریل","KMF":"کامرون ِفرانک","KPW":"شمالی کره‌ی ِوون","KRH":"KRH","KRO":"KRO","KRW":"جنوبی کُره‌ی ِوون","KWD":"کویت ِدینار","KYD":"کایمن جزیره‌ی ِدولار","KZT":"قراقستون ِتنگ","LAK":"لائوس ِکیپ","LBP":"لبنان ِپوند","LKR":"سریلانکا روپیه","LRD":"لیبریای ِدولار","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"لیبی ِدینار","MAD":"مراکش ِدرهم","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"مولداوی ِلئو","MGA":"ماداگاسکار ِآریاری","MGF":"MGF","MKD":"مقدونیه‌ی ِدینار","MKN":"MKN","MLF":"MLF","MMK":"میانمار ِکیات","MNT":"مغلستون ِتوگریک","MOP":"ماکائو ِپاتاجا","MRO":"موریتانی ِاوگوئیا (1973–2017)","MRU":"موریتانی ِاوگوئیا","MTL":"MTL","MTP":"MTP","MUR":"موریتیان ِروپیه","MVP":"MVP","MVR":"مالدیو ِروفیا","MWK":"مالاوی ِکواچا","MXN":"مکزیک ِپزو","MXP":"MXP","MXV":"MXV","MYR":"مالزی ِرینگیت","MZE":"MZE","MZM":"MZM","MZN":"موزامبیک متیکال","NAD":"نامبیای ِدولار","NGN":"نیجریه‌ی ِنیارا","NIC":"NIC","NIO":"نیکاراگوئه‌ی ِکوردوبا","NLG":"NLG","NOK":"نروژ ِکرون","NPR":"نپال ِروپیه","NZD":"NZD","OMR":"عمان ِریال","PAB":"پانامای ِبالبوا","PEI":"PEI","PEN":"پروی ِسول","PES":"PES","PGK":"PGK","PHP":"فیلیپین ِپزو","PKR":"پاکستون روپیه","PLN":"لهستون ِزلوتی","PLZ":"PLZ","PTE":"PTE","PYG":"پاراگوئه‌ی ِگوارانی","QAR":"قطر ِریال","RHD":"RHD","ROL":"ROL","RON":"رومانی ِلئو","RSD":"صربستون ِدینار","RUB":"روسیه‌ی ِروبل","RUR":"RUR","RWF":"روآندای ِفرانک","SAR":"عربستون ِریال","SBD":"SBD","SCR":"سیشل ِروپیه","SDD":"SDD","SDG":"سودان ِپوند","SDP":"SDP","SEK":"سوئد ِکرون","SGD":"سنگاپور ِدلار","SHP":"سنت هلنای ِپوند","SIT":"SIT","SKK":"SKK","SLL":"سیرالئون ِلئون","SOS":"سومالی ِشیلینگ","SRD":"سورینام ِدولار","SRG":"SRG","SSP":"جنوبی سودان ِپوند","STD":"سائوتومه و پرینسیپ ِدوبرا (1977–2017)","STN":"سائوتومه و پرینسیپ ِدوبرا","SUR":"SUR","SVC":"SVC","SYP":"سوریه‌ی ِپوند","SZL":"سوازیلند ِلیلانجنی","THB":"تایلند ِبات","TJR":"TJR","TJS":"تاجیکستون ِسامانی","TMM":"TMM","TMT":"ترکمنستون ِمنات","TND":"تونس ِدینار","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"ترکیه‌ی ِلیره","TTD":"ترینیداد و توباگوی ِدولار","TWD":"جدید ِتایوان ِدولار","TZS":"تانزانیای ِشیلینگ","UAH":"اکراین ِگریونا","UAK":"UAK","UGS":"UGS","UGX":"اوگاندای ِشیلینگ","USD":"آمریکای ِدولار","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"اروگوئه‌ی ِپزو","UYW":"UYW","UZS":"ازبکستون ِسام","VEB":"VEB","VEF":"ونزوئلایِ بولیوار (2008–2018)","VES":"ونزوئلایِ بولیوار","VND":"ویتنام ِدنگ","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"میونی آفریقای ِسی‌اف‌ای فرانک","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"شرقی کاراییب ِدولار","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"غربی آفریقای ِسی‌اف‌ای فرانک","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"یمن ِریال","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"جنوبی آفریقای ِراند","ZMK":"ZMK","ZMW":"زامبیای ِکواچا","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"mzn"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
