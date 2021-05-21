'use strict';

const fs = require('fs');
const path = require('path');

const generateLanding = require('./landing/landing');
const generateBrowserCompat = require('./browser-compat/browser-compat');
const generateE2E = require('./e2e/e2e');

async function main() {
	await generateLanding(
		getAssetMap()
	);

	await generateBrowserCompat(
		getAssetMap()
	);

	generateE2E();
}

try {
	main();
} catch (err) {
	console.log(err);
	process.exit(1);
}

function getAssetMap() {
	const out = {
		css: {},
		js: {},
	};

	const cssAssetRegExp = /^([-a-zA-Z0-9]+)\.([a-f0-9]{20})\.(.+?)\.css$/;
	fs.readdirSync(path.join(__dirname, '../dist/css/')).forEach((file) => {
		if (cssAssetRegExp.test(file)) {
			const match = cssAssetRegExp.exec(file);
			const sourceName = match[1];
			const hash = match[2];
			const target = match[3];

			if (!out.css[sourceName]) {
				out.css[sourceName] = {};
			}

			out.css[sourceName][target] = {
				fullName: file,
				sourceName: sourceName,
				hash: hash,
				target: target,
			}
		}
	});

	const jsAssetRegExp = /^([-a-zA-Z0-9]+)\.([a-f0-9]{20})\.(.+?)\.js$/;
	fs.readdirSync(path.join(__dirname, '../dist/js/')).forEach((file) => {
		if (jsAssetRegExp.test(file)) {
			const match = jsAssetRegExp.exec(file);
			const sourceName = match[1];
			const hash = match[2];
			const target = match[3];

			if (!out.js[sourceName]) {
				out.js[sourceName] = {};
			}

			out.js[sourceName][target] = {
				fullName: file,
				sourceName: sourceName,
				hash: hash,
				target: target,
			}
		}
	});

	return out;
}
