import _mutation from "@mrhenry/core-web/helpers/_mutation";
(function(undefined) {
if (!("remove"in CharacterData.prototype
)) {
// CharacterData.prototype.remove
CharacterData.prototype.remove = Element.prototype.remove
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
