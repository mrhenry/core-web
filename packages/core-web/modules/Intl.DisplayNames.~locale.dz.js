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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("dz").length
)) {
// Intl.DisplayNames.~locale.dz
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"ཨ་ཕར་ཁ","ab":"ཨཱབ་ཁ་ཟི་ཡ་ཁ","af":"ཨཕ་རི་ཀཱནས་ཁ","agq":"agq","ak":"ak","am":"ཨམ་ཧ་རིཀ་ཁ","ar":"ཨེ་ར་བིཀ་ཁ","ar-001":"ཨེ་ར་བིཀ་ཁ། (འཛམ་གླིང༌།)","as":"ཨ་ས་མིས་ཁ","asa":"asa","ast":"ast","az":"ཨ་ཛར་བྷའི་ཇཱན་ཁ","bas":"bas","be":"བེལ་ཨ་རུས་ཁ","bem":"bem","bez":"bez","bg":"བཱལ་གེ་རི་ཡཱན་ཁ","bm":"bm","bn":"བངྒ་ལ་ཁ","bo":"བོད་ཁ","br":"br","brx":"brx","bs":"བྷོས་ནི་ཡཱན་ཁ","ca":"ཀེ་ཊ་ལཱན་ཁ","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"ཅེཀ་ཁ","cu":"cu","cy":"ཝེལཤ་ཁ","da":"ཌེ་ནིཤ་ཁ","dak":"ད་ཀོ་ཏ་ཁ","dav":"dav","de":"ཇཱར་མཱན་ཁ","de-AT":"ཨཱོས་ཊྲི་ཡཱན་ཇཱར་མཱན་ཁ","de-CH":"སུ་ཡིས་གི་མཐོ་སའི་ཇཱར་མཱན་ཁ","dje":"dje","dsb":"dsb","dua":"dua","dv":"དི་བེ་ཧི་ཁ","dyo":"dyo","dz":"རྫོང་ཁ","ebu":"ebu","ee":"ee","el":"གྲིཀ་ཁ","en":"ཨིང་ལིཤ་ཁ","en-AU":"ཨཱོས་ཊྲེ་ལི་ཡཱན་ཨིང་ལིཤ་ཁ","en-CA":"ཀེ་ན་ཌི་ཡཱན་ཨིང་ལིཤ་ཁ","en-GB":"བྲི་ཊིཤ་ཨིང་ལིཤ་ཁ","en-US":"ཡུ་ཨེས་ཨིང་ལིཤ་ཁ","eo":"ཨེས་པ་རཱན་ཏོ་ཁ","es":"ཨིས་པེ་ནིཤ་ཁ","es-419":"ལེ་ཊིན་ཨ་མེ་རི་ཀཱན་གི་ཨིས་པེ་ནིཤ་ཁ","es-ES":"ཡུ་རོབ་ཀྱི་ཨིས་པེ་ནིཤ་ཁ","es-MX":"ཨིས་པེ་ནིཤ་ཁ། (མེཀ་སི་ཀོ།)","et":"ཨེས་ཊོ་ནི་ཡཱན་ཁ","eu":"བཱསཀ་ཁ","ewo":"ewo","fa":"པར་ཤི་ཡཱན་ཁ","fa-AF":"པར་ཤི་ཡཱན་ཁ། (ཨཕ་གྷ་ནི་སཏཱན།)","ff":"ff","fi":"ཕི་ནིཤ་ཁ","fil":"ཕི་ལི་པི་ནོ་ཁ","fj":"ཕི་ཇི་ཡཱན་ཁ","fo":"ཕཱ་རོ་ཨིས་ཁ","fr":"ཕྲནཅ་ཁ","fr-CA":"ཀེ་ན་ཌི་ཡཱན་ཕྲནཅ་ཁ","fr-CH":"སུ་ཡིས་ཕྲནཅ་ཁ","frc":"frc","fur":"fur","fy":"ནུབ་ཕྼི་སི་ཡན་ཁ","ga":"ཨཱའི་རིཤ་ཁ","gd":"gd","gl":"གལ་ཨིས་ཨི་ཡན་ཁ","gn":"གུ་ཝ་ར་ནི་ཁ","gsw":"སུ་ཡིས་ཇཱར་མཱན་ཁ","gu":"གུ་ཇ་ར་ཏི་ཁ","guz":"guz","gv":"gv","ha":"ཧཝ་ས་ཁ","haw":"ཧ་ཝ་ཡིའི་ཁ","he":"ཧེ་བྲུ་ཁ","hi":"ཧིན་དི་ཁ","hmn":"hmn","hr":"ཀྲོ་ཨེ་ཤི་ཡཱན་ཁ","hsb":"hsb","ht":"ཧེ་ཏི་ཡཱན་ཁ","hu":"ཧཱང་གྷ་རི་ཡཱན་ཁ","hy":"ཨར་མི་ནི་ཡཱན་ཁ","ia":"ia","id":"ཨིན་ཌོ་ནེ་ཤི་ཡཱན་ཁ","ig":"ཨིག་བོ་ཁ","ii":"ii","is":"ཨ་ཡིས་ལེན་ཌིཀ་ཁ","it":"ཨི་ཊ་ལི་ཡཱན་ཁ","ja":"ཇཱ་པཱ་ནིས་ཁ","jgo":"jgo","jmc":"jmc","jv":"ཇཱ་བ་ནིས་ཁ","ka":"ཇཽ་ཇི་ཡཱན་ཁ","kab":"kab","kac":"ཀ་ཆིན་ཁ","kam":"kam","kde":"kde","kea":"kea","kfo":"ཀོ་རོ་ཁ","khq":"khq","ki":"ki","kk":"ཀ་ཛགས་ཁ","kkj":"kkj","kl":"kl","kln":"kln","km":"ཁེ་མེར་ཁ","kn":"ཀ་ན་ཌ་ཁ","ko":"ཀོ་རི་ཡཱན་ཁ","kok":"kok","ks":"ཀཱཤ་མི་རི་ཁ","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ཀར་ཌིཤ་ཁ","kw":"kw","ky":"ཀིར་གིས་ཁ","la":"ལེ་ཊིན་ཁ","lag":"lag","lb":"ལག་ཛམ་བོརྒ་ཁ","lg":"lg","lkt":"lkt","ln":"ln","lo":"ལཱ་ཝོས་ཁ","lou":"lou","lrc":"lrc","lt":"ལི་ཐུ་ཝེ་ནི་ཡཱན་ཁ","lu":"lu","luo":"luo","luy":"luy","lv":"ལཊ་བི་ཡཱན་ཁ","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"མ་ལ་ག་སི་ཁ","mgh":"mgh","mgo":"mgo","mi":"མ་ཨོ་རི་ཁ","mk":"མ་སེ་ཌོ་ནི་ཡཱན་ཁ","ml":"མ་ལ་ཡ་ལམ་ཁ","mn":"mn","mnc":"མན་ཇུ་ཁ","mni":"mni","mr":"མ་ར་ཐི་ཁ","ms":"མ་ལེ་ཁ","mt":"མཱལ་ཊ་ཁ","mua":"mua","mul":"mul","my":"བར་མིས་ཁ","mzn":"mzn","naq":"naq","nb":"ནོར་ཝེ་ཇི་ཡཱན་བོཀ་མཱལ་ཁ","nd":"nd","nds":"nds","nds-NL":"nds། (ནེ་དར་ལནཌས྄།)","ne":"ནེ་པཱལི་ཁ","nl":"ཌཆ་ཁ","nl-BE":"ཕྷེལེ་མིཤ་ཁ","nmg":"nmg","nn":"ནོར་ཝེ་ཇི་ཡཱན་ནོརསཀ་ཁ","nnh":"nnh","no":"ནོར་ཝི་ཇི་ཡན་ཁ","nus":"nus","ny":"ny","nyn":"nyn","om":"om","or":"ཨོ་རི་ཡ་ཁ","os":"os","pa":"པཱན་ཇ་བི་ཁ","pcm":"pcm","pl":"པོ་ལིཤ་ཁ","prg":"prg","ps":"པཱཤ་ཏོ་ཁ","pt":"པོར་ཅུ་གིས་ཁ","pt-BR":"བྲ་ཛི་ལི་ཡཱན་པོར་ཅུ་གིས་ཁ","pt-PT":"ཨི་བེ་རི་ཡཱན་པོར་ཅུ་གིས་ཁ","qu":"ཀྭེ་ཆུ་ཨ་ཁ","rm":"རོ་མེ་ནིཤ་ཁ","rn":"rn","ro":"རོ་མེ་ནི་ཡཱན་ཁ","ro-MD":"རོ་མེ་ནི་ཡཱན་ཁ། (མོལ་དོ་བཱ།)","rof":"rof","root":"root","ru":"ཨུ་རུ་སུའི་ཁ","rw":"rw","rwk":"rwk","sa":"སཾསྐྲྀཏ་ཁ","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"སིན་དཱི་ཁ","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","shn":"ཤཱན་ཁ","si":"སིང་ཧ་ལ་ཁ","sk":"སུ་ལོ་བཱཀ་ཁ","sl":"སུ་ལོ་བི་ནི་ཡཱན་ཁ","sm":"sm","smn":"smn","sn":"sn","so":"སོ་མ་ལི་ཁ","sq":"ཨཱལ་བེ་ནི་ཡཱན་ཁ","sr":"སཱར་བྷི་ཡཱན་ཁ","st":"st","su":"སཱུན་ད་ནིས་ཁ","sv":"སུའི་ཌིཤ་ཁ","sw":"སྭཱ་ཧི་ལི་ཁ","sw-CD":"སྭཱ་ཧི་ལི་ཁ། (ཀོང་གྷོ ཀིན་ཤ་ས།)","ta":"ཏ་མིལ་ཁ","te":"ཏེ་ལུ་གུ་ཁ","teo":"teo","tg":"ཏ་ཇིཀ་ཁ","th":"ཐཱའི་ཁ","ti":"ཏིག་རི་ཉ་ཁ","tk":"ཊཱརཀ་མེན་ཁ","to":"ཊོང་གྷན་ཁ","tr":"ཊཱར་ཀིཤ་ཁ","tt":"ཊ་ཊར་ཁ","twq":"twq","tzm":"tzm","ug":"ཝི་གུར་ཁ","uk":"ཡུ་ཀེ་རེ་ནི་ཡཱན་ཁ","und":"ཁ་ངོ་མ་ཤེསཔ","ur":"ཨུར་དུ་ཁ","uz":"ཨུས་བེཀ་ཁ","vai":"vai","vi":"བེཊ་ནཱ་མིས་ཁ","vo":"vo","vun":"vun","wae":"wae","wo":"ཝོ་ལོཕ་ཁ","xh":"ཞོ་ས་ཁ","xog":"xog","yav":"yav","yi":"yi","yo":"ཡོ་རུ་བ་ཁ","yue":"yue","zgh":"zgh","zh":"རྒྱ་མི་ཁ","zh-Hans":"རྒྱ་མི་ཁ་འཇམ་སངམ","zh-Hant":"སྔ་དུས་ཀྱི་རྒྱ་མི་ཁ","zu":"ཟུ་ལུ་ཁ","zxx":"སྐད་རིག་ནང་དོན་མེདཔ"},"short":{"az":"ཨ་ཛར་བྷའི་ཇཱན་ཁ","en-GB":"བྲི་ཊིཤ་ཨིང་ལིཤ་ཁ","en-US":"ཡུ་ཨེས་ཨིང་ལིཤ་ཁ"},"narrow":{}},"region":{"long":{"142":"ཨེ་ཤི་ཡ","143":"སྦུག་ཕྱོགས་ཀྱི་ཨེ་ཤི་ཡ","145":"ནུབ་ཕྱོགས་ཀྱི་ཨེ་ཤི་ཡ","150":"ཡུ་རོབ","151":"ཤར་ཕྱོགས་ཀྱི་ཡུ་རོབ","154":"བྱང་ཕྱོགས་ཀྱི་ཡུ་རོབ","155":"ནུབ་ཕྱོགས་ཀྱི་ཡུ་རོབ","202":"202","419":"ལེ་ཊིནཨ་མི་རི་ཀ","001":"འཛམ་གླིང༌","002":"ཨཕ་རི་ཀ","003":"བྱང་ཨ་མི་རི་ཀ","005":"ལྷོ་ཨ་མི་རི་ཀ","009":"ཨོཤི་ཡཱན་ན","011":"ནུབ་ཕྱོགས་ཀྱི་ཨཕ་རི་ཀ","013":"བར་ཕྱོགས་ཨ་མི་རི་ཀ","014":"ཤར་ཕྱོགས་ཀྱི་ཨཕ་རི་ཀ","015":"བྱང་ཕྱོགས་ཀྱི་ཨཕ་རི་ཀ","017":"སྦུག་ཕྱོགས་ཀྱི་ཨཕ་རི་ཀ","018":"ལྷོའི་ཨཕ་རི་ཀ","019":"ཨ་མི་རི་ཀ་ཚུ","021":"བྱང་ཕྱོགས་ཀྱི་ཨ་མི་རི་ཀ","029":"ཀེ་རི་བི་ཡེན","030":"ཤར་ཕྱོགས་ཀྱི་ཨེ་ཤི་ཡ","034":"ལྷོའི་ཨེ་ཤི་ཡ","035":"ལྷོ་ཤར་ཕྱོགས་ཀྱི་ཨེ་ཤི་ཡ","039":"ལྷོའི་ཡུ་རོབ","053":"ཨཱོས་ཊྲེལ་ཨེ་ཤི་ཡ","054":"མེ་ལ་ནི་ཤི་ཡ","057":"ལུང་ཕྱོགས་མའི་ཀྲོ་ནི་ཤི་ཡ","061":"པོ་ལི་ནི་ཤི་ཡ","AC":"ཨེ་སེན་ཤུན་ཚོ་གླིང༌","AD":"ཨཱན་དོ་ར","AE":"ཡུ་ནཱའི་ཊེཌ་ ཨ་རབ་ ཨེ་མེ་རེཊས","AF":"ཨཕ་གྷ་ནི་སཏཱན","AG":"ཨན་ཊི་གུ་ཝ་ ཨེནཌ་ བྷར་བྷུ་ཌ","AI":"ཨང་གི་ལ","AL":"ཨཱལ་བེ་ནི་ཡ","AM":"ཨར་མི་ནི་ཡ","AO":"ཨང་གྷོ་ལ","AQ":"འཛམ་གླིང་ལྷོ་མཐའི་ཁྱགས་གླིང","AR":"ཨར་ཇེན་ཊི་ན","AS":"ས་མོ་ཨ་ཡུ་ཨེས་ཨེ་མངའ་ཁོངས","AT":"ཨཱོས་ཊྲི་ཡ","AU":"ཨཱོས་ཊྲེལ་ལི་ཡ","AW":"ཨ་རུ་བཱ","AX":"ཨ་ལནཌ་གླིང་ཚོམ","AZ":"ཨ་ཛར་བྷའི་ཇཱན","BA":"བྷོས་ནི་ཡ་ ཨེནཌ་ ཧར་ཛི་གྷོ་བི་ན","BB":"བྷར་བེ་ཌོས","BD":"བངྒ་ལ་དེཤ","BE":"བྷེལ་ཇམ","BF":"བྷར་ཀི་ན་ ཕེ་སོ","BG":"བུལ་ག་རི་ཡ","BH":"བྷ་རེན","BI":"བྷུ་རུན་ཌི","BJ":"བྷེ་ནིན","BL":"སེནཊ་ བར་ཐོ་ལོམ་མིའུ","BM":"བར་མུ་ཌ","BN":"བྷྲུ་ནའི","BO":"བྷེ་ལི་བི་ཡ","BQ":"ཀེ་རི་བི་ཡེན་ནེ་དར་ལནཌས྄","BR":"བྲ་ཛིལ","BS":"བྷ་ཧ་མས྄","BT":"འབྲུག","BV":"བོའུ་ཝེཊ་མཚོ་གླིང","BW":"བྷོཙ་ཝ་ན","BY":"བེལ་ཨ་རུ་སུ","BZ":"བྷེ་ལིཛ","CA":"ཀེ་ན་ཌ","CC":"ཀོ་ཀོས་གླིང་ཚོམ","CD":"ཀོང་གྷོ ཀིན་ཤ་ས","CF":"སེན་ཊལ་ ཨཕ་རི་ཀཱན་ རི་པབ་ལིཀ","CG":"ཀོང་གྷོ བྷྲ་ཛ་བིལ","CH":"སུ་ཝིཊ་ཛར་ལེནཌ","CI":"ཀོ་ཊེ་ ཌི་ཨི་ཝོ་རེ","CK":"ཀུག་གླིང་ཚོམ","CL":"ཅི་ལི","CM":"ཀེ་མ་རུན","CN":"རྒྱ་ནག","CO":"ཀོ་ལོམ་བྷི་ཡ","CP":"ཀི་ལི་པེར་ཊོན་མཚོ་གླིང་","CR":"ཀོས་ཊ་རི་ཀ","CU":"ཀིའུ་བྷ","CV":"ཀེཔ་བཱཌ","CW":"ཀྱཱུར་ར་ཀོ","CX":"ཁི་རིསྟ་མེས་མཚོ་གླིང","CY":"སཱའི་པྲས","CZ":"ཅེཀ་ རི་པབ་ལིཀ","DE":"ཇཱར་མ་ནི","DG":"ཌི་ཡེ་གོ་གར་སིའོ","DJ":"ཇི་བྷུ་ཊི","DK":"ཌེན་མཱཀ","DM":"ཌོ་མི་ནི་ཀ","DO":"ཌོ་མི་ནི་ཀཱན་ རི་པབ་ལིཀ","DZ":"ཨཱལ་ཇི་རི་ཡ","EA":"སེ་ཨུ་ཏ་ ཨེནཌ་ མེལ་ལི་ལ","EC":"ཨེ་ཁྭ་ཌོར","EE":"ཨེས་ཊོ་ནི་ཡ","EG":"ཨི་ཇིབཊ","EH":"ནུབ་ཕྱོགས་ ས་ཧཱ་ར","ER":"ཨེ་རི་ཊྲེ་ཡ","ES":"ཨིས་པེན","ET":"ཨི་ཐི་ཡོ་པི་ཡ","EU":"ཡུ་རོབ་གཅིག་བསྡོམས་ཚོགས་པ","EZ":"EZ","FI":"ཕིན་ལེནཌ","FJ":"ཕི་ཇི","FK":"ཕལྐ་ལནྜ་གླིང་ཚོམ","FM":"མའི་ཀྲོ་ནི་ཤི་ཡ","FO":"ཕཱའེ་རོ་གླིང་ཚོམ","FR":"ཕྲཱནས","GA":"གྷ་བྷོན","GB":"ཡུ་ནཱའི་ཊེཌ་ ཀིང་ཌམ","GD":"གྲྀ་ན་ཌ","GE":"ཇཽར་ཇཱ","GF":"གུའི་ཡ་ན་ ཕྲནས྄་མངའ་ཁོངས","GG":"གུ་ཨེརྣ་སི","GH":"གྷ་ན","GI":"ཇིབ་རཱལ་ཊར","GL":"གིརཱིན་ལནཌ྄","GM":"གྷེམ་བི་ཡ","GN":"གྷི་ནི","GP":"གོ་ཌེ་ལུ་པེ","GQ":"ཨེ་ཀུ་ཊོ་རེལ་ གི་ནི","GR":"གིརིས྄","GS":"སཱའུཐ་ཇཽར་ཇཱ་ དང་ སཱའུཐ་སེནཌ྄་ཝིཅ་གླིང་ཚོམ","GT":"གྷོ་ཊ་མ་ལ","GU":"གུ་འམ་ མཚོ་གླིང","GW":"གྷི་ནི་ བྷི་སཱའུ","GY":"གྷ་ཡ་ན","HK":"ཧོང་ཀོང་ཅཱའི་ན","HM":"ཧཱརཌ་མཚོ་གླིང་ དང་ མེཀ་ཌོ་ནལཌ྄་གླིང་ཚོམ","HN":"ཧཱན་ཌུ་རཱས྄","HR":"ཀྲོ་ཨེ་ཤ","HT":"ཧེ་ཊི","HU":"ཧཱང་གྷ་རི","IC":"ཀ་ནེ་རི་གླིང་ཚོམ","ID":"ཨིན་ཌོ་ནེ་ཤི་ཡ","IE":"ཨཱ་ཡ་ལེནཌ","IL":"ཨིས་ར་ཡེལ","IM":"ཨ་ཡུལ་ ཨོཕ་ མཱན","IN":"རྒྱ་གར","IO":"བྲི་ཊིཤ་རྒྱ་གར་གྱི་རྒྱ་མཚོ་ས་ཁོངས","IQ":"ཨི་རཱཀ","IR":"ཨི་རཱན","IS":"ཨཱའིས་ལེནཌ","IT":"ཨི་ཊ་ལི","JE":"ཇེར་སི","JM":"ཇཱ་མཻ་ཀ","JO":"ཇོར་ཌན","JP":"ཇ་པཱན","KE":"ཀེན་ཡ","KG":"ཀིར་གིས་སཏཱན","KH":"ཀམ་བྷོ་ཌི་ཡ","KI":"ཀི་རི་བ་ཏི་མཚོ་གླིང","KM":"ཀོ་མོ་རོས","KN":"སེནཊ་ ཀིཊས་ དང་ ནེ་བིས","KP":"བྱང་ ཀོ་རི་ཡ","KR":"ལྷོ་ ཀོ་རི་ཡ","KW":"ཀུ་ཝེཊ","KY":"ཁེ་མེན་གླིང་ཚོམ","KZ":"ཀ་ཛགས་སཏཱན","LA":"ལཱ་ཝོས","LB":"ལེ་བ་ནོན","LC":"སེནཊ་ ལུ་སི་ཡ","LI":"ལིཀ་ཏནས་ཏ་ཡིན","LK":"ཤྲཱི་ལང་ཀ","LR":"ལཱའི་བེ་རི་ཡ","LS":"ལཻ་སོ་ཐོ","LT":"ལི་ཐུ་ཝེ་ནི་ཡ","LU":"ལག་ཛམ་བོརྒ","LV":"ལཊ་བི་ཡ","LY":"ལི་བི་ཡ","MA":"མོ་རོ་ཀོ","MC":"མོ་ན་ཀོ","MD":"མོལ་དོ་བཱ","ME":"མོན་ཊི་ནེག་རོ","MF":"སེནཊ་ མཱར་ཊིན","MG":"མ་དཱ་གེས་ཀར","MH":"མར་ཤེལ་གླིང་ཚོམ","MK":"MK","ML":"མཱ་ལི","MM":"མི་ཡཱན་མར་ (བྷར་མ)","MN":"སོག་པོ་ཡུལ","MO":"མཀ་ཨའུ་ཅཱའི་ན","MP":"བྱང་ཕྱོགས་ཀྱི་མ་ར་ཡ་ན་གླིང་ཚོམ","MQ":"མཱར་ཊི་ནིཀ","MR":"མོ་རི་ཊེ་ནི་ཡ","MS":"མོན་ས་རཊ","MT":"མཱལ་ཊ","MU":"མོ་རི་ཤཱས","MV":"མཱལ་དིབས","MW":"མ་ལ་ཝི","MX":"མེཀ་སི་ཀོ","MY":"མ་ལེ་ཤི་ཡ","MZ":"མོ་ཛམ་བྷིཀ","NA":"ན་མི་བི་ཡ","NC":"ནིའུ་ཀ་ལི་དོ་ནི་ཡ","NE":"ནཱའི་ཇཱ","NF":"ནོར་ཕོལཀ་མཚོ་གླིང༌","NG":"ནཱའི་ཇི་རི་ཡ","NI":"ནི་ཀྲ་ཝ་ག","NL":"ནེ་དར་ལནཌས྄","NO":"ནོར་ཝེ","NP":"བལ་ཡུལ","NR":"ནའུ་རུ་","NU":"ནི་ཨུ་ཨཻ","NZ":"ནིའུ་ཛི་ལེནཌ","OM":"ཨོ་མཱན","PA":"པ་ན་མ","PE":"པེ་རུ","PF":"ཕྲཱནས྄་ཀྱི་པོ་ལི་ནི་ཤི་ཡ","PG":"པ་པུ་ ནིའུ་གི་ནི","PH":"ཕི་ལི་པིནས","PK":"པ་ཀི་སཏཱན","PL":"པོ་ལེནཌ","PM":"སིནཊ་པི་ཡེར་ ཨེནཌ་ མིཀོ་ལེན","PN":"པིཊ་ཀེ་ཡེརན་གླིང་ཚོམ","PR":"པུ་འེར་ཊོ་རི་ཁོ","PS":"པེ་ལིསི་ཊི་ནི་ཡན་ཊེ་རི་ཐོ་རི","PT":"པོར་ཅུ་གཱལ","PW":"པ་ལའུ","PY":"པ་ར་གུ་ཝའི","QA":"ཀ་ཊར","QO":"ཨོཤི་ཡཱན་ན་གྱི་མཐའ་མཚམས","RE":"རེ་ཡུ་ནི་ཡོན","RO":"རོ་མེ་ནི་ཡ","RS":"སཱར་བྷི་ཡ","RU":"ཨུ་རུ་སུ","RW":"རུ་ཝན་ཌ","SA":"སཱཝ་དི་ ཨ་རེ་བྷི་ཡ","SB":"སོ་ལོ་མོན་ གླིང་ཚོམ","SC":"སེ་ཤཱལས","SD":"སུ་ཌཱན","SE":"སུའི་ཌེན","SG":"སིང་ག་པོར","SH":"སེནཊ་ ཧེ་ལི་ན","SI":"སུ་ལོ་བི་ནི་ཡ","SJ":"སྭཱལ་བྷརྡ་ ཨེནཌ་ ཇཱན་མ་ཡེན","SK":"སུ་ལོ་བཱ་ཀི་ཡ","SL":"སི་ར་ ལི་འོན","SM":"སཱན་མ་རི་ནོ","SN":"སེ་ནི་གྷལ","SO":"སོ་མ་ལི་ཡ","SR":"སུ་རི་ནཱམ","SS":"སཱའུཐ་ སུ་ཌཱན","ST":"སཝ་ ཊོ་མེ་ ཨེནཌ་ པྲྀན་སི་པེ","SV":"ཨེལ་སལ་བ་ཌོར","SX":"སིནཊ་ མཱར་ཊེན","SY":"སི་རི་ཡ","SZ":"སུ་ཝ་ཛི་ལེནཌ","TA":"ཏྲིས་ཏན་ད་ཀུན་ཧ","TC":"ཏུརྐས྄་ ཨེནཌ་ ཀ་ཀོས་གླིང་ཚོམ","TD":"ཅཱཌ","TF":"ཕྲནཅ་གི་ལྷོ་ཕྱོགས་མངའ་ཁོངས","TG":"ཊོ་གྷོ","TH":"ཐཱའི་ལེནཌ","TJ":"ཏ་ཇིག་གི་སཏཱན","TK":"ཏོ་ཀེ་ལའུ་ མཚོ་གླིང","TL":"ཏི་་མོར་ལེ་ཨེསཊ","TM":"ཊཱརཀ་མེནའི་སཏཱན","TN":"ཊུ་ནི་ཤི་ཡ","TO":"ཊོང་གྷ","TR":"ཊཱར་ཀི","TT":"ཊི་ནི་ཌཱཌ་ ཨེནཌ་ ཊོ་བྷེ་གྷོ","TV":"ཏུ་ཝ་ལུ","TW":"ཊཱའི་ཝཱན","TZ":"ཊཱན་ཛཱ་ནི་ཡ","UA":"ཡུ་ཀརེན","UG":"ཡུ་གྷན་ཌ","UM":"ཡུ་ཨེས་གྱི་མཐའ་མཚམས་མཚོ་གླིང་","UN":"UN","US":"ཡུ་ཨེས་ཨེ","UY":"ཡུ་རུ་གུ་ཝའི","UZ":"ཨུས་བེག་གི་སཏཱན","VA":"བ་ཊི་ཀཱན་ སི་ཊི","VC":"སེནཊ་ཝིན་སེནཌ྄ ཨེནཌ་ གི་རེ་ན་དིནས྄","VE":"བེ་ནི་ཛུ་ཝེ་ལ","VG":"ཝརཇིན་གླིང་ཚོམ་ བྲཱི་ཊིཤ་མངའ་ཁོངས","VI":"ཝརཇིན་གླིང་ཚོམ་ ཡུ་ཨེས་ཨེ་མངའ་ཁོངས","VN":"བེཊ་ནཱམ","VU":"ཝ་ནུ་ཨ་ཏུ","WF":"ཝལ་ལིས྄་ ཨེནཌ་ ཕུ་ཏུ་ན་","WS":"ས་མོ་ཨ","XA":"XA","XB":"XB","XK":"XK","YE":"ཡེ་མེན","YT":"མེ་ཡོཊ","ZA":"སཱའུཐ་ ཨཕ་རི་ཀ","ZM":"ཛམ་བྷི་ཡ","ZW":"ཛིམ་བྷབ་ཝེ","ZZ":"ངོ་མ་ཤེས་པའི་ལུང་ཕྱོགས"},"short":{"GB":"ཡུ་ནཱའི་ཊེཌ་ ཀིང་ཌམ","HK":"ཧོང་ཀོང","MO":"མཀ་ཨའུ","PS":"པེ་ལིསི་ཊི་ནི་ཡན་ཊེ་རི་ཐོ་རི","US":"ཡུ་ཨེས་ཨེ"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"ཨེ་ར་བིཀ་ཡིག་གུ","Aran":"Aran","Armi":"Armi","Armn":"ཨར་མི་ནི་ཡཱན་ཡིག་གུ","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"བངྒ་ལ་ཡིག་གུ","Bhks":"Bhks","Bopo":"བོ་པོ་མོ་ཕཱོ་ཡིག་གུ","Brah":"Brah","Brai":"འབུར་ཡིག","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"སིརིལ་ལིཀ་ཡིག་གུ","Deva":"དེ་ཝ་ན་ག་རི་ཡིག་གུ","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"ཨི་ཐི་ཡོ་པིཀ྄་ཡིག་གུ","Geor":"ཇཽ་ཇི་ཡཱན་ཡིག་གུ","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"གྲིཀ་ཡིག་གུ","Gujr":"གུ་ཇ་ར་ཏི་ཡིག་གུ","Guru":"གུ་རུ་མུ་ཁ་ཡིག་གུ","Hanb":"Hanb","Hang":"ཧཱན་གུལ་ཡིག་གུ","Hani":"རྒྱ་ནག་ཡིག་གུ","Hano":"Hano","Hans":"རྒྱ་ཡིག་ ལུགས་གསར་","Hant":"ལུགས་རྙིང་ རྒྱ་ཡིག","Hatr":"Hatr","Hebr":"ཧེ་བྲུ་ཡིག་གུ","Hira":"ཇ་པཱན་གྱི་ཧི་ར་ག་ན་ཡིག་གུ","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"ཇ་པཱན་ཡིག་གུ","Kali":"Kali","Kana":"ཇ་པཱན་གྱི་ཀ་ཏ་ཀ་ན་ཡིག་གུ","Khar":"Khar","Khmr":"ཁེ་མེར་ཡིག་གུ","Khoj":"Khoj","Kits":"Kits","Knda":"ཀ་ན་ཌ་ཡིག་གུ","Kore":"ཀོ་རི་ཡཱན་ཡིག་གུ","Kthi":"Kthi","Lana":"Lana","Laoo":"ལའོ་ཡིག་གུ","Latn":"ལེ་ཊིན་ཡིག་གུ","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"མ་ལ་ཡ་ལམ་ཡིག་གུ","Modi":"Modi","Mong":"སོག་པོའི་ཡིག་གུ","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"བར་མིས་ཡིག་གུ","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"ཨོ་རི་ཡ་ཡིག་གུ","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"སིན་ཧ་ལ་རིག་གུ","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"ཏ་མིལ་ཡིག་གུ","Tang":"Tang","Tavt":"Tavt","Telu":"ཏེ་ལུ་གུ་ཡིག་གུ","Tfng":"Tfng","Tglg":"Tglg","Thaa":"ཐཱ་ན་ཡིག་གུ","Thai":"ཐཱའི་ཡིག་གུ","Tibt":"ང་བཅས་ཀྱི་ཡིག་གུ","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"མཚན་རྟགས","Zxxx":"ཡིག་ཐོག་མ་བཀོདཔ","Zyyy":"སྤྱིཡིག","Zzzz":"ངོ་མ་ཤེས་པའི་ཡི་གུ"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"ཡུ་ནཱའི་ཊེཌ་ ཨ་རབ་ ཨེ་མེ་རེཊས་ཀྱི་དངུལ་ ཌིར་ཧཱམ","AFA":"AFA","AFN":"ཨཕ་གཱན་གྱི་དངུལ་ ཨཕ་ག་ནི","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"AOA","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"ཨཱོས་ཊྲེ་ལི་ཡ་གི་དངུལ་ ཌོ་ལར","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"བྷང་ལ་དེཤ་གི་དངུལ་ ཏ་ཀ","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"BHD","BIF":"BIF","BMD":"བར་མུ་ཌ་གི་དངུལ་ ཌོ་ལར","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"བྲ་ཛིལ་གྱི་དངུལ་ རེ་ཡལ","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"དངུལ་ཀྲམ","BUK":"BUK","BWP":"BWP","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"ཀེ་ན་ཌ་གི་དངུལ་ ཌོ་ལར","CDF":"CDF","CHE":"CHE","CHF":"སུ་ཡིས་ཀྱི་དངུལ་ ཕྲངཀ","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"ཅི་ལི་གི་དངུལ་ པེ་སོ","CNH":"CNH","CNX":"CNX","CNY":"རྒྱ་ནག་གི་དངུལ་ ཡུ་ཝཱན","COP":"ཀོ་ལོམ་བྷི་ཡ་གི་དངུལ་ པེ་སོ","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"ཀིའུ་བྷ་གི་དངུལ་ པེ་སོ","CVE":"CVE","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"DJF","DKK":"ཌེན་མཱཀ་གི་དངུལ་ ཀྲོན","DOP":"DOP","DZD":"ཨཱལ་ཇི་རི་ཡ་གི་དངུལ་ ཌའི་ནར","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"ཨི་ཇིབཊ་གི་དངུལ་ པ་འུནཌ","ERN":"ERN","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ETB","EUR":"ཡུ་རོ༌དངུལ་","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"བྲི་ཊིཤ་ པ་འུནཌ་ ཨིས་ཊར་ལིང","GEK":"GEK","GEL":"GEL","GHC":"GHC","GHS":"GHS","GIP":"GIP","GMD":"GMD","GNF":"GNF","GNS":"GNS","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"ཧོང་ཀོང་གི་དངུལ་ ཌོ་ལར","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"ཨིན་ཌོ་ནེ་ཤི་ཡ་གི་དངུལ་ རུ་པི་ཡ","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ཨིས་རེལ་གྱི་དངུལ་གསརཔ་ ཤེ་ཀེལ","INR":"རྒྱ་གར་གྱི་དངུལ་ རུ་པི","IQD":"ཨི་རཱཀ་གི་དངུལ་ ཌི་ན","IRR":"ཨི་རཱན་གྱི་དངུལ་ རི་ཨཱལ","ISJ":"ISJ","ISK":"ཨཱཡིས་ལེནཌ་གི་དངུལ་ ཀྲོ་ན","ITL":"ITL","JMD":"ཇཱ་མཻ་ཀ་གི་དངུལ་ ཌོ་ལར","JOD":"ཇོར་ཌན་གྱི་དངུལ་ ཌི་ན","JPY":"ཇཱ་པཱན་གྱི་དངུལ་ ཡེན","KES":"ཀེན་ཡ་གི་དངུལ་ ཤི་ལིང","KGS":"KGS","KHR":"ཀེམ་བྷོ་ཌི་ཡ་གི་དངུལ་ རི་ཨཱལ","KMF":"KMF","KPW":"ནོརཐ་ ཀོ་རི་ཡ་གི་དངུལ་ ཝོན","KRH":"KRH","KRO":"KRO","KRW":"སཱའུཐ་ ཀོ་རི་ཡ་གི་དངུལ་ ཝོན","KWD":"ཀུ་ཝེཊ་གི་དངུལ་ ཌི་ན","KYD":"KYD","KZT":"ཀ་ཛགས་ཏཱན་གྱི་དངུལ་ ཏེང་གེ","LAK":"ལཱ་ཝོས་ཀྱི་དངུལ་ ཀིཔ","LBP":"ལེ་བ་ནོན་གྱི་དངུལ་ པ་འུནཌ","LKR":"ཤྲི་ ལང་ཀ་གི་དངུལ་ རུ་པི","LRD":"ལཱའི་བེ་རི་ཡ་གི་དངུལ་ ཌོ་ལར","LSL":"LSL","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"ལི་བི་ཡ་གི་དངུལ་ ཌི་ན","MAD":"མོ་རོ་ཀོ་གི་དངུལ་ ཌིར་ཧཱམ","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"MGA","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"མི་ཡཱན་མར་གྱི་དངུལ་ ཅཱཏ","MNT":"སོག་པོའི་དངུལ་ ཏུ་གྲིཀ","MOP":"MOP","MRO":"MRO","MRU":"MRU","MTL":"MTL","MTP":"MTP","MUR":"MUR","MVP":"MVP","MVR":"མཱལ་དིབས་ཀྱི་དངུལ་ རུ་ཕི་ཡ","MWK":"MWK","MXN":"མེཀ་སི་ཀོ་གི་དངུལ་ པེ་སོ","MXP":"MXP","MXV":"MXV","MYR":"མ་ལེ་ཤི་ཡ་གི་དངུལ་ རིང་གིཊ","MZE":"MZE","MZM":"MZM","MZN":"MZN","NAD":"NAD","NGN":"NGN","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"ནོར་ཝེ་གི་དངུལ་ ཀྲོ་ན","NPR":"བལ་པོའི་དངུལ་ རུ་པི","NZD":"ནིའུ་ཛི་ལེནཌ་གི་དངུལ་ ཌོ་ལར","OMR":"ཨོ་མཱན་གྱི་དངུལ་ རི་ཨཱལ","PAB":"པ་ན་མ་གི་དངུལ་ བཱལ་བོ་ཝ","PEI":"PEI","PEN":"པ་རུ་གི་དངུལ་ ནུ་བོ་ སཱོལ","PES":"PES","PGK":"PGK","PHP":"ཕི་ལི་པིནས་གྱི་དངུལ་ པེ་སོ","PKR":"པ་ཀིས་ཏཱན་གྱི་དངུལ་ རུ་པི","PLN":"པོ་ལེནཌ་ཀྱི་དངུལ ཛ྄ལོ་ཊི","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"ཀ་ཊར་གྱི་དངུལ་ རི་ཨཱལ","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"ཨུ་རུ་སུ་གི་དངུལ་ རུ་བཱལ","RUR":"RUR","RWF":"RWF","SAR":"སཱཝ་དིའི་དངུལ་ རི་ཡཱལ","SBD":"SBD","SCR":"སེ་ཤཱལས་ཀྱི་དངུལ་ རུ་པི","SDD":"SDD","SDG":"SDG","SDP":"SDP","SEK":"སུའི་ཌེན་གྱི་དངུལ་ ཀྲོ་ན","SGD":"སིང་ག་པོར་གྱི་དངུལ་ ཌོ་ལར","SHP":"SHP","SIT":"SIT","SKK":"SKK","SLL":"SLL","SOS":"SOS","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"STD","STN":"STN","SUR":"SUR","SVC":"SVC","SYP":"སི་རི་ཡ་གི་དངུལ་ པ་འུནཌ","SZL":"SZL","THB":"ཐཱའི་ལེནཌ་གི་དངུལ་ བཱཏ","TJR":"TJR","TJS":"ཏ་ཇི་ཀིས་ཏཱན་གྱི་དངུལ་ སོ་མོ་ནི","TMM":"TMM","TMT":"TMT","TND":"TND","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"ཊཱར་ཀི་གི་དངུལ་ ལི་ར","TTD":"TTD","TWD":"ཊཱའི་ཝཱན་གི་དངུལ ཌོ་ལར","TZS":"ཊཱན་ཛཱ་ནི་ཡ་གི་དངུལ་ ཤི་ལིང","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"ཡུ་གྷེན་ཌ་གི་དངུལ་ ཤི་ལིང","USD":"ཡུ་ཨེས་ ཌོ་ལར","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"ཡུ་རུ་གུ་ཝའི་གི་དངུལ་ པེ་སོ","UYW":"UYW","UZS":"ཨུས་བེ་ཀིས་ཏཱན་གྱི་དངུལ་ སོམ","VEB":"VEB","VEF":"བེ་ནི་ཛུ་ཝེ་ལ་གི་དངུལ་ བོ་ལི་བར (2008–2018)","VES":"བེ་ནི་ཛུ་ཝེ་ལ་གི་དངུལ་ བོ་ལི་བར","VND":"བེཊ་ནཱམ་གྱི་དངུལ་ ཌོང","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"XOF","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"མ་ཤེས་པའི་དངུལ","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"སཱའུཐ་ ཨཕ་རི་ཀ་གི་དངུལ་ རཱནད","ZMK":"ZMK","ZMW":"ZMW","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ZWD","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0}། ({1}།)"}},"locale":"dz"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
