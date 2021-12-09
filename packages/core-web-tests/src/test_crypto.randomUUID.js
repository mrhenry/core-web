QUnit.module("crypto.randomUUID", () => {
	QUnit.test("has a correct length", (assert) => {
		assert.equal(crypto.randomUUID().length, 36);
	});

	QUnit.test("returns a string", (assert) => {
		assert.equal(typeof crypto.randomUUID(), "string");
	});

	QUnit.test("passes a UUID regexp test", (assert) => {
		// This regexp seems more strict than the one from WPT.
		// Testing both seems safest.
		assert.ok(/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/.test(crypto.randomUUID()));
	});

	// UUID is in namespace format (16 bytes separated by dashes):
	QUnit.test("has the correct namespace format", (assert) => {
		// Added start and end tokens to the regexp. WPT version doesn't have these
		var UUIDRegex = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
		for (var i = 0; i < iterations; i++) {
			assert.ok(UUIDRegex.test(randomUUID()));
		}
	});

	// WPT
	// Run for enough iterations that we're likely to catch edge-cases, like
	// failing to set a reserved bit:
	var iterations = 256;
	// Track all the UUIDs generated during test run, bail if we ever collide:
	var uuids = [];
	function randomUUID() {
		var uuid = crypto.randomUUID();
		if (uuids.indexOf(uuid) !== -1) {
			throw new Error("uuid collision " +  uuid);
		}
		uuids.push(uuid);
		return uuid;
	}

	// Set the 4 most significant bits of array[6], which represent the UUID
	// version, to 0b0100:
	QUnit.test("sets the correct version", (assert) => {
		for (var i = 0; i < iterations; i++) {
			var value = parseInt(randomUUID().split("-")[2].slice(0, 2), 16);
			value = value & 240;
			assert.equal(value, 64);
		}
	});

	// Set the 2 most significant bits of array[8], which represent the UUID
	// variant, to 0b10:
	QUnit.test("sets the correct variant", (assert) => {
		for (var i = 0; i < iterations; i++) {
			// Grab the byte representing array[8]:
			var value = parseInt(randomUUID().split("-")[3].slice(0, 2), 16);
			value = value & 192;
			assert.equal(value, 128);
		}
	});
});
