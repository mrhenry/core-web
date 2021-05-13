const html = require('../../html/html');

module.exports = function requirements() {
	return html`
		<section class="requirements">
			<header class="requirements__header">
				<h2>
					Requirements
				</h2>
			</header>

			<ul>
				<li>
					Babel
				</li>
				<li>
					User Agent based content negotiation
				</li>
			</ul>
		</section>
	`;
}
