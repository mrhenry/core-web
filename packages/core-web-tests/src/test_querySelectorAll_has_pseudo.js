function formatElements(elements) {
	return elements.map((e) => e.id).sort().join();
}

// Test that |selector| returns the given elements in #main.
function testSelectorAllFromMain(assert, selector, expected) {
	assert.step(`${selector} matches expected elements from #main`);
	let actual = Array.from(document.getElementById("main").querySelectorAll(selector));
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
});
