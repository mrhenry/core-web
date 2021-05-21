const  html = require('../../html/html');
const siteFooter = require('../../landing/templates/site-footer');
const { dotsWBR } = require('./dots-wbr');

module.exports = function allPolyfillsHTML(assetMap, features, sitemap) {
	return html`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>polyfills | core-web</title>
	<meta name="description" content="All included polyfills">
	<meta name="author" content="Mr. Henry">
	<meta name="publisher" content="Mr. Henry">
	<meta name="copyright" content="Mr. Henry">
	<meta name="robots" content="index,follow">
	<meta name="distribution" content="Global">
	<meta property="og:type" content="website">
	<meta property="og:title" content="polyfills | core-web">
	<meta property="og:url" content="https://core-web.mrhenry.studio/polyfills/">
	<meta property="og:image:width" content="1200">
	<meta property="og:image:height" content="628">
	<meta property="og:image" content="https://core-web.mrhenry.studio/polyfills/og-image.jpg">
	<meta property="og:site_name" content="core-web">
	<meta property="og:description" content="All included polyfills">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@wearemrhenry">
	<meta name="twitter:title" content="polyfills | core-web">
	<meta name="twitter:description" content="All included polyfills">
	<meta name="twitter:image" content="https://core-web.mrhenry.studio/polyfills/og-image.jpg">

	<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🕸</text></svg>">
	${indexCss(assetMap)}
</head>
<body>
	<a
		class="skip-to-main-content-link"
		href="#main-content"
	>
		Skip to main content
	</a>

	<div class="wrapper">
		<div class="site-header">
			<a
				class="logo"
				href="/"
			>
				core-web
			</a>

			<nav class="navigation">
				<ul class="navigation__list">
					<li class="navigation__list-item"><a href="/#what" class="navigation__link">what</a></li>
					<li class="navigation__list-item"><a href="/#why" class="navigation__link">why</a></li>
					<li class="navigation__list-item"><a href="/#roadmap" class="navigation__link">roadmap to v1</a></li>
					<li class="navigation__list-item"><a href="/polyfills/" class="navigation__link">polyfills</a></li>
					<li class="navigation__list-item"><a href="https://github.com/mrhenry/core-web" class="navigation__link" target="_blank" rel="noopener">github</a></li>
				</ul>
			</nav>
		</div>
	</div>

	<main id="main-content">
		<div class="section">
			<div class="wrapper">
				<h1>
					All polyfills
				</h1>

				<div class="polyfill-info">
					${allPolyfills(features, sitemap)}
				</div>
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

function allPolyfills(features, sitemap) {
	const list = features.map((feature) => {
		if (sitemap && sitemap[feature.name]) {
			return html`
		<li>
			<a href="${sitemap[feature.name].toLowerCase()}">${dotsWBR(cleanName(feature.name))}</a>
		</li>
	`;
		}

		return html`
		<li>
			${dotsWBR(cleanName(feature.name))}
		</li>
	`;
	});

	return html`
	<ul class="polyfill-info__list">
		${list.join('')}
	</ul>
	`;
}

function cleanName(str) {
	let out = str;
	if (out.indexOf('Console.') === 0) {
		out = out.replace('Console.', 'console.');
	}

	if (out.indexOf('Performance.') === 0) {
		out = out.replace('Performance.', 'performance.');
	}

	return out;
}
