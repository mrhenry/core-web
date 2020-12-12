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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("vai-Vaii").length
)) {
// Intl.DisplayNames.~locale.vai-Vaii
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"af":"af","agq":"agq","ak":"ꕉꕪꘋ","am":"ꕉꕆꕌꔸ","ar":"ꕞꕌꖝ","ar-001":"ꕞꕌꖝ (001)","as":"as","asa":"asa","ast":"ast","az":"az","bas":"bas","be":"ꔆꕞꖩꔻ","bem":"bem","bez":"bez","bg":"ꗂꔠꗸꘋ","bm":"bm","bn":"ꗩꕭꔷ","bo":"bo","br":"br","brx":"brx","bs":"bs","ca":"ca","ccp":"ccp","ce":"ce","ceb":"ceb","cgg":"cgg","chr":"chr","ckb":"ckb","co":"co","cs":"ꗿꗡ","cu":"cu","cy":"cy","da":"da","dav":"dav","de":"ꕧꕮꔧ","de-AT":"ꕧꕮꔧ (ꖺꔻꖤꕎ)","de-CH":"ꕧꕮꔧ (ꖬꔃꕤ ꖨꕮꕊ)","dje":"dje","dsb":"dsb","dua":"dua","dyo":"dyo","dz":"dz","ebu":"ebu","ee":"ee","el":"ꗥꗷꘋ","en":"ꕶꕱ","en-AU":"ꕶꕱ (ꖺꖬꖤꔃꔷꕩ)","en-CA":"ꕶꕱ (ꕪꕯꕜ)","en-GB":"ꕶꕱ (ꖕꕯꔤꗳ)","en-US":"ꕶꕱ (ꕶꕱ)","eo":"eo","es":"ꕐꘊꔧ","es-419":"ꕐꘊꔧ (419)","es-ES":"ꕐꘊꔧ (ꕐꘊꔧ)","es-MX":"ꕐꘊꔧ (ꘈꔻꖏ)","et":"et","eu":"eu","ewo":"ewo","fa":"ꗨꗡꔻꘂꘋ","fa-AF":"ꗨꗡꔻꘂꘋ (ꕉꔱꕭꔕꔻꕚꘋ)","ff":"ff","fi":"fi","fil":"fil","fo":"fo","fr":"ꗱꘋꔻ","fr-CA":"ꗱꘋꔻ (ꕪꕯꕜ)","fr-CH":"ꗱꘋꔻ (ꖬꔃꕤ ꖨꕮꕊ)","frc":"frc","fur":"fur","fy":"fy","ga":"ga","gd":"gd","gl":"gl","gsw":"gsw","gu":"gu","guz":"guz","gv":"gv","ha":"ꕌꖙꕢ","haw":"haw","he":"he","hi":"ꔦꔺ","hmn":"hmn","hr":"hr","hsb":"hsb","ht":"ht","hu":"ꖽꔟꗸꘋ","hy":"hy","ia":"ia","id":"ꔤꖆꕇꔻꘂꘋ","ig":"ꔤꕼ","ii":"ii","is":"is","it":"ꔤꕚꔷꘂꘋ","ja":"ꕧꕐꕇꔧ","jgo":"jgo","jmc":"jmc","jv":"ꕧꕙꕇꔧ","ka":"ka","kab":"kab","kam":"kam","kde":"kde","kea":"kea","khq":"khq","ki":"ki","kk":"kk","kkj":"kkj","kl":"kl","kln":"kln","km":"ꕃꘈꗢ","kn":"kn","ko":"ꖏꔸꘂꘋ","kok":"kok","ks":"ks","ksb":"ksb","ksf":"ksf","ksh":"ksh","ku":"ku","kw":"kw","ky":"ky","la":"la","lag":"lag","lb":"lb","lg":"lg","lkt":"lkt","ln":"ln","lo":"lo","lou":"lou","lrc":"lrc","lt":"lt","lu":"lu","luo":"luo","luy":"luy","lv":"lv","mai":"mai","mas":"mas","mer":"mer","mfe":"mfe","mg":"mg","mgh":"mgh","mgo":"mgo","mi":"mi","mk":"mk","ml":"ml","mn":"mn","mni":"mni","mr":"mr","ms":"ꕮꔒꔀ","mt":"mt","mua":"mua","mul":"mul","my":"ꗩꕆꔻ","mzn":"mzn","naq":"naq","nb":"nb","nd":"nd","nds":"nds","nds-NL":"nds (ꘉꕜ ꖨꕮꕊ)","ne":"ꕇꕐꔷ","nl":"ꗍꔿ","nl-BE":"ꗍꔿ (ꗩꕀꗚꘋ)","nmg":"nmg","nn":"nn","nnh":"nnh","nus":"nus","ny":"ny","nyn":"nyn","om":"om","or":"or","os":"os","pa":"ꖛꕨꔬ","pcm":"pcm","pl":"ꗁꔒꔻ","prg":"prg","ps":"ps","pt":"ꕶꕿꕃꔤ","pt-BR":"ꕶꕿꕃꔤ (ꖜꕟꔘꔀ)","pt-PT":"ꕶꕿꕃꔤ (ꕶꕿꕃꔤ ꕸꖃꔀ)","qu":"qu","rm":"rm","rn":"rn","ro":"ꖄꕆꕇꘂꘋ","ro-MD":"ꖄꕆꕇꘂꘋ (ꖒꔷꖁꕙ)","rof":"rof","root":"root","ru":"ꗐꖺꔻꘂꘋ","rw":"ꕟꖙꕡ","rwk":"rwk","sa":"sa","sah":"sah","saq":"saq","sat":"sat","sbp":"sbp","sd":"sd","se":"se","seh":"seh","ses":"ses","sg":"sg","shi":"shi","si":"si","sk":"sk","sl":"sl","sm":"sm","smn":"smn","sn":"sn","so":"ꖇꕮꔷ","sq":"sq","sr":"sr","st":"st","su":"su","sv":"ꖬꔨꗵꘋ","sw":"sw","sw-CD":"sw (ꖏꖐ ꗵꗞꖴꕟꔎ ꕸꖃꔀ)","ta":"ꕚꕆꔷ","te":"te","teo":"teo","tg":"tg","th":"ꕚꔤ","ti":"ti","tk":"tk","to":"to","tr":"ꗋꕃ","tt":"tt","twq":"twq","tzm":"tzm","ug":"ug","uk":"ꖳꖴꔓꕇꘂꘋ","und":"und","ur":"ꖺꖦ","uz":"uz","vai":"ꕙꔤ","vi":"ꔲꕩꕯꕆꔧ","vo":"vo","vun":"vun","wae":"wae","wo":"wo","xh":"xh","xog":"xog","yav":"yav","yi":"yi","yo":"ꖎꖄꕑ","yue":"yue","zgh":"zgh","zh":"ꕦꕇꔧ","zh-Hans":"ꕦꕇꔧ (Hans)","zh-Hant":"ꕦꕇꔧ (Hant)","zu":"ꖮꖨ","zxx":"zxx"},"short":{"az":"az","en-GB":"ꕶꕱ (ꖕꕯꔤꗳ)","en-US":"ꕶꕱ (ꕶꕱ)"},"narrow":{}},"region":{"long":{"142":"142","143":"143","145":"145","150":"150","151":"151","154":"154","155":"155","202":"202","419":"419","001":"001","002":"002","003":"003","005":"005","009":"009","011":"011","013":"013","014":"014","015":"015","017":"017","018":"018","019":"019","021":"021","029":"029","030":"030","034":"034","035":"035","039":"039","053":"053","054":"054","057":"057","061":"061","AC":"ꗻꗡ ꕒꕡꕌ ꗏ ꔳꘋꗣ","AD":"ꕉꖆꕟ","AE":"ꖳꕯꔤꗳ ꕉꕟꔬ ꗡꕆꔓꔻ","AF":"ꕉꔱꕭꔕꔻꕚꘋ","AG":"ꕉꘋꔳꖶꕎ ꗪ ꕑꖜꕜ","AI":"ꕉꕄꕞ","AL":"ꕉꔷꕑꕇꕩ","AM":"ꕉꕆꕯ","AO":"ꕉꖐꕞ","AQ":"ꕉꘋꕚꔳꕪ","AR":"ꕉꘀꘋꔳꕯ","AS":"ꕶꕱ ꕢꕹꕎ","AT":"ꖺꔻꖤꕎ","AU":"ꖺꖬꖤꔃꔷꕩ","AW":"ꕉꖩꕑ","AX":"ꕉꕞꔺ","AZ":"ꕉꕤꕑꔤꕧꘋ","BA":"ꕷꔻꕇꕰ ꗪ ꗥꕤꖑꔲꕯ","BB":"ꕑꔆꖁꔻ","BD":"ꕑꕅꕞꗵꔼ","BE":"ꗩꕀꗚꘋ","BF":"ꕷꕃꕯ ꕘꖇ","BG":"ꗂꔠꔸꕩ","BH":"ꕑꗸꘋ","BI":"ꖜꖩꔺ","BJ":"ꗩꕇꘋ","BL":"ꕪꘋꕓ ꗞꗢ ꕒꕚꕞꕆ","BM":"ꗩꖷꕜ","BN":"ꖜꖩꘉꔧ","BO":"ꕷꔷꔲꕩ","BQ":"ꕪꔓꔬꘂꘋ ꖨꕮ ꗨꗳꗣ","BR":"ꖜꕟꔘꔀ","BS":"ꕑꕌꕮꔻ","BT":"ꖜꕚꘋ","BV":"ꖜꔍꔳ ꔳꘋꗣ","BW":"ꕷꖬꕎꕯ","BY":"ꗩꕞꖩꔻ","BZ":"ꔆꔷꔘ","CA":"ꕪꕯꕜ","CC":"ꖏꖏꔻ (ꔞꔀꔷꘋ) ꔳꘋꗣ","CD":"ꖏꖐ ꗵꗞꖴꕟꔎ ꕸꖃꔀ","CF":"ꕉꔱꔸꕪ ꗳ ꗳ ꕸꖃꔀ","CG":"ꖏꖐ","CH":"ꖬꔃꕤ ꖨꕮꕊ","CI":"ꖏꔳ ꕾꕎ","CK":"ꖏꕃ ꔳꘋꗣ","CL":"ꔚꔷ","CM":"ꕪꔈꖩꘋ","CN":"ꕦꔤꕯ","CO":"ꗛꗏꔭꕩ","CP":"ꕃꔒꕐꗋꘋ ꔳꘋꗣ","CR":"ꖏꔻꕚ ꔸꕪ","CU":"ꕃꖳꕑ","CV":"ꔞꔪ ꗲꔵ ꔳꘋꗣ","CW":"ꖴꕟꖇꕱ","CX":"ꔞꔻꕮꔻ ꔳꘋꗣ","CY":"ꕢꗡꖛꗐꔻ","CZ":"ꗿꕃ ꕸꖃꔀ","DE":"ꕧꕮꔧ","DG":"ꔵꔀꖑ ꔳꘋꗣ","DJ":"ꕀꖜꔳ","DK":"ꕜꕇꕮꕃ","DM":"ꖁꕆꕇꕪ","DO":"ꖁꕆꕇꕪꘋ ꕸꕱꔀ","DZ":"ꕉꔷꔠꔸꕩ","EA":"ꗻꕚ ꗪ ꔡꔷꕞ","EC":"ꗡꖴꔃꗍ","EE":"ꗡꔻꕿꕇꕰ","EG":"ꕆꔖꕞ","EH":"ꕢꕌꕟ ꔎꔒ ꕀꔤ","ER":"ꔀꔸꔳꕟ","ES":"ꕐꘊꔧ","ET":"ꔤꔳꖎꔪꕩ","EU":"EU","EZ":"EZ","FI":"ꔱꘋ ꖨꕮꕊ","FJ":"ꔱꔤꕀ","FK":"ꕘꔷꕃ ꖨꕮ ꔳꘋꗣ","FM":"ꕆꖏꕇꔻꕩ","FO":"ꕘꖄ ꔳꘋꗣ","FR":"ꖢꕟꘋꔻ","GA":"ꕭꕷꘋ","GB":"ꖕꕯꔤꗳ","GD":"ꖶꕟꕯꕜ","GE":"ꗘꖺꕀꕩ","GF":"ꗱꘋꔻ ꖶꕎꕯ","GG":"ꖶꗦꘋꔻ","GH":"ꕭꕌꕯ","GI":"ꕀꖜꕟꕚ","GL":"ꕧꕓ ꖴꕎ ꖨꕮꕊ","GM":"ꕭꔭꕩ","GN":"ꕅꔤꕇ","GP":"ꖶꕎꔐꖨꔅ","GQ":"ꖦꕰꕊ ꗳ ꕅꔤꕇ","GR":"ꗥꗷꘋ","GS":"ꗘꖺꕀꕩ ꗛꔤ ꔒꘋꗣ ꗏ ꗪ ꗇꖢ ꔳꘋꗣ ꗛꔤ ꔒꘋꗣ ꗏ","GT":"ꖶꕎꔎꕮꕞ","GU":"ꖶꕎꕆ","GW":"ꕅꔤꕇ ꔫꕢꕴ","GY":"ꖶꕩꕯ","HK":"HK","HM":"ꗥꗡꔵ ꗪ ꕮꖁꕯ","HN":"ꖽꖫꕟ","HR":"ꖏꔓꔻꕩ","HT":"ꕌꔤꔳ","HU":"ꖽꘋꕭꔓ","IC":"ꗛꖺꔻꕩ ꔳꘋꗣ","ID":"ꔤꖆꕇꔻꕩ","IE":"ꕉꔓ ꖨꕮꕊ","IL":"ꕑꕇꔻꕞꔤꕞ","IM":"ꕮꘋ ꔳꘋꗣ","IN":"ꔤꔺꕩ","IO":"ꔛꔟꔻ ꔤꔺꕩ ꗛꔤꘂ ꕗꕴꔀ ꕮ","IQ":"ꔤꕟꕃ","IR":"ꔤꕟꘋ","IS":"ꕉꔤꔻ ꖨꕮꕊ","IT":"ꔤꕚꔷ","JE":"ꘀꗡꔘ","JM":"ꕧꕮꔧꕪ","JO":"ꗘꖺꗵꘋ","JP":"ꔛꗨꗢ","KE":"ꔞꕰ","KG":"ꕃꕅꔻꕚꘋ","KH":"ꕪꕹꔵꕩ","KI":"ꕃꔸꕑꔳ","KM":"ꖏꕹꖄꔻ","KN":"ꔻꘋ ꕃꔳꔻ ꗪ ꔕꔲꔻ","KP":"ꖏꔸꕩ ꗛꔤ ꕪꘋꗒ","KR":"ꖏꔸꕩ ꗛꔤ ꔒꘋꗣ ꗏ","KW":"ꖴꔃꔳ","KY":"ꔞꔀꕮꘋ ꔳꘋꗣ","KZ":"ꕪꕤꔻꕚꘋ","LA":"ꕞꕴꔻ","LB":"ꔒꕑꗟꘋ","LC":"ꔻꘋ ꖨꔻꕩ","LI":"ꔷꗿꘋꔻꗳꘋ","LK":"ꖬꔸ ꕞꘋꕪ","LR":"ꕞꔤꔫꕩ","LS":"ꔷꖇꕿ","LT":"ꔷꖤꔃꕇꕰ","LU":"ꗏꔻꘋꗂꖺ","LV":"ꕞꔳꔲꕩ","LY":"ꔒꔫꕩ","MA":"ꗞꕟꖏ","MC":"ꗞꕯꖏ","MD":"ꖒꔷꖁꕙ","ME":"ꗞꔳꕇꖶꖄ","MF":"ꕪꘋꕓ ꗞꗢ ꕮꕊꔳꘋ","MG":"ꕮꕜꕭꔻꕪ","MH":"ꕮꕊꕣ ꔳꘋꗣ","MK":"MK","ML":"ꕮꔷ","MM":"ꕆꕩꘋꕮ","MN":"ꗞꖐꔷꕩ","MO":"MO","MP":"ꗛꔤ ꕪꘋꗒ ꕮꔸꕩꕯ ꔳꘋꗣ","MQ":"ꕮꔳꕇꕃ","MR":"ꗞꔓꔎꕇꕰ","MS":"ꗞꘋꔖꕟꔳ","MT":"ꕮꕊꕚ","MU":"ꗞꔓꗔ","MV":"ꕮꔷꕜꔍ","MW":"ꕮꕞꕌꔨ","MX":"ꘈꔻꖏ","MY":"ꕮꔒꔻꕩ","MZ":"ꕹꕤꔭꕃ","NA":"ꕯꕆꔫꕩ","NC":"ꕪꔷꖁꕇꕰ ꕯꕮꕊ","NE":"ꕯꔤꕧ","NF":"ꗟꖺꗉ ꔳꘋꗣ","NG":"ꕯꔤꕀꔸꕩ","NI":"ꕇꕪꕟꖶꕎ","NL":"ꘉꕜ ꖨꕮꕊ","NO":"ꗟꖺꔃ","NP":"ꕇꕐꔷ","NR":"ꖆꖩ","NU":"ꖸꔃꔤ","NZ":"ꔽꔤ ꖨꕮ ꕯꕮꕊ","OM":"ꕱꕮꘋ","PA":"ꕐꕯꕮ","PE":"ꗨꗡꖩ","PF":"ꗱꘋꔻ ꕶꔷꕇꔻꕩ","PG":"ꕐꖛꕎ ꕅꔤꕇ ꕯꕮꕊ","PH":"ꔱꔒꔪꘋ","PK":"ꕐꕃꔻꕚꘋ","PL":"ꕶꗷꘋ","PM":"ꔻꘋ ꔪꘂ ꗪ ꕆꔞꗏꘋ","PN":"ꔪꔳꕪꕆ","PR":"ꔪꖳꕿ ꔸꖏ","PS":"ꕐꔒꔻꔳꕯ ꔎꔒ ꕀꔤ ꗛꔤ ꕞ ꗱ ꗪ ꕭꕌꕤ","PT":"ꕶꕿꕃꔤ ꕸꖃꔀ","PW":"ꕐꖃ","PY":"ꕐꕟꗝꔀ","QA":"ꕪꕚꕌ","QO":"QO","RE":"ꔓꗠꖻ","RO":"ꖄꕆꕇꕰ","RS":"ꗻꗡꔬꕩ","RU":"ꗐꖺꔻꕩ","RW":"ꕟꖙꕡ","SA":"ꕞꕌꖝ ꕸꖃꔀ","SB":"ꖬꕞꔤꕮꕊꕯ ꔳꘋꗣ","SC":"ꔖꗼꔷ","SD":"ꖬꗵꘋ","SE":"ꖬꔨꗵꘋ","SG":"ꔻꕬꕶꕱ","SH":"ꔻꘋ ꗥꔷꕯ","SI":"ꔻꖃꔍꕇꕰ","SJ":"ꔻꕙꕒꔵ ꗪ ꕧꘋ ꕮꘂꘋ","SK":"ꔻꖃꕙꕃꕩ","SL":"ꔋꕩ ꕒꕌꖺ ꕸꖃꔀ","SM":"ꕮꔸꖆ ꕢꘋ","SN":"ꔻꕇꕭꕌ","SO":"ꖇꕮꔷꕩ","SR":"ꖬꔸꕯꔈ","SS":"ꖬꕜꘋ ꗛꔤ ꔒꘋꗣ ꗏ","ST":"ꕢꕴ ꕿꔈ ꗪ ꕉ ꕮꔧ ꕗꕴꔀ","SV":"ꗡꗷ ꕢꔍꗍꖺ","SX":"ꔻꘋꔳ ꕮꕊꗳꘋ","SY":"ꔻꕩꘋ","SZ":"ꖬꕎꔽ ꖨꕮꕊ","TA":"ꔳꔻꕚꘋ ꕜ ꖴꕯ","TC":"ꗋꖺꕃꔻ ꗪ ꕪꔤꖏꔻ ꔳꘋꗣ","TD":"ꕦꔵ","TF":"ꔱꗷꘋꔻ ꗛꔤ ꔒꘋꗣ ꗏ ꕸꖃꔀ ꖸ","TG":"ꕿꖑ","TH":"ꕚꔤ ꖨꕮꕊ","TJ":"ꕚꕀꕃꔻꕚꘋ","TK":"ꕿꔞꖃ","TL":"ꔎꔒ ꗃ ꔳꗞꖻ","TM":"ꗋꖺꕃꕮꕇꔻꕚꘋ","TN":"ꖤꕇꔻꕩ","TO":"ꗋꕬ","TR":"ꗋꖺꕃ","TT":"ꖤꔸꔕꕜ ꗪ ꕿꔆꖑ","TV":"ꕚꖣꖨ","TW":"ꕚꔤꕎꘋ","TZ":"ꕚꘋꕤꕇꕰ","UA":"ꖳꖴꔓꘋ","UG":"ꖳꕭꕡ","UM":"ꕶꕱ ꕪꘋ ꗅꘋ ꔳꘋꗣ ꖸ","UN":"UN","US":"ꕶꕱ","UY":"ꖳꔓꗝꔀ","UZ":"ꖳꗩꕃꔻꕚꘋ","VA":"ꕙꔳꕪꘋ ꕢꕨꕌ","VC":"ꔻꘋ ꔲꘋꔻꘋ ꗪ ꖶꔓꕯꔵꘋ ꖸ","VE":"ꕙꔳꕪꘋ ꕸꖃꔀ","VG":"ꔛꔟꔻ ꗩꗡ ꗏ ꖷꖬ ꔳꘋꗣ","VI":"ꕶꕱ ꗩꗡ ꗏ ꖷꖬ ꔳꘋꗣ","VN":"ꗲꕇꖮꔃꕞ","VU":"ꕙꖸꕎꖤ","WF":"ꕎꔷꔻ ꗪ ꖢꖤꕯ","WS":"ꕢꕹꖙꕉ","XA":"XA","XB":"XB","XK":"ꖏꖇꕾ","YE":"ꔝꘈꘋ","YT":"ꕮꗚꔎ","ZA":"ꕉꔱꔸꕪ ꗛꔤ ꔒꘋꗣ ꗏ ꕸꖃꔀ","ZM":"ꕤꔭꕩ","ZW":"ꔽꕓꖜꔃ","ZZ":"ZZ"},"short":{"GB":"ꖕꕯꔤꗳ","HK":"HK","MO":"ꕮꗛꖺ","PS":"ꕐꔒꔻꔳꕯ ꔎꔒ ꕀꔤ ꗛꔤ ꕞ ꗱ ꗪ ꕭꕌꕤ","US":"ꕶꕱ"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"Arab","Aran":"Aran","Armi":"Armi","Armn":"Armn","Avst":"Avst","Bali":"Bali","Bamu":"Bamu","Bass":"Bass","Batk":"Batk","Beng":"Beng","Bhks":"Bhks","Bopo":"Bopo","Brah":"Brah","Brai":"Brai","Bugi":"Bugi","Buhd":"Buhd","Cakm":"Cakm","Cans":"Cans","Cari":"Cari","Cham":"Cham","Cher":"Cher","Chrs":"Chrs","Copt":"Copt","Cprt":"Cprt","Cyrl":"Cyrl","Deva":"Deva","Diak":"Diak","Dogr":"Dogr","Dsrt":"Dsrt","Dupl":"Dupl","Egyp":"Egyp","Elba":"Elba","Elym":"Elym","Ethi":"Ethi","Geor":"Geor","Glag":"Glag","Gong":"Gong","Gonm":"Gonm","Goth":"Goth","Gran":"Gran","Grek":"Grek","Gujr":"Gujr","Guru":"Guru","Hanb":"Hanb","Hang":"Hang","Hani":"Hani","Hano":"Hano","Hans":"Hans","Hant":"Hant","Hatr":"Hatr","Hebr":"Hebr","Hira":"Hira","Hluw":"Hluw","Hmng":"Hmng","Hmnp":"Hmnp","Hrkt":"Hrkt","Hung":"Hung","Ital":"Ital","Jamo":"Jamo","Java":"Java","Jpan":"Jpan","Kali":"Kali","Kana":"Kana","Khar":"Khar","Khmr":"Khmr","Khoj":"Khoj","Kits":"Kits","Knda":"Knda","Kore":"Kore","Kthi":"Kthi","Lana":"Lana","Laoo":"Laoo","Latn":"Latn","Lepc":"Lepc","Limb":"Limb","Lina":"Lina","Linb":"Linb","Lisu":"Lisu","Lyci":"Lyci","Lydi":"Lydi","Mahj":"Mahj","Maka":"Maka","Mand":"Mand","Mani":"Mani","Marc":"Marc","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"Mero","Mlym":"Mlym","Modi":"Modi","Mong":"Mong","Mroo":"Mroo","Mtei":"Mtei","Mult":"Mult","Mymr":"Mymr","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"Nkoo","Nshu":"Nshu","Ogam":"Ogam","Olck":"Olck","Orkh":"Orkh","Orya":"Orya","Osge":"Osge","Osma":"Osma","Palm":"Palm","Pauc":"Pauc","Perm":"Perm","Phag":"Phag","Phli":"Phli","Phlp":"Phlp","Phnx":"Phnx","Plrd":"Plrd","Prti":"Prti","Qaag":"Qaag","Rjng":"Rjng","Rohg":"Rohg","Runr":"Runr","Samr":"Samr","Sarb":"Sarb","Saur":"Saur","Sgnw":"Sgnw","Shaw":"Shaw","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"Sinh","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"Sund","Sylo":"Sylo","Syrc":"Syrc","Tagb":"Tagb","Takr":"Takr","Tale":"Tale","Talu":"Talu","Taml":"Taml","Tang":"Tang","Tavt":"Tavt","Telu":"Telu","Tfng":"Tfng","Tglg":"Tglg","Thaa":"Thaa","Thai":"Thai","Tibt":"Tibt","Tirh":"Tirh","Ugar":"Ugar","Vaii":"Vaii","Wara":"Wara","Wcho":"Wcho","Xpeo":"Xpeo","Xsux":"Xsux","Yezi":"Yezi","Yiii":"Yiii","Zanb":"Zanb","Zinh":"Zinh","Zmth":"Zmth","Zsye":"Zsye","Zsym":"Zsym","Zxxx":"Zxxx","Zyyy":"Zyyy","Zzzz":"Zzzz"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"ADP","AED":"ꖳꕯꔤꗳ ꕉꕟꔬ ꗡꕆꔓꔻ ꔵꕌꕆ","AFA":"AFA","AFN":"AFN","ALK":"ALK","ALL":"ALL","AMD":"AMD","ANG":"ANG","AOA":"ꕉꖐꕞ ꖴꕎꘋꕤ","AOK":"AOK","AON":"AON","AOR":"AOR","ARA":"ARA","ARL":"ARL","ARM":"ARM","ARP":"ARP","ARS":"ARS","ATS":"ATS","AUD":"ꖺꔻꖤꔃꔷꕩ ꕜꕞꕌ","AWG":"AWG","AZM":"AZM","AZN":"AZN","BAD":"BAD","BAM":"BAM","BAN":"BAN","BBD":"BBD","BDT":"BDT","BEC":"BEC","BEF":"BEF","BEL":"BEL","BGL":"BGL","BGM":"BGM","BGN":"BGN","BGO":"BGO","BHD":"ꕑꗸꘋ","BIF":"ꖜꖩꔺ ꖢꕟꘋꕃ","BMD":"BMD","BND":"BND","BOB":"BOB","BOL":"BOL","BOP":"BOP","BOV":"BOV","BRB":"BRB","BRC":"BRC","BRE":"BRE","BRL":"BRL","BRN":"BRN","BRR":"BRR","BRZ":"BRZ","BSD":"BSD","BTN":"BTN","BUK":"BUK","BWP":"ꕷꖬꕎꕯ ꖛꕞ","BYB":"BYB","BYN":"BYN","BYR":"BYR","BZD":"BZD","CAD":"ꕪꕯꕜ ꕜꕞꕌ","CDF":"ꖏꖐꕱ ꖢꕟꘋꕃ","CHE":"CHE","CHF":"ꖬꔃꕤ ꖨꕮꕊ ꖢꕟꘋꕃ","CHW":"CHW","CLE":"CLE","CLF":"CLF","CLP":"CLP","CNH":"CNH","CNX":"CNX","CNY":"ꕦꕇꔧ ꖳꕎꘋ ꔓꕆꘋꔬ","COP":"COP","COU":"COU","CRC":"CRC","CSD":"CSD","CSK":"CSK","CUC":"CUC","CUP":"CUP","CVE":"ꗡꔻꖴꖁ ꕪꕷꗲꗡꔵꕩꖆ","CYP":"CYP","CZK":"CZK","DDM":"DDM","DEM":"DEM","DJF":"ꕀꖜꔳ ꖢꕟꘋꕃ","DKK":"DKK","DOP":"DOP","DZD":"ꕉꔷꕀꔸꕩ ꔵꕯ","ECS":"ECS","ECV":"ECV","EEK":"EEK","EGP":"ꕆꔻꕞ ꗁꖻꘋ","ERN":"ꔀꔸꔳꕟ ꗁꖻꘋ","ESA":"ESA","ESB":"ESB","ESP":"ESP","ETB":"ꔤꕿꖎꔪꕩ ꔫꔤ","EUR":"ꖳꖄ","FIM":"FIM","FJD":"FJD","FKP":"FKP","FRF":"FRF","GBP":"ꔛꔟꔻ ꗁꖻꘋ ꔻꗳꔷꘋ","GEK":"GEK","GEL":"GEL","GHC":"ꕭꕌꕯ ꔻꔵ","GHS":"GHS","GIP":"GIP","GMD":"ꕭꔭꕩ ꕜꕞꔻ","GNF":"GNF","GNS":"ꕅꔤꕇ ꖢꕟꘋꕃ","GQE":"GQE","GRD":"GRD","GTQ":"GTQ","GWE":"GWE","GWP":"GWP","GYD":"GYD","HKD":"HKD","HNL":"HNL","HRD":"HRD","HRK":"HRK","HTG":"HTG","HUF":"HUF","IDR":"IDR","IEP":"IEP","ILP":"ILP","ILR":"ILR","ILS":"ILS","INR":"ꔤꔺꕩ ꖩꔪ","IQD":"IQD","IRR":"IRR","ISJ":"ISJ","ISK":"ISK","ITL":"ITL","JMD":"JMD","JOD":"JOD","JPY":"ꕧꕐꕇꔧ ꘂꘋ","KES":"ꔞꕰ ꔻꔝꘋ","KGS":"KGS","KHR":"KHR","KMF":"ꖏꖒꖄ ꖢꕟꘋꕃ","KPW":"KPW","KRH":"KRH","KRO":"KRO","KRW":"KRW","KWD":"KWD","KYD":"KYD","KZT":"KZT","LAK":"LAK","LBP":"LBP","LKR":"LKR","LRD":"ꕞꔤꔫꕩ ꕜꕞꕌ","LSL":"ꔷꖇꕿ ꖃꔳ","LTL":"LTL","LTT":"LTT","LUC":"LUC","LUF":"LUF","LUL":"LUL","LVL":"LVL","LVR":"LVR","LYD":"ꔷꔫꕩ ꔵꕯ","MAD":"ꗞꕟꖏ ꔵꕌꕆ","MAF":"MAF","MCF":"MCF","MDC":"MDC","MDL":"MDL","MGA":"ꕮꕞꕭꕌꔻ ꕉꔸꕩꔸ","MGF":"MGF","MKD":"MKD","MKN":"MKN","MLF":"MLF","MMK":"MMK","MNT":"MNT","MOP":"MOP","MRO":"ꗞꔸꕚꕇꕰ ꖳꕅꕩ (1973–2017)","MRU":"ꗞꔸꕚꕇꕰ ꖳꕅꕩ","MTL":"MTL","MTP":"MTP","MUR":"ꗞꔓꗔ ꖩꔪ","MVP":"MVP","MVR":"MVR","MWK":"ꕮꕞꕌꔨ ꖴꕎꕦ","MXN":"MXN","MXP":"MXP","MXV":"MXV","MYR":"MYR","MZE":"MZE","MZM":"ꗞꕤꔭꕃ ꕆꔳꕪ","MZN":"MZN","NAD":"ꕯꕆꔫꕩ ꕜꕞꕌ","NGN":"ꕯꔤꕀꔸꕩ ꕯꔤꕟ","NIC":"NIC","NIO":"NIO","NLG":"NLG","NOK":"NOK","NPR":"NPR","NZD":"NZD","OMR":"OMR","PAB":"PAB","PEI":"PEI","PEN":"PEN","PES":"PES","PGK":"PGK","PHP":"PHP","PKR":"PKR","PLN":"PLN","PLZ":"PLZ","PTE":"PTE","PYG":"PYG","QAR":"QAR","RHD":"RHD","ROL":"ROL","RON":"RON","RSD":"RSD","RUB":"RUB","RUR":"RUR","RWF":"ꕟꖙꕡ ꖢꕟꘋꕃ","SAR":"ꕢꖙꔵ ꔸꕩꔷ","SBD":"SBD","SCR":"ꔖꗼꔷ ꖩꔪ","SDD":"SDD","SDG":"ꖬꗵꘋ ꗁꖻꘋ","SDP":"SDP","SEK":"SEK","SGD":"SGD","SHP":"ꔻꘋ ꗥꔷꕯ ꗁꖻꘋ","SIT":"SIT","SKK":"SKK","SLL":"ꔷꗚꘋ","SOS":"ꖇꕮꔷ ꔻꔝꘋ","SRD":"SRD","SRG":"SRG","SSP":"SSP","STD":"ꕢꕴ ꕿꔈ ꗪ ꕉ ꕗꕴ ꖁꖜꕟ (1977–2017)","STN":"ꕢꕴ ꕿꔈ ꗪ ꕉ ꕗꕴ ꖁꖜꕟ","SUR":"SUR","SVC":"SVC","SYP":"SYP","SZL":"ꔷꕞꔟꕇ","THB":"THB","TJR":"TJR","TJS":"TJS","TMM":"TMM","TMT":"TMT","TND":"ꖤꕇꔻꕩ ꔵꕯ","TOP":"TOP","TPE":"TPE","TRL":"TRL","TRY":"TRY","TTD":"TTD","TWD":"TWD","TZS":"ꕚꘋꕤꕇꕰ ꔻꔝꘋ","UAH":"UAH","UAK":"UAK","UGS":"UGS","UGX":"ꖳꕭꕡ ꔻꔝꘋ","USD":"ꕶꕱ ꕜꕞ","USN":"USN","USS":"USS","UYI":"UYI","UYP":"UYP","UYU":"UYU","UYW":"UYW","UZS":"UZS","VEB":"VEB","VEF":"VEF","VES":"VES","VND":"VND","VNN":"VNN","VUV":"VUV","WST":"WST","XAF":"XAF","XAG":"XAG","XAU":"XAU","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"XCD","XDR":"XDR","XEU":"XEU","XFO":"XFO","XFU":"XFU","XOF":"XOF","XPD":"XPD","XPF":"XPF","XPT":"XPT","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"XXX","YDD":"YDD","YER":"YER","YUD":"YUD","YUM":"YUM","YUN":"YUN","YUR":"YUR","ZAL":"ZAL","ZAR":"ꕉꔱꔸꕪ ꗛꔤ ꔒꘋꗣ ꗏ ꕟꘋꔵ","ZMK":"ꕤꔭꕩ ꖴꕎꕦ (1968–2012)","ZMW":"ꕤꔭꕩ ꖴꕎꕦ","ZRN":"ZRN","ZRZ":"ZRZ","ZWD":"ꔽꕓꖜꔃ ꕜꕞ","ZWL":"ZWL","ZWR":"ZWR"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"vai-Vaii"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
