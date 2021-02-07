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
		description: html`<ul style="margin: 0; padding-left: 1rem;"><li>it's in production</li><li>fixing bugs <a href="https://github.com/Financial-Times/polyfill-library/pulls?q=is%3Apr+is%3Amerged+author%3Aromainmenke" target="_blank" rel="noopener">upstream</a></li>`
	},
	{
		emoji: '🚀',
		type: 'past',
		title: '1Y in production',
	},
	{
		emoji: '🔧',
		type: 'current',
		title: 'Stable API',
		description: html`<p>We value your time and want to avoid costly migrations.<br>When we ship v1 we want to make sure it sticks.</p>`
	},
	{
		emoji: '🔮',
		type: 'future',
		title: 'V1 release',
	},
];
