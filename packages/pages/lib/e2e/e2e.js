'use strict';

const fs = require('fs');
const path = require('path');
const html = require('../html/html');

module.exports = generate;

function generate() {
	if (!fs.existsSync(path.join(__dirname, '../../dist/e2e'))) {
		fs.mkdirSync(path.join(__dirname, '../../dist/e2e'), {recursive: true});
	}

	fs.writeFileSync(path.join(__dirname, '../../dist/e2e/index.html'), html`<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	<meta name="ua-targets" content="2020 2018 2016 2014 2013 fallback">
	<title>QUnit</title>
	<link rel="stylesheet" href="/css/qunit-2.9.2.css" />
</head>
<body>
	<div id="qunit"></div>
	<div id="qunit-fixture"></div>
	<script src="/js/qunit-2.9.2.js"></script>
	${e2eJS()}
</body>
</html>
`);
}

function e2eJS() {
	if (process.env.GITHUB_ACTIONS) {
		return html`
<script src="/js/e2e.2020.js" ua-target="2020"></script>
<script src="/js/e2e.2018.js" ua-target="2018"></script>
<script src="/js/e2e.2016.js" ua-target="2016"></script>
<script src="/js/e2e.2014.js" ua-target="2014"></script>
<script src="/js/e2e.2013.js" ua-target="2013"></script>
<script src="/js/e2e.fallback.js" ua-target="fallback"></script>
`;
	}

	return html`
<script src="/js/e2e.2020.js" ua-target="2020"></script>
`;
}
