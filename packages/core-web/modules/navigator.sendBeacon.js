(function(undefined) {
if (!("navigator"in self&&"sendBeacon"in navigator
)) {
// navigator.sendBeacon
/* global ActiveXObject */
if (!('navigator' in self)) self.navigator = {};
self.navigator.sendBeacon = function sendBeacon(url, data) {
	var xhr = ('XMLHttpRequest' in window) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('POST', url, false);
	xhr.setRequestHeader('Accept', '*/*');
	if (typeof data === 'string') {
		xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
	} else if (Object.prototype.toString.call(data) === '[object Blob]') {
		if (data.type) {
			xhr.setRequestHeader('Content-Type', data.type);
		}
	}
	xhr.send(data);
	return true;
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
