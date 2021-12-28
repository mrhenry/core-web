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
						continue;
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

			x = x.replace(':has(' + inner + ')', innerReplacement);
			callback(innerQuery, attr);
			if (x.indexOf(':has(') > -1) {
				var y = replaceAllWithTempAttr(x, callback);
				if (y) {
					return y;
				}
			}

			return x;
		}

		function walkNode(rootNode, callback) {
			if (('setAttribute' in (rootNode)) && ('querySelector' in (rootNode))) {
				callback(rootNode);
			}

			if (rootNode.hasChildNodes()) {
				var nodes = rootNode.childNodes;
				for (var i = 0; i < nodes.length; ++i) {
					walkNode(nodes[i], callback);
				}
			}
		}

		function polyfill(qsa) {
			return function (selectors) {
				if ((selectors.indexOf(':has(') === -1) || !pseudoClassHasInnerQuery(selectors)) {
					return qsa.apply(this, arguments);
				}

				var rootNode;
				if ('getRootNode' in this) {
					rootNode = this.getRootNode();
				} else {
					var r = this;
					while (r) {
						rootNode = r;
						r = r.parentNode;
					}
				}

				var attrs = [];
				var newQuery = replaceAllWithTempAttr(selectors, function (inner, attr) {
					attrs.push(attr);

					var selectorParts = splitSelector(inner);
					for (var x = 0; x < selectorParts.length; x++) {
						var selectorPart = selectorParts[x].trim();
						var absoluteSelectorPart = selectorPart;
						
						// TODO : still broken
						if (
							selectorPart[0] === '>' ||
							selectorPart[0] === '+' ||
							selectorPart[0] === '~'
						) {
							absoluteSelectorPart = selectorPart.slice(1).trim();
						} else if (!queryContainsScopePseudoClass(selectorPart)) {
							absoluteSelectorPart = ':scope ' + selectorPart;
						}

						try {
							walkNode(rootNode, function (node) {
								if (!(node.querySelector(absoluteSelectorPart))) {
									return;
								}
								
								switch (selectorPart[0]) {
									case '~':
									case '+':
										{
											var siblings = node.childNodes;
											for (var i = 0; i < siblings.length; i++) {
												var sibling = siblings[i];
												if (!('setAttribute' in sibling)) {
													continue;
												}
												
												var idAttr = 'q-has-id' + Math.floor(Math.random() * 9000000) + 1000000;
												sibling.setAttribute(idAttr, '');

												if (node.querySelector(':scope [' + idAttr + ']' + ' ' + selectorPart)) {
													sibling.setAttribute(attr, '');
												}

												sibling.removeAttribute(idAttr);
											}
										}
										break;
								
									case '>':
										{
											var idAttr = 'q-has-id' + Math.floor(Math.random() * 9000000) + 1000000;
											node.setAttribute(idAttr, '');

											if (node.querySelector(':scope[' + idAttr + ']' + ' ' + selectorPart)) {
												node.setAttribute(attr, '');
											}

											node.removeAttribute(idAttr);
										}
										break;
									
									default:
										node.setAttribute(attr, '');

										break;
								}
							});
						} catch (_) {
							// `:has` takes a forgiving selector list.
						}
					}
				});

				arguments[0] = newQuery;

				// results of the qsa
				var elementOrNodeList = qsa.apply(this, arguments);

				// remove the fallback attribute
				var attrsForQuery = [];
				for (var j = 0; j < attrs.length; j++) {
					attrsForQuery.push('[' + attrs[j] + ']');
				}

				var elements = document.querySelectorAll(attrsForQuery.join(','));
				for (var k = 0; k < elements.length; k++) {
					var element = elements[k];
					for (var l = 0; l < attrs.length; l++) {
						element.removeAttribute(attrs[l]);
					}
				}

				// return the results of the qsa
				return elementOrNodeList;
			};
		}
	}
})(self);
