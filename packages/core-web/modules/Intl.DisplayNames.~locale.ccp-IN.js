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
if (!("Intl"in self&&Intl.DisplayNames&&Intl.DisplayNames.supportedLocalesOf&&1===Intl.DisplayNames.supportedLocalesOf("ccp-IN").length
)) {
// Intl.DisplayNames.~locale.ccp-IN
/* @generated */
// prettier-ignore
if (Intl.DisplayNames && typeof Intl.DisplayNames.__addLocaleData === 'function') {
  Intl.DisplayNames.__addLocaleData({"data":{"types":{"language":{"long":{"aa":"𑄃𑄜𑄢𑄴","ab":"𑄃𑄝𑄴𑄈𑄎𑄨𑄠𑄚𑄴","ace":"𑄃𑄳𑄃𑄌𑄳𑄆𑄚𑄨𑄎𑄴","ach":"𑄃𑄇𑄮𑄣𑄨","ada":"𑄃𑄧𑄘𑄟𑄳𑄉𑄬","ady":"𑄃𑄘𑄬𑄉𑄬","ae":"𑄃𑄝𑄬𑄌𑄴𑄖𑄩𑄠𑄧","af":"𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴","afh":"𑄃𑄜𑄳𑄢𑄨𑄦𑄨𑄣𑄨","agq":"𑄃𑄬𑄊𑄟𑄴","ain":"𑄃𑄳𑄆𑄚𑄪","ak":"𑄃𑄇𑄚𑄴","akk":"𑄃𑄇𑄳𑄦𑄴𑄘𑄨𑄠𑄚𑄴","ale":"𑄃𑄣𑄬𑄅𑄖𑄴","alt":"𑄓𑄧𑄉𑄨𑄚𑄴 𑄃𑄣𑄴𑄖𑄭","am":"𑄃𑄟𑄴𑄦𑄢𑄨𑄇𑄴","an":"𑄃𑄢𑄴𑄉𑄮𑄚𑄨𑄎𑄴","ang":"𑄛𑄪𑄢𑄧𑄚𑄨 𑄃𑄟𑄧𑄣𑄧𑄢𑄴 𑄃𑄨𑄁𑄢𑄬𑄎𑄩","anp":"𑄃𑄋𑄳𑄉𑄨𑄇","ar":"𑄃𑄢𑄧𑄝𑄩","ar-001":"𑄚𑄱 𑄉𑄧𑄟𑄴 𑄃𑄢𑄧𑄝𑄩","arc":"𑄃𑄢𑄟𑄳𑄆𑄇𑄴","arn":"𑄟𑄛𑄪𑄌𑄨","arp":"𑄃𑄢𑄛𑄦𑄮","arw":"𑄃𑄢𑄤𑄇𑄴","as":"𑄃𑄥𑄟𑄨","asa":"𑄃𑄥𑄪","ast":"𑄃𑄌𑄴𑄖𑄪𑄢𑄨𑄠𑄧","av":"𑄃𑄞𑄬𑄢𑄨𑄇𑄴","awa":"𑄃𑄤𑄙𑄨","ay":"𑄃𑄠𑄧𑄟𑄢","az":"𑄃𑄎𑄢𑄴𑄝𑄳𑄆𑄎𑄚𑄩","ba":"𑄝𑄌𑄴𑄇𑄨𑄢𑄴","bal":"𑄝𑄬𑄣𑄪𑄌𑄩","ban":"𑄝𑄣𑄨𑄚𑄩𑄠𑄧","bas":"𑄝𑄥","be":"𑄝𑄬𑄣𑄢𑄪𑄥𑄨𑄠𑄧","bej":"𑄝𑄬𑄎","bem":"𑄝𑄬𑄟𑄴𑄝","bez":"𑄝𑄬𑄚","bg":"𑄝𑄪𑄣𑄴𑄉𑄬𑄢𑄨𑄠𑄧","bgn":"𑄛𑄧𑄏𑄨𑄟𑄴 𑄝𑄣𑄮𑄌𑄨","bho":"𑄞𑄮𑄎𑄴𑄛𑄪𑄢𑄨","bi":"𑄝𑄨𑄥𑄴𑄣𑄟","bik":"𑄝𑄨𑄇𑄮𑄣𑄴","bin":"𑄝𑄨𑄚𑄨","bla":"𑄥𑄨𑄇𑄴𑄥𑄨𑄇","bm":"𑄝𑄟𑄴𑄝𑄢","bn":"𑄝𑄁𑄣","bo":"𑄖𑄨𑄛𑄴𑄝𑄧𑄖𑄨","br":"𑄝𑄳𑄢𑄬𑄑𑄧𑄚𑄴","bra":"𑄝𑄳𑄢𑄎𑄴","brx":"𑄝𑄮𑄢𑄮","bs":"𑄝𑄧𑄥𑄴𑄚𑄩𑄠𑄚𑄴","bua":"𑄝𑄪𑄢𑄨𑄠𑄖𑄴","bug":"𑄝𑄪𑄉𑄨𑄚𑄨","byn":"𑄝𑄳𑄣𑄨𑄚𑄴","ca":"𑄇𑄖𑄣𑄚𑄴","cad":"𑄇𑄳𑄠𑄓𑄮","car":"𑄝𑄳𑄠𑄢𑄨𑄛𑄴","cch":"𑄃𑄖𑄴𑄥𑄟𑄴","ccp":"𑄌𑄋𑄴𑄟𑄳𑄦","ce":"𑄌𑄬𑄌𑄬𑄚𑄴","ceb":"𑄌𑄬𑄝𑄪𑄠𑄚𑄮","cgg":"𑄌𑄨𑄉","ch":"𑄌𑄟𑄮𑄢𑄮","chb":"𑄌𑄨𑄛𑄴𑄌","chg":"𑄌𑄉𑄖𑄳𑄆","chk":"𑄌𑄪𑄇𑄨","chm":"𑄟𑄢𑄨","chn":"𑄌𑄨𑄚𑄪𑄇𑄴 𑄎𑄢𑄴𑄉𑄧𑄚𑄴","cho":"𑄌𑄧𑄇𑄴𑄑𑄳𑄅𑄧𑄠𑄧","chp":"𑄌𑄨𑄛𑄮𑄤𑄚𑄴","chr":"𑄌𑄬𑄢𑄮𑄇𑄩","chy":"𑄥𑄳𑄆𑄠𑄬𑄚𑄴","ckb":"𑄟𑄧𑄖𑄴𑄙𑄳𑄠𑄧 𑄇𑄪𑄢𑄴𑄘𑄨𑄌𑄴","co":"𑄇𑄧𑄢𑄴𑄥𑄨𑄇𑄚𑄴","cop":"𑄇𑄧𑄛𑄴𑄑𑄨𑄇𑄴","cr":"𑄇𑄳𑄢𑄨","crh":"𑄇𑄳𑄢𑄨𑄟𑄨𑄠𑄚𑄴 𑄖𑄪𑄢𑄴𑄇𑄨","crs":"𑄥𑄬𑄥𑄬𑄣𑄧𑄤 𑄇𑄳𑄢𑄬𑄃𑄮𑄣𑄴 𑄜𑄳𑄢𑄬𑄐𑄴𑄌𑄧","cs":"𑄌𑄬𑄇𑄴","csb":"𑄇𑄥𑄪𑄝𑄨𑄠𑄚𑄴","cu":"𑄌𑄢𑄴𑄌𑄴 𑄥𑄳𑄣𑄞𑄨𑄇𑄴","cv":"𑄌𑄪𑄝𑄥𑄴","cy":"𑄃𑄮𑄠𑄬𑄣𑄧𑄌𑄴","da":"𑄓𑄬𑄚𑄨𑄌𑄴","dak":"𑄓𑄇𑄮𑄑","dar":"𑄘𑄢𑄴𑄉𑄧𑄤","dav":"𑄖𑄳𑄆𑄖","de":"𑄎𑄢𑄴𑄟𑄚𑄴","de-AT":"𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄨𑄠𑄚𑄴 𑄎𑄢𑄴𑄟𑄚𑄴","de-CH":"𑄥𑄪𑄃𑄨𑄌𑄴 𑄦𑄭 𑄎𑄢𑄴𑄟𑄚𑄴","del":"𑄓𑄬𑄣𑄤𑄬𑄢𑄴","den":"𑄥𑄳𑄣𑄳𑄠𑄞𑄴","dgr":"𑄘𑄮𑄉𑄳𑄢𑄨𑄝𑄴","din":"𑄓𑄨𑄁𑄇","dje":"𑄎𑄢𑄴𑄟","doi":"𑄓𑄮𑄉𑄧𑄢𑄨","dsb":"𑄙𑄮𑄣𑄴𑄚𑄬𑄭𑄙𑄳𑄠𑄬 𑄥𑄮𑄢𑄴𑄝𑄨𑄠𑄚𑄴","dua":"𑄘𑄱𑄣","dum":"𑄟𑄧𑄖𑄴𑄙𑄳𑄠𑄧 𑄓𑄌𑄴","dv":"𑄘𑄨𑄝𑄬𑄦𑄨","dyo":"𑄎𑄧𑄣-𑄜𑄧𑄚𑄩","dyu":"𑄓𑄨𑄃𑄪𑄣","dz":"𑄎𑄮𑄋𑄴𑄉","dzg":"𑄘𑄉𑄎","ebu":"𑄃𑄬𑄟𑄳𑄝𑄪𑄪","ee":"𑄃𑄨𑄅𑄠𑄨","efi":"𑄆𑄜𑄨𑄇𑄴","egy":"𑄛𑄪𑄢𑄨𑄚𑄩 𑄟𑄨𑄥𑄧𑄢𑄩𑄠𑄧","eka":"𑄃𑄨𑄇𑄎𑄪𑄇𑄴","el":"𑄉𑄳𑄢𑄨𑄇𑄴","elx":"𑄆𑄣𑄟𑄭𑄖𑄴","en":"𑄃𑄨𑄁𑄢𑄨𑄎𑄨","en-AU":"𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠𑄧 𑄃𑄨𑄁𑄢𑄬𑄎𑄨","en-CA":"𑄇𑄚𑄓𑄩𑄠𑄧 𑄃𑄨𑄁𑄢𑄬𑄎𑄨","en-GB":"𑄝𑄳𑄢𑄨𑄑𑄨𑄌𑄴 𑄃𑄨𑄁𑄢𑄬𑄎𑄨","en-US":"𑄃𑄟𑄬𑄢𑄨𑄇𑄢𑄴 𑄃𑄨𑄁𑄢𑄎𑄨","enm":"𑄟𑄧𑄖𑄴𑄙𑄳𑄠𑄧 𑄃𑄨𑄁𑄢𑄬𑄎𑄨","eo":"𑄆𑄥𑄴𑄛𑄬𑄢𑄚𑄴𑄖𑄮","es":"𑄥𑄳𑄛𑄳𑄠𑄚𑄨𑄌𑄴","es-419":"𑄣𑄳𑄠𑄑𑄨𑄚𑄴 𑄃𑄟𑄬𑄢𑄨𑄇𑄚𑄴 𑄥𑄳𑄛𑄳𑄠𑄚𑄨𑄌𑄴","es-ES":"𑄄𑄅𑄢𑄮𑄛𑄩𑄠𑄧 𑄥𑄳𑄛𑄳𑄠𑄚𑄨𑄌𑄴","es-MX":"𑄟𑄳𑄠𑄇𑄴𑄥𑄨𑄇𑄚𑄴 𑄥𑄳𑄛𑄳𑄠𑄚𑄨𑄌𑄴","et":"𑄆𑄌𑄴𑄖𑄨𑄚𑄩𑄠𑄧","eu":"𑄝𑄌𑄴𑄇𑄧","ewo":"𑄄𑄃𑄮𑄚𑄴𑄓𑄮","fa":"𑄜𑄢𑄴𑄥𑄨","fa-AF":"𑄜𑄢𑄴𑄥𑄨 (𑄃𑄛𑄴𑄉𑄚𑄨𑄌𑄴𑄖𑄚𑄴)","fan":"𑄜𑄳𑄠𑄋𑄴𑄉𑄧","fat":"𑄜𑄚𑄴𑄖𑄨","ff":"𑄜𑄪𑄣𑄳𑄦","fi":"𑄜𑄨𑄚𑄨𑄌𑄴","fil":"𑄜𑄨𑄣𑄨𑄛𑄨𑄚𑄮","fj":"𑄜𑄨𑄎𑄨𑄠𑄚𑄴","fo":"𑄜𑄢𑄮𑄌𑄴","fon":"𑄜𑄧𑄚𑄴","fr":"𑄜𑄧𑄢𑄥𑄨","fr-CA":"𑄇𑄚𑄓𑄩𑄠𑄧 𑄜𑄧𑄢𑄥𑄨","fr-CH":"𑄥𑄪𑄃𑄨𑄌𑄴 𑄜𑄧𑄢𑄥𑄨","frc":"frc","frm":"𑄟𑄧𑄖𑄴𑄙𑄳𑄠𑄧 𑄜𑄧𑄢𑄥𑄨","fro":"𑄛𑄪𑄢𑄮𑄚𑄨 𑄜𑄧𑄢𑄥𑄨","frr":"𑄅𑄖𑄴𑄗𑄧𑄢𑄴 𑄎𑄬𑄌𑄴𑄎𑄮𑄢𑄴 𑄜𑄳𑄢𑄨𑄥𑄨𑄠𑄚𑄴","frs":"𑄛𑄪𑄉𑄮 𑄜𑄳𑄢𑄨𑄥𑄨𑄠𑄧","fur":"𑄜𑄳𑄢𑄨𑄃𑄪𑄣𑄨𑄠𑄚𑄴","fy":"𑄛𑄧𑄎𑄨𑄟𑄴 𑄜𑄳𑄢𑄨𑄥𑄨𑄠𑄚𑄴","ga":"𑄃𑄭𑄢𑄨𑄌𑄴","gaa":"𑄉𑄳𑄃","gag":"𑄉𑄉𑄃𑄪𑄌𑄴","gan":"𑄉𑄧𑄚𑄴","gay":"𑄉𑄧𑄠𑄮","gba":"𑄝𑄠","gd":"𑄃𑄨𑄌𑄴𑄇𑄧𑄖𑄴𑄥𑄧-𑄉𑄳𑄠𑄬𑄣𑄨𑄇𑄴","gez":"𑄉𑄩𑄎𑄴","gil":"𑄉𑄨𑄣𑄴𑄝𑄢𑄴𑄑𑄨𑄎𑄴","gl":"𑄉𑄳𑄠𑄣𑄨𑄥𑄨𑄠𑄧","gmh":"𑄟𑄧𑄖𑄴𑄙𑄳𑄠𑄧-𑄅𑄪𑄉𑄪𑄢𑄬 𑄎𑄢𑄴𑄟𑄚𑄩","gn":"𑄉𑄪𑄠𑄢𑄚𑄨","goh":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄅𑄪𑄉𑄪𑄢𑄬 𑄎𑄢𑄴𑄟𑄚𑄩","gon":"𑄉𑄮𑄚𑄴𑄓𑄨","gor":"𑄉𑄢𑄮𑄚𑄴𑄖𑄣𑄮","got":"𑄉𑄧𑄗𑄨𑄇𑄴","grb":"𑄉𑄳𑄢𑄬𑄝𑄮","grc":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄉𑄳𑄢𑄩𑄇𑄴","gsw":"𑄥𑄪𑄃𑄨𑄌𑄴 𑄥𑄢𑄴𑄟𑄚𑄴","gu":"𑄉𑄪𑄎𑄴𑄢𑄖𑄨","guz":"𑄉𑄪𑄥𑄩","gv":"𑄟𑄳𑄠𑄇𑄴𑄥𑄧","gwi":"𑄉𑄧𑄃𑄮𑄃𑄨𑄌𑄴𑄃𑄨𑄚𑄴","ha":"𑄦𑄃𑄪𑄥","hai":"𑄦𑄭𑄓","hak":"𑄦𑄧𑄇𑄴","haw":"𑄦𑄤𑄃𑄨𑄠𑄚𑄴","he":"𑄦𑄨𑄛𑄴𑄝𑄳𑄢𑄪","hi":"𑄦𑄨𑄚𑄴𑄓𑄨","hil":"𑄦𑄨𑄣𑄨𑄉𑄳𑄠𑄠𑄧𑄚𑄮𑄚𑄴","hit":"𑄦𑄨𑄖𑄨𑄨𑄖𑄴","hmn":"𑄦𑄳𑄦𑄟𑄮𑄋𑄴","ho":"𑄦𑄪𑄢𑄨 𑄟𑄮𑄖𑄪","hr":"𑄇𑄳𑄢𑄮𑄠𑄬𑄥𑄩𑄠𑄧","hsb":"𑄅𑄪𑄉𑄪𑄢𑄬 𑄥𑄮𑄢𑄴𑄥𑄨𑄠𑄚𑄴","hsn":"Xiang 𑄌𑄨𑄚","ht":"𑄦𑄭𑄖𑄨𑄠𑄚𑄴","hu":"𑄦𑄁𑄉𑄬𑄢𑄩𑄠𑄧","hup":"𑄦𑄪𑄛","hy":"𑄃𑄢𑄴𑄟𑄬𑄚𑄨𑄠𑄧","hz":"𑄦𑄬𑄢𑄬𑄢𑄮","ia":"𑄃𑄨𑄚𑄴𑄑𑄢𑄴𑄣𑄨𑄁𑄉𑄪𑄠","iba":"𑄃𑄨𑄝𑄚𑄴","ibb":"𑄃𑄨𑄝𑄨𑄝𑄨𑄠𑄧","id":"𑄃𑄨𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠𑄧","ie":"𑄃𑄨𑄚𑄴𑄑𑄢𑄴𑄣𑄨𑄁𑄉𑄧","ig":"𑄃𑄨𑄉𑄴𑄝𑄮","ii":"𑄥𑄨𑄥𑄪𑄠𑄚𑄴𑄠𑄨","ik":"𑄃𑄨𑄚𑄪𑄛𑄨𑄠𑄇𑄴","ilo":"𑄃𑄨𑄣𑄮𑄇𑄮","inh":"𑄃𑄨𑄁𑄉𑄪𑄌𑄴","io":"𑄃𑄨𑄓𑄮","is":"𑄃𑄭𑄌𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄨𑄠𑄧","it":"𑄃𑄨𑄖𑄣𑄩𑄠𑄧","iu":"𑄃𑄨𑄚𑄪𑄇𑄴𑄑𑄨𑄑𑄪𑄖𑄴","ja":"𑄎𑄛𑄚𑄨","jbo":"𑄣𑄮𑄌𑄴𑄝𑄚𑄴","jgo":"𑄉𑄮𑄟𑄴𑄝","jmc":"𑄟𑄇𑄟𑄬","jpr":"𑄎𑄪𑄘𑄬𑄃𑄮 𑄜𑄢𑄴𑄥𑄨","jrb":"𑄎𑄪𑄘𑄬𑄃𑄮 𑄃𑄢𑄧𑄝𑄨","jv":"𑄎𑄞𑄚𑄨𑄎𑄴","ka":"𑄎𑄧𑄢𑄴𑄎𑄨𑄠𑄚𑄴","kaa":"𑄇𑄢-𑄇𑄣𑄴𑄛𑄇𑄴","kab":"𑄇𑄝𑄭𑄣𑄬","kac":"𑄇𑄌𑄨𑄚𑄴","kaj":"𑄃𑄧𑄌𑄴𑄎𑄪","kam":"𑄇𑄟𑄴𑄝","kaw":"𑄇𑄃𑄪𑄃𑄨","kbd":"𑄇𑄝𑄢𑄴𑄓𑄨𑄠𑄚𑄴","kcg":"𑄑𑄃𑄨𑄠𑄛𑄴","kde":"𑄟𑄇𑄮𑄚𑄴𑄘𑄬","kea":"𑄇𑄝𑄪𑄞𑄢𑄴𑄘𑄨𑄠𑄚𑄪","kfo":"𑄇𑄮𑄢𑄮","kg":"𑄇𑄧𑄁𑄉𑄮","kha":"𑄈𑄥𑄨","kho":"𑄈𑄮𑄑𑄚𑄨𑄎𑄴","khq":"𑄇𑄮𑄠𑄧𑄢 𑄌𑄩𑄚𑄨","ki":"𑄇𑄨𑄇𑄪𑄠𑄪","kj":"𑄇𑄮𑄠𑄚𑄨𑄠𑄟","kk":"𑄇𑄎𑄇𑄴","kkj":"𑄇𑄇𑄮","kl":"𑄇𑄳𑄠𑄣𑄣𑄴𑄣𑄨𑄥𑄪𑄖𑄴","kln":"𑄇𑄣𑄬𑄚𑄴𑄎𑄨𑄚𑄴","km":"𑄈𑄧𑄟𑄬𑄢𑄴","kmb":"𑄇𑄨𑄟𑄴𑄝𑄪𑄚𑄴𑄘𑄪","kn":"𑄇𑄧𑄚𑄴𑄚𑄧𑄢𑄴","ko":"𑄇𑄮𑄢𑄨𑄠𑄚𑄴","koi":"𑄇𑄧𑄟𑄨-𑄛𑄢𑄧𑄟𑄨𑄃𑄇𑄴","kok":"𑄇𑄮𑄋𑄴𑄇𑄚𑄨","kos":"𑄇𑄮𑄥𑄳𑄢𑄭𑄚𑄴","kpe":"𑄇𑄴𑄛𑄬𑄣𑄳𑄣𑄬","kr":"𑄇𑄚𑄪𑄢𑄨","krc":"𑄇𑄢𑄴𑄌𑄮-𑄝𑄣𑄴𑄇𑄢𑄴","krl":"𑄇𑄢𑄬𑄣𑄨𑄠𑄚𑄴","kru":"𑄇𑄪𑄢𑄪𑄇𑄴","ks":"𑄇𑄌𑄴𑄟𑄨𑄢𑄨","ksb":"𑄥𑄟𑄴𑄝𑄣","ksf":"𑄝𑄜𑄨𑄠","ksh":"𑄇𑄣𑄴𑄥𑄧","ku":"𑄇𑄪𑄢𑄴𑄘𑄨𑄥𑄴","kum":"𑄇𑄪𑄟𑄨𑄇𑄴","kut":"𑄇𑄪𑄑𑄬𑄚𑄭","kv":"𑄇𑄮𑄟𑄨","kw":"𑄇𑄧𑄢𑄴𑄚𑄨𑄌𑄴","ky":"𑄇𑄨𑄢𑄴𑄉𑄨𑄌𑄴","la":"𑄣𑄑𑄨𑄚𑄴","lad":"𑄣𑄓𑄨𑄚𑄮","lag":"𑄣𑄋𑄴𑄉𑄨","lah":"𑄣𑄚𑄴𑄓","lam":"𑄣𑄟𑄴𑄝","lb":"𑄣𑄪𑄇𑄴𑄥𑄬𑄟𑄴𑄝𑄢𑄴𑄉𑄩𑄠𑄧","lez":"𑄣𑄬𑄎𑄴𑄊𑄨𑄠𑄚𑄴","lg":"𑄉𑄚𑄴𑄓","li":"𑄣𑄨𑄟𑄴𑄝𑄪𑄢𑄴𑄉𑄨𑄌𑄴","lkt":"𑄣𑄇𑄮𑄑","ln":"𑄣𑄨𑄋𑄴𑄉𑄣","lo":"𑄣𑄃𑄮","lol":"𑄟𑄮𑄋𑄴𑄉𑄮","lou":"lou","loz":"𑄣𑄮𑄎𑄨","lrc":"𑄅𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄣𑄪𑄢𑄨","lt":"𑄣𑄨𑄗𑄪𑄠𑄬𑄚𑄩𑄠𑄧","lu":"𑄣𑄪𑄝-𑄇𑄑𑄋𑄴𑄉","lua":"𑄣𑄪𑄝-𑄣𑄪𑄣𑄪𑄠","lui":"𑄣𑄭𑄪𑄥𑄬𑄚𑄮","lun":"𑄣𑄪𑄚𑄴𑄓","luo":"𑄣𑄪𑄠𑄮","lus":"𑄟𑄨𑄎𑄮","luy":"𑄣𑄭𑄪𑄠","lv":"𑄣𑄖𑄴𑄞𑄩𑄠𑄧","mad":"𑄟𑄘𑄪𑄢𑄬𑄥𑄬","mag":"𑄟𑄉𑄦𑄨","mai":"𑄟𑄳𑄆𑄧𑄗𑄨𑄣𑄨","mak":"𑄟𑄳𑄠𑄇𑄥𑄢𑄴","man":"𑄟𑄳𑄠𑄚𑄴𑄓𑄨𑄁𑄉𑄮","mas":"𑄟𑄥𑄭","mdf":"𑄟𑄮𑄇𑄴𑄥","mdr":"𑄟𑄳𑄠𑄚𑄴𑄓𑄢𑄴","men":"𑄟𑄬𑄚𑄴𑄓𑄬","mer":"𑄟𑄬𑄢𑄪","mfe":"𑄟𑄢𑄨𑄥𑄨𑄠𑄚𑄴","mg":"𑄟𑄣𑄉𑄥𑄨","mga":"𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄭𑄢𑄨𑄌𑄴","mgh":"𑄟𑄈𑄪𑄠-𑄟𑄬𑄖𑄴𑄖𑄮","mgo":"𑄟𑄬𑄑","mh":"𑄟𑄢𑄴𑄥𑄣𑄨𑄎𑄴","mi":"𑄟𑄃𑄮𑄢𑄨","mic":"𑄟𑄨𑄇𑄟𑄳𑄠𑄇𑄴","min":"𑄟𑄨𑄚𑄋𑄴𑄇𑄝𑄃𑄪","mk":"𑄟𑄳𑄠𑄥𑄨𑄓𑄮𑄚𑄩𑄠𑄧","ml":"𑄟𑄣𑄠𑄣𑄟𑄴","mn":"𑄟𑄧𑄁𑄉𑄮𑄣𑄨𑄠𑄧","mnc":"𑄟𑄚𑄴𑄌𑄪","mni":"𑄟𑄚𑄨𑄛𑄪𑄢𑄩","moh":"𑄟𑄮𑄦𑄃𑄮𑄇𑄴","mos":"𑄟𑄧𑄥𑄨","mr":"𑄟𑄢𑄒𑄨","ms":"𑄟𑄣𑄧𑄠𑄴","mt":"𑄟𑄧𑄣𑄴𑄑𑄨𑄠𑄧","mua":"𑄟𑄪𑄘𑄋𑄴𑄉𑄧","mul":"𑄝𑄣𑄧𑄇𑄴𑄇𑄚𑄨 𑄞𑄌𑄴","mus":"𑄇𑄳𑄢𑄨𑄇𑄴","mwl":"𑄟𑄨𑄢𑄚𑄴𑄓𑄨𑄎𑄴","mwr":"𑄟𑄢𑄮𑄠𑄢𑄨","my":"𑄝𑄧𑄢𑄴𑄟𑄨","myv":"𑄆𑄢𑄧𑄎𑄨𑄠","mzn":"𑄟𑄎𑄚𑄴𑄘𑄬𑄢𑄚𑄨","na":"𑄚𑄃𑄪𑄢𑄪","nan":"𑄚𑄚𑄴","nap":"𑄚𑄬𑄠𑄛𑄮𑄣𑄨𑄑𑄚𑄴","naq":"𑄚𑄟","nb":"𑄚𑄧𑄢𑄴𑄃𑄮𑄠𑄬𑄎𑄨𑄠𑄚𑄴 𑄝𑄮𑄇𑄴𑄟𑄣𑄴","nd":"𑄅𑄖𑄴𑄖𑄧𑄢𑄴 𑄆𑄚𑄴𑄘𑄬𑄝𑄨𑄣𑄨","nds":"𑄖𑄧𑄣𑄬 𑄎𑄢𑄴𑄟𑄚𑄨","nds-NL":"𑄣𑄮𑄥𑄳𑄠𑄇𑄴𑄥𑄧𑄚𑄴","ne":"𑄚𑄬𑄛𑄣𑄨","new":"𑄚𑄬𑄃𑄮𑄠𑄢𑄨","ng":"𑄆𑄚𑄴𑄘𑄮𑄋𑄴𑄉","nia":"𑄚𑄨𑄠𑄌𑄴","niu":"𑄚𑄨𑄃𑄪𑄠𑄚𑄴","nl":"𑄓𑄌𑄴","nl-BE":"𑄜𑄳𑄣𑄬𑄟𑄨𑄌𑄴","nmg":"𑄇𑄱𑄥𑄨𑄃𑄮","nn":"𑄚𑄧𑄢𑄴𑄃𑄮𑄠𑄬𑄎𑄩𑄠𑄚𑄴 𑄚𑄨𑄚𑄧𑄢𑄴𑄥𑄳𑄇𑄴","nnh":"𑄚𑄨𑄋𑄴𑄉𑄬𑄟𑄴𑄝𑄪𑄚𑄴","no":"𑄚𑄧𑄢𑄴𑄃𑄮𑄠𑄬𑄎𑄩𑄠𑄧","nog":"𑄚𑄮𑄉𑄭","non":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄚𑄧𑄢𑄴𑄥𑄧","nqo":"𑄆𑄚𑄴𑄇𑄮","nr":"𑄓𑄧𑄉𑄨𑄚𑄴 𑄆𑄚𑄴𑄓𑄬𑄝𑄬𑄣𑄬","nso":"𑄃𑄪𑄖𑄴𑄗𑄧𑄢𑄴 𑄢𑄬𑄌𑄴𑄎𑄮𑄢𑄴 𑄥𑄮𑄗𑄮","nus":"𑄚𑄪𑄠𑄢𑄴","nv":"𑄚𑄞𑄎𑄮","nwc":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄚𑄬𑄃𑄮𑄠𑄢𑄩","ny":"𑄚𑄠𑄚𑄴𑄎","nym":"𑄚𑄳𑄠𑄠𑄟𑄴𑄃𑄮𑄠𑄬𑄎𑄨","nyn":"𑄚𑄳𑄠𑄠𑄋𑄴𑄇𑄮𑄣𑄬","nyo":"𑄚𑄧𑄱𑄢𑄮","nzi":"𑄆𑄚𑄴𑄎𑄨𑄟","oc":"𑄃𑄧𑄇𑄴𑄥𑄨𑄑𑄚𑄴","oj":"𑄃𑄮𑄎𑄨𑄝𑄧𑄤","om":"𑄃𑄧𑄢𑄮𑄟𑄮","or":"𑄃𑄮𑄢𑄨𑄠","os":"𑄃𑄮𑄥𑄬𑄑𑄨𑄇𑄴","osa":"𑄃𑄮𑄥𑄬𑄌𑄴","ota":"𑄃𑄧𑄑𑄮𑄟𑄚𑄴 𑄖𑄪𑄢𑄴𑄇𑄨","pa":"𑄛𑄚𑄴𑄎𑄝𑄩","pag":"𑄛𑄁𑄉𑄥𑄨𑄚𑄚𑄴","pal":"𑄛𑄦𑄳𑄣𑄞𑄨","pam":"𑄛𑄟𑄴𑄛𑄋𑄴𑄉","pap":"𑄛𑄛𑄨𑄠𑄟𑄬𑄚𑄴𑄖𑄮","pau":"𑄛𑄣𑄠𑄪𑄠𑄚𑄴","pcm":"𑄚𑄎𑄬𑄢𑄨𑄠𑄧 𑄛𑄨𑄎𑄨𑄚𑄴","peo":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄜𑄢𑄴𑄥𑄨","phn":"𑄜𑄮𑄚𑄨𑄥𑄨𑄠𑄚𑄴","pi":"𑄛𑄣𑄨","pl":"𑄛𑄮𑄣𑄨𑄌𑄴","pon":"𑄛𑄮𑄚𑄴𑄦𑄧𑄛𑄳𑄆𑄬𑄠𑄚𑄴","prg":"𑄛𑄴𑄢𑄪𑄥𑄨𑄠𑄚𑄴","pro":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄛𑄳𑄢𑄮𑄞𑄬𑄚𑄴𑄥𑄣𑄴","ps":"𑄛𑄌𑄴𑄑𑄪","pt":"𑄛𑄧𑄢𑄴𑄖𑄪𑄉𑄨𑄎𑄴","pt-BR":"𑄝𑄳𑄢𑄎𑄨𑄣𑄬𑄢𑄴 𑄛𑄧𑄢𑄴𑄖𑄪𑄉𑄨𑄎𑄴","pt-PT":"𑄃𑄨𑄃𑄪𑄢𑄮𑄛𑄬𑄢𑄴 𑄛𑄧𑄢𑄴𑄖𑄪𑄉𑄨𑄎𑄴","qu":"𑄇𑄬𑄌𑄪𑄠","quc":"𑄇𑄳𑄦𑄨𑄌𑄬","raj":"𑄢𑄎𑄴𑄥𑄳𑄦𑄚𑄨","rap":"𑄢𑄛𑄚𑄳𑄆𑄪","rar":"𑄢𑄢𑄮𑄑𑄮𑄁𑄉𑄚𑄴","rm":"𑄢𑄮𑄟𑄚𑄴𑄥𑄴","rn":"𑄢𑄪𑄚𑄴𑄘𑄨","ro":"𑄢𑄮𑄟𑄚𑄩𑄠𑄧","ro-MD":"𑄟𑄧𑄣𑄴𑄘𑄞𑄨𑄠𑄧","rof":"𑄢𑄧𑄟𑄴𑄝𑄮","rom":"𑄢𑄮𑄟𑄚𑄨","root":"𑄥𑄨𑄠𑄮𑄢𑄴","ru":"𑄢𑄪𑄌𑄴","rup":"𑄃𑄢𑄴𑄟𑄬𑄚𑄨𑄠𑄚𑄴","rw":"𑄇𑄨𑄚𑄴𑄠𑄢𑄮𑄠𑄚𑄴𑄓","rwk":"𑄢𑄤","sa":"𑄥𑄧𑄁𑄥𑄴𑄇𑄳𑄢𑄨𑄖𑄴","sad":"𑄥𑄳𑄠𑄚𑄴𑄓𑄃𑄮𑄠𑄬","sah":"𑄥𑄈","sam":"𑄥𑄟𑄢𑄨𑄑𑄚𑄴 𑄃𑄢𑄟𑄨𑄇𑄴","saq":"𑄥𑄟𑄴𑄝𑄪𑄢𑄪","sas":"𑄥𑄥𑄇𑄴","sat":"𑄥𑄀𑄃𑄮𑄖𑄣𑄨","sba":"𑄚𑄳𑄠𑄉𑄟𑄴𑄝𑄬","sbp":"𑄥𑄁𑄚𑄴𑄉𑄪","sc":"𑄥𑄢𑄴𑄓𑄨𑄚𑄨𑄠𑄚𑄴","scn":"𑄥𑄨𑄥𑄨𑄣𑄨𑄠𑄚𑄴","sco":"𑄆𑄌𑄴𑄇𑄧𑄖𑄴𑄥𑄴","sd":"𑄥𑄨𑄚𑄴𑄙𑄨","sdh":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄇𑄪𑄢𑄴𑄘𑄨𑄌𑄴","se":"𑄅𑄖𑄴𑄖𑄧𑄢𑄴 𑄢𑄬𑄌𑄴𑄎𑄮𑄢𑄴 𑄥𑄟𑄨","seh":"𑄥𑄬𑄚","sel":"𑄥𑄬𑄣𑄴𑄇𑄪𑄛𑄴","ses":"𑄇𑄱𑄢𑄝𑄬𑄚𑄮 𑄥𑄬𑄚𑄳𑄚𑄨","sg":"𑄥𑄋𑄴𑄉𑄮","sga":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄃𑄭𑄢𑄨𑄌𑄴","sh":"𑄥𑄢𑄴𑄝𑄮-𑄇𑄳𑄢𑄮𑄠𑄬𑄥𑄨𑄠𑄧","shi":"𑄖𑄌𑄬𑄣𑄴𑄦𑄨𑄖𑄴","shn":"𑄥𑄚𑄴","si":"𑄥𑄨𑄁𑄦𑄧𑄣𑄩","sid":"𑄥𑄨𑄓𑄟𑄮","sk":"𑄥𑄳𑄣𑄮𑄞𑄇𑄴","sl":"𑄥𑄳𑄣𑄮𑄞𑄬𑄚𑄩𑄠𑄧","sm":"𑄥𑄟𑄮𑄠𑄚𑄴","sma":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄢𑄬𑄌𑄴𑄎𑄮𑄢𑄴 𑄥𑄟𑄨","smj":"𑄣𑄪𑄣𑄬 𑄥𑄟𑄨","smn":"𑄃𑄨𑄚𑄢𑄨 𑄥𑄟𑄨","sms":"𑄥𑄳𑄇𑄧𑄣𑄳𑄑𑄧 𑄥𑄟𑄨","sn":"𑄥𑄮𑄚","snk":"𑄥𑄮𑄚𑄨𑄋𑄴𑄇𑄬","so":"𑄥𑄮𑄟𑄣𑄨","sog":"𑄥𑄮𑄇𑄴𑄓𑄠𑄚𑄴","sq":"𑄃𑄣𑄴𑄝𑄬𑄚𑄩𑄠𑄧","sr":"𑄥𑄢𑄴𑄝𑄩𑄠𑄧","srn":"𑄥𑄳𑄢𑄚𑄚𑄴 𑄑𑄮𑄋𑄴𑄉𑄮","srr":"𑄥𑄬𑄢𑄬𑄢𑄴","ss":"𑄥𑄮𑄠𑄖𑄨","ssy":"𑄥𑄦𑄮","st":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄥𑄮𑄗𑄮","su":"𑄥𑄪𑄘𑄚𑄩","suk":"𑄥𑄪𑄇𑄪𑄟","sus":"𑄥𑄪𑄥𑄪","sux":"𑄥𑄪𑄟𑄬𑄢𑄩𑄠𑄧","sv":"𑄥𑄭𑄪𑄓𑄨𑄥𑄴","sw":"𑄥𑄱𑄦𑄨𑄣𑄨","sw-CD":"𑄇𑄧𑄋𑄴𑄉𑄮 𑄥𑄱𑄦𑄨𑄣𑄨","swb":"𑄇𑄧𑄟𑄮𑄢𑄨𑄠𑄚𑄴","syc":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄥𑄨𑄢𑄨𑄃𑄮","syr":"𑄥𑄨𑄢𑄨𑄠𑄇𑄴","ta":"𑄖𑄟𑄨𑄣𑄴","te":"𑄖𑄬𑄣𑄬𑄉𑄪","tem":"𑄑𑄭𑄟𑄴𑄚𑄬","teo":"𑄖𑄬𑄥𑄮","ter":"𑄖𑄬𑄢𑄬𑄚𑄮","tet":"𑄖𑄬𑄖𑄪𑄟𑄴","tg":"𑄖𑄎𑄨𑄇𑄴","th":"𑄗𑄭","ti":"𑄖𑄨𑄉𑄧𑄢𑄨𑄚𑄨𑄠","tig":"𑄑𑄭𑄉𑄳𑄢𑄬","tiv":"𑄑𑄨𑄞𑄴","tk":"𑄖𑄪𑄢𑄴𑄇𑄧𑄟𑄬𑄚𑄨","tkl":"𑄑𑄮𑄇𑄬𑄣𑄃𑄪","tl":"𑄖𑄉𑄣𑄧𑄇𑄴","tlh":"𑄇𑄳𑄣𑄨𑄋𑄴𑄉𑄧𑄚𑄴","tli":"𑄖𑄴𑄣𑄨𑄋𑄴𑄉𑄨𑄖𑄴","tmh":"𑄖𑄟𑄥𑄬𑄇𑄴","tn":"𑄥𑄱𑄚","to":"𑄑𑄮𑄋𑄴𑄉𑄚𑄴","tog":"𑄚𑄠𑄥𑄑𑄮𑄋𑄴𑄉","tpi":"𑄑𑄮𑄇𑄴 𑄛𑄨𑄥𑄨𑄚𑄴","tr":"𑄖𑄪𑄢𑄴𑄇𑄩","trv":"𑄖𑄢𑄮𑄇𑄮","ts":"𑄥𑄧𑄋𑄴𑄉","tsi":"𑄥𑄨𑄟𑄴𑄥𑄨𑄠𑄚𑄴","tt":"𑄖𑄖𑄢𑄴","tum":"𑄖𑄪𑄟𑄴𑄝𑄪𑄇","tvl":"𑄑𑄪𑄞𑄣𑄪","tw":"𑄑𑄮𑄠𑄭","twq":"𑄖𑄥𑄤𑄇𑄴","ty":"𑄖𑄦𑄨𑄖𑄨𑄠𑄚𑄴","tyv":"𑄑𑄪𑄞𑄨𑄚𑄨𑄠𑄚𑄴","tzm":"𑄥𑄬𑄚𑄴𑄑𑄳𑄢𑄣𑄴 𑄃𑄣𑄴𑄖𑄌𑄴 𑄖𑄟𑄎𑄨𑄉𑄖𑄴","udm":"𑄃𑄪𑄓𑄴𑄟𑄪𑄢𑄴𑄑𑄧","ug":"𑄃𑄪𑄃𑄨𑄊𑄪𑄢𑄴","uga":"𑄃𑄪𑄉𑄢𑄨𑄑𑄨𑄇𑄴","uk":"𑄃𑄨𑄃𑄪𑄇𑄳𑄢𑄬𑄚𑄩𑄠𑄧","umb":"𑄃𑄪𑄟𑄴𑄝𑄪𑄚𑄴𑄘𑄪","und":"𑄦𑄧𑄝𑄧𑄢𑄴 𑄚𑄧𑄛𑄬𑄠𑄬 𑄞𑄌𑄴","ur":"𑄃𑄪𑄢𑄴𑄘𑄪","uz":"𑄃𑄪𑄎𑄴𑄝𑄬𑄇𑄩𑄠𑄧","vai":"𑄞𑄭","ve":"𑄞𑄬𑄚𑄴𑄓","vi":"𑄞𑄨𑄠𑄬𑄖𑄴𑄚𑄟𑄩","vo":"𑄞𑄮𑄣𑄛𑄪𑄇𑄴","vot":"𑄞𑄮𑄑𑄨𑄇𑄴","vun":"𑄞𑄪𑄚𑄴𑄏𑄮","wa":"𑄤𑄣𑄪𑄚𑄴","wae":"𑄤𑄣𑄧𑄥𑄬𑄢𑄴","wal":"𑄤𑄣𑄟𑄮","war":"𑄤𑄢𑄬","was":"𑄤𑄥𑄮","wbp":"𑄤𑄢𑄴𑄣𑄴𑄛𑄨𑄢𑄨","wo":"𑄤𑄃𑄮𑄣𑄮𑄜𑄴","wuu":"𑄤𑄌𑄨𑄚","xal":"𑄇𑄣𑄴𑄟𑄳𑄆𑄧𑄇𑄴","xh":"𑄎𑄮𑄥","xog":"𑄥𑄮𑄉","yao":"𑄃𑄨𑄠𑄃𑄮","yap":"𑄃𑄨𑄠𑄛𑄬𑄥𑄬","yav":"𑄠𑄋𑄴𑄉𑄧𑄝𑄬𑄚𑄴","ybb":"𑄠𑄮𑄟𑄴𑄝","yi":"𑄠𑄨𑄖𑄴𑄘𑄨𑄥𑄴","yo":"𑄃𑄨𑄃𑄮𑄢𑄪𑄝","yue":"𑄇𑄳𑄠𑄚𑄴𑄑𑄮𑄚𑄩𑄎𑄴","za":"𑄏𑄪𑄠𑄋𑄴","zap":"𑄎𑄛𑄮𑄑𑄬𑄇𑄴","zbl":"𑄃𑄉𑄬𑄠 𑄞𑄌𑄴","zen":"𑄎𑄬𑄚𑄉","zgh":"𑄉𑄧𑄟𑄴𑄘𑄮𑄣𑄴 𑄟𑄧𑄢𑄧𑄇𑄧𑄧𑄱𑄚𑄴𑄖𑄟𑄎𑄨𑄉𑄖𑄴","zh":"𑄌𑄩𑄚","zh-Hans":"𑄅𑄪𑄎𑄪𑄅𑄪𑄏𑄫 𑄌𑄩𑄚","zh-Hant":"𑄢𑄨𑄘𑄨𑄥𑄪𑄘𑄮𑄟𑄴 𑄌𑄩𑄚","zu":"𑄎𑄪𑄣𑄪","zun":"𑄎𑄪𑄚𑄨","zxx":"𑄞𑄏𑄧𑄢𑄴𑄘𑄮𑄇𑄳𑄠𑄬 𑄝𑄨𑄥𑄧𑄠𑄴 𑄚𑄳𑄄𑄬","zza":"𑄎𑄎"},"short":{"az":"𑄃𑄎𑄬𑄢𑄨","en-GB":"𑄎𑄧𑄙𑄢𑄬𑄌𑄴𑄎𑄮𑄢𑄴 𑄃𑄨𑄁𑄢𑄬𑄎𑄨","en-US":"𑄃𑄨𑄅𑄪𑄃𑄬𑄌𑄴 𑄃𑄨𑄁𑄢𑄬𑄎𑄨"},"narrow":{}},"region":{"long":{"142":"𑄃𑄬𑄥𑄨𑄠","143":"𑄟𑄧𑄖𑄴𑄙𑄳𑄠𑄧 𑄃𑄬𑄥𑄨𑄠","145":"𑄛𑄧𑄎𑄨𑄟𑄴 𑄃𑄬𑄥𑄨𑄠","150":"𑄄𑄃𑄪𑄢𑄮𑄛𑄴","151":"𑄛𑄪𑄉𑄬𑄘𑄨 𑄄𑄃𑄪𑄢𑄮𑄛𑄴","154":"𑄅𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄄𑄃𑄪𑄢𑄮𑄛𑄴","155":"𑄛𑄧𑄎𑄨𑄟𑄴 𑄄𑄃𑄪𑄢𑄮𑄛𑄴","202":"202","419":"𑄣𑄳𑄠𑄑𑄨𑄚𑄴 𑄃𑄟𑄬𑄢𑄨𑄇","001":"𑄛𑄨𑄖𑄴𑄗𑄨𑄟𑄨","002":"𑄃𑄜𑄳𑄢𑄨𑄇","003":"𑄅𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄃𑄟𑄬𑄢𑄨𑄇","005":"𑄘𑄨𑄉𑄨𑄚𑄴 𑄃𑄟𑄬𑄢𑄨𑄇","009":"𑄃𑄮𑄥𑄨𑄠𑄚𑄨𑄠","011":"𑄛𑄧𑄏𑄨𑄟𑄴 𑄃𑄜𑄳𑄢𑄨𑄇","013":"𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇","014":"𑄛𑄪𑄇𑄴𑄘𑄩 𑄃𑄜𑄳𑄢𑄨𑄇","015":"𑄅𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄃𑄜𑄳𑄢𑄨𑄇","017":"𑄟𑄧𑄖𑄴𑄙𑄳𑄠𑄧 𑄃𑄜𑄳𑄢𑄨𑄇","018":"018","019":"𑄃𑄟𑄬𑄢𑄨𑄇𑄥𑄴","021":"𑄅𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄎𑄉𑄢𑄴 𑄃𑄟𑄬𑄢𑄨𑄇","029":"𑄇𑄳𑄠𑄢𑄝𑄨𑄠𑄚𑄴","030":"𑄛𑄪𑄉𑄬𑄘𑄩 𑄃𑄬𑄥𑄨𑄠","034":"𑄘𑄧𑄉𑄨𑄚𑄬 𑄃𑄬𑄥𑄨𑄠","035":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄛𑄪𑄇𑄴 𑄃𑄬𑄥𑄨𑄠","039":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄄𑄃𑄪𑄢𑄮𑄛𑄴","053":"𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄣𑄬𑄥𑄨𑄠","054":"𑄟𑄳𑄠𑄣𑄬𑄚𑄬𑄥𑄨𑄠","057":"𑄟𑄭𑄇𑄳𑄢𑄮𑄚𑄬𑄥𑄨𑄠 𑄎𑄉","061":"𑄛𑄧𑄣𑄨𑄚𑄬𑄥𑄨𑄠","AC":"𑄃𑄳𑄠𑄥𑄴𑄥𑄬𑄚𑄴𑄥𑄧𑄚𑄴 𑄃𑄭𑄣𑄳𑄠𑄚𑄴𑄓𑄴","AD":"𑄃𑄚𑄴𑄓𑄮𑄢","AE":"𑄎𑄧𑄙 𑄃𑄢𑄧𑄝𑄴 𑄃𑄟𑄨𑄢𑄖𑄴","AF":"𑄃𑄛𑄴𑄉𑄚𑄨𑄌𑄴𑄖𑄚𑄴","AG":"𑄆𑄚𑄴𑄖𑄨𑄉𑄱 𑄃𑄮 𑄝𑄢𑄴𑄟𑄪𑄓","AI":"𑄄𑄳𑄠𑄋𑄴𑄉𑄪𑄃𑄨𑄣","AL":"𑄃𑄣𑄴𑄝𑄬𑄚𑄨𑄠","AM":"𑄃𑄢𑄴𑄟𑄬𑄚𑄨𑄠","AO":"𑄃𑄳𑄠𑄋𑄴𑄉𑄮𑄣","AQ":"𑄃𑄳𑄠𑄚𑄴𑄑𑄢𑄴𑄇𑄧𑄑𑄨𑄇","AR":"𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚","AS":"𑄃𑄟𑄬𑄢𑄨𑄇𑄚𑄴 𑄥𑄟𑄮𑄠","AT":"𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄨𑄠","AU":"𑄃𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠","AW":"𑄃𑄢𑄪𑄝","AX":"𑄃𑄣𑄚𑄴𑄓𑄧 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","AZ":"𑄃𑄎𑄢𑄴𑄝𑄭𑄎𑄚𑄴","BA":"𑄝𑄧𑄥𑄴𑄚𑄨𑄠 𑄃𑄮 𑄦𑄢𑄴𑄎𑄬𑄉𑄮𑄞𑄨𑄚","BB":"𑄝𑄢𑄴𑄝𑄘𑄮𑄌𑄴","BD":"𑄝𑄁𑄣𑄘𑄬𑄌𑄴","BE":"𑄝𑄬𑄣𑄴𑄎𑄨𑄠𑄟𑄴","BF":"𑄝𑄪𑄢𑄴𑄇𑄨𑄚 𑄜𑄥𑄮","BG":"𑄝𑄪𑄣𑄴𑄉𑄬𑄢𑄨𑄠","BH":"𑄝𑄦𑄧𑄢𑄭𑄚𑄴","BI":"𑄝𑄪𑄢𑄪𑄚𑄴𑄘𑄨","BJ":"𑄝𑄬𑄚𑄨𑄚𑄴","BL":"𑄥𑄬𑄚𑄴𑄑𑄴 𑄝𑄢𑄴𑄗𑄬𑄣𑄨𑄟𑄨","BM":"𑄝𑄢𑄴𑄟𑄪𑄓","BN":"𑄝𑄳𑄢𑄪𑄚𑄬𑄭","BO":"𑄝𑄧𑄣𑄨𑄞𑄨𑄠","BQ":"𑄇𑄳𑄠𑄢𑄨𑄝𑄨𑄠𑄚𑄴 𑄚𑄬𑄘𑄢𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄧𑄥𑄴","BR":"𑄝𑄳𑄢𑄎𑄨𑄣𑄴","BS":"𑄝𑄦𑄟 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","BT":"𑄞𑄪𑄑𑄚𑄴","BV":"𑄝𑄮𑄞𑄬𑄑𑄴 𑄞𑄨𑄘𑄳𑄠","BW":"𑄝𑄧𑄖𑄴𑄥𑄮𑄠𑄚","BY":"𑄝𑄬𑄣𑄢𑄪𑄌𑄴","BZ":"𑄝𑄬𑄣𑄨𑄎𑄴","CA":"𑄇𑄚𑄓","CC":"𑄇𑄮𑄇𑄮𑄌𑄴 (𑄇𑄨𑄣𑄨𑄁) 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","CD":"𑄇𑄧𑄋𑄴𑄉𑄮-𑄚𑄨𑄇𑄴𑄥𑄥","CF":"𑄟𑄧𑄖𑄴𑄙𑄳𑄠𑄧 𑄃𑄜𑄳𑄢𑄨𑄇𑄢𑄴𑄛𑄳𑄢𑄎𑄖𑄧𑄚𑄴𑄖𑄳𑄢𑄧","CG":"𑄇𑄧𑄋𑄴𑄉𑄮-𑄝𑄳𑄢𑄎𑄞𑄨𑄣𑄴","CH":"𑄥𑄭𑄪𑄎𑄢𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴","CI":"𑄃𑄭𑄞𑄧𑄢𑄨 𑄇𑄮𑄌𑄴𑄑𑄴","CK":"𑄇𑄪𑄇𑄪 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","CL":"𑄌𑄨𑄣𑄨","CM":"𑄇𑄳𑄠𑄟𑄬𑄢𑄪𑄚𑄴","CN":"𑄌𑄩𑄚𑄴","CO":"𑄃𑄣𑄧𑄟𑄴𑄝𑄨𑄠","CP":"𑄇𑄳𑄣𑄨𑄛𑄢𑄴𑄑𑄧𑄚𑄴 𑄃𑄭𑄣𑄳𑄠𑄚𑄳𑄓𑄴","CR":"𑄇𑄮𑄥𑄳𑄑𑄢𑄨𑄇","CU":"𑄇𑄨𑄃𑄪𑄝","CV":"𑄇𑄬𑄛𑄴𑄞𑄢𑄴𑄘𑄬","CW":"𑄇𑄨𑄃𑄪𑄢𑄥𑄃𑄮","CX":"𑄇𑄳𑄢𑄨𑄥𑄴𑄟𑄥𑄴 𑄞𑄨𑄘𑄳𑄠","CY":"𑄥𑄭𑄛𑄳𑄢𑄥𑄴","CZ":"𑄌𑄬𑄌𑄨𑄠","DE":"𑄎𑄢𑄴𑄟𑄚𑄨","DG":"𑄘𑄨𑄠𑄬𑄉𑄮 𑄉𑄢𑄴𑄥𑄨𑄠","DJ":"𑄎𑄨𑄝𑄪𑄖𑄨","DK":"𑄓𑄬𑄚𑄴𑄟𑄢𑄴𑄇𑄧","DM":"𑄓𑄮𑄟𑄨𑄚𑄨𑄇","DO":"𑄓𑄮𑄟𑄨𑄚𑄨𑄇𑄚𑄴 𑄛𑄳𑄢𑄧𑄎𑄖𑄧𑄚𑄴𑄖𑄳𑄢𑄧","DZ":"𑄃𑄢𑄴𑄎𑄬𑄢𑄨𑄠","EA":"𑄇𑄪𑄃𑄪𑄑 𑄃𑄳𑄃 𑄟𑄬𑄣𑄨𑄣","EC":"𑄄𑄇𑄪𑄠𑄬𑄓𑄧𑄢𑄴","EE":"𑄆𑄌𑄴𑄖𑄮𑄚𑄨𑄠","EG":"𑄟𑄨𑄥𑄧𑄢𑄴","EH":"𑄛𑄧𑄎𑄨𑄟𑄴 𑄥𑄦𑄢","ER":"𑄄𑄢𑄨𑄖𑄳𑄢𑄨𑄠","ES":"𑄥𑄳𑄛𑄬𑄚𑄴","ET":"𑄃𑄨𑄜𑄨𑄃𑄮𑄛𑄨𑄠","EU":"𑄄𑄃𑄪𑄢𑄮𑄛𑄩𑄠𑄧 𑄄𑄃𑄪𑄚𑄨𑄠𑄧𑄚𑄴","EZ":"EZ","FI":"𑄜𑄨𑄚𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴","FJ":"𑄜𑄨𑄎𑄨","FK":"𑄜𑄧𑄇𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","FM":"𑄟𑄭𑄇𑄳𑄢𑄮𑄚𑄬𑄥𑄨𑄠","FO":"𑄜𑄳𑄠𑄢𑄧𑄃𑄮 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","FR":"𑄜𑄳𑄢𑄚𑄴𑄥𑄴","GA":"𑄉𑄳𑄠𑄝𑄧𑄚𑄴","GB":"𑄎𑄧𑄙𑄢𑄬𑄌𑄴𑄎𑄮","GD":"𑄉𑄳𑄢𑄬𑄚𑄓","GE":"𑄎𑄧𑄢𑄴𑄎𑄨𑄠","GF":"𑄜𑄧𑄢𑄥𑄩 𑄉𑄠𑄚","GG":"𑄉𑄳𑄢𑄚𑄴𑄏𑄨","GH":"𑄊𑄚","GI":"𑄎𑄨𑄝𑄳𑄢𑄣𑄴𑄑𑄢𑄴","GL":"𑄉𑄳𑄢𑄩𑄚𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴","GM":"𑄉𑄟𑄴𑄝𑄨𑄠","GN":"𑄉𑄨𑄚𑄨","GP":"𑄉𑄪𑄠𑄘𑄬𑄣𑄯𑄛𑄴","GQ":"𑄚𑄨𑄢𑄧𑄇𑄴𑄈𑄩𑄠𑄧 𑄉𑄨𑄚𑄨","GR":"𑄉𑄳𑄢𑄨𑄌𑄴","GS":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄎𑄧𑄢𑄴𑄎𑄨𑄠 𑄃𑄮 𑄘𑄧𑄉𑄨𑄚𑄴 𑄥𑄳𑄠𑄚𑄴𑄓𑄃𑄪𑄃𑄨𑄌𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","GT":"𑄉𑄪𑄠𑄖𑄬𑄟𑄣","GU":"𑄉𑄪𑄠𑄟𑄴","GW":"𑄉𑄨𑄚𑄨-𑄝𑄨𑄥𑄃𑄪","GY":"𑄉𑄨𑄠𑄚","HK":"𑄦𑄧𑄁𑄇𑄧𑄁 𑄆𑄌𑄴𑄃𑄬𑄃𑄢𑄴 𑄌𑄩𑄚","HM":"𑄦𑄢𑄴𑄓𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠 𑄃𑄳𑄃 𑄟𑄳𑄠𑄇𑄴𑄓𑄮𑄚𑄴𑄓𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","HN":"𑄦𑄪𑄚𑄴𑄓𑄪𑄢𑄥𑄴","HR":"𑄇𑄳𑄢𑄮𑄠𑄬𑄥𑄨𑄠","HT":"𑄦𑄭𑄖𑄨","HU":"𑄦𑄧𑄋𑄴𑄉𑄬𑄢𑄨","IC":"𑄇𑄳𑄠𑄚𑄢𑄨 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","ID":"𑄄𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠","IE":"𑄃𑄠𑄢𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴","IL":"𑄄𑄎𑄴𑄢𑄠𑄬𑄣𑄴","IM":"𑄃𑄭𑄣𑄴 𑄃𑄧𑄜𑄴 𑄟𑄳𑄠𑄚𑄴","IN":"𑄞𑄢𑄧𑄖𑄴","IO":"𑄝𑄳𑄢𑄨𑄑𑄨𑄌𑄴 𑄞𑄢𑄧𑄖𑄴 𑄟𑄧𑄦𑄥𑄉𑄧𑄢𑄨𑄠𑄧 𑄞𑄨𑄘𑄳𑄠","IQ":"𑄄𑄢𑄇𑄴","IR":"𑄄𑄢𑄚𑄴","IS":"𑄃𑄭𑄥𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴","IT":"𑄄𑄖𑄣𑄨","JE":"𑄎𑄢𑄴𑄥𑄨","JM":"𑄎𑄟𑄭𑄇","JO":"𑄎𑄧𑄢𑄴𑄓𑄧𑄚𑄴","JP":"𑄎𑄛𑄚𑄴","KE":"𑄇𑄬𑄚𑄨𑄠","KG":"𑄇𑄨𑄢𑄴𑄉𑄨𑄎𑄨𑄌𑄴𑄖𑄚𑄴","KH":"𑄇𑄧𑄟𑄴𑄝𑄮𑄓𑄨𑄠","KI":"𑄇𑄨𑄢𑄨𑄝𑄖𑄨","KM":"𑄇𑄧𑄟𑄮𑄢𑄮𑄌𑄴","KN":"𑄥𑄬𑄚𑄴𑄑𑄴 𑄇𑄨𑄑𑄴𑄥𑄴 𑄃𑄮 𑄚𑄬𑄞𑄨𑄌𑄴","KP":"𑄅𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄇𑄮𑄢𑄨𑄠","KR":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄇𑄮𑄢𑄨𑄠","KW":"𑄇𑄪𑄠𑄬𑄖𑄴","KY":"𑄇𑄬𑄟𑄳𑄠𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","KZ":"𑄇𑄎𑄈𑄌𑄴𑄖𑄚𑄴","LA":"𑄣𑄃𑄮𑄌𑄴","LB":"𑄣𑄬𑄝𑄚𑄧𑄚𑄴","LC":"𑄥𑄬𑄚𑄴𑄑𑄴 𑄣𑄪𑄥𑄨𑄠","LI":"𑄣𑄨𑄌𑄬𑄚𑄴𑄥𑄳𑄑𑄬𑄃𑄨𑄚𑄴","LK":"𑄥𑄳𑄢𑄨𑄣𑄧𑄁𑄇","LR":"𑄃𑄭𑄝𑄬𑄢𑄨𑄠","LS":"𑄣𑄬𑄥𑄮𑄗𑄮","LT":"𑄣𑄨𑄗𑄪𑄠𑄚𑄨𑄠","LU":"𑄣𑄪𑄇𑄴𑄥𑄬𑄟𑄴𑄝𑄢𑄴𑄉𑄧","LV":"𑄣𑄖𑄴𑄞𑄨𑄠","LY":"𑄣𑄨𑄝𑄨𑄠","MA":"𑄟𑄮𑄢𑄧𑄇𑄴𑄇𑄮","MC":"𑄟𑄮𑄚𑄇𑄮","MD":"𑄟𑄮𑄣𑄴𑄘𑄞𑄨𑄠","ME":"𑄟𑄧𑄚𑄴𑄑𑄨𑄚𑄨𑄉𑄳𑄢𑄮","MF":"𑄥𑄬𑄚𑄴𑄑𑄴 𑄟𑄢𑄴𑄑𑄨𑄚𑄴","MG":"𑄟𑄘𑄉𑄌𑄴𑄇𑄢𑄴","MH":"𑄟𑄢𑄴𑄥𑄣𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","MK":"𑄟𑄳𑄠𑄥𑄓𑄮𑄚𑄨𑄠","ML":"𑄟𑄣𑄨","MM":"𑄟𑄠𑄚𑄴𑄟𑄢𑄴 (𑄝𑄢𑄴𑄟)","MN":"𑄟𑄧𑄋𑄴𑄉𑄮𑄣𑄨𑄠","MO":"𑄟𑄳𑄠𑄇𑄃𑄮 𑄆𑄌𑄴𑄃𑄬𑄃𑄢𑄴 𑄌𑄩𑄚","MP":"𑄅𑄪𑄖𑄴𑄖𑄮𑄉𑄎𑄢𑄴 𑄟𑄢𑄨𑄠𑄚 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","MQ":"𑄟𑄢𑄴𑄑𑄨𑄚𑄨𑄇𑄴","MR":"𑄟𑄧𑄢𑄨𑄖𑄚𑄨𑄠","MS":"𑄟𑄧𑄚𑄴𑄑𑄴𑄥𑄬𑄢𑄑𑄴","MT":"𑄟𑄣𑄴𑄑","MU":"𑄟𑄧𑄢𑄨𑄥𑄥𑄴","MV":"𑄟𑄣𑄴𑄘𑄨𑄛𑄴","MW":"𑄟𑄣𑄃𑄪𑄃𑄨","MX":"𑄟𑄬𑄇𑄴𑄥𑄨𑄇𑄮","MY":"𑄟𑄣𑄴𑄠𑄬𑄥𑄨𑄠","MZ":"𑄟𑄮𑄎𑄟𑄴𑄝𑄨𑄇𑄴","NA":"𑄚𑄟𑄨𑄝𑄨𑄠","NC":"𑄚𑄱 𑄇𑄳𑄠𑄣𑄬𑄓𑄮𑄚𑄨𑄠","NE":"𑄚𑄭𑄎𑄢𑄴","NF":"𑄚𑄨𑄢𑄴𑄜𑄮𑄇𑄴 𑄞𑄨𑄘𑄳𑄠","NG":"𑄚𑄭𑄎𑄬𑄢𑄨𑄠","NI":"𑄚𑄨𑄇𑄢𑄉𑄪𑄠","NL":"𑄚𑄬𑄘𑄢𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴𑄥𑄴","NO":"𑄚𑄧𑄢𑄴𑄃𑄮𑄠𑄬","NP":"𑄚𑄬𑄛𑄣𑄴","NR":"𑄚𑄃𑄪𑄢𑄪","NU":"𑄚𑄨𑄃𑄪𑄠𑄬","NZ":"𑄚𑄨𑄃𑄪𑄎𑄨𑄣𑄳𑄠𑄚𑄴𑄓𑄴","OM":"𑄃𑄮𑄟𑄚𑄴","PA":"𑄛𑄚𑄟","PE":"𑄛𑄬𑄢𑄪","PF":"𑄜𑄧𑄢𑄥𑄩 𑄛𑄧𑄣𑄨𑄚𑄬𑄥𑄨𑄠","PG":"𑄛𑄛𑄪𑄠 𑄚𑄨𑄃𑄪 𑄉𑄨𑄚𑄨","PH":"𑄜𑄨𑄣𑄨𑄛𑄭𑄚𑄴","PK":"𑄛𑄇𑄨𑄌𑄴𑄖𑄚𑄴","PL":"𑄛𑄮𑄣𑄳𑄠𑄚𑄴𑄓𑄴","PM":"𑄥𑄬𑄚𑄴𑄑𑄴 𑄛𑄨𑄠𑄬𑄢𑄴 𑄃𑄮 𑄟𑄨𑄢𑄪𑄠𑄬𑄣𑄧𑄚𑄴","PN":"𑄛𑄨𑄇𑄴𑄇𑄬𑄠𑄢𑄴𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","PR":"𑄛𑄪𑄠𑄬𑄢𑄴𑄖𑄮 𑄢𑄨𑄇𑄮","PS":"𑄜𑄨𑄣𑄨𑄌𑄴𑄖𑄨𑄚𑄴 𑄎𑄉𑄊𑄚𑄨","PT":"𑄛𑄧𑄢𑄴𑄖𑄪𑄉𑄣𑄴","PW":"𑄛𑄣𑄃𑄪","PY":"𑄛𑄳𑄠𑄢𑄉𑄪𑄠𑄬","QA":"𑄇𑄖𑄢𑄴","QO":"𑄃𑄅𑄪𑄑𑄣𑄭𑄚𑄨𑄁 𑄃𑄮𑄥𑄚𑄨𑄠","RE":"𑄢𑄨𑄃𑄨𑄃𑄪𑄚𑄨𑄠𑄧𑄚𑄴","RO":"𑄢𑄮𑄟𑄚𑄨𑄠","RS":"𑄥𑄢𑄴𑄝𑄨𑄠","RU":"𑄢𑄥𑄨𑄠","RW":"𑄢𑄪𑄠𑄚𑄴𑄓","SA":"𑄥𑄯𑄘𑄨 𑄃𑄢𑄧𑄝𑄴","SB":"𑄥𑄧𑄣𑄮𑄟𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","SC":"𑄥𑄨𑄥𑄨𑄣𑄨","SD":"𑄥𑄪𑄘𑄚𑄴","SE":"𑄥𑄭𑄪𑄓𑄬𑄚𑄴","SG":"𑄥𑄨𑄋𑄴𑄉𑄛𑄪𑄢𑄴","SH":"𑄥𑄬𑄚𑄴𑄑𑄴 𑄦𑄬𑄣𑄬𑄚","SI":"𑄥𑄳𑄣𑄮𑄞𑄚𑄨𑄠","SJ":"𑄥𑄣𑄴𑄝𑄢𑄴𑄓𑄴 𑄃𑄮 𑄎𑄚𑄴 𑄟𑄬𑄠𑄬𑄚𑄴","SK":"𑄥𑄳𑄣𑄮𑄞𑄇𑄨𑄠","SL":"𑄥𑄨𑄠𑄬𑄢𑄣𑄨𑄃𑄮𑄚𑄴","SM":"𑄥𑄚𑄴 𑄟𑄢𑄨𑄚𑄮","SN":"𑄥𑄬𑄚𑄬𑄉𑄣𑄴","SO":"𑄥𑄮𑄟𑄣𑄨𑄠","SR":"𑄥𑄪𑄢𑄨𑄚𑄟𑄴","SS":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄥𑄪𑄘𑄚𑄴","ST":"𑄥𑄃𑄮𑄑𑄟 𑄃𑄮 𑄛𑄳𑄢𑄨𑄚𑄴𑄥𑄨𑄛𑄨","SV":"𑄆𑄣𑄴 𑄥𑄣𑄴𑄞𑄬𑄘𑄧𑄢𑄴","SX":"𑄥𑄨𑄚𑄴𑄑𑄴 𑄟𑄢𑄴𑄑𑄬𑄚𑄴","SY":"𑄥𑄨𑄢𑄨𑄠","SZ":"𑄥𑄮𑄠𑄎𑄨𑄣𑄳𑄠𑄚𑄴𑄓𑄴","TA":"𑄑𑄳𑄢𑄌𑄴𑄑𑄚𑄴 𑄓 𑄇𑄪𑄚𑄴𑄦","TC":"𑄖𑄪𑄢𑄴𑄇𑄧𑄌𑄴 𑄃𑄮 𑄇𑄭𑄇𑄮𑄌𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","TD":"𑄌𑄘𑄴","TF":"𑄜𑄢𑄥𑄩 𑄘𑄧𑄉𑄨𑄚𑄧 𑄎𑄉","TG":"𑄑𑄮𑄉𑄮","TH":"𑄗𑄭𑄣𑄳𑄠𑄚𑄴𑄓𑄴","TJ":"𑄖𑄎𑄨𑄇𑄴𑄥𑄳𑄗𑄚𑄴","TK":"𑄑𑄮𑄇𑄬𑄣𑄃𑄪","TL":"𑄖𑄨𑄟𑄪𑄢𑄴-𑄣𑄬𑄌𑄴𑄖𑄬","TM":"𑄖𑄪𑄢𑄴𑄇𑄧𑄟𑄬𑄚𑄨𑄌𑄴𑄖𑄚𑄴","TN":"𑄖𑄨𑄃𑄪𑄚𑄨𑄥𑄨𑄠","TO":"𑄑𑄮𑄋𑄴𑄉","TR":"𑄖𑄪𑄢𑄧𑄌𑄴𑄇𑄧","TT":"𑄖𑄳𑄢𑄨𑄚𑄨𑄚𑄘𑄴 𑄃𑄮 𑄑𑄮𑄝𑄳𑄠𑄉𑄮","TV":"𑄑𑄪𑄞𑄣𑄪","TW":"𑄖𑄭𑄤𑄚𑄴","TZ":"𑄖𑄚𑄴𑄎𑄚𑄨𑄠","UA":"𑄃𑄨𑄃𑄪𑄇𑄳𑄢𑄬𑄚𑄴","UG":"𑄅𑄉𑄚𑄴𑄓","UM":"𑄎𑄧𑄙𑄢𑄬𑄌𑄴𑄎𑄮𑄢𑄴 𑄦𑄭𑄇𑄪𑄢𑄬 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","UN":"𑄎𑄘𑄨𑄥𑄧𑄁𑄊𑄧","US":"𑄟𑄢𑄴𑄇𑄨𑄚𑄴 𑄎𑄧𑄙𑄢𑄬𑄌𑄴𑄎𑄮","UY":"𑄅𑄪𑄢𑄪𑄉𑄪𑄠𑄬","UZ":"𑄅𑄪𑄎𑄴𑄝𑄬𑄇𑄨𑄌𑄴𑄖𑄚𑄴","VA":"𑄞𑄳𑄠𑄑𑄨𑄇𑄚𑄴 𑄥𑄨𑄑𑄨","VC":"𑄥𑄬𑄚𑄴𑄑𑄴 𑄞𑄨𑄚𑄴𑄥𑄬𑄚𑄴𑄑𑄴 𑄃𑄮 𑄘𑄳𑄠 𑄉𑄳𑄢𑄬𑄚𑄓𑄨𑄚𑄴𑄥𑄴","VE":"𑄞𑄬𑄚𑄬𑄎𑄪𑄠𑄬𑄣","VG":"𑄝𑄳𑄢𑄨𑄑𑄨𑄌𑄴 𑄞𑄢𑄴𑄎𑄨𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","VI":"𑄟𑄢𑄴𑄇𑄨𑄚𑄴 𑄎𑄧𑄙𑄢𑄬𑄌𑄴𑄎𑄮𑄢𑄴 𑄞𑄢𑄴𑄎𑄨𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄳𑄠","VN":"𑄞𑄨𑄠𑄬𑄖𑄴𑄚𑄟𑄴","VU":"𑄞𑄚𑄪𑄠𑄑𑄪","WF":"𑄤𑄣𑄨𑄌𑄴 𑄃𑄮 𑄜𑄪𑄑𑄪𑄚","WS":"𑄥𑄟𑄮𑄠","XA":"XA","XB":"XB","XK":"𑄇𑄧𑄥𑄮𑄞𑄮","YE":"𑄃𑄨𑄠𑄬𑄟𑄬𑄚𑄴","YT":"𑄟𑄠𑄮𑄖𑄴𑄖𑄬","ZA":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄜𑄳𑄢𑄨𑄇","ZM":"𑄎𑄟𑄴𑄝𑄨𑄠","ZW":"𑄎𑄨𑄟𑄴𑄝𑄝𑄪𑄠𑄬","ZZ":"𑄃𑄨𑄌𑄨𑄚𑄴 𑄎𑄉"},"short":{"GB":"𑄄𑄃𑄪𑄇𑄬","HK":"𑄦𑄧𑄁𑄇𑄧𑄁","MO":"𑄟𑄳𑄠𑄇𑄃𑄮","PS":"𑄜𑄨𑄣𑄨𑄌𑄴𑄖𑄨𑄚𑄴","UN":"𑄃𑄨𑄃𑄪𑄃𑄬𑄚𑄴","US":"𑄃𑄨𑄃𑄪𑄃𑄬𑄌𑄴"},"narrow":{}},"script":{"long":{"Adlm":"Adlm","Aghb":"Aghb","Ahom":"Ahom","Arab":"𑄃𑄢𑄧𑄝𑄨","Aran":"Aran","Armi":"𑄃𑄢𑄧𑄟𑄨","Armn":"𑄃𑄢𑄴𑄟𑄬𑄚𑄩𑄠𑄧","Avst":"𑄃𑄞𑄬𑄥𑄧𑄖𑄚𑄴","Bali":"𑄝𑄣𑄩𑄠𑄧","Bamu":"Bamu","Bass":"Bass","Batk":"𑄖𑄑𑄇𑄴","Beng":"𑄝𑄁𑄣","Bhks":"Bhks","Blis":"𑄝𑄳𑄣𑄨𑄌𑄴𑄛𑄳𑄢𑄧𑄖𑄩𑄇𑄴","Bopo":"𑄝𑄮𑄛𑄮𑄟𑄮𑄜𑄮","Brah":"𑄝𑄳𑄢𑄟𑄴𑄦𑄴𑄟𑄩","Brai":"𑄝𑄳𑄢𑄳𑄆𑄬𑄣𑄴","Bugi":"𑄝𑄪𑄉𑄨","Buhd":"𑄝𑄪𑄦𑄨𑄓𑄴","Cakm":"𑄌𑄇𑄴𑄟","Cans":"𑄎𑄧𑄙 𑄇𑄚𑄓𑄨𑄠𑄚𑄴 𑄃𑄳𑄠𑄝𑄳𑄢𑄮𑄎𑄨𑄚𑄨𑄠𑄚𑄴 𑄥𑄨𑄣𑄬𑄝𑄨𑄇𑄴𑄥𑄧","Cari":"𑄇𑄳𑄠𑄢𑄨𑄠𑄚𑄴","Cham":"𑄌𑄳𑄠𑄟𑄴","Cher":"𑄌𑄬𑄇𑄮𑄇𑄨","Chrs":"Chrs","Cirt":"𑄇𑄨𑄢𑄴𑄑𑄧","Copt":"𑄇𑄮𑄛𑄴𑄑𑄨𑄇𑄴","Cprt":"𑄥𑄭𑄛𑄳𑄢𑄮𑄠𑄬𑄖𑄴","Cyrl":"𑄥𑄨𑄢𑄨𑄣𑄨𑄇𑄴","Cyrs":"𑄛𑄪𑄢𑄮𑄚𑄨 𑄌𑄢𑄴𑄌𑄧 𑄥𑄳𑄣𑄞𑄮𑄚𑄨𑄇𑄴 𑄥𑄨𑄢𑄨𑄣𑄨𑄇𑄴","Deva":"𑄘𑄬𑄛𑄴𑄚𑄉𑄧𑄢𑄨","Diak":"Diak","Dogr":"Dogr","Dsrt":"𑄘𑄬𑄥𑄬𑄢𑄖𑄴","Dupl":"Dupl","Egyd":"𑄟𑄨𑄥𑄧𑄢𑄩𑄠𑄧 𑄓𑄬𑄟𑄮𑄑𑄨𑄇𑄴","Egyh":"𑄟𑄨𑄥𑄧𑄢𑄩𑄠𑄧 𑄦𑄠𑄴𑄢𑄬𑄑𑄨𑄇𑄴","Egyp":"𑄟𑄨𑄥𑄧𑄢𑄩𑄠𑄧 𑄦𑄠𑄢𑄮𑄉𑄳𑄣𑄨𑄛𑄴","Elba":"Elba","Elym":"Elym","Ethi":"𑄃𑄨𑄗𑄨𑄃𑄮𑄛𑄨𑄠𑄧","Geok":"𑄎𑄧𑄢𑄴𑄎𑄨𑄠𑄧 𑄈𑄪𑄖𑄴𑄥𑄪𑄢𑄨","Geor":"𑄎𑄧𑄢𑄴𑄎𑄨𑄠𑄚𑄴","Glag":"𑄉𑄳𑄣𑄉𑄮𑄣𑄨𑄑𑄨𑄇𑄴","Gong":"Gong","Gonm":"Gonm","Goth":"𑄉𑄮𑄗𑄨𑄇𑄴","Gran":"Gran","Grek":"𑄉𑄳𑄢𑄨𑄇𑄴","Gujr":"𑄉𑄪𑄎𑄴𑄢𑄑𑄨","Guru":"𑄉𑄪𑄢𑄪𑄟𑄪𑄈𑄨","Hanb":"𑄦𑄳𑄠𑄚𑄴𑄝𑄨","Hang":"𑄦𑄋𑄴𑄉𑄪𑄣𑄴","Hani":"𑄦𑄳𑄠𑄚𑄴","Hano":"𑄦𑄳𑄠𑄚𑄪𑄚𑄪","Hans":"𑄅𑄪𑄎𑄪𑄅𑄪𑄏𑄫","Hant":"𑄢𑄨𑄘𑄨𑄥𑄪𑄘𑄮𑄟𑄴","Hatr":"Hatr","Hebr":"𑄦𑄨𑄛𑄴𑄝𑄳𑄢𑄪","Hira":"𑄦𑄨𑄢𑄉𑄚","Hluw":"Hluw","Hmng":"𑄜𑄦𑄃𑄮𑄟𑄧𑄋𑄴","Hmnp":"Hmnp","Hrkt":"𑄎𑄛𑄚𑄨 𑄦𑄧𑄢𑄧𑄇𑄴","Hung":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄦𑄋𑄴𑄉𑄬𑄢𑄨𑄠𑄧","Inds":"𑄥𑄨𑄚𑄴𑄙𑄪","Ital":"𑄛𑄪𑄢𑄮𑄚𑄩 𑄃𑄨𑄖𑄣𑄨","Jamo":"𑄎𑄳𑄠𑄟𑄮","Java":"𑄎𑄞𑄚𑄨𑄎𑄴","Jpan":"𑄎𑄛𑄚𑄩","Kali":"𑄇𑄠𑄦𑄧𑄣𑄨","Kana":"𑄇𑄑𑄇𑄚","Khar":"𑄈𑄢𑄮𑄌𑄴𑄒𑄩","Khmr":"𑄈𑄬𑄟𑄬𑄢𑄴","Khoj":"Khoj","Kits":"Kits","Knda":"𑄇𑄚𑄢","Kore":"𑄇𑄮𑄢𑄨𑄠𑄚𑄴","Kthi":"𑄇𑄭𑄗𑄨","Lana":"𑄣𑄚𑄳𑄦","Laoo":"𑄣𑄃𑄮","Latf":"𑄜𑄳𑄢𑄇𑄴𑄑𑄪𑄢𑄴 𑄣𑄳𑄠𑄑𑄨𑄚𑄴","Latg":"𑄉𑄳𑄠𑄣𑄨𑄇𑄴 𑄣𑄳𑄠𑄑𑄨𑄚𑄴","Latn":"𑄣𑄳𑄠𑄑𑄨𑄚𑄴","Lepc":"𑄣𑄬𑄛𑄴𑄌","Limb":"𑄣𑄨𑄟𑄴𑄝𑄪","Lina":"𑄣𑄨𑄚𑄨𑄠𑄢𑄴 𑄆","Linb":"𑄣𑄨𑄚𑄨𑄠𑄢𑄴 𑄝𑄨","Lisu":"Lisu","Lyci":"𑄣𑄭𑄥𑄨𑄠𑄚𑄴","Lydi":"𑄣𑄭𑄓𑄨𑄠𑄚𑄴","Mahj":"Mahj","Maka":"Maka","Mand":"𑄟𑄳𑄠𑄚𑄴𑄓𑄠𑄩𑄚𑄴","Mani":"𑄟𑄳𑄠𑄚𑄨𑄌𑄭𑄚𑄴","Marc":"Marc","Maya":"𑄟𑄠𑄚𑄴 𑄦𑄠𑄢𑄮𑄉𑄳𑄣𑄨𑄛𑄴","Medf":"Medf","Mend":"Mend","Merc":"Merc","Mero":"𑄟𑄬𑄢𑄮𑄃𑄨𑄑𑄨𑄇𑄴","Mlym":"𑄟𑄣𑄠𑄣𑄟𑄴","Modi":"Modi","Mong":"𑄟𑄮𑄋𑄴𑄉𑄮𑄣𑄩𑄠𑄧","Moon":"𑄟𑄪𑄚𑄴","Mroo":"Mroo","Mtei":"𑄟𑄳𑄆𑄬𑄑𑄳𑄆𑄬 𑄟𑄠𑄬𑄇𑄴","Mult":"Mult","Mymr":"𑄟𑄠𑄚𑄴𑄟𑄢𑄴","Nand":"Nand","Narb":"Narb","Nbat":"Nbat","Newa":"Newa","Nkoo":"𑄃𑄬𑄚𑄴𑄇𑄮","Nshu":"Nshu","Ogam":"𑄃𑄮𑄊𑄟𑄴","Olck":"𑄃𑄮𑄣𑄴𑄌𑄨𑄇𑄨","Orkh":"𑄃𑄧𑄢𑄴𑄈𑄮𑄚𑄴","Orya":"𑄃𑄮𑄢𑄨𑄠","Osge":"Osge","Osma":"𑄃𑄮𑄥𑄟𑄚𑄨𑄠𑄧","Palm":"Palm","Pauc":"Pauc","Perm":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄛𑄢𑄴𑄟𑄨𑄇𑄴","Phag":"𑄜𑄧𑄉𑄴𑄥𑄧-𑄛","Phli":"𑄈𑄧𑄘𑄨𑄖𑄧 𑄛𑄳𑄦𑄣𑄧𑄞𑄩","Phlp":"𑄥𑄧𑄣𑄴𑄑𑄢𑄴 𑄛𑄳𑄦𑄣𑄧𑄞𑄩","Phlv":"𑄛𑄪𑄌𑄴𑄖𑄧𑄇𑄴 𑄛𑄳𑄦𑄣𑄧𑄞𑄩","Phnx":"𑄜𑄨𑄚𑄨𑄥𑄩𑄠𑄧","Plrd":"𑄛𑄮𑄣𑄢𑄴𑄓𑄧 𑄙𑄧𑄚𑄨𑄇𑄴","Prti":"𑄛𑄢𑄴𑄗𑄨𑄠𑄧𑄚𑄴","Qaag":"Qaag","Rjng":"𑄢𑄬𑄎𑄳𑄠𑄋𑄴𑄉𑄧","Rohg":"Rohg","Roro":"𑄢𑄮𑄋𑄴𑄉𑄮𑄢𑄮𑄋𑄴𑄉𑄮","Runr":"𑄢𑄪𑄚𑄨𑄇𑄴","Samr":"𑄥𑄧𑄟𑄬𑄢𑄨𑄑𑄧𑄚𑄴","Sara":"𑄥𑄢𑄖𑄨","Sarb":"Sarb","Saur":"𑄥𑄯𑄢𑄌𑄴𑄑𑄳𑄢𑄧","Sgnw":"𑄌𑄨𑄚𑄴𑄦𑄧 𑄣𑄨𑄈𑄧𑄚𑄴","Shaw":"𑄥𑄞𑄨𑄠𑄚𑄴","Shrd":"Shrd","Sidd":"Sidd","Sind":"Sind","Sinh":"𑄥𑄨𑄁𑄦𑄧𑄣𑄨","Sogd":"Sogd","Sogo":"Sogo","Sora":"Sora","Soyo":"Soyo","Sund":"𑄥𑄚𑄴𑄘𑄚𑄨𑄎𑄴","Sylo":"𑄥𑄨𑄣𑄬𑄑𑄨 𑄚𑄉𑄧𑄢𑄨","Syrc":"𑄥𑄨𑄢𑄨𑄠𑄇𑄴","Syre":"𑄃𑄬𑄌𑄴𑄑𑄳𑄢𑄬𑄋𑄴𑄉𑄬𑄣𑄮 𑄥𑄨𑄢𑄨𑄠𑄇𑄴","Syrj":"𑄛𑄧𑄏𑄨𑄟𑄴𑄎𑄉𑄢𑄴 𑄥𑄨𑄢𑄨𑄠𑄇𑄴","Syrn":"𑄛𑄪𑄇𑄴𑄎𑄉𑄧𑄢𑄴 𑄥𑄨𑄢𑄨𑄠𑄇𑄴","Tagb":"𑄑𑄉𑄮𑄤𑄚","Takr":"Takr","Tale":"𑄖𑄭𑄣𑄬","Talu":"𑄚𑄱 𑄖𑄭 𑄣𑄪","Taml":"𑄖𑄟𑄨𑄣𑄴","Tang":"Tang","Tavt":"𑄖𑄭 𑄞𑄨𑄠𑄬𑄖𑄴","Telu":"𑄖𑄬𑄣𑄬𑄉𑄪","Teng":"𑄖𑄬𑄋𑄴𑄉𑄮𑄠𑄢𑄴","Tfng":"𑄖𑄨𑄜𑄨𑄚𑄉𑄴","Tglg":"𑄑𑄉𑄣𑄧𑄉𑄴","Thaa":"𑄗𑄚","Thai":"𑄗𑄭","Tibt":"𑄖𑄨𑄛𑄴𑄝𑄧𑄖𑄨","Tirh":"Tirh","Ugar":"𑄅𑄪𑄉𑄢𑄨𑄑𑄨𑄇𑄴","Vaii":"𑄞𑄭","Visp":"𑄘𑄬𑄉𑄧𑄎𑄭𑄘𑄳𑄠𑄬 𑄞𑄌𑄴","Wara":"Wara","Wcho":"Wcho","Xpeo":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄜𑄢𑄴𑄥𑄨","Xsux":"𑄥𑄪𑄟𑄬𑄢𑄧-𑄃𑄇𑄳𑄇𑄘𑄩𑄠𑄧 𑄇𑄩𑄣𑄧𑄇𑄴𑄢𑄪𑄛𑄴","Yezi":"Yezi","Yiii":"𑄅𑄪𑄃𑄨","Zanb":"Zanb","Zinh":"𑄇𑄭","Zmth":"𑄚𑄘𑄞𑄬𑄖𑄴 𑄌𑄨𑄚𑄴𑄦𑄧","Zsye":"𑄃𑄨𑄟𑄮𑄎𑄨","Zsym":"𑄍𑄪𑄝𑄨𑄉𑄪𑄚𑄴","Zxxx":"𑄚𑄧𑄣𑄬𑄇𑄴𑄈𑄳𑄠𑄬","Zyyy":"𑄃𑄧𑄎𑄬𑄃𑄧𑄌𑄴","Zzzz":"𑄦𑄧𑄝𑄧𑄢𑄴𑄚𑄧𑄛𑄨𑄠𑄬 𑄦𑄧𑄢𑄧𑄇𑄴"},"short":{},"narrow":{}},"currency":{"long":{"ADP":"𑄃𑄳𑄠𑄚𑄴𑄓𑄮𑄢𑄚𑄴 𑄛𑄬𑄥𑄬𑄖","AED":"𑄎𑄧𑄙 𑄃𑄢𑄧𑄝𑄴 𑄃𑄟𑄨𑄢𑄖𑄴 𑄘𑄨𑄢𑄴𑄦𑄟𑄴","AFA":"𑄃𑄛𑄴𑄉𑄚𑄨 (𑄷𑄿𑄸𑄽-𑄸𑄶𑄶𑄸)","AFN":"𑄃𑄜𑄴𑄉𑄚𑄴 𑄃𑄜𑄴𑄉𑄚𑄨","ALK":"ALK","ALL":"𑄃𑄣𑄴𑄝𑄬𑄚𑄨𑄠𑄚𑄴 𑄣𑄬𑄇𑄴","AMD":"𑄃𑄢𑄴𑄟𑄬𑄚𑄨𑄠𑄚𑄴 𑄘𑄳𑄢𑄟𑄴","ANG":"𑄚𑄬𑄘𑄢𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄃𑄳𑄠𑄚𑄴𑄑𑄨𑄣𑄨𑄠𑄚𑄴 𑄉𑄪𑄣𑄴𑄓𑄬𑄢𑄴","AOA":"𑄃𑄳𑄠𑄋𑄴𑄉𑄮𑄣𑄚𑄴 𑄇𑄧𑄤𑄮𑄚𑄴𑄎","AOK":"𑄃𑄳𑄠𑄋𑄴𑄉𑄮𑄣𑄚𑄴 𑄇𑄧𑄤𑄮𑄚𑄴𑄎(𑄷𑄿𑄽𑄽-𑄷𑄿𑄿𑄶)","AON":"𑄃𑄳𑄠𑄋𑄴𑄉𑄮𑄣𑄚𑄴 𑄚𑄱 𑄇𑄧𑄤𑄮𑄚𑄴𑄎(𑄷𑄿𑄿𑄻-𑄸𑄶𑄶𑄶)","AOR":"𑄃𑄳𑄠𑄋𑄴𑄉𑄮𑄣𑄚𑄴 𑄇𑄧𑄤𑄮𑄚𑄴𑄎(𑄷𑄿𑄿𑄻-𑄷𑄿𑄿𑄿)","ARA":"𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄣𑄴","ARL":"ARL","ARM":"ARM","ARP":"𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄛𑄬𑄥𑄮 (𑄷𑄿𑄾𑄹-𑄷𑄿𑄾𑄻)","ARS":"𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄛𑄬𑄥𑄮","ATS":"𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄨𑄠𑄚𑄴 𑄥𑄨𑄣𑄨𑄁","AUD":"𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴","AWG":"𑄃𑄢𑄪𑄝 𑄉𑄨𑄣𑄴𑄓𑄢𑄴","AZM":"𑄃𑄎𑄢𑄴𑄝𑄭𑄎𑄚𑄴 𑄟𑄚𑄖𑄴 (𑄷𑄿𑄿𑄹-𑄸𑄶𑄶𑄼)","AZN":"𑄃𑄎𑄢𑄴𑄝𑄭𑄎𑄚𑄴 𑄟𑄚𑄖𑄴","BAD":"𑄝𑄧𑄥𑄴𑄚𑄨𑄠 𑄃𑄳𑄃 𑄦𑄢𑄴𑄎𑄬𑄉𑄮𑄞𑄨𑄚 𑄘𑄨𑄚𑄢𑄴","BAM":"𑄝𑄧𑄥𑄴𑄚𑄨𑄠 𑄃𑄳𑄃 𑄦𑄢𑄴𑄎𑄬𑄉𑄮𑄞𑄨𑄚 𑄟𑄢𑄴𑄇𑄴","BAN":"BAN","BBD":"𑄝𑄢𑄴𑄝𑄬𑄓𑄮𑄎𑄴 𑄓𑄧𑄣𑄢𑄴","BDT":"𑄝𑄁𑄣𑄘𑄬𑄥𑄨 𑄑𑄬𑄋","BEC":"𑄝𑄬𑄣𑄴𑄘𑄎𑄨𑄠𑄚𑄴 𑄜𑄳𑄢𑄋𑄴𑄇𑄴 (𑄝𑄮𑄘𑄮𑄣𑄬𑄭𑄛𑄢𑄬)","BEF":"𑄝𑄬𑄣𑄴𑄘𑄎𑄨𑄠𑄚𑄴 𑄜𑄳𑄢𑄋𑄴𑄇𑄴","BEL":"𑄝𑄬𑄣𑄴𑄘𑄎𑄨𑄠𑄚𑄴 𑄜𑄳𑄢𑄋𑄴𑄇𑄴 (𑄃𑄢𑄴𑄗𑄨𑄇𑄴)","BGL":"𑄝𑄪𑄣𑄴𑄉𑄬𑄢𑄩𑄠𑄧 𑄦𑄢𑄴𑄓𑄴 𑄣𑄬𑄞𑄴","BGM":"BGM","BGN":"𑄝𑄪𑄣𑄴𑄉𑄬𑄢𑄩𑄠𑄧 𑄚𑄱 𑄣𑄬𑄞𑄴","BGO":"BGO","BHD":"𑄝𑄦𑄧𑄢𑄭𑄚𑄨 𑄘𑄨𑄚𑄢𑄴","BIF":"𑄝𑄪𑄢𑄪𑄚𑄴𑄓𑄨 𑄜𑄳𑄢𑄋𑄴𑄇𑄴","BMD":"𑄝𑄢𑄴𑄟𑄨𑄅𑄪𑄓𑄚𑄴 𑄓𑄧𑄣𑄢𑄴","BND":"𑄝𑄳𑄢𑄪𑄚𑄬𑄭 𑄓𑄧𑄣𑄢𑄴","BOB":"𑄝𑄧𑄣𑄨𑄞𑄨𑄠𑄚𑄮","BOL":"BOL","BOP":"𑄝𑄧𑄣𑄨𑄞𑄨𑄠𑄚𑄴 𑄛𑄬𑄥𑄮","BOV":"𑄝𑄧𑄣𑄨𑄞𑄨𑄠𑄚𑄴 𑄟𑄧𑄞𑄴𑄓𑄮𑄣𑄴","BRB":"𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄇𑄳𑄢𑄪𑄎𑄬𑄠𑄧𑄢𑄮𑄚𑄮𑄞𑄮 (𑄷𑄿𑄼𑄽-𑄷𑄿𑄾𑄼)","BRC":"𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄇𑄳𑄢𑄪𑄎𑄬𑄭𑄓𑄅𑄪","BRE":"𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄇𑄳𑄢𑄪𑄎𑄬𑄠𑄧𑄢𑄮 (𑄷𑄿𑄿𑄶-𑄷𑄿𑄿𑄹)","BRL":"𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄬𑄣𑄴","BRN":"𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄝𑄳𑄢𑄪𑄎𑄬𑄭𑄓𑄮 𑄚𑄮𑄞𑄮","BRR":"𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄝𑄳𑄢𑄪𑄎𑄬𑄠𑄧𑄢𑄮","BRZ":"BRZ","BSD":"𑄝𑄦𑄟𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴","BTN":"𑄞𑄪𑄑𑄚𑄨 𑄃𑄬𑄚𑄴𑄉𑄪𑄣𑄴𑄑𑄳𑄢𑄟𑄴𑄛𑄴","BUK":"𑄝𑄧𑄢𑄴𑄟𑄨 𑄇𑄨𑄠𑄖𑄴","BWP":"𑄝𑄧𑄖𑄴𑄥𑄮𑄠𑄚 𑄛𑄪𑄣","BYB":"𑄝𑄬𑄣𑄢𑄪𑄥𑄨𑄠𑄚𑄴 𑄚𑄨𑄅𑄪 𑄢𑄪𑄝𑄬𑄣𑄴 (𑄷𑄿𑄿𑄺-𑄷𑄿𑄿𑄿)","BYN":"𑄝𑄬𑄣𑄢𑄪𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴","BYR":"𑄝𑄬𑄣𑄢𑄪𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴(𑄸𑄶𑄶𑄶-𑄸𑄶𑄷𑄼)","BZD":"𑄝𑄬𑄣𑄨𑄎𑄴 𑄓𑄧𑄣𑄢𑄴","CAD":"𑄇𑄚𑄓𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴","CDF":"𑄇𑄧𑄋𑄴𑄉𑄮𑄣𑄨𑄌𑄴 𑄜𑄳𑄢𑄁𑄇𑄴","CHE":"CHE","CHF":"𑄥𑄭𑄪𑄥𑄴 𑄜𑄳𑄢𑄀","CHW":"CHW","CLE":"CLE","CLF":"𑄌𑄨𑄣𑄨𑄠𑄚𑄴 𑄃𑄪𑄚𑄨𑄘𑄘𑄬𑄥𑄴 𑄘𑄨 𑄜𑄮𑄟𑄬𑄚𑄴𑄖𑄮","CLP":"𑄌𑄨𑄣𑄨 𑄛𑄬𑄥𑄮","CNH":"CNH","CNX":"CNX","CNY":"𑄌𑄩𑄚 𑄠𑄪𑄠𑄚𑄴","COP":"𑄇𑄧𑄣𑄮𑄟𑄴𑄝𑄨𑄠𑄚𑄴 𑄛𑄬𑄥𑄮","COU":"𑄃𑄪𑄚𑄨𑄘𑄖𑄴 𑄘𑄨 𑄞𑄳𑄠𑄣𑄮𑄢𑄴 𑄢𑄨𑄠𑄬𑄣𑄴","CRC":"𑄇𑄮𑄥𑄴𑄑𑄢𑄨𑄇 𑄇𑄮𑄣𑄮𑄚𑄴","CSD":"𑄛𑄪𑄢𑄮𑄚𑄨 𑄥𑄢𑄴𑄝𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴","CSK":"𑄌𑄬𑄇𑄮𑄥𑄳𑄣𑄮𑄞𑄇𑄴 𑄦𑄢𑄴𑄓𑄴 𑄇𑄮𑄢𑄪𑄚","CUC":"𑄇𑄨𑄅𑄪𑄝𑄚𑄴 𑄝𑄮𑄘𑄮𑄣𑄨𑄛𑄢𑄬 𑄛𑄬𑄥𑄮","CUP":"𑄇𑄨𑄅𑄪𑄝𑄚𑄴 𑄛𑄬𑄥𑄮","CVE":"𑄇𑄬𑄛𑄴 𑄞𑄢𑄴𑄘𑄬 𑄃𑄬𑄥𑄴𑄇𑄪𑄓𑄮","CYP":"𑄥𑄭𑄛𑄳𑄢𑄥𑄴 𑄛𑄃𑄪𑄚𑄴𑄓𑄴","CZK":"𑄌𑄬𑄇𑄴 𑄛𑄳𑄢𑄧𑄎𑄖𑄧𑄚𑄴𑄖𑄳𑄢𑄧 𑄇𑄮𑄢𑄪𑄚","DDM":"𑄛𑄪𑄉𑄬𑄘𑄨 𑄎𑄢𑄴𑄟𑄚𑄴 𑄟𑄢𑄴𑄇𑄴","DEM":"𑄓𑄧𑄠𑄧𑄌𑄴 𑄟𑄢𑄴𑄇𑄴","DJF":"𑄎𑄨𑄝𑄪𑄖𑄨 𑄜𑄳𑄢𑄁𑄇𑄴","DKK":"𑄓𑄳𑄠𑄚𑄨𑄌𑄴 𑄇𑄳𑄢𑄯𑄚𑄴","DOP":"𑄓𑄮𑄟𑄨𑄚𑄨𑄇𑄚𑄴 𑄛𑄬𑄥𑄮","DZD":"𑄃𑄢𑄴𑄎𑄬𑄢𑄩𑄠𑄧 𑄘𑄨𑄚𑄢𑄴","ECS":"𑄃𑄨𑄇𑄪𑄠𑄓𑄮𑄢𑄴 𑄥𑄪𑄇𑄳𑄢𑄬","ECV":"𑄃𑄨𑄇𑄪𑄠𑄓𑄮𑄢𑄴 𑄃𑄪𑄚𑄨𑄘𑄘𑄬𑄌𑄴 𑄘𑄨 𑄞𑄬𑄣𑄧𑄢𑄴 𑄇𑄧𑄚𑄴𑄥𑄴𑄖𑄚𑄴𑄖𑄬 (𑄃𑄨𑄅𑄪𑄞𑄨𑄥𑄨)","EEK":"𑄃𑄬𑄌𑄴𑄖𑄮𑄚𑄨𑄠 𑄇𑄳𑄢𑄪𑄚𑄨","EGP":"𑄟𑄨𑄥𑄧𑄢𑄩𑄠𑄴 𑄛𑄅𑄪𑄚𑄴𑄓𑄴","ERN":"𑄃𑄬𑄢𑄨𑄑𑄳𑄢𑄨𑄠𑄬𑄚𑄴 𑄚𑄇𑄴𑄜","ESA":"𑄥𑄳𑄛𑄳𑄠𑄚𑄨𑄥𑄴 𑄛𑄬𑄥𑄬𑄖 (𑄃𑄬𑄇𑄴𑄇𑄭𑄪 𑄦𑄨𑄎𑄬𑄛𑄴)","ESB":"𑄥𑄳𑄛𑄳𑄠𑄚𑄨𑄥𑄴 𑄛𑄬𑄥𑄬𑄖 (𑄝𑄮𑄘𑄮𑄣𑄬𑄭 𑄛𑄢𑄬 𑄦𑄨𑄎𑄬𑄛𑄴)","ESP":"𑄥𑄳𑄛𑄳𑄠𑄚𑄨𑄥𑄴 𑄛𑄬𑄥𑄬𑄖","ETB":"𑄃𑄨𑄗𑄨𑄃𑄮𑄛𑄨𑄠𑄚𑄴 𑄝𑄨𑄢𑄴","EUR":"𑄃𑄨𑄅𑄪𑄢𑄮","FIM":"𑄜𑄨𑄚𑄨𑄥𑄴 𑄟𑄢𑄴𑄇","FJD":"𑄜𑄨𑄎𑄨 𑄓𑄧𑄣𑄢𑄴","FKP":"𑄜𑄧𑄇𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬 𑄛𑄃𑄪𑄚𑄴𑄓𑄴","FRF":"𑄜𑄧𑄢𑄥𑄨 𑄜𑄳𑄢𑄁𑄇𑄴","GBP":"𑄝𑄳𑄢𑄨𑄑𑄨𑄌𑄴 𑄛𑄃𑄪𑄚𑄴","GEK":"𑄎𑄧𑄢𑄴𑄎𑄨𑄠𑄚𑄴 𑄇𑄪𑄛𑄧𑄚𑄴 𑄣𑄢𑄨𑄖𑄴","GEL":"𑄎𑄧𑄢𑄴𑄎𑄨𑄠𑄚𑄴 𑄣𑄢𑄨","GHC":"𑄊𑄚 𑄥𑄬𑄓𑄨 (𑄷𑄿𑄽𑄿-𑄸𑄶𑄶𑄽)","GHS":"𑄊𑄚 𑄥𑄬𑄓𑄨","GIP":"𑄎𑄨𑄝𑄳𑄢𑄣𑄴𑄑𑄢𑄴 𑄛𑄅𑄪𑄚𑄳𑄓𑄴","GMD":"𑄉𑄟𑄴𑄝𑄨𑄠 𑄓𑄣𑄥𑄨","GNF":"𑄉𑄨𑄚𑄨 𑄜𑄳𑄢𑄋𑄳𑄇𑄴","GNS":"𑄉𑄨𑄚𑄨 𑄥𑄭𑄣𑄨","GQE":"𑄃𑄨𑄇𑄪𑄠𑄬𑄑𑄮𑄢𑄨𑄠𑄣𑄴 𑄉𑄨𑄚𑄨 𑄃𑄨𑄇𑄪𑄠𑄨𑄣𑄨","GRD":"𑄉𑄳𑄢𑄩𑄇𑄴 𑄘𑄳𑄢𑄌𑄴𑄟","GTQ":"𑄉𑄪𑄠𑄖𑄬𑄟𑄣𑄧 𑄇𑄪𑄠𑄬𑄖𑄴𑄎𑄣𑄴","GWE":"𑄛𑄧𑄢𑄴𑄖𑄪𑄉𑄨𑄎𑄴 𑄉𑄨𑄚𑄨 𑄃𑄬𑄥𑄴𑄇𑄪𑄓𑄮","GWP":"𑄉𑄨𑄚𑄨 𑄥𑄨𑄥𑄅𑄪 𑄛𑄬𑄥𑄮","GYD":"𑄉𑄭𑄠𑄬𑄚 𑄓𑄧𑄣𑄢𑄴","HKD":"𑄦𑄧𑄁𑄇𑄧𑄁 𑄓𑄧𑄣𑄢𑄴","HNL":"𑄦𑄪𑄚𑄴𑄓𑄪𑄢𑄥𑄴 𑄣𑄬𑄟𑄴𑄛𑄨𑄢","HRD":"𑄇𑄳𑄢𑄮𑄠𑄬𑄥𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴","HRK":"𑄇𑄳𑄢𑄮𑄠𑄬𑄥𑄨𑄠𑄚𑄴 𑄇𑄪𑄚","HTG":"𑄦𑄭𑄖𑄨 𑄉𑄯𑄢𑄴𑄘𑄬","HUF":"𑄦𑄋𑄴𑄉𑄬𑄢𑄨𑄠𑄚𑄴 𑄜𑄮𑄢𑄨𑄚𑄳𑄑𑄴","IDR":"𑄃𑄨𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨𑄠𑄳𑄦𑄴","IEP":"𑄃𑄨𑄢𑄨𑄌𑄴 𑄛𑄅𑄪𑄚𑄳𑄓𑄴","ILP":"𑄃𑄨𑄥𑄳𑄢𑄭𑄣𑄨 𑄛𑄅𑄪𑄚𑄳𑄓𑄴","ILR":"ILR","ILS":"𑄃𑄨𑄥𑄳𑄢𑄭𑄣𑄨 𑄚𑄱 𑄥𑄬𑄇𑄬𑄣𑄴","INR":"𑄃𑄨𑄚𑄴𑄘𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨","IQD":"𑄃𑄨𑄢𑄇𑄨 𑄘𑄨𑄚𑄢𑄴","IRR":"𑄃𑄨𑄢𑄚𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄣𑄴","ISJ":"ISJ","ISK":"𑄃𑄭𑄥𑄴𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄇𑄳𑄢𑄯𑄚𑄴","ITL":"𑄃𑄨𑄖𑄣𑄨𑄠𑄧 𑄣𑄨𑄢","JMD":"𑄎𑄟𑄭𑄇𑄚𑄴 𑄓𑄧𑄣𑄢𑄴","JOD":"𑄎𑄧𑄢𑄴𑄓𑄚𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴","JPY":"𑄎𑄛𑄚𑄨 𑄃𑄨𑄠𑄬𑄚𑄴","KES":"𑄇𑄬𑄚𑄨𑄠𑄚𑄴 𑄥𑄨𑄣𑄨𑄁","KGS":"𑄇𑄨𑄢𑄴𑄉𑄨𑄎𑄴𑄃𑄨𑄥𑄴𑄖𑄚𑄴 𑄥𑄮𑄟𑄴","KHR":"𑄇𑄧𑄟𑄴𑄝𑄮𑄓𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄬𑄣𑄴","KMF":"𑄇𑄧𑄟𑄴𑄝𑄮𑄢𑄮 𑄜𑄳𑄢𑄋𑄳𑄇𑄴","KPW":"𑄃𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄇𑄮𑄢𑄨𑄠𑄢𑄴 𑄃𑄮𑄚𑄴","KRH":"KRH","KRO":"KRO","KRW":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄇𑄮𑄢𑄨𑄠𑄢𑄴 𑄃𑄮𑄚𑄴","KWD":"𑄇𑄪𑄠𑄬𑄖𑄨 𑄘𑄨𑄚𑄢𑄴","KYD":"𑄇𑄬𑄟𑄳𑄠𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄢𑄴 𑄓𑄧𑄣𑄢𑄴","KZT":"𑄇𑄎𑄈𑄥𑄴𑄖𑄚𑄨 𑄑𑄬𑄋𑄴𑄉𑄬","LAK":"𑄣𑄬𑄅𑄪𑄥𑄚𑄴 𑄇𑄨𑄛𑄴","LBP":"𑄣𑄬𑄝𑄚𑄨𑄎𑄴 𑄛𑄅𑄪𑄚𑄳𑄓𑄴","LKR":"𑄥𑄳𑄢𑄨𑄣𑄧𑄁𑄇𑄚𑄴 𑄢𑄪𑄛𑄨","LRD":"𑄣𑄨𑄝𑄬𑄢𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴","LSL":"𑄣𑄬𑄥𑄪𑄑𑄪 𑄣𑄮𑄑𑄨","LTL":"𑄣𑄨𑄗𑄭𑄪𑄚𑄨𑄠𑄚𑄴 𑄣𑄨𑄑","LTT":"𑄣𑄨𑄗𑄭𑄪𑄚𑄨𑄠𑄚𑄴 𑄑𑄣𑄮𑄚𑄳𑄠𑄥𑄴","LUC":"𑄣𑄪𑄇𑄴𑄥𑄬𑄟𑄴𑄝𑄢𑄴𑄉𑄴 𑄝𑄮𑄘𑄮𑄣𑄬𑄝𑄢𑄴 𑄜𑄳𑄢𑄇𑄳𑄋𑄴","LUF":"𑄣𑄪𑄇𑄴𑄥𑄬𑄟𑄴𑄝𑄢𑄴𑄉𑄴 𑄜𑄳𑄢𑄇𑄳𑄋𑄴","LUL":"𑄣𑄪𑄇𑄴𑄥𑄬𑄟𑄴𑄝𑄢𑄴𑄉𑄴 𑄜𑄭𑄚𑄬𑄚𑄴𑄥𑄨𑄠𑄣𑄴 𑄜𑄳𑄢𑄇𑄳𑄋𑄴","LVL":"𑄣𑄳𑄠𑄑𑄴𑄞𑄨𑄠𑄚𑄴 𑄣𑄳𑄠𑄑𑄴𑄥𑄴","LVR":"𑄣𑄳𑄠𑄑𑄴𑄞𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄧𑄣𑄴","LYD":"𑄣𑄨𑄝𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴","MAD":"𑄟𑄮𑄢𑄮𑄇𑄳𑄦𑄚𑄴 𑄘𑄨𑄢𑄴𑄦𑄟𑄴","MAF":"𑄟𑄮𑄢𑄮𑄇𑄳𑄦𑄚𑄴 𑄜𑄳𑄢𑄋𑄳𑄇𑄴","MCF":"MCF","MDC":"MDC","MDL":"𑄟𑄮𑄣𑄴𑄓𑄮𑄞𑄚𑄴 𑄣𑄬𑄠𑄪","MGA":"𑄟𑄘𑄉𑄌𑄴𑄇𑄢𑄴 𑄃𑄢𑄨𑄠𑄢𑄨","MGF":"𑄟𑄘𑄉𑄌𑄴𑄇𑄢𑄴 𑄜𑄳𑄢𑄋𑄳𑄇𑄴","MKD":"𑄟𑄳𑄠𑄥𑄬𑄓𑄮𑄚𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴","MKN":"MKN","MLF":"𑄟𑄣𑄨 𑄜𑄳𑄢𑄋𑄳𑄇𑄴","MMK":"𑄟𑄠𑄚𑄴𑄟𑄢𑄴 𑄇𑄨𑄠𑄖𑄴","MNT":"𑄟𑄧𑄋𑄴𑄉𑄮𑄣𑄨𑄠𑄚𑄴 𑄖𑄪𑄇𑄴𑄢𑄨𑄇𑄴","MOP":"𑄟𑄳𑄠𑄇𑄳𑄠𑄃𑄮 𑄛𑄑𑄇","MRO":"𑄟𑄯𑄢𑄨𑄖𑄚𑄨𑄠𑄚𑄴 𑄃𑄮𑄃𑄪𑄉𑄭𑄪𑄠","MRU":"MRU","MTL":"𑄟𑄣𑄴𑄑 𑄣𑄨𑄢","MTP":"𑄟𑄣𑄴𑄑 𑄛𑄃𑄪𑄚𑄳𑄓𑄴","MUR":"𑄟𑄯𑄢𑄨𑄖𑄚𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨","MVP":"MVP","MVR":"𑄟𑄣𑄴𑄘𑄨𑄞𑄨𑄠𑄚𑄴 𑄢𑄪𑄜𑄨𑄠","MWK":"𑄟𑄣𑄃𑄪𑄃𑄨𑄠𑄚𑄴 𑄇𑄧𑄤𑄌𑄴","MXN":"𑄟𑄳𑄠𑄇𑄴𑄥𑄨𑄇𑄚𑄴 𑄛𑄬𑄥𑄮","MXP":"𑄟𑄳𑄠𑄇𑄴𑄥𑄨𑄇𑄚𑄴 𑄥𑄨𑄣𑄴𑄞𑄢𑄴 𑄛𑄬𑄥𑄮 (𑄷𑄾𑄼𑄷-𑄷𑄿𑄿𑄸)","MXV":"𑄟𑄬𑄇𑄴𑄥𑄨𑄇𑄚𑄴 𑄃𑄪𑄚𑄨𑄘𑄖𑄴 𑄘𑄨 𑄃𑄨𑄚𑄴𑄞𑄢𑄴𑄥𑄧𑄚𑄴(UDI)","MYR":"𑄟𑄣𑄴𑄠𑄬𑄥𑄨𑄠𑄚𑄴 𑄢𑄨𑄁𑄉𑄨𑄖𑄴","MZE":"𑄟𑄮𑄎𑄟𑄴𑄝𑄨𑄇𑄴 𑄃𑄬𑄥𑄴𑄇𑄪𑄓𑄮","MZM":"𑄛𑄪𑄢𑄮𑄚𑄨 𑄟𑄮𑄎𑄟𑄴𑄝𑄨𑄇𑄴 𑄟𑄬𑄑𑄨𑄇𑄬𑄣𑄴","MZN":"𑄟𑄮𑄎𑄟𑄴𑄝𑄨𑄇𑄴 𑄟𑄬𑄑𑄨𑄇𑄬𑄣𑄴","NAD":"𑄚𑄟𑄨𑄝𑄨𑄠 𑄓𑄧𑄣𑄢𑄴","NGN":"𑄚𑄭𑄎𑄬𑄢𑄨𑄠𑄚𑄴 𑄚𑄠𑄴𑄢","NIC":"𑄚𑄨𑄇𑄢𑄉𑄪𑄠𑄚 𑄇𑄧𑄢𑄴𑄓𑄮𑄝(𑄷𑄿𑄾𑄾-𑄷𑄿𑄿𑄷)","NIO":"𑄚𑄨𑄇𑄢𑄉𑄪𑄠𑄚 𑄇𑄧𑄢𑄴𑄓𑄮𑄝","NLG":"𑄚𑄬𑄘𑄢𑄴𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄉𑄪𑄣𑄴𑄓𑄬𑄢𑄴","NOK":"𑄚𑄧𑄢𑄴𑄃𑄮𑄠𑄬 𑄇𑄳𑄢𑄯𑄚𑄴","NPR":"𑄚𑄬𑄛𑄣𑄨 𑄢𑄪𑄛𑄨","NZD":"𑄚𑄨𑄃𑄪𑄎𑄨𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄓𑄧𑄣𑄢𑄴","OMR":"𑄃𑄮𑄟𑄚𑄨 𑄢𑄨𑄠𑄣𑄴","PAB":"𑄛𑄚𑄟 𑄝𑄬𑄣𑄴𑄝𑄮𑄠","PEI":"𑄛𑄬𑄢𑄪𑄞𑄨𑄠𑄚𑄴 𑄃𑄨𑄚𑄴𑄖𑄨","PEN":"𑄛𑄬𑄢𑄪𑄞𑄨𑄠𑄚𑄴 𑄥𑄮𑄣𑄴","PES":"𑄛𑄬𑄢𑄪𑄞𑄨𑄠𑄚𑄴 𑄥𑄮𑄣𑄴(𑄷𑄾𑄼𑄹-𑄷𑄿𑄼𑄻)","PGK":"𑄛𑄛𑄱 𑄚𑄨𑄃𑄪 𑄉𑄨𑄚𑄨 𑄉𑄨𑄚𑄨𑄠𑄚𑄴 𑄇𑄨𑄚","PHP":"𑄜𑄨𑄣𑄨𑄛𑄭𑄚𑄴 𑄛𑄬𑄥𑄮","PKR":"𑄛𑄇𑄨𑄥𑄴𑄖𑄚𑄨 𑄢𑄪𑄛𑄨","PLN":"𑄛𑄮𑄣𑄨𑄌𑄴 𑄎𑄧𑄣𑄮𑄑𑄨","PLZ":"𑄛𑄮𑄣𑄨𑄌𑄴 𑄎𑄧𑄣𑄮𑄑𑄨(𑄷𑄿𑄻𑄶-𑄷𑄿𑄿𑄻)","PTE":"𑄛𑄧𑄢𑄴𑄖𑄪𑄉𑄨𑄌𑄴 𑄃𑄬𑄥𑄴𑄇𑄪𑄓𑄮","PYG":"𑄛𑄳𑄠𑄢𑄉𑄪𑄠𑄚𑄴 𑄉𑄪𑄠𑄢𑄚𑄨","QAR":"𑄇𑄖𑄢𑄴 𑄢𑄨𑄠𑄳𑄠𑄣𑄴","RHD":"𑄢𑄮𑄓𑄬𑄥𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴","ROL":"𑄛𑄪𑄢𑄮𑄚𑄨 𑄢𑄪𑄟𑄚𑄨𑄠 𑄣𑄬𑄠𑄪","RON":"𑄢𑄪𑄟𑄚𑄨𑄠 𑄣𑄬𑄠𑄪","RSD":"𑄥𑄢𑄴𑄝𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴","RUB":"𑄢𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴","RUR":"𑄢𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄧𑄣𑄴(𑄷𑄿𑄿𑄷-𑄷𑄿𑄿𑄾)","RWF":"𑄢𑄪𑄠𑄚𑄴𑄓𑄚𑄴 𑄜𑄳𑄢𑄋𑄳𑄇𑄴","SAR":"𑄥𑄯𑄘𑄨 𑄢𑄨𑄠𑄣𑄴","SBD":"𑄥𑄧𑄣𑄮𑄟𑄧𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄢𑄴 𑄓𑄧𑄣𑄢𑄴","SCR":"𑄥𑄬𑄠𑄧𑄥𑄬𑄣𑄴𑄣𑄮𑄃𑄨𑄌𑄴 𑄢𑄪𑄛𑄨","SDD":"𑄛𑄪𑄢𑄮𑄚𑄨 𑄥𑄪𑄘𑄚𑄨 𑄘𑄨𑄚𑄢𑄴","SDG":"𑄥𑄪𑄘𑄚𑄨 𑄛𑄃𑄪𑄚𑄳𑄓𑄴","SDP":"𑄛𑄪𑄢𑄮𑄚𑄨 𑄥𑄪𑄘𑄚𑄨 𑄛𑄃𑄪𑄚𑄳𑄓𑄴","SEK":"𑄥𑄭𑄪𑄓𑄨𑄥𑄴 𑄇𑄳𑄢𑄮𑄚","SGD":"𑄥𑄨𑄁𑄉𑄛𑄪𑄢𑄴 𑄓𑄧𑄣𑄢𑄴","SHP":"𑄥𑄬𑄚𑄳𑄑𑄴 𑄦𑄬𑄣𑄬𑄚 𑄛𑄃𑄪𑄚𑄳𑄓𑄴","SIT":"𑄥𑄳𑄣𑄮𑄞𑄚𑄨𑄠 𑄑𑄮𑄣𑄢𑄴","SKK":"𑄥𑄳𑄣𑄮𑄞𑄇𑄴 𑄇𑄮𑄢𑄪𑄚","SLL":"𑄥𑄨𑄠𑄬𑄢𑄣𑄨𑄠𑄧𑄚𑄴 𑄣𑄨𑄠𑄧𑄚𑄴","SOS":"𑄥𑄮𑄟𑄣𑄨 𑄥𑄨𑄣𑄨𑄁","SRD":"𑄥𑄪𑄢𑄨𑄚𑄟𑄴 𑄓𑄧𑄣𑄢𑄴","SRG":"𑄥𑄪𑄢𑄨𑄚𑄟𑄴 𑄉𑄨𑄣𑄴𑄓𑄢𑄴","SSP":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄥𑄪𑄘𑄚𑄨 𑄛𑄃𑄪𑄚𑄳𑄓𑄴","STD":"𑄥𑄃𑄮 𑄑𑄮𑄟𑄬 𑄃𑄳𑄃 𑄛𑄳𑄢𑄨𑄚𑄴𑄥𑄨𑄛𑄬 𑄓𑄮𑄛𑄴𑄢","STN":"STN","SUR":"𑄥𑄮𑄣𑄨𑄠𑄬𑄖𑄴 𑄢𑄪𑄝𑄧𑄣𑄴","SVC":"𑄃𑄬𑄣𑄴 𑄥𑄳𑄠𑄣𑄴𑄞𑄮𑄓𑄮𑄢𑄴 𑄇𑄮𑄣𑄮𑄚𑄴","SYP":"𑄥𑄨𑄢𑄨𑄠𑄚𑄴 𑄛𑄃𑄪𑄚𑄳𑄓𑄴","SZL":"𑄥𑄮𑄠𑄎𑄨𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄣𑄨𑄣𑄋𑄴𑄉𑄬𑄚𑄨","THB":"𑄗𑄭 𑄝𑄖𑄴","TJR":"𑄖𑄎𑄨𑄇𑄨𑄌𑄴𑄖𑄚𑄴 𑄢𑄪𑄝𑄧𑄣𑄴","TJS":"𑄖𑄎𑄨𑄇𑄨𑄌𑄴𑄖𑄚𑄴 𑄥𑄮𑄟𑄮𑄚𑄨","TMM":"𑄖𑄪𑄢𑄴𑄇𑄧𑄟𑄬𑄚𑄨𑄌𑄴𑄖𑄚𑄨 𑄟𑄚𑄖𑄴 (1993–2009)","TMT":"𑄖𑄪𑄢𑄴𑄇𑄧𑄟𑄬𑄚𑄨𑄌𑄴𑄖𑄚𑄨 𑄟𑄚𑄖𑄴","TND":"𑄖𑄨𑄃𑄪𑄚𑄬𑄥𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴","TOP":"𑄑𑄮𑄋𑄴𑄉 𑄛𑄳𑄃 𑄃𑄋𑄴𑄉","TPE":"𑄖𑄨𑄟𑄪𑄢𑄴 𑄃𑄬𑄌𑄴𑄇𑄪𑄓𑄮","TRL":"𑄛𑄪𑄢𑄮𑄚𑄴 𑄖𑄪𑄢𑄴𑄇𑄨 𑄣𑄨𑄢","TRY":"𑄖𑄪𑄢𑄴𑄇𑄨 𑄣𑄨𑄢","TTD":"𑄖𑄳𑄢𑄨𑄚𑄨𑄘𑄖𑄴 𑄃𑄳𑄃 𑄑𑄮𑄝𑄉𑄮 𑄓𑄧𑄣𑄢𑄴","TWD":"𑄚𑄱 𑄦𑄭𑄤𑄚𑄴𑄓𑄧𑄣𑄢𑄴","TZS":"𑄖𑄚𑄴𑄎𑄚𑄨𑄠 𑄥𑄨𑄣𑄨𑄁","UAH":"ই𑄃𑄨𑄃𑄪𑄇𑄳𑄢𑄭𑄚𑄴 𑄢𑄨𑄛𑄴𑄚𑄨𑄠","UAK":"𑄃𑄨𑄃𑄪𑄇𑄳𑄢𑄭𑄚𑄴 𑄇𑄢𑄴𑄝𑄮𑄞𑄳𑄠𑄚𑄴𑄑𑄧𑄌𑄴","UGS":"𑄃𑄪𑄉𑄚𑄴𑄓𑄚𑄴 𑄥𑄨𑄣𑄨𑄁 (𑄷𑄿𑄼𑄼-𑄷𑄿𑄾𑄽)","UGX":"𑄃𑄪𑄉𑄚𑄴𑄓𑄚𑄴 𑄥𑄨𑄣𑄨𑄁","USD":"𑄟𑄢𑄴𑄇𑄨𑄚𑄴 𑄓𑄧𑄣𑄢𑄴","USN":"𑄟𑄢𑄴𑄇𑄨𑄚𑄴 𑄓𑄧𑄣𑄢𑄴 (𑄛𑄧𑄢𑄬 𑄘𑄨𑄚𑄴)","USS":"𑄟𑄢𑄴𑄇𑄨𑄚𑄴 𑄓𑄧𑄣𑄢𑄴 (𑄃𑄬𑄇𑄴𑄇𑄰𑄪 𑄘𑄨𑄚𑄴)","UYI":"𑄃𑄪𑄢𑄪𑄉𑄪𑄠𑄚𑄴 𑄛𑄬𑄥𑄮 𑄃𑄬𑄚𑄴 𑄃𑄪𑄚𑄨𑄘𑄘𑄬𑄌𑄴 𑄃𑄨𑄚𑄴𑄓𑄬𑄇𑄴𑄥𑄬𑄓𑄥𑄴","UYP":"𑄃𑄪𑄢𑄪𑄉𑄪𑄠𑄬 𑄛𑄬𑄥𑄮 (𑄷𑄿𑄽𑄻-𑄷𑄿𑄿𑄹)","UYU":"𑄃𑄪𑄢𑄪𑄉𑄪𑄠𑄬 𑄛𑄬𑄥𑄮","UYW":"UYW","UZS":"𑄃𑄪𑄌𑄴𑄝𑄬𑄇𑄨𑄌𑄴𑄖𑄚𑄨 𑄥𑄮𑄟𑄴","VEB":"𑄞𑄬𑄚𑄨𑄎𑄪𑄔𑄮𑄣𑄚𑄴 𑄝𑄧𑄣𑄨𑄞𑄢𑄴(𑄷𑄾𑄽𑄷-𑄸𑄶𑄶𑄾)","VEF":"𑄞𑄬𑄚𑄨𑄎𑄪𑄔𑄮𑄣𑄚𑄴 𑄝𑄧𑄣𑄨𑄞𑄢𑄴","VES":"VES","VND":"𑄞𑄨𑄠𑄬𑄖𑄴𑄚𑄟𑄨 𑄓𑄧𑄋𑄴𑄉𑄧","VNN":"VNN","VUV":"𑄞𑄚𑄪𑄠𑄖𑄪 𑄞𑄖𑄪","WST":"𑄥𑄟𑄮𑄠𑄚𑄴 𑄑𑄣","XAF":"𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴[CFA] 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴","XAG":"𑄥𑄨𑄣𑄴𑄞𑄢𑄴","XAU":"𑄉𑄮𑄣𑄳𑄓𑄴","XBA":"XBA","XBB":"XBB","XBC":"XBC","XBD":"XBD","XCD":"𑄛𑄪𑄉𑄬𑄘𑄨 𑄇𑄳𑄠𑄢𑄝𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴","XDR":"XDR","XEU":"𑄃𑄨𑄃𑄪𑄢𑄮𑄛𑄨𑄠𑄚𑄴 𑄑𑄬𑄋𑄢𑄴 𑄃𑄬𑄇𑄧𑄇𑄴","XFO":"𑄜𑄧𑄢𑄥𑄨 𑄉𑄮𑄣𑄳𑄓𑄴 𑄜𑄳𑄢𑄋𑄳𑄇𑄴","XFU":"𑄜𑄧𑄢𑄥𑄨 𑄃𑄨𑄃𑄪𑄃𑄭𑄥𑄨 𑄜𑄳𑄢𑄋𑄳𑄇𑄴","XOF":"𑄛𑄧𑄎𑄨𑄟𑄴 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴 [CFA] 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴","XPD":"𑄛𑄳𑄠𑄣𑄬𑄓𑄨𑄠𑄟𑄴","XPF":"𑄥𑄨𑄃𑄬𑄛𑄴𑄛𑄨 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴","XPT":"𑄛𑄳𑄣𑄑𑄨𑄚𑄟𑄴","XRE":"XRE","XSU":"XSU","XTS":"XTS","XUA":"XUA","XXX":"𑄦𑄧𑄝𑄢𑄴 𑄚𑄧𑄛𑄬𑄠𑄬 𑄑𑄬𑄋","YDD":"𑄃𑄨𑄠𑄬𑄟𑄬𑄚𑄨 𑄘𑄨𑄚𑄢𑄴","YER":"𑄃𑄨𑄠𑄬𑄟𑄬𑄚𑄨 𑄢𑄨𑄠𑄣𑄴","YUD":"𑄡𑄪𑄉𑄮𑄥𑄳𑄣𑄞𑄨𑄠𑄧 𑄦𑄢𑄴𑄓𑄴 𑄘𑄨𑄚𑄢𑄴","YUM":"𑄡𑄪𑄉𑄮𑄥𑄳𑄣𑄞𑄨𑄠𑄧 𑄚𑄮𑄞𑄨 𑄘𑄨𑄚𑄢𑄴","YUN":"𑄡𑄪𑄉𑄮𑄥𑄳𑄣𑄞𑄨𑄠𑄧 𑄝𑄮𑄘𑄮𑄣𑄬𑄭𑄛𑄢𑄬 𑄘𑄨𑄚𑄢𑄴","YUR":"YUR","ZAL":"ZAL","ZAR":"𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴 𑄢𑄳𑄠𑄚𑄳𑄓𑄴","ZMK":"𑄎𑄟𑄴𑄝𑄨𑄠𑄚𑄴 𑄇𑄧𑄤𑄌 (𑄷𑄿𑄼𑄾-𑄸𑄶𑄷𑄸)","ZMW":"𑄎𑄟𑄴𑄝𑄨𑄠𑄚𑄴 𑄇𑄧𑄤𑄌","ZRN":"𑄎𑄭𑄢𑄨𑄠𑄚𑄴 𑄚𑄨𑄅𑄪 𑄎𑄭𑄢𑄬 (1993–1998)","ZRZ":"𑄎𑄭𑄢𑄨𑄠𑄚𑄴 𑄚𑄨𑄅𑄪 𑄎𑄭𑄢𑄬 (1971–1993)","ZWD":"𑄎𑄨𑄟𑄴𑄝𑄝𑄪𑄠𑄬 𑄓𑄧𑄣𑄢𑄴 (𑄷𑄿𑄾𑄶-𑄸𑄶𑄶𑄾)","ZWL":"𑄎𑄨𑄟𑄴𑄝𑄝𑄪𑄠𑄬 𑄓𑄧𑄣𑄢𑄴 (𑄸𑄶𑄶𑄿)","ZWR":"𑄎𑄨𑄟𑄴𑄝𑄝𑄪𑄠𑄬 𑄓𑄧𑄣𑄢𑄴 (𑄸𑄶𑄶𑄾)"},"short":{},"narrow":{}}},"patterns":{"locale":"{0} ({1})"}},"locale":"ccp-IN"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
