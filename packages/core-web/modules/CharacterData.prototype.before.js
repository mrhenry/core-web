import _mutation from "@mrhenry/core-web/helpers/_mutation";
(function(undefined) {
if (!("before"in CharacterData.prototype
)) {
// CharacterData.prototype.before
CharacterData.prototype.before = Element.prototype.before
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
