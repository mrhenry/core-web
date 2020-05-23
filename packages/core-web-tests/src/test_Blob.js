QUnit.module("Blob", function() {
	QUnit.test("new Blob", assert => {
		const blob = new Blob(["Hello", " World", "!"], { type: "text/plain" });
		assert.equal(blob.size, 12);
		assert.equal(blob.type, "text/plain");
	});

	// TODO: needs polyfill for "stream()"
	QUnit.skip("Blob/Response interop", async assert => {
		const blob = new Blob(["Hello", " World", "!"], { type: "text/plain" });
		const text = await new Response(blob).text();
		assert.equal(text, "Hello World!");
	});

	// TODO: fetch polyfill doesn't handle data urls
	QUnit.skip("URL.createObjectURL", async assert => {
		const blob = new Blob(["Hello", " World", "!"], { type: "text/plain" });
		const data = URL.createObjectURL(blob);
		const actual = await (await fetch(data)).text();
		assert.equal(actual, "Hello World!");
	});

	// TODO: needs polyfill for "text()"
	QUnit.skip("Blob.text()", async assert => {
		const blob = new Blob(["Hello", " World", "!"], { type: "text/plain" });
		assert.equal(await blob.text(), "Hello World!");
	});
});
