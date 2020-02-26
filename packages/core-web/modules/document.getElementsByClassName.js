(function(undefined) {
if (!("document"in this&&"getElementsByClassName"in this.document
)) {
// document.getElementsByClassName
document.getElementsByClassName = function(search) {
	return document.querySelectorAll("." + String(search).split(/\s+/).join('.'));
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
