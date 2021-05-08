'use strict';

const fs = require('fs');
const path = require('path');
const html = require('../html/html');

const siteHeader = require('./templates/site-header');
const hero = require('./templates/hero');
const why = require('./templates/why');
const whys = require('./content/whys');
const roadmap = require('./templates/roadmap');
const siteFooter = require('./templates/site-footer');
const requirements = require('./templates/requirements');

module.exports = generate;

function generate(assetMap) {
	fs.writeFileSync(path.join(__dirname, '../../dist/index.html'), html`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Bringing polyfill.io to your babel flow.">
	<meta name="author" content="Mr. Henry">
	<meta name="publisher" content="Mr. Henry">
	<meta name="copyright" content="Mr. Henry">
	<meta name="robots" content="index,follow">
	<meta name="distribution" content="Global">
	<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🕸</text></svg>">
	<title>core-web</title>
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
			${why(whys)}
			</div>
		</div>

		<div class="section">
			<div class="wrapper">
			${requirements()}
			</div>
		</div>

		<div class="section">
			<div class="wrapper">
				${roadmap()}
			</div>
		</div>

		<div class="polyfill-notification">
			<input
				aria-hidden="true"
				class="u-visually-hidden"
				hidden
				id="show-polyfill-content"
				type="checkbox"
			>

			<label
				aria-hidden="true"
				class="polyfill-notification__label"
				for="show-polyfill-content"
			>
				<span ua-target="2020">0 polyfills</span>
				<span ua-target="2018">1 polyfill</span>
				<span ua-target="2016">3 polyfill</span>
				<span ua-target="2014">6 polyfill</span>
				<span ua-target="2013">8 polyfills</span>
				<span ua-target="2011">9 polyfills</span>
				<span ua-target="fallback">no javascript</span>
			</label>

			<label
				aria-hidden="true"
				class="polyfill-notification__toggle"
				for="show-polyfill-content"
				data-closed="🐵"
				data-open="🙈"
			></label>

			<div class="polyfill-notification__content">
				${polyfillNotificationContent('2020', '0', [])}

				${polyfillNotificationContent('2018', '7', [
					'IntersectionObserver'
				])}

				${polyfillNotificationContent('2016', '7', [
					"DOMTokenList.prototype.forEach",
					"IntersectionObserver",
					"NodeList.prototype.forEach",
				])}

				${polyfillNotificationContent('2014', '9', [
					"DOMTokenList",
					"DOMTokenList.prototype.forEach",
					"IntersectionObserver",
					"NodeList.prototype.forEach",
					"performance.now",
					"requestAnimationFrame",
				])}
				
				${polyfillNotificationContent('2013', '13', [
					"DOMTokenList",
					"DOMTokenList.prototype.forEach",
					"Element.prototype.classList",
					"Event",
					"IntersectionObserver",
					"NodeList.prototype.forEach",
					"performance.now",
					"requestAnimationFrame",
				])}

				${polyfillNotificationContent('2011', '13', [
					"DOMTokenList",
					"DOMTokenList.prototype.forEach",
					"Element.prototype.classList",
					"Event",
					"IntersectionObserver",
					"NodeList.prototype.forEach",
					"Window",
					"performance.now",
					"requestAnimationFrame",
				])}

				${polyfillNotificationContent('fallback', '0', [])}
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
		return html`<meta name="ua-targets" content="2020 2018 2016 2014 2013 2011">
<script src="/js/${assetMap.js['index']['2020'].fullName}" ua-target="2020" async></script>
<script src="/js/${assetMap.js['index']['2018'].fullName}" ua-target="2018" async></script>
<script src="/js/${assetMap.js['index']['2016'].fullName}" ua-target="2016" async></script>
<script src="/js/${assetMap.js['index']['2014'].fullName}" ua-target="2014" async></script>
<script src="/js/${assetMap.js['index']['2013'].fullName}" ua-target="2013" async></script>
<script src="/js/${assetMap.js['index']['2011'].fullName}" ua-target="2011" async></script>

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
<script src="/js/${assetMap.js['index']['2020'].fullName}" async></script>

<link rel="stylesheet" href="/css/${assetMap.css['index']['2020'].fullName}">
`;
}

function polyfillNotificationContent(target, size, polyfills) {
	if (!polyfills.length) {
		return html`<p ua-target="${target}">0 polyfills loaded</p>`;
	}

	let wording = 'polyfills';

	if (polyfills.length === 1) {
		wording = 'polyfill';
	}

	return html`
<p ua-target="${target}">
	<span class="u-visually-hidden">
		${polyfills.length} ${wording} loaded:
	</span>

	${size}KB:<br>

	<ul>
		${ polyfills.map((polyfill) => { return html`<li title="${polyfill}">${polyfill}</li>` }).join('') }
	</ul>
</p>
`
}
