(function(undefined) {
if (!("Intl"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&1===Intl.PluralRules.supportedLocalesOf("ln").length
)) {
// Intl.PluralRules.~locale.ln
/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({"locale":"ln","categories":{"cardinal":["one","other"],"ordinal":["other"]},"fn":function(n, ord) {
  if (ord) return 'other';
  return ((n == 0
          || n == 1)) ? 'one' : 'other';
}})
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
