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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ps").length
)) {
// Intl.RelativeTimeFormat.~locale.ps
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"ps":{"nu":["arabext"],"year":{"0":"سږکال","1":"راتلونکی کال","future":{"one":"په {0} کال کې","other":"په {0} کالونو کې"},"past":{"one":"{0} کال مخکې","other":"{0} کاله مخکې"},"-1":"پروسږکال"},"year-short":{"0":"سږ کال","1":"روتلونکی کال","future":{"one":"په {0} کال کې","other":"په {0} کالونو کې"},"past":{"one":"{0} کال مخکې","other":"{0} کاله مخکې"},"-1":"تېر کال"},"year-narrow":{"0":"سږ کال","1":"راتلونکی کال","future":{"one":"په {0} کال کې","other":"په {0} کالونو کې"},"past":{"one":"{0} کال مخکې","other":"{0} کاله مخکې"},"-1":"تير کال"},"quarter":{"0":"دا ربع","1":"راتلونکې ربع","future":{"one":"په {0} ربع کې","other":"په {0} ربعو کې"},"past":{"one":"{0} ربع مخکې","other":"{0} ربعې مخکې"},"-1":"ورستۍ ربع"},"quarter-short":{"0":"دا ربع","1":"راتلونکې ربع","future":{"one":"په {0} ربع کې","other":"په {0} ربعو کې"},"past":{"one":"{0} ربع مخکې","other":"{0} ربعې مخکې"},"-1":"ورستۍ ربع"},"quarter-narrow":{"0":"دا ربع","1":"راتلونکې ربع","future":{"one":"په {0} ربع کې","other":"په {0} ربعو کې"},"past":{"one":"{0} ربع مخکې","other":"{0} ربعې مخکې"},"-1":"ورستۍ ربع"},"month":{"0":"دا مياشت","1":"راتلونکې مياشت","future":{"one":"په {0} مياشت کې","other":"په {0} مياشتو کې"},"past":{"one":"{0} مياشت مخکې","other":"{0} مياشتې مخکې"},"-1":"تېره مياشت"},"month-short":{"0":"دا مياشت","1":"راتلونکې مياشت","future":{"one":"په {0} مياشت کې","other":"په {0} مياشت کې"},"past":{"one":"{0} مياشت مخکې","other":"{0} مياشت مخکې"},"-1":"تېره مياشت"},"month-narrow":{"0":"دا مياشت","1":"راتلونکې مياشت","future":{"one":"په {0} مياشت کې","other":"په {0} مياشت کې"},"past":{"one":"{0} مياشت مخکې","other":"{0} مياشت مخکې"},"-1":"تېره مياشت"},"week":{"0":"دا اونۍ","1":"راتلونکې اونۍ","future":{"one":"په {0} اونۍ کې","other":"په {0} اونيو کې"},"past":{"one":"{0} اونۍ مخکې","other":"{0} اونۍ مخکې"},"-1":"تيره اونۍ"},"week-short":{"0":"دا اونۍ","1":"راتلونکې اونۍ","future":{"one":"په {0} اونۍ کې","other":"په {0} اونۍ کې"},"past":{"one":"{0} اونۍ مخکې","other":"{0} اونۍ مخکې"},"-1":"تېره اونۍ"},"week-narrow":{"0":"دا اونۍ","1":"راتلونکې اونۍ","future":{"one":"په {0} اونۍ کې","other":"په {0} اونۍ کې"},"past":{"one":"{0} اونۍ مخکې","other":"{0} اونۍ مخکې"},"-1":"تېره اونۍ"},"day":{"0":"نن","1":"سبا","future":{"one":"په {0} ورځ کې","other":"په {0} ورځو کې"},"past":{"one":"{0} ورځ مخکې","other":"{0} ورځې مخکې"},"-1":"پرون"},"day-short":{"0":"نن","1":"سبا","future":{"one":"په {0} ورځ کې","other":"په {0} ورځو کې"},"past":{"one":"{0} ورځ مخکې","other":"{0} ورځې مخکې"},"-1":"پرون"},"day-narrow":{"0":"نن","1":"سبا","future":{"one":"په {0} ورځ کې","other":"په {0} ورځو کې"},"past":{"one":"{0} ورځ مخکې","other":"{0} ورځې مخکې"},"-1":"پرون"},"hour":{"0":"دا ساعت","future":{"one":"په {0} ساعت کې","other":"په {0} ساعتو کې"},"past":{"one":"{0} ساعت مخکې","other":"{0} ساعتونه مخکې"}},"hour-short":{"0":"دا ساعت","future":{"one":"په {0} ساعت کې","other":"په {0} ساعت کې"},"past":{"one":"{0} ساعت مخکې","other":"{0} ساعت مخکې"}},"hour-narrow":{"0":"دا ساعت","future":{"one":"په {0} ساعت کې","other":"په {0} ساعت کې"},"past":{"one":"{0} ساعت مخکې","other":"{0} ساعت مخکې"}},"minute":{"0":"دا دقيقه","future":{"one":"په {0} دقيقه کې","other":"په {0} دقيقو کې"},"past":{"one":"{0} دقيقه مخکې","other":"{0} دقيقې مخکې"}},"minute-short":{"0":"دا دقيقه","future":{"one":"په {0} دقيقه کې","other":"په {0} دقيقه کې"},"past":{"one":"{0} دقيقه مخکې","other":"{0} دقيقه مخکې"}},"minute-narrow":{"0":"دا دقيقه","future":{"one":"په {0} دقيقه کې","other":"په {0} دقيقه کې"},"past":{"one":"{0} دقيقه مخکې","other":"{0} دقيقه مخکې"}},"second":{"0":"اوس","future":{"one":"په {0} ثانيه کې","other":"په {0} ثانيو کې"},"past":{"one":"{0} ثانيه مخکې","other":"{0} ثانيې مخکې"}},"second-short":{"0":"اوس","future":{"one":"په {0} ثانيه کې","other":"په {0} ثانيه کې"},"past":{"one":"{0} ثانيه مخکې","other":"{0} ثانيه مخکې"}},"second-narrow":{"0":"اوس","future":{"one":"په {0} ثانيه کې","other":"په {0} ثانيه کې"},"past":{"one":"{0} ثانيه کې","other":"{0} ثانيه کې"}}}},"availableLocales":["ps"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
