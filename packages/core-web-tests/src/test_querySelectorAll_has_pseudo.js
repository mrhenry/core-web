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
	assert.step(`${selector1} and ${selector2} returns same elements on ${scope.id}`);
	assert.equal(formatElements(result1), formatElements(result2));
}

// To test expected diffs from spec/wpt
function compareSelectorAllNotEqual(assert, scope, selector1, selector2) {
	let result1 = Array.from(scope.querySelectorAll(selector1));
	let result2 = Array.from(scope.querySelectorAll(selector2));
	assert.step(`not : ${selector1} and ${selector2} returns same elements on ${scope.id}`);
	assert.notEqual(formatElements(result1), formatElements(result2));
}

var supportsIsQueries = false;
try {
	document.body.querySelector(":is(div)");
	supportsIsQueries = true;
} catch (_) { /* noop */ }

QUnit.module("querySelector with :has", function () {
	QUnit.test("is valid selector", function (assert) {
		assert.ok(document.body.querySelector(":has(*)"));
	});

	QUnit.test("accepts broken selector lists", function (assert) {
		assert.ok(document.body.querySelector(":has(*, :does-not-exist)"));
	});

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

		if (supportsIsQueries) {
			testSelectorAllFromMain(assert, ":has(:is(.target ~ .sibling .descendant))", [a, h, j]);
			testSelectorAllFromMain(assert, ".parent:has(:is(.target ~ .sibling .descendant))", [h]);
		} else {
			assert.step(":has(:is(.target ~ .sibling .descendant)) matches expected elements from #main");
			assert.step(".parent:has(:is(.target ~ .sibling .descendant)) matches expected elements from #main");
		}

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
		testSelectorAllFromScope(assert, scope1, ":has(:scope .c)", [d02]);
		testSelectorAllFromScope(assert, scope1, ":has(.a :scope)", []);

		// there can be more simple and efficient alternative for a ':scope' in ':has'
		testSelectorAllFromScope(assert, scope1, ".a:has(:scope) .c", []);
		testSelectorAllFromScope(assert, scope2, ".a:has(:scope) .c", []);

		if (supportsIsQueries) {
			compareSelectorAllNotEqual(assert, scope1, ".a:has(:scope) .c", ":is(.a :scope .c)");
			compareSelectorAll(assert, scope2, ".a:has(:scope) .c", ":is(.a :scope .c)");
			testSelectorAllFromScope(assert, scope1, ".c:has(:is(:scope .d))", [d02, d03]);
			compareSelectorAll(assert, scope1, ".c:has(:is(:scope .d))", ":scope .c:has(.d)");
			compareSelectorAll(assert, scope1, ".c:has(:is(:scope .d))", ".c:has(.d)");
			testSelectorAllFromScope(assert, scope2, ".c:has(:is(:scope .d))", []);
			compareSelectorAll(assert, scope2, ".c:has(:is(:scope .d))", ":scope .c:has(.d)");
			compareSelectorAll(assert, scope2, ".c:has(:is(:scope .d))", ".c:has(.d)");
		} else {
			assert.step("not : .a:has(:scope) .c and :is(.a :scope .c) returns same elements on scope1");
			assert.step(".a:has(:scope) .c and :is(.a :scope .c) returns same elements on scope2");
			assert.step(".c:has(:is(:scope .d)) matches expected elements from scope scope1");
			assert.step(".c:has(:is(:scope .d)) and :scope .c:has(.d) returns same elements on scope1");
			assert.step(".c:has(:is(:scope .d)) and .c:has(.d) returns same elements on scope1");
			assert.step(".c:has(:is(:scope .d)) matches expected elements from scope scope2");
			assert.step(".c:has(:is(:scope .d)) and :scope .c:has(.d) returns same elements on scope2");
			assert.step(".c:has(:is(:scope .d)) and .c:has(.d) returns same elements on scope2");
		}

		assert.verifySteps([
			":has(:scope) matches expected elements from scope scope1",
			":has(:scope .c) matches expected elements from scope scope1",
			":has(.a :scope) matches expected elements from scope scope1",
			".a:has(:scope) .c matches expected elements from scope scope1",
			".a:has(:scope) .c matches expected elements from scope scope2",
			"not : .a:has(:scope) .c and :is(.a :scope .c) returns same elements on scope1",
			".a:has(:scope) .c and :is(.a :scope .c) returns same elements on scope2",
			".c:has(:is(:scope .d)) matches expected elements from scope scope1",
			".c:has(:is(:scope .d)) and :scope .c:has(.d) returns same elements on scope1",
			".c:has(:is(:scope .d)) and .c:has(.d) returns same elements on scope1",
			".c:has(:is(:scope .d)) matches expected elements from scope scope2",
			".c:has(:is(:scope .d)) and :scope .c:has(.d) returns same elements on scope2",
			".c:has(:is(:scope .d)) and .c:has(.d) returns same elements on scope2"
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
});
