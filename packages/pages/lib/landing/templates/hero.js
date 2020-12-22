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
						Must go faster. Must go faster. Remind me to thank John for a lovely weekend. Did he just throw my cat out of the window? So you two dig up, dig up dinosaurs?
					</p>
				</div>

				<picture class="hero__picture">
					<source srcset="/images/hero-mobile.gif"
							media="(max-width: 767px)">
					<img
						alt="overview of this website in other browsers to show off how cool this tool is."
						class="hero__picture__image"
						src="/images/hero-desktop.gif"
					>
				</picture>
			</div>
		</section>
	`;
}
