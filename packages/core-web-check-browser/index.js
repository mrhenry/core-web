#!/usr/bin/env node

const args = process.argv.slice(2);
const pkg = require('./package.json');
const UA = require('@financial-times/polyfill-useragent-normaliser');

const USAGE = 'Usage:\n' +
	'  core-web-check-browser\n' +
	'  core-web-check-browser --browser=chrome --browser-version=79\n';

function isArg (arg) {
	return args.some(function (str) {
		return str === arg || str.indexOf(arg + '=') === 0;
	})
}

function error (msg) {
	process.stderr.write('core-web-check-browser: ' + msg + '\n');
	process.exit(1);
}

if (isArg('--help') || isArg('-h')) {
	process.stdout.write(pkg.description + '.\n\n' + USAGE + '\n');
} else if (isArg('--version') || isArg('-v')) {
	process.stdout.write(pkg.name + ' ' + pkg.version + '\n');
} else {
	let browser = '';
	let version = '0';

	for (let i = 0; i < args.length; i++) {
		const arg = args[i].split('=');
		const name = arg[0];
		let value = arg[1];

		if (value) {
			value = value.replace(/^["']|["']$/g, '');
		}

		if (name === '--browser' || name === '-b') {
			browser = value;
		} else if (name === '--browser-version' || name === '-r') {
			version = value;
		} else {
			error('Unknown arguments ' + args[i] + '.\n\n' + USAGE);
		}
	}

	const ua = new UA(`${browser}/${version}`);
	if (ua.isUnknown()) {
		process.stdout.write('unknown browser : ' + browser + ' ' + version + '\n');
		process.stdout.write('!!! all detected features will be polyfilled !!!\n');
		process.stdout.write('main browser names are :\n');

		Object.keys(UA.getBaselines()).forEach((key) => {
			process.stdout.write('  - ' + key + '\n');
		});

	} else {
		process.stdout.write('browser family  : ' + ua.getFamily() + '\nbrowser version : ' + ua.getVersion() + '\n');
	}
}
