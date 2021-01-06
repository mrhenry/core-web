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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ne").length
)) {
// Intl.DisplayNames.~locale.ne
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"अफार","ab":"अब्खाजियाली","ace":"अचाइनिज","ach":"अकोली","ada":"अदाङमे","ady":"अदिघे","ae":"अवेस्तान","af":"अफ्रिकान्स","afh":"अफ्रिहिली","agq":"आघेम","ain":"अइनु","ak":"आकान","akk":"अक्कादियाली","akz":"अलाबामा","ale":"अलेउट","aln":"घेग अल्बानियाली","alt":"दक्षिणी आल्टाइ","am":"अम्हारिक","an":"अरागोनी","ang":"पुरातन अङ्ग्रेजी","anp":"अङ्गिका","ar":"अरबी","ar-001":"आधुनिक मानक अरबी","arc":"अरामाइक","arn":"मापुचे","aro":"अराओना","arp":"अरापाहो","arq":"अल्जेरियाली अरबी","arw":"अरावाक","ary":"मोरोक्कोली अरबी","arz":"इजिप्ट अरबी","as":"आसामी","asa":"आसु","ase":"अमेरिकी साङ्केतिक भाषा","ast":"अस्टुरियाली","av":"अवारिक","avk":"कोटावा","awa":"अवधी","ay":"ऐमारा","az":"अजरबैजानी","ba":"बास्किर","bal":"बालुची","ban":"बाली","bar":"बाभारियाली","bas":"बासा","bax":"बामुन","bbc":"बाताक तोबा","bbj":"घोमाला","be":"बेलारुसी","bej":"बेजा","bem":"बेम्बा","bew":"बेटावी","bez":"बेना","bfd":"बाफुट","bfq":"बडागा","bg":"बुल्गेरियाली","bgn":"पश्चिम बालोची","bho":"भोजपुरी","bi":"बिस्लाम","bik":"बिकोल","bin":"बिनी","bjn":"बन्जार","bkm":"कोम","bla":"सिक्सिका","bm":"बाम्बारा","bn":"बंगाली","bo":"तिब्बती","bpy":"विष्णुप्रिया","bqi":"बाख्तिआरी","br":"ब्रेटन","bra":"ब्रज","brh":"ब्राहुइ","brx":"बोडो","bs":"बोस्नियाली","bss":"अकुज","bua":"बुरिआत","bug":"बुगिनियाली","bum":"बुलु","byn":"ब्लिन","byv":"मेडुम्बा","ca":"क्याटालन","cad":"काड्डो","car":"क्यारिब","cay":"कायुगा","cch":"अट्साम","ccp":"चाक्मा","ce":"चेचेन","ceb":"सेबुआनो","cgg":"चिगा","ch":"चामोर्रो","chb":"चिब्चा","chg":"चागाटाई","chk":"चुकेसे","chm":"मारी","chn":"चिनुक जार्गन","cho":"चोक्टाव","chp":"चिपेव्यान","chr":"चेरोकी","chy":"चेयेन्ने","ckb":"मध्यवर्ती कुर्दिस","co":"कोर्सिकन","cop":"कोप्टिक","cps":"कापिज्नोन","cr":"क्री","crh":"क्रिमियाली तुर्क","crs":"सेसेल्वा क्रिओल फ्रान्सेली","cs":"चेक","csb":"कासुवियन","cu":"चर्च स्लाभिक","cv":"चुभास","cy":"वेल्श","da":"डेनिस","dak":"डाकोटा","dar":"दार्ग्वा","dav":"ताइता","de":"जर्मन","de-AT":"अस्ट्रिएन जर्मन","de-CH":"स्वीस हाई जर्मन","del":"देलावर","dgr":"दोग्रिब","din":"दिन्का","dje":"जर्मा","doi":"डोगरी","dsb":"तल्लो सोर्बियन","dtp":"केन्द्रीय दुसुन","dua":"दुवाला","dum":"मध्य डच","dv":"दिबेही","dyo":"जोला-फोनिल","dyu":"द्युला","dz":"जोङ्खा","dzg":"दाजागा","ebu":"एम्बु","ee":"इवी","efi":"एफिक","egl":"एमिलियाली","egy":"पुरातन इजिप्टी","eka":"एकाजुक","el":"ग्रीक","elx":"एलामाइट","en":"अङ्ग्रेजी","en-AU":"अस्ट्रेलियाली अङ्ग्रेजी","en-CA":"क्यानाडेली अङ्ग्रेजी","en-GB":"बेलायती अङ्ग्रेजी","en-US":"अमेरिकी अङ्ग्रेजी","enm":"मध्य अङ्ग्रेजी","eo":"एस्पेरान्तो","es":"स्पेनी","es-419":"ल्याटिन अमेरिकी स्पेनी","es-ES":"युरोपेली स्पेनी","es-MX":"मेक्सिकन स्पेनी","esu":"केन्द्रीय युपिक","et":"इस्टोनियन","eu":"बास्क","ewo":"इवोन्डो","ext":"एक्सट्रेमादुराली","fa":"फारसी","fa-AF":"दारी","fan":"फाङ","fat":"फान्टी","ff":"फुलाह","fi":"फिनिस","fil":"फिलिपिनी","fj":"फिजियन","fo":"फारोज","fon":"फोन","fr":"फ्रान्सेली","fr-CA":"क्यानेडाली फ्रान्सेली","fr-CH":"स्विस फ्रेन्च","frc":"काहुन फ्रान्सेली","frm":"मध्य फ्रान्सेली","fro":"पुरातन फ्रान्सेली","frp":"अर्पितान","frr":"उत्तरी फ्रिजी","frs":"पूर्वी फ्रिसियाली","fur":"फ्रिउलियाली","fy":"पश्चिमी फ्रिसियन","ga":"आइरिस","gaa":"गा","gag":"गगाउज","gan":"गान चिनियाँ","gay":"गायो","gba":"ग्बाया","gd":"स्कटिस गाएलिक","gez":"गिज","gil":"गिल्बर्टी","gl":"गलिसियाली","glk":"गिलाकी","gmh":"मध्य उच्च जर्मन","gn":"गुवारानी","goh":"पुरातन उच्च जर्मन","gom":"गोवा कोन्कानी","gon":"गोन्डी","gor":"गोरोन्टालो","got":"गोथिक","grb":"ग्रेबो","grc":"पुरातन ग्रिक","gsw":"स्वीस जर्मन","gu":"गुजराती","gur":"फ्राफ्रा","guz":"गुसी","gv":"मान्क्स","gwi":"गुइचिन","ha":"हाउसा","hai":"हाइदा","hak":"हक्का चिनियाँ","haw":"हवाइयन","he":"हिब्रु","hi":"हिन्दी","hif":"फिजी हिन्दी","hil":"हिलिगायनोन","hit":"हिट्टिटे","hmn":"हमोङ","ho":"हिरी मोटु","hr":"क्रोयसियाली","hsb":"माथिल्लो सोर्बियन","hsn":"जियाङ चिनियाँ","ht":"हैटियाली क्रियोल","hu":"हङ्गेरियाली","hup":"हुपा","hy":"आर्मेनियाली","hz":"हेरेरो","ia":"इन्टर्लिङ्गुआ","iba":"इबान","ibb":"इबिबियो","id":"इन्डोनेसियाली","ie":"इन्टरलिङ्ग्वे","ig":"इग्बो","ii":"सिचुआन यि","ik":"इनुपिआक्","ilo":"इयोको","inh":"इन्गस","io":"इडो","is":"आइसल्यान्डियाली","it":"इटालेली","iu":"इनुक्टिटुट","izh":"इन्ग्रियाली","ja":"जापानी","jam":"जमैकाली क्रेओले अङ्ग्रेजी","jbo":"लोज्बान","jgo":"न्गोम्बा","jmc":"माचामे","jpr":"जुडियो-फारसी","jrb":"जुडियो-अरबी","jut":"जुटिस","jv":"जाभानी","ka":"जर्जियाली","kaa":"कारा-काल्पाक","kab":"काबिल","kac":"काचिन","kaj":"ज्जु","kam":"काम्बा","kaw":"कावी","kbd":"काबार्दियाली","kbl":"कानेम्बु","kcg":"टुआप","kde":"माकोन्डे","kea":"काबुभेर्डियानु","ken":"केनयाङ","kfo":"कोरो","kg":"कोङ्गो","kgp":"काइनगाङ","kha":"खासी","kho":"खोटानी","khq":"कोयरा चिनी","khw":"खोवार","ki":"किकुयु","kiu":"किर्मान्जकी","kj":"कुआन्यामा","kk":"काजाख","kkj":"काको","kl":"कालालिसुट","kln":"कालेन्जिन","km":"खमेर","kmb":"किम्बुन्डु","kn":"कन्नाडा","ko":"कोरियाली","koi":"कोमी-पर्म्याक","kok":"कोन्कानी","kos":"कोस्राली","kpe":"क्पेल्ले","kr":"कानुरी","krc":"काराचाय-बाल्कर","kri":"क्रिओ","krj":"किनाराय-ए","krl":"करेलियन","kru":"कुरुख","ks":"कास्मिरी","ksb":"शाम्बाला","ksf":"बाफिया","ksh":"कोलोग्नियाली","ku":"कुर्दी","kum":"कुमिक","kut":"कुतेनाइ","kv":"कोमी","kw":"कोर्निस","ky":"किर्गिज","la":"ल्याटिन","lad":"लाडिनो","lag":"लाङ्गी","lah":"लाहन्डा","lam":"लाम्बा","lb":"लक्जेम्बर्गी","lez":"लाज्घियाली","lfn":"लिङ्गुवा फ्राङ्का नोभा","lg":"गान्डा","li":"लिम्बुर्गी","lij":"लिगुरियाली","liv":"लिभोनियाली","lkt":"लाकोता","lmo":"लोम्बार्ड","ln":"लिङ्गाला","lo":"लाओ","lol":"मोङ्गो","lou":"lou","loz":"लोजी","lrc":"उत्तरी लुरी","lt":"लिथुआनियाली","ltg":"लाट्गाली","lu":"लुबा-काताङ्गा","lua":"लुबा-लुलुआ","lui":"लुइसेनो","lun":"लुन्डा","luo":"लुओ","lus":"मिजो","luy":"लुइया","lv":"लात्भियाली","lzh":"साहित्यिक चिनियाँ","lzz":"लाज","mad":"मादुरेसे","maf":"माफा","mag":"मगधी","mai":"मैथिली","mak":"माकासार","man":"मान्दिङो","mas":"मसाई","mde":"माबा","mdf":"मोक्ष","mdr":"मन्दर","men":"मेन्डे","mer":"मेरू","mfe":"मोरिसेन","mg":"मलागासी","mga":"मध्य आयरिस","mgh":"माखुवा-मिट्टो","mgo":"मेटा","mh":"मार्साली","mi":"माओरी","mic":"मिकमाक","min":"मिनाङकाबाउ","mk":"म्यासेडोनियन","ml":"मलयालम","mn":"मङ्गोलियाली","mnc":"मान्चु","mni":"मनिपुरी","moh":"मोहक","mos":"मोस्सी","mr":"मराठी","ms":"मलाय","mt":"माल्टिज","mua":"मुन्डाङ","mul":"बहुभाषा","mus":"क्रिक","mwl":"मिरान्डी","mwr":"माडवारी","mwv":"मेन्टावाई","my":"बर्मेली","mye":"म्येने","myv":"इर्ज्या","mzn":"मजानडेरानी","na":"नाउरू","nan":"मिन नान चिनियाँ","nap":"नेपोलिटान","naq":"नामा","nb":"नर्वेली बोकमाल","nd":"उत्तरी न्डेबेले","nds":"तल्लो जर्मन","nds-NL":"तल्लो साक्सन","ne":"नेपाली","new":"नेवारी","ng":"न्दोन्गा","nia":"नियास","niu":"निउएन","njo":"अओ नागा","nl":"डच","nl-BE":"फ्लेमिस","nmg":"क्वासियो","nn":"नर्वेली नाइनोर्स्क","nnh":"न्गिएम्बुन","no":"नर्वेली","nog":"नोगाइ","non":"पुरानो नोर्से","nov":"नोभियल","nqo":"नको","nr":"दक्षिण न्देबेले","nso":"उत्तरी सोथो","nus":"नुएर","nv":"नाभाजो","nwc":"परम्परागत नेवारी","ny":"न्यान्जा","nym":"न्यामवेजी","nyn":"न्यान्कोल","nyo":"न्योरो","nzi":"नजिमा","oc":"अक्सिटन","oj":"ओजिब्वा","om":"ओरोमो","or":"उडिया","os":"ओस्सेटिक","osa":"ओसागे","ota":"अटोमन तुर्की","pa":"पंजाबी","pag":"पाङ्गासिनान","pal":"पाहलावी","pam":"पामपाङ्गा","pap":"पापियामेन्तो","pau":"पालाउवाली","pcd":"पिकार्ड","pcm":"नाइजेरियाली पिड्जिन","pdc":"पेन्सिलभानियाली जर्मन","peo":"पुरातन फारसी","pfl":"पालाटिन जर्मन","phn":"फोनिसियाली","pi":"पाली","pl":"पोलिस","pms":"पिएडमोन्तेसे","pnt":"पोन्टिक","prg":"प्रसियाली","pro":"पुरातन प्रोभेन्काल","ps":"पास्तो","pt":"पोर्तुगी","pt-BR":"ब्राजिली पोर्तुगी","pt-PT":"युरोपेली पोर्तुगी","qu":"क्वेचुवा","quc":"किचे","qug":"चिम्बोराजो उच्चस्थान किचुआ","raj":"राजस्थानी","rap":"रापानुई","rar":"रारोटोङ्गान","rm":"रोमानिस","rn":"रुन्डी","ro":"रोमानियाली","ro-MD":"मोल्डाभियाली","rof":"रोम्बो","root":"रुट","ru":"रसियाली","rup":"अरोमानीयाली","rw":"किन्यारवान्डा","rwk":"र्‌वा","sa":"संस्कृत","sad":"सान्डेअ","sah":"साखा","saq":"साम्बुरू","sat":"सान्ताली","sba":"न्गामबाय","sbp":"साङ्गु","sc":"सार्डिनियाली","scn":"सिसिलियाली","sco":"स्कट्स","sd":"सिन्धी","sdh":"दक्षिणी कुर्दिश","se":"उत्तरी सामी","seh":"सेना","ses":"कोयराबोरो सेन्नी","sg":"साङ्गो","sga":"पुरातन आयरीस","shi":"टाचेल्हिट","shn":"शान","shu":"चाड अरबी","si":"सिन्हाली","sk":"स्लोभाकियाली","sl":"स्लोभेनियाली","sli":"तल्लो सिलेसियाली","sm":"सामोआ","sma":"दक्षिणी सामी","smj":"लुले सामी","smn":"इनारी सामी","sms":"स्कोइट सामी","sn":"शोना","snk":"सोनिन्के","so":"सोमाली","sq":"अल्बानियाली","sr":"सर्बियाली","srn":"स्रानान टोङ्गो","ss":"स्वाती","ssy":"साहो","st":"दक्षिणी सोथो","su":"सुडानी","suk":"सुकुमा","sus":"सुसू","sux":"सुमेरियाली","sv":"स्विडिस","sw":"स्वाहिली","sw-CD":"कङ्गो स्वाहिली","swb":"कोमोरी","syc":"परम्परागत सिरियाक","syr":"सिरियाक","ta":"तामिल","te":"तेलुगु","tem":"टिम्ने","teo":"टेसो","tet":"टेटुम","tg":"ताजिक","th":"थाई","ti":"टिग्रिन्या","tig":"टिग्रे","tk":"टर्कमेन","tlh":"क्लिङ्गन","tn":"ट्स्वाना","to":"टोङ्गन","tog":"न्यास टोङ्गा","tpi":"टोक पिसिन","tr":"टर्किश","trv":"टारोको","ts":"ट्सोङ्गा","tt":"तातार","ttt":"मुस्लिम टाट","tum":"टुम्बुका","tvl":"टुभालु","twq":"तासावाक","ty":"टाहिटियन","tyv":"टुभिनियाली","tzm":"केन्द्रीय एट्लास टामाजिघट","udm":"उड्मुर्ट","ug":"उइघुर","uk":"युक्रेनी","umb":"उम्बुन्डी","und":"अज्ञात भाषा","ur":"उर्दु","uz":"उज्बेकी","vai":"भाइ","ve":"भेन्डा","vi":"भियतनामी","vmf":"मुख्य-फ्राङ्कोनियाली","vo":"भोलापिक","vun":"भुन्जो","wa":"वाल्लुन","wae":"वाल्सर","wal":"वोलेट्टा","war":"वारे","wbp":"वार्ल्पिरी","wo":"वुलुफ","xal":"काल्मिक","xh":"खोसा","xmf":"मिनग्रेलियाली","xog":"सोगा","yav":"याङ्बेन","ybb":"येम्बा","yi":"यिद्दिस","yo":"योरूवा","yrl":"न्हिनगातु","yue":"क्यान्टोनिज","zbl":"ब्लिससिम्बोल्स","zgh":"मानक मोरोक्कोन तामाजिघट","zh":"चिनियाँ","zh-Hans":"सरलिकृत चिनियाँ","zh-Hant":"परम्परागत चिनियाँ","zu":"जुलु","zun":"जुनी","zxx":"भाषिक सामग्री छैन","zza":"जाजा"},"short":{"az":"अजेरी","en-GB":"संयुक्त अधिराज्य अङ्ग्रेजी","en-US":"युएस अङ्ग्रेजी"},"narrow":{}},"region":{"long":{"142":"एशिया","143":"केन्द्रीय एशिया","145":"पश्चिमी एशिया","150":"युरोप","151":"पूर्वी युरोप","154":"उत्तरी युरोप","155":"पश्चिमी युरोप","202":"उप-साहारा अफ्रिका","419":"ल्याटिन अमेरिका","001":"विश्व","002":"अफ्रिका","003":"उत्तर अमेरिका","005":"दक्षिण अमेरिका","009":"ओसनिया","011":"पश्चिमी अफ्रिका","013":"केन्द्रीय अमेरिका","014":"पूर्वी अफ्रिका","015":"उत्तरी अफ्रिका","017":"मध्य अफ्रिका","018":"दक्षिणी अफ्रिका","019":"अमेरिकास","021":"उत्तरी अमेरिका","029":"क्यारिबियन","030":"पूर्वी एशिया","034":"दक्षिणी एशिया","035":"दक्षिण पूर्वी एशिया","039":"दक्षिणी युरोप","053":"अष्ट्रालासिया","054":"मेलानेसिया","057":"माइक्रोनेसियाली क्षेत्र","061":"पोलिनेशिया","AC":"असेन्सन टापु","AD":"अन्डोर्रा","AE":"संयुक्त अरब इमिराट्स","AF":"अफगानिस्तान","AG":"एन्टिगुआ र बारबुडा","AI":"आङ्गुइला","AL":"अल्बेनिया","AM":"आर्मेनिया","AO":"अङ्गोला","AQ":"अन्टारटिका","AR":"अर्जेन्टिना","AS":"अमेरिकी समोआ","AT":"अष्ट्रिया","AU":"अस्ट्रेलिया","AW":"अरुबा","AX":"अलान्ड टापुहरु","AZ":"अजरबैजान","BA":"बोस्निया एण्ड हर्जगोभिनिया","BB":"बार्बाडोस","BD":"बङ्गलादेश","BE":"बेल्जियम","BF":"बुर्किना फासो","BG":"बुल्गेरिया","BH":"बहराइन","BI":"बुरूण्डी","BJ":"बेनिन","BL":"सेन्ट बार्थेलेमी","BM":"बर्मुडा","BN":"ब्रुनाइ","BO":"बोलिभिया","BQ":"क्यारिवियन नेदरल्याण्ड्स","BR":"ब्राजिल","BS":"बहामास","BT":"भुटान","BV":"बुभेट टापु","BW":"बोट्स्वाना","BY":"बेलारूस","BZ":"बेलिज","CA":"क्यानाडा","CC":"कोकोस (किलिंग) टापुहरु","CD":"कङ्गो - किन्शासा","CF":"मध्य अफ्रिकी गणतन्त्र","CG":"कङ्गो ब्राजाभिल","CH":"स्विजरल्याण्ड","CI":"कोट दिभोर","CK":"कुक टापुहरु","CL":"चिली","CM":"क्यामरून","CN":"चीन","CO":"कोलोम्बिया","CP":"क्लिप्पेर्टन टापु","CR":"कोष्टारिका","CU":"क्युबा","CV":"केप भर्डे","CW":"कुराकाओ","CX":"क्रिष्टमस टापु","CY":"साइप्रस","CZ":"चेकिया","DE":"जर्मनी","DG":"डियगो गार्सिया","DJ":"डिजिबुटी","DK":"डेनमार्क","DM":"डोमिनिका","DO":"डोमिनिकन गणतन्त्र","DZ":"अल्जेरिया","EA":"सिउटा र मेलिला","EC":"इक्वेडोर","EE":"इस्टोनिया","EG":"इजिप्ट","EH":"पश्चिमी साहारा","ER":"एरिट्रीया","ES":"स्पेन","ET":"इथियोपिया","EU":"युरोपियन युनियन","EZ":"युरोजोन","FI":"फिनल्याण्ड","FJ":"फिजी","FK":"फकल्याण्ड टापुहरु","FM":"माइक्रोनेसिया","FO":"फारो टापुहरू","FR":"फ्रान्स","GA":"गावोन","GB":"संयुक्त अधिराज्य","GD":"ग्रेनाडा","GE":"जर्जिया","GF":"फ्रान्सेली गायना","GG":"ग्यूर्न्सी","GH":"घाना","GI":"जिब्राल्टार","GL":"ग्रिनल्याण्ड","GM":"गाम्विया","GN":"गिनी","GP":"ग्वाडेलुप","GQ":"भू-मध्यीय गिनी","GR":"ग्रीस","GS":"दक्षिण जर्जिया र दक्षिण स्यान्डवीच टापुहरू","GT":"ग्वाटेमाला","GU":"गुवाम","GW":"गिनी-बिसाउ","GY":"गुयाना","HK":"हङकङ चिनियाँ विशेष प्रशासनिक क्षेत्र","HM":"हर्ड टापु र म्याकडोनाल्ड टापुहरु","HN":"हन्डुरास","HR":"क्रोएशिया","HT":"हैटी","HU":"हङ्गेरी","IC":"क्यानारी टापुहरू","ID":"इन्डोनेशिया","IE":"आयरल्याण्ड","IL":"इजरायल","IM":"आइल अफ म्यान","IN":"भारत","IO":"बेलायती हिन्द महासागर क्षेत्र","IQ":"इराक","IR":"इरान","IS":"आइस्ल्याण्ड","IT":"इटली","JE":"जर्सी","JM":"जमैका","JO":"जोर्डन","JP":"जापान","KE":"केन्या","KG":"किर्गिस्तान","KH":"कम्बोडिया","KI":"किरिबाटी","KM":"कोमोरोस","KN":"सेन्ट किट्स र नेभिस","KP":"उत्तर कोरिया","KR":"दक्षिण कोरिया","KW":"कुवेत","KY":"केयमान टापु","KZ":"काजाकस्तान","LA":"लाओस","LB":"लेबनन","LC":"सेन्ट लुसिया","LI":"लिकटेन्सटाइन","LK":"श्रीलङ्का","LR":"लाइबेरिया","LS":"लेसोथो","LT":"लिथुएनिया","LU":"लक्जेमबर्ग","LV":"लाट्भिया","LY":"लिबिया","MA":"मोरोक्को","MC":"मोनाको","MD":"माल्डोभा","ME":"मोन्टेनिग्रो","MF":"सेन्ट मार्टिन","MG":"माडागास्कर","MH":"मार्शल टापुहरु","MK":"उत्तर म्यासेडोनिया","ML":"माली","MM":"म्यान्मार (बर्मा)","MN":"मङ्गोलिया","MO":"मकाउ चिनियाँ विशेष प्रशासनिक क्षेत्र","MP":"उत्तरी मारिआना टापु","MQ":"मार्टिनिक","MR":"माउरिटानिया","MS":"मोन्टसेर्राट","MT":"माल्टा","MU":"मौरिसियस","MV":"माल्दिभ्स","MW":"मालावी","MX":"मेक्सिको","MY":"मलेसिया","MZ":"मोजाम्बिक","NA":"नामिबिया","NC":"न्यु क्यालेडोनिया","NE":"नाइजर","NF":"नोरफोल्क टापु","NG":"नाइजेरिया","NI":"निकारागुवा","NL":"नेदरल्याण्ड","NO":"नर्वे","NP":"नेपाल","NR":"नाउरू","NU":"नियुइ","NZ":"न्युजिल्याण्ड","OM":"ओमन","PA":"प्यानामा","PE":"पेरू","PF":"फ्रान्सेली पोलिनेसिया","PG":"पपुआ न्यू गाइनिया","PH":"फिलिपिन्स","PK":"पाकिस्तान","PL":"पोल्याण्ड","PM":"सेन्ट पिर्रे र मिक्केलोन","PN":"पिटकाइर्न टापुहरु","PR":"पुएर्टो रिको","PS":"प्यालेस्टिनी भू-भागहरू","PT":"पोर्चुगल","PW":"पलाउ","PY":"प्याराग्वे","QA":"कतार","QO":"बाह्य ओसनिया","RE":"रियुनियन","RO":"रोमेनिया","RS":"सर्बिया","RU":"रूस","RW":"रवाण्डा","SA":"साउदी अरब","SB":"सोलोमन टापुहरू","SC":"सेचेलेस","SD":"सुडान","SE":"स्विडेन","SG":"सिङ्गापुर","SH":"सेन्ट हेलेना","SI":"स्लोभेनिया","SJ":"सभाल्बार्ड र जान मायेन","SK":"स्लोभाकिया","SL":"सिएर्रा लिओन","SM":"सान् मारिनो","SN":"सेनेगल","SO":"सोमालिया","SR":"सुरिनेम","SS":"दक्षिण सुडान","ST":"साओ टोमे र प्रिन्सिप","SV":"एल् साल्भाडोर","SX":"सिन्ट मार्टेन","SY":"सिरिया","SZ":"स्वाजिल्याण्ड","TA":"ट्रिस्टान डा कुन्हा","TC":"तुर्क र काइकोस टापु","TD":"चाड","TF":"फ्रेन्च दक्षिणी राज्यहरू","TG":"टोगो","TH":"थाइल्याण्ड","TJ":"ताजिकिस्तान","TK":"तोकेलाउ","TL":"टिमोर-लेस्टे","TM":"तुर्कमेनिस्तान","TN":"ट्युनिसिया","TO":"टोंगा","TR":"टर्की","TT":"त्रिनिडाड एण्ड टोबागो","TV":"तुभालु","TW":"ताइवान","TZ":"तान्जानिया","UA":"युक्रेन","UG":"युगाण्डा","UM":"संयुक्त राज्यका बाह्य टापुहरु","UN":"संयुक्त राष्ट्र संघ","US":"संयुक्त राज्य","UY":"उरूग्वे","UZ":"उज्बेकिस्तान","VA":"भेटिकन सिटी","VC":"सेन्ट भिन्सेन्ट र ग्रेनाडिन्स","VE":"भेनेजुएला","VG":"बेलायती भर्जिन टापुहरू","VI":"संयुक्त राज्य भर्जिन टापुहरु","VN":"भिएतनाम","VU":"भानुआतु","WF":"वालिस र फुटुना","WS":"सामोआ","XA":"सिउडो-एक्सेन्ट्स","XB":"सिउडो-बिडी","XK":"कोसोभो","YE":"येमेन","YT":"मायोट्ट","ZA":"दक्षिण अफ्रिका","ZM":"जाम्बिया","ZW":"जिम्बाबवे","ZZ":"अज्ञात क्षेत्र"},"short":{"GB":"युके","HK":"हङकङ","MO":"मकाउ","PS":"प्‍यालेस्टाइन","UN":"यूएन","US":"अमेरिका"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"अरबी","Aran":"Aran","Armi":"आर्मी","Armn":"आर्मेनियाली","Avst":"आभेस्टान","Bali":"बाली","Bamu":"Bamu","Bass":"Bass","Batk":"बाटक","Beng":"बङ्गाली","Bhks":"Bhks","Blis":"ब्लिजसिम्बोल्स","Bopo":"बोपोमोफो","Brah":"ब्राह्मी","Brai":"ब्रेल","Bugi":"बुगिनिज","Buhd":"बुहिद","Cakm":"काक्म्","Cans":"Cans","Cari":"कारियन","Cham":"चाम","Cher":"चेरोकी","Chrs":"Chrs","Cirt":"किर्थ","Copt":"कप्टिक","Cprt":"कप्रियट","Cyrl":"सिरिलिक","Deva":"देवानागरी","Diak":"Diak","Dogr":"Dogr","Dsrt":"डेसेरेट","Dupl":"Dupl","Egyd":"इजिप्टियन डेमोटिक","Egyh":"इजिप्टियन हाइरटिक","Egyp":"इजिप्टियन हाइरोग्लिफ्स","Elba":"Elba","Elym":"Elym","Ethi":"इथियोपिक","Geok":"ग्रुजियाली खुट्सुरी","Geor":"जर्जियाली","Glag":"ग्लागोलिटिक","Gong":"Gong","Gonm":"Gonm","Goth":"गोथिक","Gran":"Gran","Grek":"ग्रीक","Gujr":"गुजराती","Guru":"गुरूमुखी","Hanb":"हान्ब","Hang":"हान्गुल","Hani":"हान","Hano":"हानुनु","Hans":"सरलिकृत चिनियाँ","Hant":"परम्परागत चिनियाँ","Hatr":"Hatr","Hebr":"हिब्रु","Hira":"हिरागना","Hluw":"Hluw","Hmng":"पहावह हमोङ्ग","Hmnp":"Hmnp","Hrkt":"काताकाना वा हिरागाना","Hung":"पुरानो हङ्गेरियाली","Inds":"इन्दुस","Ital":"पुरानो इटालिक","Jamo":"जामो","Java":"जाभानी","Jpan":"जापानी","Kali":"कायाहली","Kana":"काताकाना","Khar":"खारोस्थिति","Khmr":"खमेर","Khoj":"Khoj","Kits":"Kits","Knda":"कान्नाडा","Kore":"कोरियन","Kthi":"क्थी","Lana":"लान्ना","Laoo":"लाओ","Latf":"फ्राक्टुर ल्याटिन","Latg":"ग्यालिक ल्याटिन","Latn":"ल्याटिन","Lepc":"लेप्चा","Limb":"लिम्बु","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"लाइसियन","Lydi":"लाइडियन","Mahj":"Mahj","Maka":"Maka","Mand":"मान्डाएन","Mani":"मानिकाएन","Marc":"Marc","Maya":"माया हाइरोग्लिफ्स","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"मेरियोटिक","Mlym":"मलायालम","Modi":"Modi","Mong":"मङ्गोल","Moon":"जून","Mroo":"Mroo","Mtei":"माइटेइ मायेक","Mult":"Mult","Mymr":"म्यान्मार","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"एन्को","Nshu":"Nshu","Ogam":"ओघाम","Olck":"ओलचिकी","Orkh":"ओर्खोन","Orya":"ओडिया","Osge":"Osge","Osma":"ओस्मान्या","Palm":"Palm","Pauc":"Pauc","Perm":"पुरानो पर्मिक","Phag":"फाग्स-पा","Phli":"फ्लि","Phlp":"फ्ल्प","Phlv":"बुक पहल्भी","Phnx":"फोनिसियन","Plrd":"पोल्लार्ड फोनेटिक","Prti":"पिआरटी","Qaag":"Qaag","Rjng":"रेजाङ","Rohg":"Rohg","Roro":"रोङ्गोरोङ्गो","Runr":"रूनिक","Samr":"समारिटन","Sara":"सारती","Sarb":"Sarb","Saur":"सौराष्ट्र","Sgnw":"साइनराइटिङ","Shaw":"शाभियन","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"सिन्हाला","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"स्ल्योटी नाग्री","Syrc":"सिरियाक","Syre":"इस्ट्रेनजेलो सिरियाक","Syrj":"पश्चिमी सिरियाक","Syrn":"पूर्वी सिरियाक","Tagb":"टाग्वान्वा","Takr":"Takr","Tale":"टाइले","Talu":"न्यू टाइ लुइ","Taml":"तामिल","Tang":"Tang","Tavt":"टाभ्ट","Telu":"तेलुगु","Teng":"टेङ्वार","Tfng":"टिफिनाघ","Tglg":"टागालोग","Thaa":"थाना","Thai":"थाई","Tibt":"तिब्बती","Tirh":"Tirh","Ugar":"युगारिटिक","Vaii":"भाइ","Visp":"दृश्यमय वाणी","Wara":"Wara","Wcho":"Wcho","Xpeo":"पुरानो पर्सियन","Xsux":"Xsux","Yezi":"Yezi","Yiii":"यी","Zanb":"Zanb","Zinh":"इन्हेरिटेड","Zmth":"गणितीय चिन्ह","Zsye":"इमोजी","Zsym":"प्रतीकहरू","Zxxx":"नलेखिएको","Zyyy":"साझा","Zzzz":"अज्ञात लिपि"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"संयुक्त अरब एमिराट्स डिर्हाम","AFA":"अफ्गानी(१९२७–२००२)","AFN":"अफ्गान अफ्गानी","ALK":"ALK","ALL":"अल्बानियन लेक","AMD":"आर्मेनियाली ड्राम","ANG":"नेदरल्याण्ड्स एन्टिलियन गिल्डर","AOA":"एङ्गोलान क्वान्जा","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"अर्जेन्टिनी पेसो","ATS":"ATS","AUD":"अष्ट्रेलियन डलर","AWG":"आरूबन फ्लोरिन","AZM":"AZM","AZN":"अजरबैजानी मानात","BAD":"BAD","BAM":"बोस्निया-हर्जगोभिनिया रूपान्तरयोग्य मार्क","BAN":"BAN","BBD":"बर्बाडियन डलर","BDT":"बङ्गलादेशी टाका","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"बुल्गारियाली लेभ","BGO":"BGO","BHD":"बाहारैनी डिनार","BIF":"बुरूण्डियाली फ्रान्क","BMD":"बर्मुडन डलर","BND":"ब्रुनाई डलर","BOB":"बोलिभियन बोलिभियानो","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"ब्राजिलियन रियल","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"बहामियाली डलर","BTN":"भुटानी एन्‌गुल्ट्रुम","BUK":"BUK","BWP":"बोट्सवानान पुला","BYB":"BYB","BYN":"बेलारूसी रूबल","BYR":"बेलारूसी रूबल (2000–2016)","BZD":"वेलिज डलर","CAD":"क्यानाडियाली डलर","CDF":"कङ्गोली फ्रान्क","CHE":"CHE","CHF":"स्विस् फ्रैङ्क","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"चिलियन पेसो","CNH":"चिनियाँ युआन(तटवर्ती)","CNX":"CNX","CNY":"चिनिँया युआन","COP":"कोलम्वियन पेसो","COU":"COU","CRC":"कोष्टारिकन कोलोन","CSD":"CSD","CSK":"CSK","CUC":"क्यूवाली रूपान्तरणयोग्य पेसो","CUP":"क्यूवाली पेसो","CVE":"केप भर्डियन एस्कुडो","CYP":"CYP","CZK":"चेख गणतञ्त्र कोरूना","DDM":"DDM","DEM":"DEM","DJF":"जिबौंटियाली फ्रान्क","DKK":"ड्यानिश क्रोन","DOP":"डोमिनिकन पेसो","DZD":"अल्जेरियाली डिनार","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"इजिप्सियन पाउन्ड","ERN":"एरिट्रियन नाक्फा","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"इथियोपियाली बिर","EUR":"युरो","FIM":"FIM","FJD":"फिजीयाली डलर","FKP":"फक्‌ल्याण्ड टापुहरूका पाउन्ड","FRF":"FRF","GBP":"बेलायती पाउण्ड स्टर्लिङ","GEK":"GEK","GEL":"जर्जियाली लारी","GHC":"GHC","GHS":"घानाली सेडी","GIP":"जिब्राल्टर पाउण्ड","GMD":"गाम्वियाली डालासी","GNF":"गिनियाली फ्रान्क","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"ग्वाटेमाला क्वेट्जाल","GWE":"GWE","GWP":"GWP","GYD":"गाइनिज डलर","HKD":"हङकङ डलर","HNL":"होन्डुरान लेम्पिरा","HRD":"HRD","HRK":"क्रोएशियाली कुना","HTG":"हैटियाली गुर्ड","HUF":"हङ्गेरियन फोरिन्ट","IDR":"इण्डोनेशियाली रूपियाँ","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"इजरायली नयाँ शेकेल","INR":"भारतीय रूपिँया","IQD":"इराकी डिनार","IRR":"इरानियाली रियाल","ISJ":"ISJ","ISK":"आइसल्याण्डिक क्रोना","ITL":"ITL","JMD":"जमाइकाली डलर","JOD":"जोर्डानियाली डलर","JPY":"जापानी येन","KES":"केन्याली शिलिङ","KGS":"किर्गिस्तानी सोम","KHR":"कम्बोडिनेयाली रियल","KMF":"कोमोरियन फ्रान्क","KPW":"उत्तर कोरियाली वन","KRH":"KRH","KRO":"KRO","KRW":"दक्षिण कोरियाली वन","KWD":"कुवेती डिनार","KYD":"केम्यान टापुहरूका डलर","KZT":"काजाखस्तानी टेन्ज","LAK":"लाओशियन किप","LBP":"लेबनाली पाउन्ड","LKR":"श्रीलङ्काली रूपिया","LRD":"लिबेरियाली डलर","LSL":"LSL","LTL":"लिथुनियाली लिटास","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"लाट्भियाली लाट्स","LVR":"LVR","LYD":"लिवियाली डिनार","MAD":"मोरोक्काली डिर्‌हाम","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"माल्डोभन लेउ","MGA":"मालागासी एरिआरी","MGF":"MGF","MKD":"म्यासेडोनियाली डेनार","MKN":"MKN","MLF":"MLF","MMK":"म्यान्मार क्याट","MNT":"मङ्गोलियाली टुग्रिक","MOP":"माकानिज पटाका","MRO":"माउरिटानियानली औगुइया (१९७३–२०१७)","MRU":"माउरिटानियानली औगुइया","MTL":"MTL","MTP":"MTP","MUR":"माउरिटियन रूपी","MVP":"MVP","MVR":"मालडिभियाली रूफियाँ","MWK":"मलाविअन क्वाचा","MXN":"मेक्सिकन पेसो","MXP":"MXP","MXV":"MXV","MYR":"मलेशियाली रिङ्गेट","MZE":"MZE","MZM":"MZM","MZN":"मोजाम्विकन मेटिकल","NAD":"नामिबियन डलर","NGN":"नाइजेरियन नाइरा","NIC":"NIC","NIO":"निकारागुवान कोर्डोवा","NLG":"NLG","NOK":"नर्वेजियाली क्रोन","NPR":"नेपाली रूपैयाँ","NZD":"न्यूजिल्याण्ड डलर","OMR":"ओमनी रियल","PAB":"पानामानियाली बाल्बोआ","PEI":"PEI","PEN":"पेरूभियाली सोल","PES":"PES","PGK":"पपुआ न्यू गिनियाली किना","PHP":"फिलिपिनी पेसो","PKR":"पाकिस्तानी रूपियाँ","PLN":"पोलिश ज्लोटाई","PLZ":"PLZ","PTE":"PTE","PYG":"पारागुयाली गुरानी","QAR":"कतारी रियल","RHD":"RHD","ROL":"ROL","RON":"रोमानियाली लेऊ","RSD":"सर्बियाली डिनार","RUB":"रूसी रूबल","RUR":"RUR","RWF":"र्‌वाण्डाली फ्रान्क","SAR":"साउदी रियालहरू","SBD":"सोलोमन टापुहरूका डलर","SCR":"सेचेलोइस रूपी","SDD":"SDD","SDG":"सुडानी पाउन्ड","SDP":"SDP","SEK":"स्विडिश क्रोना","SGD":"सिङ्गापुर डलर","SHP":"सेन्ट हेलेना पाउन्ड","SIT":"SIT","SKK":"SKK","SLL":"सियरा लियोनेन लियोन","SOS":"सोमाली शिलिङ","SRD":"सुरिनामिज डलर","SRG":"SRG","SSP":"दक्षिण सुडानी पाउन्ड","STD":"साओ टोम र प्रिन्सिप डोब्रा (१९७७–२०१७)","STN":"साओ टोम र प्रिन्सिप डोब्रा","SUR":"SUR","SVC":"SVC","SYP":"सिरियाली पाउन्ड","SZL":"स्वाजी लिलान्गेनी","THB":"थाई भाट","TJR":"TJR","TJS":"ताजिक्स्तानी सोमोनी","TMM":"TMM","TMT":"टुर्क्मेनिस्तानी मानात","TND":"टुनिसियाली डिनार","TOP":"टङ्गन पाङ्गा","TPE":"TPE","TRL":"TRL","TRY":"टर्किश लिरा","TTD":"त्रिनिडाड र टोबागो डलर","TWD":"नयाँ ताइवान डलर","TZS":"ताञ्जानियाली शिलिङ","UAH":"युक्रेनी हिर्भिनिया","UAK":"UAK","UGS":"UGS","UGX":"युगाण्डाली शिलिङ","USD":"अमेरिकी डलर","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"उरूगुवायाली पेसो","UYW":"UYW","UZS":"उज्बेकिस्तान सोम","VEB":"VEB","VEF":"भेनेजुएलन बोलिभर (२००८–२०१८)","VES":"भेनेजुएलन बोलिभर-2","VND":"भियतनामी डङ्","VNN":"VNN","VUV":"भानुआतू भातु","WST":"सामोआन ताला","XAF":"सीएफ्‌ए फ्रान्क बीइएसी","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"पूर्वी क्यारिबियन डलर","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"सीएफ्‌ए फ्रान्क बीसीइएओ","XPD":"XPD","XPF":"सीएफ्‌पी फ्रान्क","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"अज्ञात मुद्रा","YDD":"YDD","YER":"येमेनी रियाल","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"दक्षिण अफ्रिकी र्‍यान्ड","ZMK":"जाम्बियाली क्वाचा (१९६८–२०१२)","ZMW":"जाम्बियाली क्वाचा","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"ne"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
