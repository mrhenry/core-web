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
						<strong>core-web</strong> is a set of tools to bundle polyfills together with your javascript code. Just define a set of browsers and automatically receive everything you need.
					</p>
				</div>

				<div>
					<!-- placeholder -->
				</div>
				<!-- <div class="hero__picture-wrapper">
					<div class="hero__picture-placer">
						<picture class="hero__picture">
							<source
								srcset="/images/hero-mobile.gif"
								media="(max-width: 767px)"
							>
							<img
								alt="overview of this website in other browsers to show off how cool this tool is."
								class="hero__picture__image"
								src="/images/hero-desktop.gif"
								loading="lazy"
							>
						</picture>
					</div>
				</div> -->
			</div>
		</section>
	`;
}

