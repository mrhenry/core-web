import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import ToObject from "../helpers/_ESAbstract.ToObject";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import Get from "../helpers/_ESAbstract.Get";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import Call from "../helpers/_ESAbstract.Call";
import ToString from "../helpers/_ESAbstract.ToString";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import Type from "../helpers/_ESAbstract.Type";
(function(undefined) {
if (!((function(){try{return self.localStorage.setItem("storage_test",1),self.localStorage.removeItem("storage_test"),!0}catch(t){return!1}})()
)) {
// localStorage
(function () {
	function Storage() {}

	Storage.prototype = {
		clear: function () {
			getKeys(this).forEach(this.removeItem, this);
		},
		constructor: Storage,
		getItem: function () {
			var key = String(arguments[0]);

			return key in this ? this[key] : null;
		},
		key: function () {
			var index = parseInt(arguments[0], 10) || 0;

			return getKeys(this)[index] || null;
		},
		removeItem: function () {
			var key = String(arguments[0]);

			if (Object.prototype.hasOwnProperty.call(this, key)) {
				delete this[key];
				--this.length;
			}

			updateKeys();
		},
		setItem: function () {
			var key = String(arguments[0]), value = String(arguments[1]);

			if (!(Object.prototype.hasOwnProperty.call(this, key))) {
				++this.length;
			}

			this[key] = value;

			updateKeys();
		}
	};

	function getKeys(object) {
		var buffer = [], key;

		for (key in object) {
			if (Object.prototype.hasOwnProperty.call(object, key) && key !== 'length') {
				buffer.push(key);
			}
		}

		return buffer;
	}

	function updateKeys() {
		var unloadkeys = [];

		var keys = getKeys(localStorage);

		unloadkeys.concat(keys).forEach(function (key) {
			if (key in localStorage) {
				element.setAttribute(userdata + key, localStorage[key]);
			} else {
				element.removeAttribute(userdata + key);
			}
		});

		element.setAttribute(userdata, keys.join(','));

		element.save(userdata);
	}

	var localStorageExists = (function() {
		try {
			return !!self.localStorage;
		} catch (e) {
			return false;
		}
	})();
	
	if (!localStorageExists) {
		var
		// <Global>.localStorage
		localStorage = self.localStorage = new Storage(),
		// set storage element
		element = self.document.lastChild.lastChild.appendChild(self.document.createElement('x-local-storage')),
		// set userdata key and prefix
		userdata = 'userdata',
		keys;

		// proprietary ie local storage
		try {
			element.addBehavior('#default#' + userdata);
			element.load(userdata);
		// eslint-disable-next-line no-empty
		} catch (error) {}

		// get keys
		keys = element.getAttribute(userdata) ? element.getAttribute(userdata).split(',') : [];

		localStorage.length = keys.length;

		// assign keys to localStorage
		keys.forEach(function (key) {
			localStorage[key] = element.getAttribute(userdata + key);
		});

		if (self.attachEvent) {
			self.attachEvent('onunload', updateKeys);
		}
	}
}());
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
