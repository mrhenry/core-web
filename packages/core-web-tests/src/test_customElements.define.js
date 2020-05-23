QUnit.test("customElements.define", function(assert) {
	class TestElementA extends HTMLElement {
		foo() {
			return "baz";
		}
	}

	customElements.define("test-element-a", TestElementA);
	const fixture = document.getElementById("qunit-fixture");

	fixture.innerHTML = "<test-element-a></test-element-a>";

	const el = fixture.querySelector("test-element-a");
	assert.equal(el.foo(), "baz");
});

QUnit.test("customElements.connectedCallback", function(assert) {
	class TestElementB extends HTMLElement {
		constructor() {
			super();

			this._content = "rendered content";
		}

		connectedCallback() {
			this.innerHTML = this._content || "";
		}
	}

	customElements.define("test-element-b", TestElementB);
	const fixture = document.getElementById("qunit-fixture");
	const elStart = new TestElementB();

	fixture.appendChild(elStart);

	const elOut = fixture.querySelector("test-element-b");
	assert.equal(elOut.innerHTML, "rendered content");
});
