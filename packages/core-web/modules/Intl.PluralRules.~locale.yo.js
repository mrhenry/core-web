(function(undefined) {
if (!("Intl"in self&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf("yo").length}catch(l){return!1}}()
)) {
// Intl.PluralRules.~locale.yo
/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({"data":{"categories":{"cardinal":["other"],"ordinal":["other"]},"fn":function(n, ord) {
  return 'other';
}},"locale":"yo"})
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});