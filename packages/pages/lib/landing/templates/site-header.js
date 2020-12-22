const html = require('../../html/html');

module.exports = function siteHeader(menu) {
	return html`
		<div class="section">
			<div class="wrapper">
				<div class="site-header">
					<a
						class="logo"
						href="/"
					>
						core-web
					</a>

					<nav class="navigation" aria-label="page sections">
						<ul class="navigation__list">
							${menu.map((item) => `<li class="navigation__list-item"><a href="${item.url}" class="navigation__link">${item.title}</a></li>`).join('')}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	`;
}
