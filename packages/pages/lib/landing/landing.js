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
</body>
</html>
`);
}

function indexJs() {
	if (process.env.GITHUB_ACTIONS) {
		return html`<meta name="ua-targets" content="2020 2019 2018 2014 legacy">
<script src="./index.2020.js" ua-target="2020"></script>
<script src="./index.2019.js" ua-target="2019"></script>
<script src="./index.2018.js" ua-target="2018"></script>
<script src="./index.2014.js" ua-target="2014"></script>
<script src="./index.legacy.js" ua-target="legacy"></script>
`;
	}

	return html`<script src="./index.js"></script>`;
}
