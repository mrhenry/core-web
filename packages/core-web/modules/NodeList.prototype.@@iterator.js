import Iterator from "@mrhenry/core-web/helpers/_Iterator";
import ArrayIterator from "@mrhenry/core-web/helpers/_ArrayIterator";
(function(undefined) {
if (!("Symbol"in self&&"iterator"in self.Symbol&&function(){var e=document.createDocumentFragment()
return e.appendChild(document.createElement("div")),!!e.childNodes[self.Symbol.iterator]}()
)) {
// NodeList.prototype.@@iterator
/* global Symbol, ArrayIterator*/
NodeList.prototype[Symbol.iterator] = function () {
	return new ArrayIterator(this);
};
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
