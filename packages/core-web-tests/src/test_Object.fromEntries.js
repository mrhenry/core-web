QUnit.test('Object.fromEntries', function(assert) {
	// https://github.com/Financial-Times/polyfill-library/issues/552
	Object.fromEntries([["a", 1], ["b", 2]]);
	assert.ok(true, 'it worked');
});
