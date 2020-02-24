(function(undefined) {
if (!("Intl"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&1===Intl.PluralRules.supportedLocalesOf("naq").length
)) {
// Intl.PluralRules.~locale.naq
/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({"locale":"naq","categories":{"cardinal":["one","two","other"],"ordinal":["other"]},"fn":function(n, ord) {
  if (ord) return 'other';
  return (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : 'other';
}})
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
