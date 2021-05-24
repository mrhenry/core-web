/* eslint-disable */
/**
 * @license
 * Author : https://github.com/jonathantneal
 * https://github.com/jonathantneal/element-qsa-scope/blob/master/LICENSE.md
 * # CC0 1.0 Universal License
 * Public Domain Dedication
 * The person(s) who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.
 * You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.
 * In no way are the patent or trademark rights of any person affected by CC0, nor are the rights that other persons may have in the work or in how the work is used, such as publicity or privacy rights.
 * Unless expressly stated otherwise, the person(s) who associated a work with this deed makes no warranties about the work, and disclaims liability for all uses of the work, to the fullest extent permitted by applicable law.
 * When using or citing the work, you should not imply endorsement by the author or the affirmer.
 * This is a [human-readable summary of the Legal Code](//creativecommons.org/publicdomain/zero/1.0/) ([read the full text](//creativecommons.org/publicdomain/zero/1.0/)).
 */

(function (global) {
	try {
		// test for scope support
		document.querySelector(':scope *');
	} catch (_) {
		// scope regex
		var scopeTest = /:scope(?![\w-])/i;
		var scopeReplacer = /:scope(?![\w-])/gi;

		// polyfill Element#querySelector
		var querySelectorWithScope = polyfill(global.Element.prototype.querySelector);

		global.Element.prototype.querySelector = function querySelector(selectors) {
			return querySelectorWithScope.apply(this, arguments);
		};

		// polyfill Element#querySelectorAll
		var querySelectorAllWithScope = polyfill(global.Element.prototype.querySelectorAll);

		global.Element.prototype.querySelectorAll = function querySelectorAll(selectors) {
			return querySelectorAllWithScope.apply(this, arguments);
		};

		// polyfill Element#matches
		if (global.Element.prototype.matches) {
			var matchesWithScope = polyfill(global.Element.prototype.matches);

			global.Element.prototype.matches = function matches(selectors) {
				return matchesWithScope.apply(this, arguments);
			};
		}

		// polyfill Element#closest
		if (global.Element.prototype.closest) {
			var closestWithScope = polyfill(global.Element.prototype.closest);

			global.Element.prototype.closest = function closest(selectors) {
				return closestWithScope.apply(this, arguments);
			};
		}

		function polyfill(qsa) {
			return function (selectors) {
				// whether the selectors contain :scope
				var hasScope = selectors && scopeTest.test(selectors);

				if (hasScope) {
					// fallback attribute
					var attr = 'q' + Math.floor(Math.random() * 9000000) + 1000000;

					// replace :scope with the fallback attribute
					arguments[0] = selectors.replace(scopeReplacer, '[' + attr + ']');

					// add the fallback attribute
					this.setAttribute(attr, '');

					// results of the qsa
					var elementOrNodeList = qsa.apply(this, arguments);

					// remove the fallback attribute
					this.removeAttribute(attr);

					// return the results of the qsa
					return elementOrNodeList;
				} else {
					// return the results of the qsa
					return qsa.apply(this, arguments);
				}
			};
		}
	}
})(self);
