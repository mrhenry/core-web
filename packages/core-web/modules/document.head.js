(function(undefined) {
if (!("document"in self&&"head"in self.document
)) {
// document.head
document.head = document.getElementsByTagName('head')[0];
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
