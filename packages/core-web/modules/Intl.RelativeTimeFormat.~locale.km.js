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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("km").length
)) {
// Intl.RelativeTimeFormat.~locale.km
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"km":{"nu":["latn"],"year":{"0":"ឆ្នាំ​នេះ","1":"ឆ្នាំ​ក្រោយ","future":{"other":"{0} ឆ្នាំទៀត"},"past":{"other":"{0} ឆ្នាំ​មុន"},"-1":"ឆ្នាំ​មុន"},"year-short":{"0":"ឆ្នាំ​នេះ","1":"ឆ្នាំ​ក្រោយ","future":{"other":"{0} ឆ្នាំទៀត"},"past":{"other":"{0} ឆ្នាំ​មុន"},"-1":"ឆ្នាំ​មុន"},"year-narrow":{"0":"ឆ្នាំ​នេះ","1":"ឆ្នាំ​ក្រោយ","future":{"other":"{0} ឆ្នាំទៀត"},"past":{"other":"{0} ឆ្នាំ​មុន"},"-1":"ឆ្នាំ​មុន"},"quarter":{"0":"ត្រីមាស​នេះ","1":"ត្រីមាស​ក្រោយ","future":{"other":"{0} ត្រីមាសទៀត"},"past":{"other":"{0} ត្រីមាស​មុន"},"-1":"ត្រីមាស​មុន"},"quarter-short":{"0":"ត្រីមាស​នេះ","1":"ត្រីមាស​ក្រោយ","future":{"other":"{0} ត្រីមាសទៀត"},"past":{"other":"{0} ត្រីមាស​មុន"},"-1":"ត្រីមាស​មុន"},"quarter-narrow":{"0":"ត្រីមាស​នេះ","1":"ត្រីមាស​ក្រោយ","future":{"other":"{0} ត្រីមាសទៀត"},"past":{"other":"{0} ត្រីមាស​មុន"},"-1":"ត្រីមាស​មុន"},"month":{"0":"ខែ​នេះ","1":"ខែ​ក្រោយ","future":{"other":"{0} ខែទៀត"},"past":{"other":"{0} ខែមុន"},"-1":"ខែ​មុន"},"month-short":{"0":"ខែ​នេះ","1":"ខែ​ក្រោយ","future":{"other":"{0} ខែទៀត"},"past":{"other":"{0} ខែមុន"},"-1":"ខែ​មុន"},"month-narrow":{"0":"ខែ​នេះ","1":"ខែ​ក្រោយ","future":{"other":"{0} ខែទៀត"},"past":{"other":"{0} ខែមុន"},"-1":"ខែ​មុន"},"week":{"0":"សប្ដាហ៍​នេះ","1":"សប្ដាហ៍​ក្រោយ","future":{"other":"{0} សប្ដាហ៍ទៀត"},"past":{"other":"{0} សប្ដាហ៍​មុន"},"-1":"សប្ដាហ៍​មុន"},"week-short":{"0":"សប្ដាហ៍​នេះ","1":"សប្ដាហ៍​ក្រោយ","future":{"other":"{0} សប្ដាហ៍ទៀត"},"past":{"other":"{0} សប្ដាហ៍​មុន"},"-1":"សប្ដាហ៍​មុន"},"week-narrow":{"0":"សប្ដាហ៍​នេះ","1":"សប្ដាហ៍​ក្រោយ","future":{"other":"{0} សប្ដាហ៍ទៀត"},"past":{"other":"{0} សប្ដាហ៍​មុន"},"-1":"សប្ដាហ៍​មុន"},"day":{"0":"ថ្ងៃ​នេះ","1":"ថ្ងៃ​ស្អែក","2":"​ខាន​ស្អែក","future":{"other":"{0} ថ្ងៃទៀត"},"past":{"other":"{0} ថ្ងៃ​មុន"},"-2":"ម្សិល​ម៉្ងៃ","-1":"ម្សិលមិញ"},"day-short":{"0":"ថ្ងៃ​នេះ","1":"ថ្ងៃស្អែក","2":"​ខាន​ស្អែក","future":{"other":"{0} ថ្ងៃទៀត"},"past":{"other":"{0} ថ្ងៃ​​មុន"},"-2":"ម្សិល​ម៉្ងៃ","-1":"ម្សិលមិញ"},"day-narrow":{"0":"ថ្ងៃ​នេះ","1":"ថ្ងៃស្អែក","2":"​ខាន​ស្អែក","future":{"other":"{0} ថ្ងៃទៀត"},"past":{"other":"{0} ថ្ងៃ​​មុន"},"-2":"ម្សិល​ម៉្ងៃ","-1":"ម្សិលមិញ"},"hour":{"0":"ម៉ោងនេះ","future":{"other":"ក្នុង​រយៈ​ពេល {0} ម៉ោង"},"past":{"other":"{0} ម៉ោង​មុន"}},"hour-short":{"0":"ម៉ោងនេះ","future":{"other":"{0} ម៉ោងទៀត"},"past":{"other":"{0} ម៉ោង​មុន"}},"hour-narrow":{"0":"ម៉ោងនេះ","future":{"other":"{0} ម៉ោងទៀត"},"past":{"other":"{0} ម៉ោង​មុន"}},"minute":{"0":"នាទីនេះ","future":{"other":"{0} នាទីទៀត"},"past":{"other":"{0} នាទី​មុន"}},"minute-short":{"0":"នាទីនេះ","future":{"other":"{0} នាទីទៀត"},"past":{"other":"{0} នាទី​​មុន"}},"minute-narrow":{"0":"នាទីនេះ","future":{"other":"{0} នាទីទៀត"},"past":{"other":"{0} នាទី​​មុន"}},"second":{"0":"ឥឡូវ","future":{"other":"{0} វិនាទីទៀត"},"past":{"other":"{0} វិនាទី​មុន"}},"second-short":{"0":"ឥឡូវ","future":{"other":"{0} វិនាទីទៀត"},"past":{"other":"{0} វិនាទី​មុន"}},"second-narrow":{"0":"ឥឡូវ","future":{"other":"{0} វិនាទីទៀត"},"past":{"other":"{0} វិនាទី​មុន"}}}},"availableLocales":["km"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
