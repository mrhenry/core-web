
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
				console.warn(selectors, newQuery);
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

function formatElements(elements) {
	return elements.map((e) => e.id).sort().join();
}

// Test that |selector| returns the given elements in #main.
function testSelectorAllFromMain(assert, selector, expected) {
	assert.step(`${selector} matches expected elements from #main`);
	let actual = Array.from(document.getElementById("main").querySelectorAll(selector));
	assert.deepEqual(formatElements(actual), formatElements(expected));
}

// Test that |selector| returns the given elements in the given scope element
function testSelectorAllFromScope(assert, scope, selector, expected) {
	assert.step(`${selector} matches expected elements from scope ${scope.id || scope.tagName}`);
	let actual = Array.from(scope.querySelectorAll(selector));
	assert.deepEqual(formatElements(actual), formatElements(expected));
}

// Test that |selector| returns the given element in #main.
function testSelector(assert, selector, expected) {
	assert.step(`${selector} matches expected element`);
	assert.equal(document.getElementById("main").querySelector(selector).id, expected.id);
}

// Test that |selector| returns the given closest element.
function testClosest(assert, node, selector, expected) {
	assert.step(`closest(${selector}) returns expected element`);
	assert.equal(node.closest(selector), expected);
}

// Test that |selector| returns matching status.
function testMatches(assert, node, selector, expected) {
	assert.step(`${selector} matches expectedly`);
	assert.equal(node.matches(selector), expected);
}

// Test that |selector1| and |selector2| returns same elements in the given scope element
function compareSelectorAll(assert, scope, selector1, selector2) {
	let result1 = Array.from(scope.querySelectorAll(selector1));
	let result2 = Array.from(scope.querySelectorAll(selector2));
	assert.equal(formatElements(result1), formatElements(result2), `${selector1} and ${selector2} returns same elements on ${scope.id}`);
}

QUnit.module("querySelector with :has", function () {
	// QUnit.test("is valid selector", function (assert) {
	// 	assert.ok(document.body.querySelector(":has(*)"));
	// });

	// QUnit.test("accepts broken selector lists", function (assert) {
	// 	assert.ok(document.body.querySelector(":has(*, :does-not-exist)"));
	// });

	QUnit.test(":has basic", function (assert) {
		const fixture = document.getElementById("qunit-fixture");
		fixture.innerHTML = `<main id="main">
			<div id="a" class="ancestor">
				<div id="b" class="parent ancestor">
					<div id="c" class="sibling descendant">
						<div id="d" class="descendant"></div>
					</div>
					<div id="e" class="target descendant"></div>
				</div>
				<div id="f" class="parent ancestor">
					<div id="g" class="target descendant"></div>
				</div>
				<div id="h" class="parent ancestor">
					<div id="i" class="target descendant"></div>
					<div id="j" class="sibling descendant">
						<div id="k" class="descendant"></div>
					</div>
				</div>
			</div>
		</main>`;

		const a = document.getElementById("a");
		const b = document.getElementById("b");
		const c = document.getElementById("c");
		const e = document.getElementById("e");
		const f = document.getElementById("f");
		const g = document.getElementById("g");
		const h = document.getElementById("h");
		const i = document.getElementById("i");
		const j = document.getElementById("j");
		const k = document.getElementById("k");

		testSelectorAllFromMain(assert, ":has(#a)", []);
		testSelectorAllFromMain(assert, ":has(.ancestor)", [a]);
		testSelectorAllFromMain(assert, ":has(.target)", [a, b, f, h]);
		testSelectorAllFromMain(assert, ":has(.descendant)", [a, b, c, f, h, j]);
		testSelectorAllFromMain(assert, ".parent:has(.target)", [b, f, h]);
		testSelectorAllFromMain(assert, ":has(.sibling ~ .target)", [a, b]);
		testSelectorAllFromMain(assert, ".parent:has(.sibling ~ .target)", [b]);
		testSelectorAllFromMain(assert, ":has(:is(.target ~ .sibling .descendant))", [a, h, j]);
		testSelectorAllFromMain(assert, ".parent:has(:is(.target ~ .sibling .descendant))", [h]);
		testSelectorAllFromMain(assert, ".sibling:has(.descendant) ~ .target", [e]);
		testSelectorAllFromMain(assert, ":has(.sibling:has(.descendant) ~ .target)", [a, b]);
		testSelectorAllFromMain(assert, 
			":has(.sibling:has(.descendant) ~ .target) ~ .parent > .descendant",
			[g, i, j]);
		testSelectorAllFromMain(assert, ":has(> .parent)", [a]);
		testSelectorAllFromMain(assert, ":has(> .target)", [b, f, h]);
		testSelectorAllFromMain(assert, ":has(> .parent, > .target)", [a, b, f, h]);
		testSelectorAllFromMain(assert, ":has(+ #h)", [f]);
		testSelectorAllFromMain(assert, ".parent:has(~ #h)", [b, f]);
		testSelector(assert, ".sibling:has(.descendant)", c);
		testClosest(assert, k, ".ancestor:has(.descendant)", h);
		testMatches(assert, h, ":has(.target ~ .sibling .descendant)", true);

		assert.verifySteps([
			":has(#a) matches expected elements from #main",
			":has(.ancestor) matches expected elements from #main",
			":has(.target) matches expected elements from #main",
			":has(.descendant) matches expected elements from #main",
			".parent:has(.target) matches expected elements from #main",
			":has(.sibling ~ .target) matches expected elements from #main",
			".parent:has(.sibling ~ .target) matches expected elements from #main",
			":has(:is(.target ~ .sibling .descendant)) matches expected elements from #main",
			".parent:has(:is(.target ~ .sibling .descendant)) matches expected elements from #main",
			".sibling:has(.descendant) ~ .target matches expected elements from #main",
			":has(.sibling:has(.descendant) ~ .target) matches expected elements from #main",
			":has(.sibling:has(.descendant) ~ .target) ~ .parent > .descendant matches expected elements from #main",
			":has(> .parent) matches expected elements from #main",
			":has(> .target) matches expected elements from #main",
			":has(> .parent, > .target) matches expected elements from #main",
			":has(+ #h) matches expected elements from #main",
			".parent:has(~ #h) matches expected elements from #main",
			".sibling:has(.descendant) matches expected element",
			"closest(.ancestor:has(.descendant)) returns expected element",
			":has(.target ~ .sibling .descendant) matches expectedly"
		] );
	});

	QUnit.test(":has argument with explicit scope (tentative)", function (assert) {
		const fixture = document.getElementById("qunit-fixture");
		fixture.innerHTML = `<main>
			<div id=d01 class="a">
				<div id=scope1 class="b">
					<div id=d02 class="c">
						<div id=d03 class="c">
							<div id=d04 class="d"></div>
						</div>
					</div>
					<div id=d05 class="e"></div>
				</div>
			</div>
			<div id=d06>
				<div id=scope2 class="b">
					<div id=d07 class="c">
						<div id=d08 class="c">
							<div id=d09></div>
						</div>
					</div>
				</div>
			</div>
		</div>`;

		const scope1 = document.getElementById("scope1");
		const scope2 = document.getElementById("scope2");
		const d02 = document.getElementById("d02");
		const d03 = document.getElementById("d03");
		
		// descendants of a scope element cannot have the scope element as its descendant
		testSelectorAllFromScope(assert, scope1, ":has(:scope)", []);
		testSelectorAllFromScope(assert, scope1, ":has(:scope .c)", []);
		testSelectorAllFromScope(assert, scope1, ":has(.a :scope)", []);

		// there can be more simple and efficient alternative for a ':scope' in ':has'
		testSelectorAllFromScope(assert, scope1, ".a:has(:scope) .c", [d02, d03]);
		compareSelectorAll(assert, scope1, ".a:has(:scope) .c", ":is(.a :scope .c)");
		testSelectorAllFromScope(assert, scope2, ".a:has(:scope) .c", []);
		compareSelectorAll(assert, scope2, ".a:has(:scope) .c", ":is(.a :scope .c)");
		testSelectorAllFromScope(assert, scope1, ".c:has(:is(:scope .d))", [d02, d03]);
		compareSelectorAll(assert, scope1, ".c:has(:is(:scope .d))", ":scope .c:has(.d)");
		compareSelectorAll(assert, scope1, ".c:has(:is(:scope .d))", ".c:has(.d)");
		testSelectorAllFromScope(assert, scope2, ".c:has(:is(:scope .d))", []);
		compareSelectorAll(assert, scope2, ".c:has(:is(:scope .d))", ":scope .c:has(.d)");
		compareSelectorAll(assert, scope2, ".c:has(:is(:scope .d))", ".c:has(.d)");

		assert.verifySteps([
			":has(:scope) matches expected elements from scope scope1",
			":has(:scope .c) matches expected elements from scope scope1",
			":has(.a :scope) matches expected elements from scope scope1",
			".a:has(:scope) .c matches expected elements from scope scope1",
			".a:has(:scope) .c matches expected elements from scope scope2",
			".c:has(:is(:scope .d)) matches expected elements from scope scope1",
			".c:has(:is(:scope .d)) matches expected elements from scope scope2"
		] );
	});

	QUnit.test(":has matches to uninserted elements", function (assert) {
		const subject = document.createElement("subject");

		subject.innerHTML = "<child></child>";
		testMatches(assert, subject, ":has(child)", true);
		testMatches(assert, subject, ":has(> child)", true);

		subject.innerHTML = "<child><descendant></descendant></child>";
		testMatches(assert, subject, ":has(descendant)", true);
		testMatches(assert, subject, ":has(> descendant)", false);

		subject.innerHTML = "<child></child><direct_sibling></direct_sibling><indirect_sibling></indirect_sibling>";
		testMatches(assert, subject.firstChild, ":has(~ direct_sibling)", true);
		testMatches(assert, subject.firstChild, ":has(+ direct_sibling)", true);
		testMatches(assert, subject.firstChild, ":has(~ indirect_sibling)", true);
		testMatches(assert, subject.firstChild, ":has(+ indirect_sibling)", false);

		testMatches(assert, subject, ":has(*)", true);
		testMatches(assert, subject, ":has(> *)", true);
		testMatches(assert, subject, ":has(~ *)", false);
		testMatches(assert, subject, ":has(+ *)", false);

		assert.verifySteps([
			":has(child) matches expectedly",
			":has(> child) matches expectedly",
			":has(descendant) matches expectedly",
			":has(> descendant) matches expectedly",
			":has(~ direct_sibling) matches expectedly",
			":has(+ direct_sibling) matches expectedly",
			":has(~ indirect_sibling) matches expectedly",
			":has(+ indirect_sibling) matches expectedly",
			":has(*) matches expectedly",
			":has(> *) matches expectedly",
			":has(~ *) matches expectedly",
			":has(+ *) matches expectedly"
		] );
	});

	QUnit.test(":has relative argument", function (assert) {
		const fixture = document.getElementById("qunit-fixture");
		fixture.innerHTML = `<main id=main>
			<div id=d01>
				<div id=d02 class="x">
					<div id=d03 class="a"></div>
					<div id=d04></div>
					<div id=d05 class="b"></div>
				</div>
				<div id=d06 class="x">
					<div id=d07 class="x">
						<div id=d08 class="a"></div>
					</div>
				</div>
				<div id=d09 class="x">
					<div id=d10 class="a">
						<div id=d11 class="b"></div>
					</div>
				</div>
				<div id=d12 class="x">
					<div id=d13 class="a">
						<div id=d14>
							<div id=d15 class="b"></div>
						</div>
					</div>
					<div id=d16 class="b"></div>
				</div>
			</div>
			<div id=d17>
				<div id=d18 class="x"></div>
				<div id=d19 class="x"></div>
				<div id=d20 class="a"></div>
				<div id=d21 class="x"></div>
				<div id=d22 class="a">
					<div id=d23 class="b"></div>
				</div>
				<div id=d24 class="x"></div>
				<div id=d25 class="a">
					<div id=d26>
						<div id=d27 class="b"></div>
					</div>
				</div>
				<div id=d28 class="x"></div>
				<div id=d29 class="a"></div>
				<div id=d30 class="b">
					<div id=d31 class="c"></div>
				</div>
				<div id=d32 class="x"></div>
				<div id=d33 class="a"></div>
				<div id=d34 class="b">
					<div id=d35>
						<div id=d36 class="c"></div>
					</div>
				</div>
				<div id=d37 class="x"></div>
				<div id=d38 class="a"></div>
				<div id=d39 class="b"></div>
				<div id=d40 class="x"></div>
				<div id=d41 class="a"></div>
				<div id=d42></div>
				<div id=d43 class="b">
					<div id=d44 class="x">
						<div id=d45 class="c"></div>
					</div>
				</div>
				<div id=d46 class="x"></div>
				<div id=d47 class="a">
				</div>
			</div>
			<div id="extra-d01">
				<div id=d48 class="x">
				<div id=d49 class="x">
					<div id=d50 class="x d">
						<div id=d51 class="x d">
							<div id=d52 class="x">
								<div id=d53 class="x e">
									<div id=d54 class="f"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div id=d55 class="x"></div>
				<div id=d56 class="x d"></div>
				<div id=d57 class="x d"></div>
				<div id=d58 class="x"></div>
				<div id=d59 class="x e"></div>
				<div id=d60 class="f"></div>
			</div>
			<div id="extra-d02">
				<div id=d61 class="x"></div>
				<div id=d62 class="x y"></div>
				<div id=d63 class="x y">
					<div id=d64 class="y g">
						<div id=d65 class="y">
							<div id=d66 class="y h">
								<div id=d67 class="i"></div>
							</div>
						</div>
					</div>
				</div>
				<div id=d68 class="x y">
					<div id=d69 class="x"></div>
					<div id=d70 class="x"></div>
					<div id=d71 class="x y">
						<div id=d72 class="y g">
							<div id=d73 class="y">
								<div id=d74 class="y h">
									<div id=d75 class="i"></div>
								</div>
							</div>
						</div>
					</div>
					<div id=d76 class="x"></div>
					<div id=d77 class="j">
						<div id=d78><div id=d79></div></div>
					</div>
				</div>
				<div id=d80 class="j"></div>
			</div>
			</main>`;
		
		const d01 = document.getElementById("d01");
		const d02 = document.getElementById("d02");
		const d06 = document.getElementById("d06");
		const d07 = document.getElementById("d07");
		const d09 = document.getElementById("d09");
		const d12 = document.getElementById("d12");
		const d17 = document.getElementById("d17");
		const d18 = document.getElementById("d18");
		const d19 = document.getElementById("d19");
		const d20 = document.getElementById("d20");
		const d21 = document.getElementById("d21");
		const d22 = document.getElementById("d22");
		const d24 = document.getElementById("d24");
		const d25 = document.getElementById("d25");
		const d28 = document.getElementById("d28");
		const d29 = document.getElementById("d29");
		const d30 = document.getElementById("d30");
		const d32 = document.getElementById("d32");
		const d33 = document.getElementById("d33");
		const d34 = document.getElementById("d34");
		const d37 = document.getElementById("d37");
		const d38 = document.getElementById("d38");
		const d39 = document.getElementById("d39");
		const d40 = document.getElementById("d40");
		const d41 = document.getElementById("d41");
		const d42 = document.getElementById("d42");
		const d43 = document.getElementById("d43");
		const d46 = document.getElementById("d46");
		const d48 = document.getElementById("d48");
		const d49 = document.getElementById("d49");
		const d50 = document.getElementById("d50");
		const d51 = document.getElementById("d51");
		const d52 = document.getElementById("d52");
		const d54 = document.getElementById("d54");
		const d55 = document.getElementById("d55");
		const d56 = document.getElementById("d56");
		const d57 = document.getElementById("d57");
		const d58 = document.getElementById("d58");
		const d60 = document.getElementById("d60");
		const d61 = document.getElementById("d61");
		const d62 = document.getElementById("d62");
		const d63 = document.getElementById("d63");
		const d67 = document.getElementById("d67");
		const d68 = document.getElementById("d68");
		const d69 = document.getElementById("d69");
		const d70 = document.getElementById("d70");
		const d71 = document.getElementById("d71");
		const d75 = document.getElementById("d75");
		const d77 = document.getElementById("d77");
		const d80 = document.getElementById("d80");

		const extraD01 = document.getElementById("extra-d01");
		const extraD02 = document.getElementById("extra-d02");
		
		// :has as compound selector part.
		testSelectorAllFromMain(assert, ".x:has(.a)", [d02, d06, d07, d09, d12]);
		testSelectorAllFromMain(assert, ".x:has(.a > .b)", [d09]);
		testSelectorAllFromMain(assert, ".x:has(.a .b)", [d09, d12]);
		testSelectorAllFromMain(assert, ".x:has(.a + .b)", [d12]);
		testSelectorAllFromMain(assert, ".x:has(.a ~ .b)", [d02, d12]);

		testSelectorAllFromMain(assert, ".x:has(> .a)", [d02, d07, d09, d12]);
		testSelectorAllFromMain(assert, ".x:has(> .a > .b)", [d09]);
		testSelectorAllFromMain(assert, ".x:has(> .a .b)", [d09, d12]);
		testSelectorAllFromMain(assert, ".x:has(> .a + .b)", [d12]);
		testSelectorAllFromMain(assert, ".x:has(> .a ~ .b)", [d02, d12]);

		testSelectorAllFromMain(assert, ".x:has(+ .a)", [d19, d21, d24, d28, d32, d37, d40, d46]);
		testSelectorAllFromMain(assert, ".x:has(+ .a > .b)", [d21]);
		testSelectorAllFromMain(assert, ".x:has(+ .a .b)", [d21, d24]);
		testSelectorAllFromMain(assert, ".x:has(+ .a + .b)", [d28, d32, d37]);
		testSelectorAllFromMain(assert, ".x:has(+ .a ~ .b)", [d19, d21, d24, d28, d32, d37, d40]);

		testSelectorAllFromMain(assert, ".x:has(~ .a)", [d18, d19, d21, d24, d28, d32, d37, d40, d46]);
		testSelectorAllFromMain(assert, ".x:has(~ .a > .b)", [d18, d19, d21]);
		testSelectorAllFromMain(assert, ".x:has(~ .a .b)", [d18, d19, d21, d24]);
		testSelectorAllFromMain(assert, ".x:has(~ .a + .b)", [d18, d19, d21, d24, d28, d32, d37]);
		testSelectorAllFromMain(assert, ".x:has(~ .a + .b > .c)", [d18, d19, d21, d24, d28]);
		testSelectorAllFromMain(assert, ".x:has(~ .a + .b .c)", [d18, d19, d21, d24, d28, d32]);

		testSelectorAllFromMain(assert, ".x:has(.d .e)", [d48, d49, d50]);
		testSelectorAllFromMain(assert, ".x:has(.d .e) .f", [d54]);
		testSelectorAllFromMain(assert, ".x:has(> .d)", [d49, d50]);
		testSelectorAllFromMain(assert, ".x:has(> .d) .f", [d54]);
		testSelectorAllFromMain(assert, ".x:has(~ .d ~ .e)", [d48, d55, d56]);
		testSelectorAllFromMain(assert, ".x:has(~ .d ~ .e) ~ .f", [d60]);
		testSelectorAllFromMain(assert, ".x:has(+ .d ~ .e)", [d55, d56]);
		testSelectorAllFromMain(assert, ".x:has(+ .d ~ .e) ~ .f", [d60]);

		testSelectorAllFromMain(assert, ".y:has(> .g .h)", [d63, d71]);
		testSelectorAllFromMain(assert, ".y:has(.g .h)", [d63, d68, d71]);
		testSelectorAllFromMain(assert, ".y:has(> .g .h) .i", [d67, d75]);
		testSelectorAllFromMain(assert, ".y:has(.g .h) .i", [d67, d75]);
		testSelectorAllFromMain(assert, ".x:has(+ .y:has(> .g .h) .i)", [d62, d70]);
		testSelectorAllFromMain(assert, ".x:has(+ .y:has(.g .h) .i)", [d62, d63, d70]);
		testSelectorAllFromMain(assert, ".x:has(+ .y:has(> .g .h) .i) ~ .j", [d77, d80]);
		testSelectorAllFromMain(assert, ".x:has(+ .y:has(.g .h) .i) ~ .j", [d77, d80]);
		testSelectorAllFromMain(assert, ".x:has(~ .y:has(> .g .h) .i)", [d61, d62, d69, d70]);
		testSelectorAllFromMain(assert, ".x:has(~ .y:has(.g .h) .i)", [d61, d62, d63, d69, d70]);

		testSelectorAllFromMain(assert, ".d .x:has(.e)", [d51, d52]);

		testSelectorAllFromMain(assert, ".d ~ .x:has(~ .e)", [d57, d58]);

		// :has as simple selector part.
		testSelectorAllFromMain(assert, ":has(.a)", [d01, d02, d06, d07, d09, d12, d17]);
		testSelectorAllFromMain(assert, ":has(.a > .b)", [d01, d09, d17]);
		testSelectorAllFromMain(assert, ":has(.a .b)", [d01, d09, d12, d17]);
		testSelectorAllFromMain(assert, ":has(.a + .b)", [d01, d12, d17]);
		testSelectorAllFromMain(assert, ":has(.a ~ .b)", [d01, d02, d12, d17]);

		testSelectorAllFromMain(assert, ":has(> .a)", [d02, d07, d09, d12, d17]);
		testSelectorAllFromMain(assert, ":has(> .a > .b)", [d09, d17]);
		testSelectorAllFromMain(assert, ":has(> .a .b)", [d09, d12, d17]);
		testSelectorAllFromMain(assert, ":has(> .a + .b)", [d12, d17]);
		testSelectorAllFromMain(assert, ":has(> .a ~ .b)", [d02, d12, d17]);

		testSelectorAllFromScope(assert, document.body, ":has(> .a)", [d02, d07, d09, d12, d17]);
		testSelectorAllFromScope(assert, document.body, ":has(> .a > .b)", [d09, d17]);
		testSelectorAllFromScope(assert, document.body, ":has(> .a .b)", [d09, d12, d17]);
		testSelectorAllFromScope(assert, document.body, ":has(> .a + .b)", [d12, d17]);
		testSelectorAllFromScope(assert, document.body, ":has(> .a ~ .b)", [d02, d12, d17]);

		testSelectorAllFromScope(assert, document.getElementById("d01"), ":has(> .a)", [d02, d07, d09, d12]);
		testSelectorAllFromScope(assert, document.getElementById("d01"), ":has(> .a > .b)", [d09]);
		testSelectorAllFromScope(assert, document.getElementById("d01"), ":has(> .a .b)", [d09, d12]);
		testSelectorAllFromScope(assert, document.getElementById("d01"), ":has(> .a + .b)", [d12]);
		testSelectorAllFromScope(assert, document.getElementById("d01"), ":has(> .a ~ .b)", [d02, d12]);

		testSelectorAllFromScope(assert, document.getElementById("d12"), ":has(> .a)", []);
		testSelectorAllFromScope(assert, document.getElementById("d12"), ":has(> .a > .b)", []);
		testSelectorAllFromScope(assert, document.getElementById("d12"), ":has(> .a .b)", []);
		testSelectorAllFromScope(assert, document.getElementById("d12"), ":has(> .a + .b)", []);
		testSelectorAllFromScope(assert, document.getElementById("d12"), ":has(> .a ~ .b)", []);

		testSelectorAllFromScope(assert, document.getElementById("d17"), ":has(> .a)", []);
		testSelectorAllFromScope(assert, document.getElementById("d17"), ":has(> .a > .b)", []);
		testSelectorAllFromScope(assert, document.getElementById("d17"), ":has(> .a .b)", []);
		testSelectorAllFromScope(assert, document.getElementById("d17"), ":has(> .a + .b)", []);
		testSelectorAllFromScope(assert, document.getElementById("d17"), ":has(> .a ~ .b)", []);

		testSelectorAllFromMain(assert, ":has(+ .a)", [d19, d21, d24, d28, d32, d37, d40, d46]);
		testSelectorAllFromMain(assert, ":has(+ .a > .b)", [d21]);
		testSelectorAllFromMain(assert, ":has(+ .a .b)", [d21, d24]);
		testSelectorAllFromMain(assert, ":has(+ .a + .b)", [d28, d32, d37]);
		testSelectorAllFromMain(assert, ":has(+ .a ~ .b)", [d19, d21, d24, d28, d32, d37, d40]);

		testSelectorAllFromMain(assert, ":has(~ .a)", [d18, d19, d20, d21, d22, d24, d25, d28, d29, d30, d32, d33, d34, d37, d38, d39, d40, d41, d42, d43, d46]);
		testSelectorAllFromMain(assert, ":has(~ .a > .b)", [d18, d19, d20, d21]);
		testSelectorAllFromMain(assert, ":has(~ .a .b)", [d18, d19, d20, d21, d22, d24]);
		testSelectorAllFromMain(assert, ":has(~ .a + .b)", [d18, d19, d20, d21, d22, d24, d25, d28, d29, d30, d32, d33, d34, d37]);
		testSelectorAllFromMain(assert, ":has(~ .a + .b > .c)", [d18, d19, d20, d21, d22, d24, d25, d28]);
		testSelectorAllFromMain(assert, ":has(~ .a + .b .c)", [d18, d19, d20, d21, d22, d24, d25, d28, d29, d30, d32]);

		testSelectorAllFromMain(assert, ":has(.d .e)", [extraD01, d48, d49, d50]);
		testSelectorAllFromMain(assert, ":has(.d .e) .f", [d54, d60]);
		testSelectorAllFromMain(assert, ":has(> .d)", [extraD01, d49, d50]);
		testSelectorAllFromMain(assert, ":has(> .d) .f", [d54, d60]);
		testSelectorAllFromMain(assert, ":has(~ .d ~ .e)", [d48, d55, d56]);
		testSelectorAllFromMain(assert, ":has(~ .d ~ .e) ~ .f", [d60]);
		testSelectorAllFromMain(assert, ":has(+ .d ~ .e)", [d55, d56]);
		testSelectorAllFromMain(assert, ":has(+ .d ~ .e) ~ .f", [d60]);

		testSelectorAllFromMain(assert, ":has(> .g .h)", [d63, d71]);
		testSelectorAllFromMain(assert, ":has(.g .h)", [extraD02, d63, d68, d71]);
		testSelectorAllFromMain(assert, ":has(> .g .h) .i", [d67, d75]);
		testSelectorAllFromMain(assert, ":has(.g .h) .i", [d67, d75]);
		testSelectorAllFromMain(assert, ":has(+ :has(> .g .h) .i)", [d62, d70]);
		testSelectorAllFromMain(assert, ":has(+ :has(.g .h) .i)", [extraD01, d62, d63, d70]);
		testSelectorAllFromMain(assert, ":has(+ :has(> .g .h) .i) ~ .j", [d77, d80]);
		testSelectorAllFromMain(assert, ":has(+ :has(.g .h) .i) ~ .j", [d77, d80]);
		testSelectorAllFromMain(assert, ":has(~ :has(> .g .h) .i)", [d61, d62, d69, d70]);
		testSelectorAllFromMain(assert, ":has(~ :has(.g .h) .i)", [extraD01, d01,d17,d61,d62,d63,d69,d70]);

		testSelectorAllFromMain(assert, ".d :has(.e)", [d51, d52]);

		testSelectorAllFromMain(assert, ".d ~ :has(~ .e)", [d57, d58]);

		assert.verifySteps([
			".x:has(.a) matches expected elements from #main",
			".x:has(.a > .b) matches expected elements from #main",
			".x:has(.a .b) matches expected elements from #main",
			".x:has(.a + .b) matches expected elements from #main",
			".x:has(.a ~ .b) matches expected elements from #main",
			".x:has(> .a) matches expected elements from #main",
			".x:has(> .a > .b) matches expected elements from #main",
			".x:has(> .a .b) matches expected elements from #main",
			".x:has(> .a + .b) matches expected elements from #main",
			".x:has(> .a ~ .b) matches expected elements from #main",
			".x:has(+ .a) matches expected elements from #main",
			".x:has(+ .a > .b) matches expected elements from #main",
			".x:has(+ .a .b) matches expected elements from #main",
			".x:has(+ .a + .b) matches expected elements from #main",
			".x:has(+ .a ~ .b) matches expected elements from #main",
			".x:has(~ .a) matches expected elements from #main",
			".x:has(~ .a > .b) matches expected elements from #main",
			".x:has(~ .a .b) matches expected elements from #main",
			".x:has(~ .a + .b) matches expected elements from #main",
			".x:has(~ .a + .b > .c) matches expected elements from #main",
			".x:has(~ .a + .b .c) matches expected elements from #main",
			".x:has(.d .e) matches expected elements from #main",
			".x:has(.d .e) .f matches expected elements from #main",
			".x:has(> .d) matches expected elements from #main",
			".x:has(> .d) .f matches expected elements from #main",
			".x:has(~ .d ~ .e) matches expected elements from #main",
			".x:has(~ .d ~ .e) ~ .f matches expected elements from #main",
			".x:has(+ .d ~ .e) matches expected elements from #main",
			".x:has(+ .d ~ .e) ~ .f matches expected elements from #main",
			".y:has(> .g .h) matches expected elements from #main",
			".y:has(.g .h) matches expected elements from #main",
			".y:has(> .g .h) .i matches expected elements from #main",
			".y:has(.g .h) .i matches expected elements from #main",
			".x:has(+ .y:has(> .g .h) .i) matches expected elements from #main",
			".x:has(+ .y:has(.g .h) .i) matches expected elements from #main",
			".x:has(+ .y:has(> .g .h) .i) ~ .j matches expected elements from #main",
			".x:has(+ .y:has(.g .h) .i) ~ .j matches expected elements from #main",
			".x:has(~ .y:has(> .g .h) .i) matches expected elements from #main",
			".x:has(~ .y:has(.g .h) .i) matches expected elements from #main",
			".d .x:has(.e) matches expected elements from #main",
			".d ~ .x:has(~ .e) matches expected elements from #main",
			":has(.a) matches expected elements from #main",
			":has(.a > .b) matches expected elements from #main",
			":has(.a .b) matches expected elements from #main",
			":has(.a + .b) matches expected elements from #main",
			":has(.a ~ .b) matches expected elements from #main",
			":has(> .a) matches expected elements from #main",
			":has(> .a > .b) matches expected elements from #main",
			":has(> .a .b) matches expected elements from #main",
			":has(> .a + .b) matches expected elements from #main",
			":has(> .a ~ .b) matches expected elements from #main",
			":has(> .a) matches expected elements from scope BODY",
			":has(> .a > .b) matches expected elements from scope BODY",
			":has(> .a .b) matches expected elements from scope BODY",
			":has(> .a + .b) matches expected elements from scope BODY",
			":has(> .a ~ .b) matches expected elements from scope BODY",
			":has(> .a) matches expected elements from scope d01",
			":has(> .a > .b) matches expected elements from scope d01",
			":has(> .a .b) matches expected elements from scope d01",
			":has(> .a + .b) matches expected elements from scope d01",
			":has(> .a ~ .b) matches expected elements from scope d01",
			":has(> .a) matches expected elements from scope d12",
			":has(> .a > .b) matches expected elements from scope d12",
			":has(> .a .b) matches expected elements from scope d12",
			":has(> .a + .b) matches expected elements from scope d12",
			":has(> .a ~ .b) matches expected elements from scope d12",
			":has(> .a) matches expected elements from scope d17",
			":has(> .a > .b) matches expected elements from scope d17",
			":has(> .a .b) matches expected elements from scope d17",
			":has(> .a + .b) matches expected elements from scope d17",
			":has(> .a ~ .b) matches expected elements from scope d17",
			":has(+ .a) matches expected elements from #main",
			":has(+ .a > .b) matches expected elements from #main",
			":has(+ .a .b) matches expected elements from #main",
			":has(+ .a + .b) matches expected elements from #main",
			":has(+ .a ~ .b) matches expected elements from #main",
			":has(~ .a) matches expected elements from #main",
			":has(~ .a > .b) matches expected elements from #main",
			":has(~ .a .b) matches expected elements from #main",
			":has(~ .a + .b) matches expected elements from #main",
			":has(~ .a + .b > .c) matches expected elements from #main",
			":has(~ .a + .b .c) matches expected elements from #main",
			":has(.d .e) matches expected elements from #main",
			":has(.d .e) .f matches expected elements from #main",
			":has(> .d) matches expected elements from #main",
			":has(> .d) .f matches expected elements from #main",
			":has(~ .d ~ .e) matches expected elements from #main",
			":has(~ .d ~ .e) ~ .f matches expected elements from #main",
			":has(+ .d ~ .e) matches expected elements from #main",
			":has(+ .d ~ .e) ~ .f matches expected elements from #main",
			":has(> .g .h) matches expected elements from #main",
			":has(.g .h) matches expected elements from #main",
			":has(> .g .h) .i matches expected elements from #main",
			":has(.g .h) .i matches expected elements from #main",
			":has(+ :has(> .g .h) .i) matches expected elements from #main",
			":has(+ :has(.g .h) .i) matches expected elements from #main",
			":has(+ :has(> .g .h) .i) ~ .j matches expected elements from #main",
			":has(+ :has(.g .h) .i) ~ .j matches expected elements from #main",
			":has(~ :has(> .g .h) .i) matches expected elements from #main",
			":has(~ :has(.g .h) .i) matches expected elements from #main",
			".d :has(.e) matches expected elements from #main",
			".d ~ :has(~ .e) matches expected elements from #main"
		] );
	});
});
