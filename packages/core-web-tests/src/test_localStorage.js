QUnit.test('localStorage', assert => {
	window.localStorage.setItem('foo', 'bar');
	window.localStorage.setItem('foz', 'baz');
	assert.ok(['foo', 'foz'].includes(window.localStorage.key(0)));
	assert.equal(window.localStorage.getItem('foo'), 'bar');
	assert.equal(window.localStorage.length, 2);
	window.localStorage.removeItem('foo');
	assert.equal(window.localStorage.length, 1);
	window.localStorage.clear();
	assert.equal(window.localStorage.length, 0);
});
