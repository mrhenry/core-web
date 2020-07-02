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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("si").length
)) {
// Intl.DisplayNames.~locale.si
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"si":{"types":{"language":{"long":{"aa":"අෆාර්","ab":"ඇබ්කාසියානු","ace":"අචයිනිස්","ada":"අඩන්ග්මෙ","ady":"අඩිඝෙ","aeb":"ටියුනිසියනු අරාබි","af":"අෆ්රිකාන්ස්","agq":"ඇගම්","ain":"අයිනු","ak":"අකාන්","ale":"ඇලුඑට්","alt":"සතර්න් අල්ටය්","am":"ඇම්හාරික්","an":"ඇරගොනීස්","anp":"අන්ගික","ar":"අරාබි","ar-001":"නූතන සම්මත අරාබි","arn":"මපුචෙ","arp":"ඇරපහො","as":"ඇසෑම්","asa":"අසු","ast":"ඇස්ටියුරියන්","av":"ඇවරික්","awa":"අවදි","ay":"අයිමරා","az":"අසර්බයිජාන්","ba":"බාෂ්කිර්","ban":"බැලිනීස්","bas":"බසා","be":"බෙලරුසියානු","bem":"බෙම්බා","bez":"බෙනා","bg":"බල්ගේරියානු","bgn":"බටහිර බලොචි","bho":"බොජ්පුරි","bi":"බිස්ලමා","bin":"බිනි","bla":"සික්සිකා","bm":"බම්බරා","bn":"බෙංගාලි","bo":"ටිබෙට්","br":"බ්‍රේටොන්","brx":"බොඩො","bs":"බොස්නියානු","bug":"බුගිනීස්","byn":"බ්ලින්","ca":"කැටලන්","ccp":"චක්මා","ce":"චෙච්නියානු","ceb":"සෙබුඅනො","cgg":"චිගා","ch":"චමොරො","chk":"චූකීස්","chm":"මරි","cho":"චොක්ටොව්","chr":"චෙරොකී","chy":"චෙයෙන්නෙ","ckb":"සොරානි කුර්දිෂ්","co":"කෝසිකානු","crs":"සෙසෙල්ව ක්‍රොල් ෆ්‍රෙන්ච්","cs":"චෙක්","cu":"චර්ච් ස්ලැවික්","cv":"චවේෂ්","cy":"වෙල්ෂ්","da":"ඩැනිශ්","dak":"ඩකොටා","dar":"ඩාර්ග්වා","dav":"ටයිටා","de":"ජර්මන්","de-AT":"ඔස්ට්‍රියානු ජර්මන්","de-CH":"ස්විස් උසස් ජර්මන්","dgr":"ඩොග්‍රිබ්","dje":"සර්මා","dsb":"පහළ සෝබියානු","dua":"ඩුආලා","dv":"ඩිවෙහි","dyo":"ජොල-ෆෝනියි","dz":"ඩිසොන්කා","dzg":"ඩසාගා","ebu":"එම්බු","ee":"ඉව්","efi":"එෆික්","eka":"එකජුක්","el":"ග්‍රීක","en":"ඉංග්‍රීසි","en-AU":"ඕස්ට්‍රේලියානු ඉංග්‍රීසි","en-CA":"කැනේඩියානු ඉංග්‍රීසි","en-GB":"බ්‍රිතාන්‍ය ඉංග්‍රීසි","en-US":"ඇමෙරිකානු ඉංග්‍රීසි","eo":"එස්පැරන්ටෝ","es":"ස්පාඤ්ඤ","es-419":"ලතින් ඇමරිකානු ස්පාඤ්ඤ","es-ES":"යුරෝපීය ස්පාඤ්ඤ","es-MX":"මෙක්සිකානු ස්පාඤ්ඤ","et":"එස්තෝනියානු","eu":"බාස්ක්","ewo":"එවොන්ඩො","fa":"පර්සියානු","ff":"ෆුලාහ්","fi":"ෆින්ලන්ත","fil":"පිලිපීන","fj":"ෆීජි","fo":"ෆාරෝස්","fon":"ෆොන්","fr":"ප්‍රංශ","fr-CA":"කැනේඩියානු ප්‍රංශ","fr-CH":"ස්විස් ප්‍රංශ","frc":"frc","fur":"ෆ්‍රියුලියන්","fy":"බටහිර ෆ්‍රිසියානු","ga":"අයර්ලන්ත","gaa":"ගා","gag":"ගගාස්","gan":"ගැන් චයිනිස්","gd":"ස්කොට්ටිශ් ගෙලික්","gez":"ගීස්","gil":"ගිල්බර්ටීස්","gl":"ගැලීසියානු","gn":"ගුවාරනි","gor":"ගොරොන්ටාලො","gsw":"ස්විස් ජර්මානු","gu":"ගුජරාටි","guz":"ගුසී","gv":"මැන්ක්ස්","gwi":"ග්විචින්","ha":"හෝසා","hak":"හකා චයිනිස්","haw":"හවායි","he":"හීබෲ","hi":"හින්දි","hil":"හිලිගෙනන්","hmn":"මොන්ග්","hr":"කෝඒෂියානු","hsb":"ඉහළ සෝබියානු","hsn":"සියැන් චීන","ht":"හයිටි","hu":"හන්ගේරියානු","hup":"හුපා","hy":"ආර්මේනියානු","hz":"හෙරෙරො","ia":"ඉන්ටලින්ගුආ","iba":"ඉබන්","ibb":"ඉබිබියො","id":"ඉන්දුනීසියානු","ig":"ඉග්බෝ","ii":"සිචුආන් යී","ilo":"ඉලොකො","inh":"ඉන්ගුෂ්","io":"ඉඩො","is":"අයිස්ලන්ත","it":"ඉතාලි","iu":"ඉනුක්ටිටුට්","ja":"ජපන්","jbo":"ලොජ්බන්","jgo":"නොම්බා","jmc":"මැකාමී","jv":"ජාවා","ka":"ජෝර්ජියානු","kab":"කාබිල්","kac":"කචින්","kaj":"ජ්ජු","kam":"කැම්බා","kbd":"කබාර්ඩියන්","kcg":"ට්යප්","kde":"මැකොන්ඩ්","kea":"කබුවෙර්ඩියානු","kfo":"කොරො","kha":"ඛසි","khq":"කොයිරා චිනි","ki":"කිකුයු","kj":"කුයන්යමා","kk":"කසාඛ්","kkj":"කකො","kl":"කලාලිසට්","kln":"කලෙන්ජන්","km":"කමර්","kmb":"කිම්බුන්ඩු","kn":"කණ්ණඩ","ko":"කොරියානු","koi":"කොමි-පර්මියාක්","kok":"කොන්කනි","kpe":"ක්පෙලෙ","kr":"කනුරි","krc":"කරන්චි-බාකර්","krl":"කැරෙලියන්","kru":"කුරුඛ්","ks":"කාෂ්මීර්","ksb":"ශාම්බලා","ksf":"බාෆියා","ksh":"කොලොග්නියන්","ku":"කුර්දි","kum":"කුමික්","kv":"කොමි","kw":"කෝනීසියානු","ky":"කිර්ගිස්","la":"ලතින්","lad":"ලඩිනො","lag":"ලංගි","lb":"ලක්සැම්බර්ග්","lez":"ලෙස්ගියන්","lg":"ගන්ඩා","li":"ලිම්බර්ගිශ්","lkt":"ලකොට","ln":"ලින්ගලා","lo":"ලාඕ","lou":"lou","loz":"ලොසි","lrc":"උතුරු ලුරි","lt":"ලිතුවේනියානු","lu":"ලුබා-කටන්ගා","lua":"ලුබ-ලුලුඅ","lun":"ලුන්ඩ","luo":"ලුඔ","lus":"මිසො","luy":"ලුයියා","lv":"ලැට්වියානු","mad":"මදුරීස්","mag":"මඝහි","mai":"මයිතිලි","mak":"මකාසාර්","mas":"මසායි","mdf":"මොක්ශා","men":"මෙන්ඩෙ","mer":"මෙරු","mfe":"මොරිස්යෙම්","mg":"මලගාසි","mgh":"මඛුවා-මීටෝ","mgo":"මෙටා","mh":"මාශලීස්","mi":"මාවොරි","mic":"මික්මැක්","min":"මිනන්ග්කබාවු","mk":"මැසිඩෝනියානු","ml":"මලයාලම්","mn":"මොංගෝලියානු","mni":"මනිපුරි","moh":"මොහොව්ක්","mos":"මොස්සි","mr":"මරාති","ms":"මැලේ","mt":"මොල්ටිස්","mua":"මුන්ඩන්","mul":"බහු භාෂා","mus":"ක්‍රීක්","mwl":"මිරන්ඩීස්","my":"බුරුම","myv":"එර්ස්යා","mzn":"මැසන්ඩරනි","na":"නෞරු","nan":"මින් නන් චයිනිස්","nap":"නියාපොලිටන්","naq":"නාමා","nb":"නෝර්වීජියානු බොක්මල්","nd":"උතුරු එන්ඩිබෙලෙ","nds":"පහළ ජර්මන්","nds-NL":"පහළ සැක්සන්","ne":"නේපාල","new":"නෙවාරි","ng":"න්ඩොන්ගා","nia":"නියාස්","niu":"නියුඑන්","nl":"ලන්දේසි","nl-BE":"ෆ්ලෙමිශ්","nmg":"කුවාසිඔ","nn":"නෝර්වීජියානු නයිනෝර්ස්ක්","nnh":"න්ගියාම්බූන්","nog":"නොගායි","nqo":"එන්‘කෝ","nr":"සෞත් ඩ්බේල්","nso":"නොදර්න් සොතො","nus":"නොයර්","nv":"නවාජො","ny":"න්යන්ජා","nyn":"නයන්කෝලෙ","oc":"ඔසිටාන්","om":"ඔරොමෝ","or":"ඔඩියා","os":"ඔසිටෙක්","pa":"පන්ජාබි","pag":"පන්ගසීනන්","pam":"පන්පන්ග","pap":"පපියමෙන්ටො","pau":"පලවුවන්","pcm":"නෛජීරියන් පෙන්ගින්","pl":"පෝලන්ත","prg":"පෘශියන්","ps":"පෂ්ටො","pt":"පෘතුගීසි","pt-BR":"බ්‍රසීල පෘතුගීසි","pt-PT":"යුරෝපීය පෘතුගීසි","qu":"ක්වීචුවා","quc":"කියිචේ","rap":"රපනුයි","rar":"රරොටොන්ගන්","rm":"රොමෑන්ශ්","rn":"රුන්ඩි","ro":"රොමේනියානු","ro-MD":"මොල්ඩවිආනු","rof":"රෝම්බෝ","root":"රූට්","ru":"රුසියානු","rup":"ඇරොමානියානු","rw":"කින්යර්වන්ඩා","rwk":"ර්වා","sa":"සංස්කෘත","sad":"සන්ඩවෙ","sah":"සඛා","saq":"සම්බුරු","sat":"සෑන්ටලි","sba":"න්ගම්බෙ","sbp":"සංගු","sc":"සාර්ඩිනිඅන්","scn":"සිසිලියන්","sco":"ස්කොට්ස්","sd":"සින්ධි","sdh":"දකුණු කුර්දි","se":"උතුරු සාමි","seh":"සෙනා","ses":"කෝයිරාබොරො සෙන්නි","sg":"සන්ග්‍රෝ","shi":"ටචේල්හිට්","shn":"ශාන්","si":"සිංහල","sk":"ස්ලෝවැක්","sl":"ස්ලෝවේනියානු","sm":"සෑමොඅන්","sma":"දකුණු සාමි","smj":"ලුලේ සාමි","smn":"ඉනාරි සාමි","sms":"ස්කොල්ට් සාමි","sn":"ශෝනා","snk":"සොනින්කෙ","so":"සෝමාලි","sq":"ඇල්බේනියානු","sr":"සර්බියානු","srn":"ස්‍රන් ටොන්ගො","ss":"ස්වති","ssy":"සහො","st":"සතර්න් සොතො","su":"සන්ඩනීසියානු","suk":"සුකුමා","sv":"ස්වීඩන්","sw":"ස්වාහිලි","sw-CD":"කොංගෝ ස්වාහිලි","swb":"කොමොරියන්","syr":"ස්‍රයෑක්","ta":"දෙමළ","te":"තෙළිඟු","tem":"ටිම්නෙ","teo":"ටෙසෝ","tet":"ටේටම්","tg":"ටජික්","th":"තායි","ti":"ටිග්‍රින්යා","tig":"ටීග්‍රෙ","tk":"ටර්ක්මෙන්","tlh":"ක්ලින්ගොන්","tn":"ස්වනා","to":"ටොංගා","tpi":"ටොක් පිසින්","tr":"තුර්කි","trv":"ටරොකො","ts":"සොන්ග","tt":"ටාටර්","tum":"ටුම්බුකා","tvl":"ටුවාලු","twq":"ටසවාක්","ty":"ටහිටියන්","tyv":"ටුවිනියන්","tzm":"මධ්‍යම ඇට්ලස් ටමසිට්","udm":"අඩ්මර්ට්","ug":"උයිගර්","uk":"යුක්රේනියානු","umb":"උබුන්ඩු","und":"නොදන්නා භාෂාව","ur":"උර්දු","uz":"උස්බෙක්","vai":"වයි","ve":"වෙන්ඩා","vi":"වියට්නාම්","vo":"වොලපූක්","vun":"වුන්ජෝ","wa":"වෑලූන්","wae":"වොල්සර්","wal":"වොලෙට්ට","war":"වොරෙය්","wbp":"වොපිරි","wo":"වොලොෆ්","wuu":"වූ චයිනිස්","xal":"කල්මික්","xh":"ශෝසා","xog":"සොගා","yav":"යන්ග්බෙන්","ybb":"යෙම්බා","yi":"යිඩිශ්","yo":"යොරූබා","yue":"කැන්ටොනීස්","zgh":"සම්මත මොරොක්කෝ ටමසිග්ත්","zh":"චීන","zh-Hans":"සරල චීන","zh-Hant":"සාම්ප්‍රදායික චීන","zu":"සුලු","zun":"සුනි","zxx":"වාග් විද්‍යා අන්තර්ගතයක් නැත","zza":"සාසා"},"short":{"az":"අසීරී","en-GB":"එ.රා ඉංග්‍රීසි","en-US":"එ.ජ ඉංග්‍රීසි"},"narrow":{}},"region":{"long":{"142":"ආසියාව","143":"මධ්‍යම ආසියාව","145":"බටහිර ආසියාව","150":"යුරෝපය","151":"නැගෙනහිර යුරෝපය","154":"උතුරු යුරෝපය","155":"බටහිර යුරෝපය","202":"උප-සහරානු අප්‍රිකාව","419":"ලතින් ඇමෙරිකාව","001":"ලෝකය","002":"අප්‍රිකාව","003":"උතුරු ඇමෙරිකාව","005":"දකුණු ඇමෙරිකාව","009":"ඕෂනියාව","011":"බටහිරදිග අප්‍රිකාව","013":"මධ්‍යම ඇමෙරිකාව","014":"පෙරදිග අප්‍රිකාව","015":"උතුරුදිග අප්‍රිකාව","017":"මධ්‍යම අප්‍රිකාව","018":"දකුණුදිග අප්‍රිකාව","019":"ඇමරිකාව","021":"උතුරුදිග ඇමෙරිකාව","029":"කැරීබියන්","030":"නැගෙනහිර ආසියාව","034":"දකුණු ආසියාව","035":"අග්නිදිග ආසියාව","039":"දකුණුදිග යුරෝපය","053":"ඕස්ට්‍රලේෂියාව","054":"මෙලනීසියාව","057":"මයික්‍රෝනීසියානු කළාපය","061":"පොලිනීසියාව","AC":"ඇසෙන්ෂන් දිවයින","AD":"ඇන්ඩෝරාව","AE":"එක්සත් අරාබි එමිර් රාජ්‍යය","AF":"ඇෆ්ගනිස්ථානය","AG":"ඇන්ටිගුවා සහ බාබියුඩාව","AI":"ඇන්ගුයිලාව","AL":"ඇල්බේනියාව","AM":"ආර්මේනියාව","AO":"ඇන්ගෝලාව","AQ":"ඇන්ටාක්ටිකාව","AR":"ආර්ජෙන්ටිනාව","AS":"ඇමරිකානු සැමෝවා","AT":"ඔස්ට්‍රියාව","AU":"ඕස්ට්‍රේලියාව","AW":"අරූබා","AX":"ඕලන්ඩ් දූපත්","AZ":"අසර්බයිජානය","BA":"බොස්නියාව සහ හර්සගොවීනාව","BB":"බාබඩෝස්","BD":"බංග්ලාදේශය","BE":"බෙල්ජියම","BF":"බර්කිනා ෆාසෝ","BG":"බල්ගේරියාව","BH":"බහරේන්","BI":"බුරුන්දි","BJ":"බෙනින්","BL":"ශාන්ත බර්තලෙමි","BM":"බර්මියුඩා","BN":"බෲනායි","BO":"බොලීවියාව","BQ":"කැරිබියානු නෙදර්ලන්තය","BR":"බ්‍රසීලය","BS":"බහමාස්","BT":"භූතානය","BV":"බුවට් දුපත්","BW":"බොට්ස්වානා","BY":"බෙලරුස්","BZ":"බෙලීස්","CA":"කැනඩාව","CC":"කොකෝස් දූපත්","CD":"කොංගෝව (ඩීආර්සී)","CF":"මධ්‍යම අප්‍රිකානු ජනරජය","CG":"කොංගො - බ්‍රසාවිල්","CH":"ස්විස්ටර්ලන්තය","CI":"කෝට් දි අයිවරි","CK":"කුක් දූපත්","CL":"චිලී","CM":"කැමරූන්","CN":"චීනය","CO":"කොළොම්බියාව","CP":"ක්ලීපර්ටන් දූපත","CR":"කොස්ටරිකාව","CU":"කියුබාව","CV":"කේප් වර්ඩ්","CW":"කුරකාවෝ","CX":"ක්‍රිස්මස් දූපත","CY":"සයිප්‍රසය","CZ":"චෙචියාව","DE":"ජර්මනිය","DG":"දියාගෝ ගාර්සියා","DJ":"ජිබුටි","DK":"ඩෙන්මාර්කය","DM":"ඩොමිනිකාව","DO":"ඩොමිනිකා ජනරජය","DZ":"ඇල්ජීරියාව","EA":"සෙයුටා සහ මෙලිල්ලා","EC":"ඉක්වදෝරය","EE":"එස්තෝනියාව","EG":"ඊජිප්තුව","EH":"බටහිර සහරාව","ER":"එරිත්‍රියාව","ES":"ස්පාඤ්ඤය","ET":"ඉතියෝපියාව","EU":"යුරෝපා සංගමය","EZ":"යුරෝ කලාපය","FI":"ෆින්ලන්තය","FJ":"ෆීජී","FK":"ෆෝක්ලන්ත දූපත්","FM":"මයික්‍රොනීසියාව","FO":"ෆැරෝ දූපත්","FR":"ප්‍රංශය","GA":"ගැබොන්","GB":"එක්සත් රාජධානිය","GD":"ග්‍රැනඩාව","GE":"ජෝර්ජියාව","GF":"ප්‍රංශ ගයනාව","GG":"ගර්න්සිය","GH":"ඝානාව","GI":"ජිබ්‍රෝල්ටාව","GL":"ග්‍රීන්ලන්තය","GM":"ගැම්බියාව","GN":"ගිණියාව","GP":"ග්වෝඩලෝප්","GQ":"සමක ගිනියාව","GR":"ග්‍රීසිය","GS":"දකුණු ජෝර්ජියාව සහ දකුණු සැන්ඩ්විච් දූපත්","GT":"ගෝතමාලාව","GU":"ගුවාම්","GW":"ගිනි බිසව්","GY":"ගයනාව","HK":"හොංකොං චීන විශේෂ පරිපාලන කලාපය","HM":"හර්ඩ් දූපත සහ මැක්ඩොනල්ඩ් දූපත්","HN":"හොන්ඩුරාස්","HR":"ක්‍රොඒෂියාව","HT":"හයිටි","HU":"හන්ගේරියාව","IC":"කැනරි සූපත්","ID":"ඉන්දුනීසියාව","IE":"අයර්ලන්තය","IL":"ඊශ්‍රායලය","IM":"අයිල් ඔෆ් මෑන්","IN":"ඉන්දියාව","IO":"බ්‍රිතාන්‍ය ඉන්දීය සාගර බල ප්‍රදේශය","IQ":"ඉරාකය","IR":"ඉරානය","IS":"අයිස්ලන්තය","IT":"ඉතාලිය","JE":"ජර්සි","JM":"ජැමෙයිකාව","JO":"ජෝර්දානය","JP":"ජපානය","KE":"කෙන්යාව","KG":"කිර්ගිස්තානය","KH":"කාම්බෝජය","KI":"කිරිබති","KM":"කොමොරෝස්","KN":"ශාන්ත කිට්ස් සහ නේවිස්","KP":"උතුරු කොරියාව","KR":"දකුණු කොරියාව","KW":"කුවේටය","KY":"කේමන් දූපත්","KZ":"කසකස්තානය","LA":"ලාඕසය","LB":"ලෙබනනය","LC":"ශාන්ත ලුසියා","LI":"ලික්ටන්ස්ටයින්","LK":"ශ්‍රී ලංකාව","LR":"ලයිබීරියාව","LS":"ලෙසතෝ","LT":"ලිතුවේනියාව","LU":"ලක්ශම්බර්ග්","LV":"ලැට්වියාව","LY":"ලිබියාව","MA":"මොරොක්කෝව","MC":"මොනාකෝව","MD":"මොල්ඩෝවාව","ME":"මොන්ටෙනීග්‍රෝ","MF":"ශාන්ත මාර්ටින්","MG":"මැඩගස්කරය","MH":"මාෂල් දූපත්","MK":"උතුරු මැසිඩෝනියාව","ML":"මාලි","MM":"මියන්මාරය (බුරුමය)","MN":"මොන්ගෝලියාව","MO":"මකාවු එස්ඒආර්","MP":"උතුරු මරියානා දූපත්","MQ":"මර්ටිනික්","MR":"මොරිටේනියාව","MS":"මොන්සෙරාට්","MT":"මෝල්ටාව","MU":"මුරුසිය","MV":"මාල දිවයින","MW":"මලාවි","MX":"මෙක්සිකෝව","MY":"මැලේසියාව","MZ":"මොසැම්බික්","NA":"නැමීබියාව","NC":"නව කැලිඩෝනියාව","NE":"නයිජර්","NF":"නෝෆෝක් දූපත","NG":"නයිජීරියාව","NI":"නිකරගුවාව","NL":"නෙදර්ලන්තය","NO":"නෝර්වේ","NP":"නේපාලය","NR":"නාවුරු","NU":"නියූ","NZ":"නවසීලන්තය","OM":"ඕමානය","PA":"පැනමාව","PE":"පේරු","PF":"ප්‍රංශ පොලිනීසියාව","PG":"පැපුවා නිව් ගිනියාව","PH":"පිලිපීනය","PK":"පාකිස්තානය","PL":"පෝලන්තය","PM":"ශාන්ත පියරේ සහ මැකෝලන්","PN":"පිට්කෙය්න් දූපත්","PR":"පුවර්ටෝ රිකෝ","PS":"පලස්තීන රාජ්‍යය","PT":"පෘතුගාලය","PW":"පලාවු","PY":"පැරගුවේ","QA":"කටාර්","QO":"ඈත ඕෂනියාව","RE":"රීයුනියන්","RO":"රුමේනියාව","RS":"සර්බියාව","RU":"රුසියාව","RW":"රුවන්ඩාව","SA":"සෞදි අරාබිය","SB":"සොලමන් දූපත්","SC":"සීශෙල්ස්","SD":"සූඩානය","SE":"ස්වීඩනය","SG":"සිංගප්පූරුව","SH":"ශාන්ත හෙලේනා","SI":"ස්ලෝවේනියාව","SJ":"ස්වෙල්බර්ඩ් සහ ජේන් මයේන්","SK":"ස්ලෝවැකියාව","SL":"සියරාලියෝන්","SM":"සැන් මැරිනෝ","SN":"සෙනගාලය","SO":"සෝමාලියාව","SR":"සුරිනාමය","SS":"දකුණු සුඩානය","ST":"සාඕ තෝම් සහ ප්‍රින්සිප්","SV":"එල් සැල්වදෝරය","SX":"ශාන්ත මාර්ටෙන්","SY":"සිරියාව","SZ":"එස්වාටිනි","TA":"ට්‍රිස්ටන් ද කුන්හා","TC":"ටර්ක්ස් සහ කයිකොස් දූපත්","TD":"චැච්","TF":"දකුණු ප්‍රංශ දූපත් සමූහය","TG":"ටොගෝ","TH":"තායිලන්තය","TJ":"ටජිකිස්තානය","TK":"ටොකලාවු","TL":"ටිමෝර් - ලෙස්ත්","TM":"ටර්ක්මෙනිස්ථානය","TN":"ටියුනීසියාව","TO":"ටොංගා","TR":"තුර්කිය","TT":"ට්‍රිනිඩෑඩ් සහ ටොබැගෝ","TV":"ටුවාලූ","TW":"තායිවානය","TZ":"ටැන්සානියාව","UA":"යුක්රේනය","UG":"උගන්ඩාව","UM":"එක්සත් ජනපද ඈත දූපත්","UN":"එක්සත් ජාතීන්","US":"එක්සත් ජනපදය","UY":"උරුගුවේ","UZ":"උස්බෙකිස්ථානය","VA":"වතිකානු නගරය","VC":"ශාන්ත වින්සන්ට් සහ ග්‍රෙනඩින්ස්","VE":"වෙනිසියුලාව","VG":"බ්‍රිතාන්‍ය වර්ජින් දූපත්","VI":"ඇමරිකානු වර්ජින් දූපත්","VN":"වියට්නාමය","VU":"වනුවාටු","WF":"වැලිස් සහ ෆුටුනා","WS":"සැමෝවා","XA":"ව්‍යාජ-උච්චාරණ","XB":"ව්‍යාජ-බිඩි","XK":"කොසෝවෝ","YE":"යේමනය","YT":"මයෝට්","ZA":"දකුණු අප්‍රිකාව","ZM":"සැම්බියාව","ZW":"සිම්බාබ්වේ","ZZ":"හඳුනා නොගත් කළාපය"},"short":{"GB":"එ.රා","HK":"හොංකොං","MO":"මකාවු","PS":"පලස්තීනය","UN":"එක්සත් ජාතීන්","US":"එ.ජ"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"අරාබි","Armi":"Armi","Armn":"ආර්මේනියානු","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"බෙංගාලි","Bhks":"Bhks","Bopo":"බොපොමොෆෝ","Brah":"Brah","Brai":"බ්‍රේල්","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Copt":"Copt","Cprt":"Cprt","Cyrl":"සිරිලික්","Deva":"දේවනාගරී","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"ඉතියෝපියානු","Geor":"ජෝර්ජියානු","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"ග්‍රීක","Gujr":"ගුජරාටි","Guru":"ගුර්මුඛි","Hanb":"හැන්ඩ්බ්","Hang":"හැන්ගුල්","Hani":"හන්","Hano":"Hano","Hans":"සුළුකළ","Hant":"සාම්ප්‍රදායික","Hatr":"Hatr","Hebr":"හීබෲ","Hira":"හිරඟනා","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"ජෑපනීස් සිලබරීස්","Hung":"Hung","Ital":"Ital","Jamo":"ජාමො","Java":"Java","Jpan":"ජපන්","Kali":"Kali","Kana":"කතකනා","Khar":"Khar","Khmr":"කමර්","Khoj":"Khoj","Knda":"කණ්ණඩ","Kore":"කොරියානු","Kthi":"Kthi","Lana":"Lana","Laoo":"ලාඕ","Latn":"ලතින්","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"මලයාලම්","Modi":"Modi","Mong":"මොන්ගෝලියානු","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"මියන්මාර","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"ඔරියා","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"සිංහල","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"දෙමළ","Tang":"Tang","Tavt":"Tavt","Telu":"තෙළිඟු","Tfng":"Tfng","Tglg":"Tglg","Thaa":"තාන","Thai":"තායි","Tibt":"ටි‍බෙට්","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"ගණිතමය සංකේත","Zsye":"ඉමොජි","Zsym":"සංකේත","Zxxx":"අලිඛිත","Zyyy":"පොදු","Zzzz":"නොදත් අක්ෂර මාලාව"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"එක්සත් අරාබි එමිරේට්ස් ඩිරාම්","AFA":"AFA","AFN":"ඇෆ්ගනිථාන ඇෆ්ගනි","ALK":"ALK","ALL":"ඇල්බේනියානු ලෙක්","AMD":"ආර්මේනියානු ඩ්‍රෑම්","ANG":"නෙදර්ලන්ත ඇන්ටිලියන් ගිල්ඩර්","AOA":"ඇන්ගෝලානු ක්වන්සා","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ආර්ජන්ටිනා පෙසෝ","ATS":"ATS","AUD":"ඔස්ට්‍රේලියානු ඩොලර්","AWG":"අරූබානු ෆ්ලෝරින්","AZM":"AZM","AZN":"අසර්බයිජානු මනාට්","BAD":"BAD","BAM":"බොස්නියා හර්සගොවීනා පරිවර්ත්‍ය මාර්ක්","BAN":"BAN","BBD":"බාබේඩියානු ඩොලර්","BDT":"බංග්ලාදේශ් ටකා","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"බල්ගේරියානු ලිව්","BGO":"BGO","BHD":"බහරේන් ඩිනාර්","BIF":"බුරුන්දි ෆ්‍රෑන්ක්","BMD":"බර්මියුඩානු ඩොලර්","BND":"බෘනායි ඩොලර්","BOB":"බොලිවියානු බොලිවියානෝ","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"බ්‍රසීල රියල්","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"බහමානු ඩොලර්","BTN":"භූතාන නගුල්ට්‍රම්","BUK":"BUK","BWP":"බොට්ස්වානා පුලා","BYB":"BYB","BYN":"බෙලරූස් රූබල්","BYR":"බෙලරූස් රූබල් (2000–2016)","BZD":"බෙලීස් ඩොලර්","CAD":"කැනේඩියානු ඩොලර්","CDF":"කොංගෝ ෆ්‍රෑන්ක්","CHE":"CHE","CHF":"ස්විස් ෆ්‍රෑන්ක්","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"චිලි පැසෝ","CNH":"චීන යුආන් (එතෙර)","CNX":"CNX","CNY":"චීන යුආන්","COP":"කොලොම්බියානු පෙසෝ","COU":"COU","CRC":"කොස්ට රිකා කොලෝන්","CSD":"CSD","CSK":"CSK","CUC":"මාරුකළ හැකි කියුබානු පැසෝ","CUP":"කියුබානු පැසෝ","CVE":"කේප් වර්ඩ් එස්කියුඩෝ","CYP":"CYP","CZK":"චෙක් රිපබ්ලික් කොරූනා","DDM":"DDM","DEM":"DEM","DJF":"ජිබූති ෆ්‍රෑන්ක්","DKK":"ඩැනිෂ් ක්‍රෝන්","DOP":"ඩොමිනිකානු පෙසෝ","DZD":"ඇල්ගේරියානු ඩිනාර්","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"ඊජිප්තු පවුම්","ERN":"එරිත්‍රියානු නැක්ෆා","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ඉතියෝපියානු බීර්","EUR":"යුරෝ","FIM":"FIM","FJD":"ෆිජියන් ඩොලර්","FKP":"ෆෝක්ලන්ඩ් දූපත් පවුම්","FRF":"FRF","GBP":"බ්‍රිතාන්‍ය ස්ටර්ලින් පවුම්","GEK":"GEK","GEL":"ජෝජියානු ලැරී","GHC":"GHC","GHS":"ඝානා සෙඩි","GIP":"ජිබ්‍රෝල්ටා පවුම්","GMD":"ගැම්බියානු දලාසි","GNF":"ගිනියානු ෆ්රෑන්ක්","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"ගෝතමාලානු ක්වෙට්සල්","GWE":"GWE","GWP":"GWP","GYD":"ගයනා ඩොලර්","HKD":"හොංකොං ඩොලර්","HNL":"හොන්ඩුරානු ලෙම්පිරා","HRD":"HRD","HRK":"ක්‍රොඒෂියානු කූනා","HTG":"හයිටි ගෝර්ඩ්","HUF":"හංගේරියානු ෆරින්ට්","IDR":"ඉන්දුනීසියානු රුපියා","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ඊශ්‍රායල නව ශෙකල්","INR":"ඉන්දියානු රුපියල්","IQD":"ඉරාක ඩිනාර්","IRR":"ඉරාන රියාල්","ISJ":"ISJ","ISK":"අයිස්ලන්තික ක්‍රෝනා","ITL":"ITL","JMD":"ජැමෙයිකානු ඩොලර්","JOD":"ජෝර්දාන් ඩිනාර්","JPY":"ජපන් යෙන්","KES":"කෙන්යානු ශිලිං","KGS":"කිරිගිස්ථාන සම්","KHR":"කාම්බෝජ රියේල්","KMF":"කොමොරියානු ෆ්‍රෑන්ක්","KPW":"උතුරු කොරියානු වොන්","KRH":"KRH","KRO":"KRO","KRW":"දකුණු කොරියානු වොන්","KWD":"කුවේට් ඩිනාර්","KYD":"කේමන් දූපත් ඩොලර්","KZT":"කසකස්ථාන ටෙන්ග","LAK":"ලාඕස් කිප්","LBP":"ලෙබනන පවුම්","LKR":"ශ්‍රී ලංකා රුපියල","LRD":"ලයිබේරියානු ඩොලර්","LSL":"LSL","LTL":"ලිතුවේනියානු","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"ලැට්වියානු ලැට්ස්","LVR":"LVR","LYD":"ලිබියානු ඩිනාර්","MAD":"මොරොක්කෝ ඩිර්හැම්","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"මෝල්ඩෝවානු ලෙව්","MGA":"මලගාසි අරියාරි","MGF":"MGF","MKD":"මැසඩෝනියානු ඩිනාර්","MKN":"MKN","MLF":"MLF","MMK":"බුරුම ක්යාට්","MNT":"මොන්ගෝලියානු ටග්‍රික්","MOP":"මැකනීස් පටකා","MRO":"මුරුසි ඔයිගුයියා (1973–2017)","MRU":"මුරුසි ඔයිගුයියා","MTL":"MTL","MTP":"MTP","MUR":"මුරිසියානු රුපියල්","MVP":"MVP","MVR":"මාලදිවයින් රුෆියා","MWK":"මලාවි ක්වාචා","MXN":"මෙක්සිකානු ඩොලර්","MXP":"MXP","MXV":"MXV","MYR":"මැලේසියානු රින්ගිට්","MZE":"MZE","MZM":"MZM","MZN":"මොසැම්බිකන් මෙටිකල්","NAD":"නැමීබියානු ඩොලර්","NGN":"නයිජීරියානු නයිරා","NIC":"NIC","NIO":"නිකරගුවානු කොඩෝබා","NLG":"NLG","NOK":"නොර්වීජියන් ක්‍රෝන්","NPR":"නේපාල රුපියල්","NZD":"නවසීලන්ත ඩොලර්","OMR":"ඕමාන් රියාල්","PAB":"පැනමා බැල්බෝ","PEI":"PEI","PEN":"පේරු සොල්","PES":"PES","PGK":"පැපුවා නිව් ගිනියානු කිනා","PHP":"පිලිපීන පෙසෝ","PKR":"පාකිස්ථාන රුපියල්","PLN":"පොලිෂ් ස්ලොටි","PLZ":"PLZ","PTE":"PTE","PYG":"පැරගුවේ ගුවරානි","QAR":"කටාර් රියාල්","RHD":"RHD","ROL":"ROL","RON":"රොමේනියානු ලෙව්","RSD":"සර්බියානු ඩිනාර්","RUB":"රුසියන් රූබල්","RUR":"RUR","RWF":"රුවන්ඩා ෆ්‍රෑන්ක්","SAR":"සවුදි රියාල්","SBD":"සොලමන් දූපත් ඩොලර්","SCR":"සීෂෙලියානු රුපියල","SDD":"SDD","SDG":"සුඩාන පවුම්","SDP":"SDP","SEK":"ස්වෙඩිෂ් ක්‍රෝනා","SGD":"සිංගප්පූරු ඩොලර්","SHP":"ශාන්ත හෙලේනා පවුම්","SIT":"SIT","SKK":"SKK","SLL":"සියරා ලියොන් ලියොන්","SOS":"සෝමාලියානු ශිලිං","SRD":"සුරිනාම් ඩොලර්","SRG":"SRG","SSP":"දකුණු සුඩාන පවුම්","STD":"සාඕ තෝම් සහ ප්‍රින්සිප් දොබ්‍රා (1977–2017)","STN":"සාඕ තෝම් සහ ප්‍රින්සිප් දොබ්‍රා","SUR":"SUR","SVC":"SVC","SYP":"සිරියානු පවුම්","SZL":"ස්වාසි ලිලන්ජනි","THB":"තායි බාත්","TJR":"TJR","TJS":"තජිකිස්ථාන සමොනි","TMM":"TMM","TMT":"තක්මෙනිස්ථාන මනාට්","TND":"ටියුනීසියානු ඩිනාර්","TOP":"ටොංගානු පාන්ගා","TPE":"TPE","TRL":"TRL","TRY":"තුර්කි ලිරා","TTD":"ට්‍රිනිඩෑඩ් සහ ටොබෑගෝ ඩොලර්","TWD":"නව තායිවාන ඩොලර්","TZS":"ටැන්සානියානු ශිලිං","UAH":"යුක්රේන හ්‍රිව්නියා","UAK":"UAK","UGS":"UGS","UGX":"උගන්ඩා ශිලිං","USD":"ඇමරිකානු ඩොලර්","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"උරුගුවේ පෙසෝ","UYW":"UYW","UZS":"උස්බෙකිස්ථාන සම්","VEB":"VEB","VEF":"වෙනිසියුලානු බොලිවර් (2008–2018)","VES":"වෙනිසියුලානු බොලිවර්","VND":"වියට්නාම ඩොන්","VNN":"VNN","VUV":"වනුවාටු වාටු","WST":"සැමෝවා ටාලා","XAF":"සිෆ්එ ෆ්රෑන්ක් බිඊඑසි","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"නැගෙනහිර කැරිබියානු ඩොලර්","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"සිෆ්එ ෆ්රෑන්ක් බිසීඊඑඔ","XPD":"XPD","XPF":"ප්‍රංශ පොලිනීසියානු ෆ්‍රෑන්ක්","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"නොදත් මුදල්","YDD":"YDD","YER":"යේමන රියාල්","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"දකුණු අප්‍රිකානු රැන්ඩ්","ZMK":"සැම්බියානු ක්වාචා (1968–2012)","ZMW":"සැම්බියානු ක්වාචා","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["si"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
