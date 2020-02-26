import CreateMethodProperty from "../helpers/_ESAbstract.CreateMethodProperty";
import ToObject from "../helpers/_ESAbstract.ToObject";
import ToLength from "../helpers/_ESAbstract.ToLength";
import ToInteger from "../helpers/_ESAbstract.ToInteger";
import Get from "../helpers/_ESAbstract.Get";
import HasProperty from "../helpers/_ESAbstract.HasProperty";
import ToString from "../helpers/_ESAbstract.ToString";
import ToPrimitive from "../helpers/_ESAbstract.ToPrimitive";
import Call from "../helpers/_ESAbstract.Call";
import GetMethod from "../helpers/_ESAbstract.GetMethod";
import GetV from "../helpers/_ESAbstract.GetV";
import IsCallable from "../helpers/_ESAbstract.IsCallable";
import OrdinaryToPrimitive from "../helpers/_ESAbstract.OrdinaryToPrimitive";
import Type from "../helpers/_ESAbstract.Type";
import SameValueZero from "../helpers/_ESAbstract.SameValueZero";
import SameValueNonNumber from "../helpers/_ESAbstract.SameValueNonNumber";
(function(undefined) {
if (!("matchMedia"in self&&"MediaQueryList"in self
)) {
// matchMedia
(function (global) {
	function evalQuery(query) {
		/* jshint evil: true */
		query = (query || 'true')
			.replace(/^only\s+/, '')
			.replace(/(device)-([\w.]+)/g, '$1.$2')
			.replace(/([\w.]+)\s*:/g, 'media.$1 ===')
			.replace(/min-([\w.]+)\s*===/g, '$1 >=')
			.replace(/max-([\w.]+)\s*===/g, '$1 <=')
			.replace(/all|screen/g, '1')
			.replace(/print/g, '0')
			.replace(/,/g, '||')
			.replace(/\band\b/g, '&&')
			.replace(/dpi/g, '')
			.replace(/(\d+)(cm|em|in|dppx|mm|pc|pt|px|rem)/g, function ($0, $1, $2) {
				return $1 * (
					$2 === 'cm' ? 0.3937 * 96 : (
						$2 === 'em' || $2 === 'rem' ? 16 : (
							$2 === 'in' || $2 === 'dppx' ? 96 : (
								$2 === 'mm' ? 0.3937 * 96 / 10 : (
									$2 === 'pc' ? 12 * 96 / 72 : (
										$2 === 'pt' ? 96 / 72 : 1
									)
								)
							)
						)
					)
				);
			});
		return new Function('media', 'try{ return !!(%s) }catch(e){ return false }'
			.replace('%s', query)
		)({
			width: global.innerWidth,
			height: global.innerHeight,
			orientation: global.orientation || 'landscape',
			device: {
				width: global.screen.width,
				height: global.screen.height,
				orientation: global.screen.orientation || global.orientation || 'landscape'
			}
		});
	}

	function MediaQueryList() {
		this.matches = false;
		this.media = 'invalid';
	}

	MediaQueryList.prototype.addListener = function addListener(listener) {
		var listenerIndex = this.addListener.listeners.indexOf(listener);

		if (listenerIndex === -1) {
			this.addListener.listeners.push(listener);
		}
	};

	MediaQueryList.prototype.removeListener = function removeListener(listener) {
		var listenerIndex = this.addListener.listeners.indexOf(listener);

		if (listenerIndex >= 0) {
			this.addListener.listeners.splice(listenerIndex, 1);
		}
	};

	global.MediaQueryList = MediaQueryList;

	// <Global>.matchMedia
	global.matchMedia = function matchMedia(query) {
		var
		list = new MediaQueryList();

		if (0 === arguments.length) {
			throw new TypeError('Not enough arguments to matchMedia');
		}

		list.media = String(query);
		list.matches = evalQuery(list.media);
		list.addListener.listeners = [];

		global.addEventListener('resize', function () {
			var listeners = [].concat(list.addListener.listeners), matches = evalQuery(list.media);

			if (matches != list.matches) {
				list.matches = matches;
				for (var index = 0, length = listeners.length; index < length; ++index) {
					listeners[index].call(global, list);
				}
			}
		});

		return list;
	};
}(self));
}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
