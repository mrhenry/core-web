import '@mrhenry/core-web/modules/Intl.DateTimeFormat.~timeZone.golden';

QUnit.test('Intl.DateTimeFormat – time zone', function (assert) {
	var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));
	var options = {
		timeZone: 'Australia/Sydney',
		timeZoneName: 'long'
	};

	assert.equal(new Intl.DateTimeFormat('en', options).format(date).slice(-32), 'Australian Eastern Daylight Time');
});
