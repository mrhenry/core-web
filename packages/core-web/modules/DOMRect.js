import CreateMethodProperty from "@mrhenry/core-web/helpers/_ESAbstract.CreateMethodProperty";
import Get from "@mrhenry/core-web/helpers/_ESAbstract.Get";
import ToObject from "@mrhenry/core-web/helpers/_ESAbstract.ToObject";
import Type from "@mrhenry/core-web/helpers/_ESAbstract.Type";
import HasOwnProperty from "@mrhenry/core-web/helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "@mrhenry/core-web/helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.ToPrimitive";
import Call from "@mrhenry/core-web/helpers/_ESAbstract.Call";
import GetMethod from "@mrhenry/core-web/helpers/_ESAbstract.GetMethod";
import GetV from "@mrhenry/core-web/helpers/_ESAbstract.GetV";
import IsCallable from "@mrhenry/core-web/helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "@mrhenry/core-web/helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "@mrhenry/core-web/helpers/_ESAbstract.ToString";
(function(undefined) {
if (!("DOMRect"in self&&function(e){try{return new e}catch(t){return!1}}(self.DOMRect)
)) {
// DOMRect
(function (global) {
	function number(v) {
		return v === undefined ? 0 : Number(v);
	}

	function different(u, v) {
		return u !== v && !(isNaN(u) && isNaN(v));
	}

	function DOMRect(xArg, yArg, wArg, hArg) {
		var x, y, width, height, left, right, top, bottom;

		x = number(xArg);
		y = number(yArg);
		width = number(wArg);
		height = number(hArg);

		Object.defineProperties(this, {
			x: {
				get: function () { return x; },
				set: function (newX) {
					if (different(x, newX)) {
						x = newX;
						left = right = undefined;
					}
				},
				enumerable: true
			},
			y: {
				get: function () { return y; },
				set: function (newY) {
					if (different(y, newY)) {
						y = newY;
						top = bottom = undefined;
					}
				},
				enumerable: true
			},
			width: {
				get: function () { return width; },
				set: function (newWidth) {
					if (different(width, newWidth)) {
						width = newWidth;
						left = right = undefined;
					}
				},
				enumerable: true
			},
			height: {
				get: function () { return height; },
				set: function (newHeight) {
					if (different(height, newHeight)) {
						height = newHeight;
						top = bottom = undefined;
					}
				},
				enumerable: true
			},
			left: {
				get: function () {
					if (left === undefined) {
						left = x + Math.min(0, width);
					}
					return left;
				},
				enumerable: true
			},
			right: {
				get: function () {
					if (right === undefined) {
						right = x + Math.max(0, width);
					}
					return right;
				},
				enumerable: true
			},
			top: {
				get: function () {
					if (top === undefined) {
						top = y + Math.min(0, height);
					}
					return top;
				},
				enumerable: true
			},
			bottom: {
				get: function () {
					if (bottom === undefined) {
						bottom = y + Math.max(0, height);
					}
					return bottom;
				},
				enumerable: true
			}
		});
	}

	global.DOMRect = DOMRect;
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
