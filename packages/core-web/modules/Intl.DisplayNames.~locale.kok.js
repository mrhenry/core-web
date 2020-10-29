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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("kok").length
)) {
// Intl.DisplayNames.~locale.kok
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"kok":{"types":{"language":{"long":{"aa":"अफार","ab":"अबखेज़ियन","ace":"अचायनीज","ada":"अडांग्मे","ady":"अडिघे","af":"अफ्रिकान्स","agq":"अघेम","ain":"आयनू","ak":"अकान","ale":"आलिट","alt":"दक्षिणी अल्टाय","am":"अमहारिक्","an":"आरागोनिस","anp":"अंगिका","ar":"अरेबिक","ar-001":"आधुनिक प्रमाणित अरेबिक","arn":"मापुचे","arp":"अरापाहो","as":"आसामी","asa":"असु","ast":"अस्टुरियान","av":"अवारिक","awa":"अवधी","ay":"ऐमरा","az":"अज़रबैजानी","ba":"बष्किर","ban":"बालिनिस","bas":"बस्सा","be":"बैलोरुसियन्","bem":"बेम्बा","bez":"बेना","bg":"बल्गेरियन","bho":"भोजपुरी","bi":"बिसलमा","bin":"बिनी","bla":"सिकसिका","bm":"बंबारा","bn":"बांग्ला","bo":"तिबेटी","br":"ब्रेटन","brx":"बोडो","bs":"बोस्नियन","bug":"बगिनिस","byn":"ब्लीन","ca":"कटलान","ccp":"चक्मा","ce":"चिचेन","ceb":"सिबौना","cgg":"चिगा","ch":"चामोर्रो","chk":"छुनिस","chm":"मारी","cho":"चोताव","chr":"चॅरोकी","chy":"चेयनी","ckb":"मध्य खुर्दीश","co":"कोर्शियन","crs":"सेसेल्वा क्रयॉल फ्रेन्च","cs":"चेक","cu":"चर्च स्लेव्हीक","cv":"छुवास","cy":"वेळ्ष्","da":"डॅनिश","dak":"डाकोटा","dar":"दार्ग्वा","dav":"तायता","de":"जर्मन","de-AT":"ऑस्ट्रियन जर्मन","de-CH":"स्विझ हाय जर्मन","dgr":"डोगरीब","dje":"झर्मा","dsb":"लोवर सोर्बियन","dua":"डौल","dv":"दिवेही","dyo":"जोला-फोनी","dz":"झोंग्खा","dzg":"डाझागा","ebu":"एम्बु","ee":"एव","efi":"एफीक","eka":"एकाजुक","el":"ग्रीक्","en":"इंग्लीश","en-AU":"ऑस्ट्रेलियन इंग्लीश","en-CA":"कॅनडियन इंग्लीश","en-GB":"ब्रिटीश इंग्लीश","en-US":"अमेरिकन इंग्लीश","eo":"इस्परान्टो","es":"स्पॅनीश","es-419":"लातीं अमेरिकन स्पॅनीश","es-ES":"युरोपियन स्पॅनीश","es-MX":"मॅक्सिकन स्पॅनीश","et":"इस्टोनियन्","eu":"बास्क","ewo":"एवोंडो","fa":"पर्शियन","fa-AF":"दारी","ff":"फुला","fi":"फिन्निष्","fil":"फिलिपिनो","fj":"फिजी","fo":"फेरोस्","fon":"फोन","fr":"फ्रेंच","fr-CA":"कॅनडियन फ्रेंच","fr-CH":"स्विझ फ्रेंच","frc":"frc","fur":"फ्रिलियन","fy":"पश्चिमी फ्रिशियन","ga":"ऐरिष","gaa":"गा","gd":"स्कॉटीश गॅलीक","gez":"गेझ","gil":"गिलबर्टीस","gl":"गेलीशियन","gn":"गौरानी","gor":"गोरोंटालो","gsw":"स्विज जर्मन","gu":"गुजराती","guz":"गुसी","gv":"मॅन्स","gwi":"ग्विच","ha":"हौसा","haw":"हवायियान","he":"हिब्रू","hi":"हिन्दी","hil":"हिलीगायनॉन","hmn":"मोंग","hr":"क्रोयेषियन्","hsb":"अपर सोर्बियन","ht":"हैतियन क्रेयॉल","hu":"हंगेरियन्","hup":"हुपा","hy":"आर्मेनियन","hz":"हिरिरो","ia":"इन्टरलिंग्वा","iba":"आयबन","ibb":"ईबिबियो","id":"इंडोनेशियन","ie":"इन्टरलिंग्","ig":"इग्बो","ii":"सिच्युआन यी","ik":"इनूपेयाक्","ilo":"लोको","inh":"इंगूश","io":"इदो","is":"आईस्लान्डिक","it":"इटालियन","iu":"इन्युकट्ट","ja":"जपानी","jbo":"लोबजान","jgo":"न्गोंबा","jmc":"मचामे","jv":"जावनीस्","ka":"जार्जियन्","kab":"काबायले","kac":"काचीन","kaj":"जु","kam":"कंबा","kbd":"काबार्डियन","kcg":"त्याप","kde":"माकोंडे","kea":"काबुवर्डियनु","kfo":"कोरो","kha":"खासी","khq":"कोयरा छिनी","ki":"किकुयु","kj":"कुयांमा","kk":"कज़ख्","kkj":"काको","kl":"कालाल्लिसुट","kln":"कालेंजीन","km":"कंबोडियन","kmb":"किंबुंडु","kn":"कन्नडा","ko":"कोरियन्","kok":"कोंकणी","kpe":"पेल्ले","kr":"कानुरी","krc":"कराची-बाल्कर","krl":"कारेलियन","kru":"कुरुख","ks":"कश्मीरी","ksb":"शांबाला","ksf":"बाफिया","ksh":"कोलोनियन","ku":"कुर्दिष","kum":"कुमयक","kv":"कोमी","kw":"कोर्निश","ky":"किर्गिज़","la":"लाटिन","lad":"लाडिनो","lag":"लांगी","lb":"लक्सेमबर्गीश","lez":"लेझघियान","lg":"गांडा","li":"लिंबुर्ग","lkt":"लाकोटा","ln":"लिंगाला","lo":"लाओ","lou":"lou","loz":"लोझीं","lrc":"उत्तरीय लुरी","lt":"लिथुआनियन्","lu":"लुबा-काटांगा","lua":"लुबा-लुलुआ","lun":"लुंडा","luo":"लुओ","lus":"मिझो","luy":"लुय","lv":"लाट्वियन् (लेट्टिष्)","mad":"मादुरेसे","mag":"मगाही","mai":"मैथिली","mak":"माक","mas":"मसाई","mdf":"मोक्ष","men":"मेंडे","mer":"मेरू","mfe":"मोरिसेन","mg":"मलागसी","mgh":"माखुवा-मिट्टो","mgo":"मेटा","mh":"मार्शली","mi":"मुरी","mic":"मिक्माक","min":"मिनाग्काबौ","mk":"मसीडोनियन्","ml":"मळियाळम","mn":"मंगोलियन","mni":"मणिपुरी","moh":"मोहाक","mos":"मोस्सी","mr":"मराठी","ms":"मलय","mt":"मालतीस्","mua":"मुडांग","mul":"साबार भाशा","mus":"क्रिक","mwl":"मिरांडीस","my":"बर्मीज़्","myv":"एरझिया","mzn":"मझांडेराणी","na":"नौरो","nap":"नेपोलिटन","naq":"नामा","nb":"नोर्वेजियन बोकमाल","nd":"उत्तर न्डेबेले","nds":"निम्न जर्मन","nds-NL":"निम्न जर्मन (नॅदरलँड)","ne":"नेपाळी","new":"नेवरी","ng":"डोंगा","nia":"नियास","niu":"नियुन","nl":"डच्","nl-BE":"फ्लेमिश","nmg":"ख्वासी","nn":"नोर्वोजियन नायनोर्स्क","nnh":"न्गेबून","no":"नोर्वेजियन","nog":"नोगाय","nqo":"नको","nr":"दक्षिण डेबेले","nso":"उत्तरीय सोथो","nus":"न्युयर","nv":"नावाजो","ny":"नांन्जा","nyn":"नानकोले","oc":"ओसिटान्","om":"ओरोमो","or":"ओडिया","os":"ओसेटिक","pa":"पंजाबी","pag":"पांगासियान","pam":"पांपान्गा","pap":"पापिमेंटो","pau":"पालुयान","pcm":"नायझेरियन पिडगीन","pl":"पॉलीश","prg":"प्रुसियन","ps":"पाष्टो","pt":"पोर्तुगीज","pt-BR":"ब्राझिलियन पोर्तुगीज","pt-PT":"युरोपियन पोर्तुगीज","qu":"क्वेच्वा","quc":"किचे","rap":"रापान्यु","rar":"रारोटोंगान","rm":"रोमान्श","rn":"रुंदी","ro":"रोमानियन","ro-MD":"मोल्डावियन्","rof":"रोम्बो","root":"रूट","ru":"रशियन","rup":"आरोमेनियन","rw":"किन्यार्वान्डा","rwk":"रवा","sa":"संस्कृत","sad":"संडावे","sah":"सखा","saq":"साम्बरू","sat":"संथाली","sba":"गांबे","sbp":"सांगू","sc":"सार्डिनियान","scn":"सिसिलियान","sco":"स्कॉट्स","sd":"सिंधी","se":"उत्तरीय सामी","seh":"सेना","ses":"कोयराबोरो सेन्नी","sg":"सांगो","sh":"सेर्बो-क्रोयेषियन्","shi":"ताछेहीट","shn":"शान","si":"सिनहालीस","sk":"स्लोवाक","sl":"स्लोवानियन","sm":"सामोअन","sma":"दक्षिणी सामी","smj":"लुले सामी","smn":"ईनारी सामी","sms":"स्कोल्ट सामी","sn":"शोना","snk":"सोनिके","so":"सोमाली","sq":"आल्बेनियन्","sr":"सर्बियन","srn":"श्रानन टोंगो","ss":"स्वाती","ssy":"साहो","st":"सावथर्न सोथो","su":"सुंदनीस","suk":"सुकुमा","sv":"स्विडीश","sw":"स्वाहिली","sw-CD":"काँगो स्वाहिली","swb":"कोमोरियन","syr":"सिरियाक","ta":"तमिळ","te":"तेलुगू","tem":"तिम्ने","teo":"तेसो","tet":"तेतम","tg":"ताजिक","th":"थाई","ti":"तिग्रिन्या","tig":"टिग्रे","tk":"तुर्कमेन","tl":"तगालोग","tlh":"क्लिंगन","tn":"सेत्स्वाना","to":"तोंगा","tpi":"तोक पिसीन","tr":"तुर्किष","trv":"तारोको","ts":"त्सोगा","tt":"तटार","tum":"तुंबुका","tvl":"तुवालू","tw":"त्वि","twq":"तासावाक","ty":"ताहीशियन","tyv":"तुविनियन","tzm":"केंद्रीय अटलास तामाझायट","udm":"उडमुर्त","ug":"उयघूर","uk":"युक्रेनियन्","umb":"यमबुंडु","und":"अज्ञात भास","ur":"उर्दू","uz":"उझबेक","vai":"वाई","ve":"वेंदा","vi":"वियत्नामीज़","vo":"ओलापुक","vun":"वुंजो","wa":"वालून","wae":"वाल्सर","wal":"वोलायटा","war":"वरय","wo":"उलोफ़","xal":"कालमायक","xh":"झ़ौसा","xog":"सोगा","yav":"यांगबेन","ybb":"येम्बा","yi":"इद्दिष्","yo":"यूरुबा","yue":"कांटोसी","za":"झ्हुन्ग","zgh":"प्रमाणीत मॉरोक्कन तमाझीट","zh":"चिनी","zh-Hans":"सोंपी चिनी","zh-Hant":"पारंपारीक चिनी","zu":"जुलू","zun":"झून","zxx":"अणकार सामुग्री ना","zza":"झाझा"},"short":{"az":"अझेरी","en-GB":"यूके इंग्लीश","en-US":"यूएस इंग्लीश"},"narrow":{}},"region":{"long":{"142":"आशिया","143":"मध्य आशिया","145":"अस्तंत आशिया","150":"येवरोप","151":"उदेंत येवरोप","154":"उत्तर येवरोप","155":"अस्तंत येवरोप","202":"उप-सहाराई आफ्रिका","419":"लॅटीन अमेरिका","001":"जग","002":"आफ्रिका","003":"उत्तर अमेरिका","005":"दक्षिण अमेरिका","009":"ओसेनिया","011":"अस्तंत आफ्रिका","013":"मध्य अमेरिका","014":"उदेंत आफ्रिका","015":"उत्तरीय आफ्रिका","017":"मध्य आफ्रिका","018":"दक्षिण आफ्रिका","019":"अमेरिकास","021":"उत्तरीय अमेरिका","029":"कॅरिबियन","030":"उदेंत आशिया","034":"दक्षिण आशिया","035":"आग्नेय आशिया","039":"दक्षिण येवरोप","053":"ऑस्ट्रेलेसिया","054":"मेलानेसिया","057":"मायक्रोनेशियन प्रांत","061":"पोलिनेशिया","AC":"असेशन आयलँड","AD":"अंडोरा","AE":"युनाइटेड अरब इमीरॅट्स","AF":"अफगानिस्तान","AG":"एँटिगुआ आनी बारबुडा","AI":"अंगुला","AL":"अल्बानीया","AM":"आर्मीनीया","AO":"अंगोला","AQ":"अंटार्क्टिका","AR":"अर्जेंटिना","AS":"अमेरिकी सामोआ","AT":"ऑस्ट्रिया","AU":"ऑस्ट्रेलीया","AW":"अरुबा","AX":"अलांड जुवे","AZ":"अजरबैजान","BA":"बोस्निया आनी हेर्जेगोविना","BB":"बारबाडोस","BD":"बांगलादेश","BE":"बेल्जियम","BF":"बुर्किना फॅसो","BG":"बल्गेरीया","BH":"बेहरेन","BI":"बुरुंडी","BJ":"बेनीन","BL":"सॅंट बार्थेल्मी","BM":"बर्मुडा","BN":"ब्रूनेई","BO":"बोलिव्हिया","BQ":"कॅरिबियन निदरलँड","BR":"ब्राझील","BS":"बहामास","BT":"भूतान","BV":"बोवट आयलँड","BW":"बोत्सवाना","BY":"बेलारूस","BZ":"बेलिझ","CA":"कॅनडा","CC":"कोकोस (कीलिंग) आयलँड","CD":"कोंगो - किंशासा","CF":"मध्य अफ्रीकी लोकसत्तकराज्य","CG":"काँगो - ब्राझाविला","CH":"स्विट्ज़रलैंड","CI":"कोत द’ईवोआर","CK":"कुक आयलँड्स","CL":"चिली","CM":"कॅमेरून","CN":"चीन","CO":"कोलंबिया","CP":"क्लिपरटॉन आयलँड","CR":"कोस्ता रिका","CU":"क्युबा","CV":"केप वर्दी","CW":"कुरसावो","CX":"क्रिसमस आयलँड","CY":"सायप्रस","CZ":"चेकिया","DE":"जर्मनी","DG":"दिगो गार्सिया","DJ":"जिबूती","DK":"डेनमार्क","DM":"डोमिनीका","DO":"डोमिनिकन प्रजासत्ताक","DZ":"अल्जेरिया","EA":"सिटा आनी मेलिल्ला","EC":"इक्वाडोर","EE":"एस्टोनिया","EG":"ईजिप्त","EH":"अस्तंत सहारा","ER":"इरिट्रिया","ES":"स्पेन","ET":"इथियोपिया","EU":"युरोपियन युनियन","EZ":"युरोझोन","FI":"फिनलँड","FJ":"फिजी","FK":"फ़ॉकलैंड आइलैंड्स","FM":"मायक्रोनेशिया","FO":"फैरो आयलँड्स","FR":"फ्रान्स","GA":"गॅबोन","GB":"युनायटेड किंगडम","GD":"ग्रेनॅडा","GE":"जॉर्जिया","GF":"फ्रेन्च गयाना","GG":"गर्नसी","GH":"घाना","GI":"जिब्राल्टर","GL":"ग्रीनलँड","GM":"गॅम्बिया","GN":"गुएनिया","GP":"ग्वाडेलोप","GQ":"इक्वेटोरियल गुएनिया","GR":"ग्रीस","GS":"दक्षिण जोर्जिया आनी दक्षिण सॅण्डविच आयलँड्स","GT":"ग्वाटेमाला","GU":"गुआम","GW":"गुअनिया-बिसाउ","GY":"गयाना","HK":"हाँग काँग SAR चीन","HM":"हर्ड आयलँड्स ऍंड मॅक्डोनाल्ड आयलँड्स","HN":"हॉनडुरस","HR":"क्रोयेशीया","HT":"हैती","HU":"हंगेरी","IC":"कॅनरी आयलैंड्स","ID":"इंडोनेशीया","IE":"आयरलँड","IL":"इज़राइल","IM":"इसले ऑफ मॅन","IN":"भारत","IO":"ब्रिटिश हिंद महासागरीय क्षेत्र","IQ":"इराक","IR":"इरान","IS":"आइसलैंड","IT":"इटली","JE":"जर्सी","JM":"जमैका","JO":"जॉर्डन","JP":"जपान","KE":"केनया","KG":"किर्गिज़स्तान","KH":"कंबोडिया","KI":"किरिबाती","KM":"कोमोरोस","KN":"सेंट किट्स आनी नेविस","KP":"उत्तर कोरिया","KR":"दक्षिण कोरिया","KW":"कुवेत","KY":"कैमेन आइलैंड्स","KZ":"कझाकस्तान","LA":"लाओस","LB":"लेबनान","LC":"सँट लुसिया","LI":"लिचेंस्टीन","LK":"श्री लंका","LR":"लायबेरीया","LS":"लिसोथो","LT":"लिथुआनिया","LU":"लक्सेमबर्ग","LV":"लॅटविया","LY":"लीबिया","MA":"मोरोक्को","MC":"मोनॅको","MD":"माल्डोवा","ME":"मॉन्टॅनग्रो","MF":"सॅंट मार्टिन","MG":"माडागास्कर","MH":"मार्शल आयलँड्स","MK":"उत्तर मॅसिडोनिया","ML":"माली","MM":"म्यानमार (बर्मा)","MN":"मंगोलिया","MO":"मकाव SAR चीन","MP":"उत्तरी मरिना आयसलैण्ड","MQ":"मार्टीनिक","MR":"मॉरिटानिया","MS":"मॉन्टसेराट","MT":"माल्टा","MU":"मॉरिशस","MV":"मालदीव","MW":"मलावी","MX":"मेक्सिको","MY":"मलेशिया","MZ":"मॉझांबीक","NA":"नामीबिया","NC":"न्यू कॅलिडोनिया","NE":"नायजर","NF":"नॉरफॉक आयलँड","NG":"नायजेरिया","NI":"निकारगुवा","NL":"नॅदरलँड","NO":"नॉर्वे","NP":"नेपाळ","NR":"नावरू","NU":"नीयू","NZ":"न्युझीलॅन्ड","OM":"ओमान","PA":"पनामा","PE":"पेरू","PF":"फ्रेन्च पोलिनेसिया","PG":"पापुआ न्यु गिनी","PH":"फिलीपिन्झ","PK":"पाकिस्तान","PL":"पोलंड","PM":"सँ. पायरे आनी मिकेलन","PN":"पिटकॅरन आयलँड्स","PR":"पिर्टो रिको","PS":"पेलेस्टीनियन प्रांत","PT":"पुर्तगाल","PW":"पलाऊ","PY":"पैराग्वे","QA":"कतार","QO":"आवटलायींग ओशेनिया","RE":"रीयूनियन","RO":"रोमानीया","RS":"सर्बिया","RU":"रूस","RW":"रवांडा","SA":"सऊदी अरेबिया","SB":"सोलोमन आइलँड्स","SC":"सेशेल्स","SD":"सूडान","SE":"स्वीडन","SG":"सिंगापूर","SH":"सेंट हेलिना","SI":"स्लोवेनिया","SJ":"स्वालबार्ड आनी जान मेयन","SK":"स्लोवाकिया","SL":"सिएरा लियॉन","SM":"सॅन मारीनो","SN":"सिनिगल","SO":"सोमालिया","SR":"सुरीनाम","SS":"दक्षिण सुडान","ST":"साओ टोम आनी प्रिन्सिप","SV":"एल साल्वाडोर","SX":"सिंट मार्टेन","SY":"सिरिया","SZ":"इस्वातिनी","TA":"त्रिस्तान दा कुन्हा","TC":"तुर्क्स आनी कॅकोज आयलँड्स","TD":"चाड","TF":"फ्रेंच दक्षिणी प्रांत","TG":"टोगो","TH":"थायलँड","TJ":"तजीकिस्तान","TK":"टोकलाऊ","TL":"तिमोर-लेस्ते","TM":"तुर्कमेनिस्तान","TN":"ट्यूनीशिया","TO":"टोंगा","TR":"तुर्की","TT":"ट्रिनीडाड आनी टोबॅगो","TV":"टुवालू","TW":"तायवान","TZ":"तांझानिया","UA":"युक्रेन","UG":"युगांडा","UM":"यु. एस. मायनर आवटलायींग आयलँड्‍स","UN":"युनायटेड नेशन्स","US":"युनायटेड स्टेट्स","UY":"उरूग्वे","UZ":"उज़्बेकिस्तान","VA":"वॅटिकन सिटी","VC":"सेंट विंसेंट ऐंड द ग्रेनेडाइंस","VE":"विनेझुएला","VG":"ब्रिटिश वर्जिन आयलँड्स","VI":"यु. एस. वर्जिन आयलँड्‍स","VN":"व्हिएतनाम","VU":"वनातू","WF":"वालिस आनी फ्यूचूना","WS":"सामोआ","XA":"स्युडो-ऍक्सेंट","XB":"स्युडो-बिडी","XK":"कोसोवो","YE":"येमेन","YT":"मेयोट","ZA":"दक्षिण आफ्रीका","ZM":"झांबिया","ZW":"जिम्बाब्वे","ZZ":"अज्ञात प्रांत"},"short":{"GB":"युके","HK":"हाँग काँग","MO":"मकाव","PS":"पेलेस्टायन","US":"युएस"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"आरबी","Aran":"Aran","Armi":"Armi","Armn":"आर्मेनियन","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"बांग्ला","Bhks":"Bhks","Bopo":"बोपोमोफो","Brah":"Brah","Brai":"ब्रैल","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"सिरिलिक","Deva":"देवनागरी","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"इथियोपीक","Geor":"जॉर्जियन","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"ग्रीक","Gujr":"गुजराती","Guru":"गुरमुखी","Hanb":"बोपोफोमो वरवीं हान","Hang":"हंगूल","Hani":"हान","Hano":"Hano","Hans":"सोंपी","Hant":"पारंपारीक","Hatr":"Hatr","Hebr":"हिब्रू","Hira":"हिरागना","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"जपानी अक्षरमाळ","Hung":"Hung","Ital":"Ital","Jamo":"जामो","Java":"Java","Jpan":"जपानी","Kali":"Kali","Kana":"कटाकाना","Khar":"Khar","Khmr":"खमेर","Khoj":"Khoj","Kits":"Kits","Knda":"कन्नड","Kore":"कोरियन","Kthi":"Kthi","Lana":"Lana","Laoo":"लाओ","Latn":"लॅटीन","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"मलयाळम","Modi":"Modi","Mong":"मोंगोलियन","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"म्यानमार","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"ओरिया","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"सिन्हाला","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"तमीळ","Tang":"Tang","Tavt":"Tavt","Telu":"तेलगू","Tfng":"Tfng","Tglg":"Tglg","Thaa":"थाणा","Thai":"थाई","Tibt":"तिबेटन","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"गणिताची चिन्नां","Zsye":"Emoji","Zsym":"चिन्नां","Zxxx":"अलिखीत","Zyyy":"सामान्य","Zzzz":"अज्ञात लिपी"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"युनाइटेड अरब इमीरॅट्स दिरहम","AFA":"AFA","AFN":"अफगाण अफगाणी","ALK":"ALK","ALL":"अल्बेनियन लेक","AMD":"अर्मेनियन ड्राम","ANG":"नॅदरलँड अँटिलियन गिल्डर","AOA":"अंगोलन क्वॉन्ज","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"अर्जेंटिना पेसो","ATS":"ATS","AUD":"ऑस्ट्रेलियाई डॉलर","AWG":"अरुबान फ्लोरिन","AZM":"AZM","AZN":"अज़रबैजानी मनात","BAD":"BAD","BAM":"बोस्निया-हेर्जेगोविना रुपांतरीत मार्क","BAN":"BAN","BBD":"बार्बाडियान डॉलर","BDT":"बांगलादेशी टाका","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"बल्गेरियन लेव","BGO":"BGO","BHD":"बहरिनी डिनार","BIF":"बुरुंडी फ्रँक","BMD":"बरमुदान डॉलर","BND":"ब्रूनेई डॉलर","BOB":"बोलिव्हियन बोलिवियानो","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"ब्राझिलियन रियाल","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"बहामियन डॉलर","BTN":"भुतानीज नागल्ट्रम","BUK":"BUK","BWP":"बोत्सवाना पुला","BYB":"BYB","BYN":"बैलोरुसियन् रूबल","BYR":"BYR","BZD":"बेलिझ डॉलर","CAD":"कॅनाडियन डॉलर","CDF":"काँगोलिसी फ्रँक","CHE":"CHE","CHF":"स्विस फ्रँक","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"चिली पेसो","CNH":"चिनी युआन (ऑफशोर)","CNX":"CNX","CNY":"चिनी युआन","COP":"कोलंबियन पेसो","COU":"COU","CRC":"कोस्ता रिका कॉलॉन","CSD":"CSD","CSK":"CSK","CUC":"क्युबान रुपांतरीत पेसो","CUP":"क्युबान पेसो","CVE":"केप वर्दे एस्कुडो","CYP":"CYP","CZK":"चेक कोरुना","DDM":"DDM","DEM":"DEM","DJF":"जिबूती फ्रँक","DKK":"डॅनिश क्रोन","DOP":"डोमिनिकन पेसो","DZD":"अल्जेरियाई डिनार","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"ईजिप्ती पावंड","ERN":"इरिट्रियन नाक्फा","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"इथियोपियाई बिरर","EUR":"युरो","FIM":"FIM","FJD":"फिजी डॉलर","FKP":"फ़ॉकलैंड आइलैंड्स पावंड","FRF":"FRF","GBP":"ब्रिटिश पावंड","GEK":"GEK","GEL":"जॉर्जियन लारी","GHC":"GHC","GHS":"घानाई सेडी","GIP":"जिब्राल्टर पावंड","GMD":"गॅम्बियन दलासी","GNF":"गिनीन फ्रँक","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"ग्वाटेमाला कुएट्झल","GWE":"GWE","GWP":"GWP","GYD":"गयाना डॉलर","HKD":"हाँग काँग डॉलर","HNL":"होंडुरान लेम्पिरा","HRD":"HRD","HRK":"क्रोयेषियन् कुना","HTG":"हैतीयन गौर्डे","HUF":"हंगेरियन फोरिंट","IDR":"इंडोनेशियन रुपिया","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"इस्त्रायली न्यु शेकेल","INR":"भारतीय रुपया","IQD":"इराकी डिनार","IRR":"ईरानी रियाल","ISJ":"ISJ","ISK":"आईस्लान्डिक क्रोना","ITL":"ITL","JMD":"जमैकन डॉलर","JOD":"जॉर्डनियन डिनार","JPY":"जपानी येन","KES":"केनयाई शिलिंग","KGS":"किरगिझस्तान सोम","KHR":"कंबोडियन रियाल","KMF":"कोमोरियन फ्रँक","KPW":"उत्तर कोरियन वॉन","KRH":"KRH","KRO":"KRO","KRW":"दक्षिण कोरियन वॉन","KWD":"कुवेती डिनार","KYD":"कैमेन आइलैंड्स डॉलर","KZT":"कझाकस्तानी टेंग","LAK":"लाओ किप","LBP":"लिबानेस पावंड","LKR":"श्री लंका रुपया","LRD":"लायबेरियन डॉलर","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"लीबियान डिनार","MAD":"मोरक्कन दिरहम","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"मोल्दोवान लियू","MGA":"मलागासी एरियारी","MGF":"MGF","MKD":"मसीडोनियन् डिनर","MKN":"MKN","MLF":"MLF","MMK":"म्यानमार क्यात","MNT":"मंगोलियन तुगरिक","MOP":"मकानेसे पटका","MRO":"MRO","MRU":"मॉरिटानिया उगिया","MTL":"MTL","MTP":"MTP","MUR":"मॉरिशस रुपी","MVP":"MVP","MVR":"मालदिवी रुफिया","MWK":"मलावियन क्वाचा","MXN":"मेक्सिकन पेसो","MXP":"MXP","MXV":"MXV","MYR":"मलेशियाई रिंग्गित","MZE":"MZE","MZM":"MZM","MZN":"मोझांबिकन मेटिकल","NAD":"नामीबिया डॉलर","NGN":"नायजेरियन नायरा","NIC":"NIC","NIO":"निकारागुआन कॉर्डोबा","NLG":"NLG","NOK":"नॉर्वेगन क्रोन","NPR":"नेपाळी रुपया","NZD":"न्युझीलॅन्ड डॉलर","OMR":"ओमानी रियाल","PAB":"पानामानियन बाल्बोआ","PEI":"PEI","PEN":"पेरिवियन सोल","PES":"PES","PGK":"पापुआ न्यु गिनी किना","PHP":"फिलिपिनी पेसो","PKR":"पाकिस्तानी रुपया","PLN":"पोलिष झ्लोटी","PLZ":"PLZ","PTE":"PTE","PYG":"पराग्वेन गौरानी","QAR":"कतारी रियाल","RHD":"RHD","ROL":"ROL","RON":"रोमानियन् लियू","RSD":"सर्बियन डिनार","RUB":"रुसी रुबल","RUR":"RUR","RWF":"रवांडा फ्रँक","SAR":"सौदी रियाल","SBD":"सोलोमन आयलँड्स डॉलर","SCR":"सेशेल्लोइस रुपी","SDD":"SDD","SDG":"सुदानी पावंड","SDP":"SDP","SEK":"स्वीदीष क्रोन","SGD":"सिंगापूरी डॉलर","SHP":"सेंट हेलिना पावंड","SIT":"SIT","SKK":"SKK","SLL":"सिएरा लियॉनी लियॉन","SOS":"सोमाली शिलिंग","SRD":"सुरीनामी डॉलर","SRG":"SRG","SSP":"दक्षिण सुडानी पावंड","STD":"STD","STN":"साओ टोम आनी प्रिन्सिप डोब्रा","SUR":"SUR","SVC":"SVC","SYP":"सिरियन पावंड","SZL":"स्वाजी लिलांगेनी","THB":"थाई बाट","TJR":"TJR","TJS":"ताजिकिस्तानी सोमोनी","TMM":"TMM","TMT":"तुर्कमेनिस्तानी मनत","TND":"ट्यूनीशियन डिनार","TOP":"टोंगन पांगा","TPE":"TPE","TRL":"TRL","TRY":"तुर्किश लायरा","TTD":"ट्रिनीडाड आनी टोबॅगो डॉलर","TWD":"न्यू तायवान डॉलर","TZS":"तंजानिया शिलिंग","UAH":"युक्रेनियन् रिव्निया","UAK":"UAK","UGS":"UGS","UGX":"युगांडा शिलिंग","USD":"युएस डॉलर","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"उरुग्वेन पेसो","UYW":"UYW","UZS":"उज़्बेकिस्तानी सोम","VEB":"VEB","VEF":"VEF","VES":"विनेझुएला बोलिव्हर","VND":"वियतनामी डोंग","VNN":"VNN","VUV":"वानूआतू वातू","WST":"समोआई टाला","XAF":"मध्य अफ्रीकी सीएफए फ्रँक","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"उदेंत कॅरिबियन डॉलर","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"अस्तंत आफ्रिकी सीएफए फ्रँक","XPD":"XPD","XPF":"सीएफपी फ्रँक","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"अज्ञात चलन","YDD":"YDD","YER":"येमेनी रियाल","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"दक्षिण आफ्रिकन रँड","ZMK":"ZMK","ZMW":"झांबियन क्वाचा","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}}},"availableLocales":["kok"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
