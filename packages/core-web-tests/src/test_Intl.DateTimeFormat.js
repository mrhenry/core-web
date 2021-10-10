QUnit.test("Intl.DateTimeFormat – en", function (assert) {
	const date = new Date(Date.UTC(2012, 11, 20, 12, 0, 0));
	const remove_LEFT_TO_RIGHT_MARKER = (s) => s.replace(/\u200E/g, "");
	assert.equal(
		remove_LEFT_TO_RIGHT_MARKER(new Intl.DateTimeFormat("en").format(date)),
		"12/20/2012"
	);
});

QUnit.test("Intl.DateTimeFormat – en-GB", function (assert) {
	const date = new Date(Date.UTC(2012, 11, 20, 12, 0, 0));
	const remove_LEFT_TO_RIGHT_MARKER = (s) => s.replace(/\u200E/g, "");
	assert.equal(
		remove_LEFT_TO_RIGHT_MARKER(new Intl.DateTimeFormat("en-GB").format(date)),
		"20/12/2012"
	);
});

QUnit.test("Intl.DateTimeFormat – en-US-POSIX", function (assert) {
	const date = new Date(Date.UTC(2012, 11, 20, 12, 0, 0));
	const remove_LEFT_TO_RIGHT_MARKER = (s) => s.replace(/\u200E/g, "");
	assert.equal(
		remove_LEFT_TO_RIGHT_MARKER(new Intl.DateTimeFormat("en-US-POSIX").format(date)),
		"12/20/2012"
	);
});
