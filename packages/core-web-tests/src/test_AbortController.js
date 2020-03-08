// TODO: polyfill is broken upstream
QUnit.test('AbortController', async assert => {
	const ac = new AbortController();

	await fetch('package.json', { signal: ac.signal });
	ac.abort();
	assert.rejects(fetch('package.json', { signal: ac.signal }));
});
