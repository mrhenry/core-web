QUnit.test("Intl.RelativeTimeFormat", function(assert) {
	const format = new Intl.RelativeTimeFormat("en", { style: "narrow" });
	const expected = "in 3 qtrs.";
	const actual = format.format(3, "quarter");
	assert.equal(actual, expected);
});
