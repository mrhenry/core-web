QUnit.module("viewport", function() {
	QUnit.test("window.innerHeight", assert => {
		assert.ok(window.innerHeight > 0, "must be larger than 0");
	});

	QUnit.test("window.innerWidth", assert => {
		assert.ok(window.innerWidth > 0, "must be larger than 0");
	});

	QUnit.test("window.pageXOffset", assert => {
		assert.ok(window.pageXOffset === 0, "must be 0");
	});

	QUnit.test("window.pageYOffset", assert => {
		assert.ok(window.pageYOffset === 0, "must be 0");
	});

	QUnit.test("window.scrollX", assert => {
		assert.ok(window.scrollX === 0, "must be 0");
	});

	QUnit.test("window.scrollY", assert => {
		assert.ok(window.scrollY === 0, "must be 0");
	});
});
