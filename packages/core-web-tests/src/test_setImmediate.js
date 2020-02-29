QUnit.test('setImmediate', function(assert) {
	var done = assert.async();
	
	// eslint-disable-next-line no-undef
	setImmediate(() => {
		assert.ok(true, 'expected setImmediate to call');
		done();
	});
});
