QUnit.test('JSON', function(assert) {
	const expected = {
		t: true,
		f: false,
		nf: 3.14,
		ni: 42,
		n: null,
		s: 'Hi there',
		a: ['b', 'c']
	};
	const actual = JSON.parse(JSON.stringify(expected));
	assert.deepEqual(actual, expected);
});
