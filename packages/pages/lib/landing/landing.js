'use strict';

const fs = require('fs');
const path = require('path');
const html = require('../html/html');

const siteHeader = require('./templates/site-header');
const hero = require('./templates/hero');
const roadmap = require('./templates/roadmap');
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
	<link rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🕸</text></svg>">
	<title>core-web</title>
	${indexJs()}
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
				${roadmap([
					{
						emoji: '🔨',
						type: 'past',
						title: 'Build it',
						description: html`<p>Yes, Yes, without the oops! Yes, Yes, without the oops! Do you have any idea how long it takes those cups to decompose.
						Must go faster. Remind me to thank John for a lovely weekend. You really think you can fly that thing? My dad once told
						me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!</p>`
					},
					{
						emoji: '🐛',
						type: 'past',
						title: 'Test it',
						description: html`<p>Test in production and use our unique insights to fix issues upstream.</p>`
					},
					{
						emoji: '🚀',
						type: 'current',
						title: '1Y in production',
						description: html`<p>Yes, Yes, without the oops! Yes, Yes, without the oops! Do you have any idea how long it takes those cups to decompose.
						Must go faster. Remind me to thank John for a lovely weekend. You really think you can fly that thing? My dad once told
						me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!</p>`
					},
					{
						emoji: '🔧',
						type: 'future',
						title: 'Stable API',
						description: html`<p>Remind me to thank John for a lovely weekend. Eventually, you do plan to have dinosaurs on your dinosaur tour, right?
						Checkmate... Yes, Yes, without the oops! Did he just throw my cat out of the window? What do they got in there? King
						Kong? Yes, Yes, without the oops!</p>`
					},
					{
						emoji: '🔮',
						type: 'future',
						title: 'V1 release',
						description: html`<p>Eventually, you do plan to have dinosaurs on your dinosaur tour, right? God creates dinosaurs. God destroys dinosaurs.
						God creates Man. Man destroys God. Man creates Dinosaurs. Do you have any idea how long it takes those cups to
						decompose. Must go faster... go, go, go, go, go!</p>`
					},
				])}
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
<script src="/index.2020.js" ua-target="2020"></script>
<script src="/index.2018.js" ua-target="2018"></script>
<script src="/index.2014.js" ua-target="2014"></script>
<script src="/index.2013.js" ua-target="2013"></script>
<script src="/index.legacy.js" ua-target="legacy"></script>
`;
	}

	return html`<script src="/index.2020.js"></script>`;
}
