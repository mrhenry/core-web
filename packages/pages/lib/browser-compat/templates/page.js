const  html = require('../../html/html');
const siteHeader = require('../../landing/templates/site-header');
const hero = require('./hero');
const siteFooter = require('../../landing/templates/site-footer');


module.exports = function pageHTML(tables) {
	return html`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🕸</text></svg>">
	<title>browser compat | core-web</title>
	<link rel="stylesheet" href="/style.css">
</head>
<body>
	<a
		class="skip-to-main-content-link"
		href="#main-content"
	>
		Skip to main content
	</a>

	<h1 class="u-visually-hidden">
		browser compatibility
	</h1>

	${siteHeader([
		{
			title: 'what is core-web?',
			url: '/#what'
		},
		{
			title: 'why use core-web?',
			url: '/#why'
		},
		{
			title: 'roadmap',
			url: '/#roadmap'
		},
		{
			title: 'contact',
			url: '/#contact'
		},
	])}

	<main id="main-content">
		<div class="section">
			<div class="wrapper">
				${hero()}
			</div>
		</div>

		<div class="section">
			<div class="wrapper">
				${tables}

				<pre><code style="font-size:10px;">Last updated : ${ (new Date()).toString() }</code></pre>
			</div>
		</div>
	</main>

	${siteFooter()}
</body>
</html>
`;
}
