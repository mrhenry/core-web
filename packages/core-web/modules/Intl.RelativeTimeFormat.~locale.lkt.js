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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("lkt").length
)) {
// Intl.RelativeTimeFormat.~locale.lkt
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"lkt":{"nu":["latn"],"year":{"0":"Lé ómakȟa kiŋ","1":"Tȟokáta ómakȟa kiŋháŋ","future":{"other":"Letáŋhaŋ ómakȟa {0} kiŋháŋ"},"past":{"other":"Hékta ómakȟa {0} kʼuŋ héhaŋ"},"-1":"Ómakȟa kʼuŋ héhaŋ"},"year-short":{"0":"Lé ómakȟa kiŋ","1":"Tȟokáta ómakȟa kiŋháŋ","future":{"other":"Letáŋhaŋ ómakȟa {0} kiŋháŋ"},"past":{"other":"Hékta ómakȟa {0} kʼuŋ héhaŋ"},"-1":"Ómakȟa kʼuŋ héhaŋ"},"year-narrow":{"0":"Lé ómakȟa kiŋ","1":"Tȟokáta ómakȟa kiŋháŋ","future":{"other":"Letáŋhaŋ ómakȟa {0} kiŋháŋ"},"past":{"other":"Hékta ómakȟa {0} kʼuŋ héhaŋ"},"-1":"Ómakȟa kʼuŋ héhaŋ"},"quarter":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-short":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"quarter-narrow":{"0":"this quarter","1":"next quarter","future":{"other":"+{0} Q"},"past":{"other":"-{0} Q"},"-1":"last quarter"},"month":{"0":"Lé wí kiŋ","1":"Tȟokáta wí kiŋháŋ","future":{"other":"Letáŋhaŋ wíyawapi {0} kiŋháŋ"},"past":{"other":"Hékta wíyawapi {0} kʼuŋ héhaŋ"},"-1":"Wí kʼuŋ héhaŋ"},"month-short":{"0":"Lé wí kiŋ","1":"Tȟokáta wí kiŋháŋ","future":{"other":"Letáŋhaŋ wíyawapi {0} kiŋháŋ"},"past":{"other":"Hékta wíyawapi {0} kʼuŋ héhaŋ"},"-1":"Wí kʼuŋ héhaŋ"},"month-narrow":{"0":"Lé wí kiŋ","1":"Tȟokáta wí kiŋháŋ","future":{"other":"Letáŋhaŋ wíyawapi {0} kiŋháŋ"},"past":{"other":"Hékta wíyawapi {0} kʼuŋ héhaŋ"},"-1":"Wí kʼuŋ héhaŋ"},"week":{"0":"Lé okó kiŋ","1":"Tȟokáta okó kiŋháŋ","future":{"other":"Letáŋhaŋ okó {0} kiŋháŋ"},"past":{"other":"Hékta okó {0} kʼuŋ héhaŋ"},"-1":"Okó kʼuŋ héhaŋ"},"week-short":{"0":"Lé okó kiŋ","1":"Tȟokáta okó kiŋháŋ","future":{"other":"Letáŋhaŋ okó {0} kiŋháŋ"},"past":{"other":"Hékta okó {0} kʼuŋ héhaŋ"},"-1":"Okó kʼuŋ héhaŋ"},"week-narrow":{"0":"Lé okó kiŋ","1":"Tȟokáta okó kiŋháŋ","future":{"other":"Letáŋhaŋ okó {0} kiŋháŋ"},"past":{"other":"Hékta okó {0} kʼuŋ héhaŋ"},"-1":"Okó kʼuŋ héhaŋ"},"day":{"0":"Lé aŋpétu kiŋ","1":"Híŋhaŋni kiŋháŋ","future":{"other":"Letáŋhaŋ {0}-čháŋ kiŋháŋ"},"past":{"other":"Hékta {0}-čháŋ k’uŋ héhaŋ"},"-1":"Ȟtálehaŋ"},"day-short":{"0":"Lé aŋpétu kiŋ","1":"Híŋhaŋni kiŋháŋ","future":{"other":"Letáŋhaŋ {0}-čháŋ kiŋháŋ"},"past":{"other":"Hékta {0}-čháŋ k’uŋ héhaŋ"},"-1":"Ȟtálehaŋ"},"day-narrow":{"0":"Lé aŋpétu kiŋ","1":"Híŋhaŋni kiŋháŋ","future":{"other":"Letáŋhaŋ {0}-čháŋ kiŋháŋ"},"past":{"other":"Hékta {0}-čháŋ k’uŋ héhaŋ"},"-1":"Ȟtálehaŋ"},"hour":{"0":"this hour","future":{"other":"Letáŋhaŋ owápȟe {0} kiŋháŋ"},"past":{"other":"Hékta owápȟe {0} kʼuŋ héhaŋ"}},"hour-short":{"0":"this hour","future":{"other":"Letáŋhaŋ owápȟe {0} kiŋháŋ"},"past":{"other":"Hékta owápȟe {0} kʼuŋ héhaŋ"}},"hour-narrow":{"0":"this hour","future":{"other":"Letáŋhaŋ owápȟe {0} kiŋháŋ"},"past":{"other":"Hékta owápȟe {0} kʼuŋ héhaŋ"}},"minute":{"0":"this minute","future":{"other":"Letáŋhaŋ oȟ’áŋkȟo {0} kiŋháŋ"},"past":{"other":"Hékta oȟ’áŋkȟo {0} k’uŋ héhaŋ"}},"minute-short":{"0":"this minute","future":{"other":"Letáŋhaŋ oȟ’áŋkȟo {0} kiŋháŋ"},"past":{"other":"Hékta oȟ’áŋkȟo {0} k’uŋ héhaŋ"}},"minute-narrow":{"0":"this minute","future":{"other":"Letáŋhaŋ oȟ’áŋkȟo {0} kiŋháŋ"},"past":{"other":"Hékta oȟ’áŋkȟo {0} k’uŋ héhaŋ"}},"second":{"0":"now","future":{"other":"Letáŋhaŋ okpí {0} kiŋháŋ"},"past":{"other":"Hékta okpí {0} k’uŋ héhaŋ"}},"second-short":{"0":"now","future":{"other":"Letáŋhaŋ okpí {0} kiŋháŋ"},"past":{"other":"Hékta okpí {0} k’uŋ héhaŋ"}},"second-narrow":{"0":"now","future":{"other":"Letáŋhaŋ okpí {0} kiŋháŋ"},"past":{"other":"Hékta okpí {0} k’uŋ héhaŋ"}}}},"availableLocales":["lkt"]})
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
