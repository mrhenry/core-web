(function(undefined) {
if (!("document"in self&&"getElementsByClassName"in self.document
)) {
// document.getElementsByClassName
document.getElementsByClassName = function(search) {
	return document.querySelectorAll("." + String(search).split(/\s+/).join('.'));
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
