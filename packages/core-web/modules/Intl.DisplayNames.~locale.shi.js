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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("shi").length
)) {
// Intl.DisplayNames.~locale.shi
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"ⵜⴰⴽⴰⵏⵜ","am":"ⵜⴰⵎⵀⴰⵔⵉⵜ","ar":"ⵜⴰⵄⵔⴰⴱⵜ","ar-001":"ⵜⴰⵄⵔⴰⴱⵜ (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"ⵜⴰⴱⵉⵍⴰⵔⵓⵙⵜ","bem":"bem","bez":"bez","bg":"ⵜⴰⴱⵍⵖⴰⵔⵉⵜ","bm":"bm","bn":"ⵜⴰⴱⵏⵖⴰⵍⵉⵜ","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"ⵜⴰⵜⵛⵉⴽⵉⵜ","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"ⵜⴰⵍⵉⵎⴰⵏⵜ","de-AT":"ⵜⴰⵍⵉⵎⴰⵏⵜ (ⵏⵏⵎⵙⴰ)","de-CH":"ⵜⴰⵍⵉⵎⴰⵏⵜ (ⵙⵡⵉⵙⵔⴰ)","dje":"dje","doi":"doi","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"ⵜⴰⴳⵔⵉⴳⵉⵜ","en":"ⵜⴰⵏⴳⵍⵉⵣⵜ","en-AU":"ⵜⴰⵏⴳⵍⵉⵣⵜ (ⵓⵙⵜⵔⴰⵍⵢⴰ)","en-CA":"ⵜⴰⵏⴳⵍⵉⵣⵜ (ⴽⴰⵏⴰⴷⴰ)","en-GB":"ⵜⴰⵏⴳⵍⵉⵣⵜ (ⵜⴰⴳⵍⴷⵉⵜ ⵉⵎⵓⵏⵏ)","en-US":"ⵜⴰⵏⴳⵍⵉⵣⵜ (ⵉⵡⵓⵏⴰⴽ ⵎⵓⵏⵏⵉⵏ ⵏ ⵎⵉⵔⵉⴽⴰⵏ)","eo":"eo","es":"ⵜⴰⵙⴱⵏⵢⵓⵍⵉⵜ","es-419":"ⵜⴰⵙⴱⵏⵢⵓⵍⵉⵜ (419)","es-ES":"ⵜⴰⵙⴱⵏⵢⵓⵍⵉⵜ (ⵙⴱⴰⵏⵢⴰ)","es-MX":"ⵜⴰⵙⴱⵏⵢⵓⵍⵉⵜ (ⵎⵉⴽⵙⵉⴽ)","et":"et","eu":"eu","ewo":"ewo","fa":"ⵜⴰⴼⵓⵔⵙⵉⵜ","fa-AF":"ⵜⴰⴼⵓⵔⵙⵉⵜ (ⴰⴼⵖⴰⵏⵉⵙⵜⴰⵏ)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"ⵜⴰⴼⵔⴰⵏⵙⵉⵙⵜ","fr-CA":"ⵜⴰⴼⵔⴰⵏⵙⵉⵙⵜ (ⴽⴰⵏⴰⴷⴰ)","fr-CH":"ⵜⴰⴼⵔⴰⵏⵙⵉⵙⵜ (ⵙⵡⵉⵙⵔⴰ)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"ⵜⴰⵀⴰⵡⵙⴰⵜ","haw":"haw","he":"he","hi":"ⵜⴰⵀⵉⵏⴷⵉⵜ","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"ⵜⴰⵀⵏⵖⴰⵔⵉⵜ","hy":"hy","ia":"ia","id":"ⵜⴰⵏⴷⵓⵏⵉⵙⵉⵜ","ig":"ⵜⵉⴳⴱⵓⵜ","ii":"ii","is":"is","it":"ⵜⴰⵟⴰⵍⵢⴰⵏⵜ","ja":"ⵜⴰⵊⴰⴱⴱⵓⵏⵉⵜ","jgo":"jgo","jmc":"jmc","jv":"ⵜⴰⵊⴰⴼⴰⵏⵉⵜ","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","kgp":"kgp","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"ⵜⴰⵅⵎⵉⵔⵜ","kn":"kn","ko":"ⵜⴰⴽⵓⵔⵉⵜ","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lij":"lij","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"ⵜⴰⵎⴰⵍⴰⵡⵉⵜ","mt":"mt","mua":"mua","mul":"mul","my":"ⵜⴰⴱⵉⵔⵎⴰⵏⵉⵜ","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (ⵀⵓⵍⴰⵏⴷⴰ)","ne":"ⵜⴰⵏⵉⴱⴰⵍⵉⵜ","nl":"ⵜⴰⵀⵓⵍⴰⵏⴷⵉⵜ","nl-BE":"ⵜⴰⵀⵓⵍⴰⵏⴷⵉⵜ (ⴱⵍⵊⵉⴽⴰ)","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","nv":"nv","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"ⵜⴰⴱⵏⵊⴰⴱⵉⵜ","pcm":"pcm","pl":"ⵜⴰⴱⵓⵍⵓⵏⵉⵜ","prg":"prg","ps":"ps","pt":"ⵜⴰⴱⵕⵟⵇⵉⵣⵜ","pt-BR":"ⵜⴰⴱⵕⵟⵇⵉⵣⵜ (ⴱⵔⴰⵣⵉⵍ)","pt-PT":"ⵜⴰⴱⵕⵟⵇⵉⵣⵜ (ⴱⵕⵟⵇⵉⵣ)","qu":"qu","rm":"rm","rn":"rn","ro":"ⵜⴰⵔⵓⵎⴰⵏⵉⵜ","ro-MD":"ⵜⴰⵔⵓⵎⴰⵏⵉⵜ (ⵎⵓⵍⴷⵓⴼⵢⴰ)","rof":"rof","ru":"ⵜⴰⵔⵓⵙⵉⵜ","rw":"ⵜⴰⵔⵓⵡⴰⵏⴷⵉⵜ","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"ⵜⴰⵛⵍⵃⵉⵜ","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"ⵜⴰⵙⵓⵎⴰⵍⵉⵜ","sq":"sq","sr":"sr","st":"st","su":"su","sv":"ⵜⴰⵙⵡⵉⴷⵉⵜ","sw":"sw","sw-CD":"sw (ⵜⴰⴳⴷⵓⴷⴰⵏⵜ ⵜⴰⴷⵉⵎⵓⵇⵔⴰⵜⵉⵜ ⵏ ⴽⵓⵏⴳⵓ)","ta":"ⵜⴰⵜⴰⵎⵉⵍⵜ","te":"te","teo":"teo","tg":"tg","th":"ⵜⴰⵜⴰⵢⵍⴰⵏⴷⵉⵜ","ti":"ti","tk":"tk","to":"to","tr":"ⵜⴰⵜⵓⵔⴽⵉⵜ","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"ⵜⵓⴽⵔⴰⵏⵉⵜ","und":"und","ur":"ⵜⵓⵔⴷⵓⵜ","uz":"uz","vai":"vai","vi":"ⵜⴰⴼⵉⵜⵏⴰⵎⵉⵜ","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"ⵜⴰⵢⵔⵓⴱⴰⵜ","yue":"yue","zgh":"zgh","zh":"ⵜⴰⵛⵉⵏⵡⵉⵜ","zh-Hans":"ⵜⴰⵛⵉⵏⵡⵉⵜ (Hans)","zh-Hant":"ⵜⴰⵛⵉⵏⵡⵉⵜ (Hant)","zu":"ⵜⴰⵣⵓⵍⵓⵜ","zxx":"zxx"},"short":{"az":"az","en-GB":"ⵜⴰⵏⴳⵍⵉⵣⵜ (ⵜⴰⴳⵍⴷⵉⵜ ⵉⵎⵓⵏⵏ)","en-US":"ⵜⴰⵏⴳⵍⵉⵣⵜ (ⵉⵡⵓⵏⴰⴽ ⵎⵓⵏⵏⵉⵏ ⵏ ⵎⵉⵔⵉⴽⴰⵏ)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"AC","AD":"ⴰⵏⴷⵓⵔⴰ","AE":"ⵍⵉⵎⴰⵔⴰⵜ","AF":"ⴰⴼⵖⴰⵏⵉⵙⵜⴰⵏ","AG":"ⴰⵏⵜⵉⴳⴰ ⴷ ⴱⵔⴱⵓⴷⴰ","AI":"ⴰⵏⴳⵉⵍⴰ","AL":"ⴰⵍⴱⴰⵏⵢⴰ","AM":"ⴰⵔⵎⵉⵏⵢⴰ","AO":"ⴰⵏⴳⵓⵍⴰ","AQ":"AQ","AR":"ⴰⵔⵊⴰⵏⵜⵉⵏ","AS":"ⵙⴰⵎⵡⴰ ⵜⴰⵎⵉⵔⵉⴽⴰⵏⵉⵜ","AT":"ⵏⵏⵎⵙⴰ","AU":"ⵓⵙⵜⵔⴰⵍⵢⴰ","AW":"ⴰⵔⵓⴱⴰ","AX":"AX","AZ":"ⴰⴷⵔⴰⴱⵉⵊⴰⵏ","BA":"ⴱⵓⵙⵏⴰ ⴷ ⵀⵉⵔⵙⵉⴽ","BB":"ⴱⴰⵔⴱⴰⴷ","BD":"ⴱⴰⵏⴳⵍⴰⴷⵉⵛ","BE":"ⴱⵍⵊⵉⴽⴰ","BF":"ⴱⵓⵔⴽⵉⵏⴰ ⴼⴰⵙⵓ","BG":"ⴱⵍⵖⴰⵔⵢⴰ","BH":"ⴱⵃⵔⴰⵢⵏ","BI":"ⴱⵓⵔⵓⵏⴷⵉ","BJ":"ⴱⵉⵏⵉⵏ","BL":"BL","BM":"ⴱⵔⵎⵓⴷⴰ","BN":"ⴱⵔⵓⵏⵉ","BO":"ⴱⵓⵍⵉⴼⵢⴰ","BQ":"BQ","BR":"ⴱⵔⴰⵣⵉⵍ","BS":"ⴱⴰⵀⴰⵎⴰⵙ","BT":"ⴱⵀⵓⵜⴰⵏ","BV":"BV","BW":"ⴱⵓⵜⵙⵡⴰⵏⴰ","BY":"ⴱⵉⵍⴰⵔⵓⵙⵢⴰ","BZ":"ⴱⵉⵍⵉⵣ","CA":"ⴽⴰⵏⴰⴷⴰ","CC":"CC","CD":"ⵜⴰⴳⴷⵓⴷⴰⵏⵜ ⵜⴰⴷⵉⵎⵓⵇⵔⴰⵜⵉⵜ ⵏ ⴽⵓⵏⴳⵓ","CF":"ⵜⴰⴳⴷⵓⴷⴰⵏⵜ ⵜⴰⵏⴰⵎⵎⴰⵙⵜ ⵏ ⵉⴼⵔⵉⵇⵢⴰ","CG":"ⴽⵓⵏⴳⵓ","CH":"ⵙⵡⵉⵙⵔⴰ","CI":"ⴽⵓⵜ ⴷⵉⴼⵡⴰⵔ","CK":"ⵜⵉⴳⵣⵉⵔⵉⵏ ⵏ ⴽⵓⴽ","CL":"ⵛⵛⵉⵍⵉ","CM":"ⴽⴰⵎⵉⵔⵓⵏ","CN":"ⵛⵛⵉⵏⵡⴰ","CO":"ⴽⵓⵍⵓⵎⴱⵢⴰ","CP":"CP","CR":"ⴽⵓⵙⵜⴰ ⵔⵉⴽⴰ","CU":"ⴽⵓⴱⴰ","CV":"ⵜⵉⴳⵣⵉⵔⵉⵏ ⵏ ⴽⴰⴱⴱⵉⵔⴷⵉ","CW":"CW","CX":"CX","CY":"ⵇⵓⴱⵔⵓⵙ","CZ":"ⵜⴰⴳⴷⵓⴷⴰⵏⵜ ⵜⴰⵜⵛⵉⴽⵉⵜ","DE":"ⴰⵍⵎⴰⵏⵢⴰ","DG":"DG","DJ":"ⴷⵊⵉⴱⵓⵜⵉ","DK":"ⴷⴰⵏⵎⴰⵔⴽ","DM":"ⴷⵓⵎⵉⵏⵉⴽ","DO":"ⵜⴰⴳⴷⵓⴷⴰⵏⵜ ⵜⴰⴷⵓⵎⵉⵏⵉⴽⵜ","DZ":"ⴷⵣⴰⵢⵔ","EA":"EA","EC":"ⵉⴽⵡⴰⴷⵓⵔ","EE":"ⵉⵙⵜⵓⵏⵢⴰ","EG":"ⵎⵉⵚⵕ","EH":"EH","ER":"ⵉⵔⵉⵜⵉⵔⵢⴰ","ES":"ⵙⴱⴰⵏⵢⴰ","ET":"ⵉⵜⵢⵓⴱⵢⴰ","EU":"EU","EZ":"EZ","FI":"ⴼⵉⵍⵍⴰⵏⴷⴰ","FJ":"ⴼⵉⴷⵊⵉ","FK":"ⵜⵉⴳⵣⵉⵔⵉⵏ ⵏ ⵎⴰⵍⴰⵡⵉ","FM":"ⵎⵉⴽⵔⵓⵏⵉⵣⵢⴰ","FO":"FO","FR":"ⴼⵔⴰⵏⵙⴰ","GA":"ⴳⴰⴱⵓⵏ","GB":"ⵜⴰⴳⵍⴷⵉⵜ ⵉⵎⵓⵏⵏ","GD":"ⵖⵔⵏⴰⵟⴰ","GE":"ⵊⵓⵔⵊⵢⴰ","GF":"ⴳⵡⵉⵢⴰⵏ ⵜⴰⴼⵔⴰⵏⵙⵉⵙⵜ","GG":"GG","GH":"ⵖⴰⵏⴰ","GI":"ⴰⴷⵔⴰⵔ ⵏ ⵟⴰⵕⵉⵇ","GL":"ⴳⵔⵉⵍⴰⵏⴷ","GM":"ⴳⴰⵎⴱⵢⴰ","GN":"ⵖⵉⵏⵢⴰ","GP":"ⴳⵡⴰⴷⴰⵍⵓⴱ","GQ":"ⵖⵉⵏⵢⴰ ⵏ ⵉⴽⵡⴰⴷⵓⵔ","GR":"ⵍⵢⵓⵏⴰⵏ","GS":"GS","GT":"ⴳⵡⴰⵜⵉⵎⴰⵍⴰ","GU":"ⴳⵡⴰⵎ","GW":"ⵖⵉⵏⵢⴰ ⴱⵉⵙⴰⵡ","GY":"ⴳⵡⵉⵢⴰⵏⴰ","HK":"HK","HM":"HM","HN":"ⵀⵓⵏⴷⵓⵔⴰⵙ","HR":"ⴽⵔⵡⴰⵜⵢⴰ","HT":"ⵀⴰⵢⵜⵉ","HU":"ⵀⵏⵖⴰⵔⵢⴰ","IC":"IC","ID":"ⴰⵏⴷⵓⵏⵉⵙⵢⴰ","IE":"ⵉⵔⵍⴰⵏⴷⴰ","IL":"ⵉⵙⵔⴰⵢⵉⵍ","IM":"IM","IN":"ⵍⵀⵉⵏⴷ","IO":"ⵜⴰⵎⵏⴰⴹⵜ ⵜⴰⵏⴳⵍⵉⵣⵉⵜ ⵏ ⵓⴳⴰⵔⵓ ⴰⵀⵉⵏⴷⵉ","IQ":"ⵍⵄⵉⵔⴰⵇ","IR":"ⵉⵔⴰⵏ","IS":"ⵉⵙⵍⴰⵏⴷ","IT":"ⵉⵟⴰⵍⵢⴰ","JE":"JE","JM":"ⵊⴰⵎⴰⵢⴽⴰ","JO":"ⵍⵓⵔⴷⵓⵏ","JP":"ⵍⵢⴰⴱⴰⵏ","KE":"ⴽⵉⵏⵢⴰ","KG":"ⴽⵉⵔⵖⵉⵣⵉⵙⵜⴰⵏ","KH":"ⴽⴰⵎⴱⵓⴷⵢⴰ","KI":"ⴽⵉⵔⵉⴱⴰⵜⵉ","KM":"ⵇⵓⵎⵓⵔ","KN":"ⵙⴰⵏⴽⵔⵉⵙ ⴷ ⵏⵉⴼⵉⵙ","KP":"ⴽⵓⵔⵢⴰ ⵏ ⵉⵥⵥⵍⵎⴹ","KR":"ⴽⵓⵔⵢⴰ ⵏ ⵉⴼⴼⵓⵙ","KW":"ⵍⴽⵡⵉⵜ","KY":"ⵜⵉⴳⵣⵉⵔⵉⵏ ⵏ ⴽⴰⵢⵎⴰⵏ","KZ":"ⴽⴰⵣⴰⵅⵙⵜⴰⵏ","LA":"ⵍⴰⵡⵙ","LB":"ⵍⵓⴱⵏⴰⵏ","LC":"ⵙⴰⵏⵜⵍⵓⵙⵉ","LI":"ⵍⵉⴽⵉⵏⵛⵜⴰⵢⵏ","LK":"ⵙⵔⵉⵍⴰⵏⴽⴰ","LR":"ⵍⵉⴱⵉⵔⵢⴰ","LS":"ⵍⵉⵚⵓⵟⵓ","LT":"ⵍⵉⵜⵡⴰⵏⵢⴰ","LU":"ⵍⵓⴽⵙⴰⵏⴱⵓⵔⴳ","LV":"ⵍⴰⵜⴼⵢⴰ","LY":"ⵍⵉⴱⵢⴰ","MA":"ⵍⵎⵖⵔⵉⴱ","MC":"ⵎⵓⵏⴰⴽⵓ","MD":"ⵎⵓⵍⴷⵓⴼⵢⴰ","ME":"ME","MF":"MF","MG":"ⵎⴰⴷⴰⵖⴰⵛⵇⴰⵔ","MH":"ⵜⵉⴳⵣⵉⵔⵉⵏ ⵏ ⵎⴰⵔⵛⴰⵍ","MK":"MK","ML":"ⵎⴰⵍⵉ","MM":"ⵎⵢⴰⵏⵎⴰⵔ","MN":"ⵎⵏⵖⵓⵍⵢⴰ","MO":"MO","MP":"ⵜⵉⴳⵣⵉⵔⵉⵏ ⵏ ⵎⴰⵔⵢⴰⵏ ⵏ ⵉⵥⵥⵍⵎⴹ","MQ":"ⵎⴰⵔⵜⵉⵏⵉⴽ","MR":"ⵎⵓⵕⵉⵟⴰⵏⵢⴰ","MS":"ⵎⵓⵏⵙⵉⵔⴰⵜ","MT":"ⵎⴰⵍⵟⴰ","MU":"ⵎⵓⵔⵉⵙ","MV":"ⵎⴰⵍⴷⵉⴼ","MW":"ⵎⴰⵍⴰⵡⵉ","MX":"ⵎⵉⴽⵙⵉⴽ","MY":"ⵎⴰⵍⵉⵣⵢⴰ","MZ":"ⵎⵓⵣⵏⴱⵉⵇ","NA":"ⵏⴰⵎⵉⴱⵢⴰ","NC":"ⴽⴰⵍⵉⴷⵓⵏⵢⴰ ⵜⴰⵎⴰⵢⵏⵓⵜ","NE":"ⵏⵏⵉⵊⵉⵔ","NF":"ⵜⵉⴳⵣⵉⵔⵉⵏ ⵏ ⵏⵓⵔⴼⵓⵍⴽ","NG":"ⵏⵉⵊⵉⵔⵢⴰ","NI":"ⵏⵉⴽⴰⵔⴰⴳⵡⴰ","NL":"ⵀⵓⵍⴰⵏⴷⴰ","NO":"ⵏⵏⵔⵡⵉⵊ","NP":"ⵏⵉⴱⴰⵍ","NR":"ⵏⴰⵡⵔⵓ","NU":"ⵏⵉⵡⵉ","NZ":"ⵏⵢⵓⵣⵉⵍⴰⵏⴷⴰ","OM":"ⵄⵓⵎⴰⵏ","PA":"ⴱⴰⵏⴰⵎⴰ","PE":"ⴱⵉⵔⵓ","PF":"ⴱⵓⵍⵉⵏⵉⵣⵢⴰ ⵜⴰⴼⵔⴰⵏⵙⵉⵙⵜ","PG":"ⴱⴰⴱⵡⴰ ⵖⵉⵏⵢⴰ ⵜⴰⵎⴰⵢⵏⵓⵜ","PH":"ⴼⵉⵍⵉⴱⴱⵉⵏ","PK":"ⴱⴰⴽⵉⵙⵜⴰⵏ","PL":"ⴱⵓⵍⵓⵏⵢⴰ","PM":"ⵙⴰⵏⴱⵢⵉⵔ ⴷ ⵎⵉⴽⵍⵓⵏ","PN":"ⴱⵉⵜⴽⴰⵢⵔⵏ","PR":"ⴱⵓⵔⵜⵓ ⵔⵉⴽⵓ","PS":"ⴰⴳⵎⵎⴰⴹ ⵏ ⵜⴰⴳⵓⵜ ⴷ ⵖⵣⵣⴰ","PT":"ⴱⵕⵟⵇⵉⵣ","PW":"ⴱⴰⵍⴰⵡ","PY":"ⴱⴰⵔⴰⴳⵡⴰⵢ","QA":"ⵇⴰⵜⴰⵔ","QO":"QO","RE":"ⵔⵉⵢⵓⵏⵢⵓⵏ","RO":"ⵔⵓⵎⴰⵏⵢⴰ","RS":"RS","RU":"ⵔⵓⵙⵢⴰ","RW":"ⵔⵡⴰⵏⴷⴰ","SA":"ⵙⵙⴰⵄⵓⴷⵉⵢⴰ","SB":"ⵜⵉⴳⵣⵉⵔⵉⵏ ⵏ ⵙⴰⵍⵓⵎⴰⵏ","SC":"ⵙⵙⵉⵛⵉⵍ","SD":"ⵙⵙⵓⴷⴰⵏ","SE":"ⵙⵙⵡⵉⴷ","SG":"ⵙⵏⵖⴰⴼⵓⵔⴰ","SH":"ⵙⴰⵏⵜⵉⵍⵉⵏ","SI":"ⵙⵍⵓⴼⵉⵏⵢⴰ","SJ":"SJ","SK":"ⵙⵍⵓⴼⴰⴽⵢⴰ","SL":"ⵙⵙⵉⵔⴰⵍⵢⵓⵏ","SM":"ⵙⴰⵏⵎⴰⵔⵉⵏⵓ","SN":"ⵙⵙⵉⵏⵉⴳⴰⵍ","SO":"ⵚⵚⵓⵎⴰⵍ","SR":"ⵙⵓⵔⵉⵏⴰⵎ","SS":"SS","ST":"ⵙⴰⵡⵟⵓⵎⵉ ⴷ ⴱⵔⴰⵏⵙⵉⴱ","SV":"ⵙⴰⵍⴼⴰⴷⵓⵔ","SX":"SX","SY":"ⵙⵓⵔⵢⴰ","SZ":"ⵙⵡⴰⵣⵉⵍⴰⵏⴷⴰ","TA":"TA","TC":"ⵜⵉⴳⵣⵉⵔⵉⵏ ⵏ ⵜⵓⵔⴽⵢⴰ ⴷ ⴽⴰⵢⴽ","TD":"ⵜⵛⴰⴷ","TF":"TF","TG":"ⵟⵓⴳⵓ","TH":"ⵟⴰⵢⵍⴰⵏⴷ","TJ":"ⵜⴰⴷⵊⴰⴽⵉⵙⵜⴰⵏ","TK":"ⵟⵓⴽⵍⴰⵡ","TL":"ⵜⵉⵎⵓⵔ ⵏ ⵍⵇⴱⵍⵜ","TM":"ⵜⵓⵔⴽⵎⴰⵏⵙⵜⴰⵏ","TN":"ⵜⵓⵏⵙ","TO":"ⵟⵓⵏⴳⴰ","TR":"ⵜⵓⵔⴽⵢⴰ","TT":"ⵜⵔⵉⵏⵉⴷⴰⴷ ⴷ ⵟⵓⴱⴰⴳⵓ","TV":"ⵜⵓⴼⴰⵍⵓ","TW":"ⵟⴰⵢⵡⴰⵏ","TZ":"ⵟⴰⵏⵥⴰⵏⵢⴰ","UA":"ⵓⴽⵔⴰⵏⵢⴰ","UG":"ⵓⵖⴰⵏⴷⴰ","UM":"UM","UN":"UN","US":"ⵉⵡⵓⵏⴰⴽ ⵎⵓⵏⵏⵉⵏ ⵏ ⵎⵉⵔⵉⴽⴰⵏ","UY":"ⵓⵔⵓⴳⵡⴰⵢ","UZ":"ⵓⵣⴱⴰⴽⵉⵙⵜⴰⵏ","VA":"ⴰⵡⴰⵏⴽ ⵏ ⴼⴰⵜⵉⴽⴰⵏ","VC":"ⵙⴰⵏⴼⴰⵏⵙⴰⵏ ⴷ ⴳⵔⵉⵏⴰⴷⵉⵏ","VE":"ⴼⵉⵏⵣⵡⵉⵍⴰ","VG":"ⵜⵉⴳⵣⵉⵔⵉⵏ ⵜⵉⵎⴳⴰⴷ ⵏ ⵏⵏⴳⵍⵉⵣ","VI":"ⵜⵉⴳⵣⵉⵔⵉⵏ ⵜⵉⵎⴳⴰⴷ ⵏ ⵉⵡⵓⵏⴰⴽ ⵎⵓⵏⵏⵉⵏ","VN":"ⴼⵉⵜⵏⴰⵎ","VU":"ⴼⴰⵏⵡⴰⵟⵓ","WF":"ⵡⴰⵍⵉⵙ ⴷ ⴼⵓⵜⵓⵏⴰ","WS":"ⵙⴰⵎⵡⴰ","XA":"XA","XB":"XB","XK":"XK","YE":"ⵢⴰⵎⴰⵏ","YT":"ⵎⴰⵢⵓⵟ","ZA":"ⴰⴼⵔⵉⵇⵢⴰ ⵏ ⵉⴼⴼⵓⵙ","ZM":"ⵣⴰⵎⴱⵢⴰ","ZW":"ⵣⵉⵎⴱⴰⴱⵡⵉ","ZZ":"ZZ"},"short":{"GB":"ⵜⴰⴳⵍⴷⵉⵜ ⵉⵎⵓⵏⵏ","HK":"HK","MO":"MO","PS":"ⴰⴳⵎⵎⴰⴹ ⵏ ⵜⴰⴳⵓⵜ ⴷ ⵖⵣⵣⴰ","US":"ⵉⵡⵓⵏⴰⴽ ⵎⵓⵏⵏⵉⵏ ⵏ ⵎⵉⵔⵉⴽⴰⵏ"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"ⴰⴷⵔⵉⵎ ⵏ ⵍⵉⵎⴰⵔⴰⵜ","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"ⴽⵡⴰⵏⵣⴰ ⵏ ⴰⵏⴳⵓⵍⴰ","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"ⴰⴷⵓⵍⴰⵔ ⵏ ⵓⵙⵜⵔⴰⵍⵢⴰ","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"ⴰⴷⵉⵏⴰⵔ ⵏ ⴱⵃⵔⴰⵢⵏ","BIF":"ⴼⵔⴰⵏⴽ ⵏ ⴱⵓⵔⵓⵏⴷⵉ","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"ⴰⴱⵓⵍⴰ ⵏ ⴱⵓⵜⵙⵡⴰⵏⴰ","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"ⴰⴷⵓⵍⴰⵔ ⵏ ⴽⴰⵏⴰⴷⴰ","CDF":"ⴼⵔⴰⵏⴽ ⵏ ⴽⵓⵏⴳⵓ","CHE":"CHE","CHF":"ⴰⴼⵔⴰⵏⴽ ⵏ ⵙⵡⵉⵙⵔⴰ","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"ⴰⵢⴰⵏ ⵏ ⵛⵛⵉⵏⵡⴰ","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"ⵉⵙⴽⵓⴷⵓ ⵏ ⴽⴰⴱⴱⵉⵔⴷⵉ","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"ⴼⵔⴰⵏⴽ ⵏ ⴷⵊⵉⴱⵓⵜⵉ","DKK":"DKK","DOP":"DOP","DZD":"ⴰⴷⵉⵏⴰⵔ ⵏ ⴷⵣⴰⵢⵔ","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"ⴰⵊⵏⵉⵀ ⵏ ⵎⵉⵚⵕ","ERN":"ⵏⴰⴼⴽⴰ ⵏ ⵉⵔⵉⵜⵉⵔⵢⴰ","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ⴱⵉⵔ ⵏ ⵉⵜⵢⵓⴱⵢⴰ","EUR":"ⵓⵔⵓ","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"ⴰⵊⵏⵉⵀ ⴰⵙⵜⵔⵍⵉⵏⵉ ⵏ ⵏⵏⴳⵍⵉⵣ","GEK":"GEK","GEL":"GEL","GHC":"ⵙⵉⴷⵉ ⵏ ⵖⴰⵏⴰ","GHS":"GHS","GIP":"GIP","GMD":"ⴷⴰⵍⴰⵙⵉ ⵏ ⴳⴰⵎⴱⵢⴰ","GNF":"GNF","GNS":"ⴼⵔⴰⵏⴽ ⵏ ⵖⵉⵏⵢⴰ","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"ⴰⵔⵓⴱⵉ ⵏ ⵍⵀⵉⵏⴷ","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"ⴰⵢⴰⵏ ⵏ ⵍⵢⴰⴱⴰⵏ","KES":"ⴰⵛⵉⵍⵉⵏ ⵏ ⴽⵉⵏⵢⴰ","KGS":"KGS","KHR":"KHR","KMF":"ⴼⵔⴰⵏⴽ ⵏ ⵇⵓⵎⵓⵕ","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"ⴰⴷⵓⵍⴰⵔ ⵏ ⵍⵉⴱⵉⵔⵢⴰ","LSL":"ⵍⵓⵜⵉ ⵏ ⵍⵉⵚⵓⵟⵓ","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"ⴰⴷⵉⵏⴰⵔ ⵏ ⵍⵉⴱⵢⴰ","MAD":"ⴰⴷⵔⵉⵎ ⵏ ⵍⵎⵖⵔⵉⴱ","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"ⴼⵔⴰⵏⴽ ⵏ ⵎⴰⴷⴰⵖⴰⵛⵇⴰⵔ","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"ⵓⵇⵉⵢⵢⴰ ⵏ ⵎⵓⵕⵉⵟⴰⵏⵢⴰ (1973–2017)","MRU":"ⵓⵇⵉⵢⵢⴰ ⵏ ⵎⵓⵕⵉⵟⴰⵏⵢⴰ","MTL":"MTL","MTP":"MTP","MUR":"ⴰⵔⵓⴱⵉ ⵏ ⵎⵓⵔⵉⵙ","MVP":"MVP","MVR":"MVR","MWK":"ⴽⵡⴰⵛⴰ ⵏ ⵎⴰⵍⴰⵡⵉ","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"ⴰⵎⵉⵜⵉⴽⵍ ⵏ ⵎⵓⵣⵏⴱⵉⵇ","MZN":"MZN","NAD":"ⴰⴷⵓⵍⴰⵔ ⵏ ⵏⴰⵎⵉⴱⵢⴰ","NGN":"ⵏⴰⵢⵔⴰ ⵏ ⵏⵉⵊⵉⵔⵢⴰ","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"ⴰⴼⵔⴰⵏⴽ ⵏ ⵔⵡⴰⵏⴷⴰ","SAR":"ⴰⵔⵢⴰⵍ ⵏ ⵙⵙⴰⵄⵓⴷⵉⵢⴰ","SBD":"SBD","SCR":"ⴰⵔⵓⴱⵉ ⵏ ⵙⵙⵉⵛⵉⵍ","SDD":"SDD","SDG":"ⴰⴷⵉⵏⴰⵔ ⵏ ⵙⵙⵓⴷⴰⵏ","SDP":"ⴰⵊⵏⵉⵀ ⵏ ⵙⵙⵓⴷⴰⵏ","SEK":"SEK","SGD":"SGD","SHP":"ⴰⵊⵏⵉⵀ ⵏ ⵙⴰⵏⵜⵉⵍⵉⵏ","SIT":"SIT","SKK":"SKK","SLL":"ⵍⵉⵢⵓⵏ","SOS":"ⴰⵛⵉⵍⵉⵏ ⵏ ⵚⵚⵓⵎⴰⵍ","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"ⴰⴷⵓⴱⵔⴰ ⵏ ⵙⴰⵏⵟⵓⵎⵉ (1977–2017)","STN":"ⴰⴷⵓⴱⵔⴰ ⵏ ⵙⴰⵏⵟⵓⵎⵉ","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"ⵍⵉⵍⴰⵏⵊⵉⵏⵉ","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"ⴰⴷⵉⵏⴰⵔ ⵏ ⵜⵓⵏⵙ","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"ⴰⵛⵉⵍⵉⵏ ⵏ ⵟⴰⵏⵥⴰⵏⵢⴰ","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"ⴰⵛⵉⵍⵉⵏ ⵏ ⵓⵖⴰⵏⴷⴰ","USD":"ⴰⴷⵓⵍⴰⵔ ⵏ ⵉⵡⵓⵏⴰⴽ ⵉⵎⵓⵏⵏ","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"ⴼⵔⴰⵏⴽ ⵚⵉⴼⴰ","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"ⴼⵔⴰⵏⴽ ⵚⵉⴼⴰ ⴱⵉⵙⴰⵡ","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ⴰⵔⴰⵏⴷ ⵏ ⴰⴼⵔⵉⵇⵢⴰ ⵏ ⵉⴼⴼⵓⵙ","ZMK":"ⴰⴽⵡⴰⵛⴰ ⵏ ⵣⴰⵎⴱⵢⴰ (1968–2012)","ZMW":"ⴰⴽⵡⴰⵛⴰ ⵏ ⵣⴰⵎⴱⵢⴰ","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ⴰⴷⵓⵍⴰⵔ ⵏ ⵣⵉⵎⴱⴰⴱⵡⵉ","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"shi"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
