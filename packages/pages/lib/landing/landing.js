'use strict';

const fs = require('fs');
const path = require('path');
const html = require('../html/html');

const siteHeader = require('./templates/site-header');
const hero = require('./templates/hero');
const siteFooter = require('./templates/site-footer');

main();

async function main() {
	generate();
}

function generate() {
	fs.writeFileSync(path.join(__dirname, '../../dist/index.html'), html`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	${indexJs()}
	<link rel="stylesheet" href="./style.css">
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
				<p ua-target="2020">No polyfills!</p>
				<p ua-target="2018">7KB - IntersectionObserver</p>
				<p ua-target="2014">7KB - IntersectionObserver</p>
				<p ua-target="2013">11KB - Event, IntersectionObserver, console, console.log, performance.now</p>
				<p ua-target="legacy">11KB - Event, IntersectionObserver, Window, console, console.log, performance.now</p>
			</div>
		</div>
	</main>

	${siteFooter()}
</body>
</html>
`);
}

function indexJs() {
	if (process.env.GITHUB_ACTIONS) {
		return html`<meta name="ua-targets" content="2020 2018 2014 2013 legacy">
<script src="./index.2020.js" ua-target="2020"></script>
<script src="./index.2018.js" ua-target="2018"></script>
<script src="./index.2014.js" ua-target="2014"></script>
<script src="./index.2013.js" ua-target="2013"></script>
<script src="./index.legacy.js" ua-target="legacy"></script>
`;
	}

	return html`<script src="./index.2020.js"></script>`;
}
