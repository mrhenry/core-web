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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("fi").length
)) {
// Intl.RelativeTimeFormat.~locale.fi
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"fi":{"nu":["latn"],"year":{"0":"tänä vuonna","1":"ensi vuonna","future":{"one":"{0} vuoden päästä","other":"{0} vuoden päästä"},"past":{"one":"{0} vuosi sitten","other":"{0} vuotta sitten"},"-1":"viime vuonna"},"year-short":{"0":"tänä v","1":"ensi v","future":{"one":"{0} v päästä","other":"{0} v päästä"},"past":{"one":"{0} v sitten","other":"{0} v sitten"},"-1":"viime v"},"year-narrow":{"0":"tänä v","1":"ensi v","future":{"one":"{0} v päästä","other":"{0} v päästä"},"past":{"one":"{0} v sitten","other":"{0} v sitten"},"-1":"viime v"},"quarter":{"0":"tänä neljännesvuonna","1":"ensi neljännesvuonna","future":{"one":"{0} neljännesvuoden päästä","other":"{0} neljännesvuoden päästä"},"past":{"one":"{0} neljännesvuosi sitten","other":"{0} neljännesvuotta sitten"},"-1":"viime neljännesvuonna"},"quarter-short":{"0":"tänä neljänneksenä","1":"ensi neljänneksenä","future":{"one":"{0} neljänneksen päästä","other":"{0} neljänneksen päästä"},"past":{"one":"{0} neljännes sitten","other":"{0} neljännestä sitten"},"-1":"viime neljänneksenä"},"quarter-narrow":{"0":"tänä nelj.","1":"ensi nelj.","future":{"one":"{0} nelj. päästä","other":"{0} nelj. päästä"},"past":{"one":"{0} nelj. sitten","other":"{0} nelj. sitten"},"-1":"viime nelj."},"month":{"0":"tässä kuussa","1":"ensi kuussa","future":{"one":"{0} kuukauden päästä","other":"{0} kuukauden päästä"},"past":{"one":"{0} kuukausi sitten","other":"{0} kuukautta sitten"},"-1":"viime kuussa"},"month-short":{"0":"tässä kk","1":"ensi kk","future":{"one":"{0} kk päästä","other":"{0} kk päästä"},"past":{"one":"{0} kk sitten","other":"{0} kk sitten"},"-1":"viime kk"},"month-narrow":{"0":"tässä kk","1":"ensi kk","future":{"one":"{0} kk päästä","other":"{0} kk päästä"},"past":{"one":"{0} kk sitten","other":"{0} kk sitten"},"-1":"viime kk"},"week":{"0":"tällä viikolla","1":"ensi viikolla","future":{"one":"{0} viikon päästä","other":"{0} viikon päästä"},"past":{"one":"{0} viikko sitten","other":"{0} viikkoa sitten"},"-1":"viime viikolla"},"week-short":{"0":"tällä vk","1":"ensi vk","future":{"one":"{0} vk päästä","other":"{0} vk päästä"},"past":{"one":"{0} vk sitten","other":"{0} vk sitten"},"-1":"viime vk"},"week-narrow":{"0":"tällä vk","1":"ensi vk","future":{"one":"{0} vk päästä","other":"{0} vk päästä"},"past":{"one":"{0} vk sitten","other":"{0} vk sitten"},"-1":"viime vk"},"day":{"0":"tänään","1":"huomenna","2":"ylihuomenna","future":{"one":"{0} päivän päästä","other":"{0} päivän päästä"},"past":{"one":"{0} päivä sitten","other":"{0} päivää sitten"},"-2":"toissa päivänä","-1":"eilen"},"day-short":{"0":"tänään","1":"huom.","2":"ylihuom.","future":{"one":"{0} pv päästä","other":"{0} pv päästä"},"past":{"one":"{0} pv sitten","other":"{0} pv sitten"},"-2":"toissap.","-1":"eilen"},"day-narrow":{"0":"tänään","1":"huom.","2":"ylihuom.","future":{"one":"{0} pv päästä","other":"{0} pv päästä"},"past":{"one":"{0} pv sitten","other":"{0} pv sitten"},"-2":"toissap.","-1":"eilen"},"hour":{"0":"tämän tunnin aikana","future":{"one":"{0} tunnin päästä","other":"{0} tunnin päästä"},"past":{"one":"{0} tunti sitten","other":"{0} tuntia sitten"}},"hour-short":{"0":"tunnin sisällä","future":{"one":"{0} t päästä","other":"{0} t päästä"},"past":{"one":"{0} t sitten","other":"{0} t sitten"}},"hour-narrow":{"0":"tunnin sisällä","future":{"one":"{0} t päästä","other":"{0} t päästä"},"past":{"one":"{0} t sitten","other":"{0} t sitten"}},"minute":{"0":"tämän minuutin aikana","future":{"one":"{0} minuutin päästä","other":"{0} minuutin päästä"},"past":{"one":"{0} minuutti sitten","other":"{0} minuuttia sitten"}},"minute-short":{"0":"minuutin sisällä","future":{"one":"{0} min päästä","other":"{0} min päästä"},"past":{"one":"{0} min sitten","other":"{0} min sitten"}},"minute-narrow":{"0":"minuutin sisällä","future":{"one":"{0} min päästä","other":"{0} min päästä"},"past":{"one":"{0} min sitten","other":"{0} min sitten"}},"second":{"0":"nyt","future":{"one":"{0} sekunnin päästä","other":"{0} sekunnin päästä"},"past":{"one":"{0} sekunti sitten","other":"{0} sekuntia sitten"}},"second-short":{"0":"nyt","future":{"one":"{0} s päästä","other":"{0} s päästä"},"past":{"one":"{0} s sitten","other":"{0} s sitten"}},"second-narrow":{"0":"nyt","future":{"one":"{0} s päästä","other":"{0} s päästä"},"past":{"one":"{0} s sitten","other":"{0} s sitten"}}}},"availableLocales":["fi"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
