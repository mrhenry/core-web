(function(undefined) {
if (!("Intl"in self&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf("fr").length}catch(l){return!1}}()
)) {
// Intl.PluralRules.~locale.fr
/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({"data":{"categories":{"cardinal":["one","many","other"],"ordinal":["one","other"]},"fn":function(n, ord) {
  var _n = String(n), se = _n.split(/[ce]/), e = se[1] || 0, c = e, s = String(e ? Number(se[0]) * Math.pow(10, e) : _n).split("."), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
  if (ord) return n == 1 ? 'one' : 'other';
  return n >= 0 && n < 2 ? 'one'
    : e == 0 && i != 0 && i1000000 == 0 && v0 || (e < 0 || e > 5) ? 'many'
    : 'other';
}},"locale":"fr"})
}
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
