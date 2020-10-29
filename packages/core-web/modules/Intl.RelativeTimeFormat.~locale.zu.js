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
import SameValueZero from "@mrhenry/core-web/helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "@mrhenry/core-web/helpers/_ESAbstract.SameValueNonNumber";
import GetIterator from "@mrhenry/core-web/helpers/_ESAbstract.GetIterator";
import IteratorStep from "@mrhenry/core-web/helpers/_ESAbstract.IteratorStep";
import IteratorNext from "@mrhenry/core-web/helpers/_ESAbstract.IteratorNext";
import IteratorComplete from "@mrhenry/core-web/helpers/_ESAbstract.IteratorComplete";
import IteratorValue from "@mrhenry/core-web/helpers/_ESAbstract.IteratorValue";
import IteratorClose from "@mrhenry/core-web/helpers/_ESAbstract.IteratorClose";
import SameValue from "@mrhenry/core-web/helpers/_ESAbstract.SameValue";
(function(undefined) {
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("zu").length
)) {
// Intl.RelativeTimeFormat.~locale.zu
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"zu":{"nu":["latn"],"year":{"0":"kulo nyaka","1":"unyaka ozayo","future":{"one":"onyakeni ongu-{0} ozayo","other":"eminyakeni engu-{0} ezayo"},"past":{"one":"{0} unyaka odlule","other":"{0} iminyaka edlule"},"-1":"onyakeni odlule"},"year-short":{"0":"kulo nyaka","1":"unyaka ozayo","future":{"one":"onyakeni ongu-{0} ozayo","other":"eminyakeni engu-{0} ezayo"},"past":{"one":"{0} unyaka odlule","other":"{0} unyaka odlule"},"-1":"onyakeni odlule"},"year-narrow":{"0":"kulo nyaka","1":"unyaka ozayo","future":{"one":"onyakeni ongu-{0} ozayo","other":"eminyakeni engu-{0} ezayo"},"past":{"one":"{0} unyaka odlule","other":"{0} unyaka odlule"},"-1":"onyakeni odlule"},"quarter":{"0":"le kota","1":"ikota ezayo","future":{"one":"kwikota engu-{0} ezayo","other":"kumakota angu-{0} ezayo"},"past":{"one":"{0} ikota edlule","other":"{0} amakota adlule"},"-1":"ikota edlule"},"quarter-short":{"0":"le kota","1":"ikota ezayo","future":{"one":"kwikota engu-{0} ezayo","other":"kumakota angu-{0} ezayo"},"past":{"one":"{0} amakota adlule","other":"{0} amakota edlule"},"-1":"ikota edlule"},"quarter-narrow":{"0":"le kota","1":"ikota ezayo","future":{"one":"kumakota angu-{0}","other":"kumakota angu-{0}"},"past":{"one":"{0} amakota adlule","other":"{0} amakota edlule"},"-1":"ikota edlule"},"month":{"0":"le nyanga","1":"inyanga ezayo","future":{"one":"enyangeni engu-{0}","other":"ezinyangeni ezingu-{0} ezizayo"},"past":{"one":"{0} inyanga edlule","other":"{0} izinyanga ezedlule"},"-1":"inyanga edlule"},"month-short":{"0":"le nyanga","1":"inyanga ezayo","future":{"one":"ezinyangeni ezingu-{0} ezizayo","other":"ezinyangeni ezingu-{0} ezizayo"},"past":{"one":"{0} izinyanga ezedlule","other":"{0} izinyanga ezedlule"},"-1":"inyanga edlule"},"month-narrow":{"0":"le nyanga","1":"inyanga ezayo","future":{"one":"enyangeni engu-{0} ezayo","other":"enyangeni engu-{0} ezayo"},"past":{"one":"{0} izinyanga ezedlule","other":"{0} izinyanga ezedlule"},"-1":"inyanga edlule"},"week":{"0":"leli viki","1":"iviki elizayo","future":{"one":"evikini elingu-{0}","other":"emavikini angu-{0}"},"past":{"one":"evikini elingu-{0} eledlule","other":"amaviki angu-{0} edlule"},"-1":"iviki eledlule"},"week-short":{"0":"leli viki","1":"iviki elizayo","future":{"one":"evikini elingu-{0} elizayo","other":"emavikini angu-{0} ezayo"},"past":{"one":"amaviki angu-{0} edlule","other":"amaviki angu-{0} edlule"},"-1":"iviki eledlule"},"week-narrow":{"0":"leli viki","1":"iviki elizayo","future":{"one":"emavikini angu-{0} ezayo","other":"emavikini angu-{0} ezayo"},"past":{"one":"amaviki angu-{0} edlule","other":"amaviki angu-{0} edlule"},"-1":"iviki eledlule"},"day":{"0":"namhlanje","1":"kusasa","2":"usuku olulandela olwakusasa","future":{"one":"osukwini olungu-{0} oluzayo","other":"ezinsukwini ezingu-{0} ezizayo"},"past":{"one":"osukwini olungu-{0} olwedlule","other":"ezinsukwini ezingu-{0} ezedlule."},"-2":"usuku olwandulela olwayizolo","-1":"izolo"},"day-short":{"0":"namhlanje","1":"kusasa","2":"usuku olulandela olwakusasa","future":{"one":"osukwini olungu-{0} oluzayo","other":"ezinsukwini ezingu-{0} ezizayo"},"past":{"one":"{0} usuku olwedlule","other":"{0} izinsuku ezedlule"},"-2":"usuku olwandulela olwayizolo","-1":"izolo"},"day-narrow":{"0":"namhlanje","1":"kusasa","2":"usuku olulandela olwakusasa","future":{"one":"osukwini olungu-{0} oluzayo","other":"ezinsukwini ezingu-{0} ezizayo"},"past":{"one":"{0} usuku olwedlule","other":"{0} izinsuku ezedlule"},"-2":"usuku olwandulela olwayizolo","-1":"izolo"},"hour":{"0":"leli hora","future":{"one":"ehoreni elingu-{0} elizayo","other":"emahoreni angu-{0} ezayo"},"past":{"one":"{0} ihora eledlule","other":"emahoreni angu-{0} edlule"}},"hour-short":{"0":"leli hora","future":{"one":"ehoreni elingu-{0} elizayo","other":"emahoreni angu-{0} ezayo"},"past":{"one":"{0} ihora eledlule","other":"emahoreni angu-{0} edlule"}},"hour-narrow":{"0":"leli hora","future":{"one":"ehoreni elingu-{0} elizayo","other":"emahoreni angu-{0} ezayo"},"past":{"one":"{0} ihora eledlule","other":"{0} amahora edlule"}},"minute":{"0":"leli minithi","future":{"one":"kuminithi elingu-{0} elizayo","other":"kumaminithi angu-{0} ezayo"},"past":{"one":"{0} iminithi eledlule","other":"{0} amaminithi edlule"}},"minute-short":{"0":"leli minithi","future":{"one":"kuminithi elingu-{0} elizayo","other":"kumaminithi angu-{0} ezayo"},"past":{"one":"{0} iminithi eledlule","other":"{0} amaminithi edlule"}},"minute-narrow":{"0":"leli minithi","future":{"one":"kuminithi elingu-{0} elizayo","other":"kumaminithi angu-{0} ezayo"},"past":{"one":"{0} iminithi eledlule","other":"{0} amaminithi edlule"}},"second":{"0":"manje","future":{"one":"kusekhondi elingu-{0} elizayo","other":"kumasekhondi angu-{0} ezayo"},"past":{"one":"{0} isekhondi eledlule","other":"{0} amasekhondi edlule"}},"second-short":{"0":"manje","future":{"one":"kusekhondi elingu-{0} elizayo","other":"kumasekhondi angu-{0} ezayo"},"past":{"one":"{0} isekhondi eledlule","other":"{0} amasekhondi edlule"}},"second-narrow":{"0":"manje","future":{"one":"kusekhondi elingu-{0} elizayo","other":"kumasekhondi angu-{0} ezayo"},"past":{"one":"{0} isekhondi eledlule","other":"{0} amasekhondi edlule"}}}},"availableLocales":["zu"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
