QUnit.test("requestAnimationFrame", assert => {
	const done = assert.async();
	requestAnimationFrame(() => {
		assert.ok(true, "expected requestAnimationFrame to call");
		done();
	});
});
