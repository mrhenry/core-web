(function(undefined) {
if (!("nextElementSibling"in CharacterData.prototype
)) {
// CharacterData.prototype.nextElementSibling
Object.defineProperty(CharacterData.prototype, 'nextElementSibling',
	Object.getOwnPropertyDescriptor(Element.prototype, 'nextElementSibling')
);
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
