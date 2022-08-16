import _mutation from "@mrhenry/core-web/helpers/_mutation";
(function(undefined) {
if (!("after"in CharacterData.prototype
)) {
// CharacterData.prototype.after
CharacterData.prototype.after = Element.prototype.after
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
