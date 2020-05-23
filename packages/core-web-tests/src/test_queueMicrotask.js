QUnit.test("queueMicrotask", function(assert) {
	var done = assert.async();
	queueMicrotask(() => {
		assert.ok(true, "expected queueMicrotask to call");
		done();
	});
});
