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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("sw").length
)) {
// Intl.RelativeTimeFormat.~locale.sw
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"sw":{"nu":["latn"],"year":{"0":"mwaka huu","1":"mwaka ujao","future":{"one":"baada ya mwaka {0}","other":"baada ya miaka {0}"},"past":{"one":"mwaka {0} uliopita","other":"miaka {0} iliyopita"},"-1":"mwaka uliopita"},"year-short":{"0":"mwaka huu","1":"mwaka ujao","future":{"one":"baada ya mwaka {0}","other":"baada ya miaka {0}"},"past":{"one":"mwaka {0} uliopita","other":"miaka {0} iliyopita"},"-1":"mwaka uliopita"},"year-narrow":{"0":"mwaka huu","1":"mwaka ujao","future":{"one":"baada ya mwaka {0}","other":"baada ya miaka {0}"},"past":{"one":"mwaka {0} uliopita","other":"miaka {0} iliyopita"},"-1":"mwaka uliopita"},"quarter":{"0":"robo hii ya mwaka","1":"robo ya mwaka inayofuata","future":{"one":"baada ya robo {0}","other":"baada ya robo {0}"},"past":{"one":"robo {0} iliyopita","other":"robo {0} zilizopita"},"-1":"robo ya mwaka iliyopita"},"quarter-short":{"0":"robo hii ya mwaka","1":"robo ya mwaka inayofuata","future":{"one":"baada ya robo {0}","other":"baada ya robo {0}"},"past":{"one":"robo {0} iliyopita","other":"robo {0} zilizopita"},"-1":"robo ya mwaka iliyopita"},"quarter-narrow":{"0":"robo hii ya mwaka","1":"robo ya mwaka inayofuata","future":{"one":"baada ya robo {0}","other":"baada ya robo {0}"},"past":{"one":"robo {0} iliyopita","other":"robo {0} zilizopita"},"-1":"robo ya mwaka iliyopita"},"month":{"0":"mwezi huu","1":"mwezi ujao","future":{"one":"baada ya mwezi {0}","other":"baada ya miezi {0}"},"past":{"one":"mwezi {0} uliopita","other":"miezi {0} iliyopita"},"-1":"mwezi uliopita"},"month-short":{"0":"mwezi huu","1":"mwezi ujao","future":{"one":"baada ya mwezi {0}","other":"baada ya miezi {0}"},"past":{"one":"mwezi {0} uliopita","other":"miezi {0} iliyopita"},"-1":"mwezi uliopita"},"month-narrow":{"0":"mwezi huu","1":"mwezi ujao","future":{"one":"baada ya mwezi {0}","other":"baada ya miezi {0}"},"past":{"one":"mwezi {0} uliopita","other":"miezi {0} iliyopita"},"-1":"mwezi uliopita"},"week":{"0":"wiki hii","1":"wiki ijayo","future":{"one":"baada ya wiki {0}","other":"baada ya wiki {0}"},"past":{"one":"wiki {0} iliyopita","other":"wiki {0} zilizopita"},"-1":"wiki iliyopita"},"week-short":{"0":"wiki hii","1":"wiki ijayo","future":{"one":"baada ya wiki {0}","other":"baada ya wiki {0}"},"past":{"one":"wiki {0} iliyopita","other":"wiki {0} zilizopita"},"-1":"wiki iliyopita"},"week-narrow":{"0":"wiki hii","1":"wiki ijayo","future":{"one":"baada ya wiki {0}","other":"baada ya wiki {0}"},"past":{"one":"wiki {0} iliyopita","other":"wiki {0} zilizopita"},"-1":"wiki iliyopita"},"day":{"0":"leo","1":"kesho","2":"kesho kutwa","future":{"one":"baada ya siku {0}","other":"baada ya siku {0}"},"past":{"one":"siku {0} iliyopita","other":"siku {0} zilizopita"},"-2":"juzi","-1":"jana"},"day-short":{"0":"leo","1":"kesho","2":"kesho kutwa","future":{"one":"baada ya siku {0}","other":"baada ya siku {0}"},"past":{"one":"siku {0} iliyopita","other":"siku {0} zilizopita"},"-2":"juzi","-1":"jana"},"day-narrow":{"0":"leo","1":"kesho","2":"kesho kutwa","future":{"one":"baada ya siku {0}","other":"baada ya siku {0}"},"past":{"one":"siku {0} iliyopita","other":"siku {0} zilizopita"},"-2":"juzi","-1":"jana"},"hour":{"0":"saa hii","future":{"one":"baada ya saa {0}","other":"baada ya saa {0}"},"past":{"one":"saa {0} iliyopita","other":"saa {0} zilizopita"}},"hour-short":{"0":"saa hii","future":{"one":"baada ya saa {0}","other":"baada ya saa {0}"},"past":{"one":"saa {0} iliyopita","other":"saa {0} zilizopita"}},"hour-narrow":{"0":"saa hii","future":{"one":"baada ya saa {0}","other":"baada ya saa {0}"},"past":{"one":"Saa {0} iliyopita","other":"Saa {0} zilizopita"}},"minute":{"0":"dakika hii","future":{"one":"baada ya dakika {0}","other":"baada ya dakika {0}"},"past":{"one":"dakika {0} iliyopita","other":"dakika {0} zilizopita"}},"minute-short":{"0":"dakika hii","future":{"one":"baada ya dakika {0}","other":"baada ya dakika {0}"},"past":{"one":"dakika {0} iliyopita","other":"dakika {0} zilizopita"}},"minute-narrow":{"0":"dakika hii","future":{"one":"baada ya dakika {0}","other":"baada ya dakika {0}"},"past":{"one":"dakika {0} iliyopita","other":"dakika {0} zilizopita"}},"second":{"0":"sasa hivi","future":{"one":"baada ya sekunde {0}","other":"baada ya sekunde {0}"},"past":{"one":"Sekunde {0} iliyopita","other":"Sekunde {0} zilizopita"}},"second-short":{"0":"sasa hivi","future":{"one":"baada ya sekunde {0}","other":"baada ya sekunde {0}"},"past":{"one":"sekunde {0} iliyopita","other":"sekunde {0} zilizopita"}},"second-narrow":{"0":"sasa hivi","future":{"one":"baada ya sekunde {0}","other":"baada ya sekunde {0}"},"past":{"one":"sekunde {0} iliyopita","other":"sekunde {0} zilizopita"}}}},"availableLocales":["sw"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
