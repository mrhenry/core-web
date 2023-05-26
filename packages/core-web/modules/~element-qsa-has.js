/* eslint-disable */
(function (global) {
	try {
		// test for has support
		global.document.querySelector(':has(*, :does-not-exist, > *)');

		if (
			!global.document.querySelector(':has(:scope *)') &&
			CSS.supports('selector(:has(div))')
		) {
			return;
		}
	} catch (_) { }

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
		var start = 0;
		var depth = 0;

		var escaped = false;

		var quoted = false;
		var quotedMark = false;

		var inHas = false;

		var bracketed = 0;

		for (var i = 0; i < query.length; i++) {
			var char = query[i];

			if (escaped) {
				current += char;
				escaped = false;
				continue;
			}

			if (quoted) {
				if (char === quotedMark) {
					quoted = false;
				}

				current += char;
				continue;
			}

			if (current.toLowerCase() === ':has(' && !inHas) {
				inHas = true;
				start = i;
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
							return {
								innerQuery: current,
								start: start,
								end: i-1
							};
						}

						depth--;
					}
					current += char;
					continue;

				case '\\':
					current += char;
					escaped = true;
					continue;

				case '"':
				case "'":
					current += char;
					quoted = true;
					quotedMark = char;
					continue;

				case '[':
					current += char;
					bracketed++;
					continue;

				case "]":
					current += char;
					if (bracketed > 0) {
						bracketed--
					}

					continue;
			
				default:
					current += char;
					continue;
			}
		}

		return false;
	}

	function replaceScopeWithAttr(query, attr) {
		var parts = [];
		var current = '';

		var escaped = false;

		var quoted = false;
		var quotedMark = false;

		var bracketed = 0;

		for (var i = 0; i < query.length; i++) {
			var char = query[i];

			if (escaped) {
				current += char;
				escaped = false;
				continue;
			}

			if (quoted) {
				if (char === quotedMark) {
					quoted = false;
				}

				current += char;
				continue;
			}

			if (current.toLowerCase() === ':scope' && !bracketed && (/^[\[\.\:\\"\s|+>~#&,)]/.test(char || ''))) {
				parts.push(current.slice(0, current.length - 6));
				parts.push('[' + attr + ']');
				current = '';
			}

			switch (char) {
				case ':':
					parts.push(current);
					current = '';
					current += char;
					continue;

				case '\\':
					current += char;
					escaped = true;
					continue;

				case '"':
				case "'":
					current += char;
					quoted = true;
					quotedMark = char;
					continue;

				case '[':
					current += char;
					bracketed++;
					continue;

				case "]":
					current += char;
					if (bracketed > 0) {
						bracketed--
					}

					continue;

				default:
					current += char;
					continue;
			}
		}

		if (current.toLowerCase() === ':scope') {
			parts.push(current.slice(0, current.length - 6));
			parts.push('[' + attr + ']');
			current = '';
		}

		if (parts.length === 0) {
			return query;
		}

		return parts.join('') + current;
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

	function replaceAllWithTempAttr(query, nested, callback) {
		var inner = pseudoClassHasInnerQuery(query);
		if (!inner) {
			return query;
		}

		if (nested) {
			return false;
		}

		var innerQuery = inner.innerQuery;
		var attr = 'q-has' + (Math.floor(Math.random() * 9000000) + 1000000);
		var innerReplacement = '[' + attr + ']';

		var x = query;

		if (inner.innerQuery.toLowerCase().indexOf(':has(') > -1) {
			var innerParts = splitSelector(inner.innerQuery);
			var newInnerParts = [];
			for (var i = 0; i < innerParts.length; i++) {
				var innerPart = innerParts[i];

				// Nested has is not supported.
				// If a recursive/nested call returns "false" we throw
				var innerPartReplaced = replaceAllWithTempAttr(innerPart, true, function () { });
				if (!innerPartReplaced) {
					throw new Error("Nested :has() is not supported")
				} else {
					newInnerParts.push(innerPart);
				}
			}

			var _prefix = x.substring(0, inner.start - 5); // ':has('.length === 5
			var _suffix = x.substring(inner.end + 2); // ')'.length === 1

			return _prefix + newInnerParts.join(', ') + _suffix;
		}

		var _prefix = x.substring(0, inner.start - 5); // ':has('.length === 5
		var _suffix = x.substring(inner.end + 2); // ')'.length === 1

		x = _prefix + innerReplacement + _suffix;

		callback(innerQuery, attr);
		if (x.toLowerCase().indexOf(':has(') > -1) {
			var y = replaceAllWithTempAttr(x, false, callback);
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
			if (!selectors) {
				return qsa.apply(this, arguments);
			}

			var selectorsString = String(selectors);
			if (!selectorsString || (selectorsString.toLowerCase().indexOf(':has(') === -1) || !pseudoClassHasInnerQuery(selectorsString)) {
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

			var _focus = this;
			if (_focus === global.document) {
				_focus = global.document.documentElement;
			}

			var scopeAttr = 'q-has-scope' + (Math.floor(Math.random() * 9000000) + 1000000);
			_focus.setAttribute(scopeAttr, '');

			try {
				selectorsString = replaceScopeWithAttr(selectorsString, scopeAttr);

				var attrs = [scopeAttr];
				var newQuery = replaceAllWithTempAttr(selectorsString, false, function (inner, attr) {
					attrs.push(attr);

					var selectorParts = splitSelector(inner);
					for (var x = 0; x < selectorParts.length; x++) {
						var selectorPart = selectorParts[x].trim();
						var absoluteSelectorPart = selectorPart;

						if (
							selectorPart[0] === '>' ||
							selectorPart[0] === '+' ||
							selectorPart[0] === '~'
						) {
							absoluteSelectorPart = selectorPart.slice(1).trim();
						} else {
							absoluteSelectorPart = ':scope ' + selectorPart;
						}

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

											var idAttr = 'q-has-id' + (Math.floor(Math.random() * 9000000) + 1000000);
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
										var idAttr = 'q-has-id' + (Math.floor(Math.random() * 9000000) + 1000000);
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
					}
				});

				arguments[0] = newQuery;

				// results of the qsa
				var elementOrNodeList = qsa.apply(this, arguments);

				_focus.removeAttribute(scopeAttr);

				if (attrs.length > 0) {
					// remove the fallback attribute
					var attrsForQuery = [];
					for (var j = 0; j < attrs.length; j++) {
						attrsForQuery.push('[' + attrs[j] + ']');
					}

					var elements = global.document.querySelectorAll(attrsForQuery.join(','));
					for (var k = 0; k < elements.length; k++) {
						var element = elements[k];
						for (var l = 0; l < attrs.length; l++) {
							element.removeAttribute(attrs[l]);
						}
					}
				}

				// return the results of the qsa
				return elementOrNodeList;
			} catch (err) {
				_focus.removeAttribute(scopeAttr);

				if (attrs.length > 0) {
					// remove the fallback attribute
					var attrsForQuery = [];
					for (var j = 0; j < attrs.length; j++) {
						attrsForQuery.push('[' + attrs[j] + ']');
					}

					var elements = global.document.querySelectorAll(attrsForQuery.join(','));
					for (var k = 0; k < elements.length; k++) {
						var element = elements[k];
						for (var l = 0; l < attrs.length; l++) {
							element.removeAttribute(attrs[l]);
						}
					}
				}

				var errorMessage = '';
				try {
					qsa.apply(this, [':core-web-does-not-exist']);
				} catch (dummyError) {
					errorMessage = dummyError.message;
					if (errorMessage) {
						errorMessage = errorMessage.replace(':core-web-does-not-exist', selectorsString);
					}
				}

				if (!errorMessage) {
					errorMessage = "Failed to execute 'querySelector' on 'Document': '" + selectorsString + "' is not a valid selector.";
				}

				try {
					throw new DOMException(errorMessage);
				} catch (_) {
					throw new Error(errorMessage);
				}
			}
		};
	}
})(self);
