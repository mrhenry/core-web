'use strict';

const fs = require('fs');
const path = require('path');

main();

async function main() {
	generate();
}

function generate() {
	fs.truncateSync(path.join(__dirname, '../../dist/style.css'));
	fs.readdirSync(path.join(__dirname, './base/')).forEach((file) => {
		const filePath = path.join(__dirname, './base/' + file);
		if (fs.lstatSync(filePath).isFile()) {
			fs.appendFileSync(path.join(__dirname, '../../dist/style.css'), fs.readFileSync(filePath).toString());
		}
	});
	fs.readdirSync(path.join(__dirname, './layouts/')).forEach((file) => {
		const filePath = path.join(__dirname, './layouts/' + file);
		if (fs.lstatSync(filePath).isFile()) {
			fs.appendFileSync(path.join(__dirname, '../../dist/style.css'), fs.readFileSync(filePath).toString());
		}
	});
	fs.readdirSync(path.join(__dirname, './modules/')).forEach((file) => {
		const filePath = path.join(__dirname, './modules/' + file);
		if (fs.lstatSync(filePath).isFile()) {
			fs.appendFileSync(path.join(__dirname, '../../dist/style.css'), fs.readFileSync(filePath).toString());
		}
	});
}
