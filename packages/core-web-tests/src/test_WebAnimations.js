QUnit.test("WebAnimations", (assert) => {
	const fixture = document.getElementById("qunit-fixture");

	const el = document.createElement("div");
	fixture.appendChild(el);

	assert.equal(window.getComputedStyle(el).opacity, "1");

	const animations = el.animate(
		[
			{
				opacity: 1
			},
			{
				opacity: 0.5
			}
		],
		{
			duration: 250,
			fill: "forwards"
		}
	);

	const done = assert.async();
	animations.onfinish = () => {
		done();
		assert.equal(window.getComputedStyle(el).opacity, "0.5");
		el.remove();
	};
});
