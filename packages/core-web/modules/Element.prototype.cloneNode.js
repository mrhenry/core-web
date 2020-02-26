(function(undefined) {
if (!("document"in this&&"cloneNode"in document.documentElement&&function(){var e=document.createElement("div"),n=document.createElement("input")
n.type="radio",n.checked=!0,e.appendChild(n)
var t,c=n.cloneNode(!1)
try{t=e.cloneNode()}catch(d){return!1}return c.checked&&void 0!==t&&0===t.childNodes.length}()
)) {
// Element.prototype.cloneNode
Element.prototype.cloneNode = (function(nativeFunc, undef) {
	return function(deep) {
		if (deep === undef) {
			deep = false;
		}
		var clone = nativeFunc.call(this, deep);

		if ('checked' in this) clone.checked = this.checked;

		return clone;
	};
}(Element.prototype.cloneNode));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
