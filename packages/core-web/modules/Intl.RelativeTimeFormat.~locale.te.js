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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("te").length
)) {
// Intl.RelativeTimeFormat.~locale.te
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["latn"],"year":{"0":"ఈ సంవత్సరం","1":"తదుపరి సంవత్సరం","future":{"one":"{0} సంవత్సరంలో","other":"{0} సంవత్సరాల్లో"},"past":{"one":"{0} సంవత్సరం క్రితం","other":"{0} సంవత్సరాల క్రితం"},"-1":"గత సంవత్సరం"},"year-short":{"0":"ఈ సంవ.","1":"తదుపరి సంవ.","future":{"one":"{0} సం.లో","other":"{0} సం.ల్లో"},"past":{"one":"{0} సం. క్రితం","other":"{0} సం. క్రితం"},"-1":"గత సంవ."},"year-narrow":{"0":"ఈ సం.","1":"తదుపరి సం.","future":{"one":"{0} సం.లో","other":"{0} సం.ల్లో"},"past":{"one":"{0} సం. క్రితం","other":"{0} సం. క్రితం"},"-1":"గత సం."},"quarter":{"0":"ఈ త్రైమాసికం","1":"తదుపరి త్రైమాసికం","future":{"one":"{0} త్రైమాసికంలో","other":"{0} త్రైమాసికాల్లో"},"past":{"one":"{0} త్రైమాసికం క్రితం","other":"{0} త్రైమాసికాల క్రితం"},"-1":"గత త్రైమాసికం"},"quarter-short":{"0":"ఈ త్రైమాసికం","1":"తదుపరి త్రైమాసికం","future":{"one":"{0} త్రైమా.లో","other":"{0} త్రైమా.ల్లో"},"past":{"one":"{0} త్రైమా. క్రితం","other":"{0} త్రైమా. క్రితం"},"-1":"గత త్రైమాసికం"},"quarter-narrow":{"0":"ఈ త్రైమాసికం","1":"తదుపరి త్రైమాసికం","future":{"one":"{0} త్రైమాసికంలో","other":"{0} త్రైమాసికాల్లో"},"past":{"one":"{0} త్రైమా. క్రితం","other":"{0} త్రైమా. క్రితం"},"-1":"గత త్రైమాసికం"},"month":{"0":"ఈ నెల","1":"తదుపరి నెల","future":{"one":"{0} నెలలో","other":"{0} నెలల్లో"},"past":{"one":"{0} నెల క్రితం","other":"{0} నెలల క్రితం"},"-1":"గత నెల"},"month-short":{"0":"ఈ నెల","1":"తదుపరి నెల","future":{"one":"{0} నెలలో","other":"{0} నెలల్లో"},"past":{"one":"{0} నెల క్రితం","other":"{0} నెలల క్రితం"},"-1":"గత నెల"},"month-narrow":{"0":"ఈ నెల","1":"తదుపరి నెల","future":{"one":"{0} నెలలో","other":"{0} నెలల్లో"},"past":{"one":"{0} నెల క్రితం","other":"{0} నెలల క్రితం"},"-1":"గత నెల"},"week":{"0":"ఈ వారం","1":"తదుపరి వారం","future":{"one":"{0} వారంలో","other":"{0} వారాల్లో"},"past":{"one":"{0} వారం క్రితం","other":"{0} వారాల క్రితం"},"-1":"గత వారం"},"week-short":{"0":"ఈ వారం","1":"తదుపరి వారం","future":{"one":"{0} వారంలో","other":"{0} వారాల్లో"},"past":{"one":"{0} వారం క్రితం","other":"{0} వారాల క్రితం"},"-1":"గత వారం"},"week-narrow":{"0":"ఈ వారం","1":"తదుపరి వారం","future":{"one":"{0} వారంలో","other":"{0} వారాల్లో"},"past":{"one":"{0} వారం క్రితం","other":"{0} వారాల క్రితం"},"-1":"గత వారం"},"day":{"0":"ఈ రోజు","1":"రేపు","2":"ఎల్లుండి","future":{"one":"{0} రోజులో","other":"{0} రోజుల్లో"},"past":{"one":"{0} రోజు క్రితం","other":"{0} రోజుల క్రితం"},"-2":"మొన్న","-1":"నిన్న"},"day-short":{"0":"ఈ రోజు","1":"రేపు","2":"ఎల్లుండి","future":{"one":"{0} రోజులో","other":"{0} రోజుల్లో"},"past":{"one":"{0} రోజు క్రితం","other":"{0} రోజుల క్రితం"},"-2":"మొన్న","-1":"నిన్న"},"day-narrow":{"0":"ఈ రోజు","1":"రేపు","2":"ఎల్లుండి","future":{"one":"{0} రోజులో","other":"{0} రోజుల్లో"},"past":{"one":"{0} రోజు క్రితం","other":"{0} రోజుల క్రితం"},"-2":"మొన్న","-1":"నిన్న"},"hour":{"0":"ఈ గంట","future":{"one":"{0} గంటలో","other":"{0} గంటల్లో"},"past":{"one":"{0} గంట క్రితం","other":"{0} గంటల క్రితం"}},"hour-short":{"0":"ఈ గంట","future":{"one":"{0} గం.లో","other":"{0} గం.లో"},"past":{"one":"{0} గం. క్రితం","other":"{0} గం. క్రితం"}},"hour-narrow":{"0":"ఈ గంట","future":{"one":"{0} గం.లో","other":"{0} గం.లో"},"past":{"one":"{0} గం. క్రితం","other":"{0} గం. క్రితం"}},"minute":{"0":"ఈ నిమిషం","future":{"one":"{0} నిమిషంలో","other":"{0} నిమిషాల్లో"},"past":{"one":"{0} నిమిషం క్రితం","other":"{0} నిమిషాల క్రితం"}},"minute-short":{"0":"ఈ నిమిషం","future":{"one":"{0} నిమి.లో","other":"{0} నిమి.లో"},"past":{"one":"{0} నిమి. క్రితం","other":"{0} నిమి. క్రితం"}},"minute-narrow":{"0":"ఈ నిమిషం","future":{"one":"{0} నిమి.లో","other":"{0} నిమి.లో"},"past":{"one":"{0} నిమి. క్రితం","other":"{0} నిమి. క్రితం"}},"second":{"0":"ప్రస్తుతం","future":{"one":"{0} సెకనులో","other":"{0} సెకన్లలో"},"past":{"one":"{0} సెకను క్రితం","other":"{0} సెకన్ల క్రితం"}},"second-short":{"0":"ప్రస్తుతం","future":{"one":"{0} సెకనులో","other":"{0} సెకన్లలో"},"past":{"one":"{0} సెక. క్రితం","other":"{0} సెక. క్రితం"}},"second-narrow":{"0":"ప్రస్తుతం","future":{"one":"{0} సెక.లో","other":"{0} సెక. లో"},"past":{"one":"{0} సెక. క్రితం","other":"{0} సెక. క్రితం"}}},"locale":"te"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
