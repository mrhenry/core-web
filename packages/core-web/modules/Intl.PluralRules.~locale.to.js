(function(undefined) {
if (!("Intl"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&1===Intl.PluralRules.supportedLocalesOf("to").length
)) {
// Intl.PluralRules.~locale.to
/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({"locale":"to","categories":{"cardinal":["other"],"ordinal":["other"]},"fn":function(n, ord) {
  if (ord) return 'other';
  return 'other';
}})
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
