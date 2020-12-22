const html = require('../../html/html');

function renderMilestones(milestones) {
	let output = "";
	milestones.forEach((milestone, index) => {
		if (index > 0 && milestones[index-1].type !== milestone.type) {
			output += '<h4 class="roadmap__future">Future Milestones</h4>';
		}

		output += `
			<article class="milestone" data-emoji="${milestone.emoji}" aria-description="${milestone.type} milestone">
				<h3 class="milestone__title">${milestone.title}</h3>
				<div class="milestone__description">${milestone.description}</div>
			</article>
		`;
	});
	return output;
}

module.exports = function roadmap(milestones) {
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
