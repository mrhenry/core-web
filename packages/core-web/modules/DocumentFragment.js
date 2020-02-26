(function(undefined) {
if (!("DocumentFragment"in this&&this.DocumentFragment===document.createDocumentFragment().constructor
)) {
// DocumentFragment
this.DocumentFragment = document.createDocumentFragment().constructor;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
