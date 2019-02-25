import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
(function(undefined) {
if (!("toBlob"in HTMLCanvasElement.prototype
)) {
// HTMLCanvasElement.prototype.toBlob
/* global CreateMethodProperty, Uint8Array */
CreateMethodProperty(HTMLCanvasElement.prototype, 'toBlob', function (callback, type, quality) {
	var binStr = atob(this.toDataURL(type, quality).split(',')[1]);
	var len = binStr.length;
	var arr = new Uint8Array(len);
	for (var i = 0; i < len; i++) {
		arr[i] = binStr.charCodeAt(i);
	}
	callback(new Blob([arr], { type: type || 'image/png' }));
});
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
