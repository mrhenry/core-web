QUnit.module('Blob', function() {
	// https://stackoverflow.com/a/24354303/4263818
	QUnit.skip('URL.createObjectURL', async assert => {
		const blob = new Blob(['Hello', ' World', '!'], { type: 'text/plain' });
		const data = URL.createObjectURL(blob);
		const actual = await (await fetch(data)).text();
		assert.equal(actual, 'Hello World!');
	});

	QUnit.test('new Blob', assert => {
		const blob = new Blob(['Hello', ' World', '!'], { type: 'text/plain' });
		assert.equal(blob.size, 12);
		assert.equal(blob.type, 'text/plain');
	});

	// TODO: needs polyfill
	QUnit.skip('Blob.text()', async assert => {
		const blob = new Blob(['Hello', ' World', '!'], { type: 'text/plain' });
		assert.equal(await blob.text(), 'Hello World!');
	});
});
