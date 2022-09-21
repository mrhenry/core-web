const html = require('../../html/html');

module.exports = function requirements() {
	return html`
		<section class="requirements">
			<header class="requirements__header">
				<h2>
					Supported
				</h2>
			</header>

			<ul>
				<li>
					<a href="https://www.npmjs.com/package/@mrhenry/babel-plugin-core-web" target="_blank">Babel</a>
				</li>
				<li>
					<i><a href="https://github.com/mrhenry/core-web/issues/new/choose" target="_blank">(open an issue to request other platforms)</a></i>
				</li>
			</ul>
		</section>
	`;
}
