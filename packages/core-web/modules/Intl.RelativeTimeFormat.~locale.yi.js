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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("yi").length
)) {
// Intl.RelativeTimeFormat.~locale.yi
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"הײַ יאָר","1":"איבער א יאָר","future":{"one":"איבער {0} יאָר","other":"איבער {0} יאָר"},"past":{"one":"פֿאַר {0} יאָר","other":"פֿאַר {0} יאָר"},"-1":"פֿאַראַיאָר"},"year-short":{"0":"הײַ יאָר","1":"איבער א יאָר","future":{"one":"איבער א יאָר","other":"איבער {0} יאָר"},"past":{"one":"פֿאַר {0} יאָר","other":"פֿאַר {0} יאָר"},"-1":"פֿאַראַיאָר"},"year-narrow":{"0":"הײַ יאָר","1":"איבער א יאָר","future":{"one":"איבער {0} יאָר","other":"איבער {0} יאָר"},"past":{"one":"פֿאַר {0} יאָר","other":"פֿאַר {0} יאָר"},"-1":"פֿאַראַיאָר"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"דעם חודש","1":"קומענדיקן חודש","future":{"one":"איבער {0} חודש","other":"איבער {0} חדשים"},"past":{"one":"פֿאַר {0} חודש","other":"פֿאַר {0} חדשים"},"-1":"פֿאַרגאנגענעם חודש"},"month-short":{"0":"דעם חודש","1":"קומענדיקן חודש","future":{"one":"איבער {0} חודש","other":"איבער {0} חדשים"},"past":{"one":"פֿאַר {0} חודש","other":"פֿאַר {0} חדשים"},"-1":"פֿאַרגאנגענעם חודש"},"month-narrow":{"0":"דעם חודש","1":"קומענדיקן חודש","future":{"one":"איבער {0} חודש","other":"איבער {0} חדשים"},"past":{"one":"פֿאַר {0} חודש","other":"פֿאַר {0} חדשים"},"-1":"פֿאַרגאנגענעם חודש"},"week":{"0":"this week","1":"איבער אַכט טאָג","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"last week"},"week-short":{"0":"this week","1":"איבער אַכט טאָג","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"last week"},"week-narrow":{"0":"this week","1":"איבער אַכט טאָג","future":{"other":"+{0} w"},"past":{"other":"-{0} w"},"-1":"last week"},"day":{"0":"היינט","1":"מארגן","future":{"one":"אין {0} טאָג אַרום","other":"אין {0} טעג אַרום"},"past":{"other":"-{0} d"},"-1":"נעכטן"},"day-short":{"0":"היינט","1":"מארגן","future":{"one":"אין {0} טאָג אַרום","other":"אין {0} טעג אַרום"},"past":{"other":"-{0} d"},"-1":"נעכטן"},"day-narrow":{"0":"היינט","1":"מארגן","future":{"one":"אין {0} טאָג אַרום","other":"אין {0} טעג אַרום"},"past":{"other":"-{0} d"},"-1":"נעכטן"},"hour":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-short":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"hour-narrow":{"0":"this hour","future":{"other":"+{0} h"},"past":{"other":"-{0} h"}},"minute":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-short":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"minute-narrow":{"0":"this minute","future":{"other":"+{0} min"},"past":{"other":"-{0} min"}},"second":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-short":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}},"second-narrow":{"0":"now","future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}},"locale":"yi"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
