'use strict';

const fs = require('fs');
const path = require('path');
const html = require('../html/html');
const cssTags = require('../css/to-html');

const siteHeader = require('./templates/site-header');
const hero = require('./templates/hero');
const why = require('./templates/why');
const whys = require('./content/whys');
const siteFooter = require('./templates/site-footer');
const requirements = require('./templates/requirements');
const { coreWebCardOGImage } = require('../browser-compat/templates/polyfill-card-og-image');

module.exports = generate;

async function generate(assetMap) {
	fs.writeFileSync(
			path.join(__dirname, '../../dist/', 'og-image.jpg'),
			await coreWebCardOGImage()
	);
	
	fs.writeFileSync(path.join(__dirname, '../../dist/index.html'), html`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>core-web</title>
	<meta name="description" content="Bringing web polyfills to your babel flow.">
	<meta name="author" content="Mr. Henry">
	<meta name="publisher" content="Mr. Henry">
	<meta name="copyright" content="Mr. Henry">
	<meta name="robots" content="index,follow">
	<meta name="distribution" content="Global">
	<meta property="og:type" content="website">
	<meta property="og:title" content="core-web">
	<meta property="og:url" content="https://core-web.mrhenry.studio">
	<meta property="og:image:width" content="1200">
	<meta property="og:image:height" content="628">
	<meta property="og:image" content="https://core-web.mrhenry.studio/og-image.jpg">
	<meta property="og:image:alt" content="core-web : Automatically import polyfills">
	<meta property="og:site_name" content="core-web">
	<meta property="og:description" content="Bringing web polyfills to your babel flow.">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@wearemrhenry">
	<meta name="twitter:title" content="core-web">
	<meta name="twitter:description" content="Bringing web polyfills to your babel flow.">
	<meta name="twitter:image" content="https://core-web.mrhenry.studio/og-image.jpg">
	<meta name="twitter:image:alt" content="core-web : Automatically import polyfills">

	<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🕸</text></svg>">

	<link rel="preload" href="/fonts/Atkinson-Hyperlegible-Regular-102a.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href="/fonts/Atkinson-Hyperlegible-Bold-102a.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href="/fonts/Atkinson-Hyperlegible-BoldItalic-102a.woff2" as="font" type="font/woff2" crossorigin="anonymous" />

	${indexJsAndCss(assetMap)}
</head>
<body>
	<a
		class="skip-to-main-content-link"
		href="#main-content"
	>
		Skip to main content
	</a>

	<h1 class="u-visually-hidden">
		core-web
	</h1>

	${siteHeader([
		{
			title: 'installation',
			url: '/#installation'
		},
		{
			title: 'what',
			url: '/#what'
		},
		{
			title: 'why',
			url: '/#why'
		},
		{
			title: 'polyfills',
			url: '/polyfills/'
		},
		{
			title: 'github',
			url: 'https://github.com/mrhenry/core-web'
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
				<h2 id="installation">Installation</h2>

				<div class="card">
					<h3>Shell</h3>

					<pre><code>npm install --save-dev @mrhenry/babel-plugin-core-web</code></pre>
				</div>
			</div>
		</div>

		<div class="section">
			<div class="wrapper">
				<h2 id="usage">Usage</h2>

				<div class="card">
					<h3>Config</h3>
				
					<pre><span class="code-g">/* babel.config.js */</span>
<span class="code-a">module.exports</span> <span class="code-b">=</span> <span class="code-c">function</span>(<span class="code-d">api</span>) {
	<span class="code-a">api</span>.<span class="code-e">cache</span>(<span class="code-f">true</span>); <span class="code-g">/* optionally cache the config */</span>

	<span class="code-c">return</span> {
		<span class="code-d">plugins</span>: [
			<span class="code-g">// A custom browserslist config :</span>
			[<span class="code-h">"@mrhenry/core-web"</span>, {
				<span class="code-d">browserslist</span>: [
					<span class="code-h">"last 2 versions"</span>,
					<span class="code-h">">0.5%"</span>
				]
			}]
		]
	};
};</pre>
				</div>

				<p><i><a href="https://www.npmjs.com/package/@mrhenry/babel-plugin-core-web#install" target="_blank">See more example
					setups</a></i></p>
			</div>
		</div>

		<div class="section">
			<div class="wrapper">
				${why(whys)}
			</div>
		</div>

		<div class="section">
			<div class="wrapper">
				${requirements()}
			</div>
		</div>
	</main>

	${siteFooter()}
</body>
</html>
`);
}

function indexJsAndCss(assetMap) {
	if (process.env.GITHUB_ACTIONS) {
		return html`<meta name="ua-targets" content="2022 2021 2020 2018 2016 2014 2013 2011">
${cssTags(assetMap, 'index')}
`;
	}

	return html`
${cssTags(assetMap, 'index')}
`;
}
