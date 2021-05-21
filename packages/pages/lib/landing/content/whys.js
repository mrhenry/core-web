const html = require('../../html/html');

module.exports = {
	items: [
		{
			title: 'One less blocking http request',
			content: html`
Most visitors use a modern browser which doesn't need any polyfills.
When polyfills are bundled there is no need for an extra http request, making your site faster.
`.trim()
		},
		{
			title: 'One less point of failure',
			content: html`
Any external client-side dependency has some inherent risk.
Converting this to a build dependency reduces this by making changes more visible to you.
`.trim()
		},
		{
			title: 'Reproducible builds',
			content: html`
When an external polyfill provider changes or updates their code they potentially introduce bugs impacting your code.
Packaging polyfills with your code adds an extra level of checks to prevent bugs from landing in production.
`.trim()
		},
		{
			title: 'Sourcemaps',
			content: html`
Because your build process sees every polyfill, you can have sourcemaps.
This makes it easier to debug and report issues.
`.trim()
		},
		{
			title: 'Control over updates',
			content: html`
You can add your own safeguards and only update <strong>core-web</strong> when all your requirements are met.
`.trim()
		},
		{
			title: 'Avoid conflicting polyfills',
			content: html`
<a href="https://github.com/zloirock/core-js" target="_blank" rel="noopener"><strong>core-js</strong></a> and <a href="https://polyfill.io/v3/" target="_blank" rel="noopener"><strong>Polyfill.io</strong></a> have overlapping polyfills.
We make sure you only get a single polyfill for each feature.
`.trim()
		}
	]
}
