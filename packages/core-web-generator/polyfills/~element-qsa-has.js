/* eslint-disable */
(function (global) {
	try {
		// test for scope support
		document.querySelector(':has(*, :does-not-exist, > *)');
	} catch (_) {
		// ELEMENT
		// polyfill Element#querySelector
		var querySelectorWithHasElement = polyfill(global.Element.prototype.querySelector);

		global.Element.prototype.querySelector = function querySelector(selectors) {
			return querySelectorWithHasElement.apply(this, arguments);
		};

		// polyfill Element#querySelectorAll
		var querySelectorAllWithHasElement = polyfill(global.Element.prototype.querySelectorAll);

		global.Element.prototype.querySelectorAll = function querySelectorAll(selectors) {
			return querySelectorAllWithHasElement.apply(this, arguments);
		};

		// polyfill Element#matches
		if (global.Element.prototype.matches) {
			var matchesWithHasElement = polyfill(global.Element.prototype.matches);

			global.Element.prototype.matches = function matches(selectors) {
				return matchesWithHasElement.apply(this, arguments);
			};
		}

		// polyfill Element#closest
		if (global.Element.prototype.closest) {
			var closestWithHasElement = polyfill(global.Element.prototype.closest);

			global.Element.prototype.closest = function closest(selectors) {
				return closestWithHasElement.apply(this, arguments);
			};
		}

		// DOCUMENT
		if ('Document' in global && 'prototype' in global.Document) {
			// polyfill Document#querySelector
			var querySelectorWithHasDocument = polyfill(global.Document.prototype.querySelector);

			global.Document.prototype.querySelector = function querySelector(selectors) {
				return querySelectorWithHasDocument.apply(this, arguments);
			};

			// polyfill Document#querySelectorAll
			var querySelectorAllWithHasDocument = polyfill(global.Document.prototype.querySelectorAll);

			global.Document.prototype.querySelectorAll = function querySelectorAll(selectors) {
				return querySelectorAllWithHasDocument.apply(this, arguments);
			};

			// polyfill Document#matches
			if (global.Document.prototype.matches) {
				var matchesWithHasDocument = polyfill(global.Document.prototype.matches);

				global.Document.prototype.matches = function matches(selectors) {
					return matchesWithHasDocument.apply(this, arguments);
				};
			}

			// polyfill Document#closest
			if (global.Document.prototype.closest) {
				var closestWithHasDocument = polyfill(global.Document.prototype.closest);

				global.Document.prototype.closest = function closest(selectors) {
					return closestWithHasDocument.apply(this, arguments);
				};
			}
		}

		function pseudoClassHasInnerQuery(query) {
			var current = '';
			var depth = 0;

			var escaped = false;
			var inHas = false;
			for (var i = 0; i < query.length; i++) {
				var char = query[i];

				if (escaped) {
					current += char;
					escaped = false;
					continue;
				}

				if (current === ':has(' && !inHas) {
					inHas = true;
					current = '';
				}

				switch (char) {
					case ':':
						if (!inHas) {
							current = '';
						}

						current += char;
						continue;
					case '(':
						if (inHas) {
							depth++;
						}
						current += char;
						continue;
					case ')':
						if (inHas) {
							if (depth === 0) {
								return current;
							}
							
							depth--;
						}
						current += char;
						continue;
					case '\\':
						current += char;
						escaped = true;
						continue;

					default:
						current += char;
						continue;
				}
			}

			return false;
		}

		function queryContainsScopePseudoClass(query) {
			var current = '';
			var escaped = false;
			for (var i = 0; i < query.length; i++) {
				var char = query[i];

				if (escaped) {
					current += char;
					escaped = false;
					continue;
				}

				if (current === ':scope' && !(/^\w/.test(query[i+1] || ''))) {
					return true;
				}

				switch (char) {
					case ':':
						current = '';
						current += char;
						continue;
					case '\\':
						current += char;
						escaped = true;
						continue;

					default:
						current += char;
						continue;
				}
			}

			return false;
		}

		function charIsNestedMarkMirror(char, mark) {
			if (mark === '(' && char === ')') {
				return true;
			}

			if (mark === '[' && char === ']') {
				return true;
			}

			return false;
		}

		function splitSelector(query) {
			var selectors = [];
			var current = '';

			var escaped = false;

			var quoted = false;
			var quotedMark = false;

			var nestedMark = false;
			var nestedDepth = 0;

			for (var i = 0; i < query.length; i++) {
				var char = query[i];

				if (escaped) {
					current += char;
					escaped = false;
					continue;
				}

				switch (char) {
					case ',':
						if (quoted) {
							current += char;
							continue;
						}

						if (nestedDepth > 0) {
							current += char;
							continue;
						}

						selectors.push(current);
						current = '';
					case '\\':
						current += char;
						escaped = true;
						continue;
					
					case '"':
					case "'":
						if (quoted && char === quotedMark) {
							current += char;
							quoted = false;
							continue;
						}

						current += char;
						quoted = true;
						quotedMark = char;
						continue;
					
					case '(':
					case ')':
					case '[':
					case ']':
						if (quoted) {
							current += char;
							continue;
						}

						if (charIsNestedMarkMirror(char, nestedMark)) {
							current += char;
							nestedDepth--;

							if (nestedDepth === 0) {
								nestedMark = false;
							}

							continue;
						}

						if (char === nestedMark) {
							current += char;
							nestedDepth++;
							continue;
						}

						current += char;
						nestedDepth++;
						nestedMark = char;
						continue;

					default:
						current += char;
						continue;
				}
			}

			selectors.push(current);

			return selectors;
		}

		function replaceAllWithTempAttr(query, callback) {
			var inner = pseudoClassHasInnerQuery(query);
			if (!inner) {
				return query;
			}

			var innerQuery = inner;
			var attr = 'q-has' + Math.floor(Math.random() * 9000000) + 1000000;
			var innerReplacement = '[' + attr + ']';

			var x = query;

			if (inner.indexOf(':has(') > -1) {
				innerQuery = replaceAllWithTempAttr(inner, callback);
			}

			var scopeQuery = x.split(':has(' + inner + ')')[0];
			x = x.replace(':has(' + inner + ')', innerReplacement);
			callback(scopeQuery, innerQuery, attr);
			if (x.indexOf(':has(') > -1) {
				var y = replaceAllWithTempAttr(x, callback);
				if (y) {
					return y;
				}
			}

			return x;
		}

		function polyfill(qsa) {
			return function (selectors) {
				if ((selectors.indexOf(':has(') === -1) || !pseudoClassHasInnerQuery(selectors)) {
					return qsa.apply(this, arguments);
				}

				var attrs = [];
				var newQuery = replaceAllWithTempAttr(selectors, function (scope, inner, attr) {
					attrs.push(attr);

					var selectorParts = splitSelector(inner);
					for (var x = 0; x < selectorParts.length; x++) {
						var selectorPart = selectorParts[x].trim();
						var scopedSelectorPart = selectorParts[x].trim();
						
						// TODO : still broken
						if (
							selectorPart[0] === '>' ||
							selectorPart[0] === '+' ||
							selectorPart[0] === '~' ||
							selectorPart[0] === '|'
						) {
							scopedSelectorPart = ':scope' + selectorPart;
							selectorPart  = '*' + selectorPart;
						} else if (!queryContainsScopePseudoClass(selectorPart)) {
							scopedSelectorPart = ':scope' + ' ' + selectorPart;
							selectorPart  = '*' + ' ' + selectorPart;
						}

						try {
							var scopeElements = [];
							if (scope) {
								scopeElements = document.querySelectorAll(scope);
							} else {
								scopeElements.push(document);
							}
							for (var i = 0; i < scopeElements.length; i++) {
								var scopeElement = scopeElements[i];

								var elements = scopeElement.querySelectorAll(selectorPart);
								for (var j = 0; j < elements.length; j++) {
									var element = elements[j];
									var parent = element.parentNode;

									while (parent) {
										if (!('setAttribute' in parent)) {
											parent = parent.parentNode;
											continue;
										}

										if (!!(parent.querySelector(scopedSelectorPart))) {
											parent.setAttribute(attr, '');
										}

										if (parent === scopeElement) {
											break;
										}

										parent = parent.parentNode;
									}
								}
							}
							
						} catch (_) {
							// `:has` takes a forgiving selector list.
						}
					}
				});

				arguments[0] = newQuery;

				// results of the qsa
				var elementOrNodeList = qsa.apply(this, arguments);

				// remove the fallback attribute
				for (var j = 0; j < attrs.length; j++) {
					var attr = attrs[j];
					var elements = document.querySelectorAll('[' + attr + ']');
					for (var k = 0; k < elements.length; k++) {
						var element = elements[k];
						element.removeAttribute(attr);
					}
				}

				// return the results of the qsa
				return elementOrNodeList;
			};
		}
	}
})(self);
