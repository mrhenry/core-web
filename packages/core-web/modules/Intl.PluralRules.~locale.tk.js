(function(undefined) {
if (!("Intl"in this&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf("tk").length}catch(l){return!1}}()
)) {
// Intl.PluralRules.~locale.tk
/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({"locale":"tk","categories":{"cardinal":["one","other"],"ordinal":["few","other"]},"fn":function(n, ord) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1);
  if (ord) return ((n10 == 6 || n10 == 9)
          || n == 10) ? 'few' : 'other';
  return (n == 1) ? 'one' : 'other';
}})
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
