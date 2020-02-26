(function(undefined) {
if (!("CustomEvent"in this&&("function"==typeof this.CustomEvent||this.CustomEvent.toString().indexOf("CustomEventConstructor")>-1)
)) {
// CustomEvent
this.CustomEvent = function CustomEvent(type, eventInitDict) {
	if (!type) {
		throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
	}

	var event;
	eventInitDict = eventInitDict || {bubbles: false, cancelable: false, detail: null};

	if ('createEvent' in document) {
		try {
			event = document.createEvent('CustomEvent');
			event.initCustomEvent(type, eventInitDict.bubbles, eventInitDict.cancelable, eventInitDict.detail);
		} catch (error) {
			// for browsers which don't support CustomEvent at all, we use a regular event instead
			event = document.createEvent('Event');
			event.initEvent(type, eventInitDict.bubbles, eventInitDict.cancelable);
			event.detail = eventInitDict.detail;
		}
	} else {

		// IE8
		event = new Event(type, eventInitDict);
		event.detail = eventInitDict && eventInitDict.detail || null;
	}
	return event;
};

CustomEvent.prototype = Event.prototype;
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
