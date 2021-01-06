QUnit.test('TypedArray', function(assert) {
	const typedArray = new Int8Array(8);
	typedArray[1] = 32;

	assert.equal(typedArray[0], 0);
	assert.equal(typedArray[1], 32);
	assert.equal(typedArray[2], 0);
	assert.equal(typedArray[3], 0);
	assert.equal(typedArray[4], 0);
	assert.equal(typedArray[5], 0);
	assert.equal(typedArray[6], 0);
	assert.equal(typedArray[7], 0);
	assert.equal(typedArray.length, 8);
});
