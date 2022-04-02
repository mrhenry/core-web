(function(undefined) {
if (!("matchMedia"in self&&"addEventListener"in self.matchMedia("all")
)) {
// MediaQueryList.prototype.addEventListener
(function(global) {
	"use strict";

	function addEventListener(type, listener) {
		if (type === 'change') {
			this.addListener(listener);
		}

		if (arguments[2] && arguments[2].once) {
			var _this = this;
			var remover = function () {
				_this.removeListener(remover);
				_this.removeListener(listener);
			}
			this.addListener(remover);
		}
	}

	function removeEventListener(type, listener) {
		if (type === 'change') {
			this.removeListener(listener);
		}
	}

	var onchangeDescriptor = {
		enumerable: true,
		configurable: true,
		get: function () {
			return this._onchangeHandler || null;
		},
		set: function (listener) {
			var _this = this;
			if (!_this._onchangeListener) {
				_this._onchangeListener = function () {
					if (typeof _this._onchangeHandler !== 'function') {
						return;
					}

					_this._onchangeHandler.call(_this, arguments[0]);
				};

				_this.addEventListener('change', _this._onchangeListener);
			}

			_this._onchangeHandler = listener;
		}
	};

	if ('MediaQueryList' in global) { /* Most browsers expose "MediaQueryList" globally */
		var _addListener = global.MediaQueryList.prototype.addListener;
		var _removeListener = global.MediaQueryList.prototype.removeListener;

		global.MediaQueryList.prototype.addListener = function addListener(listener) {
			var handler = listener;
			if (handler.handleEvent) {
				handler = handler.handleEvent;
			}

			_addListener.call(this, handler);
		};

		global.MediaQueryList.prototype.removeListener = function removeListener(listener) {
			var handler = listener;
			if (handler.handleEvent) {
				handler = handler.handleEvent;
			}

			_removeListener.call(this, handler);
		};

		global.MediaQueryList.prototype.addEventListener = addEventListener;

		global.MediaQueryList.prototype.removeEventListener = removeEventListener;

		global.Object.defineProperty(global.MediaQueryList.prototype, "onchange", onchangeDescriptor);
	} else { /* Safari does not expose "MediaQueryList" globally */
		var _matchMedia = self.matchMedia;

		self.matchMedia = function matchMedia(media) {
			var _mql = _matchMedia(media);

			var _addListener = _mql.addListener;
			var _removeListener = _mql.removeListener;

			_mql.addListener = function addListener(listener) {
				var handler = listener;
				if (handler.handleEvent) {
					handler = handler.handleEvent;
				}

				_addListener.call(this, handler);
			};

			_mql.removeListener = function removeListener(listener) {
				var handler = listener;
				if (handler.handleEvent) {
					handler = handler.handleEvent;
				}

				_removeListener.call(this, handler);
			};

			_mql.addEventListener = addEventListener;

			_mql.removeEventListener = removeEventListener;

			global.Object.defineProperty(_mql, "onchange", onchangeDescriptor);

			return _mql;
		}
	}
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
