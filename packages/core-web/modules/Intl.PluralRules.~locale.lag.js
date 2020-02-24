(function(undefined) {
if (!("Intl"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&1===Intl.PluralRules.supportedLocalesOf("lag").length
)) {
// Intl.PluralRules.~locale.lag
/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({"locale":"lag","categories":{"cardinal":["zero","one","other"],"ordinal":["other"]},"fn":function(n, ord) {
  var s = String(n).split('.'), i = s[0];
  if (ord) return 'other';
  return (n == 0) ? 'zero'
      : ((i == 0
          || i == 1) && n != 0) ? 'one'
      : 'other';
}})
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
