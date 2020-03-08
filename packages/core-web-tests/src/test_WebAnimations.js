QUnit.test('WebAnimations', assert => {
	const el = document.createElement('div');
	document.body.appendChild(el);
	assert.equal(window.getComputedStyle(el).opacity, '1');

	const animations = el.animate(
		[
			{
				opacity: [1, 0.5]
			}
		],
		{
			duration: 250,
			fill: 'forwards'
		}
	);

	const done = assert.async();
	animations.onfinish = () => {
		done();
		assert.equal(window.getComputedStyle(el).opacity, '0.5');
		el.remove();
	};
});
