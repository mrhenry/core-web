QUnit.test('atob', function(assert) {
	const expected = 'Hello World!';
	const actual = atob(btoa(expected));
	assert.equal(actual, expected);
});
