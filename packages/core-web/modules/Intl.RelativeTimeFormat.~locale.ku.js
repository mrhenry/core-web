import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import OrdinaryCreateFromConstructor from "../helpers/_ESAbstract.OrdinaryCreateFromConstructor";
import GetPrototypeFromConstructor from "../helpers/_ESAbstract.GetPrototypeFromConstructor";
import Get from "../helpers/_ESAbstract.Get";
import Type from "../helpers/_ESAbstract.Type";
import ToObject from "../helpers/_ESAbstract.ToObject";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
import GetIterator from "../helpers/_ESAbstract.GetIterator";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ArraySpeciesCreate from "../helpers/_ESAbstract.ArraySpeciesCreate";
import IsArray from "../helpers/_ESAbstract.IsArray";
import ArrayCreate from "../helpers/_ESAbstract.ArrayCreate";
import IsConstructor from "../helpers/_ESAbstract.IsConstructor";
import Construct from "../helpers/_ESAbstract.Construct";
import ToBoolean from "../helpers/_ESAbstract.ToBoolean";
import CreateDataPropertyOrThrow from "../helpers/_ESAbstract.CreateDataPropertyOrThrow";
import CreateDataProperty from "../helpers/_ESAbstract.CreateDataProperty";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
import IteratorStep from "../helpers/_ESAbstract.IteratorStep";
import IteratorNext from "../helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "../helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "../helpers/_ESAbstract.IteratorValue";
import IteratorClose from "../helpers/_ESAbstract.IteratorClose";
import SameValue from "../helpers/_ESAbstract.SameValue";
import CreateIterResultObject from "../helpers/_ESAbstract.CreateIterResultObject";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ku").length
)) {
// Intl.RelativeTimeFormat.~locale.ku
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ku":{"nu":["latn"],"year":{"0":"îsal","1":"sala piştî","future":{"one":"di salekê de","other":"di {0} salan de"},"past":{"one":"berî {0} salê","other":"berî {0} salan"},"-1":"par"},"year-short":{"0":"îsal","1":"sala bê","future":{"one":"piştî salekê","other":"piştî {0} salan"},"past":{"one":"berî salekê","other":"berî {0} salan"},"-1":"par"},"year-narrow":{"0":"îsal","1":"sala bê","future":{"one":"piştî salekê","other":"piştî {0} salan"},"past":{"one":"berî salekê","other":"berî {0} salan"},"-1":"par"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"vê mehê","1":"meha were","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"meha borî"},"month-short":{"0":"vê mehê","1":"meha bê","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"meha br."},"month-narrow":{"0":"vê mehê","1":"meha bê","future":{"other":"+{0} m"},"past":{"other":"-{0} m"},"-1":"meha br."},"week":{"0":"vê hefteyê","1":"hefteya were","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"hefteya borî"},"week-short":{"0":"vê hft.","1":"hft. bê","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"hft. borî"},"week-narrow":{"0":"vê hft.","1":"hft. bê","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"hft. borî"},"day":{"0":"îro","1":"sibe","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"duh"},"day-short":{"0":"îro","1":"sibe","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"duh"},"day-narrow":{"0":"îro","1":"sibe","future":{"other":"+{0} d"},"past":{"other":"-{0} d"},"-1":"duh"},"hour":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-short":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-narrow":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"minute":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-short":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-narrow":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"second":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-short":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-narrow":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}}},"availableLocales":["ku"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
