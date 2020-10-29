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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("zh-Hans-MO").length
)) {
// Intl.DisplayNames.~locale.zh-Hans-MO
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"zh-Hans-MO":{"types":{"language":{"long":{"aa":"阿法尔语","ab":"阿布哈西亚语","ace":"亚齐语","ach":"阿乔利语","ada":"阿当梅语","ady":"阿迪格语","ae":"阿维斯塔语","af":"南非荷兰语","afh":"阿弗里希利语","agq":"亚罕语","ain":"阿伊努语","ak":"阿肯语","akk":"阿卡德语","ale":"阿留申语","alt":"南阿尔泰语","am":"阿姆哈拉语","an":"阿拉贡语","ang":"古英语","anp":"昂加语","ar":"阿拉伯语","ar-001":"现代标准阿拉伯语","arc":"阿拉米语","arn":"马普切语","arp":"阿拉帕霍语","ars":"纳吉迪阿拉伯语","arw":"阿拉瓦克语","as":"阿萨姆语","asa":"帕雷语","ast":"阿斯图里亚斯语","av":"阿瓦尔语","awa":"阿瓦德语","ay":"艾马拉语","az":"阿塞拜疆语","az-Arab":"南阿塞拜疆语","ba":"巴什基尔语","bal":"俾路支语","ban":"巴厘语","bas":"巴萨语","bax":"巴姆穆语","bbj":"戈马拉语","be":"白俄罗斯语","bej":"贝沙语","bem":"本巴语","bez":"贝纳语","bfd":"巴非特语","bg":"保加利亚语","bgn":"西俾路支语","bho":"博杰普尔语","bi":"比斯拉马语","bik":"比科尔语","bin":"比尼语","bkm":"科姆语","bla":"西克西卡语","bm":"班巴拉语","bn":"孟加拉语","bo":"藏语","br":"布列塔尼语","bra":"布拉杰语","brx":"博多语","bs":"波斯尼亚语","bss":"阿库色语","bua":"布里亚特语","bug":"布吉语","bum":"布鲁语","byn":"比林语","byv":"梅敦巴语","ca":"加泰罗尼亚语","cad":"卡多语","car":"加勒比语","cay":"卡尤加语","cch":"阿灿语","ccp":"查克玛语","ce":"车臣语","ceb":"宿务语","cgg":"奇加语","ch":"查莫罗语","chb":"奇布查语","chg":"察合台语","chk":"楚克语","chm":"马里语","chn":"奇努克混合语","cho":"乔克托语","chp":"奇佩维安语","chr":"切罗基语","chy":"夏延语","ckb":"中库尔德语","co":"科西嘉语","cop":"科普特语","cr":"克里族语","crh":"克里米亚土耳其语","crs":"塞舌尔克里奥尔语","cs":"捷克语","csb":"卡舒比语","cu":"教会斯拉夫语","cv":"楚瓦什语","cy":"威尔士语","da":"丹麦语","dak":"达科他语","dar":"达尔格瓦语","dav":"台塔语","de":"德语","de-AT":"奥地利德语","de-CH":"瑞士高地德语","del":"特拉华语","den":"史拉维语","dgr":"多格里布语","din":"丁卡语","dje":"哲尔马语","doi":"多格拉语","dsb":"下索布语","dua":"都阿拉语","dum":"中古荷兰语","dv":"迪维希语","dyo":"朱拉语","dyu":"迪尤拉语","dz":"宗卡语","dzg":"达扎葛语","ebu":"恩布语","ee":"埃维语","efi":"埃菲克语","egy":"古埃及语","eka":"艾卡朱克语","el":"希腊语","elx":"埃兰语","en":"英语","en-AU":"澳大利亚英语","en-CA":"加拿大英语","en-GB":"英国英语","en-US":"美国英语","enm":"中古英语","eo":"世界语","es":"西班牙语","es-419":"拉丁美洲西班牙语","es-ES":"欧洲西班牙语","es-MX":"墨西哥西班牙语","et":"爱沙尼亚语","eu":"巴斯克语","ewo":"旺杜语","fa":"波斯语","fa-AF":"达里语","fan":"芳格语","fat":"芳蒂语","ff":"富拉语","fi":"芬兰语","fil":"菲律宾语","fj":"斐济语","fo":"法罗语","fon":"丰语","fr":"法语","fr-CA":"加拿大法语","fr-CH":"瑞士法语","frc":"卡真法语","frm":"中古法语","fro":"古法语","frr":"北弗里西亚语","frs":"东弗里西亚语","fur":"弗留利语","fy":"西弗里西亚语","ga":"爱尔兰语","gaa":"加族语","gag":"加告兹语","gan":"赣语","gay":"迦约语","gba":"格巴亚语","gd":"苏格兰盖尔语","gez":"吉兹语","gil":"吉尔伯特语","gl":"加利西亚语","gmh":"中古高地德语","gn":"瓜拉尼语","goh":"古高地德语","gon":"冈德语","gor":"哥伦打洛语","got":"哥特语","grb":"格列博语","grc":"古希腊语","gsw":"瑞士德语","gu":"古吉拉特语","guz":"古西语","gv":"马恩语","gwi":"哥威迅语","ha":"豪萨语","hai":"海达语","hak":"客家语","haw":"夏威夷语","he":"希伯来语","hi":"印地语","hil":"希利盖农语","hit":"赫梯语","hmn":"苗语","ho":"希里莫图语","hr":"克罗地亚语","hsb":"上索布语","hsn":"湘语","ht":"海地克里奥尔语","hu":"匈牙利语","hup":"胡帕语","hy":"亚美尼亚语","hz":"赫雷罗语","ia":"国际语","iba":"伊班语","ibb":"伊比比奥语","id":"印度尼西亚语","ie":"国际文字（E）","ig":"伊博语","ii":"四川彝语","ik":"伊努皮克语","ilo":"伊洛卡诺语","inh":"印古什语","io":"伊多语","is":"冰岛语","it":"意大利语","iu":"因纽特语","ja":"日语","jbo":"逻辑语","jgo":"恩艮巴语","jmc":"马切姆语","jpr":"犹太波斯语","jrb":"犹太阿拉伯语","jv":"爪哇语","ka":"格鲁吉亚语","kaa":"卡拉卡尔帕克语","kab":"卡拜尔语","kac":"克钦语","kaj":"卡捷语","kam":"卡姆巴语","kaw":"卡威语","kbd":"卡巴尔德语","kbl":"加涅姆布语","kcg":"卡塔布语","kde":"马孔德语","kea":"卡布佛得鲁语","kfo":"克罗语","kg":"刚果语","kha":"卡西语","kho":"和田语","khq":"西桑海语","ki":"吉库尤语","kj":"宽亚玛语","kk":"哈萨克语","kkj":"卡库语","kl":"格陵兰语","kln":"卡伦金语","km":"高棉语","kmb":"金邦杜语","kn":"卡纳达语","ko":"韩语","koi":"科米-彼尔米亚克语","kok":"孔卡尼语","kos":"科斯拉伊语","kpe":"克佩列语","kr":"卡努里语","krc":"卡拉恰伊巴尔卡尔语","krl":"卡累利阿语","kru":"库鲁克语","ks":"克什米尔语","ksb":"香巴拉语","ksf":"巴菲亚语","ksh":"科隆语","ku":"库尔德语","kum":"库梅克语","kut":"库特奈语","kv":"科米语","kw":"康沃尔语","ky":"柯尔克孜语","la":"拉丁语","lad":"拉迪诺语","lag":"朗吉语","lah":"印度-雅利安语","lam":"兰巴语","lb":"卢森堡语","lez":"列兹金语","lg":"卢干达语","li":"林堡语","lkt":"拉科塔语","ln":"林加拉语","lo":"老挝语","lol":"蒙戈语","lou":"路易斯安那克里奥尔语","loz":"洛齐语","lrc":"北卢尔语","lt":"立陶宛语","lu":"鲁巴加丹加语","lua":"卢巴-卢拉语","lui":"卢伊塞诺语","lun":"隆达语","luo":"卢奥语","lus":"米佐语","luy":"卢雅语","lv":"拉脱维亚语","mad":"马都拉语","maf":"马法语","mag":"摩揭陀语","mai":"迈蒂利语","mak":"望加锡语","man":"曼丁哥语","mas":"马赛语","mde":"马坝语","mdf":"莫克沙语","mdr":"曼达尔语","men":"门德语","mer":"梅鲁语","mfe":"毛里求斯克里奥尔语","mg":"马拉加斯语","mga":"中古爱尔兰语","mgh":"马库阿语","mgo":"梅塔语","mh":"马绍尔语","mi":"毛利语","mic":"密克马克语","min":"米南佳保语","mk":"马其顿语","ml":"马拉雅拉姆语","mn":"蒙古语","mnc":"满语","mni":"曼尼普尔语","moh":"摩霍克语","mos":"莫西语","mr":"马拉地语","ms":"马来语","mt":"马耳他语","mua":"蒙当语","mul":"多语种","mus":"克里克语","mwl":"米兰德斯语","mwr":"马尔瓦里语","my":"缅甸语","mye":"姆耶内语","myv":"厄尔兹亚语","mzn":"马赞德兰语","na":"瑙鲁语","nan":"闽南语","nap":"那不勒斯语","naq":"纳马语","nb":"书面挪威语","nd":"北恩德贝勒语","nds":"低地德语","nds-NL":"低萨克森语","ne":"尼泊尔语","new":"尼瓦尔语","ng":"恩东加语","nia":"尼亚斯语","niu":"纽埃语","nl":"荷兰语","nl-BE":"弗拉芒语","nmg":"夸西奥语","nn":"挪威尼诺斯克语","nnh":"恩甘澎语","no":"挪威语","nog":"诺盖语","non":"古诺尔斯语","nqo":"西非书面文字","nr":"南恩德贝勒语","nso":"北索托语","nus":"努埃尔语","nv":"纳瓦霍语","nwc":"古典尼瓦尔语","ny":"齐切瓦语","nym":"尼扬韦齐语","nyn":"尼昂科勒语","nyo":"尼奥罗语","nzi":"恩济马语","oc":"奥克语","oj":"奥吉布瓦语","om":"奥罗莫语","or":"奥里亚语","os":"奥塞梯语","osa":"奥塞治语","ota":"奥斯曼土耳其语","pa":"旁遮普语","pag":"邦阿西南语","pal":"巴拉维语","pam":"邦板牙语","pap":"帕皮阿门托语","pau":"帕劳语","pcm":"尼日利亚皮钦语","peo":"古波斯语","phn":"腓尼基语","pi":"巴利语","pl":"波兰语","pon":"波纳佩语","prg":"普鲁士语","pro":"古普罗文斯语","ps":"普什图语","pt":"葡萄牙语","pt-BR":"巴西葡萄牙语","pt-PT":"欧洲葡萄牙语","qu":"克丘亚语","quc":"基切语","raj":"拉贾斯坦语","rap":"拉帕努伊语","rar":"拉罗汤加语","rm":"罗曼什语","rn":"隆迪语","ro":"罗马尼亚语","ro-MD":"摩尔多瓦语","rof":"兰博语","rom":"吉普赛语","root":"根语言","ru":"俄语","rup":"阿罗马尼亚语","rw":"卢旺达语","rwk":"罗瓦语","sa":"梵语","sad":"桑达韦语","sah":"萨哈语","sam":"萨马利亚阿拉姆语","saq":"桑布鲁语","sas":"萨萨克文","sat":"桑塔利语","sba":"甘拜语","sbp":"桑古语","sc":"萨丁语","scn":"西西里语","sco":"苏格兰语","sd":"信德语","sdh":"南库尔德语","se":"北方萨米语","see":"塞内卡语","seh":"塞纳语","sel":"塞尔库普语","ses":"东桑海语","sg":"桑戈语","sga":"古爱尔兰语","sh":"塞尔维亚-克罗地亚语","shi":"希尔哈语","shn":"掸语","shu":"乍得阿拉伯语","si":"僧伽罗语","sid":"悉达摩语","sk":"斯洛伐克语","sl":"斯洛文尼亚语","sm":"萨摩亚语","sma":"南萨米语","smj":"吕勒萨米语","smn":"伊纳里萨米语","sms":"斯科特萨米语","sn":"绍纳语","snk":"索宁克语","so":"索马里语","sog":"粟特语","sq":"阿尔巴尼亚语","sr":"塞尔维亚语","srn":"苏里南汤加语","srr":"塞雷尔语","ss":"斯瓦蒂语","ssy":"萨霍语","st":"南索托语","su":"巽他语","suk":"苏库马语","sus":"苏苏语","sux":"苏美尔语","sv":"瑞典语","sw":"斯瓦希里语","sw-CD":"刚果斯瓦希里语","swb":"科摩罗语","syc":"古典叙利亚语","syr":"叙利亚语","ta":"泰米尔语","te":"泰卢固语","tem":"泰姆奈语","teo":"特索语","ter":"特伦诺语","tet":"德顿语","tg":"塔吉克语","th":"泰语","ti":"提格利尼亚语","tig":"提格雷语","tiv":"蒂夫语","tk":"土库曼语","tkl":"托克劳语","tl":"他加禄语","tlh":"克林贡语","tli":"特林吉特语","tmh":"塔马奇克语","tn":"茨瓦纳语","to":"汤加语","tog":"尼亚萨汤加语","tpi":"托克皮辛语","tr":"土耳其语","trv":"赛德克语","ts":"聪加语","tsi":"钦西安语","tt":"鞑靼语","tum":"通布卡语","tvl":"图瓦卢语","tw":"契维语","twq":"北桑海语","ty":"塔希提语","tyv":"图瓦语","tzm":"塔马齐格特语","udm":"乌德穆尔特语","ug":"维吾尔语","uga":"乌加里特语","uk":"乌克兰语","umb":"翁本杜语","und":"未知语言","ur":"乌尔都语","uz":"乌兹别克语","vai":"瓦伊语","ve":"文达语","vep":"维普森语","vi":"越南语","vo":"沃拉普克语","vot":"沃提克语","vun":"温旧语","wa":"瓦隆语","wae":"瓦尔瑟语","wal":"瓦拉莫语","war":"瓦瑞语","was":"瓦绍语","wbp":"瓦尔皮瑞语","wo":"沃洛夫语","wuu":"吴语","xal":"卡尔梅克语","xh":"科萨语","xog":"索加语","yao":"瑶族语","yap":"雅浦语","yav":"洋卞语","ybb":"耶姆巴语","yi":"意第绪语","yo":"约鲁巴语","yue":"粤语","za":"壮语","zap":"萨波蒂克语","zbl":"布里斯符号","zen":"泽纳加语","zgh":"标准摩洛哥塔马塞特语","zh":"中文","zh-Hans":"简体中文","zh-Hant":"繁体中文","zu":"祖鲁语","zun":"祖尼语","zxx":"无语言内容","zza":"扎扎语"},"short":{"az":"阿塞语","en-GB":"英式英语","en-US":"美式英语"},"narrow":{}},"region":{"long":{"142":"亚洲","143":"中亚","145":"西亚","150":"欧洲","151":"东欧","154":"北欧","155":"西欧","202":"撒哈拉以南非洲","419":"拉丁美洲","001":"世界","002":"非洲","003":"北美洲","005":"南美洲","009":"大洋洲","011":"西非","013":"中美洲","014":"东非","015":"北非","017":"中非","018":"南部非洲","019":"美洲","021":"美洲北部","029":"加勒比地区","030":"东亚","034":"南亚","035":"东南亚","039":"南欧","053":"澳大拉西亚","054":"美拉尼西亚","057":"密克罗尼西亚地区","061":"玻利尼西亚","AC":"阿森松岛","AD":"安道尔","AE":"阿拉伯联合酋长国","AF":"阿富汗","AG":"安提瓜和巴布达","AI":"安圭拉","AL":"阿尔巴尼亚","AM":"亚美尼亚","AO":"安哥拉","AQ":"南极洲","AR":"阿根廷","AS":"美属萨摩亚","AT":"奥地利","AU":"澳大利亚","AW":"阿鲁巴","AX":"奥兰群岛","AZ":"阿塞拜疆","BA":"波斯尼亚和黑塞哥维那","BB":"巴巴多斯","BD":"孟加拉国","BE":"比利时","BF":"布基纳法索","BG":"保加利亚","BH":"巴林","BI":"布隆迪","BJ":"贝宁","BL":"圣巴泰勒米","BM":"百慕大","BN":"文莱","BO":"玻利维亚","BQ":"荷属加勒比区","BR":"巴西","BS":"巴哈马","BT":"不丹","BV":"布韦岛","BW":"博茨瓦纳","BY":"白俄罗斯","BZ":"伯利兹","CA":"加拿大","CC":"科科斯（基林）群岛","CD":"刚果（金）","CF":"中非共和国","CG":"刚果（布）","CH":"瑞士","CI":"科特迪瓦","CK":"库克群岛","CL":"智利","CM":"喀麦隆","CN":"中国","CO":"哥伦比亚","CP":"克利珀顿岛","CR":"哥斯达黎加","CU":"古巴","CV":"佛得角","CW":"库拉索","CX":"圣诞岛","CY":"塞浦路斯","CZ":"捷克","DE":"德国","DG":"迪戈加西亚岛","DJ":"吉布提","DK":"丹麦","DM":"多米尼克","DO":"多米尼加共和国","DZ":"阿尔及利亚","EA":"休达及梅利利亚","EC":"厄瓜多尔","EE":"爱沙尼亚","EG":"埃及","EH":"西撒哈拉","ER":"厄立特里亚","ES":"西班牙","ET":"埃塞俄比亚","EU":"欧盟","EZ":"欧元区","FI":"芬兰","FJ":"斐济","FK":"福克兰群岛","FM":"密克罗尼西亚","FO":"法罗群岛","FR":"法国","GA":"加蓬","GB":"英国","GD":"格林纳达","GE":"格鲁吉亚","GF":"法属圭亚那","GG":"根西岛","GH":"加纳","GI":"直布罗陀","GL":"格陵兰","GM":"冈比亚","GN":"几内亚","GP":"瓜德罗普","GQ":"赤道几内亚","GR":"希腊","GS":"南乔治亚和南桑威奇群岛","GT":"危地马拉","GU":"关岛","GW":"几内亚比绍","GY":"圭亚那","HK":"中国香港特别行政区","HM":"赫德岛和麦克唐纳群岛","HN":"洪都拉斯","HR":"克罗地亚","HT":"海地","HU":"匈牙利","IC":"加纳利群岛","ID":"印度尼西亚","IE":"爱尔兰","IL":"以色列","IM":"马恩岛","IN":"印度","IO":"英属印度洋领地","IQ":"伊拉克","IR":"伊朗","IS":"冰岛","IT":"意大利","JE":"泽西岛","JM":"牙买加","JO":"约旦","JP":"日本","KE":"肯尼亚","KG":"吉尔吉斯斯坦","KH":"柬埔寨","KI":"基里巴斯","KM":"科摩罗","KN":"圣基茨和尼维斯","KP":"朝鲜","KR":"韩国","KW":"科威特","KY":"开曼群岛","KZ":"哈萨克斯坦","LA":"老挝","LB":"黎巴嫩","LC":"圣卢西亚","LI":"列支敦士登","LK":"斯里兰卡","LR":"利比里亚","LS":"莱索托","LT":"立陶宛","LU":"卢森堡","LV":"拉脱维亚","LY":"利比亚","MA":"摩洛哥","MC":"摩纳哥","MD":"摩尔多瓦","ME":"黑山","MF":"法属圣马丁","MG":"马达加斯加","MH":"马绍尔群岛","MK":"北马其顿","ML":"马里","MM":"缅甸","MN":"蒙古","MO":"中国澳门特别行政区","MP":"北马里亚纳群岛","MQ":"马提尼克","MR":"毛里塔尼亚","MS":"蒙特塞拉特","MT":"马耳他","MU":"毛里求斯","MV":"马尔代夫","MW":"马拉维","MX":"墨西哥","MY":"马来西亚","MZ":"莫桑比克","NA":"纳米比亚","NC":"新喀里多尼亚","NE":"尼日尔","NF":"诺福克岛","NG":"尼日利亚","NI":"尼加拉瓜","NL":"荷兰","NO":"挪威","NP":"尼泊尔","NR":"瑙鲁","NU":"纽埃","NZ":"新西兰","OM":"阿曼","PA":"巴拿马","PE":"秘鲁","PF":"法属波利尼西亚","PG":"巴布亚新几内亚","PH":"菲律宾","PK":"巴基斯坦","PL":"波兰","PM":"圣皮埃尔和密克隆群岛","PN":"皮特凯恩群岛","PR":"波多黎各","PS":"巴勒斯坦领土","PT":"葡萄牙","PW":"帕劳","PY":"巴拉圭","QA":"卡塔尔","QO":"大洋洲边远群岛","RE":"留尼汪","RO":"罗马尼亚","RS":"塞尔维亚","RU":"俄罗斯","RW":"卢旺达","SA":"沙特阿拉伯","SB":"所罗门群岛","SC":"塞舌尔","SD":"苏丹","SE":"瑞典","SG":"新加坡","SH":"圣赫勒拿","SI":"斯洛文尼亚","SJ":"斯瓦尔巴和扬马延","SK":"斯洛伐克","SL":"塞拉利昂","SM":"圣马力诺","SN":"塞内加尔","SO":"索马里","SR":"苏里南","SS":"南苏丹","ST":"圣多美和普林西比","SV":"萨尔瓦多","SX":"荷属圣马丁","SY":"叙利亚","SZ":"斯威士兰","TA":"特里斯坦-达库尼亚群岛","TC":"特克斯和凯科斯群岛","TD":"乍得","TF":"法属南部领地","TG":"多哥","TH":"泰国","TJ":"塔吉克斯坦","TK":"托克劳","TL":"东帝汶","TM":"土库曼斯坦","TN":"突尼斯","TO":"汤加","TR":"土耳其","TT":"特立尼达和多巴哥","TV":"图瓦卢","TW":"台湾","TZ":"坦桑尼亚","UA":"乌克兰","UG":"乌干达","UM":"美国本土外小岛屿","UN":"联合国","US":"美国","UY":"乌拉圭","UZ":"乌兹别克斯坦","VA":"梵蒂冈","VC":"圣文森特和格林纳丁斯","VE":"委内瑞拉","VG":"英属维尔京群岛","VI":"美属维尔京群岛","VN":"越南","VU":"瓦努阿图","WF":"瓦利斯和富图纳","WS":"萨摩亚","XA":"伪地区","XB":"伪双向语言地区","XK":"科索沃","YE":"也门","YT":"马约特","ZA":"南非","ZM":"赞比亚","ZW":"津巴布韦","ZZ":"未知地区"},"short":{"GB":"英国","HK":"香港","MO":"澳门","PS":"巴勒斯坦","US":"美国"},"narrow":{}},"script":{"long":{"Adlm":"阿德拉姆文","Afak":"阿法卡文","Aghb":"高加索阿尔巴尼亚文","Ahom":"Ahom","Arab":"阿拉伯文","Aran":"波斯体","Armi":"皇室亚拉姆文","Armn":"亚美尼亚文","Avst":"阿维斯陀文","Bali":"巴厘文","Bamu":"巴姆穆文","Bass":"巴萨文","Batk":"巴塔克文","Beng":"孟加拉文","Bhks":"拜克舒克文","Blis":"布列斯符号","Bopo":"汉语拼音","Brah":"婆罗米文字","Brai":"布莱叶盲文","Bugi":"布吉文","Buhd":"布希德文","Cakm":"查克马文","Cans":"加拿大土著统一音节","Cari":"卡里亚文","Cham":"占文","Cher":"切罗基文","Chrs":"花拉子模文","Cirt":"色斯文","Copt":"克普特文","Cprt":"塞浦路斯文","Cyrl":"西里尔文","Cyrs":"西里尔文字（古教会斯拉夫文的变体）","Deva":"天城文","Diak":"迪维西阿库鲁文","Dogr":"多格拉文","Dsrt":"德塞莱特文","Dupl":"杜普洛伊速记","Egyd":"后期埃及文","Egyh":"古埃及僧侣书写体","Egyp":"古埃及象形文","Elba":"爱尔巴桑文","Elym":"埃利迈文","Ethi":"埃塞俄比亚文","Geok":"格鲁吉亚文（教堂体）","Geor":"格鲁吉亚文","Glag":"格拉哥里文","Gong":"贡贾拉贡德文","Gonm":"马萨拉姆冈德文","Goth":"哥特文","Gran":"格兰塔文","Grek":"希腊文","Gujr":"古吉拉特文","Guru":"果鲁穆奇文","Hanb":"汉语注音","Hang":"谚文","Hani":"汉字","Hano":"汉奴罗文","Hans":"简体","Hant":"繁体","Hatr":"哈特兰文","Hebr":"希伯来文","Hira":"平假名","Hluw":"安那托利亚象形文字","Hmng":"杨松录苗文","Hmnp":"尼亚肯蒲丘苗文","Hrkt":"假名表","Hung":"古匈牙利文","Inds":"印度河文字","Ital":"古意大利文","Jamo":"韩文字母","Java":"爪哇文","Jpan":"日文","Jurc":"女真文","Kali":"克耶李文字","Kana":"片假名","Khar":"卡罗须提文","Khmr":"高棉文","Khoj":"克吉奇文字","Kits":"契丹小字","Knda":"卡纳达文","Kore":"韩文","Kpel":"克佩列文","Kthi":"凯提文","Lana":"兰拿文","Laoo":"老挝文","Latf":"拉丁文（哥特式字体变体）","Latg":"拉丁文（盖尔文变体）","Latn":"拉丁文","Lepc":"雷布查文","Limb":"林布文","Lina":"线形文字（A）","Linb":"线形文字（B）","Lisu":"傈僳文","Loma":"洛马文","Lyci":"利西亚文","Lydi":"吕底亚文","Mahj":"默哈金文","Maka":"望加锡文","Mand":"阿拉米文","Mani":"摩尼教文","Marc":"大玛尔文","Maya":"玛雅圣符文","Medf":"梅德法伊德林文","Mend":"门迪文","Merc":"麦罗埃草书","Mero":"麦若提克文","Mlym":"马拉雅拉姆文","Modi":"莫迪文","Mong":"蒙古文","Moon":"韩文语系","Mroo":"谬文","Mtei":"曼尼普尔文","Mult":"穆尔坦文","Mymr":"缅甸文","Nand":"楠迪梵文","Narb":"古北方阿拉伯文","Nbat":"纳巴泰文","Newa":"尼瓦文","Nkgb":"纳西格巴文","Nkoo":"西非书面文字（N’Ko）","Nshu":"女书","Ogam":"欧甘文","Olck":"桑塔利文","Orkh":"鄂尔浑文","Orya":"奥里亚文","Osge":"欧塞奇文","Osma":"奥斯曼亚文","Palm":"帕尔迈拉文","Pauc":"包金豪文","Perm":"古彼尔姆文","Phag":"八思巴文","Phli":"巴列维文碑铭体","Phlp":"巴列维文（圣诗体）","Phlv":"巴列维文（书体）","Phnx":"腓尼基文","Plrd":"波拉德音标文字","Prti":"帕提亚文碑铭体","Qaag":"Zawgyi","Rjng":"拉让文","Rohg":"哈乃斐罗兴亚文","Roro":"朗格朗格文","Runr":"古代北欧文","Samr":"撒马利亚文","Sara":"沙拉堤文","Sarb":"古南阿拉伯文","Saur":"索拉什特拉文","Sgnw":"书写符号","Shaw":"萧伯纳式文","Shrd":"夏拉达文","Sidd":"悉昙","Sind":"信德文","Sinh":"僧伽罗文","Sogd":"粟特文","Sogo":"古粟特文","Sora":"索朗桑朋文","Soyo":"索永布文","Sund":"巽他文","Sylo":"锡尔赫特文","Syrc":"叙利亚文","Syre":"福音体叙利亚文","Syrj":"西叙利亚文","Syrn":"东叙利亚文","Tagb":"塔格班瓦文","Takr":"泰克里文","Tale":"泰乐文","Talu":"新傣文","Taml":"泰米尔文","Tang":"唐古特文","Tavt":"越南傣文","Telu":"泰卢固文","Teng":"腾格瓦文字","Tfng":"提非纳文","Tglg":"塔加路文","Thaa":"塔安那文","Thai":"泰文","Tibt":"藏文","Tirh":"迈蒂利文","Ugar":"乌加里特文","Vaii":"瓦依文","Visp":"可见语言","Wara":"瓦郎奇蒂文字","Wcho":"万秋文","Wole":"沃莱艾文","Xpeo":"古波斯文","Xsux":"苏美尔-阿卡德楔形文字","Yezi":"雅兹迪文","Yiii":"彝文","Zanb":"札那巴札尔方块文字","Zinh":"遗传学术语","Zmth":"数学符号","Zsye":"表情符号","Zsym":"符号","Zxxx":"非书面文字","Zyyy":"通用","Zzzz":"未知文字"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"安道尔比塞塔","AED":"阿联酋迪拉姆","AFA":"阿富汗尼 (1927–2002)","AFN":"阿富汗尼","ALK":"阿尔巴尼亚列克(1946–1965)","ALL":"阿尔巴尼亚列克","AMD":"亚美尼亚德拉姆","ANG":"荷属安的列斯盾","AOA":"安哥拉宽扎","AOK":"安哥拉宽扎 (1977–1990)","AON":"安哥拉新宽扎 (1990–2000)","AOR":"安哥拉重新调整宽扎 (1995–1999)","ARA":"阿根廷奥斯特拉尔","ARL":"阿根廷法定比索 (1970–1983)","ARM":"阿根廷比索 (1881–1970)","ARP":"阿根廷比索 (1983–1985)","ARS":"阿根廷比索","ATS":"奥地利先令","AUD":"澳大利亚元","AWG":"阿鲁巴弗罗林","AZM":"阿塞拜疆马纳特 (1993–2006)","AZN":"阿塞拜疆马纳特","BAD":"波士尼亚-赫塞哥维纳第纳尔 (1992–1994)","BAM":"波斯尼亚-黑塞哥维那可兑换马克","BAN":"波士尼亚-赫塞哥维纳新第纳尔 (1994–1997)","BBD":"巴巴多斯元","BDT":"孟加拉塔卡","BEC":"比利时法郎（可兑换）","BEF":"比利时法郎","BEL":"比利时法郎（金融）","BGL":"保加利亚硬列弗","BGM":"保加利亚社会党列弗","BGN":"保加利亚列弗","BGO":"保加利亚列弗 (1879–1952)","BHD":"巴林第纳尔","BIF":"布隆迪法郎","BMD":"百慕大元","BND":"文莱元","BOB":"玻利维亚诺","BOL":"玻利维亚诺 (1863–1963)","BOP":"玻利维亚比索","BOV":"玻利维亚 Mvdol（资金）","BRB":"巴西新克鲁赛罗 (1967–1986)","BRC":"巴西克鲁扎多 (1986–1989)","BRE":"巴西克鲁塞罗 (1990–1993)","BRL":"巴西雷亚尔","BRN":"巴西新克鲁扎多 (1989–1990)","BRR":"巴西克鲁塞罗 (1993–1994)","BRZ":"巴西克鲁塞罗 (1942–1967)","BSD":"巴哈马元","BTN":"不丹努尔特鲁姆","BUK":"缅元","BWP":"博茨瓦纳普拉","BYB":"白俄罗斯新卢布 (1994–1999)","BYN":"白俄罗斯卢布","BYR":"白俄罗斯卢布 (2000–2016)","BZD":"伯利兹元","CAD":"加拿大元","CDF":"刚果法郎","CHE":"欧元 (WIR)","CHF":"瑞士法郎","CHW":"法郎 (WIR)","CLE":"智利埃斯库多","CLF":"智利（资金）","CLP":"智利比索","CNH":"人民币（离岸）","CNX":"中国人民银行元","CNY":"人民币","COP":"哥伦比亚比索","COU":"哥伦比亚币","CRC":"哥斯达黎加科朗","CSD":"旧塞尔维亚第纳尔","CSK":"捷克硬克朗","CUC":"古巴可兑换比索","CUP":"古巴比索","CVE":"佛得角埃斯库多","CYP":"塞浦路斯镑","CZK":"捷克克朗","DDM":"东德奥斯特马克","DEM":"德国马克","DJF":"吉布提法郎","DKK":"丹麦克朗","DOP":"多米尼加比索","DZD":"阿尔及利亚第纳尔","ECS":"厄瓜多尔苏克雷","ECV":"厄瓜多尔 (UVC)","EEK":"爱沙尼亚克朗","EGP":"埃及镑","ERN":"厄立特里亚纳克法","ESA":"西班牙比塞塔（帐户 A）","ESB":"西班牙比塞塔（兑换帐户）","ESP":"西班牙比塞塔","ETB":"埃塞俄比亚比尔","EUR":"欧元","FIM":"芬兰马克","FJD":"斐济元","FKP":"福克兰群岛镑","FRF":"法国法郎","GBP":"英镑","GEK":"乔治亚库蓬拉瑞特","GEL":"格鲁吉亚拉里","GHC":"加纳塞第","GHS":"加纳塞地","GIP":"直布罗陀镑","GMD":"冈比亚达拉西","GNF":"几内亚法郎","GNS":"几内亚西里","GQE":"赤道几内亚埃奎勒","GRD":"希腊德拉克马","GTQ":"危地马拉格查尔","GWE":"葡萄牙几内亚埃斯库多","GWP":"几内亚比绍比索","GYD":"圭亚那元","HKD":"港元","HNL":"洪都拉斯伦皮拉","HRD":"克罗地亚第纳尔","HRK":"克罗地亚库纳","HTG":"海地古德","HUF":"匈牙利福林","IDR":"印度尼西亚盾","IEP":"爱尔兰镑","ILP":"以色列镑","ILR":"以色列谢克尔(1980–1985)","ILS":"以色列新谢克尔","INR":"印度卢比","IQD":"伊拉克第纳尔","IRR":"伊朗里亚尔","ISJ":"冰岛克朗(1918–1981)","ISK":"冰岛克朗","ITL":"意大利里拉","JMD":"牙买加元","JOD":"约旦第纳尔","JPY":"日元","KES":"肯尼亚先令","KGS":"吉尔吉斯斯坦索姆","KHR":"柬埔寨瑞尔","KMF":"科摩罗法郎","KPW":"朝鲜元","KRH":"韩元 (1953–1962)","KRO":"韩元 (1945–1953)","KRW":"韩元","KWD":"科威特第纳尔","KYD":"开曼元","KZT":"哈萨克斯坦坚戈","LAK":"老挝基普","LBP":"黎巴嫩镑","LKR":"斯里兰卡卢比","LRD":"利比里亚元","LSL":"莱索托洛蒂","LTL":"立陶宛立特","LTT":"立陶宛塔咯呐司","LUC":"卢森堡可兑换法郎","LUF":"卢森堡法郎","LUL":"卢森堡金融法郎","LVL":"拉脱维亚拉特","LVR":"拉脱维亚卢布","LYD":"利比亚第纳尔","MAD":"摩洛哥迪拉姆","MAF":"摩洛哥法郎","MCF":"摩纳哥法郎","MDC":"摩尔多瓦库邦","MDL":"摩尔多瓦列伊","MGA":"马达加斯加阿里亚里","MGF":"马达加斯加法郎","MKD":"马其顿第纳尔","MKN":"马其顿第纳尔 (1992–1993)","MLF":"马里法郎","MMK":"缅甸元","MNT":"蒙古图格里克","MOP":"澳门币","MRO":"毛里塔尼亚乌吉亚 (1973–2017)","MRU":"毛里塔尼亚乌吉亚","MTL":"马耳他里拉","MTP":"马耳他镑","MUR":"毛里求斯卢比","MVP":"马尔代夫卢比(1947–1981)","MVR":"马尔代夫卢菲亚","MWK":"马拉维克瓦查","MXN":"墨西哥比索","MXP":"墨西哥银比索 (1861–1992)","MXV":"墨西哥（资金）","MYR":"马来西亚林吉特","MZE":"莫桑比克埃斯库多","MZM":"旧莫桑比克美提卡","MZN":"莫桑比克美提卡","NAD":"纳米比亚元","NGN":"尼日利亚奈拉","NIC":"尼加拉瓜科多巴 (1988–1991)","NIO":"尼加拉瓜科多巴","NLG":"荷兰盾","NOK":"挪威克朗","NPR":"尼泊尔卢比","NZD":"新西兰元","OMR":"阿曼里亚尔","PAB":"巴拿马巴波亚","PEI":"秘鲁印第","PEN":"秘鲁索尔","PES":"秘鲁索尔 (1863–1965)","PGK":"巴布亚新几内亚基那","PHP":"菲律宾比索","PKR":"巴基斯坦卢比","PLN":"波兰兹罗提","PLZ":"波兰兹罗提 (1950–1995)","PTE":"葡萄牙埃斯库多","PYG":"巴拉圭瓜拉尼","QAR":"卡塔尔里亚尔","RHD":"罗得西亚元","ROL":"旧罗马尼亚列伊","RON":"罗马尼亚列伊","RSD":"塞尔维亚第纳尔","RUB":"俄罗斯卢布","RUR":"俄国卢布 (1991–1998)","RWF":"卢旺达法郎","SAR":"沙特里亚尔","SBD":"所罗门群岛元","SCR":"塞舌尔卢比","SDD":"苏丹第纳尔 (1992–2007)","SDG":"苏丹镑","SDP":"旧苏丹镑","SEK":"瑞典克朗","SGD":"新加坡元","SHP":"圣赫勒拿群岛磅","SIT":"斯洛文尼亚托拉尔","SKK":"斯洛伐克克朗","SLL":"塞拉利昂利昂","SOS":"索马里先令","SRD":"苏里南元","SRG":"苏里南盾","SSP":"南苏丹镑","STD":"圣多美和普林西比多布拉 (1977–2017)","STN":"圣多美和普林西比多布拉","SUR":"苏联卢布","SVC":"萨尔瓦多科朗","SYP":"叙利亚镑","SZL":"斯威士兰里兰吉尼","THB":"泰铢","TJR":"塔吉克斯坦卢布","TJS":"塔吉克斯坦索莫尼","TMM":"土库曼斯坦马纳特 (1993–2009)","TMT":"土库曼斯坦马纳特","TND":"突尼斯第纳尔","TOP":"汤加潘加","TPE":"帝汶埃斯库多","TRL":"土耳其里拉 (1922–2005)","TRY":"土耳其里拉","TTD":"特立尼达和多巴哥元","TWD":"新台币","TZS":"坦桑尼亚先令","UAH":"乌克兰格里夫纳","UAK":"乌克兰币","UGS":"乌干达先令 (1966–1987)","UGX":"乌干达先令","USD":"美元","USN":"美元（次日）","USS":"美元（当日）","UYI":"乌拉圭比索（索引单位）","UYP":"乌拉圭比索 (1975–1993)","UYU":"乌拉圭比索","UYW":"乌拉圭票面工资指数单位","UZS":"乌兹别克斯坦苏姆","VEB":"委内瑞拉玻利瓦尔 (1871–2008)","VEF":"委内瑞拉玻利瓦尔 (2008–2018)","VES":"委内瑞拉玻利瓦尔","VND":"越南盾","VNN":"越南盾 (1978–1985)","VUV":"瓦努阿图瓦图","WST":"萨摩亚塔拉","XAF":"中非法郎","XAG":"白银","XAU":"黄金","XBA":"欧洲复合单位","XBB":"欧洲货币联盟","XBC":"欧洲计算单位 (XBC)","XBD":"欧洲计算单位 (XBD)","XCD":"东加勒比元","XDR":"特别提款权","XEU":"欧洲货币单位","XFO":"法国金法郎","XFU":"法国法郎 (UIC)","XOF":"西非法郎","XPD":"钯","XPF":"太平洋法郎","XPT":"铂","XRE":"RINET 基金","XSU":"苏克雷","XTS":"测试货币代码","XUA":"非洲开发银行记账单位","XXX":"未知货币","YDD":"也门第纳尔","YER":"也门里亚尔","YUD":"南斯拉夫硬第纳尔 (1966–1990)","YUM":"南斯拉夫新第纳尔 (1994–2002)","YUN":"南斯拉夫可兑换第纳尔 (1990–1992)","YUR":"南斯拉夫改良第纳尔 (1992–1993)","ZAL":"南非兰特 (金融)","ZAR":"南非兰特","ZMK":"赞比亚克瓦查 (1968–2012)","ZMW":"赞比亚克瓦查","ZRN":"新扎伊尔 (1993–1998)","ZRZ":"扎伊尔 (1971–1993)","ZWD":"津巴布韦元 (1980–2008)","ZWL":"津巴布韦元 (2009)","ZWR":"津巴布韦元 (2008)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0}（{1}）"}}},"availableLocales":["zh-Hans-MO"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
