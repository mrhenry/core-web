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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("ps-PK").length
)) {
// Intl.RelativeTimeFormat.~locale.ps-PK
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"nu":["arabext"],"year":{"0":"سږکال","1":"راتلونکی کال","future":{"one":"په {0} کال کے","other":"په {0} کالونو کے"},"past":{"one":"{0} کال مخکے","other":"{0} کاله مخکے"},"-1":"پروسږکال"},"year-short":{"0":"سږ کال","1":"روتلونکی کال","future":{"one":"په {0} کال کے","other":"په {0} کالونو کے"},"past":{"one":"{0} کال مخکے","other":"{0} کاله مخکے"},"-1":"تېر کال"},"year-narrow":{"0":"سږ کال","1":"راتلونکی کال","future":{"one":"په {0} کال کے","other":"په {0} کالونو کے"},"past":{"one":"{0} کال مخکے","other":"{0} کاله مخکے"},"-1":"تير کال"},"quarter":{"0":"دا ربع","1":"راتلونکې ربع","future":{"one":"په {0} ربع کې","other":"په {0} ربعو کې"},"past":{"one":"{0} ربع مخکې","other":"{0} ربعې مخکې"},"-1":"ورستۍ ربع"},"quarter-short":{"0":"دا ربع","1":"راتلونکې ربع","future":{"one":"په {0} ربع کې","other":"په {0} ربعو کې"},"past":{"one":"{0} ربع مخکې","other":"{0} ربعې مخکې"},"-1":"ورستۍ ربع"},"quarter-narrow":{"0":"دا ربع","1":"راتلونکې ربع","future":{"one":"په {0} ربع کې","other":"په {0} ربعو کې"},"past":{"one":"{0} ربع مخکې","other":"{0} ربعې مخکې"},"-1":"ورستۍ ربع"},"month":{"0":"دا مياشت","1":"راتلونکې مياشت","future":{"one":"په {0} مياشت کې","other":"په {0} مياشتو کې"},"past":{"one":"{0} مياشت مخکې","other":"{0} مياشتې مخکې"},"-1":"تېره مياشت"},"month-short":{"0":"دا مياشت","1":"راتلونکې مياشت","future":{"one":"په {0} مياشت کې","other":"په {0} مياشت کې"},"past":{"one":"{0} مياشت مخکې","other":"{0} مياشت مخکې"},"-1":"تېره مياشت"},"month-narrow":{"0":"دا مياشت","1":"راتلونکې مياشت","future":{"one":"په {0} مياشت کې","other":"په {0} مياشت کې"},"past":{"one":"{0} مياشت مخکې","other":"{0} مياشت مخکې"},"-1":"تېره مياشت"},"week":{"0":"دا اونۍ","1":"راتلونکې اونۍ","future":{"one":"په {0} اونۍ کې","other":"په {0} اونيو کې"},"past":{"one":"{0} اونۍ مخکې","other":"{0} اونۍ مخکې"},"-1":"تيره اونۍ"},"week-short":{"0":"دا اونۍ","1":"راتلونکې اونۍ","future":{"one":"په {0} اونۍ کې","other":"په {0} اونۍ کې"},"past":{"one":"{0} اونۍ مخکې","other":"{0} اونۍ مخکې"},"-1":"تېره اونۍ"},"week-narrow":{"0":"دا اونۍ","1":"راتلونکې اونۍ","future":{"one":"په {0} اونۍ کې","other":"په {0} اونۍ کې"},"past":{"one":"{0} اونۍ مخکې","other":"{0} اونۍ مخکې"},"-1":"تېره اونۍ"},"day":{"0":"نن","1":"سبا","future":{"one":"په {0} ورځ کې","other":"په {0} ورځو کې"},"past":{"one":"{0} ورځ مخکې","other":"{0} ورځې مخکې"},"-1":"پرون"},"day-short":{"0":"نن","1":"سبا","future":{"one":"په {0} ورځ کې","other":"په {0} ورځو کې"},"past":{"one":"{0} ورځ مخکې","other":"{0} ورځې مخکې"},"-1":"پرون"},"day-narrow":{"0":"نن","1":"سبا","future":{"one":"په {0} ورځ کې","other":"په {0} ورځو کې"},"past":{"one":"{0} ورځ مخکې","other":"{0} ورځې مخکې"},"-1":"پرون"},"hour":{"0":"دا ساعت","future":{"one":"په {0} ساعت کې","other":"په {0} ساعتو کې"},"past":{"one":"{0} ساعت مخکې","other":"{0} ساعتونه مخکې"}},"hour-short":{"0":"دا ساعت","future":{"one":"په {0} ساعت کې","other":"په {0} ساعت کې"},"past":{"one":"{0} ساعت مخکې","other":"{0} ساعت مخکې"}},"hour-narrow":{"0":"دا ساعت","future":{"one":"په {0} ساعت کې","other":"په {0} ساعت کې"},"past":{"one":"{0} ساعت مخکې","other":"{0} ساعت مخکې"}},"minute":{"0":"دا دقيقه","future":{"one":"په {0} دقيقه کې","other":"په {0} دقيقو کې"},"past":{"one":"{0} دقيقه مخکې","other":"{0} دقيقې مخکې"}},"minute-short":{"0":"دا دقيقه","future":{"one":"په {0} دقيقه کې","other":"په {0} دقيقه کې"},"past":{"one":"{0} دقيقه مخکې","other":"{0} دقيقه مخکې"}},"minute-narrow":{"0":"دا دقيقه","future":{"one":"په {0} دقيقه کې","other":"په {0} دقيقه کې"},"past":{"one":"{0} دقيقه مخکې","other":"{0} دقيقه مخکې"}},"second":{"0":"اوس","future":{"one":"په {0} ثانيه کې","other":"په {0} ثانيو کې"},"past":{"one":"{0} ثانيه مخکې","other":"{0} ثانيې مخکې"}},"second-short":{"0":"اوس","future":{"one":"په {0} ثانيه کې","other":"په {0} ثانيه کې"},"past":{"one":"{0} ثانيه مخکې","other":"{0} ثانيه مخکې"}},"second-narrow":{"0":"اوس","future":{"one":"په {0} ثانيه کې","other":"په {0} ثانيه کې"},"past":{"one":"{0} ثانيه کې","other":"{0} ثانيه کې"}}},"locale":"ps-PK"}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
