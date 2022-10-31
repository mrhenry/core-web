QUnit.test("customElements.attachShadow", function(assert) {
	class TestElementShadow extends HTMLElement {
		connectedCallback() {
			// Create a shadow root
			var shadow = this.attachShadow({ mode: "open" });

			// Create text node and add word count to it
			var spacer = document.createElement("div");
			spacer.setAttribute("style", "width: 100px; height: 20px;");
			this.setAttribute("style", "display: inline-block;");

			// Append it to the shadow root
			shadow.appendChild(spacer);
		}
	}

	customElements.define("test-element-shadow", TestElementShadow);
	const fixture = document.getElementById("qunit-fixture");

	fixture.innerHTML = "<test-element-shadow></test-element-shadow>";

	const el = fixture.querySelector("test-element-shadow");
	assert.equal(window.getComputedStyle(el).width, "100px");
	assert.equal(window.getComputedStyle(el).height, "20px");
});

// We expect `:scope` to work even when ShadyCSS is loaded.
QUnit.module("querySelector", function () {
	QUnit.test("querySelectorAll", function (assert) {
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

	QUnit.test("querySelectorAll with :scope", function (assert) {
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

		assert.equal(resultA.length, 1);
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
});
