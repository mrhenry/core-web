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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("my").length
)) {
// Intl.DisplayNames.~locale.my
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"my":{"types":{"language":{"long":{"aa":"အာဖာ","ab":"အဘ်ခါဇီရာ","ace":"အာချေး","ada":"ဒန်မဲ","ady":"အဒိုင်ဂီ","af":"တောင်အာဖရိက","agq":"အာဂ်ဟိန်း","ain":"အိန်နု","ak":"အာကန်","ale":"အာလီယု","alt":"တောင် အာလ်တိုင်း","am":"အမ်ဟာရစ်ခ်","an":"အာရာဂွန်","ang":"အင်ဂလို ဆက္ကစွန်","anp":"အန်ဂီကာ","ar":"အာရဗီ","ar-001":"ခေတ်သစ် ရှေ့ဆောင် အာရဗီ","arn":"မာပုချီ","arp":"အာရာပါဟို","as":"အာသံ","asa":"အာစု","ast":"အက်စတူရီယန်း","av":"အာဗာရစ်ခ်","awa":"အာဝါဒီ","ay":"အိုင်မာရ","az":"အဇာဘိုင်ဂျန်","ba":"ဘက်ရှ်ကာ","ban":"ဘာလီ","bas":"ဘာဆာ","be":"ဘီလာရုစ်","bem":"ဘိန်ဘာ","bez":"ဘီနာ","bg":"ဘူလ်ဂေးရီးယား","bgn":"အနောက် ဘဲလိုချီ","bho":"ဘို့ဂျ်ပူရီ","bi":"ဘစ်စ်လာမာ","bin":"ဘီနီ","bla":"စစ္စီကာ","bm":"ဘန်ဘာရာ","bn":"ဘင်္ဂါလီ","bo":"တိဘက်","br":"ဘရီတွန်","brx":"ဗိုဒို","bs":"ဘော့စ်နီးယား","bug":"ဘူဂစ်စ်","byn":"ဘလင်","ca":"ကတ်တလန်","ccp":"ချတ်ခ်မာ","ce":"ချက်ချန်း","ceb":"စီဗူအာနို","cgg":"ချီဂါ","ch":"ချမိုရို","chk":"ချူကီးစ်","chm":"မာရီ","cho":"ချော့တို","chr":"ချာရိုကီ","chy":"ချေယန်း","ckb":"ဆိုရာနီ","co":"ခိုစီကန်","cr":"ခရီး","crs":"ခရီအိုလီ","cs":"ချက်","cu":"ချပ်ချ် စလာဗစ်","cv":"ချူဗက်ရှ်","cy":"ဝေလ","da":"ဒိန်းမတ်","dak":"ဒါကိုတာ","dar":"ဒါဂ်ဝါ","dav":"တိုင်တာ","de":"ဂျာမန်","de-AT":"ဩစတြီးယား ဂျာမန်","de-CH":"အလီမဲန်နစ် ဂျာမန်","del":"ဒယ်လာဝဲလ်","dgr":"ဒေါ့ဂ်ရစ်ဘ်","dje":"ဇာမာ","dsb":"အနိမ့် ဆိုဘီယန်း","dua":"ဒူအလာ","dum":"အလယ်ပိုင်း ဒတ်ချ်","dv":"ဒီဗာဟီ","dyo":"ဂျိုလာ-ဖွန်ရီ","dz":"ဒဇွန်ကာ","dzg":"ဒဇာဂါ","ebu":"အမ်ဘူ","ee":"အီဝီ","efi":"အာဖိခ်","egy":"ရှေးဟောင်း အီဂျစ်","eka":"အီကာဂျုခ်","el":"ဂရိ","en":"အင်္ဂလိပ်","en-AU":"ဩစတြေးလျှ အင်္ဂလိပ်","en-CA":"ကနေဒါ အင်္ဂလိပ်","en-GB":"ဗြိတိသျှ အင်္ဂလိပ်","en-US":"အမေရိကန် အင်္ဂလိပ်","enm":"အလယ်ပိုင်း အင်္ဂလိပ်","eo":"အက်စ်ပရန်တို","es":"စပိန်","es-419":"စပိန် (လက်တင်အမေရိက)","es-ES":"စပိန် (ဥရောပ)","es-MX":"စပိန် (မက္ကဆီကို)","et":"အက်စ်တိုးနီးယား","eu":"ဘာစ်ခ်","ewo":"အီဝန်ဒို","fa":"ပါရှန်","fa-AF":"ဒါရီ","ff":"ဖူလာ","fi":"ဖင်လန်","fil":"ဖိလစ်ပိုင်","fj":"ဖီဂျီ","fo":"ဖာရို","fon":"ဖော်န်","fr":"ပြင်သစ်","fr-CA":"ကနေဒါ ပြင်သစ်","fr-CH":"ဆွစ် ပြင်သစ်","frc":"frc","frm":"အလယ်ပိုင်း ပြင်သစ်","fro":"ဖရန်စီစ်","frr":"မြောက် ဖရီစီရန်","frs":"အရှေ့ ဖရီစီရန်","fur":"ဖရူလီယန်း","fy":"အနောက် ဖရီစီရန်","ga":"အိုင်းရစ်ရှ်","gaa":"ဂါ","gag":"ဂါဂုဇ်","gd":"စကော့တစ်ရှ် ဂေးလစ်ခ်","gez":"ဂီးဇ်","gil":"ကာရီဗာတီ","gl":"ဂါလီစီယာ","gmh":"အလယ်ပိုင်း အမြင့် ဂျာမန်","gn":"ဂူအာရာနီ","gor":"ဂိုရိုတာလို","grc":"ရှေးဟောင်း ဂရိ","gsw":"ဆွစ် ဂျာမန်","gu":"ဂူဂျာရသီ","guz":"ဂူစီး","gv":"မန်းဇ်","gwi":"ဂွစ်ချင်","ha":"ဟာဥစာ","haw":"ဟာဝိုင်ယီ","he":"ဟီးဘရူး","hi":"ဟိန်ဒူ","hil":"ဟီလီဂေနွန်","hmn":"မုံ","hr":"ခရိုအေးရှား","hsb":"ဆက္ကဆိုနီ","ht":"ဟေတီ","hu":"ဟန်ဂေရီ","hup":"ဟူပါ","hy":"အာမေးနီးယား","hz":"ဟီရဲရို","ia":"အင်တာလင်ဂွါ","iba":"အီဗန်","ibb":"အီဘီဘီယို","id":"အင်ဒိုနီးရှား","ig":"အစ္ဂဘို","ii":"စီချွမ် ရီ","ilo":"အီလိုကို","inh":"အင်ဂုရှ်","io":"အီဒို","is":"အိုက်စ်လန်","it":"အီတလီ","iu":"အီနုခ်တီတု","ja":"ဂျပန်","jbo":"လိုဂျ်ဘန်","jgo":"ဂွမ်ဘာ","jmc":"မချာမီ","jpr":"ဂျူဒီယို-ပါရှန်","jrb":"ဂျူဒီယို-အာရဗီ","jv":"ဂျာဗား","ka":"ဂျော်ဂျီယာ","kab":"ကဘိုင်လ်","kac":"ကချင်","kaj":"ဂျူအူ","kam":"ကမ်ဘာ","kbd":"ကဘာဒင်","kcg":"တိုင်အပ်","kde":"မာခွန်ဒီ","kea":"ကဘူဗာဒီအာနူ","kfo":"ကိုရို","kg":"ကွန်ဂို","kha":"ခါစီ","khq":"ကိုရာ ချီအီနီ","ki":"ကီကူယူ","kj":"ကွန်းယာမာ","kk":"ကာဇာချ","kkj":"ကကို","kl":"ကလာအ်လီဆပ်","kln":"ကလန်ဂျင်","km":"ခမာ","kmb":"ကင်ဘွန်ဒူ","kn":"ကန်နာဒါ","ko":"ကိုရီးယား","koi":"ကိုမီ-ပါမြက်","kok":"ကွန်ကနီ","kpe":"ကပ်ပဲလ်","kr":"ကနူရီ","krc":"ကရာချေး-ဘာကာ","krl":"ကာရီလီယန်","kru":"ကူရုပ်ခ်","ks":"ကက်ရှ်မီးယား","ksb":"ရှန်ဘာလာ","ksf":"ဘာဖီအာ","ksh":"ကိုလိုနီယန်း","ku":"ကဒ်","kum":"ကွမ်မိုက်","kv":"ကိုမီ","kw":"ခိုနီရှ်","ky":"ကာဂျစ်","la":"လက်တင်","lad":"လာဒီနို","lag":"လန်ဂီ","lb":"လူဇင်ဘတ်","lez":"လက်ဇ်ဂီးယား","lg":"ဂန်ဒါ","li":"လင်ဘာဂစ်ရှ်","lkt":"လာကိုတာ","ln":"လင်ဂါလာ","lo":"လာအို","lou":"lou","loz":"လိုဇီ","lrc":"မြောက်လူရီ","lt":"လစ်သူဝေးနီးယား","lu":"လူဘာ-ကတန်ဂါ","lua":"လူဘာ-လူလူအာ","lun":"လွန်ဒါ","luo":"လူအို","lus":"မီဇို","luy":"လူရီအာ","lv":"လတ်ဗီးယား","mad":"မဒူရာ","mag":"မဂါဟီ","mai":"မိုင်သီလီ","mak":"မကာဆာ","mas":"မာဆိုင်","mdf":"မို့ခ်ရှာ","men":"မန်ဒဲ","mer":"မီရု","mfe":"မောရစ်ရှ","mg":"မာလဂက်စီ","mga":"အလယ်ပိုင်း အိုင်းရစ်ရှ်","mgh":"မာခူဝါ-မီအီတို","mgo":"မီတာ","mh":"မာရှယ်လိဇ်","mi":"မာအိုရီ","mic":"မစ်ခ်မက်ခ်","min":"စူကူမီနန်","mk":"မက်ဆီဒိုးနီးယား","ml":"မလေယာလမ်","mn":"မွန်ဂိုလီးယား","mnc":"မန်ချူး","mni":"မနိပူရ","moh":"မိုဟော့ခ်","mos":"မိုစီ","mr":"မာရသီ","ms":"မလေး","mt":"မော်လ်တာ","mua":"မွန်ဒန်း","mul":"ဘာသာစကား အမျိုးမျိုး","mus":"ခရိချ","mwl":"မီရန်ဒီးဇ်","my":"မြန်မာ","myv":"အီဇယာ","mzn":"မာဇန်ဒါရန်နီ","na":"နော်ရူး","nap":"နပိုလီတန်","naq":"နာမာ","nb":"နော်ဝေ ဘွတ်ခ်မော်လ်","nd":"မြောက် အွန်န်ဒီဘီလီ","nds":"အနိမ့် ဂျာမန်","nds-NL":"ဂျာမန် (နယ်သာလန်)","ne":"နီပေါ","new":"နီဝါရီ","ng":"အွန်ဒွန်ဂါ","nia":"နီးရပ်စ်","niu":"နူအဲယန်း","nl":"ဒတ်ခ်ျ","nl-BE":"ဖလီမစ်ရှ်","nmg":"ကွာစီအို","nn":"နော်ဝေ နီးနောစ်","nnh":"အွန်ရဲဘွန်း","no":"နော်ဝေး","nog":"နိုဂိုင်","nqo":"အွန်ကို","nr":"တောင် အွန်န်ဘီလီ","nso":"မြောက် ဆိုသို","nus":"နူအာ","nv":"နာဗာဟို","ny":"နရန်ဂျာ","nyn":"နရန်ကိုလီ","oc":"အိုစီတန်","om":"အိုရိုမို","or":"အိုရီရာ","os":"အိုဆဲတစ်ခ်","pa":"ပန်ချာပီ","pag":"ပန်ဂါစီနန်","pam":"ပမ်ပန်ညာ","pap":"ပါပီမင်တို","pau":"ပလာအို","pcm":"နိုင်ဂျီးရီးယား ပစ်ဂျင်","peo":"ပါရှန် အဟောင်း","pi":"ပါဠိ","pl":"ပိုလန်","prg":"ပရူရှန်","ps":"ပက်ရှ်တွန်း","pt":"ပေါ်တူဂီ","pt-BR":"ဘရာဇီး ပေါ်တူဂီ","pt-PT":"ဥရောပ ပေါ်တူဂီ","qu":"ခီချူဝါအိုဝါ","quc":"ကီခ်အီချီ","rap":"ရပန်နူအီ","rar":"ရရိုတွန်ဂန်","rm":"ရောမ","rn":"ရွန်ဒီ","ro":"ရိုမေနီယား","ro-MD":"မော်လဒိုဗာ","rof":"ရွမ်ဘို","root":"မူလရင်းမြစ်","ru":"ရုရှ","rup":"အာရိုမန်းနီးယန်း","rw":"ကင်ရာဝန်ဒါ","rwk":"ရူဝမ်","sa":"သင်္သကရိုက်","sad":"ဆန်ဒါဝီ","sah":"ဆခါ","saq":"ဆမ်ဘူရူ","sat":"ဆန်တာလီ","sba":"အွန်ဂမ်းဘေး","sbp":"ဆန်ဂု","sc":"ဆာဒီနီးယား","scn":"စစ္စလီ","sco":"စကော့တ်","sd":"စင်ဒီ","se":"မြောက် ဆာမိ","seh":"စီနာ","ses":"ကိုရာဘိုရို ဆမ်နီ","sg":"ဆန်ဂို","sga":"အိုင်းရစ် ဟောင်း","shi":"တာချယ်လ်ဟစ်","shn":"ရှမ်း","si":"စင်ဟာလာ","sk":"ဆလိုဗက်","sl":"ဆလိုဗေးနီးယား","sm":"ဆမိုအာ","sma":"တောင် ဆာမိ","smj":"လူလီ ဆာမိ","smn":"အီနာရီ ဆာမိ","sms":"စခိုးလ် ဆာမိ","sn":"ရှိုနာ","snk":"ဆိုနင်ကေး","so":"ဆိုမာလီ","sq":"အယ်လ်ဘေးနီးယား","sr":"ဆားဘီးယား","srn":"ဆရာနန် တွန်ဂို","ss":"ဆွာဇီလန်","ssy":"ဆာဟို","st":"တောင်ပိုင်း ဆိုသို","su":"ဆူဒန်","suk":"ဆူကူမာ","sv":"ဆွီဒင်","sw":"ဆွာဟီလီ","sw-CD":"ကွန်ဂို ဆွာဟီလီ","swb":"ကိုမိုရီးယန်း","syr":"ဆီးရီးယား","ta":"တမီးလ်","te":"တီလီဂူ","tem":"တင်မ်နဲ","teo":"တီဆို","tet":"တီတွမ်","tg":"တာဂျစ်","th":"ထိုင်း","ti":"တီဂ်ရင်ယာ","tig":"တီဂရီ","tk":"တာ့ခ်မင်နစ္စတန်","tlh":"ကလင်ဂွန်","tn":"တီဆဝါနာ","to":"တွန်ဂါ","tpi":"တော့ခ် ပိစင်","tr":"တူရကီ","trv":"တရိုကို","ts":"ဆွန်ဂါ","tt":"တာတာ","tum":"တမ်ဘူကာ","tvl":"တူဗာလူ","twq":"တာဆာဝါချ","ty":"တဟီတီ","tyv":"တူဗန်","tzm":"အလယ်အာ့တလာစ် တာမာဇိုက်","udm":"အူမူရတ်","ug":"ဝီဂါ","uk":"ယူကရိန်း","umb":"အူဘန်ဒူ","und":"မသိသော ဘာသာ","ur":"အူရ်ဒူ","uz":"ဥဇဘတ်","vai":"ဗိုင်","ve":"ဗင်န်ဒါ","vi":"ဗီယက်နမ်","vo":"ဗိုလာပိုက်","vun":"ဗွန်ဂျို","wa":"ဝါလူးန်","wae":"ဝေါလ်ဆာ","wal":"ဝိုလက်တာ","war":"ဝါရေး","wbp":"ဝေါလ်ပီရီ","wo":"ဝူလိုဖ်","xal":"ကာလ်မိုက်","xh":"ဇိုစာ","xog":"ဆိုဂါ","yav":"ရန်ဘဲန်","ybb":"ရမ်ဘာ","yi":"ဂျူး","yo":"ယိုရူဘာ","yue":"ကွမ်တုံ","zgh":"မိုရိုကို တမဇိုက်","zh":"တရုတ်","zh-Hans":"တရုတ် (ရိုးရှင်း)","zh-Hant":"တရုတ် (ရိုးရာ)","zu":"ဇူးလူး","zun":"ဇူနီ","zxx":"ဘာသာစကားနှင့် ပတ်သက်သောအရာ မရှိပါ","zza":"ဇာဇာ"},"short":{"az":"အဇာရီ","en-GB":"ယူကေ အင်္ဂလိပ်","en-US":"ယူအက်စ် အင်္ဂလိပ်"},"narrow":{}},"region":{"long":{"142":"အာရှ","143":"အလယ်အာရှ","145":"အနောက်အာရှ","150":"ဥရောပ","151":"အရှေ့ ဥရောပ","154":"မြောက် ဥရောပ","155":"အနောက် ဥရောပ","202":"ဆာဟာရ-အောက်ပိုင်း အာဖရိက","419":"လက်တင်အမေရိက","001":"ကမ္ဘာ","002":"အာဖရိက","003":"မြောက် အမေရိကတိုက်","005":"တောင် အမေရိက","009":"သမုဒ္ဒရာဒေသ","011":"အနောက် အာဖရိက","013":"ဗဟို အမေရိက","014":"အရှေ့ အာဖရိက","015":"မြောက် အာဖရိက","017":"အလယ် အာဖရိက","018":"အာဖရိက တောင်ပိုင်း","019":"အမေရိကန်","021":"မြောက် အမေရိက","029":"ကာရစ်ဘီယံ","030":"အရှေ့အာရှ","034":"တောင်အာရှ","035":"အရှေ့တောင်အာရှ","039":"တောင်ဥရောပ","053":"ဩစတြေးလျနှင့် နယူးဇီလန်","054":"မီလာနီးရှား","057":"မိုက်ခရိုနီးရှား ဒေသ","061":"ပိုလီနီရှား","AC":"အဆန်းရှင်းကျွန်း","AD":"အန်ဒိုရာ","AE":"ယူအေအီး","AF":"အာဖဂန်နစ္စတန်","AG":"အန်တီဂွါနှင့် ဘာဘူဒါ","AI":"အန်ဂီလာ","AL":"အယ်လ်ဘေးနီးယား","AM":"အာမေးနီးယား","AO":"အန်ဂိုလာ","AQ":"အန်တာတိက","AR":"အာဂျင်တီးနား","AS":"အမေရိကန် ဆမိုးအား","AT":"ဩစတြီးယား","AU":"ဩစတြေးလျ","AW":"အာရူးဗား","AX":"အာလန်ကျွန်း","AZ":"အဇာဘိုင်ဂျန်","BA":"ဘော့စနီးယားနှင့် ဟာဇီဂိုဗီနား","BB":"ဘာဘေးဒိုးစ်","BD":"ဘင်္ဂလားဒေ့ရှ်","BE":"ဘယ်လ်ဂျီယမ်","BF":"ဘာကီးနား ဖားဆို","BG":"ဘူလ်ဂေးရီးယား","BH":"ဘာရိန်း","BI":"ဘူရွန်ဒီ","BJ":"ဘီနင်","BL":"စိန့်ဘာသယ်လ်မီ","BM":"ဘာမြူဒါ","BN":"ဘရူနိုင်း","BO":"ဘိုလီးဗီးယား","BQ":"ကာရစ်ဘီယံ နယ်သာလန်","BR":"ဘရာဇီး","BS":"ဘဟားမား","BT":"ဘူတန်","BV":"ဘူဗက်ကျွန်း","BW":"ဘော့ဆွာနာ","BY":"ဘီလာရုစ်","BZ":"ဘလိဇ်","CA":"ကနေဒါ","CC":"ကိုကိုးကျွန်း","CD":"ကွန်ဂို","CF":"ဗဟို အာဖရိက ပြည်ထောင်စု","CG":"ကွန်ဂို-ဘရာဇာဗီးလ်","CH":"ဆွစ်ဇာလန်","CI":"ကို့တ် ဒီဗွာ","CK":"ကွတ် ကျွန်းစု","CL":"ချီလီ","CM":"ကင်မရွန်း","CN":"တရုတ်","CO":"ကိုလံဘီယာ","CP":"ကလစ်ပါတန်ကျွန်း","CR":"ကို့စ်တာရီကာ","CU":"ကျူးဘား","CV":"ကိတ်ဗာဒီ","CW":"ကျူရေးကိုးစ်","CX":"ခရစ်စမတ် ကျွန်း","CY":"ဆိုက်ပရပ်စ်","CZ":"ချက်ကီယား","DE":"ဂျာမနီ","DG":"ဒီအဲဂိုဂါစီရာ","DJ":"ဂျီဘူတီ","DK":"ဒိန်းမတ်","DM":"ဒိုမီနီကာ","DO":"ဒိုမီနီကန်","DZ":"အယ်လ်ဂျီးရီးယား","EA":"ဆယ်ဥတာနှင့်မယ်လီလ်လာ","EC":"အီကွေဒေါ","EE":"အက်စတိုးနီးယား","EG":"အီဂျစ်","EH":"အနောက် ဆာဟာရ","ER":"အီရီထရီးယား","ES":"စပိန်","ET":"အီသီယိုးပီးယား","EU":"ဥရောပသမဂ္ဂ","EZ":"ဥရောပဒေသ","FI":"ဖင်လန်","FJ":"ဖီဂျီ","FK":"ဖော့ကလန် ကျွန်းစု","FM":"မိုင်ခရိုနီရှား","FO":"ဖာရိုး ကျွန်းစုများ","FR":"ပြင်သစ်","GA":"ဂါဘွန်","GB":"ယူနိုက်တက်ကင်းဒမ်း","GD":"ဂရီနေဒါ","GE":"ဂျော်ဂျီယာ","GF":"ပြင်သစ် ဂီယာနာ","GG":"ဂွန်းဇီ","GH":"ဂါနာ","GI":"ဂျီဘရော်လ်တာ","GL":"ဂရင်းလန်း","GM":"ဂမ်ဘီရာ","GN":"ဂီနီ","GP":"ဂွါဒီလု","GQ":"အီကွေတာ ဂီနီ","GR":"ဂရိ","GS":"တောင် ဂျော်ဂျီယာ နှင့် တောင် ဆင်းဒဝစ်ဂျ် ကျွန်းစုများ","GT":"ဂွါတီမာလာ","GU":"ဂူအမ်","GW":"ဂီနီ-ဘီစော","GY":"ဂိုင်ယာနာ","HK":"ဟောင်ကောင် (တရုတ်ပြည်)","HM":"ဟတ်ကျွန်းနှင့်မက်ဒေါနယ်ကျွန်းစု","HN":"ဟွန်ဒူးရပ်စ်","HR":"ခရိုအေးရှား","HT":"ဟေတီ","HU":"ဟန်ဂေရီ","IC":"ကနေရီ ကျွန်းစု","ID":"အင်ဒိုနီးရှား","IE":"အိုင်ယာလန်","IL":"အစ္စရေး","IM":"မန်ကျွန်း","IN":"အိန္ဒိယ","IO":"ဗြိတိသျှပိုင် အိန္ဒိယသမုဒ္ဒရာကျွန်းများ","IQ":"အီရတ်","IR":"အီရန်","IS":"အိုက်စလန်","IT":"အီတလီ","JE":"ဂျာစီ","JM":"ဂျမေကာ","JO":"ဂျော်ဒန်","JP":"ဂျပန်","KE":"ကင်ညာ","KG":"ကာဂျစ္စတန်","KH":"ကမ္ဘောဒီးယား","KI":"ခီရီဘာတီ","KM":"ကိုမိုရိုစ်","KN":"စိန့်ကစ်နှင့်နီဗီစ်","KP":"မြောက်ကိုရီးယား","KR":"တောင်ကိုရီးယား","KW":"ကူဝိတ်","KY":"ကေမန် ကျွန်းစု","KZ":"ကာဇက်စတန်","LA":"လာအို","LB":"လက်ဘနွန်","LC":"စိန့်လူစီယာ","LI":"လစ်တန်စတိန်း","LK":"သီရိလင်္ကာ","LR":"လိုက်ဘေးရီးယား","LS":"လီဆိုသို","LT":"လစ်သူယေးနီးယား","LU":"လူဇင်ဘတ်","LV":"လတ်ဗီးယား","LY":"လစ်ဗျား","MA":"မော်ရိုကို","MC":"မိုနာကို","MD":"မောလ်ဒိုဗာ","ME":"မွန်တီနိဂရိုး","MF":"စိန့်မာတင်","MG":"မဒါဂတ်စကား","MH":"မာရှယ် ကျွန်းစု","MK":"မြောက် မက်ဆီဒိုးနီးယား","ML":"မာလီ","MM":"မြန်မာ","MN":"မွန်ဂိုးလီးယား","MO":"မကာအို (တရုတ်ပြည်)","MP":"မြောက်ပိုင်းမာရီအာနာကျွန်းစု","MQ":"မာတီနိခ်","MR":"မော်ရီတေးနီးယား","MS":"မောင့်စဲရက်","MT":"မောလ်တာ","MU":"မောရစ်ရှ","MV":"မော်လ်ဒိုက်","MW":"မာလာဝီ","MX":"မက်ကဆီကို","MY":"မလေးရှား","MZ":"မိုဇမ်ဘစ်","NA":"နမီးဘီးယား","NC":"နယူး ကယ်လီဒိုနီးယား","NE":"နိုင်ဂျာ","NF":"နောဖုတ်ကျွန်း","NG":"နိုင်ဂျီးရီးယား","NI":"နီကာရာဂွါ","NL":"နယ်သာလန်","NO":"နော်ဝေ","NP":"နီပေါ","NR":"နော်ရူး","NU":"နီဥူအေ","NZ":"နယူးဇီလန်","OM":"အိုမန်","PA":"ပနားမား","PE":"ပီရူး","PF":"ပြင်သစ် ပေါ်လီနီးရှား","PG":"ပါပူအာ နယူးဂီနီ","PH":"ဖိလစ်ပိုင်","PK":"ပါကစ္စတန်","PL":"ပိုလန်","PM":"စိန့်ပီအဲရ်နှင့် မီကွီလွန်","PN":"ပစ်တ်ကိန်းကျွန်းစု","PR":"ပေါ်တိုရီကို","PS":"ပါလက်စတိုင်း ပိုင်နက်","PT":"ပေါ်တူဂီ","PW":"ပလာအို","PY":"ပါရာဂွေး","QA":"ကာတာ","QO":"သမုဒ္ဒရာ အပြင်ဘက်ရှိ ကျွန်းနိုင်ငံများ","RE":"ရီယူနီယန်","RO":"ရိုမေးနီးယား","RS":"ဆားဘီးယား","RU":"ရုရှား","RW":"ရဝန်ဒါ","SA":"ဆော်ဒီအာရေးဘီးယား","SB":"ဆော်လမွန်ကျွန်းစု","SC":"ဆေးရှဲ","SD":"ဆူဒန်","SE":"ဆွီဒင်","SG":"စင်္ကာပူ","SH":"စိန့်ဟယ်လယ်နာ","SI":"ဆလိုဗေးနီးယား","SJ":"စဗိုလ်ဘတ်နှင့်ဂျန်မေရန်","SK":"ဆလိုဗက်ကီးယား","SL":"ဆီယာရာ လီယွန်း","SM":"ဆန်မာရီနို","SN":"ဆီနီဂေါ","SO":"ဆိုမာလီယာ","SR":"ဆူရာနမ်","SS":"တောင် ဆူဒန်","ST":"ဆောင်တူမေးနှင့် ပရင်စီပီ","SV":"အယ်လ်ဆာဗေးဒိုး","SX":"စင့်မာတင်","SY":"ဆီးရီးယား","SZ":"ဆွာဇီလန်","TA":"ထရစ္စတန် ဒါ ကွန်ဟာ","TC":"တခ်စ်နှင့်ကာအီကိုစ်ကျွန်းစု","TD":"ချဒ်","TF":"ပြင်သစ် တောင်ပိုင်း ပိုင်နက်များ","TG":"တိုဂို","TH":"ထိုင်း","TJ":"တာဂျီကစ္စတန်","TK":"တိုကလောင်","TL":"အရှေ့တီမော","TM":"တာ့ခ်မင်နစ္စတန်","TN":"တူနီးရှား","TO":"တွန်ဂါ","TR":"တူရကီ","TT":"ထရီနီဒတ်နှင့် တိုဘက်ဂို","TV":"တူဗားလူ","TW":"ထိုင်ဝမ်","TZ":"တန်ဇန်းနီးယား","UA":"ယူကရိန်း","UG":"ယူဂန်းဒါး","UM":"ယူနိုက်တက်စတိတ် ကျွန်းနိုင်ငံများ","UN":"ကုလသမဂ္ဂ","US":"အမေရိကန် ပြည်ထောင်စု","UY":"ဥရုဂွေး","UZ":"ဥဇဘက်ကစ္စတန်","VA":"ဗာတီကန်စီးတီး","VC":"စိန့်ဗင်းဆင့်နှင့် ဂရိနေဒိုင်","VE":"ဗင်နီဇွဲလား","VG":"ဗြိတိသျှ ဗာဂျင်း ကျွန်းစု","VI":"ယူအက်စ် ဗာဂျင်း ကျွန်းစု","VN":"ဗီယက်နမ်","VU":"ဗနွားတူ","WF":"ဝေါလစ်နှင့် ဖူကျူးနား","WS":"ဆမိုးအား","XA":"နိုင်ငံခြားသံ","XB":"စာပြောင်းပြန်","XK":"ကိုဆိုဗို","YE":"ယီမင်","YT":"မေယော့","ZA":"တောင်အာဖရိက","ZM":"ဇမ်ဘီယာ","ZW":"ဇင်ဘာဘွေ","ZZ":"မသိ (သို့) မရှိသော ဒေသ"},"short":{"GB":"ယူကေ","HK":"ဟောင်ကောင်","MO":"မကာအို","PS":"ပါလက်စတိုင်း","US":"ယူအက်စ်"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"အာရေဗျ","Aran":"Aran","Armi":"Armi","Armn":"အာမေးနီးယား","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"ဘင်္ဂါလီ","Bhks":"Bhks","Bopo":"ဘိုပို","Brah":"ဗွဟ်မမီ","Brai":"ဘရေ","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"စစ်ရိလစ်","Deva":"ဒီဗနာဂရီ","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"အီသီယိုးပီးယား","Geor":"ဂျော်ဂျီယာ","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"ဂရိ","Gujr":"ဂုဂျာရသီ","Guru":"ဂူရူ","Hanb":"ဟန်ဘ်","Hang":"ဟန်ဂူးလ်","Hani":"ဟန်","Hano":"Hano","Hans":"ရိုးရှင်း","Hant":"ရိုးရာ","Hatr":"Hatr","Hebr":"ဟီဗရူး","Hira":"ဟီရဂန","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"ဂျပန် အက္ခရာ","Hung":"Hung","Ital":"Ital","Jamo":"ဂျမို","Java":"ဂျာဗားနီးစ်","Jpan":"ဂျပန်","Kali":"ကယားလီ","Kana":"ခတခန","Khar":"Khar","Khmr":"ခမာ","Khoj":"Khoj","Kits":"Kits","Knda":"ခန်နာဒါ","Kore":"ကိုရီးယား","Kthi":"Kthi","Lana":"Lana","Laoo":"လာအို","Latn":"လက်တင်","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"မလေယာလမ်","Modi":"Modi","Mong":"မွန်ဂိုလီးယား","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"မြန်မာ","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"အိုရာ","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"ဆင်ဟာလ","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"တိုင်လီ","Talu":"Talu","Taml":"တမီးလ်","Tang":"Tang","Tavt":"Tavt","Telu":"တီလု","Tfng":"Tfng","Tglg":"တဂလော့ဂ်","Thaa":"သာအ်","Thai":"ထိုင်း","Tibt":"တိဘက်","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Visp":"မြင်နိုင်သော စကား","Wara":"Wara","Wcho":"Wcho","Xpeo":"ပါရှန် အဟောင်း","Xsux":"Xsux","Yezi":"Yezi","Yiii":"ရီ","Zanb":"Zanb","Zinh":"Zinh","Zmth":"ဂဏန်းသင်္ချာ","Zsye":"အီမိုဂျီ","Zsym":"သင်္ကေတ","Zxxx":"ထုံးတမ်းသဖွယ်လိုက်နာလျက်ရှိသော","Zyyy":"အများနှင့်သက်ဆိုင်သော","Zzzz":"မသိ သို့မဟုတ် မရှိသော စကားလုံး"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"အာရပ်စော်ဘွားများ ပြည်ထောင်စု ဒါဟမ်း","AFA":"AFA","AFN":"အာဖဂန် အာဖဂါနီ","ALK":"ALK","ALL":"အယ်ဘေးနီးယား လီခ်","AMD":"အာမေးနီးယား ဒရမ်","ANG":"နယ်သာလန် အန်တီလန် ဂင်းဒါး","AOA":"အန်ဂိုလာ ကွမ်ဇာ","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"အာဂျင်တီးနား ပီဆို (၁၉၈၃–၁၉၈၅)","ARS":"အာဂျင်တီးနား ပီဆို","ATS":"ATS","AUD":"ဩစတြေးလျ ဒေါ်လာ","AWG":"အရူးဗာ ဖလိုရင်း","AZM":"AZM","AZN":"အဇာဘိုင်ဂျန် မာနတ်","BAD":"BAD","BAM":"ဘော့စနီးယားနှင့် ဟာဇီဂိုဘီးနား ငွေလဲနိုင်သော မတ်က်","BAN":"BAN","BBD":"ဘာဘေးဒီယန်း ဒေါ်လာ","BDT":"ဘင်္ဂလားဒေ့ရှ် တာကာ","BEC":"BEC","BEF":"ဘယ်လ်ဂျီယမ် ဖရန့်","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"ဘူလ်ဂေးရီးယား လက်ဖ်","BGO":"BGO","BHD":"ဘာရိန်း ဒီနား","BIF":"ဘူရွန်ဒီ ဖရန့်","BMD":"ဘာမြူဒါ ဒေါ်လာ","BND":"ဘရူနိုင်း ဒေါ်လာ","BOB":"ဘိုလီးဗီးယား ဘိုလီးဗီယားနို","BOL":"BOL","BOP":"ဘိုလီးဘီးယား ပီဆို","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"ဘရာဇီး ရီးယဲ","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"ဘဟားမား ဒေါ်လာ","BTN":"ဘူတန် အံဂါလ်ထရန်","BUK":"ဗမာ ကျပ်","BWP":"ဘော့ဆွာနာ ပုလ","BYB":"ဘီလာရုစ် ရူဘယ်အသစ် (၁၉၉၄–၁၉၉၉)","BYN":"ဘီလာရုစ် ရူဘယ်","BYR":"ဘီလာရုဇ် ရူဘယ် (၂၀၀၀–၂၀၁၆)","BZD":"ဘလိဇ် ဒေါ်လာ","CAD":"ကနေဒါ ဒေါ်လာ","CDF":"ကွန်ဂို ဖရန့်","CHE":"CHE","CHF":"ဆွစ် ဖရန့်","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"ချီလီ ပီဆို","CNH":"တရုတ် ယွမ် (ဟောင်ကောင်)","CNX":"CNX","CNY":"တရုတ် ယွမ်","COP":"ကိုလံဘီယာ ပီဆို","COU":"COU","CRC":"ကို့စတာရီကာ ကိုလွန်","CSD":"CSD","CSK":"CSK","CUC":"နိုင်ငံခြားငွေလဲလှယ်နိုင်သော ကျူးဘားပီဆို","CUP":"ကျူးဘား ပီဆို","CVE":"ကိတ်ပ်ဗာဒီ အက်စ်ခူဒို","CYP":"ဆိုက်ပရက်စ် ပေါင်","CZK":"ချက် ခိုရိုနာ","DDM":"DDM","DEM":"ဂျာမဏီ မတ်","DJF":"ဂျီဘူတီ ဖရန့်","DKK":"ဒိန်းမတ် ခရိုဏာ","DOP":"ဒိုမီနီကန် ပီဆို","DZD":"အယ်လ်ဂျီးရီးယား ဒီနာ","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"အီဂျစ် ပေါင်","ERN":"အီရီထရီးယား နာ့ခ်ဖာ","ESA":"ESA","ESB":"ESB","ESP":"စပိန် ပယ်စေးတာ","ETB":"အီသီယိုးပီးယား ဘီးယာ","EUR":"ယူရို","FIM":"FIM","FJD":"ဖီဂျီ ဒေါ်လာ","FKP":"ဖော့ကလန်ကျွန်းစု ပေါင်","FRF":"ပြင်သစ် ဖရန့်","GBP":"ဗြိတိသျှ ပေါင်","GEK":"GEK","GEL":"ဂျော်ဂျီယာ လားရီ","GHC":"GHC","GHS":"ဂါနာ ဆဲဒီ","GIP":"ဂျီဘရော်လ်တာ ပေါင်","GMD":"ဂမ်ဘီယာ ဒါလာစီ","GNF":"ဂီနီရာ ဖရန့်","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"ဂွါတီမာလာ ခက်ဇော်လ်","GWE":"GWE","GWP":"GWP","GYD":"ဂိုင်ယာနာ ဒေါ်လာ","HKD":"ဟောင်ကောင် ဒေါ်လာ","HNL":"ဟွန်ဒူးရပ်စ် လမ်းပီရာ","HRD":"HRD","HRK":"ခရိုအေးရှား ခူးနာ","HTG":"ဟေတီဂူးအော်ဒ်","HUF":"ဟန်ဂေရီယံ ဖော်ရင့်တ်","IDR":"အင်ဒိုနီးရှား ရူပီးယား","IEP":"IEP","ILP":"အစ္စရေး ပေါင်","ILR":"ILR","ILS":"အစ္စရေး ရှဲကလ်အသစ်","INR":"အိန္ဒိယ ရူပီး","IQD":"အီရတ် ဒီနာ","IRR":"အီရန် ရီအော်လ်","ISJ":"ISJ","ISK":"အိုက်စလန် ခရိုဏာ","ITL":"ITL","JMD":"ဂျမေကာ ဒေါ်လာ","JOD":"ဂျော်ဒန် ဒီနာ","JPY":"ဂျပန် ယန်း","KES":"ကင်ညာ သျှီလင်","KGS":"ကာဂျစ္စတန် ဆော်မ်","KHR":"ကမ္ဘောဒီးယား ရီးယဲ","KMF":"ကိုမိုရိုစ် ဖရန့်","KPW":"မြောက်ကိုရီးယား ဝမ်","KRH":"KRH","KRO":"KRO","KRW":"တောင်ကိုရီးယား ဝမ်","KWD":"ကူဝိတ် ဒီနာ","KYD":"ကေမန် ကျွန်းစု ဒေါ်လာ","KZT":"ကာဇက်စတန် ထိန်ဂျီ","LAK":"လာအို ကစ်","LBP":"လက်ဘနွန် ပေါင်","LKR":"သီရိလင်္ကာ ရူပီး","LRD":"လိုက်ဘေးရီးယား ဒေါ်လာ","LSL":"LSL","LTL":"လစ်သူယေးနီးယားလီတားစ်","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"လတ်ဗီးယားလတ်","LVR":"LVR","LYD":"လစ်ဗျား ဒိုင်နာ","MAD":"မိုရိုကို ဒရမ်","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"မောလ်ဒိုဗာ လယ်အို","MGA":"မာလာဂါစီ အရီရရီ","MGF":"MGF","MKD":"မက်ဆီဒိုးနီးယား ဒီနာ","MKN":"MKN","MLF":"MLF","MMK":"မြန်မာ ကျပ်","MNT":"မွန်ဂိုးလီးယား ထူးဂရခ်","MOP":"မကာအို ပါတားကား","MRO":"မော်ရီတေးနီးယား အူဂီးယာ (၁၉၇၃–၂၀၁၇)","MRU":"မော်ရီတေးနီးယန်း အူဂီးယာ","MTL":"MTL","MTP":"MTP","MUR":"မောရစ်ရှ ရူပီး","MVP":"MVP","MVR":"မော်လ်ဒိုက် ရူးဖီရာ","MWK":"မာလာဝီ ခွါးချာ","MXN":"မက်ကဆီကို ပီဆို","MXP":"MXP","MXV":"MXV","MYR":"မလေးရှား ရင်းဂစ်","MZE":"MZE","MZM":"MZM","MZN":"မိုဇမ်ဘစ် မက်တီခယ်လ်","NAD":"နမီးဘီးယား ဒေါ်လာ","NGN":"နိုင်ဂျီးရီးယား နိုင်းရာ","NIC":"NIC","NIO":"နီကာရာဂွါ ခိုးဒိုဘာ","NLG":"NLG","NOK":"နော်ဝေ ခရိုဏာ","NPR":"နီပေါ ရူပီး","NZD":"နယူးဇီလန် ဒေါ်လာ","OMR":"အိုမန်နီ ရီရယ်","PAB":"ပနားမား ဘလျဘိုးအာ","PEI":"PEI","PEN":"ပီရူး ဆိုးလ်","PES":"PES","PGK":"ပါပူအာ နယူးဂီနီ ခီးနာ","PHP":"ဖိလစ်ပိုင် ပီဆို","PKR":"ပါကစ္စတန် ရူပီး","PLN":"ပိုလန် ဇလော့တီ","PLZ":"PLZ","PTE":"PTE","PYG":"ပါရာဂွေး ဂွါးအ်နီး","QAR":"ကာတာရီ ရီရယ်","RHD":"RHD","ROL":"ROL","RON":"ရိုမေးနီးယား လယ်အို","RSD":"ဆားဘီးယား ဒယ်နား","RUB":"ရုရှ ရူဘယ်","RUR":"ရုရှ ရူဘယ် (၁၉၉၁–၁၉၉၈)","RWF":"ရဝန်ဒါ ဖရန့်","SAR":"ဆော်ဒီအာရေးဗီးယား ရီယော်လ်","SBD":"ဆော်လမွန်ကျွန်းစု ဒေါ်လာ","SCR":"ဆေးရှဲ ရူပီး","SDD":"SDD","SDG":"ဆူဒန် ပေါင်","SDP":"ဆူဒန် ပေါင်အဟောင်း","SEK":"ဆွီဒင် ခရိုဏာ","SGD":"စင်္ကာပူ ဒေါ်လာ","SHP":"စိန့်ဟယ်လယ်နာ ပေါင်","SIT":"SIT","SKK":"SKK","SLL":"ဆီယာရာလီယွန်း လီအိုနီ","SOS":"ဆိုမာလီ သျှီလင်","SRD":"ဆူရီနမ်း ဒေါ်လာ","SRG":"SRG","SSP":"တောင်ဆူဒန် ပေါင်","STD":"ဆောင်တူမေးနှင့် ပရင်စီပီ ဒိုဘရာ","STN":"ဆောင်တူမေးနှင့် ပရင်စီပီ ဒိုဘရာ (၂၀၁၈)","SUR":"ဆိုဗီယက် ရူဗယ်","SVC":"SVC","SYP":"ဆီးရီးယား ပေါင်","SZL":"ဆွာဇီလန် လီလန်းဂီနီ","THB":"ထိုင်း ဘတ်","TJR":"TJR","TJS":"တာဂျစ်ကစ္စတန် ဆိုမိုနီ","TMM":"TMM","TMT":"တာ့ခ်မင်နစ္စတန် မာနတ်","TND":"တူနီးရှား ဒိုင်နာ","TOP":"တွန်ဂါ ဗန်ဂါ","TPE":"TPE","TRL":"ရှေးဟောင်းတူရကီ လိုင်ရာ","TRY":"တူရကီ လိုင်ရာ","TTD":"ထရီနီဒတ်နှင့် တိုဘက်ဂို ဒေါ်လာ","TWD":"ထိုင်ဝမ် ဒေါ်လာအသစ်","TZS":"တန်ဇန်းနီးယား သျှီလင်","UAH":"ယူကရိန်း ဟီရီဗင်းညား","UAK":"UAK","UGS":"UGS","UGX":"ယူဂန္ဒာ သျှီလင်","USD":"အမေရိကန် ဒေါ်လာ","USN":"အမေရိကန် ဒေါ်လာ (နောက်နေ့)","USS":"အမေရိကန် ဒေါ်လာ (တနေ့တည်း)","UYI":"UYI","UYP":"UYP","UYU":"ဥရုဂွေး ပီဆို","UYW":"UYW","UZS":"ဥဇဘက်ကစ္စတန် ဆော်မ်","VEB":"VEB","VEF":"ဗင်နီဇွဲလား ဘိုလီဗာ (၂၀၀၈–၂၀၁၈)","VES":"ဗင်နီဇွဲလန်း ဘိုလီဗာ","VND":"ဗီယက်နမ် ဒေါင်","VNN":"VNN","VUV":"ဗနွားတူ ဗားထူ","WST":"ဆမိုအား ထားလာ","XAF":"ကင်မရွန်း ဖရန့်","XAG":"ငွေ","XAU":"ရွှေ","XBA":"XBA","XBB":"ဥရောပငွေကြေးစံနစ်","XBC":"XBC","XBD":"XBD","XCD":"အရှေ့ကာရစ်ဘီယံ ဒေါ်လာ","XDR":"အထူးထုတ်ယူခွင့်","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"အနောက် အာဖရိက CFA ဖရန့်","XPD":"XPD","XPF":"CFP ဖရန့်","XPT":"ပလက်တီနမ်","XRE":"XRE","XSU":"XSU","XTS":"စမ်းသပ် ငွေကြေး ကုဒ်","XUA":"XUA","XXX":"မသိသို့မဟုတ်မရှိသောငွေကြေး","YDD":"YDD","YER":"ယီမင်နီ ရီရယ်","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"တောင်အာဖရိက ရန်း","ZMK":"ZMK","ZMW":"ဇင်ဘာဘွေ ခွါးချာ","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ဇင်ဘာဘွေ ဒေါ်လာ","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["my"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
