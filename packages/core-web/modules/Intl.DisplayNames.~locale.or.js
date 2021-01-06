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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("or").length
)) {
// Intl.DisplayNames.~locale.or
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"ଅଫାର୍","ab":"ଆବ୍ଖାଜିଆନ୍","ace":"ଆଚାଇନୀଜ୍","ach":"ଆକୋଲି","ada":"ଆଦାଙ୍ଗେମ୍","ady":"ଅଦ୍ୟଘେ","ae":"ଅବେସ୍ତନ","af":"ଆଫ୍ରିକୀୟ","afh":"ଆଫ୍ରିହିଲି","agq":"ଆଘେମ","ain":"ଆଇନୁ","ak":"ଅକନ୍","akk":"ଆକାଡିଆନ୍","ale":"ଆଲେଇଟୁ","alt":"ଦକ୍ଷିଣ ଆଲ୍ଟାଇ","am":"ଆମହାରକି","an":"ଆର୍ଗୋନୀ","ang":"ପୁରୁଣା ଇଁରାଜୀ","anp":"ଅଁଗୀକା","ar":"ଆରବିକ୍","ar-001":"ଆଧୁନିକ ମାନାଙ୍କ ଆରବୀୟ","arc":"ଆରାମାଇକ୍","arn":"ମାପୁଚେ","arp":"ଆରାପାହୋ","arw":"ଆରୱକ","as":"ଆସାମୀୟ","asa":"ଆସୁ","ast":"ଆଷ୍ଟୁରିଆନ୍","av":"ଆଭାରିକ୍","awa":"ଆୱାଧି","ay":"ଆୟମାରା","az":"ଆଜେରବାଇଜାନି","ba":"ବାଶକିର୍","bal":"ବାଲୁଚି","ban":"ବାଲିନୀଜ୍","bas":"ବାସା","be":"ବେଲାରୁଷିଆନ୍","bej":"ବେଜା","bem":"ବେମ୍ବା","bez":"ବେନା","bg":"ବୁଲଗେରିଆନ୍","bho":"ଭୋଜପୁରୀ","bi":"ବିସଲାମା","bik":"ବିକୋଲ୍","bin":"ବିନି","bla":"ସିକସିକା","bm":"ବାମ୍ବାରା","bn":"ବଙ୍ଗଳା","bo":"ତିବ୍ବତୀୟ","br":"ବ୍ରେଟନ୍","bra":"ବ୍ରାଜ୍","brx":"ବୋଡୋ","bs":"ବୋସନିଆନ୍","bua":"ବୁରିଆଟ୍","bug":"ବୁଗୀନୀଜ୍","byn":"ବ୍ଲିନ୍","ca":"କାଟାଲାନ୍","cad":"କାଡୋ","car":"କାରିବ୍","cch":"ଆତ୍ସମ୍","ccp":"ଚକମା","ce":"ଚେଚନ୍","ceb":"ସୀବୁଆନୋ","cgg":"ଚିଗା","ch":"ଚାମୋରୋ","chb":"ଚିବ୍ଚା","chg":"ଛଗତାଇ","chk":"ଚୁକୀସେ","chm":"ମାରୀ","chn":"ଚିନୁକ୍ ଜାରଗାଁନ୍","cho":"ଚୋଟୱା","chp":"ଚିପେୱାନ୍","chr":"ଚେରୋକୀ","chy":"ଚେଚେନା","ckb":"କେନ୍ଦ୍ରୀୟ କୁରଡିସ୍","co":"କୋର୍ସିକାନ୍","cop":"କପ୍ଟିକ୍","cr":"କ୍ରୀ","crh":"କ୍ରୀମିନ୍ ତୁର୍କୀସ୍","crs":"ସେସେଲୱା କ୍ରେଓଲେ ଫ୍ରେଞ୍ଚ୍","cs":"ଚେକ୍","csb":"କାଶୁବିଆନ୍","cu":"ଚର୍ଚ୍ଚ ସ୍ଲାଭିକ୍","cv":"ଚୁଭାଶ୍","cy":"ୱେଲ୍ସ","da":"ଡାନ୍ନିସ୍","dak":"ଡାକୋଟା","dar":"ଡାରାଗ୍ୱା","dav":"ତାଇତି","de":"ଜର୍ମାନ","de-AT":"ଅଷ୍ଟ୍ରିଆନ୍ ଜର୍ମାନ","de-CH":"ସ୍ୱିସ୍‌ ହାଇ ଜର୍ମାନ","del":"ଡେଲାୱେର୍","den":"ସ୍ଲେଭ୍","dgr":"ଡୋଗ୍ରିବ୍","din":"ଦିଙ୍କା","dje":"ଜର୍ମା","doi":"ଡୋଗ୍ରୀ","dsb":"ନିମ୍ନ ସର୍ବିଆନ୍‌","dua":"ଡୁଆନା","dum":"ମଧ୍ୟ ପର୍ତ୍ତୁଗାଲୀ","dv":"ଡିଭେହୀ","dyo":"ଜୋଲା-ଫୋନୟି","dyu":"ଡୁଆଲା","dz":"ଦଡଜୋଙ୍ଗଖା","dzg":"ଡାଜାଗା","ebu":"ଏମ୍ଵୁ","ee":"ଇୱେ","efi":"ଏଫିକ୍","egy":"ପ୍ରାଚୀନ୍ ମିଶିରି","eka":"ଏକାଜୁକ୍","el":"ଗ୍ରୀକ୍","elx":"ଏଲାମାଇଟ୍","en":"ଇଂରାଜୀ","en-AU":"ଅଷ୍ଟ୍ରେଲିୟ ଇଂରାଜୀ","en-CA":"କାନାଡିୟ ଇଂରାଜୀ","en-GB":"ବ୍ରିଟିଶ୍‌ ଇଂରାଜୀ","en-US":"ଆମେରିକୀୟ ଇଂରାଜୀ","enm":"ମଧ୍ୟ ଇଁରାଜୀ","eo":"ଏସ୍ପାରେଣ୍ଟୋ","es":"ସ୍ପେନିୟ","es-419":"ଲାଟିନ୍‌ ଆମେରିକୀୟ ସ୍ପାନିସ୍‌","es-ES":"ୟୁରୋପୀୟ ସ୍ପାନିସ୍‌","es-MX":"ମେକ୍ସିକାନ ସ୍ପାନିସ୍‌","et":"ଏସ୍ତୋନିଆନ୍","eu":"ବାସ୍କ୍ୱି","ewo":"ଇୱୋଣ୍ଡୋ","fa":"ପର୍ସିଆନ୍","fa-AF":"ଦାରି","fan":"ଫାଙ୍ଗ","fat":"ଫାଣ୍ଟି","ff":"ଫୁଲାହ","fi":"ଫିନ୍ନିସ୍","fil":"ଫିଲିପିନୋ","fj":"ଫିଜି","fo":"ଫାରୋଏସେ","fon":"ଫନ୍","fr":"ଫରାସୀ","fr-CA":"କାନାଡିୟ ଫ୍ରେଞ୍ଚ","fr-CH":"ସ୍ୱିସ୍ ଫ୍ରେଞ୍ଚ","frc":"frc","frm":"ମଧ୍ୟ ଫ୍ରେଞ୍ଚ","fro":"ପୁରୁଣା ଫ୍ରେଞ୍ଚ","frr":"ଉତ୍ତର ଫ୍ରିସିୟାନ୍","frs":"ପୂର୍ବ ଫ୍ରିସିୟାନ୍","fur":"ଫ୍ରିୟୁଲୀୟାନ୍","fy":"ପାଶ୍ଚାତ୍ୟ ଫ୍ରିସିଆନ୍","ga":"ଇରିସ୍","gaa":"ଗା","gay":"ଗାୟୋ","gba":"ଗବାୟା","gd":"ସ୍କଟିସ୍ ଗାଏଲିକ୍","gez":"ଗୀଜ୍","gil":"ଜିବ୍ରାଟୀଜ୍","gl":"ଗାଲସିଆନ୍","gmh":"ମିଡିଲ୍ ହାଇ ଜର୍ମାନ୍","gn":"ଗୁଆରାନୀ","goh":"ପୁରୁଣା ହାଇ ଜର୍ମାନ୍","gon":"ଗୋଣ୍ଡି","gor":"ଗୋରୋଣ୍ଟାଲୋ","got":"ଗୋଥିକ୍","grb":"ଗ୍ରେବୋ","grc":"ପ୍ରାଚୀନ୍ ୟୁନାନୀ","gsw":"ସୁଇସ୍ ଜର୍ମାନ୍","gu":"ଗୁଜୁରାଟୀ","guz":"ଗୁସି","gv":"ମାଁକ୍ସ","gwi":"ଗୱିଚ’ଇନ୍","ha":"ହୌସା","hai":"ହାଇଡା","haw":"ହାୱାଇନ୍","he":"ହେବ୍ର୍ୟୁ","hi":"ହିନ୍ଦୀ","hil":"ହିଲିଗୈନନ୍","hit":"ହିତୀତେ","hmn":"ହଁଙ୍ଗ","ho":"ହିରି ମୋଟୁ","hr":"କ୍ରୋଆଟିଆନ୍","hsb":"ଉପର ସର୍ବିଆନ୍","ht":"ହୈତାୟିନ୍","hu":"ହଙ୍ଗେରୀୟ","hup":"ହୁପା","hy":"ଆର୍ମେନିଆନ୍","hz":"ହେରେରୋ","ia":"ଇର୍ଣ୍ଟଲିଙ୍ଗୁଆ","iba":"ଇବାନ୍","ibb":"ଇବିବିଓ","id":"ଇଣ୍ଡୋନେସୀୟ","ie":"ଇର୍ଣ୍ଟରଲିଙ୍ଗୁଇ","ig":"ଇଗବୋ","ii":"ସିଚୁଆନ୍ ୟୀ","ik":"ଇନୁପିୟାକ୍","ilo":"ଇଲୋକୋ","inh":"ଇଁଙ୍ଗୁଶ୍","io":"ଇଡୋ","is":"ଆଇସଲାଣ୍ଡିକ୍","it":"ଇଟାଲୀୟ","iu":"ଇନୁକଟିଟୁତ୍‌","ja":"ଜାପାନୀ","jbo":"ଲୋଜବାନ୍","jgo":"ନାଗୋମ୍ଵା","jmc":"ମାଚେମେ","jpr":"ଜୁଡେଓ-ପର୍ସିଆନ୍","jrb":"ଜୁଡେଓ-ଆରବୀକ୍","jv":"ଜାଭାନୀଜ୍","ka":"ଜର୍ଜିୟ","kaa":"କାରା-କଲ୍ପକ୍","kab":"କବାଇଲ୍","kac":"କଚିନ୍","kaj":"ଜଜୁ","kam":"କମ୍ବା","kaw":"କାୱି","kbd":"କାବାର୍ଡିଆନ୍","kcg":"ତ୍ୟାପ୍","kde":"ମାକୋଣ୍ଡେ","kea":"କାବୁଭେରଡିଆନୁ","kfo":"କୋରୋ","kg":"କଙ୍ଗୋ","kgp":"kgp","kha":"ଖାସୀ","kho":"ଖୋତାନୀଜ୍","khq":"କୋୟରା ଚିନି","ki":"କୀକୁୟୁ","kj":"କ୍ୱାନ୍ୟାମ୍","kk":"କାଜାକ୍","kkj":"କାକୋ","kl":"କାଲାଲିସୁଟ୍","kln":"କାଲେନଜିନ୍","km":"ଖାମେର୍","kmb":"କିମ୍ବୁଣ୍ଡୁ","kn":"କନ୍ନଡ","ko":"କୋରିଆନ୍","kok":"କୋଙ୍କଣି","kos":"କୋସରୈନ୍","kpe":"କୈପେଲେ","kr":"କନୁରୀ","krc":"କରାଚୟ-ବଲ୍କାର","krl":"କାରେଲିୟାନ୍","kru":"କୁରୁଖ","ks":"କାଶ୍ମିରୀ","ksb":"ଶାମବାଲା","ksf":"ବାଫଲା","ksh":"କୋଲୋବନିୟ","ku":"କୁର୍ଦ୍ଦିଶ୍","kum":"କୁମୀକ୍","kut":"କୁତେନାଉ","kv":"କୋମି","kw":"କୋର୍ନିସ୍","ky":"କୀରଗୀଜ୍","la":"ଲାଟିନ୍","lad":"ଲାଦିନୋ","lag":"ଲାନଗି","lah":"ଲାହାଣ୍ଡା","lam":"ଲାମ୍ବା","lb":"ଲକ୍ସେମବର୍ଗିସ୍","lez":"ଲେଜଗିୟାନ୍","lg":"ଗନ୍ଦା","li":"ଲିମ୍ବୁର୍ଗିସ୍","lij":"lij","lkt":"ଲାକୋଟା","ln":"ଲିଙ୍ଗାଲା","lo":"ଲାଓ","lol":"ମଙ୍ଗୋ","lou":"lou","loz":"ଲୋଜି","lrc":"ଉତ୍ତର ଲୁରି","lt":"ଲିଥୁଆନିଆନ୍","lu":"ଲ୍ୟୁବା-କାଟାଙ୍ଗା","lua":"ଲୁବା-ଲୁଲୁଆ","lui":"ଲୁଇସେନୋ","lun":"ଲୁଣ୍ଡା","luo":"ଲୁଓ","lus":"ମିଜୋ","luy":"ଲୁୟିଆ","lv":"ଲାଟଭିଆନ୍","mad":"ମାଦୁରୀସ୍","mag":"ମାଗାହୀ","mai":"ମୈଥିଳୀ","mak":"ମକାସର୍","man":"ମାଣ୍ଡିଙ୍ଗୋ","mas":"ମାସାଇ","mdf":"ମୋକ୍ଷ","mdr":"ମନ୍ଦାର","men":"ମେନଡେ","mer":"ମେରୁ","mfe":"ମୋରିସୟେନ୍","mg":"ମାଲାଗାସୀ","mga":"ମଧ୍ୟ ଇରିଶ୍","mgh":"ମଖୁୱା-ମେଟ୍ଟା","mgo":"ମେଟା","mh":"ମାର୍ଶାଲୀଜ୍","mi":"ମାଓରୀ","mic":"ମିକମୌକ୍","min":"ମିନାଙ୍ଗାବାଉ","mk":"ମାସେଡୋନିଆନ୍","ml":"ମାଲାୟଲମ୍","mn":"ମଙ୍ଗୋଳିୟ","mnc":"ମାଞ୍ଚୁ","mni":"ମଣିପୁରୀ","moh":"ମୋହୌକ","mos":"ମୋସି","mr":"ମରାଠୀ","ms":"ମାଲୟ","mt":"ମାଲଟୀଜ୍","mua":"ମୁନଡାଂ","mul":"ବିବିଧ ଭାଷାମାନ","mus":"କ୍ରୀକ୍","mwl":"ମିରାଣ୍ଡିଜ୍","mwr":"ମାରୱାରୀ","my":"ବର୍ମୀଜ୍","myv":"ଏର୍ଜୟା","mzn":"ମାଜାନଡେରାନି","na":"ନାଉରୁ","nap":"ନୀପୋଲିଟାନ୍","naq":"ନାମା","nb":"ନରୱେଜିଆନ୍ ବୋକମଲ୍","nd":"ଉତ୍ତର ନେଡବେଲେ","nds":"ଲୋ ଜର୍ମାନ୍","nds-NL":"ଲୋ ଜର୍ମାନ୍ (ନେଦରଲ୍ୟାଣ୍ଡ)","ne":"ନେପାଳୀ","new":"ନେୱାରୀ","ng":"ଡୋଙ୍ଗା","nia":"ନୀୟାସ୍","niu":"ନିୟୁଆନ୍","nl":"ଡଚ୍","nl-BE":"ଫ୍ଲେମିଶ୍","nmg":"କୱାସିଓ","nn":"ନରୱେଜିଆନ୍ ନିୟୋର୍ସ୍କ","nnh":"ନାଗିମବୋନ୍","no":"ନରୱେଜିଆନ୍","nog":"ନୋଗାଇ","non":"ପୁରୁଣା ନର୍ସ","nqo":"ଏନକୋ","nr":"ଦକ୍ଷିଣ ନେଡବେଲେ","nso":"ଉତ୍ତରୀ ସୋଥୋ","nus":"ନୁଏର","nv":"ନାଭାଜୋ","nwc":"ପାରମ୍ପରିକ ନେୱାରୀ","ny":"ନିୟାଞ୍ଜ","nym":"ନ୍ୟାମୱେଜୀ","nyn":"ନ୍ୟାନକୋଲ୍","nyo":"ନ୍ୟାରୋ","nzi":"ଞ୍ଜିମା","oc":"ଓସିଟାନ୍","oj":"ଓଜିୱା","om":"ଓରୋମୋ","or":"ଓଡ଼ିଆ","os":"ଓସେଟିକ୍","osa":"ୱୌସେଜ୍","ota":"ଓଟ୍ଟୋମନ୍ ତୁର୍କିସ୍","pa":"ପଞ୍ଜାବୀ","pag":"ପାଙ୍ଗାସିନିଆନ୍","pal":"ପାହ୍ଲାଭି","pam":"ପାମ୍ପାଙ୍ଗା","pap":"ପାପିଆମେଣ୍ଟୋ","pau":"ପାଲାଉଆନ୍","pcm":"ନାଇଜେରୀୟ ପିଡଗିନ୍","peo":"ପୁରୁଣା ପର୍ସିଆନ୍","phn":"ଫୋନେସିଆନ୍","pi":"ପାଲି","pl":"ପୋଲିଶ୍","pon":"ପୋହପିଏନ୍","prg":"ପ୍ରୁସିୟ","pro":"ପୁରୁଣା ପ୍ରେଭେନେସିଆଲ୍","ps":"ପାସ୍ତୋ","pt":"ପର୍ତ୍ତୁଗୀଜ୍‌","pt-BR":"ବ୍ରାଜିଲିଆନ୍ ପର୍ତ୍ତୁଗୀଜ୍","pt-PT":"ୟୁରୋପୀୟ ପର୍ତ୍ତୁଗୀଜ୍‌","qu":"କ୍ୱେଚୁଆ","quc":"କିଚେ","raj":"ରାଜସ୍ଥାନୀ","rap":"ରାପାନୁଇ","rar":"ରାରୋତୋଙ୍ଗନ୍","rm":"ରୋମାନଶ୍‌","rn":"ରୁଣ୍ଡି","ro":"ରୋମାନିଆନ୍","ro-MD":"ମୋଲଡୋଭିଆନ୍","rof":"ରୋମ୍ବୋ","rom":"ରୋମାନି","root":"ରୋଟ୍","ru":"ରୁଷିୟ","rup":"ଆରୋମାନିଆନ୍","rw":"କିନ୍ୟାରୱାଣ୍ଡା","rwk":"ଆରଡବ୍ୟୁଏ","sa":"ସଂସ୍କୃତ","sad":"ସଣ୍ଡାୱେ","sah":"ସାଖା","sam":"ସାମୌରିଟନ୍ ଆରମାଇକ୍","saq":"ସମବୁରୁ","sas":"ସାସାକ୍","sat":"ସାନ୍ତାଳି","sba":"ନଗାମବେ","sbp":"ସାନଗୁ","sc":"ସର୍ଦିନିଆନ୍","scn":"ସିଶିଲିଆନ୍","sco":"ସ୍କଟସ୍","sd":"ସିନ୍ଧୀ","se":"ଉତ୍ତର ସାମି","seh":"ସେନା","sel":"ସେଲ୍କପ୍","ses":"କୋୟରା ସେନ୍ନି","sg":"ସାଙ୍ଗୋ","sga":"ପୁରୁଣା ଇରିଶ୍","sh":"ସର୍ବୋ-କ୍ରୋଆଟିଆନ୍","shi":"ତାଚେଲହିଟ୍","shn":"ଶାନ୍","si":"ସିଂହଳ","sid":"ସିଦାମୋ","sk":"ସ୍ଲୋଭାକ୍","sl":"ସ୍ଲୋଭେନିଆନ୍","sm":"ସାମୋଆନ୍","sma":"ଦକ୍ଷିଣ ସାମି","smj":"ଲୁଲେ ସାମି","smn":"ଇନାରୀ ସାମି","sms":"ସ୍କୋଲ୍ଟ ସାମି","sn":"ଶୋନା","snk":"ସୋନିଙ୍କେ","so":"ସୋମାଲିଆ","sog":"ସୋଗଡିଏନ୍","sq":"ଆଲବାନିଆନ୍","sr":"ସର୍ବିୟ","srn":"ଶାରାନା ଟୋଙ୍ଗୋ","srr":"ଶେରେର୍","ss":"ସ୍ଵାତି","ssy":"ସହୋ","st":"ସେସୋଥୋ","su":"ସୁଦାନୀଜ୍","suk":"ସୁକୁମା","sus":"ଶୁଶୁ","sux":"ସୁମେରିଆନ୍","sv":"ସ୍ୱେଡିସ୍","sw":"ସ୍ୱାହିଲ୍","sw-CD":"କଙ୍ଗୋ ସ୍ୱାହିଲି","swb":"କୋମୋରିୟ","syc":"କ୍ଲାସିକାଲ୍ ସିରିକ୍","syr":"ସିରିକ୍","ta":"ତାମିଲ୍","te":"ତେଲୁଗୁ","tem":"ତିମନେ","teo":"ତେସା","ter":"ତେରେନୋ","tet":"ତେତୁମ୍","tg":"ତାଜିକ୍","th":"ଥାଇ","ti":"ଟ୍ରିଗିନିଆ","tig":"ଟାଇଗ୍ରେ","tiv":"ତୀଭ୍","tk":"ତୁର୍କମେନ୍","tkl":"ଟୋକେଲାଉ","tl":"ଟାଗାଲଗ୍","tlh":"କ୍ଲିଙ୍ଗନ୍","tli":"ତ୍ଲିଙ୍ଗିଟ୍","tmh":"ତାମାଶେକ୍","tn":"ସୱାନା","to":"ଟୋଙ୍ଗା","tog":"ନ୍ୟାସା ଟୋଙ୍ଗୋ","tpi":"ଟୋକ୍ ପିସିନ୍","tr":"ତୁର୍କିସ୍","trv":"ତାରୋକୋ","ts":"ସୋଙ୍ଗା","tsi":"ତିସିମିସିଆନ୍","tt":"ତାତାର୍","tum":"ଟୁମ୍ବୁକା","tvl":"ତୁଭାଲୁ","tw":"ତ୍ୱି","twq":"ତାସାୱାକ୍","ty":"ତାହିତିଆନ୍","tyv":"ତୁଭିନିଆନ୍","tzm":"କେନ୍ଦ୍ରୀୟ ଆଟଲାସ୍ ଟାମାଜିଘାଟ୍","udm":"ଉଦମୂର୍ତ୍ତ","ug":"ୟୁଘୁର୍","uga":"ୟୁଗୋରଟିକ୍","uk":"ୟୁକ୍ରାନିଆନ୍","umb":"ଉମ୍ବୁଣ୍ଡୁ","und":"ଅଜଣା ଭାଷା","ur":"ଉର୍ଦ୍ଦୁ","uz":"ଉଜବେକ୍","vai":"ଭାଇ","ve":"ଭେଣ୍ଡା","vi":"ଭିଏତନାମିଜ୍","vo":"ବୋଲାପୁକ","vot":"ଭୋଟିକ୍","vun":"ଭୁନଜୋ","wa":"ୱାଲୁନ୍","wae":"ୱାଲସେର୍","wal":"ୱାଲମୋ","war":"ୱାରୈ","was":"ୱାସୋ","wo":"ୱୋଲଫ୍","xal":"କାଲ୍ମୀକ୍","xh":"ଖୋସା","xog":"ସୋଗା","yao":"ୟାଓ","yap":"ୟାପୀସ୍","yav":"ୟାଂବେନ୍","ybb":"ୟେମବା","yi":"ୟିଡିସ୍","yo":"ୟୋରୁବା","yue":"କାନଟୋନେସେ","za":"ଜୁଆଙ୍ଗ","zap":"ଜାପୋଟେକ୍","zbl":"ବ୍ଲିସିମ୍ବଲସ୍","zen":"ଜେନାଗା","zgh":"ମାନାଙ୍କ ମରୋକିୟ ତାମାଜିଘାଟ୍","zh":"ଚାଇନିଜ୍‌","zh-Hans":"ସରଳୀକୃତ ଚାଇନିଜ୍‌","zh-Hant":"ପାରମ୍ପରିକ ଚାଇନିଜ୍‌","zu":"ଜୁଲୁ","zun":"ଜୁନୀ","zxx":"କୌଣସି ଲିଙ୍ଗୁଇଷ୍ଟ ସାମଗ୍ରୀ ନାହିଁ","zza":"ଜାଜା"},"short":{"az":"ଆଜେରି","en-GB":"ଯୁକ୍ତରାଜ୍ୟ ଇଂରାଜୀ","en-US":"ଯୁକ୍ତରାଷ୍ଟ୍ର ଇଂରାଜୀ"},"narrow":{}},"region":{"long":{"142":"ଏସିଆ","143":"ମଧ୍ୟ ଏସିଆ","145":"ପଶ୍ଚିମ ଏସିଆ","150":"ୟୁରୋପ୍","151":"ପୂର୍ବ ୟୁରୋପ୍","154":"ଉତ୍ତର ୟୁରୋପ୍","155":"ପଶ୍ଚିମ ୟୁରୋପ୍","202":"ଉପ-ସାହାରା ଆଫ୍ରିକା","419":"ଲାଟିନ୍‌ ଆମେରିକା","001":"ବିଶ୍ୱ","002":"ଆଫ୍ରିକା","003":"ଉତ୍ତର ଆମେରିକା","005":"ଦକ୍ଷିଣ ଆମେରିକା","009":"ଓସିନିଆ","011":"ପଶ୍ଚିମ ଆଫ୍ରିକା","013":"ମଧ୍ୟ ଆମେରିକା","014":"ପୂର୍ବ ଆଫ୍ରିକା","015":"ଉତ୍ତର ଆଫ୍ରିକା","017":"ମଧ୍ୟ ଆଫ୍ରିକା","018":"ଦକ୍ଷିଣସ୍ଥ ଆଫ୍ରିକା","019":"ଆମେରିକା","021":"ଉତ୍ତରସ୍ଥ ଆମେରିକା","029":"କାରିବିଆନ୍","030":"ପୂର୍ବ ଏସିଆ","034":"ଦକ୍ଷିଣ ଏସିଆ","035":"ଦକ୍ଷିଣପୂର୍ବ ଏସିଆ","039":"ଦକ୍ଷିଣ ୟୁରୋପ୍","053":"ଅଷ୍ଟ୍ରେଲେସିଆ","054":"ମେଲାନେସିଆ","057":"ମାଇକ୍ରୋନେସିଆନ୍ ଅଞ୍ଚଳ","061":"ପଲିନେସିଆ","AC":"ଆସେନସିଅନ୍‌ ଦ୍ୱୀପ","AD":"ଆଣ୍ଡୋରା","AE":"ସଂଯୁକ୍ତ ଆରବ ଏମିରେଟସ୍","AF":"ଆଫଗାନିସ୍ତାନ୍","AG":"ଆଣ୍ଟିଗୁଆ ଏବଂ ବାରବୁଦା","AI":"ଆଙ୍ଗୁଇଲ୍ଲା","AL":"ଆଲବାନିଆ","AM":"ଆର୍ମେନିଆ","AO":"ଆଙ୍ଗୋଲା","AQ":"ଆଣ୍ଟାର୍କାଟିକା","AR":"ଆର୍ଜେଣ୍ଟିନା","AS":"ଆମେରିକାନ୍ ସାମୋଆ","AT":"ଅଷ୍ଟ୍ରିଆ","AU":"ଅଷ୍ଟ୍ରେଲିଆ","AW":"ଆରୁବା","AX":"ଅଲାଣ୍ଡ ଦ୍ଵୀପପୁଞ୍ଜ","AZ":"ଆଜେରବାଇଜାନ୍","BA":"ବୋସନିଆ ଏବଂ ହର୍ଜଗୋଭିନା","BB":"ବାରବାଡୋସ୍","BD":"ବାଂଲାଦେଶ","BE":"ବେଲଜିୟମ୍","BF":"ବୁର୍କିନା ଫାସୋ","BG":"ବୁଲଗେରିଆ","BH":"ବାହାରିନ୍","BI":"ବୁରୁଣ୍ଡି","BJ":"ବେନିନ୍","BL":"ସେଣ୍ଟ ବାର୍ଥେଲେମି","BM":"ବର୍ମୁଡା","BN":"ବ୍ରୁନେଇ","BO":"ବୋଲଭିଆ","BQ":"କାରବିୟନ୍‌ ନେଦରଲ୍ୟାଣ୍ଡ","BR":"ବ୍ରାଜିଲ୍","BS":"ବାହାମାସ୍","BT":"ଭୁଟାନ","BV":"ବୌଭେଟ୍‌ ଦ୍ୱୀପ","BW":"ବୋଟସ୍ୱାନା","BY":"ବେଲାରୁଷ୍","BZ":"ବେଲିଜ୍","CA":"କାନାଡା","CC":"କୋକୋସ୍ (କୀଲିଂ) ଦ୍ଵୀପପୁଞ୍ଜ","CD":"କଙ୍ଗୋ (ଡିଆରସି)","CF":"ମଧ୍ୟ ଆଫ୍ରିକୀୟ ସାଧାରଣତନ୍ତ୍ର","CG":"କଙ୍ଗୋ-ବ୍ରାଜିଭିଲ୍ଲେ","CH":"ସ୍ୱିଜରଲ୍ୟାଣ୍ଡ","CI":"କୋତ୍ ଡି ଭ୍ଵାର୍","CK":"କୁକ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ","CL":"ଚିଲ୍ଲୀ","CM":"କାମେରୁନ୍","CN":"ଚିନ୍","CO":"କୋଲମ୍ବିଆ","CP":"କ୍ଲିପରଟନ୍‌ ଦ୍ୱୀପ","CR":"କୋଷ୍ଟା ରିକା","CU":"କ୍ୱିବା","CV":"କେପ୍ ଭର୍ଦେ","CW":"କୁରାକାଓ","CX":"ଖ୍ରୀଷ୍ଟମାସ ଦ୍ୱୀପ","CY":"ସାଇପ୍ରସ୍","CZ":"ଚେଚିଆ","DE":"ଜର୍ମାନୀ","DG":"ଡିଏଗୋ ଗାର୍ସିଆ","DJ":"ଜିବୋଟି","DK":"ଡେନମାର୍କ","DM":"ଡୋମିନିକା","DO":"ଡୋମିନିକାନ୍‌ ସାଧାରଣତନ୍ତ୍ର","DZ":"ଆଲଜେରିଆ","EA":"ସିଉଟା ଏବଂ ମେଲିଲା","EC":"ଇକ୍ୱାଡୋର୍","EE":"ଏସ୍ତୋନିଆ","EG":"ଇଜିପ୍ଟ","EH":"ପଶ୍ଚିମ ସାହାରା","ER":"ଇରିଟ୍ରିୟା","ES":"ସ୍ପେନ୍","ET":"ଇଥିଓପିଆ","EU":"ୟୁରୋପୀୟ ସଂଘ","EZ":"ୟୁରୋକ୍ଷେତ୍ର","FI":"ଫିନଲ୍ୟାଣ୍ଡ","FJ":"ଫିଜି","FK":"ଫକ୍‌ଲ୍ୟାଣ୍ଡ ଦ୍ଵୀପପୁଞ୍ଜ","FM":"ମାଇକ୍ରୋନେସିଆ","FO":"ଫାରୋଇ ଦ୍ୱୀପପୁଞ୍ଜ","FR":"ଫ୍ରାନ୍ସ","GA":"ଗାବୋନ୍","GB":"ଯୁକ୍ତରାଜ୍ୟ","GD":"ଗ୍ରେନାଡା","GE":"ଜର୍ଜିଆ","GF":"ଫ୍ରେଞ୍ଚ ଗୁଇନା","GG":"ଗୁଏରନେସି","GH":"ଘାନା","GI":"ଜିବ୍ରାଲ୍ଟର୍","GL":"ଗ୍ରୀନଲ୍ୟାଣ୍ଡ","GM":"ଗାମ୍ବିଆ","GN":"ଗୁଇନିଆ","GP":"ଗୁଆଡେଲୋପ୍","GQ":"ଇକ୍ବାଟେରିଆଲ୍ ଗୁଇନିଆ","GR":"ଗ୍ରୀସ୍","GS":"ଦକ୍ଷିଣ ଜର୍ଜିଆ ଏବଂ ଦକ୍ଷିଣ ସାଣ୍ଡୱିଚ୍ ଦ୍ୱୀପପୁଞ୍ଜ","GT":"ଗୁଏତମାଲା","GU":"ଗୁଆମ୍","GW":"ଗୁଇନିଆ-ବିସାଉ","GY":"ଗୁଇନା","HK":"ହଂ କଂ ଏସଏଆର୍‌ ଚାଇନା","HM":"ହାର୍ଡ୍‌ ଏବଂ ମ୍ୟାକଡୋନାଲ୍ଡ ଦ୍ୱୀପପୁଞ୍ଜ","HN":"ହୋଣ୍ଡୁରାସ୍‌","HR":"କ୍ରୋଏସିଆ","HT":"ହାଇତି","HU":"ହଙ୍ଗେରୀ","IC":"କେନେରୀ ଦ୍ୱୀପପୁଞ୍ଜ","ID":"ଇଣ୍ଡୋନେସିଆ","IE":"ଆୟରଲ୍ୟାଣ୍ଡ","IL":"ଇସ୍ରାଏଲ୍","IM":"ଆଇଲ୍‌ ଅଫ୍‌ ମ୍ୟାନ୍‌","IN":"ଭାରତ","IO":"ବ୍ରିଟିଶ୍‌ ଭାରତ ମାହାସାଗର କ୍ଷେତ୍ର","IQ":"ଇରାକ୍","IR":"ଇରାନ","IS":"ଆଇସଲ୍ୟାଣ୍ଡ","IT":"ଇଟାଲୀ","JE":"ଜର୍ସି","JM":"ଜାମାଇକା","JO":"ଜୋର୍ଡାନ୍","JP":"ଜାପାନ","KE":"କେନିୟା","KG":"କିର୍ଗିଜିସ୍ତାନ","KH":"କାମ୍ବୋଡିଆ","KI":"କିରିବାଟି","KM":"କୋମୋରସ୍","KN":"ସେଣ୍ଟ କିଟସ୍‌ ଏବଂ ନେଭିସ୍‌","KP":"ଉତ୍ତର କୋରିଆ","KR":"ଦକ୍ଷିଣ କୋରିଆ","KW":"କୁଏତ୍","KY":"କେମ୍ୟାନ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ","KZ":"କାଜାକାସ୍ତାନ","LA":"ଲାଓସ୍","LB":"ଲେବାନନ୍","LC":"ସେଣ୍ଟ ଲୁସିଆ","LI":"ଲିଚେଟନଷ୍ଟେଇନ୍","LK":"ଶ୍ରୀଲଙ୍କା","LR":"ଲାଇବେରିଆ","LS":"ଲେସୋଥୋ","LT":"ଲିଥୁଆନିଆ","LU":"ଲକ୍ସେମବର୍ଗ","LV":"ଲାଟଭିଆ","LY":"ଲିବ୍ୟା","MA":"ମୋରୋକ୍କୋ","MC":"ମୋନାକୋ","MD":"ମୋଲଡୋଭା","ME":"ମଣ୍ଟେନିଗ୍ରୋ","MF":"ସେଣ୍ଟ ମାର୍ଟିନ୍","MG":"ମାଡାଗାସ୍କର୍","MH":"ମାର୍ଶାଲ୍ ଦ୍ୱୀପପୁଞ୍ଜ","MK":"ଉତ୍ତର ମାସେଡୋନିଆ","ML":"ମାଲି","MM":"ମିଆଁମାର","MN":"ମଙ୍ଗୋଲିଆ","MO":"ମାକାଉ ଏସଏଆର୍‌ ଚାଇନା","MP":"ଉତ୍ତର ମାରିଆନା ଦ୍ୱୀପପୁଞ୍ଜ","MQ":"ମାର୍ଟିନିକ୍ୟୁ","MR":"ମୌରିଟାନିଆ","MS":"ମଣ୍ଟେସେରାଟ୍","MT":"ମାଲ୍ଟା","MU":"ମରିସସ","MV":"ମାଲଦିଭସ୍‌","MW":"ମାଲୱି","MX":"ମେକ୍ସିକୋ","MY":"ମାଲେସିଆ","MZ":"ମୋଜାମ୍ବିକ୍‌","NA":"ନାମିବିଆ","NC":"ନୂତନ କାଲେଡୋନିଆ","NE":"ନାଇଜର","NF":"ନର୍ଫକ୍ ଦ୍ଵୀପ","NG":"ନାଇଜେରିଆ","NI":"ନିକାରାଗୁଆ","NL":"ନେଦରଲ୍ୟାଣ୍ଡ","NO":"ନରୱେ","NP":"ନେପାଳ","NR":"ନାଉରୁ","NU":"ନିଉ","NZ":"ନ୍ୟୁଜିଲାଣ୍ଡ","OM":"ଓମାନ୍","PA":"ପାନାମା","PE":"ପେରୁ","PF":"ଫ୍ରେଞ୍ଚ ପଲିନେସିଆ","PG":"ପପୁଆ ନ୍ୟୁ ଗୁଏନିଆ","PH":"ଫିଲିପାଇନସ୍","PK":"ପାକିସ୍ତାନ","PL":"ପୋଲାଣ୍ଡ","PM":"ସେଣ୍ଟ ପିଏରେ ଏବଂ ମିକ୍ୱେଲନ୍‌","PN":"ପିଟକାଇରିନ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ","PR":"ପୁଏର୍ତ୍ତୋ ରିକୋ","PS":"ପାଲେଷ୍ଟେନିୟ ଭୂଭାଗ","PT":"ପର୍ତ୍ତୁଗାଲ୍","PW":"ପାଲାଉ","PY":"ପାରାଗୁଏ","QA":"କତାର୍","QO":"ସୀମାନ୍ତବର୍ତ୍ତୀ ଓସିନିଆ","RE":"ରିୟୁନିଅନ୍","RO":"ରୋମାନିଆ","RS":"ସର୍ବିଆ","RU":"ରୁଷିଆ","RW":"ରାୱାଣ୍ଡା","SA":"ସାଉଦି ଆରବିଆ","SB":"ସୋଲୋମନ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ","SC":"ସେଚେଲସ୍","SD":"ସୁଦାନ","SE":"ସ୍ୱେଡେନ୍","SG":"ସିଙ୍ଗାପୁର୍","SH":"ସେଣ୍ଟ ହେଲେନା","SI":"ସ୍ଲୋଭେନିଆ","SJ":"ସାଲବାର୍ଡ ଏବଂ ଜାନ୍‌ ମାୟେନ୍‌","SK":"ସ୍ଲୋଭାକିଆ","SL":"ସିଏରା ଲିଓନ","SM":"ସାନ୍ ମାରିନୋ","SN":"ସେନେଗାଲ୍","SO":"ସୋମାଲିଆ","SR":"ସୁରିନାମ","SS":"ଦକ୍ଷିଣ ସୁଦାନ","ST":"ସାଓ ଟୋମେ ଏବଂ ପ୍ରିନସିପି","SV":"ଏଲ୍ ସାଲଭାଡୋର୍","SX":"ସିଣ୍ଟ ମାର୍ଟୀନ୍‌","SY":"ସିରିଆ","SZ":"ଇସ୍ୱାତିନୀ","TA":"ଟ୍ରାଇଷ୍ଟନ୍‌ ଦା କୁନ୍‌ଚା","TC":"ତୁର୍କସ୍‌ ଏବଂ କାଇକୋସ୍‌ ଦ୍ୱୀପପୁଞ୍ଜ","TD":"ଚାଦ୍","TF":"ଫରାସୀ ଦକ୍ଷିଣ କ୍ଷେତ୍ର","TG":"ଟୋଗୋ","TH":"ଥାଇଲ୍ୟାଣ୍ଡ","TJ":"ତାଜିକିସ୍ଥାନ୍","TK":"ଟୋକେଲାଉ","TL":"ତିମୋର୍-ଲେଷ୍ଟେ","TM":"ତୁର୍କମେନିସ୍ତାନ","TN":"ଟ୍ୟୁନିସିଆ","TO":"ଟୋଙ୍ଗା","TR":"ତୁର୍କୀ","TT":"ତ୍ରିନିଦାଦ୍ ଏବଂ ଟୋବାଗୋ","TV":"ତୁଭାଲୁ","TW":"ତାଇୱାନ","TZ":"ତାଞ୍ଜାନିଆ","UA":"ୟୁକ୍ରେନ୍","UG":"ଉଗାଣ୍ଡା","UM":"ଯୁକ୍ତରାଷ୍ଟ୍ର ଆଉଟ୍‌ଲାଇଙ୍ଗ ଦ୍ଵୀପପୁଞ୍ଜ","UN":"ଜାତିସଂଘ","US":"ଯୁକ୍ତ ରାଷ୍ଟ୍ର","UY":"ଉରୁଗୁଏ","UZ":"ଉଜବେକିସ୍ତାନ","VA":"ଭାଟିକାନ୍ ସିଟି","VC":"ସେଣ୍ଟ ଭିନସେଣ୍ଟ ଏବଂ ଦି ଗ୍ରେନାଡିସ୍","VE":"ଭେନେଜୁଏଲା","VG":"ବ୍ରିଟିଶ୍‌ ଭର୍ଜିନ୍ ଦ୍ୱୀପପୁଞ୍ଜ","VI":"ଯୁକ୍ତରାଷ୍ଟ୍ର ଭିର୍ଜିନ୍ ଦ୍ଵୀପପୁଞ୍ଜ","VN":"ଭିଏତନାମ୍","VU":"ଭାନୁଆତୁ","WF":"ୱାଲିସ୍ ଏବଂ ଫୁତୁନା","WS":"ସାମୋଆ","XA":"ସିୟୁଡୋ-ଏସେଣ୍ଟ","XB":"ସିୟୁଡୋ-ବିଡି","XK":"କୋସୋଭୋ","YE":"ୟେମେନ୍","YT":"ମାୟୋଟେ","ZA":"ଦକ୍ଷିଣ ଆଫ୍ରିକା","ZM":"ଜାମ୍ବିଆ","ZW":"ଜିମ୍ବାୱେ","ZZ":"ଅଜଣା ଅଞ୍ଚଳ"},"short":{"GB":"ୟୁକେ","HK":"ହଂ କଂ","MO":"ମାକାଉ","PS":"ପାଲେଷ୍ଟାଇନ୍","US":"ଯୁକ୍ତରାଷ୍ଟ୍ର"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"ଆରବିକ୍","Aran":"Aran","Armi":"ଇମ୍ପେରିଆଲ୍ ଆରମିକ୍","Armn":"ଆର୍ମେନୀୟ","Avst":"ଆବେସ୍ଥାନ୍","Bali":"ବାଲିନୀଜ୍","Bamu":"Bamu","Bass":"Bass","Batk":"ବାଟାକ୍","Beng":"ବଙ୍ଗାଳୀ","Bhks":"Bhks","Blis":"ବ୍ଲିସିମ୍ବଲସ୍","Bopo":"ବୋପୋମୋଫୋ","Brah":"ବ୍ରାହ୍ମୀ","Brai":"ବ୍ରେଲ୍","Bugi":"ବୁଗାନୀଜ୍","Buhd":"ବୁହିଦ୍","Cakm":"ଚକମା","Cans":"ୟୁନିଫାଏଡ୍ କାନାଡିଆନ୍ ଆବ୍ରୋଜିନାଲ୍ ସିଲାବିକସ୍","Cari":"କୈରନ୍","Cham":"ଛମ୍","Cher":"ଚିରୁକୀ","Chrs":"Chrs","Cirt":"ସିର୍ଥ","Copt":"କପଟିକ୍","Cprt":"ସିପ୍ରଅଟ୍","Cyrl":"ସିରିଲିକ୍","Cyrs":"ଓଲ୍ଡ ଚର୍ଚ୍ଚ ସାଲଭୋନିକ୍ ସିରିଲିକ୍","Deva":"ଦେବନଗରୀ","Diak":"Diak","Dogr":"Dogr","Dsrt":"ଡେସର୍ଟ","Dupl":"Dupl","Egyd":"ଇଜିପ୍ଟିଆନ୍ ଡେମୋଟିକ୍","Egyh":"ଇଜିପ୍ଟିଆନ୍ ହାଇଅରଟିକ୍","Egyp":"ଇଜିପ୍ଟିଆନ୍ ହାଅରଗ୍ଲିପସ୍","Elba":"Elba","Elym":"Elym","Ethi":"ଇଥିଓପିକ୍‌","Geok":"ଜର୍ଜିଆନ୍ ଖୁଟସୁରୀ","Geor":"ଜର୍ଜିୟ","Glag":"ଗ୍ଲାଗ୍ଲୋଟିକ୍","Gong":"Gong","Gonm":"Gonm","Goth":"ଗୋଥିକ୍","Gran":"Gran","Grek":"ଗ୍ରୀକ୍","Gujr":"ଗୁଜୁରାଟୀ","Guru":"ଗୁରମୁଖୀ","Hanb":"ବୋପୋମୋଫୋ ସହିତ ହାନ୍‌","Hang":"ହାଙ୍ଗୁଲ୍","Hani":"ହାନ୍","Hano":"ହାନୁନ୍","Hans":"ସରଳୀକୃତ","Hant":"ପାରମ୍ପରିକ","Hatr":"Hatr","Hebr":"ହିବୃ","Hira":"ହିରାଗାନା","Hluw":"Hluw","Hmng":"ପାହୋ ହୋଙ୍ଗ","Hmnp":"Hmnp","Hrkt":"ଜାପାନୀ ସିଲାବରିଜ୍‌","Hung":"ପୁରୁଣା ହଙ୍ଗେରିଆନ୍","Inds":"ସିନ୍ଧୁ","Ital":"ପୁରୁଣା ଇଟାଲୀ","Jamo":"ଜାମୋ","Java":"ଜାଭାନୀଜ୍","Jpan":"ଜାପାନୀଜ୍","Kali":"କାୟାହା ଲୀ","Kana":"କାତାକାନା","Khar":"ଖାରୋସ୍ଥି","Khmr":"ଖମେର୍","Khoj":"Khoj","Kits":"Kits","Knda":"କନ୍ନଡ଼","Kore":"କୋରିଆନ୍","Kthi":"କୈଥି","Lana":"ଲାନା","Laoo":"ଲାଓ","Latf":"ଫ୍ରାକଥୁର୍ ଲାଟିନ୍","Latg":"ଗାଏଲିକ୍ ଲାଟିନ୍","Latn":"ଲାଟିନ୍","Lepc":"ଲେପଚା","Limb":"ଲିମ୍ବୁ","Lina":"ଲିନିୟର୍","Linb":"ଲିନିୟର୍ ବି","Lisu":"Lisu","Lyci":"ଲିଶିୟନ୍","Lydi":"ଲିଡିୟନ୍","Mahj":"Mahj","Maka":"Maka","Mand":"ମାନଡେନ୍","Mani":"ମନଶୀନ୍","Marc":"Marc","Maya":"ମୟାନ୍ ହାୟରଲଜିକସ୍","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"ମେରୋଇଟିକ୍","Mlym":"ମାଲାୟଲମ୍","Modi":"Modi","Mong":"ମଙ୍ଗୋଲିଆନ୍","Moon":"ଚନ୍ଦ୍ର","Mroo":"Mroo","Mtei":"ମାଏତି ମାୟେକ୍","Mult":"Mult","Mymr":"ମ୍ୟାନମାର୍","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"ଏନ୍ କୋ","Nshu":"Nshu","Ogam":"ଓଘାମା","Olck":"ଓଲ୍ ଚିକି","Orkh":"ଓରୋଖନ୍","Orya":"ଓଡ଼ିଆ","Osge":"Osge","Osma":"ଓସୋମାନିୟା","Palm":"Palm","Pauc":"Pauc","Perm":"ଓଲ୍ଡ ପରମିକ୍","Phag":"ଫାଗସ୍-ପା","Phli":"ଇନସ୍କ୍ରୀପସାନଲ୍ ପାହାଲାୱୀ","Phlp":"ସ୍ଲାଟର୍ ପାହାଲାୱୀ","Phlv":"ବୁକ୍ ପାହାଲାୱୀ","Phnx":"ଫେନୋସିଆନ୍","Plrd":"ପୋଲାର୍ଡ ଫୋନେଟିକ୍","Prti":"ଇନସ୍କ୍ରୀପସାନଲ୍ ପାର୍ଥିଆନ୍","Qaag":"Qaag","Rjng":"ରେଜାଙ୍ଗ","Rohg":"Rohg","Roro":"ରୋଙ୍ଗୋରୋଙ୍ଗୋ","Runr":"ରନିକ୍","Samr":"ସମୌରିଟନ୍","Sara":"ସାରାତି","Sarb":"Sarb","Saur":"ସୌରାଷ୍ଟ୍ର","Sgnw":"ସାଙ୍କେତିକ ଲିଖ","Shaw":"ସାବିୟାନ୍","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"ସିଂହଳ","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"ସୁଦାନୀଜ୍","Sylo":"ସୀଲିତୋ ନଗରୀ","Syrc":"ସିରିୟାକ୍","Syre":"ଏଷ୍ଟ୍ରାଙ୍ଗେଲୋ ସିରିକ୍","Syrj":"ୱେଷ୍ଟର୍ନ ସିରିକ୍","Syrn":"ଇଷ୍ଟର୍ନ ସିରିକ୍","Tagb":"ତଗବାନ୍ୱା","Takr":"Takr","Tale":"ତାଇ ଲେ","Talu":"ନୂତନ ତାଇ ଲୁଏ","Taml":"ତାମିଲ୍","Tang":"Tang","Tavt":"ତାଇ ଭିଏତ୍","Telu":"ତେଲୁଗୁ","Teng":"ତେଙ୍ଗୱାର୍","Tfng":"ତିଫିଙ୍ଘା","Tglg":"ଟାଗାଲୋଗ୍","Thaa":"ଥାନା","Thai":"ଥାଇ","Tibt":"ତିବେତାନ୍","Tirh":"Tirh","Ugar":"ୟୁଗାରିଟିକ୍","Vaii":"ୱାଇ","Visp":"ଭିଜିବଲ୍ ସ୍ପିଚ୍","Wara":"Wara","Wcho":"Wcho","Xpeo":"ପୁରୁଣା ଫରାସୀ","Xsux":"ସୁମେରୋ-ଆକ୍କାଡିଆନ୍ ସୁନିଫର୍ମ","Yezi":"Yezi","Yiii":"ୟୀ","Zanb":"Zanb","Zinh":"ବଂଶଗତ","Zmth":"ଗାଣିତିକ ନୋଟେସନ୍","Zsye":"ଇମୋଜି","Zsym":"ସଙ୍କେତଗୁଡ଼ିକ","Zxxx":"ଅଲିଖିତ","Zyyy":"ସାଧାରଣ","Zzzz":"ଅଜଣା ଲିପି"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"ଯୁକ୍ତ ଆରବ ଏମିରେଟସ୍ ଦିରହାମ୍","AFA":"AFA","AFN":"ଆଫଗାନ ଆଫଗାନି","ALK":"ALK","ALL":"ଆଲବାନିୟ ଲେକ୍","AMD":"ଅର୍ମେନୀୟ ଡ୍ରାମ୍","ANG":"ନେଦରଲ୍ୟାଣ୍ଡ୍ ଆଣ୍ଟିଲିୟ ଗିଲଡର୍","AOA":"ଅଙ୍ଗୋଲୀୟ କୱାନଜା","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ଆର୍ଜେଣ୍ଟାଇନ୍‍ ପେସୋ","ATS":"ATS","AUD":"ଅଷ୍ଟ୍ରେଲିୟ ଡଲାର୍","AWG":"ଆରୁବୀୟ ଫ୍ଲୋରିନ୍","AZM":"AZM","AZN":"ଆଜେରବାଇଜାନି ମନତ୍","BAD":"BAD","BAM":"ବୋସନିଆ-ହର୍ଜଗୋଭିନା କନଭର୍ଟିବଲ୍ ମାର୍କ୍","BAN":"BAN","BBD":"ବାର୍ବାଡୀୟ ଡଲାର୍","BDT":"ବଙ୍ଗଳାଦେଶୀ ଟାକା","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"ବୁଲଗେରୀୟ ଲେଭ୍","BGO":"BGO","BHD":"ବାଃରେନି ଦିନାର୍","BIF":"ବୁରୁଣ୍ଡିୟ ଫ୍ରାଙ୍କ୍","BMD":"ବର୍ମ୍ୟୁଡା ଡଲାର୍","BND":"ବ୍ରୁନେଇ ଡଲାର୍","BOB":"ବୋଲିଭୀୟ ବୋଲିଭିଆନୋ","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"ବ୍ରାଜିଲୀୟ ରିଏଲ୍","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"ବାହାମୀୟ ଡଲାର୍","BTN":"ଭୁଟାନୀ ଗଲଟ୍ରୁମ୍","BUK":"BUK","BWP":"ବୋତ୍ସୱାନା ପୁଲା","BYB":"BYB","BYN":"ବେଲାରୁସି ରୁବଲ୍","BYR":"BYR","BZD":"ବେଲିଜ୍ ଡଲାର୍","CAD":"କାନେଡିୟ ଡଲାର୍","CDF":"କଙ୍ଗୋଲିଜ୍ ଫ୍ରାଙ୍କ୍","CHE":"CHE","CHF":"ସୁଇସ୍ ଫ୍ରାଙ୍କ୍","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"ଚିଲି ପେସୋ","CNH":"ଚିନୀ ୟୁଆନ୍ (ଅଫସୋର୍)","CNX":"CNX","CNY":"ଚିନୀ ୟୁଆନ୍","COP":"କଲୋମ୍ବୀୟ ପେସୋ","COU":"COU","CRC":"କୋଷ୍ଟା ରିକୀୟ କୋଲୋନ୍","CSD":"CSD","CSK":"CSK","CUC":"କ୍ୟୁବାନ୍ କନଭର୍ଟିବଲ୍ ପେସୋ","CUP":"କ୍ୟୁବାନ୍ ପେସୋ","CVE":"କେପ୍ ଭେର୍ଦେୟ ଏସ୍କୁଡୋ","CYP":"CYP","CZK":"ଚେକ୍ କୋରୁନା","DDM":"DDM","DEM":"DEM","DJF":"ଜିବୌଟିୟ ଫ୍ରାଙ୍କ୍","DKK":"ଡାନିସ୍ କ୍ରୋନ୍","DOP":"ଡୋମିନିକୀୟ ପେସୋ","DZD":"ଆଲଜେରୀୟ ଦିନାର୍","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"ଇଜିପ୍ଟିୟ ପାଉଣ୍ଡ୍","ERN":"ଏରିଟ୍ରେୟ ନାକଫା","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ଇଥିଓପିୟ ବିର୍","EUR":"ୟୁରୋ","FIM":"FIM","FJD":"ଫିଜି ଡଲାର୍","FKP":"ଫକଲ୍ୟାଣ୍ଡ୍ ଦ୍ଵୀପପୁଞ୍ଜ ପାଉଣ୍ଡ୍","FRF":"FRF","GBP":"ବ୍ରିଟିଶ୍ ପାଉଣ୍ଡ୍","GEK":"GEK","GEL":"ଜର୍ଜିୟ ଲାରି","GHC":"GHC","GHS":"ଘାନିୟ ସେଡି","GIP":"ଗିବ୍ରାଲଟର୍ ପାଉଣ୍ଡ୍","GMD":"ଗାମ୍ବିୟ ଡାଲାସି","GNF":"ଗୁଇନେୟ ଫ୍ରାଙ୍କ୍","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"ଗୁଏଟମାଲୀୟ କ୍ଵେତଜାଲ୍","GWE":"GWE","GWP":"GWP","GYD":"ଗାୟାନିସ୍ ଡଲାର୍","HKD":"ହଂ କଂ ଡଲାର୍","HNL":"ହୋଣ୍ଡୁରୀୟ ଲେମପିରା","HRD":"HRD","HRK":"କ୍ରୋଏସୀୟ କୁନା","HTG":"ହାଇତୀୟ ଗୋରଡ୍","HUF":"ହଙ୍ଗେରିୟ ଫୋରିଣ୍ଟ୍","IDR":"ଇଣ୍ଡୋନେସିୟ ରୁପିଆ","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ଇସ୍ରାଇଲି ନ୍ୟୁ ଶେକେଲ୍","INR":"ଭାରତୀୟ ଟଙ୍କା","IQD":"ଇରାକି ଦିନାର୍","IRR":"ଇରାନୀ ରିଆଲ୍","ISJ":"ISJ","ISK":"ଆଇସଲ୍ୟାଣ୍ଡିକ୍‍ କ୍ରୋନା","ITL":"ITL","JMD":"ଜାମାଇକୀୟ ଡଲାର୍","JOD":"ଜର୍ଡାନିୟ ଦିନାର୍","JPY":"ଜାପାନୀ ୟେନ୍","KES":"କେନିୟ ଶିଲିଂ","KGS":"କିର୍ଗିସ୍ତାନୀ ସୋମ୍","KHR":"କାମ୍ଵୋଡିୟ ରିଏଲ୍","KMF":"କୋମୋରୀୟ ଫ୍ରାଙ୍କ୍","KPW":"ଉତ୍ତର କୋରିଆଇ ୱୋନ୍","KRH":"KRH","KRO":"KRO","KRW":"ଦକ୍ଷିଣ କୋରିଆଇ ୱୋନ୍","KWD":"କୁୱେତି ଦିନାର୍","KYD":"କେମେନ୍ ଦ୍ଵୀପପୁଞ୍ଜ ଡଲାର୍","KZT":"କାଜାକସ୍ତାନୀ ତେଙ୍ଗେ","LAK":"ଲାଓଟିୟ କିପ୍","LBP":"ଲେବାନିଜ୍ ପାଉଣ୍ଡ୍","LKR":"ଶ୍ରୀଲଙ୍କିୟ ରୁପି","LRD":"ଲିବେରୀୟ ଡଲାର୍","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"ଲିବ୍ୟ ଦିନାର୍","MAD":"ମୋରୋକୀୟ ଦିର୍ହାମ୍","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"ମୋଲଡୋଭାନ୍ ଲେୟୁ","MGA":"ମାଲାଗାସି ଏରିଆରୀ","MGF":"MGF","MKD":"ମାସେଡୋନୀୟ ଡିନର୍","MKN":"MKN","MLF":"MLF","MMK":"ମ୍ୟାନମାର୍ କ୍ୟାତ୍‌","MNT":"ମଙ୍ଗୋଲିୟ ତୁଗ୍ରିକ୍","MOP":"ମାକାନେଜ୍ ପାଟାକା","MRO":"ମର୍ଟିନିୟ ଆଗୁଇଅ (1973–2017)","MRU":"ମର୍ଟିନିୟ ଆଗୁଇଅ","MTL":"MTL","MTP":"MTP","MUR":"ମୌରିସୀୟ ରୁପି","MVP":"MVP","MVR":"ମାଲଡିଭିୟ ରୁଫିୟା","MWK":"ମଲାୱି କ୍ୱାଚା","MXN":"ମେକ୍ସିକୀୟ ପେସୋ","MXP":"MXP","MXV":"MXV","MYR":"ମାଲେସିୟ ରିଙ୍ଗିଟ୍","MZE":"MZE","MZM":"MZM","MZN":"ମୋଜାମ୍ବିକୀୟ ମେଟିକାଲ୍","NAD":"ନାମିବିୟ ଡଲାର୍","NGN":"ନାଇଜେରିଆଇ ନାଇରା","NIC":"NIC","NIO":"ନିକାରାଗୁଆ କୋର୍ଡୋବା","NLG":"NLG","NOK":"ନରୱେୟୀୟ କ୍ରୋନ୍","NPR":"ନେପାଳି ରୁପି","NZD":"ନ୍ୟୁଜିଲ୍ୟାଣ୍ଡ୍ ଡଲାର୍","OMR":"ଓମାନି ରିଆଲ୍","PAB":"ପାନାମାନିୟ ବାଲବୋଆ","PEI":"PEI","PEN":"ପେରୁଭୀୟ ସୋଲ୍","PES":"PES","PGK":"ପପୁଆ ନ୍ୟୁ ଗୁଇନିୟ କିନା","PHP":"ଫିଲିପିନି ପେସୋ","PKR":"ପାକିସ୍ତାନୀ ରୁପି","PLN":"ପୋଲିଶ୍ ଜ୍ଲଟୀ","PLZ":"PLZ","PTE":"PTE","PYG":"ପାରାଗୁଆୟାନ୍ ଗୁଆରାନି","QAR":"କ୍ଵାତାରି ରିଆଲ୍","RHD":"RHD","ROL":"ROL","RON":"ରୋମାନିୟ ଲେଉ","RSD":"ସର୍ବିଆଇ ଦିନାର","RUB":"ରୁଷି ରୁବଲ୍","RUR":"RUR","RWF":"ରୁୱାଣ୍ଡା ଫ୍ରାଙ୍କ୍","SAR":"ସୌଦି ରିୟାଲ୍","SBD":"ସୋଲୋମୋନ୍ ଦ୍ଵୀପପୁଞ୍ଜ ଡଲାର୍","SCR":"ସେୟଚେଲୋଇସ୍ ରୁପି","SDD":"SDD","SDG":"ସୁଦାନୀଜ ପାଉଣ୍ଡ୍","SDP":"SDP","SEK":"ସ୍ୱେଡିଶ୍ କ୍ରୋନା","SGD":"ସିଙ୍ଗାପୁର୍ ଡଲାର୍","SHP":"ସେଣ୍ଟ୍. ହେଲେନା ପାଉଣ୍ଡ୍","SIT":"SIT","SKK":"SKK","SLL":"ସିଏରା ଲିଓନୀୟ ଲେଓନ୍","SOS":"ସୋମାଲି ସିଲିଂ","SRD":"ସୁରିନାମିଜ୍ ଡଲାର୍","SRG":"SRG","SSP":"ଦକ୍ଷିଣ ସୁଡାନିଜ୍‍ ପାଉଣ୍ଡ୍","STD":"ସାଓ ତୋମେ & ପ୍ରିସିପ୍ ଡୋବ୍ରା (1977–2017)","STN":"ସାଓ ତୋମେ & ପ୍ରିସିପ୍ ଡୋବ୍ରା","SUR":"SUR","SVC":"SVC","SYP":"ସିରିୟ ପାଉଣ୍ଡ୍","SZL":"ସ୍ଵାଜି ଲିଲାଞ୍ଜେନି","THB":"ଥାଇ ଭାଟ୍","TJR":"TJR","TJS":"ତାଜିକିସ୍ତାନୀ ସୋମୋନି","TMM":"TMM","TMT":"ତୁର୍କମେନିସ୍ତାନୀ ମନତ୍‌","TND":"ଟୁନେସିଆଇ ଦିନାର୍","TOP":"ତୋଙ୍ଗିୟ ପାଙ୍ଗା","TPE":"TPE","TRL":"TRL","TRY":"ତୁର୍କିୟ ଲିରା","TTD":"ତ୍ରିନିଦାଦ୍ ଏବଂ ଟୋବାଗୋ ଡଲାର୍","TWD":"ନ୍ୟୁ ତାଇୱାନ୍ ଡଲାର୍","TZS":"ତାନଜାନୀୟ ଶିଲିଂ","UAH":"ୟୁକ୍ରେନୀୟ ହ୍ରାଇଭନିଆ","UAK":"UAK","UGS":"UGS","UGX":"ଉଗାଣ୍ଡିୟ ଶିଲିଂ","USD":"ଯୁକ୍ତରାଷ୍ଟ୍ର ଡଲାର୍","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"ଉରୁଗୁଇୟାନ୍ ପେସୋ","UYW":"UYW","UZS":"ଉଜବେକିସ୍ତାନୀ ସୋମ୍","VEB":"VEB","VEF":"ଭେନେଜୁଏଲାନ୍ ବୋଲିଭାର୍ (2008–2018)","VES":"ଭେନେଜୁଏଲାନ୍ ବୋଲିଭାର୍","VND":"ଭୀଏତନାମୀୟ ଡଙ୍ଗ","VNN":"VNN","VUV":"ଭାନୁଆଟୁ ଭାଟୁ","WST":"ସାମୋୟିୟ ତାଲା","XAF":"ମଧ୍ୟ ଆଫ୍ରିକୀ CFA ଫ୍ରାଙ୍କ୍","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"ପୂର୍ବ କାରିବୀୟ ଡଲାର୍","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"ପଶ୍ଚିମ ଆଫ୍ରିକିୟ CFA ଫ୍ରାଙ୍କ୍","XPD":"XPD","XPF":"CFP ଫ୍ରାଙ୍କ୍","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"ଅଜଣା ମୁଦ୍ରା","YDD":"YDD","YER":"ୟେମେନି ରିଆଲ୍","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ଦକ୍ଷିଣ ଆଫ୍ରିକିୟ ରାଣ୍ଡ୍","ZMK":"ZMK","ZMW":"ଜାମ୍ବୀୟ କ୍ୱାଚା","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"or"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
