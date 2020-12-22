const polyfillIoLink = require("../snippets/polyfill-io-link");
const html = require('../../html/html');

module.exports = {
	items: [
		{
			title: 'One less blocking http request',
			content: html`
Most visitors use a modern browser which doesn't need any polyfills.
Your site can be faster for most visitors by bundling polyfills.
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
Your code at any given commit will have the exact same output.
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
