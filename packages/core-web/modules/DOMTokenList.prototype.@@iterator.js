import _DOMTokenList from "@mrhenry/core-web/helpers/_DOMTokenList";
import Iterator from "@mrhenry/core-web/helpers/_Iterator";
import ArrayIterator from "@mrhenry/core-web/helpers/_ArrayIterator";
(function(undefined) {
if (!("Symbol"in self&&"iterator"in self.Symbol&&function(){try{var t=document.createElement("div")
return!(!t.classList||!t.classList[self.Symbol.iterator])}catch(t){return!1}}()
)) {
// DOMTokenList.prototype.@@iterator
/* global ArrayIterator */
(function (global) {
	global.DOMTokenList.prototype[global.Symbol.iterator] = function () {
		return new ArrayIterator(this);
	};

	var e = document.createElement('span');
	if (
		e.classList &&
		e.classList.constructor &&
		e.classList.constructor.prototype &&
		!e.classList.constructor.prototype[global.Symbol.iterator]
	) {
		e.classList.constructor.prototype[global.Symbol.iterator] = function () {
			return new ArrayIterator(this);
		}
	}
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
