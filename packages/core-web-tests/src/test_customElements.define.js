QUnit.test('customElements.define', function(assert) {
	class TestElement extends HTMLElement {
		foo() {
			return 'baz';
		}
	}

	customElements.define('test-element', TestElement);
	const fixture = document.getElementById('qunit-fixture');

	fixture.innerHTML = '<test-element></test-element>';

	const el = fixture.querySelector('test-element');
	assert.equal(el.foo(), 'baz');
});
