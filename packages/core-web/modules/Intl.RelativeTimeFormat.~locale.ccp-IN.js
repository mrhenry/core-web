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
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ccp-IN").length
)) {
// Intl.RelativeTimeFormat.~locale.ccp-IN
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ccp-IN":{"nu":["cakm"],"year":{"0":"𑄃𑄬 𑄝𑄧𑄏𑄧𑄢𑄴","1":"𑄎𑄬𑄢𑄧 𑄝𑄧𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬"},"past":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄝𑄧𑄏𑄧𑄢𑄴"},"year-short":{"0":"𑄃𑄳𑄆𑄬 𑄝𑄧𑄏𑄧𑄢𑄴","1":"𑄛𑄧𑄢𑄬 𑄝𑄧𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬"},"past":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄝𑄧𑄏𑄧𑄢𑄴"},"year-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄝𑄧𑄏𑄧𑄢𑄴","1":"𑄛𑄧𑄢𑄬 𑄝𑄧𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬"},"past":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄝𑄧𑄏𑄧𑄢𑄴"},"quarter":{"0":"𑄃𑄳𑄆𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","1":"𑄛𑄧𑄢𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄬","other":"{0} 𑄖𑄨𑄚𑄟𑄏𑄬"},"past":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴"},"quarter-short":{"0":"𑄃𑄳𑄆𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","1":"𑄛𑄧𑄢𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄬","other":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄬"},"past":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0}𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴"},"quarter-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","1":"𑄛𑄧𑄢𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄬","other":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄬"},"past":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄬𑄉"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴"},"month":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄏𑄴","1":"𑄛𑄧𑄢𑄬 𑄟𑄏𑄴","future":{"one":"{0} 𑄟𑄏𑄬","other":"{0} 𑄟𑄏𑄬"},"past":{"one":"{0} 𑄟𑄏𑄧 𑄃𑄉𑄬","other":"{0} 𑄟𑄏𑄧 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄟𑄏𑄴"},"month-short":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄏𑄴","1":"𑄛𑄧𑄢𑄬 𑄟𑄏𑄴","future":{"one":"{0} 𑄟𑄏𑄬","other":"{0} 𑄟𑄏𑄬"},"past":{"one":"{0} 𑄇𑄏𑄧 𑄃𑄉𑄬","other":"{0} 𑄟𑄏𑄧 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄉𑄬 𑄟𑄏𑄴"},"month-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄏𑄴","1":"𑄛𑄧𑄢𑄬 𑄟𑄏𑄴","future":{"one":"{0} 𑄟𑄏𑄬","other":"{0} 𑄟𑄏𑄬"},"past":{"one":"{0} 𑄟𑄏𑄧 𑄃𑄉𑄬","other":"{0} 𑄟𑄏𑄧 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄟𑄏𑄴"},"week":{"0":"𑄃𑄳𑄆𑄬 𑄥𑄛𑄴𑄖","1":"𑄛𑄧𑄢𑄬 𑄥𑄛𑄴𑄖","future":{"one":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴","other":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴"},"past":{"one":"{0} 𑄥𑄛𑄴𑄖 𑄃𑄉𑄬","other":"{0} 𑄥𑄛𑄴𑄖 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄥𑄛𑄴𑄖"},"week-short":{"0":"𑄃𑄳𑄆𑄬 𑄥𑄛𑄴𑄖","1":"𑄛𑄧𑄢𑄬 𑄥𑄛𑄴𑄖","future":{"one":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴","other":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴"},"past":{"one":"{0} 𑄥𑄛𑄴𑄖 𑄃𑄉𑄬","other":"{0} 𑄥𑄛𑄴𑄖 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄥𑄛𑄴𑄖"},"week-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄥𑄛𑄴𑄖","1":"𑄛𑄧𑄢𑄬 𑄥𑄛𑄴𑄖","future":{"one":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴","other":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴"},"past":{"one":"{0} 𑄥𑄛𑄴𑄖𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄥𑄛𑄴𑄖𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄥𑄛𑄴𑄖"},"day":{"0":"𑄃𑄬𑄌𑄴𑄥𑄳𑄠","1":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄇𑄬𑄣𑄳𑄠𑄬","2":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","future":{"one":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠","other":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠"},"past":{"one":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬"},"-2":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","-1":"𑄉𑄬𑄣𑄴𑄣𑄳𑄠𑄇𑄬𑄣𑄳𑄠𑄬"},"day-short":{"0":"𑄃𑄬𑄌𑄴𑄥𑄳𑄠𑄬","1":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬","2":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","future":{"one":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠","other":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠"},"past":{"one":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬"},"-2":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","-1":"𑄉𑄬𑄣𑄴𑄣𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬"},"day-narrow":{"0":"𑄃𑄬𑄌𑄴𑄥𑄳𑄠𑄬","1":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬","2":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","future":{"one":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠","other":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠"},"past":{"one":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬"},"-2":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","-1":"𑄉𑄬𑄣𑄴𑄣𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬"},"hour":{"0":"𑄃𑄳𑄆𑄬 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","future":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","other":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴"},"past":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬","other":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬"}},"hour-short":{"0":"𑄃𑄳𑄆𑄬 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","future":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","other":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴"},"past":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬","other":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬"}},"hour-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","future":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","other":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴"},"past":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬","other":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬"}},"minute":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄨𑄚𑄨𑄖𑄴","future":{"one":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬"},"past":{"one":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬"}},"minute-short":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄨𑄚𑄨𑄖𑄴","future":{"one":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬"},"past":{"one":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬"}},"minute-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄨𑄚𑄨𑄖𑄴","future":{"one":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬"},"past":{"one":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬"}},"second":{"0":"𑄃𑄨𑄇𑄴𑄅𑄚𑄪","future":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴𑄘𑄬","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴𑄘𑄬"},"past":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬"}},"second-short":{"0":"𑄃𑄨𑄇𑄴𑄅𑄚𑄪","future":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴𑄘𑄬","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴𑄘𑄬"},"past":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬"}},"second-narrow":{"0":"𑄃𑄨𑄇𑄴𑄅𑄚𑄪","future":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴𑄘𑄬"},"past":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬"}}}},"availableLocales":["ccp-IN"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
