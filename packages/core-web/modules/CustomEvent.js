(function(undefined) {
if (!("CustomEvent"in self&&("function"==typeof self.CustomEvent||-1<self.CustomEvent.toString().indexOf("CustomEventConstructor"))
)) {
// CustomEvent
self.CustomEvent = function CustomEvent(type, eventInitDict) {
	if (!type) {
		throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
	}

	var event;
	eventInitDict = eventInitDict || {bubbles: false, cancelable: false, detail: null};

	try {
		event = document.createEvent('CustomEvent');
		event.initCustomEvent(type, eventInitDict.bubbles, eventInitDict.cancelable, eventInitDict.detail);
	} catch (error) {
		// for browsers which don't support CustomEvent at all, we use a regular event instead
		event = document.createEvent('Event');
		event.initEvent(type, eventInitDict.bubbles, eventInitDict.cancelable);
		event.detail = eventInitDict.detail;
	}
	return event;
};

CustomEvent.prototype = Event.prototype;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
