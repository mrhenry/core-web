(function(undefined) {
if (!("document"in self&&"cloneNode"in document.documentElement&&function(){var e=document.createElement("div"),n=document.createElement("input")
n.type="radio",n.checked=!0,e.appendChild(n)
var c,t=n.cloneNode(!1)
try{c=e.cloneNode()}catch(d){return!1}return t.checked&&void 0!==c&&0===c.childNodes.length}()
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
