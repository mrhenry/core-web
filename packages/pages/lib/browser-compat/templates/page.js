const  html = require('../../html/html');
const siteHeader = require('../../landing/templates/site-header');
const hero = require('./hero');
const siteFooter = require('../../landing/templates/site-footer');


module.exports = function pageHTML(assetMap, tables) {
	return html`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🕸</text></svg>">
	<title>browser compat | core-web</title>
	${indexCss(assetMap)}
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
			title: 'what',
			url: '/#what'
		},
		{
			title: 'why',
			url: '/#why'
		},
		{
			title: 'roadmap to v1',
			url: '/#roadmap'
		}
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

function indexCss(assetMap) {
	if (process.env.GITHUB_ACTIONS) {
		return html`<meta name="ua-targets" content="2020 2018 2016 2014 2013 2011">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2020'].fullName}" ua-target="2020">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2018'].fullName}" ua-target="2018">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2016'].fullName}" ua-target="2016">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2014'].fullName}" ua-target="2014">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2013'].fullName}" ua-target="2013">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2011'].fullName}" ua-target="2011">
<link rel="stylesheet" href="/css/${assetMap.css['index']['2011'].fullName}" ua-target="fallback">
`;
	}

	return html`
<link rel="stylesheet" href="/css/${assetMap.css['index']['2020'].fullName}">
`;
}
