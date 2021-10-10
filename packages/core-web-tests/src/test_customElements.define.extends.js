QUnit.skip("customElements.define with extends", function (assert) {
	class TestElementExtender extends HTMLButtonElement {
		foo() {
			return "baz";
		}
	}

	customElements.define("test-element-extender", TestElementExtender, { extends: "button" });
	const fixture = document.getElementById("qunit-fixture");

	fixture.innerHTML = "<button is=\"test-element-extender\"></button>";

	const el = fixture.querySelector("button");
	assert.equal(el.foo(), "baz");
});
