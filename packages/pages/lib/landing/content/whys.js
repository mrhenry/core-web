const html = require('../../html/html');

module.exports = {
	items: [
		{
			title: 'One less blocking http request',
			content: html`
<p>Most visitors use a modern browser which doesn't need any polyfills.</p>
<p>When polyfills are bundled only for older browsers, there is no need for an extra http request, making your site faster.</p>
`.trim()
		},
		{
			title: 'One less point of failure',
			content: html`
<p>Any external client-side dependency has some inherent risk.</p>
<p>Bundling polyfills removes this dependency on a 3rd party provider.</p>
`.trim()
		},
		
		{
			title: 'Reproducible builds',
			content: html`
<p>When an external polyfill provider changes or updates their code they potentially introduce bugs (or unexpected fixes) impacting your code.</p>
<p>Packaging polyfills with your code adds an extra level of checks to prevent unwanted changes from effecting production.</p>
`.trim()
		},
		{
			title: 'Sourcemaps',
			content: html`
<p>Because your build tool sees every polyfill file, you can have sourcemaps.</p>
<p>This makes it easier to debug and report issues.</p>
`.trim()
		},
		{
			title: 'Control over updates',
			content: html`
<p>You can add your own safeguards and only update <strong>core-web</strong> when all your requirements are met.</p>
`.trim()
		},
		{
			title: 'Avoid conflicting polyfills',
			content: html`
<p><a href="https://github.com/zloirock/core-js" target="_blank" rel="noopener"><strong>core-js</strong></a> and <a href="https://polyfill.io/v3/" target="_blank" rel="noopener"><strong>Polyfill.io</strong></a> have overlapping polyfills.
We make sure you only get a single polyfill for each feature.</p>
`.trim()
		}
	]
}
