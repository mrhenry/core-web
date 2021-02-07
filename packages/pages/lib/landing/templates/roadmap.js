const html = require('../../html/html');
const milestones = require('../content/milestones');

function renderMilestones(milestones) {
	let hasCurrent = false;
	// let hasFuture = false;
	let output = "";
	milestones.forEach((milestone, index) => {
		if ('current' === milestone.type && !hasCurrent) {
			hasCurrent = true;
			output += html`<h4 class="roadmap__future" style="display: none;">Where we are</h4>`;
		}

		// if ('future' === milestone.type && !hasFuture) {
		// 	hasFuture = true;
		// 	output += html`<h4 class="roadmap__future">Future Milestones</h4>`;
		// }

		output += html`
			<article
				aria-description="${milestone.type} milestone"
				class="milestone milestone--${milestone.type}"
				data-emoji="${milestone.emoji}"
				milestone-observer=""
			>
				<h3 class="milestone__title">${milestone.title}</h3>
				${ (() => {
					if (milestone.description) {
						return html`<div class="milestone__description">${milestone.description}</div>`;
					} else {
						return html``;
					}
				})() }
			</article>
		`;
	});
	return output;
}

module.exports = function roadmap() {
	return html`
		<section id="roadmap" class="roadmap">
			<header class="roadmap__header">
				<h2>Roadmap to v1</h2>
			</header>

			<div class="roadmap__timeline">
				${renderMilestones(milestones)}
			</div>
		</section>
	`;
}
