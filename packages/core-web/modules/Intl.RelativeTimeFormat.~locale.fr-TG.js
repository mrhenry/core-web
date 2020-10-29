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
if (!("Intl"in self&&Intl.RelativeTimeFormat&&Intl.RelativeTimeFormat.supportedLocalesOf&&1===Intl.RelativeTimeFormat.supportedLocalesOf("fr-TG").length
)) {
// Intl.RelativeTimeFormat.~locale.fr-TG
/* @generated */	
// prettier-ignore
if (Intl.RelativeTimeFormat && typeof Intl.RelativeTimeFormat.__addLocaleData === 'function') {
  Intl.RelativeTimeFormat.__addLocaleData({"data":{"fr-TG":{"nu":["latn"],"year":{"0":"cette année","1":"l’année prochaine","future":{"one":"dans {0} an","other":"dans {0} ans"},"past":{"one":"il y a {0} an","other":"il y a {0} ans"},"-1":"l’année dernière"},"year-short":{"0":"cette année","1":"l’année prochaine","future":{"one":"dans {0} a","other":"dans {0} a"},"past":{"one":"il y a {0} a","other":"il y a {0} a"},"-1":"l’année dernière"},"year-narrow":{"0":"cette année","1":"l’année prochaine","future":{"one":"+{0} a","other":"+{0} a"},"past":{"one":"-{0} a","other":"-{0} a"},"-1":"l’année dernière"},"quarter":{"0":"ce trimestre","1":"le trimestre prochain","future":{"one":"dans {0} trimestre","other":"dans {0} trimestres"},"past":{"one":"il y a {0} trimestre","other":"il y a {0} trimestres"},"-1":"le trimestre dernier"},"quarter-short":{"0":"ce trimestre","1":"le trimestre prochain","future":{"one":"dans {0} trim.","other":"dans {0} trim."},"past":{"one":"il y a {0} trim.","other":"il y a {0} trim."},"-1":"le trimestre dernier"},"quarter-narrow":{"0":"ce trimestre","1":"le trimestre prochain","future":{"one":"+{0} trim.","other":"+{0} trim."},"past":{"one":"-{0} trim.","other":"-{0} trim."},"-1":"le trimestre dernier"},"month":{"0":"ce mois-ci","1":"le mois prochain","future":{"one":"dans {0} mois","other":"dans {0} mois"},"past":{"one":"il y a {0} mois","other":"il y a {0} mois"},"-1":"le mois dernier"},"month-short":{"0":"ce mois-ci","1":"le mois prochain","future":{"one":"dans {0} m.","other":"dans {0} m."},"past":{"one":"il y a {0} m.","other":"il y a {0} m."},"-1":"le mois dernier"},"month-narrow":{"0":"ce mois-ci","1":"le mois prochain","future":{"one":"+{0} m.","other":"+{0} m."},"past":{"one":"-{0} m.","other":"-{0} m."},"-1":"le mois dernier"},"week":{"0":"cette semaine","1":"la semaine prochaine","future":{"one":"dans {0} semaine","other":"dans {0} semaines"},"past":{"one":"il y a {0} semaine","other":"il y a {0} semaines"},"-1":"la semaine dernière"},"week-short":{"0":"cette semaine","1":"la semaine prochaine","future":{"one":"dans {0} sem.","other":"dans {0} sem."},"past":{"one":"il y a {0} sem.","other":"il y a {0} sem."},"-1":"la semaine dernière"},"week-narrow":{"0":"cette semaine","1":"la semaine prochaine","future":{"one":"+{0} sem.","other":"+{0} sem."},"past":{"one":"-{0} sem.","other":"-{0} sem."},"-1":"la semaine dernière"},"day":{"0":"aujourd’hui","1":"demain","2":"après-demain","future":{"one":"dans {0} jour","other":"dans {0} jours"},"past":{"one":"il y a {0} jour","other":"il y a {0} jours"},"-2":"avant-hier","-1":"hier"},"day-short":{"0":"aujourd’hui","1":"demain","2":"après-demain","future":{"one":"dans {0} j","other":"dans {0} j"},"past":{"one":"il y a {0} j","other":"il y a {0} j"},"-2":"avant-hier","-1":"hier"},"day-narrow":{"0":"aujourd’hui","1":"demain","2":"après-demain","future":{"one":"+{0} j","other":"+{0} j"},"past":{"one":"-{0} j","other":"-{0} j"},"-2":"avant-hier","-1":"hier"},"hour":{"0":"cette heure-ci","future":{"one":"dans {0} heure","other":"dans {0} heures"},"past":{"one":"il y a {0} heure","other":"il y a {0} heures"}},"hour-short":{"0":"cette heure-ci","future":{"one":"dans {0} h","other":"dans {0} h"},"past":{"one":"il y a {0} h","other":"il y a {0} h"}},"hour-narrow":{"0":"cette heure-ci","future":{"one":"+{0} h","other":"+{0} h"},"past":{"one":"-{0} h","other":"-{0} h"}},"minute":{"0":"cette minute-ci","future":{"one":"dans {0} minute","other":"dans {0} minutes"},"past":{"one":"il y a {0} minute","other":"il y a {0} minutes"}},"minute-short":{"0":"cette minute-ci","future":{"one":"dans {0} min","other":"dans {0} min"},"past":{"one":"il y a {0} min","other":"il y a {0} min"}},"minute-narrow":{"0":"cette minute-ci","future":{"one":"+{0} min","other":"+{0} min"},"past":{"one":"-{0} min","other":"-{0} min"}},"second":{"0":"maintenant","future":{"one":"dans {0} seconde","other":"dans {0} secondes"},"past":{"one":"il y a {0} seconde","other":"il y a {0} secondes"}},"second-short":{"0":"maintenant","future":{"one":"dans {0} s","other":"dans {0} s"},"past":{"one":"il y a {0} s","other":"il y a {0} s"}},"second-narrow":{"0":"maintenant","future":{"one":"+{0} s","other":"+{0} s"},"past":{"one":"-{0} s","other":"-{0} s"}}}},"availableLocales":["fr-TG"]}
)
}}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
