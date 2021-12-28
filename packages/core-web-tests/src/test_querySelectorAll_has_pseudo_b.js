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

	QUnit.test(":has relative argument (a)", function (assert) {
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
		
		const done = assert.async();
		setTimeout(() => {
			const d02 = document.getElementById("d02");
			const d06 = document.getElementById("d06");
			const d07 = document.getElementById("d07");
			const d09 = document.getElementById("d09");
			const d12 = document.getElementById("d12");
			const d18 = document.getElementById("d18");
			const d19 = document.getElementById("d19");
			const d21 = document.getElementById("d21");
			const d24 = document.getElementById("d24");
			const d28 = document.getElementById("d28");
			const d32 = document.getElementById("d32");
			const d37 = document.getElementById("d37");
			const d40 = document.getElementById("d40");
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
				".d ~ .x:has(~ .e) matches expected elements from #main"
			]);

			setTimeout(() => {
				done();
			}, 250);
		}, 250);
	});

	QUnit.test(":has relative argument (b)", function (assert) {
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
		
		const done = assert.async();
		setTimeout(() => {
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

			setTimeout(() => {
				done();
			}, 500);
		}, 500);
	});
});
