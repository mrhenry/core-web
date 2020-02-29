QUnit.test("Element.prototype.classList", function(assert) {
	const fixture = document.getElementById('qunit-fixture');

	const div = document.createElement('div');
	fixture.appendChild(div);

	div.classList.add('classlist-test');
  assert.equal( div.className, 'classlist-test' );
});
