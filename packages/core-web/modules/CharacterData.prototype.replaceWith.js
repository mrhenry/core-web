import _mutation from "@mrhenry/core-web/helpers/_mutation";
(function(undefined) {
if (!("replaceWith"in CharacterData.prototype
)) {
// CharacterData.prototype.replaceWith
CharacterData.prototype.replaceWith = Element.prototype.replaceWith
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
