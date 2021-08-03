const html = require('../../html/html');

module.exports = function hero() {
	return html`
		<section id="what" class="hero">
			<header class="hero__header">
				<h2>
					What is <em>core-web</em>?
				</h2>
			</header>

			<div class="hero__content">
				<div class="hero__text">
					<p>
						<strong>core-web</strong> is a set of tools to bundle polyfills together with your javascript code.
						Just define a set of browsers and automatically receive everything you need.
					</p>
					<p>
						Generate multiple outputs with multiple sets of browsers to speed up your site.
					</p>
				</div>

				<div>
					<!-- placeholder -->
					<!-- Used to be an image -->
				</div>
			</div>
		</section>
	`;
}

