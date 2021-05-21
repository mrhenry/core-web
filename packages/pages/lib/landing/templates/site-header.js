const html = require('../../html/html');

module.exports = function siteHeader(menu) {
	return html`
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
						${menu.map((item) => {
							if (item.url.indexOf('://') >= 0) {
								return html`<li class="navigation__list-item"><a href="${item.url}" class="navigation__link" target="_blank" rel="noopener">${item.title}</a></li>`;
							}

							return html`<li class="navigation__list-item"><a href="${item.url}" class="navigation__link">${item.title}</a></li>`;
						}).join('')}
					</ul>
				</nav>
			</div>
		</div>
	`;
}
