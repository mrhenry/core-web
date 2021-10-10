QUnit.test("Intl.DateTimeFormat – time zone", function (assert) {
	var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

	assert.equal(new Intl.DateTimeFormat("en", {
		timeZone: "Australia/Sydney",
		timeZoneName: "long"
	}).format(date).slice(-32), "Australian Eastern Daylight Time");
});
