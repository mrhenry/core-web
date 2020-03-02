QUnit.test('Element.prototype.classList', function(assert) {
	const fixture = document.getElementById('qunit-fixture');

	const div = document.createElement('div');
	fixture.appendChild(div);

	Object.assign(div, {
		width: '100px',
		height: '200px'
	});
	assert.equal(div.width, '100px');
	assert.equal(div.height, '200px');

	Object.assign(div.style, {
		backgroundColor: 'black'
	});

	assert.equal(div.getAttribute('style'), 'background-color: black;');
});
