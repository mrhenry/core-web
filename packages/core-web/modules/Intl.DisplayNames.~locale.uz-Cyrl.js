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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("uz-Cyrl").length
)) {
// Intl.DisplayNames.~locale.uz-Cyrl
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"афарча","ab":"абхазча","ace":"ачин","ada":"адангмэ","ady":"адигей","af":"африкаанс","agq":"агемча","ain":"айну","ak":"аканча","ale":"алеут","am":"амхарча","an":"арагон","anp":"ангика","ar":"арабча","ar-001":"стандарт арабча","arn":"мапудунгун","arp":"арапахо","as":"ассомча","asa":"асуча","ast":"астурийча","av":"аварча","awa":"авадхи","ay":"аймара","az":"озарбайжонча","ba":"бошқирдча","ban":"балича","bas":"басаа","be":"беларусча","bem":"бемба","bez":"бенача","bg":"болгарча","bho":"бхожпури","bi":"бислама","bin":"бини","bm":"бамбарча","bn":"бенгалча","bo":"тибетча","br":"бретонча","brx":"бодоча","bs":"боснийча","bug":"бугийча","byn":"блинча","ca":"каталонча","ccp":"ccp","ce":"чечен тили","ceb":"себуанча","cgg":"чигача","ch":"чаморро","chk":"чуукча","chm":"мари","cho":"чоктавча","chr":"чероки","chy":"шайенн","ckb":"сорани-курдча","co":"корсиканча","cs":"чехча","cu":"славянча (черков)","cv":"чуваш тили","cy":"уэлсча","da":"датча","dak":"дакотча","dar":"даргинча","dav":"таитача","de":"немисча","de-AT":"немисча (Австрия)","de-CH":"немисча (Швейцария)","dgr":"догриб","dje":"зарма","dsb":"қуйи-сорбча","dua":"дуалача","dv":"дивехи","dyo":"диола-фогни","dz":"дзонгка","dzg":"дазага","ebu":"эмбуча","ee":"эвеча","efi":"эфик","eka":"экажук","el":"грекча","en":"инглизча","en-AU":"инглизча (Австралия)","en-CA":"инглизча (Канада)","en-GB":"инглизча (Британия)","en-US":"инглизча (Америка)","eo":"эсперанто","es":"испанча","es-419":"испанча (Лотин Америкаси)","es-ES":"испанча (Испания)","es-MX":"испанча (Мексика)","et":"эстонча","eu":"баскча","ewo":"эвондонча","fa":"форсий","fa-AF":"форсий (Афғонистон)","ff":"фулаҳ","fi":"финча","fil":"филипинча","fj":"фижича","fo":"фарерча","fon":"фон","fr":"французча","fr-CA":"французча (Канада)","fr-CH":"французча (Швейцария)","frc":"frc","fur":"фриулча","fy":"ғарбий фризча","ga":"ирландча","gaa":"га","gd":"шотландча гаелик","gez":"геэз","gil":"гилбертча","gl":"галицийча","gn":"гуарани","gor":"горонтало","gsw":"немисча (Швейцария)","gu":"гужаротча","guz":"гусии","gv":"мэнча","gwi":"гвичин","ha":"хауса","haw":"гавайча","he":"иброний","hi":"ҳинди","hil":"хилигайнон","hmn":"хмонгча","hr":"хорватча","hsb":"юқори сорбча","ht":"гаитянча","hu":"венгерча","hup":"хупа тили","hy":"арманча","hz":"гереро","ia":"интерлингва","iba":"ибан тили","ibb":"ибибо","id":"индонезча","ig":"игбо","ii":"ii","ilo":"илоко","inh":"ингушча","io":"идо","is":"исландча","it":"италянча","iu":"инуктитут","ja":"японча","jgo":"нгомба","jmc":"мачаме тили","jv":"яванча","ka":"грузинча","kab":"кабилча","kaj":"кажи","kam":"камбача","kde":"макондеча","kea":"кабувердиану","khq":"койра-чиини","ki":"кикую","kk":"қозоқча","kkj":"како","kl":"гренландча","kln":"каленжинча","km":"хмерча","kn":"каннада","ko":"корейсча","kok":"конканча","kr":"канури","ks":"кашмирча","ksb":"шамбала","ksf":"бафияча","ksh":"кёлнча","ku":"курдча","kw":"корнча","ky":"қирғизча","la":"лотинча","lag":"лангича","lb":"люксембургча","lg":"гандача","lkt":"лакотачалакотача","ln":"лингалча","lo":"лаосча","lou":"lou","lrc":"шимолий лури","lt":"литвача","lu":"луба-катанга","luo":"luo","lus":"лушай","luy":"луҳя","lv":"латишча","mai":"mai","mas":"масайча","mdf":"мокша тили","men":"менде","mer":"меруча","mfe":"морисьен","mg":"малагасийча","mgh":"махува-митто","mgo":"мета","mh":"маршалл тили","mi":"маори","mic":"микмак","min":"минангкабау","mk":"македонча","ml":"малаялам","mn":"мўғулча","mni":"манипурча","moh":"могавк","mos":"мосси","mr":"маратхи","ms":"малай тил","mt":"малтача","mua":"мунданг","mul":"бир нечта тил","mus":"крикча","mwl":"мирандес","my":"бирманча","myv":"эрзянча","mzn":"мазандеран","naq":"нама","nb":"норвегча бокмал","nd":"шимолий ндебеле","nds":"nds","nds-NL":"nds (Нидерландия)","ne":"непалча","niu":"ниуэча","nl":"голландча","nl-BE":"фламандча","nmg":"квасио","nn":"норвегча нюнорск","nnh":"нгиембун","nqo":"нко","nr":"жанубий ндебелча","nus":"нуэрча","ny":"чева","nyn":"нянколе","oc":"окситанча","om":"оромо","or":"одия","os":"os","pa":"панжобча","pap":"папияменто","pcm":"pcm","pl":"полякча","prg":"prg","ps":"пушту","pt":"португалча","pt-BR":"португалча (Бразилия)","pt-PT":"португалча (Португалия)","qu":"кечуа","quc":"кичэ","rm":"романшча","rn":"рунди","ro":"руминча","ro-MD":"руминча (Молдова)","rof":"ромбоча","root":"root","ru":"русча","rup":"арумин","rw":"киняруанда","rwk":"руанда тили","sa":"санскрит","sah":"саха","saq":"самбуруча","sat":"сантали","sbp":"сангуча","sd":"синдҳи","se":"шимолий саамча","seh":"сена","ses":"койраборо-сенни","sg":"санго","shi":"ташелхит","si":"сингалча","sk":"словакча","sl":"словенча","sm":"sm","sma":"жанубий саамча","smj":"луле-саамча","smn":"инари-саамча","sms":"сколт-саамча","sn":"шона","so":"сомалича","sq":"албанча","sr":"сербча","ss":"свати","ssy":"саҳоча","st":"st","su":"сунданча","sv":"шведча","sw":"суахили","sw-CD":"конго-суахили","swb":"коморча","syr":"сурияча","ta":"тамилча","te":"телугу","teo":"тесо","tg":"тожикча","th":"тайча","ti":"тигриняча","tig":"тигре","tk":"туркманча","to":"тонганча","tr":"туркча","tt":"татарча","twq":"тасавак","tzm":"марказий атлас тамазигхт","ug":"уйғурча","uk":"украинча","und":"номаълум тил","ur":"урду","uz":"ўзбекча","vai":"ваи","ve":"венда","vi":"ветнамча","vo":"волапюк","vun":"вунжо","wae":"валсерча","wal":"волятта","wo":"волофча","xh":"хоса","xog":"сога","yav":"янгбен","yi":"иддиш","yo":"йоруба","yue":"кантонча","zgh":"тамазигхт","zh":"хитойча","zh-Hans":"соддалаштирилган хитойча","zh-Hant":"анъанавий хитойча","zu":"зулу","zxx":"Тил таркиби йўқ"},"short":{"az":"озар","en-GB":"инглизча (Британия)","en-US":"инглизча (Америка)"},"narrow":{}},"region":{"long":{"142":"Осиё","143":"Марказий Осиё","145":"Ғарбий Осиё","150":"Европа","151":"Шарқий Европа","154":"Шимолий Европа","155":"Ғарбий Европа","202":"202","419":"Лотин Америкаси","001":"Дунё","002":"Африка","003":"Шимолий Америка","005":"Жанубий Америка","009":"Океания","011":"Ғарбий Африка","013":"Марказий Америка","014":"Шарқий Африка","015":"Шимолий Африка","017":"Марказий Африка","018":"Жануби-Африка","019":"Америка","021":"Шимоли-Америка","029":"Кариб ҳавзаси","030":"Шарқий Осиё","034":"Жанубий Осиё","035":"Жанубий-Шарқий Осиё","039":"Жанубий Европа","053":"Австралазия","054":"Меланезия","057":"Микронезия минтақаси","061":"Полинезия","AC":"Меърож ороли","AD":"Андорра","AE":"Бирлашган Араб Амирликлари","AF":"Афғонистон","AG":"Антигуа ва Барбуда","AI":"Ангилья","AL":"Албания","AM":"Арманистон","AO":"Ангола","AQ":"Антарктида","AR":"Аргентина","AS":"Америка Самоаси","AT":"Австрия","AU":"Австралия","AW":"Аруба","AX":"Аланд ороллари","AZ":"Озарбайжон","BA":"Босния ва Герцеговина","BB":"Барбадос","BD":"Бангладеш","BE":"Бельгия","BF":"Буркина-Фасо","BG":"Болгария","BH":"Баҳрайн","BI":"Бурунди","BJ":"Бенин","BL":"Сен-Бартелеми","BM":"Бермуда","BN":"Бруней","BO":"Боливия","BQ":"Бонейр, Синт-Эстатиус ва Саба","BR":"Бразилия","BS":"Багама ороллари","BT":"Бутан","BV":"Буве ороли","BW":"Ботсванна","BY":"Беларус","BZ":"Белиз","CA":"Канада","CC":"Кокос (Килинг) ороллари","CD":"Конго-Киншаса","CF":"Марказий Африка Республикаси","CG":"Конго Браззавиль","CH":"Швейцария","CI":"Кот-д’Ивуар","CK":"Кук ороллари","CL":"Чили","CM":"Камерун","CN":"Хитой","CO":"Колумбия","CP":"Клиппертон ороли","CR":"Коста-Рика","CU":"Куба","CV":"Кабо-Верде","CW":"Кюрасао","CX":"Рождество ороли","CY":"Кипр","CZ":"Чехия","DE":"Германия","DG":"Диего-Гарсия","DJ":"Жибути","DK":"Дания","DM":"Доминика","DO":"Доминикан Республикаси","DZ":"Жазоир","EA":"Сэута ва Мелилла","EC":"Эквадор","EE":"Эстония","EG":"Миср","EH":"Ғарбий Саҳрои Кабир","ER":"Эритрея","ES":"Испания","ET":"Эфиопия","EU":"Европа Иттифоқи","EZ":"EZ","FI":"Финляндия","FJ":"Фижи","FK":"Фолкленд ороллари","FM":"Микронезия","FO":"Фарер ороллари","FR":"Франция","GA":"Габон","GB":"Буюк Британия","GD":"Гренада","GE":"Грузия","GF":"Француз Гвианаси","GG":"Гернси","GH":"Гана","GI":"Гибралтар","GL":"Гренландия","GM":"Гамбия","GN":"Гвинея","GP":"Гваделупе","GQ":"Экваториал Гвинея","GR":"Греция","GS":"Жанубий Георгия ва Жанубий Сендвич ороллари","GT":"Гватемала","GU":"Гуам","GW":"Гвинея-Бисау","GY":"Гаяна","HK":"Гонконг (Хитой ММҲ)","HM":"Херд ва Макдоналд ороллари","HN":"Гондурас","HR":"Хорватия","HT":"Гаити","HU":"Венгрия","IC":"Канар ороллари","ID":"Индонезия","IE":"Ирландия","IL":"Исроил","IM":"Мэн ороли","IN":"Ҳиндистон","IO":"Британиянинг Ҳинд океанидаги ҳудуди","IQ":"Ироқ","IR":"Эрон","IS":"Исландия","IT":"Италия","JE":"Жерси","JM":"Ямайка","JO":"Иордания","JP":"Япония","KE":"Кения","KG":"Қирғизистон","KH":"Камбоджа","KI":"Кирибати","KM":"Комор ороллари","KN":"Сент-Китс ва Невис","KP":"Шимолий Корея","KR":"Жанубий Корея","KW":"Қувайт","KY":"Кайман ороллари","KZ":"Қозоғистон","LA":"Лаос","LB":"Ливан","LC":"Сент-Люсия","LI":"Лихтенштейн","LK":"Шри-Ланка","LR":"Либерия","LS":"Лесото","LT":"Литва","LU":"Люксембург","LV":"Латвия","LY":"Ливия","MA":"Марокаш","MC":"Монако","MD":"Молдова","ME":"Черногория","MF":"Сент-Мартин","MG":"Мадагаскар","MH":"Маршал ороллари","MK":"Шимолий Македония","ML":"Мали","MM":"Мьянма (Бирма)","MN":"Монголия","MO":"Макао (Хитой ММҲ)","MP":"Шимолий Марианна ороллари","MQ":"Мартиника","MR":"Мавритания","MS":"Монтсеррат","MT":"Мальта","MU":"Маврикий","MV":"Мальдив ороллари","MW":"Малави","MX":"Мексика","MY":"Малайзия","MZ":"Мозамбик","NA":"Намибия","NC":"Янги Каледония","NE":"Нигер","NF":"Норфолк ороллари","NG":"Нигерия","NI":"Никарагуа","NL":"Нидерландия","NO":"Норвегия","NP":"Непал","NR":"Науру","NU":"Ниуэ","NZ":"Янги Зеландия","OM":"Уммон","PA":"Панама","PE":"Перу","PF":"Француз Полинезияси","PG":"Папуа - Янги Гвинея","PH":"Филиппин","PK":"Покистон","PL":"Польша","PM":"Сент-Пьер ва Микелон","PN":"Питкэрн ороллари","PR":"Пуэрто-Рико","PS":"Фаластин ҳудуди","PT":"Португалия","PW":"Палау","PY":"Парагвай","QA":"Қатар","QO":"Ёндош Океания","RE":"Реюнион","RO":"Руминия","RS":"Сербия","RU":"Россия","RW":"Руанда","SA":"Саудия Арабистони","SB":"Соломон ороллари","SC":"Сейшел ороллари","SD":"Судан","SE":"Швеция","SG":"Сингапур","SH":"Муқаддас Елена ороли","SI":"Словения","SJ":"Свалбард ва Ян-Майен","SK":"Словакия","SL":"Сьерра-Леоне","SM":"Сан-Марино","SN":"Сенегал","SO":"Сомали","SR":"Суринам","SS":"Жанубий Судан","ST":"Сан-Томе ва Принсипи","SV":"Салвадор","SX":"Синт-Мартен","SY":"Сурия","SZ":"Свазиленд","TA":"Тристан-да-Куня","TC":"Туркс ва Кайкос ороллари","TD":"Чад","TF":"Француз жанубий ҳудудлари","TG":"Того","TH":"Таиланд","TJ":"Тожикистон","TK":"Токелау","TL":"Тимор-Лесте","TM":"Туркманистон","TN":"Тунис","TO":"Тонга","TR":"Туркия","TT":"Тринидад ва Тобаго","TV":"Тувалу","TW":"Тайван","TZ":"Танзания","UA":"Украина","UG":"Уганда","UM":"АҚШ ёндош ороллари","UN":"UN","US":"Америка Қўшма Штатлари","UY":"Уругвай","UZ":"Ўзбекистон","VA":"Ватикан","VC":"Сент-Винсент ва Гренадин","VE":"Венесуэла","VG":"Британия Виргин ороллари","VI":"АҚШ Виргин ороллари","VN":"Вьетнам","VU":"Вануату","WF":"Уоллис ва Футуна","WS":"Самоа","XA":"XA","XB":"XB","XK":"Косово","YE":"Яман","YT":"Майотта","ZA":"Жанубий Африка Республикаси","ZM":"Замбия","ZW":"Зимбабве","ZZ":"Номаълум минтақа"},"short":{"GB":"Буюк Британия","HK":"Гонконг","MO":"Макао","PS":"Фаластин","US":"АҚШ"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Араб","Aran":"Aran","Armi":"Armi","Armn":"Арман","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Бенгали","Bhks":"Bhks","Bopo":"Бопомофо","Brah":"Brah","Brai":"Браилле","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Кирил","Deva":"Девангари","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ҳабаш","Geor":"Грузин","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Юнон","Gujr":"Гужарати","Guru":"Гурмухи","Hanb":"Hanb","Hang":"Хангул","Hani":"Хан","Hano":"Hano","Hans":"Соддалаштирилган","Hant":"Анъанавий","Hatr":"Hatr","Hebr":"Иброний","Hira":"Хирагана","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Япон","Kali":"Kali","Kana":"Катакана","Khar":"Khar","Khmr":"Хмер","Khoj":"Khoj","Kits":"Kits","Knda":"Каннада","Kore":"Корейс","Kthi":"Kthi","Lana":"Lana","Laoo":"Лао","Latn":"Лотин","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Малайалам","Modi":"Modi","Mong":"Мўғулча","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Мьянма","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Ория","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Синхала","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Тамил","Tang":"Tang","Tavt":"Tavt","Telu":"Телугу","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Таана","Thai":"Тай","Tibt":"Тибет","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Рамзлар","Zxxx":"Ёзилмаган","Zyyy":"Умумий","Zzzz":"Номаълум шрифт"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"AED","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"Голланд Антил гульдени","AOA":"AOA","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"Аргентина песоси","ATS":"ATS","AUD":"AUD","AWG":"Аруба флорини","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"Барбадос доллари","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"BHD","BIF":"BIF","BMD":"Бермуда доллари","BND":"BND","BOB":"Боливия болвиани","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"Бразил реали","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"Багама доллари","BTN":"BTN","BUK":"BUK","BWP":"BWP","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"Белиз доллари","CAD":"Канада доллари","CDF":"CDF","CHE":"CHE","CHF":"CHF","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"Чили песоси","CNH":"CNH","CNX":"CNX","CNY":"Хитой юани","COP":"Колумбия песоси","COU":"COU","CRC":"Коста-Рика колони","CSD":"CSD","CSK":"CSK","CUC":"Куба Айирбошлаш песоси","CUP":"Куба песоси","CVE":"CVE","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"DJF","DKK":"DKK","DOP":"Доминикан песоси","DZD":"Жазоир динори","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"Миср фунти","ERN":"ERN","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ETB","EUR":"Евро","FIM":"FIM","FJD":"FJD","FKP":"Фолькленд ороли фунти","FRF":"FRF","GBP":"Инглиз фунт","GEK":"GEK","GEL":"GEL","GHC":"GHC","GHS":"GHS","GIP":"GIP","GMD":"GMD","GNF":"GNF","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"Гватемала кветзали","GWE":"GWE","GWP":"GWP","GYD":"Гаяна доллари","HKD":"HKD","HNL":"Гондурас лемпираси","HRD":"HRD","HRK":"HRK","HTG":"Гаити гурдаси","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"Ҳинд рупияси","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"Ямайка доллари","JOD":"JOD","JPY":"Япон йенаси","KES":"KES","KGS":"KGS","KHR":"KHR","KMF":"KMF","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"Кайман ороли Доллари","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"LRD","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"Ливия динори","MAD":"Марокаш дирҳами","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"MGA","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"MRO","MRU":"MRU","MTL":"MTL","MTP":"MTP","MUR":"MUR","MVP":"MVP","MVR":"MVR","MWK":"MWK","MXN":"Мексика песоси","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"MZM","MZN":"MZN","NAD":"NAD","NGN":"NGN","NIC":"NIC","NIO":"Никарагуа кордобаси","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"Панама бальбоаси","PEI":"PEI","PEN":"Перу сол","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"Парагвай гуарани","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"Рус рубли","RUR":"RUR","RWF":"RWF","SAR":"SAR","SBD":"SBD","SCR":"SCR","SDD":"SDD","SDG":"SDG","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"SHP","SIT":"SIT","SKK":"SKK","SLL":"SLL","SOS":"SOS","SRD":"Суринам доллари","SRG":"SRG","SSP":"SSP","STD":"STD","STN":"STN","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"SZL","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"TND","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"Тринидад ва Тобаго доллари","TWD":"TWD","TZS":"TZS","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"UGX","USD":"АҚШ доллари","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"Уругвай песоси","UYW":"UYW","UZS":"Ўзбекистон сўм","VEB":"VEB","VEF":"Венесуэла боливари (2008–2018)","VES":"Венесуэла боливари","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"Шарқий Кариб доллари","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"XOF","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ZAR","ZMK":"ZMK","ZMW":"ZMW","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"uz-Cyrl"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
