import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import Get from "../helpers/_ESAbstract.Get";
import ToObject from "../helpers/_ESAbstract.ToObject";
import Type from "../helpers/_ESAbstract.Type";
import HasOwnProperty from "../helpers/_ESAbstract.HasOwnProperty";
import ToPropertyKey from "../helpers/_ESAbstract.ToPropertyKey";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import ToString from "../helpers/_ESAbstract.ToString";
(function(undefined) {
if (!("innerHeight"in self&&"innerWidth"in self&&"pageXOffset"in self&&"pageYOffset"in self&&"scrollX"in self&&"scrollY"in self
)) {
// ~viewport
(function (global) {
	var doc = global.document;
	var docEl = doc.documentElement;
	var body = doc.body || doc.createElement('body');

	function scrollX() {
		return (docEl.scrollLeft || body.scrollLeft || 0) - (docEl.clientLeft || body.clientLeft || 0);
	}

	function scrollY() {
		return (docEl.scrollTop || body.scrollTop || 0) - (docEl.clientTop || body.clientTop || 0);
	}

	function setStatically() {
		window.scrollX = window.pageXOffset = scrollX();
		window.scrollY = window.pageYOffset = scrollY();
		window.innerWidth = docEl.clientWidth;
		window.innerHeight = docEl.clientHeight;
	}

	try {
		Object.defineProperties(global, {
			innerWidth: {
				get: function () {
					return docEl.clientWidth;
				}
			},
			innerHeight: {
				get: function () {
					return docEl.clientHeight;
				}
			},
			pageXOffset: {
				get: scrollX
			},
			pageYOffset: {
				get: scrollY
			},
			scrollX: {
				get: scrollX
			},
			scrollY: {
				get: scrollY
			}
		});
	} catch(e) {
		window.attachEvent('onresize', setStatically);
		window.attachEvent('onscroll', setStatically);
		setStatically();
	}
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
