// TODO: polyfill is broken upstream
QUnit.test('AbortController', async assert => {
	const ac = new AbortController();

	await fetch('package.json', { signal: ac.signal });

	ac.abort();

	// Ensure we call "fetch" in a later event loop cycle.
	setTimeout(() => {
		assert.rejects(fetch('package.json', { signal: ac.signal }));
	}, 0);
});
