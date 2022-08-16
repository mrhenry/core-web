(function(undefined) {
if (!("previousElementSibling"in CharacterData.prototype
)) {
// CharacterData.prototype.previousElementSibling
Object.defineProperty(CharacterData.prototype, 'previousElementSibling',
	Object.getOwnPropertyDescriptor(Element.prototype, 'previousElementSibling')
);
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
