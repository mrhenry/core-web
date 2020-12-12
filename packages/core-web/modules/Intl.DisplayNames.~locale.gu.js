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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("gu").length
)) {
// Intl.DisplayNames.~locale.gu
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"અફાર","ab":"અબખાજિયન","ace":"અચીની","ach":"એકોલી","ada":"અદાંગ્મી","ady":"અદિઘે","ae":"અવેસ્તન","af":"આફ્રિકન્સ","afh":"અફ્રિહિલી","agq":"અઘેમ","ain":"ઐનુ","ak":"અકાન","akk":"અક્કાદીયાન","ale":"અલેઉત","alt":"દક્ષિણ અલ્તાઇ","am":"એમ્હારિક","an":"અર્ગોનીઝ","ang":"જુની અંગ્રેજી","anp":"અંગીકા","ar":"અરબી","ar-001":"મોડર્ન સ્ટાન્ડર્ડ અરબી","arc":"એરમૈક","arn":"મેપુચે","arp":"અરાપાહો","arq":"આલ્જેરિયન અરબી","arw":"અરાવક","ary":"મોરોક્કન અરબી","arz":"ઈજિપ્શિયન અરબી","as":"આસામી","asa":"અસુ","ast":"અસ્તુરિયન","av":"અવેરિક","awa":"અવધી","ay":"આયમારા","az":"અઝરબૈજાની","ba":"બશ્કીર","bal":"બલૂચી","ban":"બાલિનીસ","bas":"બસા","bax":"બામન","be":"બેલારુશિયન","bej":"બેજા","bem":"બેમ્બા","bez":"બેના","bg":"બલ્ગેરિયન","bgn":"પશ્ચિમી બાલોચી","bho":"ભોજપુરી","bi":"બિસ્લામા","bik":"બિકોલ","bin":"બિની","bla":"સિક્સિકા","bm":"બામ્બારા","bn":"બાંગ્લા","bo":"તિબેટીયન","bpy":"બિષ્નુપ્રિયા","br":"બ્રેટોન","bra":"વ્રજ","brh":"બ્રાહુઈ","brx":"બોડો","bs":"બોસ્નિયન","bua":"બુરિયાત","bug":"બુગિનીસ","byn":"બ્લિન","ca":"કતલાન","cad":"કડ્ડો","car":"કરિબ","cch":"અત્સમ","ccp":"ચકમા","ce":"ચેચન","ceb":"સિબુઆનો","cgg":"ચિગા","ch":"કેમોરો","chb":"ચિબ્ચા","chg":"છગાતાઇ","chk":"ચૂકીસ","chm":"મારી","chn":"ચિનૂક જાર્ગન","cho":"ચોક્તૌ","chp":"શિપેવ્યાન","chr":"શેરોકી","chy":"શેયેન્ન","ckb":"સેન્ટ્રલ કુર્દિશ","co":"કોર્સિકન","cop":"કોપ્ટિક","cr":"ક્રી","crh":"ક્રિમિયન તુર્કી","crs":"સેસેલ્વા ક્રેઓલે ફ્રેન્ચ","cs":"ચેક","csb":"કાશુબિયન","cu":"ચર્ચ સ્લાવિક","cv":"ચૂવાશ","cy":"વેલ્શ","da":"ડેનિશ","dak":"દાકોતા","dar":"દાર્ગવા","dav":"તૈતા","de":"જર્મન","de-AT":"ઓસ્ટ્રિઅન જર્મન","de-CH":"સ્વિસ હાય જર્મન","del":"દેલવેર","den":"સ્લેવ","dgr":"ડોગ્રિબ","din":"દિન્કા","dje":"ઝર્મા","doi":"ડોગ્રી","dsb":"લોઅર સોર્બિયન","dua":"દુઆલા","dum":"મધ્ય ડચ","dv":"દિવેહી","dyo":"જોલા-ફોન્યી","dyu":"ડ્યુલા","dz":"ડ્ઝોંગ્ખા","dzg":"દાઝાગા","ebu":"ઍમ્બુ","ee":"ઈવ","efi":"એફિક","egy":"પ્રાચીન ઇજીપ્શિયન","eka":"એકાજુક","el":"ગ્રીક","elx":"એલામાઇટ","en":"અંગ્રેજી","en-AU":"ઓસ્ટ્રેલિયન અંગ્રેજી","en-CA":"કેનેડિયન અંગ્રેજી","en-GB":"બ્રિટિશ અંગ્રેજી","en-US":"અમેરિકન અંગ્રેજી","enm":"મિડિલ અંગ્રેજી","eo":"એસ્પેરાન્ટો","es":"સ્પેનિશ","es-419":"લેટિન અમેરિકન સ્પેનિશ","es-ES":"યુરોપિયન સ્પેનિશ","es-MX":"મેક્સિકન સ્પેનિશ","et":"એસ્ટોનિયન","eu":"બાસ્ક","ewo":"ઇવોન્ડો","fa":"ફારસી","fa-AF":"ડારી","fan":"ફેંગ","fat":"ફન્ટી","ff":"ફુલાહ","fi":"ફિનિશ","fil":"ફિલિપિનો","fj":"ફીજીયન","fo":"ફોરિસ્ત","fon":"ફોન","fr":"ફ્રેન્ચ","fr-CA":"કેનેડિયન ફ્રેંચ","fr-CH":"સ્વિસ ફ્રેંચ","frc":"કાજૂન ફ્રેન્ચ","frm":"મિડિલ ફ્રેંચ","fro":"જૂની ફ્રેંચ","frr":"ઉત્તરીય ફ્રિશિયન","frs":"પૂર્વ ફ્રિશિયન","fur":"ફ્રિયુલિયાન","fy":"પશ્ચિમી ફ્રિસિયન","ga":"આઇરિશ","gaa":"ગા","gag":"ગાગાઝ","gan":"gan","gay":"ગાયો","gba":"બાયા","gbz":"ઝોરોસ્ટ્રિઅન દારી","gd":"સ્કોટીસ ગેલિક","gez":"ગીઝ","gil":"જિલ્બરટીઝ","gl":"ગેલિશિયન","gmh":"મધ્ય હાઇ જર્મન","gn":"ગુઆરાની","goh":"જૂની હાઇ જર્મન","gom":"ગોઅન કોંકણી","gon":"ગોંડી","gor":"ગોરોન્તાલો","got":"ગોથિક","grb":"ગ્રેબો","grc":"પ્રાચીન ગ્રીક","gsw":"સ્વિસ જર્મન","gu":"ગુજરાતી","guz":"ગુસી","gv":"માંક્સ","gwi":"ગ્વિચ’ઇન","ha":"હૌસા","hai":"હૈડા","haw":"હવાઇયન","he":"હીબ્રુ","hi":"હિન્દી","hif":"ફીજી હિંદી","hil":"હિલિગેનોન","hit":"હિટ્ટિતે","hmn":"હમોંગ","ho":"હિરી મોટૂ","hr":"ક્રોએશિયન","hsb":"અપર સોર્બિયન","ht":"હૈતિઅન ક્રેઓલે","hu":"હંગેરિયન","hup":"હૂપા","hy":"આર્મેનિયન","hz":"હેરેરો","ia":"ઇંટરલિંગુઆ","iba":"ઇબાન","ibb":"ઇબિબિઓ","id":"ઇન્ડોનેશિયન","ie":"ઇંટરલિંગ","ig":"ઇગ્બો","ii":"સિચુઆન યી","ik":"ઇનુપિયાક","ilo":"ઇલોકો","inh":"ઇંગુશ","io":"ઈડો","is":"આઇસલેન્ડિક","it":"ઇટાલિયન","iu":"ઇનુકિટૂટ","ja":"જાપાનીઝ","jbo":"લોજ્બાન","jgo":"નગોમ્બા","jmc":"મકામે","jpr":"જુદેઓ-પર્શિયન","jrb":"જુદેઓ-અરબી","jv":"જાવાનીસ","ka":"જ્યોર્જિયન","kaa":"કારા-કલ્પક","kab":"કબાઇલ","kac":"કાચિન","kaj":"જ્જુ","kam":"કમ્બા","kaw":"કાવી","kbd":"કબાર્ડિયન","kcg":"ત્યાપ","kde":"મકોન્ડે","kea":"કાબુવર્ડિઆનુ","kfo":"કોરો","kg":"કોંગો","kha":"ખાસી","kho":"ખોતાનીસ","khq":"કોયરા ચિનિ","ki":"કિકુયૂ","kj":"ક્વાન્યામા","kk":"કઝાખ","kkj":"કાકો","kl":"કલાલ્લિસુત","kln":"કલેજિન","km":"ખ્મેર","kmb":"કિમ્બન્દુ","kn":"કન્નડ","ko":"કોરિયન","koi":"કોમી-પર્મ્યાક","kok":"કોંકણી","kos":"કોસરિયન","kpe":"ક્પેલ્લે","kr":"કનુરી","krc":"કરાચય-બલ્કાર","krl":"કરેલિયન","kru":"કુરૂખ","ks":"કાશ્મીરી","ksb":"શમ્બાલા","ksf":"બફિયા","ksh":"કોલોગ્નિયન","ku":"કુર્દિશ","kum":"કુમીક","kut":"કુતેનાઇ","kv":"કોમી","kw":"કોર્નિશ","ky":"કિર્ગીઝ","la":"લેટિન","lad":"લાદીનો","lag":"લંગી","lah":"લાહન્ડા","lam":"લામ્બા","lb":"લક્ઝેમબર્ગિશ","lez":"લેઝધીયન","lfn":"લિંગ્વા ફેન્કા નોવા","lg":"ગાંડા","li":"લિંબૂર્ગિશ","lkt":"લાકોટા","ln":"લિંગાલા","lo":"લાઓ","lol":"મોંગો","lou":"લ્યુઇસિયાના ક્રેઓલ","loz":"લોઝી","lrc":"ઉત્તરી લુરી","lt":"લિથુઆનિયન","lu":"લૂબા-કટાંગા","lua":"લૂબા-લુલુઆ","lui":"લુઇસેનો","lun":"લુન્ડા","luo":"લ્યુઓ","lus":"મિઝો","luy":"લુઈયા","lv":"લાતવિયન","mad":"માદુરીસ","mag":"મગહી","mai":"મૈથિલી","mak":"મકાસર","man":"મન્ડિન્ગો","mas":"મસાઇ","mdf":"મોક્ષ","mdr":"મંદાર","men":"મેન્ડે","mer":"મેરુ","mfe":"મોરીસ્યેન","mg":"મલાગસી","mga":"મધ્ય આઈરિશ","mgh":"માખુવા-મીટ્ટુ","mgo":"મેતા","mh":"માર્શલીઝ","mi":"માઓરી","mic":"મિકમેક","min":"મિનાંગ્કાબાઉ","mk":"મેસેડોનિયન","ml":"મલયાલમ","mn":"મોંગોલિયન","mnc":"માન્ચુ","mni":"મણિપુરી","moh":"મોહૌક","mos":"મોસ્સી","mr":"મરાઠી","mrj":"પશ્ચિમી મારી","ms":"મલય","mt":"માલ્ટિઝ","mua":"મુનડાન્ગ","mul":"બહુવિધ ભાષાઓ","mus":"ક્રિક","mwl":"મિરાંડી","mwr":"મારવાડી","my":"બર્મીઝ","myv":"એર્ઝયા","mzn":"મઝાન્દેરાની","na":"નાઉરૂ","nap":"નેપોલિટાન","naq":"નમા","nb":"નોર્વેજિયન બોકમાલ","nd":"ઉત્તર દેબેલ","nds":"લો જર્મન","nds-NL":"લો સેક્સોન","ne":"નેપાળી","new":"નેવારી","ng":"ડોન્ગા","nia":"નિયાસ","niu":"નિયુઆન","nl":"ડચ","nl-BE":"ફ્લેમિશ","nmg":"ક્વાસિઓ","nn":"નોર્વેજિયન નાયનૉર્સ્ક","nnh":"નીએમબુન","no":"નૉર્વેજીયન","nog":"નોગાઇ","non":"જૂની નોર્સ","nqo":"એન’કો","nr":"દક્ષિણ દેબેલ","nso":"ઉત્તરી સોથો","nus":"નુએર","nv":"નાવાજો","nwc":"પરંપરાગત નેવારી","ny":"ન્યાન્જા","nym":"ન્યામવેઝી","nyn":"ન્યાનકોલ","nyo":"ન્યોરો","nzi":"ન્ઝિમા","oc":"ઓક્સિટન","oj":"ઓજિબ્વા","om":"ઓરોમો","or":"ઉડિયા","os":"ઓસ્સેટિક","osa":"ઓસેજ","ota":"ઓટોમાન તુર્કિશ","pa":"પંજાબી","pag":"પંગાસીનાન","pal":"પહલવી","pam":"પમ્પાન્ગા","pap":"પાપિયામેન્ટો","pau":"પલાઉઆન","pcm":"નાઇજેરિયન પીજીન","peo":"જૂની ફારસી","phn":"ફોનિશિયન","pi":"પાલી","pl":"પોલીશ","pon":"પોહપિએન","prg":"પ્રુસ્સીયન","pro":"જુની પ્રોવેન્સલ","ps":"પશ્તો","pt":"પોર્ટુગીઝ","pt-BR":"બ્રાઝિલીયન પોર્ટુગીઝ","pt-PT":"યુરોપિયન પોર્ટુગીઝ","qu":"ક્વેચુઆ","quc":"કિચે","raj":"રાજસ્થાની","rap":"રાપાનુઇ","rar":"રારોટોંગન","rm":"રોમાન્શ","rn":"રૂન્દી","ro":"રોમાનિયન","ro-MD":"મોલડાવિયન","rof":"રોમ્બો","rom":"રોમાની","root":"રૂટ","ru":"રશિયન","rup":"અરોમેનિયન","rw":"કિન્યારવાન્ડા","rwk":"રવા","sa":"સંસ્કૃત","sad":"સોંડવે","sah":"સખા","sam":"સામરિટાન અરેમિક","saq":"સમ્બુરુ","sas":"સાસાક","sat":"સંતાલી","sba":"ન્ગામ્બેય","sbp":"સાંગુ","sc":"સાર્દિનિયન","scn":"સિસિલિયાન","sco":"સ્કોટ્સ","sd":"સિંધી","sdh":"સર્ઘન કુર્દીશ","se":"ઉત્તરી સામી","seh":"સેના","sel":"સેલ્કપ","ses":"કોયરાબોરો સેન્ની","sg":"સાંગો","sga":"જૂની આયરિશ","sh":"સર્બો-ક્રોએશિયન","shi":"તેશીલહિટ","shn":"શેન","si":"સિંહાલી","sid":"સિદામો","sk":"સ્લોવૅક","sl":"સ્લોવેનિયન","sm":"સામોન","sma":"દક્ષિણી સામી","smj":"લુલે સામી","smn":"ઇનારી સામી","sms":"સ્કોલ્ટ સામી","sn":"શોના","snk":"સોનિન્કે","so":"સોમાલી","sog":"સોગ્ડિએન","sq":"અલ્બેનિયન","sr":"સર્બિયન","srn":"સ્રાનન ટોન્ગો","srr":"સેરેર","ss":"સ્વાતી","ssy":"સાહો","st":"દક્ષિણ સોથો","su":"સંડેનીઝ","suk":"સુકુમા","sus":"સુસુ","sux":"સુમેરિયન","sv":"સ્વીડિશ","sw":"સ્વાહિલી","sw-CD":"કોંગો સ્વાહિલી","swb":"કોમોરિયન","syc":"પરંપરાગત સિરિએક","syr":"સિરિએક","ta":"તમિલ","tcy":"તુલુ","te":"તેલુગુ","tem":"ટિમ્ને","teo":"તેસો","ter":"તેરેનો","tet":"તેતુમ","tg":"તાજીક","th":"થાઈ","ti":"ટાઇગ્રિનિયા","tig":"ટાઇગ્રે","tiv":"તિવ","tk":"તુર્કમેન","tkl":"તોકેલાઉ","tl":"ટાગાલોગ","tlh":"ક્લિન્ગોન","tli":"ક્લીન્ગકિટ","tmh":"તામાશેખ","tn":"ત્સ્વાના","to":"ટોંગાન","tog":"ન્યાસા ટોન્ગા","tpi":"ટોક પિસિન","tr":"ટર્કિશ","trv":"ટારોકો","ts":"સોંગા","tsi":"સિમ્શિયન","tt":"તતાર","ttt":"મુસ્લિમ તાટ","tum":"તુમ્બુકા","tvl":"તુવાલુ","tw":"ટ્વાઇ","twq":"તસાવાક","ty":"તાહિતિયન","tyv":"ટુવીનિયન","tzm":"સેન્ટ્રલ એટલાસ તામાઝિટ","udm":"ઉદમુર્ત","ug":"ઉઇગુર","uga":"યુગેરિટિક","uk":"યુક્રેનિયન","umb":"ઉમ્બુન્ડૂ","und":"અજ્ઞાત ભાષા","ur":"ઉર્દૂ","uz":"ઉઝ્બેક","vai":"વાઇ","ve":"વેન્દા","vi":"વિયેતનામીસ","vo":"વોલાપુક","vot":"વોટિક","vun":"વુન્જો","wa":"વાલૂન","wae":"વેલ્સેર","wal":"વોલાયટ્ટા","war":"વારેય","was":"વાશો","wbp":"વાર્લ્પીરી","wo":"વોલોફ","xal":"કાલ્મિક","xh":"ખોસા","xog":"સોગા","yao":"યાઓ","yap":"યાપીસ","yav":"યાન્ગબેન","ybb":"યેમ્બા","yi":"યિદ્દિશ","yo":"યોરૂબા","yue":"કેંટોનીઝ","za":"ઝુઆગ","zap":"ઝેપોટેક","zbl":"બ્લિસિમ્બોલ્સ","zen":"ઝેનાગા","zgh":"માનક મોરોક્કન તામાઝિટ","zh":"ચાઇનીઝ","zh-Hans":"સરળીકૃત ચાઇનીઝ","zh-Hant":"પારંપરિક ચાઇનીઝ","zu":"ઝુલુ","zun":"ઝૂની","zxx":"કોઇ ભાષાશાસ્ત્રીય સામગ્રી નથી","zza":"ઝાઝા"},"short":{"az":"અઝેરી","en-GB":"યુ.કે. અંગ્રેજી","en-US":"યુ. એસ. અંગ્રેજી"},"narrow":{}},"region":{"long":{"142":"એશિયા","143":"મધ્ય એશિયા","145":"પશ્ચિમી એશિયા","150":"યુરોપ","151":"પૂર્વીય યુરોપ","154":"ઉત્તરીય યુરોપ","155":"પશ્ચિમી યુરોપ","202":"સબ-સહારન આફ્રિકા","419":"લેટિન અમેરિકા","001":"વિશ્વ","002":"આફ્રિકા","003":"ઉત્તર અમેરિકા","005":"દક્ષિણ અમેરિકા","009":"ઓશનિયા","011":"પશ્ચિમી આફ્રિકા","013":"મધ્ય અમેરિકા","014":"પૂર્વીય આફ્રિકા","015":"ઉત્તરી આફ્રિકા","017":"મધ્ય આફ્રિકા","018":"સધર્ન આફ્રિકા","019":"અમેરિકા","021":"ઉત્તરી અમેરિકા","029":"કેરિબિયન","030":"પૂર્વીય એશિયા","034":"દક્ષિણ એશિયા","035":"દક્ષિણપૂર્વ એશિયા","039":"દક્ષિણ યુરોપ","053":"ઓસ્ટ્રેલેશિયા","054":"મેલાનેશિયા","057":"માઈક્રોનેશિયન ક્ષેત્ર","061":"પોલિનેશિયા","AC":"એસેન્શન આઇલેન્ડ","AD":"ઍંડોરા","AE":"યુનાઇટેડ આરબ અમીરાત","AF":"અફઘાનિસ્તાન","AG":"ઍન્ટિગુઆ અને બર્મુડા","AI":"ઍંગ્વિલા","AL":"અલ્બેનિયા","AM":"આર્મેનિયા","AO":"અંગોલા","AQ":"એન્ટાર્કટિકા","AR":"આર્જેન્ટીના","AS":"અમેરિકન સમોઆ","AT":"ઑસ્ટ્રિયા","AU":"ઑસ્ટ્રેલિયા","AW":"અરુબા","AX":"ઑલેન્ડ આઇલેન્ડ્સ","AZ":"અઝરબૈજાન","BA":"બોસ્નિયા અને હર્ઝેગોવિના","BB":"બારબાડોસ","BD":"બાંગ્લાદેશ","BE":"બેલ્જીયમ","BF":"બુર્કિના ફાસો","BG":"બલ્ગેરિયા","BH":"બેહરીન","BI":"બુરુંડી","BJ":"બેનિન","BL":"સેંટ બાર્થેલેમી","BM":"બર્મુડા","BN":"બ્રુનેઇ","BO":"બોલિવિયા","BQ":"કેરેબિયન નેધરલેન્ડ્ઝ","BR":"બ્રાઝિલ","BS":"બહામાસ","BT":"ભૂટાન","BV":"બૌવેત આઇલેન્ડ","BW":"બોત્સ્વાના","BY":"બેલારુસ","BZ":"બેલીઝ","CA":"કેનેડા","CC":"કોકોઝ (કીલીંગ) આઇલેન્ડ્સ","CD":"કોંગો - કિંશાસા","CF":"સેન્ટ્રલ આફ્રિકન રિપબ્લિક","CG":"કોંગો - બ્રાઝાવિલે","CH":"સ્વિટ્ઝર્લૅન્ડ","CI":"કોટ ડીઆઇવરી","CK":"કુક આઇલેન્ડ્સ","CL":"ચિલી","CM":"કૅમરૂન","CN":"ચીન","CO":"કોલમ્બિયા","CP":"ક્લિપરટન આઇલેન્ડ","CR":"કોસ્ટા રિકા","CU":"ક્યુબા","CV":"કૅપ વર્ડે","CW":"ક્યુરાસાઓ","CX":"ક્રિસમસ આઇલેન્ડ","CY":"સાયપ્રસ","CZ":"ચેકીયા","DE":"જર્મની","DG":"ડિએગો ગારસિઆ","DJ":"જીબૌટી","DK":"ડેનમાર્ક","DM":"ડોમિનિકા","DO":"ડોમિનિકન રિપબ્લિક","DZ":"અલ્જીરિયા","EA":"સ્યુટા અને મેલિલા","EC":"એક્વાડોર","EE":"એસ્ટોનિયા","EG":"ઇજિપ્ત","EH":"પશ્ચિમી સહારા","ER":"એરિટ્રિયા","ES":"સ્પેન","ET":"ઇથિઓપિયા","EU":"યુરોપિયન સંઘ","EZ":"યુરોઝોન","FI":"ફિનલેન્ડ","FJ":"ફીજી","FK":"ફૉકલેન્ડ આઇલેન્ડ્સ","FM":"માઇક્રોનેશિયા","FO":"ફેરો આઇલેન્ડ્સ","FR":"ફ્રાંસ","GA":"ગેબન","GB":"યુનાઇટેડ કિંગડમ","GD":"ગ્રેનેડા","GE":"જ્યોર્જિયા","GF":"ફ્રેંચ ગયાના","GG":"ગ્વેર્નસે","GH":"ઘાના","GI":"જીબ્રાલ્ટર","GL":"ગ્રીનલેન્ડ","GM":"ગેમ્બિયા","GN":"ગિની","GP":"ગ્વાડેલોપ","GQ":"ઇક્વેટોરિયલ ગિની","GR":"ગ્રીસ","GS":"દક્ષિણ જ્યોર્જિયા અને દક્ષિણ સેન્ડવિચ આઇલેન્ડ્સ","GT":"ગ્વાટેમાલા","GU":"ગ્વામ","GW":"ગિની-બિસાઉ","GY":"ગયાના","HK":"હોંગકોંગ SAR ચીન","HM":"હર્ડ અને મેકડોનાલ્ડ આઇલેન્ડ્સ","HN":"હોન્ડુરસ","HR":"ક્રોએશિયા","HT":"હૈતિ","HU":"હંગેરી","IC":"કૅનેરી આઇલેન્ડ્સ","ID":"ઇન્ડોનેશિયા","IE":"આયર્લેન્ડ","IL":"ઇઝરાઇલ","IM":"આઇલ ઑફ મેન","IN":"ભારત","IO":"બ્રિટિશ ઇન્ડિયન ઓશન ટેરિટરી","IQ":"ઇરાક","IR":"ઈરાન","IS":"આઇસલેન્ડ","IT":"ઇટાલી","JE":"જર્સી","JM":"જમૈકા","JO":"જોર્ડન","JP":"જાપાન","KE":"કેન્યા","KG":"કિર્ગિઝ્સ્તાન","KH":"કંબોડિયા","KI":"કિરિબાટી","KM":"કોમોરસ","KN":"સેંટ કિટ્સ અને નેવિસ","KP":"ઉત્તર કોરિયા","KR":"દક્ષિણ કોરિયા","KW":"કુવૈત","KY":"કેમેન આઇલેન્ડ્સ","KZ":"કઝાકિસ્તાન","LA":"લાઓસ","LB":"લેબનોન","LC":"સેંટ લુસિયા","LI":"લૈચટેંસ્ટેઇન","LK":"શ્રીલંકા","LR":"લાઇબેરિયા","LS":"લેસોથો","LT":"લિથુઆનિયા","LU":"લક્ઝમબર્ગ","LV":"લાત્વિયા","LY":"લિબિયા","MA":"મોરોક્કો","MC":"મોનાકો","MD":"મોલડોવા","ME":"મૉન્ટેનેગ્રો","MF":"સેંટ માર્ટિન","MG":"મેડાગાસ્કર","MH":"માર્શલ આઇલેન્ડ્સ","MK":"ઉત્તર મેસેડોનિયા","ML":"માલી","MM":"મ્યાંમાર (બર્મા)","MN":"મંગોલિયા","MO":"મકાઉ SAR ચીન","MP":"ઉત્તરી મારિયાના આઇલેન્ડ્સ","MQ":"માર્ટીનીક","MR":"મૌરિટાનિયા","MS":"મોંટસેરાત","MT":"માલ્ટા","MU":"મોરિશિયસ","MV":"માલદિવ્સ","MW":"માલાવી","MX":"મેક્સિકો","MY":"મલેશિયા","MZ":"મોઝામ્બિક","NA":"નામિબિયા","NC":"ન્યુ સેલેડોનિયા","NE":"નાઇજર","NF":"નોરફોક આઇલેન્ડ્સ","NG":"નાઇજેરિયા","NI":"નિકારાગુઆ","NL":"નેધરલેન્ડ્સ","NO":"નૉર્વે","NP":"નેપાળ","NR":"નૌરુ","NU":"નીયુ","NZ":"ન્યુઝીલેન્ડ","OM":"ઓમાન","PA":"પનામા","PE":"પેરુ","PF":"ફ્રેંચ પોલિનેશિયા","PG":"પાપુઆ ન્યૂ ગિની","PH":"ફિલિપિન્સ","PK":"પાકિસ્તાન","PL":"પોલેંડ","PM":"સેંટ પીએરી અને મિક્યુલોન","PN":"પીટકૈર્ન આઇલેન્ડ્સ","PR":"પ્યુઅર્ટો રિકો","PS":"પેલેસ્ટિનિયન ટેરિટરી","PT":"પોર્ટુગલ","PW":"પલાઉ","PY":"પેરાગ્વે","QA":"કતાર","QO":"આઉટલાઈન્ગ ઓશનિયા","RE":"રીયુનિયન","RO":"રોમાનિયા","RS":"સર્બિયા","RU":"રશિયા","RW":"રવાંડા","SA":"સાઉદી અરેબિયા","SB":"સોલોમન આઇલેન્ડ્સ","SC":"સેશેલ્સ","SD":"સુદાન","SE":"સ્વીડન","SG":"સિંગાપુર","SH":"સેંટ હેલેના","SI":"સ્લોવેનિયા","SJ":"સ્વાલબર્ડ અને જેન મેયન","SK":"સ્લોવેકિયા","SL":"સીએરા લેઓન","SM":"સૅન મેરિનો","SN":"સેનેગલ","SO":"સોમાલિયા","SR":"સુરીનામ","SS":"દક્ષિણ સુદાન","ST":"સાઓ ટૉમ અને પ્રિંસિપે","SV":"એલ સેલ્વાડોર","SX":"સિંટ માર્ટેન","SY":"સીરિયા","SZ":"એસ્વાટીની","TA":"ત્રિસ્તાન દા કુન્હા","TC":"તુર્ક્સ અને કેકોઝ આઇલેન્ડ્સ","TD":"ચાડ","TF":"ફ્રેંચ સધર્ન ટેરિટરીઝ","TG":"ટોગો","TH":"થાઇલેંડ","TJ":"તાજીકિસ્તાન","TK":"ટોકેલાઉ","TL":"તિમોર-લેસ્તે","TM":"તુર્કમેનિસ્તાન","TN":"ટ્યુનિશિયા","TO":"ટોંગા","TR":"તુર્કી","TT":"ટ્રિનીદાદ અને ટોબેગો","TV":"તુવાલુ","TW":"તાઇવાન","TZ":"તાંઝાનિયા","UA":"યુક્રેન","UG":"યુગાંડા","UM":"યુ.એસ. આઉટલાઇનિંગ આઇલેન્ડ્સ","UN":"સંયુક્ત રાષ્ટ્ર","US":"યુનાઇટેડ સ્ટેટ્સ","UY":"ઉરુગ્વે","UZ":"ઉઝ્બેકિસ્તાન","VA":"વેટિકન સિટી","VC":"સેંટ વિન્સેંટ અને ગ્રેનેડાઇંસ","VE":"વેનેઝુએલા","VG":"બ્રિટિશ વર્જિન આઇલેન્ડ્સ","VI":"યુએસ વર્જિન આઇલેન્ડ્સ","VN":"વિયેતનામ","VU":"વાનુઆતુ","WF":"વૉલિસ અને ફ્યુચુના","WS":"સમોઆ","XA":"સ્યુડો-ઍક્સન્ટ","XB":"સ્યુડો-દ્વિદિશ","XK":"કોસોવો","YE":"યમન","YT":"મેયોટ","ZA":"દક્ષિણ આફ્રિકા","ZM":"ઝામ્બિયા","ZW":"ઝિમ્બાબ્વે","ZZ":"અજ્ઞાત પ્રદેશ"},"short":{"GB":"યુ.કે.","HK":"હોંગકોંગ","MO":"મકાઉ","PS":"પેલેસ્ટાઇન","UN":"યૂએન","US":"યુ.એસ."},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"અરબી","Aran":"Aran","Armi":"ઇમ્પિરિયલ આર્મનિક","Armn":"અર્મેનિયન","Avst":"અવેસ્તન","Bali":"બાલીનીઝ","Bamu":"Bamu","Bass":"Bass","Batk":"બટાક","Beng":"બંગાળી","Bhks":"Bhks","Blis":"બ્લિસિમ્બોલ્સ","Bopo":"બોપોમોફો","Brah":"બ્રહ્મી","Brai":"બ્રેલ","Bugi":"બગિનીસ","Buhd":"બુહિદ","Cakm":"ચકમા","Cans":"યુનાઇટેડ કેનેડિયન એબોરિજનલ સિલેબિક્સ","Cari":"કરૈન","Cham":"Cham","Cher":"ચેરોકી","Chrs":"Chrs","Cirt":"સિર્થ","Copt":"કોપ્ટિક","Cprt":"સિપ્રાયટ","Cyrl":"સિરિલિક","Cyrs":"ઓલ્ડ ચર્ચ સ્લાવોનિક સિરિલિક","Deva":"દેવનાગરી","Diak":"Diak","Dogr":"Dogr","Dsrt":"ડેસરેટ","Dupl":"Dupl","Egyd":"ઇજિપ્શિયન ડેમોટિક","Egyh":"ઇજિપ્શિયન હાઇરેટિક","Egyp":"ઇજિપ્શિયન હાઇરોગ્લિફ્સ","Elba":"Elba","Elym":"Elym","Ethi":"ઇથિયોપિક","Geok":"જ્યોર્જિઅન ખુતસુરી","Geor":"જ્યોર્જિઅન","Glag":"ગ્લેગોલિટિક","Gong":"Gong","Gonm":"Gonm","Goth":"ગોથિક","Gran":"Gran","Grek":"ગ્રીક","Gujr":"ગુજરાતી","Guru":"ગુરૂમુખી","Hanb":"હાન્બ","Hang":"હંગુલ","Hani":"હાન","Hano":"હનુનૂ","Hans":"સરળીકૃત","Hant":"પરંપરાગત","Hatr":"Hatr","Hebr":"હીબ્રુ","Hira":"હિરાગાના","Hluw":"Hluw","Hmng":"પહાઉ મોન્ગ","Hmnp":"Hmnp","Hrkt":"જાપાનીઝ વર્ણમાળા","Hung":"ઓલ્ડ હંગેરિયન","Inds":"સિન્ધુ","Ital":"જૂનુ ઇટાલિક","Jamo":"જેમો","Java":"જાવાનીસ","Jpan":"જાપાની","Kali":"કાયાહ લી","Kana":"કટાકાના","Khar":"ખારોશ્થી","Khmr":"ખ્મેર","Khoj":"Khoj","Kits":"Kits","Knda":"કન્નડા","Kore":"કોરિયન","Kthi":"કૈથી","Lana":"લાના","Laoo":"લાઓ","Latf":"ફ્રેકતુર લેટિન","Latg":"ગૈલિક લેટિન","Latn":"લેટિન","Lepc":"લેપચા","Limb":"લિમ્બૂ","Lina":"લીનિયર અ","Linb":"લીનિયર બી","Lisu":"Lisu","Lyci":"લિશિયન","Lydi":"લિડિયન","Mahj":"Mahj","Maka":"Maka","Mand":"માન્ડાયીન","Mani":"માનીચાયીન","Marc":"Marc","Maya":"મયાન હાઇરોગ્લિફ્સ","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"મેરોઇટિક","Mlym":"મલયાલમ","Modi":"Modi","Mong":"મોંગોલિયન","Moon":"મૂન","Mroo":"Mroo","Mtei":"મેઇતેઇ માયેક","Mult":"Mult","Mymr":"મ્યાંમાર","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"એન’ કો","Nshu":"Nshu","Ogam":"ઓઘામ","Olck":"ઓલ ચિકી","Orkh":"ઓરખોન","Orya":"ઉડિયા","Osge":"Osge","Osma":"ઓસ્માન્યા","Palm":"Palm","Pauc":"Pauc","Perm":"ઓલ્ડ પરમિક","Phag":"ફાગ્સ-પા","Phli":"ઇન્સ્ક્રિપ્શનલ પહલવી","Phlp":"સાલટર પહલવી","Phlv":"બુક પહલવી","Phnx":"ફોનિશિયન","Plrd":"પોલાર્ડ ફોનેટિક","Prti":"ઇન્સ્ક્રિપ્શનલ પાર્થિયન","Qaag":"Qaag","Rjng":"રીજાંગ","Rohg":"Rohg","Roro":"રોંગોરોંગો","Runr":"રૂનિક","Samr":"સમરિટાન","Sara":"સરાતી","Sarb":"Sarb","Saur":"સૌરાષ્ટ્ર","Sgnw":"સંકેત લિપી","Shaw":"શાવિયાન","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"સિંહલી","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"સુદાનીઝ","Sylo":"સિલોતી નાગરી","Syrc":"સિરિયેક","Syre":"એસ્ત્રેન્જેલો સિરિયાક","Syrj":"પશ્ચિમ સિરિયાક","Syrn":"પૂર્વ સિરિયાક","Tagb":"તગબન્વા","Takr":"Takr","Tale":"તાઇ લી","Talu":"નવીન તાઇ લૂ","Taml":"તમિલ","Tang":"Tang","Tavt":"તાઇ વેઇત","Telu":"તેલુગુ","Teng":"તેન્ગવાર","Tfng":"તિફિનાઘ","Tglg":"ટેગાલોગ","Thaa":"થાના","Thai":"થાઇ","Tibt":"ટિબેટી","Tirh":"Tirh","Ugar":"યુગાતિટિક","Vaii":"વાઇ","Visp":"વિસિબલ સ્પીચ","Wara":"Wara","Wcho":"Wcho","Xpeo":"જુની ફારસી","Xsux":"સુમેરો અક્કાદિયન સુનિફોર્મ","Yezi":"Yezi","Yiii":"યી","Zanb":"Zanb","Zinh":"વંશાગત","Zmth":"ગણિતીય સંકેતલિપિ","Zsye":"ઇમોજી","Zsym":"પ્રતીકો","Zxxx":"અલિખિત","Zyyy":"સામાન્ય","Zzzz":"અજ્ઞાત લિપિ"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"યુનાઈટેડ આરબ અમિરાત દિરહામ","AFA":"AFA","AFN":"અફ્ગાન અફ્ગાની","ALK":"ALK","ALL":"અલ્બેનિયન લેક","AMD":"અર્મેનિયન ડ્રેમ","ANG":"નેધરલેંડ એંટિલિન ગિલ્ડર","AOA":"અંગોલિયન ક્વાન્ઝા","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"અર્જેન્ટીના પેસો","ATS":"ATS","AUD":"ઑસ્ટ્રેલિયન ડૉલર","AWG":"અરુબન ફ્લોરિન","AZM":"AZM","AZN":"અઝરબૈજાની મનાત","BAD":"BAD","BAM":"બોસ્નિયા અને હર્ઝેગોવિના રૂપાંતર યોગ્ય માર્ક","BAN":"BAN","BBD":"બાર્બાડિયન ડોલર","BDT":"બાંગ્લાદેશી ટાકા","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"બલ્ગેરીયન લેવ","BGO":"BGO","BHD":"બેહરિની દિનાર","BIF":"બુરુન્ડિયન ફ્રેંક","BMD":"બર્મુડન ડોલર","BND":"બ્રુનેઇ ડોલર","BOB":"બોલિવિયન બોલિવિયાનો","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"બ્રાઝિલીયન રિઆલ","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"બહામિયન ડોલર","BTN":"ભુતાનિઝ એંગુલ્ત્રમ","BUK":"BUK","BWP":"બોત્સવાનન પુલા","BYB":"BYB","BYN":"બેલારુશિયન રૂબલ","BYR":"બેલારુશિયન રૂબલ (2000–2016)","BZD":"બેલિઝ ડોલર","CAD":"કેનેડિયન ડૉલર","CDF":"કોંગોલિઝ ફ્રેંક","CHE":"CHE","CHF":"સ્વિસ ફ્રેંક","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"ચિલિઅન પેસો","CNH":"ચાઇનીઝ યુઆન (ઑફશોર)","CNX":"CNX","CNY":"ચાઇનિઝ યુઆન","COP":"કોલમ્બિયન પેસો","COU":"COU","CRC":"કોસ્ટા રિકન કોલોન","CSD":"CSD","CSK":"CSK","CUC":"ક્યુબન રૂપાંતર યોગ્ય પેસો","CUP":"ક્યુબન પેસો","CVE":"કેપ વર્દિયન એસ્કુડો","CYP":"CYP","CZK":"ચેક રીપબ્લિક કોરુના","DDM":"DDM","DEM":"DEM","DJF":"જિબુટિયન ફ્રેંક","DKK":"ડેનિશ ક્રોન","DOP":"ડોમિનિકન પેસો","DZD":"અલ્જિરિયન દિનાર","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"ઇજિપ્તિયન પાઉન્ડ","ERN":"એરિટ્રેયન નક્ફા","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ઇથિયોપીયન બિર","EUR":"યુરો","FIM":"FIM","FJD":"ફિજિઅન ડોલર","FKP":"ફૉકલેન્ડ આઇલેંડ્સ પાઉન્ડ","FRF":"FRF","GBP":"બ્રિટિશ પાઉન્ડ","GEK":"GEK","GEL":"જ્યોર્જિઅન લારી","GHC":"GHC","GHS":"ઘાનાઇયન સેડી","GIP":"જીબ્રાલ્ટર પાઉન્ડ","GMD":"ગેમ્બિયન દલાસી","GNF":"ગિનીયન ફ્રેંક","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"ગ્વાટેમાલા કુઇટ્ઝલ","GWE":"GWE","GWP":"GWP","GYD":"ગયાનિઝ ડોલર","HKD":"હોંગ કોંગ ડૉલર","HNL":"હોન્ડ્યુરન લેમ્પિરા","HRD":"HRD","HRK":"ક્રોએશિયન ક્યુના","HTG":"હાઇટિઇન ગોર્ડ","HUF":"હંગેરીયન ફોરિન્ત","IDR":"ઇન્ડોનેશિયન રૂપિયા","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ઇઝરાયેલી ન્યુ શેકલ","INR":"ભારતીય રૂપિયા","IQD":"ઇરાકી દિનાર","IRR":"ઇરાનિયન રિયાલ","ISJ":"ISJ","ISK":"આઇસલેન્ડિક ક્રોના","ITL":"ITL","JMD":"જમૈકિયન ડોલર","JOD":"જોર્ડનિયન દિનાર","JPY":"જાપાનીઝ યેન","KES":"કેન્યેન શિલિંગ","KGS":"કિર્ગિસ્તાની સોમ","KHR":"કેમ્બોડિયન રીઅલ","KMF":"કોમોરિઅન ફ્રેંક","KPW":"ઉત્તર કોરિયન વન","KRH":"KRH","KRO":"KRO","KRW":"દક્ષિણ કોરિયન વન","KWD":"કુવૈતી દિનાર","KYD":"કેયમેન આઇલેંડ્સ ડોલર","KZT":"કઝાકિસ્તાની ટેંગ","LAK":"લાઓશિયન કિપ","LBP":"લેબેનિઝ પાઉન્ડ","LKR":"શ્રી લંકન રૂપી","LRD":"લિબેરિયન ડોલર","LSL":"લેસોથો લોતી","LTL":"લિથુએનિયન લિતાસ","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"લાતવિયન લેત્સ","LVR":"LVR","LYD":"લિબ્યન દિનાર","MAD":"મોરોક્કન દિરહામ","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"મોલડોવેન લિયુ","MGA":"માલાગેસી અરીઆરી","MGF":"MGF","MKD":"મેસેડોનિયન દિનાર","MKN":"MKN","MLF":"MLF","MMK":"મ્યાંમાર ક્યાત","MNT":"મોંગોલિયન ટગરિક","MOP":"માકાનિઝ પતાકા","MRO":"મોરીશેનિયન ઓગુયા (1973–2017)","MRU":"મોરીશેનિયન ઓગુયા","MTL":"MTL","MTP":"MTP","MUR":"મોરેશીઅન રૂપી","MVP":"MVP","MVR":"માલ્દિવિયન રુફિયા","MWK":"માલાવિયન ક્વાચા","MXN":"મેક્સિકન પેસો","MXP":"MXP","MXV":"MXV","MYR":"મલેશિયન રિંગ્ગેટ","MZE":"MZE","MZM":"MZM","MZN":"મોઝામ્બિકન મેટિકલ","NAD":"નામિબિયન ડોલર","NGN":"નાઇજીરિયન નૈરા","NIC":"NIC","NIO":"નિકારાગુઅન કોર્ડોબા","NLG":"NLG","NOK":"નૉર્વેજિયન ક્રોન","NPR":"નેપાલિઝ રૂપી","NZD":"ન્યૂઝિલેંડ ડૉલર","OMR":"ઓમાની રિયાલ","PAB":"પનામેનિયન બાલ્બોઆ","PEI":"PEI","PEN":"પેરુવિયન સોલ","PES":"PES","PGK":"પાપુઆ ન્યૂ ગિનીયન કિના","PHP":"ફિલીપાઇન પેસો","PKR":"પાકિસ્તાની રૂપી","PLN":"પોલિસ ઝ્લોટી","PLZ":"PLZ","PTE":"PTE","PYG":"પરાગ્વેયન ગુઆરાની","QAR":"કતારી રિયાલ","RHD":"RHD","ROL":"ROL","RON":"રોમાનિયન લેઉ","RSD":"સર્બિયન દિનાર","RUB":"રશિયન રૂબલ","RUR":"RUR","RWF":"રવાંડન ફ્રેંક","SAR":"સાઉદી રિયાલ","SBD":"સોલોમન આઇલેંડ્સ ડોલર","SCR":"સેશેલોઈ રૂપી","SDD":"SDD","SDG":"સુદાનિઝ પાઉન્ડ","SDP":"SDP","SEK":"સ્વીડિશ ક્રોના","SGD":"સિંગાપુર ડૉલર","SHP":"સેંટ હેલેના પાઉન્ડ","SIT":"SIT","SKK":"SKK","SLL":"સિએરા લિઓનિઅન લિઓન","SOS":"સોમાલી શિલિંગ","SRD":"સૂરીનામિઝ ડોલર","SRG":"SRG","SSP":"દક્ષિણ સુદાનિઝ પાઉન્ડ","STD":"સાઓ ટૉમ એન્ડ પ્રિંસાઇપ ડોબ્રા (1977–2017)","STN":"સાઓ ટૉમ એન્ડ પ્રિંસાઇપ ડોબ્રા","SUR":"SUR","SVC":"SVC","SYP":"સાઇરિયન પાઉન્ડ","SZL":"સ્વાઝી લિલાન્ગેની","THB":"થાઇ બાહ્ત","TJR":"TJR","TJS":"તાજિકિસ્તાની સોમોની","TMM":"TMM","TMT":"તુર્કમેનિસ્તાની મનત","TND":"ટ્યુનિશિયન દિનાર","TOP":"ટોંગન પ’અંગા","TPE":"TPE","TRL":"TRL","TRY":"તુર્કિશ લિરા","TTD":"ત્રિનિદાદ અને ટોબેગો ડોલર","TWD":"ન્યુ તાઇવાન ડૉલર","TZS":"તાન્ઝાનિયન શિલિંગ","UAH":"યુક્રેનિયન હ્રિવિનિયા","UAK":"UAK","UGS":"UGS","UGX":"યુગાંડન શિલિંગ","USD":"યુઍસ ડોલર","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"ઉરુગ્વેયન પેસો","UYW":"UYW","UZS":"ઉઝ્બેકિસ્તાન સોમ","VEB":"VEB","VEF":"વેનેઝુએલન બોલિવર (2008–2018)","VES":"વેનેઝુએલન બોલિવર","VND":"વિયેતનામીસ ડોંગ","VNN":"VNN","VUV":"વનૌતુ વાતુ","WST":"સમોઅન તાલા","XAF":"મધ્ય આફ્રિકન [CFA] ફ્રેંક","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"ઇસ્ટ કેરિબિયન ડોલર","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"પશ્ચિમી આફ્રિકન [CFA] ફ્રેંક","XPD":"XPD","XPF":"[CFP] ફ્રેંક","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"અજ્ઞાત ચલણ","YDD":"YDD","YER":"યેમેની રિઆલ","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"દક્ષિણ આફ્રિકી રેંડ","ZMK":"ઝામ્બિયન ક્વાચા (1968–2012)","ZMW":"ઝામ્બિયન ક્વાચા","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"gu"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
