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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ccp-IN").length
)) {
// Intl.RelativeTimeFormat.~locale.ccp-IN
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["cakm"],"year":{"0":"𑄃𑄬 𑄝𑄧𑄏𑄧𑄢𑄴","1":"𑄎𑄬𑄢𑄧 𑄝𑄧𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬"},"past":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄝𑄧𑄏𑄧𑄢𑄴"},"year-short":{"0":"𑄃𑄳𑄆𑄬 𑄝𑄧𑄏𑄧𑄢𑄴","1":"𑄛𑄧𑄢𑄬 𑄝𑄧𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬"},"past":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄝𑄧𑄏𑄧𑄢𑄴"},"year-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄝𑄧𑄏𑄧𑄢𑄴","1":"𑄛𑄧𑄢𑄬 𑄝𑄧𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄬"},"past":{"one":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄝𑄧𑄏𑄧𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄝𑄧𑄏𑄧𑄢𑄴"},"quarter":{"0":"𑄃𑄳𑄆𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","1":"𑄛𑄧𑄢𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄬","other":"{0} 𑄖𑄨𑄚𑄟𑄏𑄬"},"past":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴"},"quarter-short":{"0":"𑄃𑄳𑄆𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","1":"𑄛𑄧𑄢𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄬","other":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄬"},"past":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0}𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴"},"quarter-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","1":"𑄛𑄧𑄢𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴","future":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄬","other":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄬"},"past":{"one":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴 𑄃𑄬𑄉"},"-1":"𑄉𑄬𑄣𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴"},"month":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄏𑄴","1":"𑄛𑄧𑄢𑄬 𑄟𑄏𑄴","future":{"one":"{0} 𑄟𑄏𑄬","other":"{0} 𑄟𑄏𑄬"},"past":{"one":"{0} 𑄟𑄏𑄧 𑄃𑄉𑄬","other":"{0} 𑄟𑄏𑄧 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄟𑄏𑄴"},"month-short":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄏𑄴","1":"𑄛𑄧𑄢𑄬 𑄟𑄏𑄴","future":{"one":"{0} 𑄟𑄏𑄬","other":"{0} 𑄟𑄏𑄬"},"past":{"one":"{0} 𑄇𑄏𑄧 𑄃𑄉𑄬","other":"{0} 𑄟𑄏𑄧 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄉𑄬 𑄟𑄏𑄴"},"month-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄏𑄴","1":"𑄛𑄧𑄢𑄬 𑄟𑄏𑄴","future":{"one":"{0} 𑄟𑄏𑄬","other":"{0} 𑄟𑄏𑄬"},"past":{"one":"{0} 𑄟𑄏𑄧 𑄃𑄉𑄬","other":"{0} 𑄟𑄏𑄧 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄟𑄏𑄴"},"week":{"0":"𑄃𑄳𑄆𑄬 𑄥𑄛𑄴𑄖","1":"𑄛𑄧𑄢𑄬 𑄥𑄛𑄴𑄖","future":{"one":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴","other":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴"},"past":{"one":"{0} 𑄥𑄛𑄴𑄖 𑄃𑄉𑄬","other":"{0} 𑄥𑄛𑄴𑄖 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄥𑄛𑄴𑄖"},"week-short":{"0":"𑄃𑄳𑄆𑄬 𑄥𑄛𑄴𑄖","1":"𑄛𑄧𑄢𑄬 𑄥𑄛𑄴𑄖","future":{"one":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴","other":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴"},"past":{"one":"{0} 𑄥𑄛𑄴𑄖 𑄃𑄉𑄬","other":"{0} 𑄥𑄛𑄴𑄖 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄥𑄛𑄴𑄖"},"week-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄥𑄛𑄴𑄖","1":"𑄛𑄧𑄢𑄬 𑄥𑄛𑄴𑄖","future":{"one":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴","other":"{0} 𑄥𑄛𑄴𑄖𑄠𑄴"},"past":{"one":"{0} 𑄥𑄛𑄴𑄖𑄢𑄴 𑄃𑄉𑄬","other":"{0} 𑄥𑄛𑄴𑄖𑄢𑄴 𑄃𑄉𑄬"},"-1":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄥𑄛𑄴𑄖"},"day":{"0":"𑄃𑄬𑄌𑄴𑄥𑄳𑄠","1":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄇𑄬𑄣𑄳𑄠𑄬","2":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","future":{"one":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠","other":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠"},"past":{"one":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬"},"-2":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","-1":"𑄉𑄬𑄣𑄴𑄣𑄳𑄠𑄇𑄬𑄣𑄳𑄠𑄬"},"day-short":{"0":"𑄃𑄬𑄌𑄴𑄥𑄳𑄠𑄬","1":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬","2":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","future":{"one":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠","other":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠"},"past":{"one":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬"},"-2":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","-1":"𑄉𑄬𑄣𑄴𑄣𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬"},"day-narrow":{"0":"𑄃𑄬𑄌𑄴𑄥𑄳𑄠𑄬","1":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬","2":"𑄃𑄬𑄎𑄬𑄖𑄴𑄖𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","future":{"one":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠","other":"{0} 𑄘𑄨𑄚𑄮 𑄟𑄧𑄖𑄴𑄙𑄳𑄠"},"past":{"one":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄘𑄨𑄚𑄴 𑄃𑄉𑄬"},"-2":"𑄉𑄬𑄣𑄧𑄘𑄬 𑄛𑄧𑄢𑄴𑄥𑄪","-1":"𑄉𑄬𑄣𑄴𑄣𑄳𑄠𑄇𑄬𑄣𑄴𑄣𑄳𑄠𑄬"},"hour":{"0":"𑄃𑄳𑄆𑄬 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","future":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","other":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴"},"past":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬","other":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬"}},"hour-short":{"0":"𑄃𑄳𑄆𑄬 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","future":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","other":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴"},"past":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬","other":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬"}},"hour-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","future":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴","other":"{0} 𑄊𑄮𑄚𑄴𑄓𑄠𑄴"},"past":{"one":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬","other":"{0} 𑄊𑄮𑄚𑄴𑄓 𑄃𑄉𑄬"}},"minute":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄨𑄚𑄨𑄖𑄴","future":{"one":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬"},"past":{"one":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬"}},"minute-short":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄨𑄚𑄨𑄖𑄴","future":{"one":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬"},"past":{"one":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬"}},"minute-narrow":{"0":"𑄃𑄳𑄆𑄬 𑄟𑄨𑄚𑄨𑄖𑄴","future":{"one":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄘𑄬"},"past":{"one":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬","other":"{0} 𑄟𑄨𑄚𑄨𑄖𑄴 𑄃𑄉𑄬"}},"second":{"0":"𑄃𑄨𑄇𑄴𑄅𑄚𑄪","future":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴𑄘𑄬","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴𑄘𑄬"},"past":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬"}},"second-short":{"0":"𑄃𑄨𑄇𑄴𑄅𑄚𑄪","future":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴𑄘𑄬","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴𑄘𑄬"},"past":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬"}},"second-narrow":{"0":"𑄃𑄨𑄇𑄴𑄅𑄚𑄪","future":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴𑄘𑄬"},"past":{"one":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬","other":"{0} 𑄥𑄬𑄉𑄬𑄚𑄴 𑄃𑄉𑄬"}}},"locale":"ccp-IN"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
