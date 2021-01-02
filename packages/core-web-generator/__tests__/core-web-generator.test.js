'use strict';
const assert = require('assert');
const { browsersToEngines } = require('../lib/browsers-to-engines/browsers-to-engines');

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

	// From polyfill-library

	{
		message: "HTMLPictureElement",
		browsers: {
			edge: "<13",
			edge_mob: "<13",
			ie: "*",
			ie_mob: "10 - *",
			firefox: "4 - 37",
			opera: "11.6 - 29", // incorrect config upstream?
			safari: "6 - 9",
			chrome: "* - 38", // incorrect config upstream?
			ios_saf: "* - 9.2",
			firefox_mob: "4 - 37",
			bb: "7 - 10",
			android: "<52", // incorrect config upstream?
		},
		engines: { 
			Blink: '28 - 38',
			EdgeHTML: '12 - 12',
			Gecko: '2 - 37',
			Presto: '>= 2.10',
			Trident: '>= 4.0',
			WebKit: '522.11 - 601.5.17',
		 },
	},

	{
		message: "Symbol.prototype.description",
		browsers: {
			edge: "13 - 18",
			edge_mob: ">= 13",
			safari: "9 - 12.1",
			chrome: "49 - 69",
			firefox: "36 - 62",
			firefox_mob: "36 - 62",
			ios_saf: "9 - 12.1",
			opera: "37 - 56",
			samsung_mob: "5 - 10.1",
		},
		engines: { 
			Blink: '49 - 69',
			EdgeHTML: '>= 13',
			Gecko: '36 - 62',
			WebKit: '601.1.56 - 607.1.40',
		 },
	},
];

browsersToEnginesCases.forEach((testcase) => {
	testBrowsersToEngines(testcase.message, testcase.browsers, testcase.engines);
});

