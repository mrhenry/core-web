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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("si").length
)) {
// Intl.RelativeTimeFormat.~locale.si
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"si":{"nu":["latn"],"year":{"0":"මෙම වසර","1":"ඊළඟ වසර","future":{"one":"වසර {0}කින්","other":"වසර {0}කින්"},"past":{"one":"වසර {0}කට පෙර","other":"වසර {0}කට පෙර"},"-1":"පසුගිය වසර"},"year-short":{"0":"මෙම වසර","1":"ඊළඟ වසර","future":{"one":"වසර {0}කින්","other":"වසර {0}කින්"},"past":{"one":"වසර {0}කට පෙර","other":"වසර {0}කට පෙර"},"-1":"පසුගිය වසර"},"year-narrow":{"0":"මෙම වසර","1":"ඊළඟ වසර","future":{"one":"වසර {0}කින්","other":"වසර {0}කින්"},"past":{"one":"වසර {0}කට පෙර","other":"වසර {0}කට පෙර"},"-1":"පසුගිය වසර"},"quarter":{"0":"මෙම කාර්තුව","1":"ඊළඟ කාර්තුව","future":{"one":"කාර්තු {0}කින්","other":"කාර්තු {0}කින්"},"past":{"one":"කාර්තු {0}කට පෙර","other":"කාර්තු {0}කට පෙර"},"-1":"පසුගිය කාර්තුව"},"quarter-short":{"0":"මෙම කාර්.","1":"ඊළඟ කාර්.","future":{"one":"කාර්. {0}කින්","other":"කාර්. {0}කින්"},"past":{"one":"කාර්. {0}කට පෙර","other":"කාර්. {0}කට පෙර"},"-1":"පසුගිය කාර්."},"quarter-narrow":{"0":"මෙම කාර්.","1":"ඊළඟ කාර්.","future":{"one":"කාර්. {0}කින්","other":"කාර්. {0}කින්"},"past":{"one":"කාර්. {0}කට පෙර","other":"කාර්. {0}කට පෙර"},"-1":"පසුගිය කාර්."},"month":{"0":"මෙම මාසය","1":"ඊළඟ මාසය","future":{"one":"මාස {0}කින්","other":"මාස {0}කින්"},"past":{"one":"මාස {0}කට පෙර","other":"මාස {0}කට පෙර"},"-1":"පසුගිය මාසය"},"month-short":{"0":"මෙම මාස.","1":"ඊළඟ මාස.","future":{"one":"මාස {0}කින්","other":"මාස {0}කින්"},"past":{"one":"මාස {0}කට පෙර","other":"මාස {0}කට පෙර"},"-1":"පසුගිය මාස."},"month-narrow":{"0":"මෙම මාස.","1":"ඊළඟ මාස.","future":{"one":"මාස {0}කින්","other":"මාස {0}කින්"},"past":{"one":"මාස {0}කට පෙර","other":"මාස {0}කට පෙර"},"-1":"පසුගිය මාස."},"week":{"0":"මෙම සතිය","1":"ඊළඟ සතිය","future":{"one":"සති {0}කින්","other":"සති {0}කින්"},"past":{"one":"සති {0}කට පෙර","other":"සති {0}කට පෙර"},"-1":"පසුගිය සතිය"},"week-short":{"0":"මෙම සති.","1":"ඊළඟ සති.","future":{"one":"සති {0}කින්","other":"සති {0}කින්"},"past":{"one":"සති {0}කට පෙර","other":"සති {0}කට පෙර"},"-1":"පසුගිය සති."},"week-narrow":{"0":"මෙම සති.","1":"ඊළඟ සති.","future":{"one":"සති {0}කින්","other":"සති {0}කින්"},"past":{"one":"සති {0}කට පෙර","other":"සති {0}කට පෙර"},"-1":"පසුගිය සති."},"day":{"0":"අද","1":"හෙට","2":"අනිද්දා","future":{"one":"දින {0}න්","other":"දින {0}න්"},"past":{"one":"දින {0}කට පෙර","other":"දින {0}කට පෙර"},"-2":"පෙරේදා","-1":"ඊයේ"},"day-short":{"0":"අද","1":"හෙට","2":"අනිද්දා","future":{"one":"දින {0}න්","other":"දින {0}න්"},"past":{"one":"දින {0}කට පෙර","other":"දින {0}කට පෙර"},"-2":"පෙරේදා","-1":"ඊයේ"},"day-narrow":{"0":"අද","1":"හෙට","2":"අනිද්දා","future":{"one":"දින {0}න්","other":"දින {0}න්"},"past":{"one":"දින {0}කට පෙර","other":"දින {0}කට පෙර"},"-2":"පෙරේදා","-1":"ඊයේ"},"hour":{"0":"මෙම පැය","future":{"one":"පැය {0}කින්","other":"පැය {0}කින්"},"past":{"one":"පැය {0}කට පෙර","other":"පැය {0}කට පෙර"}},"hour-short":{"0":"මෙම පැය","future":{"one":"පැය {0}කින්","other":"පැය {0}කින්"},"past":{"one":"පැය {0}කට පෙර","other":"පැය {0}කට පෙර"}},"hour-narrow":{"0":"මෙම පැය","future":{"one":"පැය {0}කින්","other":"පැය {0}කින්"},"past":{"one":"පැය {0}කට පෙර","other":"පැය {0}කට පෙර"}},"minute":{"0":"මෙම මිනිත්තුව","future":{"one":"මිනිත්තු {0}කින්","other":"මිනිත්තු {0}කින්"},"past":{"one":"මිනිත්තු {0}කට පෙර","other":"මිනිත්තු {0}කට පෙර"}},"minute-short":{"0":"මෙම මිනිත්තුව","future":{"one":"මිනිත්තු {0}කින්","other":"මිනිත්තු {0}කින්"},"past":{"one":"මිනිත්තු {0}කට පෙර","other":"මිනිත්තු {0}කට පෙර"}},"minute-narrow":{"0":"මෙම මිනිත්තුව","future":{"one":"මිනිත්තු {0}කින්","other":"මිනිත්තු {0}කින්"},"past":{"one":"මිනිත්තු {0}කට පෙර","other":"මිනිත්තු {0}කට පෙර"}},"second":{"0":"දැන්","future":{"one":"තත්පර {0}කින්","other":"තත්පර {0}කින්"},"past":{"one":"තත්පර {0}කට පෙර","other":"තත්පර {0}කට පෙර"}},"second-short":{"0":"දැන්","future":{"one":"තත්පර {0}කින්","other":"තත්පර {0}කින්"},"past":{"one":"තත්පර {0}කට පෙර","other":"තත්පර {0}කට පෙර"}},"second-narrow":{"0":"දැන්","future":{"one":"තත්පර {0}කින්","other":"තත්පර {0}කින්"},"past":{"one":"තත්පර {0}කට පෙර","other":"තත්පර {0}කට පෙර"}}}},"availableLocales":["si"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
