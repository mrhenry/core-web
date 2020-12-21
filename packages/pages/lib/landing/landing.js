'use strict';

const fs = require('fs');
const path = require('path');
const html = require('../html/html');

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
</head>
<body>
	hello

	<p ua-target="2020">No polyfills!</p>
	<p ua-target="2014">IntersectionObserver Polyfilled!</p>
</body>
</html>
`);
}

function indexJs() {
	if (process.env.GITHUB_ACTIONS) {
		return html`<meta name="ua-targets" content="2020 2014">
<script src="./index.2020.js" ua-target="2020"></script>
<script src="./index.2014.js" ua-target="2014"></script>
`;
	}

	return html`<script src="../lib/js/index.js"></script>`;
}
