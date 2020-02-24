(function(undefined) {
if (!("Intl"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&1===Intl.PluralRules.supportedLocalesOf("pa").length
)) {
// Intl.PluralRules.~locale.pa
/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({"locale":"pa","categories":{"cardinal":["one","other"],"ordinal":["other"]},"fn":function(n, ord) {
  if (ord) return 'other';
  return ((n == 0
          || n == 1)) ? 'one' : 'other';
}})
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
