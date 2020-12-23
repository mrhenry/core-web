const html = require('../../html/html');

module.exports = {
	items: [
		{
			title: 'One less blocking http request',
			content: html`
Most visitors use a modern browser which doesn't need any polyfills.
When polyfills are bundled there is no need for an extra http request.
For most visitors your pages will render faster.
`.trim()
		},
		{
			title: 'One less point of failure',
			content: html`
Any external client side dependency has some inherent risk.
Converting this to a build depedency reduces this.
`.trim()
		},
		{
			title: 'Reproducible builds',
			content: html`
When an external polyfill provider changes or updates their code they potentially introduce bugs impacting your code. Packaging polyfills with your code adds an extra level of checks to prevent bugs from landing in production.
`.trim()
		},
		{
			title: 'Sourcemaps',
			content: html`
Because your build process sees every polyfill you can have sourcemaps.
This makes it easier to report and debug issues.
`.trim()
		},
		{
			title: 'Control over updates',
			content: html`
You can add your safeguards and only update core-web when all your requirements are met.
`.trim()
		}
	]
}
