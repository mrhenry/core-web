'use strict';

const fs = require('fs');
const path = require('path');

main();

async function main() {
	generate();
}

function generate() {
	fs.writeFileSync(path.join(__dirname, '../../dist/index.html'), `hello world!`);
}
