QUnit.test("requestIdleCallback", assert => {
	const done = assert.async();
	requestIdleCallback(() => {
		assert.ok(true, "expected requestIdleCallback to call");
		done();
	});
});
