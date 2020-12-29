'use strict';
const assert = require('assert');
const { browsersToEngines } = require('..//browsers-to-engines/browsers-to-engines');

function testBrowsersToEngines(message, browsers, engines) {
	console.log(`browsersToEngines: ${message}`);
	try {
		assert.deepStrictEqual(browsersToEngines(browsers), engines);
	} catch (err) {
		console.log(err.message);
		process.exit(1);	
	}
}

const browsersToEnginesCases = [
	{
		message: "Blink 80",
		browsers: { "chrome": "80" },
		engines: { "Blink": "80 - 80" },
	},
	{
		message: "Blink *",
		browsers: { "chrome": "*" },
		engines: { "Blink": ">= 28" },
	},
	{
		message: "WebKit Desktop 10 + iOS 11",
		browsers: {
			"safari": "10",
			"ios_saf": "11"
		},
		engines: { "WebKit": "602.1.50 - 605.1.33" },
	},

	{
		message: "WebKit Desktop 10 + iOS 11.0",
		browsers: {
			"safari": "10",
			"ios_saf": "11.0"
		},
		engines: { "WebKit": "602.1.50 - 604.2.4" },
	},
	{
		message: "WebKit Desktop 10 + iOS *",
		browsers: {
			"safari": "10",
			"ios_saf": "*"
		},
		engines: { "WebKit": ">= 522.11" },
	},
	{
		message: "WebKit Desktop 8.0 + iOS 8.0",
		browsers: {
			"safari": "8.0",
			"ios_saf": "8.0"
		},
		engines: { "WebKit": "538.35 - 600.1.4" },
	},

	{
		message: "WebKit Desktop 10 - 12 + iOS 11.0 - 12.1",
		browsers: {
			"safari": "10 - 12",
			"ios_saf": "11.0 - 12.1"
		},
		engines: { "WebKit": "602.1.50 - 607.1.40" },
	},
	{
		message: "WebKit Desktop 10 - 12 + iOS *",
		browsers: {
			"safari": "10 - 12",
			"ios_saf": "*"
		},
		engines: { "WebKit": ">= 522.11" },
	},
	{
		message: "WebKit Desktop 8.0 - 9.1 + iOS 8.0 - 9.1",
		browsers: {
			"safari": "8.0 - 9.1",
			"ios_saf": "8.0 - 9.1"
		},
		engines: { "WebKit": "538.35 - 601.5.17" },
	},

	{
		message: "WebKit Desktop < 10 + iOS < 11.0",
		browsers: {
			"safari": "< 10.0",
			"ios_saf": "< 11"
		},
		engines: { "WebKit": "85 - 603.2.1" },
	},
	{
		message: "WebKit Desktop < 12 + iOS *",
		browsers: {
			"safari": "< 12",
			"ios_saf": "*"
		},
		engines: { "WebKit": ">= 85" },
	},
	{
		message: "WebKit Desktop <= 9.1 + iOS <= 9.1",
		browsers: {
			"safari": "<= 9.1",
			"ios_saf": "<= 9.1"
		},
		engines: { "WebKit": "85 - 601.5.17" },
	},
];

browsersToEnginesCases.forEach((testcase) => {
	testBrowsersToEngines(testcase.message, testcase.browsers, testcase.engines);
});

