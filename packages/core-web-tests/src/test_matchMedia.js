QUnit.test("matchMedia", (assert) => {
	const mql = window.matchMedia("(max-width: 200px)");
	assert.equal(mql.matches, false);

	mql.addListener(() => {
		console.log("listened");
	});

	assert.ok(true, "it worked");
});
