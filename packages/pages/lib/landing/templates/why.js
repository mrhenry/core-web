const html = require('../../html/html');

function renderWhyItems(items) {
	let output = '';

	items.forEach((item) => {
		output += html`
			<article class="why__item">
				<div class="card">
					<h3 class="why__item__title">
						${item.title}
					</h3>

					<div class="why__item__content">
						${item.content}
					</div>
				</div>
			</article>
		`;
	});

	return output;
}

module.exports = function why(whys) {
	return html`
		<section class="why" id="why">
			<header class="why__header">
				<h2>
					Why use <em>core-web</em>?
				</h2>
			</header>

			<div class="why__content">
				${renderWhyItems(whys.items)}
			</div>
		</section>
	`;
}
