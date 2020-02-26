import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToObject from "../helpers/_ESAbstract.ToObject";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import Get from "../helpers/_ESAbstract.Get";
import Type from "../helpers/_ESAbstract.Type";
import ToString from "../helpers/_ESAbstract.ToString";
(function(undefined) {
if (!((function(){if(!document.documentElement.dataset)return!1
var t=document.createElement("div")
return t.setAttribute("data-a-b","c"),t.dataset&&"c"==t.dataset.aB})()
)) {
// Element.prototype.dataset
Object.defineProperty(Element.prototype, 'dataset', {
	get: function() {
		var element = this;
		var attributes = this.attributes;
		var map = {};

		for (var i = 0; i < attributes.length; i++) {
			var attribute = attributes[i];

			if (attribute && attribute.name && (/^data-\w[\w-]*$/).test(attribute.name)) {
				var name = attribute.name;
				var value = attribute.value;

				var propName = name.substr(5).replace(/-./g, function (prop) {
					return prop.charAt(1).toUpperCase();
				});

				Object.defineProperty(map, propName, {
					enumerable: true,
					get: function() {
						return this.value;
					}.bind({value: value || ''}),
					set: function setter(name, value) {
						if (typeof value !== 'undefined') {
							this.setAttribute(name, value);
						} else {
							this.removeAttribute(name);
						}
					}.bind(element, name)
				});
			}
		}

		return map;
	}
});
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
