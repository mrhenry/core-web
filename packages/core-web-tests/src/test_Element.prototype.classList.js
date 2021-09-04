QUnit.test('Element.prototype.classList', function(assert) {
	const fixture = document.getElementById('qunit-fixture');

	const div = document.createElement('div');
	fixture.appendChild(div);

	div.classList.add('classlist-test');
	assert.equal(div.className, 'classlist-test');

	div.className = 'foo baz';
	var tokenList = div.classList;

	var results = [];
	for (var token of tokenList) {
		results.push(token);
	}

	assert.deepEqual(results, ['foo', 'baz']);
});
