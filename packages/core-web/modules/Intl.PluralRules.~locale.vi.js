(function(undefined) {
if (!("Intl"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf("vi").length}catch(l){return!1}}
)) {
// Intl.PluralRules.~locale.vi
/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({"locale":"vi","categories":{"cardinal":["other"],"ordinal":["one","other"]},"fn":function(n, ord) {
  if (ord) return (n == 1) ? 'one' : 'other';
  return 'other';
}})
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
