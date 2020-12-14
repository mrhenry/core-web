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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("pa-Guru").length
)) {
// Intl.DisplayNames.~locale.pa-Guru
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"ਅਫ਼ਾਰ","ab":"ਅਬਖਾਜ਼ੀਅਨ","ace":"ਅਚੀਨੀ","ach":"ਅਕੋਲੀ","ada":"ਅਡਾਂਗਮੇ","ady":"ਅਡਿਗੇ","af":"ਅਫ਼ਰੀਕੀ","agq":"ਅਗੇਮ","ain":"ਆਇਨੂ","ak":"ਅਕਾਨ","ale":"ਅਲੇਉਟ","alt":"ਦੱਖਣੀ ਅਲਤਾਈ","am":"ਅਮਹਾਰਿਕ","an":"ਅਰਾਗੋਨੀ","ang":"ਪੁਰਾਣੀ ਅੰਗਰੇਜ਼ੀ","anp":"ਅੰਗਿਕਾ","ar":"ਅਰਬੀ","ar-001":"ਆਧੁਨਿਕ ਮਿਆਰੀ ਅਰਬੀ","arn":"ਮਾਪੁਚੇ","arp":"ਅਰਾਫਾਓ","as":"ਅਸਾਮੀ","asa":"ਅਸੂ","ast":"ਅਸਤੂਰੀ","av":"ਅਵਾਰਿਕ","awa":"ਅਵਧੀ","ay":"ਅਈਮਾਰਾ","az":"ਅਜ਼ਰਬਾਈਜਾਨੀ","ba":"ਬਸ਼ਕੀਰ","ban":"ਬਾਲੀਨੀਜ਼","bas":"ਬਾਸਾ","be":"ਬੇਲਾਰੂਸੀ","bem":"ਬੇਮਬਾ","bez":"ਬੇਨਾ","bg":"ਬੁਲਗਾਰੀਆਈ","bgn":"ਪੱਛਮੀ ਬਲੂਚੀ","bho":"ਭੋਜਪੁਰੀ","bi":"ਬਿਸਲਾਮਾ","bin":"ਬਿਨੀ","bla":"ਸਿਕਸਿਕਾ","bm":"ਬੰਬਾਰਾ","bn":"ਬੰਗਾਲੀ","bo":"ਤਿੱਬਤੀ","br":"ਬਰੇਟਨ","brx":"ਬੋਡੋ","bs":"ਬੋਸਨੀਆਈ","bug":"ਬਗਨੀਜ਼","byn":"ਬਲਿਨ","ca":"ਕੈਟਾਲਾਨ","ccp":"ਚਕਮਾ","ce":"ਚੇਚਨ","ceb":"ਸੀਬੂਆਨੋ","cgg":"ਚੀਗਾ","ch":"ਚਮੋਰੋ","chk":"ਚੂਕੀਸ","chm":"ਮਾਰੀ","cho":"ਚੌਕਟੋ","chr":"ਚੇਰੋਕੀ","chy":"ਛਾਇਆਨ","ckb":"ਕੇਂਦਰੀ ਕੁਰਦਿਸ਼","co":"ਕੋਰਸੀਕਨ","crs":"ਸੇਸੇਲਵਾ ਕ੍ਰਿਓਲ ਫ੍ਰੈਂਚ","cs":"ਚੈੱਕ","cu":"ਚਰਚ ਸਲਾਵੀ","cv":"ਚੁਵਾਸ਼","cy":"ਵੈਲਸ਼","da":"ਡੈਨਿਸ਼","dak":"ਡਕੋਟਾ","dar":"ਦਾਰਗਵਾ","dav":"ਟੇਟਾ","de":"ਜਰਮਨ","de-AT":"ਜਰਮਨ (ਆਸਟਰੀਆਈ)","de-CH":"ਹਾਈ ਜਰਮਨ (ਸਵਿਟਜ਼ਰਲੈਂਡ)","dgr":"ਡੋਗਰਿੱਬ","dje":"ਜ਼ਾਰਮਾ","dsb":"ਲੋਅਰ ਸੋਰਬੀਅਨ","dua":"ਡੂਆਲਾ","dv":"ਦਿਵੇਹੀ","dyo":"ਜੋਲਾ-ਫੋਇਨੀ","dz":"ਜ਼ੋਂਗਖਾ","dzg":"ਡਜ਼ਾਗਾ","ebu":"ਇੰਬੂ","ee":"ਈਵਈ","efi":"ਐਫਿਕ","egy":"ਪੁਰਾਤਨ ਮਿਸਰੀ","eka":"ਏਕਾਜੁਕ","el":"ਯੂਨਾਨੀ","en":"ਅੰਗਰੇਜ਼ੀ","en-AU":"ਅੰਗਰੇਜ਼ੀ (ਆਸਟ੍ਰੇਲੀਆ)","en-CA":"ਅੰਗਰੇਜ਼ੀ (ਕੈਨੇਡਾ)","en-GB":"ਅੰਗਰੇਜ਼ੀ (ਬਰਤਾਨਵੀ)","en-US":"ਅੰਗਰੇਜ਼ੀ (ਅਮਰੀਕੀ)","eo":"ਇਸਪੇਰਾਂਟੋ","es":"ਸਪੇਨੀ","es-419":"ਸਪੇਨੀ (ਲਾਤੀਨੀ ਅਮਰੀਕੀ)","es-ES":"ਸਪੇਨੀ (ਯੂਰਪੀ)","es-MX":"ਸਪੇਨੀ (ਮੈਕਸੀਕੀ)","et":"ਇਸਟੋਨੀਆਈ","eu":"ਬਾਸਕ","ewo":"ਇਵੋਂਡੋ","fa":"ਫ਼ਾਰਸੀ","fa-AF":"ਦਾਰੀ","ff":"ਫੁਲਾਹ","fi":"ਫਿਨਿਸ਼","fil":"ਫਿਲੀਪਿਨੋ","fj":"ਫ਼ਿਜ਼ੀ","fo":"ਫ਼ੇਰੋਸੇ","fon":"ਫੌਨ","fr":"ਫਰਾਂਸੀਸੀ","fr-CA":"ਫਰਾਂਸੀਸੀ (ਕੈਨੇਡੀਅਨ)","fr-CH":"ਫਰਾਂਸੀਸੀ (ਸਵਿਟਜ਼ਰਲੈਂਡ)","frc":"ਕੇਜੁਨ ਫ੍ਰੇੰਚ","fur":"ਫਰੀਉਲੀਅਨ","fy":"ਪੱਛਮੀ ਫ੍ਰਿਸੀਅਨ","ga":"ਆਇਰਸ਼","gaa":"ਗਾ","gag":"ਗਾਗੌਜ਼","gan":"ਚੀਨੀ ਗਾਨ","gd":"ਸਕਾਟਿਸ਼ ਗੇਲਿਕ","gez":"ਜੀਜ਼","gil":"ਗਿਲਬਰਤੀਜ਼","gl":"ਗੈਲਿਸ਼ਿਅਨ","gn":"ਗੁਆਰਾਨੀ","gor":"ਗੋਰੋਂਤਾਲੋ","grc":"ਪੁਰਾਤਨ ਯੂਨਾਨੀ","gsw":"ਜਰਮਨ (ਸਵਿਸ)","gu":"ਗੁਜਰਾਤੀ","guz":"ਗੁਸੀ","gv":"ਮੈਂਕਸ","gwi":"ਗਵਿਚ’ਇਨ","ha":"ਹੌਸਾ","hak":"ਚੀਨੀ ਹਾਕਾ","haw":"ਹਵਾਈ","he":"ਹਿਬਰੂ","hi":"ਹਿੰਦੀ","hif":"ਫਿਜੀ ਹਿੰਦੀ","hil":"ਹਿਲੀਗੇਨਨ","hmn":"ਹਮੋਂਗ","hr":"ਕ੍ਰੋਏਸ਼ਿਆਈ","hsb":"ਅੱਪਰ ਸੋਰਬੀਅਨ","hsn":"ਚੀਨੀ ਜ਼ਿਆਂਗ","ht":"ਹੈਤੀਆਈ","hu":"ਹੰਗਰੀਆਈ","hup":"ਹੂਪਾ","hy":"ਅਰਮੀਨੀਆਈ","hz":"ਹਰੇਰੋ","ia":"ਇੰਟਰਲਿੰਗੁਆ","iba":"ਇਬਾਨ","ibb":"ਇਬੀਬੀਓ","id":"ਇੰਡੋਨੇਸ਼ੀਆਈ","ig":"ਇਗਬੋ","ii":"ਸਿਚੁਆਨ ਯੀ","ilo":"ਇਲੋਕੋ","inh":"ਇੰਗੁਸ਼","io":"ਇਡੂ","is":"ਆਈਸਲੈਂਡਿਕ","it":"ਇਤਾਲਵੀ","iu":"ਇੰਕਟੀਟੂਤ","ja":"ਜਪਾਨੀ","jbo":"ਲੋਜਬਾਨ","jgo":"ਨਗੋਂਬਾ","jmc":"ਮਚਾਮੇ","jv":"ਜਾਵਾਨੀਜ਼","ka":"ਜਾਰਜੀਆਈ","kab":"ਕਬਾਇਲ","kac":"ਕਾਚਿਨ","kaj":"ਜਜੂ","kam":"ਕੰਬਾ","kbd":"ਕਬਾਰਦੀ","kcg":"ਟਾਇਪ","kde":"ਮਕੋਂਡ","kea":"ਕਾਬੁਵੇਰਦਿਆਨੂ","kfo":"ਕੋਰੋ","kha":"ਖਾਸੀ","khq":"ਕੋਯਰਾ ਚੀਨੀ","ki":"ਕਿਕੂਯੂ","kj":"ਕੁਆਨਯਾਮਾ","kk":"ਕਜ਼ਾਖ਼","kkj":"ਕਾਕੋ","kl":"ਕਲਾਅੱਲੀਸੁਟ","kln":"ਕਲੇਜਿਨ","km":"ਖਮੇਰ","kmb":"ਕਿਮਬੁੰਦੂ","kn":"ਕੰਨੜ","ko":"ਕੋਰੀਆਈ","koi":"ਕੋਮੀ-ਪੇਰਮਿਆਕ","kok":"ਕੋਂਕਣੀ","kpe":"ਕਪੇਲ","kr":"ਕਨੂਰੀ","krc":"ਕਰਾਚੇ ਬਲਕਾਰ","krl":"ਕਰੀਲੀਅਨ","kru":"ਕੁਰੁਖ","ks":"ਕਸ਼ਮੀਰੀ","ksb":"ਸ਼ੰਬਾਲਾ","ksf":"ਬਫ਼ੀਆ","ksh":"ਕਲੋਗਨੀਅਨ","ku":"ਕੁਰਦਿਸ਼","kum":"ਕੁਮੀਕ","kv":"ਕੋਮੀ","kw":"ਕੋਰਨਿਸ਼","ky":"ਕਿਰਗੀਜ਼","la":"ਲਾਤੀਨੀ","lad":"ਲੈਡੀਨੋ","lag":"ਲੰਗਾਈ","lb":"ਲਕਜ਼ਮਬਰਗਿਸ਼","lez":"ਲੈਜ਼ਗੀ","lg":"ਗਾਂਡਾ","li":"ਲਿਮਬੁਰਗੀ","lkt":"ਲਕੋਟਾ","ln":"ਲਿੰਗਾਲਾ","lo":"ਲਾਓ","lou":"ਲੇਉ","loz":"ਲੋਜ਼ੀ","lrc":"ਉੱਤਰੀ ਲੁਰੀ","lt":"ਲਿਥੁਆਨੀਅਨ","lu":"ਲੂਬਾ-ਕਾਟਾਂਗਾ","lua":"ਲਿਊਬਾ-ਲਿਊਲਿਆ","lun":"ਲੁੰਡਾ","luo":"ਲੂਓ","lus":"ਮਿਜ਼ੋ","luy":"ਲੂਈਆ","lv":"ਲਾਤੀਵੀ","mad":"ਮਾਡੂਰੀਸ","mag":"ਮਗਾਹੀ","mai":"ਮੈਥਲੀ","mak":"ਮਕਾਸਰ","mas":"ਮਸਾਈ","mdf":"ਮੋਕਸ਼ਾ","men":"ਮੇਂਡੇ","mer":"ਮੇਰੂ","mfe":"ਮੋਰੀਸਿਅਨ","mg":"ਮਾਲਾਗੈਸੀ","mgh":"ਮਖੋਵਾ-ਮਿੱਟੋ","mgo":"ਮੇਟਾ","mh":"ਮਾਰਸ਼ਲੀਜ਼","mi":"ਮਾਉਰੀ","mic":"ਮਾਇਮੈਕ","min":"ਮਿਨਾਂਗਕਾਬਾਓ","mk":"ਮੈਕਡੋਨੀਆਈ","ml":"ਮਲਿਆਲਮ","mn":"ਮੰਗੋਲੀ","mni":"ਮਨੀਪੁਰੀ","moh":"ਮੋਹਆਕ","mos":"ਮੋਸੀ","mr":"ਮਰਾਠੀ","ms":"ਮਲਯ","mt":"ਮਾਲਟੀਜ਼","mua":"ਮੁੰਡੇਂਗ","mul":"ਬਹੁਤੀਆਂ ਬੋਲੀਆਂ","mus":"ਕ੍ਰੀਕ","mwl":"ਮਿਰਾਂਡੀ","my":"ਬਰਮੀ","myv":"ਇਰਜ਼ੀਆ","mzn":"ਮੇਜ਼ੈਂਡਰਾਨੀ","na":"ਨਾਉਰੂ","nan":"ਚੀਨੀ ਮਿਨ ਨਾਨ","nap":"ਨਿਆਪੋਲੀਟਨ","naq":"ਨਾਮਾ","nb":"ਨਾਰਵੇਜਿਆਈ ਬੋਕਮਲ","nd":"ਉੱਤਰੀ ਨਡੇਬੇਲੇ","nds":"ਲੋ ਜਰਮਨ","nds-NL":"ਲੋ ਸੈਕਸਨ","ne":"ਨੇਪਾਲੀ","new":"ਨੇਵਾਰੀ","ng":"ਐਂਡੋਂਗਾ","nia":"ਨਿਆਸ","niu":"ਨਿਊਏਈ","nl":"ਡੱਚ","nl-BE":"ਫਲੈਮਿਸ਼","nmg":"ਕਵਾਸਿਓ","nn":"ਨਾਰਵੇਜਿਆਈ ਨਿਓਨੌਰਸਕ","nnh":"ਨਿਓਮਬੂਨ","no":"ਨਾਰਵੇਜਿਆਈ","nog":"ਨੋਗਾਈ","nqo":"ਐਂਕੋ","nr":"ਸਾਊਥ ਨਡੇਬੇਲੇ","nso":"ਉੱਤਰੀ ਸੋਥੋ","nus":"ਨੁਏਰ","nv":"ਨਵਾਜੋ","ny":"ਨਯਾਂਜਾ","nyn":"ਨਿਆਂਕੋਲੇ","oc":"ਓਕਸੀਟਾਨ","om":"ਓਰੋਮੋ","or":"ਉੜੀਆ","os":"ਓਸੈਟਿਕ","pa":"ਪੰਜਾਬੀ","pag":"ਪੰਗਾਸੀਨਾਨ","pam":"ਪੈਂਪਾਂਗਾ","pap":"ਪਾਪਿਆਮੈਂਟੋ","pau":"ਪਲਾਊਵੀ","pcm":"ਨਾਇਜੀਰੀਆਈ ਪਿਡਗਿਨ","pi":"ਪਾਲੀ","pl":"ਪੋਲੈਂਡੀ","prg":"ਪਰੂਸ਼ੀਆ","ps":"ਪਸ਼ਤੋ","pt":"ਪੁਰਤਗਾਲੀ","pt-BR":"ਪੁਰਤਗਾਲੀ (ਬ੍ਰਾਜ਼ੀਲੀ)","pt-PT":"ਪੁਰਤਗਾਲੀ (ਯੂਰਪੀ)","qu":"ਕਕੇਸ਼ੁਆ","quc":"ਕੇਸ਼","raj":"ਰਾਜਸਥਾਨੀ","rap":"ਰਾਪਾਨੁਈ","rar":"ਰਾਰੋਤੋਂਗਨ","rm":"ਰੋਮਾਂਸ਼","rn":"ਰੁੰਡੀ","ro":"ਰੋਮਾਨੀਆਈ","ro-MD":"ਮੋਲਡਾਵੀਆਈ","rof":"ਰੋਮਬੋ","root":"ਰੂਟ","ru":"ਰੂਸੀ","rup":"ਅਰੋਮੀਨੀਆਈ","rw":"ਕਿਨਿਆਰਵਾਂਡਾ","rwk":"ਰਵਾ","sa":"ਸੰਸਕ੍ਰਿਤ","sad":"ਸਾਂਡੋ","sah":"ਸਾਖਾ","saq":"ਸਮਬੁਰੂ","sat":"ਸੰਥਾਲੀ","sba":"ਨਗਾਂਬੇ","sbp":"ਸੇਂਗੋ","sc":"ਸਾਰਡੀਨੀਆਈ","scn":"ਸਿਸੀਲੀਅਨ","sco":"ਸਕਾਟਸ","sd":"ਸਿੰਧੀ","sdh":"ਦੱਖਣੀ ਕੁਰਦਿਸ਼","se":"ਉੱਤਰੀ ਸਾਮੀ","seh":"ਸੇਨਾ","ses":"ਕੋਇਰਾਬੋਰੋ ਸੇਂਨੀ","sg":"ਸਾਂਗੋ","shi":"ਟਚੇਲਹਿਟ","shn":"ਸ਼ਾਨ","si":"ਸਿੰਹਾਲਾ","sk":"ਸਲੋਵਾਕ","sl":"ਸਲੋਵੇਨੀਆਈ","sm":"ਸਾਮੋਨ","sma":"ਦੱਖਣੀ ਸਾਮੀ","smj":"ਲਿਊਲ ਸਾਮੀ","smn":"ਇਨਾਰੀ ਸਾਮੀ","sms":"ਸਕੌਲਟ ਸਾਮੀ","sn":"ਸ਼ੋਨਾ","snk":"ਸੋਨਿੰਕੇ","so":"ਸੋਮਾਲੀ","sq":"ਅਲਬਾਨੀਆਈ","sr":"ਸਰਬੀਆਈ","srn":"ਸ੍ਰਾਨਾਨ ਟੋਂਗੋ","ss":"ਸਵਾਤੀ","ssy":"ਸਾਹੋ","st":"ਦੱਖਣੀ ਸੋਥੋ","su":"ਸੂੰਡਾਨੀ","suk":"ਸੁਕੁਮਾ","sv":"ਸਵੀਡਿਸ਼","sw":"ਸਵਾਹਿਲੀ","sw-CD":"ਕਾਂਗੋ ਸਵਾਇਲੀ","swb":"ਕੋਮੋਰੀਅਨ","syr":"ਸੀਰੀਆਈ","ta":"ਤਮਿਲ","te":"ਤੇਲਗੂ","tem":"ਟਿਮਨੇ","teo":"ਟੇਸੋ","tet":"ਟੇਟਮ","tg":"ਤਾਜਿਕ","th":"ਥਾਈ","ti":"ਤਿਗ੍ਰੀਨਿਆ","tig":"ਟਿਗਰਾ","tk":"ਤੁਰਕਮੇਨ","tlh":"ਕਲਿੰਗਨ","tn":"ਤਸਵਾਨਾ","to":"ਟੌਂਗਨ","tpi":"ਟੋਕ ਪਿਸਿਨ","tr":"ਤੁਰਕੀ","trv":"ਟਾਰੋਕੋ","ts":"ਸੋਂਗਾ","tt":"ਤਤਾਰ","tum":"ਤੁੰਬੁਕਾ","tvl":"ਟਿਊਵਾਲੂ","tw":"ਤ੍ਵਿ","twq":"ਤਾਸਾਵਿਕ","ty":"ਤਾਹੀਟੀ","tyv":"ਤੁਵੀਨੀਅਨ","tzm":"ਮੱਧ ਐਟਲਸ ਤਮਾਜ਼ਿਤ","udm":"ਉਦਮੁਰਤ","ug":"ਉਇਗੁਰ","uk":"ਯੂਕਰੇਨੀਆਈ","umb":"ਉਮਬੁੰਡੂ","und":"ਅਣਪਛਾਤੀ ਬੋਲੀ","ur":"ਉਰਦੂ","uz":"ਉਜ਼ਬੇਕ","vai":"ਵਾਈ","ve":"ਵੇਂਡਾ","vi":"ਵੀਅਤਨਾਮੀ","vo":"ਵੋਲਾਪੂਕ","vun":"ਵੂੰਜੋ","wa":"ਵਲੂਨ","wae":"ਵਾਲਸਰ","wal":"ਵੋਲਾਏਟਾ","war":"ਵੈਰੇ","wbp":"ਵਾਲਪੁਰੀ","wo":"ਵੋਲੋਫ","wuu":"ਚੀਨੀ ਵੂ","xal":"ਕਾਲਮਿਕ","xh":"ਖੋਸਾ","xog":"ਸੋਗਾ","yav":"ਯਾਂਗਬੇਨ","ybb":"ਯੇਂਬਾ","yi":"ਯਿਦਿਸ਼","yo":"ਯੋਰੂਬਾ","yue":"ਕੈਂਟੋਨੀਜ਼","zgh":"ਮਿਆਰੀ ਮੋਰੋਕੇਨ ਟਾਮਾਜ਼ਿਕ","zh":"ਚੀਨੀ (ਮੈਂਡਰਿਨ)","zh-Hans":"ਚੀਨੀ (ਸਰਲ)","zh-Hant":"ਚੀਨੀ (ਰਵਾਇਤੀ)","zu":"ਜ਼ੁਲੂ","zun":"ਜ਼ੂਨੀ","zxx":"ਬੋਲੀ ਸੰਬੰਧੀ ਕੋਈ ਸਮੱਗਰੀ ਨਹੀਂ","zza":"ਜ਼ਾਜ਼ਾ"},"short":{"az":"ਅਜ਼ੇਰੀ","en-GB":"ਅੰਗਰੇਜ਼ੀ (ਬਰਤਾਨਵੀ)","en-US":"ਅੰਗਰੇਜ਼ੀ (ਅਮਰੀਕੀ)"},"narrow":{}},"region":{"long":{"142":"ਏਸ਼ੀਆ","143":"ਕੇਂਦਰੀ ਏਸ਼ੀਆ","145":"ਪੱਛਮੀ ਏਸ਼ੀਆ","150":"ਯੂਰਪ","151":"ਪੂਰਬੀ ਯੂਰਪ","154":"ਉੱਤਰੀ ਯੂਰਪ","155":"ਪੱਛਮੀ ਯੂਰਪ","202":"ਉਪ-ਸਹਾਰਾ ਅਫ਼ਰੀਕਾ","419":"ਲਾਤੀਨੀ ਅਮਰੀਕਾ","001":"ਸੰਸਾਰ","002":"ਅਫ਼ਰੀਕਾ","003":"ਉੱਤਰ ਅਮਰੀਕਾ","005":"ਦੱਖਣ ਅਮਰੀਕਾ","009":"ਓਸ਼ੇਨੀਆ","011":"ਪੱਛਮੀ ਅਫ਼ਰੀਕਾ","013":"ਕੇਂਦਰੀ ਅਮਰੀਕਾ","014":"ਪੂਰਬੀ ਅਫ਼ਰੀਕਾ","015":"ਉੱਤਰੀ ਅਫ਼ਰੀਕਾ","017":"ਮੱਧ ਅਫ਼ਰੀਕਾ","018":"ਦੱਖਣੀ ਅਫ਼ਰੀਕਾ","019":"ਅਮਰੀਕਾ","021":"ਉੱਤਰੀ ਅਮਰੀਕਾ","029":"ਕੈਰੇਬੀਆਈ","030":"ਪੂਰਬੀ ਏਸ਼ੀਆ","034":"ਦੱਖਣੀ ਏਸ਼ੀਆ","035":"ਦੱਖਣ-ਪੂਰਬੀ ਏਸ਼ੀਆ","039":"ਦੱਖਣੀ ਯੂਰਪ","053":"ਆਸਟਰੇਲੇਸ਼ੀਆ","054":"ਮੇਲਾਨੇਸ਼ੀਆ","057":"ਮਾਇਕ੍ਰੋਨੇਸ਼ੀਆਈ ਇਲਾਕਾ","061":"ਪੋਲੀਨੇਸ਼ੀਆ","AC":"ਅਸੈਂਸ਼ਨ ਟਾਪੂ","AD":"ਅੰਡੋਰਾ","AE":"ਸੰਯੁਕਤ ਅਰਬ ਅਮੀਰਾਤ","AF":"ਅਫ਼ਗਾਨਿਸਤਾਨ","AG":"ਐਂਟੀਗੁਆ ਅਤੇ ਬਾਰਬੁਡਾ","AI":"ਅੰਗੁਇਲਾ","AL":"ਅਲਬਾਨੀਆ","AM":"ਅਰਮੀਨੀਆ","AO":"ਅੰਗੋਲਾ","AQ":"ਅੰਟਾਰਕਟਿਕਾ","AR":"ਅਰਜਨਟੀਨਾ","AS":"ਅਮੈਰੀਕਨ ਸਮੋਆ","AT":"ਆਸਟਰੀਆ","AU":"ਆਸਟ੍ਰੇਲੀਆ","AW":"ਅਰੂਬਾ","AX":"ਅਲੈਂਡ ਟਾਪੂ","AZ":"ਅਜ਼ਰਬਾਈਜਾਨ","BA":"ਬੋਸਨੀਆ ਅਤੇ ਹਰਜ਼ੇਗੋਵੀਨਾ","BB":"ਬਾਰਬਾਡੋਸ","BD":"ਬੰਗਲਾਦੇਸ਼","BE":"ਬੈਲਜੀਅਮ","BF":"ਬੁਰਕੀਨਾ ਫ਼ਾਸੋ","BG":"ਬੁਲਗਾਰੀਆ","BH":"ਬਹਿਰੀਨ","BI":"ਬੁਰੁੰਡੀ","BJ":"ਬੇਨਿਨ","BL":"ਸੇਂਟ ਬਾਰਥੇਲੇਮੀ","BM":"ਬਰਮੂਡਾ","BN":"ਬਰੂਨੇਈ","BO":"ਬੋਲੀਵੀਆ","BQ":"ਕੈਰੇਬੀਆਈ ਨੀਦਰਲੈਂਡ","BR":"ਬ੍ਰਾਜ਼ੀਲ","BS":"ਬਹਾਮਾਸ","BT":"ਭੂਟਾਨ","BV":"ਬੌਵੇਟ ਟਾਪੂ","BW":"ਬੋਤਸਵਾਨਾ","BY":"ਬੇਲਾਰੂਸ","BZ":"ਬੇਲੀਜ਼","CA":"ਕੈਨੇਡਾ","CC":"ਕੋਕੋਸ (ਕੀਲਿੰਗ) ਟਾਪੂ","CD":"ਕਾਂਗੋ - ਕਿੰਸ਼ਾਸਾ","CF":"ਕੇਂਦਰੀ ਅਫ਼ਰੀਕੀ ਗਣਰਾਜ","CG":"ਕਾਂਗੋ - ਬ੍ਰਾਜ਼ਾਵਿਲੇ","CH":"ਸਵਿਟਜ਼ਰਲੈਂਡ","CI":"ਕੋਟ ਡੀਵੋਆਰ","CK":"ਕੁੱਕ ਟਾਪੂ","CL":"ਚਿਲੀ","CM":"ਕੈਮਰੂਨ","CN":"ਚੀਨ","CO":"ਕੋਲੰਬੀਆ","CP":"ਕਲਿੱਪਰਟਨ ਟਾਪੂ","CR":"ਕੋਸਟਾ ਰੀਕਾ","CU":"ਕਿਊਬਾ","CV":"ਕੇਪ ਵਰਡੇ","CW":"ਕੁਰਾਕਾਓ","CX":"ਕ੍ਰਿਸਮਿਸ ਟਾਪੂ","CY":"ਸਾਇਪ੍ਰਸ","CZ":"ਚੈਕੀਆ","DE":"ਜਰਮਨੀ","DG":"ਡੀਇਗੋ ਗਾਰਸੀਆ","DJ":"ਜ਼ੀਬੂਤੀ","DK":"ਡੈਨਮਾਰਕ","DM":"ਡੋਮੀਨਿਕਾ","DO":"ਡੋਮੀਨਿਕਾਈ ਗਣਰਾਜ","DZ":"ਅਲਜੀਰੀਆ","EA":"ਸਿਓਟਾ ਅਤੇ ਮੇਲਿੱਲਾ","EC":"ਇਕਵੇਡੋਰ","EE":"ਇਸਟੋਨੀਆ","EG":"ਮਿਸਰ","EH":"ਪੱਛਮੀ ਸਹਾਰਾ","ER":"ਇਰੀਟ੍ਰਿਆ","ES":"ਸਪੇਨ","ET":"ਇਥੋਪੀਆ","EU":"ਯੂਰਪੀ ਸੰਘ","EZ":"ਯੂਰੋਜ਼ੋਨ","FI":"ਫਿਨਲੈਂਡ","FJ":"ਫ਼ਿਜੀ","FK":"ਫ਼ਾਕਲੈਂਡ ਟਾਪੂ","FM":"ਮਾਇਕ੍ਰੋਨੇਸ਼ੀਆ","FO":"ਫੈਰੋ ਟਾਪੂ","FR":"ਫ਼ਰਾਂਸ","GA":"ਗਬੋਨ","GB":"ਯੂਨਾਈਟਡ ਕਿੰਗਡਮ","GD":"ਗ੍ਰੇਨਾਡਾ","GE":"ਜਾਰਜੀਆ","GF":"ਫਰੈਂਚ ਗੁਇਆਨਾ","GG":"ਗਰਨਜੀ","GH":"ਘਾਨਾ","GI":"ਜਿਬਰਾਲਟਰ","GL":"ਗ੍ਰੀਨਲੈਂਡ","GM":"ਗੈਂਬੀਆ","GN":"ਗਿਨੀ","GP":"ਗੁਆਡੇਲੋਪ","GQ":"ਭੂ-ਖੰਡੀ ਗਿਨੀ","GR":"ਗ੍ਰੀਸ","GS":"ਦੱਖਣੀ ਜਾਰਜੀਆ ਅਤੇ ਦੱਖਣੀ ਸੈਂਡਵਿਚ ਟਾਪੂ","GT":"ਗੁਆਟੇਮਾਲਾ","GU":"ਗੁਆਮ","GW":"ਗਿਨੀ-ਬਿਸਾਉ","GY":"ਗੁਯਾਨਾ","HK":"ਹਾਂਗ ਕਾਂਗ ਐਸਏਆਰ ਚੀਨ","HM":"ਹਰਡ ਤੇ ਮੈਕਡੋਨਾਲਡ ਟਾਪੂ","HN":"ਹੋਂਡੁਰਸ","HR":"ਕਰੋਏਸ਼ੀਆ","HT":"ਹੈਤੀ","HU":"ਹੰਗਰੀ","IC":"ਕੇਨਾਰੀ ਟਾਪੂ","ID":"ਇੰਡੋਨੇਸ਼ੀਆ","IE":"ਆਇਰਲੈਂਡ","IL":"ਇਜ਼ਰਾਈਲ","IM":"ਆਇਲ ਆਫ ਮੈਨ","IN":"ਭਾਰਤ","IO":"ਬਰਤਾਨਵੀ ਹਿੰਦ ਮਹਾਂਸਾਗਰ ਖਿੱਤਾ","IQ":"ਇਰਾਕ","IR":"ਈਰਾਨ","IS":"ਆਈਸਲੈਂਡ","IT":"ਇਟਲੀ","JE":"ਜਰਸੀ","JM":"ਜਮਾਇਕਾ","JO":"ਜਾਰਡਨ","JP":"ਜਪਾਨ","KE":"ਕੀਨੀਆ","KG":"ਕਿਰਗਿਜ਼ਸਤਾਨ","KH":"ਕੰਬੋਡੀਆ","KI":"ਕਿਰਬਾਤੀ","KM":"ਕੋਮੋਰੋਸ","KN":"ਸੇਂਟ ਕਿਟਸ ਐਂਡ ਨੇਵਿਸ","KP":"ਉੱਤਰ ਕੋਰੀਆ","KR":"ਦੱਖਣ ਕੋਰੀਆ","KW":"ਕੁਵੈਤ","KY":"ਕੇਮੈਨ ਟਾਪੂ","KZ":"ਕਜ਼ਾਖਸਤਾਨ","LA":"ਲਾਓਸ","LB":"ਲੈਬਨਾਨ","LC":"ਸੇਂਟ ਲੂਸੀਆ","LI":"ਲਿਚੇਂਸਟਾਇਨ","LK":"ਸ੍ਰੀ ਲੰਕਾ","LR":"ਲਾਈਬੀਰੀਆ","LS":"ਲੇਸੋਥੋ","LT":"ਲਿਥੁਆਨੀਆ","LU":"ਲਕਜ਼ਮਬਰਗ","LV":"ਲਾਤਵੀਆ","LY":"ਲੀਬੀਆ","MA":"ਮੋਰੱਕੋ","MC":"ਮੋਨਾਕੋ","MD":"ਮੋਲਡੋਵਾ","ME":"ਮੋਂਟੇਨੇਗਰੋ","MF":"ਸੇਂਟ ਮਾਰਟਿਨ","MG":"ਮੈਡਾਗਾਸਕਰ","MH":"ਮਾਰਸ਼ਲ ਟਾਪੂ","MK":"ਉੱਤਰੀ ਮੈਕਡੋਨੀਆ","ML":"ਮਾਲੀ","MM":"ਮਿਆਂਮਾਰ (ਬਰਮਾ)","MN":"ਮੰਗੋਲੀਆ","MO":"ਮਕਾਉ ਐਸਏਆਰ ਚੀਨ","MP":"ਉੱਤਰੀ ਮਾਰੀਆਨਾ ਟਾਪੂ","MQ":"ਮਾਰਟੀਨਿਕ","MR":"ਮੋਰਿਟਾਨੀਆ","MS":"ਮੋਂਟਸੇਰਾਤ","MT":"ਮਾਲਟਾ","MU":"ਮੌਰੀਸ਼ਸ","MV":"ਮਾਲਦੀਵ","MW":"ਮਲਾਵੀ","MX":"ਮੈਕਸੀਕੋ","MY":"ਮਲੇਸ਼ੀਆ","MZ":"ਮੋਜ਼ਾਮਬੀਕ","NA":"ਨਾਮੀਬੀਆ","NC":"ਨਿਊ ਕੈਲੇਡੋਨੀਆ","NE":"ਨਾਈਜਰ","NF":"ਨੋਰਫੌਕ ਟਾਪੂ","NG":"ਨਾਈਜੀਰੀਆ","NI":"ਨਿਕਾਰਾਗੁਆ","NL":"ਨੀਦਰਲੈਂਡ","NO":"ਨਾਰਵੇ","NP":"ਨੇਪਾਲ","NR":"ਨਾਉਰੂ","NU":"ਨਿਯੂ","NZ":"ਨਿਊਜ਼ੀਲੈਂਡ","OM":"ਓਮਾਨ","PA":"ਪਨਾਮਾ","PE":"ਪੇਰੂ","PF":"ਫਰੈਂਚ ਪੋਲੀਨੇਸ਼ੀਆ","PG":"ਪਾਪੂਆ ਨਿਊ ਗਿਨੀ","PH":"ਫਿਲੀਪੀਨਜ","PK":"ਪਾਕਿਸਤਾਨ","PL":"ਪੋਲੈਂਡ","PM":"ਸੇਂਟ ਪੀਅਰੇ ਐਂਡ ਮਿਕੇਲਨ","PN":"ਪਿਟਕੇਰਨ ਟਾਪੂ","PR":"ਪਿਊਰਟੋ ਰਿਕੋ","PS":"ਫਿਲੀਸਤੀਨੀ ਇਲਾਕਾ","PT":"ਪੁਰਤਗਾਲ","PW":"ਪਲਾਉ","PY":"ਪੈਰਾਗਵੇ","QA":"ਕਤਰ","QO":"ਆਊਟਲਾਇੰਗ ਓਸ਼ੀਨੀਆ","RE":"ਰਿਯੂਨੀਅਨ","RO":"ਰੋਮਾਨੀਆ","RS":"ਸਰਬੀਆ","RU":"ਰੂਸ","RW":"ਰਵਾਂਡਾ","SA":"ਸਾਊਦੀ ਅਰਬ","SB":"ਸੋਲੋਮਨ ਟਾਪੂ","SC":"ਸੇਸ਼ਲਸ","SD":"ਸੂਡਾਨ","SE":"ਸਵੀਡਨ","SG":"ਸਿੰਗਾਪੁਰ","SH":"ਸੇਂਟ ਹੇਲੇਨਾ","SI":"ਸਲੋਵੇਨੀਆ","SJ":"ਸਵਾਲਬਰਡ ਅਤੇ ਜਾਨ ਮਾਯੇਨ","SK":"ਸਲੋਵਾਕੀਆ","SL":"ਸਿਏਰਾ ਲਿਓਨ","SM":"ਸੈਨ ਮਰੀਨੋ","SN":"ਸੇਨੇਗਲ","SO":"ਸੋਮਾਲੀਆ","SR":"ਸੂਰੀਨਾਮ","SS":"ਦੱਖਣ ਸੁਡਾਨ","ST":"ਸਾਓ ਟੋਮ ਅਤੇ ਪ੍ਰਿੰਸੀਪੇ","SV":"ਅਲ ਸਲਵਾਡੋਰ","SX":"ਸਿੰਟ ਮਾਰਟੀਨ","SY":"ਸੀਰੀਆ","SZ":"ਇਸਵਾਤੀਨੀ","TA":"ਟ੍ਰਿਸਟਾਨ ਦਾ ਕੁੰਹਾ","TC":"ਟੁਰਕਸ ਅਤੇ ਕੈਕੋਸ ਟਾਪੂ","TD":"ਚਾਡ","TF":"ਫਰੈਂਚ ਦੱਖਣੀ ਪ੍ਰਦੇਸ਼","TG":"ਟੋਗੋ","TH":"ਥਾਈਲੈਂਡ","TJ":"ਤਾਜਿਕਿਸਤਾਨ","TK":"ਟੋਕੇਲਾਉ","TL":"ਤਿਮੋਰ-ਲੇਸਤੇ","TM":"ਤੁਰਕਮੇਨਿਸਤਾਨ","TN":"ਟਿਊਨੀਸ਼ੀਆ","TO":"ਟੌਂਗਾ","TR":"ਤੁਰਕੀ","TT":"ਟ੍ਰਿਨੀਡਾਡ ਅਤੇ ਟੋਬਾਗੋ","TV":"ਟੁਵਾਲੂ","TW":"ਤਾਇਵਾਨ","TZ":"ਤਨਜ਼ਾਨੀਆ","UA":"ਯੂਕਰੇਨ","UG":"ਯੂਗਾਂਡਾ","UM":"ਯੂ.ਐੱਸ. ਦੂਰ-ਦੁਰਾਡੇ ਟਾਪੂ","UN":"ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ","US":"ਸੰਯੁਕਤ ਰਾਜ","UY":"ਉਰੂਗਵੇ","UZ":"ਉਜ਼ਬੇਕਿਸਤਾਨ","VA":"ਵੈਟੀਕਨ ਸਿਟੀ","VC":"ਸੇਂਟ ਵਿਨਸੈਂਟ ਐਂਡ ਗ੍ਰੇਨਾਡੀਨਸ","VE":"ਵੇਨੇਜ਼ੂਏਲਾ","VG":"ਬ੍ਰਿਟਿਸ਼ ਵਰਜਿਨ ਟਾਪੂ","VI":"ਯੂ ਐੱਸ ਵਰਜਿਨ ਟਾਪੂ","VN":"ਵੀਅਤਨਾਮ","VU":"ਵਾਨੂਆਟੂ","WF":"ਵਾਲਿਸ ਅਤੇ ਫੂਟੂਨਾ","WS":"ਸਾਮੋਆ","XA":"ਗਲਤ-ਉਚਾਰਨ","XB":"ਲਿਖਤ ਦੀ ਗਲਤ ਦਿਸ਼ਾ","XK":"ਕੋਸੋਵੋ","YE":"ਯਮਨ","YT":"ਮਾਯੋਟੀ","ZA":"ਦੱਖਣੀ ਅਫਰੀਕਾ","ZM":"ਜ਼ਾਮਬੀਆ","ZW":"ਜ਼ਿੰਬਾਬਵੇ","ZZ":"ਅਣਪਛਾਤਾ ਇਲਾਕਾ"},"short":{"GB":"ਯੂ.ਕੇ.","HK":"ਹਾਂਗ ਕਾਂਗ","MO":"ਮਕਾਉ","PS":"ਫਿਲੀਸਤੀਨ","UN":"ਯੂ.ਐੱਨ.","US":"ਯੂ.ਐੱਸ."},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"ਅਰਬੀ","Aran":"ਨਸਤਾਲੀਕ","Armi":"Armi","Armn":"ਅਰਮੀਨੀਆਈ","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"ਬੰਗਾਲੀ","Bhks":"Bhks","Bopo":"ਬੋਪੋਮੋਫੋ","Brah":"Brah","Brai":"ਬਰੇਲ","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"ਸਿਰੀਲਿਕ","Deva":"ਦੇਵਨਾਗਰੀ","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"ਇਥੀਓਪਿਕ","Geor":"ਜਾਰਜੀਆਈ","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"ਯੂਨਾਨੀ","Gujr":"ਗੁਜਰਾਤੀ","Guru":"ਗੁਰਮੁਖੀ","Hanb":"ਹਾਂਬ","Hang":"ਹੰਗੁਲ","Hani":"ਹਾਨ","Hano":"Hano","Hans":"ਸਰਲ","Hant":"ਰਵਾਇਤੀ","Hatr":"Hatr","Hebr":"ਹਿਬਰੂ","Hira":"ਹਿਰਾਗਾਨਾ","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"ਜਾਪਾਨੀ ਸਿਲੇਬਰੀਜ਼","Hung":"Hung","Ital":"Ital","Jamo":"ਜਾਮੋ","Java":"Java","Jpan":"ਜਪਾਨੀ","Kali":"Kali","Kana":"ਕਾਟਾਕਾਨਾ","Khar":"Khar","Khmr":"ਖਮੇਰ","Khoj":"Khoj","Kits":"Kits","Knda":"ਕੰਨੜ","Kore":"ਕੋਰੀਆਈ","Kthi":"Kthi","Lana":"Lana","Laoo":"ਲਾਓ","Latn":"ਲਾਤੀਨੀ","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"ਮਲਿਆਲਮ","Modi":"Modi","Mong":"ਮੰਗੋਲੀਅਨ","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"ਮਿਆਂਮਾਰ","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"ਉੜੀਆ","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"ਸਿੰਹਾਲਾ","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"ਤਮਿਲ","Tang":"Tang","Tavt":"Tavt","Telu":"ਤੇਲਗੂ","Tfng":"Tfng","Tglg":"Tglg","Thaa":"ਥਾਨਾ","Thai":"ਥਾਈ","Tibt":"ਤਿੱਬਤੀ","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"ਗਣਿਤ ਚਿੰਨ੍ਹ-ਲਿਪੀ","Zsye":"ਇਮੋਜੀ","Zsym":"ਚਿੰਨ੍ਹ","Zxxx":"ਅਲਿਖਤ","Zyyy":"ਸਧਾਰਨ","Zzzz":"ਅਣਪਛਾਤੀ ਲਿਪੀ"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"ਸੰਯੁਕਤ ਅਰਬ ਅਮੀਰਾਤ ਦਿਰਹਾਮ","AFA":"AFA","AFN":"ਅਫ਼ਗਾਨ ਅਫ਼ਗਾਨੀ","ALK":"ALK","ALL":"ਅਲਬਾਨੀਆਈ ਲੇਕ","AMD":"ਅਰਮੀਨੀਆਈ ਦਰਾਮ","ANG":"ਨੀਦਰਲੈਂਡਸ ਐਂਟੀਲੀਅਨ ਗਿਲਡਰ","AOA":"ਅੰਗੋਲਾ ਕਵਾਂਜਾ","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ਅਰਜਨਟੀਨੀ ਅਸਟਰਾਲ","ARL":"ਅਰਜਨਟੀਨੀ ਪੇਸੋ ਲੇ (1970–1983)","ARM":"ਅਰਜਨਟੀਨੀ ਪੇਸੋ (1881–1970)","ARP":"ਅਰਜਨਟੀਨੀ ਪੇਸੋ (1983–1985)","ARS":"ਅਰਜਨਟੀਨੀ ਪੇਸੋ","ATS":"ATS","AUD":"ਆਸਟ੍ਰੇਲੀਆਈ ਡਾਲਰ","AWG":"ਅਰੂਬਨ ਫਲੋਰਿਨ","AZM":"AZM","AZN":"ਅਜ਼ਰਬਾਈਜਾਨ ਮਾਨਤ","BAD":"BAD","BAM":"ਬੋਸਨੀਆ-ਹਰਜ਼ੇਗੋਵੀਨਾ ਬਦਲਣਯੋਗ ਮਾਰਕ","BAN":"BAN","BBD":"ਬਾਰਬਾਡੀਅਨ ਡਾਲਰ","BDT":"ਬੰਗਲਾਦੇਸ਼ੀ ਟਕਾ","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"ਬੁਲਗਾਰੀਆਈ ਲੇਵ","BGO":"BGO","BHD":"ਬਹਿਰੀਨੀ ਦਿਨਾਰ","BIF":"ਬੁਰੁੰਡੀਆਈ ਫ੍ਰੈਂਕ","BMD":"ਬਰਮੂਡਾ ਡਾਲਰ","BND":"ਬਰੂਨੇਈ ਡਾਲਰ","BOB":"ਬੋਲੀਵੀਅਨ ਬੋਲੀਵੀਅਨੋ","BOL":"ਬੋਲੀਵੀਆਈ ਬੋਲੀਵੀਅਨੋ (1863–1963)","BOP":"ਬੋਲੀਵੀਆਈ ਪੇਸੋ","BOV":"ਬੋਲੀਵੀਆਈ ਮਵਡੋਲ","BRB":"ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਨਿਊ ਕਰੁਜ਼ਿਰੋਸ (1967–1986)","BRC":"ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਾਡੂ (1986–1989)","BRE":"ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1990–1993)","BRL":"ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਰੀਅਲ","BRN":"ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਨਿਊ ਕਰੁਜ਼ਾਡੂ (1989–1990)","BRR":"ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1993–1994)","BRZ":"ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1942–1967)","BSD":"ਬਾਹਾਮੀਅਨ ਡਾਲਰ","BTN":"ਭੂਟਾਨੀ ਐਂਗਲਟ੍ਰਮ","BUK":"BUK","BWP":"ਬੋਟਸਵਾਨਾ ਪੁਲਾ","BYB":"BYB","BYN":"ਬੇਲਾਰੂਸੀ ਰੂਬਲ","BYR":"ਬੇਲਾਰੂਸੀ ਰੂਬਲ (2000–2016)","BZD":"ਬੇਲੀਜ਼ ਡਾਲਰ","CAD":"ਕੇਨੇਡਿਆਈ ਡਾਲਰ","CDF":"ਕਾਂਗੋਲੀਜ਼ ਫ੍ਰੈਂਕ","CHE":"CHE","CHF":"ਸਵਿਸ ਫ੍ਰੈਂਕ","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"ਚਿਲੀ ਪੇਸੋ","CNH":"ਚੀਨੀ ਯੁਆਨ (ਔਫ਼ਸ਼ੋਰ)","CNX":"CNX","CNY":"ਚੀਨੀ ਯੁਆਨ","COP":"ਕੋਲੰਬਿਆਈ ਪੇਸੋ","COU":"COU","CRC":"ਕੋਸਟਾ ਰੀਕਨ ਕੋਲਨ","CSD":"CSD","CSK":"CSK","CUC":"ਕਿਊਬਨ ਬਦਲਣਯੋਗ ਪੇਸੋ","CUP":"ਕਿਊਬਨ ਪੇਸੋ","CVE":"ਕੇਪ ਵਰਡੀਅਨ ਸਕੂਡੋ","CYP":"CYP","CZK":"ਚੈਕ ਗਣਰਾਜ ਕੋਰੁਨਾ","DDM":"DDM","DEM":"ਜਰਮਨ ਮਾਰਕ","DJF":"ਜ਼ੀਬੂਤੀਅਨ ਫ੍ਰੈਂਕ","DKK":"ਡੈਨਿਸ਼ ਕਰੌਨ","DOP":"ਡੌਮਿਨਿਕਨ ਪੇਸੋ","DZD":"ਅਲਜੀਰਿਆਈ ਦਿਨਾਰ","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"ਮਿਸਰੀ ਪੌਂਡ","ERN":"ਇਰੀਟ੍ਰਿਆਈ ਨਾਫ਼ਾ","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ਇਥੋਪੀਆਈ ਬਿਰ","EUR":"ਯੂਰੋ","FIM":"FIM","FJD":"ਫ਼ਿਜ਼ੀ ਡਾਲਰ","FKP":"ਫ਼ਾਕਲੈਂਡ ਆਈਲੈਂਡਸ ਪੌਂਡ","FRF":"FRF","GBP":"ਬ੍ਰਿਟਿਸ਼ ਪੌਂਡ","GEK":"GEK","GEL":"ਜਾਰਜੀਆਈ ਲਾਰੀ","GHC":"GHC","GHS":"ਘਾਨਾਈ ਸੇਡੀ","GIP":"ਜਿਬਰਾਲਟਰ ਪੌਂਡ","GMD":"ਗੈਂਬੀਆਈ ਦਲਾਸੀ","GNF":"ਗਿਨੀ ਫ੍ਰੈਂਕ","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"ਗੁਆਟੇਮਾਲਾ ਕੁਏਟਜ਼ਲ","GWE":"GWE","GWP":"GWP","GYD":"ਗੁਆਨਾਆਈ ਡਾਲਰ","HKD":"ਹਾਂਗ ਕਾਂਗ ਡਾਲਰ","HNL":"ਹਾਨਡੂਰਨ ਲੇਮਪਿਰਾ","HRD":"HRD","HRK":"ਕਰੋਏਸ਼ੀਆਈ ਕੁਨਾ","HTG":"ਹੈਤੀ ਗੌਰਡੇ","HUF":"ਹੰਗਰੀ ਫੋਰਿੰਟ","IDR":"ਇੰਡੋਨੇਸ਼ੀਆਈ ਰੁਪਿਆਹ","IEP":"ਆਇਰਿਸ਼ ਪੌਂਡ","ILP":"ਇਜ਼ਰਾਈਲੀ ਪੌਂਡ","ILR":"ILR","ILS":"ਇਜ਼ਰਾਈਲੀ ਨਵੀਂ ਸ਼ੇਕੇਲ","INR":"ਭਾਰਤੀ ਰੁਪਇਆ","IQD":"ਇਰਾਕੀ ਦਿਨਾਰ","IRR":"ਈਰਾਨੀ ਰਿਆਲ","ISJ":"ISJ","ISK":"ਆਈਸਲੈਂਡੀ ਕਰੋਨਾ","ITL":"ITL","JMD":"ਜਮਾਇਕਨ ਡਾਲਰ","JOD":"ਜਾਰਡਨ ਦਿਨਾਰ","JPY":"ਜਪਾਨੀ ਯੇਨ","KES":"ਕੀਨੀਆਈ ਸ਼ਿਲਿੰਗ","KGS":"ਕਿਰਗਿਸਤਾਨੀ ਸੋਮ","KHR":"ਕੰਬੋਡੀਆਈ ਰੀਅਲ","KMF":"ਕੋਮੋਰੀਅਨ ਫ੍ਰੈਂਕ","KPW":"ਉੱਤਰੀ ਕੋਰੀਆਈ ਵੋਨ","KRH":"KRH","KRO":"KRO","KRW":"ਦੱਖਣੀ ਕੋਰੀਆਈ ਵੋਨ","KWD":"ਕੁਵੈਤੀ ਦਿਨਾਰ","KYD":"ਕੇਮੈਨ ਆਈਲੈਂਡਸ ਡਾਲਰ","KZT":"ਕਜ਼ਾਖਸਤਾਨੀ ਤੇਂਗੇ","LAK":"ਲਾਓਟਿਆਈ ਕਿਪ","LBP":"ਲੈਬਨਾਨੀ ਪੌਂਡ","LKR":"ਸ੍ਰੀਲੰਕਾਈ ਰੁਪਇਆ","LRD":"ਲਾਈਬੀਰੀਆਈ ਡਾਲਰ","LSL":"LSL","LTL":"ਲਿਥੁਆਨੀਆਈ ਲਿਤਾਸ","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"ਲਾਟਵਿਆਈ ਲਾਟਸ","LVR":"LVR","LYD":"ਲੀਬੀਆਈ ਦਿਨਾਰ","MAD":"ਮੋਰੱਕਨ ਦਿਰਹਾਮ","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"ਮੋਲਡੋਵਨ ਲੇਉ","MGA":"ਮਾਲਾਗਾਸੀ ਅਰਾਇਰੀ","MGF":"MGF","MKD":"ਮੈਕਡੋਨੀਆਈ ਡੇਨਾਰ","MKN":"MKN","MLF":"MLF","MMK":"ਮਿਆਂਮਾਰ ਕਿਆਤ","MNT":"ਮੰਗੋਲੀਆਈ ਤੁਗਰਿਕ","MOP":"ਮੇਕਾਨੀ ਪਟਾਕਾ","MRO":"ਮੋਰਿਟਾਨੀਆਈ ਊਗੀਆ (1973–2017)","MRU":"ਮੋਰਿਟਾਨੀਆਈ ਊਗੀਆ","MTL":"MTL","MTP":"MTP","MUR":"ਮੌਰਿਸ਼ੀਆਈ ਰੁਪਇਆ","MVP":"MVP","MVR":"ਮਾਲਦੀਵੀ ਰੁਫੀਆ","MWK":"ਮਾਲਾਵੀਆਈ ਕਵਾਚਾ","MXN":"ਮੈਕਸੀਕਨ ਪੇਸੋ","MXP":"MXP","MXV":"MXV","MYR":"ਮਲੇਸ਼ੀਆਈ ਰਿੰਗਿਟ","MZE":"MZE","MZM":"MZM","MZN":"ਮੋਜ਼ਾਮਬੀਕਨ ਮੈਟੀਕਲ","NAD":"ਨਾਮੀਬੀਆਈ ਡਾਲਰ","NGN":"ਨਾਇਜੀਰੀਆਈ ਨਾਇਰਾ","NIC":"NIC","NIO":"ਨਿਕਾਰਾਗੁਆਈ ਕੋਰਡੋਬਾ","NLG":"NLG","NOK":"ਨਾਰਵੇਜੀਆਈ ਕਰੌਨ","NPR":"ਨੇਪਾਲੀ ਰੁਪਇਆ","NZD":"ਨਿਊਜ਼ੀਲੈਂਡ ਡਾਲਰ","OMR":"ਓਮਾਨੀ ਰਿਆਲ","PAB":"ਪਨਾਮੇਨੀਅਨ ਬਾਲਬੋਆ","PEI":"PEI","PEN":"ਪੇਰੂਵੀਅਨ ਸੋਲ","PES":"PES","PGK":"ਪਾਪੂਆ ਨਿਊ ਗਿਨੀਆਈ ਕੀਨਾ","PHP":"ਫਿਲਿਪੀਨੀ ਪੇਸੋ","PKR":"ਪਾਕਿਸਤਾਨੀ ਰੁਪਇਆ","PLN":"ਪੋਲੈਂਡੀ ਜ਼ਲੌਟੀ","PLZ":"PLZ","PTE":"PTE","PYG":"ਪੈਰਾਗੁਵਾਇਨ ਗੁਆਰਾਨੀ","QAR":"ਕਤਰੀ ਰਿਆਲ","RHD":"RHD","ROL":"ROL","RON":"ਰੋਮਾਨੀਆਈ ਲੇਉ","RSD":"ਸਰਬੀਆਈ ਦਿਨਾਰ","RUB":"ਰੂਸੀ ਰੂਬਲ","RUR":"RUR","RWF":"ਰਵਾਂਡਨ ਫ੍ਰੈਂਕ","SAR":"ਸਾਊਦੀ ਰਿਆਲ","SBD":"ਸੋਲੋਮਨ ਆਈਲੈਂਡਸ ਡਾਲਰ","SCR":"ਸੇਸ਼ਲਸ ਰੁਪਇਆ","SDD":"SDD","SDG":"ਸੂਡਾਨੀ ਪੌਂਡ","SDP":"SDP","SEK":"ਸਵੀਡਿਸ਼ ਕਰੋਨਾ","SGD":"ਸਿੰਗਾਪੁਰ ਡਾਲਰ","SHP":"ਸੇਂਟ ਹੇਲੇਨਾ ਪੌਂਡ","SIT":"SIT","SKK":"SKK","SLL":"ਸਿਏਰਾ ਲਿਓਨੀਅਨ ਲਿਓਨ","SOS":"ਸੋਮਾਲੀ ਸ਼ਿਲਿੰਗ","SRD":"ਸੂਰੀਨਾਮੀ ਡਾਲਰ","SRG":"SRG","SSP":"ਦੱਖਣੀ ਸੂਡਾਨੀ ਪੌਂਡ","STD":"ਸਾਉ ਟੋਮੀ ਐਂਡ ਪ੍ਰਿੰਸਪੀ ਡੋਬਰਾ (1977–2017)","STN":"ਸਾਉ ਟੋਮੀ ਐਂਡ ਪ੍ਰਿੰਸਪੀ ਡੋਬਰਾ","SUR":"ਸੋਵੀਅਤ ਰੂਬਲ","SVC":"SVC","SYP":"ਸੀਰੀਆਈ ਪੌਂਡ","SZL":"ਸਵਾਜ਼ੀ ਲਾਇਲੈਂਗਨੀ","THB":"ਥਾਈ ਬਾਹਤ","TJR":"TJR","TJS":"ਤਾਜਿਕਿਸਤਾਨੀ ਸੋਮੋਨੀ","TMM":"TMM","TMT":"ਤੁਰਕਮੇਨਿਸਤਾਨੀ ਮਾਨਤ","TND":"ਟਿਉਨੀਸ਼ੀਆਈ ਦਿਨਾਰ","TOP":"ਟੌਂਗਨ ਪੈਂਗਾ","TPE":"TPE","TRL":"TRL","TRY":"ਤੁਰਕੀ ਲੀਰਾ","TTD":"ਟ੍ਰਿਨੀਡਾਡ ਅਤੇ ਟੋਬਾਗੋ ਡਾਲਰ","TWD":"ਨਵਾਂ ਤਾਇਵਾਨ ਡਾਲਰ","TZS":"ਤਨਜ਼ਾਨੀਆਈ ਸ਼ਿਲਿੰਗ","UAH":"ਯੂਕਰੇਨੀਆਈ ਰਿਵਨਿਆ","UAK":"UAK","UGS":"UGS","UGX":"ਯੂਗਾਂਡੀਆਈ ਸ਼ਿਲਿੰਗ","USD":"ਯੂ.ਐਸ. ਡਾਲਰ","USN":"USN","USS":"USS","UYI":"UYI","UYP":"ਉਰੂਗੁਵਾਇਨ ਪੇਸੋ (1975–1993)","UYU":"ਉਰੂਗੁਵਾਇਨ ਪੇਸੋ","UYW":"UYW","UZS":"ਉਜ਼ਬੇਕਿਸਤਾਨ ਸੋਮ","VEB":"ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ (1871–2008)","VEF":"ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ (2008–2018)","VES":"ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ","VND":"ਵੀਅਤਨਾਮੀ ਡੋਂਗ","VNN":"ਵੀਅਤਨਾਮੀ ਡੋਂਗ (1978–1985)","VUV":"ਵਾਨੂਆਟੂ ਵਾਟੂ","WST":"ਸਾਮੋਆਈ ਤਾਲਾ","XAF":"ਕੇਂਦਰੀ ਅਫ਼ਰੀਕੀ [CFA] ਫ੍ਰੈਂਕ","XAG":"ਚਾਂਦੀ","XAU":"ਸੋਨਾ","XBA":"XBA","XBB":"ਯੂਰਪੀ ਵਿੱਤੀ ਇਕਾਈ","XBC":"XBC","XBD":"XBD","XCD":"ਪੂਰਬੀ ਕੈਰੇਬੀਅਨ ਡਾਲਰ","XDR":"XDR","XEU":"ਯੂਰਪੀ ਮੁਦਰਾ ਇਕਾਈ","XFO":"XFO","XFU":"XFU","XOF":"ਪੱਛਮੀ ਅਫ਼ਰੀਕੀ (CFA) ਫ੍ਰੈਂਕ","XPD":"XPD","XPF":"ਫ੍ਰੈਂਕ (CFP)","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"ਅਗਿਆਤ ਮੁਦਰਾ","YDD":"YDD","YER":"ਯਮਨੀ ਰਿਆਲ","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ਦੱਖਣੀ ਅਫਰੀਕੀ ਰੈਂਡ","ZMK":"ZMK","ZMW":"ਜ਼ਾਮਬੀਆਈ ਕਵਾਚਾ","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"pa-Guru"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
