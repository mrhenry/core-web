const html = require('../../html/html');

module.exports = function requirements() {
	return html`
		<section class="why">
			<header class="why__header">
				<h2>
					Requirements
				</h2>
			</header>

			<div class="why__content">
				<ul>
					<li>
						Babel
					</li>
					<li>
						User Agent based content negotiation
					</li>
				</ul>
			</div>
		</section>
	`;
}
