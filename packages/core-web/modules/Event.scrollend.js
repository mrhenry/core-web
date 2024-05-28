(function(undefined) {
if (!("onscrollend"in self&&(null==self.onscrollend||"function"==typeof self.onscrollend)
)) {
// Event.scrollend
(function (global) {
	var scrollEndEvent = new global.Event('scrollend');
	var pointers = new global.Set();

	// Track if any pointer is active
	global.document.addEventListener('touchstart', function (e) {
		for (var i = 0; i < e.changedTouches.length; i++) {
			pointers.add(e.changedTouches[i].identifier);
		}
	}, { passive: true });

	global.document.addEventListener('touchend', function (e) {
		for (var i = 0; i < e.changedTouches.length; i++) {
			pointers.delete(e.changedTouches[i].identifier);
		}
	}, { passive: true });

	// Map of scroll-observed elements.
	var observed = new global.WeakMap();

	function onAddListener(originalFn, type) {
		var scrollPort = this;

		var data = observed.get(scrollPort);
		if (data !== undefined) {
			data.listeners[type]++;
			return;
		}

		var timeout = 0;

		data = {
			scrollListener: function scrollListener(evt) { // eslint-disable-line no-unused-vars
				clearTimeout(timeout);

				timeout = setTimeout(function () {
					if (pointers.size) {
						// if pointer(s) are down, wait longer
						setTimeout(data.scrollListener, 100);
						return;
					}

					// dispatch
					if (scrollPort) {
						scrollPort.dispatchEvent(scrollEndEvent);
					}
				}, 100);

			},
			listeners: {
				scroll: 0,
				scrollend: 0
			}
		};

		originalFn.apply(scrollPort, ['scroll', data.scrollListener]);
		observed.set(scrollPort, data);
	}

	function onRemoveListener(originalFn, type) {
		var scrollPort = this;
		var data = observed.get(scrollPort);

		if (data === undefined) {
			return;
		}

		data.listeners[type] = Math.max(0, data.listeners[type] - 1);
		// If there are still listeners, nothing more to do.
		if ((data.listeners.scroll + data.listeners.scrollend) > 0) {
			return;
		}

		// Otherwise, remove the added listeners.
		originalFn.apply(scrollPort, ['scroll', data.scrollListener]);
		observed.delete(scrollPort);
	}

	function polyfillAddEventListener(proto) {
		var native = proto.addEventListener;
		proto.addEventListener = function addEventListener(type, callback) { // eslint-disable-line no-unused-vars
			var args = global.Array.prototype.slice.apply(arguments, [0]);
			native.apply(this, args);

			if (type !== 'scroll' && type !== 'scrollend') {
				return;
			}

			if (arguments[2] && arguments[2].once) {
				var removerArgs = global.Array.prototype.slice.apply(arguments, [0]);
				var _this = this;

				var remover = function () {
					_this.removeEventListener(type, remover);
					_this.removeEventListener.apply(_this, removerArgs);
				}

				_this.addEventListener(type, remover);
			}

			args.unshift(native);
			onAddListener.apply(this, args);
		}
	}

	function polyfillRemoveEventListener(proto) {
		var native = proto.removeEventListener;
		proto.removeEventListener = function removeEventListener(type, callback) { // eslint-disable-line no-unused-vars
			var args = global.Array.prototype.slice.apply(arguments, [0]);
			native.apply(this, args);

			if (type !== 'scroll' && type !== 'scrollend') {
				return;
			}

			args.unshift(native);
			onRemoveListener.apply(this, args);
		}
	}

	polyfillAddEventListener(global.Element.prototype);
	polyfillAddEventListener(global);
	polyfillAddEventListener(global.document);
	polyfillRemoveEventListener(global.Element.prototype);
	polyfillRemoveEventListener(global);
	polyfillRemoveEventListener(global.document);

	if (!('onscrollend' in self)) {
		// Make sure a check for 'onhashchange' in window will pass
		global.onscrollend = null;
	}
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
