(function(undefined) {
if (!("DocumentFragment"in self&&self.DocumentFragment===document.createDocumentFragment().constructor
)) {
// DocumentFragment
self.DocumentFragment = document.createDocumentFragment().constructor;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
