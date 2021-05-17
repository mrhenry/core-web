QUnit.module('DOM Iterables', function () {
	QUnit.test('NodeList iterator', function (assert) {
		const fixture = document.getElementById('qunit-fixture');

		const div1 = document.createElement('div');
		fixture.appendChild(div1);
		div1.className = 'one';

		const div2 = document.createElement('div');
		fixture.appendChild(div2);
		div2.className = 'two';

		const list = fixture.querySelectorAll('div');

		const resultsA = [];
		for (const el of list) {
			resultsA.push(el);
		}

		assert.equal(resultsA.length, 2);
		if (resultsA.length === 2) {
			assert.equal(resultsA[0], div1);
			assert.equal(resultsA[1], div2);
		}

		const resultsB = [...list];

		assert.equal(resultsB.length, 2);
		if (resultsB.length === 2) {
			assert.equal(resultsB[0], div1);
			assert.equal(resultsB[1], div2);
		}
	});
});
