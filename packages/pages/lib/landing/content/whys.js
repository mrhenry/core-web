const html = require('../../html/html');

module.exports = {
	items: [
		{
			title: 'Fully automatic',
			content: html`
<p>Needed polyfills are detected in your source code.</p>
<p>Just define your browser targets and start writing features.</p>
`.trim()
		},
		{
			title: 'One less blocking http request',
			content: html`
<p>Most visitors use a modern browser which doesn't need any polyfills.</p>
<p>Only your bundle(s) for older browsers will include polyfills, allowing you to optimize performance for modern browsers.</p>
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
<p>When an external polyfill provider changes or updates code they potentially introduce bugs (or unexpected fixes) impacting your code.</p>
<p>Packaging polyfills with your code adds an extra level of checks to prevent unwanted changes.</p>
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
			title: 'Avoid conflicting polyfills',
			content: html`
<p><a href="https://github.com/zloirock/core-js" target="_blank" rel="noopener"><strong>core-js</strong></a> and <a href="https://github.com/mrhenry/polyfill-library" target="_blank" rel="noopener"><strong>@mrhenry/polyfill-library</strong></a> have overlapping polyfills.
We make sure you only get a single polyfill for each feature.</p>
`.trim()
		}
	]
}
