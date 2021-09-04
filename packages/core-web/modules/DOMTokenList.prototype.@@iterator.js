import ArrayIterator from "@mrhenry/core-web/helpers/_ArrayIterator";
import Iterator from "@mrhenry/core-web/helpers/_Iterator";
import _DOMTokenList from "@mrhenry/core-web/helpers/_DOMTokenList";
(function(undefined) {
if (!("Symbol"in self&&"iterator"in self.Symbol&&function(){try{var t=document.createElement("div")
return!(!t.classList||!t.classList[self.Symbol.iterator])}catch(e){return!1}}()
)) {
// DOMTokenList.prototype.@@iterator
/* global Symbol, ArrayIterator*/
DOMTokenList.prototype[Symbol.iterator] = function () {
	return new ArrayIterator(this);
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
