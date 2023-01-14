const html = require('../../html/html');
const he = require('he');

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
								return html`<li class="navigation__list-item"><a href="${he.encode(item.url)}" class="navigation__link" target="_blank" rel="noopener">${he.encode(item.title)}</a></li>`;
							}

							return html`<li class="navigation__list-item"><a href="${he.encode(item.url)}" class="navigation__link">${he.encode(item.title)}</a></li>`;
						}).join('')}
					</ul>
				</nav>
			</div>
		</div>
	`;
}
