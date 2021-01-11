QUnit.test('queueMicrotask', function(assert) {
	const fixture = document.getElementById('qunit-fixture');

	const div1 = document.createElement('div');
	fixture.appendChild(div1);
	div1.className = 'one';

	const div2 = document.createElement('div');
	fixture.appendChild(div2);
	div2.className = 'two';
	
	const result = [];
	fixture.querySelectorAll('*').forEach((el) => {
		result.push(el);
	});

	assert.equal(result[0].className, 'one');
	assert.equal(result[1].className, 'two');
});
