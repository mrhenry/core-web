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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("te").length
)) {
// Intl.DisplayNames.~locale.te
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"అఫార్","ab":"అబ్ఖాజియన్","ace":"ఆఖినీస్","ach":"అకోలి","ada":"అడాంగ్మే","ady":"అడిగాబ్జే","ae":"అవేస్టాన్","aeb":"టునీషియా అరబిక్","af":"ఆఫ్రికాన్స్","afh":"అఫ్రిహిలి","agq":"అగేమ్","ain":"ఐను","ak":"అకాన్","akk":"అక్కాడియాన్","ale":"అలియుట్","alt":"దక్షిణ ఆల్టై","am":"అమ్హారిక్","an":"అరగోనిస్","ang":"ప్రాచీన ఆంగ్లం","anp":"ఆంగిక","ar":"అరబిక్","ar-001":"ఆధునిక ప్రామాణిక అరబిక్","arc":"అరామైక్","arn":"మపుచే","arp":"అరాపాహో","arw":"అరావాక్","arz":"ఈజిప్షియన్ అరబిక్","as":"అస్సామీస్","asa":"అసు","ast":"ఆస్టూరియన్","av":"అవారిక్","awa":"అవధి","ay":"ఐమారా","az":"అజర్బైజాని","ba":"బాష్కిర్","bal":"బాలుచి","ban":"బాలినీస్","bas":"బసా","be":"బెలారుషియన్","bej":"బేజా","bem":"బెంబా","bez":"బెనా","bg":"బల్గేరియన్","bgn":"పశ్చిమ బలూచీ","bho":"భోజ్‌పురి","bi":"బిస్లామా","bik":"బికోల్","bin":"బిని","bla":"సిక్సికా","bm":"బంబారా","bn":"బంగ్లా","bo":"టిబెటన్","bpy":"బిష్ణుప్రియ","br":"బ్రెటన్","bra":"బ్రాజ్","brx":"బోడో","bs":"బోస్నియన్","bua":"బురియట్","bug":"బుగినీస్","byn":"బ్లిన్","ca":"కాటలాన్","cad":"కేడ్డో","car":"కేరిబ్","cch":"అట్సామ్","ccp":"చక్మా","ce":"చెచెన్","ceb":"సెబువానో","cgg":"చిగా","ch":"చమర్రో","chb":"చిబ్చా","chg":"చాగటై","chk":"చూకీస్","chm":"మారి","chn":"చినూక్ జార్గన్","cho":"చక్టా","chp":"చిపెవ్యాన్","chr":"చెరోకీ","chy":"చేయేన్","ckb":"సెంట్రల్ కర్డిష్","co":"కోర్సికన్","cop":"కోప్టిక్","cr":"క్రి","crh":"క్రిమియన్ టర్కిష్","crs":"సెసేల్వా క్రియోల్ ఫ్రెంచ్","cs":"చెక్","csb":"కషుబియన్","cu":"చర్చ్ స్లావిక్","cv":"చువాష్","cy":"వెల్ష్","da":"డానిష్","dak":"డకోటా","dar":"డార్గ్వా","dav":"టైటా","de":"జర్మన్","de-AT":"ఆస్ట్రియన్ జర్మన్","de-CH":"స్విస్ హై జర్మన్","del":"డెలావేర్","den":"స్లేవ్","dgr":"డోగ్రిబ్","din":"డింకా","dje":"జార్మా","doi":"డోగ్రి","dsb":"లోయర్ సోర్బియన్","dua":"డ్యూలా","dum":"మధ్యమ డచ్","dv":"దివేహి","dyo":"జోలా-ఫోనయి","dyu":"డ్యులా","dz":"జోంఖా","dzg":"డాజాగా","ebu":"ఇంబు","ee":"యూ","efi":"ఎఫిక్","egy":"ప్రాచీన ఈజిప్షియన్","eka":"ఏకాజక్","el":"గ్రీక్","elx":"ఎలామైట్","en":"ఇంగ్లీష్","en-AU":"ఆస్ట్రేలియన్ ఇంగ్లీష్","en-CA":"కెనడియన్ ఇంగ్లీష్","en-GB":"బ్రిటిష్ ఇంగ్లీష్","en-US":"అమెరికన్ ఇంగ్లీష్","enm":"మధ్యమ ఆంగ్లం","eo":"ఎస్పెరాంటో","es":"స్పానిష్","es-419":"లాటిన్ అమెరికన్ స్పానిష్","es-ES":"యూరోపియన్ స్పానిష్","es-MX":"మెక్సికన్ స్పానిష్","et":"ఎస్టోనియన్","eu":"బాస్క్యూ","ewo":"ఎవోండొ","fa":"పర్షియన్","fa-AF":"డారి","fan":"ఫాంగ్","fat":"ఫాంటి","ff":"ఫ్యుల","fi":"ఫిన్నిష్","fil":"ఫిలిపినో","fj":"ఫిజియన్","fo":"ఫారోస్","fon":"ఫాన్","fr":"ఫ్రెంచ్","fr-CA":"కెనడియెన్ ఫ్రెంచ్","fr-CH":"స్విస్ ఫ్రెంచ్","frc":"కాజున్ ఫ్రెంచ్","frm":"మధ్యమ ప్రెంచ్","fro":"ప్రాచీన ఫ్రెంచ్","frr":"ఉత్తర ఫ్రిసియన్","frs":"తూర్పు ఫ్రిసియన్","fur":"ఫ్రియులియన్","fy":"పశ్చిమ ఫ్రిసియన్","ga":"ఐరిష్","gaa":"గా","gag":"గాగౌజ్","gan":"గాన్ చైనీస్","gay":"గాయో","gba":"గ్బాయా","gd":"స్కాటిష్ గేలిక్","gez":"జీజ్","gil":"గిల్బర్టీస్","gl":"గాలిషియన్","gmh":"మధ్యమ హై జర్మన్","gn":"గ్వారనీ","goh":"ప్రాచీన హై జర్మన్","gon":"గోండి","gor":"గోరోంటలా","got":"గోథిక్","grb":"గ్రేబో","grc":"ప్రాచీన గ్రీక్","gsw":"స్విస్ జర్మన్","gu":"గుజరాతి","guz":"గుస్సీ","gv":"మాంక్స్","gwi":"గ్విచిన్","ha":"హౌసా","hai":"హైడా","hak":"హక్కా చైనీస్","haw":"హవాయియన్","he":"హిబ్రూ","hi":"హిందీ","hil":"హిలిగెనాన్","hit":"హిట్టిటే","hmn":"మోంగ్","ho":"హిరి మోటు","hr":"క్రొయేషియన్","hsb":"అప్పర్ సోర్బియన్","hsn":"జియాంగ్ చైనీస్","ht":"హైటియన్ క్రియోల్","hu":"హంగేరియన్","hup":"హుపా","hy":"ఆర్మేనియన్","hz":"హెరెరో","ia":"ఇంటర్లింగ్వా","iba":"ఐబాన్","ibb":"ఇబిబియో","id":"ఇండోనేషియన్","ie":"ఇంటర్లింగ్","ig":"ఇగ్బో","ii":"శిషువన్ ఈ","ik":"ఇనుపైయాక్","ilo":"ఐలోకో","inh":"ఇంగుష్","io":"ఈడో","is":"ఐస్లాండిక్","it":"ఇటాలియన్","iu":"ఇనుక్టిటుట్","ja":"జపనీస్","jbo":"లోజ్బాన్","jgo":"గోంబా","jmc":"మకొమ్","jpr":"జ్యుడియో-పర్షియన్","jrb":"జ్యుడియో-అరబిక్","jv":"జావనీస్","ka":"జార్జియన్","kaa":"కారా-కల్పాక్","kab":"కాబిల్","kac":"కాచిన్","kaj":"జ్యూ","kam":"కంబా","kaw":"కావి","kbd":"కబార్డియన్","kcg":"ట్యాప్","kde":"మకొండే","kea":"కాబువేర్దియను","kfo":"కోరో","kg":"కోంగో","kgp":"kgp","kha":"ఖాసి","kho":"ఖోటనీస్","khq":"కొయరా చీన్నీ","ki":"కికుయు","kj":"క్వాన్యామ","kk":"కజఖ్","kkj":"కాకో","kl":"కలాల్లిసూట్","kln":"కలెంజిన్","km":"ఖ్మేర్","kmb":"కిమ్బుండు","kn":"కన్నడ","ko":"కొరియన్","koi":"కోమి-పర్మాక్","kok":"కొంకణి","kos":"కోస్రేయన్","kpe":"పెల్లే","kr":"కానురి","krc":"కరచే-బల్కార్","krl":"కరేలియన్","kru":"కూరుఖ్","ks":"కాశ్మీరి","ksb":"శంబాలా","ksf":"బాఫియ","ksh":"కొలోనియన్","ku":"కుర్దిష్","kum":"కుమ్యిక్","kut":"కుటేనై","kv":"కోమి","kw":"కోర్నిష్","ky":"కిర్గిజ్","la":"లాటిన్","lad":"లాడినో","lag":"లాంగీ","lah":"లాహండా","lam":"లాంబా","lb":"లక్సెంబర్గిష్","lez":"లేజ్ఘియన్","lg":"గాండా","li":"లిమ్బర్గిష్","lij":"lij","lkt":"లకొటా","ln":"లింగాల","lo":"లావో","lol":"మొంగో","lou":"లూసియానా క్రియోల్","loz":"లోజి","lrc":"ఉత్తర లూరీ","lt":"లిథువేనియన్","lu":"లూబ-కటాంగ","lua":"లుబా-లులువ","lui":"లుయిసెనో","lun":"లుండా","luo":"లువో","lus":"మిజో","luy":"లుయియ","lv":"లాట్వియన్","mad":"మాదురీస్","mag":"మగాహి","mai":"మైథిలి","mak":"మకాసార్","man":"మండింగో","mas":"మాసై","mdf":"మోక్ష","mdr":"మండార్","men":"మెండే","mer":"మెరు","mfe":"మొరిస్యేన్","mg":"మలగాసి","mga":"మధ్యమ ఐరిష్","mgh":"మక్వా-మిట్టో","mgo":"మెటా","mh":"మార్షలీస్","mi":"మావొరీ","mic":"మికమాక్","min":"మినాంగ్‌కాబో","mk":"మాసిడోనియన్","ml":"మలయాళం","mn":"మంగోలియన్","mnc":"మంచు","mni":"మణిపురి","moh":"మోహాక్","mos":"మోస్సి","mr":"మరాఠీ","ms":"మలయ్","mt":"మాల్టీస్","mua":"మండాంగ్","mul":"బహుళ భాషలు","mus":"క్రీక్","mwl":"మిరాండిస్","mwr":"మార్వాడి","my":"బర్మీస్","myv":"ఎర్జియా","mzn":"మాసన్‌దెరాని","na":"నౌరు","nan":"మిన్ నాన్ చైనీస్","nap":"నియాపోలిటన్","naq":"నమ","nb":"నార్వేజియన్ బొక్మాల్","nd":"ఉత్తర దెబెలె","nds":"లో జర్మన్","nds-NL":"లో సాక్సన్","ne":"నేపాలి","new":"నెవారి","ng":"డోంగా","nia":"నియాస్","niu":"నియాన్","nl":"డచ్","nl-BE":"ఫ్లెమిష్","nmg":"క్వాసియె","nn":"నార్వేజియాన్ న్యోర్స్క్","nnh":"గింబూన్","no":"నార్వేజియన్","nog":"నోగై","non":"ప్రాచిన నోర్స్","nqo":"న్కో","nr":"దక్షిణ దెబెలె","nso":"ఉత్తర సోతో","nus":"న్యుర్","nv":"నవాజొ","nwc":"సాంప్రదాయ న్యూయారీ","ny":"న్యాన్జా","nym":"న్యంవేజి","nyn":"న్యాన్కోలె","nyo":"నేయోరో","nzi":"జీమా","oc":"ఆక్సిటన్","oj":"చేవా","om":"ఒరోమో","or":"ఒడియా","os":"ఒసేటిక్","osa":"ఒసాజ్","ota":"ఒట్టోమన్ టర్కిష్","pa":"పంజాబీ","pag":"పంగాసినాన్","pal":"పహ్లావి","pam":"పంపన్గా","pap":"పపియమేంటో","pau":"పలావెన్","pcm":"నైజీరియా పిడ్గిన్","peo":"ప్రాచీన పర్షియన్","phn":"ఫోనికన్","pi":"పాలీ","pl":"పోలిష్","pon":"పోహ్న్పెయన్","prg":"ప్రష్యన్","pro":"ప్రాచీన ప్రోవెంసాల్","ps":"పాష్టో","pt":"పోర్చుగీస్","pt-BR":"బ్రెజీలియన్ పోర్చుగీస్","pt-PT":"యూరోపియన్ పోర్చుగీస్","qu":"కెచువా","quc":"కిచే","raj":"రాజస్తానీ","rap":"రాపన్యుయి","rar":"రారోటొంగాన్","rm":"రోమన్ష్","rn":"రుండి","ro":"రోమేనియన్","ro-MD":"మొల్డావియన్","rof":"రోంబో","rom":"రోమానీ","root":"రూట్","ru":"రష్యన్","rup":"ఆరోమేనియన్","rw":"కిన్యర్వాండా","rwk":"ర్వా","sa":"సంస్కృతం","sad":"సండావి","sah":"సాఖా","sam":"సమారిటన్ అరామైక్","saq":"సంబురు","sas":"ససక్","sat":"సంతాలి","sba":"గాంబే","sbp":"సాంగు","sc":"సార్డీనియన్","scn":"సిసిలియన్","sco":"స్కాట్స్","sd":"సింధీ","sdh":"దక్షిణ కుర్డిష్","se":"ఉత్తర సామి","seh":"సెనా","sel":"సేల్కప్","ses":"కోయోరాబోరో సెన్నీ","sg":"సాంగో","sga":"ప్రాచీన ఐరిష్","sh":"సేర్బో-క్రొయేషియన్","shi":"టాచెల్‌హిట్","shn":"షాన్","si":"సింహళం","sid":"సిడామో","sk":"స్లోవక్","sl":"స్లోవేనియన్","sm":"సమోవన్","sma":"దక్షిణ సామి","smj":"లులే సామి","smn":"ఇనారి సామి","sms":"స్కోల్ట్ సామి","sn":"షోన","snk":"సోనింకి","so":"సోమాలి","sog":"సోగ్డియన్","sq":"అల్బేనియన్","sr":"సెర్బియన్","srn":"స్రానన్ టోంగో","srr":"సెరేర్","ss":"స్వాతి","ssy":"సాహో","st":"దక్షిణ సోతో","su":"సండానీస్","suk":"సుకుమా","sus":"సుసు","sux":"సుమేరియాన్","sv":"స్వీడిష్","sw":"స్వాహిలి","sw-CD":"కాంగో స్వాహిలి","swb":"కొమొరియన్","syc":"సాంప్రదాయ సిరియాక్","syr":"సిరియాక్","ta":"తమిళము","tcy":"తుళు","te":"తెలుగు","tem":"టిమ్నే","teo":"టెసో","ter":"టెరెనో","tet":"టేటం","tg":"తజిక్","th":"థాయ్","ti":"టిగ్రిన్యా","tig":"టీగ్రె","tiv":"టివ్","tk":"తుర్క్‌మెన్","tkl":"టోకెలావ్","tl":"టగలాగ్","tlh":"క్లింగాన్","tli":"ట్లింగిట్","tmh":"టామషేక్","tn":"స్వానా","to":"టాంగాన్","tog":"న్యాసా టోన్గా","tpi":"టోక్ పిసిన్","tr":"టర్కిష్","trv":"తరోకో","ts":"సోంగా","tsi":"శింషీయన్","tt":"టాటర్","tum":"టుంబుకా","tvl":"టువాలు","tw":"ట్వి","twq":"టసావాఖ్","ty":"తహితియన్","tyv":"టువినియన్","tzm":"సెంట్రల్ అట్లాస్ టామాజైట్","udm":"ఉడ్ముర్ట్","ug":"ఉయ్‌ఘర్","uga":"ఉగారిటిక్","uk":"ఉక్రెయినియన్","umb":"ఉమ్బుండు","und":"తెలియని భాష","ur":"ఉర్దూ","uz":"ఉజ్బెక్","vai":"వాయి","ve":"వెండా","vi":"వియత్నామీస్","vo":"వోలాపుక్","vot":"వోటిక్","vun":"వుంజొ","wa":"వాలూన్","wae":"వాల్సర్","wal":"వాలేట్టా","war":"వారే","was":"వాషో","wbp":"వార్లపిరి","wo":"ఉలూఫ్","wuu":"వు చైనీస్","xal":"కల్మిక్","xh":"షోసా","xog":"సొగా","yao":"యాయే","yap":"యాపిస్","yav":"యాంగ్‌బెన్","ybb":"యెంబా","yi":"ఇడ్డిష్","yo":"యోరుబా","yue":"కాంటనీస్","za":"జువాన్","zap":"జపోటెక్","zbl":"బ్లిసింబల్స్","zen":"జెనాగా","zgh":"ప్రామాణిక మొరొకన్ టామజైట్","zh":"చైనీస్","zh-Hans":"సరళీకృత చైనీస్","zh-Hant":"సాంప్రదాయక చైనీస్","zu":"జూలూ","zun":"జుని","zxx":"లిపి లేదు","zza":"జాజా"},"short":{"az":"అజెరి","en-GB":"యు.కె. ఇంగ్లీష్","en-US":"యు.ఎస్. ఇంగ్లీష్"},"narrow":{}},"region":{"long":{"142":"ఆసియా","143":"మధ్య ఆసియా","145":"పశ్చిమ ఆసియా","150":"యూరోప్","151":"తూర్పు యూరోప్","154":"ఉత్తర యూరోప్","155":"పశ్చిమ యూరోప్","202":"ఉప సెహరన్ ఆఫ్రికా","419":"లాటిన్ అమెరికా","001":"ప్రపంచం","002":"ఆఫ్రికా","003":"ఉత్తర అమెరికా","005":"దక్షిణ అమెరికా","009":"ఓషినియా","011":"పశ్చిమ ఆఫ్రికా భూభాగం","013":"మధ్యమ అమెరికా","014":"తూర్పు ఆఫ్రికా","015":"ఉత్తర ఆఫ్రికా","017":"మధ్యమ ఆఫ్రికా","018":"దక్షిణ ఆఫ్రికా భూభాగం","019":"అమెరికాస్","021":"ఉత్తర అమెరికా భూభాగం","029":"కరిబ్బియన్","030":"తూర్పు ఆసియా","034":"దక్షిణ ఆసియా","035":"ఆగ్నేయ ఆసియా","039":"దక్షిణ యూరోప్","053":"ఆస్ట్రేలేసియా","054":"మెలనేశియ","057":"మైక్రోనేశియ ప్రాంతం","061":"పాలినేషియా","AC":"అసెన్షన్ దీవి","AD":"ఆండోరా","AE":"యునైటెడ్ అరబ్ ఎమిరేట్స్","AF":"ఆఫ్ఘనిస్తాన్","AG":"ఆంటిగ్వా మరియు బార్బుడా","AI":"ఆంగ్విల్లా","AL":"అల్బేనియా","AM":"ఆర్మేనియా","AO":"అంగోలా","AQ":"అంటార్కిటికా","AR":"అర్జెంటీనా","AS":"అమెరికన్ సమోవా","AT":"ఆస్ట్రియా","AU":"ఆస్ట్రేలియా","AW":"అరుబా","AX":"ఆలాండ్ దీవులు","AZ":"అజర్బైజాన్","BA":"బోస్నియా మరియు హెర్జిగోవినా","BB":"బార్బడోస్","BD":"బంగ్లాదేశ్","BE":"బెల్జియం","BF":"బుర్కినా ఫాసో","BG":"బల్గేరియా","BH":"బహ్రెయిన్","BI":"బురుండి","BJ":"బెనిన్","BL":"సెయింట్ బర్థెలిమి","BM":"బెర్ముడా","BN":"బ్రూనే","BO":"బొలీవియా","BQ":"కరీబియన్ నెదర్లాండ్స్","BR":"బ్రెజిల్","BS":"బహామాస్","BT":"భూటాన్","BV":"బువై దీవి","BW":"బోట్స్వానా","BY":"బెలారస్","BZ":"బెలిజ్","CA":"కెనడా","CC":"కోకోస్ (కీలింగ్) దీవులు","CD":"కాంగో- కిన్షాసా","CF":"సెంట్రల్ ఆఫ్రికన్ రిపబ్లిక్","CG":"కాంగో- బ్రాజావిల్లి","CH":"స్విట్జర్లాండ్","CI":"కోట్ డి ఐవోర్","CK":"కుక్ దీవులు","CL":"చిలీ","CM":"కామెరూన్","CN":"చైనా","CO":"కొలంబియా","CP":"క్లిప్పర్టన్ దీవి","CR":"కోస్టా రికా","CU":"క్యూబా","CV":"కేప్ వెర్డె","CW":"క్యూరసో","CX":"క్రిస్మస్ దీవి","CY":"సైప్రస్","CZ":"చెకియా","DE":"జర్మనీ","DG":"డియాగో గార్సియా","DJ":"జిబౌటి","DK":"డెన్మార్క్","DM":"డొమినికా","DO":"డొమినికన్ రిపబ్లిక్","DZ":"అల్జీరియా","EA":"స్యూటా & మెలిల్లా","EC":"ఈక్వడార్","EE":"ఎస్టోనియా","EG":"ఈజిప్ట్","EH":"పడమటి సహారా","ER":"ఎరిట్రియా","ES":"స్పెయిన్","ET":"ఇథియోపియా","EU":"యూరోపియన్ యూనియన్","EZ":"యూరోజోన్","FI":"ఫిన్లాండ్","FJ":"ఫిజీ","FK":"ఫాక్‌ల్యాండ్ దీవులు","FM":"మైక్రోనేషియా","FO":"ఫారో దీవులు","FR":"ఫ్రాన్స్‌","GA":"గేబన్","GB":"యునైటెడ్ కింగ్‌డమ్","GD":"గ్రెనడా","GE":"జార్జియా","GF":"ఫ్రెంచ్ గియానా","GG":"గర్న్‌సీ","GH":"ఘనా","GI":"జిబ్రాల్టర్","GL":"గ్రీన్‌ల్యాండ్","GM":"గాంబియా","GN":"గినియా","GP":"గ్వాడెలోప్","GQ":"ఈక్వటోరియల్ గినియా","GR":"గ్రీస్","GS":"దక్షిణ జార్జియా మరియు దక్షిణ శాండ్విచ్ దీవులు","GT":"గ్వాటిమాలా","GU":"గ్వామ్","GW":"గినియా-బిస్సావ్","GY":"గయానా","HK":"హాంకాంగ్ ఎస్ఏఆర్ చైనా","HM":"హెర్డ్ దీవి మరియు మెక్‌డొనాల్డ్ దీవులు","HN":"హోండురాస్","HR":"క్రొయేషియా","HT":"హైటి","HU":"హంగేరీ","IC":"కేనరీ దీవులు","ID":"ఇండోనేషియా","IE":"ఐర్లాండ్","IL":"ఇజ్రాయెల్","IM":"ఐల్ ఆఫ్ మాన్","IN":"భారతదేశం","IO":"బ్రిటిష్ హిందూ మహాసముద్ర ప్రాంతం","IQ":"ఇరాక్","IR":"ఇరాన్","IS":"ఐస్లాండ్","IT":"ఇటలీ","JE":"జెర్సీ","JM":"జమైకా","JO":"జోర్డాన్","JP":"జపాన్","KE":"కెన్యా","KG":"కిర్గిజిస్తాన్","KH":"కంబోడియా","KI":"కిరిబాటి","KM":"కొమొరోస్","KN":"సెయింట్ కిట్స్ మరియు నెవిస్","KP":"ఉత్తర కొరియా","KR":"దక్షిణ కొరియా","KW":"కువైట్","KY":"కేమాన్ దీవులు","KZ":"కజకిస్తాన్","LA":"లావోస్","LB":"లెబనాన్","LC":"సెయింట్ లూసియా","LI":"లిక్టెన్‌స్టెయిన్","LK":"శ్రీలంక","LR":"లైబీరియా","LS":"లెసోతో","LT":"లిథువేనియా","LU":"లక్సెంబర్గ్","LV":"లాత్వియా","LY":"లిబియా","MA":"మొరాకో","MC":"మొనాకో","MD":"మోల్డోవా","ME":"మాంటెనెగ్రో","MF":"సెయింట్ మార్టిన్","MG":"మడగాస్కర్","MH":"మార్షల్ దీవులు","MK":"ఉత్తర మాసిడోనియా","ML":"మాలి","MM":"మయన్మార్","MN":"మంగోలియా","MO":"మకావ్ ఎస్ఏఆర్ చైనా","MP":"ఉత్తర మరియానా దీవులు","MQ":"మార్టినీక్","MR":"మౌరిటేనియా","MS":"మాంట్సెరాట్","MT":"మాల్టా","MU":"మారిషస్","MV":"మాల్దీవులు","MW":"మలావీ","MX":"మెక్సికో","MY":"మలేషియా","MZ":"మొజాంబిక్","NA":"నమీబియా","NC":"క్రొత్త కాలెడోనియా","NE":"నైజర్","NF":"నార్ఫోక్ దీవి","NG":"నైజీరియా","NI":"నికరాగువా","NL":"నెదర్లాండ్స్","NO":"నార్వే","NP":"నేపాల్","NR":"నౌరు","NU":"నియూ","NZ":"న్యూజిలాండ్","OM":"ఓమన్","PA":"పనామా","PE":"పెరూ","PF":"ఫ్రెంచ్ పోలినీషియా","PG":"పాపువా న్యూ గినియా","PH":"ఫిలిప్పైన్స్","PK":"పాకిస్తాన్","PL":"పోలాండ్","PM":"సెయింట్ పియెర్ మరియు మికెలాన్","PN":"పిట్‌కెయిర్న్ దీవులు","PR":"ప్యూర్టో రికో","PS":"పాలస్తీనియన్ ప్రాంతాలు","PT":"పోర్చుగల్","PW":"పాలావ్","PY":"పరాగ్వే","QA":"ఖతార్","QO":"ఒషీనియా బయటున్నవి","RE":"రీయూనియన్","RO":"రోమేనియా","RS":"సెర్బియా","RU":"రష్యా","RW":"రువాండా","SA":"సౌదీ అరేబియా","SB":"సోలమన్ దీవులు","SC":"సీషెల్స్","SD":"సూడాన్","SE":"స్వీడన్","SG":"సింగపూర్","SH":"సెయింట్ హెలెనా","SI":"స్లోవేనియా","SJ":"స్వాల్‌బార్డ్ మరియు జాన్ మాయెన్","SK":"స్లొవేకియా","SL":"సియెర్రా లియాన్","SM":"శాన్ మారినో","SN":"సెనెగల్","SO":"సోమాలియా","SR":"సూరినామ్","SS":"దక్షిణ సూడాన్","ST":"సావో టోమ్ మరియు ప్రిన్సిపి","SV":"ఎల్ సాల్వడోర్","SX":"సింట్ మార్టెన్","SY":"సిరియా","SZ":"ఈస్వాటిని","TA":"ట్రిస్టన్ డ కన్హా","TC":"టర్క్స్ మరియు కైకోస్ దీవులు","TD":"చాద్","TF":"ఫ్రెంచ్ దక్షిణ ప్రాంతాలు","TG":"టోగో","TH":"థాయిలాండ్","TJ":"తజికిస్తాన్","TK":"టోకెలావ్","TL":"టిమోర్-లెస్టె","TM":"టర్క్‌మెనిస్తాన్","TN":"ట్యునీషియా","TO":"టోంగా","TR":"టర్కీ","TT":"ట్రినిడాడ్ మరియు టొబాగో","TV":"టువాలు","TW":"తైవాన్","TZ":"టాంజానియా","UA":"ఉక్రెయిన్","UG":"ఉగాండా","UM":"సంయుక్త రాజ్య అమెరికా బయట ఉన్న దీవులు","UN":"యునైటెడ్ నేషన్స్","US":"యునైటెడ్ స్టేట్స్","UY":"ఉరుగ్వే","UZ":"ఉజ్బెకిస్తాన్","VA":"వాటికన్ నగరం","VC":"సెయింట్ విన్సెంట్ మరియు గ్రెనడీన్స్","VE":"వెనిజులా","VG":"బ్రిటిష్ వర్జిన్ దీవులు","VI":"యు.ఎస్. వర్జిన్ దీవులు","VN":"వియత్నాం","VU":"వనాటు","WF":"వాల్లిస్ మరియు ఫుటునా","WS":"సమోవా","XA":"సూడో యాక్సెంట్స్","XB":"సూడో-బిడి","XK":"కొసోవో","YE":"యెమెన్","YT":"మాయొట్","ZA":"దక్షిణ ఆఫ్రికా","ZM":"జాంబియా","ZW":"జింబాబ్వే","ZZ":"తెలియని ప్రాంతం"},"short":{"GB":"యు.కె.","HK":"హాంకాంగ్","MO":"మకావ్","PS":"పాలస్తీనా","UN":"యు.ఎన్","US":"యు.ఎస్."},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"అరబిక్","Aran":"Aran","Armi":"ఇంపీరియల్ అరామాక్","Armn":"అర్మేనియన్","Avst":"అవేస్టాన్","Bali":"బాలినీస్","Bamu":"Bamu","Bass":"Bass","Batk":"బాటక్","Beng":"బాంగ్లా","Bhks":"Bhks","Blis":"బ్లిస్సింబల్స్","Bopo":"బోపోమోఫో","Brah":"బ్రాహ్మి","Brai":"బ్రెయిల్","Bugi":"బ్యుగినీస్","Buhd":"బుహిడ్","Cakm":"చక్మా","Cans":"యునిఫైడ్ కెనెడియన్ అబొరిజినల్ సిలబిక్స్","Cari":"కారియన్","Cham":"చామ్","Cher":"చిరోకి","Chrs":"Chrs","Cirt":"సిర్థ్","Copt":"కోప్టిక్","Cprt":"సైప్రోట్","Cyrl":"సిరిలిక్","Cyrs":"ప్రాచీన చర్చ స్లావోనిక్ సిరిలిక్","Deva":"దేవనాగరి","Diak":"Diak","Dogr":"Dogr","Dsrt":"డేసెరెట్","Dupl":"Dupl","Egyd":"ఇజిప్షియన్ డెమోటిక్","Egyh":"ఇజిప్షియన్ హైరాటిక్","Egyp":"ఇజిప్షియన్ హైరోగ్లైఫ్స్","Elba":"Elba","Elym":"Elym","Ethi":"ఇథియోపిక్","Geok":"జార్జియన్ ఖట్సూరి","Geor":"జార్జియన్","Glag":"గ్లాగో లిటిక్","Gong":"Gong","Gonm":"Gonm","Goth":"గోతిక్","Gran":"Gran","Grek":"గ్రీక్","Gujr":"గుజరాతీ","Guru":"గుర్ముఖి","Hanb":"హాన్బ్","Hang":"హంగుల్","Hani":"హాన్","Hano":"హనునూ","Hans":"సరళీకృతం","Hant":"సాంప్రదాయక","Hatr":"Hatr","Hebr":"హీబ్రు","Hira":"హిరాగాన","Hluw":"Hluw","Hmng":"పాహవా హ్మోంగ్","Hmnp":"Hmnp","Hrkt":"జపనీస్ సిలబెరీస్","Hung":"ప్రాచీన హంగేరియన్","Inds":"సింధు","Ital":"ప్రాచిన ఐటాలిక్","Jamo":"జమో","Java":"జావనీస్","Jpan":"జాపనీస్","Kali":"కాయాహ్ లి","Kana":"కాటాకాన","Khar":"ఖరోషథి","Khmr":"ఖ్మేర్","Khoj":"Khoj","Kits":"Kits","Knda":"కన్నడ","Kore":"కొరియన్","Kthi":"కైథి","Lana":"లన్నా","Laoo":"లావో","Latf":"ఫ్రాక్టూర్ లాటిన్","Latg":"గేలిక్ లాటిన్","Latn":"లాటిన్","Lepc":"లేప్చా","Limb":"లింబు","Lina":"లినియర్ ఎ","Linb":"లినియర్ బి","Lisu":"Lisu","Lyci":"లిసియన్","Lydi":"లిడియన్","Mahj":"Mahj","Maka":"Maka","Mand":"మాన్డియన్","Mani":"మానిచేన్","Marc":"Marc","Maya":"మాయన్ హైరోగ్లైఫ్స్","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"మెరోఇటిక్","Mlym":"మలయాళం","Modi":"Modi","Mong":"మంగోలియన్","Moon":"మూన్","Mroo":"Mroo","Mtei":"మీటి మయెక్","Mult":"Mult","Mymr":"మయాన్మార్","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"న్కో","Nshu":"Nshu","Ogam":"ఒఘమ్","Olck":"ఓల్ చికి","Orkh":"ఓర్ఖోన్","Orya":"ఒడియా","Osge":"Osge","Osma":"ఓసమాన్య","Palm":"Palm","Pauc":"Pauc","Perm":"ప్రాచీన పెర్మిక్","Phag":"ఫాగ్స్-పా","Phli":"ఇంస్క్రిప్షనాల్ పహ్లావి","Phlp":"సల్టార్ పహ్లావి","Phlv":"పుస్తక పహ్లావి","Phnx":"ఫోనిశియన్","Plrd":"పోల్లర్డ్ ఫోనెటిక్","Prti":"ఇంస్క్రిప్షనాల్ పార్థియన్","Qaag":"Qaag","Rjng":"రేజాంగ్","Rohg":"Rohg","Roro":"రోంగో రోంగో","Runr":"రూనిక్","Samr":"సమారిటన్","Sara":"సరాటి","Sarb":"Sarb","Saur":"సౌరాష్ట్ర","Sgnw":"సంజ్ఞ లిపి","Shaw":"షవియాన్","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"సింహళం","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"సుడానీస్","Sylo":"స్లోటి నాగ్రి","Syrc":"సిరియాక్","Syre":"ఎస్ట్రానజీలో సిరియాక్","Syrj":"పశ్చిమ సిరియాక్","Syrn":"తూర్పు సిరియాక్","Tagb":"టాగ్బానవా","Takr":"Takr","Tale":"తై లీ","Talu":"క్రొత్త టై లుఇ","Taml":"తమిళము","Tang":"Tang","Tavt":"టై వియట్","Telu":"తెలుగు","Teng":"టేంగ్వార్","Tfng":"టిఫీనాఘ్","Tglg":"టగలాగ్","Thaa":"థానా","Thai":"థాయ్","Tibt":"టిబెటన్","Tirh":"Tirh","Ugar":"యుగారిటిక్","Vaii":"వాయి","Visp":"కనిపించే భాష","Wara":"Wara","Wcho":"Wcho","Xpeo":"ప్రాచీన పర్షియన్","Xsux":"సుమేరో- అక్కడియన్ క్యునిఫార్మ్","Yezi":"Yezi","Yiii":"యి","Zanb":"Zanb","Zinh":"వారసత్వం","Zmth":"గణిత సంకేతలిపి","Zsye":"ఎమోజి","Zsym":"చిహ్నాలు","Zxxx":"లిపి లేని","Zyyy":"సామాన్య","Zzzz":"తెలియని లిపి"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"యునైటెడ్ ఆరబ్ ఎమిరేట్స్ దిరామ్","AFA":"AFA","AFN":"ఆఫ్ఘాన్ ఆఫ్ఘాని","ALK":"ALK","ALL":"ఆల్బేనియన్ లేక్","AMD":"అమెరికన్ డ్రామ్","ANG":"నెదర్లాండ్స్ యాంటిల్లియన్ గిల్‌డర్","AOA":"అంగోలాన్ క్వాన్‌జా","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"అర్జెంటీనా పెసో","ATS":"ATS","AUD":"ఆస్ట్రేలియన్ డాలర్","AWG":"అరుబన్ ఫ్లోరిన్","AZM":"AZM","AZN":"అజర్బైజాన్ మానట్","BAD":"BAD","BAM":"బోస్నియా-హెర్జగోవినా మార్పిడి చెయ్యగలిగే మార్క్","BAN":"BAN","BBD":"బర్బాడియన్ డాలర్","BDT":"బాంగ్లాదేశ్ టాకా","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"బల్గేరియన్ లేవ్","BGO":"BGO","BHD":"బహ్రెయిన్ దినార్","BIF":"బురిండియన్ ఫ్రాంక్","BMD":"బెర్ముడన్ డాలర్","BND":"బ్రూనై డాలర్","BOB":"బొలీవియన్ బొలీవియానో","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"బ్రెజిలియన్ రియల్","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"బహామియన్ డాలర్","BTN":"భూటానీయుల గుల్‌ట్రుమ్","BUK":"BUK","BWP":"బోట్స్‌వానా పులా","BYB":"BYB","BYN":"బెలరూసియన్ రూబల్","BYR":"బెలరూసియన్ రూబల్ (2000–2016)","BZD":"బెలీజ్ డాలర్","CAD":"కెనడియన్ డాలర్","CDF":"కొంగోలిస్ ఫ్రాంక్","CHE":"CHE","CHF":"స్విస్ ఫ్రాంక్","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"చిలియన్ పెసో","CNH":"చైనీస్ యూవాన్ (ఆఫ్‌షోర్)","CNX":"CNX","CNY":"చైనా దేశ యువాన్","COP":"కొలంబియన్ పెసో","COU":"COU","CRC":"కోస్టా రికన్ కోలోన్","CSD":"CSD","CSK":"CSK","CUC":"క్యూబన్ కన్వర్టబుల్ పెసో","CUP":"క్యూబన్ పెసో","CVE":"కేప్ వెర్డియన్ ఎస్కుడో","CYP":"CYP","CZK":"చెక్ రిపబ్లిక్ కోరునా","DDM":"DDM","DEM":"DEM","DJF":"జిబోటియన్ ఫ్రాంక్","DKK":"డానిష్ క్రోన్","DOP":"డోమినికన్ పెసో","DZD":"అల్జీరియన్ దీనార్","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"ఈజిప్షియన్ పౌండ్","ERN":"ఎరిట్రీన్ నక్ఫా","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ఇథియోపియన్ బర్","EUR":"యురొ","FIM":"FIM","FJD":"ఫీజియన్ డాలర్","FKP":"ఫాక్‌ల్యాండ్ దీవులు పౌండ్","FRF":"FRF","GBP":"బ్రిటిష్ పౌండ్","GEK":"GEK","GEL":"జార్జియన్ లారి","GHC":"GHC","GHS":"గానెయన్ సెడి","GIP":"జిబ్రల్‌టూర్ పౌండ్","GMD":"గాంబియన్ దలాసి","GNF":"గ్వినియన్ ఫ్రాంక్","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"గ్యుటెమాలన్ క్వెట్‌జల్","GWE":"GWE","GWP":"GWP","GYD":"గుయనియాస్ డాలర్","HKD":"హాంకాంగ్ డాలర్","HNL":"హోండురన్ లెమిపిరా","HRD":"HRD","HRK":"క్రొయేషియన్ క్యూన","HTG":"హైటియన్ గ్వోర్డే","HUF":"హంగేరియన్ ఫోరింట్","IDR":"ఇండోనేషియా రూపాయి","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ఇజ్రాయేలీ న్యూ షెకెల్","INR":"రూపాయి","IQD":"ఇరాకీ దీనార్","IRR":"ఇరానియన్ రీయల్","ISJ":"ISJ","ISK":"ఐస్లాండిక్ క్రోనా","ITL":"ITL","JMD":"జమైకన్ డాలర్","JOD":"జోర్‌డానియన్ దీనార్","JPY":"జపాను దేశ యెన్","KES":"కెన్యాన్ షిల్లింగ్","KGS":"కిర్గిస్థాని సౌమ్","KHR":"కాంబోడియన్ రీల్","KMF":"కొమోరియన్ ఫ్రాంక్","KPW":"ఉత్తర కొరియా వోన్","KRH":"KRH","KRO":"KRO","KRW":"దక్షిణ కొరియా వోన్","KWD":"కువైట్ దీనార్","KYD":"కేమాన్ దీవుల డాలర్","KZT":"ఖజికిస్థాన్ టెంగే","LAK":"లాటియన్ కిప్","LBP":"లెబనీస్ పౌండ్","LKR":"శ్రీలంక రూపాయి","LRD":"లిబేరియన్ డాలర్","LSL":"లెసోధో లోటి","LTL":"లిథోనియన్ లీటాస్","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"లాత్వియన్ లాట్స్","LVR":"LVR","LYD":"లిబియన్ దీనార్","MAD":"మోరోకన్ దిర్హుమ్","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"మోల్‌డోవన్ ల్యూ","MGA":"మలగసీ అరియరీ","MGF":"MGF","MKD":"మెసిడోనియన్ దినార్","MKN":"MKN","MLF":"MLF","MMK":"మయన్మార్ క్యాట్","MNT":"మంగోలియన్ టుగ్రిక్","MOP":"మకనీస్ పటాక","MRO":"మౌరిటానియన్ ఒగ్యియా (1973–2017)","MRU":"మౌరిటానియన్ ఒగ్యియా","MTL":"MTL","MTP":"MTP","MUR":"మారిషన్ రూపాయి","MVP":"MVP","MVR":"మాల్దీవియన్ రుఫియా","MWK":"మలావియన్ క్వాచా","MXN":"మెక్సికన్ పెసో","MXP":"MXP","MXV":"MXV","MYR":"మలేషియా రింగ్గిట్","MZE":"MZE","MZM":"MZM","MZN":"మొజాంబికన్ మెటికల్","NAD":"నమిబియన్ డాలర్","NGN":"నైజీరియన్ నైరా","NIC":"NIC","NIO":"నికరగ్యుయన్ కొర్‌డుబు","NLG":"NLG","NOK":"నార్వేజీయన్ క్రోన్","NPR":"నేపాలీయుల రూపాయి","NZD":"న్యూజిలాండ్ డాలర్","OMR":"ఒమాని రీయల్","PAB":"పనామనియన్ బల్బోవ","PEI":"PEI","PEN":"పెరువియన్ సోల్","PES":"PES","PGK":"పప్యూ న్యూ గ్యినియన్ కినా","PHP":"ఫిలిప్పిన్ పెసో","PKR":"పాకిస్థాన్ రూపాయి","PLN":"పోలిష్ జ్లోటీ","PLZ":"PLZ","PTE":"PTE","PYG":"పరగ్వాయన్ గ్వారని","QAR":"క్వాటరి రీయల్","RHD":"RHD","ROL":"ROL","RON":"రోమానియాన్ లెయు","RSD":"సెర్బియన్ దీనార్","RUB":"రష్యన్ రూబల్","RUR":"RUR","RWF":"ర్వానడాన్ ఫ్రాంక్","SAR":"సౌది రియల్","SBD":"సోలోమన్ దీవుల డాలర్","SCR":"సెయిచెల్లోయిస్ రూపాయి","SDD":"SDD","SDG":"సుడానీస్ పౌండ్","SDP":"SDP","SEK":"స్వీడిష్ క్రోనా","SGD":"సింగపూర్ డాలర్","SHP":"సెయింట్ హెలెనా పౌండ్","SIT":"SIT","SKK":"SKK","SLL":"సీయిరు లియోనియన్ లీయోన్","SOS":"సొమాలి షిల్లింగ్","SRD":"సురినామీయుల డాలర్","SRG":"SRG","SSP":"దక్షిణ సుడానీస్ పౌండ్","STD":"సావో టోమ్ మరియు ప్రిన్సిపి డోబ్రా (1977–2017)","STN":"సావో టోమ్ మరియు ప్రిన్సిపి డోబ్రా","SUR":"SUR","SVC":"SVC","SYP":"సిరీయన్ పౌండ్","SZL":"స్వాజి లిలాన్గేని","THB":"థాయ్ బాట్","TJR":"TJR","TJS":"తజికిస్థాన్ సమోని","TMM":"TMM","TMT":"తుర్క్‌మెనిస్థాని మనాట్","TND":"తునీషియన్ దీనార్","TOP":"టోంగాన్ పాంʻగా","TPE":"TPE","TRL":"TRL","TRY":"టర్కిస్ లీరా","TTD":"ట్రినిడాడ్ మరియు టొబాగో డాలర్","TWD":"క్రొత్త తైవాన్ డాలర్","TZS":"టాంజానియన్ షిల్లింగ్","UAH":"ఉక్రయినియన్ హ్రివ్‌నియా","UAK":"UAK","UGS":"UGS","UGX":"ఉగాండన్ షిల్లింగ్","USD":"అమెరికా డాలర్","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"ఉరుగ్వెయన్ పెసో","UYW":"UYW","UZS":"ఉజ్‌బెకిస్తాన్ సౌమ్","VEB":"VEB","VEF":"వెనుజులా బోలివర్ (2008–2018)","VES":"వెనుజులా బోలివర్","VND":"వియత్నామీయుల డాంగ్","VNN":"VNN","VUV":"వనాటు వటు","WST":"సమోయన్ తాలా","XAF":"సెంట్రల్ ఆఫ్రికన్ సిఎఫ్‌ఎ ఫ్రాంక్","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"తూర్పు కరీబియన్ డాలర్","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"పశ్చిమ ఆఫ్రికన్ సిఏఫ్ఏ ఫ్రాంక్","XPD":"XPD","XPF":"సిఎఫ్‌పి ఫ్రాంక్","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"తెలియని కరెన్సీ","YDD":"YDD","YER":"ఎమునీ రీయల్","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"దక్షిణ ఆఫ్రికా ర్యాండ్","ZMK":"జాంబియన్ క్వాచా (1968–2012)","ZMW":"జాంబియన్ క్వాచా","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"te"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
