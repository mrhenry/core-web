class TestElement extends HTMLElement{

	foo() {
		return 'baz';
	}
}

QUnit.test('customElements.define', function(assert) {
	customElements.define('test-element', TestElement);
	const fixture = document.getElementById('qunit-fixture');

	fixture.innerHTML = '<test-element></test-element>';

	const x = fixture.querySelector('test-element');
	assert.equal( x.foo(), 'baz' );
});
