QUnit.module("querySelector with :has", function () {
	QUnit.test("is valid selector", function (assert) {
		assert.ok(document.body.querySelector(":has(*)"));
	});

	QUnit.test("accepts broken selector lists", function (assert) {
		assert.ok(document.body.querySelector(":has(*, :does-not-exist)"));
	});
});
