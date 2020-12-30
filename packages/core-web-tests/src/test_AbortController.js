// TODO: polyfill is broken upstream
// Interop issue : webkit https://webkit.org/b/174980
QUnit.test('AbortController', async assert => {
	const ac = new AbortController();

	await fetch('package.json', { signal: ac.signal });
	ac.abort();
	assert.rejects(fetch('package.json', { signal: ac.signal }));
});
