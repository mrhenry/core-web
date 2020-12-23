const milestoneObserver = new IntersectionObserver((entries) => {
	if (!entries || entries.length < 1) {
			return;
	}

	entries.forEach(entry => {
		if (
			entry.intersectionRatio > 0.6 &&
			entry.target &&
			!entry.target.hasAttribute('milestone-visible')
		) {
			entry.target.setAttribute('milestone-visible', 'true');
		} else {
				entry.target.removeAttribute('milestone-visible');
		}
	});
}, {
	threshold: 0.6
});

function init() {
	const milestones = document.querySelectorAll('[milestone-observer]');
	if (!milestones || milestones.length < 1) {
			return;
	}

	milestones.forEach((el) => {
			milestoneObserver.observe(el);
	});
};

init();
requestAnimationFrame(init);
document.addEventListener("DOMContentLoaded", init);
