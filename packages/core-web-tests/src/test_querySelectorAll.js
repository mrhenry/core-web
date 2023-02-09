QUnit.module("querySelector", function() {
	QUnit.test("querySelectorAll", function(assert) {
		const fixture = document.getElementById("qunit-fixture");

		const div1 = document.createElement("div");
		fixture.appendChild(div1);
		div1.className = "one";

		const div2 = document.createElement("div");
		fixture.appendChild(div2);
		div2.className = "two";
		
		const result = [];
		fixture.querySelectorAll("*").forEach((el) => {
			result.push(el);
		});

		assert.equal(result.length, 2);
		if (result.length == 2) {
			assert.equal(result[0].className, "one");
			assert.equal(result[1].className, "two");
		}
	});

	QUnit.test("querySelectorAll with :scope", function(assert) {
		const fixture = document.getElementById("qunit-fixture");

		const list = document.createElement("ul");
		fixture.appendChild(list);
		list.className = "one";

		const item = document.createElement("li");
		list.appendChild(item);
		item.className = "two";

		const div = document.createElement("div");
		item.appendChild(div);
		div.className = "three";
		
		const resultA = [];
		item.querySelectorAll(":scope > .three").forEach((el) => {
			resultA.push(el);
		});

		assert.equal(resultA.length, 2);
		if (resultA[0]) {
			assert.equal(resultA[0].className, "three");
		}

		const resultB = [];
		fixture.querySelectorAll(".three").forEach((el) => {
			resultB.push(el);
		});

		assert.equal(resultB.length, 1);
		if (resultB[0]) {
			assert.equal(resultB[0].className, "three");
		}

		const resultC = [];
		fixture.querySelectorAll(":scope > .three").forEach((el) => {
			resultC.push(el);
		});

		assert.equal(resultC.length, 0);
	});

	// Browserstack runner + QUnit goes nuts on these tests in older Chrome versions.
	if ("Proxy" in self) {
		QUnit.test("matches with :scope", function(assert) {
			const fixture = document.getElementById("qunit-fixture");

			const input1 = document.createElement("input");
			fixture.appendChild(input1);
			input1.className = "one";
			input1.type = "checkbox";
			input1.checked = true;

			assert.ok(input1.matches(":scope:checked"));
			assert.ok(input1.matches(":checked"));

			const div1 = document.createElement("div");
			fixture.appendChild(div1);
			div1.className = "one";

			const div2 = document.createElement("div");
			div1.appendChild(div2);
			div2.className = "two";

			assert.ok(div2.matches(":scope.two"));
			assert.ok(div2.matches(".one :scope"));
		});

		QUnit.test("closest with :scope", function (assert) {
			const fixture = document.getElementById("qunit-fixture");

			const div1 = document.createElement("div");
			fixture.appendChild(div1);
			div1.className = "one alpha";

			const div2 = document.createElement("div");
			div1.appendChild(div2);
			div2.className = "one beta";

			const div3 = document.createElement("div");
			div2.appendChild(div3);
			div3.className = "one delta";

			assert.equal(div2.closest(".one"), div2);
			assert.equal(div2.closest(".one:scope"), div2);
		});
	}
});
