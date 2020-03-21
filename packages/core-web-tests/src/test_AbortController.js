// TODO: polyfill is broken upstream
QUnit.test('AbortController', async assert => {
	const ac = new AbortController();

	await fetch('package.json?z=1', { signal: ac.signal });
	ac.abort();
	assert.rejects(fetch('package.json?z=2', { signal: ac.signal }));
});
