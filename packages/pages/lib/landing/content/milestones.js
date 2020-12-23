const html = require('../../html/html');

module.exports = [
	{
		emoji: '🔨',
		type: 'past',
		title: 'Build it',
	},
	{
		emoji: '🐛',
		type: 'past',
		title: 'Test extensively',
		description: html`<p>We have been testing core-web in production.<br>Using our unique insights we have reporting and fixed a large amount of bugs <a href="https://github.com/Financial-Times/polyfill-library/pulls?q=is%3Apr+is%3Amerged+author%3Aromainmenke" target="_blank" rel="noopener">upstream</a>.</p>`
	},
	{
		emoji: '🚀',
		type: 'current',
		title: '1Y in production',
		description: html``
	},
	{
		emoji: '🔧',
		type: 'future',
		title: 'Stable API',
		description: html`<p>We value your time and want to avoid costly migrations.<br>When we ship v1 we want to make sure it sticks.</p>`
	},
	{
		emoji: '🔮',
		type: 'future',
		title: 'V1 release',
		description: html``
	},
];
